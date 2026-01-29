import bcrypt from "bcryptjs";
import { mutation } from "./_generated/server";
import { v } from "convex/values";

/**
 * Mutation pour créer l'utilisateur admin initial
 * À exécuter une seule fois pour initialiser la base de données
 */
export const createAdmin = mutation({
  args: {
    pseudo: v.string(),
    firstName: v.string(),
    lastName: v.string(),
    email: v.string(),
    password: v.string(), // Doit être le hash bcrypt
    role: v.string(),
  },
  handler: async (ctx, args) => {
    const existingUser = await ctx.db
      .query("login")
      .filter((q) => q.eq(q.field("email"), args.email))
      .first();

    // Accepter un mot de passe brut ou déjà hashé (pour éviter un double hash)
    const isBcryptHash = /^\$2[aby]\$\d{2}\$/.test(args.password);
    const hashedPassword = isBcryptHash
      ? args.password
      : bcrypt.hashSync(args.password, 10);

    const now = new Date().toISOString();
    const baseUserData = {
      pseudo: args.pseudo,
      firstName: args.firstName,
      lastName: args.lastName,
      email: args.email,
      password: hashedPassword,
      role: args.role,
      lastLogin: existingUser?.lastLogin ?? now,
      createdAt: existingUser?.createdAt ?? now,
      updatedAt: now,
    };

    if (existingUser) {
      await ctx.db.patch(existingUser._id, baseUserData);
      return {
        success: true,
        userId: existingUser._id,
        updated: true,
        message: "Utilisateur admin déjà existant mis à jour",
      };
    }

    const userId = await ctx.db.insert("login", baseUserData);

    return { success: true, userId, created: true };
  },
});

/**
 * Query pour vérifier si des utilisateurs existent
 */
export const checkUsersExist = mutation({
  args: {},
  handler: async (ctx) => {
    const users = await ctx.db.query("login").collect();
    return { count: users.length, users };
  },
});
