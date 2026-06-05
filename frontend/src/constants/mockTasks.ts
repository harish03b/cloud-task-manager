import { Task } from "@/types/task";

export const mockTasks: Task[] = [
  {
    id: "1",
    title: "Design Dashboard",
    description: "Create UI layout",
    completed: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: "2",
    title: "Setup AWS",
    description: "Prepare Lambda and DynamoDB",
    completed: true,
    createdAt: new Date().toISOString(),
  },
];