import {
  e as e2
} from "./chunk-4Z5SGKRM.js";
import {
  S
} from "./chunk-ANKOCGE2.js";
import {
  y
} from "./chunk-7CJXZOFG.js";
import {
  a3 as a2
} from "./chunk-DDYVXG4F.js";
import {
  a,
  m,
  v
} from "./chunk-HJY2YILU.js";
import {
  e,
  l
} from "./chunk-2MMLMOWS.js";
import {
  __async
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/core/asyncUtils.js
function a3(r, t, o) {
  return v(r.map((r2, e3) => t.apply(o, [r2, e3])));
}
function p(r, t, o) {
  return __async(this, null, function* () {
    return (yield v(r.map((r2, e3) => t.apply(o, [r2, e3])))).map((r2) => r2.value);
  });
}
function c(r) {
  return {
    ok: true,
    value: r
  };
}
function h(r) {
  return {
    ok: false,
    error: r
  };
}
function m2(r) {
  return null != r && true === r.ok ? r.value : null;
}
function f(r) {
  return null != r && false === r.ok ? r.error : null;
}
function _(r) {
  return __async(this, null, function* () {
    if (null == r) return {
      ok: false,
      error: new Error("no promise provided")
    };
    try {
      return c(yield r);
    } catch (t) {
      return h(t);
    }
  });
}
function b(r) {
  return __async(this, null, function* () {
    try {
      return c(yield r);
    } catch (t) {
      return a(t), h(t);
    }
  });
}
function y2(r) {
  if (true === r.ok) return r.value;
  throw r.error;
}
function d(r, t) {
  return new v2(r, t);
}
var v2 = class extends S {
  get value() {
    return m2(this._result);
  }
  get error() {
    return f(this._result);
  }
  get finished() {
    return null != this._result;
  }
  constructor(r, t) {
    super({}), this._result = null, this._abortHandle = null, this.abort = () => {
      this._abortController = e(this._abortController);
    }, this.remove = this.abort, this._abortController = new AbortController();
    const {
      signal: e3
    } = this._abortController;
    this.promise = r(e3), this.promise.then((r2) => {
      this._result = c(r2), this._cleanup();
    }, (r2) => {
      this._result = h(r2), this._cleanup();
    }), this._abortHandle = m(t, this.abort);
  }
  normalizeCtorArgs() {
    return {};
  }
  destroy() {
    this.abort();
  }
  _cleanup() {
    this._abortHandle = l(this._abortHandle), this._abortController = null;
  }
};
e2([y()], v2.prototype, "value", null), e2([y()], v2.prototype, "error", null), e2([y()], v2.prototype, "finished", null), e2([y()], v2.prototype, "promise", void 0), e2([y()], v2.prototype, "_result", void 0), v2 = e2([a2("esri.core.asyncUtils.ReactiveTask")], v2);

export {
  a3 as a,
  p,
  _,
  b,
  y2 as y,
  d
};
//# sourceMappingURL=chunk-XNUH25NY.js.map
