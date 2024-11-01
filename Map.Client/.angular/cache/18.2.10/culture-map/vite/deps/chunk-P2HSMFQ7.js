import {
  t as t3,
  x as x4
} from "./chunk-2RBDM2DS.js";
import {
  p
} from "./chunk-EU7GCI2A.js";
import {
  t as t2
} from "./chunk-2CPAIFT3.js";
import {
  l,
  o,
  q as q2,
  u as u3,
  v,
  x as x3
} from "./chunk-VS26W5Y5.js";
import {
  n as n2
} from "./chunk-L7ZKWTWL.js";
import {
  c
} from "./chunk-N4KQPPPI.js";
import {
  q,
  x as x2
} from "./chunk-4OGGMTIH.js";
import {
  a as a2
} from "./chunk-VWML4J2J.js";
import {
  J
} from "./chunk-DUTZNK67.js";
import {
  u as u2
} from "./chunk-K226GFDN.js";
import {
  i,
  s,
  x
} from "./chunk-7ZJ6P7J7.js";
import {
  A,
  e as e2,
  g,
  r as r2,
  u,
  z
} from "./chunk-AXVPJBVW.js";
import {
  n,
  t
} from "./chunk-OXEPWRM7.js";
import {
  d
} from "./chunk-6WHTZNUH.js";
import {
  e
} from "./chunk-4Z5SGKRM.js";
import {
  S,
  r
} from "./chunk-ANKOCGE2.js";
import {
  y
} from "./chunk-7CJXZOFG.js";
import {
  a3 as a
} from "./chunk-DDYVXG4F.js";

// ../../../node_modules/@arcgis/core/views/3d/interactive/visualElements/support/Segment.js
var m = class _m {
  constructor(t4 = n(), e3 = n()) {
    this.startRenderSpace = t4, this.endRenderSpace = e3, this.type = "euclidean";
  }
  eval(r4, i2, o2) {
    return A(i2, this.startRenderSpace, this.endRenderSpace, r4), o2 && (e2(o2, this.endRenderSpace, this.startRenderSpace), z(o2, o2)), i2;
  }
  createRenderGeometry(t4, s2) {
    const r4 = [], i2 = [], o2 = (s3, o3) => {
      const n5 = j;
      e2(n5, s3, t4), r4.push([n5[0], n5[1], n5[2]]), i2.push([o3[0], o3[1], o3[2]]);
    }, n4 = s2.worldUpAtPosition(this.eval(0.5, R), c.get());
    return o2(this.startRenderSpace, n4), o2(this.endRenderSpace, n4), {
      points: r4,
      normals: i2
    };
  }
  static fromPositionAndVector(t4, e3, s2 = 1) {
    return g(R, e3, s2), u(R, t4, R), new _m(t(t4), t(R));
  }
};
var _ = class {
  _projectIn(t4, e3) {
    this._project ? n2(t4, this.renderSpatialReference, e3, this._pcpf) : r2(e3, t4);
  }
  constructor(t4, e3, s2) {
    this.startRenderSpace = t4, this.endRenderSpace = e3, this.renderSpatialReference = s2, this.type = "geodesic", this._start = n(), this._end = n(), this._pcpf = a2(s2), this._project = J(s2, this._pcpf), this._projectIn(t4, this._start), this._projectIn(e3, this._end);
  }
  eval(r4, o2, n4) {
    if (this._project) {
      if (n4) {
        const t4 = j;
        x2(this._start, this._end, r4, o2, t4), u(S2, o2, t4), n2(o2, this._pcpf, o2, this.renderSpatialReference), n2(S2, this._pcpf, S2, this.renderSpatialReference), e2(n4, S2, o2), z(n4, n4);
      } else q(this._start, this._end, r4, o2), n2(o2, this._pcpf, o2, this.renderSpatialReference);
    } else A(o2, this._start, this._end, r4), n4 && (e2(n4, this._end, this._start), z(n4, n4));
    return o2;
  }
  createRenderGeometry(t4, s2) {
    const r4 = [], i2 = [], o2 = (s3, o3) => {
      const n5 = S2;
      e2(n5, s3, t4), r4.push([n5[0], n5[1], n5[2]]), i2.push([o3[0], o3[1], o3[2]]);
    }, n4 = 128 + 1 & -2;
    for (let e3 = 0; e3 < n4; ++e3) {
      const t5 = e3 / (n4 - 1), r5 = R, i3 = j;
      this.eval(t5, r5), s2.worldUpAtPosition(r5, i3), o2(r5, i3);
    }
    return {
      points: r4,
      normals: i2
    };
  }
};
var R = n();
var j = n();
var S2 = n();

