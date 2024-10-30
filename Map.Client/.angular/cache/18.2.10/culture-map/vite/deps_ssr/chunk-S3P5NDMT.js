import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  f,
  g
} from "./chunk-PW54Q6GB.js";
import {
  t
} from "./chunk-JPJAW3N6.js";
import {
  d as d3
} from "./chunk-NVOJILW6.js";
import {
  d as d2
} from "./chunk-ZREJ3Y2F.js";
import {
  P,
  d
} from "./chunk-LZSLQ24Q.js";
import {
  o
} from "./chunk-JAMSDYD6.js";
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
import {
  b,
  s as s2
} from "./chunk-AIZ3T7E3.js";
import {
  s2 as s
} from "./chunk-6JFGZTLU.js";
import {
  __async
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/widgets/support/GeolocationPositioning.js
var h = 2500;
var A = {
  type: "CIMPictureMarker",
  primitiveName: "headingOverride",
  enable: true,
  anchorPoint: {
    x: 0,
    y: -0.5
  },
  anchorPointUnits: "Relative",
  dominantSizeAxis3D: "Y",
  size: 36,
  billboardMode3D: "FaceNearPlane",
  invertBackfaceTexture: true,
  scaleX: 1,
  textureFilter: "Picture",
  url: "data:image/png;base64,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"
};
var u = new d2({
  data: {
    type: "CIMSymbolReference",
    symbol: {
      type: "CIMPointSymbol",
      symbolLayers: [{
        type: "CIMVectorMarker",
        enable: true,
        anchorPoint: {
          x: 0,
          y: 0
        },
        anchorPointUnits: "Relative",
        dominantSizeAxis3D: "Y",
        size: 14,
        billboardMode3D: "FaceNearPlane",
        frame: {
          xmin: 0,
          ymin: 0,
          xmax: 17,
          ymax: 17
        },
        markerGraphics: [{
          type: "CIMMarkerGraphic",
          geometry: {
            rings: [[[8.5, 0], [7.02, 0.13], [5.59, 0.51], [4.25, 1.14], [3.04, 1.99], [1.99, 3.04], [1.14, 4.25], [0.51, 5.59], [0.13, 7.02], [0, 8.5], [0.13, 9.98], [0.51, 11.41], [1.14, 12.75], [1.99, 13.96], [3.04, 15.01], [4.25, 15.86], [5.59, 16.49], [7.02, 16.87], [8.5, 17], [9.98, 16.87], [11.41, 16.49], [12.75, 15.86], [13.96, 15.01], [15.01, 13.96], [15.86, 12.75], [16.49, 11.41], [16.87, 9.98], [17, 8.5], [16.87, 7.02], [16.49, 5.59], [15.86, 4.25], [15.01, 3.04], [13.96, 1.99], [12.75, 1.14], [11.41, 0.51], [9.98, 0.13], [8.5, 0]]]
          },
          symbol: {
            type: "CIMPolygonSymbol",
            symbolLayers: [{
              type: "CIMSolidStroke",
              enable: true,
              capStyle: "Round",
              joinStyle: "Round",
              lineStyle3D: "Strip",
              miterLimit: 10,
              width: 2,
              color: [255, 255, 255, 255]
            }, {
              type: "CIMSolidFill",
              enable: true,
              color: [0, 122, 194, 255]
            }]
          }
        }],
        scaleSymbolsProportionally: true,
        respectFrame: true
      }, {
        type: "CIMVectorMarker",
        enable: true,
        anchorPoint: {
          x: 0,
          y: 0
        },
        anchorPointUnits: "Relative",
        dominantSizeAxis3D: "Y",
        size: 16,
        billboardMode3D: "FaceNearPlane",
        frame: {
          xmin: 0,
          ymin: 0,
          xmax: 17,
          ymax: 17
        },
        markerGraphics: [{
          type: "CIMMarkerGraphic",
          geometry: {
            rings: [[[8.5, 0], [7.02, 0.13], [5.59, 0.51], [4.25, 1.14], [3.04, 1.99], [1.99, 3.04], [1.14, 4.25], [0.51, 5.59], [0.13, 7.02], [0, 8.5], [0.13, 9.98], [0.51, 11.41], [1.14, 12.75], [1.99, 13.96], [3.04, 15.01], [4.25, 15.86], [5.59, 16.49], [7.02, 16.87], [8.5, 17], [9.98, 16.87], [11.41, 16.49], [12.75, 15.86], [13.96, 15.01], [15.01, 13.96], [15.86, 12.75], [16.49, 11.41], [16.87, 9.98], [17, 8.5], [16.87, 7.02], [16.49, 5.59], [15.86, 4.25], [15.01, 3.04], [13.96, 1.99], [12.75, 1.14], [11.41, 0.51], [9.98, 0.13], [8.5, 0]]]
          },
          symbol: {
            type: "CIMPolygonSymbol",
            symbolLayers: [{
              type: "CIMSolidStroke",
              enable: true,
              capStyle: "Round",
              joinStyle: "Round",
              lineStyle3D: "Strip",
              miterLimit: 10,
              width: 0,
              color: [255, 255, 255, 255]
            }, {
              type: "CIMSolidFill",
              enable: true,
              color: [0, 0, 0, 66]
            }]
          }
        }],
        scaleSymbolsProportionally: true,
        respectFrame: true,
        offsetX: 0,
        offsetY: -1
      }, A],
      angleAlignment: "Map"
    },
    primitiveOverrides: [{
      type: "CIMPrimitiveOverride",
      primitiveName: "headingOverride",
      propertyName: "Rotation",
      valueExpressionInfo: {
        type: "CIMExpressionInfo",
        title: "Rotation override",
        expression: "360 - $feature.heading",
        returnType: "Default"
      }
    }, {
      type: "CIMPrimitiveOverride",
      primitiveName: "headingOverride",
      propertyName: "TintColor",
      valueExpressionInfo: {
        type: "CIMExpressionInfo",
        title: "TintColor override",
        expression: "IIF(IsEmpty($feature.heading), [255, 255, 255, 0], [255, 255, 255, 1])",
        returnType: "Default"
      }
    }]
  }
});
var v = class extends t(o.EventedMixin(S)) {
  constructor() {
    super(...arguments), this._geolocationUsable = true, this.geolocationOptions = null, this.goToLocationEnabled = true, this.graphic = new d3({
      symbol: u
    }), this.scale = null, this.rotationEnabled = true, this.view = null;
  }
  initialize() {
    g() || (this._geolocationUsable = false), this.addHandles([d(() => this.view?.type, () => this._handleViewTypeChange(), P)]);
  }
  destroy() {
    this._clearGraphic(), this.view = null;
  }
  _clearGraphic() {
    const {
      view: e2,
      graphic: t2
    } = this;
    e2 && t2 && e2.graphics.remove(t2);
  }
  _addGraphic() {
    const {
      view: e2,
      graphic: t2
    } = this;
    e2?.graphics && t2 && !e2.graphics.includes(t2) && e2.graphics.push(t2);
  }
  _handleViewTypeChange() {
    A.enable = "2d" === this.view?.type;
  }
  _getScaleWithinConstraints(e2, t2) {
    if (!t2) return e2;
    if ("2d" === t2.type) {
      const {
        effectiveMaxScale: i,
        effectiveMinScale: o2
      } = t2.constraints;
      return Math.min(o2, Math.max(i, e2));
    }
    return e2;
  }
  _getScale(e2) {
    const {
      scale: t2
    } = this, i = "number" == typeof t2 ? t2 : h;
    return this._getScaleWithinConstraints(i, e2);
  }
  _getHeading(e2, t2) {
    const i = t2?.spatialReference, o2 = i?.isWebMercator || i?.isGeographic, r = e2.coords?.heading;
    return !o2 || "number" != typeof r || isNaN(r) || r < 0 || r > 360 ? null : r;
  }
  _addHeading(e2) {
    const {
      heading: t2,
      target: i,
      view: o2
    } = e2;
    o2 && null !== t2 && ("3d" !== o2.type ? "2d" === o2.type && (i.rotation = 360 - t2) : i.heading = t2);
  }
  _animatePoint(e2, t2, i, o2) {
    return __async(this, null, function* () {
      const {
        view: r
      } = this;
      if (!this.goToLocationEnabled || !r) return;
      const n = {
        target: e2,
        scale: t2
      };
      this.rotationEnabled && this._addHeading({
        heading: i,
        target: n,
        view: r
      });
      const s3 = {
        signal: o2.signal
      };
      s2(s3), yield this.callGoTo({
        target: n,
        options: s3
      });
    });
  }
  updatePosition(e2, t2) {
    return __async(this, null, function* () {
      try {
        const i = this.view, o2 = yield f({
          position: e2,
          view: i
        }, {
          signal: t2.signal
        }), {
          graphic: r
        } = this, {
          timestamp: a2,
          coords: n
        } = e2, {
          accuracy: s3,
          altitude: l,
          altitudeAccuracy: p,
          latitude: c,
          longitude: m,
          speed: d4
        } = n, g2 = this._getHeading(e2, i), h2 = {
          timestamp: a2,
          accuracy: s3,
          altitude: l,
          altitudeAccuracy: p,
          heading: g2,
          latitude: c,
          longitude: m,
          speed: d4
        };
        r && (r.geometry = o2, r.attributes = h2);
        const A2 = this._getScale(i);
        yield this._animatePoint(o2, A2, g2, t2);
      } catch (i) {
        if (!b(i)) throw new s("geolocation-positioning:invalid-point", "Cannot position invalid point", {
          error: i
        });
      }
      return e2;
    });
  }
};
e([y()], v.prototype, "_geolocationUsable", void 0), e([y()], v.prototype, "geolocationOptions", void 0), e([y()], v.prototype, "goToLocationEnabled", void 0), e([y({
  type: d3,
  nonNullable: true
})], v.prototype, "graphic", void 0), e([y()], v.prototype, "scale", void 0), e([y()], v.prototype, "rotationEnabled", void 0), e([y()], v.prototype, "view", void 0), v = e([a("esri.widgets.support.GeolocationPositioning")], v);
var b2 = v;

export {
  b2 as b
};
//# sourceMappingURL=chunk-S3P5NDMT.js.map
