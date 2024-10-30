import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  j
} from "./chunk-4X2M4YSF.js";
import {
  i,
  l
} from "./chunk-DL2B6IFJ.js";
import {
  h
} from "./chunk-BGLJ2FAH.js";
import {
  _
} from "./chunk-TIRJMGGG.js";
import {
  u2 as u
} from "./chunk-4AZPIP7K.js";
import {
  e
} from "./chunk-NUICEVIH.js";
import {
  S
} from "./chunk-NXK752PZ.js";
import {
  y
} from "./chunk-UVNLCXWD.js";
import {
  a3 as a
} from "./chunk-UDMPWVPF.js";
import {
  o
} from "./chunk-6WGE3IUL.js";

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
//# sourceMappingURL=chunk-7VRJFZQR.js.map
