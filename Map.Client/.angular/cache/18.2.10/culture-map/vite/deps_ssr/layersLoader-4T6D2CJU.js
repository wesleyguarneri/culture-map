import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  w
} from "./chunk-3BR7IMOC.js";
import {
  t as t4
} from "./chunk-XCCMILGI.js";
import {
  a,
  c,
  e,
  i,
  n,
  o,
  s as s2,
  t as t3,
  u
} from "./chunk-C72W53YS.js";
import {
  e as e2
} from "./chunk-AKRJ5ORG.js";
import {
  s as s3
} from "./chunk-3BXPVUY5.js";
import "./chunk-LM3JDV4W.js";
import "./chunk-34V2CLL5.js";
import {
  t as t2
} from "./chunk-HXRRLJKZ.js";
import {
  t
} from "./chunk-RXENIWFD.js";
import "./chunk-5GO36DCO.js";
import {
  d
} from "./chunk-CXNERL22.js";
import {
  a as a2
} from "./chunk-QZ6SIXQA.js";
import "./chunk-7V4JSBFA.js";
import "./chunk-MRPCXIVS.js";
import "./chunk-YTKVV2Y3.js";
import "./chunk-GCVQXAS4.js";
import "./chunk-UFQD6AL4.js";
import "./chunk-KETDH2J4.js";
import {
  C
} from "./chunk-7QV7DHWN.js";
import "./chunk-4L4Y34YK.js";
import "./chunk-BXONKQKI.js";
import "./chunk-2HDBQXAR.js";
import "./chunk-RNF7VOCU.js";
import "./chunk-TIRJMGGG.js";
import "./chunk-ZDRQSPB6.js";
import "./chunk-DCXDXGAR.js";
import "./chunk-BCCDYCTQ.js";
import "./chunk-AYL3HQHD.js";
import "./chunk-66YQWHHE.js";
import "./chunk-QGBMZIP4.js";
import "./chunk-AOEBZVTA.js";
import "./chunk-2OZSYJDX.js";
import "./chunk-MZM4INJV.js";
import "./chunk-J4GMQHGL.js";
import "./chunk-MHPE4SZA.js";
import "./chunk-6SSA7P3A.js";
import "./chunk-FQBTLEUI.js";
import "./chunk-GS7Y3YOG.js";
import "./chunk-Y2HYKTTT.js";
import "./chunk-XLEC46FY.js";
import "./chunk-4AZPIP7K.js";
import "./chunk-U3RHUXYK.js";
import "./chunk-7DBI6LQG.js";
import "./chunk-AUUN7RFQ.js";
import "./chunk-JAMSDYD6.js";
import "./chunk-PH6NPTP7.js";
import "./chunk-NUICEVIH.js";
import "./chunk-NXK752PZ.js";
import "./chunk-UVNLCXWD.js";
import "./chunk-PNUA7JOS.js";
import "./chunk-OR2FKGUM.js";
import "./chunk-UDMPWVPF.js";
import "./chunk-XJNKCEWL.js";
import "./chunk-AIZ3T7E3.js";
import "./chunk-6UEMNP3E.js";
import "./chunk-6WGE3IUL.js";
import "./chunk-MLYB2YW4.js";
import {
  s2 as s
} from "./chunk-6JFGZTLU.js";
import "./chunk-2ZJE6ZFX.js";
import {
  __async
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/portal/support/layersLoader.js
function g(e3, t5) {
  return __async(this, null, function* () {
    const r = e3.instance.portalItem;
    if (r?.id) return yield r.load(t5), b(e3), e3.validateItem && e3.validateItem(r), L(e3, t5);
  });
}
function b(t5) {
  const r = t5.instance.portalItem;
  if (!r?.type || !t5.supportedTypes.includes(r.type)) throw new s("portal:invalid-layer-item-type", "Invalid layer item type '${type}', expected '${expectedType}'", {
    type: r?.type,
    expectedType: t5.supportedTypes.join(", ")
  });
}
function L(e3, t5) {
  return __async(this, null, function* () {
    const r = e3.instance, o2 = r.portalItem;
    if (!o2) return;
    const {
      url: n2,
      title: s4
    } = o2, l = e2(o2, "portal-item");
    if ("group" === r.type) return S(r, l, e3);
    n2 && "media" !== r.type && r.read({
      url: n2
    }, l);
    const c2 = new e(), u2 = yield M(e3, c2, t5);
    return u2 && r.read(u2, l), r.resourceReferences = {
      portalItem: o2,
      paths: l.readResourcePaths ?? []
    }, "subtype-group" !== r.type && r.read({
      title: s4
    }, l), t4(r, l);
  });
}
function S(t5, r, a3) {
  return __async(this, null, function* () {
    const o2 = t5.portalItem;
    if (!t5.sourceIsPortalItem) return;
    const {
      title: n2,
      type: s4
    } = o2;
    if ("Group Layer" === s4) {
      if (!s3(o2, "Map")) throw new s("portal:invalid-layer-item-typekeyword", "'Group Layer' item without 'Map' type keyword is not supported");
      return T(t5);
    }
    return t5.read({
      title: n2
    }, r), v(t5, a3);
  });
}
function T(e3) {
  return __async(this, null, function* () {
    const t5 = e3.portalItem, r = yield t5.fetchData("json");
    if (!r) return;
    const a3 = e2(t5, "web-map");
    e3.read(r, a3), yield w(e3, r, {
      context: a3
    }), e3.resourceReferences = {
      portalItem: t5,
      paths: a3.readResourcePaths ?? []
    };
  });
}
function v(t5, r) {
  return __async(this, null, function* () {
    let o2;
    const {
      portalItem: n2
    } = t5;
    if (!n2) return;
    const s4 = n2.type, i2 = r.layerModuleTypeMap;
    switch (s4) {
      case "Feature Service":
      case "Feature Collection":
        o2 = i2.FeatureLayer;
        break;
      case "Stream Service":
        o2 = i2.StreamLayer;
        break;
      case "Scene Service":
        o2 = i2.SceneLayer;
        break;
      default:
        throw new s("portal:unsupported-item-type-as-group", `The item type '${s4}' is not supported as a 'IGroupLayer'`);
    }
    const y = new e();
    let [f, m] = yield Promise.all([o2(), M(r, y)]), d2 = () => f;
    if ("Feature Service" === s4) {
      const e3 = s2(m)?.customParameters;
      m = n2.url ? yield a(m, n2.url, y) : {}, d2 = (yield E(m, i2)) || d2;
      const r2 = yield k(n2.url, {
        customParameters: e3,
        loadContext: y
      });
      return yield F(t5, d2, m, r2);
    }
    return "Scene Service" === s4 && n2.url && (m = yield o(n2, m, y)), u(m) > 0 ? yield F(t5, d2, m) : yield j(t5, d2);
  });
}
function j(e3, t5) {
  return __async(this, null, function* () {
    const {
      portalItem: r
    } = e3;
    if (!r?.url) return;
    const a3 = yield t(r.url);
    a3 && F(e3, t5, {
      layers: a3.layers?.map(t3),
      tables: a3.tables?.map(t3)
    });
  });
}
function F(e3, t5, r, a3) {
  return __async(this, null, function* () {
    let o2 = r.layers || [];
    const s4 = r.tables || [];
    if ("Feature Collection" === e3.portalItem?.type ? (o2.forEach((e4, t6) => {
      e4.id = t6, "Table" === e4?.layerDefinition?.type && s4.push(e4);
    }), o2 = o2.filter((e4) => "Table" !== e4?.layerDefinition?.type)) : (o2.reverse(), s4.reverse()), o2.forEach((o3) => {
      const n2 = a3?.(o3);
      if (n2 || !a3) {
        const a4 = P(e3, t5(o3), r, o3, n2);
        e3.add(a4);
      }
    }), s4.length) {
      const t6 = yield a2.FeatureLayer();
      s4.forEach((o3) => {
        const n2 = a3?.(o3);
        if (n2 || !a3) {
          const a4 = P(e3, t6, r, o3, n2);
          e3.tables.add(a4);
        }
      });
    }
  });
}
function P(e3, t5, r, a3, o2) {
  const n2 = e3.portalItem, i2 = {
    portalItem: n2.clone(),
    layerId: a3.id
  };
  null != a3.url && (i2.url = a3.url);
  const l = new t5(i2);
  if ("sourceJSON" in l && (l.sourceJSON = o2), "subtype-group" !== l.type && "catalog" !== l.type && (l.sublayerTitleMode = "service-name"), "Feature Collection" === n2.type) {
    const e4 = {
      origin: "portal-item",
      portal: n2.portal || C.getDefault()
    };
    l.read(a3, e4);
    const t6 = r.showLegend;
    null != t6 && l.read({
      showLegend: t6
    }, e4);
  }
  return l;
}
function M(e3, t5, r) {
  return __async(this, null, function* () {
    if (false === e3.supportsData) return;
    const a3 = e3.instance, o2 = a3.portalItem;
    if (!o2) return;
    let n2 = null;
    try {
      n2 = yield o2.fetchData("json", r);
    } catch (s4) {
    }
    if (D(a3)) {
      let e4 = null;
      const r2 = yield x(o2, n2, t5);
      if ((n2?.layers || n2?.tables) && r2 > 0) {
        if (null == a3.layerId) {
          const e5 = c(a3.type), t6 = e5 ? n(n2, e5)[0] : s2(n2);
          t6 && (a3.layerId = t6.id);
        }
        e4 = C2(n2, a3), "OrientedImageryLayer" === e4?.layerType && "oriented-imagery" === a3.type && a3.supportedSourceTypes.add("Feature Layer"), e4 && null != n2.showLegend && (e4.showLegend = n2.showLegend);
      }
      return r2 > 1 && "sublayerTitleMode" in a3 && "service-name" !== a3.sublayerTitleMode && (a3.sublayerTitleMode = "item-title-and-service-name"), e4;
    }
    return n2;
  });
}
function x(e3, r, a3) {
  return __async(this, null, function* () {
    if (r?.layers && r?.tables) return u(r);
    const o2 = d(e3.url);
    if (!o2) return 1;
    const n2 = yield a3.fetchServiceMetadata(o2.url.path, {
      customParameters: s2(r)?.customParameters
    }).catch(() => null);
    return (r?.layers?.length ?? n2?.layers?.length ?? 0) + (r?.tables?.length ?? n2?.tables?.length ?? 0);
  });
}
function C2(e3, t5) {
  const {
    layerId: r
  } = t5, a3 = e3.layers?.find((e4) => e4.id === r) || e3.tables?.find((e4) => e4.id === r);
  return a3 && G(a3, t5) ? a3 : null;
}
function D(e3) {
  return "stream" !== e3.type && "layerId" in e3;
}
function G(e3, t5) {
  const r = "layerType" in e3 && e3.layerType, {
    type: a3
  } = t5;
  return !("feature" === a3 && r && "ArcGISFeatureLayer" !== e3.layerType || "catalog" === a3 && !r || "oriented-imagery" === a3 && !r || "subtype-group" === a3 && !r);
}
function k(e3, t5) {
  return __async(this, null, function* () {
    const {
      layersJSON: a3
    } = yield t2(e3, t5);
    if (!a3) return null;
    const o2 = [...a3.layers, ...a3.tables];
    return (e4) => o2.find((t6) => t6.id === e4.id);
  });
}
function E(e3, t5) {
  return __async(this, null, function* () {
    const {
      layers: r
    } = e3;
    if (!r?.length) return;
    const a3 = /* @__PURE__ */ new Set(), o2 = [];
    for (const {
      layerType: i2
    } of r) {
      const e4 = i2 ?? "ArcGISFeatureLayer";
      if (a3.has(e4)) continue;
      a3.add(e4);
      const r2 = t5[i(e4)];
      o2.push(r2());
    }
    const n2 = yield Promise.all(o2), s4 = /* @__PURE__ */ new Map();
    return Array.from(a3).forEach((e4, t6) => {
      s4.set(e4, n2[t6]);
    }), ({
      layerType: e4
    }) => {
      const t6 = e4 ?? "ArcGISFeatureLayer";
      return s4.get(t6);
    };
  });
}
export {
  g as load
};
//# sourceMappingURL=layersLoader-4T6D2CJU.js.map