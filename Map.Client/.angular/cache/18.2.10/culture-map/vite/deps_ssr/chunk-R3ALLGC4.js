import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  c
} from "./chunk-7J24PH7A.js";
import {
  j
} from "./chunk-DUZT23UA.js";
import {
  e
} from "./chunk-NUICEVIH.js";
import {
  S
} from "./chunk-NXK752PZ.js";
import {
  y
} from "./chunk-UVNLCXWD.js";
import {
  a3 as a
} from "./chunk-UDMPWVPF.js";

// ../../../node_modules/@arcgis/core/views/interactive/sketch/SketchValueOptions.js
var s = class extends S {
  constructor(e2) {
    super(e2), this.directionMode = "relative", this.relativeDirectionIsBilateral = false;
  }
  get effectiveDirectionMode() {
    switch (this.directionMode) {
      case "relative":
        return this.relativeDirectionIsBilateral ? j.RelativeBilateral : j.Relative;
      case "absolute":
        return j.Absolute;
    }
  }
};
e([y({
  type: String,
  nonNullable: true
})], s.prototype, "directionMode", void 0), e([y({
  type: Boolean,
  nonNullable: true
})], s.prototype, "relativeDirectionIsBilateral", void 0), e([y()], s.prototype, "effectiveDirectionMode", null), s = e([a("esri.views.interactive.sketch.SketchValueOptions")], s);
var a2 = s;

// ../../../node_modules/@arcgis/core/views/interactive/sketch/SketchTooltipElevationOptions.js
var t = class extends S {
  constructor(o) {
    super(o), this.mode = "absolute-height";
  }
  toJSON() {
    return {
      mode: this.mode
    };
  }
};
e([y({
  type: String,
  nonNullable: true
})], t.prototype, "mode", void 0), t = e([a("esri.views.interactive.sketch.SketchTooltipElevationOptions")], t);

// ../../../node_modules/@arcgis/core/views/interactive/sketch/SketchTooltipVisibleElements.js
var a3 = class extends S {
  constructor(o) {
    super(o), this.area = true, this.coordinates = true, this.direction = true, this.distance = true, this.elevation = true, this.header = true, this.helpMessage = false, this.orientation = true, this.radius = true, this.rotation = true, this.scale = true, this.size = true, this.totalLength = true;
  }
};
e([y({
  type: Boolean,
  nonNullable: true
})], a3.prototype, "area", void 0), e([y({
  type: Boolean,
  nonNullable: true
})], a3.prototype, "coordinates", void 0), e([y({
  type: Boolean,
  nonNullable: true
})], a3.prototype, "direction", void 0), e([y({
  type: Boolean,
  nonNullable: true
})], a3.prototype, "distance", void 0), e([y({
  type: Boolean,
  nonNullable: true
})], a3.prototype, "elevation", void 0), e([y({
  type: Boolean,
  nonNullable: true
})], a3.prototype, "header", void 0), e([y({
  type: Boolean,
  nonNullable: true
})], a3.prototype, "helpMessage", void 0), e([y({
  type: Boolean,
  nonNullable: true
})], a3.prototype, "orientation", void 0), e([y({
  type: Boolean,
  nonNullable: true
})], a3.prototype, "radius", void 0), e([y({
  type: Boolean,
  nonNullable: true
})], a3.prototype, "rotation", void 0), e([y({
  type: Boolean,
  nonNullable: true
})], a3.prototype, "scale", void 0), e([y({
  type: Boolean,
  nonNullable: true
})], a3.prototype, "size", void 0), e([y({
  type: Boolean,
  nonNullable: true
})], a3.prototype, "totalLength", void 0), a3 = e([a("esri.views.interactive.sketch.SketchTooltipVisibleElements")], a3);
var n = a3;

// ../../../node_modules/@arcgis/core/views/interactive/sketch/SketchTooltipOptions.js
var r = class extends S {
  constructor(e2) {
    super(e2), this.enabled = false, this.forceEnabled = false, this.helpMessage = null, this.helpMessageIcon = null, this.inputEnabled = true, this.elevation = new t(), this.visibleElements = new n(), this.visualVariables = null, this.xyMode = "auto";
  }
  get effectiveEnabled() {
    return this.forceEnabled || this.enabled;
  }
};
e([y({
  type: Boolean,
  nonNullable: true
})], r.prototype, "enabled", void 0), e([y()], r.prototype, "forceEnabled", void 0), e([y()], r.prototype, "effectiveEnabled", null), e([y()], r.prototype, "helpMessage", void 0), e([y()], r.prototype, "helpMessageIcon", void 0), e([y({
  type: Boolean,
  nonNullable: true
})], r.prototype, "inputEnabled", void 0), e([y({
  type: t,
  nonNullable: true
})], r.prototype, "elevation", void 0), e([y({
  type: n,
  nonNullable: true
})], r.prototype, "visibleElements", void 0), e([y()], r.prototype, "visualVariables", void 0), e([y()], r.prototype, "xyMode", void 0), r = e([a("esri.views.interactive.sketch.SketchTooltipOptions")], r);
var p = r;

// ../../../node_modules/@arcgis/core/views/interactive/sketch/SketchOptions.js
var c2 = class extends S {
  constructor(o) {
    super(o), this.labels = new c(), this.tooltips = new p(), this.values = new a2();
  }
};
e([y({
  nonNullable: true,
  type: c
})], c2.prototype, "labels", void 0), e([y({
  nonNullable: true,
  type: p
})], c2.prototype, "tooltips", void 0), e([y({
  nonNullable: true,
  type: a2
})], c2.prototype, "values", void 0), c2 = e([a("esri.views.interactive.sketch.SketchOptions")], c2);
var l = c2;

export {
  p,
  a2 as a,
  l
};
//# sourceMappingURL=chunk-R3ALLGC4.js.map
