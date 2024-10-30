import {
  E2 as E
} from "./chunk-Q666VSL3.js";
import {
  k,
  x
} from "./chunk-TLAW3ACJ.js";
import {
  o
} from "./chunk-F2TT4B6M.js";
import {
  g
} from "./chunk-CZQYBYHB.js";
import {
  p
} from "./chunk-6MR4UDDL.js";
import {
  K
} from "./chunk-DUTZNK67.js";
import {
  c
} from "./chunk-7ZJ6P7J7.js";
import {
  e as e2
} from "./chunk-3ZXOUEQG.js";
import {
  V
} from "./chunk-EITGQLII.js";
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
  a3 as a2
} from "./chunk-DDYVXG4F.js";
import {
  L
} from "./chunk-HJY2YILU.js";
import {
  a
} from "./chunk-WYIDUUN2.js";
import {
  O
} from "./chunk-DXLOWWK7.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/views/interactive/dragEventPipeline.js
function i(t, n2) {
  let e3 = null, r = null;
  return (a4) => {
    if ("cancel" === a4.action) return void (null != r && (r.execute({
      action: "cancel"
    }), e3 = null, r = null));
    const o2 = {
      action: a4.action,
      screenStart: a4.start,
      screenEnd: a4.screenPoint
    };
    "start" === a4.action && null == e3 && (e3 = new w(), r = new w(), n2(t, e3, r, a4.pointerType, o2)), null != e3 && e3.execute(o2), "end" === a4.action && null != e3 && (e3 = null, r = null);
  };
}
function p2(t, n2) {
  return t.events.on("drag", i(t, n2));
}
function m(t, n2) {
  const e3 = [t.x, t.y, t.z ?? 0], r = n2, a4 = [Math.cos(r), Math.sin(r)], o2 = Math.sqrt(a4[0] * a4[0] + a4[1] * a4[1]);
  if (0 === o2) return null;
  a4[0] /= o2, a4[1] /= o2;
  const l = (t2) => {
    const n3 = (t2.x - e3[0]) * a4[0] + (t2.y - e3[1]) * a4[1];
    t2.x = e3[0] + n3 * a4[0], t2.y = e3[1] + n3 * a4[1];
  };
  return (t2) => (l(t2.mapStart), l(t2.mapEnd), __spreadProps(__spreadValues({}, t2), {
    axis: a4
  }));
}
function f(t) {
  let n2 = null;
  return (e3) => {
    if ("start" === e3.action && (n2 = y2(t, e3.mapStart.spatialReference)), null == n2) return null;
    const r = e3.mapEnd.x - e3.mapStart.x, a4 = e3.mapEnd.y - e3.mapStart.y, o2 = (e3.mapEnd.z ?? 0) - (e3.mapStart.z ?? 0);
    return n2.move(r, a4, o2, e3.action), __spreadProps(__spreadValues({}, e3), {
      translationX: r,
      translationY: a4,
      translationZ: o2
    });
  };
}
function d(t, n2) {
  return null == t ? null : t.spatialReference.equals(n2) ? t.clone() : K(t, n2);
}
function y2(t, n2) {
  const e3 = t.operations;
  if (!e3) return null;
  const r = e3.data.geometry, c2 = k(n2);
  if (r.spatialReference.equals(c2)) return x2(t, e3, () => {
  });
  if ("mesh" !== r.type) {
    const n3 = d(r, c2);
    if (null == n3) return null;
    const o2 = r.spatialReference;
    return x2(t, E.fromGeometry(n3, e3.viewingMode), () => {
      const t2 = K(r, o2);
      e3.trySetGeometry(t2);
    });
  }
  if (g(r)) {
    const n3 = d(r.origin, c2);
    if (!n3) return null;
    const o2 = r.spatialReference, l = E.fromGeometry(n3, e3.viewingMode);
    return x2(t, e3, () => {
      const t2 = K(l.data.geometry, o2), n4 = t2.x - r.origin.x, c3 = t2.y - r.origin.y, s = (t2.z ?? 0) - (r.origin.z ?? 0);
      e3.move(n4, c3, s);
    });
  }
  return null;
}
function x2(t, n2, e3) {
  let r = 0, a4 = 0, o2 = 0;
  return {
    move: (l, c2, s, u) => {
      "start" === u && (r = 0, a4 = 0, o2 = 0);
      const i3 = l - r, p3 = c2 - a4, m2 = s - o2;
      n2.move(i3, p3, m2), r += i3, a4 += p3, o2 += m2, e3(), "end" === u && t.endInteraction?.();
    }
  };
}
function E2(t, n2 = null, e3) {
  let r = null;
  const o2 = null == n2 || t.spatialReference?.equals(n2) ? (t2) => t2 : (t2) => null != t2 ? K(t2, n2) : t2, l = __spreadValues({
    exclude: []
  }, e3);
  return (n3) => {
    if ("start" === n3.action && (r = o2(t.toMap(n3.screenStart, l))), null == r) return null;
    const e4 = o2(t.toMap(n3.screenEnd, l));
    return null != e4 ? __spreadProps(__spreadValues({}, n3), {
      mapStart: r,
      mapEnd: e4
    }) : null;
  };
}
function S2(n2) {
  const e3 = n2.map((t) => f(t)).filter(O);
  return (t) => {
    const n3 = t.mapEnd.x - t.mapStart.x, r = t.mapEnd.y - t.mapStart.y, a4 = t.mapEnd.z - t.mapStart.z;
    return e3.forEach((n4) => n4(t)), __spreadProps(__spreadValues({}, t), {
      translationX: n3,
      translationY: r,
      translationZ: a4
    });
  };
}
function h(t, e3) {
  const r = /* @__PURE__ */ new Map();
  for (const a4 of e3) r.set(a4, a(t[a4]));
  return (n2) => (r.forEach((n3, e4) => {
    t[e4] = n3;
  }), n2);
}
function g2(t) {
  const n2 = t.operations?.createResetState();
  return (t2) => (n2?.remove(), t2);
}
function z(t) {
  const n2 = t.map((t2) => g2(t2)).filter((t2) => null != t2);
  return (t2) => (n2.forEach((n3) => n3(t2)), t2);
}
function v() {
  let t = 0, n2 = 0, e3 = 0;
  return (r) => {
    "start" === r.action && (t = r.mapStart.x, n2 = r.mapStart.y, e3 = r.mapStart.z);
    const a4 = r.mapEnd.x - t, o2 = r.mapEnd.y - n2, l = r.mapEnd.z - e3;
    return t = r.mapEnd.x, n2 = r.mapEnd.y, e3 = r.mapEnd.z, __spreadProps(__spreadValues({}, r), {
      mapDeltaX: a4,
      mapDeltaY: o2,
      mapDeltaZ: l,
      mapDeltaSpatialReference: r.mapStart.spatialReference
    });
  };
}
function j() {
  let t = 0, n2 = 0;
  return (e3) => {
    "start" === e3.action && (t = e3.screenStart.x, n2 = e3.screenStart.y);
    const r = e3.screenEnd.x - t, a4 = e3.screenEnd.y - n2;
    return t = e3.screenEnd.x, n2 = e3.screenEnd.y, __spreadProps(__spreadValues({}, e3), {
      screenDeltaX: r,
      screenDeltaY: a4
    });
  };
}
function M(t, n2) {
  let a4 = null, o2 = 0, l = 0;
  return (c2) => {
    if ("start" === c2.action && (a4 = t.toScreen?.(n2), null != a4 && (a4.x < 0 || a4.x > t.width || a4.y < 0 || a4.y > t.height ? a4 = null : (o2 = c2.screenStart.x - a4.x, l = c2.screenStart.y - a4.y))), null == a4) return null;
    const s = e2(c2.screenEnd.x - o2, 0, t.width), u = e2(c2.screenEnd.y - l, 0, t.height), i3 = c(s, u);
    return c2.screenStart = a4, c2.screenEnd = i3, c2;
  };
}
var R = () => {
};
var w = class _w {
  constructor() {
    this.execute = R;
  }
  next(t, n2 = new _w()) {
    return null != t && (this.execute = (e3) => {
      const r = t(e3);
      null != r && n2.execute(r);
    }), n2;
  }
};
function D(t, n2, e3 = []) {
  if ("2d" === t.type) return (t2) => t2;
  let r = null;
  return (a4) => {
    "start" === a4.action && (r = t.toMap(a4.screenStart, {
      exclude: e3
    }), null != r && (r.z = p(r, t, n2)));
    const o2 = t.toMap(a4.screenEnd, {
      exclude: e3
    });
    null != o2 && (o2.z = p(o2, t, n2));
    const l = null != r && null != o2 ? {
      sceneStart: r,
      sceneEnd: o2
    } : null;
    return __spreadProps(__spreadValues({}, a4), {
      scenePoints: l
    });
  };
}
function G(t, n2, e3) {
  const r = n2.elevationProvider.getElevation(t.x, t.y, t.z ?? 0, t.spatialReference, "scene") ?? 0, a4 = x(t);
  return a4.z = r, a4.hasZ = true, a4.z = p(a4, n2, e3), a4;
}
function U(t, n2) {
  if ("2d" === t.type) return (t2) => t2;
  let e3 = null;
  return (r) => {
    "start" === r.action && (e3 = G(r.mapStart, t, n2));
    const a4 = G(r.mapEnd, t, n2), o2 = null != e3 && null != a4 ? {
      sceneStart: e3,
      sceneEnd: a4
    } : null;
    return __spreadProps(__spreadValues({}, r), {
      scenePoints: o2
    });
  };
}

