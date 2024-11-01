import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  a as a3,
  p
} from "./chunk-WVSTX2NW.js";
import {
  u
} from "./chunk-KUBMHTYA.js";
import {
  o
} from "./chunk-6EIBUVMG.js";
import {
  i,
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
  N,
  a3 as a2
} from "./chunk-UDMPWVPF.js";
import {
  a
} from "./chunk-6JFGZTLU.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/renderers/support/pointCloud/ColorModulation.js
var s;
var i2 = s = class extends f {
  constructor() {
    super(...arguments), this.field = null, this.minValue = 0, this.maxValue = 255;
  }
  clone() {
    return new s({
      field: this.field,
      minValue: this.minValue,
      maxValue: this.maxValue
    });
  }
};
e([y({
  type: String,
  json: {
    write: true
  }
})], i2.prototype, "field", void 0), e([y({
  type: Number,
  nonNullable: true,
  json: {
    write: true
  }
})], i2.prototype, "minValue", void 0), e([y({
  type: Number,
  nonNullable: true,
  json: {
    write: true
  }
})], i2.prototype, "maxValue", void 0), i2 = s = e([a2("esri.renderers.support.pointCloud.ColorModulation")], i2);
var l = i2;

// ../../../node_modules/@arcgis/core/renderers/support/pointCloud/PointSizeAlgorithm.js
var p2 = new n({
  pointCloudFixedSizeAlgorithm: "fixed-size",
  pointCloudSplatAlgorithm: "splat"
});
var i3 = class extends f {
};
e([y({
  type: p2.apiValues,
  readOnly: true,
  nonNullable: true,
  json: {
    type: p2.jsonValues,
    read: false,
    write: p2.write
  }
})], i3.prototype, "type", void 0), i3 = e([a2("esri.renderers.support.pointCloud.PointSizeAlgorithm")], i3);
var a4 = i3;

// ../../../node_modules/@arcgis/core/renderers/support/pointCloud/PointSizeFixedSizeAlgorithm.js
var i4;
var p3 = i4 = class extends a4 {
  constructor() {
    super(...arguments), this.type = "fixed-size", this.size = 0, this.useRealWorldSymbolSizes = null;
  }
  clone() {
    return new i4({
      size: this.size,
      useRealWorldSymbolSizes: this.useRealWorldSymbolSizes
    });
  }
};
e([o({
  pointCloudFixedSizeAlgorithm: "fixed-size"
})], p3.prototype, "type", void 0), e([y({
  type: Number,
  nonNullable: true,
  json: {
    write: true
  }
})], p3.prototype, "size", void 0), e([y({
  type: Boolean,
  json: {
    write: true
  }
})], p3.prototype, "useRealWorldSymbolSizes", void 0), p3 = i4 = e([a2("esri.renderers.support.pointCloud.PointSizeFixedSizeAlgorithm")], p3);
var l2 = p3;

// ../../../node_modules/@arcgis/core/renderers/support/pointCloud/PointSizeSplatAlgorithm.js
var p4;
var c = p4 = class extends a4 {
  constructor() {
    super(...arguments), this.type = "splat", this.scaleFactor = 1;
  }
  clone() {
    return new p4({
      scaleFactor: this.scaleFactor
    });
  }
};
e([o({
  pointCloudSplatAlgorithm: "splat"
})], c.prototype, "type", void 0), e([y({
  type: Number,
  value: 1,
  nonNullable: true,
  json: {
    write: true
  }
})], c.prototype, "scaleFactor", void 0), c = p4 = e([a2("esri.renderers.support.pointCloud.PointSizeSplatAlgorithm")], c);
var a5 = c;

// ../../../node_modules/@arcgis/core/renderers/support/pointCloud/pointSizeAlgorithmTypeUtils.js
var e2 = {
  key: "type",
  base: a4,
  typeMap: {
    "fixed-size": l2,
    splat: a5
  }
};

