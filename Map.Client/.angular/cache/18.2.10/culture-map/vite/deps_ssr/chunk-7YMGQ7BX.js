import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  getRoundRobinIndex
} from "./chunk-EFU5MZJZ.js";
import {
  defineCustomElement as defineCustomElement4
} from "./chunk-QYQC4Y6O.js";
import {
  defineCustomElement as defineCustomElement3
} from "./chunk-LC2LO3MD.js";
import {
  defineCustomElement as defineCustomElement2
} from "./chunk-5S5OSPDN.js";
import {
  componentFocusable,
  setComponentLoaded,
  setUpLoadableComponent
} from "./chunk-3LOI6Q5C.js";
import {
  isActivationKey
} from "./chunk-HCYVIRBF.js";
import {
  defineCustomElement
} from "./chunk-JTD7ODRH.js";
import {
  focusElement,
  guid,
  toAriaBoolean
} from "./chunk-AHYZNZSK.js";
import {
  Fragment,
  H,
  createEvent,
  h,
  proxyCustomElement
} from "./chunk-IAO6HACY.js";
import {
  __async
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@esri/calcite-components/dist/components/action-menu.js
var CSS = {
  menu: "menu",
  defaultTrigger: "default-trigger"
};
var SLOTS = {
  tooltip: "tooltip",
  trigger: "trigger"
};
var ICONS = {
  menu: "ellipsis"
};
var activeAttr = "data-active";
var actionMenuCss = ":host{box-sizing:border-box;display:flex;flex-direction:column;font-size:var(--calcite-font-size-1)}::slotted(calcite-action-group:not(:last-of-type)){border-block-end-width:var(--calcite-border-width-sm)}.default-trigger{position:relative;block-size:100%;flex:0 1 auto;align-self:stretch}slot[name=trigger]::slotted(calcite-action),calcite-action::slotted([slot=trigger]){position:relative;block-size:100%;flex:0 1 auto;align-self:stretch}.menu{display:flex;max-block-size:45vh;flex-direction:column;flex-wrap:nowrap;overflow-y:auto;overflow-x:hidden;outline:2px solid transparent;outline-offset:2px;gap:var(--calcite-action-menu-items-space, 0)}:host([hidden]){display:none}[hidden]{display:none}";
var CalciteActionMenuStyle0 = actionMenuCss;
var SUPPORTED_MENU_NAV_KEYS = ["ArrowUp", "ArrowDown", "End", "Home"];
var ActionMenu = proxyCustomElement(class ActionMenu2 extends H {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteActionMenuOpen = createEvent(this, "calciteActionMenuOpen", 6);
    this.actionElements = [];
    this.guid = `calcite-action-menu-${guid()}`;
    this.menuId = `${this.guid}-menu`;
    this.menuButtonId = `${this.guid}-menu-button`;
    this.connectMenuButtonEl = () => {
      const {
        menuButtonId,
        menuId,
        open,
        label
      } = this;
      const menuButtonEl = this.slottedMenuButtonEl || this.defaultMenuButtonEl;
      if (this.menuButtonEl === menuButtonEl) {
        return;
      }
      this.disconnectMenuButtonEl();
      this.menuButtonEl = menuButtonEl;
      this.setTooltipReferenceElement();
      if (!menuButtonEl) {
        return;
      }
      menuButtonEl.active = open;
      menuButtonEl.setAttribute("aria-controls", menuId);
      menuButtonEl.setAttribute("aria-expanded", toAriaBoolean(open));
      menuButtonEl.setAttribute("aria-haspopup", "true");
      if (!menuButtonEl.id) {
        menuButtonEl.id = menuButtonId;
      }
      if (!menuButtonEl.label) {
        menuButtonEl.label = label;
      }
      if (!menuButtonEl.text) {
        menuButtonEl.text = label;
      }
      menuButtonEl.addEventListener("click", this.menuButtonClick);
      menuButtonEl.addEventListener("keydown", this.menuButtonKeyDown);
    };
    this.disconnectMenuButtonEl = () => {
      const {
        menuButtonEl
      } = this;
      if (!menuButtonEl) {
        return;
      }
      menuButtonEl.removeEventListener("click", this.menuButtonClick);
      menuButtonEl.removeEventListener("keydown", this.menuButtonKeyDown);
    };
    this.setMenuButtonEl = (event) => {
      const actions = event.target.assignedElements({
        flatten: true
      }).filter((el) => el?.matches("calcite-action"));
      this.slottedMenuButtonEl = actions[0];
      this.connectMenuButtonEl();
    };
    this.setDefaultMenuButtonEl = (el) => {
      this.defaultMenuButtonEl = el;
      this.connectMenuButtonEl();
    };
    this.handleCalciteActionClick = () => {
      this.open = false;
      this.setFocus();
    };
    this.menuButtonClick = () => {
      this.toggleOpen();
    };
    this.updateTooltip = (event) => {
      const tooltips = event.target.assignedElements({
        flatten: true
      }).filter((el) => el?.matches("calcite-tooltip"));
      this.tooltipEl = tooltips[0];
      this.setTooltipReferenceElement();
    };
    this.setTooltipReferenceElement = () => {
      const {
        tooltipEl,
        expanded,
        menuButtonEl,
        open
      } = this;
      if (tooltipEl) {
        tooltipEl.referenceElement = !expanded && !open ? menuButtonEl : null;
      }
    };
    this.updateAction = (action, index) => {
      const {
        guid: guid2,
        activeMenuItemIndex
      } = this;
      const id = `${guid2}-action-${index}`;
      action.tabIndex = -1;
      action.setAttribute("role", "menuitem");
      if (!action.id) {
        action.id = id;
      }
      action.toggleAttribute(activeAttr, index === activeMenuItemIndex);
    };
    this.updateActions = (actions) => {
      actions?.forEach(this.updateAction);
    };
    this.handleDefaultSlotChange = (event) => {
      const actions = event.target.assignedElements({
        flatten: true
      }).reduce((previousValue, currentValue) => {
        if (currentValue?.matches("calcite-action")) {
          previousValue.push(currentValue);
          return previousValue;
        }
        if (currentValue?.matches("calcite-action-group")) {
          return previousValue.concat(Array.from(currentValue.querySelectorAll("calcite-action")));
        }
        return previousValue;
      }, []);
      this.actionElements = actions.filter((action) => !action.disabled && !action.hidden);
    };
    this.menuButtonKeyDown = (event) => {
      const {
        key
      } = event;
      const {
        actionElements,
        activeMenuItemIndex,
        open
      } = this;
      if (!actionElements.length) {
        return;
      }
      if (isActivationKey(key)) {
        event.preventDefault();
        if (!open) {
          this.toggleOpen();
          return;
        }
        const action = actionElements[activeMenuItemIndex];
        action ? action.click() : this.toggleOpen(false);
      }
      if (key === "Tab") {
        this.open = false;
        return;
      }
      if (key === "Escape") {
        this.toggleOpen(false);
        event.preventDefault();
        return;
      }
      this.handleActionNavigation(event, key, actionElements);
    };
    this.handleActionNavigation = (event, key, actions) => {
      if (!this.isValidKey(key, SUPPORTED_MENU_NAV_KEYS)) {
        return;
      }
      event.preventDefault();
      if (!this.open) {
        this.toggleOpen();
        if (key === "Home" || key === "ArrowDown") {
          this.activeMenuItemIndex = 0;
        }
        if (key === "End" || key === "ArrowUp") {
          this.activeMenuItemIndex = actions.length - 1;
        }
        return;
      }
      if (key === "Home") {
        this.activeMenuItemIndex = 0;
      }
      if (key === "End") {
        this.activeMenuItemIndex = actions.length - 1;
      }
      const currentIndex = this.activeMenuItemIndex;
      if (key === "ArrowUp") {
        this.activeMenuItemIndex = getRoundRobinIndex(Math.max(currentIndex - 1, -1), actions.length);
      }
      if (key === "ArrowDown") {
        this.activeMenuItemIndex = getRoundRobinIndex(currentIndex + 1, actions.length);
      }
    };
    this.toggleOpenEnd = () => {
      this.setFocus();
      this.el.removeEventListener("calcitePopoverOpen", this.toggleOpenEnd);
    };
    this.toggleOpen = (value = !this.open) => {
      this.el.addEventListener("calcitePopoverOpen", this.toggleOpenEnd);
      this.open = value;
    };
    this.handlePopoverOpen = () => {
      this.open = true;
    };
    this.handlePopoverClose = () => {
      this.open = false;
    };
    this.appearance = "solid";
    this.expanded = false;
    this.flipPlacements = void 0;
    this.label = void 0;
    this.open = false;
    this.overlayPositioning = "absolute";
    this.placement = "auto";
    this.scale = void 0;
    this.menuButtonEl = void 0;
    this.activeMenuItemIndex = -1;
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    this.connectMenuButtonEl();
  }
  componentWillLoad() {
    setUpLoadableComponent(this);
  }
  componentDidLoad() {
    setComponentLoaded(this);
  }
  disconnectedCallback() {
    this.disconnectMenuButtonEl();
  }
  expandedHandler() {
    this.open = false;
    this.setTooltipReferenceElement();
  }
  openHandler(open) {
    this.activeMenuItemIndex = this.open ? 0 : -1;
    if (this.menuButtonEl) {
      this.menuButtonEl.active = open;
    }
    this.calciteActionMenuOpen.emit();
    this.setTooltipReferenceElement();
  }
  activeMenuItemIndexHandler() {
    this.updateActions(this.actionElements);
  }
  // --------------------------------------------------------------------------
  //
  //  Methods
  //
  // --------------------------------------------------------------------------
  /** Sets focus on the component. */
  setFocus() {
    return __async(this, null, function* () {
      yield componentFocusable(this);
      return focusElement(this.menuButtonEl);
    });
  }
  renderMenuButton() {
    const {
      appearance,
      label,
      scale,
      expanded
    } = this;
    const menuButtonSlot = h("slot", {
      name: SLOTS.trigger,
      onSlotchange: this.setMenuButtonEl
    }, h("calcite-action", {
      appearance,
      class: CSS.defaultTrigger,
      icon: ICONS.menu,
      ref: this.setDefaultMenuButtonEl,
      scale,
      text: label,
      textEnabled: expanded
    }));
    return menuButtonSlot;
  }
  renderMenuItems() {
    const {
      actionElements,
      activeMenuItemIndex,
      open,
      menuId,
      menuButtonEl,
      label,
      placement,
      overlayPositioning,
      flipPlacements
    } = this;
    const activeAction = actionElements[activeMenuItemIndex];
    const activeDescendantId = activeAction?.id || null;
    return h("calcite-popover", {
      autoClose: true,
      flipPlacements,
      focusTrapDisabled: true,
      label,
      offsetDistance: 0,
      onCalcitePopoverClose: this.handlePopoverClose,
      onCalcitePopoverOpen: this.handlePopoverOpen,
      open,
      overlayPositioning,
      placement,
      pointerDisabled: true,
      referenceElement: menuButtonEl
    }, h("div", {
      "aria-activedescendant": activeDescendantId,
      "aria-labelledby": menuButtonEl?.id,
      class: CSS.menu,
      id: menuId,
      onClick: this.handleCalciteActionClick,
      role: "menu",
      tabIndex: -1
    }, h("slot", {
      onSlotchange: this.handleDefaultSlotChange
    })));
  }
  render() {
    return h(Fragment, {
      key: "d13aa4f3d43fb5651c0487ccfa456813f69955d2"
    }, this.renderMenuButton(), this.renderMenuItems(), h("slot", {
      key: "b63d187516c766db6a1b1db3df34050fdec9e6ce",
      name: SLOTS.tooltip,
      onSlotchange: this.updateTooltip
    }));
  }
  isValidKey(key, supportedKeys) {
    return !!supportedKeys.find((k) => k === key);
  }
  get el() {
    return this;
  }
  static get watchers() {
    return {
      "expanded": ["expandedHandler"],
      "open": ["openHandler"],
      "activeMenuItemIndex": ["activeMenuItemIndexHandler"]
    };
  }
  static get style() {
    return CalciteActionMenuStyle0;
  }
}, [1, "calcite-action-menu", {
  "appearance": [513],
  "expanded": [516],
  "flipPlacements": [16],
  "label": [1],
  "open": [1540],
  "overlayPositioning": [513, "overlay-positioning"],
  "placement": [513],
  "scale": [513],
  "menuButtonEl": [32],
  "activeMenuItemIndex": [32],
  "setFocus": [64]
}, void 0, {
  "expanded": ["expandedHandler"],
  "open": ["openHandler"],
  "activeMenuItemIndex": ["activeMenuItemIndexHandler"]
}]);
function defineCustomElement5() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-action-menu", "calcite-action", "calcite-icon", "calcite-loader", "calcite-popover"];
  components.forEach((tagName) => {
    switch (tagName) {
      case "calcite-action-menu":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, ActionMenu);
        }
        break;
      case "calcite-action":
        if (!customElements.get(tagName)) {
          defineCustomElement3();
        }
        break;
      case "calcite-icon":
        if (!customElements.get(tagName)) {
          defineCustomElement();
        }
        break;
      case "calcite-loader":
        if (!customElements.get(tagName)) {
          defineCustomElement2();
        }
        break;
      case "calcite-popover":
        if (!customElements.get(tagName)) {
          defineCustomElement4();
        }
        break;
    }
  });
}
defineCustomElement5();

export {
  SLOTS,
  ActionMenu,
  defineCustomElement5 as defineCustomElement
};
/*! Bundled license information:

@esri/calcite-components/dist/components/action-menu.js:
  (*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
   * v2.13.2
   *)
*/
//# sourceMappingURL=chunk-7YMGQ7BX.js.map
