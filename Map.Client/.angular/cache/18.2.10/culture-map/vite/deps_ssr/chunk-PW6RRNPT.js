import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  i
} from "./chunk-4VYDNFW7.js";
import {
  h as h2
} from "./chunk-YJ3POSXJ.js";
import {
  e as e2,
  r
} from "./chunk-BUA2HOYZ.js";
import {
  S as S2
} from "./chunk-JGJES5EN.js";
import {
  n
} from "./chunk-WQIJCG2D.js";
import {
  _
} from "./chunk-62PN4TEW.js";
import {
  h
} from "./chunk-XP4RC2MQ.js";
import {
  S
} from "./chunk-IUPJR3FF.js";
import {
  y as y2
} from "./chunk-TGZW6QWO.js";
import {
  d as d2
} from "./chunk-OYIDHTXG.js";
import {
  d,
  p
} from "./chunk-LZSLQ24Q.js";
import {
  o
} from "./chunk-JAMSDYD6.js";
import {
  e
} from "./chunk-NUICEVIH.js";
import {
  y
} from "./chunk-UVNLCXWD.js";
import {
  a3 as a2
} from "./chunk-UDMPWVPF.js";
import {
  a
} from "./chunk-6JFGZTLU.js";

// ../../../node_modules/@arcgis/core/views/draw/support/input/GraphicMoverEvents.js
var t = class {
  constructor(t2, i3, s2, h4, e4) {
    this.graphic = t2, this.index = i3, this.x = s2, this.y = h4, this.viewEvent = e4, this.type = "graphic-click";
  }
};
var i2 = class {
  constructor(t2, i3, s2, h4, e4) {
    this.graphic = t2, this.index = i3, this.x = s2, this.y = h4, this.viewEvent = e4, this.type = "graphic-double-click";
  }
};
var s = class {
  constructor(t2, i3, s2, h4, e4, r3, c2, a4, n3, p2) {
    this.graphic = t2, this.allGraphics = i3, this.index = s2, this.x = h4, this.y = e4, this.dx = r3, this.dy = c2, this.totalDx = a4, this.totalDy = n3, this.viewEvent = p2, this.defaultPrevented = false, this.type = "graphic-move-start";
  }
  preventDefault() {
    this.defaultPrevented = true;
  }
};
var h3 = class {
  constructor(t2, i3, s2, h4, e4, r3, c2, a4, n3, p2) {
    this.graphic = t2, this.allGraphics = i3, this.index = s2, this.x = h4, this.y = e4, this.dx = r3, this.dy = c2, this.totalDx = a4, this.totalDy = n3, this.viewEvent = p2, this.defaultPrevented = false, this.type = "graphic-move";
  }
  preventDefault() {
    this.defaultPrevented = true;
  }
};
var e3 = class {
  constructor(t2, i3, s2, h4, e4, r3, c2, a4, n3, p2) {
    this.graphic = t2, this.allGraphics = i3, this.index = s2, this.x = h4, this.y = e4, this.dx = r3, this.dy = c2, this.totalDx = a4, this.totalDy = n3, this.viewEvent = p2, this.defaultPrevented = false, this.type = "graphic-move-stop";
  }
  preventDefault() {
    this.defaultPrevented = true;
  }
};
var r2 = class {
  constructor(t2, i3, s2, h4, e4) {
    this.graphic = t2, this.index = i3, this.x = s2, this.y = h4, this.viewEvent = e4, this.type = "graphic-pointer-over";
  }
};
var c = class {
  constructor(t2, i3, s2, h4, e4) {
    this.graphic = t2, this.index = i3, this.x = s2, this.y = h4, this.viewEvent = e4, this.type = "graphic-pointer-out";
  }
};
var a3 = class {
  constructor(t2, i3, s2, h4, e4) {
    this.graphic = t2, this.index = i3, this.x = s2, this.y = h4, this.viewEvent = e4, this.type = "graphic-pointer-down";
  }
};
var n2 = class {
  constructor(t2, i3, s2, h4, e4) {
    this.graphic = t2, this.index = i3, this.x = s2, this.y = h4, this.viewEvent = e4, this.type = "graphic-pointer-up";
  }
};

