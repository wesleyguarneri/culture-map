import {
  SLOTS,
  defineCustomElement as defineCustomElement5
} from "./chunk-Z22TICSP.js";
import {
  defineCustomElement as defineCustomElement4
} from "./chunk-5DGWLHL7.js";
import {
  defineCustomElement as defineCustomElement3
} from "./chunk-AMGONSU2.js";
import {
  defineCustomElement as defineCustomElement2
} from "./chunk-URKUSNVW.js";
import {
  connectConditionalSlotComponent,
  disconnectConditionalSlotComponent
} from "./chunk-YAVW3H3N.js";
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
import {
  defineCustomElement
} from "./chunk-AX5NQF7U.js";
import {
  slotChangeHasAssignedElement
} from "./chunk-RGUNAV4Z.js";
import {
  H,
  h,
  proxyCustomElement
} from "./chunk-2P72IR2Y.js";
import {
  __async
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@esri/calcite-components/dist/components/action-group.js
var SLOTS2 = {
  menuActions: "menu-actions",
  menuTooltip: "menu-tooltip"
};
var ICONS = {
  menu: "ellipsis"
};
var CSS = {
  container: "container"
};
var actionGroupCss = ':host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host{display:flex;flex-direction:column;padding:0px;background-color:transparent;border-color:var(--calcite-action-group-border-color, var(--calcite-color-border-3));border-style:solid;border-width:0}.container{display:flex;flex-grow:1;flex-direction:column}:host([columns="1"]){--calcite-internal-action-group-columns:1}:host([columns="2"]){--calcite-internal-action-group-columns:2}:host([columns="3"]){--calcite-internal-action-group-columns:3}:host([columns="4"]){--calcite-internal-action-group-columns:4}:host([columns="5"]){--calcite-internal-action-group-columns:5}:host([columns="6"]){--calcite-internal-action-group-columns:6}:host(:first-child){padding-block-start:0px}:host([layout=horizontal]),:host([layout=horizontal]) .container{flex-direction:row}:host([layout=grid]){display:grid}:host([layout=grid]) .container{display:grid;place-content:stretch;background-color:transparent;grid-template-columns:repeat(var(--calcite-action-group-columns, var(--calcite-internal-action-group-columns, 3)), auto);gap:var(--calcite-action-group-gap, 1px);padding:var(--calcite-action-group-gap, 1px)}:host([hidden]){display:none}[hidden]{display:none}';
var CalciteActionGroupStyle0 = actionGroupCss;
var ActionGroup = proxyCustomElement(class ActionGroup2 extends H {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.setMenuOpen = (event) => {
      this.menuOpen = !!event.target.open;
    };
    this.handleMenuActionsSlotChange = (event) => {
      this.hasMenuActions = slotChangeHasAssignedElement(event);
    };
    this.expanded = false;
    this.label = void 0;
    this.layout = "vertical";
    this.columns = void 0;
    this.menuOpen = false;
    this.overlayPositioning = "absolute";
    this.scale = void 0;
    this.menuFlipPlacements = void 0;
    this.menuPlacement = void 0;
    this.messages = void 0;
    this.messageOverrides = void 0;
    this.effectiveLocale = "";
    this.defaultMessages = void 0;
    this.hasMenuActions = false;
  }
  expandedHandler() {
    this.menuOpen = false;
  }
  onMessagesChange() {
  }
  effectiveLocaleChange() {
    updateMessages(this, this.effectiveLocale);
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
      this.el.focus();
    });
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    connectLocalized(this);
    connectMessages(this);
    connectConditionalSlotComponent(this);
  }
  disconnectedCallback() {
    disconnectLocalized(this);
    disconnectMessages(this);
    disconnectConditionalSlotComponent(this);
  }
  componentWillLoad() {
    return __async(this, null, function* () {
      setUpLoadableComponent(this);
      yield setUpMessages(this);
    });
  }
  componentDidLoad() {
    setComponentLoaded(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Component Methods
  //
  // --------------------------------------------------------------------------
  renderMenu() {
    const {
      expanded,
      menuOpen,
      scale,
      layout,
      messages,
      overlayPositioning,
      hasMenuActions,
      menuFlipPlacements,
      menuPlacement
    } = this;
    return h("calcite-action-menu", {
      expanded,
      flipPlacements: menuFlipPlacements ?? (layout === "horizontal" ? ["top", "bottom"] : ["left", "right"]),
      hidden: !hasMenuActions,
      label: messages.more,
      onCalciteActionMenuOpen: this.setMenuOpen,
      open: menuOpen,
      overlayPositioning,
      placement: menuPlacement ?? (layout === "horizontal" ? "bottom-start" : "leading-start"),
      scale
    }, h("calcite-action", {
      icon: ICONS.menu,
      scale,
      slot: SLOTS.trigger,
      text: messages.more,
      textEnabled: expanded
    }), h("slot", {
      name: SLOTS2.menuActions,
      onSlotchange: this.handleMenuActionsSlotChange
    }), h("slot", {
      name: SLOTS2.menuTooltip,
      slot: SLOTS.tooltip
    }));
  }
  render() {
    return h("div", {
      key: "8143606c5745053f15140f34ff5ea375a683325f",
      "aria-label": this.label,
      class: CSS.container,
      role: "group"
    }, h("slot", {
      key: "e8c2821b9ce2e9d0293478989fc31d24f043f9c3"
    }), this.renderMenu());
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
      "messageOverrides": ["onMessagesChange"],
      "effectiveLocale": ["effectiveLocaleChange"]
    };
  }
  static get style() {
    return CalciteActionGroupStyle0;
  }
}, [17, "calcite-action-group", {
  "expanded": [516],
  "label": [1],
  "layout": [513],
  "columns": [514],
  "menuOpen": [1540, "menu-open"],
  "overlayPositioning": [513, "overlay-positioning"],
  "scale": [513],
  "menuFlipPlacements": [16],
  "menuPlacement": [513, "menu-placement"],
  "messages": [1040],
  "messageOverrides": [1040],
  "effectiveLocale": [32],
  "defaultMessages": [32],
  "hasMenuActions": [32],
  "setFocus": [64]
}, void 0, {
  "expanded": ["expandedHandler"],
  "messageOverrides": ["onMessagesChange"],
  "effectiveLocale": ["effectiveLocaleChange"]
}]);
function defineCustomElement6() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-action-group", "calcite-action", "calcite-action-menu", "calcite-icon", "calcite-loader", "calcite-popover"];
  components.forEach((tagName) => {
    switch (tagName) {
      case "calcite-action-group":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, ActionGroup);
        }
        break;
      case "calcite-action":
        if (!customElements.get(tagName)) {
          defineCustomElement3();
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
defineCustomElement6();

export {
  SLOTS2 as SLOTS,
  ActionGroup,
  defineCustomElement6 as defineCustomElement
};
/*! Bundled license information:

@esri/calcite-components/dist/components/action-group.js:
  (*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
   * v2.13.2
   *)
*/
//# sourceMappingURL=chunk-CZEGCNC2.js.map
