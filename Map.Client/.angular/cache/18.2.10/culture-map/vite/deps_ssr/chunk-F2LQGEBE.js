import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  t
} from "./chunk-7RXQQ22H.js";
import {
  O,
  a
} from "./chunk-JP4VYCP3.js";
import {
  C
} from "./chunk-T4DTOVU4.js";
import {
  e
} from "./chunk-YGAXDKHF.js";
import {
  n
} from "./chunk-KOI252FF.js";

// ../../../node_modules/@arcgis/core/views/3d/interactive/visualElements/Object3DVisualElement.js
var a2 = class extends t {
  constructor(e2) {
    super(e2), this._resources = null, this._transform = e();
  }
  get object() {
    return null != this._resources ? this._resources.object : null;
  }
  get transform() {
    return this._transform;
  }
  set transform(s) {
    n(this._transform, s), null != this._resources && (this._resources.object.transformation = this._transform);
  }
  recreate() {
    this.attached && this.createResources();
  }
  recreateGeometry() {
    if (null == this._resources) return;
    const e2 = this._resources.object, s = this.view._stage;
    s.removeMany(e2.geometries), e2.removeAllGeometries(), this.createGeometries(e2), e2.visible = this.visible, s.addMany(e2.geometries);
  }
  createResources() {
    this.destroyResources();
    const e2 = this.view._stage;
    if (!e2) return;
    const s = new a(e2, {
      pickable: false,
      updatePolicy: C.SYNC
    }), r = new O({
      castShadow: false
    });
    r.transformation = this._transform, this.createExternalResources(), this.createGeometries(r), e2.addMany(r.geometries), this.forEachExternalMaterial((s2) => e2.add(s2)), e2.add(r), s.add(r), r.visible = this.visible, this._resources = {
      layer: s,
      object: r
    };
  }
  destroyResources() {
    const e2 = this.view._stage;
    null != this._resources && e2 && (e2.remove(this._resources.object), this._resources.layer.destroy(), this.forEachExternalMaterial((s) => {
      e2.remove(s);
    }), e2.removeMany(this._resources.object.geometries), this._resources.object.dispose(), this.destroyExternalResources(), this._resources = null);
  }
  updateVisibility(e2) {
    null != this._resources && (this._resources.object.visible = e2);
  }
};

export {
  a2 as a
};
//# sourceMappingURL=chunk-F2LQGEBE.js.map
