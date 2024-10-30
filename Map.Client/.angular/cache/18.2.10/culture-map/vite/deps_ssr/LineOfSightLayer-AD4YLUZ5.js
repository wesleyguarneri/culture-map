import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  v
} from "./chunk-BYORSVZF.js";
import {
  f as f2,
  u
} from "./chunk-7VRJFZQR.js";
import "./chunk-4X2M4YSF.js";
import "./chunk-D5RCKR5Z.js";
import "./chunk-RHVUMKCC.js";
import "./chunk-ZSJNH2BT.js";
import "./chunk-D3XX7CQS.js";
import "./chunk-DL2B6IFJ.js";
import "./chunk-VOOO6FU5.js";
import "./chunk-JDVVCQU6.js";
import {
  n
} from "./chunk-NXXQ35YM.js";
import "./chunk-LM3JDV4W.js";
import "./chunk-34V2CLL5.js";
import {
  b
} from "./chunk-OS542PQQ.js";
import "./chunk-3B5GODXR.js";
import "./chunk-NKXXHQDD.js";
import {
  S
} from "./chunk-7TBQUMV3.js";
import {
  f
} from "./chunk-TPLUZX3A.js";
import "./chunk-BGLJ2FAH.js";
import "./chunk-2EJFYNM7.js";
import "./chunk-DC5LRNPY.js";
import "./chunk-ASCK5HJ5.js";
import "./chunk-5X5U7R6O.js";
import "./chunk-XNLAOXPY.js";
import "./chunk-C2OXE4NQ.js";
import "./chunk-I2TVVMQ6.js";
import "./chunk-5EGQYY2H.js";
import "./chunk-JKPUNUQA.js";
import "./chunk-SR7PRON4.js";
import "./chunk-HGHPYGKP.js";
import "./chunk-4DSGTDZJ.js";
import "./chunk-MRPCXIVS.js";
import "./chunk-YTKVV2Y3.js";
import "./chunk-GCVQXAS4.js";
import "./chunk-UFQD6AL4.js";
import "./chunk-EGBDRLCX.js";
import "./chunk-THZPD5CT.js";
import "./chunk-OBCA6CWH.js";
import "./chunk-2JI245BP.js";
import "./chunk-N34BRXVM.js";
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
import {
  A,
  d
} from "./chunk-LZSLQ24Q.js";
import {
  V
} from "./chunk-U3RHUXYK.js";
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
import "./chunk-2ZJE6ZFX.js";
import {
  __async
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/layers/LineOfSightLayer.js
var m = V.ofType(f2);
var u2 = class extends b(S(f)) {
  constructor(e2) {
    super(e2), this.type = "line-of-sight", this.operationalLayerType = "LineOfSightLayer", this.analysis = new v(), this.opacity = 1;
  }
  initialize() {
    this.addHandles(d(() => this.analysis, (e2, t) => {
      null != t && t.parent === this && (t.parent = null), null != e2 && (e2.parent = this);
    }, A));
  }
  load() {
    return __async(this, null, function* () {
      return null != this.analysis && this.addResolvingPromise(this.analysis.waitComputeExtent()), this;
    });
  }
  get observer() {
    return this.analysis?.observer;
  }
  set observer(e2) {
    const {
      analysis: t
    } = this;
    t && (t.observer = e2);
  }
  get targets() {
    return null != this.analysis ? this.analysis.targets : new V();
  }
  set targets(e2) {
    n(e2, this.analysis?.targets);
  }
  get fullExtent() {
    return null != this.analysis ? this.analysis.extent : null;
  }
  get spatialReference() {
    return null != this.analysis ? this.analysis.spatialReference : null;
  }
  releaseAnalysis(e2) {
    this.analysis === e2 && (this.analysis = new v());
  }
};
e([y({
  json: {
    read: false
  },
  readOnly: true
})], u2.prototype, "type", void 0), e([y({
  type: ["LineOfSightLayer"]
})], u2.prototype, "operationalLayerType", void 0), e([y({
  type: u,
  json: {
    read: true,
    write: {
      isRequired: true,
      ignoreOrigin: true
    }
  }
})], u2.prototype, "observer", null), e([y({
  type: m,
  json: {
    read: true,
    write: {
      ignoreOrigin: true
    }
  }
})], u2.prototype, "targets", null), e([y({
  nonNullable: true,
  json: {
    read: false,
    write: false
  }
})], u2.prototype, "analysis", void 0), e([y({
  readOnly: true
})], u2.prototype, "fullExtent", null), e([y({
  readOnly: true
})], u2.prototype, "spatialReference", null), e([y({
  readOnly: true,
  json: {
    read: false,
    write: false,
    origins: {
      service: {
        read: false,
        write: false
      },
      "portal-item": {
        read: false,
        write: false
      },
      "web-document": {
        read: false,
        write: false
      }
    }
  }
})], u2.prototype, "opacity", void 0), e([y({
  type: ["show", "hide"]
})], u2.prototype, "listMode", void 0), u2 = e([a("esri.layers.LineOfSightLayer")], u2);
var d2 = u2;
export {
  d2 as default
};
//# sourceMappingURL=LineOfSightLayer-AD4YLUZ5.js.map
