import {
  d
} from "./chunk-6WHTZNUH.js";

// ../../../node_modules/@arcgis/core/views/3d/interactive/visualElements/VisualElement.js
var t = class {
  get isDecoration() {
    return this._isDecoration;
  }
  set isDecoration(e) {
    this._isDecoration = e;
  }
  constructor(t2) {
    this._isDecoration = false, this._attached = false, this._resourcesCreated = false, this._visible = true, this.view = t2.view, this._handle = d(() => t2.view.ready, (e) => {
      this._resourcesCreated && (e ? this._createResources() : this._destroyResources());
    });
  }
  applyProperties(e) {
    let t2 = false;
    for (const s in e) s in this && ("attached" === s ? t2 = e[s] : this[s] = e[s]);
    this.attached = t2;
  }
  destroy() {
    this.attached = false, this._handle.remove();
  }
  get attached() {
    return this._attached;
  }
  set attached(e) {
    e !== this._attached && this.view._stage && (this._attached = e, this._attached && !this._resourcesCreated ? this._createResources() : !this._attached && this._resourcesCreated && this._destroyResources(), this.onAttachedChange(e));
  }
  onAttachedChange(e) {
  }
  get visible() {
    return this._visible;
  }
  set visible(e) {
    e !== this._visible && (this._visible = e, this.attached && this.updateVisibility(e));
  }
  _createResources() {
    this.createResources(), this._resourcesCreated = true, this.updateVisibility(this.visible);
  }
  _destroyResources() {
    this.destroyResources(), this._resourcesCreated = false;
  }
};

export {
  t
};
//# sourceMappingURL=chunk-2CPAIFT3.js.map
