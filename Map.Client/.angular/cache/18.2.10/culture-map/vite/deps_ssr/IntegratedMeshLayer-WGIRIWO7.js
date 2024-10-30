import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  f as f2
} from "./chunk-F6WSQF55.js";
import {
  j as j2
} from "./chunk-4X2M4YSF.js";
import "./chunk-D5RCKR5Z.js";
import {
  a as a3,
  m,
  p as p2,
  y as y2
} from "./chunk-AS4KZK4Y.js";
import {
  C as C2,
  L
} from "./chunk-N2GJ34YR.js";
import "./chunk-IZJSB4V4.js";
import {
  $,
  Z,
  w
} from "./chunk-ZSJNH2BT.js";
import "./chunk-D3XX7CQS.js";
import {
  i
} from "./chunk-JA5GJ7PX.js";
import {
  e as e2
} from "./chunk-XC5RDNAY.js";
import "./chunk-VFYCIIDC.js";
import {
  l
} from "./chunk-PQUZDC3L.js";
import "./chunk-6EIBUVMG.js";
import "./chunk-FEZPDSKY.js";
import "./chunk-X4WQKYPS.js";
import "./chunk-VDKX5QNO.js";
import "./chunk-JDVVCQU6.js";
import "./chunk-AKRJ5ORG.js";
import {
  j
} from "./chunk-BD24XM4D.js";
import "./chunk-XU6JZUMA.js";
import "./chunk-3BXPVUY5.js";
import "./chunk-LM3JDV4W.js";
import "./chunk-34V2CLL5.js";
import "./chunk-CXNERL22.js";
import "./chunk-7V4JSBFA.js";
import {
  t
} from "./chunk-UZ7IOCF3.js";
import {
  b
} from "./chunk-OS542PQQ.js";
import {
  d
} from "./chunk-3B5GODXR.js";
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
import "./chunk-557VKXWR.js";
import "./chunk-KETDH2J4.js";
import "./chunk-7QV7DHWN.js";
import "./chunk-4L4Y34YK.js";
import {
  p
} from "./chunk-BXONKQKI.js";
import "./chunk-2HDBQXAR.js";
import "./chunk-RNF7VOCU.js";
import "./chunk-TIRJMGGG.js";
import "./chunk-ZDRQSPB6.js";
import {
  o
} from "./chunk-DCXDXGAR.js";
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
import {
  I,
  U
} from "./chunk-XLEC46FY.js";
import {
  u2 as u
} from "./chunk-4AZPIP7K.js";
import {
  C,
  v
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
  a3 as a2
} from "./chunk-UDMPWVPF.js";
import "./chunk-XJNKCEWL.js";
import {
  a
} from "./chunk-AIZ3T7E3.js";
import "./chunk-6UEMNP3E.js";
import "./chunk-6WGE3IUL.js";
import "./chunk-MLYB2YW4.js";
import {
  n2 as n,
  s2 as s
} from "./chunk-6JFGZTLU.js";
import "./chunk-2ZJE6ZFX.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/layers/support/SceneModifications.js
var m2;
var n2 = m2 = class extends u(V.ofType(f2)) {
  constructor(r) {
    super(r), this.url = null;
  }
  clone() {
    return new m2({
      url: this.url,
      items: this.items.map((r) => r.clone())
    });
  }
  toJSON(r) {
    return this.toArray().map((o2) => o2.toJSON(r)).filter((r2) => !!r2.geometry);
  }
  static fromJSON(r, o2) {
    const t2 = new m2();
    for (const e3 of r) t2.add(f2.fromJSON(e3, o2));
    return t2;
  }
  static fromUrl(r, t2, e3) {
    return __async(this, null, function* () {
      const i2 = {
        url: I(r),
        origin: "service"
      }, c = yield U(r, {
        responseType: "json",
        signal: e3?.signal
      }), n3 = t2.toJSON(), a5 = [];
      for (const o2 of c.data) a5.push(f2.fromJSON(__spreadProps(__spreadValues({}, o2), {
        geometry: __spreadProps(__spreadValues({}, o2.geometry), {
          spatialReference: n3
        })
      }), i2));
      return new m2({
        url: r,
        items: a5
      });
    });
  }
};
e([y({
  type: String
})], n2.prototype, "url", void 0), n2 = m2 = e([a2("esri.layers.support.SceneModifications")], n2);
var a4 = n2;

