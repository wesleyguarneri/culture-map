import {
  L as L2,
  R as R2,
  T,
  b,
  d as d5,
  j as j4,
  v as v2
} from "./chunk-BZ5ZVZXL.js";
import {
  B,
  F as F2,
  G,
  I,
  M as M2,
  R as R3,
  U,
  b as b2,
  h as h4,
  u as u4,
  x as x2
} from "./chunk-HUMP672Y.js";
import {
  h as h5,
  r as r2
} from "./chunk-ZYQL5F6K.js";
import {
  e as e5
} from "./chunk-Y5NSUEIF.js";
import {
  l as l3
} from "./chunk-JBQJ3BUL.js";
import {
  w as w2
} from "./chunk-I5SWBGDW.js";
import {
  F,
  Z
} from "./chunk-LHQMQT36.js";
import {
  i as i2
} from "./chunk-473Y3NGA.js";
import {
  c,
  m
} from "./chunk-KYB3KTOZ.js";
import {
  R,
  v
} from "./chunk-SBMU7RBF.js";
import {
  x
} from "./chunk-TMPIWG43.js";
import {
  n
} from "./chunk-VRZ6RXNW.js";
import {
  c as c2,
  e2 as e4,
  t as t2,
  t2 as t3
} from "./chunk-Q666VSL3.js";
import {
  J,
  W
} from "./chunk-DBK2ELNZ.js";
import {
  a as a3,
  d as d4,
  f as f2,
  h as h3,
  j as j3
} from "./chunk-IIVUY2T7.js";
import {
  h as h2
} from "./chunk-GT3AQDRW.js";
import {
  a as a2
} from "./chunk-YZBHNRVB.js";
import {
  M,
  e as e3,
  f,
  j as j2,
  k as k2,
  l as l2,
  o as o2,
  u as u3
} from "./chunk-VS26W5Y5.js";
import {
  h
} from "./chunk-PVO5NM6Q.js";
import {
  E,
  j
} from "./chunk-6MR4UDDL.js";
import {
  t
} from "./chunk-N4KQPPPI.js";
import {
  d as d3
} from "./chunk-HD65DNIO.js";
import {
  g,
  k,
  u as u2
} from "./chunk-AXVPJBVW.js";
import {
  l,
  r
} from "./chunk-OXEPWRM7.js";
import {
  L
} from "./chunk-JJS7PR2U.js";
import {
  A,
  d as d2,
  w
} from "./chunk-6WHTZNUH.js";
import {
  V
} from "./chunk-EITGQLII.js";
import {
  d
} from "./chunk-XNUH25NY.js";
import {
  o
} from "./chunk-WGAPNV7F.js";
import {
  e as e2
} from "./chunk-4Z5SGKRM.js";
import {
  S,
  i3 as i
} from "./chunk-ANKOCGE2.js";
import {
  y
} from "./chunk-7CJXZOFG.js";
import {
  a3 as a
} from "./chunk-DDYVXG4F.js";
import {
  e
} from "./chunk-7DA6A5LD.js";
import {
  u
} from "./chunk-2MMLMOWS.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/undoredo/OperationStatus.js
var e6;
!function(e8) {
  e8[e8.NeverApplied = 0] = "NeverApplied", e8[e8.Applied = 1] = "Applied", e8[e8.Undone = 2] = "Undone";
}(e6 || (e6 = {}));

// ../../../node_modules/@arcgis/core/undoredo/UndoRedoError.js
var r3;
!function(r4) {
  r4.UndoRedoUpdating = "UndoRedoUpdating", r4.UndoInvalidError = "UndoInvalidError", r4.RedoInvalidError = "RedoInvalidError", r4.ApplyInvalidError = "ApplyInvalidError";
}(r3 || (r3 = {}));
var o3 = {
  [r3.UndoRedoUpdating]: "Cannot perform operation whilst undo redo is updating",
  [r3.UndoInvalidError]: "There are no items to Undo",
  [r3.RedoInvalidError]: "There are no items to Redo",
  [r3.ApplyInvalidError]: "Cannot apply an item that is already applied"
};
var d6 = class extends Error {
  constructor() {
    super(o3[r3.UndoRedoUpdating]), this.type = "undo-redo-updating-error";
  }
};
var n2 = class extends Error {
  constructor() {
    super(o3[r3.UndoInvalidError]), this.type = "undo-redo-undo-error";
  }
};
var e7 = class extends Error {
  constructor() {
    super(o3[r3.RedoInvalidError]), this.type = "undo-redo-redo-error";
  }
};
var t4 = class extends Error {
  constructor() {
    super(o3[r3.ApplyInvalidError]), this.type = "undo-redo-apply-error";
  }
};