// ../../../node_modules/@arcgis/core/views/overlay/LineOverlayItem.js
var r3 = class extends S {
  get startPosition() {
    return [this.startX, this.startY];
  }
  set startPosition(t4) {
    this._set("startX", t4[0]), this._set("startY", t4[1]);
  }
  get endPosition() {
    return [this.endX, this.endY];
  }
  set endPosition(t4) {
    this._set("endX", t4[0]), this._set("endY", t4[1]);
  }
  constructor(t4) {
    super(t4), this.startX = 0, this.startY = 0, this.endX = 0, this.endY = 0, this.width = 1, this.color = [0, 0, 0, 0.5], this.visible = true, this.isDecoration = true;
  }
  get _strokeStyle() {
    const t4 = this.color;
    return `rgba(${t4[0]}, ${t4[1]}, ${t4[2]}, ${t4[3]})`;
  }
  get _lineCap() {
    return "round";
  }
  render() {
    const {
      height: t4,
      left: e3,
      top: s2,
      width: i2,
      x1: r4,
      x2: n4,
      y1: a3,
      y2: p2
    } = this._calculateCoordinates(h), l2 = `stroke: ${this._strokeStyle}; stroke-width: ${this.width}; stroke-linecap: ${this._lineCap};`;
    return t3("div", {
      classes: {
        "esri-line-overlay-item": true
      },
      styles: {
        left: e3 + "px",
        top: s2 + "px",
        width: i2 + "px",
        height: t4 + "px",
        visibility: this.visible ? "visible" : "hidden"
      }
    }, [t3("svg", {
      width: i2,
      height: t4
    }, [t3("line", {
      x1: r4,
      y1: a3,
      x2: n4,
      y2: p2,
      style: l2
    })])]);
  }
  renderCanvas(t4) {
    if (!this.visible) return;
    t4.strokeStyle = this._strokeStyle, t4.lineWidth = this.width, t4.lineCap = this._lineCap;
    const e3 = this._calculateCoordinates(h);
    t4.beginPath(), t4.moveTo(e3.left + e3.x1, e3.top + e3.y1), t4.lineTo(e3.left + e3.x2, e3.top + e3.y2), t4.stroke();
  }
  _calculateCoordinates(t4) {
    const e3 = Math.min(this.startX, this.endX), s2 = Math.max(this.startX, this.endX), i2 = Math.min(this.startY, this.endY), o2 = Math.max(this.startY, this.endY), r4 = this.width;
    return t4.left = e3 - r4, t4.top = i2 - r4, t4.width = s2 - e3 + 2 * r4, t4.height = Math.max(20, o2 - i2 + 2 * r4), t4.x1 = this.startX - e3 + r4, t4.y1 = this.startY - i2 + r4, t4.x2 = this.endX - e3 + r4, t4.y2 = this.endY - i2 + r4, t4;
  }
};
e([y()], r3.prototype, "startX", void 0), e([y()], r3.prototype, "startY", void 0), e([y()], r3.prototype, "endX", void 0), e([y()], r3.prototype, "endY", void 0), e([y()], r3.prototype, "startPosition", null), e([y()], r3.prototype, "endPosition", null), e([y()], r3.prototype, "width", void 0), e([y()], r3.prototype, "color", void 0), e([y()], r3.prototype, "visible", void 0), e([y()], r3.prototype, "isDecoration", void 0), e([y({
  readOnly: true
})], r3.prototype, "_strokeStyle", null), r3 = e([a("esri.views.overlay.LineOverlayItem")], r3);
var h = {
  left: 0,
  top: 0,
  width: 0,
  height: 0,
  x1: 0,
  y1: 0,
  x2: 0,
  y2: 0
};
var n3 = r3;

