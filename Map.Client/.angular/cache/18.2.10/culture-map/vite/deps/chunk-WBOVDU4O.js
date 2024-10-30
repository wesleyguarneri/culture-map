import {
  i
} from "./chunk-L3F4XA4B.js";
import {
  e
} from "./chunk-OUP4PSAG.js";
import {
  t
} from "./chunk-WU7FVYT7.js";
import {
  a as a2,
  e as e2,
  t as t2
} from "./chunk-62WUYJJN.js";
import {
  E,
  F,
  X
} from "./chunk-N4KQPPPI.js";
import {
  a
} from "./chunk-TUIGM7TV.js";
import {
  n
} from "./chunk-6CA6K3O7.js";
import {
  h
} from "./chunk-3ZXOUEQG.js";
import {
  o
} from "./chunk-AXVPJBVW.js";
import {
  L,
  W2 as W
} from "./chunk-JJS7PR2U.js";

// ../../../node_modules/@arcgis/core/geometry/support/polygonUtils.js
function c(t3, o2, s) {
  const i2 = e3(f, t3, o2, s) ? F(f) : [0, 0, 1];
  return Math.abs(i2[2]) > Math.cos(h(80)) ? n.Z : Math.abs(i2[1]) > Math.abs(i2[0]) ? n.Y : n.X;
}
function e3(r, a4, i2, n2) {
  const c2 = ((r2) => !Array.isArray(r2[0]))(a4) ? (r2, t3) => a4[3 * r2 + t3] : (r2, t3) => a4[r2][t3], e4 = n2 ? W(n2) / L(n2) : 1;
  return X(r, (r2, t3) => o(r2, c2(t3, 0) * e4, c2(t3, 1) * e4, c2(t3, 2)), i2);
}
var f = E();

// ../../../node_modules/@arcgis/core/geometry/support/triangulationUtils.js
function f2(t3) {
  const e4 = a3(t3.rings, t3.hasZ, p.CCW_IS_HOLE, t3.spatialReference), s = new Array();
  let l = 0, f3 = 0;
  for (const r of e4.polygons) {
    const t4 = r.count, c2 = r.index, h3 = a2(e4.position, 3 * c2, 3 * t4), a4 = r.holeIndices.map((n2) => n2 - c2), g3 = t(i(h3, a4, 3));
    s.push({
      position: h3,
      faces: g3
    }), l += h3.length, f3 += g3.length;
  }
  const g2 = h2(s, l, f3), u2 = Array.isArray(g2.position) ? e(g2.position, 3, {
    originalIndices: g2.faces
  }) : e(g2.position.buffer, 6, {
    originalIndices: g2.faces
  });
  return g2.position = e2(new Float64Array(u2.buffer)), g2.faces = u2.indices, g2;
}
function h2(n2, t3, e4) {
  if (1 === n2.length) return n2[0];
  const o2 = t2(t3), r = new Array(e4);
  let l = 0, c2 = 0, f3 = 0;
  for (const s of n2) {
    for (let n3 = 0; n3 < s.position.length; n3++) o2[l++] = s.position[n3];
    for (const n3 of s.faces) r[c2++] = n3 + f3;
    f3 = l / 3;
  }
  return {
    position: o2,
    faces: t(r)
  };
}
function a3(n2, t3, e4, o2) {
  const r = n2.length, i2 = new Array(r), l = new Array(r), c2 = new Array(r);
  let f3 = 0;
  for (let s = 0; s < r; ++s) f3 += n2[s].length;
  let h3 = 0, a4 = 0, m = 0;
  const d = t2(3 * f3);
  let y = 0;
  for (let s = r - 1; s >= 0; s--) {
    const f4 = n2[s], A = e4 === p.CCW_IS_HOLE && u(f4, t3, o2);
    if (A && 1 !== r) i2[h3++] = f4;
    else {
      let n3 = f4.length;
      for (let t4 = 0; t4 < h3; ++t4) n3 += i2[t4].length;
      const e5 = {
        index: y,
        pathLengths: new Array(h3 + 1),
        count: n3,
        holeIndices: new Array(h3)
      };
      e5.pathLengths[0] = f4.length, f4.length > 0 && (c2[m++] = {
        index: y,
        count: f4.length
      }), y = A ? g(f4, f4.length - 1, -1, d, y, f4.length, t3) : g(f4, 0, 1, d, y, f4.length, t3);
      for (let o3 = 0; o3 < h3; ++o3) {
        const n4 = i2[o3];
        e5.holeIndices[o3] = y, e5.pathLengths[o3 + 1] = n4.length, n4.length > 0 && (c2[m++] = {
          index: y,
          count: n4.length
        }), y = g(n4, 0, 1, d, y, n4.length, t3);
      }
      h3 = 0, e5.count > 0 && (l[a4++] = e5);
    }
  }
  for (let s = 0; s < h3; ++s) {
    const n3 = i2[s];
    n3.length > 0 && (c2[m++] = {
      index: y,
      count: n3.length
    }), y = g(n3, 0, 1, d, y, n3.length, t3);
  }
  return l.length = a4, c2.length = m, {
    position: d,
    polygons: l,
    outlines: c2
  };
}
function g(n2, t3, e4, o2, r, s, i2) {
  r *= 3;
  for (let l = 0; l < s; ++l) {
    const s2 = n2[t3];
    o2[r++] = s2[0], o2[r++] = s2[1], o2[r++] = i2 ? s2[2] : 0, t3 += e4;
  }
  return r / 3;
}
function u(n2, o2, r) {
  if (!o2) return !a(n2);
  const s = n2.length - 1;
  switch (c(n2, s, r)) {
    case n.X:
      return !a(n2, n.Y, n.Z);
    case n.Y:
      return !a(n2, n.X, n.Z);
    case n.Z:
      return !a(n2, n.X, n.Y);
  }
}
var p;
!function(n2) {
  n2[n2.NONE = 0] = "NONE", n2[n2.CCW_IS_HOLE = 1] = "CCW_IS_HOLE";
}(p || (p = {}));

export {
  c,
  f2 as f,
  a3 as a,
  p
};
//# sourceMappingURL=chunk-WBOVDU4O.js.map
