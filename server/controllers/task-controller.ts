import { Task } from "../models/index";

export const createTask = async (id: string, columnId: string, content: string) => {
  const task = await Task.create({ id, columnId, content });
  return task;
};

export const getTasks = async () => {
  const tasks = await Task.findAll();
  return tasks;
};

export const getTaskByColumn = async (columnId: string) => {
  const tasks = await Task.findAll({ where: { columnId } });
  return tasks;
};

export const updateTask = async (id: string, columnId?: string, content?: string) => {
  const task = await Task.update({ columnId, content }, { where: { id } });
  return task;
};

export const deleteTask = async (id: string) => {
  const task = await Task.destroy({ where: { id } });
  return task;
};
