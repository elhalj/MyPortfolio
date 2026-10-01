# Guide des contextes et orchestrations IA

Ce guide explique comment organiser les personnalisations de GitHub Copilot dans VS Code, pour ce dépôt ou pour plusieurs projets. Il couvre les instructions, agents, prompts, skills, hooks et serveurs MCP, ainsi que leurs usages et leurs limites.

> Ce fichier est une documentation pour les personnes. Copilot ne le charge pas automatiquement : reliez-le depuis un fichier d’instructions ou un agent si vous voulez qu’il s’en serve pendant une tâche.

## Choisir le bon mécanisme

| Besoin                                                | Mécanisme               | Emplacement de workspace                         | Comment il s’applique                                                     |
| ----------------------------------------------------- | ----------------------- | ------------------------------------------------ | ------------------------------------------------------------------------- |
| Rappeler les règles communes à toutes les tâches      | Instructions du dépôt   | `.github/copilot-instructions.md` ou `AGENTS.md` | Chargées automatiquement dans le workspace                                |
| Appliquer des règles à certains fichiers              | Instructions ciblées    | `.github/instructions/*.instructions.md`         | Automatiquement par glob `applyTo`, à la demande, ou ajoutées au contexte |
| Donner un rôle, des outils et des limites à l’IA      | Agent personnalisé      | `.github/agents/*.agent.md`                      | Choisi dans le sélecteur d’agents; peut aussi servir de sous-agent        |
| Réutiliser une consigne pour une tâche ponctuelle     | Prompt                  | `.github/prompts/*.prompt.md`                    | Lancé depuis le chat avec `/` ou la palette de commandes                  |
| Décrire une procédure spécialisée en plusieurs étapes | Skill                   | `.github/skills/<nom>/SKILL.md`                  | Découverte et chargée à la demande; peut inclure scripts et références    |
| Exécuter ou bloquer une action de façon déterministe  | Hook                    | `.github/hooks/*.json`                           | Lancé sur un événement du cycle de vie de l’agent                         |
| Donner accès à des outils ou données externes         | Serveur MCP             | `.mcp.json` ou `.vscode/mcp.json`                | Ses outils, ressources ou prompts deviennent disponibles dans le chat     |
| Expliquer le projet aux personnes                     | README ou documentation | `README.md`, `README-IA.md`, `docs/`             | Non chargé automatiquement, sauf si référencé ou joint au contexte        |

Ces mécanismes se complètent. Une bonne règle pratique : instructions courtes et durables, prompts pour les demandes répétées simples, skills pour les procédures, agents pour les rôles distincts, hooks pour les contrôles qui ne doivent pas dépendre de l’interprétation du modèle, MCP pour les intégrations externes.

## Où ranger les fichiers

Les fichiers de workspace sont versionnés avec le dépôt et partagés avec l’équipe. C’est le bon choix pour les conventions et workflows propres à un projet.

```text
.github/
  copilot-instructions.md
  agents/
    portfolio-orchestrator.agent.md
    portfolio-developer.agent.md
    frontend-specialist.agent.md
    convex-specialist.agent.md
    code-reviewer.agent.md
    git-publisher.agent.md
  instructions/
    frontend.instructions.md
    convex.instructions.md
  workflows/
README-IA.md
```

Les personnalisations de profil utilisateur sont utiles pour des préférences ou agents réutilisables dans plusieurs dépôts. VS Code propose l’éditeur **Chat: Open Customizations** et des emplacements utilisateur; les chemins disponibles peuvent dépendre du type de session (Local ou Agent Host). Évitez d’y placer une règle qui ne concerne qu’un seul projet.

## 1. Instructions toujours actives

Utilisez `.github/copilot-instructions.md` pour les quelques règles importantes qui s’appliquent à presque tout le code du dépôt : architecture, commandes de validation, conventions inhabituelles et précautions de sécurité.

