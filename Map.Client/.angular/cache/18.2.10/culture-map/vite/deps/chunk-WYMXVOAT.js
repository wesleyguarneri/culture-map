import {
  d as d2,
  e as e4,
  f as f5,
  t as t3
} from "./chunk-K7TO5IIO.js";
import {
  n as n5
} from "./chunk-A4VVDRCH.js";
import {
  c,
  e as e3,
  f as f4,
  o as o3,
  t as t2
} from "./chunk-CQDYITZC.js";
import {
  n as n4
} from "./chunk-5I6J67HP.js";
import {
  h
} from "./chunk-PB33BAI3.js";
import {
  n as n3
} from "./chunk-EDSMXTFO.js";
import {
  f as f3
} from "./chunk-MNLT652N.js";
import {
  s
} from "./chunk-NKCPFCP3.js";
import {
  n as n6
} from "./chunk-PRREDSOB.js";
import {
  _
} from "./chunk-SYATLP3H.js";
import {
  A,
  d,
  p
} from "./chunk-6WHTZNUH.js";
import {
  o as o2
} from "./chunk-WGAPNV7F.js";
import {
  e as e2
} from "./chunk-4Z5SGKRM.js";
import {
  stampVersion
} from "./chunk-YPWMP2VK.js";
import {
  isBrowser
} from "./chunk-23E6RT3O.js";
import {
  autoMode,
  darkMode
} from "./chunk-RCBGISRX.js";
import {
  getAssetPath,
  setAssetPath
} from "./chunk-2P72IR2Y.js";
import {
  e4 as e,
  t
} from "./chunk-ANKOCGE2.js";
import {
  y
} from "./chunk-7CJXZOFG.js";
import {
  a3 as a2,
  f
} from "./chunk-DDYVXG4F.js";
import {
  f2,
  k,
  n as n2,
  o2 as o
} from "./chunk-HJY2YILU.js";
import {
  u
} from "./chunk-2MMLMOWS.js";
import {
  a,
  n2 as n
} from "./chunk-WYIDUUN2.js";
import {
  __async,
  __spreadValues
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/core/domUtils.js
function e5(e10) {
  return "string" == typeof e10 ? document.getElementById(e10) : e10 ?? null;
}
function n7(e10) {
  for (; e10.hasChildNodes(); ) e10.removeChild(e10.firstChild);
}
function o4(e10, n11) {
  const t4 = n11.parentNode;
  t4 && t4.insertBefore(e10, n11);
}
function i(e10, n11) {
  for (; ; ) {
    const t4 = e10.firstChild;
    if (!t4) break;
    n11.appendChild(t4);
  }
}
var l = "function" == typeof Element.prototype.closest ? (e10, n11) => e10.closest(n11) : (e10, n11) => {
  let t4 = e10;
  do {
    if (t4.matches(n11)) return t4;
    t4 = t4.parentElement;
  } while (null !== t4 && 1 === t4.nodeType);
  return null;
};

// ../../../node_modules/@esri/calcite-components/dist/components/index.js
function initModeChangeEvent() {
  const {
    classList
  } = document.body;
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const getMode = () => classList.contains(darkMode) || classList.contains(autoMode) && prefersDark ? "dark" : "light";
  const emitModeChange = (mode) => document.body.dispatchEvent(new CustomEvent("calciteModeChange", {
    bubbles: true,
    detail: {
      mode
    }
  }));
  const modeChangeHandler = (newMode) => {
    currentMode !== newMode && emitModeChange(newMode);
    currentMode = newMode;
  };
  let currentMode = getMode();
  emitModeChange(currentMode);
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (event) => modeChangeHandler(event.matches ? "dark" : "light"));
  new MutationObserver(() => modeChangeHandler(getMode())).observe(document.body, {
    attributes: true,
    attributeFilter: ["class"]
  });
}
function appGlobalScript() {
  if (isBrowser()) {
    if (document.readyState === "interactive") {
      initModeChangeEvent();
    } else {
      document.addEventListener("DOMContentLoaded", () => initModeChangeEvent(), {
        once: true
      });
    }
  }
  stampVersion();
}
var globalScripts = appGlobalScript;
globalScripts();

// ../../../node_modules/@arcgis/core/widgets/support/componentsUtils.js
var c2;
function n8() {
  try {
    getAssetPath(".");
  } catch {
    setAssetPath(_(n6(c2)));
  }
}
function r(t4) {
  const o6 = [];
  for (const s3 of Object.keys(t4)) customElements.get(`calcite-${s3}`) || o6.push(t4[s3]?.());
  return o6.length > 0 ? Promise.all(o6) : null;
}
c2 = "components/assets";

