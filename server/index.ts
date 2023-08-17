import * as express from "express";
import {
  createTask,
  deleteTask,
  getTaskByColumn,
  getTasks,
  updateTask,
} from "./controllers/task-controller";
import * as cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
const port = 3000;

app.get("/api", (req, res) => {
  res.status(200).send({ message: "Server is running" });
});

app.post("/api/task", async (req, res) => {
  const { taskId, columnId, content } = req.body;
  try {
    const task = await createTask(taskId, columnId, content);
    res.status(200).json({ messaje: "Task created", task });
  } catch (error) {
    res.status(500).json({ message: `Error creating task ${error}` });
  }
});

app.get("/api/task", async (req, res) => {
  try {
    const tasks = await getTasks();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: `Error getting tasks ${error}` });
  }
});

app.get("/api/task/byColumn/:columnId", async (req, res) => {
  const { columnId } = req.params;
  try {
    const tasks = await getTaskByColumn(columnId);
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: `Error getting tasks ${error}` });
  }
});

app.patch("/api/task/:taskId", async (req, res) => {
  const { taskId } = req.params;
  const { columnId, content } = req.body;
  try {
    await updateTask(taskId, columnId, content);
    res.status(200).json({ message: "Task updated" });
  } catch (error) {
    res.status(500).json({ message: `Error updating task ${error}` });
  }
});

app.delete("/api/task/:taskId", async (req, res) => {
  const { taskId } = req.params;
  try {
    await deleteTask(taskId);
    res.status(200).json({ message: "Task deleted" });
  } catch (error) {
    res.status(500).json({ message: `Error deleting task ${error}` });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
