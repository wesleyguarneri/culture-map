import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  __spreadProps,
  __spreadValues
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/symbols/cim/defaultCIMValues.js
var e = {
  color: [128, 128, 128, 1],
  outlinecolor: [0, 0, 0, 1],
  backgroundcolor: [128, 128, 128, 1],
  borderlinecolor: [0, 0, 0, 1],
  tintcolor: [255, 255, 255, 1]
};
var t = {
  CIMVectorMarker: {
    scalesymbolsproportionally: false,
    respectframe: true,
    anchorpointunits: "Relative",
    offsetx: 0,
    offsety: 0,
    rotateclockwise: false,
    rotation: 0,
    size: 10,
    enable: true,
    colorlocked: false
  },
  CIMPictureMarker: {
    scalex: 1,
    texturefilter: "Draft",
    anchorpointunits: "Relative",
    offsetx: 0,
    offsety: 0,
    rotateclockwise: false,
    rotation: 0,
    size: 10,
    enable: true,
    colorlocked: false
  },
  CIMTextSymbol: {
    angle: 0,
    anglex: 0,
    angley: 0,
    halosize: 1,
    height: 10,
    horizontalalignment: "Left",
    kerning: true,
    letterspacing: 0,
    letterwidth: 100,
    ligatures: true,
    linegap: 0,
    offsetx: 0,
    offsety: 0,
    strikethrough: false,
    textcase: "Normal",
    textstring: "",
    underline: false,
    verticalalignment: "Bottom",
    enable: true,
    colorlocked: false
  },
  CIMSolidStroke: {
    capstyle: "Round",
    joinstyle: "Round",
    miterlimit: 4,
    width: 4,
    enable: true,
    colorlocked: false
  },
  CIMPictureStroke: {
    texturefilter: "Draft",
    capstyle: "Round",
    joinstyle: "Round",
    miterlimit: 4,
    width: 4,
    enable: true,
    colorlocked: false
  },
  CIMGradientStroke: {
    capstyle: "Round",
    joinstyle: "Round",
    miterlimit: 4,
    width: 4,
    enable: true,
    colorlocked: false
  },
  CIMSolidFill: {
    enable: true,
    colorlocked: false
  },
  CIMPictureFill: {
    offsetx: 0,
    offsety: 0,
    rotation: 0,
    scalex: 1,
    height: 10,
    texturefilter: "Draft",
    enable: true,
    colorlocked: false
  },
  CIMHatchFill: {
    offsetx: 0,
    offsety: 0,
    rotation: 0,
    separation: 4,
    enable: true,
    colorlocked: false
  },
  CIMGeometricEffectAddControlPoints: {
    angletolerance: 120
  },
  CIMGeometricEffectArrow: {
    arrowtype: "OpenEnded",
    width: 5
  },
  CIMGeometricEffectBuffer: {
    size: 1
  },
  CIMGeometricEffectCut: {
    begincut: 1,
    endcut: 1,
    middlecut: 0,
    invert: false
  },
  CIMGeometricEffectDashes: {
    customendingoffset: 0,
    linedashending: "NoConstraint",
    offsetalongline: 0
  },
  CIMGeometricEffectDonut: {
    method: "Mitered",
    option: "Accurate",
    width: 2
  },
  CIMGeometricEffectJog: {
    angle: 225,
    length: 20,
    position: 50
  },
  CIMGeometricEffectControlMeasureLine: {
    rule: "FullGeometry"
  },
  CIMGeometricEffectMove: {
    offsetx: 1,
    offsety: -1
  },
  CIMGeometricEffectOffset: {
    method: "Square",
    offset: 1,
    option: "Fast"
  },
  CIMGeometricEffectRotate: {
    angle: 15
  },
  CIMGeometricEffectScale: {
    xscalefactor: 1.15,
    yscalefactor: 1.15
  },
  CIMGeometricEffectWave: {
    amplitude: 2,
    period: 3,
    seed: 1,
    waveform: "Sinus"
  },
  CIMMarkerPlacementAlongLine: {
    customendingoffset: 0,
    endings: "WithHalfGap",
    offsetalongline: 0,
    placeperpart: true,
    angletoline: true,
    offset: 0
  },
  CIMMarkerPlacementAtExtremities: {
    extremityplacement: "Both",
    offsetalongline: 0,
    angletoline: true,
    offset: 0
  },
  CIMMarkerPlacementAtRatioPositions: {
    beginposition: 0,
    endposition: 0,
    flipfirst: true,
    angletoline: true,
    offset: 0
  },
  CIMMarkerPlacementInsidePolygon: {
    gridangle: 0,
    gridtype: "Fixed",
    offsetx: 0,
    offsety: 0,
    randomness: 100,
    seed: 0,
    shiftoddrows: false,
    stepx: 16,
    stepy: 16,
    clipping: "ClipAtBoundary"
  },
  CIMMarkerPlacementOnLine: {
    relativeto: "LineMiddle",
    startpointoffset: 0,
    angletoline: true,
    offset: 0
  },
  CIMMarkerPlacementOnVertices: {
    placeperpart: true,
    placeoncontrolpoints: true,
    placeonendpoints: true,
    placeonregularvertices: true,
    angletoline: true,
    offset: 0
  },
  CIMMarkerPlacementPolygonCenter: {
    method: "OnPolygon",
    offsetx: 0,
    offsety: 0,
    clipatboundary: false
  },
  CIMAnimatedSymbolProperties: {
    playanimation: false,
    reverseanimation: false,
    randomizestarttime: false,
    randomizestartseed: 0,
    starttimeoffset: 0,
    duration: 3,
    endingduration: 3,
    useendingduration: false,
    repeattype: "Loop",
    repeatdelay: 0
  }
};

