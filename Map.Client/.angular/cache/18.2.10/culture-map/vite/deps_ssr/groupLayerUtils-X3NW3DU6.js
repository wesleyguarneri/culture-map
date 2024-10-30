import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  $,
  j
} from "./chunk-O62BXBDY.js";
import {
  p
} from "./chunk-FEZPDSKY.js";
import "./chunk-X4WQKYPS.js";
import "./chunk-VDKX5QNO.js";
import "./chunk-JDVVCQU6.js";
import {
  o
} from "./chunk-AKRJ5ORG.js";
import "./chunk-XU6JZUMA.js";
import {
  a,
  f,
  i,
  s
} from "./chunk-3BXPVUY5.js";
import "./chunk-LM3JDV4W.js";
import "./chunk-34V2CLL5.js";
import "./chunk-MRPCXIVS.js";
import "./chunk-YTKVV2Y3.js";
import "./chunk-GCVQXAS4.js";
import "./chunk-UFQD6AL4.js";
import "./chunk-EGBDRLCX.js";
import "./chunk-557VKXWR.js";
import "./chunk-KETDH2J4.js";
import "./chunk-7QV7DHWN.js";
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
import "./chunk-6JFGZTLU.js";
import "./chunk-2ZJE6ZFX.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/layers/save/groupLayerUtils.js
var u = "Group Layer";
var c = "group-layer-save";
var l = "group-layer-save-as";
var p2 = f.GROUP_LAYER_MAP;
function m(e) {
  return {
    isValid: "group" === e.type,
    errorMessage: "Layer.type should be 'group'"
  };
}
function y(e) {
  return {
    isValid: s(e, p2),
    errorMessage: `Layer.portalItem.typeKeywords should have '${p2}'`
  };
}
function f2(e, r) {
  return __spreadProps(__spreadValues({}, o(e, "web-map", true)), {
    initiator: r
  });
}
function v(e) {
  const r = e.layerJSON;
  return Promise.resolve(r && Object.keys(r).length ? r : null);
}
function d(e, r) {
  return __async(this, null, function* () {
    r.title ||= e.title, a(r, f.METADATA), i(r, p2);
  });
}
function I(r, t) {
  return __async(this, null, function* () {
    return $({
      layer: r,
      itemType: u,
      validateLayer: m,
      validateItem: y,
      createJSONContext: (e) => f2(e, r),
      createItemData: v,
      errorNamePrefix: c,
      saveResources: (e, t2) => __async(this, null, function* () {
        return r.sourceIsPortalItem || (yield e.removeAllResources().catch(() => {
        })), p(r.resourceReferences, t2);
      })
    }, t);
  });
}
function g(e, t, o2) {
  return __async(this, null, function* () {
    return j({
      layer: e,
      itemType: u,
      validateLayer: m,
      createJSONContext: (r) => f2(r, e),
      createItemData: v,
      errorNamePrefix: l,
      newItem: t,
      setItemProperties: d,
      saveResources: (r, t2) => p(e.resourceReferences, t2)
    }, o2);
  });
}
export {
  I as save,
  g as saveAs
};
//# sourceMappingURL=groupLayerUtils-X3NW3DU6.js.map
