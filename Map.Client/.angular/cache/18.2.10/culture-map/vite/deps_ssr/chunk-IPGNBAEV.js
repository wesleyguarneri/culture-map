import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  e
} from "./chunk-XP2AJZUL.js";
import {
  d
} from "./chunk-NVOJILW6.js";
import {
  y
} from "./chunk-4DSGTDZJ.js";
import {
  f
} from "./chunk-ZDRQSPB6.js";
import {
  a
} from "./chunk-6JFGZTLU.js";
import {
  m2 as m,
  s2 as s
} from "./chunk-2ZJE6ZFX.js";

// ../../../node_modules/@arcgis/core/layers/graphics/hydratedFeatures.js
function o(e2) {
  return "declaredClass" in e2;
}
function m2(e2) {
  return "declaredClass" in e2;
}
function l(e2) {
  return "declaredClass" in e2;
}
function c(n, r) {
  return n ? l(n) ? n : new d({
    layer: r,
    sourceLayer: r,
    visible: n.visible,
    symbol: a(n.symbol),
    attributes: a(n.attributes),
    geometry: u(n.geometry)
  }) : null;
}
function u(e2) {
  return null == e2 ? null : o(e2) ? e2 : y(f2(e2));
}
function f2(e2) {
  const {
    wkid: t,
    wkt: n,
    wkt2: r,
    latestWkid: a2
  } = e2.spatialReference, s2 = {
    wkid: t,
    wkt: n,
    wkt2: r,
    latestWkid: a2
  };
  switch (e2.type) {
    case "point": {
      const {
        x: t2,
        y: n2,
        z: r2,
        m: a3
      } = e2;
      return {
        x: t2,
        y: n2,
        z: r2,
        m: a3,
        spatialReference: s2
      };
    }
    case "polygon": {
      const {
        rings: t2,
        hasZ: n2,
        hasM: r2
      } = e2;
      return {
        rings: p(t2),
        hasZ: n2,
        hasM: r2,
        spatialReference: s2
      };
    }
    case "polyline": {
      const {
        paths: t2,
        hasZ: n2,
        hasM: r2
      } = e2;
      return {
        paths: p(t2),
        hasZ: n2,
        hasM: r2,
        spatialReference: s2
      };
    }
    case "extent": {
      const {
        xmin: t2,
        xmax: n2,
        ymin: r2,
        ymax: a3,
        zmin: i,
        zmax: o2,
        mmin: m3,
        mmax: l2,
        hasZ: c2,
        hasM: u2
      } = e2;
      return {
        xmin: t2,
        xmax: n2,
        ymin: r2,
        ymax: a3,
        zmin: i,
        zmax: o2,
        mmin: m3,
        mmax: l2,
        hasZ: c2,
        hasM: u2,
        spatialReference: s2
      };
    }
    case "multipoint": {
      const {
        points: t2,
        hasZ: n2,
        hasM: r2
      } = e2;
      return {
        points: d2(t2) ? h(t2) : t2,
        hasZ: n2,
        hasM: r2,
        spatialReference: s2
      };
    }
    default:
      return;
  }
}
function p(e2) {
  return y2(e2) ? e2.map((e3) => h(e3)) : e2;
}
function h(e2) {
  return e2.map((e3) => Array.from(e3));
}
function y2(e2) {
  for (const t of e2) if (0 !== t.length) return d2(t);
  return false;
}
function d2(e2) {
  return e2.length > 0 && (s(e2[0]) || m(e2[0]));
}
function x(e2, t) {
  if (!e2) return null;
  let n;
  if (m2(e2)) {
    if (null == t) return e2.clone();
    if (m2(t)) return t.copy(e2);
  }
  return null != t ? (n = t, n.x = e2.x, n.y = e2.y, n.spatialReference = e2.spatialReference, e2.hasZ ? (n.z = e2.z, n.hasZ = e2.hasZ) : (n.z = void 0, n.hasZ = false), e2.hasM ? (n.m = e2.m, n.hasM = true) : (n.m = void 0, n.hasM = false)) : (n = e(e2.x, e2.y, e2.z, e2.spatialReference), e2.hasM && (n.m = e2.m, n.hasM = true)), n;
}
function k(e2) {
  const {
    wkid: t,
    wkt: n,
    wkt2: r,
    latestWkid: a2
  } = e2, s2 = {
    wkid: t,
    wkt: n,
    wkt2: r,
    latestWkid: a2
  };
  return f.fromJSON(s2);
}

export {
  o,
  c,
  u,
  x,
  k
};
//# sourceMappingURL=chunk-IPGNBAEV.js.map
