"use client";

import { useEffect, useState } from "react";

import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import StatsCard from "@/components/dashboard/StatsCard";
import TaskCard from "@/components/dashboard/TaskCard";
import CreateTaskForm from "@/components/tasks/CreateTaskForm";

import {
  getTasks,
  createTask,
} from "@/services/taskService";

import { Task } from "@/types/task";

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const data = await getTasks();
        setTasks(data);
      } catch (error) {
        console.error(
          "Failed to fetch tasks:",
          error
        );
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  const handleCreateTask = async (
    title: string,
    description: string
  ) => {
    try {
      const newTask = await createTask(
        title,
        description
      );

      setTasks((prev) => [
        newTask,
        ...prev,
      ]);
    } catch (error) {
      console.error(
        "Failed to create task:",
        error
      );
    }
  };

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        Loading tasks...
      </div>
    );
  }

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 bg-slate-100 min-h-screen">
        <Header />

        <main className="p-6">
          <CreateTaskForm
            onCreate={handleCreateTask}
          />

          <div className="grid md:grid-cols-3 gap-4">
            <StatsCard
              title="Total Tasks"
              value={tasks.length}
            />

            <StatsCard
              title="Completed"
              value={completedTasks}
            />

            <StatsCard
              title="Pending"
              value={
                tasks.length -
                completedTasks
              }
            />
          </div>

          <div className="mt-8 space-y-4">
            {tasks.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}