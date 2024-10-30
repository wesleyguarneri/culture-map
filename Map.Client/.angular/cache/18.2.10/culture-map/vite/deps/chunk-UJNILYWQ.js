import {
  c,
  m,
  p
} from "./chunk-AMEKD7JM.js";
import {
  Ze
} from "./chunk-B7GRWOZI.js";
import {
  s as s2
} from "./chunk-NKCPFCP3.js";
import {
  n
} from "./chunk-V5C6HSAM.js";
import {
  e
} from "./chunk-4Z5SGKRM.js";
import {
  y
} from "./chunk-7CJXZOFG.js";
import {
  a3 as a
} from "./chunk-DDYVXG4F.js";
import {
  s2 as s
} from "./chunk-WYIDUUN2.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/layers/OrientedImageryLayer.js
function l(e2, t, r) {
  return {
    name: `orientedImageryProperties.${e2}`,
    write: !t || {
      target: `orientedImageryProperties.${e2}`,
      writer: t
    },
    origins: {
      service: {
        name: `orientedImageryInfo.orientedImageryProperties.${e2}`,
        write: t,
        read: r
      }
    }
  };
}
var m2 = class extends Ze {
  constructor() {
    super(...arguments), this.cameraHeading = null, this.cameraHeight = null, this.cameraPitch = null, this.cameraRoll = null, this.coveragePercent = null, this.demPathPrefix = null, this.demPathSuffix = null, this.depthImagePathPrefix = null, this.depthImagePathSuffix = null, this.elevationSource = null, this.farDistance = null, this.geometryType = "point", this.horizontalFieldOfView = null, this.horizontalMeasurementUnit = null, this.imagePathPrefix = null, this.imagePathSuffix = null, this.imageRotation = null, this.maximumDistance = null, this.nearDistance = null, this.operationalLayerType = "OrientedImageryLayer", this.orientationAccuracy = null, this.orientedImageryType = null, this.supportedSourceTypes = /* @__PURE__ */ new Set(["Oriented Imagery Layer"]), this.type = "oriented-imagery", this.timeIntervalUnit = null, this.verticalFieldOfView = null, this.verticalMeasurementUnit = null, this.videoPathPrefix = null, this.videoPathSuffix = null;
  }
  get effectiveElevationSource() {
    const {
      elevationSource: e2,
      demPathPrefix: t,
      demPathSuffix: r
    } = this;
    return c(e2, t, r);
  }
  findFirstValidLayerId(e2) {
    return e2.layers?.find((e3) => this.supportedSourceTypes.has(e3.type))?.id;
  }
  _verifySource() {
    if (super._verifySource(), "point" !== this.geometryType) throw new s("oriented-imagery-layer:invalid-geometry-type", "OrientedImageryLayer only supports point geometry type");
  }
};
e([y({
  type: Number,
  json: l("cameraHeading")
})], m2.prototype, "cameraHeading", void 0), e([y({
  type: Number,
  json: l("cameraHeight")
})], m2.prototype, "cameraHeight", void 0), e([y({
  type: Number,
  json: l("cameraPitch")
})], m2.prototype, "cameraPitch", void 0), e([y({
  type: Number,
  json: l("cameraRoll")
})], m2.prototype, "cameraRoll", void 0), e([y({
  type: Number,
  json: l("coveragePercent")
})], m2.prototype, "coveragePercent", void 0), e([y({
  type: String,
  json: l("demPathPrefix")
})], m2.prototype, "demPathPrefix", void 0), e([y({
  type: String,
  json: l("demPathSuffix")
})], m2.prototype, "demPathSuffix", void 0), e([y({
  type: String,
  json: l("depthImagePathPrefix")
})], m2.prototype, "depthImagePathPrefix", void 0), e([y({
  type: String,
  json: l("depthImagePathSuffix")
})], m2.prototype, "depthImagePathSuffix", void 0), e([y({
  type: Object,
  json: l("elevationSource")
})], m2.prototype, "elevationSource", void 0), e([y()], m2.prototype, "effectiveElevationSource", null), e([y({
  type: Number,
  json: l("farDistance")
})], m2.prototype, "farDistance", void 0), e([y({
  json: {
    write: true
  }
})], m2.prototype, "geometryType", void 0), e([y({
  type: Number,
  json: l("horizontalFieldOfView")
})], m2.prototype, "horizontalFieldOfView", void 0), e([y({
  type: String,
  json: l("horizontalMeasurementUnit")
})], m2.prototype, "horizontalMeasurementUnit", void 0), e([y({
  type: String,
  json: l("imagePathPrefix")
})], m2.prototype, "imagePathPrefix", void 0), e([y({
  type: String,
  json: l("imagePathSuffix")
})], m2.prototype, "imagePathSuffix", void 0), e([y({
  type: Number,
  json: l("imageRotation")
})], m2.prototype, "imageRotation", void 0), e([y({
  type: Number,
  json: l("maximumDistance")
})], m2.prototype, "maximumDistance", void 0), e([y({
  type: Number,
  json: l("nearDistance")
})], m2.prototype, "nearDistance", void 0), e([y({
  type: ["OrientedImageryLayer"]
})], m2.prototype, "operationalLayerType", void 0), e([y({
  json: l("orientationAccuracy", (e2, t) => {
    e2 && (t.orientationAccuracy = e2.join(","));
  })
}), s2((e2) => e2 ? e2.trim().split(",").map(Number) : null)], m2.prototype, "orientationAccuracy", void 0), e([y({
  json: __spreadProps(__spreadValues({}, l("orientedImageryType", p.write, p.read)), {
    type: p.apiValues
  })
})], m2.prototype, "orientedImageryType", void 0), e([y({
  json: {
    read: false
  },
  value: "oriented-imagery",
  readOnly: true
})], m2.prototype, "type", void 0), e([y({
  json: __spreadProps(__spreadValues({}, l("timeIntervalUnit", m.write, m.read)), {
    type: m.apiValues
  })
})], m2.prototype, "timeIntervalUnit", void 0), e([y({
  type: Number,
  json: l("verticalFieldOfView")
})], m2.prototype, "verticalFieldOfView", void 0), e([y({
  json: __spreadProps(__spreadValues({}, l("verticalMeasurementUnit")), {
    type: new n({
      Feet: "feet",
      Meter: "meter"
    }).apiValues
  })
})], m2.prototype, "verticalMeasurementUnit", void 0), e([y({
  type: String,
  json: l("videoPathPrefix")
})], m2.prototype, "videoPathPrefix", void 0), e([y({
  type: String,
  json: l("videoPathSuffix")
})], m2.prototype, "videoPathSuffix", void 0), m2 = e([a("esri.layers.OrientedImageryLayer")], m2);
var u = m2;

export {
  u
};
//# sourceMappingURL=chunk-UJNILYWQ.js.map
