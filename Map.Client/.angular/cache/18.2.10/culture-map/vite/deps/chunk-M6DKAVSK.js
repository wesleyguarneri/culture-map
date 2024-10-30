import {
  isBrowser
} from "./chunk-23E6RT3O.js";
import {
  forceUpdate
} from "./chunk-2P72IR2Y.js";
import {
  __async
} from "./chunk-JWIQHGQB.js";

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
//# sourceMappingURL=chunk-M6DKAVSK.js.map
