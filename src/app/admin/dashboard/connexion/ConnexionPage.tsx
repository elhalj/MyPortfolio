"use client";

import { ConnexionPageProps } from "@/types/alltypes";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useConnexion } from "@/hooks/useConnexion";

export default function ConnexionPageClient() {
  const { login, loading, error, isConnected } = useConnexion();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ConnexionPageProps>();

  const onSubmit: SubmitHandler<ConnexionPageProps> = async (data) => {
    try {
      await login(data.pseudo, data.email, data.password);
      reset();
      // Optionnel : rediriger après connexion réussie
      window.location.href = "/admin/dashboard";
    } catch (err) {
      console.error("Login error:", err);
    }
  };

  return (
    <div className="min-h-screen max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Connexion</h1>

      {isConnected && (
        <div className="mb-4 p-3 bg-emerald-100 text-emerald-700 rounded-md">
          Connexion réussie !
        </div>
      )}

      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label
            htmlFor="pseudo"
            className="block text-gray-700 font-medium mb-2"
          >
            Pseudo
          </label>
          <input
            id="pseudo"
            type="text"
            {...register("pseudo", { required: "Pseudo requis" })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          />
          {errors.pseudo && (
            <span className="text-red-500 text-sm">
              {errors.pseudo.message}
            </span>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-2"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register("email", {
              required: "Email requis",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Email invalide",
              },
            })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 font-medium mb-2"
          >
            Mot de passe
          </label>
          <input
            id="password"
            type="password"
            {...register("password", {
              required: "Mot de passe requis",
              minLength: {
                value: 6,
                message: "Le mot de passe doit avoir au moins 6 caractères",
              },
            })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          />
          {errors.password && (
            <span className="text-red-500 text-sm">
              {errors.password.message}
            </span>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 disabled:bg-gray-400"
        >
          {loading ? "Connexion en cours..." : "Se connecter"}
        </button>
      </form>
    </div>
  );
}
