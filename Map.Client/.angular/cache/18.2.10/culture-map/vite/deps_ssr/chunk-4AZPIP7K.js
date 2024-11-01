import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  e as e2
} from "./chunk-NUICEVIH.js";
import {
  S,
  e,
  n2,
  u as u3
} from "./chunk-NXK752PZ.js";
import {
  o,
  s,
  u as u2
} from "./chunk-UVNLCXWD.js";
import {
  a2,
  a3,
  o4 as o2,
  s4 as s3,
  t,
  u
} from "./chunk-UDMPWVPF.js";
import {
  a,
  n2 as n,
  s2
} from "./chunk-6JFGZTLU.js";
import {
  h
} from "./chunk-2ZJE6ZFX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/core/accessorSupport/read.js
function s4(e4, r, o3) {
  if (!e4?.read || false === e4.read.enabled || !e4.read.source) return false;
  const n4 = e4.read.source;
  if ("string" == typeof n4) {
    if (n4 === r) return true;
    if (n4.includes(".") && 0 === n4.indexOf(r) && s(n4, o3)) return true;
  } else for (const s6 of n4) {
    if (s6 === r) return true;
    if (s6.includes(".") && 0 === s6.indexOf(r) && s(s6, o3)) return true;
  }
  return false;
}
function i(e4) {
  return e4 && (!e4.read || false !== e4.read.enabled && !e4.read.source);
}
function f(e4, t3, r, n4, f4) {
  let a6 = s3(t3[r], f4);
  i(a6) && (e4[r] = true);
  for (const i2 of Object.getOwnPropertyNames(t3)) a6 = s3(t3[i2], f4), s4(a6, r, n4) && (e4[i2] = true);
}
function a4(e4, t3, r, o3) {
  const s6 = r.metadata, i2 = o2(s6[t3], o3), f4 = i2?.default;
  if (void 0 === f4) return;
  const a6 = "function" == typeof f4 ? f4.call(e4, t3, o3) : f4;
  void 0 !== a6 && r.set(t3, a6);
}
var c = {
  origin: "service"
};
function u4(t3, n4, s6 = c) {
  if (!n4 || "object" != typeof n4) return;
  const i2 = t(t3), u6 = i2.metadata, d3 = {};
  for (const e4 of Object.getOwnPropertyNames(n4)) f(d3, u6, e4, n4, s6);
  i2.setDefaultOrigin(s6.origin);
  for (const r of Object.getOwnPropertyNames(d3)) {
    const f4 = s3(u6[r], s6).read, a6 = f4?.source;
    let c3;
    c3 = a6 && "string" == typeof a6 ? u2(n4, a6) : n4[r], f4?.reader && (c3 = f4.reader.call(t3, c3, n4, s6)), void 0 !== c3 && i2.set(r, c3);
  }
  if (!s6 || !s6.ignoreDefaults) {
    i2.setDefaultOrigin("defaults");
    for (const e4 of Object.getOwnPropertyNames(u6)) d3[e4] || a4(t3, e4, i2, s6);
  }
  i2.setDefaultOrigin("user");
}
function d(e4, t3, r, o3 = c) {
  const n4 = __spreadProps(__spreadValues({}, o3), {
    messages: []
  });
  r(n4), n4.messages?.forEach((t4) => {
    "warning" !== t4.type || e4.loaded ? o3?.messages && o3.messages.push(t4) : e4.loadWarnings.push(t4);
  });
}

// ../../../node_modules/@arcgis/core/core/accessorSupport/write.js
function p(r, e4, t3, i2, o3) {
  const n4 = {};
  return e4.write?.writer?.call(r, i2, n4, t3, o3), n4;
}
function f2(r, o3, u6, l, a6, p2) {
  if (!l?.write) return false;
  const f4 = o(r, u6);
  if (!a6 && l.write.overridePolicy) {
    const e4 = l.write.overridePolicy.call(r, f4, u6, p2 ?? void 0);
    void 0 !== e4 && (a6 = e4);
  }
  if (a6 || (a6 = l.write), !a6 || false === a6.enabled) return false;
  if (a6.layerContainerTypes && p2?.layerContainerType && !a6.layerContainerTypes.includes(p2.layerContainerType)) return false;
  if ((null === f4 && !a6.allowNull && !a6.writerEnsuresNonNull || void 0 === f4) && a6.isRequired) {
    const i2 = new s2("web-document-write:property-required", `Missing value for required property '${u6}' on '${r.declaredClass}'`, {
      propertyName: u6,
      target: r
    });
    return i2 && p2?.messages ? p2.messages.push(i2) : i2 && !p2 && n.getLogger("esri.core.accessorSupport.write").error(i2.name, i2.message), false;
  }
  if (void 0 === f4) return false;
  if (null === f4 && !a6.allowNull && !a6.writerEnsuresNonNull) return false;
  if (!a6.alwaysWriteDefaults && (!o3.store.multipleOriginsSupported || o3.store.originOf(u6) === e.DEFAULTS) && c2(r, u6, p2, l, f4)) return false;
  if (!a6.ignoreOrigin && p2?.origin && o3.store.multipleOriginsSupported) {
    if (o3.store.originOf(u6) < n2(p2.origin)) return false;
  }
  return true;
}
function c2(e4, t3, i2, o3, n4) {
  const s6 = o3.default;
  if (void 0 === s6) return false;
  if (null != o3.defaultEquals) return o3.defaultEquals(n4);
  if ("function" == typeof s6) {
    if (Array.isArray(n4)) {
      const o4 = s6.call(e4, t3, i2 ?? void 0);
      return h(o4, n4);
    }
    return false;
  }
  return s6 === n4;
}
function g(r, e4, t3, i2) {
  const o3 = t(r), n4 = o3.metadata, s6 = a2(n4[e4], i2);
  return !!s6 && f2(r, o3, e4, s6, t3, i2);
}
function d2(r, e4, t3) {
  if (r && "function" == typeof r.toJSON && (!r.toJSON.isDefaultToJSON || !r.write)) return u(e4, r.toJSON(t3));
  const n4 = t(r), s6 = n4.metadata;
  for (const u6 in s6) {
    const c3 = a2(s6[u6], t3);
    if (!f2(r, n4, u6, c3, void 0, t3)) continue;
    const g2 = o(r, u6), d3 = p(r, c3, c3.write && "string" == typeof c3.write.target ? c3.write.target : u6, g2, t3);
    Object.keys(d3).length > 0 && (e4 = u(e4, d3), t3?.resources?.pendingOperations?.length && t3.resources.pendingOperations.push(Promise.all(t3.resources.pendingOperations).then(() => u(e4, d3, () => "replace-arrays"))), t3?.writtenProperties && t3.writtenProperties.push({
      target: r,
      propName: u6,
      oldOrigin: u3(n4.store.originOf(u6)),
      newOrigin: t3.origin
    }));
  }
  return e4;
}

