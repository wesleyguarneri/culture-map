import {
  c,
  i,
  k,
  m,
  n
} from "./chunk-4KWLMXIA.js";
import {
  B,
  Ge,
  _2 as _,
  q
} from "./chunk-DTUSTSEJ.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/support/popupUtils.js
function p({
  displayField: t,
  editFieldsInfo: n2,
  fields: i2,
  objectIdField: o,
  title: r
}, s) {
  if (!i2) return null;
  const l = w({
    editFieldsInfo: n2,
    fields: i2,
    objectIdField: o
  }, s);
  if (!l.length) return null;
  const a = y({
    titleBase: r,
    fields: i2,
    displayField: t
  }), p2 = j();
  return new k({
    title: a,
    content: p2,
    fieldInfos: l
  });
}
var c2 = (e, t) => t.visibleFieldNames ? t.visibleFieldNames.has(e.name) : B(e, t);
function f(e, t) {
  const n2 = e;
  return t && (e = e.filter((e2) => !t.includes(e2.type))), e === n2 && (e = e.slice()), e.sort(d), e;
}
function d(e, t) {
  return "oid" === e.type ? -1 : "oid" === t.type ? 1 : v(e) ? -1 : v(t) ? 1 : (e.alias || e.name).toLocaleLowerCase().localeCompare((t.alias || t.name).toLocaleLowerCase());
}
function w(e, n2) {
  const i2 = n2?.visibleFieldNames;
  return f(e.fields ?? [], n2?.ignoreFieldTypes || I).map((n3) => new n({
    fieldName: n3.name,
    isEditable: q(n3, e),
    label: n3.alias,
    format: g(n3),
    visible: c2(n3, __spreadProps(__spreadValues({}, e), {
      visibleFieldNames: i2
    }))
  }));
}
function g(e) {
  switch (e.type) {
    case "small-integer":
    case "integer":
    case "single":
      return new m({
        digitSeparator: true,
        places: 0
      });
    case "double":
      return new m({
        digitSeparator: true,
        places: 2
      });
    case "string":
      return Ge(e.name) ? new m({
        digitSeparator: true,
        places: 0
      }) : void 0;
    default:
      return;
  }
}
function j() {
  return [new c(), new i()];
}
function y(e) {
  const t = _(e), {
    titleBase: n2
  } = e;
  return t ? `${n2}: {${t.trim()}}` : n2 ?? "";
}
function v(e) {
  if ("name" === (e.name && e.name.toLowerCase())) return true;
  const t = e.alias?.toLowerCase();
  return "name" === t;
}
var I = ["geometry", "blob", "raster", "guid", "xml"];

export {
  p
};
//# sourceMappingURL=chunk-S5EXT7FA.js.map
