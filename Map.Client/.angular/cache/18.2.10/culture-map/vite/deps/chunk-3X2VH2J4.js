import {
  q
} from "./chunk-MRA7OOFL.js";
import {
  $,
  A,
  E,
  L,
  M,
  T,
  l,
  v
} from "./chunk-OOVP3XBH.js";
import {
  t
} from "./chunk-AHCFNSHV.js";
import {
  D,
  I,
  N,
  R,
  g2,
  u,
  y
} from "./chunk-ZUHJZKEM.js";
import {
  i
} from "./chunk-JILEJ6R2.js";
import {
  n
} from "./chunk-K7TO5IIO.js";
import {
  f,
  g
} from "./chunk-CQDYITZC.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/widgets/Legend/styles/support/relationshipUtils.js
var b = "esri-relationship-ramp";
var u2 = `${b}--diamond`;
var c = `${b}--square`;
var f2 = "http://www.w3.org/2000/svg";
var p = {
  diamondContainer: `${u2}__container`,
  diamondLeftCol: `${u2}__left-column`,
  diamondRightCol: `${u2}__right-column`,
  diamondMidCol: `${u2}__middle-column`,
  diamondMidColLabel: `${u2}__middle-column--label`,
  diamondMidColRamp: `${u2}__middle-column--ramp`,
  squareTable: `${c}__table`,
  squareTableRow: `${c}__table-row`,
  squareTableCell: `${c}__table-cell`,
  squareTableLabel: `${c}__table-label`,
  squareTableLabelLeftBottom: `${c}__table-label--left-bottom`,
  squareTableLabelRightBottom: `${c}__table-label--right-bottom`,
  squareTableLabelLeftTop: `${c}__table-label--left-top`,
  squareTableLabelRightTop: `${c}__table-label--right-top`
};
function h(e, l3, a2 = {}) {
  const {
    focus: r,
    labels: t2
  } = e, s2 = !!r, o = T2(e, l3, a2), i3 = {
    justifyContent: "center"
  }, b3 = g();
  return s2 ? n("div", {
    class: p.diamondContainer,
    styles: i3
  }, n("div", {
    class: p.diamondLeftCol
  }, b3 ? t2.right : t2.left), n("div", {
    class: p.diamondMidCol
  }, n("div", {
    class: p.diamondMidColLabel
  }, t2.top), o, n("div", {
    class: p.diamondMidColLabel
  }, t2.bottom)), n("div", {
    class: p.diamondRightCol
  }, b3 ? t2.left : t2.right)) : n("div", {
    class: p.squareTable
  }, n("div", {
    class: p.squareTableRow
  }, n("div", {
    class: f(p.squareTableCell, p.squareTableLabel, p.squareTableLabelRightBottom)
  }, b3 ? t2.top : t2.left), n("div", {
    class: p.squareTableCell
  }), n("div", {
    class: f(p.squareTableCell, p.squareTableLabel, p.squareTableLabelLeftBottom)
  }, b3 ? t2.left : t2.top)), n("div", {
    class: p.squareTableRow
  }, n("div", {
    class: p.squareTableCell
  }), o, n("div", {
    class: p.squareTableCell
  })), n("div", {
    class: p.squareTableRow
  }, n("div", {
    class: f(p.squareTableCell, p.squareTableLabel, p.squareTableLabelRightTop)
  }, b3 ? t2.right : t2.bottom), n("div", {
    class: p.squareTableCell
  }), n("div", {
    class: f(p.squareTableCell, p.squareTableLabel, p.squareTableLabelLeftTop)
  }, b3 ? t2.bottom : t2.right)));
}
function k(e, l3, a2) {
  const r = `${a2}_arrowStart`, t2 = `${a2}_arrowEnd`, s2 = "left" === e, o = {
    markerStart: null,
    markerEnd: null
  };
  switch (l3) {
    case "HL":
      s2 ? o.markerStart = `url(#${t2})` : o.markerEnd = `url(#${r})`;
      break;
    case "LL":
      o.markerStart = `url(#${t2})`;
      break;
    case "LH":
      s2 ? o.markerEnd = `url(#${r})` : o.markerStart = `url(#${t2})`;
      break;
    default:
      o.markerEnd = `url(#${r})`;
  }
  return o;
}
function T2(n3, d2, b3 = {}) {
  const {
    focus: u4,
    numClasses: c2,
    colors: h4,
    rotation: T3
  } = n3, {
    opacity: _,
    effectList: q2,
    ariaLabel: L3
  } = b3, g4 = b3.size ?? 60, $2 = !!u4, C2 = Math.sqrt(g4 ** 2 + g4 ** 2) + ($2 ? 0 : 5), v3 = [], w2 = [], y3 = [], x = (g4 || 75) / c2;
  for (let s2 = 0; s2 < c2; s2++) {
    const o = s2 * x;
    for (let i3 = 0; i3 < c2; i3++) {
      const n4 = i3 * x, d3 = M(h4[s2][i3]), m2 = A(null), b4 = {
        type: "rect",
        x: n4,
        y: o,
        width: x,
        height: x
      }, u5 = $(d3);
      u5 && v3.push(u5);
      const c3 = v(b4, d3.fill, m2, null);
      c3 && w2.push(c3), y3.push(T(b4));
    }
  }
  const R2 = 10, E2 = 15, M2 = 15, S2 = 10;
  let j = null;
  $2 || (j = "margin: -15px -15px -18px -15px");
  const B = k("left", u4, d2), H2 = k("right", u4, d2), U = E(y3), W = L(U, C2, C2, 0, false, T3, false), X = L(U, C2, C2, 0, false, $2 ? -45 : null, false), Y = {
    filter: I(q2) ?? void 0,
    opacity: null == _ ? "" : `${_}`
  };
  return n("div", {
    class: $2 ? p.diamondMidColRamp : p.squareTableCell,
    styles: Y
  }, n("svg", {
    "aria-label": L3,
    focusable: false,
    height: C2,
    role: "image",
    style: j,
    width: C2,
    xmlns: f2
  }, n("defs", null, n("marker", {
    id: `${d2}_arrowStart`,
    markerHeight: "10",
    markerUnits: "strokeWidth",
    markerWidth: "10",
    orient: "auto",
    refX: "5",
    refY: "5"
  }, n("polyline", {
    fill: "none",
    points: "0,0 5,5 0,10",
    stroke: "#555555",
    "stroke-width": "1"
  })), n("marker", {
    id: `${d2}_arrowEnd`,
    markerHeight: "10",
    markerUnits: "strokeWidth",
    markerWidth: "10",
    orient: "auto",
    refX: "0",
    refY: "5"
  }, n("polyline", {
    fill: "none",
    points: "5,0 0,5 5,10",
    stroke: "#555555",
    "stroke-width": "1"
  })), v3), n("g", {
    transform: W
  }, w2), n("g", {
    transform: X
  }, n("line", {
    fill: "none",
    "marker-end": B.markerEnd,
    "marker-start": B.markerStart,
    stroke: "#555555",
    "stroke-width": "1",
    x1: -R2,
    x2: -R2,
    y1: g4 - E2,
    y2: E2
  }), n("line", {
    fill: "none",
    "marker-end": H2.markerEnd,
    "marker-start": H2.markerStart,
    stroke: "#555555",
    "stroke-width": "1",
    x1: M2,
    x2: g4 - M2,
    y1: g4 + S2,
    y2: g4 + S2
  }))));
}

