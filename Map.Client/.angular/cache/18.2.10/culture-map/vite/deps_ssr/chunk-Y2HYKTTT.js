import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  e
} from "./chunk-6JFGZTLU.js";
import {
  __spreadValues
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/core/jsonMap.js
var n = class {
  constructor(n2, i2 = {
    ignoreUnknown: false,
    useNumericKeys: false
  }) {
    this._jsonToAPI = n2, this._options = i2, this.apiValues = [], this.jsonValues = [], this._apiToJSON = t(n2), this.apiValues = s(this._apiToJSON), this.jsonValues = s(this._jsonToAPI), this.read = (o) => this.fromJSON(o), this.write = (n3, t2, s2) => {
      const i3 = this.toJSON(n3);
      void 0 !== i3 && e(s2, i3, t2);
    }, this.write.isJSONMapWriter = true;
  }
  toJSON(o) {
    if (null == o) return null;
    if (this._apiToJSON.hasOwnProperty(o)) {
      const n2 = this._apiToJSON[o];
      return this._options.useNumericKeys ? +n2 : n2;
    }
    return this._options.ignoreUnknown ? void 0 : o;
  }
  fromJSON(o) {
    return null != o && this._jsonToAPI.hasOwnProperty(o) ? this._jsonToAPI[o] : this._options.ignoreUnknown ? void 0 : o;
  }
};
function t(o) {
  const n2 = {};
  for (const t2 in o) n2[o[t2]] = t2;
  return n2;
}
function s(o) {
  const n2 = [];
  for (const t2 in o) n2.push(t2);
  return n2.sort(), n2;
}
function i() {
  return function(o, t2) {
    return new n(o, __spreadValues({
      ignoreUnknown: true
    }, t2));
  };
}

export {
  n,
  i
};
//# sourceMappingURL=chunk-Y2HYKTTT.js.map
