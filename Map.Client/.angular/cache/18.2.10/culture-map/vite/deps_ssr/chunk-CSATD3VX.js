import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  m
} from "./chunk-4L4Y34YK.js";
import {
  V
} from "./chunk-U3RHUXYK.js";
import {
  _,
  p
} from "./chunk-AUUN7RFQ.js";
import {
  __async
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/core/loadAll.js
function t(o, l) {
  return __async(this, null, function* () {
    return yield o.load(), a(o, l);
  });
}
function a(t2, a2) {
  return __async(this, null, function* () {
    const s = [], c = (...o) => {
      for (const l of o) null != l && (Array.isArray(l) ? c(...l) : V.isCollection(l) ? l.forEach((o2) => c(o2)) : m.isLoadable(l) && s.push(l));
    };
    a2(c);
    let f = null;
    if (yield p(s, (o) => __async(this, null, function* () {
      const n = yield _(i(o) ? o.loadAll() : o.load());
      false !== n.ok || f || (f = n);
    })), f) throw f.error;
    return t2;
  });
}
function i(o) {
  return "loadAll" in o && "function" == typeof o.loadAll;
}

export {
  t,
  a
};
//# sourceMappingURL=chunk-CSATD3VX.js.map
