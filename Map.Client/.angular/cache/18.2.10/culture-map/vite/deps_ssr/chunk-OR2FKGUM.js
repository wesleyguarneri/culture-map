import { createRequire } from 'module';const require = createRequire(import.meta.url);

// ../../../node_modules/@arcgis/core/core/ObjectPool.js
function t(t2) {
  return t2?.release && "function" == typeof t2.release;
}
function i(t2) {
  return t2?.acquire && "function" == typeof t2.acquire;
}
var e = class _e {
  constructor(t2, i2, e2, o = 1, s = 0) {
    if (this._ctor = t2, this._acquireFunction = i2, this._releaseFunction = e2, this.allocationSize = o, this._pool = new Array(s), this._initialSize = s, this._ctor) for (let n = 0; n < s; n++) this._pool[n] = new this._ctor();
    this.allocationSize = Math.max(o, 1);
  }
  destroy() {
    this.prune(0);
  }
  acquire(...t2) {
    let o;
    if (_e.test.disabled) o = new this._ctor();
    else {
      if (0 === this._pool.length) {
        const t3 = this.allocationSize;
        for (let i2 = 0; i2 < t3; i2++) this._pool[i2] = new this._ctor();
      }
      o = this._pool.pop();
    }
    return this._acquireFunction ? this._acquireFunction(o, ...t2) : i(o) && o.acquire(...t2), o;
  }
  release(i2) {
    i2 && !_e.test.disabled && (this._releaseFunction ? this._releaseFunction(i2) : t(i2) && i2.release(), this._pool.push(i2));
  }
  prune(t2 = this._initialSize) {
    if (!(t2 >= this._pool.length)) {
      for (let i2 = t2; i2 < this._pool.length; ++i2) {
        const t3 = this._pool[i2];
        this._dispose(t3);
      }
      this._pool.length = t2;
    }
  }
  _dispose(t2) {
    t2.dispose && "function" == typeof t2.dispose && t2.dispose();
  }
};
e.test = {
  disabled: false
};

export {
  e
};
//# sourceMappingURL=chunk-OR2FKGUM.js.map
