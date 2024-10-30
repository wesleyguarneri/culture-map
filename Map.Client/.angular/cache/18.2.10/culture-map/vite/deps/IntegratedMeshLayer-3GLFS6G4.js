import {
  f as f2
} from "./chunk-HMUNABEN.js";
import {
  j as j2
} from "./chunk-6PFH6TN3.js";
import "./chunk-Q7ENCKPJ.js";
import {
  a as a3,
  m,
  p as p2,
  y as y2
} from "./chunk-6MR3LXEW.js";
import {
  C as C2,
  L
} from "./chunk-3RL4VAAQ.js";
import "./chunk-JPIYGHSR.js";
import {
  $,
  Z,
  w
} from "./chunk-6MR4UDDL.js";
import {
  i
} from "./chunk-YTFX4PFO.js";
import "./chunk-N3IR233K.js";
import {
  l
} from "./chunk-DSMB46HB.js";
import "./chunk-KQDYTHCF.js";
import {
  e as e2
} from "./chunk-73Y7XDLH.js";
import "./chunk-SNY4EEM3.js";
import "./chunk-2GDRAUF6.js";
import "./chunk-XLPKC3OB.js";
import "./chunk-HEWCRCJC.js";
import "./chunk-B5ZW6SJE.js";
import {
  j
} from "./chunk-SJX5DIA7.js";
import "./chunk-APL7ANIA.js";
import "./chunk-LFKEQKEA.js";
import "./chunk-DUTZNK67.js";
import "./chunk-IN6BQCWS.js";
import "./chunk-CRNUMTSV.js";
import "./chunk-JM7HAEY6.js";
import {
  t
} from "./chunk-UWJIHV6Q.js";
import {
  b
} from "./chunk-ZUSCOMQM.js";
import {
  d
} from "./chunk-DSEUCBVP.js";
import "./chunk-UPDWQH75.js";
import {
  S
} from "./chunk-RXWBJSJ5.js";
import {
  f
} from "./chunk-M2NS3MSU.js";
import "./chunk-HMNBB7ED.js";
import "./chunk-3RRMLFFN.js";
import "./chunk-DR5TVNEL.js";
import "./chunk-HT2T6PUB.js";
import "./chunk-K64AAM77.js";
import "./chunk-6EUVKE22.js";
import "./chunk-OKJHJ3CY.js";
import "./chunk-DTUSTSEJ.js";
import "./chunk-JCWFGRHQ.js";
import "./chunk-JILEJ6R2.js";
import "./chunk-GAW5JHG4.js";
import "./chunk-OEKKQXBD.js";
import "./chunk-S3IO7V4Q.js";
import "./chunk-4ZZRP4MA.js";
import "./chunk-5I6J67HP.js";
import "./chunk-YVULORT6.js";
import "./chunk-PB33BAI3.js";
import "./chunk-CVB43GGP.js";
import "./chunk-LLDOZWVV.js";
import "./chunk-U2LCAVGY.js";
import "./chunk-FYAEQPUY.js";
import "./chunk-7XMEZQ34.js";
import "./chunk-BDM2D6IC.js";
import {
  p
} from "./chunk-U2ZVAEKG.js";
import "./chunk-EDSMXTFO.js";
import "./chunk-MNLT652N.js";
import "./chunk-OGZAGPIO.js";
import "./chunk-HJJIIYFF.js";
import "./chunk-T6GCUITX.js";
import "./chunk-TUIGM7TV.js";
import "./chunk-IHVSZYZS.js";
import "./chunk-6CA6K3O7.js";
import "./chunk-NYQ5CYNR.js";
import "./chunk-O7UDKFOW.js";
import "./chunk-TKPMIAIW.js";
import {
  o
} from "./chunk-NQOJNTB3.js";
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
  I,
  U
} from "./chunk-SYATLP3H.js";
import {
  u2 as u
} from "./chunk-V6AMQYXE.js";
import {
  C,
  v
} from "./chunk-6WHTZNUH.js";
import {
  V
} from "./chunk-EITGQLII.js";
import "./chunk-TIVJXVMN.js";
import "./chunk-XNUH25NY.js";
import "./chunk-WGAPNV7F.js";
import "./chunk-BXQGM56A.js";
import {
  e
} from "./chunk-4Z5SGKRM.js";
import "./chunk-ANKOCGE2.js";
import {
  y
} from "./chunk-7CJXZOFG.js";
import "./chunk-IRGZKO7V.js";
import "./chunk-5SELS7VU.js";
import {
  a3 as a2
} from "./chunk-DDYVXG4F.js";
import "./chunk-ANP42J2U.js";
import {
  a
} from "./chunk-HJY2YILU.js";
import "./chunk-7DA6A5LD.js";
import "./chunk-2MMLMOWS.js";
import "./chunk-4323ZVPF.js";
import {
  n2 as n,
  s2 as s
} from "./chunk-WYIDUUN2.js";
import "./chunk-DXLOWWK7.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-JWIQHGQB.js";

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
//# sourceMappingURL=IntegratedMeshLayer-3GLFS6G4.js.map
