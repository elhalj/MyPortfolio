"use client";

import { ConvexReactClient } from "convex/react";
import { ReactNode, useEffect, useState } from "react";
import { ConvexProvider } from "convex/react";
import Loader from "@/components/ui/Loader";

export const ConvexClientProvider = ({ children }: { children: ReactNode }) => {
  const [convex, setConvex] = useState<ConvexReactClient | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // This ensures we're in the browser before initializing Convex
    if (typeof window !== "undefined") {
      const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL;
      if (!convexUrl) {
        setError(
          "NEXT_PUBLIC_CONVEX_URL is not set. Make sure to add it to your .env file.",
        );
        return;
      }
      setConvex(new ConvexReactClient(convexUrl));
    }
  }, []);

  if (error) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="text-red-600 text-sm">{error}</p>
      </div>
    );
  }

  if (!convex) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <Loader />
      </div>
    );
  }

  return <ConvexProvider client={convex}>{children}</ConvexProvider>;
};
