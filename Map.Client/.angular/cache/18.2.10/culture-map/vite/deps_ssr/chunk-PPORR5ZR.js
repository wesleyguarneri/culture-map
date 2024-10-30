import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  t
} from "./chunk-7RXQQ22H.js";
import {
  O,
  a as a3
} from "./chunk-JP4VYCP3.js";
import {
  E
} from "./chunk-4B3LNBOC.js";
import {
  a as a2,
  e as e3
} from "./chunk-KAKCJGSZ.js";
import {
  C
} from "./chunk-T4DTOVU4.js";
import {
  e as e2
} from "./chunk-FWGI52X4.js";
import {
  s
} from "./chunk-ASCK5HJ5.js";
import {
  P,
  d
} from "./chunk-LZSLQ24Q.js";
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
  a3 as a
} from "./chunk-UDMPWVPF.js";

// ../../../node_modules/@arcgis/core/views/3d/interactive/visualElements/DrapedVisualElementResources.js
var d2 = class {
  constructor(e4) {
    this._resourceFactory = e4, this._resources = null, this._visible = true, this._attached = false, this._renderGroup = a2.Outline;
  }
  destroy() {
    this._destroyResources();
  }
  get resources() {
    return null != this._resources ? this._resources.external : null;
  }
  get visible() {
    return this._visible;
  }
  set visible(e4) {
    e4 !== this._visible && (this._visible = e4, this._syncGeometriesToRenderer());
  }
  get attached() {
    return this._attached;
  }
  set attached(e4) {
    e4 !== this._attached && (this._attached = e4, this._createOrDestroyResources());
  }
  get renderGroup() {
    return this._renderGroup;
  }
  set renderGroup(e4) {
    this._renderGroup = e4;
    const r = this._resources?.layerView;
    r && (r.renderGroup = e4);
  }
  recreate() {
    this.attached && this._createResources();
  }
  recreateGeometry() {
    this._resourceFactory.recreateGeometry ? null != this._resources && (this._ensureRenderGeometriesRemoved(), this._resourceFactory.recreateGeometry(this._resources.external), this._syncGeometriesToRenderer()) : this.recreate();
  }
  _createOrDestroyResources() {
    this._attached ? null == this._resources && this._createResources() : this._destroyResources();
  }
  _createResources() {
    this._destroyResources();
    const e4 = this._resourceFactory.createResources(), r = new a4({
      view: this._resourceFactory.view,
      renderGroup: this._renderGroup
    }), s2 = this._resourceFactory.view.basemapTerrain?.overlayManager;
    this._resources = {
      layerView: new a4({
        view: this._resourceFactory.view,
        renderGroup: this._renderGroup
      }),
      external: e4,
      geometriesAdded: false
    }, s2 && (this._resources.drapeSourceRenderer = s2.registerGeometryDrapeSource(r)), this._syncGeometriesToRenderer();
  }
  _destroyResources() {
    if (null == this._resources) return;
    this._ensureRenderGeometriesRemoved();
    const e4 = this._resourceFactory.view.basemapTerrain?.overlayManager;
    e4 && e4.unregisterDrapeSource(this._resources.layerView), this._resourceFactory.destroyResources(this._resources.external), this._resources = null;
  }
  _syncGeometriesToRenderer() {
    this._visible ? this._ensureRenderGeometriesAdded() : this._ensureRenderGeometriesRemoved();
  }
  _ensureRenderGeometriesRemoved() {
    if (null == this._resources?.drapeSourceRenderer) return;
    if (!this._resources.geometriesAdded) return;
    this._resources.drapeSourceRenderer.removeGeometries(this._resources.external.geometries, E.UPDATE), this._resources.geometriesAdded = false;
  }
  _ensureRenderGeometriesAdded() {
    if (null == this._resources?.drapeSourceRenderer) return;
    if (this._resources.geometriesAdded) return;
    this._resources.drapeSourceRenderer.addGeometries(this._resources.external.geometries, E.UPDATE), this._resources.geometriesAdded = true;
  }
};
var a4 = class extends s(S) {
  constructor(e4) {
    super(e4), this.drapeSourceType = e3.Features, this.updatePolicy = C.SYNC, this.renderGroup = a2.Outline;
  }
};
e([y({
  constructOnly: true
})], a4.prototype, "view", void 0), e([y({
  readOnly: true
})], a4.prototype, "drapeSourceType", void 0), e([y()], a4.prototype, "renderGroup", void 0), a4 = e([a("esri.views.3d.interactive.visualElements.DrapedVisualElementResources")], a4);

