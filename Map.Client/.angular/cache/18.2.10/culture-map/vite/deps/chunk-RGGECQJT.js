import {
  defineCustomElement
} from "./chunk-URKUSNVW.js";
import {
  connectMessages,
  disconnectMessages,
  setUpMessages,
  updateMessages
} from "./chunk-XGIY42ZI.js";
import {
  connectLocalized,
  disconnectLocalized
} from "./chunk-B3F3MSZ2.js";
import {
  createObserver
} from "./chunk-JOYMUIN5.js";
import {
  slotChangeHasContent
} from "./chunk-RGUNAV4Z.js";
import {
  H,
  h,
  proxyCustomElement
} from "./chunk-2P72IR2Y.js";
import {
  __async
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@esri/calcite-components/dist/components/scrim.js
var CSS = {
  scrim: "scrim",
  content: "content"
};
var BREAKPOINTS = {
  s: 72,
  // Less than 72px.
  // medium is assumed default.
  l: 480
  // Greater than or equal to 480px.
};
var scrimCss = ":host{--calcite-scrim-background:var(--calcite-color-transparent-scrim);position:absolute;inset:0px;z-index:var(--calcite-z-index-overlay);display:flex;block-size:100%;inline-size:100%;flex-direction:column;align-items:stretch}@keyframes calcite-scrim-fade-in{0%{--tw-bg-opacity:0}100%{--tw-text-opacity:1}}.scrim{position:absolute;inset:0px;display:flex;flex-direction:column;align-content:center;align-items:center;justify-content:center;overflow:hidden;animation:calcite-scrim-fade-in var(--calcite-internal-animation-timing-medium) ease-in-out;background-color:var(--calcite-scrim-background, var(--calcite-color-transparent-scrim))}.content{padding:1rem}:host([hidden]){display:none}[hidden]{display:none}";
var CalciteScrimStyle0 = scrimCss;
var Scrim = proxyCustomElement(class Scrim2 extends H {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.resizeObserver = createObserver("resize", () => this.handleResize());
    this.handleDefaultSlotChange = (event) => {
      this.hasContent = slotChangeHasContent(event);
    };
    this.storeLoaderEl = (el) => {
      this.loaderEl = el;
      this.handleResize();
    };
    this.loading = false;
    this.messages = void 0;
    this.messageOverrides = void 0;
    this.loaderScale = void 0;
    this.defaultMessages = void 0;
    this.effectiveLocale = "";
    this.hasContent = false;
  }
  onMessagesChange() {
  }
  effectiveLocaleChange() {
    updateMessages(this, this.effectiveLocale);
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    connectLocalized(this);
    connectMessages(this);
    this.resizeObserver?.observe(this.el);
  }
  componentWillLoad() {
    return __async(this, null, function* () {
      yield setUpMessages(this);
    });
  }
  disconnectedCallback() {
    disconnectLocalized(this);
    disconnectMessages(this);
    this.resizeObserver?.disconnect();
  }
  // --------------------------------------------------------------------------
  //
  //  Render Method
  //
  // --------------------------------------------------------------------------
  render() {
    const {
      hasContent,
      loading,
      messages
    } = this;
    return h("div", {
      key: "286b03bb4a18b45f1b6914684a5178e952a44127",
      class: CSS.scrim
    }, loading ? h("calcite-loader", {
      label: messages.loading,
      ref: this.storeLoaderEl,
      scale: this.loaderScale
    }) : null, h("div", {
      key: "0f8cd111720239b204d0d201610c4145d5616753",
      class: CSS.content,
      hidden: !hasContent
    }, h("slot", {
      key: "fe7bbced9871c9179971da0ef7ca07ea1c9ac33e",
      onSlotchange: this.handleDefaultSlotChange
    })));
  }
  getScale(size) {
    if (size < BREAKPOINTS.s) {
      return "s";
    } else if (size >= BREAKPOINTS.l) {
      return "l";
    } else {
      return "m";
    }
  }
  handleResize() {
    const {
      loaderEl,
      el
    } = this;
    if (!loaderEl) {
      return;
    }
    this.loaderScale = this.getScale(Math.min(el.clientHeight, el.clientWidth) ?? 0);
  }
  static get assetsDirs() {
    return ["assets"];
  }
  get el() {
    return this;
  }
  static get watchers() {
    return {
      "messageOverrides": ["onMessagesChange"],
      "effectiveLocale": ["effectiveLocaleChange"]
    };
  }
  static get style() {
    return CalciteScrimStyle0;
  }
}, [1, "calcite-scrim", {
  "loading": [516],
  "messages": [1040],
  "messageOverrides": [1040],
  "loaderScale": [32],
  "defaultMessages": [32],
  "effectiveLocale": [32],
  "hasContent": [32]
}, void 0, {
  "messageOverrides": ["onMessagesChange"],
  "effectiveLocale": ["effectiveLocaleChange"]
}]);
function defineCustomElement2() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-scrim", "calcite-loader"];
  components.forEach((tagName) => {
    switch (tagName) {
      case "calcite-scrim":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, Scrim);
        }
        break;
      case "calcite-loader":
        if (!customElements.get(tagName)) {
          defineCustomElement();
        }
        break;
    }
  });
}
defineCustomElement2();

export {
  Scrim,
  defineCustomElement2 as defineCustomElement
};
/*! Bundled license information:

@esri/calcite-components/dist/components/scrim.js:
  (*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
   * v2.13.2
   *)
*/
//# sourceMappingURL=chunk-RGGECQJT.js.map