```markdown
# Instructions du projet

- Vérifie les composants et tests voisins avant de modifier une fonctionnalité.
- Garde les changements localisés et suis les conventions déjà utilisées.
- Lance le test ciblé, puis `npm run lint` si le changement le justifie.
- Ne lis, n’affiche et ne committe jamais les secrets de `.env.local`.
```

`AGENTS.md` est une autre option reconnue, notamment pour des règles hiérarchiques dans un monorepo. Pour une règle de dépôt, choisissez **soit** `.github/copilot-instructions.md`, **soit** `AGENTS.md`; ne dupliquez pas les mêmes instructions dans les deux. Gardez ce fichier concis : une longue documentation est mieux placée ailleurs et liée depuis les instructions.

## 2. Instructions ciblées par fichiers

Utilisez `.github/instructions/` pour une règle pertinente seulement dans une partie du dépôt. Le frontmatter `applyTo` accepte un glob ou plusieurs globs; `description` sert à la découverte à la demande.

```markdown
---
name: Convex Backend
description: Use when editing Convex schema, queries, mutations, or generated API types.
applyTo: "convex/**"
---

# Règles Convex

- Vérifie les validateurs du schéma et les appels qui dépendent de la fonction modifiée.
- Ne modifie pas manuellement les fichiers générés sans raison vérifiée.
```

Sans `applyTo`, l’instruction peut être chargée à la demande selon sa description ou ajoutée manuellement au contexte. Évitez `applyTo: "**"` sauf si le contenu s’applique réellement à chaque fichier; sinon, cela consomme du contexte inutilement.

## 3. Agents personnalisés

Un agent est un rôle réutilisable avec une mission et éventuellement un jeu d’outils réduit. Le fichier `.github/agents/portfolio-developer.agent.md` de ce dépôt est un exemple opérationnel.

```markdown
---
name: Reviewer
description: "Use to review code changes for correctness, regressions, and missing tests."
tools: [read, search]
user-invocable: true
---

Tu es un agent de revue. N’édite aucun fichier. Rapporte d’abord les problèmes concrets,
classés par gravité, avec les fichiers concernés et les tests manquants.
```

Sélectionnez l’agent dans le menu **Agent** de la vue Chat. Pour une revue, n’accordez pas l’outil d’édition si le rôle doit rester en lecture seule. Le champ `description` doit nommer les tâches et mots-clés permettant de découvrir le bon agent.

### Orchestrer plusieurs agents

Une orchestration simple peut séparer planification, implémentation et revue :

1. Un agent planificateur, limité à la lecture et à la recherche, propose les fichiers et étapes concernés.
2. L’utilisateur examine le plan et le transmet à l’agent d’implémentation.
3. L’agent de revue examine le diff et les tests sans modifier le code.
4. L’agent d’implémentation corrige les problèmes retenus et relance les validations.

Les agents peuvent proposer une transition par `handoffs` dans leur frontmatter :

```yaml
handoffs:
    - label: Passer à l’implémentation
      agent: portfolio-developer
      prompt: Implémente le plan ci-dessus et lance les tests ciblés.
      send: false
```

Le nom de l’agent cible doit correspondre à un agent disponible. Un handoff prépare une transition avec le contexte et un prompt; il n’est pas à lui seul une garantie qu’une chaîne complète s’exécutera sans supervision. `send: true` soumet automatiquement le prompt de transition. Pour une délégation par un agent parent, autorisez l’outil `agent` et, si nécessaire, limitez les sous-agents permis avec `agents`.

Utilisez cette orchestration quand les rôles ont des responsabilités ou permissions réellement différentes. Pour une tâche linéaire unique, un seul agent avec une bonne consigne est plus simple.

## 4. Prompts réutilisables

Un fichier `.github/prompts/*.prompt.md` décrit une tâche unique qu’on répète : créer une fonctionnalité, rédiger une note de version ou générer des tests. Les prompts apparaissent généralement après avoir saisi `/` dans le chat.

