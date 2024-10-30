import {
  v
} from "./chunk-DME7BDTC.js";
import {
  l
} from "./chunk-YVULORT6.js";
import {
  j
} from "./chunk-CVB43GGP.js";

// ../../../node_modules/@arcgis/core/widgets/smartMapping/support/utils.js
function r(t) {
  return j(new Date(t), v);
}
function s(t) {
  const n = 2, o = Math.floor(Math.log10(Math.abs(t))) + 1, e = o < 4 || o > 6 ? 4 : o, r2 = 1e6, s2 = Math.abs(t) >= r2 ? "compact" : "standard";
  return l(t, {
    notation: s2,
    minimumSignificantDigits: n,
    maximumSignificantDigits: e
  });
}
function a(t, n, i) {
  if (null == n || null == t) return [];
  const o = [];
  for (let e = -1 * i; e <= i; e++) 0 !== e && o.push(n + e * t);
  return o;
}

export {
  r,
  s,
  a
};
//# sourceMappingURL=chunk-AKJFF2YB.js.map
