import {
  e
} from "./chunk-4Z5SGKRM.js";
import {
  S
} from "./chunk-ANKOCGE2.js";
import {
  y
} from "./chunk-7CJXZOFG.js";
import {
  a3 as a
} from "./chunk-DDYVXG4F.js";

// ../../../node_modules/@arcgis/core/layers/support/ExportWMSImageParameters.js
var o = {
  visible: "visibleSublayers"
};
var a2 = class extends S {
  constructor(e2) {
    super(e2), this.scale = 0;
  }
  set layer(e2) {
    this._get("layer") !== e2 && (this._set("layer", e2), this.removeHandles("layer"), e2 && this.addHandles([e2.sublayers.on("change", () => this.notifyChange("visibleSublayers")), e2.on("wms-sublayer-update", (e3) => this.notifyChange(o[e3.propertyName]))], "layer"));
  }
  get layers() {
    return this.visibleSublayers.filter(({
      name: e2
    }) => e2).map(({
      name: e2
    }) => e2).join();
  }
  get version() {
    this.commitProperty("layers");
    const e2 = this.layer;
    return e2 && e2.commitProperty("imageTransparency"), (this._get("version") || 0) + 1;
  }
  get visibleSublayers() {
    const {
      layer: e2,
      scale: r
    } = this, s = e2?.sublayers, t = [], o2 = (e3) => {
      const {
        minScale: s2,
        maxScale: a3,
        sublayers: l,
        visible: i
      } = e3;
      i && (0 === r || (0 === s2 || r <= s2) && (0 === a3 || r >= a3)) && (l ? l.forEach(o2) : t.push(e3));
    };
    return s?.forEach(o2), t;
  }
  toJSON() {
    const {
      layer: e2,
      layers: r
    } = this, {
      imageFormat: s,
      imageTransparency: t,
      version: o2
    } = e2;
    return {
      format: s,
      request: "GetMap",
      service: "WMS",
      styles: "",
      transparent: t ? "TRUE" : "FALSE",
      version: o2,
      layers: r
    };
  }
};
e([y()], a2.prototype, "layer", null), e([y({
  readOnly: true
})], a2.prototype, "layers", null), e([y({
  type: Number
})], a2.prototype, "scale", void 0), e([y({
  readOnly: true
})], a2.prototype, "version", null), e([y({
  readOnly: true
})], a2.prototype, "visibleSublayers", null), a2 = e([a("esri.layers.support.ExportWMSImageParameters")], a2);

export {
  a2 as a
};
//# sourceMappingURL=chunk-HHSJQWOH.js.map
