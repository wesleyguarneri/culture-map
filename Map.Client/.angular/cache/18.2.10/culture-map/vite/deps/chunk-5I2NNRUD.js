import {
  __yieldStar
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/layers/ogc/xmlUtils.js
function o(n2, c) {
  if (n2 && c) {
    for (const f of n2.children) if (f.localName in c) {
      const n3 = c[f.localName];
      if ("function" == typeof n3) {
        const c2 = n3(f);
        c2 && o(f, c2);
      } else o(f, n3);
    }
  }
}
function* n(o2, c) {
  for (const f of o2.children) if (f.localName in c) {
    const o3 = c[f.localName];
    "function" == typeof o3 ? yield o3(f) : yield* __yieldStar(n(f, o3));
  }
}

export {
  o,
  n
};
//# sourceMappingURL=chunk-5I2NNRUD.js.map
