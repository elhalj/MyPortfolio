import { queryGeneric } from "convex/server";

export const get = queryGeneric({
    args: {},
    handler: async (ctx) => {
        return await ctx.db.query("tasks").collect()
    }
})