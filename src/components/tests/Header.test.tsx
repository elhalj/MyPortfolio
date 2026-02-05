/// <reference types="@testing-library/jest-dom" />
import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "@/components/layout/Header";
import { describe, it } from "@jest/globals";

describe("Header", () => {
  it("affiche le lien vers la page d'accueil", () => {
    render(<Header />);
    const homeLink = screen.getByRole("link", { name: /wilson&dev/i });
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute("href", "/");
  });
});
