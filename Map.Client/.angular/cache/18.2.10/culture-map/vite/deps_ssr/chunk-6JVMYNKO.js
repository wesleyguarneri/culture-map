import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  c,
  u,
  w
} from "./chunk-GCVQXAS4.js";
import {
  _,
  g
} from "./chunk-TIRJMGGG.js";
import {
  W2 as W
} from "./chunk-6SSA7P3A.js";
import {
  e
} from "./chunk-6UEMNP3E.js";
import {
  n2 as n
} from "./chunk-6JFGZTLU.js";

// ../../../node_modules/@arcgis/core/layers/support/ElevationSampler.js
var l = () => n.getLogger("esri.layers.support.ElevationSampler");
var m = class {
  queryElevation(e2) {
    return p(e2.clone(), this);
  }
  on() {
    return e();
  }
  projectIfRequired(e2, t2) {
    return h(e2, t2);
  }
};
var c2 = class extends m {
  get spatialReference() {
    return this.extent.spatialReference;
  }
  constructor(e2, t2, i) {
    super(), this.tile = e2, this.noDataValue = i;
    const o = e2.tile.extent;
    this.extent = c(o, t2.spatialReference), this.extent.zmin = e2.zmin, this.extent.zmax = e2.zmax, this._aaExtent = o;
    const a = W(t2.spatialReference), r = t2.lodAt(e2.tile.level).resolution * a;
    this.demResolution = {
      min: r,
      max: r
    };
  }
  contains(e2) {
    const t2 = this.projectIfRequired(e2, this.spatialReference);
    return null != t2 && this.containsAt(t2.x, t2.y);
  }
  containsAt(e2, t2) {
    return w(this._aaExtent, e2, t2);
  }
  elevationAt(e2, t2) {
    if (!this.containsAt(e2, t2)) {
      const n2 = this.extent, s = `${n2.xmin}, ${n2.ymin}, ${n2.xmax}, ${n2.ymax}`;
      return l().warn("#elevationAt()", `Point used to sample elevation (${e2}, ${t2}) is outside of the sampler extent (${s})`), this.noDataValue;
    }
    return this.tile.sample(e2, t2) ?? this.noDataValue;
  }
};
var u2 = class extends m {
  get spatialReference() {
    return this.extent.spatialReference;
  }
  constructor(e2, t2, n2) {
    let i;
    super(), "number" == typeof t2 ? (this.noDataValue = t2, i = null) : (i = t2, this.noDataValue = n2), this.samplers = i ? e2.map((e3) => new c2(e3, i, this.noDataValue)) : e2;
    const a = this.samplers[0];
    if (a) {
      this.extent = a.extent.clone();
      const {
        min: e3,
        max: t3
      } = a.demResolution;
      this.demResolution = {
        min: e3,
        max: t3
      };
      for (let n3 = 1; n3 < this.samplers.length; n3++) {
        const e4 = this.samplers[n3];
        this.extent.union(e4.extent), this.demResolution.min = Math.min(this.demResolution.min, e4.demResolution.min), this.demResolution.max = Math.max(this.demResolution.max, e4.demResolution.max);
      }
    } else this.extent = c(u(), i.spatialReference), this.demResolution = {
      min: 0,
      max: 0
    };
  }
  elevationAt(e2, t2) {
    let n2, s = false;
    for (const i of this.samplers) if (i.containsAt(e2, t2) && (s = true, n2 = i.elevationAt(e2, t2), n2 !== i.noDataValue)) return n2;
    return null != n2 ? n2 : (s || l().warn("#elevationAt()", `Point used to sample elevation (${e2}, ${t2}) is outside of the sampler`), this.noDataValue);
  }
};
function p(e2, t2) {
  const n2 = h(e2, t2.spatialReference);
  if (!n2) return null;
  switch (e2.type) {
    case "point":
      f(e2, n2, t2);
      break;
    case "polyline":
      x(e2, n2, t2);
      break;
    case "multipoint":
      R(e2, n2, t2);
  }
  return e2;
}
function h(e2, t2) {
  if (null == e2) return null;
  const n2 = e2.spatialReference;
  if (n2.equals(t2)) return e2;
  const s = g(e2, t2);
  return s || l().error(`Cannot project geometry spatial reference (wkid:${n2.wkid}) to elevation sampler spatial reference (wkid:${t2.wkid})`), s;
}
function f(e2, t2, n2) {
  e2.z = n2.elevationAt(t2.x, t2.y);
}
function x(e2, t2, n2) {
  d.spatialReference = t2.spatialReference;
  const s = e2.hasM && !e2.hasZ;
  for (let i = 0; i < e2.paths.length; i++) {
    const o = e2.paths[i], a = t2.paths[i];
    for (let e3 = 0; e3 < o.length; e3++) {
      const t3 = o[e3], i2 = a[e3];
      d.x = i2[0], d.y = i2[1], s && (t3[3] = t3[2]), t3[2] = n2.elevationAt(d.x, d.y);
    }
  }
  e2.hasZ = true;
}
function R(e2, t2, n2) {
  d.spatialReference = t2.spatialReference;
  const s = e2.hasM && !e2.hasZ;
  for (let i = 0; i < e2.points.length; i++) {
    const o = e2.points[i], a = t2.points[i];
    d.x = a[0], d.y = a[1], s && (o[3] = o[2]), o[2] = n2.elevationAt(d.x, d.y);
  }
  e2.hasZ = true;
}
var d = new _();

// ../../../node_modules/@arcgis/core/layers/support/ElevationSamplerData.js
var t = class {
  constructor(t2, h2) {
    this.data = t2, this.safeWidth = 0.99999999 * (t2.width - 1), this.dx = (t2.width - 1) / (h2[2] - h2[0]), this.dy = (t2.width - 1) / (h2[3] - h2[1]), this.x0 = h2[0], this.y1 = h2[3];
  }
};

export {
  c2 as c,
  u2 as u,
  p,
  t
};
//# sourceMappingURL=chunk-6JVMYNKO.js.map
