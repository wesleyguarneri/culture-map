import {
  e
} from "./chunk-4Z5SGKRM.js";
import {
  S
} from "./chunk-ANKOCGE2.js";
import {
  a3 as a
} from "./chunk-DDYVXG4F.js";
import {
  L,
  b,
  u
} from "./chunk-HJY2YILU.js";

// ../../../node_modules/@arcgis/core/core/Promise.js
var l;
!function(s) {
  s[s.PENDING = 0] = "PENDING", s[s.RESOLVED = 1] = "RESOLVED", s[s.REJECTED = 2] = "REJECTED";
}(l || (l = {}));
var h = class {
  constructor() {
    this._resolver = L(), this._status = l.PENDING, this._resolvingPromises = [], this._resolver.promise.then(() => {
      this._status = l.RESOLVED, this._cleanUp();
    }, () => {
      this._status = l.REJECTED, this._cleanUp();
    }), this.promise = this._resolver.promise;
  }
  destroy() {
    this._cleanUp();
  }
  addResolvingPromise(s) {
    this._resolvingPromises.push(s), this._tryResolve();
  }
  isResolved() {
    return this._status === l.RESOLVED;
  }
  isRejected() {
    return this._status === l.REJECTED;
  }
  isFulfilled() {
    return this._status !== l.PENDING;
  }
  abort() {
    this._resolver.reject(u());
  }
  _cleanUp() {
    this._allPromise = null, this._resolvingPromises = null;
  }
  _tryResolve() {
    if (this.isFulfilled()) return;
    const s = L(), e2 = [...this._resolvingPromises, s.promise], i = this._allPromise = Promise.all(e2);
    i.then(() => {
      this.isFulfilled() || this._allPromise !== i || this._resolver.resolve();
    }, (s2) => {
      this.isFulfilled() || this._allPromise !== i || b(s2) || this._resolver.reject(s2);
    }), s.resolve();
  }
};
var n = (e2) => {
  let r = class extends e2 {
    constructor(...s) {
      super(...s), this._promiseProps = new h(), this.addResolvingPromise(Promise.resolve());
    }
    destroy() {
      this._promiseProps.destroy();
    }
    isResolved() {
      return this._promiseProps.isResolved();
    }
    isRejected() {
      return this._promiseProps.isRejected();
    }
    isFulfilled() {
      return this._promiseProps.isFulfilled();
    }
    when(s, e3) {
      return this._promiseProps.promise.then(() => this).then(s, e3);
    }
    catch(s) {
      return this.when(null, s);
    }
    addResolvingPromise(s) {
      s && !this._promiseProps.isFulfilled() && this._promiseProps.addResolvingPromise("_promiseProps" in s ? s.when() : s);
    }
  };
  return r = e([a("esri.core.Promise")], r), r;
};
var m = class extends n(S) {
};
m = e([a("esri.core.Promise")], m);

export {
  n,
  m
};
//# sourceMappingURL=chunk-EDSMXTFO.js.map
