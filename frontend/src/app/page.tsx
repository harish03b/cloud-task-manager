import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import StatsCard from "@/components/dashboard/StatsCard";
import TaskCard from "@/components/dashboard/TaskCard";

import { mockTasks } from "@/constants/mockTasks";

export default function Home() {
  const completedTasks = mockTasks.filter(
    (task) => task.completed
  ).length;

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 bg-slate-100 min-h-screen">
        <Header />

        <main className="p-6">
          <div className="grid md:grid-cols-3 gap-4">
            <StatsCard
              title="Total Tasks"
              value={mockTasks.length}
            />

            <StatsCard
              title="Completed"
              value={completedTasks}
            />

            <StatsCard
              title="Pending"
              value={
                mockTasks.length - completedTasks
              }
            />
          </div>

          <div className="mt-8 space-y-4">
            {mockTasks.map((task) => (
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