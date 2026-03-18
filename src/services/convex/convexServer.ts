import { ConvexHttpClient } from "convex/browser";

let serverConvexClient: ConvexHttpClient | null = null;

const isHttpUrl = (value?: string | null) =>
  Boolean(value && /^https?:\/\//i.test(value));

const resolveConvexUrl = () => {
  if (isHttpUrl(process.env.NEXT_PUBLIC_CONVEX_URL)) {
    return process.env.NEXT_PUBLIC_CONVEX_URL as string;
  }

  if (isHttpUrl(process.env.CONVEX_DEPLOYMENT)) {
    return process.env.CONVEX_DEPLOYMENT as string;
  }

  throw new Error(
    "Convex URL is missing or invalid. Set NEXT_PUBLIC_CONVEX_URL to the HTTPS endpoint shown in the Convex dashboard (e.g. https://happy-ant-123.convex.site).",
  );
};

export function getConvexClient() {
  if (serverConvexClient) {
    return serverConvexClient;
  }

  const convexUrl = resolveConvexUrl();
  serverConvexClient = new ConvexHttpClient(convexUrl);
  return serverConvexClient;
}
