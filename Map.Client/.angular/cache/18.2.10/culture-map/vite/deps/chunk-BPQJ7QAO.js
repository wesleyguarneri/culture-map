import {
  e as e5
} from "./chunk-AHGS67ZN.js";
import {
  _
} from "./chunk-PFFFLPSP.js";
import {
  i as i6
} from "./chunk-EOYCWFZW.js";
import {
  e as e6
} from "./chunk-KOUYF3XE.js";
import {
  l as l2
} from "./chunk-E3ITSUDB.js";
import {
  i as i5
} from "./chunk-UQMQLPLV.js";
import {
  f as f4
} from "./chunk-4HCKDN6K.js";
import {
  y as y3
} from "./chunk-5JJ6GBOU.js";
import {
  i as i4,
  r,
  r2
} from "./chunk-AW2BDC6B.js";
import {
  M,
  a as a6,
  c,
  h as h3,
  h2 as h4,
  i as i3,
  m as m2,
  n as n4,
  t as t4,
  t3 as t5,
  t4 as t6,
  x
} from "./chunk-IAGWCSWA.js";
import {
  b as b3
} from "./chunk-GQOLRPFL.js";
import {
  E,
  N,
  R,
  a as a5,
  s as s4
} from "./chunk-PAFFV5BJ.js";
import {
  h as h2
} from "./chunk-Q645EYZX.js";
import {
  t as t3
} from "./chunk-BAAB562I.js";
import {
  o as o3
} from "./chunk-3HEBGT7Z.js";
import {
  t as t2
} from "./chunk-KHJ7WR3B.js";
import {
  t
} from "./chunk-PUH7YYDT.js";
import {
  ee,
  me,
  o as o5,
  re
} from "./chunk-EU7HJNZD.js";
import {
  e as e4
} from "./chunk-3NGDRCQI.js";
import {
  s as s3
} from "./chunk-O7ZVERIH.js";
import {
  G
} from "./chunk-R4DKV4UN.js";
import {
  i as i2,
  o as o4
} from "./chunk-SNHPS7NU.js";
import {
  h
} from "./chunk-PVO5NM6Q.js";
import {
  tt
} from "./chunk-C7NRYPDG.js";
import {
  a as a3
} from "./chunk-TROPJVOL.js";
import {
  d as d6
} from "./chunk-XQCKIDQO.js";
import {
  a as a4
} from "./chunk-6LDLRQX4.js";
import {
  p
} from "./chunk-5YIMTGEC.js";
import {
  d as d5
} from "./chunk-UFVMJL32.js";
import {
  b as b2
} from "./chunk-TRSGUVSM.js";
import {
  i
} from "./chunk-T4AP6CTC.js";
import {
  d as d4
} from "./chunk-HD65DNIO.js";
import {
  n as n3
} from "./chunk-N6TJI25E.js";
import {
  S as S2
} from "./chunk-IQLBZKUD.js";
import {
  y as y2
} from "./chunk-7MZZCQ64.js";
import {
  f as f3
} from "./chunk-JOJZ6YC5.js";
import {
  g
} from "./chunk-CRNUMTSV.js";
import {
  O as O2
} from "./chunk-JM7HAEY6.js";
import {
  m
} from "./chunk-K64AAM77.js";
import {
  T2 as T
} from "./chunk-DTUSTSEJ.js";
import {
  n as n2
} from "./chunk-JCWFGRHQ.js";
import {
  d as d3
} from "./chunk-DZALMCYL.js";
import {
  u as u5
} from "./chunk-7ZJ6P7J7.js";
import {
  u as u4
} from "./chunk-IHVSZYZS.js";
import {
  w
} from "./chunk-NYQ5CYNR.js";
import {
  f as f2
} from "./chunk-TKPMIAIW.js";
import {
  o as o2
} from "./chunk-NQOJNTB3.js";
import {
  F,
  e as e3
} from "./chunk-3ZXOUEQG.js";
import {
  P,
  d as d2
} from "./chunk-6WHTZNUH.js";
import {
  V
} from "./chunk-EITGQLII.js";
import {
  o
} from "./chunk-WGAPNV7F.js";
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
  a3 as a2
} from "./chunk-DDYVXG4F.js";
import {
  L,
  b,
  d,
  f2 as f,
  s as s2,
  u as u3
} from "./chunk-HJY2YILU.js";
import {
  e
} from "./chunk-7DA6A5LD.js";
import {
  u as u2
} from "./chunk-2MMLMOWS.js";
import {
  a,
  l2 as l,
  n2 as n,
  s2 as s,
  u
} from "./chunk-WYIDUUN2.js";
import {
  O,
  has
} from "./chunk-DXLOWWK7.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/AggregateGraphic.js
var p2 = class extends d4 {
  constructor() {
    super(...arguments), this.isAggregate = true;
  }
  getEffectivePopupTemplate(e8 = false) {
    if (this.popupTemplate) return this.popupTemplate;
    const t12 = this.sourceLayer?.featureReduction;
    return t12 && "popupTemplate" in t12 && t12.popupEnabled ? t12.popupTemplate : null;
  }
  getObjectId() {
    return this.attributes.aggregateId;
  }
};
e2([y({
  type: Boolean
})], p2.prototype, "isAggregate", void 0), p2 = e2([a2("esri.AggregateGraphic")], p2);
var s5 = p2;

// ../../../node_modules/@arcgis/core/layers/effects/FeatureEffectView.js
var c2 = class extends S {
  constructor(e8) {
    super(e8), this._filter = null, this.duration = has("mapview-transitions-duration"), this._excludedEffectView = new h2(e8), this._includedEffectView = new h2(e8);
  }
  get excludedEffects() {
    return this._excludedEffectView.effects;
  }
  set featureEffect(e8) {
    this._get("featureEffect") !== e8 && this._transitionTo(e8);
  }
  get filter() {
    return this._filter || this.featureEffect?.filter || null;
  }
  get hasEffects() {
    return this._excludedEffectView.hasEffects || this._includedEffectView.hasEffects;
  }
  get includedEffects() {
    return this._includedEffectView.effects;
  }
  set scale(e8) {
    this._set("scale", e8), this._excludedEffectView.scale = e8, this._includedEffectView.scale = e8;
  }
  get transitioning() {
    return this._excludedEffectView.transitioning || this._includedEffectView.transitioning;
  }
  transitionStep(e8, t12) {
    this._set("scale", t12), this.transitioning ? (this._includedEffectView.transitionStep(e8, t12), this._excludedEffectView.transitionStep(e8, t12), this.transitioning || (this._filter = null)) : (this._excludedEffectView.scale = t12, this._includedEffectView.scale = t12);
  }
  endTransitions() {
    this._includedEffectView.endTransitions(), this._excludedEffectView.endTransitions(), this._filter = null;
  }
  _transitionTo(e8) {
    const t12 = this._get("featureEffect"), i10 = e8, s9 = i10?.includedEffect, f7 = i10?.excludedEffect, c9 = this._includedEffectView.canTransitionTo(s9) && this._excludedEffectView.canTransitionTo(f7);
    this._includedEffectView.effect = s9, this._excludedEffectView.effect = f7, this._set("featureEffect", i10), this._filter = i10?.filter || t12?.filter || null, c9 || this.endTransitions();
  }
};
e2([y()], c2.prototype, "_filter", void 0), e2([y()], c2.prototype, "_excludedEffectView", void 0), e2([y()], c2.prototype, "_includedEffectView", void 0), e2([y()], c2.prototype, "duration", void 0), e2([y()], c2.prototype, "excludedEffects", null), e2([y()], c2.prototype, "featureEffect", null), e2([y()], c2.prototype, "filter", null), e2([y()], c2.prototype, "hasEffects", null), e2([y()], c2.prototype, "includedEffects", null), e2([y({
  value: 0
})], c2.prototype, "scale", null), e2([y()], c2.prototype, "transitioning", null), c2 = e2([a2("esri.layers.effects.FeatureEffectView")], c2);
var r3 = c2;

// ../../../node_modules/@arcgis/core/rest/support/AggregateFeatureSet.js
var c3 = class extends d5 {
  constructor() {
    super(...arguments), this.features = [];
  }
  readFeatures(e8, t12) {
    const o14 = f2.fromJSON(t12.spatialReference), s9 = [];
    for (let a10 = 0; a10 < e8.length; a10++) {
      const t13 = e8[a10], p6 = s5.fromJSON(t13), c9 = t13.geometry?.spatialReference;
      null == p6.geometry || c9 || (p6.geometry.spatialReference = o14);
      const m9 = t13.aggregateGeometries, i10 = p6.aggregateGeometries;
      if (m9 && null != i10) for (const e9 in i10) {
        const r8 = i10[e9], t14 = m9[e9], s10 = t14?.spatialReference;
        null == r8 || s10 || (r8.spatialReference = o14);
      }
      s9.push(p6);
    }
    return s9;
  }
};
e2([y({
  type: [s5],
  json: {
    write: true
  }
})], c3.prototype, "features", void 0), e2([o2("features")], c3.prototype, "readFeatures", null), c3 = e2([a2("esri.rest.support.AggregateFeatureSet")], c3);
var m3 = c3;

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/FeatureInstanceStore.js
var s6 = class {
  constructor() {
    this._instanceById = /* @__PURE__ */ new Map();
  }
  destroy() {
    this._instanceById.clear();
  }
  get size() {
    return this._instanceById.size;
  }
  entries() {
    return this._instanceById.entries();
  }
  updateStart() {
    this._instanceByIdNext = /* @__PURE__ */ new Map();
  }
  updateEnd() {
    if (!this._instanceByIdNext) throw new Error("InternalError: Found updateEnd call without corresponding updateStart");
    for (const t12 of this._instanceById.keys()) this._instanceByIdNext.has(t12) || this._instanceById.delete(t12);
    for (const [t12, n10] of this._instanceByIdNext.entries()) {
      const e8 = this._instanceById.get(t12);
      e8 ? e8.setInput(n10.getInput()) : this._instanceById.set(t12, n10);
    }
    this._instanceByIdNext = null;
  }
  values() {
    return this._instanceById.values();
  }
  ensureInstance(s9, i10) {
    let r8;
    if ("object" == typeof i10 && "optionalAttributes" in i10 && "uniforms" in i10) {
      r8 = `${s9.type}${JSON.stringify(i10.optionalAttributes)}`;
      const t12 = i10.uniforms;
      if ("object" == typeof t12) for (const n10 in t12) r8 += `${n10}.${null != t12[n10]}`;
    } else r8 = `${s9.type}.${JSON.stringify(i10)}`;
    const a10 = l(r8);
    if (this._instanceByIdNext) {
      const t12 = new i4(r2(a10), s9, i10);
      return this._instanceByIdNext.set(a10, t12), t12;
    }
    if (!this._instanceById.has(a10)) {
      const t12 = new i4(r2(a10), s9, i10);
      this._instanceById.set(a10, t12);
    }
    return this._instanceById.get(a10);
  }
  getInstance(t12) {
    return this._instanceById.get(t12);
  }
};

// ../../../node_modules/@arcgis/core/views/2d/layers/features/RenderState.js
var l3 = 1e3;
var d7 = class {
  constructor(t12, i10, s9) {
    this.getStage = t12, this.version = i10, this._tileInfoView = s9, this._pendingUpdates = new t2(l3), this._locked = false, this._tiles = /* @__PURE__ */ new Map();
  }
  destroy() {
    for (const e8 of this.tiles()) e8.destroy();
    this._pendingUpdates.clear(), this._tiles.clear();
  }
  tiles() {
    return this._tiles.values();
  }
  size() {
    return this._tiles.size;
  }
  setTiles(e8) {
    this._tiles.clear();
    for (const t12 of e8) this._tiles.set(t12.key.id, t12);
  }
  lockUploads() {
    this._locked = true;
  }
  unlockUploads() {
    this._locked = false, this.flush();
  }
  enqueueUpdate(e8) {
    this._pendingUpdates.enqueue(e8);
  }
  update(e8) {
    if (!this._locked) for (; this._pendingUpdates.size; ) {
      const t12 = this._pendingUpdates.peek();
      if (null == t12 || t12.attributeEpoch > e8) break;
      this._updateTile(t12), this._pendingUpdates.dequeue();
    }
  }
  removeTile(e8) {
    const t12 = this._tiles.get(e8);
    has("esri-2d-update-debug") && console.debug(`Tile[${e8}] RenderState.removeTile`), t12?.destroy(), this._tiles.delete(e8);
  }
  isTileDone(e8) {
    const t12 = this._tiles.get(e8.id);
    return !!t12 && t12.isReady;
  }
  flush() {
    for (; this._pendingUpdates.size; ) {
      const e8 = this._pendingUpdates.dequeue();
      null != e8 && this._updateTile(e8);
    }
    for (const e8 of this._tiles.values()) e8.upload();
  }
  _updateTile(e8) {
    if (has("esri-2d-update-debug")) {
      const t13 = e8.debugInfo?.chunkId ?? "<EnsureEnd>";
      console.debug(`Version[${e8.version}] Tile[${e8.id}] Chunk[${t13}] RenderState.updateTile [${e8.type}]`, e8);
    }
    const t12 = this._ensureTile(e8.id);
    if ("update" === e8.type) {
      const [i11, ...s10] = e8.modify;
      t12.onMessage({
        type: "update",
        modify: i11,
        remove: e8.remove,
        end: e8.end,
        attributeEpoch: e8.attributeEpoch
      });
      for (const t13 of s10) {
        const i12 = this._tiles.get(t13.tileId);
        i12 && i12.onMessage({
          type: "update",
          modify: t13,
          remove: e8.remove,
          end: false,
          isPixelBuffer: true,
          attributeEpoch: null
        });
      }
      return;
    }
    if (null == e8.append) return void t12.onMessage({
      type: "append",
      clear: e8.clear,
      debugInfo: e8.debugInfo,
      end: e8.end,
      attributeEpoch: e8.attributeEpoch
    });
    const [i10, ...s9] = e8.append;
    t12.onMessage({
      type: "append",
      clear: e8.clear,
      append: i10,
      debugInfo: e8.debugInfo,
      end: e8.end,
      attributeEpoch: e8.attributeEpoch
    });
    for (const o14 of s9) {
      const e9 = this._tiles.get(o14.tileId);
      e9 && e9.onMessage({
        type: "update",
        modify: o14,
        remove: [],
        sort: false,
        end: false,
        isPixelBuffer: true,
        attributeEpoch: null
      });
    }
  }
  _ensureTile(e8) {
    if (!this._tiles.has(e8)) {
      const t12 = this._createTile(e8);
      this._copyPixelBufferedEntitiesInto(t12), this._tiles.set(e8, t12);
    }
    return this._tiles.get(e8);
  }
  _createTile(e8) {
    has("esri-2d-update-debug") && console.debug(`Version[${this.version}] Tile[${e8}] RenderState.createTile`);
    const r8 = new e4(e8), l12 = this._tileInfoView.getTileBounds(u4(), r8), d10 = this._tileInfoView.getTileResolution(r8.level), a10 = new b3(r8, d10, l12[0], l12[3], true);
    if (a10.stage = this.getStage(), !a10.stage) {
      const e9 = new s("featurelayerview:webgl", "Cannot create tile with empty stage");
      n.getLogger("esri.views.2d.layers.features.RenderState").error(e9);
    }
    return a10;
  }
  _copyPixelBufferedEntitiesInto(e8) {
    let t12 = 7;
    for (let i10 = -1; i10 <= 1; i10++) for (let s9 = -1; s9 <= 1; s9++) {
      if (0 === i10 && 0 === s9) continue;
      const o14 = this._tileInfoView.tileInfo.isWrappable, n10 = o3(e8.key, s9, i10, o14).id, l12 = this._tiles.get(n10);
      if (null != l12) {
        const o15 = 1 << t12;
        e8.copyPixelBufferedEntitesFrom(l12, o15, s9, i10);
      }
      t12--;
    }
  }
};

