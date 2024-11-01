import {
  r
} from "./chunk-TMIIQZKR.js";
import {
  O
} from "./chunk-GCFUJXGH.js";
import {
  c
} from "./chunk-C7VF4AR2.js";
import {
  c as c2,
  e2
} from "./chunk-P7OSFLIX.js";
import {
  t
} from "./chunk-6HBAAUBO.js";
import {
  C,
  F,
  L
} from "./chunk-YLE5AYZV.js";
import {
  e
} from "./chunk-4MMTPKY4.js";
import {
  l
} from "./chunk-4323ZVPF.js";

// ../../../node_modules/@arcgis/core/views/3d/terrain/RenderOrder.js
var O2;
!function(O4) {
  O4[O4.BACK_TO_FRONT = -1] = "BACK_TO_FRONT", O4[O4.NONE = 0] = "NONE", O4[O4.FRONT_TO_BACK = 1] = "FRONT_TO_BACK";
}(O2 || (O2 = {}));

// ../../../node_modules/@arcgis/core/views/3d/terrain/tileUtils.js
var n = class {
  constructor() {
    this._queue = new l(), this.remove = () => {
    };
  }
  get done() {
    return 0 === this._queue.length && (!this._last || this._last.isLeaf);
  }
  resetOne(t2) {
    this._queue.clear(), this._queue.push(t2), this._last = void 0;
  }
  reset(t2 = null) {
    this._queue.clear(), null != t2 && this._queue.pushArray(t2), this._last = void 0;
  }
  skipSubtree() {
    this._last = void 0;
  }
  next() {
    const t2 = this._last?.children;
    return t2?.[0] && this._queue.pushArray(t2), this._last = this._queue.pop(), this._last;
  }
};
var r2 = class {
  constructor() {
    this._q = new l();
  }
  get done() {
    return 0 === this._q.length;
  }
  reset(t2) {
    if (this._q.clear(), null != t2) {
      this._q.pushArray(t2);
      for (let t3 = 0; t3 < this._q.length; ++t3) {
        const e3 = this._q.data[t3];
        e3.isLeaf || this._q.pushArray(e3.children);
      }
    }
  }
  next() {
    return this._q.pop();
  }
};
function o(t2, e3, n2) {
  if (null == e3?.fullExtent) return false;
  const r3 = e3.fullExtent, s = t2.extent;
  if (n2) {
    if (s[0] < r3.xmin || s[1] < r3.ymin || s[2] > r3.xmax || s[3] > r3.ymax) return false;
  } else if (r3.xmin > s[2] || r3.ymin > s[3] || r3.xmax < s[0] || r3.ymax < s[1]) return false;
  const i2 = t2.surface.tilingScheme.levels[t2.level].scale, o3 = e3.minScale;
  if (o3 > 0 && i2 > 1.00000001 * o3) return false;
  const u2 = e3.maxScale;
  return !(u2 > 0 && i2 < 0.99999999 * u2);
}
function u(t2, e3) {
  const n2 = t2.lij, r3 = e3.lij;
  return n2[0] - r3[0] || n2[1] - r3[1] || n2[2] - r3[2];
}
function l2(t2, n2, r3 = null) {
  null == r3 || 0 === r3.length ? t2 === O2.BACK_TO_FRONT ? n2.sort(c3) : n2.sort(f) : n2.sort((e3, n3) => a(e3, n3, t2, r3));
}
function c3(t2, e3) {
  const n2 = e3.screenDepth - t2.screenDepth;
  if (0 !== n2) return n2;
  const r3 = t2.lij, s = e3.lij;
  return r3[0] - s[0] || r3[1] - s[1] || r3[2] - s[2];
}
function f(t2, e3) {
  const n2 = t2.screenDepth - e3.screenDepth;
  if (0 !== n2) return n2;
  const r3 = t2.lij, s = e3.lij;
  return r3[0] - s[0] || r3[1] - s[1] || r3[2] - s[2];
}
function h(t2, e3, n2) {
  const r3 = t2.screenDepth, s = e3.screenDepth;
  return r3 < s ? -n2 : r3 > s ? n2 : u(t2, e3);
}
function a(t2, e3, n2, r3) {
  return _(t2, r3) === _(e3, r3) ? h(t2, e3, n2) : t2 ? n2 : -n2;
}
function _(t2, e3) {
  for (const n2 of e3) if (t2.intersectsExtent(n2)) return true;
  return false;
}
function p(t2, e3) {
  const n2 = t2.distanceToPOI - e3.distanceToPOI;
  if (0 !== n2) return n2;
  const r3 = t2.lij, s = e3.lij;
  return r3[0] - s[0] || r3[1] - s[1] || r3[2] - s[2];
}
function d(t2, e3) {
  const n2 = t2.length;
  for (let r3 = 0; r3 < n2; ++r3) {
    t2.at(r3).updateDistanceToPOI(e3);
  }
  t2.sort(p);
}
function m(t2, e3, n2) {
  let r3 = 1, s = 0, i2 = 0;
  for (; t2 !== e3; ) if (r3 *= 0.5, s *= 0.5, i2 *= 0.5, 1 & t2.lij[2] && (s += 0.5), 1 & t2.lij[1] || (i2 += 0.5), null == (t2 = t2.parent)) throw new Error("tile was not a descendant of upsampleTile");
  n2.init(e3, s, i2, r3);
}
function q(t2) {
  for (let e3 = 0; e3 < t2.length; e3++) {
    const n2 = t2[e3], r3 = n2.parent;
    if (r3) for (let t3 = 0; t3 < 4; t3++) {
      const e4 = r3.children[t3];
      if (e4 && e4 !== n2) return true;
    }
  }
  return false;
}
function x(t2, e3) {
  if (!t2 || !e3 || t2[0] === e3[0]) return false;
  const n2 = t2[0] < e3[0], r3 = n2 ? t2 : e3, s = n2 ? e3 : t2, i2 = 1 << s[0] - r3[0];
  return Math.floor(s[1] / i2) === r3[1] && Math.floor(s[2] / i2) === r3[2];
}

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/lib/DefaultVertexBufferLayouts.js
var O3 = [new t(e.POSITION, 3, C.FLOAT, 0, 12)];
var o2 = [new t(e.POSITION, 2, C.FLOAT, 0, 8)];
var m2 = [new t(e.POSITION, 2, C.FLOAT, 0, 16), new t(e.UV0, 2, C.FLOAT, 8, 16)];

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/lib/glUtil3D.js
function i(f2, s = o2, u2 = O, i2 = -1, l4 = 1) {
  let a3 = null;
  if (s === m2) a3 = new Float32Array([i2, i2, 0, 0, l4, i2, 1, 0, i2, l4, 0, 1, l4, l4, 1, 1]);
  else a3 = new Float32Array([i2, i2, l4, i2, i2, l4, l4, l4]);
  return new r(f2, u2, {
    geometry: s
  }, {
    geometry: c.createVertex(f2, F.STATIC_DRAW, a3)
  });
}
var l3 = 4;
function a2(e3) {
  const r3 = new e2(l3);
  return r3.samplingMode = L.NEAREST, new c2(e3, r3);
}

export {
  O2 as O,
  n,
  r2 as r,
  o,
  u,
  l2 as l,
  h,
  d,
  m,
  q,
  x,
  o2,
  m2,
  i,
  a2 as a
};
//# sourceMappingURL=chunk-5A6MLLPH.js.map
