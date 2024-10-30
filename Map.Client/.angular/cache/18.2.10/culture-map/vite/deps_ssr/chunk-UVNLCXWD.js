import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  A,
  C,
  D,
  M,
  S,
  T,
  b,
  c,
  e,
  j,
  k2 as k,
  l,
  o2 as o,
  t,
  w
} from "./chunk-UDMPWVPF.js";
import {
  n2 as n,
  s2 as s
} from "./chunk-6JFGZTLU.js";
import {
  has
} from "./chunk-2ZJE6ZFX.js";

// ../../../node_modules/@arcgis/core/core/accessorSupport/get.js
function e2(t3, e4) {
  const i2 = "?" === t3[t3.length - 1] ? t3.slice(0, -1) : t3;
  if (null != e4.getItemAt || Array.isArray(e4)) {
    const t4 = parseInt(i2, 10);
    if (!isNaN(t4)) return Array.isArray(e4) ? e4[t4] : e4.at(t4);
  }
  const u2 = t(e4);
  return e(u2, i2) ? u2.get(i2) : e4[i2];
}
function i(t3, n3, r) {
  if (null == t3) return t3;
  const u2 = e2(n3[r], t3);
  return !u2 && r < n3.length - 1 ? void 0 : r === n3.length - 1 ? u2 : i(u2, n3, r + 1);
}
function u(n3, r, u2 = 0) {
  return "string" != typeof r || r.includes(".") ? i(n3, l(r), u2) : e2(r, n3);
}
function o2(t3, n3) {
  return u(t3, n3);
}
function s2(t3, n3) {
  return void 0 !== u(n3, t3);
}

// ../../../node_modules/@arcgis/core/core/accessorSupport/set.js
function t2(o3, e4, s4) {
  if (o3 && e4) if ("object" == typeof e4) for (const r of Object.getOwnPropertyNames(e4)) t2(o3, r, e4[r]);
  else {
    if (e4.includes(".")) {
      const n3 = e4.split("."), i3 = n3.splice(-1, 1)[0];
      return void t2(o2(o3, n3), i3, s4);
    }
    const i2 = o3.__accessor__;
    null != i2 && n2(e4, i2), o3[e4] = s4;
  }
}
function n2(r, t3) {
  if (has("esri-unknown-property-errors") && !e3(r, t3)) throw new s("set:unknown-property", s3(r, t3));
}
function e3(o3, r) {
  return null != r.metadata[o3];
}
function s3(o3, r) {
  return "setting unknown property '" + o3 + "' on instance of " + r.host.declaredClass;
}

// ../../../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
function y(n3 = {}) {
  return (o3, s4) => {
    if (o3 === Function.prototype) throw new Error(`Inappropriate use of @property() on a static field: ${o3.name}.${s4}. Accessor does not support static properties.`);
    const i2 = Object.getOwnPropertyDescriptor(o3, s4), a = o(o3, s4);
    i2 && (i2.get || i2.set ? (a.get = i2.get || a.get, a.set = i2.set || a.set) : "value" in i2 && ("value" in n3 && n.getLogger("esri.core.accessorSupport.decorators.property").warn(`@property() will redefine the value of "${s4}" on "${o3.constructor.name}" already defined in the metadata`, n3), a.value = n3.value = i2.value)), null != n3.readOnly && (a.readOnly = n3.readOnly);
    const p = n3.aliasOf;
    if (p) {
      const t3 = "string" == typeof p ? p : p.source, e4 = "string" == typeof p ? null : true === p.overridable;
      let r;
      a.dependsOn = [t3], a.get = function() {
        let e5 = o2(this, t3);
        if ("function" == typeof e5) {
          r || (r = t3.split(".").slice(0, -1).join("."));
          const n4 = o2(this, r);
          n4 && (e5 = e5.bind(n4));
        }
        return e5;
      }, a.readOnly || (a.set = e4 ? function(t4) {
        this._override(s4, t4);
      } : function(e5) {
        t2(this, t3, e5);
      });
    }
    const u2 = n3.type, c2 = n3.types;
    a.cast || (u2 ? a.cast = h(u2) : c2 && (Array.isArray(c2) ? a.cast = w(T(c2[0])) : a.cast = T(c2))), c(a, n3), n3.range && (a.cast = j2(a.cast, n3.range));
  };
}
function d(t3, e4, r) {
  const n3 = o(t3, r);
  n3.json || (n3.json = {});
  let o3 = n3.json;
  return void 0 !== e4 && (o3.origins || (o3.origins = {}), o3.origins[e4] || (o3.origins[e4] = {}), o3 = o3.origins[e4]), o3;
}
function h(t3) {
  let e4 = 0, r = t3;
  if (C(t3)) return D(t3);
  for (; Array.isArray(r) && 1 === r.length && "string" != typeof r[0] && "number" != typeof r[0]; ) r = r[0], e4++;
  const f = r;
  if (M(f)) return 0 === e4 ? S(f) : j(S(f), e4);
  if (1 === e4) return A(f);
  if (e4 > 1) return k(f, e4);
  const l2 = t3;
  return l2.from ? l2.from : b(l2);
}
function j2(t3, e4) {
  return (r) => {
    let n3 = +t3(r);
    return null != e4.step && (n3 = Math.round(n3 / e4.step) * e4.step), null != e4.min && (n3 = Math.max(e4.min, n3)), null != e4.max && (n3 = Math.min(e4.max, n3)), n3;
  };
}

export {
  u,
  o2 as o,
  s2 as s,
  t2 as t,
  y,
  d,
  j2 as j
};
//# sourceMappingURL=chunk-UVNLCXWD.js.map