// ../../../node_modules/@arcgis/core/views/2d/layers/features/FeatureContainer.js
var l4 = class {
  constructor(e8, s9) {
    this.id = e8, this.version = s9, this._resolver = L(), this._done = false;
  }
  get done() {
    return this._done;
  }
  get promise() {
    return this._resolver.promise;
  }
  end() {
    this._resolver.resolve(), this._done = true;
  }
  destroy() {
    this._resolver.reject();
  }
};
var u6 = class extends r {
  constructor(e8) {
    super(e8.view.featuresTilingScheme), this.updatingHandles = new h(), this._hitTestsRequests = [], this._store = new s6(), this._visibleTiles = /* @__PURE__ */ new Set(), this._subscriptions = /* @__PURE__ */ new Map(), this._updateStatisticsRequests = [], this._lockStatisticUpdates = false, this._layerView = e8;
  }
  renderChildren(e8) {
    if (this.attributeView.update(), this._renderState?.update(this.attributeView.currentEpoch), this._renderState) {
      const e9 = Array.from(this._renderState.tiles()).filter((e10) => e10.needsUpload);
      if (e9.length) {
        e9[Math.floor(Math.random() * e9.length)].upload(), e9.length >= 2 && this.requestRender();
      }
      for (const t12 of this._renderState.tiles()) t12.tryReady(this.attributeView.currentEpoch) && (this._subscriptions.get(t12.key.id)?.end(), this._layerView.requestUpdate(), this.hasLabels && this._layerView.view.labelManager.requestUpdate(), this.requestRender());
    }
    for (const t12 of this.children) t12.setTransform(e8.state);
    if (this.hasAnimation) {
      e8.painter.effects.integrate.draw(e8, e8.attributeView);
    }
    switch (super.renderChildren(e8), e8.drawPhase) {
      case E.MAP:
        return this._renderMapPhase(e8);
      case E.HIGHLIGHT:
        return this._renderHighlightPhase(e8);
      case E.LABEL:
        return this._renderLabelPhase(e8);
    }
  }
  subscriptions() {
    return this._subscriptions.values();
  }
  get _instanceStore() {
    return this._store;
  }
  get instanceStore() {
    return this._store;
  }
  get layerView() {
    return this._layerView;
  }
  get hasLabels() {
    return this._layerView.labelingCollisionInfos.length > 0;
  }
  get hasHighlight() {
    return this._layerView.hasHighlight();
  }
  get _layer() {
    return this._layerView.layer;
  }
  _getExclusivePostprocessingInstance({
    drawPhase: e8
  }) {
    if (null == this._instanceStore) return null;
    let t12 = 0, s9 = null;
    for (const i10 of this._instanceStore.values()) i10.techniqueRef.drawPhase & e8 && (t12++, i10.techniqueRef.postProcessingEnabled && (s9 = i10));
    return t12 > 1 ? null : s9;
  }
  _getOverrideStencilRef({
    drawPhase: e8
  }) {
    if (null == this._instanceStore) return null;
    let t12 = null;
    for (const s9 of this._instanceStore.values()) {
      if (!(s9.techniqueRef.drawPhase & e8)) continue;
      const {
        overrideStencilRef: i10
      } = s9.techniqueRef;
      if (null == t12) t12 = i10;
      else if (t12 !== i10) {
        t12 = null;
        break;
      }
    }
    return t12;
  }
  get children() {
    return this._renderState ? Array.from(this._renderState.tiles()).filter((e8) => this._visibleTiles.has(e8.key.id)) : [];
  }
  updateAttributeView(e8) {
    this.requestRender(), this.attributeView.requestUpdate(e8), this.hasLabels && this._layerView.view.labelManager.requestUpdate();
  }
  updateSubscriptions(e8) {
    for (const {
      tileId: t12,
      version: s9
    } of e8.subscribe) if (this._subscriptions.has(t12)) this._subscriptions.get(t12).version = s9;
    else {
      const e9 = new l4(t12, s9);
      this._subscriptions.set(t12, e9), this.updatingHandles.addPromise(e9.promise);
    }
    for (const t12 of e8.unsubscribe) {
      const e9 = this._subscriptions.get(t12);
      e9?.destroy(), this._subscriptions.delete(t12), this.removeTile(t12);
    }
  }
  isDone(e8) {
    return !!this._renderState && this._renderState.isTileDone(e8);
  }
  updateRenderState(e8) {
    return __async(this, null, function* () {
      has("esri-2d-update-debug") && console.debug(`Version[${e8}] FeatureContainer.updateRenderState`), this._renderStateNext = new d7(() => this._stage, e8, this._tileInfoView);
    });
  }
  getDisplayStatistics(e8, t12) {
    const s9 = this._statisticsByLevel.get(e8);
    return s9 ? s9.get(t12) : null;
  }
  updateStatistics(e8, t12) {
    if (this._lockStatisticUpdates) return void this._updateStatisticsRequests.push({
      level: e8,
      statistics: t12
    });
    let s9 = this._statisticsByLevel.get(e8);
    s9 || (s9 = /* @__PURE__ */ new Map(), this._statisticsByLevel.set(e8, s9));
    for (const i10 of t12) s9.set(i10.fieldName, {
      minValue: i10.minValue,
      maxValue: i10.maxValue
    });
  }
  editStart() {
    this._renderState?.lockUploads(), this.attributeView.lockTextureUploads(), this._lockStatisticUpdates = true;
  }
  editEnd() {
    this._renderState?.unlockUploads(), this.attributeView.unlockTextureUploads(), this._lockStatisticUpdates = false;
    for (const e8 of this._updateStatisticsRequests) this.updateStatistics(e8.level, e8.statistics);
    this._updateStatisticsRequests = [], this.requestRender();
  }
  swapRenderState() {
    this._renderStateNext && (has("esri-2d-update-debug") && console.debug(`Version[${this._renderStateNext.version}] FeatureContainer.update.swapRenderState`), this._renderState?.destroy(), this._renderState = this._renderStateNext, this._renderStateNext = null), this._renderState && this._renderState.flush(), this.requestRender();
  }
  setVisibleTiles(e8) {
    this._visibleTiles = e8;
  }
  onMessage(t12, s9) {
    return __async(this, null, function* () {
      s2(s9);
      const i10 = t12.inner;
      if (!this._subscriptions.has(i10.id)) return;
      const r8 = this._subscriptions.get(i10.id);
      if (r8.version !== i10.subscriptionVesrion) {
        if (has("esri-2d-update-debug")) {
          const e8 = `${i10.subscriptionVesrion} != ${r8.version}`;
          console.debug(`Version[${e8}] Tile[${i10.id}] FeatureContainer - Dropping message, outdated version]`, i10);
        }
        return;
      }
      const n10 = this._renderStateNext ?? this._renderState;
      if (!n10) throw new Error("InternalError: No renderState defined");
      n10.version !== i10.version && console.error(`InternalError: Version mismatch. [renderState: ${n10.version}, message: ${i10.version}]`), n10.enqueueUpdate(i10), this.requestRender(), this._layerView.view.labelManager.requestUpdate(), this._layerView.requestUpdate();
    });
  }
  removeTile(e8) {
    (this._renderState || this._renderStateNext) && (this._renderState && this._renderState.removeTile(e8), this._renderStateNext && this._renderStateNext.removeTile(e8));
  }
  hitTest(e8) {
    let s9 = this._hitTestsRequests.find(({
      x: t12,
      y: s10
    }) => t12 === e8.x && s10 === e8.y);
    const i10 = L();
    return s9 ? s9.resolvers.push(i10) : (s9 = {
      x: e8.x,
      y: e8.y,
      resolvers: [i10]
    }, this._hitTestsRequests.push(s9)), this.requestRender(), i10.promise;
  }
  getSortKeys(e8) {
    const t12 = new Set(e8), s9 = /* @__PURE__ */ new Map();
    for (const i10 of this.children) if (i10.getSortKeys(t12).forEach((e9, t13) => s9.set(t13, e9)), s9.size === t12.size) break;
    return s9;
  }
  get hasAnimation() {
    return this.hasLabels;
  }
  updateTransitionProperties(e8, t12) {
    super.updateTransitionProperties(e8, t12), this._layerView.featureEffectView.transitionStep(e8, t12), this._layerView.featureEffectView.transitioning && this.requestRender();
  }
  doRender(e8) {
    const {
      minScale: t12,
      maxScale: s9
    } = this._layer.effectiveScaleRange, i10 = e8.state.scale;
    i10 <= (t12 || 1 / 0) && i10 >= s9 && super.doRender(e8);
  }
  afterRender(e8) {
    super.afterRender(e8), this._hitTestsRequests.length && this.requestRender();
  }
  setStencilReference(e8) {
    const t12 = this._getOverrideStencilRef(e8);
    if (null == t12) super.setStencilReference(e8);
    else for (const s9 of this.children) s9.stencilRef = t12(s9);
  }
  _renderMapPhase(e8) {
    this._layerView.featureEffectView.hasEffects ? (this._renderOutsideEffect(e8), this._renderInsideEffect(e8)) : this._renderFeatures(e8, R.All), this._hitTestsRequests.length > 0 && this._renderHittest(e8);
  }
  _renderHighlightPhase(e8) {
    this.hasHighlight && a5(e8, false, (e9) => {
      this._renderFeatures(e9, R.Highlight);
    });
  }
  _renderLabelPhase(e8) {
    this._renderFeatures(e8, R.All);
  }
  _renderInsideEffect(e8) {
    const t12 = e8.painter.effects.insideEffect;
    t12.bind(e8), this._renderFeatures(e8, R.InsideEffect), t12.draw(e8, this._layerView.featureEffectView.includedEffects), t12.unbind();
  }
  _renderOutsideEffect(e8) {
    const t12 = e8.painter.effects.outsideEffect;
    t12.bind(e8), this._renderFeatures(e8, R.OutsideEffect), t12.draw(e8, this._layerView.featureEffectView.excludedEffects), t12.unbind();
  }
  _renderHittest(e8) {
    const {
      context: t12
    } = e8, s9 = e8.painter.effects.hittest, i10 = t12.getBoundFramebufferObject(), a10 = t12.getViewport(), o14 = e8.passOptions, h5 = e8.drawPhase;
    s9.bind(e8), e8.passOptions = s9.createOptions(e8, this._hitTestsRequests), e8.drawPhase = E.HITTEST;
    const {
      distance: d10,
      smallSymbolDistance: l12
    } = e8.passOptions, u14 = Math.max(d10, l12);
    for (const r8 of this.children) r8.visible && r8.containsScreenPoint(e8.state, e8.passOptions.position, 2 * u14) && this._renderTile(r8, e8, R.All);
    s9.draw(e8), s9.unbind(), t12.bindFramebuffer(i10), t12.restoreViewport(a10), e8.passOptions = o14, e8.drawPhase = h5;
  }
  _renderFeatures(e8, t12) {
    for (const i10 of this.children) i10.visible && this._renderTile(i10, e8, t12);
    const s9 = this._getExclusivePostprocessingInstance(e8);
    null != s9 && s9.techniqueRef.postProcess(e8, s9);
  }
  _renderTile(e8, t12, s9) {
    const i10 = has("featurelayer-force-marker-text-draw-order") ? N.STRICT_MARKERS_AND_TEXT : N.BATCHING, r8 = e8.getDisplayList(this._instanceStore, i10);
    t12.selection = s9, r8?.render(t12);
  }
};

// ../../../node_modules/@arcgis/core/views/2d/layers/features/FeaturePipelineWorkerProxy.js
function t7(t12) {
  return __async(this, null, function* () {
    const o14 = yield p("FeaturePipelineWorker", {
      client: t12,
      strategy: "dedicated"
    });
    return new n5(o14);
  });
}
var n5 = class {
  constructor(e8) {
    this._connection = e8, this.pipeline = this._connection.createInvokeProxy(), this.features = this._connection.createInvokeProxy("features"), this.aggregates = this._connection.createInvokeProxy("aggregates"), this.streamMessenger = this._connection.createInvokeProxy("streamMessenger");
  }
  destroy() {
    this._connection.destroy();
  }
  get closed() {
    return this._connection.closed;
  }
};

// ../../../node_modules/@arcgis/core/views/2d/layers/features/FeatureSourceEventLog.js
var n6 = 10;
var l5 = class extends S {
  constructor() {
    super(...arguments), this.events = new o(), this._updatingStrategy = true, this._tileToEvent = new s3(), this._fetchStatus = {
      outstanding: 0,
      done: 0
    };
  }
  get hasAllFeatures() {
    return this._hasAllData() && (this._strategyInfo?.willQueryAllFeatures ?? false);
  }
  get hasAllFeaturesInView() {
    return this._hasAllData();
  }
  get hasFullGeometries() {
    return this._hasAllData() && (this._strategyInfo?.willQueryFullResolutionGeometry ?? false);
  }
  onEvent(t12) {
    switch (t12.type) {
      case "subscribe":
      case "unsubscribe":
      case "loaded":
      case "error":
        this._handleTileEvent(t12);
        break;
      case "updateStrategyStart":
        this._updatingStrategy = true, this._fetchStatus = {
          done: 0,
          outstanding: 0
        }, this._strategyInfo = t12.about;
        break;
      case "updateStrategyEnd":
        this._updatingStrategy = false;
        break;
      case "updateFieldsStart":
        this._fetchStatus = {
          done: 0,
          outstanding: 0
        };
        break;
      case "updateFieldsEnd":
        break;
      case "updateFieldsError":
        this.events.emit("error", t12);
        break;
      case "fetchStart":
        this._fetchStatus.outstanding += 1, this.events.emit("status", this._fetchStatus);
        break;
      case "fetchEnd":
        this._fetchStatus.done += 1, this.events.emit("status", this._fetchStatus), t12.done && (this._fetchStatus = {
          done: 0,
          outstanding: 0
        });
    }
  }
  _hasAllData() {
    return !this._updatingStrategy && this._hasAllTileData();
  }
  _hasAllTileData() {
    for (const t12 of this._tileToEvent.values()) {
      const e8 = t12.peekLast();
      if ("loaded" !== e8?.type) return false;
    }
    return true;
  }
  _handleTileEvent(t12) {
    switch (t12.type) {
      case "subscribe": {
        const e8 = new t2(n6);
        e8.enqueue(t12), this._tileToEvent.set(t12.tile, e8);
        break;
      }
      case "unsubscribe":
        this._tileToEvent.delete(t12.tile);
        break;
      case "loaded": {
        const e8 = this._tileToEvent.get(t12.tile);
        if (!e8) return;
        e8.enqueue(t12), this._tileToEvent.set(t12.tile, e8);
        break;
      }
      case "error": {
        const e8 = this._tileToEvent.get(t12.tile);
        if (!e8) return;
        e8.enqueue(t12), this._tileToEvent.set(t12.tile, e8), this.events.emit("error", t12);
        break;
      }
    }
  }
};
e2([y({
  readOnly: true
})], l5.prototype, "hasAllFeatures", null), e2([y({
  readOnly: true
})], l5.prototype, "hasAllFeaturesInView", null), e2([y({
  readOnly: true
})], l5.prototype, "hasFullGeometries", null), e2([y()], l5.prototype, "_updatingStrategy", void 0), e2([y()], l5.prototype, "_strategyInfo", void 0), e2([y()], l5.prototype, "_tileToEvent", void 0), l5 = e2([a2("esri.views.2d.layers.features.FeatureSourceEventLog")], l5);

// ../../../node_modules/@arcgis/core/views/2d/layers/features/layerAdapters/geometryUtils.js
function e7(e8) {
  switch (e8.geometryType) {
    case "point":
      return "esriGeometryPoint";
    case "polyline":
      return "esriGeometryPolyline";
    case "polygon":
    case "multipatch":
      return "esriGeometryPolygon";
    case "multipoint":
      return "esriGeometryMultipoint";
    default:
      return null;
  }
}

// ../../../node_modules/@arcgis/core/views/2d/layers/support/visualVariableSimpleUtils.js
var r4 = Math.PI;
function i7(e8, t12) {
  switch (t12.transformationType) {
    case i.Additive:
      return s7(e8, t12);
    case i.Constant:
      return o6(t12, e8);
    case i.ClampedLinear:
      return u7(e8, t12);
    case i.Proportional:
      return l6(e8, t12);
    case i.Stops:
      return c4(e8, t12);
    case i.RealWorldSize:
      return m4(e8, t12);
    case i.Identity:
      return e8;
    case i.Unknown:
      return null;
  }
}
function a7(e8, t12) {
  return "number" == typeof e8 ? e8 : i7(t12, e8);
}
function s7(e8, t12) {
  return e8 + (a7(t12.minSize, e8) || t12.minDataValue);
}
function o6(e8, t12) {
  const n10 = e8.stops;
  let r8 = n10?.length && n10[0].size;
  return null == r8 && (r8 = e8.minSize), a7(r8, t12);
}
function u7(e8, t12) {
  const n10 = t12.minDataValue, r8 = t12.maxDataValue, i10 = (e8 - n10) / (r8 - n10), s9 = a7(t12.minSize, e8), o14 = a7(t12.maxSize, e8);
  return e8 <= n10 ? s9 : e8 >= r8 ? o14 : s9 + i10 * (o14 - s9);
}
function l6(t12, n10) {
  const r8 = t12 / n10.minDataValue, i10 = a7(n10.minSize, t12), s9 = a7(n10.maxSize, t12);
  let o14 = null;
  return o14 = r8 * i10, e3(o14, i10, s9);
}
function c4(e8, t12) {
  const [n10, r8, i10] = p3(e8, t12.cache.ipData);
  if (n10 === r8) return a7(t12.stops[n10].size, e8);
  {
    const s9 = a7(t12.stops[n10].size, e8);
    return s9 + (a7(t12.stops[r8].size, e8) - s9) * i10;
  }
}
function m4(n10, i10) {
  const s9 = m[i10.valueUnit], o14 = a7(i10.minSize, n10), u14 = a7(i10.maxSize, n10), {
    valueRepresentation: l12
  } = i10;
  let c9 = null;
  return c9 = "area" === l12 ? 2 * Math.sqrt(n10 / r4) / s9 : "radius" === l12 || "distance" === l12 ? 2 * n10 / s9 : n10 / s9, e3(c9, o14, u14);
}
function p3(e8, t12) {
  if (!t12) return;
  let n10 = 0, r8 = t12.length - 1;
  return t12.some((t13, i10) => e8 < t13 ? (r8 = i10, true) : (n10 = i10, false)), [n10, r8, (e8 - t12[n10]) / (t12[r8] - t12[n10])];
}

// ../../../node_modules/@arcgis/core/views/2d/layers/features/layerAdapters/labelingUtils.js
function l7(n10) {
  return (n10.labelsVisible && n10.labelingInfo?.every((n11) => "none" !== n11.deconflictionStrategy)) ?? false;
}
function r5(n10, i10) {
  const l12 = e5(n10, i10);
  if (l12?.labelsVisible && l12.labelingInfo?.length) return l12.labelingInfo.every((n11) => "none" !== n11.deconflictionStrategy);
}
function t8(e8) {
  return (l12) => u5(i7(l12, e8));
}
function o7(n10) {
  const e8 = null != n10 && "visualVariables" in n10 && n10.visualVariables;
  if (!e8) return null;
  for (const i10 of e8) if ("size" === i10.type) return t8(i10);
  return null;
}

