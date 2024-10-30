import {
  e as e2,
  h,
  i
} from "./chunk-7C55IGPF.js";
import {
  o as o2
} from "./chunk-WBUJP5OW.js";
import {
  _
} from "./chunk-O7UDKFOW.js";
import "./chunk-TKPMIAIW.js";
import "./chunk-NQOJNTB3.js";
import "./chunk-MFOQYQFG.js";
import "./chunk-NKCPFCP3.js";
import "./chunk-JJS7PR2U.js";
import "./chunk-L5YS4GSA.js";
import "./chunk-PRREDSOB.js";
import "./chunk-V5C6HSAM.js";
import "./chunk-SYATLP3H.js";
import "./chunk-V6AMQYXE.js";
import {
  d
} from "./chunk-XNUH25NY.js";
import {
  e
} from "./chunk-4Z5SGKRM.js";
import {
  S
} from "./chunk-ANKOCGE2.js";
import {
  y
} from "./chunk-7CJXZOFG.js";
import "./chunk-IRGZKO7V.js";
import "./chunk-5SELS7VU.js";
import {
  a3 as a
} from "./chunk-DDYVXG4F.js";
import "./chunk-ANP42J2U.js";
import {
  L,
  o2 as o,
  s as s2
} from "./chunk-HJY2YILU.js";
import "./chunk-7DA6A5LD.js";
import "./chunk-2MMLMOWS.js";
import "./chunk-4323ZVPF.js";
import {
  s2 as s
} from "./chunk-WYIDUUN2.js";
import "./chunk-DXLOWWK7.js";
import {
  __async
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/widgets/Editor/Upload.js
var h2 = class extends S {
  constructor() {
    super({}), this.files = [], this.progress = 0, this._uploadTask = null, this._layer = null;
  }
  destroy() {
    this.cancel(), this.files = [], this._layer = null, this._uploadTask = null;
  }
  get state() {
    const e3 = this._uploadTask;
    return e3 && 0 !== this.files.length ? e3.finished ? e3.error ? "error" : "success" : "pending" : "default";
  }
  get result() {
    return this._uploadTask?.value ?? null;
  }
  get error() {
    return this._uploadTask?.error ?? null;
  }
  uploadTo(e3) {
    this.cancel(), this.files = [], this._layer = e3, this._uploadTask = d((r) => __async(this, null, function* () {
      const o3 = yield y2(e3);
      s2(r), this.progress = 0, this.files = o3;
      const t = i(e2.upload, (e4) => {
        this.progress = e4;
      }, "Upload.uploadTo");
      if (0 === o3.length) return null;
      s2(r);
      const l = yield e3.extractAndFilterFiles(o3);
      s2(r), l.length > 0 && (this.files = l);
      const a2 = new _({
        x: 0,
        y: 0,
        z: 0,
        spatialReference: e3.spatialReference
      }), n = yield e3.convertMesh(l, {
        location: a2,
        signal: r,
        onProgress: t.makeOnProgress("createFromFiles")
      });
      if (s2(r), !n) throw new s("editor:upload", "could not upload or convert model");
      const u = l.reduce((e4, r2) => e4 + r2.size, 0), h3 = t.simulate("loadMesh", h(u));
      try {
        yield n.load();
      } finally {
        h3.remove();
      }
      return n;
    }));
  }
  retry() {
    this._layer && this.uploadTo(this._layer);
  }
  cancel() {
    this._uploadTask?.abort();
  }
};
e([y()], h2.prototype, "files", void 0), e([y()], h2.prototype, "progress", void 0), e([y()], h2.prototype, "state", null), e([y()], h2.prototype, "result", null), e([y()], h2.prototype, "error", null), e([y()], h2.prototype, "_uploadTask", void 0), e([y()], h2.prototype, "_layer", void 0), h2 = e([a("esri.widgets.Editor.Upload")], h2);
var f = null;
function y2(e3) {
  return __async(this, null, function* () {
    const {
      resolve: r,
      promise: o3
    } = L(), s3 = document.createElement("input");
    s3.type = "file", s3.multiple = false, s3.accept = [...o2(e3.infoFor3D), ".zip"].join(","), s3.style.display = "none", document.body.appendChild(s3);
    const i2 = o(s3, "change", () => r(s3.files ? Array.from(s3.files) : []));
    return f ? f(s3) : s3.click(), o3.finally(() => {
      i2.remove(), s3.remove();
    });
  });
}
function g(e3) {
  f = (r) => {
    Promise.resolve().then(() => e3).then((e4) => {
      if (!f) return;
      const o3 = new DataTransfer();
      e4.forEach((e5) => o3.items.add(e5)), r.files = o3.files, r.dispatchEvent(new Event("change"));
    });
  };
}
function j() {
  f = null;
}
export {
  h2 as Upload,
  j as clearPromptForFilesStub,
  g as stubFilePickerToSelect
};
//# sourceMappingURL=Upload-32ECC6CX.js.map
