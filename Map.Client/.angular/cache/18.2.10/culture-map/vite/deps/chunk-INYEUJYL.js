import {
  e as e9
} from "./chunk-YF63GM43.js";
import {
  L as L2
} from "./chunk-OMJYNM3Z.js";
import {
  l as l7
} from "./chunk-JXZY6SQ6.js";
import {
  c as c8,
  r as r5
} from "./chunk-VKFHARPM.js";
import {
  i as i4,
  n as n11
} from "./chunk-FLWLBYXO.js";
import {
  o as o9
} from "./chunk-F2TT4B6M.js";
import {
  d as d4
} from "./chunk-5KKZ52BZ.js";
import {
  g as g7
} from "./chunk-R5KR44YC.js";
import {
  p2
} from "./chunk-SLXFHEHV.js";
import {
  g as g6,
  l as l6
} from "./chunk-6HTAUV5K.js";
import {
  _ as _3,
  t2 as t5
} from "./chunk-2ERGO64O.js";
import {
  t as t6
} from "./chunk-TDWXQPNS.js";
import {
  o as o8
} from "./chunk-3JEG7JG5.js";
import {
  e as e8
} from "./chunk-HBMA4SRU.js";
import {
  t as t4
} from "./chunk-BAAB562I.js";
import {
  c as c7,
  l as l5,
  n as n10
} from "./chunk-5APMY2AQ.js";
import {
  s as s4
} from "./chunk-O7ZVERIH.js";
import {
  h as h2
} from "./chunk-PVO5NM6Q.js";
import {
  v as v3
} from "./chunk-N3IR233K.js";
import {
  l as l4
} from "./chunk-KKD7A2GN.js";
import {
  b as b2
} from "./chunk-TRSGUVSM.js";
import {
  i
} from "./chunk-CIW3KHOW.js";
import {
  n as n9
} from "./chunk-ZACL2JP7.js";
import {
  l as l3
} from "./chunk-L3T5PF4P.js";
import {
  n as n8
} from "./chunk-6A7CWJED.js";
import {
  J,
  K,
  W,
  _ as _2
} from "./chunk-DUTZNK67.js";
import {
  c as c4,
  l as l2
} from "./chunk-JM7HAEY6.js";
import {
  c as c5
} from "./chunk-DR5TVNEL.js";
import {
  u as u3
} from "./chunk-K226GFDN.js";
import {
  c as c6
} from "./chunk-7ZJ6P7J7.js";
import {
  n as n7
} from "./chunk-VDB6Y4TZ.js";
import {
  B,
  e as e4,
  e2 as e5,
  i as i2,
  n as n4,
  o as o7
} from "./chunk-WYMXVOAT.js";
import {
  n as n6
} from "./chunk-K7TO5IIO.js";
import {
  i as i3
} from "./chunk-A4VVDRCH.js";
import {
  g as g3
} from "./chunk-CQDYITZC.js";
import {
  o as o6,
  r as r4
} from "./chunk-CVB43GGP.js";
import {
  m as m3
} from "./chunk-BDM2D6IC.js";
import {
  m as m2,
  n as n5
} from "./chunk-EDSMXTFO.js";
import {
  c as c3,
  f
} from "./chunk-MNLT652N.js";
import {
  t as t3,
  w as w2
} from "./chunk-NYQ5CYNR.js";
import {
  d as d3,
  g as g4
} from "./chunk-O7UDKFOW.js";
import {
  f as f2
} from "./chunk-TKPMIAIW.js";
import {
  s as s3
} from "./chunk-NKCPFCP3.js";
import {
  e as e7,
  h
} from "./chunk-3ZXOUEQG.js";
import {
  g as g5
} from "./chunk-AXVPJBVW.js";
import {
  e as e6
} from "./chunk-POILQGXA.js";
import {
  G
} from "./chunk-JJS7PR2U.js";
import {
  A as A3,
  C,
  P,
  d as d2,
  p,
  v as v2,
  w
} from "./chunk-6WHTZNUH.js";
import {
  V
} from "./chunk-EITGQLII.js";
import {
  _,
  d
} from "./chunk-XNUH25NY.js";
import {
  o as o5
} from "./chunk-WGAPNV7F.js";
import {
  e as e3
} from "./chunk-4Z5SGKRM.js";
import {
  A as A2,
  S as S2,
  a,
  c as c2,
  o2 as o,
  r,
  t4 as t,
  v
} from "./chunk-ANKOCGE2.js";
import {
  o as o2,
  y
} from "./chunk-7CJXZOFG.js";
import {
  n as n2,
  r as r2,
  t as t2
} from "./chunk-IRGZKO7V.js";
import {
  a3 as a2,
  n as n3,
  r2 as r3
} from "./chunk-DDYVXG4F.js";
import {
  A,
  E,
  L,
  S,
  b,
  c2 as c,
  g as g2,
  m,
  o as o3,
  o2 as o4,
  s as s2,
  u as u2
} from "./chunk-HJY2YILU.js";
import {
  e as e2
} from "./chunk-7DA6A5LD.js";
import {
  e,
  l,
  u
} from "./chunk-2MMLMOWS.js";
import {
  n2 as n,
  s2 as s
} from "./chunk-WYIDUUN2.js";
import {
  O,
  g,
  has
} from "./chunk-DXLOWWK7.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/views/BreakpointsOwner.js
var l8 = {
  widthBreakpoint: {
    getValue(e16) {
      const i15 = e16.viewSize[0], s17 = e16.breakpoints, a14 = this.values;
      return i15 <= s17.xsmall ? a14.xsmall : i15 <= s17.small ? a14.small : i15 <= s17.medium ? a14.medium : i15 <= s17.large ? a14.large : a14.xlarge;
    },
    values: {
      xsmall: "xsmall",
      small: "small",
      medium: "medium",
      large: "large",
      xlarge: "xlarge"
    },
    valueToClassName: {
      xsmall: "esri-view-width-xsmall esri-view-width-less-than-small esri-view-width-less-than-medium esri-view-width-less-than-large esri-view-width-less-than-xlarge",
      small: "esri-view-width-small esri-view-width-greater-than-xsmall esri-view-width-less-than-medium esri-view-width-less-than-large esri-view-width-less-than-xlarge",
      medium: "esri-view-width-medium esri-view-width-greater-than-xsmall esri-view-width-greater-than-small esri-view-width-less-than-large esri-view-width-less-than-xlarge",
      large: "esri-view-width-large esri-view-width-greater-than-xsmall esri-view-width-greater-than-small esri-view-width-greater-than-medium esri-view-width-less-than-xlarge",
      xlarge: "esri-view-width-xlarge esri-view-width-greater-than-xsmall esri-view-width-greater-than-small esri-view-width-greater-than-medium esri-view-width-greater-than-large"
    }
  },
  heightBreakpoint: {
    getValue(e16) {
      const i15 = e16.viewSize[1], s17 = e16.breakpoints, a14 = this.values;
      return i15 <= s17.xsmall ? a14.xsmall : i15 <= s17.small ? a14.small : i15 <= s17.medium ? a14.medium : i15 <= s17.large ? a14.large : a14.xlarge;
    },
    values: {
      xsmall: "xsmall",
      small: "small",
      medium: "medium",
      large: "large",
      xlarge: "xlarge"
    },
    valueToClassName: {
      xsmall: "esri-view-height-xsmall esri-view-height-less-than-small esri-view-height-less-than-medium esri-view-height-less-than-large esri-view-height-less-than-xlarge",
      small: "esri-view-height-small esri-view-height-greater-than-xsmall esri-view-height-less-than-medium esri-view-height-less-than-large esri-view-height-less-than-xlarge",
      medium: "esri-view-height-medium esri-view-height-greater-than-xsmall esri-view-height-greater-than-small esri-view-height-less-than-large esri-view-height-less-than-xlarge",
      large: "esri-view-height-large esri-view-height-greater-than-xsmall esri-view-height-greater-than-small esri-view-height-greater-than-medium esri-view-height-less-than-xlarge",
      xlarge: "esri-view-height-xlarge esri-view-height-greater-than-xsmall esri-view-height-greater-than-small esri-view-height-greater-than-medium esri-view-height-greater-than-large"
    }
  },
  orientation: {
    getValue(e16) {
      const i15 = e16.viewSize, s17 = i15[0], a14 = i15[1], t17 = this.values;
      return a14 >= s17 ? t17.portrait : t17.landscape;
    },
    values: {
      portrait: "portrait",
      landscape: "landscape"
    },
    valueToClassName: {
      portrait: "esri-view-orientation-portrait",
      landscape: "esri-view-orientation-landscape"
    }
  }
};
var h3 = {
  xsmall: 544,
  small: 768,
  medium: 992,
  large: 1200
};
function n12(e16) {
  const i15 = e16;
  return i15 && i15.xsmall < i15.small && i15.small < i15.medium && i15.medium < i15.large;
}
function m4(e16, i15) {
  return i15 ? l8[e16].valueToClassName[i15].split(" ") : [];
}
var o10 = (o22) => {
  let g14 = class extends o22 {
    constructor(...e16) {
      super(...e16), this.orientation = null, this.widthBreakpoint = null, this.heightBreakpoint = null, this.breakpoints = h3;
    }
    initialize() {
      this.addHandles(d2(() => [this.breakpoints, this.size], () => this._updateClassNames(), P));
    }
    destroy() {
      this.destroyed || this._removeActiveClassNames();
    }
    set breakpoints(e16) {
      if (e16 === this._get("breakpoints")) return;
      if (!n12(e16)) {
        const i15 = JSON.stringify(h3, null, 2);
        console.warn("provided breakpoints are not valid, using defaults:" + i15), e16 = h3;
      }
      this._set("breakpoints", __spreadValues({}, e16));
    }
    _updateClassNames() {
      if (!this.container) return;
      const e16 = t.acquire(), s17 = t.acquire();
      let a14, t17 = false;
      for (a14 in l8) {
        const i15 = this[a14], r15 = l8[a14].getValue({
          viewSize: this.size,
          breakpoints: this.breakpoints
        });
        i15 !== r15 && (t17 = true, this[a14] = r15, m4(a14, i15).forEach((e17) => s17.push(e17)), m4(a14, r15).forEach((i16) => e16.push(i16)));
      }
      t17 && (this._applyClassNameChanges(e16, s17), t.release(e16), t.release(s17));
    }
    _applyClassNameChanges(e16, i15) {
      const s17 = this.container;
      s17 && (i15.forEach((e17) => s17.classList.remove(e17)), e16.forEach((e17) => s17.classList.add(e17)));
    }
    _removeActiveClassNames() {
      const e16 = this.container;
      if (!e16) return;
      let i15;
      for (i15 in l8) m4(i15, this[i15]).forEach((i16) => e16.classList.remove(i16));
    }
  };
  return e3([y()], g14.prototype, "breakpoints", null), e3([y()], g14.prototype, "orientation", void 0), e3([y()], g14.prototype, "widthBreakpoint", void 0), e3([y()], g14.prototype, "heightBreakpoint", void 0), g14 = e3([a2("esri.views.BreakpointsOwner")], g14), g14;
};

// ../../../node_modules/@arcgis/core/views/overlay/ViewOverlay.js
var a3 = class extends S2 {
  constructor() {
    super(...arguments), this.items = new V(), this._watchUpdatingTracking = new h2(), this._callbacks = /* @__PURE__ */ new Map(), this._projector = i3(), this._hiddenProjector = i3();
  }
  get needsRender() {
    return this.items.length > 0;
  }
  get updating() {
    return this._watchUpdatingTracking?.updating ?? false;
  }
  initialize() {
    const t17 = document.createElement("div");
    t17.className = "esri-overlay-surface", this._set("surface", t17), this._hiddenSurface = document.createElement("div"), this._hiddenSurface.setAttribute("style", "visibility: hidden;"), t17.appendChild(this._hiddenSurface), this._watchUpdatingTracking.addOnCollectionChange(() => this.items, (t18) => {
      for (const e16 of t18.added) {
        const t19 = () => e16.render();
        this._callbacks.set(e16, t19), this._projector.append(this.surface, t19);
      }
      for (const e16 of t18.removed) {
        const t19 = this._projector.detach(this._callbacks.get(e16));
        this.surface.removeChild(t19.domNode), this._callbacks.delete(e16);
      }
    });
  }
  addItem(t17) {
    this.items.add(t17);
  }
  removeItem(t17) {
    this.items.remove(t17);
  }
  destroy() {
    this.items.removeAll(), this._callbacks.forEach((t17) => this._projector.detach(t17)), this._callbacks = null, this._projector = null, this._watchUpdatingTracking.destroy();
  }
  render() {
    this._projector.renderNow();
  }
  computeBoundingRect(t17) {
    const e16 = this._hiddenSurface, o22 = this._hiddenProjector;
    let r15;
    const s17 = () => (r15 = t17.render(), r15);
    o22.append(e16, s17), o22.renderNow();
    const i15 = {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0
    };
    if (r15?.domNode) {
      const t18 = r15.domNode.getBoundingClientRect();
      i15.left = t18.left, i15.top = t18.top, i15.right = t18.right, i15.bottom = t18.bottom;
    }
    for (o22.detach(s17); e16.firstChild; ) e16.removeChild(e16.firstChild);
    return i15;
  }
  overlaps(t17, e16) {
    const o22 = this.computeBoundingRect(t17), r15 = this.computeBoundingRect(e16);
    return Math.max(o22.left, r15.left) <= Math.min(o22.right, r15.right) && Math.max(o22.top, r15.top) <= Math.min(o22.bottom, r15.bottom);
  }
  get hasVisibleItems() {
    return this.items.some((t17) => t17.visible);
  }
  prepare() {
    return __async(this, null, function* () {
      yield document.fonts.load(this._fontString()).catch(() => {
      });
    });
  }
  renderCanvas(t17, e16) {
    const o22 = !!e16?.disableDecorations;
    if (!this.items.some((t18) => t18.visible && !(o22 && t18.isDecoration))) return;
    const r15 = t17.getContext("2d");
    r15.save(), r15.font = this._fontString(), this.items.forEach((t18) => {
      o22 && t18.isDecoration || (r15.save(), t18.renderCanvas(r15), r15.restore());
    }), r15.restore();
  }
  _fontString() {
    return `10px ${getComputedStyle(this.surface).fontFamily}`;
  }
};
e3([y({
  readOnly: true
})], a3.prototype, "surface", void 0), e3([y({
  readOnly: true
})], a3.prototype, "items", void 0), e3([y({
  readOnly: true
})], a3.prototype, "needsRender", null), e3([y({
  readOnly: true
})], a3.prototype, "_watchUpdatingTracking", void 0), e3([y({
  readOnly: true
})], a3.prototype, "updating", null), a3 = e3([a2("esri.views.overlay.ViewOverlay")], a3);
var c9 = a3;

// ../../../node_modules/@arcgis/core/views/DOMContainer.js
var m5 = [0, 0];
function f3(e16) {
  const t17 = (e16.ownerDocument || window.document).defaultView, s17 = e16.getBoundingClientRect();
  return m5[0] = s17.left + (t17?.pageXOffset ?? 0), m5[1] = s17.top + (t17?.pageYOffset ?? 0), m5;
}
function g8(e16) {
  e16 && (n4(e16), e16.parentNode && e16.parentNode.removeChild(e16));
}
function y2(e16) {
  const t17 = document.createElement("div");
  return e16.appendChild(t17), t17;
}
var _4 = 16;
var v4 = 750;
var w3 = 512;
var C2 = 2;
var H = (i15) => {
  let m13 = class extends i15 {
    constructor(...e16) {
      super(...e16), this._freqInfo = {
        freq: _4,
        time: v4
      }, this._overlayRenderTaskHandle = null, this.height = 0, this.messagesCommon = null, this.overlay = null, this.position = null, this.resizing = false, this.root = null, this.surface = null, this.suspended = true, this.ui = null, this.userContent = null, this.width = 0, this.widthBreakpoint = null, this.addHandles([d2(() => this.cursor, (e17) => {
        const {
          surface: t17
        } = this;
        t17 && t17.setAttribute("data-cursor", e17);
      }), d2(() => this.navigating, (e17) => {
        const {
          surface: t17
        } = this;
        t17 && t17.setAttribute("data-navigating", e17.toString());
      })]);
    }
    initialize() {
      this.addHandles([d2(() => this.ui, (e16, t17) => this._handleUIChange(e16, t17), P), this.on("focus", () => this.notifyChange("focused")), this.on("blur", () => this.notifyChange("focused"))]);
    }
    destroy() {
      this.destroyed || (this.ui = u(this.ui), this.container = null);
    }
    get container() {
      return this._get("container") ?? null;
    }
    set container(e16) {
      const i16 = this._get("container"), r15 = e4(e16);
      if (r15 || "string" != typeof e16 || n.getLogger(this).error("#container", `element with id '${e16}' not found`), i16 === r15) return;
      if (this._stopMeasuring(), i16 && (i16.classList.remove("esri-view"), this._overlayRenderTaskHandle && (this._overlayRenderTaskHandle.remove(), this._overlayRenderTaskHandle = null), this.overlay && (this.overlay.destroy(), this._set("overlay", null)), this.root && (g8(this.root), this._set("root", null)), this.userContent && (i2(this.userContent, i16), g8(this.userContent), this._set("userContent", null))), !r15) return this._set("width", 0), this._set("height", 0), this._set("position", null), this._set("suspended", true), this._set("surface", null), void this._set("container", null);
      r15.classList.add("esri-view");
      const n23 = document.createElement("div");
      n23.className = "esri-view-user-storage", i2(r15, n23), r15.appendChild(n23), this._set("userContent", n23);
      const d11 = document.createElement("div");
      d11.className = "esri-view-root", r15.insertBefore(d11, r15.firstChild), this._set("root", d11);
      const u9 = document.createElement("div");
      u9.className = "esri-view-surface", u9.setAttribute("role", "application"), u9.tabIndex = 0, d11.appendChild(u9), this._set("surface", u9);
      const c18 = new c9();
      d11.appendChild(c18.surface), this._set("overlay", c18), this.addHandles(d2(() => c18.needsRender, (e17) => {
        e17 && !this._overlayRenderTaskHandle ? this._overlayRenderTaskHandle = A2({
          render: () => this.overlay?.render()
        }) : this._overlayRenderTaskHandle = l(this._overlayRenderTaskHandle);
      })), this.forceDOMReadyCycle(), this._set("container", r15), this._startMeasuring();
    }
    get focused() {
      const e16 = document.activeElement === this.surface;
      return document.hasFocus() && e16;
    }
    get size() {
      return [this.width, this.height];
    }
    blur() {
      this.surface?.blur();
    }
    focus() {
      this.surface?.focus();
    }
    pageToContainer(e16, t17, s17) {
      const i16 = this.position;
      return e16 -= i16 ? i16[0] : 0, t17 -= i16 ? i16[1] : 0, s17 ? (s17[0] = e16, s17[1] = t17) : s17 = [e16, t17], s17;
    }
    containerToPage(e16, t17, s17) {
      const i16 = this.position;
      return e16 += i16 ? i16[0] : 0, t17 += i16 ? i16[1] : 0, s17 ? (s17[0] = e16, s17[1] = t17) : s17 = [e16, t17], s17;
    }
    _handleUIChange(e16, t17) {
      this.removeHandles("ui"), t17 && t17 !== e16 && t17.destroy(), e16 && (e16.view = this, this.addHandles(d2(() => this.root, (t18) => {
        e16.container = t18 ? y2(t18) : null;
      }, P), "ui")), this._set("ui", e16);
    }
    _stopMeasuring() {
      this.removeHandles("measuring"), this._get("resizing") && this._set("resizing", false);
    }
    _startMeasuring() {
      const e16 = this._freqInfo;
      e16.freq = _4, e16.time = v4, this.addHandles([o4(window, "resize", () => {
        e16.freq = _4, e16.time = v4;
      }), A2({
        prepare: (e17) => {
          const t17 = this._measure(), s17 = this._freqInfo;
          if (s17.time += e17.deltaTime, t17 && (s17.freq = _4, this._get("resizing") || this._set("resizing", true)), s17.time < s17.freq) return;
          s17.time = 0;
          const i16 = this._position();
          s17.freq = i16 || t17 ? _4 : Math.min(v4, s17.freq * C2), !t17 && s17.freq >= w3 && this._get("resizing") && this._set("resizing", false);
        }
      })], "measuring"), this._measure(), this._position();
    }
    _measure() {
      const e16 = this.container, t17 = e16 ? e16.clientWidth : 0, s17 = e16 ? e16.clientHeight : 0;
      if (0 === t17 || 0 === s17) return this.suspended || this._set("suspended", true), false;
      const i16 = this.width, r15 = this.height;
      return t17 === i16 && s17 === r15 ? (this.suspended && this._set("suspended", false), false) : (this._set("width", t17), this._set("height", s17), this.suspended && this._set("suspended", false), this.emit("resize", {
        oldWidth: i16,
        oldHeight: r15,
        width: t17,
        height: s17
      }), true);
    }
    _position() {
      const e16 = this.container, t17 = this.position, s17 = e16 && f3(e16);
      return !!s17 && (!t17 || s17[0] !== t17[0] || s17[1] !== t17[1]) && (this._set("position", [s17[0], s17[1]]), true);
    }
    forceDOMReadyCycle() {
    }
  };
  return e3([y()], m13.prototype, "container", null), e3([y({
    readOnly: true
  })], m13.prototype, "focused", null), e3([y({
    readOnly: true
  })], m13.prototype, "height", void 0), e3([y()], m13.prototype, "messagesCommon", void 0), e3([y({
    type: c9
  })], m13.prototype, "overlay", void 0), e3([y({
    readOnly: true
  })], m13.prototype, "position", void 0), e3([y({
    readOnly: true
  })], m13.prototype, "resizing", void 0), e3([y({
    readOnly: true
  })], m13.prototype, "root", void 0), e3([y({
    value: null,
    readOnly: true
  })], m13.prototype, "size", null), e3([y({
    readOnly: true
  })], m13.prototype, "surface", void 0), e3([y({
    readOnly: true
  })], m13.prototype, "suspended", void 0), e3([y()], m13.prototype, "ui", void 0), e3([y({
    readOnly: true
  })], m13.prototype, "userContent", void 0), e3([y({
    readOnly: true
  })], m13.prototype, "width", void 0), e3([y()], m13.prototype, "widthBreakpoint", void 0), m13 = e3([a2("esri.views.DOMContainer")], m13), m13;
};