// ../../../node_modules/@arcgis/core/renderers/PointCloudRenderer.js
var u2 = i()({
  pointCloudClassBreaksRenderer: "point-cloud-class-breaks",
  pointCloudRGBRenderer: "point-cloud-rgb",
  pointCloudStretchRenderer: "point-cloud-stretch",
  pointCloudUniqueValueRenderer: "point-cloud-unique-value"
});
var c2 = class extends f {
  constructor(o2) {
    super(o2), this.type = void 0, this.pointSizeAlgorithm = null, this.colorModulation = null, this.pointsPerInch = 10;
  }
  clone() {
    return console.warn(".clone() is not implemented for " + this.declaredClass), null;
  }
  cloneProperties() {
    return {
      pointSizeAlgorithm: a(this.pointSizeAlgorithm),
      colorModulation: a(this.colorModulation),
      pointsPerInch: a(this.pointsPerInch)
    };
  }
};
e([y({
  type: u2.apiValues,
  readOnly: true,
  nonNullable: true,
  json: {
    type: u2.jsonValues,
    read: false,
    write: u2.write
  }
})], c2.prototype, "type", void 0), e([y({
  types: e2,
  json: {
    write: true
  }
})], c2.prototype, "pointSizeAlgorithm", void 0), e([y({
  type: l,
  json: {
    write: true
  }
})], c2.prototype, "colorModulation", void 0), e([y({
  json: {
    write: true
  },
  nonNullable: true,
  type: Number
})], c2.prototype, "pointsPerInch", void 0), c2 = e([a2("esri.renderers.PointCloudRenderer")], c2), function(o2) {
  o2.fieldTransformTypeKebabDict = new n({
    none: "none",
    lowFourBit: "low-four-bit",
    highFourBit: "high-four-bit",
    absoluteValue: "absolute-value",
    moduloTen: "modulo-ten"
  });
}(c2 || (c2 = {}));
var a6 = c2;

// ../../../node_modules/@arcgis/core/renderers/support/pointCloud/ColorClassBreakInfo.js
var a7;
var p5 = a7 = class extends f {
  constructor() {
    super(...arguments), this.description = null, this.label = null, this.minValue = 0, this.maxValue = 0, this.color = null;
  }
  clone() {
    return new a7({
      description: this.description,
      label: this.label,
      minValue: this.minValue,
      maxValue: this.maxValue,
      color: a(this.color)
    });
  }
};
e([y({
  type: String,
  json: {
    write: true
  }
})], p5.prototype, "description", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], p5.prototype, "label", void 0), e([y({
  type: Number,
  json: {
    read: {
      source: "classMinValue"
    },
    write: {
      target: "classMinValue"
    }
  }
})], p5.prototype, "minValue", void 0), e([y({
  type: Number,
  json: {
    read: {
      source: "classMaxValue"
    },
    write: {
      target: "classMaxValue"
    }
  }
})], p5.prototype, "maxValue", void 0), e([y({
  type: u,
  json: {
    type: [N],
    write: true
  }
})], p5.prototype, "color", void 0), p5 = a7 = e([a2("esri.renderers.support.pointCloud.ColorClassBreakInfo")], p5);
var c3 = p5;

// ../../../node_modules/@arcgis/core/renderers/PointCloudClassBreaksRenderer.js
var n2;
var a8 = n2 = class extends a6 {
  constructor(o2) {
    super(o2), this.type = "point-cloud-class-breaks", this.field = null, this.legendOptions = null, this.fieldTransformType = null, this.colorClassBreakInfos = null;
  }
  clone() {
    return new n2(__spreadProps(__spreadValues({}, this.cloneProperties()), {
      field: this.field,
      fieldTransformType: this.fieldTransformType,
      colorClassBreakInfos: a(this.colorClassBreakInfos),
      legendOptions: a(this.legendOptions)
    }));
  }
};
e([o({
  pointCloudClassBreaksRenderer: "point-cloud-class-breaks"
})], a8.prototype, "type", void 0), e([y({
  json: {
    write: true
  },
  type: String
})], a8.prototype, "field", void 0), e([y({
  type: p,
  json: {
    write: true
  }
})], a8.prototype, "legendOptions", void 0), e([y({
  type: a6.fieldTransformTypeKebabDict.apiValues,
  json: {
    type: a6.fieldTransformTypeKebabDict.jsonValues,
    read: a6.fieldTransformTypeKebabDict.read,
    write: a6.fieldTransformTypeKebabDict.write
  }
})], a8.prototype, "fieldTransformType", void 0), e([y({
  type: [c3],
  json: {
    write: true
  }
})], a8.prototype, "colorClassBreakInfos", void 0), a8 = n2 = e([a2("esri.renderers.PointCloudClassBreaksRenderer")], a8);
var d = a8;

