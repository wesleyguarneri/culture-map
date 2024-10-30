import {
  I,
  c2 as c,
  t3 as t
} from "./chunk-SYATLP3H.js";
import {
  a,
  s
} from "./chunk-WYIDUUN2.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/rest/utils.js
function i(r, t2) {
  return t2 ? __spreadProps(__spreadValues({}, t2), {
    query: __spreadValues(__spreadValues({}, r ?? {}), t2.query)
  }) : {
    query: r
  };
}
function f(r) {
  return "string" == typeof r ? I(r) : a(r);
}
function s2(r, t2, o) {
  const n = {};
  for (const e in r) {
    if ("declaredClass" === e) continue;
    const i2 = r[e];
    if (null != i2 && "function" != typeof i2) if (Array.isArray(i2)) n[e] = i2.map((r2) => s2(r2));
    else if ("object" == typeof i2) {
      if (i2.toJSON) {
        const r2 = i2.toJSON(o?.[e]);
        n[e] = t2 ? r2 : JSON.stringify(r2);
      } else n[e] = t2 ? i2 : JSON.stringify(i2);
    } else n[e] = i2;
  }
  return n;
}
function u(o, n) {
  return o ? c(o) && (n || s.apiKey) ? n || s.apiKey : t?.findCredential(o)?.token : null;
}

export {
  i,
  f,
  s2 as s,
  u
};
//# sourceMappingURL=chunk-YA5CTHMT.js.map
