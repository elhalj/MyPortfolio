import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  // Table pour les utilisateurs (admin/login)
  login: defineTable({
    pseudo: v.string(),
    firstName: v.string(),
    lastName: v.string(),
    email: v.string(),
    password: v.string(), // Hash bcrypt
    role: v.string(),
    lastLogin: v.optional(v.string()),
    createdAt: v.string(),
    updatedAt: v.string(),
  })
    .index("by_email", ["email"])
    .index("by_pseudo", ["pseudo"]),

  // Table blog (déjà utilisée dans votre code)
  blog: defineTable({
    title: v.string(),
    description: v.string(),
    content: v.string(),
    lecture: v.string(),
    date: v.string(),
    etat: v.string(),
    image: v.string(),
    author: v.string(),
    createdAt: v.string(),
    updatedAt: v.string(),
  }),

  // Table tasks (déjà utilisée dans votre code)
  tasks: defineTable({
    text: v.string(),
    isCompleted: v.boolean(),
  }),
});