// ../../../node_modules/@arcgis/core/views/interactive/ManipulatorCollection.js
var a3;
!function(t) {
  t[t.WhenToolEditable = 0] = "WhenToolEditable", t[t.WhenToolNotEditable = 1] = "WhenToolNotEditable", t[t.Always = 2] = "Always";
}(a3 || (a3 = {}));
var i2 = class {
  constructor() {
    this._isToolEditable = true, this._manipulators = new V(), this._resourceContexts = {
      manipulator3D: {}
    }, this._attached = false;
  }
  set isToolEditable(t) {
    this._isToolEditable = t;
  }
  get length() {
    return this._manipulators.length;
  }
  add(t, i3 = a3.WhenToolEditable) {
    this.addMany([t], i3);
  }
  addMany(t, i3 = a3.WhenToolEditable) {
    for (const a4 of t) {
      const t2 = {
        manipulator: a4,
        visibilityPredicate: i3,
        attached: false
      };
      this._manipulators.add(t2), this._attached && this._updateManipulatorAttachment(t2);
    }
  }
  remove(t) {
    for (let a4 = 0; a4 < this._manipulators.length; a4++) if (this._manipulators.at(a4).manipulator === t) {
      const t2 = this._manipulators.splice(a4, 1)[0];
      this._detachManipulator(t2);
      break;
    }
  }
  removeAll() {
    this._manipulators.forEach((t) => {
      this._detachManipulator(t);
    }), this._manipulators.removeAll();
  }
  attach() {
    this._manipulators.forEach((t) => {
      this._updateManipulatorAttachment(t);
    }), this._attached = true;
  }
  detach() {
    this._manipulators.forEach((t) => {
      this._detachManipulator(t);
    }), this._attached = false;
  }
  destroy() {
    this.detach(), this._manipulators.forEach(({
      manipulator: t
    }) => t.destroy()), this._manipulators.destroy(), this._resourceContexts = null;
  }
  on(t, a4) {
    return this._manipulators.on(t, (t2) => {
      a4(t2);
    });
  }
  forEach(t) {
    for (const a4 of this._manipulators.items) t(a4);
  }
  some(t) {
    return this._manipulators.items.some(t);
  }
  toArray() {
    const t = [];
    return this.forEach((a4) => t.push(a4.manipulator)), t;
  }
  intersect(t, a4) {
    let i3 = null, e3 = Number.MAX_VALUE;
    return this._manipulators.forEach(({
      manipulator: o2,
      attached: s
    }) => {
      if (!s || !o2.interactive) return;
      const r = o2.intersectionDistance(t, a4);
      null != r && r < e3 && (e3 = r, i3 = o2);
    }), i3;
  }
  _updateManipulatorAttachment(t) {
    this._isManipulatorItemVisible(t) ? this._attachManipulator(t) : this._detachManipulator(t);
  }
  _attachManipulator(t) {
    t.attached || (t.manipulator.attach && t.manipulator.attach(this._resourceContexts), t.attached = true);
  }
  _detachManipulator(t) {
    if (!t.attached) return;
    const a4 = t.manipulator;
    a4.grabbing = false, a4.dragging = false, a4.hovering = false, a4.selected = false, a4.detach && a4.detach(this._resourceContexts), t.attached = false;
  }
  _isManipulatorItemVisible(t) {
    return t.visibilityPredicate === a3.Always || (this._isToolEditable ? t.visibilityPredicate === a3.WhenToolEditable : t.visibilityPredicate === a3.WhenToolNotEditable);
  }
};

