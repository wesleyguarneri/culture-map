import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  s as s2
} from "./chunk-PH6NPTP7.js";
import {
  s
} from "./chunk-UDMPWVPF.js";
import {
  h
} from "./chunk-6JFGZTLU.js";

// ../../../node_modules/@arcgis/core/core/signal.js
var i = class {
  constructor(t, e) {
    this._observable = new s2(), this._value = t, this._equalityFunction = e;
  }
  get value() {
    return s(this._observable), this._value;
  }
  set value(t) {
    this._equalityFunction(t, this._value) || (this._value = t, this._observable.notify());
  }
  mutate(t) {
    t(this._value), this._observable.notify();
  }
};
function r(e, s3 = h) {
  return new i(e, s3);
}

export {
  r
};
//# sourceMappingURL=chunk-QRWQ6QBB.js.map