// ../../../node_modules/@arcgis/core/undoredo/UndoableOperation.js
var a4;
!function(t5) {
  t5[t5.Apply = 0] = "Apply", t5[t5.Undo = 1] = "Undo", t5[t5.Redo = 2] = "Redo";
}(a4 || (a4 = {}));
var n3 = class extends S {
  constructor() {
    super(...arguments), this.name = "", this.tag = Symbol(), this.status = e6.NeverApplied;
  }
  get canUndo() {
    return this.status === e6.Applied;
  }
  get canRedo() {
    return this.status === e6.Undone;
  }
  executeUndoRedoOperation(t5) {
    return __async(this, null, function* () {
      switch (t5) {
        case a4.Apply:
          if (this.status !== e6.NeverApplied) throw new t4();
          return yield this.apply(), void (this.status = e6.Applied);
        case a4.Undo:
          if (this.status !== e6.Applied) throw new n2();
          return yield this.undo(), void (this.status = e6.Undone);
        case a4.Redo:
          if (this.status !== e6.Undone) throw new n2();
          return yield this.redo(), void (this.status = e6.Applied);
      }
    });
  }
};
e2([y()], n3.prototype, "name", void 0), e2([y()], n3.prototype, "tag", void 0), n3 = e2([a("esri.undoredo.UndoableOperation")], n3);

// ../../../node_modules/@arcgis/core/UndoRedo.js
var u5 = class extends S {
  constructor() {
    super(...arguments), this._stack = new V(), this._stackPosition = -1, this._updatingHandles = new h();
  }
  get updating() {
    return this._updatingHandles.updating;
  }
  get canUndo() {
    return this.hasUndo && !this.updating;
  }
  get hasUndo() {
    return this._stackPosition >= 0;
  }
  get canRedo() {
    return this.hasRedo && !this.updating;
  }
  get hasRedo() {
    return this._stackPosition < this._stack.length - 1;
  }
  _truncateForwardStack() {
    this._stack.splice(this._stackPosition + 1, this._stack.length - this._stackPosition).forEach((t5) => t5.destroy());
  }
  _drainStack() {
    this._stack.drain((t5) => t5.destroy()), this._stackPosition = -1;
  }
  undo() {
    return __async(this, null, function* () {
      if (!this.hasUndo) throw new n2();
      if (this.updating) throw new d6();
      const t5 = this._stack.getItemAt(this._stackPosition);
      yield this._updatingHandles.addPromise((() => __async(this, null, function* () {
        yield t5.executeUndoRedoOperation(a4.Undo), --this._stackPosition, t5.canRedo || this._truncateForwardStack();
      }))());
    });
  }
  redo() {
    return __async(this, null, function* () {
      if (!this.hasRedo) throw new e7();
      if (this.updating) throw new d6();
      const t5 = this._stack.getItemAt(this._stackPosition + 1);
      yield this._updatingHandles.addPromise((() => __async(this, null, function* () {
        yield t5.executeUndoRedoOperation(a4.Redo), ++this._stackPosition;
      }))());
    });
  }
  peekUndo() {
    return this.canUndo ? this._stack.getItemAt(this._stackPosition) : null;
  }
  peekRedo() {
    return this.canRedo ? this._stack.getItemAt(this._stackPosition + 1) : null;
  }
  inject(t5) {
    return __async(this, null, function* () {
      if (this.updating) throw new d6();
      yield this._updatingHandles.addPromise((() => __async(this, null, function* () {
        t5.status === e6.NeverApplied && (yield t5.executeUndoRedoOperation(a4.Apply)), t5.canUndo ? (this._stack.splice(this._stackPosition + 1, 0, t5), this._stackPosition++) : this._stackPosition > -1 && (this._stack.splice(0, this._stackPosition + 1).forEach((t6) => t6.destroy()), this._stackPosition = -1);
      }))());
    });
  }
  add(t5) {
    return __async(this, null, function* () {
      if (this.updating) throw new d6();
      yield this._updatingHandles.addPromise((() => __async(this, null, function* () {
        t5.status === e6.NeverApplied && (yield t5.executeUndoRedoOperation(a4.Apply)), this._stackPosition >= -1 && this._truncateForwardStack(), t5.canUndo ? (this._stack.push(t5), this._stackPosition = this._stack.length - 1) : this._drainStack();
      }))());
    });
  }
  removeTagged(t5, s = false) {
    return __async(this, null, function* () {
      if (this.updating && !s) return;
      yield w(() => !this.updating);
      const a5 = new V();
      for (let i5 = 0; i5 < this._stack.length; i5++) {
        const s2 = this._stack.getItemAt(i5);
        s2.tag === t5 ? (s2.destroy(), i5 === this._stackPosition && (this._stackPosition = a5.length - 1)) : a5.push(s2);
      }
      this._stack = a5, this._stackPosition > a5.length - 1 && (this._stackPosition = a5.length - 1);
    });
  }
  clear(t5 = false) {
    return __async(this, null, function* () {
      if (this.updating && !t5) throw new d6();
      yield w(() => !this.updating), this._drainStack();
    });
  }
};
e2([y()], u5.prototype, "_stack", void 0), e2([y()], u5.prototype, "_stackPosition", void 0), e2([y()], u5.prototype, "updating", null), e2([y({
  readOnly: true
})], u5.prototype, "canUndo", null), e2([y({
  readOnly: true
})], u5.prototype, "hasUndo", null), e2([y({
  readOnly: true
})], u5.prototype, "canRedo", null), e2([y({
  readOnly: true
})], u5.prototype, "hasRedo", null), u5 = e2([a("esri.UndoRedo")], u5);

