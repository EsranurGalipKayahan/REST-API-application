import { NOT_FOUND_CODE, PATH_ERROR_MESSAGE } from "../sources/constants.js";

export const errorPath = (req, res) => {
  res.status(NOT_FOUND_CODE).json({ msg: PATH_ERROR_MESSAGE });
};
