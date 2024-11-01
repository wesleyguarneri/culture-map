import {
  C,
  c
} from "./chunk-7XMEZQ34.js";
import {
  K,
  Rt,
  U
} from "./chunk-SYATLP3H.js";
import {
  a
} from "./chunk-HJY2YILU.js";
import {
  s2 as s
} from "./chunk-WYIDUUN2.js";
import {
  has
} from "./chunk-DXLOWWK7.js";
import {
  __async,
  __spreadValues
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/support/featureFlags.js
var e = () => !!has("enable-feature:force-wosr");
var a2 = () => !!has("enable-feature:direct-3d-object-feature-layer-display");
var t = () => has.add("enable-feature:direct-3d-object-feature-layer-display", true, true, true);
var i = () => has.add("enable-feature:direct-3d-object-feature-layer-display", false, true, true);
var r = () => !!has("enable-i3s-patching");
var d = () => has.add("enable-i3s-patching", true, true, true);
var c2 = () => has.add("enable-i3s-patching", false, true, true);
var n = () => !!has("enable-feature:SceneLayer-editing");
var l = (e2 = "i3s-patching") => {
  switch (c2(), i(), has.add("enable-feature:SceneLayer-editing", true, true, true), e2) {
    case "feature-layer-view":
      t();
      break;
    case "i3s-patching":
      d();
  }
};
l("i3s-patching");

// ../../../node_modules/@arcgis/core/symbols/support/styleUtils.js
var u = {};
function f(e2, t2) {
  return __async(this, null, function* () {
    try {
      return {
        data: (yield b(e2, t2)).data,
        baseUrl: Rt(e2),
        styleUrl: e2
      };
    } catch (o) {
      return a(o), null;
    }
  });
}
function i2(e2, t2, r2) {
  const o = null != t2.portal ? t2.portal : C.getDefault();
  let s2;
  const l2 = `${o.url} - ${o.user?.username} - ${e2}`;
  return u[l2] || (u[l2] = m(e2, o, r2).then((e3) => (s2 = e3, e3.fetchData())).then((t3) => ({
    data: t3,
    baseUrl: s2.itemUrl ?? "",
    styleName: e2
  }))), u[l2];
}
function m(e2, r2, o) {
  return r2.load(o).then(() => {
    const t2 = new c({
      disableExtraQuery: true,
      query: `owner:${h} AND type:${j} AND typekeywords:"${e2}"`
    });
    return r2.queryItems(t2, o);
  }).then(({
    results: r3
  }) => {
    let s2 = null;
    const n2 = e2.toLowerCase();
    if (r3 && Array.isArray(r3)) for (const e3 of r3) {
      const t2 = e3.typeKeywords?.some((e4) => e4.toLowerCase() === n2);
      if (t2 && e3.type === j && e3.owner === h) {
        s2 = e3;
        break;
      }
    }
    if (!s2) throw new s("symbolstyleutils:style-not-found", `The style '${e2}' could not be found`, {
      styleName: e2
    });
    return s2.load(o);
  });
}
function y(e2, r2, o) {
  return null != e2?.styleUrl ? f(e2.styleUrl, o) : null != e2?.styleName ? i2(e2.styleName, r2, o) : Promise.reject(new s("symbolstyleutils:style-url-and-name-missing", "Either styleUrl or styleName is required to resolve a style"));
}
function p(e2) {
  return null === e2 || "CIMSymbolReference" === e2.type ? e2 : {
    type: "CIMSymbolReference",
    symbol: e2
  };
}
function d2(e2, t2, r2 = ["gltf"]) {
  if ("cimRef" === t2) return encodeURI(e2.cimRef);
  if (e2.formatInfos && !e()) for (const o of r2) {
    const t3 = e2.formatInfos.find((e3) => e3.type === o);
    if (t3) return t3.href;
  }
  return encodeURI(e2.webRef);
}
function b(t2, r2) {
  const s2 = __spreadValues({
    responseType: "json",
    query: {
      f: "json"
    }
  }, r2);
  return U(K(t2), s2);
}
var h = "esri_en";
var j = "Style";
var w = "https://cdn.arcgis.com/sharing/rest/content/items/220936cc6ed342c9937abd8f180e7d1e/resources/styles/cim/{SymbolName}.json?f=json";

export {
  a2 as a,
  r,
  n,
  y,
  p,
  d2 as d,
  b,
  w
};
//# sourceMappingURL=chunk-TNWXOQKO.js.map
