export const format = <jsonType extends Object>(
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

export const formatFill = <jsonType extends Object>(
  value: jsonType,
  fill: number | string
): string | undefined => {
  try {
    if (typeof value !== "object" || value === null)
      throw new Error("Passed value in formatJSON() is not an object");
    if (typeof fill != "string")
      throw new Error("Passed value can only be string");

    const JSONFormatted = JSON.stringify(value, null, fill);
    return JSONFormatted;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export const minifyJSON = <jsonType>(value: jsonType): string | undefined => {
  try {
    if (
      (typeof value !== "string" && typeof value !== "object") ||
      value === null
    )
      throw new Error(
        "Passed value in minifyJSON() must be string or an object"
      );
    return JSON.stringify(value);
  } catch (error) {
    console.error(error);
    return undefined;
  }
};
