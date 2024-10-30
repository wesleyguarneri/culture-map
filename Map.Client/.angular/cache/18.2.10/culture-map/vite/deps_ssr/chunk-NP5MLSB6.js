import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  B,
  C as C2,
  D,
  E,
  F,
  H,
  S4 as S2,
  o2,
  q,
  w2
} from "./chunk-7DRGM3JS.js";
import {
  t as t3
} from "./chunk-LR3PYNHM.js";
import {
  i as i6,
  o2 as o,
  s2 as s5,
  t2
} from "./chunk-VM4DYPO2.js";
import {
  A as A2,
  O,
  Q,
  a as a3,
  g,
  i2 as i5,
  s as s2,
  s2 as s4
} from "./chunk-Q2RVB4BK.js";
import {
  n as n3
} from "./chunk-WS7U2AGS.js";
import {
  a as a4,
  i as i4,
  s as s3
} from "./chunk-U4NXHH3L.js";
import {
  a as a2,
  c,
  i as i2
} from "./chunk-QJK66QPF.js";
import {
  e as e4,
  i as i3,
  l
} from "./chunk-FB2GCV4L.js";
import {
  A,
  Bt,
  R,
  V,
  a,
  rt,
  tt,
  zt
} from "./chunk-NOBDTR4N.js";
import {
  U,
  e as e3,
  i,
  n as n2,
  w
} from "./chunk-5RF6XDV4.js";
import {
  C
} from "./chunk-KYLW5XXS.js";
import {
  S
} from "./chunk-B76NC7GX.js";
import {
  e as e2
} from "./chunk-JSWVKNBA.js";
import {
  z
} from "./chunk-EKHRAAS6.js";
import {
  u as u2
} from "./chunk-KUBMHTYA.js";
import {
  u
} from "./chunk-VYTPFEL2.js";
import {
  t
} from "./chunk-MRPCXIVS.js";
import {
  e
} from "./chunk-2OZSYJDX.js";
import {
  n2 as n,
  s2 as s
} from "./chunk-6JFGZTLU.js";
import {
  has
} from "./chunk-2ZJE6ZFX.js";
import {
  __async,
  __spreadProps,
  __spreadValues,
  __superGet
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/mesh/bufcut.js
function e5(e9, t6, r4, i15, u7, o10, l6) {
  D2 = 0;
  const y3 = (i15 - r4) * o10, p7 = u7 && u7.length, c8 = p7 ? (u7[0] - r4) * o10 : y3;
  let v3, s12, h7, d6, Z2, a9 = n4(t6, r4, i15, 0, c8, o10, true);
  if (a9 && a9.next !== a9.prev) {
    if (p7 && (a9 = f(t6, r4, i15, u7, a9, o10)), y3 > 80 * o10) {
      v3 = h7 = t6[0 + r4 * o10], s12 = d6 = t6[1 + r4 * o10];
      for (let e10 = o10; e10 < c8; e10 += o10) {
        const n11 = t6[e10 + r4 * o10], x5 = t6[e10 + 1 + r4 * o10];
        v3 = Math.min(v3, n11), s12 = Math.min(s12, x5), h7 = Math.max(h7, n11), d6 = Math.max(d6, x5);
      }
      Z2 = Math.max(h7 - v3, d6 - s12), Z2 = 0 !== Z2 ? 1 / Z2 : 0;
    }
    x(a9, e9, o10, v3, s12, Z2, l6, 0);
  }
}
function n4(e9, n11, t6, x5, r4, i15, l6) {
  let f6;
  if (l6 === Z(e9, n11, t6, x5, r4, i15) > 0) for (let o10 = x5; o10 < r4; o10 += i15) f6 = u3(o10 + n11 * i15, e9[o10 + n11 * i15], e9[o10 + 1 + n11 * i15], f6);
  else for (let o10 = r4 - i15; o10 >= x5; o10 -= i15) f6 = u3(o10 + n11 * i15, e9[o10 + n11 * i15], e9[o10 + 1 + n11 * i15], f6);
  return f6 && M(f6, f6.next) && (o3(f6), f6 = f6.next), f6;
}
function t4(e9, n11 = e9) {
  if (!e9) return e9;
  let t6, x5 = e9;
  do {
    if (t6 = false, x5.steiner || !M(x5, x5.next) && 0 !== s6(x5.prev, x5, x5.next)) x5 = x5.next;
    else {
      if (o3(x5), x5 = n11 = x5.prev, x5 === x5.next) break;
      t6 = true;
    }
  } while (t6 || x5 !== n11);
  return n11;
}
function x(e9, n11, u7, l6, f6, y3, p7, v3) {
  if (!e9) return;
  !v3 && y3 && (e9 = c2(e9, l6, f6, y3));
  let s12 = e9;
  for (; e9.prev !== e9.next; ) {
    const c8 = e9.prev, h7 = e9.next;
    if (y3 ? i7(e9, l6, f6, y3) : r(e9)) n11.push(c8.index / u7 + p7), n11.push(e9.index / u7 + p7), n11.push(h7.index / u7 + p7), o3(e9), e9 = h7.next, s12 = h7.next;
    else if ((e9 = h7) === s12) {
      v3 ? 1 === v3 ? x(e9 = b(e9, n11, u7, p7), n11, u7, l6, f6, y3, p7, 2) : 2 === v3 && g2(e9, n11, u7, l6, f6, y3, p7) : x(t4(e9), n11, u7, l6, f6, y3, p7, 1);
      break;
    }
  }
}
function r(e9) {
  const n11 = e9.prev, t6 = e9, x5 = e9.next;
  if (s6(n11, t6, x5) >= 0) return false;
  let r4 = e9.next.next;
  const i15 = r4;
  let u7 = 0;
  for (; r4 !== e9.prev && (0 === u7 || r4 !== i15); ) {
    if (u7++, a5(n11.x, n11.y, t6.x, t6.y, x5.x, x5.y, r4.x, r4.y) && s6(r4.prev, r4, r4.next) >= 0) return false;
    r4 = r4.next;
  }
  return true;
}
function i7(e9, n11, t6, x5) {
  const r4 = e9.prev, i15 = e9, u7 = e9.next;
  if (s6(r4, i15, u7) >= 0) return false;
  const o10 = r4.x < i15.x ? r4.x < u7.x ? r4.x : u7.x : i15.x < u7.x ? i15.x : u7.x, l6 = r4.y < i15.y ? r4.y < u7.y ? r4.y : u7.y : i15.y < u7.y ? i15.y : u7.y, f6 = r4.x > i15.x ? r4.x > u7.x ? r4.x : u7.x : i15.x > u7.x ? i15.x : u7.x, y3 = r4.y > i15.y ? r4.y > u7.y ? r4.y : u7.y : i15.y > u7.y ? i15.y : u7.y, p7 = z2(o10, l6, n11, t6, x5), c8 = z2(f6, y3, n11, t6, x5);
  let v3 = e9.prevZ, h7 = e9.nextZ;
  for (; v3 && v3.z >= p7 && h7 && h7.z <= c8; ) {
    if (v3 !== e9.prev && v3 !== e9.next && a5(r4.x, r4.y, i15.x, i15.y, u7.x, u7.y, v3.x, v3.y) && s6(v3.prev, v3, v3.next) >= 0) return false;
    if (v3 = v3.prevZ, h7 !== e9.prev && h7 !== e9.next && a5(r4.x, r4.y, i15.x, i15.y, u7.x, u7.y, h7.x, h7.y) && s6(h7.prev, h7, h7.next) >= 0) return false;
    h7 = h7.nextZ;
  }
  for (; v3 && v3.z >= p7; ) {
    if (v3 !== e9.prev && v3 !== e9.next && a5(r4.x, r4.y, i15.x, i15.y, u7.x, u7.y, v3.x, v3.y) && s6(v3.prev, v3, v3.next) >= 0) return false;
    v3 = v3.prevZ;
  }
  for (; h7 && h7.z <= c8; ) {
    if (h7 !== e9.prev && h7 !== e9.next && a5(r4.x, r4.y, i15.x, i15.y, u7.x, u7.y, h7.x, h7.y) && s6(h7.prev, h7, h7.next) >= 0) return false;
    h7 = h7.nextZ;
  }
  return true;
}
function u3(e9, n11, t6, x5) {
  const r4 = q2.create(e9, n11, t6);
  return x5 ? (r4.next = x5.next, r4.prev = x5, x5.next.prev = r4, x5.next = r4) : (r4.prev = r4, r4.next = r4), r4;
}
function o3(e9) {
  e9.next.prev = e9.prev, e9.prev.next = e9.next, e9.prevZ && (e9.prevZ.nextZ = e9.nextZ), e9.nextZ && (e9.nextZ.prevZ = e9.prevZ);
}
function l2(e9) {
  let n11 = e9, t6 = e9;
  do {
    (n11.x < t6.x || n11.x === t6.x && n11.y < t6.y) && (t6 = n11), n11 = n11.next;
  } while (n11 !== e9);
  return t6;
}
function f(e9, t6, x5, r4, i15, u7) {
  const o10 = new Array();
  for (let f6 = 0, y3 = r4.length; f6 < y3; f6++) {
    const i16 = n4(e9, t6, x5, r4[f6] * u7, f6 < y3 - 1 ? r4[f6 + 1] * u7 : x5 * u7, u7, false);
    i16 === i16.next && (i16.steiner = true), o10.push(l2(i16));
  }
  o10.sort(m);
  for (const n11 of o10) i15 = y(n11, i15);
  return i15;
}
function y(e9, n11) {
  const x5 = p(e9, n11);
  if (!x5) return n11;
  const r4 = j(x5, e9);
  return t4(r4, r4.next), t4(x5, x5.next);
}
function p(e9, n11) {
  let t6 = n11;
  const x5 = e9.x, r4 = e9.y;
  let i15, u7 = -1 / 0;
  do {
    if (r4 <= t6.y && r4 >= t6.next.y && t6.next.y !== t6.y) {
      const e10 = t6.x + (r4 - t6.y) * (t6.next.x - t6.x) / (t6.next.y - t6.y);
      if (e10 <= x5 && e10 > u7) {
        if (u7 = e10, e10 === x5) {
          if (r4 === t6.y) return t6;
          if (r4 === t6.next.y) return t6.next;
        }
        i15 = t6.x < t6.next.x ? t6 : t6.next;
      }
    }
    t6 = t6.next;
  } while (t6 !== n11);
  if (!i15) return null;
  if (x5 === u7) return i15.prev;
  const o10 = i15, l6 = i15.x, f6 = i15.y;
  let y3, p7 = 1 / 0;
  for (t6 = i15.next; t6 !== o10; ) x5 >= t6.x && t6.x >= l6 && x5 !== t6.x && a5(r4 < f6 ? x5 : u7, r4, l6, f6, r4 < f6 ? u7 : x5, r4, t6.x, t6.y) && (y3 = Math.abs(r4 - t6.y) / (x5 - t6.x), (y3 < p7 || y3 === p7 && t6.x > i15.x) && w3(t6, e9) && (i15 = t6, p7 = y3)), t6 = t6.next;
  return i15;
}
function c2(e9, n11, t6, x5) {
  let r4;
  for (; r4 !== e9; r4 = r4.next) {
    if (r4 = r4 || e9, null === r4.z && (r4.z = z2(r4.x, r4.y, n11, t6, x5)), r4.prev.next !== r4 || r4.next.prev !== r4) return r4.prev.next = r4, r4.next.prev = r4, c2(e9, n11, t6, x5);
    r4.prevZ = r4.prev, r4.nextZ = r4.next;
  }
  return e9.prevZ.nextZ = null, e9.prevZ = null, v(e9);
}
function v(e9) {
  let n11, t6 = 1;
  for (; ; ) {
    let x5, r4 = e9;
    e9 = null, n11 = null;
    let i15 = 0;
    for (; r4; ) {
      i15++, x5 = r4;
      let u7 = 0;
      for (; u7 < t6 && x5; u7++) x5 = x5.nextZ;
      let o10 = t6;
      for (; u7 > 0 || o10 > 0 && x5; ) {
        let t7;
        0 === u7 ? (t7 = x5, x5 = x5.nextZ, o10--) : 0 !== o10 && x5 ? r4.z <= x5.z ? (t7 = r4, r4 = r4.nextZ, u7--) : (t7 = x5, x5 = x5.nextZ, o10--) : (t7 = r4, r4 = r4.nextZ, u7--), n11 ? n11.nextZ = t7 : e9 = t7, t7.prevZ = n11, n11 = t7;
      }
      r4 = x5;
    }
    if (n11.nextZ = null, t6 *= 2, i15 < 2) return e9;
  }
}
function s6(e9, n11, t6) {
  return (n11.y - e9.y) * (t6.x - n11.x) - (n11.x - e9.x) * (t6.y - n11.y);
}
function h(e9, n11, t6, x5) {
  return !!(M(e9, n11) && M(t6, x5) || M(e9, x5) && M(t6, n11)) || s6(e9, n11, t6) > 0 != s6(e9, n11, x5) > 0 && s6(t6, x5, e9) > 0 != s6(t6, x5, n11) > 0;
}
function d(e9, n11) {
  let t6 = e9;
  do {
    if (t6.index !== e9.index && t6.next.index !== e9.index && t6.index !== n11.index && t6.next.index !== n11.index && h(t6, t6.next, e9, n11)) return true;
    t6 = t6.next;
  } while (t6 !== e9);
  return false;
}
function Z(e9, n11, t6, x5, r4, i15) {
  let u7 = 0;
  for (let o10 = x5, l6 = r4 - i15; o10 < r4; o10 += i15) u7 += (e9[l6 + n11 * i15] - e9[o10 + n11 * i15]) * (e9[o10 + 1 + n11 * i15] + e9[l6 + 1 + n11 * i15]), l6 = o10;
  return u7;
}
function a5(e9, n11, t6, x5, r4, i15, u7, o10) {
  return (r4 - u7) * (n11 - o10) - (e9 - u7) * (i15 - o10) >= 0 && (e9 - u7) * (x5 - o10) - (t6 - u7) * (n11 - o10) >= 0 && (t6 - u7) * (i15 - o10) - (r4 - u7) * (x5 - o10) >= 0;
}
function w3(e9, n11) {
  return s6(e9.prev, e9, e9.next) < 0 ? s6(e9, n11, e9.next) >= 0 && s6(e9, e9.prev, n11) >= 0 : s6(e9, n11, e9.prev) < 0 || s6(e9, e9.next, n11) < 0;
}
function z2(e9, n11, t6, x5, r4) {
  return (e9 = 1431655765 & ((e9 = 858993459 & ((e9 = 252645135 & ((e9 = 16711935 & ((e9 = 32767 * (e9 - t6) * r4) | e9 << 8)) | e9 << 4)) | e9 << 2)) | e9 << 1)) | (n11 = 1431655765 & ((n11 = 858993459 & ((n11 = 252645135 & ((n11 = 16711935 & ((n11 = 32767 * (n11 - x5) * r4) | n11 << 8)) | n11 << 4)) | n11 << 2)) | n11 << 1)) << 1;
}
function M(e9, n11) {
  return e9.x === n11.x && e9.y === n11.y;
}
function m(e9, n11) {
  return e9.x - n11.x;
}
function b(e9, n11, t6, x5) {
  let r4 = e9;
  do {
    const i15 = r4.prev, u7 = r4.next.next;
    !M(i15, u7) && h(i15, r4, r4.next, u7) && w3(i15, u7) && w3(u7, i15) && (n11.push(i15.index / t6 + x5), n11.push(r4.index / t6 + x5), n11.push(u7.index / t6 + x5), o3(r4), o3(r4.next), r4 = e9 = u7), r4 = r4.next;
  } while (r4 !== e9);
  return r4;
}
function g2(e9, n11, r4, i15, u7, o10, l6) {
  let f6 = e9;
  do {
    let e10 = f6.next.next;
    for (; e10 !== f6.prev; ) {
      if (f6.index !== e10.index && k(f6, e10)) {
        let y3 = j(f6, e10);
        return f6 = t4(f6, f6.next), y3 = t4(y3, y3.next), x(f6, n11, r4, i15, u7, o10, l6, 0), void x(y3, n11, r4, i15, u7, o10, l6, 0);
      }
      e10 = e10.next;
    }
    f6 = f6.next;
  } while (f6 !== e9);
}
function k(e9, n11) {
  return e9.next.index !== n11.index && e9.prev.index !== n11.index && !d(e9, n11) && w3(e9, n11) && w3(n11, e9) && A3(e9, n11);
}
function A3(e9, n11) {
  let t6 = e9, x5 = false;
  const r4 = (e9.x + n11.x) / 2, i15 = (e9.y + n11.y) / 2;
  do {
    t6.y > i15 != t6.next.y > i15 && t6.next.y !== t6.y && r4 < (t6.next.x - t6.x) * (i15 - t6.y) / (t6.next.y - t6.y) + t6.x && (x5 = !x5), t6 = t6.next;
  } while (t6 !== e9);
  return x5;
}
function j(e9, n11) {
  const t6 = q2.create(e9.index, e9.x, e9.y), x5 = q2.create(n11.index, n11.x, n11.y), r4 = e9.next, i15 = n11.prev;
  return e9.next = n11, n11.prev = e9, t6.next = r4, r4.prev = t6, x5.next = t6, t6.prev = x5, i15.next = x5, x5.prev = i15, x5;
}
var q2 = class _q {
  constructor() {
    this.index = 0, this.x = 0, this.y = 0, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = false;
  }
  static create(e9, n11, t6) {
    const x5 = D2 < B2.length ? B2[D2++] : new _q();
    return x5.index = e9, x5.x = n11, x5.y = t6, x5.prev = null, x5.next = null, x5.z = null, x5.prevZ = null, x5.nextZ = null, x5.steiner = false, x5;
  }
};
var B2 = [];
var C3 = 8096;
var D2 = 0;
for (let E3 = 0; E3 < C3; E3++) B2.push(new q2());

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/mesh/templates/templateUtils.js
var i9 = 1e-5;
var f2 = new e4(0, 0, 0, 1, 0);
var c3 = new e4(0, 0, 0, 1, 0);
function u4(t6, e9, n11) {
  let o10 = 0;
  for (let r4 = 1; r4 < n11; r4++) {
    const n12 = t6[2 * (e9 + r4 - 1)], s12 = t6[2 * (e9 + r4 - 1) + 1];
    o10 += (t6[2 * (e9 + r4)] - n12) * (t6[2 * (e9 + r4) + 1] + s12);
  }
  return o10;
}
function h2(t6, e9, n11, o10, r4) {
  let s12 = 0;
  const l6 = 2;
  for (let i15 = n11; i15 < o10; i15 += 3) {
    const n12 = (t6[i15] - r4) * l6, o11 = (t6[i15 + 1] - r4) * l6, f6 = (t6[i15 + 2] - r4) * l6;
    s12 += Math.abs((e9[n12] - e9[f6]) * (e9[o11 + 1] - e9[n12 + 1]) - (e9[n12] - e9[o11]) * (e9[f6 + 1] - e9[n12 + 1]));
  }
  return s12;
}
function a6(t6, e9) {
  const {
    coords: n11,
    lengths: o10,
    hasIndeterminateRingOrder: r4
  } = e9, s12 = 0, f6 = t6;
  if (r4) return false;
  let c8 = 0;
  for (let a9 = 0; a9 < o10.length; ) {
    let t7 = a9, e10 = o10[a9], r5 = u4(n11, c8, e10);
    const g4 = [];
    for (; ++t7 < o10.length; ) {
      const s13 = o10[t7], l6 = u4(n11, c8 + e10, s13);
      if (!(l6 > 0)) break;
      r5 += l6, g4.push(c8 + e10), e10 += s13;
    }
    const p7 = f6.length;
    e5(f6, n11, c8, c8 + e10, g4, 2, s12);
    const m6 = h2(f6, n11, p7, f6.length, s12), d6 = Math.abs(r5);
    if (Math.abs((m6 - d6) / Math.max(1e-7, d6)) > i9) return f6.length = 0, false;
    a9 = t7, c8 += e10;
  }
  return true;
}
function p2(t6) {
  const {
    coords: n11,
    lengths: o10
  } = t6, {
    buffer: r4
  } = a2(n11, o10);
  return r4;
}
function m2(t6, e9, n11) {
  let o10 = 0;
  for (let r4 = 0; r4 < t6.lengths.length; r4++) {
    const s12 = t6.lengths[r4];
    for (let r5 = 0; r5 < s12; r5++) {
      const s13 = t6.coords[2 * (r5 + o10)], l6 = t6.coords[2 * (r5 + o10) + 1];
      if (s13 < e9 || s13 > n11 || l6 < e9 || l6 > n11) return true;
    }
    o10 += s12;
  }
  return false;
}
function d2(t6, e9) {
  if (null == t6) return null;
  if (!m2(t6, -128, a + 128)) return t6;
  f2.setPixelMargin(e9), f2.reset(i3.Polygon);
  let n11 = 0;
  for (let o10 = 0; o10 < t6.lengths.length; o10++) {
    const e10 = t6.lengths[o10];
    let r4 = t6.coords[2 * (0 + n11)], s12 = t6.coords[2 * (0 + n11) + 1];
    f2.moveTo(r4, s12);
    for (let o11 = 1; o11 < e10; o11++) r4 = t6.coords[2 * (o11 + n11)], s12 = t6.coords[2 * (o11 + n11) + 1], f2.lineTo(r4, s12);
    f2.close(), n11 += e10;
  }
  const l6 = f2.result(false);
  if (!l6) return null;
  const i15 = [], c8 = [];
  for (const o10 of l6) {
    let t7 = 0;
    for (const e10 of o10) c8.push(e10.x), c8.push(e10.y), t7++;
    i15.push(t7);
  }
  return new e2(i15, c8);
}
function x2(t6, e9) {
  c3.setPixelMargin(e9);
  const n11 = c3, r4 = -e9, l6 = a + e9;
  let i15 = [], f6 = false;
  if (!t6.nextPath()) return null;
  let u7 = true;
  for (; u7; ) {
    t6.seekPathStart();
    const e10 = [];
    if (!t6.pathSize) return null;
    n11.reset(i3.LineString), t6.nextPoint();
    let s12 = t6.x, c8 = t6.y;
    if (f6) n11.moveTo(s12, c8);
    else {
      if (s12 < r4 || s12 > l6 || c8 < r4 || c8 > l6) {
        f6 = true;
        continue;
      }
      e10.push({
        x: s12,
        y: c8
      });
    }
    let h7 = false;
    for (; t6.nextPoint(); ) if (s12 = t6.x, c8 = t6.y, f6) n11.lineTo(s12, c8);
    else {
      if (s12 < r4 || s12 > l6 || c8 < r4 || c8 > l6) {
        h7 = true;
        break;
      }
      e10.push({
        x: s12,
        y: c8
      });
    }
    if (h7) f6 = true;
    else {
      if (f6) {
        const t7 = n11.resultWithStarts();
        if (t7) for (const e11 of t7) i15.push(e11);
      } else i15.push({
        line: e10,
        start: 0
      });
      u7 = t6.nextPath(), f6 = false;
    }
  }
  return i15 = i15.filter((t7) => t7.line.length > 1), 0 === i15.length ? null : i15;
}
f2.setExtent(a), c3.setExtent(a);

// ../../../node_modules/@arcgis/core/symbols/cim/effects/CIMEffectHelper.js
var n5 = 96 / 72;
var l3 = class {
  static executeEffects(t6, e9, l6, c8) {
    const f6 = n5, m6 = Q(t6);
    let p7 = new s2(e9);
    for (const o10 of t6) {
      const t7 = A2(o10);
      t7 && (p7 = t7.execute(p7, o10, f6, l6, c8, m6));
    }
    return p7;
  }
  static applyEffects(n11, l6, c8) {
    if (!n11) return l6;
    const f6 = Q(n11);
    let m6, p7 = new s2(a3.fromJSONCIM(l6));
    for (const t6 of n11) {
      const e9 = A2(t6);
      e9 && (p7 = e9.execute(p7, t6, 1, null, c8, f6));
    }
    const u7 = [];
    let i15 = null;
    for (; m6 = p7.next(); ) u7.push(...t(m6)), i15 = m6.geometryType;
    return 0 === u7.length || null === i15 ? null : "esriGeometryPolygon" === i15 ? {
      rings: u7
    } : {
      paths: u7
    };
  }
};

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/mesh/loadGeometryEngine.js
var n6 = null;
function t5() {
  return n6;
}
function e6() {
  return __async(this, null, function* () {
    n6 = yield import("./geometryEngineJSON-EW2QOKL3.js");
  });
}

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/mesh/AlignedVertexSpec.js
function e7(t6) {
  switch (t6) {
    case C.BYTE:
    case C.UNSIGNED_BYTE:
      return 1;
    case C.SHORT:
    case C.UNSIGNED_SHORT:
    case C.HALF_FLOAT:
      return 2;
    case C.FLOAT:
    case C.INT:
    case C.UNSIGNED_INT:
      return 4;
  }
}
function o4(t6) {
  const s12 = [], o10 = [], n11 = [];
  for (const i15 of t6) {
    const t7 = e7(i15.type) * i15.count;
    switch (t7 % 2 || t7 % 4 || 4) {
      case 4:
        s12.push(i15);
        continue;
      case 2:
        o10.push(i15);
        continue;
      case 1:
        n11.push(i15);
        continue;
      default:
        throw new Error("Found unexpected dataType byte count");
    }
  }
  return s12.push(...o10), s12.push(...n11), s12;
}
var n7 = class _n {
  static fromVertexSpec(t6, s12) {
    const {
      attributes: i15,
      optionalAttributes: a9
    } = t6;
    let r4, c8, u7;
    const p7 = [];
    for (const e9 in i15) {
      const t7 = i15[e9];
      "position" === t7.pack ? r4 = __spreadProps(__spreadValues({}, t7), {
        name: e9,
        offset: 0
      }) : "id" === t7.pack ? c8 = __spreadProps(__spreadValues({}, t7), {
        name: e9,
        offset: 4
      }) : "bitset" === e9 ? u7 = __spreadProps(__spreadValues({}, t7), {
        name: e9,
        offset: 7
      }) : p7.push(__spreadProps(__spreadValues({}, t7), {
        name: e9
      }));
    }
    for (const e9 in a9) if (true === s12[e9]) {
      const t7 = a9[e9];
      p7.push(__spreadProps(__spreadValues({}, t7), {
        name: e9
      }));
    }
    const h7 = o4(p7), f6 = [];
    let m6 = 8, b4 = 1;
    for (const o10 of h7) f6.push(__spreadProps(__spreadValues({}, o10), {
      offset: m6
    })), m6 += e7(o10.type) * o10.count, o10.packAlternating && (b4 = Math.max(o10.packAlternating.count, b4));
    const d6 = Uint32Array.BYTES_PER_ELEMENT, _4 = m6 % d6;
    return new _n(r4, c8, u7, f6, m6 + (_4 ? d6 - _4 : 0), b4);
  }
  constructor(t6, s12, e9, o10, n11, i15) {
    this.position = t6, this.id = s12, this.bitset = e9, this.standardAttributes = o10, this.stride = n11, this.packVertexCount = i15, o10.push(e9), this._attributes = [t6, s12, e9, ...o10];
  }
  get attributeLayout() {
    if (!this._attributeLayout) {
      const s12 = t2(this._attributes), e9 = this._attributes.map((t6) => ({
        name: t6.name,
        count: t6.count,
        offset: t6.offset,
        type: t6.type,
        packPrecisionFactor: t6.packPrecisionFactor,
        normalized: t6.normalized ?? false
      }));
      this._attributeLayout = {
        attributes: e9,
        hash: s12,
        stride: this.stride
      };
    }
    return this._attributeLayout;
  }
};

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/mesh/MeshWriterVertexPack.js
var i10 = class _i {
  static fromVertexSpec(t6, s12) {
    const c8 = n7.fromVertexSpec(t6, s12);
    return new _i(c8);
  }
  constructor(t6) {
    this._spec = t6, this._packed = new Uint8Array(this._spec.stride * this._spec.packVertexCount), this._packedU32View = new Uint32Array(this._packed.buffer), this._dataView = new DataView(this._packed.buffer);
  }
  get attributeLayout() {
    return this._spec.attributeLayout;
  }
  get stride() {
    return this._spec.stride;
  }
  writeVertex(t6, e9, s12, i15, c8, a9) {
    for (let p7 = 0; p7 < this._spec.packVertexCount; p7++) {
      const t7 = p7 * this._spec.stride;
      this._packPosition(s12, i15, t7), this._packId(e9, t7);
      const r4 = this._spec.bitset;
      if (a9) {
        if (r4.packTessellation) {
          const e10 = r4.packTessellation(a9, c8);
          this._pack(e10, r4, t7);
        }
        for (const e10 of this._spec.standardAttributes) if (null != e10.packTessellation) {
          const s13 = e10.packTessellation(a9, c8);
          this._pack(s13, e10, t7);
        } else if (e10.packAlternating?.packTessellation) {
          const t8 = e10.packAlternating.packTessellation(a9, c8);
          for (let s13 = 0; s13 < this._spec.packVertexCount; s13++) {
            const i16 = t8[s13];
            this._pack(i16, e10, s13 * this._spec.stride);
          }
        }
      }
    }
    t6.vertexWriteRegion(this._packedU32View);
  }
  pack(t6, e9) {
    for (const s12 of this._spec.standardAttributes) if (s12.pack && "string" != typeof s12.pack) {
      const i15 = s12.pack(t6, e9);
      for (let t7 = 0; t7 < this._spec.packVertexCount; t7++) this._pack(i15, s12, t7 * this._spec.stride);
    } else if (s12.packAlternating?.pack) {
      const i15 = s12.packAlternating.pack(t6, e9);
      for (let t7 = 0; t7 < this._spec.packVertexCount; t7++) {
        const e10 = i15[t7];
        this._pack(e10, s12, t7 * this._spec.stride);
      }
    }
  }
  _packPosition(e9, s12, i15) {
    const {
      offset: c8
    } = this._spec.position, a9 = this._spec.position.packPrecisionFactor ?? 1, p7 = s5(e9 * a9, s12 * a9);
    this._dataView.setUint32(i15 + c8, p7, true);
  }
  _packId(t6, e9) {
    const s12 = t6 * (this._spec.id.packPrecisionFactor ?? 1), i15 = 4278190080 & this._dataView.getUint32(e9 + this._spec.id.offset, true);
    this._dataView.setUint32(e9 + this._spec.id.offset, s12 | i15, true);
  }
  _pack(t6, e9, i15) {
    o(this._dataView, t6, e9, i15);
  }
};

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/mesh/MeshWriter.js
function i11(e9) {
  if (!e9) return false;
  for (const t6 of e9) switch (t6.effect.type) {
    case "CIMGeometricEffectBuffer":
    case "CIMGeometricEffectOffset":
    case "CIMGeometricEffectDonut":
      return true;
  }
  return false;
}
var c4 = class {
  constructor(e9, t6, r4, s12) {
    this._instanceId = e9, this._evaluator = t6, this._enabledOptionalAttributes = r4, this._viewParams = s12, this._evaluator.evaluator = (e10) => this.vertexSpec.createComputedParams(e10);
  }
  get _vertexPack() {
    if (!this._cachedVertexPack) {
      const e9 = i10.fromVertexSpec(this.vertexSpec, this._enabledOptionalAttributes);
      this._evaluator.hasDynamicProperties || e9.pack(this._evaluator.evaluatedMeshParams, this._viewParams), this._cachedVertexPack = e9;
    }
    return this._cachedVertexPack;
  }
  get evaluatedMeshParams() {
    return this._evaluator.evaluatedMeshParams;
  }
  get hasEffects() {
    return !!this.evaluatedMeshParams.effects;
  }
  get instanceId() {
    return this._instanceId;
  }
  get attributeLayout() {
    return this._vertexPack.attributeLayout;
  }
  setReferences(e9) {
    this._references = e9;
  }
  getBoundsInfo() {
    return null;
  }
  getTileInfo() {
    return this._viewParams.tileInfo;
  }
  loadDependencies() {
    return __async(this, null, function* () {
      i11(this._evaluator.inputMeshParams.effects?.effectInfos) && (yield e6());
    });
  }
  enqueueRequest(e9, t6, r4) {
    this._evaluator.hasDynamicProperties && this._evaluator.enqueueRequest(e9, t6, r4);
  }
  write(r4, a9, i15, c8, o10) {
    this.ensurePacked(a9, i15, c8);
    const n11 = this.evaluatedMeshParams.effects;
    if (!n11 || 0 === n11.length) return void this._write(r4, i15, void 0, o10);
    const u7 = i15.readGeometryForDisplay()?.clone();
    if (!u7) return;
    const h7 = a3.fromOptimizedCIM(u7, i15.geometryType), f6 = t5();
    h7.invertY();
    const m6 = r4.id || "", l6 = l3.executeEffects(n11, h7, m6, f6);
    let v3;
    for (; v3 = l6.next(); ) v3.invertY(), this._write(r4, i15, v3, o10);
  }
  ensurePacked(e9, t6, r4) {
    if (!this._evaluator.hasDynamicProperties) return;
    const s12 = this._evaluator.evaluateMeshParams(e9, t6, r4);
    this._vertexPack.pack(s12, this._viewParams);
  }
  _writeVertex(e9, t6, r4, s12, a9) {
    const i15 = this.evaluatedMeshParams;
    this._vertexPack.writeVertex(e9, t6, r4, s12, i15, a9);
  }
};

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/fill/AFillMeshWriter.js
var o5 = 100;
var n8 = has("featurelayer-fast-triangulation-enabled");
var a7 = class _a extends c4 {
  loadDependencies() {
    return __async(this, null, function* () {
      yield Promise.all([__superGet(_a.prototype, this, "loadDependencies").call(this), i2()]);
    });
  }
  _write(e9, t6, r4) {
    const s12 = r4?.asOptimized() ?? t6.readGeometryForDisplay(), i15 = this._clip(s12);
    i15 && (e9.recordStart(this.instanceId, this.attributeLayout), this._writeGeometry(e9, t6, i15), e9.recordEnd());
  }
  _clip(e9) {
    if (!e9) return null;
    const r4 = this.hasEffects;
    return d2(e9, r4 ? 256 : 8);
  }
  _writeGeometry(e9, t6, i15) {
    const a9 = i15.maxLength > o5, c8 = [], l6 = this.createTesselationParams(t6);
    if (!a9 && n8 && a6(c8, i15)) return void (c8.length && this._writeVertices(e9, t6, i15.coords, l6, c8));
    const d6 = p2(i15);
    this._writeVertices(e9, t6, d6, l6);
  }
  _writeVertices(e9, t6, r4, s12, i15) {
    const o10 = t6.getDisplayId(), n11 = e9.vertexCount(), a9 = this.hasEffects;
    let c8 = 0;
    if (i15) for (const l6 of i15) {
      const t7 = r4[2 * l6], i16 = r4[2 * l6 + 1];
      a9 && e9.recordBounds(t7, i16, 0, 0), this._writeVertex(e9, o10, t7, i16, s12), c8++;
    }
    else for (let l6 = 0; l6 < r4.length; l6 += 2) {
      const t7 = Math.round(r4[l6]), i16 = Math.round(r4[l6 + 1]);
      a9 && e9.recordBounds(t7, i16, 0, 0), this._writeVertex(e9, o10, t7, i16, s12), c8++;
    }
    e9.indexEnsureSize(c8);
    for (let l6 = 0; l6 < c8; l6++) e9.indexWrite(l6 + n11);
  }
};

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/dotDensity/DotDensityMeshWriter.js
var r2 = {
  createComputedParams: (e9) => e9,
  optionalAttributes: {},
  attributes: {
    id: {
      type: C.UNSIGNED_BYTE,
      count: 3,
      pack: "id"
    },
    bitset: {
      type: C.UNSIGNED_BYTE,
      count: 1
    },
    pos: {
      type: C.SHORT,
      count: 2,
      pack: "position",
      packPrecisionFactor: 10
    },
    inverseArea: {
      type: C.FLOAT,
      count: 1,
      packTessellation: ({
        inverseArea: e9
      }) => e9
    }
  }
};
var s7 = class extends a7 {
  constructor() {
    super(...arguments), this.vertexSpec = r2;
  }
  createTesselationParams(e9) {
    return {
      inverseArea: 1 / e9.readGeometryArea()
    };
  }
};

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/fill/meshWriterUtils.js
var i12 = () => n.getLogger("esri.views.2d.engine.webgl.shaderGraph.techniques.meshWriterUtils");
var u5 = 0;
var a8 = 100;
function m3(r4, e9) {
  return [!!r4?.minScale && e9.scaleToZoom(r4.minScale) || u5, !!r4?.maxScale && e9.scaleToZoom(r4.maxScale) || a8];
}
function f3(r4) {
  return 1 << r4;
}
function l4(r4) {
  let e9 = 0;
  for (const [t6, n11] of r4) n11 && (e9 |= 1 << t6);
  return e9;
}
function g3(t6) {
  let n11;
  if (!t6) return [0, 0, 0, 0];
  if ("string" == typeof t6) {
    const o11 = u2.fromString(t6);
    if (!o11) return i12().errorOnce(new s("mapview:mesh-processing", "Unable to parse string into color", {
      color: t6
    })), [0, 0, 0, 0];
    n11 = o11.toArray();
  } else n11 = t6;
  const [o10, s12, c8, u7] = n11;
  return [o10 * (u7 / 255), s12 * (u7 / 255), c8 * (u7 / 255), u7];
}
function h3(r4) {
  switch (r4) {
    case "butt":
    case U.Butt:
      return e3.BUTT;
    case "round":
    case U.Round:
      return e3.ROUND;
    case "square":
    case U.Square:
      return e3.SQUARE;
  }
}
function p3(r4) {
  switch (r4) {
    case "bevel":
    case w.Bevel:
      return n2.BEVEL;
    case "miter":
    case w.Miter:
      return n2.MITER;
    case "round":
    case w.Round:
      return n2.ROUND;
  }
}
function d3(r4, e9) {
  return Math.round(Math.min(Math.sqrt(r4 * e9), 255));
}
function S3(r4, e9) {
  return Math.round(r4 * e9) / e9;
}

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/fill/FillMeshWriter.js
var i13 = {
  createComputedParams: (t6) => t6,
  optionalAttributes: {
    zoomRange: {
      type: C.SHORT,
      count: 2,
      packPrecisionFactor: rt,
      pack: ({
        scaleInfo: t6
      }, {
        tileInfo: o10
      }) => m3(t6, o10)
    }
  },
  attributes: {
    id: {
      type: C.UNSIGNED_BYTE,
      count: 3,
      pack: "id"
    },
    bitset: {
      type: C.UNSIGNED_BYTE,
      count: 1
    },
    pos: {
      type: C.SHORT,
      count: 2,
      pack: "position",
      packPrecisionFactor: 10
    },
    color: {
      type: C.UNSIGNED_BYTE,
      count: 4,
      normalized: true,
      pack: ({
        color: t6
      }) => g3(t6)
    }
  }
};
var c5 = class extends a7 {
  constructor() {
    super(...arguments), this.vertexSpec = i13;
  }
  createTesselationParams(t6) {
    return null;
  }
};

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/fill/PatternFillMeshWriter.js
var s8 = {
  createComputedParams: (t6) => t6,
  optionalAttributes: i13.optionalAttributes,
  attributes: __spreadProps(__spreadValues({}, i13.attributes), {
    tlbr: {
      count: 4,
      type: C.UNSIGNED_SHORT,
      pack: ({
        sprite: e9
      }) => {
        const {
          rect: r4,
          width: i15,
          height: s12
        } = e9, o10 = r4.x + tt, a9 = r4.y + tt;
        return [o10, a9, o10 + i15, a9 + s12];
      }
    },
    inverseRasterizationScale: {
      count: 1,
      type: C.BYTE,
      packPrecisionFactor: 16,
      pack: ({
        sprite: t6
      }) => 1 / t6.rasterizationScale
    }
  })
};
var o6 = class extends c5 {
  constructor() {
    super(...arguments), this.vertexSpec = s8;
  }
  _write(t6, e9, r4) {
    const i15 = r4?.asOptimized() ?? e9.readGeometryForDisplay(), s12 = this._clip(i15);
    if (!s12) return;
    const o10 = this.evaluatedMeshParams.sprite?.textureBinding;
    t6.recordStart(this.instanceId, this.attributeLayout, o10), this._writeGeometry(t6, e9, s12), t6.recordEnd();
  }
};

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/fill/ComplexFillMeshWriter.js
function p4(e9) {
  const {
    sprite: o10,
    aspectRatio: s12,
    scaleProportionally: r4
  } = e9, i15 = u(e9.height), c8 = i15 > 0 ? i15 : o10.height;
  let a9 = i15 * s12;
  return a9 <= 0 ? a9 = o10.width : r4 && (a9 *= o10.width / o10.height), {
    width: a9,
    height: c8
  };
}
function n9(t6) {
  const {
    applyRandomOffset: e9,
    sampleAlphaOnly: s12
  } = t6;
  return l4([[C2, e9], [q, s12]]);
}
var l5 = {
  createComputedParams: (t6) => t6,
  optionalAttributes: s8.optionalAttributes,
  attributes: __spreadProps(__spreadValues({}, s8.attributes), {
    bitset: {
      count: 1,
      type: C.UNSIGNED_BYTE,
      pack: n9
    },
    width: {
      count: 1,
      type: C.HALF_FLOAT,
      pack: (t6) => p4(t6).width
    },
    height: {
      count: 1,
      type: C.HALF_FLOAT,
      pack: (t6) => p4(t6).height
    },
    offset: {
      count: 2,
      type: C.HALF_FLOAT,
      pack: ({
        offsetX: e9,
        offsetY: o10
      }) => [u(e9), -u(o10)]
    },
    scale: {
      count: 2,
      type: C.UNSIGNED_BYTE,
      packPrecisionFactor: 16,
      pack: ({
        scaleX: t6,
        scaleY: e9
      }) => [t6, e9]
    },
    angle: {
      count: 1,
      type: C.UNSIGNED_BYTE,
      pack: ({
        angle: t6
      }) => l(t6)
    }
  })
};
var h4 = class extends o6 {
  constructor() {
    super(...arguments), this.vertexSpec = l5;
  }
};

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/line/LineMeshWriter.js
var d4 = class {
  constructor() {
    this.extrusionOffsetX = 0, this.extrusionOffsetY = 0, this.normalX = 0, this.normalY = 0, this.directionX = 0, this.directionY = 0, this.distance = 0;
  }
};
var f4 = {
  createComputedParams: (t6) => t6,
  optionalAttributes: {
    zoomRange: {
      type: C.SHORT,
      count: 2,
      packPrecisionFactor: rt,
      pack: ({
        scaleInfo: t6
      }, {
        tileInfo: e9
      }) => m3(t6, e9)
    }
  },
  attributes: {
    id: {
      type: C.UNSIGNED_BYTE,
      count: 3,
      pack: "id"
    },
    pos: {
      type: C.SHORT,
      count: 2,
      pack: "position",
      packPrecisionFactor: 10
    },
    bitset: {
      type: C.UNSIGNED_BYTE,
      count: 1
    },
    color: {
      type: C.UNSIGNED_BYTE,
      count: 4,
      normalized: true,
      pack: ({
        color: t6
      }) => g3(t6)
    },
    offset: {
      type: C.BYTE,
      count: 2,
      packPrecisionFactor: 16,
      packTessellation: ({
        extrusionOffsetX: t6,
        extrusionOffsetY: e9
      }) => [S3(t6, 16), S3(e9, 16)]
    },
    normal: {
      type: C.BYTE,
      count: 2,
      packPrecisionFactor: 16,
      packTessellation: ({
        normalX: t6,
        normalY: e9
      }) => [S3(t6, 16), S3(e9, 16)]
    },
    halfWidth: {
      type: C.HALF_FLOAT,
      count: 1,
      pack: ({
        width: e9
      }) => u(0.5 * e9)
    },
    referenceHalfWidth: {
      type: C.HALF_FLOAT,
      count: 1,
      pack: ({
        referenceWidth: e9
      }) => u(0.5 * e9)
    }
  }
};
var _ = class {
  constructor() {
    this.id = 0, this.bitset = 0, this.indexCount = 0, this.vertexCount = 0, this.vertexFrom = 0, this.vertexBounds = 0;
  }
};
var x3 = 65535;
var T = class extends c4 {
  constructor(t6, e9, s12, i15) {
    super(t6, e9, s12, i15), this.vertexSpec = f4, this._currentWrite = new _(), this._tessellationOptions = {
      halfWidth: 0,
      pixelCoordRatio: 1,
      offset: 0,
      wrapDistance: x3,
      textured: false
    }, this._tessParams = new d4(), this._initializeTessellator();
  }
  writeLineVertices(t6, e9, s12) {
    const i15 = this._getLines(e9);
    null != i15 && this._writeVertices(t6, s12, i15);
  }
  _initializeTessellator() {
    this._lineTessellator = new c(this._writeTesselatedVertex.bind(this), this._writeTriangle.bind(this), true);
  }
  _write(t6, s12, i15) {
    const r4 = i15 ?? a3.fromFeatureSetReaderCIM(s12);
    r4 && this._writeGeometry(t6, s12, r4);
  }
  _writeGeometry(t6, e9, s12, i15) {
    t6.recordStart(this.instanceId, this.attributeLayout, i15), this.writeLineVertices(t6, s12, e9), t6.recordEnd();
  }
  _getLines(t6) {
    return x2(t6, i6(this.evaluatedMeshParams));
  }
  _writeVertices(e9, s12, r4) {
    const {
      _currentWrite: o10,
      _tessellationOptions: n11,
      evaluatedMeshParams: a9
    } = this, {
      width: c8,
      capType: m6,
      joinType: u7,
      miterLimit: p7,
      hasSizeVV: d6
    } = a9, f6 = u(0.5 * c8);
    n11.halfWidth = f6, n11.capType = h3(m6), n11.joinType = p3(u7), n11.miterLimit = p7;
    const _4 = !d6;
    o10.out = e9, o10.id = s12.getDisplayId(), o10.vertexCount = 0, o10.indexCount = 0, o10.vertexFrom = e9.vertexCount(), o10.vertexBounds = _4 && f6 < R ? 0 : 1;
    for (const {
      line: t6,
      start: i15
    } of r4) n11.initialDistance = i15 % x3, this._lineTessellator.tessellate(t6, n11, _4);
  }
  _writeTesselatedVertex(t6, e9, s12, i15, r4, o10, n11, a9, c8, h7, l6) {
    const {
      out: m6,
      id: u7,
      vertexBounds: p7
    } = this._currentWrite;
    return this.hasEffects && m6.recordBounds(t6, e9, p7, p7), this._tessParams.extrusionOffsetX = n11, this._tessParams.extrusionOffsetY = a9, this._tessParams.normalX = c8, this._tessParams.normalY = h7, this._tessParams.directionX = r4, this._tessParams.directionY = o10, this._tessParams.distance = l6, this._writeVertex(m6, u7, t6, e9, this._tessParams), this._currentWrite.vertexFrom + this._currentWrite.vertexCount++;
  }
  _writeTriangle(t6, e9, s12) {
    const {
      out: i15
    } = this._currentWrite;
    i15.indexEnsureSize(3), i15.indexWrite(t6), i15.indexWrite(e9), i15.indexWrite(s12), this._currentWrite.indexCount += 3;
  }
};

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/fill/OutlineFillMeshWriter.js
var p5 = {
  createComputedParams: (e9) => e9,
  optionalAttributes: f4.optionalAttributes,
  attributes: __spreadProps(__spreadValues({}, f4.attributes), {
    bitset: {
      type: C.UNSIGNED_BYTE,
      count: 1,
      pack: (e9) => 0
    },
    color: {
      type: C.UNSIGNED_BYTE,
      count: 4,
      normalized: true,
      pack: ({
        color: e9
      }) => g3(e9)
    }
  })
};
var c6 = {
  createComputedParams: (e9) => e9,
  optionalAttributes: f4.optionalAttributes,
  attributes: __spreadProps(__spreadValues({}, f4.attributes), {
    bitset: {
      type: C.UNSIGNED_BYTE,
      count: 1,
      pack: (e9) => l4([[B, true]])
    },
    color: {
      type: C.UNSIGNED_BYTE,
      count: 4,
      normalized: true,
      pack: ({
        outlineColor: e9
      }) => g3(e9)
    }
  })
};
var m4 = class extends T {
  constructor() {
    super(...arguments), this.vertexSpec = c6;
  }
};
var h5 = class _h extends c5 {
  constructor(e9, t6, r4, s12) {
    super(e9, t6, r4, s12), this.vertexSpec = p5, this._lineMeshWriter = this._createOutlineWriter(e9, t6, r4, s12);
  }
  _createOutlineWriter(e9, t6, r4, s12) {
    return new m4(e9, t6, r4, s12);
  }
  _write(t6, r4, s12) {
    const i15 = s12?.asOptimized() ?? r4.readGeometryForDisplay(), o10 = this._clip(i15);
    o10 && (t6.recordStart(this.instanceId, this.attributeLayout), this._writeGeometry(t6, r4, o10), this._lineMeshWriter.writeLineVertices(t6, a3.fromOptimizedCIM(o10, "esriGeometryPolyline"), r4), t6.recordEnd());
  }
  _clip(e9) {
    return e9 ? d2(e9, i6(this.evaluatedMeshParams)) : null;
  }
  ensurePacked(e9, t6, r4) {
    super.ensurePacked(e9, t6, r4), this._lineMeshWriter.ensurePacked(e9, t6, r4);
  }
  enqueueRequest(e9, t6, r4) {
    super.enqueueRequest(e9, t6, r4), this._lineMeshWriter.enqueueRequest(e9, t6, r4);
  }
  loadDependencies() {
    return __async(this, null, function* () {
      yield Promise.all([__superGet(_h.prototype, this, "loadDependencies").call(this), this._lineMeshWriter.loadDependencies()]);
    });
  }
};

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/fill/ComplexOutlineFillMeshWriter.js
var d5 = l5;
var h6 = c6;
var f5 = {
  createComputedParams: (e9) => e9,
  optionalAttributes: d5.optionalAttributes,
  attributes: __spreadProps(__spreadValues({}, d5.attributes), {
    bitset: {
      type: C.UNSIGNED_BYTE,
      count: 1,
      pack: (e9) => n9(e9)
    },
    aux1: {
      count: 1,
      type: C.HALF_FLOAT,
      pack: (e9) => p4(e9).width
    },
    aux2: {
      count: 1,
      type: C.HALF_FLOAT,
      pack: (e9) => p4(e9).height
    },
    aux3: {
      count: 2,
      type: C.HALF_FLOAT,
      pack: ({
        offsetX: t6,
        offsetY: r4
      }) => [u(t6), u(r4)]
    },
    aux4: {
      count: 2,
      type: C.UNSIGNED_BYTE,
      pack: ({
        scaleX: e9,
        scaleY: t6
      }) => [e9 * S2, t6 * S2]
    }
  })
};
var y2 = {
  createComputedParams: (e9) => e9,
  optionalAttributes: d5.optionalAttributes,
  attributes: __spreadProps(__spreadValues({}, d5.attributes), {
    color: h6.attributes.color,
    bitset: {
      type: C.UNSIGNED_BYTE,
      count: 1,
      pack: (e9) => l4([[B, true]])
    },
    aux1: {
      count: 1,
      type: C.HALF_FLOAT,
      pack: (t6) => u(0.5 * t6.width)
    },
    aux2: {
      count: 1,
      type: C.HALF_FLOAT,
      pack: (t6) => u(0.5 * t6.referenceWidth)
    },
    aux3: {
      count: 2,
      type: C.HALF_FLOAT,
      packTessellation: ({
        extrusionOffsetX: e9,
        extrusionOffsetY: t6
      }) => [e9, t6]
    },
    aux4: {
      count: 2,
      type: C.UNSIGNED_BYTE,
      packTessellation: ({
        normalX: e9,
        normalY: t6
      }) => [e9 * S2 + w2, t6 * S2 + w2]
    }
  })
};
var x4 = class extends m4 {
  constructor() {
    super(...arguments), this.vertexSpec = y2;
  }
};
var _2 = class __ extends h5 {
  constructor() {
    super(...arguments), this.vertexSpec = f5;
  }
  _createOutlineWriter(e9, t6, r4, s12) {
    return new x4(e9, t6, r4, s12);
  }
  _write(e9, r4, s12) {
    const i15 = s12?.asOptimized() ?? r4.readGeometryForDisplay(), o10 = this._clip(i15);
    if (!o10) return;
    const a9 = this.evaluatedMeshParams.sprite?.textureBinding;
    e9.recordStart(this.instanceId, this.attributeLayout, a9), this._writeGeometry(e9, r4, o10), this._lineMeshWriter.writeLineVertices(e9, a3.fromOptimizedCIM(o10, "esriGeometryPolyline"), r4), e9.recordEnd();
  }
  ensurePacked(e9, t6, r4) {
    super.ensurePacked(e9, t6, r4), this._lineMeshWriter.ensurePacked(e9, t6, r4);
  }
  enqueueRequest(e9, t6, r4) {
    super.enqueueRequest(e9, t6, r4), this._lineMeshWriter.enqueueRequest(e9, t6, r4);
  }
  loadDependencies() {
    return __async(this, null, function* () {
      yield Promise.all([__superGet(__.prototype, this, "loadDependencies").call(this), this._lineMeshWriter.loadDependencies()]);
    });
  }
};

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/fill/PatternOutlineFillMeshWriter.js
var n10 = {
  optionalAttributes: s8.optionalAttributes,
  createComputedParams: (e9) => e9,
  attributes: __spreadValues(__spreadValues({}, s8.attributes), p5.attributes)
};
var o7 = {
  optionalAttributes: s8.optionalAttributes,
  createComputedParams: (e9) => e9,
  attributes: __spreadValues(__spreadValues({}, s8.attributes), c6.attributes)
};
var u6 = class extends m4 {
  constructor() {
    super(...arguments), this.vertexSpec = o7;
  }
};
var c7 = class _c extends h5 {
  constructor() {
    super(...arguments), this.vertexSpec = n10;
  }
  _createOutlineWriter(e9, t6, r4, s12) {
    return new u6(e9, t6, r4, s12);
  }
  _write(t6, r4, s12) {
    const i15 = s12?.asOptimized() ?? r4.readGeometryForDisplay(), a9 = this._clip(i15);
    if (!a9) return;
    const n11 = this.evaluatedMeshParams.sprite?.textureBinding;
    t6.recordStart(this.instanceId, this.attributeLayout, n11), this._writeGeometry(t6, r4, a9), this._lineMeshWriter.writeLineVertices(t6, a3.fromOptimizedCIM(a9, "esriGeometryPolyline"), r4), t6.recordEnd();
  }
  ensurePacked(e9, t6, r4) {
    super.ensurePacked(e9, t6, r4), this._lineMeshWriter.ensurePacked(e9, t6, r4);
  }
  enqueueRequest(e9, t6, r4) {
    super.enqueueRequest(e9, t6, r4), this._lineMeshWriter.enqueueRequest(e9, t6, r4);
  }
  loadDependencies() {
    return __async(this, null, function* () {
      yield Promise.all([__superGet(_c.prototype, this, "loadDependencies").call(this), this._lineMeshWriter.loadDependencies()]);
    });
  }
};

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/heatmap/HeatmapMeshWriter.js
var r3 = {
  createComputedParams: (t6) => t6,
  optionalAttributes: {},
  attributes: {
    pos: {
      type: C.SHORT,
      count: 2,
      pack: "position",
      packPrecisionFactor: 10
    },
    id: {
      type: C.UNSIGNED_BYTE,
      count: 3,
      pack: "id"
    },
    bitset: {
      type: C.UNSIGNED_BYTE,
      count: 1
    },
    offset: {
      type: C.BYTE,
      count: 2,
      packAlternating: {
        count: 4,
        pack: () => [[-1, -1], [1, -1], [-1, 1], [1, 1]]
      }
    }
  }
};
var i14 = class extends c4 {
  constructor() {
    super(...arguments), this.vertexSpec = r3;
  }
  _write(t6, e9) {
    t6.recordStart(this.instanceId, this.attributeLayout);
    const r4 = e9.getDisplayId();
    if ("esriGeometryPoint" === e9.geometryType) {
      const i15 = e9.readXForDisplay(), o10 = e9.readYForDisplay();
      this._writeQuad(t6, r4, i15, o10);
    } else if ("esriGeometryMultipoint" === e9.geometryType) {
      const i15 = e9.readGeometryForDisplay();
      i15?.forEachVertex((e10, i16) => {
        e10 >= 0 && e10 <= 512 && i16 >= 0 && i16 <= 512 && this._writeQuad(t6, r4, e10, i16);
      });
    }
    t6.recordEnd();
  }
  _writeQuad(t6, e9, r4, i15) {
    const o10 = t6.vertexCount();
    this._writeVertex(t6, e9, r4, i15), t6.indexWrite(o10 + 0), t6.indexWrite(o10 + 1), t6.indexWrite(o10 + 2), t6.indexWrite(o10 + 1), t6.indexWrite(o10 + 3), t6.indexWrite(o10 + 2);
  }
};

// ../../../node_modules/@arcgis/core/symbols/cim/placements/CIMMarkerPlacementHelper.js
var e8 = class {
  static getPlacement(e9, r4, n11, s12, c8, o10) {
    const a9 = g(n11);
    if (!a9) return null;
    -1 === r4 && e9.invertY();
    return a9.execute(e9, n11, s12, c8, o10);
  }
};

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/text/TextParams.js
var s9 = 96;
var o8 = class {
  constructor(o10) {
    const {
      offsetX: f6,
      offsetY: i15,
      postAngle: e9,
      fontSize: n11,
      scaleFactor: h7,
      transforms: r4
    } = o10;
    if (this.offsetX = f6, this.offsetY = i15, this.postAngle = e9, this.fontSize = Math.min(n11, s9), this.transforms = r4, r4 && r4.infos.length > 1) {
      const o11 = z(n11, e9, false, f6, i15, r4);
      this.fontSize = Math.min(o11.size, s9), this.postAngle = o11.rotation, this.offsetX = o11.offsetX, this.offsetY = o11.offsetY;
    }
    h7 && (this.fontSize *= h7, this.offsetX *= h7, this.offsetY *= h7);
  }
};

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/text/TextMeshWriter.js
var S4 = 28;
var b2 = [4, 4];
var k2 = [16, 4];
var T2 = {
  topLeft: k2,
  topRight: k2,
  bottomLeft: k2,
  bottomRight: k2
};
var B3 = [4, 2];
var R2 = [4, 6];
var w4 = {
  topLeft: B3,
  topRight: B3,
  bottomLeft: R2,
  bottomRight: R2
};
var M2 = {
  topLeft: B3,
  topRight: R2,
  bottomLeft: B3,
  bottomRight: R2
};
var z3 = {
  topLeft: R2,
  topRight: R2,
  bottomLeft: b2,
  bottomRight: b2
};
var L = {
  topLeft: b2,
  topRight: b2,
  bottomLeft: R2,
  bottomRight: R2
};
var I = {
  topLeft: R2,
  topRight: b2,
  bottomLeft: R2,
  bottomRight: b2
};
var E2 = {
  topLeft: b2,
  topRight: R2,
  bottomLeft: b2,
  bottomRight: R2
};
var G = {
  createComputedParams: (t6) => t6,
  optionalAttributes: {
    zoomRange: {
      type: C.UNSIGNED_SHORT,
      count: 2,
      packPrecisionFactor: rt,
      packTessellation: ({
        minZoom: t6,
        maxZoom: e9
      }) => [t6 || 0, e9 || S4]
    },
    clipAngle: {
      type: C.UNSIGNED_BYTE,
      count: 1,
      packTessellation: ({
        clipAngle: t6
      }) => A4(t6 || 0)
    },
    referenceSymbol: {
      type: C.BYTE,
      count: 4,
      packPrecisionFactor: 1,
      packTessellation: (t6, o10) => {
        if (!t6.referenceBounds) return [0, 0, 0, 0];
        const r4 = s4(o10.horizontalAlignment), n11 = i5(o10.verticalAlignment), {
          offsetX: a9,
          offsetY: c8,
          size: l6
        } = t6.referenceBounds;
        return [u(a9), -u(c8), u(l6), r4 + 1 << 2 | n11 + 1];
      }
    }
  },
  attributes: {
    pos: {
      type: C.SHORT,
      count: 2,
      pack: "position",
      packPrecisionFactor: 10
    },
    id: {
      type: C.UNSIGNED_BYTE,
      count: 3,
      pack: "id"
    },
    bitset: {
      type: C.UNSIGNED_BYTE,
      count: 1,
      packTessellation: ({
        isBackground: t6,
        mapAligned: e9
      }) => l4([[F, t6], [H, !!e9]])
    },
    offset: {
      type: C.SHORT,
      count: 2,
      packPrecisionFactor: 8,
      packAlternating: {
        count: 4,
        packTessellation: ({
          offsets: t6
        }) => {
          const {
            bottomLeft: e9,
            bottomRight: o10,
            topLeft: r4,
            topRight: i15
          } = t6;
          return [r4, i15, e9, o10];
        }
      }
    },
    textureUV: {
      type: C.SHORT,
      count: 2,
      packPrecisionFactor: 4,
      packAlternating: {
        count: 4,
        packTessellation: ({
          texcoords: t6
        }) => {
          const {
            bottomLeft: e9,
            bottomRight: o10,
            topLeft: r4,
            topRight: i15
          } = t6;
          return [r4, i15, e9, o10];
        }
      }
    },
    color: {
      type: C.UNSIGNED_BYTE,
      count: 4,
      normalized: true,
      packTessellation: ({
        color: t6
      }) => t6
    },
    fontSize: {
      type: C.UNSIGNED_SHORT,
      count: 1,
      packPrecisionFactor: 4,
      packTessellation: ({
        fontSize: t6
      }) => u(t6)
    },
    referenceSize: {
      type: C.UNSIGNED_BYTE,
      count: 1,
      packPrecisionFactor: 4,
      packTessellation: ({
        fontSize: t6
      }, {
        referenceSize: o10
      }) => u(o10 ?? t6)
    },
    haloColor: {
      type: C.UNSIGNED_BYTE,
      count: 4,
      normalized: true,
      pack: ({
        haloColor: t6
      }) => g3(t6)
    },
    haloFontSize: {
      type: C.UNSIGNED_SHORT,
      count: 1,
      packPrecisionFactor: 4,
      pack: ({
        haloFontSize: t6
      }) => u(t6)
    }
  }
};
var N = class extends c4 {
  constructor() {
    super(...arguments), this.vertexSpec = G, this._textMeshParamsPropsInitialized = false;
  }
  ensurePacked(t6, e9, o10) {
    super.ensurePacked(t6, e9, o10), this._textMeshParamsPropsInitialized && !this._evaluator.hasDynamicProperties || (this._textMeshTransformProps = new o8(this.evaluatedMeshParams), this._textMeshParamsPropsInitialized = true);
  }
  _write(t6, e9, o10) {
    const r4 = this._getShaping();
    if (!r4) return;
    const i15 = e9.getDisplayId();
    if (null != this.evaluatedMeshParams.placement) return this._writePlacedTextMarkers(t6, e9, r4, o10);
    if (o10?.nextPath()) return o10.nextPoint(), this._writeGlyphs(t6, i15, o10.x, o10.y, r4, 0);
    if ("esriGeometryPolygon" === e9.geometryType) {
      const o11 = e9.readCentroidForDisplay();
      if (!o11) return;
      const [s13, n12] = o11.coords;
      return this._writeGlyphs(t6, i15, s13, n12, r4, 0);
    }
    if ("esriGeometryMultipoint" === e9.geometryType) {
      const o11 = e9.readGeometryForDisplay();
      return void o11?.forEachVertex((e10, o12) => this._writeGlyphs(t6, i15, e10, o12, r4, 0));
    }
    const s12 = e9.readXForDisplay(), n11 = e9.readYForDisplay();
    return this._writeGlyphs(t6, i15, s12, n11, r4, 0);
  }
  _writePlacedTextMarkers(t6, i15, s12, n11) {
    const a9 = n11 ?? a3.fromFeatureSetReaderCIM(i15);
    if (!a9) return;
    const c8 = -1, l6 = e8.getPlacement(a9, c8, this.evaluatedMeshParams.placement, u(1), t6.id, t5());
    if (!l6) return;
    const f6 = i15.getDisplayId();
    let h7 = l6.next();
    for (; null != h7; ) {
      const e9 = h7.tx, o10 = -h7.ty, r4 = -h7.getAngle();
      this._writeGlyphs(t6, f6, e9, o10, s12, r4), h7 = l6.next();
    }
  }
  _getShaping(o10) {
    const r4 = this._textMeshTransformProps, i15 = this.evaluatedMeshParams;
    if (!i15.glyphs?.glyphs.length) return null;
    const s12 = Math.round(u(r4.fontSize)), n11 = u(r4.offsetX), p7 = u(r4.offsetY), m6 = e(u(i15.lineWidth), zt, Bt), d6 = V * e(i15.lineHeightRatio, 0.25, 4);
    return O(i15.glyphs, {
      scale: s12 / A,
      angle: r4.postAngle,
      xOffset: n11,
      yOffset: p7,
      horizontalAlignment: i15.horizontalAlignment,
      verticalAlignment: o10 || i15.verticalAlignment,
      maxLineWidth: m6,
      lineHeight: d6,
      decoration: i15.decoration,
      borderLineSizePx: u(i15.boxBorderLineSize),
      hasBackground: !!i15.boxBackgroundColor,
      useCIMAngleBehavior: i15.useCIMAngleBehavior
    });
  }
  _writeGlyphs(t6, o10, r4, i15, s12, n11, a9, c8) {
    const l6 = this.evaluatedMeshParams, f6 = this._textMeshTransformProps, h7 = f6.fontSize, p7 = u(f6.offsetX), u7 = u(f6.offsetY), [g4, x5] = m3(l6.scaleInfo, this.getTileInfo());
    0 !== n11 && s12.setRotation(n11);
    const y3 = s12.bounds, _4 = r4 + y3.x + p7, P = i15 + y3.y - u7, S6 = 2 * (l6.minPixelBuffer ? l6.minPixelBuffer / h7 : 1), b4 = Math.max(y3.width, y3.height) * S6;
    s12.textBox && (t6.recordStart(this.instanceId, this.attributeLayout, s12.glyphs[0].textureBinding), t6.recordBounds(_4, P, b4, b4), this._writeTextBox(t6, o10, r4, i15, s12.textBox, a9, c8), t6.recordEnd());
    for (const e9 of s12.glyphs) {
      t6.recordStart(this.instanceId, this.attributeLayout, e9.textureBinding), t6.recordBounds(_4, P, b4, b4);
      const {
        texcoords: s13,
        offsets: n12
      } = e9;
      this._writeQuad(t6, o10, r4, i15, __spreadValues({
        texcoords: s13,
        offsets: n12,
        fontSize: h7,
        color: g3(l6.color),
        isBackground: false,
        referenceBounds: a9,
        minZoom: g4,
        maxZoom: x5
      }, c8)), t6.recordEnd();
    }
    0 !== n11 && s12.setRotation(-n11);
  }
  _writeTextBox(t6, e9, o10, r4, i15, s12, n11) {
    const a9 = this.evaluatedMeshParams, {
      fontSize: c8
    } = this._textMeshTransformProps, {
      boxBackgroundColor: l6,
      boxBorderLineColor: f6
    } = a9, h7 = __spreadValues({
      isBackground: true,
      fontSize: c8,
      referenceBounds: s12
    }, n11);
    l6 && (this._writeQuad(t6, e9, o10, r4, __spreadValues({
      texcoords: T2,
      offsets: i15.main,
      color: g3(l6)
    }, h7)), f6 || (this._writeQuad(t6, e9, o10, r4, __spreadValues({
      texcoords: z3,
      offsets: i15.top,
      color: g3(l6)
    }, h7)), this._writeQuad(t6, e9, o10, r4, __spreadValues({
      texcoords: L,
      offsets: i15.bot,
      color: g3(l6)
    }, h7)), this._writeQuad(t6, e9, o10, r4, __spreadValues({
      texcoords: I,
      offsets: i15.left,
      color: g3(l6)
    }, h7)), this._writeQuad(t6, e9, o10, r4, __spreadValues({
      texcoords: E2,
      offsets: i15.right,
      color: g3(l6)
    }, h7)))), f6 && (this._writeQuad(t6, e9, o10, r4, __spreadValues({
      texcoords: w4,
      offsets: i15.top,
      color: g3(f6)
    }, h7)), this._writeQuad(t6, e9, o10, r4, __spreadValues({
      texcoords: w4,
      offsets: i15.bot,
      color: g3(f6)
    }, h7)), this._writeQuad(t6, e9, o10, r4, __spreadValues({
      texcoords: M2,
      offsets: i15.left,
      color: g3(f6)
    }, h7)), this._writeQuad(t6, e9, o10, r4, __spreadValues({
      texcoords: M2,
      offsets: i15.right,
      color: g3(f6)
    }, h7)));
  }
  _writeQuad(t6, e9, o10, r4, i15) {
    const s12 = t6.vertexCount();
    this._writeVertex(t6, e9, o10, r4, i15), t6.indexWrite(s12 + 0), t6.indexWrite(s12 + 1), t6.indexWrite(s12 + 2), t6.indexWrite(s12 + 1), t6.indexWrite(s12 + 3), t6.indexWrite(s12 + 2);
  }
};
var A4 = (t6) => Math.round(t6 * (254 / 360));

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/line/TexturedLineMeshWriter.js
var p6 = {
  createComputedParams: (t6) => t6,
  optionalAttributes: f4.optionalAttributes,
  attributes: __spreadProps(__spreadValues({}, f4.attributes), {
    bitset: {
      type: C.UNSIGNED_BYTE,
      count: 1,
      pack: ({
        shouldSampleAlphaOnly: t6,
        shouldScaleDash: e9,
        isSDF: s12
      }) => l4([[q, t6], [D, e9], [E, s12]])
    },
    tlbr: {
      type: C.UNSIGNED_SHORT,
      count: 4,
      pack: ({
        sprite: t6
      }) => {
        const {
          rect: r4,
          width: s12,
          height: i15
        } = t6, o10 = r4.x + tt, n11 = r4.y + tt;
        return [o10, n11, o10 + s12, n11 + i15];
      }
    },
    accumulatedDistance: {
      type: C.UNSIGNED_SHORT,
      count: 1,
      packTessellation: ({
        distance: t6
      }) => t6
    },
    segmentDirection: {
      type: C.BYTE,
      count: 2,
      packPrecisionFactor: 16,
      packTessellation: ({
        directionX: t6,
        directionY: e9
      }) => [t6, e9]
    }
  })
};
var m5 = class extends T {
  constructor(t6, e9, r4, s12) {
    super(t6, e9, r4, s12), this.vertexSpec = p6, this._tessellationOptions.textured = true;
  }
  _write(e9, r4, s12) {
    const i15 = s12 ?? a3.fromFeatureSetReaderCIM(r4);
    if (!i15) return;
    const {
      sprite: o10
    } = this.evaluatedMeshParams;
    this._writeGeometry(e9, r4, i15, o10?.textureBinding);
  }
};

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/markers/ComputedMarkerParams.js
var s10 = class _s {
  static from(t6) {
    return "width" in t6 ? this.fromSimpleMeshParams(t6) : this.fromComplexMeshParams(t6);
  }
  static fromSimpleMeshParams(e9) {
    const i15 = new _s(e9.sprite, e9.color, e9.outlineColor, e9.minPixelBuffer, e9.placement, e9.scaleInfo, e9.effects), {
      type: o10,
      width: h7,
      height: r4,
      angle: n11,
      alignment: a9,
      outlineSize: c8,
      referenceSize: l6,
      sprite: m6,
      overrideOutlineColor: f6
    } = e9;
    i15.rawWidth = u(h7), i15.rawHeight = u(r4), i15.angle = n11, i15.alignment = a9, i15.outlineSize = u(c8), i15.referenceSize = u(l6), i15.overrideOutlineColor = f6, i15.offsetX = u(e9.offsetX), i15.offsetY = u(e9.offsetY), "simple" !== o10 || m6.sdf || (i15.rawWidth = m6.width, i15.rawHeight = m6.height);
    const d6 = 2;
    return i15.sizeRatio = m6.sdf ? d6 : 1, i15._computeSize(e9, false), i15;
  }
  static fromComplexMeshParams(e9) {
    const o10 = new _s(e9.sprite, e9.color, e9.outlineColor, e9.minPixelBuffer, e9.placement, e9.scaleInfo, e9.effects);
    let {
      alignment: h7,
      transforms: r4,
      size: n11,
      scaleX: a9,
      anchorX: c8,
      anchorY: l6,
      angle: m6,
      colorLocked: f6,
      frameHeight: d6,
      widthRatio: u7,
      offsetX: p7,
      offsetY: g4,
      outlineSize: x5,
      referenceSize: w5,
      scaleFactor: z4,
      sizeRatio: S6,
      isAbsoluteAnchorPoint: X,
      rotateClockwise: Y,
      scaleSymbolsProportionally: H2,
      sprite: M4
    } = e9;
    if (r4 && r4.infos.length > 0) {
      const t6 = z(n11, m6, Y, p7, g4, r4);
      n11 = t6.size, m6 = t6.rotation, p7 = t6.offsetX, g4 = t6.offsetY, Y = false;
    }
    z4 && (n11 *= z4, p7 *= z4, g4 *= z4);
    const C4 = a9 * (M4.width / M4.height);
    o10.alignment = h7, o10.rawHeight = u(n11), o10.rawWidth = o10.rawHeight * C4, o10.referenceSize = u(w5), o10.sizeRatio = S6, o10.angle = m6, o10.rotateClockwise = Y, o10.anchorX = c8, o10.anchorY = l6, o10.offsetX = u(p7), o10.offsetY = u(g4), X && n11 && (M4.sdf ? o10.anchorX = c8 / (n11 * u7) : o10.anchorX = c8 / (n11 * C4), o10.anchorY = l6 / n11);
    const W = H2 && d6 ? n11 / d6 : 1;
    return o10.outlineSize = 0 === x5 || isNaN(x5) ? 0 : u(x5) * W, o10.scaleSymbolsProportionally = H2, o10.colorLocked = f6, o10._computeSize(e9, true), o10;
  }
  constructor(t6, i15, o10, s12, h7, r4, n11) {
    this.sprite = t6, this.color = i15, this.outlineColor = o10, this.minPixelBuffer = s12, this.placement = h7, this.scaleInfo = r4, this.effects = n11, this.rawWidth = 0, this.rawHeight = 0, this.angle = 0, this.outlineSize = 0, this.referenceSize = 0, this.sizeRatio = 1, this.alignment = i.SCREEN, this.scaleSymbolsProportionally = false, this.overrideOutlineColor = false, this.colorLocked = false, this.anchorX = 0, this.anchorY = 0, this.computedWidth = 0, this.computedHeight = 0, this.texXmin = 0, this.texYmin = 0, this.texXmax = 0, this.texYmax = 0, this.offsetX = 0, this.offsetY = 0, this.rotateClockwise = true;
  }
  get boundsInfo() {
    return {
      size: Math.max(this.computedHeight, this.computedWidth),
      offsetX: this.offsetX,
      offsetY: this.offsetY
    };
  }
  _computeSize(t6, e9) {
    const {
      sprite: i15,
      hasSizeVV: s12
    } = t6, h7 = !!i15.sdf, {
      rawWidth: r4,
      rawHeight: n11,
      sizeRatio: a9,
      outlineSize: c8
    } = this, l6 = r4 * a9, m6 = n11 * a9;
    if (h7 && !s12) {
      const t7 = e9 && r4 > n11 ? l6 : r4, i16 = n11, o10 = c8 + 2 * 1;
      this.computedWidth = Math.min(t7 + o10, l6), this.computedHeight = Math.min(i16 + o10, m6);
    } else this.computedWidth = l6, this.computedHeight = m6;
    const f6 = h7 ? Math.max(i15.width, i15.height) / Math.max(l6, m6) : 1, d6 = 0.5 * (l6 - this.computedWidth) * f6, u7 = 0.5 * (m6 - this.computedHeight) * f6, p7 = i15.rect.x + tt + d6, g4 = i15.rect.y + tt + u7, x5 = p7 + i15.width - 2 * d6, w5 = g4 + i15.height - 2 * u7;
    this.texXmin = Math.floor(p7), this.texYmin = Math.floor(g4), this.texXmax = Math.ceil(x5), this.texYmax = Math.ceil(w5), this.computedWidth *= (this.texXmax - this.texXmin) / (x5 - p7), this.computedHeight *= (this.texYmax - this.texYmin) / (w5 - g4), this.anchorX *= l6 / this.computedWidth, this.anchorY *= m6 / this.computedHeight;
  }
};

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/markers/MarkerMeshWriter.js
var M3 = 3.14159265359 / 180;
var k3 = 128 / Math.PI;
function b3(e9, t6) {
  return e9 %= t6, Math.abs(e9 >= 0 ? e9 : e9 + t6);
}
function S5(e9) {
  return b3(e9 * k3, 256);
}
function I2(e9, i15, a9, n11, c8 = false) {
  const m6 = n3(), l6 = c8 ? 1 : -1;
  return a4(m6), (i15 || a9) && i4(m6, m6, [i15, -a9]), n11 && s3(m6, m6, l6 * M3 * -n11), m6;
}
var _3 = {
  createComputedParams: (e9) => s10.from(e9),
  optionalAttributes: {
    zoomRange: {
      type: C.SHORT,
      count: 2,
      packPrecisionFactor: rt,
      pack: ({
        scaleInfo: e9
      }, {
        tileInfo: t6
      }) => m3(e9, t6)
    }
  },
  attributes: {
    pos: {
      type: C.SHORT,
      count: 2,
      pack: "position",
      packPrecisionFactor: 10
    },
    id: {
      type: C.UNSIGNED_BYTE,
      count: 3,
      pack: "id"
    },
    bitset: {
      type: C.UNSIGNED_BYTE,
      count: 1,
      pack: ({
        sprite: e9,
        alignment: t6,
        scaleSymbolsProportionally: r4,
        overrideOutlineColor: o10,
        colorLocked: s12
      }) => {
        let i15 = 0;
        return e9.sdf && (i15 |= f3(o2.bitset.isSDF)), t6 === i.MAP && (i15 |= f3(o2.bitset.isMapAligned)), r4 && (i15 |= f3(o2.bitset.scaleSymbolsProportionally)), o10 && (i15 |= f3(o2.bitset.overrideOutlineColor)), s12 && (i15 |= f3(o2.bitset.colorLocked)), i15;
      }
    },
    offset: {
      type: C.SHORT,
      count: 2,
      packPrecisionFactor: 4,
      packAlternating: {
        count: 4,
        pack: ({
          angle: e9,
          computedWidth: t6,
          computedHeight: r4,
          anchorX: o10,
          anchorY: s12,
          offsetX: a9,
          offsetY: n11,
          rotateClockwise: c8
        }) => {
          const m6 = I2(0, a9, n11, -e9, c8), l6 = -(0.5 + o10) * t6, u7 = -(0.5 - s12) * r4, d6 = [l6, u7], p7 = [l6 + t6, u7], h7 = [l6, u7 + r4], f6 = [l6 + t6, u7 + r4];
          return S(d6, d6, m6), S(p7, p7, m6), S(h7, h7, m6), S(f6, f6, m6), [d6, p7, h7, f6];
        }
      }
    },
    textureUV: {
      type: C.SHORT,
      count: 2,
      packPrecisionFactor: 4,
      packAlternating: {
        count: 4,
        pack: ({
          texXmax: e9,
          texXmin: t6,
          texYmax: r4,
          texYmin: o10
        }) => [[t6, o10], [e9, o10], [t6, r4], [e9, r4]]
      }
    },
    color: {
      type: C.UNSIGNED_BYTE,
      count: 4,
      normalized: true,
      pack: ({
        color: e9
      }) => g3(e9)
    },
    outlineColor: {
      type: C.UNSIGNED_BYTE,
      count: 4,
      normalized: true,
      pack: ({
        outlineColor: e9
      }) => g3(e9)
    },
    sizing: {
      type: C.UNSIGNED_BYTE,
      count: 4,
      pack: ({
        rawWidth: e9,
        rawHeight: t6,
        outlineSize: r4,
        referenceSize: o10
      }) => {
        const s12 = Math.max(e9, t6);
        return [d3(s12, 128), d3(r4, 128), d3(o10, 128), 0];
      }
    },
    placementAngle: {
      type: C.UNSIGNED_BYTE,
      count: 1,
      packTessellation: ({
        placementAngle: e9
      }) => S5(e9)
    },
    sizeRatio: {
      type: C.UNSIGNED_SHORT,
      count: 1,
      packPrecisionFactor: 64,
      pack: ({
        sizeRatio: e9
      }) => e9
    }
  }
};
var v2 = class extends c4 {
  constructor() {
    super(...arguments), this.vertexSpec = _3;
  }
  getBoundsInfo() {
    return this.evaluatedMeshParams.boundsInfo;
  }
  _write(e9, t6, r4) {
    const o10 = this.evaluatedMeshParams.sprite?.textureBinding, s12 = t6.getDisplayId();
    e9.recordStart(this.instanceId, this.attributeLayout, o10);
    const i15 = this.evaluatedMeshParams.minPixelBuffer, a9 = Math.max(this.evaluatedMeshParams.computedWidth, i15), c8 = Math.max(this.evaluatedMeshParams.computedHeight, i15), m6 = this.evaluatedMeshParams.offsetX, l6 = -this.evaluatedMeshParams.offsetY;
    if (null != this.evaluatedMeshParams.placement) this._writePlacedMarkers(e9, t6, r4, a9, c8);
    else if (r4?.nextPath()) {
      r4.nextPoint();
      const t7 = r4.x, o11 = r4.y;
      e9.recordBounds(t7 + m6, o11 + l6, a9, c8), this._writeQuad(e9, s12, t7, o11);
    } else if ("esriGeometryPolygon" === t6.geometryType) {
      const r5 = t6.readCentroidForDisplay();
      if (!r5) return;
      const [o11, i16] = r5.coords;
      e9.recordBounds(o11 + m6, i16 + l6, a9, c8), this._writeQuad(e9, s12, o11, i16);
    } else if ("esriGeometryPoint" === t6.geometryType) {
      const r5 = t6.readXForDisplay(), o11 = t6.readYForDisplay();
      e9.recordBounds(r5 + m6, o11 + l6, a9, c8), this._writeQuad(e9, s12, r5, o11);
    } else {
      const r5 = t6.readGeometryForDisplay();
      r5?.forEachVertex((t7, r6) => {
        e9.recordBounds(t7 + m6, r6 + l6, a9, c8), Math.abs(t7) > t3 || Math.abs(r6) > t3 || this._writeQuad(e9, s12, t7, r6);
      });
    }
    e9.recordEnd();
  }
  _writePlacedMarkers(t6, r4, o10, s12, i15) {
    const c8 = o10 ?? a3.fromFeatureSetReaderCIM(r4)?.clone();
    if (!c8) return;
    const l6 = -1, u7 = e8.getPlacement(c8, l6, this.evaluatedMeshParams.placement, u(1), t6.id, t5());
    if (!u7) return;
    const d6 = r4.getDisplayId();
    let p7 = u7.next();
    const h7 = this.evaluatedMeshParams.offsetX, f6 = -this.evaluatedMeshParams.offsetY;
    for (; null != p7; ) {
      const e9 = p7.tx, r5 = -p7.ty;
      if (Math.abs(e9) > t3 || Math.abs(r5) > t3) {
        p7 = u7.next();
        continue;
      }
      const o11 = -p7.getAngle();
      t6.recordBounds(e9 + h7, r5 + f6, s12, i15), this._writeQuad(t6, d6, e9, r5, o11), p7 = u7.next();
    }
  }
  _writeQuad(e9, t6, r4, o10, s12) {
    const i15 = e9.vertexCount(), a9 = null == s12 ? null : {
      placementAngle: s12
    };
    this._writeVertex(e9, t6, r4, o10, a9), e9.indexWrite(i15 + 0), e9.indexWrite(i15 + 1), e9.indexWrite(i15 + 2), e9.indexWrite(i15 + 1), e9.indexWrite(i15 + 3), e9.indexWrite(i15 + 2);
  }
};

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/pieChart/PieChartMeshWriter.js
var o9 = {
  createComputedParams: (e9) => e9,
  optionalAttributes: {},
  attributes: {
    pos: {
      type: C.SHORT,
      count: 2,
      packPrecisionFactor: 10,
      pack: "position"
    },
    id: {
      type: C.UNSIGNED_BYTE,
      count: 3,
      pack: "id"
    },
    bitset: {
      type: C.UNSIGNED_BYTE,
      count: 1,
      pack: (e9) => 0
    },
    offset: {
      type: C.SHORT,
      count: 2,
      packPrecisionFactor: 16,
      packAlternating: {
        count: 4,
        pack: ({
          size: t6
        }) => {
          const r4 = u(t6), i15 = -r4 / 2, o10 = -r4 / 2;
          return [[i15, o10], [i15 + r4, o10], [i15, o10 + r4], [i15 + r4, o10 + r4]];
        }
      }
    },
    texCoords: {
      type: C.SHORT,
      count: 2,
      packPrecisionFactor: 4,
      packAlternating: {
        count: 4,
        pack: () => [[0, 1], [1, 1], [0, 0], [1, 0]]
      }
    },
    size: {
      type: C.UNSIGNED_BYTE,
      count: 2,
      pack: ({
        size: e9
      }) => [e9, e9]
    },
    referenceSize: {
      type: C.UNSIGNED_BYTE,
      count: 1,
      pack: ({
        size: t6
      }) => u(t6)
    },
    zoomRange: {
      type: C.UNSIGNED_BYTE,
      count: 2,
      pack: ({
        scaleInfo: e9
      }, {
        tileInfo: r4
      }) => m3(e9, r4)
    }
  }
};
var s11 = class extends c4 {
  constructor() {
    super(...arguments), this.vertexSpec = o9;
  }
  _write(t6, r4) {
    const i15 = r4.getDisplayId(), o10 = this.evaluatedMeshParams.minPixelBuffer, s12 = Math.max(u(this.evaluatedMeshParams.size), o10);
    let c8, n11;
    if ("esriGeometryPoint" === r4.geometryType) c8 = r4.readXForDisplay(), n11 = r4.readYForDisplay();
    else {
      const e9 = r4.readCentroidForDisplay();
      if (!e9) return;
      c8 = e9?.coords[0], n11 = e9?.coords[1];
    }
    t6.recordStart(this.instanceId, this.attributeLayout), t6.recordBounds(c8, n11, s12, s12);
    const a9 = t6.vertexCount();
    this._writeVertex(t6, i15, c8, n11), t6.indexWrite(a9 + 0), t6.indexWrite(a9 + 1), t6.indexWrite(a9 + 2), t6.indexWrite(a9 + 1), t6.indexWrite(a9 + 3), t6.indexWrite(a9 + 2), t6.recordEnd();
  }
};

export {
  l3 as l,
  s7 as s,
  m3 as m,
  g3 as g,
  c5 as c,
  o6 as o,
  h4 as h,
  T,
  h5 as h2,
  _2 as _,
  c7 as c2,
  i14 as i,
  S4 as S,
  N,
  m5 as m2,
  v2 as v,
  s11 as s2
};
//# sourceMappingURL=chunk-NP5MLSB6.js.map
