export const fetchJSON = async (fileName: string): Promise<any> => {
  try {
    if (fileName === undefined) {
      console.warn("Passed value is undefined");
      return;
    }
    const fetchData: Promise<Response> = fetch(fileName);
    const response: Response = await fetchData;

    console.info(`Status: ${response.status}`);
    if (response.ok) return response.json();
  } catch (error) {
    console.log(error);
    return undefined;
  }
};
