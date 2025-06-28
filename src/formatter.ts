export function formatJSON<jsonType>(
  value: jsonType,
  spaces: number | string
): string | undefined {
  try {
    if (typeof value != "object")
      throw new Error("Passed value in formatJSON() is not an object");
    if (typeof spaces != "number" && typeof spaces != "string")
      throw new Error("Passed number of spaces can only be string or a number");

    spaces = Number(spaces);

    if (Number.isNaN(spaces))
      throw new Error("Number of spaces has to be a number");

    const JSONFormatted = JSON.stringify(value, null, spaces);
    return JSONFormatted;
  } catch (error) {
    console.error(error);
  }
}
