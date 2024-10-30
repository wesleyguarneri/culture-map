import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  FloatingCSS,
  connectFloatingUI,
  defaultMenuPlacement,
  disconnectFloatingUI,
  filterValidFlipPlacements,
  reposition
} from "./chunk-FFCABFWN.js";
import "./chunk-6J7SHXU3.js";
import {
  InteractiveContainer,
  updateHostInteraction
} from "./chunk-H4DSEZHF.js";
import {
  onToggleOpenCloseComponent
} from "./chunk-XKIWE4VL.js";
import {
  componentFocusable,
  setComponentLoaded,
  setUpLoadableComponent
} from "./chunk-3LOI6Q5C.js";
import {
  isActivationKey
} from "./chunk-HCYVIRBF.js";
import {
  createObserver
} from "./chunk-OOEWT25O.js";
import "./chunk-7JIACICA.js";
import {
  focusElement,
  focusElementInGroup,
  focusFirstTabbable,
  guid,
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

// ../../../node_modules/@esri/calcite-components/dist/components/dropdown.js
var SLOTS = {
  dropdownTrigger: "trigger"
};
var dropdownCss = ":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:inline-block}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host .calcite-dropdown-wrapper{--calcite-floating-ui-z-index:var(--calcite-z-index-dropdown);display:block;position:absolute;z-index:var(--calcite-floating-ui-z-index);visibility:hidden}.calcite-dropdown-wrapper .calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:inset, left, opacity;opacity:0;box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);z-index:var(--calcite-z-index);border-radius:0.25rem}.calcite-dropdown-wrapper[data-placement^=bottom] .calcite-floating-ui-anim{inset-block-start:-5px}.calcite-dropdown-wrapper[data-placement^=top] .calcite-floating-ui-anim{inset-block-start:5px}.calcite-dropdown-wrapper[data-placement^=left] .calcite-floating-ui-anim{left:5px}.calcite-dropdown-wrapper[data-placement^=right] .calcite-floating-ui-anim{left:-5px}.calcite-dropdown-wrapper[data-placement] .calcite-floating-ui-anim--active{opacity:1;inset-block:0;left:0}:host([open]) .calcite-dropdown-wrapper{visibility:visible}:host .calcite-dropdown-content{max-block-size:45vh;inline-size:auto;overflow-y:auto;overflow-x:hidden;background-color:var(--calcite-color-foreground-1);inline-size:var(--calcite-dropdown-width)}.calcite-trigger-container{position:relative;display:flex;block-size:100%;flex:1 1 auto;word-wrap:break-word;word-break:break-word}@media (forced-colors: active){:host([open]) .calcite-dropdown-wrapper{border:1px solid canvasText}}:host([width-scale=s]){--calcite-dropdown-width:12rem}:host([width-scale=m]){--calcite-dropdown-width:14rem}:host([width-scale=l]){--calcite-dropdown-width:16rem}:host([hidden]){display:none}[hidden]{display:none}";
var CalciteDropdownStyle0 = dropdownCss;
var Dropdown = proxyCustomElement(class Dropdown2 extends H {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteDropdownSelect = createEvent(this, "calciteDropdownSelect", 6);
    this.calciteDropdownBeforeClose = createEvent(this, "calciteDropdownBeforeClose", 6);
    this.calciteDropdownClose = createEvent(this, "calciteDropdownClose", 6);
    this.calciteDropdownBeforeOpen = createEvent(this, "calciteDropdownBeforeOpen", 6);
    this.calciteDropdownOpen = createEvent(this, "calciteDropdownOpen", 6);
    this.items = [];
    this.groups = [];
    this.mutationObserver = createObserver("mutation", () => this.updateItems());
    this.resizeObserver = createObserver("resize", (entries) => this.resizeObserverCallback(entries));
    this.openTransitionProp = "opacity";
    this.guid = `calcite-dropdown-${guid()}`;
    this.focusLastDropdownItem = false;
    this.setFilteredPlacements = () => {
      const {
        el,
        flipPlacements
      } = this;
      this.filteredFlipPlacements = flipPlacements ? filterValidFlipPlacements(flipPlacements, el) : null;
    };
    this.updateTriggers = (event) => {
      this.triggers = event.target.assignedElements({
        flatten: true
      });
      this.reposition(true);
    };
    this.updateItems = () => {
      this.items = this.groups.map((group) => Array.from(group?.querySelectorAll("calcite-dropdown-item"))).reduce((previousValue, currentValue) => [...previousValue, ...currentValue], []);
      this.updateSelectedItems();
      this.reposition(true);
      this.items.forEach((item) => item.scale = this.scale);
    };
    this.updateGroups = (event) => {
      const groups = event.target.assignedElements({
        flatten: true
      }).filter((el) => el?.matches("calcite-dropdown-group"));
      this.groups = groups;
      this.updateItems();
      this.updateGroupScale();
    };
    this.resizeObserverCallback = (entries) => {
      entries.forEach((entry) => {
        const {
          target
        } = entry;
        if (target === this.referenceEl) {
          this.setDropdownWidth();
        } else if (target === this.scrollerEl) {
          this.setMaxScrollerHeight();
        }
      });
    };
    this.setDropdownWidth = () => {
      const {
        referenceEl,
        scrollerEl
      } = this;
      const referenceElWidth = referenceEl?.clientWidth;
      if (!referenceElWidth || !scrollerEl) {
        return;
      }
      scrollerEl.style.minWidth = `${referenceElWidth}px`;
    };
    this.setMaxScrollerHeight = () => {
      const {
        scrollerEl
      } = this;
      if (!scrollerEl) {
        return;
      }
      this.reposition(true);
      const maxScrollerHeight = this.getMaxScrollerHeight();
      scrollerEl.style.maxHeight = maxScrollerHeight > 0 ? `${maxScrollerHeight}px` : "";
      this.reposition(true);
    };
    this.setScrollerAndTransitionEl = (el) => {
      this.resizeObserver.observe(el);
      this.scrollerEl = el;
      this.transitionEl = el;
    };
    this.setReferenceEl = (el) => {
      this.referenceEl = el;
      connectFloatingUI(this, this.referenceEl, this.floatingEl);
      this.resizeObserver.observe(el);
    };
    this.setFloatingEl = (el) => {
      this.floatingEl = el;
      connectFloatingUI(this, this.referenceEl, this.floatingEl);
    };
    this.keyDownHandler = (event) => {
      if (!event.composedPath().includes(this.referenceEl)) {
        return;
      }
      const {
        defaultPrevented,
        key
      } = event;
      if (defaultPrevented) {
        return;
      }
      if (key === "Escape") {
        this.closeCalciteDropdown();
        event.preventDefault();
        return;
      }
      if (this.open && event.shiftKey && key === "Tab") {
        this.closeCalciteDropdown();
        event.preventDefault();
        return;
      }
      if (isActivationKey(key)) {
        this.toggleDropdown();
        event.preventDefault();
      } else if (key === "ArrowDown" || key === "ArrowUp") {
        this.focusLastDropdownItem = key === "ArrowUp";
        this.open = true;
        this.el.addEventListener("calciteDropdownOpen", this.onOpenEnd);
      }
    };
    this.focusOnFirstActiveOrDefaultItem = () => {
      const selectedItem = this.getTraversableItems().find((item) => item.selected);
      const target = selectedItem || (this.focusLastDropdownItem ? this.items[this.items.length - 1] : this.items[0]);
      this.focusLastDropdownItem = false;
      if (!target) {
        return;
      }
      focusElement(target);
    };
    this.onOpenEnd = () => {
      this.focusOnFirstActiveOrDefaultItem();
      this.el.removeEventListener("calciteDropdownOpen", this.onOpenEnd);
    };
    this.toggleDropdown = () => {
      this.open = !this.open;
      if (this.open) {
        this.el.addEventListener("calciteDropdownOpen", this.onOpenEnd);
      }
    };
    this.open = false;
    this.closeOnSelectDisabled = false;
    this.disabled = false;
    this.flipPlacements = void 0;
    this.maxItems = 0;
    this.overlayPositioning = "absolute";
    this.placement = defaultMenuPlacement;
    this.selectedItems = [];
    this.type = "click";
    this.widthScale = void 0;
    this.scale = "m";
  }
  openHandler() {
    onToggleOpenCloseComponent(this);
    if (this.disabled) {
      this.open = false;
      return;
    }
    this.reposition(true);
  }
  handleDisabledChange(value) {
    if (!value) {
      this.open = false;
    }
  }
  flipPlacementsHandler() {
    this.setFilteredPlacements();
    this.reposition(true);
  }
  maxItemsHandler() {
    this.setMaxScrollerHeight();
  }
  overlayPositioningHandler() {
    this.reposition(true);
  }
  placementHandler() {
    this.reposition(true);
  }
  handlePropsChange() {
    this.updateItems();
    this.updateGroupScale();
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** Sets focus on the component's first focusable element. */
  setFocus() {
    return __async(this, null, function* () {
      yield componentFocusable(this);
      focusFirstTabbable(this.referenceEl);
    });
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    this.mutationObserver?.observe(this.el, {
      childList: true,
      subtree: true
    });
    this.setFilteredPlacements();
    if (this.open) {
      this.openHandler();
      onToggleOpenCloseComponent(this);
    }
    this.updateItems();
    connectFloatingUI(this, this.referenceEl, this.floatingEl);
  }
  componentWillLoad() {
    setUpLoadableComponent(this);
  }
  componentDidLoad() {
    setComponentLoaded(this);
    connectFloatingUI(this, this.referenceEl, this.floatingEl);
  }
  componentDidRender() {
    updateHostInteraction(this);
  }
  disconnectedCallback() {
    this.mutationObserver?.disconnect();
    this.resizeObserver?.disconnect();
    disconnectFloatingUI(this, this.referenceEl, this.floatingEl);
  }
  render() {
    const {
      open,
      guid: guid2
    } = this;
    return h(Host, {
      key: "377c3d9687bc025f004b4efe58bfa5f0893d86d0"
    }, h(InteractiveContainer, {
      key: "9e2f48be045fc6db10cc7203a8b998ec2b6abafd",
      disabled: this.disabled
    }, h("div", {
      key: "8607de2d53a4f8c4b29206ee56aa23ad4c2cbe3d",
      class: "calcite-trigger-container",
      id: `${guid2}-menubutton`,
      onClick: this.toggleDropdown,
      onKeyDown: this.keyDownHandler,
      ref: this.setReferenceEl
    }, h("slot", {
      key: "07de8df34055ddc39301654a5ca312ddf293e6a9",
      "aria-controls": `${guid2}-menu`,
      "aria-expanded": toAriaBoolean(open),
      "aria-haspopup": "menu",
      name: SLOTS.dropdownTrigger,
      onSlotchange: this.updateTriggers
    })), h("div", {
      key: "c1469efb62eb704b021ce6479ad55deda59582d4",
      "aria-hidden": toAriaBoolean(!open),
      class: "calcite-dropdown-wrapper",
      ref: this.setFloatingEl
    }, h("div", {
      key: "f875166d486a53cd393f17d9295974aa449d449f",
      "aria-labelledby": `${guid2}-menubutton`,
      class: {
        ["calcite-dropdown-content"]: true,
        [FloatingCSS.animation]: true,
        [FloatingCSS.animationActive]: open
      },
      id: `${guid2}-menu`,
      ref: this.setScrollerAndTransitionEl,
      role: "menu"
    }, h("slot", {
      key: "bc6e61383aaf85b3d6242a86c50da68bc8b31e27",
      onSlotchange: this.updateGroups
    })))));
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /**
   * Updates the position of the component.
   *
   * @param delayed
   */
  reposition(delayed = false) {
    return __async(this, null, function* () {
      const {
        floatingEl,
        referenceEl,
        placement,
        overlayPositioning,
        filteredFlipPlacements
      } = this;
      return reposition(this, {
        floatingEl,
        referenceEl,
        overlayPositioning,
        placement,
        flipPlacements: filteredFlipPlacements,
        type: "menu"
      }, delayed);
    });
  }
  closeCalciteDropdownOnClick(event) {
    if (this.disabled || !this.open || event.composedPath().includes(this.el)) {
      return;
    }
    this.closeCalciteDropdown(false);
  }
  closeCalciteDropdownOnEvent(event) {
    this.closeCalciteDropdown();
    event.stopPropagation();
  }
  closeCalciteDropdownOnOpenEvent(event) {
    if (event.composedPath().includes(this.el)) {
      return;
    }
    this.open = false;
  }
  pointerEnterHandler() {
    if (this.disabled || this.type !== "hover") {
      return;
    }
    this.toggleDropdown();
  }
  pointerLeaveHandler() {
    if (this.disabled || this.type !== "hover") {
      return;
    }
    this.closeCalciteDropdown();
  }
  getTraversableItems() {
    return this.items.filter((item) => !item.disabled && !item.hidden);
  }
  calciteInternalDropdownItemKeyEvent(event) {
    const {
      keyboardEvent
    } = event.detail;
    const target = keyboardEvent.target;
    const traversableItems = this.getTraversableItems();
    switch (keyboardEvent.key) {
      case "Tab":
        this.open = false;
        this.updateTabIndexOfItems(target);
        break;
      case "ArrowDown":
        focusElementInGroup(traversableItems, target, "next");
        break;
      case "ArrowUp":
        focusElementInGroup(traversableItems, target, "previous");
        break;
      case "Home":
        focusElementInGroup(traversableItems, target, "first");
        break;
      case "End":
        focusElementInGroup(traversableItems, target, "last");
        break;
    }
    event.stopPropagation();
  }
  handleItemSelect(event) {
    this.updateSelectedItems();
    event.stopPropagation();
    this.calciteDropdownSelect.emit();
    if (!this.closeOnSelectDisabled || event.detail.requestedDropdownGroup.selectionMode === "none") {
      this.closeCalciteDropdown();
    }
    event.stopPropagation();
  }
  updateGroupScale() {
    this.groups?.forEach((group) => group.scale = this.scale);
  }
  onBeforeOpen() {
    this.calciteDropdownBeforeOpen.emit();
  }
  onOpen() {
    this.calciteDropdownOpen.emit();
  }
  onBeforeClose() {
    this.calciteDropdownBeforeClose.emit();
  }
  onClose() {
    this.calciteDropdownClose.emit();
  }
  updateSelectedItems() {
    this.selectedItems = this.items.filter((item) => item.selected);
  }
  getMaxScrollerHeight() {
    const {
      maxItems,
      items
    } = this;
    let itemsToProcess = 0;
    let maxScrollerHeight = 0;
    let groupHeaderHeight;
    this.groups.forEach((group) => {
      if (maxItems > 0 && itemsToProcess < maxItems) {
        Array.from(group.children).forEach((item, index) => {
          if (index === 0) {
            if (isNaN(groupHeaderHeight)) {
              groupHeaderHeight = item.offsetTop;
            }
            maxScrollerHeight += groupHeaderHeight;
          }
          if (itemsToProcess < maxItems) {
            maxScrollerHeight += item.offsetHeight;
            itemsToProcess += 1;
          }
        });
      }
    });
    return items.length > maxItems ? maxScrollerHeight : 0;
  }
  closeCalciteDropdown(focusTrigger = true) {
    this.open = false;
    if (focusTrigger) {
      focusElement(this.triggers[0]);
    }
  }
  updateTabIndexOfItems(target) {
    this.items.forEach((item) => {
      item.tabIndex = target !== item ? -1 : 0;
    });
  }
  static get delegatesFocus() {
    return true;
  }
  get el() {
    return this;
  }
  static get watchers() {
    return {
      "open": ["openHandler"],
      "disabled": ["handleDisabledChange"],
      "flipPlacements": ["flipPlacementsHandler"],
      "maxItems": ["maxItemsHandler"],
      "overlayPositioning": ["overlayPositioningHandler"],
      "placement": ["placementHandler"],
      "scale": ["handlePropsChange"]
    };
  }
  static get style() {
    return CalciteDropdownStyle0;
  }
}, [17, "calcite-dropdown", {
  "open": [1540],
  "closeOnSelectDisabled": [516, "close-on-select-disabled"],
  "disabled": [516],
  "flipPlacements": [16],
  "maxItems": [514, "max-items"],
  "overlayPositioning": [513, "overlay-positioning"],
  "placement": [513],
  "selectedItems": [1040],
  "type": [513],
  "widthScale": [513, "width-scale"],
  "scale": [513],
  "setFocus": [64],
  "reposition": [64]
}, [[8, "click", "closeCalciteDropdownOnClick"], [0, "calciteInternalDropdownCloseRequest", "closeCalciteDropdownOnEvent"], [8, "calciteDropdownOpen", "closeCalciteDropdownOnOpenEvent"], [1, "pointerenter", "pointerEnterHandler"], [1, "pointerleave", "pointerLeaveHandler"], [0, "calciteInternalDropdownItemKeyEvent", "calciteInternalDropdownItemKeyEvent"], [0, "calciteInternalDropdownItemSelect", "handleItemSelect"]], {
  "open": ["openHandler"],
  "disabled": ["handleDisabledChange"],
  "flipPlacements": ["flipPlacementsHandler"],
  "maxItems": ["maxItemsHandler"],
  "overlayPositioning": ["overlayPositioningHandler"],
  "placement": ["placementHandler"],
  "scale": ["handlePropsChange"]
}]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-dropdown"];
  components.forEach((tagName) => {
    switch (tagName) {
      case "calcite-dropdown":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, Dropdown);
        }
        break;
    }
  });
}
defineCustomElement();

// ../../../node_modules/@esri/calcite-components/dist/components/calcite-dropdown.js
var CalciteDropdown = Dropdown;
var defineCustomElement2 = defineCustomElement;
export {
  CalciteDropdown,
  defineCustomElement2 as defineCustomElement
};
/*! Bundled license information:

@esri/calcite-components/dist/components/dropdown.js:
  (*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
   * v2.13.2
   *)

@esri/calcite-components/dist/components/calcite-dropdown.js:
  (*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
   * v2.13.2
   *)
*/
//# sourceMappingURL=calcite-dropdown-ZM6WJ4QW.js.map
