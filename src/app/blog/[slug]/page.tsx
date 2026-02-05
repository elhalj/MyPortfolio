import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPostClient from "./BlogPostClient";
import { fetchAllBlogPosts, fetchPostBySlug } from "@/lib/blogServer";
import { markdownToHtml } from "@/lib/markdownToHtml";
import { SITE_URL } from "@/lib/constants";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

const FALLBACK_DESCRIPTION =
  "Article de blog publié sur le portfolio de Konan Wilson Ikeda Koffi.";

const htmlToPlainText = (html: string) =>
  html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();

export async function generateStaticParams(): Promise<
  BlogPostPageProps["params"] extends Promise<infer U> ? U[] : never
> {
  const posts = await fetchAllBlogPosts();
  return posts
    .map((post) => ({ slug: String(post.slug ?? post._id ?? "") }))
    .filter((param) => Boolean(param.slug));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await fetchPostBySlug(slug);
  if (!post) {
    return {
      title: "Article introuvable",
      description: "Cet article n'existe plus ou a été déplacé.",
    };
  }

  const htmlContent = await markdownToHtml(post.content ?? "");
  const plainExcerpt =
    post.description ?? htmlToPlainText(htmlContent).slice(0, 200);
  const canonical = `${SITE_URL}/blog/${post.slug ?? post._id}`;
  const images = post.image
    ? [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title ?? "Article de blog",
        },
      ]
    : undefined;

  return {
    title: post.title ?? "Article",
    description: plainExcerpt || FALLBACK_DESCRIPTION,
    alternates: { canonical },
    openGraph: {
      url: canonical,
      type: "article",
      title: post.title ?? "Article",
      description: plainExcerpt || FALLBACK_DESCRIPTION,
      publishedTime: post.createdAt,
      modifiedTime: post.updatedAt ?? post.createdAt,
      authors: post.author ? [post.author] : undefined,
      images,
    },
    twitter: {
      card: images ? "summary_large_image" : "summary",
      title: post.title ?? "Article",
      description: plainExcerpt || FALLBACK_DESCRIPTION,
      images: images?.map((img) => img.url),
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const initialPost = await fetchPostBySlug(slug);

  if (!initialPost) {
    notFound();
  }

  return <BlogPostClient slug={slug} initialPost={initialPost} />;
}
