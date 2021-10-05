import { OBJ_KEYS } from "../sources/constants.js";

export const isEmptyObj = (obj) => {
  if (Object.getOwnPropertyNames(obj).length === 0) return true;
  return false;
};
const isMissingAttr = (obj) => {
  for (let i = 0; i < OBJ_KEYS.length; i++) {
    if (obj[OBJ_KEYS[i]] == undefined) {
      return true;
    }
  }
  return false;
};
export const isInvalidObj = (obj) => {
  if (isEmptyObj(obj)) return true;
  if (isMissingAttr(obj)) return true;
  return false;
};
export const findElement = (arr, id) => {
  const foundUser = arr.find((element) => element.id === id);
  if (foundUser) return foundUser;
  return false;
};
