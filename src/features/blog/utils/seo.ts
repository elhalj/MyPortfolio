import { SITE_URL } from "@/shared/constants/constants";

export function siteUrl(path = ""): string {
  const baseUrl = `${SITE_URL.replace(/\/+$/, "")}/`;
  return new URL(path.replace(/^\/+/, ""), baseUrl).toString();
}

export function blogPostUrl(slug: string): string {
  return siteUrl(`blog/${encodeURIComponent(slug)}`);
}

export function toIsoDate(value?: string): string | undefined {
  if (!value) return undefined;

  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? undefined : date.toISOString();
}

export function serializeJsonLd(value: Record<string, unknown>): string {
  return JSON.stringify(value).replace(/[<>&\u2028\u2029]/g, (character) => {
    const escapes: Record<string, string> = {
      "<": "\\u003c",
      ">": "\\u003e",
      "&": "\\u0026",
      "\u2028": "\\u2028",
      "\u2029": "\\u2029",
    };
    return escapes[character];
  });
}
