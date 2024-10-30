import {
  M
} from "./chunk-RK23OHNG.js";
import {
  h as h2
} from "./chunk-APWDCJIJ.js";
import {
  h
} from "./chunk-YAGNWBGU.js";
import {
  E,
  G,
  R,
  U
} from "./chunk-TCPN7AEH.js";
import {
  u
} from "./chunk-K226GFDN.js";
import {
  e
} from "./chunk-4Z5SGKRM.js";
import {
  S
} from "./chunk-ANKOCGE2.js";
import {
  y
} from "./chunk-7CJXZOFG.js";
import {
  a3 as a
} from "./chunk-DDYVXG4F.js";
import {
  __objRest
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/views/3d/interactive/editingTools/settings.js
var d = 0.3;
function u2(o, t) {
  t && Object.assign(o, t);
}
var g = class {
  constructor(o) {
    this.height = 90, this.coneHeight = 40, this.coneWidth = 23, this.width = 3, this.renderOccluded = h.Opaque, this.color = o.accent;
  }
};
var f = class {
  constructor(_a) {
    var _b = _a, {
      colors: o
    } = _b, t = __objRest(_b, [
      "colors"
    ]);
    this.size = 11, this.outlineSize = 1, this.collisionPadding = 9, this.color = o.accent, this.outlineColor = o.outline, this.renderOccluded = h.Opaque, this.hoverOutlineColor = o.selectedOutline, u2(this, t);
  }
  applyColor(o) {
    this._apply(this.color, o);
  }
  applyOutline(o) {
    this._apply(this.outlineColor, o);
  }
  applyHoverOutline(o) {
    this._apply(this.hoverOutlineColor, o);
  }
  _apply(o, t) {
    t.setParameters({
      color: E(o),
      renderOccluded: this.renderOccluded
    });
  }
};
var w = class {
  constructor(_a) {
    var _b = _a, {
      colors: o
    } = _b, t = __objRest(_b, [
      "colors"
    ]);
    this.size = 40, this.height = 0.2, this.offset = 0.25, this.collisionPadding = 2, this.renderOccluded = h.Transparent, this.minSquaredEdgeLength = 900, this.color = R(o.accent, 0.5), this.hoverColor = o.accent, u2(this, t);
  }
  applyColor(o) {
    this._apply(this.color, o);
  }
  applyHover(o) {
    this._apply(this.hoverColor, o);
  }
  _apply(o, t) {
    t.setParameters({
      color: E(o),
      renderOccluded: this.renderOccluded
    });
  }
};
var C = class {
  constructor(o) {
    this.vertex = new f({
      colors: o,
      color: o.accent,
      outlineColor: o.outline
    }), this.edge = new f({
      colors: o,
      color: U(R(o.accent, 2 / 3), 0.5),
      outlineColor: R(o.outline, 0.5),
      size: 8,
      collisionPadding: 8
    }), this.selected = new f({
      colors: o,
      color: o.selected,
      outlineColor: o.outline
    }), this.edgeOffset = new w({
      colors: o
    });
  }
};
var m = class {
  constructor(_a) {
    var _b = _a, {
      colors: o
    } = _b, t = __objRest(_b, [
      "colors"
    ]);
    this.width = 1.5, this.stipplePattern = h2(3.3), this.falloff = 0, this.innerWidth = 1.5, this.renderOccluded = h.OccludeAndTransparent, this.color = o.selected, this.stippleOffColor = o.outline, this.innerColor = o.selected, u2(this, t);
  }
  apply(o) {
    o.color = E(this.color), o.width = this.width, o.stipplePattern = this.stipplePattern, o.stippleOffColor = E(this.stippleOffColor), o.falloff = this.falloff, o.innerWidth = this.innerWidth, o.innerColor = E(this.innerColor), o.renderOccluded = this.renderOccluded;
  }
};
var O = class {
  constructor(_a) {
    var _b = _a, {
      colors: o
    } = _b, t = __objRest(_b, [
      "colors"
    ]);
    this.size = 4, this.outlineSize = 1, this.shape = "square", this.color = o.selected, this.outlineColor = o.outline, u2(this, t);
  }
  apply(o) {
    o.color = E(this.color), o.size = this.size, o.outlineSize = this.outlineSize, o.outlineColor = E(this.outlineColor), o.primitive = this.shape;
  }
};
var y2 = class {
  constructor(_a) {
    var _b = _a, {
      colors: o
    } = _b, t = __objRest(_b, [
      "colors"
    ]);
    this.innerWidth = 1, this.glowWidth = 8, this.glowFalloff = 8, this.globalAlpha = d, this.globalAlphaContrastBoost = 1.5, this.radius = 3, this.innerColor = o.selected, this.glowColor = o.accent, this.heightFillColor = o.accent, u2(this, t);
  }
  apply(o, e2 = 1) {
    const l = {
      glowColor: u.toUnitRGB(this.glowColor),
      glowFalloff: this.glowFalloff,
      glowWidth: this.glowWidth,
      innerColor: u.toUnitRGB(this.innerColor),
      innerWidth: this.innerWidth,
      globalAlpha: this.globalAlpha * e2 * this.glowColor.a,
      globalAlphaContrastBoost: this.globalAlphaContrastBoost,
      intersectsLineRadius: this.radius
    };
    "style" in o ? o.style = l : o.laserlineStyle = l;
  }
};
var A = class {
  constructor(o) {
    this.outline = new m({
      colors: o,
      color: o.stippleOff,
      renderOccluded: h.OccludeAndTransparentStencil,
      stippleOffColor: o.stippleOn,
      innerWidth: 0
    }), this.staged = new m({
      colors: o,
      color: o.stippleOn,
      renderOccluded: h.OccludeAndTransparentStencil,
      innerColor: o.stagedSolid,
      stippleOffColor: o.stippleOff
    }), this.shadowStyle = new y2({
      colors: o,
      globalAlpha: d,
      glowColor: o.accent,
      glowFalloff: 8,
      glowWidth: 8,
      innerColor: o.selected,
      innerWidth: 1
    });
  }
};
var W = class {
  constructor(o) {
    this.outline = new O({
      colors: o,
      color: o.selected,
      outlineColor: o.outline,
      outlineSize: 1,
      shape: "circle",
      size: 4
    }), this.shadowStyle = new y2({
      colors: o,
      globalAlpha: d,
      glowColor: o.accent,
      glowFalloff: 1.5,
      glowWidth: 6,
      innerColor: o.selected,
      innerWidth: 1,
      radius: 2
    });
  }
};
var b = class extends m {
  constructor(_a) {
    var _b2 = _a, {
      colors: o
    } = _b2, t = __objRest(_b2, [
      "colors"
    ]);
    super({
      colors: o
    }), this.extensionType = M.GROUND_RAY, u2(this, t);
  }
};
var S2 = class {
  constructor(o) {
    this.laserlineAlphaMultiplier = 1.5, this.heightPlaneAngleCutoff = 20, this.lineObjects = new A(o), this.pointObjects = new W(o), this.heightPlane = new y2({
      colors: o,
      globalAlpha: d,
      glowColor: o.accent,
      glowFalloff: 8,
      glowWidth: 8,
      innerColor: o.selected,
      innerWidth: 1
    }), this.heightBox = new y2({
      colors: o,
      globalAlpha: d,
      glowColor: o.accent,
      glowFalloff: 8,
      glowWidth: 8,
      innerColor: o.selected,
      innerWidth: 0,
      heightFillColor: o.accent
    }), this.zVerticalLine = new b({
      colors: o,
      color: R(o.accent, 5 * d / 3),
      falloff: 2,
      innerColor: R(o.selected, 0),
      renderOccluded: h.OccludeAndTransparent,
      stipplePattern: null,
      width: 5,
      extensionType: M.GROUND_RAY
    });
  }
};
var j = class extends S {
  constructor(o) {
    super(o);
  }
  get colors() {
    const o = this.getTheme().accentColor, e2 = o.a;
    return {
      accent: o,
      contrast: G(o),
      selected: u.fromArray([255, 255, 255, e2]),
      selectedOutline: u.fromArray([255, 255, 255, e2]),
      staged: u.fromArray([12, 207, 255, e2]),
      stagedSolid: u.fromArray([12, 207, 255, 1]),
      outline: u.fromArray([0, 0, 0, 0.5 * e2]),
      stippleOn: u.fromArray([255, 255, 255, 1]),
      stippleOff: u.fromArray([0, 0, 0, 0.5])
    };
  }
  get visualElements() {
    return new S2(this.colors);
  }
  get manipulators() {
    return new C(this.colors);
  }
  get zManipulator() {
    return new g(this.colors);
  }
};
e([y()], j.prototype, "colors", null), e([y()], j.prototype, "visualElements", null), e([y()], j.prototype, "manipulators", null), e([y()], j.prototype, "zManipulator", null), e([y()], j.prototype, "getTheme", void 0), j = e([a("esri.views.3d.interactive.editingTools.settings")], j);

export {
  j
};
//# sourceMappingURL=chunk-XJ3IF5WI.js.map
