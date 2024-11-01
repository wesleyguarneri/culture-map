import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  I,
  g
} from "./chunk-5ZLERKFB.js";
import {
  n as n3
} from "./chunk-WS7U2AGS.js";
import {
  a,
  c,
  e,
  i as i2,
  s as s2
} from "./chunk-U4NXHH3L.js";
import {
  y,
  z
} from "./chunk-NAG6YX7T.js";
import {
  u
} from "./chunk-KUBMHTYA.js";
import {
  n as n2
} from "./chunk-M5N6UHWJ.js";
import {
  i
} from "./chunk-EBCBYN6Y.js";
import {
  U,
  t3 as t
} from "./chunk-XLEC46FY.js";
import {
  n
} from "./chunk-6WGE3IUL.js";
import {
  s2 as s
} from "./chunk-6JFGZTLU.js";
import {
  has
} from "./chunk-2ZJE6ZFX.js";

// ../../../node_modules/@arcgis/core/symbols/support/svgUtils.js
var f = "http://www.w3.org/2000/svg";
var c2 = 0;
var u2 = 0;
var d = has("android");
var y2 = has("chrome") || d && d >= 4 ? "auto" : "optimizeLegibility";
var p = {
  m: 2,
  l: 2,
  h: 1,
  v: 1,
  c: 6,
  s: 4,
  q: 4,
  t: 2,
  a: 7,
  z: 0
};
var g2 = /([A-DF-Za-df-z])|([-+]?\d*[.]?\d+(?:[eE][-+]?\d+)?)/g;
var m = {};
var x = {};
var w = Math.PI;
var k = 1;
function b(t2, e2) {
  const i3 = t2 * (w / 180);
  return Math.abs(e2 * Math.sin(i3)) + Math.abs(e2 * Math.cos(i3));
}
function j(t2) {
  return t2.map((t3) => `${t3.command} ${t3.values.join(" ")}`).join(" ").trim();
}
function v(t2, i3, r, n4, o) {
  if (t2) {
    if ("circle" === t2.type) return n2("circle", {
      cx: t2.cx,
      cy: t2.cy,
      fill: i3,
      "fill-rule": "evenodd",
      r: t2.r,
      stroke: r.color,
      "stroke-dasharray": r.dashArray,
      "stroke-dashoffset": r.dashOffset,
      "stroke-linecap": r.cap,
      "stroke-linejoin": r.join,
      "stroke-miterlimit": "4",
      "stroke-width": r.width
    });
    if ("ellipse" === t2.type) return n2("ellipse", {
      cx: t2.cx,
      cy: t2.cy,
      fill: i3,
      "fill-rule": "evenodd",
      rx: t2.rx,
      ry: t2.ry,
      stroke: r.color,
      "stroke-dasharray": r.dashArray,
      "stroke-linecap": r.cap,
      "stroke-linejoin": r.join,
      "stroke-miterlimit": "4",
      "stroke-width": r.width
    });
    if ("rect" === t2.type) return n2("rect", {
      fill: i3,
      "fill-rule": "evenodd",
      height: t2.height,
      stroke: r.color,
      "stroke-dasharray": r.dashArray,
      "stroke-linecap": r.cap,
      "stroke-linejoin": r.join,
      "stroke-miterlimit": "4",
      "stroke-width": r.width,
      width: t2.width,
      x: t2.x,
      y: t2.y
    });
    if ("image" === t2.type) return n2("image", {
      alt: o || "image",
      height: t2.height,
      href: t2.src,
      preserveAspectRatio: "none",
      width: t2.width,
      x: t2.x,
      y: t2.y
    });
    if ("path" === t2.type) {
      const e2 = "string" != typeof t2.path ? j(t2.path) : t2.path;
      return n2("path", {
        d: e2,
        fill: i3,
        "fill-rule": "evenodd",
        stroke: r.color,
        "stroke-dasharray": r.dashArray,
        "stroke-linecap": r.cap,
        "stroke-linejoin": r.join,
        "stroke-miterlimit": "4",
        "stroke-width": r.width
      });
    }
    if ("text" === t2.type) return n(n4), n2("text", {
      "dominant-baseline": n4.dominantBaseline,
      fill: i3,
      "fill-rule": "evenodd",
      "font-family": n4.font.family,
      "font-size": n4.font.size,
      "font-style": n4.font.style,
      "font-variant": n4.font.variant,
      "font-weight": n4.font.weight,
      kerning: n4.kerning,
      rotate: n4.rotate,
      stroke: r.color,
      "stroke-dasharray": r.dashArray,
      "stroke-linecap": r.cap,
      "stroke-linejoin": r.join,
      "stroke-miterlimit": "4",
      "stroke-width": r.width,
      "text-anchor": n4.align,
      "text-decoration": n4.decoration,
      "text-rendering": y2,
      x: t2.x,
      y: t2.y
    }, t2.text);
  }
  return null;
}
function M(e2) {
  const i3 = {
    fill: "none",
    pattern: null,
    linearGradient: null
  };
  if (e2) {
    if ("type" in e2 && "pattern" === e2.type) {
      const t2 = "patternId-" + ++c2;
      i3.fill = `url(#${t2})`, i3.pattern = {
        id: t2,
        x: e2.x,
        y: e2.y,
        width: e2.width,
        height: e2.height,
        image: {
          x: 0,
          y: 0,
          width: e2.width,
          height: e2.height,
          href: e2.src
        }
      };
    } else if ("type" in e2 && "linear" === e2.type) {
      const r = "linearGradientId-" + ++u2;
      i3.fill = `url(#${r})`, i3.linearGradient = {
        id: r,
        x1: e2.x1,
        y1: e2.y1,
        x2: e2.x2,
        y2: e2.y2,
        stops: e2.colors.map((e3) => ({
          offset: e3.offset,
          color: e3.color && new u(e3.color).toString()
        }))
      };
    } else if (e2) {
      const r = new u(e2);
      i3.fill = r.toString();
    }
  }
  return i3;
}
function A(e2) {
  const i3 = {
    color: "none",
    width: 1,
    cap: "butt",
    join: "4",
    dashArray: "none",
    dashOffset: "0"
  };
  return e2 && (null != e2.width && (i3.width = e2.width), e2.cap && (i3.cap = e2.cap), e2.join && (i3.join = e2.join.toString()), e2.color && (i3.color = new u(e2.color).toString()), e2.dashArray && (i3.dashArray = e2.dashArray), e2.dashoffset && (i3.dashOffset = e2.dashoffset), e2.style && !e2.dashArray && (i3.dashArray = g(e2).join(",") || "none")), i3;
}
function S(t2, i3) {
  const r = {
    align: null,
    decoration: null,
    kerning: null,
    rotate: null,
    font: {
      style: null,
      variant: null,
      weight: null,
      size: null,
      family: null
    }
  };
  if (t2) {
    const n4 = t2.alignBaseline, o = "baseline" === n4 ? "auto" : "top" === n4 ? "text-top" : "bottom" === n4 ? "hanging" : n4;
    r.align = t2.align, r.dominantBaseline = o, r.decoration = t2.decoration, r.kerning = t2.kerning ? "auto" : "0", r.rotate = t2.rotated ? "90" : "0", n(i3), r.font.style = i3.style || "normal", r.font.variant = i3.variant || "normal", r.font.weight = i3.weight || "normal", r.font.size = i3.size && i3.size.toString() || "10pt", r.font.family = i3.family || "serif";
  }
  return r;
}
function $(t2) {
  const {
    pattern: e2,
    linearGradient: i3
  } = t2;
  if (e2) return n2("pattern", {
    height: e2.height,
    id: e2.id,
    patternUnits: "userSpaceOnUse",
    width: e2.width,
    x: e2.x,
    y: e2.y
  }, n2("image", {
    height: e2.image.height,
    href: e2.image.href,
    width: e2.image.width,
    x: e2.image.x,
    y: e2.image.y
  }));
  if (i3) {
    const t3 = i3.stops.map((t4, e3) => n2("stop", {
      key: `${e3}-stop`,
      offset: t4.offset,
      "stop-color": t4.color
    }));
    return n2("linearGradient", {
      gradientUnits: "userSpaceOnUse",
      id: i3.id,
      x1: i3.x1,
      x2: i3.x2,
      y1: i3.y1,
      y2: i3.y2
    }, t3);
  }
  return null;
}
function N(t2, e2) {
  if (!t2 || 0 === t2.length) return null;
  const i3 = [];
  for (const r of t2) {
    const {
      shape: t3,
      fill: e3,
      stroke: n4,
      font: o
    } = r, s4 = M(e3), a2 = A(n4), l2 = "text" === t3.type ? S(t3, o) : null, h2 = v(t3, s4.fill, a2, l2);
    h2 && i3.push(h2);
  }
  return n2("mask", {
    id: e2,
    maskUnits: "userSpaceOnUse"
  }, n2("g", null, i3));
}
function G(t2, e2, i3) {
  return i2(t2, a(t2), [e2, i3]);
}
function I2(t2, e2, i3, r, n4) {
  return c(t2, a(t2), [e2, i3]), t2[4] = t2[4] * e2 - r * e2 + r, t2[5] = t2[5] * i3 - n4 * i3 + n4, t2;
}
function z2(t2, e2, i3, r) {
  const n4 = e2 % 360 * Math.PI / 180;
  s2(t2, a(t2), n4);
  const s4 = Math.cos(n4), l2 = Math.sin(n4), h2 = t2[4], f3 = t2[5];
  return t2[4] = h2 * s4 - f3 * l2 + r * l2 - i3 * s4 + i3, t2[5] = f3 * s4 + h2 * l2 - i3 * l2 - r * s4 + r, t2;
}
function B(t2, e2) {
  m && "left" in m ? (null != m.left && m.left > t2 && (m.left = t2), (null == m.right || m.right < t2) && (m.right = t2), (null == m.top || m.top > e2) && (m.top = e2), (null == m.bottom || m.bottom < e2) && (m.bottom = e2)) : m = {
    left: t2,
    bottom: e2,
    right: t2,
    top: e2
  };
}
function U2(t2) {
  const e2 = t2.args, i3 = e2.length;
  let r;
  switch (t2.action) {
    case "M":
    case "L":
    case "C":
    case "S":
    case "Q":
    case "T":
      for (r = 0; r < i3; r += 2) B(e2[r], e2[r + 1]);
      x.x = e2[i3 - 2], x.y = e2[i3 - 1];
      break;
    case "H":
      for (r = 0; r < i3; ++r) B(e2[r], x.y);
      x.x = e2[i3 - 1];
      break;
    case "V":
      for (r = 0; r < i3; ++r) B(x.x, e2[r]);
      x.y = e2[i3 - 1];
      break;
    case "m": {
      let t3 = 0;
      "x" in x || (B(x.x = e2[0], x.y = e2[1]), t3 = 2);
      for (r = t3; r < i3; r += 2) B(x.x += e2[r], x.y += e2[r + 1]);
      break;
    }
    case "l":
    case "t":
      for (r = 0; r < i3; r += 2) B(x.x += e2[r], x.y += e2[r + 1]);
      break;
    case "h":
      for (r = 0; r < i3; ++r) B(x.x += e2[r], x.y);
      break;
    case "v":
      for (r = 0; r < i3; ++r) B(x.x, x.y += e2[r]);
      break;
    case "c":
      for (r = 0; r < i3; r += 6) B(x.x + e2[r], x.y + e2[r + 1]), B(x.x + e2[r + 2], x.y + e2[r + 3]), B(x.x += e2[r + 4], x.y += e2[r + 5]);
      break;
    case "s":
    case "q":
      for (r = 0; r < i3; r += 4) B(x.x + e2[r], x.y + e2[r + 1]), B(x.x += e2[r + 2], x.y += e2[r + 3]);
      break;
    case "A":
      for (r = 0; r < i3; r += 7) B(e2[r + 5], e2[r + 6]);
      x.x = e2[i3 - 2], x.y = e2[i3 - 1];
      break;
    case "a":
      for (r = 0; r < i3; r += 7) B(x.x += e2[r + 5], x.y += e2[r + 6]);
  }
}
function F(t2, e2, i3) {
  const r = p[t2.toLowerCase()];
  let n4;
  "number" == typeof r && (r ? e2.length >= r && (n4 = {
    action: t2,
    args: e2.slice(0, e2.length - e2.length % r)
  }, i3.push(n4), U2(n4)) : (n4 = {
    action: t2,
    args: []
  }, i3.push(n4), U2(n4)));
}
function O(t2) {
  const e2 = ("string" != typeof t2.path ? j(t2.path) : t2.path).match(g2), i3 = [];
  if (m = {}, x = {}, !e2) return null;
  let r = "", n4 = [];
  const o = e2.length;
  for (let a2 = 0; a2 < o; ++a2) {
    const t3 = e2[a2], o2 = parseFloat(t3);
    isNaN(o2) ? (r && F(r, n4, i3), n4 = [], r = t3) : n4.push(o2);
  }
  F(r, n4, i3);
  const s4 = {
    x: 0,
    y: 0,
    width: 0,
    height: 0
  };
  return m && "left" in m && (s4.x = m.left, s4.y = m.top, s4.width = m.right - m.left, s4.height = m.bottom - m.top), s4;
}
function T(t2) {
  const e2 = {
    x: 0,
    y: 0,
    width: 0,
    height: 0
  };
  if ("circle" === t2.type) e2.x = t2.cx - t2.r, e2.y = t2.cy - t2.r, e2.width = 2 * t2.r, e2.height = 2 * t2.r;
  else if ("ellipse" === t2.type) e2.x = t2.cx - t2.rx, e2.y = t2.cy - t2.ry, e2.width = 2 * t2.rx, e2.height = 2 * t2.ry;
  else if ("image" === t2.type || "rect" === t2.type) e2.x = t2.x, e2.y = t2.y, e2.width = t2.width, e2.height = t2.height;
  else if ("path" === t2.type) {
    const i3 = O(t2);
    e2.x = i3.x, e2.y = i3.y, e2.width = i3.width, e2.height = i3.height;
  }
  return e2;
}
function E(t2) {
  const e2 = {
    x: 0,
    y: 0,
    width: 0,
    height: 0
  };
  let i3 = null, r = Number.NEGATIVE_INFINITY, n4 = Number.NEGATIVE_INFINITY;
  for (const o of t2) i3 ? (i3.x = Math.min(i3.x, o.x), i3.y = Math.min(i3.y, o.y), r = Math.max(r, o.x + o.width), n4 = Math.max(n4, o.y + o.height)) : (i3 = e2, i3.x = o.x, i3.y = o.y, r = o.x + o.width, n4 = o.y + o.height);
  return i3 && (i3.width = r - i3.x, i3.height = n4 - i3.y), i3;
}
function L(t2, e2, n4, o, s4, a2, l2, h2, f3) {
  let c3 = (l2 && a2 ? b(a2, e2) : e2) / 2, u4 = (l2 && a2 ? b(a2, n4) : n4) / 2;
  if (f3) {
    const t3 = f3[0], e3 = f3[1];
    c3 = (l2 && a2 ? b(a2, t3) : t3) / 2, u4 = (l2 && a2 ? b(a2, e3) : e3) / 2;
  }
  const d3 = t2.width + o, y3 = t2.height + o, p2 = n3(), g4 = n3();
  let m3 = false;
  if (s4 && 0 !== d3 && 0 !== y3) {
    const t3 = e2 !== n4 ? e2 / n4 : d3 / y3, i3 = e2 > n4 ? e2 : n4;
    let o2 = 1, s5 = 1;
    isNaN(i3) || (t3 > 1 ? (o2 = i3 / d3, s5 = i3 / t3 / y3) : (s5 = i3 / y3, o2 = i3 * t3 / d3)), e(g4, g4, I2(p2, o2, s5, c3, u4)), m3 = true;
  }
  const x2 = t2.x + (d3 - o) / 2, w2 = t2.y + (y3 - o) / 2;
  if (e(g4, g4, G(p2, c3 - x2, u4 - w2)), !m3 && (d3 > e2 || y3 > n4)) {
    const t3 = d3 / e2 > y3 / n4, i3 = (t3 ? e2 : n4) / (t3 ? d3 : y3);
    e(g4, g4, I2(p2, i3, i3, x2, w2));
  }
  return a2 && e(g4, g4, z2(p2, a2, x2, w2)), h2 && e(g4, g4, G(p2, h2[0], h2[1])), `matrix(${g4[0]},${g4[1]},${g4[2]},${g4[3]},${g4[4]},${g4[5]})`;
}
function V(t2, e2, i3) {
  const r = t2?.effects.find((t3) => "bloom" === t3.type);
  if (!r) return null;
  const {
    strength: n4,
    radius: o
  } = r, s4 = n4 > 0 ? o : 0, a2 = (n4 + s4) * e2, l2 = 4 * n4 + 1;
  return n2("filter", {
    filterUnits: "userSpaceOnUse",
    height: "300%",
    id: `bloom${i3}`,
    width: "300%",
    x: "-100%",
    y: "-100%"
  }, n2("feMorphology", {
    in: "SourceGraphic",
    operator: "dilate",
    radius: (n4 + 0.5 * s4) * (5 ** (e2 / 100) * (0.4 + e2 / 100)),
    result: "dilate"
  }), n2("feGaussianBlur", {
    in: "dilate",
    result: "blur",
    stdDeviation: a2 / 25
  }), n2("feGaussianBlur", {
    in: "blur",
    result: "intensityBlur",
    stdDeviation: a2 / 50
  }), n2("feComponentTransfer", {
    in: "SourceGraphic",
    result: "intensityBrightness"
  }, n2("feFuncR", {
    slope: l2,
    type: "linear"
  }), n2("feFuncG", {
    slope: l2,
    type: "linear"
  }), n2("feFuncB", {
    slope: l2,
    type: "linear"
  })), n2("feMerge", null, n2("feMergeNode", {
    in: "intensityBlur"
  }), n2("feMergeNode", {
    in: "intensityBrightness"
  }), n2("feGaussianBlur", {
    stdDeviation: n4 / 10
  })));
}
function C(t2, i3, r, n4 = {}) {
  const o = [], s4 = [], a2 = ++k, l2 = V(n4.effectView, i3, a2);
  let c3 = null;
  if (l2) {
    const t3 = n4.effectView?.effects.find((t4) => "bloom" === t4.type), e2 = (t3.strength ? t3.strength + t3.radius / 2 : 0) / 3, o2 = i3 + i3 * e2, s5 = r + r * e2;
    c3 = [Math.max(o2, 10), Math.max(s5, 10)];
  }
  for (let e2 = 0; e2 < t2.length; e2++) {
    const a3 = t2[e2], l3 = [], f3 = [];
    let u5 = 0, d3 = 0, y3 = 0;
    for (const t3 of a3) {
      const {
        shape: e3,
        fill: i4,
        stroke: r2,
        font: s5,
        offset: a4
      } = t3;
      n4.ignoreStrokeWidth || "text" === e3.type || (u5 += r2?.width || 0);
      const h2 = M(i4), c4 = A(r2), p3 = "text" === e3.type ? S(e3, s5) : null;
      o.push($(h2)), l3.push(v(e3, h2.fill, c4, p3, n4.ariaLabel)), f3.push(T(e3)), a4 && (d3 += a4[0], y3 += a4[1]);
    }
    const p2 = L(E(f3), i3, r, u5, n4.scale ?? false, n4.rotation, n4.useRotationSize ?? false, [d3, y3], c3);
    let g4 = null;
    if (n4.masking) {
      const t3 = `mask-${e2}`, i4 = n4.masking[e2];
      o.push(N(i4, t3)), g4 = `url(#${t3})`;
    }
    s4.push(g4 ? n2("g", {
      mask: g4
    }, n2("g", {
      transform: p2
    }, l3)) : n2("g", {
      transform: p2
    }, l3));
  }
  n4.useRotationSize && n4.rotation && (i3 = b(n4.rotation, i3), r = b(n4.rotation, r)), l2 && (n(c3), i3 = c3[0], r = c3[1]);
  const u4 = "display: block;";
  return n2("svg", {
    "aria-label": n4.ariaLabel,
    focusable: false,
    height: r,
    role: "img",
    style: u4,
    width: i3,
    xmlns: f
  }, l2, n2("defs", null, o), l2 ? n2("g", {
    filter: `url(#bloom${a2})`
  }, s4) : s4);
}

