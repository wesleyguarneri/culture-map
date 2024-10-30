import {
  a
} from "./chunk-R3F4JMNC.js";

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
//# sourceMappingURL=chunk-24CN3HDP.js.map
