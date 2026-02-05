import { Suspense } from "react";
import BlogPostClient from "./BlogPostClient";
import Loader from "@/components/ui/Loader";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  return (
    <Suspense fallback={<Loader />}>
      <BlogPostClient slug={slug} />
    </Suspense>
  );
}
