import {
  d
} from "./chunk-7CJXZOFG.js";

// ../../../node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js
function o(o2, e, t) {
  let a, c;
  return void 0 === e || Array.isArray(e) ? (c = o2, t = e, a = [void 0]) : (c = e, a = Array.isArray(o2) ? o2 : [o2]), (o3, e2) => {
    const d2 = o3.constructor.prototype;
    a.forEach((a2) => {
      const s = d(o3, a2, c);
      s.read && "object" == typeof s.read || (s.read = {}), s.read.reader = d2[e2], t && (s.read.source = (s.read.source || []).concat(t));
    });
  };
}

export {
  o
};
//# sourceMappingURL=chunk-NQOJNTB3.js.map