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
    console.log("🔍 Tentative de connexion pour:", args.email);

    // Chercher l'utilisateur par email
    const user = await ctx.db
      .query("login")
      .filter((q) => q.eq(q.field("email"), args.email))
      .first();

    if (!user) {
      console.error("❌ Utilisateur non trouvé:", args.email);
      throw new Error("Email ou mot de passe incorrect");
    }

    console.log("✅ Utilisateur trouvé:", user.email);

    // Vérification du mot de passe (bcryptjs synchronously)
    const isPasswordValid = bcrypt.compareSync(args.password, user.password);
    if (!isPasswordValid) {
      console.error("❌ Mot de passe invalide pour:", args.email);
      throw new Error("Email ou mot de passe incorrect");
    }

    console.log("✅ Mot de passe valide");

    // Mettre à jour la date de dernière connexion
    await ctx.db.patch(user._id, {
      lastLogin: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });

    // Générer un token pour la session
    const token = generateToken(String(user._id), user.email);

    console.log("✅ Connexion réussie pour:", user.email);

    return {
      user: {
        userId: String(user._id),
        email: user.email,
        pseudo: user.pseudo,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role,
      },
      token,
    };
  },
});
