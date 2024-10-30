import {
  t
} from "./chunk-AHCFNSHV.js";
import {
  N
} from "./chunk-ZUHJZKEM.js";
import "./chunk-B4EEJXBQ.js";
import "./chunk-ZR5BOILP.js";
import "./chunk-PQ4T66BG.js";
import "./chunk-SWPHGZYB.js";
import "./chunk-634JLXD4.js";
import "./chunk-Y3EDGYWG.js";
import "./chunk-UF6JOUSJ.js";
import "./chunk-T5JGQSO3.js";
import "./chunk-CIW3KHOW.js";
import "./chunk-J55F4AC2.js";
import "./chunk-IQLBZKUD.js";
import "./chunk-7MZZCQ64.js";
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
  u
} from "./chunk-7ZJ6P7J7.js";
import "./chunk-FPFZQCEQ.js";
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
import {
  U
} from "./chunk-SYATLP3H.js";
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
import "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/symbols/support/previewWebStyleSymbol.js
function r(e, i, r2) {
  const h = e.thumbnail?.url;
  return h ? U(h, {
    responseType: "image"
  }).then((t2) => {
    const e2 = s(t2.data, r2);
    return r2?.node ? (r2.node.appendChild(e2), r2.node) : e2;
  }) : N(e).then((t2) => t2 ? i(t2, r2) : null);
}
function s(t2, n) {
  const r2 = !/\\.svg$/i.test(t2.src) && n?.disableUpsampling, s2 = Math.max(t2.width, t2.height);
  let h = null != n?.maxSize ? u(n.maxSize) : t.maxSize;
  r2 && (h = Math.min(s2, h));
  const o = "number" == typeof n?.size ? n?.size : null, m = Math.min(h, null != o ? u(o) : s2);
  if (m !== s2) {
    const e = 0 !== t2.width && 0 !== t2.height ? t2.width / t2.height : 1;
    e >= 1 ? (t2.width = m, t2.height = m / e) : (t2.width = m * e, t2.height = m);
  }
  return t2;
}
export {
  r as previewWebStyleSymbol
};
//# sourceMappingURL=previewWebStyleSymbol-WOKKL35V.js.map
