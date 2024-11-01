import {
  e
} from "./chunk-7DA6A5LD.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/widgets/support/symbols.js
var t = Symbol("widget");
var e2 = Symbol("widget-test-data");

// ../../../node_modules/@arcgis/core/widgets/support/jsxWidgetSupport.js
var o = [];
var n = {};
var i = /* @__PURE__ */ new WeakMap();
function d(e4, t3) {
  let r = t3.children;
  if (r?.length) for (let o3 = 0; o3 < r.length; ++o3) r[o3] = d(e4, r[o3]);
  else r = o;
  const i3 = t3.vnodeSelector;
  if (f(i3)) {
    const o3 = t3.properties || n, d2 = o3.key || i3;
    return {
      vnodeSelector: "div",
      properties: {
        key: d2,
        afterCreate: s,
        afterUpdate: c,
        afterRemoved: a,
        parentWidget: e4,
        widgetConstructor: i3,
        widgetProperties: __spreadProps(__spreadValues({}, o3), {
          key: d2,
          children: r
        })
      },
      children: void 0,
      text: void 0,
      domNode: null
    };
  }
  return t3;
}
function s(r, o3, n3, {
  parentWidget: d2,
  widgetConstructor: s2,
  widgetProperties: c2
}) {
  const f2 = new s2(c2);
  f2.container = r, i.set(r, f2), f2.afterCreate?.(f2, r), d2.addHandles(e(() => a(r))), queueMicrotask(() => {
    f2[e2].projector.renderNow();
  });
}
function c(e4, t3, r, {
  widgetProperties: o3
}) {
  const n3 = i.get(e4);
  n3 && (n3.set(o3), n3.afterUpdate?.(n3, e4));
}
function a(e4) {
  const t3 = i.get(e4);
  t3 && (t3.afterRemoved?.(t3, e4), t3.destroy(), i.delete(e4));
}
function f(e4) {
  return "function" == typeof e4 && e4[t];
}

// ../../../node_modules/@arcgis/core/widgets/support/jsxFactory.js
var e3 = function(r) {
  return {
    vnodeSelector: "",
    properties: void 0,
    children: void 0,
    text: r.toString(),
    domNode: null
  };
};
var o2 = function(r, t3) {
  for (var n3 = 0, i3 = r.length; n3 < i3; n3++) {
    var d2 = r[n3];
    Array.isArray(d2) ? o2(d2, t3) : null != d2 && false !== d2 && (d2.hasOwnProperty("vnodeSelector") || (d2 = e3(d2)), t3.push(d2));
  }
};
var t2 = function(r, e4) {
  for (var t3 = [], n3 = 2; n3 < arguments.length; n3++) t3[n3 - 2] = arguments[n3];
  if (1 === t3.length && "string" == typeof t3[0]) return {
    vnodeSelector: r,
    properties: e4 || void 0,
    children: void 0,
    text: t3[0],
    domNode: null
  };
  var i3 = [];
  return o2(t3, i3), {
    vnodeSelector: r,
    properties: e4 || void 0,
    children: i3,
    text: void 0,
    domNode: null
  };
};
function n2(e4, o3, ...n3) {
  return "function" != typeof e4 || f(e4) ? t2(e4, o3, ...n3) : e4(o3, ...n3);
}
function i2(...r) {
  return r;
}

export {
  t,
  e2 as e,
  d,
  f,
  n2 as n,
  i2 as i
};
//# sourceMappingURL=chunk-K7TO5IIO.js.map
