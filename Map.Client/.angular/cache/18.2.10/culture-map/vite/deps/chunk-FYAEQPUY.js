import {
  C
} from "./chunk-7XMEZQ34.js";
import {
  m
} from "./chunk-BDM2D6IC.js";
import {
  R
} from "./chunk-U2ZVAEKG.js";
import {
  w
} from "./chunk-NYQ5CYNR.js";
import {
  o
} from "./chunk-NQOJNTB3.js";
import {
  s as s2
} from "./chunk-NKCPFCP3.js";
import {
  n as n2
} from "./chunk-PRREDSOB.js";
import {
  G,
  Y,
  _,
  tt
} from "./chunk-SYATLP3H.js";
import {
  u2 as u
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
  a3 as a2,
  g2 as g
} from "./chunk-DDYVXG4F.js";
import {
  a,
  l,
  n2 as n,
  s2 as s
} from "./chunk-WYIDUUN2.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/portal/PortalItemResource.js
var c = class extends S {
  constructor(t) {
    super(t), this.portalItem = null;
  }
  normalizeCtorArgs(t) {
    return t?.portalItem && t.path ? __spreadProps(__spreadValues({}, t), {
      path: n3(t.path, t.portalItem)
    }) : t;
  }
  set path(t) {
    null != t && Y(t) ? n.getLogger(this).error("portalitemresource:invalid-path", "A portal item resource path must be relative") : this._set("path", t);
  }
  _castPath(t) {
    return n3(t, this.portalItem);
  }
  get url() {
    return this.portalItem && this.path ? `${this.portalItem.itemUrl}/resources/${this.path}` : null;
  }
  get cdnUrl() {
    return this.portalItem && this.path ? `${this.portalItem.itemCdnUrl}/resources/${this.path}` : null;
  }
  get itemRelativeUrl() {
    return this.portalItem && this.path ? `./resources/${this.path}` : null;
  }
  fetch(t = "json", r) {
    const o2 = this.cdnUrl;
    if (null == o2) throw new s("portal-item-resource:fetch", "Portal item resource does not refer to a valid item or path");
    return this.portalItem.portal.request(o2, {
      responseType: t,
      query: {
        token: this.portalItem.apiKey
      },
      signal: r?.signal
    });
  }
  update(t, r) {
    return __async(this, null, function* () {
      const {
        addOrUpdateResources: e3
      } = yield import("./resourceUtils-B3JM3IPT.js");
      return yield e3(this.portalItem, [{
        resource: this,
        content: t,
        compress: r?.compress,
        access: r?.access
      }], "update", r), this;
    });
  }
  hasPath() {
    return null != this.path;
  }
};
function n3(t, r) {
  return null == t ? t : (t = t.replace(/^\/+/, ""), null != r && Y(t) && (t = G(t, r.itemUrl)), t?.replace(/^\/+/, "").replace(/^(\.\/)?resources\//, ""));
}
e([y()], c.prototype, "portalItem", void 0), e([y({
  type: String,
  value: null
})], c.prototype, "path", null), e([s2("path")], c.prototype, "_castPath", null), e([y({
  type: String,
  readOnly: true
})], c.prototype, "url", null), e([y({
  type: String,
  readOnly: true
})], c.prototype, "cdnUrl", null), e([y({
  type: String,
  readOnly: true
})], c.prototype, "itemRelativeUrl", null), c = e([a2("esri.portal.PortalItemResource")], c);
var u2 = c;

// ../../../node_modules/@arcgis/core/portal/PortalRating.js
var e2 = class extends S {
  constructor(r) {
    super(r), this.created = null, this.rating = null;
  }
};
e([y()], e2.prototype, "created", void 0), e([y()], e2.prototype, "rating", void 0), e2 = e([a2("esri.portal.PortalRating")], e2);
var c2 = e2;

// ../../../node_modules/@arcgis/core/portal/PortalItem.js
var v;
var f = /* @__PURE__ */ new Set(["3DTiles Service", "CSV", "Feature Collection", "Feature Service", "Feed", "GeoJson", "Group Layer", "Image Service", "KML", "Map Service", "Media Layer", "Scene Service", "Stream Service", "Vector Tile Service", "WFS", "WMS", "WMTS"]);
var b = /* @__PURE__ */ new Set(["KML", "GeoJson", "CSV"]);
var k = v = class extends u(m) {
  static from(e3) {
    return g(v, e3);
  }
  constructor(e3) {
    super(e3), this.access = null, this.accessInformation = null, this.apiKey = null, this.applicationProxies = null, this.avgRating = null, this.categories = null, this.created = null, this.culture = null, this.description = null, this.extent = null, this.groupCategories = null, this.id = null, this.isOrgItem = false, this.itemControl = null, this.licenseInfo = null, this.modified = null, this.name = null, this.numComments = null, this.numRatings = null, this.numViews = null, this.owner = null, this.ownerFolder = null, this.portal = null, this.screenshots = null, this.size = null, this.snippet = null, this.sourceJSON = null, this.sourceUrl = null, this.spatialReference = null, this.tags = null, this.title = null, this.type = null, this.typeKeywords = null, this.url = null;
  }
  destroy() {
    this.portal = null;
  }
  get displayName() {
    const e3 = this.type, t = this.typeKeywords || [];
    let i = e3;
    return "Feature Service" === e3 || "Feature Collection" === e3 ? i = t.includes("Table") ? "Table" : t.includes("Route Layer") ? "Route Layer" : t.includes("Markup") ? "Markup" : "Feature Layer" : "Image Service" === e3 ? i = t.includes("Elevation 3D Layer") ? "Elevation Layer" : t.includes("Tiled Imagery") ? "Tiled Imagery Layer" : "Imagery Layer" : "Scene Service" === e3 ? i = "Scene Layer" : "Video Service" === e3 ? i = "Video Layer" : "Scene Package" === e3 ? i = "Scene Layer Package" : "Stream Service" === e3 ? i = "Feature Layer" : "Geoprocessing Service" === e3 ? i = t.includes("Web Tool") ? "Tool" : "Geoprocessing Service" : "Geoenrichment Service" === e3 ? i = "GeoEnrichment Service" : "Geocoding Service" === e3 ? i = "Locator" : "Microsoft Powerpoint" === e3 ? i = "Microsoft PowerPoint" : "GeoJson" === e3 ? i = "GeoJSON" : "Globe Service" === e3 ? i = "Globe Layer" : "Vector Tile Service" === e3 ? i = "Tile Layer" : "netCDF" === e3 ? i = "NetCDF" : "Map Service" === e3 ? i = t.includes("Spatiotemporal") || !t.includes("Hosted Service") && !t.includes("Tiled") || t.includes("Relational") ? "Map Image Layer" : "Tile Layer" : e3?.toLowerCase().includes("add in") ? i = e3.replaceAll(/(add in)/gi, "Add-In") : "datastore catalog service" === e3 ? i = "Big Data File Share" : "Compact Tile Package" === e3 ? i = "Tile Package (tpkx)" : "Raster function template" === e3 ? i = "Raster Function Template" : "OGCFeatureServer" === e3 ? i = "OGC Feature Layer" : "web mapping application" === e3 && t.includes("configurableApp") ? i = "Instant App" : "Insights Page" === e3 ? i = "Insights Report" : "Excalibur Imagery Project" === e3 ? i = "Excalibur Project" : "3DTiles Service" === e3 ? i = "3D tiles layer" : "3DTiles Package" === e3 && (i = "3D tiles package"), i;
  }
  readExtent(e3) {
    return e3 && e3.length ? new w(e3[0][0], e3[0][1], e3[1][0], e3[1][1]) : null;
  }
  get iconUrl() {
    const e3 = this.type?.toLowerCase() || "", i = this.typeKeywords || [], r = "esri/images/portal/", o2 = "16";
    let s3, a3 = false, n4 = false, l2 = false, p = false, c3 = false, d = false, u3 = false, m2 = false;
    return e3.indexOf("service") > 0 || "feature collection" === e3 || "kml" === e3 || "wms" === e3 || "wmts" === e3 || "wfs" === e3 ? (a3 = i.includes("Hosted Service"), "feature service" === e3 || "feature collection" === e3 || "kml" === e3 || "wfs" === e3 ? (n4 = i.includes("Table"), l2 = i.includes("Route Layer"), p = i.includes("Markup"), c3 = i.includes("Spatiotemporal"), d = i.includes("UtilityNetwork"), s3 = c3 && n4 ? "spatiotemporaltable" : n4 ? "table" : l2 ? "routelayer" : p ? "markup" : c3 ? "spatiotemporal" : d ? "utilitynetwork" : a3 ? "featureshosted" : "features") : "map service" === e3 || "wms" === e3 || "wmts" === e3 ? (c3 = i.includes("Spatiotemporal"), u3 = i.includes("Relational"), s3 = c3 || u3 ? "mapimages" : a3 || i.includes("Tiled") || "wmts" === e3 ? "maptiles" : "mapimages") : s3 = "scene service" === e3 ? i.includes("Line") ? "sceneweblayerline" : i.includes("3DObject") ? "sceneweblayermultipatch" : i.includes("Point") ? "sceneweblayerpoint" : i.includes("IntegratedMesh") ? "sceneweblayermesh" : i.includes("PointCloud") ? "sceneweblayerpointcloud" : i.includes("Polygon") ? "sceneweblayerpolygon" : i.includes("Building") ? "sceneweblayerbuilding" : i.includes("Voxel") ? "sceneweblayervoxel" : "sceneweblayer" : "image service" === e3 ? i.includes("Elevation 3D Layer") ? "elevationlayer" : i.includes("Tiled Imagery") ? "tiledimagerylayer" : "imagery" : "stream service" === e3 ? "streamlayer" : "vector tile service" === e3 ? "vectortile" : "datastore catalog service" === e3 ? "datastorecollection" : "geocoding service" === e3 ? "geocodeservice" : "video service" === e3 ? i.includes("Live Stream") ? "livestreamvideolayer" : "videolayer" : "geoprocessing service" === e3 ? i.includes("Web Tool") ? "tool" : "layers" : "geodata service" === e3 ? "geodataservice" : "3dtiles service" === e3 ? i.includes("3DObject") ? "3dobjecttileslayer" : i.includes("IntegratedMesh") ? "integratedmeshtileslayer" : "3dtileslayer" : "layers") : "web map" === e3 || "cityengine web scene" === e3 ? s3 = "maps" : "web scene" === e3 ? s3 = i.includes("ViewingMode-Local") ? "webscenelocal" : "websceneglobal" : "web mapping application" === e3 && i.includes("configurableApp") ? s3 = "instantapps" : "web mapping application" === e3 || "mobile application" === e3 || "application" === e3 || "operation view" === e3 || "desktop application" === e3 ? s3 = "apps" : "map document" === e3 || "map package" === e3 || "published map" === e3 || "scene document" === e3 || "globe document" === e3 || "basemap package" === e3 || "mobile basemap package" === e3 || "mobile map package" === e3 || "project package" === e3 || "project template" === e3 || "pro map" === e3 || "layout" === e3 || "layer" === e3 && i.includes("ArcGIS Pro") || "explorer map" === e3 && i.indexOf("Explorer Document") ? s3 = "mapsgray" : "service definition" === e3 || "shapefile" === e3 || "cad drawing" === e3 || "geojson" === e3 || "netcdf" === e3 || "administrative report" === e3 ? s3 = "datafiles" : "360 vr experience" === e3 ? s3 = "360vr" : "explorer add in" === e3 || "desktop add in" === e3 || "windows viewer add in" === e3 || "windows viewer configuration" === e3 ? s3 = "appsgray" : "arcgis pro add in" === e3 || "arcgis pro configuration" === e3 ? s3 = "addindesktop" : "pdf" === e3 ? s3 = "pdf" : "microsoft word" === e3 ? s3 = "word" : "microsoft excel" === e3 ? s3 = "excel" : "microsoft powerpoint" === e3 ? s3 = "ppt" : "rule package" === e3 || "file geodatabase" === e3 || "sqlite geodatabase" === e3 || "csv collection" === e3 || "kml collection" === e3 || "windows mobile package" === e3 || "map template" === e3 || "desktop application template" === e3 || "gml" === e3 || "arcpad package" === e3 || "code sample" === e3 || "document link" === e3 || "earth configuration" === e3 || "operations dashboard add in" === e3 || "rules package" === e3 || "workflow manager package" === e3 || "explorer map" === e3 && i.includes("Explorer Mapping Application") || i.includes("Document") ? s3 = "datafilesgray" : "network analysis service" === e3 || "geoprocessing service" === e3 || "geodata service" === e3 || "geometry service" === e3 || "geoprocessing package" === e3 || "locator package" === e3 || "geoprocessing sample" === e3 || "workflow manager service" === e3 ? s3 = "toolsgray" : "layer" === e3 || "layer package" === e3 || "explorer layer" === e3 ? s3 = "layersgray" : "analysis model" === e3 ? s3 = "analysismodel" : "scene package" === e3 ? s3 = "scenepackage" : "3dtiles package" === e3 ? s3 = "3dtileslayerpackage" : "3dtiles service" === e3 ? s3 = "3dtileslayer" : "mobile scene package" === e3 ? s3 = "mobilescenepackage" : "tile package" === e3 || "compact tile package" === e3 ? s3 = "tilepackage" : "task file" === e3 ? s3 = "taskfile" : "report template" === e3 ? s3 = "report-template" : "statistical data collection" === e3 ? s3 = "statisticaldatacollection" : "insights workbook" === e3 ? s3 = "workbook" : "insights model" === e3 ? s3 = "insightsmodel" : "insights page" === e3 ? s3 = "insightspage" : "insights theme" === e3 ? s3 = "insightstheme" : "hub initiative" === e3 ? s3 = "hubinitiative" : "hub page" === e3 ? s3 = "hubpage" : "hub site application" === e3 ? s3 = "hubsite" : "hub event" === e3 ? s3 = "hubevent" : "hub project" === e3 ? s3 = "hubproject" : "relational database connection" === e3 ? s3 = "relationaldatabaseconnection" : "big data file share" === e3 ? s3 = "datastorecollection" : "image collection" === e3 ? s3 = "imagecollection" : "desktop style" === e3 ? s3 = "desktopstyle" : "style" === e3 ? s3 = i.includes("Dictionary") ? "dictionarystyle" : "style" : "dashboard" === e3 ? s3 = "dashboard" : "raster function template" === e3 ? s3 = "rasterprocessingtemplate" : "vector tile package" === e3 ? s3 = "vectortilepackage" : "ortho mapping project" === e3 ? s3 = "orthomappingproject" : "ortho mapping template" === e3 ? s3 = "orthomappingtemplate" : "solution" === e3 ? s3 = "solutions" : "geopackage" === e3 ? s3 = "geopackage" : "deep learning package" === e3 ? s3 = "deeplearningpackage" : "real time analytic" === e3 ? s3 = "realtimeanalytics" : "big data analytic" === e3 ? s3 = "bigdataanalytics" : "feed" === e3 ? s3 = "feed" : "excalibur imagery project" === e3 ? s3 = "excaliburimageryproject" : "notebook" === e3 ? s3 = "notebook" : "storymap" === e3 ? s3 = "storymap" : "survey123 add in" === e3 ? s3 = "survey123addin" : "mission" === e3 ? s3 = "mission" : "mission report" === e3 ? s3 = "missionreport" : "mission template" === e3 ? s3 = "missiontemplate" : "quickcapture project" === e3 ? s3 = "quickcaptureproject" : "pro report" === e3 ? s3 = "proreport" : "pro report template" === e3 ? s3 = "proreporttemplate" : "urban model" === e3 ? s3 = "urbanmodel" : "web experience" === e3 ? s3 = "experiencebuilder" : "web experience template" === e3 ? s3 = "webexperiencetemplate" : "experience builder widget" === e3 ? s3 = "experiencebuilderwidget" : "experience builder widget package" === e3 ? s3 = "experiencebuilderwidgetpackage" : "workflow" === e3 ? s3 = "workflow" : "kernel gateway connection" === e3 ? s3 = "kernelgatewayconnection" : "insights script" === e3 ? s3 = "insightsscript" : "hub initiative template" === e3 ? s3 = "hubinitiativetemplate" : "storymap theme" === e3 ? s3 = "storymaptheme" : "knowledge graph" === e3 ? s3 = "knowledgegraph" : "knowledge graph layer" === e3 ? s3 = "knowledgegraphlayer" : "knowledge studio project" === e3 ? s3 = "knowledgestudio" : "native application" === e3 ? s3 = "nativeapp" : "native application installer" === e3 ? s3 = "nativeappinstaller" : "web link chart" === e3 ? s3 = "linkchart" : "knowledge graph web investigation" === e3 ? s3 = "investigation" : "ogcfeatureserver" === e3 ? s3 = "features" : "pro project" === e3 ? s3 = "proproject" : "insights workbook package" === e3 ? s3 = "insightsworkbookpackage" : "apache parquet" === e3 ? s3 = "apacheparquet" : "notebook code snippet library" === e3 ? s3 = "notebookcodesnippets" : "suitability model" === e3 ? s3 = "suitabilitymodel" : "esri classifier definition" === e3 ? s3 = "classifierdefinition" : "esri classification schema" === e3 ? s3 = "classificationschema" : "insights data engineering workbook" === e3 ? s3 = "dataengineeringworkbook" : "insights data engineering model" === e3 ? s3 = "dataengineeringmodel" : "deep learning studio project" === e3 ? s3 = "deeplearningproject" : "discussion" === e3 ? s3 = "discussion" : "allsource project" === e3 ? s3 = "allsourceproject" : "api key" === e3 ? s3 = "apikey" : "data pipeline" === e3 ? s3 = "datapipelines" : "group layer" === e3 ? (m2 = i.includes("Map"), s3 = m2 ? "layergroup2d" : "layergroup") : s3 = "media layer" === e3 ? "onlinemedialayer" : "form" === e3 ? i.includes("Survey123") ? "survey" : "datafilesgray" : "csv" === e3 ? "csv" : "image" === e3 ? "image" : "maps", s3 ? n2(r + s3 + o2 + ".png") : null;
  }
  get isLayer() {
    return null != this.type && f.has(this.type);
  }
  get itemCdnUrl() {
    return R(this.itemUrl);
  }
  get itemPageUrl() {
    const e3 = this.portal?.itemPageUrl;
    return e3 && this.id ? `${e3}?id=${this.id}` : null;
  }
  get itemUrl() {
    const e3 = this.portal?.restUrl;
    return e3 && this.id ? `${e3}/content/items/${this.id}` : null;
  }
  get thumbnailUrl() {
    const e3 = this.itemUrl, t = this.thumbnail;
    return e3 && t ? this.portal?.normalizeUrl(`${e3}/info/${t}?f=json`) ?? null : null;
  }
  get userItemUrl() {
    const e3 = this.portal?.restUrl;
    if (!e3) return null;
    const t = this.owner || this.portal?.user?.username;
    if (!t) return null;
    return `${e3}/content/users/${this.ownerFolder ? `${t}/${this.ownerFolder}` : t}/items/${this.id}`;
  }
  load(e3) {
    const t = this.portal ?? (this.portal = C.getDefault()), i = t.load(e3).then(() => this.sourceJSON ? this.sourceJSON : this.id && this.itemUrl ? t.request(this.itemUrl, {
      signal: null != e3 ? e3.signal : null,
      query: {
        token: this.apiKey
      }
    }) : {}).then((e4) => {
      this.sourceJSON = e4, this.read(e4);
    });
    return this.addResolvingPromise(i), Promise.resolve(this);
  }
  addRating(e3) {
    return __async(this, null, function* () {
      const t = {
        method: "post",
        query: {}
      };
      return e3 instanceof c2 && (e3 = e3.rating), null == e3 || isNaN(e3) || "number" != typeof e3 || (t.query.rating = e3), this.portal ? (yield this.portal.request(this.itemUrl + "/addRating", t), new c2({
        rating: e3,
        created: /* @__PURE__ */ new Date()
      })) : null;
    });
  }
  clone() {
    const e3 = {
      access: this.access,
      accessInformation: this.accessInformation,
      applicationProxies: a(this.applicationProxies),
      avgRating: this.avgRating,
      categories: a(this.categories),
      created: a(this.created),
      culture: this.culture,
      description: this.description,
      extent: a(this.extent),
      groupCategories: a(this.groupCategories),
      id: this.id,
      itemControl: this.itemControl,
      licenseInfo: this.licenseInfo,
      modified: a(this.modified),
      name: this.name,
      numComments: this.numComments,
      numRatings: this.numRatings,
      numViews: this.numViews,
      owner: this.owner,
      ownerFolder: this.ownerFolder,
      portal: this.portal,
      screenshots: a(this.screenshots),
      size: this.size,
      snippet: this.snippet,
      sourceUrl: this.sourceUrl,
      spatialReference: this.spatialReference,
      tags: a(this.tags),
      thumbnail: this.thumbnail,
      title: this.title,
      type: this.type,
      typeKeywords: a(this.typeKeywords),
      url: this.url
    };
    this.loaded && (e3.loadStatus = "loaded");
    const t = new v({
      sourceJSON: this.sourceJSON
    }).set(e3);
    return t._set("isOrgItem", this.isOrgItem), t;
  }
  createPostQuery() {
    const e3 = this.toJSON();
    for (const i of ["tags", "typeKeywords", "categories"]) e3[i] = e3[i]?.join(", ");
    const {
      extent: t
    } = e3;
    return t && (e3.extent = JSON.stringify(t)), e3;
  }
  deleteRating() {
    return __async(this, null, function* () {
      yield this.portal.request(this.itemUrl + "/deleteRating", {
        method: "post"
      });
    });
  }
  fetchData(e3 = "json", t) {
    return this.portal.request(this.itemUrl + "/data", __spreadProps(__spreadValues({
      responseType: e3
    }, t), {
      query: {
        token: this.apiKey
      }
    }));
  }
  fetchRating(e3) {
    return __async(this, null, function* () {
      const t = yield this.portal.request(this.itemUrl + "/rating", __spreadValues({
        query: {
          token: this.apiKey
        }
      }, e3));
      return null != t.rating ? (t.created = new Date(t.created), new c2(t)) : null;
    });
  }
  fetchRelatedItems(e3, t) {
    return this.portal.requestToTypedArray(this.itemUrl + "/relatedItems", __spreadValues({
      query: __spreadProps(__spreadValues({}, e3), {
        token: this.apiKey
      })
    }, t), v);
  }
  getThumbnailUrl(e3) {
    let t = this.thumbnailUrl;
    return t && e3 && (t += `&w=${e3}`), t;
  }
  reload() {
    return this.portal.request(this.itemUrl ?? "", {
      cacheBust: true,
      query: {
        token: this.apiKey
      }
    }).then((e3) => (this.sourceJSON = e3, this.read(e3), this));
  }
  update(e3) {
    return this.id ? this.load().then(() => this.portal.signIn()).then(() => {
      const t = e3?.data, i = {
        method: "post"
      };
      i.query = this.createPostQuery();
      for (const e4 in i.query) null === i.query[e4] && (i.query[e4] = "");
      return i.query.clearEmptyFields = true, null != t && ("string" == typeof t ? i.query.text = t : "object" == typeof t && (i.query.text = JSON.stringify(t))), this.portal.request(`${this.userItemUrl}/update`, i).then(() => this.reload());
    }) : Promise.reject(new s("portal:item-does-not-exist", "The item does not exist yet and cannot be updated"));
  }
  copy(e3) {
    return __async(this, null, function* () {
      if (!this.id) throw new s("portal:item-does-not-exist", "The item does not exist yet");
      yield this.load();
      const {
        portal: t,
        itemUrl: r
      } = this;
      yield t.signIn();
      const {
        copyResources: o2,
        folder: s3,
        tags: a3,
        title: n4
      } = e3 || {}, l2 = {
        method: "post",
        query: {
          copyPrivateResources: "all" === o2,
          folder: "string" == typeof s3 ? s3 : s3?.id,
          includeResources: !!o2,
          tags: a3?.join(","),
          title: n4
        }
      }, {
        itemId: p
      } = yield t.request(`${r}/copy`, l2);
      return new v({
        id: p,
        portal: t
      });
    });
  }
  updateThumbnail(e3) {
    return this.id ? this.load().then(() => this.portal.signIn()).then(() => {
      const t = e3.thumbnail, i = e3.filename, r = {
        method: "post"
      };
      if ("string" == typeof t) tt(t) ? r.query = {
        data: t
      } : r.query = {
        url: _(t)
      }, null != i && (r.query.filename = i);
      else {
        const e4 = new FormData();
        null != i ? e4.append("file", t, i) : e4.append("file", t), r.body = e4;
      }
      return this.portal.request(`${this.userItemUrl}/updateThumbnail`, r).then(() => this.reload());
    }) : Promise.reject(new s("portal:item-does-not-exist", "The item does not exist yet and cannot be updated"));
  }
  fetchResources() {
    return __async(this, arguments, function* (e3 = {}, t) {
      const {
        fetchResources: i
      } = yield import("./resourceUtils-B3JM3IPT.js");
      return i(this, e3, t);
    });
  }
  addResource(e3, t, i) {
    return __async(this, null, function* () {
      const {
        addOrUpdateResources: r
      } = yield import("./resourceUtils-B3JM3IPT.js");
      return e3.portalItem = this, yield r(this, [{
        resource: e3,
        content: t,
        compress: i?.compress,
        access: i?.access
      }], "add", i), e3;
    });
  }
  removeResource(e3, t) {
    return __async(this, null, function* () {
      const {
        removeResource: r
      } = yield import("./resourceUtils-B3JM3IPT.js");
      if (e3.portalItem && e3.portalItem.itemUrl !== this.itemUrl) throw new s("removeresource:portal-item-mismatch", "The portal item associated with the provided resource does not match the item");
      return r(this, e3, t);
    });
  }
  removeAllResources(e3) {
    return __async(this, null, function* () {
      const {
        removeAllResources: t
      } = yield import("./resourceUtils-B3JM3IPT.js");
      return t(this, e3);
    });
  }
  resourceFromPath(e3) {
    return new u2({
      portalItem: this,
      path: e3
    });
  }
  toJSON() {
    const e3 = this.extent, t = {
      accessInformation: this.accessInformation,
      categories: a(this.categories),
      created: this.created?.getTime(),
      description: this.description,
      extent: e3 && [[e3.xmin, e3.ymin], [e3.xmax, e3.ymax]],
      id: this.id,
      isOrgItem: this.isOrgItem,
      licenseInfo: this.licenseInfo,
      modified: this.modified?.getTime(),
      name: this.name,
      owner: this.owner,
      ownerFolder: this.ownerFolder,
      snippet: this.snippet,
      sourceUrl: this.sourceUrl,
      spatialReference: this.spatialReference,
      tags: a(this.tags),
      thumbnail: this.thumbnail,
      title: this.title,
      type: this.type,
      typeKeywords: a(this.typeKeywords),
      url: this.url
    };
    return l(t);
  }
  static fromJSON(e3) {
    if (!e3) return null;
    if (e3.declaredClass) throw new Error("JSON object is already hydrated");
    return new v({
      sourceJSON: e3
    });
  }
  _getPostQuery() {
    const e3 = this.toJSON();
    for (const t in e3) "tags" === t && null !== e3[t] && (e3[t] = e3[t].join(", ")), "typeKeywords" === t && null !== e3[t] && (e3[t] = e3[t].join(", ")), "extent" === t && e3[t] && (e3[t] = JSON.stringify(e3[t]));
    return e3;
  }
};
e([y({
  type: ["private", "shared", "org", "public"]
})], k.prototype, "access", void 0), e([y()], k.prototype, "accessInformation", void 0), e([y({
  type: String
})], k.prototype, "apiKey", void 0), e([y({
  json: {
    read: {
      source: "appProxies"
    }
  }
})], k.prototype, "applicationProxies", void 0), e([y()], k.prototype, "avgRating", void 0), e([y()], k.prototype, "categories", void 0), e([y({
  type: Date
})], k.prototype, "created", void 0), e([y()], k.prototype, "culture", void 0), e([y()], k.prototype, "description", void 0), e([y({
  readOnly: true
})], k.prototype, "displayName", null), e([y({
  type: w
})], k.prototype, "extent", void 0), e([o("extent")], k.prototype, "readExtent", null), e([y()], k.prototype, "groupCategories", void 0), e([y({
  readOnly: true
})], k.prototype, "iconUrl", null), e([y()], k.prototype, "id", void 0), e([y({
  readOnly: true
})], k.prototype, "isLayer", null), e([y({
  type: Boolean,
  readOnly: true
})], k.prototype, "isOrgItem", void 0), e([y()], k.prototype, "itemControl", void 0), e([y({
  readOnly: true
})], k.prototype, "itemPageUrl", null), e([y({
  readOnly: true
})], k.prototype, "itemUrl", null), e([y()], k.prototype, "licenseInfo", void 0), e([y({
  type: Date
})], k.prototype, "modified", void 0), e([y()], k.prototype, "name", void 0), e([y()], k.prototype, "numComments", void 0), e([y()], k.prototype, "numRatings", void 0), e([y()], k.prototype, "numViews", void 0), e([y()], k.prototype, "owner", void 0), e([y()], k.prototype, "ownerFolder", void 0), e([y({
  type: C
})], k.prototype, "portal", void 0), e([y()], k.prototype, "screenshots", void 0), e([y()], k.prototype, "size", void 0), e([y()], k.prototype, "snippet", void 0), e([y()], k.prototype, "sourceJSON", void 0), e([y({
  type: String
})], k.prototype, "sourceUrl", void 0), e([y({
  type: String
})], k.prototype, "spatialReference", void 0), e([y()], k.prototype, "tags", void 0), e([y()], k.prototype, "thumbnail", void 0), e([y({
  readOnly: true
})], k.prototype, "thumbnailUrl", null), e([y()], k.prototype, "title", void 0), e([y()], k.prototype, "type", void 0), e([y()], k.prototype, "typeKeywords", void 0), e([y({
  type: String,
  json: {
    read(e3, t) {
      if (b.has(t.type)) {
        const t2 = this.portal?.restUrl;
        e3 ||= t2 && this.id ? `${t2}/content/items/${this.id}/data` : null;
      }
      return e3;
    }
  }
})], k.prototype, "url", void 0), e([y({
  readOnly: true
})], k.prototype, "userItemUrl", null), k = v = e([a2("esri.portal.PortalItem")], k);
var S2 = k;

export {
  S2 as S
};
//# sourceMappingURL=chunk-FYAEQPUY.js.map
