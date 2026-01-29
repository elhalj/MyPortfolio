import bcrypt from "bcryptjs";
import { mutation } from "./_generated/server";
import { v } from "convex/values";

// Fonction utilitaire pour générer un token simple (à remplacer par JWT en production)
function generateToken(userId: string, email: string): string {
  // Format simple : userId:email:timestamp (remplacer par JWT en production)
  return `${userId}:${email}:${Date.now()}`;
}

export const login = mutation({
  args: {
    pseudo: v.string(),
    email: v.string(),
    password: v.string(),
  },
  handler: async (ctx, args) => {
    const user = await ctx.db
      .query("login")
      .filter((q) => q.eq(q.field("email"), args.email))
      .first();

    if (!user) {
      throw new Error("User not found");
    }

    // Vérification du mot de passe (bcryptjs synchronously — Convex mutations can't await timers)
    const isPasswordValid = bcrypt.compareSync(args.password, user.password);
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
