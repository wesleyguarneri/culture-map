import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  E
} from "./chunk-45GTM6LF.js";
import {
  e
} from "./chunk-D7C26LZP.js";

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
//# sourceMappingURL=chunk-K7U66W6G.js.map