// ../../../node_modules/@arcgis/core/libs/maquette-advanced-projector/advanced-projector-options.js
var e6 = {
  handleInterceptedEvent: (e10, p2, t4, n11) => (e10.scheduleRender(), p2.properties[`on${n11.type}`].apply(p2.properties.bind || t4, [n11]))
};

// ../../../node_modules/@arcgis/core/libs/maquette-advanced-projector/utils.js
var e7 = {
  namespace: void 0,
  performanceLogger: () => {
  },
  eventHandlerInterceptor: void 0,
  styleApplyer: (e10, r3, t4) => {
    "-" === r3.charAt(0) ? e10.style.setProperty(r3, t4) : e10.style[r3] = t4;
  }
};
var r2 = (r3) => __spreadValues(__spreadValues({}, e7), r3);

// ../../../node_modules/@arcgis/core/libs/maquette-advanced-projector/projector.js
var o5 = (e10, t4) => {
  const r3 = [];
  for (; e10 && e10 !== t4; ) r3.push(e10), e10 = e10.parentNode;
  return r3;
};
var n9 = (e10, t4) => e10.find(t4);
var d3 = (e10, t4, r3 = false) => {
  let o6 = e10;
  return t4.forEach((e11, d4) => {
    const s3 = o6?.children ? n9(o6.children, (t5) => t5.domNode === e11) : void 0;
    r3 && !s3 && d4 !== t4.length - 1 || (o6 = s3);
  }), o6;
};
var s2 = (n11) => {
  let s3;
  const i2 = __spreadValues(__spreadValues({}, e6), n11), c3 = r2(i2), a3 = c3.performanceLogger;
  let m, p2 = true, l2 = false;
  const f6 = [], u2 = [], h2 = (e10, t4, r3) => {
    let n12;
    c3.eventHandlerInterceptor = (e11, t5, r4, c4) => function(e12) {
      let t6;
      a3("domEvent", e12);
      const r5 = o5(e12.currentTarget, n12.domNode), c5 = r5.some((e13) => customElements.get(e13?.tagName?.toLowerCase()));
      if (e12.eventPhase === Event.CAPTURING_PHASE || !c5) r5.reverse(), t6 = d3(n12.getLastRender(), r5);
      else {
        const r6 = e12.composedPath(), o6 = r6.slice(r6.indexOf(e12.currentTarget), r6.indexOf(n12.domNode)).reverse();
        t6 = d3(n12.getLastRender(), o6, true);
      }
      let m3;
      return t6 && (m3 = i2.handleInterceptedEvent(s3, t6, this, e12)), a3("domEventProcessed", e12), m3;
    }, i2.postProcessProjectionOptions?.(c3);
    const m2 = r3();
    n12 = e10(t4, m2, c3), c3.eventHandlerInterceptor = void 0, f6.push(n12), u2.push(r3), i2.afterFirstVNodeRendered && i2.afterFirstVNodeRendered(n12, m2);
  };
  let v = () => {
    if (m = void 0, p2) {
      p2 = false, a3("renderStart", void 0);
      for (let e10 = 0; e10 < f6.length; e10++) {
        const t4 = u2[e10]();
        a3("rendered", void 0), f6[e10].update(t4), a3("patched", void 0);
      }
      a3("renderDone", void 0), p2 = true;
    }
  };
  return i2.modifyDoRenderImplementation && (v = i2.modifyDoRenderImplementation(v, f6, u2)), s3 = {
    renderNow: v,
    scheduleRender: () => {
      m || l2 || (m = requestAnimationFrame(v));
    },
    stop: () => {
      m && (cancelAnimationFrame(m), m = void 0), l2 = true;
    },
    resume: () => {
      l2 = false, p2 = true, s3.scheduleRender();
    },
    append: (t4, r3) => {
      h2(n5.append, t4, r3);
    },
    insertBefore: (t4, r3) => {
      h2(n5.insertBefore, t4, r3);
    },
    merge: (t4, r3) => {
      h2(n5.merge, t4, r3);
    },
    replace: (t4, r3) => {
      h2(n5.replace, t4, r3);
    },
    detach: (e10) => {
      for (let t4 = 0; t4 < u2.length; t4++) if (u2[t4] === e10) return u2.splice(t4, 1), f6.splice(t4, 1)[0];
      throw new Error("renderFunction was not found");
    }
  }, s3;
};

// ../../../node_modules/@arcgis/core/widgets/support/tests.js
var e8 = /* @__PURE__ */ new Set();
function n10(n11) {
  e8.add(n11), n11.finally(() => e8.delete(n11));
}

