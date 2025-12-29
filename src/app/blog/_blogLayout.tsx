import type { ReactNode } from "react";

type BlogLayoutProps = {
  children: ReactNode;
};

export default function BlogLayout({ children }: BlogLayoutProps) {
  return (
    <section className="min-h-screen bg-gray-900 text-white">
      {children}
    </section>
  );
}
