import {
  d2 as d,
  e as e3,
  u
} from "./chunk-V6AMQYXE.js";
import {
  e as e2
} from "./chunk-4Z5SGKRM.js";
import {
  S,
  e,
  n2 as n,
  r3 as r,
  t3 as t2
} from "./chunk-ANKOCGE2.js";
import {
  o
} from "./chunk-7CJXZOFG.js";
import {
  a3 as a2,
  t
} from "./chunk-DDYVXG4F.js";
import {
  a
} from "./chunk-WYIDUUN2.js";

// ../../../node_modules/@arcgis/core/core/accessorSupport/MultiOriginStore.js
var r2 = class _r {
  constructor() {
    this._propertyOriginMap = /* @__PURE__ */ new Map(), this._originStores = new Array(r), this._values = /* @__PURE__ */ new Map(), this.multipleOriginsSupported = true;
  }
  clone(i) {
    const o2 = new _r(), n2 = this._originStores[e.DEFAULTS];
    n2 && n2.forEach((s, r3) => {
      o2.set(r3, a(s), e.DEFAULTS);
    });
    for (let r3 = e.SERVICE; r3 < r; r3++) {
      const s = this._originStores[r3];
      s && s.forEach((s2, e4) => {
        i && i.has(e4) || o2.set(e4, a(s2), r3);
      });
    }
    return o2;
  }
  get(t3, s) {
    const e4 = void 0 === s ? this._values : this._originStores[s];
    return e4 ? e4.get(t3) : void 0;
  }
  keys(t3) {
    const s = null == t3 ? this._values : this._originStores[t3];
    return s ? [...s.keys()] : [];
  }
  set(t3, s, r3 = e.USER) {
    let i = this._originStores[r3];
    if (i || (i = /* @__PURE__ */ new Map(), this._originStores[r3] = i), i.set(t3, s), !this._values.has(t3) || this._propertyOriginMap.get(t3) <= r3) {
      const e4 = this._values.get(t3);
      return this._values.set(t3, s), this._propertyOriginMap.set(t3, r3), e4 !== s;
    }
    return false;
  }
  delete(t3, s = e.USER) {
    const r3 = this._originStores[s];
    if (!r3) return;
    const i = r3.get(t3);
    if (r3.delete(t3), this._values.has(t3) && this._propertyOriginMap.get(t3) === s) {
      this._values.delete(t3);
      for (let e4 = s - 1; e4 >= 0; e4--) {
        const s2 = this._originStores[e4];
        if (s2 && s2.has(t3)) {
          this._values.set(t3, s2.get(t3)), this._propertyOriginMap.set(t3, e4);
          break;
        }
      }
    }
    return i;
  }
  has(t3, s) {
    const e4 = void 0 === s ? this._values : this._originStores[s];
    return !!e4 && e4.has(t3);
  }
  revert(t3, s) {
    for (; s > 0 && !this.has(t3, s); ) --s;
    const e4 = this._originStores[s], r3 = e4?.get(t3), i = this._values.get(t3);
    return this._values.set(t3, r3), this._propertyOriginMap.set(t3, s), i !== r3;
  }
  originOf(t3) {
    return this._propertyOriginMap.get(t3) || e.DEFAULTS;
  }
  forEach(t3) {
    this._values.forEach(t3);
  }
};

// ../../../node_modules/@arcgis/core/core/ReadOnlyMultiOriginJSONSupport.js
var u2 = (t3) => {
  let u3 = class extends t3 {
    constructor(...r3) {
      super(...r3);
      const t4 = t(this), e4 = t4.store, i = new r2();
      t4.store = i, e3(t4, e4, i);
    }
    read(r3, t4) {
      u(this, r3, t4);
    }
    getAtOrigin(r3, t4) {
      const s = a3(this), o2 = n(t4);
      if ("string" == typeof r3) return s.get(r3, o2);
      const i = {};
      return r3.forEach((r4) => {
        i[r4] = s.get(r4, o2);
      }), i;
    }
    originOf(r3) {
      return t2(this.originIdOf(r3));
    }
    originIdOf(r3) {
      return a3(this).originOf(r3);
    }
    revert(r3, t4) {
      const s = a3(this), o2 = n(t4), i = t(this);
      let c;
      c = "string" == typeof r3 ? "*" === r3 ? s.keys(o2) : [r3] : r3, c.forEach((r4) => {
        i.invalidate(r4), s.revert(r4, o2), i.commit(r4);
      });
    }
  };
  return u3 = e2([a2("esri.core.ReadOnlyMultiOriginJSONSupport")], u3), u3;
};
function a3(r3) {
  return t(r3).store;
}
var f = class extends u2(S) {
};
f = e2([a2("esri.core.ReadOnlyMultiOriginJSONSupport")], f);

// ../../../node_modules/@arcgis/core/core/MultiOriginJSONSupport.js
var l = (t3) => {
  let s = class extends t3 {
    constructor(...r3) {
      super(...r3);
    }
    clear(r3, t4 = "user") {
      return O(this).delete(r3, n(t4));
    }
    write(r3, t4) {
      return d(this, r3 = r3 || {}, t4), r3;
    }
    setAtOrigin(r3, t4, s2) {
      t(this).setAtOrigin(r3, t4, n(s2));
    }
    removeOrigin(r3) {
      const t4 = O(this), s2 = n(r3), e4 = t4.keys(s2);
      for (const o2 of e4) t4.originOf(o2) === s2 && t4.set(o2, t4.get(o2, s2), e.USER);
    }
    updateOrigin(r3, t4) {
      const s2 = O(this), i = n(t4), c = o(this, r3);
      for (let e4 = i + 1; e4 < r; ++e4) s2.delete(r3, e4);
      s2.set(r3, c, i);
    }
    toJSON(r3) {
      return this.write({}, r3);
    }
  };
  return s = e2([a2("esri.core.MultiOriginJSONSupport.WriteableMultiOriginJSONSupport")], s), s.prototype.toJSON.isDefaultToJSON = true, s;
};
function O(r3) {
  return t(r3).store;
}
var S2 = (t3) => {
  let e4 = class extends l(u2(t3)) {
    constructor(...r3) {
      super(...r3);
    }
  };
  return e4 = e2([a2("esri.core.MultiOriginJSONSupport")], e4), e4;
};
var m = class extends S2(S) {
};
m = e2([a2("esri.core.MultiOriginJSONSupport")], m);

export {
  S2 as S,
  m
};
//# sourceMappingURL=chunk-RXWBJSJ5.js.map
