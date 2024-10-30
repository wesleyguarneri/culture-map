import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  d as d2
} from "./chunk-RNWCH3YD.js";
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
import {
  c
} from "./chunk-GCVQXAS4.js";
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
import "./chunk-XLEC46FY.js";
import "./chunk-4AZPIP7K.js";
import {
  P,
  d
} from "./chunk-LZSLQ24Q.js";
import "./chunk-U3RHUXYK.js";
import "./chunk-7DBI6LQG.js";
import "./chunk-AUUN7RFQ.js";
import "./chunk-JAMSDYD6.js";
import "./chunk-PH6NPTP7.js";
import {
  e
} from "./chunk-NUICEVIH.js";
import "./chunk-NXK752PZ.js";
import "./chunk-UVNLCXWD.js";
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
import "./chunk-2ZJE6ZFX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/views/3d/layers/support/TerrainTileTree3DDebugger.js
var m = class extends d2 {
  constructor(e2) {
    super(e2), this.enablePolygons = false;
  }
  initialize() {
    d(() => this.enabled, (e2) => this.view.basemapTerrain.renderPatchBorders = e2, P);
  }
  getTiles() {
    const e2 = null != this.view.basemapTerrain.spatialReference ? this.view.basemapTerrain.spatialReference : null;
    return this.view.basemapTerrain.test.getRenderedTiles().map((r) => __spreadProps(__spreadValues({}, r), {
      lij: r.lij,
      geometry: j.fromExtent(c(r.extent, e2))
    }));
  }
};
m = e([a("esri.views.3d.layers.support.TerrainTileTree3DDebugger")], m);
export {
  m as TerrainTileTree3DDebugger
};
//# sourceMappingURL=TerrainTileTree3DDebugger-3OWQ2M3E.js.map
