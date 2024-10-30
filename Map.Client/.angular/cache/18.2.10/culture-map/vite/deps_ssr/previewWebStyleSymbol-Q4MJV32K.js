import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  t
} from "./chunk-GXX7GUFH.js";
import {
  N
} from "./chunk-5ZLERKFB.js";
import "./chunk-62NDSO75.js";
import "./chunk-EKHRAAS6.js";
import "./chunk-BKSTWG4S.js";
import "./chunk-FSG7HOZQ.js";
import "./chunk-ZREJ3Y2F.js";
import "./chunk-IR6CVPPC.js";
import "./chunk-BBUQOCRA.js";
import "./chunk-YBUJLIWZ.js";
import "./chunk-DL2B6IFJ.js";
import "./chunk-VOOO6FU5.js";
import "./chunk-IUPJR3FF.js";
import "./chunk-TGZW6QWO.js";
import "./chunk-OYIDHTXG.js";
import "./chunk-KUBMHTYA.js";
import "./chunk-6EIBUVMG.js";
import "./chunk-NXXQ35YM.js";
import "./chunk-JEFPXTYT.js";
import "./chunk-MVS2BECH.js";
import "./chunk-XNLAOXPY.js";
import "./chunk-ZT7V2AVD.js";
import "./chunk-KOI252FF.js";
import "./chunk-I2TVVMQ6.js";
import "./chunk-5EGQYY2H.js";
import "./chunk-JKPUNUQA.js";
import "./chunk-SR7PRON4.js";
import "./chunk-HGHPYGKP.js";
import "./chunk-4DSGTDZJ.js";
import {
  u
} from "./chunk-VYTPFEL2.js";
import "./chunk-RLGDH6IY.js";
import "./chunk-MRPCXIVS.js";
import "./chunk-YTKVV2Y3.js";
import "./chunk-GCVQXAS4.js";
import "./chunk-UFQD6AL4.js";
import "./chunk-THZPD5CT.js";
import "./chunk-OBCA6CWH.js";
import "./chunk-2JI245BP.js";
import "./chunk-N34BRXVM.js";
import "./chunk-7QV7DHWN.js";
import "./chunk-4L4Y34YK.js";
import "./chunk-BXONKQKI.js";
import "./chunk-2HDBQXAR.js";
import "./chunk-RNF7VOCU.js";
import "./chunk-TIRJMGGG.js";
import "./chunk-ZDRQSPB6.js";
import "./chunk-DCXDXGAR.js";
import "./chunk-BCCDYCTQ.js";
import "./chunk-AYL3HQHD.js";
import "./chunk-66YQWHHE.js";
import "./chunk-2OZSYJDX.js";
import "./chunk-MZM4INJV.js";
import "./chunk-J4GMQHGL.js";
import "./chunk-MHPE4SZA.js";
import "./chunk-6SSA7P3A.js";
import "./chunk-FQBTLEUI.js";
import "./chunk-GS7Y3YOG.js";
import "./chunk-Y2HYKTTT.js";
import {
  U
} from "./chunk-XLEC46FY.js";
import "./chunk-4AZPIP7K.js";
import "./chunk-G73HQZEL.js";
import "./chunk-LZSLQ24Q.js";
import "./chunk-U3RHUXYK.js";
import "./chunk-7DBI6LQG.js";
import "./chunk-AUUN7RFQ.js";
import "./chunk-JAMSDYD6.js";
import "./chunk-PH6NPTP7.js";
import "./chunk-NUICEVIH.js";
import "./chunk-NXK752PZ.js";
import "./chunk-UVNLCXWD.js";
import "./chunk-PNUA7JOS.js";
import "./chunk-OR2FKGUM.js";
import "./chunk-UDMPWVPF.js";
import "./chunk-XJNKCEWL.js";
import "./chunk-AIZ3T7E3.js";
import "./chunk-6UEMNP3E.js";
import "./chunk-6WGE3IUL.js";
import "./chunk-MLYB2YW4.js";
import "./chunk-6JFGZTLU.js";
import "./chunk-2ZJE6ZFX.js";
import "./chunk-XBPEBUD5.js";

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
//# sourceMappingURL=previewWebStyleSymbol-Q4MJV32K.js.map
