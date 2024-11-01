import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  InteractiveContainer,
  updateHostInteraction
} from "./chunk-H4DSEZHF.js";
import {
  connectMessages,
  disconnectMessages,
  setUpMessages,
  updateMessages
} from "./chunk-JQGPN2VA.js";
import {
  connectLocalized,
  disconnectLocalized
} from "./chunk-G3GRZSKY.js";
import {
  defineCustomElement
} from "./chunk-JTD7ODRH.js";
import {
  createObserver
} from "./chunk-OOEWT25O.js";
import {
  isBrowser
} from "./chunk-7JIACICA.js";
import {
  getIconScale
} from "./chunk-SJNQ3G2B.js";
import {
  getElementDir,
  guid,
  nodeListToArray,
  toAriaBoolean
} from "./chunk-AHYZNZSK.js";
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

// ../../../node_modules/@esri/calcite-components/dist/components/tab-title.js
var CSS = {
  closeButton: "close-button",
  container: "container",
  containerBottom: "container--bottom",
  content: "content",
  contentHasText: "content--has-text",
  iconEnd: "icon-end",
  iconPresent: "icon-present",
  iconStart: "icon-start",
  titleIcon: "calcite-tab-title--icon",
  scale: (scale) => `scale-${scale}`,
  selectedIndicator: "selected-indicator"
};
var ICONS = {
  close: "x"
};
var tabTitleCss = ':host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:block;outline:2px solid transparent;outline-offset:2px;margin-inline-start:0px}:host([layout=inline]){flex:0 1 auto}:host([layout=center]){flex:1 1 auto}.content{position:relative;margin-block-end:0.125rem;box-sizing:border-box;display:flex;block-size:100%;align-items:center;justify-content:center}.scale-s .content{padding-block:0.25rem;font-size:var(--calcite-font-size--2);line-height:1rem}.scale-s .close-button{inline-size:1.25rem}.scale-m .content{padding-block:0.5rem;font-size:var(--calcite-font-size--1);line-height:1rem}.scale-m .close-button{inline-size:1.75rem}.scale-l .content{padding-block:0.625rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}.scale-l .close-button{inline-size:2rem}:host([closable]) .content{border-block-end-color:transparent}:host([layout=inline]) .content,:host([layout=center]) .content{padding-inline:0.25rem}:host([layout=center]) .scale-s,:host([layout=center]) .scale-m,:host([layout=center]) .scale-l{margin-block:0px;justify-content:center;text-align:center}:host([layout=center]) .scale-s .content,:host([layout=center]) .scale-m .content,:host([layout=center]) .scale-l .content{flex:1 1 auto;flex-grow:1}.container{position:relative;box-sizing:border-box;display:flex;block-size:100%;inline-size:100%;cursor:pointer;align-content:center;justify-content:space-between;padding-inline:0px;font-size:var(--calcite-font-size--1);line-height:1rem;color:var(--calcite-color-text-3);outline-color:transparent;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.selected-indicator{position:absolute;display:block;block-size:0.125rem;inline-size:100%;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;inset-block-end:0;inset-inline-start:0;inset-inline-end:0;inline-size:100%}.container--bottom .selected-indicator{inset-block-end:unset;inset-block-start:0}:host([bordered]) .selected-indicator{inset-block-start:0;inset-block-end:unset;inset-inline-start:-1px;inset-inline-end:0;inline-size:calc(100% + var(--calcite-spacing-base))}:host([bordered]) .container:not(.container--bottom){border-block-end:1px solid transparent}:host([bordered]:not([selected]):hover) .container:not(.container--bottom){border-block-end:1px solid var(--calcite-color-border-1)}:host([bordered]:not([selected]):hover:not(:focus)) .selected-indicator{background-color:var(--calcite-color-foreground-2)}:host([bordered]:not([selected]):hover:not(:focus)) .container:not(.container--bottom) .selected-indicator{box-shadow:inset 0 1px var(--calcite-color-border-1)}:host([bordered]:not([selected]):hover:not(:focus)) .container.container--bottom .selected-indicator{box-shadow:inset 0 -1px var(--calcite-color-border-1)}:host([bordered][selected]) .container::after{position:absolute;display:block;block-size:0.125rem;inline-size:100%;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;inset-block-end:-1px;inset-inline-start:0;inset-inline-end:0;inline-size:100%;background:var(--calcite-color-foreground-1);content:""}:host([bordered][selected]) .container.container--bottom::after{inset-block-start:-1px}:host([bordered][selected]:hover) .container::after{background:var(--calcite-color-foreground-2)}:host([bordered][selected]:focus) .container::after{background:transparent}:host([bordered]) .container--bottom .selected-indicator{inset-block-start:unset;inset-block-end:0}:host([selected]) .selected-indicator,:host([selected]:hover) .selected-indicator{background-color:var(--calcite-color-brand)}:host(:hover) .selected-indicator{background-color:var(--calcite-color-border-3)}:host(:focus) .selected-indicator,:host(:active) .selected-indicator{background-color:var(--calcite-color-brand)}@media (forced-colors: active){.selected-indicator{background-color:highlight}}:host([closed]){display:none}:host([selected]) .container{border-color:transparent;color:var(--calcite-color-text-1)}:host(:focus) .container{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}:host(:focus) .container:focus-within{outline-color:transparent}:host(:active) a,:host(:focus) a,:host(:hover) a{border-color:var(--calcite-color-border-2);color:var(--calcite-color-text-1);text-decoration-line:none}:host([disabled]) .container{pointer-events:none;opacity:0.5}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.calcite-tab-title--icon{position:relative;margin:0px;display:inline-flex;align-self:center}.calcite-tab-title--icon svg{transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.content--has-text{padding:0.25rem}.content--has-text .calcite-tab-title--icon.icon-start{margin-inline-end:var(--calcite-spacing-sm)}.content--has-text .calcite-tab-title--icon.icon-end{margin-inline-start:var(--calcite-spacing-sm)}.close-button{display:flex;block-size:100%;cursor:pointer;appearance:none;align-content:center;align-items:center;justify-content:center;align-self:center;border-style:none;background-color:transparent;color:var(--calcite-color-text-3);outline-color:transparent;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;margin-inline-start:var(--calcite-spacing-sm);margin-inline-end:var(--calcite-spacing-px);block-size:calc(100% - var(--calcite-spacing-xxs))}.close-button:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand))}.close-button:focus,.close-button:hover{color:var(--calcite-color-text-1);background-color:var(--calcite-color-foreground-3)}.close-button:active{color:var(--calcite-color-text-1);background-color:var(--calcite-color-foreground-3)}.close-button calcite-icon{color:inherit}:host([icon-start][icon-end]) .calcite-tab-title--icon:first-child{margin-inline-end:var(--calcite-spacing-sm)}:host([bordered]) .container:not(.container--bottom) .close-button{block-size:calc(100% - var(--calcite-spacing-px));margin-block-start:-1px}:host([bordered]) .container .close-button calcite-icon{margin-block-start:var(--calcite-spacing-px)}:host([bordered]) .container .close-button:focus,:host([bordered]) .container .close-button:hover,:host([bordered]) .container .close-button:active{box-shadow:0 2px 0 0 var(--calcite-color-foreground-3)}:host([bordered]) .container.container--bottom .close-button{box-shadow:0 -2px 0 0 transparent}:host([bordered]) .container.container--bottom .close-button calcite-icon{margin-block-end:var(--calcite-spacing-px)}:host([bordered]) .container.container--bottom .close-button:focus,:host([bordered]) .container.container--bottom .close-button:hover,:host([bordered]) .container.container--bottom .close-button:active{box-shadow:0 -2px 0 0 var(--calcite-color-foreground-3)}:host([bordered][selected]){box-shadow:inset 0 -1px var(--calcite-color-foreground-1)}:host([bordered]:not([selected])) .container .close-button{box-shadow:0 2px 0 0 transparent}:host([bordered]:hover) .container{background-color:var(--calcite-color-foreground-2)}:host([bordered]) .container{border-inline:var(--calcite-spacing-px) solid transparent}:host([selected][bordered]) .container{border-inline-color:var(--calcite-color-border-1)}:host([layout=inline][bordered]) .scale-m .content,:host([layout=center][bordered]) .scale-m .content{padding-inline:0.75rem}:host([layout=inline][bordered]) .scale-s .content,:host([layout=center][bordered]) .scale-s .content{padding-inline:0.5rem}:host([layout=inline][bordered]) .scale-l .content,:host([layout=center][bordered]) .scale-l .content{padding-inline:1rem}:host([layout=inline][closable]) .scale-s .content,:host([layout=inline][closable]) .scale-m .content,:host([layout=inline][closable]) .scale-l .content{padding-inline-end:0}@media (forced-colors: active){:host{outline-width:0;outline-offset:0}:host(:focus) .container{outline-color:highlight}:host([bordered]) .container{border-block-end-style:solid}:host([bordered]) .container--bottom{border-block-start-style:solid}:host([bordered][selected]) .container{border-block-end-style:none}:host([bordered][selected]) .container--bottom{border-block-start-style:none}.close-button{z-index:var(--calcite-z-index)}}:host([hidden]){display:none}[hidden]{display:none}';
var CalciteTabTitleStyle0 = tabTitleCss;
var TabTitle = proxyCustomElement(class TabTitle2 extends H {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteTabsActivate = createEvent(this, "calciteTabsActivate", 6);
    this.calciteInternalTabsActivate = createEvent(this, "calciteInternalTabsActivate", 6);
    this.calciteTabsClose = createEvent(this, "calciteTabsClose", 6);
    this.calciteInternalTabsClose = createEvent(this, "calciteInternalTabsClose", 6);
    this.calciteInternalTabsFocusNext = createEvent(this, "calciteInternalTabsFocusNext", 6);
    this.calciteInternalTabsFocusPrevious = createEvent(this, "calciteInternalTabsFocusPrevious", 6);
    this.calciteInternalTabsFocusFirst = createEvent(this, "calciteInternalTabsFocusFirst", 6);
    this.calciteInternalTabsFocusLast = createEvent(this, "calciteInternalTabsFocusLast", 6);
    this.calciteInternalTabTitleRegister = createEvent(this, "calciteInternalTabTitleRegister", 6);
    this.calciteInternalTabIconChanged = createEvent(this, "calciteInternalTabIconChanged", 6);
    this.closeClickHandler = () => {
      this.closeTabTitleAndNotify();
    };
    this.mutationObserver = createObserver("mutation", () => this.updateHasText());
    this.resizeObserver = createObserver("resize", () => {
      this.calciteInternalTabIconChanged.emit();
    });
    this.guid = `calcite-tab-title-${guid()}`;
    this.selected = false;
    this.closable = false;
    this.closed = false;
    this.disabled = false;
    this.iconEnd = void 0;
    this.iconFlipRtl = void 0;
    this.iconStart = void 0;
    this.layout = void 0;
    this.position = "top";
    this.scale = "m";
    this.bordered = false;
    this.tab = void 0;
    this.messages = void 0;
    this.messageOverrides = void 0;
    this.controls = void 0;
    this.defaultMessages = void 0;
    this.effectiveLocale = void 0;
    this.hasText = false;
  }
  selectedHandler() {
    if (this.selected) {
      this.activateTab(false);
    }
  }
  onMessagesChange() {
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    connectLocalized(this);
    connectMessages(this);
    this.setupTextContentObserver();
    this.parentTabsEl = this.el.closest("calcite-tabs");
  }
  disconnectedCallback() {
    this.mutationObserver?.disconnect();
    document.body?.dispatchEvent(new CustomEvent("calciteTabTitleUnregister", {
      detail: this.el
    }));
    this.resizeObserver?.disconnect();
    disconnectLocalized(this);
    disconnectMessages(this);
  }
  componentWillLoad() {
    return __async(this, null, function* () {
      yield setUpMessages(this);
      if (isBrowser()) {
        this.updateHasText();
      }
      if (this.tab && this.selected) {
        this.activateTab(false);
      }
    });
  }
  componentWillRender() {
    if (this.parentTabsEl) {
      this.layout = this.parentTabsEl.layout;
      this.bordered = this.parentTabsEl.bordered;
    }
  }
  render() {
    const {
      el,
      closed
    } = this;
    const id = el.id || this.guid;
    const iconStartEl = h("calcite-icon", {
      key: "367d0a3590f1b47a36fcef27a4c361b2b738769a",
      class: {
        [CSS.titleIcon]: true,
        [CSS.iconStart]: true
      },
      flipRtl: this.iconFlipRtl === "start" || this.iconFlipRtl === "both",
      icon: this.iconStart,
      scale: getIconScale(this.scale)
    });
    const iconEndEl = h("calcite-icon", {
      key: "d41dab345260f907ad3b00538117c576856672fd",
      class: {
        [CSS.titleIcon]: true,
        [CSS.iconEnd]: true
      },
      flipRtl: this.iconFlipRtl === "end" || this.iconFlipRtl === "both",
      icon: this.iconEnd,
      scale: getIconScale(this.scale)
    });
    return h(Host, {
      key: "f5f5339ebcead5f63154d4b8f562782d20e30b06",
      "aria-controls": this.controls,
      "aria-selected": toAriaBoolean(this.selected),
      id,
      role: "tab",
      tabIndex: this.selected && !this.disabled ? 0 : -1
    }, h(InteractiveContainer, {
      key: "0115c7e0367be91f3a9014243fb99cecd48d5f79",
      disabled: this.disabled
    }, h("div", {
      key: "7303b10302cfc93c03386036d98aa46a6b74afa7",
      class: {
        [CSS.container]: true,
        [CSS.containerBottom]: this.position === "bottom",
        [CSS.iconPresent]: !!this.iconStart || !!this.iconEnd,
        [CSS.scale(this.scale)]: true
      },
      hidden: closed,
      ref: (el2) => this.resizeObserver?.observe(el2)
    }, h("div", {
      key: "af603e50b1a853f3e4ca35357ae7778ca9bdaafb",
      class: {
        [CSS.content]: true,
        [CSS.contentHasText]: this.hasText
      }
    }, this.iconStart ? iconStartEl : null, h("slot", {
      key: "a650492336b0f78f11c0d534351b0ab570dd1db8"
    }), this.iconEnd ? iconEndEl : null), this.renderCloseButton(), h("div", {
      key: "8d8a0438c867cdf0c2642b9a9bc7ce697aabb871",
      class: CSS.selectedIndicator
    }))));
  }
  renderCloseButton() {
    const {
      closable,
      messages
    } = this;
    return closable ? h("button", {
      "aria-label": messages.close,
      class: CSS.closeButton,
      disabled: false,
      key: CSS.closeButton,
      onClick: this.closeClickHandler,
      ref: (el) => this.closeButtonEl = el,
      title: messages.close,
      type: "button"
    }, h("calcite-icon", {
      icon: ICONS.close,
      scale: getIconScale(this.scale)
    })) : null;
  }
  componentDidLoad() {
    return __async(this, null, function* () {
      this.calciteInternalTabTitleRegister.emit(yield this.getTabIdentifier());
    });
  }
  componentDidRender() {
    updateHostInteraction(this);
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  internalTabChangeHandler(event) {
    const targetTabsEl = event.composedPath().find((el) => el.tagName === "CALCITE-TABS");
    if (targetTabsEl !== this.parentTabsEl) {
      return;
    }
    if (this.tab) {
      this.selected = this.tab === event.detail.tab;
    } else {
      this.getTabIndex().then((index) => {
        this.selected = index === event.detail.tab;
      });
    }
    event.stopPropagation();
  }
  onClick() {
    this.activateTab();
  }
  keyDownHandler(event) {
    switch (event.key) {
      case " ":
      case "Enter":
        if (!event.composedPath().includes(this.closeButtonEl)) {
          this.activateTab();
          event.preventDefault();
        }
        break;
      case "ArrowRight":
        event.preventDefault();
        if (getElementDir(this.el) === "ltr") {
          this.calciteInternalTabsFocusNext.emit();
        } else {
          this.calciteInternalTabsFocusPrevious.emit();
        }
        break;
      case "ArrowLeft":
        event.preventDefault();
        if (getElementDir(this.el) === "ltr") {
          this.calciteInternalTabsFocusPrevious.emit();
        } else {
          this.calciteInternalTabsFocusNext.emit();
        }
        break;
      case "Home":
        event.preventDefault();
        this.calciteInternalTabsFocusFirst.emit();
        break;
      case "End":
        event.preventDefault();
        this.calciteInternalTabsFocusLast.emit();
        break;
    }
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /**
   * Returns the index of the title within the `calcite-tab-nav`.
   */
  getTabIndex() {
    return __async(this, null, function* () {
      return Array.prototype.indexOf.call(nodeListToArray(this.el.parentElement.children).filter((el) => el.matches("calcite-tab-title")), this.el);
    });
  }
  /**
   * @internal
   */
  getTabIdentifier() {
    return __async(this, null, function* () {
      return this.tab ? this.tab : this.getTabIndex();
    });
  }
  /**
   * @param tabIds
   * @param titleIds
   * @internal
   */
  updateAriaInfo() {
    return __async(this, arguments, function* (tabIds = [], titleIds = []) {
      this.controls = tabIds[titleIds.indexOf(this.el.id)] || null;
    });
  }
  /**
   * This activates a tab in order for it and its associated tab-title be selected.
   *
   * @param userTriggered - when `true`, user-interaction events will be emitted in addition to internal events
   * @internal
   */
  activateTab(userTriggered = true) {
    return __async(this, null, function* () {
      if (this.disabled || this.closed) {
        return;
      }
      const payload = {
        tab: this.tab
      };
      this.calciteInternalTabsActivate.emit(payload);
      if (userTriggered) {
        requestAnimationFrame(() => this.calciteTabsActivate.emit());
      }
    });
  }
  effectiveLocaleChange() {
    updateMessages(this, this.effectiveLocale);
  }
  updateHasText() {
    this.hasText = this.el.textContent.trim().length > 0;
  }
  setupTextContentObserver() {
    this.mutationObserver?.observe(this.el, {
      childList: true,
      subtree: true
    });
  }
  closeTabTitleAndNotify() {
    this.closed = true;
    this.calciteInternalTabsClose.emit({
      tab: this.tab
    });
    this.calciteTabsClose.emit();
  }
  static get assetsDirs() {
    return ["assets"];
  }
  get el() {
    return this;
  }
  static get watchers() {
    return {
      "selected": ["selectedHandler"],
      "messageOverrides": ["onMessagesChange"],
      "effectiveLocale": ["effectiveLocaleChange"]
    };
  }
  static get style() {
    return CalciteTabTitleStyle0;
  }
}, [1, "calcite-tab-title", {
  "selected": [1540],
  "closable": [516],
  "closed": [1540],
  "disabled": [516],
  "iconEnd": [513, "icon-end"],
  "iconFlipRtl": [513, "icon-flip-rtl"],
  "iconStart": [513, "icon-start"],
  "layout": [1537],
  "position": [1],
  "scale": [1],
  "bordered": [1540],
  "tab": [513],
  "messages": [1040],
  "messageOverrides": [1040],
  "controls": [32],
  "defaultMessages": [32],
  "effectiveLocale": [32],
  "hasText": [32],
  "getTabIndex": [64],
  "getTabIdentifier": [64],
  "updateAriaInfo": [64],
  "activateTab": [64]
}, [[16, "calciteInternalTabChange", "internalTabChangeHandler"], [0, "click", "onClick"], [0, "keydown", "keyDownHandler"]], {
  "selected": ["selectedHandler"],
  "messageOverrides": ["onMessagesChange"],
  "effectiveLocale": ["effectiveLocaleChange"]
}]);
function defineCustomElement2() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-tab-title", "calcite-icon"];
  components.forEach((tagName) => {
    switch (tagName) {
      case "calcite-tab-title":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, TabTitle);
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
defineCustomElement2();

export {
  TabTitle,
  defineCustomElement2 as defineCustomElement
};
/*! Bundled license information:

@esri/calcite-components/dist/components/tab-title.js:
  (*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
   * v2.13.2
   *)
*/
//# sourceMappingURL=chunk-26E54PTL.js.map
