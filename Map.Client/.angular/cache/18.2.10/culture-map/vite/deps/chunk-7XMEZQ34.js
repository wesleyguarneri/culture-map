import {
  m
} from "./chunk-BDM2D6IC.js";
import {
  c as c2
} from "./chunk-MNLT652N.js";
import {
  w
} from "./chunk-NYQ5CYNR.js";
import {
  g
} from "./chunk-O7UDKFOW.js";
import {
  f as f2
} from "./chunk-TKPMIAIW.js";
import {
  o
} from "./chunk-NQOJNTB3.js";
import {
  n
} from "./chunk-V5C6HSAM.js";
import {
  U,
  c2 as c3,
  t3 as t
} from "./chunk-SYATLP3H.js";
import {
  f,
  u2 as u3
} from "./chunk-V6AMQYXE.js";
import {
  e
} from "./chunk-4Z5SGKRM.js";
import {
  S
} from "./chunk-ANKOCGE2.js";
import {
  y
} from "./chunk-7CJXZOFG.js";
import {
  a3,
  b
} from "./chunk-DDYVXG4F.js";
import {
  a as a2,
  c2 as c,
  s as s3,
  u as u2
} from "./chunk-HJY2YILU.js";
import {
  l,
  u
} from "./chunk-2MMLMOWS.js";
import {
  a,
  s,
  s2
} from "./chunk-WYIDUUN2.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/portal/portalDefault.js
var t2;
function n2(e3) {
  return t2 && !t2.destroyed || (t2 = e3()), t2;
}

// ../../../node_modules/@arcgis/core/portal/PortalQueryParams.js
var u4;
var m2 = new n({
  avgRating: "avg-rating",
  numRatings: "num-ratings",
  numComments: "num-comments",
  numViews: "num-views"
});
var p = u4 = class extends S {
  constructor(t3) {
    super(t3), this.categories = null, this.disableExtraQuery = false, this.extent = null, this.filter = null, this.num = 10, this.query = null, this.sortField = null, this.start = 1;
  }
  get sortOrder() {
    return this._get("sortOrder") || "asc";
  }
  set sortOrder(t3) {
    "asc" !== t3 && "desc" !== t3 || this._set("sortOrder", t3);
  }
  clone() {
    return new u4({
      categories: this.categories ? a(this.categories) : null,
      disableExtraQuery: this.disableExtraQuery,
      extent: this.extent ? this.extent.clone() : null,
      filter: this.filter,
      num: this.num,
      query: this.query,
      sortField: this.sortField,
      sortOrder: this.sortOrder,
      start: this.start
    });
  }
  toRequestOptions(t3, r) {
    let e3 = [];
    this.categories && (e3 = this.categories.map((t4) => Array.isArray(t4) ? JSON.stringify(t4) : t4));
    let s4 = "";
    if (this.extent) {
      const t4 = g(this.extent, f2.WGS84);
      null != t4 && (s4 = `${t4.xmin},${t4.ymin},${t4.xmax},${t4.ymax}`);
    }
    let o2 = this.query;
    !this.disableExtraQuery && t3.extraQuery && (o2 = "(" + o2 + ")" + t3.extraQuery);
    const i2 = {
      categories: e3,
      bbox: s4,
      q: o2,
      filter: this.filter,
      num: this.num,
      sortField: null,
      sortOrder: null,
      start: this.start
    };
    return this.sortField && (i2.sortField = this.sortField.split(",").map((t4) => m2.toJSON(t4.trim())).join(","), i2.sortOrder = this.sortOrder), {
      query: __spreadValues(__spreadValues({}, r), i2)
    };
  }
};
e([y()], p.prototype, "categories", void 0), e([y()], p.prototype, "disableExtraQuery", void 0), e([y({
  type: w
})], p.prototype, "extent", void 0), e([y()], p.prototype, "filter", void 0), e([y()], p.prototype, "num", void 0), e([y()], p.prototype, "query", void 0), e([y()], p.prototype, "sortField", void 0), e([y()], p.prototype, "sortOrder", null), e([y()], p.prototype, "start", void 0), p = u4 = e([a3("esri.portal.PortalQueryParams")], p);
var c4 = p;

