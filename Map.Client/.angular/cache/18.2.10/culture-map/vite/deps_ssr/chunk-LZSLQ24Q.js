import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  V
} from "./chunk-U3RHUXYK.js";
import {
  d as d2
} from "./chunk-AUUN7RFQ.js";
import {
  w
} from "./chunk-NXK752PZ.js";
import {
  c2 as c,
  d,
  m,
  n,
  o2,
  u
} from "./chunk-AIZ3T7E3.js";
import {
  e,
  l as l2,
  o
} from "./chunk-6UEMNP3E.js";
import {
  l
} from "./chunk-6WGE3IUL.js";
import {
  __async
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/core/reactiveUtils.js
function d3(n2, e2, t = {}) {
  return y(n2, e2, t, L);
}
function p(n2, e2, t = {}) {
  return y(n2, e2, t, M);
}
function y(n2, e2, t = {}, o3) {
  let r = null;
  const s = t.once ? (n3, t2) => {
    o3(n3) && (l(r), e2(n3, t2));
  } : (n3, t2) => {
    o3(n3) && e2(n3, t2);
  };
  if (r = w(n2, s, t.sync, t.equals), t.initial) {
    const e3 = n2();
    s(e3, e3);
  }
  return r;
}
function v(n2, e2, r, s = {}) {
  let u2 = null, l3 = null, a = null;
  function f() {
    u2 && l3 && (l3.remove(), s.onListenerRemove?.(u2), u2 = null, l3 = null);
  }
  function m2(n3) {
    s.once && s.once && l(a), r(n3);
  }
  const p2 = d3(n2, (n3, r2) => {
    f(), n(n3) && (u2 = n3, l3 = o2(n3, e2, m2), s.onListenerAdd?.(n3));
  }, {
    sync: s.sync,
    initial: true
  });
  return a = e(() => {
    p2.remove(), f();
  }), a;
}
function j(n2, e2) {
  return h(n2, null, e2);
}
function w2(n2, e2) {
  return h(n2, M, e2);
}
function h(n2, e2, t) {
  if (c(t)) return Promise.reject(u());
  const o3 = n2();
  if (e2?.(o3)) return Promise.resolve(o3);
  let s = null;
  function i2() {
    s = l(s);
  }
  return new Promise((o4, c2) => {
    s = o([m(t, () => {
      i2(), c2(u());
    }), y(n2, (n3) => {
      i2(), o4(n3);
    }, {
      sync: false,
      once: true
    }, e2 ?? L)]);
  });
}
function L(n2) {
  return true;
}
function M(n2) {
  return !!n2;
}
function U(n2, e2, t = {}) {
  let o3 = false;
  const r = d3(n2, (n3, t2) => {
    o3 || e2(n3, t2);
  }, t);
  return {
    remove() {
      r.remove();
    },
    pause() {
      o3 = true;
    },
    resume() {
      o3 = false;
    }
  };
}
function g(n2, t) {
  const o3 = new V(), r = v(n2, "after-splice", ({
    added: n3,
    start: e2,
    deleteCount: r2
  }) => {
    const s = o3.splice(e2, r2);
    for (const t2 of s) t2.remove();
    if (n3?.length) {
      const r3 = n3.map(t);
      o3.addMany(r3, e2);
    }
  }, {
    sync: true,
    onListenerRemove: () => o3.drain((n3) => n3.remove()),
    onListenerAdd: (n3) => o3.addMany(n3.items.map(t))
  });
  return o3.addHandles(r), o3;
}
function x(t, o3) {
  const r = new V(), i2 = g(t, (e2) => d2((n2) => __async(this, null, function* () {
    const t2 = yield o3(e2, n2);
    if (c(n2)) throw t2.remove(), u();
    return t2;
  }))), c2 = () => null, a = (n2) => __async(this, null, function* () {
    const e2 = yield n2.promise, t2 = i2.indexOf(n2);
    t2 < 0 || r.splice(t2, 1, e2);
  });
  r.addMany(i2.items.map(c2));
  for (const n2 of i2) d(a(n2));
  const m2 = i2.on("after-splice", ({
    added: n2,
    start: e2,
    deleteCount: t2
  }) => {
    const o4 = r.splice(e2, t2);
    for (const r2 of o4) r2?.remove();
    if (n2?.length) {
      r.addMany(n2.map(c2), e2);
      for (const e3 of n2) d(a(e3));
    }
  });
  return r.addHandles([l2(i2), m2]), r;
}
var C = {
  sync: true
};
var P = {
  initial: true
};
var A = {
  sync: true,
  initial: true
};

export {
  d3 as d,
  p,
  v,
  j,
  w2 as w,
  U,
  g,
  x,
  C,
  P,
  A
};
//# sourceMappingURL=chunk-LZSLQ24Q.js.map
