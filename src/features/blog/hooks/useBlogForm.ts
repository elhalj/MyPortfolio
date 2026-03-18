"use client";

import { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import type { BlogFormPageProps } from "@/shared/types/alltypes";

interface BlogFormStatus {
  status: "idle" | "loading" | "success" | "error";
  error: string | null;
}

export const useBlogForm = () => {
  const createOrUpdateBlog = useMutation(api.createBlog.createBlog);
  const [formStatus, setFormStatus] = useState<BlogFormStatus>({
    status: "idle",
    error: null,
  });

  const submitBlog = async (data: BlogFormPageProps) => {
    setFormStatus({ status: "loading", error: null });
    try {
      await createOrUpdateBlog({
        title: data.title,
        description: data.description,
        content: data.content,
        lecture: data.lecture,
        etat: data.etat,
        image: data.image,
        author: data.author,
      });
      setFormStatus({ status: "success", error: null });
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Une erreur est survenue";
      setFormStatus({ status: "error", error: message });
      throw error;
    }
  };

  const resetStatus = () => setFormStatus({ status: "idle", error: null });

  return {
    submitBlog,
    status: formStatus.status,
    error: formStatus.error,
    isLoading: formStatus.status === "loading",
    resetStatus,
  };
};
