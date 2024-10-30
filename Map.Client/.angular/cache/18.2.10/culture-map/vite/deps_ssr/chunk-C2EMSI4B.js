import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  $
} from "./chunk-KSVRNA4R.js";
import {
  N
} from "./chunk-2H3S7IXI.js";
import {
  i,
  o
} from "./chunk-JARG4EKD.js";
import {
  s
} from "./chunk-YT63GLYW.js";
import {
  d as d2
} from "./chunk-6XY35LS7.js";
import {
  d
} from "./chunk-NVOJILW6.js";
import {
  w
} from "./chunk-RNF7VOCU.js";
import {
  _
} from "./chunk-TIRJMGGG.js";
import {
  f
} from "./chunk-ZDRQSPB6.js";
import {
  r2 as r
} from "./chunk-UDMPWVPF.js";
import {
  n2 as n
} from "./chunk-6JFGZTLU.js";

// ../../../node_modules/@arcgis/core/rest/support/meshFeatureSet.js
var m = () => n.getLogger("esri.rest.support.meshFeatureSet");
function p(t, r2, o2) {
  const n2 = o2.features;
  o2.features = [], delete o2.geometryType;
  const s2 = d2.fromJSON(o2);
  if (s2.geometryType = "mesh", !o2.assetMaps) return s2;
  const i2 = d3(r2, o2.assetMaps), u = t.sourceSpatialReference ?? f.WGS84, f2 = o2.globalIdFieldName, {
    outFields: c
  } = t, m2 = null != c && c.length > 0 ? g(c.includes("*") ? null : new Set(c)) : () => ({});
  for (const a of n2) {
    const t2 = y(a, f2, u, r2, i2);
    s2.features.push(new d({
      geometry: t2,
      attributes: m2(a)
    }));
  }
  return s2;
}
function g(e) {
  return ({
    attributes: t
  }) => {
    if (!t) return {};
    if (!e) return t;
    for (const r2 in t) e.has(r2) || delete t[r2];
    return t;
  };
}
function y(e, t, r2, s2, a) {
  const i2 = e.attributes[t], u = a.get(i2);
  if (null == u || !e.geometry) return null;
  const f2 = E(e, r2, s2), c = w.fromJSON(e.geometry);
  c.spatialReference = r2;
  const l = h(e.attributes, s2), m2 = r2.isGeographic ? "local" : "georeferenced", p2 = D(u);
  return p2 ? $.createWithExternalSource(f2, p2, {
    extent: c,
    transform: l,
    vertexSpace: m2
  }) : $.createIncomplete(f2, {
    extent: c,
    transform: l,
    vertexSpace: m2
  });
}
function E({
  attributes: e
}, t, {
  transformFieldRoles: r2
}) {
  const o2 = e[r2.originX], n2 = e[r2.originY], a = e[r2.originZ];
  return new _({
    x: o2,
    y: n2,
    z: a,
    spatialReference: t
  });
}
function h(e, {
  transformFieldRoles: t
}) {
  return new N({
    translation: [e[t.translationX], -e[t.translationZ], e[t.translationY]],
    rotationAxis: [e[t.rotationX], -e[t.rotationZ], e[t.rotationY]],
    rotationAngle: e[t.rotationDeg],
    scale: [e[t.scaleX], e[t.scaleZ], e[t.scaleY]]
  });
}
var S;
function d3(e, t) {
  const o2 = /* @__PURE__ */ new Map();
  for (const n2 of t) {
    const t2 = n2.parentGlobalId;
    if (null == t2) continue;
    const s2 = n2.assetName, a = n2.assetType, i2 = n2.assetHash, u = n2.assetURL, f2 = n2.conversionStatus, l = n2.seqNo, p2 = s(a, e.supportedFormats);
    if (!p2) {
      m().error("mesh-feature-set:unknown-format", `Service returned an asset of type ${a}, but it does not list it as a supported type`);
      continue;
    }
    const g2 = r(o2, t2, () => ({
      files: /* @__PURE__ */ new Map()
    }));
    r(g2.files, s2, () => ({
      name: s2,
      type: a,
      mimeType: p2,
      status: M(f2),
      parts: []
    })).parts[l] = {
      hash: i2,
      url: u
    };
  }
  return o2;
}
function D(e) {
  const t = Array.from(e.files.values()), r2 = new Array();
  for (const o2 of t) {
    if (o2.status !== S.COMPLETED) return null;
    const e2 = new Array();
    for (const t2 of o2.parts) {
      if (!t2) return null;
      e2.push(new o(t2.url, t2.hash));
    }
    r2.push(new i(o2.name, o2.mimeType, e2));
  }
  return r2;
}
function M(e) {
  switch (e) {
    case "COMPLETED":
    case "SUBMITTED":
      return S.COMPLETED;
    case "INPROGRESS":
      return S.PENDING;
    default:
      return S.FAILED;
  }
}
!function(e) {
  e[e.FAILED = 0] = "FAILED", e[e.PENDING = 1] = "PENDING", e[e.COMPLETED = 2] = "COMPLETED";
}(S || (S = {}));

export {
  p,
  y,
  d3 as d
};
//# sourceMappingURL=chunk-C2EMSI4B.js.map
