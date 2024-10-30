import {
  p,
  s2 as s,
  u as u2,
  u2 as u3,
  ze
} from "./chunk-SB6NP2J2.js";
import {
  i,
  l3 as l,
  r2 as r
} from "./chunk-PPMYY5TL.js";
import {
  P
} from "./chunk-4KGPH7OX.js";
import {
  c
} from "./chunk-TLAW3ACJ.js";
import {
  e as e3
} from "./chunk-Z52R7W33.js";
import {
  C as C2
} from "./chunk-67LE7VNQ.js";
import {
  t
} from "./chunk-ZVFENZUF.js";
import {
  h
} from "./chunk-PVO5NM6Q.js";
import {
  d as d3
} from "./chunk-QCBC3RJX.js";
import {
  b as b2
} from "./chunk-TRSGUVSM.js";
import {
  d as d2
} from "./chunk-HD65DNIO.js";
import {
  f
} from "./chunk-M2NS3MSU.js";
import {
  A,
  C,
  d
} from "./chunk-6WHTZNUH.js";
import {
  V
} from "./chunk-EITGQLII.js";
import {
  e as e2
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
  b
} from "./chunk-HJY2YILU.js";
import {
  e
} from "./chunk-7DA6A5LD.js";
import {
  u
} from "./chunk-2MMLMOWS.js";
import {
  __async,
  __spreadValues
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/views/3d/layers/graphics/GraphicsProcessor.js
var O = class extends S {
  constructor(i2) {
    super(i2), this.type = "graphics-3d", this.graphicsCore = null, this.drapeSourceType = e3.Features, this.scaleVisibilityEnabled = false, this.frustumVisibilityEnabled = false, this._suspendResumeExtent = null, this._updatingHandles = new h();
  }
  initialize() {
    const {
      layer: i2
    } = this, e4 = "effectiveScaleRange" in i2 ? i2 : null, t2 = this.scaleVisibilityEnabled && null != e4, r2 = new ze({
      owner: this,
      layer: this.owner.layer,
      preferredUpdatePolicy: C2.SYNC,
      graphicSymbolSupported: true,
      componentFactories: {
        elevationAlignment: (i3, e5) => new p({
          graphicsCoreOwner: this,
          graphicsCore: i3,
          queryGraphicUIDsInExtent: e5,
          elevationProvider: this.view.elevationProvider
        }),
        scaleVisibility: t2 ? (i3, t3) => new u2({
          graphicsCoreOwner: this,
          layer: e4,
          queryGraphicUIDsInExtent: t3,
          graphicsCore: i3,
          basemapTerrain: this.owner.view.basemapTerrain
        }) : null,
        objectStates: (i3) => new s(i3)
      }
    });
    if (this._set("graphicsCore", r2), this.frustumVisibilityEnabled && this._set("frustumVisibility", new u3({
      graphicsCoreOwner: this
    })), "fullOpacity" in this.owner) {
      const i3 = this.owner;
      this._updatingHandles.add(() => i3.fullOpacity, () => this.graphicsCore.opacityChange());
    }
    if ("elevationInfo" in i2) {
      const e5 = i2;
      this._updatingHandles.add(() => e5.elevationInfo, (i3, e6) => {
        d3(i3, e6) && this._updatingHandles.addPromise(this.graphicsCore.elevationInfoChange());
      });
    }
    this._set("initializePromise", this._initializeAsync()), this._updatingHandles.addPromise(this.initializePromise);
  }
  _initializeAsync() {
    return __async(this, null, function* () {
      try {
        yield this.graphicsCore.initializePromise;
      } catch (i2) {
        if (b(i2)) return;
        throw i2;
      }
      this.destroyed || (this.addHandles(d(() => this.view.clippingArea, () => this._updateClippingExtent(), C)), this._updateClippingExtent(), this._setupSuspendResumeExtent(), this.graphicsCore.startCreateGraphics());
    });
  }
  destroy() {
    this._updatingHandles.destroy(), this._set("frustumVisibility", u(this.frustumVisibility)), this._set("graphicsCore", u(this.graphicsCore));
  }
  get layer() {
    return this.owner.layer;
  }
  get view() {
    return this.owner.view;
  }
  get scaleVisibility() {
    return this.graphicsCore?.scaleVisibility;
  }
  get elevationAlignment() {
    return this.graphicsCore?.elevationAlignment;
  }
  get scaleVisibilitySuspended() {
    return !(null == this.scaleVisibility || !this.scaleVisibility.suspended);
  }
  get frustumVisibilitySuspended() {
    return null != this.frustumVisibility && this.frustumVisibility.suspended;
  }
  get suspended() {
    return this.owner.suspended ?? false;
  }
  get updating() {
    return !!(this.graphicsCore?.updating || null != this.scaleVisibility && this.scaleVisibility.updating || null != this.frustumVisibility && this.frustumVisibility.updating || this._updatingHandles.updating);
  }
  get graphics3DGraphics() {
    return this.graphicsCore?.graphics3DGraphics;
  }
  get graphics3DGraphicsByObjectID() {
    return this.graphicsCore?.graphics3DGraphicsByObjectID;
  }
  get loadedGraphics() {
    return this.owner.loadedGraphics;
  }
  get fullOpacity() {
    return this.owner.fullOpacity ?? 1;
  }
  get slicePlaneEnabled() {
    return this.owner.slicePlaneEnabled;
  }
  get updatePolicy() {
    return this.owner.updatePolicy;
  }
  notifyGraphicGeometryChanged(i2) {
    this.graphicsCore.notifyGraphicGeometryChanged(i2);
  }
  notifyGraphicVisibilityChanged(i2) {
    this.graphicsCore.notifyGraphicVisibilityChanged(i2);
  }
  getRenderingInfo(i2, e4, t2) {
    const r2 = i(i2, {
      renderer: e4,
      arcade: t2
    });
    if (r2?.color) {
      const i3 = r2.color;
      i3[0] = i3[0] / 255, i3[1] = i3[1] / 255, i3[2] = i3[2] / 255;
    }
    return r2;
  }
  getRenderingInfoAsync(i2, e4, t2, r2) {
    return l(i2, __spreadValues({
      renderer: e4,
      arcade: t2
    }, r2));
  }
  getHit(i2) {
    if (this.owner.loadedGraphics) {
      const e4 = this.owner.loadedGraphics.find((e5) => e5.uid === i2);
      if (e4) {
        const i3 = this.layer instanceof f ? this.layer : null, t2 = c(e4, i3);
        return {
          type: "graphic",
          graphic: t2,
          layer: t2.layer
        };
      }
    }
    return null;
  }
  whenGraphicBounds(i2, e4) {
    return this.graphicsCore ? this.graphicsCore.whenGraphicBounds(i2, e4) : Promise.reject();
  }
  computeAttachmentOrigin(i2, e4) {
    return this.graphicsCore ? this.graphicsCore.computeAttachmentOrigin(i2, e4) : null;
  }
  getSymbolLayerSize(i2, e4) {
    return this.graphicsCore ? this.graphicsCore.getSymbolLayerSize(i2, e4) : null;
  }
  maskOccludee(i2) {
    const e4 = this.graphicsCore?.objectStates;
    if (!e4) return e();
    const {
      set: t2,
      handle: r2
    } = e4.acquireSet(t.MaskOccludee, null);
    return e4.setUid(t2, i2.uid), r2;
  }
  highlight(i2) {
    const t2 = this.graphicsCore?.objectStates;
    if (!t2) return e();
    if (i2 instanceof b2) return P2;
    if ("number" == typeof i2) return this.highlight([i2]);
    if (i2 instanceof d2) return this.highlight([i2]);
    if (i2 instanceof V && (i2 = i2.toArray()), Array.isArray(i2) && i2.length > 0) {
      if (i2[0] instanceof d2) {
        const e4 = i2.map((i3) => i3.uid), {
          set: r2,
          handle: s2
        } = t2.acquireSet(t.Highlight, null);
        return t2.setUids(r2, e4), s2;
      }
      if ("number" == typeof i2[0]) {
        const e4 = i2, {
          set: r2,
          handle: s2
        } = t2.acquireSet(t.Highlight, null);
        return t2.setObjectIds(r2, e4), s2;
      }
    }
    return P2;
  }
  _setupSuspendResumeExtent() {
    const {
      scaleVisibility: i2,
      frustumVisibility: e4
    } = this;
    if (null == i2 && null == e4) return;
    const t2 = ({
      computedExtent: t3,
      extentPadding: r2
    }) => {
      this._suspendResumeExtent = P(t3, this._suspendResumeExtent, r, r2), null != i2 && i2.setExtent(this._suspendResumeExtent), null != e4 && e4.setExtent(this._suspendResumeExtent);
    };
    this.addHandles(d(() => ({
      computedExtent: this.graphicsCore?.computedExtent,
      extentPadding: this.graphicsCore?.extentPadding
    }), (i3) => t2(i3), A));
  }
  _updateClippingExtent() {
    const i2 = this.view.clippingArea;
    this.graphicsCore.setClippingExtent(i2, this.view.spatialReference) && this.graphicsCore.recreateAllGraphics();
  }
};
e2([y()], O.prototype, "type", void 0), e2([y({
  constructOnly: true
})], O.prototype, "owner", void 0), e2([y()], O.prototype, "layer", null), e2([y()], O.prototype, "view", null), e2([y({
  constructOnly: true
})], O.prototype, "graphicsCore", void 0), e2([y()], O.prototype, "scaleVisibility", null), e2([y({
  constructOnly: true
})], O.prototype, "frustumVisibility", void 0), e2([y()], O.prototype, "elevationAlignment", null), e2([y()], O.prototype, "scaleVisibilitySuspended", null), e2([y({
  readOnly: true
})], O.prototype, "frustumVisibilitySuspended", null), e2([y()], O.prototype, "suspended", null), e2([y({
  readOnly: true
})], O.prototype, "updating", null), e2([y()], O.prototype, "loadedGraphics", null), e2([y()], O.prototype, "fullOpacity", null), e2([y()], O.prototype, "slicePlaneEnabled", null), e2([y()], O.prototype, "drapeSourceType", void 0), e2([y()], O.prototype, "updatePolicy", null), e2([y({
  constructOnly: true
})], O.prototype, "scaleVisibilityEnabled", void 0), e2([y({
  constructOnly: true
})], O.prototype, "frustumVisibilityEnabled", void 0), e2([y()], O.prototype, "initializePromise", void 0), O = e2([a("esri.views.3d.layers.graphics.GraphicsProcessor")], O);
var P2 = e();

export {
  O
};
//# sourceMappingURL=chunk-N5MSQH3C.js.map
