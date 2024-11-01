import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  V
} from "./chunk-U3RHUXYK.js";
import {
  S
} from "./chunk-NXK752PZ.js";
import {
  t
} from "./chunk-UDMPWVPF.js";

// ../../../node_modules/@arcgis/core/core/accessorSupport/diffUtils.js
var o = /* @__PURE__ */ new Set(["esri.Color", "esri.portal.Portal", "esri.symbols.support.Symbol3DAnchorPosition2D", "esri.symbols.support.Symbol3DAnchorPosition3D"]);
function r(e) {
  return e instanceof S;
}
function f(t2) {
  return t2 instanceof V ? Object.keys(t2.items) : r(t2) ? t(t2).keys() : t2 ? Object.keys(t2) : [];
}
function i(t2, n) {
  return t2 instanceof V ? t2.items[n] : t2[n];
}
function l(t2, e) {
  return !(!Array.isArray(t2) || !Array.isArray(e)) && t2.length !== e.length;
}
function u(t2) {
  return t2 ? t2.declaredClass : null;
}
function c(t2, e) {
  const n = t2.diff;
  if (n && "function" == typeof n) return n(t2, e);
  const s2 = f(t2), p2 = f(e);
  if (0 === s2.length && 0 === p2.length) return;
  if (!s2.length || !p2.length || l(t2, e)) return {
    type: "complete",
    oldValue: t2,
    newValue: e
  };
  const a = p2.filter((t3) => !s2.includes(t3)), y2 = s2.filter((t3) => !p2.includes(t3)), d2 = s2.filter((n2) => p2.includes(n2) && i(t2, n2) !== i(e, n2)).concat(a, y2).sort(), m2 = u(t2);
  if (m2 && o.has(m2) && d2.length) return {
    type: "complete",
    oldValue: t2,
    newValue: e
  };
  let h;
  const b = r(t2) && r(e);
  for (const o2 of d2) {
    const r2 = i(t2, o2), f2 = i(e, o2);
    let l2;
    if ((b || "function" != typeof r2 && "function" != typeof f2) && r2 !== f2 && (null != r2 || null != f2)) {
      if (n && n[o2] && "function" == typeof n[o2]) l2 = n[o2]?.(r2, f2);
      else if (r2 instanceof Date && f2 instanceof Date) {
        if (r2.getTime() === f2.getTime()) continue;
        l2 = {
          type: "complete",
          oldValue: r2,
          newValue: f2
        };
      } else l2 = "object" == typeof r2 && "object" == typeof f2 && u(r2) === u(f2) ? c(r2, f2) : {
        type: "complete",
        oldValue: r2,
        newValue: f2
      };
      null != l2 && (null != h ? h.diff[o2] = l2 : h = {
        type: "partial",
        diff: {
          [o2]: l2
        }
      });
    }
  }
  return h;
}
function s(t2, e) {
  return p(t2, e);
}
function p(t2, e) {
  if (null == t2) return false;
  const n = e.split(".");
  let o2 = t2;
  for (const r2 of n) {
    if ("complete" === o2.type) return true;
    if ("partial" !== o2.type) return false;
    {
      const t3 = o2.diff[r2];
      if (!t3) return false;
      o2 = t3;
    }
  }
  return true;
}
function y(t2, e) {
  if (!t2) return false;
  if ("partial" === t2.type) {
    const n = Object.keys(t2.diff);
    return 1 === n.length && n[0] === e;
  }
  return false;
}
function d(t2, e) {
  if ("function" != typeof t2 && "function" != typeof e && (null != t2 || null != e)) return null == t2 || null == e || "object" == typeof t2 && "object" == typeof e && u(t2) !== u(e) ? {
    type: "complete",
    oldValue: t2,
    newValue: e
  } : c(t2, e);
}
function m(t2) {
  if (null == t2) return true;
  switch (t2.type) {
    case "complete":
      return false;
    case "collection": {
      const e = t2;
      for (const t3 of e.added) if (!m(t3)) return false;
      for (const t3 of e.removed) if (!m(t3)) return false;
      for (const t3 of e.changed) if (!m(t3)) return false;
      return true;
    }
    case "partial":
      for (const e in t2.diff) {
        if (!m(t2.diff[e])) return false;
      }
      return true;
  }
}

export {
  s,
  p,
  y,
  d,
  m
};
//# sourceMappingURL=chunk-IEB4ZCRH.js.map
