// ../../../node_modules/@arcgis/core/layers/graphics/objectIdUtils.js
var t = 1;
function n(t2, n2) {
  let o = 0;
  for (const e of n2) {
    const n3 = e.attributes?.[t2];
    "number" == typeof n3 && isFinite(n3) && (o = Math.max(o, n3));
  }
  return o;
}

export {
  t,
  n
};
//# sourceMappingURL=chunk-DGHGAJW2.js.map
