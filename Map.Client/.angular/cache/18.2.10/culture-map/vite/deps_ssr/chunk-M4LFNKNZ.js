import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  n as n2
} from "./chunk-YEB36ZCF.js";
import {
  K,
  g,
  r,
  u
} from "./chunk-MZM4INJV.js";
import {
  n
} from "./chunk-J4GMQHGL.js";

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
//# sourceMappingURL=chunk-M4LFNKNZ.js.map
