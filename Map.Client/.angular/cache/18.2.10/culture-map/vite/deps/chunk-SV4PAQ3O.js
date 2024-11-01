import {
  h
} from "./chunk-YAGNWBGU.js";
import {
  e
} from "./chunk-IMVP5ADD.js";
import {
  j
} from "./chunk-JJS7PR2U.js";

// ../../../node_modules/@arcgis/core/widgets/ElevationProfile/support/constants.js
var t;
var a;
!function(e2) {
  e2.Disabled = "disabled", e2.Ready = "ready", e2.Creating = "creating", e2.Created = "created", e2.Selecting = "selecting", e2.Selected = "selected";
}(t || (t = {})), function(e2) {
  e2.NoValidInput = "no-valid-input", e2.NoVisibleProfiles = "no-visible-profiles", e2.InvalidGeometry = "invalid-geometry", e2.TooComplex = "too-complex", e2.InvalidElevationInfo = "invalid-elevation-info", e2.UnknownError = "unknown-error", e2.RefinedButNoChartData = "refined-but-no-chart-data", e2.None = "none";
}(a || (a = {}));
var l = {
  noDataValue: -5e5,
  defaultQueryOptions: () => ({
    noDataValue: l.noDataValue,
    demResolution: "auto",
    maximumAutoTileRequests: 150,
    ignoreInvisibleLayers: true
  }),
  updateThrottleMillis: 100,
  delayAfterPreviewMillis: 500,
  defaultDemResolution: j(10, "centimeters", "meters"),
  densificationMaxSamples: 3e3,
  largeChartSamples: 1e4,
  maxTotalSamples: 1e5,
  maxChartRatio: 300,
  minSlopeSampleDistance: 10,
  formatPrecision: 1,
  portraitModePixelBreakpoint: 400,
  profileLinesStyle3D: {
    width: 3,
    outlineSize: 0,
    falloff: 0,
    outlineColor: e([1, 1, 1, 0]),
    renderOccluded: h.Opaque
  },
  hoveredPointsStyle: {
    size: 14,
    borderStyle: "solid",
    borderWidth: 3,
    borderColor: "#ffffff",
    boxShadow: "0px 0px 0px 5px rgba(255,255,255,0.2)"
  }
};
function r() {
  return l;
}
var s = " ― ";
var d = {
  progress: 1,
  hasZ: false,
  samples: [],
  statistics: null,
  spatialReference: null
};

export {
  t,
  a,
  r,
  s,
  d
};
//# sourceMappingURL=chunk-SV4PAQ3O.js.map
