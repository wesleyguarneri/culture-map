import {
  o
} from "./chunk-24OSYXHC.js";
import "./chunk-WDNZ4G37.js";
import {
  l
} from "./chunk-OOVP3XBH.js";
import {
  t
} from "./chunk-AHCFNSHV.js";
import "./chunk-ZUHJZKEM.js";
import "./chunk-B4EEJXBQ.js";
import "./chunk-OHXCVJMH.js";
import {
  ee
} from "./chunk-EU7HJNZD.js";
import "./chunk-4HODTCAO.js";
import "./chunk-RSQ7FJBQ.js";
import "./chunk-EK3IKAMF.js";
import "./chunk-IJVN5N2Q.js";
import "./chunk-JCWQ2LOQ.js";
import "./chunk-IIZFTYAL.js";
import "./chunk-YSIUOTSV.js";
import "./chunk-NQEXQAS7.js";
import "./chunk-R4DKV4UN.js";
import "./chunk-SNHPS7NU.js";
import "./chunk-VS26W5Y5.js";
import "./chunk-YZNT6QWD.js";
import {
  y
} from "./chunk-6WG22V46.js";
import {
  V
} from "./chunk-ZR5BOILP.js";
import "./chunk-TCPN7AEH.js";
import "./chunk-PQ4T66BG.js";
import "./chunk-SWPHGZYB.js";
import "./chunk-T2S5VXNP.js";
import "./chunk-4U5GUJRA.js";
import "./chunk-634JLXD4.js";
import "./chunk-Y3EDGYWG.js";
import "./chunk-UF6JOUSJ.js";
import "./chunk-T5JGQSO3.js";
import "./chunk-CIW3KHOW.js";
import "./chunk-J55F4AC2.js";
import "./chunk-IQLBZKUD.js";
import "./chunk-7MZZCQ64.js";
import "./chunk-L4TOCXR5.js";
import "./chunk-IMVP5ADD.js";
import "./chunk-H7WPOTQH.js";
import "./chunk-6A7CWJED.js";
import "./chunk-V5RMUGJJ.js";
import "./chunk-D2NB6D6N.js";
import "./chunk-6EUVKE22.js";
import "./chunk-A3NNJ7XA.js";
import "./chunk-XTVPEVHA.js";
import "./chunk-DTUSTSEJ.js";
import "./chunk-JCWFGRHQ.js";
import "./chunk-JILEJ6R2.js";
import "./chunk-GAW5JHG4.js";
import "./chunk-OEKKQXBD.js";
import "./chunk-S3IO7V4Q.js";
import "./chunk-DZALMCYL.js";
import "./chunk-K226GFDN.js";
import "./chunk-4ZZRP4MA.js";
import {
  e,
  u
} from "./chunk-7ZJ6P7J7.js";
import "./chunk-FPFZQCEQ.js";
import "./chunk-K7TO5IIO.js";
import "./chunk-A4VVDRCH.js";
import "./chunk-CQDYITZC.js";
import "./chunk-YVULORT6.js";
import "./chunk-PB33BAI3.js";
import "./chunk-CVB43GGP.js";
import "./chunk-LLDOZWVV.js";
import "./chunk-7XMEZQ34.js";
import "./chunk-BDM2D6IC.js";
import "./chunk-U2ZVAEKG.js";
import "./chunk-EDSMXTFO.js";
import "./chunk-MNLT652N.js";
import "./chunk-7RMVJCDW.js";
import "./chunk-T6GCUITX.js";
import "./chunk-TUIGM7TV.js";
import "./chunk-IHVSZYZS.js";
import "./chunk-6CA6K3O7.js";
import "./chunk-NYQ5CYNR.js";
import "./chunk-O7UDKFOW.js";
import "./chunk-TKPMIAIW.js";
import "./chunk-NQOJNTB3.js";
import "./chunk-MFOQYQFG.js";
import "./chunk-NKCPFCP3.js";
import "./chunk-3ZXOUEQG.js";
import "./chunk-AXVPJBVW.js";
import "./chunk-OXEPWRM7.js";
import "./chunk-POILQGXA.js";
import "./chunk-JJS7PR2U.js";
import "./chunk-L5YS4GSA.js";
import "./chunk-PRREDSOB.js";
import "./chunk-V5C6HSAM.js";
import "./chunk-SYATLP3H.js";
import "./chunk-V6AMQYXE.js";
import "./chunk-6WHTZNUH.js";
import "./chunk-EITGQLII.js";
import "./chunk-TIVJXVMN.js";
import "./chunk-XNUH25NY.js";
import "./chunk-WGAPNV7F.js";
import "./chunk-BXQGM56A.js";
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

