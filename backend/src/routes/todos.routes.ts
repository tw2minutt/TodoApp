import { Router } from "express";
import { getTodos, createTodos, updateTodo, deleteTodo } from "../controllers/todo.controller";

const router = Router();

router.get("/", getTodos);
router.post("/", createTodos);
router.patch("/:id", updateTodo);
router.delete("/:id", deleteTodo);

export default router;