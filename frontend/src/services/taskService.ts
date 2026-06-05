import { api } from "@/lib/api";
import { Task } from "@/types/task";

export const getTasks = async (): Promise<Task[]> => {
  const response = await api.get("/tasks");
  return response.data;
};