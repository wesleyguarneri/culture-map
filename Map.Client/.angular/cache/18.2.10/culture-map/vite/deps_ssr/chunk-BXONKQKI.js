import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  At,
  C,
  F,
  G,
  K,
  Tt,
  Y,
  _,
  r,
  t3 as t,
  tt
} from "./chunk-XLEC46FY.js";

// ../../../node_modules/@arcgis/core/chunks/persistableUrlUtils.js
function p(e, s) {
  const o = s?.url?.path;
  if (e && o && (e = _(e, o, {
    preserveProtocolRelative: true
  }), s.portalItem && s.readResourcePaths)) {
    const t2 = G(e, s.portalItem.itemUrl);
    null != t2 && v.test(t2) && s.readResourcePaths.push(s.portalItem.resourceFromPath(t2).path);
  }
  return (e = I(e, s?.portal)) && d.test(e) ? R(e) : e;
}
function m(e, l, a = y.YES) {
  if (null == (e = e && d.test(e) ? w(e) : e)) return e;
  !Y(e) && l?.blockedRelativeUrls && l.blockedRelativeUrls.push(e);
  let c = _(e);
  if (l) {
    const t2 = l.verifyItemRelativeUrls?.rootPath || l.url?.path;
    if (t2) {
      const s = I(t2, l.portal), o = I(c, l.portal);
      c = G(o, s, s);
      null != c && c !== o && c !== e && l.verifyItemRelativeUrls && l.verifyItemRelativeUrls.writtenUrls.push(c);
    }
  }
  return c = x(c, l?.portal), Y(c) && (c = K(c)), l?.resources && l?.portalItem && !Y(c) && !tt(c) && a === y.YES && l.resources.toKeep.push({
    resource: l.portalItem.resourceFromPath(c),
    compress: false
  }), c;
}
function f(e, t2, r2) {
  return p(e, r2);
}
function h(e, t2, r2, s) {
  const o = m(e, s);
  void 0 !== o && (t2[r2] = o);
}
var d = /\/items\/([^/]+)\/resources\/(.*)/;
var v = /^\.\/resources\//;
function U(e) {
  const t2 = e?.match(d) ?? null;
  return t2?.[1] ?? null;
}
function g(e) {
  const t2 = e?.match(d) ?? null;
  if (null == t2) return null;
  const r2 = t2[2], s = r2.lastIndexOf("/");
  if (-1 === s) {
    const {
      path: e2,
      extension: t3
    } = Tt(r2);
    return {
      prefix: null,
      filename: e2,
      extension: t3
    };
  }
  const {
    path: o,
    extension: n
  } = Tt(r2.slice(s + 1));
  return {
    prefix: r2.slice(0, s),
    filename: o,
    extension: n
  };
}
function x(e, t2) {
  return t2 && !t2.isPortal && t2.urlKey && t2.customBaseUrl ? At(e, `${t2.urlKey}.${t2.customBaseUrl}`, t2.portalHostname) : e;
}
function I(e, t2) {
  if (!t2 || t2.isPortal || !t2.urlKey || !t2.customBaseUrl) return e;
  const r2 = `${t2.urlKey}.${t2.customBaseUrl}`, s = C();
  return F(s, `${s.scheme}://${r2}`) ? At(e, t2.portalHostname, r2) : At(e, r2, t2.portalHostname);
}
function R(t2) {
  if (!t2) return t2 || null;
  let r2 = t2;
  return r2 && t && !t.findCredential(r2) && (r2 = r(r2), r2 = r2.replace(/^https?:\/\/www\.arcgis\.com/, "https://cdn.arcgis.com"), r2 = r2.replace(/^https?:\/\/devext\.arcgis\.com/, "https://cdndev.arcgis.com"), r2 = r2.replace(/^https?:\/\/qaext\.arcgis\.com/, "https://cdnqa.arcgis.com")), r2;
}
function w(t2) {
  if (!t2) return t2 || null;
  let r2 = t2;
  return r2 = r2.replace(/^https?:\/\/cdn\.arcgis\.com/, "https://www.arcgis.com"), r2 = r2.replace(/^https?:\/\/cdndev\.arcgis\.com/, "https://devext.arcgis.com"), r2 = r2.replace(/^https?:\/\/cdnqa\.arcgis\.com/, "https://qaext.arcgis.com"), r2 && t && !t.findCredential(r2) && (r2 = r(r2)), r2;
}
var y;
!function(e) {
  e[e.YES = 0] = "YES", e[e.NO = 1] = "NO";
}(y || (y = {}));
var P = Object.freeze(Object.defineProperty({
  __proto__: null,
  get MarkKeep() {
    return y;
  },
  ensureMainOnlineDomain: x,
  fromCDNUrl: w,
  fromJSON: p,
  itemIdFromResourceUrl: U,
  prefixAndFilenameFromResourceUrl: g,
  read: f,
  toCDNUrl: R,
  toJSON: m,
  write: h
}, Symbol.toStringTag, {
  value: "Module"
}));

export {
  p,
  m,
  f,
  h,
  U,
  g,
  x,
  R,
  y,
  P
};
//# sourceMappingURL=chunk-BXONKQKI.js.map
