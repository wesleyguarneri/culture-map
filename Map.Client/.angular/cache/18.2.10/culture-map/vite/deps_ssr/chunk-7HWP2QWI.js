import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  E2 as E,
  s2 as s
} from "./chunk-MDOKECP3.js";
import {
  u
} from "./chunk-KUBMHTYA.js";
import {
  G
} from "./chunk-MZM4INJV.js";
import {
  f
} from "./chunk-4AZPIP7K.js";
import {
  e
} from "./chunk-NUICEVIH.js";
import {
  y
} from "./chunk-UVNLCXWD.js";
import {
  a3 as a
} from "./chunk-UDMPWVPF.js";

// ../../../node_modules/@arcgis/core/views/interactive/snapping/Settings.js
var o = class extends f {
  constructor() {
    super(...arguments), this.enabled = true;
  }
};
e([y({
  type: Boolean
})], o.prototype, "enabled", void 0), o = e([a("esri.views.interactive.snapping.Settings.DefaultSnappingAlgorithm")], o);
var l = class extends f {
  constructor(e2) {
    super(e2), this.lineSnapper = new o(), this.parallelLineSnapper = new o(), this.rightAngleSnapper = new o(), this.rightAngleTriangleSnapper = new o(), this.shortLineThreshold = 15, this.distance = 5, this.pointThreshold = 1e-6, this.intersectionParallelLineThreshold = 1e-6, this.parallelLineThreshold = 1e-6, this.verticalLineThresholdMeters = 0.3, this.touchSensitivityMultiplier = 1.5, this.pointOnLineThreshold = 1e-6, this.orange = new u([255, 127, 0]), this.orangeTransparent = new u([255, 127, 0, 0.5]), this.lineHintWidthReference = 3, this.lineHintWidthTarget = 3, this.lineHintFadedExtensions = 0.3, this.parallelLineHintWidth = 2, this.parallelLineHintLength = 24, this.parallelLineHintOffset = 1.5, this.rightAngleHintSize = 24, this.rightAngleHintOutlineSize = 1.5, this.satisfiesConstraintScreenThreshold = 1;
  }
};
e([y({
  type: o,
  constructOnly: true,
  nonNullable: true,
  json: {
    write: true
  }
})], l.prototype, "lineSnapper", void 0), e([y({
  type: o,
  constructOnly: true,
  nonNullable: true,
  json: {
    write: true
  }
})], l.prototype, "parallelLineSnapper", void 0), e([y({
  type: o,
  constructOnly: true,
  nonNullable: true,
  json: {
    write: true
  }
})], l.prototype, "rightAngleSnapper", void 0), e([y({
  type: o,
  constructOnly: true,
  nonNullable: true,
  json: {
    write: true
  }
})], l.prototype, "rightAngleTriangleSnapper", void 0), e([y({
  type: Number,
  nonNullable: true,
  range: {
    min: -1,
    max: 50,
    step: 1
  },
  json: {
    write: true
  }
})], l.prototype, "shortLineThreshold", void 0), e([y({
  type: Number,
  nonNullable: true,
  range: {
    min: -1,
    max: 50,
    step: 1
  },
  json: {
    write: true
  }
})], l.prototype, "distance", void 0), e([y({
  type: Number,
  nonNullable: true,
  range: {
    min: 0,
    max: 1e-5
  },
  json: {
    write: true
  }
})], l.prototype, "pointThreshold", void 0), e([y({
  type: Number,
  nonNullable: true,
  range: {
    min: 0,
    max: 1e-5
  },
  json: {
    write: true
  }
})], l.prototype, "intersectionParallelLineThreshold", void 0), e([y({
  type: Number,
  nonNullable: true,
  range: {
    min: 0,
    max: 1e-5
  },
  json: {
    write: true
  }
})], l.prototype, "parallelLineThreshold", void 0), e([y({
  type: Number,
  nonNullable: true,
  range: {
    min: 0,
    max: 1
  },
  json: {
    write: true
  }
})], l.prototype, "verticalLineThresholdMeters", void 0), e([y({
  type: Number,
  nonNullable: true,
  range: {
    min: 0,
    max: 10
  },
  json: {
    write: true
  }
})], l.prototype, "touchSensitivityMultiplier", void 0), e([y({
  type: Number,
  nonNullable: true,
  range: {
    min: 0,
    max: 1e-5
  },
  json: {
    write: true
  }
})], l.prototype, "pointOnLineThreshold", void 0), e([y({
  type: u,
  nonNullable: true
})], l.prototype, "orange", void 0), e([y({
  type: u,
  nonNullable: true
})], l.prototype, "orangeTransparent", void 0), e([y({
  type: Number,
  nonNullable: true,
  range: {
    min: 0,
    max: 10
  },
  json: {
    write: true
  }
})], l.prototype, "lineHintWidthReference", void 0), e([y({
  type: Number,
  nonNullable: true,
  range: {
    min: 0,
    max: 10
  },
  json: {
    write: true
  }
})], l.prototype, "lineHintWidthTarget", void 0), e([y({
  type: Number,
  nonNullable: true,
  range: {
    min: 0,
    max: 1
  },
  json: {
    write: true
  }
})], l.prototype, "lineHintFadedExtensions", void 0), e([y({
  type: Number,
  nonNullable: true,
  range: {
    min: 0,
    max: 10
  },
  json: {
    write: true
  }
})], l.prototype, "parallelLineHintWidth", void 0), e([y({
  type: Number,
  nonNullable: true,
  range: {
    min: 0,
    max: 50
  },
  json: {
    write: true
  }
})], l.prototype, "parallelLineHintLength", void 0), e([y({
  type: Number,
  nonNullable: true,
  range: {
    min: 0,
    max: 5
  },
  json: {
    write: true
  }
})], l.prototype, "parallelLineHintOffset", void 0), e([y({
  type: Number,
  nonNullable: true,
  range: {
    min: 0,
    max: 46
  },
  json: {
    write: true
  }
})], l.prototype, "rightAngleHintSize", void 0), e([y({
  type: Number,
  nonNullable: true,
  range: {
    min: 0,
    max: 6
  },
  json: {
    write: true
  }
})], l.prototype, "rightAngleHintOutlineSize", void 0), e([y({
  type: Number,
  nonNullable: true,
  range: {
    min: 0,
    max: 5
  },
  json: {
    write: true
  }
})], l.prototype, "satisfiesConstraintScreenThreshold", void 0), l = e([a("esri.views.interactive.snapping.Settings.Defaults")], l);
var p = new l();

