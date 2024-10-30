import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  e as e3,
  l
} from "./chunk-PLGJMWC5.js";
import {
  c
} from "./chunk-DC5LRNPY.js";
import {
  o
} from "./chunk-DCXDXGAR.js";
import {
  r
} from "./chunk-BCCDYCTQ.js";
import {
  n
} from "./chunk-Y2HYKTTT.js";
import {
  f
} from "./chunk-4AZPIP7K.js";
import {
  e as e2
} from "./chunk-NUICEVIH.js";
import {
  y
} from "./chunk-UVNLCXWD.js";
import {
  N,
  _,
  a3 as a2
} from "./chunk-UDMPWVPF.js";
import {
  a,
  e
} from "./chunk-6JFGZTLU.js";

// ../../../node_modules/@arcgis/core/webdoc/widgets/FloorFilter.js
var s;
var l2 = s = class extends f {
  constructor(e4) {
    super(e4), this.enabled = false, this.longNames = false, this.minimized = false, this.pinnedLevels = false, this.site = null, this.facility = null, this.level = null;
  }
  clone() {
    return new s(a({
      enabled: this.enabled,
      longNames: this.longNames,
      minimized: this.minimized,
      pinnedLevels: this.pinnedLevels,
      site: this.site,
      facility: this.facility,
      level: this.level
    }));
  }
};
e2([y({
  type: Boolean,
  json: {
    read: {
      source: "enabled"
    },
    write: {
      target: "enabled"
    }
  }
})], l2.prototype, "enabled", void 0), e2([y({
  type: Boolean,
  json: {
    read: {
      source: "longNames"
    },
    write: {
      target: "longNames"
    }
  }
})], l2.prototype, "longNames", void 0), e2([y({
  type: Boolean,
  json: {
    read: {
      source: "minimized"
    },
    write: {
      target: "minimized"
    }
  }
})], l2.prototype, "minimized", void 0), e2([y({
  type: Boolean,
  json: {
    read: {
      source: "pinnedLevels"
    },
    write: {
      target: "pinnedLevels"
    }
  }
})], l2.prototype, "pinnedLevels", void 0), e2([y({
  type: String,
  json: {
    read: {
      source: "site"
    },
    write: {
      target: "site"
    }
  }
})], l2.prototype, "site", void 0), e2([y({
  type: String,
  json: {
    read: {
      source: "facility"
    },
    write: {
      target: "facility"
    }
  }
})], l2.prototype, "facility", void 0), e2([y({
  type: String,
  json: {
    read: {
      source: "level"
    },
    write: {
      target: "level"
    }
  }
})], l2.prototype, "level", void 0), l2 = s = e2([a2("esri.webdoc.widgets.FloorFilter")], l2);
var n2 = l2;

// ../../../node_modules/@arcgis/core/webdoc/widgets/Range.js
var n3;
var p = new n({
  slider: "slider",
  picker: "picker"
});
var a3 = n3 = class extends f {
  constructor(e4) {
    super(e4), this.interactionMode = null, this.numStops = null, this.stopInterval = null;
  }
  clone() {
    return new n3({
      interactionMode: this.interactionMode,
      numStops: this.numStops,
      stopInterval: this.stopInterval
    });
  }
};
e2([y({
  type: p.apiValues,
  nonNullable: true,
  json: {
    type: p.jsonValues,
    default: null,
    read: {
      reader: p.read
    },
    write: {
      isRequired: true,
      writer: p.write
    }
  }
})], a3.prototype, "interactionMode", void 0), e2([y({
  type: N,
  json: {
    read: {
      source: "numberOfStops"
    },
    write: {
      target: "numberOfStops",
      overridePolicy() {
        const e4 = null != this.stopInterval;
        return {
          enabled: !e4,
          isRequired: !e4
        };
      }
    }
  }
})], a3.prototype, "numStops", void 0), e2([y({
  type: Number,
  json: {
    write: {
      overridePolicy() {
        return {
          isRequired: null == this.numStops
        };
      }
    }
  }
})], a3.prototype, "stopInterval", void 0), a3 = n3 = e2([a2("esri.webdoc.widgets.Range")], a3);
var u = a3;

