import { createRequire } from 'module';const require = createRequire(import.meta.url);

// ../../../node_modules/@arcgis/core/chunks/vec33.js
function e(e2, f2) {
  t(e2.typedBuffer, f2.typedBuffer, e2.typedBufferStride, f2.typedBufferStride);
}
function t(e2, t2, f2 = 3, o2 = f2) {
  const r = t2.length / o2;
  let n = 0, u = 0;
  for (let c = 0; c < r; ++c) e2[n] = t2[u], e2[n + 1] = t2[u + 1], e2[n + 2] = t2[u + 2], n += f2, u += o2;
}
function f(e2, t2, f2, o2, r) {
  const n = e2.typedBuffer, u = e2.typedBufferStride, c = r?.count ?? e2.count;
  let d = (r?.dstIndex ?? 0) * u;
  for (let l = 0; l < c; ++l) n[d] = t2, n[d + 1] = f2, n[d + 2] = o2, d += u;
}
var o = Object.freeze(Object.defineProperty({
  __proto__: null,
  copy: t,
  copyView: e,
  fill: f
}, Symbol.toStringTag, {
  value: "Module"
}));

export {
  e,
  t,
  f
};
//# sourceMappingURL=chunk-A2RMQRQR.js.map
