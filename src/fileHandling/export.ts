import { stringifyJSON } from "../utils/stringify";

export const exportJSON = (
  value: Record<any, string> | undefined,
  filename: string = "data.json"
): void => {
  try {
    if (value === undefined) {
      console.warn("Warning: Passed value is undefined");
      return;
    }
    if (typeof value !== "object" || value === null)
      throw new Error("Passed value must be an object in exportJSON()");
    const jsonStr = stringifyJSON(value);
    const blob = new Blob([jsonStr!], { type: "application/json" });

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();

    URL.revokeObjectURL(link.href);
  } catch (error) {
    console.error(error);
    return undefined;
  }
};
export const exportJS = (
  code: string,
  filename: string = "script.js"
): void => {
  try {
    if (code === undefined) {
      console.warn("Warning: Code is not provided");
      return;
    }
    if (code === null) throw new Error("Code does not exist");
    const blob = new Blob([code], { type: "application/javascript" });

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();

    URL.revokeObjectURL(link.href);
  } catch (error) {
    console.error(error);
  }
};
