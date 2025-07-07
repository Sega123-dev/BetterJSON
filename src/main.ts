import { format, formatFill, minifyJSON } from "./formats/formatter";
import { parseJSON } from "./utils/parse";
import { stringifyJSON } from "./utils/stringify";
import { consoleDisplay, display } from "./show/display";
import { validateJSON } from "./utils/validate";
import { fetchJSON } from "./fileHandling/fetch";
import { mergeFiles, merge } from "./mods/merge";
import { exportJS, exportJSON } from "./fileHandling/export";
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
const json2 = {
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
document.getElementById("app")?.addEventListener("click", () => {
  exportJS(json);
});
