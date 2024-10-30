import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  A,
  a as a3
} from "./chunk-5O46LCZR.js";
import {
  a as a2
} from "./chunk-CSATD3VX.js";
import {
  V
} from "./chunk-U3RHUXYK.js";
import {
  e
} from "./chunk-NUICEVIH.js";
import {
  y
} from "./chunk-UVNLCXWD.js";
import {
  a3 as a,
  s3 as s
} from "./chunk-UDMPWVPF.js";

// ../../../node_modules/@arcgis/core/layers/buildingSublayers/BuildingGroupSublayer.js
var a4;
var l = {
  type: V,
  readOnly: true,
  json: {
    origins: {
      service: {
        read: {
          source: "sublayers",
          reader: p
        }
      }
    },
    read: false
  }
};
function p(r, o, t) {
  if (r && Array.isArray(r)) return new V(r.map((r2) => {
    const e2 = y2(r2);
    if (e2) {
      const o2 = new e2();
      return o2.read(r2, t), o2;
    }
    return t?.messages && r2 && t.messages.push(new s("building-scene-layer:unsupported-sublayer-type", "Building scene sublayer of type '" + (r2.type || "unknown") + "' are not supported", {
      definition: r2,
      context: t
    })), null;
  }));
}
var c = a4 = class extends a3 {
  constructor(r) {
    super(r), this.type = "building-group", this.listMode = "show", this.sublayers = null;
  }
  loadAll() {
    return a2(this, (r) => a4.forEachSublayer(this.sublayers, (e2) => {
      "building-group" !== e2.type && r(e2);
    }));
  }
};
function y2(r) {
  return "group" === r.layerType ? c : A;
}
e([y({
  type: ["hide", "show", "hide-children"],
  json: {
    write: true
  }
})], c.prototype, "listMode", void 0), e([y(l)], c.prototype, "sublayers", void 0), c = a4 = e([a("esri.layers.buildingSublayers.BuildingGroupSublayer")], c), function(r) {
  function e2(r2, o) {
    r2.forEach((r3) => {
      o(r3), "building-group" === r3.type && e2(r3.sublayers, o);
    });
  }
  r.sublayersProperty = l, r.readSublayers = p, r.forEachSublayer = e2;
}(c || (c = {}));
var d = c;

export {
  d
};
//# sourceMappingURL=chunk-XQ74BGQA.js.map
