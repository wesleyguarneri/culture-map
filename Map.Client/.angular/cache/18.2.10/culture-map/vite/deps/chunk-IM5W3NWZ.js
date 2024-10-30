import {
  o
} from "./chunk-F35MWZH7.js";
import {
  f as f2,
  i
} from "./chunk-YA5CTHMT.js";
import {
  p
} from "./chunk-S3IO7V4Q.js";
import {
  d2 as d
} from "./chunk-JJS7PR2U.js";
import {
  U
} from "./chunk-SYATLP3H.js";
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
  a3 as a,
  b
} from "./chunk-DDYVXG4F.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/rest/support/ProjectParameters.js
var a2 = class extends f {
  constructor(r) {
    super(r), this.geometries = [], this.outSpatialReference = null, this.transformation = null, this.transformForward = null;
  }
  toJSON() {
    const r = this.geometries.map((r2) => r2.toJSON()), o2 = this.geometries[0], t = {};
    return t.outSR = d(this.outSpatialReference), t.inSR = d(o2.spatialReference), t.geometries = JSON.stringify({
      geometryType: p(o2),
      geometries: r
    }), this.transformation && (t.transformation = this.transformation.wkid || JSON.stringify(this.transformation)), null != this.transformForward && (t.transformForward = this.transformForward), t;
  }
};
e([y()], a2.prototype, "geometries", void 0), e([y({
  json: {
    read: {
      source: "outSR"
    }
  }
})], a2.prototype, "outSpatialReference", void 0), e([y()], a2.prototype, "transformation", void 0), e([y()], a2.prototype, "transformForward", void 0), a2 = e([a("esri.rest.support.ProjectParameters")], a2);
var p2 = a2;

// ../../../node_modules/@arcgis/core/rest/geometryService/project.js
var i2 = b(p2);
function n(o2, m, n2) {
  return __async(this, null, function* () {
    m = i2(m);
    const u = f2(o2), c = __spreadValues(__spreadProps(__spreadValues({}, u.query), {
      f: "json"
    }), m.toJSON()), j = m.outSpatialReference, a3 = p(m.geometries[0]), f3 = i(c, n2);
    return U(u.path + "/project", f3).then(({
      data: {
        geometries: r
      }
    }) => o(r, a3, j));
  });
}

export {
  p2 as p,
  n
};
//# sourceMappingURL=chunk-IM5W3NWZ.js.map
