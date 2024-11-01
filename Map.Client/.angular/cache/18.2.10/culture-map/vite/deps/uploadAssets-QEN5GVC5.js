import {
  a as a3,
  e,
  h as h2,
  i as i3,
  m
} from "./chunk-7C55IGPF.js";
import {
  a as a2,
  c,
  d,
  l,
  n as n3,
  p,
  r as r2,
  t,
  u as u2
} from "./chunk-B74LYY3G.js";
import {
  A as A2,
  N,
  h,
  i as i2,
  o
} from "./chunk-WX42XBL6.js";
import {
  i,
  s as s2,
  u
} from "./chunk-WBUJP5OW.js";
import {
  g
} from "./chunk-CRNUMTSV.js";
import {
  r
} from "./chunk-5I6J67HP.js";
import "./chunk-U2ZVAEKG.js";
import {
  U,
  V,
  Wt
} from "./chunk-SYATLP3H.js";
import "./chunk-V6AMQYXE.js";
import "./chunk-4Z5SGKRM.js";
import "./chunk-ANKOCGE2.js";
import "./chunk-7CJXZOFG.js";
import {
  n as n2
} from "./chunk-IRGZKO7V.js";
import "./chunk-5SELS7VU.js";
import "./chunk-DDYVXG4F.js";
import "./chunk-ANP42J2U.js";
import {
  A,
  a,
  s
} from "./chunk-HJY2YILU.js";
import "./chunk-7DA6A5LD.js";
import "./chunk-2MMLMOWS.js";
import "./chunk-4323ZVPF.js";
import {
  n2 as n
} from "./chunk-WYIDUUN2.js";
import "./chunk-DXLOWWK7.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/layers/graphics/sources/support/uploads.js
var n4 = 1e6;
var i4 = 20 * n4;
var p2 = 2e9;
var l2 = 3;
function m2(_0, _1, _2) {
  return __async(this, arguments, function* ({
    data: m3,
    name: f,
    description: d2
  }, u3, h3) {
    let w = null;
    try {
      const y = V(u3, "uploads"), j = V(y, "info"), {
        data: g2
      } = yield U(j, {
        query: {
          f: "json"
        },
        responseType: "json"
      });
      s(h3);
      const q2 = g(u3), z2 = g2.maxUploadFileSize * n4, T = q2 ? p2 : z2, U2 = q2 ? Math.min(i4, z2) : i4;
      if (m3.size > T) throw new Error("Data too large");
      const A3 = V(y, "register"), {
        data: E
      } = yield U(A3, {
        query: {
          f: "json",
          itemName: c2(f),
          description: d2
        },
        responseType: "json",
        method: "post"
      });
      if (s(h3), !E.success) throw new Error("Registration failed");
      const {
        itemID: P
      } = E.item;
      w = V(y, P);
      const D = V(w, "uploadPart"), I2 = Math.ceil(m3.size / U2), M2 = new Array();
      for (let e2 = 0; e2 < I2; ++e2) M2.push(m3.slice(e2 * U2, Math.min((e2 + 1) * U2, m3.size)));
      const v2 = M2.slice().reverse(), x = new Array(), F = i3(I2, h3?.onProgress, "uploadItem"), _3 = () => __async(this, null, function* () {
        for (; 0 !== v2.length; ) {
          const t2 = M2.length - v2.length, r3 = v2.pop(), s3 = new FormData(), n5 = F.simulate(t2, h2(r3.size));
          try {
            s3.append("f", "json"), s3.append("file", r3), s3.append("partId", `${t2}`);
            const {
              data: a4
            } = yield U(D, {
              timeout: 0,
              body: s3,
              responseType: "json",
              method: "post"
            });
            if (s(h3), !a4.success) throw new Error("Part upload failed");
          } finally {
            n5.remove();
          }
        }
      });
      for (let e2 = 0; e2 < l2 && 0 !== v2.length; ++e2) x.push(_3());
      yield Promise.all(x);
      const b = V(w, "commit"), {
        data: C2
      } = yield U(b, {
        query: {
          f: "json",
          parts: M2.map((e2, o2) => o2).join(",")
        },
        responseType: "json",
        method: "post"
      });
      if (s(h3), !C2.success) throw new Error("Commit failed");
      return C2.item;
    } catch (y) {
      if (null != w) {
        const o2 = V(w, "delete");
        yield U(o2, {
          query: {
            f: "json"
          },
          responseType: "json",
          method: "post"
        });
      }
      throw y;
    }
  });
}
function c2(e2) {
  return e2.replaceAll("/", "_").replaceAll("\\", "_");
}

