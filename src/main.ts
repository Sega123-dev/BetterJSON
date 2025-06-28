import { formatJSON, formatFill } from "./formatter";
import { parseJSON } from "./parse";
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
console.log(parseJSON(formatJSON(json, 2)!));
