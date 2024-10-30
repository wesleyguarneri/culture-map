import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  r
} from "./chunk-6JFGZTLU.js";

// ../../../node_modules/@arcgis/core/layers/support/labelUtils.js
var n = "__begin__";
var r2 = "__end__";
var s = new RegExp(n, "ig");
var t = new RegExp(r2, "ig");
var l = new RegExp("^" + n, "i");
var o = new RegExp(r2 + "$", "i");
var i = '"';
var a = i + " + ";
var c = " + " + i;
function p(e) {
  return e.replaceAll(new RegExp("\\[", "g"), "{").replaceAll(new RegExp("\\]", "g"), "}");
}
function u(e) {
  return e.replaceAll(new RegExp("\\{", "g"), "[").replaceAll(new RegExp("\\}", "g"), "]");
}
function x(e) {
  const n2 = {
    expression: "",
    type: "none"
  };
  return e.labelExpressionInfo ? e.labelExpressionInfo.value ? (n2.expression = e.labelExpressionInfo.value, n2.type = "conventional") : e.labelExpressionInfo.expression && (n2.expression = e.labelExpressionInfo.expression, n2.type = "arcade") : null != e.labelExpression && (n2.expression = p(e.labelExpression), n2.type = "conventional"), n2;
}
function f(e) {
  const n2 = x(e);
  if (!n2) return null;
  switch (n2.type) {
    case "conventional":
      return E(n2.expression);
    case "arcade":
      return n2.expression;
  }
  return null;
}
function g(e) {
  const n2 = x(e);
  if (!n2) return null;
  switch (n2.type) {
    case "conventional":
      return $(n2.expression);
    case "arcade":
      return _(n2.expression);
  }
  return null;
}
function E(p2) {
  let u2;
  return p2 ? (u2 = r(p2, (e) => n + '$feature["' + e + '"]' + r2), u2 = l.test(u2) ? u2.replace(l, "") : i + u2, u2 = o.test(u2) ? u2.replace(o, "") : u2 + i, u2 = u2.replaceAll(s, a).replaceAll(t, c)) : u2 = '""', u2;
}
var w = /^\s*\{([^}]+)\}\s*$/i;
function $(e) {
  const n2 = e?.match(w);
  return n2?.[1].trim() || null;
}
var b = /^\s*(?:(?:\$feature\.(\w+))|(?:\$feature\[(["'])(.+)(\2)\]));?\s*$/i;
var m = /^\s*(?:(?:\$feature\.(\w+))|(?:\$feature\[(["'])(.+)(\2)\]));?\s*(?:DomainName\(\s*\$feature\s*,\s*(["'])(\1|\3)(\5)\s*\));?\s*$/i;
var R = /^\s*(?:DomainName\(\s*\$feature\s*,\s*(["'])(.+)(\1)\s*\));?\s*$/i;
function _(e) {
  if (!e) return null;
  let n2 = b.exec(e) || m.exec(e);
  return n2 ? n2[1] || n2[3] : (n2 = R.exec(e), n2 ? n2[2] : null);
}

export {
  p,
  u,
  x,
  f,
  g,
  E,
  _
};
//# sourceMappingURL=chunk-WFNAKG2H.js.map
