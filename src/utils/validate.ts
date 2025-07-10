import { stringifyJSON } from "./stringify";

interface CompareKeysParameters {
  object: Record<string, any> | undefined;
  key1: string;
  key2: string;
}

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

export const compareKeys = ({
  object,
  key1,
  key2,
}: CompareKeysParameters): void | undefined => {
  try {
    if (object === undefined || key1 === undefined || key2 === undefined)
      console.warn("Some of the passed values are undefined");
    if (
      typeof object !== "object" ||
      typeof key1 !== "string" ||
      typeof key2 !== "string"
    )
      throw new Error("Object and key values must be of a proper type");
    if (object === null || key1 === null || key2 === null)
      throw new Error("Please define arguments properly");

    const firstKeyValue: unknown = object[key1];
    const secondKeyValue: unknown = object[key2];
    if (key1 === key2) {
      console.info("Key names are duplicates");
    } else if (firstKeyValue === secondKeyValue) {
      console.info("Values are duplicates");
    } else if (key1 === key2 && firstKeyValue === secondKeyValue) {
      console.info("Both values and keys are duplicates");
    } else {
      console.log(
        `Key: ${key1} Value:${firstKeyValue} Value Type: ${typeof firstKeyValue}`
      );
      console.log(
        `Key: ${key2} Value:${secondKeyValue} Value Type: ${typeof secondKeyValue}`
      );
    }
  } catch (error) {
    console.error(error);
    return undefined;
  }
};
