// ../../../node_modules/@arcgis/core/geometry/support/Ellipsoid.js
var i = class {
  constructor(i2, s2, t2, e2) {
    this.semiMajorAxis = i2, this.flattening = s2, this.outerAtmosphereRimWidth = t2;
    const h = 1 - this.flattening;
    this.semiMinorAxis = this.semiMajorAxis * h, this.halfSemiMajorAxis = this.semiMajorAxis / 2, this.halfCircumference = Math.PI * this.semiMajorAxis, this.metersPerDegree = this.halfCircumference / 180, this.inverseFlattening = 1 / (1 - this.flattening) - 1, this.eccentricitySquared = e2 || 2 * this.flattening - this.flattening * this.flattening, this.meanRadiusSemiAxes = (2 * this.semiMajorAxis + this.semiMinorAxis) / 3;
  }
  get radius() {
    return this.semiMajorAxis;
  }
};
var s = new i(6378137, 1 / 298.257223563, 3e5, 0.006694379990137799);
var t = new i(3396190, 1 / 169.8944472236118, 23e4);
var e = new i(1737400, 0, 0);

export {
  s,
  t,
  e
};
//# sourceMappingURL=chunk-L5YS4GSA.js.map