```markdown
---
name: Add Feature
description: Add a small feature following the existing project patterns.
argument-hint: Describe the feature and acceptance criteria
agent: Portfolio Developer
---

Pour la fonctionnalité suivante : ${input:feature:Décris la fonctionnalité}

1. Repère le code qui décide déjà de ce comportement et un test voisin.
2. Implémente le changement le plus limité qui satisfait les critères.
3. Ajoute ou ajuste un test ciblé et lance-le.
4. Résume les fichiers changés et les validations effectuées.
```

Un prompt est un modèle de tâche, pas un manuel complet ni un rôle permanent. Référencez les règles partagées au lieu de les recopier dans chaque prompt.

## 5. Skills pour les procédures spécialisées

Une skill rassemble une procédure qui mérite plusieurs étapes, ressources ou scripts. Sa description aide Copilot à savoir quand la charger; `SKILL.md` explique comment la suivre.

```markdown
---
name: release-checklist
description: Prepare and validate a project release. Use before tagging or deploying a release.
---

# Préparer une livraison

1. Vérifie le diff et les changements non commités.
2. Lance les tests et le build prévus par le projet.
3. Vérifie les notes de version et les migrations nécessaires.
4. Rapporte les résultats; ne déploie pas sans demande explicite.
```

Rangez les scripts et ressources associés dans le même dossier, par exemple `scripts/`, `references/` ou `assets/`. Les skills et les prompts peuvent tous deux être lancés depuis `/`; choisissez une skill quand il s’agit d’un workflow spécialisé réutilisable, pas d’une simple consigne ponctuelle.

## 6. Hooks pour automatiser et faire respecter une règle

Les instructions demandent au modèle de faire quelque chose; un hook exécute une commande sur un événement défini. Utilisez-le lorsqu’un contrôle doit être systématique, par exemple valider un outil avant son exécution ou lancer une vérification après une modification.

Exemple de structure pour `.github/hooks/hooks.json` :

```json
{
    "hooks": {
        "PostToolUse": [
            {
                "type": "command",
                "command": "npm run lint",
                "timeout": 30
            }
        ]
    }
}
```

Les événements disponibles comprennent `SessionStart`, `UserPromptSubmit`, `PreToolUse`, `PostToolUse`, `PreCompact`, `SubagentStart`, `SubagentStop` et `Stop`. Les hooks peuvent recevoir/renvoyer des données JSON et, selon l’événement, autoriser, demander confirmation ou bloquer une action. Commencez par des hooks courts, testables et faciles à auditer; ne lancez pas toute la suite de tests après chaque outil si le coût bloque le travail. Les hooks au niveau d’un agent ont des exigences de support différentes; vérifiez la documentation de la session utilisée.

## 7. MCP pour connecter des outils et des données

MCP (Model Context Protocol) relie le chat à des serveurs qui exposent des outils, ressources ou prompts, par exemple une API, une base de données ou un navigateur. Ce n’est pas un fichier d’instructions : c’est une intégration.

Pour un fichier portable au niveau du workspace, VS Code documente `.mcp.json` avec une propriété racine `mcpServers`. `.vscode/mcp.json` est également pris en charge dans le format VS Code avec une propriété racine `servers`.

```json
{
    "mcpServers": {
        "example": {
            "command": "npx",
            "args": ["-y", "<package-du-serveur-mcp>"]
        }
    }
}
```

Remplacez le paquet d’exemple par un serveur fiable et consultez ses instructions d’installation. Vérifiez les commandes avant de faire confiance à un serveur local : il peut exécuter du code sur votre machine. Ne mettez jamais de clé API ou de secret directement dans un fichier versionné; utilisez les mécanismes d’entrées sécurisées ou variables d’environnement documentés par le serveur. Après configuration, démarrez le serveur depuis la vue Extensions (MCP SERVERS) ou la palette, puis choisissez les outils nécessaires dans le chat.

## Configuration conseillée pour ce dépôt

