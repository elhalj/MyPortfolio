# Configuration SEO du Portfolio

Ce document décrit la configuration SEO mise en place pour le portfolio et comment la maintenir.

## Structure des fichiers SEO

- `src/components/SEO.jsx` - Composant React pour gérer les balises meta dynamiques
- `src/config/meta.js` - Fichier de configuration des métadonnées du site
- `public/robots.txt` - Fichier pour les directives des robots d'indexation
- `public/sitemap.xml` - Sitemap généré automatiquement
- `public/manifest.json` - Configuration pour les PWA
- `public/browserconfig.xml` - Configuration pour les tuiles Windows 8/10
- `public/*.png` - Icônes pour différents appareils et plateformes

## Comment utiliser le composant SEO

Importez et utilisez le composant SEO dans vos pages :

```jsx
import SEO from './components/SEO';

function MaPage() {
  return (
    <>
      <SEO 
        title="Titre de la page"
        description="Description de la page"
        keywords="mot-clé1, mot-clé2"
        type="article"
        image="/images/partage.jpg"
      />
      {/* Contenu de la page */}
    </>
  );
}
```

## Métadonnées par défaut

Les métadonnées par défaut sont définies dans `src/config/meta.js`. Mettez à jour ce fichier avec vos informations personnelles.

## Génération du sitemap

Le sitemap est généré automatiquement lors de la construction du projet. Pour ajouter ou modifier des URLs, mettez à jour le fichier `scripts/generate-sitemap.js`.

## Vérification SEO

Pour vérifier que tout est correctement configuré :

1. Utilisez l'outil Google Search Console
2. Vérifiez avec l'outil de test d'optimisation mobile de Google
3. Utilisez des outils comme Screaming Frog ou SEMrush pour analyser le site

## Bonnes pratiques SEO

1. **Contenu** : Assurez-vous que chaque page a un contenu unique et de qualité
2. **Images** : Utilisez des balises alt descriptives pour toutes les images
3. **Liens** : Utilisez des URLs propres et descriptives
4. **Performance** : Optimisez les temps de chargement
5. **Mobile** : Vérifiez que le site est entièrement réactif

## Mises à jour futures

- [ ] Ajouter le balisage Schema.org
- [ ] Implémenter la pagination avec rel="next" et rel="prev"
- [ ] Ajouter la prise en charge des cartes Twitter personnalisées
- [ ] Implémenter le chargement paresseux (lazy loading) des images

## Outils recommandés

- [Google Search Console](https://search.google.com/search-console/)
- [Google Analytics](https://analytics.google.com/)
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [Screaming Frog SEO Spider](https://www.screamingfrog.com/seo-spider/)
- [SEMrush](https://semrush.com/)
