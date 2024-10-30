import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  a as a3
} from "./chunk-HKAONIBH.js";
import {
  i,
  l
} from "./chunk-DL2B6IFJ.js";
import {
  _
} from "./chunk-TIRJMGGG.js";
import {
  o
} from "./chunk-DCXDXGAR.js";
import {
  r
} from "./chunk-BCCDYCTQ.js";
import {
  s
} from "./chunk-66YQWHHE.js";
import {
  e as e2
} from "./chunk-2OZSYJDX.js";
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
  a,
  a3 as a2
} from "./chunk-UDMPWVPF.js";

// ../../../node_modules/@arcgis/core/CameraLayout.js
var t = class extends l {
  constructor(o2) {
    super(o2), this.row = 0, this.column = 0, this.rows = 1, this.columns = 1;
  }
  equals(o2) {
    return null != o2 && this.row === o2.row && this.rows === o2.rows && this.column === o2.column && this.columns === o2.columns;
  }
};
e([y({
  type: Number,
  nonNullable: true,
  json: {
    read: false,
    write: false
  }
})], t.prototype, "row", void 0), e([y({
  type: Number,
  nonNullable: true,
  json: {
    read: false,
    write: false
  }
})], t.prototype, "column", void 0), e([y({
  type: Number,
  nonNullable: true,
  json: {
    read: false,
    write: false
  }
})], t.prototype, "rows", void 0), e([y({
  type: Number,
  nonNullable: true,
  json: {
    read: false,
    write: false
  }
})], t.prototype, "columns", void 0), t = e([a2("esri.CameraLayout")], t);
var l2 = t;

// ../../../node_modules/@arcgis/core/Camera.js
var y2 = class extends i(f) {
  constructor(...o2) {
    super(...o2), this.position = new _([0, 0, 0]), this.heading = 0, this.tilt = 0, this.fov = 55, this.layout = new l2();
  }
  normalizeCtorArgs(o2, r2, t2, e3) {
    if (o2 && "object" == typeof o2 && ("x" in o2 || Array.isArray(o2))) {
      const s2 = {
        position: o2
      };
      return null != r2 && (s2.heading = r2), null != t2 && (s2.tilt = t2), null != e3 && (s2.fov = e3), s2;
    }
    return o2;
  }
  writePosition(o2, r2, t2, e3) {
    const s2 = o2.clone();
    s2.x = a(o2.x || 0), s2.y = a(o2.y || 0), s2.z = o2.hasZ ? a(o2.z || 0) : o2.z, r2[t2] = s2.write({}, e3);
  }
  readPosition(o2, r2) {
    const t2 = new _();
    return t2.read(o2, r2), t2.x = a(t2.x || 0), t2.y = a(t2.y || 0), t2.z = t2.hasZ ? a(t2.z || 0) : t2.z, t2;
  }
  equals(o2) {
    return null != o2 && this.tilt === o2.tilt && this.heading === o2.heading && this.fov === o2.fov && this.position.equals(o2.position) && this.layout.equals(o2.layout);
  }
};
e([y({
  type: _,
  json: {
    write: {
      isRequired: true
    }
  }
})], y2.prototype, "position", void 0), e([r("position")], y2.prototype, "writePosition", null), e([o("position")], y2.prototype, "readPosition", null), e([y({
  type: Number,
  nonNullable: true,
  json: {
    write: {
      isRequired: true
    }
  }
}), s((o2) => a3.normalize(a(o2)))], y2.prototype, "heading", void 0), e([y({
  type: Number,
  nonNullable: true,
  json: {
    write: {
      isRequired: true
    }
  }
}), s((o2) => e2(a(o2), -180, 180))], y2.prototype, "tilt", void 0), e([y({
  type: Number,
  nonNullable: true,
  json: {
    read: false,
    write: false
  }
})], y2.prototype, "fov", void 0), e([y({
  type: l2,
  nonNullable: true,
  json: {
    read: false,
    write: false
  }
})], y2.prototype, "layout", void 0), y2 = e([a2("esri.Camera")], y2);
var d = y2;

export {
  d
};
//# sourceMappingURL=chunk-Z3B4X2BG.js.map
