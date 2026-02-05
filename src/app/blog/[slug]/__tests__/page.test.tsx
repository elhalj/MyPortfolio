import { beforeEach, describe, expect, it, jest } from "@jest/globals";
import BlogPostPage from "../page";
import BlogPostClient from "../BlogPostClient";
import { fetchPostBySlug } from "@/lib/blogServer";
import { notFound } from "next/navigation";
import type { BlogDocument } from "@/types/alltypes";

jest.mock("@/lib/blogServer", () => ({
  fetchPostBySlug: jest.fn(),
  fetchAllBlogPosts: jest.fn(),
}));

jest.mock("../BlogPostClient", () => ({
  __esModule: true,
  default: jest.fn(() => null),
}));

jest.mock("next/navigation", () => ({
  notFound: jest.fn(() => {
    throw new Error("NEXT_NOT_FOUND");
  }),
}));

describe("/blog/[slug]/page", () => {
  const mockedFetchPostBySlug = fetchPostBySlug as jest.MockedFunction<
    typeof fetchPostBySlug
  >;
  const mockedBlogPostClient = BlogPostClient as jest.MockedFunction<
    typeof BlogPostClient
  >;
  const mockedNotFound = notFound as jest.MockedFunction<typeof notFound>;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("passe le post initial au composant client quand trouvé", async () => {
    const samplePost: BlogDocument = {
      _id: "123" as unknown as any,
      title: "Hello",
      description: "Desc",
      content: "# Salut",
      lecture: "5 min",
      etat: "published",
      image: "",
      author: "Wilson",
    };

    mockedFetchPostBySlug.mockResolvedValue(samplePost);

    await BlogPostPage({ params: { slug: "123" } });

    expect(mockedFetchPostBySlug).toHaveBeenCalledWith("123");
    expect(mockedBlogPostClient).toHaveBeenCalledWith({
      slug: "123",
      initialPost: samplePost,
    });
  });

  it("appelle notFound quand aucun article ne correspond", async () => {
    mockedFetchPostBySlug.mockResolvedValue(null);

    await expect(
      BlogPostPage({ params: { slug: "inconnu" } }),
    ).rejects.toThrow("NEXT_NOT_FOUND");

    expect(mockedBlogPostClient).not.toHaveBeenCalled();
    expect(mockedNotFound).toHaveBeenCalled();
  });
});