// ../../../node_modules/@arcgis/core/views/draw/support/CreateOperationGeometry.js
var l4 = class {
  constructor() {
    this.committedVertices = null, this.cursorVertex = null, this.full = null, this.outline = null, this.cursorEdge = null, this.circle = null, this.rectangle = null;
  }
};

// ../../../node_modules/@arcgis/core/views/interactive/tooltip/infos/DrawCircleTooltipInfo.js
var i3 = class extends r2 {
  constructor(o4) {
    super(o4), this.type = "draw-circle", this.radius = null, this.xSize = null, this.ySize = null, this.area = d4;
  }
  get allFields() {
    return [];
  }
};
e2([y()], i3.prototype, "type", void 0), e2([y()], i3.prototype, "radius", void 0), e2([y()], i3.prototype, "xSize", void 0), e2([y()], i3.prototype, "ySize", void 0), e2([y()], i3.prototype, "area", void 0), e2([y()], i3.prototype, "allFields", null), i3 = e2([a("esri.views.interactive.tooltip.infos.DrawCircleTooltipInfo")], i3);

// ../../../node_modules/@arcgis/core/views/interactive/tooltip/infos/DrawMeshTooltipInfo.js
var p = class extends h4(r2) {
  constructor(o4) {
    super(o4), this.type = "draw-mesh", this.orientation = x2({
      lockable: false
    }), this.scale = F2({
      lockable: false
    });
  }
  get allFields() {
    return [this.longitude, this.latitude, this.x, this.y, this.elevation, this.orientation, this.scale];
  }
};
e2([y()], p.prototype, "helpMessage", void 0), e2([y()], p.prototype, "allFields", null), p = e2([a("esri.views.interactive.tooltip.infos.DrawMeshTooltipInfo")], p);

// ../../../node_modules/@arcgis/core/views/interactive/tooltip/infos/DrawPointTooltipInfo.js
var i4 = class extends h4(r2) {
  constructor(o4) {
    super(o4), this.type = "draw-point";
  }
  get allFields() {
    return [this.longitude, this.latitude, this.x, this.y, this.elevation];
  }
};
e2([y()], i4.prototype, "helpMessage", void 0), e2([y()], i4.prototype, "allFields", null), i4 = e2([a("esri.views.interactive.tooltip.infos.DrawPointTooltipInfo")], i4);

// ../../../node_modules/@arcgis/core/views/interactive/tooltip/infos/DrawPolygonTooltipInfo.js
var c3 = class extends h4(r2) {
  constructor(o4) {
    super(o4), this.type = "draw-polygon", this.direction = b2(), this.distance = I({
      title: (o5) => o5.messages.sketch.distance
    }), this.area = M2(), this.xyMode = "direction-distance";
  }
  get allFields() {
    return [this.direction, this.distance, this.longitude, this.latitude, this.x, this.y, this.elevation, this.area];
  }
};
e2([y()], c3.prototype, "xyMode", void 0), e2([y()], c3.prototype, "helpMessage", void 0), e2([y()], c3.prototype, "allFields", null), c3 = e2([a("esri.views.interactive.tooltip.infos.DrawPolygonTooltipInfo")], c3);

// ../../../node_modules/@arcgis/core/views/interactive/tooltip/infos/DrawPolylineTooltipInfo.js
var c4 = class extends h4(r2) {
  constructor(t5) {
    super(t5), this.type = "draw-polyline", this.direction = b2(), this.distance = I({
      title: (t6) => t6.messages.sketch.distance
    }), this.totalLength = U(), this.xyMode = "direction-distance";
  }
  get allFields() {
    return [this.direction, this.distance, this.longitude, this.latitude, this.x, this.y, this.elevation, this.totalLength];
  }
};
e2([y()], c4.prototype, "helpMessage", void 0), e2([y()], c4.prototype, "xyMode", void 0), e2([y()], c4.prototype, "allFields", null), c4 = e2([a("esri.views.interactive.tooltip.infos.DrawPolylineTooltipInfo")], c4);

// ../../../node_modules/@arcgis/core/views/interactive/tooltip/infos/DrawRectangleTooltipInfo.js
var p2 = class extends r2 {
  constructor(o4) {
    super(o4), this.type = "draw-rectangle", this.xSize = h3, this.ySize = h3, this.area = d4;
  }
  get allFields() {
    return [];
  }
};
e2([y()], p2.prototype, "type", void 0), e2([y()], p2.prototype, "xSize", void 0), e2([y()], p2.prototype, "ySize", void 0), e2([y()], p2.prototype, "area", void 0), e2([y()], p2.prototype, "allFields", null), p2 = e2([a("esri.views.interactive.tooltip.infos.DrawRectangleTooltipInfo")], p2);

