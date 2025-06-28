export const formatJSON = <jsonType extends Object>(
  value: jsonType,
  spaces: number | string
): string | undefined => {
  try {
    if (typeof value !== "object" || value === null)
      throw new Error("Passed value in formatJSON() is not an object");
    if (typeof spaces != "number" && typeof spaces != "string")
      throw new Error("Passed number of spaces can only be string or a number");

    let parsedSpaces = Number(spaces);

    if (Number.isNaN(parsedSpaces))
      throw new Error("Number of spaces has to be a number");

    const JSONFormatted = JSON.stringify(value, null, parsedSpaces);
    return JSONFormatted;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};
