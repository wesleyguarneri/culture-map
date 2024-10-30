import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  p as p2,
  p2 as p3
} from "./chunk-74SVQPE6.js";
import {
  c
} from "./chunk-LUORW76W.js";
import {
  h2 as h
} from "./chunk-VOJZD4TW.js";
import {
  p
} from "./chunk-RAYFUCRQ.js";
import {
  n as n2
} from "./chunk-NXXQ35YM.js";
import {
  y as y2
} from "./chunk-4DSGTDZJ.js";
import {
  j
} from "./chunk-MRPCXIVS.js";
import {
  w
} from "./chunk-RNF7VOCU.js";
import {
  n
} from "./chunk-TIRJMGGG.js";
import {
  A,
  d,
  v
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
import {
  s2 as s
} from "./chunk-6JFGZTLU.js";

// ../../../node_modules/@arcgis/core/views/layers/support/Geometry.js
var y3;
var c2 = {
  base: n,
  key: "type",
  typeMap: {
    extent: w,
    polygon: j
  }
};
var n3 = y3 = class extends p2 {
  constructor(o) {
    super(o), this.type = "geometry", this.geometry = null;
  }
  clone() {
    return new y3({
      geometry: this.geometry?.clone() ?? null
    });
  }
  commitVersionProperties() {
    this.commitProperty("geometry");
  }
};
e([y({
  types: c2,
  json: {
    read: y2,
    write: true
  }
})], n3.prototype, "geometry", void 0), n3 = y3 = e([a("esri.views.layers.support.Geometry")], n3);
var a2 = n3;

// ../../../node_modules/@arcgis/core/views/layers/support/Path.js
var e2 = class extends p2 {
  constructor(r) {
    super(r), this.type = "path", this.path = [];
  }
  commitVersionProperties() {
    this.commitProperty("path");
  }
};
e([y({
  type: [[[Number]]],
  json: {
    write: true
  }
})], e2.prototype, "path", void 0), e2 = e([a("esri.views.layers.support.Path")], e2);
var p4 = e2;

// ../../../node_modules/@arcgis/core/views/2d/layers/LayerView2D.js
var m = V.ofType({
  key: "type",
  base: null,
  typeMap: {
    rect: p3,
    path: p4,
    geometry: a2
  }
});
var f = (t) => {
  let c3 = class extends t {
    constructor() {
      super(...arguments), this.attached = false, this.clips = new m(), this.highlightOptions = null, this.lastUpdateId = -1, this.moving = false, this.updateRequested = false, this._visibleAtCurrentScale = true;
    }
    initialize() {
      const e3 = this.view?.spatialReferenceLocked ?? true, t2 = this.view?.spatialReference;
      t2 && e3 && !this.spatialReferenceSupported ? this.addResolvingPromise(Promise.reject(new s("layerview:spatial-reference-incompatible", "The spatial reference of this layer does not meet the requirements of the view", {
        layer: this.layer
      }))) : (this.container || (this.container = new h()), this.container.fadeTransitionEnabled = true, this.container.visible = false, this.container.endTransitions(), this.addHandles([d(() => this.suspended, (e4) => {
        this.container && (this.container.visible = !e4);
      }, A), d(() => this.updateSuspended, (e4) => {
        this.view && !e4 && this.updateRequested && this.view.requestUpdate();
      }, A), d(() => this.layer?.opacity ?? 1, (e4) => {
        this.container && (this.container.opacity = e4);
      }, A), d(() => this.layer && "blendMode" in this.layer ? this.layer.blendMode : "normal", (e4) => {
        this.container && (this.container.blendMode = e4);
      }, A), d(() => this.layer && "effect" in this.layer ? this.layer.effect : null, (e4) => {
        this.container && (this.container.effect = e4);
      }, A), d(() => this.highlightOptions, (e4) => this.container.highlightOptions = e4, A), v(() => this.clips, "change", () => {
        this.container && (this.container.clips = this.clips);
      }, A), d(() => ({
        scale: this.view?.scale,
        scaleRange: this.layer && "effectiveScaleRange" in this.layer ? this.layer.effectiveScaleRange : null
      }), ({
        scale: e4,
        scaleRange: t3
      }) => {
        const s2 = c(t3, e4);
        s2 !== this._visibleAtCurrentScale && (this._visibleAtCurrentScale = s2);
      }, A)], "constructor"), this.view?.whenLayerView ? this.view.whenLayerView(this.layer).then((e4) => {
        e4 === this && this.processAttach();
      }, () => {
      }) : this.when().then(() => {
        this.processAttach();
      }, () => {
      }));
    }
    destroy() {
      this.processDetach(), this.updateRequested = false;
    }
    get spatialReferenceSupported() {
      const e3 = this.view?.spatialReference;
      return null == e3 || this.supportsSpatialReference(e3);
    }
    get updating() {
      return this.spatialReferenceSupported && (!this.attached || !this.suspended && (this.updateRequested || this.isUpdating()) || !!this._updatingHandles?.updating);
    }
    get visibleAtCurrentScale() {
      return this._visibleAtCurrentScale;
    }
    processAttach() {
      this.isResolved() && !this.attached && !this.destroyed && this.spatialReferenceSupported && (this.attach(), this.attached = true, this.requestUpdate());
    }
    processDetach() {
      this.attached && (this.attached = false, this.removeHandles("attach"), this.detach(), this.updateRequested = false);
    }
    requestUpdate() {
      this.destroyed || this.updateRequested || (this.updateRequested = true, this.updateSuspended || this.view.requestUpdate());
    }
    processUpdate(e3) {
      !this.isFulfilled() || this.isResolved() ? (this._set("updateParameters", e3), this.updateRequested && !this.updateSuspended && (this.updateRequested = false, this.update(e3))) : this.updateRequested = false;
    }
    hitTest(e3, t2) {
      return Promise.resolve(null);
    }
    supportsSpatialReference(e3) {
      return true;
    }
    canResume() {
      return !!this.spatialReferenceSupported && !!super.canResume() && this.visibleAtCurrentScale;
    }
    getSuspendInfo() {
      const e3 = super.getSuspendInfo(), t2 = !this.spatialReferenceSupported;
      return t2 && (e3.spatialReferenceNotSupported = t2), e3;
    }
    addAttachHandles(e3) {
      this.addHandles(e3, "attach");
    }
  };
  return e([y()], c3.prototype, "attached", void 0), e([y({
    type: m,
    set(e3) {
      const t2 = n2(e3, this._get("clips"), m);
      this._set("clips", t2);
    }
  })], c3.prototype, "clips", void 0), e([y()], c3.prototype, "container", void 0), e([y({
    type: p
  })], c3.prototype, "highlightOptions", void 0), e([y()], c3.prototype, "moving", void 0), e([y({
    readOnly: true
  })], c3.prototype, "spatialReferenceSupported", null), e([y({
    readOnly: true
  })], c3.prototype, "updateParameters", void 0), e([y()], c3.prototype, "updateRequested", void 0), e([y()], c3.prototype, "updating", null), e([y()], c3.prototype, "view", void 0), e([y()], c3.prototype, "_visibleAtCurrentScale", void 0), e([y({
    readOnly: true
  })], c3.prototype, "visibleAtCurrentScale", null), c3 = e([a("esri.views.2d.layers.LayerView2D")], c3), c3;
};

export {
  a2 as a,
  f
};
//# sourceMappingURL=chunk-XK5LKXMQ.js.map
