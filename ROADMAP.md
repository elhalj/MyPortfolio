Voici une feuille de route concrète pour chaque idée listée, avec objectifs techniques, dépendances et prochaines actions :

1. **Rendu Markdown enrichi**
   - Objectif : permettre d’écrire les articles en .md/.mdx et supporter titres, code blocks, images.
   - Implémentation :
     - Ajouter `remark` + `rehype` (ex. `remark-gfm`, `rehype-highlight`).
     - Stocker le contenu Markdown dans Convex (`content` brut) et parser côté client via `next-mdx-remote` ou `react-markdown`.
     - Fallback SSR : générer l’HTML côté serveur dans `/blog/[slug]/page.tsx` pour SEO.
   - Actions rapides : installer les packages, créer un composant `MarkdownRenderer`, migrer un article existant.

2. **Auth sécurisée (JWT/NextAuth, rôles, 2FA)**
   - Objectif : passer d’un login custom localStorage à une auth robuste.
   - Implémentation :
     - Introduire NextAuth (providers email/password ou OAuth) ou Auth.js et synchroniser avec Convex (webhooks ou tokens signés).
     - Créer une table `users` avec rôles (`superadmin`, `editor`, etc) et policies dans Convex.
     - Ajouter 2FA (ex. TOTP) ou OTP email via Convex function.
   - Actions : choisir provider, définir modèle utilisateur, migrer [useConnexion](cci:1://file:///home/elhalj/Documents/Devs/Projets/Portfolio/portfolio/src/hooks/useConnexion.ts:6:0-82:2) pour consommer les nouvelles sessions, sécuriser les routes admin (middleware).

3. **Éditeur riche côté admin**
   - Objectif : proposer une expérience de rédaction WYSIWYG/MDX.
   - Implémentation :
     - Intégrer un éditeur (TipTap, Lexical, React-Quill). Pour MDX, TipTap + extensions custom.
     - Gérer upload image via Convex storage (`ctx.storage.generateUploadUrl`).
     - Sauvegarder à la fois contenu brut + rendu (HTML/JSON) pour prévisualisation.
   - Actions : créer composant `<RichTextEditor>` dans `Formulaire`, ajouter prévisualisation live et pipeline upload (Convex mutation + URL signée).

4. **Pagination/SEO + RSS**
   - Objectif : améliorer performances/blog marketing.
   - Implémentation :
     - Pagination côté serveur (`limit`, `cursor`) via Convex query.
     - Ajouter paramètres /blog?page=… + composants `Pagination`.
     - SEO : enrichir `metadata` (OG tags, JSON-LD) & sitemap dynamique.
     - RSS/Atom : route `/rss.xml` générant flux depuis Convex (Edge route).
   - Actions : écrire nouvelle query Convex avec tri, créer API route pour RSS, mettre à jour page blog pour consommer la pagination.

5. **Mode sombre global synchronisé avec dashboard**
   - Objectif : offrir thème clair/sombre cohérent front + admin.
   - Implémentation :
     - Stocker préférence (localStorage + CSS `data-theme`).
     - Utiliser `next-themes` ou implémentation maison (context + `class` sur `<html>`).
     - Harmoniser Tailwind via `dark:` partout, y compris dashboard.
   - Actions : ajouter toggler dans layout, migrer palettes existantes, tester compatibilité animations/contrastes.

### Prochaines étapes globales

1. Prioriser Markdown + pagination (impact direct sur le blog public).
2. En parallèle, préparer la refonte auth (prérequis pour permissions éditeur riche).
3. Planifier le mode sombre une fois palettes définies pour les nouvelles features.