// ../../../node_modules/@arcgis/core/views/2d/layers/features/schema/SourceSchema.js
function t9(t12, i10, s9, o14) {
  const r8 = null != t12.subtypeCode ? `${t12.subtypeField} = ${t12.subtypeCode}` : null, n10 = n2(t12.definitionExpression, r8), a10 = t12.customParameters ?? {};
  return o14 && (a10.token = o14), {
    type: "feature",
    mutable: {
      sourceRefreshVersion: s9,
      availableFields: i10.availableFields,
      dataFilter: {
        queryScaleRanges: t12.queryScaleRanges ?? [],
        definitionExpression: n10,
        gdbVersion: t12.gdbVersion,
        historicMoment: t12.historicMoment?.getTime(),
        timeExtent: t12.timeExtent?.toJSON(),
        customParameters: a10
      }
    }
  };
}

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/color.js
function u8(n10, r8, t12 = 0) {
  if (null == r8) return n10[t12] = 0, n10[t12 + 1] = 0, n10[t12 + 2] = 0, void (n10[t12 + 3] = 0);
  const {
    r: o14,
    g: u14,
    b: i10,
    a: c9
  } = r8;
  n10[t12] = o14 * c9 / 255, n10[t12 + 1] = u14 * c9 / 255, n10[t12 + 2] = i10 * c9 / 255, n10[t12 + 3] = c9;
}

// ../../../node_modules/@arcgis/core/views/2d/layers/features/schema/processor/symbols/SymbolSchema.js
function M2(i10, a10) {
  return __async(this, null, function* () {
    if (!i10) return [];
    switch (i10.type) {
      case "simple-fill":
        return P2(i10, a10);
      case "picture-fill":
        return U(i10, a10);
      case "simple-marker":
        return w2(i10, a10);
      case "picture-marker":
        return A(i10, a10);
      case "simple-line":
        return B(i10, a10, false);
      case "text":
        return R2(i10, a10);
      case "label":
        return k(i10, a10);
      case "cim":
        return n4(i10.data, a10);
      case "web-style": {
        const e8 = yield i10.fetchCIMSymbol();
        return n4(e8.data, a10);
      }
      case "line-3d":
        return n.getLogger("esri.views.layers.FeatureLayerView").warn("unsupported-symbol", `Symbol of type "${i10.type}" unsupported in MapView. Defaulting to simple-line`), B(new d3(), a10, false);
      case "point-3d":
        return n.getLogger("esri.views.layers.FeatureLayerView").warn("unsupported-symbol", `Symbol of type "${i10.type}" unsupported in MapView. Defaulting to simple-marker`), w2(new y2(), a10);
      case "polygon-3d":
        return n.getLogger("esri.views.layers.FeatureLayerView").warn("unsupported-symbol", `Symbol of type "${i10.type}" unsupported in MapView. Defaulting to simple-fill`), P2(new S2(), a10);
      case "mesh-3d":
      case "label-3d":
        return n.getLogger("esri.views.layers.FeatureLayerView").warn("unsupported-symbol", `Symbol of type "${i10.type}" unsupported in MapView. Ignoring`), [];
      case "CIMSymbolReference":
        throw new Error("InternalError: CIMSymbolReference should already be resolved");
    }
  });
}
function x2(e8, i10) {
  return __async(this, null, function* () {
    const {
      schemaOptions: a10
    } = i10, {
      store: l12
    } = a10, r8 = new Array(G), t12 = new Array(G / 4);
    for (let u14 = 0; u14 < G; u14++) {
      const i11 = u14 < e8.attributes.length ? e8.attributes[u14].color : null;
      r8[u14] = [0, 0, 0, 0], u8(r8[u14], i11);
    }
    for (let u14 = 0; u14 < G / 4; u14++) t12[u14] = [0, 0, 0, 0], t12[u14][0] = 4 * u14 < e8.attributes.length ? 1 : 0, t12[u14][1] = 4 * u14 + 1 < e8.attributes.length ? 1 : 0, t12[u14][2] = 4 * u14 + 2 < e8.attributes.length ? 1 : 0, t12[u14][3] = 4 * u14 + 3 < e8.attributes.length ? 1 : 0;
    const o14 = {
      uniforms: {
        isActive: t12,
        colors: r8,
        dotValue: e8.dotValue,
        dotScale: e8.referenceScale,
        blending: e8.dotBlendingEnabled,
        dotSize: e8.dotSize,
        seed: e8.seed
      },
      optionalAttributes: {}
    }, s9 = l12.ensureInstance(h3.dotDensity, o14).createMeshInfo({
      effects: null
    }), n10 = [];
    if (e8.backgroundColor) {
      const a11 = new S2({
        color: e8.backgroundColor,
        outline: null
      }), l13 = yield M2(a11, i10);
      n10.push(...l13);
    }
    if (n10.push(s9), e8.outline) {
      const a11 = B(e8.outline, i10, true);
      n10.push(...a11);
    }
    return n10;
  });
}
function C(e8, l12) {
  return __async(this, null, function* () {
    const {
      store: r8
    } = l12, {
      radius: t12,
      minDensity: o14,
      maxDensity: s9,
      referenceScale: n10,
      field: u14,
      valueExpression: c9,
      colorStops: p6
    } = e8, b4 = f3(p6);
    return [r8.ensureInstance(h3.heatmap, {
      uniforms: {
        radius: u5(t12),
        minDensity: o14,
        maxDensity: s9,
        referenceScale: n10,
        isFieldActive: !(!u14 && !c9),
        gradient: b4,
        gradientHash: b4.join(",")
      },
      optionalAttributes: {}
    }).createMeshInfo({
      effects: null
    })];
  });
}
function I(e8, a10) {
  const {
    store: l12
  } = a10, r8 = e8.outline?.width || 0, t12 = M(e8), o14 = l12.ensureInstance(h3.pieChart, {
    uniforms: {
      shader: {
        outlineWidth: Math.round(u5(r8)),
        defaultColor: t4(e8.defaultColor),
        outlineColor: t4(e8.outline?.color),
        othersColor: t4(e8.othersCategory?.color),
        donutRatio: e8.holePercentage,
        sectorThreshold: e8.othersCategory?.threshold || 0,
        colors: e8.attributes.map((e9) => t4(e9.color)),
        visualVariableOpacity: t12.visualVariableOpacity,
        visualVariableSizeMinMaxValue: t12.visualVariableSizeMinMaxValue,
        visualVariableSizeScaleStops: t12.visualVariableSizeScaleStops,
        visualVariableSizeStops: t12.visualVariableSizeStops,
        visualVariableSizeUnitValue: t12.visualVariableSizeUnitValue,
        hittestUniforms: null
      },
      numberOfFields: e8.attributes.length
    },
    optionalAttributes: {}
  }).createMeshInfo({
    size: e8.size,
    outlineWidth: r8,
    effects: null,
    scaleInfo: null,
    minPixelBuffer: h4(t12)
  });
  return [...e8.backgroundFillSymbol ? P2(e8.backgroundFillSymbol, {
    schemaOptions: a10,
    path: "",
    uniforms: x
  }) : [], o14];
}
function O3(e8) {
  if ("path" === e8.style) {
    if (null == e8.path) throw new Error("Symbol with a style of type path must define a path");
    return {
      type: "sprite-rasterization-param",
      overrides: [],
      resource: {
        type: "path",
        path: e8.path,
        asFill: true
      }
    };
  }
  const i10 = ee.fromSimpleMarker(e8);
  if ("outline" in e8 && e8.outline && "none" !== e8.outline.style) {
    if ("solid" !== e8.outline.style) {
      if (!i10 || !i10.symbolLayers) throw new Error("Error handling marker! ");
      return {
        type: "sprite-rasterization-param",
        resource: i10.symbolLayers[0],
        overrides: []
      };
    }
  }
  return {
    type: "sprite-rasterization-param",
    resource: l2(i10),
    overrides: []
  };
}
function w2(e8, i10) {
  return __async(this, null, function* () {
    const {
      uniforms: a10,
      schemaOptions: r8
    } = i10, {
      store: t12
    } = r8;
    if ("path" === e8.style || e8.outline && "solid" !== e8.outline.style && "none" !== e8.outline.style) {
      const r9 = ee.fromSimpleMarker(e8);
      if (!r9 || !r9.symbolLayers) throw new Error("Error handling marker! ");
      if (a10.visualVariableRotation && (r9.angleAlignment = "Map"), "path" !== e8.style) {
        const e9 = r9.symbolLayers[0];
        if (a6(i10.uniforms)) {
          const a11 = h4(i10.uniforms, 0, 1);
          if (a11 > e9.size) {
            const i11 = a11 / e9.size;
            e9.size = a11;
            const l12 = e9.markerGraphics?.[0].symbol;
            (l12.symbolLayers && l12.symbolLayers[0]).width *= i11;
          }
        }
      }
      return n4({
        type: "CIMSymbolReference",
        symbol: r9
      }, i10);
    }
    const s9 = t12.ensureInstance(h3.marker, {
      uniforms: {
        visualVariableColor: a10.visualVariableColor,
        visualVariableOpacity: a10.visualVariableOpacity,
        visualVariableSizeMinMaxValue: a10.visualVariableSizeMinMaxValue,
        visualVariableSizeScaleStops: a10.visualVariableSizeScaleStops,
        visualVariableSizeStops: a10.visualVariableSizeStops,
        visualVariableSizeUnitValue: a10.visualVariableSizeUnitValue,
        visualVariableRotation: a10.visualVariableRotation
      },
      optionalAttributes: {
        zoomRange: false
      }
    }), n10 = O3(e8);
    let u14 = e8.color?.toArray() ?? [0, 0, 0, 0];
    "CIMVectorMarker" === n10.resource.type && (u14 = [255, 255, 255, 255]);
    const c9 = "triangle" === e8.style ? 124 / 116 : 1, p6 = e8.size, b4 = p6 * c9, m9 = null != a10.visualVariableColor && ("cross" === e8.style || "x" === e8.style);
    return [s9.createMeshInfo({
      type: "simple",
      color: u14,
      height: p6,
      width: b4,
      offsetX: e8.xoffset,
      offsetY: e8.yoffset,
      angle: e8.angle,
      alignment: i3(a10) ? i2.MAP : i2.SCREEN,
      outlineColor: e8.outline?.color?.toArray() ?? [0, 0, 0, 0],
      outlineSize: e8.outline?.width ?? 1,
      referenceSize: p6,
      sprite: n10,
      overrideOutlineColor: m9,
      hasSizeVV: a6(a10),
      placement: null,
      effects: null,
      transforms: null,
      scaleInfo: null,
      minPixelBuffer: h4(a10)
    })];
  });
}
function A(e8, i10) {
  const {
    uniforms: a10,
    schemaOptions: r8
  } = i10, {
    store: t12
  } = r8, s9 = t12.ensureInstance(h3.marker, {
    uniforms: {
      visualVariableColor: a10.visualVariableColor,
      visualVariableOpacity: a10.visualVariableOpacity,
      visualVariableSizeMinMaxValue: a10.visualVariableSizeMinMaxValue,
      visualVariableSizeScaleStops: a10.visualVariableSizeScaleStops,
      visualVariableSizeStops: a10.visualVariableSizeStops,
      visualVariableSizeUnitValue: a10.visualVariableSizeUnitValue,
      visualVariableRotation: a10.visualVariableRotation
    },
    optionalAttributes: {
      zoomRange: false
    }
  }), n10 = ee.createPictureMarkerRasterizationParam(e8);
  if (!n10) return [];
  return [s9.createMeshInfo({
    type: "picture",
    color: [255, 255, 255, 255],
    height: e8.height,
    width: e8.width,
    offsetX: e8.xoffset,
    offsetY: e8.yoffset,
    angle: e8.angle,
    alignment: i3(a10) ? i2.MAP : i2.SCREEN,
    outlineColor: null,
    outlineSize: 0,
    referenceSize: e8.height,
    sprite: n10,
    overrideOutlineColor: false,
    hasSizeVV: a6(a10),
    placement: null,
    effects: null,
    transforms: null,
    scaleInfo: null,
    minPixelBuffer: h4(a10)
  })];
}
function L2(e8, i10, a10) {
  const {
    uniforms: l12,
    schemaOptions: r8
  } = a10, {
    store: t12
  } = r8, n10 = t12.ensureInstance(h3.marker, {
    uniforms: {
      visualVariableColor: l12.visualVariableColor,
      visualVariableOpacity: l12.visualVariableOpacity,
      visualVariableSizeMinMaxValue: l12.visualVariableSizeMinMaxValue,
      visualVariableSizeScaleStops: l12.visualVariableSizeScaleStops,
      visualVariableSizeStops: l12.visualVariableSizeStops,
      visualVariableSizeUnitValue: l12.visualVariableSizeUnitValue,
      visualVariableRotation: l12.visualVariableRotation
    },
    optionalAttributes: {
      zoomRange: false
    }
  }), u14 = O3(e8), c9 = 6, p6 = c9 * i10.width, b4 = p6, m9 = e8.color?.toArray() ?? i10.color?.toArray() ?? [0, 0, 0, 0], V2 = "cross" === e8.style || "x" === e8.style;
  let y5;
  switch (e8.placement) {
    case "begin-end":
      y5 = o4.Both;
      break;
    case "begin":
      y5 = o4.JustBegin;
      break;
    case "end":
      y5 = o4.JustEnd;
      break;
    default:
      y5 = o4.None;
  }
  const z = {
    type: "cim-marker-placement-param",
    placement: {
      type: "CIMMarkerPlacementAtExtremities",
      angleToLine: true,
      offset: 0,
      extremityPlacement: y5,
      offsetAlongLine: 0
    },
    overrides: []
  };
  return [n10.createMeshInfo({
    type: "simple",
    color: m9,
    height: b4,
    width: p6,
    offsetX: 0,
    offsetY: 0,
    angle: 0,
    alignment: i3(l12) ? i2.MAP : i2.SCREEN,
    outlineColor: m9,
    outlineSize: V2 ? i10.width : 0,
    referenceSize: b4 / c9,
    sprite: u14,
    overrideOutlineColor: V2 && null != l12.visualVariableColor,
    hasSizeVV: a6(l12),
    placement: z,
    transforms: null,
    effects: null,
    scaleInfo: null,
    minPixelBuffer: h4(l12)
  })];
}
function R2(e8, i10) {
  const {
    uniforms: a10,
    schemaOptions: r8
  } = i10, {
    store: t12
  } = r8;
  return [t12.ensureInstance(h3.text, {
    uniforms: {
      visualVariableColor: a10.visualVariableColor,
      visualVariableOpacity: a10.visualVariableOpacity,
      visualVariableRotation: a10.visualVariableRotation,
      visualVariableSizeMinMaxValue: a10.visualVariableSizeMinMaxValue,
      visualVariableSizeScaleStops: a10.visualVariableSizeScaleStops,
      visualVariableSizeStops: a10.visualVariableSizeStops,
      visualVariableSizeUnitValue: a10.visualVariableSizeUnitValue
    },
    optionalAttributes: {
      zoomRange: false,
      clipAngle: false,
      referenceSymbol: false
    }
  }).createMeshInfo({
    boxBackgroundColor: e8.backgroundColor?.toArray(),
    boxBorderLineColor: e8.borderLineColor?.toArray(),
    boxBorderLineSize: e8.borderLineSize ?? 0,
    color: e8.color?.toArray() ?? [0, 0, 0, 0],
    offsetX: e8.xoffset,
    offsetY: e8.yoffset,
    postAngle: e8.angle,
    fontSize: e8.font.size,
    decoration: e8.font.decoration,
    haloColor: e8.haloColor?.toArray() ?? [0, 0, 0, 0],
    haloFontSize: e8.haloSize ?? 0,
    lineWidth: e8.lineWidth,
    lineHeightRatio: e8.lineHeight,
    horizontalAlignment: e8.horizontalAlignment,
    verticalAlignment: e8.verticalAlignment,
    useCIMAngleBehavior: false,
    glyphs: {
      type: "text-rasterization-param",
      resource: {
        type: "text",
        font: e8.font.toJSON(),
        textString: e8.text,
        symbol: ee.createCIMTextSymbolfromTextSymbol(e8)
      },
      overrides: []
    },
    referenceSize: null,
    effects: null,
    placement: null,
    scaleInfo: null,
    transforms: null,
    scaleFactor: 1,
    minPixelBuffer: h4(a10),
    repeatLabel: null,
    repeatLabelDistance: null,
    allowOverrun: null,
    labelPosition: null,
    isLineLabel: false
  })];
}
function k(e8, a10) {
  const {
    schemaOptions: r8,
    uniforms: t12
  } = a10, {
    store: o14
  } = r8, s9 = e8.symbol, {
    allowOverrun: n10,
    repeatLabel: c9,
    repeatLabelDistance: p6
  } = e8, b4 = {
    maxScale: e8.maxScale ?? 0,
    minScale: e8.minScale ?? 0
  }, m9 = o14.ensureInstance(h3.label, {
    uniforms: {
      visualVariableColor: null,
      visualVariableOpacity: null,
      visualVariableRotation: t12.visualVariableRotation,
      visualVariableSizeMinMaxValue: t12.visualVariableSizeMinMaxValue,
      visualVariableSizeScaleStops: t12.visualVariableSizeScaleStops,
      visualVariableSizeStops: t12.visualVariableSizeStops,
      visualVariableSizeUnitValue: t12.visualVariableSizeUnitValue
    },
    optionalAttributes: {
      zoomRange: true,
      clipAngle: true,
      referenceSymbol: true
    }
  }), V2 = e8.labelPlacement, [y5, v] = o5(V2);
  return [m9.createMeshInfo({
    boxBackgroundColor: s9.backgroundColor?.toArray(),
    boxBorderLineColor: s9.borderLineColor?.toArray(),
    boxBorderLineSize: s9.borderLineSize ?? 0,
    color: s9.color?.toArray() ?? [0, 0, 0, 0],
    offsetX: s9.xoffset,
    offsetY: s9.yoffset,
    postAngle: s9.angle,
    fontSize: s9.font.size,
    decoration: s9.font.decoration,
    haloColor: s9.haloColor?.toArray() ?? [0, 0, 0, 0],
    haloFontSize: s9.haloSize ?? 0,
    lineWidth: s9.lineWidth,
    lineHeightRatio: s9.lineHeight,
    horizontalAlignment: y5,
    verticalAlignment: v,
    repeatLabel: c9,
    repeatLabelDistance: u5(p6),
    allowOverrun: n10,
    labelPosition: e8.labelPosition,
    scaleInfo: b4,
    minPixelBuffer: h4(t12),
    useCIMAngleBehavior: false,
    glyphs: {
      type: "text-rasterization-param",
      resource: {
        type: "text",
        font: s9.font.toJSON(),
        textString: s9.text,
        symbol: ee.createCIMTextSymbolfromTextSymbol(s9),
        primitiveName: "label-override"
      },
      useLegacyLabelEvaluationRules: null == e8.labelExpressionInfo?.expression,
      overrides: [{
        type: "CIMPrimitiveOverride",
        valueExpressionInfo: {
          type: "CIMExpressionInfo",
          expression: e8.labelExpressionInfo?.expression ?? e8.labelExpression,
          returnType: "String"
        },
        primitiveName: "label-override",
        propertyName: "textString",
        defaultValue: ""
      }]
    },
    referenceSize: null,
    effects: null,
    placement: null,
    transforms: null,
    scaleFactor: 1,
    isLineLabel: false
  })];
}
function j(e8, i10) {
  const a10 = e8.width;
  return {
    outlineColor: e8.color?.toArray() || [0, 0, 0, 1],
    width: a10,
    referenceWidth: a10,
    capType: e8.cap ?? "round",
    joinType: e8.join ?? "round",
    miterLimit: e8.miterLimit,
    hasSizeVV: i10
  };
}
function E2(e8, i10) {
  const {
    uniforms: a10,
    schemaOptions: l12
  } = i10, {
    store: r8
  } = l12, t12 = e8.color?.toArray() ?? [0, 0, 0, 0], o14 = {
    type: "sprite-rasterization-param",
    resource: {
      type: "fill-style",
      style: e8.style
    },
    overrides: []
  };
  if ("solid" === e8.outline?.style) {
    return [r8.ensureInstance(h3.patternOutlineFill, {
      uniforms: {
        visualVariableColor: a10.visualVariableColor,
        visualVariableOpacity: a10.visualVariableOpacity,
        visualVariableSizeScaleStops: a10.visualVariableSizeOutlineScaleStops,
        visualVariableSizeMinMaxValue: null,
        visualVariableSizeStops: null,
        visualVariableSizeUnitValue: null
      },
      optionalAttributes: {
        zoomRange: false
      }
    }).createMeshInfo(__spreadProps(__spreadValues({
      color: t12
    }, j(e8.outline, !!a10.visualVariableSizeOutlineScaleStops)), {
      sprite: o14,
      scaleInfo: null,
      effects: null
    }))];
  }
  const s9 = [], n10 = r8.ensureInstance(h3.patternFill, {
    uniforms: {
      visualVariableColor: a10.visualVariableColor,
      visualVariableOpacity: a10.visualVariableOpacity
    },
    optionalAttributes: {
      zoomRange: false
    }
  }).createMeshInfo({
    color: e8.color?.toArray() ?? [0, 0, 0, 0],
    sprite: o14,
    scaleInfo: null,
    effects: null
  });
  return s9.push(n10), e8.outline && s9.push(...B(e8.outline, i10, true)), s9;
}
function F2(e8, i10) {
  const {
    uniforms: a10,
    schemaOptions: l12
  } = i10, {
    store: r8
  } = l12, t12 = e8.color?.toArray() ?? [0, 0, 0, 0];
  if ("none" !== e8.style && "solid" === e8.outline?.style) {
    return [r8.ensureInstance(h3.outlineFill, {
      uniforms: {
        visualVariableColor: a10.visualVariableColor,
        visualVariableOpacity: a10.visualVariableOpacity,
        visualVariableSizeScaleStops: a10.visualVariableSizeOutlineScaleStops,
        visualVariableSizeMinMaxValue: null,
        visualVariableSizeStops: null,
        visualVariableSizeUnitValue: null
      },
      optionalAttributes: {
        zoomRange: false
      }
    }).createMeshInfo(__spreadProps(__spreadValues({
      color: t12
    }, j(e8.outline, !!a10.visualVariableSizeOutlineScaleStops)), {
      scaleInfo: null,
      effects: null
    }))];
  }
  const o14 = [];
  if ("none" !== e8.style) {
    const e9 = r8.ensureInstance(h3.fill, {
      uniforms: {
        visualVariableColor: a10.visualVariableColor,
        visualVariableOpacity: a10.visualVariableOpacity
      },
      optionalAttributes: {
        zoomRange: false
      }
    }).createMeshInfo({
      color: t12,
      scaleInfo: null,
      effects: null
    });
    o14.push(e9);
  }
  return e8.outline && o14.push(...B(e8.outline, i10, true)), o14;
}
function P2(e8, i10) {
  const {
    style: a10
  } = e8;
  return a10 && "none" !== a10 && "solid" !== a10 ? E2(e8, i10) : F2(e8, i10);
}
function U(e8, i10) {
  const {
    outline: a10
  } = e8, {
    uniforms: r8,
    schemaOptions: t12
  } = i10, {
    store: o14
  } = t12, s9 = [], n10 = ee.createPictureFillRasterizationParam(e8);
  if (!n10) return [];
  const {
    width: u14,
    height: c9,
    xoffset: p6,
    yoffset: b4,
    xscale: m9,
    yscale: S3
  } = e8, V2 = {
    color: [255, 255, 255, 255],
    sprite: n10,
    height: c9,
    aspectRatio: u14 / c9,
    offsetX: p6,
    offsetY: b4,
    scaleX: m9,
    scaleY: S3,
    angle: 0,
    applyRandomOffset: false,
    sampleAlphaOnly: false,
    scaleProportionally: false,
    effects: null,
    scaleInfo: null
  };
  if ("solid" === a10?.style) {
    return [o14.ensureInstance(h3.complexOutlineFill, {
      uniforms: {
        visualVariableColor: r8.visualVariableColor,
        visualVariableOpacity: r8.visualVariableOpacity,
        visualVariableSizeScaleStops: r8.visualVariableSizeOutlineScaleStops,
        visualVariableSizeMinMaxValue: null,
        visualVariableSizeStops: null,
        visualVariableSizeUnitValue: null
      },
      optionalAttributes: {
        zoomRange: false
      }
    }).createMeshInfo(__spreadValues(__spreadValues({}, V2), j(a10, !!r8.visualVariableSizeOutlineScaleStops)))];
  }
  const y5 = o14.ensureInstance(h3.complexFill, {
    uniforms: {
      visualVariableColor: r8.visualVariableColor,
      visualVariableOpacity: r8.visualVariableOpacity
    },
    optionalAttributes: {
      zoomRange: false
    }
  });
  return s9.push(y5.createMeshInfo(V2)), a10 && s9.push(...B(a10, i10, true)), s9;
}
function B(e8, i10, a10) {
  const {
    color: l12,
    style: o14,
    width: s9,
    cap: n10,
    join: u14
  } = e8, {
    schemaOptions: c9
  } = i10, {
    store: p6
  } = c9, b4 = [], m9 = a10 ? __spreadProps(__spreadValues({}, x), {
    visualVariableSizeScaleStops: i10.uniforms.visualVariableSizeOutlineScaleStops
  }) : i10.uniforms, S3 = {
    uniforms: {
      visualVariableColor: m9.visualVariableColor,
      visualVariableOpacity: m9.visualVariableOpacity,
      visualVariableSizeMinMaxValue: m9.visualVariableSizeMinMaxValue,
      visualVariableSizeScaleStops: m9.visualVariableSizeScaleStops,
      visualVariableSizeStops: m9.visualVariableSizeStops,
      visualVariableSizeUnitValue: m9.visualVariableSizeUnitValue
    },
    optionalAttributes: {
      zoomRange: false
    }
  }, y5 = {
    color: l12?.toArray() ?? [0, 0, 0, 0],
    width: s9,
    referenceWidth: s9,
    capType: n10,
    joinType: u14,
    miterLimit: e8.miterLimit,
    hasSizeVV: a6(m9),
    effects: null,
    scaleInfo: null
  };
  if (null == o14 || "solid" === o14) {
    const e9 = p6.ensureInstance(h3.line, S3).createMeshInfo(y5);
    b4.push(e9);
  } else if ("none" !== o14) {
    const e9 = p6.ensureInstance(h3.texturedLine, S3).createMeshInfo(__spreadProps(__spreadValues({}, y5), {
      shouldScaleDash: true,
      shouldSampleAlphaOnly: false,
      isSDF: true,
      sprite: {
        type: "sprite-rasterization-param",
        resource: {
          type: "dash",
          dashTemplate: me(o14, n10),
          capStyle: re(n10)
        },
        overrides: []
      }
    }));
    b4.push(e9);
  }
  return null != e8.marker && b4.push(...L2(e8.marker, e8, i10)), b4;
}

