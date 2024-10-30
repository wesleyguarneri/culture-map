import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  y
} from "./chunk-VZ37C3ID.js";
import {
  Z
} from "./chunk-5R3HARKC.js";
import {
  I2 as I
} from "./chunk-I2TVVMQ6.js";
import {
  n2 as n
} from "./chunk-6JFGZTLU.js";
import {
  has
} from "./chunk-2ZJE6ZFX.js";

// ../../../node_modules/@arcgis/core/layers/support/fieldProperties.js
function s() {
  return {
    fields: {
      type: [y],
      value: null,
      set: function(i) {
        if (i && has("big-integer-warning-enabled")) {
          const t = i.filter((e) => "big-integer" === e.type || "oid" === e.type && (e.length || 0) >= 8);
          if (t.length) {
            const i2 = t.map((e) => `'${e.name}'`).join(", ");
            n.getLogger(this).warn("#fields", `Layer (title: '${this.title ?? "no title"}', id: '${this.id ?? "no id"}') references big-integer field(s): ${i2}, support for which is experimental. Only integers less than ${Number.MAX_SAFE_INTEGER} (Number.MAX_SAFE_INTEGER) are supported.`);
          }
        }
        this._set("fields", i);
      }
    },
    fieldsIndex: {
      readOnly: true,
      get() {
        return Z.fromLayer(this);
      }
    },
    outFields: {
      type: [String],
      json: {
        read: false
      },
      set: function(e) {
        this._userOutFields = e, this.notifyChange("outFields");
      },
      get: function() {
        const i = this._userOutFields;
        if (!i?.length) return null;
        if (i.includes("*")) return ["*"];
        if (!this.fields) return i;
        for (const t of i) {
          const r = this.fieldsIndex?.has(t);
          r || n.getLogger("esri.layers.support.fieldProperties").error("field-attributes-layer:invalid-field", `Invalid field ${t} found in outFields`, {
            layer: this,
            outFields: i
          });
        }
        return I(this.fieldsIndex, i);
      }
    }
  };
}

export {
  s
};
//# sourceMappingURL=chunk-GLFGRGCP.js.map
