import { OBJ_KEYS } from "../sources/constants.js";

//checks whether obj is empty
export const isEmptyObj = (obj) => {
  if (Object.getOwnPropertyNames(obj).length === 0) return true;
  return false;
};
//creates new specific obj which has desired keys and values
export const createObj = (obj) => {
  let newObj = {};

  OBJ_KEYS.forEach((key) => {
    newObj[key] = obj[key];
  });
  return newObj;
};
//checks whether there is missing attibute(s)
const isMissingAttr = (obj) => {
  let missingAttrs = [];

  OBJ_KEYS.forEach((key) => {
    if (obj[key] == undefined) {
      missingAttrs.push(key);
    }
  });
  return missingAttrs.length === 0 ? false : missingAttrs;
};
//checks if the obj empty or which attribute(s) is missing
export const isInvalidObj = (obj) => {
  if (isEmptyObj(obj)) return true;
  if (!isMissingAttr(obj)) return false;
  return isMissingAttr(obj);
};
//search an object with id in an array
export const findElement = (arr, id) => {
  const obj = arr.find((element) => element.id === id);
  if (obj) return obj;
  return false;
};
