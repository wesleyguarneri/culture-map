import {
  e as e2
} from "./chunk-HBMA4SRU.js";
import {
  n
} from "./chunk-K7TO5IIO.js";
import {
  f
} from "./chunk-CQDYITZC.js";
import {
  e
} from "./chunk-3ZXOUEQG.js";
import {
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/widgets/support/Heading.js
function e3(_a, l) {
  var _b = _a, {
    level: r,
    class: e4
  } = _b, n3 = __objRest(_b, [
    "level",
    "class"
  ]);
  const a = s(r);
  return n(`h${a}`, __spreadProps(__spreadValues({}, n3), {
    "aria-level": String(a),
    class: f(e2.heading, e4),
    role: "heading"
  }), l);
}
function s(t) {
  return e(Math.ceil(t), 1, 6);
}
function n2(r, t = 1) {
  return s(r + t);
}

export {
  e3 as e,
  n2 as n
};
//# sourceMappingURL=chunk-HR6RJVBL.js.map
