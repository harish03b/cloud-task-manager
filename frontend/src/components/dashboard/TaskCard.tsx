import { Task } from "@/types/task";

interface Props {
  task: Task;
  onToggle: (
    id: string,
    completed: boolean
  ) => void;
  onDelete: (
    id: string
  ) => void;
}

export default function TaskCard({
  task,
  onToggle,
  onDelete,
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

        <div className="flex gap-2">
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

          <button
            onClick={() =>
              onDelete(task.id)
            }
            className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}