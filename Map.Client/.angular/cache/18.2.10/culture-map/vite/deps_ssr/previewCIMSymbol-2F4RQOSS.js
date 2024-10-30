import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  o
} from "./chunk-3ZKMPM7D.js";
import "./chunk-WHHFLSL5.js";
import {
  l
} from "./chunk-TZTWNLH5.js";
import {
  t
} from "./chunk-GXX7GUFH.js";
import "./chunk-5ZLERKFB.js";
import "./chunk-62NDSO75.js";
import "./chunk-NOVQFMBE.js";
import {
  ee
} from "./chunk-Q2RVB4BK.js";
import "./chunk-SKOGSS6Z.js";
import "./chunk-G3WMCIUE.js";
import "./chunk-WS7U2AGS.js";
import "./chunk-U4NXHH3L.js";
import "./chunk-2LHHRVKS.js";
import "./chunk-KB6CBN72.js";
import "./chunk-BCMXVFG5.js";
import "./chunk-FB2GCV4L.js";
import "./chunk-NOBDTR4N.js";
import "./chunk-5RF6XDV4.js";
import "./chunk-B76NC7GX.js";
import "./chunk-JSWVKNBA.js";
import {
  y
} from "./chunk-MPLS4PY6.js";
import "./chunk-NAG6YX7T.js";
import {
  V
} from "./chunk-EKHRAAS6.js";
import "./chunk-BKSTWG4S.js";
import "./chunk-FSG7HOZQ.js";
import "./chunk-X36BR2QB.js";
import "./chunk-RGG3YJQA.js";
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
import "./chunk-FP37456K.js";
import "./chunk-VSQZQLTQ.js";
import "./chunk-K43CZ3M5.js";
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
  e,
  u
} from "./chunk-VYTPFEL2.js";
import "./chunk-RLGDH6IY.js";
import "./chunk-MRPCXIVS.js";
import "./chunk-YTKVV2Y3.js";
import "./chunk-GCVQXAS4.js";
import "./chunk-UFQD6AL4.js";
import "./chunk-M5N6UHWJ.js";
import "./chunk-EBCBYN6Y.js";
import "./chunk-ODFKYX74.js";
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
import "./chunk-XLEC46FY.js";
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
import {
  __async
} from "./chunk-XBPEBUD5.js";

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
//# sourceMappingURL=previewCIMSymbol-2F4RQOSS.js.map
