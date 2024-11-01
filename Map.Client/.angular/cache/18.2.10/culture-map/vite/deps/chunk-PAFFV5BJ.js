import {
  h
} from "./chunk-Q645EYZX.js";
import {
  s
} from "./chunk-6QDMUFEM.js";
import {
  e as e2
} from "./chunk-T3454WZK.js";
import {
  c as c2,
  l
} from "./chunk-PUH7YYDT.js";
import {
  c,
  e2 as e
} from "./chunk-P7OSFLIX.js";
import {
  I as I2,
  a,
  r
} from "./chunk-R4DKV4UN.js";
import {
  D,
  I,
  O
} from "./chunk-YLE5AYZV.js";
import {
  W2 as W
} from "./chunk-JJS7PR2U.js";
import {
  n as n2
} from "./chunk-V5C6HSAM.js";
import {
  n2 as n
} from "./chunk-WYIDUUN2.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/enums.js
var T;
var E;
var L;
var I3;
var A;
var _;
var R;
var N;
var S;
!function(T2) {
  T2[T2.FILL = 0] = "FILL", T2[T2.LINE = 1] = "LINE", T2[T2.MARKER = 2] = "MARKER", T2[T2.TEXT = 3] = "TEXT", T2[T2.LABEL = 4] = "LABEL";
}(T || (T = {})), function(T2) {
  T2[T2.NONE = 0] = "NONE", T2[T2.MAP = 1] = "MAP", T2[T2.LABEL = 2] = "LABEL", T2[T2.LABEL_ALPHA = 4] = "LABEL_ALPHA", T2[T2.HITTEST = 8] = "HITTEST", T2[T2.HIGHLIGHT = 16] = "HIGHLIGHT", T2[T2.CLIP = 32] = "CLIP", T2[T2.DEBUG = 64] = "DEBUG", T2[T2.NUM_DRAW_PHASES = 9] = "NUM_DRAW_PHASES";
}(E || (E = {})), function(T2) {
  T2[T2.SIZE = 0] = "SIZE", T2[T2.COLOR = 1] = "COLOR", T2[T2.OPACITY = 2] = "OPACITY", T2[T2.ROTATION = 3] = "ROTATION";
}(L || (L = {})), function(T2) {
  T2[T2.MINMAX_TARGETS_OUTLINE = 128] = "MINMAX_TARGETS_OUTLINE", T2[T2.SCALE_TARGETS_OUTLINE = 256] = "SCALE_TARGETS_OUTLINE", T2[T2.FIELD_TARGETS_OUTLINE = 512] = "FIELD_TARGETS_OUTLINE", T2[T2.UNIT_TARGETS_OUTLINE = 1024] = "UNIT_TARGETS_OUTLINE";
}(I3 || (I3 = {})), function(T2) {
  T2[T2.SPRITE = 0] = "SPRITE", T2[T2.GLYPH = 1] = "GLYPH";
}(A || (A = {})), function(T2) {
  T2[T2.DEFAULT = 0] = "DEFAULT", T2[T2.SIMPLE = 1] = "SIMPLE", T2[T2.DOT_DENSITY = 2] = "DOT_DENSITY", T2[T2.OUTLINE_FILL = 3] = "OUTLINE_FILL", T2[T2.OUTLINE_FILL_SIMPLE = 4] = "OUTLINE_FILL_SIMPLE", T2[T2.HEATMAP = 5] = "HEATMAP", T2[T2.PIE_CHART = 6] = "PIE_CHART";
}(_ || (_ = {})), function(T2) {
  T2[T2.All = 0] = "All", T2[T2.Highlight = 1] = "Highlight", T2[T2.InsideEffect = 2] = "InsideEffect", T2[T2.OutsideEffect = 3] = "OutsideEffect";
}(R || (R = {})), function(T2) {
  T2[T2.BATCHING = 0] = "BATCHING", T2[T2.STRICT_ORDER = 1] = "STRICT_ORDER", T2[T2.STRICT_MARKERS_AND_TEXT = 2] = "STRICT_MARKERS_AND_TEXT";
}(N || (N = {})), function(T2) {
  T2[T2.FILL = 0] = "FILL", T2[T2.LINE = 1] = "LINE", T2[T2.MARKER = 2] = "MARKER", T2[T2.TEXT = 3] = "TEXT";
}(S || (S = {}));

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/featureTechniqueUtils.js
var s2 = {
  color: {
    write: [true, true, true, true],
    blendMode: "composite"
  },
  depth: false,
  stencil: {
    write: false,
    test: {
      ref: (t2) => t2.stencilRef,
      compare: O.EQUAL,
      mask: 255,
      op: {
        fail: I.KEEP,
        zFail: I.KEEP,
        zPass: I.REPLACE
      }
    }
  }
};
var l2 = {
  color: {
    write: [true, true, true, true],
    blendMode: "additive"
  },
  depth: false,
  stencil: false
};
var a2 = __spreadProps(__spreadValues({}, s2), {
  color: {
    write: [true, true, true, true],
    blendMode: "delete"
  }
});
function c3({
  pixelRatio: e4,
  state: i2,
  displayLevel: o2,
  requiredLevel: r3
}, n4) {
  const s5 = 1 / 2 ** (o2 - n4.key.level), l4 = 1 / 2 ** (r3 - n4.key.level);
  return {
    displayMat3: Array.from(i2.displayMat3),
    displayViewMat3: Array.from(i2.displayViewMat3),
    displayViewScreenMat3: Array.from(n4.transforms.displayViewScreenMat3),
    viewMat3: Array.from(i2.viewMat3),
    tileMat3: Array.from(n4.transforms.tileMat3),
    displayZoomFactor: s5,
    requiredZoomFactor: l4,
    tileOffset: [n4.x, n4.y],
    currentScale: i2.scale,
    currentZoom: o2,
    metersPerSRUnit: W(i2.spatialReference),
    rotation: i2.rotation,
    pixelRatio: e4
  };
}
function f(t2) {
  return "highlight" === t2.passOptions?.type;
}
function p(t2) {
  return "hittest" === t2.passOptions?.type;
}
function u(t2) {
  if (!p(t2)) return null;
  const {
    position: e4,
    distance: i2,
    smallSymbolDistance: o2,
    smallSymbolSizeThreshold: r3
  } = t2.passOptions;
  return {
    position: e4,
    distance: i2,
    smallSymbolDistance: o2,
    smallSymbolSizeThreshold: r3
  };
}
function m(t2) {
  if (!f(t2)) return null;
  const {
    activeReasons: e4,
    highlightAll: i2
  } = t2.passOptions;
  return {
    activeReasons: e4,
    highlightAll: i2 ? 1 : 0
  };
}
function d(t2, e4, i2) {
  const o2 = {};
  for (const r3 in i2) i2[r3] instanceof Function ? o2[r3] = i2[r3](t2, e4) : o2[r3] = i2[r3];
  return o2;
}
function y(t2, e4) {
  const {
    attributeView: i2,
    context: o2
  } = t2;
  return {
    storage: i2.getUniforms(o2),
    view: c3(t2, e4),
    hittestRequest: u(t2),
    highlight: m(t2)
  };
}
function h2(t2) {
  return {
    inside: t2.selection === R.InsideEffect,
    outside: t2.selection === R.OutsideEffect
  };
}
function M(t2) {
  return p(t2) ? l2 : f(t2) && "clear" === t2.passOptions.stepType ? a2 : s2;
}
function w(t2) {
  const {
    row: o2,
    col: r3
  } = t2.key, n4 = r3 * a, s5 = o2 * a;
  return {
    tileOffsetFromLocalOrigin: [n4 % r, s5 % r],
    maxIntsToLocalOrigin: [Math.floor(n4 / r), Math.floor(s5 / r)]
  };
}

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/effects/highlight/parameters.js
var o = 1;
var t = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1];
var i = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
var n3 = 256;
var e3 = {
  outlineWidth: 1.3,
  outerHaloWidth: 0.4,
  innerHaloWidth: 0.4,
  outlinePosition: 0
};

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/effects/highlight/HighlightGradient.js
var a3 = () => n.getLogger("esri.views.2d.engine.webgl.painter.highlight.HighlightGradient");
function u2(o2, i2) {
  i2.fillColor[0] = o2.color.r / 255, i2.fillColor[1] = o2.color.g / 255, i2.fillColor[2] = o2.color.b / 255, i2.fillColor[3] = o2.color.a, o2.haloColor ? (i2.outlineColor[0] = o2.haloColor.r / 255, i2.outlineColor[1] = o2.haloColor.g / 255, i2.outlineColor[2] = o2.haloColor.b / 255, i2.outlineColor[3] = o2.haloColor.a) : (i2.outlineColor[0] = i2.fillColor[0], i2.outlineColor[1] = i2.fillColor[1], i2.outlineColor[2] = i2.fillColor[2], i2.outlineColor[3] = i2.fillColor[3]), i2.fillColor[3] *= o2.fillOpacity, i2.outlineColor[3] *= o2.haloOpacity, i2.fillColor[0] *= i2.fillColor[3], i2.fillColor[1] *= i2.fillColor[3], i2.fillColor[2] *= i2.fillColor[3], i2.outlineColor[0] *= i2.outlineColor[3], i2.outlineColor[1] *= i2.outlineColor[3], i2.outlineColor[2] *= i2.outlineColor[3], i2.outlineWidth = e3.outlineWidth, i2.outerHaloWidth = e3.outerHaloWidth, i2.innerHaloWidth = e3.innerHaloWidth, i2.outlinePosition = e3.outlinePosition;
}
var d2 = [0, 0, 0, 0];
var g = class {
  constructor() {
    this.type = "single", this._convertedHighlightOptions = {
      fillColor: [0.2 * 0.75, 0.6 * 0.75, 0.675, 0.75],
      outlineColor: [0.2 * 0.9, 0.54, 0.81, 0.9],
      outlinePosition: e3.outlinePosition,
      outlineWidth: e3.outlineWidth,
      innerHaloWidth: e3.innerHaloWidth,
      outerHaloWidth: e3.outerHaloWidth
    }, this._shadeTexChanged = true, this._texelData = new Uint8Array(4 * n3), this._minMaxDistance = [0, 0];
  }
  setHighlightOptions(o2) {
    const i2 = this._convertedHighlightOptions;
    u2(o2, i2);
    const t2 = i2.outlinePosition - i2.outlineWidth / 2 - i2.outerHaloWidth, e4 = i2.outlinePosition - i2.outlineWidth / 2, n4 = i2.outlinePosition + i2.outlineWidth / 2, h5 = i2.outlinePosition + i2.outlineWidth / 2 + i2.innerHaloWidth, s5 = Math.sqrt(Math.PI / 2) * o, g2 = Math.abs(t2) > s5 ? Math.round(10 * (Math.abs(t2) - s5)) / 10 : 0, f2 = Math.abs(h5) > s5 ? Math.round(10 * (Math.abs(h5) - s5)) / 10 : 0;
    let C;
    g2 && !f2 ? a3().error("The outer rim of the highlight is " + g2 + "px away from the edge of the feature; consider reducing some width values or shifting the outline position towards positive values (inwards).") : !g2 && f2 ? a3().error("The inner rim of the highlight is " + f2 + "px away from the edge of the feature; consider reducing some width values or shifting the outline position towards negative values (outwards).") : g2 && f2 && a3().error("The highlight is " + Math.max(g2, f2) + "px away from the edge of the feature; consider reducing some width values.");
    const c4 = [void 0, void 0, void 0, void 0];
    function m2(o3, i3, t3) {
      c4[0] = (1 - t3) * o3[0] + t3 * i3[0], c4[1] = (1 - t3) * o3[1] + t3 * i3[1], c4[2] = (1 - t3) * o3[2] + t3 * i3[2], c4[3] = (1 - t3) * o3[3] + t3 * i3[3];
    }
    const {
      _texelData: p2
    } = this;
    for (let r3 = 0; r3 < n3; ++r3) C = t2 + r3 / (n3 - 1) * (h5 - t2), C < t2 ? (c4[0] = 0, c4[1] = 0, c4[2] = 0, c4[3] = 0) : C < e4 ? m2(d2, i2.outlineColor, (C - t2) / (e4 - t2)) : C < n4 ? [c4[0], c4[1], c4[2], c4[3]] = i2.outlineColor : C < h5 ? m2(i2.outlineColor, i2.fillColor, (C - n4) / (h5 - n4)) : [c4[0], c4[1], c4[2], c4[3]] = i2.fillColor, p2[4 * r3] = 255 * c4[0], p2[4 * r3 + 1] = 255 * c4[1], p2[4 * r3 + 2] = 255 * c4[2], p2[4 * r3 + 3] = 255 * c4[3];
    this._minMaxDistance[0] = t2, this._minMaxDistance[1] = h5, this._shadeTexChanged = true;
  }
  applyHighlightOptions(o2, i2) {
    if (!this._shadeTex) {
      const i3 = new e();
      i3.wrapMode = D.CLAMP_TO_EDGE, i3.width = n3, i3.height = 1, this._shadeTex = new c(o2, i3);
    }
    this._shadeTexChanged && (this._shadeTex.updateData(0, 0, 0, n3, 1, this._texelData), this._shadeTexChanged = false), o2.bindTexture(this._shadeTex, I2), i2.setUniform2fv("u_minMaxDistance", this._minMaxDistance);
  }
  destroy() {
    this._shadeTex?.dispose(), this._shadeTex = null;
  }
  getReasonsWithGradients() {
    return [{
      activeReasons: (1 << l.length) - 1,
      activeGradient: this
    }];
  }
};

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/effects/highlight/MultiHighlightGradient.js
var s3 = class {
  constructor() {
    this.type = "multi";
    const s5 = {};
    for (const n4 in c2) s5[n4] = new g();
    this.gradients = s5;
  }
  setHighlightOptions(i2) {
    for (const s5 in c2) {
      const n4 = c2[s5](i2);
      this.gradients[s5].setHighlightOptions(n4);
    }
  }
  applyHighlightOptions(t2, i2, s5) {
    this.gradients[s5].applyHighlightOptions(t2, i2);
  }
  destroy() {
    for (const i2 in c2) this.gradients[i2].destroy();
  }
  getReasonsWithGradients() {
    let t2 = 1;
    const i2 = [];
    for (const s5 in this.gradients) {
      const n4 = this.gradients[s5];
      i2.push({
        activeReasons: t2,
        activeGradient: n4
      }), t2 <<= 1;
    }
    return i2;
  }
};

