import {
  o
} from "./chunk-7DA6A5LD.js";
import {
  a,
  e,
  e2,
  n2 as n,
  s2 as s
} from "./chunk-WYIDUUN2.js";
import {
  __spreadValues
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/core/accessorSupport/beforeDestroy.js
var o2 = Symbol("Accessor-beforeDestroy");

// ../../../node_modules/@arcgis/core/core/accessorSupport/utils.js
function t(r5) {
  return r5.__accessor__ ?? null;
}
function e3(r5, n7) {
  return null != r5?.metadata?.[n7];
}
function u(r5, n7, t4) {
  if (t4) {
    return o3(r5, n7, {
      policy: t4,
      path: ""
    });
  }
  return o3(r5, n7, null);
}
function o3(r5, t4, e6) {
  return t4 ? Object.keys(t4).reduce((r6, i6) => {
    const u7 = i6;
    let a9 = null, l8 = "merge";
    if (e6 && (a9 = e6.path ? `${e6.path}.${i6}` : i6, l8 = e6.policy(a9)), "replace" === l8) return r6[u7] = t4[u7], r6;
    if ("replace-arrays" === l8 && Array.isArray(r6[u7])) return r6[u7] = t4[u7], r6;
    if (void 0 === r6[u7]) return r6[u7] = a(t4[u7]), r6;
    let s9 = r6[u7], c9 = t4[u7];
    if (s9 === c9) return r6;
    if (Array.isArray(c9) || Array.isArray(r6)) s9 = s9 ? Array.isArray(s9) ? r6[u7] = s9.concat() : r6[u7] = [s9] : r6[u7] = [], c9 && (Array.isArray(c9) || (c9 = [c9]), c9.forEach((r7) => {
      s9.includes(r7) || s9.push(r7);
    }));
    else if (c9 && "object" == typeof c9) {
      if (e6) {
        const n7 = e6.path;
        e6.path = a9, r6[u7] = o3(s9, c9, e6), e6.path = n7;
      } else r6[u7] = o3(s9, c9, null);
    } else r6.hasOwnProperty(i6) && !t4.hasOwnProperty(i6) || (r6[u7] = c9);
    return r6;
  }, r5 || {}) : r5;
}
function l(r5) {
  return Array.isArray(r5) ? r5 : r5.split(".");
}
function s2(r5) {
  return r5.includes(",") ? r5.split(",").map((r6) => r6.trim()) : [r5.trim()];
}
function c(r5) {
  if (Array.isArray(r5)) {
    const n7 = [];
    for (const t4 of r5) n7.push(...s2(t4));
    return n7;
  }
  return s2(r5);
}
function p(n7, t4, e6, i6) {
  const u7 = c(t4);
  if (1 !== u7.length) {
    const t5 = u7.map((r5) => i6(n7, r5, e6));
    return o(t5);
  }
  return i6(n7, u7[0], e6);
}

// ../../../node_modules/@arcgis/core/core/accessorSupport/interfaces.js
var I;
!function(I3) {
  I3[I3.INITIALIZING = 0] = "INITIALIZING", I3[I3.CONSTRUCTING = 1] = "CONSTRUCTING", I3[I3.CONSTRUCTED = 2] = "CONSTRUCTED", I3[I3.DESTROYED = 3] = "DESTROYED";
}(I || (I = {}));

// ../../../node_modules/@arcgis/core/core/accessorSupport/metadata.js
function r(e6) {
  let r5 = e6.constructor.__accessorMetadata__;
  const o11 = Object.prototype.hasOwnProperty.call(e6.constructor, "__accessorMetadata__");
  if (r5) {
    if (!o11) {
      r5 = Object.create(r5);
      for (const e7 in r5) r5[e7] = a(r5[e7]);
      Object.defineProperty(e6.constructor, "__accessorMetadata__", {
        value: r5,
        enumerable: false,
        configurable: true,
        writable: true
      });
    }
  } else r5 = {}, Object.defineProperty(e6.constructor, "__accessorMetadata__", {
    value: r5,
    enumerable: false,
    configurable: true,
    writable: true
  });
  return e6.constructor.__accessorMetadata__;
}
function o4(t4, e6) {
  const o11 = r(t4);
  let c9 = o11[e6];
  return c9 || (c9 = o11[e6] = {}), c9;
}
function c2(t4, r5) {
  return u(t4, r5, n2);
}
var a2 = /^(?:[^.]+\.)?(?:value|type|(?:json\.type|json\.origins\.[^.]\.type))$/;
function n2(t4) {
  return a2.test(t4) ? "replace" : "merge";
}

// ../../../node_modules/@arcgis/core/core/accessorSupport/tracking/Flags.js
var i;
!function(i6) {
  i6[i6.Dirty = 1] = "Dirty", i6[i6.Overridden = 2] = "Overridden", i6[i6.Computing = 4] = "Computing", i6[i6.NonNullable = 8] = "NonNullable", i6[i6.HasDefaultValue = 16] = "HasDefaultValue", i6[i6.DepTrackingInitialized = 32] = "DepTrackingInitialized", i6[i6.AutoTracked = 64] = "AutoTracked", i6[i6.ExplicitlyTracking = 128] = "ExplicitlyTracking";
}(i || (i = {}));

// ../../../node_modules/@arcgis/core/core/accessorSupport/tracking.js
var o5 = {
  onObservableAccessed: () => {
  },
  onTrackingEnd: () => {
  }
};
var c3 = [];
var i2 = o5;
function s3(t4) {
  i2.onObservableAccessed(t4);
}
var l2 = false;
var a3 = false;
function f(t4, n7, r5) {
  if (l2) return u2(t4, n7, r5);
  p2(t4);
  const e6 = n7.call(r5);
  return d(), e6;
}
function g(t4, n7) {
  return f(o5, t4, n7);
}
function u2(n7, r5, e6) {
  const o11 = l2;
  l2 = true, p2(n7);
  let c9 = null;
  try {
    c9 = r5.call(e6);
  } catch (i6) {
    a3 && n.getLogger("esri.core.accessorSupport.tracking").error(i6);
  }
  return d(), l2 = o11, c9;
}
function p2(t4) {
  i2 = t4, c3.push(t4);
}
function d() {
  const t4 = c3.length;
  if (t4 > 1) {
    const n7 = c3.pop();
    i2 = c3[t4 - 2], n7.onTrackingEnd();
  } else if (1 === t4) {
    const t5 = c3.pop();
    i2 = o5, t5.onTrackingEnd();
  } else i2 = o5;
}
function m(t4, n7) {
  if (n7.flags & i.DepTrackingInitialized) return;
  const r5 = a3;
  a3 = false, n7.flags & i.AutoTracked ? u2(n7, n7.metadata.get, t4) : k(t4, n7), a3 = r5;
}
var y = [];
function k(t4, r5) {
  r5.flags & i.ExplicitlyTracking || (r5.flags |= i.ExplicitlyTracking, u2(r5, () => {
    const e6 = r5.metadata.dependsOn || y;
    for (const r6 of e6) if ("string" != typeof r6 || r6.includes(".")) {
      const e7 = l(r6);
      for (let n7 = 0, r7 = t4; n7 < e7.length && null != r7 && "object" == typeof r7; ++n7) r7 = A(r7, e7[n7], n7 !== e7.length - 1);
    } else A(t4, r6, false);
  }), r5.flags &= ~i.ExplicitlyTracking);
}
function A(t4, n7, e6) {
  const o11 = "?" === n7[n7.length - 1] ? n7.slice(0, -1) : n7;
  if (null != t4.getItemAt || Array.isArray(t4)) {
    const n8 = parseInt(o11, 10);
    if (!isNaN(n8)) return Array.isArray(t4) ? t4[n8] : t4.at(n8);
  }
  const c9 = t(t4);
  if (c9) {
    const n8 = c9.propertiesByName.get(o11);
    n8 && (s3(n8), m(t4, n8));
  }
  return e6 ? t4[o11] : void 0;
}

// ../../../node_modules/@arcgis/core/core/MapUtils.js
function n3(n7, t4) {
  for (const [r5, e6] of n7) if (t4(e6, r5)) return true;
  return false;
}
function t2(n7, t4) {
  for (const [r5, e6] of n7) if (t4(e6, r5)) return e6;
  return null;
}
function r2(n7, t4, r5) {
  const e6 = n7.get(t4);
  if (void 0 !== e6) return e6;
  const o11 = r5();
  return n7.set(t4, o11), o11;
}
function o6(n7) {
  const t4 = /* @__PURE__ */ new Map();
  return (r5) => (t4.has(r5) || t4.set(r5, n7(r5)), t4.get(r5));
}

// ../../../node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var r3 = () => n.getLogger("esri.core.accessorSupport.ensureTypes");
function t3(e6) {
  return null == e6 ? e6 : new Date(e6);
}
function o7(e6) {
  return null == e6 ? e6 : !!e6;
}
function u3(e6) {
  return null == e6 ? e6 : e6.toString();
}
function a4(e6) {
  return null == e6 ? e6 : (e6 = parseFloat(e6), isNaN(e6) ? 0 : e6);
}
function s4(e6) {
  return null == e6 ? e6 : Math.round(parseFloat(e6));
}
function c4(e6) {
  return null;
}
function i3(e6) {
  return e6?.constructor && void 0 !== e6.constructor.__accessorMetadata__;
}
function l3(e6, n7) {
  return null != n7 && e6 && !(n7 instanceof e6);
}
function f2(e6) {
  return e6 && "isCollection" in e6;
}
function p3(e6) {
  return e6?.Type ? "function" == typeof e6.Type ? e6.Type : e6.Type.base : null;
}
function y2(e6, n7) {
  if (!n7?.constructor || !f2(n7.constructor)) return v(e6, n7) ? n7 : new e6(n7);
  const r5 = p3(e6.prototype.itemType), t4 = p3(n7.constructor.prototype.itemType);
  return r5 ? t4 ? r5 === t4 ? n7 : r5.prototype.isPrototypeOf(t4.prototype) ? new e6(n7) : (v(e6, n7), n7) : new e6(n7) : n7;
}
function v(e6, n7) {
  return !!i3(n7) && (r3().error("Accessor#set", "Assigning an instance of '" + (n7.declaredClass || "unknown") + "' which is not a subclass of '" + h(e6) + "'"), true);
}
function g2(e6, n7) {
  return null == n7 ? n7 : f2(e6) ? y2(e6, n7) : l3(e6, n7) ? v(e6, n7) ? n7 : new e6(n7) : n7;
}
function h(e6) {
  return e6?.prototype?.declaredClass || "unknown";
}
var m2 = /* @__PURE__ */ new WeakMap();
function d2(e6) {
  switch (e6) {
    case Number:
      return a4;
    case N:
      return s4;
    case Boolean:
      return o7;
    case String:
      return u3;
    case Date:
      return t3;
    case _:
      return c4;
    default:
      return r2(m2, e6, () => g2.bind(null, e6));
  }
}
function b(e6, n7) {
  const r5 = d2(e6);
  return 1 === arguments.length ? r5 : r5(n7);
}
function w(e6, n7, r5) {
  return 1 === arguments.length ? w.bind(null, e6) : n7 ? Array.isArray(n7) ? n7.map((n8) => e6(n8, r5)) : [e6(n7, r5)] : n7;
}
function A2(e6, n7) {
  return 1 === arguments.length ? w((n8) => b(e6, n8)) : w((n8) => b(e6, n8), n7);
}
function $(e6, n7, r5) {
  return 0 !== n7 && Array.isArray(r5) ? r5.map((r6) => $(e6, n7 - 1, r6)) : e6(r5);
}
function j(e6, n7, r5) {
  if (2 === arguments.length) return (r6) => j(e6, n7, r6);
  if (!r5) return r5;
  r5 = $(e6, n7, r5);
  let t4 = n7, o11 = r5;
  for (; t4 > 0 && Array.isArray(o11); ) t4--, o11 = o11[0];
  if (void 0 !== o11) for (let u7 = 0; u7 < t4; u7++) r5 = [r5];
  return r5;
}
function k2(e6, n7, r5) {
  return 2 === arguments.length ? j((n8) => b(e6, n8), n7) : j((n8) => b(e6, n8), n7, r5);
}
function M(e6) {
  return !!Array.isArray(e6) && !e6.some((n7) => {
    const r5 = typeof n7;
    return !("string" === r5 || "number" === r5 || "function" === r5 && e6.length > 1);
  });
}
function S(e6, n7) {
  if (2 === arguments.length) return S(e6).call(null, n7);
  const t4 = /* @__PURE__ */ new Set(), o11 = e6.filter((e7) => "function" != typeof e7), u7 = e6.filter((e7) => "function" == typeof e7);
  for (const r5 of e6) "string" != typeof r5 && "number" != typeof r5 || t4.add(r5);
  let a9 = null, s9 = null;
  return (e7, n8) => {
    if (null == e7) return e7;
    const c9 = typeof e7, i6 = "string" === c9 || "number" === c9;
    return i6 && (t4.has(e7) || u7.some((e8) => "string" === c9 && e8 === String || "number" === c9 && e8 === Number)) || "object" === c9 && u7.some((n9) => !l3(e7, n9)) ? e7 : (i6 && o11.length ? (a9 || (a9 = o11.map((e8) => "string" == typeof e8 ? `'${e8}'` : `${e8}`).join(", ")), r3().error("Accessor#set", `'${e7}' is not a valid value for this property, only the following values are valid: ${a9}`)) : "object" == typeof e7 && u7.length ? (s9 || (s9 = u7.map((e8) => h(e8)).join(", ")), r3().error("Accessor#set", `'${e7}' is not a valid value for this property, value must be one of ${s9}`)) : r3().error("Accessor#set", `'${e7}' is not a valid value for this property`), n8 && (n8.valid = false), null);
  };
}
function T(e6, n7) {
  if (2 === arguments.length) return T(e6).call(null, n7);
  const t4 = {}, o11 = [], u7 = [];
  for (const r5 in e6.typeMap) {
    const n8 = e6.typeMap[r5];
    t4[r5] = b(n8), o11.push(h(n8)), u7.push(r5);
  }
  const a9 = () => `'${o11.join("', '")}'`, s9 = () => `'${u7.join("', '")}'`, c9 = "string" == typeof e6.key ? (n8) => n8[e6.key] : e6.key;
  return (n8) => {
    if (e6.base && !l3(e6.base, n8)) return n8;
    if (null == n8) return n8;
    const o12 = c9(n8) || e6.defaultKeyValue, u8 = t4[o12];
    if (!u8) return r3().error("Accessor#set", `Invalid property value, value needs to be one of ${a9()}, or a plain object that can autocast (having .type = ${s9()})`), null;
    if (!l3(e6.typeMap[o12], n8)) return n8;
    if ("string" == typeof e6.key && !i3(n8)) {
      const r5 = {};
      for (const t5 in n8) t5 !== e6.key && (r5[t5] = n8[t5]);
      return u8(r5);
    }
    return u8(n8);
  };
}
var N = class {
};
var _ = class {
};
var B = {
  native: (e6) => ({
    type: "native",
    value: e6
  }),
  array: (e6) => ({
    type: "array",
    value: e6
  }),
  oneOf: (e6) => ({
    type: "one-of",
    values: e6
  })
};
function C(e6) {
  if (!e6 || !("type" in e6)) return false;
  switch (e6.type) {
    case "native":
    case "array":
    case "one-of":
      return true;
  }
  return false;
}
function D(e6) {
  switch (e6.type) {
    case "native":
      return b(e6.value);
    case "array":
      return w(D(e6.value));
    case "one-of":
      return F(e6);
    default:
      return null;
  }
}
function F(e6) {
  let n7 = null;
  return (t4, o11) => L(t4, e6) ? t4 : (null == n7 && (n7 = I2(e6)), r3().error("Accessor#set", `Invalid property value, value needs to be of type ${n7}`), o11 && (o11.valid = false), null);
}
function I2(e6) {
  switch (e6.type) {
    case "native":
      switch (e6.value) {
        case Number:
          return "number";
        case String:
          return "string";
        case Boolean:
          return "boolean";
        case N:
          return "integer";
        case Date:
          return "date";
        case _:
          return "null";
        default:
          return h(e6.value);
      }
    case "array":
      return `array of ${I2(e6.value)}`;
    case "one-of": {
      const n7 = e6.values.map((e7) => I2(e7));
      return `one of ${n7.slice(0, -1)} or ${n7[n7.length - 1]}`;
    }
  }
  return "unknown";
}
function L(e6, n7) {
  if (null == e6) return true;
  switch (n7.type) {
    case "native":
      switch (n7.value) {
        case Number:
        case N:
          return "number" == typeof e6;
        case Boolean:
          return "boolean" == typeof e6;
        case String:
          return "string" == typeof e6;
        case _:
          return null === e6;
      }
      return e6 instanceof n7.value;
    case "array":
      return !!Array.isArray(e6) && !e6.some((e7) => !L(e7, n7.value));
    case "one-of":
      return n7.values.some((n8) => L(e6, n8));
  }
}

// ../../../node_modules/@arcgis/core/core/Warning.js
var s5 = class extends e2 {
  constructor(e6, s9, t4) {
    super(e6, s9, t4);
  }
};
s5.prototype.type = "warning";

// ../../../node_modules/@arcgis/core/core/accessorSupport/extensions/serializableProperty/originAliases.js
function n4(n7) {
  if (n7.json && n7.json.origins) {
    const o11 = n7.json.origins, e6 = {
      "web-document": ["web-scene", "web-map"]
    };
    for (const n8 in e6) if (o11[n8]) {
      const s9 = o11[n8];
      e6[n8].forEach((n9) => {
        o11[n9] = s9;
      }), delete o11[n8];
    }
  }
}

// ../../../node_modules/@arcgis/core/core/accessorSupport/extensions/serializableProperty/type.js
function e4(e6) {
  return !!e6 && e6.prototype?.declaredClass && 0 === e6.prototype.declaredClass.indexOf("esri.core.Collection");
}

// ../../../node_modules/@arcgis/core/core/accessorSupport/extensions/serializableProperty/reader.js
var i4 = () => n.getLogger("esri.core.accessorSupport.extensions.serializableProperty.reader");
function p4(t4, r5, n7) {
  t4 && (!n7 && !r5.read || r5.read?.reader || false === r5.read?.enabled || l4(t4) && e("read.reader", u4(t4), r5));
}
function u4(t4) {
  const e6 = t4.ndimArray ?? 0;
  if (e6 > 1) return c5(t4);
  if (1 === e6) return a5(t4);
  if ("type" in t4 && d3(t4.type)) {
    const e7 = t4.type.prototype?.itemType?.Type, r5 = a5("function" == typeof e7 ? {
      type: e7
    } : {
      types: e7
    });
    return (e8, n7, o11) => {
      const i6 = r5(e8, n7, o11);
      return i6 ? new t4.type(i6) : i6;
    };
  }
  return s6(t4);
}
function s6(t4) {
  return "type" in t4 ? y3(t4.type) : g3(t4.types);
}
function y3(t4) {
  return t4.prototype.read ? (e6, r5, n7) => {
    if (null == e6) return e6;
    const o11 = typeof e6;
    if ("object" !== o11) return void i4().error(`Expected JSON value of type 'object' to deserialize type '${t4.prototype.declaredClass}', but got '${o11}'`);
    const p8 = new t4();
    return p8.read(e6, n7), p8;
  } : t4.fromJSON;
}
function f3(t4, e6, r5, n7) {
  return 0 !== n7 && Array.isArray(e6) ? e6.map((e7) => f3(t4, e7, r5, n7 - 1)) : t4(e6, void 0, r5);
}
function c5(t4) {
  const e6 = s6(t4), r5 = f3.bind(null, e6), n7 = t4.ndimArray ?? 0;
  return (t5, e7, o11) => {
    if (null == t5) return t5;
    t5 = r5(t5, o11, n7);
    let i6 = n7, p8 = t5;
    for (; i6 > 0 && Array.isArray(p8); ) i6--, p8 = p8[0];
    if (void 0 !== p8) for (let r6 = 0; r6 < i6; r6++) t5 = [t5];
    return t5;
  };
}
function a5(t4) {
  const e6 = s6(t4);
  return (t5, r5, n7) => {
    if (null == t5) return t5;
    if (Array.isArray(t5)) {
      const r6 = [];
      for (const o12 of t5) {
        const t6 = e6(o12, void 0, n7);
        void 0 !== t6 && r6.push(t6);
      }
      return r6;
    }
    const o11 = e6(t5, void 0, n7);
    return void 0 !== o11 ? [o11] : void 0;
  };
}
function d3(t4) {
  if (!e4(t4)) return false;
  const e6 = t4.prototype.itemType;
  return !(!e6 || !e6.Type) && ("function" == typeof e6.Type ? m3(e6.Type) : j2(e6.Type));
}
function l4(t4) {
  return "types" in t4 ? j2(t4.types) : m3(t4.type);
}
function m3(t4) {
  return !Array.isArray(t4) && !!t4 && t4.prototype && ("read" in t4.prototype || "fromJSON" in t4 || d3(t4));
}
function j2(t4) {
  for (const e6 in t4.typeMap) {
    if (!m3(t4.typeMap[e6])) return false;
  }
  return true;
}
function g3(t4) {
  let e6 = null;
  const n7 = t4.errorContext ?? "type", o11 = t4.validate;
  return (p8, u7, s9) => {
    if (null == p8) return p8;
    const y6 = typeof p8;
    if ("object" !== y6) return void i4().error(`Expected JSON value of type 'object' to deserialize, but got '${y6}'`);
    e6 || (e6 = v2(t4));
    const f7 = t4.key;
    if ("string" != typeof f7) return;
    const c9 = p8[f7], a9 = c9 ? e6[c9] : t4.defaultKeyValue ? t4.typeMap[t4.defaultKeyValue] : void 0;
    if (!a9) {
      const t5 = `Type '${c9 || "unknown"}' is not supported`;
      return s9?.messages && p8 && s9.messages.push(new s5(`${n7}:unsupported`, t5, {
        definition: p8,
        context: s9
      })), void i4().error(t5);
    }
    const d4 = new a9();
    return d4.read(p8, s9), o11 ? o11(d4) : d4;
  };
}
function v2(t4) {
  const e6 = {};
  for (const r5 in t4.typeMap) {
    const o11 = t4.typeMap[r5], i6 = r(o11.prototype);
    if ("function" == typeof t4.key) continue;
    const p8 = i6[t4.key];
    if (!p8) continue;
    if (p8.json?.type && Array.isArray(p8.json.type) && 1 === p8.json.type.length && "string" == typeof p8.json.type[0]) {
      e6[p8.json.type[0]] = o11;
      continue;
    }
    const u7 = p8.json?.write;
    if (!u7?.writer) {
      e6[r5] = o11;
      continue;
    }
    const s9 = u7.target, y6 = "string" == typeof s9 ? s9 : t4.key, f7 = {};
    u7.writer(r5, f7, y6), f7[y6] && (e6[f7[y6]] = o11);
  }
  return e6;
}

// ../../../node_modules/@arcgis/core/core/accessorSupport/extensions/serializableProperty/shorthands.js
function e5(e6) {
  if (e6.json || (e6.json = {}), o8(e6.json), n5(e6.json), r4(e6.json), e6.json.origins) for (const t4 in e6.json.origins) o8(e6.json.origins[t4]), n5(e6.json.origins[t4]), r4(e6.json.origins[t4]);
  return true;
}
function r4(e6) {
  e6.name && (e6.read && "object" == typeof e6.read ? void 0 === e6.read.source && (e6.read.source = e6.name) : e6.read = {
    source: e6.name
  }, e6.write && "object" == typeof e6.write ? void 0 === e6.write.target && (e6.write.target = e6.name) : e6.write = {
    target: e6.name
  });
}
function o8(e6) {
  "boolean" == typeof e6.read ? e6.read = {
    enabled: e6.read
  } : "function" == typeof e6.read ? e6.read = {
    enabled: true,
    reader: e6.read
  } : e6.read && "object" == typeof e6.read && void 0 === e6.read.enabled && (e6.read.enabled = true);
}
function n5(e6) {
  "boolean" == typeof e6.write ? e6.write = {
    enabled: e6.write
  } : "function" == typeof e6.write ? e6.write = {
    enabled: true,
    writer: e6.write
  } : e6.write && "object" == typeof e6.write && void 0 === e6.write.enabled && (e6.write.enabled = true);
}

// ../../../node_modules/@arcgis/core/core/accessorSupport/extensions/serializableProperty/writer.js
function i5(r5, e6) {
  if (!e6.write || e6.write.writer || false === e6.write.enabled && !e6.write.overridePolicy) return;
  const t4 = r5?.ndimArray ?? 0;
  r5 && (1 === t4 || "type" in r5 && e4(r5.type)) ? e6.write.writer = a6 : t4 > 1 ? e6.write.writer = l5(t4) : e6.types ? Array.isArray(e6.types) ? e6.write.writer = f4(e6.types[0]) : e6.write.writer = o9(e6.types) : e6.write.writer = s7;
}
function o9(r5) {
  return (e6, t4, n7, i6) => e6 ? u5(e6, r5, i6) ? s7(e6, t4, n7, i6) : void 0 : s7(e6, t4, n7, i6);
}
function u5(t4, n7, i6) {
  for (const r5 in n7.typeMap) if (t4 instanceof n7.typeMap[r5]) return true;
  if (i6?.messages) {
    const o11 = n7.errorContext ?? "type", u7 = `Values of type '${("function" != typeof n7.key ? t4[n7.key] : t4.declaredClass) ?? "Unknown"}' cannot be written`;
    i6 && i6.messages && t4 && i6.messages.push(new s(`${o11}:unsupported`, u7, {
      definition: t4,
      context: i6
    })), n.getLogger("esri.core.accessorSupport.extensions.serializableProperty.writer").error(u7);
  }
  return false;
}
function f4(r5) {
  return (e6, t4, n7, i6) => {
    if (!e6 || !Array.isArray(e6)) return s7(e6, t4, n7, i6);
    return s7(e6.filter((e7) => u5(e7, r5, i6)), t4, n7, i6);
  };
}
function s7(r5, e6, n7, i6) {
  e(n7, p5(r5, i6), e6);
}
function p5(r5, e6) {
  return r5 && "function" == typeof r5.write ? r5.write({}, e6) : r5 && "function" == typeof r5.toJSON ? r5.toJSON() : "number" == typeof r5 ? y4(r5) : r5;
}
function y4(r5) {
  return r5 === -1 / 0 ? -Number.MAX_VALUE : r5 === 1 / 0 ? Number.MAX_VALUE : isNaN(r5) ? null : r5;
}
function a6(r5, e6, n7, i6) {
  let o11;
  null === r5 ? o11 = null : r5 && "function" == typeof r5.map ? (o11 = r5.map((r6) => p5(r6, i6)), "function" == typeof o11.toArray && (o11 = o11.toArray())) : o11 = [p5(r5, i6)], e(n7, o11, e6);
}
function c6(r5, e6, t4) {
  return 0 !== t4 && Array.isArray(r5) ? r5.map((r6) => c6(r6, e6, t4 - 1)) : p5(r5, e6);
}
function l5(r5) {
  return (e6, n7, i6, o11) => {
    let u7;
    if (null === e6) u7 = null;
    else {
      u7 = c6(e6, o11, r5);
      let t4 = r5, n8 = u7;
      for (; t4 > 0 && Array.isArray(n8); ) t4--, n8 = n8[0];
      if (void 0 !== n8) for (let r6 = 0; r6 < t4; r6++) u7 = [u7];
    }
    e(i6, u7, n7);
  };
}

// ../../../node_modules/@arcgis/core/core/accessorSupport/extensions/serializableProperty.js
function o10(r5, i6) {
  return y5(r5, "any", i6?.origin);
}
function s8(r5, i6) {
  return y5(r5, "read", i6?.origin);
}
function a7(r5, i6) {
  return y5(r5, "write", i6?.origin);
}
function y5(r5, i6, n7) {
  let e6 = r5?.json;
  if (e6?.origins && n7) {
    let r6;
    r6 = "link-chart" === n7 ? e6.origins[n7] && ("any" === i6 || i6 in e6.origins[n7]) ? e6.origins[n7] : e6.origins["web-map"] : e6.origins[n7], r6 && ("any" === i6 || i6 in r6) && (e6 = r6);
  }
  return e6;
}
function p6(r5) {
  const i6 = f5(r5);
  if (r5.json.origins) for (const e6 in r5.json.origins) {
    const o11 = r5.json.origins[e6], s9 = o11.types ? u6(o11) : i6;
    p4(s9, o11, false), o11.types && !o11.write && r5.json.write?.enabled && (o11.write = __spreadValues({}, r5.json.write)), i5(s9, o11);
  }
  p4(i6, r5.json, true), i5(i6, r5.json);
}
function f5(r5) {
  return r5.json.types ? j3(r5.json) : r5.type ? c7(r5) : j3(r5);
}
function u6(r5) {
  return r5.type ? c7(r5) : j3(r5);
}
function c7(i6) {
  if (!i6.type) return;
  let n7 = 0, e6 = i6.type;
  for (; Array.isArray(e6) && !M(e6); ) e6 = e6[0], n7++;
  return {
    type: e6,
    ndimArray: n7
  };
}
function j3(r5) {
  if (!r5.types) return;
  let i6 = 0, n7 = r5.types;
  for (; Array.isArray(n7); ) n7 = n7[0], i6++;
  return {
    types: n7,
    ndimArray: i6
  };
}
function l6(r5) {
  e5(r5) && (n4(r5), p6(r5));
}

// ../../../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var n6 = /* @__PURE__ */ new Set();
var c8 = /* @__PURE__ */ new Set();
function a8(e6) {
  return (r5) => {
    e6 ??= "esri.core.Accessor", r5.prototype.declaredClass = e6, p7(r5);
    const s9 = [], i6 = [];
    let a9 = r5.prototype;
    for (; a9; ) a9.hasOwnProperty("initialize") && !n6.has(a9.initialize) && (n6.add(a9.initialize), s9.push(a9.initialize)), a9.hasOwnProperty("destroy") && !c8.has(a9.destroy) && (c8.add(a9.destroy), i6.push(a9.destroy)), a9 = Object.getPrototypeOf(a9);
    n6.clear(), c8.clear();
    const l8 = class extends r5 {
      constructor(...e7) {
        if (super(...e7), this.constructor === l8 && "function" == typeof this.postscript) {
          if (s9.length && Object.defineProperty(this, "initialize", {
            enumerable: false,
            configurable: true,
            value() {
              for (let e8 = s9.length - 1; e8 >= 0; e8--) s9[e8].call(this);
            }
          }), i6.length) {
            let e8 = false;
            const r6 = this[o2];
            Object.defineProperty(this, "destroy", {
              enumerable: false,
              configurable: true,
              value() {
                if (!e8) {
                  e8 = true, r6.call(this);
                  for (let e9 = 0; e9 < i6.length; e9++) i6[e9].call(this);
                }
              }
            });
          }
          Object.defineProperty(this, Symbol.dispose, {
            enumerable: false,
            configurable: true,
            value() {
              this.destroy();
            }
          }), this.postscript();
        }
      }
    };
    l8.__accessorMetadata__ = r(r5.prototype), l8.prototype.declaredClass = e6;
    const f7 = (e6 || "AccessorSubclass").split(".").slice(-1)[0];
    return Object.defineProperty(l8, "name", {
      value: f7,
      configurable: true
    }), l8;
  };
}
function l7(e6, t4) {
  return null == t4.get ? function() {
    const t5 = this.__accessor__, r5 = t5.propertiesByName.get(e6);
    if (void 0 === r5) return;
    s3(r5);
    const o11 = t5.store;
    return o11.has(e6) ? o11.get(e6) : r5.metadata.value;
  } : function() {
    const t5 = this.__accessor__, r5 = t5.propertiesByName.get(e6);
    if (void 0 !== r5) return r5.getComputed(t5);
  };
}
function p7(e6) {
  const t4 = e6.prototype, s9 = r(t4), n7 = {};
  for (const o11 of Object.getOwnPropertyNames(s9)) {
    const e7 = s9[o11];
    l6(e7), n7[o11] = {
      enumerable: true,
      configurable: true,
      get: l7(o11, e7),
      set(t5) {
        const s10 = this.__accessor__;
        if (void 0 !== s10) {
          if (!Object.isFrozen(this)) return s10.initialized && e7.readOnly ? f6("read-only", o11) : s10.lifecycle === I.CONSTRUCTED && e7.constructOnly ? f6("construct-only", o11) : void s10.set(o11, t5);
        } else Object.defineProperty(this, o11, {
          enumerable: true,
          configurable: true,
          writable: true,
          value: t5
        });
      }
    };
  }
  Object.defineProperties(e6.prototype, n7);
}
var f6 = (t4, r5) => {
  n.getLogger("esri.core.Accessor").error(`cannot assign to ${t4} property '${r5}'`);
};

export {
  o2 as o,
  t,
  e3 as e,
  u,
  l,
  p,
  I,
  r,
  o4 as o2,
  c2 as c,
  i,
  s3 as s,
  f,
  g,
  m,
  k,
  n3 as n,
  t2,
  r2,
  o6 as o3,
  u3 as u2,
  a4 as a,
  s4 as s2,
  g2,
  b,
  w,
  A2 as A,
  j,
  k2,
  M,
  S,
  T,
  N,
  _,
  B,
  C,
  D,
  s5 as s3,
  u4 as u3,
  y4 as y,
  o10 as o4,
  s8 as s4,
  a7 as a2,
  a8 as a3,
  p7 as p2
};
//# sourceMappingURL=chunk-DDYVXG4F.js.map
