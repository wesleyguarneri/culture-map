// ../../../node_modules/@arcgis/core/views/2d/unitBezier.js
function e(e2, n2, t2, r2) {
  const u = 3 * e2, i = 3 * (t2 - e2) - u, a = 1 - u - i, o = 3 * n2, s = 3 * (r2 - n2) - o, f = 1 - o - s;
  function c(e3) {
    return ((a * e3 + i) * e3 + u) * e3;
  }
  function l(e3) {
    return ((f * e3 + s) * e3 + o) * e3;
  }
  function b(e3) {
    return (3 * a * e3 + 2 * i) * e3 + u;
  }
  function p(e3, n3) {
    let t3, r3, u2, i2, a2, o2;
    for (u2 = e3, o2 = 0; o2 < 8; o2++) {
      if (i2 = c(u2) - e3, Math.abs(i2) < n3) return u2;
      if (a2 = b(u2), Math.abs(a2) < 1e-6) break;
      u2 -= i2 / a2;
    }
    if (t3 = 0, r3 = 1, u2 = e3, u2 < t3) return t3;
    if (u2 > r3) return r3;
    for (; t3 < r3; ) {
      if (i2 = c(u2), Math.abs(i2 - e3) < n3) return u2;
      e3 > i2 ? t3 = u2 : r3 = u2, u2 = 0.5 * (r3 - t3) + t3;
    }
    return u2;
  }
  return function(e3, n3 = 1e-6) {
    return l(p(e3, n3));
  };
}
var n = /^cubic-bezier\((.*)\)/;
var t = {};
function r(r2) {
  let u = t[r2] || null;
  if (!u) {
    const t2 = n.exec(r2);
    if (t2) {
      const n2 = t2[1].split(",").map((e2) => parseFloat(e2.trim()));
      4 !== n2.length || n2.some((e2) => isNaN(e2)) || (u = e.apply(e, n2));
    }
  }
  return u;
}
t.ease = e(0.25, 0.1, 0.25, 1), t.linear = e(0, 0, 1, 1), t.easeIn = t["ease-in"] = e(0.42, 0, 1, 1), t.easeOut = t["ease-out"] = e(0, 0, 0.58, 1), t.easeInOut = t["ease-in-out"] = e(0.42, 0, 0.58, 1);

export {
  e,
  t,
  r
};
//# sourceMappingURL=chunk-TXQH7JZF.js.map