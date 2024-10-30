import {
  a as a2
} from "./chunk-V6AMQYXE.js";
import {
  b,
  c2 as c,
  m,
  u
} from "./chunk-HJY2YILU.js";
import {
  a,
  n2 as n,
  s,
  s2
} from "./chunk-WYIDUUN2.js";
import {
  O,
  has
} from "./chunk-DXLOWWK7.js";
import {
  __async,
  __spreadValues
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/portal/support/urlUtils.js
var t = /^https:\/\/([a-z\d-]+)(\.maps([^.]*))?\.arcgis\.com/i;
var e = {
  devext: {
    customBaseUrl: "mapsdevext.arcgis.com",
    portalHostname: "devext.arcgis.com"
  },
  qaext: {
    customBaseUrl: "mapsqa.arcgis.com",
    portalHostname: "qaext.arcgis.com"
  },
  www: {
    customBaseUrl: "maps.arcgis.com",
    portalHostname: "www.arcgis.com"
  }
};
function s3(s4) {
  const a6 = s4?.match(t);
  if (!a6) return null;
  const [, r3, c6, o] = a6;
  if (!r3) return null;
  let l3 = null, m5 = null, n4 = null;
  const {
    devext: u3,
    qaext: i3,
    www: p2
  } = e;
  if (c6) {
    if (l3 = r3, o) switch (o.toLowerCase()) {
      case "devext":
        ({
          customBaseUrl: m5,
          portalHostname: n4
        } = u3);
        break;
      case "qa":
        ({
          customBaseUrl: m5,
          portalHostname: n4
        } = i3);
        break;
      default:
        return null;
    }
    else ({
      customBaseUrl: m5,
      portalHostname: n4
    } = p2);
  } else switch (r3.toLowerCase()) {
    case "devext":
      ({
        customBaseUrl: m5,
        portalHostname: n4
      } = u3);
      break;
    case "qaext":
      ({
        customBaseUrl: m5,
        portalHostname: n4
      } = i3);
      break;
    case "www":
      ({
        customBaseUrl: m5,
        portalHostname: n4
      } = p2);
      break;
    default:
      return null;
  }
  return {
    customBaseUrl: m5,
    isPortal: false,
    portalHostname: n4,
    urlKey: l3
  };
}
function a3(t5) {
  return /\/(sharing|usrsvcs)\/(appservices|servers)\//i.test(t5);
}
function r(t5) {
  const e3 = /^https?:\/\/(?:cdn|[a-z\d-]+\.maps)\.arcgis\.com/i, s4 = /^https?:\/\/(?:cdndev|[a-z\d-]+\.mapsdevext)\.arcgis\.com/i, a6 = /^https?:\/\/(?:cdnqa|[a-z\d-]+\.mapsqa)\.arcgis\.com/i;
  return e3.test(t5) ? t5 = t5.replace(e3, "https://www.arcgis.com") : s4.test(t5) ? t5 = t5.replace(s4, "https://devext.arcgis.com") : a6.test(t5) && (t5 = t5.replace(a6, "https://qaext.arcgis.com")), t5;
}

// ../../../node_modules/@arcgis/core/support/base64Utils.js
function t2(t5) {
  const n4 = atob(t5), r3 = new Uint8Array(n4.length);
  for (let e3 = 0; e3 < n4.length; e3++) r3[e3] = n4.charCodeAt(e3);
  return r3.buffer;
}
function n2(t5) {
  const n4 = new Uint8Array(t5);
  let r3 = "";
  for (let e3 = 0; e3 < n4.length; e3++) r3 += String.fromCharCode(n4[e3]);
  return btoa(r3);
}

// ../../../node_modules/@arcgis/core/core/urlUtils.js
var l = () => n.getLogger("esri.core.urlUtils");
var c2 = s.request;
var f = "esri/config: esriConfig.request.proxyUrl is not set.";
var a4 = /^\s*[a-z][a-z0-9-+.]*:(?![0-9])/i;
var p = /^\s*http:/i;
var h = /^\s*https:/i;
var d = /^\s*file:/i;
var m2 = /:\d+$/;
var g = /^https?:\/\/[^/]+\.arcgis.com\/sharing(\/|$)/i;
var y = new RegExp("^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?$");
var $ = new RegExp("^((([^[:]+):)?([^@]+)@)?(\\[([^\\]]+)\\]|([^[:]*))(:([0-9]+))?$");
var x = class {
  constructor(t5 = "") {
    this.uri = t5, this.scheme = null, this.authority = null, this.path = null, this.query = null, this.fragment = null, this.user = null, this.password = null, this.host = null, this.port = null;
    let n4 = this.uri.match(y);
    this.scheme = n4[2] || (n4[1] ? "" : null), this.authority = n4[4] || (n4[3] ? "" : null), this.path = n4[5], this.query = n4[7] || (n4[6] ? "" : null), this.fragment = n4[9] || (n4[8] ? "" : null), null != this.authority && (n4 = this.authority.match($), this.user = n4[3] || null, this.password = n4[4] || null, this.host = n4[6] || n4[7], this.port = n4[9] || null);
  }
  toString() {
    return this.uri;
  }
};
var w = {};
var O2 = new x(s.applicationUrl);
var U = O2;
var R = j();
var b2 = R;
var C = () => U;
var q = () => b2;
function j() {
  const t5 = U.path, n4 = t5.substring(0, t5.lastIndexOf(t5.split("/")[t5.split("/").length - 1]));
  return `${`${U.scheme}://${U.host}${null != U.port ? `:${U.port}` : ""}`}${n4}`;
}
function I(t5) {
  if (!t5) return null;
  const n4 = {
    path: null,
    query: null
  }, e3 = new x(t5), r3 = t5.indexOf("?");
  return null === e3.query ? n4.path = t5 : (n4.path = t5.substring(0, r3), n4.query = A(e3.query)), e3.fragment && (n4.hash = e3.fragment, null === e3.query && (n4.path = n4.path.substring(0, n4.path.length - (e3.fragment.length + 1)))), n4;
}
function A(t5) {
  const n4 = t5.split("&"), e3 = {};
  for (const r3 of n4) {
    if (!r3) continue;
    const t6 = r3.indexOf("=");
    let n5, o;
    t6 < 0 ? (n5 = decodeURIComponent(r3), o = "") : (n5 = decodeURIComponent(r3.slice(0, t6)), o = decodeURIComponent(r3.slice(t6 + 1)));
    let s4 = e3[n5];
    "string" == typeof s4 && (s4 = e3[n5] = [s4]), Array.isArray(s4) ? s4.push(o) : e3[n5] = o;
  }
  return e3;
}
function v(t5, n4) {
  return t5 ? n4 && "function" == typeof n4 ? Object.keys(t5).map((e3) => encodeURIComponent(e3) + "=" + encodeURIComponent(n4(e3, t5[e3]))).join("&") : Object.keys(t5).map((e3) => {
    const o = t5[e3];
    if (null == o) return "";
    const s4 = encodeURIComponent(e3) + "=", i3 = n4?.[e3];
    return i3 ? s4 + encodeURIComponent(i3(o)) : Array.isArray(o) ? o.map((t6) => a2(t6) ? s4 + encodeURIComponent(JSON.stringify(t6)) : s4 + encodeURIComponent(t6)).join("&") : a2(o) ? s4 + encodeURIComponent(JSON.stringify(o)) : s4 + encodeURIComponent(o);
  }).filter((t6) => t6).join("&") : "";
}
function P(t5 = false) {
  let n4, r3 = c2.proxyUrl;
  if ("string" == typeof t5) {
    n4 = dt(t5);
    const e3 = T(t5);
    e3 && (r3 = e3.proxyUrl);
  } else n4 = !!t5;
  if (!r3) throw l().warn(f), new s2("urlUtils:proxy-not-set", f);
  n4 && wt() && (r3 = $t(r3));
  return I(r3);
}
function S(t5) {
  const n4 = T(t5);
  let e3, r3;
  if (n4) {
    const t6 = E(n4.proxyUrl);
    e3 = t6.path, r3 = t6.query ? A(t6.query) : null;
  }
  if (e3) {
    const n5 = I(t5);
    t5 = e3 + "?" + n5.path;
    const o = v(__spreadValues(__spreadValues({}, r3), n5.query));
    o && (t5 = `${t5}?${o}`);
  }
  return t5;
}
var k = {
  path: "",
  query: ""
};
function E(t5) {
  const n4 = t5.indexOf("?");
  return -1 !== n4 ? (k.path = t5.slice(0, n4), k.query = t5.slice(n4 + 1)) : (k.path = t5, k.query = null), k;
}
function B(t5) {
  return t5 = (t5 = Ot(t5 = Ct(t5 = E(t5).path), true)).toLowerCase();
}
function H(t5) {
  const n4 = {
    proxyUrl: t5.proxyUrl,
    urlPrefix: B(t5.urlPrefix)
  }, e3 = c2.proxyRules, r3 = n4.urlPrefix;
  let o = e3.length;
  for (let s4 = 0; s4 < e3.length; s4++) {
    const t6 = e3[s4].urlPrefix;
    if (0 === r3.indexOf(t6)) {
      if (r3.length === t6.length) return -1;
      o = s4;
      break;
    }
    0 === t6.indexOf(r3) && (o = s4 + 1);
  }
  return e3.splice(o, 0, n4), o;
}
function T(t5) {
  const n4 = c2.proxyRules, e3 = B(t5);
  for (let r3 = 0; r3 < n4.length; r3++) if (0 === e3.indexOf(n4[r3].urlPrefix)) return n4[r3];
}
function W(t5, n4) {
  if (!t5 || !n4) return false;
  t5 = z(t5), n4 = z(n4);
  const e3 = s3(t5), r3 = s3(n4);
  return null != e3 && null != r3 ? e3.portalHostname === r3.portalHostname : null == e3 && null == r3 && F(t5, n4, true);
}
function N(t5, n4) {
  return t5 = z(t5), n4 = z(n4), Ot(t5) === Ot(n4);
}
function z(t5) {
  const n4 = (t5 = K(t5)).indexOf("/sharing");
  return n4 > 0 ? t5.substring(0, n4) : t5.replace(/\/+$/, "");
}
function D(t5, n4 = c2.interceptors) {
  const e3 = (n5) => null == n5 || n5 instanceof RegExp && n5.test(t5) || "string" == typeof n5 && t5.startsWith(n5);
  if (n4) {
    for (const r3 of n4) if (Array.isArray(r3.urls)) {
      if (r3.urls.some(e3)) return r3;
    } else if (e3(r3.urls)) return r3;
  }
  return null;
}
function F(t5, n4, e3 = false) {
  if (!t5 || !n4) return false;
  const r3 = vt(t5), o = vt(n4);
  return !(!e3 && r3.scheme !== o.scheme) && null != r3.host && null != o.host && r3.host.toLowerCase() === o.host.toLowerCase() && r3.port === o.port;
}
function M(t5) {
  if ("string" == typeof t5) {
    if (!Y(t5)) return true;
    t5 = vt(t5);
  }
  if (F(t5, U)) return true;
  const n4 = c2.trustedServers || [];
  for (let e3 = 0; e3 < n4.length; e3++) {
    const r3 = Q(n4[e3]);
    for (let n5 = 0; n5 < r3.length; n5++) if (F(t5, r3[n5])) return true;
  }
  return false;
}
function Q(t5) {
  return w[t5] || (ht(t5) || pt(t5) ? w[t5] = [new x(_(t5))] : w[t5] = [new x(`http://${t5}`), new x(`https://${t5}`)]), w[t5];
}
function _(t5, n4 = b2, e3) {
  return pt(t5) ? e3?.preserveProtocolRelative ? t5 : "http" === U.scheme && U.authority === X(t5).slice(2) ? `http:${t5}` : `https:${t5}` : ht(t5) ? t5 : V("/" === t5[0] ? Ut(n4) : n4, t5);
}
function G(t5, n4 = b2, e3) {
  if (null == t5 || !Y(t5)) return t5;
  const r3 = K(t5), o = r3.toLowerCase(), s4 = K(n4).toLowerCase().replace(/\/+$/, ""), i3 = e3 ? K(e3).toLowerCase().replace(/\/+$/, "") : null;
  if (i3 && 0 !== s4.indexOf(i3)) return t5;
  const u3 = (t6, n5, e4) => -1 === (e4 = t6.indexOf(n5, e4)) ? t6.length : e4;
  let l3 = u3(o, "/", o.indexOf("//") + 2), c6 = -1;
  for (; o.slice(0, l3 + 1) === s4.slice(0, l3) + "/" && (c6 = l3 + 1, l3 !== o.length); ) l3 = u3(o, "/", l3 + 1);
  if (-1 === c6) return t5;
  if (i3 && c6 < i3.length) return t5;
  t5 = r3.slice(c6);
  const f3 = s4.slice(c6 - 1).replaceAll(/[^/]+/g, "").length;
  if (f3 > 0) for (let a6 = 0; a6 < f3; a6++) t5 = `../${t5}`;
  else t5 = `./${t5}`;
  return t5;
}
function K(t5) {
  return t5 = It(t5 = Lt(t5 = jt(t5 = _(t5 = t5.trim()))));
}
function V(...t5) {
  const e3 = t5.filter(O);
  if (!e3?.length) return;
  const r3 = [];
  if (Y(e3[0])) {
    const t6 = e3[0], n4 = t6.indexOf("//");
    -1 !== n4 && (r3.push(t6.slice(0, n4 + 1)), gt(e3[0]) && (r3[0] += "/"), e3[0] = t6.slice(n4 + 2));
  } else "/" === e3[0][0] && r3.push("");
  const o = e3.reduce((t6, n4) => n4 ? t6.concat(n4.split("/")) : t6, []);
  for (let n4 = 0; n4 < o.length; n4++) {
    const t6 = o[n4];
    ".." === t6 && r3.length > 0 && ".." !== r3[r3.length - 1] ? r3.pop() : (!t6 && n4 === o.length - 1 || t6 && ("." !== t6 || 0 === r3.length)) && r3.push(t6);
  }
  return r3.join("/");
}
function X(t5, n4 = false) {
  if (null == t5 || Z(t5) || tt(t5)) return null;
  let e3 = t5.indexOf("://");
  if (-1 === e3 && pt(t5)) e3 = 2;
  else {
    if (-1 === e3) return null;
    e3 += 3;
  }
  const r3 = t5.indexOf("/", e3);
  return -1 !== r3 && (t5 = t5.slice(0, r3)), n4 && (t5 = Ot(t5, true)), t5;
}
function Y(t5) {
  return pt(t5) || ht(t5);
}
function Z(t5) {
  return null != t5 && "blob:" === t5.slice(0, 5);
}
function tt(t5) {
  return null != t5 && "data:" === t5.slice(0, 5);
}
function nt(t5) {
  const n4 = ot(t5);
  return n4?.isBase64 ? t2(n4.data) : null;
}
function et(t5) {
  return n2(t5).replaceAll("+", "-").replaceAll("/", "_").replace(/=+$/, "");
}
var rt = /^data:(.*?)(;base64)?,(.*)$/;
function ot(t5) {
  const n4 = t5.match(rt);
  if (!n4) return null;
  const [, e3, r3, o] = n4;
  return {
    mediaType: e3,
    isBase64: !!r3,
    data: o
  };
}
function st(t5) {
  return t5.isBase64 ? `data:${t5.mediaType};base64,${t5.data}` : `data:${t5.mediaType},${t5.data}`;
}
function it(t5) {
  return __async(this, null, function* () {
    return (yield fetch(t5)).blob();
  });
}
function ut(t5) {
  const n4 = nt(t5);
  if (!n4) return null;
  const e3 = ot(t5);
  return new Blob([n4], {
    type: e3.mediaType
  });
}
function pt(t5) {
  return null != t5 && "/" === t5[0] && "/" === t5[1];
}
function ht(t5) {
  return null != t5 && a4.test(t5);
}
function dt(t5) {
  return null != t5 && h.test(t5) || "https" === U.scheme && pt(t5);
}
function mt(t5) {
  return null != t5 && p.test(t5) || "http" === U.scheme && pt(t5);
}
function gt(t5) {
  return null != t5 && d.test(t5);
}
function $t(t5) {
  return pt(t5) ? `https:${t5}` : t5.replace(p, "https:");
}
function xt() {
  return "http" === U.scheme;
}
function wt() {
  return "https" === U.scheme;
}
function Ot(t5, n4 = false) {
  return pt(t5) ? t5.slice(2) : (t5 = t5.replace(a4, ""), n4 && t5.length > 1 && "/" === t5[0] && "/" === t5[1] && (t5 = t5.slice(2)), t5);
}
function Ut(t5) {
  const n4 = t5.indexOf("//"), e3 = t5.indexOf("/", n4 + 2);
  return -1 === e3 ? t5 : t5.slice(0, e3);
}
function Rt(t5) {
  let n4 = 0;
  if (Y(t5)) {
    const e4 = t5.indexOf("//");
    -1 !== e4 && (n4 = e4 + 2);
  }
  const e3 = t5.lastIndexOf("/");
  return e3 < n4 ? t5 : t5.slice(0, e3 + 1);
}
function bt(t5, n4) {
  if (!t5) return "";
  const e3 = I(t5).path.replace(/\/+$/, ""), r3 = e3.substring(e3.lastIndexOf("/") + 1);
  if (!n4?.length) return r3;
  const o = new RegExp(`\\.(${n4.join("|")})$`, "i");
  return r3.replace(o, "");
}
function Ct(t5) {
  return t5.endsWith("/") ? t5 : `${t5}/`;
}
function qt(t5) {
  return t5.replace(/\/+$/, "");
}
function jt(t5) {
  if (/^https?:\/\//i.test(t5)) {
    const n4 = E(t5);
    t5 = (t5 = n4.path.replaceAll(/\/{2,}/g, "/")).replace("/", "//"), n4.query && (t5 += `?${n4.query}`);
  }
  return t5;
}
function Lt(t5) {
  return t5.replace(/^(https?:\/\/)(arcgis\.com)/i, "$1www.$2");
}
function It(t5) {
  const n4 = c2.httpsDomains;
  if (!mt(t5)) return t5;
  const e3 = t5.indexOf("/", 7);
  let r3;
  if (r3 = -1 === e3 ? t5 : t5.slice(0, e3), r3 = r3.toLowerCase().slice(7), m2.test(r3)) {
    if (!r3.endsWith(":80")) return t5;
    r3 = r3.slice(0, -3), t5 = t5.replace(":80", "");
  }
  return xt() && r3 === U.authority && !g.test(t5) || (wt() && r3 === U.authority || n4 && n4.some((t6) => r3 === t6 || r3.endsWith(`.${t6}`)) || wt() && !T(t5)) && (t5 = $t(t5)), t5;
}
function At(t5, n4, e3) {
  if (!(n4 && e3 && t5 && Y(t5))) return t5;
  const r3 = t5.indexOf("//"), o = t5.indexOf("/", r3 + 2), s4 = t5.indexOf(":", r3 + 2), i3 = Math.min(o < 0 ? t5.length : o, s4 < 0 ? t5.length : s4);
  if (t5.slice(r3 + 2, i3).toLowerCase() !== n4.toLowerCase()) return t5;
  return `${t5.slice(0, r3 + 2)}${e3}${t5.slice(i3)}`;
}
function vt(t5) {
  return "string" == typeof t5 ? new x(_(t5)) : (t5.scheme || (t5.scheme = U.scheme), t5);
}
function Pt(t5) {
  return Nt.test(t5);
}
function St(t5, n4) {
  const e3 = I(t5), r3 = Object.keys(e3.query || {});
  return r3.length > 0 && n4 && n4.warn("removeQueryParameters()", `Url query parameters are not supported, the following parameters have been removed: ${r3.join(", ")}.`), e3.path;
}
function kt(t5, n4, e3) {
  const r3 = I(t5), o = r3.query || {};
  return o[n4] = String(e3), `${r3.path}?${v(o)}`;
}
function Et(t5, n4) {
  if (!n4) return t5;
  const e3 = I(t5), r3 = e3.query || {};
  for (const [s4, i3] of Object.entries(n4)) null != i3 && (r3[s4] = i3);
  const o = v(r3);
  return o ? `${e3.path}?${o}` : e3.path;
}
function Ht(t5) {
  if (null == t5) return null;
  const n4 = t5.match(Jt);
  return n4 ? n4[2] : null;
}
function Tt(t5) {
  if (null == t5) return null;
  const n4 = t5.match(Jt);
  return n4 ? {
    path: n4[1],
    extension: n4[2]
  } : {
    path: t5,
    extension: null
  };
}
function Wt(t5) {
  return __async(this, null, function* () {
    if ("string" == typeof t5) {
      return ot(t5) ?? {
        data: t5
      };
    }
    return new Promise((n4, e3) => {
      const r3 = new FileReader();
      r3.readAsDataURL(t5), r3.onload = () => n4(ot(r3.result)), r3.onerror = (t6) => e3(t6);
    });
  });
}
var Jt = /([^.]*)\.([^/]*)$/;
var Nt = /(^data:image\/svg|\.svg$)/i;

// ../../../node_modules/@arcgis/core/support/revision.js
var e2 = "20240724";
var c3 = "ac51c09e1d17be02f839eb2e22bd05fd7a16c2d3";

// ../../../node_modules/@arcgis/core/kernel.js
Symbol.dispose ??= Symbol("Symbol.dispose"), Symbol.asyncDispose ??= Symbol("Symbol.asyncDispose");
var r2 = "4.30";
var t3;
var i = r2;
i = "4.30.9";
function n3(o) {
  t3 = o;
}
function m3(s4) {
  const e3 = t3?.findCredential(s4);
  return e3?.token ? kt(s4, "token", e3.token) : s4;
}
has("host-webworker");

// ../../../node_modules/@arcgis/core/support/apiKeyUtils.js
var t4 = /* @__PURE__ */ new Set(["elevation3d.arcgis.com", "js.arcgis.com", "jsdev.arcgis.com", "jsqa.arcgis.com", "static.arcgis.com"]);
function c4(r3) {
  const c6 = X(r3, true);
  return !!c6 && c6.endsWith(".arcgis.com") && !t4.has(c6) && !r3.endsWith("/sharing/rest/generateToken");
}

// ../../../node_modules/@arcgis/core/support/requestUtils.js
function i2(e3, o, t5 = false, n4) {
  return new Promise((s4, i3) => {
    if (c(n4)) return void i3(c5());
    let a6 = () => {
      l3(), i3(new Error(`Unable to load ${o}`));
    }, u3 = () => {
      const r3 = e3;
      l3(), s4(r3);
    }, m5 = () => {
      if (!e3) return;
      const r3 = e3;
      l3(), r3.src = "", i3(c5());
    };
    const l3 = () => {
      has("esri-image-decode") || (e3.removeEventListener("error", a6), e3.removeEventListener("load", u3)), a6 = null, u3 = null, e3 = null, null != n4 && n4.removeEventListener("abort", m5), m5 = null, t5 && URL.revokeObjectURL(o);
    };
    null != n4 && n4.addEventListener("abort", m5), has("esri-image-decode") ? e3.decode().then(u3, a6) : (e3.addEventListener("error", a6), e3.addEventListener("load", u3));
  });
}
function c5() {
  try {
    return new DOMException("Aborted", "AbortError");
  } catch {
    const e3 = new Error();
    return e3.name = "AbortError", e3;
  }
}
var a5 = "Timeout exceeded";
function u2() {
  return new Error(a5);
}
function m4(e3) {
  return "object" == typeof e3 && !!e3 && "message" in e3 && e3.message === a5;
}
function l2(r3) {
  s.request.crossOriginNoCorsDomains || (s.request.crossOriginNoCorsDomains = {});
  const t5 = s.request.crossOriginNoCorsDomains;
  for (let e3 of r3) e3 = e3.toLowerCase(), /^https?:\/\//.test(e3) ? t5[X(e3) ?? ""] = 0 : (t5[X("http://" + e3) ?? ""] = 0, t5[X("https://" + e3) ?? ""] = 0);
}
function d2(r3) {
  const s4 = s.request.crossOriginNoCorsDomains;
  if (s4) {
    let e3 = X(r3);
    if (e3) return e3 = e3.toLowerCase(), !F(e3, C()) && s4[e3] < Date.now() - 36e5;
  }
  return false;
}
function f2(r3) {
  return __async(this, null, function* () {
    const t5 = s.request.crossOriginNoCorsDomains, n4 = X(r3);
    t5 && n4 && (t5[n4.toLowerCase()] = Date.now());
    const i3 = I(r3);
    r3 = i3.path, "json" === i3.query?.f && (r3 += "?f=json");
    try {
      yield fetch(r3, {
        mode: "no-cors",
        credentials: "include"
      });
    } catch {
    }
  });
}

// ../../../node_modules/@arcgis/core/request.js
function U2(e3, t5) {
  return __async(this, null, function* () {
    e3 instanceof URL && (e3 = e3.toString()), t5?.query instanceof URLSearchParams && (t5.query = A(t5.query.toString().replaceAll("+", " ")));
    const r3 = tt(e3), s4 = Z(e3);
    s4 || r3 || (e3 = K(e3));
    const a6 = {
      url: e3,
      requestOptions: __spreadValues({}, t5)
    }, n4 = (e4) => ({
      data: e4,
      getAllHeaders: H2,
      getHeader: H2,
      httpStatus: 200,
      requestOptions: a6.requestOptions,
      url: a6.url
    }), i3 = D(e3, A2.internalInterceptors);
    if (i3) {
      const e4 = yield G2(i3, a6);
      if (null != e4) return n4(e4);
    }
    let h2 = D(e3);
    if (h2) {
      const e4 = yield G2(h2, a6);
      if (null != e4) return n4(e4);
      h2.after || h2.error || (h2 = null);
    }
    if (e3 = a6.url, "image" === (t5 = a6.requestOptions).responseType && (has("host-webworker") || has("host-node"))) throw N2("request:invalid-parameters", new Error("responseType 'image' is not supported in Web Workers or Node environment"), a6);
    if ("head" === t5.method) {
      if (t5.body) throw N2("request:invalid-parameters", new Error("body parameter cannot be set when method is 'head'"), a6);
      if (r3 || s4) throw N2("request:invalid-parameters", new Error("data and blob URLs are not supported for method 'head'"), a6);
    }
    if (yield B2(), j2) return j2.execute(e3, t5);
    const m5 = new AbortController(), f3 = m(t5, () => m5.abort()), y2 = {
      controller: m5,
      credential: void 0,
      credentialToken: void 0,
      fetchOptions: void 0,
      hasToken: false,
      interceptor: h2,
      params: a6,
      redoRequest: false,
      useIdentity: A2.useIdentity,
      useProxy: false,
      useSSL: false,
      withCredentials: false
    }, w2 = yield Q2(y2).finally(() => f3?.remove());
    return h2?.after?.(w2), w2;
  });
}
var j2;
var A2 = s.request;
var P2 = "FormData" in globalThis;
var _2 = /* @__PURE__ */ new Set([499, 498, 403, 401]);
var D2 = /* @__PURE__ */ new Set(["COM_0056", "COM_0057", "SB_0008"]);
var F2 = [/\/arcgis\/tokens/i, /\/sharing(\/rest)?\/generatetoken/i, /\/rest\/info/i];
var H2 = () => null;
var I2 = Symbol();
function R2(e3) {
  const t5 = X(e3);
  t5 && !U2._corsServers.includes(t5) && U2._corsServers.push(t5);
}
function M2(e3) {
  const t5 = X(e3);
  return !t5 || t5.endsWith(".arcgis.com") || U2._corsServers.includes(t5) || M(t5);
}
function N2(e3, t5, o, i3) {
  let l3 = "Error";
  const u3 = {
    url: o.url,
    requestOptions: o.requestOptions,
    getAllHeaders: H2,
    getHeader: H2,
    ssl: false
  };
  if (t5 instanceof s2) return t5.details ? (t5.details = a(t5.details), t5.details.url = o.url, t5.details.requestOptions = o.requestOptions) : t5.details = u3, t5;
  if (t5) {
    const e4 = i3 && (() => Array.from(i3.headers)), r3 = i3 && ((e5) => i3.headers.get(e5)), s4 = i3?.status, o2 = t5.message;
    o2 && (l3 = o2), e4 && r3 && (u3.getAllHeaders = e4, u3.getHeader = r3), u3.httpStatus = (null != t5.httpCode ? t5.httpCode : t5.code) || s4 || 0, u3.subCode = t5.subcode, u3.messageCode = t5.messageCode, "string" == typeof t5.details ? u3.messages = [t5.details] : u3.messages = t5.details, u3.raw = I2 in t5 ? t5[I2] : t5;
  }
  return b(t5) ? u() : new s2(e3, l3, u3);
}
function B2() {
  return __async(this, null, function* () {
    has("host-webworker") && !j2 && (j2 = yield import("./request-LN4TKCCY.js"));
  });
}
function $2() {
  return __async(this, null, function* () {
    t3 || (yield import("./IdentityManager-CF4J32TR.js"));
  });
}
function z2(r3) {
  return __async(this, null, function* () {
    const s4 = r3.params.url, o = r3.params.requestOptions, a6 = r3.controller.signal, n4 = o.body;
    let l3 = null, u3 = null;
    if (P2 && "HTMLFormElement" in globalThis && (n4 instanceof FormData ? l3 = n4 : n4 instanceof HTMLFormElement && (l3 = new FormData(n4))), "string" == typeof n4 && (u3 = n4), r3.fetchOptions = {
      cache: o.cacheBust ? "no-cache" : "default",
      credentials: "same-origin",
      headers: o.headers || {},
      method: "head" === o.method ? "HEAD" : "GET",
      mode: "cors",
      priority: A2.priority,
      redirect: "follow",
      signal: a6
    }, (l3 || u3) && (r3.fetchOptions.body = l3 || u3), "anonymous" === o.authMode && (r3.useIdentity = false), r3.hasToken = !!(/token=/i.test(s4) || o.query?.token || l3?.get("token")), !r3.hasToken && s.apiKey && c4(s4) && (o.query || (o.query = {}), o.query.token = s.apiKey, r3.hasToken = true), r3.useIdentity && !r3.hasToken && !r3.credentialToken && !K2(s4) && !c(a6)) {
      let e3;
      "immediate" === o.authMode ? (yield $2(), e3 = yield t3.getCredential(s4, {
        signal: a6
      }), r3.credential = e3) : "no-prompt" === o.authMode ? (yield $2(), e3 = yield t3.getCredential(s4, {
        prompt: false,
        signal: a6
      }).catch(() => {
      }), r3.credential = e3) : t3 && (e3 = t3.findCredential(s4)), e3 && (r3.credentialToken = e3.token, r3.useSSL = !!e3.ssl);
    }
  });
}
function K2(e3) {
  return F2.some((t5) => t5.test(e3));
}
function W2(e3) {
  return __async(this, null, function* () {
    let r3 = e3.params.url;
    const s4 = e3.params.requestOptions, o = e3.fetchOptions ?? {}, a6 = Z(r3) || tt(r3), i3 = s4.responseType || "json", l3 = a6 ? 0 : null != s4.timeout ? s4.timeout : A2.timeout;
    let d3 = false;
    if (!a6) {
      e3.useSSL && (r3 = $t(r3));
      let a7 = __spreadValues({}, s4.query);
      e3.credentialToken && (a7.token = e3.credentialToken);
      let n4 = v(a7);
      has("esri-url-encodes-apostrophe") && (n4 = n4.replaceAll("'", "%27"));
      const i4 = r3.length + 1 + n4.length;
      let l4;
      d3 = "delete" === s4.method || "post" === s4.method || "put" === s4.method || !!s4.body || i4 > A2.maxUrlLength;
      const u3 = s4.useProxy || !!T(r3);
      if (u3) {
        const e4 = P(r3);
        l4 = e4.path, !d3 && l4.length + 1 + i4 > A2.maxUrlLength && (d3 = true), e4.query && (a7 = __spreadValues(__spreadValues({}, e4.query), a7));
      }
      if ("HEAD" === o.method && (d3 || u3)) {
        if (d3) {
          if (i4 > A2.maxUrlLength) throw N2("request:invalid-parameters", new Error("URL exceeds maximum length"), e3.params);
          throw N2("request:invalid-parameters", new Error("cannot use POST request when method is 'head'"), e3.params);
        }
        if (u3) throw N2("request:invalid-parameters", new Error("cannot use proxy when method is 'head'"), e3.params);
      }
      if (d3 ? (o.method = "delete" === s4.method ? "DELETE" : "put" === s4.method ? "PUT" : "POST", s4.body ? r3 = Et(r3, a7) : (o.body = v(a7), o.headers || (o.headers = {}), o.headers["Content-Type"] = "application/x-www-form-urlencoded")) : r3 = Et(r3, a7), u3 && (e3.useProxy = true, r3 = `${l4}?${r3}`), a7.token && P2 && o.body instanceof FormData && !a3(r3) && o.body.set("token", a7.token), s4.hasOwnProperty("withCredentials")) e3.withCredentials = s4.withCredentials;
      else if (!F(r3, C())) {
        if (M(r3)) e3.withCredentials = true;
        else if (t3) {
          const s5 = t3.findServerInfo(r3);
          s5?.webTierAuth && (e3.withCredentials = true);
        }
      }
      e3.withCredentials && (o.credentials = "include", d2(r3) && (yield f2(d3 ? Et(r3, a7) : r3)));
    }
    let p2, O3, v2 = 0, E2 = false;
    l3 > 0 && (v2 = setTimeout(() => {
      E2 = true, e3.controller.abort();
    }, l3));
    try {
      if ("native-request-init" === s4.responseType) O3 = o, O3.url = r3;
      else if ("image" !== s4.responseType || "default" !== o.cache || "GET" !== o.method || d3 || J(s4.headers) || !a6 && !e3.useProxy && A2.proxyUrl && !M2(r3)) {
        if (U2._beforeFetch && (yield U2._beforeFetch(r3, o)), p2 = yield fetch(r3, o), U2._afterFetch && (yield U2._afterFetch(p2)), e3.useProxy || R2(r3), "native" === s4.responseType) O3 = p2;
        else if ("HEAD" !== o.method) if (p2.ok) {
          switch (i3) {
            case "array-buffer":
              O3 = yield p2.arrayBuffer();
              break;
            case "blob":
            case "image":
              O3 = yield p2.blob();
              break;
            default:
              O3 = yield p2.text();
          }
          if (v2 && (clearTimeout(v2), v2 = 0), "json" === i3 || "xml" === i3 || "document" === i3) if (O3) switch (i3) {
            case "json":
              O3 = JSON.parse(O3);
              break;
            case "xml":
              O3 = X2(O3, "application/xml");
              break;
            case "document":
              O3 = X2(O3, "text/html");
          }
          else O3 = null;
          if (O3) {
            if ("array-buffer" === i3 || "blob" === i3) {
              const e4 = p2.headers.get("Content-Type");
              if (e4 && /application\/json|text\/plain/i.test(e4) && O3["blob" === i3 ? "size" : "byteLength"] <= 750) try {
                const e5 = yield new Response(O3).json();
                e5.error && (O3 = e5);
              } catch {
              }
            }
            "image" === i3 && O3 instanceof Blob && (O3 = yield Y2(URL.createObjectURL(O3), e3, true));
          }
        } else {
          O3 = yield p2.text();
          try {
            O3 = JSON.parse(O3);
          } catch {
          }
        }
      } else O3 = yield Y2(r3, e3);
    } catch (j3) {
      if ("AbortError" === j3.name) {
        if (E2) throw u2();
        throw u("Request canceled");
      }
      if (!(!p2 && j3 instanceof TypeError && A2.proxyUrl) || s4.body || "delete" === s4.method || "head" === s4.method || "post" === s4.method || "put" === s4.method || e3.useProxy || M2(r3)) throw j3;
      e3.redoRequest = true, H({
        proxyUrl: A2.proxyUrl,
        urlPrefix: X(r3) ?? ""
      });
    } finally {
      v2 && clearTimeout(v2);
    }
    return [p2, O3];
  });
}
function G2(e3, t5) {
  return __async(this, null, function* () {
    if (null != e3.responseData) return e3.responseData;
    if (e3.headers && (t5.requestOptions.headers = __spreadValues(__spreadValues({}, t5.requestOptions.headers), e3.headers)), e3.query && (t5.requestOptions.query = __spreadValues(__spreadValues({}, t5.requestOptions.query), e3.query)), e3.before) {
      let o, a6;
      try {
        a6 = yield e3.before(t5);
      } catch (s4) {
        o = N2("request:interceptor", s4, t5);
      }
      if ((a6 instanceof Error || a6 instanceof s2) && (o = N2("request:interceptor", a6, t5)), o) throw e3.error && e3.error(o), o;
      return a6;
    }
  });
}
function J(e3) {
  if (e3) {
    for (const t5 of Object.getOwnPropertyNames(e3)) if (e3[t5]) return true;
  }
  return false;
}
function X2(e3, t5) {
  let r3;
  try {
    r3 = new DOMParser().parseFromString(e3, t5);
  } catch {
  }
  if (!r3 || r3.getElementsByTagName("parsererror").length) throw new SyntaxError("XML Parse error");
  return r3;
}
function Q2(e3) {
  return __async(this, null, function* () {
    let r3, s4;
    yield z2(e3);
    try {
      do {
        [r3, s4] = yield W2(e3);
      } while (!(yield V2(e3, r3, s4)));
    } catch (n4) {
      const t5 = N2("request:server", n4, e3.params, r3);
      throw t5.details.ssl = e3.useSSL, e3.interceptor?.error && e3.interceptor.error(t5), t5;
    }
    const o = e3.params.url;
    if (s4 && /\/sharing\/rest\/(accounts|portals)\/self/i.test(o)) {
      if (!e3.hasToken && !e3.credentialToken && s4.user?.username && !M(o)) {
        const e4 = X(o, true);
        e4 && A2.trustedServers.push(e4);
      }
      Array.isArray(s4.authorizedCrossOriginNoCorsDomains) && l2(s4.authorizedCrossOriginNoCorsDomains);
    }
    const a6 = e3.credential;
    if (a6 && t3) {
      const e4 = t3.findServerInfo(a6.server);
      let r4 = e4?.owningSystemUrl;
      if (r4) {
        r4 = r4.replace(/\/?$/, "/sharing");
        const e5 = t3.findCredential(r4, a6.userId);
        e5 && -1 === t3._getIdenticalSvcIdx(r4, e5) && e5.resources.unshift(r4);
      }
    }
    return {
      data: s4,
      getAllHeaders: r3 ? () => Array.from(r3.headers) : H2,
      getHeader: r3 ? (e4) => r3.headers.get(e4) : H2,
      httpStatus: r3?.status ?? 200,
      requestOptions: e3.params.requestOptions,
      ssl: e3.useSSL,
      url: e3.params.url
    };
  });
}
function V2(e3, r3, s4) {
  return __async(this, null, function* () {
    if (e3.redoRequest) return e3.redoRequest = false, false;
    const o = e3.params.requestOptions;
    if (!r3 || "native" === o.responseType || "native-request-init" === o.responseType) return true;
    let a6, n4;
    if (s4 && (s4.error && "object" == typeof s4.error ? a6 = s4.error : "error" === s4.status && Array.isArray(s4.messages) && (a6 = __spreadValues({}, s4), a6[I2] = s4, a6.details = s4.messages)), !a6 && !r3.ok) throw a6 = new Error(`Unable to load ${r3.url} status: ${r3.status}`), a6[I2] = s4, a6;
    let i3, l3 = null;
    a6 && (n4 = Number(a6.code), l3 = a6.hasOwnProperty("subcode") ? Number(a6.subcode) : null, i3 = a6.messageCode, i3 = i3?.toUpperCase());
    const u3 = o.authMode;
    if (403 === n4 && (4 === l3 || a6.message?.toLowerCase().includes("ssl") && !a6.message.toLowerCase().includes("permission"))) {
      if (!e3.useSSL) return e3.useSSL = true, false;
    } else if (!e3.hasToken && e3.useIdentity && ("no-prompt" !== u3 || 498 === n4) && void 0 !== n4 && _2.has(n4) && !K2(e3.params.url) && (403 !== n4 || (!i3 || !D2.has(i3)) && (null == l3 || 2 === l3 && e3.credentialToken))) {
      yield $2();
      try {
        const r4 = yield t3.getCredential(e3.params.url, {
          error: N2("request:server", a6, e3.params),
          prompt: "no-prompt" !== u3,
          signal: e3.controller.signal,
          token: e3.credentialToken
        });
        return e3.credential = r4, e3.credentialToken = r4.token, e3.useSSL = e3.useSSL || r4.ssl, false;
      } catch (c6) {
        if ("no-prompt" === u3) return e3.credential = void 0, e3.credentialToken = void 0, false;
        a6 = c6;
      }
    }
    if (a6) throw a6;
    return true;
  });
}
function Y2(e3, t5, r3 = false) {
  const s4 = t5.controller.signal, o = new Image();
  return t5.withCredentials ? o.crossOrigin = "use-credentials" : o.crossOrigin = "anonymous", o.alt = "", o.fetchPriority = A2.priority, o.src = e3, i2(o, e3, r3, s4);
}
U2._corsServers = ["https://server.arcgisonline.com", "https://services.arcgisonline.com"], U2._beforeFetch = void 0, U2._afterFetch = void 0;

export {
  t,
  s3 as s,
  a3 as a,
  r,
  t2,
  x,
  C,
  q,
  I,
  A,
  v,
  S,
  T,
  W,
  N,
  D,
  F,
  _,
  G,
  K,
  V,
  X,
  Y,
  Z,
  tt,
  nt,
  et,
  ot,
  st,
  it,
  ut,
  pt,
  dt,
  $t,
  Rt,
  bt,
  Ct,
  qt,
  At,
  Pt,
  St,
  kt,
  Et,
  Ht,
  Tt,
  Wt,
  e2 as e,
  c3 as c,
  r2,
  t3,
  i,
  n3 as n,
  m3 as m,
  c4 as c2,
  i2,
  m4 as m2,
  U2 as U
};
//# sourceMappingURL=chunk-SYATLP3H.js.map
