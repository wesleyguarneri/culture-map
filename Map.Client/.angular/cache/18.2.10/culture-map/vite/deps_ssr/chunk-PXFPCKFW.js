import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  p
} from "./chunk-RAYFUCRQ.js";
import {
  u
} from "./chunk-KUBMHTYA.js";

// ../../../node_modules/@arcgis/core/views/2d/engine/highlightReasons.js
var c = {
  selection: (c2) => new p({
    color: new u([c2.color.r / 2, c2.color.g / 2, c2.color.b / 2, c2.color.a])
  }),
  highlight: (o) => o,
  popup: (c2) => new p({
    color: new u([c2.color.g, c2.color.b, c2.color.r, c2.color.a])
  })
};
function t(o) {
  if (!o) return 0;
  let r = 1;
  for (const t2 in c) {
    if (t2 === o) break;
    r <<= 1;
  }
  return r;
}
var l = Object.keys(c);

export {
  c,
  t,
  l
};
//# sourceMappingURL=chunk-PXFPCKFW.js.map
