import {
  $,
  j
} from "./chunk-TMKIB7QN.js";
import "./chunk-2GDRAUF6.js";
import "./chunk-XLPKC3OB.js";
import "./chunk-HEWCRCJC.js";
import "./chunk-B5ZW6SJE.js";
import "./chunk-APL7ANIA.js";
import {
  a,
  f,
  i,
  l
} from "./chunk-LFKEQKEA.js";
import "./chunk-DUTZNK67.js";
import "./chunk-IN6BQCWS.js";
import "./chunk-FYAEQPUY.js";
import "./chunk-7XMEZQ34.js";
import "./chunk-BDM2D6IC.js";
import "./chunk-U2ZVAEKG.js";
import "./chunk-EDSMXTFO.js";
import "./chunk-MNLT652N.js";
import "./chunk-OGZAGPIO.js";
import "./chunk-HJJIIYFF.js";
import "./chunk-T6GCUITX.js";
import "./chunk-TUIGM7TV.js";
import "./chunk-IHVSZYZS.js";
import "./chunk-6CA6K3O7.js";
import "./chunk-NYQ5CYNR.js";
import "./chunk-O7UDKFOW.js";
import "./chunk-TKPMIAIW.js";
import "./chunk-NQOJNTB3.js";
import "./chunk-MFOQYQFG.js";
import "./chunk-NKCPFCP3.js";
import "./chunk-3ZXOUEQG.js";
import "./chunk-AXVPJBVW.js";
import "./chunk-OXEPWRM7.js";
import "./chunk-POILQGXA.js";
import "./chunk-JJS7PR2U.js";
import "./chunk-L5YS4GSA.js";
import "./chunk-PRREDSOB.js";
import "./chunk-V5C6HSAM.js";
import "./chunk-SYATLP3H.js";
import "./chunk-V6AMQYXE.js";
import "./chunk-BXQGM56A.js";
import "./chunk-4Z5SGKRM.js";
import "./chunk-ANKOCGE2.js";
import "./chunk-7CJXZOFG.js";
import "./chunk-IRGZKO7V.js";
import "./chunk-5SELS7VU.js";
import "./chunk-DDYVXG4F.js";
import "./chunk-ANP42J2U.js";
import "./chunk-HJY2YILU.js";
import "./chunk-7DA6A5LD.js";
import "./chunk-2MMLMOWS.js";
import "./chunk-4323ZVPF.js";
import "./chunk-WYIDUUN2.js";
import "./chunk-DXLOWWK7.js";
import {
  __async
} from "./chunk-JWIQHGQB.js";

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
//# sourceMappingURL=streamLayerUtils-MJZ7MOA7.js.map
