import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  f,
  u
} from "./chunk-7VRJFZQR.js";
import {
  c
} from "./chunk-RHVUMKCC.js";
import {
  i
} from "./chunk-ZSJNH2BT.js";
import {
  a as a2,
  e as e2,
  h
} from "./chunk-VOOO6FU5.js";
import {
  n,
  t
} from "./chunk-NXXQ35YM.js";
import {
  V as V2
} from "./chunk-LM3JDV4W.js";
import {
  A,
  d
} from "./chunk-LZSLQ24Q.js";
import {
  V
} from "./chunk-U3RHUXYK.js";
import {
  e
} from "./chunk-NUICEVIH.js";
import {
  y
} from "./chunk-UVNLCXWD.js";
import {
  a3 as a
} from "./chunk-UDMPWVPF.js";
import {
  __async
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/analysis/LineOfSightAnalysis.js
var y2 = V.ofType(f);
var d2 = class extends c {
  constructor(t2) {
    super(t2), this.type = "line-of-sight", this.observer = null, this.extent = null;
  }
  initialize() {
    this.addHandles(d(() => this._computeExtent(), (t2) => {
      null == t2?.pending && this._set("extent", null != t2 ? t2.extent : null);
    }, A));
  }
  get targets() {
    return this._get("targets") || new y2();
  }
  set targets(t2) {
    this._set("targets", n(t2, this.targets, y2));
  }
  get spatialReference() {
    return null != this.observer?.position ? this.observer.position.spatialReference : null;
  }
  get requiredPropertiesForEditing() {
    return [this.observer?.position];
  }
  waitComputeExtent() {
    return __async(this, null, function* () {
      const t2 = this._computeExtent();
      return null != t2 ? t2.pending : Promise.resolve();
    });
  }
  _computeExtent() {
    const t2 = this.spatialReference;
    if (null == this.observer?.position || null == t2) return null;
    const e3 = (t3) => "absolute-height" === i(t3.position, t3.elevationInfo), o = this.observer.position, r = a2(o.x, o.y, o.z, o.x, o.y, o.z);
    for (const i2 of this.targets) if (null != i2.position) {
      const e4 = V2(i2.position, t2);
      if (null != e4.pending) return {
        pending: e4.pending,
        extent: null
      };
      if (null != e4.geometry) {
        const {
          x: t3,
          y: o2,
          z: s2
        } = e4.geometry;
        h(r, [t3, o2, s2]);
      }
    }
    const s = e2(r, t2);
    return e3(this.observer) && this.targets.every(e3) || (s.zmin = void 0, s.zmax = void 0), {
      pending: null,
      extent: s
    };
  }
  clear() {
    this.observer = null, this.targets.removeAll();
  }
};
e([y({
  type: ["line-of-sight"]
})], d2.prototype, "type", void 0), e([y({
  type: u,
  json: {
    read: true,
    write: true
  }
})], d2.prototype, "observer", void 0), e([y({
  cast: t,
  type: y2,
  nonNullable: true,
  json: {
    read: true,
    write: true
  }
})], d2.prototype, "targets", null), e([y({
  value: null,
  readOnly: true
})], d2.prototype, "extent", void 0), e([y({
  readOnly: true
})], d2.prototype, "spatialReference", null), e([y({
  readOnly: true
})], d2.prototype, "requiredPropertiesForEditing", null), d2 = e([a("esri.analysis.LineOfSightAnalysis")], d2);
var v = d2;

export {
  v
};
//# sourceMappingURL=chunk-BYORSVZF.js.map