// ../../../node_modules/@arcgis/core/views/2d/layers/features/schema/processor/LabelMatcherSchema.js
function l8(a10, l12, r8) {
  return __async(this, null, function* () {
    const n10 = l12.labelsVisible && l12.labelingInfo || [], i10 = e7(l12), m9 = a4(n10, i10);
    return {
      type: "label",
      classes: yield Promise.all(m9.map((e8, s9) => o8(a10, e8, s9, r8)))
    };
  });
}
function o8(e8, s9, l12, o14) {
  return __async(this, null, function* () {
    const r8 = yield M2(s9, {
      path: `${l12}`,
      schemaOptions: e8,
      uniforms: o14
    });
    return {
      maxScale: s9.maxScale,
      minScale: s9.minScale,
      expression: s9.labelExpressionInfo?.expression ?? s9.labelExpression,
      where: s9.where,
      meshes: r8
    };
  });
}

// ../../../node_modules/@arcgis/core/views/2d/layers/features/schema/processor/MatcherSchema.js
function r6(e8, a10) {
  return __async(this, null, function* () {
    if (!a10) return {
      type: "simple",
      meshes: []
    };
    switch (a10.type) {
      case "simple":
        return o9(e8, a10);
      case "dot-density":
        return u9(e8, a10);
      case "class-breaks":
        return m6(e8, a10);
      case "unique-value":
        return c5(e8, a10);
      case "dictionary":
        return p4(a10);
      case "heatmap":
        return f5(e8, a10);
      case "pie-chart":
        return y4(e8, a10);
    }
  });
}
function o9(a10, l12) {
  return __async(this, null, function* () {
    const n10 = l12.getSymbols(), s9 = n10.length ? n10[0] : null, r8 = M(l12), t12 = "renderer.symbol";
    return {
      type: "simple",
      meshes: yield M2(s9, {
        schemaOptions: a10,
        uniforms: r8,
        path: t12
      })
    };
  });
}
function u9(a10, i10) {
  return __async(this, null, function* () {
    const n10 = M(i10), s9 = "renderer.symbol";
    return {
      type: "dot-density",
      meshes: yield x2(i10, {
        schemaOptions: a10,
        uniforms: n10,
        path: s9
      })
    };
  });
}
function m6(l12, n10) {
  return __async(this, null, function* () {
    const s9 = M(n10), r8 = n10.backgroundFillSymbol, t12 = n10.normalizationType, o14 = "log" === t12 ? "esriNormalizeByLog" : "percent-of-total" === t12 ? "esriNormalizeByPercentOfTotal" : "field" === t12 ? "esriNormalizeByField" : null, u14 = n10.classBreakInfos.map((e8) => __async(this, null, function* () {
      return {
        meshes: yield M2(e8.symbol, {
          path: `renderer-stop-${e8.minValue}-${e8.maxValue}`,
          schemaOptions: l12,
          uniforms: s9
        }),
        min: e8.minValue,
        max: e8.maxValue
      };
    })), m9 = (yield Promise.all(u14)).sort((e8, a10) => e8.min - a10.min), c9 = yield M2(r8, {
      schemaOptions: l12,
      path: "renderer.backgroundFill",
      uniforms: __spreadProps(__spreadValues({}, x), {
        visualVariableSizeOutlineScaleStops: s9.visualVariableSizeOutlineScaleStops
      })
    }), p6 = yield M2(n10.defaultSymbol, {
      schemaOptions: l12,
      path: "renderer.defaultSymbol",
      uniforms: s9
    });
    return {
      type: "interval",
      field: n10.field,
      expression: n10.valueExpression,
      backgroundFill: c9,
      defaultSymbol: p6,
      intervals: m9,
      normalizationField: n10.normalizationField,
      normalizationTotal: n10.normalizationTotal,
      normalizationType: o14,
      isMaxInclusive: n10.isMaxInclusive
    };
  });
}
function c5(l12, n10) {
  return __async(this, null, function* () {
    const s9 = [], r8 = M(n10), t12 = yield M2(n10.backgroundFillSymbol, {
      schemaOptions: l12,
      path: "renderer.backgroundFill",
      uniforms: __spreadProps(__spreadValues({}, x), {
        visualVariableSizeOutlineScaleStops: r8.visualVariableSizeOutlineScaleStops
      })
    }), o14 = yield M2(n10.defaultSymbol, {
      schemaOptions: l12,
      path: "renderer.defaultSymbol",
      uniforms: r8
    });
    for (const e8 of n10.uniqueValueInfos ?? []) {
      const a10 = yield M2(e8.symbol, {
        path: `renderer-unique-value-${e8.value}`,
        schemaOptions: l12,
        uniforms: r8
      });
      s9.push({
        value: "" + e8.value,
        symbol: a10
      });
    }
    return {
      type: "map",
      field: n10.field,
      expression: n10.valueExpression,
      field2: n10.field2,
      field3: n10.field3,
      fieldDelimiter: n10.fieldDelimiter,
      backgroundFill: t12,
      defaultSymbol: o14,
      map: s9
    };
  });
}
function p4(a10) {
  const i10 = M(a10), l12 = a10.scaleExpression, n10 = null != l12 && "1" !== l12 ? {
    valueExpressionInfo: {
      type: "CIMExpressionInfo",
      expression: a10.scaleExpression,
      returnType: "Numeric"
    },
    defaultValue: 1
  } : void 0;
  return {
    type: "dictionary",
    fieldMap: a10.fieldMap,
    scaleExpression: n10,
    visualVariableUniforms: i10
  };
}
function f5(e8, a10) {
  return __async(this, null, function* () {
    return {
      type: "heatmap",
      meshes: yield C(a10, e8)
    };
  });
}
function y4(e8, a10) {
  return __async(this, null, function* () {
    return {
      type: "pie-chart",
      meshes: I(a10, e8)
    };
  });
}

// ../../../node_modules/@arcgis/core/views/2d/layers/features/schema/processor/SimpleProcessorSchema.js
function l9(e8, r8) {
  return __async(this, null, function* () {
    const s9 = r8.renderer, l12 = M(s9);
    return {
      symbology: yield r6(e8, s9),
      labels: yield l8(e8, r8, l12)
    };
  });
}
function a8(e8, r8, t12, i10) {
  return __async(this, null, function* () {
    const n10 = t12.featureReduction;
    if (n10) switch (n10.type) {
      case "binning":
        return u10(n10, e8, r8, t12, i10);
      case "cluster":
        return f6(n10, e8, r8, t12, i10);
    }
    const a10 = d8(t12.orderBy, t12.renderer, t12.objectIdField), o14 = t5(t12.renderer, r8.filters), c9 = yield l9(e8, t12), y5 = false;
    return {
      storage: o14,
      mesh: {
        properties: {
          sortKey: a10,
          timeZone: r8.timeZone,
          returnMeshObjectId: y5,
          displayRefreshVersion: i10
        },
        strategy: {
          type: "feature"
        },
        factory: c9
      }
    };
  });
}
function o10(e8, r8) {
  return e8.fields.map((e9) => __spreadProps(__spreadValues({}, e9.toJSON()), {
    type: c6(e9, r8)
  }));
}
function c6(e8, r8) {
  const {
    onStatisticExpression: t12,
    onStatisticField: i10,
    statisticType: s9
  } = e8;
  switch (s9) {
    case "min":
    case "max":
    case "avg":
    case "avg_angle":
    case "sum":
    case "count":
      return "esriFieldTypeDouble";
    case "mode": {
      if (t12) {
        const {
          returnType: e10
        } = t12;
        return e10 ? "string" === e10 ? "esriFieldTypeString" : "esriFieldTypeDouble" : "esriFieldTypeString";
      }
      const e9 = r8.find((e10) => e10.name === i10);
      return e9 ? e9.type : "esriFieldTypeString";
    }
  }
}
function u10(r8, l12, a10, c9, u14) {
  return __async(this, null, function* () {
    const f7 = o10(r8, c9.fields), d10 = r8.renderer, y5 = yield r6(l12, d10), p6 = t5(d10, [null, null]), m9 = M(d10), g2 = yield l8(l12, {
      geometryType: "polygon",
      labelingInfo: r8.labelingInfo,
      labelsVisible: r8.labelsVisible
    }, m9), b4 = false, h5 = "geohash" === r8.binType ? {
      type: "geohash",
      fixBinLevel: r8.fixedBinLevel ?? 3
    } : {
      type: "grid",
      size: u5(r8.size),
      fixedBinLevel: r8.fixedBinLevel
    };
    return {
      storage: p6,
      mesh: {
        properties: {
          sortKey: null,
          timeZone: a10.timeZone,
          returnMeshObjectId: b4,
          displayRefreshVersion: u14
        },
        strategy: {
          type: "binning",
          fields: f7,
          index: h5,
          featureFilter: a10.filters[0]
        },
        factory: {
          labels: g2,
          symbology: y5
        }
      }
    };
  });
}
function f6(r8, l12, a10, c9, u14) {
  return __async(this, null, function* () {
    const f7 = o10(r8, c9.fields), d10 = {
      type: "cluster",
      feature: yield r6(l12, r8.effectiveFeatureRenderer),
      cluster: yield r6(l12, r8.effectiveClusterRenderer)
    }, y5 = M(r8.effectiveFeatureRenderer), p6 = {
      type: "cluster",
      feature: yield l8(l12, c9, y5),
      cluster: yield l8(l12, {
        geometryType: "point",
        labelingInfo: r8.labelingInfo,
        labelsVisible: r8.labelsVisible
      }, y5)
    }, m9 = false;
    return {
      storage: t5(r8.effectiveFeatureRenderer, [null, null]),
      mesh: {
        properties: {
          sortKey: null,
          timeZone: a10.timeZone,
          displayRefreshVersion: u14,
          returnMeshObjectId: m9
        },
        strategy: {
          type: "cluster",
          fields: f7,
          featureFilter: a10.filters[0],
          clusterRadius: u5(r8.clusterRadius / 2)
        },
        factory: {
          labels: p6,
          symbology: d10
        }
      }
    };
  });
}
function d8(e8, t12, i10) {
  const s9 = null != t12 && "unique-value" === t12.type && t12.orderByClassesEnabled;
  if ("default" !== e8 || s9 || (e8 = [new a3({
    field: i10,
    order: "descending"
  })]), "default" !== e8 && e8.length) {
    e8.length;
    const r8 = e8[0], t13 = "ascending" === r8.order ? "asc" : "desc";
    return r8.field ? {
      field: r8.field,
      order: t13
    } : r8.valueExpression ? {
      expression: r8.valueExpression,
      order: t13
    } : null;
  }
  if (s9) {
    return {
      byRenderer: true,
      order: "asc"
    };
  }
  return null;
}

