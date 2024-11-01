import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  J,
  K,
  W as W2,
  Y,
  _ as _2
} from "./chunk-LM3JDV4W.js";
import {
  j
} from "./chunk-MRPCXIVS.js";
import {
  w
} from "./chunk-RNF7VOCU.js";
import {
  _
} from "./chunk-TIRJMGGG.js";
import {
  f
} from "./chunk-ZDRQSPB6.js";
import {
  E,
  P,
  S,
  W2 as W,
  a,
  s as s2,
  s2 as s3
} from "./chunk-6SSA7P3A.js";
import {
  s2 as s
} from "./chunk-6JFGZTLU.js";
import {
  O
} from "./chunk-2ZJE6ZFX.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/layers/support/rasterFunctions/rasterProjectionHelper.js
var d;
function M(e, t, n) {
  return !J(e, t, n);
}
function w2(e, n, i) {
  const o = M(e, n, i);
  if (o && !_2()) throw new s("rasterprojectionhelper-project", "projection engine is not loaded");
  return o;
}
!function(e) {
  e[e.None = 0] = "None", e[e.North = 1] = "North", e[e.South = 2] = "South", e[e.Both = 3] = "Both";
}(d || (d = {}));
var R = (e, t, n, i = 0) => {
  if (1 === n[0]) return [0, 0];
  let o = 1, r = -1, s4 = 1, a2 = -1;
  for (let g = 0; g < e.length; g += 2) isNaN(e[g]) || (o = o > e[g] ? e[g] : o, r = r > e[g] ? r : e[g], s4 = s4 > e[g + 1] ? e[g + 1] : s4, a2 = a2 > e[g + 1] ? a2 : e[g + 1]);
  const {
    cols: l,
    rows: c
  } = t, f2 = (r - o) / l / n[0], u = (a2 - s4) / c / n[1], m = 2 * i;
  let x = 0, h = false, p = [0, 0];
  for (let g = 0; g < l - 3; g++) {
    for (let t2 = 0; t2 < c - 3; t2++) {
      const n2 = g * c * 2 + 2 * t2, i2 = (e[n2] + e[n2 + 4] + e[n2 + 4 * c] + e[n2 + 4 * c + 4]) / 4, o2 = (e[n2 + 1] + e[n2 + 5] + e[n2 + 4 * c + 1] + e[n2 + 4 * c + 5]) / 4, r2 = Math.abs((i2 - e[n2 + 2 * c + 2]) / f2), s5 = Math.abs((o2 - e[n2 + 2 * c + 3]) / u);
      if (r2 + s5 > x && (x = r2 + s5, p = [r2, s5]), m && x > m) {
        h = true;
        break;
      }
    }
    if (h) break;
  }
  return p;
};
var S2 = {
  3395: 20037508342789244e-9,
  3410: 17334193943686873e-9,
  3857: 20037508342788905e-9,
  3975: 17367530445161372e-9,
  4087: 20037508342789244e-9,
  4088: 20015108787169147e-9,
  6933: 17367530445161372e-9,
  32662: 20037508342789244e-9,
  53001: 2001508679602057e-8,
  53002: 1000754339801029e-8,
  53003: 2001508679602057e-8,
  53004: 2001508679602057e-8,
  53016: 14152803599503474e-9,
  53017: 17333573624304302e-9,
  53034: 2001508679602057e-8,
  53079: 20015114352186374e-9,
  53080: 20015114352186374e-9,
  54001: 20037508342789244e-9,
  54002: 10018754171394624e-9,
  54003: 20037508342789244e-9,
  54004: 20037508342789244e-9,
  54016: 14168658027268292e-9,
  54017: 1736753044516137e-8,
  54034: 20037508342789244e-9,
  54079: 20037508342789244e-9,
  54080: 20037508342789244e-9,
  54100: 20037508342789244e-9,
  54101: 20037508342789244e-9
};
var P2 = 32;
var b = 4;
var G = b;
var k = /* @__PURE__ */ new Map();
var N = /* @__PURE__ */ new Map();
var E2 = 500;
function T() {
  return __async(this, null, function* () {
    _2() || (yield W2());
  });
}
function v(e, t, n) {
  w2(e.spatialReference, t);
  return n ? Y(t, e.spatialReference, e) : Y(e.spatialReference, t, e);
}
function C(e, t, i, o = null) {
  const r = e.spatialReference;
  if (r.equals(t)) return e;
  w2(r, t, o);
  const s4 = i.center, a2 = new w({
    xmin: s4.x - e.x / 2,
    xmax: s4.x + e.x / 2,
    ymin: s4.y - e.y / 2,
    ymax: s4.y + e.y / 2,
    spatialReference: r
  }), l = K(a2, t, o), c = D(t);
  let f2;
  if (null == l || null != c && l.width >= c) {
    const i2 = W(r) / W(t);
    f2 = {
      x: e.x * i2,
      y: e.y * i2
    };
  } else f2 = {
    x: l.width,
    y: l.height
  };
  return f2;
}
function _3(e, t = 0.01) {
  return W(e) ? t / W(e) : 0;
}
function j2(e, t, n = null, i = true) {
  const o = e.spatialReference;
  if (o.equals(t)) return e;
  w2(o, t, n);
  const r = K(e, t, n);
  return i && r ? (z([e], [r], o, t), r) : r;
}
function z(e, t, n, i) {
  const o = H(n, true), r = H(i, true), s4 = _3(n, E2), a2 = _3(i, E2);
  if (s4 && null != o && null != r) for (let l = 0; l < e.length; l++) {
    const n2 = t[l];
    if (!n2) continue;
    const {
      x: i2
    } = e[l], {
      x: c
    } = n2;
    c >= r[1] - a2 && Math.abs(i2 - o[0]) < s4 ? n2.x -= r[1] - r[0] : c <= r[0] + a2 && Math.abs(i2 - o[1]) < s4 && (n2.x += r[1] - r[0]);
  }
}
function L(e) {
  const {
    inSR: t,
    outSR: n,
    datumTransformation: i,
    preferPE: o
  } = e;
  if (t.equals(n)) {
    const {
      points: t2
    } = F(e, null);
    return t2;
  }
  if (t.isWebMercator && n.isWGS84 || t.isWGS84 && n.isWebMercator) return O2(e);
  if (w2(t, n, i) && o) {
    if (t.isGeographic) return W3(e);
    if (null != A(t)) return W3(e);
  }
  return I(e);
}
function I(e) {
  const {
    points: t
  } = F(e, null), {
    inSR: n,
    outSR: i,
    datumTransformation: o
  } = e, r = t.map((e2) => new _(e2[0], e2[1], n)), s4 = K(r, i, o);
  return o && z(r, s4, n, i), s4.map((e2) => e2 ? [e2.x, e2.y] : [NaN, NaN]);
}
function W3(e) {
  const {
    inSR: t,
    outSR: n,
    datumTransformation: a2
  } = e, l = A(t), {
    points: c,
    mask: f2
  } = F(e, l);
  if (!t.isGeographic) {
    const e2 = t.wkid ? E.coordsys(t.wkid) : E.fromString(t.isGeographic ? s2.PE_TYPE_GEOGCS : s2.PE_TYPE_PROJCS, t.wkt2 || t.wkt);
    P.projToGeog(e2, c.length, c);
  }
  if (null != a2 && a2.steps.length) {
    let e2;
    const t2 = 179.9955;
    if (n.isGeographic && (e2 = c.map(([e3]) => e3 > t2 ? 1 : e3 < -t2 ? -1 : 0)), a2.steps.forEach((e3) => {
      const t3 = e3.wkid ? E.geogtran(e3.wkid) : E.fromString(s2.PE_TYPE_GEOGTRAN, e3.wkt);
      a.geogToGeog(t3, c.length, c, null, e3.isInverse ? s2.PE_TRANSFORM_2_TO_1 : s2.PE_TRANSFORM_1_TO_2);
    }), e2) for (let n2 = 0; n2 < c.length; n2++) {
      const i = e2[n2], o = c[n2][0], r = o > t2 ? 1 : o < -t2 ? -1 : 0;
      i && r && i !== r && (c[n2][0] = i > 0 ? o + 360 : o - 360);
    }
  }
  if (!n.isGeographic) {
    const e2 = A(n, true), t2 = null != e2 && e2.isEnvelope ? [e2.bbox[1], e2.bbox[3]] : [-90, 90];
    Y2(c, t2);
    const s4 = n.wkid ? E.coordsys(n.wkid) : E.fromString(n.isGeographic ? s2.PE_TYPE_GEOGCS : s2.PE_TYPE_PROJCS, n.wkt2 || n.wkt);
    P.geogToProj(s4, c.length, c);
  }
  let u = c;
  if (f2 && c.length !== f2.length) {
    u = [];
    for (let e2 = 0, t2 = 0; e2 < f2.length; e2++) f2[e2] ? u.push(c[t2++]) : u.push([NaN, NaN]);
  }
  return u;
}
function O2(e) {
  const {
    cols: t,
    rows: n,
    xres: i,
    yres: o,
    usePixelCenter: r,
    inSR: s4,
    outSR: a2
  } = e;
  let {
    xmin: l,
    ymax: c
  } = e;
  r && (l += i / 2, c -= o / 2);
  const f2 = [], u = [], x = Math.max(t, n);
  for (let g = 0; g < x; g++) {
    const e2 = l + i * Math.min(t, g), r2 = c - o * Math.min(n, g), x2 = K(new _({
      x: e2,
      y: r2,
      spatialReference: s4
    }), a2);
    g <= t && f2.push(x2.x), g <= n && u.push(x2.y);
  }
  const h = [];
  for (let m = 0; m < t; m++) for (let e2 = 0; e2 < n; e2++) h.push([f2[m], u[e2]]);
  return h;
}
function A(e, t = false) {
  let n = e.wkid || e.wkt2 || e.wkt;
  if (!n || e.isGeographic) return null;
  if (n = String(n), k.has(n)) {
    const e2 = k.get(n);
    return t ? e2?.gcs : e2?.pcs;
  }
  const r = e.wkid ? E.coordsys(e.wkid) : E.fromString(e.isGeographic ? s2.PE_TYPE_GEOGCS : s2.PE_TYPE_PROJCS, e.wkt2 || e.wkt), s4 = B(r, _3(e, 1e-4)), a2 = B(r, 0, true);
  return k.set(n, {
    pcs: s4,
    gcs: a2
  }), t ? a2 : s4;
}
function B(e, t = 0, n = false) {
  const i = S.generate(e), o = n ? e.horizonGcsGenerate() : e.horizonPcsGenerate();
  if (!i || !o?.length) return null;
  let r = false, s4 = o.find((e2) => 1 === e2.getInclusive() && 1 === e2.getKind());
  if (!s4) {
    if (s4 = o.find((e2) => 1 === e2.getInclusive() && 0 === e2.getKind()), !s4) return null;
    r = true;
  }
  const l = n ? 0 : (2 === i.getNorthPoleLocation() ? 1 : 0) | (2 === i.getSouthPoleLocation() ? 2 : 0), c = i.isPannableRectangle(), f2 = s4.getCoord();
  if (r) return {
    isEnvelope: r,
    isPannable: c,
    vertices: f2,
    coef: null,
    bbox: [f2[0][0] - t, f2[0][1] - t, f2[1][0] + t, f2[1][1] + t],
    poleLocation: l
  };
  let u = 0;
  const m = [];
  let [x, h] = f2[0], [p, g] = f2[0];
  for (let a2 = 0, y = f2.length; a2 < y; a2++) {
    u++, u === y && (u = 0);
    const [e2, t2] = f2[a2], [n2, i2] = f2[u];
    if (i2 === t2) m.push([e2, n2, t2, i2, 2]);
    else {
      const o2 = (n2 - e2) / (i2 - t2 || 1e-4), r2 = e2 - o2 * t2;
      t2 < i2 ? m.push([o2, r2, t2, i2, 0]) : m.push([o2, r2, i2, t2, 1]);
    }
    x = x < e2 ? x : e2, h = h < t2 ? h : t2, p = p > e2 ? p : e2, g = g > t2 ? g : t2;
  }
  return {
    isEnvelope: false,
    isPannable: c,
    vertices: f2,
    coef: m,
    bbox: [x, h, p, g],
    poleLocation: l
  };
}
function F(e, t) {
  const n = [], {
    cols: i,
    rows: o,
    xres: r,
    yres: s4,
    usePixelCenter: a2
  } = e;
  let {
    xmin: l,
    ymax: c
  } = e;
  if (a2 && (l += r / 2, c -= s4 / 2), null == t) {
    for (let e2 = 0; e2 < i; e2++) for (let t2 = 0; t2 < o; t2++) n.push([l + r * e2, c - s4 * t2]);
    return {
      points: n
    };
  }
  const f2 = new Uint8Array(i * o);
  if (t.isEnvelope) {
    const {
      bbox: [e2, a3, u2, m2]
    } = t;
    for (let x = 0, h = 0; x < i; x++) {
      const i2 = l + r * x, p = t.isPannable || i2 >= e2 && i2 <= u2;
      for (let e3 = 0; e3 < o; e3++, h++) {
        const t2 = c - s4 * e3;
        p && t2 >= a3 && t2 <= m2 && (n.push([i2, t2]), f2[h] = 1);
      }
    }
    return {
      points: n,
      mask: f2
    };
  }
  const u = t.coef, m = [];
  for (let x = 0; x < o; x++) {
    const e2 = c - s4 * x, t2 = [], n2 = [];
    for (let o2 = 0; o2 < u.length; o2++) {
      const [i3, r2, s5, a3, l2] = u[o2];
      if (e2 === s5 && s5 === a3) t2.push(i3), t2.push(r2), n2.push(2), n2.push(2);
      else if (e2 >= s5 && e2 <= a3) {
        const o3 = i3 * e2 + r2;
        t2.push(o3), n2.push(l2);
      }
    }
    let i2 = t2;
    if (t2.length > 2) {
      let e3 = 2 === n2[0] ? 0 : n2[0], o2 = t2[0];
      i2 = [];
      for (let r2 = 1; r2 < n2.length; r2++) 2 === n2[r2] && r2 !== n2.length - 1 || (n2[r2] !== e3 && (i2.push(0 === e3 ? Math.min(o2, t2[r2 - 1]) : Math.max(o2, t2[r2 - 1])), e3 = n2[r2], o2 = t2[r2]), r2 === n2.length - 1 && i2.push(0 === n2[r2] ? Math.min(o2, t2[r2]) : Math.max(o2, t2[r2])));
      i2.sort((e4, t3) => e4 - t3);
    } else t2[0] > t2[1] && (i2 = [t2[1], t2[0]]);
    m.push(i2);
  }
  for (let x = 0, h = 0; x < i; x++) {
    const e2 = l + r * x;
    for (let t2 = 0; t2 < o; t2++, h++) {
      const i2 = c - s4 * t2, o2 = m[t2];
      if (2 === o2.length) e2 >= o2[0] && e2 <= o2[1] && (n.push([e2, i2]), f2[h] = 1);
      else if (o2.length > 2) {
        let t3 = false;
        for (let n2 = 0; n2 < o2.length; n2 += 2) if (e2 >= o2[n2] && e2 <= o2[n2 + 1]) {
          t3 = true;
          break;
        }
        t3 && (n.push([e2, i2]), f2[h] = 1);
      }
    }
  }
  return {
    points: n,
    mask: f2
  };
}
function Y2(e, t) {
  const [n, i] = t;
  for (let o = 0; o < e.length; o++) {
    const t2 = e[o][1];
    (t2 < n || t2 > i) && (e[o] = [NaN, NaN]);
  }
}
function q(e, t) {
  const n = D(e[0].spatialReference);
  if (e.length < 2 || null == n) return e[0];
  if (t = t ?? _3(e[0].spatialReference), 1 === (e = e.filter((e2) => e2.width > t)).length) return e[0];
  let {
    xmin: i,
    xmax: o,
    ymin: r,
    ymax: s4
  } = e[0];
  for (let a2 = 1; a2 < e.length; a2++) {
    const t2 = e[a2];
    o = t2.xmax + n * a2, r = Math.min(r, t2.ymin), s4 = Math.max(s4, t2.ymax);
  }
  return new w({
    xmin: i,
    xmax: o,
    ymin: r,
    ymax: s4,
    spatialReference: e[0].spatialReference
  });
}
function J2(t, n, i = null, o = true) {
  const r = t.spatialReference;
  if (r.equals(n)) return t;
  const s4 = V(t), a2 = D(r, true), l = D(n);
  if (0 === s4 || null == a2 || null == l) {
    const e = K2(t, n, i, o);
    if (null == a2 && null != l && Math.abs(e.width - l) < _3(n) && _2()) {
      const i2 = A(r);
      if (null != i2 && i2.poleLocation === d.None && t.width < (i2.bbox[2] - i2.bbox[0]) / 2) return X(t, n) || e;
    }
    return e;
  }
  const f2 = t.clone().normalize();
  if (1 === f2.length && t.xmax < a2 && t.xmax - a2 / 2 > _3(r)) {
    const {
      xmin: e,
      xmax: n2
    } = t;
    for (let i2 = 0; i2 <= s4; i2++) {
      const o2 = 0 === i2 ? e : -a2 / 2, l2 = i2 === s4 ? n2 - a2 * i2 : a2 / 2;
      f2[i2] = new w({
        xmin: o2,
        xmax: l2,
        ymin: t.ymin,
        ymax: t.ymax,
        spatialReference: r
      });
    }
  }
  return q(f2.map((e) => K2(e, n, i, o)).filter(O));
}
function U(e, t, n) {
  if ("extent" === e.type) {
    const {
      xmin: t2,
      ymin: n2,
      xmax: i,
      ymax: o,
      spatialReference: r
    } = e;
    e = new j({
      rings: [[[t2, o], [i, o], [i, n2], [t2, n2], [t2, o]]],
      spatialReference: r
    });
  }
  return e.spatialReference.equals(t) ? e : (w2(e.spatialReference, t, n), K(e, t, n));
}
function X(e, t) {
  const n = D(t);
  if (null == n) return null;
  let {
    xmin: i,
    ymin: o,
    xmax: r,
    ymax: s4
  } = e;
  const a2 = e.spatialReference, l = new j({
    spatialReference: a2,
    rings: [[[i, o], [r, o], [r, s4], [i, s4], [i, o]]]
  }), c = K(l, t);
  if (2 !== c.rings.length || !c.rings[0].length || !c.rings[1].length) return null;
  const {
    rings: f2
  } = c, u = _3(a2), x = new w({
    spatialReference: t
  });
  for (let m = 0; m < 2; m++) {
    i = r = f2[m][0][0], o = s4 = f2[m][0][1];
    for (let e2 = 0; e2 < f2[m].length; e2++) i = i > f2[m][e2][0] ? f2[m][e2][0] : i, r = r < f2[m][e2][0] ? f2[m][e2][0] : r, o = o > f2[m][e2][1] ? f2[m][e2][1] : o, s4 = s4 < f2[m][e2][1] ? f2[m][e2][1] : s4;
    if (0 === m) x.ymin = o, x.ymax = s4, x.xmin = i, x.xmax = r;
    else if (x.ymin = Math.min(x.ymin, o), x.ymax = Math.max(x.ymax, s4), Math.abs(r - n / 2) < u) x.xmin = i, x.xmax = x.xmax + n;
    else {
      if (!(Math.abs(i + n / 2) < u)) return null;
      x.xmax = r + n;
    }
  }
  return x;
}
function K2(e, t, n = null, i = true, o = true) {
  const r = e.spatialReference;
  if (r.equals(t) || !t) return e;
  w2(r, t, n);
  const s4 = K(e, t, n);
  if (o && t.isWebMercator && s4 && (s4.ymax = Math.min(20037508342787e-6, s4.ymax), s4.ymin = Math.max(-20037508342787e-6, s4.ymin), s4.ymin >= s4.ymax)) return null;
  if (!i || !s4) return s4;
  const a2 = H(r, true), l = H(t, true);
  if (null == a2 || null == l) return s4;
  const c = _3(r, 1e-3), f2 = _3(r, E2), u = _3(t, 1e-3);
  if (Math.abs(s4.xmin - l[0]) < u && Math.abs(s4.xmax - l[1]) < u) {
    const i2 = Math.abs(e.xmin - a2[0]), o2 = Math.abs(a2[1] - e.xmax);
    if (i2 < c && o2 > f2) {
      s4.xmin = l[0];
      const i3 = [];
      i3.push(new _(e.xmax, e.ymin, r)), i3.push(new _(e.xmax, (e.ymin + e.ymax) / 2, r)), i3.push(new _(e.xmax, e.ymax, r));
      const o3 = i3.map((e2) => j2(e2, t, n)).filter((e2) => !isNaN(e2?.x)).map((e2) => e2.x);
      s4.xmax = Math.max.apply(null, o3);
    }
    if (o2 < c && i2 > f2) {
      s4.xmax = l[1];
      const i3 = [];
      i3.push(new _(e.xmin, e.ymin, r)), i3.push(new _(e.xmin, (e.ymin + e.ymax) / 2, r)), i3.push(new _(e.xmin, e.ymax, r));
      const o3 = i3.map((e2) => j2(e2, t, n)).filter((e2) => !isNaN(e2?.x)).map((e2) => e2.x);
      s4.xmin = Math.min.apply(null, o3);
    }
  } else {
    const e2 = _3(t, 1e-3);
    Math.abs(s4.xmin - l[0]) < e2 && (s4.xmin = l[0]), Math.abs(s4.xmax - l[1]) < e2 && (s4.xmax = l[1]);
  }
  return s4;
}
function D(e, t = false) {
  if (!e) return null;
  const n = t ? 20037508342787e-6 : 20037508342788905e-9;
  return e.isWebMercator ? 2 * n : e.wkid && e.isGeographic ? 360 : 2 * S2[e.wkid] || null;
}
function H(e, t = false) {
  if (e.isGeographic) return [-180, 180];
  const n = D(e, t);
  return null != n ? [-n / 2, n / 2] : null;
}
function Q(e, t, n, i) {
  let o = (e - t) / n;
  return o - Math.floor(o) != 0 ? o = Math.floor(o) : i && (o -= 1), o;
}
function V(e, t = false) {
  const n = D(e.spatialReference);
  if (null == n) return 0;
  const i = t ? 0 : -(n / 2), o = _3(e.spatialReference), r = !t && Math.abs(e.xmax - n / 2) < o ? n / 2 : e.xmax, s4 = !t && Math.abs(e.xmin + n / 2) < o ? -n / 2 : e.xmin;
  return Q(r, i, n, true) - Q(s4, i, n, false);
}
function Z(e) {
  const t = e.storageInfo.origin.x, n = D(e.spatialReference, true);
  if (null == n) return {
    originX: t,
    halfWorldWidth: null,
    pyramidsInfo: null
  };
  const i = n / 2, {
    nativePixelSize: o,
    storageInfo: r,
    extent: s4
  } = e, {
    maximumPyramidLevel: a2,
    blockWidth: l,
    pyramidScalingFactor: c
  } = r;
  let f2 = o.x;
  const u = [], m = null != e.transform && "gcs-shift" === e.transform.type, x = t + (m ? 0 : i), h = m ? n - t : i - t;
  for (let p = 0; p <= a2; p++) {
    const e2 = (s4.xmax - t) / f2 / l, n2 = e2 - Math.floor(e2) == 0 ? e2 : Math.ceil(e2), i2 = h / f2 / l, o2 = i2 - Math.floor(i2) == 0 ? i2 : Math.ceil(i2), r2 = Math.floor(x / f2 / l), a3 = Math.round(x / f2) % l, m2 = (l - Math.round(h / f2) % l) % l;
    u.push({
      resolutionX: f2,
      blockWidth: l,
      datasetColumnCount: n2,
      worldColumnCountFromOrigin: o2,
      leftMargin: a3,
      rightPadding: m2,
      originColumnOffset: r2
    }), f2 *= c;
  }
  return {
    originX: t,
    halfWorldWidth: i,
    pyramidsInfo: u,
    hasGCSSShiftTransform: m
  };
}
function $(e) {
  if (!e || e.isGeographic) return e;
  const t = String(e.wkid || e.wkt2 || e.wkt);
  let n;
  if (N.has(t)) n = N.get(t);
  else {
    n = (e.wkid ? E.coordsys(e.wkid) : E.fromString(s2.PE_TYPE_PROJCS, e.wkt2 || e.wkt)).getGeogcs().getCode(), N.set(t, n);
  }
  return new f({
    wkid: n
  });
}
function ee(e) {
  const t = e.isAdaptive && null == e.spacing;
  let n = e.spacing || [P2, P2], i = te(e), o = {
    cols: i.size[0] + 1,
    rows: i.size[1] + 1
  };
  const r = i.outofBoundPointCount > 0 && i.outofBoundPointCount < i.offsets.length / 2;
  let s4 = i.outofBoundPointCount === i.offsets.length / 2 || t && r ? [0, 0] : R(i.offsets, o, n, G);
  const a2 = (s4[0] + s4[1]) / 2, l = e.projectedExtent.spatialReference, c = e.srcBufferExtent.spatialReference;
  if (t && (r || a2 > G)) {
    M(l, c, e.datumTransformation) && (l.isGeographic || A(l)), n = [b, b], i = te(__spreadProps(__spreadValues({}, e), {
      spacing: n
    })), o = {
      cols: i.size[0] + 1,
      rows: i.size[1] + 1
    }, s4 = R(i.offsets, o, n, G);
  }
  if (i.error = s4, n[0] > 1 && (i.coefficients = ne(i.offsets, o, r)), e.includeGCSGrid && !l.isGeographic && !l.isWebMercator) if (c.isGeographic) i.gcsGrid = {
    offsets: i.offsets,
    coefficients: i.coefficients,
    spacing: n
  };
  else {
    const t2 = A(l);
    if (null != t2 && !t2.isEnvelope) {
      const t3 = $(l), s5 = J2(e.projectedExtent, t3), {
        offsets: a3
      } = te(__spreadProps(__spreadValues({}, e), {
        srcBufferExtent: s5,
        spacing: n
      })), c2 = ne(a3, o, r);
      i.gcsGrid = {
        offsets: a3,
        coefficients: c2,
        spacing: n
      };
    }
  }
  return i;
}
function te(e) {
  const {
    projectedExtent: t,
    srcBufferExtent: n,
    pixelSize: i,
    datumTransformation: o,
    rasterTransform: r
  } = e, s4 = t.spatialReference, a2 = n.spatialReference, l = w2(s4, a2), {
    xmin: c,
    ymin: f2,
    xmax: u,
    ymax: m
  } = t, x = D(a2), h = null != x && (e.hasWrapAround || "gcs-shift" === r?.type), g = e.spacing || [P2, P2], y = g[0] * i.x, d2 = g[1] * i.y, M2 = 1 === g[0], R2 = Math.ceil((u - c) / y - 0.1 / g[0]) + (M2 ? 0 : 1), S3 = Math.ceil((m - f2) / d2 - 0.1 / g[1]) + (M2 ? 0 : 1), G2 = L({
    cols: R2,
    rows: S3,
    xmin: c,
    ymax: m,
    xres: y,
    yres: d2,
    inSR: s4,
    outSR: a2,
    datumTransformation: o,
    preferPE: g[0] <= b,
    usePixelCenter: M2
  }), k2 = [];
  let N2, T2 = 0;
  const v2 = M2 ? -1 : NaN, {
    xmin: C2,
    xmax: j3,
    ymax: z2,
    width: I2,
    height: W4
  } = n, O3 = _3(a2, E2), B2 = null != x && C2 > 0 && j3 > x / 2;
  let F2 = false;
  if (l) {
    const e2 = A(s4);
    F2 = null != e2 && e2.poleLocation > 0;
  }
  for (let w3 = 0; w3 < R2; w3++) {
    const e2 = [];
    for (let t2 = 0; t2 < S3; t2++) {
      let n2 = G2[w3 * S3 + t2];
      if (h && n2[0] > j3 && n2[0] > x / 2 - O3 ? n2[0] -= x : h && 0 === w3 && n2[0] < 0 && B2 && !r && (n2[0] += x), !n2 || isNaN(n2[0]) || isNaN(n2[1])) k2.push(v2), k2.push(v2), e2.push(null), T2++;
      else {
        if (r) {
          const e3 = r.inverseTransform(new _({
            x: n2[0],
            y: n2[1],
            spatialReference: a2
          }));
          n2 = [e3.x, e3.y];
        }
        e2.push(n2), w3 > 0 && h && N2[t2] && n2[0] < N2[t2][0] && (n2[0] += x, F2 && n2[0] > j3 && n2[0] > x && (n2[0] -= x)), k2.push((n2[0] - C2) / I2), k2.push((z2 - n2[1]) / W4);
      }
    }
    N2 = e2;
  }
  return {
    offsets: k2,
    error: null,
    coefficients: null,
    outofBoundPointCount: T2,
    spacing: g,
    size: M2 ? [R2, S3] : [R2 - 1, S3 - 1]
  };
}
function ne(e, t, n) {
  const {
    cols: i,
    rows: o
  } = t, r = new Float32Array((i - 1) * (o - 1) * 2 * 6), s4 = new Float32Array([-0, -1, 1, -1, 1, -0, 1, -0, -0]), a2 = new Float32Array([-1, 1, 0, 0, -1, 1, 1, 0, 0]);
  for (let l = 0; l < i - 1; l++) {
    for (let t2 = 0; t2 < o - 1; t2++) {
      let n2 = l * o * 2 + 2 * t2;
      const c = e[n2], f2 = e[n2 + 1], u = e[n2 + 2], m = e[n2 + 3];
      n2 += 2 * o;
      const x = e[n2], h = e[n2 + 1], p = e[n2 + 2], g = e[n2 + 3];
      let y = 0, d2 = 12 * (t2 * (i - 1) + l);
      for (let e2 = 0; e2 < 3; e2++) r[d2++] = s4[y++] * c + s4[y++] * u + s4[y++] * p;
      y = 0;
      for (let e2 = 0; e2 < 3; e2++) r[d2++] = s4[y++] * f2 + s4[y++] * m + s4[y++] * g;
      y = 0;
      for (let e2 = 0; e2 < 3; e2++) r[d2++] = a2[y++] * c + a2[y++] * x + a2[y++] * p;
      y = 0;
      for (let e2 = 0; e2 < 3; e2++) r[d2++] = a2[y++] * f2 + a2[y++] * h + a2[y++] * g;
    }
    if (n) for (let e2 = 0; e2 < r.length; e2++) isNaN(r[e2]) && (r[e2] = -1);
  }
  return r;
}
function ie(e, t) {
  const n = e.clone().normalize();
  return 1 === n.length ? n[0] : q(n, t);
}
function oe(e) {
  const {
    spatialReference: t
  } = e, n = s3(t);
  if (!n) return e;
  const [i, o] = n.valid, r = o - i;
  let s4 = 0;
  if (e.xmin < i) {
    const t2 = i - e.xmin;
    s4 = Math.ceil(t2 / r);
  } else if (e.xmin > o) {
    const t2 = e.xmin - o;
    s4 = -Math.ceil(t2 / r);
  }
  return new w({
    spatialReference: e.spatialReference,
    xmin: e.xmin + s4 * r,
    ymin: e.ymin,
    xmax: e.xmax + s4 * r,
    ymax: e.ymax
  });
}
function re(e, t, i) {
  const {
    storageInfo: o,
    pixelSize: r
  } = t;
  let s4 = 0, a2 = false;
  const {
    pyramidResolutions: l
  } = o, c = "mixed" === o.tileInfo.format?.toLowerCase() ? Math.max(1, Math.min(3, o.tileInfo.dpi / 96)) : 1, f2 = (e.x + e.y) / 2 / c;
  if (null != l && l.length) {
    const e2 = l[l.length - 1], o2 = (e2.x + e2.y) / 2, c2 = (r.x + r.y) / 2;
    if (f2 <= c2) s4 = 0;
    else if (f2 >= o2) s4 = l.length, a2 = f2 / o2 > 8;
    else {
      let e3, t2 = c2;
      for (let n = 1; n <= l.length; n++) {
        if (e3 = (l[n - 1].x + l[n - 1].y) / 2, f2 <= e3) {
          f2 === e3 ? s4 = n : "down" === i ? (s4 = n - 1, a2 = f2 / t2 > 8) : s4 = "up" === i || f2 - t2 > e3 - f2 || f2 / t2 > 2 ? n : n - 1;
          break;
        }
        t2 = e3;
      }
    }
    const u2 = 0 === s4 ? r : l[s4 - 1];
    if (a2) {
      Math.min(u2.x, u2.y) * W(t.spatialReference) > 19567 && (a2 = false);
    }
    return {
      pyramidLevel: s4,
      pyramidResolution: new _({
        x: u2.x,
        y: u2.y,
        spatialReference: t.spatialReference
      }),
      excessiveReading: a2
    };
  }
  const u = Math.log(e.x / r.x) / Math.LN2, m = Math.log(e.y / r.y) / Math.LN2, x = t.storageInfo.maximumPyramidLevel || 0;
  s4 = "down" === i ? Math.floor(Math.min(u, m)) : "up" === i ? Math.ceil(Math.max(u, m)) : Math.round((u + m) / 2), s4 < 0 ? s4 = 0 : s4 > x && (a2 = s4 > x + 3, s4 = x);
  const h = 2 ** s4;
  return {
    pyramidLevel: s4,
    pyramidResolution: new _({
      x: h * t.nativePixelSize.x,
      y: h * t.nativePixelSize.y,
      spatialReference: t.spatialReference
    }),
    excessiveReading: a2
  };
}
function se(e, t) {
  const {
    pixelSize: n,
    extent: i
  } = e, o = v(i, t, false);
  return J2(ie(i, (n.x + n.y) / 16), t, o);
}
function ae(e, t, i) {
  const o = i?.tileSize ?? 512, r = i?.alignGlobalDatasetWithAGOL ?? true, s4 = !!i?.limitToSrcResolution, {
    extent: a2,
    spatialReference: l,
    pixelSize: c
  } = e, f2 = C(new _({
    x: c.x,
    y: c.y,
    spatialReference: l
  }), t, a2);
  if (null == f2) return {
    projectedPixelSize: null,
    scales: null,
    srcResolutions: null,
    isCustomTilingScheme: false
  };
  const u = (f2.x + f2.y) / 2, m = W(t), x = u * m * 96 * 39.37, h = t.isGeographic ? 256 / o * 2958287637958547e-7 : 256 / o * 591657527591555e-6;
  let g = "vector-magdir" === e.dataType || "vector-uv" === e.dataType;
  const y = se(e, t), d2 = Math.min(Math.ceil(Math.log(Math.min(e.width, e.height) / 32) / Math.LN2), Math.ceil(Math.log(h / 2 / x) / Math.LN2));
  if (!g && r && (t.isGeographic || t.isWebMercator)) {
    const n = D(t);
    if (g = V(y) > 0 || null != n && y.width > n / 4, !g && null != n) {
      let t2 = -1;
      if (d2 < 3) t2 = 2 ** d2 * u * o;
      else if (e.storageInfo) {
        const {
          maximumPyramidLevel: n2 = 0,
          pyramidScalingFactor: i3 = 2
        } = e.storageInfo;
        t2 = i3 ** n2 * u * o;
      }
      const i2 = Math.ceil(n / t2);
      g = 1 === i2 || 2 === i2 && n / 2 - y.xmax < t2;
    }
  }
  let M2, w3 = x;
  const R2 = 1.001, S3 = Math.min(2, Math.max(1.414, e.storageInfo?.pyramidScalingFactor || 2));
  if (g) {
    w3 = h;
    const e2 = t.isGeographic ? 1341104507446289e-21 : 0.29858214164761665, n = e2 * (96 * m * 39.37), i2 = t.isGeographic ? 4326 : 3857;
    M2 = C(new _({
      x: e2,
      y: e2,
      spatialReference: {
        wkid: i2
      }
    }), l, y), M2.x *= w3 / n, M2.y *= w3 / n;
  } else {
    M2 = {
      x: c.x,
      y: c.y
    };
    let e2 = 0;
    for (; w3 < h * (R2 / 2) && e2 < d2; ) e2++, w3 *= S3, M2.x *= S3, M2.y *= S3;
    Math.max(w3, h) / Math.min(w3, h) <= R2 && (w3 = h);
  }
  const P3 = [w3], b2 = [{
    x: M2.x,
    y: M2.y
  }], G2 = 70.5310735, k2 = Math.min(G2, x) / R2;
  for (; w3 >= k2; ) w3 /= S3, M2.x /= S3, M2.y /= S3, P3.push(w3), b2.push({
    x: M2.x,
    y: M2.y
  });
  if (s4) {
    const e2 = 1e-3 * c.x;
    let t2 = b2.findIndex((t3) => t3.x >= c.x - e2 && t3.x <= c.x + e2);
    t2 > -1 ? (b2.length = t2 + 1, P3.length = t2 + 1) : (t2 = b2.findIndex((t3) => t3.x <= c.x + e2), t2 > 0 && (b2.length = t2, P3.length = t2));
  }
  return {
    projectedPixelSize: f2,
    scales: P3,
    srcResolutions: b2,
    isCustomTilingScheme: !g
  };
}

export {
  M,
  T,
  v,
  C,
  j2 as j,
  J2 as J,
  U,
  D,
  V,
  Z,
  ee,
  oe,
  re,
  se,
  ae
};
//# sourceMappingURL=chunk-PLQQNSQY.js.map
