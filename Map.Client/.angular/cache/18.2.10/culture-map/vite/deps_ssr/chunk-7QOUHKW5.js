import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  s as s3
} from "./chunk-NHYYZMJR.js";
import {
  c as c2,
  e as e2,
  i
} from "./chunk-XLEC46FY.js";
import {
  L,
  S,
  b,
  c2 as c,
  m,
  o2,
  s as s2,
  u
} from "./chunk-AIZ3T7E3.js";
import {
  e,
  o
} from "./chunk-6UEMNP3E.js";
import {
  l
} from "./chunk-6WGE3IUL.js";
import {
  s2 as s
} from "./chunk-6JFGZTLU.js";
import {
  has
} from "./chunk-2ZJE6ZFX.js";
import {
  __async
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/core/workers/utils.js
var r = "worker:port-closed";
var e3;
!function(t2) {
  t2[t2.HANDSHAKE = 0] = "HANDSHAKE", t2[t2.OPEN = 1] = "OPEN", t2[t2.OPENED = 2] = "OPENED", t2[t2.RESPONSE = 3] = "RESPONSE", t2[t2.INVOKE = 4] = "INVOKE", t2[t2.ABORT = 5] = "ABORT", t2[t2.CLOSE = 6] = "CLOSE", t2[t2.OPEN_PORT = 7] = "OPEN_PORT", t2[t2.ON = 8] = "ON";
}(e3 || (e3 = {}));
var n = 0;
function s4() {
  return n++;
}
function o3(t2) {
  return t2 && "object" == typeof t2 && ("result" in t2 || "transferList" in t2);
}
function i2(t2) {
  return t2 ? "string" == typeof t2 ? JSON.stringify({
    name: "message",
    message: t2
  }) : t2.toJSON ? JSON.stringify(t2) : JSON.stringify({
    name: t2.name,
    message: t2.message,
    details: t2.details || {
      stack: t2.stack
    }
  }) : null;
}
function a(t2, r3, n4, s5) {
  if (r3.type === e3.OPEN_PORT) return void t2.postMessage(r3, [r3.port]);
  if (r3.type !== e3.INVOKE && r3.type !== e3.RESPONSE) return void t2.postMessage(r3);
  let f2;
  if (o3(n4) ? (f2 = u2(n4.transferList), r3.data = n4.result) : (f2 = u2(s5), r3.data = n4), f2) {
    if (has("ff")) {
      for (const n5 of f2) if ("byteLength" in n5 && n5.byteLength > 267386880) {
        const n6 = "Worker call with large ArrayBuffer would crash Firefox";
        switch (r3.type) {
          case e3.INVOKE:
            throw n6;
          case e3.RESPONSE:
            return void a(t2, {
              type: e3.RESPONSE,
              jobId: r3.jobId,
              error: i2(n6)
            });
        }
      }
    }
    t2.postMessage(r3, f2);
  } else t2.postMessage(r3);
}
function f(t2) {
  if (!t2) return null;
  const r3 = t2.data;
  return r3 ? "string" == typeof r3 ? JSON.parse(r3) : r3 : null;
}
function u2(t2) {
  if (!t2?.length) return null;
  if (has("esri-workers-arraybuffer-transfer")) return t2;
  const r3 = t2.filter((t3) => !c3(t3));
  return r3.length ? r3 : null;
}
function c3(t2) {
  return t2 instanceof ArrayBuffer || "ArrayBuffer" === t2?.constructor?.name;
}
function O(e5) {
  return __async(this, null, function* () {
    try {
      return yield e5;
    } catch (n4) {
      const e6 = n4?.name === r;
      if (!(b(n4) || e6)) throw n4;
      return;
    }
  });
}

// ../../../node_modules/@arcgis/core/core/workers/connectionRegistry.js
var n2 = new FinalizationRegistry((n4) => {
  n4.close();
});
function e4(e5, i4) {
  n2.register(e5, i4, i4);
}
function i3(e5) {
  n2.unregister(e5);
}

// ../../../node_modules/@arcgis/core/core/workers/InvokeHandler.js
function t(t2, r3) {
  return new Proxy({}, {
    get: (e5, i4, s5) => (...e6) => {
      let s6, o4;
      const a2 = e6[e6.length - 1];
      n3(a2) && (s6 = a2.signal, o4 = a2.transferList, e6.pop());
      return t2.apply(r3 ? `${r3}.${i4.toString()}` : i4.toString(), e6, {
        transferList: o4,
        signal: s6
      });
    }
  });
}
function n3(t2) {
  return "object" == typeof t2 && !Array.isArray(t2) && null != t2 && ("signal" in t2 || "transferList" in t2 || 0 === Object.keys(t2).length);
}

// ../../../node_modules/@arcgis/core/core/workers/registry.js
var r2 = {
  statsWorker: () => import("./statsWorker-SPMMCGXT.js"),
  geometryEngineWorker: () => import("./geometryEngineWorker-MX44CTAG.js"),
  CSVSourceWorker: () => import("./CSVSourceWorker-P5HVYQKX.js"),
  EdgeProcessingWorker: () => import("./EdgeProcessingWorker-VZJ76YTH.js"),
  ElevationSamplerWorker: () => import("./ElevationSamplerWorker-ALYGEZLY.js"),
  FeatureServiceSnappingSourceWorker: () => import("./FeatureServiceSnappingSourceWorker-AZZJIUS2.js"),
  GeoJSONSourceWorker: () => import("./GeoJSONSourceWorker-VVREB6U5.js"),
  LercWorker: () => import("./LercWorker-VWDUEOVK.js"),
  MemorySourceWorker: () => import("./MemorySourceWorker-7ROYYFPP.js"),
  PBFDecoderWorker: () => import("./PBFDecoderWorker-R2LXESHV.js"),
  FeaturePipelineWorker: () => import("./FeaturePipelineWorker-E2QEFBDG.js"),
  PointCloudWorker: () => import("./PointCloudWorker-NJJSEX34.js"),
  RasterWorker: () => import("./RasterWorker-BINZXKV7.js"),
  SceneLayerSnappingSourceWorker: () => import("./SceneLayerSnappingSourceWorker-MA5LZYLD.js"),
  SceneLayerWorker: () => import("./SceneLayerWorker-65HWTRDV.js"),
  WFSSourceWorker: () => import("./WFSSourceWorker-JRLRYTD5.js"),
  WorkerTileHandler: () => import("./WorkerTileHandler-YLRLLLDG.js"),
  Lyr3DWorker: () => import("./Lyr3DWorker-GBTRAJ7P.js")
};

// ../../../node_modules/@arcgis/core/core/workers/RemoteClient.js
var {
  CLOSE: M,
  ABORT: k,
  INVOKE: j,
  RESPONSE: y,
  OPEN_PORT: I,
  ON: J
} = e3;
var w = 2;
var O2 = class {
  constructor(e5) {
    this._invoke = e5, this._timer = null, this._cancelledJobIds = /* @__PURE__ */ new Set(), this._invokeMessages = [], this._timer = null, this._process = this._process.bind(this);
  }
  push(e5) {
    e5.type === e3.ABORT ? this._cancelledJobIds.add(e5.jobId) : (this._invokeMessages.push(e5), null === this._timer && (this._timer = setTimeout(this._process, 0)));
  }
  clear() {
    this._invokeMessages.length = 0, this._cancelledJobIds.clear(), this._timer = null;
  }
  _process() {
    this._timer = null;
    for (const e5 of this._invokeMessages) this._cancelledJobIds.has(e5.jobId) || this._invoke(e5);
    this._cancelledJobIds.clear(), this._invokeMessages.length = 0;
  }
};
var E = class _E {
  static connect(e5, s5) {
    const t2 = new MessageChannel();
    let o4;
    o4 = "function" == typeof e5 ? new e5() : "default" in e5 && "function" == typeof e5.default ? new e5.default() : e5;
    const n4 = new _E(t2.port1, {
      channel: t2,
      client: o4,
      schedule: s5
    });
    return "object" == typeof o4 && "remoteClient" in o4 && (o4.remoteClient = n4), _E.clients.set(n4, o4), t2.port2;
  }
  static loadWorker(e5) {
    const s5 = r2[e5];
    return s5 ? s5() : Promise.resolve(null);
  }
  constructor(e5, s5, t2) {
    this._port = e5, this._jobQueue = t2, this._outJobs = /* @__PURE__ */ new Map(), this._inJobs = /* @__PURE__ */ new Map(), this._invokeQueue = new O2((e6) => this._onInvokeMessage(e6)), this._client = s5.client, this._onMessage = this._onMessage.bind(this), this._channel = s5.channel, this._schedule = s5.schedule, this._port.addEventListener("message", this._onMessage), this._port.start();
  }
  close() {
    this._post({
      type: M
    }), this._close();
  }
  isBusy() {
    return this._outJobs.size > 0;
  }
  invoke(e5, s5, t2) {
    return this.apply(e5, [s5], t2);
  }
  apply(e5, t2, o4) {
    const a2 = o4?.signal, h = o4?.transferList;
    if (!this._port) return Promise.reject(new s(r, `Cannot call invoke('${e5}'), port is closed`, {
      methodName: e5,
      data: t2
    }));
    const c5 = s4();
    return new Promise((s5, o5) => {
      if (c(a2)) return this._processWork(), void o5(u());
      const p = m(a2, () => {
        const e6 = this._outJobs.get(c5);
        e6 && (this._outJobs.delete(c5), this._processWork(), l(e6.abortHandle), this._post({
          type: k,
          jobId: c5
        }), o5(u()));
      }), _ = {
        resolve: s5,
        reject: o5,
        abortHandle: p,
        debugInfo: e5
      };
      this._outJobs.set(c5, _), this._post({
        type: j,
        jobId: c5,
        methodName: e5,
        abortable: null != a2
      }, t2, h);
    });
  }
  createInvokeProxy(e5) {
    return t(this, e5);
  }
  on(e5, s5) {
    const t2 = new MessageChannel();
    function n4(e6) {
      s5(e6.data);
    }
    return this._port.postMessage({
      type: e3.ON,
      eventType: e5,
      port: t2.port2
    }, [t2.port2]), t2.port1.addEventListener("message", n4), t2.port1.start(), e(() => {
      t2.port1.postMessage({
        type: e3.CLOSE
      }), t2.port1.close(), t2.port1.removeEventListener("message", n4);
    });
  }
  jobAdded() {
    this._processWork();
  }
  openPort() {
    const e5 = new MessageChannel();
    return this._post({
      type: I,
      port: e5.port2
    }), e5.port1;
  }
  _processWork() {
    if (this._outJobs.size >= w) return;
    const e5 = this._jobQueue?.pop();
    if (!e5) return;
    const {
      methodName: s5,
      data: t2,
      invokeOptions: o4,
      resolver: n4
    } = e5;
    this.apply(s5, t2, o4).then((e6) => n4.resolve(e6)).catch((e6) => n4.reject(e6));
  }
  _close() {
    this._channel && (this._channel = void 0), this._port.removeEventListener("message", this._onMessage), this._port.close(), this._outJobs.forEach((e5) => {
      l(e5.abortHandle), e5.reject(u(`Worker closing, aborting job calling '${e5.debugInfo}'`));
    }), this._inJobs.clear(), this._outJobs.clear(), this._invokeQueue.clear(), this._port = null, this._client = null, this._schedule = null;
  }
  _onMessage(e5) {
    null != this._schedule ? this._schedule(() => this._processMessage(e5, true)) : this._processMessage(e5, false);
  }
  _processMessage(e5, s5) {
    const t2 = f(e5);
    if (t2) switch (t2.type) {
      case y:
        this._onResponseMessage(t2);
        break;
      case j:
        s5 ? this._onInvokeMessage(t2) : this._invokeQueue.push(t2);
        break;
      case k:
        this._onAbortMessage(t2);
        break;
      case M:
        this._onCloseMessage();
        break;
      case I:
        this._onOpenPortMessage(t2);
        break;
      case J:
        this._onOnMessage(t2);
    }
  }
  _onAbortMessage(e5) {
    const s5 = this._inJobs, t2 = e5.jobId, o4 = s5.get(t2);
    this._invokeQueue.push(e5), o4 && (o4.controller && o4.controller.abort(), s5.delete(t2));
  }
  _onCloseMessage() {
    const e5 = this._client;
    this._close(), e5 && "destroy" in e5 && _E.clients.get(this) === e5 && e5.destroy(), _E.clients.delete(this), e5?.remoteClient && (e5.remoteClient = null);
  }
  _onInvokeMessage(e5) {
    const {
      methodName: s5,
      jobId: t2,
      data: o4 = [],
      abortable: n4
    } = e5, r3 = n4 ? new AbortController() : null, i4 = this._inJobs;
    let l2, c5 = this._client, p = c5[s5];
    try {
      if (!p && s5 && s5.includes(".")) {
        const e6 = s5.split(".");
        for (let s6 = 0; s6 < e6.length - 1; s6++) c5 = c5[e6[s6]], p = c5[e6[s6 + 1]];
      }
      if ("function" != typeof p) throw new TypeError(`${s5} is not a function`);
      o4.push({
        client: this,
        signal: r3 ? r3.signal : null
      }), l2 = p.apply(c5, o4);
    } catch (_) {
      return void this._post({
        type: y,
        jobId: t2,
        error: i2(_)
      });
    }
    S(l2) ? (i4.set(t2, {
      controller: r3,
      promise: l2
    }), l2.then((e6) => {
      i4.has(t2) && (i4.delete(t2), this._post({
        type: y,
        jobId: t2
      }, e6));
    }, (e6) => {
      i4.has(t2) && (i4.delete(t2), b(e6) || this._post({
        type: y,
        jobId: t2,
        error: i2(e6 || {
          message: `Error encountered at method ${s5}`
        })
      }));
    })) : this._post({
      type: y,
      jobId: t2
    }, l2);
  }
  _onOpenPortMessage(e5) {
    new _E(e5.port, {
      client: this._client
    });
  }
  _onOnMessage(e5) {
    const {
      port: s5
    } = e5, o4 = this._client.on(e5.eventType, (e6) => {
      s5.postMessage(e6);
    }), n4 = o2(e5.port, "message", (e6) => {
      const t2 = f(e6);
      t2?.type === e3.CLOSE && (n4.remove(), o4.remove(), s5.close());
    });
  }
  _onResponseMessage(e5) {
    const {
      jobId: t2,
      error: o4,
      data: r3
    } = e5, i4 = this._outJobs;
    if (!i4.has(t2)) return;
    const l2 = i4.get(t2);
    i4.delete(t2), this._processWork(), l(l2.abortHandle), o4 ? l2.reject(s.fromJSON(JSON.parse(o4))) : l2.resolve(r3);
  }
  _post(e5, s5, t2) {
    return a(this._port, e5, s5, t2);
  }
};
E.kernelInfo = {
  buildDate: e2,
  fullVersion: i,
  revision: c2
}, E.clients = /* @__PURE__ */ new Map();

// ../../../node_modules/@arcgis/core/core/workers/Connection.js
var c4 = class {
  constructor() {
    this._inUseClients = new Array(), this._clients = new Array(), this._clientPromises = new Array(), this._ongoingJobsQueue = new s3();
  }
  destroy() {
    this.close();
  }
  get closed() {
    return !this._clients?.length;
  }
  open(e5, s5) {
    return new Promise((i4, o4) => {
      let r3 = true;
      const l2 = (e6) => {
        s2(s5.signal), r3 && (r3 = false, e6());
      };
      this._clients.length = e5.length, this._clientPromises.length = e5.length, this._inUseClients.length = e5.length;
      for (let n4 = 0; n4 < e5.length; ++n4) {
        const r4 = e5[n4];
        S(r4) ? this._clientPromises[n4] = r4.then((e6) => (this._clients[n4] = new E(e6, s5, this._ongoingJobsQueue), l2(i4), this._clients[n4]), () => (l2(o4), null)) : (this._clients[n4] = new E(r4, s5, this._ongoingJobsQueue), this._clientPromises[n4] = Promise.resolve(this._clients[n4]), l2(i4));
      }
    });
  }
  broadcast(e5, t2, s5) {
    const i4 = new Array(this._clientPromises.length);
    for (let n4 = 0; n4 < this._clientPromises.length; ++n4) {
      const o4 = this._clientPromises[n4];
      i4[n4] = o4.then((i5) => i5?.invoke(e5, t2, s5));
    }
    return i4;
  }
  close() {
    let e5;
    for (; e5 = this._ongoingJobsQueue.pop(); ) e5.resolver.reject(u(`Worker closing, aborting job calling '${e5.methodName}'`));
    for (const t2 of this._clientPromises) t2.then((e6) => e6?.close());
    this._clients.length = 0, this._clientPromises.length = 0, this._inUseClients.length = 0, i3(this);
  }
  invoke(e5, t2, s5) {
    return this.apply(e5, [t2], s5);
  }
  apply(e5, t2, s5) {
    const n4 = L();
    this._ongoingJobsQueue.push({
      methodName: e5,
      data: t2,
      invokeOptions: s5,
      resolver: n4
    });
    for (let i4 = 0; i4 < this._clientPromises.length; i4++) {
      const e6 = this._clients[i4];
      e6 ? e6.jobAdded() : this._clientPromises[i4].then((e7) => e7?.jobAdded());
    }
    return n4.promise;
  }
  createInvokeProxy(e5) {
    return t(this, e5);
  }
  on(t2, s5) {
    return Promise.all(this._clientPromises).then(() => o(this._clients.map((e5) => e5.on(t2, s5))));
  }
  openPorts() {
    return new Promise((e5) => {
      const t2 = new Array(this._clientPromises.length);
      let s5 = t2.length;
      for (let i4 = 0; i4 < this._clientPromises.length; ++i4) {
        this._clientPromises[i4].then((n4) => {
          n4 && (t2[i4] = n4.openPort()), 0 == --s5 && e5(t2);
        });
      }
    });
  }
  get test() {
  }
};

export {
  e4 as e,
  e3 as e2,
  s4 as s,
  i2 as i,
  a,
  f,
  O,
  E,
  c4 as c
};
//# sourceMappingURL=chunk-7QOUHKW5.js.map
