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

// ../../../node_modules/@arcgis/core/layers/save/imageryUtils.js
var l2 = "Image Service";
var y = "imagery-layer-save";
var n = "imagery-layer-save-as";
var o = "imagery-tile-layer-save";
var m = "imagery-tile-layer-save-as";
function c(e) {
  if ("imagery" === e.type) return {
    isValid: true
  };
  const {
    raster: t
  } = e, r = "Function" === t?.datasetFormat ? t.primaryRasters?.rasters[0] : t;
  return {
    isValid: "RasterTileServer" === r?.datasetFormat && ("Raster" === r.tileType || "Map" === r.tileType),
    errorMessage: "imagery tile layer should be created from a tiled image service."
  };
}
function p(e) {
  const t = e.layerJSON;
  return Promise.resolve(t && Object.keys(t).length ? t : null);
}
function u(e, t) {
  return __async(this, null, function* () {
    const {
      parsedUrl: l3,
      title: y2,
      fullExtent: n2
    } = e;
    t.url = l3.path, t.title ||= y2;
    try {
      t.extent = yield l(n2);
    } catch {
      t.extent = void 0;
    }
    a(t, f.METADATA), "imagery-tile" === e.type && i(t, f.TILED_IMAGERY);
  });
}
function g(t, r) {
  return __async(this, null, function* () {
    const a2 = "imagery" === t.type ? y : o;
    return $({
      layer: t,
      itemType: l2,
      validateLayer: c,
      createItemData: p,
      errorNamePrefix: a2
    }, r);
  });
}
function v(e, r, a2) {
  return __async(this, null, function* () {
    const i2 = "imagery" === e.type ? n : m;
    return j({
      layer: e,
      itemType: l2,
      validateLayer: c,
      createItemData: p,
      errorNamePrefix: i2,
      newItem: r,
      setItemProperties: u
    }, a2);
  });
}
export {
  g as save,
  v as saveAs
};
//# sourceMappingURL=imageryUtils-PFQ5UKCM.js.map
