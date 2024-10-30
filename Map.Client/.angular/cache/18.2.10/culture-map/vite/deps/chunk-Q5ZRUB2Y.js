import {
  i
} from "./chunk-CIW3KHOW.js";
import {
  o
} from "./chunk-4ZZRP4MA.js";
import {
  n
} from "./chunk-OXEPWRM7.js";
import {
  f
} from "./chunk-V6AMQYXE.js";
import {
  e
} from "./chunk-4Z5SGKRM.js";
import {
  y
} from "./chunk-7CJXZOFG.js";
import {
  a3 as a
} from "./chunk-DDYVXG4F.js";

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
//# sourceMappingURL=chunk-Q5ZRUB2Y.js.map
