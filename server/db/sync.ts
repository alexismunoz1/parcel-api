import { sequelize } from "./conn";
import "../models";

sequelize.sync({ force: true }).then((res) => console.log({ message: "Synced", res }));
