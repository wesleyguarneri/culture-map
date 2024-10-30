import {
  t
} from "./chunk-YW5DYBTP.js";
import {
  n as n2
} from "./chunk-N6TJI25E.js";
import {
  Z
} from "./chunk-DI6VABAK.js";
import {
  Ee,
  F,
  T,
  be,
  he,
  l
} from "./chunk-DTUSTSEJ.js";
import {
  s
} from "./chunk-YVULORT6.js";
import {
  h,
  i,
  n2 as n,
  r
} from "./chunk-WYIDUUN2.js";
import {
  O
} from "./chunk-DXLOWWK7.js";
import {
  __spreadValues
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/widgets/FeatureForm/featureFormUtils.js
var y = (e) => "field" === e?.type;
var b = (e) => "group" === e?.type;
var g = (e) => "relationship" === e?.type;
var x = (e) => "text" === e.type;
var T2 = (e) => !b(e) && null != e.group;
var O2 = (e) => e.reduce((e2, t2) => b(t2) ? [...e2, ...t2.inputs] : [...e2, t2], []);
var j = (e) => O2(e).filter(y);
var N = (e) => O2(e).filter(g);
var h2 = (e) => null != e && (v(e, "combo-box") || v(e, "radio-buttons"));
var v = (e, t2) => null != e && e.input?.type === t2;
var F2 = (e) => null != e && (v(e, "text-box") || v(e, "text-area"));
var E = ({
  domain: e,
  inputType: t2 = "text-box",
  dataType: n3
}) => "number" === n3 && "text-box" === t2 && (!e || "coded-value" !== e.type);
var V = (e) => "items" in e;
function U(t2) {
  const {
    attributes: n3,
    fieldsIndex: r2,
    label: i2,
    timeZone: s2
  } = t2;
  if (!n3 || "object" != typeof n3) return i2;
  const l2 = Object.keys(n3).filter((e) => i(i2, e)), u = l2.map((e) => n3[e]), a = l2.map((e) => r2.get(e)).filter(O);
  return Z2(i2, S({
    values: u,
    fields: a,
    timeZone: s2
  }));
}
var L = "expression/";
var _ = "expr/";
var A = "field/";
function I(e) {
  const [t2, n3] = e.split(L);
  return "" === t2 && n3 ? n3 : (n.getLogger("esri.widgets.FeatureForm/featureFormUtils").error("extractExpressionNameFromString:invalid-input", `The string ${e} is not a valid expression reference of the form '${L}/expressionName'`), "");
}
function R(e) {
  return `${L}${e}`;
}
function $(e) {
  return `${A}${e}`;
}
function D(e) {
  return e.startsWith(L);
}
function w(e) {
  return e.startsWith(_);
}
function S(e) {
  const {
    fields: t2,
    values: n3
  } = e, r2 = e.timeZone ?? void 0, o = t2.map((e2, t3) => {
    let o2 = n3[t3];
    if (e2.domain && "coded-value" === e2.domain.type) {
      const t4 = e2.domain.codedValues.find((e3) => e3.code === o2);
      t4?.name && (o2 = t4.name);
    }
    return (Z(e2) || be(e2)) && (o2 = T(e2, o2, __spreadValues({
      timeZone: r2
    }, F(e2)))), [e2.name, o2];
  });
  return Object.fromEntries(o);
}
function Z2(e, t2) {
  return r(r(e, (e2) => `{${e2.toLowerCase()}}`), Object.fromEntries(Object.entries(t2).map(([e2, t3]) => [e2.toLowerCase(), t3])));
}
var C = (e) => {
  const t2 = {
    typeFieldName: null,
    types: []
  };
  return e ? ("subtype-sublayer" === e.type ? (t2.typeFieldName = e.parent?.subtypeField, t2.types = e.parent?.subtypes ?? []) : "subtype-group" === e.type || "feature" === e.type && e.subtypes?.length ? (t2.typeFieldName = e.subtypeField, t2.types = e.subtypes ?? []) : "types" in e && e.types && (t2.typeFieldName = e.typeIdField, t2.types = e.types.map(({
    id: e2,
    name: t3,
    domains: n3
  }) => ({
    code: e2,
    name: t3,
    domains: n3
  }))), null != t2.typeFieldName && (t2.typeFieldName = e.getField(t2.typeFieldName)?.name ?? t2.typeFieldName), t2) : t2;
};
var G = (e, t2) => {
  if (!e) return true;
  const {
    operations: n3
  } = e;
  switch (t2) {
    case "INSERT":
      return n3.supportsAdd;
    case "UPDATE":
    case "DELETE":
      return n3.supportsUpdate;
    default:
      return true;
  }
};
var M;
!function(e) {
  e.TOO_SHORT = "length-validation-error::too-short", e.TOO_LONG = "length-validation-error::too-long";
}(M || (M = {}));
var H = {
  type: "number"
};
var P = {
  type: "number",
  intlOptions: {
    notation: "scientific"
  }
};
function W(e) {
  return e >= 1e7 || e <= -1e7;
}
function k(e, {
  validationErrors: t2
}) {
  return null != e.max && null != e.min ? t2.outsideRange : null != e.max ? t2.outsideRangeMax : t2.outsideRangeMin;
}
var q = (e, t2, n3) => {
  const {
    dataType: r2,
    error: o,
    minLength: i2,
    value: s2,
    required: u
  } = e, m = t2?.validationErrors;
  if (!m || !o) return null;
  if (u && null === s2) return m.cannotBeNull;
  if (o === l.VALUE_OUT_OF_RANGE || o === he.OUT_OF_RANGE) {
    const {
      field: o2,
      range: i3
    } = e, s3 = {
      type: "date",
      intlOptions: __spreadValues({
        timeZone: "date" === o2.type && n3 ? n3 : void 0
      }, F(o2))
    }, l2 = k(i3, t2);
    return s(l2, i3, {
      format: {
        max: "date" === r2 ? s3 : null != i3.max && W(i3.max) ? P : H,
        min: "date" === r2 ? s3 : null != i3.min && W(i3.min) ? P : H
      }
    });
  }
  return o === l.INVALID_CODED_VALUE ? m.invalidCodedValue : o === Ee.INVALID_TYPE ? m.invalidType : o === M.TOO_SHORT ? s(m.tooShort, {
    min: i2
  }) : (M.TOO_LONG, null);
};
var B = (e) => {
  if (!e) return;
  const t2 = e.layer, n3 = t2 && "geometryType" in t2 ? t2.geometryType : void 0, r2 = e.geometry?.type;
  return "polyline" === r2 || "polyline" === n3 ? "line" : "mesh" === r2 || "mesh" === n3 || "multipatch" === n3 ? "cube" : "multipoint" === r2 || "multipoint" === n3 ? "point" : r2 || n3 || "table";
};
var Y = (e) => {
  const t2 = [];
  if (e.formTemplate) {
    const {
      description: n3,
      title: r2
    } = e.formTemplate;
    e.fields?.forEach((e2) => {
      const i2 = r2 && i(r2, e2.name), s2 = n3 && i(n3, e2.name);
      (i2 || s2) && t2.push(e2.name);
    });
  }
  return t2;
};
function z(e, t2) {
  const n3 = t2 ?? ("formTemplate" in e && e.formTemplate);
  if (n3) {
    return (n3.elements?.filter(t) ?? []).some(({
      fieldName: t3
    }) => !e.fieldsIndex.get(t3));
  }
  return false;
}
function J(e, t2) {
  return null == e || t2.onValue !== e && t2.offValue !== e;
}
function K(e, n3) {
  switch (n3.objectType) {
    case "any":
      return true;
    case "null":
      return null == e;
    case "code":
      return e === n3.codedValue?.code;
    case "range":
      return null != e && null != n3.minValue && null != n3.maxValue && +e >= n3.minValue && +e <= n3.maxValue;
    default:
      return n2(n3.objectType), false;
  }
}
function Q(e, t2, r2) {
  if (!e || !("subtypes" in e)) return false;
  const o = e.subtypes?.find((e2) => e2.code === r2);
  if (!o) return false;
  const i2 = e.subtypes?.find((e2) => e2.code === t2);
  return !h(o.defaultValues, i2?.defaultValues) && Object.values(o.defaultValues).some((e2) => null != e2);
}

export {
  y,
  b,
  g,
  x,
  T2 as T,
  O2 as O,
  j,
  N,
  h2 as h,
  v,
  F2 as F,
  E,
  V,
  U,
  I,
  R,
  $,
  D,
  w,
  S,
  C,
  G,
  M,
  q,
  B,
  Y,
  z,
  J,
  K,
  Q
};
//# sourceMappingURL=chunk-MLUSPV66.js.map
