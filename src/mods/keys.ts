interface AddKeyParameters {
  object: Record<string, any>;
  newKey: string;
  keyValue: any;
  nested?: string;
}

interface RemoveKeyParamters {
  object: Record<string, any>;
  key: string;
  nested?: string;
}

interface ModifyKeyParameters {
  object: Record<string, any>;
  key: string;
  newValue: any;
  nested?: string;
}

export const addKey = ({
  object,
  newKey,
  keyValue,
  nested,
}: AddKeyParameters): Object | undefined => {
  try {
    if (object === null || typeof object !== "object")
      throw new Error("Object must be defined and must be type of an object");
    if (newKey === null || typeof newKey !== "string")
      throw new Error("New key must be defined and type of a string");
    if (keyValue === null || keyValue === undefined)
      throw new Error("Key value must be defined and type of a string");

    if (!nested) {
      object[newKey] = keyValue;
      return object;
    }
    const path: string[] = nested?.split(".");
    let current: any = object;

    for (const segment of path) {
      if (
        !Object.prototype.hasOwnProperty.call(current, segment) ||
        typeof current[segment] !== "object" ||
        current[segment] === null
      ) {
        current[segment] = {};
      }
      current = current[segment];
    }

    current[newKey] = keyValue;
    return object;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export const removeKey = ({
  object,
  key,
  nested,
}: RemoveKeyParamters): Object | undefined => {
  try {
    if (object === null || typeof object !== "object")
      throw new Error("Object must be defined and must be type of an object");
    if (key === null || typeof key !== "string")
      throw new Error("Key must be defined and type of a string");

    if (!nested) {
      delete object[key];
      return object;
    }
    const path: string[] = nested?.split(".");
    let current: any = object;
    for (const segment of path) {
      if (
        !Object.prototype.hasOwnProperty.call(current, segment) ||
        typeof current[segment] !== "object" ||
        current[segment] === null
      ) {
        current[segment] = {};
      }
      current = current[segment];
    }
    delete current[key];
    return object;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export const modifyKeyValue = ({
  object,
  key,
  newValue,
  nested,
}: ModifyKeyParameters): Object | undefined => {
  try {
    if (object === null || typeof object !== "object")
      throw new Error("Object must be defined and must be type of an object");
    if (key === null || typeof key !== "string")
      throw new Error("Key must be defined and type of a string");

    if (!nested) object[key] = newValue;

    const path: string[] = nested!.split(".");
    let target = object;
    for (const segment of path) {
      if (
        !Object.prototype.hasOwnProperty.call(target, segment) ||
        typeof target[segment] !== "object" ||
        target[segment] === null
      ) {
        throw new Error("Path for the nested object is invalid");
      }
      target = target[segment];
    }
    target[key] = newValue;
    return object;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};
