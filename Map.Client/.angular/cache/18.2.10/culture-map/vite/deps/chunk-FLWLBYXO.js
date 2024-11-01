import {
  c,
  i
} from "./chunk-7ZJ6P7J7.js";

// ../../../node_modules/@arcgis/core/views/support/screenUtils.js
function n(t) {
  return c(t.x, t.y);
}
function c2(e) {
  return i(e.x, e.y);
}
function i2(t, n2) {
  const c3 = (t instanceof HTMLElement ? t : t.surface)?.getBoundingClientRect();
  return c3 ? c(n2.clientX - c3.left, n2.clientY - c3.top) : c(0, 0);
}
function r(e, t) {
  return t instanceof Event ? i2(e, t) : n(t);
}
function o(e) {
  if (e instanceof Event) return true;
  if ("object" == typeof e && "type" in e) {
    switch (e.type) {
      case "click":
      case "double-click":
      case "pointer-down":
      case "pointer-drag":
      case "pointer-enter":
      case "pointer-leave":
      case "pointer-up":
      case "pointer-move":
      case "immediate-click":
      case "immediate-double-click":
      case "hold":
      case "drag":
      case "mouse-wheel":
        return true;
      default:
        return false;
    }
  }
  return false;
}

export {
  n,
  c2 as c,
  i2 as i,
  r,
  o
};
//# sourceMappingURL=chunk-FLWLBYXO.js.map
