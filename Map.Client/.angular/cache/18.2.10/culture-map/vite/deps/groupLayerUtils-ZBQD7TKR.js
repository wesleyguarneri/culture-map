import {
  $,
  j
} from "./chunk-TMKIB7QN.js";
import {
  p
} from "./chunk-SNY4EEM3.js";
import "./chunk-2GDRAUF6.js";
import "./chunk-XLPKC3OB.js";
import "./chunk-HEWCRCJC.js";
import {
  o
} from "./chunk-B5ZW6SJE.js";
import "./chunk-APL7ANIA.js";
import {
  a,
  f,
  i,
  s
} from "./chunk-LFKEQKEA.js";
import "./chunk-DUTZNK67.js";
import "./chunk-IN6BQCWS.js";
import "./chunk-5I6J67HP.js";
import "./chunk-U2LCAVGY.js";
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
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-JWIQHGQB.js";

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
//# sourceMappingURL=groupLayerUtils-ZBQD7TKR.js.map
