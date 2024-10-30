import {
  i as i2
} from "./chunk-WTF7K3GK.js";
import {
  b
} from "./chunk-VS26W5Y5.js";
import {
  l
} from "./chunk-6MR4UDDL.js";
import {
  c
} from "./chunk-Q4KYZS3X.js";
import {
  J as J2
} from "./chunk-T2S5VXNP.js";
import {
  J,
  K
} from "./chunk-DUTZNK67.js";
import {
  h
} from "./chunk-HMNBB7ED.js";
import {
  d as d2,
  i,
  u
} from "./chunk-7ZJ6P7J7.js";
import {
  x
} from "./chunk-AXVPJBVW.js";
import {
  n
} from "./chunk-OXEPWRM7.js";
import {
  C,
  d
} from "./chunk-6WHTZNUH.js";
import {
  o
} from "./chunk-WGAPNV7F.js";
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

// ../../../node_modules/@arcgis/core/views/interactive/support/utils.js
function s(s2) {
  let t = 0, a2 = 0, e2 = 0;
  return s2 ? ("cim" === s2.type && s2.data.symbol && "symbolLayers" in s2.data.symbol && s2.data.symbol.symbolLayers && s2.data.symbol.symbolLayers.map((o2) => {
    "CIMVectorMarker" === o2.type && o2.anchorPoint && (Math.abs(o2.anchorPoint.x) > t && (t = o2.anchorPoint.x), Math.abs(o2.anchorPoint.y) > a2 && (a2 = o2.anchorPoint.y), null != o2.size && o2.size > e2 && (e2 = o2.size));
  }), t = u(t), a2 = u(a2), e2 = u(e2), {
    offsetX: t,
    offsetY: a2,
    size: e2
  }) : {
    offsetX: t,
    offsetY: a2,
    size: e2
  };
}

