import TodoItem from "../components/TodoItem";
import { Todo } from "../types/todo";

interface TodoListProps {
  todos: Todo[];
  onDelete: (id: number) => void;
  onToggle: (id: number, completed: boolean) => void;
}

export default function TodoList({
  todos,
  onDelete,
  onToggle
}: TodoListProps) {
  return (
    <ul className="space-y-2 mt-4">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </ul>
  );
}
