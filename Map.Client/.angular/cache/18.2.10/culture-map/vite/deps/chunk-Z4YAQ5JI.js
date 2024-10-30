import {
  d
} from "./chunk-K2XCQKCC.js";
import {
  e as e2,
  l
} from "./chunk-AJS4B62I.js";
import {
  a as a2
} from "./chunk-UPDWQH75.js";
import {
  c
} from "./chunk-DR5TVNEL.js";
import {
  g
} from "./chunk-DTUSTSEJ.js";
import {
  o
} from "./chunk-NQOJNTB3.js";
import {
  e
} from "./chunk-4Z5SGKRM.js";
import {
  y
} from "./chunk-7CJXZOFG.js";
import {
  a3 as a
} from "./chunk-DDYVXG4F.js";

// ../../../node_modules/@arcgis/core/layers/mixins/TemporalLayer.js
var f = {
  type: Boolean,
  json: {
    read: {
      source: "timeAnimation"
    },
    write: {
      target: "timeAnimation",
      layerContainerTypes: a2
    }
  }
};
var l2 = (p) => {
  let l3 = class extends p {
    constructor() {
      super(...arguments), this.timeExtent = null, this.timeOffset = null, this.useViewTime = true;
    }
    readOffset(e3, t) {
      const r = t.timeInfo.exportOptions;
      if (!r) return null;
      const i = r.timeOffset, s = e2.fromJSON(r.timeOffsetUnits);
      return i && s ? new l({
        value: i,
        unit: s
      }) : null;
    }
    set timeInfo(e3) {
      g(e3, this.fieldsIndex), this._set("timeInfo", e3);
    }
  };
  return e([y({
    type: c,
    json: {
      write: false
    }
  })], l3.prototype, "timeExtent", void 0), e([y({
    type: l
  })], l3.prototype, "timeOffset", void 0), e([o("service", "timeOffset", ["timeInfo.exportOptions"])], l3.prototype, "readOffset", null), e([y({
    value: null,
    type: d,
    json: {
      write: true,
      origins: {
        "web-document": {
          read: false,
          write: false
        },
        "portal-item": {
          read: false,
          write: false
        }
      }
    }
  })], l3.prototype, "timeInfo", null), e([y(f)], l3.prototype, "useViewTime", void 0), l3 = e([a("esri.layers.mixins.TemporalLayer")], l3), l3;
};

export {
  f,
  l2 as l
};
//# sourceMappingURL=chunk-Z4YAQ5JI.js.map
