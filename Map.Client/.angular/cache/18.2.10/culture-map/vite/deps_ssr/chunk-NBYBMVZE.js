import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  __async
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/views/3d/layers/Lyr3DWasm.js
var e;
var n = null;
var t = /* @__PURE__ */ new Map();
function i(i2) {
  return __async(this, null, function* () {
    null == n && (null == e && (e = import("./Lyr3DWasmPerSceneView-4UG2CIHW.js")), n = yield e);
    const l2 = i2.view;
    let a2 = t.get(l2);
    return a2 || (a2 = new n.default({
      view: l2
    }), t.set(l2, a2)), yield a2.initializeWasm(), a2.add3DTilesLayerView(i2);
  });
}
function l(e2) {
  return t.get(e2);
}
function a(i2) {
  const l2 = i2.view, a2 = t.get(l2);
  if (a2) {
    a2.remove3DTilesLayerView(i2) < 1 && (t.delete(l2), 0 === t.size && (e = null, n = null));
  }
}

export {
  i,
  l,
  a
};
//# sourceMappingURL=chunk-NBYBMVZE.js.map
