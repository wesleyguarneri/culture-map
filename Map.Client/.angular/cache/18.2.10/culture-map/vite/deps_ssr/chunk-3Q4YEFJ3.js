import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  o
} from "./chunk-HITI6WDM.js";
import {
  S
} from "./chunk-NXK752PZ.js";

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/effects/RenderPlugin.js
var t = {
  required: []
};
var n = {
  required: [o.Depth]
};
var s = class extends S {
  consumes() {
    return t;
  }
  get usedMemory() {
    return 0;
  }
  get isDecoration() {
    return false;
  }
  get running() {
    return false;
  }
  get materialReference() {
    return null;
  }
  modify(e) {
  }
  get numGeometries() {
    return 0;
  }
  get hasOccludees() {
    return false;
  }
  queryRenderOccludedState(e) {
    return false;
  }
};
var u = class extends s {
};
var c = class extends s {
  constructor() {
    super(...arguments), this.drapedPriority = 0;
  }
};
var i = class extends s {
};
var d = class extends s {
};
function a(e) {
  return "prepareTechnique" in e;
}
function l(e) {
  return "prepareTechniques" in e;
}

export {
  t,
  n,
  u,
  c,
  i,
  d,
  a,
  l
};
//# sourceMappingURL=chunk-3Q4YEFJ3.js.map