// ../../../node_modules/@arcgis/core/views/PopupView.js
function m6(e16) {
  return null != e16 && "open" in e16 && "declaredClass" in e16;
}
function f4(e16) {
  return null != e16 && "declaredClass" in e16 && "dockOptions" in e16;
}
var y3 = (n23) => {
  let y8 = class extends n23 {
    constructor() {
      super(...arguments), this._popupSetupTask = null, this.popup = {}, this.popupEnabled = true;
    }
    initialize() {
      this.addHandles([d2(() => [this.ui, this.popup], ([e16, p16], t17) => {
        const o22 = "popup", i15 = "manual";
        if (t17) {
          const [e17, p17] = t17;
          e17 && m6(p17) && (p17.view = null, f4(p17) && e17.remove(p17, o22));
        }
        e16 && m6(p16) && (p16.view = this, f4(p16) && e16.add(p16, {
          key: o22,
          position: i15,
          internal: true
        }));
      }, P), this.on("click", (e16) => {
        this.popup && this.popupEnabled && ("mouse" !== e16.pointerType || 0 === e16.button) && (m6(this.popup) ? this.popup.viewModel.handleViewClick(e16) : e16.async(() => __async(this, null, function* () {
          yield this.setupPopup(), m6(this.popup) && !this.destroyed && this.ready && this.popupEnabled && this.popup.viewModel.handleViewClick(e16);
        })));
      }, _3.WIDGET)]), w(() => this.ready && this.popupEnabled && !this.updating).then(() => {
        import("./Popup-724S6MQU.js");
      });
    }
    destroy() {
      this.destroyed || this.closePopup();
    }
    openPopup(e16) {
      return __async(this, null, function* () {
        if (m6(this.popup)) return this.popup.open(e16);
        try {
          if (yield this.setupPopup(), !this.popup) return void n.getLogger(this).error(new s("view:null-popup", "Popup is null and can't be opened"));
          this.popup.open(e16);
        } catch {
        }
      });
    }
    closePopup() {
      this._popupSetupTask?.abort(), m6(this.popup) && this.popup.close();
    }
    fetchPopupFeatures(e16, p16) {
      return __async(this, null, function* () {
        return yield this.when(), this._popupHitsToFeatures(yield this._getPopupHits(e16, p16), p16);
      });
    }
    setupPopup() {
      return __async(this, null, function* () {
        if (this._popupSetupTask?.abort(), this.popup && !m6(this.popup)) return this._popupSetupTask = d((e16) => __async(this, null, function* () {
          const {
            default: p16
          } = yield import("./Popup-724S6MQU.js");
          if (s2(e16), !this.popup || m6(this.popup)) return;
          const t17 = this.popup;
          delete t17.open, delete t17.close, this.popup = new p16(t17);
        })), this._popupSetupTask.promise;
      });
    }
    _popupHitsToFeatures(_0, _1) {
      return __async(this, arguments, function* ({
        location: e16,
        hits: p16
      }, t17) {
        const o22 = [], i15 = [];
        let s17 = false;
        const n24 = E(t17, has("popup-view-fetch-timeout") ?? P2), u9 = (e17) => {
          const p17 = new g9(e17);
          return i15.push(p17), o22.push(p17.promise), p17;
        }, c18 = (e17) => {
          const p17 = i15.at(-1);
          return p17 && p17.layerView === e17 && !s17 ? p17 : u9(e17);
        };
        for (const r15 of p16) if ("graphic" in r15) {
          c18(r15.layerView).graphics.push(r15.graphic), s17 = false;
        } else o22.push(r15.layerView.fetchPopupFeaturesAtLocation(r15.mapPoint, n24)), s17 = true;
        i15.map((e17) => e17.resolve(n24));
        const l14 = g2(o22).then((e17) => e17.filter((e18) => !!e18).flat());
        return {
          pendingFeatures: o22,
          allGraphicsPromise: l14,
          location: e16
        };
      });
    }
    _getPopupHits(e16, p16) {
      return __async(this, null, function* () {
        const {
          hits: t17,
          location: o22
        } = yield this.popupHitTest(e16);
        s2(p16);
        const i15 = [];
        for (const s17 of t17) if ("graphic" in s17) {
          if (this._isValidPopupGraphic(s17.graphic, p16)) {
            const e17 = this._isValidPopupGraphicsLayerView(s17.layerView) ? s17.layerView : void 0;
            i15.push({
              graphic: s17.graphic,
              layerView: e17
            });
          }
        } else this._isValidPopupLocationLayerView(s17.layerView) && i15.push({
          mapPoint: s17.mapPoint,
          layerView: s17.layerView
        });
        return {
          hits: i15,
          location: o22
        };
      });
    }
    _isValidPopupGraphic(e16, p16) {
      return e16 && !!e16.getEffectivePopupTemplate(p16?.defaultPopupTemplateEnabled);
    }
    _isValidPopupGraphicsLayerView(e16) {
      return !e16 || (!("layer" in e16) || !e16.suspended) && "fetchPopupFeaturesFromGraphics" in e16;
    }
    _isValidPopupLocationLayerView(e16) {
      return (!("layer" in e16) || !e16.suspended) && "fetchPopupFeaturesAtLocation" in e16;
    }
  };
  return e3([y({
    cast(e16) {
      return !e16 || m6(e16) || "object" == typeof e16 && (e16.open = (e17) => (a(n.getLogger(this), "view.popup is no longer created by default. view.popup.open() will stop working when the popup isn't created", {
        replacement: "Use view.openPopup() instead.",
        version: "4.27"
      }), this.openPopup(e17)), e16.close = () => (a(n.getLogger(this), "view.popup is no longer created by default. view.popup.close() will stop working when the popup isn't created", {
        replacement: "Use view.closePopup() instead.",
        version: "4.27"
      }), this.closePopup())), e16;
    }
  })], y8.prototype, "popup", void 0), e3([y()], y8.prototype, "popupEnabled", void 0), y8 = e3([a2("esri.views.PopupView")], y8), y8;
};
var g9 = class {
  constructor(e16) {
    this.layerView = e16, this._resolver = L(), this.graphics = [];
  }
  get promise() {
    return this._resolver.promise;
  }
  resolve(e16) {
    const {
      layerView: p16,
      graphics: t17,
      _resolver: o22
    } = this;
    if (!p16) return o22.resolve(t17), o22.promise;
    let i15;
    return p16.fetchPopupFeaturesFromGraphics(t17, e16).catch((e17) => (i15 = e17, null)).then((e17) => {
      e17 ? o22.resolve(e17) : o22.reject(i15);
    }), o22.promise;
  }
};
var P2 = 5e3;

// ../../../node_modules/@arcgis/core/support/AnalysesCollection.js
var t7 = class extends n10 {
  constructor(e16) {
    super(e16), this.addHandles(this.on("before-add", (e17) => {
      null != e17.item && e17.item.parent === this.owner && (n.getLogger(this).warn("Analysis inside the collection must be unique. Not adding this element again."), e17.preventDefault());
    }));
  }
  _own(e16) {
    e16.parent = this.owner;
  }
  _release(e16) {
    e16.parent = null;
  }
};
t7 = e3([a2("esri.support.AnalysesCollection")], t7);

// ../../../node_modules/@arcgis/core/views/BasemapView.js
var n13 = class extends S2 {
  constructor(e16) {
    super(e16), this.view = null, this.baseLayerViews = new V(), this.referenceLayerViews = new V(), this._loadingHandle = d2(() => this.view?.map?.basemap, (e17) => {
      e17 && e17.load().catch(() => {
      });
    }, P);
  }
  destroy() {
    this._set("view", null), this._loadingHandle && (this._loadingHandle.remove(), this._loadingHandle = null);
    for (const e16 of this.baseLayerViews) e16.destroy();
    this.baseLayerViews.length = 0;
    for (const e16 of this.referenceLayerViews) e16.destroy();
    this.referenceLayerViews.length = 0;
  }
  get suspended() {
    return !this.view || this.view.suspended;
  }
  get updating() {
    if (this.view?.suspended) return false;
    const e16 = this.view?.map?.basemap;
    return !!e16 && !!e16.loaded && (this.baseLayerViews.some((e17) => e17.updating) || this.referenceLayerViews.some((e17) => e17.updating));
  }
};
e3([y({
  constructOnly: true
})], n13.prototype, "view", void 0), e3([y({
  readOnly: true
})], n13.prototype, "baseLayerViews", void 0), e3([y({
  readOnly: true
})], n13.prototype, "referenceLayerViews", void 0), e3([y({
  readOnly: true
})], n13.prototype, "suspended", null), e3([y({
  type: Boolean,
  readOnly: true
})], n13.prototype, "updating", null), n13 = e3([a2("esri.views.BasemapView")], n13);

// ../../../node_modules/@arcgis/core/views/LayerViewManager.js
function V2(e16) {
  return "tryRecycleWith" in e16;
}
function v5(e16) {
  return null != e16 && "object" == typeof e16 && "layerViews" in e16;
}
var L3 = class {
  constructor(e16, r15, t17) {
    this.layer = e16, this.view = r15, this.layerViewImporter = t17, this._controller = new AbortController(), this._deferred = L(), this._started = false, this.done = false, this.promise = this._deferred.promise, m(this._controller.signal, () => {
      const r16 = new s("cancelled:layerview-create", "layerview creation cancelled", {
        layer: e16
      });
      this._deferred.reject(r16);
    });
  }
  tryRecycle(e16) {
    if (!this.done || !this.layerView || !V2(this.layerView)) return null;
    const r15 = this.layer.type, i15 = this._controller.signal;
    for (let t17 = 0; t17 < e16.length; t17++) {
      const s17 = e16[t17];
      if (s17.type !== r15) continue;
      const a14 = this.layerView.tryRecycleWith(s17, {
        signal: i15
      });
      if (a14) {
        e16.splice(t17, 1), this.layer = s17;
        const r16 = this.layerView, i16 = r16.view;
        return this.promise = Promise.race([a14.then(() => (s2(this._controller.signal), s17.emit("layerview-destroy", {
          view: i16,
          layerView: r16
        }), i16.emit("layerview-destroy", {
          view: i16,
          layerView: r16
        }), s17.emit("layerview-create", {
          view: i16,
          layerView: r16
        }), i16.emit("layerview-create", {
          view: i16,
          layerView: r16
        }), r16)), new Promise((e17, r17) => m(this._controller.signal, () => r17(u2())))]), this.promise;
      }
    }
    return null;
  }
  destroy() {
    this._controller.abort();
    const {
      layerView: e16
    } = this;
    if (e16) {
      const {
        layer: r15,
        view: i15
      } = this;
      r15.emit("layerview-destroy", {
        view: i15,
        layerView: e16
      }), i15.emit("layerview-destroy", {
        layer: r15,
        layerView: e16
      });
    }
    this.done = true, this.layer = null, this.layerView = null, this.view = null, this.layerViewImporter = null, this._map = null;
  }
  start() {
    return __async(this, null, function* () {
      if (this._started) return;
      this._started = true;
      const {
        _controller: {
          signal: e16
        },
        layer: r15,
        view: t17
      } = this;
      this._map = t17.map;
      try {
        let o22, l14;
        if (yield r15.load({
          signal: e16
        }), r15.prefetchResources && (yield r15.prefetchResources({
          signal: e16
        })), C3(r15)) o22 = yield r15.createLayerView(t17, {
          signal: e16
        });
        else {
          if (!this.layerViewImporter.hasLayerViewModule(r15)) throw new s("layer:view-not-supported", "No layerview implementation was found");
          const s17 = yield this.layerViewImporter.importLayerView(r15);
          s2(e16), o22 = "default" in s17 ? new s17.default({
            layer: r15,
            view: t17
          }) : new s17({
            layer: r15,
            view: t17
          });
        }
        const n23 = () => {
          l14 = l(l14), o22.destroyed || o22.destroy(), o22.layer = null, o22.parent = null, o22.view = null, this.done = true;
        };
        l14 = m(e16, n23), s2(e16);
        try {
          yield o22.when();
        } catch (s17) {
          throw n23(), s17;
        }
        const c18 = this._map?.allLayers?.includes(r15);
        if (!c18) return n23(), void this._deferred.reject(new s("view:no-layerview-for-layer", "The layer has been removed from the map", {
          layer: r15
        }));
        this.layerView = o22, r15.emit("layerview-create", {
          view: t17,
          layerView: o22
        }), t17.emit("layerview-create", {
          layer: r15,
          layerView: o22
        }), this.done = true, this._deferred.resolve(o22);
      } catch (s17) {
        r15.emit("layerview-create-error", {
          view: t17,
          error: s17
        }), t17.emit("layerview-create-error", {
          layer: r15,
          error: s17
        }), this.done = true, this._deferred.reject(new s("layerview:create-error", "layerview creation failed", {
          layer: r15,
          error: s17
        }));
      }
    });
  }
};
var M = class extends S2 {
  constructor(e16) {
    super(e16), this._layerLayerViewInfoMap = /* @__PURE__ */ new Map(), this._recyclingInfoMap = /* @__PURE__ */ new Map(), this._watchUpdatingTracking = new h2(), this.supportsGround = true, this._preloadLayerViewModules = () => {
      const e17 = this.view.map?.allLayers;
      if (e17) for (const r15 of e17) this.layerViewImporter.hasLayerViewModule(r15) && this.layerViewImporter.importLayerView(r15);
    }, this._reschedule = () => this.destroyed ? Promise.reject() : (null == this._workPromise && (this._workPromise = L(), this._workPromise.promise.catch(() => {
    })), this.removeHandles("reschedule"), this.addHandles(v(this._doWork), "reschedule"), this._workPromise.promise), this._doWork = () => {
      if (this.destroyed) return;
      const e17 = this.view.map;
      if (this._map !== e17 && (this.clear(), this._map = e17), null == this._workPromise) return void this.notifyChange("updating");
      this.removeHandles("reschedule"), this.removeHandles("collection-change");
      const r15 = /* @__PURE__ */ new Set(), i15 = [], t17 = this.view.ready, s17 = (e18) => {
        if (null != e18) {
          for (const a15 of e18) if (a15) {
            r15.add(a15);
            const e19 = this._layerLayerViewInfoMap.get(a15);
            e19 && t17 ? e19.start() : e19 || this._recyclingInfoMap.has(a15) || i15.push(a15), "layers" in a15 && a15.layers && s17(a15.layers);
          }
        }
      };
      for (const o22 of this._rootCollectionNames) s17(o2(this, o22));
      for (const [o22, l14] of this._layerLayerViewInfoMap) if (!r15.has(o22)) {
        this._layerLayerViewInfoMap.delete(l14.layer);
        const e18 = l14.tryRecycle(i15);
        e18 ? (this.notifyChange("updating"), this._recyclingInfoMap.set(l14.layer, l14), e18.then(() => {
          this.notifyChange("updating"), this._recyclingInfoMap.delete(l14.layer), this._layerLayerViewInfoMap.set(l14.layer, l14), this._reschedule();
        }).catch(() => {
          this.notifyChange("updating"), this._recyclingInfoMap.delete(l14.layer), l14.destroy(), this._reschedule();
        })) : l14.destroy();
      }
      for (const [o22, l14] of this._recyclingInfoMap) r15.has(o22) || (this.notifyChange("updating"), this._recyclingInfoMap.delete(l14.layer), l14.destroy());
      for (const o22 of i15) this._createLayerView(o22);
      this._refreshCollections();
      const a14 = [e17?.ground?.layers, e17?.basemap?.baseLayers, e17?.basemap?.referenceLayers, e17?.layers].filter((e18) => !!e18);
      r15.forEach((e18) => "layers" in e18 && a14.push(e18.layers)), this.addHandles(a14.map((e18) => this._watchUpdatingTracking.addOnCollectionChange(() => e18, this._reschedule)), "collection-change"), this._workPromise.resolve(), this._workPromise = null;
    };
  }
  initialize() {
    this.addHandles([v2(() => this.view?.map?.allLayers, "change", this._preloadLayerViewModules, {
      onListenerAdd: this._preloadLayerViewModules
    }), d2(() => {
      const e16 = this.view, r15 = e16?.map;
      return [r15?.basemap, r15?.ground, r15?.layers, e16?.ready];
    }, () => this._reschedule(), A3)]), this._preloadLayerViewModules(), this._reschedule();
  }
  destroy() {
    this.clear(), n9(this._recyclingInfoMap), n9(this._layerLayerViewInfoMap), this._watchUpdatingTracking.destroy(), this._map = null, null != this._workPromise && (this._workPromise.reject(u2()), this._workPromise = null);
  }
  get _layersToLayerViews() {
    const e16 = [["view.map.basemap.baseLayers", "view.basemapView.baseLayerViews"], ["view.map.layers", "view.layerViews"], ["view.map.basemap.referenceLayers", "view.basemapView.referenceLayerViews"]];
    return this.supportsGround && e16.push(["view.map.ground.layers", "view.groundView.layerViews"]), new Map(e16);
  }
  get _rootCollectionNames() {
    return Array.from(this._layersToLayerViews.keys());
  }
  get updating() {
    return null != this._workPromise || this._watchUpdatingTracking.updating || n3(this._layerLayerViewInfoMap, (e16) => !e16.done) || this._recyclingInfoMap.size > 0;
  }
  get updatingRemaining() {
    let e16 = 0;
    for (const r15 of this._layerLayerViewInfoMap.values()) r15.done || ++e16;
    return e16;
  }
  clear() {
    this.destroyed || (n9(this._layerLayerViewInfoMap), this._refreshCollections());
  }
  whenLayerView(e16) {
    return __async(this, null, function* () {
      if (yield this._reschedule(), !this._layerLayerViewInfoMap.has(e16)) {
        if (this._recyclingInfoMap.has(e16)) return this._recyclingInfoMap.get(e16).promise;
        throw new s("view:no-layerview-for-layer", "No layerview has been found for the layer", {
          layer: e16
        });
      }
      return this._layerLayerViewInfoMap.get(e16).promise;
    });
  }
  isCreatingLayerViewsForLayer(e16, r15) {
    this.commitProperty("updatingRemaining");
    const i15 = this._layerLayerViewInfoMap.get(e16);
    if (!i15?.done) return true;
    const t17 = i15.layerView;
    return !(!t17 || !r15 || t17.parent === r15) || !!(i15.done && t17 && "layers" in e16 && e16.layers?.length) && e16.layers.some((e17) => this.isCreatingLayerViewsForLayer(e17, t17));
  }
  _refreshCollections() {
    for (const [e16, r15] of this._layersToLayerViews) this._populateLayerViewsOwners(o2(this, e16), o2(this, r15), this.view);
    this.notifyChange("updating"), this.notifyChange("updatingRemaining");
  }
  _populateLayerViewsOwners(e16, r15, i15) {
    if (!e16 || !r15) return void (r15 && r15.removeAll());
    let t17 = 0;
    for (const s17 of e16) {
      const e17 = this._layerLayerViewInfoMap.get(s17);
      if (!e17?.layerView) continue;
      const a14 = e17.layerView;
      a14.layer = s17, a14.parent = i15, r15.at(t17) !== a14 && r15.splice(t17, 0, a14), "layers" in s17 && v5(a14) && this._populateLayerViewsOwners(s17.layers, a14.layerViews, a14), t17 += 1;
    }
    t17 < r15.length && r15.splice(t17, r15.length);
  }
  _createLayerView(e16) {
    e16.load().catch(() => {
    }), this.layerViewImporter.hasLayerViewModule(e16) && this.layerViewImporter.importLayerView(e16);
    const r15 = new L3(e16, this.view, this.layerViewImporter);
    r15.promise.then(() => this._refreshCollections(), (r16) => {
      r16 && (b(r16) || "cancelled:layerview-create" === r16.name) || n.getLogger(this).error(`Failed to create layerview for layer title:'${e16.title ?? "no title"}', id:'${e16.id ?? "no id"}' of type '${e16.type}'.`, {
        layer: e16,
        error: r16
      }), this._refreshCollections();
    }), this._layerLayerViewInfoMap.set(e16, r15), this.view.ready && r15.start(), this.notifyChange("updating"), this.notifyChange("updatingRemaining");
  }
};
e3([y()], M.prototype, "_workPromise", void 0), e3([y({
  readOnly: true
})], M.prototype, "_watchUpdatingTracking", void 0), e3([y({
  readOnly: true
})], M.prototype, "_layersToLayerViews", null), e3([y({
  readOnly: true
})], M.prototype, "_rootCollectionNames", null), e3([y()], M.prototype, "layerViewImporter", void 0), e3([y()], M.prototype, "supportsGround", void 0), e3([y({
  readOnly: true
})], M.prototype, "updating", null), e3([y({
  readOnly: true
})], M.prototype, "updatingRemaining", null), e3([y({
  constructOnly: true
})], M.prototype, "view", void 0), M = e3([a2("esri.views.LayerViewManager")], M);
var I = M;
function C3(e16) {
  return "createLayerView" in e16 && null != e16.createLayerView;
}

// ../../../node_modules/@arcgis/core/views/Magnifier.js
var i5 = class extends S2 {
  constructor(o22) {
    super(o22), this.factor = 1.5, this.offset = c6(0, 0), this.position = null, this.size = 120, this.maskUrl = null, this.maskEnabled = true, this.overlayUrl = null, this.overlayEnabled = true, this.visible = true;
  }
  get version() {
    return this.commitProperty("factor"), this.commitProperty("offset"), this.commitProperty("position"), this.commitProperty("visible"), this.commitProperty("size"), this.commitProperty("maskUrl"), this.commitProperty("maskEnabled"), this.commitProperty("overlayUrl"), this.commitProperty("overlayEnabled"), (this._get("version") || 0) + 1;
  }
};
e3([y({
  type: Number
})], i5.prototype, "factor", void 0), e3([y({
  nonNullable: true
})], i5.prototype, "offset", void 0), e3([y()], i5.prototype, "position", void 0), e3([y({
  type: Number,
  range: {
    min: 0
  }
})], i5.prototype, "size", void 0), e3([y()], i5.prototype, "maskUrl", void 0), e3([y()], i5.prototype, "maskEnabled", void 0), e3([y()], i5.prototype, "overlayUrl", void 0), e3([y()], i5.prototype, "overlayEnabled", void 0), e3([y({
  readOnly: true
})], i5.prototype, "version", null), e3([y({
  type: Boolean
})], i5.prototype, "visible", void 0), i5 = e3([a2("esri.views.Magnifier")], i5);
var p3 = i5;

