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

// ../../../node_modules/@arcgis/core/rest/networks/support/ValidateNetworkTopologyResult.js
var s = class extends f {
  constructor(e2) {
    super(e2), this.moment = null, this.fullUpdate = false, this.validateErrorsCreated = false, this.dirtyAreaCount = null, this.exceededTransferLimit = null, this.serviceEdits = null, this.discoveredSubnetworks = null;
  }
};
e([y({
  type: Date,
  json: {
    type: Number,
    write: {
      writer: (e2, t) => {
        t.moment = e2 ? e2.getTime() : null;
      }
    }
  }
})], s.prototype, "moment", void 0), e([y({
  type: Boolean,
  json: {
    write: true
  }
})], s.prototype, "fullUpdate", void 0), e([y({
  type: Boolean,
  json: {
    write: true
  }
})], s.prototype, "validateErrorsCreated", void 0), e([y({
  type: Number,
  json: {
    write: true
  }
})], s.prototype, "dirtyAreaCount", void 0), e([y({
  type: Boolean,
  json: {
    write: true
  }
})], s.prototype, "exceededTransferLimit", void 0), e([y({
  type: [Object],
  json: {
    write: true
  }
})], s.prototype, "serviceEdits", void 0), e([y({
  type: [Object],
  json: {
    write: true
  }
})], s.prototype, "discoveredSubnetworks", void 0), s = e([a("esri.rest.networks.support.ValidateNetworkTopologyResult")], s);
var i = s;

export {
  i
};
//# sourceMappingURL=chunk-BNB2X2FJ.js.map
