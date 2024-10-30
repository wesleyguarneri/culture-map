import {
  i
} from "./chunk-D3AKDIJC.js";
import {
  h
} from "./chunk-PVO5NM6Q.js";
import {
  s
} from "./chunk-HT2T6PUB.js";
import {
  n as n2
} from "./chunk-EDSMXTFO.js";
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
import {
  u
} from "./chunk-2MMLMOWS.js";
import {
  n2 as n
} from "./chunk-WYIDUUN2.js";

// ../../../node_modules/@arcgis/core/views/layers/LayerView.js
var u2 = class extends s(n2(o.EventedMixin(S))) {
  constructor(e2) {
    super(e2), this._updatingHandles = new h(), this.layer = null, this.parent = null;
  }
  initialize() {
    this.when().catch((e2) => {
      if ("layerview:create-error" !== e2.name) {
        const t = this.layer && this.layer.id || "no id", r = this.layer?.title || "no title";
        n.getLogger(this).error("#resolve()", `Failed to resolve layer view (layer title: '${r}', id: '${t}')`, e2);
      }
    });
  }
  destroy() {
    this._updatingHandles = u(this._updatingHandles);
  }
  get fullOpacity() {
    return (this.layer?.opacity ?? 1) * (this.parent?.fullOpacity ?? 1);
  }
  get suspended() {
    return this.destroyed || !this.canResume();
  }
  get suspendInfo() {
    return this.getSuspendInfo();
  }
  get legendEnabled() {
    return !this.suspended && true === this.layer?.legendEnabled;
  }
  get updating() {
    return !(!this._updatingHandles?.updating && !this.isUpdating());
  }
  get updatingProgress() {
    return this.updating ? 0 : 1;
  }
  get updateSuspended() {
    return this.suspended;
  }
  get visible() {
    return true === this.layer?.visible;
  }
  set visible(e2) {
    this._overrideIfSome("visible", e2);
  }
  get visibleAtCurrentScale() {
    return true;
  }
  get visibleAtCurrentTimeExtent() {
    const e2 = this.view.timeExtent, t = this.layer?.visibilityTimeExtent;
    return !e2 || !t || !e2.intersection(t).isEmpty;
  }
  canResume() {
    const e2 = this.layer && "effectiveScaleRange" in this.layer ? this.layer.effectiveScaleRange : null;
    return this.visible && this.layer?.loaded && !this.parent?.suspended && this.view?.ready && i(e2) && this.visibleAtCurrentScale && this.visibleAtCurrentTimeExtent || false;
  }
  getSuspendInfo() {
    const e2 = this.parent?.suspended ? this.parent.suspendInfo : {}, t = this;
    t.view?.ready || (e2.viewNotReady = true), this.layer && this.layer.loaded || (e2.layerNotLoaded = true);
    const r = this.layer && "effectiveScaleRange" in this.layer ? this.layer.effectiveScaleRange : null;
    return i(r) && this.visibleAtCurrentScale || (e2.outsideScaleRange = true), this.visibleAtCurrentTimeExtent || (e2.outsideVisibilityTimeExtent = true), this.visible || (e2.layerInvisible = true), e2;
  }
  isUpdating() {
    return false;
  }
};
e([y()], u2.prototype, "view", void 0), e([y()], u2.prototype, "fullOpacity", null), e([y()], u2.prototype, "layer", void 0), e([y()], u2.prototype, "parent", void 0), e([y({
  readOnly: true
})], u2.prototype, "suspended", null), e([y({
  readOnly: true
})], u2.prototype, "suspendInfo", null), e([y({
  readOnly: true
})], u2.prototype, "legendEnabled", null), e([y({
  type: Boolean,
  readOnly: true
})], u2.prototype, "updating", null), e([y({
  readOnly: true
})], u2.prototype, "updatingProgress", null), e([y()], u2.prototype, "updateSuspended", null), e([y()], u2.prototype, "visible", null), e([y({
  readOnly: true
})], u2.prototype, "visibleAtCurrentScale", null), e([y({
  readOnly: true
})], u2.prototype, "visibleAtCurrentTimeExtent", null), u2 = e([a("esri.views.layers.LayerView")], u2);
var y2 = u2;

export {
  y2 as y
};
//# sourceMappingURL=chunk-5JJ6GBOU.js.map
