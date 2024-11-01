import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  connectConditionalSlotComponent,
  disconnectConditionalSlotComponent
} from "./chunk-JCMR2LM7.js";
import {
  componentFocusable,
  setComponentLoaded,
  setUpLoadableComponent
} from "./chunk-3LOI6Q5C.js";
import {
  defineCustomElement
} from "./chunk-JTD7ODRH.js";
import "./chunk-OOEWT25O.js";
import "./chunk-7JIACICA.js";
import {
  getIconScale
} from "./chunk-SJNQ3G2B.js";
import {
  closestElementCrossShadowBoundary,
  getElementDir,
  getSlotted,
  toAriaBoolean
} from "./chunk-AHYZNZSK.js";
import {
  CSS_UTILITY
} from "./chunk-IE4UBD3F.js";
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

// ../../../node_modules/@esri/calcite-components/dist/components/calcite-accordion-item.js
var SLOTS = {
  actionsStart: "actions-start",
  actionsEnd: "actions-end"
};
var CSS = {
  actionsEnd: "actions-end",
  actionsStart: "actions-start",
  content: "content",
  description: "description",
  expandIcon: "expand-icon",
  header: "header",
  headerContainer: "header-container",
  headerContent: "header-content",
  headerText: "header-text",
  heading: "heading",
  icon: "icon",
  iconEnd: "icon--end",
  iconStart: "icon--start"
};
var IDS = {
  section: "section",
  sectionToggle: "section-toggle"
};
var accordionItemCss = ".icon-position--end,.icon-position--start{--calcite-internal-accordion-item-icon-rotation:calc(90deg * -1);--calcite-internal-accordion-item-active-icon-rotation:0deg;--calcite-internal-accordion-item-icon-rotation-rtl:90deg;--calcite-internal-accordion-item-active-icon-rotation-rtl:0deg}:host{position:relative;display:flex;flex-direction:column;text-decoration-line:none;color:var(--calcite-accordion-item-text-color, var(--calcite-accordion-text-color, var(--calcite-color-text-3)));background-color:var(--calcite-accordion-item-background-color);border-width:0}:host .header{background-color:var(--calcite-accordion-item-header-background-color)}.icon-position--start{--calcite-internal-accordion-item-flex-direction:row-reverse;--calcite-internal-accordion-item-icon-spacing-start:0;--calcite-internal-accordion-item-icon-spacing-end:var(--calcite-internal-accordion-icon-margin)}.icon-position--end{--calcite-internal-accordion-item-flex-direction:row;--calcite-internal-accordion-item-icon-spacing-start:var(--calcite-internal-accordion-icon-margin);--calcite-internal-accordion-item-icon-spacing-end:0}.icon-position--end:not(.icon-type--plus-minus){--calcite-internal-accordion-item-icon-rotation:0deg;--calcite-internal-accordion-item-active-icon-rotation:180deg;--calcite-internal-accordion-item-icon-rotation-rtl:0deg;--calcite-internal-accordion-item-active-icon-rotation-rtl:calc(180deg * -1)}.content,.header{border-block-end-width:var(--calcite-border-width-sm);border-block-end-style:solid;border-color:var(--calcite-accordion-item-border-color, var(--calcite-accordion-border-color, var(--calcite-color-border-2)))}.header-content,.content{padding:var(--calcite-accordion-item-content-space, var(--calcite-internal-accordion-item-padding, var(--calcite-internal-accordion-item-spacing-unit, 0.5rem 0.75rem)))}.header{display:flex;align-items:stretch}.header *{display:inline-flex;align-items:center;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);word-wrap:break-word;word-break:break-word}.header-content{flex-grow:1;cursor:pointer;outline-color:transparent;flex-direction:var(--calcite-internal-accordion-item-flex-direction);color:var(--calcite-accordion-item-heading-text-color, var(--calcite-accordion-text-color, inherit))}.header-content:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}.header-content:focus,.header-content:hover,.header-content:active{color:var(--calcite-accordion-item-heading-text-color, var(--calcite-accordion-text-color-hover, var(--calcite-color-text-2)))}.header-content:focus .heading,.header-content:hover .heading,.header-content:active .heading{color:var(--calcite-accordion-item-heading-text-color, var(--calcite-accordion-text-color-pressed, var(--calcite-color-text-1)))}.header-container{inline-size:100%}.header-text{margin-block:0px;flex-grow:1;flex-direction:column;padding-block:0px;text-align:initial;margin-inline-end:auto}.heading,.description{display:flex;inline-size:100%}.heading{font-weight:var(--calcite-font-weight-medium)}.actions-start,.actions-end{display:flex;align-items:center}.icon{display:flex;align-items:center;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);margin-inline-end:var(--calcite-internal-accordion-item-icon-spacing-start);margin-inline-start:var(--calcite-internal-accordion-item-icon-spacing-end)}.icon--start{color:var(--calcite-accordion-item-start-icon-color, var(--calcite-accordion-item-icon-color, currentColor));margin-inline-end:var(--calcite-internal-accordion-icon-margin)}.icon--end{color:var(--calcite-accordion-item-end-icon-color, var(--calcite-accordion-item-icon-color, currentColor));margin-inline-end:var(--calcite-internal-accordion-icon-margin);margin-inline-start:var(--calcite-internal-accordion-icon-margin)}.expand-icon{color:var(--calcite-accordion-item-expand-icon-color, var(--calcite-accordion-item-text-color, var(--calcite-accordion-text-color, var(--calcite-color-text-3))));margin-inline-start:var(--calcite-internal-accordion-item-icon-spacing-start);margin-inline-end:var(--calcite-internal-accordion-item-icon-spacing-end);transform:rotate(var(--calcite-internal-accordion-item-icon-rotation))}.calcite--rtl .expand-icon{transform:rotate(var(--calcite-internal-accordion-item-icon-rotation-rtl))}.description{margin-block-start:0.25rem}.content{display:none;padding-block-start:0px;text-align:initial}:host(:not(:focus):not(:hover):not([expanded])) .heading{color:var(--calcite-accordion-item-heading-text-color, var(--calcite-accordion-item-text-color-hover, var(--calcite-color-text-2)))}:host([expanded]){color:var(--calcite-accordion-item-text-color, var(--calcite-accordion-text-color, var(--calcite-accordion-text-color-pressed, var(--calcite-color-text-1))))}:host([expanded]) .header{border-block-end-color:transparent}:host([expanded]) .expand-icon{color:var(--calcite-accordion-item-expand-icon-color, var(--calcite-accordion-item-text-color, var(--calcite-accordion-text-color, var(--calcite-accordion-item-text-color-hover, var(--calcite-color-text-2)))));transform:rotate(var(--calcite-internal-accordion-item-active-icon-rotation))}:host([expanded]) .calcite--rtl .expand-icon{transform:rotate(var(--calcite-internal-accordion-item-active-icon-rotation-rtl))}:host([expanded]) .description{color:var(--calcite-accordion-item-text-color, var(--calcite-accordion-text-color, var(--calcite-accordion-item-text-color-hover, var(--calcite-color-text-2))))}:host([expanded]) .content{display:block}@media (forced-colors: active){:host([expanded]) .header{border-block-end:none}:host([expanded]) .heading{font-weight:bolder}.header-content:hover .heading,.header-content:focus .heading{text-decoration:underline}}:host([hidden]){display:none}[hidden]{display:none}";
var CalciteAccordionItemStyle0 = accordionItemCss;
var AccordionItem = proxyCustomElement(class AccordionItem2 extends H {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteInternalAccordionItemSelect = createEvent(this, "calciteInternalAccordionItemSelect", 6);
    this.calciteInternalAccordionItemClose = createEvent(this, "calciteInternalAccordionItemClose", 6);
    this.storeHeaderEl = (el) => {
      this.headerEl = el;
    };
    this.itemHeaderClickHandler = () => this.emitRequestedItem();
    this.expanded = false;
    this.heading = void 0;
    this.description = void 0;
    this.iconStart = void 0;
    this.iconEnd = void 0;
    this.iconFlipRtl = void 0;
    this.iconPosition = void 0;
    this.iconType = void 0;
    this.accordionParent = void 0;
    this.scale = void 0;
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    connectConditionalSlotComponent(this);
  }
  componentWillLoad() {
    setUpLoadableComponent(this);
  }
  componentDidLoad() {
    setComponentLoaded(this);
  }
  disconnectedCallback() {
    disconnectConditionalSlotComponent(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderActionsStart() {
    const {
      el
    } = this;
    return getSlotted(el, SLOTS.actionsStart) ? h("div", {
      class: CSS.actionsStart
    }, h("slot", {
      name: SLOTS.actionsStart
    })) : null;
  }
  renderActionsEnd() {
    const {
      el
    } = this;
    return getSlotted(el, SLOTS.actionsEnd) ? h("div", {
      class: CSS.actionsEnd
    }, h("slot", {
      name: SLOTS.actionsEnd
    })) : null;
  }
  render() {
    const {
      iconFlipRtl
    } = this;
    const dir = getElementDir(this.el);
    const iconStartEl = this.iconStart ? h("calcite-icon", {
      class: {
        [CSS.icon]: true,
        [CSS.iconStart]: true
      },
      flipRtl: iconFlipRtl === "both" || iconFlipRtl === "start",
      icon: this.iconStart,
      key: "icon-start",
      scale: getIconScale(this.scale)
    }) : null;
    const iconEndEl = this.iconEnd ? h("calcite-icon", {
      class: {
        [CSS.iconEnd]: true,
        [CSS.icon]: true
      },
      flipRtl: iconFlipRtl === "both" || iconFlipRtl === "end",
      icon: this.iconEnd,
      key: "icon-end",
      scale: getIconScale(this.scale)
    }) : null;
    const {
      description
    } = this;
    return h(Host, {
      key: "73a74d61e41199c57868bd5375ba1b08f8e19dbc"
    }, h("div", {
      key: "ce9e0a74ea1eb93b7e2f00e95e6a092dcf99726b",
      class: {
        [`icon-position--${this.iconPosition}`]: true,
        [`icon-type--${this.iconType}`]: true
      }
    }, h("div", {
      key: "18af6a636b01a816363edf73bd05a486ac0cc2b2",
      class: {
        [CSS.header]: true,
        [CSS_UTILITY.rtl]: dir === "rtl"
      }
    }, this.renderActionsStart(), h("div", {
      key: "8a82a3acec9576d7e936714d1bee0bd2a1cc4ab1",
      "aria-controls": IDS.section,
      "aria-expanded": toAriaBoolean(this.expanded),
      class: CSS.headerContent,
      id: IDS.sectionToggle,
      onClick: this.itemHeaderClickHandler,
      ref: this.storeHeaderEl,
      role: "button",
      tabindex: "0"
    }, h("div", {
      key: "b9b223e8e0b0f60d9f6f9c5a9bda1458def7ae01",
      class: CSS.headerContainer
    }, iconStartEl, h("div", {
      key: "ccdba89b98942b7163d09a0f78175c374aba5875",
      class: CSS.headerText
    }, h("span", {
      key: "c91bcaf36ba60ac2a8ef06e3356a15d1f3a7e78f",
      class: CSS.heading
    }, this.heading), description ? h("span", {
      class: CSS.description
    }, description) : null), iconEndEl), h("calcite-icon", {
      key: "aebf05069b1ceae376fb67074aad773c4f403c16",
      class: CSS.expandIcon,
      icon: this.iconType === "chevron" ? "chevronDown" : this.iconType === "caret" ? "caretDown" : this.expanded ? "minus" : "plus",
      scale: getIconScale(this.scale)
    })), this.renderActionsEnd()), h("section", {
      key: "7371b06f1ec99aab9351113663eda976540ae7b0",
      "aria-labelledby": IDS.sectionToggle,
      class: CSS.content,
      id: IDS.section
    }, h("slot", {
      key: "69b851d2989876bece534e499a039e55eaabb1ec"
    }))));
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  keyDownHandler(event) {
    if (event.target === this.el) {
      switch (event.key) {
        case " ":
        case "Enter":
          this.emitRequestedItem();
          event.preventDefault();
          break;
      }
    }
  }
  updateActiveItemOnChange(event) {
    const [accordion] = event.composedPath();
    const parent = closestElementCrossShadowBoundary(this.el, "calcite-accordion");
    if (accordion !== parent) {
      return;
    }
    this.determineActiveItem(parent.selectionMode, event.detail.requestedAccordionItem);
    event.stopPropagation();
  }
  accordionItemSyncHandler(event) {
    const [accordion] = event.composedPath();
    const accordionItem = this.el;
    const willBeSyncedByDirectParent = accordionItem.parentElement === accordion;
    if (willBeSyncedByDirectParent) {
      return;
    }
    const closestAccordionParent = closestElementCrossShadowBoundary(accordionItem, "calcite-accordion");
    if (accordion !== closestAccordionParent) {
      return;
    }
    this.iconPosition = closestAccordionParent.iconPosition;
    this.iconType = closestAccordionParent.iconType;
    this.scale = closestAccordionParent.scale;
    event.stopPropagation();
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** Sets focus on the component. */
  setFocus() {
    return __async(this, null, function* () {
      yield componentFocusable(this);
      this.headerEl.focus();
    });
  }
  determineActiveItem(selectionMode, requestedItem) {
    switch (selectionMode) {
      case "multiple":
        if (this.el === requestedItem) {
          this.expanded = !this.expanded;
        }
        break;
      case "single":
        this.expanded = this.el === requestedItem ? !this.expanded : false;
        break;
      case "single-persist":
        this.expanded = this.el === requestedItem;
        break;
    }
  }
  emitRequestedItem() {
    this.calciteInternalAccordionItemSelect.emit({
      requestedAccordionItem: this.el
    });
  }
  get el() {
    return this;
  }
  static get style() {
    return CalciteAccordionItemStyle0;
  }
}, [1, "calcite-accordion-item", {
  "expanded": [1540],
  "heading": [1],
  "description": [1],
  "iconStart": [513, "icon-start"],
  "iconEnd": [513, "icon-end"],
  "iconFlipRtl": [513, "icon-flip-rtl"],
  "iconPosition": [1, "icon-position"],
  "iconType": [1, "icon-type"],
  "accordionParent": [16],
  "scale": [1],
  "setFocus": [64]
}, [[0, "keydown", "keyDownHandler"], [16, "calciteInternalAccordionChange", "updateActiveItemOnChange"], [4, "calciteInternalAccordionItemsSync", "accordionItemSyncHandler"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-accordion-item", "calcite-icon"];
  components.forEach((tagName) => {
    switch (tagName) {
      case "calcite-accordion-item":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, AccordionItem);
        }
        break;
      case "calcite-icon":
        if (!customElements.get(tagName)) {
          defineCustomElement();
        }
        break;
    }
  });
}
defineCustomElement$1();
var CalciteAccordionItem = AccordionItem;
var defineCustomElement2 = defineCustomElement$1;
export {
  CalciteAccordionItem,
  defineCustomElement2 as defineCustomElement
};
/*! Bundled license information:

@esri/calcite-components/dist/components/calcite-accordion-item.js:
  (*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
   * v2.13.2
   *)
*/
//# sourceMappingURL=calcite-accordion-item-DA6TOFIJ.js.map
