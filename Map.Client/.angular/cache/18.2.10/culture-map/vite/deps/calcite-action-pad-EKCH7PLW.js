import {
  ExpandToggle,
  toggleChildActionText
} from "./chunk-RE2XO2SB.js";
import {
  defineCustomElement as defineCustomElement6
} from "./chunk-CZEGCNC2.js";
import {
  defineCustomElement as defineCustomElement5
} from "./chunk-Z22TICSP.js";
import "./chunk-IWGR673M.js";
import {
  defineCustomElement as defineCustomElement4
} from "./chunk-5DGWLHL7.js";
import "./chunk-RXFX2JA3.js";
import "./chunk-WN5DHCGF.js";
import "./chunk-K27J73UB.js";
import "./chunk-67SMQ6CN.js";
import {
  defineCustomElement as defineCustomElement3
} from "./chunk-AMGONSU2.js";
import "./chunk-46GG7UPH.js";
import "./chunk-LY6QK6XQ.js";
import "./chunk-YPWMP2VK.js";
import {
  defineCustomElement as defineCustomElement2
} from "./chunk-URKUSNVW.js";
import {
  connectConditionalSlotComponent,
  disconnectConditionalSlotComponent
} from "./chunk-YAVW3H3N.js";
import "./chunk-BJUGMQT5.js";
import {
  connectMessages,
  disconnectMessages,
  setUpMessages,
  updateMessages
} from "./chunk-XGIY42ZI.js";
import {
  componentFocusable,
  setComponentLoaded,
  setUpLoadableComponent
} from "./chunk-M6DKAVSK.js";
import {
  connectLocalized,
  disconnectLocalized
} from "./chunk-B3F3MSZ2.js";
import "./chunk-EU6DW6GK.js";
import {
  defineCustomElement
} from "./chunk-AX5NQF7U.js";
import {
  createObserver
} from "./chunk-JOYMUIN5.js";
import "./chunk-23E6RT3O.js";
import "./chunk-D25A7Z5T.js";
import {
  slotChangeGetAssignedElements
} from "./chunk-RGUNAV4Z.js";
import "./chunk-RCBGISRX.js";
import {
  H,
  Host,
  createEvent,
  h,
  proxyCustomElement
} from "./chunk-2P72IR2Y.js";
import {
  __async
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@esri/calcite-components/dist/components/calcite-action-pad.js
var CSS = {
  actionGroupEnd: "action-group--end",
  container: "container"
};
var SLOTS = {
  expandTooltip: "expand-tooltip"
};
var actionPadCss = ":host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host{display:block}@keyframes in{0%{opacity:0}100%{opacity:1}}:host{animation:in var(--calcite-internal-animation-timing-slow) ease-in-out;border-radius:var(--calcite-action-pad-corner-radius, 0.125rem);background:transparent}:host([expanded][layout=vertical]) .container{max-inline-size:var(--calcite-action-pad-expanded-max-width, auto)}:host([layout=vertical]) ::slotted(calcite-action-group:not(:last-of-type)){border-block-end-width:1px}.container{display:inline-flex;flex-direction:column;overflow-y:auto;--tw-shadow:0 6px 20px -4px rgba(0, 0, 0, 0.1), 0 4px 12px -2px rgba(0, 0, 0, 0.08);--tw-shadow-colored:0 6px 20px -4px var(--tw-shadow-color), 0 4px 12px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);gap:var(--calcite-action-pad-items-space, 0);border-radius:calc(var(--calcite-action-pad-corner-radius, 0.125rem) * 2);background-color:var(--calcite-action-background-color, var(--calcite-color-foreground-1))}.action-group--bottom{flex-grow:1;justify-content:flex-end;padding-block-end:0px}:host([layout=horizontal]) .container{flex-direction:row}:host([layout=horizontal]) .container .action-group--bottom{padding:0px}:host([layout=horizontal]) .container ::slotted(calcite-action-group:not(:last-of-type)){border-inline-end-width:1px}:host([hidden]){display:none}[hidden]{display:none}";
var CalciteActionPadStyle0 = actionPadCss;
var ActionPad = proxyCustomElement(class ActionPad2 extends H {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteActionPadToggle = createEvent(this, "calciteActionPadToggle", 6);
    this.mutationObserver = createObserver("mutation", () => this.setGroupLayout(Array.from(this.el.querySelectorAll("calcite-action-group"))));
    this.actionMenuOpenHandler = (event) => {
      if (event.target.menuOpen) {
        const composedPath = event.composedPath();
        Array.from(this.el.querySelectorAll("calcite-action-group")).forEach((group) => {
          if (!composedPath.includes(group)) {
            group.menuOpen = false;
          }
        });
      }
    };
    this.toggleExpand = () => {
      this.expanded = !this.expanded;
      this.calciteActionPadToggle.emit();
    };
    this.handleDefaultSlotChange = (event) => {
      const groups = slotChangeGetAssignedElements(event).filter((el) => el?.matches("calcite-action-group"));
      this.setGroupLayout(groups);
    };
    this.handleTooltipSlotChange = (event) => {
      const tooltips = slotChangeGetAssignedElements(event).filter((el) => el?.matches("calcite-tooltip"));
      this.expandTooltip = tooltips[0];
    };
    this.actionsEndGroupLabel = void 0;
    this.expandDisabled = false;
    this.expanded = false;
    this.layout = "vertical";
    this.position = void 0;
    this.scale = void 0;
    this.messages = void 0;
    this.messageOverrides = void 0;
    this.overlayPositioning = "absolute";
    this.expandTooltip = void 0;
    this.effectiveLocale = "";
    this.defaultMessages = void 0;
  }
  expandedHandler(expanded) {
    toggleChildActionText({
      el: this.el,
      expanded
    });
  }
  layoutHandler() {
    this.updateGroups();
  }
  onMessagesChange() {
  }
  effectiveLocaleChange() {
    updateMessages(this, this.effectiveLocale);
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    connectConditionalSlotComponent(this);
    connectLocalized(this);
    connectMessages(this);
    this.mutationObserver?.observe(this.el, {
      childList: true,
      subtree: true
    });
  }
  disconnectedCallback() {
    disconnectLocalized(this);
    disconnectMessages(this);
    disconnectConditionalSlotComponent(this);
    this.mutationObserver?.disconnect();
  }
  componentWillLoad() {
    return __async(this, null, function* () {
      setUpLoadableComponent(this);
      const {
        el,
        expanded
      } = this;
      toggleChildActionText({
        el,
        expanded
      });
      yield setUpMessages(this);
    });
  }
  componentDidLoad() {
    setComponentLoaded(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Methods
  //
  // --------------------------------------------------------------------------
  /**
   * Sets focus on the component's first focusable element.
   */
  setFocus() {
    return __async(this, null, function* () {
      yield componentFocusable(this);
      this.el?.focus();
    });
  }
  updateGroups() {
    this.setGroupLayout(Array.from(this.el.querySelectorAll("calcite-action-group")));
  }
  setGroupLayout(groups) {
    groups.forEach((group) => group.layout = this.layout);
  }
  // --------------------------------------------------------------------------
  //
  //  Component Methods
  //
  // --------------------------------------------------------------------------
  renderBottomActionGroup() {
    const {
      expanded,
      expandDisabled,
      messages,
      el,
      position,
      toggleExpand,
      scale,
      layout,
      actionsEndGroupLabel,
      overlayPositioning
    } = this;
    const expandToggleNode = !expandDisabled ? h(ExpandToggle, {
      collapseLabel: messages.collapseLabel,
      collapseText: messages.collapse,
      el,
      expandLabel: messages.expandLabel,
      expandText: messages.expand,
      expanded,
      position,
      scale,
      toggle: toggleExpand,
      tooltip: this.expandTooltip
    }) : null;
    return expandToggleNode ? h("calcite-action-group", {
      class: CSS.actionGroupEnd,
      label: actionsEndGroupLabel,
      layout,
      overlayPositioning,
      scale
    }, h("slot", {
      name: SLOTS.expandTooltip,
      onSlotchange: this.handleTooltipSlotChange
    }), expandToggleNode) : null;
  }
  render() {
    return h(Host, {
      key: "ca50c5f475d78b92b5347ab912727587420ceea5",
      onCalciteActionMenuOpen: this.actionMenuOpenHandler
    }, h("div", {
      key: "81b26e9b6bd0a04357fe00ef55111c6bb609f4e7",
      class: CSS.container
    }, h("slot", {
      key: "e346dc6cfab0e26cfc694b43063715d7b845ae32",
      onSlotchange: this.handleDefaultSlotChange
    }), this.renderBottomActionGroup()));
  }
  static get delegatesFocus() {
    return true;
  }
  static get assetsDirs() {
    return ["assets"];
  }
  get el() {
    return this;
  }
  static get watchers() {
    return {
      "expanded": ["expandedHandler"],
      "layout": ["layoutHandler"],
      "messageOverrides": ["onMessagesChange"],
      "effectiveLocale": ["effectiveLocaleChange"]
    };
  }
  static get style() {
    return CalciteActionPadStyle0;
  }
}, [17, "calcite-action-pad", {
  "actionsEndGroupLabel": [1, "actions-end-group-label"],
  "expandDisabled": [516, "expand-disabled"],
  "expanded": [1540],
  "layout": [513],
  "position": [513],
  "scale": [513],
  "messages": [1040],
  "messageOverrides": [1040],
  "overlayPositioning": [513, "overlay-positioning"],
  "expandTooltip": [32],
  "effectiveLocale": [32],
  "defaultMessages": [32],
  "setFocus": [64]
}, void 0, {
  "expanded": ["expandedHandler"],
  "layout": ["layoutHandler"],
  "messageOverrides": ["onMessagesChange"],
  "effectiveLocale": ["effectiveLocaleChange"]
}]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-action-pad", "calcite-action", "calcite-action-group", "calcite-action-menu", "calcite-icon", "calcite-loader", "calcite-popover"];
  components.forEach((tagName) => {
    switch (tagName) {
      case "calcite-action-pad":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, ActionPad);
        }
        break;
      case "calcite-action":
        if (!customElements.get(tagName)) {
          defineCustomElement3();
        }
        break;
      case "calcite-action-group":
        if (!customElements.get(tagName)) {
          defineCustomElement6();
        }
        break;
      case "calcite-action-menu":
        if (!customElements.get(tagName)) {
          defineCustomElement5();
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
defineCustomElement$1();
var CalciteActionPad = ActionPad;
var defineCustomElement7 = defineCustomElement$1;
export {
  CalciteActionPad,
  defineCustomElement7 as defineCustomElement
};
/*! Bundled license information:

@esri/calcite-components/dist/components/calcite-action-pad.js:
  (*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
   * v2.13.2
   *)
*/
//# sourceMappingURL=calcite-action-pad-EKCH7PLW.js.map
