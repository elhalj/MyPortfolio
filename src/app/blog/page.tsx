export const metadata = {
  title: "Blog - Articles et Actualités",
  description:
    "Lisez les derniers articles et actualités sur divers sujets dans notre blog.",
};

import ScrollAnimation from "@/components/ui/ScrollAnimation";
import BlogPageClient from "./BlogPageClient";

export default function BlogPage() {
  return (
    <ScrollAnimation animation="fade-left" className="delay-500">
      <BlogPageClient />
    </ScrollAnimation>
  );
}
