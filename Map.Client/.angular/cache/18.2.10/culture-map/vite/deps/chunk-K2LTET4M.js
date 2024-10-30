import {
  E
} from "./chunk-5L3YXBNN.js";
import {
  e
} from "./chunk-4MMTPKY4.js";

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/materials/DefaultBufferWriter.js
var r = class {
  constructor(t) {
    this.vertexBufferLayout = t;
  }
  elementCount(e2) {
    return e2.attributes.get(e.POSITION).indices.length;
  }
  write(t, r2, i, o, s) {
    E(i, this.vertexBufferLayout, t, r2, o, s);
  }
};

export {
  r
};
//# sourceMappingURL=chunk-K2LTET4M.js.map
