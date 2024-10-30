import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  d
} from "./chunk-RNWCH3YD.js";
import {
  e as e2
} from "./chunk-YGAXDKHF.js";
import "./chunk-NVOJILW6.js";
import "./chunk-KYPTWEOO.js";
import "./chunk-WVFB3H4O.js";
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
import "./chunk-ASCK5HJ5.js";
import "./chunk-XNLAOXPY.js";
import {
  _
} from "./chunk-KOI252FF.js";
import "./chunk-I2TVVMQ6.js";
import "./chunk-5EGQYY2H.js";
import "./chunk-JKPUNUQA.js";
import "./chunk-SR7PRON4.js";
import "./chunk-HGHPYGKP.js";
import "./chunk-4DSGTDZJ.js";
import "./chunk-VYTPFEL2.js";
import "./chunk-RLGDH6IY.js";
import {
  j
} from "./chunk-MRPCXIVS.js";
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
import {
  n as n2
} from "./chunk-QGBMZIP4.js";
import "./chunk-AOEBZVTA.js";
import "./chunk-2OZSYJDX.js";
import {
  O as O2,
  r
} from "./chunk-MZM4INJV.js";
import {
  n
} from "./chunk-J4GMQHGL.js";
import "./chunk-MHPE4SZA.js";
import "./chunk-6SSA7P3A.js";
import "./chunk-FQBTLEUI.js";
import "./chunk-GS7Y3YOG.js";
import "./chunk-Y2HYKTTT.js";
import "./chunk-XLEC46FY.js";
import "./chunk-4AZPIP7K.js";
import "./chunk-LZSLQ24Q.js";
import "./chunk-U3RHUXYK.js";
import "./chunk-7DBI6LQG.js";
import "./chunk-AUUN7RFQ.js";
import "./chunk-JAMSDYD6.js";
import "./chunk-PH6NPTP7.js";
import {
  e
} from "./chunk-NUICEVIH.js";
import "./chunk-NXK752PZ.js";
import {
  y
} from "./chunk-UVNLCXWD.js";
import "./chunk-PNUA7JOS.js";
import "./chunk-OR2FKGUM.js";
import {
  a3 as a
} from "./chunk-UDMPWVPF.js";
import "./chunk-XJNKCEWL.js";
import "./chunk-AIZ3T7E3.js";
import "./chunk-6UEMNP3E.js";
import "./chunk-6WGE3IUL.js";
import "./chunk-MLYB2YW4.js";
import "./chunk-6JFGZTLU.js";
import {
  O
} from "./chunk-2ZJE6ZFX.js";
import "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/views/3d/layers/support/I3STreeDebugger.js
var u = class extends d {
  constructor(e3) {
    super(e3);
  }
  getTiles() {
    const e3 = this.lv.getVisibleNodes(), o = this.view.renderSpatialReference, s = this.nodeSR;
    return e3.map((e4) => f(e4, o, s)).filter(O).sort((e4, r2) => e4.lij[0] === r2.lij[0] ? e4.label > r2.label ? -1 : 1 : e4.lij[0] - r2.lij[0]);
  }
};
function f(e3, r2, o) {
  const s = e3.serviceObbInIndexSR;
  if (null == s || null == r2) return null;
  _(h, s.quaternion), r(j2, s.center), n2(j2, o, 0, j2, r2, 0, 1), h[12] = j2[0], h[13] = j2[1], h[14] = j2[2];
  const i = [[], [], []];
  O2(j2, s.halfSize, h), n2(j2, r2, 0, j2, o, 0, 1), i[0].push([j2[0], j2[1]]), r(j2, s.halfSize), j2[0] = -j2[0], O2(j2, j2, h), n2(j2, r2, 0, j2, o, 0, 1), i[0].push([j2[0], j2[1]]), r(j2, s.halfSize), j2[0] = -j2[0], j2[1] = -j2[1], O2(j2, j2, h), n2(j2, r2, 0, j2, o, 0, 1), i[0].push([j2[0], j2[1]]), r(j2, s.halfSize), j2[1] = -j2[1], O2(j2, j2, h), n2(j2, r2, 0, j2, o, 0, 1), i[0].push([j2[0], j2[1]]), i[1].push(i[0][0]), i[1].push(i[0][1]), r(j2, s.halfSize), j2[0] = -j2[0], j2[2] = -j2[2], O2(j2, j2, h), n2(j2, r2, 0, j2, o, 0, 1), i[1].push([j2[0], j2[1]]), r(j2, s.halfSize), j2[2] = -j2[2], O2(j2, j2, h), n2(j2, r2, 0, j2, o, 0, 1), i[1].push([j2[0], j2[1]]), i[2].push(i[0][0]), i[2].push(i[0][3]), r(j2, s.halfSize), j2[1] = -j2[1], j2[2] = -j2[2], O2(j2, j2, h), n2(j2, r2, 0, j2, o, 0, 1), i[2].push([j2[0], j2[1]]), i[2].push(i[1][3]);
  const c = new j({
    rings: i,
    spatialReference: o
  });
  return {
    lij: [e3.level, e3.childCount, 0],
    label: e3.id,
    geometry: c
  };
}
e([y({
  constructOnly: true
})], u.prototype, "lv", void 0), e([y({
  constructOnly: true
})], u.prototype, "nodeSR", void 0), u = e([a("esri.views.3d.layers.support.I3STreeDebugger")], u);
var h = e2();
var j2 = n();
export {
  u as I3STreeDebugger
};
//# sourceMappingURL=I3STreeDebugger-BCRIMNG3.js.map
