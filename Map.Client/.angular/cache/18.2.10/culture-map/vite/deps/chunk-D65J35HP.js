import {
  b as b3,
  h3 as h,
  p as p3,
  t2 as t,
  t3 as t2,
  t4 as t3,
  u as u4,
  x as x2,
  y as y4,
  z
} from "./chunk-IAGWCSWA.js";
import {
  b as b2
} from "./chunk-GQOLRPFL.js";
import {
  a as a4
} from "./chunk-S5SROJXI.js";
import {
  M,
  b,
  l as l3,
  n as n2,
  p as p2,
  s as s5
} from "./chunk-SFPOKBWH.js";
import {
  i
} from "./chunk-GP32WQRT.js";
import {
  d2 as d3
} from "./chunk-4JFSB6JC.js";
import {
  $,
  W as W2,
  Z as Z2,
  ee,
  l2,
  u as u3
} from "./chunk-EU7HJNZD.js";
import {
  N as N2,
  S as S2,
  T,
  W,
  a as a3
} from "./chunk-R4DKV4UN.js";
import {
  j,
  x
} from "./chunk-LPEFONL3.js";
import {
  at,
  ht,
  ot
} from "./chunk-C7NRYPDG.js";
import {
  L
} from "./chunk-Z3GMSC63.js";
import {
  e as e2
} from "./chunk-YZNT6QWD.js";
import {
  y as y3
} from "./chunk-6WG22V46.js";
import {
  Z
} from "./chunk-Q7SRMLJZ.js";
import {
  N,
  O as O2,
  y as y2
} from "./chunk-T2S5VXNP.js";
import {
  s as s4
} from "./chunk-HT2T6PUB.js";
import {
  f,
  m as m2,
  p,
  s as s3
} from "./chunk-S3IO7V4Q.js";
import {
  u as u2
} from "./chunk-7ZJ6P7J7.js";
import {
  a as a2,
  l,
  o
} from "./chunk-T6GCUITX.js";
import {
  m
} from "./chunk-TUIGM7TV.js";
import {
  E,
  u
} from "./chunk-IHVSZYZS.js";
import {
  s2
} from "./chunk-JJS7PR2U.js";
import {
  d as d2
} from "./chunk-6WHTZNUH.js";
import {
  e
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
  d,
  s
} from "./chunk-HJY2YILU.js";
import {
  n
} from "./chunk-2MMLMOWS.js";
import {
  O,
  has
} from "./chunk-DXLOWWK7.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/createGraphicSymbolMeshSchemas.js
function l4(l5, o2, p4) {
  return __async(this, null, function* () {
    const m3 = [], u5 = {
      scaleInfo: t(l5),
      scaleExpression: null
    };
    for (const e3 of o2) switch (e3.type) {
      case "marker":
        m3.push(...u4(p4.instances.marker, e3, x2, u5));
        break;
      case "fill":
        null == e3.spriteRasterizationParam ? m3.push(...p3(p4.instances.fill, e3, u5)) : m3.push(...b3(p4.instances.complexFill, e3, false, u5));
        break;
      case "line":
        e3.spriteRasterizationParam ? m3.push(...z(p4.instances.texturedLine, e3, false, u5)) : m3.push(...h(p4.instances.line, e3, false, u5));
        break;
      case "text":
        m3.push(...y4(p4.instances.text, e3, x2, u5));
    }
    return m3;
  });
}

