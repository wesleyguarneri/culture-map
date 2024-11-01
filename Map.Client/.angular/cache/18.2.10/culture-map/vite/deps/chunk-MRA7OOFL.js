import {
  d as d2,
  l as l2
} from "./chunk-OOVP3XBH.js";
import {
  L,
  c,
  e,
  h,
  l,
  m,
  n as n3,
  o,
  p as p2,
  s as s2,
  t,
  u as u2
} from "./chunk-AHCFNSHV.js";
import {
  b,
  f,
  p,
  w,
  y2
} from "./chunk-ZUHJZKEM.js";
import {
  g
} from "./chunk-JDUU4ZDX.js";
import {
  y,
  z
} from "./chunk-TCPN7AEH.js";
import {
  d2 as d,
  j
} from "./chunk-634JLXD4.js";
import {
  u
} from "./chunk-7ZJ6P7J7.js";
import {
  n as n2
} from "./chunk-PRREDSOB.js";
import {
  n2 as n,
  s2 as s
} from "./chunk-WYIDUUN2.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/symbols/support/previewSymbol3D.js
var P = t.size;
var D = t.maxSize;
var U = t.maxOutlineSize;
var O = t.lineWidth;
var C = t.tallSymbolWidth;
function R(e2) {
  const t2 = e2.outline, l3 = null != e2.material ? e2.material.color : null, a = null != l3 ? l3.toHex() : null;
  if (null == t2 || "pattern" in t2 && null != t2.pattern && "style" === t2.pattern.type && "none" === t2.pattern.style) return "fill" === e2.type && "#ffffff" === a ? {
    color: "#bdc3c7",
    width: 0.75
  } : null;
  const s3 = u(t2.size) || 0;
  return {
    color: "rgba(" + (null != t2.color ? t2.color.toRgba() : "255,255,255,1") + ")",
    width: Math.min(s3, U),
    style: "pattern" in t2 && null != t2.pattern && "style" === t2.pattern.type ? w(t2.pattern.style) : null,
    join: "butt",
    cap: "patternCap" in t2 ? t2.patternCap : "butt"
  };
}
function E(t2, l3) {
  return __async(this, null, function* () {
    if (t2.thumbnail?.url) return t2.thumbnail.url;
    if ("icon" === l3.type) {
      const e2 = l3?.resource?.href;
      if (e2) return p(l3);
    }
    const a = n2("esri/images/Legend/legend3dsymboldefault.png");
    if (t2.styleOrigin && (t2.styleOrigin.styleName || t2.styleOrigin.styleUrl)) {
      const e2 = yield g(t2.styleOrigin, {
        portal: t2.styleOrigin.portal
      }, "webRef").catch(() => null);
      if (e2 && "thumbnail" in e2 && e2.thumbnail?.url) return e2.thumbnail.url;
    }
    return a;
  });
}
function I(e2, a = 1) {
  const s3 = e2.a, n4 = z(e2), r = n4.h, o2 = n4.s / a, i = 100 - (100 - n4.v) / a, {
    r: c2,
    g: p3,
    b: u3
  } = y({
    h: r,
    s: o2,
    v: i
  });
  return [c2, p3, u3, s3];
}
function Z(e2) {
  return "water" === e2.type ? null == e2.color ? null : e2.color : null == e2.material?.color ? null : e2.material.color;
}
function q(e2, t2 = 0) {
  const l3 = Z(e2);
  if (!l3) {
    if ("fill" === e2.type) return null;
    const l4 = b.r, a2 = h(l4, t2);
    return [a2, a2, a2, 100];
  }
  const a = l3.toRgba();
  for (let s3 = 0; s3 < 3; s3++) a[s3] = h(a[s3], t2);
  return a;
}
function H(t2, l3) {
  return __async(this, null, function* () {
    const a = t2.style;
    if ("none" === a) return null;
    return {
      type: "pattern",
      x: 0,
      y: 0,
      src: yield f(n2(`esri/symbols/patterns/${a}.png`), l3.toCss(true)),
      width: 5,
      height: 5
    };
  });
}
function N(e2) {
  return e2.outline ? R(e2) : {
    color: "rgba(0, 0, 0, 1)",
    width: 1.5
  };
}
function T(e2, t2) {
  const l3 = Z(e2);
  if (!l3) return null;
  let a = "rgba(";
  return a += h(l3.r, t2) + ",", a += h(l3.g, t2) + ",", a += h(l3.b, t2) + ",", a + l3.a + ");";
}
function W(e2, t2) {
  const l3 = T(e2, t2);
  if (!l3) return {};
  if ("pattern" in e2 && null != e2.pattern && "style" === e2.pattern.type && "none" === e2.pattern.style) return null;
  return {
    color: l3,
    width: Math.min(e2.size ? u(e2.size) : 0.75, U),
    style: "pattern" in e2 && null != e2.pattern && "style" === e2.pattern.type ? w(e2.pattern.style) : null,
    cap: "cap" in e2 ? e2.cap : null,
    join: "join" in e2 ? "miter" === e2.join ? u(2) : e2.join : null
  };
}
function F(e2, t2, l3) {
  const a = null != l3 ? 0.75 * l3 : 0;
  return {
    type: "linear",
    x1: a ? 0.25 * a : 0,
    y1: a ? 0.5 * a : 0,
    x2: a || 4,
    y2: a ? 0.5 * a : 4,
    colors: [{
      color: e2,
      offset: 0
    }, {
      color: t2,
      offset: 1
    }]
  };
}
function $(e2) {
  const t2 = e2.depth, l3 = e2.height, a = e2.width;
  return 0 !== a && 0 !== t2 && 0 !== l3 && a === t2 && null != a && null != l3 && a < l3;
}
function A(e2, t2, l3) {
  const a = [];
  if (!e2) return a;
  switch (e2.type) {
    case "icon": {
      const l4 = 0, s3 = 0, n4 = t2, r = t2;
      switch (e2.resource?.primitive ?? j) {
        case "circle":
          a.push({
            shape: {
              type: "circle",
              cx: 0,
              cy: 0,
              r: 0.5 * t2
            },
            fill: q(e2, 0),
            stroke: R(e2)
          });
          break;
        case "square":
          a.push({
            shape: {
              type: "path",
              path: [{
                command: "M",
                values: [l4, r]
              }, {
                command: "L",
                values: [l4, s3]
              }, {
                command: "L",
                values: [n4, s3]
              }, {
                command: "L",
                values: [n4, r]
              }, {
                command: "Z",
                values: []
              }]
            },
            fill: q(e2, 0),
            stroke: R(e2)
          });
          break;
        case "triangle":
          a.push({
            shape: {
              type: "path",
              path: [{
                command: "M",
                values: [l4, r]
              }, {
                command: "L",
                values: [0.5 * n4, s3]
              }, {
                command: "L",
                values: [n4, r]
              }, {
                command: "Z",
                values: []
              }]
            },
            fill: q(e2, 0),
            stroke: R(e2)
          });
          break;
        case "cross":
          a.push({
            shape: {
              type: "path",
              path: [{
                command: "M",
                values: [0.5 * n4, s3]
              }, {
                command: "L",
                values: [0.5 * n4, r]
              }, {
                command: "M",
                values: [l4, 0.5 * r]
              }, {
                command: "L",
                values: [n4, 0.5 * r]
              }]
            },
            stroke: N(e2)
          });
          break;
        case "x":
          a.push({
            shape: {
              type: "path",
              path: [{
                command: "M",
                values: [l4, s3]
              }, {
                command: "L",
                values: [n4, r]
              }, {
                command: "M",
                values: [n4, s3]
              }, {
                command: "L",
                values: [l4, r]
              }]
            },
            stroke: N(e2)
          });
          break;
        case "kite":
          a.push({
            shape: {
              type: "path",
              path: [{
                command: "M",
                values: [l4, 0.5 * r]
              }, {
                command: "L",
                values: [0.5 * n4, s3]
              }, {
                command: "L",
                values: [n4, 0.5 * r]
              }, {
                command: "L",
                values: [0.5 * n4, r]
              }, {
                command: "Z",
                values: []
              }]
            },
            fill: q(e2, 0),
            stroke: R(e2)
          });
      }
      break;
    }
    case "object":
      switch (e2.resource?.primitive ?? d) {
        case "cone": {
          const s3 = F(q(e2, 0), q(e2, -0.6), l3 ? C : t2), n4 = l(t2, l3);
          a.push({
            shape: n4[0],
            fill: s3
          }, {
            shape: n4[1],
            fill: s3
          });
          break;
        }
        case "inverted-cone": {
          const l4 = q(e2, 0), s3 = F(l4, q(e2, -0.6), t2), n4 = o(t2);
          a.push({
            shape: n4[0],
            fill: s3
          }, {
            shape: n4[1],
            fill: l4
          });
          break;
        }
        case "cube": {
          const s3 = L(t2, l3);
          a.push({
            shape: s3[0],
            fill: q(e2, 0)
          }, {
            shape: s3[1],
            fill: q(e2, -0.3)
          }, {
            shape: s3[2],
            fill: q(e2, -0.5)
          });
          break;
        }
        case "cylinder": {
          const s3 = F(q(e2, 0), q(e2, -0.6), l3 ? C : t2), n4 = n3(t2, l3);
          a.push({
            shape: n4[0],
            fill: s3
          }, {
            shape: n4[1],
            fill: s3
          }, {
            shape: n4[2],
            fill: q(e2, 0)
          });
          break;
        }
        case "diamond": {
          const l4 = s2(t2);
          a.push({
            shape: l4[0],
            fill: q(e2, -0.3)
          }, {
            shape: l4[1],
            fill: q(e2, 0)
          }, {
            shape: l4[2],
            fill: q(e2, -0.3)
          }, {
            shape: l4[3],
            fill: q(e2, -0.7)
          });
          break;
        }
        case "sphere": {
          const l4 = F(q(e2, 0), q(e2, -0.6));
          l4.x1 = 0, l4.y1 = 0, l4.x2 = 0.25 * t2, l4.y2 = 0.25 * t2, a.push({
            shape: {
              type: "circle",
              cx: 0,
              cy: 0,
              r: 0.5 * t2
            },
            fill: l4
          });
          break;
        }
        case "tetrahedron": {
          const l4 = u2(t2);
          a.push({
            shape: l4[0],
            fill: q(e2, -0.3)
          }, {
            shape: l4[1],
            fill: q(e2, 0)
          }, {
            shape: l4[2],
            fill: q(e2, -0.6)
          });
          break;
        }
      }
      break;
  }
  return a;
}
function B(e2) {
  const t2 = "number" == typeof e2?.size ? e2?.size : null;
  return t2 ? u(t2) : null;
}
function G(e2) {
  return "icon" === e2.type ? "multiply" : "tint";
}
function J(e2, t2) {
  return __async(this, null, function* () {
    const l3 = B(t2), a = t2?.maxSize ? u(t2.maxSize) : null, r = t2?.disableUpsampling ?? false, o2 = e2.symbolLayers, i = [];
    let c2 = 0, p3 = 0;
    const u3 = o2.at(-1);
    let h2;
    u3 && "icon" === u3.type && (h2 = u3.size && u(u3.size)), o2.forEach((s3) => {
      if ("icon" !== s3.type && "object" !== s3.type) return;
      const o3 = "icon" === s3.type ? s3.size && u(s3.size) : 0, u4 = l3 || o3 ? Math.ceil(Math.min(l3 || o3, a || D)) : P;
      if (s3?.resource?.href) {
        const t3 = E(e2, s3).then((e3) => {
          const t4 = s3?.material?.color, l4 = G(s3);
          return d2(e3, u4, t4, l4, r);
        }).then((e3) => {
          const t4 = e3.width, l4 = e3.height;
          return c2 = Math.max(c2, t4), p3 = Math.max(p3, l4), [{
            shape: {
              type: "image",
              x: 0,
              y: 0,
              width: t4,
              height: l4,
              src: e3.url
            },
            fill: null,
            stroke: null
          }];
        });
        i.push(t3);
      } else {
        let e3 = u4;
        "icon" === s3.type && h2 && l3 && (e3 = u4 * (o3 / h2));
        const a2 = "tall" === t2?.symbolConfig || t2?.symbolConfig?.isTall || "object" === s3.type && $(s3);
        c2 = Math.max(c2, a2 ? C : e3), p3 = Math.max(p3, e3), i.push(Promise.resolve(A(s3, e3, a2)));
      }
    });
    const m2 = yield Promise.allSettled(i), f2 = [];
    return m2.forEach((e3) => {
      "fulfilled" === e3.status ? f2.push(e3.value) : e3.reason && n.getLogger("esri.symbols.support.previewSymbol3D").warn("error while building swatchInfo!", e3.reason);
    }), l2(f2, [c2, p3], {
      node: t2?.node,
      scale: false,
      opacity: t2?.opacity,
      ariaLabel: t2?.ariaLabel
    });
  });
}
function K(e2, t2) {
  const l3 = e2.symbolLayers, a = [], s3 = y2(e2), r = B(t2), o2 = (t2?.maxSize ? u(t2.maxSize) : null) || U;
  let i, c2 = 0, p3 = 0;
  return l3.forEach((e3, t3) => {
    if (!e3) return;
    if ("line" !== e3.type && "path" !== e3.type) return;
    const l4 = [];
    switch (e3.type) {
      case "line": {
        const a2 = W(e3, 0);
        if (null == a2) break;
        const s4 = a2?.width || 0;
        0 === t3 && (i = s4);
        const n4 = Math.min(r || s4, o2), u3 = 0 === t3 ? n4 : r ? n4 * (s4 / i) : n4, h2 = u3 > O / 2 ? 2 * u3 : O;
        p3 = Math.max(p3, u3), c2 = Math.max(c2, h2), a2.width = u3, l4.push({
          shape: {
            type: "path",
            path: [{
              command: "M",
              values: [0, 0.5 * p3]
            }, {
              command: "L",
              values: [c2, 0.5 * p3]
            }]
          },
          stroke: a2
        });
        break;
      }
      case "path": {
        const t4 = Math.min(r || P, o2), a2 = q(e3, 0), s4 = q(e3, -0.2), n4 = T(e3, -0.4), i2 = n4 ? {
          color: n4,
          width: 1
        } : {};
        if ("quad" === e3.profile) {
          const t5 = e3.width, n5 = e3.height, r2 = m(t5 && n5 ? t5 / n5 : 1, 0 === n5, 0 === t5), o3 = __spreadProps(__spreadValues({}, i2), {
            join: "bevel"
          });
          l4.push({
            shape: r2[0],
            fill: s4,
            stroke: o3
          }, {
            shape: r2[1],
            fill: s4,
            stroke: o3
          }, {
            shape: r2[2],
            fill: a2,
            stroke: o3
          });
        } else l4.push({
          shape: e.pathSymbol3DLayer[0],
          fill: s4,
          stroke: i2
        }, {
          shape: e.pathSymbol3DLayer[1],
          fill: a2,
          stroke: i2
        });
        p3 = Math.max(p3, t4), c2 = p3;
      }
    }
    a.push(l4);
  }), Promise.resolve(l2(a, [c2, p3], {
    node: t2?.node,
    scale: s3,
    opacity: t2?.opacity,
    ariaLabel: t2?.ariaLabel
  }));
}
function Q(e2, t2) {
  return __async(this, null, function* () {
    const l3 = "mesh-3d" === e2.type, a = e2.symbolLayers, s3 = B(t2), r = t2?.maxSize ? u(t2.maxSize) : null, o2 = s3 || P, i = [];
    let c2 = 0, p3 = 0, u3 = false;
    for (let n4 = 0; n4 < a.length; n4++) {
      const e3 = a.at(n4), t3 = [];
      if (!l3 || "fill" === e3.type) {
        switch (e3.type) {
          case "fill": {
            const a2 = Math.min(o2, r || D);
            if (c2 = Math.max(c2, a2), p3 = Math.max(p3, a2), u3 = true, l3) {
              const l4 = e.meshSymbol3DFill, a3 = T(e3, -0.4), s4 = a3 ? {
                color: a3,
                width: 1,
                join: "round"
              } : {};
              t3.push({
                shape: l4[0],
                fill: q(e3, 0),
                stroke: s4
              }, {
                shape: l4[1],
                fill: q(e3, -0.2),
                stroke: s4
              }, {
                shape: l4[2],
                fill: q(e3, -0.6),
                stroke: s4
              });
            } else {
              let l4 = q(e3, 0);
              const a3 = "pattern" in e3 ? e3.pattern : null, s4 = R(e3), n5 = Z(e3);
              null != a3 && "style" === a3.type && "solid" !== a3.style && n5 && (l4 = yield H(a3, n5)), t3.push({
                shape: e.fill[0],
                fill: l4,
                stroke: s4
              });
            }
            break;
          }
          case "line": {
            const l4 = W(e3, 0);
            if (null == l4) break;
            const a2 = {
              stroke: l4,
              shape: e.fill[0]
            };
            c2 = Math.max(c2, P), p3 = Math.max(p3, P), t3.push(a2);
            break;
          }
          case "extrude": {
            const l4 = __spreadValues({
              join: "round",
              width: 1
            }, W(e3, -0.4)), a2 = q(e3, 0), s4 = q(e3, -0.2), n5 = Math.min(o2, r || D), i2 = c(n5);
            l4.width = 1, t3.push({
              shape: i2[0],
              fill: s4,
              stroke: l4
            }, {
              shape: i2[1],
              fill: s4,
              stroke: l4
            }, {
              shape: i2[2],
              fill: a2,
              stroke: l4
            });
            const u4 = P, h2 = 0.7 * P + 0.5 * n5;
            c2 = Math.max(c2, u4), p3 = Math.max(p3, h2);
            break;
          }
          case "water": {
            const l4 = Z(e3), a2 = I(l4), s4 = I(l4, 2), n5 = I(l4, 3), i2 = p2();
            u3 = true, t3.push({
              shape: i2[0],
              fill: a2
            }, {
              shape: i2[1],
              fill: s4
            }, {
              shape: i2[2],
              fill: n5
            });
            const h2 = Math.min(o2, r || D);
            c2 = Math.max(c2, h2), p3 = Math.max(p3, h2);
            break;
          }
        }
        i.push(t3);
      }
    }
    return l2(i, [c2, p3], {
      node: t2?.node,
      scale: u3,
      opacity: t2?.opacity,
      ariaLabel: t2?.ariaLabel
    });
  });
}
function V(e2, t2) {
  if (0 === e2.symbolLayers.length) return Promise.reject(new s("symbolPreview: renderPreviewHTML3D", "No symbolLayers in the symbol."));
  switch (e2.type) {
    case "point-3d":
      return J(e2, t2);
    case "line-3d":
      return K(e2, t2);
    case "polygon-3d":
    case "mesh-3d":
      return Q(e2, t2);
  }
  return Promise.reject(new s("symbolPreview: swatchInfo3D", "symbol not supported."));
}

export {
  q,
  H,
  B,
  V
};
//# sourceMappingURL=chunk-MRA7OOFL.js.map
