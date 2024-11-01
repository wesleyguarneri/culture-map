import {
  c,
  i,
  u
} from "./chunk-WBUJP5OW.js";
import {
  U
} from "./chunk-SYATLP3H.js";
import {
  s
} from "./chunk-HJY2YILU.js";
import {
  h
} from "./chunk-DXLOWWK7.js";
import {
  __async
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/geometry/support/meshUtils/External.js
var i2 = class {
  constructor(t, r, e) {
    this.assetName = t, this.assetMimeType = r, this.parts = e;
  }
  equals(t) {
    return this === t || this.assetName === t.assetName && this.assetMimeType === t.assetMimeType && h(this.parts, t.parts, (t2, r) => t2.equals(r));
  }
  isOnService(t) {
    return this.parts.every((r) => r.isOnService(t));
  }
  makeHash() {
    let t = "";
    for (const r of this.parts) t += r.partHash;
    return t;
  }
  toBlob(t) {
    return __async(this, null, function* () {
      const {
        parts: r
      } = this;
      if (1 === r.length) return r[0].toBlob(t);
      const s2 = yield Promise.all(r.map((r2) => r2.toBlob(t)));
      return s(t), new Blob(s2);
    });
  }
};
var o = class {
  constructor(t, r) {
    this.partUrl = t, this.partHash = r;
  }
  equals(t) {
    return this === t || this.partUrl === t.partUrl && this.partHash === t.partHash;
  }
  isOnService(t) {
    return this.partUrl.startsWith(`${t.path}/assets/`);
  }
  toBlob(r) {
    return __async(this, null, function* () {
      const {
        data: s2
      } = yield U(this.partUrl, {
        responseType: "blob"
      });
      return s(r), s2;
    });
  }
};
function u2(t) {
  return p(t?.source);
}
function c2(t) {
  if (!Array.isArray(t)) return false;
  return t.every((t2) => t2 instanceof i2);
}
var f = /^(model\/gltf\+json)|(model\/gltf-binary)$/;
var l = /\.(gltf|glb)/i;
function p(t) {
  if (!t) return false;
  if (Array.isArray(t)) {
    return t.some(m);
  }
  return m(t);
}
function m(t) {
  if (t instanceof File) {
    const {
      type: r,
      name: e
    } = t;
    return f.test(r) || l.test(e);
  }
  return f.test(t.assetMimeType) || l.test(t.assetName);
}
function h2(t, r) {
  if (!t) return false;
  const {
    source: e
  } = t;
  return g(e, r);
}
function y(t, r) {
  if (t === r) return true;
  const {
    source: e
  } = t, {
    source: s2
  } = r;
  if (e === s2) return true;
  if (c2(e) && c2(s2)) {
    if (e.length !== s2.length) return false;
    const t2 = (t3, r3) => t3.assetName < r3.assetName ? -1 : t3.assetName > r3.assetName ? 1 : 0, r2 = [...e].sort(t2), n = [...s2].sort(t2);
    for (let e2 = 0; e2 < r2.length; ++e2) if (!r2[e2].equals(n[e2])) return false;
    return true;
  }
  return false;
}
function g(t, r) {
  if (Array.isArray(t)) {
    const e = t;
    return e.length > 0 && e.every((t2) => b(t2, r));
  }
  return b(t, r);
}
function b(t, r) {
  return t instanceof i2 && t.isOnService(r);
}
function N(t, r) {
  return t instanceof File ? c(t, r) : u(t.assetMimeType, r) ?? i(t.assetName, r);
}
function A(t) {
  return Array.isArray(t) ? t : [t];
}
function v(t) {
  return !!t.original;
}

export {
  i2 as i,
  o,
  u2 as u,
  h2 as h,
  y,
  N,
  A,
  v
};
//# sourceMappingURL=chunk-WX42XBL6.js.map
