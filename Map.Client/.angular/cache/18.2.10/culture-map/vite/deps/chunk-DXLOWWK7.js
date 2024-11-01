import {
  __spreadValues
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/core/has.js
var e;
function has(a3) {
  return "function" == typeof e[a3] ? e[a3] = e[a3](globalThis) : e[a3];
}
e = globalThis.dojoConfig?.has || globalThis.esriConfig?.has ? __spreadValues(__spreadValues({}, globalThis.dojoConfig?.has), globalThis.esriConfig?.has) : {}, has.add = (a3, d, o4, r3) => ((r3 || void 0 === e[a3]) && (e[a3] = d), o4 && has(a3)), has.cache = e, has.add("big-integer-warning-enabled", true), has.add("esri-deprecation-warnings", true), has.add("esri-tests-disable-screenshots", false), has.add("esri-tests-use-full-window", false), has.add("esri-tests-post-to-influx", true), (() => {
  has.add("host-webworker", void 0 !== globalThis.WorkerGlobalScope && self instanceof globalThis.WorkerGlobalScope);
  const e5 = "undefined" != typeof window && "undefined" != typeof location && "undefined" != typeof document && window.location === location && window.document === document;
  if (has.add("host-browser", e5), has.add("host-node", "object" == typeof globalThis.process && globalThis.process.versions?.node && globalThis.process.versions.v8), has.add("dom", e5), has("host-browser")) {
    const e6 = navigator, a3 = e6.userAgent, d = e6.appVersion, o4 = parseFloat(d);
    if (has.add("wp", parseFloat(a3.split("Windows Phone")[1]) || void 0), has.add("msapp", parseFloat(a3.split("MSAppHost/")[1]) || void 0), has.add("khtml", d.includes("Konqueror") ? o4 : void 0), has.add("edge", parseFloat(a3.split("Edge/")[1]) || void 0), has.add("opr", parseFloat(a3.split("OPR/")[1]) || void 0), has.add("webkit", !has("wp") && !has("edge") && parseFloat(a3.split("WebKit/")[1]) || void 0), has.add("chrome", !has("edge") && !has("opr") && parseFloat(a3.split("Chrome/")[1]) || void 0), has.add("android", !has("wp") && parseFloat(a3.split("Android ")[1]) || void 0), has.add("safari", !d.includes("Safari") || has("wp") || has("chrome") || has("android") || has("edge") || has("opr") ? void 0 : parseFloat(d.split("Version/")[1])), has.add("mac", d.includes("Macintosh")), !has("wp") && /(iPhone|iPod|iPad)/.test(a3)) {
      const e7 = RegExp.$1.replace(/P/, "p"), d2 = /OS ([\d_]+)/.test(a3) ? RegExp.$1 : "1", o5 = parseFloat(d2.replace(/_/, ".").replaceAll("_", ""));
      has.add(e7, o5), has.add("ios", o5);
    }
    has("webkit") || (!a3.includes("Gecko") || has("wp") || has("khtml") || has("edge") || has.add("mozilla", o4), has("mozilla") && has.add("ff", parseFloat(a3.split("Firefox/")[1] || a3.split("Minefield/")[1]) || void 0));
  }
})(), (() => {
  if (globalThis.navigator) {
    const e5 = navigator.userAgent, a3 = /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini|IEMobile/i.test(e5), d = /iPhone/i.test(e5);
    a3 && has.add("esri-mobile", a3), d && has.add("esri-iPhone", d), has.add("esri-geolocation", !!navigator.geolocation);
  }
  has.add("esri-wasm", "WebAssembly" in globalThis), has.add("esri-performance-mode-frames-between-render", 20), has.add("esri-force-performance-mode", false), has.add("esri-shared-array-buffer", () => {
    const e5 = "SharedArrayBuffer" in globalThis, a3 = false === globalThis.crossOriginIsolated;
    return e5 && !a3;
  }), has.add("wasm-simd", () => {
    const e5 = [0, 97, 115, 109, 1, 0, 0, 0, 1, 5, 1, 96, 0, 1, 123, 3, 2, 1, 0, 10, 10, 1, 8, 0, 65, 0, 253, 15, 253, 98, 11];
    return WebAssembly.validate(new Uint8Array(e5));
  }), has.add("esri-atomics", "Atomics" in globalThis), has.add("esri-workers", "Worker" in globalThis), has.add("web-feat:cache", "caches" in globalThis), has.add("esri-workers-arraybuffer-transfer", !has("safari") || Number(has("safari")) >= 12), has.add("workers-pool-size", 8), has.add("featurelayer-simplify-thresholds", [0.5, 0.5, 0.5, 0.5]), has.add("featurelayer-simplify-payload-size-factors", [1, 1, 4]), has.add("featurelayer-fast-triangulation-enabled", true), has.add("featurelayer-animation-enabled", true), has.add("featurelayer-snapshot-enabled", true), has.add("featurelayer-snapshot-point-min-threshold", 8e4), has.add("featurelayer-snapshot-point-max-threshold", 4e5), has.add("featurelayer-snapshot-point-coverage", 0.1), has.add("featurelayer-query-max-depth", 4), has.add("featurelayer-query-pausing-enabled", false), has.add("featurelayer-advanced-symbols", false), has.add("featurelayer-pbf", true), has.add("featurelayer-pbf-statistics", false), has.add("feature-layers-workers", true), has.add("feature-polyline-generalization-factor", 1), has.add("mapview-transitions-duration", 200), has.add("mapview-essential-goto-duration", 200), has.add("mapview-srswitch-adjust-rotation-scale-threshold", 24e6), has.add("mapserver-pbf-version-support", 10.81), has.add("mapservice-popup-identify-max-tolerance", 20), has("host-webworker") || has("host-browser") && (has.add("esri-csp-restrictions", () => {
    try {
      new Function();
    } catch {
      return true;
    }
    return false;
  }), has.add("esri-image-decode", () => {
    if ("decode" in new Image()) {
      const e5 = new Image();
      return e5.src = 'data:image/svg+xml;charset=UTF-8,<svg version="1.1" xmlns="http://www.w3.org/2000/svg"></svg>', void e5.decode().then(() => {
        has.add("esri-image-decode", true, true, true);
      }).catch(() => {
        has.add("esri-image-decode", false, true, true);
      });
    }
    return false;
  }), has.add("esri-url-encodes-apostrophe", () => {
    const e5 = window.document.createElement("a");
    return e5.href = "?'", e5.href.includes("?%27");
  }));
})();

// ../../../node_modules/@arcgis/core/core/RandomLCG.js
var t = class _t {
  constructor(t5 = 1) {
    this._seed = t5;
  }
  set seed(e5) {
    this._seed = e5 ?? Math.random() * _t._m;
  }
  getInt() {
    return this._seed = (_t._a * this._seed + _t._c) % _t._m, this._seed;
  }
  getFloat() {
    return this.getInt() / (_t._m - 1);
  }
  getIntRange(t5, e5) {
    return Math.round(this.getFloatRange(t5, e5));
  }
  getFloatRange(e5, s3) {
    const n2 = s3 - e5;
    return e5 + this.getInt() / _t._m * n2;
  }
};
t._m = 2147483647, t._a = 48271, t._c = 0;

// ../../../node_modules/@arcgis/core/core/arrayUtils.js
var t2 = 1.5;
var e2 = 1 / t2;
var r = 0.5;
function o(n2, t5) {
  if (!t5) return n2;
  for (const e5 of t5) n2.push(e5);
  return n2;
}
function u(n2) {
  if (!n2) return;
  const t5 = n2.length;
  return t5 > 0 ? n2[t5 - 1] : void 0;
}
function f(n2) {
  return n2;
}
function i(n2, t5 = f) {
  if (!n2 || 0 === n2.length) return;
  let e5 = n2[0], r3 = t5(e5);
  for (let o4 = 1; o4 < n2.length; ++o4) {
    const l2 = n2[o4], u4 = Number(t5(l2));
    u4 > r3 && (r3 = u4, e5 = l2);
  }
  return e5;
}
function c(n2, t5 = f) {
  return i(n2, (n3) => -t5(n3));
}
function s(n2, t5) {
  return t5 ? n2.filter((n3, e5, r3) => r3.findIndex(t5.bind(null, n3)) === e5) : Array.from(new Set(n2));
}
function h(n2, t5, e5) {
  if (null == n2 && null == t5) return true;
  if (null == n2 || null == t5 || n2.length !== t5.length) return false;
  if (e5) {
    for (let r3 = 0; r3 < n2.length; r3++) if (!e5(n2[r3], t5[r3])) return false;
  } else for (let r3 = 0; r3 < n2.length; r3++) if (n2[r3] !== t5[r3]) return false;
  return true;
}
function a(n2, t5) {
  let e5 = n2.length !== t5.length;
  e5 && (n2.length = t5.length);
  for (let r3 = 0; r3 < t5.length; ++r3) n2[r3] !== t5[r3] && (n2[r3] = t5[r3], e5 = true);
  return e5;
}
function g(n2, t5, e5) {
  let r3, o4;
  return e5 ? (r3 = t5.filter((t6) => !n2.some((n3) => e5(n3, t6))), o4 = n2.filter((n3) => !t5.some((t6) => e5(t6, n3)))) : (r3 = t5.filter((t6) => !n2.includes(t6)), o4 = n2.filter((n3) => !t5.includes(n3))), {
    added: r3,
    removed: o4
  };
}
function m(n2) {
  return n2 && "number" == typeof n2.length;
}
function p(n2, t5) {
  const e5 = n2.length;
  if (0 === e5) return [];
  const r3 = [];
  for (let o4 = 0; o4 < e5; o4 += t5) r3.push(n2.slice(o4, o4 + t5));
  return r3;
}
function w(n2, t5, e5) {
  const r3 = n2.length;
  let o4 = 0, l2 = r3 - 1;
  for (; o4 < l2; ) {
    const e6 = o4 + Math.floor((l2 - o4) / 2);
    t5 > n2[e6] ? o4 = e6 + 1 : l2 = e6;
  }
  const u4 = n2[o4];
  return e5 ? t5 >= n2[r3 - 1] ? -1 : u4 === t5 ? o4 : o4 - 1 : u4 === t5 ? o4 : -1;
}
function x(n2, t5, e5) {
  if (!n2 || 0 === n2.length) return;
  const r3 = n2.length - 1, o4 = n2[0];
  if (t5 <= e5(o4)) return o4;
  const l2 = n2[r3];
  if (t5 >= e5(l2)) return l2;
  let u4 = 0, f4 = 0, i4 = r3;
  for (; u4 < i4; ) {
    f4 = u4 + Math.floor((i4 - u4) / 2);
    const o5 = n2[f4], l3 = e5(o5);
    if (l3 === t5) return o5;
    if (t5 < l3) {
      if (f4 > 0) {
        const r4 = n2[f4 - 1], u5 = e5(r4);
        if (t5 > u5) return t5 - u5 >= l3 - t5 ? o5 : r4;
      }
      i4 = f4;
    } else {
      if (f4 < r3) {
        const r4 = n2[f4 + 1], u5 = e5(r4);
        if (t5 < u5) return t5 - l3 >= u5 - t5 ? r4 : o5;
      }
      u4 = f4 + 1;
    }
  }
  return n2[f4];
}
var v = class {
  constructor() {
    this.last = 0;
  }
};
var b = new v();
function y(n2, t5, e5, r3) {
  r3 = r3 || b;
  const o4 = Math.max(0, r3.last - 10);
  for (let u4 = o4; u4 < e5; ++u4) if (n2[u4] === t5) return r3.last = u4, u4;
  const l2 = Math.min(o4, e5);
  for (let u4 = 0; u4 < l2; ++u4) if (n2[u4] === t5) return r3.last = u4, u4;
  return -1;
}
function S(n2, t5, e5, r3) {
  const o4 = e5 ?? n2.length, l2 = y(n2, t5, o4, r3);
  if (-1 !== l2) return n2[l2] = n2[o4 - 1], null == e5 && n2.pop(), t5;
}
var z = /* @__PURE__ */ new Set();
function A(n2, t5, e5 = n2.length, r3 = t5.length, o4, l2) {
  if (0 === r3 || 0 === e5) return e5;
  z.clear();
  for (let f4 = 0; f4 < r3; ++f4) z.add(t5[f4]);
  o4 = o4 || b;
  const u4 = Math.max(0, o4.last - 10);
  for (let f4 = u4; f4 < e5; ++f4) if (z.has(n2[f4]) && (l2?.push(n2[f4]), z.delete(n2[f4]), n2[f4] = n2[e5 - 1], --e5, --f4, 0 === z.size || 0 === e5)) return z.clear(), e5;
  for (let f4 = 0; f4 < u4; ++f4) if (z.has(n2[f4]) && (l2?.push(n2[f4]), z.delete(n2[f4]), n2[f4] = n2[e5 - 1], --e5, --f4, 0 === z.size || 0 === e5)) return z.clear(), e5;
  return z.clear(), e5;
}
function I(n2, t5) {
  let e5 = 0;
  for (let r3 = 0; r3 < n2.length; ++r3) {
    const o4 = n2[r3];
    t5(o4, r3) && (n2[e5] = o4, e5++);
  }
  n2.length = e5;
}
function C(n2) {
  return n2 ? (G.seed = n2, () => G.getFloat()) : Math.random;
}
function F(n2, t5) {
  const e5 = C(t5);
  for (let r3 = n2.length - 1; r3 > 0; r3--) {
    const t6 = Math.floor(e5() * (r3 + 1)), o4 = n2[r3];
    n2[r3] = n2[t6], n2[t6] = o4;
  }
  return n2;
}
var G = new t();
function L(n2, t5) {
  const e5 = n2.indexOf(t5);
  return -1 !== e5 ? (n2.splice(e5, 1), t5) : null;
}
function N(n2, t5) {
  const e5 = /* @__PURE__ */ new Map(), r3 = n2.length;
  for (let o4 = 0; o4 < r3; o4++) {
    const r4 = n2[o4], l2 = t5(r4, o4, n2), u4 = e5.get(l2);
    u4 ? u4.push(r4) : e5.set(l2, [r4]);
  }
  return e5;
}
function O(n2, t5) {
  return null != n2;
}
var R = [];

// ../../../node_modules/@arcgis/core/core/byteSizeEstimations.js
function r2(r3) {
  return 32 + r3.length;
}
function n() {
  return 16;
}
function t3(t5) {
  if (!t5) return 0;
  let e5 = f2;
  for (const o4 in t5) if (t5.hasOwnProperty(o4)) {
    const u4 = t5[o4];
    switch (typeof u4) {
      case "string":
        e5 += r2(u4);
        break;
      case "number":
        e5 += n();
        break;
      case "boolean":
        e5 += 4;
    }
  }
  return e5;
}
function e3(r3) {
  if (!r3) return 0;
  if (Array.isArray(r3)) return o2(r3);
  let n2 = f2;
  for (const t5 in r3) r3.hasOwnProperty(t5) && (n2 += u2(r3[t5]));
  return n2;
}
function o2(r3) {
  const n2 = r3.length;
  if (0 === n2 || "number" == typeof r3[0]) return 32 + 8 * n2;
  let t5 = i2;
  for (let e5 = 0; e5 < n2; e5++) t5 += u2(r3[e5]);
  return t5;
}
function u2(t5) {
  switch (typeof t5) {
    case "object":
      return e3(t5);
    case "string":
      return r2(t5);
    case "number":
      return n();
    case "boolean":
      return 4;
    default:
      return 8;
  }
}
function c2(r3, n2) {
  return i2 + r3.length * n2;
}
var f2 = 32;
var i2 = 16;

// ../../../node_modules/@arcgis/core/core/typedArrayUtil.js
function t4(n2) {
  return n2 instanceof ArrayBuffer;
}
function o3(n2) {
  return "Int8Array" === n2?.constructor?.name;
}
function u3(n2) {
  return "Uint8Array" === n2?.constructor?.name;
}
function e4(n2) {
  return "Uint8ClampedArray" === n2?.constructor?.name;
}
function c3(n2) {
  return "Int16Array" === n2?.constructor?.name;
}
function i3(n2) {
  return "Uint16Array" === n2?.constructor?.name;
}
function a2(n2) {
  return "Int32Array" === n2?.constructor?.name;
}
function f3(n2) {
  return "Uint32Array" === n2?.constructor?.name;
}
function s2(n2) {
  return "Float32Array" === n2?.constructor?.name;
}
function m2(n2) {
  return "Float64Array" === n2?.constructor?.name;
}
function y2(n2) {
  return !("buffer" in n2);
}
function A2(...t5) {
  return t5.reduce((t6, o4) => t6 + (o4 ? y2(o4) ? c2(o4, n()) : o4.byteLength + p2 : 0), 0);
}
var p2 = 145;
var U = 1024;
function b2(n2) {
  return m2(n2) || s2(n2) || a2(n2) || c3(n2) || o3(n2);
}
function l(n2) {
  return m2(n2) || s2(n2);
}
function I2(n2) {
  return m2(n2) ? 179769e303 : s2(n2) ? 3402823e32 : f3(n2) ? 4294967295 : i3(n2) ? 65535 : u3(n2) || e4(n2) ? 255 : a2(n2) ? 2147483647 : c3(n2) ? 32767 : o3(n2) ? 127 : 256;
}

export {
  has,
  t,
  t2,
  e2 as e,
  r,
  o,
  u,
  c,
  s,
  h,
  a,
  g,
  m,
  p,
  w,
  x,
  v,
  y,
  S,
  A,
  I,
  F,
  L,
  N,
  O,
  R,
  r2,
  n,
  t3,
  e3 as e2,
  c2,
  t4,
  o3 as o2,
  u3 as u2,
  e4 as e3,
  c3,
  i3 as i,
  a2,
  f3 as f,
  s2,
  m2,
  y2,
  A2,
  p2,
  U,
  b2 as b,
  l,
  I2
};
//# sourceMappingURL=chunk-DXLOWWK7.js.map
