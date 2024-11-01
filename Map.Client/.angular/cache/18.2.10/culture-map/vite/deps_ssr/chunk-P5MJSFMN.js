import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  h
} from "./chunk-UE7ZYRIH.js";
import {
  t
} from "./chunk-W24M6HII.js";
import {
  a as a2
} from "./chunk-AABDXAD3.js";
import {
  n as n3
} from "./chunk-LGS63R4F.js";
import {
  a
} from "./chunk-U4EMQMDC.js";
import {
  n as n4
} from "./chunk-A2FDYA6M.js";
import {
  e as e2
} from "./chunk-YGAXDKHF.js";
import {
  e as e3
} from "./chunk-4TOSJLKR.js";
import {
  m as m2
} from "./chunk-5X5U7R6O.js";
import {
  c,
  f,
  i,
  l,
  m,
  n as n2,
  o as o2,
  r,
  x
} from "./chunk-KOI252FF.js";
import {
  e
} from "./chunk-2OZSYJDX.js";
import {
  o
} from "./chunk-MZM4INJV.js";
import {
  n
} from "./chunk-J4GMQHGL.js";

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float4sPassUniform.js
var e4 = class extends a2 {
  constructor(r2, e6, o3) {
    super(r2, "vec4", a.Pass, (s, o4, t3) => s.setUniform4fv(r2, e6(o4, t3)), o3);
  }
};

