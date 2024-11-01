// ../../../node_modules/@arcgis/core/layers/support/rasterFormats/pixelRangeUtils.js
var t = 9999999e31;
var e = 2e-7;
var n = {
  u1: [0, 1],
  u2: [0, 3],
  u4: [0, 15],
  u8: [0, 255],
  s8: [-128, 127],
  u16: [0, 65535],
  s16: [-32768, 32767],
  u32: [0, 4294967295],
  s32: [-2147483648, 2147483647],
  f32: [-34028234663852886e22, 34028234663852886e22],
  f64: [-Number.MAX_VALUE, Number.MAX_VALUE],
  unknown: void 0,
  c64: void 0,
  c128: void 0
};
function s(t2) {
  return n[t2] ?? [-34028234663852886e22, 34028234663852886e22];
}
function u(t2, e2) {
  return null == t2 || null == e2 ? "s32" : t2 < 0 ? t2 >= -128 && e2 < 128 ? "s8" : t2 >= -32768 && e2 < 32768 ? "s16" : "s32" : e2 < 256 ? "u8" : e2 < 65536 ? "u16" : "u32";
}
function i(t2) {
  return (t2?.startsWith("s") || t2?.startsWith("u")) ?? false;
}
function l(n2, u2, i2) {
  if (n2.depthCount && n2.depthCount > 1) return;
  const {
    pixels: l2,
    statistics: a,
    pixelType: o
  } = n2, r = l2[0].length, c = n2.bandMasks ?? [], f = n2.mask ?? new Uint8Array(r).fill(255), b = "f32" === o || "f64" === o, h = s(o);
  let m = false;
  for (let s2 = 0; s2 < l2.length; s2++) {
    const n3 = "number" == typeof u2 ? u2 : u2[s2];
    if (null == n3) continue;
    const r2 = a?.[s2]?.minValue ?? h[0], d = a?.[s2]?.maxValue ?? h[1];
    if (r2 > n3 + Number.EPSILON || d < n3 - Number.EPSILON) continue;
    const p = c[s2] || f.slice(), M = l2[s2], N = i2?.customFloatTolerance;
    if (b && 0 !== N) {
      let s3 = N;
      s3 || (s3 = Math.abs(n3) >= t ? e * Math.abs(n3) : "f32" === o ? 2 ** -23 : Number.EPSILON);
      for (let t2 = 0; t2 < M.length; t2++) p[t2] && Math.abs(M[t2] - n3) < s3 && (M[t2] = 0, p[t2] = 0, f[t2] = 0, m = true);
    } else for (let t2 = 0; t2 < M.length; t2++) p[t2] && M[t2] === n3 && (M[t2] = 0, p[t2] = 0, f[t2] = 0, m = true);
    c[s2] = p;
  }
  m && (n2.bandMasks = n2.bandMasks || n2.pixels.length > 1 ? c : null, n2.mask = f), m && "updateStatistics" in n2 && n2.updateStatistics();
}

export {
  s,
  u,
  i,
  l
};
//# sourceMappingURL=chunk-5AUX2A3J.js.map
