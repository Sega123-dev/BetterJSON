import { stringifyJSON } from "./stringify";

export const validate = <validateType extends Object>(
  json: validateType
): boolean | undefined => {
  try {
    let stringified = stringifyJSON(json) as string;

    let parser = JSON.parse(stringified);
    if (parser) return true;
  } catch (error) {
    return false;
  }
};

export const typeSchema = (
  value: Record<string, any> | undefined
): Object | undefined => {
  try {
    if (value === undefined) {
      console.warn(
        "Warning: Passed value is undefined,please provide defined value"
      );
      return;
    }
    if (typeof value !== "object" || !value)
      throw new Error("Value must be defined and type of an object");

    Object.keys(value).forEach((key) => {
      console.log(`Key:${key}, value: ${value[key]}`);
      if (typeof value[key] === "object" && value[key] !== null) {
        typeSchema(value[key]);
      }
    });
  } catch (error) {
    console.error(error);
    return undefined;
  }
};