// ../../../node_modules/@arcgis/core/views/3d/interactive/visualElements/VisualElementResources.js
var c = class {
  constructor(e4) {
    this._resourceFactory = e4, this._resources = null, this._visible = true, this._attached = false;
  }
  destroy() {
    this._destroyResources();
  }
  get object() {
    return null != this._resources ? this._resources.object : null;
  }
  get resources() {
    return null != this._resources ? this._resources.external : null;
  }
  get visible() {
    return this._visible;
  }
  set visible(e4) {
    e4 !== this._visible && (this._visible = e4, this._syncVisible());
  }
  get attached() {
    return this._attached;
  }
  set attached(e4) {
    e4 !== this._attached && (this._attached = e4, this._createOrDestroyResources());
  }
  recreate() {
    this.attached && this._createResources();
  }
  recreateGeometry() {
    if (!this._resourceFactory.recreateGeometry) return void this.recreate();
    const e4 = this._resourceFactory.view._stage;
    if (null == this._resources || !e4) return;
    const s2 = this._resources.object;
    this._resources.external.forEach((s3) => {
      s3.type !== e2.Mesh && s3.type !== e2.Line && s3.type !== e2.Point || e4.remove(s3);
    }), s2.removeAllGeometries(), this._resourceFactory.recreateGeometry(this._resources.external, s2, this._resources.layer), this._resources.external.forEach((s3) => {
      s3.type !== e2.Mesh && s3.type !== e2.Line && s3.type !== e2.Point || e4.add(s3);
    });
  }
  _createOrDestroyResources() {
    this._attached ? this._resources || this._createResources() : this._destroyResources();
  }
  _createResources() {
    this._destroyResources();
    const c2 = this._resourceFactory, a5 = c2.view, h = a5._stage;
    if (!h) return;
    const u = new a3(h, {
      pickable: false,
      updatePolicy: C.SYNC
    }), l = new O({
      castShadow: false
    }), n = c2.createResources(l, u);
    n.forEach((e4) => {
      h.add(e4), e4.type === e2.Texture && e4.load(h.renderView.renderingContext);
    }), h.add(l), u.add(l);
    const _ = c2.cameraChanged, y2 = _ ? d(() => a5.state.camera, (e4) => _(e4), P) : null;
    this._resources = {
      layer: u,
      object: l,
      external: n,
      cameraHandle: y2
    }, this._syncVisible();
  }
  _destroyResources() {
    if (null == this._resources) return;
    const e4 = this._resourceFactory.view._stage;
    e4 && (e4.remove(this._resources.object), this._resources.layer.destroy(), this._resources.external.forEach((s2) => {
      e4.remove(s2), s2.type === e2.Texture && s2.unload();
    })), this._resources.object.dispose(), this._resources.cameraHandle?.remove(), this._resourceFactory.destroyResources(this._resources.external), this._resources = null;
  }
  _syncVisible() {
    null != this._resources && (this._resources.object.visible = this._visible);
  }
};

// ../../../node_modules/@arcgis/core/views/3d/interactive/visualElements/EngineVisualElement.js
var t2 = class extends t {
  constructor(s2) {
    super(s2), this._isDraped = false, this.object3dResources = new c(this.createObject3DResourceFactory(s2.view)), this.drapedResources = new d2(this.createDrapedResourceFactory(s2.view)), this.isDraped = s2.isDraped ?? false;
  }
  get isDraped() {
    return this._isDraped;
  }
  set isDraped(e4) {
    e4 !== this._isDraped && (this._isDraped = e4, this.object3dResources.attached = this.attached && !e4, this.drapedResources.attached = this.attached && e4);
  }
  get renderGroup() {
    return this.drapedResources.renderGroup;
  }
  set renderGroup(e4) {
    this.drapedResources.renderGroup = e4;
  }
  createResources() {
    this.object3dResources.attached = !this._isDraped, this.drapedResources.attached = this._isDraped;
  }
  destroyResources() {
    this.object3dResources.attached = false, this.drapedResources.attached = false;
  }
  recreate() {
    this.object3dResources.recreate(), this.drapedResources.recreate();
  }
  recreateGeometry() {
    this.object3dResources.recreateGeometry(), this.drapedResources.recreateGeometry();
  }
  destroy() {
    this.object3dResources.destroy(), this.drapedResources.destroy(), super.destroy();
  }
  updateVisibility(e4) {
    this.object3dResources.visible = e4, this.drapedResources.visible = e4;
  }
};

export {
  t2 as t
};
//# sourceMappingURL=chunk-PPORR5ZR.js.map
