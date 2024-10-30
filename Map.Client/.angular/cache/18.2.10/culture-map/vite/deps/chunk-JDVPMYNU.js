import {
  j
} from "./chunk-6PFH6TN3.js";
import {
  i,
  l
} from "./chunk-CIW3KHOW.js";
import {
  h
} from "./chunk-HMNBB7ED.js";
import {
  _
} from "./chunk-O7UDKFOW.js";
import {
  u2 as u
} from "./chunk-V6AMQYXE.js";
import {
  e
} from "./chunk-4Z5SGKRM.js";
import {
  S
} from "./chunk-ANKOCGE2.js";
import {
  y
} from "./chunk-7CJXZOFG.js";
import {
  a3 as a
} from "./chunk-DDYVXG4F.js";
import {
  o
} from "./chunk-2MMLMOWS.js";

// ../../../node_modules/@arcgis/core/analysis/featureReferenceUtils.js
function e2(e3, l5) {
  return t(e3) === t(l5);
}
function t(e3) {
  if (null == e3) return null;
  const t2 = null != e3.layer ? e3.layer.id : "";
  let l5 = null;
  return l5 = null != e3.objectId ? e3.objectId : null != e3.layer && "objectIdField" in e3.layer && null != e3.layer.objectIdField && null != e3.attributes ? e3.attributes[e3.layer.objectIdField] : e3.uid, null == l5 ? null : `o-${t2}-${l5}`;
}
var l2 = {
  json: {
    write: {
      writer: r,
      target: {
        "feature.layerId": {
          type: [Number, String]
        },
        "feature.objectId": {
          type: [Number, String]
        }
      }
    },
    origins: {
      "web-scene": {
        read: n
      }
    }
  }
};
function r(e3, t2) {
  null != e3?.layer?.objectIdField && null != e3.attributes && (t2.feature = {
    layerId: e3.layer.id,
    objectId: e3.attributes[e3.layer.objectIdField]
  });
}
function n(e3) {
  if (null != e3.layerId && null != e3.objectId) return {
    uid: null,
    layer: {
      id: e3.layerId,
      objectIdField: "ObjectId"
    },
    attributes: {
      ObjectId: e3.objectId
    }
  };
}

// ../../../node_modules/@arcgis/core/analysis/LineOfSightAnalysisObserver.js
var l3 = class extends u(i(S)) {
  constructor(o2) {
    super(o2), this.position = null, this.elevationInfo = null, this.feature = null;
  }
  equals(o2) {
    return o(this.position, o2.position) && o(this.elevationInfo, o2.elevationInfo) && e2(this.feature, o2.feature);
  }
};
e([y({
  type: _,
  json: {
    write: {
      isRequired: true
    }
  }
})], l3.prototype, "position", void 0), e([y({
  type: h
}), j()], l3.prototype, "elevationInfo", void 0), e([y(l2)], l3.prototype, "feature", void 0), l3 = e([a("esri.analysis.LineOfSightAnalysisObserver")], l3);
var u2 = l3;

// ../../../node_modules/@arcgis/core/analysis/LineOfSightAnalysisTarget.js
var l4 = class extends u(l) {
  constructor(o2) {
    super(o2), this.position = null, this.elevationInfo = null, this.feature = null;
  }
  equals(o2) {
    return o(this.position, o2.position) && o(this.elevationInfo, o2.elevationInfo) && e2(this.feature, o2.feature);
  }
};
e([y({
  type: _
}), j()], l4.prototype, "position", void 0), e([y({
  type: h
}), j()], l4.prototype, "elevationInfo", void 0), e([y(l2)], l4.prototype, "feature", void 0), l4 = e([a("esri.analysis.LineOfSightAnalysisTarget")], l4);
var f = l4;

export {
  t,
  u2 as u,
  f
};
//# sourceMappingURL=chunk-JDVPMYNU.js.map
