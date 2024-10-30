import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  F,
  I
} from "./chunk-EXKCGLRO.js";
import {
  e as e2
} from "./chunk-NUICEVIH.js";
import {
  S
} from "./chunk-NXK752PZ.js";
import {
  y
} from "./chunk-UVNLCXWD.js";
import {
  a3 as a
} from "./chunk-UDMPWVPF.js";
import {
  k
} from "./chunk-AIZ3T7E3.js";
import {
  e,
  l
} from "./chunk-6WGE3IUL.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/views/interactive/snapping/SnappingOperation.js
var p = class extends S {
  constructor(t) {
    super(t), this.constrainResult = (t2) => t2, this._snapPoints = null, this._frameTask = null, this._abortController = null, this._stagedPoint = null, this._snap = k((t2, s, o, n) => __async(this, null, function* () {
      const i = this._frameTask;
      if (null == i) return;
      const r = yield i.schedule(() => s.snap(__spreadProps(__spreadValues({}, t2), {
        context: o,
        signal: n
      })), n);
      r.valid && (yield i.schedule(() => {
        this.stagedPoint = r.apply(), t2 !== this._snapPoints && null != this._snapPoints && (this.stagedPoint = s.update(__spreadProps(__spreadValues({}, this._snapPoints), {
          context: o
        })));
      }, n));
    }));
  }
  get stagedPoint() {
    return this._stagedPoint;
  }
  set stagedPoint(t) {
    this._stagedPoint = this.constrainResult(t);
  }
  initialize() {
    const t = "3d" === this.view.type ? this.view?.resourceController?.scheduler : null;
    this._frameTask = null != t ? t.registerTask(I.SNAPPING) : F;
  }
  destroy() {
    this._abortController = e(this._abortController), this._frameTask = l(this._frameTask);
  }
  update(t, s, o) {
    this._snapPoints = t;
    const {
      point: n,
      scenePoint: i
    } = t, r = s.update({
      point: n,
      scenePoint: i,
      context: o
    });
    return this.stagedPoint = r, r;
  }
  snap(t, s, o) {
    return __async(this, null, function* () {
      const {
        point: n,
        scenePoint: i
      } = t;
      return this.stagedPoint = s.update({
        point: n,
        scenePoint: i,
        context: o
      }), this._snapPoints = t, null == this._abortController && (this._abortController = new AbortController()), this._snap(t, s, o, this._abortController.signal);
    });
  }
  snapAgainNearPreviousMapPoint(t, s) {
    return __async(this, null, function* () {
      null != this._snapPoints && (yield this.snap(this._snapPoints, t, s));
    });
  }
  abort() {
    this._abortController = e(this._abortController), this._snapPoints = null;
  }
};
e2([y({
  constructOnly: true
})], p.prototype, "view", void 0), e2([y()], p.prototype, "stagedPoint", null), e2([y()], p.prototype, "constrainResult", void 0), e2([y()], p.prototype, "_stagedPoint", void 0), p = e2([a("esri.views.interactive.snapping.SnappingOperation")], p);

export {
  p
};
//# sourceMappingURL=chunk-PF7D56B5.js.map
