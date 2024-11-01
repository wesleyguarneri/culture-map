import {
  e
} from "./chunk-VHERB2HE.js";
import {
  ge
} from "./chunk-VCFSVEDB.js";
import {
  Z
} from "./chunk-ZE47C44H.js";
import {
  r
} from "./chunk-IMVP5ADD.js";

// ../../../node_modules/@arcgis/core/views/3d/layers/i3s/I3SNode.js
var s = class extends e {
  constructor(e2, n) {
    super(NaN, NaN), this.id = e2, this.serviceMbsInIndexSR = n, this.serviceMbsInRenderSR = Z(0, 0, 0, -1);
  }
  invalidateServiceBVsInRenderSR() {
    ge(this.serviceMbsInRenderSR), this.serviceObbInRenderSR?.invalidate();
  }
  shareServiceBVsInRenderSRWith(e2) {
    this.serviceObbInRenderSR = e2.serviceObbInRenderSR, this.serviceMbsInRenderSR = e2.serviceMbsInRenderSR;
  }
};
var o;
var r2;
var a;
var d;
var c;
!function(e2) {
  e2[e2.Unmodified = 0] = "Unmodified", e2[e2.Culled = 1] = "Culled", e2[e2.NotChecked = 2] = "NotChecked";
}(o || (o = {})), function(e2) {
  e2[e2.Unmodified = 0] = "Unmodified", e2[e2.PotentiallyModified = 1] = "PotentiallyModified", e2[e2.Culled = 2] = "Culled", e2[e2.Unknown = 3] = "Unknown", e2[e2.NotChecked = 4] = "NotChecked";
}(r2 || (r2 = {}));
var h = class extends s {
  constructor(i, n, t, s2, o2, d2, c2, h2, l2, u) {
    super(i, t), this.index = n, this.childCount = s2, this.level = o2, this.resources = d2, this.version = c2, this.lodMetric = h2, this.maxError = l2, this.numFeatures = u, this.failed = false, this.cacheState = a.Unknown, this.vertexCount = 0, this.memory = 0, this.childrenLoaded = 0, this.hasModifications = false, this.imModificationImpact = r2.NotChecked, this.elevationAgnosticBoundingVolume = r(0, 0, 0, -1);
  }
  invalidateServiceBVsInRenderSR() {
    super.invalidateServiceBVsInRenderSR(), this.elevationAgnosticBoundingVolume[3] = -1;
  }
};
!function(e2) {
  e2[e2.Unknown = 0] = "Unknown", e2[e2.Uncached = 1] = "Uncached", e2[e2.Cached = 2] = "Cached";
}(a || (a = {})), function(e2) {
  e2[e2.None = 0] = "None", e2[e2.MaxScreenThreshold = 1] = "MaxScreenThreshold", e2[e2.ScreenSpaceRelative = 2] = "ScreenSpaceRelative", e2[e2.RemovedFeatureDiameter = 3] = "RemovedFeatureDiameter", e2[e2.DistanceRangeFromDefaultCamera = 4] = "DistanceRangeFromDefaultCamera";
}(d || (d = {})), function(e2) {
  e2[e2.Hole = 0] = "Hole", e2[e2.Leaf = 1] = "Leaf";
}(c || (c = {}));
var l = class {
  constructor(e2, i, n, t) {
    this.nodeHasLOD = e2, this.isChosen = i, this.lodLevel = n, this.version = t;
  }
};

export {
  s,
  o,
  r2 as r,
  a,
  d,
  c,
  h,
  l
};
//# sourceMappingURL=chunk-H6HXZTAS.js.map
