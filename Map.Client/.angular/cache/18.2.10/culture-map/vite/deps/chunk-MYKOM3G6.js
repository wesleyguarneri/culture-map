import {
  o
} from "./chunk-4ZZRP4MA.js";
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
  a3 as a
} from "./chunk-DDYVXG4F.js";

// ../../../node_modules/@arcgis/core/views/3d/environment/CloudyWeather.js
var c;
var p = c = class extends f {
  constructor(o2) {
    super(o2), this.type = "cloudy", this.cloudCover = 0.5;
  }
  clone() {
    return new c({
      cloudCover: this.cloudCover
    });
  }
};
e([o({
  cloudy: "cloudy"
})], p.prototype, "type", void 0), e([y({
  type: Number,
  nonNullable: true,
  range: {
    min: 0,
    max: 1
  },
  json: {
    write: true
  }
})], p.prototype, "cloudCover", void 0), p = c = e([a("esri.views.3d.environment.CloudyWeather")], p);
var u = p;

// ../../../node_modules/@arcgis/core/views/3d/environment/FoggyWeather.js
var p2;
var c2 = p2 = class extends f {
  constructor(o2) {
    super(o2), this.type = "foggy", this.fogStrength = 0.5;
  }
  clone() {
    return new p2({
      fogStrength: this.fogStrength
    });
  }
};
e([o({
  foggy: "foggy"
})], c2.prototype, "type", void 0), e([y({
  type: Number,
  nonNullable: true,
  range: {
    min: 0,
    max: 1
  },
  json: {
    write: true
  }
})], c2.prototype, "fogStrength", void 0), c2 = p2 = e([a("esri.views.3d.environment.FoggyWeather")], c2);
var n = c2;

// ../../../node_modules/@arcgis/core/views/3d/environment/RainyWeather.js
var s;
var p3 = s = class extends f {
  constructor(o2) {
    super(o2), this.type = "rainy", this.cloudCover = 0.5, this.precipitation = 0.5;
  }
  clone() {
    return new s({
      cloudCover: this.cloudCover,
      precipitation: this.precipitation
    });
  }
};
e([o({
  rainy: "rainy"
})], p3.prototype, "type", void 0), e([y({
  type: Number,
  nonNullable: true,
  range: {
    min: 0,
    max: 1
  },
  json: {
    write: true
  }
})], p3.prototype, "cloudCover", void 0), e([y({
  type: Number,
  nonNullable: true,
  range: {
    min: 0,
    max: 1
  },
  json: {
    write: true
  }
})], p3.prototype, "precipitation", void 0), p3 = s = e([a("esri.views.3d.environment.RainyWeather")], p3);
var c3 = p3;

// ../../../node_modules/@arcgis/core/views/3d/environment/SnowyWeather.js
var i;
var p4 = i = class extends f {
  constructor(o2) {
    super(o2), this.type = "snowy", this.cloudCover = 0.5, this.precipitation = 0.5, this.snowCover = "disabled";
  }
  clone() {
    return new i({
      cloudCover: this.cloudCover,
      precipitation: this.precipitation,
      snowCover: this.snowCover
    });
  }
};
e([o({
  snowy: "snowy"
})], p4.prototype, "type", void 0), e([y({
  type: Number,
  nonNullable: true,
  range: {
    min: 0,
    max: 1
  },
  json: {
    write: true
  }
})], p4.prototype, "cloudCover", void 0), e([y({
  type: Number,
  nonNullable: true,
  range: {
    min: 0,
    max: 1
  },
  json: {
    write: true
  }
})], p4.prototype, "precipitation", void 0), e([y({
  type: ["enabled", "disabled"],
  nonNullable: true,
  json: {
    write: true
  }
})], p4.prototype, "snowCover", void 0), p4 = i = e([a("esri.views.3d.environment.SnowyWeather")], p4);
var n2 = p4;

// ../../../node_modules/@arcgis/core/views/3d/environment/SunnyWeather.js
var c4;
var p5 = c4 = class extends f {
  constructor(o2) {
    super(o2), this.type = "sunny", this.cloudCover = 0.5;
  }
  clone() {
    return new c4({
      cloudCover: this.cloudCover
    });
  }
};
e([o({
  sunny: "sunny"
})], p5.prototype, "type", void 0), e([y({
  type: Number,
  nonNullable: true,
  range: {
    min: 0,
    max: 1
  },
  json: {
    write: true
  }
})], p5.prototype, "cloudCover", void 0), p5 = c4 = e([a("esri.views.3d.environment.SunnyWeather")], p5);
var n3 = p5;

// ../../../node_modules/@arcgis/core/views/3d/environment/weather.js
var n4 = {
  key: "type",
  base: n3,
  typeMap: {
    sunny: n3,
    cloudy: u,
    rainy: c3,
    snowy: n2,
    foggy: n
  }
};
var a2 = Object.keys(n4.typeMap);
function s2(e2, r) {
  return !!a2.includes(e2) || (r.error(`"${e2}" is not a valid weather type`), false);
}
var p6 = 1e4;
var i2 = 1e5;

export {
  u,
  n,
  c3 as c,
  n2,
  n3,
  n4,
  a2 as a,
  s2 as s,
  p6 as p,
  i2 as i
};
//# sourceMappingURL=chunk-MYKOM3G6.js.map
