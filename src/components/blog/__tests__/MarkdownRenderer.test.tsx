import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it } from "@jest/globals";
import MarkdownRenderer from "@/components/blog/MarkdownRenderer";

describe("MarkdownRenderer", () => {
  const sampleMarkdown = [
    "# Titre principal",
    "",
    "Du **texte** avec `inline code`.",
    "",
    "## Sous-titre",
    "",
    "> Citation inspirante",
    "",
    "- Élément 1",
    "- Élément 2",
    "",
    "```ts",
    "const greet = (name: string) => `Bonjour ${name}`;",
    "```",
    "",
    "[Convex](https://convex.dev)",
  ].join("\n");

  it("renderise les principaux éléments markdown", () => {
    render(<MarkdownRenderer content={sampleMarkdown} />);

    expect(
      screen.getByRole("heading", { name: "Titre principal", level: 1 }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Sous-titre", level: 2 }),
    ).toBeInTheDocument();
    expect(screen.getByText(/texte/i).tagName).toBe("P");
    expect(screen.getByText(/inline code/i).tagName).toBe("CODE");
    expect(screen.getByText(/citation inspirante/i).tagName).toBe("BLOCKQUOTE");
    expect(screen.getByRole("link", { name: /convex/i })).toHaveAttribute(
      "href",
      "https://convex.dev",
    );
  });

  it("affiche un bloc de code multiligne", () => {
    render(<MarkdownRenderer content={sampleMarkdown} />);

    const codeBlock = screen.getByText(/const greet/i);
    expect(codeBlock.tagName).toBe("CODE");
    expect(codeBlock.closest("pre")).not.toBeNull();
  });
});
