import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  t as t2
} from "./chunk-KXVPQVTB.js";
import {
  d
} from "./chunk-6XY35LS7.js";
import {
  k
} from "./chunk-KYPTWEOO.js";
import {
  B,
  C,
  i,
  o
} from "./chunk-VOOO6FU5.js";
import {
  m
} from "./chunk-MRPCXIVS.js";
import {
  f
} from "./chunk-ZDRQSPB6.js";
import {
  Et,
  U,
  t3 as t
} from "./chunk-XLEC46FY.js";
import {
  a,
  s
} from "./chunk-6JFGZTLU.js";
import {
  __async
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/layers/support/kmlUtils.js
var c = {
  esriGeometryPoint: "points",
  esriGeometryPolyline: "polylines",
  esriGeometryPolygon: "polygons"
};
function d2(e) {
  const o2 = e.folders || [], t3 = o2.slice(), r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), i2 = /* @__PURE__ */ new Map(), f2 = /* @__PURE__ */ new Map(), a2 = /* @__PURE__ */ new Map(), l = {
    esriGeometryPoint: n,
    esriGeometryPolyline: i2,
    esriGeometryPolygon: f2
  };
  (e.featureCollection?.layers || []).forEach((e2) => {
    const o3 = a(e2);
    o3.featureSet.features = [];
    const t4 = e2.featureSet.geometryType;
    r.set(t4, o3);
    const a3 = e2.layerDefinition.objectIdField;
    "esriGeometryPoint" === t4 ? h(n, a3, e2.featureSet.features) : "esriGeometryPolyline" === t4 ? h(i2, a3, e2.featureSet.features) : "esriGeometryPolygon" === t4 && h(f2, a3, e2.featureSet.features);
  }), e.groundOverlays && e.groundOverlays.forEach((e2) => {
    a2.set(e2.id, e2);
  }), o2.forEach((o3) => {
    o3.networkLinkIds.forEach((r2) => {
      const s2 = P(r2, o3.id, e.networkLinks);
      s2 && t3.push(s2);
    });
  }), t3.forEach((e2) => {
    if (e2.featureInfos) {
      e2.points = a(r.get("esriGeometryPoint")), e2.polylines = a(r.get("esriGeometryPolyline")), e2.polygons = a(r.get("esriGeometryPolygon")), e2.mapImages = [];
      for (const o3 of e2.featureInfos) switch (o3.type) {
        case "esriGeometryPoint":
        case "esriGeometryPolyline":
        case "esriGeometryPolygon": {
          const t4 = l[o3.type].get(o3.id);
          t4 && e2[c[o3.type]]?.featureSet.features.push(t4);
          break;
        }
        case "GroundOverlay": {
          const t4 = a2.get(o3.id);
          t4 && e2.mapImages.push(t4);
          break;
        }
      }
      e2.fullExtent = j([e2]);
    }
  });
  const u = j(t3);
  return {
    folders: o2,
    sublayers: t3,
    extent: u
  };
}
function g(t3, s2, i2, f2) {
  const a2 = t?.findCredential(t3);
  t3 = Et(t3, {
    token: a2?.token
  });
  const l = s.kmlServiceUrl;
  return U(l, {
    query: {
      url: t3,
      model: "simple",
      folders: "",
      refresh: 0 !== i2 || void 0,
      outSR: JSON.stringify(s2)
    },
    responseType: "json",
    signal: f2
  });
}
function S(e, o2, t3 = null, r = []) {
  const s2 = [], n = {}, i2 = o2.sublayers, f2 = new Set(o2.folders.map((e2) => e2.id));
  return i2.forEach((o3) => {
    const i3 = new e();
    if (t3 ? i3.read(o3, t3) : i3.read(o3), r.length && f2.has(i3.id) && (i3.visible = r.includes(i3.id)), n[o3.id] = i3, null != o3.parentFolderId && -1 !== o3.parentFolderId) {
      const e2 = n[o3.parentFolderId];
      e2.sublayers || (e2.sublayers = []), e2.sublayers?.unshift(i3);
    } else s2.unshift(i3);
  }), s2;
}
function h(e, o2, t3) {
  t3.forEach((t4) => {
    e.set(t4.attributes[o2], t4);
  });
}
function G(e, o2) {
  let t3;
  return o2.some((o3) => o3.id === e && (t3 = o3, true)), t3;
}
function P(e, o2, t3) {
  const r = G(e, t3);
  return r && (r.parentFolderId = o2, r.networkLink = r), r;
}
function b(e) {
  return __async(this, null, function* () {
    const o2 = d.fromJSON(e.featureSet).features, r = e.layerDefinition, s2 = t2(r.drawingInfo.renderer), n = k.fromJSON(e.popupInfo), i2 = [];
    for (const t3 of o2) {
      const e2 = yield s2.getSymbolAsync(t3);
      t3.symbol = e2, t3.popupTemplate = n, t3.visible = true, i2.push(t3);
    }
    return i2;
  });
}
function j(e) {
  const o2 = i(C), t3 = i(C);
  for (const r of e) {
    if (r.polygons?.featureSet?.features) for (const e2 of r.polygons.featureSet.features) m(o2, e2.geometry), o(t3, o2);
    if (r.polylines?.featureSet?.features) for (const e2 of r.polylines.featureSet.features) m(o2, e2.geometry), o(t3, o2);
    if (r.points?.featureSet?.features) for (const e2 of r.points.featureSet.features) m(o2, e2.geometry), o(t3, o2);
    if (r.mapImages) for (const e2 of r.mapImages) m(o2, e2.extent), o(t3, o2);
  }
  return B(t3, C) ? void 0 : {
    xmin: t3[0],
    ymin: t3[1],
    zmin: t3[2],
    xmax: t3[3],
    ymax: t3[4],
    zmax: t3[5],
    spatialReference: f.WGS84
  };
}

export {
  d2 as d,
  g,
  S,
  b,
  j
};
//# sourceMappingURL=chunk-B2Q56YUE.js.map
