import { Task } from "@/types/task";

interface Props {
  task: Task;
}

export default function TaskCard({ task }: Props) {
  return (
    <div className="bg-white rounded-xl shadow p-4">
      <h3 className="font-semibold text-lg">
        {task.title}
      </h3>

      <p className="text-gray-600 mt-2">
        {task.description}
      </p>

      <div className="mt-4">
        {task.completed ? (
          <span className="text-green-600">
            Completed
          </span>
        ) : (
          <span className="text-orange-500">
            Pending
          </span>
        )}
      </div>
    </div>
  );
}