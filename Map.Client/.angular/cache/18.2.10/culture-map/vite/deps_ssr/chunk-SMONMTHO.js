import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  u
} from "./chunk-KUBMHTYA.js";

// ../../../node_modules/@arcgis/core/views/draw/support/settings.js
var o = {
  main: new u([255, 127, 0]),
  selected: new u([255, 255, 255]),
  outline: new u([0, 0, 0, 0.5]),
  selectedOutline: new u([255, 255, 255]),
  hoverOutline: new u([255, 255, 255]),
  secondary: new u([255, 255, 255]),
  secondaryOutline: new u([100, 100, 100]),
  transparent: new u([0, 0, 0, 0])
};
function t(e, o2) {
  Object.assign(e, o2);
}
var s = class {
  constructor(e) {
    this.size = 8, this.hoverSize = 10, this.color = o.main, this.hoverColor = o.main, this.outlineColor = o.outline, this.hoverOutlineColor = o.hoverOutline, t(this, e);
  }
};
var n = class {
  constructor(e) {
    this.color = o.secondary, this.hoverColor = o.main, t(this, e);
  }
};
var r = class {
  constructor(e) {
    this.color = o.transparent, this.hoverColor = o.transparent, this.outlineColor = o.main, this.hoverOutlineColor = o.main, this.stagedColor = o.transparent, this.stagedOutlineColor = o.secondary, t(this, e);
  }
};
var i = class {
  constructor(e) {
    this.vertex = new s(), this.midpoint = new s({
      color: o.secondary,
      outlineColor: o.secondaryOutline,
      size: 6
    }), this.selected = new s({
      color: o.selected,
      hoverColor: o.selected,
      hoverOutlineColor: o.hoverOutline
    }), t(this, e);
  }
};
var l = class {
  constructor(e) {
    this.center = new s({
      color: o.secondaryOutline
    }), this.fill = new r(), this.line = new n(), this.vertex = new s({
      color: o.selected,
      outlineColor: o.main,
      hoverColor: o.selected,
      hoverOutlineColor: o.secondaryOutline
    }), t(this, e);
  }
};
var c = class {
  constructor(e) {
    this.reshapeGraphics = new i(), this.transformGraphics = new l(), t(this, e);
  }
};
var h = new c();

export {
  h
};
//# sourceMappingURL=chunk-SMONMTHO.js.map
