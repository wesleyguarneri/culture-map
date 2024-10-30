import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  j
} from "./chunk-BD24XM4D.js";
import "./chunk-3BXPVUY5.js";
import "./chunk-LM3JDV4W.js";
import "./chunk-34V2CLL5.js";
import "./chunk-7V4JSBFA.js";
import {
  S
} from "./chunk-7TBQUMV3.js";
import {
  f
} from "./chunk-TPLUZX3A.js";
import "./chunk-DC5LRNPY.js";
import "./chunk-ASCK5HJ5.js";
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
import "./chunk-KETDH2J4.js";
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
import "./chunk-AUUN7RFQ.js";
import "./chunk-JAMSDYD6.js";
import "./chunk-PH6NPTP7.js";
import {
  e
} from "./chunk-NUICEVIH.js";
import {
  v
} from "./chunk-NXK752PZ.js";
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
import {
  s2 as s
} from "./chunk-6JFGZTLU.js";
import "./chunk-2ZJE6ZFX.js";
import "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/layers/UnsupportedLayer.js
var a2 = class extends j(S(f)) {
  constructor(e2) {
    super(e2), this.resourceInfo = null, this.persistenceEnabled = true, this.type = "unsupported";
  }
  initialize() {
    this.addResolvingPromise(new Promise((e2, o) => {
      v(() => {
        const e3 = this.resourceInfo && (this.resourceInfo.layerType || this.resourceInfo.type);
        let s2 = "Unsupported layer type";
        e3 && (s2 += " " + e3), o(new s("layer:unsupported-layer-type", s2, {
          layerType: e3
        }));
      });
    }));
  }
  read(e2, r) {
    const o = {
      resourceInfo: e2
    };
    null != e2.id && (o.id = e2.id), null != e2.title && (o.title = e2.title), super.read(o, r);
  }
  write(e2, r) {
    return Object.assign(e2 || {}, this.resourceInfo, {
      id: this.id
    });
  }
};
e([y({
  readOnly: true
})], a2.prototype, "resourceInfo", void 0), e([y({
  type: ["show", "hide"]
})], a2.prototype, "listMode", void 0), e([y({
  type: Boolean,
  readOnly: false
})], a2.prototype, "persistenceEnabled", void 0), e([y({
  json: {
    read: false
  },
  readOnly: true,
  value: "unsupported"
})], a2.prototype, "type", void 0), a2 = e([a("esri.layers.UnsupportedLayer")], a2);
var l = a2;
export {
  l as default
};
//# sourceMappingURL=UnsupportedLayer-ZK426FGU.js.map
