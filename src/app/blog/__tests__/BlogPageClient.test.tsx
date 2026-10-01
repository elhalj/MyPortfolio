import { beforeEach, describe, expect, it, jest } from "@jest/globals";
import { fireEvent, render, screen } from "@testing-library/react";

jest.doMock("convex/react", () => ({
  usePaginatedQuery: jest.fn(),
}));

const { usePaginatedQuery } =
  require("convex/react") as typeof import("convex/react");
const BlogPageClient = require("../BlogPageClient")
  .default as typeof import("../BlogPageClient").default;

describe("BlogPageClient", () => {
  const mockedUsePaginatedQuery = usePaginatedQuery as jest.Mock;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("affiche les articles et charge la page suivante", () => {
    const loadMore = jest.fn();
    mockedUsePaginatedQuery.mockReturnValue({
      results: [
        {
          _id: "article-1",
          title: "Premier article",
          description: "Une description utile.",
          slug: "premier-article",
        },
      ],
      status: "CanLoadMore",
      loadMore,
    });

    render(<BlogPageClient />);

    expect(
      screen.getByRole("heading", { name: "Premier article" }),
    ).toBeInTheDocument();
    expect(screen.getByText("Une description utile.")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Read" })).toHaveAttribute(
      "href",
      "/blog/article-1",
    );

    fireEvent.click(screen.getByRole("button", { name: "Charger plus" }));

    expect(loadMore).toHaveBeenCalledWith(6);
  });

  it("affiche un message lorsque la liste est vide", () => {
    mockedUsePaginatedQuery.mockReturnValue({
      results: [],
      status: "Exhausted",
      loadMore: jest.fn(),
    });

    render(<BlogPageClient />);

    expect(
      screen.getByText("Aucun article pour le moment."),
    ).toBeInTheDocument();
  });
});
