import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  y
} from "./chunk-VZ37C3ID.js";
import {
  P,
  x
} from "./chunk-VOOO6FU5.js";
import {
  B,
  C,
  D as D2,
  H
} from "./chunk-FP37456K.js";
import {
  o
} from "./chunk-HGHPYGKP.js";
import {
  D,
  h
} from "./chunk-GCVQXAS4.js";
import {
  f
} from "./chunk-ZDRQSPB6.js";
import {
  e3 as e
} from "./chunk-NXK752PZ.js";
import {
  A2 as A,
  t3 as t
} from "./chunk-2ZJE6ZFX.js";

// ../../../node_modules/@arcgis/core/layers/graphics/dehydratedFeatures.js
var f2 = class {
  constructor(e2, t2, s) {
    this.uid = e2, this.geometry = t2, this.attributes = s, this.visible = true, this.objectId = null, this.centroid = null;
  }
};
function y2(e2) {
  return null != e2.geometry;
}
var g = class {
  constructor() {
    this.exceededTransferLimit = false, this.features = [], this.fields = [], this.hasM = false, this.hasZ = false, this.geometryType = null, this.objectIdFieldName = null, this.globalIdFieldName = null, this.geometryProperties = null, this.geohashFieldName = null, this.spatialReference = null, this.transform = null;
  }
};
function b(e2, t2) {
  const s = o.fromJSON(e2.geometryType), n = f.fromJSON(e2.spatialReference), i = e2.transform, o2 = e2.objectIdFieldName, a = t2?.maxStringAttributeLength, f3 = t2?.maxStringAttributeFields;
  let y3;
  const g2 = e2.features.map((t3) => {
    const r = d(t3, s, n, e2.objectIdFieldName), m = r.geometry;
    if (z(r.attributes, f3, a, (e3) => {
      y3 ??= [];
      const t4 = M(r, o2);
      null != t4 && y3.push({
        objectId: t4,
        attribute: e3
      });
    }), null != m && i) switch (m.type) {
      case "point":
        r.geometry = C(i, m, m);
        break;
      case "multipoint":
        r.geometry = B(i, m, m);
        break;
      case "polygon":
        r.geometry = D2(i, m, m);
        break;
      case "polyline":
        r.geometry = H(i, m, m);
        break;
      case "extent":
      case "mesh":
        r.geometry = m;
    }
    return r;
  });
  return {
    geometryType: s,
    features: g2,
    spatialReference: n,
    fields: e2.fields?.map((e3) => y.fromJSON(e3)) ?? [],
    objectIdFieldName: e2.objectIdFieldName,
    globalIdFieldName: e2.globalIdFieldName,
    geohashFieldName: e2.geohashFieldName,
    geometryProperties: e2.geometryProperties,
    hasZ: e2.hasZ,
    hasM: e2.hasM,
    exceededTransferLimit: e2.exceededTransferLimit,
    transform: null,
    missingAttributes: y3
  };
}
function d(e2, t2, r, n) {
  return {
    uid: e(),
    objectId: n && e2.attributes ? e2.attributes[n] : null,
    attributes: e2.attributes,
    geometry: x2(e2.geometry, t2, r),
    visible: true
  };
}
function x2(e2, t2, s) {
  if (null == e2) return null;
  switch (t2) {
    case "point": {
      const t3 = e2;
      return {
        x: t3.x,
        y: t3.y,
        z: t3.z,
        m: t3.m,
        hasZ: null != t3.z,
        hasM: null != t3.m,
        type: "point",
        spatialReference: s
      };
    }
    case "polyline": {
      const t3 = e2;
      return {
        paths: t3.paths,
        hasZ: !!t3.hasZ,
        hasM: !!t3.hasM,
        type: "polyline",
        spatialReference: s
      };
    }
    case "polygon": {
      const t3 = e2;
      return {
        rings: t3.rings,
        hasZ: !!t3.hasZ,
        hasM: !!t3.hasM,
        type: "polygon",
        spatialReference: s
      };
    }
    case "multipoint": {
      const t3 = e2;
      return {
        points: t3.points,
        hasZ: !!t3.hasZ,
        hasM: !!t3.hasM,
        type: "multipoint",
        spatialReference: s
      };
    }
  }
}
function j(e2) {
  if (null == e2) return 0;
  let s = 32;
  switch (e2.type) {
    case "point":
      s += 42;
      break;
    case "polyline":
    case "polygon": {
      let t2 = 0;
      const r = 2 + (e2.hasZ ? 1 : 0) + (e2.hasM ? 1 : 0), n = "polyline" === e2.type ? e2.paths : e2.rings;
      for (const e3 of n) t2 += e3.length;
      s += 8 * t2 * r + 64, s += 128 * t2, s += 34, s += 32 * (n.length + 1);
      break;
    }
    case "multipoint": {
      const t2 = 2 + (e2.hasZ ? 1 : 0) + (e2.hasM ? 1 : 0), r = e2.points.length;
      s += 8 * r * t2 + 64, s += 128 * r, s += 34, s += 32;
      break;
    }
    case "extent":
      s += 98, e2.hasM && (s += 32), e2.hasZ && (s += 32);
      break;
    case "mesh":
      s += A(e2.vertexAttributes.position, e2.vertexAttributes.normal, e2.vertexAttributes.uv, e2.vertexAttributes.tangent);
  }
  return s;
}
function Z(t2) {
  let s = 32;
  return s += t(t2.attributes), s += 3, s += 8 + j(t2.geometry), s;
}
function k(e2) {
  if (null == e2) return 0;
  switch (e2.type) {
    case "point":
      return 1;
    case "polyline": {
      let t2 = 0;
      for (const s of e2.paths) t2 += s.length;
      return t2;
    }
    case "polygon": {
      let t2 = 0;
      for (const s of e2.rings) t2 += s.length;
      return t2;
    }
    case "multipoint":
      return e2.points.length;
    case "extent":
      return 2;
    case "mesh": {
      const t2 = e2.vertexAttributes && e2.vertexAttributes.position;
      return t2 ? t2.length / 3 : 0;
    }
    default:
      return;
  }
}
function N(e2) {
  if (null == e2) return false;
  switch (e2.type) {
    case "extent":
    case "point":
      return true;
    case "polyline":
      for (const t2 of e2.paths) if (t2.length > 0) return true;
      return false;
    case "polygon":
      for (const t2 of e2.rings) if (t2.length > 0) return true;
      return false;
    case "multipoint":
      return e2.points.length > 0;
    case "mesh":
      return !e2.loaded || e2.vertexAttributes.position.length > 0;
  }
}
function F(e2, t2) {
  switch (P(t2), "mesh" === e2.type && (e2 = e2.extent), e2.type) {
    case "point":
      t2[0] = t2[3] = e2.x, t2[1] = t2[4] = e2.y, e2.hasZ && (t2[2] = t2[5] = e2.z);
      break;
    case "polyline":
      for (let s = 0; s < e2.paths.length; s++) x(t2, e2.paths[s], !!e2.hasZ);
      break;
    case "polygon":
      for (let s = 0; s < e2.rings.length; s++) x(t2, e2.rings[s], !!e2.hasZ);
      break;
    case "multipoint":
      x(t2, e2.points, !!e2.hasZ);
      break;
    case "extent":
      t2[0] = e2.xmin, t2[1] = e2.ymin, t2[3] = e2.xmax, t2[4] = e2.ymax, null != e2.zmin && (t2[2] = e2.zmin), null != e2.zmax && (t2[5] = e2.zmax);
  }
}
function I(e2, t2) {
  switch (D(t2), "mesh" === e2.type && (e2 = e2.extent), e2.type) {
    case "point":
      t2[0] = t2[2] = e2.x, t2[1] = t2[3] = e2.y;
      break;
    case "polyline":
      for (let s = 0; s < e2.paths.length; s++) h(t2, e2.paths[s]);
      break;
    case "polygon":
      for (let s = 0; s < e2.rings.length; s++) h(t2, e2.rings[s]);
      break;
    case "multipoint":
      h(t2, e2.points);
      break;
    case "extent":
      t2[0] = e2.xmin, t2[1] = e2.ymin, t2[2] = e2.xmax, t2[3] = e2.ymax;
  }
}
function M(e2, t2) {
  return null != e2.objectId ? e2.objectId : e2.attributes && t2 ? e2.attributes[t2] : null;
}
function z(e2, t2, s, r) {
  if (t2?.size && null != s && e2) for (const n in e2) {
    if (!t2.has(n)) continue;
    const i = e2[n];
    "string" == typeof i && i.length > s && (r(n), e2[n] = "");
  }
}

export {
  f2 as f,
  y2 as y,
  g,
  b,
  Z,
  k,
  N,
  F,
  I,
  M,
  z
};
//# sourceMappingURL=chunk-MLTNYBJG.js.map
