import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  h
} from "./chunk-C7GHK6X7.js";

// ../../../node_modules/@arcgis/core/layers/support/ElevationTileData.js
var a = class {
  constructor(a2, t2, s2, e) {
    this._hasNoDataValues = null, this._minValue = null, this._maxValue = null, "pixelData" in a2 ? (this.values = a2.pixelData, this.width = a2.width, this.height = a2.height, this.noDataValue = a2.noDataValue) : (this.values = a2, this.width = t2, this.height = s2, this.noDataValue = e);
  }
  get hasNoDataValues() {
    if (null == this._hasNoDataValues) {
      const a2 = this.noDataValue;
      this._hasNoDataValues = this.values.includes(a2);
    }
    return this._hasNoDataValues;
  }
  get minValue() {
    return this._ensureBounds(), this._minValue;
  }
  get maxValue() {
    return this._ensureBounds(), this._maxValue;
  }
  _ensureBounds() {
    if (null != this._minValue) return;
    const {
      noDataValue: a2,
      values: t2
    } = this;
    let s2 = 1 / 0, e = -1 / 0, i = true;
    for (const u of t2) u === a2 ? this._hasNoDataValues = true : (s2 = u < s2 ? u : s2, e = u > e ? u : e, i = false);
    i ? (this._minValue = 0, this._maxValue = 0) : (this._minValue = s2, this._maxValue = e > -3e38 ? e : 0);
  }
};

// ../../../node_modules/@arcgis/core/layers/support/LercDecoder.js
var r = class extends h {
  constructor(e = null) {
    super("LercWorker", "_decode", {
      _decode: (e2) => [e2.buffer]
    }, e, {
      strategy: "dedicated"
    }), this.schedule = e, this.ref = 0;
  }
  decode(e, r2, t2) {
    return e && 0 !== e.byteLength ? this.invoke({
      buffer: e,
      options: r2
    }, t2) : Promise.resolve(null);
  }
  release() {
    --this.ref <= 0 && (t.forEach((e, r2) => {
      e === this && t.delete(r2);
    }), this.destroy());
  }
};
var t = /* @__PURE__ */ new Map();
function s(e = null) {
  let s2 = t.get(e);
  return s2 || (null != e ? (s2 = new r((r2) => e.immediate.schedule(r2)), t.set(e, s2)) : (s2 = new r(), t.set(null, s2))), ++s2.ref, s2;
}

export {
  a,
  s
};
//# sourceMappingURL=chunk-RIA56QWL.js.map
