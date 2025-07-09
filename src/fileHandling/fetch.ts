export const fetchJSON = async (fileName: string) => {
  try {
    if (fileName === undefined) {
      console.warn("Passed value is undefined");
      return;
    }
    const fetchData = fetch(fileName);
    const response = await fetchData;

    console.info(`Status: ${response.status}`);
    if (response.ok) return response.json();
  } catch (error) {
    console.log(error);
    return undefined;
  }
};
