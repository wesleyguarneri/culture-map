import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  y as y2
} from "./chunk-CXYUBZAK.js";
import {
  n,
  t
} from "./chunk-NXXQ35YM.js";
import {
  C,
  d
} from "./chunk-LZSLQ24Q.js";
import {
  V
} from "./chunk-U3RHUXYK.js";
import {
  e
} from "./chunk-NUICEVIH.js";
import {
  y
} from "./chunk-UVNLCXWD.js";
import {
  a3 as a
} from "./chunk-UDMPWVPF.js";

// ../../../node_modules/@arcgis/core/views/layers/GroupLayerView.js
var h = class extends y2 {
  constructor(i) {
    super(i), this.type = "group", this.layerViews = new V();
  }
  destroy() {
    this.layerViews.length = 0;
  }
  _allLayerViewVisibility(i) {
    this.layerViews.forEach((e2) => {
      e2.visible = i;
    });
  }
  initialize() {
    this.addHandles([this.layerViews.on("change", (i) => this._layerViewsChangeHandler(i)), d(() => this.layer?.visibilityMode, () => {
      this.layer && this._applyVisibility(() => this._allLayerViewVisibility(this.visible), () => this._applyExclusiveVisibility(null));
    }, C), d(() => this.visible, (i) => {
      this._applyVisibility(() => this._allLayerViewVisibility(i), () => {
      });
    }, C)], "grouplayerview"), this._layerViewsChangeHandler({
      target: null,
      added: this.layerViews.toArray(),
      removed: [],
      moved: []
    });
  }
  get creatingLayerViews() {
    return this.view?.layerViewManager?.isCreatingLayerViewsForLayer(this.layer) ?? false;
  }
  set layerViews(i) {
    this._set("layerViews", n(i, this._get("layerViews")));
  }
  get updatingProgress() {
    return 0 === this.layerViews.length ? 1 : this.layerViews.reduce((i, e2) => i + e2.updatingProgress, 0) / this.layerViews.length;
  }
  isUpdating() {
    return this.creatingLayerViews || this.layerViews.some((i) => i.updating);
  }
  _hasLayerViewVisibleOverrides() {
    return this.layerViews.some((i) => i._isOverridden("visible"));
  }
  _findLayerViewForLayer(i) {
    return i && this.layerViews.find((e2) => e2.layer === i);
  }
  _firstVisibleOnLayerOrder() {
    const i = this.layer.layers.find((i2) => {
      const e2 = this._findLayerViewForLayer(i2);
      return !!e2?.visible;
    });
    return i && this._findLayerViewForLayer(i);
  }
  _applyExclusiveVisibility(i) {
    null == i && null == (i = this._firstVisibleOnLayerOrder()) && this.layerViews.length > 0 && (i = this._findLayerViewForLayer(this.layer.layers.at(0))), this.layerViews.forEach((e2) => {
      e2.visible = e2 === i;
    });
  }
  _layerViewsChangeHandler(i) {
    this.removeHandles("grouplayerview:visible"), this.addHandles(this.layerViews.map((i2) => d(() => i2.visible, (e3) => this._applyVisibility(() => {
      e3 !== this.visible && (i2.visible = this.visible);
    }, () => this._applyExclusiveVisibility(e3 ? i2 : null)), C)).toArray(), "grouplayerview:visible");
    const e2 = i.added[i.added.length - 1];
    this._applyVisibility(() => this._allLayerViewVisibility(this.visible), () => this._applyExclusiveVisibility(e2?.visible ? e2 : null));
  }
  _applyVisibility(i, e2) {
    this._hasLayerViewVisibleOverrides() && ("inherited" === this.layer?.visibilityMode ? i() : "exclusive" === this.layer?.visibilityMode && e2());
  }
};
e([y({
  readOnly: true
})], h.prototype, "creatingLayerViews", null), e([y({
  cast: t
})], h.prototype, "layerViews", null), e([y({
  readOnly: true
})], h.prototype, "updatingProgress", null), e([y()], h.prototype, "view", void 0), h = e([a("esri.views.layers.GroupLayerView")], h);
var n2 = h;

export {
  n2 as n
};
//# sourceMappingURL=chunk-O23CWIOB.js.map
