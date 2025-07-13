export const stripValues = (
  object: Record<string, any | undefined>
): Record<string, any> | undefined => {
  try {
    if (object === undefined || object === null)
      console.warn("Object must be defined");
  } catch (error) {
    console.error(error);
    return undefined;
  }
};
export const encrypt = () => {};
export const encryptAll = () => {};
export const decrypt = () => {};