// ../../../node_modules/@arcgis/core/views/SelectionManager.js
var y4 = class extends o5.EventedAccessor {
  constructor(e16) {
    super(e16), this._selectionMap = new s4(), this._sources = new V(), this._trashCan = [], this._layerEditHandles = new V(), this._vizTaskId = 0, this.showHighlight = true;
  }
  initialize() {
    this.addHandles([d2(() => [this.view, this.showHighlight], () => this._refreshVisualization()), v2(() => this.sources, "change", (e17) => {
      const t17 = this._selectionMap;
      for (const s17 of e17.removed) t17.delete(s17);
      this._refreshListeners(), this._refreshVisualization();
    }, {
      onListenerAdd: () => this._refreshListeners()
    })]);
    const e16 = new V();
    this.view.when().then(() => {
      this.view.map && (this.view.map.allLayers.flatten((e17) => "sublayers" in e17 && e17.sublayers ? e17.sublayers : null).forEach((t17) => {
        (e9(t17) && !c4(t17) || l2(t17)) && e16.add(t17);
      }), this.sources = e16);
    });
  }
  destroy() {
    this._layerEditHandles.drain(l);
  }
  get selections() {
    return Array.from(this._selectionMap.entries()).map((e16) => {
      const [t17, s17] = e16;
      return {
        layer: t17,
        selection: [...s17.selection]
      };
    });
  }
  get count() {
    let e16 = 0;
    for (const t17 of this._selectionMap.values()) e16 += t17.selection.length;
    return e16;
  }
  get hasSelection() {
    return this.count > 0;
  }
  get sources() {
    return this._sources;
  }
  set sources(e16) {
    n8(e16, this._sources);
  }
  getSelectedFeatures(_0) {
    return __async(this, arguments, function* (e16, t17 = {}, s17 = "layerView") {
      const {
        view: i15,
        selections: o22
      } = this, n23 = (void 0 !== e16 ? o22.filter((t18) => e16.includes(t18.layer)) : o22).filter((e17) => e17.selection.length > 0).map((e17) => __async(this, null, function* () {
        const {
          layer: o23,
          selection: n24
        } = e17, l14 = l2(o23) ? o23.parent : o23;
        if (null == l14 || !S3(l14)) return null;
        if ("layer" === s17) return M2(l14, n24, t17);
        if (v6(l14)) return null;
        const r15 = yield i15.whenLayerView(l14).catch(() => null);
        return r15 ? M2(r15, n24, t17) : null;
      }));
      return (yield Promise.all(n23)).filter((e17) => null != e17);
    });
  }
  updateSelection(e16) {
    const s17 = /* @__PURE__ */ new Map();
    for (const [t17, n23] of this._selectionMap) s17.set(t17, [...n23.selection]);
    let i15 = false;
    const o22 = e16.current.concat(e16.added);
    for (const t17 of o22) {
      const e17 = t17.sourceLayer, o23 = t17.getObjectId();
      if (this.sources.includes(e17) && (e9(e17) || l2(e17)) && null !== o23) {
        const t18 = r3(s17, e17, () => []);
        t18.includes(o23) || (t18.push(o23), i15 = true);
      }
    }
    for (const t17 of e16.removed) {
      const e17 = t17.sourceLayer, o23 = t17.getObjectId();
      if (this.sources.includes(e17) && (e9(e17) || l2(e17)) && null !== o23) {
        const t18 = s17.get(e17), n23 = t18?.indexOf(o23);
        void 0 !== n23 && n23 >= 0 && (t18?.splice(n23, 1), i15 = true);
      }
    }
    if (i15) {
      const {
        _selectionMap: e17,
        _trashCan: i16
      } = this, o23 = [];
      for (const [n23, l14] of s17) {
        const s18 = e17.get(n23);
        void 0 !== s18 && i16.push(s18), e17.set(n23, {
          selection: l14
        }), o23.push(__spreadValues({
          layer: n23,
          selection: l14
        }, g(void 0 !== s18 ? s18.selection : [], l14)));
      }
      this._onSelectionChange(o23);
    }
  }
  setSelection(e16, t17) {
    this._setSelection(e16, t17);
  }
  getSelection(e16) {
    const t17 = this._selectionMap.get(e16);
    return t17?.selection;
  }
  appendToSelection(e16, t17) {
    const s17 = this._selectionMap.get(e16), i15 = void 0 !== s17 ? [...s17.selection] : [];
    for (const o22 of t17) i15.includes(o22) || i15.push(o22);
    this._setSelection(e16, i15);
  }
  removeFromSelection(e16, t17) {
    const s17 = this._selectionMap.get(e16);
    if (!s17) return;
    const i15 = [];
    for (const o22 of s17.selection) t17.includes(o22) || i15.push(o22);
    this._setSelection(e16, i15);
  }
  toggleInSelection(e16, t17) {
    const s17 = this._selectionMap.get(e16);
    if (!s17 || 0 === s17.selection.length) return void this._setSelection(e16, t17);
    const i15 = new Set(s17.selection), o22 = new Set(t17), n23 = c2(i15, o22);
    this._setSelection(e16, Array.from(n23));
  }
  clear() {
    const e16 = this._selectionMap.values();
    this._trashCan.push(...e16);
    const t17 = [];
    for (const [s17, i15] of this._selectionMap.entries()) t17.push({
      layer: s17,
      added: [],
      removed: [...i15.selection],
      selection: []
    });
    this._selectionMap.clear(), this._onSelectionChange(t17);
  }
  _onSelectionChange(e16) {
    this._refreshVisualization(), this.emit("selection-change", {
      view: this.view,
      changes: e16
    });
  }
  _refreshVisualization() {
    if (null == this.view || null == this.sources) return;
    for (this._vizTaskId++; this._trashCan.length > 0; ) {
      const e17 = this._trashCan.pop();
      e17?.highlightHandle?.remove();
    }
    const {
      sources: e16,
      view: t17,
      _selectionMap: s17,
      showHighlight: i15
    } = this, o22 = this._vizTaskId;
    for (const n23 of e16) {
      const e17 = s17.get(n23), l14 = l2(n23) ? n23.parent : n23;
      if (null != l14 && S3(l14)) {
        if (v6(l14)) continue;
        t17.whenLayerView(l14).then((t18) => {
          e17?.highlightHandle?.remove(), null != e17 && i15 && o22 === this._vizTaskId && "highlight" in t18 && "function" == typeof t18.highlight && e17.selection.length > 0 && (e17.highlightHandle = t18.highlight(e17.selection, "selection"));
        }).catch(() => {
          e17?.highlightHandle?.remove();
        });
      }
    }
  }
  _refreshListeners() {
    this._layerEditHandles.drain(l);
    for (const e16 of this.sources) {
      const t17 = l2(e16) ? e16.parent : e16;
      if (null != t17 && e9(t17)) {
        const s17 = t17.on("edits", (t18) => {
          this._handleEditChanges(t18, e16);
        });
        this._layerEditHandles.push(s17);
      }
    }
  }
  _handleEditChanges(e16, t17) {
    if (void 0 !== e16.deletedFeatures && e16.deletedFeatures.length > 0 && this._selectionMap.has(t17)) {
      const i15 = e16.deletedFeatures.filter((e17) => null == e17.error).map((e17) => e17.objectId).filter(O);
      this.removeFromSelection(t17, i15);
    }
  }
  _setSelection(e16, s17) {
    if (!this.sources.includes(e16)) throw new Error(`Cannot set selection on layer ${e16.title} because it is not in 'sources'`);
    const i15 = this._selectionMap.get(e16);
    if (void 0 === i15 || !j(i15, {
      selection: s17
    })) {
      void 0 !== i15 && this._trashCan.push(i15), this._selectionMap.set(e16, {
        selection: [...s17]
      });
      const o22 = __spreadValues({
        layer: e16,
        selection: [...s17]
      }, g(void 0 !== i15 ? i15.selection : [], s17));
      this._onSelectionChange([o22]);
    }
  }
};
e3([y({
  readOnly: true,
  nonNullable: true
})], y4.prototype, "selections", null), e3([y({
  readOnly: true,
  nonNullable: true
})], y4.prototype, "count", null), e3([y({
  constructOnly: true,
  nonNullable: true
})], y4.prototype, "view", void 0), e3([y({
  readOnly: true,
  nonNullable: true
})], y4.prototype, "hasSelection", null), e3([y()], y4.prototype, "showHighlight", void 0), e3([y()], y4.prototype, "sources", null), y4 = e3([a2("esri.views.SelectionManager")], y4);
var v6 = (e16) => l2(e16) ? true === e16.parent?.isTable : e16.isTable;
var w4 = (e16) => void 0 !== e16.layer;
var S3 = (e16) => void 0 !== e16?.when;
var j = (e16, t17) => {
  if (null == e16 && null == t17) return true;
  if (null != e16 && null == t17 || null == e16 && null != t17) return false;
  if (null != e16 && null != t17 && null != e16.selection && null != t17.selection) {
    const s17 = [...e16.selection], i15 = [...t17.selection];
    if (s17.length !== i15.length) return false;
    s17.sort(), i15.sort();
    for (let e17 = 0; e17 < s17.length; e17++) if (s17[e17] !== i15[e17]) return false;
  }
  return true;
};
var M2 = (_0, _1, ..._22) => __async(void 0, [_0, _1, ..._22], function* (e16, t17, s17 = {}) {
  let i15;
  if (w4(e16)) {
    const o22 = e16;
    i15 = void 0 === o22 ? null : yield o22.queryFeatures(new b2(__spreadProps(__spreadValues({}, s17), {
      objectIds: t17
    }))).then((t18) => ({
      data: t18,
      layer: e16.layer
    }));
  } else {
    const o22 = e16;
    i15 = void 0 === o22 ? null : yield o22.queryFeatures(new b2(__spreadProps(__spreadValues({}, s17), {
      objectIds: t17
    }))).then((e17) => ({
      data: e17,
      layer: o22
    }));
  }
  return i15;
});
var b3 = y4;

// ../../../node_modules/@arcgis/core/views/Theme.js
var p4 = class extends i(S2) {
  constructor(o22) {
    super(o22), this.accentColor = new u3([255, 127, 0]), this.textColor = new u3([255, 255, 255]);
  }
};
e3([y({
  type: u3,
  nonNullable: true
})], p4.prototype, "accentColor", void 0), e3([y({
  type: u3,
  nonNullable: true
})], p4.prototype, "textColor", void 0), p4 = e3([a2("esri.views.Theme")], p4);
var l9 = p4;

// ../../../node_modules/@arcgis/core/views/interactive/interactiveToolUtils.js
function o11(t17) {
  return [t17.on("before-add", (o22) => {
    const i15 = o22.item;
    if (null == i15 || t17.includes(i15)) return n.getLogger("esri.views.interactive.interactiveToolUtils").warn("Tool is either already in the list of tools or tool is `null`. Not adding tool."), void o22.preventDefault();
    i15.onAdd();
  }), t17.on("after-remove", (e16) => {
    const t18 = e16.item;
    t18.active && (t18.view.activeTool = null), t18.destroy();
  })];
}
function i6(e16) {
  return e16.visible && null != e16.getEditableFlag && e16.getEditableFlag(o9.USER) && e16.getEditableFlag(o9.MANAGER);
}

// ../../../node_modules/@arcgis/core/views/interactive/ToolViewManagerManipulatorState.js
var n14 = class {
  constructor() {
    this._pointerLocations = /* @__PURE__ */ new Map(), this._hoveredManipulators = /* @__PURE__ */ new Map(), this._grabbedManipulators = /* @__PURE__ */ new Map(), this._draggedManipulators = /* @__PURE__ */ new Map(), this._stopDrag = false, this._revertToNullActiveTool = false, this._cursor = null;
  }
  get cursor() {
    return this._cursor;
  }
  hasFocusedManipulators() {
    return this._grabbedManipulators.size > 0 || this._draggedManipulators.size > 0;
  }
  handleInputEvent(t17, e16) {
    const a14 = () => t17.stopPropagation();
    switch (t17.type) {
      case "pointer-move":
        p5(t17.pointerType) && this._pointerLocations.set(t17.pointerId, {
          x: t17.x,
          y: t17.y,
          pointerType: t17.pointerType
        });
        break;
      case "drag":
        this._grabbedManipulators.size > 0 && (this._stopDrag = true), this._stopDrag && (a14(), "end" === t17.action && (this._stopDrag = false));
        break;
      case "pointer-down": {
        if (!u4(t17)) break;
        const o22 = n11(t17), i15 = l10(o22, t17.pointerType, e16.forEachTool);
        if (null == i15) break;
        const n23 = i15.manipulator, s17 = i15.tool;
        null == n23 || null == s17 || !n23.interactive || n23.grabbable && n23.grabbableForEvent(t17) || !n23.grabbing || n23.dragging || this._releaseManipulatorBeforeDragging(n23, t17, e16), null != n23 && null != s17 && n23.interactive && n23.grabbable && n23.grabbableForEvent(t17) && !n23.grabbing && (this._grabbedManipulators.set(t17.pointerId, {
          manipulator: n23,
          tool: s17,
          start: o22,
          pointerType: t17.pointerType
        }), 1 === this._grabbedManipulators.size && null == e16.activeTool && (this._revertToNullActiveTool = true, e16.setActiveTool(i15.tool)), n23.grabbing = true, n23.events.emit("grab-changed", {
          action: "start",
          pointerType: t17.pointerType,
          screenPoint: o22
        }), a14());
        break;
      }
      case "pointer-up":
        this._draggedManipulators.has(t17.pointerId) || this._handlePointerEnd(t17, e16);
        break;
      case "pointer-drag": {
        if (!u4(t17)) break;
        const i15 = this._grabbedManipulators.get(t17.pointerId), n23 = i15?.manipulator, s17 = i15?.tool;
        if (null == n23 || null == s17) break;
        const l14 = n11(t17);
        l14.x = e7(l14.x, 0, e16.view.width), l14.y = e7(l14.y, 0, e16.view.height);
        const p16 = i15.start, c18 = this._draggedManipulators.get(t17.pointerId);
        switch (t17.action) {
          case "start":
          case "update":
            "update" !== t17.action && 1 !== this._grabbedManipulators.size || (n23.dragging = true, c18 ? n23.events.emit("drag", {
              action: "update",
              start: p16,
              screenPoint: l14
            }) : n23.events.emit("drag", {
              action: "start",
              start: p16,
              screenPoint: l14,
              pointerType: t17.pointerType
            }), this._draggedManipulators.set(t17.pointerId, {
              tool: s17,
              manipulator: n23,
              start: p16
            }));
            break;
          case "end":
            n23.dragging = false, c18 && n23.events.emit("drag", {
              action: "end",
              start: p16,
              screenPoint: l14
            }), this._draggedManipulators.delete(t17.pointerId), this._handlePointerEnd(t17, e16);
        }
        a14();
        break;
      }
      case "immediate-click": {
        const o22 = n11(t17), i15 = l10(o22, t17.pointerType, e16.forEachTool);
        if (c10(t17) || e16.forEachTool((t18) => {
          if ((null == i15 || i15.tool !== t18 || t18.automaticManipulatorSelection) && t18.manipulators) {
            let e17 = false;
            t18.manipulators.forEach(({
              manipulator: t19
            }) => {
              t19.selected && (t19.selected = false, e17 = true);
            }), e17 && t18.onManipulatorSelectionChanged && t18.onManipulatorSelectionChanged();
          }
        }), null == i15) break;
        const {
          manipulator: n23,
          tool: s17
        } = i15;
        if (!n23.interactive) break;
        n23.selectable && s17.automaticManipulatorSelection && (n23.selected = !n23.selected, s17.onManipulatorSelectionChanged && s17.onManipulatorSelectionChanged());
        const p16 = t17.native.shiftKey;
        n23.events.emit("immediate-click", {
          screenPoint: o22,
          button: t17.button,
          pointerType: t17.pointerType,
          shiftKey: p16,
          stopPropagation: a14
        }), d5(n23, a14);
        break;
      }
      case "click": {
        const o22 = n11(t17), i15 = l10(o22, t17.pointerType, e16.forEachTool), n23 = i15?.manipulator;
        if (null == n23 || !n23.interactive) break;
        const s17 = t17.native.shiftKey;
        n23.events.emit(t17.type, {
          screenPoint: o22,
          button: t17.button,
          pointerType: t17.pointerType,
          shiftKey: s17
        }), a14();
        break;
      }
      case "double-click": {
        const o22 = n11(t17), i15 = l10(o22, t17.pointerType, e16.forEachTool), n23 = null != i15 ? i15.manipulator : null;
        if (null == n23 || !n23.interactive) break;
        const s17 = t17.native.shiftKey;
        n23.events.emit("double-click", {
          screenPoint: o22,
          button: t17.button,
          pointerType: t17.pointerType,
          shiftKey: s17,
          stopPropagation: a14
        }), d5(n23, a14);
        break;
      }
      case "immediate-double-click": {
        const o22 = n11(t17), i15 = l10(o22, t17.pointerType, e16.forEachTool), n23 = null != i15 ? i15.manipulator : null;
        if (null == n23 || !n23.interactive) break;
        const s17 = t17.native.shiftKey;
        n23.events.emit("immediate-double-click", {
          screenPoint: o22,
          button: t17.button,
          pointerType: t17.pointerType,
          shiftKey: s17,
          stopPropagation: a14
        }), d5(n23, a14);
        break;
      }
    }
    this._onFocusChange(e16.forEachTool);
  }
  _releaseManipulatorBeforeDragging(t17, e16, o22) {
    t17.grabbing = false, t17.events.emit("grab-changed", {
      action: "end",
      pointerType: e16.pointerType,
      screenPoint: n11(e16)
    }), this._grabbedManipulators.forEach(({
      manipulator: e17
    }, o23) => {
      e17 === t17 && this._grabbedManipulators.delete(o23);
    }), this._afterManipulatorRelease(o22.setActiveTool);
  }
  _handlePointerEnd(t17, e16) {
    const o22 = this._grabbedManipulators.get(t17.pointerId)?.manipulator;
    null != o22 && o22.grabbing && (o22.grabbing = false, o22.events.emit("grab-changed", {
      action: "end",
      pointerType: t17.pointerType,
      screenPoint: n11(t17)
    }), this._grabbedManipulators.delete(t17.pointerId), this._afterManipulatorRelease(e16.setActiveTool));
  }
  _onFocusChange(t17) {
    this._updateCursor(), this._updateFocusedManipulatorTools(t17);
  }
  _updateCursor() {
    this._grabbedManipulators.size > 0 ? this._cursor = s5(this._grabbedManipulators) || "grabbing" : this._hoveredManipulators.size > 0 ? this._cursor = s5(this._hoveredManipulators) || "pointer" : this._cursor = null;
  }
  _updateFocusedManipulatorTools(e16) {
    const o22 = /* @__PURE__ */ new Set(), a14 = /* @__PURE__ */ new Set();
    this._grabbedManipulators.forEach(({
      tool: t17
    }) => {
      o22.add(t17);
    }), this._hoveredManipulators.forEach(({
      tool: t17
    }) => {
      a14.add(t17);
    }), e16((e17) => {
      e17.hasGrabbedManipulators = o22.has(e17), e17.hasHoveredManipulators = a14.has(e17);
      const i15 = this._grabbedManipulators.values(), r15 = o(i15, ({
        tool: t17
      }) => t17 === e17);
      e17.firstGrabbedManipulator = null != r15 ? r15.manipulator : null;
    });
  }
  clearPointers(t17, {
    forEachTool: e16,
    setActiveTool: o22
  }, a14 = true, i15) {
    const r15 = (e17, o23) => e17 === t17 && (null == i15 || i15 === o23);
    this._grabbedManipulators.forEach(({
      tool: t18,
      manipulator: e17,
      pointerType: o23
    }, a15) => {
      r15(t18, e17) && (this._grabbedManipulators.delete(a15), e17.grabbing = false, e17.events.emit("grab-changed", {
        action: "end",
        screenPoint: null,
        pointerType: o23
      }));
    }), this._draggedManipulators.forEach(({
      tool: t18,
      manipulator: e17
    }, o23) => {
      r15(t18, e17) && (this._draggedManipulators.delete(o23), e17.dragging = false, e17.events.emit("drag", {
        action: "cancel"
      }));
    }), a14 && this._hoveredManipulators.forEach(({
      tool: t18,
      manipulator: e17
    }, o23) => {
      r15(t18, e17) && (this._hoveredManipulators.delete(o23), e17.hovering = false);
    }), this._afterManipulatorRelease(o22), this._onFocusChange(e16);
  }
  updateHoveredStateFromKnownPointers(t17) {
    this._pointerLocations.forEach((e16, o22) => {
      this._updateHoveredStateForPointerAtScreenPosition(c6(e16.x, e16.y), o22, e16.pointerType, t17);
    });
  }
  handleHoverEvent(t17, e16) {
    "pointer-up" !== t17.type && "immediate-click" !== t17.type && "pointer-move" !== t17.type || !p5(t17.pointerType) || this._updateHoveredStateForPointerAtScreenPosition(n11(t17), t17.pointerId, t17.pointerType, e16);
  }
  _updateHoveredStateForPointerAtScreenPosition(t17, e16, o22, a14) {
    let i15 = l10(t17, o22, a14);
    const r15 = this._hoveredManipulators.get(e16)?.manipulator;
    null == i15 || i15.manipulator.interactive || (i15 = null), null != i15 && r15 === i15.manipulator || (null != r15 && (r15.hovering = false), null != i15 ? (i15.manipulator.hovering = true, this._hoveredManipulators.set(e16, i15)) : this._hoveredManipulators.delete(e16), this._onFocusChange(a14));
  }
  _afterManipulatorRelease(t17) {
    0 === this._grabbedManipulators.size && this._revertToNullActiveTool && (t17(null), this._revertToNullActiveTool = false);
  }
};
function s5(t17) {
  let o22 = null;
  return n3(t17, ({
    manipulator: t18
  }) => !(null == t18 || !t18.interactive) && (t18.grabbing && t18.grabCursor ? (o22 = t18.grabCursor, true) : !!t18.cursor && (o22 = t18.cursor, true))), o22;
}
function l10(t17, e16, o22) {
  let a14 = null;
  return o22((o23) => {
    if (null == o23.manipulators || !i6(o23)) return false;
    const r15 = o23.manipulators.intersect(t17, e16);
    return null != r15 && (a14 = {
      tool: o23,
      manipulator: r15
    }, true);
  }), a14;
}
function p5(t17) {
  return "mouse" === t17;
}
function u4(t17) {
  return "mouse" !== t17.pointerType || 0 === t17.button;
}
function c10(t17) {
  return !!t17.native.shiftKey;
}
function d5(t17, e16) {
  t17?.consumesClicks && e16();
}

// ../../../node_modules/@arcgis/core/views/ToolViewManager.js
var _5 = "attached";
var g10 = "tools";
var T = 1e3;
var f5 = class extends S2 {
  constructor(t17) {
    super(t17), this._updatingHandles = new h2(), this._clock = o3, this._manipulatorState = new n14(), this.tools = new V(), this.cursor = null, this._interacting = false, this._interactingTimeout = T, this._interactingTimeoutHandle = null, this._forEachTool = (t18) => {
      for (const o22 of this.tools.items) if (t18(o22)) return;
    };
  }
  initialize() {
    this.addHandles([this.view.on(r5, (t17) => {
      this._handleInputEvent(t17);
    }, _3.TOOL), ...o11(this.tools), this.tools.on("before-add", ({
      item: t17
    }) => {
      this._updateToolEditableFlag(t17);
    }), this.tools.on("before-remove", ({
      item: t17
    }) => {
      this._manipulatorState.clearPointers(t17, this._manipulatorStateEventArgs), this._updateCursor();
    }), this.tools.on("change", () => {
      this._refreshToolWatchers();
    })]);
  }
  destroy() {
    this.activeTool = null, this.tools.drain((t17) => t17.destroy()), this._clearInteractingTimeout(), this._interacting = false, this._updatingHandles.destroy();
  }
  get _manipulatorStateEventArgs() {
    return {
      forEachTool: this._forEachTool,
      activeTool: this.activeTool,
      setActiveTool: (t17) => {
        this.activeTool = t17;
      },
      view: this.view
    };
  }
  set activeTool(t17) {
    if (null != t17 && !this.view.ready) return void n.getLogger(this).error("Cannot set active tool while view is not ready.");
    if (t17 === this.activeTool) return;
    const o22 = this.activeTool;
    this._set("activeTool", t17), null != o22 && o22.deactivate(), null != t17 && t17.activate(), this._removeIncompleteTools(t17);
    for (const e16 of this.tools) {
      this._updateToolEditableFlag(e16);
      const t18 = i6(e16);
      null != this.activeTool && t18 || this._manipulatorState.clearPointers(e16, this._manipulatorStateEventArgs, !t18);
    }
    this._updateCursor();
  }
  get updating() {
    return this._updatingHandles.updating || this.tools.some((t17) => t17.updating);
  }
  get interacting() {
    return this._interacting;
  }
  _clearInteractingTimeout() {
    this._interactingTimeoutHandle = l(this._interactingTimeoutHandle);
  }
  _startInteractingTimeout() {
    this._clearInteractingTimeout(), this._interactingTimeoutHandle = this._clock.setTimeout(() => this._interacting = false, this._interactingTimeout);
  }
  attach() {
    "3d" === this.view.type ? this.addHandles([d2(() => {
      const {
        state: t17
      } = this.view;
      return "camera" in t17 && t17.camera;
    }, () => this._forEachManipulator((t17) => t17.onViewChange())), this.view.elevationProvider?.on("elevation-change", (t17) => this._forEachManipulator((o22) => o22.onElevationChange(t17)))], _5) : this.addHandles(d2(() => this.view.extent, () => this._forEachManipulator((t17) => t17.onViewChange())));
  }
  detach() {
    this.activeTool = null, this.tools.removeAll(), this.removeHandles(_5), this._clearInteractingTimeout(), this._interacting = false;
  }
  _forEachManipulator(t17) {
    this._forEachTool((o22) => {
      o22.manipulators && o22.manipulators.forEach(({
        manipulator: e16
      }) => t17(e16, o22));
    });
  }
  _handleInputEvent(t17) {
    let o22 = false;
    const e16 = __spreadProps(__spreadValues({}, t17), {
      stopPropagation: () => {
        o22 = true, t17.stopPropagation();
      }
    });
    null != this.activeTool ? this.activeTool.handleInputEvent && this.activeTool.handleInputEvent(e16) : this._forEachTool((t18) => {
      !o22 && t18.visible && t18.handleInputEvent(e16);
    }), !o22 && "key-down" === t17.type && "Escape" === t17.key && this.activeTool && (t17.stopPropagation(), this.activeTool = null), this._manipulatorState.handleInputEvent(e16, this._manipulatorStateEventArgs), o22 || null == this.activeTool || this.activeTool.handleInputEventAfter(e16), this._manipulatorState.handleHoverEvent(e16, this._forEachTool), this._updateCursor(), "pointer-move" === t17.type && (this._manipulatorState.hasFocusedManipulators() || this.activeTool) && (this._interacting = true, this._startInteractingTimeout());
  }
  _refreshToolWatchers() {
    this.removeHandles(g10), this._forEachTool((t17) => {
      if (t17 instanceof S2) {
        const o22 = d2(() => [t17.cursor, t17.visible, t17.editable], () => {
          i6(t17) || this._manipulatorState.clearPointers(t17, this._manipulatorStateEventArgs), this._updateCursor();
        });
        this.addHandles(o22, g10);
      }
      t17.manipulators && this.addHandles([t17.manipulators.on("after-remove", (o22) => {
        this._manipulatorState.clearPointers(t17, this._manipulatorStateEventArgs, true, o22.item.manipulator);
      }), t17.manipulators.on("change", () => {
        this._manipulatorState.updateHoveredStateFromKnownPointers(this._forEachTool), this._updateCursor();
      })], g10);
    }), this._manipulatorState.updateHoveredStateFromKnownPointers(this._forEachTool), this._updateCursor();
  }
  _updateToolEditableFlag(t17) {
    t17.setEditableFlag?.(o9.MANAGER, null == this.activeTool || t17 === this.activeTool);
  }
  _updateCursor() {
    let t17 = this._manipulatorState.cursor;
    null == t17 && this._forEachTool((o22) => !(null == o22.cursor || !o22.visible) && (t17 = o22.cursor, true)), this._get("cursor") !== t17 && this._set("cursor", t17);
  }
  _removeIncompleteTools(t17) {
    this.tools.filter((o22) => (null == t17 || o22 !== t17) && !o22.created && o22.removeIncompleteOnCancel).forEach((t18) => {
      this.tools.remove(t18);
    });
  }
  get test() {
  }
};
e3([y({
  constructOnly: true,
  nonNullable: true
})], f5.prototype, "view", void 0), e3([y({
  value: null
})], f5.prototype, "activeTool", null), e3([y({
  readOnly: true,
  type: V
})], f5.prototype, "tools", void 0), e3([y({
  readOnly: true
})], f5.prototype, "cursor", void 0), e3([y({
  readOnly: true
})], f5.prototype, "updating", null), e3([y()], f5.prototype, "_interacting", void 0), e3([y({
  readOnly: true
})], f5.prototype, "interacting", null), f5 = e3([a2("esri.views.ToolViewManager")], f5);