La configuration proposée pour ce dépôt distingue les rôles suivants :

| Fichier                           | Rôle principal                                                             | Quand le choisir                                                   |
| --------------------------------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| `portfolio-orchestrator.agent.md` | Analyser une demande, proposer les étapes et router vers un agent autorisé | Tâche multi-domaines ou besoin d’orchestration                     |
| `portfolio-developer.agent.md`    | Implémenter une évolution full-stack cohérente                             | Changement traversant l’interface et le backend, ou tâche courante |
| `frontend-specialist.agent.md`    | Modifier les pages, composants et interactions React/Next.js               | Travail principalement visuel ou côté client                       |
| `convex-specialist.agent.md`      | Modifier schéma, queries, mutations et intégration Convex                  | Travail principalement backend ou données                          |
| `code-reviewer.agent.md`          | Rechercher bugs, régressions et lacunes de tests sans modifier le code     | Revue indépendante avant intégration                               |
| `git-publisher.agent.md`          | Vérifier et pousser les commits vers l'upstream Git configuré              | Publication d'une branche déjà commitée                            |

Les règles communes sont dans `.github/copilot-instructions.md`; les instructions ciblées complètent celles-ci pour le JSX/TSX et le backend Convex. Les agents spécialisés restent sélectionnables dans le menu Agent. L’orchestrateur est surtout utile pour choisir le bon rôle et proposer un handoff; l’utilisateur garde la décision de poursuivre.

Les fichiers de prompt, skills, hooks et MCP restent optionnels et ne sont pas nécessaires pour démarrer cette configuration. Ajoutez-les uniquement lorsqu’un prompt répétitif, une procédure en plusieurs étapes, un contrôle obligatoire ou un outil externe concret le justifie.

Gardez `README.md` comme documentation utilisateur du produit et ce fichier comme guide de personnalisation IA. Évitez de maintenir les mêmes détails techniques dans plusieurs fichiers : mettez les instructions courtes dans leur fichier actif et liez vers la documentation de référence.

## Utiliser et diagnostiquer dans VS Code

- **Agent** : ouvrez Chat, sélectionnez l’agent dans le menu Agent, puis décrivez la tâche. Un agent de workspace est aussi disponible dans le sélecteur lorsqu’il est destiné à l’utilisateur.
- **Prompt ou skill** : saisissez `/` dans le chat, choisissez le nom, puis fournissez les paramètres demandés.
- **Instruction ciblée** : vérifiez que les fichiers ouverts correspondent à `applyTo`; sinon, ajoutez l’instruction au contexte avec **Add Context**.
- **MCP** : démarrez le serveur depuis la palette de commandes (`MCP: List Servers`) ou la vue MCP, puis consultez ses outils dans la configuration des outils du chat.
- **Diagnostic** : utilisez la vue ou l’éditeur **Chat: Open Customizations** pour consulter les personnalisations disponibles et leurs erreurs; vérifiez aussi le frontmatter YAML et le chemin du fichier.

Pour une personnalisation qui ne se charge pas, vérifiez d’abord le nom et l’emplacement attendus, le frontmatter YAML, la description, les globs `applyTo`, le type de session (Local ou Agent Host) et les permissions d’outils. Les serveurs MCP nécessitent en plus d’être démarrés et approuvés.

## Documentation officielle

- [Personnaliser les instructions](https://code.visualstudio.com/docs/copilot/customization/custom-instructions)
- [Créer et utiliser des agents personnalisés](https://code.visualstudio.com/docs/copilot/customization/custom-agents)
- [Fichiers de prompts](https://code.visualstudio.com/docs/copilot/customization/prompt-files)
- [Agent Skills](https://code.visualstudio.com/docs/copilot/customization/agent-skills)
- [Hooks](https://code.visualstudio.com/docs/copilot/customization/hooks)
- [Serveurs MCP](https://code.visualstudio.com/docs/copilot/customization/mcp-servers)
