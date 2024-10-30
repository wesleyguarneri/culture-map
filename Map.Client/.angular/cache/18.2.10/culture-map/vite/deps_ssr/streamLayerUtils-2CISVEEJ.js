import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  $,
  j
} from "./chunk-O62BXBDY.js";
import "./chunk-X4WQKYPS.js";
import "./chunk-VDKX5QNO.js";
import "./chunk-JDVVCQU6.js";
import "./chunk-AKRJ5ORG.js";
import "./chunk-XU6JZUMA.js";
import {
  a,
  f,
  i,
  l
} from "./chunk-3BXPVUY5.js";
import "./chunk-LM3JDV4W.js";
import "./chunk-34V2CLL5.js";
import "./chunk-MRPCXIVS.js";
import "./chunk-YTKVV2Y3.js";
import "./chunk-GCVQXAS4.js";
import "./chunk-UFQD6AL4.js";
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

// ../../../node_modules/@arcgis/core/layers/save/streamLayerUtils.js
var n = "Stream Service";
var i2 = "Feed";
var o = "stream-layer-save";
var m = "stream-layer-save-as";
function u(e) {
  return {
    isValid: "stream" === e.type && !!e.url && !e.webSocketUrl,
    errorMessage: "Stream layer should be created using a url to a stream service"
  };
}
function c(e) {
  const t = e.layerJSON;
  return Promise.resolve(t && Object.keys(t).length ? t : null);
}
function y(e, t) {
  return __async(this, null, function* () {
    const {
      parsedUrl: n2,
      title: i3,
      fullExtent: o2
    } = e;
    t.url = n2.path, t.title ||= i3, t.extent = null, null != o2 && (t.extent = yield l(o2)), a(t, f.METADATA), i(t, f.SINGLE_LAYER);
  });
}
function p(t, r) {
  return __async(this, null, function* () {
    return $({
      layer: t,
      itemType: n,
      additionalItemType: i2,
      validateLayer: u,
      createItemData: c,
      errorNamePrefix: o
    }, r);
  });
}
function f2(e, r, a2) {
  return __async(this, null, function* () {
    return j({
      layer: e,
      itemType: n,
      validateLayer: u,
      createItemData: c,
      errorNamePrefix: m,
      newItem: r,
      setItemProperties: y
    }, a2);
  });
}
export {
  p as save,
  f2 as saveAs
};
//# sourceMappingURL=streamLayerUtils-2CISVEEJ.js.map
