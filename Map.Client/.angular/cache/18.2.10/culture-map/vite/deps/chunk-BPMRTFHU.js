import {
  i
} from "./chunk-CIW3KHOW.js";
import {
  n
} from "./chunk-V5C6HSAM.js";
import {
  f
} from "./chunk-V6AMQYXE.js";
import {
  e
} from "./chunk-4Z5SGKRM.js";
import {
  y
} from "./chunk-7CJXZOFG.js";
import {
  a3 as a
} from "./chunk-DDYVXG4F.js";

// ../../../node_modules/@arcgis/core/layers/support/FeatureTemplate.js
var l = new n({
  esriFeatureEditToolAutoCompletePolygon: "auto-complete-polygon",
  esriFeatureEditToolCircle: "circle",
  esriFeatureEditToolEllipse: "ellipse",
  esriFeatureEditToolFreehand: "freehand",
  esriFeatureEditToolLine: "line",
  esriFeatureEditToolNone: "none",
  esriFeatureEditToolPoint: "point",
  esriFeatureEditToolPolygon: "polygon",
  esriFeatureEditToolRectangle: "rectangle",
  esriFeatureEditToolArrow: "arrow",
  esriFeatureEditToolTriangle: "triangle",
  esriFeatureEditToolLeftArrow: "left-arrow",
  esriFeatureEditToolRightArrow: "right-arrow",
  esriFeatureEditToolUpArrow: "up-arrow",
  esriFeatureEditToolDownArrow: "down-arrow"
});
var a2 = class extends i(f) {
  constructor(o) {
    super(o), this.name = null, this.description = null, this.drawingTool = null, this.prototype = null, this.thumbnail = null;
  }
};
e([y({
  json: {
    write: true
  }
})], a2.prototype, "name", void 0), e([y({
  json: {
    write: true
  }
})], a2.prototype, "description", void 0), e([y({
  json: {
    read: l.read,
    write: l.write
  }
})], a2.prototype, "drawingTool", void 0), e([y({
  json: {
    write: true
  }
})], a2.prototype, "prototype", void 0), e([y({
  json: {
    write: true
  }
})], a2.prototype, "thumbnail", void 0), a2 = e([a("esri.layers.support.FeatureTemplate")], a2);
var p = a2;

export {
  p
};
//# sourceMappingURL=chunk-BPMRTFHU.js.map
