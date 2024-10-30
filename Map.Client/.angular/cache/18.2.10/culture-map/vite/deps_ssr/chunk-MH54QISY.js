import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  C
} from "./chunk-7QV7DHWN.js";
import {
  ae
} from "./chunk-6SSA7P3A.js";

// ../../../node_modules/@arcgis/core/support/getDefaultUnitForView.js
function e(e2) {
  const n = "metric";
  if (null == e2) return n;
  const i = e2.map, l = (i && "portalItem" in i ? i.portalItem?.portal : null) ?? C.getDefault();
  switch (l.user?.units ?? l.units) {
    case n:
      return n;
    case "english":
      return "imperial";
  }
  return ae(e2.spatialReference) ?? n;
}

export {
  e
};
//# sourceMappingURL=chunk-MH54QISY.js.map
