import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  a
} from "./chunk-U4EMQMDC.js";

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Uniform.js
var a2 = class {
  constructor(a3, i, e, r, t = null) {
    if (this.name = a3, this.type = i, this.arraySize = t, this.bind = {
      [a.Pass]: null,
      [a.Draw]: null
    }, r) switch (e) {
      case a.Pass:
        this.bind[a.Pass] = r;
        break;
      case a.Draw:
        this.bind[a.Draw] = r;
    }
  }
  equals(s) {
    return this.type === s.type && this.name === s.name && this.arraySize === s.arraySize;
  }
};

export {
  a2 as a
};
//# sourceMappingURL=chunk-AABDXAD3.js.map
