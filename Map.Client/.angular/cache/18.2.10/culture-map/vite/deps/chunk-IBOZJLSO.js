import {
  o
} from "./chunk-7RMVJCDW.js";

// ../../../node_modules/@arcgis/core/chunks/quickselect.js
var r;
var t;
var n;
var a = {
  exports: {}
};
r = a, t = function() {
  function o2(o3, t3, a2, f2, e) {
    r2(o3, t3, a2 || 0, f2 || o3.length - 1, e || n2);
  }
  function r2(o3, n3, a2, f2, e) {
    for (; f2 > a2; ) {
      if (f2 - a2 > 600) {
        var s = f2 - a2 + 1, i = n3 - a2 + 1, h = Math.log(s), c = 0.5 * Math.exp(2 * h / 3), p = 0.5 * Math.sqrt(h * c * (s - c) / s) * (i - s / 2 < 0 ? -1 : 1);
        r2(o3, n3, Math.max(a2, Math.floor(n3 - i * c / s + p)), Math.min(f2, Math.floor(n3 + (s - i) * c / s + p)), e);
      }
      var u = o3[n3], M = a2, m = f2;
      for (t2(o3, a2, n3), e(o3[f2], u) > 0 && t2(o3, a2, f2); M < m; ) {
        for (t2(o3, M, m), M++, m--; e(o3[M], u) < 0; ) M++;
        for (; e(o3[m], u) > 0; ) m--;
      }
      0 === e(o3[a2], u) ? t2(o3, a2, m) : t2(o3, ++m, f2), m <= n3 && (a2 = m + 1), n3 <= m && (f2 = m - 1);
    }
  }
  function t2(o3, r3, t3) {
    var n3 = o3[r3];
    o3[r3] = o3[t3], o3[t3] = n3;
  }
  function n2(o3, r3) {
    return o3 < r3 ? -1 : o3 > r3 ? 1 : 0;
  }
  return o2;
}, void 0 !== (n = t()) && (r.exports = n);
var f = o(a.exports);

export {
  f
};
//# sourceMappingURL=chunk-IBOZJLSO.js.map