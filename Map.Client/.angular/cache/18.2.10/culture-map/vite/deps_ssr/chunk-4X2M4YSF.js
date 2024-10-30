import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  p
} from "./chunk-D5RCKR5Z.js";
import {
  x
} from "./chunk-D3XX7CQS.js";
import {
  i
} from "./chunk-JDVVCQU6.js";
import {
  n as n2
} from "./chunk-EGBDRLCX.js";
import {
  P,
  U,
  f,
  g,
  m,
  y
} from "./chunk-BXONKQKI.js";
import {
  Ht,
  V,
  Y,
  Z,
  it
} from "./chunk-XLEC46FY.js";
import {
  n2 as n
} from "./chunk-NXK752PZ.js";
import {
  d
} from "./chunk-UVNLCXWD.js";
import {
  o2 as o
} from "./chunk-UDMPWVPF.js";
import {
  s2 as s
} from "./chunk-6JFGZTLU.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/core/accessorSupport/decorators/persistable.js
function j(t) {
  const r = t?.origins ?? [void 0];
  return (e, o2) => {
    const s2 = U2(t, e, o2);
    for (const t2 of r) {
      const r2 = d(e, t2, o2);
      for (const t3 in s2) r2[t3] = s2[t3];
    }
  };
}
function U2(t, r, e) {
  if ("resource" === t?.type) return w(t, r, e);
  switch (t?.type ?? "other") {
    case "other":
      return {
        read: true,
        write: true
      };
    case "url": {
      const {
        read: t2,
        write: r2
      } = P;
      return {
        read: t2,
        write: r2
      };
    }
  }
}
function w(t, r, n3) {
  const i2 = o(r, n3);
  return {
    type: String,
    read: (t2, r2, e) => {
      const o2 = f(t2, r2, e);
      return i2.type === String ? o2 : "function" == typeof i2.type ? new i2.type({
        url: o2
      }) : void 0;
    },
    write: {
      writer(r2, p2, c, u) {
        if (!u?.resources) return "string" == typeof r2 ? void (p2[c] = m(r2, u)) : void (p2[c] = r2.write({}, u));
        const l = x2(r2), m2 = m(l, __spreadProps(__spreadValues({}, u), {
          verifyItemRelativeUrls: u?.verifyItemRelativeUrls ? {
            writtenUrls: u.verifyItemRelativeUrls.writtenUrls,
            rootPath: void 0
          } : void 0
        }), y.NO), d2 = i2.type !== String && (!i(this) || u?.origin && this.originIdOf(n3) > n(u.origin)), h = {
          object: this,
          propertyName: n3,
          value: r2,
          targetUrl: m2,
          dest: p2,
          targetPropertyName: c,
          context: u,
          params: t
        };
        u?.portalItem && m2 && !Y(m2) ? d2 && t?.contentAddressed ? I(h) : d2 ? N(h) : P2(h) : u?.portalItem && (null == m2 || null != U(m2) || Z(m2) || d2) ? I(h) : p2[c] = m2;
      }
    }
  };
}
function I(e) {
  const {
    targetUrl: o2,
    params: p2,
    value: u,
    context: a,
    dest: l,
    targetPropertyName: d2
  } = e;
  if (!a.portalItem) return;
  const f2 = g(o2), y2 = S(u, o2, a);
  if (p2?.contentAddressed && "json" !== y2.type) return void a.messages?.push(new s("persistable:contentAddressingUnsupported", `Property "${d2}" is trying to serializing a resource with content of type ${y2.type} with content addressing. Content addressing is only supported for json resources.`, {
    content: y2
  }));
  const g2 = p2?.contentAddressed && "json" === y2.type ? x(y2.jsonString) : f2?.filename ?? n2(), v = V(p2?.prefix ?? f2?.prefix, g2), j2 = `${v}.${p(y2)}`;
  if (p2?.contentAddressed && a.resources && "json" === y2.type) {
    const t = a.resources.toKeep.find(({
      resource: t2
    }) => t2.path === j2) ?? a.resources.toAdd.find(({
      resource: t2
    }) => t2.path === j2);
    if (t) return void (l[d2] = t.resource.itemRelativeUrl);
  }
  const U3 = a.portalItem.resourceFromPath(j2);
  Z(o2) && a.resources && a.resources.pendingOperations.push(it(o2).then((t) => {
    U3.path = `${v}.${p({
      type: "blob",
      blob: t
    })}`, l[d2] = U3.itemRelativeUrl;
  }).catch(() => {
  }));
  const w2 = p2?.compress ?? false;
  a.resources && b(__spreadProps(__spreadValues({}, e), {
    resource: U3,
    content: y2,
    compress: w2,
    updates: a.resources.toAdd
  })), l[d2] = U3.itemRelativeUrl;
}
function N(t) {
  const {
    context: r,
    targetUrl: e,
    params: o2,
    value: s2,
    dest: n3,
    targetPropertyName: i2
  } = t;
  if (!r.portalItem) return;
  const c = r.portalItem.resourceFromPath(e), u = S(s2, e, r), a = p(u), l = Ht(c.path), d2 = o2?.compress ?? false;
  a === l ? (r.resources && b(__spreadProps(__spreadValues({}, t), {
    resource: c,
    content: u,
    compress: d2,
    updates: r.resources.toUpdate
  })), n3[i2] = e) : I(t);
}
function P2({
  context: t,
  targetUrl: r,
  dest: e,
  targetPropertyName: o2
}) {
  t.portalItem && t.resources && (t.resources.toKeep.push({
    resource: t.portalItem.resourceFromPath(r),
    compress: false
  }), e[o2] = r);
}
function b({
  object: t,
  propertyName: r,
  updates: e,
  resource: o2,
  content: s2,
  compress: n3
}) {
  const i2 = (e2) => {
    O(t, r, e2);
  };
  e.push({
    resource: o2,
    content: s2,
    compress: n3,
    finish: i2
  });
}
function S(t, r, e) {
  return "string" == typeof t ? {
    type: "url",
    url: r
  } : {
    type: "json",
    jsonString: JSON.stringify(t.toJSON(e))
  };
}
function x2(t) {
  return null == t ? null : "string" == typeof t ? t : t.url;
}
function O(t, r, e) {
  "string" == typeof t[r] ? t[r] = e.url : t[r].url = e.url;
}

export {
  j
};
//# sourceMappingURL=chunk-4X2M4YSF.js.map
