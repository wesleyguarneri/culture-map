import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  CSS
} from "./chunk-3E4IAFHB.js";
import {
  InteractiveContainer,
  updateHostInteraction
} from "./chunk-H4DSEZHF.js";
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

// ../../../node_modules/@esri/calcite-components/dist/components/calcite-dropdown-item.js
var dropdownItemCss = ":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:flex;flex-grow:1;align-items:center;outline-color:transparent}.container{position:relative;display:flex;flex-grow:1;cursor:pointer;align-items:center;color:var(--calcite-color-text-3);text-decoration-line:none;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);text-align:start}.container a{position:relative;display:flex;flex-grow:1;cursor:pointer;align-items:center;color:var(--calcite-color-text-3);text-decoration-line:none;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);outline-color:transparent}.dropdown-item-content{flex:1 1 auto;padding-block:0.125rem}.dropdown-item-icon{position:relative;opacity:0;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:scale(0.9)}:host([scale=s]) .container{padding-block:0.25rem;padding-inline:0.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=s]) .dropdown-item-icon,:host([scale=s]) .dropdown-item-icon--start{padding-inline-end:var(--calcite-spacing-sm)}:host([scale=s]) .dropdown-item-icon--end{padding-inline-start:var(--calcite-spacing-sm)}:host([scale=m]) .container{padding-block:0.5rem;padding-inline:0.75rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=m]) .dropdown-item-icon,:host([scale=m]) .dropdown-item-icon--start{padding-inline-end:var(--calcite-spacing-md)}:host([scale=m]) .dropdown-item-icon--end{padding-inline-start:var(--calcite-spacing-md)}:host([scale=l]) .container{padding-block:0.625rem;padding-inline:1rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l]) .dropdown-item-icon,:host([scale=l]) .dropdown-item-icon--start{padding-inline-end:var(--calcite-spacing-xl)}:host([scale=l]) .dropdown-item-icon--end{padding-inline-start:var(--calcite-spacing-xl)}:host(:focus){outline:2px solid transparent;outline-offset:2px;outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}:host(:focus) .container{color:var(--calcite-color-text-1);text-decoration-line:none}:host(:hover:not([disabled])) .container,:host(:active:not([disabled])) .container{background-color:var(--calcite-color-foreground-2);color:var(--calcite-color-text-1);text-decoration-line:none}:host(:hover:not([disabled])) .dropdown-link,:host(:active:not([disabled])) .dropdown-link{color:var(--calcite-color-text-1)}:host(:active:not([disabled])) .container{background-color:var(--calcite-color-foreground-3)}:host([selected]) .container:not(.container--none-selection),:host([selected]) .dropdown-link{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-1)}:host([selected]) .container:not(.container--none-selection) calcite-icon,:host([selected]) .dropdown-link calcite-icon{color:var(--calcite-color-brand)}:host(:hover:not([disabled])) .dropdown-item-icon{color:var(--calcite-color-border-1);opacity:1}:host([selected]) .dropdown-item-icon{color:var(--calcite-color-brand);opacity:1}:host([hidden]){display:none}[hidden]{display:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}";
var CalciteDropdownItemStyle0 = dropdownItemCss;
var DropdownItem = proxyCustomElement(class DropdownItem2 extends H {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteDropdownItemSelect = createEvent(this, "calciteDropdownItemSelect", 6);
    this.calciteInternalDropdownItemSelect = createEvent(this, "calciteInternalDropdownItemSelect", 6);
    this.calciteInternalDropdownItemKeyEvent = createEvent(this, "calciteInternalDropdownItemKeyEvent", 6);
    this.calciteInternalDropdownCloseRequest = createEvent(this, "calciteInternalDropdownCloseRequest", 6);
    this.disabled = false;
    this.href = void 0;
    this.iconFlipRtl = void 0;
    this.iconStart = void 0;
    this.iconEnd = void 0;
    this.label = void 0;
    this.rel = void 0;
    this.selected = false;
    this.target = void 0;
    this.selectionMode = "single";
    this.scale = "m";
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
      this.el?.focus();
    });
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  componentWillLoad() {
    setUpLoadableComponent(this);
    this.initialize();
  }
  componentDidLoad() {
    setComponentLoaded(this);
  }
  connectedCallback() {
    this.initialize();
  }
  componentDidRender() {
    updateHostInteraction(this);
  }
  render() {
    const {
      href,
      selectionMode,
      label,
      iconFlipRtl
    } = this;
    const iconStartEl = h("calcite-icon", {
      key: "1ec1c941651dda8f39fa15427592141f04180f3e",
      class: CSS.iconStart,
      flipRtl: iconFlipRtl === "start" || iconFlipRtl === "both",
      icon: this.iconStart,
      scale: getIconScale(this.scale)
    });
    const contentNode = h("span", {
      key: "3ab167ed4054ca34b4e13e72b752af6cf25522ae",
      class: CSS.itemContent
    }, h("slot", {
      key: "88cf44809fb48450c66cc8f105bbda008a78157d"
    }));
    const iconEndEl = h("calcite-icon", {
      key: "32fb27182943a032c0037f1f878a95c194d2dff1",
      class: CSS.iconEnd,
      flipRtl: iconFlipRtl === "end" || iconFlipRtl === "both",
      icon: this.iconEnd,
      scale: getIconScale(this.scale)
    });
    const slottedContent = this.iconStart && this.iconEnd ? [iconStartEl, contentNode, iconEndEl] : this.iconStart ? [iconStartEl, contentNode] : this.iconEnd ? [contentNode, iconEndEl] : contentNode;
    const contentEl = !href ? slottedContent : h("a", {
      "aria-label": label,
      class: CSS.link,
      href,
      ref: (el) => this.childLink = el,
      rel: this.rel,
      tabIndex: -1,
      target: this.target
    }, slottedContent);
    const itemRole = href ? null : selectionMode === "single" ? "menuitemradio" : selectionMode === "multiple" ? "menuitemcheckbox" : "menuitem";
    const itemAria = selectionMode !== "none" ? toAriaBoolean(this.selected) : null;
    const {
      disabled
    } = this;
    return h(Host, {
      key: "beec8e51bf18bdcab1928181828b372cc70bb7ee",
      "aria-checked": itemAria,
      "aria-label": !href ? label : "",
      role: itemRole,
      tabIndex: disabled ? -1 : 0
    }, h(InteractiveContainer, {
      key: "5cbbd1074d6c571f4cac3a99e4a2c09bf113db55",
      disabled
    }, h("div", {
      key: "bff025aeb280c9d0d829e5cf4d94e9392604e607",
      class: {
        [CSS.container]: true,
        [CSS.containerNone]: selectionMode === "none"
      }
    }, selectionMode !== "none" ? h("calcite-icon", {
      class: CSS.icon,
      icon: selectionMode === "multiple" ? "check" : "bullet-point",
      scale: getIconScale(this.scale)
    }) : null, contentEl)));
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  onClick() {
    this.emitRequestedItem();
  }
  keyDownHandler(event) {
    switch (event.key) {
      case " ":
      case "Enter":
        this.emitRequestedItem();
        if (this.href) {
          this.childLink.click();
        }
        event.preventDefault();
        break;
      case "Escape":
        this.calciteInternalDropdownCloseRequest.emit();
        event.preventDefault();
        break;
      case "Tab":
        this.calciteInternalDropdownItemKeyEvent.emit({
          keyboardEvent: event
        });
        break;
      case "ArrowUp":
      case "ArrowDown":
      case "Home":
      case "End":
        event.preventDefault();
        this.calciteInternalDropdownItemKeyEvent.emit({
          keyboardEvent: event
        });
        break;
    }
  }
  updateActiveItemOnChange(event) {
    const parentEmittedChange = event.composedPath().includes(this.parentDropdownGroupEl);
    if (parentEmittedChange) {
      this.requestedDropdownGroup = event.detail.requestedDropdownGroup;
      this.requestedDropdownItem = event.detail.requestedDropdownItem;
      this.determineActiveItem();
    }
    event.stopPropagation();
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  initialize() {
    this.parentDropdownGroupEl = this.el.closest("calcite-dropdown-group");
    if (this.selectionMode === "none") {
      this.selected = false;
    }
  }
  determineActiveItem() {
    switch (this.selectionMode) {
      case "multiple":
        if (this.el === this.requestedDropdownItem) {
          this.selected = !this.selected;
        }
        break;
      case "single":
        if (this.el === this.requestedDropdownItem) {
          this.selected = true;
        } else if (this.requestedDropdownGroup === this.parentDropdownGroupEl) {
          this.selected = false;
        }
        break;
      case "none":
        this.selected = false;
        break;
    }
  }
  emitRequestedItem() {
    this.calciteDropdownItemSelect.emit();
    this.calciteInternalDropdownItemSelect.emit({
      requestedDropdownItem: this.el,
      requestedDropdownGroup: this.parentDropdownGroupEl
    });
  }
  get el() {
    return this;
  }
  static get style() {
    return CalciteDropdownItemStyle0;
  }
}, [1, "calcite-dropdown-item", {
  "disabled": [516],
  "href": [513],
  "iconFlipRtl": [513, "icon-flip-rtl"],
  "iconStart": [513, "icon-start"],
  "iconEnd": [513, "icon-end"],
  "label": [1],
  "rel": [513],
  "selected": [1540],
  "target": [513],
  "selectionMode": [1, "selection-mode"],
  "scale": [513],
  "setFocus": [64]
}, [[0, "click", "onClick"], [0, "keydown", "keyDownHandler"], [16, "calciteInternalDropdownItemChange", "updateActiveItemOnChange"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-dropdown-item", "calcite-icon"];
  components.forEach((tagName) => {
    switch (tagName) {
      case "calcite-dropdown-item":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, DropdownItem);
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
var CalciteDropdownItem = DropdownItem;
var defineCustomElement2 = defineCustomElement$1;
export {
  CalciteDropdownItem,
  defineCustomElement2 as defineCustomElement
};
/*! Bundled license information:

@esri/calcite-components/dist/components/calcite-dropdown-item.js:
  (*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
   * v2.13.2
   *)
*/
//# sourceMappingURL=calcite-dropdown-item-JNHSNNU5.js.map
