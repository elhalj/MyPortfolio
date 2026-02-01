import BlogPostClient from "./BlogPostClient";

type BlogPostPageProps = {
  params: { slug: string };
};

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = params;
  return <BlogPostClient slug={slug} />;
}
