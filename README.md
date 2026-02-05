# Portfolio 2025 — Next.js + Convex + Tailwind

> Site personnel multifonction (landing portfolio, blog headless, back-office, CV en ligne) construit avec l'App Router de Next.js 15, Convex comme backend serverless et un design full Tailwind.

- Demo locale : `npm run dev` → `http://localhost:3000`
- Dashboard admin : `/admin/dashboard` (auth Convex + localStorage)
- Blog public : `/blog`
- Page CV & ressources : `/portfolio`

## Sommaire

1. [Fonctionnalités clés](#fonctionnalités-clés)
2. [Stack & prérequis](#stack--prérequis)
3. [Architecture rapide](#architecture-rapide)
4. [Installation](#installation)
5. [Variables d'environnement](#variables-denvironnement)
6. [Scripts npm](#scripts-npm)
7. [Lancer le projet](#lancer-le-projet)
8. [Gestion du contenu (Convex)](#gestion-du-contenu-convex)
9. [Tests & qualité](#tests--qualité)
10. [Déploiement](#déploiement)
11. [Roadmap & idées](#roadmap--idées)
12. [Contact](#contact)

## Fonctionnalités clés

| Zone            | Détails                                                                                                                                                                        |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Landing         | Sections Hero, À propos, Compétences, Projets (cards animées, data statique), formulaire de contact connecté à EmailJS.                                                        |
| Portfolio/CV    | Page `/portfolio` listant le CV en ligne + téléchargement PDF (`src/utils/cv.tsx`).                                                                                            |
| Blog public     | Liste des articles, détail `/blog/[slug]`, bouton de partage (Web Share API + fallback presse-papiers).                                                                        |
| Blog backend    | Convex (`convex/blog.ts`, `convex/createBlog.ts`) pour requêtes/insertions, hooks `useBlog` & `useBlogForm`.                                                                   |
| Admin dashboard | `/admin/dashboard` : navigation latérale, analytics (`Overview`), gestion/articles (`ArticlesBoard`), formulaire CRUD (`Formulaire`), team, settings, logout (`useConnexion`). |
| Auth légère     | Connexion admin via Convex `myConnexion`, persistance token/email dans `localStorage`.                                                                                         |
| Email & CTA     | EmailJS (`@emailjs/browser`) pour envoyer les messages issus de la section Contact.                                                                                            |

## Stack & prérequis

- Node.js ≥ 18
- npm ≥ 9 (ou pnpm/yarn adaptés)
- [Convex CLI](https://docs.convex.dev/cli) (`npm install -g convex` ou via `npx`)
- Compte EmailJS pour les clés publiques utilisées côté client
- Compte Vercel (ou équivalent) pour le déploiement Next.js

### Dépendances principales

| Front                   | Backend                        | DX                     |
| ----------------------- | ------------------------------ | ---------------------- |
| Next.js 15 (App Router) | Convex 1.31                    | TypeScript 5           |
| React 19                | Convex auth + mutations custom | Biome (lint+format)    |
| Tailwind CSS 4          | bcryptjs (hash admin)          | Jest + Testing Library |
| React Hook Form         |                                |                        |
| EmailJS browser SDK     |                                |                        |

## Architecture rapide

```
src/
├─ app/
│  ├─ page.tsx                # Landing → <Main />
│  ├─ blog/                   # Pages blog (listing + détail)
│  ├─ portfolio/              # Page CV/ressources
│  └─ admin/dashboard/        # Dashboard + vues UI
├─ components/
│  ├─ sections/               # Hero, About, Skills, Projects, Contact…
│  └─ layout/Main.tsx         # Composition des sections
├─ hooks/
│  ├─ useBlog.ts              # Query Convex blog
│  ├─ useBlogForm.ts          # Mutation création/màj (Convex)
│  └─ useConnexion.ts         # Auth admin (Convex myConnexion)
└─ utils/cv.tsx               # Données CV + download

convex/
├─ blog.ts                    # Query liste des articles
├─ createBlog.ts              # Mutation upsert d'articles
├─ myConnexion.ts             # Login admin (bcrypt + tokens)
├─ initAdmin.ts               # Script d'initialisation admin
└─ schema.ts                  # Définition des tables Convex
```

Des fichiers JSONL (`sampleBlogJso.jsonl`, `sampleAdminJson.jsonl`, `sampleJson.jsonl`) servent de seeds pour accélérer l'onboarding.

## Installation

```bash
git clone <repo>
cd portfolio
npm install
```

## Variables d'environnement

Créez un fichier `.env.local` à la racine de `portfolio/`.

| Clé                               | Description                                                |
| --------------------------------- | ---------------------------------------------------------- |
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID`  | ID de service EmailJS.                                     |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | Template utilisé pour le formulaire de contact.            |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`  | Clé publique EmailJS.                                      |
| `CONVEX_DEPLOYMENT` _(optionnel)_ | Pointage vers un déploiement Convex distant lors du build. |

> Les secrets côté Convex (hash admin, etc.) sont gérés via le dashboard Convex ou `.env` côté serveur Convex.

## Scripts npm

| Commande         | Description                         |
| ---------------- | ----------------------------------- |
| `npm run dev`    | Lance Next.js en mode dev.          |
| `npm run build`  | Build production Next.js.           |
| `npm run start`  | Démarre le serveur Next.js compilé. |
| `npm run lint`   | Vérifie la qualité via Biome.       |
| `npm run format` | Formate tout le code avec Biome.    |
| `npm test`       | Suite Jest + Testing Library.       |

## Lancer le projet

1. **Convex (API + DB)**

   ```bash
   npx convex dev
   ```

   - configure un déploiement local (http://localhost:Convex)
   - hot reload des mutations/queries dans `/convex`

2. **Front Next.js** (nouveau terminal)
   ```bash
   npm run dev
   ```
   → http://localhost:3000, routes App Router actives.

> Pour tester sans Convex, préparez un `CONVEX_DEPLOYMENT` pointant vers un projet déjà seedé.

## Gestion du contenu (Convex)

### 1. Importer des exemples d'articles

```bash
npx convex import --table blog sampleBlogJso.jsonl
```

### 2. Initialiser l'utilisateur admin

```bash
npx convex run initAdmin:createAdmin \
  --pseudo "admin" \
  --firstName "Ikeda" \
  --lastName "Koffi" \
  --email "admin@example.com" \
  --password "MotDePasseFort42!" \
  --role "superadmin"
```

Une fois connecté via `/admin/dashboard/connexion`, la session est persistée en localStorage (`auth_token`, `auth_user`).

### 3. Créer / mettre à jour un article

- Via l'UI (`Formulaire.tsx` utilisant `useBlogForm`).
- Ou côté CLI : `npx convex run createBlog:createBlog --title "..."` etc.

## Tests & qualité

- **Jest + Testing Library** (`npm test`) pour les composants React/Next.
- **Biome** pour lint + format (`npm run lint`, `npm run format`).
- Suggestion : ajouter des tests ciblant les hooks (`useBlog`, `useConnexion`) et les fonctions Convex critiques.

## Déploiement

1. **Frontend (Vercel recommandé)**
   - Push sur GitHub/GitLab.
   - Connecter le repo à Vercel → build automatique (`next build`).
   - Définir les variables `NEXT_PUBLIC_EMAILJS_*` dans l'UI Vercel.

2. **Backend Convex**
   - `npx convex deploy` pour promouvoir les fonctions.
   - Configurer les secrets Convex (hash admin, tokens) via `convex dashboard`.
   - Mettre à jour Vercel avec `CONVEX_DEPLOYMENT` si vous n'utilisez pas le preview par défaut.

3. **Vérifications post-déploiement**
   - Tester `/blog` et `/blog/[slug]` (données s'affichent bien).
   - Vérifier la connexion admin et la persistance de session.
   - Tester EmailJS (service/template disponibles en prod).

## Roadmap & idées

1. Rendu Markdown enrichi (remark/rehype + code blocks).
2. Auth sécurisée (JWT/NextAuth, rôles multiples, 2FA).
3. Éditeur riche côté admin (MDX, upload images via Convex storage).
4. Pagination/SEO pour le blog + flux RSS.
5. Mode sombre global synchronisé avec le dashboard.

## Contact

Envie de contribuer, suggérer des features ou poser une question ? Ouvrez une issue, créez une PR ou contactez-moi via le formulaire `/#contact` qui enverra directement un email via EmailJS ✉️

---

Dernière mise à jour : Février 2026.
