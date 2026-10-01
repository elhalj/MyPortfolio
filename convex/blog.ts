import { paginationOptsValidator } from "convex/server";
import { query } from "./_generated/server";

export const get = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("blog").collect();
  },
});

export const getPaginated = query({
  args: { paginationOpts: paginationOptsValidator },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("blog")
      .order("desc")
      .paginate(args.paginationOpts);
  },
});