// ../../../node_modules/@arcgis/core/views/interactive/snapping/hints/IntersectionSnappingHint.js
var o2 = class _o extends s {
  constructor(n, i, o3 = E.ALL) {
    super(i, o3), this.intersectionPoint = n;
  }
  equals(t) {
    return t instanceof _o && G(this.intersectionPoint, t.intersectionPoint);
  }
};

// ../../../node_modules/@arcgis/core/views/interactive/snapping/hints/ParallelSnappingHint.js
var r = class _r extends s {
  constructor(t, i, r2, s3 = E.ALL) {
    super(r2, s3), this.lineStart = t, this.lineEnd = i;
  }
  equals(n) {
    return n instanceof _r && G(this.lineStart, n.lineStart) && G(this.lineEnd, n.lineEnd);
  }
};

// ../../../node_modules/@arcgis/core/views/interactive/snapping/hints/RightAngleSnappingHint.js
var s2 = class _s extends s {
  constructor(e2, r2, s3, i, o3 = E.ALL) {
    super(i, o3), this.previousVertex = e2, this.centerVertex = r2, this.nextVertex = s3;
  }
  equals(t) {
    return t instanceof _s && G(this.previousVertex, t.previousVertex) && G(this.centerVertex, t.centerVertex) && G(this.nextVertex, t.nextVertex);
  }
};

export {
  p,
  o2 as o,
  r,
  s2 as s
};
//# sourceMappingURL=chunk-7HWP2QWI.js.map
