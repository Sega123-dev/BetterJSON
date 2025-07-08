import { format, formatFill, minifyJSON } from "./formats/formatter";
import { parseJSON } from "./utils/parse";
import { stringifyJSON } from "./utils/stringify";
import { consoleDisplay, display } from "./show/display";
import { validate } from "./utils/validate";
import { fetchJSON } from "./fileHandling/fetch";
import { mergeFiles, merge } from "./mods/merge";
import { exportJS, exportJSON } from "./fileHandling/export";
import { addKey, modifyKeyValue, removeKey, renameKey } from "./mods/keys";
import { sortObjectArray } from "./utils/sort";
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
        aaa: "string",
      },
    },
  ],
};
const obj = {
  user: {
    profile: {
      settings: {
        theme: "dark",
        notifications: false,
      },
    },
  },
};
const key = renameKey({
  object: obj,
  oldKey: "theme",
  newKey: "cunga lunga",
  nested: "user.profile.settings",
});
const departments = [
  { DepartmentName: "Sales", id: 1 },
  { DepartmentName: "accounting", id: 2 },
  { DepartmentName: "Marketing", id: 3 },
];
console.log(key);
