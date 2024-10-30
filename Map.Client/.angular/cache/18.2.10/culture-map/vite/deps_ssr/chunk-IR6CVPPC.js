import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  u
} from "./chunk-KUBMHTYA.js";
import {
  n,
  r
} from "./chunk-XNLAOXPY.js";
import {
  o
} from "./chunk-VYTPFEL2.js";
import {
  N
} from "./chunk-UDMPWVPF.js";

// ../../../node_modules/@arcgis/core/symbols/support/materialUtils.js
function s(o2, t) {
  const n2 = null != t.transparency ? r(t.transparency) : 1, s2 = t.color;
  return s2 && Array.isArray(s2) ? new u([s2[0] || 0, s2[1] || 0, s2[2] || 0, n2]) : null;
}
function c(r2, o2) {
  o2.color = r2.toJSON().slice(0, 3);
  const t = n(r2.a);
  0 !== t && (o2.transparency = t);
}
var p = {
  type: u,
  json: {
    type: [N],
    default: null,
    read: {
      source: ["color", "transparency"],
      reader: s
    },
    write: {
      target: {
        color: {
          type: [N]
        },
        transparency: {
          type: N
        }
      },
      writer: c
    }
  }
};
var a = {
  type: Number,
  cast: o,
  json: {
    write: true
  }
};

export {
  p,
  a
};
//# sourceMappingURL=chunk-IR6CVPPC.js.map
