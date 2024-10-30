import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  a,
  i as i3,
  p,
  u
} from "./chunk-D7KGWTOO.js";
import {
  i as i2
} from "./chunk-PDKNFFCG.js";
import {
  n as n2,
  o
} from "./chunk-BKOZEXTL.js";
import {
  i2 as i,
  s
} from "./chunk-K6JW77RY.js";
import {
  N
} from "./chunk-L6FG3WIC.js";
import {
  T
} from "./chunk-VOOO6FU5.js";
import {
  O
} from "./chunk-KOI252FF.js";
import {
  n
} from "./chunk-J4GMQHGL.js";

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/lib/intersectorUtilsConversions.js
function f(r, e) {
  return s(r) || i(r) ? U(r.target?.object, e) : n2(r) ? e.map?.ground : i3(r) || a(r) || o(r) || u(r) ? U(r.target, e) : null;
}
function m(r, e) {
  const t = h(r, e);
  return null != t && "graphic" === t.type ? t.graphic : null;
}
function h(r, e) {
  if (null == r) return null;
  if (s(r) || i(r)) return d(r.target?.object, e);
  if (i3(r)) {
    const e2 = r.target.createGraphic();
    return {
      type: "graphic",
      graphic: e2,
      layer: e2.layer
    };
  }
  if (u(r)) {
    const e2 = r.target.createVoxelGraphic();
    return {
      type: "graphic",
      graphic: e2,
      layer: e2.layer
    };
  }
  if (p(r)) {
    const e2 = r.target.createTiles3DGraphic();
    return {
      type: "graphic",
      graphic: e2,
      layer: e2.layer
    };
  }
  return o(r) || i2(r) ? d(r.target, e) : a(r) ? y(r.target, e) : null;
}
function d(r, e) {
  if (null == r?.graphicUid) return null;
  const t = U(r, e);
  if (null == t) return null;
  if (t === e.graphics) return null == e.graphicsView || "number" != typeof r.graphicUid ? null : e.graphicsView.getHit(r.graphicUid);
  const n3 = e.allLayerViews.find((r2) => r2.layer === t);
  return !n3 || n3.suspended || null == r.graphicUid ? null : "getHit" in n3 ? n3.getHit(r.graphicUid) : null;
}
function y(r, e) {
  const t = U(r, e);
  if (null == t) return null;
  const n3 = e.allLayerViews.find((r2) => r2.layer === t);
  return n3 && !n3.suspended && "getGraphicFromIntersectorTarget" in n3 ? b(n3.getGraphicFromIntersectorTarget(r)) : null;
}
function j(r, e) {
  const t = U(r, e);
  if (null == t) return null;
  const n3 = e.allLayerViews.find((r2) => r2.layer === t);
  return n3 && !n3.suspended && "getAABBFromIntersectorTarget" in n3 ? n3.getAABBFromIntersectorTarget(r) : null;
}
function b(r) {
  return null != r ? {
    type: "graphic",
    graphic: r,
    layer: r.layer
  } : null;
}
function U(r, e) {
  return null == r?.layerUid ? null : null != e.graphicsView && r.layerUid === e.graphicsView.processor.layer.id ? e.graphics : e.map.allLayers.find((e2) => e2.uid === r.layerUid);
}
function V(e, i4) {
  if (s(e) || i(e)) return N(e.target.object.boundingVolumeWorldSpace.bounds);
  if (i2(e)) {
    O(B, e.transformation);
    const t = Math.max(B[0], B[1], B[2]);
    return e.target.baseBoundingSphere.radius * t;
  }
  if (a(e)) {
    const r = j(e.target, i4);
    return r ? 0.5 * T(r) : null;
  }
  return null;
}
function w(r) {
  return !s(r) && !i(r) && (i2(r) ? r.target.numLodLevels > 1 : !!a(r));
}
var B = n();

export {
  f,
  m,
  h,
  V,
  w
};
//# sourceMappingURL=chunk-W255B427.js.map