// ../../../node_modules/@arcgis/core/views/draw/support/tooltipUtils.js
function M3(e8, t5) {
  return {
    point: new i4({
      sketchOptions: t5,
      viewType: e8
    }),
    polyline: new c4({
      sketchOptions: t5,
      viewType: e8
    }),
    polygon: new c3({
      sketchOptions: t5,
      viewType: e8
    }),
    mesh: new p({
      sketchOptions: t5,
      viewType: e8
    }),
    rectangle: new p2({
      sketchOptions: t5
    }),
    circle: new i3({
      sketchOptions: t5
    })
  };
}
function T2(e8) {
  const {
    directionOptions: t5,
    geometryType: o4,
    sketchOptions: n4,
    tooltipInfos: i5
  } = e8, r4 = (t6) => {
    const o5 = J2(e8).mode, n5 = i5[t6].elevation;
    "relative-to-ground" === o5 || "relative-to-scene" === o5 || "on-the-ground" === o5 ? n5.lock(N(e8)) : n5.unlock();
  }, c5 = (e9) => {
    if (t5) {
      const o5 = i5[e9].direction;
      o5.committed = t5.angle, o5.unlockOnVertexPlacement = false, n4.values.directionMode = t5.mode;
    }
  };
  switch (o4) {
    case "polygon":
    case "polyline":
      r4(o4), c5(o4);
      break;
    case "point":
    case "mesh":
      r4(o4);
  }
}
function b3(e8, t5) {
  const {
    drawOperation: o4,
    view: n4
  } = t5, i5 = I2(t5), r4 = J2(t5);
  if ("2d" === n4.type || !e8 || "absolute-height" !== r4.mode || 1 !== o4?.numCommittedVertices || !i5 || "draw-polyline" !== i5.type && "draw-polygon" !== i5.type || i5.elevation.locked) return;
  const [c5, l5, s] = e8, a5 = B2(c5, l5, s, r4, t5);
  null != a5 && i5.elevation.lock(a5);
}
function U2(e8) {
  I2(e8)?.allFields.forEach((e9) => {
    e9.unlockOnVertexPlacement && e9.unlock();
  });
}
function I2({
  geometryType: e8,
  graphic: t5,
  tooltipInfos: o4
}) {
  return "multipoint" === e8 || t5?.geometry?.type !== V2[e8] ? null : o4[e8];
}
var V2 = {
  point: "point",
  mesh: "mesh",
  polyline: "polyline",
  polygon: "polygon",
  circle: "polygon",
  rectangle: "polygon"
};
function D(e8, t5) {
  switch (e8?.type) {
    case "draw-point":
      P(e8, t5);
      break;
    case "draw-polyline":
      z(e8, t5);
      break;
    case "draw-polygon":
      S2(e8, t5);
      break;
    case "draw-rectangle":
      F3(e8, t5);
      break;
    case "draw-circle":
      A2(e8, t5);
      break;
    case "draw-mesh":
      G2(e8, t5);
  }
}
function P(e8, t5) {
  const o4 = t5.graphic?.geometry;
  "point" === o4?.type && (L3(e8, o4, t5), e8.helpMessage = e5("point", o4));
}
function G2(e8, t5) {
  const {
    graphic: o4,
    view: n4
  } = t5, i5 = o4?.geometry;
  "3d" === n4.type && "mesh" === i5?.type && (L3(e8, i5.origin, t5), R3(e8, i5), e8.helpMessage = i2(o4, n4));
}
function L3(e8, t5, o4) {
  const {
    drawOperation: n4,
    view: i5,
    sketchOptions: r4
  } = o4, {
    cursorVertex: c5
  } = n4;
  if (e8.sketchOptions = r4, e8.viewType = i5.type, e8.setLocationFromPoint(t5, K(o4)), H(e8.elevation, o4), !c5) return void (n4.constraints = void 0);
  const l5 = c5;
  n4.constraints = {
    context: Q(l5, o4),
    x: e8.x.committed,
    y: e8.y.committed,
    longitude: e8.longitude.committed,
    latitude: e8.latitude.committed,
    elevation: e8.elevation.committed,
    distance: null,
    direction: null
  };
}
function z(t5, o4) {
  const {
    createOperationGeometry: n4,
    drawOperation: i5
  } = o4, r4 = null != n4 ? n4.full : null;
  "polyline" === r4?.type && (Z2(t5, o4), t5.totalLength.actual = i5.lastVertex ? c(r4) ?? h3 : null, t5.helpMessage = e5("polyline", r4));
}
function S2(e8, o4) {
  const {
    createOperationGeometry: n4,
    drawOperation: i5
  } = o4, r4 = null != n4 ? n4.full : null;
  "polygon" === r4?.type && (Z2(e8, o4), e8.area.actual = i5.lastVertex ? u4(r4) ?? d4 : null, e8.helpMessage = e5("polygon", r4));
}
function Z2(t5, n4) {
  const {
    drawOperation: i5,
    sketchOptions: r4,
    view: c5
  } = n4, {
    cursorVertex: l5,
    lastVertex: s,
    secondToLastVertex: a5
  } = i5, p3 = r4.values.effectiveDirectionMode;
  t5.sketchOptions = r4, t5.viewType = c5.type;
  const u6 = s && l5 ? m(s, l5) ?? h3 : null;
  if (t5.distance.actual = u6, t5.distance.readOnly = null == s, t5.direction.actual = null, t5.direction.readOnly = true, s && l5 && ("absolute" === p3 || a5)) {
    const e8 = x(a5, s, l5, p3);
    t5.direction.actual = e8 ?? j3, t5.direction.readOnly = false;
  }
  t5.setLocationFromPoint(l5, K(n4)), H(t5.elevation, n4);
  const m2 = C(s, n4);
  t5.xyMode = m2, t5.direction.visible = "direction-distance" === m2, t5.distance.visible = "direction-distance" === m2, t5.effectiveX.visible = "coordinates" === m2, t5.effectiveY.visible = "coordinates" === m2;
  const d8 = l5 ?? s;
  i5.constraints = d8 ? {
    context: Q(d8, n4),
    x: t5.x.committed,
    y: t5.y.committed,
    longitude: t5.longitude.committed,
    latitude: t5.latitude.committed,
    elevation: t5.elevation.committed,
    distance: t5.distance.committed,
    direction: t5.direction.committed
  } : void 0;
}
function C(e8, {
  sketchOptions: t5
}) {
  const o4 = t5.tooltips.xyMode;
  return "auto" === o4 ? e8 ? "direction-distance" : "coordinates" : o4;
}
function F3(e8, t5) {
  e8.sketchOptions = t5.sketchOptions, e8.xSize = q(t5), e8.ySize = E2(t5), e8.area = R4(t5);
}
function A2(e8, t5) {
  const {
    forceUniformSize: o4,
    sketchOptions: n4
  } = t5;
  e8.sketchOptions = n4, e8.radius = o4 ? X(t5) : null, e8.xSize = o4 ? null : q(t5), e8.ySize = o4 ? null : E2(t5), e8.area = R4(t5);
}
function H(e8, t5) {
  const {
    drawOperation: o4
  } = t5, n4 = o4?.cursorVertex ?? o4?.lastVertex;
  e8.actual = R(n4) ?? N(t5), e8.visible = o4.hasZ, e8.readOnly = false, e8.showAsZ = true;
}
function R4(e8) {
  const o4 = e8.createOperationGeometry?.full;
  return "polygon" !== o4?.type ? d4 : u4(o4) ?? d4;
}
function q(t5) {
  const o4 = t5.createOperationGeometry?.rectangle?.midpoints;
  return (null != o4 ? m(o4.left, o4.right) : null) ?? h3;
}
function E2(t5) {
  const o4 = t5.createOperationGeometry?.rectangle?.midpoints;
  return (null != o4 ? m(o4.top, o4.bottom) : null) ?? h3;
}
function X({
  createOperationGeometry: t5
}) {
  return (null != t5?.circle?.center && null != t5.circle.edge ? m(t5.circle.center, t5.circle.edge) : null) ?? h3;
}
function Y(e8) {
  const {
    geometryType: t5,
    tooltipInfos: o4
  } = e8;
  switch (t5) {
    case "point":
    case "mesh":
    case "polyline":
    case "polygon": {
      const i5 = o4[t5].elevation.committed;
      if (!i5) return;
      return f2(i5, "meters") / L(K(e8));
    }
    default:
      return;
  }
}
function B2(e8, t5, o4, n4, i5) {
  const {
    view: r4,
    drawOperation: l5
  } = i5;
  if ("3d" !== r4.type || !l5) return;
  o4 ??= 0;
  const s = K(i5), a5 = J2(i5), p3 = E(r4, e8, t5, o4, s, a5, n4);
  return v(p3, s) ?? N(i5);
}
function J2(e8) {
  return e8.drawOperation.elevationInfo ?? j;
}
function K(e8) {
  return e8.drawOperation.coordinateHelper.spatialReference;
}
function N(e8) {
  const t5 = L(K(e8));
  return a3(e8.defaultZ * t5, "meters");
}
function Q(e8, t5) {
  return Z(e8, t5.view, K(t5), J2(t5), t5.drawOperation.coordinateHelper.hasZ(), t5.sketchOptions.values.effectiveDirectionMode);
}