// ../../../node_modules/@arcgis/core/views/input/gamepad/GamepadInputDevice.js
var n15 = class extends S2 {
  constructor(e16) {
    super(), this.nativeIndex = null, this._detectedDeviceType = "unknown", "standard" === e16.mapping ? this._detectedDeviceType = "standard" : i7.test(e16.id) ? this._detectedDeviceType = "spacemouse" : this._detectedDeviceType = "unknown", this.nativeIndex = e16.index;
  }
  get native() {
    const e16 = navigator.getGamepads ? navigator.getGamepads() : [];
    return null != this.nativeIndex && this.nativeIndex < e16.length ? e16[this.nativeIndex] : null;
  }
  get deviceType() {
    return this._detectedDeviceType;
  }
  get axisThreshold() {
    return a4[this.deviceType];
  }
};
e3([y({
  nonNullable: true,
  readOnly: true
})], n15.prototype, "nativeIndex", void 0), e3([y({
  type: String,
  readOnly: true
})], n15.prototype, "deviceType", null), e3([y({
  type: Number,
  readOnly: true
})], n15.prototype, "axisThreshold", null), n15 = e3([a2("esri.views.input.gamepad.GamepadInputDevice")], n15);
var o12 = n15;
var i7 = new RegExp("^(3dconnexion|space(mouse|navigator|pilot|explorer))", "i");
var a4 = {
  standard: 0.15,
  spacemouse: 0.025,
  unknown: 0
};

// ../../../node_modules/@arcgis/core/views/input/gamepad/GamepadSettings.js
var p6 = class extends S2 {
  constructor(...o22) {
    super(...o22), this.devices = new V(), this.enabledFocusMode = "document";
  }
};
e3([y({
  type: V.ofType(o12),
  readOnly: true
})], p6.prototype, "devices", void 0), e3([y({
  type: ["document", "view", "none"]
})], p6.prototype, "enabledFocusMode", void 0), p6 = e3([a2("esri.views.input.gamepad.GamepadSettings")], p6);
var i8 = p6;

// ../../../node_modules/@arcgis/core/views/input/Input.js
var p7 = class extends S2 {
  constructor() {
    super(...arguments), this.gamepad = new i8();
  }
};
e3([y({
  readOnly: true
})], p7.prototype, "gamepad", void 0), p7 = e3([a2("esri.views.input.Input")], p7);
var a5 = p7;

// ../../../node_modules/@arcgis/core/views/navigation/gamepad/GamepadSettings.js
var s6 = class extends S2 {
  constructor(o22) {
    super(o22), this.enabled = true, this.device = null, this.mode = "pan", this.tiltDirection = "forward-down", this.velocityFactor = 1;
  }
};
e3([y({
  type: Boolean,
  nonNullable: true
})], s6.prototype, "enabled", void 0), e3([y({
  type: o12
})], s6.prototype, "device", void 0), e3([y({
  type: ["pan", "zoom"],
  nonNullable: true
})], s6.prototype, "mode", void 0), e3([y({
  type: ["forward-down", "forward-up"],
  nonNullable: true
})], s6.prototype, "tiltDirection", void 0), e3([y({
  type: Number,
  nonNullable: true
})], s6.prototype, "velocityFactor", void 0), s6 = e3([a2("esri.views.navigation.gamepad.GamepadSettings")], s6);
var i9 = s6;

// ../../../node_modules/@arcgis/core/views/navigation/Navigation.js
var m7 = class extends S2 {
  constructor(o22) {
    super(o22), this.browserTouchPanEnabled = true, this.gamepad = new i9(), this.momentumEnabled = true, this.mouseWheelZoomEnabled = true;
  }
  get effectiveMomentumEnabled() {
    return this.momentumEnabled && !o8();
  }
};
e3([y({
  type: Boolean
})], m7.prototype, "browserTouchPanEnabled", void 0), e3([y({
  type: i9,
  nonNullable: true
})], m7.prototype, "gamepad", void 0), e3([y({
  type: Boolean
})], m7.prototype, "momentumEnabled", void 0), e3([y({
  type: Boolean
})], m7.prototype, "mouseWheelZoomEnabled", void 0), m7 = e3([a2("esri.views.navigation.Navigation")], m7);
var p8 = m7;

// ../../../node_modules/@arcgis/core/views/support/projectionUtils.js
var n16;
var s7 = null;
function c11(r15) {
  return __async(this, null, function* () {
    s7 || (s7 = import("./geometryServiceUtils-ZLQQG2XD.js").then((e16) => n16 = e16)), yield s7, s2(r15);
  });
}
function p9(e16, s17, a14, m13) {
  return __async(this, null, function* () {
    if (!e16) return null;
    const l14 = e16.spatialReference;
    return _2() || J(l14, s17) ? K(e16, s17) : n16 ? n16.projectGeometry(e16, s17, a14, m13) : (yield Promise.race([c11(m13), W(m13)]), p9(e16, s17, a14, m13));
  });
}

// ../../../node_modules/@arcgis/core/views/support/DefaultsFromMap.js
var d6 = class extends S2 {
  constructor(e16) {
    super(e16), this.required = {
      tileInfo: false,
      heightModelInfo: false,
      extent: false
    }, this.defaultSpatialReference = null, this.userSpatialReference = null, this.sourcePreloadCount = 10, this.priorityCollection = null, this.requiresExtentInSpatialReference = true, this.suspended = false, this._projectExtentTask = {
      task: null,
      input: null,
      output: null,
      spatialReference: null
    };
  }
  destroy() {
    this._projectExtentTask.task && (this._projectExtentTask.task = e(this._projectExtentTask.task)), this._set("map", null);
  }
  get ready() {
    return !this._spatialReferenceTask.updating && !this._tileInfoTask.updating && !this._extentTask.updating;
  }
  get heightModelInfoReady() {
    return !this._heightModelInfoTask.updating;
  }
  get spatialReference() {
    return this.userSpatialReference ?? this._spatialReferenceTask.spatialReference;
  }
  get extent() {
    return this._extentTask.extent;
  }
  get heightModelInfo() {
    return this._heightModelInfoTask.heightModelInfo;
  }
  get vcsWkid() {
    return this._heightModelInfoTask.vcsWkid;
  }
  get latestVcsWkid() {
    return this._heightModelInfoTask.latestVcsWkid;
  }
  get viewingMode() {
    return null == this.userSpatialReference || this.userSpatialReference.equals(this._spatialReferenceTask.spatialReference) ? this._spatialReferenceTask.viewingMode : null;
  }
  get tileInfo() {
    return this._tileInfoTask.tileInfo;
  }
  get mapCollections() {
    const e16 = this.map?.(), t17 = [];
    return null != this.priorityCollection && t17.push(this.priorityCollection), t17.push({
      parent: e16?.basemap,
      layers: e16?.basemap?.baseLayers
    }, {
      layers: e16?.layers
    }, {
      parent: e16?.ground,
      layers: e16?.ground?.layers
    }, {
      parent: e16?.basemap,
      layers: e16?.basemap?.referenceLayers
    }), t17;
  }
  get _allLayers() {
    return this._collectLayers(this.mapCollections);
  }
  get _spatialReferenceTask() {
    if (this.suspended) return this._get("_spatialReferenceTask") ?? {
      updating: false
    };
    const {
      layers: e16,
      updating: t17
    } = this._allLayers;
    let n23 = null;
    for (const s17 of e16) {
      const e17 = this._getSupportedSpatialReferences(s17);
      if (e17.length > 0) {
        const t18 = this._narrowDownSpatialReferenceCandidates(n23, e17);
        null != t18 && (n23 = t18);
      }
      if (null != n23 && 1 === n23.length) break;
    }
    if (t17 && (null == n23 || 1 !== n23.length)) return {
      updating: true
    };
    const a14 = this._pickSpatialReferenceCandidate(n23);
    return {
      spatialReference: a14?.spatialReference ?? null,
      viewingMode: a14?.viewingMode ?? null,
      updating: false
    };
  }
  get _tileInfoTask() {
    if (!this.required.tileInfo) return this._get("_tileInfoTask") ?? {
      updating: false
    };
    if (!this.spatialReference) return {
      updating: this._spatialReferenceTask.updating
    };
    const {
      layers: e16,
      updating: t17
    } = this._collectLayers([{
      parent: this.map?.()?.basemap,
      layers: this.map?.()?.basemap?.baseLayers
    }, {
      layers: this.map?.()?.layers
    }]);
    if (e16 && e16.length > 0 && "tileInfo" in e16[0]) {
      const t18 = e16[0].tileInfo;
      return {
        tileInfo: t18?.spatialReference.equals(this.spatialReference) ? t18 : null,
        updating: false
      };
    }
    return {
      updating: t17
    };
  }
  get _heightModelInfoTask() {
    if (!this.required.heightModelInfo || this.suspended && this._get("_heightModelInfoTask")?.heightModelInfo) return this._get("_heightModelInfoTask") ?? {
      updating: false
    };
    const {
      layers: e16,
      updating: t17
    } = this._allLayers;
    for (const n23 of e16) if (g6(n23)) {
      const e17 = l6(n23);
      if (e17) return {
        heightModelInfo: e17,
        vcsWkid: n23.spatialReference?.vcsWkid,
        latestVcsWkid: n23.spatialReference?.latestVcsWkid,
        updating: false
      };
    }
    return {
      updating: t17
    };
  }
  get _extentCandidatesTask() {
    if (this.suspended || !this.required.extent) return this._get("_extentCandidatesTask") ?? {
      updating: false
    };
    if (!this.spatialReference) return {
      updating: this._spatialReferenceTask.updating
    };
    const e16 = this._allLayers, t17 = e16.updating, n23 = [];
    for (const a14 of e16.layers) {
      const e17 = "fullExtents" in a14 && a14.fullExtents || (null != a14.fullExtent ? [a14.fullExtent] : []), t18 = this.requiresExtentInSpatialReference ? null : e17[0], s17 = e17.find((e18) => e18.spatialReference.equals(this.spatialReference)) ?? t18;
      if (s17) return {
        candidates: [{
          extent: s17,
          layer: a14
        }],
        updating: false
      };
      if (this._getSupportedSpatialReferences(a14).length > 0) for (const i15 of e17) n23.push({
        extent: i15,
        layer: a14
      });
    }
    return {
      candidates: n23,
      updating: t17
    };
  }
  get _extentTask() {
    const {
      candidates: e16,
      updating: t17
    } = this._extentCandidatesTask;
    if (t17) return {
      updating: t17
    };
    if (null == e16 || 0 === e16.length) return {
      updating: false
    };
    if (!this.spatialReference) return {
      updating: this._spatialReferenceTask.updating
    };
    const i15 = this._pickExtentCandidate(e16), r15 = this.spatialReference;
    return i15.extent.equals(this._projectExtentTask.input) && r15.equals(this._projectExtentTask.spatialReference) ? {
      extent: this._projectExtentTask.output,
      updating: null != this._projectExtentTask.task && !this._projectExtentTask.task.finished
    } : (null != this._projectExtentTask.task && (this._projectExtentTask.task = e(this._projectExtentTask.task)), this._projectExtentTask = {
      input: i15.extent.clone(),
      output: null,
      spatialReference: r15.clone(),
      task: d((e17) => __async(this, null, function* () {
        try {
          const t18 = yield p9(i15.extent, r15, "portalItem" in i15.layer ? i15.layer.portalItem : void 0, e17);
          this._projectExtentTask = __spreadProps(__spreadValues({}, this._projectExtentTask), {
            task: null,
            output: t18
          });
        } catch (t18) {
          if (c(e17)) return;
          this._projectExtentTask = __spreadProps(__spreadValues({}, this._projectExtentTask), {
            task: null
          });
        }
      }))
    }, {
      updating: true
    });
  }
  _narrowDownSpatialReferenceCandidates(e16, t17) {
    if (null == e16) return t17;
    const n23 = new Array();
    for (const a14 of e16) for (const e17 of t17) {
      if (!a14.spatialReference.equals(e17.spatialReference)) continue;
      const t18 = h4(a14.viewingMode, e17.viewingMode);
      if (false !== t18) {
        n23.push({
          spatialReference: a14.spatialReference,
          viewingMode: t18
        });
        break;
      }
    }
    return n23.length > 0 ? n23 : null;
  }
  _pickSpatialReferenceCandidate(e16) {
    const t17 = this.defaultSpatialReference;
    return null == e16 || e16.length < 1 ? t17 ? {
      spatialReference: t17,
      viewingMode: null
    } : null : (null != t17 && e16.length > 1 && e16.some(({
      spatialReference: e17
    }) => e17.equals(t17)) && (e16 = e16.filter(({
      spatialReference: e17
    }) => e17.equals(t17))), e16.length > 1 && e16.some(({
      viewingMode: e17
    }) => e17 !== l4.Local) && (e16 = e16.filter(({
      viewingMode: e17
    }) => e17 !== l4.Local)), e16[0]);
  }
  _getSupportedSpatialReferences(e16) {
    const t17 = "supportedSpatialReferences" in e16 && e16.supportedSpatialReferences || (e16.spatialReference ? [e16.spatialReference] : []);
    if (0 === t17.length) return [];
    const n23 = [];
    for (const a14 of t17) {
      const t18 = this.getSpatialReferenceSupport(a14, e16);
      if (null != t18) {
        const e17 = t18.constraints ?? [{
          spatialReference: a14,
          viewingMode: null
        }];
        for (const {
          spatialReference: t19,
          viewingMode: a15
        } of e17) this.requiresExtentInSpatialReference && null != this.userSpatialReference && !t19.equals(this.userSpatialReference) || n23.push({
          spatialReference: t19,
          viewingMode: a15
        });
      }
    }
    return n23;
  }
  _pickExtentCandidate(e16) {
    const t17 = this.spatialReference;
    return e16.find(({
      extent: e17
    }) => t17.equals(e17.spatialReference)) || e16[0];
  }
  _collectLayers(e16) {
    if ("loaded" !== this._loadMaybe(this.map?.())) return {
      layers: [],
      updating: true
    };
    const t17 = new f6();
    for (const n23 of e16) if (this._collectCollection(n23, t17), t17.preloading === this.sourcePreloadCount) break;
    return {
      layers: t17.layers,
      updating: t17.updating
    };
  }
  _collectCollection(e16, t17) {
    if (e16.layers) {
      switch (this._loadMaybe(e16.parent)) {
        case "loading":
          return t17.updating = true, void ++t17.preloading;
        case "failed":
          return;
      }
      for (const n23 of e16.layers) {
        switch (this._loadMaybe(n23)) {
          case "failed":
            continue;
          case "loading":
            t17.updating = true, ++t17.preloading;
            break;
          case "loaded":
            t17.updating || t17.layers.push(n23), "layers" in n23 && this._collectCollection({
              layers: n23.layers
            }, t17);
        }
        if (t17.preloading === this.sourcePreloadCount) break;
      }
    }
  }
  _loadMaybe(e16) {
    return e16 && "loadStatus" in e16 && null != e16.loadStatus ? "not-loaded" === e16.loadStatus ? (e16.load().catch((e17) => {
      b(e17) || console.log(e17);
    }), "loading") : e16.loadStatus : "loaded";
  }
};
e3([y()], d6.prototype, "required", void 0), e3([y({
  constructOnly: true
})], d6.prototype, "map", void 0), e3([y({
  constructOnly: true
})], d6.prototype, "getSpatialReferenceSupport", void 0), e3([y()], d6.prototype, "defaultSpatialReference", void 0), e3([y()], d6.prototype, "userSpatialReference", void 0), e3([y()], d6.prototype, "sourcePreloadCount", void 0), e3([y()], d6.prototype, "priorityCollection", void 0), e3([y()], d6.prototype, "requiresExtentInSpatialReference", void 0), e3([y()], d6.prototype, "suspended", void 0), e3([y({
  readOnly: true
})], d6.prototype, "ready", null), e3([y({
  readOnly: true
})], d6.prototype, "heightModelInfoReady", null), e3([y({
  readOnly: true
})], d6.prototype, "spatialReference", null), e3([y({
  readOnly: true
})], d6.prototype, "extent", null), e3([y({
  readOnly: true
})], d6.prototype, "heightModelInfo", null), e3([y({
  readOnly: true
})], d6.prototype, "vcsWkid", null), e3([y({
  readOnly: true
})], d6.prototype, "latestVcsWkid", null), e3([y({
  readOnly: true
})], d6.prototype, "viewingMode", null), e3([y({
  readOnly: true
})], d6.prototype, "tileInfo", null), e3([y({
  readOnly: true
})], d6.prototype, "mapCollections", null), e3([y({
  readOnly: true
})], d6.prototype, "_allLayers", null), e3([y({
  readOnly: true
})], d6.prototype, "_spatialReferenceTask", null), e3([y({
  readOnly: true
})], d6.prototype, "_tileInfoTask", null), e3([y({
  readOnly: true
})], d6.prototype, "_heightModelInfoTask", null), e3([y({
  readOnly: true
})], d6.prototype, "_extentCandidatesTask", null), e3([y()], d6.prototype, "_extentTask", null), e3([y()], d6.prototype, "_projectExtentTask", void 0), d6 = e3([a2("esri.views.support.DefaultsFromMap")], d6);
var f6 = class {
  constructor() {
    this.layers = new Array(), this.preloading = -1, this.updating = false;
  }
};
function h4(e16, t17) {
  return null != e16 ? null != t17 ? e16 === t17 && e16 : e16 : t17;
}

// ../../../node_modules/@arcgis/core/views/View.js
var W2;
var G2 = W2 = class extends o5.EventedMixin(n5(S2)) {
  constructor(e16) {
    super(e16), this._userSpatialReference = null, this._cursor = null, this.handles = new r(), this.updatingHandles = new h2(), this.allLayerViews = new l3({
      getCollections: () => [this.basemapView?.baseLayerViews, this.groundView?.layerViews, this.layerViews, this.basemapView?.referenceLayerViews],
      getChildrenFunction: B2
    }), this.groundView = null, this.basemapView = null, this.fatalError = null, this.graphics = new c7(), this.analyses = new t7(), this.typeSpecificPreconditionsReady = true, this.layerViews = new V(), this.magnifier = new p3(), this.padding = {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0
    }, this.ready = false, this.spatialReferenceWarningDelay = 1e3, this.supportsGround = true, this.timeExtent = null, this.type = null, this.scale = null, this.updating = false, this.initialExtentRequired = true, this.input = new a5(), this.navigation = new p8(), this.layerViewManager = null, this.analysisViewManager = null, this.isHeightModelInfoRequired = false, this.width = null, this.height = null, this.resizing = false, this.suspended = false, this.viewEvents = new c8(this), this.persistableViewModels = new V(), this._isValid = false, this._readyCycleForced = false, this._lockedSpatialReference = null, this._userTimeZone = null, this._lockedTimeZone = null, this.theme = null, this.handles.add(d2(() => this.preconditionsReady, (e17) => {
      const t17 = this.ready;
      if (e17 ? (this._lockedSpatialReference = this.spatialReference, this._lockedTimeZone = this.timeZone, W2.views.add(this)) : (this._lockedSpatialReference = null, W2.views.remove(this)), this.notifyChange("spatialReference"), !e17 && t17) this.toolViewManager?.detach(), null != this.analysisViewManager && this.analysisViewManager.detach(), this.layerViewManager?.clear(), this._teardown();
      else if (e17 && !t17) {
        try {
          this._startup();
        } catch (i15) {
          return void queueMicrotask(() => {
            this.fatalError = new s("startup-error", null, i15);
          });
        }
        null != this.analysisViewManager && this.analysisViewManager.attach(), this.toolViewManager.attach();
      }
    }, C));
  }
  initialize() {
    this.addResolvingPromise(Promise.all([this.loadAsyncDependencies(), this.validate()]).then(() => (this._isValid = true, w(() => this.ready)))), this.basemapView = new n13({
      view: this
    }), this.layerViewManager = new I({
      view: this,
      layerViewImporter: {
        importLayerView: (e16) => this.importLayerView(e16),
        hasLayerViewModule: (e16) => this.hasLayerViewModule(e16)
      },
      supportsGround: this.supportsGround
    }), this.toolViewManager = new f5({
      view: this
    }), this._setupSpatialReferenceLogger(), this.selectionManager = new b3({
      view: this
    }), this.addHandles([d2(() => this.initialExtentRequired, (e16) => this.defaultsFromMap.required = __spreadProps(__spreadValues({}, this.defaultsFromMap.required), {
      extent: e16
    }), A3), d2(() => this.ready, (e16) => {
      this.defaultsFromMap && (this.defaultsFromMap.suspended = e16, this.defaultsFromMap.userSpatialReference = e16 ? this.spatialReference : this._userSpatialReference);
    }, C), d2(() => this._userSpatialReference, (e16) => {
      this.defaultsFromMap && (this.defaultsFromMap.userSpatialReference = e16);
    }, A3)]);
  }
  _setupSpatialReferenceLogger() {
    let e16 = null;
    this.addHandles([d2(() => this.defaultsFromMap?.ready, (t17) => {
      const i15 = this.map?.allLayers.length > 0;
      if (t17 && !this.spatialReference && i15) {
        if (null != e16) return;
        const t18 = e2(() => e16 = e(e16));
        e16 = d((t19) => __async(this, null, function* () {
          try {
            yield A(this.spatialReferenceWarningDelay, null, t19);
          } catch {
            return;
          } finally {
            e16 = null;
          }
          n.getLogger(this).warn("#spatialReference", "no spatial reference could be derived from the currently added map layers");
        })), this.addHandles(t18, "spatial-reference-logger-task");
      } else this.removeHandles("spatial-reference-logger-task");
    }, {
      sync: true
    })]);
  }
  destroy() {
    this.destroyed || (W2.views.remove(this), this.viewEvents.destroy(), this.allLayerViews.destroy(), this.navigation && (this.navigation.destroy(), this._set("navigation", null)), this.graphics = u(this.graphics), this.analyses = u(this.analyses), this.defaultsFromMap.destroy(), this._set("defaultsFromMap", null), u(this.analysisViewManager), this.toolViewManager = u(this.toolViewManager), this.layerViewManager = u(this.layerViewManager), this.selectionManager = u(this.selectionManager), this.basemapView = u(this.basemapView), this.groundView?.destroy(), this.layerViews?.forEach((e16) => e16.destroy()), this.layerViews.length = 0, this.invalidate(), this._emitter.clear(), this.handles.destroy(), this.map = u(this.map), this.updatingHandles.destroy());
  }
  _startup() {
    this._set("ready", true);
  }
  _teardown() {
    this._set("ready", false);
  }
  whenReady() {
    return Promise.resolve(this);
  }
  toMap() {
    return n.getLogger(this).error("#toMap()", "Not implemented on this instance of View"), null;
  }
  get activeTool() {
    return this.toolViewManager?.activeTool;
  }
  set activeTool(e16) {
    this.toolViewManager && (this.toolViewManager.activeTool = e16);
  }
  get animation() {
    return this._get("animation");
  }
  set animation(e16) {
    this._set("animation", e16);
  }
  get center() {
    return null;
  }
  get _defaultsFromMapSettings() {
    return {};
  }
  get defaultsFromMap() {
    return new d6(__spreadValues({
      required: {
        tileInfo: false,
        heightModelInfo: false,
        extent: false
      },
      map: () => this.map,
      getSpatialReferenceSupport: (e16, t17) => this.getSpatialReferenceSupport(e16, t17)
    }, this._defaultsFromMapSettings));
  }
  get extent() {
    return this._get("extent");
  }
  set extent(e16) {
    this._set("extent", e16);
  }
  get heightModelInfo() {
    return this.getDefaultHeightModelInfo();
  }
  get interacting() {
    return this.navigating;
  }
  get navigating() {
    return false;
  }
  get preconditionsReady() {
    return !(this.fatalError || !this._isValid || this._readyCycleForced || !this.map || m3.isLoadable(this.map) && !this.map.loaded || 0 === this.width || 0 === this.height || !this.spatialReference || !this._validateSpatialReference(this.spatialReference) || !this._lockedSpatialReference && !this.defaultsFromMap?.ready || !this.typeSpecificPreconditionsReady);
  }
  get resolution() {
    return 0;
  }
  set map(e16) {
    e16 !== this._get("map") && (e16?.destroyed && (n.getLogger(this).warn("#map", "The provided map is already destroyed", {
      map: e16
    }), e16 = null), m3.isLoadable(e16) && e16.load().catch(() => {
    }), this.constructed && !this.destroyed && (this.forceReadyCycle(), this._lockedSpatialReference = null), this._set("map", e16));
  }
  get spatialReference() {
    const e16 = this._userSpatialReference || this._lockedSpatialReference || this.getDefaultSpatialReference() || null;
    if (e16 && this.defaultsFromMap?.required?.heightModelInfo) {
      const t17 = e16.clone();
      return t17.vcsWkid = this.defaultsFromMap.vcsWkid, t17.latestVcsWkid = this.defaultsFromMap.latestVcsWkid, t17;
    }
    return e16;
  }
  set spatialReference(e16) {
    const t17 = !G(e16, this._get("spatialReference"));
    this._set("_userSpatialReference", e16), t17 && (this._set("spatialReference", e16), this._spatialReferenceChanged(e16));
  }
  _spatialReferenceChanged(e16) {
  }
  get stationary() {
    return !this.animation && !this.navigating && !this.resizing;
  }
  get timeZone() {
    return this._userTimeZone ?? this._lockedTimeZone ?? this.getDefaultTimeZone() ?? o6;
  }
  set timeZone(e16) {
    const t17 = /* @__PURE__ */ new Set(["etc/utc", "etc/gmt", "gmt"]), i15 = new Set(Intl.supportedValuesOf("timeZone").map((e17) => e17.toLowerCase()));
    this._userTimeZone = e16, e16 === o6 || e16 === r4 || t17.has(e16.toLowerCase()) || i15.has(e16.toLowerCase()) || n.getLogger(this).warn("#timeZone", `the parsed value '${e16}' may not be a valid IANA time zone`);
  }
  get tools() {
    return this.toolViewManager?.tools;
  }
  get initialExtent() {
    return this.defaultsFromMap?.extent;
  }
  get cursor() {
    return this.toolViewManager?.cursor ?? this._cursor ?? "default";
  }
  set cursor(e16) {
    this._cursor = e16, this.notifyChange("cursor");
  }
  get size() {
    return [this.width, this.height];
  }
  get effectiveTheme() {
    return this.theme ?? new l9();
  }
  whenLayerView(e16) {
    return this.layerViewManager?.whenLayerView(e16) ?? Promise.reject();
  }
  getDefaultSpatialReference() {
    return this.defaultsFromMap?.spatialReference;
  }
  getDefaultHeightModelInfo() {
    return (this.map && "heightModelInfo" in this.map ? this.map.heightModelInfo : void 0) ?? this.defaultsFromMap?.heightModelInfo ?? null;
  }
  getDefaultTimeZone() {
    return null;
  }
  importLayerView(e16) {
    throw new s("importLayerView() not implemented");
  }
  hasLayerViewModule(e16) {
    return false;
  }
  validate() {
    return __async(this, null, function* () {
    });
  }
  loadAsyncDependencies() {
    return __async(this, null, function* () {
    });
  }
  invalidate() {
    this._isValid = false;
  }
  getSpatialReferenceSupport() {
    return {
      constraints: null
    };
  }
  _validateSpatialReference(e16) {
    return null != this.getSpatialReferenceSupport(e16);
  }
  when(e16, t17) {
    return this.isResolved() && !this.ready && n.getLogger(this).warn("#when()", "Calling view.when() while the view is no longer ready but was already resolved once will resolve immediately. Use reactiveUtils.whenOnce(() => view.ready).then(...) instead."), super.when(e16, t17);
  }
  forceReadyCycle() {
    this.ready && (p(() => this.destroyed || false === this.preconditionsReady, () => this._readyCycleForced = false, {
      once: true
    }), this._readyCycleForced = true);
  }
  addAndActivateTool(e16) {
    this.toolViewManager.tools.add(e16), this.activeTool = e16;
  }
  tryFatalErrorRecovery() {
    this.fatalError = null;
  }
};
G2.views = new V(), e3([y()], G2.prototype, "_userSpatialReference", void 0), e3([y()], G2.prototype, "activeTool", null), e3([y({
  readOnly: true
})], G2.prototype, "allLayerViews", void 0), e3([y()], G2.prototype, "groundView", void 0), e3([y()], G2.prototype, "animation", null), e3([y()], G2.prototype, "basemapView", void 0), e3([y()], G2.prototype, "center", null), e3([y({
  readOnly: true
})], G2.prototype, "_defaultsFromMapSettings", null), e3([y()], G2.prototype, "defaultsFromMap", null), e3([y()], G2.prototype, "fatalError", void 0), e3([y({
  type: w2
})], G2.prototype, "extent", null), e3([y(l5(c7, "graphics"))], G2.prototype, "graphics", void 0), e3([y(l5(t7, "analyses"))], G2.prototype, "analyses", void 0), e3([y({
  readOnly: true,
  type: v3
})], G2.prototype, "heightModelInfo", null), e3([y({
  readOnly: true
})], G2.prototype, "interacting", null), e3([y({
  readOnly: true
})], G2.prototype, "navigating", null), e3([y({
  readOnly: true,
  dependsOn: ["fatalError", "_isValid", "_readyCycleForced", "map", "map.loaded?", "width", "height", "spatialReference", "_lockedSpatialReference", "defaultsFromMap.ready", "typeSpecificPreconditionsReady"]
})], G2.prototype, "preconditionsReady", null), e3([y({
  readOnly: true
})], G2.prototype, "typeSpecificPreconditionsReady", void 0), e3([y({
  type: V,
  readOnly: true
})], G2.prototype, "layerViews", void 0), e3([y()], G2.prototype, "resolution", null), e3([y({
  type: p3
})], G2.prototype, "magnifier", void 0), e3([y({
  value: null,
  type: L2
})], G2.prototype, "map", null), e3([y()], G2.prototype, "padding", void 0), e3([y({
  readOnly: true
})], G2.prototype, "ready", void 0), e3([y({
  type: f2
})], G2.prototype, "spatialReference", null), e3([y()], G2.prototype, "spatialReferenceWarningDelay", void 0), e3([y()], G2.prototype, "stationary", null), e3([y({
  readOnly: true
})], G2.prototype, "supportsGround", void 0), e3([y({
  type: c5
})], G2.prototype, "timeExtent", void 0), e3([y({
  type: String,
  nonNullable: true
})], G2.prototype, "timeZone", null), e3([y()], G2.prototype, "tools", null), e3([y()], G2.prototype, "toolViewManager", void 0), e3([y({
  readOnly: true
})], G2.prototype, "type", void 0), e3([y({
  type: Number
})], G2.prototype, "scale", void 0), e3([y({
  readOnly: true
})], G2.prototype, "updating", void 0), e3([y({
  readOnly: true
})], G2.prototype, "initialExtentRequired", void 0), e3([y({
  readOnly: true
})], G2.prototype, "initialExtent", null), e3([y()], G2.prototype, "cursor", null), e3([y({
  readOnly: true
})], G2.prototype, "input", void 0), e3([y({
  type: p8,
  nonNullable: true
})], G2.prototype, "navigation", void 0), e3([y()], G2.prototype, "layerViewManager", void 0), e3([y()], G2.prototype, "analysisViewManager", void 0), e3([y()], G2.prototype, "selectionManager", void 0), e3([y()], G2.prototype, "width", void 0), e3([y()], G2.prototype, "height", void 0), e3([y({
  readOnly: true
})], G2.prototype, "resizing", void 0), e3([y({
  value: null,
  readOnly: true
})], G2.prototype, "size", null), e3([y({
  readOnly: true
})], G2.prototype, "suspended", void 0), e3([y({
  readOnly: true
})], G2.prototype, "viewEvents", void 0), e3([y({
  readOnly: true
})], G2.prototype, "persistableViewModels", void 0), e3([y()], G2.prototype, "_isValid", void 0), e3([y()], G2.prototype, "_readyCycleForced", void 0), e3([y()], G2.prototype, "_lockedSpatialReference", void 0), e3([y()], G2.prototype, "_userTimeZone", void 0), e3([y()], G2.prototype, "_lockedTimeZone", void 0), e3([y({
  type: l9
})], G2.prototype, "theme", void 0), e3([y({
  readOnly: true,
  type: l9
})], G2.prototype, "effectiveTheme", null), G2 = W2 = e3([a2("esri.views.View")], G2);
var N = G2;
function B2(e16) {
  return e16.layerViews;
}

