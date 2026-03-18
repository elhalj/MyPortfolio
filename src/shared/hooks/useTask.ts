import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";

export const useTask = () => {
  const tasks = useQuery(api.tasks.get);
  return { tasks };
};
