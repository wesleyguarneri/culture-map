import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  A,
  G,
  L,
  S as S2,
  a2 as a4,
  c as c2,
  c2 as c3,
  e3,
  f,
  i2,
  i3,
  l4 as l2,
  r3 as r4,
  r4 as r5,
  s as s3,
  s2 as s4,
  v
} from "./chunk-NVXUR2U4.js";
import {
  Q
} from "./chunk-AP543QXG.js";
import {
  c
} from "./chunk-IPGNBAEV.js";
import {
  a as a3
} from "./chunk-JP4VYCP3.js";
import {
  w
} from "./chunk-Y72ZILQ6.js";
import {
  I,
  o as o3
} from "./chunk-EXKCGLRO.js";
import {
  r as r3
} from "./chunk-BZHHBBFX.js";
import {
  o as o2
} from "./chunk-ZREJ3Y2F.js";
import {
  E,
  N,
  i
} from "./chunk-VOOO6FU5.js";
import {
  o,
  s as s2
} from "./chunk-MZM4INJV.js";
import {
  l,
  r as r2
} from "./chunk-J4GMQHGL.js";
import {
  d
} from "./chunk-LZSLQ24Q.js";
import {
  _,
  a as a2
} from "./chunk-AUUN7RFQ.js";
import {
  e as e2
} from "./chunk-NUICEVIH.js";
import {
  S
} from "./chunk-NXK752PZ.js";
import {
  y
} from "./chunk-UVNLCXWD.js";
import {
  a3 as a,
  n as n2
} from "./chunk-UDMPWVPF.js";
import {
  b,
  s
} from "./chunk-AIZ3T7E3.js";
import {
  e,
  r
} from "./chunk-6WGE3IUL.js";
import {
  n2 as n
} from "./chunk-6JFGZTLU.js";
import {
  __async
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/views/3d/layers/graphics/graphicSymbolUtils.js
function i4(i5) {
  return i5 instanceof i3 ? i5.graphics3DSymbol : i5 instanceof c3 ? i5 : null;
}

// ../../../node_modules/@arcgis/core/views/3d/layers/graphics/labelPlacement.js
var u = () => n.getLogger("esri.views.3d.layers.graphics.labelPlacement");
var b2 = class {
  constructor(e4, t, n3, r6 = null) {
    this.graphics3DGraphic = e4, this.labelSymbol = t, this.labelClass = n3, this.disablePlacement = r6;
  }
};
function h(e4) {
  const t = C(e4);
  if (null == t) return null;
  const n3 = g(e4, t);
  if (null == n3) return null;
  const r6 = n3.anchor, l3 = !!t.hasLabelVerticalOffset, a5 = t.verticalOffset;
  return P(new i2(a5, r6, l3), n3, e4);
}
function g(e4, t) {
  if (t.anchor) return t;
  const n3 = e4.labelClass.labelPlacement, r6 = V[n3], l3 = r6 || y2(e4);
  return n3 && !r6 && u().warnOncePerTick(`the requested label placement '${n3}' is currently unsupported in SceneView.`), d2(l3, e4);
}
function O(e4) {
  const t = e4.graphics3DGraphic.graphics3DSymbol, n3 = i4(t);
  return null != n3 ? n3.symbol.symbolLayers.at(0) : null;
}
function d2(e4, t) {
  const n3 = t.graphics3DGraphic.graphic.geometry;
  if (null == n3) return null;
  if (null != t.disablePlacement) {
    return t.labelClass.labelPlacement ? (u().warnOncePerTick(v2(e4?.placement, t.disablePlacement.logEntityDescription)), y2(t)) : e4;
  }
  const r6 = n3.type;
  switch (r6) {
    case "polyline":
    case "polygon":
    case "extent":
    case "multipoint":
      if (t.labelClass.labelPlacement) return u().warnOncePerTick(v2(e4?.placement, `'${r6}' geometries`)), y2(t);
      break;
    case "point":
    case "mesh":
      return e4;
  }
  return e4;
}
function v2(e4, t) {
  return `the requested label placement '${e4}' is currently unsupported for ${t} in SceneView.`;
}
function y2(e4) {
  const t = e4.graphics3DGraphic.graphic.geometry;
  if (null == t) return null;
  switch (t.type) {
    case "polyline":
    case "extent":
    case "multipoint":
      return {
        placement: "center-center",
        normalizedOffset: l,
        anchor: "center"
      };
    case "polygon": {
      const t2 = O(e4);
      return null != t2 && "extrude" === t2.type ? V["above-center"] : {
        placement: "center-center",
        normalizedOffset: l,
        anchor: "center"
      };
    }
    case "point":
    case "mesh":
      return V["above-center"];
    default:
      return;
  }
}
function P(e4, t, n3) {
  const r6 = n3.graphics3DGraphic.graphic.geometry;
  if (null == r6) return null;
  switch (r6.type) {
    case "point":
    case "mesh":
      z(e4, t, n3);
      break;
    case "polygon":
      w2(e4, t, n3);
  }
  const l3 = c2 - s3;
  return e4.screenOffset[0] += l3 * t.normalizedOffset[0], e4.screenOffset[1] += l3 * t.normalizedOffset[1], e4;
}
function w2(e4, n3, r6) {
  const l3 = O(r6);
  if (null != l3) switch (l3.type) {
    case "extrude": {
      const l4 = r6.graphics3DGraphic.layers[0];
      null != l4 ? (l4.getBoundingBoxObjectSpace(G2), E(G2, e4.translation), e4.translation[2] = N(G2) / 2) : o(e4.translation, 0, 0, 0), j(e4, n3, l4);
      break;
    }
  }
}
function z(e4, n3, r6) {
  const l3 = O(r6);
  if (null == l3) return;
  const a5 = r6.graphics3DGraphic.layers[0];
  switch (null != a5 ? a5.getCenterObjectSpace(e4.translation) : o(e4.translation, 0, 0, 0), l3.type) {
    case "icon":
    case "text":
      L2(e4, n3, r6, a5);
      break;
    case "object":
    case "fill":
      j(e4, n3, a5);
  }
}
function L2(e4, t, n3, r6) {
  const {
    graphics3DGraphic: l3
  } = n3, a5 = null != r6 ? r6.getScreenSize() : null;
  if (l3.isDraped || null == a5) e4.hasLabelVerticalOffset || "center" === e4.anchor || (V[n3.labelClass.labelPlacement] && u().warnOncePerTick(`the requested placement '${t.placement}' is currently unsupported for draped graphics`), e4.anchor = "center");
  else {
    const r7 = S3(n3);
    e4.screenOffset[0] = a5[0] / 2 * (t.normalizedOffset[0] - r7[0]);
    const l4 = a5[1] / 2 * (t.normalizedOffset[1] - r7[1]);
    e4.hasLabelVerticalOffset ? (e4.centerOffset[1] = l4, e4.centerOffsetUnits = "screen") : e4.screenOffset[1] = l4;
  }
}
function S3(e4, t = x) {
  const {
    graphics3DGraphic: n3
  } = e4, r6 = n3.layers[0], l3 = r6?.stageObject.geometries[0].material ?? null;
  if (l3 && l3 instanceof Q) {
    const e5 = l3.parameters.anchorPosition;
    t[0] = 2 * (e5[0] - 0.5), t[1] = 2 * (e5[1] - 0.5);
  } else t[0] = 0, t[1] = 0;
  return t;
}
function j(e4, t, r6) {
  const a5 = null != r6 ? r6.getBoundingBoxObjectSpace(G2) : G2, c4 = r2(a5[3] - a5[0], a5[4] - a5[1], a5[5] - a5[2]), s6 = Math.sqrt(c4[0] * c4[0] + c4[1] * c4[1]);
  e4.centerOffset[0] = s6 / 2 * t.normalizedOffset[0];
  const o4 = e4.translation[2], i5 = c4[2] / 2 * t.normalizedOffset[1];
  e4.translation[2] = 0, e4.elevationOffset = o4 + i5;
  const f2 = s2(c4);
  e4.centerOffset[2] = f2 / 2 * t.normalizedOffset[2];
}
function D(e4) {
  return "above-center" === e4;
}
function C(e4) {
  const t = e4.labelClass.labelPlacement, {
    labelSymbol: n3,
    graphics3DGraphic: r6
  } = e4, l3 = i4(r6.graphics3DSymbol), a5 = "point-3d" === l3?.symbol.type ? l3.symbol : null, c4 = V[t] || y2(e4);
  return null != a5 && a5.supportsCallout() && a5.hasVisibleVerticalOffset() && !r6.isDraped ? {
    placement: null,
    hasLabelVerticalOffset: false,
    verticalOffset: a5.verticalOffset.clone(),
    anchor: null,
    normalizedOffset: null
  } : !n3 || !n3.hasVisibleVerticalOffset() || null != a5 && a5.supportsCallout() && a5.verticalOffset && !r6.isDraped ? {
    placement: null,
    verticalOffset: null,
    anchor: null,
    normalizedOffset: null,
    hasLabelVerticalOffset: false
  } : c4 && D(c4.placement) ? {
    placement: "above-center",
    verticalOffset: n3.verticalOffset.clone(),
    anchor: "bottom",
    normalizedOffset: [0, c4.normalizedOffset[1], 0],
    hasLabelVerticalOffset: true
  } : (u().errorOncePerTick("Callouts and vertical offset on labels are currently only supported with 'above-center' label placement (not with " + t + " placement)"), null);
}
var V = {
  "above-center": {
    placement: "above-center",
    normalizedOffset: [0, 1, 0],
    anchor: "bottom"
  },
  "above-left": {
    placement: "above-left",
    normalizedOffset: [-1, 1, 0],
    anchor: "bottom-right"
  },
  "above-right": {
    placement: "above-right",
    normalizedOffset: [1, 1, 0],
    anchor: "bottom-left"
  },
  "below-center": {
    placement: "below-center",
    normalizedOffset: [0, -1, 2],
    anchor: "top"
  },
  "below-left": {
    placement: "below-left",
    normalizedOffset: [-1, -1, 0],
    anchor: "top-right"
  },
  "below-right": {
    placement: "below-right",
    normalizedOffset: [1, -1, 0],
    anchor: "top-left"
  },
  "center-center": {
    placement: "center-center",
    normalizedOffset: [0, 0, 1],
    anchor: "center"
  },
  "center-left": {
    placement: "center-left",
    normalizedOffset: [-1, 0, 0],
    anchor: "right"
  },
  "center-right": {
    placement: "center-right",
    normalizedOffset: [1, 0, 0],
    anchor: "left"
  }
};
var k = {
  "above-center": ["default", "esriServerPointLabelPlacementAboveCenter"],
  "above-left": ["esriServerPointLabelPlacementAboveLeft"],
  "above-right": ["esriServerPointLabelPlacementAboveRight"],
  "below-center": ["esriServerPointLabelPlacementBelowCenter"],
  "below-left": ["esriServerPointLabelPlacementBelowLeft"],
  "below-right": ["esriServerPointLabelPlacementBelowRight"],
  "center-center": ["esriServerPointLabelPlacementCenterCenter"],
  "center-left": ["esriServerPointLabelPlacementCenterLeft"],
  "center-right": ["esriServerPointLabelPlacementCenterRight"]
};
for (const B2 in k) {
  const e4 = k[B2], t = V[B2];
  e4.forEach((e5) => {
    V[e5] = t;
  });
}
Object.freeze && (Object.freeze(V), Object.keys(V).forEach((e4) => {
  Object.freeze(V[e4]), Object.freeze(V[e4]?.normalizedOffset);
}));
var x = [0, 0];
var G2 = i();

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/lib/MaterialCollection.js
var s5 = class {
  constructor(s6) {
    this._stage = s6, this._materials = /* @__PURE__ */ new Map();
  }
  get(s6) {
    return this._materials.get(s6);
  }
  add(s6, t) {
    this._materials.set(s6, t), this._stage.add(t);
  }
  dispose() {
    this._stage.removeMany(Array.from(this._materials.values())), this._materials.clear();
  }
};

// ../../../node_modules/@arcgis/core/views/3d/layers/graphics/Labeler.js
var z2 = class {
  constructor(e4, t) {
    this.labelingContext = e4, this.graphics3DGraphic = t, this.hasGraphics3DResources = false, this.visible = false, this.addedToTextureAtlas = false, this.textInitialized = false, this.textRenderers = new Array(), this.textLabelPlacements = new Array();
  }
};
var F = class {
  constructor(e4, t, s6, i5, l3) {
    this.labelClass = e4, this.graphics3DSymbol = t, this.graphics3DCalloutSymbolLayer = s6, this.textRenderParameters = i5, this.labelFunction = l3, this.calloutSymbolLayerIndex = 0;
  }
};
var M = class {
  constructor(e4, t, s6, i5, l3, a5, r6, o4) {
    this.layer = t, this.graphics3DCore = s6, this.scaleVisibility = i5, this.emptySymbolLabelSupported = l3, this.elevationInfoOverride = a5, this.disablePlacement = r6, this.active = o4, this.labelClassAbortController = new AbortController(), this.labelClassContexts = new Array(), this.graphics = /* @__PURE__ */ new Map(), this.labelsToInitialize = /* @__PURE__ */ new Map(), this.stageLayer = new a3(e4, {
      pickable: true,
      disableOctree: true
    }, t.uid);
  }
  destroy() {
    this.stageLayer.destroy();
  }
};
var V2 = class extends S {
  constructor(e4) {
    super(e4), this._dirty = false, this._labels = /* @__PURE__ */ new Map(), this._labelingContexts = new Array();
  }
  setup() {
    this.dispose(), this.addHandles([d(() => this.view.state?.camera, () => this.setDirty()), d(() => this.view.state?.rasterPixelRatio, () => this._resetAllLabels()), this.view.resourceController.scheduler.registerTask(I.LABELER, this)]), this._textTextureAtlas = new v({
      view: this.view
    }), this._hudMaterialCollection = new s5(this.view._stage), this._calloutMaterialCollection = new s5(this.view._stage);
  }
  dispose() {
    this.removeAllHandles(), this._textTextureAtlas = r(this._textTextureAtlas), this._hudMaterialCollection = r(this._hudMaterialCollection), this._calloutMaterialCollection = r(this._calloutMaterialCollection), this._labelingContexts.length = 0, this._labels.clear();
  }
  destroy() {
    this.dispose(), H.graphic = null, H.renderingInfo = null, H.layer = null;
  }
  _activateLabelingContext(e4) {
    e4.graphics.forEach((t, s6) => {
      const i5 = new z2(e4, t);
      this._labels.set(s6, i5), e4.labelsToInitialize.set(s6, i5), t.setVisibilityFlag(A.LABEL, L.USER, true);
    }), e4.active = true;
  }
  _deactivateLabelingContext(e4) {
    e4.graphics.forEach((e5, t) => {
      e5.setVisibilityFlag(A.LABEL, L.USER, false), this.setLabelGraphicVisibility(e5, false), e5.clearLabelGraphics(), this._labels.delete(t);
    }), e4.active = false;
  }
  _addLabelTextureToAtlas(e4) {
    for (const t of e4.graphics3DGraphic.labelLayers) {
      if (!t._labelClass) continue;
      const s6 = e4.textRenderers[t._labelIndex];
      s6 && (this._textTextureAtlas.addTextTexture(s6, t.stageObject), e4.addedToTextureAtlas = true);
    }
  }
  _removeLabelTextureFromAtlas(e4) {
    for (const t of e4.graphics3DGraphic.labelLayers) {
      if (!t._labelClass) continue;
      const s6 = e4.textRenderers[t._labelIndex];
      null != s6 && (this._textTextureAtlas.removeTextTexture(s6, t.stageObject), e4.addedToTextureAtlas = false);
    }
  }
  get running() {
    return this.view.ready && (this._dirty || this.deconflictor.running);
  }
  runTask(e4) {
    return this._updateLabels(e4), !this._dirty && this.deconflictor.running && this.deconflictor.runTask(e4), o3;
  }
  _updateLabels(e4) {
    if (this._dirty) {
      this._dirty = false;
      for (const t of this._labelingContexts) if (t.active) if (U(t)) this._dirty = true;
      else if (k2(t.labelClassContexts)) {
        if (null === t.labelClassContexts) {
          this._deactivateLabelingContext(t);
          continue;
        }
        this._createLabelClassContext(t), this._dirty = true;
      } else n2(t.labelsToInitialize, (s6, i5) => (this._ensureGraphics3DResources(s6) && (this._labels.set(i5, s6), this.deconflictor.setDirty(), e4.madeProgress()), (s6.visible && s6.textInitialized || !s6.visible && s6.hasGraphics3DResources) && (t.labelsToInitialize.delete(i5), e4.madeProgress()), e4.done)) && (this._dirty = true);
      this._dirty || this.notifyChange("updating");
    }
  }
  _createLabelClassContextAsync(e4) {
    return __async(this, null, function* () {
      const t = e4.labelClassAbortController?.signal;
      e4.layer.when && (yield e4.layer.when()), s(t), e4.scaleVisibility?.updateScaleRangeActive();
      const a5 = e4.graphics3DCore, r6 = a5.layer, o4 = r6.labelingInfo?.filter((e5) => !!e5.symbol);
      if (!o4 || 0 === o4.length) return;
      let c4 = false;
      yield a2(o4, (s6, r7) => __async(this, null, function* () {
        const o5 = s6.symbol, h2 = i4(a5.getOrCreateGraphics3DSymbol(o5));
        if (null == h2) return void n.getLogger(this).error("Failed to create Graphics3DSymbol for label");
        yield h2.load(), s(t);
        let b3 = null;
        o2(o5) && o5.hasVisibleCallout() && (b3 = e3(o5, a5.symbolCreationContext), yield b3.load(), s(t));
        const d3 = yield _(w(s6, e4.layer.fieldsIndex, this.view.spatialReference));
        if (s(t), true === d3.ok) {
          const i5 = yield this._createTextRenderParameters(h2.symbol);
          s(t), e4.labelClassContexts[r7] = new F(s6, h2, b3, i5, d3.value);
        } else n.getLogger(this).error(`Label expression failed to evaluate: ${d3.error}`), c4 = true;
      })), s(t);
    });
  }
  _createLabelClassContext(e4) {
    return __async(this, null, function* () {
      return null == e4.labelClassPromise && (e4.labelClassPromise = this._createLabelClassContextAsync(e4).catch((t) => {
        if (b(t)) throw t;
        e4.labelClassContexts.length = 0;
      }).then(() => {
        e4.labelClassAbortController = null, this.notifyChange("updating");
      }).catch(() => {
      }), this.notifyChange("updating")), e4.labelClassPromise;
    });
  }
  _createTextRenderParameters(e4) {
    return __async(this, null, function* () {
      const t = e4.symbolLayers.at(0);
      return "text" !== t?.type ? null : s4.fromSymbol(t, this.view.state.rasterPixelRatio);
    });
  }
  _destroyLabelClassContext(e4) {
    for (const s6 of e4.labelClassContexts) --s6.graphics3DSymbol.referenced;
    const t = e4.labelClassAbortController;
    e4.labelClassAbortController = new AbortController(), e(t), e4.labelClassContexts.length = 0, e4.labelClassPromise = null, this.notifyChange("updating");
  }
  _createTextSymbolGraphic(e4, t, s6, i5, l3, a5) {
    const r6 = new r5(s6, a4(s6.anchor), l2(s6.anchor), e4.text, r3(e4.displayWidth, e4.displayHeight));
    return H.graphic = t, H.renderingInfo = null, H.layer = i5, l3.createLabel(H, r6, this._hudMaterialCollection, this._textTextureAtlas, () => {
      const e5 = h(a5);
      return e5 ? e5.elevationOffset : null;
    });
  }
  _createLineCalloutGraphic(e4, t, s6, i5, l3) {
    H.graphic = e4, H.layer = l3;
    const a5 = i5.screenOffset[0];
    return H.renderingInfo = new G(null, t, i5.translation, i5.centerOffset, a5, i5.centerOffsetUnits, i5.elevationOffset, this._calloutMaterialCollection), s6.createGraphics3DGraphic(H);
  }
  _ensureGraphics3DResources(e4) {
    if (e4.hasGraphics3DResources) return false;
    const t = e4.graphics3DGraphic;
    if (t.destroyed) return false;
    this._ensureTextTextureResources(e4);
    const s6 = e4.labelingContext, i5 = s6.labelClassContexts;
    if (k2(i5) || !s6.emptySymbolLabelSupported && 0 === t.layers.length) return false;
    let l3 = false;
    const a5 = t.graphic, r6 = s6.layer, o4 = B(s6.layer);
    for (let n3 = 0; n3 < i5.length; n3++) {
      const c4 = e4.textRenderers[n3], h2 = e4.textLabelPlacements[n3];
      if (null == c4 || null == h2) continue;
      const b3 = i5[n3], d3 = b3.graphics3DSymbol, p = d3.symbol && "label-3d" === d3.symbol.type ? d3.symbol : null, u2 = d3.symbolLayers[0];
      if (!u2) continue;
      u2.setElevationInfoOverride(s6.elevationInfoOverride);
      const y3 = new b2(t, p, b3.labelClass), g2 = this._createTextSymbolGraphic(c4, a5, h2, r6, u2, y3);
      if (null == g2) return false;
      g2._labelClass = b3.labelClass, g2._labelIndex = n3, t.addLabelGraphic(g2, s6.stageLayer), t.deconflictionPriority = b3.textRenderParameters?.definition.size ?? 0, t.setVisibilityFlag(A.LABEL, L.USER, o4), t.setVisibilityFlag(A.LABEL, L.SCALE_RANGE, true), t.setVisibilityFlag(A.LABEL, L.DECONFLICTION, false), l3 = true;
      const C2 = b3.graphics3DCalloutSymbolLayer;
      if (C2 && h2.hasLabelVerticalOffset) {
        C2.setElevationInfoOverride(s6.elevationInfoOverride);
        const e5 = this._createLineCalloutGraphic(a5, p, C2, h2, r6);
        null != e5 && (b3.calloutSymbolLayerIndex = t.labelLayers.length, t.addLabelGraphic(e5, s6.stageLayer));
      }
      break;
    }
    return l3 && s6.scaleVisibility?.updateGraphicLabelScaleVisibility(t), e4.hasGraphics3DResources = true, true;
  }
  _destroyGraphics3DResources(e4) {
    const t = e4.labelingContext.labelClassContexts;
    for (const s6 of e4.graphics3DGraphic.labelLayers) {
      if (null == s6._labelClass) continue;
      const e5 = t[s6._labelIndex].graphics3DSymbol.symbolLayers[0];
      e5?.onRemoveGraphic(s6);
    }
    e4.graphics3DGraphic.deconflictionPriority = 0, e4.graphics3DGraphic.clearLabelGraphics(), e4.hasGraphics3DResources = false;
  }
  _ensureTextTextureResources(e4) {
    if (e4.textInitialized) return;
    const t = e4.labelingContext, s6 = t.labelClassContexts;
    if (k2(s6)) return;
    const i5 = e4.graphics3DGraphic.graphic;
    for (let a5 = 0; a5 < s6.length; a5++) {
      const r6 = s6[a5];
      if (e4.textRenderers[a5] = null, e4.textLabelPlacements[a5] = null, null == r6?.textRenderParameters) continue;
      const o4 = r6.labelFunction;
      let n3;
      if ("arcade" === o4.type) try {
        const e5 = o4.needsHydrationToEvaluate() ? c(i5, t.layer) : i5;
        n3 = o4.evaluate(e5);
      } catch (l3) {
        n3 = null;
      }
      else n3 = o4.evaluate(i5);
      if (null == n3 || "" === n3 || /^\s+$/.test(n3)) continue;
      const c4 = r6.graphics3DSymbol, h2 = "label-3d" === c4.symbol?.type ? c4.symbol : null;
      if (!c4.symbolLayers[0]) continue;
      const b3 = e4.graphics3DGraphic, d3 = r6.labelClass, p = t.disablePlacement, y3 = h({
        graphics3DGraphic: b3,
        labelSymbol: h2,
        labelClass: d3,
        disablePlacement: p
      });
      if (null == y3) continue;
      const g2 = a4(y3.anchor), m = f(g2);
      e4.textRenderers[a5] = new r4(n3, m, r6.textRenderParameters, v.maxSize), e4.textLabelPlacements[a5] = y3;
    }
    e4.textInitialized = true;
  }
  _destroyTextTextureResources(e4) {
    e4.textInitialized = false, e4.textRenderers.length = 0, e4.textLabelPlacements.length = 0;
  }
  _addGraphic(e4, t) {
    const s6 = t.graphic.uid;
    if (e4.graphics.set(s6, t), e4.active) {
      const i5 = new z2(e4, t);
      this._labels.set(s6, i5), e4.labelsToInitialize.set(s6, i5);
    }
    this.setDirty(), this.deconflictor.setDirty();
  }
  _updateGraphicGeometry(e4, t) {
    const s6 = t.graphic.uid, i5 = this._labels.get(s6);
    if (!i5) return true;
    for (const l3 of i5.graphics3DGraphic.labelLayers) {
      if (null == l3._labelClass) continue;
      if (!e4.labelClassContexts[l3._labelIndex].graphics3DSymbol.symbolLayers[0].updateGeometry(l3, t.graphic.geometry)) return false;
    }
    return this.setDirty(), this.deconflictor.setDirty(), true;
  }
  _removeGraphic(e4, t) {
    const s6 = t.graphic.uid, i5 = this._labels.get(s6);
    e4.graphics.delete(s6), i5 && (this._destroyGraphic(i5, s6), e4.labelsToInitialize.delete(s6), this.setDirty(), this.deconflictor.setDirty());
  }
  _destroyGraphic(e4, t) {
    this._labels.delete(t), e4.addedToTextureAtlas && this._removeLabelTextureFromAtlas(e4), this._destroyTextTextureResources(e4), e4.hasGraphics3DResources && this._destroyGraphics3DResources(e4);
  }
  _labelingInfoChange(e4, t) {
    return __async(this, null, function* () {
      if (!t) return this._visibilityInfoChange(e4), this._resetLabels(e4), this._createLabelClassContext(e4);
      for (const s6 of t) {
        const t2 = e4.graphics.get(s6);
        t2 && (this._removeGraphic(e4, t2), this._addGraphic(e4, t2));
      }
    });
  }
  _globalPropertyChanged(e4, t) {
    for (const s6 of t.labelClassContexts) {
      const i5 = /* @__PURE__ */ new Map();
      t.graphics.forEach((e5) => i5.set(e5.graphic.uid, e5));
      const l3 = (e5) => e5.labelLayers[0];
      if (s6.graphics3DSymbol.symbolLayers[0].globalPropertyChanged(e4, i5, l3), s6.graphics3DCalloutSymbolLayer) {
        const t2 = (e5) => e5.labelLayers[s6.calloutSymbolLayerIndex];
        s6.graphics3DCalloutSymbolLayer.globalPropertyChanged(e4, i5, t2);
      }
    }
  }
  _visibilityInfoChange(e4) {
    const t = B(e4.layer);
    t && !e4.active && this._activateLabelingContext(e4), !t && e4.active && this._deactivateLabelingContext(e4), this.setDirty();
  }
  _resetAllLabels() {
    for (const e4 of this._labelingContexts) this._resetLabels(e4);
  }
  _resetLabels(e4) {
    e4.graphics.forEach((t, s6) => {
      const i5 = this._labels.get(s6);
      i5 && (this._destroyGraphic(i5, s6), i5.visible = false, e4.labelsToInitialize.set(s6, i5));
    }), this._destroyLabelClassContext(e4), this.setDirty(), this.deconflictor.setDirty();
  }
  _findLabelingContext(e4) {
    for (const t of this._labelingContexts) if (t.graphics3DCore === e4) return t;
    return null;
  }
  addGraphicsOwner(e4, t, s6) {
    const i5 = s6?.emptySymbolLabelSupported || false, l3 = s6?.elevationInfoOverride || null, a5 = s6?.disablePlacement || null;
    if (this._findLabelingContext(e4)) return;
    const r6 = e4.layer, o4 = new M(this.view._stage, r6, e4, t, i5, l3, a5, B(r6));
    return this._labelingContexts.push(o4), this.setDirty(), {
      addGraphic: (e5) => this._addGraphic(o4, e5),
      removeGraphic: (e5) => this._removeGraphic(o4, e5),
      updateGraphicGeometry: (e5) => this._updateGraphicGeometry(o4, e5),
      layerLabelsEnabled: () => B(o4.layer),
      labelingInfoChange: (e5) => this._labelingInfoChange(o4, e5),
      elevationInfoChange: () => this._globalPropertyChanged("elevationInfo", o4),
      slicePlaneEnabledChange: () => this._globalPropertyChanged("slicePlaneEnabled", o4),
      visibilityInfoChange: () => this._visibilityInfoChange(o4),
      reset: () => this._resetLabels(o4),
      remove: () => this._removeGraphicsOwner(e4),
      setDirty: () => this.setDirty()
    };
  }
  _removeGraphicsOwner(e4) {
    const t = this._findLabelingContext(e4);
    if (!t) return;
    const s6 = this._labelingContexts.indexOf(t);
    this._labelingContexts.splice(s6, 1), t.graphics.forEach((e5) => this._removeGraphic(t, e5)), t.destroy(), this.setDirty();
  }
  setLabelGraphicVisibility(e4, t) {
    const s6 = e4.graphic.uid, i5 = this._labels.get(s6);
    i5 && i5.visible !== t && (t && !i5.addedToTextureAtlas ? (this._addLabelTextureToAtlas(i5), i5.textInitialized || i5.labelingContext.labelsToInitialize.set(s6, i5)) : !t && i5.addedToTextureAtlas && this._removeLabelTextureFromAtlas(i5), i5.visible = t, this.setDirty());
  }
  setDirty() {
    !this._dirty && this._labelingContexts.length > 0 && (this._dirty = true, this.notifyChange("updating"));
  }
  get updating() {
    return this._dirty || this._textTextureAtlas?.updating || this.deconflictor.updating || this._labelingContexts.some((e4) => U(e4));
  }
  get updatingProgress() {
    if (!this.updating || !this._textTextureAtlas) return 1;
    const e4 = this._labelingContexts.length > 0 ? this._labelingContexts.reduce((e5, t) => e5 + (U(t) ? 0 : 1), 0) / this._labelingContexts.length : 1;
    return (this._dirty ? 0 : 0.3) + (this._textTextureAtlas.updating ? 0 : 0.1) + 0.1 * e4 + 0.5 * this.deconflictor.updatingProgress;
  }
  get test() {
  }
};
function U(e4) {
  return !!e4.labelClassPromise && !!e4.labelClassAbortController;
}
function k2(e4) {
  return !e4 || 0 === e4.length;
}
function B(e4) {
  return true === e4.labelsVisible && !!e4.labelingInfo?.some((e5) => !!e5.symbol);
}
e2([y({
  constructOnly: true
})], V2.prototype, "view", void 0), e2([y({
  constructOnly: true
})], V2.prototype, "deconflictor", void 0), e2([y()], V2.prototype, "_textTextureAtlas", void 0), e2([y({
  type: Boolean,
  readOnly: true
})], V2.prototype, "updating", null), V2 = e2([a("esri.views.3d.layers.graphics.Labeler")], V2);
var H = new S2(null, null, null);

export {
  V2 as V,
  B
};
//# sourceMappingURL=chunk-PZVMDS5C.js.map
