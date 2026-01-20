import bcrypt from "bcryptjs";
import { mutation } from "./_generated/server";
import { v } from "convex/values";

// Fonction utilitaire pour générer un token simple (à remplacer par JWT en production)
function generateToken(userId: string, email: string): string {
    // Format simple : base64(userId:email:timestamp)
    // À remplacer par un vrai JWT (jsonwebtoken package) en production
    const payload = `${userId}:${email}:${Date.now()}`;
    return Buffer.from(payload).toString("base64");
}

export const login = mutation({
    args: {
        pseudo: v.string(),
        email: v.string(),
        password: v.string(),
    },
    handler: async (ctx, args) => {
        const user = await ctx.db
            .query("users")
            .filter((q) => q.eq(q.field("email"), args.email))
            .first();

        if (!user) {
            throw new Error("User not found");
        }

        // TODO: Implement password verification (compare with hashed password)
        const isPasswordValid = await bcrypt.compare(args.password, user.password);
        if (!isPasswordValid) {
          throw new Error("Invalid password");
        }

        // Générer un token pour la session
        const token = generateToken(String(user._id), user.email);

        return {
            user: {
                userId: String(user._id),
                email: user.email,
            },
            token,
        };
    },
});