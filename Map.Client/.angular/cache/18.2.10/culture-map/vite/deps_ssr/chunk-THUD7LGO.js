import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  i
} from "./chunk-DL2B6IFJ.js";
import {
  o
} from "./chunk-6EIBUVMG.js";
import {
  n
} from "./chunk-J4GMQHGL.js";
import {
  f
} from "./chunk-4AZPIP7K.js";
import {
  e
} from "./chunk-NUICEVIH.js";
import {
  y
} from "./chunk-UVNLCXWD.js";
import {
  a3 as a
} from "./chunk-UDMPWVPF.js";

// ../../../node_modules/@arcgis/core/geometry/support/MeshGeoreferencedVertexSpace.js
var c = class extends i(f) {
  constructor(r) {
    super(r), this.type = "georeferenced", this.origin = null;
  }
};
e([o({
  georeferenced: "georeferenced"
}, {
  readOnly: true
})], c.prototype, "type", void 0), e([y({
  type: [Number],
  nonNullable: false,
  json: {
    write: true
  }
})], c.prototype, "origin", void 0), c = e([a("esri.geometry.support.MeshGeoreferencedVertexSpace")], c);
var i2 = c;

// ../../../node_modules/@arcgis/core/geometry/support/MeshLocalVertexSpace.js
var i3 = class extends i(f) {
  constructor(o2) {
    super(o2), this.type = "local", this.origin = n();
  }
};
e([o({
  local: "local"
}, {
  readOnly: true
})], i3.prototype, "type", void 0), e([y({
  type: [Number],
  nonNullable: true,
  json: {
    write: true
  }
})], i3.prototype, "origin", void 0), i3 = e([a("esri.geometry.support.MeshLocalVertexSpace")], i3);
var a2 = i3;

export {
  i2 as i,
  a2 as a
};
//# sourceMappingURL=chunk-THUD7LGO.js.map