// ../../../node_modules/@arcgis/core/views/2d/layers/features/layerAdapters/CatalogFootprintLayerAdapter.js
var l10 = class {
  constructor(e8) {
    this.layer = e8;
  }
  getLabelingDeconflictionInfo(e8) {
    const r8 = this.layer, t12 = l7(r8);
    return [{
      vvEvaluators: {
        0: o7(r8.renderer)
      },
      deconflictionEnabled: t12
    }];
  }
  createServiceOptions(o14) {
    return __async(this, null, function* () {
      const s9 = this.layer, {
        capabilities: i10,
        editingInfo: a10,
        objectIdField: n10,
        globalIdField: l12,
        datesInUnknownTimezone: p6,
        orderBy: u14,
        parsedUrl: c9
      } = s9, d10 = s9.fieldsIndex.toJSON(), m9 = e7(s9), y5 = s9.timeInfo?.toJSON(), f7 = s9.spatialReference.toJSON(), g2 = a(c9);
      let h5 = n10;
      if (u14?.length) {
        const e8 = !u14[0].valueExpression && u14[0].field;
        e8 && (h5 = e8);
      }
      return {
        type: "feature-service",
        source: g2,
        isSourceHosted: g(g2.path),
        orderByFields: h5,
        outSpatialReference: o14.spatialReference.toJSON(),
        metadata: {
          timeReferenceUnknownClient: p6,
          globalIdField: l12,
          fieldsIndex: d10,
          geometryType: m9,
          objectIdField: n10,
          timeInfo: y5,
          spatialReference: f7,
          subtypeField: null,
          subtypes: null,
          typeIdField: null,
          types: null
        },
        queryMetadata: {
          maxRecordCount: i10.query.maxRecordCount,
          supportsCompactGeometry: i10.query.supportsCompactGeometry,
          supportsDefaultSpatialReference: i10.query.supportsDefaultSpatialReference,
          supportsFormatPBF: i10.query.supportsFormatPBF,
          supportsMaxRecordCountFactor: i10.query.supportsMaxRecordCountFactor,
          supportsQuantization: i10.query.supportsQuantization,
          lastEditDate: a10?.lastEditDate?.getTime(),
          snapshotInfo: null
        }
      };
    });
  }
  createSourceSchema(e8, r8) {
    const {
      definitionExpression: t12,
      customParameters: o14,
      timeExtent: s9,
      apiKey: a10
    } = this.layer;
    return t9({
      definitionExpression: t12,
      customParameters: o14,
      timeExtent: s9
    }, e8, r8, a10);
  }
  createProcessorSchema(e8, r8, t12) {
    const {
      fields: o14,
      geometryType: s9,
      orderBy: i10,
      objectIdField: n10,
      renderer: l12,
      labelingInfo: p6,
      labelsVisible: u14
    } = this.layer, c9 = {
      featureReduction: null,
      fields: o14.map((e9) => e9.toJSON()),
      geometryType: s9,
      labelingInfo: p6,
      labelsVisible: u14,
      objectIdField: n10,
      orderBy: i10 ?? "default",
      renderer: l12?.clone()
    };
    return a8(e8, r8, c9, t12);
  }
  get hasRequiredSupport() {
    return m2(this.layer.renderer);
  }
  get timeOptions() {
    return this.layer;
  }
  getUpdateHashProperties(e8) {
    const r8 = this.layer, {
      definitionExpression: t12,
      apiKey: o14,
      renderer: s9
    } = r8, i10 = this.layer.labelsVisible ? this.layer.labelingInfo : null, a10 = JSON.stringify(r8.customParameters), n10 = JSON.stringify(r8.orderBy);
    return {
      outFields: this.layer.outFields,
      apiKey: o14,
      customParameters: a10,
      definitionExpression: t12,
      labelingInfo: i10,
      orderBy: n10,
      renderer: s9
    };
  }
  setGraphicOrigin(e8) {
    e8.origin = {
      type: "catalog",
      layer: this.layer
    };
  }
};

// ../../../node_modules/@arcgis/core/views/2d/layers/features/layerAdapters/featureServiceUtils.js
function t10(t12, e8) {
  const n10 = t12.extent, o14 = e8?.clone().intersection(n10), i10 = null != o14 ? o14.width * o14.height : 0, r8 = e8 ? e8.width * e8.height : 0, h5 = 0 === r8 ? 0 : i10 / r8, s9 = has("featurelayer-snapshot-point-coverage");
  return !isNaN(h5) && h5 >= s9;
}

// ../../../node_modules/@arcgis/core/views/2d/layers/features/layerAdapters/floorFilterUtils.js
function o11(e8, l12) {
  return null != e8.floorInfo && (e8.floorInfo.viewAllLevelIds.length > 0 || l12.floors.length > 0);
}
function r7(e8, o14, r8) {
  const t12 = n7(e8, o14?.where, r8);
  return t12 ? (o14 ??= new d6(), o14.where = t12, o14) : o14;
}
function n7(l12, o14, r8) {
  if (null == l12.floorInfo || !r8.floors?.length) return o14;
  let n10 = r8.floors;
  const {
    floorField: t12,
    viewAllLevelIds: f7
  } = l12.floorInfo;
  f7.length && (n10 = f7);
  const s9 = n10.filter((e8) => "" !== e8).map((e8) => "'" + e8 + "'");
  if (s9.push("''"), o14?.includes(t12)) {
    let e8 = new RegExp("AND \\(" + t12 + ".*NULL\\)", "g");
    o14 = o14.replace(e8, ""), e8 = new RegExp("\\(" + t12 + ".*NULL\\)", "g"), o14 = (o14 = o14.replace(e8, "")).replaceAll(/\s+/g, " ").trim();
  }
  let i10 = "(" + t12 + " IN ({ids}) OR " + t12 + " IS NULL)";
  return i10 = i10.replace("{ids}", s9.join(", ")), n2(o14, i10);
}

// ../../../node_modules/@arcgis/core/views/2d/layers/features/layerAdapters/FeatureLayerAdapter.js
var c7 = class {
  constructor(e8) {
    this.layer = e8;
  }
  getLabelingDeconflictionInfo(e8) {
    const t12 = this.layer, r8 = r5(t12, e8) ?? l7(t12);
    return [{
      vvEvaluators: {
        0: o7(t12.renderer)
      },
      deconflictionEnabled: r8
    }];
  }
  createServiceOptions(r8) {
    return __async(this, null, function* () {
      const o14 = this.layer, {
        capabilities: i10,
        editingInfo: n10,
        objectIdField: l12,
        typeIdField: p6,
        globalIdField: d10,
        datesInUnknownTimezone: u14,
        orderBy: y5,
        subtypeField: c9,
        refreshInterval: m9
      } = o14, f7 = o14.fieldsIndex.toJSON(), h5 = f7.fields, b4 = e7(o14), g2 = o14.timeInfo?.toJSON(), S3 = o14.spatialReference.toJSON(), F3 = o14.types?.map((e8) => e8.toJSON()), I2 = a(this.layer.parsedUrl);
      this.layer.dynamicDataSource && (I2.query = {
        layer: JSON.stringify({
          source: this.layer.dynamicDataSource
        })
      });
      let x3 = this.layer.objectIdField;
      if (y5?.length) {
        const e8 = !y5[0].valueExpression && y5[0].field;
        e8 && (x3 = e8);
      }
      const j2 = !(null != n10?.lastEditDate) && m9 > 0, R3 = has("featurelayer-snapshot-enabled") && "point" === o14.geometryType && i10?.query.supportsPagination && !i10?.operations.supportsEditing && !j2, E3 = R3 && t10(r8, o14.fullExtent);
      return {
        type: "feature-service",
        source: I2,
        isSourceHosted: g(I2.path),
        orderByFields: x3,
        outSpatialReference: r8.spatialReference.toJSON(),
        metadata: {
          typeIdField: p6 ?? void 0,
          types: F3,
          timeReferenceUnknownClient: u14,
          subtypeField: c9,
          globalIdField: d10,
          fields: h5,
          fieldsIndex: f7,
          geometryType: b4,
          objectIdField: l12,
          timeInfo: g2,
          spatialReference: S3,
          subtypes: this.layer.subtypes?.map((e8) => e8.toJSON())
        },
        queryMetadata: {
          maxRecordCount: i10.query.maxRecordCount,
          supportsCompactGeometry: i10.query.supportsCompactGeometry,
          supportsDefaultSpatialReference: i10.query.supportsDefaultSpatialReference,
          supportsFormatPBF: i10.query.supportsFormatPBF,
          supportsMaxRecordCountFactor: i10.query.supportsMaxRecordCountFactor,
          supportsQuantization: i10.query.supportsQuantization,
          lastEditDate: n10?.lastEditDate?.getTime(),
          snapshotInfo: {
            supportsSnapshotMinThreshold: R3,
            supportsSnapshotMaxThreshold: E3,
            snapshotCountThresholds: {
              min: has("featurelayer-snapshot-point-min-threshold"),
              max: has("featurelayer-snapshot-point-max-threshold")
            }
          }
        }
      };
    });
  }
  createSourceSchema(e8, t12) {
    const {
      definitionExpression: r8,
      customParameters: s9,
      gdbVersion: o14,
      historicMoment: i10,
      subtypeCode: a10,
      subtypeField: n10,
      timeExtent: l12,
      apiKey: p6
    } = this.layer;
    return t9({
      definitionExpression: r8,
      customParameters: s9,
      gdbVersion: o14,
      historicMoment: i10,
      subtypeCode: a10,
      subtypeField: n10,
      timeExtent: l12
    }, e8, t12, p6);
  }
  createProcessorSchema(e8, t12, s9) {
    const {
      fields: o14,
      renderer: i10,
      geometryType: a10,
      labelingInfo: n10,
      labelsVisible: l12,
      orderBy: p6,
      objectIdField: d10
    } = this.layer, y5 = {
      fields: o14.map((e9) => e9.toJSON()),
      renderer: i10?.clone(),
      featureReduction: e5(this.layer, t12),
      geometryType: a10,
      labelingInfo: n10,
      labelsVisible: l12,
      objectIdField: d10,
      orderBy: p6 ?? "default"
    };
    return a8(e8, t12, y5, s9);
  }
  get hasRequiredSupport() {
    return m2(this.layer.renderer);
  }
  get timeOptions() {
    return this.layer;
  }
  hasFilters(e8) {
    return o11(this.layer, e8);
  }
  addFilters(e8, t12) {
    return r7(this.layer, e8, t12);
  }
  getUpdateHashProperties(e8) {
    const t12 = this.layer, {
      definitionExpression: s9,
      renderer: i10,
      gdbVersion: a10,
      apiKey: n10,
      subtypeCode: l12
    } = t12, p6 = this.layer.labelsVisible ? this.layer.labelingInfo : null, d10 = t12.historicMoment?.getTime() ?? void 0, u14 = JSON.stringify(t12.customParameters), y5 = e5(t12, e8), c9 = JSON.stringify(t12.orderBy), m9 = o11(this.layer, e8) ? e8.floors : null;
    return {
      outFields: this.layer.outFields,
      apiKey: n10,
      customParameters: u14,
      definitionExpression: s9,
      featureReduction: y5,
      floors: m9,
      gdbVersion: a10,
      historicMoment: d10,
      labelingInfo: p6,
      orderBy: c9,
      renderer: i10,
      subtypeCode: l12
    };
  }
};

// ../../../node_modules/@arcgis/core/views/2d/layers/features/layerAdapters/InMemoryLayerAdapter.js
function u11(r8) {
  if (!("openPorts" in r8)) throw new s("source-not-supported");
}
var p5 = class {
  constructor(e8) {
    this.layer = e8;
  }
  getLabelingDeconflictionInfo(e8) {
    const r8 = this.layer, t12 = r5(r8, e8) ?? l7(r8);
    return [{
      vvEvaluators: {
        0: o7(r8.renderer)
      },
      deconflictionEnabled: t12
    }];
  }
  createServiceOptions(e8) {
    return __async(this, null, function* () {
      const r8 = this.layer, {
        capabilities: o14,
        objectIdField: s9
      } = r8, i10 = r8.fieldsIndex.toJSON(), n10 = e7(r8), l12 = r8.timeInfo?.toJSON(), a10 = r8.spatialReference.toJSON();
      u11(r8.source);
      return {
        type: "memory",
        source: yield r8.source.openPorts(),
        orderByFields: s9,
        outSpatialReference: e8.spatialReference.toJSON(),
        metadata: {
          fieldsIndex: i10,
          geometryType: n10,
          objectIdField: s9,
          timeInfo: l12,
          spatialReference: a10,
          subtypes: null,
          subtypeField: null,
          globalIdField: null,
          typeIdField: null,
          types: null,
          timeReferenceUnknownClient: null
        },
        queryMetadata: {
          maxRecordCount: o14.query.maxRecordCount,
          supportsCompactGeometry: o14.query.supportsCompactGeometry,
          supportsDefaultSpatialReference: o14.query.supportsDefaultSpatialReference,
          supportsFormatPBF: o14.query.supportsFormatPBF,
          supportsMaxRecordCountFactor: o14.query.supportsMaxRecordCountFactor,
          supportsQuantization: o14.query.supportsQuantization,
          lastEditDate: null,
          snapshotInfo: null
        }
      };
    });
  }
  createSourceSchema(e8, r8) {
    const {
      definitionExpression: t12,
      timeExtent: o14
    } = this.layer;
    return t9({
      definitionExpression: t12,
      timeExtent: o14,
      customParameters: null
    }, e8, r8, null);
  }
  createProcessorSchema(e8, t12, o14) {
    const {
      fields: s9,
      renderer: i10,
      geometryType: n10,
      labelingInfo: a10,
      labelsVisible: u14,
      orderBy: p6,
      objectIdField: c9
    } = this.layer, d10 = {
      fields: s9.map((e9) => e9.toJSON()),
      renderer: i10?.clone(),
      featureReduction: e5(this.layer, t12),
      geometryType: n10,
      labelingInfo: a10,
      labelsVisible: u14,
      objectIdField: c9,
      orderBy: p6 ?? "default"
    };
    return a8(e8, t12, d10, o14);
  }
  get hasRequiredSupport() {
    return m2(this.layer.renderer);
  }
  get timeOptions() {
    return this.layer;
  }
  getUpdateHashProperties(e8) {
    const t12 = this.layer, {
      definitionExpression: o14,
      renderer: s9
    } = t12, i10 = this.layer.labelsVisible ? this.layer.labelingInfo : null, n10 = e5(t12, e8);
    return {
      orderBy: JSON.stringify(t12.orderBy),
      definitionExpression: o14,
      renderer: s9,
      labelingInfo: i10,
      featureReduction: n10
    };
  }
};

// ../../../node_modules/@arcgis/core/views/2d/layers/features/layerAdapters/KnowledgeGraphSublayerAdapter.js
var a9 = class {
  constructor(e8) {
    this.layer = e8, this.timeOptions = null;
  }
  getLabelingDeconflictionInfo(e8) {
    const r8 = this.layer, i10 = r5(r8, e8) ?? l7(r8);
    return [{
      vvEvaluators: {
        0: o7(r8.renderer)
      },
      deconflictionEnabled: i10
    }];
  }
  createServiceOptions(e8) {
    return __async(this, null, function* () {
      const t12 = this.layer, {
        capabilities: o14,
        objectIdField: s9
      } = t12, i10 = t12.fieldsIndex.toJSON(), l12 = e7(t12), n10 = t12.spatialReference.toJSON();
      return {
        type: "memory",
        source: yield t12.source.openPorts(),
        orderByFields: s9,
        outSpatialReference: e8.spatialReference.toJSON(),
        metadata: {
          fieldsIndex: i10,
          geometryType: l12,
          objectIdField: s9,
          spatialReference: n10,
          globalIdField: null,
          subtypeField: null,
          subtypes: null,
          timeInfo: null,
          timeReferenceUnknownClient: null,
          typeIdField: null,
          types: null
        },
        queryMetadata: {
          maxRecordCount: o14.query.maxRecordCount,
          supportsCompactGeometry: o14.query.supportsCompactGeometry,
          supportsDefaultSpatialReference: o14.query.supportsDefaultSpatialReference,
          supportsFormatPBF: o14.query.supportsFormatPBF,
          supportsMaxRecordCountFactor: o14.query.supportsMaxRecordCountFactor,
          supportsQuantization: o14.query.supportsQuantization,
          lastEditDate: null,
          snapshotInfo: null
        }
      };
    });
  }
  createSourceSchema(e8, r8) {
    const {
      definitionExpression: t12
    } = this.layer;
    return t9({
      definitionExpression: t12,
      customParameters: null
    }, e8, r8, null);
  }
  createProcessorSchema(r8, t12, o14) {
    const {
      fields: s9,
      renderer: i10,
      geometryType: n10,
      labelingInfo: a10,
      labelsVisible: u14,
      objectIdField: p6
    } = this.layer, c9 = {
      fields: s9.map((e8) => e8.toJSON()),
      renderer: i10?.clone(),
      featureReduction: e5(this.layer, t12),
      geometryType: n10,
      labelingInfo: a10,
      labelsVisible: u14,
      objectIdField: p6,
      orderBy: "default"
    };
    return a8(r8, t12, c9, o14);
  }
  get hasRequiredSupport() {
    return m2(this.layer.renderer);
  }
  getUpdateHashProperties(r8) {
    const t12 = this.layer, {
      definitionExpression: o14,
      renderer: s9
    } = t12;
    return {
      definitionExpression: o14,
      renderer: s9,
      labelingInfo: this.layer.labelsVisible ? this.layer.labelingInfo : null,
      featureReduction: e5(t12, r8)
    };
  }
};

