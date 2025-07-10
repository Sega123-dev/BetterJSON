export const sortObjectArray = <T extends Record<string, any>>(
  array: T[] | undefined,
  key: keyof T
): T[] | undefined => {
  try {
    if (!array) throw new Error("Array must be defined");

    array.sort((a, b) => {
      const textA: string = a[key].toUpperCase();
      const textB: string = b[key].toUpperCase();
      return textA < textB ? -1 : textA > textB ? 1 : 0;
    });

    return array;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};
