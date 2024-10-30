import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  b
} from "./chunk-ORYC4PVJ.js";
import {
  c
} from "./chunk-DC5LRNPY.js";
import {
  n as n2
} from "./chunk-SR7PRON4.js";
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
  a3 as a2
} from "./chunk-UDMPWVPF.js";
import {
  a
} from "./chunk-6JFGZTLU.js";
import {
  __spreadValues
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/layers/support/FeatureFilter.js
var p;
var c2 = new n({
  esriSpatialRelIntersects: "intersects",
  esriSpatialRelContains: "contains",
  esriSpatialRelCrosses: "crosses",
  esriSpatialRelDisjoint: "disjoint",
  esriSpatialRelEnvelopeIntersects: "envelope-intersects",
  esriSpatialRelIndexIntersects: "index-intersects",
  esriSpatialRelOverlaps: "overlaps",
  esriSpatialRelTouches: "touches",
  esriSpatialRelWithin: "within",
  esriSpatialRelRelation: "relation"
});
var u = new n({
  esriSRUnit_Meter: "meters",
  esriSRUnit_Kilometer: "kilometers",
  esriSRUnit_Foot: "feet",
  esriSRUnit_StatuteMile: "miles",
  esriSRUnit_NauticalMile: "nautical-miles",
  esriSRUnit_USNauticalMile: "us-nautical-miles"
});
var m = p = class extends f {
  constructor(e2) {
    super(e2), this.where = null, this.geometry = null, this.spatialRelationship = "intersects", this.distance = void 0, this.objectIds = null, this.units = null, this.timeExtent = null;
  }
  createQuery(e2 = {}) {
    const {
      where: t,
      geometry: i,
      spatialRelationship: r,
      timeExtent: s,
      objectIds: n3,
      units: l,
      distance: p2
    } = this;
    return new b(__spreadValues({
      geometry: a(i),
      objectIds: a(n3),
      spatialRelationship: r,
      timeExtent: a(s),
      where: t,
      units: l,
      distance: p2
    }, e2));
  }
  clone() {
    const {
      where: e2,
      geometry: t,
      spatialRelationship: i,
      timeExtent: r,
      objectIds: s,
      units: n3,
      distance: l
    } = this;
    return new p({
      geometry: a(t),
      objectIds: a(s),
      spatialRelationship: i,
      timeExtent: a(r),
      where: e2,
      units: n3,
      distance: l
    });
  }
};
e([y({
  type: String,
  json: {
    write: true
  }
})], m.prototype, "where", void 0), e([y({
  types: n2,
  json: {
    write: true
  }
})], m.prototype, "geometry", void 0), e([y({
  type: c2.apiValues,
  json: {
    name: "spatialRel",
    read: {
      reader: c2.read
    },
    write: {
      allowNull: false,
      writer: c2.write,
      overridePolicy() {
        return {
          enabled: null != this.geometry
        };
      }
    }
  }
})], m.prototype, "spatialRelationship", void 0), e([y({
  type: Number,
  json: {
    write: {
      overridePolicy(e2) {
        return {
          enabled: null != e2 && null != this.geometry
        };
      }
    }
  }
})], m.prototype, "distance", void 0), e([y({
  type: [Number],
  json: {
    write: true
  }
})], m.prototype, "objectIds", void 0), e([y({
  type: u.apiValues,
  json: {
    read: u.read,
    write: {
      writer: u.write,
      overridePolicy(e2) {
        return {
          enabled: null != e2 && null != this.geometry
        };
      }
    }
  }
})], m.prototype, "units", void 0), e([y({
  type: c,
  json: {
    write: true
  }
})], m.prototype, "timeExtent", void 0), m = p = e([a2("esri.layers.support.FeatureFilter")], m);
var d = m;

export {
  d
};
//# sourceMappingURL=chunk-2W7YKBRA.js.map