// ../../../node_modules/@arcgis/core/views/2d/layers/features/layerAdapters/OGCFeatureLayerAdapter.js
var u12 = class {
  constructor(e8) {
    this.layer = e8;
  }
  getLabelingDeconflictionInfo(e8) {
    const r8 = this.layer, t12 = r5(r8, e8) ?? l7(r8);
    return [{
      vvEvaluators: {
        0: o7(r8.renderer)
      },
      deconflictionEnabled: t12
    }];
  }
  createServiceOptions(r8) {
    return __async(this, null, function* () {
      const o14 = this.layer, {
        capabilities: s9,
        objectIdField: a10
      } = o14, i10 = o14.fieldsIndex.toJSON(), l12 = e7(o14), n10 = o14.timeInfo?.toJSON(), u14 = o14.spatialReference.toJSON(), c9 = o14.source.getSource(), p6 = this.layer.objectIdField, d10 = a(s9);
      return d10.query.maxRecordCount = c9.maxRecordCount, {
        type: "ogc",
        source: c9,
        orderByFields: p6,
        outSpatialReference: r8.spatialReference.toJSON(),
        metadata: {
          fieldsIndex: i10,
          geometryType: l12,
          objectIdField: a10,
          timeInfo: n10,
          spatialReference: u14,
          globalIdField: null,
          subtypeField: null,
          subtypes: null,
          timeReferenceUnknownClient: null,
          typeIdField: null,
          types: null
        },
        queryMetadata: {
          maxRecordCount: d10.query.maxRecordCount,
          supportsCompactGeometry: d10.query.supportsCompactGeometry,
          supportsDefaultSpatialReference: d10.query.supportsDefaultSpatialReference,
          supportsFormatPBF: d10.query.supportsFormatPBF,
          supportsMaxRecordCountFactor: d10.query.supportsMaxRecordCountFactor,
          supportsQuantization: d10.query.supportsQuantization,
          lastEditDate: null,
          snapshotInfo: null
        }
      };
    });
  }
  createSourceSchema(e8, r8) {
    const {
      customParameters: t12,
      timeExtent: o14,
      apiKey: s9
    } = this.layer;
    return t9({
      customParameters: t12,
      timeExtent: o14
    }, e8, r8, s9);
  }
  createProcessorSchema(e8, t12, o14) {
    const {
      fields: s9,
      renderer: a10,
      geometryType: i10,
      labelingInfo: n10,
      labelsVisible: u14,
      orderBy: c9,
      objectIdField: p6
    } = this.layer, d10 = {
      fields: s9.map((e9) => e9.toJSON()),
      renderer: a10?.clone(),
      featureReduction: e5(this.layer, t12),
      geometryType: i10,
      labelingInfo: n10,
      labelsVisible: u14,
      objectIdField: p6,
      orderBy: c9 ?? "default"
    };
    return a8(e8, t12, d10, o14);
  }
  get hasRequiredSupport() {
    return m2(this.layer.renderer);
  }
  get timeOptions() {
    return this.layer;
  }
  getUpdateHashProperties(e8) {
    const t12 = this.layer, {
      renderer: o14,
      apiKey: s9
    } = t12, a10 = this.layer.labelsVisible ? this.layer.labelingInfo : null;
    return {
      apiKey: s9,
      customParameters: JSON.stringify(t12.customParameters),
      featureReduction: e5(t12, e8),
      labelingInfo: a10,
      orderBy: JSON.stringify(t12.orderBy),
      renderer: o14
    };
  }
};

// ../../../node_modules/@arcgis/core/views/2d/layers/features/layerAdapters/OrientedImageryLayerAdapter.js
var m7 = class {
  constructor(e8) {
    this.layer = e8;
  }
  getLabelingDeconflictionInfo(e8) {
    const r8 = this.layer, t12 = r5(r8, e8) ?? l7(r8);
    return [{
      vvEvaluators: {
        0: o7(r8.renderer)
      },
      deconflictionEnabled: t12
    }];
  }
  createServiceOptions(t12) {
    return __async(this, null, function* () {
      const s9 = this.layer, {
        capabilities: i10,
        objectIdField: l12,
        globalIdField: n10,
        orderBy: p6,
        refreshInterval: u14
      } = s9, d10 = s9.fieldsIndex.toJSON(), c9 = d10.fields, m9 = e7(s9), f7 = s9.timeInfo?.toJSON(), y5 = s9.spatialReference.toJSON(), h5 = a(this.layer.parsedUrl);
      let b4 = this.layer.objectIdField;
      if (p6?.length) {
        const e8 = !p6[0].valueExpression && p6[0].field;
        e8 && (b4 = e8);
      }
      const g2 = u14 > 0, S3 = has("featurelayer-snapshot-enabled") && "point" === s9.geometryType && i10?.query.supportsPagination && !i10?.operations.supportsEditing && !g2, F3 = S3 && t10(t12, s9.fullExtent);
      return {
        type: "feature-service",
        source: h5,
        isSourceHosted: g(h5.path),
        orderByFields: b4,
        outSpatialReference: t12.spatialReference.toJSON(),
        metadata: {
          globalIdField: n10,
          fields: c9,
          fieldsIndex: d10,
          geometryType: m9,
          objectIdField: l12,
          timeInfo: f7,
          spatialReference: y5,
          timeReferenceUnknownClient: false,
          subtypeField: null,
          subtypes: null,
          typeIdField: null,
          types: null
        },
        queryMetadata: {
          maxRecordCount: i10.query.maxRecordCount,
          supportsCompactGeometry: i10.query.supportsCompactGeometry,
          supportsDefaultSpatialReference: i10.query.supportsDefaultSpatialReference,
          supportsFormatPBF: i10.query.supportsFormatPBF,
          supportsMaxRecordCountFactor: i10.query.supportsMaxRecordCountFactor,
          supportsQuantization: i10.query.supportsQuantization,
          lastEditDate: null,
          snapshotInfo: {
            supportsSnapshotMinThreshold: S3,
            supportsSnapshotMaxThreshold: F3,
            snapshotCountThresholds: {
              min: has("featurelayer-snapshot-point-min-threshold"),
              max: has("featurelayer-snapshot-point-max-threshold")
            }
          }
        }
      };
    });
  }
  createSourceSchema(e8, r8) {
    const {
      definitionExpression: t12,
      customParameters: o14,
      timeExtent: s9
    } = this.layer;
    return t9({
      definitionExpression: t12,
      customParameters: o14,
      timeExtent: s9
    }, e8, r8, null);
  }
  createProcessorSchema(e8, r8, o14) {
    const {
      fields: s9,
      renderer: i10,
      geometryType: a10,
      labelingInfo: l12,
      labelsVisible: n10,
      orderBy: p6,
      objectIdField: u14
    } = this.layer, c9 = {
      fields: s9.map((e9) => e9.toJSON()),
      renderer: i10?.clone(),
      featureReduction: e5(this.layer, r8),
      geometryType: a10,
      labelingInfo: l12,
      labelsVisible: n10,
      objectIdField: u14,
      orderBy: p6 ?? "default"
    };
    return a8(e8, r8, c9, o14);
  }
  get hasRequiredSupport() {
    return m2(this.layer.renderer);
  }
  get timeOptions() {
    return this.layer;
  }
  hasFilters(e8) {
    return o11(this.layer, e8);
  }
  addFilters(e8, r8) {
    return r7(this.layer, e8, r8);
  }
  getUpdateHashProperties(e8) {
    const r8 = this.layer, {
      definitionExpression: o14,
      renderer: i10,
      outFields: a10
    } = r8, l12 = this.layer.labelsVisible ? this.layer.labelingInfo : null, n10 = JSON.stringify(r8.customParameters), p6 = e5(r8, e8);
    return {
      outFields: a10,
      orderBy: JSON.stringify(r8.orderBy),
      definitionExpression: o14,
      renderer: i10,
      labelingInfo: l12,
      featureReduction: p6,
      customParameters: n10,
      floors: o11(this.layer, e8) ? e8.floors : null
    };
  }
};

// ../../../node_modules/@arcgis/core/views/2d/layers/features/layerAdapters/StreamLayerAdapter.js
var l11 = class {
  constructor(e8) {
    this.layer = e8;
  }
  getLabelingDeconflictionInfo(e8) {
    const t12 = this.layer, o14 = r5(t12, e8) ?? l7(t12);
    return [{
      vvEvaluators: {
        0: o7(t12.renderer)
      },
      deconflictionEnabled: o14
    }];
  }
  createServiceOptions(e8) {
    return __async(this, null, function* () {
      const r8 = this.layer, {
        objectIdField: i10
      } = r8, n10 = e7(r8), o14 = r8.timeInfo?.toJSON() || null, s9 = r8.spatialReference ? r8.spatialReference.toJSON() : null;
      return {
        type: "stream",
        source: this.layer.parsedUrl,
        outSpatialReference: e8.spatialReference.toJSON(),
        metadata: {
          fieldsIndex: this.layer.fieldsIndex.toJSON(),
          geometryType: n10,
          objectIdField: i10,
          timeInfo: o14,
          timeReferenceUnknownClient: null,
          spatialReference: s9,
          subtypeField: null,
          subtypes: null,
          globalIdField: null,
          typeIdField: null,
          types: null
        }
      };
    });
  }
  createSourceSchema(e8, t12) {
    const {
      definitionExpression: r8,
      geometryDefinition: i10,
      customParameters: n10
    } = this.layer;
    return {
      type: "stream",
      mutable: {
        sourceRefreshVersion: t12,
        availableFields: e8.availableFields,
        dataFilter: {
          geometryDefinition: i10?.toJSON(),
          definitionExpression: r8,
          customParameters: n10 ?? null,
          maxReconnectionAttempts: this.layer.maxReconnectionAttempts,
          maxReconnectionInterval: this.layer.maxReconnectionInterval,
          purgeOptions: this.layer.purgeOptions.toJSON()
        }
      }
    };
  }
  createProcessorSchema(t12, r8, i10) {
    const {
      fields: n10,
      renderer: s9,
      geometryType: l12,
      labelingInfo: a10,
      labelsVisible: c9,
      objectIdField: d10
    } = this.layer, m9 = {
      fields: n10.map((e8) => e8.toJSON()),
      renderer: s9?.clone(),
      featureReduction: e5(this.layer, r8),
      geometryType: l12,
      labelingInfo: a10,
      labelsVisible: c9,
      objectIdField: d10,
      orderBy: "default"
    };
    return a8(t12, r8, m9, i10);
  }
  get hasRequiredSupport() {
    return m2(this.layer.renderer);
  }
  get timeOptions() {
    return this.layer;
  }
  getUpdateHashProperties(t12) {
    const r8 = this.layer, {
      definitionExpression: i10,
      renderer: n10
    } = r8, o14 = this.layer.labelsVisible ? this.layer.labelingInfo : null, s9 = JSON.stringify(r8.customParameters);
    return {
      definitionExpression: i10,
      renderer: n10,
      labelingInfo: o14,
      featureReduction: e5(r8, t12),
      customParameters: s9,
      geometryDefinition: r8.geometryDefinition,
      definitionExpressoin: r8.definitionExpression
    };
  }
};

// ../../../node_modules/@arcgis/core/views/2d/layers/features/schema/processor/SubtypeProcessorSchema.js
function i8(_0, _1) {
  return __async(this, arguments, function* (e8, {
    subtypeField: t12,
    sublayers: s9
  }) {
    const a10 = yield Promise.all(s9.map(({
      renderer: t13
    }) => r6(e8, t13)));
    return {
      type: "subtype",
      subtypeField: t12,
      renderers: s9.reduce((e9, {
        subtypeCode: r8
      }, t13) => __spreadProps(__spreadValues({}, e9), {
        [r8]: a10[t13]
      }), {})
    };
  });
}
function o12(e8, r8) {
  const s9 = t3();
  return {
    type: "subtype",
    filters: e8.filters,
    capabilities: {
      maxTextureSize: s9.maxTextureSize
    },
    subtypeField: r8.subtypeField,
    target: "feature",
    bindings: r8.sublayers.reduce((e9, {
      renderer: r9,
      subtypeCode: s10
    }) => {
      const a10 = c(r9);
      return __spreadProps(__spreadValues({}, e9), {
        [s10]: a10
      });
    }, {})
  };
}
function u13(_0, _1) {
  return __async(this, arguments, function* (r8, {
    subtypeField: t12,
    sublayers: a10
  }) {
    const i10 = yield Promise.all(a10.map((t13) => {
      const a11 = M(t13.renderer), i11 = __spreadProps(__spreadValues({}, t13), {
        geometryType: t13.geometryType ?? null
      });
      return l8(r8, i11, a11);
    }));
    return {
      type: "subtype",
      subtypeField: t12,
      renderers: a10.reduce((e8, {
        subtypeCode: r9
      }, t13) => __spreadProps(__spreadValues({}, e8), {
        [r9]: i10[t13]
      }), {})
    };
  });
}
function n8(e8, r8, t12, s9) {
  return __async(this, null, function* () {
    return {
      storage: o12(r8, t12),
      mesh: {
        properties: {
          timeZone: r8.timeZone,
          displayRefreshVersion: s9,
          returnMeshObjectId: false,
          sortKey: null
        },
        strategy: {
          type: "feature"
        },
        factory: {
          symbology: yield i8(e8, t12),
          labels: yield u13(e8, t12)
        }
      }
    };
  });
}

// ../../../node_modules/@arcgis/core/views/2d/layers/features/layerAdapters/SubtypeGroupLayerAdapter.js
var m8 = class {
  constructor(e8) {
    this.layer = e8;
  }
  getLabelingDeconflictionInfo(e8) {
    return [{
      vvEvaluators: {},
      deconflictionEnabled: this.layer.sublayers.every((e9) => l7(e9))
    }];
  }
  createServiceOptions(t12) {
    return __async(this, null, function* () {
      const r8 = this.layer, {
        capabilities: i10,
        datesInUnknownTimezone: a10,
        editingInfo: l12,
        globalIdField: p6,
        objectIdField: u14,
        refreshInterval: y5,
        subtypeField: m9
      } = r8, c9 = r8.fieldsIndex.toJSON(), d10 = e7(r8), h5 = r8.timeInfo?.toJSON(), f7 = r8.spatialReference.toJSON(), b4 = a(this.layer.parsedUrl), g2 = u14, S3 = !(null != l12?.lastEditDate) && y5 > 0, F3 = has("featurelayer-snapshot-enabled") && "point" === r8.geometryType && i10?.query.supportsPagination && !i10?.operations.supportsEditing && !S3, x3 = F3 && t10(t12, r8.fullExtent);
      return {
        type: "feature-service",
        source: b4,
        isSourceHosted: g(b4.path),
        orderByFields: g2,
        outSpatialReference: t12.spatialReference.toJSON(),
        metadata: {
          timeReferenceUnknownClient: a10,
          subtypeField: m9,
          globalIdField: p6,
          fieldsIndex: c9,
          geometryType: d10,
          objectIdField: u14,
          timeInfo: h5,
          spatialReference: f7,
          subtypes: this.layer.subtypes?.map((e8) => e8.toJSON()),
          typeIdField: null,
          types: null
        },
        queryMetadata: {
          maxRecordCount: i10.query.maxRecordCount,
          supportsCompactGeometry: i10.query.supportsCompactGeometry,
          supportsDefaultSpatialReference: i10.query.supportsDefaultSpatialReference,
          supportsFormatPBF: i10.query.supportsFormatPBF,
          supportsMaxRecordCountFactor: i10.query.supportsMaxRecordCountFactor,
          supportsQuantization: i10.query.supportsQuantization,
          lastEditDate: l12?.lastEditDate?.getTime(),
          snapshotInfo: {
            supportsSnapshotMinThreshold: F3,
            supportsSnapshotMaxThreshold: x3,
            snapshotCountThresholds: {
              min: has("featurelayer-snapshot-point-min-threshold"),
              max: has("featurelayer-snapshot-point-max-threshold")
            }
          }
        }
      };
    });
  }
  createSourceSchema(e8, t12) {
    const {
      definitionExpression: r8,
      customParameters: s9,
      gdbVersion: i10,
      historicMoment: o14,
      subtypeField: a10,
      timeExtent: l12,
      apiKey: n10
    } = this.layer, p6 = {
      queryScaleRanges: this.layer.sublayers.items.map((e9) => ({
        subtypeCode: e9.subtypeCode,
        minScale: e9.minScale,
        maxScale: e9.maxScale
      })),
      definitionExpression: r8,
      customParameters: s9,
      gdbVersion: i10,
      historicMoment: o14,
      subtypeField: a10,
      timeExtent: l12
    };
    return t9(p6, e8, t12, n10);
  }
  createProcessorSchema(e8, t12, r8) {
    const s9 = {
      subtypeField: this.layer.subtypeField,
      sublayers: Array.from(this.layer.sublayers, (e9) => ({
        featureReduction: null,
        geometryType: this.layer.geometryType,
        labelingInfo: e9.labelingInfo,
        labelsVisible: e9.labelsVisible,
        renderer: e9.renderer,
        subtypeCode: e9.subtypeCode,
        orderBy: null
      }))
    };
    return n8(e8, t12, s9, r8);
  }
  hasFilters(e8) {
    return o11(this.layer, e8) || c8(this.layer, e8);
  }
  addFilters(e8, t12) {
    e8 = r7(this.layer, e8, t12);
    const s9 = this.layer.sublayers.filter((e9) => !d9(e9, t12)).map((e9) => e9.subtypeCode);
    if (!s9.length) return e8;
    e8 ??= new d6();
    const o14 = `NOT ${this.layer.subtypeField} IN (${s9.join(",")})`;
    return e8.where = n2(e8.where, o14), e8;
  }
  get hasRequiredSupport() {
    return true;
  }
  get timeOptions() {
    return this.layer;
  }
  getUpdateHashProperties(e8) {
    const t12 = this.layer, {
      definitionExpression: r8,
      gdbVersion: s9,
      apiKey: i10
    } = t12, o14 = t12.historicMoment?.getTime() ?? void 0, l12 = JSON.stringify(t12.customParameters), n10 = o11(this.layer, e8) ? e8.floors : null, p6 = this.layer.sublayers.map(({
      renderer: e9,
      labelsVisible: t13,
      labelingInfo: r9,
      visible: s10
    }) => ({
      renderer: e9,
      labelsVisible: t13,
      labelingInfo: r9,
      visible: s10
    }));
    return {
      outFields: this.layer.outFields,
      gdbVersion: s9,
      definitionExpression: r8,
      historicMoment: o14,
      customParameters: l12,
      apiKey: i10,
      sublayers: p6,
      floors: n10
    };
  }
  setGraphicOrigin(e8) {
    const t12 = this.layer.fieldsIndex.get(this.layer.subtypeField), r8 = e8.attributes[t12.name], s9 = this.layer.sublayers.find((e9) => e9.subtypeCode === r8);
    e8.layer = e8.sourceLayer = s9;
  }
};
function c8(e8, t12) {
  return e8.sublayers.some((e9) => !d9(e9, t12));
}
function d9(e8, r8) {
  return e8.visible && (0 === e8.minScale || F(r8.scale, e8.minScale) || r8.scale < e8.minScale) && (0 === e8.maxScale || F(r8.scale, e8.maxScale) || r8.scale > e8.maxScale);
}

