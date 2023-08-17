import { Model, DataTypes } from "sequelize-cockroachdb";
import { sequelize } from "../db/conn";

export class Task extends Model {
  declare id: string;
  declare columnId: string;
  declare content: string;
}

Task.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    columnId: DataTypes.STRING,
    content: DataTypes.STRING,
  },
  { sequelize, modelName: "task" }
);
