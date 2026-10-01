---
name: Backend Convex
description: "Use when changing Convex tables, schema validators, queries, mutations, actions, authentication, or generated API callers."
applyTo: "convex/**/*.ts"
---

# Règles Convex

- Vérifie `convex/shema.ts` et les validateurs concernés avant de modifier une query ou mutation.
- Garde arguments et valeurs de retour validés avec les conventions Convex existantes; vérifie les appelants TypeScript impactés.
- Ne modifie pas manuellement `convex/_generated/`; utilise les commandes et types générés par Convex lorsque cela est nécessaire.
- Préserve les frontières serveur/client et ne place jamais de secret dans du code client ou une variable `NEXT_PUBLIC_*`.
- N'exécute pas `npx convex deploy`, n'importe pas de données et ne change pas un déploiement sans demande explicite.
- Cherche des tests voisins avant d'en ajouter. S'il n'existe pas de test adapté, indique quelles vérifications locales, lint ou build ont été faites et les limites restantes.
