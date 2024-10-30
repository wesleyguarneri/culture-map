import {
  A
} from "./chunk-3WQXHRJE.js";
import {
  p
} from "./chunk-EBLQZUPS.js";
import {
  e,
  r
} from "./chunk-IMVP5ADD.js";
import {
  u as u2
} from "./chunk-K226GFDN.js";
import {
  u
} from "./chunk-7ZJ6P7J7.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/views/3d/layers/support/layerUtils.js
function t(t2) {
  return "fill" === t2.type;
}
function e2(t2) {
  return "extrude" === t2.type;
}

// ../../../node_modules/@arcgis/core/views/3d/layers/support/edgeUtils.js
function c(e3) {
  return e3 && e3.enabled && (e2(e3) || t(e3)) && null != e3.edges;
}
function u3(e3) {
  return e3 && e3.enabled && e3.edges || null;
}
function a(e3, n) {
  return f(u3(e3), n);
}
function f(o, i) {
  if (null == o) return null;
  const s = null != o.color ? e(u2.toUnitRGBA(o.color)) : r(0, 0, 0, 0), l = u(o.size), c2 = u(o.extensionLength);
  switch (o.type) {
    case "solid":
      return g(__spreadValues({
        color: s,
        size: l,
        extensionLength: c2
      }, i));
    case "sketch":
      return p2(__spreadValues({
        color: s,
        size: l,
        extensionLength: c2
      }, i));
    default:
      return;
  }
}
function g(e3) {
  return __spreadProps(__spreadValues(__spreadValues({}, m), e3), {
    type: p.Solid
  });
}
function p2(e3) {
  return __spreadProps(__spreadValues(__spreadValues({}, d), e3), {
    type: p.Sketch
  });
}
var m = {
  color: r(0, 0, 0, 0.2),
  size: 1,
  extensionLength: 0,
  opacity: 1,
  objectTransparency: A.OPAQUE,
  hasSlicePlane: false
};
var d = {
  color: r(0, 0, 0, 0.2),
  size: 1,
  extensionLength: 0,
  opacity: 1,
  objectTransparency: A.OPAQUE,
  hasSlicePlane: false
};

export {
  c,
  a,
  f,
  g
};
//# sourceMappingURL=chunk-XCVOKQAA.js.map
