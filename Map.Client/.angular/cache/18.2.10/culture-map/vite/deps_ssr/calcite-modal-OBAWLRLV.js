import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  activateFocusTrap,
  connectFocusTrap,
  deactivateFocusTrap,
  updateFocusTrapElements
} from "./chunk-IZRKG5Z7.js";
import {
  defineCustomElement as defineCustomElement3
} from "./chunk-CVW2ISFY.js";
import {
  connectConditionalSlotComponent,
  disconnectConditionalSlotComponent
} from "./chunk-JCMR2LM7.js";
import {
  onToggleOpenCloseComponent
} from "./chunk-XKIWE4VL.js";
import {
  logLevel
} from "./chunk-L4CMR4WM.js";
import {
  defineCustomElement as defineCustomElement2
} from "./chunk-5S5OSPDN.js";
import {
  connectMessages,
  disconnectMessages,
  setUpMessages,
  updateMessages
} from "./chunk-JQGPN2VA.js";
import {
  componentFocusable,
  setComponentLoaded,
  setUpLoadableComponent
} from "./chunk-3LOI6Q5C.js";
import {
  connectLocalized,
  disconnectLocalized
} from "./chunk-G3GRZSKY.js";
import "./chunk-HCYVIRBF.js";
import {
  defineCustomElement
} from "./chunk-JTD7ODRH.js";
import {
  createObserver
} from "./chunk-OOEWT25O.js";
import "./chunk-7JIACICA.js";
import {
  componentOnReady,
  getIconScale
} from "./chunk-SJNQ3G2B.js";
import {
  ensureId,
  focusFirstTabbable,
  getSlotted,
  slotChangeHasAssignedElement
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

// ../../../node_modules/@esri/calcite-components/dist/components/logger.js
var loggedDeprecations = /* @__PURE__ */ new Set();
var logLevels = {
  trace: 0,
  debug: 1,
  info: 2,
  warn: 4,
  error: 8,
  off: 10
};
function willLog(level) {
  return logLevels[level] >= logLevels[logLevel];
}
function forwardToConsole(level, ...data) {
  if (!willLog(level)) {
    return;
  }
  const badgeTemplate = "%ccalcite";
  const badgeStyle = "background: #007AC2; color: #fff; border-radius: 4px; padding: 2px 4px;";
  console[level].call(this, badgeTemplate, badgeStyle, ...data);
}
var listFormatter;
var logger = {
  debug: (message) => forwardToConsole("debug", message),
  info: (message) => forwardToConsole("info", message),
  warn: (message) => forwardToConsole("warn", message),
  error: (message) => forwardToConsole("error", message),
  trace: (message) => forwardToConsole("trace", message),
  deprecated
};
function deprecated(context, {
  component,
  name,
  suggested,
  removalVersion
}) {
  const key = `${context}:${context === "component" ? "" : component}${name}`;
  if (loggedDeprecations.has(key)) {
    return;
  }
  loggedDeprecations.add(key);
  const multiSuggestions = Array.isArray(suggested);
  if (multiSuggestions && !listFormatter) {
    listFormatter = new Intl.ListFormat("en", {
      style: "long",
      type: "disjunction"
    });
  }
  const message = `[${name}] ${context} is deprecated and will be removed in ${removalVersion === "future" ? `a future version` : `v${removalVersion}`}.${suggested ? ` Use ${multiSuggestions ? listFormatter.format(suggested.map((suggestion) => `"${suggestion}"`)) : `"${suggested}"`} instead.` : ""}`;
  forwardToConsole("warn", message);
}

// ../../../node_modules/@esri/calcite-components/dist/components/calcite-modal.js
var CSS = {
  modal: "modal",
  title: "title",
  header: "header",
  footer: "footer",
  scrim: "scrim",
  back: "back",
  close: "close",
  secondary: "secondary",
  primary: "primary",
  container: "container",
  containerOpen: "container--open",
  containerEmbedded: "container--embedded",
  content: "content",
  contentNoFooter: "content--no-footer",
  contentBottom: "content-bottom",
  contentTop: "content-top",
  // these classes help apply the animation in phases to only set transform on open/close
  // this helps avoid a positioning issue for any floating-ui-owning children
  openingIdle: "modal--opening-idle",
  openingActive: "modal--opening-active",
  closingIdle: "modal--closing-idle",
  closingActive: "modal--closing-active"
};
var ICONS = {
  close: "x"
};
var SLOTS = {
  content: "content",
  contentBottom: "content-bottom",
  contentTop: "content-top",
  header: "header",
  back: "back",
  secondary: "secondary",
  primary: "primary"
};
var modalCss = ":host{--calcite-modal-scrim-background:rgba(0, 0, 0, 0.85);position:absolute;inset:0px;z-index:var(--calcite-z-index-overlay);display:flex;opacity:0;visibility:hidden !important;transition:visibility 0ms linear var(--calcite-internal-animation-timing-slow), opacity var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88);--calcite-modal-scrim-background-internal:rgba(0, 0, 0, 0.85)}.content-top[hidden],.content-bottom[hidden]{display:none}.container{position:fixed;inset:0px;z-index:var(--calcite-z-index-overlay);display:flex;align-items:center;justify-content:center;overflow-y:hidden;color:var(--calcite-color-text-2);opacity:0;visibility:hidden !important;transition:visibility 0ms linear var(--calcite-internal-animation-timing-slow), opacity var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88)}:host([scale=s]){--calcite-modal-padding-internal:0.75rem;--calcite-modal-padding-large-internal:1rem;--calcite-modal-title-text-internal:var(--calcite-font-size-1);--calcite-modal-content-text-internal:var(--calcite-font-size--1)}:host([scale=m]){--calcite-modal-padding-internal:1rem;--calcite-modal-padding-large-internal:1.25rem;--calcite-modal-title-text-internal:var(--calcite-font-size-2);--calcite-modal-content-text-internal:var(--calcite-font-size-0)}:host([scale=l]){--calcite-modal-padding-internal:1.25rem;--calcite-modal-padding-large-internal:1.5rem;--calcite-modal-title-text-internal:var(--calcite-font-size-3);--calcite-modal-content-text-internal:var(--calcite-font-size-1)}.scrim{--calcite-scrim-background:var(--calcite-modal-scrim-background, var(--calcite-color-transparent-scrim));position:fixed;inset:0px;display:flex;overflow-y:hidden}.modal{pointer-events:none;z-index:var(--calcite-z-index-modal);float:none;margin:1.5rem;box-sizing:border-box;display:flex;inline-size:100%;flex-direction:column;overflow:hidden;border-radius:0.25rem;background-color:var(--calcite-color-foreground-1);opacity:0;--tw-shadow:0 2px 12px -4px rgba(0, 0, 0, 0.2), 0 2px 4px -2px rgba(0, 0, 0, 0.16);--tw-shadow-colored:0 2px 12px -4px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);-webkit-overflow-scrolling:touch;visibility:hidden;transition:transform var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), visibility 0ms linear var(--calcite-internal-animation-timing-slow), opacity var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88);--calcite-modal-hidden-position:translate3d(0, 20px, 0);--calcite-modal-shown-position:translate3d(0, 0, 0)}.modal--opening-idle{transform:var(--calcite-modal-hidden-position)}.modal--opening-active{transform:var(--calcite-modal-shown-position)}.modal--closing-idle{transform:var(--calcite-modal-shown-position)}.modal--closing-active{transform:var(--calcite-modal-hidden-position)}:host([opened]){opacity:1;visibility:visible !important;transition-delay:0ms}.container--open{opacity:1;visibility:visible !important;transition-delay:0ms}.container--open .modal{pointer-events:auto;visibility:visible;opacity:1;transition:transform var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), visibility 0ms linear, opacity var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), max-inline-size var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), max-block-size var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88);transition-delay:0ms}.header{z-index:var(--calcite-z-index-header);display:flex;min-inline-size:0px;max-inline-size:100%;border-start-start-radius:0.25rem;border-start-end-radius:0.25rem;border-width:0px;border-block-end-width:1px;border-style:solid;border-color:var(--calcite-color-border-3);background-color:var(--calcite-color-foreground-1);flex:0 0 auto}.close{order:2;margin:0px;cursor:pointer;appearance:none;border-style:none;background-color:transparent;color:var(--calcite-color-text-3);outline-color:transparent;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;padding-block:var(--calcite-modal-padding-internal);padding-inline:var(--calcite-modal-padding-internal);flex:0 0 auto}.close calcite-icon{pointer-events:none;vertical-align:-2px}.close:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}.close:hover,.close:focus,.close:active{background-color:var(--calcite-color-foreground-2);color:var(--calcite-color-text-1)}.title{order:1;display:flex;min-inline-size:0px;align-items:center;flex:1 1 auto;padding-block:var(--calcite-modal-padding-internal);padding-inline:var(--calcite-modal-padding-large-internal)}slot[name=header]::slotted(*),*::slotted([slot=header]){margin:0px;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-color-text-1);font-size:var(--calcite-modal-title-text-internal)}.content{position:relative;box-sizing:border-box;display:block;block-size:100%;overflow:auto;padding:0px;background-color:var(--calcite-modal-content-background, var(--calcite-color-foreground-1));max-block-size:100%;padding:var(--calcite-modal-content-padding, var(--calcite-modal-padding-internal))}.content-top,.content-bottom{z-index:var(--calcite-z-index-header);display:flex;border-width:0px;border-style:solid;border-color:var(--calcite-color-border-3);background-color:var(--calcite-color-foreground-1);flex:0 0 auto;padding:var(--calcite-modal-padding-internal)}.content-top{min-inline-size:0px;max-inline-size:100%;border-block-end-width:1px}.content-bottom{margin-block-start:auto;box-sizing:border-box;inline-size:100%;justify-content:space-between;border-block-start-width:1px}.content-top:not(.header~.content-top){border-start-start-radius:0.25rem;border-start-end-radius:0.25rem}.content-bottom:not(.content-bottom~.footer),.content--no-footer{border-end-end-radius:0.25rem;border-end-start-radius:0.25rem}slot[name=content]::slotted(*),*::slotted([slot=content]){font-size:var(--calcite-modal-context-text-internal)}.footer{z-index:var(--calcite-z-index-header);margin-block-start:auto;box-sizing:border-box;display:flex;inline-size:100%;justify-content:space-between;border-end-end-radius:0.25rem;border-end-start-radius:0.25rem;border-width:0px;border-block-start-width:1px;border-style:solid;border-color:var(--calcite-color-border-3);background-color:var(--calcite-color-foreground-1);flex:0 0 auto;padding-block:var(--calcite-modal-padding-internal);padding-inline:var(--calcite-modal-padding-large-internal)}.footer--hide-back .back,.footer--hide-secondary .secondary{display:none}.back{display:block;margin-inline-end:auto}.secondary{margin-inline:0.25rem;display:block}slot[name=primary]{display:block}:host([width=small]) .modal{inline-size:auto}:host([width-scale=s]) .modal{max-block-size:100%;max-inline-size:100%;inline-size:var(--calcite-modal-width, 32rem);block-size:var(--calcite-modal-height, auto)}@media screen and (max-width: 35rem){:host([width-scale=s]) .modal{margin:0px;block-size:100%;max-block-size:100%;inline-size:100%;max-inline-size:100%}:host([width-scale=s]) .content{flex:1 1 auto;max-block-size:unset}:host([width-scale=s][docked]) .container{align-items:flex-end}}:host([width-scale=m]) .modal{max-block-size:100%;max-inline-size:100%;inline-size:var(--calcite-modal-width, 48rem);block-size:var(--calcite-modal-height, auto)}@media screen and (max-width: 51rem){:host([width-scale=m]) .modal{margin:0px;block-size:100%;max-block-size:100%;inline-size:100%;max-inline-size:100%}:host([width-scale=m]) .content{flex:1 1 auto;max-block-size:unset}:host([width-scale=m][docked]) .container{align-items:flex-end}}:host([width-scale=l]) .modal{max-block-size:100%;max-inline-size:100%;inline-size:var(--calcite-modal-width, 94rem);block-size:var(--calcite-modal-height, auto)}@media screen and (max-width: 97rem){:host([width-scale=l]) .modal{margin:0px;block-size:100%;max-block-size:100%;inline-size:100%;max-inline-size:100%}:host([width-scale=l]) .content{flex:1 1 auto;max-block-size:unset}:host([width-scale=l][docked]) .container{align-items:flex-end}}:host([fullscreen]) .modal{margin:0px;block-size:100%;max-block-size:100%;inline-size:100%;max-inline-size:100%;border-radius:0px;--calcite-modal-hidden-position:translate3D(0, 20px, 0) scale(0.95);--calcite-modal-shown-position:translate3D(0, 0, 0) scale(1)}:host([fullscreen]) .content{max-block-size:100%;flex:1 1 auto}:host([opened][fullscreen]) .header,:host([opened][fullscreen]) .footer,:host([opened][fullscreen]) .content-top,:host([opened][fullscreen]) .content-bottom{border-radius:0}:host([docked]) .modal{block-size:var(--calcite-modal-height, auto)}:host([docked]) .content{block-size:auto;flex:1 1 auto}:host([kind=brand]) .modal{border-color:var(--calcite-color-brand)}:host([kind=danger]) .modal{border-color:var(--calcite-color-status-danger)}:host([kind=info]) .modal{border-color:var(--calcite-color-status-info)}:host([kind=success]) .modal{border-color:var(--calcite-color-status-success)}:host([kind=warning]) .modal{border-color:var(--calcite-color-status-warning)}:host([kind=brand]) .modal,:host([kind=danger]) .modal,:host([kind=info]) .modal,:host([kind=success]) .modal,:host([kind=warning]) .modal{border-width:0px;border-block-start-width:4px;border-style:solid}:host([kind=brand]) .header,:host([kind=brand]) .content-top,:host([kind=danger]) .header,:host([kind=danger]) .content-top,:host([kind=info]) .header,:host([kind=info]) .content-top,:host([kind=success]) .header,:host([kind=success]) .content-top,:host([kind=warning]) .header,:host([kind=warning]) .content-top{border-radius:0.25rem;border-end-end-radius:0px;border-end-start-radius:0px}@media screen and (max-width: 860px){* slot[name=header]::slotted(content-top),* content-top::slotted([slot=header]){font-size:var(--calcite-font-size-1)}.footer,.content-bottom{position:sticky;inset-block-end:0px}}@media screen and (max-width: 480px){.footer,.content-bottom{flex-direction:column}.back,.secondary{margin:0px;margin-block-end:0.25rem}}.container--embedded{position:absolute;pointer-events:auto}.container--embedded calcite-scrim{position:absolute}:host([hidden]){display:none}[hidden]{display:none}";
var CalciteModalStyle0 = modalCss;
var totalOpenModals = 0;
var initialDocumentOverflowStyle = "";
logger.deprecated("component", {
  name: "modal",
  removalVersion: 4,
  suggested: "dialog"
});
var Modal = proxyCustomElement(class Modal2 extends H {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteModalBeforeClose = createEvent(this, "calciteModalBeforeClose", 6);
    this.calciteModalClose = createEvent(this, "calciteModalClose", 6);
    this.calciteModalBeforeOpen = createEvent(this, "calciteModalBeforeOpen", 6);
    this.calciteModalOpen = createEvent(this, "calciteModalOpen", 6);
    this.ignoreOpenChange = false;
    this.mutationObserver = createObserver("mutation", () => this.handleMutationObserver());
    this.cssVarObserver = createObserver("mutation", () => {
      this.updateSizeCssVars();
    });
    this.openTransitionProp = "opacity";
    this.setTransitionEl = (el) => {
      this.transitionEl = el;
    };
    this.openEnd = () => {
      this.setFocus();
      this.el.removeEventListener("calciteModalOpen", this.openEnd);
    };
    this.handleCloseClick = () => {
      this.open = false;
    };
    this.handleOutsideClose = () => {
      if (this.outsideCloseDisabled) {
        return;
      }
      this.open = false;
    };
    this.closeModal = () => __async(this, null, function* () {
      if (this.beforeClose) {
        try {
          yield this.beforeClose(this.el);
        } catch (_error) {
          requestAnimationFrame(() => {
            this.ignoreOpenChange = true;
            this.open = true;
            this.ignoreOpenChange = false;
          });
          return;
        }
      }
      totalOpenModals--;
      this.opened = false;
      this.removeOverflowHiddenClass();
    });
    this.handleMutationObserver = () => {
      this.updateFooterVisibility();
      this.updateFocusTrapElements();
    };
    this.updateFooterVisibility = () => {
      this.hasFooter = !!getSlotted(this.el, [SLOTS.back, SLOTS.primary, SLOTS.secondary]);
    };
    this.updateSizeCssVars = () => {
      this.cssWidth = getComputedStyle(this.el).getPropertyValue("--calcite-modal-width");
      this.cssHeight = getComputedStyle(this.el).getPropertyValue("--calcite-modal-height");
    };
    this.contentTopSlotChangeHandler = (event) => {
      this.hasContentTop = slotChangeHasAssignedElement(event);
    };
    this.contentBottomSlotChangeHandler = (event) => {
      this.hasContentBottom = slotChangeHasAssignedElement(event);
    };
    this.open = false;
    this.opened = false;
    this.beforeClose = void 0;
    this.closeButtonDisabled = false;
    this.focusTrapDisabled = false;
    this.outsideCloseDisabled = false;
    this.docked = void 0;
    this.embedded = false;
    this.escapeDisabled = false;
    this.scale = "m";
    this.widthScale = "m";
    this.fullscreen = void 0;
    this.kind = void 0;
    this.messages = void 0;
    this.messageOverrides = void 0;
    this.cssWidth = void 0;
    this.cssHeight = void 0;
    this.hasFooter = true;
    this.hasContentTop = false;
    this.hasContentBottom = false;
    this.effectiveLocale = void 0;
    this.defaultMessages = void 0;
  }
  handleFocusTrapDisabled(focusTrapDisabled) {
    if (!this.open) {
      return;
    }
    focusTrapDisabled ? deactivateFocusTrap(this) : activateFocusTrap(this);
  }
  onMessagesChange() {
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  componentWillLoad() {
    return __async(this, null, function* () {
      yield setUpMessages(this);
      setUpLoadableComponent(this);
      if (this.open) {
        this.openModal();
      }
    });
  }
  componentDidLoad() {
    setComponentLoaded(this);
  }
  connectedCallback() {
    this.mutationObserver?.observe(this.el, {
      childList: true,
      subtree: true
    });
    this.cssVarObserver?.observe(this.el, {
      attributeFilter: ["style"]
    });
    this.updateSizeCssVars();
    this.updateFooterVisibility();
    connectConditionalSlotComponent(this);
    connectLocalized(this);
    connectMessages(this);
    connectFocusTrap(this);
  }
  disconnectedCallback() {
    this.removeOverflowHiddenClass();
    this.mutationObserver?.disconnect();
    this.cssVarObserver?.disconnect();
    disconnectConditionalSlotComponent(this);
    deactivateFocusTrap(this);
    disconnectLocalized(this);
    disconnectMessages(this);
    this.embedded = false;
  }
  render() {
    return h(Host, {
      key: "f92cd77f4a5ad4a245ca50fe2b2bfcf9966d4ca8",
      "aria-describedby": this.contentId,
      "aria-labelledby": this.titleId,
      "aria-modal": "true",
      role: "dialog"
    }, h("div", {
      key: "a9d348a67842162f1bc17ec8422c07963aed412d",
      class: {
        [CSS.container]: true,
        [CSS.containerOpen]: this.opened,
        [CSS.containerEmbedded]: this.embedded
      }
    }, h("calcite-scrim", {
      key: "7dc3bc9220fc375522a6d390b633f9573bfa6c67",
      class: CSS.scrim,
      onClick: this.handleOutsideClose
    }), this.renderStyle(), h("div", {
      key: "40782ba2b6d3f086c884ace3529110e873009504",
      class: {
        [CSS.modal]: true
      },
      ref: this.setTransitionEl
    }, h("div", {
      key: "ea3a72ab0a0e5abae6e766d0b7b2cfce54667e86",
      class: CSS.header
    }, this.renderCloseButton(), h("header", {
      key: "abe5c28d11fc6241cd6ac40adef4d94529eb9d5c",
      class: CSS.title
    }, h("slot", {
      key: "3d1d6ed6c0249472a00fba4128a861e6a6eae4dd",
      name: CSS.header
    }))), this.renderContentTop(), h("div", {
      key: "0e65dfbd175e490586518d1a4c34b9eb1dde1f01",
      class: {
        [CSS.content]: true,
        [CSS.contentNoFooter]: !this.hasFooter
      },
      ref: (el) => this.modalContent = el
    }, h("slot", {
      key: "d5f3b08e61e8e47f64fd13bc6eb7f7ed6a07b7c8",
      name: SLOTS.content
    })), this.renderContentBottom(), this.renderFooter())));
  }
  renderFooter() {
    return this.hasFooter ? h("div", {
      class: CSS.footer,
      key: "footer"
    }, h("span", {
      class: CSS.back
    }, h("slot", {
      name: SLOTS.back
    })), h("span", {
      class: CSS.secondary
    }, h("slot", {
      name: SLOTS.secondary
    })), h("span", {
      class: CSS.primary
    }, h("slot", {
      name: SLOTS.primary
    }))) : null;
  }
  renderContentTop() {
    return h("div", {
      class: CSS.contentTop,
      hidden: !this.hasContentTop
    }, h("slot", {
      name: SLOTS.contentTop,
      onSlotchange: this.contentTopSlotChangeHandler
    }));
  }
  renderContentBottom() {
    return h("div", {
      class: CSS.contentBottom,
      hidden: !this.hasContentBottom
    }, h("slot", {
      name: SLOTS.contentBottom,
      onSlotchange: this.contentBottomSlotChangeHandler
    }));
  }
  renderCloseButton() {
    return !this.closeButtonDisabled ? h("button", {
      "aria-label": this.messages.close,
      class: CSS.close,
      key: "button",
      onClick: this.handleCloseClick,
      ref: (el) => this.closeButtonEl = el,
      title: this.messages.close
    }, h("calcite-icon", {
      icon: ICONS.close,
      scale: getIconScale(this.scale)
    })) : null;
  }
  renderStyle() {
    if (!this.fullscreen && (this.cssWidth || this.cssHeight)) {
      return h("style", null, `.${CSS.container} {
              ${this.docked && this.cssWidth ? `align-items: center !important;` : ""}
            }
            .${CSS.modal} {
              block-size: ${this.cssHeight ? this.cssHeight : "auto"} !important;
              ${this.cssWidth ? `inline-size: ${this.cssWidth} !important;` : ""}
              ${this.cssWidth ? `max-inline-size: ${this.cssWidth} !important;` : ""}
              ${this.docked ? `border-radius: var(--calcite-border-radius) !important;` : ""}
            }
            @media screen and (max-width: ${this.cssWidth}) {
              .${CSS.container} {
                ${this.docked ? `align-items: flex-end !important;` : ""}
              }
              .${CSS.modal} {
                max-block-size: 100% !important;
                inline-size: 100% !important;
                max-inline-size: 100% !important;
                min-inline-size: 100% !important;
                margin: 0 !important;
                ${!this.docked ? `block-size: 100% !important;` : ""}
                ${!this.docked ? `border-radius: 0 !important;` : ""}
                ${this.docked ? `border-radius: var(--calcite-border-radius) var(--calcite-border-radius) 0 0 !important;` : ""}
              }
            }
          `);
    }
  }
  effectiveLocaleChange() {
    updateMessages(this, this.effectiveLocale);
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  handleEscape(event) {
    if (this.open && !this.escapeDisabled && event.key === "Escape" && !event.defaultPrevented) {
      this.open = false;
      event.preventDefault();
    }
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /**
   * Sets focus on the component's "close" button (the first focusable item).
   *
   */
  setFocus() {
    return __async(this, null, function* () {
      yield componentFocusable(this);
      focusFirstTabbable(this.el);
    });
  }
  /**
   * Updates the element(s) that are used within the focus-trap of the component.
   */
  updateFocusTrapElements() {
    return __async(this, null, function* () {
      updateFocusTrapElements(this);
    });
  }
  /**
   * Sets the scroll top of the component's content.
   *
   * @param top
   * @param left
   */
  scrollContent(top = 0, left = 0) {
    return __async(this, null, function* () {
      if (this.modalContent) {
        if (this.modalContent.scrollTo) {
          this.modalContent.scrollTo({
            top,
            left,
            behavior: "smooth"
          });
        } else {
          this.modalContent.scrollTop = top;
          this.modalContent.scrollLeft = left;
        }
      }
    });
  }
  onBeforeOpen() {
    this.transitionEl.classList.add(CSS.openingActive);
    this.calciteModalBeforeOpen.emit();
  }
  onOpen() {
    this.transitionEl.classList.remove(CSS.openingIdle, CSS.openingActive);
    this.calciteModalOpen.emit();
    activateFocusTrap(this);
  }
  onBeforeClose() {
    this.transitionEl.classList.add(CSS.closingActive);
    this.calciteModalBeforeClose.emit();
  }
  onClose() {
    this.transitionEl.classList.remove(CSS.closingIdle, CSS.closingActive);
    this.calciteModalClose.emit();
    deactivateFocusTrap(this);
  }
  toggleModal(value) {
    if (this.ignoreOpenChange) {
      return;
    }
    if (value) {
      this.openModal();
    } else {
      this.closeModal();
    }
  }
  handleOpenedChange(value) {
    const idleClass = value ? CSS.openingIdle : CSS.closingIdle;
    this.transitionEl.classList.add(idleClass);
    onToggleOpenCloseComponent(this);
  }
  openModal() {
    return __async(this, null, function* () {
      yield componentOnReady(this.el);
      this.el.addEventListener("calciteModalOpen", this.openEnd);
      this.opened = true;
      const titleEl = getSlotted(this.el, SLOTS.header);
      const contentEl = getSlotted(this.el, SLOTS.content);
      this.titleId = ensureId(titleEl);
      this.contentId = ensureId(contentEl);
      if (!this.embedded) {
        if (totalOpenModals === 0) {
          initialDocumentOverflowStyle = document.documentElement.style.overflow;
        }
        totalOpenModals++;
        document.documentElement.style.setProperty("overflow", "hidden");
      }
    });
  }
  removeOverflowHiddenClass() {
    document.documentElement.style.setProperty("overflow", initialDocumentOverflowStyle);
  }
  static get assetsDirs() {
    return ["assets"];
  }
  get el() {
    return this;
  }
  static get watchers() {
    return {
      "focusTrapDisabled": ["handleFocusTrapDisabled"],
      "messageOverrides": ["onMessagesChange"],
      "effectiveLocale": ["effectiveLocaleChange"],
      "open": ["toggleModal"],
      "opened": ["handleOpenedChange"]
    };
  }
  static get style() {
    return CalciteModalStyle0;
  }
}, [1, "calcite-modal", {
  "open": [1540],
  "opened": [1540],
  "beforeClose": [16],
  "closeButtonDisabled": [516, "close-button-disabled"],
  "focusTrapDisabled": [516, "focus-trap-disabled"],
  "outsideCloseDisabled": [516, "outside-close-disabled"],
  "docked": [516],
  "embedded": [1028],
  "escapeDisabled": [516, "escape-disabled"],
  "scale": [513],
  "widthScale": [513, "width-scale"],
  "fullscreen": [516],
  "kind": [513],
  "messages": [1040],
  "messageOverrides": [1040],
  "cssWidth": [32],
  "cssHeight": [32],
  "hasFooter": [32],
  "hasContentTop": [32],
  "hasContentBottom": [32],
  "effectiveLocale": [32],
  "defaultMessages": [32],
  "setFocus": [64],
  "updateFocusTrapElements": [64],
  "scrollContent": [64]
}, [[8, "keydown", "handleEscape"]], {
  "focusTrapDisabled": ["handleFocusTrapDisabled"],
  "messageOverrides": ["onMessagesChange"],
  "effectiveLocale": ["effectiveLocaleChange"],
  "open": ["toggleModal"],
  "opened": ["handleOpenedChange"]
}]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-modal", "calcite-icon", "calcite-loader", "calcite-scrim"];
  components.forEach((tagName) => {
    switch (tagName) {
      case "calcite-modal":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, Modal);
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
      case "calcite-scrim":
        if (!customElements.get(tagName)) {
          defineCustomElement3();
        }
        break;
    }
  });
}
defineCustomElement$1();
var CalciteModal = Modal;
var defineCustomElement4 = defineCustomElement$1;
export {
  CalciteModal,
  defineCustomElement4 as defineCustomElement
};
/*! Bundled license information:

@esri/calcite-components/dist/components/logger.js:
  (*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
   * v2.13.2
   *)

@esri/calcite-components/dist/components/calcite-modal.js:
  (*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
   * v2.13.2
   *)
*/
//# sourceMappingURL=calcite-modal-OBAWLRLV.js.map
