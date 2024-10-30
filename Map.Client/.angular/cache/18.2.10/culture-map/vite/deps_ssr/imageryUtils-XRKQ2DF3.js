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
//# sourceMappingURL=imageryUtils-XRKQ2DF3.js.map
