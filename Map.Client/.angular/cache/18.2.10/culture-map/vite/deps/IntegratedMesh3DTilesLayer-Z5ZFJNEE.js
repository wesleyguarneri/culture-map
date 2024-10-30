import {
  $,
  Z,
  w as w2
} from "./chunk-6MR4UDDL.js";
import {
  i
} from "./chunk-YTFX4PFO.js";
import {
  l
} from "./chunk-DSMB46HB.js";
import {
  e as e3
} from "./chunk-73Y7XDLH.js";
import {
  j
} from "./chunk-SJX5DIA7.js";
import "./chunk-LFKEQKEA.js";
import "./chunk-DUTZNK67.js";
import "./chunk-IN6BQCWS.js";
import "./chunk-CRNUMTSV.js";
import "./chunk-JM7HAEY6.js";
import {
  t
} from "./chunk-UWJIHV6Q.js";
import {
  b as b2
} from "./chunk-ZUSCOMQM.js";
import {
  d,
  p
} from "./chunk-DSEUCBVP.js";
import "./chunk-UPDWQH75.js";
import {
  S
} from "./chunk-RXWBJSJ5.js";
import {
  f as f2
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
import "./chunk-YVULORT6.js";
import "./chunk-PB33BAI3.js";
import "./chunk-CVB43GGP.js";
import "./chunk-LLDOZWVV.js";
import "./chunk-FYAEQPUY.js";
import "./chunk-7XMEZQ34.js";
import "./chunk-BDM2D6IC.js";
import "./chunk-U2ZVAEKG.js";
import "./chunk-EDSMXTFO.js";
import "./chunk-MNLT652N.js";
import {
  n as n3
} from "./chunk-OGZAGPIO.js";
import "./chunk-HJJIIYFF.js";
import "./chunk-T6GCUITX.js";
import "./chunk-TUIGM7TV.js";
import "./chunk-IHVSZYZS.js";
import "./chunk-6CA6K3O7.js";
import {
  w
} from "./chunk-NYQ5CYNR.js";
import "./chunk-O7UDKFOW.js";
import {
  f
} from "./chunk-TKPMIAIW.js";
import "./chunk-NQOJNTB3.js";
import "./chunk-MFOQYQFG.js";
import "./chunk-NKCPFCP3.js";
import {
  M
} from "./chunk-3ZXOUEQG.js";
import {
  K,
  O,
  b,
  e as e2,
  m,
  r as r2,
  u as u2
} from "./chunk-AXVPJBVW.js";
import {
  n as n2,
  r
} from "./chunk-OXEPWRM7.js";
import "./chunk-POILQGXA.js";
import {
  u
} from "./chunk-JJS7PR2U.js";
import "./chunk-L5YS4GSA.js";
import "./chunk-PRREDSOB.js";
import "./chunk-V5C6HSAM.js";
import {
  U
} from "./chunk-SYATLP3H.js";
import "./chunk-V6AMQYXE.js";
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

// ../../../node_modules/@arcgis/core/layers/IntegratedMesh3DTilesLayer.js
var D = class extends l(b2(j(t(S(e3(i(f2))))))) {
  constructor(e4) {
    super(e4), this.operationalLayerType = "IntegratedMesh3DTilesLayer", this.spatialReference = new f({
      wkid: 4326,
      vcsWkid: 115700
    }), this.fullExtent = new w(-180, -90, 180, 90, this.spatialReference), this.url = null, this.type = "integrated-mesh-3dtiles", this.path = null, this.minScale = 0, this.maxScale = 0;
  }
  set elevationInfo(e4) {
    this._set("elevationInfo", e4), this._validateElevationInfo();
  }
  _verifyArray(e4, t2) {
    if (!Array.isArray(e4) || e4.length < t2) return false;
    for (const r3 of e4) if ("number" != typeof r3) return false;
    return true;
  }
  _initFullExtent(e4) {
    const t2 = e4.root?.boundingVolume;
    if (!t2) return;
    if (t2.box) {
      const e5 = t2?.box;
      if (e5[3] > 7972671 && e5[7] > 7972671 && e5[11] > 7945940) return;
    }
    const r3 = e4.root?.transform, i2 = n2();
    if (t2.region && this._verifyArray(t2.region, 6)) {
      const e5 = t2.region, r4 = M(e5[0]), i3 = M(e5[1]), s2 = e5[4], a3 = M(e5[2]), n4 = M(e5[3]), m2 = e5[5];
      this.fullExtent = new w({
        xmin: r4,
        ymin: i3,
        zmin: s2,
        xmax: a3,
        ymax: n4,
        zmax: m2,
        spatialReference: this.spatialReference
      });
    } else if (t2.sphere && this._verifyArray(t2.sphere, 4)) {
      const e5 = t2.sphere, o = r(e5[0], e5[1], e5[2]), s2 = e5[3] / Math.sqrt(3), a3 = n2();
      e2(a3, o, r(s2, s2, s2));
      const n4 = n2();
      if (u2(n4, o, r(s2, s2, s2)), r3 && this._verifyArray(r3, 16)) {
        const e6 = r3;
        O(i2, a3, e6), r2(a3, i2), O(i2, n4, e6), r2(n4, i2);
      }
      n3(a3, u, 0, a3, f.WGS84, 0, 1), n3(n4, u, 0, n4, f.WGS84, 0, 1);
      const m2 = n2(), u3 = n2();
      m(m2, a3, n4), b(u3, a3, n4), this.fullExtent = new w({
        xmin: m2[0],
        ymin: m2[1],
        zmin: m2[2],
        xmax: u3[0],
        ymax: u3[1],
        zmax: u3[2],
        spatialReference: this.spatialReference
      });
    } else if (t2.box && this._verifyArray(t2.box, 12)) {
      const e5 = t2.box, i3 = r(e5[0], e5[1], e5[2]), o = r(e5[3], e5[4], e5[5]), s2 = r(e5[6], e5[7], e5[8]), a3 = r(e5[9], e5[10], e5[11]), n4 = [];
      for (let t3 = 0; t3 < 8; ++t3) n4.push(n2());
      if (u2(n4[0], i3, o), u2(n4[0], n4[0], s2), u2(n4[0], n4[0], a3), K(n4[1], i3, o), u2(n4[1], n4[1], s2), u2(n4[1], n4[1], a3), u2(n4[2], i3, o), K(n4[2], n4[2], s2), u2(n4[2], n4[2], a3), K(n4[3], i3, o), K(n4[3], n4[3], s2), u2(n4[3], n4[3], a3), u2(n4[4], i3, o), u2(n4[4], n4[4], s2), K(n4[4], n4[4], a3), K(n4[5], i3, o), u2(n4[5], n4[5], s2), K(n4[5], n4[5], a3), u2(n4[6], i3, o), K(n4[6], n4[6], s2), K(n4[6], n4[6], a3), K(n4[7], i3, o), K(n4[7], n4[7], s2), K(n4[7], n4[7], a3), r3 && this._verifyArray(r3, 16)) {
        const e6 = r3;
        for (let t3 = 0; t3 < 8; ++t3) O(n4[t3], n4[t3], e6);
      }
      const m2 = r(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE), p2 = r(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
      for (let t3 = 0; t3 < 8; ++t3) n3(n4[t3], u, 0, n4[t3], f.WGS84, 0, 1), m(p2, p2, n4[t3]), b(m2, m2, n4[t3]);
      this.fullExtent = new w({
        xmin: p2[0],
        ymin: p2[1],
        zmin: p2[2],
        xmax: m2[0],
        ymax: m2[1],
        zmax: m2[2],
        spatialReference: this.spatialReference
      });
    }
  }
  load(e4) {
    return __async(this, null, function* () {
      return this.addResolvingPromise(this._doLoad(e4)), this;
    });
  }
  _doLoad(e4) {
    return __async(this, null, function* () {
      const i2 = null != e4 ? e4.signal : null;
      try {
        yield this.loadFromPortal({
          supportedTypes: ["3DTiles Service"],
          validateItem: (e5) => {
            if (e5.typeKeywords?.includes("IntegratedMesh")) return true;
            throw new s("portal:invalid-layer-item-type", "Invalid layer item, expected '${expectedType}' ", {
              expectedType: "3DTiles Service containing IntegratedMesh"
            });
          }
        }, e4);
      } catch (o) {
        a(o);
      }
      if (this.url) {
        const e5 = U(this.url, {
          query: __spreadProps(__spreadValues({
            f: "json"
          }, this.customParameters), {
            token: this.apiKey
          }),
          responseType: "json",
          signal: i2
        }).then((e6) => {
          this._initFullExtent(e6.data);
        }, (e6) => {
          a(e6);
        });
        yield e5;
      }
    });
  }
  fetchAttributionData() {
    return __async(this, null, function* () {
      return this.load().then(() => ({}));
    });
  }
  _validateElevationInfo() {
    const e4 = this.elevationInfo, t2 = "Integrated mesh 3d tiles layers";
    $(n.getLogger(this), Z(t2, "absolute-height", e4)), $(n.getLogger(this), w2(t2, e4));
  }
};
e([y({
  type: ["IntegratedMesh3DTilesLayer"]
})], D.prototype, "operationalLayerType", void 0), e([y({
  type: f
})], D.prototype, "spatialReference", void 0), e([y({
  type: w
})], D.prototype, "fullExtent", void 0), e([y(d)], D.prototype, "elevationInfo", null), e([y({
  type: ["show", "hide"]
})], D.prototype, "listMode", void 0), e([y(p)], D.prototype, "url", void 0), e([y({
  readOnly: true
})], D.prototype, "type", void 0), e([y({
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
})], D.prototype, "path", void 0), e([y({
  type: Number,
  json: {
    name: "layerDefinition.minScale",
    write: true,
    origins: {
      service: {
        read: false,
        write: false
      }
    }
  }
})], D.prototype, "minScale", void 0), e([y({
  type: Number,
  json: {
    name: "layerDefinition.maxScale",
    write: true,
    origins: {
      service: {
        read: false,
        write: false
      }
    }
  }
})], D.prototype, "maxScale", void 0), D = e([a2("esri.layers.IntegratedMesh3DTilesLayer")], D);
var z = D;
export {
  z as default
};
//# sourceMappingURL=IntegratedMesh3DTilesLayer-Z5ZFJNEE.js.map
