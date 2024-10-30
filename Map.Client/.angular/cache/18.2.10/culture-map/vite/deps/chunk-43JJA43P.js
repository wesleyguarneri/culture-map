import {
  r
} from "./chunk-B4LRUYYJ.js";
import {
  p
} from "./chunk-QRVAQWLH.js";
import {
  s
} from "./chunk-ZFPMGEAK.js";
import {
  U,
  w
} from "./chunk-SNHPS7NU.js";
import {
  e as e3,
  y as y2
} from "./chunk-VS26W5Y5.js";
import {
  n as n2
} from "./chunk-DY7FJHTG.js";
import {
  d as d3
} from "./chunk-HD65DNIO.js";
import {
  d
} from "./chunk-634JLXD4.js";
import {
  y
} from "./chunk-7MZZCQ64.js";
import {
  d as d2
} from "./chunk-DZALMCYL.js";
import {
  e as e2
} from "./chunk-7ZJ6P7J7.js";
import {
  m2 as m
} from "./chunk-T6GCUITX.js";
import {
  _
} from "./chunk-O7UDKFOW.js";
import {
  n
} from "./chunk-OXEPWRM7.js";
import {
  e
} from "./chunk-7DA6A5LD.js";

// ../../../node_modules/@arcgis/core/views/2d/interactive/SnappingVisualizer2D.js
var f = class extends r {
  constructor(e4) {
    super(), this._graphicsLayer = e4, this._symbolPairingsByType = /* @__PURE__ */ new Map();
  }
  visualizeIntersectionPoint(e4, t) {
    return this._visualizeSnappingIndicator(new _({
      x: e4.intersectionPoint[0],
      y: e4.intersectionPoint[1],
      spatialReference: t.spatialReference
    }), this._getOrCreateSymbol("intersectionPoint", t.view.effectiveTheme.accentColor));
  }
  visualizePoint(e4, t) {
    return this._visualizeSnappingIndicator(new _({
      x: e4.point[0],
      y: e4.point[1],
      spatialReference: t.spatialReference
    }), this._getOrCreateSymbol("point", t.view.effectiveTheme.accentColor));
  }
  visualizeLine(e4, t) {
    return this._visualizeSnappingIndicator(new m({
      paths: [[e4.lineStart, e4.lineEnd]],
      spatialReference: t.spatialReference
    }), this._getOrCreateSymbol("line", t.view.effectiveTheme.accentColor));
  }
  visualizeParallelSign(e4, t) {
    return this._visualizeSnappingIndicator(new m({
      paths: [[e4.lineStart, e4.lineEnd]],
      spatialReference: t.spatialReference
    }), this._getOrCreateSymbol("parallelSign", t.view.effectiveTheme.accentColor));
  }
  visualizeRightAngleQuad(e4, t) {
    const r2 = n2(), l = n2(), s2 = n();
    e3(r2, s(e4.centerVertex), s(e4.previousVertex)), e3(l, s(e4.nextVertex), s(e4.previousVertex)), y2(s2, r2, l);
    const c = `rightAngleQuad${s2[2] < 0 ? 45 : 225}`;
    return this._visualizeSnappingIndicator(new m({
      paths: [[e4.previousVertex, e4.centerVertex, e4.nextVertex]],
      spatialReference: t.spatialReference
    }), this._getOrCreateSymbol(c, t.view.effectiveTheme.accentColor));
  }
  _visualizeSnappingIndicator(r2, i) {
    const o = new d3({
      geometry: r2,
      symbol: i
    });
    return this._graphicsLayer.add(o), e(() => {
      this._graphicsLayer.remove(o);
    });
  }
  _getOrCreateSymbol(e4, t) {
    const r2 = this._symbolPairingsByType;
    return r2.get(e4)?.color !== t && r2.set(e4, {
      color: t,
      symbol: u(e4, t)
    }), r2.get(e4).symbol;
  }
};
function u(e4, t) {
  const i = [...t.toRgb(), 255 * t.a];
  switch (e4) {
    case "point":
      return new y({
        outline: {
          width: 0.5,
          color: [0, 0, 0, 1]
        },
        size: 10,
        color: t
      });
    case "intersectionPoint":
      return new y({
        outline: new d2({
          width: 1.5,
          color: t
        }),
        size: 15,
        color: [0, 0, 0, 0]
      });
    case "line":
      return new d({
        data: {
          type: "CIMSymbolReference",
          symbol: {
            type: "CIMLineSymbol",
            symbolLayers: [{
              type: "CIMSolidStroke",
              enable: true,
              capStyle: U.Butt,
              joinStyle: w.Round,
              miterLimit: 10,
              width: e2(p.lineHintWidthTarget),
              color: i
            }]
          }
        }
      });
    case "parallelSign":
      return new d({
        data: {
          type: "CIMSymbolReference",
          symbol: {
            type: "CIMLineSymbol",
            symbolLayers: [{
              type: "CIMVectorMarker",
              enable: true,
              anchorPoint: {
                x: 0,
                y: -1,
                z: 0
              },
              anchorPointUnits: "Relative",
              size: 5,
              markerPlacement: {
                type: "CIMMarkerPlacementOnLine",
                placePerPart: true,
                angleToLine: true,
                relativeTo: "LineMiddle"
              },
              frame: {
                xmin: -5,
                ymin: -1.5,
                xmax: 5,
                ymax: 1.5
              },
              markerGraphics: [{
                type: "CIMMarkerGraphic",
                geometry: {
                  rings: [[[7, 0], [-7, 0], [-7, 1.5], [7, 1.5]]]
                },
                symbol: {
                  type: "CIMPolygonSymbol",
                  symbolLayers: [{
                    type: "CIMSolidFill",
                    enable: true,
                    color: i
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
                y: 1,
                z: 0
              },
              anchorPointUnits: "Relative",
              size: 5,
              markerPlacement: {
                type: "CIMMarkerPlacementOnLine",
                placePerPart: true,
                angleToLine: true,
                relativeTo: "LineMiddle"
              },
              frame: {
                xmin: -5,
                ymin: -1.5,
                xmax: 5,
                ymax: 1.5
              },
              markerGraphics: [{
                type: "CIMMarkerGraphic",
                geometry: {
                  rings: [[[7, 0], [-7, 0], [-7, -1.5], [7, -1.5]]]
                },
                symbol: {
                  type: "CIMPolygonSymbol",
                  symbolLayers: [{
                    type: "CIMSolidFill",
                    enable: true,
                    color: i
                  }]
                }
              }],
              scaleSymbolsProportionally: true,
              respectFrame: true
            }]
          }
        }
      });
    case "rightAngleQuad45":
    case "rightAngleQuad225": {
      const o = "rightAngleQuad45" === e4 ? 45 : 225;
      return new d({
        data: {
          type: "CIMSymbolReference",
          symbol: {
            type: "CIMLineSymbol",
            symbolLayers: [{
              type: "CIMVectorMarker",
              enable: true,
              anchorPoint: {
                x: 0.5,
                y: 0.5,
                z: 0
              },
              anchorPointUnits: "Relative",
              size: e2(p.rightAngleHintSize),
              rotation: o,
              markerPlacement: {
                type: "CIMMarkerPlacementOnVertices",
                placePerPart: true,
                angleToLine: true,
                placeOnEndPoints: false
              },
              frame: {
                xmin: -5,
                ymin: -5,
                xmax: 5,
                ymax: 5
              },
              markerGraphics: [{
                type: "CIMMarkerGraphic",
                geometry: {
                  paths: [[[5, -5], [-5, -5], [-5, 5], [5, 5], [5, -5]]]
                },
                symbol: {
                  type: "CIMLineSymbol",
                  symbolLayers: [{
                    type: "CIMSolidStroke",
                    enable: true,
                    capStyle: "Butt",
                    joinStyle: "Round",
                    miterLimit: 10,
                    width: e2(p.rightAngleHintOutlineSize),
                    color: i
                  }, {
                    type: "CIMSolidFill",
                    enable: true,
                    color: [...t.toRgb(), 255 * t.a * 0.4]
                  }]
                }
              }],
              scaleSymbolsProportionally: true,
              respectFrame: true
            }]
          }
        }
      });
    }
  }
}

export {
  f
};
//# sourceMappingURL=chunk-43JJA43P.js.map
