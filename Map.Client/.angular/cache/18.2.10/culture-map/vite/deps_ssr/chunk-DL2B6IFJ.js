import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  e as e2
} from "./chunk-NUICEVIH.js";
import {
  S,
  e
} from "./chunk-NXK752PZ.js";
import {
  a3 as a,
  t
} from "./chunk-UDMPWVPF.js";
import {
  n
} from "./chunk-6WGE3IUL.js";
import {
  p
} from "./chunk-6JFGZTLU.js";

// ../../../node_modules/@arcgis/core/core/Clonable.js
var i = (s) => {
  let i2 = class extends s {
    clone() {
      const o = t(this);
      n(o, "unable to clone instance of non-accessor class");
      const s2 = o.metadata, c = o.store, i3 = {}, l2 = /* @__PURE__ */ new Map();
      for (const r in s2) {
        const o2 = s2[r], n2 = c?.originOf(r), a3 = o2.clonable;
        if (o2.readOnly || false === a3 || n2 !== e.USER && n2 !== e.DEFAULTS && n2 !== e.WEB_MAP && n2 !== e.WEB_SCENE) continue;
        const p2 = this[r];
        let f = null;
        f = "function" == typeof a3 ? a3(p2) : "reference" === a3 ? p2 : p(p2), null != p2 && null == f || (n2 === e.DEFAULTS ? l2.set(r, f) : i3[r] = f);
      }
      const a2 = new (0, Object.getPrototypeOf(this).constructor)(i3);
      if (l2.size) {
        const o2 = t(a2)?.store;
        if (o2) for (const [s3, t2] of l2) o2.set(s3, t2, e.DEFAULTS);
      }
      return a2;
    }
  };
  return i2 = e2([a("esri.core.Clonable")], i2), i2;
};
var l = class extends i(S) {
};
l = e2([a("esri.core.Clonable")], l);

export {
  i,
  l
};
//# sourceMappingURL=chunk-DL2B6IFJ.js.map