// ../../../node_modules/@arcgis/core/views/2d/layers/support/util.js
var l3 = new n2({
  esriGeometryPoint: "point",
  esriGeometryMultipoint: "multipoint",
  esriGeometryPolyline: "polyline",
  esriGeometryPolygon: "polygon",
  esriGeometryMultiPatch: "multipatch",
  mesh: "mesh"
});
function s4(t2) {
  return l3.toJSON(t2);
}
function r2(t2) {
  const {
    bandCount: e4,
    attributeTable: i2,
    colormap: n4,
    pixelType: l4
  } = t2.raster.rasterInfo;
  return 1 === e4 && (null != i2 || null != n4 || "u8" === l4 || "s8" === l4);
}
function h3(t2, n4) {
  return "single" === t2?.type && n4.multiHighlightEnabled && (t2.destroy(), t2 = null), "multi" !== t2?.type || n4.multiHighlightEnabled || (t2.destroy(), t2 = null), t2 || (t2 = n4.multiHighlightEnabled ? new s3() : new g()), t2.setHighlightOptions(n4), t2;
}
function a4(t2, e4, i2) {
  const {
    painter: l4,
    highlightGradient: s5
  } = t2, {
    highlight: o2
  } = l4.effects;
  if (!s5) return;
  const r3 = t2.passOptions, h5 = s5.getReasonsWithGradients();
  for (let a5 = 0; a5 < h5.length; a5++) {
    const s6 = __spreadProps(__spreadValues({}, t2), {
      passOptions: {
        type: "highlight",
        activeGradient: h5[a5].activeGradient,
        activeReasons: h5[a5].activeReasons,
        stepType: "burn",
        highlightAll: e4
      }
    });
    if (o2.bind(s6), i2(s6), a5 < h5.length - 1) {
      let n4 = 0;
      for (let t3 = a5 + 1; t3 < h5.length; t3++) n4 |= h5[t3].activeReasons;
      i2(__spreadProps(__spreadValues({}, t2), {
        passOptions: {
          type: "highlight",
          activeGradient: h5[a5].activeGradient,
          activeReasons: n4,
          stepType: "clear",
          highlightAll: e4
        }
      }));
    }
    const r4 = __spreadProps(__spreadValues({}, t2), {
      passOptions: {
        type: "highlight",
        activeGradient: h5[a5].activeGradient,
        activeReasons: h5[a5].activeReasons,
        stepType: "draw",
        highlightAll: e4
      }
    });
    l4.setPipelineState(M(t2)), l4.updatePipelineState(t2.context), o2.draw(r4), o2.unbind();
  }
  t2.passOptions = r3;
}

