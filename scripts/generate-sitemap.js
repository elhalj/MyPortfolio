import { writeFileSync } from "fs";
import { resolve } from "path";
import { SitemapStream, streamToPromise } from "sitemap";
import { Readable } from "stream";

// URLs de votre site
const links = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/a-propos", changefreq: "monthly", priority: 0.8 },
  { url: "/projets", changefreq: "weekly", priority: 0.8 },
  { url: "/competences", changefreq: "monthly", priority: 0.7 },
  { url: "/contact", changefreq: "monthly", priority: 0.7 },
];

// Création du flux sitemap
const stream = new SitemapStream({
  hostname: "https://wilsonikeda.vercel.app",
  lastmodDateOnly: true,
});

// Écriture du sitemap dans le dossier public
async function generateSitemap() {
  const sitemap = await streamToPromise(Readable.from(links).pipe(stream)).then(
    (data) => data.toString()
  );

  writeFileSync(resolve(__dirname, "../public/sitemap.xml"), sitemap);

  console.log("Sitemap généré avec succès !");
}

generateSitemap().catch(console.error);
