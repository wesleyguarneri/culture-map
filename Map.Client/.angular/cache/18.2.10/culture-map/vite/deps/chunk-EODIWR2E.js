import {
  IANAZone,
  Zone
} from "./chunk-LLDOZWVV.js";

// ../../../node_modules/@arcgis/core/core/sql/UnknownTimeZone.js
var t = class {
};
function r(n) {
  return n instanceof Zone ? n === t.instance : "unknown" === n?.toString().toLowerCase();
}
function i(n) {
  return r(n) ? t.instance : n;
}
t.instance = new IANAZone("Etc/UTC");

export {
  t,
  r,
  i
};
//# sourceMappingURL=chunk-EODIWR2E.js.map
