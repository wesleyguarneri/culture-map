import {
  h
} from "./chunk-2P72IR2Y.js";

// ../../../node_modules/@esri/calcite-components/dist/components/Validation.js
var CSS = {
  validationContainer: "validation-container"
};
var Validation = ({
  scale,
  status,
  id,
  icon,
  message
}) => h("div", {
  class: CSS.validationContainer
}, h("calcite-input-message", {
  "aria-live": "polite",
  icon,
  id,
  scale,
  status
}, message));

export {
  Validation
};
/*! Bundled license information:

@esri/calcite-components/dist/components/Validation.js:
  (*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
   * v2.13.2
   *)
*/
//# sourceMappingURL=chunk-LVO5HG5M.js.map