// ../../../node_modules/@arcgis/core/views/draw/support/GraphicMover.js
var M = "indicator-symbols";
var E = class extends o.EventedAccessor {
  constructor(i3) {
    super(i3), this._activeGraphic = null, this._dragEvent = null, this._hoverGraphic = null, this._indicators = [], this._initialDragGeometry = null, this._manipulators = [], this._layerViews = null, this.type = "graphic-mover", this.callbacks = {
      onGraphicClick() {
      },
      onGraphicDoubleClick() {
      },
      onGraphicMoveStart() {
      },
      onGraphicMove() {
      },
      onGraphicMoveStop() {
      },
      onGraphicPointerOver() {
      },
      onGraphicPointerOut() {
      },
      onGraphicPointerDown() {
      },
      onGraphicPointerUp() {
      }
    }, this.enableMoveAllGraphics = false, this.graphics = [], this.indicatorsEnabled = false, this.layer = new h({
      listMode: "hide",
      internal: true,
      title: "GraphicMover highlight layer"
    }), this.view = null;
  }
  initialize() {
    e2(this.view, this.layer), this._highlightHelper = new h2({
      view: this.view
    }), this.refresh(), this.addHandles([d(() => this.graphics.length, () => this.refresh()), p(() => this.view?.ready, () => {
      this.addHandles([this.view.on("immediate-click", (i3) => this._clickHandler(i3), _.TOOL), this.view.on("double-click", (i3) => this._doubleClickHandler(i3), _.TOOL), this.view.on("pointer-down", (i3) => this._pointerDownHandler(i3), _.TOOL), this.view.on("pointer-move", (i3) => this._pointerMoveHandler(i3), _.TOOL), this.view.on("pointer-up", (i3) => this._pointerUpHandler(i3), _.TOOL), this.view.on("drag", (i3) => this._dragHandler(i3), _.TOOL), this.view.on("key-down", (i3) => this._keyDownHandler(i3), _.TOOL)]);
    }, {
      once: true,
      initial: true
    }), d(() => this.view, (i3) => {
      this._highlightHelper.removeAll(), this._highlightHelper.view = i3;
    })]);
  }
  destroy() {
    this._removeIndicators(), this.view.map?.remove(this.layer), this.layer.destroy(), this.reset(), this._manipulators.forEach((i3) => i3.destroy()), this._manipulators = null;
  }
  set highlightsEnabled(i3) {
    this._highlightHelper?.removeAll(), this._set("highlightsEnabled", i3), i3 && this._highlightHelper?.add(this.graphics);
  }
  get state() {
    const i3 = this.view.ready, t2 = this.graphics.length > 0, e4 = this._activeGraphic;
    return i3 && t2 ? e4 ? "moving" : "active" : i3 ? "ready" : "disabled";
  }
  refresh() {
    this.reset(), this._setup();
  }
  reset() {
    this._activeGraphic = null, this._hoverGraphic = null, this._dragEvent = null, this._highlightHelper.removeAll();
  }
  updateGeometry(i3, t2) {
    const e4 = this.graphics[i3];
    e4 && (e4.set("geometry", t2), this._setUpIndicators());
  }
  _setup() {
    this._setUpHighlights(), this._setUpIndicators(), this._setUpManipulators(), this._syncLayerViews();
  }
  _clickHandler(i3) {
    const t2 = this._findTargetGraphic(n(i3));
    if (t2) {
      const e4 = new t(t2, this.graphics.indexOf(t2), i3.x, i3.y, i3);
      this.emit("graphic-click", e4), this.callbacks.onGraphicClick && this.callbacks.onGraphicClick(e4);
    }
  }
  _doubleClickHandler(i3) {
    const t2 = this._findTargetGraphic(n(i3));
    if (t2) {
      const e4 = new i2(t2, this.graphics.indexOf(t2), i3.x, i3.y, i3);
      this.emit("graphic-double-click", e4), this.callbacks.onGraphicDoubleClick && this.callbacks.onGraphicDoubleClick(e4);
    }
  }
  _pointerDownHandler(i3) {
    const t2 = this._findTargetGraphic(n(i3));
    if (t2) {
      this._activeGraphic = t2;
      const {
        x: e4,
        y: s2
      } = i3, r3 = new a3(t2, this.graphics.indexOf(t2), e4, s2, i3);
      this.emit("graphic-pointer-down", r3), this.callbacks.onGraphicPointerDown && this.callbacks.onGraphicPointerDown(r3);
    } else this._activeGraphic = null;
  }
  _pointerUpHandler(i3) {
    if (this._activeGraphic) {
      const {
        x: t2,
        y: e4
      } = i3, s2 = this.graphics.indexOf(this._activeGraphic), r3 = new n2(this._activeGraphic, s2, t2, e4, i3);
      this.emit("graphic-pointer-up", r3), this.callbacks.onGraphicPointerUp && this.callbacks.onGraphicPointerUp(r3);
    }
  }
  _pointerMoveHandler(i3) {
    if (this._dragEvent) return;
    const t2 = this._findTargetGraphic(n(i3));
    if (t2) {
      const {
        x: e4,
        y: s2
      } = i3;
      if (this._hoverGraphic) {
        if (this._hoverGraphic === t2) return;
        const r4 = this.graphics.indexOf(this._hoverGraphic), h5 = new c(this.graphics[r4], r4, e4, s2, i3);
        this._hoverGraphic = null, this.emit("graphic-pointer-out", h5), this.callbacks.onGraphicPointerOut && this.callbacks.onGraphicPointerOut(h5);
      }
      const r3 = this.graphics.indexOf(t2), h4 = new r2(t2, r3, e4, s2, i3);
      return this._hoverGraphic = t2, this.emit("graphic-pointer-over", h4), void (this.callbacks.onGraphicPointerOver && this.callbacks.onGraphicPointerOver(h4));
    }
    if (this._hoverGraphic) {
      const {
        x: t3,
        y: e4
      } = i3, s2 = this.graphics.indexOf(this._hoverGraphic), r3 = new c(this.graphics[s2], s2, t3, e4, i3);
      this._hoverGraphic = null, this.emit("graphic-pointer-out", r3), this.callbacks.onGraphicPointerOut && this.callbacks.onGraphicPointerOut(r3);
    }
  }
  _dragHandler(i3) {
    if ("start" !== i3.action && !this._dragEvent || !this._activeGraphic?.geometry) return;
    "start" === i3.action && this._removeIndicators(), i3.stopPropagation();
    const {
      action: t2,
      x: s2,
      y: r3
    } = i3, h4 = this.graphics.indexOf(this._activeGraphic), o2 = this._dragEvent ? s2 - this._dragEvent.x : 0, a4 = this._dragEvent ? r3 - this._dragEvent.y : 0, n3 = s2 - i3.origin.x, l = r3 - i3.origin.y, p2 = "start" === t2 ? this._activeGraphic.geometry : this._initialDragGeometry, d3 = i(p2, n3, l, this.view);
    if (this._activeGraphic.geometry = d3, this.enableMoveAllGraphics && this.graphics.forEach((i4) => {
      i4 !== this._activeGraphic && (i4.geometry = i(i4.geometry, o2, a4, this.view));
    }), this._dragEvent = i3, "start" === t2) {
      this._initialDragGeometry = a(p2);
      const t3 = new s(this._activeGraphic, this.graphics, h4, s2, r3, o2, a4, n3, l, i3);
      this.emit("graphic-move-start", t3), this.callbacks.onGraphicMoveStart && this.callbacks.onGraphicMoveStart(t3), t3.defaultPrevented && this._activeGraphic.set("geometry", p2);
    } else if ("update" === t2) {
      const t3 = new h3(this._activeGraphic, this.graphics, h4, s2, r3, o2, a4, n3, l, i3);
      this.emit("graphic-move", t3), this.callbacks.onGraphicMove && this.callbacks.onGraphicMove(t3), t3.defaultPrevented && (this._activeGraphic.geometry = p2);
    } else {
      const t3 = new e3(this._activeGraphic, this.graphics, h4, s2, r3, o2, a4, n3, l, i3);
      this._dragEvent = null, this._activeGraphic = null, this._setUpIndicators(), this.emit("graphic-move-stop", t3), this.callbacks.onGraphicMoveStop && this.callbacks.onGraphicMoveStop(t3), t3.defaultPrevented && (this.graphics[h4].set("geometry", this._initialDragGeometry), this._setUpIndicators()), this._initialDragGeometry = null;
    }
  }
  _keyDownHandler(i3) {
    "a" !== i3.key && "d" !== i3.key && "n" !== i3.key || "moving" !== this.state || i3.stopPropagation();
  }
  _findTargetGraphic(i3) {
    const t2 = this.view.toMap(i3), e4 = this.graphics;
    let s2 = null, r3 = Number.MAX_VALUE;
    this._syncLayerViews();
    const h4 = this._layerViews.flatMap((i4) => "graphicsViews" in i4 ? Array.from(i4.graphicsViews(), (i5) => i5.hitTest(t2)).flat() : i4.graphicsView.hitTest(t2)).filter((i4) => e4.includes(i4)).sort((i4, t3) => e4.indexOf(i4) - e4.indexOf(t3));
    return h4.length ? h4[0] : (this._manipulators.forEach((t3) => {
      const e5 = t3.intersectionDistance(i3);
      null != e5 && e5 < r3 && (r3 = e5, s2 = t3.graphic);
    }), s2);
  }
  _syncLayerViews() {
    this._layerViews = [];
    const i3 = /* @__PURE__ */ new Set();
    for (const t2 of this.graphics) {
      const e4 = r(this.view, t2.layer);
      e4 && i3.add(e4);
    }
    this._layerViews = [...i3];
  }
  _setUpManipulators() {
    const {
      graphics: i3,
      view: t2
    } = this;
    this._manipulators.forEach((i4) => i4.destroy()), this._manipulators = i3.length ? i3.map((i4) => new S2({
      graphic: i4,
      view: t2
    })) : [];
  }
  _setUpHighlights() {
    this.highlightsEnabled && this._highlightHelper.add(this.graphics);
  }
  _setUpIndicators() {
    if (this._removeIndicators(), this.indicatorsEnabled) {
      for (const i3 of this.graphics) {
        const t2 = i3.clone();
        t2.symbol = j(i3), this._indicators.push(t2), this.addHandles(d(() => i3.symbol, () => this._setUpIndicators()), M);
      }
      this.layer.addMany(this._indicators);
    }
  }
  _removeIndicators() {
    this.removeHandles(M), this._indicators.length && (this.layer.removeMany(this._indicators), this._indicators.forEach((i3) => i3.destroy()), this._indicators = []);
  }
};
function j(i3) {
  const t2 = 12;
  if (null == i3.symbol) return null;
  switch (i3.symbol.type) {
    case "cim":
      return new y2({
        style: "circle",
        size: t2,
        color: [0, 0, 0, 0],
        outline: {
          color: [255, 127, 0, 1],
          width: 1
        }
      });
    case "picture-marker": {
      const {
        xoffset: t3,
        yoffset: e4,
        height: s2,
        width: r3
      } = i3.symbol, h4 = s2 === r3 ? r3 : Math.max(s2, r3);
      return new y2({
        xoffset: t3,
        yoffset: e4,
        size: h4,
        style: "square",
        color: [0, 0, 0, 0],
        outline: {
          color: [255, 127, 0, 1],
          width: 1
        }
      });
    }
    case "simple-marker": {
      const {
        xoffset: t3,
        yoffset: e4,
        size: s2,
        style: r3
      } = i3.symbol;
      return new y2({
        xoffset: t3,
        yoffset: e4,
        style: "circle" === r3 ? "circle" : "square",
        size: s2 + 2,
        color: [0, 0, 0, 0],
        outline: {
          color: [255, 127, 0, 1],
          width: 1
        }
      });
    }
    case "simple-fill":
      return new S({
        color: [0, 0, 0, 0],
        outline: {
          style: "dash",
          color: [255, 127, 0, 1],
          width: 1
        }
      });
    case "simple-line":
      return new d2({
        color: [255, 127, 0, 1],
        style: "dash",
        width: 1
      });
    case "text": {
      const {
        xoffset: e4,
        yoffset: s2
      } = i3.symbol;
      return new y2({
        xoffset: e4,
        yoffset: s2,
        size: t2,
        color: [0, 0, 0, 0],
        outline: {
          color: [255, 127, 0, 1],
          width: 1
        }
      });
    }
    default:
      return null;
  }
}
e([y()], E.prototype, "_activeGraphic", void 0), e([y({
  readOnly: true
})], E.prototype, "type", void 0), e([y()], E.prototype, "callbacks", void 0), e([y()], E.prototype, "enableMoveAllGraphics", void 0), e([y()], E.prototype, "graphics", void 0), e([y({
  value: false
})], E.prototype, "highlightsEnabled", null), e([y()], E.prototype, "indicatorsEnabled", void 0), e([y()], E.prototype, "layer", void 0), e([y({
  readOnly: true
})], E.prototype, "state", null), e([y()], E.prototype, "view", void 0), E = e([a2("esri.views.draw.support.GraphicMover")], E);
var U = E;

export {
  U
};
//# sourceMappingURL=chunk-PW6RRNPT.js.map
