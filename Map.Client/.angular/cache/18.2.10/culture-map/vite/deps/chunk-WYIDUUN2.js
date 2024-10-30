import {
  a2 as a,
  c3 as c,
  e3 as e,
  f,
  h,
  i,
  m2 as m,
  o2 as o,
  s2 as s,
  u2 as u
} from "./chunk-DXLOWWK7.js";

// ../../../node_modules/@arcgis/core/core/lang.js
function l(t2, n4) {
  let e5;
  if (n4) for (e5 in t2) t2.hasOwnProperty(e5) && (void 0 === t2[e5] ? delete t2[e5] : t2[e5] instanceof Object && l(t2[e5], true));
  else for (e5 in t2) t2.hasOwnProperty(e5) && void 0 === t2[e5] && delete t2[e5];
  return t2;
}
function a2(t2) {
  if (!t2 || "object" != typeof t2 || "function" == typeof t2) return t2;
  const n4 = O(t2);
  if (null != n4) return n4;
  if (y(t2)) return t2.clone();
  if (m2(t2)) return t2.map(a2);
  if (b(t2)) return t2.clone();
  const e5 = {};
  for (const r3 of Object.getOwnPropertyNames(t2)) e5[r3] = a2(t2[r3]);
  return e5;
}
function p(t2) {
  if (!t2 || "object" != typeof t2 || "function" == typeof t2 || "HTMLElement" in globalThis && t2 instanceof HTMLElement) return t2;
  const n4 = O(t2);
  if (null != n4) return n4;
  if (m2(t2)) {
    let n5 = true;
    const e5 = t2.map((t3) => {
      const e6 = p(t3);
      return null != t3 && null == e6 && (n5 = false), e6;
    });
    return n5 ? e5 : null;
  }
  if (y(t2)) return t2.clone();
  if (t2 instanceof File || t2 instanceof Blob) return t2;
  if (!b(t2)) {
    const n5 = new (0, Object.getPrototypeOf(t2).constructor)();
    for (const e5 of Object.getOwnPropertyNames(t2)) {
      const r3 = t2[e5], o5 = p(r3);
      if (null != r3 && null == o5) return null;
      n5[e5] = o5;
    }
    return n5;
  }
  return null;
}
function y(t2) {
  return "function" == typeof t2.clone;
}
function m2(t2) {
  return "function" == typeof t2.map && "function" == typeof t2.forEach;
}
function b(t2) {
  return "function" == typeof t2.notifyChange && "function" == typeof t2.watch;
}
function g(t2) {
  if ("[object Object]" !== Object.prototype.toString.call(t2)) return false;
  const n4 = Object.getPrototypeOf(t2);
  return null === n4 || n4 === Object.prototype;
}
function O(t2) {
  if (o(t2) || u(t2) || e(t2) || c(t2) || i(t2) || a(t2) || f(t2) || s(t2) || m(t2)) return t2.slice();
  if (t2 instanceof Date) return new Date(t2.getTime());
  if (t2 instanceof ArrayBuffer) {
    return t2.slice(0, t2.byteLength);
  }
  if (t2 instanceof Map) {
    const n4 = /* @__PURE__ */ new Map();
    for (const [e5, r3] of t2) n4.set(e5, a2(r3));
    return n4;
  }
  if (t2 instanceof Set) {
    const n4 = /* @__PURE__ */ new Set();
    for (const e5 of t2) n4.add(a2(e5));
    return n4;
  }
  return null;
}
function j(t2, n4) {
  return t2 === n4 || "number" == typeof t2 && isNaN(t2) && "number" == typeof n4 && isNaN(n4) || "function" == typeof t2?.getTime && "function" == typeof n4?.getTime && t2.getTime() === n4.getTime() || false;
}
function h2(n4, e5) {
  return n4 === e5 || (null == n4 || "string" == typeof n4 ? n4 === e5 : "number" == typeof n4 ? n4 === e5 || "number" == typeof e5 && isNaN(n4) && isNaN(e5) : n4 instanceof Date ? e5 instanceof Date && n4.getTime() === e5.getTime() : Array.isArray(n4) ? Array.isArray(e5) && h(n4, e5) : n4 instanceof Set ? e5 instanceof Set && N(n4, e5) : n4 instanceof Map ? e5 instanceof Map && T(n4, e5) : !!g(n4) && g(e5) && w(n4, e5));
}
function w(t2, n4) {
  if (null === t2 || null === n4) return false;
  const e5 = Object.keys(t2);
  if (null === n4 || Object.keys(n4).length !== e5.length) return false;
  for (const r3 of e5) if (t2[r3] !== n4[r3] || !Object.prototype.hasOwnProperty.call(n4, r3)) return false;
  return true;
}
function N(t2, n4) {
  if (t2.size !== n4.size) return false;
  for (const e5 of t2) if (!n4.has(e5)) return false;
  return true;
}
function T(t2, n4) {
  if (t2.size !== n4.size) return false;
  for (const [e5, r3] of t2) {
    const t3 = n4.get(e5);
    if (t3 !== r3 || void 0 === t3 && !n4.has(e5)) return false;
  }
  return true;
}

