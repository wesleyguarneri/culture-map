import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  __async
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/views/3d/layers/VoxelWasm.js
var e;
var n = null;
var t = /* @__PURE__ */ new Map();
function l(l2) {
  return __async(this, null, function* () {
    null == n && (null == e && (e = import("./VoxelWasmPerSceneView-QBUHS7V2.js")), n = yield e);
    const o2 = l2.view;
    let i2 = t.get(o2);
    return i2 || (i2 = new n.default({
      view: o2
    }), t.set(o2, i2)), i2.addVoxelLayer(l2);
  });
}
function o(e2) {
  return t.get(e2);
}
function i(l2) {
  const o2 = l2.view, i2 = t.get(o2);
  if (i2) {
    i2.removeVoxelLayer(l2) < 1 && (t.delete(o2), 0 === t.size && (e = null, n = null));
  }
}

export {
  l,
  o,
  i
};
//# sourceMappingURL=chunk-HZA5JXRZ.js.map
