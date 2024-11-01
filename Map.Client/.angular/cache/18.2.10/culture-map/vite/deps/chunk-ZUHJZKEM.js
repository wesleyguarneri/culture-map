import {
  C
} from "./chunk-B4EEJXBQ.js";
import {
  e as e2
} from "./chunk-PQ4T66BG.js";
import {
  S,
  l,
  x
} from "./chunk-634JLXD4.js";
import {
  i
} from "./chunk-V5RMUGJJ.js";
import {
  u as u2
} from "./chunk-K226GFDN.js";
import {
  e,
  u
} from "./chunk-7ZJ6P7J7.js";
import {
  _
} from "./chunk-OXEPWRM7.js";
import {
  n
} from "./chunk-PRREDSOB.js";
import {
  U
} from "./chunk-SYATLP3H.js";
import {
  a
} from "./chunk-XNUH25NY.js";
import {
  __async
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/symbols/support/gfxUtils.js
var i2 = "picture-fill";
var a2 = "simple-fill";
var l2 = "simple-line";
var c = "simple-marker";
var h = "text";
var d = "cim";
var m = /* @__PURE__ */ new Map([["dash", [4, 3]], ["dashdot", [4, 3, 1, 3]], ["dot", [1, 3]], ["longdash", [8, 3]], ["longdashdot", [8, 3, 1, 3]], ["longdashdotdot", [8, 3, 1, 3, 1, 3]], ["shortdash", [4, 1]], ["shortdashdot", [4, 1, 1, 1]], ["shortdashdotdot", [4, 1, 1, 1, 1, 1]], ["shortdot", [1, 1]], ["solid", []]]);
var p = new e2(1e3);
function u3(e3) {
  const o = e3.style;
  let s = null;
  if (e3) switch (e3.type) {
    case c:
      "cross" !== o && "x" !== o && (s = e3.color);
      break;
    case a2:
      o && "solid" !== o ? "none" !== o && (s = {
        type: "pattern",
        x: 0,
        y: 0,
        src: n(`esri/symbols/patterns/${o}.png`),
        width: 5,
        height: 5
      }) : s = e3.color;
      break;
    case i2:
      s = {
        type: "pattern",
        src: e3.url,
        width: u(e3.width) * e3.xscale,
        height: u(e3.height) * e3.yscale,
        x: u(e3.xoffset),
        y: u(e3.yoffset)
      };
      break;
    case h:
      s = e3.color;
      break;
    case d:
      s = C(e3);
  }
  return s;
}
function f(t, e3) {
  const s = t + "-" + e3;
  return void 0 !== p.get(s) ? Promise.resolve(p.get(s)) : U(t, {
    responseType: "image"
  }).then((t2) => {
    const o = t2.data, r = o.naturalWidth, n2 = o.naturalHeight, i3 = document.createElement("canvas");
    i3.width = r, i3.height = n2;
    const a4 = i3.getContext("2d");
    a4.fillStyle = e3, a4.fillRect(0, 0, r, n2), a4.globalCompositeOperation = "destination-in", a4.drawImage(o, 0, 0);
    const l3 = i3.toDataURL();
    return p.put(s, l3), l3;
  });
}
function y(t) {
  if (!t) return null;
  let e3 = null;
  switch (t.type) {
    case a2:
    case i2:
    case c:
      e3 = y(t.outline);
      break;
    case l2: {
      const o = u(t.width);
      null != t.style && "none" !== t.style && 0 !== o && (e3 = {
        color: t.color,
        style: w(t.style),
        width: o,
        cap: t.cap,
        join: "miter" === t.join ? u(t.miterLimit) : t.join
      }, e3.dashArray = g(e3).join(",") || "none");
      break;
    }
    default:
      e3 = null;
  }
  return e3;
}
function g(t) {
  if (!t?.style) return [];
  const {
    dashArray: e3,
    style: o,
    width: s
  } = t;
  if ("string" == typeof e3 && "none" !== e3) return e3.split(",").map((t2) => Number(t2));
  const r = s ?? 0, n2 = m.has(o) ? m.get(o).map((t2) => t2 * r) : [];
  if ("butt" !== t.cap) for (const [i3, a4] of n2.entries()) n2[i3] = i3 % 2 == 1 ? a4 + r : Math.max(a4 - r, 1);
  return n2;
}
var w = /* @__PURE__ */ (() => {
  const t = {};
  return (e3) => {
    if (t[e3]) return t[e3];
    const o = e3.replaceAll("-", "");
    return t[e3] = o, o;
  };
})();
var b = new u2([128, 128, 128]);

// ../../../node_modules/@arcgis/core/symbols/support/utils.js
var a3 = new u2("white");
function f2(e3) {
  const t = e3.symbolLayers?.at(-1);
  if (t && "outline" in t) return t?.outline?.size;
}
function m2(e3) {
  if (!e3) return 0;
  if (x(e3)) {
    const t = f2(e3);
    return null != t ? t : 0;
  }
  return e(y(e3)?.width);
}
function y2(e3) {
  if (null == e3 || !("symbolLayers" in e3) || null == e3.symbolLayers) return false;
  switch (e3.type) {
    case "point-3d":
      return e3.symbolLayers.some((e4) => "object" === e4.type);
    case "line-3d":
      return e3.symbolLayers.some((e4) => "path" === e4.type);
    case "polygon-3d":
      return e3.symbolLayers.some((e4) => "object" === e4.type || "extrude" === e4.type);
    default:
      return false;
  }
}
function p2(e3) {
  return e3.resource?.href ?? "";
}
function h2(r, n2) {
  if (!r) return null;
  let l3 = null;
  return x(r) ? l3 = b2(r) : S(r) && (l3 = "cim" === r.type ? C(r) : r.color ? new u2(r.color) : null), l3 ? w2(l3, n2) : null;
}
function b2(t) {
  const o = t.symbolLayers;
  if (!o) return null;
  let r = null;
  return o.forEach((e3) => {
    "object" === e3.type && e3.resource?.href || (r = "water" === e3.type ? e3.color : e3.material ? e3.material.color : null);
  }), r ? new u2(r) : null;
}
function w2(t, o) {
  if (null == o || null == t) return t;
  const r = t.toRgba();
  return r[3] = r[3] * o, new u2(r);
}
function d2(e3, t, o) {
  const r = e3.symbolLayers;
  if (!r) return;
  const n2 = (e4) => w2(t = t ?? e4 ?? (null != o ? a3 : null), o);
  r.forEach((e4) => {
    if ("object" !== e4.type || !e4.resource?.href || t) if ("water" === e4.type) e4.color = n2(e4.color);
    else {
      const t2 = null != e4.material ? e4.material.color : null, r2 = n2(t2);
      null == e4.material ? e4.material = new l({
        color: r2
      }) : e4.material.color = r2, null != o && "outline" in e4 && null != e4.outline?.color && (e4.outline.color = w2(e4.outline.color, o));
    }
  });
}
function j(e3, t, o) {
  (t = t ?? e3.color) && (e3.color = w2(t, o)), null != o && "outline" in e3 && e3.outline?.color && (e3.outline.color = w2(e3.outline.color, o));
}
function g2(r, n2, l3) {
  r && (n2 || null != l3) && (n2 && (n2 = new u2(n2)), x(r) ? d2(r, n2, l3) : S(r) && j(r, n2, l3));
}
function k(e3, t) {
  return __async(this, null, function* () {
    const o = e3.symbolLayers;
    o && (yield a(o, (e4) => __async(this, null, function* () {
      return L(e4, t);
    })));
  });
}
function L(e3, t) {
  return __async(this, null, function* () {
    switch (e3.type) {
      case "extrude":
        x2(e3, t);
        break;
      case "icon":
      case "line":
      case "text":
        z(e3, t);
        break;
      case "path":
        v(e3, t);
        break;
      case "object":
        yield U2(e3, t);
    }
  });
}
function z(e3, t) {
  const o = S2(t);
  null != o && (e3.size = o);
}
function S2(e3) {
  for (const t of e3) if ("number" == typeof t) return t;
  return null;
}
function x2(e3, t) {
  e3.size = "number" == typeof t[2] ? t[2] : 0;
}
function U2(e3, t) {
  return __async(this, null, function* () {
    const {
      resourceSize: o,
      symbolSize: r
    } = yield C2(e3), n2 = E(t, o, r);
    e3.width = M(t[0], r[0], o[0], n2), e3.depth = M(t[1], r[1], o[1], n2), e3.height = M(t[2], r[2], o[2], n2);
  });
}
function v(e3, t) {
  const o = E(t, _, [e3.width, void 0, e3.height]);
  e3.width = M(t[0], e3.width, 1, o), e3.height = M(t[2], e3.height, 1, o);
}
function E(e3, t, o) {
  for (let r = 0; r < 3; r++) {
    const n2 = e3[r];
    switch (n2) {
      case "symbol-value": {
        const e4 = o[r];
        return null != e4 ? e4 / t[r] : 1;
      }
      case "proportional":
        break;
      default:
        if (n2 && t[r]) return n2 / t[r];
    }
  }
  return 1;
}
function C2(e3) {
  return __async(this, null, function* () {
    const {
      computeObjectLayerResourceSize: t
    } = yield import("./symbolLayerUtils-HMNN5P2J.js"), o = yield t(e3, 10), {
      width: r,
      height: n2,
      depth: l3
    } = e3, i3 = [r, l3, n2];
    let c2 = 1;
    for (let s = 0; s < 3; s++) {
      const e4 = i3[s];
      if (null != e4) {
        c2 = e4 / o[s];
        break;
      }
    }
    for (let s = 0; s < 3; s++) null == i3[s] && (i3[s] = o[s] * c2);
    return {
      resourceSize: o,
      symbolSize: i3
    };
  });
}
function M(e3, t, o, r) {
  switch (e3) {
    case "proportional":
      return o * r;
    case "symbol-value":
      return null != t ? t : o;
    default:
      return e3;
  }
}
function O(e3, t) {
  const o = S2(t);
  if (null != o) switch (e3.type) {
    case "simple-marker":
      e3.size = o;
      break;
    case "picture-marker": {
      const t2 = e3.width / e3.height;
      t2 > 1 ? (e3.width = o, e3.height = o * t2) : (e3.width = o * t2, e3.height = o);
      break;
    }
    case "simple-line":
      e3.width = o;
      break;
    case "text":
      e3.font.size = o;
  }
}
function R(e3, r) {
  return __async(this, null, function* () {
    if (e3 && r) return x(e3) ? k(e3, r) : void (S(e3) && O(e3, r));
  });
}
function D(e3, r, n2) {
  if (e3 && null != r) if (x(e3)) {
    const t = e3.symbolLayers;
    t && t.forEach((e4) => {
      if (e4 && "object" === e4.type) switch (n2) {
        case "tilt":
          e4.tilt = (e4.tilt ?? 0) + r;
          break;
        case "roll":
          e4.roll = (e4.roll ?? 0) + r;
          break;
        default:
          e4.heading = (e4.heading ?? 0) + r;
      }
    });
  } else S(e3) && ("simple-marker" !== e3.type && "picture-marker" !== e3.type && "text" !== e3.type || (e3.angle += r));
}
function I(e3) {
  if (!e3) return null;
  const t = e3.effects.filter((e4) => "bloom" !== e4.type).map((e4) => e4.toJSON());
  return i(t);
}
function J(e3) {
  return null != e3 && "polygon-3d" === e3.type && e3.symbolLayers.some((e4) => "extrude" === e4.type);
}
function N(e3, t) {
  return __async(this, null, function* () {
    const o = yield e3.fetchSymbol(t);
    return o || e3.fetchCIMSymbol(t);
  });
}

export {
  u3 as u,
  f,
  y,
  g,
  w,
  b,
  m2 as m,
  y2,
  p2 as p,
  h2 as h,
  g2,
  R,
  D,
  I,
  J,
  N
};
//# sourceMappingURL=chunk-ZUHJZKEM.js.map
