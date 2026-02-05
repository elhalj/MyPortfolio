import React, { type ComponentPropsWithoutRef } from "react";
import ReactMarkdown from "react-markdown";
import type { Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

export interface MarkdownRendererProps {
  content: string;
}

type MarkdownCodeProps = ComponentPropsWithoutRef<"code"> & {
  inline?: boolean;
};

const CodeBlock = ({
  inline,
  className,
  children,
  ...rest
}: MarkdownCodeProps) => {
  if (inline) {
    return (
      <code
        className="rounded-md bg-slate-800/80 px-1.5 py-0.5 text-sm text-cyan-200"
        {...rest}
      >
        {children}
      </code>
    );
  }

  return (
    <pre className="overflow-x-auto rounded-2xl bg-slate-900/80 p-4 text-sm shadow-inner">
      <code className={className} {...rest}>
        {children}
      </code>
    </pre>
  );
};

const markdownComponents: Components = {
  h1: ({ node, ...props }) => (
    <h1
      className="mt-12 text-4xl font-semibold text-white first:mt-0"
      {...props}
    />
  ),
  h2: ({ node, ...props }) => (
    <h2 className="mt-10 text-3xl font-semibold text-white" {...props} />
  ),
  h3: ({ node, ...props }) => (
    <h3 className="mt-8 text-2xl font-semibold text-white" {...props} />
  ),
  p: ({ node, ...props }) => (
    <p className="leading-relaxed text-gray-200" {...props} />
  ),
  ul: ({ node, ...props }) => (
    <ul className="ml-6 list-disc space-y-2 text-gray-200" {...props} />
  ),
  ol: ({ node, ...props }) => (
    <ol className="ml-6 list-decimal space-y-2 text-gray-200" {...props} />
  ),
  blockquote: ({ node, ...props }) => (
    <blockquote
      className="border-l-4 border-cyan-400/70 bg-slate-900/40 px-6 py-4 italic text-gray-100"
      {...props}
    />
  ),
  code: CodeBlock,
  a: ({ node, ...props }) => (
    <a
      className="text-cyan-300 underline-offset-4 transition hover:text-cyan-200"
      target="_blank"
      rel="noreferrer"
      {...props}
    />
  ),
  img: ({ node, ...props }) => (
    <img
      className="my-6 w-full rounded-2xl border border-white/10 object-cover"
      loading="lazy"
      {...props}
    />
  ),
};

const MarkdownRenderer = ({ content }: MarkdownRendererProps) => {
  return (
    <div className="prose prose-invert max-w-none text-gray-100">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={markdownComponents}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
