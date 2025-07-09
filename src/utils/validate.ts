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
  object: Record<string, any> | undefined
): Object | undefined => {
  try {
    if (object === undefined) {
      console.warn(
        "Warning: Passed object is undefined,please provide defined object"
      );
      return;
    }
    if (typeof object !== "object" || !object)
      throw new Error("object must be defined and type of an object");

    Object.keys(object).forEach((key) => {
      if (typeof object[key] === "object" && object[key] !== null) {
        object[key] = typeSchema(object[key]);
      } else {
        object[key] = typeof object[key];
      }
      object[key] = typeof object[key];
    });
    return object;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};
