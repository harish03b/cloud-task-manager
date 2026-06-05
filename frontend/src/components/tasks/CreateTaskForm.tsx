"use client";

import { useState } from "react";

interface CreateTaskFormProps {
  onCreate: (
    title: string,
    description: string
  ) => Promise<void>;
}

export default function CreateTaskForm({
  onCreate,
}: CreateTaskFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] =
    useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    if (!title.trim()) return;

    try {
      setLoading(true);

      await onCreate(title, description);

      setTitle("");
      setDescription("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow mb-6"
    >
      <h2 className="text-xl font-semibold mb-4">
        Create Task
      </h2>

      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
        className="w-full border p-3 rounded mb-3"
      />

      <textarea
        placeholder="Task description"
        value={description}
        onChange={(e) =>
          setDescription(e.target.value)
        }
        className="w-full border p-3 rounded mb-3"
      />

      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        {loading
          ? "Creating..."
          : "Create Task"}
      </button>
    </form>
  );
}