// ../../../node_modules/@arcgis/core/core/object.js
function n(r3, n4, t2 = false) {
  return o2(r3, n4, t2);
}
function t(r3, n4) {
  if (null != n4) return n4[r3] || i2(r3.split("."), false, n4);
}
function e2(r3, n4, t2) {
  const e5 = r3.split("."), u4 = e5.pop(), o5 = i2(e5, true, t2);
  o5 && u4 && (o5[u4] = n4);
}
function u2(r3, n4) {
  if (null == r3 && null == n4) return false;
  if (null == r3) return true;
  if (null == n4) return true;
  if ("object" == typeof r3) {
    if (Array.isArray(r3)) {
      const t2 = n4;
      if (r3.length !== t2.length) return true;
      for (let n5 = 0; n5 < r3.length; n5++) if (u2(r3[n5], t2[n5])) return true;
      return false;
    }
    if (Object.keys(r3).length !== Object.keys(n4).length) return true;
    for (const t2 in r3) {
      if (u2(r3[t2], n4[t2])) return true;
    }
    return false;
  }
  return r3 !== n4;
}
function i2(r3, n4, t2) {
  let e5 = t2;
  for (const u4 of r3) {
    if (null == e5) return;
    if (!(u4 in e5)) {
      if (!n4) return;
      e5[u4] = {};
    }
    e5 = e5[u4];
  }
  return e5;
}
function o2(n4, t2, e5) {
  return t2 ? Object.keys(t2).reduce((n5, u4) => {
    let i5 = n5[u4], f3 = t2[u4];
    return i5 === f3 ? n5 : void 0 === i5 ? (n5[u4] = a2(f3), n5) : (Array.isArray(f3) || Array.isArray(n5) ? (i5 = i5 ? Array.isArray(i5) ? n5[u4] = i5.concat() : n5[u4] = [i5] : n5[u4] = [], f3 && (Array.isArray(f3) || (f3 = [f3]), e5 ? f3.forEach((r3) => {
      i5.includes(r3) || i5.push(r3);
    }) : n5[u4] = f3.concat())) : f3 && "object" == typeof f3 ? n5[u4] = o2(i5, f3, e5) : n5.hasOwnProperty(u4) && !t2.hasOwnProperty(u4) || (n5[u4] = f3), n5);
  }, n4 || {}) : n4;
}

