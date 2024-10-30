import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  s2 as s
} from "./chunk-FD6MY73F.js";
import {
  o
} from "./chunk-BQY5LM3B.js";
import {
  f as f2
} from "./chunk-ZDRQSPB6.js";
import {
  r
} from "./chunk-BCCDYCTQ.js";
import {
  n
} from "./chunk-Y2HYKTTT.js";
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
  a3 as a,
  g2 as g
} from "./chunk-UDMPWVPF.js";

// ../../../node_modules/@arcgis/core/rest/networks/support/TraceLocation.js
var i = new n({
  startingPoint: "starting-point",
  barrier: "barrier"
});
var p = class extends f {
  constructor(r2) {
    super(r2), this.globalId = null, this.isFilterBarrier = false, this.percentAlong = null, this.terminalId = null, this.type = null;
  }
};
e([y({
  type: String,
  json: {
    write: true
  }
})], p.prototype, "globalId", void 0), e([y({
  type: Boolean,
  json: {
    write: true
  }
})], p.prototype, "isFilterBarrier", void 0), e([y({
  type: Number,
  json: {
    write: true
  }
})], p.prototype, "percentAlong", void 0), e([y({
  type: Number,
  json: {
    write: true
  }
})], p.prototype, "terminalId", void 0), e([y({
  type: i.apiValues,
  json: {
    type: i.jsonValues,
    read: {
      reader: i.read,
      source: "traceLocationType"
    },
    write: {
      writer: i.write,
      target: "traceLocationType"
    }
  }
})], p.prototype, "type", void 0), p = e([a("esri.rest.networks.support.TraceLocation")], p);
var a2 = p;

// ../../../node_modules/@arcgis/core/rest/networks/support/TraceParameters.js
var l;
var u = l = class extends f {
  static from(t) {
    return g(l, t);
  }
  constructor(t) {
    super(t), this.namedTraceConfigurationGlobalId = null, this.gdbVersion = null, this.traceLocations = [], this.moment = null, this.outSpatialReference = null, this.traceConfiguration = null, this.resultTypes = null, this.traceType = null;
  }
  writeOutSR(t, o2, r2) {
    if (null != t) {
      const {
        wkid: e2
      } = t;
      o2[r2] = JSON.stringify({
        wkid: e2
      });
    }
  }
};
e([y({
  type: String,
  json: {
    read: {
      source: "traceConfigurationGlobalId"
    },
    write: {
      target: "traceConfigurationGlobalId"
    }
  }
})], u.prototype, "namedTraceConfigurationGlobalId", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], u.prototype, "gdbVersion", void 0), e([y({
  type: [a2],
  json: {
    write: true
  }
})], u.prototype, "traceLocations", void 0), e([y({
  type: Date,
  json: {
    type: Number,
    write: {
      writer: (t, o2) => {
        o2.moment = t ? t.getTime() : null;
      }
    }
  }
})], u.prototype, "moment", void 0), e([y({
  type: f2,
  json: {
    write: {
      allowNull: true,
      target: "outSR"
    }
  }
})], u.prototype, "outSpatialReference", void 0), e([r("outSpatialReference")], u.prototype, "writeOutSR", null), e([y({
  type: s,
  json: {
    write: true
  }
})], u.prototype, "traceConfiguration", void 0), e([y({
  type: [Object],
  json: {
    write: true
  }
})], u.prototype, "resultTypes", void 0), e([y({
  type: o.apiValues,
  json: {
    type: o.jsonValues,
    read: o.read,
    write: o.write
  }
})], u.prototype, "traceType", void 0), u = l = e([a("esri.rest.networks.support.TraceParameters")], u);
var m = u;

export {
  a2 as a,
  m
};
//# sourceMappingURL=chunk-AG7VLM4K.js.map
