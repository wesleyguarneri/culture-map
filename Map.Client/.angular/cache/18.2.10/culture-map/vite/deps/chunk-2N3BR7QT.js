import {
  I2 as I,
  j2 as j
} from "./chunk-DTUSTSEJ.js";
import {
  __async
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/views/layers/support/popupUtils.js
function n(_0) {
  return __async(this, arguments, function* (n2, p2 = n2.popupTemplate) {
    if (null == p2) return [];
    const u2 = yield p2.getRequiredFields(n2.fieldsIndex), {
      lastEditInfoEnabled: t
    } = p2, {
      objectIdField: d,
      typeIdField: s,
      globalIdField: i,
      relationships: a
    } = n2;
    if (u2.includes("*")) return ["*"];
    const o = t ? j(n2) : [], f = I(n2.fieldsIndex, [...u2, ...o]);
    return s && f.push(s), f && d && n2.fieldsIndex?.has(d) && !f.includes(d) && f.push(d), f && i && n2.fieldsIndex?.has(i) && !f.includes(i) && f.push(i), a && a.forEach((e) => {
      const {
        keyField: l
      } = e;
      f && l && n2.fieldsIndex?.has(l) && !f.includes(l) && f.push(l);
    }), f;
  });
}
function p(e, l) {
  return e.popupTemplate ? e.popupTemplate : null != l && l.defaultPopupTemplateEnabled && null != e.defaultPopupTemplate ? e.defaultPopupTemplate : null;
}
function u(e, l) {
  return null != p(e, {
    defaultPopupTemplateEnabled: l
  });
}

export {
  n,
  p,
  u
};
//# sourceMappingURL=chunk-2N3BR7QT.js.map
