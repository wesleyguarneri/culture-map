import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  i
} from "./chunk-Q5TIVVER.js";
import {
  o as o2
} from "./chunk-6EIBUVMG.js";
import {
  o
} from "./chunk-DCXDXGAR.js";
import {
  r
} from "./chunk-BCCDYCTQ.js";
import {
  f
} from "./chunk-4AZPIP7K.js";
import {
  V
} from "./chunk-U3RHUXYK.js";
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

// ../../../node_modules/@arcgis/core/layers/support/FacilityLayerInfo.js
var s = class extends f {
  constructor(r2) {
    super(r2), this.facilityIdField = null, this.layerId = null, this.nameField = null, this.siteIdField = null, this.sublayerId = null;
  }
};
e([y({
  type: String,
  json: {
    write: true
  }
})], s.prototype, "facilityIdField", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], s.prototype, "layerId", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], s.prototype, "nameField", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], s.prototype, "siteIdField", void 0), e([y({
  type: Number,
  json: {
    read: {
      source: "subLayerId"
    },
    write: {
      target: "subLayerId"
    },
    origins: {
      "web-scene": {
        read: false,
        write: false
      }
    }
  }
})], s.prototype, "sublayerId", void 0), s = e([a2("esri.layers.support.FacilityLayerInfo")], s);
var i2 = s;

// ../../../node_modules/@arcgis/core/layers/support/LevelLayerInfo.js
var i3 = class extends f {
  constructor(e3) {
    super(e3), this.facilityIdField = null, this.layerId = null, this.levelIdField = null, this.levelNumberField = null, this.longNameField = null, this.shortNameField = null, this.sublayerId = null, this.verticalOrderField = null;
  }
};
e([y({
  type: String,
  json: {
    write: true
  }
})], i3.prototype, "facilityIdField", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], i3.prototype, "layerId", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], i3.prototype, "levelIdField", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], i3.prototype, "levelNumberField", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], i3.prototype, "longNameField", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], i3.prototype, "shortNameField", void 0), e([y({
  type: Number,
  json: {
    read: {
      source: "subLayerId"
    },
    write: {
      target: "subLayerId"
    },
    origins: {
      "web-scene": {
        read: false,
        write: false
      }
    }
  }
})], i3.prototype, "sublayerId", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], i3.prototype, "verticalOrderField", void 0), i3 = e([a2("esri.layers.support.LevelLayerInfo")], i3);
var s2 = i3;

// ../../../node_modules/@arcgis/core/layers/support/SiteLayerInfo.js
var s3 = class extends f {
  constructor(r2) {
    super(r2), this.layerId = null, this.nameField = null, this.siteIdField = null, this.sublayerId = null;
  }
};
e([y({
  type: String,
  json: {
    write: true
  }
})], s3.prototype, "layerId", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], s3.prototype, "nameField", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], s3.prototype, "siteIdField", void 0), e([y({
  type: Number,
  json: {
    read: {
      source: "subLayerId"
    },
    write: {
      target: "subLayerId"
    },
    origins: {
      "web-scene": {
        read: false,
        write: false
      }
    }
  }
})], s3.prototype, "sublayerId", void 0), s3 = e([a2("esri.layers.support.SiteLayerInfo")], s3);
var i4 = s3;

// ../../../node_modules/@arcgis/core/support/MapFloorInfo.js
var a3 = class extends f {
  constructor(r2) {
    super(r2), this.levelLayer = null, this.facilityLayer = null, this.siteLayer = null;
  }
};
e([y({
  type: s2,
  json: {
    write: true
  }
})], a3.prototype, "levelLayer", void 0), e([y({
  type: i2,
  json: {
    write: true
  }
})], a3.prototype, "facilityLayer", void 0), e([y({
  type: i4,
  json: {
    write: true
  }
})], a3.prototype, "siteLayer", void 0), a3 = e([a2("esri.support.MapFloorInfo")], a3);
var l = a3;

// ../../../node_modules/@arcgis/core/webdoc/support/thumbnailUtils.js
var h = {
  width: 600,
  height: 400
};
var t = 1.5;
function i5(i9, e3) {
  e3 = e3 || h;
  let {
    width: d,
    height: n
  } = e3;
  const g = d / n;
  return g < t ? n = d / t : g > t && (d = n * t), d > i9.width && (n *= i9.width / d, d = i9.width), n > i9.height && (d *= i9.height / n, n = i9.height), {
    width: Math.round(d),
    height: Math.round(n)
  };
}

// ../../../node_modules/@arcgis/core/core/accessorSupport/extensions/serializableProperty/writePolicyUtils.js
function e2(e3) {
  return {
    enabled: !!e3?.length
  };
}

// ../../../node_modules/@arcgis/core/webdoc/applicationProperties/SearchLayerField.js
var c;
var a4 = c = class extends f {
  constructor(o3) {
    super(o3), this.exactMatch = false, this.name = null, this.type = null;
  }
  clone() {
    return new c({
      exactMatch: this.exactMatch,
      type: this.type,
      name: this.name
    });
  }
};
e([y({
  type: Boolean,
  json: {
    write: true
  }
})], a4.prototype, "exactMatch", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], a4.prototype, "name", void 0), e([o2(i)], a4.prototype, "type", void 0), a4 = c = e([a2("esri.webdoc.applicationProperties.SearchLayerField")], a4);
var i6 = a4;

