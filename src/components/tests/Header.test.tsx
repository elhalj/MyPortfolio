/// <reference types="@testing-library/jest-dom" />

import { describe, it } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import Header from "@/components/layout/Header";

describe("Header", () => {
  it("affiche le lien vers la page d'accueil", () => {
    render(<Header />);
    const homeLink = screen.getByRole("link", { name: /koffi\.dev/i });
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute("href", "/");
  });
});
