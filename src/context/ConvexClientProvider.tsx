"use client"

import { ConvexReactClient } from "convex/react"
import { ReactNode, useEffect, useState } from "react"
import { ConvexProvider } from "convex/react"

export const ConvexClientProvider = ({ children }: { children: ReactNode }) => {
    const [convex, setConvex] = useState<ConvexReactClient | null>(null);

    useEffect(() => {
        // This ensures we're in the browser before initializing Convex
        if (typeof window !== 'undefined') {
            const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL;
            if (!convexUrl) {
                console.error("NEXT_PUBLIC_CONVEX_URL is not set. Make sure to add it to your .env file.");
                return;
            }
            setConvex(new ConvexReactClient(convexUrl));
        }
    }, []);

    if (!convex) {
        return <div>Loading...</div>;
    }

    return (
        <ConvexProvider client={convex}>
            {children}
        </ConvexProvider>
    );
};