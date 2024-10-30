import {
  Build
} from "./chunk-2P72IR2Y.js";

// ../../../node_modules/@esri/calcite-components/dist/components/browser.js
var isBrowser = () => Build.isBrowser && typeof navigator !== "undefined" && typeof window !== "undefined" && typeof location !== "undefined" && typeof document !== "undefined" && window.location === location && window.document === document;
function getUserAgentData() {
  return navigator.userAgentData;
}
function getUserAgentString() {
  if (!isBrowser()) {
    return "";
  }
  const uaData = getUserAgentData();
  return uaData?.brands ? uaData.brands.map(({
    brand,
    version
  }) => `${brand}/${version}`).join(" ") : navigator.userAgent;
}

export {
  isBrowser,
  getUserAgentString
};
/*! Bundled license information:

@esri/calcite-components/dist/components/browser.js:
  (*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
   * v2.13.2
   *)
*/
//# sourceMappingURL=chunk-23E6RT3O.js.map