// ../../../node_modules/@arcgis/core/symbols/support/previewCIMSymbol.js
var s = new o(null);
var c = e(t.size);
var m = e(t.maxSize);
var u2 = e(t.lineWidth);
var f = 1;
function h(e2, t2, i) {
  return __async(this, null, function* () {
    const l2 = t2?.size;
    let r = null != l2 && "object" == typeof l2 && "width" in l2 ? l2.width : l2, n = null != l2 && "object" == typeof l2 && "height" in l2 ? l2.height : l2;
    if (null == r || null == n) if ("esriGeometryPolygon" === i) r = c, n = c;
    else {
      const l3 = yield y2(e2, t2, i);
      l3 && (r = l3.width, n = l3.height), "esriGeometryPolyline" === i && (r = u2), r = null != r && isFinite(r) ? Math.min(r, m) : c, n = null != n && isFinite(n) ? Math.max(Math.min(n, m), f) : c;
    }
    return "legend" === t2.style && "esriGeometryPolyline" === i && (r = u2), {
      width: r,
      height: n
    };
  });
}
function y2(e2, t2, l2) {
  return __async(this, null, function* () {
    const {
      feature: n,
      fieldMap: a,
      viewParams: o2
    } = t2.cimOptions || t2, c2 = yield y.resolveSymbolOverrides(e2.data, n, null, a, l2, null, o2);
    if (!c2) return null;
    (e2 = e2.clone()).data = {
      type: "CIMSymbolReference",
      symbol: c2
    }, e2.data.primitiveOverrides = void 0;
    const m2 = [];
    return ee.fetchResources(c2, s.resourceManager, m2), ee.fetchFonts(c2, s.resourceManager, m2), m2.length > 0 && (yield Promise.all(m2)), ee.getEnvelope(c2, null, s.resourceManager);
  });
}
function p(_0) {
  return __async(this, arguments, function* (e2, i = {}) {
    const {
      node: l2,
      opacity: r,
      symbolConfig: a
    } = i, c2 = null != a && "object" == typeof a && "isSquareFill" in a && a.isSquareFill, m2 = i.cimOptions || i, u3 = m2.geometryType || V(e2?.data?.symbol), f2 = yield h(e2, i, u3), {
      feature: y3,
      fieldMap: p2
    } = m2, d = c2 || "esriGeometryPolygon" !== u3 ? "preview" : "legend", g = yield s.rasterizeCIMSymbolAsync(e2, y3, f2, d, p2, u3, null, m2.viewParams, m2.allowScalingUp);
    if (!g) return null;
    const {
      width: w,
      height: b
    } = g, v = document.createElement("canvas");
    v.width = w, v.height = b;
    v.getContext("2d").putImageData(g, 0, 0);
    const M = u(f2.width), j = u(f2.height), S = new Image(M, j);
    S.src = v.toDataURL(), S.ariaLabel = i.ariaLabel ?? null, S.alt = i.ariaLabel ?? "", null != r && (S.style.opacity = `${r}`);
    let C = S;
    if (null != i.effectView) {
      const e3 = {
        shape: {
          type: "image",
          x: 0,
          y: 0,
          width: M,
          height: j,
          src: S.src
        },
        fill: null,
        stroke: null,
        offset: [0, 0]
      };
      C = l([[e3]], [M, j], {
        effectView: i.effectView,
        ariaLabel: i.ariaLabel
      });
    }
    return l2 && C && l2.appendChild(C), C;
  });
}
export {
  p as previewCIMSymbol
};
//# sourceMappingURL=previewCIMSymbol-SAV6NGDY.js.map
