import { format } from "../formats/formatter";
import { stringifyJSON } from "../utils/stringify";

export const consoleDisplay = (value: Object): void | undefined => {
  try {
    if (typeof value !== "object")
      throw new Error("Passed value must be an object in consoleDisplay()");

    console.log(format(value, 2));
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export const display = <displayValue>(
  value: displayValue,
  selector: string
): void => {
  try {
    if (value === null) throw new Error("Value passed in display is null");

    if (typeof selector !== "string")
      throw new Error("Selector must be a string");

    let wrapper = document.querySelector(selector) as HTMLElement;
    let preElement: HTMLPreElement = document.createElement("pre");

    if (typeof value === "object") {
      let stringified: string | undefined = stringifyJSON(value);
      if (typeof stringified === "undefined")
        throw new Error("Object value is undefined");
      preElement.innerText += stringified;
      wrapper.appendChild(preElement);
      return;
    }

    preElement.innerText += value;
    wrapper.appendChild(preElement);
  } catch (error) {
    console.error(error);
    return undefined;
  }
};
