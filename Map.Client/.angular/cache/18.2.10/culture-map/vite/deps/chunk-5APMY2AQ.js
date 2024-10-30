import {
  d
} from "./chunk-HD65DNIO.js";
import {
  n as n2,
  t
} from "./chunk-6A7CWJED.js";
import {
  V
} from "./chunk-EITGQLII.js";
import {
  n
} from "./chunk-TIVJXVMN.js";
import {
  e
} from "./chunk-4Z5SGKRM.js";
import {
  y
} from "./chunk-7CJXZOFG.js";
import {
  a3 as a,
  b
} from "./chunk-DDYVXG4F.js";

// ../../../node_modules/@arcgis/core/core/support/OwningCollection.js
var n3 = class extends V {
  constructor(e2) {
    super(e2), this.addHandles([this.on("before-add", (e3) => {
      null == e3.item && e3.preventDefault();
    }), this.on("after-add", (e3) => this._own(e3.item)), this.on("after-remove", (e3) => this._release(e3.item))]);
  }
  get owner() {
    return this._get("owner");
  }
  set owner(e2) {
    e2 !== this._get("owner") && (this._releaseAll(), this._set("owner", e2), this._ownAll());
  }
  _ownAll() {
    for (const e2 of this.items) this._own(e2);
  }
  _releaseAll() {
    for (const e2 of this.items) this._release(e2);
  }
  _createNewInstance(e2) {
    return this.itemType ? new (V.ofType(this.itemType.Type))(e2) : new V(e2);
  }
};
function l(e2, t2) {
  return {
    type: e2,
    cast: t,
    set(s) {
      const r = n2(s, this._get(t2), e2);
      r.owner = this, this._set(t2, r);
    }
  };
}
e([y()], n3.prototype, "owner", null), n3 = e([a("esri.core.support.OwningCollection")], n3);

// ../../../node_modules/@arcgis/core/support/GraphicsCollection.js
var c = class extends n3 {
  _own(r) {
    r.layer && "remove" in r.layer && r.layer !== this.owner && r.layer.remove(r), r.layer = this.owner;
  }
  _release(r) {
    r.layer === this.owner && (r.layer = null);
  }
};
e([n({
  Type: d,
  ensureType: b(d)
})], c.prototype, "itemType", void 0), c = e([a("esri.support.GraphicsCollection")], c);

export {
  n3 as n,
  l,
  c
};
//# sourceMappingURL=chunk-5APMY2AQ.js.map
