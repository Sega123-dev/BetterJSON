export const stringifyJSON = (
  value: Object | undefined
): string | undefined => {
  try {
    const stringified: string = JSON.stringify(value);
    return stringified;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};
