import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  d
} from "./chunk-A4WCDNF2.js";
import "./chunk-OO7WNZEW.js";
import "./chunk-T5C2TZNO.js";
import "./chunk-AOGKNBDG.js";
import "./chunk-F4FQ67JP.js";
import {
  f
} from "./chunk-FDI2X6GO.js";
import {
  S
} from "./chunk-T42EJVJR.js";
import "./chunk-EXPZNTF3.js";
import "./chunk-34V2CLL5.js";
import "./chunk-DC5LRNPY.js";
import "./chunk-C2OXE4NQ.js";
import "./chunk-SR7PRON4.js";
import "./chunk-HGHPYGKP.js";
import "./chunk-4DSGTDZJ.js";
import "./chunk-MRPCXIVS.js";
import "./chunk-YTKVV2Y3.js";
import "./chunk-GCVQXAS4.js";
import "./chunk-UFQD6AL4.js";
import "./chunk-2JI245BP.js";
import "./chunk-N34BRXVM.js";
import {
  w
} from "./chunk-RNF7VOCU.js";
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
  __async,
  __spreadValues
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/rest/query/executeForTopExtents.js
function a(a2, m, n) {
  return __async(this, null, function* () {
    const s = f(a2), i = yield d(s, S.from(m), __spreadValues({}, n)), u = i.data.extent;
    return !u || isNaN(u.xmin) || isNaN(u.ymin) || isNaN(u.xmax) || isNaN(u.ymax) ? {
      count: i.data.count,
      extent: null
    } : {
      count: i.data.count,
      extent: w.fromJSON(u)
    };
  });
}
export {
  a as executeForTopExtents
};
//# sourceMappingURL=executeForTopExtents-CPVIVM27.js.map