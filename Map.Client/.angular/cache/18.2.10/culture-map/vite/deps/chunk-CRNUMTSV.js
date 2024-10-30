import {
  h
} from "./chunk-U2ZVAEKG.js";
import {
  I,
  St,
  V,
  X,
  _,
  qt,
  x
} from "./chunk-SYATLP3H.js";

// ../../../node_modules/@arcgis/core/layers/support/arcgisLayerUrl.js
var o = {
  mapserver: "MapServer",
  imageserver: "ImageServer",
  featureserver: "FeatureServer",
  knowledgegraphserver: "KnowledgeGraphServer",
  sceneserver: "SceneServer",
  streamserver: "StreamServer",
  vectortileserver: "VectorTileServer",
  "3dtilesserver": "3DTilesServer",
  videoserver: "VideoServer"
};
var a = Object.values(o);
var c = new RegExp(`^((?:https?:)?\\/\\/\\S+?\\/rest\\/services\\/(.+?)\\/(${a.join("|")}))(?:\\/(?:layers\\/)?(\\d+))?`, "i");
var v = new RegExp(`^((?:https?:)?\\/\\/\\S+?\\/([^/\\n]+)\\/(${a.join("|")}))(?:\\/(?:layers\\/)?(\\d+))?`, "i");
var f = /(.*?)\/(?:layers\/)?(\d+)\/?$/i;
function p(e) {
  return c.test(e);
}
function d(r) {
  if (null == r) return null;
  const t = I(r), s = t?.path.match(c) || t?.path.match(v);
  if (!s) return null;
  const [, n, l, i, u] = s, a2 = l.indexOf("/");
  return {
    title: m(-1 !== a2 ? l.slice(a2 + 1) : l),
    serverType: o[i.toLowerCase()],
    sublayer: null != u && "" !== u ? parseInt(u, 10) : null,
    url: {
      path: n
    }
  };
}
function h2(r) {
  const t = I(r).path.match(f);
  return t ? {
    serviceUrl: t[1],
    sublayerId: Number(t[2])
  } : null;
}
function m(e) {
  return (e = e.replaceAll(/\s*[/_]+\s*/g, " "))[0].toUpperCase() + e.slice(1);
}
function w(e, r) {
  const t = [];
  if (e) {
    const r2 = d(e);
    null != r2 && r2.title && t.push(r2.title);
  }
  if (r) {
    const e2 = m(r);
    t.push(e2);
  }
  if (2 === t.length) {
    if (t[0].toLowerCase().includes(t[1].toLowerCase())) return t[0];
    if (t[1].toLowerCase().includes(t[0].toLowerCase())) return t[1];
  }
  return t.join(" - ");
}
function g(e) {
  let t = X(e, true);
  return !!t && (t = t.toLowerCase(), t.endsWith(".arcgis.com") && (t.startsWith("services") || t.startsWith("tiles") || t.startsWith("features")));
}
function y(e, r) {
  return e ? qt(St(e, r)) : e;
}
function S(r) {
  let {
    url: n
  } = r;
  if (!n) return {
    url: n
  };
  n = St(n, r.logger);
  const l = I(n), i = d(l.path);
  let u;
  if (null != i) null != i.sublayer && null == r.layer.layerId && (u = i.sublayer), n = i.url.path;
  else if (r.nonStandardUrlAllowed) {
    const e = h2(l.path);
    null != e && (n = e.serviceUrl, u = e.sublayerId);
  }
  return {
    url: qt(n),
    layerId: u
  };
}
function C(e, r, t, s, l) {
  h(r, s, "url", l), s.url && null != e.layerId && (s.url = V(s.url, t, e.layerId.toString()));
}
function b(e) {
  if (!e) return false;
  const r = e.toLowerCase(), t = r.includes("/services/"), s = r.includes("/mapserver/wmsserver"), n = r.includes("/imageserver/wmsserver"), l = r.includes("/wmsserver");
  return t && (s || n || l);
}
function I2(e) {
  if (!e) return false;
  const r = new x(_(e)), t = r.authority?.toLowerCase();
  return "server.arcgisonline.com" === t || "services.arcgisonline.com" === t;
}

export {
  p,
  d,
  h2 as h,
  m,
  w,
  g,
  y,
  S,
  C,
  b,
  I2 as I
};
//# sourceMappingURL=chunk-CRNUMTSV.js.map