// ../../../node_modules/@arcgis/core/layers/graphics/sources/support/uploadAssets.js
function O(s3, e2, t2) {
  return __async(this, null, function* () {
    const r3 = s3.length;
    if (!r3) return t2?.onProgress?.(1), [];
    const o2 = i3(r3, t2?.onProgress, "uploadAssets");
    return Promise.all(s3.map((s4, r4) => v(s4, e2, __spreadProps(__spreadValues({}, t2), {
      onProgress: o2.makeOnProgress(r4)
    }))));
  });
}
function v(_0, _1, _2) {
  return __async(this, arguments, function* (s3, {
    layer: e2,
    ongoingUploads: t2
  }, r3) {
    const o2 = t2.get(s3);
    if (o2) return o2;
    if (!Z(e2)) throw new r2();
    if (I(s3, e2)) return r3?.onProgress?.(1), s3;
    const n5 = k(s3, e2, r3);
    t2.set(s3, n5);
    try {
      yield n5;
    } finally {
      t2.delete(s3);
    }
    return s3;
  });
}
function I(s3, e2) {
  const {
    parsedUrl: t2
  } = e2;
  return null != t2 && s3.metadata.externalSources.some((s4) => h(s4, t2));
}
function k(s3, e2, r3) {
  return __async(this, null, function* () {
    const {
      metadata: o2
    } = s3, {
      displaySource: n5
    } = o2, a4 = H(n5?.source, e2), i5 = !!a4, c3 = o2.externalSources.length > 0, u3 = i5 ? B(a4, e2, r3) : c3 ? R(s3, e2, r3) : C(s3, e2, r3), l3 = yield u3;
    return s(r3), s3.addExternalSources([l3]), s3;
  });
}
function B(s3, e2, t2) {
  return __async(this, null, function* () {
    return {
      source: yield G(s3, e2, t2),
      original: true
    };
  });
}
function R(s3, e2, t2) {
  return __async(this, null, function* () {
    const r3 = _(e2), {
      externalSources: o2
    } = s3.metadata, n5 = q(o2, e2);
    if (!n5) throw new n3();
    const a4 = i3(e.uploadConvertibleSource, t2?.onProgress, "uploadConvertibleSource"), i5 = yield G(n5, e2, {
      onProgress: a4.makeOnProgress("uploadEditSource")
    });
    s3.addExternalSources([{
      source: i5,
      original: true
    }]);
    const c3 = n5.reduce((s4, {
      asset: e3
    }) => e3 instanceof File ? s4 + e3.size : s4, 0), u3 = a4.simulate("serviceAssetsToGlb", m(c3));
    try {
      return {
        source: yield V2(i5, e2, r3)
      };
    } finally {
      u3.remove();
    }
  });
}
function C(s3, e2, t2) {
  return __async(this, null, function* () {
    const r3 = i3(e.uploadLocalMesh, t2?.onProgress, "uploadLocalMesh"), o2 = L(s3, e2, __spreadProps(__spreadValues({}, t2), {
      onProgress: r3.makeOnProgress("meshToAssetBlob")
    }));
    return {
      source: yield J([o2], e2, __spreadProps(__spreadValues({}, t2), {
        onProgress: r3.makeOnProgress("uploadAssetBlobs")
      })),
      extent: s3.extent.clone(),
      original: true
    };
  });
}
function L(s3, e2, r3) {
  return __async(this, null, function* () {
    const o2 = _(e2), n5 = yield s3.load(r3), a4 = yield n5.toBinaryGLTF({
      origin: n5.origin,
      signal: r3?.signal,
      ignoreLocalTransform: true
    });
    return s(r3), {
      blob: new Blob([a4], {
        type: "model/gltf-binary"
      }),
      assetName: `${r()}.glb`,
      assetType: o2
    };
  });
}
function q(s3, e2) {
  for (const t2 of s3) {
    const s4 = H(t2.source, e2);
    if (s4) return s4;
  }
  return null;
}
function H(s3, e2) {
  if (!s3) return null;
  const {
    infoFor3D: {
      supportedFormats: t2,
      editFormats: r3
    }
  } = e2, o2 = A2(s3), n5 = new Array();
  let a4 = false;
  for (let i5 = 0; i5 < o2.length; ++i5) {
    const s4 = $(o2[i5], t2);
    if (!s4) return null;
    r3.includes(s4.assetType) && (a4 = true), n5.push(s4);
  }
  return a4 ? n5 : null;
}
function $(s3, e2) {
  const t2 = N(s3, e2);
  return t2 ? {
    asset: s3,
    assetType: t2
  } : null;
}
function G(s3, e2, t2) {
  return __async(this, null, function* () {
    return J(s3.map((s4) => M(s4, t2)), e2, t2);
  });
}
function J(s3, e2, r3) {
  return __async(this, null, function* () {
    const o2 = i3(e.uploadAssetBlobs, r3?.onProgress, "uploadAssetBlobs"), n5 = yield z(s3, e2, __spreadProps(__spreadValues({}, r3), {
      onProgress: o2.makeOnProgress("prepareAssetItems")
    }));
    s(r3);
    const a4 = n5.map(({
      item: s4
    }) => s4), {
      uploadResults: i5
    } = yield K(a4, e2, __spreadProps(__spreadValues({}, r3), {
      onProgress: o2.makeOnProgress("uploadAssetItems")
    }));
    return s(r3), s3.map((s4, t2) => Q(n5[t2], i5[t2], e2));
  });
}
function M(s3, e2) {
  return __async(this, null, function* () {
    const {
      asset: r3,
      assetType: o2
    } = s3;
    if (r3 instanceof File) return {
      blob: r3,
      assetName: r3.name,
      assetType: o2
    };
    const n5 = yield r3.toBlob(e2);
    return s(e2), {
      blob: n5,
      assetName: r3.assetName,
      assetType: o2
    };
  });
}
function W(s3, e2, r3) {
  return __async(this, null, function* () {
    const {
      blob: n5,
      assetType: a4,
      assetName: c3
    } = s3;
    let u3 = null;
    try {
      const s4 = yield m2({
        data: n5,
        name: c3
      }, e2.url, r3);
      s(r3), u3 = {
        assetType: a4,
        assetUploadId: s4.itemID
      };
    } catch (l3) {
      a(l3), ss().warnOnce(`Service ${e2.url} does not support the REST Uploads API.`);
    }
    if (!u3) {
      const s4 = yield Wt(n5);
      if (s(r3), !s4.isBase64) throw new u2();
      u3 = {
        assetType: a4,
        assetData: s4.data
      };
    }
    if (!u3) throw new p();
    return {
      item: u3,
      assetName: c3
    };
  });
}
function z(s3, e2, r3) {
  const o2 = i3(s3.length, r3?.onProgress, "prepareAssetItems");
  return Promise.all(s3.map((s4, n5) => __async(this, null, function* () {
    const a4 = W(yield s4, e2, __spreadProps(__spreadValues({}, r3), {
      onProgress: o2.makeOnProgress(n5)
    }));
    return s(r3), a4;
  })));
}
function K(e2, r3, o2) {
  return __async(this, null, function* () {
    const n5 = a3(o2?.onProgress);
    try {
      const n6 = yield U(V(r3.parsedUrl.path, "uploadAssets"), {
        timeout: 0,
        query: {
          f: "json",
          assets: JSON.stringify(e2)
        },
        method: "post",
        responseType: "json"
      });
      if (s(o2), n6.data.uploadResults.length !== e2.length) throw new a2(e2.length, n6.data.uploadResults.length);
      return n6.data;
    } finally {
      n5.remove();
    }
  });
}
function Q(s3, e2, t2) {
  const {
    success: r3
  } = e2;
  if (!r3) {
    const {
      error: t3
    } = e2;
    throw new d(s3.assetName, t3);
  }
  const {
    assetHash: o2
  } = e2, {
    assetName: n5,
    item: {
      assetType: a4
    }
  } = s3, {
    infoFor3D: {
      supportedFormats: i5
    }
  } = t2, c3 = s2(a4, i5);
  if (!c3) throw new c(a4);
  return new i2(n5, c3, [new o(`${t2.parsedUrl.path}/assets/${o2}`, o2)]);
}
function V2(s3, e2, t2) {
  return __async(this, null, function* () {
    const r3 = s3.map(({
      assetName: s4,
      parts: e3
    }) => ({
      assetName: s4,
      assetHash: e3[0].partHash
    })), o2 = e2.capabilities?.operations.supportsAsyncConvert3D, n5 = {
      f: "json",
      assets: JSON.stringify(r3),
      transportType: "esriTransportTypeUrl",
      targetFormat: t2,
      async: o2
    }, i5 = V(e2.parsedUrl.path, "convert3D");
    let c3;
    try {
      c3 = (yield (o2 ? Y : X)(i5, {
        query: n5,
        responseType: "json",
        timeout: 0
      })).data;
    } catch (l3) {
      throw new l();
    }
    const {
      supportedFormats: u3
    } = e2.infoFor3D;
    return c3.assets.map((s4) => {
      const e3 = u(s4.contentType, u3);
      if (!e3) throw new c(e3);
      return new i2(s4.assetName, s4.contentType, [new o(s4.assetURL, s4.assetHash)]);
    });
  });
}
function X(e2, t2) {
  return U(e2, t2);
}
function Y(e2, t2) {
  return __async(this, null, function* () {
    const o2 = (yield U(e2, t2)).data.statusUrl;
    for (; ; ) {
      const e3 = (yield U(o2, {
        query: {
          f: "json"
        },
        responseType: "json"
      })).data;
      switch (e3.status) {
        case "Completed":
          return U(e3.resultUrl, {
            query: {
              f: "json"
            },
            responseType: "json"
          });
        case "CompletedWithErrors":
          throw new Error(e3.status);
        case "Failed ImportChanges":
        case "InProgress":
        case "Pending":
        case "ExportAttachments":
        case "ExportChanges":
        case "ExportingData":
        case "ExportingSnapshot":
        case "ImportAttachments":
        case "ProvisioningReplica":
        case "UnRegisteringReplica":
          break;
        default:
          throw new Error();
      }
      yield A(es);
    }
  });
}
function Z(s3) {
  return !!s3.infoFor3D && !!s3.url;
}
function _(s3) {
  const {
    infoFor3D: e2
  } = s3, t2 = u("model/gltf-binary", e2.supportedFormats) ?? i("glb", e2.supportedFormats);
  if (!t2) throw new t();
  return t2;
}
function ss() {
  return n.getLogger("esri.layers.graphics.sources.support.uploadAssets");
}
var es = n2(1e3);
export {
  O as uploadAssets
};
//# sourceMappingURL=uploadAssets-QEN5GVC5.js.map