// ../../../node_modules/@arcgis/core/views/ViewAnimation.js
var p10 = class extends m2 {
  constructor(t17) {
    super(t17), this.state = "running", this.target = null, this._resolver = null;
  }
  initialize() {
    this._resolver = L(), this.addResolvingPromise(this._resolver.promise);
  }
  get done() {
    return "finished" === this.state || "stopped" === this.state;
  }
  stop() {
    "stopped" !== this.state && "finished" !== this.state && (this._set("state", "stopped"), this._resolver?.reject(new s("ViewAnimation stopped")));
  }
  finish() {
    "stopped" !== this.state && "finished" !== this.state && (this._set("state", "finished"), this._resolver?.resolve());
  }
  update(t17, s17) {
    s17 || (s17 = S(t17) ? "waiting-for-target" : "running"), this._set("target", t17), this._set("state", s17);
  }
};
e3([y({
  readOnly: true
})], p10.prototype, "done", null), e3([y({
  readOnly: true,
  type: String
})], p10.prototype, "state", void 0), e3([y()], p10.prototype, "target", void 0), p10 = e3([a2("esri.views.ViewAnimation")], p10), function(t17) {
  t17.State = {
    RUNNING: "running",
    STOPPED: "stopped",
    FINISHED: "finished",
    WAITING_FOR_TARGET: "waiting-for-target"
  };
}(p10 || (p10 = {}));
var a6 = p10;

// ../../../node_modules/@arcgis/core/views/support/WebGLRequirements.js
function t8(t17) {
  const o22 = t4();
  return o22.available ? "3d" === t17 && o22.majorPerformanceCaveat ? new s("webgl:major-performance-caveat-detected", "Your WebGL implementation doesn't seem to support hardware accelerated rendering. Check your browser settings or if your GPU is in a blocklist.") : o22.supportsHighPrecisionFragment ? o22.supportsVertexShaderSamplers ? null : new s("webgl:vertex-shader-samplers-required", "WebGL support for vertex shader samplers is required but not supported.") : new s("webgl:high-precision-fragment-required", "WebGL support for high precision fragment shaders is required but not supported.") : new s("webgl:required", "WebGL2 is required but not supported.", new Error().stack);
}

// ../../../node_modules/@arcgis/core/views/ui/Component.js
function n17(t17) {
  return t17 && "nodeType" in t17;
}
function d7(t17) {
  return t17 && "function" == typeof t17.render;
}
var c12 = {
  component: "esri-component"
};
var p11 = class extends S2 {
  constructor() {
    super(...arguments), this.widget = null;
  }
  destroy() {
    this.node = null, this.widget?.destroy();
  }
  get id() {
    return this._get("id") ?? this.widget?.id ?? this.node?.id;
  }
  set id(t17) {
    this._set("id", t17);
  }
  set node(t17) {
    const o22 = this._get("node");
    t17 !== o22 && (t17 && t17.classList.add(c12.component), o22 && o22.classList.remove(c12.component), this._set("node", t17));
  }
  castNode(t17) {
    return this.widget?.destroy(), t17 ? "string" == typeof t17 || n17(t17) ? (this._set("widget", null), e4(t17)) : (d7(t17) && !t17.domNode && (t17.domNode = document.createElement("div")), this._set("widget", t17), t17.domNode) : (this._set("widget", null), null);
  }
};
e3([y()], p11.prototype, "id", null), e3([y()], p11.prototype, "node", null), e3([s3("node")], p11.prototype, "castNode", null), e3([y({
  readOnly: true
})], p11.prototype, "widget", void 0), p11 = e3([a2("esri.views.ui.Component")], p11);
var m8 = p11;

// ../../../node_modules/@arcgis/core/views/ui/UI.js
var g11 = {
  left: 0,
  top: 0,
  bottom: 0,
  right: 0
};
var y5 = {
  bottom: 30,
  top: 15,
  right: 15,
  left: 15
};
var C4 = "esri-ui";
var v7 = {
  ui: C4,
  corner: `${C4}-corner`,
  innerContainer: `${C4}-inner-container`,
  manualContainer: `${C4}-manual-container`,
  cornerContainer: `${C4}-corner-container`,
  topLeft: `${C4}-top-left`,
  topRight: `${C4}-top-right`,
  bottomLeft: `${C4}-bottom-left`,
  bottomRight: `${C4}-bottom-right`
};
function b4(t17) {
  return t17 && !t17._started && "function" == typeof t17.postMixInProperties && "function" == typeof t17.buildRendering && "function" == typeof t17.postCreate && "function" == typeof t17.startup;
}
function w5(t17) {
  return 0 === t17 ? "0" : `${t17}px`;
}
function P3(t17) {
  const o22 = "object" == typeof t17 && null !== t17 && Object.getPrototypeOf(t17);
  return (null === o22 || o22 === Object.prototype) && ("component" in t17 || "index" in t17 || "position" in t17) ? t17 : null;
}
function L4(t17, {
  top: o22,
  bottom: e16,
  left: n23,
  right: i15
}) {
  t17.style.top = o22, t17.style.bottom = e16, t17.style.left = n23, t17.style.right = i15;
}
var j2 = class extends o5.EventedAccessor {
  constructor(t17) {
    super(t17), this._cornerNameToContainerLookup = {}, this._positionNameToContainerLookup = {}, this._components = new Array(), this._componentMap = /* @__PURE__ */ new Map(), this._removeWidgetHandleKey = Symbol("componentOnRemoveSymbol"), this._locale = c3(), this.view = null, this._applyViewPadding = () => {
      const t18 = this.container;
      t18 && L4(t18, this._toPixelPosition(this._getViewPadding()));
    }, this._applyUIPadding = () => {
      const t18 = this._innerContainer;
      t18 && L4(t18, this._toPixelPosition(this.padding));
    }, this._initContainers();
  }
  initialize() {
    this.addHandles([d2(() => [this.view?.padding, this.container], this._applyViewPadding, P), d2(() => this.padding, this._applyUIPadding, P), d2(() => [this.container, this._locale], ([t17, o22]) => {
      t17 && t17.setAttribute("lang", o22);
    }, P), f((t17) => {
      this._locale = t17;
    })]);
  }
  destroy() {
    this.container = null;
    for (const t17 of this._components) t17.destroy();
    this._components.length = 0, this._componentMap.clear();
  }
  set container(t17) {
    const o22 = this._get("container");
    t17 !== o22 && (t17 && (t17.classList.add(v7.ui), n7(t17), this._attachContainers(t17)), o22 && (o22.classList.remove(v7.ui), L4(o22, {
      top: "",
      bottom: "",
      left: "",
      right: ""
    }), n4(o22)), this._set("container", t17));
  }
  get height() {
    const t17 = this.view?.height ?? 0;
    if (0 === t17) return t17;
    const o22 = this._getViewPadding(), {
      top: e16,
      bottom: n23
    } = o22;
    return Math.max(t17 - e16 - n23, 0);
  }
  get padding() {
    return this._get("padding");
  }
  set padding(t17) {
    this._overrideIfSome("padding", t17);
  }
  castPadding(t17) {
    return "number" == typeof t17 ? {
      bottom: t17,
      top: t17,
      right: t17,
      left: t17
    } : __spreadValues(__spreadValues({}, y5), t17);
  }
  get width() {
    const t17 = this.view?.width ?? 0;
    if (0 === t17) return t17;
    const o22 = this._getViewPadding(), {
      left: e16,
      right: n23
    } = o22;
    return Math.max(t17 - e16 - n23, 0);
  }
  add(t17, o22) {
    let e16, n23, i15;
    if (Array.isArray(t17)) return void t17.forEach((t18) => this.add(t18, o22));
    const r15 = P3(t17);
    r15 && ({
      index: e16,
      position: o22,
      component: t17,
      key: n23
    } = r15), o22 && "object" == typeof o22 && ({
      index: e16,
      key: n23,
      position: o22,
      internal: i15
    } = o22), !t17 || o22 && !this._isValidPosition(o22) || this._add(t17, o22, e16, n23, i15);
  }
  remove(t17, o22) {
    if (!t17) return;
    if (Array.isArray(t17)) return t17.map((t18) => this.remove(t18, o22));
    const e16 = this._find(t17);
    if (e16) {
      if (this._componentMap.has(e16) && this._componentMap.get(e16)?.key !== o22) return;
      const t18 = this._components.indexOf(e16), n23 = e16.node.parentNode;
      return n23?.removeChild(e16.node), this._componentMap.delete(e16), e16.widget?.removeHandlesReference(this._removeWidgetHandleKey), this._components.splice(t18, 1)[0];
    }
  }
  empty(t17, o22 = {
    removeInternal: false
  }) {
    if (Array.isArray(t17)) {
      for (const e17 of t17) this.empty(e17, o22);
      return;
    }
    const e16 = this._positionNameToContainerLookup[t17 ?? "manual"], n23 = Array.prototype.slice.call(e16.children).map((t18) => this._findByNode(t18)).filter((t18) => {
      if (null == t18) return false;
      return !(this._componentMap.get(t18)?.internal ?? false) || o22.removeInternal;
    });
    for (const i15 of n23) this.remove(i15);
  }
  move(t17, o22) {
    if (Array.isArray(t17) && t17.forEach((t18) => this.move(t18, o22)), !t17) return;
    let e16;
    const n23 = P3(t17) || P3(o22);
    if (n23 && (e16 = n23.index, o22 = n23.position, t17 = n23.component || t17), o22 && !this._isValidPosition(o22)) return;
    const i15 = this.remove(t17);
    i15 && this.add(i15, {
      position: o22,
      index: e16
    });
  }
  find(t17) {
    if (!t17) return null;
    const o22 = this._findById(t17);
    return o22 && (o22.widget || o22.node);
  }
  getComponents(t17, o22 = {
    includeInternal: false
  }) {
    return t17 ? Array.isArray(t17) ? t17.flatMap((t18) => this._getComponentsAtPosition(t18, o22)) : this._getComponentsAtPosition(t17, o22) : this._components.filter((t18) => o22.includeInternal || !this._componentMap.get(t18)?.internal).map(({
      widget: t18,
      node: o23
    }) => t18 ?? o23);
  }
  getPosition(t17) {
    for (const o22 in this._positionNameToContainerLookup) {
      if (this._positionNameToContainerLookup[o22].contains(t17)) return o22;
    }
    return null;
  }
  _add(t17, e16, n23, i15, r15) {
    t17 instanceof m8 || (t17 = new m8({
      node: t17
    }));
    const {
      widget: a14
    } = t17;
    null != a14 && a14 instanceof S2 && a14.addHandles(e2(() => {
      queueMicrotask(() => this.remove(t17));
    }), this._removeWidgetHandleKey), this._place({
      component: t17,
      position: e16,
      index: n23
    }), this._components.push(t17), this._componentMap.set(t17, {
      key: i15,
      internal: r15
    });
  }
  _find(t17) {
    return t17 ? t17 instanceof m8 ? this._findByComponent(t17) : "string" == typeof t17 ? this._findById(t17) : this._findByNode(t17.domNode || t17) : null;
  }
  _getViewPadding() {
    return this.view?.padding ?? g11;
  }
  _attachContainers(t17) {
    t17.appendChild(this._innerContainer), t17.appendChild(this._manualContainer);
  }
  _initContainers() {
    const t17 = document.createElement("div");
    t17.classList.add(v7.innerContainer, v7.cornerContainer);
    const o22 = document.createElement("div");
    o22.classList.add(v7.innerContainer, v7.manualContainer);
    const e16 = document.createElement("div");
    e16.classList.add(v7.topLeft, v7.corner), t17.appendChild(e16);
    const n23 = document.createElement("div");
    n23.classList.add(v7.topRight, v7.corner), t17.appendChild(n23);
    const i15 = document.createElement("div");
    i15.classList.add(v7.bottomLeft, v7.corner), t17.appendChild(i15);
    const r15 = document.createElement("div");
    r15.classList.add(v7.bottomRight, v7.corner), t17.appendChild(r15), this._innerContainer = t17, this._manualContainer = o22;
    const s17 = g3();
    this._cornerNameToContainerLookup = {
      "top-left": e16,
      "top-right": n23,
      "bottom-left": i15,
      "bottom-right": r15,
      "top-leading": s17 ? n23 : e16,
      "top-trailing": s17 ? e16 : n23,
      "bottom-leading": s17 ? r15 : i15,
      "bottom-trailing": s17 ? i15 : r15
    }, this._positionNameToContainerLookup = __spreadValues({
      manual: o22
    }, this._cornerNameToContainerLookup);
  }
  _isValidPosition(t17) {
    return !!this._positionNameToContainerLookup[t17];
  }
  _place(t17) {
    const o22 = t17.position ?? "manual", {
      component: e16,
      index: n23
    } = t17, r15 = this._positionNameToContainerLookup[o22], s17 = null != n23 && n23 > -1;
    if (b4(e16.widget) && e16.widget.startup(), !s17) return void r15.appendChild(e16.node);
    const a14 = Array.from(r15.children);
    if (0 === n23) return void (r15.firstChild ? o7(e16.node, r15.firstChild) : r15.appendChild(e16.node));
    n23 >= a14.length ? r15.appendChild(e16.node) : o7(e16.node, a14[n23]);
  }
  _toPixelPosition(t17) {
    return {
      top: w5(t17.top),
      left: w5(t17.left),
      right: w5(t17.right),
      bottom: w5(t17.bottom)
    };
  }
  _findByComponent(t17) {
    return this._components.find((o22) => o22 === t17) ?? null;
  }
  _findById(t17) {
    return this._components.find(({
      id: o22
    }) => o22 === t17) ?? null;
  }
  _findByNode(t17) {
    return this._components.find(({
      node: o22
    }) => o22 === t17) ?? null;
  }
  _getComponentsAtPosition(t17, o22) {
    const n23 = this._positionNameToContainerLookup[t17];
    return Array.prototype.slice.call(n23.children).map((t18) => this._findByNode(t18)).filter(O).filter((t18) => o22.includeInternal || !this._componentMap.get(t18)?.internal).map(({
      widget: t18,
      node: o23
    }) => t18 ?? o23);
  }
};
e3([y()], j2.prototype, "_locale", void 0), e3([y()], j2.prototype, "container", null), e3([y()], j2.prototype, "height", null), e3([y({
  value: y5
})], j2.prototype, "padding", null), e3([s3("padding")], j2.prototype, "castPadding", null), e3([y()], j2.prototype, "view", void 0), e3([y()], j2.prototype, "width", null), j2 = e3([a2("esri.views.ui.UI")], j2);
var A4 = j2;

