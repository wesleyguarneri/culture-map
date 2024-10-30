import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  h
} from "./chunk-IAO6HACY.js";

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
//# sourceMappingURL=chunk-FZPWZBJV.js.map
