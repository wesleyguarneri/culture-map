import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  G3 as G,
  j
} from "./chunk-6SSA7P3A.js";
import {
  s
} from "./chunk-FQBTLEUI.js";

// ../../../node_modules/@arcgis/core/renderers/support/lengthUtils.js
var m = {
  unknown: 1,
  inches: j(1, "meters", "inches"),
  feet: j(1, "meters", "feet"),
  "us-feet": j(1, "meters", "us-feet"),
  yards: j(1, "meters", "yards"),
  miles: j(1, "meters", "miles"),
  "nautical-miles": j(1, "meters", "nautical-miles"),
  millimeters: j(1, "meters", "millimeters"),
  centimeters: j(1, "meters", "centimeters"),
  decimeters: j(1, "meters", "decimeters"),
  meters: j(1, "meters", "meters"),
  kilometers: j(1, "meters", "kilometers"),
  "decimal-degrees": 1 / G(1, "meters", s.radius)
};

export {
  m
};
//# sourceMappingURL=chunk-5X5U7R6O.js.map
