import {
  d
} from "./chunk-XQCKIDQO.js";
import {
  a as a2,
  n
} from "./chunk-V5RMUGJJ.js";
import {
  f
} from "./chunk-V6AMQYXE.js";
import {
  e as e2
} from "./chunk-4Z5SGKRM.js";
import {
  y
} from "./chunk-7CJXZOFG.js";
import {
  a3 as a
} from "./chunk-DDYVXG4F.js";
import {
  e,
  s2 as s
} from "./chunk-WYIDUUN2.js";

// ../../../node_modules/@arcgis/core/layers/support/FeatureEffect.js
var d2;
var f2 = {
  read: {
    reader: n
  },
  write: {
    writer: a2,
    overridePolicy() {
      return {
        allowNull: null != this.excludedEffect,
        isRequired: null == this.excludedEffect
      };
    }
  }
};
var n2 = {
  read: {
    reader: n
  },
  write: {
    writer: a2,
    overridePolicy() {
      return {
        allowNull: null != this.includedEffect,
        isRequired: null == this.includedEffect
      };
    }
  }
};
var a3 = {
  name: "showExcludedLabels",
  default: true
};
var p = d2 = class extends f {
  constructor(e3) {
    super(e3), this.filter = null, this.includedEffect = null, this.excludedEffect = null, this.excludedLabelsVisible = false;
  }
  write(e3, t) {
    const l = super.write(e3, t);
    if (t?.origin) {
      if (l.filter) {
        const e4 = Object.keys(l.filter);
        if (e4.length > 1 || "where" !== e4[0]) return t.messages?.push(new s("web-document-write:unsupported-feature-effect", "Invalid feature effect 'filter'. A filter can only contain a 'where' property", {
          layer: t.layer,
          effect: this
        })), null;
      }
      if ("showExcludedLabels" in l) return t.messages?.push(new s("web-document-write:unsupported-feature-effect", "Invalid value for property 'excludedLabelsVisible' which should always be 'true'", {
        layer: t.layer,
        effect: this
      })), null;
    }
    return l;
  }
  clone() {
    return new d2({
      filter: null != this.filter ? this.filter.clone() : null,
      includedEffect: this.includedEffect,
      excludedEffect: this.excludedEffect,
      excludedLabelsVisible: this.excludedLabelsVisible
    });
  }
};
e2([y({
  type: d,
  json: {
    write: {
      allowNull: true,
      writer(e3, r, t, i) {
        const o = e3?.write({}, i);
        o && 0 !== Object.keys(o).length ? e(t, o, r) : e(t, null, r);
      }
    }
  }
})], p.prototype, "filter", void 0), e2([y({
  json: {
    read: n,
    write: {
      writer: a2,
      allowNull: true
    },
    origins: {
      "web-map": f2,
      "portal-item": f2
    }
  }
})], p.prototype, "includedEffect", void 0), e2([y({
  json: {
    read: n,
    write: {
      writer: a2,
      allowNull: true
    },
    origins: {
      "web-map": n2,
      "portal-item": n2
    }
  }
})], p.prototype, "excludedEffect", void 0), e2([y({
  type: Boolean,
  json: {
    write: true,
    name: "showExcludedLabels",
    origins: {
      "web-map": a3,
      "portal-item": a3
    }
  }
})], p.prototype, "excludedLabelsVisible", void 0), p = d2 = e2([a("esri.layers.support.FeatureEffect")], p);
var w = p;

export {
  w
};
//# sourceMappingURL=chunk-3AY5EJVP.js.map
