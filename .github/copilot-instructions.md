# Instructions du projet

Ces règles s'appliquent à toutes les tâches de ce dépôt. Pour les détails des personnalisations IA et leur utilisation, consultez [README-IA.md](../README-IA.md).

## Contexte

- Application personnelle construite avec Next.js 15 App Router, React 19, TypeScript, Tailwind CSS 4 et Convex.
- Les routes sont dans `src/app/`, les composants partagés dans `src/components/`, les fonctionnalités et hooks dans `src/features/`, les utilitaires partagés dans `src/shared/`, et les fonctions backend dans `convex/`.
- Le schéma Convex se trouve actuellement dans `convex/shema.ts`; ne le renomme pas dans le cadre d'une tâche sans nécessité explicite.

## Règles de travail

- Lis le code et les tests voisins avant de modifier le comportement; privilégie le code actuel à la documentation qui pourrait être obsolète.
- Fais le changement le plus ciblé qui répond à la demande et conserve les conventions en place.
- Ne lis, n'affiche, ne copie et ne committe jamais de secrets provenant de `.env` ou `.env.local`.
- N'édite pas manuellement les fichiers générés dans `convex/_generated/` sans raison technique vérifiée.
- Ne déploie pas et ne lance pas de migration ou d'opération destructive sans demande explicite.

## Validation

- Lance d'abord le test Jest le plus ciblé disponible.
- `npm test -- --runInBand <chemin-du-test>` lance un test ciblé; `npm test` lance la suite.
- `npm run lint` exécute Biome. Lance `npm run build` pour les changements d'intégration ou de compilation de production.
- La CI exécute les tests, le lint, puis le build. Rapporte les validations effectuées et celles qui restent à faire.
