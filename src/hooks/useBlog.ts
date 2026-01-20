import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

export const useBlog = () => {
  const blog = useQuery(api.blog.get);
  return { blog };
};
