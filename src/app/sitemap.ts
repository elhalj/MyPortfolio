import type { MetadataRoute } from "next";
import { fetchAllBlogPosts } from "@/features/blog/api/blogServer";
import { blogPostUrl, siteUrl, toIsoDate } from "@/features/blog/utils/seo";

export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await fetchAllBlogPosts();
  const postEntries = posts
    .map((post) => {
      const slug = String(post.slug ?? post._id ?? "");
      if (!slug) return null;

      const lastModified = toIsoDate(
        post.updatedAt ?? post.createdAt ?? post.date,
      );
      return {
        url: blogPostUrl(slug),
        ...(lastModified ? { lastModified: new Date(lastModified) } : {}),
      };
    })
    .filter((entry): entry is NonNullable<typeof entry> => entry !== null);

  return [{ url: siteUrl("blog") }, ...postEntries];
}