// ../../../node_modules/@arcgis/core/views/2d/layers/support/handleNoEngineError.js
function n9(n10, r8) {
  return __async(this, null, function* () {
    try {
      return yield n10;
    } catch (t12) {
      if ("no-queryEngine" !== t12.name) throw t12;
      return r8;
    }
  });
}

// ../../../node_modules/@arcgis/core/views/2d/tiling/FeatureTileSubscriptionManager.js
function s8(e8, s9) {
  const t12 = /* @__PURE__ */ new Set();
  for (const i10 of e8 instanceof Set ? e8.values() : e8.keys()) s9.has(i10) || t12.add(i10);
  return t12;
}
var t11 = class {
  constructor(e8, s9, t12) {
    const i10 = t12 ? e8.getTileCoverage(t12, 0, true, "closest") : null, o14 = e8.getTileCoverage(s9, 0, true, "closest");
    if (this._tileKeys = /* @__PURE__ */ new Map(), i10) for (const n10 of i10.keys()) this._tileKeys.set(n10.id, n10);
    if (o14) for (const n10 of o14.keys()) this._tileKeys.set(n10.id, n10);
  }
  get coverageSet() {
    return new Set(this._tileKeys.keys());
  }
  keys() {
    return this._tileKeys.values();
  }
};
var i9 = class {
  constructor(e8) {
    this.version = e8;
  }
};
var o13 = class {
  constructor(e8) {
    this._subscriptions = /* @__PURE__ */ new Map(), this._visible = /* @__PURE__ */ new Set(), this._paused = /* @__PURE__ */ new Set(), this._version = 0, this._config = e8;
  }
  destroy() {
  }
  get _coverageSet() {
    return this._coverage?.coverageSet ?? /* @__PURE__ */ new Set();
  }
  suspend() {
    this._suspendedOverage = this._coverage, this._coverage = null, this._updateSubscriptions();
  }
  resume() {
    null == this._coverage && (this._coverage = this._suspendedOverage, this._suspendedOverage = null, this._updateSubscriptions());
  }
  update(e8, s9) {
    return this._version = (this._version + 1) % Number.MAX_SAFE_INTEGER, this._updateCoverage(e8, s9), this._updateSubscriptions(), new Set(this._visible);
  }
  _updateCoverage(e8, s9) {
    this._coverage = new t11(this._config.tileInfoView, e8, s9);
  }
  _updateSubscriptions() {
    const e8 = this._coverageSet, t12 = this._updateVisibility(), o14 = s8(t12, e8), n10 = s8(this._subscriptions, t12), r8 = s8(e8, this._subscriptions), a10 = s8(n10, e8), c9 = s8(o14, a10), u14 = s8(c9, this._paused);
    this._visible = t12;
    for (const s9 of r8.values()) this._subscriptions.set(s9, new i9(this._version));
    for (const s9 of u14.values()) this._paused.add(s9);
    for (const s9 of a10.values()) this._subscriptions.delete(s9), this._paused.delete(s9);
    (r8.size || a10.size || u14.size) && this._sendUpdateSubscriptions(r8, a10, u14);
  }
  _sendUpdateSubscriptions(e8, s9, t12) {
    const i10 = Array.from(e8.values()).map((e9) => ({
      tileId: e9,
      version: this._subscriptions.get(e9).version
    }));
    this._config.updateSubscriptions({
      subscribe: i10,
      unsubscribe: Array.from(s9.values()),
      pause: Array.from(t12.values())
    });
  }
  _updateVisibility() {
    const s9 = /* @__PURE__ */ new Set(), t12 = /* @__PURE__ */ new Set();
    if (!this._coverage) return s9;
    for (const e8 of this._coverage.keys()) {
      if (this._config.isDone(e8)) {
        s9.add(e8.id);
        continue;
      }
      if (this._addVisibleParent(s9, t12, e8)) continue;
      this._addVisibleChildren(s9, e8) || s9.add(e8.id);
    }
    const i10 = new e4(0, 0, 0, 0), o14 = new e4(0, 0, 0, 0);
    for (const e8 of t12) {
      i10.id = e8;
      for (const e9 of s9) o14.id = e9, i10.containsChild(o14) && s9.delete(e9);
    }
    return s9;
  }
  _addVisibleParent(s9, t12, i10) {
    let o14 = false;
    for (const n10 of this._visible.values()) {
      new e4(n10).containsChild(i10) && (s9.add(n10), t12.add(n10), o14 = true);
    }
    return o14;
  }
  _addVisibleChildren(s9, t12) {
    let i10 = false;
    for (const o14 of this._visible.values()) {
      const n10 = new e4(o14);
      t12.containsChild(n10) && (s9.add(o14), i10 = true);
    }
    return i10;
  }
};

