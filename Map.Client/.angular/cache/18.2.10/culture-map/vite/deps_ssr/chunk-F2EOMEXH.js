import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  n as n3
} from "./chunk-PZKTCBLJ.js";
import {
  n as n2
} from "./chunk-6Y3Z2LOO.js";
import {
  d
} from "./chunk-HRIGBQ5I.js";
import {
  n
} from "./chunk-5EGQYY2H.js";
import {
  e
} from "./chunk-NUICEVIH.js";
import {
  S
} from "./chunk-NXK752PZ.js";
import {
  y
} from "./chunk-UVNLCXWD.js";
import {
  a3 as a
} from "./chunk-UDMPWVPF.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/layers/support/ExportImageParameters.js
var n4 = {
  visible: "visibleSublayers",
  definitionExpression: "layerDefs",
  labelingInfo: "hasDynamicLayers",
  labelsVisible: "hasDynamicLayers",
  opacity: "hasDynamicLayers",
  minScale: "visibleSublayers",
  maxScale: "visibleSublayers",
  renderer: "hasDynamicLayers",
  source: "hasDynamicLayers"
};
var y2 = class extends S {
  constructor(e2) {
    super(e2), this.floors = null, this.scale = 0;
  }
  destroy() {
    this.layer = null;
  }
  get dynamicLayers() {
    if (!this.hasDynamicLayers) return null;
    const e2 = this.visibleSublayers.map((e3) => {
      const r = n3(this.floors, e3);
      return e3.toExportImageJSON(r);
    });
    return e2.length ? JSON.stringify(e2) : null;
  }
  get hasDynamicLayers() {
    return this.layer && n2(this.visibleSublayers, this.layer.serviceSublayers, this.layer.gdbVersion);
  }
  set layer(e2) {
    this._get("layer") !== e2 && (this._set("layer", e2), this.removeHandles("layer"), e2 && this.addHandles([e2.allSublayers.on("change", () => this.notifyChange("visibleSublayers")), e2.on("sublayer-update", (e3) => this.notifyChange(n4[e3.propertyName]))], "layer"));
  }
  get layers() {
    const e2 = this.visibleSublayers;
    return e2 ? e2.length ? "show:" + e2.map((e3) => e3.id).join(",") : "show:-1" : null;
  }
  get layerDefs() {
    const e2 = !!this.floors?.length, r = this.visibleSublayers.filter((r2) => null != r2.definitionExpression || e2 && null != r2.floorInfo);
    return r.length ? JSON.stringify(r.reduce((e3, r2) => {
      const t = n3(this.floors, r2), i = n(t, r2.definitionExpression);
      return null != i && (e3[r2.id] = i), e3;
    }, {})) : null;
  }
  get version() {
    this.commitProperty("layers"), this.commitProperty("layerDefs"), this.commitProperty("dynamicLayers");
    const e2 = this.layer;
    return e2 && (e2.commitProperty("dpi"), e2.commitProperty("imageFormat"), e2.commitProperty("imageTransparency"), e2.commitProperty("gdbVersion")), (this._get("version") || 0) + 1;
  }
  get visibleSublayers() {
    const e2 = [];
    if (!this.layer) return e2;
    const r = this.layer.sublayers, s = this.scale, t = (r2) => {
      r2.visible && (0 === s || d(s, r2.minScale, r2.maxScale)) && (r2.sublayers ? r2.sublayers.forEach(t) : e2.unshift(r2));
    };
    r && r.forEach(t);
    const i = this._get("visibleSublayers");
    return !i || i.length !== e2.length || i.some((r2, s2) => e2[s2] !== r2) ? e2 : i;
  }
  toJSON() {
    const e2 = this.layer;
    let r = {
      dpi: e2.dpi,
      format: e2.imageFormat,
      transparent: e2.imageTransparency,
      gdbVersion: e2.gdbVersion || null
    };
    return this.hasDynamicLayers && this.dynamicLayers ? r.dynamicLayers = this.dynamicLayers : r = __spreadProps(__spreadValues({}, r), {
      layers: this.layers,
      layerDefs: this.layerDefs
    }), r;
  }
};
e([y({
  readOnly: true
})], y2.prototype, "dynamicLayers", null), e([y()], y2.prototype, "floors", void 0), e([y({
  readOnly: true
})], y2.prototype, "hasDynamicLayers", null), e([y()], y2.prototype, "layer", null), e([y({
  readOnly: true
})], y2.prototype, "layers", null), e([y({
  readOnly: true
})], y2.prototype, "layerDefs", null), e([y({
  type: Number
})], y2.prototype, "scale", void 0), e([y({
  readOnly: true
})], y2.prototype, "version", null), e([y({
  readOnly: true
})], y2.prototype, "visibleSublayers", null), y2 = e([a("esri.layers.support.ExportImageParameters")], y2);

export {
  y2 as y
};
//# sourceMappingURL=chunk-F2EOMEXH.js.map
