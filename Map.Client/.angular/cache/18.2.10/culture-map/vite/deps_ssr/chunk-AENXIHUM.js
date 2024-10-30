import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  d
} from "./chunk-Z3B4X2BG.js";
import {
  n
} from "./chunk-SR7PRON4.js";
import {
  y as y2
} from "./chunk-4DSGTDZJ.js";
import {
  s
} from "./chunk-66YQWHHE.js";
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

// ../../../node_modules/@arcgis/core/Viewpoint.js
var n2;
var p = n2 = class extends f {
  constructor(r) {
    super(r), this.rotation = 0, this.scale = 0, this.targetGeometry = null, this.camera = null;
  }
  castRotation(r) {
    return (r %= 360) < 0 && (r += 360), r;
  }
  clone() {
    return new n2({
      rotation: this.rotation,
      scale: this.scale,
      targetGeometry: null != this.targetGeometry ? this.targetGeometry.clone() : null,
      camera: null != this.camera ? this.camera.clone() : null
    });
  }
};
e([y({
  type: Number,
  json: {
    write: true,
    origins: {
      "web-map": {
        default: 0,
        write: true
      },
      "web-scene": {
        write: {
          overridePolicy: l
        }
      }
    }
  }
})], p.prototype, "rotation", void 0), e([s("rotation")], p.prototype, "castRotation", null), e([y({
  type: Number,
  json: {
    write: true,
    origins: {
      "web-map": {
        default: 0,
        write: true
      },
      "web-scene": {
        write: {
          overridePolicy: l
        }
      }
    }
  }
})], p.prototype, "scale", void 0), e([y({
  types: n,
  json: {
    read: y2,
    write: true,
    origins: {
      "web-scene": {
        read: y2,
        write: {
          overridePolicy: l
        }
      }
    }
  }
})], p.prototype, "targetGeometry", void 0), e([y({
  type: d,
  json: {
    write: true
  }
})], p.prototype, "camera", void 0), p = n2 = e([a("esri.Viewpoint")], p);
var m = p;
function l() {
  return {
    enabled: !this.camera
  };
}

export {
  m
};
//# sourceMappingURL=chunk-AENXIHUM.js.map
