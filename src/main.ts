import { formatJSON, formatFill } from "./formats/formatter";
import { parseJSON } from "./utils/parse";
import { stringifyJSON } from "./utils/stringify";
import { display } from "./display/display";
const json = {
  products: [
    {
      id: 101,
      name: "Wireless Headphones",
      price: 89.99,
      inStock: true,
      tags: ["audio", "wireless", "tech"],
      details: {
        brand: "SoundMax",
        warranty: "2 years",
      },
    },
    {
      id: 102,
      name: "Smart Watch",
      price: 129.99,
      inStock: false,
      tags: ["wearable", "fitness"],
      details: {
        brand: "FitCore",
        batteryLife: "36 hours",
      },
    },
  ],
};
const stringify = formatJSON(json, 2);
display(stringify, "#app");
