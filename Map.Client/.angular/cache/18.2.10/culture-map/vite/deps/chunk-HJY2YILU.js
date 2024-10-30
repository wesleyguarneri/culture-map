import {
  e
} from "./chunk-7DA6A5LD.js";
import {
  l
} from "./chunk-2MMLMOWS.js";
import {
  n2 as n,
  s2 as s
} from "./chunk-WYIDUUN2.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/core/events.js
function n2(e3) {
  return t(e3) || r(e3);
}
function t(e3) {
  return null != e3 && "object" == typeof e3 && "on" in e3 && "function" == typeof e3.on;
}
function r(e3) {
  return null != e3 && "object" == typeof e3 && "addEventListener" in e3 && "function" == typeof e3.addEventListener;
}
function o(e3, t2, o3) {
  if (!n2(e3)) throw new TypeError("target is not a Evented or EventTarget object");
  return r(e3) ? i(e3, t2, o3) : e3.on(t2, o3);
}
function i(n3, t2, r2, o3) {
  if (Array.isArray(t2)) {
    const i2 = t2.slice();
    for (const e3 of i2) n3.addEventListener(e3, r2, o3);
    return e(() => {
      for (const e3 of i2) n3.removeEventListener(e3, r2, o3);
    });
  }
  return n3.addEventListener(t2, r2, o3), e(() => n3.removeEventListener(t2, r2, o3));
}
function c(e3, t2, r2) {
  if (!n2(e3)) throw new TypeError("target is not a Evented or EventTarget object");
  if ("once" in e3) return e3.once(t2, r2);
  const i2 = o(e3, t2, (n3) => {
    i2.remove(), r2.call(e3, n3);
  });
  return i2;
}
function f(e3, n3, t2) {
  let r2 = false;
  const i2 = o(e3, n3, (n4) => {
    r2 || t2.call(e3, n4);
  });
  return {
    resume() {
      r2 = false;
    },
    pause() {
      r2 = true;
    },
    remove() {
      i2.remove();
    }
  };
}

// ../../../node_modules/@arcgis/core/core/clock.js
function e2(e3) {
  return {
    setTimeout: (o3, r2) => {
      const i2 = e3.setTimeout(o3, r2);
      return e(() => e3.clearTimeout(i2));
    }
  };
}
var o2 = e2(globalThis);

