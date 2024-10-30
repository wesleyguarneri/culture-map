import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  e as e2
} from "./chunk-FYGR4X6I.js";
import {
  n
} from "./chunk-M5N6UHWJ.js";
import {
  f
} from "./chunk-ODFKYX74.js";
import {
  e
} from "./chunk-2OZSYJDX.js";
import {
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-XBPEBUD5.js";

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
//# sourceMappingURL=chunk-XJ4XZPHY.js.map
