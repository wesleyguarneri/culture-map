import {
  C,
  V,
  _
} from "./chunk-ZE47C44H.js";
import {
  m
} from "./chunk-4OGGMTIH.js";
import {
  e as e2
} from "./chunk-BQZBOYBD.js";
import {
  c,
  n
} from "./chunk-XTVPEVHA.js";
import {
  O
} from "./chunk-AXVPJBVW.js";
import {
  e3 as e
} from "./chunk-ANKOCGE2.js";

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/lib/ModelDirtyTypes.js
var E;
var I;
!function(E2) {
  E2[E2.ADD = 0] = "ADD", E2[E2.UPDATE = 1] = "UPDATE", E2[E2.REMOVE = 2] = "REMOVE";
}(E || (E = {})), function(E2) {
  E2[E2.NONE = 0] = "NONE", E2[E2.VISIBILITY = 1] = "VISIBILITY", E2[E2.GEOMETRY = 2] = "GEOMETRY", E2[E2.TRANSFORMATION = 4] = "TRANSFORMATION", E2[E2.HIGHLIGHT = 8] = "HIGHLIGHT", E2[E2.OCCLUDEE = 16] = "OCCLUDEE";
}(I || (I = {}));

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/lib/RenderGeometry.js
var m2 = class {
  constructor(r, i = {}) {
    this.geometry = r, this.screenToWorldRatio = 1, this._transformation = e2(), this._shaderTransformation = null, this._boundingSphere = null, this.id = e(), this.layerUid = i.layerUid, this.graphicUid = i.graphicUid, this.castShadow = i.castShadow ?? false, null != i.objectShaderTransformation && this.objectShaderTransformationChanged(i.objectShaderTransformation);
  }
  get transformation() {
    return this._transformation;
  }
  set transformation(t) {
    n(this._transformation, t), this._boundingSphere = null;
  }
  get boundingInfo() {
    return this.geometry.boundingInfo;
  }
  objectShaderTransformationChanged(t) {
    null == t ? this._shaderTransformation = null : (this._shaderTransformation ??= e2(), c(this._shaderTransformation, t, this.geometry.transformation)), this._boundingSphere = null;
  }
  get boundingSphere() {
    return this.boundingInfo ? (null == this._boundingSphere && (this._boundingSphere ??= _(), O(V(this._boundingSphere), this.boundingInfo.center, this.shaderTransformation), this._boundingSphere[3] = this.boundingInfo.radius * m(this.shaderTransformation)), this._boundingSphere) : C;
  }
  get material() {
    return this.geometry.material;
  }
  get type() {
    return this.geometry.type;
  }
  get shaderTransformation() {
    return this._shaderTransformation ?? this.transformation;
  }
  get attributes() {
    return this.geometry.attributes;
  }
  get highlights() {
    return this.geometry.highlights;
  }
  get occludees() {
    return this.geometry.occludees;
  }
  get visible() {
    return this.geometry.visible;
  }
  set visible(t) {
    this.geometry.visible = t;
  }
};

export {
  E,
  I,
  m2 as m
};
//# sourceMappingURL=chunk-GW7WMRYJ.js.map
