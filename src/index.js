import express from "express";
import clienteRoutes from "./routes/clienteRoutes.js";
import morgan from "morgan";
import { PORT } from "./config.js";

const app = express();

app.use(morgan("dev"));

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(clienteRoutes);

app.listen(PORT);
// eslint-disable-next-line no-console
console.log("Server on port", PORT);
