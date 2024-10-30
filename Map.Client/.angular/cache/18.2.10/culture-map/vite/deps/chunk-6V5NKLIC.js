import {
  m
} from "./chunk-CZQYBYHB.js";
import {
  B as B2,
  G,
  S,
  V,
  Y,
  k,
  q,
  v,
  w
} from "./chunk-2XI572KI.js";
import {
  e as e4,
  f as f2,
  i
} from "./chunk-AWJPQWYU.js";
import {
  c as c2
} from "./chunk-Q4KYZS3X.js";
import {
  u
} from "./chunk-KVKFHRJ3.js";
import {
  a
} from "./chunk-VWML4J2J.js";
import {
  j as j3
} from "./chunk-JYODC3YQ.js";
import {
  e as e2,
  o
} from "./chunk-BQZBOYBD.js";
import {
  e as e3
} from "./chunk-TYQXPPSP.js";
import {
  B,
  c,
  f,
  h
} from "./chunk-XTVPEVHA.js";
import {
  x
} from "./chunk-3ZXOUEQG.js";
import {
  O,
  e,
  j as j2
} from "./chunk-AXVPJBVW.js";
import {
  n as n2
} from "./chunk-OXEPWRM7.js";
import {
  j,
  z
} from "./chunk-JJS7PR2U.js";
import {
  n2 as n
} from "./chunk-WYIDUUN2.js";

