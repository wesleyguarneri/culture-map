import {
  e
} from "./chunk-6VKBA326.js";
import {
  u
} from "./chunk-5ATXT3S6.js";
import "./chunk-PRREDSOB.js";
import "./chunk-SYATLP3H.js";
import "./chunk-V6AMQYXE.js";
import "./chunk-4Z5SGKRM.js";
import "./chunk-ANKOCGE2.js";
import "./chunk-7CJXZOFG.js";
import "./chunk-IRGZKO7V.js";
import "./chunk-5SELS7VU.js";
import "./chunk-DDYVXG4F.js";
import "./chunk-ANP42J2U.js";
import "./chunk-HJY2YILU.js";
import "./chunk-7DA6A5LD.js";
import "./chunk-2MMLMOWS.js";
import "./chunk-4323ZVPF.js";
import "./chunk-WYIDUUN2.js";
import "./chunk-DXLOWWK7.js";
import {
  __async
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/views/3d/layers/Lyr3DWorker.js
var e2;
var n;
function r(t) {
  return __async(this, null, function* () {
    if (yield o(), t.inputs.length < 1) return {
      result: {
        status: u.Failed,
        error: "",
        jobDescJson: "",
        data: new Uint8Array(0),
        missingInputUrls: []
      },
      transferList: []
    };
    const e3 = {
      ptrs: [],
      sizes: []
    };
    for (const s of t.inputs) {
      const t2 = n._malloc(s.byteLength);
      new Uint8Array(n.HEAPU8.buffer, t2, s.byteLength).set(new Uint8Array(s)), e3.ptrs.push(t2), e3.sizes.push(s.byteLength);
    }
    const r2 = n.process(t.jobDescJson, e3, t.isMissingResourceCase), i2 = r2.status === u.Succeeded && r2.data, a = r2.status === u.MissingInputs && r2.missingInputUrls.length > 0;
    if (i2) {
      const s = r2.data.slice();
      r2.data = s;
    } else a && (r2.jobDescJson = r2.jobDescJson.slice(0), r2.originalInputs = t.inputs);
    for (let s = 0; s < e3.ptrs.length; ++s) n._free(e3.ptrs[s]);
    const u2 = [];
    if (i2) u2.push(r2.data.buffer);
    else if (a) for (const s of t.inputs) u2.push(s);
    return {
      result: r2,
      transferList: u2
    };
  });
}
function i() {
  n && (n.uninitialize_lyr3d_worker_wasm(), n = null);
}
function o() {
  return n ? Promise.resolve() : (e2 || (e2 = e().then((s) => {
    n = s, n.initialize_lyr3d_worker_wasm(), e2 = null;
  })), e2);
}
export {
  i as destroyWasm,
  o as initialize,
  r as process
};
//# sourceMappingURL=Lyr3DWorker-XEGX623P.js.map
