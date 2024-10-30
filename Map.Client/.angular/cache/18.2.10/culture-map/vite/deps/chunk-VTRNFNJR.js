import {
  N,
  Z
} from "./chunk-DI6VABAK.js";
import {
  O
} from "./chunk-JM7HAEY6.js";
import {
  Ge,
  be,
  je
} from "./chunk-DTUSTSEJ.js";
import {
  i as i2
} from "./chunk-JILEJ6R2.js";
import {
  i,
  l
} from "./chunk-YVULORT6.js";
import {
  E,
  g,
  j
} from "./chunk-CVB43GGP.js";
import {
  n2 as n,
  r
} from "./chunk-WYIDUUN2.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/widgets/Feature/support/featureUtils.js
var y = "esri.widgets.Feature.support.featureUtils";
var m = () => n.getLogger(y);
var g2 = /href=(""|'')/gi;
var h = /(\{([^{\r\n]+)\})/g;
var b = /'/g;
var I = /^\s*expression\//i;
var T = /(\n)/gi;
var w = /[\u00A0-\u9999<>&]/gim;
var F = /href\s*=\s*(?:"([^"]+)"|'([^']+)')/gi;
var N2 = /^(?:mailto:|tel:)/;
var j2 = "relationships/";
var Z2 = E("short-date-short-time");
function L(e) {
  if (null != e) return (e.sourceLayer || e.layer) ?? void 0;
}
function E2(_0) {
  return __async(this, arguments, function* ({
    type: e,
    value: t,
    event: n2
  }) {
    try {
      return "function" == typeof t ? t(n2) : t;
    } catch (r2) {
      return void m().error("error", `An error occurred when calling the "${e}" function`, {
        error: r2,
        graphic: n2.graphic,
        value: t
      });
    }
  });
}
function v(e = "") {
  if (e) return !N2.test(e.trim().toLowerCase());
}
function x(e) {
  return !!e && I.test(e);
}
function A(e, t) {
  if (!t || !x(t) || !e) return;
  const n2 = t.replace(I, "").toLowerCase();
  return e.find(({
    name: e2
  }) => e2.toLowerCase() === n2);
}
function C(e, t) {
  const n2 = A(t, e?.fieldName);
  return n2 ? n2.title || null : e ? e.label || e.fieldName : null;
}
function M(e, t) {
  const n2 = t.get(e.toLowerCase());
  return `{${n2?.fieldName || e}}`;
}
function U(e) {
  return e.replaceAll(g2, "");
}
function q(e, t) {
  const n2 = $(t, e);
  return n2 ? n2.name : e;
}
function R(e, t) {
  return e && e.map((e2) => q(e2, t));
}
function $(e, t) {
  return e && "function" == typeof e.getField && t ? e.getField(t) ?? null : null;
}
function k(e) {
  return `${e}`.trim();
}
function D({
  attributes: e,
  globalAttributes: t,
  layer: n2,
  text: r2,
  expressionAttributes: i3,
  fieldInfoMap: o
}) {
  return r2 ? z({
    formattedAttributes: t,
    template: Q(r2, __spreadValues(__spreadValues(__spreadValues({}, t), i3), e), n2),
    fieldInfoMap: o
  }) : "";
}
function z({
  formattedAttributes: e,
  template: n2,
  fieldInfoMap: r2
}) {
  return k(U(r(r(n2, (e2) => M(e2, r2)), e)));
}
function O2(e, t, n2 = false) {
  const r2 = t[e];
  if ("string" == typeof r2) {
    const i3 = "%27", o = (n2 ? encodeURIComponent(r2) : r2).replaceAll(b, i3);
    t[e] = o;
  }
}
function G(e, t = false) {
  const n2 = __spreadValues({}, e);
  return Object.keys(n2).forEach((e2) => O2(e2, n2, t)), n2;
}
function S(e, n2, r2) {
  const i3 = (n2 = k(n2)) && "{" !== n2[0];
  return r(e, G(r2, i3 || false));
}
function P(e, t) {
  return e.replaceAll(h, (e2, n2, r2) => {
    const i3 = $(t, r2);
    return i3 ? `{${i3.name}}` : n2;
  });
}
function Q(e, t, n2) {
  const r2 = P(e, n2);
  return r2 ? r2.replaceAll(F, (e2, n3, r3) => S(e2, n3 || r3, t)) : r2;
}
function _(e, t) {
  if ("string" == typeof e && t && null == t.dateFormat && (null != t.places || null != t.digitSeparator)) {
    const t2 = Number(e);
    if (!isNaN(t2)) return t2;
  }
  return e;
}
function H(e) {
  return null != e && "object" == typeof e && "fieldsIndex" in e && "geometryType" in e && "getField" in e && "load" in e && "loaded" in e && "objectIdField" in e && "spatialReference" in e && "type" in e && ("feature" === e.type || "scene" === e.type || "sublayer" === e.type) && "when" in e;
}
function B(e) {
  return null != e && "object" == typeof e && "createQuery" in e && "queryFeatureCount" in e && "queryObjectIds" in e && "queryRelatedFeatures" in e && "queryRelatedFeaturesCount" in e && "relationships" in e;
}
function J(e) {
  return H(e) && B(e);
}
function K(e) {
  return !!e && "object" == typeof e && "sourceLayer" in e && J(e.sourceLayer);
}
function V(e, t) {
  const {
    fieldInfos: n2,
    fieldName: r2,
    preventPlacesFormatting: l2,
    layer: u,
    timeZone: s
  } = t, c = Y(n2, r2), d = $(u, r2);
  if (c && !Ge(r2)) {
    const t2 = d?.type, n3 = c.format?.dateFormat;
    if ("date" === t2 || "date-only" === t2 || "time-only" === t2 || "timestamp-offset" === t2 || n3) return N(e, {
      format: n3,
      fieldType: t2,
      timeZoneOptions: {
        layerTimeZone: u && "preferredTimeZone" in u ? u.preferredTimeZone : null,
        viewTimeZone: s,
        datesInUnknownTimezone: !(!u || !("datesInUnknownTimezone" in u)) && !!u.datesInUnknownTimezone
      }
    });
  }
  const p = c?.format;
  return "string" == typeof e && Ge(r2) && p ? W(e, p) : "string" == typeof (e = _(e, p)) || null == e || null == p ? ae(e) : l(e, l2 ? __spreadProps(__spreadValues({}, i(p)), {
    minimumFractionDigits: 0,
    maximumFractionDigits: 20
  }) : i(p));
}
function W(e, t) {
  return e = e.trim(), /\d{2}-\d{2}/.test(e) ? e : e.includes(",") ? X(e, ",", ", ", t) : e.includes(";") ? X(e, ";", "; ", t) : e.includes(" ") ? X(e, " ", " ", t) : l(Number(e), i(t));
}
function X(e, t, n2, r2) {
  return e.trim().split(t).map((e2) => l(Number(e2), i(r2))).join(n2);
}
function Y(e, t) {
  if (e?.length && t) return e.find((e2) => e2.fieldName?.toLowerCase() === t.toLowerCase());
}
function ee({
  fieldName: e,
  graphic: t,
  layer: n2
}) {
  if (de(e)) return null;
  if (!n2 || "function" != typeof n2.getFeatureType) return null;
  const {
    typeIdField: r2
  } = n2;
  if (!r2 || e !== r2) return null;
  const i3 = n2.getFeatureType(t);
  return i3 ? i3.name : null;
}
function te({
  fieldName: e,
  value: t,
  graphic: n2,
  layer: r2
}) {
  if (de(e)) return null;
  if (!r2 || "function" != typeof r2.getFieldDomain) return null;
  const i3 = n2 && r2.getFieldDomain(e, {
    feature: n2
  });
  return i3 && "coded-value" === i3.type ? i3.getName(t) : null;
}
function ne(e, t, n2, i3) {
  const {
    creatorField: o,
    creationDateField: a,
    editorField: l2,
    editDateField: u
  } = e;
  if (!t) return;
  const s = g(i3 && "preferredTimeZone" in i3 ? i3.preferredTimeZone : null, !(!i3 || !("datesInUnknownTimezone" in i3)) && !!i3.datesInUnknownTimezone, n2, Z2, "date"), f = __spreadValues(__spreadValues({}, Z2), s), c = t[u];
  if ("number" == typeof c) {
    const e2 = t[l2];
    return {
      type: "edit",
      date: j(c, f),
      user: e2
    };
  }
  const d = t[a];
  if ("number" == typeof d) {
    const e2 = t[o];
    return {
      type: "create",
      date: j(d, f),
      user: e2
    };
  }
  return null;
}
function re(e, t) {
  const n2 = /* @__PURE__ */ new Map();
  if (!e) return n2;
  for (const r2 of e) {
    if (!r2.fieldName) continue;
    const e2 = q(r2.fieldName, t);
    r2.fieldName = e2, n2.set(e2.toLowerCase(), r2);
  }
  return n2;
}
function ie(e) {
  const t = [];
  if (!e) return t;
  const {
    fieldInfos: n2,
    content: r2
  } = e;
  return n2 && t.push(...n2), r2 && Array.isArray(r2) ? (r2.forEach((e2) => {
    if ("fields" === e2.type) {
      const n3 = e2?.fieldInfos;
      n3 && t.push(...n3);
    }
  }), t) : t;
}
function oe(e) {
  return e.replaceAll(w, (e2) => `&#${e2.charCodeAt(0)};`);
}
function ae(e) {
  return "string" == typeof e ? e.replaceAll(T, '<br class="esri-text-new-line" />') : e;
}
function le(e) {
  const {
    value: t,
    fieldName: n2,
    fieldInfos: r2,
    fieldInfoMap: i3,
    layer: o,
    graphic: a,
    timeZone: l2
  } = e;
  if (null == t) return "";
  const s = te({
    fieldName: n2,
    value: t,
    graphic: a,
    layer: o
  });
  if (s) return s;
  const d = ee({
    fieldName: n2,
    graphic: a,
    layer: o
  });
  if (d) return d;
  if (i3.get(n2.toLowerCase())) return V(t, {
    fieldInfos: r2 || Array.from(i3.values()),
    fieldName: n2,
    layer: o,
    timeZone: l2
  });
  const p = o?.fieldsIndex?.get(n2);
  return p && (Z(p) || be(p)) ? N(t, {
    fieldType: p.type,
    timeZoneOptions: {
      layerTimeZone: o && "preferredTimeZone" in o ? o.preferredTimeZone : null,
      viewTimeZone: l2,
      datesInUnknownTimezone: !(!o || !("datesInUnknownTimezone" in o)) && !!o.datesInUnknownTimezone
    }
  }) : ae(t);
}
function ue({
  fieldInfos: e,
  attributes: t,
  layer: n2,
  graphic: r2,
  fieldInfoMap: i3,
  relatedInfos: o,
  timeZone: a
}) {
  const l2 = {};
  return o?.forEach((t2) => me({
    attributes: l2,
    relatedInfo: t2,
    fieldInfoMap: i3,
    fieldInfos: e,
    layer: n2,
    timeZone: a
  })), t && Object.keys(t).forEach((o2) => {
    const u = t[o2];
    l2[o2] = le({
      fieldName: o2,
      fieldInfos: e,
      fieldInfoMap: i3,
      layer: n2,
      value: u,
      graphic: r2,
      timeZone: a
    });
  }), l2;
}
function se(e, t) {
  return __async(this, null, function* () {
    const {
      layer: n2,
      graphic: r2,
      outFields: i3,
      objectIds: o,
      returnGeometry: a,
      spatialReference: l2
    } = e, u = o[0];
    if ("number" != typeof u && "string" != typeof u) {
      const e2 = "Could not query required fields for the specified feature. The feature's ID is invalid.", t2 = {
        layer: n2,
        graphic: r2,
        objectId: u,
        requiredFields: i3
      };
      return m().warn(e2, t2), null;
    }
    if (!O(n2)?.operations?.supportsQuery) {
      const e2 = "The specified layer cannot be queried. The following fields will not be available.", t2 = {
        layer: n2,
        graphic: r2,
        requiredFields: i3,
        returnGeometry: a
      };
      return m().warn(e2, t2), null;
    }
    const f = n2.createQuery();
    f.objectIds = o, f.outFields = i3?.length ? i3 : [n2.objectIdField], f.returnGeometry = !!a, f.returnZ = !!a, f.returnM = !!a, f.outSpatialReference = l2;
    return (yield n2.queryFeatures(f, t)).features[0];
  });
}
function fe(e) {
  return __async(this, null, function* () {
    if (!e.expressionInfos?.length) return false;
    const t = yield i2(), {
      arcadeUtils: {
        hasGeometryFunctions: n2
      }
    } = t;
    return n2(e);
  });
}
function ce(_0, _1) {
  return __async(this, arguments, function* ({
    graphic: e,
    popupTemplate: t,
    layer: n2,
    spatialReference: r2
  }, i3) {
    if (!n2 || !t) return;
    if ("function" == typeof n2.load && (yield n2.load(i3)), !e.attributes) return;
    const o = n2.objectIdField, a = e.attributes[o];
    if (null == a) return;
    const u = [a], s = yield t.getRequiredFields(n2.fieldsIndex), f = je(s, e), c = f ? [] : s.includes(o) ? s : [...s, o], d = t.returnGeometry || (yield fe(t));
    if (f && !d) return;
    const p = yield se({
      layer: n2,
      graphic: e,
      outFields: c,
      objectIds: u,
      returnGeometry: d,
      spatialReference: r2
    }, i3);
    p && (p.geometry && (e.geometry = p.geometry), p.attributes && (e.attributes = __spreadValues(__spreadValues({}, e.attributes), p.attributes)));
  });
}
function de(e = "") {
  return !!e && e.includes(j2);
}
function pe(e) {
  return e ? `${j2}${e.layerId}/${e.fieldName}` : "";
}
function ye({
  attributes: e,
  graphic: t,
  relatedInfo: n2,
  fieldInfos: r2,
  fieldInfoMap: i3,
  layer: o,
  timeZone: a
}) {
  e && t && n2 && Object.keys(t.attributes).forEach((l2) => {
    const u = pe({
      layerId: n2.relation.id.toString(),
      fieldName: l2
    }), s = t.attributes[l2];
    e[u] = le({
      fieldName: u,
      fieldInfos: r2,
      fieldInfoMap: i3,
      layer: o,
      value: s,
      graphic: t,
      timeZone: a
    });
  });
}
function me({
  attributes: e,
  relatedInfo: t,
  fieldInfoMap: n2,
  fieldInfos: r2,
  layer: i3,
  timeZone: o
}) {
  e && t && (t.relatedFeatures?.forEach((a) => ye({
    attributes: e,
    graphic: a,
    relatedInfo: t,
    fieldInfoMap: n2,
    fieldInfos: r2,
    layer: i3,
    timeZone: o
  })), t.relatedStatsFeatures?.forEach((a) => ye({
    attributes: e,
    graphic: a,
    relatedInfo: t,
    fieldInfoMap: n2,
    fieldInfos: r2,
    layer: i3,
    timeZone: o
  })));
}
var ge = (e) => {
  if (!e) return false;
  const t = e.toUpperCase();
  return t.includes("CURRENT_TIMESTAMP") || t.includes("CURRENT_DATE") || t.includes("CURRENT_TIME");
};
var he = ({
  layer: e,
  method: t,
  query: n2,
  definitionExpression: r2
}) => {
  if (!e.capabilities?.query?.supportsCacheHint || "attachments" === t) return;
  const i3 = null != n2.where ? n2.where : null, o = null != n2.geometry ? n2.geometry : null;
  ge(r2) || ge(i3) || "extent" === o?.type || "tile" === n2.resultType || (n2.cacheHint = true);
};
var be2 = ({
  query: e,
  layer: t,
  method: n2
}) => {
  he({
    layer: t,
    method: n2,
    query: e,
    definitionExpression: `${t.definitionExpression} ${t.serviceDefinitionExpression ?? ""}`
  });
};
var Ie = ({
  queryPayload: e,
  layer: t,
  method: n2
}) => {
  he({
    layer: t,
    method: n2,
    query: e,
    definitionExpression: `${t.definitionExpression} ${t.serviceDefinitionExpression ?? ""}`
  });
};
function Te(e, t, n2) {
  return e && t && n2 ? "sublayer" === t.type ? Fe({
    layers: t.layer?.sublayers,
    map: e,
    relatedLayer: t,
    relationship: n2
  }) || Fe({
    layers: t.layer?.subtables,
    map: e,
    relatedLayer: t,
    relationship: n2
  }) : Fe({
    layers: e.allLayers,
    map: e,
    relatedLayer: t,
    relationship: n2
  }) || Fe({
    layers: e.allTables,
    map: e,
    relatedLayer: t,
    relationship: n2
  }) : null;
}
function we(e, t) {
  return e?.allTables.find((e2) => "feature" === e2.type && e2.layerId === t.id && e2.url === t.layer?.url);
}
function Fe({
  map: e,
  relationship: t,
  relationship: {
    relatedTableId: n2
  },
  relatedLayer: r2,
  layers: i3
}) {
  if (!i3) return null;
  for (const o of i3) {
    if ("map-image" === o.type) {
      const n3 = Fe({
        layers: o.sublayers,
        map: e,
        relatedLayer: r2,
        relationship: t
      }) || Fe({
        layers: o.subtables,
        map: e,
        relatedLayer: r2,
        relationship: t
      });
      if (n3) return n3;
      continue;
    }
    if (!J(o)) continue;
    if ("sublayer" === r2.type) {
      if (o !== r2 && o.id === n2) return o.isTable ? we(e, o) : o;
      continue;
    }
    const i4 = "scene" === r2.type && r2.associatedLayer ? r2.associatedLayer.url : r2.url;
    if (!i4) return null;
    if ("sublayer" !== o.type) {
      if (o !== r2 && o.url === i4 && o.layerId === n2) return o;
    } else if (o !== r2 && o.layer?.url === i4 && o.id === n2) return o.isTable ? we(e, o) : o;
  }
  return null;
}
function Ne(e) {
  const t = e.getObjectId();
  return null != t ? `oid:${t}` : `uid:${e.uid}`;
}

export {
  L,
  E2 as E,
  v,
  x,
  C,
  q,
  R,
  D,
  z,
  P,
  J,
  K,
  Y,
  ne,
  re,
  ie,
  oe,
  ae,
  ue,
  se,
  ce,
  de,
  be2 as be,
  Ie,
  Te,
  Ne
};
//# sourceMappingURL=chunk-VTRNFNJR.js.map
