import {
  E
} from "./chunk-L4AYSXFJ.js";
import {
  I
} from "./chunk-POQ3T5EH.js";
import {
  r as r2
} from "./chunk-DM4WHMQY.js";
import {
  P,
  d,
  p
} from "./chunk-6WHTZNUH.js";
import {
  r,
  s2 as s
} from "./chunk-ANKOCGE2.js";
import {
  n as n2
} from "./chunk-IRGZKO7V.js";
import {
  C,
  S,
  c2 as c,
  u
} from "./chunk-HJY2YILU.js";
import {
  l
} from "./chunk-2MMLMOWS.js";
import {
  l as l2
} from "./chunk-4323ZVPF.js";
import {
  n2 as n
} from "./chunk-WYIDUUN2.js";

// ../../../node_modules/@arcgis/core/views/support/Yield.js
var o = Symbol("Yield");

// ../../../node_modules/@arcgis/core/layers/support/PromiseQueue.js
var i = class {
  constructor() {
    this._tasks = new Array(), this._runningTasks = r2(0);
  }
  get length() {
    return this._tasks.length;
  }
  get running() {
    return this._runningTasks.value > 0;
  }
  destroy() {
    this.cancelAll();
  }
  runTask(s2) {
    if (0 === this.length) return o;
    for (; !s2.done && this._process(s2); ) s2.madeProgress();
  }
  push(s2, t, e) {
    return ++this._runningTasks.value, new Promise((r3, n3) => this._tasks.push(new a(r3, n3, s2, t, e))).finally(() => --this._runningTasks.value);
  }
  unshift(s2, t, e) {
    return ++this._runningTasks.value, new Promise((r3, n3) => this._tasks.unshift(new a(r3, n3, s2, t, e))).finally(() => --this._runningTasks.value);
  }
  _process(r3) {
    if (0 === this._tasks.length) return false;
    const n3 = this._tasks.shift();
    try {
      const i2 = c(n3.signal);
      if (i2 && !n3.abortCallback) n3.reject(u());
      else {
        const s2 = i2 ? n3.abortCallback?.(u()) : n3.callback(r3);
        S(s2) ? s2.then(n3.resolve, n3.reject) : n3.resolve(s2);
      }
    } catch (i2) {
      n3.reject(i2);
    }
    return true;
  }
  cancelAll() {
    const s2 = u();
    for (const t of this._tasks) if (t.abortCallback) {
      const e = t.abortCallback(s2);
      t.resolve(e);
    } else t.reject(s2);
    this._tasks.length = 0;
  }
};
var a = class {
  constructor(s2, t, e, r3 = void 0, n3 = void 0) {
    this.resolve = s2, this.reject = t, this.callback = e, this.signal = r3, this.abortCallback = n3;
  }
};