// ../../../node_modules/@arcgis/core/views/interactive/GraphicManipulator.js
var S2 = class extends S {
  set graphic(t) {
    this._circleCollisionCache = null, this._originalSymbol = t.symbol, this._set("graphic", t), this.attachSymbolChanged();
  }
  get elevationInfo() {
    const {
      layer: t
    } = this.graphic, e2 = t && "elevationInfo" in t ? t.elevationInfo : null, o2 = l(this.graphic), i3 = e2 ? e2.offset : 0;
    return new h({
      mode: o2,
      offset: i3
    });
  }
  set focusedSymbol(t) {
    t !== this._get("focusedSymbol") && (this._set("focusedSymbol", t), this._updateGraphicSymbol(), this._circleCollisionCache = null);
  }
  grabbableForEvent() {
    return true;
  }
  set grabbing(t) {
    t !== this._get("grabbing") && (this._set("grabbing", t), this._updateGraphicSymbol());
  }
  set hovering(t) {
    t !== this._get("hovering") && (this._set("hovering", t), this._updateGraphicSymbol());
  }
  set selected(t) {
    t !== this._get("selected") && (this._set("selected", t), this._updateGraphicSymbol(), this.events.emit("select-changed", {
      action: t ? "select" : "deselect"
    }));
  }
  get _focused() {
    return this._get("hovering") || this._get("grabbing");
  }
  constructor(t) {
    super(t), this.layer = null, this.interactive = true, this.selectable = false, this.grabbable = true, this.dragging = false, this.cursor = null, this.consumesClicks = true, this.events = new o.EventEmitter(), this._circleCollisionCache = null, this._graphicSymbolChangedHandle = null, this._originalSymbol = null;
  }
  destroy() {
    this.detachSymbolChanged(), this._resetGraphicSymbol(), this._set("view", null);
  }
  intersectionDistance(t) {
    const e2 = this.graphic;
    if (false === e2.visible) return null;
    const o2 = e2.geometry;
    if (null == o2) return null;
    const i3 = this._get("focusedSymbol"), s2 = null != i3 ? i3 : e2.symbol;
    return "2d" === this.view.type ? this._intersectDistance2D(this.view, t, o2, s2) : this._intersectDistance3D(this.view, t, e2);
  }
  attach() {
    this.attachSymbolChanged(), null != this.layer && this.layer.add(this.graphic);
  }
  detach() {
    this.detachSymbolChanged(), this._resetGraphicSymbol(), null != this.layer && this.layer.remove(this.graphic);
  }
  attachSymbolChanged() {
    this.detachSymbolChanged(), this._graphicSymbolChangedHandle = d(() => this.graphic?.symbol, (t) => {
      null != t && t !== this.focusedSymbol && t !== this._originalSymbol && (this._originalSymbol = t, this._focused && null != this.focusedSymbol && (this.graphic.symbol = this.focusedSymbol));
    }, C);
  }
  detachSymbolChanged() {
    null != this._graphicSymbolChangedHandle && (this._graphicSymbolChangedHandle.remove(), this._graphicSymbolChangedHandle = null);
  }
  onElevationChange() {
  }
  onViewChange() {
  }
  _updateGraphicSymbol() {
    this.graphic.symbol = this._focused && null != this.focusedSymbol ? this.focusedSymbol : this._originalSymbol;
  }
  _resetGraphicSymbol() {
    this.graphic.symbol = this._originalSymbol;
  }
  _intersectDistance2D(t, e2, o2, i3) {
    if (null == (i3 = i3 || J2(o2))) return null;
    const s2 = 1;
    let n2 = this._circleCollisionCache;
    if ("point" === o2.type && "cim" === i3.type && "CIMPointSymbol" === i3.data.symbol?.type && i3.data.symbol.symbolLayers) {
      const {
        offsetX: l2,
        offsetY: n3,
        size: a2
      } = s(i3), c2 = d2(e2, j), p = a2 / 2, m = t.toScreen(o2), u2 = m.x + l2, y2 = m.y + n3;
      return b(c2, [u2, y2]) < p * p ? s2 : null;
    }
    if ("point" !== o2.type || "simple-marker" !== i3.type) return i2(e2, o2, t) ? s2 : null;
    if (null == n2 || !n2.originalPoint.equals(o2)) {
      const e3 = o2, s3 = t.spatialReference;
      if (J(e3.spatialReference, s3)) {
        const t2 = K(e3, s3);
        n2 = {
          originalPoint: e3.clone(),
          mapPoint: t2,
          radiusPx: u(i3.size)
        }, this._circleCollisionCache = n2;
      }
    }
    if (null != n2) {
      const o3 = d2(e2, j), a2 = t.toScreen?.(n2.mapPoint);
      if (!a2) return null;
      const c2 = n2.radiusPx, p = a2.x + u(i3.xoffset), m = a2.y - u(i3.yoffset);
      return b(o3, [p, m]) < c2 * c2 ? s2 : null;
    }
    return null;
  }
  _intersectDistance3D(t, e2, o2) {
    const i3 = t.toMap(e2, {
      include: [o2]
    });
    return i3 && c(i3, C2, t.renderSpatialReference) ? x(C2, t.state.camera.eye) : null;
  }
};
e([y({
  constructOnly: true,
  nonNullable: true
})], S2.prototype, "graphic", null), e([y()], S2.prototype, "elevationInfo", null), e([y({
  constructOnly: true,
  nonNullable: true
})], S2.prototype, "view", void 0), e([y({
  value: null
})], S2.prototype, "focusedSymbol", null), e([y({
  constructOnly: true
})], S2.prototype, "layer", void 0), e([y()], S2.prototype, "interactive", void 0), e([y()], S2.prototype, "selectable", void 0), e([y()], S2.prototype, "grabbable", void 0), e([y({
  value: false
})], S2.prototype, "grabbing", null), e([y()], S2.prototype, "dragging", void 0), e([y()], S2.prototype, "hovering", null), e([y({
  value: false
})], S2.prototype, "selected", null), e([y()], S2.prototype, "cursor", void 0), S2 = e([a("esri.views.interactive.GraphicManipulator")], S2);
var C2 = n();
var j = i();

export {
  s,
  S2 as S
};
//# sourceMappingURL=chunk-YY43ZHCK.js.map
