import {
  o
} from "./chunk-WGAPNV7F.js";
import {
  L
} from "./chunk-HJY2YILU.js";
import {
  has
} from "./chunk-DXLOWWK7.js";

// ../../../node_modules/@arcgis/core/views/2d/engine/DisplayObject.js
var s = class extends o {
  constructor() {
    super(...arguments), this._fadeOutResolver = null, this._fadeInResolver = null, this._clips = null, this.computedVisible = true, this.computedOpacity = 1, this.fadeTransitionEnabled = false, this.inFadeTransition = false, this._isReady = false, this._opacity = 1, this.parent = null, this._stage = null, this._visible = true;
  }
  get clips() {
    return this._clips;
  }
  set clips(e) {
    this._clips = e, this.requestRender();
  }
  get isReady() {
    return this._isReady;
  }
  get opacity() {
    return this._opacity;
  }
  set opacity(e) {
    this._opacity !== e && (this._opacity = Math.min(1, Math.max(e, 0)), this.requestRender());
  }
  get stage() {
    return this._stage;
  }
  set stage(e) {
    if (this._stage === e) return;
    const t = this._stage;
    this._stage = e, e ? this._stage?.untrashDisplayObject(this) || (this.onAttach(), this.emit("attach")) : t?.trashDisplayObject(this);
  }
  get transforms() {
    return this._getTransforms();
  }
  _getTransforms() {
    return null == this._transforms && (this._transforms = this._createTransforms()), this._transforms;
  }
  get visible() {
    return this._visible;
  }
  set visible(e) {
    this._visible !== e && (this._visible = e, this.requestRender());
  }
  get hasLabels() {
    return false;
  }
  get hasHighlight() {
    return false;
  }
  get hasBlending() {
    return false;
  }
  fadeIn() {
    return this._fadeInResolver || (this._fadeOutResolver && (this._fadeOutResolver(), this._fadeOutResolver = null), this.opacity = 1, this.computedOpacity = 0, this.fadeTransitionEnabled = true, this._fadeInResolver = L(), this.requestRender()), this._fadeInResolver.promise;
  }
  fadeOut() {
    return this._fadeOutResolver || (this.opacity = 0, this._fadeInResolver && (this._fadeInResolver(), this._fadeInResolver = null), this.fadeTransitionEnabled = true, this._fadeOutResolver = L(), this.requestRender()), this._fadeOutResolver.promise;
  }
  endTransitions() {
    this._fadeInResolver?.(), this._fadeInResolver = null, this._fadeOutResolver?.(), this._fadeOutResolver = null, this.computedOpacity = this.visible ? this.opacity : 0, this.requestRender();
  }
  beforeRender(e) {
    this.updateTransitionProperties(e.deltaTime, e.state.scale), this.setTransform(e.state);
  }
  afterRender(e) {
    this._fadeInResolver && this.computedOpacity === this.opacity ? (this._fadeInResolver(), this._fadeInResolver = null) : this._fadeOutResolver && 0 === this.computedOpacity && (this._fadeOutResolver(), this._fadeOutResolver = null);
  }
  remove() {
    this.parent?.removeChild(this);
  }
  setTransform(e) {
  }
  processRender(e) {
    this.stage && this.computedVisible && this.doRender(e);
  }
  requestRender() {
    this.stage && this.stage.requestRender();
  }
  processDetach() {
    this._fadeInResolver && (this._fadeInResolver(), this._fadeInResolver = null), this._fadeOutResolver && (this._fadeOutResolver(), this._fadeOutResolver = null), this.onDetach(), this.emit("detach");
  }
  updateTransitionProperties(e, t) {
    const s2 = 0 === has("mapview-transitions-duration") ? 0 : 1 / has("mapview-transitions-duration");
    if (this.fadeTransitionEnabled && 0 !== s2) {
      const t2 = this._fadeOutResolver || !this.visible ? 0 : this.opacity, i = this.computedOpacity;
      if (i === t2) this.computedVisible = this.visible;
      else {
        const r = e * s2;
        this.computedOpacity = i > t2 ? Math.max(t2, i - r) : Math.min(t2, i + r), this.computedVisible = this.computedOpacity > 0;
        const a = t2 === this.computedOpacity;
        this.inFadeTransition = !a, a || this.requestRender();
      }
    } else this.computedOpacity = this.opacity, this.computedVisible = this.visible;
  }
  onAttach() {
  }
  onDetach() {
  }
  doRender(e) {
  }
  ready() {
    this._isReady || (this._isReady = true, this.emit("isReady"), this.requestRender());
  }
};

export {
  s
};
//# sourceMappingURL=chunk-6QDMUFEM.js.map
