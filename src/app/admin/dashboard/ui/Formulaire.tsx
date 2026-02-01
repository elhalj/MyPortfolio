"use client";

import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { BlogFormPageProps } from "@/types/alltypes";
import { useBlogForm } from "@/hooks/useBlogForm";
import ScrollAnimation from "@/components/ui/ScrollAnimation";

const defaultValues: BlogFormPageProps = {
  title: "",
  description: "",
  content: "",
  lecture: "",
  etat: "draft",
  image: "",
  author: "",
};

export default function Formulaire() {
  const { submitBlog, status, error, isLoading, resetStatus } = useBlogForm();
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BlogFormPageProps>({ defaultValues });

  const onSubmit: SubmitHandler<BlogFormPageProps> = async (data) => {
    setSuccessMessage(null);
    try {
      await submitBlog(data);
      setSuccessMessage("Article enregistré avec succès ✨");
      reset(defaultValues);
    } catch (err) {
      console.error("Blog submit error:", err);
    }
  };

  const handleReset = () => {
    reset(defaultValues);
    setSuccessMessage(null);
    resetStatus();
  };

  return (
    <ScrollAnimation
      animation="fade-up"
      className="space-y-6 transition-all duration-500 ease-out delay-100"
    >
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <header className="mb-8 space-y-2">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-500">
            Publication
          </p>
          <h2 className="text-3xl font-[cormorant] text-slate-900">
            Ajouter ou mettre à jour un article
          </h2>
          <p className="text-sm text-slate-500">
            Complétez tous les champs pour publier un nouveau billet ou modifier
            un article existant portant le même titre.
          </p>
        </header>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="text-sm font-medium text-slate-700">
                Titre *
              </label>
              <input
                type="text"
                className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-slate-900 focus:border-cyan-500 focus:bg-white focus:outline-none"
                {...register("title", { required: "Le titre est obligatoire" })}
              />
              {errors.title && (
                <p className="mt-1 text-sm text-rose-500">
                  {errors.title.message}
                </p>
              )}
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700">
                Auteur *
              </label>
              <input
                type="text"
                className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-slate-900 focus:border-cyan-500 focus:bg-white focus:outline-none"
                {...register("author", {
                  required: "L'auteur est obligatoire",
                })}
              />
              {errors.author && (
                <p className="mt-1 text-sm text-rose-500">
                  {errors.author.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="text-sm font-medium text-slate-700">
                Image (URL)*
              </label>
              <input
                type="url"
                className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-slate-900 focus:border-cyan-500 focus:bg-white focus:outline-none"
                placeholder="https://..."
                {...register("image", {
                  required: "L'url de l'image est obligatoire",
                })}
              />
              {errors.image && (
                <p className="mt-1 text-sm text-rose-500">
                  {errors.image.message}
                </p>
              )}
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700">
                Temps de lecture *
              </label>
              <input
                type="text"
                className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-slate-900 focus:border-cyan-500 focus:bg-white focus:outline-none"
                placeholder="Ex: 5 min"
                {...register("lecture", {
                  required: "Indiquez un temps de lecture",
                })}
              />
              {errors.lecture && (
                <p className="mt-1 text-sm text-rose-500">
                  {errors.lecture.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700">
              Description *
            </label>
            <textarea
              rows={3}
              className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-slate-900 focus:border-cyan-500 focus:bg-white focus:outline-none"
              {...register("description", {
                required: "Ajoutez une description courte",
              })}
            />
            {errors.description && (
              <p className="mt-1 text-sm text-rose-500">
                {errors.description.message}
              </p>
            )}
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700">
              Contenu *
            </label>
            <textarea
              rows={6}
              className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-slate-900 focus:border-cyan-500 focus:bg-white focus:outline-none"
              {...register("content", { required: "Le contenu est requis" })}
            />
            {errors.content && (
              <p className="mt-1 text-sm text-rose-500">
                {errors.content.message}
              </p>
            )}
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="text-sm font-medium text-slate-700">
                Statut *
              </label>
              <select
                className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-slate-900 focus:border-cyan-500 focus:bg-white focus:outline-none"
                {...register("etat", { required: "Choisissez un statut" })}
              >
                <option value="draft">Brouillon</option>
                <option value="published">Publié</option>
                <option value="archived">Archivé</option>
              </select>
              {errors.etat && (
                <p className="mt-1 text-sm text-rose-500">
                  {errors.etat.message}
                </p>
              )}
            </div>
            <div className="flex items-end justify-end gap-3">
              <button
                type="button"
                onClick={handleReset}
                className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100"
              >
                Réinitialiser
              </button>
              <button
                type="submit"
                disabled={isLoading}
                className="rounded-lg bg-cyan-600 px-6 py-2 text-sm font-semibold text-white shadow transition hover:bg-cyan-500 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isLoading ? "Enregistrement..." : "Enregistrer"}
              </button>
            </div>
          </div>

          {status === "success" && successMessage && (
            <p className="rounded-lg bg-emerald-50 px-4 py-3 text-emerald-700">
              {successMessage}
            </p>
          )}
          {status === "error" && error && (
            <p className="rounded-lg bg-rose-50 px-4 py-3 text-rose-600">
              {error}
            </p>
          )}
        </form>
      </section>
    </ScrollAnimation>
  );
}
