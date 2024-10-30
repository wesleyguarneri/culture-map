import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  l
} from "./chunk-EJXWYKCR.js";
import {
  M
} from "./chunk-MIIC4I55.js";
import "./chunk-B63XAMYJ.js";
import "./chunk-THUD7LGO.js";
import "./chunk-A45QR3VT.js";
import "./chunk-MYCEJRPQ.js";
import "./chunk-YSJVVDDH.js";
import "./chunk-53Z6KOJR.js";
import "./chunk-DLWZ3HVT.js";
import "./chunk-B76NC7GX.js";
import "./chunk-GK5M6FUR.js";
import "./chunk-MRP3FBLV.js";
import "./chunk-Y7SJWJAL.js";
import "./chunk-A2FDYA6M.js";
import "./chunk-YGAXDKHF.js";
import "./chunk-4TOSJLKR.js";
import "./chunk-DL2B6IFJ.js";
import "./chunk-K43CZ3M5.js";
import "./chunk-6EIBUVMG.js";
import "./chunk-LM3JDV4W.js";
import "./chunk-34V2CLL5.js";
import "./chunk-KOI252FF.js";
import "./chunk-MRPCXIVS.js";
import "./chunk-YTKVV2Y3.js";
import "./chunk-GCVQXAS4.js";
import "./chunk-UFQD6AL4.js";
import "./chunk-RNF7VOCU.js";
import "./chunk-TIRJMGGG.js";
import "./chunk-ZDRQSPB6.js";
import "./chunk-DCXDXGAR.js";
import "./chunk-BCCDYCTQ.js";
import "./chunk-66YQWHHE.js";
import "./chunk-QGBMZIP4.js";
import "./chunk-AOEBZVTA.js";
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
import "./chunk-PH6NPTP7.js";
import "./chunk-NUICEVIH.js";
import "./chunk-NXK752PZ.js";
import "./chunk-UVNLCXWD.js";
import "./chunk-PNUA7JOS.js";
import "./chunk-OR2FKGUM.js";
import "./chunk-UDMPWVPF.js";
import "./chunk-XJNKCEWL.js";
import {
  s as s2
} from "./chunk-AIZ3T7E3.js";
import "./chunk-6UEMNP3E.js";
import "./chunk-6WGE3IUL.js";
import "./chunk-MLYB2YW4.js";
import {
  a,
  s2 as s
} from "./chunk-6JFGZTLU.js";
import "./chunk-2ZJE6ZFX.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/geometry/support/meshUtils/convertMeshVertexSpace.js
function i(i2, n, c) {
  return __async(this, null, function* () {
    yield Promise.resolve(), s2(c);
    const m = M(i2, n);
    if (!m) throw new s("meshUtils:convertVertexSpace()", "Failed to convert to provided vertex space due to projection errors");
    const p = i2.cloneAndModifyVertexAttributes(new l(__spreadProps(__spreadValues({}, m), {
      uv: a(i2.vertexAttributes.uv),
      color: a(i2.vertexAttributes.color)
    })), n);
    return p.transform = null, p;
  });
}
export {
  i as convertMeshVertexSpace
};
//# sourceMappingURL=convertMeshVertexSpace-2OF4R6LE.js.map