// ../../../node_modules/@arcgis/core/renderers/PointCloudStretchRenderer.js
var l3;
var d2 = l3 = class extends a6 {
  constructor(e3) {
    super(e3), this.type = "point-cloud-stretch", this.field = null, this.legendOptions = null, this.fieldTransformType = null, this.stops = null;
  }
  clone() {
    return new l3(__spreadProps(__spreadValues({}, this.cloneProperties()), {
      field: a(this.field),
      fieldTransformType: a(this.fieldTransformType),
      stops: a(this.stops),
      legendOptions: a(this.legendOptions)
    }));
  }
};
e([o({
  pointCloudStretchRenderer: "point-cloud-stretch"
})], d2.prototype, "type", void 0), e([y({
  json: {
    write: true
  },
  type: String
})], d2.prototype, "field", void 0), e([y({
  type: p,
  json: {
    write: true
  }
})], d2.prototype, "legendOptions", void 0), e([y({
  type: a6.fieldTransformTypeKebabDict.apiValues,
  json: {
    type: a6.fieldTransformTypeKebabDict.jsonValues,
    read: a6.fieldTransformTypeKebabDict.read,
    write: a6.fieldTransformTypeKebabDict.write
  }
})], d2.prototype, "fieldTransformType", void 0), e([y({
  type: [a3],
  json: {
    write: true
  }
})], d2.prototype, "stops", void 0), d2 = l3 = e([a2("esri.renderers.PointCloudStretchRenderer")], d2);
var a9 = d2;

// ../../../node_modules/@arcgis/core/renderers/support/pointCloud/ColorUniqueValueInfo.js
var l4;
var c4 = l4 = class extends f {
  constructor() {
    super(...arguments), this.description = null, this.label = null, this.values = null, this.color = null;
  }
  clone() {
    return new l4({
      description: this.description,
      label: this.label,
      values: a(this.values),
      color: a(this.color)
    });
  }
};
e([y({
  type: String,
  json: {
    write: true
  }
})], c4.prototype, "description", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], c4.prototype, "label", void 0), e([y({
  type: [String],
  json: {
    write: true
  }
})], c4.prototype, "values", void 0), e([y({
  type: u,
  json: {
    type: [N],
    write: true
  }
})], c4.prototype, "color", void 0), c4 = l4 = e([a2("esri.renderers.support.pointCloud.ColorUniqueValueInfo")], c4);
var n3 = c4;

// ../../../node_modules/@arcgis/core/renderers/PointCloudUniqueValueRenderer.js
var l5;
var u3 = l5 = class extends a6 {
  constructor(e3) {
    super(e3), this.type = "point-cloud-unique-value", this.field = null, this.fieldTransformType = null, this.colorUniqueValueInfos = null, this.legendOptions = null;
  }
  clone() {
    return new l5(__spreadProps(__spreadValues({}, this.cloneProperties()), {
      field: a(this.field),
      fieldTransformType: a(this.fieldTransformType),
      colorUniqueValueInfos: a(this.colorUniqueValueInfos),
      legendOptions: a(this.legendOptions)
    }));
  }
};
e([o({
  pointCloudUniqueValueRenderer: "point-cloud-unique-value"
})], u3.prototype, "type", void 0), e([y({
  json: {
    write: true
  },
  type: String
})], u3.prototype, "field", void 0), e([y({
  type: a6.fieldTransformTypeKebabDict.apiValues,
  json: {
    type: a6.fieldTransformTypeKebabDict.jsonValues,
    read: a6.fieldTransformTypeKebabDict.read,
    write: a6.fieldTransformTypeKebabDict.write
  }
})], u3.prototype, "fieldTransformType", void 0), e([y({
  type: [n3],
  json: {
    write: true
  }
})], u3.prototype, "colorUniqueValueInfos", void 0), e([y({
  type: p,
  json: {
    write: true
  }
})], u3.prototype, "legendOptions", void 0), u3 = l5 = e([a2("esri.renderers.PointCloudUniqueValueRenderer")], u3);
var a10 = u3;

export {
  a6 as a,
  d,
  a9 as a2,
  a10 as a3
};
//# sourceMappingURL=chunk-MTXTLDZX.js.map
