interface AddKeyParameters {
  object: Record<string, any> | undefined;
  newKey: string;
  keyValue: any;
  nested?: string;
}

interface RemoveKeyParameters {
  object: Record<string, any> | undefined;
  key: string;
  nested?: string;
}

interface ModifyKeyParameters {
  object: Record<string, any> | undefined;
  key: string;
  newValue: any;
  nested?: string;
}

interface RenameKeyParameters {
  object: Record<string, any> | undefined;
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

    for (let i = 0; i < path.length; i++) {
      const segment = path[i];

      const index = Number(segment);
      const isArrayIndex = !isNaN(index);

      if (isArrayIndex) {
        if (!Array.isArray(current)) {
          current = current[path[i - 1]] = [];
        }
        if (!current[index]) {
          current[index] = {};
        }
        current = current[index];
      } else {
        if (
          !Object.prototype.hasOwnProperty.call(current, segment) ||
          typeof current[segment] !== "object" ||
          current[segment] === null
        ) {
          current[segment] = {};
        }
        current = current[segment];
      }
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
    for (let i = 0; i < path.length; i++) {
      const segment = path[i];

      const index = Number(segment);
      const isArrayIndex = !isNaN(index);

      if (isArrayIndex) {
        if (!Array.isArray(current)) {
          current = current[path[i - 1]] = [];
        }
        if (!current[index]) {
          current[index] = {};
        }
        current = current[index];
      } else {
        if (
          !Object.prototype.hasOwnProperty.call(current, segment) ||
          typeof current[segment] !== "object" ||
          current[segment] === null
        ) {
          current[segment] = {};
        }
        current = current[segment];
      }
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
    let target: any = object;
    for (let i = 0; i < path.length; i++) {
      const segment = path[i];

      const index = Number(segment);
      const isArrayIndex = !isNaN(index);

      if (isArrayIndex) {
        if (!Array.isArray(target)) {
          target = target[path[i - 1]] = [];
        }
        if (!target[index]) {
          target[index] = {};
        }
        target = target[index];
      } else {
        if (
          !Object.prototype.hasOwnProperty.call(target, segment) ||
          typeof target[segment] !== "object" ||
          target[segment] === null
        ) {
          target[segment] = {};
        }
        target = target[segment];
      }
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
    let target: any = object;
    for (let i = 0; i < path.length; i++) {
      const segment = path[i];

      const index = Number(segment);
      const isArrayIndex = !isNaN(index);

      if (isArrayIndex) {
        if (!Array.isArray(target)) {
          target = target[path[i - 1]] = [];
        }
        if (!target[index]) {
          target[index] = {};
        }
        target = target[index];
      } else {
        if (
          !Object.prototype.hasOwnProperty.call(target, segment) ||
          typeof target[segment] !== "object" ||
          target[segment] === null
        ) {
          target[segment] = {};
        }
        target = target[segment];
      }
    }
    target[newKey] = target[oldKey];
    delete target[oldKey];
    return object;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};
