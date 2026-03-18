import type { Metadata, Viewport } from "next";
import "./globals.css";
import "highlight.js/styles/atom-one-dark.css";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { ConvexClientProvider } from "@/shared/ConvexClientProvider";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: "Konan Wilson Ikeda Koffi - Développeur Web Full Stack",
    template: "%s | Konan Wilson Ikeda Koffi",
  },
  description:
    "Développeur Web Full Stack spécialisé en Next.js, React et TypeScript. Création d'applications web modernes, performantes et optimisées pour le SEO. Découvrez mon portfolio et mes projets.",
  keywords: [
    "Développeur web",
    "Full Stack",
    "Next.js",
    "React",
    "TypeScript",
    "JavaScript",
    "Konan Wilson Ikeda Koffi",
    "Portfolio développeur",
    "Applications web",
    "Frontend",
    "Backend",
    "Développeur France",
    "Web development",
    "SEO",
    "UI/UX",
  ],
  authors: [{ name: "Konan Wilson Ikeda Koffi" }],
  creator: "Konan Wilson Ikeda Koffi",
  publisher: "Konan Wilson Ikeda Koffi",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://koffi.dev",
    siteName: "Konan Wilson Ikeda Koffi - Portfolio",
    title: "Konan Wilson Ikeda Koffi - Développeur Web Full Stack",
    description:
      "Développeur Web Full Stack spécialisé en Next.js, React et TypeScript. Création d'applications web modernes, performantes et optimisées pour le SEO.",
    images: [
      {
        url: "https://koffi.dev/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Konan Wilson Ikeda Koffi - Développeur Web Full Stack",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Konan Wilson Ikeda Koffi - Développeur Web Full Stack",
    description:
      "Développeur Web Full Stack spécialisé en Next.js, React et TypeScript.",
    images: ["https://koffi.dev/images/og-image.png"],
    creator: "@konanwilson",
  },
  verification: {
    // google: "votre-code-google-search-console",
    // yandex: "votre-code-yandex",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`antialiased`} suppressHydrationWarning>
        <ConvexClientProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ConvexClientProvider>
      </body>
    </html>
  );
}
