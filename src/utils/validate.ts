import { stringifyJSON } from "./stringify";

export const validateJSON = <validateType>(
  json: validateType
): boolean | undefined => {
  let stringified = stringifyJSON(json) as string;

  let parser = JSON.parse(stringified);
  if (parser) return true;

  return false;
};
