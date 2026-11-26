import express from 'express';
import todoRoutes from "./routes/todos.routes";
import cors from "cors";
import authRoutes from "./routes/auth.routes";

const app = express();

app.use(cors());

app.use(express.json());

app.get('/health', (_request, response) => {
  response.json({ status: 'ok' });
});

app.use("/api/auth", authRoutes);
app.use("/api/todos", todoRoutes);  

export default app;
