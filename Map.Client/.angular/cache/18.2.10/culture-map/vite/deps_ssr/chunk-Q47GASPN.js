import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  o
} from "./chunk-G73HQZEL.js";

// ../../../node_modules/@arcgis/core/chunks/earcut.js
var n;
var t;
var r;
var x = {
  exports: {}
};
n = x, t = function() {
  function e(e2, t3, x3) {
    x3 = x3 || 2;
    var i3, u2, v2, o3, y2, p2, a2, l2 = t3 && t3.length, h2 = l2 ? t3[0] * x3 : e2.length, s2 = n2(e2, 0, h2, x3, true), c2 = [];
    if (!s2 || s2.next === s2.prev) return c2;
    if (l2 && (s2 = f(e2, t3, s2, x3)), e2.length > 80 * x3) {
      i3 = v2 = e2[0], u2 = o3 = e2[1];
      for (var Z2 = x3; Z2 < h2; Z2 += x3) (y2 = e2[Z2]) < i3 && (i3 = y2), (p2 = e2[Z2 + 1]) < u2 && (u2 = p2), y2 > v2 && (v2 = y2), p2 > o3 && (o3 = p2);
      a2 = 0 !== (a2 = Math.max(v2 - i3, o3 - u2)) ? 1 / a2 : 0;
    }
    return r2(s2, c2, x3, i3, u2, a2), c2;
  }
  function n2(e2, n3, t3, r3, x3) {
    var i3, u2;
    if (x3 === C(e2, n3, t3, r3) > 0) for (i3 = n3; i3 < t3; i3 += r3) u2 = q(i3, e2[i3], e2[i3 + 1], u2);
    else for (i3 = t3 - r3; i3 >= n3; i3 -= r3) u2 = q(i3, e2[i3], e2[i3 + 1], u2);
    if (u2 && m(u2, u2.next)) {
      var v2 = u2.next;
      A(u2), u2 = v2;
    }
    return u2;
  }
  function t2(e2, n3) {
    if (!e2) return e2;
    n3 || (n3 = e2);
    var t3, r3 = e2;
    do {
      if (t3 = false, r3.steiner || !m(r3, r3.next) && 0 !== w(r3.prev, r3, r3.next)) r3 = r3.next;
      else {
        var x3 = r3.prev;
        if (A(r3), (r3 = n3 = x3) === r3.next) break;
        t3 = true;
      }
    } while (t3 || r3 !== n3);
    return n3;
  }
  function r2(e2, n3, f2, o3, y2, p2, a2) {
    if (e2) {
      !a2 && p2 && h(e2, o3, y2, p2);
      for (var l2, s2, c2 = e2; e2.prev !== e2.next; ) if (l2 = e2.prev, s2 = e2.next, p2 ? i2(e2, o3, y2, p2) : x2(e2)) n3.push(l2.i / f2), n3.push(e2.i / f2), n3.push(s2.i / f2), A(e2), e2 = s2.next, c2 = s2.next;
      else if ((e2 = s2) === c2) {
        a2 ? 1 === a2 ? r2(e2 = u(t2(e2), n3, f2), n3, f2, o3, y2, p2, 2) : 2 === a2 && v(e2, n3, f2, o3, y2, p2) : r2(t2(e2), n3, f2, o3, y2, p2, 1);
        break;
      }
    }
  }
  function x2(e2) {
    var n3 = e2.prev, t3 = e2, r3 = e2.next;
    if (w(n3, t3, r3) >= 0) return false;
    for (var x3 = e2.next.next; x3 !== e2.prev; ) {
      if (g(n3.x, n3.y, t3.x, t3.y, r3.x, r3.y, x3.x, x3.y) && w(x3.prev, x3, x3.next) >= 0) return false;
      x3 = x3.next;
    }
    return true;
  }
  function i2(e2, n3, t3, r3) {
    var x3 = e2.prev, i3 = e2, u2 = e2.next;
    if (w(x3, i3, u2) >= 0) return false;
    for (var v2 = x3.x < i3.x ? x3.x < u2.x ? x3.x : u2.x : i3.x < u2.x ? i3.x : u2.x, f2 = x3.y < i3.y ? x3.y < u2.y ? x3.y : u2.y : i3.y < u2.y ? i3.y : u2.y, o3 = x3.x > i3.x ? x3.x > u2.x ? x3.x : u2.x : i3.x > u2.x ? i3.x : u2.x, y2 = x3.y > i3.y ? x3.y > u2.y ? x3.y : u2.y : i3.y > u2.y ? i3.y : u2.y, p2 = c(v2, f2, n3, t3, r3), a2 = c(o3, y2, n3, t3, r3), l2 = e2.prevZ, h2 = e2.nextZ; l2 && l2.z >= p2 && h2 && h2.z <= a2; ) {
      if (l2 !== e2.prev && l2 !== e2.next && g(x3.x, x3.y, i3.x, i3.y, u2.x, u2.y, l2.x, l2.y) && w(l2.prev, l2, l2.next) >= 0) return false;
      if (l2 = l2.prevZ, h2 !== e2.prev && h2 !== e2.next && g(x3.x, x3.y, i3.x, i3.y, u2.x, u2.y, h2.x, h2.y) && w(h2.prev, h2, h2.next) >= 0) return false;
      h2 = h2.nextZ;
    }
    for (; l2 && l2.z >= p2; ) {
      if (l2 !== e2.prev && l2 !== e2.next && g(x3.x, x3.y, i3.x, i3.y, u2.x, u2.y, l2.x, l2.y) && w(l2.prev, l2, l2.next) >= 0) return false;
      l2 = l2.prevZ;
    }
    for (; h2 && h2.z <= a2; ) {
      if (h2 !== e2.prev && h2 !== e2.next && g(x3.x, x3.y, i3.x, i3.y, u2.x, u2.y, h2.x, h2.y) && w(h2.prev, h2, h2.next) >= 0) return false;
      h2 = h2.nextZ;
    }
    return true;
  }
  function u(e2, n3, r3) {
    var x3 = e2;
    do {
      var i3 = x3.prev, u2 = x3.next.next;
      !m(i3, u2) && M(i3, x3, x3.next, u2) && j(i3, u2) && j(u2, i3) && (n3.push(i3.i / r3), n3.push(x3.i / r3), n3.push(u2.i / r3), A(x3), A(x3.next), x3 = e2 = u2), x3 = x3.next;
    } while (x3 !== e2);
    return t2(x3);
  }
  function v(e2, n3, x3, i3, u2, v2) {
    var f2 = e2;
    do {
      for (var o3 = f2.next.next; o3 !== f2.prev; ) {
        if (f2.i !== o3.i && d(f2, o3)) {
          var y2 = _(f2, o3);
          return f2 = t2(f2, f2.next), y2 = t2(y2, y2.next), r2(f2, n3, x3, i3, u2, v2), void r2(y2, n3, x3, i3, u2, v2);
        }
        o3 = o3.next;
      }
      f2 = f2.next;
    } while (f2 !== e2);
  }
  function f(e2, r3, x3, i3) {
    var u2, v2, f2, y2 = [];
    for (u2 = 0, v2 = r3.length; u2 < v2; u2++) (f2 = n2(e2, r3[u2] * i3, u2 < v2 - 1 ? r3[u2 + 1] * i3 : e2.length, i3, false)) === f2.next && (f2.steiner = true), y2.push(Z(f2));
    for (y2.sort(o2), u2 = 0; u2 < y2.length; u2++) x3 = t2(x3 = p(y2[u2], x3), x3.next);
    return x3;
  }
  function o2(e2, n3) {
    return e2.x - n3.x;
  }
  function y(e2) {
    if (e2.next.prev === e2) return e2;
    let n3 = e2;
    for (; ; ) {
      const t3 = n3.next;
      if (t3.prev === n3 || t3 === n3 || t3 === e2) break;
      n3 = t3;
    }
    return n3;
  }
  function p(e2, n3) {
    var r3 = a(e2, n3);
    if (!r3) return n3;
    var x3 = _(r3, e2), i3 = t2(r3, r3.next);
    let u2 = y(x3);
    return t2(u2, u2.next), i3 = y(i3), y(n3 === r3 ? i3 : n3);
  }
  function a(e2, n3) {
    var t3, r3 = n3, x3 = e2.x, i3 = e2.y, u2 = -1 / 0;
    do {
      if (i3 <= r3.y && i3 >= r3.next.y && r3.next.y !== r3.y) {
        var v2 = r3.x + (i3 - r3.y) * (r3.next.x - r3.x) / (r3.next.y - r3.y);
        if (v2 <= x3 && v2 > u2) {
          if (u2 = v2, v2 === x3) {
            if (i3 === r3.y) return r3;
            if (i3 === r3.next.y) return r3.next;
          }
          t3 = r3.x < r3.next.x ? r3 : r3.next;
        }
      }
      r3 = r3.next;
    } while (r3 !== n3);
    if (!t3) return null;
    if (x3 === u2) return t3;
    var f2, o3 = t3, y2 = t3.x, p2 = t3.y, a2 = 1 / 0;
    r3 = t3;
    do {
      x3 >= r3.x && r3.x >= y2 && x3 !== r3.x && g(i3 < p2 ? x3 : u2, i3, y2, p2, i3 < p2 ? u2 : x3, i3, r3.x, r3.y) && (f2 = Math.abs(i3 - r3.y) / (x3 - r3.x), j(r3, e2) && (f2 < a2 || f2 === a2 && (r3.x > t3.x || r3.x === t3.x && l(t3, r3))) && (t3 = r3, a2 = f2)), r3 = r3.next;
    } while (r3 !== o3);
    return t3;
  }
  function l(e2, n3) {
    return w(e2.prev, e2, n3.prev) < 0 && w(n3.next, e2, e2.next) < 0;
  }
  function h(e2, n3, t3, r3) {
    var x3 = e2;
    do {
      null === x3.z && (x3.z = c(x3.x, x3.y, n3, t3, r3)), x3.prevZ = x3.prev, x3.nextZ = x3.next, x3 = x3.next;
    } while (x3 !== e2);
    x3.prevZ.nextZ = null, x3.prevZ = null, s(x3);
  }
  function s(e2) {
    var n3, t3, r3, x3, i3, u2, v2, f2, o3 = 1;
    do {
      for (t3 = e2, e2 = null, i3 = null, u2 = 0; t3; ) {
        for (u2++, r3 = t3, v2 = 0, n3 = 0; n3 < o3 && (v2++, r3 = r3.nextZ); n3++) ;
        for (f2 = o3; v2 > 0 || f2 > 0 && r3; ) 0 !== v2 && (0 === f2 || !r3 || t3.z <= r3.z) ? (x3 = t3, t3 = t3.nextZ, v2--) : (x3 = r3, r3 = r3.nextZ, f2--), i3 ? i3.nextZ = x3 : e2 = x3, x3.prevZ = i3, i3 = x3;
        t3 = r3;
      }
      i3.nextZ = null, o3 *= 2;
    } while (u2 > 1);
    return e2;
  }
  function c(e2, n3, t3, r3, x3) {
    return (e2 = 1431655765 & ((e2 = 858993459 & ((e2 = 252645135 & ((e2 = 16711935 & ((e2 = 32767 * (e2 - t3) * x3) | e2 << 8)) | e2 << 4)) | e2 << 2)) | e2 << 1)) | (n3 = 1431655765 & ((n3 = 858993459 & ((n3 = 252645135 & ((n3 = 16711935 & ((n3 = 32767 * (n3 - r3) * x3) | n3 << 8)) | n3 << 4)) | n3 << 2)) | n3 << 1)) << 1;
  }
  function Z(e2) {
    var n3 = e2, t3 = e2;
    do {
      (n3.x < t3.x || n3.x === t3.x && n3.y < t3.y) && (t3 = n3), n3 = n3.next;
    } while (n3 !== e2);
    return t3;
  }
  function g(e2, n3, t3, r3, x3, i3, u2, v2) {
    return (x3 - u2) * (n3 - v2) - (e2 - u2) * (i3 - v2) >= 0 && (e2 - u2) * (r3 - v2) - (t3 - u2) * (n3 - v2) >= 0 && (t3 - u2) * (i3 - v2) - (x3 - u2) * (r3 - v2) >= 0;
  }
  function d(e2, n3) {
    return e2.next.i !== n3.i && e2.prev.i !== n3.i && !k(e2, n3) && (j(e2, n3) && j(n3, e2) && H(e2, n3) && (w(e2.prev, e2, n3.prev) || w(e2, n3.prev, n3)) || m(e2, n3) && w(e2.prev, e2, e2.next) > 0 && w(n3.prev, n3, n3.next) > 0);
  }
  function w(e2, n3, t3) {
    return (n3.y - e2.y) * (t3.x - n3.x) - (n3.x - e2.x) * (t3.y - n3.y);
  }
  function m(e2, n3) {
    return e2.x === n3.x && e2.y === n3.y;
  }
  function M(e2, n3, t3, r3) {
    var x3 = b(w(e2, n3, t3)), i3 = b(w(e2, n3, r3)), u2 = b(w(t3, r3, e2)), v2 = b(w(t3, r3, n3));
    return x3 !== i3 && u2 !== v2 || !(0 !== x3 || !z(e2, t3, n3)) || !(0 !== i3 || !z(e2, r3, n3)) || !(0 !== u2 || !z(t3, e2, r3)) || !(0 !== v2 || !z(t3, n3, r3));
  }
  function z(e2, n3, t3) {
    return n3.x <= Math.max(e2.x, t3.x) && n3.x >= Math.min(e2.x, t3.x) && n3.y <= Math.max(e2.y, t3.y) && n3.y >= Math.min(e2.y, t3.y);
  }
  function b(e2) {
    return e2 > 0 ? 1 : e2 < 0 ? -1 : 0;
  }
  function k(e2, n3) {
    var t3 = e2;
    do {
      if (t3.i !== e2.i && t3.next.i !== e2.i && t3.i !== n3.i && t3.next.i !== n3.i && M(t3, t3.next, e2, n3)) return true;
      t3 = t3.next;
    } while (t3 !== e2);
    return false;
  }
  function j(e2, n3) {
    return w(e2.prev, e2, e2.next) < 0 ? w(e2, n3, e2.next) >= 0 && w(e2, e2.prev, n3) >= 0 : w(e2, n3, e2.prev) < 0 || w(e2, e2.next, n3) < 0;
  }
  function H(e2, n3) {
    var t3 = e2, r3 = false, x3 = (e2.x + n3.x) / 2, i3 = (e2.y + n3.y) / 2;
    do {
      t3.y > i3 != t3.next.y > i3 && t3.next.y !== t3.y && x3 < (t3.next.x - t3.x) * (i3 - t3.y) / (t3.next.y - t3.y) + t3.x && (r3 = !r3), t3 = t3.next;
    } while (t3 !== e2);
    return r3;
  }
  function _(e2, n3) {
    var t3 = new B(e2.i, e2.x, e2.y), r3 = new B(n3.i, n3.x, n3.y), x3 = e2.next, i3 = n3.prev;
    return e2.next = n3, n3.prev = e2, t3.next = x3, x3.prev = t3, r3.next = t3, t3.prev = r3, i3.next = r3, r3.prev = i3, r3;
  }
  function q(e2, n3, t3, r3) {
    var x3 = new B(e2, n3, t3);
    return r3 ? (x3.next = r3.next, x3.prev = r3, r3.next.prev = x3, r3.next = x3) : (x3.prev = x3, x3.next = x3), x3;
  }
  function A(e2) {
    e2.next.prev = e2.prev, e2.prev.next = e2.next, e2.prevZ && (e2.prevZ.nextZ = e2.nextZ), e2.nextZ && (e2.nextZ.prevZ = e2.prevZ);
  }
  function B(e2, n3, t3) {
    this.i = e2, this.x = n3, this.y = t3, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = false;
  }
  function C(e2, n3, t3, r3) {
    for (var x3 = 0, i3 = n3, u2 = t3 - r3; i3 < t3; i3 += r3) x3 += (e2[u2] - e2[i3]) * (e2[i3 + 1] + e2[u2 + 1]), u2 = i3;
    return x3;
  }
  return e.deviation = function(e2, n3, t3, r3) {
    var x3 = n3 && n3.length, i3 = x3 ? n3[0] * t3 : e2.length, u2 = Math.abs(C(e2, 0, i3, t3));
    if (x3) for (var v2 = 0, f2 = n3.length; v2 < f2; v2++) {
      var o3 = n3[v2] * t3, y2 = v2 < f2 - 1 ? n3[v2 + 1] * t3 : e2.length;
      u2 -= Math.abs(C(e2, o3, y2, t3));
    }
    var p2 = 0;
    for (v2 = 0; v2 < r3.length; v2 += 3) {
      var a2 = r3[v2] * t3, l2 = r3[v2 + 1] * t3, h2 = r3[v2 + 2] * t3;
      p2 += Math.abs((e2[a2] - e2[h2]) * (e2[l2 + 1] - e2[a2 + 1]) - (e2[a2] - e2[l2]) * (e2[h2 + 1] - e2[a2 + 1]));
    }
    return 0 === u2 && 0 === p2 ? 0 : Math.abs((p2 - u2) / u2);
  }, e.flatten = function(e2) {
    for (var n3 = e2[0][0].length, t3 = {
      vertices: [],
      holes: [],
      dimensions: n3
    }, r3 = 0, x3 = 0; x3 < e2.length; x3++) {
      for (var i3 = 0; i3 < e2[x3].length; i3++) for (var u2 = 0; u2 < n3; u2++) t3.vertices.push(e2[x3][i3][u2]);
      x3 > 0 && (r3 += e2[x3 - 1].length, t3.holes.push(r3));
    }
    return t3;
  }, e;
}, void 0 !== (r = t()) && (n.exports = r);
var i = o(x.exports);

export {
  i
};
//# sourceMappingURL=chunk-Q47GASPN.js.map