// ../../../node_modules/@arcgis/core/views/2d/layers/FeatureLayerView2D.js
function X(e8, t12) {
  const r8 = /* @__PURE__ */ new Set();
  return e8 && e8.forEach((e9) => r8.add(e9)), t12 && t12.forEach((e9) => r8.add(e9)), r8.has("*") ? ["*"] : Array.from(r8);
}
var Y = 4294967294;
var ee2 = class extends _(i5(f4(y3))) {
  constructor() {
    super(...arguments), this._commandsQueue = new t6({
      process: (e8) => {
        switch (e8.type) {
          case "edit-by-feature":
          case "edit-by-id":
            return this._doEdit(e8);
          case "update":
            return this._doUpdate();
          case "highlight":
            return this._updateHighlights();
        }
      }
    }), this._visibilityOverrides = /* @__PURE__ */ new Set(), this._highlightCounter = new e6(), this._lastAvailableFields = [], this._lastTargetState = null, this.eventLog = new l5(), this._sourceRefreshVersion = 1, this._displayRefreshVersion = 1, this._pipelineUpdating = false, this._fields = null, this.featureEffectView = new r3();
  }
  destroy() {
    this._workerProxy?.destroy(), this._workerAttached.reject(u3()), this._commandsQueue.destroy();
  }
  initialize() {
    this._workerAttached = L(), d(this._workerAttached.promise), this.addResolvingPromise(this._initProxy()), this.featureEffectView.featureEffect = this.featureEffect, this.featureEffectView.endTransitions();
  }
  _initProxy() {
    return __async(this, null, function* () {
      const e8 = this.layer;
      if ("isTable" in e8 && e8.isTable) throw new s("featurelayerview:table-not-supported", "table feature layer can't be displayed", {
        layer: e8
      });
      if ("mesh" === e8.geometryType) throw new s("featurelayerview:geometry-type-not-supported", `Geometry type of ${e8.geometryType} is not supported`, {
        layer: e8
      });
      if (("feature" === e8.type || "subtype-group" === e8.type) && false === O2(e8)?.operations.supportsQuery) throw new s("featurelayerview:query-not-supported", "layer view requires a layer with query capability", {
        layer: e8
      });
      this._workerProxy && this._workerProxy.destroy();
      const t12 = this._createClientOptions();
      this._workerProxy = yield t7(t12);
    });
  }
  _attachProxy() {
    return __async(this, null, function* () {
      const e8 = {
        service: yield this.layerAdapter.createServiceOptions(this.view),
        tileInfoJSON: this.view.featuresTilingScheme.tileInfo.toJSON()
      };
      let t12 = [];
      Array.isArray(e8.service.source) && (t12 = e8.service.source);
      try {
        yield this._workerProxy.pipeline.onAttach(e8, {
          transferList: t12
        }), this._workerAttached.resolve();
      } catch (r8) {
        this._workerAttached.reject(u3()), f(r8);
      }
    });
  }
  _detachProxy() {
    return __async(this, null, function* () {
      return this._workerProxy.pipeline.onDetach();
    });
  }
  getWorker() {
    return __async(this, null, function* () {
      return yield this._workerAttached.promise, this._workerProxy;
    });
  }
  get hasAllFeatures() {
    return this.layer.visible && this.eventLog.hasAllFeatures;
  }
  get hasAllFeaturesInView() {
    return this.layer.visible && this.eventLog.hasAllFeaturesInView;
  }
  get hasFullGeometries() {
    return this.layer.visible && this.eventLog.hasFullGeometries;
  }
  get labelingCollisionInfos() {
    const e8 = this.layerAdapter.getLabelingDeconflictionInfo(this.view), t12 = this.layer.geometryType, r8 = !this.suspended;
    return e8.map(({
      vvEvaluators: e9,
      deconflictionEnabled: i10
    }) => ({
      container: this.featureContainer,
      vvEvaluators: e9,
      deconflictionEnabled: i10,
      geometryType: t12,
      visible: r8
    }));
  }
  get layerAdapter() {
    switch (this.layer.type) {
      case "feature":
        return "memory" === this.layer.source.type ? new p5(this.layer) : new c7(this.layer);
      case "geojson":
      case "csv":
      case "wfs":
        return new p5(this.layer);
      case "subtype-group":
        return new m8(this.layer);
      case "ogc-feature":
        return new u12(this.layer);
      case "stream":
        return new l11(this.layer);
      case "oriented-imagery":
        return new m7(this.layer);
      case "knowledge-graph-sublayer":
        return new a9(this.layer);
      case "catalog-footprint":
        return new l10(this.layer);
      default:
        n3(this.layer);
    }
    return null;
  }
  get timeExtent() {
    return i6(this.layerAdapter.timeOptions, this.view?.timeExtent, this._get("timeExtent"));
  }
  getDisplayStatistics(e8, t12) {
    return this.featureContainer?.getDisplayStatistics(e8, t12);
  }
  queryHeatmapStatistics(e8) {
    return __async(this, null, function* () {
      return (yield this.getWorker()).pipeline.queryHeatmapStatistics(e8);
    });
  }
  highlight(e8, t12 = "highlight") {
    let a10;
    e8 instanceof d4 ? a10 = [e8.getObjectId()] : "number" == typeof e8 || "string" == typeof e8 ? a10 = [e8] : V.isCollection(e8) && e8.length > 0 ? a10 = e8.map((e9) => e9?.getObjectId()).toArray() : Array.isArray(e8) && e8.length > 0 && (a10 = "number" == typeof e8[0] || "string" == typeof e8[0] ? e8 : e8.map((e9) => e9?.getObjectId()));
    const o14 = a10?.filter(O);
    return o14?.length ? (this._addHighlights(o14, t12), e(() => this._removeHighlights(o14, t12))) : e();
  }
  getHighlightIds() {
    return Array.from(this._highlightCounter.ids());
  }
  hasHighlight() {
    return !this._highlightCounter.empty;
  }
  hitTest(e8, i10) {
    return __async(this, null, function* () {
      const s9 = yield this.featureContainer.hitTest(i10);
      if (0 === s9.length) return null;
      const a10 = yield this.getWorker(), {
        features: o14,
        aggregates: n10
      } = yield a10.pipeline.getDisplayFeatures(s9), u14 = this.featureContainer.getSortKeys(s9), l12 = ({
        displayId: e9
      }, {
        displayId: t12
      }) => u14.has(e9) && u14.has(t12) ? u14.get(e9) - u14.get(t12) : e9 - t12;
      return o14.sort(l12).reverse(), n10.sort(l12).reverse(), [...n10.map((r8) => this._createGraphicHit(e8, s5.fromJSON(r8))), ...o14.map((t12) => this._createGraphicHit(e8, d4.fromJSON(t12)))];
    });
  }
  queryStatistics() {
    return __async(this, null, function* () {
      const e8 = yield this.getWorker();
      return n9(e8.pipeline.queryStatistics(), {
        featureCount: 0,
        ringCount: 0,
        vertexCount: 0
      });
    });
  }
  querySummaryStatistics(e8, t12, r8) {
    return __async(this, null, function* () {
      const i10 = yield this.getWorker(), s9 = __spreadProps(__spreadValues({}, t12), {
        scale: this.view.scale
      }), a10 = i10.features.executeQueryForSummaryStatistics(this._cleanUpQuery(e8), s9, r8);
      return n9(a10, {});
    });
  }
  queryAggregateSummaryStatistics(e8, t12, r8) {
    return __async(this, null, function* () {
      const i10 = __spreadProps(__spreadValues({}, t12), {
        scale: this.view.scale
      }), s9 = (yield this.getWorker()).aggregates.executeQueryForSummaryStatistics(this._cleanUpAggregateQuery(e8), i10, r8);
      return n9(s9, {});
    });
  }
  queryUniqueValues(e8, t12, r8) {
    return __async(this, null, function* () {
      const i10 = yield this.getWorker(), s9 = __spreadProps(__spreadValues({}, t12), {
        scale: this.view.scale
      }), a10 = i10.features.executeQueryForUniqueValues(this._cleanUpQuery(e8), s9, r8);
      return n9(a10, {
        uniqueValueInfos: []
      });
    });
  }
  queryAggregateUniqueValues(e8, t12, r8) {
    return __async(this, null, function* () {
      const i10 = yield this.getWorker(), s9 = __spreadProps(__spreadValues({}, t12), {
        scale: this.view.scale
      }), a10 = i10.aggregates.executeQueryForUniqueValues(this._cleanUpAggregateQuery(e8), s9, r8);
      return n9(a10, {
        uniqueValueInfos: []
      });
    });
  }
  queryClassBreaks(e8, t12, r8) {
    return __async(this, null, function* () {
      const i10 = yield this.getWorker(), s9 = __spreadProps(__spreadValues({}, t12), {
        scale: this.view.scale
      }), a10 = i10.features.executeQueryForClassBreaks(this._cleanUpQuery(e8), s9, r8);
      return n9(a10, {
        classBreakInfos: []
      });
    });
  }
  queryAggregateClassBreaks(e8, t12, r8) {
    return __async(this, null, function* () {
      const i10 = yield this.getWorker(), s9 = __spreadProps(__spreadValues({}, t12), {
        scale: this.view.scale
      }), a10 = i10.aggregates.executeQueryForClassBreaks(this._cleanUpAggregateQuery(e8), s9, r8);
      return n9(a10, {
        classBreakInfos: []
      });
    });
  }
  queryHistogram(e8, t12, r8) {
    return __async(this, null, function* () {
      const i10 = yield this.getWorker(), s9 = __spreadProps(__spreadValues({}, t12), {
        scale: this.view.scale
      }), a10 = i10.features.executeQueryForHistogram(this._cleanUpQuery(e8), s9, r8);
      return n9(a10, {
        bins: [],
        maxValue: null,
        minValue: null,
        normalizationTotal: null
      });
    });
  }
  queryAggregateHistogram(e8, t12, r8) {
    return __async(this, null, function* () {
      const i10 = yield this.getWorker(), s9 = __spreadProps(__spreadValues({}, t12), {
        scale: this.view.scale
      }), a10 = i10.aggregates.executeQueryForHistogram(this._cleanUpAggregateQuery(e8), s9, r8);
      return n9(a10, {
        bins: [],
        maxValue: null,
        minValue: null,
        normalizationTotal: null
      });
    });
  }
  queryFeatures(e8, t12) {
    return this.queryFeaturesJSON(e8, t12).then((e9) => {
      const t13 = d5.fromJSON(e9);
      return t13.features.forEach((e10) => this._setLayersForFeature(e10)), t13;
    });
  }
  queryVisibleFeatures(e8, t12) {
    return __async(this, null, function* () {
      const r8 = (yield this.getWorker()).pipeline.queryVisibleFeatures(this._cleanUpQuery(e8), t12), i10 = yield n9(r8, {
        features: []
      }), s9 = d5.fromJSON(i10);
      return s9.features.forEach((e9) => this._setLayersForFeature(e9)), s9;
    });
  }
  queryAggregates(e8, t12) {
    return __async(this, null, function* () {
      const r8 = (yield this.getWorker()).aggregates.executeQuery(this._cleanUpAggregateQuery(e8), t12), i10 = yield n9(r8, {
        features: []
      }), s9 = m3.fromJSON(i10);
      return s9.features.forEach((e9) => this._setLayersForFeature(e9)), s9;
    });
  }
  queryAggregateIds(e8, t12) {
    return __async(this, null, function* () {
      const r8 = (yield this.getWorker()).aggregates.executeQueryForIds(this._cleanUpAggregateQuery(e8), t12);
      return n9(r8, []);
    });
  }
  queryAggregateCount(e8, t12) {
    return __async(this, null, function* () {
      const r8 = (yield this.getWorker()).aggregates.executeQueryForCount(this._cleanUpAggregateQuery(e8), t12);
      return n9(r8, 0);
    });
  }
  queryAggregateJSON(e8, t12) {
    return __async(this, null, function* () {
      const r8 = (yield this.getWorker()).aggregates.executeQuery(this._cleanUpAggregateQuery(e8), t12);
      return n9(r8, {
        features: []
      });
    });
  }
  queryFeaturesJSON(e8, t12) {
    return __async(this, null, function* () {
      const r8 = (yield this.getWorker()).features.executeQuery(this._cleanUpQuery(e8), t12);
      return n9(r8, {
        features: []
      });
    });
  }
  queryObjectIds(e8, t12) {
    return __async(this, null, function* () {
      const r8 = (yield this.getWorker()).features.executeQueryForIds(this._cleanUpQuery(e8), t12);
      return n9(r8, []);
    });
  }
  queryFeatureCount(e8, t12) {
    return __async(this, null, function* () {
      const r8 = (yield this.getWorker()).features.executeQueryForCount(this._cleanUpQuery(e8), t12);
      return n9(r8, 0);
    });
  }
  queryExtent(e8, t12) {
    return __async(this, null, function* () {
      const r8 = (yield this.getWorker()).features.executeQueryForExtent(this._cleanUpQuery(e8), t12), i10 = yield n9(r8, {
        count: 0,
        extent: null
      });
      return {
        count: i10.count,
        extent: w.fromJSON(i10.extent)
      };
    });
  }
  getSampleFeatures(e8) {
    return __async(this, null, function* () {
      return (yield this.getWorker()).pipeline.getSampleFeatures(e8);
    });
  }
  setVisibility(e8, t12) {
    t12 ? this._visibilityOverrides.delete(e8) : this._visibilityOverrides.add(e8), this._update();
  }
  update(e8) {
    if (!this._subscriptionManager) return;
    this.view.animation && !this._lastTargetState && (this._lastTargetState = e8.state.clone()), !this.view.animation && this._lastTargetState && (this._lastTargetState = null);
    const t12 = this._subscriptionManager.update(e8.targetState, this._lastTargetState);
    this.featureContainer.setVisibleTiles(t12);
  }
  attach() {
    has("esri-2d-update-debug") && console.debug("FeatureLayerView2D.attach"), d(this._updatingHandles.addPromise(this._workerAttached.promise)), d(this._attachProxy()), this.featureContainer = new u6(this), this.container.addChild(this.featureContainer), this.view.timeline.record(`${this.layer.title} (FeatureLayer) Attach`), this._subscriptionManager = new o13({
      tileInfoView: this.view.featuresTilingScheme,
      updateSubscriptions: (e8) => {
        this.featureContainer.updateSubscriptions(e8), d(this._updatingHandles.addPromise(this.getWorker().then((t12) => t12.pipeline.updateSubscriptions(e8))));
      },
      isDone: (e8) => this.featureContainer.isDone(e8)
    }), this.requestUpdate(), this.addAttachHandles([d2(() => JSON.stringify(__spreadValues({
      displayRefreshVersion: this._displayRefreshVersion,
      timeExtent: this.timeExtent,
      clips: this.clips,
      filter: this.filter,
      featureEffect: this.featureEffect,
      sourceRefreshVersion: this._sourceRefreshVersion,
      timeZone: this.view.timeZone,
      effect: this.featureEffect
    }, this.layerAdapter.getUpdateHashProperties(this.view))), () => this._update(), P), d2(() => this.updateSuspended, (e8) => {
      e8 || (this._subscriptionManager.resume(), this.view.labelManager.requestUpdate());
    })]), "stream" !== this.layer.type && "catalog-footprint" !== this.layer.type && this.addAttachHandles(this.layer.on("edits", (e8) => this._edit(e8)));
  }
  detach() {
    has("esri-2d-update-debug") && console.debug("FeatureLayerView2D.detach"), this._detachProxy(), this._fields = null, this.featureContainer.destroy(), this.featureContainer = null, this._commandsQueue.clear(), this.container.removeAllChildren(), this._subscriptionManager = u2(this._subscriptionManager), this._workerProxy.pipeline.onDetach(), this._workerAttached = L(), d(this._workerAttached.promise), this._lastAvailableFields = [], this._lastSchema = null;
  }
  viewChange() {
    this.requestUpdate();
  }
  moveEnd() {
    this.requestUpdate();
  }
  isUpdating() {
    const e8 = "renderer" in this.layer && null != this.layer.renderer, t12 = this._commandsQueue.updateTracking.updating, r8 = null != this._updatingRequiredFieldsPromise, i10 = this.featureContainer.updatingHandles.updating, s9 = this.updateRequested || e8 && (t12 || r8) || i10 || this._pipelineUpdating || this.dataUpdating;
    if (has("esri-2d-log-updating")) {
      console.log(`Updating FLV2D (${this.layer.id}): ${s9}
  -> updateRequested ${this.updateRequested}
  -> hasRenderer ${e8}
  -> updatingRequiredFields ${r8}
  -> hasPendingCommand ${t12}
  -> dataUpdating ${this.dataUpdating}
  -> processing ${this._pipelineUpdating}
  -> updatingContainer ${i10}
`);
      for (const e9 of this.featureContainer.subscriptions()) console.log(`    -> Tile[${e9.id}] Done: ${e9.done}`);
    }
    return s9;
  }
  _createClientOptions() {
    const e8 = this;
    return {
      get container() {
        return e8.featureContainer;
      },
      setUpdating: (e9) => {
        this._set("_pipelineUpdating", e9.pipeline), this._set("dataUpdating", e9.data);
      },
      emitEvent: (e9) => {
        this.emit(e9.name, e9.event);
      },
      get eventLog() {
        return e8.eventLog;
      },
      fetch: (t12) => Promise.all(t12.map((t13) => e8.view.stage.painter.textureManager.rasterizeItem(t13))),
      fetchDictionary: (e9) => Promise.all(e9.map((e10) => this._fetchDictionaryRequest(e10)))
    };
  }
  _fetchDictionaryRequest(e8) {
    return __async(this, null, function* () {
      try {
        if ("subtype-group" === this.layer.type) throw new Error("InternalError: SubtypeGroupLayer does not support dictionary renderer");
        const t12 = this.layer.renderer;
        if (!t12 || "dictionary" !== t12.type) throw new Error("InternalError: Expected layer to have a DictionaryRenderer");
        const r8 = this._lastSchema.processor.mesh.factory.symbology;
        if ("dictionary" !== r8.type) throw new Error("InternalError: Expected schema to be of type 'dictionary'");
        const i10 = {
          cimAnalyzer: this.view.stage.cimAnalyzer,
          cimResourceManager: this.view.stage.painter.textureManager.resourceManager,
          store: this.featureContainer.instanceStore,
          scaleExpression: r8.scaleExpression
        };
        this._fields || (this._fields = this.layer.fields.map((e9) => e9.toJSON()));
        const s9 = r8.visualVariableUniforms, a10 = yield t12.getSymbolAsync(e8.feature, {
          fields: this._fields
        });
        if (!a10 || !a10.data) return {
          type: "dictionary-response",
          meshes: []
        };
        return {
          type: "dictionary-response",
          meshes: yield n4(a10.data, {
            uniforms: s9,
            path: "renderer",
            schemaOptions: i10
          })
        };
      } catch (t12) {
        return {
          type: "dictionary-response",
          meshes: []
        };
      }
    });
  }
  _cleanUpQuery(e8) {
    const t12 = b2.from(e8) || this.createQuery();
    return t12.outSpatialReference || (t12.outSpatialReference = this.view.spatialReference), t12.toJSON();
  }
  _cleanUpAggregateQuery(e8) {
    const t12 = b2.from(e8) || this.createAggregateQuery();
    t12.outSpatialReference || (t12.outSpatialReference = this.view.spatialReference);
    const r8 = t12.objectIds ?? [];
    for (const i10 of t12.aggregateIds ?? []) r8.push(i10);
    return t12.objectIds = r8, t12.aggregateIds = [], t12.toJSON();
  }
  _update() {
    return __async(this, null, function* () {
      return this._commandsQueue.push({
        type: "update"
      });
    });
  }
  _edit(e8) {
    return __async(this, null, function* () {
      if (this.updateSuspended) return void this._subscriptionManager.suspend();
      const t12 = this._getEffectiveEdit(e8);
      return t12 ? this._commandsQueue.push(t12).catch(f) : void 0;
    });
  }
  doRefresh(e8) {
    return __async(this, null, function* () {
      this.attached && (this.updateSuspended && e8 || (e8 ? this.incrementSourceRefreshVersion() : this.incrementDisplayRefreshVersion()));
    });
  }
  incrementSourceRefreshVersion() {
    this._sourceRefreshVersion = (this._sourceRefreshVersion + 1) % Y + 1;
  }
  incrementDisplayRefreshVersion() {
    this._displayRefreshVersion = (this._displayRefreshVersion + 1) % Y + 1;
  }
  _getEffectiveEdit(e8) {
    const t12 = "globalIdField" in this.layer && this.layer.globalIdField, r8 = e8.deletedFeatures.some((e9) => -1 === e9.objectId || !e9.objectId), i10 = t12 && this.availableFields.includes(t12);
    if (r8 && !i10) return n.getLogger(this).error(new s("mapview-apply-edits", `Editing the specified service requires the layer's globalIdField, ${t12} to be included the layer's outFields for updates to be reflected on the map`)), null;
    const s9 = this.layer, a10 = e8.historicMoment?.getTime() ?? null, n10 = "layerId" in s9 && e8.editedFeatures?.find((e9) => e9.layerId === s9.layerId);
    if (n10 && this._canEditByFeature(n10)) {
      const e9 = false, r9 = false, i11 = s4(this.layer.geometryType), {
        adds: s10,
        deletes: o14,
        updates: u14
      } = n10.editedFeatures, l12 = this.layer.objectIdField, h5 = s10.map((t13) => tt(t13, i11, e9, r9)), c9 = u14.map((t13) => tt(t13.current, i11, e9, r9));
      return {
        type: "edit-by-feature",
        added: h5,
        removed: o14.map((e10) => "attributes" in e10 ? {
          globalId: t12 ? e10.attributes[t12] : null,
          objectId: l12 ? e10.attributes[l12] : null
        } : e10),
        updated: c9,
        historicMoment: a10
      };
    }
    return {
      type: "edit-by-id",
      added: e8.addedFeatures,
      updated: e8.updatedFeatures,
      removed: e8.deletedFeatures,
      historicMoment: a10
    };
  }
  _canEditByFeature(e8) {
    const {
      adds: t12,
      updates: r8
    } = e8.editedFeatures;
    return t12.every((e9) => this.view.spatialReference.equals(e9.geometry?.spatialReference)) && r8.every((e9) => this.view.spatialReference.equals(e9.current.geometry?.spatialReference));
  }
  _doUpdate() {
    return __async(this, null, function* () {
      "featureReduction" in this.layer && this.layer.featureReduction && this.layer.featureReduction !== this._lastFeatureReduction && (this.layer.featureReduction = this.layer.featureReduction?.clone(), this._lastFeatureReduction = this.layer.featureReduction);
      try {
        if (yield this._updateRequiredFields(), this.destroyed || !this.layerAdapter?.hasRequiredSupport || !this._subscriptionManager) return;
        const e8 = this.featureContainer.instanceStore;
        this.featureContainer.attributeView.lockTextureUploads(), e8.updateStart();
        const t12 = this.featureEffect, r8 = {
          store: e8,
          cimAnalyzer: this.view.stage.cimAnalyzer,
          cimResourceManager: this.view.stage.painter.textureManager.resourceManager,
          scaleExpression: void 0
        }, i10 = this._createViewSchemaConfig(), s9 = {
          source: this.layerAdapter.createSourceSchema(i10, this._sourceRefreshVersion),
          processor: yield this.layerAdapter.createProcessorSchema(r8, i10, this._displayRefreshVersion)
        }, a10 = u(this._lastSchema?.source.mutable, s9.source.mutable) || u(this._lastSchema?.processor, s9.processor);
        if (!a10) return this.featureContainer.requestRender(), this.featureContainer.attributeView.unlockTextureUploads(), e8.updateEnd(), void (this.featureEffectView.featureEffect = t12);
        this._lastSchema = s9, this._fields = null;
        const o14 = Math.round(performance.now());
        has("esri-2d-update-debug") && console.debug(`Id[${this.layer.uid}] Version[${o14}] FeatureLayerView2D._doUpdate`, {
          changes: a10
        });
        const n10 = yield this.getWorker();
        yield n10.pipeline.updateSchema(s9, o14), e8.updateEnd(), this.featureEffectView.featureEffect = t12, this.featureEffectView.endTransitions(), this.featureContainer.attributeView.unlockTextureUploads(), this.featureContainer.swapRenderState(), this.featureContainer.requestRender(), has("esri-2d-update-debug") && console.debug(`Version[${o14}] FeatureLayerView2D.updateEnd`), this.requestUpdate();
      } catch (e8) {
        has("esri-2d-update-debug") && console.error("Encountered an error during update", e8);
      }
    });
  }
  _doEdit(e8) {
    return __async(this, null, function* () {
      const t12 = yield this.getWorker();
      try {
        this.featureContainer.editStart(), yield t12.pipeline.onEdits(e8), this.featureContainer.editEnd();
      } catch (r8) {
        b(r8), 0;
      }
    });
  }
  get hasFilter() {
    const e8 = this.layerAdapter.hasFilters?.(this.view) ?? false;
    return null != this.filter || null != this.timeExtent || this._visibilityOverrides.size > 0 || e8;
  }
  _getEffectiveAvailableFields(e8) {
    const t12 = X(this._lastAvailableFields, e8);
    return this._lastAvailableFields = t12, T(this.layer.fieldsIndex, t12);
  }
  _createViewSchemaConfig() {
    const e8 = [te(this.view, this.layerAdapter, this.timeExtent, this._visibilityOverrides, this.filter), this.featureEffect?.filter?.toJSON() ?? null];
    return {
      availableFields: this._getEffectiveAvailableFields(this.availableFields),
      filters: e8,
      scale: this.view.scale,
      timeZone: this.view.timeZone
    };
  }
  _addHighlights(e8, t12) {
    this._highlightCounter.addReason(e8, t12), this._commandsQueue.push({
      type: "highlight"
    });
  }
  _removeHighlights(e8, t12) {
    this._highlightCounter.deleteReason(e8, t12), this._commandsQueue.push({
      type: "highlight"
    });
  }
  _updateHighlights() {
    return __async(this, null, function* () {
      const e8 = [];
      for (const i10 of this._highlightCounter.ids()) {
        const t13 = this._highlightCounter.getHighlightReason(i10), r9 = t(t13);
        e8.push({
          objectId: i10,
          highlightFlags: r9
        });
      }
      const t12 = yield this.getWorker();
      if (this.destroyed) return;
      const r8 = t12.pipeline.updateHighlight({
        highlights: e8
      }).catch((e9) => {
        b(e9) || n.getLogger(this).error(e9);
      });
      this._updatingHandles.addPromise(r8);
    });
  }
  _setLayersForFeature(e8) {
    e8.layer = e8.sourceLayer = this.layer, this.layerAdapter.setGraphicOrigin && this.layerAdapter.setGraphicOrigin(e8);
  }
  _createGraphicHit(e8, t12) {
    return this._setLayersForFeature(t12), null != t12.geometry && (t12.geometry.spatialReference = this.view.spatialReference), {
      type: "graphic",
      graphic: t12,
      layer: this.layer,
      mapPoint: e8
    };
  }
};
function te(e8, t12, r8, i10, s9) {
  s9 && (s9 = s9.clone());
  const a10 = null != s9 ? s9.timeExtent : null, o14 = null != r8 && null != a10 ? r8.intersection(a10) : r8 || a10;
  o14 && (s9 ??= new d6(), s9.timeExtent = o14), s9 = t12.addFilters?.(s9, e8) ?? s9;
  let n10 = s9?.toJSON() ?? null;
  return i10.size && (n10 ??= new d6().toJSON(), n10.hiddenIds = Array.from(i10)), n10;
}
e2([y()], ee2.prototype, "_commandsQueue", void 0), e2([y()], ee2.prototype, "_sourceRefreshVersion", void 0), e2([y()], ee2.prototype, "_displayRefreshVersion", void 0), e2([y({
  readOnly: true
})], ee2.prototype, "_pipelineUpdating", void 0), e2([y({
  readOnly: true
})], ee2.prototype, "hasAllFeatures", null), e2([y({
  readOnly: true
})], ee2.prototype, "hasAllFeaturesInView", null), e2([y({
  readOnly: true
})], ee2.prototype, "hasFullGeometries", null), e2([y()], ee2.prototype, "featureEffectView", void 0), e2([y()], ee2.prototype, "labelingCollisionInfos", null), e2([y()], ee2.prototype, "layerAdapter", null), e2([y({
  readOnly: true
})], ee2.prototype, "timeExtent", null), e2([y()], ee2.prototype, "updating", void 0), ee2 = e2([a2("esri.views.2d.layers.FeatureLayerView2D")], ee2);
var re2 = ee2;

export {
  n9 as n,
  re2 as re
};
//# sourceMappingURL=chunk-BPQJ7QAO.js.map
