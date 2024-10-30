import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  f as f2,
  h
} from "./chunk-W255B427.js";
import {
  a
} from "./chunk-INUNNFZT.js";
import {
  T,
  e,
  i as i2,
  o2
} from "./chunk-K6JW77RY.js";
import {
  o
} from "./chunk-3ILFY654.js";
import {
  w
} from "./chunk-N4FQBAT2.js";
import {
  t as t2
} from "./chunk-W24M6HII.js";
import {
  n as n2
} from "./chunk-ZFES27RA.js";
import {
  d as d2
} from "./chunk-NVOJILW6.js";
import {
  m
} from "./chunk-7V4JSBFA.js";
import {
  d,
  i
} from "./chunk-VYTPFEL2.js";
import {
  _
} from "./chunk-TIRJMGGG.js";
import {
  f
} from "./chunk-ZDRQSPB6.js";
import {
  n
} from "./chunk-J4GMQHGL.js";
import {
  t2 as t
} from "./chunk-NXK752PZ.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/views/3d/support/hitTest.js
function U(e2, n3, i3, t3) {
  return __async(this, null, function* () {
    const s = i3 ? R(e2, i3) : t3, o3 = i(n3.x, n3.y);
    s.requiresGroundFeedback = true, s.enableDraped = true;
    const a2 = T(e2.state.viewingMode);
    a2.options.selectionMode = true, a2.options.store = e.ALL, e2.sceneIntersectionHelper.intersectIntersectorScreen(o3, a2, s);
    const p = b(e2, a2.results.all, s.graphics), g = a2.results.ground, y = f2(g, e2), h2 = null != y && "type" in y && m(y.type) ? y : null, E = {
      screenPoint: n3,
      results: p,
      ground: {
        mapPoint: j(e2, g),
        distance: o2(g) ? g.distanceInRenderSpace : 0,
        layer: h2
      }
    };
    return t2.SCENEVIEW_HITTEST_RETURN_INTERSECTOR && (E.intersector = a2), E;
  });
}
function I(e2, n3, r, t3) {
  const s = r ? R(e2, r) : t3, o3 = !(!s.graphics?.include && !s.graphics?.exclude), l = !(!s.mediaElements?.include && !s.mediaElements?.exclude), c = d(n3);
  s.enableDraped = s.include && !s.include.has(w) || s.exclude?.has(w);
  const a2 = e2.sceneIntersectionHelper, p = T(e2.state.viewingMode);
  if (p.options.selectionMode = true, p.options.store = o3 || l ? e.ALL : e.MIN, p.options.hud = !r?.excludeHud, a2.intersectIntersectorScreen(c, p, s), o3 || l) {
    for (const n4 of p.results.all) {
      const r2 = h(n4, e2);
      if (null == r2) return j(e2, n4);
      if (o3 && ("graphic" !== r2.type || S(s.graphics, r2.graphic))) return j(e2, n4);
      if (l && ("media" !== r2.type || x(s.mediaElements, r2.element))) return j(e2, n4);
    }
    return null;
  }
  return j(e2, p.results.min);
}
function b(e2, n3, r) {
  const i3 = new Array();
  let t3 = null;
  for (let s = 0; s < n3.length; s++) {
    const o3 = n3[s], c = f2(o3, e2);
    if (null != c && (c === e2.map.ground || "type" in c && m(c.type))) break;
    const a2 = h(o3, e2);
    if (null == a2) continue;
    if ("graphic" === a2.type) {
      if (null == t3 && s !== n3.length - 1 && (t3 = /* @__PURE__ */ new Set()), null != t3) {
        const e3 = w2(a2.graphic);
        if (t3.has(e3)) continue;
        t3.add(e3);
      }
      if (!S(r, a2.graphic)) continue;
    }
    const u = j(e2, o3), d3 = o3.distanceInRenderSpace;
    if ("media" === a2.type) {
      const e3 = a2.element.toSource(u);
      i3.push(__spreadProps(__spreadValues({}, a2), {
        mapPoint: u,
        distance: d3,
        sourcePoint: e3
      }));
    } else i3.push(__spreadProps(__spreadValues({}, a2), {
      mapPoint: u,
      distance: d3
    }));
  }
  return i3;
}
function j(e2, n3, r) {
  return n3.getIntersectionPoint(T2) ? (r = L(e2, T2, r), n3.intersector === i2.TERRAIN && e2.basemapTerrain && (r.z = a(e2.basemapTerrain, r) ?? 0), r) : null;
}
function w2(e2) {
  const n3 = e2.sourceLayer, r = e2.layer, i3 = n3 && "objectIdField" in n3 ? n3 : r && "objectIdField" in r ? r : n3;
  if (i3) {
    const n4 = i3.objectIdField ?? o, r2 = e2.attributes?.[n4];
    if (r2) return `o-${i3.id}-${r2}`;
  }
  return `u-${e2.uid}`;
}
function S(e2, n3) {
  return x(e2, w2(n3));
}
function x(e2, n3) {
  return null == e2 || (null == e2.include || e2.include.has(n3)) && (null == e2.exclude || !e2.exclude.has(n3));
}
function L(e2, n3, r) {
  let i3 = e2.spatialReference || f.WGS84;
  return n2(n3, e2.renderSpatialReference, T2, i3) ? n3 = T2 : (i3 = f.WGS84, n2(n3, e2.renderSpatialReference, T2, i3) && (n3 = T2)), r ? (r.x = n3[0], r.y = n3[1], r.z = n3[2], r.spatialReference = i3) : r = new _(n3, i3), r;
}
function R(e2, n3) {
  const r = C(e2, n3.include, P.INCLUDE), i3 = C(e2, n3.exclude, P.EXCLUDE);
  return {
    include: r.layerUids,
    exclude: i3.layerUids,
    graphics: {
      include: r.graphicUids,
      exclude: i3.graphicUids
    },
    mediaElements: {
      include: r.mediaElements,
      exclude: i3.mediaElements
    }
  };
}
function C(r, i3, t3, s = {
  layerUids: void 0,
  graphicUids: void 0,
  mediaElements: void 0
}) {
  if (!i3) return s;
  if (i3 instanceof d2) D(s, w2(i3)), t3 === P.INCLUDE && (null != r.graphicsView && i3.layer === r ? v(s, r.graphicsView.processor.layer.id) : i3.layer && v(s, i3.layer.uid));
  else if ("layer" in i3 && "element" in i3) N(s, i3.element), t3 === P.INCLUDE && v(s, i3.layer.uid);
  else if (t(i3)) for (const e2 of i3) e2 === r.graphics && null != r.graphicsView ? v(s, r.graphicsView.processor.layer.id) : e2 === r.map.ground ? v(s, w) : C(r, e2, t3, s);
  else "uid" in i3 && v(s, i3.uid);
  return s;
}
function v(e2, n3) {
  e2.layerUids || (e2.layerUids = /* @__PURE__ */ new Set()), e2.layerUids.add(n3);
}
function D(e2, n3) {
  e2.graphicUids || (e2.graphicUids = /* @__PURE__ */ new Set()), e2.graphicUids.add(n3);
}
function N(e2, n3) {
  e2.mediaElements || (e2.mediaElements = /* @__PURE__ */ new Set()), e2.mediaElements.add(n3);
}
var T2 = n();
var P;
!function(e2) {
  e2[e2.INCLUDE = 0] = "INCLUDE", e2[e2.EXCLUDE = 1] = "EXCLUDE";
}(P || (P = {}));

export {
  U,
  I,
  L,
  R
};
//# sourceMappingURL=chunk-YFBJMO7M.js.map
