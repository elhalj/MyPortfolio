import type { BlogDocument } from "@/shared/types/alltypes";
import { getConvexClient } from "@/services/convex/convexServer";
import { api } from "../../../../convex/_generated/api";

export async function fetchAllBlogPosts(): Promise<BlogDocument[]> {
  const convex = getConvexClient();
  const posts = (await convex.query(api.blog.get, {})) as BlogDocument[];
  return posts ?? [];
}

export async function fetchPostBySlug(slug: string): Promise<BlogDocument | null> {
  const posts = await fetchAllBlogPosts();
  return (
    posts.find(
      (post) => String(post._id) === slug || String(post.slug ?? "") === slug,
    ) ?? null
  );
}