// ../../../node_modules/@arcgis/core/views/draw/DrawGraphicTool.js
var E3 = class extends o.EventedMixin(n) {
  constructor(t5) {
    super(t5), this._graphic = null, this._coordinateFormatterLoadTask = null, this._createOperationGeometry = null, this.defaultZ = 0, this.directionOptions = null, this.geometryType = null, this.hasZ = true, this.geometryToPlace = null, this.snappingManager = null, this.snapToScene = false, this.sketchOptions = new l3();
  }
  initialize() {
    const {
      view: t5
    } = this;
    this.internalGraphicsLayer = new h2({
      listMode: "hide",
      internal: true
    }), this.view.map.layers.add(this.internalGraphicsLayer);
    const e8 = this.drawOperation = this.makeDrawOperation();
    this.tooltipInfos = M3(t5.type, this.sketchOptions);
    const o4 = this.tooltip = new h5({
      view: t5
    });
    T2(this._tooltipsContext), this._coordinateFormatterLoadTask = d(() => w2()), this.addHandles([e8.on("vertex-add", (t6) => this.onVertexAdd(t6)), e8.on("vertex-remove", (t6) => this.onVertexRemove(t6)), e8.on("vertex-update", (t6) => this.onVertexUpdate(t6)), e8.on("cursor-update", (t6) => this.onCursorUpdate(t6)), e8.on("cursor-remove", () => this._updateGraphic()), e8.on("complete", (t6) => this.onComplete(t6)), this._coordinateFormatterLoadTask, o4.on("paste", (t6) => B(t6, this.activeTooltipInfo)), d2(() => this.cursor, (t6) => {
      e8.cursor = t6;
    }, A), i(() => {
      const {
        activeTooltipInfo: t6,
        sketchOptions: e9
      } = this;
      D(t6, this._tooltipsContext), o4.info = e9.tooltips.effectiveEnabled ? t6 : null;
    }), i(() => {
      e8.constraintZ = Y(this._tooltipsContext);
    })]), this.finishToolCreation();
  }
  destroy() {
    this.drawOperation = u(this.drawOperation), this.tooltip = u(this.tooltip), this._destroyAllVisualizations(), this.view.map.remove(this.internalGraphicsLayer), this.internalGraphicsLayer = u(this.internalGraphicsLayer), this._set("view", null);
  }
  get _drawSpatialReference() {
    return this.drawOperation.coordinateHelper.spatialReference;
  }
  get _tooltipsContext() {
    return {
      createOperationGeometry: this._createOperationGeometry,
      defaultZ: this.defaultZ,
      directionOptions: this.directionOptions,
      drawOperation: this.drawOperation,
      forceUniformSize: this.forceUniformSize,
      geometryType: this.geometryType,
      graphic: this.graphic,
      sketchOptions: this.sketchOptions,
      tooltipInfos: this.tooltipInfos,
      view: this.view
    };
  }
  get canRedo() {
    return this.drawOperation.canRedo;
  }
  get canUndo() {
    return this.drawOperation.canUndo;
  }
  set centered(t5) {
    this._set("centered", t5), this._updateGraphic();
  }
  get cursor() {
    return this._get("cursor");
  }
  set cursor(t5) {
    this._set("cursor", t5);
  }
  set enabled(t5) {
    this.drawOperation.interactive = t5, this._set("enabled", t5);
  }
  set forceUniformSize(t5) {
    this._set("forceUniformSize", t5), this._updateGraphic();
  }
  get graphic() {
    return this._graphic;
  }
  set graphicSymbol(t5) {
    this._set("graphicSymbol", t5), null != this._graphic && (this._graphic.symbol = t5);
  }
  set mode(t5) {
    const e8 = this.drawOperation;
    e8 && (e8.drawingMode = t5), this._set("mode", t5);
  }
  get updating() {
    return this.drawOperation?.updating ?? false;
  }
  get undoRedo() {
    const {
      view: {
        type: t5,
        map: e8
      }
    } = this;
    return "2d" === t5 && e8 && "undoRedo" in e8 && e8.undoRedo instanceof u5 ? e8.undoRedo : null;
  }
  set undoRedo(t5) {
    this._override("undoRedo", t5);
  }
  completeCreateOperation() {
    this.drawOperation.complete();
  }
  onInputEvent(t5) {
    this.destroyed || G(t5, this.tooltip) || this.drawOperation.onInputEvent(t5);
  }
  redo() {
    this.drawOperation.redo();
  }
  reset() {
  }
  undo() {
    this.drawOperation.undo(), 0 === this.drawOperation.numCommittedVertices && T2(this._tooltipsContext);
  }
  _destroyAllVisualizations() {
    this.removeHandles(A3.outline), this.removeHandles(A3.regularVertices), this.removeHandles(A3.activeVertex), this.removeHandles(A3.activeEdge), this.removeHandles(I3);
  }
  _createOrUpdateGraphic(t5) {
    if (null != this._graphic) return this.updateGraphicGeometry(t5), this._graphic;
    const o4 = new d3(__spreadProps(__spreadValues({}, this.graphicProperties), {
      symbol: this.graphicSymbol
    }));
    return this._graphic = o4, this.updateGraphicGeometry(t5), this.internalGraphicsLayer.add(o4), this.addHandles(this.initializeGraphic(o4)), this.notifyChange("graphic"), this.addHandles(e(() => {
      this.internalGraphicsLayer.remove(o4), this._graphic === o4 && (this._graphic = null);
    }), I3), o4;
  }
  updateGraphicGeometry(t5) {
    this._graphic.geometry = t5;
  }
  _getCreateOperationGeometry(t5 = {
    operationComplete: false
  }) {
    if (null == this.drawOperation) return;
    const {
      coordinateHelper: e8,
      view: o4,
      visualizationCursorVertex: r4,
      lastVertex: i5,
      committedVertices: s,
      geometryIncludingUncommittedVertices: n4,
      numCommittedVertices: a5
    } = this.drawOperation;
    if (!(a5 > 0 || null != r4)) return;
    const p3 = t5.operationComplete ? s : n4, l5 = p3.length, c5 = null != r4 ? e8.pointToArray(r4) : null, h7 = this._drawSpatialReference, d8 = "3d" === o4.type && "global" === o4.viewingMode, G3 = new l4();
    G3.committedVertices = s, G3.cursorVertex = c5;
    const {
      geometryType: x3
    } = this;
    switch (x3) {
      case "point":
      case "mesh":
        G3.full = e8.arrayToPoint(p3[0]);
        break;
      case "multipoint":
        G3.full = l5 > 0 ? d5(p3, h7) : null;
        break;
      case "polyline":
      case "polygon":
        l5 > 0 && (G3.full = "polygon" === x3 ? j4([p3], h7, d8, true) : R2([p3], h7, d8), G3.cursorEdge = null != c5 && i5 && !a2(r4, i5) ? R2([[c5, e8.pointToArray(i5)]], h7, d8) : null, G3.outline = l5 > 1 ? G3.full : null);
        break;
      case "circle":
      case "rectangle": {
        if (G3.committedVertices = G3.cursorVertex = null, !l5) break;
        const e9 = F(o4, p3[0]), r5 = p3[0], i6 = e9.makeMapPoint(r5[0] + M4 * o4.resolution, r5[1]);
        "circle" === x3 ? 1 === l5 && t5.operationComplete ? G3.circle = L2([r5, i6], e9, true) : 2 === l5 && (this.forceUniformSize ? G3.circle = L2(p3, e9, this.centered) : G3.rectangle = v2(p3, e9, this.centered)) : 1 === l5 && t5.operationComplete ? G3.rectangle = T([r5, i6], e9, true) : 2 === l5 && (G3.rectangle = this.forceUniformSize ? T(p3, e9, this.centered) : b(p3, e9, this.centered)), G3.full = null != G3.circle ? G3.circle.geometry : G3.rectangle?.geometry, G3.outline = "polygon" === G3.full?.type ? G3.full : null;
        break;
      }
      default:
        return null;
    }
    return G3;
  }
  initializeGraphic(t5) {
    return e();
  }
  onComplete(t5) {
    if (!this.drawOperation) return;
    this._updateGraphic();
    let e8 = null;
    if (this.drawOperation.isCompleted) {
      const t6 = this._getCreateOperationGeometry({
        operationComplete: true
      });
      null != t6 && (e8 = this._createOrUpdateGraphic(t6.full));
    }
    this._createOperationGeometry = null, this.emit("complete", __spreadValues({
      graphic: e8
    }, t5));
  }
  onCursorUpdate(t5) {
    this._updateGraphic(), this.emit("cursor-update", t5);
  }
  onDeactivate() {
    const {
      drawOperation: t5
    } = this;
    t5 && (t5.isCompleted || t5.cancel());
  }
  onOutlineChanged(t5) {
    return e();
  }
  onCursorEdgeChanged(t5) {
    return e();
  }
  onVertexAdd(t5) {
    U2(this._tooltipsContext), this._updateGraphic(), b3(t5.vertices.at(0)?.coordinates, this._tooltipsContext), this.emit("vertex-add", t5);
  }
  onVertexRemove(t5) {
    U2(this._tooltipsContext), this._updateGraphic(), this.emit("vertex-remove", t5);
  }
  onVertexUpdate(t5) {
    this._updateGraphic(), this.emit("vertex-update", t5);
  }
  _updateGraphic() {
    const t5 = this._getCreateOperationGeometry();
    this._createOperationGeometry = t5, null != t5 ? (null != t5.cursorEdge ? this.addHandles(this.onCursorEdgeChanged(t5.cursorEdge), A3.activeEdge) : this.removeHandles(A3.activeEdge), null != t5.outline ? this.addHandles(this.onOutlineChanged(t5.outline), A3.outline) : this.removeHandles(A3.outline), null != t5.committedVertices ? this.addHandles(this.onRegularVerticesChanged(t5.committedVertices), A3.regularVertices) : this.removeHandles(A3.regularVertices), null != t5.cursorVertex ? this.addHandles(this.onActiveVertexChanged(t5.cursorVertex), A3.activeVertex) : this.removeHandles(A3.activeVertex), null != t5.full ? this._createOrUpdateGraphic(t5.full) : this.removeHandles(I3)) : this._destroyAllVisualizations();
  }
  get activeTooltipInfo() {
    return this._coordinateFormatterLoadTask?.finished ? I2(this._tooltipsContext) : null;
  }
};
e2([y()], E3.prototype, "_coordinateFormatterLoadTask", void 0), e2([y()], E3.prototype, "_createOperationGeometry", void 0), e2([y()], E3.prototype, "_tooltipsContext", null), e2([y({
  value: true
})], E3.prototype, "centered", null), e2([y()], E3.prototype, "cursor", null), e2([y({
  nonNullable: true
})], E3.prototype, "defaultZ", void 0), e2([y({
  constructOnly: true
})], E3.prototype, "directionOptions", void 0), e2([y()], E3.prototype, "drawOperation", void 0), e2([y({
  value: true
})], E3.prototype, "enabled", null), e2([y({
  value: true
})], E3.prototype, "forceUniformSize", null), e2([y({
  constructOnly: true
})], E3.prototype, "geometryType", void 0), e2([y()], E3.prototype, "graphic", null), e2([y({
  constructOnly: true
})], E3.prototype, "graphicProperties", void 0), e2([y()], E3.prototype, "graphicSymbol", null), e2([y({
  constructOnly: true
})], E3.prototype, "hasZ", void 0), e2([y({
  constructOnly: true
})], E3.prototype, "geometryToPlace", void 0), e2([y()], E3.prototype, "mode", null), e2([y()], E3.prototype, "snappingManager", void 0), e2([y()], E3.prototype, "snapToScene", void 0), e2([y()], E3.prototype, "tooltip", void 0), e2([y()], E3.prototype, "tooltipInfos", void 0), e2([y({
  constructOnly: true,
  type: l3
})], E3.prototype, "sketchOptions", void 0), e2([y()], E3.prototype, "updating", null), e2([y({
  constructOnly: true,
  nonNullable: true
})], E3.prototype, "view", void 0), e2([y({
  constructOnly: true
})], E3.prototype, "undoRedo", null), e2([y()], E3.prototype, "activeTooltipInfo", null), E3 = e2([a("esri.views.draw.DrawGraphicTool")], E3);
var I3 = Symbol("create-operation-graphic");
var A3 = {
  outline: Symbol("outline-visual"),
  regularVertices: Symbol("regular-vertices-visual"),
  activeVertex: Symbol("active-vertex-visual"),
  activeEdge: Symbol("active-edge-visual")
};
function F4(t5) {
  switch (t5) {
    case "point":
    case "polyline":
    case "polygon":
    case "multipoint":
      return t5;
    case "circle":
    case "rectangle":
      return "segment";
    case "mesh":
      return "point";
  }
}
var M4 = 48;

