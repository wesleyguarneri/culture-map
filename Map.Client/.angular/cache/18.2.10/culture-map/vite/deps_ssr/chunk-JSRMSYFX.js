import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  a as a2,
  c as c2,
  s
} from "./chunk-NYQ72E6S.js";
import {
  _ as _2
} from "./chunk-62PN4TEW.js";
import {
  $,
  Gt,
  Rt,
  bt,
  kt,
  pt,
  rt
} from "./chunk-KZBRH42J.js";
import {
  m
} from "./chunk-AENXIHUM.js";
import {
  t as t3
} from "./chunk-A5U437OT.js";
import {
  n as n4
} from "./chunk-BUAHJQUY.js";
import {
  e as e3
} from "./chunk-BNFI45VE.js";
import {
  t as t2
} from "./chunk-6C3NPNB6.js";
import {
  t
} from "./chunk-SM7IYUF6.js";
import {
  N,
  O,
  U
} from "./chunk-NOBDTR4N.js";
import {
  o as o2,
  r as r2,
  u as u2
} from "./chunk-B76NC7GX.js";
import {
  n as n3
} from "./chunk-BZHHBBFX.js";
import {
  c,
  i
} from "./chunk-VYTPFEL2.js";
import {
  _
} from "./chunk-TIRJMGGG.js";
import {
  e as e2
} from "./chunk-2OZSYJDX.js";
import {
  g
} from "./chunk-MZM4INJV.js";
import {
  n as n2,
  r
} from "./chunk-J4GMQHGL.js";
import {
  p
} from "./chunk-LZSLQ24Q.js";
import {
  o
} from "./chunk-JAMSDYD6.js";
import {
  e
} from "./chunk-NUICEVIH.js";
import {
  S
} from "./chunk-NXK752PZ.js";
import {
  y
} from "./chunk-UVNLCXWD.js";
import {
  n
} from "./chunk-PNUA7JOS.js";
import {
  a3 as a
} from "./chunk-UDMPWVPF.js";
import {
  u
} from "./chunk-6WGE3IUL.js";
import {
  has
} from "./chunk-2ZJE6ZFX.js";
import {
  __async
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/shaders/BitBlitPrograms.js
var e4 = {
  shaders: {
    vertexShader: n4("bitBlit/bitBlit.vert"),
    fragmentShader: n4("bitBlit/bitBlit.frag")
  },
  attributes: /* @__PURE__ */ new Map([["a_pos", 0], ["a_tex", 1]])
};

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/shaders/StencilPrograms.js
var r3 = {
  shaders: {
    vertexShader: n4("stencil/stencil.vert"),
    fragmentShader: n4("stencil/stencil.frag")
  },
  attributes: /* @__PURE__ */ new Map([["a_pos", 0]])
};

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/shaders/HighlightPrograms.js
var t4 = {
  shaders: {
    vertexShader: n4("highlight/textured.vert"),
    fragmentShader: n4("highlight/highlight.frag")
  },
  attributes: /* @__PURE__ */ new Map([["a_position", 0], ["a_texcoord", 1]])
};
var r4 = {
  shaders: {
    vertexShader: n4("highlight/textured.vert"),
    fragmentShader: n4("highlight/blur.frag")
  },
  attributes: /* @__PURE__ */ new Map([["a_position", 0], ["a_texcoord", 1]])
};

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/Profiler.js
var r5 = has("esri-2d-profiler");
var n5 = class {
  constructor(n7, i2) {
    if (this._events = new o(), this._entries = /* @__PURE__ */ new Map(), this._timings = new t2(10), this._currentContainer = null, this._currentPass = null, this._currentBrush = null, this._currentSummary = null, !r5) return;
    this._ext = t3(n7.gl, {}), this._debugOutput = i2;
    const o4 = n7.gl;
    if (!this.enableCommandLogging) return;
    let a6;
    for (a6 in o4) if ("function" == typeof o4[a6]) {
      const e6 = o4[a6], t6 = a6.includes("draw");
      o4[a6] = (...s3) => (this._events.emit("command", {
        container: this._currentContainer,
        pass: this._currentPass,
        brush: this._currentBrush,
        method: a6,
        args: s3,
        isDrawCommand: t6
      }), this._currentSummary && (this._currentSummary.commands++, t6 && this._currentSummary.drawCommands++), e6.apply(o4, s3));
    }
  }
  get enableCommandLogging() {
    return !("object" == typeof r5 && r5.disableCommands);
  }
  recordContainerStart(e6) {
    r5 && (this._currentContainer = e6);
  }
  recordContainerEnd() {
    r5 && (this._currentContainer = null);
  }
  recordPassStart(e6) {
    r5 && (this._currentPass = e6, this._initSummary());
  }
  recordPassEnd() {
    r5 && (this._currentPass = null, this._emitSummary());
  }
  recordBrushStart(e6) {
    r5 && (this._currentBrush = e6);
  }
  recordBrushEnd() {
    r5 && (this._currentBrush = null);
  }
  recordStart(e6) {
    if (r5 && null != this._ext) {
      if (this._entries.has(e6)) {
        const t7 = this._entries.get(e6), s3 = this._ext.resultAvailable(t7.query), r9 = this._ext.disjoint();
        if (s3 && !r9) {
          const s4 = this._ext.getResult(t7.query) / 1e6;
          let r10 = 0;
          if (null != this._timings.enqueue(s4)) {
            const e7 = this._timings.entries, t8 = e7.length;
            let s5 = 0;
            for (const r11 of e7) s5 += r11;
            r10 = s5 / t8;
          }
          const n7 = s4.toFixed(2), i2 = r10 ? r10.toFixed(2) : "--";
          this.enableCommandLogging ? (console.groupCollapsed(`Frame report for ${e6}, ${n7} ms (${i2} last 10 avg)
${t7.commandsLen} Commands (${t7.drawCommands} draw)`), console.log("RenderPass breakdown: "), console.table(t7.summaries), console.log("Commands: ", t7.commands), console.groupEnd()) : console.log(`Frame report for ${e6}, ${n7} ms (${i2} last 10 avg)`), this._debugOutput.innerHTML = `${n7} (${i2})`;
        }
        for (const e7 of t7.handles) e7.remove();
        this._ext.deleteQuery(t7.query), this._entries.delete(e6);
      }
      const t6 = {
        name: e6,
        query: this._ext.createQuery(),
        commands: [],
        commandsLen: 0,
        drawCommands: 0,
        summaries: [],
        handles: []
      };
      this.enableCommandLogging && (t6.handles.push(this._events.on("command", (e7) => {
        t6.commandsLen++, t6.commands.push(e7), e7.isDrawCommand && t6.drawCommands++;
      })), t6.handles.push(this._events.on("summary", (e7) => {
        t6.summaries.push(e7);
      }))), this._ext.beginTimeElapsed(t6.query), this._entries.set(e6, t6);
    }
  }
  recordEnd(e6) {
    r5 && null != this._ext && this._entries.has(e6) && this._ext.endTimeElapsed();
  }
  _initSummary() {
    this.enableCommandLogging && (this._currentSummary = {
      container: this._currentContainer,
      pass: this._currentPass,
      drawCommands: 0,
      commands: 0
    });
  }
  _emitSummary() {
    this.enableCommandLogging && this._currentSummary && this._events.emit("summary", this._currentSummary);
  }
};

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/collisions/CollisionGrid.js
var e5 = 1;
var h = 0;
var o3 = 1;
var r6 = 2;
var l = class {
  constructor(t6, s3, h3) {
    this._width = t6 * h3, this._height = s3 * h3, this._pixelRatio = h3;
    const o4 = Math.ceil(this._width / e5), r9 = Math.ceil(this._height / e5);
    this._cols = o4, this._rows = r9, this._cells = t.create(o4 * r9);
  }
  insertMetrics(t6) {
    this._markMetrics(t6);
  }
  hasCollision(t6) {
    let i2 = 0;
    for (const {
      computedX: e6,
      computedY: h3,
      width: l3,
      height: c5
    } of t6.bounds) {
      const t7 = (l3 + U) * this._pixelRatio, a6 = (c5 + U) * this._pixelRatio;
      switch (this._collide(e6, h3, t7, a6)) {
        case r6:
          return r6;
        case o3:
          i2++;
      }
    }
    return i2 === t6.bounds.length ? o3 : h;
  }
  getCellId(t6, s3) {
    return t6 + s3 * this._cols;
  }
  has(t6) {
    return this._cells.has(t6);
  }
  hasRange(t6, s3) {
    return this._cells.hasRange(t6, s3);
  }
  set(t6) {
    this._cells.set(t6);
  }
  setRange(t6, s3) {
    this._cells.setRange(t6, s3);
  }
  _collide(s3, i2, l3, c5) {
    const a6 = s3 - l3 / 2, n7 = i2 - c5 / 2, _5 = a6 + l3, f4 = n7 + c5;
    if (_5 < 0 || f4 < 0 || a6 > this._width || n7 > this._height) return o3;
    const u3 = e2(Math.floor(a6 / e5), 0, this._cols), d7 = e2(Math.floor(n7 / e5), 0, this._rows), m2 = e2(Math.ceil(_5 / e5), 0, this._cols), p2 = e2(Math.ceil(f4 / e5), 0, this._rows);
    for (let t6 = d7; t6 <= p2; t6++) for (let s4 = u3; s4 <= m2; s4++) {
      const i3 = this.getCellId(s4, t6);
      if (this.has(i3)) return r6;
    }
    return h;
  }
  _mark(s3, i2, h3, o4, r9) {
    const l3 = s3 - h3 / 2, c5 = i2 - o4 / 2, a6 = l3 + h3, n7 = c5 + o4, _5 = e2(Math.floor(l3 / e5), 0, this._cols), f4 = e2(Math.floor(c5 / e5), 0, this._rows), u3 = e2(Math.ceil(a6 / e5), 0, this._cols), d7 = e2(Math.ceil(n7 / e5), 0, this._rows);
    for (let t6 = f4; t6 <= d7; t6++) for (let s4 = _5; s4 <= u3; s4++) {
      const i3 = this.getCellId(s4, t6);
      this.set(i3);
    }
    return false;
  }
  _markMetrics(t6) {
    for (const {
      computedX: i2,
      computedY: e6,
      width: h3,
      height: o4
    } of t6.bounds) {
      const r9 = (h3 + U) * this._pixelRatio, l3 = (o4 + U) * this._pixelRatio;
      this._mark(i2, e6, r9, l3, t6.entityTexel);
    }
  }
};

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/collisions/CollisionEngine.js
var s2 = 254;
var r7 = 255;
var c3 = 0;
function a3(e6, t6) {
  const o4 = e6.children.slice();
  o4.sort((e7, t7) => e7.tileAge - t7.tileAge), o4.forEach((e7) => {
    null != e7.labelMetrics && e7.isReady && t6(e7, e7.labelMetrics);
  });
}
function f(e6, t6) {
  return (!e6.minScale || e6.minScale >= t6) && (!e6.maxScale || e6.maxScale <= t6);
}
var d = class {
  run(e6, t6, o4, i2) {
    const n7 = [];
    for (let l3 = e6.length - 1; l3 >= 0; l3--) {
      const t7 = e6[l3];
      t7.labelingCollisionInfos?.length && n7.push(...t7.labelingCollisionInfos);
    }
    has("esri-2d-update-debug") && n7.length && console.debug("CollisionEngine.run"), this._transformMetrics(n7), this._runCollision(n7, t6, o4, i2);
    for (const l3 of n7) l3.container.requestRender();
  }
  _runCollision(e6, t6, i2, n7) {
    const [l3, d7] = t6.state.size, u3 = new l(l3, d7, t6.pixelRatio);
    for (const {
      container: o4,
      deconflictionEnabled: b,
      visible: h3
    } of e6) {
      const e7 = o4.attributeView;
      b ? h3 ? (this._prepare(o4), this._collideVisible(u3, o4, i2, n7), this._collideInvisible(u3, o4)) : a3(o4, (t7, o5) => {
        for (const i3 of o5) e7.setLabelMinZoom(i3.entityTexel, r7);
      }) : a3(o4, (t7, o5) => {
        for (const n8 of o5) f(n8, i2) ? (e7.setLabelMinZoom(n8.entityTexel, c3), h3 && u3.insertMetrics(n8)) : e7.setLabelMinZoom(n8.entityTexel, s2);
      });
    }
  }
  _isFiltered(o4, i2, n7) {
    const l3 = i2.getFilterFlags(o4), s3 = !n7.hasFilter || !!(l3 & N), r9 = null == n7.featureEffect || n7.featureEffect.excludedLabelsVisible || !!(l3 & O);
    return !(s3 && r9);
  }
  _prepare(e6) {
    const t6 = e6.attributeView, o4 = /* @__PURE__ */ new Set();
    a3(e6, (i2, n7) => {
      for (const l3 of n7) {
        const i3 = l3.entityTexel;
        if (o4.has(i3)) continue;
        if (o4.add(i3), this._isFiltered(i3, t6, e6.layerView)) {
          t6.setLabelMinZoom(i3, s2);
          continue;
        }
        t6.getLabelMinZoom(i3) !== c3 ? t6.setLabelMinZoom(i3, r7) : t6.setLabelMinZoom(i3, c3);
      }
    });
  }
  _collideVisible(e6, t6, o4, r9) {
    const d7 = t6.attributeView, u3 = /* @__PURE__ */ new Set();
    a3(t6, (t7, a6) => {
      for (let b = 0; b < a6.length; b++) {
        const h3 = a6[b].entityTexel;
        if (u3.has(h3)) continue;
        if (t7.key.level !== r9) {
          d7.setLabelMinZoom(h3, s2), u3.add(h3);
          continue;
        }
        if (!f(a6[b], o4)) {
          d7.setLabelMinZoom(h3, s2), u3.add(h3);
          continue;
        }
        if (0 !== d7.getLabelMinZoom(h3)) {
          u3.add(h3);
          continue;
        }
        let m2 = false, M = true;
        const g4 = b;
        let p2 = b;
        for (; p2 < a6.length; p2++) {
          const t8 = a6[p2];
          if (t8.entityTexel !== h3) break;
          if (m2) continue;
          switch (e6.hasCollision(t8)) {
            case o3:
              break;
            case r6:
              m2 = true, M = false;
              break;
            case h:
              M = false;
          }
        }
        if (!m2) for (let t8 = g4; t8 < p2; t8++) e6.insertMetrics(a6[t8]);
        b = p2 - 1, M || (u3.add(h3), d7.setLabelMinZoom(h3, m2 ? s2 : c3));
      }
    });
  }
  _collideInvisible(e6, t6) {
    const o4 = t6.attributeView, s3 = /* @__PURE__ */ new Set();
    a3(t6, (t7, a6) => {
      for (let f4 = 0; f4 < a6.length; f4++) {
        const t8 = a6[f4].entityTexel;
        if (s3.has(t8)) continue;
        if (o4.getLabelMinZoom(t8) !== r7) {
          s3.add(t8);
          continue;
        }
        let d7 = false, u3 = true;
        const b = f4;
        let h3 = f4;
        for (; h3 < a6.length; h3++) {
          const o5 = a6[h3];
          if (o5.entityTexel !== t8) break;
          if (d7) continue;
          switch (e6.hasCollision(o5)) {
            case o3:
              break;
            case r6:
              d7 = true, u3 = false;
              break;
            case h:
              u3 = false;
          }
        }
        if (!d7) for (let o5 = b; o5 < h3; o5++) e6.insertMetrics(a6[o5]);
        f4 = h3 - 1, u3 || (s3.add(t8), o4.setLabelMinZoom(t8, d7 ? r7 : c3));
      }
    });
  }
  _transformMetrics(e6) {
    for (const {
      container: t6,
      geometryType: o4,
      vvEvaluators: i2
    } of e6) a3(t6, (e7, n7) => {
      const l3 = t6.attributeView, s3 = e7.transforms.labelMat2d;
      s3[4] = Math.round(s3[4]), s3[5] = Math.round(s3[5]);
      const r9 = "polyline" === o4;
      for (const t7 of n7) {
        const {
          entityTexel: e8,
          anchorX: o5,
          anchorY: n8
        } = t7;
        let c5 = t7.referenceBounds?.size ?? 0;
        const a6 = i2[0];
        if (null != a6) {
          const t8 = a6(l3.getVVSize(e8));
          c5 = isNaN(t8) || null == t8 || t8 === 1 / 0 ? c5 : t8;
        }
        const f4 = t7.directionX * (c5 / 2), d7 = t7.directionY * (c5 / 2);
        for (const i3 of t7.bounds) {
          let e9 = o5, t8 = n8;
          if (r9) {
            let o6 = e9 + i3.x + f4, n9 = t8 + i3.y + d7;
            o6 = s3[0] * o6 + s3[2] * n9 + s3[4], n9 = s3[1] * o6 + s3[3] * n9 + s3[5], i3.computedX = Math.floor(o6), i3.computedY = Math.floor(n9);
          } else {
            e9 = s3[0] * o5 + s3[2] * n8 + s3[4], t8 = s3[1] * o5 + s3[3] * n8 + s3[5];
            const l4 = e9 + i3.x + f4, r10 = t8 + i3.y + d7;
            i3.computedX = l4, i3.computedY = r10;
          }
        }
      }
    });
  }
};

// ../../../node_modules/@arcgis/core/views/2d/LabelManager.js
var r8 = 32;
var a4 = class extends S {
  constructor(e6) {
    super(e6), this._lastUpdate = 0, this.collisionEngine = new d(), this.lastUpdateId = -1, this.updateRequested = false, this.view = null;
  }
  get updating() {
    return has("esri-2d-log-updating") && console.log(`Updating LabelManager ${this.updateRequested}:
-> updateRequested: ${this.updateRequested}`), this.updateRequested;
  }
  update(e6) {
    const t6 = performance.now();
    t6 - this._lastUpdate >= r8 ? (this._lastUpdate = t6, this.doUpdate(e6)) : this.requestUpdate();
  }
  viewChange() {
    this.requestUpdate();
  }
  requestUpdate() {
    this.updateRequested || (this.updateRequested = true, this.view?.requestUpdate());
  }
  processUpdate(e6) {
    this.updateRequested && (this.updateRequested = false, this.update(e6));
  }
  doUpdate(e6) {
    const t6 = this.view;
    if (t6) try {
      const s3 = e6.state.scale, o4 = t6.featuresTilingScheme.getClosestInfoForScale(s3).level;
      this.collisionEngine.run(t6.allLayerViews.items, e6, s3, o4);
    } catch (s3) {
    }
  }
};
e([y()], a4.prototype, "updateRequested", void 0), e([y()], a4.prototype, "updating", null), e([y()], a4.prototype, "view", void 0), a4 = e([a("esri.views.2d.LabelManager")], a4);

// ../../../node_modules/@arcgis/core/views/2d/navigation/ZoomBox.js
var n6 = "esri-zoom-box";
var h2 = {
  container: `${n6}__container`,
  overlay: `${n6}__overlay`,
  background: `${n6}__overlay-background`,
  box: `${n6}__outline`
};
var l2 = {
  zoom: "Shift",
  counter: "Control"
};
var d2 = class extends S {
  constructor(t6) {
    super(t6), this._container = null, this._overlay = null, this._backgroundShape = null, this._boxShape = null, this._box = {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    }, this._rafId = null, this._redraw = this._redraw.bind(this);
  }
  destroy() {
    this.view = null;
  }
  set view(t6) {
    this.removeAllHandles(), this._destroyOverlay(), this._set("view", t6), t6 && this.addHandles([t6.on("drag", [l2.zoom], (t7) => this._handleDrag(t7, 1), _2.INTERNAL), t6.on("drag", [l2.zoom, l2.counter], (t7) => this._handleDrag(t7, -1), _2.INTERNAL)]);
  }
  _start() {
    this._createContainer(), this._createOverlay(), this.navigation.begin();
  }
  _update(t6, e6, i2, o4) {
    this._box.x = t6, this._box.y = e6, this._box.width = i2, this._box.height = o4, this._rafId || (this._rafId = requestAnimationFrame(this._redraw));
  }
  _end(t6, e6, r9, s3, a6) {
    const n7 = this.view, h3 = n7.toMap(c(t6 + 0.5 * r9, e6 + 0.5 * s3));
    let l3 = Math.max(r9 / n7.width, s3 / n7.height);
    -1 === a6 && (l3 = 1 / l3), this._destroyOverlay(), this.navigation.end(), n7.goTo({
      center: h3,
      scale: n7.scale * l3
    }, {
      animationMode: "always",
      duration: n(has("mapview-essential-goto-duration"))
    });
  }
  _updateBox(t6, e6, i2, o4) {
    const r9 = this._boxShape;
    r9.setAttributeNS(null, "x", "" + t6), r9.setAttributeNS(null, "y", "" + e6), r9.setAttributeNS(null, "width", "" + i2), r9.setAttributeNS(null, "height", "" + o4), r9.setAttributeNS(null, "class", h2.box);
  }
  _updateBackground(t6, e6, i2, o4) {
    this._backgroundShape.setAttributeNS(null, "d", this._toSVGPath(t6, e6, i2, o4, this.view.width, this.view.height));
  }
  _createContainer() {
    const t6 = document.createElement("div");
    t6.className = h2.container, this.view.root.appendChild(t6), this._container = t6;
  }
  _createOverlay() {
    const t6 = this.view.width, e6 = this.view.height, i2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    i2.setAttributeNS(null, "d", "M 0 0 L " + t6 + " 0 L " + t6 + " " + e6 + " L 0 " + e6 + " Z"), i2.setAttributeNS(null, "class", h2.background);
    const o4 = document.createElementNS("http://www.w3.org/2000/svg", "rect"), r9 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    r9.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink"), r9.setAttributeNS(null, "class", h2.overlay), r9.appendChild(i2), r9.appendChild(o4), this._container.appendChild(r9), this._backgroundShape = i2, this._boxShape = o4, this._overlay = r9;
  }
  _destroyOverlay() {
    this._container && this._container.parentNode && this._container.parentNode.removeChild(this._container), this._container = this._backgroundShape = this._boxShape = this._overlay = null;
  }
  _toSVGPath(t6, e6, i2, o4, r9, s3) {
    const a6 = t6 + i2, n7 = e6 + o4;
    return "M 0 0 L " + r9 + " 0 L " + r9 + " " + s3 + " L 0 " + s3 + " ZM " + t6 + " " + e6 + " L " + t6 + " " + n7 + " L " + a6 + " " + n7 + " L " + a6 + " " + e6 + " Z";
  }
  _handleDrag(t6, e6) {
    const i2 = t6.x, o4 = t6.y, r9 = t6.origin.x, s3 = t6.origin.y;
    let a6, n7, h3, l3;
    switch (i2 > r9 ? (a6 = r9, h3 = i2 - r9) : (a6 = i2, h3 = r9 - i2), o4 > s3 ? (n7 = s3, l3 = o4 - s3) : (n7 = o4, l3 = s3 - o4), t6.action) {
      case "start":
        this._start();
        break;
      case "update":
        this._update(a6, n7, h3, l3);
        break;
      case "end":
        this._end(a6, n7, h3, l3, e6);
    }
    t6.stopPropagation();
  }
  _redraw() {
    if (!this._rafId) return;
    if (this._rafId = null, !this._overlay) return;
    const {
      x: t6,
      y: e6,
      width: i2,
      height: o4
    } = this._box;
    this._updateBox(t6, e6, i2, o4), this._updateBackground(t6, e6, i2, o4), this._rafId = requestAnimationFrame(this._redraw);
  }
};
e([y()], d2.prototype, "navigation", void 0), e([y()], d2.prototype, "view", null), d2 = e([a("esri.views.2d.navigation.ZoomBox")], d2);
var c4 = d2;

// ../../../node_modules/@arcgis/core/views/2d/navigation/actions/Pan.js
var v = class extends S {
  constructor(t6) {
    super(t6), this.animationTime = 0, this.momentumEstimator = new c2(500, 6, 0.92), this.momentum = null, this.tmpMomentum = n2(), this.momentumFinished = false, this.viewpoint = new m({
      targetGeometry: new _(),
      scale: 0,
      rotation: 0
    }), this._previousDrag = null, p(() => this.momentumFinished, () => this.navigation.stop());
  }
  begin(t6, i2) {
    this.navigation.begin(), this.momentumEstimator.reset(), this.addToEstimator(i2), this._previousDrag = i2;
  }
  update(t6, i2) {
    this.addToEstimator(i2);
    let o4 = i2.center.x, e6 = i2.center.y;
    const s3 = this._previousDrag;
    o4 = s3 ? s3.center.x - o4 : -o4, e6 = s3 ? e6 - s3.center.y : e6, t6.viewpoint = kt(this.viewpoint, t6.viewpoint, [o4 || 0, e6 || 0]), this._previousDrag = i2;
  }
  end(t6, i2) {
    this.addToEstimator(i2);
    const o4 = t6.navigation.effectiveMomentumEnabled;
    this.momentum = o4 ? this.momentumEstimator.evaluateMomentum() : null, this.animationTime = 0, this.momentum && this.onAnimationUpdate(t6), this._previousDrag = null, this.navigation.end();
  }
  addToEstimator(t6) {
    const i2 = t6.center.x, o4 = t6.center.y, e6 = i(-i2, o4), m2 = r(-i2, o4, 0);
    this.momentumEstimator.add(e6, m2, 1e-3 * t6.timestamp);
  }
  onAnimationUpdate(t6) {
    this.navigation.animationManager?.animateContinuous(t6.viewpoint, (i2, o4) => {
      const {
        momentum: e6,
        animationTime: s3,
        tmpMomentum: m2
      } = this, n7 = 1e-3 * o4;
      if (!(this.momentumFinished = !e6 || e6.isFinished(s3))) {
        const o5 = e6.valueDelta(s3, n7);
        g(m2, e6.direction, o5), kt(i2, i2, m2), t6.constraints.constrainByGeometry(i2);
      }
      this.animationTime += n7;
    });
  }
  stopMomentumNavigation() {
    this.momentum && (this.momentumEstimator.reset(), this.momentum = null, this.navigation.stop());
  }
};
e([y()], v.prototype, "momentumFinished", void 0), e([y()], v.prototype, "viewpoint", void 0), e([y()], v.prototype, "navigation", void 0), v = e([a("esri.views.2d.navigation.actions.Pan")], v);
var d3 = v;

// ../../../node_modules/@arcgis/core/views/2d/navigation/actions/Pinch.js
var _3 = class extends S {
  constructor(t6) {
    super(t6), this._animationTime = 0, this._momentumFinished = false, this._previousAngle = 0, this._previousRadius = 0, this._previousCenter = null, this._rotationMomentumEstimator = new a2(0.6, 0.15, 0.95), this._rotationDirection = 1, this._startAngle = 0, this._startRadius = 0, this._updateTimestamp = null, this._zoomDirection = 1, this._zoomMomentumEstimator = new s(), this._zoomOnly = null, this.viewpoint = new m({
      targetGeometry: new _(),
      scale: 0,
      rotation: 0
    }), this.zoomMomentum = null, this.rotateMomentum = null, this.addHandles(p(() => this._momentumFinished, () => this.navigation.stop()));
  }
  begin(t6, o4) {
    this.navigation.begin(), this._rotationMomentumEstimator.reset(), this._zoomMomentumEstimator.reset(), this._zoomOnly = null, this._previousAngle = this._startAngle = o4.angle, this._previousRadius = this._startRadius = o4.radius, this._previousCenter = o4.center, this._updateTimestamp = null, t6.constraints.rotationEnabled && this.addToRotateEstimator(0, o4.timestamp), this.addToZoomEstimator(o4, 1);
  }
  update(t6, o4) {
    null === this._updateTimestamp && (this._updateTimestamp = o4.timestamp);
    const i2 = o4.angle, s3 = o4.radius, e6 = o4.center, n7 = Math.abs(180 * (i2 - this._startAngle) / Math.PI), m2 = Math.abs(s3 - this._startRadius), a6 = this._startRadius / s3;
    if (this._previousRadius && this._previousCenter) {
      const r9 = s3 / this._previousRadius;
      let h3 = 180 * (i2 - this._previousAngle) / Math.PI;
      this._rotationDirection = h3 >= 0 ? 1 : -1, this._zoomDirection = r9 >= 1 ? 1 : -1, t6.constraints.rotationEnabled ? (null === this._zoomOnly && o4.timestamp - this._updateTimestamp > 200 && (this._zoomOnly = m2 - n7 > 0), null === this._zoomOnly || this._zoomOnly ? h3 = 0 : this.addToRotateEstimator(i2 - this._startAngle, o4.timestamp)) : h3 = 0, this.addToZoomEstimator(o4, a6), this.navigation.setViewpoint([e6.x, e6.y], 1 / r9, h3, [this._previousCenter.x - e6.x, e6.y - this._previousCenter.y]);
    }
    this._previousAngle = i2, this._previousRadius = s3, this._previousCenter = e6;
  }
  end(t6) {
    this.rotateMomentum = this._rotationMomentumEstimator.evaluateMomentum(), this.zoomMomentum = this._zoomMomentumEstimator.evaluateMomentum(), this._animationTime = 0, (this.rotateMomentum || this.zoomMomentum) && this.onAnimationUpdate(t6), this.navigation.end();
  }
  addToRotateEstimator(t6, o4) {
    this._rotationMomentumEstimator.add(t6, 1e-3 * o4);
  }
  addToZoomEstimator(t6, o4) {
    this._zoomMomentumEstimator.add(o4, 1e-3 * t6.timestamp);
  }
  canZoomIn(t6) {
    const o4 = t6.scale, i2 = t6.constraints.effectiveMaxScale;
    return 0 === i2 || o4 > i2;
  }
  canZoomOut(t6) {
    const o4 = t6.scale, i2 = t6.constraints.effectiveMinScale;
    return 0 === i2 || o4 < i2;
  }
  onAnimationUpdate(t6) {
    this.navigation.animationManager?.animateContinuous(t6.viewpoint, (o4, i2) => {
      const s3 = !this.canZoomIn(t6) && this._zoomDirection > 1 || !this.canZoomOut(t6) && this._zoomDirection < 1, e6 = !this.rotateMomentum || this.rotateMomentum.isFinished(this._animationTime), n7 = s3 || !this.zoomMomentum || this.zoomMomentum.isFinished(this._animationTime), h3 = 1e-3 * i2;
      if (this._momentumFinished = e6 && n7, !this._momentumFinished) {
        const i3 = this.rotateMomentum ? Math.abs(this.rotateMomentum.valueDelta(this._animationTime, h3)) * this._rotationDirection * 180 / Math.PI : 0;
        let s4 = this.zoomMomentum ? Math.abs(this.zoomMomentum.valueDelta(this._animationTime, h3)) : 1;
        const e7 = n3(), n8 = n3();
        if (this._previousCenter) {
          o2(e7, this._previousCenter.x, this._previousCenter.y), rt(n8, t6.size, t6.padding), u2(e7, e7, n8);
          const {
            constraints: r9,
            scale: h4
          } = t6, p2 = h4 * s4;
          s4 < 1 && !r9.canZoomInTo(p2) ? (s4 = h4 / r9.effectiveMaxScale, this.zoomMomentum = null, this.rotateMomentum = null) : s4 > 1 && !r9.canZoomOutTo(p2) && (s4 = h4 / r9.effectiveMinScale, this.zoomMomentum = null, this.rotateMomentum = null), Gt(o4, t6.viewpoint, s4, i3, e7, t6.size), t6.constraints.constrainByGeometry(o4);
        }
      }
      this._animationTime += h3;
    });
  }
  stopMomentumNavigation() {
    (this.rotateMomentum || this.zoomMomentum) && (this.rotateMomentum && (this._rotationMomentumEstimator.reset(), this.rotateMomentum = null), this.zoomMomentum && (this._zoomMomentumEstimator.reset(), this.zoomMomentum = null), this.navigation.stop());
  }
};
e([y()], _3.prototype, "_momentumFinished", void 0), e([y()], _3.prototype, "viewpoint", void 0), e([y()], _3.prototype, "navigation", void 0), _3 = e([a("esri.views.2d.navigation.actions.Pinch")], _3);
var d4 = _3;

// ../../../node_modules/@arcgis/core/views/2d/navigation/actions/Rotate.js
var d5 = n3();
var g2 = n3();
var j = class extends S {
  constructor(t6) {
    super(t6), this._previousCenter = n3(), this.viewpoint = new m({
      targetGeometry: new _(),
      scale: 0,
      rotation: 0
    });
  }
  begin(t6, e6) {
    this.navigation.begin(), o2(this._previousCenter, e6.center.x, e6.center.y);
  }
  update(t6, e6) {
    const {
      state: {
        size: o4,
        padding: r9
      }
    } = t6;
    o2(d5, e6.center.x, e6.center.y), $(g2, o4, r9), t6.viewpoint = bt(this.viewpoint, t6.state.paddedViewState.viewpoint, pt(g2, this._previousCenter, d5)), r2(this._previousCenter, d5);
  }
  end() {
    this.navigation.end();
  }
};
e([y()], j.prototype, "viewpoint", void 0), e([y()], j.prototype, "navigation", void 0), j = e([a("esri.views.2d.navigation.actions.Rotate")], j);
var f2 = j;

// ../../../node_modules/@arcgis/core/views/2d/navigation/MapViewNavigation.js
var v2 = 10;
var g3 = 1;
var d6 = new m({
  targetGeometry: new _()
});
var _4 = [0, 0];
var T = 250;
var f3 = class extends S {
  constructor(t6) {
    super(t6), this._endTimer = null, this._lastEventTimestamp = null, this.animationManager = null, this.interacting = false;
  }
  initialize() {
    this.pan = new d3({
      navigation: this
    }), this.rotate = new f2({
      navigation: this
    }), this.pinch = new d4({
      navigation: this
    }), this.zoomBox = new c4({
      view: this.view,
      navigation: this
    });
  }
  destroy() {
    this.pan = u(this.pan), this.rotate = u(this.rotate), this.pinch = u(this.pinch), this.zoomBox = u(this.zoomBox), this.animationManager = null;
  }
  begin() {
    this.stop(), this._set("interacting", true);
  }
  end() {
    this._lastEventTimestamp = performance.now(), this._startTimer(T);
  }
  zoom(_0) {
    return __async(this, arguments, function* (t6, i2 = this._getDefaultAnchor()) {
      if (this.begin(), this.view.constraints.snapToZoom && this.view.constraints.effectiveLODs) return t6 < 1 ? this.zoomIn(i2) : this.zoomOut(i2);
      this.setViewpoint(i2, t6, 0, [0, 0]);
    });
  }
  zoomIn(t6) {
    return __async(this, null, function* () {
      const i2 = this.view, o4 = i2.constraints.snapToNextScale(i2.scale);
      return this._zoomToScale(o4, t6);
    });
  }
  zoomOut(t6) {
    return __async(this, null, function* () {
      const i2 = this.view, o4 = i2.constraints.snapToPreviousScale(i2.scale);
      return this._zoomToScale(o4, t6);
    });
  }
  setViewpoint(t6, i2, o4, n7) {
    this.begin(), this.view.stateManager.state.viewpoint = this._scaleRotateTranslateViewpoint(this.view.viewpoint, t6, i2, o4, n7), this.end();
  }
  setViewpointImmediate(t6, i2 = 0, o4 = [0, 0], n7 = this._getDefaultAnchor()) {
    this.view.stateManager.state.viewpoint = this._scaleRotateTranslateViewpoint(this.view.viewpoint, n7, t6, i2, o4);
  }
  continuousRotateClockwise() {
    const t6 = this.view.viewpoint;
    this.animationManager?.animateContinuous(t6, (t7) => {
      bt(t7, t7, -g3);
    });
  }
  continuousRotateCounterclockwise() {
    const t6 = this.view.viewpoint;
    this.animationManager?.animateContinuous(t6, (t7) => {
      bt(t7, t7, g3);
    });
  }
  resetRotation() {
    this.view.constraints.rotationEnabled && (this.view.rotation = 0);
  }
  continuousPanLeft() {
    this._continuousPan([-v2, 0]);
  }
  continuousPanRight() {
    this._continuousPan([v2, 0]);
  }
  continuousPanUp() {
    this._continuousPan([0, v2]);
  }
  continuousPanDown() {
    this._continuousPan([0, -v2]);
  }
  continuousPanVector({
    x: t6,
    y: i2
  }) {
    this._continuousPan([t6 * v2, i2 * v2]);
  }
  stop() {
    this.pan.stopMomentumNavigation(), this.animationManager?.stop(), this.end(), null !== this._endTimer && (clearTimeout(this._endTimer), this._endTimer = null, this._set("interacting", false));
  }
  _continuousPan(t6) {
    const i2 = this.view.viewpoint;
    this.animationManager?.animateContinuous(i2, (i3) => {
      kt(i3, i3, t6), this.view.constraints.constrainByGeometry(i3);
    });
  }
  _startTimer(t6) {
    return null !== this._endTimer || (this._endTimer = setTimeout(() => {
      this._endTimer = null;
      const t7 = performance.now() - (this._lastEventTimestamp ?? 0);
      t7 < T ? this._endTimer = this._startTimer(t7) : this._set("interacting", false);
    }, t6)), this._endTimer;
  }
  _getDefaultAnchor() {
    const {
      size: t6,
      padding: {
        left: i2,
        right: o4,
        top: n7,
        bottom: e6
      }
    } = this.view;
    return _4[0] = 0.5 * (t6[0] - o4 + i2), _4[1] = 0.5 * (t6[1] - e6 + n7), _4;
  }
  _zoomToScale(_0) {
    return __async(this, arguments, function* (t6, i2 = this._getDefaultAnchor()) {
      const {
        view: o4
      } = this, {
        constraints: n7,
        scale: s3,
        viewpoint: a6,
        size: r9,
        padding: c5
      } = o4, m2 = n7.canZoomInTo(t6), p2 = n7.canZoomOutTo(t6);
      if (!(t6 < s3 && !m2 || t6 > s3 && !p2)) return Rt(d6, a6, t6 / s3, 0, i2, r9, c5), n7.constrainByGeometry(d6), o4.goTo(d6, {
        animate: true,
        animationMode: "always",
        duration: n(has("mapview-essential-goto-duration")),
        pickClosestTarget: false
      });
    });
  }
  _scaleRotateTranslateViewpoint(t6, i2, o4, n7, e6) {
    const {
      view: s3
    } = this, {
      size: a6,
      padding: r9,
      constraints: c5,
      scale: p2,
      viewpoint: u3
    } = s3, l3 = p2 * o4, w = c5.canZoomInTo(l3), v3 = c5.canZoomOutTo(l3);
    return (o4 < 1 && !w || o4 > 1 && !v3) && (o4 = 1), kt(u3, u3, e6), Rt(t6, u3, o4, n7, i2, a6, r9), c5.constrainByGeometry(t6);
  }
};
e([y()], f3.prototype, "animationManager", void 0), e([y({
  type: Boolean,
  readOnly: true
})], f3.prototype, "interacting", void 0), e([y()], f3.prototype, "pan", void 0), e([y()], f3.prototype, "pinch", void 0), e([y()], f3.prototype, "rotate", void 0), e([y()], f3.prototype, "view", void 0), e([y()], f3.prototype, "zoomBox", void 0), f3 = e([a("esri.views.2d.navigation.MapViewNavigation")], f3);
var y2 = f3;

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/shaders/MagnifierPrograms.js
var a5 = {
  shaders: {
    vertexShader: n4("magnifier/magnifier.vert"),
    fragmentShader: n4("magnifier/magnifier.frag")
  },
  attributes: /* @__PURE__ */ new Map([["a_pos", 0]])
};
function t5(r9) {
  return e3(r9, a5);
}

export {
  e4 as e,
  r3 as r,
  t4 as t,
  r4 as r2,
  n5 as n,
  a4 as a,
  y2 as y,
  a5 as a2,
  t5 as t2
};
//# sourceMappingURL=chunk-JSRMSYFX.js.map
