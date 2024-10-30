import { createRequire } from 'module';const require = createRequire(import.meta.url);
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

// ../../../node_modules/@arcgis/core/views/layers/support/ClipArea.js
var t = class extends f {
  get version() {
    return this.commitVersionProperties(), (this._get("version") || 0) + 1;
  }
};
e([y({
  readOnly: true
})], t.prototype, "version", null), t = e([a("esri.views.layers.support.ClipArea")], t);
var p = t;

// ../../../node_modules/@arcgis/core/views/layers/support/ClipRect.js
var s;
var i = s = class extends p {
  constructor(t2) {
    super(t2), this.type = "rect", this.left = null, this.right = null, this.top = null, this.bottom = null;
  }
  clone() {
    return new s({
      left: this.left,
      right: this.right,
      top: this.top,
      bottom: this.bottom
    });
  }
  commitVersionProperties() {
    this.commitProperty("left"), this.commitProperty("right"), this.commitProperty("top"), this.commitProperty("bottom");
  }
};
e([y({
  type: [Number, String],
  json: {
    write: true
  }
})], i.prototype, "left", void 0), e([y({
  type: [Number, String],
  json: {
    write: true
  }
})], i.prototype, "right", void 0), e([y({
  type: [Number, String],
  json: {
    write: true
  }
})], i.prototype, "top", void 0), e([y({
  type: [Number, String],
  json: {
    write: true
  }
})], i.prototype, "bottom", void 0), i = s = e([a("esri.views.layers.support.ClipRect")], i);
var p2 = i;

export {
  p,
  p2
};
//# sourceMappingURL=chunk-74SVQPE6.js.map
