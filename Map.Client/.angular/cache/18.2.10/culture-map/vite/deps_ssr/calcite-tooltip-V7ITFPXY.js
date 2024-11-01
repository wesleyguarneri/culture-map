import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  FloatingArrow
} from "./chunk-B2HEJPB4.js";
import {
  FloatingCSS,
  connectFloatingUI,
  defaultOffsetDistance,
  disconnectFloatingUI,
  reposition
} from "./chunk-FFCABFWN.js";
import "./chunk-6J7SHXU3.js";
import {
  onToggleOpenCloseComponent
} from "./chunk-XKIWE4VL.js";
import "./chunk-7JIACICA.js";
import {
  getShadowRootNode,
  guid,
  queryElementRoots,
  toAriaBoolean
} from "./chunk-AHYZNZSK.js";
import "./chunk-IE4UBD3F.js";
import {
  H,
  Host,
  createEvent,
  h,
  proxyCustomElement
} from "./chunk-IAO6HACY.js";
import {
  __async
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@esri/calcite-components/dist/components/calcite-tooltip.js
var CSS = {
  container: "container"
};
var TOOLTIP_OPEN_DELAY_MS = 300;
var TOOLTIP_CLOSE_DELAY_MS = 500;
var ARIA_DESCRIBED_BY = "aria-describedby";
function getEffectiveReferenceElement(tooltip) {
  const {
    referenceElement
  } = tooltip;
  return (typeof referenceElement === "string" ? queryElementRoots(tooltip, {
    id: referenceElement
  }) : referenceElement) || null;
}
var TooltipManager = class {
  constructor() {
    this.registeredElements = /* @__PURE__ */ new WeakMap();
    this.registeredShadowRootCounts = /* @__PURE__ */ new WeakMap();
    this.hoverOpenTimeout = null;
    this.hoverCloseTimeout = null;
    this.activeTooltip = null;
    this.registeredElementCount = 0;
    this.clickedTooltip = null;
    this.queryTooltip = (composedPath) => {
      const {
        registeredElements
      } = this;
      const registeredElement = composedPath.find((pathEl) => registeredElements.has(pathEl));
      return registeredElements.get(registeredElement);
    };
    this.keyDownHandler = (event) => {
      if (event.key === "Escape" && !event.defaultPrevented) {
        const {
          activeTooltip
        } = this;
        if (activeTooltip?.open) {
          this.clearHoverTimeout();
          this.closeActiveTooltip();
          const referenceElement = getEffectiveReferenceElement(activeTooltip);
          if (referenceElement instanceof Element && referenceElement.contains(event.target)) {
            event.preventDefault();
          }
        }
      }
    };
    this.pointerMoveHandler = (event) => {
      const composedPath = event.composedPath();
      const {
        activeTooltip
      } = this;
      const tooltip = this.queryTooltip(composedPath);
      if (this.pathHasOpenTooltip(tooltip, composedPath)) {
        this.clearHoverTimeout();
        return;
      }
      if (tooltip === this.clickedTooltip) {
        return;
      }
      if (tooltip) {
        this.openHoveredTooltip(tooltip);
      } else if (activeTooltip?.open) {
        this.closeHoveredTooltip();
      }
      this.clickedTooltip = null;
    };
    this.clickHandler = (event) => {
      this.clickedTooltip = null;
      const composedPath = event.composedPath();
      const tooltip = this.queryTooltip(composedPath);
      if (this.pathHasOpenTooltip(tooltip, composedPath)) {
        this.clearHoverTimeout();
        return;
      }
      this.closeActiveTooltip();
      if (!tooltip) {
        return;
      }
      this.clearHoverTimeout();
      if (tooltip.closeOnClick) {
        this.clickedTooltip = tooltip;
        this.toggleTooltip(tooltip, false);
        return;
      }
      this.toggleTooltip(tooltip, true);
    };
    this.blurHandler = () => {
      this.closeActiveTooltip();
    };
    this.focusInHandler = (event) => {
      const composedPath = event.composedPath();
      const tooltip = this.queryTooltip(composedPath);
      if (this.pathHasOpenTooltip(tooltip, composedPath)) {
        this.clearHoverTimeout();
        return;
      }
      this.closeTooltipIfNotActive(tooltip);
      if (!tooltip) {
        return;
      }
      this.toggleFocusedTooltip(tooltip, true);
    };
    this.openHoveredTooltip = (tooltip) => {
      this.hoverOpenTimeout = window.setTimeout(() => {
        if (this.hoverOpenTimeout === null) {
          return;
        }
        this.clearHoverCloseTimeout();
        this.closeTooltipIfNotActive(tooltip);
        this.toggleTooltip(tooltip, true);
      }, this.activeTooltip?.open ? 0 : TOOLTIP_OPEN_DELAY_MS);
    };
    this.closeHoveredTooltip = () => {
      this.hoverCloseTimeout = window.setTimeout(() => {
        if (this.hoverCloseTimeout === null) {
          return;
        }
        this.closeActiveTooltip();
      }, TOOLTIP_CLOSE_DELAY_MS);
    };
  }
  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------
  registerElement(referenceEl, tooltip) {
    this.registeredElementCount++;
    this.registeredElements.set(referenceEl, tooltip);
    const shadowRoot = this.getReferenceElShadowRootNode(referenceEl);
    if (shadowRoot) {
      this.registerShadowRoot(shadowRoot);
    }
    if (this.registeredElementCount === 1) {
      this.addListeners();
    }
  }
  unregisterElement(referenceEl) {
    const shadowRoot = this.getReferenceElShadowRootNode(referenceEl);
    if (shadowRoot) {
      this.unregisterShadowRoot(shadowRoot);
    }
    if (this.registeredElements.delete(referenceEl)) {
      this.registeredElementCount--;
    }
    if (this.registeredElementCount === 0) {
      this.removeListeners();
    }
  }
  pathHasOpenTooltip(tooltip, composedPath) {
    const {
      activeTooltip
    } = this;
    return activeTooltip?.open && composedPath.includes(activeTooltip) || tooltip?.open && composedPath.includes(tooltip);
  }
  addShadowListeners(shadowRoot) {
    shadowRoot.addEventListener("focusin", this.focusInHandler, {
      capture: true
    });
  }
  removeShadowListeners(shadowRoot) {
    shadowRoot.removeEventListener("focusin", this.focusInHandler, {
      capture: true
    });
  }
  addListeners() {
    window.addEventListener("keydown", this.keyDownHandler, {
      capture: true
    });
    window.addEventListener("pointermove", this.pointerMoveHandler, {
      capture: true
    });
    window.addEventListener("click", this.clickHandler, {
      capture: true
    });
    window.addEventListener("focusin", this.focusInHandler, {
      capture: true
    });
    window.addEventListener("blur", this.blurHandler);
  }
  removeListeners() {
    window.removeEventListener("keydown", this.keyDownHandler, {
      capture: true
    });
    window.removeEventListener("pointermove", this.pointerMoveHandler, {
      capture: true
    });
    window.removeEventListener("click", this.clickHandler, {
      capture: true
    });
    window.removeEventListener("focusin", this.focusInHandler, {
      capture: true
    });
    window.removeEventListener("blur", this.blurHandler);
  }
  clearHoverOpenTimeout() {
    window.clearTimeout(this.hoverOpenTimeout);
    this.hoverOpenTimeout = null;
  }
  clearHoverCloseTimeout() {
    window.clearTimeout(this.hoverCloseTimeout);
    this.hoverCloseTimeout = null;
  }
  clearHoverTimeout() {
    this.clearHoverOpenTimeout();
    this.clearHoverCloseTimeout();
  }
  closeTooltipIfNotActive(tooltip) {
    if (this.activeTooltip !== tooltip) {
      this.closeActiveTooltip();
    }
  }
  closeActiveTooltip() {
    const {
      activeTooltip
    } = this;
    if (activeTooltip?.open) {
      this.toggleTooltip(activeTooltip, false);
    }
  }
  toggleFocusedTooltip(tooltip, open) {
    if (open) {
      this.clearHoverTimeout();
    }
    this.toggleTooltip(tooltip, open);
  }
  toggleTooltip(tooltip, open) {
    tooltip.open = open;
    this.activeTooltip = open ? tooltip : null;
  }
  registerShadowRoot(shadowRoot) {
    const {
      registeredShadowRootCounts
    } = this;
    const count = registeredShadowRootCounts.get(shadowRoot);
    const newCount = Math.min((typeof count === "number" ? count : 0) + 1, 1);
    if (newCount === 1) {
      this.addShadowListeners(shadowRoot);
    }
    registeredShadowRootCounts.set(shadowRoot, newCount);
  }
  unregisterShadowRoot(shadowRoot) {
    const {
      registeredShadowRootCounts
    } = this;
    const count = registeredShadowRootCounts.get(shadowRoot);
    const newCount = Math.max((typeof count === "number" ? count : 1) - 1, 0);
    if (newCount === 0) {
      this.removeShadowListeners(shadowRoot);
    }
    registeredShadowRootCounts.set(shadowRoot, newCount);
  }
  getReferenceElShadowRootNode(referenceEl) {
    return referenceEl instanceof Element ? getShadowRootNode(referenceEl) : null;
  }
};
var tooltipCss = ":host{--calcite-floating-ui-z-index:var(--calcite-tooltip-z-index, var(--calcite-z-index-tooltip));display:block;position:absolute;z-index:var(--calcite-floating-ui-z-index)}.calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:inset, left, opacity;opacity:0;box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);z-index:var(--calcite-z-index);border-radius:0.25rem}:host([data-placement^=bottom]) .calcite-floating-ui-anim{inset-block-start:-5px}:host([data-placement^=top]) .calcite-floating-ui-anim{inset-block-start:5px}:host([data-placement^=left]) .calcite-floating-ui-anim{left:5px}:host([data-placement^=right]) .calcite-floating-ui-anim{left:-5px}:host([data-placement]) .calcite-floating-ui-anim--active{opacity:1;inset-block:0;left:0}:host([calcite-hydrated-hidden]){visibility:hidden !important;pointer-events:none}.calcite-floating-ui-arrow{pointer-events:none;position:absolute;z-index:calc(var(--calcite-z-index) * -1);fill:var(--calcite-color-foreground-1)}.calcite-floating-ui-arrow__stroke{stroke:var(--calcite-color-border-3)}.container{position:relative;overflow:hidden;border-radius:0.25rem;padding-block:0.75rem;padding-inline:1rem;font-size:var(--calcite-font-size--2);line-height:1.375;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-1);max-inline-size:20rem;max-block-size:20rem;text-align:start}.calcite-floating-ui-anim{border-radius:0.25rem;border-width:1px;border-style:solid;border-color:var(--calcite-color-border-3);background-color:var(--calcite-color-foreground-1)}.arrow::before{outline:1px solid var(--calcite-color-border-3)}:host([hidden]){display:none}[hidden]{display:none}";
var CalciteTooltipStyle0 = tooltipCss;
var manager = new TooltipManager();
var Tooltip = proxyCustomElement(class Tooltip2 extends H {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteTooltipBeforeClose = createEvent(this, "calciteTooltipBeforeClose", 6);
    this.calciteTooltipClose = createEvent(this, "calciteTooltipClose", 6);
    this.calciteTooltipBeforeOpen = createEvent(this, "calciteTooltipBeforeOpen", 6);
    this.calciteTooltipOpen = createEvent(this, "calciteTooltipOpen", 6);
    this.guid = `calcite-tooltip-${guid()}`;
    this.openTransitionProp = "opacity";
    this.setTransitionEl = (el) => {
      this.transitionEl = el;
    };
    this.setUpReferenceElement = (warn = true) => {
      this.removeReferences();
      this.effectiveReferenceElement = getEffectiveReferenceElement(this.el);
      connectFloatingUI(this, this.effectiveReferenceElement, this.el);
      const {
        el,
        referenceElement,
        effectiveReferenceElement
      } = this;
      if (warn && referenceElement && !effectiveReferenceElement) {
        console.warn(`${el.tagName}: reference-element id "${referenceElement}" was not found.`, {
          el
        });
      }
      this.addReferences();
    };
    this.getId = () => {
      return this.el.id || this.guid;
    };
    this.addReferences = () => {
      const {
        effectiveReferenceElement
      } = this;
      if (!effectiveReferenceElement) {
        return;
      }
      const id = this.getId();
      if ("setAttribute" in effectiveReferenceElement) {
        effectiveReferenceElement.setAttribute(ARIA_DESCRIBED_BY, id);
      }
      manager.registerElement(effectiveReferenceElement, this.el);
    };
    this.removeReferences = () => {
      const {
        effectiveReferenceElement
      } = this;
      if (!effectiveReferenceElement) {
        return;
      }
      if ("removeAttribute" in effectiveReferenceElement) {
        effectiveReferenceElement.removeAttribute(ARIA_DESCRIBED_BY);
      }
      manager.unregisterElement(effectiveReferenceElement);
    };
    this.closeOnClick = false;
    this.label = void 0;
    this.offsetDistance = defaultOffsetDistance;
    this.offsetSkidding = 0;
    this.open = false;
    this.overlayPositioning = "absolute";
    this.placement = "auto";
    this.referenceElement = void 0;
    this.effectiveReferenceElement = void 0;
    this.floatingLayout = "vertical";
  }
  offsetDistanceOffsetHandler() {
    this.reposition(true);
  }
  offsetSkiddingHandler() {
    this.reposition(true);
  }
  openHandler() {
    onToggleOpenCloseComponent(this);
    this.reposition(true);
  }
  overlayPositioningHandler() {
    this.reposition(true);
  }
  placementHandler() {
    this.reposition(true);
  }
  referenceElementHandler() {
    this.setUpReferenceElement();
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    this.setUpReferenceElement(true);
    if (this.open) {
      onToggleOpenCloseComponent(this);
    }
  }
  componentWillLoad() {
    return __async(this, null, function* () {
      if (this.open) {
        onToggleOpenCloseComponent(this);
      }
    });
  }
  componentDidLoad() {
    if (this.referenceElement && !this.effectiveReferenceElement) {
      this.setUpReferenceElement();
    }
  }
  disconnectedCallback() {
    this.removeReferences();
    disconnectFloatingUI(this, this.effectiveReferenceElement, this.el);
  }
  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------
  /**
   * Updates the position of the component.
   *
   * @param delayed
   */
  reposition(delayed = false) {
    return __async(this, null, function* () {
      const {
        el,
        effectiveReferenceElement,
        placement,
        overlayPositioning,
        offsetDistance,
        offsetSkidding,
        arrowEl
      } = this;
      return reposition(this, {
        floatingEl: el,
        referenceEl: effectiveReferenceElement,
        overlayPositioning,
        placement,
        offsetDistance,
        offsetSkidding,
        arrowEl,
        type: "tooltip"
      }, delayed);
    });
  }
  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------
  onBeforeOpen() {
    this.calciteTooltipBeforeOpen.emit();
  }
  onOpen() {
    this.calciteTooltipOpen.emit();
  }
  onBeforeClose() {
    this.calciteTooltipBeforeClose.emit();
  }
  onClose() {
    this.calciteTooltipClose.emit();
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    const {
      effectiveReferenceElement,
      label,
      open,
      floatingLayout
    } = this;
    const displayed = effectiveReferenceElement && open;
    const hidden = !displayed;
    return h(Host, {
      key: "4f097fd8c6eda6dfcd5734e5aaea1f52092501e7",
      "aria-hidden": toAriaBoolean(hidden),
      "aria-label": label,
      "aria-live": "polite",
      "calcite-hydrated-hidden": hidden,
      id: this.getId(),
      role: "tooltip"
    }, h("div", {
      key: "6b5055ab6f95277dd4daeaaff15cb9848d85eea0",
      class: {
        [FloatingCSS.animation]: true,
        [FloatingCSS.animationActive]: displayed
      },
      ref: this.setTransitionEl
    }, h(FloatingArrow, {
      key: "57f68bea5a7bb369d82437f10535cab9753677ea",
      floatingLayout,
      ref: (arrowEl) => this.arrowEl = arrowEl
    }), h("div", {
      key: "100b8318173849508952f996acaeb5bf81b8af43",
      class: CSS.container
    }, h("slot", {
      key: "f89d3ae9313d9555e6a7acdc32c323de85319a3a"
    }))));
  }
  get el() {
    return this;
  }
  static get watchers() {
    return {
      "offsetDistance": ["offsetDistanceOffsetHandler"],
      "offsetSkidding": ["offsetSkiddingHandler"],
      "open": ["openHandler"],
      "overlayPositioning": ["overlayPositioningHandler"],
      "placement": ["placementHandler"],
      "referenceElement": ["referenceElementHandler"]
    };
  }
  static get style() {
    return CalciteTooltipStyle0;
  }
}, [1, "calcite-tooltip", {
  "closeOnClick": [516, "close-on-click"],
  "label": [1],
  "offsetDistance": [514, "offset-distance"],
  "offsetSkidding": [514, "offset-skidding"],
  "open": [516],
  "overlayPositioning": [513, "overlay-positioning"],
  "placement": [513],
  "referenceElement": [1, "reference-element"],
  "effectiveReferenceElement": [32],
  "floatingLayout": [32],
  "reposition": [64]
}, void 0, {
  "offsetDistance": ["offsetDistanceOffsetHandler"],
  "offsetSkidding": ["offsetSkiddingHandler"],
  "open": ["openHandler"],
  "overlayPositioning": ["overlayPositioningHandler"],
  "placement": ["placementHandler"],
  "referenceElement": ["referenceElementHandler"]
}]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-tooltip"];
  components.forEach((tagName) => {
    switch (tagName) {
      case "calcite-tooltip":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, Tooltip);
        }
        break;
    }
  });
}
defineCustomElement$1();
var CalciteTooltip = Tooltip;
var defineCustomElement = defineCustomElement$1;
export {
  CalciteTooltip,
  defineCustomElement
};
/*! Bundled license information:

@esri/calcite-components/dist/components/calcite-tooltip.js:
  (*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
   * v2.13.2
   *)
*/
//# sourceMappingURL=calcite-tooltip-V7ITFPXY.js.map