// ../../../node_modules/@arcgis/core/widgets/Attribution/AttributionViewModel.js
function f7(t17, e16) {
  return t17 && "copyright" in t17 && (!e16 || "function" == typeof t17.originOf && "user" === t17.originOf("copyright"));
}
function y6(t17, e16) {
  return t17.length !== e16.length || t17.some((t18, i15) => t18.text !== e16[i15].text);
}
function b5(t17, e16, i15) {
  if (!i15 || !e16) return;
  t17.find((t18) => t18.layerView === e16 && t18.text === i15) || t17.push({
    text: i15,
    layerView: e16
  });
}
function g12(t17) {
  return "bing-maps" === t17.type;
}
var A5 = [];
var _6 = class extends S2 {
  constructor(t17) {
    super(t17), this._clear = () => {
      this._fetchedAttributionData.clear(), this._pendingAttributions.clear(), this.removeHandles("suspension"), this.notifyChange("state");
    }, this._pendingAttributions = /* @__PURE__ */ new Set(), this._fetchedAttributionData = /* @__PURE__ */ new Map(), this.items = new V(), this.view = null, this._allLayerViewsChange = (t18) => {
      this.removeHandles("suspension"), this.removeHandles("visible-geometry-changed");
      const e16 = this.view?.allLayerViews;
      e16 && (this.addHandles(e16.map((t19) => d2(() => [t19.suspended, t19.layer?.attributionVisible], () => this._updateAttributionItems())).toArray(), "suspension"), e16.forEach((t19) => {
        "esri.views.3d.layers.Tiles3DLayerView3D" === t19.declaredClass && this.addHandles(t19.on("visible-geometry-changed", () => this._updateAttributionItems()), "visible-geometry-changed");
      })), t18?.removed && t18.removed.forEach((t19) => {
        this._pendingAttributions.delete(t19), this._fetchedAttributionData.delete(t19);
      }), this._updateAttributionItems();
    }, this.addHandles([v2(() => this.view?.allLayerViews, "change", (t18) => this._allLayerViewsChange(t18), {
      onListenerAdd: () => this._allLayerViewsChange(),
      onListenerRemove: this._clear
    }), p(() => true === this.view?.stationary, () => this._updateAttributionItems())]);
  }
  destroy() {
    this.view = null, this._fetchedAttributionData.clear(), this._pendingAttributions.clear(), this.items.removeAll();
  }
  get state() {
    return this.view?.ready ? this._pendingAttributions.size > 0 ? "loading" : "ready" : "disabled";
  }
  _updateAttributionItems() {
    const t17 = this.view, e16 = t17?.allLayerViews;
    if (A5.length = 0, !t17 || !e16) return void this._clear();
    e16.forEach((e17) => {
      if (e17.suspended || !e17.layer?.attributionVisible) return;
      const i16 = e17.layer;
      if (f7(i16, "user")) return void b5(A5, e17, i16.copyright);
      if (i16.hasAttributionData) {
        if (this._fetchedAttributionData.has(e17)) {
          const r16 = this._fetchedAttributionData.get(e17);
          return void (r16 ? b5(A5, e17, this._getDynamicAttribution(r16, t17, i16)) : f7(i16) && b5(A5, e17, i16.copyright));
        }
        return void this._fetchAttributionData(e17);
      }
      const r15 = "portalItem" in i16 ? i16.portalItem?.accessInformation : void 0;
      b5(A5, e17, r15 || i16.copyright);
    });
    const i15 = e16.find((t18) => "integrated-mesh-3dtiles" === t18.layer?.type);
    if (this.view && i15) {
      const t18 = l7(this.view);
      if (t18) {
        const e17 = t18.getAttributionText();
        for (let t19 = 0; t19 < e17.length; ++t19) b5(A5, i15, e17[t19]);
      }
    }
    y6(this.items, A5) && (this.items.removeAll(), this.items.addMany(A5)), A5.length = 0, this.notifyChange("state");
  }
  _fetchAttributionData(t17) {
    return __async(this, null, function* () {
      if (this._pendingAttributions.has(t17)) return;
      this._pendingAttributions.add(t17);
      const e16 = yield _(t17.layer.fetchAttributionData());
      if (this._pendingAttributions.has(t17)) {
        const i15 = e16.ok ? this._createContributionIndex(e16.value, g12(t17.layer)) : null;
        this._pendingAttributions.delete(t17), this._fetchedAttributionData.set(t17, i15);
      }
      this._updateAttributionItems();
    });
  }
  _createContributionIndex(t17, e16) {
    const i15 = t17.contributors, r15 = {};
    if (!i15) return r15;
    for (let s17 = 0; s17 < i15.length; s17++) {
      const t18 = i15[s17], o22 = t18.coverageAreas;
      if (!o22) return;
      for (const i16 of o22) {
        const o23 = i16.bbox, n23 = i16.zoomMin - (e16 && i16.zoomMin ? 1 : 0), a14 = i16.zoomMax - (e16 && i16.zoomMax ? 1 : 0), c18 = new w2({
          xmin: o23[1],
          ymin: o23[0],
          xmax: o23[3],
          ymax: o23[2],
          spatialReference: f2.WGS84
        }), u9 = {
          extent: d3(c18),
          attribution: t18.attribution || "",
          score: null != i16.score ? i16.score : 100,
          id: s17
        };
        for (let t19 = n23; t19 <= a14; t19++) r15[t19] ??= [], r15[t19].push(u9);
      }
    }
    return r15.maxKey = Math.max.apply(null, Object.keys(r15)), r15;
  }
  _getDynamicAttribution(t17, e16, i15) {
    const {
      extent: r15,
      scale: s17
    } = e16;
    let o22 = i15.tileInfo?.scaleToZoom(s17) ?? 0;
    if (o22 = Math.min(t17.maxKey ?? 0, Math.round(o22)), !r15 || null == o22 || o22 <= -1) return "";
    const n23 = t17[o22], a14 = g4(r15.center.clone().normalize(), e16.spatialReference), c18 = /* @__PURE__ */ new Set();
    return n23 ? n23.filter((t18) => {
      const e17 = t18.id, i16 = !c18.has(e17) && a14 && t18.extent && t3(t18.extent, a14);
      return i16 && c18.add(e17), i16;
    }).sort((t18, e17) => e17.score - t18.score || t18.objectId - e17.objectId).map((t18) => t18.attribution).join(", ") : "";
  }
};
e3([y({
  readOnly: true,
  type: V
})], _6.prototype, "items", void 0), e3([y({
  readOnly: true
})], _6.prototype, "state", null), e3([y()], _6.prototype, "view", void 0), _6 = e3([a2("esri.widgets.Attribution.AttributionViewModel")], _6);
var v8 = _6;

// ../../../node_modules/@arcgis/core/widgets/Attribution.js
var c13 = "esri-attribution";
var a7 = {
  base: c13,
  poweredBy: `${c13}__powered-by`,
  sources: `${c13}__sources`,
  open: `${c13}--open`,
  sourcesOpen: `${c13}__sources--open`,
  link: `${c13}__link`
};
var h5 = class extends B {
  constructor(e16, t17) {
    super(e16, t17), this._isOpen = false, this._attributionTextOverflowed = false, this._prevSourceNodeHeight = 0, this._resizeObserver = new ResizeObserver((e17) => e17.forEach(({
      target: e18
    }) => this._checkSourceTextOverflow(e18))), this.itemDelimiter = " | ", this.messages = null, this.viewModel = new v8();
  }
  initialize() {
    this.addHandles(v2(() => this.viewModel?.items, "change", () => this.scheduleRender()));
  }
  destroy() {
    this._resizeObserver?.disconnect();
  }
  get _isInteractive() {
    return this._isOpen || this._attributionTextOverflowed;
  }
  get attributionText() {
    return this.viewModel.items.reduce((e16, t17) => (e16.includes(t17.text) || e16.push(t17.text), e16), []).join(this.itemDelimiter);
  }
  get icon() {
    return "description";
  }
  set icon(e16) {
    this._overrideIfSome("icon", e16);
  }
  get label() {
    return this.messages?.widgetLabel ?? "";
  }
  set label(e16) {
    this._overrideIfSome("label", e16);
  }
  get view() {
    return this.viewModel.view;
  }
  set view(e16) {
    this.viewModel.view = e16;
  }
  render() {
    const e16 = {
      [a7.open]: this._isOpen
    };
    return n6("div", {
      bind: this,
      class: this.classes(a7.base, e8.widget, e16),
      dir: "ltr",
      onclick: this._toggleState,
      onkeydown: this._toggleState
    }, this._renderSourcesNode(), this._renderPoweredBy());
  }
  _renderPoweredBy() {
    return n6("div", {
      class: a7.poweredBy
    }, "Powered by", " ", n6("a", {
      class: a7.link,
      href: "https://www.esri.com/",
      rel: "noreferrer",
      target: "_blank"
    }, "Esri"));
  }
  _renderSourcesNode() {
    const e16 = this._isOpen, t17 = this._isInteractive, i15 = t17 ? 0 : void 0, {
      attributionText: r15
    } = this, s17 = {
      [a7.sourcesOpen]: e16,
      [e8.interactive]: t17
    };
    return n6("div", {
      afterCreate: this._afterSourcesNodeCreate,
      bind: this,
      class: this.classes(a7.sources, s17),
      innerHTML: r15,
      tabIndex: i15
    });
  }
  _afterSourcesNodeCreate(e16) {
    this._prevSourceNodeHeight = e16.clientWidth, this._resizeObserver.observe(e16);
  }
  _checkSourceTextOverflow(e16) {
    let t17 = false;
    const {
      clientHeight: i15,
      clientWidth: r15,
      scrollWidth: s17
    } = e16, o22 = s17 > r15, n23 = this._attributionTextOverflowed !== o22;
    if (this._attributionTextOverflowed = o22, n23 && (t17 = true), this._isOpen) {
      const e17 = i15 < this._prevSourceNodeHeight;
      this._prevSourceNodeHeight = i15, e17 && (this._isOpen = false, t17 = true);
    }
    t17 && this.scheduleRender();
  }
  _toggleState() {
    this._isInteractive && (this._isOpen = !this._isOpen);
  }
};
e3([y()], h5.prototype, "_isOpen", void 0), e3([y()], h5.prototype, "_isInteractive", null), e3([y()], h5.prototype, "_attributionTextOverflowed", void 0), e3([y()], h5.prototype, "_prevSourceNodeHeight", void 0), e3([y({
  readOnly: true,
  dependsOn: ["viewModel.items.length", "itemDelimiter"]
})], h5.prototype, "attributionText", null), e3([y()], h5.prototype, "icon", null), e3([y()], h5.prototype, "itemDelimiter", void 0), e3([y()], h5.prototype, "label", null), e3([y(), e5("esri/widgets/Attribution/t9n/Attribution")], h5.prototype, "messages", void 0), e3([y()], h5.prototype, "view", null), e3([y({
  type: v8
})], h5.prototype, "viewModel", void 0), e3([t6()], h5.prototype, "_toggleState", null), h5 = e3([a2("esri.widgets.Attribution")], h5);
var u5 = h5;

// ../../../node_modules/@arcgis/core/views/ui/DefaultUI.js
function m9(t17) {
  return void 0 !== t17?.view;
}
var h6 = class extends A4 {
  constructor(t17) {
    super(t17), this._defaultPositionLookup = {
      attribution: "manual",
      compass: "top-left",
      "navigation-toggle": "top-left",
      zoom: "top-left"
    }, this.components = [], this._updateViewAwareWidgets = (t18) => {
      this.components.forEach((o22) => {
        const e16 = this._find(o22), i15 = e16?.widget;
        m9(i15) && (i15.view = t18);
      });
    }, this._componentsWatcher = (t18, o22) => {
      this._removeComponents(o22), this._addComponents(t18), this._adjustPadding(t18);
    };
  }
  initialize() {
    this.addHandles([d2(() => this.components, this._componentsWatcher, P), d2(() => this.view, this._updateViewAwareWidgets, P)]);
  }
  _add(t17, o22, e16, i15, s17) {
    let r15 = t17;
    if ("string" == typeof t17 && this._defaultPositionLookup[t17]) {
      if (this._find(t17)) return;
      r15 = this._createComponent(t17);
    }
    super._add(r15, o22, e16, i15, s17);
  }
  _removeComponents(t17) {
    t17.forEach((t18) => {
      const o22 = this._find(t18);
      o22 && (this.remove(o22), o22.destroy());
    });
  }
  _adjustPadding(t17) {
    if (!t17.includes("attribution") && !this._isOverridden("padding")) {
      const {
        top: t18
      } = this.padding;
      this.padding = t18;
    }
  }
  _addComponents(t17) {
    this.constructed && t17.forEach((t18) => this.add(this._createComponent(t18), this._defaultPositionLookup[t18]));
  }
  _createComponent(t17) {
    const o22 = this._createWidget(t17);
    return new m8({
      id: t17,
      node: o22
    });
  }
  _createWidget(t17) {
    const o22 = this.view;
    switch (t17) {
      case "attribution":
        return new u5({
          view: o22
        });
      case "compass":
        return new d4({
          view: o22
        });
      case "navigation-toggle":
        return new g7({
          view: o22
        });
      case "zoom":
        return new p2({
          view: o22
        });
    }
  }
};
e3([y()], h6.prototype, "components", void 0), h6 = e3([a2("esri.views.ui.DefaultUI")], h6);
var u6 = h6;

// ../../../node_modules/@arcgis/core/views/animation/pointToPoint/Settings.js
var o13 = {
  desiredScreenFlow: 2,
  minDuration: n2(500),
  maxDuration: n2(8e3)
};
var r6 = __spreadProps(__spreadValues({}, o13), {
  maxDuration: n2(4e3)
});

// ../../../node_modules/@arcgis/core/views/animation/easing.js
var t9 = (t17) => t17;
var u7 = (t17) => t17 * t17;
var o14 = (t17) => 1 - u7(1 - t17);
var i10 = (t17) => t17 < 0.5 ? u7(2 * t17) / 2 : (o14(2 * (t17 - 0.5)) + 1) / 2;
var n18 = (t17) => t17 * t17 * t17;
var c14 = (t17) => 1 - n18(1 - t17);
var a8 = (t17) => t17 < 0.5 ? n18(2 * t17) / 2 : (c14(2 * (t17 - 0.5)) + 1) / 2;
var s8 = (t17) => t17 * t17 * t17 * t17;
var q = (t17) => 1 - s8(1 - t17);
var r7 = (t17) => t17 < 0.5 ? s8(2 * t17) / 2 : (q(2 * (t17 - 0.5)) + 1) / 2;
var e10 = (t17) => t17 * t17 * t17 * t17 * t17;
var b6 = (t17) => 1 - e10(1 - t17);
var d8 = (t17) => t17 < 0.5 ? e10(2 * t17) / 2 : (b6(2 * (t17 - 0.5)) + 1) / 2;
var h7 = (t17) => 1 - Math.cos(t17 * Math.PI / 2);
var p12 = (t17) => 1 - h7(1 - t17);
var x = (t17) => t17 < 0.5 ? h7(2 * t17) / 2 : (p12(2 * (t17 - 0.5)) + 1) / 2;
var M3 = (t17) => 2 ** (10 * (t17 - 1));
var f8 = (t17) => 1 - M3(1 - t17);
var l11 = (t17) => t17 < 0.5 ? M3(2 * t17) / 2 : (f8(2 * (t17 - 0.5)) + 1) / 2;
var I2 = (t17) => -(Math.sqrt(1 - t17 * t17) - 1);
var P4 = (t17) => 1 - I2(1 - t17);
var g13 = (t17) => t17 < 0.5 ? I2(2 * t17) / 2 : (P4(2 * (t17 - 0.5)) + 1) / 2;
function j3(t17) {
  const u9 = 2 * (t17 - Math.sqrt((t17 - 1) * t17)), o22 = u9 / 2 / t17;
  return (i15) => i15 < o22 ? t17 * i15 * i15 : u9 * i15 - u9 + 1;
}
function k(t17, u9) {
  return (o22, i15) => o22 < u9 ? u9 * t17(o22 / u9, i15) : 1 - t17((1 - o22) / (1 - u9), i15) * (1 - u9);
}
var m10 = k(j3(1), 1);
var v9 = k(j3(1), 0);
var w6 = k(j3(1), 0.5);
var y7 = k(j3(2), 1);
var z = k(j3(2), 0);
var A6 = k(j3(2), 0.5);
var B3 = k(j3(3), 1);
var C5 = k(j3(3), 0);
var D = k(j3(3), 0.5);
var E2 = k(j3(4), 1);
var F = k(j3(4), 0);
var G3 = k(j3(4), 0.5);
var H2 = {
  linear: t9,
  "in-quad": u7,
  "out-quad": o14,
  "in-out-quad": i10,
  "in-coast-quad": m10,
  "out-coast-quad": v9,
  "in-out-coast-quad": w6,
  "in-cubic": n18,
  "out-cubic": c14,
  "in-out-cubic": a8,
  "in-coast-cubic": y7,
  "out-coast-cubic": z,
  "in-out-coast-cubic": A6,
  "in-quart": s8,
  "out-quart": q,
  "in-out-quart": r7,
  "in-coast-quart": B3,
  "out-coast-quart": C5,
  "in-out-coast-quart": D,
  "in-quint": e10,
  "out-quint": b6,
  "in-out-quint": d8,
  "in-coast-quint": E2,
  "out-coast-quint": F,
  "in-out-coast-quint": G3,
  "in-sine": h7,
  "out-sine": p12,
  "in-out-sine": x,
  "in-expo": M3,
  "out-expo": f8,
  "in-out-expo": l11,
  "in-circ": I2,
  "out-circ": P4,
  "in-out-circ": g13
};

// ../../../node_modules/@arcgis/core/views/animation/pointToPoint/Camera.js
var t10 = class {
  constructor() {
    this.pan = 0, this.rotate = 0, this.fov = 0, this.sourceZoom = 0, this.targetZoom = 0;
  }
};

// ../../../node_modules/@arcgis/core/views/animation/pointToPoint/Definition.js
var s9 = class _s {
  constructor(e16) {
    this._createCamera = e16, this.compared = new t10(), this.segmentStart = 0, this.segmentEnd = 1, this.settings = {
      desiredScreenFlow: o13.desiredScreenFlow
    }, this.source = e16(), this.target = e16();
  }
  clone() {
    const e16 = new _s(this._createCamera);
    return e16.copyFrom(this), e16;
  }
  copyFrom(e16) {
    this.update(e16.source, e16.target, e16.settings);
  }
  update(e16, t17, s17) {
    this.source !== e16 && this.source.copyFrom(e16), this.target !== t17 && this.target.copyFrom(t17), this.source.compareTo(this.target, this.compared), this.settings.desiredScreenFlow = null != s17.desiredScreenFlow ? s17.desiredScreenFlow : o13.desiredScreenFlow, this.desiredPixelFlow = this.settings.desiredScreenFlow * this.target.size, this.halfWindowSize = this.target.size / 2;
  }
  halfWindowPanAtZoom(e16) {
    const t17 = this.target.pixelsPerPanAtZoom(e16);
    return this.halfWindowSize / t17;
  }
  get hasZoom() {
    return Math.abs(this.compared.sourceZoom - this.compared.targetZoom) > 1e-5;
  }
  get hasPan() {
    return this.compared.pan > e6();
  }
  get hasFov() {
    return Math.abs(this.compared.fov) > e6();
  }
  get hasRotate() {
    return this.compared.rotate > e6();
  }
};

// ../../../node_modules/@arcgis/core/views/animation/pointToPoint/InterpolateComponents.js
var t11 = class {
  constructor() {
    this.pan = 0, this.rotate = 0, this.zoom = 0, this.fov = 0, this.zoomOffset = 0;
  }
};

// ../../../node_modules/@arcgis/core/views/animation/pointToPoint/Path.js
var e11 = class {
  constructor() {
    this.segments = new Array();
  }
  get time() {
    return this.segments.reduce((e16, o22) => t2(e16 + o22.time), t2(0));
  }
  interpolateComponentsAt(t17, e16) {
    t17 = Math.min(Math.max(t17, 0), 1), t17 *= this.time;
    let o22 = 0, s17 = 0;
    const n23 = this.definition, a14 = this.segments.reduce((t18, e17) => t18 || e17.definition.hasZoom, false);
    for (let i15 = 0; i15 < this.segments.length; i15++) {
      const m13 = this.segments[i15], r15 = m13.definition;
      if (t17 <= m13.time || i15 === this.segments.length - 1) {
        if (this.segmentInterpolateComponentsAt(m13, 0 === m13.time ? 0 : t17 / m13.time, e16), n23.hasPan && !isNaN(e16.pan) && isFinite(n23.compared.pan) ? e16.pan = (o22 + r15.compared.pan * e16.pan) / n23.compared.pan : e16.pan = 1, n23.hasRotate && !isNaN(e16.rotate) && isFinite(n23.compared.rotate) ? e16.rotate = (s17 + r15.compared.rotate * e16.rotate) / n23.compared.rotate : e16.rotate = 1, a14 && !isNaN(e16.zoom) && isFinite(r15.compared.targetZoom)) {
          const {
            sourceZoom: t18,
            targetZoom: o23
          } = r15.compared, s18 = e16.zoom * (o23 - t18) + t18, n24 = this.segments[0].definition.compared.sourceZoom, a15 = this.segments[this.segments.length - 1].definition.compared.targetZoom, i16 = Math.abs(o23 - n24) > Math.abs(t18 - n24) ? o23 : t18;
          e16.zoomOffset = i16 - a15, e16.zoom = (s18 - n24) / (i16 - n24);
        } else e16.zoom = 1;
        return e16;
      }
      t17 -= m13.time, o22 += r15.compared.pan, s17 += r15.compared.rotate;
    }
  }
  segmentInterpolateComponentsAt(t17, e16, o22) {
    t17.interpolateComponentsAt(e16, o22);
  }
};

// ../../../node_modules/@arcgis/core/views/animation/pointToPoint/Segment.js
var o15 = class {
  get time() {
    return this._time;
  }
  constructor(t17) {
    t17 && this.update(t17);
  }
  update(t17) {
    t17 && (this.definition ? this.definition.copyFrom(t17) : this.definition = t17.clone()), this._updatePrecomputedVariables(), this._updatePixelFlow();
  }
  _updatePrecomputedVariables() {
    const t17 = this.definition, i15 = t17.compared, o22 = i15.sourceZoom, e16 = i15.targetZoom;
    this._zoomSign = o22 > e16 ? 1 : -1, this._panPixelsAtSource = i15.pan * t17.source.pixelsPerPanAtZoom(o22);
    const n23 = (t17.source.pixelsPerRotateAtZoom(o22) + t17.target.pixelsPerRotateAtZoom(e16)) / 2;
    this._rotatePixels = i15.rotate * n23;
  }
  _updatePixelFlow() {
    const t17 = this.definition.compared.sourceZoom, o22 = this.definition.compared.targetZoom, {
      hasZoom: e16,
      hasPan: n23,
      hasRotate: s17
    } = this.definition;
    let h12 = 0, a14 = 0;
    e16 && (n23 && (h12 = (o22 / t17 - 1) / (-1 / (this._zoomSign * this.definition.halfWindowSize) * Math.LN2 * this._panPixelsAtSource)), s17 && (a14 = this._zoomSign * (Math.log(t17 / o22) / Math.LN2) * this.definition.halfWindowSize / this._rotatePixels)), this._zoomPixelFlow = 0, this._panPixelFlow = 0, this._rotatePixelFlow = 0;
    const r15 = this.definition.desiredPixelFlow;
    if (e16 && n23 && s17) {
      const t18 = h12 + a14 + h12 * a14;
      this._zoomPixelFlow = h12 * a14 / t18 * r15, this._panPixelFlow = a14 / t18 * r15, this._rotatePixelFlow = h12 / t18 * r15;
    } else if (e16 && n23) {
      const t18 = 1 + h12;
      this._zoomPixelFlow = h12 / t18 * r15, this._panPixelFlow = 1 / t18 * r15;
    } else if (e16 && s17) {
      const t18 = 1 + a14;
      this._zoomPixelFlow = a14 / t18 * r15, this._rotatePixelFlow = 1 / t18 * r15;
    } else if (n23 && s17) {
      const t18 = this._panPixelsAtSource / this._rotatePixels, i15 = 1 + t18;
      this._panPixelFlow = t18 / i15 * r15, this._rotatePixelFlow = 1 / i15 * r15;
    } else n23 ? this._panPixelFlow = r15 : e16 ? this._zoomPixelFlow = r15 : s17 && (this._rotatePixelFlow = r15);
    this._time = this.rotateTime ?? this.zoomTime ?? this.panTime ?? this.fovTime ?? t2(0);
  }
  get rotateTime() {
    return this.definition.hasRotate ? t2(this._rotatePixels / this._rotatePixelFlow) : null;
  }
  get zoomTime() {
    return this.definition.hasZoom ? t2(this._zoomSign * (Math.log(this.definition.compared.sourceZoom / this.definition.compared.targetZoom) / Math.LN2) * this.definition.halfWindowSize / this._zoomPixelFlow) : null;
  }
  get fovTime() {
    return this.definition.hasFov ? t2(Math.abs(this.definition.compared.fov) / e12) : null;
  }
  get panTime() {
    if (this.definition.hasPan) {
      if (this.definition.hasZoom) {
        const t17 = -1 / (this._zoomSign * this.definition.halfWindowSize) * Math.LN2, o22 = t17 * this._panPixelsAtSource;
        return t2(Math.log(o22 * (this._zoomPixelFlow / this._panPixelFlow) + 1) / (t17 * this._zoomPixelFlow));
      }
      return t2(this._panPixelsAtSource / this._panPixelFlow);
    }
  }
  _interpolateComponentsZoom(t17) {
    if (0 === t17 || 1 === t17) return t17;
    if (this.definition.hasZoom) {
      const i15 = this.definition.compared.sourceZoom, o22 = this.definition.compared.targetZoom;
      return (i15 * (i15 / o22) ** -t17 - i15) / (o22 - i15);
    }
    return t17;
  }
  _interpolateComponentsFov(t17) {
    if (0 === t17) return this.definition.segmentStart;
    if (1 === t17) return this.definition.segmentEnd;
    if (this.definition.hasFov) {
      const {
        segmentStart: i15,
        segmentEnd: o22
      } = this.definition;
      return i15 + t17 * (o22 - i15);
    }
    return this.definition.segmentStart;
  }
  _interpolateComponentsPan(t17) {
    if (0 === t17 || 1 === t17) return t17;
    if (this.definition.hasPan && this.definition.hasZoom) {
      const i15 = -1 / (this._zoomSign * this.definition.halfWindowSize) * this._zoomPixelFlow;
      return 1 / this._panPixelsAtSource * (this._panPixelFlow * (2 ** (i15 * t17 * this._time) - 1)) / (i15 * Math.LN2);
    }
    return t17;
  }
  _interpolateComponentsRotate(t17) {
    return t17;
  }
  interpolateComponentsAt(t17, i15) {
    t17 = Math.min(Math.max(t17, 0), 1), i15.zoom = this._interpolateComponentsZoom(t17), i15.pan = this._interpolateComponentsPan(t17), i15.rotate = this._interpolateComponentsRotate(t17), i15.zoomOffset = 0, i15.fov = this._interpolateComponentsFov(t17);
  }
};
var e12 = h(90);

