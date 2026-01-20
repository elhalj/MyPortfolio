# Portfolio — Next.js + Convex

Ce dépôt contient mon site portfolio personnel construit avec Next.js (App Router) et Convex pour la gestion des données (blog). Le projet présente : une page d'accueil, une section portfolio, et un blog dynamique alimenté par Convex.

## Technologies principales

- Next.js (App Router)
- React + TypeScript
- Convex (base de données & fonctions serveur)
- Tailwind CSS pour le style

## Fonctionnalités

- Listing d'articles de blog (page `/blog`).
- Pages d'articles dynamiques via `src/app/blog/[slug]/`.
- Utilisation de Convex pour stocker et récupérer les articles.
- Bouton de partage (API Web Share + fallback copie dans le presse-papier).

## Structure importante

- `src/app/` : routes et pages (App Router)
  - `src/app/blog/` : pages du blog
  - `src/app/blog/[slug]/` : page article dynamique et client wrapper
- `src/components/` : composants réutilisables (Header, Footer, Loader, ...)
- `src/hooks/useBlog.ts` : hook client pour récupérer les articles via `api.blog.get`
- `convex/` : fonctions côté Convex (modules `blog.ts`, `tasks.ts`)

## Exemples de fichiers clés

- `src/app/blog/page.tsx` : server wrapper (exporte `metadata`) qui rend un composant client `BlogPageClient`.
- `src/app/blog/BlogPageClient.tsx` : composant client qui utilise `useBlog`.
- `src/app/blog/[slug]/page.tsx` : server wrapper qui passe `slug` à `BlogPostClient`.
- `src/app/blog/[slug]/BlogPostClient.tsx` : client component qui affiche un article et propose un bouton de partage.

## Installation et développement

1. Installer les dépendances :

```bash
npm install
```

2. Lancer Convex (si vous utilisez l'environnement de développement Convex) :

```bash
# Dans un terminal séparé
npx convex dev
```

3. Lancer l'application Next.js :

```bash
npm run dev
```

Ouvrez ensuite `http://localhost:3000`.

## Importer des données d'exemple (blog)

Un fichier d'exemple (`sampleBlogJso.jsonl`) est présent dans le repo. Pour importer les posts dans votre table Convex `blog` :

```bash
npx convex import --table blog sampleBlogJso.jsonl
```

Si l'import échoue, vérifiez que `npx convex dev` est en cours et que la table `blog` existe.

## Développement & remarques Next.js

- Si vous exportez `metadata` dans un fichier de page, assurez-vous que ce fichier n'a pas la directive `"use client"` (les exports comme `metadata` doivent rester côté serveur).
- Séparez la logique server/client : extraire `slug` côté server et passer la valeur aux composants client évite les avertissements liés aux `params` Promise.

## Déploiement

Le déploiement le plus simple pour un projet Next.js est Vercel :

1. Poussez votre repo sur GitHub/GitLab.
2. Connectez-le à Vercel et déployez.

Vercel détecte automatiquement Next.js et configure le build.

## Améliorations possibles

- Rendu Markdown des articles (remark/rehype).
- Pagination, recherche et filtres pour le blog.
- Système d'édition d'articles depuis une interface admin (avec authentification).

## Commandes utiles

- `npm run dev` — lance l'app Next.js en dev
- `npx convex dev` — démarre Convex en local
- `npx convex import` — importer des données JSONL dans une table Convex

## Aide / Contact

Si vous voulez que j'ajoute le rendu Markdown, améliore le style du bouton de partage, ou que je configure une route Convex pour récupérer un article par `slug`, dis-le-moi et je m'en occupe.

---

Fichier `README.md` mis à jour pour refléter l'architecture et les commandes de développement.
