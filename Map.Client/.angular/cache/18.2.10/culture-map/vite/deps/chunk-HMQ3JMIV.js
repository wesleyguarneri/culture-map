import {
  E2 as E,
  G2 as G,
  O2 as O,
  ce,
  de
} from "./chunk-WD7XZJEZ.js";

// ../../../node_modules/@arcgis/core/arcade/functions/fieldStats.js
function s(e) {
  let t = 0;
  for (let n = 0; n < e.length; n++) t += e[n];
  return t / e.length;
}
function c(e) {
  const t = s(e);
  let n = 0;
  for (let r = 0; r < e.length; r++) n += (t - e[r]) ** 2;
  return n / e.length;
}
function u(e) {
  let t = 0;
  for (let n = 0; n < e.length; n++) t += e[n];
  return t;
}
function i(e, s2) {
  const c2 = [], u2 = {}, i2 = [];
  for (let o = 0; o < e.length; o++) {
    if (void 0 !== e[o] && null !== e[o] && e[o] !== O) {
      const t = e[o];
      if (E(t) || G(t)) void 0 === u2[t] && (c2.push(t), u2[t] = 1);
      else {
        let e2 = false;
        for (let n = 0; n < i2.length; n++) true === ce(i2[n], t) && (e2 = true);
        false === e2 && (i2.push(t), c2.push(t));
      }
    }
    if (c2.length >= s2 && -1 !== s2) return c2;
  }
  return c2;
}
function l(t, n, r = 1e3) {
  switch (t.toLowerCase()) {
    case "distinct":
      return i(n, r);
    case "avg":
    case "mean":
      return s(de(n));
    case "min":
      return Math.min.apply(Math, de(n));
    case "sum":
      return u(de(n));
    case "max":
      return Math.max.apply(Math, de(n));
    case "stdev":
    case "stddev":
      return Math.sqrt(c(de(n)));
    case "var":
    case "variance":
      return c(de(n));
    case "count":
      return n.length;
  }
  return 0;
}

export {
  l
};
//# sourceMappingURL=chunk-HMQ3JMIV.js.map