// ../../../node_modules/@arcgis/core/views/interactive/editGeometry/support/editPlaneUtils.js
function d7(o4, i5) {
  return T3(o4, i5, false);
}
function E4(o4, i5) {
  return T3(o4, i5, true);
}
function T3(o4, i5, r4) {
  if (o4 instanceof t2) {
    if (o4.operation instanceof t3) return V3(o4.operation, i5, r4), true;
    if (o4.operation instanceof e4) return v3(o4.operation, i5, r4), true;
    if (o4.operation instanceof c2) return h6(o4.operation, i5, r4), true;
  }
  return false;
}
function V3(o4, i5, r4 = false) {
  const t5 = r4 ? -1 : 1, s = r(t5 * o4.dx, t5 * o4.dy, t5 * o4.dz);
  u2(i5.origin, i5.origin, s), J(i5);
}
function v3(o4, i5, r4 = false) {
  const t5 = r4 ? -o4.angle : o4.angle;
  k(i5.basis1, i5.basis1, l, t5), k(i5.basis2, i5.basis2, l, t5), J(i5);
}
function h6(i5, r4, t5 = false) {
  const s = t5 ? 1 / i5.factor1 : i5.factor1, n4 = t5 ? 1 / i5.factor2 : i5.factor2;
  g(r4.basis1, r4.basis1, s), g(r4.basis2, r4.basis2, n4), k2(r4.origin, r4.origin, i5.origin, i5.axis1, s), k2(r4.origin, r4.origin, i5.origin, i5.axis2, n4), J(r4);
}
function F5(o4, c5, f3, m2) {
  m2 || (m2 = W());
  const p3 = o2(t.get(), o4[1], -o4[0]), g2 = o2(t.get(), Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY), N2 = o2(t.get(), Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY), j5 = t.get();
  c5.components.forEach((n4) => n4.vertices.forEach(({
    pos: n5
  }) => {
    o2(j5, j2(o4, n5), j2(p3, n5)), f(g2, g2, j5), M(N2, N2, j5);
  }));
  const l5 = 1e-6, x3 = o2(t.get(), N2[0] - g2[0] < l5 ? f3 / 2 : 0, N2[1] - g2[1] < l5 ? f3 / 2 : 0);
  return e3(g2, g2, x3), u3(N2, N2, x3), l2(m2.basis1, o4, (N2[0] - g2[0]) / 2), l2(m2.basis2, p3, (N2[1] - g2[1]) / 2), o2(m2.origin, g2[0] * o4[0] + g2[1] * p3[0], g2[0] * o4[1] + g2[1] * p3[1]), u3(m2.origin, m2.origin, m2.basis1), u3(m2.origin, m2.origin, m2.basis2), J(m2), m2;
}

export {
  E3 as E,
  F4 as F,
  d7 as d,
  E4 as E2,
  F5 as F2
};
//# sourceMappingURL=chunk-TO7VTJYA.js.map
