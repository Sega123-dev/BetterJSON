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
