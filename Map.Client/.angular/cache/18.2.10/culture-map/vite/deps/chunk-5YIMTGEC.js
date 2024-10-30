import {
  E,
  a,
  c as c3,
  e as e2,
  e2 as e3,
  f,
  i as i2,
  s as s4
} from "./chunk-6XGV55XZ.js";
import {
  c
} from "./chunk-MNLT652N.js";
import {
  n as n2
} from "./chunk-PRREDSOB.js";
import {
  D,
  U,
  _,
  c as c2,
  e,
  i
} from "./chunk-SYATLP3H.js";
import {
  t
} from "./chunk-ANP42J2U.js";
import {
  S,
  b,
  s as s3,
  w
} from "./chunk-HJY2YILU.js";
import {
  l
} from "./chunk-2MMLMOWS.js";
import {
  n2 as n,
  s,
  s2
} from "./chunk-WYIDUUN2.js";
import {
  has
} from "./chunk-DXLOWWK7.js";
import {
  __async,
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/core/workers/staticWorkerMessages.js
var a2 = {
  request(a6, s6) {
    return __async(this, null, function* () {
      const r2 = a6.options, n4 = r2.responseType;
      r2.signal = s6?.signal, r2.responseType = "native" === n4 || "native-request-init" === n4 ? "native-request-init" : n4 && ["blob", "json", "text"].includes(n4) && D(a6.url)?.after ? n4 : "array-buffer";
      const i3 = yield U(a6.url, r2), o = {
        data: i3.data,
        httpStatus: i3.httpStatus,
        ssl: i3.ssl
      };
      switch (i3.requestOptions?.responseType) {
        case "native-request-init":
          return delete o.data.signal, o;
        case "blob":
          o.data = yield o.data.arrayBuffer();
          break;
        case "json":
          o.data = new TextEncoder().encode(JSON.stringify(o.data)).buffer;
          break;
        case "text":
          o.data = new TextEncoder().encode(o.data).buffer;
      }
      return {
        result: o,
        transferList: [o.data]
      };
    });
  }
};

// ../../../node_modules/@arcgis/core/core/workers/loaderConfig.js
var a3 = {};
function r(s6) {
  const r2 = {
    async: s6.async,
    isDebug: s6.isDebug,
    locale: s6.locale,
    baseUrl: s6.baseUrl,
    has: __spreadValues({}, s6.has),
    map: __spreadValues({}, s6.map),
    packages: s6.packages?.concat() || [],
    paths: __spreadValues(__spreadValues({}, a3.paths), s6.paths)
  };
  return s6.hasOwnProperty("async") || (r2.async = true), s6.hasOwnProperty("isDebug") || (r2.isDebug = false), s6.baseUrl || (r2.baseUrl = a3.baseUrl), r2;
}

// ../../../node_modules/@arcgis/core/core/workers/WorkerFallback.js
var n3 = class {
  constructor() {
    const e4 = document.createDocumentFragment();
    ["addEventListener", "dispatchEvent", "removeEventListener"].forEach((s6) => {
      this[s6] = (...r2) => e4[s6](...r2);
    });
  }
};
var a4 = class {
  constructor() {
    this._dispatcher = new n3(), this._workerPostMessage({
      type: e3.HANDSHAKE
    });
  }
  terminate() {
  }
  get onmessage() {
    return this._onmessageHandler;
  }
  set onmessage(e4) {
    this._onmessageHandler && this.removeEventListener("message", this._onmessageHandler), this._onmessageHandler = e4, e4 && this.addEventListener("message", e4);
  }
  get onmessageerror() {
    return this._onmessageerrorHandler;
  }
  set onmessageerror(e4) {
    this._onmessageerrorHandler && this.removeEventListener("messageerror", this._onmessageerrorHandler), this._onmessageerrorHandler = e4, e4 && this.addEventListener("messageerror", e4);
  }
  get onerror() {
    return this._onerrorHandler;
  }
  set onerror(e4) {
    this._onerrorHandler && this.removeEventListener("error", this._onerrorHandler), this._onerrorHandler = e4, e4 && this.addEventListener("error", e4);
  }
  postMessage(s6) {
    t(() => {
      this._workerMessageHandler(new MessageEvent("message", {
        data: s6
      }));
    });
  }
  dispatchEvent(e4) {
    return this._dispatcher.dispatchEvent(e4);
  }
  addEventListener(e4, s6, r2) {
    this._dispatcher.addEventListener(e4, s6, r2);
  }
  removeEventListener(e4, s6, r2) {
    this._dispatcher.removeEventListener(e4, s6, r2);
  }
  _workerPostMessage(s6) {
    t(() => {
      this.dispatchEvent(new MessageEvent("message", {
        data: s6
      }));
    });
  }
  _workerMessageHandler(e4) {
    return __async(this, null, function* () {
      const n4 = f(e4);
      if (n4 && n4.type === e3.OPEN) {
        const {
          modulePath: e5,
          jobId: t2
        } = n4;
        let a6 = yield E.loadWorker(e5);
        a6 || (a6 = yield import(
          /* @vite-ignore */
          /* webpackIgnore: true */
          e5
        ));
        const o = E.connect(a6);
        this._workerPostMessage({
          type: e3.OPENED,
          jobId: t2,
          data: o
        });
      }
    });
  }
};

// ../../../node_modules/@arcgis/core/core/workers/workerFactory.js
var d = () => n.getLogger("esri.core.workers.workerFactory");
var {
  HANDSHAKE: m
} = e3;
var p = 'let globalId=0;const outgoing=new Map,configuration={CONFIGURATION};self.esriConfig=configuration.esriConfig;const workerPath=self.esriConfig.workers.workerPath,HANDSHAKE=0,OPEN=1,OPENED=2,RESPONSE=3,INVOKE=4,ABORT=5;function createAbortError(){const e=new Error("Aborted");return e.name="AbortError",e}function receiveMessage(e){return e&&e.data?"string"==typeof e.data?JSON.parse(e.data):e.data:null}function invokeStaticMessage(e,o,r){const t=r&&r.signal,n=globalId++;let s=null;return new Promise(((r,i)=>{if(t){if(t.aborted)return i(createAbortError());s=()=>{outgoing.get(n)&&(outgoing.delete(n),self.postMessage({type:5,jobId:n}),i(createAbortError()))},t.addEventListener("abort",s)}outgoing.set(n,{resolve:r,reject:i}),self.postMessage({type:4,jobId:n,methodName:e,abortable:null!=t,data:o})})).finally((()=>{t&&t.removeEventListener("abort",s)}))}let workerRevisionChecked=!1;function checkWorkerRevision(e){if(!workerRevisionChecked&&e.kernelInfo){workerRevisionChecked=!0;const{revision:o,fullVersion:r}=configuration.kernelInfo,{revision:t,fullVersion:n,version:s}=e.kernelInfo;esriConfig.assetsPath!==esriConfig.defaultAssetsPath&&o!==t&&console.warn(`Version mismatch detected between ArcGIS Maps SDK for JavaScript modules and assets. For more information visit https://bit.ly/3QnsuSo.\nModules version: ${r}\nAssets version: ${n??s}\nAssets path: ${esriConfig.assetsPath}`)}}function messageHandler(e){const o=receiveMessage(e);if(!o)return;const r=o.jobId;switch(o.type){case 1:let n;function t(e){const o=n.connect(e);self.postMessage({type:2,jobId:r,data:o},[o])}"function"==typeof define&&define.amd?require([workerPath],(e=>{n=e.default||e,checkWorkerRevision(n),n.loadWorker(o.modulePath).then((e=>e||new Promise((e=>{require([o.modulePath],e)})))).then(t)})):"System"in self&&"function"==typeof System.import?System.import(workerPath).then((e=>(n=e.default,checkWorkerRevision(n),n.loadWorker(o.modulePath)))).then((e=>e||System.import(o.modulePath))).then(t):esriConfig.workers.useDynamicImport?import(workerPath).then((e=>{n=e.default||e,checkWorkerRevision(n),n.loadWorker(o.modulePath).then((e=>e||import(o.modulePath))).then(t)})):(self.RemoteClient||importScripts(workerPath),n=self.RemoteClient.default||self.RemoteClient,checkWorkerRevision(n),n.loadWorker(o.modulePath).then(t));break;case 3:if(outgoing.has(r)){const s=outgoing.get(r);outgoing.delete(r),o.error?s.reject(JSON.parse(o.error)):s.resolve(o.data)}}}self.dojoConfig=configuration.loaderConfig,esriConfig.workers.loaderUrl&&(self.importScripts(esriConfig.workers.loaderUrl),"function"==typeof require&&"function"==typeof require.config&&require.config(configuration.loaderConfig)),self.addEventListener("message",messageHandler),self.postMessage({type:0});';
var g;
var h;
var k = "Failed to create Worker. Fallback to execute module in main thread";
function y() {
  return __async(this, null, function* () {
    if (!has("esri-workers")) return w2(new a4());
    if (!g && !h) try {
      const e5 = p.split("{CONFIGURATION}").join(b2());
      g = URL.createObjectURL(new Blob([e5], {
        type: "text/javascript"
      }));
    } catch (r2) {
      h = r2 || {};
    }
    let e4;
    if (g) try {
      e4 = new Worker(g, {
        name: "esri-worker-" + v++
      });
    } catch (r2) {
      d().warn(k, h), e4 = new a4();
    }
    else d().warn(k, h), e4 = new a4();
    return w2(e4);
  });
}
function w2(e4) {
  return __async(this, null, function* () {
    return new Promise((r2) => {
      function t2(s6) {
        const n4 = f(s6);
        n4 && n4.type === m && (e4.removeEventListener("message", t2), e4.removeEventListener("error", o), r2(e4));
      }
      function o(r3) {
        r3.preventDefault(), e4.removeEventListener("message", t2), e4.removeEventListener("error", o), d().warn("Failed to create Worker. Fallback to execute module in main thread", r3), (e4 = new a4()).addEventListener("message", t2), e4.addEventListener("error", o);
      }
      e4.addEventListener("message", t2), e4.addEventListener("error", o);
    });
  });
}
function b2() {
  let o;
  if (null != s.default) {
    const e4 = __spreadValues({}, s);
    delete e4.default, o = JSON.parse(JSON.stringify(e4));
  } else o = JSON.parse(JSON.stringify(s));
  o.assetsPath = _(o.assetsPath), o.defaultAssetsPath = o.defaultAssetsPath ? _(o.defaultAssetsPath) : void 0, o.request.interceptors = [], o.log.interceptors = [], o.locale = c(), o.has = {
    "esri-csp-restrictions": has("esri-csp-restrictions"),
    "esri-2d-debug": false,
    "esri-2d-update-debug": has("esri-2d-update-debug"),
    "esri-2d-log-updating": has("esri-2d-log-updating"),
    "featurelayer-pbf": has("featurelayer-pbf"),
    "featurelayer-fast-triangulation-enabled": has("featurelayer-fast-triangulation-enabled"),
    "featurelayer-simplify-thresholds": has("featurelayer-simplify-thresholds"),
    "featurelayer-simplify-payload-size-factors": has("featurelayer-simplify-payload-size-factors"),
    "featurelayer-simplify-mobile-factor": has("featurelayer-simplify-mobile-factor"),
    "featurelayer-query-max-depth": has("featurelayer-query-max-depth"),
    "featurelayer-query-pausing-enabled": has("featurelayer-query-pausing-enabled"),
    "featurelayer-snapshot-enabled": has("featurelayer-snapshot-enabled"),
    "esri-atomics": has("esri-atomics"),
    "esri-shared-array-buffer": has("esri-shared-array-buffer"),
    "esri-tiles-debug": has("esri-tiles-debug"),
    "esri-workers-arraybuffer-transfer": has("esri-workers-arraybuffer-transfer"),
    "feature-polyline-generalization-factor": has("feature-polyline-generalization-factor"),
    "host-webworker": 1
  }, o.workers.loaderUrl && (o.workers.loaderUrl = _(o.workers.loaderUrl)), o.workers.workerPath ? o.workers.workerPath = _(o.workers.workerPath) : o.workers.workerPath = _(n2("esri/core/workers/RemoteClient.js")), o.workers.useDynamicImport = false;
  const a6 = s.workers.loaderConfig, i3 = r({
    baseUrl: a6?.baseUrl,
    locale: c(),
    has: __spreadValues({
      "csp-restrictions": 1,
      "dojo-test-sniff": 0,
      "host-webworker": 1
    }, a6?.has),
    map: __spreadValues({}, a6?.map),
    paths: __spreadValues({}, a6?.paths),
    packages: a6?.packages || []
  }), l3 = {
    buildDate: e,
    fullVersion: i,
    revision: c2
  };
  return JSON.stringify({
    esriConfig: o,
    loaderConfig: i3,
    kernelInfo: l3
  });
}
var v = 0;

// ../../../node_modules/@arcgis/core/core/workers/WorkerOwner.js
var {
  ABORT: b3,
  INVOKE: m2,
  OPEN: _2,
  OPENED: g2,
  RESPONSE: u
} = e3;
var j = class _j {
  static create(e4) {
    return __async(this, null, function* () {
      const t2 = yield y();
      return new _j(t2, e4);
    });
  }
  constructor(e4, o) {
    this._outJobs = /* @__PURE__ */ new Map(), this._inJobs = /* @__PURE__ */ new Map(), this.worker = e4, this.id = o, e4.addEventListener("message", this._onMessage.bind(this)), e4.addEventListener("error", (e5) => {
      e5.preventDefault(), n.getLogger("esri.core.workers.WorkerOwner").error(e5);
    });
  }
  terminate() {
    this.worker.terminate();
  }
  open(_0) {
    return __async(this, arguments, function* (e4, t2 = {}) {
      const {
        signal: o
      } = t2, r2 = s4();
      return new Promise((t3, n4) => {
        const a6 = {
          resolve: t3,
          reject: n4,
          abortHandle: w(o, () => {
            this._outJobs.delete(r2), this._post({
              type: b3,
              jobId: r2
            });
          })
        };
        this._outJobs.set(r2, a6), this._post({
          type: _2,
          jobId: r2,
          modulePath: e4
        });
      });
    });
  }
  _onMessage(e4) {
    const t2 = f(e4);
    if (t2) switch (t2.type) {
      case g2:
        this._onOpenedMessage(t2);
        break;
      case u:
        this._onResponseMessage(t2);
        break;
      case b3:
        this._onAbortMessage(t2);
        break;
      case m2:
        this._onInvokeMessage(t2);
    }
  }
  _onAbortMessage(e4) {
    const t2 = this._inJobs, o = e4.jobId, s6 = t2.get(o);
    s6 && (s6.controller && s6.controller.abort(), t2.delete(o));
  }
  _onInvokeMessage(e4) {
    const {
      methodName: t2,
      jobId: o,
      data: s6,
      abortable: i3
    } = e4, l3 = i3 ? new AbortController() : null, c5 = this._inJobs, h3 = a2[t2];
    let p3;
    try {
      if ("function" != typeof h3) throw new TypeError(`${t2} is not a function`);
      p3 = h3.call(null, s6, {
        signal: l3 ? l3.signal : null
      });
    } catch (b4) {
      return void this._post({
        type: u,
        jobId: o,
        error: i2(b4)
      });
    }
    S(p3) ? (c5.set(o, {
      controller: l3,
      promise: p3
    }), p3.then((e5) => {
      c5.has(o) && (c5.delete(o), this._post({
        type: u,
        jobId: o
      }, e5));
    }, (e5) => {
      c5.has(o) && (c5.delete(o), e5 || (e5 = {
        message: "Error encountered at method" + t2
      }), b(e5) || this._post({
        type: u,
        jobId: o,
        error: i2(e5 || {
          message: `Error encountered at method ${t2}`
        })
      }));
    })) : this._post({
      type: u,
      jobId: o
    }, p3);
  }
  _onOpenedMessage(e4) {
    const {
      jobId: t2,
      data: s6
    } = e4, r2 = this._outJobs.get(t2);
    r2 && (this._outJobs.delete(t2), l(r2.abortHandle), r2.resolve(s6));
  }
  _onResponseMessage(t2) {
    const {
      jobId: s6,
      error: r2,
      data: n4
    } = t2, a6 = this._outJobs.get(s6);
    a6 && (this._outJobs.delete(s6), l(a6.abortHandle), r2 ? a6.reject(s2.fromJSON(JSON.parse(r2))) : a6.resolve(n4));
  }
  _post(e4, t2, o) {
    return a(this.worker, e4, t2, o);
  }
};

// ../../../node_modules/@arcgis/core/core/workers/workers.js
var s5 = has("host-browser") ? Math.min(navigator.hardwareConcurrency - 1, has("workers-pool-size")) : 0;
var a5 = has("esri-mobile") ? Math.min(s5, 3) : s5;
a5 || (a5 = has("safari") && has("mac") ? 7 : 2);
var c4 = 0;
var l2 = [];
function m3() {
  g3();
}
function f2(r2, t2) {
  return __async(this, null, function* () {
    const n4 = new c3(), _a = t2, {
      registryTarget: i3
    } = _a, s6 = __objRest(_a, [
      "registryTarget"
    ]);
    return yield n4.open(r2, s6), i3 && e2(i3, n4), n4;
  });
}
function p2(_0) {
  return __async(this, arguments, function* (e4, o = {}) {
    if ("string" != typeof e4) throw new s2("workers:undefined-module", "modulePath is missing");
    let i3 = o.strategy || "distributed";
    if (has("host-webworker") && !has("esri-workers") && (i3 = "local"), "local" === i3) {
      let r2 = yield E.loadWorker(e4);
      r2 || (r2 = yield import(
        /* @vite-ignore */
        /* webpackIgnore: true */
        e4
      )), s3(o.signal);
      const i4 = o.client || r2;
      return f2([E.connect(r2, o.schedule)], __spreadProps(__spreadValues({}, o), {
        client: i4
      }));
    }
    if (yield g3(), s3(o.signal), "dedicated" === i3) {
      const r2 = c4++ % a5;
      return f2([yield l2[r2].open(e4, o)], o);
    }
    if (o.maxNumWorkers && o.maxNumWorkers > 0) {
      const r2 = Math.min(o.maxNumWorkers, a5);
      if (r2 < a5) {
        const t2 = new Array(r2);
        for (let n4 = 0; n4 < r2; ++n4) {
          const r3 = c4++ % a5;
          t2[n4] = l2[r3].open(e4, o);
        }
        return f2(t2, o);
      }
    }
    return f2(l2.map((r2) => r2.open(e4, o)), o);
  });
}
var h2;
var d2 = null;
function g3() {
  return __async(this, null, function* () {
    if (d2) return d2;
    h2 = new AbortController();
    const r2 = [];
    for (let t2 = 0; t2 < a5; t2++) {
      const e4 = j.create(t2).then((r3) => (l2[t2] = r3, r3));
      r2.push(e4);
    }
    return d2 = Promise.all(r2), d2;
  });
}

export {
  m3 as m,
  p2 as p
};
//# sourceMappingURL=chunk-5YIMTGEC.js.map