// ../../../node_modules/@arcgis/core/portal/PortalGroup.js
var l2;
var u5 = l2 = class extends f {
  constructor(t3) {
    super(t3), this.access = null, this.created = null, this.description = null, this.id = null, this.isInvitationOnly = false, this.modified = null, this.owner = null, this.portal = null, this.snippet = null, this.sortField = null, this.sortOrder = null, this.sourceJSON = null, this.tags = null, this.title = null;
  }
  get thumbnailUrl() {
    const t3 = this.url, r = this.thumbnail;
    return t3 && r && this.portal ? this.portal?.normalizeUrl(`${t3}/info/${r}?f=json`) : null;
  }
  get url() {
    const t3 = this.portal?.restUrl;
    return t3 ? t3 + "/community/groups/" + this.id : null;
  }
  fetchCategorySchema(t3) {
    return this.portal.request(this.url + "/categorySchema", t3).then((r) => {
      const e3 = r.categorySchema || [];
      return e3.some((t4) => "contentCategorySetsGroupQuery.LivingAtlas" === t4.source) ? this._fetchCategorySchemaSet("LivingAtlas", t3) : e3;
    });
  }
  fetchMembers(t3) {
    return this.portal.request(this.url + "/users", t3);
  }
  getThumbnailUrl(t3) {
    let r = this.thumbnailUrl;
    return r && t3 && (r += `&w=${t3}`), r;
  }
  toJSON() {
    throw new s2("internal:not-yet-implemented", "PortalGroup.toJSON is not yet implemented");
  }
  static fromJSON(t3) {
    if (!t3) return null;
    if (t3.declaredClass) throw new Error("JSON object is already hydrated");
    const r = new l2({
      sourceJSON: t3
    });
    return r.read(t3), r;
  }
  queryItems(t3, r) {
    let e3 = b(c4, t3);
    const o2 = this.portal;
    return parseFloat(o2.currentVersion) > 5 ? (e3 = e3 || new c4(), o2.queryPortal(`/content/groups/${this.id}/search`, e3, "PortalItem", r)) : (e3 = e3 ? e3.clone() : new c4(), e3.query = "group:" + this.id + (e3.query ? " " + e3.query : ""), o2.queryItems(e3, r));
  }
  _fetchCategorySchemaSet(t3, e3) {
    const o2 = this.portal;
    return o2.fetchSelf(o2.authMode, true, e3).then((t4) => {
      const s4 = t4.contentCategorySetsGroupQuery;
      if (s4) {
        const t5 = new c4({
          disableExtraQuery: true,
          num: 1,
          query: s4
        });
        return o2.queryGroups(t5, e3);
      }
      throw new s2("portal-group:fetchCategorySchema", "contentCategorySetsGroupQuery value not found");
    }).then((o3) => {
      if (o3.total) {
        const r = o3.results[0], s4 = new c4({
          num: 1,
          query: `typekeywords:"${t3}"`
        });
        return r.queryItems(s4, e3);
      }
      throw new s2("portal-group:fetchCategorySchema", "contentCategorySetsGroupQuery group not found");
    }).then((t4) => {
      if (t4.total) {
        return t4.results[0].fetchData("json", e3).then((t5) => {
          const r = t5?.categorySchema;
          return r?.length ? r : [];
        });
      }
      return [];
    });
  }
};
e([y()], u5.prototype, "access", void 0), e([y({
  type: Date
})], u5.prototype, "created", void 0), e([y()], u5.prototype, "description", void 0), e([y()], u5.prototype, "id", void 0), e([y()], u5.prototype, "isInvitationOnly", void 0), e([y({
  type: Date
})], u5.prototype, "modified", void 0), e([y()], u5.prototype, "owner", void 0), e([y()], u5.prototype, "portal", void 0), e([y()], u5.prototype, "snippet", void 0), e([y()], u5.prototype, "sortField", void 0), e([y()], u5.prototype, "sortOrder", void 0), e([y()], u5.prototype, "sourceJSON", void 0), e([y()], u5.prototype, "tags", void 0), e([y()], u5.prototype, "thumbnail", void 0), e([y({
  readOnly: true
})], u5.prototype, "thumbnailUrl", null), e([y()], u5.prototype, "title", void 0), e([y({
  readOnly: true
})], u5.prototype, "url", null), u5 = l2 = e([a3("esri.portal.PortalGroup")], u5);
var p2 = u5;

// ../../../node_modules/@arcgis/core/portal/PortalQueryResult.js
var e2 = class extends S {
  constructor(r) {
    super(r), this.nextQueryParams = null, this.queryParams = null, this.results = null, this.total = null;
  }
};
e([y()], e2.prototype, "nextQueryParams", void 0), e([y()], e2.prototype, "queryParams", void 0), e([y()], e2.prototype, "results", void 0), e([y()], e2.prototype, "total", void 0), e2 = e([a3("esri.portal.PortalQueryResult")], e2);
var p3 = e2;

// ../../../node_modules/@arcgis/core/portal/PortalFolder.js
var p4 = class extends f {
  constructor(t3) {
    super(t3), this.created = null, this.id = null, this.portal = null, this.title = null, this.username = null;
  }
  get url() {
    const t3 = this.portal?.restUrl;
    return t3 ? `${t3}/content/users/${this.username}/${this.id}` : null;
  }
  toJSON() {
    throw new s2("internal:not-yet-implemented", "PortalFolder.toJSON is not yet implemented");
  }
};
e([y({
  type: Date
})], p4.prototype, "created", void 0), e([y()], p4.prototype, "id", void 0), e([y()], p4.prototype, "portal", void 0), e([y()], p4.prototype, "title", void 0), e([y({
  readOnly: true
})], p4.prototype, "url", null), e([y()], p4.prototype, "username", void 0), p4 = e([a3("esri.portal.PortalFolder")], p4);
var l3 = p4;

