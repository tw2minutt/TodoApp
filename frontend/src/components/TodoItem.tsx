import { Todo } from "../types/todo";

interface TodoItemProp {
    todo: Todo;
    onDelete: (id: number) => void;
    onToggle: (id: number, completed: boolean) => void;
}

export default function TodoItem({
    todo,
    onDelete,
    onToggle
}: TodoItemProp) {
    return (
        <li className="p-3 bg-gray-50 border border-gray-200 rounded-lg flex items-center justify-between">
            <span className="text-gray-700">{todo.title}</span>
            <div className="flex gap-3 items-center">
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() =>
                        onToggle(
                            todo.id,
                            !todo.completed
                        )
                    }
                />
                <button
                    onClick={() => onDelete(todo.id)}
                    className="px-2 py-1 bg-red-400 text-white rounded hover:bg-red-500"
                >
                    <span className="mr-1">🗑️</span>
                    Delete
                </button>
            </div>
        </li>
    )
}
