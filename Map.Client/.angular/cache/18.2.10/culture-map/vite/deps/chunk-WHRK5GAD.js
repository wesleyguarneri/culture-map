import {
  A,
  d
} from "./chunk-6WHTZNUH.js";
import {
  e
} from "./chunk-7DA6A5LD.js";

// ../../../node_modules/@arcgis/core/layers/catalog/catalogUtils.js
var r = /* @__PURE__ */ new WeakMap();
function a(o) {
  return !o.destroyed && (r.has(o) || o.addHandles([d(() => {
    const e2 = o.parent;
    return !(!e2 || !("type" in e2)) && ("catalog-dynamic-group" === e2.type || a(e2));
  }, (e2) => r.set(o, e2), A), e(() => r.delete(o))]), r.get(o));
}

export {
  a
};
//# sourceMappingURL=chunk-WHRK5GAD.js.map
