import { fetchJSON } from "../fileHandling/fetch";
import { stringifyJSON } from "../utils/stringify";

export const merge = (
  value1: Record<any, string>,
  value2: Record<any, string>
): string | undefined => {
  try {
    if (value1 === undefined || value2 === undefined) {
      console.warn("Warning: Value is undefined");
      return;
    }
    if (value1 === null || value2 === null)
      throw new Error("Values can't be null in mergeJSON() function");
    return "[" + stringifyJSON(value1) + "," + stringifyJSON(value2) + "]";
  } catch (error) {
    console.error(error);
    return undefined;
  }
};
export const mergeFiles = async (
  file1: string,
  file2: string
): Promise<Record<any, string> | undefined> => {
  try {
    if (file1 === undefined || file2 === undefined) {
      console.warn("Warning: Files are undefined");
      return;
    }
    if (typeof file1 !== "string" || typeof file2 !== "string")
      throw new Error("File names must be type of string");
    if (!file1.endsWith(".json") || !file2.endsWith(".json")) {
      throw new Error("Passed file names are not JSON files");
    }
    const obj1 = await fetchJSON(file1);
    const obj2 = await fetchJSON(file2);

    return { ...obj1, ...obj2 };
  } catch (error) {
    console.error(error);
    return undefined;
  }
};