// ../../../node_modules/@arcgis/core/views/2d/layers/features/support/GraphicsReader.js
var c = class _c extends M {
  static from(t5, e3, r) {
    return new _c(t5, e3, r);
  }
  constructor(t5, e3, r) {
    super(r), this._items = t5, this._tile = e3, this._index = -1, this._cachedGeometry = null;
    const s6 = e3.lod;
    s6.wrap && (this._wrappingInfo = {
      worldSizeX: s6.worldSize[0]
    });
  }
  get _current() {
    return this._items[this._index];
  }
  getItem() {
    return this._current;
  }
  getZOrder() {
    return this._current.zOrder;
  }
  getMeshWriters() {
    return this._current.symbolResource?.symbolInfo.meshWriters ?? [];
  }
  hasField(t5) {
    return null != this._current.attributes[t5];
  }
  field(t5) {
    return this.readAttribute(t5);
  }
  get geometryType() {
    const t5 = p(this._current.geometry);
    return "esriGeometryPoint" === t5 ? "esriGeometryMultipoint" : t5;
  }
  getCursor() {
    return this.copy();
  }
  copy() {
    const t5 = new _c(this._items, this._tile, this.metadata);
    return this.copyInto(t5), t5;
  }
  copyInto(t5) {
    super.copyInto(t5), t5._cachedGeometry = this._cachedGeometry, t5._index = this._index;
  }
  get fields() {
    throw new Error("Fields reading not supported to graphics.");
  }
  get hasFeatures() {
    return !!this._items.length;
  }
  get hasNext() {
    return this._index + 1 < this._items.length;
  }
  get exceededTransferLimit() {
    throw new Error("InternalError: exceededTransferLimit not implemented for graphics.");
  }
  get hasZ() {
    return false;
  }
  get hasM() {
    return false;
  }
  getInTransform() {
    return this._tile.transform;
  }
  getSize() {
    return this._items.length;
  }
  getAttributeHash() {
    let t5 = "";
    for (const e3 in this._current.attributes) t5 += this._current.attributes[e3];
    return t5;
  }
  getObjectId() {
    return this._items[this._index].objectId;
  }
  getDisplayId() {
    return this._current.displayId;
  }
  setDisplayId(t5) {
    throw new Error("InternalError: Setting displayId not supported for graphics.");
  }
  setIndex(t5) {
    this._index = t5;
  }
  getIndex() {
    return this._index;
  }
  next() {
    for (this._cachedGeometry = null; ++this._index < this._items.length && !this._getExists(); ) ;
    return this._index < this._items.length;
  }
  readGeometryArea() {
    throw new Error("InternalError: readGeometryArea not supported for graphics.");
  }
  _readGeometry() {
    if (!this._cachedGeometry) {
      let t5 = ot(this._current.projectedGeometry, this.hasZ, this.hasM);
      if ("esriGeometryPolyline" === this.geometryType && (t5 = ht(new e2(), t5, this.hasZ, this.hasM, this.geometryType, this._tile.transform.scale[0])), this._cachedGeometry = at(new e2(), t5, this.hasZ, this.hasM, this.geometryType, this._tile.transform), !this._cachedGeometry) return null;
      this._wrapGeometry(this._cachedGeometry);
    }
    return this._cachedGeometry;
  }
  _wrapGeometry(t5) {
    if (!this._wrappingInfo) return;
    const {
      worldSizeX: e3
    } = this._wrappingInfo;
    if (t5.isPoint) return 1 === e3 ? (t5.coords.push(a3, 0), t5.coords.push(2 * -a3, 0), void t5.lengths.push(3)) : 2 === e3 ? (t5.coords.push(2 * a3, 0), t5.coords.push(4 * -a3, 0), void t5.lengths.push(3)) : void this._wrapVertex(t5.coords, 0, 2, e3);
    if ("esriGeometryMultipoint" !== this.geometryType) ;
    else {
      if (1 === e3) {
        const e4 = t5.coords.slice();
        e4[0] -= 512;
        const r = t5.coords.slice();
        r[0] += 512, t5.coords.push(...e4, ...r);
        const s6 = t5.lengths[0];
        return void t5.lengths.push(s6, s6);
      }
      this._wrapVertex(t5.coords, 0, 2, e3);
    }
  }
  _wrapVertex(t5, e3, r, s6) {
    const i2 = e3 * r, o2 = t5[i2];
    o2 < -a3 * (s6 - 2) ? t5[i2] = o2 + a3 * s6 : o2 > a3 * (s6 - 1) && (t5[i2] = o2 - a3 * s6);
  }
  _readX() {
    const t5 = this._readGeometry();
    return null != t5 ? t5.coords[0] : 0;
  }
  _readY() {
    const t5 = this._readGeometry();
    return null != t5 ? t5.coords[1] : 0;
  }
  _readServerCentroid() {
    switch (this.geometryType) {
      case "esriGeometryPolygon": {
        const t5 = l(this._current.projectedGeometry), r = new e2([], t5);
        return at(new e2(), r, this.hasZ, this.hasM, this.geometryType, this._tile.transform);
      }
      case "esriGeometryPolyline": {
        const e3 = this._current.projectedGeometry, r = o(e3.paths, this.hasZ), s6 = new e2([], r);
        return at(new e2(), s6, this.hasZ, this.hasM, this.geometryType, this._tile.transform);
      }
    }
    return null;
  }
  _readAttribute(t5, e3) {
    const r = this._current.attributes[t5];
    if (void 0 !== r) return r;
    const s6 = t5.toLowerCase();
    for (const i2 in this._current.attributes) if (i2.toLowerCase() === s6) return this._current.attributes[i2];
  }
  _readAttributes() {
    return this._current.attributes;
  }
};

