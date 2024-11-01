import {
  U,
  y2 as y
} from "./chunk-DXLOWWK7.js";

// ../../../node_modules/@arcgis/core/geometry/support/Indices.js
function t(t2) {
  if (y(t2)) {
    if (t2.length < U) return t2;
  } else if (t2.length < U) return Array.from(t2);
  let i2 = true, f2 = true;
  return t2.some((r, n) => (i2 = i2 && 0 === r, f2 = f2 && r === n, !i2 && !f2)), i2 ? A(t2.length) : f2 ? l(t2.length) : y(t2) || t2.BYTES_PER_ELEMENT !== Uint16Array.BYTES_PER_ELEMENT ? e(t2) : t2;
}
function e(n) {
  let t2 = true;
  for (const e2 of n) {
    if (e2 >= 65536) return y(n) ? new Uint32Array(n) : n;
    e2 >= 256 && (t2 = false);
  }
  return t2 ? new Uint8Array(n) : new Uint16Array(n);
}
function i(r) {
  return r <= U ? new Array(r) : r <= 65536 ? new Uint16Array(r) : new Uint32Array(r);
}
function f(r) {
  return r <= U ? new Array(r) : new Uint32Array(r);
}
var a = (() => {
  const r = new Uint32Array(131072);
  for (let n = 0; n < r.length; ++n) r[n] = n;
  return r;
})();
var u = [0];
var o = (() => {
  const r = new Uint16Array(65536);
  for (let n = 0; n < r.length; ++n) r[n] = n;
  return r;
})();
function l(r) {
  if (1 === r) return u;
  if (r < U) return Array.from(new Uint16Array(o.buffer, 0, r));
  if (r < o.length) return new Uint16Array(o.buffer, 0, r);
  if (r > a.length) {
    const n = Math.max(2 * a.length, r);
    a = new Uint32Array(n);
    for (let r2 = 0; r2 < a.length; r2++) a[r2] = r2;
  }
  return new Uint32Array(a.buffer, 0, r);
}
var y2 = new Uint8Array(65536);
function A(r) {
  if (1 === r) return u;
  if (r < U) return new Array(r).fill(0);
  if (r > y2.length) {
    const n = Math.max(2 * y2.length, r);
    y2 = new Uint8Array(n);
  }
  return new Uint8Array(y2.buffer, 0, r);
}

export {
  t,
  i,
  f,
  l,
  A
};
//# sourceMappingURL=chunk-WU7FVYT7.js.map
