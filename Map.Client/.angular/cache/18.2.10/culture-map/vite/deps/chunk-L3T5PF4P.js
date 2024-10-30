import {
  V
} from "./chunk-EITGQLII.js";
import {
  e
} from "./chunk-4Z5SGKRM.js";
import {
  i3 as i
} from "./chunk-ANKOCGE2.js";
import {
  y
} from "./chunk-7CJXZOFG.js";
import {
  a3 as a
} from "./chunk-DDYVXG4F.js";

// ../../../node_modules/@arcgis/core/core/CollectionFlattener.js
var i2 = class extends V {
  constructor(t) {
    super(t), this.getCollections = null;
  }
  initialize() {
    this.addHandles(i(() => this._refresh()));
  }
  destroy() {
    this.getCollections = null;
  }
  _refresh() {
    const t = null != this.getCollections ? this.getCollections() : null;
    if (null == t) return void this.removeAll();
    let o = 0;
    for (const s of t) null != s && (o = this._processCollection(o, s));
    this.splice(o, this.length);
  }
  _createNewInstance(t) {
    return new V(t);
  }
  _processCollection(t, o) {
    if (!o) return t;
    const s = this.itemFilterFunction ?? ((t2) => !!t2);
    for (const e2 of o) if (e2) {
      if (s(e2)) {
        const o2 = this.indexOf(e2, t);
        o2 >= 0 ? o2 !== t && this.reorder(e2, t) : this.add(e2, t), ++t;
      }
      if (this.getChildrenFunction) {
        const o2 = this.getChildrenFunction(e2);
        if (Array.isArray(o2)) for (const s2 of o2) t = this._processCollection(t, s2);
        else t = this._processCollection(t, o2);
      }
    }
    return t;
  }
};
e([y()], i2.prototype, "getCollections", void 0), e([y()], i2.prototype, "getChildrenFunction", void 0), e([y()], i2.prototype, "itemFilterFunction", void 0), i2 = e([a("esri.core.CollectionFlattener")], i2);
var l = i2;

export {
  l
};
//# sourceMappingURL=chunk-L3T5PF4P.js.map
