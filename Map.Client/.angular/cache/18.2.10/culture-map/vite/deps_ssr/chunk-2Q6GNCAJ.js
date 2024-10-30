import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  s,
  s2
} from "./chunk-FD6MY73F.js";
import {
  o as o2
} from "./chunk-BQY5LM3B.js";
import {
  m
} from "./chunk-7TBQUMV3.js";
import {
  o
} from "./chunk-DCXDXGAR.js";
import {
  e
} from "./chunk-NUICEVIH.js";
import {
  y
} from "./chunk-UVNLCXWD.js";
import {
  a3 as a
} from "./chunk-UDMPWVPF.js";

// ../../../node_modules/@arcgis/core/networks/support/NamedTraceConfiguration.js
var p = class extends m {
  constructor(r) {
    super(r), this.globalId = null, this.title = null, this.traceConfiguration = null, this.creationDate = null, this.creator = null, this.description = null, this.minStartingPoints = null, this.resultTypes = [], this.tags = [], this.traceType = null;
  }
  readTraceConfiguration(r, e2) {
    return void 0 !== r.tierName ? s2.fromJSON(r) : s.fromJSON(r);
  }
};
e([y({
  type: String,
  nonNullable: true,
  json: {
    origins: {
      "web-map": {
        read: {
          source: "id"
        },
        write: {
          target: "id",
          isRequired: true
        }
      },
      service: {
        read: {
          source: "globalId"
        },
        write: {
          target: "globalId",
          isRequired: true
        }
      }
    },
    read: false
  }
})], p.prototype, "globalId", void 0), e([y({
  type: String,
  nonNullable: true,
  json: {
    origins: {
      "web-map": {
        read: {
          source: "title"
        },
        write: {
          target: "title",
          isRequired: true
        }
      },
      service: {
        read: {
          source: "name"
        },
        write: {
          target: "name",
          isRequired: true
        }
      }
    },
    read: false
  }
})], p.prototype, "title", void 0), e([y({
  type: s,
  json: {
    origins: {
      service: {
        read: true,
        write: true
      }
    },
    read: false
  }
})], p.prototype, "traceConfiguration", void 0), e([o("service", "traceConfiguration")], p.prototype, "readTraceConfiguration", null), e([y({
  type: Date,
  json: {
    origins: {
      service: {
        read: true,
        write: true
      }
    },
    read: false
  }
})], p.prototype, "creationDate", void 0), e([y({
  type: String,
  json: {
    origins: {
      service: {
        read: true,
        write: true
      }
    },
    read: false
  }
})], p.prototype, "creator", void 0), e([y({
  type: String,
  json: {
    origins: {
      service: {
        read: true,
        write: true
      }
    },
    read: false
  }
})], p.prototype, "description", void 0), e([y({
  type: ["none", "one", "many"],
  json: {
    origins: {
      service: {
        read: {
          source: "minNumStartingPoints"
        },
        write: {
          target: "minNumStartingPoints"
        }
      }
    },
    read: false
  }
})], p.prototype, "minStartingPoints", void 0), e([y({
  json: {
    origins: {
      service: {
        read: true,
        write: true
      }
    },
    read: false
  }
})], p.prototype, "resultTypes", void 0), e([y({
  type: [String],
  json: {
    origins: {
      service: {
        read: true,
        write: true
      }
    },
    read: false
  }
})], p.prototype, "tags", void 0), e([y({
  type: o2.apiValues,
  json: {
    type: o2.jsonValues,
    origins: {
      service: {
        read: o2.read,
        write: o2.write
      }
    },
    read: false
  }
})], p.prototype, "traceType", void 0), p = e([a("esri.networks.support.NamedTraceConfiguration")], p);
var d = p;

export {
  d
};
//# sourceMappingURL=chunk-2Q6GNCAJ.js.map
