import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  F,
  s as s2
} from "./chunk-P2MUOE6G.js";
import {
  r
} from "./chunk-ZT7V2AVD.js";
import {
  K,
  _,
  x
} from "./chunk-XLEC46FY.js";
import {
  V
} from "./chunk-U3RHUXYK.js";
import {
  b
} from "./chunk-UDMPWVPF.js";
import {
  f,
  u
} from "./chunk-6WGE3IUL.js";
import {
  n2 as n,
  s
} from "./chunk-6JFGZTLU.js";

// ../../../node_modules/@arcgis/core/support/basemapUtils.js
var p = () => n.getLogger("esri.support.basemapUtils");
function y() {
  return {};
}
function m(e) {
  for (const r2 in e) {
    const t = e[r2];
    u(t), delete e[r2];
  }
}
function b2(t, n2) {
  let a;
  if ("string" == typeof t) {
    const i = t in s2, l = !i && t.includes("/");
    if (!i && !l) {
      const e = Object.entries(s2).filter(([e2, t2]) => s.apiKey && !t2.classic || !s.apiKey && (t2.classic || t2.is3d)).map(([e2]) => `"${e2}"`).sort().join(", ");
      return p().warn(`Unable to find basemap definition for: ${t}. Try one of these: ${e}`), null;
    }
    n2 && (a = n2[t]), a || (a = i ? F.fromId(t) : new F({
      style: {
        id: t
      }
    }), n2 && (n2[t] = a));
  } else a = b(F, t);
  return a?.destroyed && (p().warn("The provided basemap is already destroyed", {
    basemap: a
  }), a = null), a;
}
function d(e) {
  return "Web Scene" === e.portalItem?.type || e.referenceLayers.some((e2) => "scene" === e2.type);
}
function L(e) {
  return !!e?.portalItem?.tags?.some((e2) => "beta" === e2.toLowerCase());
}
function S(e, r2) {
  return e.basemap?.referenceLayers?.some((e2) => e2.uid === r2) || e.basemap?.baseLayers?.some((e2) => e2.uid === r2);
}
function v(e, r2 = null) {
  const t = b2(e);
  if (!t) return null;
  const n2 = t.clone();
  return r2 && (n2.baseLayers = T(n2.baseLayers, r2.baseLayers), n2.referenceLayers = T(n2.referenceLayers, r2.referenceLayers)), n2;
}
var g;
function h(e) {
  if (g) return g(e);
  let r2 = null;
  const t = M(e), n2 = !t?.baseLayers.length;
  for (const a in s2) {
    const e2 = K2(t, $(s2[a]), {
      mustMatchReferences: n2
    });
    if ("equal" === e2) {
      r2 = a;
      break;
    }
    "base-layers-equal" === e2 && (r2 = a);
  }
  return r2;
}
function R(e, r2) {
  if (e === r2) return true;
  if (null != e?.portalItem?.id && e.portalItem.id === r2?.portalItem?.id) return true;
  return "equal" === K2(M(e), M(r2), {
    mustMatchReferences: true
  });
}
function T(e, r2) {
  const n2 = new V();
  return e.forEach((e2) => {
    const t = r2.find((r3) => "scene" !== r3.type && D(A(e2), A(r3))) || e2;
    n2.includes(t) ? n2.push(e2) : n2.push(t);
  }), n2;
}
function w(e) {
  return !!e?.baseLayers.concat(e.referenceLayers).some(j);
}
function j(e) {
  if (x2(e.url)) return true;
  if ("vector-tile" === e.type) for (const r2 in e.sourceNameToSource) {
    const t = e.sourceNameToSource[r2];
    if (x2(t?.sourceUrl)) return true;
  }
  return false;
}
function U(e, r2) {
  if (null == r2 || null == e) return {
    spatialReference: null,
    updating: false
  };
  if ("not-loaded" === r2.loadStatus) return r2.load(), {
    spatialReference: null,
    updating: true
  };
  if (r2.spatialReference) return {
    spatialReference: r2.spatialReference,
    updating: false
  };
  if (0 === r2.baseLayers.length) return {
    spatialReference: null,
    updating: false
  };
  const t = r2.baseLayers.at(0);
  switch (t.loadStatus) {
    case "not-loaded":
      t.load();
    case "loading":
      return {
        spatialReference: null,
        updating: true
      };
    case "failed":
      return {
        spatialReference: null,
        updating: false
      };
  }
  const n2 = (("supportedSpatialReferences" in t ? t.supportedSpatialReferences : null) || ["tileInfo" in t ? t.tileInfo?.spatialReference : t.spatialReference]).filter(Boolean), a = e.spatialReference;
  return a ? {
    spatialReference: n2.find((e2) => a.equals(e2)) ?? n2[0] ?? null,
    updating: false
  } : {
    spatialReference: n2[0],
    updating: false
  };
}
var q = /^(basemaps|ibasemaps).*-api\.arcgis\.com$/i;
function x2(e) {
  if (!e) return false;
  const r2 = new x(_(e));
  return !!r2.authority && q.test(r2.authority);
}
function M(e) {
  return e ? !e.loaded && e.resourceInfo ? $(e.resourceInfo.data) : {
    baseLayers: k(e.baseLayers),
    referenceLayers: k(e.referenceLayers)
  } : null;
}
function k(e) {
  return (V.isCollection(e) ? e.toArray() : e).map(A);
}
function A(e) {
  return {
    type: e.type,
    effect: "effect" in e ? e.effect : void 0,
    url: E("urlTemplate" in e && e.urlTemplate || e.url || "styleUrl" in e && e.styleUrl || ""),
    minScale: "minScale" in e && null != e.minScale ? e.minScale : 0,
    maxScale: "maxScale" in e && null != e.maxScale ? e.maxScale : 0,
    opacity: null != e.opacity ? e.opacity : 1,
    visible: null == e.visible || !!e.visible,
    sublayers: "map-image" !== e.type && "wms" !== e.type || null == e.sublayers ? void 0 : e.sublayers?.map((e2) => ({
      id: e2.id,
      visible: e2.visible
    })),
    activeLayerId: "wmts" === e.type ? e.activeLayer?.id : void 0
  };
}
function C(e) {
  return e.isReference || "ArcGISSceneServiceLayer" === e.layerType;
}
function $(e) {
  return e ? {
    baseLayers: G((e.baseMapLayers ?? []).filter((e2) => !C(e2))),
    referenceLayers: G((e.baseMapLayers ?? []).filter((e2) => C(e2)))
  } : null;
}
function G(e) {
  return e.map((e2) => B(e2));
}
function B(e) {
  let r2;
  switch (e.layerType) {
    case "VectorTileLayer":
      r2 = "vector-tile";
      break;
    case "ArcGISTiledMapServiceLayer":
      r2 = "tile";
      break;
    case "ArcGISSceneServiceLayer":
      r2 = "scene";
      break;
    default:
      r2 = "unknown";
  }
  return {
    type: r2,
    effect: e.effect,
    url: E(e.templateUrl || e.urlTemplate || e.styleUrl || e.url),
    minScale: e.minScale ?? 0,
    maxScale: e.maxScale ?? 0,
    opacity: e.opacity ?? 1,
    visible: null == e.visibility || !!e.visibility,
    sublayers: void 0,
    activeLayerId: void 0
  };
}
function K2(e, r2, t) {
  if (null != e != (null != r2)) return "not-equal";
  if (!e || !r2) return "equal";
  if (!N(e.baseLayers, r2.baseLayers)) return "not-equal";
  return N(e.referenceLayers, r2.referenceLayers) ? "equal" : t.mustMatchReferences ? "not-equal" : "base-layers-equal";
}
function N(e, r2) {
  if (e.length !== r2.length) return false;
  for (let t = 0; t < e.length; t++) if (!D(e[t], r2[t])) return false;
  return true;
}
function D(e, r2) {
  if (e.type !== r2.type || e.url !== r2.url || e.minScale !== r2.minScale || e.maxScale !== r2.maxScale || e.visible !== r2.visible || e.opacity !== r2.opacity) return false;
  if (!r(e.effect, r2.effect)) return false;
  if (null != e.activeLayerId || null != r2.activeLayerId) return e.activeLayerId === r2.activeLayerId;
  if (null != e.sublayers || null != r2.sublayers) {
    if (null == e.sublayers || null == r2.sublayers || e.sublayers.length !== r2.sublayers.length) return false;
    for (let t = 0; t < e.sublayers.length; t++) {
      const n2 = e.sublayers.at(t), a = r2.sublayers.at(t);
      if (n2?.id !== a?.id || n2?.visible !== a?.visible) return false;
    }
  }
  return true;
}
function E(e) {
  return e ? K(e).replace(/^\s*https?:/i, "").toLowerCase() : "";
}
function O(e) {
  if (!e) return null;
  const {
    thumbnailUrl: r2
  } = e;
  if (r2) return r2;
  const t = h(e);
  return t ? s2[t].thumbnailUrl : f(e.baseLayers, V2);
}
function V2(e) {
  return "portalItem" in e ? e.portalItem?.thumbnailUrl : void 0;
}

export {
  y,
  m,
  b2 as b,
  d,
  L,
  S,
  v,
  R,
  w,
  j,
  U,
  O
};
//# sourceMappingURL=chunk-TVHVZK5G.js.map
