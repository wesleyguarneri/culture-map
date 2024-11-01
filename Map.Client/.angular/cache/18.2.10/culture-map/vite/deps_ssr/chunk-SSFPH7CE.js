import { createRequire } from 'module';const require = createRequire(import.meta.url);

// ../../../node_modules/@arcgis/core/views/3d/support/ElevationRange.js
var e = class {
  constructor(e2 = 1 / 0, a = -1 / 0) {
    this.elevationRangeMin = e2, this.elevationRangeMax = a;
  }
  get elevationRangeValid() {
    return !Number.isNaN(this.elevationRangeMin);
  }
  invalidateElevationRange() {
    this.elevationRangeMin = NaN;
  }
  expandElevationRangeValues(e2, a) {
    this.elevationRangeMin = Math.min(this.elevationRangeMin, e2), this.elevationRangeMax = Math.max(this.elevationRangeMax, a);
  }
  expandElevationRange(e2) {
    this.elevationRangeMin = Math.min(this.elevationRangeMin, e2.elevationRangeMin), this.elevationRangeMax = Math.max(this.elevationRangeMax, e2.elevationRangeMax);
  }
  setElevationRange(e2) {
    this.elevationRangeMin = e2.elevationRangeMin, this.elevationRangeMax = e2.elevationRangeMax;
  }
};

export {
  e
};
//# sourceMappingURL=chunk-SSFPH7CE.js.map
