import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  p
} from "./chunk-OOK3QTWF.js";
import {
  s
} from "./chunk-AIZ3T7E3.js";
import {
  e
} from "./chunk-6UEMNP3E.js";
import {
  n2 as n
} from "./chunk-6JFGZTLU.js";
import {
  L
} from "./chunk-2ZJE6ZFX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/core/workers/WorkerHandle.js
var h = class {
  constructor(e2, t, r, h2, o = {}) {
    this._mainMethod = t, this._transferLists = r, this._listeners = [], this._promise = p(e2, __spreadProps(__spreadValues({}, o), {
      schedule: h2
    })).then((e3) => {
      if (void 0 === this._thread) {
        this._thread = e3, this._promise = null, o.hasInitialize && this.broadcast({}, "initialize");
        for (const e4 of this._listeners) this._connectListener(e4);
      } else e3.close();
    }), this._promise.catch((t2) => n.getLogger("esri.core.workers.WorkerHandle").error(`Failed to initialize ${e2} worker: ${t2}`));
  }
  on(s2, r) {
    const i = {
      removed: false,
      eventName: s2,
      callback: r,
      threadHandle: null
    };
    return this._listeners.push(i), this._connectListener(i), e(() => {
      i.removed = true, L(this._listeners, i), this._thread && null != i.threadHandle && i.threadHandle.remove();
    });
  }
  destroy() {
    this._thread && (this._thread.close(), this._thread = null), this._promise = null, this._listeners.length = 0, this._transferLists = {};
  }
  invoke(e2, t) {
    return this.invokeMethod(this._mainMethod, e2, t);
  }
  invokeMethod(e2, t, s2) {
    if (this._thread) {
      const r = this._transferLists[e2], i = r ? r(t) : [];
      return this._thread.invoke(e2, t, {
        transferList: i,
        signal: s2
      });
    }
    return this._promise ? this._promise.then(() => (s(s2), this.invokeMethod(e2, t, s2))) : Promise.reject(null);
  }
  broadcast(e2, t) {
    return this._thread ? Promise.all(this._thread.broadcast(t, e2)).then(() => {
    }) : this._promise ? this._promise.then(() => this.broadcast(e2, t)) : Promise.reject();
  }
  get promise() {
    return this._promise;
  }
  _connectListener(e2) {
    this._thread && this._thread.on(e2.eventName, e2.callback).then((t) => {
      e2.removed || (e2.threadHandle = t);
    });
  }
};

export {
  h
};
//# sourceMappingURL=chunk-C7GHK6X7.js.map
