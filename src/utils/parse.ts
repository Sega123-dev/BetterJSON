export const parseJSON = (string: string): Object | undefined => {
  try {
    if (typeof string !== "string" || string === null)
      throw new Error("Passed argument in parseJSON() is not a string");
    const parsed: Object = JSON.parse(string);
    return parsed;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};
