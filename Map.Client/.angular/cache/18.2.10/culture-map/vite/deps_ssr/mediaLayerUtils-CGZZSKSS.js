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
  l
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
  __async
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/layers/save/mediaLayerUtils.js
var i = "Media Layer";
var u = "media-layer-save";
var p2 = "media-layer-save-as";
var l2 = ["media-layer:unsupported-source"];
function m(e) {
  return {
    isValid: "media" === e.type,
    errorMessage: "Layer.type should be 'media'"
  };
}
function c(e) {
  return o(e, "portal-item", true);
}
function y(e) {
  return e.layerJSON;
}
function f2(e, r) {
  return __async(this, null, function* () {
    r.extent = e.fullExtent ? yield l(e.fullExtent) : null;
  });
}
function d(e, r) {
  return __async(this, null, function* () {
    r.title ||= e.title, yield f2(e, r), a(r, f.METADATA);
  });
}
function x(r, t) {
  return __async(this, null, function* () {
    return $({
      layer: r,
      itemType: i,
      validateLayer: m,
      createJSONContext: (e) => c(e),
      createItemData: y,
      errorNamePrefix: u,
      supplementalUnsupportedErrors: l2,
      setItemProperties: f2,
      saveResources: (e, t2) => p(r.resourceReferences, t2)
    }, t);
  });
}
function v(e, t, a2) {
  return __async(this, null, function* () {
    return j({
      layer: e,
      itemType: i,
      validateLayer: m,
      createJSONContext: (e2) => c(e2),
      createItemData: y,
      errorNamePrefix: p2,
      supplementalUnsupportedErrors: l2,
      newItem: t,
      setItemProperties: d,
      saveResources: (r, t2) => p(e.resourceReferences, t2)
    }, a2);
  });
}
export {
  x as save,
  v as saveAs
};
//# sourceMappingURL=mediaLayerUtils-CGZZSKSS.js.map
