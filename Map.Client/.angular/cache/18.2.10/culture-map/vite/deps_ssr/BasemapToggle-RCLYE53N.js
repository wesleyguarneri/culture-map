import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  e as e3
} from "./chunk-FYGR4X6I.js";
import {
  O,
  U,
  b,
  m
} from "./chunk-TVHVZK5G.js";
import "./chunk-P2MUOE6G.js";
import "./chunk-YCXNHEGB.js";
import "./chunk-CSATD3VX.js";
import "./chunk-NXXQ35YM.js";
import {
  J,
  W,
  _
} from "./chunk-LM3JDV4W.js";
import "./chunk-34V2CLL5.js";
import "./chunk-7V4JSBFA.js";
import "./chunk-ZT7V2AVD.js";
import "./chunk-KOI252FF.js";
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
  n
} from "./chunk-M5N6UHWJ.js";
import "./chunk-EBCBYN6Y.js";
import "./chunk-ODFKYX74.js";
import "./chunk-EGBDRLCX.js";
import "./chunk-THZPD5CT.js";
import "./chunk-OBCA6CWH.js";
import "./chunk-2JI245BP.js";
import "./chunk-N34BRXVM.js";
import "./chunk-KETDH2J4.js";
import "./chunk-7QV7DHWN.js";
import "./chunk-4L4Y34YK.js";
import "./chunk-BXONKQKI.js";
import "./chunk-2HDBQXAR.js";
import "./chunk-RNF7VOCU.js";
import "./chunk-TIRJMGGG.js";
import "./chunk-ZDRQSPB6.js";
import "./chunk-DCXDXGAR.js";
import "./chunk-BCCDYCTQ.js";
import "./chunk-AYL3HQHD.js";
import {
  s
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
import "./chunk-GS7Y3YOG.js";
import "./chunk-Y2HYKTTT.js";
import "./chunk-XLEC46FY.js";
import "./chunk-4AZPIP7K.js";
import {
  P,
  d,
  w
} from "./chunk-LZSLQ24Q.js";
import "./chunk-U3RHUXYK.js";
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
import "./chunk-AIZ3T7E3.js";
import "./chunk-6UEMNP3E.js";
import "./chunk-6WGE3IUL.js";
import "./chunk-MLYB2YW4.js";
import "./chunk-6JFGZTLU.js";
import "./chunk-2ZJE6ZFX.js";
import "./chunk-L4CMR4WM.js";
import "./chunk-7JIACICA.js";
import "./chunk-IE4UBD3F.js";
import "./chunk-IAO6HACY.js";
import {
  __async,
  __spreadValues
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/widgets/BasemapToggle/BasemapToggleViewModel.js
var g = class extends S {
  constructor(e5) {
    super(e5), this._basemapCache = {}, this._loadingProjectionEngine = false, this.nextBasemap = b("hybrid", this._basemapCache), this.view = null;
  }
  initialize() {
    d(() => this.nextBasemap, (e5) => {
      e5 && !e5.loaded && e5.load().catch(() => {
      });
    }, P);
  }
  destroy() {
    this.view = null, m(this._basemapCache), this._basemapCache = null;
  }
  get _nextBasemapSpatialReferenceTask() {
    return U(this.view, this.nextBasemap);
  }
  get _viewSpatialReferenceLocked() {
    const {
      view: e5
    } = this;
    return !e5 || !("spatialReferenceLocked" in e5) || e5.spatialReferenceLocked;
  }
  get activeBasemap() {
    return b(this.view?.map?.basemap ?? "topo-vector", this._basemapCache);
  }
  castNextBasemap(e5) {
    return b(e5, this._basemapCache);
  }
  get state() {
    const {
      view: e5
    } = this;
    if (!e5?.ready) return "disabled";
    if (this._nextBasemapSpatialReferenceTask.updating) return "disabled";
    const {
      spatialReference: a3
    } = this._nextBasemapSpatialReferenceTask;
    return this._viewSpatialReferenceLocked && null != a3 && !e5.spatialReference.equals(a3) ? "incompatible-next-basemap" : this._loadingProjectionEngine ? "loading" : "ready";
  }
  toggle() {
    return __async(this, null, function* () {
      const {
        activeBasemap: e5,
        nextBasemap: a3,
        state: t,
        view: s2
      } = this;
      if (!s2 || "disabled" === t || "incompatible-next-basemap" === t) return;
      const r2 = this._viewSpatialReferenceLocked;
      if (!r2) {
        if (yield w(() => !this._nextBasemapSpatialReferenceTask.updating), a3 !== this.nextBasemap || e5 !== this.activeBasemap) return;
        const {
          spatialReference: t2
        } = this._nextBasemapSpatialReferenceTask;
        if (null == t2 || G(s2.spatialReference, t2) || _() || J(s2.spatialReference, t2) || (this._loadingProjectionEngine = true, yield W(), this._loadingProjectionEngine = false), a3 !== this.nextBasemap || e5 !== this.activeBasemap) return;
      }
      s2.map.basemap = a3, r2 || null == this._nextBasemapSpatialReferenceTask.spatialReference || G(s2.spatialReference, this._nextBasemapSpatialReferenceTask.spatialReference) || (s2.spatialReference = this._nextBasemapSpatialReferenceTask.spatialReference), this.nextBasemap = e5;
    });
  }
  static getThumbnailUrl(e5) {
    return O(e5);
  }
};
e([y()], g.prototype, "_loadingProjectionEngine", void 0), e([y({
  readOnly: true
})], g.prototype, "_nextBasemapSpatialReferenceTask", null), e([y({
  readOnly: true
})], g.prototype, "_viewSpatialReferenceLocked", null), e([y({
  readOnly: true
})], g.prototype, "activeBasemap", null), e([y()], g.prototype, "nextBasemap", void 0), e([s("nextBasemap")], g.prototype, "castNextBasemap", null), e([y({
  readOnly: true
})], g.prototype, "state", null), e([y()], g.prototype, "view", void 0), e([y()], g.prototype, "toggle", null), g = e([a("esri.widgets.BasemapToggle.BasemapToggleViewModel")], g);
var B2 = g;

// ../../../node_modules/@arcgis/core/widgets/BasemapToggle/css.js
var e4 = "esri-basemap-toggle";
var a2 = "esri-basemap-thumbnail";
var _2 = {
  base: e4,
  secondaryBasemapImage: `${e4}__image--secondary`,
  container: `${a2} ${e4}__container`,
  image: `${a2}__image ${e4}__image`,
  imageLoading: `${e4}__image--loading`,
  overlay: `${a2}__overlay ${e4}__image-overlay`,
  title: `${a2}__title ${e4}__title`,
  overlayScrim: `${a2}__overlay-scrim`
};

// ../../../node_modules/@arcgis/core/widgets/BasemapToggle.js
function d2(e5) {
  const t = O(e5);
  return t ? {
    backgroundImage: "url(" + t + ")"
  } : {
    backgroundImage: ""
  };
}
var u = {
  title: false
};
var g2 = class extends B {
  constructor(e5, t) {
    super(e5, t), this.messages = null, this.viewModel = new B2(), this.visibleElements = __spreadValues({}, u), this.toggle = () => this.viewModel.toggle();
  }
  loadDependencies() {
    return r({
      button: () => import("./calcite-button-LAMWLR56.js"),
      icon: () => import("./calcite-icon-42Z6A6ZS.js"),
      scrim: () => import("./calcite-scrim-GBXWCUR2.js")
    });
  }
  get activeBasemap() {
    return this.viewModel.activeBasemap;
  }
  get icon() {
    return "layer-basemap";
  }
  set icon(e5) {
    this._overrideIfSome("icon", e5);
  }
  get label() {
    return this.messages?.widgetLabel ?? "";
  }
  set label(e5) {
    this._overrideIfSome("label", e5);
  }
  get nextBasemap() {
    return this.viewModel.nextBasemap;
  }
  set nextBasemap(e5) {
    this.viewModel.nextBasemap = e5;
  }
  get view() {
    return this.viewModel.view;
  }
  set view(e5) {
    this.viewModel.view = e5;
  }
  castVisibleElements(e5) {
    return __spreadValues(__spreadValues({}, u), e5);
  }
  render() {
    const e5 = this.viewModel, t = "disabled" === e5.state ? null : e5.activeBasemap, s2 = "disabled" === e5.state ? null : e5.nextBasemap, i = "loading" === e5.state, o = "incompatible-next-basemap" === e5.state, a3 = s2?.title ?? "", l = s2 && "loaded" !== s2.loadStatus;
    let n2;
    const p = this.visibleElements.title && a3, u2 = o;
    return (p || u2) && (n2 = n("div", {
      class: _2.overlay,
      key: "overlay"
    }, p ? n("span", {
      class: _2.title,
      title: a3
    }, a3) : null, u2 ? n("calcite-scrim", {
      class: _2.overlayScrim,
      title: this.messages.incompatibleSpatialReference
    }, n("calcite-icon", {
      icon: "exclamation-mark-triangle"
    })) : null)), n("div", {
      class: this.classes(_2.base, e3.widget)
    }, n("calcite-button", {
      appearance: "transparent",
      "data-basemap-id": s2 ? s2.id : "",
      disabled: o,
      kind: "neutral",
      label: this.label,
      onclick: () => {
        this.toggle();
      },
      title: this.label
    }, n("div", {
      class: this.classes(_2.container, _2.secondaryBasemapImage)
    }, n("div", {
      class: _2.image,
      styles: d2(t)
    })), n("div", {
      class: _2.container
    }, n("div", {
      class: this.classes(_2.image, l ? _2.imageLoading : null),
      styles: d2(s2)
    }, l || i ? n("calcite-scrim", null, n("span", {
      "aria-hidden": "true",
      class: e3.loaderAnimation,
      role: "presentation"
    })) : null), n2)));
  }
};
e([y({
  readOnly: true
})], g2.prototype, "activeBasemap", null), e([y()], g2.prototype, "icon", null), e([y()], g2.prototype, "label", null), e([y(), e2("esri/widgets/BasemapToggle/t9n/BasemapToggle")], g2.prototype, "messages", void 0), e([y()], g2.prototype, "nextBasemap", null), e([y()], g2.prototype, "view", null), e([y({
  type: B2
})], g2.prototype, "viewModel", void 0), e([y()], g2.prototype, "visibleElements", void 0), e([s("visibleElements")], g2.prototype, "castVisibleElements", null), g2 = e([a("esri.widgets.BasemapToggle")], g2);
var v = g2;
export {
  v as default
};
//# sourceMappingURL=BasemapToggle-RCLYE53N.js.map
