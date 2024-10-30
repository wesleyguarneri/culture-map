import {
  A as A2,
  B,
  G,
  H as H2,
  J,
  K,
  L,
  M as M2
} from "./chunk-ZYQL5F6K.js";
import {
  _ as _2,
  w as w3
} from "./chunk-I5SWBGDW.js";
import {
  U as U4,
  g as g2,
  j as j3
} from "./chunk-WMR65EYY.js";
import {
  o as o3
} from "./chunk-PPQDPHZN.js";
import {
  U as U3
} from "./chunk-MNNI2X2N.js";
import {
  A,
  T,
  U as U2,
  j as j2,
  w as w2
} from "./chunk-TMPIWG43.js";
import {
  r
} from "./chunk-WE6VW4MG.js";
import {
  f as f2
} from "./chunk-4SCJM64G.js";
import {
  U,
  a as a3,
  d as d2,
  f,
  h,
  i as i2,
  l,
  o as o2,
  s
} from "./chunk-IIVUY2T7.js";
import {
  N
} from "./chunk-TQYVLRAH.js";
import {
  a as a2
} from "./chunk-CZQYBYHB.js";
import {
  n
} from "./chunk-5I6J67HP.js";
import {
  M,
  i
} from "./chunk-O7UDKFOW.js";
import {
  x
} from "./chunk-3ZXOUEQG.js";
import {
  H,
  g,
  j
} from "./chunk-AXVPJBVW.js";
import {
  _,
  n as n2,
  t,
  y as y2
} from "./chunk-OXEPWRM7.js";
import {
  ee,
  w
} from "./chunk-JJS7PR2U.js";
import {
  d
} from "./chunk-XNUH25NY.js";
import {
  e as e2
} from "./chunk-4Z5SGKRM.js";
import {
  S
} from "./chunk-ANKOCGE2.js";
import {
  y
} from "./chunk-7CJXZOFG.js";
import {
  a3 as a
} from "./chunk-DDYVXG4F.js";
import {
  e,
  o
} from "./chunk-7DA6A5LD.js";
import {
  __async,
  __spreadValues
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/views/interactive/tooltip/tooltipCommonUtils.js
function R(t2, e3) {
  const o5 = a2(e3.vertexSpace), {
    scale: n4,
    orientation: l2
  } = t2, {
    transform: i3
  } = e3, s3 = F(i3);
  o5 && null != s3 ? (l2.actual = o2(s3, "degrees", "arithmetic"), l2.visible = true) : (l2.actual = null, l2.visible = false), o5 ? (n4.actual = i2(q(i3)), n4.visible = true) : (n4.actual = null, n4.visible = false);
}
function k(t2, e3, o5) {
  if (!e3 || !a2(e3.vertexSpace)) return;
  const n4 = e3.transform ??= new N(), {
    rotationAngle: r2,
    rotationAxis: a4
  } = n4, l2 = U2(t2.orientation.actual), i3 = E(a4);
  if (null != l2 && null != i3 && l2 !== r2) {
    o5?.onRotateStart?.(r2);
    const t3 = l2 * i3;
    n4.rotationAngle = t3, o5?.onRotate?.(t3), o5?.onRotateStop?.(t3);
  }
  const s3 = t2.scale.actual?.value, c2 = q(n4);
  if (null != s3 && s3 !== c2) {
    const {
      scale: t3
    } = n4;
    let e4;
    if (o5?.onScaleStart?.(t3[0], t3[1], t3[2]), 0 === c2) e4 = t(_);
    else {
      const o6 = s3 / c2;
      e4 = g(n2(), t3, o6);
    }
    n4.scale = e4, o5?.onScale?.(e4[0], e4[1], e4[2]), o5?.onScaleStop?.(e4[0], e4[1], e4[2]);
  }
}
function V(t2, e3) {
  const {
    x: o5,
    y: r2,
    z: a4
  } = e3, {
    x: l2,
    y: i3,
    z: s3
  } = D(t2, e3.spatialReference);
  return {
    dx: null == l2 || x(l2, o5) ? 0 : l2 - o5,
    dy: null == i3 || x(i3, r2) ? 0 : i3 - r2,
    dz: null == s3 || null == a4 || x(s3, a4) ? 0 : s3 - a4
  };
}
function D(t2, e3) {
  let o5, n4, r2;
  if (t2.geographic) {
    o5 = T(t2.longitude.actual), n4 = T(t2.latitude.actual), w(e3) && (null != o5 && null != n4 ? [o5, n4] = M(o5, n4, P) : null != o5 ? o5 = M(o5, 0, P)[0] : null != n4 && (n4 = M(0, n4, P)[1]));
    const a4 = t2.elevation.actual, s3 = ee(e3);
    r2 = null != s3 && null != a4 ? f(a4, s3) : void 0;
  } else o5 = t2.x.actual?.value, n4 = t2.y.actual?.value, r2 = t2.elevation.actual?.value;
  return {
    x: o5,
    y: n4,
    z: r2
  };
}
var P = [0, 0];
function F(t2) {
  if (!t2) return 0;
  const e3 = E(t2.rotationAxis);
  return null != e3 ? e3 * t2.rotationAngle : null;
}
function E(t2) {
  return H(t2, y2) ? 1 : H(t2, I) ? -1 : null;
}
var I = j(n2(), y2);
function q(t2) {
  return t2 ? Math.max(...t2.scale) : 1;
}
function G2(t2, e3) {
  return !("key-down" !== t2.type || t2.key !== f2.enterInputMode || !e3 || !O(e3.info)) && (e3.enterInputMode(), t2.stopPropagation(), true);
}
function O(t2) {
  const e3 = t2?.sketchOptions;
  if (!e3) return false;
  const {
    inputEnabled: o5,
    visibleElements: n4
  } = e3.tooltips;
  return o5 && true === t2.editableFields.some(({
    name: t3
  }) => "x" === t3 || "y" === t3 ? n4.coordinates : n4[t3]);
}
function T2(n4) {
  let r2 = null;
  return o([n4.on("paste", (e3) => __async(this, null, function* () {
    r2?.abort(), r2 = d(() => __async(this, null, function* () {
      _2() || (yield w3()), B2(e3, n4.info);
    }));
  })), d(() => w3()), e(() => r2?.abort())]);
}
function B2(t2, e3) {
  if (!e3 || !("geographic" in e3)) return;
  const o5 = t2.clipboardData?.getData("text");
  if (o5) if (e3.geographic) {
    const n4 = G(o5);
    n4 && (e3.longitude.applyValue(n4.longitude), e3.latitude.applyValue(n4.latitude), t2.stopPropagation(), t2.preventDefault());
  } else {
    const n4 = M2(o5);
    n4 && (e3.x.applyValue(n4.x), e3.y.applyValue(n4.y), t2.stopPropagation(), t2.preventDefault());
  }
}

// ../../../node_modules/@arcgis/core/views/support/automaticAreaMeasurementUtils.js
function o4(o5, u2, i3 = U4()) {
  if ("on-the-ground" === u2) {
    const r2 = o3(o5);
    return null != r2 ? r2 : j3(o5, i3);
  }
  return g2(o5, i3);
}
function u(e3, r2 = U4()) {
  return o4(e3, "on-the-ground", r2);
}

// ../../../node_modules/@arcgis/core/views/interactive/tooltip/fields/TooltipField.js
var s2 = class extends S {
  constructor(t2) {
    super(t2), this.actual = null, this.lockable = true, this.id = n(), this.inputValue = null, this.readOnly = false, this.suffix = null, this.visible = true, this.invalid = false, this.unlockOnVertexPlacement = true;
  }
  get committed() {
    return this.lockable ? this._get("committed") : null;
  }
  set committed(t2) {
    this.lockable && this._set("committed", t2);
  }
  get dirty() {
    return null != this.inputValue;
  }
  get locked() {
    return this.lockable && null != this.committed;
  }
  onInput(t2) {
    this.inputValue = t2;
  }
  onCommit(t2, o5, i3) {
    this.lockable ? this._onCommitLockable(t2, i3) : this._onCommitNonLockable(i3), this.invalid && "commit-and-exit" === t2 || i3.onCommit(o5, t2);
  }
  _onCommitLockable(t2, o5) {
    const {
      inputValue: i3,
      locked: l2
    } = this;
    l2 && n3(i3) ? this.unlock() : ("commit-and-exit" === t2 && !l2 || null != i3) && this._parseInputAndLock(o5);
  }
  _onCommitNonLockable(t2) {
    const {
      inputValue: o5
    } = this;
    n3(o5) ? this.setActual(null) : null != o5 && this._parseInputAndSetActual(t2);
  }
  applyValue(t2) {
    this.lockable ? this.lock(t2) : this.setActual(t2);
  }
  clearInputValue() {
    this.inputValue = null, this.invalid = false;
  }
  setActual(t2) {
    this.actual = t2, this.clearInputValue();
  }
  lock(t2) {
    this.lockable && (this.committed = t2 ?? this.actual, this.clearInputValue());
  }
  unlock() {
    this.lockable && (this.committed = null, this.clearInputValue());
  }
  toggleLock(t2) {
    this.lockable && (this.locked ? this.unlock() : this._parseInputAndLock(t2));
  }
  getSuffix(t2) {
    const {
      suffix: o5
    } = this;
    return "function" == typeof o5 ? o5(t2) : o5;
  }
  getFormattedValue(t2) {
    const {
      actual: o5,
      committed: i3,
      format: l2
    } = this;
    return null != i3 ? l2(i3, t2) : null != o5 ? l2(o5, t2) : null;
  }
  getRawDisplayValue(t2) {
    const {
      actual: o5,
      committed: i3,
      inputValue: l2
    } = this;
    return null != l2 ? l2 : this.lockable && null != i3 ? this.formatForInputMode(i3, t2) : null != o5 ? this.formatForInputMode(o5, t2) : null;
  }
  _parseInputAndSetActual(t2) {
    const {
      inputValue: o5
    } = this;
    if (null == o5 || n3(o5)) return this.setActual(null);
    const i3 = this.parse(o5, t2);
    null != i3 ? this.setActual(i3) : this.invalid = true;
  }
  _parseInputAndLock(t2) {
    const {
      inputValue: o5,
      actual: i3
    } = this;
    if (n3(o5)) return this.unlock();
    if (null == o5) return this.lock(i3);
    const l2 = this.parse(o5, t2);
    null != l2 ? this.lock(l2) : this.invalid = true;
  }
};
function n3(t2) {
  return null != t2 && "" === t2.trim();
}
e2([y()], s2.prototype, "actual", void 0), e2([y()], s2.prototype, "committed", null), e2([y()], s2.prototype, "dirty", null), e2([y()], s2.prototype, "format", void 0), e2([y()], s2.prototype, "formatForInputMode", void 0), e2([y()], s2.prototype, "lockable", void 0), e2([y()], s2.prototype, "locked", null), e2([y()], s2.prototype, "id", void 0), e2([y()], s2.prototype, "inputValue", void 0), e2([y()], s2.prototype, "name", void 0), e2([y()], s2.prototype, "parse", void 0), e2([y()], s2.prototype, "readOnly", void 0), e2([y()], s2.prototype, "suffix", void 0), e2([y()], s2.prototype, "title", void 0), e2([y()], s2.prototype, "visible", void 0), e2([y()], s2.prototype, "invalid", void 0), e2([y()], s2.prototype, "unlockOnVertexPlacement", void 0), s2 = e2([a("esri.views.interactive.tooltip.fields.TooltipField")], s2);

// ../../../node_modules/@arcgis/core/views/interactive/tooltip/fields/TooltipFieldElevation.js
var c = class extends s2 {
  constructor(t2) {
    super(t2), this.showAsZ = false;
  }
  normalizeCtorArgs(t2) {
    const e3 = (t3) => t3.inputUnitInfos.verticalLength.unit;
    return __spreadValues({
      name: "elevation",
      actual: h,
      parse: B((t3, o5) => a3(t3, e3(o5))),
      format: (t3, o5) => o5.formatters.verticalLength(t3),
      formatForInputMode: (t3, o5) => o5.formatters.scalar(s(t3, e3(o5))),
      suffix: (t3) => t3.inputUnitInfos.verticalLength.abbreviation,
      title: (t3) => t3.messages.sketch[this.showAsZ ? "z" : "elevation"],
      unlockOnVertexPlacement: false
    }, t2);
  }
};
e2([y()], c.prototype, "showAsZ", void 0), c = e2([a("esri.views.interactive.tooltip.fields.TooltipFieldElevation")], c);

// ../../../node_modules/@arcgis/core/views/interactive/tooltip/fields/TooltipFieldOrientation.js
var p = class extends s2 {
  constructor(o5) {
    super(o5), this.precision = 1;
  }
  normalizeCtorArgs(o5) {
    const i3 = (o6) => o6.inputUnitInfos.orientation.unit;
    return __spreadValues({
      name: "orientation",
      actual: null,
      parse: B((o6, r2) => o2(o6, i3(r2), "geographic")),
      format: (o6) => {
        const t2 = A(o6);
        return U3(t2, "geographic", this.precision);
      },
      formatForInputMode: (o6, r2) => {
        const t2 = A(o6);
        return r2.formatters.scalar(t2);
      },
      suffix: (o6) => o6.inputUnitInfos.orientation.abbreviation,
      title: (o6) => o6.messages.sketch.orientation
    }, o5);
  }
};
e2([y()], p.prototype, "precision", void 0), p = e2([a("esri.views.interactive.tooltip.fields.TooltipFieldOrientation")], p);

// ../../../node_modules/@arcgis/core/views/interactive/tooltip/fields/fields.js
function b(r2) {
  const n4 = (t2) => t2.inputUnitInfos.direction.unit, i3 = (t2) => t2.sketchOptions.values.effectiveDirectionMode;
  return new s2(__spreadValues({
    name: "direction",
    actual: U,
    parse: B((t2, a4) => o2(t2, n4(a4), "geographic")),
    format: (t2, e3) => {
      const a4 = i3(e3), r3 = w2(t2, a4);
      switch (a4) {
        case j2.Absolute:
          return e3.formatters.direction(r3);
        case j2.Relative:
          return e3.formatters.directionRelative(r3);
        case j2.RelativeBilateral:
          return e3.formatters.directionRelativeBilateral(r3);
      }
    },
    formatForInputMode: (t2, e3) => {
      const r3 = w2(t2, i3(e3));
      return e3.formatters.scalar(s(r3, n4(e3)));
    },
    suffix: (t2) => t2.inputUnitInfos.direction.abbreviation,
    title: (t2) => {
      const e3 = i3(t2), {
        absolute: a4,
        relative: r3
      } = t2.messages.sketch.direction;
      switch (e3) {
        case j2.Absolute:
          return a4;
        case j2.Relative:
        case j2.RelativeBilateral:
          return r3;
      }
    }
  }, r2));
}
function I2(t2) {
  const e3 = (t3) => t3.inputUnitInfos.length.unit;
  return new s2(__spreadValues({
    name: "distance",
    actual: h,
    parse: B((t3, a4) => a3(Math.max(t3, 0), e3(a4))),
    format: (t3, e4) => e4.formatters.length(t3),
    formatForInputMode: (t3, r2) => r2.formatters.scalar(s(t3, e3(r2))),
    suffix: (t3) => t3.inputUnitInfos.length.abbreviation,
    title: (t3) => t3.messages.sketch.distance
  }, t2));
}
function U5() {
  return I2({
    format: (t2, e3) => e3.formatters.totalLength(t2),
    title: (t2) => t2.messages.sketch.totalLength,
    readOnly: true
  });
}
function w4(t2) {
  return new c(t2);
}
function x2(t2) {
  return new p(t2);
}
function F2(t2) {
  return D2("scale", __spreadValues({
    name: "scale",
    actual: null,
    parse: B((t3) => i2(Math.abs(t3)))
  }, t2));
}
function M3(t2) {
  const e3 = (t3) => t3.inputUnitInfos.area.unit;
  return new s2(__spreadValues({
    name: "area",
    actual: d2,
    parse: B((t3, a4) => l(t3, e3(a4))),
    format: (t3, e4) => e4.formatters.area(t3),
    formatForInputMode: (t3, r2) => r2.formatters.scalar(s(t3, e3(r2))),
    suffix: (t3) => t3.inputUnitInfos.area.abbreviation,
    title: (t3) => t3.messages.sketch.area,
    readOnly: true
  }, t2));
}
function k2(e3) {
  return new s2(__spreadValues({
    name: "x",
    actual: U,
    parse: H2,
    format: (t2, e4) => e4.formatters.longitudeDecimalDegrees(t2),
    formatForInputMode: (t2) => L(t2),
    suffix: (t2) => t2.inputUnitInfos.longitudeLatitude.abbreviation,
    title: (t2) => t2.messages.sketch.longitude
  }, e3));
}
function j4(e3) {
  return new s2(__spreadValues({
    name: "y",
    actual: U,
    parse: J,
    format: (t2, e4) => e4.formatters.latitudeDecimalDegrees(t2),
    formatForInputMode: (t2) => A2(t2),
    suffix: (t2) => t2.inputUnitInfos.longitudeLatitude.abbreviation,
    title: (t2) => t2.messages.sketch.latitude
  }, e3));
}
function y3(t2) {
  return D2("x", __spreadValues({
    name: "x"
  }, t2));
}
function R2(t2) {
  return D2("y", __spreadValues({
    name: "y"
  }, t2));
}
function D2(t2, e3) {
  return new s2(__spreadValues({
    actual: i2(0),
    parse: B((t3) => i2(t3)),
    format: (t3, e4) => e4.formatters.scalar(t3),
    formatForInputMode: (t3, e4) => e4.formatters.scalar(t3),
    title: (e4) => e4.messages.sketch[t2]
  }, e3));
}

// ../../../node_modules/@arcgis/core/views/interactive/tooltip/infos/TooltipInfoWithCoordinates.js
var h2 = (h3) => {
  let f3 = class extends h3 {
    constructor() {
      super(...arguments), this.longitude = k2(), this.latitude = j4(), this.x = y3(), this.y = R2(), this.elevation = w4(), this.geographic = false;
    }
    get effectiveX() {
      return this.geographic ? this.longitude : this.x;
    }
    get effectiveY() {
      return this.geographic ? this.latitude : this.y;
    }
    get key() {
      return {
        longitude: this.longitude.actual,
        latitude: this.latitude.actual,
        x: this.x.actual,
        y: this.y.actual,
        elevation: this.elevation.actual,
        geographic: this.geographic
      };
    }
    setLocationFromPoint(t2, i3 = t2?.spatialReference) {
      if (this.geographic = !!i3 && r(i3), null == t2) return this._setActualLonLat(null, null), void this._setActualXY(null, null);
      if (this.geographic) {
        const e3 = i(t2, g3);
        this._setActualLonLat(K(e3?.[0]), K(e3?.[1]));
      } else this._setActualXY(i2(t2.x), i2(t2.y));
    }
    _setActualLonLat(t2, e3) {
      this.longitude.actual = t2, this.latitude.actual = e3;
    }
    _setActualXY(t2, e3) {
      this.x.actual = t2, this.y.actual = e3;
    }
  };
  return e2([y()], f3.prototype, "geographic", void 0), e2([y()], f3.prototype, "effectiveX", null), e2([y()], f3.prototype, "effectiveY", null), e2([y()], f3.prototype, "key", null), f3 = e2([a("esri.views.interactive.tooltip.infos.TooltipInfoWithCoordinates")], f3), f3;
};
var g3 = [0, 0];

export {
  R,
  k,
  V,
  G2 as G,
  T2 as T,
  B2 as B,
  b,
  I2 as I,
  U5 as U,
  x2 as x,
  F2 as F,
  M3 as M,
  h2 as h,
  u
};
//# sourceMappingURL=chunk-HUMP672Y.js.map
