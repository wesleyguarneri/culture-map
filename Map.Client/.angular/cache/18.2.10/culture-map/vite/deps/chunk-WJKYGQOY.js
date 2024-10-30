// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/ShaderOutput.js
var o;
function t(t2) {
  return r(t2) || t2 === o.Depth || t2 === o.Normal || t2 === o.ObjectAndLayerIdColor;
}
function r(t2) {
  return t2 === o.Shadow || t2 === o.ShadowHighlight || t2 === o.ShadowExcludeHighlight || t2 === o.ViewshedShadow;
}
function n(t2) {
  return c(t2) || t2 === o.Normal;
}
function h(t2) {
  return t2 === o.Highlight || t2 === o.ObjectAndLayerIdColor;
}
function e(t2) {
  return t2 === o.Color || h(t2);
}
function i(t2) {
  return t2 === o.Color;
}
function d(t2) {
  return i(t2) || t2 === o.ObjectAndLayerIdColor;
}
function u(t2) {
  return i(t2) || t2 === o.Highlight;
}
function l(o2) {
  return u(o2) || g(o2);
}
function a(o2) {
  return i(o2) || h(o2);
}
function c(o2) {
  return a(o2) || g(o2);
}
function g(t2) {
  return t2 === o.Depth;
}
!function(o2) {
  o2[o2.Color = 0] = "Color", o2[o2.Depth = 1] = "Depth", o2[o2.Normal = 2] = "Normal", o2[o2.Shadow = 3] = "Shadow", o2[o2.ShadowHighlight = 4] = "ShadowHighlight", o2[o2.ShadowExcludeHighlight = 5] = "ShadowExcludeHighlight", o2[o2.ViewshedShadow = 6] = "ViewshedShadow", o2[o2.Highlight = 7] = "Highlight", o2[o2.ObjectAndLayerIdColor = 8] = "ObjectAndLayerIdColor", o2[o2.COUNT = 9] = "COUNT";
}(o || (o = {}));

export {
  o,
  t,
  r,
  n,
  h,
  e,
  i,
  d,
  l,
  a,
  c,
  g
};
//# sourceMappingURL=chunk-WJKYGQOY.js.map
