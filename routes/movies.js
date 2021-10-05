import express from "express";
import {
  getAllMovies,
  createMovie,
  getMovie,
  deleteMovie,
} from "../controllers/movies.js";

const router = express.Router();

//get the movie list in the form of JSON
router.get("/", getAllMovies);

//add movie to the list
router.post("/", createMovie);

//search for a movie in the list
router.get("/:id", getMovie);

//remove movie from the list
router.delete("/:id", deleteMovie);

export default router;