// ../../../node_modules/@arcgis/core/views/3d/layers/support/FastSymbolUpdates.js
var h2;
var y;
!function(e6) {
  e6[e6.Undefined = 0] = "Undefined", e6[e6.DefinedSize = 1] = "DefinedSize", e6[e6.DefinedScale = 2] = "DefinedScale";
}(h2 || (h2 = {})), function(e6) {
  e6[e6.Undefined = 0] = "Undefined", e6[e6.DefinedAngle = 1] = "DefinedAngle";
}(y || (y = {}));
var x2 = class {
  constructor(e6) {
    this.field = e6;
  }
};
var g = class extends x2 {
  constructor(e6) {
    super(e6), this.minSize = [0, 0, 0], this.maxSize = [0, 0, 0], this.offset = [0, 0, 0], this.factor = [0, 0, 0], this.type = [h2.Undefined, h2.Undefined, h2.Undefined];
  }
};
var b = class extends x2 {
  constructor(e6) {
    super(e6), this.colors = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], this.values = [0, 0, 0, 0, 0, 0, 0, 0];
  }
};
var C = class extends x2 {
  constructor(e6) {
    super(e6), this.values = [0, 0, 0, 0, 0, 0, 0, 0], this.opacityValues = [0, 0, 0, 0, 0, 0, 0, 0];
  }
};
var U = class {
};
function w(e6) {
  return null != e6;
}
function V(e6) {
  return "number" == typeof e6;
}
function M(e6) {
  return "string" == typeof e6;
}
function j(e6) {
  return null == e6 || M(e6);
}
function A(e6, t3) {
  e6 && e6.push(t3);
}
function I(e6, t3, o3, i2 = e2()) {
  const n5 = e6 || 0, s = t3 || 0, r2 = o3 || 0;
  return 0 !== n5 && x(i2, i2, -n5 / 180 * Math.PI), 0 !== s && l(i2, i2, s / 180 * Math.PI), 0 !== r2 && m(i2, i2, r2 / 180 * Math.PI), i2;
}
function T(e6, t3, o3, i2, n5) {
  const s = e6.minSize, r2 = e6.maxSize;
  if (e6.useSymbolValue) {
    const e7 = i2.symbolSize[o3];
    return t3.minSize[o3] = e7, t3.maxSize[o3] = e7, t3.offset[o3] = t3.minSize[o3], t3.factor[o3] = 0, t3.type[o3] = h2.DefinedSize, true;
  }
  if (w(e6.field)) return w(e6.stops) ? 2 === e6.stops.length && V(e6.stops[0].size) && V(e6.stops[1].size) ? (F(e6.stops[0].size, e6.stops[1].size, e6.stops[0].value, e6.stops[1].value, t3, o3), t3.type[o3] = h2.DefinedSize, true) : (A(n5, "Could not convert size info: stops only supported with 2 elements"), false) : V(s) && V(r2) && w(e6.minDataValue) && w(e6.maxDataValue) ? (F(s, r2, e6.minDataValue, e6.maxDataValue, t3, o3), t3.type[o3] = h2.DefinedSize, true) : "unknown" === e6.valueUnit ? (A(n5, "Could not convert size info: proportional size not supported"), false) : null != m2[e6.valueUnit] ? (t3.minSize[o3] = -1 / 0, t3.maxSize[o3] = 1 / 0, t3.offset[o3] = 0, t3.factor[o3] = 1 / m2[e6.valueUnit], t3.type[o3] = h2.DefinedSize, true) : (A(n5, "Could not convert size info: scale-dependent size not supported"), false);
  if (!w(e6.field)) {
    if (e6.stops?.[0] && V(e6.stops[0].size)) return t3.minSize[o3] = e6.stops[0].size, t3.maxSize[o3] = e6.stops[0].size, t3.offset[o3] = t3.minSize[o3], t3.factor[o3] = 0, t3.type[o3] = h2.DefinedSize, true;
    if (V(s)) return t3.minSize[o3] = s, t3.maxSize[o3] = s, t3.offset[o3] = s, t3.factor[o3] = 0, t3.type[o3] = h2.DefinedSize, true;
  }
  return A(n5, "Could not convert size info: unsupported variant of sizeInfo"), false;
}
function F(e6, t3, o3, i2, n5, s) {
  const r2 = Math.abs(i2 - o3) > 0 ? (t3 - e6) / (i2 - o3) : 0;
  n5.minSize[s] = r2 > 0 ? e6 : t3, n5.maxSize[s] = r2 > 0 ? t3 : e6, n5.offset[s] = e6 - o3 * r2, n5.factor[s] = r2;
}
function P(e6, t3, o3, i2) {
  if (e6.normalizationField || e6.valueRepresentation) return A(i2, "Could not convert size info: unsupported property"), null;
  if (!j(e6.field)) return A(i2, "Could not convert size info: field is not a string"), null;
  if (t3.size) {
    if (e6.field) if (t3.size.field) {
      if (e6.field !== t3.size.field) return A(i2, "Could not convert size info: multiple fields in use"), null;
    } else t3.size.field = e6.field;
  } else t3.size = new g(e6.field);
  let n5;
  switch (e6.axis) {
    case "width":
      return n5 = T(e6, t3.size, 0, o3, i2), n5 ? t3 : null;
    case "height":
      return n5 = T(e6, t3.size, 2, o3, i2), n5 ? t3 : null;
    case "depth":
      return n5 = T(e6, t3.size, 1, o3, i2), n5 ? t3 : null;
    case "width-and-depth":
      return n5 = T(e6, t3.size, 0, o3, i2), n5 && T(e6, t3.size, 1, o3, i2), n5 ? t3 : null;
    case null:
    case void 0:
    case "all":
      return n5 = T(e6, t3.size, 0, o3, i2), n5 = n5 && T(e6, t3.size, 1, o3, i2), n5 = n5 && T(e6, t3.size, 2, o3, i2), n5 ? t3 : null;
    default:
      return A(i2, `Could not convert size info: unknown axis "${e6.axis}""`), null;
  }
}
function R(e6, t3, o3) {
  for (let n5 = 0; n5 < 3; ++n5) {
    let o4 = t3.unitInMeters;
    e6.type[n5] === h2.DefinedSize && (o4 *= t3.modelSize[n5], e6.type[n5] = h2.DefinedScale), e6.minSize[n5] = e6.minSize[n5] / o4, e6.maxSize[n5] = e6.maxSize[n5] / o4, e6.offset[n5] = e6.offset[n5] / o4, e6.factor[n5] = e6.factor[n5] / o4;
  }
  let i2;
  if (e6.type[0] !== h2.Undefined) i2 = 0;
  else if (e6.type[1] !== h2.Undefined) i2 = 1;
  else {
    if (e6.type[2] === h2.Undefined) return A(o3, "No size axis contains a valid size or scale"), false;
    i2 = 2;
  }
  for (let n5 = 0; n5 < 3; ++n5) e6.type[n5] === h2.Undefined && (e6.minSize[n5] = e6.minSize[i2], e6.maxSize[n5] = e6.maxSize[i2], e6.offset[n5] = e6.offset[i2], e6.factor[n5] = e6.factor[i2], e6.type[n5] = e6.type[i2]);
  return true;
}
function k(e6, t3, o3) {
  e6[4 * t3] = o3.r / 255, e6[4 * t3 + 1] = o3.g / 255, e6[4 * t3 + 2] = o3.b / 255, e6[4 * t3 + 3] = o3.a;
}
function E(e6, t3, o3) {
  if (e6.normalizationField) return A(o3, "Could not convert color info: unsupported property"), null;
  if (M(e6.field)) {
    if (!e6.stops) return A(o3, "Could not convert color info: missing stops or colors"), null;
    {
      if (e6.stops.length > 8) return A(o3, "Could not convert color info: too many color stops"), null;
      t3.color = new b(e6.field);
      const i2 = e6.stops;
      for (let e7 = 0; e7 < 8; ++e7) {
        const o4 = i2[Math.min(e7, i2.length - 1)];
        t3.color.values[e7] = o4.value, k(t3.color.colors, e7, o4.color);
      }
    }
  } else {
    if (!(e6.stops && e6.stops.length >= 0)) return A(o3, "Could not convert color info: no field and no colors/stops"), null;
    {
      const o4 = e6.stops && e6.stops.length >= 0 && e6.stops[0].color;
      t3.color = {
        field: null,
        values: [0, 0, 0, 0, 0, 0, 0, 0],
        colors: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      };
      for (let e7 = 0; e7 < 8; e7++) t3.color.values[e7] = 1 / 0, k(t3.color.colors, e7, o4);
    }
  }
  return t3;
}
function _(e6, t3, o3) {
  if (e6.normalizationField) return A(o3, "Could not convert opacity info: unsupported property"), null;
  if (M(e6.field)) {
    if (!e6.stops) return A(o3, "Could not convert opacity info: missing stops or opacities"), null;
    {
      if (e6.stops.length > 8) return A(o3, "Could not convert opacity info: too many opacity stops"), null;
      t3.opacity = new C(e6.field);
      const i2 = e6.stops;
      for (let e7 = 0; e7 < 8; ++e7) {
        const o4 = i2[Math.min(e7, i2.length - 1)];
        t3.opacity.values[e7] = o4.value, t3.opacity.opacityValues[e7] = o4.opacity;
      }
    }
  } else {
    if (!(e6.stops && e6.stops.length >= 0)) return A(o3, "Could not convert opacity info: no field and no opacities/stops"), null;
    {
      const o4 = e6.stops && e6.stops.length >= 0 ? e6.stops[0].opacity : 0;
      t3.opacity = {
        field: null,
        values: [0, 0, 0, 0, 0, 0, 0, 0],
        opacityValues: [0, 0, 0, 0, 0, 0, 0, 0]
      };
      for (let e7 = 0; e7 < 8; e7++) t3.opacity.values[e7] = 1 / 0, t3.opacity.opacityValues[e7] = o4;
    }
  }
  return t3;
}
function q(e6, t3, o3) {
  const i2 = 2 === o3 && "arithmetic" === e6.rotationType;
  t3.offset[o3] = i2 ? 90 : 0, t3.factor[o3] = i2 ? -1 : 1, t3.type[o3] = 1;
}
function $(e6, t3, o3) {
  if (!M(e6.field)) return A(o3, "Could not convert rotation info: field is not a string"), null;
  if (t3.rotation) {
    if (e6.field) if (t3.rotation.field) {
      if (e6.field !== t3.rotation.field) return A(o3, "Could not convert rotation info: multiple fields in use"), null;
    } else t3.rotation.field = e6.field;
  } else t3.rotation = {
    field: e6.field,
    offset: [0, 0, 0],
    factor: [1, 1, 1],
    type: [0, 0, 0]
  };
  switch (e6.axis) {
    case "tilt":
      return q(e6, t3.rotation, 0), t3;
    case "roll":
      return q(e6, t3.rotation, 1), t3;
    case null:
    case void 0:
    case "heading":
      return q(e6, t3.rotation, 2), t3;
    default:
      return A(o3, `Could not convert rotation info: unknown axis "${e6.axis}""`), null;
  }
}
var B = class {
  constructor(e6, t3 = [1, 1, 1], o3 = [1, 1, 1], i2 = 1, n5 = [0, 0, 0], s = [1, 1, 1], r2 = [0, 0, 0]) {
    this.supports = e6, this.modelSize = t3, this.symbolSize = o3, this.unitInMeters = i2, this.anchor = n5, this.scale = s, this.rotation = r2;
  }
};
function L(e6, t3, o3) {
  if (!e6) return null;
  const i2 = e6.reduce((e7, i3) => {
    if (!e7) return e7;
    if (i3.valueExpression) return A(o3, "Could not convert visual variables: arcade expressions not supported"), null;
    switch (i3.type) {
      case "size":
        return t3.supports.size ? P(i3, e7, t3, o3) : e7;
      case "color":
        return t3.supports.color ? E(i3, e7, o3) : e7;
      case "opacity":
        return t3.supports.opacity ? _(i3, e7, o3) : null;
      case "rotation":
        return t3.supports.rotation ? $(i3, e7, o3) : e7;
      default:
        return null;
    }
  }, new U());
  return !(e6.length > 0 && i2) || i2.size || i2.color || i2.opacity || i2.rotation ? i2?.size && !R(i2.size, t3, o3) ? null : i2 : null;
}
var N = class {
  constructor(e6, t3, o3) {
    this.visualVariables = e6, this.materialParameters = t3, this.requiresShaderTransformation = o3;
  }
};
function O(e6, t3) {
  if (!e6) return null;
  if (t.TESTS_DISABLE_FAST_UPDATES) return null;
  const o3 = L(e6.visualVariables, t3);
  return o3 ? new N(o3, K(o3, t3), !!o3.size) : null;
}
function G(e6, t3, o3) {
  if (!t3 || !e6) return false;
  const i2 = e6.visualVariables, n5 = L(t3.visualVariables, o3);
  return !!n5 && !!(H(i2.size, n5.size, "size") && H(i2.color, n5.color, "color") && H(i2.rotation, n5.rotation, "rotation") && H(i2.opacity, n5.opacity, "opacity")) && (e6.visualVariables = n5, e6.materialParameters = K(n5, o3), e6.requiresShaderTransformation = !!n5.size, true);
}
function H(e6, t3, o3) {
  if (!!e6 != !!t3) return false;
  if (e6 && e6.field !== t3?.field) return false;
  if (e6 && "rotation" === o3) {
    const o4 = e6, i2 = t3;
    for (let e7 = 0; e7 < 3; e7++) if (o4.type[e7] !== i2.type[e7] || o4.offset[e7] !== i2.offset[e7] || o4.factor[e7] !== i2.factor[e7]) return false;
  }
  return true;
}
var J = class extends n3 {
  constructor(e6) {
    super(), this.vvSize = e6?.size ?? null, this.vvColor = e6?.color ?? null, this.vvOpacity = e6?.opacity ?? null;
  }
};
function K(e6, n5) {
  const s = new J(e6);
  return s.vvSize && (s.vvSymbolAnchor = n5.anchor, o2(ee), I(n5.rotation[2], n5.rotation[0], n5.rotation[1], ee), s.vvSymbolRotationMatrix = s.vvSymbolRotationMatrix || e3(), n4(s.vvSymbolRotationMatrix, ee)), s;
}
function Q(t3, o3, i2) {
  if (!t3.vvSize) return i2;
  n2(Y, i2);
  const u = t3.vvSymbolRotationMatrix;
  r(ee, u[0], u[1], u[2], 0, u[3], u[4], u[5], 0, u[6], u[7], u[8], 0, 0, 0, 0, 1), c(Y, Y, ee);
  for (let n5 = 0; n5 < 3; ++n5) {
    const i3 = t3.vvSize.offset[n5] + o3[0] * t3.vvSize.factor[n5];
    Z[n5] = e(i3, t3.vvSize.minSize[n5], t3.vvSize.maxSize[n5]);
  }
  return f(Y, Y, Z), i(Y, Y, t3.vvSymbolAnchor), Y;
}
function W(t3, o3, i2) {
  if (!o3.vvSize) return o(t3, 1, 1, 1), t3;
  for (let n5 = 0; n5 < 3; ++n5) {
    const s = o3.vvSize.offset[n5] + i2[0] * o3.vvSize.factor[n5];
    t3[n5] = e(s, o3.vvSize.minSize[n5], o3.vvSize.maxSize[n5]);
  }
  return t3;
}
function X(e6, t3) {
  const o3 = null == e6 ? 0 : t3.attributes[e6];
  return "number" == typeof o3 && isFinite(o3) ? o3 : 0;
}
var Y = e2();
var Z = n();
var ee = e2();

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/materials/VisualVariablePassParameters.js
var t2 = class extends J {
  constructor() {
    super(...arguments), this.renderOccluded = h.Occlude, this.isDecoration = false;
  }
};
var e5 = 8;

export {
  e4 as e,
  B,
  O,
  G,
  Q,
  W,
  X,
  t2 as t,
  e5 as e2
};
//# sourceMappingURL=chunk-P5MJSFMN.js.map