// ../../../node_modules/@arcgis/core/webdoc/applicationProperties/SearchLayer.js
var c2;
var a5 = c2 = class extends f {
  constructor(r2) {
    super(r2), this.field = null, this.id = null, this.subLayer = null;
  }
  clone() {
    return new c2(a({
      field: this.field,
      id: this.id,
      subLayer: this.subLayer
    }));
  }
};
e([y({
  type: i6,
  json: {
    write: {
      isRequired: true
    }
  }
})], a5.prototype, "field", void 0), e([y({
  type: String,
  json: {
    write: {
      isRequired: true
    }
  }
})], a5.prototype, "id", void 0), e([y({
  type: N,
  json: {
    write: true
  }
})], a5.prototype, "subLayer", void 0), a5 = c2 = e([a2("esri.webdoc.applicationProperties.SearchLayer")], a5);
var u = a5;

// ../../../node_modules/@arcgis/core/webdoc/applicationProperties/SearchTableField.js
var c3;
var a6 = c3 = class extends f {
  constructor(o3) {
    super(o3), this.exactMatch = false, this.name = null, this.type = null;
  }
  clone() {
    return new c3({
      exactMatch: this.exactMatch,
      type: this.type,
      name: this.name
    });
  }
};
e([y({
  type: Boolean,
  json: {
    write: true
  }
})], a6.prototype, "exactMatch", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], a6.prototype, "name", void 0), e([o2(i)], a6.prototype, "type", void 0), a6 = c3 = e([a2("esri.webdoc.applicationProperties.SearchTableField")], a6);
var i7 = a6;

// ../../../node_modules/@arcgis/core/webdoc/applicationProperties/SearchTable.js
var p;
var c4 = p = class extends f {
  constructor(r2) {
    super(r2), this.field = null, this.id = null;
  }
  clone() {
    return new p(a({
      field: this.field,
      id: this.id
    }));
  }
};
e([y({
  type: i7,
  json: {
    write: {
      isRequired: true
    }
  }
})], c4.prototype, "field", void 0), e([y({
  type: String,
  json: {
    write: {
      isRequired: true
    }
  }
})], c4.prototype, "id", void 0), c4 = p = e([a2("esri.webdoc.applicationProperties.SearchTable")], c4);
var l2 = c4;

// ../../../node_modules/@arcgis/core/webdoc/applicationProperties/Search.js
var p2;
var b = V.ofType(u);
var h2 = V.ofType(l2);
var m = p2 = class extends f {
  constructor(e3) {
    super(e3), this.addressSearchEnabled = true, this.enabled = true, this.hintText = null, this.layers = new b(), this.tables = new h2();
  }
  readAddressSearchEnabled(e3) {
    return !e3;
  }
  writeAddressSearchEnabled(e3, r2, o3) {
    r2[o3] = !e3;
  }
  clone() {
    return new p2(a({
      addressSearchEnabled: this.addressSearchEnabled,
      enabled: this.enabled,
      hintText: this.hintText,
      layers: this.layers,
      tables: this.tables
    }));
  }
};
e([y({
  type: Boolean,
  nonNullable: true,
  json: {
    read: {
      source: "disablePlaceFinder"
    },
    write: {
      target: "disablePlaceFinder",
      isRequired: true
    },
    origins: {
      "web-scene": {
        read: false,
        write: false
      }
    }
  }
})], m.prototype, "addressSearchEnabled", void 0), e([o("addressSearchEnabled")], m.prototype, "readAddressSearchEnabled", null), e([r("addressSearchEnabled")], m.prototype, "writeAddressSearchEnabled", null), e([y({
  type: Boolean,
  nonNullable: true,
  json: {
    write: true,
    origins: {
      "web-map": {
        write: {
          isRequired: true
        }
      },
      "web-scene": {
        default: true,
        write: true
      }
    }
  }
})], m.prototype, "enabled", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], m.prototype, "hintText", void 0), e([y({
  type: b,
  json: {
    write: {
      overridePolicy: e2
    },
    origins: {
      "web-scene": {
        write: {
          isRequired: true
        }
      }
    }
  }
})], m.prototype, "layers", void 0), e([y({
  type: h2,
  json: {
    read: true,
    write: {
      overridePolicy: e2
    }
  }
})], m.prototype, "tables", void 0), m = p2 = e([a2("esri.webdoc.applicationProperties.Search")], m);
var y2 = m;

// ../../../node_modules/@arcgis/core/webdoc/applicationProperties/Viewing.js
var p3;
var a7 = p3 = class extends f {
  constructor(r2) {
    super(r2), this.search = null;
  }
  clone() {
    return new p3(a({
      search: this.search
    }));
  }
};
e([y({
  type: y2,
  json: {
    write: true
  }
})], a7.prototype, "search", void 0), a7 = p3 = e([a2("esri.webdoc.applicationProperties.Viewing")], a7);
var i8 = a7;

export {
  l,
  i5 as i,
  i8 as i2
};
//# sourceMappingURL=chunk-AHJ63KFV.js.map
