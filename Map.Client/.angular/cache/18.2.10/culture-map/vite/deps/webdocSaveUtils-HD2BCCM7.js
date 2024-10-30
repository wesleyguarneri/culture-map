import {
  n,
  p as p2
} from "./chunk-IM5W3NWZ.js";
import "./chunk-F35MWZH7.js";
import "./chunk-YA5CTHMT.js";
import {
  U,
  j,
  w as w3
} from "./chunk-5EBAJR7X.js";
import "./chunk-5JA2JHV3.js";
import {
  p
} from "./chunk-SNY4EEM3.js";
import {
  i as i3
} from "./chunk-2GDRAUF6.js";
import {
  i as i2
} from "./chunk-XLPKC3OB.js";
import "./chunk-HEWCRCJC.js";
import {
  o
} from "./chunk-B5ZW6SJE.js";
import "./chunk-SGSUM5YO.js";
import "./chunk-SG5TCCCK.js";
import "./chunk-6A7CWJED.js";
import {
  r,
  t
} from "./chunk-APL7ANIA.js";
import {
  a,
  f as f2,
  i,
  s as s2
} from "./chunk-LFKEQKEA.js";
import "./chunk-DUTZNK67.js";
import "./chunk-IN6BQCWS.js";
import {
  I as I2
} from "./chunk-CRNUMTSV.js";
import {
  L,
  w as w2
} from "./chunk-JM7HAEY6.js";
import {
  m
} from "./chunk-RXWBJSJ5.js";
import "./chunk-A3NNJ7XA.js";
import "./chunk-XTVPEVHA.js";
import "./chunk-S3IO7V4Q.js";
import "./chunk-7ZJ6P7J7.js";
import "./chunk-FPFZQCEQ.js";
import "./chunk-5I6J67HP.js";
import "./chunk-PB33BAI3.js";
import "./chunk-U2LCAVGY.js";
import {
  S
} from "./chunk-FYAEQPUY.js";
import {
  C
} from "./chunk-7XMEZQ34.js";
import "./chunk-BDM2D6IC.js";
import "./chunk-U2ZVAEKG.js";
import "./chunk-EDSMXTFO.js";
import "./chunk-MNLT652N.js";
import "./chunk-OGZAGPIO.js";
import "./chunk-HJJIIYFF.js";
import "./chunk-T6GCUITX.js";
import "./chunk-TUIGM7TV.js";
import "./chunk-IHVSZYZS.js";
import "./chunk-6CA6K3O7.js";
import "./chunk-NYQ5CYNR.js";
import {
  R
} from "./chunk-O7UDKFOW.js";
import {
  f
} from "./chunk-TKPMIAIW.js";
import "./chunk-NQOJNTB3.js";
import "./chunk-MFOQYQFG.js";
import "./chunk-NKCPFCP3.js";
import "./chunk-3ZXOUEQG.js";
import "./chunk-AXVPJBVW.js";
import "./chunk-OXEPWRM7.js";
import "./chunk-POILQGXA.js";
import {
  G
} from "./chunk-JJS7PR2U.js";
import "./chunk-L5YS4GSA.js";
import "./chunk-PRREDSOB.js";
import "./chunk-V5C6HSAM.js";
import {
  I,
  W
} from "./chunk-SYATLP3H.js";
import "./chunk-V6AMQYXE.js";
import {
  w
} from "./chunk-6WHTZNUH.js";
import "./chunk-EITGQLII.js";
import "./chunk-TIVJXVMN.js";
import "./chunk-XNUH25NY.js";
import "./chunk-WGAPNV7F.js";
import "./chunk-BXQGM56A.js";
import "./chunk-4Z5SGKRM.js";
import "./chunk-ANKOCGE2.js";
import "./chunk-7CJXZOFG.js";
import "./chunk-IRGZKO7V.js";
import "./chunk-5SELS7VU.js";
import "./chunk-DDYVXG4F.js";
import "./chunk-ANP42J2U.js";
import "./chunk-HJY2YILU.js";
import "./chunk-7DA6A5LD.js";
import "./chunk-2MMLMOWS.js";
import "./chunk-4323ZVPF.js";
import {
  s2 as s
} from "./chunk-WYIDUUN2.js";
import "./chunk-DXLOWWK7.js";
import {
  __async
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/webdoc/support/webdocSaveUtils.js
var A = ["NatGeo_World_Map", "Ocean_Basemap", "USA_Topo_Maps", "World_Imagery", "World_Street_Map", "World_Terrain_Base", "World_Topo_Map", "World_Hillshade", "Canvas/World_Light_Gray_Base", "Canvas/World_Light_Gray_Reference", "Canvas/World_Dark_Gray_Base", "Canvas/World_Dark_Gray_Reference", "Ocean/World_Ocean_Base", "Ocean/World_Ocean_Reference", "Reference/World_Boundaries_and_Places", "Reference/World_Reference_Overlay", "Reference/World_Transportation"].map((e) => e.toLowerCase());
function U2(e, t2, r2) {
  return __async(this, null, function* () {
    r2 ??= {}, C2(e, t2), yield w(() => !t2.updatingFromView), yield t2.load(), yield V(t2), yield r(t2), yield D(e, t2);
    const a2 = t2.portalItem, {
      json: i4,
      jsonContext: n2
    } = yield O(t2, a2);
    return t(n2, {
      errorName: `${e.name}:save`
    }, r2), yield x(t2, a2), yield we(e, t2, a2, i4, n2), yield Promise.all([t2.updateItemThumbnail(), p(t2.resourceReferences, n2)]), a2;
  });
}
function O(e, t2) {
  return __async(this, null, function* () {
    const o2 = o(t2, "web-map", true), r2 = e.write({}, o2);
    return yield Promise.all(o2.resources.pendingOperations), {
      json: r2,
      jsonContext: o2
    };
  });
}
function T(e, t2, r2, a2) {
  return __async(this, null, function* () {
    a2 ??= {};
    const i4 = E(e, r2);
    yield w(() => !t2.updatingFromView), yield t2.load(), yield V(t2), yield r(t2), yield D(e, t2);
    const {
      json: n2,
      jsonContext: s3
    } = yield O(t2, i4);
    t(s3, {
      errorName: `${e.name}:save`
    }, a2), yield Y(t2, i4);
    const l = t2.getThumbnailState();
    return (yield ye(e, t2, i4, n2, s3, a2)) && (t2.resourceReferences.portalItem = i4), t2.restoreThumbnailFromState(l), yield Promise.all([t2.updateItemThumbnail(), p(t2.resourceReferences, s3)]), i4;
  });
}
function C2(t2, o2) {
  if (!o2.portalItem) throw new s(`${t2.name}:portal-item-not-set`, "Portal item to save to has not been set on the WebMap");
  i3(o2.portalItem), M(t2, o2.portalItem);
}
function M(t2, o2) {
  if (o2.type !== t2.itemType) throw new s(`${t2.name}:portal-item-wrong-type`, `Portal item needs to have type "${t2.itemType}"`);
}
function D(t2, r2) {
  return __async(this, null, function* () {
    if (!r2.basemap?.baseLayers.length) throw new s(`${t2.name}:save`, "Map does not have a valid basemap with a base layer.");
    let a2 = null;
    if (yield w(() => {
      const e = U(r2.initialViewProperties, r2.basemap);
      return a2 = e.spatialReference, !e.updating;
    }), !G(a2, r2.initialViewProperties.spatialReference)) throw new s(`${t2.name}:save`, "The spatial reference of the basemap is not compatible with the one from the map.", {
      expected: r2.initialViewProperties.spatialReference,
      actual: a2
    });
  });
}
function E(e, t2) {
  let o2 = S.from(t2);
  return o2.id && (o2 = o2.clone(), o2.id = null), o2.type || (o2.type = e.itemType), o2.portal || (o2.portal = C.getDefault()), i3(o2), M(e, o2), o2;
}
function V(e) {
  const t2 = [];
  return e.basemap && t2.push(e.basemap.load()), e.ground && t2.push(e.ground.load()), Promise.allSettled(t2).then(() => {
  });
}
function x(e, t2) {
  return __async(this, null, function* () {
    t2.extent = yield ce(e.portalItem, e.initialViewProperties.viewpoint.targetGeometry), yield Z(e, t2);
  });
}
var G2 = f2.JSAPI;
var L2 = "CollectorDisabled";
var k = "Collector";
var $ = "Data Editing";
var B = "OfflineDisabled";
var N = "Offline";
var K = "Workforce Project";
var F = "Workforce Worker";
var H = "Workforce Dispatcher";
var J = "Offline Map Areas";
var q = "FieldMapsDisabled";
var z = f2.DEVELOPER_BASEMAP;
var Q = "UtilityNetwork";
var X = "IPS";
function Y(e, t2) {
  return __async(this, null, function* () {
    a(t2, L2), a(t2, q), a(t2, f2.METADATA), a(t2, B), a(t2, J), a(t2, H), a(t2, K), a(t2, F), yield x(e, t2);
  });
}
function Z(e, t2) {
  return __async(this, null, function* () {
    i(t2, G2), yield ee(e), ae(e, t2), ie(e, t2), ne(e, t2), se(e, t2), le(e, t2), pe(e, t2), t2.typeKeywords && (t2.typeKeywords = t2.typeKeywords.filter((e2, t3, o2) => o2.indexOf(e2) === t3));
  });
}
function ee(e) {
  const t2 = te(e).map((e2) => e2.load()).toArray();
  return Promise.allSettled(t2).then(() => {
  });
}
function te(e) {
  return e.allLayers.concat(e.allTables);
}
function oe(e) {
  return te(e).some((e2) => e2.loaded && L(e2) && e2.capabilities.operations.supportsEditing && e2.editingEnabled && ("subtype-group" !== e2.type || e2.sublayers.some((e3) => e3.editingEnabled)));
}
function re(e) {
  return te(e).filter((e2) => "group" !== e2.type).every((t2) => t2.loaded && fe(e, t2));
}
function ae(e, t2) {
  s2(t2, L2) || s2(t2, K) || s2(t2, F) || s2(t2, H) || !oe(e) ? a(t2, k) : i(t2, k);
}
function ie(e, t2) {
  oe(e) ? i(t2, $) : a(t2, $);
}
function ne(e, t2) {
  !s2(t2, B) && re(e) ? i(t2, N) : a(t2, N);
}
function se(e, t2) {
  w3(e.basemap) ? i(t2, z) : a(t2, z);
}
function le(e, t2) {
  e.utilityNetworks?.length ? i(t2, Q) : a(t2, Q);
}
function pe(e, t2) {
  e.ipsInfo ? i(t2, X) : a(t2, X);
}
function ce(e, t2) {
  return __async(this, null, function* () {
    const o2 = t2.clone().normalize();
    let r2;
    if (o2.length > 1) for (const a2 of o2) r2 ? a2.width > r2.width && (r2 = a2) : r2 = a2;
    else r2 = o2[0];
    return me(e, r2);
  });
}
function me(e, t2) {
  return __async(this, null, function* () {
    const o2 = t2.spatialReference;
    if (o2.isWGS84) return t2.clone();
    if (o2.isWebMercator) return R(t2);
    const {
      getGeometryServiceURL: r2
    } = yield import("./geometryServiceUtils-ZLQQG2XD.js"), a2 = yield r2(e), i4 = new p2({
      geometries: [t2],
      outSpatialReference: f.WGS84
    });
    return (yield n(a2, i4))[0];
  });
}
function ue(e) {
  return w2(e) || "map-notes" === e.type || "route" === e.type;
}
function fe(e, t2) {
  return L(t2) && t2.capabilities.operations.supportsSync || ue(t2) && !t2.portalItem || ("tile" === t2.type || "vector-tile" === t2.type) && (t2.capabilities.operations.supportsExportTiles || de(t2) || j(t2)) && t2.spatialReference.equals(e.initialViewProperties.spatialReference);
}
function de(e) {
  return "tile" === e.type && I2(e.url) && A.some((t2) => e.url?.toLowerCase().includes("/" + t2 + "/"));
}
function we(e, t2, o2, r2, a2) {
  return __async(this, null, function* () {
    yield o2.update({
      data: r2
    }), _e(e, t2, o2, r2, a2);
  });
}
function ye(t2, o2, r2, a2, i4, n2) {
  return __async(this, null, function* () {
    const s3 = o2.portalItem, l = {
      item: s3,
      authenticated: !(!s3?.id || !s3.portal.user)
    }, p3 = r2.portal;
    yield p3.signIn();
    const {
      copyAllowed: c,
      itemReloaded: m2
    } = yield he(l, p3);
    if (l.authenticated ||= m2, !c) throw new s(`${t2.name}:save-as-copy-not-allowed`, "Owner of this map does not allow others to save a copy");
    const u = yield ge(r2, l, a2, n2);
    return o2.portalItem = r2, _e(t2, o2, r2, a2, i4), u;
  });
}
function he(e, t2) {
  return __async(this, null, function* () {
    const {
      item: o2,
      authenticated: r2
    } = e;
    return o2?.id && o2.typeKeywords?.includes("useOnly") ? o2.portal.portalHostname !== t2.portalHostname ? {
      copyAllowed: false,
      itemReloaded: false
    } : (r2 || (yield o2.reload()), {
      copyAllowed: "admin" === o2.itemControl || "update" === o2.itemControl,
      itemReloaded: true
    }) : {
      copyAllowed: true,
      itemReloaded: false
    };
  });
}
function ge(e, t2, o2, a2) {
  return __async(this, null, function* () {
    const i4 = e.portal, {
      item: n2
    } = t2, {
      folder: s3,
      copyAllResources: l
    } = a2;
    let p3 = false;
    if (l && n2?.id && W(n2.portal.url, i4.url) && parseInt(n2.portal.currentVersion, 10) >= 2023) {
      const {
        total: e2
      } = yield n2.fetchResources();
      p3 = !!e2;
    }
    if (p3) {
      const t3 = yield n2.copy({
        copyResources: "all",
        folder: s3
      });
      e.id = t3.id, e.portal = t3.portal;
      const r2 = e.toJSON();
      yield e.load(), e.read(r2), yield e.update({
        data: o2
      });
    } else yield i4.user?.addItem({
      item: e,
      folder: s3,
      data: o2
    });
    return p3;
  });
}
function _e(e, o2, r2, n2, s3) {
  m.prototype.read.call(o2, {
    version: n2.version,
    authoringApp: n2.authoringApp,
    authoringAppVersion: n2.authoringAppVersion
  }, {
    origin: e.origin,
    ignoreDefaults: true,
    url: r2.itemUrl ? I(r2.itemUrl) : void 0
  }), i2(s3), o2.resourceInfo = n2;
}
export {
  O as createJSON,
  U2 as save,
  T as saveAs
};
//# sourceMappingURL=webdocSaveUtils-HD2BCCM7.js.map
