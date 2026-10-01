import { fetchAllBlogPosts } from "@/features/blog/api/blogServer";
import { blogPostUrl, siteUrl, toIsoDate } from "@/features/blog/utils/seo";
import type { BlogDocument } from "@/shared/types/alltypes";

export const dynamic = "force-dynamic";

function escapeXml(value: string): string {
  const validXmlText = Array.from(value)
    .filter((character) => {
      const codePoint = character.codePointAt(0) ?? 0;
      return (
        codePoint === 0x09 ||
        codePoint === 0x0a ||
        codePoint === 0x0d ||
        (codePoint >= 0x20 && codePoint <= 0xd7ff) ||
        (codePoint >= 0xe000 && codePoint <= 0xfffd) ||
        (codePoint >= 0x10000 && codePoint <= 0x10ffff)
      );
    })
    .join("");

  return validXmlText
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function getPostSlug(post: BlogDocument): string {
  return String(post.slug ?? post._id ?? "");
}

export async function GET(): Promise<Response> {
  const posts = await fetchAllBlogPosts();
  const items = posts
    .filter((post) => Boolean(getPostSlug(post)))
    .map((post) => {
      const url = blogPostUrl(getPostSlug(post));
      const publishedAt = toIsoDate(post.createdAt ?? post.date);

      return [
        "    <item>",
        `      <title>${escapeXml(post.title ?? "Article")}</title>`,
        `      <link>${escapeXml(url)}</link>`,
        `      <guid isPermaLink="true">${escapeXml(url)}</guid>`,
        `      <description>${escapeXml(post.description ?? "")}</description>`,
        publishedAt
          ? `      <pubDate>${new Date(publishedAt).toUTCString()}</pubDate>`
          : "",
        "    </item>",
      ]
        .filter(Boolean)
        .join("\n");
    });

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0">',
    "  <channel>",
    "    <title>Blog | Portfolio</title>",
    `    <link>${escapeXml(siteUrl("blog"))}</link>`,
    "    <description>Articles du portfolio</description>",
    ...items,
    "  </channel>",
    "</rss>",
  ].join("\n");

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control":
        "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
