import {
  O,
  a,
  z
} from "./chunk-R6CAUNOR.js";
import {
  I
} from "./chunk-WG5JLPNN.js";
import {
  e as e4
} from "./chunk-LQTSBE7P.js";
import {
  t
} from "./chunk-RDQF44TE.js";
import {
  e as e3
} from "./chunk-4MMTPKY4.js";
import {
  r as r2
} from "./chunk-IMVP5ADD.js";
import {
  n as n2
} from "./chunk-OGZAGPIO.js";
import {
  e as e2
} from "./chunk-AXVPJBVW.js";
import {
  n,
  r
} from "./chunk-OXEPWRM7.js";
import {
  e3 as e
} from "./chunk-ANKOCGE2.js";

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/lib/LocalOriginFactory.js
var s = class {
  constructor(r3, s2) {
    this.vec3 = r3, this.id = s2;
  }
};
function t2(t3, o, c, e6) {
  return new s(r(t3, o, c), e6);
}

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/lib/testUtils.js
var n3 = {
  stableRendering: false
};
var e5 = {
  rootOrigin: null
};

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/lib/GridLocalOriginFactory.js
var _ = class {
  constructor(i) {
    this._originSR = i, this._rootOriginId = "root/" + e(), this._origins = /* @__PURE__ */ new Map(), this._objects = /* @__PURE__ */ new Map(), this._gridSize = 5e5;
  }
  getOrigin(t3) {
    const r3 = this._origins.get(this._rootOriginId);
    if (null == r3) {
      const i = e5.rootOrigin;
      if (null != i) return this._origins.set(this._rootOriginId, t2(i[0], i[1], i[2], this._rootOriginId)), this.getOrigin(t3);
      const r4 = t2(t3[0] + Math.random() - 0.5, t3[1] + Math.random() - 0.5, t3[2] + Math.random() - 0.5, this._rootOriginId);
      return this._origins.set(this._rootOriginId, r4), r4;
    }
    const o = this._gridSize, s2 = Math.round(t3[0] / o), e6 = Math.round(t3[1] / o), n4 = Math.round(t3[2] / o), a2 = `${s2}/${e6}/${n4}`;
    let m = this._origins.get(a2);
    const g = 0.5 * o;
    if (e2(l, t3, r3.vec3), l[0] = Math.abs(l[0]), l[1] = Math.abs(l[1]), l[2] = Math.abs(l[2]), l[0] < g && l[1] < g && l[2] < g) {
      if (m) {
        const r4 = Math.max(...l);
        e2(l, t3, m.vec3), l[0] = Math.abs(l[0]), l[1] = Math.abs(l[1]), l[2] = Math.abs(l[2]);
        if (Math.max(...l) < r4) return m;
      }
      return r3;
    }
    return m || (m = t2(s2 * o, e6 * o, n4 * o, a2), this._origins.set(a2, m)), m;
  }
  _drawOriginBox(t3, i = r2(1, 1, 0, 1)) {
    const r3 = window.view, h = r3._stage, c = i.toString();
    if (!this._objects.has(c)) {
      this._material = new z({
        width: 2,
        color: i
      }), h.add(this._material);
      const t4 = new a(h, {
        pickable: false
      }), r4 = new O({
        castShadow: false
      });
      h.add(r4), t4.add(r4), this._objects.set(c, r4);
    }
    const _2 = this._objects.get(c), l2 = [0, 1, 5, 4, 0, 2, 1, 7, 6, 2, 0, 1, 3, 7, 5, 4, 6, 2, 0], p = l2.length, j = new Array(3 * p), b = new Array(), u = 0.5 * this._gridSize;
    for (let o = 0; o < p; o++) j[3 * o] = t3[0] + (1 & l2[o] ? u : -u), j[3 * o + 1] = t3[1] + (2 & l2[o] ? u : -u), j[3 * o + 2] = t3[2] + (4 & l2[o] ? u : -u), o > 0 && b.push(o - 1, o);
    n2(j, this._originSR, 0, j, r3.renderSpatialReference, 0, p);
    const M = new I(this._material, [[e3.POSITION, new t(j, b, 3, true)]], null, e4.Line);
    h.add(M), _2.addGeometry(M);
  }
  get test() {
  }
};
var l = n();

export {
  t2 as t,
  n3 as n,
  _
};
//# sourceMappingURL=chunk-E7VVOB2F.js.map