// ../../../node_modules/@arcgis/core/views/2d/layers/graphics/GraphicStoreItem.js
var n3 = class _n {
  static fromGraphic(t5, e3, s6, i2) {
    return new _n(t5.geometry, e3, __spreadValues({}, t5.attributes), t5.visible, t5.uid, s6, i2);
  }
  constructor(e3, s6, i2, r, o2, m3, n4) {
    this.geometry = e3, this.symbol = s6, this.attributes = i2, this.visible = r, this.objectId = o2, this.zOrder = m3, this.displayId = n4, this.bounds = u(), this.prevBounds = u(), this.size = [0, 0, 0, 0];
  }
  get linearCIM() {
    return this.symbolResource?.symbolInfo.linearCIM;
  }
  update(e3, s6, i2) {
    return (this.geometry !== e3.geometry || JSON.stringify(this.attributes) !== JSON.stringify(e3.attributes) || this.symbol !== s6 || this.zOrder !== i2 || this.visible !== e3.visible) && (this.prevBounds = this.bounds, this.bounds = u(), this.zOrder = i2, this.geometry = e3.geometry, this.attributes = __spreadValues({}, e3.attributes), this.symbol = s6, this.visible = e3.visible, this.symbolResource = null, this.projectedGeometry = null, true);
  }
  projectAndNormalize(t5) {
    return __async(this, null, function* () {
      let n4 = this.geometry;
      if (!n4 || !n4.spatialReference || "mesh" === n4.type) return;
      "extent" === n4.type && (n4 = l2(n4)), yield x(n4.spatialReference, t5);
      const p4 = a4(n4);
      if (!p4) return;
      const h2 = j(p4, n4.spatialReference, t5);
      h2 && m(h2), this.projectedGeometry = m2(h2) ? l2(h2) : h2;
    });
  }
};

// ../../../node_modules/@arcgis/core/views/2d/layers/graphics/GraphicUpdateMessage.js
var t4 = class {
  constructor(t5, e3, d4) {
    this.added = t5, this.updated = e3, this.removed = d4;
  }
  hasAnyUpdate() {
    return !!(this.added.length || this.updated.length || this.removed.length);
  }
};

