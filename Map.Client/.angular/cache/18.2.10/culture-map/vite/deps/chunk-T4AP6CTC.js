// ../../../node_modules/@arcgis/core/renderers/visualVariables/support/sizeVariableUtils.js
var n;
var i;
function e(n2) {
  return n2 && "esri.renderers.visualVariables.SizeVariable" === n2.declaredClass;
}
function l(n2) {
  return null != n2 && !isNaN(n2) && isFinite(n2);
}
function t(i2) {
  return i2.valueExpression ? n.Expression : i2.field && "string" == typeof i2.field ? n.Field : n.Unknown;
}
function a(e2, l2) {
  const a2 = l2 || t(e2), o = e2.valueUnit || "unknown";
  return a2 === n.Unknown ? i.Constant : e2.stops ? i.Stops : null != e2.minSize && null != e2.maxSize && null != e2.minDataValue && null != e2.maxDataValue ? i.ClampedLinear : "unknown" === o ? null != e2.minSize && null != e2.minDataValue ? e2.minSize && e2.minDataValue ? i.Proportional : i.Additive : i.Identity : i.RealWorldSize;
}
!function(n2) {
  n2.Unknown = "unknown", n2.Expression = "expression", n2.Field = "field";
}(n || (n = {})), function(n2) {
  n2.Unknown = "unknown", n2.Stops = "stops", n2.ClampedLinear = "clamped-linear", n2.Proportional = "proportional", n2.Additive = "additive", n2.Constant = "constant", n2.Identity = "identity", n2.RealWorldSize = "real-world-size";
}(i || (i = {}));

export {
  n,
  i,
  e,
  l,
  t,
  a
};
//# sourceMappingURL=chunk-T4AP6CTC.js.map
