import {
  r
} from "./chunk-ZYQL5F6K.js";
import {
  u
} from "./chunk-KYB3KTOZ.js";
import {
  h,
  p
} from "./chunk-IIVUY2T7.js";
import {
  e
} from "./chunk-4Z5SGKRM.js";
import {
  y
} from "./chunk-7CJXZOFG.js";
import {
  a3 as a
} from "./chunk-DDYVXG4F.js";

// ../../../node_modules/@arcgis/core/views/interactive/tooltip/infos/ExtentRotateTooltipInfo.js
var s = class extends r {
  constructor(o2) {
    super(o2), this.type = "extent-rotate", this.angle = 0;
  }
};
e([y()], s.prototype, "type", void 0), e([y()], s.prototype, "angle", void 0), s = e([a("esri.views.interactive.tooltip.infos.ExtentRotateTooltipInfo")], s);

// ../../../node_modules/@arcgis/core/views/support/extentUtils.js
function o({
  topLeft: o2,
  topRight: n,
  bottomRight: i2,
  bottomLeft: r2,
  spatialReference: l
}) {
  const u2 = p(u(r2, i2, l), u(o2, n, l));
  if (null == u2) return null;
  const m = p(u(i2, n, l), u(r2, o2, l));
  return null == m ? null : {
    xSize: u2,
    ySize: m
  };
}

// ../../../node_modules/@arcgis/core/views/interactive/tooltip/infos/ExtentScaleTooltipInfo.js
var i = class extends r {
  constructor(o2) {
    super(o2), this.type = "extent-scale", this.xScale = 0, this.yScale = 0, this.xSize = h, this.ySize = h;
  }
};
e([y()], i.prototype, "type", void 0), e([y()], i.prototype, "xScale", void 0), e([y()], i.prototype, "yScale", void 0), e([y()], i.prototype, "xSize", void 0), e([y()], i.prototype, "ySize", void 0), i = e([a("esri.views.interactive.tooltip.infos.ExtentScaleTooltipInfo")], i);

export {
  s,
  o,
  i
};
//# sourceMappingURL=chunk-KKP76EHB.js.map
