import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  G,
  p
} from "./chunk-4DSGTDZJ.js";

// ../../../node_modules/@arcgis/core/rest/geometryService/utils.js
function r(t) {
  return {
    geometryType: p(t[0]),
    geometries: t.map((e) => e.toJSON())
  };
}
function o(e, r2, o2) {
  const n = G(r2);
  return e.map((e2) => {
    const t = n.fromJSON(e2);
    return t.spatialReference = o2, t;
  });
}

export {
  r,
  o
};
//# sourceMappingURL=chunk-AOGKNBDG.js.map