// ../../../node_modules/@arcgis/core/core/accessorSupport/DefaultsStore.js
var s5 = class _s {
  constructor() {
    this._values = /* @__PURE__ */ new Map(), this.multipleOriginsSupported = false;
  }
  clone(e4) {
    const t3 = new _s();
    return this._values.forEach((s6, r) => {
      e4 && e4.has(r) || t3.set(r, a(s6.value), s6.origin);
    }), t3;
  }
  get(i2, e4) {
    e4 = this._normalizeOrigin(e4);
    const s6 = this._values.get(i2);
    return null == e4 || s6?.origin === e4 ? s6?.value : void 0;
  }
  originOf(i2) {
    return this._values.get(i2)?.origin ?? e.USER;
  }
  keys(i2) {
    i2 = this._normalizeOrigin(i2);
    const e4 = [...this._values.keys()];
    return null == i2 ? e4 : e4.filter((e5) => this._values.get(e5)?.origin === i2);
  }
  set(i2, s6, r) {
    if ((r = this._normalizeOrigin(r)) === e.DEFAULTS) {
      const e4 = this._values.get(i2);
      if (null != e4?.origin && e4.origin > r) return;
    }
    this._values.set(i2, new t2(s6, r));
  }
  delete(i2, e4) {
    null != (e4 = this._normalizeOrigin(e4)) && this._values.get(i2)?.origin !== e4 || this._values.delete(i2);
  }
  has(i2, e4) {
    return null != (e4 = this._normalizeOrigin(e4)) ? this._values.get(i2)?.origin === e4 : this._values.has(i2);
  }
  forEach(i2) {
    this._values.forEach(({
      value: e4
    }, s6) => i2(e4, s6));
  }
  _normalizeOrigin(i2) {
    if (null != i2) return i2 === e.DEFAULTS ? i2 : e.USER;
  }
};
var t2 = class {
  constructor(i2, e4) {
    this.value = i2, this.origin = e4;
  }
};

// ../../../node_modules/@arcgis/core/core/accessorSupport/defaultsStoreUtils.js
function e3(e4, r, n4) {
  r.keys().forEach((e5) => {
    n4.set(e5, r.get(e5), e.DEFAULTS);
  });
  const o3 = e4.metadata;
  Object.keys(o3).forEach((r2) => {
    e4.internalGet(r2) && n4.set(r2, e4.internalGet(r2), e.DEFAULTS);
  });
}

// ../../../node_modules/@arcgis/core/core/JSONSupport.js
var u5 = (t3) => {
  let u6 = class extends t3 {
    constructor(...r) {
      super(...r);
      const t4 = t(this), e4 = t4.store, i2 = new s5();
      t4.store = i2, e3(t4, e4, i2);
    }
    read(r, t4) {
      u4(this, r, t4);
    }
    write(r, t4) {
      return d2(this, r ?? {}, t4);
    }
    toJSON(r) {
      return this.write({}, r);
    }
    static fromJSON(r, t4) {
      return n3.call(this, r, t4);
    }
  };
  return u6 = e2([a3("esri.core.JSONSupport")], u6), u6.prototype.toJSON.isDefaultToJSON = true, u6;
};
function n3(r, t3) {
  if (!r) return null;
  if (r.declaredClass) throw new Error("JSON object is already hydrated");
  const o3 = new this();
  return o3.read(r, t3), o3;
}
function a5(r) {
  return r && "object" == typeof r && "toJSON" in r && "function" == typeof r.toJSON;
}
var f3 = class extends u5(S) {
};
f3 = e2([a3("esri.core.JSONSupport")], f3);

export {
  e3 as e,
  u4 as u,
  d,
  g,
  d2,
  u5 as u2,
  a5 as a,
  f3 as f
};
//# sourceMappingURL=chunk-4AZPIP7K.js.map