// ../../../node_modules/@arcgis/core/config.js
var s2 = {
  apiKey: void 0,
  applicationName: "",
  applicationUrl: globalThis.location?.href,
  assetsPath: "",
  fontsUrl: "https://static.arcgis.com/fonts",
  geometryServiceUrl: "https://utility.arcgisonline.com/arcgis/rest/services/Geometry/GeometryServer",
  geoRSSServiceUrl: "https://utility.arcgis.com/sharing/rss",
  kmlServiceUrl: "https://utility.arcgis.com/sharing/kml",
  userPrivilegesApplied: true,
  portalUrl: "https://www.arcgis.com",
  respectPrefersReducedMotion: true,
  routeServiceUrl: "https://route-api.arcgis.com/arcgis/rest/services/World/Route/NAServer/Route_World",
  workers: {
    loaderConfig: {
      has: {},
      paths: {},
      map: {},
      packages: []
    }
  },
  request: {
    crossOriginNoCorsDomains: null,
    httpsDomains: ["arcgis.com", "arcgisonline.com", "esrikr.com", "premiumservices.blackbridge.com", "esripremium.accuweather.com", "gbm.digitalglobe.com", "firstlook.digitalglobe.com", "msi.digitalglobe.com"],
    interceptors: [],
    internalInterceptors: [],
    maxUrlLength: 2e3,
    priority: "high",
    proxyRules: [],
    proxyUrl: null,
    timeout: 6e4,
    trustedServers: [],
    useIdentity: true
  },
  log: {
    interceptors: [],
    level: null
  }
};
if (globalThis.esriConfig && (n(s2, globalThis.esriConfig, true), delete s2.has), !s2.assetsPath) {
  {
    const e5 = "4.30";
    s2.assetsPath = `https://js.arcgis.com/${e5}/@arcgis/core/assets`;
  }
  s2.defaultAssetsPath = s2.assetsPath;
}

// ../../../node_modules/@arcgis/core/core/string.js
var e3 = /\{([^}]+)\}/g;
function n2(t2) {
  return t2 ?? "";
}
function r(r3, o5) {
  return o5 ? r3.replaceAll(e3, "object" == typeof o5 ? (e5, r4) => n2(t(r4, o5)) : (t2, e5) => n2(o5(e5))) : r3;
}
function o3(t2, e5) {
  return t2.replaceAll(/([.$?*|{}()[\]\\/+\-^])/g, (t3) => e5?.includes(t3) ? t3 : `\\${t3}`);
}
function l2(t2) {
  let e5 = 0;
  for (let n4 = 0; n4 < t2.length; n4++) e5 = (e5 << 5) - e5 + t2.charCodeAt(n4), e5 |= 0;
  return e5;
}
var u3;
function c2(t2) {
  u3 ??= new DOMParser();
  return u3.parseFromString(t2 || "", "text/html").body.innerText || "";
}
function i3(t2, e5) {
  return new RegExp(`{${e5}}`, "ig").test(t2);
}
function f2(t2, ...e5) {
  let n4 = t2[0];
  for (let r3 = 0; r3 < e5.length; ++r3) n4 += e5[r3] + t2[r3 + 1];
  return n4;
}

