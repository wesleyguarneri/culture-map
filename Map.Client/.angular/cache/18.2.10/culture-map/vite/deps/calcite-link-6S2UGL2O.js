import {
  InteractiveContainer,
  updateHostInteraction
} from "./chunk-46GG7UPH.js";
import {
  componentFocusable,
  setComponentLoaded,
  setUpLoadableComponent
} from "./chunk-M6DKAVSK.js";
import {
  defineCustomElement
} from "./chunk-AX5NQF7U.js";
import "./chunk-JOYMUIN5.js";
import "./chunk-23E6RT3O.js";
import {
  focusElement,
  getElementDir
} from "./chunk-RGUNAV4Z.js";
import {
  CSS_UTILITY
} from "./chunk-RCBGISRX.js";
import {
  H,
  Host,
  h,
  proxyCustomElement
} from "./chunk-2P72IR2Y.js";
import {
  __async
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@esri/calcite-components/dist/components/link.js
var linkCss = ":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:inline}:host a,:host span{position:relative;display:flex;cursor:pointer;align-items:center;justify-content:center;border-radius:0px;border-style:none;font-family:inherit;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;text-decoration:none;line-height:inherit;font-size:inherit;-webkit-appearance:none}:host a:hover,:host span:hover{text-decoration:none}:host a,:host span{outline-color:transparent}:host a:focus,:host span:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}calcite-icon{inline-size:1em;block-size:1em;min-inline-size:unset;min-block-size:unset}.calcite-link--icon{vertical-align:middle;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;margin-block-start:-0.25em}:host .calcite-link--icon.icon-start{margin-inline-end:0.5rem}:host .calcite-link--icon.icon-end{margin-inline-start:0.5rem}:host span,:host a{position:relative;display:inline;border-style:none;background-color:transparent;padding:0px;color:var(--calcite-color-text-link);transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;line-height:inherit;white-space:initial;background-image:linear-gradient(currentColor, currentColor), linear-gradient(var(--calcite-color-brand-underline), var(--calcite-color-brand-underline));background-position-x:0%, 100%;background-position-y:min(1.5em, 100%);background-repeat:no-repeat, no-repeat;background-size:0% 1px, 100% 1px}:host span:hover,:host span:focus,:host a:hover,:host a:focus{background-size:100% 1px, 100% 1px}:host span:active,:host a:active{background-size:100% 2px, 100% 2px}:host span.calcite--rtl,:host a.calcite--rtl{background-position:100% 100%, 100% 100%}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([hidden]){display:none}[hidden]{display:none}";
var CalciteLinkStyle0 = linkCss;
var Link = proxyCustomElement(class Link2 extends H {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.childElClickHandler = (event) => {
      if (!event.isTrusted) {
        event.stopPropagation();
      }
    };
    this.storeTagRef = (el) => {
      this.childEl = el;
    };
    this.disabled = false;
    this.download = false;
    this.href = void 0;
    this.iconEnd = void 0;
    this.iconFlipRtl = void 0;
    this.iconStart = void 0;
    this.rel = void 0;
    this.target = void 0;
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  componentWillLoad() {
    setUpLoadableComponent(this);
  }
  componentDidLoad() {
    setComponentLoaded(this);
  }
  componentDidRender() {
    updateHostInteraction(this);
  }
  render() {
    const {
      download,
      el
    } = this;
    const dir = getElementDir(el);
    const childElType = this.href ? "a" : "span";
    const iconStartEl = h("calcite-icon", {
      key: "c9844033e9bd5da35333b485aad27ddb2df6b039",
      class: "calcite-link--icon icon-start",
      flipRtl: this.iconFlipRtl === "start" || this.iconFlipRtl === "both",
      icon: this.iconStart,
      scale: "s"
    });
    const iconEndEl = h("calcite-icon", {
      key: "f1de10682fee566552253cf2ae3cb6725f5e5f11",
      class: "calcite-link--icon icon-end",
      flipRtl: this.iconFlipRtl === "end" || this.iconFlipRtl === "both",
      icon: this.iconEnd,
      scale: "s"
    });
    const Tag = childElType;
    const role = childElType === "span" ? "link" : null;
    const tabIndex = childElType === "span" ? 0 : null;
    return h(Host, {
      key: "5ad440468fcccb6fe7c146ec57462e7593f96109",
      role: "presentation"
    }, h(InteractiveContainer, {
      key: "916c68cd97c31fa1ec69f408d25d3023749698e1",
      disabled: this.disabled
    }, h(Tag, {
      key: "e00cebc0c56b95c02192872ac84df996a74a5fa4",
      class: {
        [CSS_UTILITY.rtl]: dir === "rtl"
      },
      /*
      When the 'download' property of type 'boolean | string' is set to true, the value is "".
      This works around that issue for now.
      */
      download: childElType === "a" ? download === true || download === "" ? "" : download || null : null,
      href: childElType === "a" && this.href,
      onClick: this.childElClickHandler,
      ref: this.storeTagRef,
      rel: childElType === "a" && this.rel,
      role,
      tabIndex,
      target: childElType === "a" && this.target
    }, this.iconStart ? iconStartEl : null, h("slot", {
      key: "57b25ff3b8f7f3d048796a559c2911178d6b8ddf"
    }), this.iconEnd ? iconEndEl : null)));
  }
  //--------------------------------------------------------------------------
  //
  //  Events
  //
  //--------------------------------------------------------------------------
  clickHandler(event) {
    if (this.disabled) {
      return;
    }
    if (!event.isTrusted) {
      this.childEl.click();
    }
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
      focusElement(this.childEl);
    });
  }
  get el() {
    return this;
  }
  static get style() {
    return CalciteLinkStyle0;
  }
}, [1, "calcite-link", {
  "disabled": [516],
  "download": [520],
  "href": [513],
  "iconEnd": [513, "icon-end"],
  "iconFlipRtl": [513, "icon-flip-rtl"],
  "iconStart": [513, "icon-start"],
  "rel": [1],
  "target": [1],
  "setFocus": [64]
}, [[0, "click", "clickHandler"]]]);
function defineCustomElement2() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-link", "calcite-icon"];
  components.forEach((tagName) => {
    switch (tagName) {
      case "calcite-link":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, Link);
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

// ../../../node_modules/@esri/calcite-components/dist/components/calcite-link.js
var CalciteLink = Link;
var defineCustomElement3 = defineCustomElement2;
export {
  CalciteLink,
  defineCustomElement3 as defineCustomElement
};
/*! Bundled license information:

@esri/calcite-components/dist/components/link.js:
  (*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
   * v2.13.2
   *)

@esri/calcite-components/dist/components/calcite-link.js:
  (*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
   * v2.13.2
   *)
*/
//# sourceMappingURL=calcite-link-6S2UGL2O.js.map
