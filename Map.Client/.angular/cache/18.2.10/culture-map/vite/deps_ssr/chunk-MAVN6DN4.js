import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  b
} from "./chunk-6VEI6WC5.js";
import {
  w as w2
} from "./chunk-UWZXGGYT.js";
import {
  f,
  w
} from "./chunk-O7RCHW3H.js";
import {
  j,
  m2 as m,
  u
} from "./chunk-MRPCXIVS.js";
import {
  M,
  a as a2,
  z
} from "./chunk-YTKVV2Y3.js";
import {
  _
} from "./chunk-TIRJMGGG.js";
import {
  A
} from "./chunk-MZM4INJV.js";
import {
  n
} from "./chunk-J4GMQHGL.js";
import {
  N,
  W2 as W
} from "./chunk-6SSA7P3A.js";
import {
  a
} from "./chunk-6JFGZTLU.js";
import {
  O,
  h
} from "./chunk-2ZJE6ZFX.js";

// ../../../node_modules/@arcgis/core/views/draw/support/createUtils.js
function g(t, e) {
  const o = new _({
    x: t[0],
    y: t[1],
    spatialReference: e
  });
  return t.length > 2 && (o.z = t[2]), o;
}
function d(t, e) {
  return new u({
    points: t,
    spatialReference: e
  });
}
function R(t, e, o) {
  const n2 = new m({
    paths: t,
    spatialReference: e
  });
  return o && M(n2), n2;
}
function j2(e, n2, r, a3 = true) {
  const l = a(e);
  l.forEach((e2) => {
    const o = e2[0], n3 = e2[e2.length - 1];
    h(o, n3) && 1 !== e2.length || e2.push(e2[0]);
  });
  let i = new j({
    rings: l,
    spatialReference: n2
  });
  return i.rings.forEach((t) => {
    a2(t) || t.reverse();
  }), r && M(i), a3 && i.isSelfIntersecting && N(n2) && (i = w(i)), i;
}
function T(t, o, n2) {
  const r = o.mapToLocalMultiple(t), a3 = [], l = {
    x: r[0].x,
    y: r[0].y
  }, s = {
    x: r[1].x,
    y: r[1].y
  }, i = Math.round(s.x - l.x), c = Math.round(s.y - l.y), y = Math.max(Math.abs(i), Math.abs(c));
  if (n2) {
    const t2 = {
      x: l.x + y,
      y: l.y + y
    }, e = {
      x: l.x - y,
      y: l.y - y
    };
    a3.push(w2(t2.x, e.y), w2(e.x, e.y), w2(e.x, t2.y), w2(t2.x, t2.y));
  } else {
    const t2 = {
      x: i > 0 ? l.x + y : l.x - y,
      y: c > 0 ? l.y + y : l.y - y
    };
    a3.push(w2(l.x, l.y), w2(t2.x, l.y), w2(t2.x, t2.y), w2(l.x, t2.y));
  }
  return U(j2([a3.map((t2) => o.localToMap(t2)).filter(O)], o.spatialReference, o.doUnnormalization, true), a3, o);
}
function b2(t, o, n2) {
  let r = o.mapToLocalMultiple(t);
  if (1 === r.length) {
    const t2 = 48, e = r[0];
    r = [w2(e.x - t2, e.y + t2), w2(e.x + t2, e.y - t2), w2(e.x + t2, e.y - t2), w2(e.x - t2, e.y + t2)];
  }
  const a3 = [], l = {
    x: r[0].x,
    y: r[0].y
  }, s = {
    x: r[1].x,
    y: r[1].y
  };
  if (n2) {
    const t2 = Math.round(s.x - l.x), e = Math.round(s.y - l.y);
    a3.push(w2(l.x - t2, l.y - e), w2(s.x, l.y - e), w2(s.x, s.y), w2(l.x - t2, s.y));
  } else a3.push(w2(l.x, l.y), w2(s.x, l.y), w2(s.x, s.y), w2(l.x, s.y));
  return U(j2([a3.map((t2) => o.localToMap(t2)).filter(O)], o.spatialReference, o.doUnnormalization, true), a3, o);
}
function U(t, e, o) {
  const n2 = P(e[3], e[2], o), r = P(e[1], e[2], o), a3 = P(e[0], e[1], o), l = P(e[0], e[3], o);
  return {
    geometry: t,
    midpoints: null != n2 && null != r && null != a3 && null != l ? {
      top: n2,
      right: r,
      bottom: a3,
      left: l
    } : null
  };
}
function P(t, e, o) {
  w3[0] = t.x, w3[1] = t.y, w3[2] = 0, I[0] = e.x, I[1] = e.y, I[2] = 0, A(w3, w3, I, 0.5), z2.x = w3[0], z2.y = I[1], z2.z = I[2];
  const n2 = o.localToMap(z2);
  return null != n2 ? g(n2, o.spatialReference) : null;
}
var z2 = w2(0, 0, 0);
var w3 = n();
var I = n();
function L(t, e, o, r) {
  const a3 = e.mapToLocalMultiple(t);
  let s = null, c = null;
  if (o) s = a3[0], c = a3[1];
  else {
    const t2 = a3[0], e2 = a3[1], o2 = Math.round(e2.x - t2.x), n2 = Math.round(e2.y - t2.y), r2 = Math.max(Math.abs(o2), Math.abs(n2));
    s = w2(o2 > 0 ? t2.x + r2 / 2 : t2.x - r2 / 2, n2 > 0 ? t2.y + r2 / 2 : t2.y - r2 / 2), c = w2(Math.abs(o2) > Math.abs(n2) ? s.x - r2 / 2 : s.x, Math.abs(o2) > Math.abs(n2) ? s.y : s.y - r2 / 2);
  }
  const y = e.localToMap(s), f2 = e.localToMap(c);
  if (null == y || null == f2) return null;
  e.doUnnormalization && z([[y, f2]], e.spatialReference);
  const x = g(y, e.spatialReference), h2 = g(f2, e.spatialReference), M2 = W(e.spatialReference);
  let d2 = 0;
  if (N(e.spatialReference)) d2 = M2 * f(x, h2, null);
  else {
    const t2 = s.x - c.x, e2 = s.y - c.y;
    d2 = M2 * Math.sqrt(t2 * t2 + e2 * e2) * (r || 1);
  }
  const R2 = new b({
    center: x,
    radius: d2,
    radiusUnit: "meters",
    spatialReference: e.spatialReference
  });
  return {
    geometry: j2(R2.rings, R2.spatialReference, false),
    center: x,
    edge: h2
  };
}
function v(t, o, n2) {
  const r = o.mapToLocalMultiple(t), a3 = r[0], l = r[1], s = Math.round(l.x - a3.x), i = Math.round(l.y - a3.y), c = w2(n2 ? a3.x : a3.x + s / 2, n2 ? a3.y : a3.y + i / 2), y = n2 ? s : s / 2, p = n2 ? i : i / 2, u2 = 60, f2 = [], x = 2 * Math.PI / u2;
  function h2(t2) {
    const e = Math.cos(t2), o2 = Math.sin(t2);
    return w2(y * e + c.x, p * o2 + c.y);
  }
  for (let e = 0; e < u2; e++) f2.push(h2(e * x));
  f2.push(f2[0]);
  const {
    spatialReference: M2,
    doUnnormalization: d2
  } = o, R2 = j2([f2.map((t2) => o.localToMap(t2)).filter(O)], M2, d2, false), T2 = o.localToMap(h2(Math.PI / 2)), b3 = o.localToMap(h2(0)), U2 = o.localToMap(h2(-Math.PI / 2)), P2 = o.localToMap(h2(Math.PI));
  return {
    geometry: R2,
    midpoints: null != T2 && null != b3 && null != U2 && null != P2 ? {
      top: g(T2, M2),
      right: g(b3, M2),
      bottom: g(U2, M2),
      left: g(P2, M2)
    } : null
  };
}

export {
  d,
  R,
  j2 as j,
  T,
  b2 as b,
  L,
  v
};
//# sourceMappingURL=chunk-MAVN6DN4.js.map
