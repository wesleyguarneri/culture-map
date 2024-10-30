import {
  i
} from "./chunk-DWASPXVI.js";
import {
  o as o2
} from "./chunk-4ZZRP4MA.js";
import {
  o
} from "./chunk-NQOJNTB3.js";
import {
  n
} from "./chunk-V5C6HSAM.js";
import {
  f
} from "./chunk-V6AMQYXE.js";
import {
  e
} from "./chunk-4Z5SGKRM.js";
import {
  y
} from "./chunk-7CJXZOFG.js";
import {
  N,
  a3 as a2
} from "./chunk-DDYVXG4F.js";
import {
  a
} from "./chunk-WYIDUUN2.js";

// ../../../node_modules/@arcgis/core/layers/support/CodedValue.js
var t;
var p = t = class extends f {
  constructor(o3) {
    super(o3), this.name = null, this.code = null;
  }
  clone() {
    return new t({
      name: this.name,
      code: this.code
    });
  }
};
e([y({
  type: String,
  json: {
    write: true
  }
})], p.prototype, "name", void 0), e([y({
  type: [String, Number],
  json: {
    write: true
  }
})], p.prototype, "code", void 0), p = t = e([a2("esri.layers.support.CodedValue")], p);

// ../../../node_modules/@arcgis/core/layers/support/Domain.js
var c = new n({
  inherited: "inherited",
  codedValue: "coded-value",
  range: "range"
});
var a3 = class extends f {
  constructor(o3) {
    super(o3), this.name = null, this.type = null;
  }
};
e([y({
  type: String,
  json: {
    write: true
  }
})], a3.prototype, "name", void 0), e([o2(c)], a3.prototype, "type", void 0), a3 = e([a2("esri.layers.support.Domain")], a3);
var i2 = a3;

// ../../../node_modules/@arcgis/core/layers/support/CodedValueDomain.js
var d;
var p2 = d = class extends i2 {
  constructor(o3) {
    super(o3), this.codedValues = null, this.type = "coded-value";
  }
  getName(o3) {
    let e2 = null;
    if (this.codedValues) {
      const r = String(o3);
      this.codedValues.some((o4) => (String(o4.code) === r && (e2 = o4.name), !!e2));
    }
    return e2;
  }
  clone() {
    return new d({
      codedValues: a(this.codedValues),
      name: this.name
    });
  }
};
e([y({
  type: [p],
  json: {
    write: true
  }
})], p2.prototype, "codedValues", void 0), e([o2({
  codedValue: "coded-value"
})], p2.prototype, "type", void 0), p2 = d = e([a2("esri.layers.support.CodedValueDomain")], p2);
var i3 = p2;

// ../../../node_modules/@arcgis/core/layers/support/InheritedDomain.js
var t2;
var i4 = t2 = class extends i2 {
  constructor(r) {
    super(r), this.type = "inherited";
  }
  clone() {
    return new t2();
  }
};
e([o2({
  inherited: "inherited"
})], i4.prototype, "type", void 0), i4 = t2 = e([a2("esri.layers.support.InheritedDomain")], i4);
var p3 = i4;

// ../../../node_modules/@arcgis/core/layers/support/RangeDomain.js
var s;
var n2 = s = class extends i2 {
  constructor(e2) {
    super(e2), this.maxValue = null, this.minValue = null, this.type = "range";
  }
  clone() {
    return new s({
      maxValue: this.maxValue,
      minValue: this.minValue,
      name: this.name
    });
  }
};
e([y({
  json: {
    type: [Number],
    read: {
      source: "range",
      reader: (e2, r) => r.range?.[1]
    },
    write: {
      enabled: false,
      overridePolicy() {
        return {
          enabled: null != this.maxValue && null == this.minValue
        };
      },
      target: "range",
      writer(e2, r, o3) {
        r[o3] = [this.minValue || 0, e2];
      }
    }
  }
})], n2.prototype, "maxValue", void 0), e([y({
  json: {
    type: [Number],
    read: {
      source: "range",
      reader: (e2, r) => r.range?.[0]
    },
    write: {
      target: "range",
      writer(e2, r, o3) {
        r[o3] = [e2, this.maxValue || 0];
      }
    }
  }
})], n2.prototype, "minValue", void 0), e([o2({
  range: "range"
})], n2.prototype, "type", void 0), n2 = s = e([a2("esri.layers.support.RangeDomain")], n2);
var i5 = n2;

