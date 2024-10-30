import {
  G
} from "./chunk-AXVPJBVW.js";
import {
  l
} from "./chunk-OXEPWRM7.js";

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/materials/pbrUtils.js
function u({
  normalTexture: u2,
  metallicRoughnessTexture: n2,
  metallicFactor: r2,
  roughnessFactor: t2,
  emissiveTexture: o2,
  emissiveFactor: s,
  occlusionTexture: c
}) {
  return null == u2 && null == n2 && null == o2 && (null == s || G(s, l)) && null == c && (null == t2 || 1 === t2) && (null == r2 || 1 === r2);
}
function n({
  normalTexture: u2,
  metallicRoughnessTexture: n2,
  metallicFactor: r2,
  roughnessFactor: t2,
  emissiveTexture: o2,
  emissiveFactor: s,
  occlusionTexture: c
}) {
  return null == u2 && null == n2 && null == o2 && (null == s || G(s, l)) && null == c && (null == t2 || 1 === t2) && (null == r2 || 1 === r2 || 0 === r2);
}
var r = [1, 1, 0.5];
var t = [0, 0.6, 0.2];
var o = [0, 1, 0.2];

export {
  u,
  n,
  r,
  t,
  o
};
//# sourceMappingURL=chunk-74INNEIP.js.map
