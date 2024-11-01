import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  n,
  r,
  t
} from "./chunk-PNUA7JOS.js";
import {
  r2
} from "./chunk-UDMPWVPF.js";
import {
  e
} from "./chunk-6UEMNP3E.js";
import {
  has
} from "./chunk-2ZJE6ZFX.js";

// ../../../node_modules/@arcgis/core/layers/graphics/sources/support/uploadProgressWeights.js
var e2 = {
  upload: {
    createFromFiles: 0.8,
    loadMesh: 0.2
  },
  uploadAssetBlobs: {
    prepareAssetItems: 0.9,
    uploadAssetItems: 0.1
  },
  uploadConvertibleSource: {
    uploadEditSource: 0.5,
    serviceAssetsToGlb: 0.5
  },
  uploadLocalMesh: {
    meshToAssetBlob: 0.5,
    uploadAssetBlobs: 0.5
  }
};

// ../../../node_modules/@arcgis/core/support/progressUtils.js
function i(s, t2 = (s2) => {
}, e3) {
  return new n2(s, t2, e3);
}
var n2 = class {
  constructor(s, t2 = (s2) => {
  }, e3) {
    if (this.onProgress = t2, this.taskName = e3, this._progressMap = /* @__PURE__ */ new Map(), this._startTime = void 0, this._timingsMap = /* @__PURE__ */ new Map(), "number" == typeof s) {
      this._weights = {};
      for (let t3 = 0; t3 < s; t3++) {
        const e4 = t3, r3 = 1 / s;
        this._weights[e4] = r3, this._progressMap.set(e4, 0);
      }
    } else this._weights = s;
    this.emitProgress();
  }
  emitProgress() {
    let s = 0;
    for (const [t2, e3] of this._progressMap.entries()) {
      s += e3 * this._weights[t2];
    }
    if (1 === s && has("enable-feature:esri-3dofl-upload-timings")) {
      const s2 = Math.round(performance.now() - (this._startTime ?? 0)) / 1e3;
      console.log(`${this.taskName} done in ${s2} sec`);
      for (const [t2, e3] of this._timingsMap) {
        const r3 = Math.round(e3.end - e3.start) / 1e3, o = Math.round(r3 / s2 * 100);
        console.log(this.taskName ?? "Task", {
          stepKey: t2,
          stepTime: r3,
          relativeTime: o
        });
      }
    }
    this.onProgress(s);
  }
  setProgress(s, e3) {
    if (this._progressMap.set(s, e3), has("enable-feature:esri-3dofl-upload-timings")) {
      const r3 = performance.now();
      this._startTime ??= r3;
      const o = r2(this._timingsMap, s, () => ({
        start: r3,
        end: 0
      }));
      1 === e3 && (o.end = r3);
    }
    this.emitProgress();
  }
  simulate(s, t2) {
    return a((t3) => this.setProgress(s, t3), t2);
  }
  makeOnProgress(s) {
    return (t2) => this.setProgress(s, t2);
  }
};
function a(t2 = (s) => {
}, e3 = l) {
  const r3 = performance.now();
  t2(0);
  const o = setInterval(() => {
    const s = performance.now() - r3, o2 = 1 - Math.exp(-s / e3);
    t2(o2);
  }, g);
  return e(() => {
    clearInterval(o), t2(1);
  });
}
function h(s, t2 = c) {
  return r(t(s * f / t2));
}
function m(s, t2 = p) {
  return r(t(s * f / t2));
}
var c = 10;
var p = 10;
var f = 8e-6;
var g = n(50);
var l = n(1e3);

export {
  e2 as e,
  i,
  a,
  h,
  m
};
//# sourceMappingURL=chunk-F2ZHUHOP.js.map