// ../../../node_modules/@arcgis/core/views/2d/layers/graphics/GraphicStore.js
var f2 = 1e-5;
function _(e3, t5) {
  return t5.zOrder - e3.zOrder;
}
var b4 = class {
  constructor(e3, t5, s6, o2, i2) {
    this._items = /* @__PURE__ */ new Map(), this._boundsDirty = false, this._outSpatialReference = e3, this._cimResourceManager = t5, this._hittestDrawHelper = new $(t5), this._tileInfoView = s6, this._store = i2;
    const r = s6.getClosestInfoForScale(o2);
    this._resolution = this._tileInfoView.getTileResolution(r.level);
  }
  items() {
    return this._items.values();
  }
  getItem(e3) {
    return this._items.get(e3);
  }
  update(e3, t5, s6) {
    return __async(this, null, function* () {
      const o2 = [], i2 = [], r = [], n4 = /* @__PURE__ */ new Set(), m3 = [];
      let a5 = 0;
      for (const l5 of e3.items) {
        a5++;
        const e4 = l5.uid, r2 = this._items.get(e4), c2 = t5(l5);
        if (n4.add(e4), r2) {
          r2.update(l5, c2, a5) && (i2.push(r2), m3.push(this._updateItem(r2, s6)));
          continue;
        }
        const h2 = this._store.createDisplayIdForObjectId(e4), d4 = n3.fromGraphic(l5, c2, a5, h2);
        m3.push(this._updateItem(d4, s6)), this._items.set(d4.objectId, d4), o2.push(d4);
      }
      for (const [l5, c2] of this._items.entries()) n4.has(l5) || (this._store.releaseDisplayIdForObjectId(l5), this._items.delete(l5), r.push(c2));
      return yield Promise.all(m3), this._index = null, new t4(o2, i2, r);
    });
  }
  updateLevel(e3) {
    this._resolution !== e3 && (this._index = null, this._boundsDirty = true, this._resolution = e3);
  }
  hitTest(e3, t5, i2, n4, m3) {
    const a5 = has("esri-mobile"), u5 = a5 ? S2 : T, p4 = u5 + (a5 ? 0 : W);
    e3 = L(e3, this._tileInfoView.spatialReference);
    const f3 = n4 * window.devicePixelRatio * p4, b5 = u();
    b5[0] = e3 - f3, b5[1] = t5 - f3, b5[2] = e3 + f3, b5[3] = t5 + f3;
    const y5 = n4 * window.devicePixelRatio * u5, I = u();
    I[0] = e3 - y5, I[1] = t5 - y5, I[2] = e3 + y5, I[3] = t5 + y5;
    const g = 0.5 * n4 * (p4 + u3), j2 = this._searchIndex(e3 - g, t5 - g, e3 + g, t5 + g);
    if (!j2 || 0 === j2.length) return [];
    const x3 = [], w = u(), S3 = u();
    for (const s6 of j2) {
      if (!s6.visible) continue;
      const {
        projectedGeometry: e4,
        symbolResource: t6
      } = s6;
      this._getSymbolBounds(w, t6, e4, S3, m3), S3[3] = S3[2] = S3[1] = S3[0] = 0, E(w, b5) && x3.push(s6);
    }
    if (0 === x3.length) return [];
    const R = this._hittestDrawHelper, z2 = [];
    for (const s6 of x3) {
      const {
        projectedGeometry: e4,
        symbolResource: t6
      } = s6;
      if (!t6) continue;
      const {
        textInfo: o2,
        symbolInfo: i3
      } = t6, r = i3.cimSymbol;
      R.hitTest(I, r.symbol, e4, o2, m3, n4) && z2.push(s6);
    }
    return z2.sort(_), z2.map((e4) => e4.objectId);
  }
  queryItems(e3) {
    return 0 === this._items.size ? [] : this._searchForItems(e3);
  }
  clear() {
    this._items.clear(), this._index = null;
  }
  _updateItem(e3, t5) {
    return __async(this, null, function* () {
      yield e3.projectAndNormalize(this._outSpatialReference), yield t5(e3);
      const {
        size: s6
      } = e3;
      s6[0] = s6[1] = s6[2] = s6[3] = 0, this._getSymbolBounds(e3.bounds, e3.symbolResource, e3.projectedGeometry, e3.size, 0);
    });
  }
  _searchIndex(e3, s6, o2, i2) {
    return this._boundsDirty && (this._items.forEach((e4) => this._getSymbolBounds(e4.bounds, e4.symbolResource, e4.projectedGeometry, e4.size, 0)), this._boundsDirty = false), this._index || (this._index = i(9, (e4) => ({
      minX: e4.bounds[0],
      minY: e4.bounds[1],
      maxX: e4.bounds[2],
      maxY: e4.bounds[3]
    })), this._index.load(Array.from(this._items.values()))), this._index.search({
      minX: e3,
      minY: s6,
      maxX: o2,
      maxY: i2
    });
  }
  _searchForItems(e3) {
    const t5 = this._tileInfoView.spatialReference, o2 = e3.bounds, i2 = s2(t5);
    if (i2 && t5.isWrappable) {
      const [t6, r] = i2.valid, n4 = Math.abs(o2[2] - r) < f2, m3 = Math.abs(o2[0] - t6) < f2;
      if ((!n4 || !m3) && (n4 || m3)) {
        const i3 = e3.resolution;
        let m4;
        m4 = u(n4 ? [t6, o2[1], t6 + i3 * u3, o2[3]] : [r - i3 * u3, o2[1], r, o2[3]]);
        const a5 = this._searchIndex(o2[0], o2[1], o2[2], o2[3]), l5 = this._searchIndex(m4[0], m4[1], m4[2], m4[3]);
        return [.../* @__PURE__ */ new Set([...a5, ...l5])];
      }
    }
    return this._searchIndex(o2[0], o2[1], o2[2], o2[3]);
  }
  _getSymbolBounds(t5, o2, r, n4, m3) {
    if (!o2 || !o2.symbolInfo.linearCIM || !r) return null;
    if (t5 || (t5 = u()), a2(t5, r), !n4 || 0 === n4[0] && 0 === n4[1] && 0 === n4[2] && 0 === n4[3]) {
      const {
        textInfo: t6,
        symbolInfo: s6
      } = o2, i2 = s6.cimSymbol;
      n4 || (n4 = [0, 0, 0, 0]);
      const r2 = Z2.getSymbolInflateSize(n4, i2.symbol, this._cimResourceManager, m3, t6);
      n4[0] = u2(r2[0]), n4[1] = u2(r2[1]), n4[2] = u2(r2[2]), n4[3] = u2(r2[3]);
    }
    const l5 = this._resolution, c2 = Z2.safeSize(n4);
    return t5[0] -= c2 * l5, t5[1] -= c2 * l5, t5[2] += c2 * l5, t5[3] += c2 * l5, t5;
  }
};

