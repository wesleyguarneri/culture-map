import { createRequire } from 'module';const require = createRequire(import.meta.url);

// ../../../node_modules/@arcgis/core/views/interactive/snapping/SnappingContext.js
var e = class {
  constructor(e2) {
    this.vertexHandle = null, this.excludeFeature = null, this.visualizer = null, this.selfSnappingZ = null, this.drawConstraints = null, this.editGeometryOperations = e2.editGeometryOperations, this.elevationInfo = e2.elevationInfo, this.pointer = e2.pointer, this.vertexHandle = e2.vertexHandle, this.excludeFeature = e2.excludeFeature, this.feature = e2.feature, this.visualizer = e2.visualizer, this.selfSnappingZ = e2.selfSnappingZ, this.drawConstraints = e2.drawConstraints;
  }
  get coordinateHelper() {
    return this.editGeometryOperations.data.coordinateHelper;
  }
  get spatialReference() {
    return this.coordinateHelper.spatialReference;
  }
};

export {
  e
};
//# sourceMappingURL=chunk-Q23C3NFQ.js.map
