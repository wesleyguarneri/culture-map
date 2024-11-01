import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  _,
  x
} from "./chunk-WFNAKG2H.js";
import {
  ge,
  m,
  pe
} from "./chunk-I2TVVMQ6.js";
import {
  e
} from "./chunk-5EGQYY2H.js";
import {
  c
} from "./chunk-JKPUNUQA.js";
import {
  l
} from "./chunk-THZPD5CT.js";
import {
  E,
  j
} from "./chunk-2JI245BP.js";
import {
  n2 as n,
  s2 as s
} from "./chunk-6JFGZTLU.js";
import {
  __async
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/layers/support/labelFormatUtils.js
var m2 = () => n.getLogger("esri.layers.support.labelFormatUtils");
var p = {
  type: "simple",
  evaluate: () => null
};
var d = {
  getAttribute: (e2, r) => e2.field(r)
};
function w(r, n2, o) {
  return __async(this, null, function* () {
    if (!r || !r.symbol || !n2) return p;
    const a = r.where, l2 = x(r);
    let i;
    if ("arcade" === l2.type) {
      const r2 = yield c(l2.expression, o, n2);
      if (null == r2) return p;
      i = {
        type: "arcade",
        evaluate(t, n3) {
          try {
            const e2 = "attributes" in t ? r2.repurposeFeature(t) : t;
            e2.contextTimeZone = n3 ?? null;
            const o2 = r2.evaluate({
              $view: {
                timeZone: n3
              },
              $feature: e2
            }, r2.services);
            if (null != o2) return o2.toString();
          } catch (o2) {
            m2().error(new s("arcade-expression-error", "Encountered an error when evaluating label expression for feature", {
              error: o2,
              feature: t,
              expression: l2
            }));
          }
          return null;
        },
        needsHydrationToEvaluate: () => null == _(l2.expression)
      };
    } else i = {
      type: "simple",
      evaluate: (e2) => l2.expression.replaceAll(/{[^}]*}/g, (r2) => {
        const t = r2.slice(1, -1), o2 = n2.get(t);
        if (!o2) return r2;
        let a2 = null;
        if ("attributes" in e2) {
          e2 && e2.attributes && (a2 = e2.attributes[o2.name]);
        } else a2 = e2.field(o2.name);
        return null == a2 ? "" : g(a2, o2);
      })
    };
    if (a) {
      let r2;
      try {
        r2 = yield e(a, n2);
      } catch (s2) {
        return m2().error(new s("bad-where-clause", "Encountered an error when evaluating where clause, ignoring", {
          where: a,
          error: s2
        })), p;
      }
      const o2 = i.evaluate;
      i.evaluate = (t, n3) => {
        const l3 = "attributes" in t ? void 0 : d;
        try {
          if (r2.testFeature(t, l3)) return o2(t, n3);
        } catch (s2) {
          m2().error(new s("bad-where-clause", "Encountered an error when evaluating where clause for feature", {
            where: a,
            feature: t,
            error: s2
          }));
        }
        return null;
      };
    }
    return i;
  });
}
function g(e2, r) {
  if (null == e2) return "";
  const t = r.domain;
  if (t) {
    if ("codedValue" === t.type || "coded-value" === t.type) {
      const r2 = e2;
      for (const e3 of t.codedValues) if (e3.code === r2) return e3.name;
    } else if ("range" === t.type) {
      const {
        max: n2,
        min: o
      } = m(r), a = +e2;
      if (null != o && null != n2 && o <= a && a <= n2) return t.name;
    }
  }
  let u = e2;
  return ge(r) ? u = j(u, E("short-date")) : pe(r) && (u = l(+u)), u || "";
}

export {
  w,
  g
};
//# sourceMappingURL=chunk-Y72ZILQ6.js.map