// ../../../node_modules/@arcgis/core/portal/PortalUser.js
var i;
var u6 = i = class extends f {
  constructor(t3) {
    super(t3), this.access = null, this.created = null, this.culture = null, this.description = null, this.email = null, this.fullName = null, this.modified = null, this.orgId = null, this.portal = null, this.preferredView = null, this.privileges = null, this.region = null, this.role = null, this.roleId = null, this.sourceJSON = null, this.units = null, this.username = null, this.userLicenseTypeId = null, this.userType = null;
  }
  get thumbnailUrl() {
    const t3 = this.url, e3 = this.thumbnail;
    return t3 && e3 ? this.portal.normalizeUrl(`${t3}/info/${e3}?f=json`) : null;
  }
  get userContentUrl() {
    const t3 = this.portal?.restUrl;
    return t3 ? `${t3}/content/users/${this.username}` : null;
  }
  get url() {
    const t3 = this.portal?.restUrl;
    return t3 ? `${t3}/community/users/${this.username}` : null;
  }
  addItem(t3) {
    const e3 = t3 && t3.item, r = t3?.data, o2 = t3?.folder, s4 = {
      method: "post"
    };
    e3 && (s4.query = e3.createPostQuery(), null != r && ("string" == typeof r ? s4.query.text = r : "object" == typeof r && (s4.query.text = JSON.stringify(r))));
    let l4 = this.userContentUrl;
    return o2 && (l4 += "/" + ("string" == typeof o2 ? o2 : o2.id)), this.portal.request(l4 + "/addItem", s4).then((t4) => (e3.id = t4.id, e3.portal = this.portal, e3.loaded ? e3.reload() : e3.load()));
  }
  deleteItem(t3, e3 = false) {
    return __async(this, null, function* () {
      let r = this.userContentUrl;
      t3.ownerFolder && (r += "/" + t3.ownerFolder);
      const o2 = e3 ? {
        permanentDelete: true
      } : {};
      yield this.portal.request(r + `/items/${t3.id}/delete`, {
        method: "post",
        query: o2
      }), t3.id = null, t3.portal = null;
    });
  }
  deleteItems(t3, r = false) {
    return __async(this, null, function* () {
      t3 = t3.concat();
      const o2 = this.userContentUrl + "/deleteItems", s4 = [], l4 = t3.map((t4) => t4.id);
      if (l4.length) {
        const n3 = {
          method: "post",
          query: {
            items: l4.join(","),
            permanentDelete: r
          }
        }, i2 = yield this.portal.request(o2, n3);
        for (const r2 of i2.results) {
          const o3 = t3.find((t4) => r2.itemId === t4.id), l5 = r2.success;
          let n4 = null;
          l5 ? (o3.id = null, o3.portal = null) : r2.error && (n4 = new s2("portal:delete-item-failed", r2.error.message, r2.error)), s4.push({
            item: o3,
            success: l5,
            error: n4
          });
        }
      }
      return s4;
    });
  }
  fetchFolders() {
    const t3 = {
      query: {
        num: 1
      }
    };
    return this.portal.request(this.userContentUrl ?? "", t3).then((t4) => {
      let e3;
      return e3 = t4 && t4.folders ? t4.folders.map((t5) => {
        const e4 = l3.fromJSON(t5);
        return e4.portal = this.portal, e4;
      }) : [], e3;
    });
  }
  fetchGroups() {
    return this.portal.request(this.url ?? "").then((t3) => {
      let e3;
      return e3 = t3 && t3.groups ? t3.groups.map((t4) => {
        const e4 = p2.fromJSON(t4);
        return e4.portal = this.portal, e4;
      }) : [], e3;
    });
  }
  fetchItems(t3) {
    return __async(this, null, function* () {
      t3 ??= {};
      let e3 = this.userContentUrl ?? "";
      t3.folder && (e3 += "/" + t3.folder.id);
      const {
        default: r
      } = yield import("./PortalItem-6ACWASGU.js"), o2 = {
        folders: false,
        inRecycleBin: !!t3.inRecycleBin || null,
        foldersContent: !(t3.folder || !t3.includeSubfolderItems) || null,
        num: t3.num || 10,
        start: t3.start || 1,
        sortField: t3.sortField || "created",
        sortOrder: t3.sortOrder || "asc"
      }, s4 = yield this.portal.request(e3, {
        query: o2
      });
      let l4;
      return s4?.items ? (l4 = s4.items.map((t4) => {
        const e4 = r.fromJSON(t4);
        return e4.portal = this.portal, e4;
      }), yield Promise.all(l4.map((t4) => t4.load())), {
        items: l4,
        nextStart: s4.nextStart,
        total: s4.total
      }) : {
        items: [],
        nextStart: -1,
        total: 0
      };
    });
  }
  fetchTags() {
    return this.portal.request(this.url + "/tags").then((t3) => t3.tags);
  }
  getThumbnailUrl(t3) {
    let e3 = this.thumbnailUrl;
    return e3 && t3 && (e3 += `&w=${t3}`), e3;
  }
  queryFavorites(t3) {
    return this.favGroupId ? (this._favGroup || (this._favGroup = new p2({
      id: this.favGroupId,
      portal: this.portal
    })), this._favGroup.queryItems(t3)) : Promise.reject(new s2("internal:unknown", "Unknown internal error", {
      internalError: "Unknown favGroupId"
    }));
  }
  restoreItem(t3, e3) {
    return __async(this, null, function* () {
      const r = this.userContentUrl, o2 = e3 ? {
        folderID: "string" == typeof e3 ? e3 : e3.id
      } : null;
      yield this.portal.request(r + `/items/${t3.id}/restore`, {
        method: "post",
        query: o2
      });
    });
  }
  toJSON() {
    throw new s2("internal:not-yet-implemented", "PortalUser.toJSON is not yet implemented");
  }
  static fromJSON(t3) {
    if (!t3) return null;
    if (t3.declaredClass) throw new Error("JSON object is already hydrated");
    const e3 = new i({
      sourceJSON: t3
    });
    return e3.read(t3), e3;
  }
};
e([y()], u6.prototype, "access", void 0), e([y({
  type: Date
})], u6.prototype, "created", void 0), e([y()], u6.prototype, "culture", void 0), e([y()], u6.prototype, "description", void 0), e([y()], u6.prototype, "email", void 0), e([y()], u6.prototype, "favGroupId", void 0), e([y()], u6.prototype, "fullName", void 0), e([y({
  type: Date
})], u6.prototype, "modified", void 0), e([y()], u6.prototype, "orgId", void 0), e([y()], u6.prototype, "portal", void 0), e([y()], u6.prototype, "preferredView", void 0), e([y()], u6.prototype, "privileges", void 0), e([y()], u6.prototype, "region", void 0), e([y()], u6.prototype, "role", void 0), e([y()], u6.prototype, "roleId", void 0), e([y()], u6.prototype, "sourceJSON", void 0), e([y()], u6.prototype, "thumbnail", void 0), e([y({
  readOnly: true
})], u6.prototype, "thumbnailUrl", null), e([y()], u6.prototype, "units", void 0), e([y({
  readOnly: true
})], u6.prototype, "userContentUrl", null), e([y({
  readOnly: true
})], u6.prototype, "url", null), e([y()], u6.prototype, "username", void 0), e([y()], u6.prototype, "userLicenseTypeId", void 0), e([y()], u6.prototype, "userType", void 0), u6 = i = e([a3("esri.portal.PortalUser")], u6);
var a4 = u6;