// ../../../node_modules/@arcgis/core/views/animation/pointToPoint/apex/functions.js
function o16(o22, e16, a14) {
  const n23 = e16 - o22.compared.sourceZoom, t17 = o22.halfWindowPanAtZoom(n23);
  return -o22.halfWindowSize * (a14.ascensionFactor * Math.LN2 * o22.compared.pan + t17) * Math.log(o22.compared.sourceZoom / e16) / (o22.desiredPixelFlow * Math.LN2 * t17);
}
function e13(o22, e16, a14) {
  const n23 = 1 / e16, t17 = Math.log(o22.compared.sourceZoom * n23), i15 = 1 / o22.desiredPixelFlow, r15 = 1 / Math.LN2, d11 = e16 - o22.compared.sourceZoom, c18 = 1 / d11, l14 = (a14.ascensionFactor * Math.LN2 * o22.compared.pan + o22.halfWindowPanAtZoom(d11)) / o22.halfWindowPanAtZoom(1);
  return o22.halfWindowSize * n23 * i15 * r15 * c18 * l14 - o22.halfWindowSize * t17 * i15 * r15 * c18 + o22.halfWindowSize * t17 * i15 * r15 * l14 / (d11 * d11);
}
function a9(o22, e16, a14) {
  const n23 = e16 - o22.compared.sourceZoom, t17 = 1 / n23, i15 = 1 / e16, r15 = Math.log(o22.compared.sourceZoom * i15), d11 = (a14.ascensionFactor * Math.LN2 * o22.compared.pan + o22.halfWindowPanAtZoom(n23)) / o22.halfWindowPanAtZoom(1);
  return o22.halfWindowSize * t17 * (-2 * t17 * i15 * d11 + 2 * t17 * r15 + 2 * i15 - 2 * r15 * d11 / (n23 * n23) - d11 / (e16 * e16)) / (o22.desiredPixelFlow * Math.LN2);
}
function n19(o22, e16) {
  return -o22.halfWindowSize * Math.log(o22.compared.sourceZoom / e16) / (o22.desiredPixelFlow * Math.LN2);
}
function t12(o22, e16) {
  return o22.halfWindowSize / (e16 * o22.desiredPixelFlow * Math.LN2);
}
function i11(o22, e16) {
  return -o22.halfWindowSize / (e16 * e16 * o22.desiredPixelFlow * Math.LN2);
}
function r8(o22, e16, a14) {
  return -o22.compared.pan * o22.halfWindowSize * (a14.ascensionFactor + a14.descensionFactor - 1) / (o22.desiredPixelFlow * o22.halfWindowPanAtZoom(e16));
}
function d9(o22, e16, a14) {
  return o22.compared.pan * o22.halfWindowSize * (a14.ascensionFactor + a14.descensionFactor - 1) / (o22.desiredPixelFlow * o22.halfWindowPanAtZoom(e16 * e16));
}
function c15(o22, e16, a14) {
  return -2 * o22.compared.pan * o22.halfWindowSize * (a14.ascensionFactor + a14.descensionFactor - 1) / (o22.desiredPixelFlow * o22.halfWindowPanAtZoom(e16 * e16 * e16));
}
function l12(o22, e16, a14) {
  return o22.halfWindowSize * (-o22.halfWindowPanAtZoom(e16) - a14.descensionFactor * Math.LN2 * o22.compared.pan + o22.halfWindowPanAtZoom(o22.compared.targetZoom)) * Math.log(e16 / o22.compared.targetZoom) / (o22.desiredPixelFlow * Math.LN2 * o22.halfWindowPanAtZoom(-e16 + o22.compared.targetZoom));
}
function m11(o22, e16, a14) {
  const n23 = Math.log(e16 / o22.compared.targetZoom), t17 = 1 / o22.desiredPixelFlow, i15 = 1 / Math.LN2, r15 = -e16 + o22.compared.targetZoom, d11 = 1 / r15, c18 = (-o22.halfWindowPanAtZoom(e16) - a14.descensionFactor * Math.LN2 * o22.compared.pan + o22.halfWindowPanAtZoom(o22.compared.targetZoom)) / o22.halfWindowPanAtZoom(1);
  return -o22.halfWindowSize * n23 * t17 * i15 * d11 + o22.halfWindowSize * n23 * t17 * i15 * c18 / (r15 * r15) + o22.halfWindowSize * t17 * i15 * d11 * c18 / e16;
}
function h8(o22, e16, a14) {
  const n23 = e16 - o22.compared.targetZoom, t17 = 1 / n23, i15 = 1 / e16, r15 = Math.log(e16 / o22.compared.targetZoom), d11 = (o22.halfWindowPanAtZoom(e16) + a14.descensionFactor * Math.LN2 * o22.compared.pan - o22.halfWindowPanAtZoom(o22.compared.targetZoom)) / o22.halfWindowPanAtZoom(1);
  return o22.halfWindowSize * t17 * (-2 * t17 * i15 * d11 - 2 * t17 * r15 + 2 * i15 + 2 * r15 * d11 / (n23 * n23) - d11 / (e16 * e16)) / (o22.desiredPixelFlow * Math.LN2);
}
function s10(o22, e16) {
  return o22.halfWindowSize * Math.log(e16 / o22.compared.targetZoom) / (o22.desiredPixelFlow * Math.LN2);
}
function f9(o22, e16) {
  return o22.halfWindowSize / (e16 * o22.desiredPixelFlow * Math.LN2);
}
function w7(o22, e16) {
  return -o22.halfWindowSize / (e16 * e16 * o22.desiredPixelFlow * Math.LN2);
}
function p13(o22) {
  const e16 = o22.compared.sourceZoom - o22.compared.targetZoom;
  if (0 === e16) return o22.compared.pan * o22.halfWindowSize / (o22.desiredPixelFlow * o22.halfWindowPanAtZoom(o22.compared.sourceZoom));
  const a14 = Math.LN2 * o22.compared.pan, n23 = e16, t17 = o22.halfWindowPanAtZoom(n23), i15 = o22.halfWindowSize * Math.log(o22.compared.sourceZoom / o22.compared.targetZoom) / (o22.desiredPixelFlow * Math.LN2 * t17);
  return o22.compared.sourceZoom <= o22.compared.targetZoom ? i15 * (a14 - t17) : i15 * (a14 + t17);
}

// ../../../node_modules/@arcgis/core/views/animation/pointToPoint/apex/planning.js
function f10(f11, Z) {
  let b7 = D2(f11, Z);
  const h12 = {
    ascensionFactor: null != Z.ascensionFactor ? Z.ascensionFactor : 0.5,
    descensionFactor: null != Z.descensionFactor ? Z.descensionFactor : 0.5
  }, M4 = 0 === h12.ascensionFactor, P5 = 0 === h12.descensionFactor, g14 = M4 ? n19 : o16, k2 = M4 ? t12 : e13, N2 = M4 ? i11 : a9, j4 = P5 ? s10 : l12, w8 = P5 ? f9 : m11, z2 = P5 ? w7 : h8, A7 = (o22) => g14(f11, o22, h12) + r8(f11, o22, h12) + j4(f11, o22, h12), I3 = (o22) => k2(f11, o22, h12) + d9(f11, o22, h12) + w8(f11, o22, h12), S4 = (o22) => N2(f11, o22, h12) + c15(f11, o22, h12) + z2(f11, o22, h12);
  let q2 = A7(b7);
  const v10 = p13(f11);
  let y8;
  const B4 = Z.maximumIterations || 20, C6 = null != Z.maximumDistance ? Z.maximumDistance : 1 / 0;
  for (y8 = 0; y8 < B4; y8++) {
    const o22 = Z.desiredSlope ?? 1e-6;
    let e16 = I3(b7);
    Math.abs(e16) > o22 && (e16 += o22);
    const n23 = e16 / S4(b7);
    if (isNaN(n23) || b7 >= C6 && n23 < 0) {
      if (!isFinite(C6)) return null;
      b7 = C6, q2 = A7(b7);
      break;
    }
    if (b7 -= n23, b7 < f11.compared.sourceZoom || b7 < f11.compared.targetZoom) return null;
    const a14 = A7(b7);
    if (Math.abs(a14 - q2) / q2 <= 5e-3) break;
    q2 = a14;
  }
  return q2 > v10 * (1 - 0.3) || b7 < f11.compared.sourceZoom || b7 < f11.compared.targetZoom ? null : b7;
}
function D2(o22, e16) {
  const n23 = Math.max(o22.compared.sourceZoom, o22.compared.targetZoom), a14 = o22.source.zoomAtPixelsPerPan(o22.desiredPixelFlow / o22.compared.pan) / 2;
  return a14 < n23 ? null != e16.maximumDistance ? n23 + (e16.maximumDistance - n23) / 2 : 1.5 * n23 : e16.maximumDistance ? Math.min(e16.maximumDistance, a14) : a14;
}

// ../../../node_modules/@arcgis/core/views/animation/pointToPoint/apex/Path.js
var s11 = class extends e11 {
  constructor(i15, n23) {
    super(), this._preallocSegments = [new o15(), new o15(), new o15()], this._ascensionSegment = null, this._descensionSegment = null, this.update(i15, n23);
  }
  update(i15, n23) {
    if (!i15) return;
    this.definition ? this.definition.copyFrom(i15) : this.definition = i15.clone();
    const e16 = n23?.apex ? f10(i15, n23.apex) : null;
    this.segments.length = 0, this._ascensionSegment = null, this._descensionSegment = null, e16 ? this._updateWithApex(e16, n23?.apex) : this._updateWithoutApex();
  }
  segmentInterpolateComponentsAt(e16, t17, o22) {
    e16.interpolateComponentsAt(t17, o22), e16 === this._ascensionSegment ? o22.zoom = o14(o22.zoom) : e16 === this._descensionSegment && (o22.zoom = u7(o22.zoom));
  }
  _updateWithApex(i15, n23) {
    const [e16, t17, o22] = this._preallocSegments, s17 = n23?.ascensionFactor ?? 0.5, d11 = Math.min(1 - s17, null != n23?.ascensionFactor && null != n23.descensionFactor ? n23.descensionFactor : 0.5), a14 = 1 - s17 - d11;
    e16.definition ? e16.definition.copyFrom(this.definition) : e16.definition = this.definition.clone(), e16.definition.compared.targetZoom = i15, e16.definition.compared.pan = this.definition.compared.pan * s17, e16.definition.compared.rotate = this.definition.compared.rotate * s17, e16.definition.segmentEnd = s17, e16.update(), this._ascensionSegment = e16, this.segments.push(e16), a14 > 0 && (t17.definition ? t17.definition.copyFrom(this.definition) : t17.definition = this.definition.clone(), t17.definition.copyFrom(this.definition), t17.definition.compared.sourceZoom = i15, t17.definition.compared.targetZoom = i15, t17.definition.compared.pan = this.definition.compared.pan * a14, t17.definition.compared.rotate = this.definition.compared.rotate * a14, t17.definition.segmentStart = e16.definition.segmentEnd, t17.definition.segmentEnd = e16.definition.segmentEnd + a14, t17.update(), this.segments.push(t17)), o22.definition ? o22.definition.copyFrom(this.definition) : o22.definition = this.definition.clone(), o22.definition.compared.sourceZoom = i15, o22.definition.compared.pan = this.definition.compared.pan * d11, o22.definition.compared.rotate = this.definition.compared.rotate * d11, o22.definition.segmentStart = s17 + a14, o22.update(), this._descensionSegment = o22, this.segments.push(o22);
  }
  _updateWithoutApex() {
    const [i15] = this._preallocSegments;
    i15.update(this.definition), this.segments.push(i15);
  }
};

// ../../../node_modules/@arcgis/core/views/animation/pointToPoint/Animation.js
var h9 = new t11();
var p14 = class {
  get time() {
    return this._time;
  }
  get isLinear() {
    return 1 === this.path.segments.length;
  }
  constructor(i15) {
    this._time = n2(0), this._easing = w6, this.definition = new s9(i15), this.path = new s11();
  }
  update(t17, a14, o22) {
    this.definition.update(t17, a14, o22), this.path.update(this.definition, o22), this._time = this._applyTimeSettings(r2(isFinite(this.path.time) ? this.path.time : t2(0)), o22), this._easing = o22.easing ?? (this._time >= 1e3 ? w6 : f8);
  }
  cameraAt(t17, i15) {
    t17 = Math.min(Math.max(0, t17), 1), t17 = this._normalizedEasing(t17);
    const e16 = this.path.interpolateComponentsAt(t17, h9);
    i15.interpolate(this.definition.source, this.definition.target, e16);
  }
  _normalizedEasing(t17) {
    const i15 = this._easing(0, this._time), e16 = this._easing(1, this._time);
    return (this._easing(t17, this._time) - i15) / (e16 - i15);
  }
  _applyTimeSettings(i15, e16) {
    const n23 = null != e16.speedFactor ? e16.speedFactor : 1, s17 = e16.minDuration ?? o13.minDuration / n23, a14 = e16.maxDuration ?? o13.maxDuration / n23;
    return i15 = null != e16.duration ? e16.duration : n2(Math.min(Math.max(i15 / n23, s17), a14));
  }
};

// ../../../node_modules/@arcgis/core/views/input/gamepad/GamepadState.js
function t13(t17) {
  const n23 = t17.native;
  return n23 ? {
    buttons: n23.buttons.map((t18) => t18.pressed ? t18.value || 1 : 0),
    axes: n23.axes.map((n24) => s12(n24, t17.axisThreshold))
  } : {
    buttons: [],
    axes: []
  };
}
function n20(t17, n23) {
  if (t17.axes.length !== n23.axes.length) return false;
  if (t17.buttons.length !== n23.buttons.length) return false;
  for (let e16 = 0; e16 < t17.axes.length; e16++) if (t17.axes[e16] !== n23.axes[e16]) return false;
  for (let e16 = 0; e16 < t17.buttons.length; e16++) if (t17.buttons[e16] !== n23.buttons[e16]) return false;
  return true;
}
function e14(t17) {
  for (let n23 = 0; n23 < t17.axes.length; n23++) if (0 !== t17.axes[n23]) return false;
  for (let n23 = 0; n23 < t17.buttons.length; n23++) if (0 !== t17.buttons[n23]) return false;
  return true;
}
function s12(t17, n23) {
  const e16 = Math.abs(t17);
  return e16 < n23 ? 0 : Math.sign(t17) * (e16 - n23) / (1 - n23);
}

// ../../../node_modules/@arcgis/core/views/input/gamepad/GamepadSource.js
var a10 = class {
  constructor(e16, t17) {
    this._element = e16, this._input = t17, this._hasEventListeners = false, this._onConnectGamepad = (e17) => {
      this._connectGamepad(e17.gamepad);
    }, this._onDisconnectGamepad = (e17) => {
      const t18 = e17.gamepad, s18 = t18.index, i16 = this._inputDevices[s18];
      i16 && (this._emitGamepadEvent(t18, t13(i16), false), this._inputDevices.splice(s18, 1), this._latestUpdate.splice(s18, 1), this._input.gamepad.devices.remove(i16), this.ensurePollingState());
    }, this._frameTask = null, this._latestUpdate = new Array(), this._inputDevices = new Array(), this._callback = null;
    const s17 = "getGamepads" in window.navigator, i15 = window.isSecureContext;
    this.supported = s17 && i15, this.supported && (d10((e17) => this._connectGamepad(e17)), window.addEventListener("gamepadconnected", this._onConnectGamepad), window.addEventListener("gamepaddisconnected", this._onDisconnectGamepad), this.ensurePollingState());
  }
  destroy() {
    this.hasEventListeners = false, this.supported && (window.removeEventListener("gamepadconnected", this._onConnectGamepad), window.removeEventListener("gamepaddisconnected", this._onDisconnectGamepad));
  }
  set hasEventListeners(e16) {
    this._hasEventListeners !== e16 && (this._hasEventListeners = e16, this.ensurePollingState());
  }
  get _eventsEnabled() {
    return this.supported && this._inputDevices.length > 0 && this._hasEventListeners;
  }
  set onEvent(e16) {
    this._callback = e16;
  }
  _connectGamepad(e16) {
    const n23 = new o12(e16);
    "unknown" !== n23.deviceType && (this._inputDevices[e16.index] = n23, this._input.gamepad.devices.add(n23)), this.ensurePollingState();
  }
  ensurePollingState() {
    this._eventsEnabled ? this._startPolling() : this._stopPolling();
  }
  _startPolling() {
    null == this._frameTask && (this._frameTask = A2({
      update: () => this._readGamepadState()
    }));
  }
  _stopPolling() {
    null != this._frameTask && (this._frameTask.remove(), this._frameTask = null, this._latestUpdate = new Array());
  }
  _readGamepadState() {
    const e16 = document.hasFocus(), t17 = this._element.contains(document.activeElement), a14 = "document" === this._input.gamepad.enabledFocusMode && !e16 || "view" === this._input.gamepad.enabledFocusMode && !t17;
    d10((e17) => {
      const t18 = this._inputDevices[e17.index];
      if (!t18) return;
      const o22 = this._latestUpdate[e17.index], d11 = t13(t18), c18 = a14 || e14(d11);
      if (o22) {
        if (o22.timestamp === e17.timestamp) return;
        if (!o22.active && c18) return;
        if (n20(o22.state, d11)) return;
      }
      this._emitGamepadEvent(e17, d11, !c18);
    });
  }
  _emitGamepadEvent(e16, t17, n23) {
    const s17 = this._latestUpdate[e16.index], i15 = s17 && s17.active;
    if (!i15 && !n23) return;
    const a14 = !i15 && n23 ? "start" : i15 && n23 ? "update" : "end";
    this._latestUpdate[e16.index] = {
      timestamp: e16.timestamp,
      state: t17,
      active: n23
    }, this._callback && this._callback({
      device: this._inputDevices[e16.index],
      state: t17,
      action: a14
    });
  }
};
function o17(e16) {
  if (!e16) return false;
  if (!e16.connected) return false;
  for (let t17 = 0; t17 < e16.axes.length; t17++) if (isNaN(e16.axes[t17])) return false;
  return true;
}
function d10(e16) {
  const t17 = window.navigator.getGamepads();
  for (let n23 = 0; n23 < t17.length; n23++) {
    const s17 = t17[n23];
    o17(s17) && e16(s17);
  }
}

// ../../../node_modules/@arcgis/core/views/input/BrowserEventSource.js
var i12 = has("edge");
var o18 = has("chrome");
var a11 = has("ff");
var s13 = has("safari");
var r9 = "esri-view-surface";
var h10 = {
  touchNone: `${r9}--touch-none`,
  touchPan: `${r9}--touch-pan`
};
var l13 = class _l {
  constructor(e16, n23) {
    this._input = n23, this._active = {}, this._callback = () => {
    }, this._activePointerCaptures = /* @__PURE__ */ new Set(), this._keyDownState = /* @__PURE__ */ new Set(), this._eventId = 1, this._browserTouchPanningEnabled = false, this._element = e16, e16.getAttribute("tabindex") || e16.setAttribute("tabindex", "0"), this._eventHandlers = {
      "key-down": this._handleKey,
      "key-up": this._handleKey,
      "pointer-down": this._handlePointer,
      "pointer-move": this._handlePointerPreventDefault,
      "pointer-up": this._handlePointerPreventDefault,
      "pointer-enter": this._handlePointer,
      "pointer-leave": this._handlePointer,
      "pointer-cancel": this._handlePointer,
      "mouse-wheel": this._handleMouseWheel,
      "pointer-capture-lost": this._handlePointerCaptureLost
    }, this._updateTouchAction(), this._element.addEventListener("keydown", this._preventAltKeyDefault), this._gamepadSource = new a10(e16, this._input), this._gamepadSource.onEvent = (e17) => this._callback("gamepad", e17);
  }
  destroy() {
    this._callback = () => {
    }, this.activeEvents = null, this._activePointerCaptures.forEach((e16) => {
      this._releasePointerCaptureSafe(e16);
    }), this._gamepadSource = u(this._gamepadSource), this._activePointerCaptures = null, this._removeTouchAction(), this._element.removeEventListener("keydown", this._preventAltKeyDefault);
  }
  get browserTouchPanningEnabled() {
    return this._browserTouchPanningEnabled;
  }
  set browserTouchPanningEnabled(e16) {
    this._browserTouchPanningEnabled = e16, this._updateTouchAction(), this._updateTouchEventHandling();
  }
  set onEventReceived(e16) {
    this._callback = e16;
  }
  set activeEvents(e16) {
    for (const t17 in this._active) if (!e16 || !e16.has(t17)) {
      const e17 = this._active[t17];
      this._element.removeEventListener(c16[t17], e17), delete this._active[t17];
    }
    e16 && e16.forEach((e17) => {
      if (!this._active[e17] && c16[e17]) {
        const t17 = (this._eventHandlers[e17] || this._handleDefault).bind(this, e17);
        this._element.addEventListener(c16[e17], t17), this._active[e17] = t17;
      }
    }), this._gamepadSource.hasEventListeners = e16?.has("gamepad") ?? false;
  }
  setPointerCapture(e16, t17) {
    t17 ? this._setPointerCatpureSafe(e16.pointerId) : (this._releasePointerCaptureSafe(e16.pointerId), this._activePointerCaptures.delete(e16.pointerId));
  }
  _updateTouchAction() {
    this._element.classList.remove(this._browserTouchPanningEnabled ? h10.touchNone : h10.touchPan), this._element.classList.add(this._browserTouchPanningEnabled ? h10.touchPan : h10.touchNone);
  }
  _updateTouchEventHandling() {
    this._browserTouchPanningEnabled ? this._element.addEventListener("touchmove", this._preventMultiTouchPanning) : this._element.removeEventListener("touchmove", this._preventMultiTouchPanning);
  }
  _removeTouchAction() {
    this._element.classList.remove(h10.touchNone), this._element.classList.remove(h10.touchPan), this._element.removeEventListener("touchmove", this._preventMultiTouchPanning);
  }
  _setPointerCatpureSafe(e16) {
    try {
      this._element.setPointerCapture(e16), this._activePointerCaptures.add(e16);
    } catch {
    }
  }
  _releasePointerCaptureSafe(e16) {
    try {
      if (this._element.hasPointerCapture && !this._element.hasPointerCapture(e16)) return;
      this._element.releasePointerCapture(e16);
    } catch (t17) {
    }
  }
  _updateNormalizedPointerLikeEvent(e16, t17) {
    const i15 = i4(this._element, e16);
    return _l.test.disableSubpixelCoordinates && (i15.x = Math.round(i15.x), i15.y = Math.round(i15.y)), t17.x = i15.x, t17.y = i15.y, t17;
  }
  _handleKey(e16, t17) {
    const {
      key: n23
    } = t17;
    n23 && "key-up" === e16 && this._keyDownState.delete(n23);
    const i15 = {
      native: t17,
      key: n23,
      repeat: !!n23 && this._keyDownState.has(n23)
    };
    n23 && "key-down" === e16 && this._keyDownState.add(i15.key), this._callback(e16, i15);
  }
  _handlePointer(e16, t17) {
    const n23 = this._updateNormalizedPointerLikeEvent(t17, {
      native: t17,
      x: 0,
      y: 0,
      pointerType: t17.pointerType,
      button: t17.button,
      buttons: t17.buttons,
      eventId: this._eventId++
    });
    this._callback(e16, n23);
  }
  _handlePointerPreventDefault(e16, t17) {
    const n23 = this._updateNormalizedPointerLikeEvent(t17, {
      native: t17,
      x: 0,
      y: 0,
      pointerType: t17.pointerType,
      button: t17.button,
      buttons: t17.buttons,
      eventId: this._eventId++
    });
    t17.preventDefault(), this._callback(e16, n23);
  }
  _handleMouseWheel(e16, t17) {
    let n23 = t17.deltaY;
    switch (t17.deltaMode) {
      case 0:
        i12 && (n23 = n23 / document.documentElement.clientHeight * 600);
        break;
      case 1:
        n23 *= 30;
        break;
      case 2:
        n23 *= 900;
    }
    i12 ? n23 *= 0.7 : o18 || s13 ? n23 *= 0.6 : a11 && (n23 *= 1.375);
    const r15 = 100, h12 = Math.abs(n23);
    if (h12 > r15) {
      const e17 = 0.02;
      n23 = n23 / h12 * 200 / (1 + Math.exp(-e17 * (h12 - r15)));
    }
    const l14 = this._updateNormalizedPointerLikeEvent(t17, {
      native: t17,
      x: 0,
      y: 0,
      deltaY: n23
    });
    this._callback(e16, l14);
  }
  _handlePointerCaptureLost(e16, t17) {
    this._activePointerCaptures.delete(t17.pointerId), this._handleDefault(e16, t17);
  }
  _handleDefault(e16, t17) {
    const n23 = {
      native: t17
    };
    t17.preventDefault(), this._callback(e16, n23);
  }
  _preventAltKeyDefault(e16) {
    "Alt" === e16.key && e16.preventDefault();
  }
  _preventMultiTouchPanning(e16) {
    e16.touches.length > 1 && e16.preventDefault();
  }
};
l13.test = {
  disableSubpixelCoordinates: false
};
var c16 = {
  "key-down": "keydown",
  "key-up": "keyup",
  "pointer-down": "pointerdown",
  "pointer-up": "pointerup",
  "pointer-move": "pointermove",
  "mouse-wheel": "wheel",
  "pointer-capture-got": "gotpointercapture",
  "pointer-capture-lost": "lostpointercapture",
  "context-menu": "contextmenu",
  "pointer-enter": "pointerenter",
  "pointer-leave": "pointerleave",
  "pointer-cancel": "pointercancel",
  focus: "focus",
  blur: "blur"
};