// ../../../node_modules/@arcgis/core/widgets/Legend/support/relationshipRampUtils.js
var s = {
  HH: 315,
  HL: 45,
  LL: 135,
  LH: 225
};
var l2 = {
  2: [["HL", "HH"], ["LL", "LH"]],
  3: [["HL", "HM", "HH"], ["ML", "MM", "MH"], ["LL", "LM", "LH"]],
  4: [["HL", "HM1", "HM2", "HH"], ["M2L", "M2M1", "M2M2", "M2H"], ["M1L", "M1M1", "M1M2", "M1H"], ["LL", "LM1", "LM2", "LH"]]
};
function n2(t2) {
  if (!t2) return;
  const {
    type: s2
  } = t2;
  if (s2.includes("3d")) return q(t2.symbolLayers.at(0));
  if ("simple-line" === s2) {
    const e = y(t2);
    return e && e.color;
  }
  if ("simple-marker" === t2.type && ("x" === t2.style || "cross" === t2.style)) {
    const e = y(t2);
    return e && e.color;
  }
  return u(t2);
}
function H(t2, o) {
  const e = o.HH.label, r = o.LL.label, s2 = o.HL.label, l3 = o.LH.label;
  switch (t2) {
    case "HH":
    default:
      return {
        top: e,
        bottom: r,
        left: s2,
        right: l3
      };
    case "HL":
      return {
        top: s2,
        bottom: l3,
        left: r,
        right: e
      };
    case "LL":
      return {
        top: r,
        bottom: e,
        left: l3,
        right: s2
      };
    case "LH":
      return {
        top: l3,
        bottom: s2,
        left: e,
        right: r
      };
  }
}
function i2(t2) {
  const {
    focus: o,
    infos: e,
    numClasses: r
  } = t2, s2 = l2[r], L3 = {};
  e.forEach((t3) => {
    L3[t3.value] = {
      label: t3.label,
      fill: n2(t3.symbol)
    };
  });
  const i3 = [];
  for (let l3 = 0; l3 < r; l3++) {
    const t3 = [];
    for (let o2 = 0; o2 < r; o2++) {
      const e2 = L3[s2[l3][o2]];
      t3.push(e2.fill);
    }
    i3.push(t3);
  }
  return {
    type: "relationship-ramp",
    numClasses: r,
    focus: o,
    colors: i3,
    labels: H(o, L3),
    rotation: u3(o)
  };
}
function u3(t2) {
  let o = s[t2];
  return t2 && null == o && (o = s.HH), o || 0;
}

