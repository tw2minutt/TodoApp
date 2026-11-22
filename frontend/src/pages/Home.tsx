import { useEffect, useState } from "react";
import TodoList from "../components/TodoList";
import { Todo } from "../types/todo";
import { getTodos, createTodo, updateTodo, deleteTodo } from "../services/todoAPI";
import TodoForm from "../components/TodoForm";

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    // Gọi API lấy danh sách todos và gán vào state\
    const loadTodos = async () => {
      const data = await getTodos();
      setTodos(data);
    }
    loadTodos();
  }, []);

  const handleAddTodo = async (title: string) => {
    await createTodo(title);

    const data = await getTodos();
    setTodos(data);
  }

  const handleDeleteTodo = async (
    id: number
  ) => {
    await deleteTodo(id.toString());

    const data = await getTodos();
    setTodos(data);
  }

  const handleToggleTodo = async (
    id: number,
    completed: boolean
  ) => {
    const updatedTodo =
      await updateTodo(id, completed);

    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? updatedTodo
          : todo
      )
    );
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow space-y-4">
      <h1 className="text-2xl font-bold text-center text-gray-800">Todo App</h1>
      <TodoForm onAdd={handleAddTodo} />
      <TodoList
        todos={todos}
        onDelete={handleDeleteTodo}
        onToggle={handleToggleTodo}
      />
    </div>
  );
}
