// ../../../node_modules/@arcgis/core/geometry/support/quantizationUtils.js
function s2(n) {
  if (!n) return null;
  return {
    originPosition: "upper-left" === n.originPosition ? "upperLeft" : "lower-left" === n.originPosition ? "lowerLeft" : n.originPosition,
    scale: n.tolerance ? [n.tolerance, n.tolerance, 1, 1] : [1, 1, 1, 1],
    translate: null != n.extent ? [n.extent.xmin, n.extent.ymax, n.extent.zmin ?? 0, n.extent.mmin ?? 0] : [0, 0, 0, 0]
  };
}
function l2(n) {
  return "lowerLeft" === n.originPosition && 4 === n.scale.length && 4 === n.translate.length;
}
function u2(n) {
  if (l2(n)) return n;
  const {
    originPosition: t,
    scale: e,
    translate: r
  } = n, o = e[0] ?? 1, s3 = e[1] ?? 1;
  return {
    originPosition: "lowerLeft",
    scale: [o, "lowerLeft" === t ? s3 : -s3, e[2] ?? 1, e[3] ?? 1],
    translate: [r[0] ?? 0, r[1] ?? 0, r[2] ?? 0, r[3] ?? 0]
  };
}
function i({
  scale: n,
  translate: t
}, e) {
  return Math.round((e - t[0]) / n[0]);
}
function a({
  scale: n,
  translate: t
}, e) {
  return Math.round((e - t[1]) / n[1]);
}
function c({
  scale: n,
  translate: t
}, e) {
  return Math.round(((e ?? 0) - t[2]) / n[2]);
}
function h({
  scale: n,
  translate: t
}, e) {
  return e ? Math.round((e - t[3]) / n[3]) : 0;
}
function Z({
  scale: n,
  translate: t
}, e) {
  return e * n[0] + t[0];
}
function y({
  scale: n,
  translate: t
}, e) {
  return e * n[1] + t[1];
}
function z({
  scale: n,
  translate: t
}, e) {
  return (e ?? 0) * n[2] + t[2];
}
function w({
  scale: n,
  translate: t
}, e) {
  return e ? e * n[3] + t[3] : 0;
}
function P(n, t) {
  return n && t ? A : n && !t ? E : !n && t ? L : T;
}
var T = (n, t) => {
  const e = new Array(t.length);
  if (!t.length) return e;
  const r = t[0];
  let o = Z(n, r[0]), s3 = y(n, r[1]);
  e[0] = [o, s3];
  const {
    scale: l3,
    originPosition: u3
  } = n, i2 = l3[0], a2 = "lowerLeft" === u3 ? l3[1] : -l3[1];
  for (let c2 = 1; c2 < t.length; c2++) {
    const [n2, r2] = t[c2];
    o += i2 * n2, s3 += a2 * r2, e[c2] = [o, s3];
  }
  return e;
};
var E = (n, t) => {
  const e = new Array(t.length);
  if (!t.length) return e;
  const r = t[0];
  let o = Z(n, r[0]), s3 = y(n, r[1]);
  e[0] = [o, s3, z(n, r[2])];
  const {
    scale: l3,
    originPosition: u3
  } = n, i2 = l3[0], a2 = "lowerLeft" === u3 ? l3[1] : -l3[1];
  for (let c2 = 1; c2 < t.length; c2++) {
    const [r2, l4, u4] = t[c2];
    o += i2 * r2, s3 += a2 * l4, e[c2] = [o, s3, z(n, u4)];
  }
  return e;
};
var L = (n, t) => {
  const e = new Array(t.length);
  if (!t.length) return e;
  const r = t[0];
  let o = Z(n, r[0]), s3 = y(n, r[1]);
  e[0] = [o, s3, w(n, r[2])];
  const {
    scale: l3,
    originPosition: u3
  } = n, i2 = l3[0], a2 = "lowerLeft" === u3 ? l3[1] : -l3[1];
  for (let c2 = 1; c2 < t.length; c2++) {
    const [r2, l4, u4] = t[c2];
    o += i2 * r2, s3 += a2 * l4, e[c2] = [o, s3, w(n, u4)];
  }
  return e;
};
var A = (n, t) => {
  const e = new Array(t.length);
  if (!t.length) return e;
  const r = t[0];
  let o = Z(n, r[0]), s3 = y(n, r[1]);
  e[0] = [o, s3, z(n, r[2]), w(n, r[3])];
  const {
    scale: l3,
    originPosition: u3
  } = n, i2 = l3[0], a2 = "lowerLeft" === u3 ? l3[1] : -l3[1];
  for (let c2 = 1; c2 < t.length; c2++) {
    const [r2, l4, u4, h2] = t[c2];
    o += i2 * r2, s3 += a2 * l4, e[c2] = [o, s3, z(n, u4), w(n, h2)];
  }
  return e;
};
function b(n, t, e) {
  const r = new Array(e.length);
  for (let o = 0; o < e.length; o++) r[o] = t(n, e[o]);
  return r;
}
function j(n, t, e) {
  const r = u2(n);
  return t.x = i(r, e.x), t.y = a(r, e.y), null != e.z && (t.z = c(r, e.z)), null != e.m && (t.m = h(r, e.m)), t;
}
function B(n, t, e, r = e?.hasZ ?? false, o = e?.hasM ?? false) {
  if (null != e) {
    const s3 = u2(n);
    t.points = P(r, o)(s3, e.points), t.hasZ = r, t.hasM = o;
  }
  return t;
}
function C(n, t, e, r = null != e?.z, o = null != e?.m) {
  if (null == e) return t;
  const s3 = u2(n);
  return t.x = Z(s3, e.x), t.y = y(s3, e.y), r && (t.z = z(s3, e.z)), o && (t.m = w(s3, e.m)), t;
}
function D(n, t, e, r = e?.hasZ ?? false, o = e?.hasM ?? false) {
  if (null != e) {
    const s3 = u2(n);
    t.rings = b(s3, P(r, o), e.rings), t.hasZ = r, t.hasM = o;
  }
  return t;
}
function H(n, t, e, r = e?.hasZ ?? false, o = e?.hasM ?? false) {
  if (null != e) {
    const s3 = u2(n);
    t.paths = b(s3, P(r, o), e.paths), t.hasZ = r, t.hasM = o;
  }
  return t;
}

export {
  s2 as s,
  j,
  B,
  C,
  D,
  H
};
//# sourceMappingURL=chunk-L4TOCXR5.js.map
