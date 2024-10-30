import {
  E2 as E
} from "./chunk-Q666VSL3.js";
import "./chunk-67V5AGVJ.js";
import {
  a as a2,
  b
} from "./chunk-TG5SAXSX.js";
import "./chunk-M6OMH2UP.js";
import "./chunk-Q7ENCKPJ.js";
import "./chunk-OHXCVJMH.js";
import "./chunk-VS26W5Y5.js";
import {
  h
} from "./chunk-PVO5NM6Q.js";
import "./chunk-KKD7A2GN.js";
import "./chunk-N4KQPPPI.js";
import "./chunk-4OGGMTIH.js";
import "./chunk-NQVBBKAN.js";
import "./chunk-DY7FJHTG.js";
import {
  c
} from "./chunk-Q4KYZS3X.js";
import "./chunk-JYODC3YQ.js";
import "./chunk-BQZBOYBD.js";
import "./chunk-TYQXPPSP.js";
import "./chunk-N6TJI25E.js";
import "./chunk-CIW3KHOW.js";
import "./chunk-IMVP5ADD.js";
import "./chunk-H7WPOTQH.js";
import {
  I,
  K,
  N
} from "./chunk-DUTZNK67.js";
import "./chunk-IN6BQCWS.js";
import "./chunk-RXWBJSJ5.js";
import "./chunk-HT2T6PUB.js";
import "./chunk-GAW5JHG4.js";
import "./chunk-OEKKQXBD.js";
import "./chunk-S3IO7V4Q.js";
import "./chunk-7ZJ6P7J7.js";
import "./chunk-5I6J67HP.js";
import "./chunk-BDM2D6IC.js";
import "./chunk-U2ZVAEKG.js";
import "./chunk-EDSMXTFO.js";
import "./chunk-OGZAGPIO.js";
import "./chunk-HJJIIYFF.js";
import {
  j
} from "./chunk-T6GCUITX.js";
import "./chunk-TUIGM7TV.js";
import "./chunk-IHVSZYZS.js";
import "./chunk-6CA6K3O7.js";
import "./chunk-NYQ5CYNR.js";
import {
  _
} from "./chunk-O7UDKFOW.js";
import "./chunk-TKPMIAIW.js";
import "./chunk-NQOJNTB3.js";
import "./chunk-MFOQYQFG.js";
import "./chunk-NKCPFCP3.js";
import "./chunk-3ZXOUEQG.js";
import {
  x
} from "./chunk-AXVPJBVW.js";
import {
  n
} from "./chunk-OXEPWRM7.js";
import "./chunk-POILQGXA.js";
import "./chunk-JJS7PR2U.js";
import "./chunk-L5YS4GSA.js";
import "./chunk-PRREDSOB.js";
import "./chunk-V5C6HSAM.js";
import "./chunk-SYATLP3H.js";
import "./chunk-V6AMQYXE.js";
import {
  A,
  C,
  P,
  d,
  v
} from "./chunk-6WHTZNUH.js";
import "./chunk-EITGQLII.js";
import "./chunk-TIVJXVMN.js";
import "./chunk-XNUH25NY.js";
import {
  o
} from "./chunk-WGAPNV7F.js";
import "./chunk-BXQGM56A.js";
import {
  e
} from "./chunk-4Z5SGKRM.js";
import {
  S
} from "./chunk-ANKOCGE2.js";
import {
  y
} from "./chunk-7CJXZOFG.js";
import "./chunk-IRGZKO7V.js";
import "./chunk-5SELS7VU.js";
import {
  a3 as a
} from "./chunk-DDYVXG4F.js";
import "./chunk-ANP42J2U.js";
import "./chunk-HJY2YILU.js";
import {
  l
} from "./chunk-7DA6A5LD.js";
import "./chunk-2MMLMOWS.js";
import "./chunk-4323ZVPF.js";
import "./chunk-WYIDUUN2.js";
import {
  O
} from "./chunk-DXLOWWK7.js";
import {
  __async,
  __spreadValues
} from "./chunk-JWIQHGQB.js";

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
//# sourceMappingURL=ManipulatedObject3DMediaElement-PCVZDLWD.js.map