// ../../../node_modules/@arcgis/core/views/2d/engine/Container.js
var h4 = class extends s {
  constructor() {
    super(...arguments), this._childrenSet = /* @__PURE__ */ new Set(), this._needsSort = false, this._children = [], this._effectView = null, this._highlightOptions = null, this._highlightGradient = null;
  }
  get blendMode() {
    return this._blendMode;
  }
  set blendMode(e4) {
    this._blendMode = e4, this.requestRender();
  }
  get children() {
    return this._children;
  }
  get clips() {
    return this._clips;
  }
  set clips(e4) {
    this._clips = e4, this.children.forEach((t2) => t2.clips = e4);
  }
  get computedEffects() {
    return this._effectView?.effects ?? null;
  }
  get effect() {
    return this._effectView?.effect ?? "";
  }
  set effect(e4) {
    (this._effectView || e4) && (this._effectView || (this._effectView = new h()), this._effectView.effect = e4, this.requestRender());
  }
  get highlightOptions() {
    return this._highlightOptions;
  }
  set highlightOptions(e4) {
    if (!e4) return this._highlightOptions = null, void (this._highlightGradient && (this._highlightGradient.destroy(), this._highlightGradient = null, this.requestRender()));
    this._highlightOptions?.equals(e4) || (this._highlightOptions = e4, this._highlightGradient = h3(this._highlightGradient, e4), this.requestRender());
  }
  get hasBlending() {
    return !!this.blendMode;
  }
  get hasHighlight() {
    return this.children.some((e4) => e4.hasHighlight);
  }
  get hasLabels() {
    return this.children.some((e4) => e4.hasLabels);
  }
  get requiresDedicatedFBO() {
    return this.children.some((e4) => "blendMode" in e4 && e4.blendMode && "normal" !== e4.blendMode);
  }
  updateTransitionProperties(e4, t2) {
    super.updateTransitionProperties(e4, t2), this._effectView && (this._effectView.transitionStep(e4, t2), this._effectView.transitioning && this.requestRender());
  }
  doRender(e4) {
    const t2 = this.createRenderParams(e4), {
      painter: i2
    } = t2;
    i2.beforeRenderLayer(t2, this._clips?.length ? 255 : 0, this.computedOpacity), this.renderChildren(t2), i2.afterRenderLayer(t2, this.computedOpacity);
  }
  addChild(e4) {
    return this.addChildAt(e4, this.children.length);
  }
  addChildAt(e4, t2 = this.children.length) {
    if (!e4) return e4;
    if (this.contains(e4)) return e4;
    this._needsSort = true;
    const i2 = e4.parent;
    return i2 && i2 !== this && i2.removeChild(e4), t2 >= this.children.length ? this.children.push(e4) : this.children.splice(t2, 0, e4), this._childrenSet.add(e4), e4.parent = this, e4.stage = this.stage, this !== this.stage && (e4.clips = this.clips), this.requestRender(), e4;
  }
  contains(e4) {
    return this._childrenSet.has(e4);
  }
  endTransitions() {
    super.endTransitions(), this._effectView && (this._effectView.endTransitions(), this.requestRender());
  }
  removeAllChildren() {
    this._childrenSet.clear(), this._needsSort = true;
    for (const e4 of this.children) this !== this.stage && (e4.clips = null), e4.stage = null, e4.parent = null;
    this.children.length = 0;
  }
  removeChild(e4) {
    return this.contains(e4) ? this.removeChildAt(this.children.indexOf(e4)) : e4;
  }
  removeChildAt(e4) {
    if (e4 < 0 || e4 >= this.children.length) return null;
    this._needsSort = true;
    const t2 = this.children.splice(e4, 1)[0];
    return this._childrenSet.delete(t2), this !== this.stage && (t2.clips = null), t2.stage = null, t2.parent = null, t2;
  }
  sortChildren(e4) {
    this._needsSort && (this.children.sort(e4), this._needsSort = false);
  }
  beforeRender(e4) {
    super.beforeRender(e4);
    for (const t2 of this.children) t2.beforeRender(e4);
  }
  afterRender(e4) {
    super.afterRender(e4);
    for (const t2 of this.children) t2.afterRender(e4);
  }
  _createTransforms() {
    return {
      displayViewScreenMat3: e2()
    };
  }
  onAttach() {
    super.onAttach();
    const e4 = this.stage;
    for (const t2 of this.children) t2.stage = e4;
  }
  onDetach() {
    super.onDetach();
    for (const e4 of this.children) e4.stage = null;
  }
  renderChildren(e4) {
    for (const t2 of this.children) t2.processRender(e4);
  }
  createRenderParams(e4) {
    return __spreadProps(__spreadValues({}, e4), {
      requireFBO: this.requiresDedicatedFBO,
      blendMode: this.blendMode,
      effects: this.computedEffects,
      globalOpacity: e4.globalOpacity * this.computedOpacity,
      inFadeTransition: this.inFadeTransition,
      highlightGradient: this._highlightGradient || e4.highlightGradient
    });
  }
};

export {
  o,
  t,
  i,
  E,
  L,
  A,
  R,
  N,
  S,
  c3 as c,
  f,
  p,
  d,
  y,
  h2 as h,
  M,
  w,
  s4 as s,
  r2 as r,
  a4 as a,
  h4 as h2
};
//# sourceMappingURL=chunk-PAFFV5BJ.js.map