// ../../../node_modules/@arcgis/core/views/3d/interactive/visualElements/LabelVisualElement.js
var f = class extends t2 {
  constructor(o2) {
    super(o2), this._handles = new r(), this._textItem = null, this._calloutItem = null, this._showCallout = true, this._showText = true, this._geometry = null, this._text = "-", this._fontSize = 14, this._backgroundColor = new u2([0, 0, 0, 0.6]), this._calloutColor = new u2([0, 0, 0, 0.5]), this._textColor = new u2([255, 255, 255]), this._distance = 25, this._anchor = "right", this.updatePositionOnCameraMove = true, this.applyProperties(o2);
  }
  get geometry() {
    return this._geometry;
  }
  set geometry(t4) {
    this._geometry = t4, this.updateLabelPosition();
  }
  get isDecoration() {
    return this._isDecoration;
  }
  set isDecoration(t4) {
    this._isDecoration = t4, this._textItem && (this._textItem.isDecoration = t4), this._calloutItem && (this._calloutItem.isDecoration = t4);
  }
  get textItem() {
    return this._textItem;
  }
  get text() {
    return this._text;
  }
  set text(t4) {
    this._text = t4, this.attached && (this._textItem.text = this._text);
  }
  get fontSize() {
    return this._fontSize;
  }
  set fontSize(t4) {
    this._fontSize = t4, this.attached && (this._textItem.fontSize = this._fontSize);
  }
  get backgroundColor() {
    return this._backgroundColor;
  }
  set backgroundColor(t4) {
    this._backgroundColor = t4, this.attached && (this._textItem.backgroundColor = this._backgroundColor);
  }
  get calloutColor() {
    return this._calloutColor;
  }
  set calloutColor(t4) {
    this._calloutColor = t4, this.attached && (this._calloutItem.color = this._calloutColor.toRgba());
  }
  get textColor() {
    return this._textColor;
  }
  set textColor(t4) {
    this._textColor = t4, this.attached && (this._textItem.textColor = this._textColor);
  }
  get distance() {
    return this._distance;
  }
  set distance(t4) {
    this._distance !== t4 && (this._distance = t4, this.updateLabelPosition());
  }
  get anchor() {
    return this._anchor;
  }
  set anchor(t4) {
    this._anchor !== t4 && (this._anchor = t4, this.updateLabelPosition());
  }
  get _camera() {
    return this.view.state.cssCamera;
  }
  overlaps(t4) {
    return !!this.attached && this.textItem.visible && t4.textItem.visible && !!this.view.overlay?.overlaps(this._textItem, t4.textItem);
  }
  updateLabelPosition() {
    if (!this.attached) return;
    this._showText = false, this._showCallout = false;
    const {
      geometry: t4,
      view: e3,
      visible: o2
    } = this;
    if (null != t4 && e3._stage) switch (t4.type) {
      case "point":
        if (!this._computeLabelPositionFromPoint(t4.point, L)) break;
        if (t4.callout) {
          const e4 = this._camera, o3 = t4.callout.distance;
          u3(j2, j2, [0, t4.callout.offset]), e4.renderToScreen(j2, L), o(P, 0, 1), l(P, P, o3), u3(P, P, j2), e4.renderToScreen(P, D), this._showCallout = this._updatePosition(L, D);
        } else this._textItem.position = [L[0], L[1]], this._textItem.anchor = "center";
        this._showText = true;
        break;
      case "corner":
        if (!this._computeLabelPositionFromCorner(t4, this._distance, L, D)) break;
        this._showCallout = this._updatePosition(L, D), this._showText = true;
        break;
      case "segment": {
        if (!this._computeLabelPositionFromSegment(t4, this._distance, this._anchor, L, D)) break;
        this._showText = true;
        const e4 = this._updatePosition(L, D);
        this._showCallout = false !== t4.callout && e4, this._showCallout || (this._textItem.anchor = "center");
      }
    }
    this.updateVisibility(o2);
  }
  _computeLabelPositionFromPoint(t4, e3) {
    const o2 = this._camera;
    return o2.projectToRenderScreen(t4, T), !(T[2] < 0 || T[2] > 1) && (o2.renderToScreen(T, e3), true);
  }
  _computeLabelPositionFromCorner(t4, e3, o2, i2) {
    if (!t4) return false;
    const s2 = this._camera;
    return g2(t4.left, 1, s2, S3), x3(S3, S3), g2(t4.right, 0, s2, y2), u3(P, S3, y2), x3(P, P), v(P, P), s2.projectToRenderScreen(t4.left.endRenderSpace, T), !(T[2] < 0 || T[2] > 1) && (s2.renderToScreen(T, o2), l(P, P, e3), u3(P, P, T), s2.renderToScreen(P, i2), true);
  }
  _computeLabelPositionFromSegment(t4, e3, o2, i2, s2) {
    if (!t4) return false;
    const r4 = t4.segment, c2 = this._camera;
    p(r4.startRenderSpace, r4.endRenderSpace, c2, S3), o(P, -S3[1], S3[0]);
    let m2 = false;
    switch (o2) {
      case "top":
        m2 = P[1] < 0;
        break;
      case "bottom":
        m2 = P[1] > 0;
        break;
      case "left":
        m2 = P[0] > 0;
        break;
      case "right":
        m2 = P[0] < 0;
    }
    if (m2 && x3(P, P), 0 === q2(P)) switch (o2) {
      case "top":
        P[1] = 1;
        break;
      case "bottom":
        P[1] = -1;
        break;
      case "left":
        P[0] = -1;
        break;
      case "right":
        P[0] = 1;
    }
    return r4.eval(R2[t4.sampleLocation], k), c2.projectToRenderScreen(k, T), !(T[2] < 0 || T[2] > 1) && (c2.renderToScreen(T, i2), l(P, P, e3), u3(P, P, T), c2.renderToScreen(P, s2), true);
  }
  _updatePosition(t4, e3) {
    if (e3) {
      const o2 = e3[0] - t4[0], i2 = e3[1] - t4[1];
      return this._textItem.position = [e3[0], e3[1]], this._textItem.anchor = Math.abs(o2) > Math.abs(i2) ? o2 > 0 ? "left" : "right" : i2 > 0 ? "top" : "bottom", this._calloutItem.startPosition = [t4[0], t4[1]], this._calloutItem.endPosition = [e3[0], e3[1]], true;
    }
    return this._textItem.position = [t4[0], t4[1]], this._textItem.anchor = "center", false;
  }
  createResources() {
    this._textItem = new x4({
      visible: true,
      text: this._text,
      fontSize: this._fontSize,
      backgroundColor: this._backgroundColor,
      textColor: this._textColor,
      isDecoration: this._isDecoration
    }), this._calloutItem = new n3({
      color: this._calloutColor.toRgba(),
      visible: true,
      width: 2,
      isDecoration: this._isDecoration
    }), this.updateLabelPosition(), this.view.overlay?.items.addMany([this._textItem, this._calloutItem]), this.updatePositionOnCameraMove && this._handles.add(d(() => this.view.state.camera, () => this.updateLabelPosition()));
  }
  destroyResources() {
    this.view.overlay && !this.view.overlay.destroyed && this.view.overlay.items.removeMany([this._textItem, this._calloutItem]), this._handles.removeAll();
  }
  updateVisibility(t4) {
    this._textItem.visible = this._showText && t4, this._calloutItem.visible = this._showCallout && t4;
  }
};
function g2(t4, e3, o2, i2) {
  return t4.eval(e3, C, w), u(I, C, w), p(C, I, o2, i2);
}
function v2(t4) {
  switch (t4) {
    case "top":
      return "bottom";
    case "right":
      return "left";
    case "bottom":
      return "top";
    case "left":
      return "right";
  }
}
var C = n();
var I = n();
var w = n();
var S3 = s();
var y2 = s();
var P = s();
var k = n();
var T = x();
var j2 = s();
var L = i();
var D = i();
var R2 = {
  start: 0,
  center: 0.5,
  end: 1
};

export {
  m,
  _,
  f,
  v2 as v
};
//# sourceMappingURL=chunk-P2HSMFQ7.js.map
