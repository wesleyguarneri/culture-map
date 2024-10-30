import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  p
} from "./chunk-4YRHCFPB.js";
import {
  i
} from "./chunk-BQY5LM3B.js";
import {
  m2 as m
} from "./chunk-MRPCXIVS.js";
import {
  o
} from "./chunk-DCXDXGAR.js";
import {
  r
} from "./chunk-BCCDYCTQ.js";
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

// ../../../node_modules/@arcgis/core/rest/networks/support/Association.js
var p2 = class extends f {
  constructor(o2) {
    super(o2), this.globalId = null, this.associationType = null, this.fromNetworkElement = null, this.toNetworkElement = null, this.geometry = null, this.errorMessage = null, this.percentAlong = null, this.errorCode = null, this.isContentVisible = null, this.status = null;
  }
  readFromNetworkElement(o2, e2) {
    return new p({
      globalId: e2.fromGlobalId,
      networkSourceId: e2.fromNetworkSourceId,
      terminalId: e2.fromTerminalId
    });
  }
  writeFromNetworkElement(o2, e2) {
    o2 && (e2.fromGlobalId = o2.globalId, e2.fromNetworkSourceId = o2.networkSourceId, e2.fromTerminalId = o2.terminalId);
  }
  readToNetworkElement(o2, e2) {
    return new p({
      globalId: e2.toGlobalId,
      networkSourceId: e2.toNetworkSourceId,
      terminalId: e2.toTerminalId
    });
  }
  writeToNetworkElement(o2, e2) {
    o2 && (e2.toGlobalId = o2.globalId, e2.toNetworkSourceId = o2.networkSourceId, e2.toTerminalId = o2.terminalId);
  }
};
e([y({
  type: String,
  json: {
    write: true
  }
})], p2.prototype, "globalId", void 0), e([y({
  type: i.apiValues,
  json: {
    type: i.jsonValues,
    read: i.read,
    write: i.write
  }
})], p2.prototype, "associationType", void 0), e([y({
  type: p,
  json: {
    write: {
      target: {
        fromGlobalId: {
          type: String
        },
        fromNetworkSourceId: {
          type: Number
        },
        fromTerminalId: {
          type: Number
        }
      }
    },
    read: {
      source: ["fromGlobalId", "fromNetworkSourceId", "fromTerminalId"]
    }
  }
})], p2.prototype, "fromNetworkElement", void 0), e([o("fromNetworkElement")], p2.prototype, "readFromNetworkElement", null), e([r("fromNetworkElement")], p2.prototype, "writeFromNetworkElement", null), e([y({
  type: p,
  json: {
    write: {
      target: {
        toGlobalId: {
          type: String
        },
        toNetworkSourceId: {
          type: Number
        },
        toTerminalId: {
          type: Number
        }
      }
    },
    read: {
      source: ["toGlobalId", "toNetworkSourceId", "toTerminalId"]
    }
  }
})], p2.prototype, "toNetworkElement", void 0), e([o("toNetworkElement")], p2.prototype, "readToNetworkElement", null), e([r("toNetworkElement")], p2.prototype, "writeToNetworkElement", null), e([y({
  type: m,
  json: {
    write: true
  }
})], p2.prototype, "geometry", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], p2.prototype, "errorMessage", void 0), e([y({
  type: Number,
  json: {
    write: true
  }
})], p2.prototype, "percentAlong", void 0), e([y({
  type: Number,
  json: {
    write: true
  }
})], p2.prototype, "errorCode", void 0), e([y({
  type: Boolean,
  json: {
    write: true
  }
})], p2.prototype, "isContentVisible", void 0), e([y({
  type: Number,
  json: {
    write: true
  }
})], p2.prototype, "status", void 0), p2 = e([a("esri.rest.networks.support.Association")], p2);
var d = p2;

export {
  d
};
//# sourceMappingURL=chunk-D2HCPUEP.js.map
