import {
  activateFocusTrap,
  connectFocusTrap,
  deactivateFocusTrap,
  updateFocusTrapElements
} from "./chunk-LY6QK6XQ.js";
import {
  defineCustomElement as defineCustomElement2
} from "./chunk-RGGECQJT.js";
import "./chunk-YPWMP2VK.js";
import {
  defineCustomElement
} from "./chunk-URKUSNVW.js";
import {
  onToggleOpenCloseComponent
} from "./chunk-BJUGMQT5.js";
import "./chunk-XGIY42ZI.js";
import {
  componentFocusable,
  setComponentLoaded,
  setUpLoadableComponent
} from "./chunk-M6DKAVSK.js";
import "./chunk-B3F3MSZ2.js";
import "./chunk-EU6DW6GK.js";
import {
  createObserver
} from "./chunk-JOYMUIN5.js";
import "./chunk-23E6RT3O.js";
import {
  ensureId,
  focusFirstTabbable,
  getElementDir
} from "./chunk-RGUNAV4Z.js";
import {
  CSS_UTILITY
} from "./chunk-RCBGISRX.js";
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

// ../../../node_modules/@esri/calcite-components/dist/components/calcite-sheet.js
var CSS = {
  scrim: "scrim",
  container: "container",
  containerOpen: "container--open",
  content: "content",
  containerEmbedded: "container--embedded"
};
var sheetCss = ":host{position:absolute;inset:0px;z-index:var(--calcite-z-index-overlay);display:flex;visibility:hidden !important;--calcite-sheet-scrim-background-internal:rgba(0, 0, 0, 0.85);--calcite-scrim-shadow-block-start-internal:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);--calcite-scrim-shadow-block-end-internal:0 -4px 8px -1px rgba(0, 0, 0, 0.08), 0 -2px 4px -1px rgba(0, 0, 0, 0.04);--calcite-scrim-shadow-inline-start-internal:4px 0 8px -1px rgba(0, 0, 0, 0.08), 2px 0 4px -1px rgba(0, 0, 0, 0.04);--calcite-scrim-shadow-inline-end-internal:-4px 0 8px -1px rgba(0, 0, 0, 0.08), -2px 0 4px -1px rgba(0, 0, 0, 0.04)}.calcite--rtl{--calcite-scrim-shadow-inline-start-internal:-4px 0 8px -1px rgba(0, 0, 0, 0.08), -2px 0 4px -1px rgba(0, 0, 0, 0.04);--calcite-scrim-shadow-inline-end-internal:4px 0 8px -1px rgba(0, 0, 0, 0.08), 2px 0 4px -1px rgba(0, 0, 0, 0.04)}.container{visibility:hidden;position:fixed;z-index:var(--calcite-z-index-overlay);display:flex;overflow-y:hidden;color:var(--calcite-color-text-2);opacity:0;transition:visibility 0ms linear var(--calcite-internal-animation-timing-medium), opacity var(--calcite-internal-animation-timing-medium) cubic-bezier(0.215, 0.44, 0.42, 0.88)}:host([position=inline-start]) .container{justify-content:flex-start;inset-block:0;inset-inline:0 auto;--calcite-sheet-hidden-position-internal:translate3d(-1rem, 0, 0)}:host([position=inline-end]) .container{justify-content:flex-end;inset-block:0;inset-inline:auto 0;--calcite-sheet-hidden-position-internal:translate3d(1rem, 0, 0)}:host([position=block-start]) .container{align-items:flex-start;inset-block:0 auto;inset-inline:0;--calcite-sheet-hidden-position-internal:translate3d(0, -1rem, 0)}:host([position=block-end]) .container{align-items:flex-end;inset-block:auto 0;inset-inline:0;--calcite-sheet-hidden-position-internal:translate3d(0, 1rem, 0)}:host([display-mode=float]) .content{--tw-shadow:0 2px 12px -4px rgba(0, 0, 0, 0.2), 0 2px 4px -2px rgba(0, 0, 0, 0.16);--tw-shadow-colored:0 2px 12px -4px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host([display-mode=overlay][position=inline-start]) .container{box-shadow:var(--calcite-scrim-shadow-inline-start-internal)}:host([display-mode=overlay][position=inline-end]) .container{box-shadow:var(--calcite-scrim-shadow-inline-end-internal)}:host([display-mode=overlay][position=block-start]) .container{box-shadow:var(--calcite-scrim-shadow-block-start-internal)}:host([display-mode=overlay][position=block-end]) .container{box-shadow:var(--calcite-scrim-shadow-block-end-internal)}:host([position^=inline]) .container,:host([position^=inline]) .content{inline-size:var(--calcite-sheet-width-internal);max-inline-size:var(--calcite-sheet-max-width-internal);min-inline-size:var(--calcite-sheet-min-width-internal)}:host([position^=block]) .container,:host([position^=block]) .content{block-size:var(--calcite-sheet-height-internal);max-block-size:var(--calcite-sheet-max-height-internal);min-block-size:var(--calcite-sheet-min-height-internal)}:host([display-mode=float][position^=inline]) .container{block-size:calc(100% - 1.5rem);max-block-size:calc(100% - 1.5rem);min-block-size:calc(100% - 1.5rem)}:host([display-mode=float][position^=block]) .container{inline-size:calc(100% - 1.5rem);max-inline-size:calc(100% - 1.5rem);min-inline-size:calc(100% - 1.5rem)}:host([position^=inline][width-scale=s]){--calcite-sheet-width-internal:var(--calcite-sheet-width, 15vw);--calcite-sheet-max-width-internal:var(--calcite-sheet-max-width, 360px);--calcite-sheet-min-width-internal:var(--calcite-sheet-min-width, 260px)}:host([position^=inline][width-scale=m]){--calcite-sheet-width-internal:var(--calcite-sheet-width, 25vw);--calcite-sheet-max-width-internal:var(--calcite-sheet-max-width, 420px);--calcite-sheet-min-width-internal:var(--calcite-sheet-min-width, 300px)}:host([position^=inline][width-scale=l]){--calcite-sheet-width-internal:var(--calcite-sheet-width, 45vw);--calcite-sheet-max-width-internal:var(--calcite-sheet-max-width, 680px);--calcite-sheet-min-width-internal:var(--calcite-sheet-min-width, 340px)}:host([position^=block][height-scale=s]){--calcite-sheet-min-height-internal:var(--calcite-sheet-min-height, 160px);--calcite-sheet-height-internal:var(--calcite-sheet-height, 30vh);--calcite-sheet-max-height-internal:var(--calcite-sheet-max-height, 30vh)}:host([position^=block][height-scale=m]){--calcite-sheet-min-height-internal:var(--calcite-sheet-min-height, 200px);--calcite-sheet-height-internal:var(--calcite-sheet-height, 45vh);--calcite-sheet-max-height-internal:var(--calcite-sheet-max-height, 50vh)}:host([position^=block][height-scale=l]){--calcite-sheet-min-height-internal:var(--calcite-sheet-min-height, 240px);--calcite-sheet-height-internal:var(--calcite-sheet-height, 60vh);--calcite-sheet-max-height-internal:var(--calcite-sheet-max-height, 70vh)}.scrim{--calcite-scrim-background:var(--calcite-sheet-scrim-background, var(--calcite-sheet-scrim-background-internal));position:fixed;inset:0px;display:flex;overflow-y:hidden}:host([opened]){visibility:visible !important}.content{position:relative;z-index:var(--calcite-z-index-modal);box-sizing:border-box;display:block;max-block-size:100%;max-inline-size:100%;overflow-y:hidden;padding:0px;background-color:var(--calcite-color-foreground-1);max-block-size:100%;visibility:hidden;transition:transform var(--calcite-internal-animation-timing-medium) cubic-bezier(0.215, 0.44, 0.42, 0.88), visibility 0ms linear var(--calcite-internal-animation-timing-medium), opacity var(--calcite-internal-animation-timing-medium) cubic-bezier(0.215, 0.44, 0.42, 0.88);transform:var(--calcite-sheet-hidden-position-internal)}.container--open .content{transform:translate3d(0, 0, 0)}:host([display-mode=float]) .content,:host([display-mode=float]) .container{border-radius:0.25rem}:host([display-mode=float]) .container{padding:0.75rem}.container--open{visibility:visible;opacity:1;transition-delay:0ms}.container--open .content{pointer-events:auto;visibility:visible;opacity:1;transition:transform var(--calcite-internal-animation-timing-medium) cubic-bezier(0.215, 0.44, 0.42, 0.88), visibility 0ms linear, opacity var(--calcite-internal-animation-timing-medium) cubic-bezier(0.215, 0.44, 0.42, 0.88), max-inline-size var(--calcite-internal-animation-timing-medium) cubic-bezier(0.215, 0.44, 0.42, 0.88), max-block-size var(--calcite-internal-animation-timing-medium) cubic-bezier(0.215, 0.44, 0.42, 0.88);transition-delay:0ms}:host([position=inline-start]) .content,:host([position=inline-end]) .content{block-size:100%}:host([position=block-start]) .content,:host([position=block-end]) .content{inline-size:100%}:host([position]) .container--embedded{pointer-events:auto;position:absolute;inline-size:100%;max-inline-size:100%;min-inline-size:100%;block-size:100%;max-block-size:100%;min-block-size:100%}:host([position]) .container--embedded calcite-scrim{position:absolute}:host([hidden]){display:none}[hidden]{display:none}";
var CalciteSheetStyle0 = sheetCss;
var Sheet = proxyCustomElement(class Sheet2 extends H {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteSheetBeforeClose = createEvent(this, "calciteSheetBeforeClose", 6);
    this.calciteSheetClose = createEvent(this, "calciteSheetClose", 6);
    this.calciteSheetBeforeOpen = createEvent(this, "calciteSheetBeforeOpen", 6);
    this.calciteSheetOpen = createEvent(this, "calciteSheetOpen", 6);
    this.openTransitionProp = "opacity";
    this.ignoreOpenChange = false;
    this.mutationObserver = createObserver("mutation", () => this.handleMutationObserver());
    this.setContentId = (el) => {
      this.contentId = ensureId(el);
    };
    this.setTransitionEl = (el) => {
      this.transitionEl = el;
    };
    this.openEnd = () => {
      this.setFocus();
      this.el.removeEventListener("calciteSheetOpen", this.openEnd);
    };
    this.handleOutsideClose = () => {
      if (this.outsideCloseDisabled) {
        return;
      }
      this.open = false;
    };
    this.closeSheet = () => __async(this, null, function* () {
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
      this.opened = false;
      this.removeOverflowHiddenClass();
    });
    this.beforeClose = void 0;
    this.displayMode = "overlay";
    this.embedded = false;
    this.escapeDisabled = false;
    this.heightScale = "m";
    this.focusTrapDisabled = false;
    this.label = void 0;
    this.open = false;
    this.opened = false;
    this.outsideCloseDisabled = false;
    this.position = "inline-start";
    this.widthScale = "m";
  }
  handleFocusTrapDisabled(focusTrapDisabled) {
    if (!this.open) {
      return;
    }
    focusTrapDisabled ? deactivateFocusTrap(this) : activateFocusTrap(this);
  }
  toggleSheet(value) {
    if (this.ignoreOpenChange) {
      return;
    }
    if (value) {
      this.openSheet();
    } else {
      this.closeSheet();
    }
  }
  handleOpenedChange() {
    onToggleOpenCloseComponent(this);
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  componentWillLoad() {
    return __async(this, null, function* () {
      setUpLoadableComponent(this);
      if (this.open) {
        requestAnimationFrame(() => this.openSheet());
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
    connectFocusTrap(this);
  }
  disconnectedCallback() {
    this.removeOverflowHiddenClass();
    this.mutationObserver?.disconnect();
    deactivateFocusTrap(this);
    this.embedded = false;
  }
  render() {
    const dir = getElementDir(this.el);
    return h(Host, {
      key: "145f45b21fa18a08af4ef4e920d536a7e6431175",
      "aria-describedby": this.contentId,
      "aria-label": this.label,
      "aria-modal": "true",
      role: "dialog"
    }, h("div", {
      key: "796deb8baa890ad7e8f42d2e0a3be22269e450a2",
      class: {
        [CSS.container]: true,
        [CSS.containerOpen]: this.opened,
        [CSS.containerEmbedded]: this.embedded,
        [CSS_UTILITY.rtl]: dir === "rtl"
      },
      ref: this.setTransitionEl
    }, h("calcite-scrim", {
      key: "c4d45b89ee32da639d1feb88289d2b0957474414",
      class: CSS.scrim,
      onClick: this.handleOutsideClose
    }), h("div", {
      key: "ad764ed7812ca7172b5f4aacf4229ae28e06d315",
      class: {
        [CSS.content]: true
      },
      ref: this.setContentId
    }, h("slot", {
      key: "dab54df7b8cae4bc8434935e1b55204896ed45df"
    }))));
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
   * Sets focus on the component's "close" button - the first focusable item.
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
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  onBeforeOpen() {
    this.calciteSheetBeforeOpen.emit();
  }
  onOpen() {
    this.calciteSheetOpen.emit();
    activateFocusTrap(this);
  }
  onBeforeClose() {
    this.calciteSheetBeforeClose.emit();
  }
  onClose() {
    this.calciteSheetClose.emit();
    deactivateFocusTrap(this);
  }
  openSheet() {
    this.el.addEventListener("calciteSheetOpen", this.openEnd);
    this.opened = true;
    if (!this.embedded) {
      this.initialOverflowCSS = document.documentElement.style.overflow;
      document.documentElement.style.setProperty("overflow", "hidden");
    }
  }
  removeOverflowHiddenClass() {
    document.documentElement.style.setProperty("overflow", this.initialOverflowCSS);
  }
  handleMutationObserver() {
    this.updateFocusTrapElements();
  }
  get el() {
    return this;
  }
  static get watchers() {
    return {
      "focusTrapDisabled": ["handleFocusTrapDisabled"],
      "open": ["toggleSheet"],
      "opened": ["handleOpenedChange"]
    };
  }
  static get style() {
    return CalciteSheetStyle0;
  }
}, [1, "calcite-sheet", {
  "beforeClose": [16],
  "displayMode": [513, "display-mode"],
  "embedded": [4],
  "escapeDisabled": [516, "escape-disabled"],
  "heightScale": [513, "height-scale"],
  "focusTrapDisabled": [516, "focus-trap-disabled"],
  "label": [1],
  "open": [1540],
  "opened": [1540],
  "outsideCloseDisabled": [516, "outside-close-disabled"],
  "position": [513],
  "widthScale": [513, "width-scale"],
  "setFocus": [64],
  "updateFocusTrapElements": [64]
}, [[8, "keydown", "handleEscape"]], {
  "focusTrapDisabled": ["handleFocusTrapDisabled"],
  "open": ["toggleSheet"],
  "opened": ["handleOpenedChange"]
}]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-sheet", "calcite-loader", "calcite-scrim"];
  components.forEach((tagName) => {
    switch (tagName) {
      case "calcite-sheet":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, Sheet);
        }
        break;
      case "calcite-loader":
        if (!customElements.get(tagName)) {
          defineCustomElement();
        }
        break;
      case "calcite-scrim":
        if (!customElements.get(tagName)) {
          defineCustomElement2();
        }
        break;
    }
  });
}
defineCustomElement$1();
var CalciteSheet = Sheet;
var defineCustomElement3 = defineCustomElement$1;
export {
  CalciteSheet,
  defineCustomElement3 as defineCustomElement
};
/*! Bundled license information:

@esri/calcite-components/dist/components/calcite-sheet.js:
  (*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
   * v2.13.2
   *)
*/
//# sourceMappingURL=calcite-sheet-ZJSLZKTR.js.map