// ../../../node_modules/@arcgis/core/views/input/handlers/PreventContextMenu.js
var e15 = class extends t5 {
  constructor() {
    super(true), this.registerIncoming("context-menu", (t17) => {
      t17.data.native.preventDefault();
    });
  }
};

// ../../../node_modules/@arcgis/core/views/input/recognizers/support.js
var t14 = {
  maximumClickDelay: 300,
  movementUntilMouseDrag: 1.5,
  movementUntilPenDrag: 6,
  movementUntilTouchDrag: 6,
  holdDelay: 500,
  maximumDoubleClickDelay: 250,
  maximumDoubleClickDistance: 10,
  maximumDoubleTouchDelay: 350,
  maximumDoubleTouchDistance: 35
};
function n21(e16, t17) {
  return Math.abs(t17.x - e16.x) + Math.abs(t17.y - e16.y);
}
function r10(e16, t17) {
  const n23 = t17.x - e16.x, r15 = t17.y - e16.y;
  return Math.sqrt(n23 * n23 + r15 * r15);
}
function o19(t17, n23) {
  if (n23 ? (n23.radius = 0, n23.center.x = 0, n23.center.y = 0) : n23 = {
    radius: 0,
    center: c6()
  }, 0 === t17.length) return n23;
  if (1 === t17.length) return n23.center.x = t17[0].x, n23.center.y = t17[0].y, n23;
  if (2 === t17.length) {
    const [e16, r16] = t17, [o23, u10] = [r16.x - e16.x, r16.y - e16.y];
    return n23.radius = Math.sqrt(o23 * o23 + u10 * u10) / 2, n23.center.x = (e16.x + r16.x) / 2, n23.center.y = (e16.y + r16.y) / 2, n23;
  }
  let r15 = 0, o22 = 0;
  for (let e16 = 0; e16 < t17.length; e16++) r15 += t17[e16].x, o22 += t17[e16].y;
  r15 /= t17.length, o22 /= t17.length;
  const u9 = t17.map((e16) => e16.x - r15), c18 = t17.map((e16) => e16.y - o22);
  let i15 = 0, a14 = 0, l14 = 0, m13 = 0, s17 = 0, x2 = 0, y8 = 0;
  for (let e16 = 0; e16 < u9.length; e16++) {
    const t18 = u9[e16], n24 = c18[e16], r16 = t18 * t18, o23 = n24 * n24;
    i15 += r16, a14 += o23, l14 += t18 * n24, m13 += r16 * t18, s17 += o23 * n24, x2 += t18 * o23, y8 += n24 * r16;
  }
  const h12 = 0.5 * (m13 + x2), D3 = 0.5 * (s17 + y8), g14 = i15 * a14 - l14 * l14, f11 = (h12 * a14 - D3 * l14) / g14, b7 = (i15 * D3 - l14 * h12) / g14, p16 = c6(f11 + r15, b7 + o22);
  return {
    radius: Math.sqrt(f11 * f11 + b7 * b7 + (i15 + a14) / t17.length),
    center: p16
  };
}
function u8(e16) {
  const {
    native: t17
  } = e16, {
    pointerId: n23,
    button: r15,
    pointerType: o22
  } = t17;
  return "mouse" === o22 ? `${n23}:${r15}` : `${o22}`;
}

// ../../../node_modules/@arcgis/core/views/input/recognizers/Drag.js
var s14 = class extends t5 {
  constructor(t17) {
    super(false), this._navigationTouch = t17, this._startStateModifiers = /* @__PURE__ */ new Set(), this._activePointerMap = /* @__PURE__ */ new Map(), this._isDragging = false, this._isCurrentDragSuppressed = false, this._drag = this.registerOutgoing("drag"), this.registerIncoming("pointer-drag", this._handlePointerDrag.bind(this)), this.registerIncoming("pointer-up", this._handlePointerUpAndPointerLost.bind(this)), this.registerIncoming("pointer-capture-lost", this._handlePointerUpAndPointerLost.bind(this)), this.registerIncoming("pointer-cancel", this._handlePointerUpAndPointerLost.bind(this));
  }
  _createPayload(t17, e16, i15, n23) {
    return {
      action: t17,
      pointerType: this._pointerType,
      button: this._mouseButton,
      buttons: e16.buttons,
      timestamp: n23,
      pointers: o20(this._activePointerMap),
      pointer: e16,
      angle: i15.angle,
      radius: i15.radius,
      center: i15.center
    };
  }
  _addPointer(t17) {
    const e16 = t17.native.pointerId, i15 = a12(this._activePointerMap).angle, n23 = {
      event: t17,
      initialAngle: 0,
      lastAngle: 0
    };
    this._activePointerMap.set(e16, n23);
    const s17 = h11(n23, r11(this._activePointerMap));
    n23.initialAngle = s17, n23.lastAngle = s17, this._updatePointerAngles(i15);
  }
  _updatePointer(t17) {
    if (t17 && null == t17.x && null == t17.y) return;
    const e16 = t17.native.pointerId, i15 = this._activePointerMap.get(e16);
    i15 ? i15.event = t17 : this._addPointer(t17);
  }
  _removePointer(t17) {
    const e16 = a12(this._activePointerMap).angle;
    this._activePointerMap.delete(t17), this._updatePointerAngles(e16);
  }
  _updatePointerAngles(t17) {
    const e16 = a12(this._activePointerMap);
    this._activePointerMap.forEach((i15) => {
      i15.initialAngle = h11(i15, e16) - t17, i15.lastAngle = h11(i15, e16) - t17;
    });
  }
  _emitEvent(t17, e16, i15) {
    const n23 = a12(this._activePointerMap);
    this._drag.emit(this._createPayload(t17, e16, n23, i15), void 0, this._startStateModifiers);
  }
  _handlePointerUpAndPointerLost(t17) {
    const i15 = t17.data.native.pointerId, n23 = n2(t17.timestamp);
    this._activePointerMap.get(i15) && (1 === this._activePointerMap.size ? (this._updatePointer(t17.data), !this._isCurrentDragSuppressed && this._emitEvent("end", t17.data, n23), this._isDragging = false, this._isCurrentDragSuppressed = false, this._removePointer(i15)) : (this._removePointer(i15), this._emitEvent("removed", t17.data, n2(t17.timestamp))));
  }
  _handlePointerDrag(t17) {
    const i15 = t17.data, n23 = i15.currentEvent, s17 = n2(t17.timestamp);
    switch (i15.action) {
      case "start":
      case "update":
        this._isDragging ? this._activePointerMap.has(n23.native.pointerId) ? (this._updatePointer(n23), !this._isCurrentDragSuppressed && this._emitEvent("update", n23, s17)) : (this._addPointer(n23), this._emitEvent("added", n23, s17), this._isCurrentDragSuppressed = this._isSuppressed) : (this._updatePointer(n23), this._pointerType = t17.data.startEvent.pointerType, this._mouseButton = t17.data.startEvent.button, this._startStateModifiers = t17.modifiers, this._isDragging = true, this._isCurrentDragSuppressed = this._isSuppressed, !this._isCurrentDragSuppressed && this._emitEvent("start", n23, s17));
    }
  }
  get _isSuppressed() {
    return !!this._navigationTouch && !this._navigationTouch.browserTouchPanEnabled && "touch" === this._pointerType && 1 === this._activePointerMap.size;
  }
};
function r11(e16) {
  const i15 = [];
  return e16.forEach((e17) => {
    i15.push(c6(e17.event.x, e17.event.y));
  }), o19(i15);
}
function a12(t17) {
  const e16 = r11(t17);
  let i15 = 0;
  return t17.forEach((t18) => {
    let n23 = h11(t18, e16), s17 = n23 - t18.lastAngle;
    for (; s17 > Math.PI; ) s17 -= 2 * Math.PI;
    for (; s17 < -Math.PI; ) s17 += 2 * Math.PI;
    n23 = t18.lastAngle + s17, t18.lastAngle = n23;
    const r15 = n23 - t18.initialAngle;
    i15 += r15;
  }), i15 /= t17.size || 1, {
    angle: i15,
    radius: e16.radius,
    center: e16.center
  };
}
function o20(t17) {
  const e16 = /* @__PURE__ */ new Map();
  return t17.forEach((t18, i15) => e16.set(i15, t18.event)), e16;
}
function h11(t17, e16) {
  const i15 = t17.event, n23 = i15.x - e16.center.x, s17 = i15.y - e16.center.y;
  return Math.atan2(s17, n23);
}
var p15;
!function(t17) {
  t17[t17.Left = 0] = "Left", t17[t17.Middle = 1] = "Middle", t17[t17.Right = 2] = "Right", t17[t17.Back = 3] = "Back", t17[t17.Forward = 4] = "Forward", t17[t17.Undefined = -1] = "Undefined";
}(p15 || (p15 = {}));

// ../../../node_modules/@arcgis/core/views/input/recognizers/ImmediateDoubleClick.js
var m12 = class extends t5 {
  constructor(e16 = t14.maximumDoubleClickDelay, o22 = t14.maximumDoubleClickDistance, a14 = t14.maximumDoubleTouchDelay, m13 = t14.maximumDoubleTouchDistance, n23 = o3) {
    super(false), this._maximumDoubleClickDelay = e16, this._maximumDoubleClickDistance = o22, this._maximumDoubleTouchDelay = a14, this._maximumDoubleTouchDistance = m13, this._clock = n23, this._pointerState = /* @__PURE__ */ new Map(), this._immediateDoubleClick = this.registerOutgoing("immediate-double-click"), this.registerIncoming("pointer-down", this._handlePointerDown.bind(this)), this.registerIncoming("pointer-up", this._handlePointerUp.bind(this));
  }
  onUninstall() {
    this._pointerState.forEach((t17) => {
      t17.immediateDoubleClick && t17.immediateDoubleClick.timeoutHandle.remove();
    }), super.onUninstall();
  }
  _handlePointerDown(t17) {
    const e16 = t17.data, i15 = u8(e16);
    if (!this._pointerState.has(i15)) {
      const t18 = {
        downButton: e16.native.button,
        x: e16.x,
        y: e16.y,
        immediateDoubleClick: null
      };
      this._pointerState.set(i15, t18), this.startCapturingPointer(e16.native);
    }
  }
  _handlePointerUp(t17) {
    const e16 = t17.data, i15 = u8(e16), m13 = this._pointerState.get(i15);
    if (m13 && m13.downButton === e16.native.button) {
      const i16 = m13.immediateDoubleClick, o22 = "touch" === t17.data.native.pointerType ? this._maximumDoubleTouchDistance : this._maximumDoubleClickDistance;
      i16 ? (i16.timeoutHandle.remove(), n21(i16, t17.data) > o22 ? this._startImmediateDoubleClick(t17, m13) : (this._immediateDoubleClick.emit(t17.data, void 0, i16.modifiers), this._removeState(e16))) : n21(m13, t17.data) > o22 ? this._removeState(e16) : this._startImmediateDoubleClick(t17, m13);
    }
  }
  _startImmediateDoubleClick(t17, e16) {
    const i15 = "touch" === t17.data.native.pointerType ? this._maximumDoubleTouchDelay : this._maximumDoubleClickDelay;
    e16.immediateDoubleClick = {
      x: t17.data.x,
      y: t17.data.y,
      modifiers: t17.modifiers,
      timeoutHandle: this._clock.setTimeout(() => this._removeState(t17.data), i15)
    };
  }
  _removeState(t17) {
    const e16 = u8(t17);
    this._pointerState.delete(e16), this.stopCapturingPointer(t17.native), this.refreshHasPendingInputs();
  }
};

// ../../../node_modules/@arcgis/core/views/input/recognizers/PointerClickHoldAndDrag.js
var r12 = class extends t5 {
  constructor(e16 = t14.maximumClickDelay, i15 = t14.movementUntilMouseDrag, o22 = t14.movementUntilPenDrag, r15 = t14.movementUntilTouchDrag, s17 = t14.holdDelay, a14 = o3) {
    super(false), this._maximumClickDelay = e16, this._movementUntilMouseDrag = i15, this._movementUntilPenDrag = o22, this._movementUntilTouchDrag = r15, this._holdDelay = s17, this._clock = a14, this._pointerState = /* @__PURE__ */ new Map(), this._pointerDrag = this.registerOutgoing("pointer-drag"), this._immediateClick = this.registerOutgoing("immediate-click"), this._pointerHold = this.registerOutgoing("hold"), this.registerIncoming("pointer-down", this._handlePointerDown.bind(this)), this.registerIncoming("pointer-up", (t17) => {
      this._handlePointerLoss(t17, "pointer-up");
    }), this.registerIncoming("pointer-capture-lost", (t17) => {
      this._handlePointerLoss(t17, "pointer-capture-lost");
    }), this.registerIncoming("pointer-cancel", (t17) => {
      this._handlePointerLoss(t17, "pointer-cancel");
    }), this._moveHandle = this.registerIncoming("pointer-move", this._handlePointerMove.bind(this)), this._moveHandle.pause();
  }
  onUninstall() {
    this._pointerState.forEach((t17) => {
      t17.holdTimeout = l(t17.holdTimeout);
    }), super.onUninstall();
  }
  _handlePointerDown(t17) {
    const e16 = t17.data, i15 = e16.native.pointerId;
    let n23 = null;
    0 === this._pointerState.size && (n23 = this._clock.setTimeout(() => {
      const e17 = this._pointerState.get(i15);
      if (e17) {
        if (!e17.isDragging) {
          const i16 = e17.previousEvent;
          this._pointerHold.emit(i16, void 0, t17.modifiers), e17.holdEmitted = true;
        }
        e17.holdTimeout = null;
      }
    }, this._holdDelay));
    const o22 = {
      startEvent: e16,
      previousEvent: e16,
      startTimestamp: t17.timestamp,
      isDragging: false,
      downButton: e16.native.button,
      holdTimeout: n23,
      modifiers: /* @__PURE__ */ new Set()
    };
    this._pointerState.set(i15, o22), this.startCapturingPointer(e16.native), this._moveHandle.resume(), this._pointerState.size > 1 && this._startDragging(t17);
  }
  _handlePointerMove(t17) {
    const e16 = t17.data, i15 = e16.native.pointerId, n23 = this._pointerState.get(i15);
    if (n23) {
      if (n23.isDragging) this._pointerDrag.emit(s15("update", n23, e16), void 0, n23.modifiers);
      else {
        r10(e16, n23.startEvent) > this._getDragThreshold(e16.native.pointerType) && this._startDragging(t17);
      }
      n23.previousEvent = e16;
    }
  }
  _getDragThreshold(t17) {
    switch (t17) {
      case "touch":
        return this._movementUntilTouchDrag;
      case "pen":
        return this._movementUntilPenDrag;
      default:
        return this._movementUntilMouseDrag;
    }
  }
  _startDragging(t17) {
    const e16 = t17.data, i15 = e16.native.pointerId;
    this._pointerState.forEach((n23) => {
      null != n23.holdTimeout && (n23.holdTimeout.remove(), n23.holdTimeout = null), n23.isDragging || (n23.modifiers = t17.modifiers, n23.isDragging = true, i15 === n23.startEvent.native.pointerId ? this._pointerDrag.emit(s15("start", n23, e16)) : this._pointerDrag.emit(s15("start", n23, n23.previousEvent), t17.timestamp));
    });
  }
  _handlePointerLoss(t17, e16) {
    const i15 = t17.data, n23 = i15.native.pointerId, o22 = this._pointerState.get(n23);
    if (o22) {
      if (null != o22.holdTimeout && (o22.holdTimeout.remove(), o22.holdTimeout = null), o22.isDragging) this._pointerDrag.emit(s15("end", o22, "pointer-up" === e16 ? i15 : o22.previousEvent), void 0, o22.modifiers);
      else if ("pointer-up" === e16 && o22.downButton === i15.native.button) {
        t17.timestamp - o22.startTimestamp <= this._maximumClickDelay && !o22.holdEmitted && this._immediateClick.emit(i15);
      }
      this._pointerState.delete(n23), this.stopCapturingPointer(i15.native), 0 === this._pointerState.size && this._moveHandle.pause();
    }
  }
};
function s15(t17, e16, i15) {
  return {
    action: t17,
    startEvent: e16.startEvent,
    previousEvent: e16.previousEvent,
    currentEvent: i15
  };
}

// ../../../node_modules/@arcgis/core/views/input/recognizers/SingleAndDoubleClick.js
var r13 = class extends t5 {
  constructor(t17 = t14.maximumDoubleClickDelay, i15 = t14.maximumDoubleClickDistance, o22 = t14.maximumDoubleTouchDelay, s17 = t14.maximumDoubleTouchDistance, l14 = o3) {
    super(false), this._maximumDoubleClickDelay = t17, this._maximumDoubleClickDistance = i15, this._maximumDoubleTouchDelay = o22, this._maximumDoubleTouchDistance = s17, this._clock = l14, this._pointerState = /* @__PURE__ */ new Map(), this._click = this.registerOutgoing("click"), this._doubleClick = this.registerOutgoing("double-click"), this.registerIncoming("immediate-click", this._handleImmediateClick.bind(this)), this.registerIncoming("pointer-down", this._handlePointerDown.bind(this));
  }
  onUninstall() {
    this._pointerState.forEach((e16) => e16.doubleClickTimer = l(e16.doubleClickTimer));
  }
  get hasPendingInputs() {
    return n3(this._pointerState, (e16) => null != e16.doubleClickTimer);
  }
  _clearDoubleClickTimer(e16, t17) {
    const o22 = this._pointerState.get(e16);
    o22 && (o22.doubleClickTimer = l(o22.doubleClickTimer), t17 && this._click.emit(o22.event.data, void 0, o22.event.modifiers), this._pointerState.delete(e16), this.refreshHasPendingInputs());
  }
  _doubleClickTimeoutExceeded(e16) {
    const t17 = this._pointerState.get(e16);
    1 === t17.pointerDownCount && this._click.emit(t17.event.data, void 0, t17.event.modifiers), t17.doubleClickTimer = null, this._pointerState.delete(e16), this.refreshHasPendingInputs();
  }
  _handleImmediateClick(e16) {
    const t17 = e16.data, {
      pointerType: i15
    } = t17.native, o22 = c17(t17);
    if (!this._pointerState.has(o22)) return void this._startClick(e16);
    const n23 = this._pointerState.get(o22), {
      data: l14,
      modifiers: r15
    } = n23.event, a14 = "touch" === i15 ? this._maximumDoubleTouchDistance : this._maximumDoubleClickDistance;
    n21(l14, t17) > a14 ? (this._clearDoubleClickTimer(o22, true), this._startClick(e16)) : (this._clearDoubleClickTimer(o22, false), 2 === n23.pointerDownCount && this._doubleClick.emit(l14, void 0, r15));
  }
  _handlePointerDown(e16) {
    const t17 = u8(e16.data), i15 = this._pointerState.get(t17);
    i15 && (i15.pointerDownCount += 1);
  }
  _startClick(e16) {
    const {
      data: t17
    } = e16, {
      native: {
        pointerType: i15
      }
    } = t17, o22 = u8(t17), n23 = "touch" === i15 ? this._maximumDoubleTouchDelay : this._maximumDoubleClickDelay, s17 = this._clock.setTimeout(() => this._doubleClickTimeoutExceeded(o22), n23), r15 = 1;
    this._pointerState.set(o22, {
      event: e16,
      doubleClickTimer: s17,
      pointerDownCount: r15
    }), this.refreshHasPendingInputs();
  }
};
function c17(e16) {
  const {
    pointerId: t17,
    pointerType: i15,
    button: o22
  } = e16.native;
  return "mouse" === i15 ? `${t17}:${o22}` : `${i15}`;
}

// ../../../node_modules/@arcgis/core/views/input/handlers/support.js
function t15(t17, r15) {
  switch (r15) {
    case "primary":
      return "touch" === t17.pointerType || 0 === t17.button;
    case "secondary":
      return "touch" !== t17.pointerType && 2 === t17.button;
    case "tertiary":
      return "touch" !== t17.pointerType && 1 === t17.button;
  }
}
function r14(t17, r15) {
  if ("touch" === t17.pointerType) return false;
  switch (r15) {
    case "primary":
      return 0 === t17.button;
    case "secondary":
      return 2 === t17.button;
    case "tertiary":
      return 1 === t17.button;
  }
}

// ../../../node_modules/@arcgis/core/views/input/DragEventSeparator.js
var t16 = class {
  constructor(t17) {
    this._callbacks = t17, this._currentCount = 0, this._callbacks.condition || (this._callbacks.condition = () => true);
  }
  handle(t17) {
    const s17 = t17.data, i15 = s17.pointers.size;
    switch (s17.action) {
      case "start":
        this._currentCount = i15, this._emitStart(t17);
        break;
      case "added":
        this._emitEnd(this._previousEvent), this._currentCount = i15, this._emitStart(t17);
        break;
      case "update":
        this._emitUpdate(t17);
        break;
      case "removed":
        this._startEvent && this._emitEnd(this._previousEvent), this._currentCount = i15, this._emitStart(t17);
        break;
      case "end":
        this._emitEnd(t17), this._currentCount = 0;
    }
    this._previousEvent = t17;
  }
  _emitStart(t17) {
    this._startEvent = t17, this._callbacks.condition?.(this._currentCount, t17) && this._callbacks.start(this._currentCount, t17, this._startEvent);
  }
  _emitUpdate(t17) {
    this._callbacks.condition?.(this._currentCount, t17) && this._callbacks.update(this._currentCount, t17, this._startEvent);
  }
  _emitEnd(t17) {
    this._callbacks.condition?.(this._currentCount, t17) && this._callbacks.end(this._currentCount, t17, this._startEvent), this._startEvent = null;
  }
};

// ../../../node_modules/@arcgis/core/views/navigation/gamepadAndKeyboardUtils.js
function n22(t17) {
  let n23 = t17 * t17;
  return t17 < 0 && (n23 *= -1), n23;
}
function a13(t17) {
  return t17.translation[0] = 0, t17.translation[1] = 0, t17.translation[2] = 0, t17.heading = 0, t17.tilt = 0, t17;
}
function i13(a14, i15, o22) {
  const s17 = o22, e16 = a14.state, r15 = a14.device, l14 = "forward-down" === i15.tiltDirection ? 1 : -1, c18 = 1;
  return "standard" === r15.deviceType ? (s17.translation[0] = n22(e16.axes[0]), s17.translation[1] = n22(e16.axes[1]), s17.translation[2] = n22(e16.buttons[7]) - n22(e16.buttons[6]), s17.heading = n22(e16.axes[2]), s17.tilt = n22(e16.axes[3])) : "spacemouse" === r15.deviceType && (s17.translation[0] = 1.2 * n22(e16.axes[0]), s17.translation[1] = 1.2 * n22(e16.axes[1]), s17.translation[2] = 2 * -n22(e16.axes[2]), s17.heading = 1.2 * n22(e16.axes[5]), s17.tilt = 1.2 * n22(e16.axes[3])), s17.tilt *= l14, g5(s17.translation, s17.translation, c18), s17;
}
function o21(t17, n23) {
  const a14 = n23;
  return a14.translation[0] = t17[1] - t17[0], a14.translation[1] = t17[3] - t17[2], a14.translation[2] = t17[4] - t17[5], a14.heading = t17[7] - t17[6], a14.tilt = t17[8] - t17[9], a14.zoom = t17[10] - t17[11], a14;
}
function s16(t17) {
  return 0 === t17.translation[0] && 0 === t17.translation[1] && 0 === t17.translation[2] && 0 === t17.heading && 0 === t17.tilt && 0 === t17.zoom;
}

// ../../../node_modules/@arcgis/core/views/input/VisibilityChange.js
function i14(i15) {
  const t17 = () => i15("visible" === document.visibilityState);
  return document.addEventListener("visibilitychange", t17), e2(() => document.removeEventListener("visibilitychange", t17));
}

export {
  o10 as o,
  H,
  y3 as y,
  t7 as t,
  N,
  a6 as a,
  a8 as a2,
  f8 as f,
  H2,
  r6 as r,
  p14 as p,
  t15 as t2,
  r14 as r2,
  t16 as t3,
  a13 as a3,
  i13 as i,
  o21 as o2,
  s16 as s,
  i14 as i2,
  l13 as l,
  e15 as e,
  t14 as t4,
  n21 as n,
  u8 as u,
  s14 as s2,
  m12 as m,
  r12 as r3,
  r13 as r4,
  t8 as t5,
  u6 as u2
};
//# sourceMappingURL=chunk-INYEUJYL.js.map
