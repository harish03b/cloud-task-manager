import { Task } from "@/types/task";

interface Props {
  task: Task;
  onToggle: (
    id: string,
    completed: boolean
  ) => void;
}

export default function TaskCard({
  task,
  onToggle,
}: Props) {
  return (
    <div className="bg-white rounded-xl shadow p-4">
      <h3 className="font-semibold text-lg">
        {task.title}
      </h3>

      <p className="text-gray-600 mt-2">
        {task.description}
      </p>

      <div className="mt-4 flex justify-between items-center">
        {task.completed ? (
          <span className="text-green-600 font-medium">
            Completed
          </span>
        ) : (
          <span className="text-orange-500 font-medium">
            Pending
          </span>
        )}

        <button
          onClick={() =>
            onToggle(
              task.id,
              task.completed
            )
          }
          className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded"
        >
          Toggle
        </button>
      </div>
    </div>
  );
}