// ../../../node_modules/@arcgis/core/views/support/Scheduler.js
function g() {
  return new k.Scheduler();
}
var I2;
!function(e) {
  e.RESOURCE_CONTROLLER_IMMEDIATE = "immediate", e.RESOURCE_CONTROLLER = "schedule", e.SLIDE = "slide", e.STREAM_DATA_LOADER = "stream loader", e.ELEVATION_QUERY = "elevation query", e.TERRAIN_SURFACE = "terrain", e.SURFACE_GEOMETRY_UPDATES = "surface geometry updates", e.LOD_RENDERER = "LoD renderer", e.GRAPHICS_CORE = "Graphics3D", e.I3S_CONTROLLER = "I3S", e.POINT_CLOUD_LAYER = "point cloud", e.FEATURE_TILE_FETCHER = "feature fetcher", e.OVERLAY = "overlay", e.STAGE = "stage", e.GRAPHICS_DECONFLICTOR = "graphics deconflictor", e.FILTER_VISIBILITY = "Graphics3D filter visibility", e.SCALE_VISIBILITY = "Graphics3D scale visibility", e.FRUSTUM_VISIBILITY = "Graphics3D frustum visibility", e.POINT_OF_INTEREST_FREQUENT = "POI frequent", e.POINT_OF_INTEREST_INFREQUENT = "POI infrequent", e.LABELER = "labeler", e.FEATURE_QUERY_ENGINE = "feature query", e.FEATURE_TILE_TREE = "feature tile tree", e.FEATURE_TILE_TREE_ACTIVE = "fast feature tile tree", e.ELEVATION_ALIGNMENT = "elevation alignment", e.ELEVATION_ALIGNMENT_SCENE = "elevation alignment scene", e.TEXT_TEXTURE_ATLAS = "text texture atlas", e.TEXTURE_UNLOAD = "texture unload", e.LINE_OF_SIGHT_TOOL = "line of sight tool", e.LINE_OF_SIGHT_TOOL_INTERACTIVE = "interactive line of sight tool", e.ELEVATION_PROFILE = "elevation profile", e.SNAPPING = "snapping", e.SHADOW_ACCUMULATOR = "shadow accumulator", e.CLOUDS_GENERATOR = "clouds generator", e[e.NONE = 0] = "NONE", e[e.TEST_PRIO = 1] = "TEST_PRIO";
}(I2 || (I2 = {}));
var R = 0;
var p2 = /* @__PURE__ */ new Map([[I2.RESOURCE_CONTROLLER_IMMEDIATE, R], [I2.RESOURCE_CONTROLLER, 4], [I2.SLIDE, R], [I2.STREAM_DATA_LOADER, R], [I2.ELEVATION_QUERY, R], [I2.TERRAIN_SURFACE, 1], [I2.SURFACE_GEOMETRY_UPDATES, 1], [I2.LOD_RENDERER, 2], [I2.GRAPHICS_CORE, 2], [I2.I3S_CONTROLLER, 2], [I2.POINT_CLOUD_LAYER, 2], [I2.FEATURE_TILE_FETCHER, 2], [I2.OVERLAY, 4], [I2.STAGE, 4], [I2.GRAPHICS_DECONFLICTOR, 4], [I2.FILTER_VISIBILITY, 4], [I2.SCALE_VISIBILITY, 4], [I2.FRUSTUM_VISIBILITY, 4], [I2.CLOUDS_GENERATOR, 4], [I2.POINT_OF_INTEREST_FREQUENT, 6], [I2.POINT_OF_INTEREST_INFREQUENT, 30], [I2.LABELER, 8], [I2.FEATURE_QUERY_ENGINE, 8], [I2.FEATURE_TILE_TREE, 16], [I2.FEATURE_TILE_TREE_ACTIVE, R], [I2.ELEVATION_ALIGNMENT, 12], [I2.ELEVATION_ALIGNMENT_SCENE, 14], [I2.TEXT_TEXTURE_ATLAS, 12], [I2.TEXTURE_UNLOAD, 12], [I2.LINE_OF_SIGHT_TOOL, 16], [I2.LINE_OF_SIGHT_TOOL_INTERACTIVE, R], [I2.SNAPPING, R], [I2.SHADOW_ACCUMULATOR, 30]]);
function f(e) {
  return p2.has(e) ? p2.get(e) : "number" == typeof e ? e : 1;
}
var A = n2(6.5);
var L = n2(1);
var N = n2(30);
var O = n2(1e3 / 30);
var S2 = n2(100);
var b = 0.9;
var k;
var U;
!function(a2) {
  class n3 {
    get updating() {
      return this._updating.value;
    }
    _updatingChanged() {
      this._updating.value = this._tasks.some((e) => e.needsUpdate);
    }
    constructor() {
      this._updating = r2(true), this._microTaskQueued = false, this._frameNumber = 0, this.performanceInfo = {
        total: new s("total"),
        tasks: /* @__PURE__ */ new Map()
      }, this._frameTaskTimes = /* @__PURE__ */ new Map(), this._budget = new g2(), this._state = I.INTERACTING, this._tasks = new l2(), this._runQueue = new l2(), this._load = 0, this._idleStateCallbacks = new l2(), this._idleUpdatesStartFired = false, this._forceTask = false, this._debug = false, this._debugHandle = d(() => E.SCHEDULER_LOG_SLOW_TASKS, (e) => this._debug = e, P);
      for (const e of Object.keys(I2)) this.performanceInfo.tasks.set(I2[e], new s(I2[e]));
    }
    destroy() {
      this._tasks.toArray().forEach((e) => e.remove()), this._tasks.clear(), l(this._debugHandle), this._microTaskQueued = false, this._updatingChanged();
    }
    taskRunningChanged(e) {
      this._updatingChanged(), e && this._budget.remaining > 0 && !this._microTaskQueued && (this._microTaskQueued = true, queueMicrotask(() => {
        this._microTaskQueued && (this._microTaskQueued = false, this._budget.remaining > 0 && this._schedule() && this.frame());
      }));
    }
    registerTask(e, t) {
      const s2 = new _(this, e, t);
      return this._tasks.push(s2), this._updatingChanged(), this.performanceInfo.tasks.has(e) || this.performanceInfo.tasks.set(e, new s(e)), s2;
    }
    registerIdleStateCallbacks(e, t) {
      const s2 = {
        idleBegin: e,
        idleEnd: t
      };
      this._idleStateCallbacks.push(s2), this.state === I.IDLE && this._idleUpdatesStartFired && s2.idleBegin();
      const r3 = this;
      return {
        remove: () => this._removeIdleStateCallbacks(s2),
        set idleBegin(e2) {
          r3._idleUpdatesStartFired && (s2.idleEnd(), r3._state === I.IDLE && e2()), s2.idleBegin = e2;
        },
        set idleEnd(e2) {
          s2.idleEnd = e2;
        }
      };
    }
    get load() {
      return this._load;
    }
    set state(e) {
      this._state !== e && (this._state = e, this.state !== I.IDLE && this._idleUpdatesStartFired && (this._idleUpdatesStartFired = false, this._idleStateCallbacks.forAll((e2) => e2.idleEnd())));
    }
    get state() {
      return this._state;
    }
    updateBudget(e) {
      ++this._frameNumber;
      let t = A, s2 = e.frameDuration, r3 = L;
      switch (this.state) {
        case I.IDLE:
          t = n2(0), s2 = n2(Math.max(S2, e.frameDuration)), r3 = N;
          break;
        case I.INTERACTING:
          s2 = n2(Math.max(O, e.frameDuration));
        case I.ANIMATING:
      }
      return s2 = n2(s2 - e.elapsedFrameTime - t), this.state !== I.IDLE && s2 < L && !this._forceTask ? (this._forceTask = true, false) : (s2 = n2(Math.max(s2, r3)), this._budget.reset(s2, this.state), this._updateLoad(), this._schedule());
    }
    frame() {
      switch (this._forceTask = false, this._microTaskQueued = false, this.state) {
        case I.IDLE:
          this._idleUpdatesStartFired || (this._idleUpdatesStartFired = true, this._idleStateCallbacks.forAll((e) => e.idleBegin())), this._runIdle();
          break;
        case I.INTERACTING:
          this._runInteracting();
          break;
        default:
          this._runAnimating();
      }
    }
    stopFrame() {
      this._budget.reset(n2(0), this._state), this._budget.madeProgress();
    }
    _removeIdleStateCallbacks(e) {
      this._idleUpdatesStartFired && e.idleEnd(), this._idleStateCallbacks.removeUnordered(e);
    }
    removeTask(e) {
      this._tasks.removeUnordered(e), this._runQueue.removeUnordered(e), this._updatingChanged();
    }
    _updateTask(e) {
      this._tasks.forAll((t) => {
        t.name === e && t.setPriority(e);
      });
    }
    _getState(e) {
      if (this._runQueue.some((t2) => t2.name === e)) return U.SCHEDULED;
      let t = U.IDLE;
      return this._tasks.forAll((s2) => {
        s2.name === e && s2.needsUpdate && (s2.schedulePriority <= 1 ? t = U.READY : t !== U.READY && (t = U.WAITING));
      }), t;
    }
    _getRuntime(e) {
      let t = 0;
      return this._tasks.forAll((s2) => {
        s2.name === e && (t += s2.runtime);
      }), t;
    }
    _resetRuntimes() {
      this._tasks.forAll((e) => e.runtime = 0);
    }
    _getRunning() {
      const e = /* @__PURE__ */ new Map();
      if (this._tasks.forAll((t2) => {
        t2.needsUpdate && e.set(t2.name, (e.get(t2.name) || 0) + 1);
      }), 0 === e.size) return null;
      let t = "";
      return e.forEach((e2, s2) => {
        t += e2 > 1 ? ` ${e2}x ${s2}` : ` ${s2}`;
      }), t;
    }
    _runIdle() {
      this._run();
    }
    _runInteracting() {
      this._run();
    }
    _runAnimating() {
      this._run();
    }
    _updateLoad() {
      const e = this._tasks.reduce((e2, t) => t.needsUpdate ? ++e2 : e2, 0);
      this._load = this._load * b + e * (1 - b);
    }
    _schedule() {
      for (this._runQueue.filterInPlace((e) => !!e.needsUpdate || (e.schedulePriority = e.basePriority, false)), this._tasks.forAll((e) => {
        e.basePriority === R && e.needsUpdate && !this._runQueue.includes(e) && e.blockFrame !== this._frameNumber && this._runQueue.unshift(e);
      }); 0 === this._runQueue.length; ) {
        let e = false, t = 0;
        if (this._tasks.forAll((s2) => {
          if (s2.needsUpdate && 0 !== s2.schedulePriority && s2.basePriority !== R && s2.blockFrame !== this._frameNumber) if (e = true, t = Math.max(t, s2.basePriority), 1 === s2.schedulePriority) s2.schedulePriority = 0, this._runQueue.push(s2);
          else --s2.schedulePriority;
        }), !e) return this._updatingChanged(), false;
      }
      return this._updatingChanged(), true;
    }
    _run() {
      const e = this._budget.now();
      this._startFrameTaskTimes();
      do {
        for (; this._runQueue.length > 0; ) {
          const r3 = this._budget.now(), i2 = this._runQueue.pop();
          this._budget.resetProgress();
          try {
            i2.task.runTask(this._budget) === o && (i2.blockFrame = this._frameNumber);
          } catch (s2) {
            n.getLogger("esri.views.support.Scheduler").error(`Exception in task "${i2.name}"`, s2), i2.blockFrame = this._frameNumber;
          }
          !this._budget.hasProgressed && i2.blockFrame !== this._frameNumber && i2.needsUpdate && (i2.name, I2.I3S_CONTROLLER, i2.blockFrame = this._frameNumber), i2.schedulePriority = i2.basePriority;
          const a3 = this._budget.now() - r3;
          if (i2.runtime += a3, this._frameTaskTimes.set(i2.priority, this._frameTaskTimes.get(i2.priority) + a3), this._budget.remaining <= 0) return this._updatingChanged(), void this._recordFrameTaskTimes(this._budget.now() - e);
        }
      } while (this._schedule());
      this._updatingChanged(), this._recordFrameTaskTimes(this._budget.now() - e);
    }
    _startFrameTaskTimes() {
      for (const e of Object.keys(I2)) this._frameTaskTimes.set(I2[e], 0);
    }
    _recordFrameTaskTimes(e) {
      this._frameTaskTimes.forEach((e2, t) => this.performanceInfo.tasks.get(t).record(e2)), this.performanceInfo.total.record(e);
    }
    get test() {
    }
  }
  a2.Scheduler = n3;
  class _ {
    get task() {
      return this._task.value;
    }
    get updating() {
      return this._queue.running;
    }
    constructor(t, s2, r3) {
      this._scheduler = t, this.name = s2, this.blockFrame = 0, this.runtime = 0, this._queue = new i(), this._handles = new r(), this._basePriority = f(s2), this.schedulePriority = this._basePriority, this._task = r2(null != r3 ? r3 : this._queue), this._handles.add(p(() => this.task.running, (e) => t.taskRunningChanged(e)));
    }
    remove() {
      this.processQueue(C2), this._scheduler.removeTask(this), this.schedule = F.schedule, this.reschedule = F.reschedule, this._handles.destroy();
    }
    get basePriority() {
      return this._basePriority;
    }
    setPriority(e) {
      if (this.name === e) return;
      this.name = e;
      const t = f(e);
      this._basePriority !== R && 0 === this.schedulePriority || (this.schedulePriority = t), this._basePriority = t;
    }
    get priority() {
      return this.name;
    }
    set priority(e) {
      this.setPriority(e);
    }
    get needsUpdate() {
      return this.updating || this.task.running;
    }
    schedule(e, t, s2) {
      return this._queue.push(e, t, s2);
    }
    reschedule(e, t, s2) {
      return this._queue.unshift(e, t, s2);
    }
    processQueue(e) {
      return this._queue.runTask(e);
    }
  }
  class g2 {
    constructor() {
      this._begin = "undefined" != typeof performance ? performance.now() : 0, this._budget = 0, this._state = I.IDLE, this._done = false, this._progressed = false, this._enabled = true;
    }
    run(e) {
      return !this.done && (true === e() && this.madeProgress(), true);
    }
    get done() {
      return this._done;
    }
    get budget() {
      return this._budget;
    }
    madeProgress() {
      return this._progressed = true, this._done = this.elapsed >= this._budget && this._enabled, this._done;
    }
    get state() {
      return this._state;
    }
    get enabled() {
      return this._enabled;
    }
    set enabled(e) {
      this._enabled = e;
    }
    reset(e, t) {
      this._begin = this.now(), this._budget = e, this._state = t, this.resetProgress();
    }
    get remaining() {
      return Math.max(this._budget - this.elapsed, 0);
    }
    now() {
      return performance.now();
    }
    get elapsed() {
      return this.now() - this._begin;
    }
    resetProgress() {
      this._progressed = false, this._done = false;
    }
    get hasProgressed() {
      return this._progressed;
    }
  }
  a2.Budget = g2;
}(k || (k = {})), function(e) {
  e.SCHEDULED = "s", e.READY = "r", e.WAITING = "w", e.IDLE = "i";
}(U || (U = {}));
var C2 = (() => {
  const e = new k.Budget();
  return e.enabled = false, e;
})();
var P2 = class {
  remove() {
  }
  processQueue() {
  }
  schedule(e, t, s2) {
    try {
      if (c(t)) {
        const e2 = u();
        return s2 ? Promise.resolve(s2(e2)) : Promise.reject(e2);
      }
      return C(e(C2));
    } catch (r3) {
      return Promise.reject(r3);
    }
  }
  reschedule(e, t, s2) {
    return this.schedule(e, t, s2);
  }
};
var F = new P2();

export {
  o,
  i,
  g,
  I2 as I,
  C2 as C,
  F
};
//# sourceMappingURL=chunk-YFQ32AQX.js.map
