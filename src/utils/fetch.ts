import { stringifyJSON } from "./stringify";

export const fetchJSON = async (fileName: string) => {
  const fetchData = fetch(fileName);
  const response = await fetchData;

  console.info(`Status: ${response.status}`);
  if (response.ok) return response.json();
};
