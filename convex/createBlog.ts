import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const createBlog = mutation({
  args: {
    title: v.string(),
    description: v.string(),
    content: v.string(),
    lecture: v.string(),
    etat: v.string(),
    image: v.string(),
    author: v.string(),
  },
  handler: async (ctx, args) => {
    const existingBlog = await ctx.db
      .query("blog")
      .filter((q) => q.eq(q.field("title"), args.title))
      .first();

    const now = new Date().toISOString();
    const baseBlogData = {
      title: args.title,
      description: args.description,
      content: args.content,
      lecture: args.lecture,
      etat: args.etat,
      image: args.image,
      author: args.author,
      createdAt: now,
      updatedAt: now,
    };

    if (existingBlog) {
      await ctx.db.patch(existingBlog._id, baseBlogData);
      return {
        success: true,
        blogId: existingBlog._id,
        message: "Blog updated successfully",
      };
    }

    const blogId = await ctx.db.insert("blog", baseBlogData);
    return {
      success: true,
      blogId,
      message: "Blog created successfully",
    };
  },
});