// ../../../node_modules/@arcgis/core/views/interactive/InteractiveToolBase.js
var n = class extends S {
  constructor(t) {
    super(t), this.manipulators = new i2(), this.automaticManipulatorSelection = true, this.hasGrabbedManipulators = false, this.hasHoveredManipulators = false, this.firstGrabbedManipulator = null, this.created = false, this.removeIncompleteOnCancel = true, this._editableFlags = /* @__PURE__ */ new Map([[o.MANAGER, true], [o.USER, true]]), this._creationFinishedResolver = L();
  }
  get active() {
    return null != this.view && this.view.activeTool === this;
  }
  set visible(t) {
    this._get("visible") !== t && (this._set("visible", t), this._syncVisible());
  }
  get editable() {
    return this.getEditableFlag(o.USER);
  }
  set editable(t) {
    this.setEditableFlag(o.USER, t);
  }
  get updating() {
    return false;
  }
  get cursor() {
    return null;
  }
  get hasFocusedManipulators() {
    return this.hasGrabbedManipulators || this.hasHoveredManipulators;
  }
  destroy() {
    this.manipulators.destroy(), this._set("view", null);
  }
  onAdd() {
    this._syncVisible();
  }
  activate() {
    null != this.view && (this.view.focus(), this.onActivate());
  }
  deactivate() {
    this.onDeactivate();
  }
  handleInputEvent(t) {
    this.onInputEvent(t);
  }
  handleInputEventAfter(t) {
    this.onInputEventAfter(t);
  }
  setEditableFlag(t, e3) {
    this._editableFlags.set(t, e3), this.manipulators.isToolEditable = this.internallyEditable, this._updateManipulatorAttachment(), t === o.USER && this.notifyChange("editable"), this.onEditableChange(), this.onManipulatorSelectionChanged();
  }
  getEditableFlag(t) {
    return this._editableFlags.get(t) ?? false;
  }
  whenCreated() {
    return this._creationFinishedResolver.promise;
  }
  onManipulatorSelectionChanged() {
  }
  onActivate() {
  }
  onDeactivate() {
  }
  onShow() {
  }
  onHide() {
  }
  onEditableChange() {
  }
  onInputEvent(t) {
  }
  onInputEventAfter(t) {
  }
  get internallyEditable() {
    return this.getEditableFlag(o.USER) && this.getEditableFlag(o.MANAGER);
  }
  finishToolCreation() {
    this.created || this._creationFinishedResolver.resolve(this), this._set("created", true);
  }
  _syncVisible() {
    if (this.initialized) {
      if (this.visible) this._show();
      else if (this._hide(), this.active) return void (this.view.activeTool = null);
    }
  }
  _show() {
    this._updateManipulatorAttachment(), this.onShow();
  }
  _hide() {
    this._updateManipulatorAttachment(), this.onHide();
  }
  _updateManipulatorAttachment() {
    this.visible ? this.manipulators.attach() : this.manipulators.detach();
  }
};
e([y({
  constructOnly: true
})], n.prototype, "view", void 0), e([y({
  readOnly: true
})], n.prototype, "active", null), e([y({
  value: true
})], n.prototype, "visible", null), e([y({
  value: true
})], n.prototype, "editable", null), e([y({
  readOnly: true
})], n.prototype, "manipulators", void 0), e([y({
  readOnly: true
})], n.prototype, "updating", null), e([y()], n.prototype, "cursor", null), e([y({
  readOnly: true
})], n.prototype, "automaticManipulatorSelection", void 0), e([y()], n.prototype, "hasFocusedManipulators", null), e([y()], n.prototype, "hasGrabbedManipulators", void 0), e([y()], n.prototype, "hasHoveredManipulators", void 0), e([y()], n.prototype, "firstGrabbedManipulator", void 0), e([y({
  readOnly: true
})], n.prototype, "created", void 0), e([y({
  readOnly: true
})], n.prototype, "removeIncompleteOnCancel", void 0), n = e([a2("esri.views.interactive.InteractiveToolBase")], n);

export {
  p2 as p,
  m,
  f,
  E2 as E,
  S2 as S,
  h,
  g2 as g,
  z,
  v,
  j,
  M,
  w,
  D,
  U,
  i2 as i,
  n
};
//# sourceMappingURL=chunk-VRZ6RXNW.js.map