// ../../../node_modules/@arcgis/core/portal/Portal.js
var _;
var M;
var U2 = {
  PortalGroup: () => Promise.resolve({
    default: p2
  }),
  PortalItem: () => import("./PortalItem-6ACWASGU.js"),
  PortalUser: () => Promise.resolve({
    default: a4
  })
};
var b2 = _ = class extends u3(m) {
  constructor(e3) {
    super(e3), this._esriIdCredentialCreateHandle = null, this.access = null, this.allSSL = false, this.authMode = "auto", this.authorizedCrossOriginDomains = null, this.basemapGalleryGroupQuery = null, this.basemapGalleryGroupQuery3D = null, this.bingKey = null, this.canListApps = false, this.canListData = false, this.canListPreProvisionedItems = false, this.canProvisionDirectPurchase = false, this.canSearchPublic = true, this.canShareBingPublic = false, this.canSharePublic = false, this.canSignInArcGIS = false, this.canSignInIDP = false, this.colorSetsGroupQuery = null, this.commentsEnabled = false, this.created = null, this.culture = null, this.customBaseUrl = null, this.defaultBasemap = null, this.defaultDevBasemap = null, this.defaultExtent = null, this.defaultVectorBasemap = null, this.description = null, this.devBasemapGalleryGroupQuery = null, this.eueiEnabled = null, this.featuredGroups = null, this.featuredItemsGroupQuery = null, this.galleryTemplatesGroupQuery = null, this.layoutGroupQuery = null, this.livingAtlasGroupQuery = null, this.hasCategorySchema = false, this.helperServices = null, this.homePageFeaturedContent = null, this.homePageFeaturedContentCount = null, this.httpPort = null, this.httpsPort = null, this.id = null, this.ipCntryCode = null, this.isPortal = false, this.isReadOnly = false, this.layerTemplatesGroupQuery = null, this.maxTokenExpirationMinutes = null, this.modified = null, this.name = null, this.portalHostname = null, this.portalMode = null, this.portalProperties = null, this.region = null, this.recycleBinEnabled = false, this.rotatorPanels = null, this.showHomePageDescription = false, this.sourceJSON = null, this.supportsHostedServices = false, this.symbolSetsGroupQuery = null, this.templatesGroupQuery = null, this.units = null, this.url = s.portalUrl, this.urlKey = null, this.user = null, this.use3dBasemaps = true, this.useStandardizedQuery = false, this.useVectorBasemaps = false, this.vectorBasemapGalleryGroupQuery = null;
  }
  normalizeCtorArgs(e3) {
    return "string" == typeof e3 ? {
      url: e3
    } : e3;
  }
  destroy() {
    Q.unregister(this), this.defaultBasemap = u(this.defaultBasemap), this.defaultDevBasemap = u(this.defaultDevBasemap), this.defaultVectorBasemap = u(this.defaultVectorBasemap), this._esriIdCredentialCreateHandle = l(this._esriIdCredentialCreateHandle);
  }
  readAuthorizedCrossOriginDomains(e3) {
    if (e3) for (const r of e3) s.request.trustedServers.includes(r) || s.request.trustedServers.push(r);
    return e3;
  }
  readDefaultBasemap(e3) {
    return this._readBasemap(e3);
  }
  readDefaultDevBasemap(e3) {
    return this._readBasemap(e3);
  }
  readDefaultVectorBasemap(e3) {
    return this._readBasemap(e3);
  }
  get extraQuery() {
    const e3 = this.user?.orgId, t3 = !e3 || this.canSearchPublic;
    return this.id && !t3 ? ` AND orgid:${this.id}` : null;
  }
  get isOrganization() {
    return !!this.access;
  }
  get itemPageUrl() {
    return this.url ? `${this.url}/home/item.html` : null;
  }
  get restUrl() {
    let e3 = this.url;
    if (e3) {
      const t3 = e3.indexOf("/sharing");
      e3 = t3 > 0 ? e3.substring(0, t3) : this.url.replace(/\/+$/, ""), e3 += "/sharing/rest";
    }
    return e3;
  }
  get thumbnailUrl() {
    const e3 = this.restUrl, t3 = this.thumbnail;
    return e3 && t3 ? this._normalizeSSL(e3 + "/portals/self/resources/" + t3) : null;
  }
  readUrlKey(e3) {
    return e3 ? e3.toLowerCase() : e3;
  }
  readUser(e3) {
    let t3 = null;
    return e3 && (t3 = a4.fromJSON(e3), t3.portal = this), t3;
  }
  load(e3) {
    const t3 = import("./Basemap-RUIHGP4H.js").then(({
      default: t4
    }) => {
      s3(e3), M = t4;
    }).then(() => this.sourceJSON ? this.sourceJSON : this.fetchSelf(this.authMode, false, e3)).then((e4) => {
      if (t) {
        const e5 = t;
        this.credential = e5.findCredential(this.restUrl), this.credential || this.authMode !== _.AUTH_MODE_AUTO && this.authMode !== _.AUTH_MODE_NO_PROMPT || (this._esriIdCredentialCreateHandle?.remove(), this._esriIdCredentialCreateHandle = e5.on("credential-create", w2(new WeakRef(this))), Q.register(this, this._esriIdCredentialCreateHandle, this));
      }
      this.sourceJSON = e4, this.read(e4);
    });
    return this.addResolvingPromise(t3), Promise.resolve(this);
  }
  createElevationLayers() {
    return __async(this, null, function* () {
      yield this.load();
      const e3 = this._getHelperService("defaultElevationLayers"), t3 = (yield import("./ElevationLayer-JXBEA4LA.js")).default;
      return e3 ? e3.map((e4) => new t3({
        id: e4.id,
        url: e4.url
      })) : [];
    });
  }
  fetchBasemaps(e3, t3) {
    return __async(this, null, function* () {
      const r = yield this._fetchBasemaps(e3, t3);
      if (true === t3?.include3d && false !== this.use3dBasemaps) {
        const o2 = yield this._fetchBasemaps3D(e3, t3);
        r.unshift(...o2);
      }
      return r;
    });
  }
  fetchCategorySchema(e3) {
    return this.hasCategorySchema ? this.request(this.restUrl + "/portals/self/categorySchema", e3).then((e4) => e4.categorySchema) : c(e3) ? Promise.reject(u2()) : Promise.resolve([]);
  }
  fetchFeaturedGroups(e3) {
    const t3 = this.featuredGroups, r = new c4({
      num: 100,
      sortField: "title"
    });
    if (t3?.length) {
      const o2 = [];
      for (const e4 of t3) o2.push(`(title:"${e4.title}" AND owner:${e4.owner})`);
      return r.query = o2.join(" OR "), this.queryGroups(r, e3).then((e4) => e4.results);
    }
    return c(e3) ? Promise.reject(u2()) : Promise.resolve([]);
  }
  fetchRegions(e3) {
    const t3 = this.user?.culture || this.culture || c2();
    return this.request(this.restUrl + "/portals/regions", __spreadProps(__spreadValues({}, e3), {
      query: {
        culture: t3
      }
    }));
  }
  fetchSettings(e3) {
    const t3 = this.user?.culture || this.culture || c2();
    return this.request(this.restUrl + "/portals/self/settings", __spreadProps(__spreadValues({}, e3), {
      query: {
        culture: t3
      }
    }));
  }
  static getDefault() {
    return n2(() => new _());
  }
  queryGroups(e3, t3) {
    return this.queryPortal("/community/groups", e3, "PortalGroup", t3);
  }
  queryItems(e3, t3) {
    return this.queryPortal("/search", e3, "PortalItem", t3);
  }
  queryUsers(e3, t3) {
    return e3.sortField || (e3.sortField = "username"), this.queryPortal("/community/users", e3, "PortalUser", t3);
  }
  fetchSelf(e3 = this.authMode, t3 = false, r) {
    const o2 = this.restUrl + "/portals/self", s4 = __spreadValues({
      authMode: e3,
      query: {
        culture: c2().toLowerCase()
      },
      withCredentials: true
    }, r);
    return "auto" === s4.authMode && (s4.authMode = "no-prompt"), t3 && (s4.query.default = true), this.request(o2, s4);
  }
  queryPortal(e3, t3, r, o2) {
    const s4 = b(c4, t3), i2 = (t4) => this.request(this.restUrl + e3, __spreadValues(__spreadValues({}, s4.toRequestOptions(this)), o2)).then((e4) => {
      const r2 = s4.clone();
      return r2.start = e4.nextStart, new p3({
        nextQueryParams: r2,
        queryParams: s4,
        total: e4.total,
        results: _._resultsToTypedArray(t4, {
          portal: this
        }, e4, o2)
      });
    }).then((e4) => Promise.all(e4.results.map((t5) => "function" == typeof t5.when ? t5.when() : e4)).then(() => e4, (t5) => (a2(t5), e4)));
    return r && U2[r] ? U2[r]().then(({
      default: e4
    }) => (s3(o2), i2(e4))) : i2();
  }
  signIn() {
    if (this.authMode === _.AUTH_MODE_ANONYMOUS || this.authMode === _.AUTH_MODE_NO_PROMPT && !t) return Promise.reject(new s2("portal:invalid-auth-mode", `Current "authMode"' is "${this.authMode}"`));
    if ("failed" === this.loadStatus) return Promise.reject(this.loadError);
    const e3 = (e4) => Promise.resolve().then(() => "not-loaded" === this.loadStatus ? (e4 || (this.authMode = "immediate"), this.load().then(() => null)) : "loading" === this.loadStatus ? this.load().then(() => this.credential ? null : (this.credential = e4, this.fetchSelf("immediate"))) : this.user && this.credential === e4 ? null : (this.credential = e4, this.fetchSelf("immediate"))).then((e5) => {
      e5 && (this.sourceJSON = e5, this.read(e5));
    });
    return t ? t.getCredential(this.restUrl, {
      prompt: this.authMode !== _.AUTH_MODE_NO_PROMPT
    }).then((t3) => e3(t3)) : e3(this.credential);
  }
  normalizeUrl(e3) {
    const t3 = this.credential?.token;
    return this._normalizeSSL(t3 ? e3 + (e3.includes("?") ? "&" : "?") + "token=" + t3 : e3);
  }
  requestToTypedArray(e3, t3, r) {
    return this.request(e3, t3).then((e4) => {
      const t4 = _._resultsToTypedArray(r, {
        portal: this
      }, e4);
      return Promise.all(t4.map((t5) => "function" == typeof t5.when ? t5.when() : e4)).then(() => t4, () => t4);
    });
  }
  request(e3, t3 = {}) {
    const r = __spreadValues({
      f: "json"
    }, t3.query), {
      authMode: s4 = this.authMode === _.AUTH_MODE_ANONYMOUS || this.authMode === _.AUTH_MODE_NO_PROMPT ? this.authMode : "auto",
      body: i2 = null,
      cacheBust: a5 = false,
      method: l4 = "auto",
      responseType: u7 = "json",
      signal: n3
    } = t3, p5 = {
      authMode: s4,
      body: i2,
      cacheBust: a5,
      method: l4,
      query: r,
      responseType: u7,
      timeout: 0,
      signal: n3
    };
    return t3.withCredentials && (p5.withCredentials = true), U(this._normalizeSSL(e3), p5).then((e4) => e4.data);
  }
  toJSON() {
    throw new s2("internal:not-yet-implemented", "Portal.toJSON is not yet implemented");
  }
  static fromJSON(e3) {
    if (!e3) return null;
    if (e3.declaredClass) throw new Error("JSON object is already hydrated");
    return new _({
      sourceJSON: e3
    });
  }
  _getHelperService(e3) {
    const t3 = this.helperServices && this.helperServices[e3];
    if (!t3) throw new s2("portal:service-not-found", `The \`helperServices\` do not include an entry named "${e3}"`);
    return t3;
  }
  _fetchBasemaps(e3, r) {
    return __async(this, null, function* () {
      const o2 = new c4();
      o2.query = e3 || (s.apiKey && c3(this.url) ? this.devBasemapGalleryGroupQuery : this.useVectorBasemaps ? this.vectorBasemapGalleryGroupQuery : this.basemapGalleryGroupQuery), o2.disableExtraQuery = true;
      const s4 = yield this.queryGroups(o2, r);
      if (!s4.total) return [];
      const i2 = s4.results[0];
      o2.num = 100, o2.query = 'type:"Web Map" -type:"Web Application"', o2.sortField = i2.sortField || "name", o2.sortOrder = i2.sortOrder || "desc";
      const a5 = yield i2.queryItems(o2, r);
      if (!a5.total) return [];
      return a5.results.filter((e4) => "Web Map" === e4.type).map((e4) => new M({
        portalItem: e4
      }));
    });
  }
  _fetchBasemaps3D(e3, t3) {
    return __async(this, null, function* () {
      const r = e3 || this.basemapGalleryGroupQuery3D;
      if (!r) return [];
      const o2 = new c4({
        query: r,
        disableExtraQuery: true
      }), s4 = yield this.queryGroups(o2, t3);
      if (!s4.total) return [];
      const i2 = s4.results[0];
      o2.num = 100, o2.query = 'type:"Web Scene"', o2.sortField = i2.sortField || "name", o2.sortOrder = i2.sortOrder || "desc";
      const a5 = yield i2.queryItems(o2, t3);
      if (!a5.total) return [];
      return a5.results.filter((e4) => "Web Scene" === e4.type).map((e4) => new M({
        portalItem: e4
      }));
    });
  }
  _normalizeSSL(e3) {
    return e3.replace(/^http:/i, "https:").replace(":7080", ":7443");
  }
  _readBasemap(e3) {
    if (e3) {
      const t3 = M.fromJSON(e3);
      return t3.portalItem = {
        portal: this
      }, t3;
    }
    return null;
  }
  static _resultsToTypedArray(e3, t3, r, o2) {
    let s4;
    if (r) {
      const i2 = null != o2 ? o2.signal : null;
      s4 = r.listings || r.notifications || r.userInvitations || r.tags || r.items || r.groups || r.comments || r.provisions || r.results || r.relatedItems || r, (e3 || t3) && (s4 = s4.map((r2) => {
        const o3 = Object.assign(e3 ? e3.fromJSON(r2) : r2, t3);
        return "function" == typeof o3.load && o3.load(i2), o3;
      }));
    } else s4 = [];
    return s4;
  }
};
b2.AUTH_MODE_ANONYMOUS = "anonymous", b2.AUTH_MODE_AUTO = "auto", b2.AUTH_MODE_IMMEDIATE = "immediate", b2.AUTH_MODE_NO_PROMPT = "no-prompt", e([y()], b2.prototype, "access", void 0), e([y()], b2.prototype, "allSSL", void 0), e([y()], b2.prototype, "authMode", void 0), e([y()], b2.prototype, "authorizedCrossOriginDomains", void 0), e([o("authorizedCrossOriginDomains")], b2.prototype, "readAuthorizedCrossOriginDomains", null), e([y()], b2.prototype, "basemapGalleryGroupQuery", void 0), e([y({
  json: {
    name: "3DBasemapGalleryGroupQuery"
  }
})], b2.prototype, "basemapGalleryGroupQuery3D", void 0), e([y()], b2.prototype, "bingKey", void 0), e([y()], b2.prototype, "canListApps", void 0), e([y()], b2.prototype, "canListData", void 0), e([y()], b2.prototype, "canListPreProvisionedItems", void 0), e([y()], b2.prototype, "canProvisionDirectPurchase", void 0), e([y()], b2.prototype, "canSearchPublic", void 0), e([y()], b2.prototype, "canShareBingPublic", void 0), e([y()], b2.prototype, "canSharePublic", void 0), e([y()], b2.prototype, "canSignInArcGIS", void 0), e([y()], b2.prototype, "canSignInIDP", void 0), e([y()], b2.prototype, "colorSetsGroupQuery", void 0), e([y()], b2.prototype, "commentsEnabled", void 0), e([y({
  type: Date
})], b2.prototype, "created", void 0), e([y()], b2.prototype, "credential", void 0), e([y()], b2.prototype, "culture", void 0), e([y()], b2.prototype, "currentVersion", void 0), e([y()], b2.prototype, "customBaseUrl", void 0), e([y()], b2.prototype, "defaultBasemap", void 0), e([o("defaultBasemap")], b2.prototype, "readDefaultBasemap", null), e([y()], b2.prototype, "defaultDevBasemap", void 0), e([o("defaultDevBasemap")], b2.prototype, "readDefaultDevBasemap", null), e([y({
  type: w
})], b2.prototype, "defaultExtent", void 0), e([y()], b2.prototype, "defaultVectorBasemap", void 0), e([o("defaultVectorBasemap")], b2.prototype, "readDefaultVectorBasemap", null), e([y()], b2.prototype, "description", void 0), e([y()], b2.prototype, "devBasemapGalleryGroupQuery", void 0), e([y()], b2.prototype, "eueiEnabled", void 0), e([y({
  readOnly: true
})], b2.prototype, "extraQuery", null), e([y()], b2.prototype, "featuredGroups", void 0), e([y()], b2.prototype, "featuredItemsGroupQuery", void 0), e([y()], b2.prototype, "galleryTemplatesGroupQuery", void 0), e([y()], b2.prototype, "layoutGroupQuery", void 0), e([y()], b2.prototype, "livingAtlasGroupQuery", void 0), e([y()], b2.prototype, "hasCategorySchema", void 0), e([y()], b2.prototype, "helpBase", void 0), e([y()], b2.prototype, "helperServices", void 0), e([y()], b2.prototype, "helpMap", void 0), e([y()], b2.prototype, "homePageFeaturedContent", void 0), e([y()], b2.prototype, "homePageFeaturedContentCount", void 0), e([y()], b2.prototype, "httpPort", void 0), e([y()], b2.prototype, "httpsPort", void 0), e([y()], b2.prototype, "id", void 0), e([y()], b2.prototype, "ipCntryCode", void 0), e([y({
  readOnly: true
})], b2.prototype, "isOrganization", null), e([y()], b2.prototype, "isPortal", void 0), e([y()], b2.prototype, "isReadOnly", void 0), e([y({
  readOnly: true
})], b2.prototype, "itemPageUrl", null), e([y()], b2.prototype, "layerTemplatesGroupQuery", void 0), e([y()], b2.prototype, "maxTokenExpirationMinutes", void 0), e([y({
  type: Date
})], b2.prototype, "modified", void 0), e([y()], b2.prototype, "name", void 0), e([y()], b2.prototype, "portalHostname", void 0), e([y()], b2.prototype, "portalMode", void 0), e([y()], b2.prototype, "portalProperties", void 0), e([y()], b2.prototype, "region", void 0), e([y()], b2.prototype, "recycleBinEnabled", void 0), e([y({
  readOnly: true
})], b2.prototype, "restUrl", null), e([y()], b2.prototype, "rotatorPanels", void 0), e([y()], b2.prototype, "showHomePageDescription", void 0), e([y()], b2.prototype, "sourceJSON", void 0), e([y()], b2.prototype, "staticImagesUrl", void 0), e([y({
  json: {
    name: "2DStylesGroupQuery"
  }
})], b2.prototype, "stylesGroupQuery2d", void 0), e([y({
  json: {
    name: "stylesGroupQuery"
  }
})], b2.prototype, "stylesGroupQuery3d", void 0), e([y()], b2.prototype, "supportsHostedServices", void 0), e([y()], b2.prototype, "symbolSetsGroupQuery", void 0), e([y()], b2.prototype, "templatesGroupQuery", void 0), e([y()], b2.prototype, "thumbnail", void 0), e([y({
  readOnly: true
})], b2.prototype, "thumbnailUrl", null), e([y()], b2.prototype, "units", void 0), e([y()], b2.prototype, "url", void 0), e([y()], b2.prototype, "urlKey", void 0), e([o("urlKey")], b2.prototype, "readUrlKey", null), e([y()], b2.prototype, "user", void 0), e([o("user")], b2.prototype, "readUser", null), e([y()], b2.prototype, "use3dBasemaps", void 0), e([y()], b2.prototype, "useStandardizedQuery", void 0), e([y()], b2.prototype, "useVectorBasemaps", void 0), e([y()], b2.prototype, "vectorBasemapGalleryGroupQuery", void 0), b2 = _ = e([a3("esri.portal.Portal")], b2);
var C = b2;
var Q = new FinalizationRegistry((e3) => {
  e3.remove();
});
function w2(e3) {
  const t3 = t;
  return () => {
    const r = e3.deref();
    r && t3.findCredential(r.restUrl) && r.signIn().catch(() => {
    });
  };
}

export {
  c4 as c,
  a4 as a,
  C
};
//# sourceMappingURL=chunk-7XMEZQ34.js.map
