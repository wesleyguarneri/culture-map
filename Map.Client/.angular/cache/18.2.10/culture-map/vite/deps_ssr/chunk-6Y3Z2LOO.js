import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  e
} from "./chunk-NXK752PZ.js";

// ../../../node_modules/@arcgis/core/layers/support/sublayerUtils.js
function e2(r, e3, n2) {
  const o2 = e3.flatten(({
    sublayers: r2
  }) => r2).length;
  if (o2 !== r.length) return true;
  return !!r.some((r2) => r2.originIdOf("minScale") > n2 || r2.originIdOf("maxScale") > n2 || r2.originIdOf("renderer") > n2 || r2.originIdOf("labelingInfo") > n2 || r2.originIdOf("opacity") > n2 || r2.originIdOf("labelsVisible") > n2 || r2.originIdOf("source") > n2) || !i(r, e3);
}
function n(e3, n2, o2) {
  return !!e3.some((e4) => {
    const n3 = e4.source, i2 = !n3 || "map-layer" === n3.type && n3.mapLayerId === e4.id && (null == n3.gdbVersion || n3.gdbVersion === o2);
    return e4.commitProperty("renderer"), e4.commitProperty("labelingInfo"), e4.commitProperty("opacity"), e4.commitProperty("labelsVisible"), !i2 || e4.originIdOf("renderer") > e.SERVICE || e4.originIdOf("labelingInfo") > e.SERVICE || e4.originIdOf("opacity") > e.SERVICE || e4.originIdOf("labelsVisible") > e.SERVICE;
  }) || !i(e3, n2);
}
function i(r, e3) {
  if (!r?.length || null == e3) return true;
  const n2 = e3.slice().reverse().flatten(({
    sublayers: r2
  }) => r2 && r2.toArray().reverse()).map((r2) => r2.id).toArray();
  if (r.length > n2.length) return false;
  let i2 = 0;
  const o2 = n2.length;
  for (const {
    id: t
  } of r) {
    for (; i2 < o2 && n2[i2] !== t; ) i2++;
    if (i2 >= o2) return false;
  }
  return true;
}
function o(r) {
  return !!r && r.some((r2) => null != r2.minScale || null != r2.layerDefinition?.minScale);
}

export {
  e2 as e,
  n,
  o
};
//# sourceMappingURL=chunk-6Y3Z2LOO.js.map
