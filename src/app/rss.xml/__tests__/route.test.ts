/** @jest-environment node */

import { beforeEach, describe, expect, it, jest } from "@jest/globals";

jest.doMock("@/features/blog/api/blogServer", () => ({
  fetchAllBlogPosts: jest.fn(),
}));

const { fetchAllBlogPosts } =
  require("@/features/blog/api/blogServer") as typeof import("@/features/blog/api/blogServer");
const { GET } = require("../route") as typeof import("../route");

describe("/rss.xml", () => {
  const mockedFetchAllBlogPosts = fetchAllBlogPosts as jest.MockedFunction<
    typeof fetchAllBlogPosts
  >;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("produit un flux XML échappé avec URL, date et cache HTTP cohérents", async () => {
    mockedFetchAllBlogPosts.mockResolvedValue([
      {
        _id: "article/1",
        slug: "article & un",
        title: "<Script> & titre",
        description: `Texte "cité" & utile`,
        content: "",
        lecture: "3 min",
        etat: "published",
        image: "",
        author: "Auteur",
        createdAt: "2026-09-30T12:00:00.000Z",
      },
      {
        _id: "article-2",
        title: "Date incorrecte",
        description: "",
        content: "",
        lecture: "1 min",
        etat: "published",
        image: "",
        author: "Auteur",
        createdAt: "pas-une-date",
      },
    ]);

    const response = await GET();
    const xml = await response.text();

    expect(response.headers.get("content-type")).toBe(
      "application/rss+xml; charset=utf-8",
    );
    expect(response.headers.get("cache-control")).toContain("s-maxage=3600");
    expect(xml).toContain("&lt;Script&gt; &amp; titre");
    expect(xml).toContain("Texte &quot;cité&quot; &amp; utile");
    expect(xml).toContain("/blog/article%20%26%20un");
    expect(xml).toContain("Wed, 30 Sep 2026 12:00:00 GMT");
    expect(xml).not.toContain("pas-une-date");
  });
});
