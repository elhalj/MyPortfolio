import { beforeEach, describe, expect, it, jest } from "@jest/globals";
import type { BlogDocument } from "@/shared/types/alltypes";

jest.doMock("@/features/blog/api/blogServer", () => ({
  fetchPostBySlug: jest.fn(),
  fetchAllBlogPosts: jest.fn(),
}));

jest.doMock("../BlogPostClient", () => ({
  __esModule: true,
  default: jest.fn(() => null),
}));

jest.doMock("@/services/markdown/markdownToHtml", () => ({
  markdownToHtml: jest.fn(async () => "<p>Contenu utilisateur</p>"),
}));

jest.doMock("next/navigation", () => ({
  notFound: jest.fn(() => {
    throw new Error("NEXT_NOT_FOUND");
  }),
}));

const { default: BlogPostPage } =
  require("../page") as typeof import("../page");
const { default: BlogPostClient } =
  require("../BlogPostClient") as typeof import("../BlogPostClient");
const { fetchPostBySlug } =
  require("@/features/blog/api/blogServer") as typeof import("@/features/blog/api/blogServer");
const { notFound } =
  require("next/navigation") as typeof import("next/navigation");

describe("/blog/[slug]/page", () => {
  const mockedFetchPostBySlug = fetchPostBySlug as jest.MockedFunction<
    typeof fetchPostBySlug
  >;
  const mockedNotFound = notFound as jest.MockedFunction<typeof notFound>;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("passe le post initial au composant client quand trouvé", async () => {
    const samplePost: BlogDocument = {
      _id: "123",
      title: "Hello",
      description: "Desc",
      content: "# Salut",
      lecture: "5 min",
      etat: "published",
      image: "",
      author: "Wilson",
    };

    mockedFetchPostBySlug.mockResolvedValue(samplePost);

    const page = await BlogPostPage({
      params: Promise.resolve({ slug: "123" }),
    });

    expect(mockedFetchPostBySlug).toHaveBeenCalledWith("123");
    const [, blogPostElement] = page.props.children;
    expect(blogPostElement.type).toBe(BlogPostClient);
    expect(blogPostElement.props).toEqual({
      slug: "123",
      initialPost: samplePost,
    });
  });

  it("inclut un JSON-LD Article sans interpréter le contenu utilisateur", async () => {
    const unsafePost: BlogDocument = {
      _id: "123",
      slug: "article",
      title: "</script><script>alert(1)</script>",
      description: "Description <script> sûre",
      content: "Contenu utilisateur",
      lecture: "5 min",
      etat: "published",
      image: "",
      author: "Wilson",
      createdAt: "2026-09-30T12:00:00.000Z",
    };
    mockedFetchPostBySlug.mockResolvedValue(unsafePost);

    const page = await BlogPostPage({
      params: Promise.resolve({ slug: "article" }),
    });
    const [jsonLdScript] = page.props.children;
    const jsonLd = jsonLdScript.props.children;

    expect(jsonLdScript.props.type).toBe("application/ld+json");
    expect(jsonLd).toContain('"@type":"Article"');
    expect(jsonLd).toContain("\\u003c/script\\u003e");
    expect(jsonLd).not.toContain("</script>");
    expect(jsonLd).not.toContain("Contenu utilisateur");
  });

  it("appelle notFound quand aucun article ne correspond", async () => {
    mockedFetchPostBySlug.mockResolvedValue(null);

    await expect(
      BlogPostPage({ params: Promise.resolve({ slug: "inconnu" }) }),
    ).rejects.toThrow("NEXT_NOT_FOUND");

    expect(mockedNotFound).toHaveBeenCalled();
  });
});
