import {
  a as a2,
  n
} from "./chunk-V5RMUGJJ.js";
import {
  e
} from "./chunk-4Z5SGKRM.js";
import {
  y
} from "./chunk-7CJXZOFG.js";
import {
  a3 as a
} from "./chunk-DDYVXG4F.js";

// ../../../node_modules/@arcgis/core/layers/mixins/BlendLayer.js
var s = {
  type: ["average", "color-burn", "color-dodge", "color", "darken", "destination-atop", "destination-in", "destination-out", "destination-over", "difference", "exclusion", "hard-light", "hue", "invert", "lighten", "lighter", "luminosity", "minus", "multiply", "normal", "overlay", "plus", "reflect", "saturation", "screen", "soft-light", "source-atop", "source-in", "source-out", "vivid-light", "xor"],
  nonNullable: true,
  json: {
    read: false,
    write: false,
    origins: {
      "web-map": {
        read: true,
        write: true
      },
      "portal-item": {
        read: true,
        write: true
      }
    }
  }
};
var n2 = {
  read: {
    reader: n
  },
  write: {
    allowNull: true,
    writer: a2
  }
};
var a3 = {
  json: {
    read: false,
    write: false,
    origins: {
      "web-map": n2,
      "portal-item": n2
    }
  }
};
var l = (t) => {
  let i = class extends t {
    constructor() {
      super(...arguments), this.blendMode = "normal", this.effect = null;
    }
  };
  return e([y(s)], i.prototype, "blendMode", void 0), e([y(a3)], i.prototype, "effect", void 0), i = e([a("esri.layers.mixins.BlendLayer")], i), i;
};

export {
  s,
  a3 as a,
  l
};
//# sourceMappingURL=chunk-OUKUASAF.js.map
