export const stringifyJSON = (value: unknown): string | undefined => {
  try {
    const parsed = JSON.stringify(value);
    return parsed;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};
