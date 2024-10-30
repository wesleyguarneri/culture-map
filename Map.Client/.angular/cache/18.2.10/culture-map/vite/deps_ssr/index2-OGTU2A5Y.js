import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  timeZones
} from "./chunk-2PJT7F6H.js";
import "./chunk-QPUGHU3V.js";
import {
  __async
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@esri/calcite-components/dist/components/index2.js
function groupByName() {
  return __async(this, null, function* () {
    return timeZones.sort().map((tz) => ({
      label: tz
    }));
  });
}
export {
  groupByName
};
/*! Bundled license information:

@esri/calcite-components/dist/components/index2.js:
  (*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
   * v2.13.2
   *)
*/
//# sourceMappingURL=index2-OGTU2A5Y.js.map