// ../../../node_modules/@arcgis/core/core/Logger.js
var r2 = {
  info: 0,
  warn: 1,
  error: 2,
  none: 3
};
var n3 = class _n {
  constructor(e5) {
    this.level = null, this._module = "", this._parent = null, this.writer = null, this._loggedMessages = {
      error: /* @__PURE__ */ new Map(),
      warn: /* @__PURE__ */ new Map(),
      info: /* @__PURE__ */ new Map()
    }, null != e5.level && (this.level = e5.level), null != e5.writer && (this.writer = e5.writer), this._module = e5.module, _n._loggers.set(this.module, this);
    const t2 = this.module.lastIndexOf(".");
    -1 !== t2 && (this._parent = _n.getLogger(this.module.slice(0, t2)));
  }
  get module() {
    return this._module;
  }
  get parent() {
    return this._parent;
  }
  error(...e5) {
    this._log("error", "always", ...e5);
  }
  warn(...e5) {
    this._log("warn", "always", ...e5);
  }
  info(...e5) {
    this._log("info", "always", ...e5);
  }
  errorOnce(...e5) {
    this._log("error", "once", ...e5);
  }
  warnOnce(...e5) {
    this._log("warn", "once", ...e5);
  }
  infoOnce(...e5) {
    this._log("info", "once", ...e5);
  }
  errorOncePerTick(...e5) {
    this._log("error", "oncePerTick", ...e5);
  }
  warnOncePerTick(...e5) {
    this._log("warn", "oncePerTick", ...e5);
  }
  infoOncePerTick(...e5) {
    this._log("info", "oncePerTick", ...e5);
  }
  get test() {
  }
  static get test() {
  }
  static getLogger(e5) {
    return e5 = "string" != typeof e5 ? e5.declaredClass : e5, _n._loggers.get(e5) || new _n({
      module: e5
    });
  }
  _log(t2, r3, ...i5) {
    if (!this._matchLevel(t2)) return;
    if ("always" !== r3 && !_n._throttlingDisabled) {
      const e5 = o4(i5), s5 = this._loggedMessages[t2].get(e5);
      if ("once" === r3 && null != s5 || "oncePerTick" === r3 && s5 && s5 >= _n._tickCounter) return;
      this._loggedMessages[t2].set(e5, _n._tickCounter), _n._scheduleTickCounterIncrement();
    }
    for (const n4 of s2.log.interceptors) if (n4(t2, this.module, ...i5)) return;
    this._inheritedWriter()(t2, this.module, ...i5);
  }
  _parentWithMember(e5, t2) {
    let r3 = this;
    for (; null != r3; ) {
      const t3 = r3[e5];
      if (null != t3) return t3;
      r3 = r3.parent;
    }
    return t2;
  }
  _inheritedWriter() {
    return this._parentWithMember("writer", i4);
  }
  _matchLevel(t2) {
    const n4 = s2.log.level || "warn";
    return r2[this._parentWithMember("level", n4)] <= r2[t2];
  }
  static _scheduleTickCounterIncrement() {
    _n._tickCounterScheduled || (_n._tickCounterScheduled = true, Promise.resolve().then(() => {
      _n._tickCounter++, _n._tickCounterScheduled = false;
    }));
  }
};
function i4(e5, t2, ...r3) {
  console[e5](`[${t2}]`, ...r3);
}
function o4(...e5) {
  const r3 = (e6, t2) => "object" != typeof t2 || Array.isArray(t2) ? t2 : "[Object]";
  return l2(JSON.stringify(e5, r3));
}
n3._loggers = /* @__PURE__ */ new Map(), n3._tickCounter = 0, n3._tickCounterScheduled = false, n3._throttlingDisabled = false;

// ../../../node_modules/@arcgis/core/core/Message.js
function s3(s5, e5) {
  return s5.replaceAll(/\$\{([^\s:}]*)(?::([^\s:}]+))?\}/g, (s6, r3) => {
    if ("" === r3) return "$";
    const i5 = t(r3, e5);
    return (i5 ?? "").toString();
  });
}
var e4 = class {
  constructor(t2, e5, r3 = void 0) {
    this.name = t2, this.details = r3, this.message = (e5 && s3(e5, r3)) ?? "";
  }
  toString() {
    return "[" + this.name + "]: " + this.message;
  }
};

// ../../../node_modules/@arcgis/core/core/Error.js
var s4 = class _s extends e4 {
  constructor(e5, t2, r3) {
    super(e5, t2, r3);
  }
  toJSON() {
    if (null != this.details) try {
      return {
        name: this.name,
        message: this.message,
        details: JSON.parse(JSON.stringify(this.details, (t2, r3) => {
          if (r3 && "object" == typeof r3 && "function" == typeof r3.toJSON) return r3;
          try {
            return a2(r3);
          } catch (s5) {
            return "[object]";
          }
        }))
      };
    } catch (r3) {
      throw n3.getLogger("esri.core.Error").error(r3), r3;
    }
    return {
      name: this.name,
      message: this.message,
      details: this.details
    };
  }
  static fromJSON(e5) {
    return new _s(e5.name, e5.message, e5.details);
  }
};
s4.prototype.type = "error";

export {
  l,
  a2 as a,
  p,
  y,
  j,
  h2 as h,
  n,
  t,
  e2 as e,
  u2 as u,
  s2 as s,
  r,
  o3 as o,
  l2,
  c2 as c,
  i3 as i,
  f2 as f,
  n3 as n2,
  e4 as e2,
  s4 as s2
};
//# sourceMappingURL=chunk-WYIDUUN2.js.map
