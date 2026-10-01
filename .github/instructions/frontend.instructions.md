---
name: Frontend React et Next.js
description: "Use when changing TSX pages, React components, responsive UI, accessibility, or client-side interactions in src/."
applyTo: "src/**/*.tsx"
---

# Règles frontend

- Suis les frontières de l'App Router et des composants Server/Client existants. Ajoute `"use client"` uniquement si l'interactivité ou une API navigateur l'exige.
- Réutilise les composants, hooks, icônes et conventions Tailwind déjà présents avant d'introduire une nouvelle abstraction ou dépendance.
- Préserve l'accessibilité: éléments HTML sémantiques, labels explicites, navigation clavier, états de focus et textes alternatifs utiles.
- Vérifie les états responsive, chargement, erreur et absence de données pertinents pour le composant modifié.
- Pour les images Next.js, respecte `next.config.ts` et les sources locales ou domaines déjà autorisés.
- Localise les tests auprès du comportement modifié en suivant les tests Jest et Testing Library existants; lance le test ciblé avant les validations plus larges.