// ../../../node_modules/@arcgis/core/core/promiseUtils.js
function u(t2 = "Aborted") {
  return new s("AbortError", t2);
}
function s2(t2, n3 = "Aborted") {
  if (c2(t2)) throw u(n3);
}
function l2(t2) {
  return t2 instanceof AbortSignal ? t2 : t2?.signal;
}
function c2(t2) {
  const n3 = l2(t2);
  return null != n3 && n3.aborted;
}
function a(t2) {
  if (b(t2)) throw t2;
}
function f2(t2) {
  if (!b(t2)) throw t2;
}
function m(t2, n3) {
  const e3 = l2(t2);
  if (null != e3) {
    if (!e3.aborted) return c(e3, "abort", () => n3());
    n3();
  }
}
function w(t2, n3) {
  const e3 = l2(t2);
  if (null != e3) return s2(e3), c(e3, "abort", () => n3(u()));
}
function h(t2, n3) {
  return null == l2(n3) ? t2 : new Promise((r2, e3) => {
    let i2 = m(n3, () => e3(u()));
    const s3 = () => {
      i2 = l(i2);
    };
    t2.then(s3, s3), t2.then(r2, e3);
  });
}
function b(t2) {
  return "AbortError" === t2?.name;
}
function d(t2) {
  return __async(this, null, function* () {
    try {
      return yield t2;
    } catch (n3) {
      if (!b(n3)) throw n3;
      return;
    }
  });
}
function y(_0) {
  return __async(this, arguments, function* (t2, n3 = n.getLogger("esri")) {
    try {
      return yield t2;
    } catch (r2) {
      b(r2) || n3.error(r2);
    }
  });
}
function v(t2) {
  return __async(this, null, function* () {
    if (!t2) return;
    if ("function" != typeof t2.forEach) {
      const n4 = Object.keys(t2), r2 = n4.map((n5) => t2[n5]), e3 = yield v(r2), o3 = {};
      return n4.map((t3, n5) => o3[t3] = e3[n5]), o3;
    }
    const n3 = t2;
    return Promise.allSettled(n3).then((t3) => Array.from(n3, (n4, r2) => {
      const e3 = t3[r2];
      return "fulfilled" === e3.status ? {
        promise: n4,
        value: e3.value
      } : {
        promise: n4,
        error: e3.reason
      };
    }));
  });
}
function g(t2) {
  return __async(this, null, function* () {
    return (yield Promise.allSettled(t2)).filter((t3) => "fulfilled" === t3.status).map((t3) => t3.value);
  });
}
function P(t2) {
  return __async(this, null, function* () {
    return (yield Promise.allSettled(t2)).filter((t3) => "rejected" === t3.status).map((t3) => t3.reason);
  });
}
function A(t2, n3 = void 0, r2) {
  const e3 = new AbortController();
  return m(r2, () => e3.abort()), new Promise((r3, o3) => {
    let i2 = setTimeout(() => {
      i2 = 0, r3(n3);
    }, t2);
    m(e3, () => {
      i2 && (clearTimeout(i2), o3(u()));
    });
  });
}
function E(t2, n3) {
  const r2 = new AbortController(), e3 = setTimeout(() => r2.abort(), n3);
  return m(t2, () => {
    r2.abort(), clearTimeout(e3);
  }), __spreadProps(__spreadValues({}, t2), {
    signal: r2.signal
  });
}
function S(t2) {
  return t2 && "function" == typeof t2.then;
}
function C(t2) {
  return S(t2) ? t2 : Promise.resolve(t2);
}
function k(t2, n3 = -1) {
  let r2, e3, o3, i2, s3 = null;
  const l3 = (...c3) => {
    if (r2) {
      e3 = c3, i2 && i2.reject(u()), i2 = L();
      const t3 = i2.promise;
      if (s3) {
        const t4 = s3;
        s3 = null, t4.abort();
      }
      return t3;
    }
    if (o3 = i2 || L(), i2 = null, n3 > 0) {
      const e4 = new AbortController();
      r2 = C(t2(...c3, e4.signal));
      const o4 = r2;
      A(n3).then(() => {
        r2 === o4 && (i2 ? e4.abort() : s3 = e4);
      });
    } else r2 = 1, r2 = C(t2(...c3));
    const a2 = () => {
      const t3 = e3;
      e3 = o3 = r2 = s3 = null, null != t3 && l3(...t3);
    }, f3 = r2, m2 = o3;
    return f3.then(a2, a2), f3.then(m2.resolve, m2.reject), m2.promise;
  };
  return l3;
}
function L() {
  let n3, r2;
  const e3 = new Promise((t2, e4) => {
    n3 = t2, r2 = e4;
  }), o3 = (t2) => {
    n3(t2);
  };
  return o3.resolve = (t2) => n3(t2), o3.reject = (t2) => r2(t2), o3.timeout = (n4, r3) => o2.setTimeout(() => o3.reject(r3), n4), o3.promise = e3, o3;
}
function $(t2, n3) {
  return t2.then(n3, n3);
}
function D(t2) {
  return __async(this, null, function* () {
    yield Promise.resolve(), s2(t2);
  });
}

export {
  o2 as o,
  n2 as n,
  o as o2,
  c,
  f,
  u,
  s2 as s,
  l2 as l,
  c2,
  a,
  f2,
  m,
  w,
  h,
  b,
  d,
  y,
  v,
  g,
  P,
  A,
  E,
  S,
  C,
  k,
  L,
  $,
  D
};
//# sourceMappingURL=chunk-HJY2YILU.js.map
