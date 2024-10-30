import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  E2 as E
} from "./chunk-VC76DE2W.js";
import "./chunk-XUM2DDAI.js";
import {
  a as a2,
  b
} from "./chunk-PCY3647G.js";
import "./chunk-YYCVXVUF.js";
import "./chunk-D5RCKR5Z.js";
import "./chunk-NOVQFMBE.js";
import "./chunk-B76NC7GX.js";
import {
  h
} from "./chunk-HFXXFWYN.js";
import "./chunk-GNCXYHNE.js";
import "./chunk-2TNGEJGS.js";
import "./chunk-OYGNGIHQ.js";
import "./chunk-GSG4T2KM.js";
import "./chunk-BZHHBBFX.js";
import {
  c
} from "./chunk-GK5M6FUR.js";
import "./chunk-A2FDYA6M.js";
import "./chunk-YGAXDKHF.js";
import "./chunk-4TOSJLKR.js";
import "./chunk-C7BQE556.js";
import "./chunk-DL2B6IFJ.js";
import "./chunk-VSQZQLTQ.js";
import "./chunk-K43CZ3M5.js";
import {
  I,
  K,
  N
} from "./chunk-LM3JDV4W.js";
import "./chunk-34V2CLL5.js";
import "./chunk-7TBQUMV3.js";
import "./chunk-ASCK5HJ5.js";
import "./chunk-SR7PRON4.js";
import "./chunk-HGHPYGKP.js";
import "./chunk-4DSGTDZJ.js";
import "./chunk-VYTPFEL2.js";
import {
  j
} from "./chunk-MRPCXIVS.js";
import "./chunk-YTKVV2Y3.js";
import "./chunk-GCVQXAS4.js";
import "./chunk-UFQD6AL4.js";
import "./chunk-EGBDRLCX.js";
import "./chunk-4L4Y34YK.js";
import "./chunk-BXONKQKI.js";
import "./chunk-2HDBQXAR.js";
import "./chunk-RNF7VOCU.js";
import {
  _
} from "./chunk-TIRJMGGG.js";
import "./chunk-ZDRQSPB6.js";
import "./chunk-DCXDXGAR.js";
import "./chunk-BCCDYCTQ.js";
import "./chunk-66YQWHHE.js";
import "./chunk-QGBMZIP4.js";
import "./chunk-AOEBZVTA.js";
import "./chunk-2OZSYJDX.js";
import {
  x
} from "./chunk-MZM4INJV.js";
import {
  n
} from "./chunk-J4GMQHGL.js";
import "./chunk-MHPE4SZA.js";
import "./chunk-6SSA7P3A.js";
import "./chunk-FQBTLEUI.js";
import "./chunk-GS7Y3YOG.js";
import "./chunk-Y2HYKTTT.js";
import "./chunk-XLEC46FY.js";
import "./chunk-4AZPIP7K.js";
import {
  A,
  C,
  P,
  d,
  v
} from "./chunk-LZSLQ24Q.js";
import "./chunk-U3RHUXYK.js";
import "./chunk-7DBI6LQG.js";
import "./chunk-AUUN7RFQ.js";
import {
  o
} from "./chunk-JAMSDYD6.js";
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
import {
  l
} from "./chunk-6UEMNP3E.js";
import "./chunk-6WGE3IUL.js";
import "./chunk-MLYB2YW4.js";
import "./chunk-6JFGZTLU.js";
import {
  O
} from "./chunk-2ZJE6ZFX.js";
import {
  __async,
  __spreadValues
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/views/3d/interactive/editingTools/media/MediaElementControllerControlPoints.js
var h2 = class extends S {
  get operations() {
    return this._operations;
  }
  get updating() {
    return this._updatingHandles.updating;
  }
  constructor(e2) {
    super(e2), this._updatingHandles = new h();
  }
  initialize() {
    this.addHandles([l(this._updatingHandles), this._updatingHandles.add(() => {
      const e2 = this.element.georeference;
      return "control-points" === e2?.type ? e2.controlPoints : null;
    }, (e2) => this._elementControlPointsChanged(e2), P)]);
  }
  _elementControlPointsChanged(e2) {
    if (this._updatedElementControlPoints === e2) return;
    const t2 = e2?.map(({
      mapPoint: e3
    }) => e3).filter(O), r2 = this.view.spatialReference;
    this._updatingHandles.addPromise(this._whenProjected(t2, r2, (e3) => {
      if (!e3) return void this._replaceOperations(null);
      const {
        _operations: t3
      } = this, o2 = new j({
        rings: [e3.map(({
          x: e4,
          y: t4
        }) => [e4, t4])],
        spatialReference: r2
      });
      t3?.trySetGeometry(o2) ? this.onModifiedExternally() : this._replaceOperations(E.fromGeometry(o2, this.view.state.viewingMode));
    }));
  }
  _operationsGeometryChanged() {
    const {
      element: {
        georeference: e2
      },
      _operations: t2
    } = this;
    if (!t2 || !e2 || "control-points" !== e2.type || !e2.controlPoints) return;
    const r2 = t2.data.geometry, n2 = e2.controlPoints.map(({
      mapPoint: e3
    }) => e3).filter(O);
    if (r2.rings[0]?.length !== n2.length) return void this._updateElementControlPoints(null);
    const i = r2.rings[0].map(([e3, t3]) => new _({
      x: e3,
      y: t3,
      spatialReference: r2.spatialReference
    })), s = n2.map(({
      spatialReference: e3
    }) => e3);
    this._updatingHandles.addPromise(this._whenProjected(i, s, (e3) => this._updateElementControlPoints(e3)));
  }
  _updateElementControlPoints(e2) {
    const {
      georeference: t2
    } = this.element;
    if (!t2 || !e2 || "control-points" !== t2.type || t2.controlPoints?.length !== e2?.length) return;
    e2 || (t2.controlPoints = null);
    const o2 = t2.controlPoints;
    if (o2?.length === e2.length) for (let r2 = 0; r2 < o2.length; r2++) o2[r2].mapPoint = e2[r2];
  }
  _whenProjected(e2, t2, o2) {
    return __async(this, null, function* () {
      if (!e2) return void o2(e2);
      const {
        _operations: r2,
        element: {
          georeference: n2
        }
      } = this, i = e2.map(({
        spatialReference: e3
      }) => e3), s = Array.isArray(t2) ? t2 : new Array(i.length).fill(t2);
      yield N(Array.from(i).map((e3, t3) => ({
        source: e3,
        dest: s[t3]
      })));
      const a3 = e2.map((e3, t3) => K(e3, s[t3]));
      r2 === this._operations && n2 === this.element.georeference && o2(a3);
    });
  }
  _replaceOperations(e2) {
    this._operations && (this.removeHandles(this._operations), this._operations.destroy()), this._operations = e2, e2 && this.addHandles(e2.data.on("change", () => this._operationsGeometryChanged()), e2);
  }
};
e([y({
  constructOnly: true
})], h2.prototype, "view", void 0), e([y({
  constructOnly: true
})], h2.prototype, "layer", void 0), e([y({
  constructOnly: true
})], h2.prototype, "element", void 0), e([y({
  constructOnly: true
})], h2.prototype, "onModifiedExternally", void 0), e([y()], h2.prototype, "_operations", void 0), e([y()], h2.prototype, "operations", null), e([y()], h2.prototype, "updating", null), h2 = e([a("esri.views.3d.interactive.editingTools.media.MediaElementControllerControlPoints")], h2);

// ../../../node_modules/@arcgis/core/views/3d/interactive/editingTools/media/MediaElementControllerShape.js
var p = class extends S {
  get operations() {
    return this._operations;
  }
  get updating() {
    return this._updatingHandles.updating;
  }
  constructor(e2) {
    super(e2), this._updatingHandles = new h();
  }
  initialize() {
    this.addHandles([l(this._updatingHandles), this._updatingHandles.add(() => this.element.georeference?.coords, (e2) => this._elementCoordinatesChanged(e2), P)]);
  }
  _elementCoordinatesChanged(e2) {
    this._updatedElementCoordinates !== e2 && this._updatingHandles.addPromise(this._whenProjected(e2, this.view.spatialReference, (e3) => {
      if (!e3) return void this._replaceOperations(null);
      const {
        _operations: t2
      } = this;
      t2?.trySetGeometry(e3) ? this.onModifiedExternally() : this._replaceOperations(E.fromGeometry(e3, this.view.state.viewingMode));
    }));
  }
  _operationsGeometryChanged() {
    const {
      element: {
        georeference: e2
      },
      _operations: t2
    } = this;
    if (!t2 || !e2) return;
    const o2 = t2.data.geometry;
    if (!e2.coords) return void this._updateElementCoordinates(o2);
    const r2 = e2.coords.spatialReference;
    this._updatingHandles.addPromise(this._whenProjected(o2, r2, (e3) => this._updateElementCoordinates(e3)));
  }
  _updateElementCoordinates(e2) {
    const {
      georeference: t2
    } = this.element;
    t2 && (t2.coords = e2, this._updatedElementCoordinates = t2.coords);
  }
  _whenProjected(e2, t2, o2) {
    return __async(this, null, function* () {
      if (!e2) return void o2(e2);
      const {
        _operations: r2,
        element: {
          georeference: i
        }
      } = this, s = yield I(e2, t2);
      r2 === this._operations && i === this.element.georeference && o2(s);
    });
  }
  _replaceOperations(e2) {
    this._operations && (this.removeHandles(this._operations), this._operations.destroy()), this._operations = e2, e2 && this.addHandles(e2.data.on("change", () => this._operationsGeometryChanged()), e2), this.onModifiedExternally();
  }
};
e([y({
  constructOnly: true
})], p.prototype, "view", void 0), e([y({
  constructOnly: true
})], p.prototype, "layer", void 0), e([y({
  constructOnly: true
})], p.prototype, "element", void 0), e([y({
  constructOnly: true
})], p.prototype, "onModifiedExternally", void 0), e([y()], p.prototype, "_operations", void 0), e([y()], p.prototype, "operations", null), e([y()], p.prototype, "updating", null), p = e([a("esri.views.3d.interactive.editingTools.media.MediaElementControllerShape")], p);

// ../../../node_modules/@arcgis/core/views/3d/interactive/editingTools/media/mediaElementUtils.js
function r(e2, n2, r2) {
  return t(e2.allLayerViews.find((e3) => e3.layer === n2), r2);
}
function t(r2, t2) {
  if (!r2 || "media-3d" !== r2.type || r2.suspended) return false;
  const s = r2.layer.source;
  return !!s && (s instanceof b || s instanceof a2 ? s === t2 : "hasElement" in s && s.hasElement(t2));
}

// ../../../node_modules/@arcgis/core/views/3d/interactive/editingTools/media/MediaElementManipulator3D.js
var m = class extends S {
  grabbableForEvent() {
    return true;
  }
  constructor(e2) {
    super(e2), this.interactive = true, this.selectable = false, this.grabbable = true, this.grabbing = false, this.dragging = false, this.hovering = true, this.selected = false, this.cursor = null, this.consumesClicks = true, this.events = new o.EventEmitter(), this.addHandles(d(() => this.selected, (e3) => this.events.emit("select-changed", {
      action: e3 ? "select" : "deselect"
    }), C));
  }
  destroy() {
    this._set("view", null);
  }
  intersectionDistance(e2) {
    const {
      view: t2,
      layer: o2,
      element: r2
    } = this;
    if (!r(t2, o2, r2)) return null;
    const s = t2.toMap(e2, {
      include: {
        layer: o2,
        element: r2
      }
    });
    return s && c(s, d2, t2.renderSpatialReference) ? x(d2, t2.state.camera.eye) : null;
  }
  onElevationChange() {
  }
  onViewChange() {
  }
};
e([y({
  constructOnly: true,
  nonNullable: true
})], m.prototype, "element", void 0), e([y({
  constructOnly: true,
  nonNullable: true
})], m.prototype, "layer", void 0), e([y({
  constructOnly: true,
  nonNullable: true
})], m.prototype, "view", void 0), e([y()], m.prototype, "interactive", void 0), e([y()], m.prototype, "selectable", void 0), e([y()], m.prototype, "grabbable", void 0), e([y()], m.prototype, "grabbing", void 0), e([y()], m.prototype, "dragging", void 0), e([y()], m.prototype, "hovering", void 0), e([y()], m.prototype, "selected", void 0), e([y()], m.prototype, "cursor", void 0), m = e([a("esri.views.3d.interactive.editingTools.media.MediaElementManipulator3D")], m);
var d2 = n();

// ../../../node_modules/@arcgis/core/views/3d/interactive/editingTools/ManipulatedObject3DMediaElement.js
var d3 = Symbol();
var u = class extends o.EventedAccessor {
  get operations() {
    return this._controller?.operations;
  }
  get elevationInfo() {
    return {
      mode: "on-the-ground",
      offset: 0
    };
  }
  get _layerView() {
    const e2 = this.view.allLayerViews.find((e3) => e3.layer === this.layer);
    return "media-3d" === e2?.type ? e2 : null;
  }
  get visible() {
    return t(this._layerView, this.element);
  }
  get isDraped() {
    return true;
  }
  get origin() {
    return null;
  }
  get updating() {
    return !!this._controller?.updating;
  }
  get _controllerClass() {
    return "transform" === this.tool || "control-points" !== this.element.georeference?.type ? p : h2;
  }
  constructor(e2) {
    super(e2), this.tool = "transform";
  }
  initialize() {
    this.addHandles([d(() => this._controllerClass, (e2) => this._updateController(e2), A), v(() => this._layerView, "element-render-changed", ({
      element: e2
    }) => {
      this.element === e2 && this.emit("committed");
    })]);
  }
  toMap(e2) {
    const {
      layer: t2,
      element: o2
    } = this;
    return this.view.toMap(e2, {
      include: {
        layer: t2,
        element: o2
      }
    });
  }
  createManipulator(e2) {
    const {
      view: t2,
      layer: o2,
      element: r2
    } = this;
    return new m(__spreadValues({
      view: t2,
      layer: o2,
      element: r2
    }, e2));
  }
  _updateController(e2) {
    if (this._controller && this._controller instanceof e2) return;
    this.removeHandles(d3);
    const {
      view: t2,
      layer: r2,
      element: i
    } = this, l2 = () => {
      this.emit("modified-externally");
    };
    this._controller = new e2({
      view: t2,
      layer: r2,
      element: i,
      onModifiedExternally: l2
    }), l2(), this.addHandles(l(this._controller), d3);
  }
};
e([y({
  constructOnly: true
})], u.prototype, "view", void 0), e([y({
  constructOnly: true
})], u.prototype, "layer", void 0), e([y({
  constructOnly: true
})], u.prototype, "element", void 0), e([y()], u.prototype, "tool", void 0), e([y()], u.prototype, "_controller", void 0), e([y()], u.prototype, "elevationInfo", null), e([y()], u.prototype, "_layerView", null), e([y()], u.prototype, "visible", null), e([y()], u.prototype, "updating", null), e([y()], u.prototype, "_controllerClass", null), u = e([a("esri.views.3d.interactive.editingTools.ManipulatedObject3DMediaElement")], u);
export {
  u as ManipulatedObject3DMediaElement
};
//# sourceMappingURL=ManipulatedObject3DMediaElement-SOIRIRSC.js.map
