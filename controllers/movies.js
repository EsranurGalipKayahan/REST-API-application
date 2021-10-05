import { v4 as uuidv4 } from "uuid";
import {
  NOT_FOUND_CODE,
  NOT_FOUND_MESSAGE,
  SUCCESSFUL_OPERATION_CODE,
  SUCCESSFUL_OPERATION_MESSAGE,
  BAD_REQUEST_CODE,
  BAD_REQUEST_MESSAGE,
  CREATE_OPERATION_NAME,
  DELETE_OPERATION_NAME,
} from "../sources/constants.js";
import { findElement, isInvalidObj } from "../utils/objectUtils.js";

let movies = [
  {
    id: "1",
    title: "inception",
    director: "Christopher Nolan",
    release_date: "2010-07-16",
  },
  {
    id: "2",
    title: "The Irishman",
    director: "Martin Scorsese",
    release_date: "2019-09-27",
  },
];

export const getAllMovies = (req, res) => {
  res.status(SUCCESSFUL_OPERATION_CODE).json(movies);
};
export const createMovie = (req, res) => {
  const movie = req.body;
  if (isInvalidObj(movie)) {
    res.status(BAD_REQUEST_CODE).json({ msg: BAD_REQUEST_MESSAGE });
    return;
  }
  const id = uuidv4();
  movies.push({ id: id, ...movie });
  res.status(SUCCESSFUL_OPERATION_CODE).json({
    msg: CREATE_OPERATION_NAME + SUCCESSFUL_OPERATION_MESSAGE + ` ${id}`,
  });
};
export const getMovie = (req, res) => {
  const id = req.params.id;
  const movie = findElement(movies, id);
  if (movie) {
    res.status(SUCCESSFUL_OPERATION_CODE).json(movie);
    return;
  }
  res.status(NOT_FOUND_CODE).json({ msg: NOT_FOUND_MESSAGE + ` ${id}` });
};
export const deleteMovie = (req, res) => {
  const { id } = req.params;
  const movie = findElement(movies, id);
  if (!movie) {
    res.status(NOT_FOUND_CODE).json({ msg: NOT_FOUND_MESSAGE + ` ${id}` });
    return;
  }
  movies = movies.filter((movie) => movie.id !== id);
  res.status(SUCCESSFUL_OPERATION_CODE).json({
    msg: DELETE_OPERATION_NAME + SUCCESSFUL_OPERATION_MESSAGE + ` ${id}`,
  });
};
