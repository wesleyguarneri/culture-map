import {
  p
} from "./chunk-BIUXKPKA.js";
import {
  e
} from "./chunk-4Z5SGKRM.js";
import {
  y
} from "./chunk-7CJXZOFG.js";
import {
  a3 as a
} from "./chunk-DDYVXG4F.js";

// ../../../node_modules/@arcgis/core/widgets/LayerList/support/layerListUtils.js
var i = {
  hide: "hide",
  hideChildren: "hide-children"
};
var n = 10;
var e2 = 2;
function t({
  exclusive: i2,
  visible: n2,
  visibilityAppearance: e3
}) {
  const t2 = "checkbox" === e3;
  return n2 ? i2 ? "circle-f" : t2 ? "check-square-f" : "view-visible" : i2 ? "circle" : t2 ? "square" : "view-hide";
}
function r({
  connectionStatus: i2,
  publishing: n2
}) {
  return i2 ? "connected" === i2 ? "beacon" : "offline" : n2 ? "square" : "bullet-point";
}
function l(n2) {
  return n2?.listMode === i.hideChildren;
}
function u(i2) {
  return i2?.listMode ?? void 0;
}
function s(i2) {
  if (!i2) return "inherited";
  const n2 = b(p2(i2) ? i2.layer : i2);
  return null != n2 ? n2 ? "independent" : "inherited" : "visibilityMode" in i2 && null != i2.visibilityMode ? i2.visibilityMode : "independent";
}
function o(i2) {
  if (i2 && (!("type" in i2) || "wmts" !== i2.type)) return "sublayers" in i2 ? "sublayers" : "layers" in i2 ? "layers" : void 0;
}
function a2(i2) {
  const n2 = (i2?.layer && p2(i2.layer) ? i2.layer.layer : void 0) ?? i2?.layer;
  return !!n2 && "catalog" !== n2.type && (h(n2) ?? true);
}
function c(n2) {
  return u(n2) !== i.hide;
}
function d(i2, n2) {
  i2?.sort((i3, e3) => {
    const t2 = "uid" in i3 ? n2.indexOf(i3.uid) : -1, r3 = "uid" in e3 ? n2.indexOf(e3.uid) : -1;
    return t2 > r3 ? -1 : t2 < r3 ? 1 : 0;
  });
}
function y2(i2, n2) {
  const e3 = i2?.layer;
  if (!e3) return;
  const t2 = o(e3);
  if (!t2) return;
  let r3;
  "layers" === t2 && "layers" in e3 ? r3 = e3.layers : "sublayers" === t2 && "sublayers" in e3 && (r3 = e3.sublayers), d(r3, n2);
}
function f(i2) {
  const n2 = i2?.layer;
  return n2 && "layers" in n2 ? n2.layers : null;
}
function p2(i2) {
  return null != i2 && "layer" in i2 && null != i2.layer;
}
function b(i2) {
  const n2 = v(i2);
  return null != n2 && "supportsSublayerVisibility" in n2 ? n2.supportsSublayerVisibility : void 0;
}
function h(i2) {
  const n2 = v(i2);
  return null != n2 && "supportsDynamicLayers" in n2 ? n2.supportsDynamicLayers : void 0;
}
function v(i2) {
  return i2 && "capabilities" in i2 && null != i2.capabilities && "exportMap" in i2.capabilities ? i2.capabilities.exportMap : void 0;
}
function x(i2) {
  return i2?.["data-item"];
}
function M(i2) {
  return i2?.getAttribute("data-layer-type");
}
function m({
  children: i2,
  error: n2,
  incompatible: e3
}) {
  return !!i2?.filter((i3) => !i3.hidden).length && !n2 && !e3;
}

// ../../../node_modules/@arcgis/core/support/actions/ActionSlider.js
var o2;
var r2 = o2 = class extends p {
  constructor(s2) {
    super(s2), this.displayValueEnabled = false, this.max = 1, this.min = 0, this.step = 0.1, this.type = "slider", this.value = null;
  }
  clone() {
    return new o2({
      active: this.active,
      className: this.className,
      disabled: this.disabled,
      id: this.id,
      indicator: this.indicator,
      title: this.title,
      visible: this.visible,
      displayValueEnabled: this.displayValueEnabled,
      max: this.max,
      min: this.min,
      step: this.step,
      value: this.value
    });
  }
};
e([y()], r2.prototype, "displayValueEnabled", void 0), e([y()], r2.prototype, "max", void 0), e([y()], r2.prototype, "min", void 0), e([y()], r2.prototype, "step", void 0), e([y()], r2.prototype, "value", void 0), r2 = o2 = e([a("esri.support.actions.ActionSlider")], r2);
var a3 = r2;

export {
  a3 as a,
  n,
  e2 as e,
  t,
  r,
  l,
  u,
  s,
  o,
  a2,
  c,
  d,
  y2 as y,
  f,
  p2 as p,
  x,
  M,
  m
};
//# sourceMappingURL=chunk-YBWOLLLC.js.map
