import {
  e
} from "./chunk-4Z5SGKRM.js";
import {
  y
} from "./chunk-7CJXZOFG.js";
import {
  a3 as a
} from "./chunk-DDYVXG4F.js";

// ../../../node_modules/@arcgis/core/layers/mixins/APIKeyMixin.js
function s(e2) {
  return "portalItem" in e2;
}
var i = (i2) => {
  let o = class extends i2 {
    get apiKey() {
      return this._isOverridden("apiKey") ? this._get("apiKey") : s(this) ? this.portalItem?.apiKey : null;
    }
    set apiKey(e2) {
      null != e2 ? this._override("apiKey", e2) : (this._clearOverride("apiKey"), this.clear("apiKey", "user"));
    }
  };
  return e([y({
    type: String
  })], o.prototype, "apiKey", null), o = e([a("esri.layers.mixins.APIKeyMixin")], o), o;
};

export {
  i
};
//# sourceMappingURL=chunk-YTFX4PFO.js.map