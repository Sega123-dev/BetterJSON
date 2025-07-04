export const stringifyJSON = (value: Object): string | undefined => {
  try {
    const stringified = JSON.stringify(value);
    return stringified;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};