// ../../../node_modules/@arcgis/core/layers/support/domains.js
var n3 = {
  key: "type",
  base: i2,
  typeMap: {
    range: i5,
    "coded-value": i3,
    inherited: p3
  }
};
function i6(r) {
  if (!r?.type) return null;
  switch (r.type) {
    case "range":
      return i5.fromJSON(r);
    case "codedValue":
      return i3.fromJSON(r);
    case "inherited":
      return p3.fromJSON(r);
  }
  return null;
}

// ../../../node_modules/@arcgis/core/layers/support/Field.js
var u;
var c2 = new n({
  binary: "binary",
  coordinate: "coordinate",
  countOrAmount: "count-or-amount",
  dateAndTime: "date-and-time",
  description: "description",
  locationOrPlaceName: "location-or-place-name",
  measurement: "measurement",
  nameOrTitle: "name-or-title",
  none: "none",
  orderedOrRanked: "ordered-or-ranked",
  percentageOrRatio: "percentage-or-ratio",
  typeOrCategory: "type-or-category",
  uniqueIdentifier: "unique-identifier"
});
var m = u = class extends f {
  constructor(e2) {
    super(e2), this.alias = null, this.defaultValue = void 0, this.description = null, this.domain = null, this.editable = true, this.length = void 0, this.name = null, this.nullable = true, this.type = null, this.valueType = null, this.visible = true;
  }
  readDescription(e2, {
    description: t3
  }) {
    let o3 = null;
    try {
      o3 = t3 ? JSON.parse(t3) : null;
    } catch (r) {
    }
    return o3?.value ?? null;
  }
  readValueType(e2, {
    description: t3
  }) {
    let o3 = null;
    try {
      o3 = t3 ? JSON.parse(t3) : null;
    } catch (r) {
    }
    return o3 ? c2.fromJSON(o3.fieldValueType) : null;
  }
  clone() {
    return new u({
      alias: this.alias,
      defaultValue: this.defaultValue,
      description: this.description,
      domain: this.domain?.clone() ?? null,
      editable: this.editable,
      length: this.length,
      name: this.name,
      nullable: this.nullable,
      type: this.type,
      valueType: this.valueType,
      visible: this.visible
    });
  }
};
e([y({
  type: String,
  json: {
    write: true
  }
})], m.prototype, "alias", void 0), e([y({
  type: [String, Number],
  json: {
    write: {
      allowNull: true
    }
  }
})], m.prototype, "defaultValue", void 0), e([y()], m.prototype, "description", void 0), e([o("description")], m.prototype, "readDescription", null), e([y({
  types: n3,
  json: {
    read: {
      reader: i6
    },
    write: true
  }
})], m.prototype, "domain", void 0), e([y({
  type: Boolean,
  json: {
    write: true
  }
})], m.prototype, "editable", void 0), e([y({
  type: N,
  json: {
    write: {
      overridePolicy: (e2) => ({
        enabled: Number.isFinite(e2)
      })
    }
  }
})], m.prototype, "length", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], m.prototype, "name", void 0), e([y({
  type: Boolean,
  json: {
    write: true
  }
})], m.prototype, "nullable", void 0), e([o2(i)], m.prototype, "type", void 0), e([y()], m.prototype, "valueType", void 0), e([o("valueType", ["description"])], m.prototype, "readValueType", null), e([y({
  type: Boolean,
  json: {
    read: false
  }
})], m.prototype, "visible", void 0), m = u = e([a2("esri.layers.support.Field")], m);
var y2 = m;

export {
  p,
  i3 as i,
  n3 as n,
  i6 as i2,
  y2 as y
};
//# sourceMappingURL=chunk-PFMGJTQM.js.map
