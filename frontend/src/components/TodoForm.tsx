import { useState } from "react";

interface TodoFormProps {
  onAdd: (title: string) => void;
}

export default function TodoForm({
  onAdd
}: TodoFormProps) {
  const [title, setTitle] = useState("");

  const handleSubmit = (
    e: React.FormEvent
  ) => {
    e.preventDefault();
    if (title.trim()) {
      onAdd(title);
      setTitle("");
    }
  };

  return (
    <form className="flex gap-2" onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="What needs your attention?"
        aria-label="New task"
        className="flex-1 px-3 py-2 border border-grayx-300 rounded-lg outline-none focus:border-blue-500"
      />
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600">
        <span className="mr-1">+</span> Add task
      </button>
    </form>
  );
}