// ../../../node_modules/@arcgis/core/symbols/support/renderUtils.js
var s3 = i();
function h(t2, e2) {
  s3.append(t2, e2), s3.detach(e2);
}
function l(t2, e2, i3) {
  const r = Math.ceil(e2[0]), n4 = Math.ceil(e2[1]);
  if (!t2.some((t3) => !!t3.length)) return null;
  const o = i3?.node || document.createElement("div");
  null != i3.opacity && (o.style.opacity = i3.opacity.toString()), null != i3.effectView && (o.style.filter = I(i3.effectView));
  return h(o, () => C(t2, r, n4, i3)), o;
}
function m2(t2, e2) {
  t2 = Math.ceil(t2), e2 = Math.ceil(e2);
  const i3 = document.createElement("canvas");
  i3.width = t2, i3.height = e2, i3.style.width = t2 + "px", i3.style.height = e2 + "px";
  const r = i3.getContext("2d");
  return r.clearRect(0, 0, t2, e2), r;
}
function g3(t2, i3, r) {
  return t2 ? U(t2, {
    responseType: "image"
  }).then((t3) => {
    const e2 = t3.data, n4 = e2.width, o = e2.height, a2 = n4 / o;
    let c3 = i3;
    if (r) {
      const t4 = Math.max(n4, o);
      c3 = Math.min(c3, t4);
    }
    return {
      image: e2,
      width: a2 <= 1 ? Math.ceil(c3 * a2) : c3,
      height: a2 <= 1 ? c3 : Math.ceil(c3 / a2)
    };
  }) : Promise.reject(new s("renderUtils: imageDataSize", "href not provided."));
}
function u3(t2, e2) {
  return !(!t2 || "ignore" === e2) && ("multiply" !== e2 || 255 !== t2.r || 255 !== t2.g || 255 !== t2.b || 1 !== t2.a);
}
function f2(t2, e2, n4, o, a2) {
  switch (a2) {
    case "multiply":
      t2[e2] *= n4[0], t2[e2 + 1] *= n4[1], t2[e2 + 2] *= n4[2], t2[e2 + 3] *= n4[3];
      break;
    default: {
      const a3 = z({
        r: t2[e2],
        g: t2[e2 + 1],
        b: t2[e2 + 2]
      });
      a3.h = o.h, a3.s = o.s, a3.v = a3.v / 100 * o.v;
      const c3 = y(a3);
      t2[e2] = c3.r, t2[e2 + 1] = c3.g, t2[e2 + 2] = c3.b, t2[e2 + 3] *= n4[3];
      break;
    }
  }
}
function d2(e2, r, n4, o, a2) {
  return g3(e2, r, a2).then((a3) => {
    const c3 = a3.width ?? r, s4 = a3.height ?? r;
    if (a3.image && u3(n4, o)) {
      let t2 = a3.image.width, r2 = a3.image.height;
      has("edge") && /\.svg$/i.test(e2) && (t2 -= 1, r2 -= 1);
      const h2 = m2(c3, s4);
      h2.drawImage(a3.image, 0, 0, t2, r2, 0, 0, c3, s4);
      const l2 = h2.getImageData(0, 0, c3, s4), g4 = [n4.r / 255, n4.g / 255, n4.b / 255, n4.a], u4 = z(n4);
      for (let e3 = 0; e3 < l2.data.length; e3 += 4) f2(l2.data, e3, g4, u4, o);
      h2.putImageData(l2, 0, 0), e2 = h2.canvas.toDataURL("image/png");
    } else {
      const i3 = t?.findCredential(e2);
      if (i3?.token) {
        const t2 = e2.includes("?") ? "&" : "?";
        e2 = `${e2}${t2}token=${i3.token}`;
      }
    }
    return {
      url: e2,
      width: c3,
      height: s4
    };
  }).catch(() => ({
    url: e2,
    width: r,
    height: r
  }));
}

export {
  v,
  M,
  A,
  $,
  T,
  E,
  L,
  C,
  l,
  d2 as d
};
//# sourceMappingURL=chunk-TZTWNLH5.js.map
