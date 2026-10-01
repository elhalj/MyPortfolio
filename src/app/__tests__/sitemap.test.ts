import { beforeEach, describe, expect, it, jest } from "@jest/globals";

jest.doMock("@/features/blog/api/blogServer", () => ({
  fetchAllBlogPosts: jest.fn(),
}));

const { fetchAllBlogPosts } =
  require("@/features/blog/api/blogServer") as typeof import("@/features/blog/api/blogServer");
const { default: sitemap } =
  require("../sitemap") as typeof import("../sitemap");

describe("sitemap", () => {
  const mockedFetchAllBlogPosts = fetchAllBlogPosts as jest.MockedFunction<
    typeof fetchAllBlogPosts
  >;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("inclut le blog et les articles avec dates de modification valides", async () => {
    mockedFetchAllBlogPosts.mockResolvedValue([
      {
        _id: "article-1",
        slug: "article un",
        title: "Article",
        description: "Description",
        content: "",
        lecture: "2 min",
        etat: "published",
        image: "",
        author: "Auteur",
        updatedAt: "2026-09-30T12:00:00.000Z",
      },
      {
        _id: "article-2",
        title: "Sans date",
        description: "Description",
        content: "",
        lecture: "2 min",
        etat: "published",
        image: "",
        author: "Auteur",
        updatedAt: "invalid",
      },
    ]);

    const entries = await sitemap();

    expect(entries[0].url).toMatch(/\/blog$/);
    expect(entries[1]).toMatchObject({
      url: expect.stringContaining("article%20un"),
    });
    expect(entries[1].lastModified).toEqual(
      new Date("2026-09-30T12:00:00.000Z"),
    );
    expect(entries[2]).toEqual({
      url: expect.stringContaining("article-2"),
    });
  });
});