// ../../../node_modules/@arcgis/core/views/2d/layers/graphics/GraphicsView2D.js
var O3 = class _O {
  static getOrCreate(e3, t5, r) {
    let s6 = t5.get(e3.id);
    return s6 || (s6 = new _O(e3, r), t5.set(e3.id, s6)), s6;
  }
  static fromItems(e3, t5, r) {
    const s6 = new _O(e3, r);
    return s6.addedOrModified.push(...t5), s6;
  }
  constructor(e3, t5) {
    this.tile = e3, this.metadata = t5, this.addedOrModified = [], this.removed = [];
  }
  get reader() {
    return this._reader || (this._reader = c.from(this.addedOrModified, this.tile, this.metadata)), this._reader;
  }
};
var F = class extends s4(S) {
  constructor(e3) {
    super(e3), this._attached = false, this._tiles = /* @__PURE__ */ new Map(), this._controller = new AbortController(), this._hashToSymbolInfo = /* @__PURE__ */ new Map(), this._lastCleanup = performance.now(), this._cleanupRequired = true, this.lastUpdateId = -1, this.renderer = null, this._updateTracking = new d3({
      debugName: "GraphicsView2D"
    }), this.updateRequested = false, this.defaultPointSymbolEnabled = true, this._commandQueue = new t3({
      process: (e4) => {
        if ("update" === e4.type) return this._update();
        throw new Error("InternalError: Unsupported command");
      }
    }), this.graphicUpdateHandler = this.graphicUpdateHandler.bind(this);
  }
  destroy() {
    this.container.destroy(), this.view = null, this.renderer = null, this._set("graphics", null), this._controller.abort(), this._graphicStore.clear(), this._attributeStore = null, this._hashToSymbolInfo.clear(), this._updateTracking.destroy(), this._commandQueue.destroy();
  }
  _initAttributeStore() {
    this._storage = new p2({
      spatialReference: this.view.spatialReference,
      fields: new Z()
    }), this._attributeStore = new b({
      isLocal: true,
      update: (e4) => {
        has("esri-2d-update-debug") && console.debug(`[Id: ${this.layerId}] GraphicsView2D.AttributeStoreView.updateStart`, {
          message: e4
        }), this.container.attributeView.requestUpdate(e4), this.container.requestRender(), has("esri-2d-update-debug") && console.debug(`[Id: ${this.layerId}] GraphicsView2D.AttributeStoreView.updateEnd`, {
          message: e4
        });
      }
    });
    const e3 = t2(null, []);
    this._attributeStore.update(e3, this._storage, null), this.container.checkHighlight = () => this._attributeStore.hasHighlight;
  }
  initialize() {
    this._initAttributeStore(), this._metadata = l3.create(this.view.spatialReference), this._resourceProxy = new s5({
      fetch: (e4) => Promise.all(e4.map((e5) => this.view.stage.textureManager.rasterizeItem(e5))),
      fetchDictionary: (e4) => {
        throw new Error("InternalError: Graphics do not support Dictionary requests");
      }
    }), this.addHandles([d2(() => this._effectiveRenderer, () => this._pushUpdate()), this.view.graphicsTileStore.on("update", this._onTileUpdate.bind(this)), this.container.on("attach", () => {
      this.addHandles([this.graphics.on("change", () => this._pushUpdate())]), this._graphicStore = new b4(this.view.spatialReference, this._cimResourceManager, this.view.featuresTilingScheme, this.view.state.scale, this._attributeStore), this._attached = true, this.requestUpdate(), this._pushUpdate();
    })]), this._updateTracking.addUpdateTracking("CommandQueue", this._commandQueue.updateTracking);
    const e3 = this.view.graphicsTileStore.tiles;
    this._onTileUpdate({
      added: e3,
      removed: []
    });
  }
  get _effectiveRenderer() {
    return "function" == typeof this.renderer ? this.renderer() : this.renderer;
  }
  get _cimResourceManager() {
    return this.view.stage.textureManager.resourceManager;
  }
  get updating() {
    const e3 = !this._attached || this._updateTracking.updating;
    return has("esri-2d-log-updating") && console.log(`Updating GraphicsView2D: ${e3}
  -> attaching ${!this._attached}
  -> updateTracking ${this._updateTracking.updating}`), e3;
  }
  hitTest(e3) {
    if (!this.view || this.view.suspended) return [];
    const {
      resolution: t5,
      rotation: s6
    } = this.view.state, i2 = this._graphicStore.hitTest(e3.x, e3.y, 2, t5, s6), o2 = new Set(i2), a5 = this.graphics.items.reduce((e4, t6) => (o2.has(t6.uid) && e4.set(t6.uid, t6), e4), /* @__PURE__ */ new Map());
    return i2.map((e4) => a5.get(e4)).filter(O);
  }
  requestUpdate() {
    this.updateRequested || (this.updateRequested = true, this.requestUpdateCallback()), this.notifyChange("updating");
  }
  processUpdate(e3) {
    this.updateRequested && (this.updateRequested = false, this.update(e3));
  }
  viewChange() {
    this.requestUpdate();
  }
  setHighlight(e3) {
    const t5 = [];
    for (const {
      objectId: r,
      highlightFlags: s6
    } of e3) {
      const e4 = this._graphicStore.getItem(r)?.displayId;
      t5.push({
        objectId: r,
        highlightFlags: s6,
        displayId: e4
      });
    }
    this._attributeStore.setHighlight(t5, e3), this._pushUpdate();
  }
  graphicUpdateHandler(e3) {
    this._pushUpdate();
  }
  update(e3) {
    this.updateRequested = false, this._attached && this._graphicStore.updateLevel(e3.state.resolution);
  }
  pushUpdate() {
    this._pushUpdate();
  }
  _pushUpdate() {
    d(this._commandQueue.push({
      type: "update"
    }));
  }
  _update() {
    return __async(this, null, function* () {
      try {
        has("esri-2d-update-debug") && console.debug(`[Id: ${this.layerId}] GraphicsView._update start`);
        const e3 = yield this._graphicStore.update(this.graphics, (e4) => this._getSymbolForGraphic(e4), (e4) => this._ensureSymbolResource(e4));
        if (!e3.hasAnyUpdate()) return void this._attributeStore.sendUpdates();
        e3.removed.length && (this._cleanupRequired = true), has("esri-2d-update-debug") && console.debug(`[Id: ${this.layerId}] GraphicsView updateMessage`, e3);
        const t5 = this._createTileMessages(e3);
        yield this._fetchResources(t5), this._write(t5);
        for (const r of e3.added) this._setFilterState(r);
        for (const r of e3.updated) this._setFilterState(r);
        has("esri-2d-update-debug") && console.debug(`[Id: ${this.layerId}] GraphicsView sendUpdate`, e3), this._attributeStore.sendUpdates(), has("esri-2d-update-debug") && console.debug(`[Id: ${this.layerId}] GraphicsView sendUpdate.await`, e3);
      } catch (e3) {
      }
      this._cleanupSharedResources();
    });
  }
  _createTileMessages(e3) {
    const t5 = /* @__PURE__ */ new Map();
    for (const r of e3.added) {
      const e4 = this.view.graphicsTileStore.getIntersectingTiles(r.bounds);
      for (const s6 of e4) {
        O3.getOrCreate(s6, t5, this._metadata).addedOrModified.push(r);
      }
    }
    for (const r of e3.updated) {
      const e4 = this.view.graphicsTileStore.getIntersectingTiles(r.prevBounds), s6 = this.view.graphicsTileStore.getIntersectingTiles(r.bounds);
      for (const i2 of e4) {
        O3.getOrCreate(i2, t5, this._metadata).removed.push(r.displayId);
      }
      for (const i2 of s6) {
        O3.getOrCreate(i2, t5, this._metadata).addedOrModified.push(r);
      }
    }
    for (const r of e3.removed) {
      const e4 = this.view.graphicsTileStore.getIntersectingTiles(r.bounds);
      for (const s6 of e4) {
        O3.getOrCreate(s6, t5, this._metadata).removed.push(r.displayId);
      }
    }
    return Array.from(t5.values());
  }
  _fetchResources(e3) {
    return __async(this, null, function* () {
      for (const {
        tile: t5,
        reader: r
      } of e3) {
        has("esri-2d-update-debug") && console.debug(`Id[${this.layerId}] Tile[${t5.id}] GraphicsView fetchResources`, e3);
        const s6 = r.getCursor();
        for (; s6.next(); ) for (const e4 of s6.getMeshWriters()) e4.enqueueRequest(this._resourceProxy, s6, t5.createArcadeEvaluationOptions(this.view.timeZone));
      }
      yield this._resourceProxy.fetchEnqueuedResources();
    });
  }
  _write(e3) {
    for (const t5 of e3) {
      has("esri-2d-update-debug") && console.debug(`Id[${this.layerId}] Tile[${t5.tile.id}] GraphicsView write`, t5);
      const e4 = this._writeMeshes(t5);
      let r = this._tiles.get(t5.tile.key);
      r || (r = this._createFeatureTile(t5.tile.key)), has("esri-2d-update-debug") && console.debug(`Id[${this.layerId}] Tile[${t5.tile.id}] GraphicsView onTileData`, t5), this.container.onTileData(r, {
        type: "update",
        modify: e4,
        remove: t5.removed,
        end: false,
        attributeEpoch: this._attributeStore.epoch
      }), this.container.requestRender();
    }
  }
  _writeMeshes(e3) {
    const t5 = new n2(e3.tile.id), r = e3.reader.getCursor();
    for (; r.next(); ) {
      t5.entityStart(r.getDisplayId(), r.getZOrder());
      for (const s6 of r.getMeshWriters()) s6.write(t5, this._resourceProxy, r, e3.tile.createArcadeEvaluationOptions(this.view.timeZone), e3.tile.level);
      t5.entityEnd();
    }
    return __spreadProps(__spreadValues({}, t5.serialize().message), {
      tileId: e3.tile.id
    });
  }
  _setFilterState(e3) {
    const t5 = e3.displayId, r = this._attributeStore.getHighlightFlags(e3.objectId);
    this._attributeStore.setData(t5, 0, 0, r | (e3.visible ? N2 : 0));
  }
  _getSymbolForGraphic(e3) {
    return null != e3.symbol ? e3.symbol : null != this._effectiveRenderer ? this._effectiveRenderer.getSymbol(e3) : this._getNullSymbol(e3);
  }
  _ensureSymbolResource(e3) {
    return __async(this, null, function* () {
      if (!e3.symbol) return;
      const t5 = yield this._getSymbolInfo(e3.symbol);
      if (!t5) return;
      const r = t5.linearCIM.filter((e4) => "text" === e4.type);
      if (r.length > 0) {
        const s6 = yield this._getTextResources(e3, r);
        e3.symbolResource = {
          symbolInfo: t5,
          textInfo: s6
        };
      } else e3.symbolResource = {
        symbolInfo: t5
      };
    });
  }
  _getSymbolInfo(e3) {
    const t5 = e3.hash();
    return this._hashToSymbolInfo.has(t5) || this._hashToSymbolInfo.set(t5, this._createSymbolInfo(t5, e3).catch((e4) => null)), this._hashToSymbolInfo.get(t5);
  }
  _createSymbolInfo(e3, t5) {
    return __async(this, null, function* () {
      const r = yield this._convertToCIMSymbol(t5), s6 = yield this._createLinearCIM(r);
      return {
        hash: e3,
        cimSymbol: r,
        linearCIM: s6,
        meshWriters: yield this._createMeshWriters(r, s6)
      };
    });
  }
  _convertToCIMSymbol(e3) {
    return __async(this, null, function* () {
      const t5 = W2(e3);
      if ("web-style" === t5.type) {
        return (yield t5.fetchCIMSymbol()).data;
      }
      return t5;
    });
  }
  _createLinearCIM(e3) {
    return __async(this, null, function* () {
      return yield Promise.all(ee.fetchResources(e3.symbol, this._cimResourceManager, [])), this.view.stage.cimAnalyzer.analyzeSymbolReference(e3, false);
    });
  }
  _createMeshWriters(e3, t5) {
    return __async(this, null, function* () {
      s(this._controller.signal);
      const r = this.container.instanceStore, s6 = this.view.stage.meshWriterRegistry, i2 = yield l4(e3, t5, r);
      return Promise.all(i2.map((e4) => s6.createMeshWriter(this._storage, this._resourceProxy, {
        tileInfo: this.view.featuresTilingScheme.tileInfo
      }, e4)));
    });
  }
  _onTileUpdate(e3) {
    if (e3.added && e3.added.length > 0) for (const t5 of e3.added) this._updateTracking.addPromise(this._addTile(t5));
    if (e3.removed && e3.removed.length > 0) for (const t5 of e3.removed) this._removeTile(t5.key);
  }
  _createFeatureTile(e3) {
    const t5 = this.view.featuresTilingScheme.getTileBounds(u(), e3), r = this.view.featuresTilingScheme.getTileResolution(e3.level), s6 = new b2(e3, r, t5[0], t5[3]);
    return this._tiles.set(e3, s6), this.container.addChild(s6), s6;
  }
  _addTile(e3) {
    return __async(this, null, function* () {
      if (!this._attached) return;
      const t5 = this._graphicStore.queryItems(e3);
      if (!t5.length) return;
      const r = this._createFeatureTile(e3.key), s6 = O3.fromItems(e3, t5, this._metadata);
      yield this._fetchResources([s6]);
      const i2 = this._writeMeshes(s6);
      r.onMessage({
        type: "append",
        append: i2,
        clear: false,
        end: true,
        attributeEpoch: this._attributeStore.epoch
      });
    });
  }
  _removeTile(e3) {
    if (!this._tiles.has(e3)) return;
    const t5 = this._tiles.get(e3);
    this.container.removeChild(t5), t5.destroy(), this._tiles.delete(e3);
  }
  _getNullSymbol(e3) {
    const t5 = e3.geometry;
    return s3(t5) ? O2 : f(t5) || m2(t5) ? y2 : this.defaultPointSymbolEnabled ? N : null;
  }
  _getTextResources(e3, t5) {
    return __async(this, null, function* () {
      const r = new Array(), s6 = new Array();
      for (let i2 = 0; i2 < t5.length; i2++) {
        const o3 = t5[i2], {
          resource: a6,
          overrides: n5
        } = o3.textRasterizationParam;
        if (n5?.length > 0) {
          const t6 = y3.resolveSymbolOverrides({
            type: "CIMSymbolReference",
            primitiveOverrides: n5,
            symbol: {
              type: "CIMPointSymbol",
              symbolLayers: [{
                type: "CIMVectorMarker",
                enable: true,
                size: a6.symbol.height,
                anchorPointUnits: "Relative",
                frame: {
                  xmin: -5,
                  ymin: -5,
                  xmax: 5,
                  ymax: 5
                },
                markerGraphics: [{
                  type: "CIMMarkerGraphic",
                  geometry: {
                    x: 0,
                    y: 0
                  },
                  symbol: a6.symbol,
                  textString: a6.textString
                }],
                scaleSymbolsProportionally: true,
                respectFrame: true
              }]
            }
          }, e3, this.view.spatialReference, null, p(e3.projectedGeometry), null, null);
          t6.then((e4) => {
            const t7 = e4.symbolLayers[0], {
              textString: r2
            } = t7.markerGraphics[0];
            s6.push({
              type: "cim-rasterization-info",
              resource: {
                type: "text",
                textString: r2 || "",
                font: a6.font
              }
            }), o3.text = a6.textString = r2 || "";
          }), r.push(t6);
        } else s6.push({
          type: "cim-rasterization-info",
          resource: a6
        });
      }
      r.length > 0 && (yield Promise.all(r));
      const o2 = s6.map((e4) => this.view.stage.textureManager.rasterizeItem(e4)), a5 = yield Promise.all(o2);
      n(a5);
      const n4 = /* @__PURE__ */ new Map();
      for (let i2 = 0; i2 < t5.length; i2++) {
        const e4 = t5[i2];
        n4.set(e4.textRasterizationParam.resource.symbol, {
          text: e4.text,
          glyphMosaicItems: a5[i2]
        });
      }
      return n4;
    });
  }
  _cleanupSharedResources() {
    if (!this._cleanupRequired) return;
    const e3 = performance.now();
    if (e3 - this._lastCleanup < 5e3) return;
    this._cleanupRequired = false, this._lastCleanup = e3;
    const t5 = /* @__PURE__ */ new Set();
    for (const s6 of this._graphicStore.items()) {
      const e4 = s6.symbolResource?.symbolInfo.hash;
      t5.add(e4);
    }
    const r = new Set(this._hashToSymbolInfo.keys());
    for (const s6 of r.values()) t5.has(s6) || this._hashToSymbolInfo.delete(s6);
  }
};
e([y()], F.prototype, "_effectiveRenderer", null), e([y({
  constructOnly: true
})], F.prototype, "layerId", void 0), e([y({
  constructOnly: true
})], F.prototype, "requestUpdateCallback", void 0), e([y()], F.prototype, "container", void 0), e([y({
  constructOnly: true
})], F.prototype, "graphics", void 0), e([y()], F.prototype, "renderer", void 0), e([y()], F.prototype, "_updateTracking", void 0), e([y()], F.prototype, "updating", null), e([y()], F.prototype, "view", void 0), e([y()], F.prototype, "updateRequested", void 0), e([y()], F.prototype, "defaultPointSymbolEnabled", void 0), F = e([a("esri.views.2d.layers.graphics.GraphicsView2D")], F);
var V = F;

export {
  V
};
//# sourceMappingURL=chunk-D65J35HP.js.map