// ../../../node_modules/@arcgis/core/webdoc/widgets/TimeSlider.js
var d;
var T = d = class extends f {
  constructor(t) {
    super(t), this.currentTimeExtent = null, this.fullTimeExtent = null, this.loop = false, this.numStops = null, this.numThumbs = null, this.stopDelay = null, this.stopInterval = null, this.stops = null;
  }
  readCurrentTimeExtent(t) {
    if (!t) return;
    const r2 = null != t[0] ? new Date(t[0]) : null, o2 = null != t[1] ? new Date(t[1]) : null;
    return new c({
      start: r2,
      end: o2
    });
  }
  writeCurrentTimeExtent(t, e4, r2) {
    t && e(r2, [null != t.start ? t.start.getTime() : null, null != t.end ? t.end.getTime() : null], e4);
  }
  readFullTimeExtent(t, r2) {
    const o2 = r2.properties;
    if (!o2) return;
    const n5 = null != o2.endTime ? new Date(o2.endTime) : null, s2 = null != o2.startTime ? new Date(o2.startTime) : null;
    return new c({
      start: s2,
      end: n5
    });
  }
  writeFullTimeExtent(t, e4) {
    if (!t) return;
    const r2 = e4.properties = e4.properties || {}, o2 = t.end, n5 = t.start;
    o2 && (r2.endTime = null != o2 ? o2.getTime() : null), n5 && (r2.startTime = null != n5 ? n5.getTime() : null);
  }
  readStopInterval(t, e4, o2) {
    return t ? l.fromJSON({
      value: t.interval,
      unit: t.units
    }, o2) : null;
  }
  writeStopInterval(t, e4, r2, o2) {
    if (!t) return;
    const n5 = t.toJSON(o2);
    e("properties.timeStopInterval", {
      interval: n5.value,
      units: n5.unit
    }, e4);
  }
  readStops(t) {
    return t?.length ? t.map((t2) => new Date(t2)) : null;
  }
  writeStops(t, e4, r2) {
    t?.length && e(r2, t.map((t2) => t2.getTime()), e4);
  }
  clone() {
    return new d(a({
      currentTimeExtent: this.currentTimeExtent,
      fullTimeExtent: this.fullTimeExtent,
      loop: this.loop,
      numStops: this.numStops,
      numThumbs: this.numThumbs,
      stopDelay: this.stopDelay,
      stopInterval: this.stopInterval,
      stops: this.stops
    }));
  }
};
e2([y({
  type: c,
  json: {
    type: [[N, _]],
    read: {
      source: "properties.currentTimeExtent"
    },
    write: {
      target: "properties.currentTimeExtent"
    }
  }
})], T.prototype, "currentTimeExtent", void 0), e2([o("currentTimeExtent")], T.prototype, "readCurrentTimeExtent", null), e2([r("currentTimeExtent")], T.prototype, "writeCurrentTimeExtent", null), e2([y({
  type: c,
  json: {
    read: {
      source: ["properties.endTime", "properties.startTime"]
    },
    write: {
      target: {
        "properties.endTime": {
          type: Number
        },
        "properties.startTime": {
          type: Number
        }
      }
    }
  }
})], T.prototype, "fullTimeExtent", void 0), e2([o("fullTimeExtent")], T.prototype, "readFullTimeExtent", null), e2([r("fullTimeExtent")], T.prototype, "writeFullTimeExtent", null), e2([y({
  type: Boolean,
  nonNullable: true,
  json: {
    default: false,
    read: {
      source: "properties.loop"
    },
    write: {
      target: "properties.loop"
    }
  }
})], T.prototype, "loop", void 0), e2([y({
  type: N,
  json: {
    read: {
      source: "properties.numberOfStops"
    },
    write: {
      target: "properties.numberOfStops",
      overridePolicy() {
        const t = !!this.stopInterval, e4 = !!this.stops?.length, r2 = !(t || e4);
        return {
          enabled: r2,
          isRequired: r2
        };
      }
    }
  }
})], T.prototype, "numStops", void 0), e2([y({
  type: [1, 2],
  nonNullable: true,
  json: {
    type: N,
    read: {
      source: "properties.thumbCount"
    },
    write: {
      target: "properties.thumbCount",
      isRequired: true
    }
  }
})], T.prototype, "numThumbs", void 0), e2([y({
  type: Number,
  nonNullable: true,
  json: {
    read: {
      source: "properties.thumbMovingRate"
    },
    write: {
      target: "properties.thumbMovingRate",
      isRequired: true
    }
  }
})], T.prototype, "stopDelay", void 0), e2([y({
  type: l,
  json: {
    read: {
      source: "properties.timeStopInterval"
    },
    write: {
      target: {
        "properties.timeStopInterval.interval": {
          type: Number
        },
        "properties.timeStopInterval.units": {
          type: e3.jsonValues.filter((t) => "esriTimeUnitsUnknown" !== t)
        }
      },
      overridePolicy() {
        const t = null != this.numStops, e4 = !!this.stops?.length;
        return {
          enabled: !e4,
          isRequired: !(t || e4)
        };
      }
    }
  }
})], T.prototype, "stopInterval", void 0), e2([o("stopInterval")], T.prototype, "readStopInterval", null), e2([r("stopInterval")], T.prototype, "writeStopInterval", null), e2([y({
  type: [Date],
  json: {
    type: [N],
    read: {
      source: "properties.stops"
    },
    write: {
      target: "properties.stops",
      overridePolicy() {
        return {
          isRequired: null == this.numStops && !this.stopInterval
        };
      }
    }
  }
})], T.prototype, "stops", void 0), e2([o("stops")], T.prototype, "readStops", null), e2([r("stops")], T.prototype, "writeStops", null), T = d = e2([a2("esri.webdoc.widgets.TimeSlider")], T);
var y2 = T;

// ../../../node_modules/@arcgis/core/webdoc/Widgets.js
var m;
var c2 = m = class extends f {
  constructor(r2) {
    super(r2), this.range = null, this.timeSlider = null, this.floorFilter = null;
  }
  clone() {
    return new m(a({
      range: this.range,
      timeSlider: this.timeSlider,
      floorFilter: this.floorFilter
    }));
  }
};
e2([y({
  type: u,
  json: {
    write: true
  }
})], c2.prototype, "range", void 0), e2([y({
  type: y2,
  json: {
    write: true
  }
})], c2.prototype, "timeSlider", void 0), e2([y({
  type: n2,
  json: {
    write: true
  }
})], c2.prototype, "floorFilter", void 0), c2 = m = e2([a2("esri.webdoc.Widgets")], c2);
var n4 = c2;

export {
  n2 as n,
  y2 as y,
  n4 as n2
};
//# sourceMappingURL=chunk-5WZBN555.js.map
