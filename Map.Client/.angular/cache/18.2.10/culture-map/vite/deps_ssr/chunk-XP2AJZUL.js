import { createRequire } from 'module';const require = createRequire(import.meta.url);

// ../../../node_modules/@arcgis/core/layers/graphics/dehydratedPoint.js
function e(e2, n2, t, a) {
  return {
    x: e2,
    y: n2,
    z: t,
    hasZ: null != t,
    hasM: false,
    spatialReference: a,
    type: "point"
  };
}
function n(e2, n2, t, a, l) {
  e2.x = n2, e2.y = t, e2.z = a, e2.hasZ = null != a, e2.spatialReference = l;
}

export {
  e,
  n
};
//# sourceMappingURL=chunk-XP2AJZUL.js.map
