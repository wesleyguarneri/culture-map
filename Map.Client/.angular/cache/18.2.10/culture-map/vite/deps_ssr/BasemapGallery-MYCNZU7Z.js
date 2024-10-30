import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  r as r2
} from "./chunk-PPFE3CUD.js";
import {
  F as F2,
  V as V2
} from "./chunk-QJ4KFDZU.js";
import {
  f as f2
} from "./chunk-C22SF7N4.js";
import {
  e as e4
} from "./chunk-XJ4XZPHY.js";
import {
  t
} from "./chunk-LTKDZMRF.js";
import {
  e as e3
} from "./chunk-FYGR4X6I.js";
import {
  a as a2,
  l
} from "./chunk-GNCXYHNE.js";
import {
  L,
  O as O2,
  R,
  U,
  d as d2
} from "./chunk-TVHVZK5G.js";
import {
  F
} from "./chunk-P2MUOE6G.js";
import "./chunk-YCXNHEGB.js";
import "./chunk-CSATD3VX.js";
import "./chunk-NXXQ35YM.js";
import {
  J,
  W,
  _
} from "./chunk-LM3JDV4W.js";
import "./chunk-34V2CLL5.js";
import {
  f,
  n as n5,
  y as y2
} from "./chunk-7V4JSBFA.js";
import "./chunk-KAHESDP5.js";
import "./chunk-ONRZ4VTT.js";
import {
  s as s4
} from "./chunk-ASCK5HJ5.js";
import "./chunk-ZT7V2AVD.js";
import "./chunk-KOI252FF.js";
import "./chunk-SR7PRON4.js";
import "./chunk-HGHPYGKP.js";
import "./chunk-4DSGTDZJ.js";
import "./chunk-VYTPFEL2.js";
import "./chunk-RLGDH6IY.js";
import "./chunk-MRPCXIVS.js";
import "./chunk-YTKVV2Y3.js";
import "./chunk-GCVQXAS4.js";
import "./chunk-UFQD6AL4.js";
import {
  B,
  e2,
  r
} from "./chunk-UVQYXHKM.js";
import {
  n as n3
} from "./chunk-M5N6UHWJ.js";
import "./chunk-EBCBYN6Y.js";
import {
  m
} from "./chunk-ODFKYX74.js";
import "./chunk-EGBDRLCX.js";
import "./chunk-THZPD5CT.js";
import "./chunk-OBCA6CWH.js";
import "./chunk-2JI245BP.js";
import "./chunk-N34BRXVM.js";
import "./chunk-KETDH2J4.js";
import {
  C
} from "./chunk-7QV7DHWN.js";
import {
  m as m2
} from "./chunk-4L4Y34YK.js";
import "./chunk-BXONKQKI.js";
import {
  n as n2
} from "./chunk-2HDBQXAR.js";
import "./chunk-RNF7VOCU.js";
import "./chunk-TIRJMGGG.js";
import "./chunk-ZDRQSPB6.js";
import "./chunk-DCXDXGAR.js";
import "./chunk-BCCDYCTQ.js";
import "./chunk-AYL3HQHD.js";
import {
  s as s3
} from "./chunk-66YQWHHE.js";
import "./chunk-QGBMZIP4.js";
import "./chunk-AOEBZVTA.js";
import "./chunk-2OZSYJDX.js";
import "./chunk-MZM4INJV.js";
import "./chunk-J4GMQHGL.js";
import "./chunk-MHPE4SZA.js";
import {
  G
} from "./chunk-6SSA7P3A.js";
import "./chunk-FQBTLEUI.js";
import {
  n as n4
} from "./chunk-GS7Y3YOG.js";
import "./chunk-Y2HYKTTT.js";
import "./chunk-XLEC46FY.js";
import "./chunk-4AZPIP7K.js";
import {
  P,
  d,
  p,
  v,
  w
} from "./chunk-LZSLQ24Q.js";
import {
  V
} from "./chunk-U3RHUXYK.js";
import "./chunk-7DBI6LQG.js";
import "./chunk-AUUN7RFQ.js";
import "./chunk-JAMSDYD6.js";
import "./chunk-PH6NPTP7.js";
import {
  e
} from "./chunk-NUICEVIH.js";
import {
  S
} from "./chunk-NXK752PZ.js";
import {
  y
} from "./chunk-UVNLCXWD.js";
import "./chunk-PNUA7JOS.js";
import "./chunk-OR2FKGUM.js";
import {
  a3 as a
} from "./chunk-UDMPWVPF.js";
import "./chunk-XJNKCEWL.js";
import {
  b,
  s as s2
} from "./chunk-AIZ3T7E3.js";
import "./chunk-6UEMNP3E.js";
import "./chunk-6WGE3IUL.js";
import "./chunk-MLYB2YW4.js";
import {
  n2 as n,
  s2 as s
} from "./chunk-6JFGZTLU.js";
import {
  O
} from "./chunk-2ZJE6ZFX.js";
import "./chunk-L4CMR4WM.js";
import "./chunk-7JIACICA.js";
import "./chunk-IE4UBD3F.js";
import "./chunk-IAO6HACY.js";
import {
  __async
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/widgets/BasemapGallery/support/basemapCompatibilityUtils.js
function f3(_0) {
  return __async(this, arguments, function* (e6, t3 = {}) {
    const {
      basemap: i,
      view: r3
    } = e6;
    yield i.load(t3), y3(i), yield h(i, r3, t3), s2(t3);
  });
}
function u(_0) {
  return __async(this, arguments, function* (t3, r3 = {}) {
    const {
      basemap: n6,
      view: s5
    } = t3;
    s2(r3);
    const l2 = n6.baseLayers.find((e6) => "unknown" === e6.type)?.loadError;
    if (null != l2) throw l2;
    if (!s5 || "spatialReferenceLocked" in s5 && !s5.spatialReferenceLocked) return;
    if (yield n6.load(r3), s2(r3), 0 === n6.baseLayers.length) return;
    const o = n6.baseLayers.at(0);
    if (!y2(o)) return;
    if (n6.spatialReference) {
      if (s5.spatialReference.equals(n6.spatialReference)) return;
      w2();
    }
    yield o.load(r3), s2(r3);
    const p3 = (("supportedSpatialReferences" in o ? o.supportedSpatialReferences : null) || ["tileInfo" in o ? o.tileInfo?.spatialReference : null]).filter(O);
    0 !== p3.length && p3.every((e6) => !s5.spatialReference.equals(e6)) && w2();
  });
}
function w2() {
  throw new s("basemap-compatibility:incompatible-spatial-reference", "Basemap spatial reference is not compatible with the view");
}
function y3(e6) {
  if (0 === e6.baseLayers.length && 0 === e6.referenceLayers.length) return;
  const t3 = e6.baseLayers.concat(e6.referenceLayers).toArray().filter((e7) => !n5(e7)).map((e7) => b2(e7));
  if (t3.length) throw t3[0];
}
function b2(e6) {
  return new s("basemap-compatibility:unsupported-basemap-layer-type", "Unsupported basemap layer type ${operationalLayerType}", {
    layer: e6,
    operationalLayerType: e6.operationalLayerType || "unknown"
  });
}
function h(e6, a4, i) {
  return __async(this, null, function* () {
    if (0 === e6.baseLayers.length) return;
    const r3 = e6.baseLayers.at(0);
    if (f(r3)) {
      try {
        yield r3.load(i);
      } catch (s5) {
        const e7 = "basemap-compatibility:unknown-error", a5 = "Unknown basemap compatibility error", {
          name: i2 = e7,
          message: r4 = a5,
          details: n6
        } = s5;
        throw new s(i2, r4, n6);
      }
      g(r3, a4);
    }
  });
}
function g(e6, a4) {
  const i = a4.state.viewingMode;
  if (!i) return;
  let r3, n6;
  if ("wmts" === e6?.type) {
    const s5 = F2(e6, a4.spatialReference, i);
    if (null == s5.tileInfo) throw new s("basemapgalleryitem:tiling-scheme-incompatible", "Basemap tiling scheme is incompatible with the view");
    r3 = s5.tileInfo, n6 = s5.fullExtent;
  } else r3 = e6.tileInfo, n6 = e6.fullExtent;
  if (null == r3) return;
  if (!r2(r3.spatialReference, i)) throw new s(`basemapgalleryitem:spatial-reference-unsupported-${a2(i)}`, `Basemap spatial reference is unsupported in ${a2(i)} mode`);
  const f5 = "vector-tile" === e6?.type ? r3.getCompatibleForVTL(256) : null;
  if (i === l.Global) {
    let a5 = V2(r3, n6, null, i);
    if (a5 && "vector-tile" === e6?.type && null != n6 && f5 && !V2(f5, n6, null, i) && (a5 = null), a5) {
      const e7 = r3.spatialReference.isWebMercator ? "web-mercator" : "wgs84";
      throw new s(`basemapgalleryitem:tiling-scheme-unsupported-${e7}-global`, "Basemap tiling scheme is unsupported in global mode", {
        error: a5
      });
    }
  } else if (f2.checkUnsupported(r3)) throw new s("basemapgalleryitem:tiling-scheme-unsupported-local", "Basemap tiling scheme is unsupported in local mode");
  const u2 = a4.basemapTerrain?.tilingScheme;
  if (u2 && !u2.compatibleWith(r3) && ("vector-tile" !== e6?.type || !f5 || !u2.compatibleWith(f5))) throw new s("basemapgalleryitem:tiling-scheme-incompatible", "Basemap tiling scheme is incompatible with the view");
}

// ../../../node_modules/@arcgis/core/widgets/BasemapGallery/support/BasemapGalleryItem.js
var p2 = class extends s4(S) {
  constructor(e6) {
    super(e6), this.compatibilityFunction = null, this.error = null, this.state = "loading", this.view = null;
  }
  initialize() {
    const e6 = () => this.refresh();
    this.addHandles([d(() => this.basemap?.loadStatus, e6), d(() => this.compatibilityFunction, e6), d(() => this.view && "basemapTerrain" in this.view && this.view.basemapTerrain?.tilingScheme, e6), d(() => this.view?.ready, e6), d(() => this.view?.spatialReference, e6)]), this.refresh();
  }
  destroy() {
    this._cancelRefresh(), this.basemap = null, this.compatibilityFunction = null, this.view = null;
  }
  get _spatialReferenceTask() {
    return U(this.view, this.basemap);
  }
  set basemap(e6) {
    e6 && e6.load().catch(() => {
    }), this._set("basemap", e6);
  }
  get spatialReference() {
    return this._spatialReferenceTask.spatialReference;
  }
  refresh() {
    this._cancelRefresh(), this._set("state", "loading");
    const e6 = this.basemap?.loadStatus;
    if ("loaded" !== e6 && "failed" !== e6) return;
    if (!this.compatibilityFunction) return void ("loaded" === e6 ? (this._set("state", "ready"), this._set("error", null)) : (this._set("state", "error"), this._set("error", this.basemap.loadError)));
    const t3 = new AbortController(), {
      signal: s5
    } = t3;
    this.compatibilityFunction(this, {
      signal: s5
    }).then(() => w(() => !this._spatialReferenceTask.updating, s5)).then(() => {
      this._set("state", "ready"), this._set("error", null);
    }).catch((e7) => {
      b(e7) || (this._set("state", "error"), this._set("error", e7));
    }), this._refreshController = t3;
  }
  _cancelRefresh() {
    this._refreshController && (this._refreshController.abort(), this._refreshController = null);
  }
};
e([y({
  readOnly: true
})], p2.prototype, "_spatialReferenceTask", null), e([y()], p2.prototype, "basemap", null), e([y()], p2.prototype, "compatibilityFunction", void 0), e([y({
  readOnly: true
})], p2.prototype, "error", void 0), e([y({
  readOnly: true
})], p2.prototype, "spatialReference", null), e([y({
  readOnly: true
})], p2.prototype, "state", void 0), e([y()], p2.prototype, "view", void 0), p2 = e([a("esri.widgets.BasemapGallery.support.BasemapGalleryItem")], p2);
var h2 = p2;

// ../../../node_modules/@arcgis/core/widgets/BasemapGallery/support/LocalBasemapsSource.js
var a3 = V.ofType(F);
var c = class extends S {
  constructor(o) {
    super(o), this.basemaps = new a3();
  }
  destroy() {
    this.basemaps.forEach((o) => o.destroy());
  }
  get state() {
    return "ready";
  }
  refresh() {
  }
};
e([y({
  type: a3
})], c.prototype, "basemaps", void 0), e([y({
  readOnly: true
})], c.prototype, "state", null), c = e([a("esri.widgets.BasemapGallery.support.LocalBasemapsSource")], c);
var m3 = c;

// ../../../node_modules/@arcgis/core/widgets/BasemapGallery/support/PortalBasemapsSource.js
var d3 = V.ofType(F);
var y4 = class extends m2.LoadableMixin(n2(m3)) {
  constructor(t3) {
    super(t3), this._lastPortalBasemapFetchController = null, this.basemaps = new d3(), this.filterFunction = null, this.portal = C.getDefault(), this.query = null, this.updateBasemapsCallback = null, this.viewType = null;
  }
  initialize() {
    this.addHandles(d(() => [this.filterFunction, this.loadStatus, this.portal?.basemapGalleryGroupQuery, this.portal?.basemapGalleryGroupQuery3D, this.portal?.user, this.query, this.updateBasemapsCallback], () => this.refresh(), P));
  }
  destroy() {
    this.filterFunction = null, this.portal = null, this.basemaps.forEach((t3) => t3.destroy());
  }
  get state() {
    return "not-loaded" === this.loadStatus ? "not-loaded" : "loading" === this.loadStatus || this._lastPortalBasemapFetchController ? "loading" : "ready";
  }
  load(t3) {
    return this.addResolvingPromise(this.portal.load(t3)), Promise.resolve(this);
  }
  refresh() {
    return __async(this, null, function* () {
      if ("loaded" !== this.loadStatus) return;
      this._lastPortalBasemapFetchController && (this._lastPortalBasemapFetchController.abort(), this._lastPortalBasemapFetchController = null);
      const t3 = this.portal, a4 = new AbortController();
      this._lastPortalBasemapFetchController = a4, this.notifyChange("state");
      try {
        const e6 = yield t3.fetchBasemaps(this._toQueryString(this.query), {
          signal: a4.signal,
          include3d: "3d" === this.viewType || void 0
        });
        yield this._updateBasemaps(e6);
      } catch (e6) {
        if (b(e6)) throw e6;
        n.getLogger(this).warn(new s("basemap-source:fetch-basemaps-error", "Could not fetch basemaps from portal.", {
          error: e6
        })), yield this._updateBasemaps();
      }
      this._lastPortalBasemapFetchController = null, this.notifyChange("state");
    });
  }
  _toQueryString(t3) {
    return t3 && "string" != typeof t3 ? Object.keys(t3).map((a4) => `${a4}:${t3[a4]}`).join(" AND ") : t3;
  }
  _updateBasemaps() {
    return __async(this, arguments, function* (t3 = []) {
      let a4 = yield this._filterBasemaps(t3);
      a4 = this.updateBasemapsCallback ? yield this.updateBasemapsCallback(a4) : a4, this.basemaps.removeAll(), this.basemaps.addMany(a4);
    });
  }
  _filterBasemaps(t3) {
    return __async(this, null, function* () {
      if (!this.filterFunction) return t3;
      const a4 = t3.map(this.filterFunction), e6 = yield Promise.all(a4);
      return t3.filter((t4, a5) => e6[a5]);
    });
  }
};
e([y({
  readOnly: true,
  type: d3
})], y4.prototype, "basemaps", void 0), e([y()], y4.prototype, "filterFunction", void 0), e([y({
  type: C
})], y4.prototype, "portal", void 0), e([y()], y4.prototype, "query", void 0), e([y({
  readOnly: true
})], y4.prototype, "state", null), e([y()], y4.prototype, "updateBasemapsCallback", void 0), e([y()], y4.prototype, "viewType", void 0), y4 = e([a("esri.widgets.BasemapGallery.support.PortalBasemapsSource")], y4);
var f4 = y4;

// ../../../node_modules/@arcgis/core/widgets/BasemapGallery/BasemapGalleryViewModel.js
var j = V.ofType(h2);
function w3(e6) {
  return e6 && "esri.portal.Portal" === e6.declaredClass;
}
function B2(e6) {
  return e6 && !(e6 instanceof f4) && (!!e6.portal || !!e6.query);
}
function _2(e6) {
  return e6 && "basemaps" in e6 && "state" in e6 && "refresh" in e6;
}
var I = class extends m2 {
  constructor(e6) {
    super(e6), this._loadingProjectionEngine = false, this.items = new j(), this.source = new f4(), this.view = null;
  }
  initialize() {
    const e6 = () => this._recreateItems();
    this.addHandles([d(() => "ready" === this.state ? this.compatibilityFunction : null, () => this._updateItems()), v(() => this.source?.basemaps, "change", e6, {
      onListenerAdd: e6
    }), p(() => this.view, () => {
      this.source instanceof f4 && (this.source.viewType = this.view?.type);
    }, {
      once: true
    })]);
  }
  destroy() {
    const e6 = this.source.basemaps.find((e7) => e7 === this.activeBasemap);
    e6 && this.source.basemaps.remove(e6), this.source?.destroy();
  }
  get activeBasemap() {
    return this.view?.map?.basemap ?? null;
  }
  set activeBasemap(e6) {
    const s5 = this.view;
    if (!s5?.map) return;
    const i = "string" == typeof e6 ? F.fromId(e6) : e6;
    if (!i || !s5.ready) return s5.map.basemap = i, void this._clearOverride("activeBasemap");
    const a4 = i.spatialReference || this.items?.find((e7) => this.basemapEquals(i, e7.basemap))?.spatialReference;
    if (a4 && "spatialReferenceLocked" in s5 && !s5.spatialReferenceLocked) {
      const t3 = s5.spatialReference;
      if (null != a4 && !G(t3, a4) && !J(s5.spatialReference, a4) && !_()) return this._override("activeBasemap", i), this._loadingProjectionEngine = true, void W().then(() => {
        this._get("activeBasemap") === e6 && (s5.map.basemap = e6, s5.spatialReference = a4, this._clearOverride("activeBasemap"));
      }, () => {
      }).then(() => {
        this._loadingProjectionEngine = false;
      });
      s5.map.basemap = i, this._clearOverride("activeBasemap"), null == a4 || G(s5.spatialReference, a4) || (s5.spatialReference = a4);
    } else s5.map.basemap = i, this._clearOverride("activeBasemap");
  }
  get activeBasemapIndex() {
    const {
      state: e6,
      activeBasemap: t3
    } = this;
    return "ready" !== e6 ? -1 : this._findBasemapIndex(t3);
  }
  get compatibilityFunction() {
    return "3d" === this.view?.type ? f3 : u;
  }
  set compatibilityFunction(e6) {
    this._overrideIfSome("compatibilityFunction", e6);
  }
  castSource(e6) {
    return Array.isArray(e6) || V.isCollection(e6) ? new m3({
      basemaps: Array.isArray(e6) ? new V(e6) : e6
    }) : w3(e6) ? new f4({
      portal: e6
    }) : B2(e6) ? new f4(e6) : _2(e6) ? e6 : null;
  }
  get state() {
    return this.view?.ready && this.source ? this._loadingProjectionEngine ? "loading" : "ready" : "disabled";
  }
  basemapEquals(e6, t3) {
    return R(e6, t3);
  }
  refresh() {
    this._recreateItems();
  }
  load() {
    return this.loadSource();
  }
  loadSource(e6) {
    return this.addResolvingPromise(m2.isLoadable(this.source) ? this.source.load(e6) : null), Promise.resolve(this);
  }
  _findBasemapIndex(e6) {
    const {
      items: t3
    } = this, s5 = t3.findIndex((t4) => t4.basemap === e6);
    return -1 === s5 ? t3.findIndex((t4) => this.basemapEquals(t4.basemap, e6)) : s5;
  }
  _recreateItems() {
    const e6 = this.source?.basemaps ?? [], {
      view: t3,
      compatibilityFunction: s5
    } = this, i = new Map(this.items.map((e7) => [e7.basemap, e7])), a4 = e6.map((e7) => {
      const a5 = i.get(e7);
      return a5 ? (i.delete(e7), a5) : new h2({
        basemap: e7,
        compatibilityFunction: s5,
        view: t3
      });
    });
    this.items.removeAll(), this.items.addMany(a4), i.forEach((e7) => e7.destroy());
  }
  _updateItems() {
    for (const e6 of this.items) e6.compatibilityFunction = this.compatibilityFunction, e6.view = this.view;
  }
};
e([y()], I.prototype, "_loadingProjectionEngine", void 0), e([y()], I.prototype, "activeBasemap", null), e([y({
  readOnly: true
})], I.prototype, "activeBasemapIndex", null), e([y()], I.prototype, "compatibilityFunction", null), e([y({
  readOnly: true,
  type: j
})], I.prototype, "items", void 0), e([y()], I.prototype, "source", void 0), e([s3("source")], I.prototype, "castSource", null), e([y({
  readOnly: true
})], I.prototype, "state", null), e([y()], I.prototype, "view", void 0), I = e([a("esri.widgets.BasemapGallery.BasemapGalleryViewModel")], I);
var R2 = I;

// ../../../node_modules/@arcgis/core/widgets/BasemapGallery/css.js
var e5 = "esri-basemap-gallery";
var t2 = {
  base: e5,
  sourceLoading: `${e5}--source-loading`,
  layoutGrid: `${e5}--grid`,
  narrowItems: `${e5}--narrow-items`,
  loader: `${e5}__loader`,
  item: `${e5}__item`,
  itemContainer: `${e5}__item-container`,
  itemContent: `${e5}__item-content`,
  itemTitle: `${e5}__item-title`,
  itemTagsContainer: `${e5}__item-tags-container`,
  itemThumbnail: `${e5}__item-thumbnail`,
  selectedItem: `${e5}__item--selected`,
  itemError: `${e5}__item--error`
};

// ../../../node_modules/@arcgis/core/widgets/BasemapGallery.js
var y5 = {
  small: 200,
  default: 280,
  wide: 420
};
var w4 = class extends B {
  constructor(e6, t3) {
    super(e6, t3), this.disabled = false, this.headingLevel = 2, this.messages = null, this.viewModel = new R2(), this._focusBasemapItemEnabled = false, this._container = null, this._width = 0, this._onContainerCreated = (e7) => {
      this._container = e7;
    };
  }
  initialize() {
    this.addHandles([m(() => this._container, ({
      contentRect: e6
    }) => {
      this._width = e6.width;
    }), p(() => this.source, () => this.viewModel.loadSource(), {
      sync: true,
      initial: true
    })]);
  }
  loadDependencies() {
    return r({
      scrim: () => import("./calcite-scrim-GBXWCUR2.js"),
      chip: () => import("./calcite-chip-4NNOBJDH.js")
    });
  }
  get activeBasemap() {
    return this.viewModel.activeBasemap;
  }
  set activeBasemap(e6) {
    this.viewModel.activeBasemap = e6;
  }
  get icon() {
    return "basemap";
  }
  set icon(e6) {
    this._overrideIfSome("icon", e6);
  }
  get label() {
    return this.messages?.widgetLabel ?? "";
  }
  set label(e6) {
    this._overrideIfSome("label", e6);
  }
  get source() {
    return this.viewModel.source;
  }
  set source(e6) {
    this.viewModel.source = e6;
  }
  get view() {
    return this.viewModel.view;
  }
  set view(e6) {
    this.viewModel.view = e6;
  }
  render() {
    const e6 = "loading" === this.source.state, t3 = this.disabled || "disabled" === this.viewModel.state, s5 = this.viewModel.items, a4 = {
      [t2.sourceLoading]: e6,
      [e3.disabled]: t3
    }, i = this._width;
    i <= y5.small || i >= y5.wide ? a4[t2.layoutGrid] = true : i < y5.default && (a4[t2.narrowItems] = true);
    const o = e6 ? n3("div", {
      class: t2.loader,
      key: "loader"
    }) : null, r3 = e6 ? null : s5.length > 0 ? n3("ul", {
      "aria-disabled": this.disabled,
      "aria-label": this.label,
      bind: this,
      class: t2.itemContainer,
      key: "item-container",
      onkeydown: this._handleKeyDown,
      role: "radiogroup"
    }, s5.map((e7, t4) => this._renderBasemapGalleryItem(e7, t4)).toArray()) : n3("div", {
      class: e3.empty,
      key: "empty-message"
    }, n3(e4, {
      level: this.headingLevel
    }, this.messages.noBasemaps));
    return n3("div", {
      afterCreate: this._onContainerCreated,
      class: this.classes(t2.base, e3.widget, e3.panel, a4),
      key: "container"
    }, 0 === this._width ? null : [o, r3]);
  }
  _getRoundRobinIndex(e6, t3) {
    return (e6 + t3) % t3;
  }
  _handleKeyDown(e6) {
    const {
      key: t3
    } = e6;
    if (!["ArrowUp", "ArrowDown", "ArrowRight", "ArrowLeft"].includes(t3)) return;
    e6.preventDefault();
    const {
      items: s5,
      activeBasemapIndex: a4
    } = this.viewModel, i = "ArrowUp" === t3 || "ArrowLeft" === t3 ? this._getRoundRobinIndex(Math.max(a4 - 1, -1), s5.length) : this._getRoundRobinIndex(a4 + 1, s5.length), o = s5.at(i);
    "ready" === o?.state && (this.viewModel.activeBasemap = o.basemap), this._focusBasemapItemEnabled = true;
  }
  _focusBasemapItem(e6) {
    this._focusBasemapItemEnabled && 0 === e6.tabIndex && (e6.focus(), this._focusBasemapItemEnabled = false);
  }
  _handleClick(e6) {
    const t3 = e6.currentTarget["data-item"];
    "ready" === t3.state && (this.viewModel.activeBasemap = t3.basemap);
  }
  _renderBasemapGalleryItem(e6, s5) {
    const a4 = O2(e6.basemap) || n4("esri/themes/base/images/basemap-toggle-64.svg"), i = e6.basemap.title, l2 = e6.basemap.portalItem?.snippet, n6 = e6.error?.message || l2 || i, {
      viewModel: {
        state: d4,
        activeBasemapIndex: m4
      }
    } = this, h3 = this.disabled || "disabled" === d4, u2 = m4 === s5, g2 = u2 || -1 === m4 && 0 === s5 ? 0 : -1, b3 = "loading" === d4, y6 = {
      [t2.selectedItem]: u2,
      [t2.itemError]: "error" === e6.state
    }, w5 = `basemapgallery-item-${e6.uid}`;
    return n3("li", {
      afterUpdate: this._focusBasemapItem,
      "aria-checked": u2.toString(),
      "aria-disabled": h3.toString(),
      "aria-labelledby": w5,
      bind: this,
      class: this.classes(t2.item, y6),
      "data-item": e6,
      key: e6.uid,
      onclick: this._handleClick,
      onkeydown: this._handleClick,
      role: "radio",
      tabIndex: g2,
      title: n6
    }, n3("img", {
      alt: "",
      class: t2.itemThumbnail,
      src: a4
    }), n3("div", {
      class: t2.itemContent,
      key: "content"
    }, n3("div", {
      class: t2.itemTitle,
      key: "title"
    }, n3("span", {
      id: w5
    }, i)), d2(e6.basemap) ? this._renderTags(e6.basemap) : null), "loading" === e6.state || u2 && b3 ? n3("calcite-scrim", null, n3("span", {
      "aria-hidden": "true",
      class: e3.loaderAnimation,
      key: "loader",
      role: "presentation"
    })) : null);
  }
  _renderTags(e6) {
    return n3("div", {
      class: t2.itemTagsContainer,
      key: "tag"
    }, this._render3DTag(), L(e6) ? this._renderBetaTag() : null);
  }
  _render3DTag() {
    const {
      messages: e6
    } = this;
    return n3("calcite-chip", {
      key: "tag-3d",
      scale: "s",
      value: e6.tag3D
    }, this.messages.tag3D);
  }
  _renderBetaTag() {
    const {
      messages: e6
    } = this;
    return n3("calcite-chip", {
      appearance: "outline-fill",
      key: "tag-beta",
      scale: "s",
      value: e6.tagBeta
    }, this.messages.tagBeta);
  }
};
e([y()], w4.prototype, "activeBasemap", null), e([y()], w4.prototype, "disabled", void 0), e([y()], w4.prototype, "headingLevel", void 0), e([y()], w4.prototype, "icon", null), e([y()], w4.prototype, "label", null), e([y(), e2("esri/widgets/BasemapGallery/t9n/BasemapGallery")], w4.prototype, "messages", void 0), e([y()], w4.prototype, "source", null), e([y()], w4.prototype, "view", null), e([y()], w4.prototype, "viewModel", void 0), e([y()], w4.prototype, "_focusBasemapItemEnabled", void 0), e([y()], w4.prototype, "_container", void 0), e([y()], w4.prototype, "_width", void 0), e([t()], w4.prototype, "_handleClick", null), w4 = e([a("esri.widgets.BasemapGallery")], w4);
var _3 = w4;
export {
  _3 as default
};
//# sourceMappingURL=BasemapGallery-MYCNZU7Z.js.map
