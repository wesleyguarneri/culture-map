// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/materials/lineStippleUtils.js
var t = {
  dash: [4, 3],
  dot: [1, 3],
  "long-dash": [8, 3],
  "short-dash": [4, 1],
  "short-dot": [1, 1]
};
var o = {
  dash: t.dash,
  "dash-dot": [...t.dash, ...t.dot],
  dot: t.dot,
  "long-dash": t["long-dash"],
  "long-dash-dot": [...t["long-dash"], ...t.dot],
  "long-dash-dot-dot": [...t["long-dash"], ...t.dot, ...t.dot],
  none: null,
  "short-dash": t["short-dash"],
  "short-dash-dot": [...t["short-dash"], ...t["short-dot"]],
  "short-dash-dot-dot": [...t["short-dash"], ...t["short-dot"], ...t["short-dot"]],
  "short-dot": t["short-dot"],
  solid: null
};
var d = 8;
function s(t2, o2) {
  return null == t2 ? t2 : {
    pattern: t2.slice(),
    pixelRatio: o2
  };
}
function h(t2) {
  return {
    pattern: [t2, t2],
    pixelRatio: 2
  };
}
function n(t2) {
  return null != t2 && "style" === t2.type ? l(t2.style) : null;
}
function l(t2) {
  return null != t2 ? s(o[t2], d) : null;
}

export {
  h,
  n
};
//# sourceMappingURL=chunk-APWDCJIJ.js.map
