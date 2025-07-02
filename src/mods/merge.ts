import { fetchJSON } from "../utils/fetch";
import { stringifyJSON } from "../utils/stringify";

export const mergeJSON = (
  value1: Object,
  value2: Object
): string | undefined => {
  try {
    if (value1 === null || value2 === null)
      throw new Error("Values can't be null in mergeJSON() function");
    return "[" + stringifyJSON(value1) + "," + stringifyJSON(value2) + "]";
  } catch (error) {
    console.error(error);
    return undefined;
  }
};
