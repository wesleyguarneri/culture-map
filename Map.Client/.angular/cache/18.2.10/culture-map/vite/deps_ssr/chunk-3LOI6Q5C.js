import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  isBrowser
} from "./chunk-7JIACICA.js";
import {
  forceUpdate
} from "./chunk-IAO6HACY.js";
import {
  __async
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@esri/calcite-components/dist/components/loadable.js
var resolveMap = /* @__PURE__ */ new WeakMap();
var promiseMap = /* @__PURE__ */ new WeakMap();
function setUpLoadableComponent(component) {
  promiseMap.set(component, new Promise((resolve) => resolveMap.set(component, resolve)));
}
function setComponentLoaded(component) {
  resolveMap.get(component)();
}
function componentLoaded(component) {
  return promiseMap.get(component);
}
function componentFocusable(component) {
  return __async(this, null, function* () {
    yield componentLoaded(component);
    if (!isBrowser()) {
      return;
    }
    forceUpdate(component);
    return new Promise((resolve) => requestAnimationFrame(() => resolve()));
  });
}

export {
  setUpLoadableComponent,
  setComponentLoaded,
  componentLoaded,
  componentFocusable
};
/*! Bundled license information:

@esri/calcite-components/dist/components/loadable.js:
  (*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
   * v2.13.2
   *)
*/
//# sourceMappingURL=chunk-3LOI6Q5C.js.map
