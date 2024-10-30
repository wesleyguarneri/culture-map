import {
  f,
  u
} from "./chunk-PB33BAI3.js";
import {
  j
} from "./chunk-CVB43GGP.js";
import {
  c,
  h
} from "./chunk-MNLT652N.js";
import {
  n as n2
} from "./chunk-PRREDSOB.js";
import {
  U
} from "./chunk-SYATLP3H.js";
import {
  n2 as n,
  r,
  s2 as s,
  t
} from "./chunk-WYIDUUN2.js";
import {
  __async
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/intl/number.js
var t2 = {
  ar: "ar-u-nu-latn"
};
var u2 = /* @__PURE__ */ new WeakMap();
var r2 = {};
function a(e) {
  const a4 = e || r2;
  if (!u2.has(a4)) {
    const r5 = c(), i4 = t2[c()] || r5;
    u2.set(a4, new Intl.NumberFormat(i4, e));
  }
  return u2.get(a4);
}
function i(e = {}) {
  const n3 = {};
  return null != e.digitSeparator && (n3.useGrouping = e.digitSeparator), null != e.places && (n3.minimumFractionDigits = n3.maximumFractionDigits = e.places), n3;
}
function l(e, n3) {
  return Object.is(e, -0) && (e = 0), a(n3).format(e);
}
function o(e, t3 = c()) {
  if (!e) return null;
  let u4 = p.get(t3);
  if (!u4) {
    const e2 = a().formatToParts(12345.6), n3 = [...a({
      useGrouping: false
    }).format(9876543210)].reverse(), r5 = new Map(n3.map((e3, n4) => [e3, n4])), i4 = new RegExp(`[${e2.find((e3) => "group" === e3.type)?.value}]`, "g"), l3 = new RegExp(`[${e2.find((e3) => "decimal" === e3.type)?.value}]`), o3 = new RegExp(`[${n3.join("")}]`, "g"), c3 = /[\u200E\u200F\u202A\u202B\u202C\u202D\u202E\u2066\u2067\u2068\u2069\u061C]/g, s4 = /[-\u2212\u2013\u2014\u2015]/g;
    u4 = (e3) => {
      if ("" === (e3 = e3.trim().replaceAll(i4, "").replace(l3, ".").replace(o3, (e4) => String(r5.get(e4))).replaceAll(c3, "").replaceAll(s4, "-"))) return null;
      const n4 = Number(e3);
      return isNaN(n4) ? null : n4;
    }, p.set(t3, u4);
  }
  return u4(e);
}
h(() => {
  u2 = /* @__PURE__ */ new WeakMap(), r2 = {};
});
var p = /* @__PURE__ */ new Map();

// ../../../node_modules/@arcgis/core/intl/substitute.js
var i2 = () => n.getLogger("esri.intl.substitute");
function s2(t3, r5, n3 = {}) {
  const {
    format: o3 = {}
  } = n3;
  return r(t3, (t4) => u3(t4, r5, o3));
}
function u3(t3, e, n3) {
  let o3, i4;
  const s4 = t3.indexOf(":");
  if (-1 === s4 ? o3 = t3.trim() : (o3 = t3.slice(0, s4).trim(), i4 = t3.slice(s4 + 1).trim()), !o3) return "";
  const u4 = t(o3, e);
  if (null == u4) return "";
  const m = (i4 ? n3?.[i4] : null) ?? n3?.[o3];
  return m ? c2(u4, m) : i4 ? a2(u4, i4) : f2(u4);
}
function c2(t3, r5) {
  switch (r5.type) {
    case "date":
      return j(t3, r5.intlOptions);
    case "number":
      return l(t3, r5.intlOptions);
    default:
      return i2().warn("missing format descriptor for key {key}"), f2(t3);
  }
}
function a2(t3, r5) {
  switch (r5.toLowerCase()) {
    case "dateformat":
      return j(t3);
    case "numberformat":
      return l(t3);
    default:
      return i2().warn(`inline format is unsupported since 4.12: ${r5}`), /^(dateformat|datestring)/i.test(r5) ? j(t3) : /^numberformat/i.test(r5) ? l(t3) : f2(t3);
  }
}
function f2(t3) {
  switch (typeof t3) {
    case "string":
      return t3;
    case "number":
      return l(t3);
    case "boolean":
      return "" + t3;
    default:
      return t3 instanceof Date ? j(t3) : "";
  }
}

// ../../../node_modules/@arcgis/core/intl/t9n.js
function r3(e, r5, s4, i4) {
  return __async(this, null, function* () {
    const a4 = r5.exec(s4);
    if (!a4) throw new s("esri-intl:invalid-bundle", `Bundle id "${s4}" is not compatible with the pattern "${r5}"`);
    const c3 = a4[1] ? `${a4[1]}/` : "", l3 = a4[2], w = f(i4), h3 = `${c3}${l3}.json`, u4 = w ? `${c3}${l3}_${w}.json` : h3;
    let d;
    try {
      d = yield o2(e(u4));
    } catch (f4) {
      if (u4 === h3) throw new s("intl:unknown-bundle", `Bundle "${s4}" cannot be loaded`, {
        error: f4
      });
      try {
        d = yield o2(e(h3));
      } catch (f5) {
        throw new s("intl:unknown-bundle", `Bundle "${s4}" cannot be loaded`, {
          error: f5
        });
      }
    }
    return d;
  });
}
function o2(t3) {
  return __async(this, null, function* () {
    if (null != a3.fetchBundleAsset) return a3.fetchBundleAsset(t3);
    const n3 = yield U(t3, {
      responseType: "text"
    });
    return JSON.parse(n3.data);
  });
}
var s3 = class {
  constructor({
    base: e = "",
    pattern: t3,
    location: n3 = new URL(window.location.href)
  }) {
    let r5;
    r5 = "string" == typeof n3 ? (e2) => new URL(e2, new URL(n3, window.location.href)).href : n3 instanceof URL ? (e2) => new URL(e2, n3).href : n3, this.pattern = "string" == typeof t3 ? new RegExp(`^${t3}`) : t3, this.getAssetUrl = r5, e = e ? e.endsWith("/") ? e : e + "/" : "", this.matcher = new RegExp(`^${e}(?:(.*)\\/)?(.*)$`);
  }
  fetchMessageBundle(e, t3) {
    return r3(this.getAssetUrl, this.matcher, e, t3);
  }
};
function i3(e) {
  return new s3(e);
}
var a3 = {};

// ../../../node_modules/@arcgis/core/intl.js
u(i3({
  pattern: "esri/",
  location: n2
}));

export {
  i,
  l,
  o,
  s2 as s
};
//# sourceMappingURL=chunk-YVULORT6.js.map
