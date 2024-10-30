import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  c
} from "./chunk-ZSJNH2BT.js";
import {
  e
} from "./chunk-6UEMNP3E.js";

// ../../../node_modules/@arcgis/core/views/3d/interactive/editingTools/manipulatorUtils.js
function o(e2, n) {
  return t(e2?.data.coordinateHelper.hasZ(), n);
}
function t(e2, o2) {
  return !!e2 && "on-the-ground" !== o2.mode && !c(o2);
}
function r(n, o2) {
  let t2 = null;
  const r2 = n.events.on("grab-changed", (e2) => {
    null != t2 && (t2.remove(), t2 = null), "start" === e2.action ? (t2 = n.disableDisplay(), o2 && o2(e2)) : o2 && o2(e2);
  });
  return e(() => {
    t2?.remove(), r2.remove();
  });
}

export {
  o,
  r
};
//# sourceMappingURL=chunk-QLFBFOUA.js.map