// ../../../node_modules/@arcgis/core/symbols/support/symbolUtils.js
var y2 = null;
var d = [255, 255, 255];
function m(e, t2) {
  return Math.floor(Math.random() * (t2 - e + 1) + e);
}
function b2(e, t2, a2) {
  const {
    backgroundColor: i3,
    outline: s2,
    dotSize: r
  } = e, n3 = a2?.swatchSize || t.size, o = 0.8, c2 = Math.round(n3 * n3 / Math.max(r, 0.5) ** 2 * o), u4 = window.devicePixelRatio, f3 = document.createElement("canvas"), p2 = n3 * u4;
  f3.width = p2, f3.height = p2, f3.style.width = f3.width / u4 + "px", f3.style.height = f3.height / u4 + "px";
  const h4 = f3.getContext("2d");
  if (i3 && (h4.fillStyle = i3.toCss(true), h4.fillRect(0, 0, p2, p2), h4.fill()), h4.fillStyle = t2?.toCss(true) ?? "", y2 && y2.length / 2 === c2) for (let l3 = 0; l3 < 2 * c2; l3 += 2) {
    const e2 = y2[l3], t3 = y2[l3 + 1];
    h4.fillRect(e2, t3, r * u4, r * u4), h4.fill();
  }
  else {
    y2 = [];
    for (let e2 = 0; e2 < 2 * c2; e2 += 2) {
      const e3 = m(0, p2), t3 = m(0, p2);
      y2.push(e3, t3), h4.fillRect(e3, t3, r * u4, r * u4), h4.fill();
    }
  }
  s2 && (s2.color && (h4.strokeStyle = s2.color.toCss(true)), h4.lineWidth = s2.width, h4.strokeRect(0, 0, p2, p2));
  const d2 = new Image(n3, n3);
  return d2.src = f3.toDataURL(), d2.ariaLabel = a2?.ariaLabel ?? null, d2.alt = a2?.ariaLabel ?? "", d2;
}
function g3(e, l3 = {}) {
  const i3 = l3.radius || 40, s2 = 2 * Math.PI * i3, r = e.length, n3 = s2 / r, o = [], c2 = y(l3.outline);
  null != c2?.width && (c2.width *= 2), (c2 || l3.backgroundColor) && o.push({
    shape: {
      type: "circle",
      cx: i3,
      cy: i3,
      r: i3
    },
    fill: l3.backgroundColor,
    stroke: c2,
    offset: [0, 0]
  });
  const u4 = l3.values, f3 = u4 && u4.length === r && 100 === u4.reduce((e2, t2) => e2 + t2, 0), p2 = [0];
  for (let t2 = 0; t2 < r; t2++) {
    let l4 = null;
    f3 && (l4 = u4[t2] * s2 / 100, p2.push(l4 + p2[t2])), o.push({
      shape: {
        type: "circle",
        cx: i3,
        cy: i3,
        r: i3 / 2
      },
      fill: [0, 0, 0, 0],
      stroke: {
        width: i3,
        dashArray: `${(l4 ?? n3) / 2} ${s2}`,
        dashoffset: "-" + (f3 ? p2[t2] / 2 : t2 * (n3 / 2)),
        color: e[t2]
      },
      offset: [0, 0]
    });
  }
  let h4 = null;
  const y3 = 2 * i3 + (c2?.width || 0), m2 = l3.holePercentage;
  if (m2) {
    c2 && o.push({
      shape: {
        type: "circle",
        cx: i3,
        cy: i3,
        r: i3 * m2
      },
      fill: null,
      stroke: c2,
      offset: [0, 0]
    });
    const e2 = y3 / 2;
    h4 = [[{
      shape: {
        type: "circle",
        cx: e2,
        cy: e2,
        r: e2
      },
      fill: d,
      stroke: c2 ? __spreadProps(__spreadValues({}, c2), {
        color: d
      }) : null,
      offset: [0, 0]
    }, {
      shape: {
        type: "circle",
        cx: e2,
        cy: e2,
        r: i3 * m2
      },
      fill: [0, 0, 0],
      stroke: null,
      offset: [0, 0]
    }]];
  }
  return l([o], [y3, y3], {
    effectView: l3.effectList,
    ignoreStrokeWidth: true,
    masking: h4,
    rotation: -90,
    ariaLabel: l3.ariaLabel
  });
}
function v2(e, t2 = {}) {
  const l3 = 24, a2 = 75, i3 = "horizontal" === t2.align, s2 = i3 ? a2 : l3, r = i3 ? l3 : a2, n3 = t2.width ?? s2, o = t2.height ?? r, c2 = t2.gradient ?? true, u4 = window.devicePixelRatio, f3 = n3 * u4, p2 = o * u4, h4 = document.createElement("canvas");
  h4.width = f3, h4.height = p2, h4.ariaLabel = t2.ariaLabel ?? null, h4.style.width = `${n3}px`, h4.style.height = `${o}px`;
  const y3 = h4.getContext("2d"), d2 = i3 ? f3 : 0, m2 = i3 ? 0 : p2;
  if (c2) {
    const t3 = y3.createLinearGradient(0, 0, d2, m2), l4 = e.length, a3 = 1 === l4 ? 0 : 1 / (l4 - 1);
    e.forEach((e2, l5) => t3.addColorStop(l5 * a3, e2.toString())), y3.fillStyle = t3, y3.fillRect(0, 0, f3, p2);
  } else {
    const t3 = i3 ? f3 / e.length : f3, l4 = i3 ? p2 : p2 / e.length;
    let a3 = 0, s3 = 0;
    for (const r2 of e) y3.fillStyle = r2.toString(), y3.fillRect(a3, s3, t3, l4), a3 = i3 ? a3 + t3 : 0, s3 = i3 ? 0 : s3 + l4;
  }
  const b3 = document.createElement("div");
  return b3.style.width = `${n3}px`, b3.style.height = `${o}px`, S(b3, t2?.effectList), b3.appendChild(h4), b3;
}
function S(e, t2) {
  if (!t2) return;
  e.style.filter = I(t2);
  const l3 = t2.effects;
  if (l3) {
    for (const a2 of l3) if ("drop-shadow" === a2?.type) {
      a2.offsetX < 0 ? e.style.marginLeft = `${Math.abs(a2.offsetX)}px` : e.style.marginRight = `${a2.offsetX}px`;
      break;
    }
  }
}
function V(e, t2) {
  return __async(this, null, function* () {
    switch (e.type) {
      case "web-style": {
        const {
          previewWebStyleSymbol: l3
        } = yield import("./previewWebStyleSymbol-WOKKL35V.js");
        return l3(e, V, t2);
      }
      case "label-3d":
      case "line-3d":
      case "mesh-3d":
      case "point-3d":
      case "polygon-3d": {
        const {
          previewSymbol3D: l3
        } = yield import("./previewSymbol3D-2RKYFSIB.js");
        return l3(e, t2);
      }
      case "simple-marker":
      case "simple-line":
      case "simple-fill":
      case "picture-marker":
      case "picture-fill":
      case "text": {
        const {
          previewSymbol2D: l3
        } = yield import("./previewSymbol2D-5FDSYLQL.js");
        return l3(e, t2);
      }
      case "cim": {
        const {
          previewCIMSymbol: l3
        } = yield import("./previewCIMSymbol-SAV6NGDY.js");
        return l3(e, t2);
      }
      default:
        return;
    }
  });
}
function k2(e) {
  return e && "opacity" in e ? e.opacity * k2(e.parent) : 1;
}
function L2(t2, l3) {
  return __async(this, null, function* () {
    if (!t2) return;
    const a2 = t2.sourceLayer, i3 = (null != l3 && l3.useSourceLayer ? a2 : t2.layer) ?? a2, s2 = k2(i3);
    if (null != t2.symbol && (null == l3 || true !== l3.ignoreGraphicSymbol)) {
      const e = "web-style" === t2.symbol.type ? yield N(t2.symbol, __spreadProps(__spreadValues({}, l3), {
        cache: null != l3 ? l3.webStyleCache : null
      })) : t2.symbol.clone();
      return g2(e, null, s2), e;
    }
    const u4 = l3?.renderer ?? C(i3);
    let f3 = u4 && "getSymbolAsync" in u4 ? yield u4.getSymbolAsync(t2, l3) : null;
    if (!f3) return;
    if (f3 = "web-style" === f3.type ? yield f3.fetchSymbol(__spreadProps(__spreadValues({}, l3), {
      cache: null != l3 ? l3.webStyleCache : null
    })) : f3.clone(), !u4 || !("visualVariables" in u4) || !u4.visualVariables?.length) return g2(f3, null, s2), f3;
    if ("arcadeRequiredForVisualVariables" in u4 && u4.arcadeRequiredForVisualVariables && null == l3?.arcade) {
      const t3 = __spreadValues({}, l3);
      t3.arcade = yield i(), l3 = t3;
    }
    const {
      getColor: p2,
      getOpacity: h4,
      getAllSizes: y3,
      getRotationAngle: d2
    } = yield import("./visualVariableUtils-YDPTPXKG.js"), m2 = [], b3 = [], g4 = [], w2 = [];
    for (const e of u4.visualVariables) switch (e.type) {
      case "color":
        m2.push(e);
        break;
      case "opacity":
        b3.push(e);
        break;
      case "rotation":
        w2.push(e);
        break;
      case "size":
        e.target || g4.push(e);
    }
    const v3 = !!m2.length && m2[m2.length - 1], S2 = v3 ? p2(v3, t2, l3) : null, V2 = !!b3.length && b3[b3.length - 1];
    let L3 = V2 ? h4(V2, t2, l3) : null;
    if (null != s2 && (L3 = null != L3 ? L3 * s2 : s2), g2(f3, S2, L3), g4.length) {
      const e = y3(g4, t2, l3);
      yield R(f3, e);
    }
    for (const e of w2) D(f3, d2(e, t2, l3), e.axis);
    return f3;
  });
}
function C(e) {
  if (e) return "renderer" in e ? e.renderer : void 0;
}

export {
  h,
  i2 as i,
  u3 as u,
  b2 as b,
  g3 as g,
  v2 as v,
  V,
  L2 as L
};
//# sourceMappingURL=chunk-3X2VH2J4.js.map