// ../../../node_modules/@arcgis/core/layers/IntegratedMeshLayer.js
var A = class extends L(l(b(j(t(S(e2(i(f)))))))) {
  constructor(...e3) {
    super(...e3), this.geometryType = "mesh", this.operationalLayerType = "IntegratedMeshLayer", this.type = "integrated-mesh", this.nodePages = null, this.materialDefinitions = null, this.textureSetDefinitions = null, this.geometryDefinitions = null, this.serviceUpdateTimeStamp = null, this.profile = "mesh-pyramids", this.modifications = null, this._modificationsSource = null, this.path = null;
  }
  initialize() {
    this.addHandles(v(() => this.modifications, "after-changes", () => this.modifications = this.modifications, C));
  }
  normalizeCtorArgs(e3, t2) {
    return "string" == typeof e3 ? __spreadValues({
      url: e3
    }, t2) : e3;
  }
  readModifications(e3, t2, o2) {
    this._modificationsSource = {
      url: p(e3, o2),
      context: o2
    };
  }
  set elevationInfo(e3) {
    this._set("elevationInfo", e3), this._validateElevationInfo();
  }
  load(e3) {
    return __async(this, null, function* () {
      return this.addResolvingPromise(this._doLoad(e3)), this;
    });
  }
  _doLoad(e3) {
    return __async(this, null, function* () {
      const t2 = e3?.signal;
      try {
        yield this.loadFromPortal({
          supportedTypes: ["Scene Service"]
        }, e3);
      } catch (o2) {
        a(o2);
      }
      if (yield this._fetchService(t2), null != this._modificationsSource) {
        const t3 = yield a4.fromUrl(this._modificationsSource.url, this.spatialReference, e3);
        this.setAtOrigin("modifications", t3, this._modificationsSource.context.origin), this._modificationsSource = null;
      }
      yield this._fetchIndexAndUpdateExtent(this.nodePages, t2);
    });
  }
  beforeSave() {
    if (null != this._modificationsSource) return this.load().then(() => {
    }, () => {
    });
  }
  saveAs(e3, t2) {
    return __async(this, null, function* () {
      return this._debouncedSaveOperations(C2.SAVE_AS, __spreadProps(__spreadValues({}, t2), {
        getTypeKeywords: () => this._getTypeKeywords(),
        portalItemLayerType: "integrated-mesh"
      }), e3);
    });
  }
  save() {
    return __async(this, null, function* () {
      const e3 = {
        getTypeKeywords: () => this._getTypeKeywords(),
        portalItemLayerType: "integrated-mesh"
      };
      return this._debouncedSaveOperations(C2.SAVE, e3);
    });
  }
  validateLayer(e3) {
    if (e3.layerType && "IntegratedMesh" !== e3.layerType) throw new s("integrated-mesh-layer:layer-type-not-supported", "IntegratedMeshLayer does not support this layer type", {
      layerType: e3.layerType
    });
    if (isNaN(this.version.major) || isNaN(this.version.minor)) throw new s("layer:service-version-not-supported", "Service version is not supported.", {
      serviceVersion: this.version.versionString,
      supportedVersions: "1.x"
    });
    if (this.version.major > 1) throw new s("layer:service-version-too-new", "Service version is too new.", {
      serviceVersion: this.version.versionString,
      supportedVersions: "1.x"
    });
  }
  _getTypeKeywords() {
    return ["IntegratedMeshLayer"];
  }
  _validateElevationInfo() {
    const e3 = this.elevationInfo, t2 = "Integrated mesh layers";
    $(n.getLogger(this), Z(t2, "absolute-height", e3)), $(n.getLogger(this), w(t2, e3));
  }
};
e([y({
  type: String,
  readOnly: true
})], A.prototype, "geometryType", void 0), e([y({
  type: ["show", "hide"]
})], A.prototype, "listMode", void 0), e([y({
  type: ["IntegratedMeshLayer"]
})], A.prototype, "operationalLayerType", void 0), e([y({
  json: {
    read: false
  },
  readOnly: true
})], A.prototype, "type", void 0), e([y({
  type: p2,
  readOnly: true
})], A.prototype, "nodePages", void 0), e([y({
  type: [a3],
  readOnly: true
})], A.prototype, "materialDefinitions", void 0), e([y({
  type: [y2],
  readOnly: true
})], A.prototype, "textureSetDefinitions", void 0), e([y({
  type: [m],
  readOnly: true
})], A.prototype, "geometryDefinitions", void 0), e([y({
  readOnly: true
})], A.prototype, "serviceUpdateTimeStamp", void 0), e([y({
  type: a4
}), j2({
  origins: ["web-scene", "portal-item"],
  type: "resource",
  prefix: "modifications"
})], A.prototype, "modifications", void 0), e([o(["web-scene", "portal-item"], "modifications")], A.prototype, "readModifications", null), e([y(d)], A.prototype, "elevationInfo", null), e([y({
  type: String,
  json: {
    origins: {
      "web-scene": {
        read: true,
        write: true
      },
      "portal-item": {
        read: true,
        write: true
      }
    },
    read: false
  }
})], A.prototype, "path", void 0), A = e([a2("esri.layers.IntegratedMeshLayer")], A);
var P = A;
export {
  P as default
};
//# sourceMappingURL=IntegratedMeshLayer-WGIRIWO7.js.map
