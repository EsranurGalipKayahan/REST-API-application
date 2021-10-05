import express from "express";
import moviesRoutes from "./routes/movies.js";
import errorRoute from "./routes/path_error.js";

const app = express();

//parse JSON using express
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//set router
app.use("/movie", moviesRoutes);
app.use(errorRoute);

export default app;