// ../../../node_modules/@arcgis/core/widgets/Widget.js
var $;
var U = "esri.widgets.Widget";
var z = 0;
function W(e10, t4) {
  const r3 = Object.prototype.hasOwnProperty;
  for (const s3 in t4) r3.call(t4, s3) && r3.call(e10, s3) && (null != e10[s3] && null != t4[s3] && "object" == typeof e10[s3] && "object" == typeof t4[s3] ? W(e10[s3], t4[s3]) : e10[s3] = t4[s3]);
  return e10;
}
var x = s2({
  postProcessProjectionOptions(e10) {
    const t4 = e10.eventHandlerInterceptor, r3 = /capture$/i;
    e10.eventHandlerInterceptor = (e11, s3, o6, i2) => {
      const n11 = t4?.(e11, s3, o6, i2), a3 = r3.test(e11);
      if (!((e11 = e11.replace(r3, "")).toLowerCase() in o6) || a3) {
        const t5 = e11[2].toLowerCase() + e11.slice(3), r4 = (e12) => n11?.call(o6, e12);
        o6.addEventListener(t5, r4, a3);
        const s4 = () => o6.removeEventListener(t5, r4, a3), d4 = i2.afterRemoved;
        i2.afterRemoved = (e12) => {
          d4?.(e12), s4();
        };
      }
      return n11;
    };
  },
  handleInterceptedEvent(e10, t4, r3, s3) {
    const {
      eventPhase: o6,
      type: i2
    } = s3, n11 = o6 === Event.CAPTURING_PHASE;
    let a3 = `on${i2}${n11 ? "capture" : ""}`;
    const d4 = t4.properties;
    (d4 && a3 in d4 || (a3 = `on${i2[0].toUpperCase()}${i2.slice(1)}${n11 ? "Capture" : ""}`, d4 && a3 in d4)) && (t2(), e10.scheduleRender(), d4[a3].call(d4.bind || r3, s3));
  }
});
var A2 = false;
var O = class extends n3(o2.EventedAccessor) {
  constructor(e10, t4) {
    super(e10, t4), this._attached = false, this._projector = x, this._readyForTrueRender = false, this.key = this, this.autoRenderingEnabled = true, this._loadLocale = k(() => __async(this, null, function* () {
      if (this._messageBundleProps?.length) {
        const e11 = yield Promise.allSettled(this._messageBundleProps.map((_0) => __async(this, [_0], function* ({
          bundlePath: e12,
          propertyName: t5
        }) {
          if (this.destroyed) return;
          let r4 = yield h(e12);
          this.uiStrings && Object.keys(this.uiStrings) && (r4 = W(a(r4), this.uiStrings)), this[t5] = r4;
        })));
        if (this.destroyed) return;
        for (const t5 of e11) "rejected" === t5.status && n.getLogger(this).error("widget-intl:locale-error", this.declaredClass, t5.reason);
      }
      yield this.loadLocale();
    })), n8();
    const r3 = "esri-widget-uid-" + n4(), s3 = this.render.bind(this);
    this._trackingTarget = new e(() => {
      this.autoRenderingEnabled && this.scheduleRender();
    });
    const o6 = () => ({
      vnodeSelector: "div",
      properties: {
        key: `${r3}-hidden`,
        class: "",
        styles: {
          display: "none"
        }
      },
      domNode: null,
      children: void 0,
      text: void 0
    }), i2 = () => {
      if (!this._readyForTrueRender || this.destroyed) return null;
      const e11 = s3() ?? o6(), t5 = e11.properties ??= {};
      if (t5.key ??= r3, f5(e11.vnodeSelector)) {
        if (!this.visible) return o6();
      } else this.visible ? t5.styles || (t5.styles = {}) : (t5.class = "", t5.styles = {
        display: "none"
      }), t5.styles.display ??= "";
      let i3 = 0;
      return e11.children?.forEach((e12) => {
        f5(e12.vnodeSelector) || (e12.properties ??= {}, e12.properties.key ??= `${this.id}--${i3++}`);
      }), d2(this, e11);
    };
    this.render = () => {
      if (A2) return i2();
      let e11 = e3(this) ?? null;
      if (e11) return e11;
      this._trackingTarget.clear(), A2 = true;
      try {
        e11 = f(this._trackingTarget, i2);
      } catch (t5) {
        throw n.getLogger(this).error(t5), t5;
      } finally {
        A2 = false;
      }
      return e11 && c(this, e11), e11;
    };
    const d4 = this.beforeFirstRender();
    d4 ? this._resourcesFetch = d4.then(() => {
      this._readyForTrueRender = true, this._postInitialize();
    }) : (this._resourcesFetch = Promise.resolve().then(() => {
      this._postInitialize();
    }), this._readyForTrueRender = true), this.addResolvingPromise(this._resourcesFetch), n10(this._resourcesFetch);
  }
  normalizeCtorArgs(e10, t4) {
    const r3 = __spreadValues({}, e10);
    return t4 && (r3.container = t4), r3;
  }
  postInitialize() {
  }
  beforeFirstRender() {
    const e10 = this.loadDependencies();
    return this._messageBundleProps?.length || e10 ? Promise.all([e10, this._loadLocale()]).then(() => {
    }).catch(f2) : null;
  }
  loadDependencies() {
    return null;
  }
  loadLocale() {
    return null;
  }
  destroy() {
    this.destroyed || (u(this._trackingTarget), u(this.viewModel), this._detach(this.container), this._set("container", null), this._emitter.clear(), this.render = () => null, this._projector = null, o3(this));
  }
  set container(e10) {
    this._get("container") || this._set("container", e10);
  }
  castContainer(e10) {
    return e5(e10);
  }
  get domNode() {
    return this.container;
  }
  set domNode(e10) {
    this.container = e10;
  }
  get icon() {
    return null;
  }
  set icon(e10) {
    this._overrideIfSome("icon", e10);
  }
  get id() {
    return this._get("id") || this.container?.id || Date.now().toString(16) + "-widget-" + z++;
  }
  set id(e10) {
    e10 && this._set("id", e10);
  }
  get label() {
    return this.declaredClass.split(".").pop();
  }
  set label(e10) {
    this._overrideIfSome("label", e10);
  }
  get renderable() {
    return this._resourcesFetch;
  }
  get visible() {
    return this._get("visible");
  }
  set visible(e10) {
    this._set("visible", e10);
  }
  get [($ = t3, e4)]() {
    return {
      projector: this._projector
    };
  }
  render() {
    throw new Error("not implemented");
  }
  scheduleRender() {
    this.destroyed || (o3(this), this._projector.scheduleRender());
  }
  own(e10) {
    t(n.getLogger(this), "`Widget.own()` is deprecated in favor of 'Widget.addHandles()'", {
      replacement: "Widget.addHandles()",
      version: "4.28"
    }), this.addHandles(e10);
  }
  classes(...e10) {
    return f4.apply(this, e10);
  }
  renderNow() {
    o3(this), this._projector.renderNow();
  }
  _postInitialize() {
    if (this.destroyed) return;
    this.scheduleRender(), this._delegatedEventNames?.length && this.addHandles(d(() => this.viewModel, (e11, t4) => {
      t4 && this.removeHandles("delegated-events"), e11 && n2(e11) && this.addHandles(this._delegatedEventNames.map((t5) => o(e11, t5, (e12) => {
        this.emit(t5, e12);
      })), "delegated-events");
    }, A)), this.postInitialize();
    const e10 = () => __async(this, null, function* () {
      yield this._loadLocale().catch(f2), this.scheduleRender();
    });
    this.addHandles([f3(e10), d(() => this.uiStrings, e10), p(() => this.container, (e11) => {
      this.destroyed || this._attach(e11);
    }, {
      initial: true,
      once: true
    })]);
  }
  _attach(e10) {
    e10 && (this._projector.merge(e10, this.render), this._attached = true);
  }
  _detach(e10) {
    this._attached && (this._projector.detach(this.render), this._attached = false), e10?.parentNode?.removeChild(e10);
  }
};
O[$] = true, e2([y()], O.prototype, "_readyForTrueRender", void 0), e2([y({
  value: null
})], O.prototype, "container", null), e2([s("container")], O.prototype, "castContainer", null), e2([y()], O.prototype, "icon", null), e2([y()], O.prototype, "id", null), e2([y()], O.prototype, "label", null), e2([y()], O.prototype, "renderable", null), e2([y()], O.prototype, "uiStrings", void 0), e2([y()], O.prototype, "viewModel", void 0), e2([y({
  value: true
})], O.prototype, "visible", null), e2([y()], O.prototype, "key", void 0), e2([y()], O.prototype, "children", void 0), e2([y()], O.prototype, "afterCreate", void 0), e2([y()], O.prototype, "afterUpdate", void 0), e2([y()], O.prototype, "afterRemoved", void 0), O = e2([a2(U)], O);
var B = O;

// ../../../node_modules/@arcgis/core/widgets/support/decorators/messageBundle.js
function e9(e10) {
  return (s3, r3) => {
    s3.hasOwnProperty("_messageBundleProps") || (s3._messageBundleProps = s3._messageBundleProps ? s3._messageBundleProps.slice() : []);
    s3._messageBundleProps.push({
      bundlePath: e10,
      propertyName: r3
    });
  };
}

export {
  e5 as e,
  n7 as n,
  o4 as o,
  i,
  r,
  B,
  e9 as e2
};
/*! Bundled license information:

@esri/calcite-components/dist/components/index.js:
  (*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
   * v2.13.2
   *)
*/
//# sourceMappingURL=chunk-WYMXVOAT.js.map
