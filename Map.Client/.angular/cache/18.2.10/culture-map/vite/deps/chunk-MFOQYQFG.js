import {
  d
} from "./chunk-7CJXZOFG.js";

// ../../../node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js
function r(r2, o, e) {
  let i, n;
  return void 0 === o ? (n = r2, i = [void 0]) : "string" != typeof o ? (n = r2, i = [void 0], e = o) : (n = o, i = Array.isArray(r2) ? r2 : [r2]), (r3, o2) => {
    const p = r3.constructor.prototype;
    for (const c of i) {
      const i2 = d(r3, c, n);
      i2.write && "object" == typeof i2.write || (i2.write = {}), e && (i2.write.target = e), i2.write.writer = p[o2];
    }
  };
}

export {
  r
};
//# sourceMappingURL=chunk-MFOQYQFG.js.map