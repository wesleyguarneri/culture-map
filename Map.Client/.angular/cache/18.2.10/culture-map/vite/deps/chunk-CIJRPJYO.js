import {
  getCountryForTimezone,
  getTimezone
} from "./chunk-XAY3H5XC.js";

// ../../../node_modules/@esri/calcite-components/dist/components/region.js
var global = "Global";
function isGlobal(tz) {
  return getTimezone(tz).countries.length === 0;
}
function extractRegion(tz) {
  if (isGlobal(tz)) {
    return global;
  }
  const separatorIndex = tz.indexOf("/");
  return separatorIndex === -1 ? tz : tz.slice(0, separatorIndex);
}
function getCountry(timeZone) {
  return getCountryForTimezone(timeZone)?.id ?? timeZone;
}

export {
  global,
  extractRegion,
  getCountry
};
/*! Bundled license information:

@esri/calcite-components/dist/components/region.js:
  (*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
   * v2.13.2
   *)
*/
//# sourceMappingURL=chunk-CIJRPJYO.js.map
