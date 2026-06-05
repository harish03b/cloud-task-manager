import { api } from "@/lib/api";
import { Task } from "@/types/task";

export const getTasks = async (): Promise<Task[]> => {
  const response = await api.get("/tasks");
  return response.data;
};

export const createTask = async (
  title: string,
  description: string
): Promise<Task> => {
  const response = await api.post("/tasks", {
    title,
    description,
  });

  return response.data;
};
export const updateTaskStatus = async (
  id: string,
  completed: boolean
) => {
  const response = await api.patch(
    `/tasks/${id}`,
    {
      completed,
    }
  );

  return response.data;
};