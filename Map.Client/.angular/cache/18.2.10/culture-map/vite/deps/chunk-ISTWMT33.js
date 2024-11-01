import {
  n as n2
} from "./chunk-DLRYNII2.js";
import {
  K,
  g,
  r,
  u
} from "./chunk-AXVPJBVW.js";
import {
  n
} from "./chunk-OXEPWRM7.js";

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/core/util/TwoVectorPosition.js
var e = class {
  constructor(t) {
    this._low = n(), this._high = n(), t && this.set(t);
  }
  get low() {
    return this._low;
  }
  get high() {
    return this._high;
  }
  set(i) {
    r(this._low, r(c, i));
    const r2 = K(c, i, this._low);
    r(this._high, r2);
  }
  get(t) {
    return u(t, this._low, this._high);
  }
  getLowScaled(t) {
    return g(t, this._low, 1);
  }
};
var c = n2();

export {
  e
};
//# sourceMappingURL=chunk-ISTWMT33.js.map