// ../../../node_modules/@arcgis/core/geometry/support/meshUtils/vertexSpaceConversion.js
var G2 = () => n.getLogger("esri.geometry.support.meshUtils.vertexSpaceConversion");
function N(t, n3, {
  vertexSpace: r,
  spatialReference: e5
}) {
  if ("georeferenced" === r.type) {
    const o3 = t;
    if (!c2(n3, o3, e5)) return false;
    const {
      origin: i3
    } = r;
    return e(t, o3, i3), true;
  }
  const o2 = a(e5), i2 = t;
  if (!c2(n3, i2, o2)) return false;
  const {
    origin: a2
  } = r, s = tt;
  if (!u(e5, a2, s, o2)) return false;
  const c3 = h(tt, s);
  return null != c3 && (O(t, i2, c3), true);
}
function M(t, r, e5) {
  const {
    vertexSpace: o2,
    transform: i2,
    vertexAttributes: l
  } = t, s = J(t.spatialReference, e5, nt.SOURCE | nt.TARGET);
  if (m(o2, r) && (!i2 || B(i2.localMatrix, o)) && x(s, 1)) {
    const {
      position: t2,
      normal: n3,
      tangent: r2
    } = l, o3 = e5?.allowBufferReuse;
    return {
      position: o3 ? t2 : t2.slice(),
      normal: o3 ? n3 : n3?.slice(),
      tangent: o3 ? r2 : r2?.slice()
    };
  }
  switch (t.vertexSpace.type) {
    case "local":
      return "local" === r.type ? P(t, t.vertexSpace, r.origin, e5) : B3(t, t.vertexSpace, r.origin, e5);
    case "georeferenced":
      return "local" === r.type ? L(t, t.vertexSpace, r.origin, e5) : k2(t, t.vertexSpace, r.origin, e5);
  }
}
function k2({
  vertexAttributes: t,
  transform: n3,
  spatialReference: r
}, {
  origin: e5
}, o2, i2) {
  const {
    position: l,
    normal: a2,
    tangent: s
  } = n3 ? q2(t, n3.localMatrix) : t, c3 = new Float64Array(l.length);
  let u2 = l;
  if (e5 && (u2 = i(c3, u2, e5)), o2) {
    const t2 = j2(_, o2);
    u2 = i(c3, u2, t2);
  }
  J(r, i2, nt.NONE);
  const f3 = i2?.allowBufferReuse;
  return {
    position: u2 !== t.position || f3 ? u2 : u2.slice(),
    normal: a2 !== t.normal || f3 ? a2 : a2?.slice(),
    tangent: s !== t.tangent || f3 ? s : s?.slice()
  };
}
function B3({
  spatialReference: t,
  vertexAttributes: n3,
  transform: r
}, {
  origin: e5
}, o2, i2) {
  const l = a(t);
  if (!u(t, e5, Y2, l)) return S(G2(), t, l), null;
  r && c(Y2, Y2, r.localMatrix), I(Y2, t, i2, nt.SOURCE);
  const a2 = new Float64Array(n3.position.length), c3 = z2(n3.position, Y2, t, a2);
  if (!c3) return null;
  const u2 = D(c3, a2, n3.normal, Y2, t);
  if (n3.normal && !u2) return null;
  const f3 = H(c3, a2, n3.tangent, Y2, t);
  if (n3.tangent && !f3) return null;
  if (o2) {
    const t2 = j2(_, o2);
    i(c3, c3, t2);
  }
  return {
    position: c3,
    normal: u2,
    tangent: f3
  };
}
function L({
  vertexAttributes: t,
  spatialReference: n3,
  transform: r
}, {
  origin: e5
}, i2, a2) {
  const s = a(n3);
  if (!u(n3, i2, Y2, s)) return S(G2(), n3, s), null;
  const u2 = 1 / J(n3, a2, nt.TARGET);
  f(Y2, Y2, [u2, u2, u2]);
  const f3 = h(Z, Y2), {
    position: m2,
    normal: p,
    tangent: g
  } = V2(t, e5, r), x2 = new Float64Array(m2.length), v2 = K(m2, n3, f3, x2);
  if (!v2) return null;
  const R = j3($, f3), j4 = Q(p, m2, x2, n3, R, p !== t.normal ? p : void 0);
  if (!j4 && p) return null;
  const w2 = W(g, m2, x2, n3, R, g !== t.tangent ? g : void 0);
  return !w2 && g ? null : {
    position: v2,
    normal: j4,
    tangent: w2
  };
}
function V2(t, n3, r) {
  if (!n3) return t;
  if (!r) {
    const {
      position: r2,
      normal: e6,
      tangent: o2
    } = t;
    return {
      position: i(new Float64Array(r2.length), r2, n3),
      tangent: o2,
      normal: e6
    };
  }
  const e5 = q2(t, r.localMatrix);
  return i(e5.position, e5.position, n3), e5;
}
function P({
  vertexAttributes: t,
  spatialReference: n3,
  transform: r
}, {
  origin: e5
}, o2, i2) {
  const a2 = a(n3);
  if (!u(n3, e5, Y2, a2)) return S(G2(), n3, a2), null;
  if (r && c(Y2, Y2, r.localMatrix), !u(n3, o2, Z, a2)) return S(G2(), a2, n3), null;
  h(Z, Z);
  const c3 = c(Y2, Z, Y2);
  return I(c3, n3, i2, nt.SOURCE | nt.TARGET), q2(t, c3);
}
function q2(t, n3) {
  const r = new Float64Array(t.position.length);
  e4(r, t.position, n3);
  const e5 = t.normal ? new Float32Array(t.normal.length) : null, o2 = t.tangent ? new Float32Array(t.tangent.length) : null;
  return e5 && t.normal && V(t.normal, e5, n3), o2 && t.tangent && B2(t.tangent, o2, n3), {
    position: r,
    normal: e5,
    tangent: o2
  };
}
function z2(t, n3, r, e5) {
  e4(e5, t, n3);
  const o2 = new Float64Array(t.length);
  return G(e5, o2, r) ? o2 : (S(G2(), a(r), r), null);
}
function D(t, n3, r, e5, o2) {
  if (null == r) return null;
  const i2 = new Float32Array(r.length);
  return V(r, i2, e5), k(i2, t, n3, o2, i2) ? i2 : (S(G2(), a(o2), o2), null);
}
function H(t, n3, r, e5, o2) {
  if (null == r) return null;
  const i2 = new Float32Array(r.length);
  return B2(r, i2, e5), q(i2, t, n3, o2, i2) ? i2 : (S(G2(), a(o2), o2), null);
}
function I(t, n3, r, e5) {
  const o2 = J(n3, r, e5);
  1 !== o2 && f(t, t, [o2, o2, o2]);
}
function J(t, n3, r) {
  const e5 = !!(r & nt.SOURCE), o2 = !!(r & nt.TARGET), i2 = n3?.sourceUnit, l = n3?.targetUnit;
  if (!i2 && !l) return 1;
  let a2 = X(i2, t);
  !e5 && i2 && 1 !== a2 && (G2().warn("source unit conversion not supported"), a2 = 1);
  let s = 1 / X(l, t);
  return !o2 && l && 1 !== s && (G2().warn("target unit conversion not supported"), s = 1), a2 * s;
}
function K(t, n3, r, e5) {
  const o2 = w(t, n3, e5);
  if (!o2) return S(G2(), n3, a(n3)), null;
  const i2 = new Float64Array(o2.length);
  return e4(i2, o2, r), i2;
}
function Q(t, n3, r, e5, o2, i2) {
  if (null == t) return null;
  const l = i2 ?? new Float32Array(t.length);
  return v(t, n3, r, e5, l) ? (f2(l, l, o2), l) : (S(G2(), e5, a(e5)), null);
}
function W(t, n3, r, e5, o2, i2) {
  if (null == t) return null;
  const l = i2 ?? new Float32Array(t.length);
  return Y(t, n3, r, e5, l) ? (f2(l, l, o2, 4), l) : (S(G2(), e5, a(e5)), null);
}
function X(t, n3) {
  if (null == t) return 1;
  const o2 = z(n3);
  return 1 / j(o2, "meters", t);
}
var Y2 = e2();
var Z = e2();
var $ = e3();
var _ = n2();
var tt = e2();
var nt;
!function(t) {
  t[t.NONE = 0] = "NONE", t[t.SOURCE = 1] = "SOURCE", t[t.TARGET = 2] = "TARGET";
}(nt || (nt = {}));

export {
  N,
  M,
  X
};
//# sourceMappingURL=chunk-6V5NKLIC.js.map
