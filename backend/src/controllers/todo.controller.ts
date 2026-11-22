import { Request, Response } from "express";
import * as todoService from "../services/todo.service";

export const getTodos = async (
  req: Request,
  res: Response
) => {
  try {
    const todos = await todoService.getTodos();

    res.json(todos);
  } catch (error) {
    res.status(500).json({
      message: "Failed to get todos",
    });
  }
};

export const createTodos = async (
  req: Request,
  res: Response
) => {
  try {
    const { title } = req.body;
    const todo = await todoService.createTodo(title);

    res.status(201).json(todo);
  } catch (error) {
    res.status(500).json({
      message: "Create Todo failed",
    });
  }
};

export const updateTodo = async (
  req: Request,
  res: Response
) => {
  try {
    const id = Number(req.params.id);
    const { completed } = req.body;
    const todo = await todoService.updateTodo(id, completed);
    res.json(todo);
  } catch (error) {
    res.status(500).json({
      message: "Update Todo failed",
    });
  }
}

export const deleteTodo = async (
  req: Request,
  res: Response
) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "ID is required" });
    }

    const todo = await todoService.deleteTodo(id);
    res.json(todo);
  } catch (error) {
    res.status(500).json({
      message: "Delete Todo failed",
    });
  }
};
