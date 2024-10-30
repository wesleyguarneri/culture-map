import {
  d,
  g
} from "./chunk-CRNUMTSV.js";
import {
  has
} from "./chunk-DXLOWWK7.js";

// ../../../node_modules/@arcgis/core/rest/support/jsonUtils.js
function n(n3, r2, u2) {
  return !!t(n3, r2, u2);
}
function r(n3, r2, u2) {
  return t(n3, r2, u2);
}
function t(n3, r2, t2) {
  return n3 && n3.hasOwnProperty(r2) ? n3[r2] : t2;
}

// ../../../node_modules/@arcgis/core/layers/support/serviceCapabilitiesUtils.js
var p = {
  name: "supportsName",
  size: "supportsSize",
  contentType: "supportsContentType",
  keywords: "supportsKeywords",
  exifInfo: "supportsExifInfo"
};
function o(t2) {
  const s = t2?.supportedSpatialAggregationStatistics?.map((t3) => t3.toLowerCase());
  return {
    envelope: !!s?.includes("envelopeaggregate"),
    centroid: !!s?.includes("centroidaggregate"),
    convexHull: !!s?.includes("convexhullaggregate")
  };
}
function u(t2, s) {
  const e = t2?.supportedOperationsWithCacheHint?.map((t3) => t3.toLowerCase());
  return !!e?.includes(s.toLowerCase());
}
function a(t2, s) {
  return {
    analytics: n2(t2),
    attachment: i(t2),
    data: c(t2),
    metadata: d2(t2),
    operations: l(t2.capabilities, t2, s),
    query: y(t2, s),
    queryRelated: m(t2),
    queryTopFeatures: h(t2),
    editing: C(t2)
  };
}
function n2(t2) {
  return {
    supportsCacheHint: u(t2.advancedQueryCapabilities, "queryAnalytics")
  };
}
function i(t2) {
  const s = t2.attachmentProperties, r2 = {
    supportsName: false,
    supportsSize: false,
    supportsContentType: false,
    supportsKeywords: false,
    supportsExifInfo: false,
    supportsCacheHint: u(t2.advancedQueryCapabilities, "queryAttachments"),
    supportsResize: n(t2, "supportsAttachmentsResizing", false)
  };
  return s && Array.isArray(s) && s.forEach((t3) => {
    const s2 = p[t3.name];
    s2 && (r2[s2] = !!t3.isEnabled);
  }), r2;
}
function c(t2) {
  return {
    isVersioned: n(t2, "isDataVersioned", false),
    supportsAttachment: n(t2, "hasAttachments", false),
    supportsM: n(t2, "hasM", false),
    supportsZ: n(t2, "hasZ", false)
  };
}
function d2(t2) {
  return {
    supportsAdvancedFieldProperties: n(t2, "supportsFieldDescriptionProperty", false)
  };
}
function l(s, r2, p2) {
  const o2 = s ? s.toLowerCase().split(",").map((t2) => t2.trim()) : [], u2 = p2 ? d(p2) : null, a2 = o2.includes(null != u2 && "MapServer" === u2.serverType ? "data" : "query"), n3 = o2.includes("editing") && !r2.datesInUnknownTimezone;
  let i2 = n3 && o2.includes("create"), c2 = n3 && o2.includes("delete"), d3 = n3 && o2.includes("update");
  const l2 = o2.includes("changetracking"), y2 = r2.advancedQueryCapabilities;
  return n3 && !(i2 || c2 || d3) && (i2 = c2 = d3 = true), {
    supportsCalculate: n(r2, "supportsCalculate", false),
    supportsTruncate: n(r2, "supportsTruncate", false),
    supportsValidateSql: n(r2, "supportsValidateSql", false),
    supportsAdd: i2,
    supportsDelete: c2,
    supportsEditing: n3,
    supportsChangeTracking: l2,
    supportsQuery: a2,
    supportsQueryAnalytics: n(y2, "supportsQueryAnalytic", false),
    supportsQueryAttachments: n(y2, "supportsQueryAttachments", false),
    supportsQueryTopFeatures: n(y2, "supportsTopFeaturesQuery", false),
    supportsResizeAttachments: n(r2, "supportsAttachmentsResizing", false),
    supportsSync: o2.includes("sync"),
    supportsUpdate: d3,
    supportsExceedsLimitStatistics: n(r2, "supportsExceedsLimitStatistics", false),
    supportsAsyncConvert3D: n(r2, "supportsAsyncConvert3D", false)
  };
}
function y(t2, p2) {
  const a2 = t2.advancedQueryCapabilities, n3 = t2.ownershipBasedAccessControlForFeatures, i2 = t2.archivingInfo, c2 = t2.currentVersion, d3 = p2?.includes("MapServer"), l2 = !d3 || c2 >= has("mapserver-pbf-version-support"), y2 = g(p2), m2 = new Set((t2.supportedQueryFormats ?? "").split(",").map((t3) => t3.toLowerCase().trim()));
  return {
    maxRecordCount: r(t2, "maxRecordCount", void 0),
    maxRecordCountFactor: r(t2, "maxRecordCountFactor", void 0),
    standardMaxRecordCount: r(t2, "standardMaxRecordCount", void 0),
    supportedSpatialAggregationStatistics: o(a2),
    supportsCacheHint: n(a2, "supportsQueryWithCacheHint", false) || u(a2, "query"),
    supportsCentroid: n(a2, "supportsReturningGeometryCentroid", false),
    supportsCompactGeometry: y2,
    supportsDefaultSpatialReference: n(a2, "supportsDefaultSR", false),
    supportsDisjointSpatialRelationship: n(a2, "supportsDisjointSpatialRel", false),
    supportsDistance: n(a2, "supportsQueryWithDistance", false),
    supportsDistinct: n(a2, "supportsDistinct", t2.supportsAdvancedQueries),
    supportsExtent: n(a2, "supportsReturningQueryExtent", false),
    supportsFormatPBF: l2 && m2.has("pbf"),
    supportsFullTextSearch: n(a2, "supportsFullTextSearch", false),
    supportsGeometryProperties: n(a2, "supportsReturningGeometryProperties", false),
    supportsHavingClause: n(a2, "supportsHavingClause", false),
    supportsHistoricMoment: n(i2, "supportsQueryWithHistoricMoment", false),
    supportsMaxRecordCountFactor: n(a2, "supportsMaxRecordCountFactor", false),
    supportsOrderBy: n(a2, "supportsOrderBy", t2.supportsAdvancedQueries),
    supportsPagination: n(a2, "supportsPagination", false),
    supportsPercentileStatistics: n(a2, "supportsPercentileStatistics", false),
    supportsQuantization: n(t2, "supportsCoordinatesQuantization", false),
    supportsQuantizationEditMode: n(t2, "supportsQuantizationEditMode", false),
    supportsQueryByAnonymous: n(n3, "allowAnonymousToQuery", true),
    supportsQueryByOthers: n(n3, "allowOthersToQuery", true),
    supportsQueryGeometry: n(t2, "supportsReturningQueryGeometry", false),
    supportsResultType: n(a2, "supportsQueryWithResultType", false),
    supportsSpatialAggregationStatistics: n(a2, "supportsSpatialAggregationStatistics", false),
    supportsSqlExpression: n(a2, "supportsSqlExpression", false),
    supportsStandardizedQueriesOnly: n(t2, "useStandardizedQueries", false),
    supportsStatistics: n(a2, "supportsStatistics", t2.supportsStatistics),
    supportsTopFeaturesQuery: n(a2, "supportsTopFeaturesQuery", false),
    tileMaxRecordCount: r(t2, "tileMaxRecordCount", void 0)
  };
}
function m(t2) {
  const s = t2.advancedQueryCapabilities, r2 = n(s, "supportsAdvancedQueryRelated", false);
  return {
    supportsPagination: n(s, "supportsQueryRelatedPagination", false),
    supportsCount: r2,
    supportsOrderBy: r2,
    supportsCacheHint: u(s, "queryRelated")
  };
}
function h(t2) {
  return {
    supportsCacheHint: u(t2.advancedQueryCapabilities, "queryTopFilter")
  };
}
function C(t2) {
  const s = t2.ownershipBasedAccessControlForFeatures, p2 = t2 ? t2.advancedEditingCapabilities : void 0;
  return {
    supportsGeometryUpdate: n(t2, "allowGeometryUpdates", true),
    supportsGlobalId: n(t2, "supportsApplyEditsWithGlobalIds", false),
    supportsReturnServiceEditsInSourceSpatialReference: n(t2, "supportsReturnServiceEditsInSourceSR", false),
    supportsRollbackOnFailure: n(t2, "supportsRollbackOnFailureParameter", false),
    supportsUpdateWithoutM: n(t2, "allowUpdateWithoutMValues", false),
    supportsUploadWithItemId: n(t2, "supportsAttachmentsByUploadId", false),
    supportsDeleteByAnonymous: n(s, "allowAnonymousToDelete", true),
    supportsDeleteByOthers: n(s, "allowOthersToDelete", true),
    supportsUpdateByAnonymous: n(s, "allowAnonymousToUpdate", true),
    supportsUpdateByOthers: n(s, "allowOthersToUpdate", true),
    supportsAsyncApplyEdits: n(p2, "supportsAsyncApplyEdits", false),
    zDefault: r(t2, "zDefault", void 0)
  };
}
function g2(t2) {
  return {
    operations: {
      supportsAppend: n(t2, "supportsAppend", false),
      supportsExportClip: n(t2, "supportsExportClip", false),
      supportsExportFrameset: n(t2, "supportsExportFrameset", false),
      supportsMensuration: n(t2, "supportsMensuration", false),
      supportsUpdate: n(t2, "supportsUpdate", false)
    },
    query: {
      supportsCoverageQuery: t2?.playbackInfo?.klv["0601"] ?? false
    }
  };
}

export {
  n,
  r,
  a,
  g2 as g
};
//# sourceMappingURL=chunk-UHMXQYZT.js.map