// ../../../node_modules/@arcgis/core/symbols/cim/utils.js
function r(e2) {
  return "function" == typeof e2;
}
function n(e2, t2, n2, o2) {
  return r(e2) ? e2(t2, n2, o2) : e2;
}
function o(e2) {
  return [e2.r, e2.g, e2.b, e2.a];
}
var i = " /-,\n";
function a(e2) {
  let t2 = e2.length;
  for (; t2--; ) if (!i.includes(e2.charAt(t2))) return false;
  return true;
}
function l(e2, t2) {
  const r2 = [];
  let n2 = 0, o2 = -1;
  do {
    if (o2 = e2.indexOf("[", n2), o2 >= n2) {
      if (o2 > n2) {
        const t3 = e2.substr(n2, o2 - n2);
        r2.push([t3, null, a(t3)]);
      }
      if (n2 = o2 + 1, o2 = e2.indexOf("]", n2), o2 >= n2) {
        if (o2 > n2) {
          const i2 = t2[e2.substr(n2, o2 - n2)];
          i2 && r2.push([null, i2, false]);
        }
        n2 = o2 + 1;
      }
    }
  } while (-1 !== o2);
  if (n2 < e2.length - 1) {
    const t3 = e2.substr(n2);
    r2.push([t3, null, a(t3)]);
  }
  return r2;
}
function s(e2, t2, r2, n2) {
  let o2 = "", i2 = null;
  for (const a2 of t2) {
    const [t3, n3, l2] = a2;
    if (t3) l2 ? i2 = t3 : (i2 && (o2 += i2, i2 = null), o2 += t3);
    else {
      let t4 = n3;
      null != r2 && (t4 = B(n3, r2));
      const a3 = e2.attributes[t4];
      a3 && (i2 && (o2 += i2, i2 = null), o2 += a3);
    }
  }
  return c(o2, n2);
}
function c(e2, t2) {
  switch ("string" != typeof e2 && (e2 = String(e2)), t2) {
    case "LowerCase":
      return e2.toLowerCase();
    case "Allcaps":
      return e2.toUpperCase();
    default:
      return e2;
  }
}
function u(e2, t2, r2, n2, o2, i2, a2 = true) {
  const l2 = t2 / o2, s2 = r2 / i2, c2 = Math.ceil(l2 / 2), u2 = Math.ceil(s2 / 2);
  for (let f2 = 0; f2 < i2; f2++) for (let r3 = 0; r3 < o2; r3++) {
    const y2 = 4 * (r3 + (a2 ? i2 - f2 - 1 : f2) * o2);
    let M2 = 0, m2 = 0, C2 = 0, b2 = 0, I2 = 0, p2 = 0, h2 = 0;
    const d2 = (f2 + 0.5) * s2;
    for (let n3 = Math.floor(f2 * s2); n3 < (f2 + 1) * s2; n3++) {
      const o3 = Math.abs(d2 - (n3 + 0.5)) / u2, i3 = (r3 + 0.5) * l2, a3 = o3 * o3;
      for (let s3 = Math.floor(r3 * l2); s3 < (r3 + 1) * l2; s3++) {
        let r4 = Math.abs(i3 - (s3 + 0.5)) / c2;
        const o4 = Math.sqrt(a3 + r4 * r4);
        o4 >= -1 && o4 <= 1 && (M2 = 2 * o4 * o4 * o4 - 3 * o4 * o4 + 1, M2 > 0 && (r4 = 4 * (s3 + n3 * t2), h2 += M2 * e2[r4 + 3], C2 += M2, e2[r4 + 3] < 255 && (M2 = M2 * e2[r4 + 3] / 250), b2 += M2 * e2[r4], I2 += M2 * e2[r4 + 1], p2 += M2 * e2[r4 + 2], m2 += M2));
      }
    }
    n2[y2] = b2 / m2, n2[y2 + 1] = I2 / m2, n2[y2 + 2] = p2 / m2, n2[y2 + 3] = h2 / C2;
  }
}
function f(e2) {
  return e2 ? [e2[0], e2[1], e2[2], e2[3] / 255] : [0, 0, 0, 0];
}
function y(e2) {
  return e2.data?.symbol ?? null;
}
function M(e2) {
  return "CIMVectorMarker" === e2.type || "CIMPictureMarker" === e2.type || "CIMBarChartMarker" === e2.type || "CIMCharacterMarker" === e2.type || "CIMPieChartMarker" === e2.type || "CIMStackedBarChartMarker" === e2.type;
}
function m(e2) {
  return "CIMGradientStroke" === e2.type || "CIMPictureStroke" === e2.type || "CIMSolidStroke" === e2.type;
}
function C(e2) {
  return null != e2 && ("CIMGradientFill" === e2.type || "CIMHatchFill" === e2.type || "CIMPictureFill" === e2.type || "CIMSolidFill" === e2.type || "CIMWaterFill" === e2.type);
}
function b(e2) {
  return null != e2 && ("CIMMarkerPlacementAlongLineRandomSize" === e2.type || "CIMMarkerPlacementAlongLineSameSize" === e2.type || "CIMMarkerPlacementAlongLineVariableSize" === e2.type || "CIMMarkerPlacementAtExtremities" === e2.type || "CIMMarkerPlacementAtMeasuredUnits" === e2.type || "CIMMarkerPlacementAtRatioPositions" === e2.type || "CIMMarkerPlacementOnLine" === e2.type || "CIMMarkerPlacementOnVertices" === e2.type);
}
var I = (e2, t2 = 0) => null == e2 || isNaN(e2) ? t2 : e2;
var p = (e2, t2) => e2 ?? t2;
var h = (e2) => e2.tintColor ? f(e2.tintColor) : [255, 255, 255, 1];
var d = (e2) => {
  if (!e2) return false;
  for (const t2 of e2) switch (t2.type) {
    case "CIMGeometricEffectBuffer":
    case "CIMGeometricEffectOffset":
    case "CIMGeometricEffectDonut":
      return true;
  }
  return false;
};
function k() {
  return import("./geometryEngineJSON-EW2QOKL3.js");
}
function S(e2) {
  if (!e2) return "normal";
  switch (e2.toLowerCase()) {
    case "italic":
      return "italic";
    case "oblique":
      return "oblique";
    default:
      return "normal";
  }
}
function g(e2) {
  if (!e2) return "normal";
  switch (e2.toLowerCase()) {
    case "bold":
      return "bold";
    case "bolder":
      return "bolder";
    case "lighter":
      return "lighter";
    default:
      return "normal";
  }
}
function P(e2) {
  let t2 = "normal", r2 = "normal";
  if (e2) {
    const n2 = e2.toLowerCase();
    n2.includes("italic") ? t2 = "italic" : n2.includes("oblique") && (t2 = "oblique"), n2.includes("bold") ? r2 = "bold" : n2.includes("light") && (r2 = "lighter");
  }
  return {
    style: t2,
    weight: r2
  };
}
function w(e2) {
  return e2.underline ? "underline" : e2.strikethrough ? "line-through" : "none";
}
function L(e2) {
  if (!e2) return null;
  switch (e2.type) {
    case "CIMPolygonSymbol":
      if (e2.symbolLayers) for (const t2 of e2.symbolLayers) {
        const e3 = L(t2);
        if (null != e3) return e3;
      }
      break;
    case "CIMTextSymbol":
      return L(e2.symbol);
    case "CIMSolidFill":
      return e2.color;
  }
  return null;
}
function N(e2) {
  if (e2) switch (e2.type) {
    case "CIMPolygonSymbol":
    case "CIMLineSymbol": {
      const t2 = e2.symbolLayers;
      if (t2) for (const e3 of t2) {
        const t3 = N(e3);
        if (null != t3) return t3;
      }
      break;
    }
    case "CIMTextSymbol":
      return N(e2.symbol);
    case "CIMSolidStroke":
      return e2.color;
  }
}
function T(e2) {
  if (e2) switch (e2.type) {
    case "CIMPolygonSymbol":
    case "CIMLineSymbol":
      if (e2.symbolLayers) for (const t2 of e2.symbolLayers) {
        const e3 = T(t2);
        if (void 0 !== e3) return e3;
      }
      break;
    case "CIMTextSymbol":
      return T(e2.symbol);
    case "CIMSolidStroke":
    case "CIMGradientStroke":
    case "CIMPictureStroke":
      return e2.width;
  }
}
function x(e2) {
  switch (e2) {
    case "Left":
    default:
      return "left";
    case "Right":
      return "right";
    case "Center":
    case "Justify":
      return "center";
  }
}
function A(e2) {
  switch (e2) {
    case "Top":
    default:
      return "top";
    case "Center":
      return "middle";
    case "Baseline":
      return "baseline";
    case "Bottom":
      return "bottom";
  }
}
function F(e2) {
  return (e2 ? Object.keys(e2) : []).map((t2) => ({
    name: t2,
    alias: t2,
    type: "string" == typeof e2[t2] ? "esriFieldTypeString" : "esriFieldTypeDouble"
  }));
}
var G = (e2) => e2.includes("data:image/svg+xml");
function V(e2) {
  if (!e2) return null;
  switch (e2.type) {
    case "CIMPointSymbol":
    case "CIMTextSymbol":
      return "esriGeometryPoint";
    case "CIMLineSymbol":
      return "esriGeometryPolyline";
    case "CIMPolygonSymbol":
      return "esriGeometryPolygon";
    default:
      return null;
  }
}
function v(e2) {
  return e2 ? e2.charAt(0).toLowerCase() + e2.substring(1) : e2;
}
function z(e2, t2, r2, n2, o2, i2) {
  const {
    infos: a2
  } = i2;
  let l2 = 1, s2 = 0, c2 = 0, u2 = 0;
  for (const {
    offsetX: M2,
    offsetY: m2,
    rotation: C2,
    size: b2,
    frameHeight: I2,
    rotateClockWise: p2
  } of a2) {
    c2 = U(M2, m2, s2, l2, c2), u2 = J(M2, m2, s2, l2, u2), I2 && (l2 *= b2 / I2), s2 = W(C2, p2, s2);
  }
  const f2 = U(n2, o2, s2, l2, c2), y2 = J(n2, o2, s2, l2, u2);
  return {
    size: e2 * l2,
    rotation: W(t2, r2, s2),
    offsetX: f2,
    offsetY: y2
  };
}
function E(e2) {
  if (null == e2) return false;
  if (Array.isArray(e2)) return e2.every((e3) => E(e3));
  switch (typeof e2) {
    case "string":
      return !!e2;
    case "number":
      return !isNaN(e2);
  }
}
function O(r2, n2) {
  if ("color" === n2 || "outlinecolor" === n2 || "backgroundcolor" === n2 || "borderlinecolor" === n2 || "tintcolor" === n2) return [...e[n2]];
  const o2 = t[r2];
  if (!o2) throw new Error(`InternalError: default value for type ${r2}.`);
  return o2[n2];
}
function D(e2) {
  return e2?.dashTemplate && "string" == typeof e2.dashTemplate && (e2.dashTemplate = e2.dashTemplate.split(" ").map(Number)), e2;
}
function j(e2) {
  if (null == e2) return "Normal";
  switch (e2.type) {
    case "CIMTextSymbol":
      return e2.textCase ?? "Normal";
    case "CIMPointSymbol":
    case "CIMLineSymbol":
    case "CIMPolygonSymbol":
      {
        const t2 = e2.symbolLayers;
        if (!t2) return "Normal";
        for (const e3 of t2) if ("CIMVectorMarker" === e3.type) return j(e3);
      }
      break;
    case "CIMVectorMarker": {
      const t2 = e2.markerGraphics;
      if (!t2) return "Normal";
      for (const e3 of t2) if (e3.symbol) return j(e3.symbol);
    }
  }
  return "Normal";
}
function q(e2) {
  if (e2) switch (e2.type) {
    case "CIMTextSymbol":
      return e2.height;
    case "CIMPointSymbol": {
      let r2 = 0;
      if (e2.symbolLayers) {
        for (const n2 of e2.symbolLayers) if (n2) switch (n2.type) {
          case "CIMCharacterMarker":
          case "CIMPictureMarker":
          case "CIMVectorMarker":
          case "CIMObjectMarker3D":
          case "CIMglTFMarker3D": {
            const e3 = n2.size ?? t.CIMVectorMarker.size;
            e3 > r2 && (r2 = e3);
            break;
          }
        }
      }
      return r2;
    }
    case "CIMLineSymbol":
    case "CIMPolygonSymbol": {
      let r2 = 0;
      if (e2.symbolLayers) {
        for (const n2 of e2.symbolLayers) if (n2) switch (n2.type) {
          case "CIMSolidStroke":
          case "CIMPictureStroke":
          case "CIMGradientStroke": {
            const e3 = n2.width;
            null != e3 && e3 > r2 && (r2 = e3);
            break;
          }
          case "CIMCharacterMarker":
          case "CIMPictureMarker":
          case "CIMVectorMarker":
          case "CIMObjectMarker3D":
          case "CIMglTFMarker3D":
            if (n2.markerPlacement && b(n2.markerPlacement)) {
              const e3 = n2.size ?? t.CIMVectorMarker.size;
              e3 > r2 && (r2 = e3);
            }
            break;
          case "CIMPictureFill": {
            const e3 = n2.height;
            null != e3 && e3 > r2 && (r2 = e3);
          }
        }
      }
      return r2;
    }
  }
}
function B(e2, t2) {
  if (null !== t2) {
    const r2 = t2.get(e2);
    return r2 ? r2.name : e2;
  }
  return e2;
}
function R(e2) {
  return e2.map((e3) => __spreadProps(__spreadValues({}, e3), {
    propertyName: v(e3.propertyName)
  }));
}
function H(e2) {
  const t2 = {};
  for (const r2 in e2) {
    const n2 = e2[r2];
    t2[v(r2)] = n2;
  }
  return t2;
}
function J(e2, t2, r2, n2, o2) {
  const i2 = r2 * Math.PI / 180;
  if (i2) {
    const r3 = Math.cos(i2);
    return (Math.sin(i2) * e2 + r3 * t2) * n2 + o2;
  }
  return t2 * n2 + o2;
}
function U(e2, t2, r2, n2, o2) {
  const i2 = r2 * Math.PI / 180;
  if (i2) {
    return (Math.cos(i2) * e2 - Math.sin(i2) * t2) * n2 + o2;
  }
  return e2 * n2 + o2;
}
function W(e2, t2, r2) {
  return t2 ? r2 - e2 : r2 + e2;
}

export {
  t,
  n,
  o,
  l,
  s,
  u,
  f,
  y,
  M,
  m,
  C,
  b,
  I,
  p,
  h,
  d,
  k,
  S,
  g,
  P,
  w,
  L,
  N,
  T,
  x,
  A,
  F,
  G,
  V,
  v,
  z,
  E,
  O,
  D,
  j,
  q,
  B,
  R,
  H
};
//# sourceMappingURL=chunk-EKHRAAS6.js.map
