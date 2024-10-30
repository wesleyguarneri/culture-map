import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  o as o2,
  r,
  s
} from "./chunk-7HWP2QWI.js";
import {
  n as n2
} from "./chunk-RFURERTV.js";
import {
  n
} from "./chunk-MDOKECP3.js";
import {
  o
} from "./chunk-6UEMNP3E.js";

// ../../../node_modules/@arcgis/core/views/interactive/snapping/SnappingVisualizer.js
var r2 = class {
  draw(r3, p) {
    const h = a(r3), f = this.sortUniqueHints(h), u = [];
    for (const i of f) i instanceof o2 && u.push(this.visualizeIntersectionPoint(i, p)), i instanceof n && u.push(this.visualizeLine(i, p)), i instanceof r && u.push(this.visualizeParallelSign(i, p)), i instanceof s && u.push(this.visualizeRightAngleQuad(i, p)), i instanceof n2 && u.push(this.visualizePoint(i, p));
    return o(u);
  }
  sortUniqueHints(i) {
    return i;
  }
};
function a(i) {
  const n3 = [];
  for (const t of i) {
    let i2 = true;
    for (const s2 of n3) if (t.equals(s2)) {
      i2 = false;
      break;
    }
    i2 && n3.push(t);
  }
  return n3;
}

export {
  r2 as r
};
//# sourceMappingURL=chunk-DYMQWLSL.js.map
