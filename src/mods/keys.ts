interface AddKeyParameters {
  object: Record<string, any>;
  newKey: string;
  keyValue: any;
  nested?: string;
}

interface RemoveKeyParameters {
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

interface RenameKeyParameters {
  object: Record<string, any>;
  oldKey: string;
  newKey: string;
  nested?: string;
}

export const addKey = ({
  object,
  newKey,
  keyValue,
  nested,
}: AddKeyParameters): Object | undefined => {
  try {
    if (
      object === undefined ||
      newKey === undefined ||
      keyValue === undefined ||
      nested === undefined
    ) {
      console.warn(
        "Warning: One or couple of provided values are not provided"
      );
      return;
    }
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
}: RemoveKeyParameters): Object | undefined => {
  try {
    if (object === undefined || key === undefined || nested === undefined) {
      console.warn("Warning: One of the passed values are not defined");
      return;
    }
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

export const renameKey = ({
  object,
  oldKey,
  newKey,
  nested,
}: RenameKeyParameters): Object | undefined => {
  try {
    if (object === null || typeof object !== "object")
      throw new Error("Object must be defined and must be type of an object");
    if (oldKey === null || typeof oldKey !== "string")
      throw new Error("Old key must be defined and type of a string");
    if (newKey === null || typeof newKey !== "string")
      throw new Error("New key must be defined and type of a string");

    if (!nested) {
      object[newKey] = object[oldKey];
      delete object[oldKey];
      return object;
    }
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
    target[newKey] = target[oldKey];
    delete object[oldKey];
    return object;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};
