import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  componentFocusable,
  setComponentLoaded,
  setUpLoadableComponent
} from "./chunk-3LOI6Q5C.js";
import {
  createObserver
} from "./chunk-OOEWT25O.js";
import "./chunk-7JIACICA.js";
import {
  H,
  h,
  proxyCustomElement
} from "./chunk-IAO6HACY.js";
import {
  __async
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@esri/calcite-components/dist/components/calcite-flow.js
var CSS = {
  frame: "frame",
  frameAdvancing: "frame--advancing",
  frameRetreating: "frame--retreating"
};
var flowCss = ":host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host{position:relative;display:flex;inline-size:100%;flex:1 1 auto;align-items:stretch;overflow:hidden;background-color:transparent}:host .frame{position:relative;margin:0px;display:flex;inline-size:100%;flex:1 1 auto;flex-direction:column;align-items:stretch;padding:0px}:host ::slotted(calcite-flow-item),:host ::slotted(calcite-panel){block-size:100%}:host ::slotted(.calcite-match-height:last-child){display:flex;flex:1 1 auto;overflow:hidden}:host .frame--advancing{animation:calcite-frame-advance var(--calcite-animation-timing)}:host .frame--retreating{animation:calcite-frame-retreat var(--calcite-animation-timing)}@keyframes calcite-frame-advance{0%{--tw-bg-opacity:0.5;transform:translate3d(50px, 0, 0)}100%{--tw-bg-opacity:1;transform:translate3d(0, 0, 0)}}@keyframes calcite-frame-retreat{0%{--tw-bg-opacity:0.5;transform:translate3d(-50px, 0, 0)}100%{--tw-bg-opacity:1;transform:translate3d(0, 0, 0)}}:host([hidden]){display:none}[hidden]{display:none}";
var CalciteFlowStyle0 = flowCss;
var Flow = proxyCustomElement(class Flow2 extends H {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.itemMutationObserver = createObserver("mutation", () => this.updateFlowProps());
    this.getFlowDirection = (oldFlowItemCount, newFlowItemCount) => {
      const allowRetreatingDirection = oldFlowItemCount > 1;
      const allowAdvancingDirection = oldFlowItemCount && newFlowItemCount > 1;
      if (!allowAdvancingDirection && !allowRetreatingDirection) {
        return null;
      }
      return newFlowItemCount < oldFlowItemCount ? "retreating" : "advancing";
    };
    this.updateFlowProps = () => {
      const {
        customItemSelectors,
        el,
        items
      } = this;
      const newItems = Array.from(el.querySelectorAll(`calcite-flow-item${customItemSelectors ? `,${customItemSelectors}` : ""}`)).filter((flowItem) => flowItem.closest("calcite-flow") === el);
      const oldItemCount = items.length;
      const newItemCount = newItems.length;
      const activeItem = newItems[newItemCount - 1];
      const previousItem = newItems[newItemCount - 2];
      if (newItemCount && activeItem) {
        newItems.forEach((itemNode) => {
          itemNode.showBackButton = itemNode === activeItem && newItemCount > 1;
          itemNode.hidden = itemNode !== activeItem;
        });
      }
      if (previousItem) {
        previousItem.menuOpen = false;
      }
      this.items = newItems;
      if (oldItemCount !== newItemCount) {
        const flowDirection = this.getFlowDirection(oldItemCount, newItemCount);
        this.itemCount = newItemCount;
        this.flowDirection = flowDirection;
      }
    };
    this.customItemSelectors = void 0;
    this.flowDirection = null;
    this.itemCount = 0;
    this.items = [];
  }
  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------
  /**
   * Removes the currently active `calcite-flow-item`.
   */
  back() {
    return __async(this, null, function* () {
      const {
        items
      } = this;
      const lastItem = items[items.length - 1];
      if (!lastItem) {
        return;
      }
      const beforeBack = lastItem.beforeBack ? lastItem.beforeBack : () => Promise.resolve();
      try {
        yield beforeBack.call(lastItem);
      } catch (_error) {
        return;
      }
      lastItem.remove();
      return lastItem;
    });
  }
  /**
   * Sets focus on the component.
   */
  setFocus() {
    return __async(this, null, function* () {
      yield componentFocusable(this);
      const {
        items
      } = this;
      const activeItem = items[items.length - 1];
      return activeItem?.setFocus();
    });
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    this.itemMutationObserver?.observe(this.el, {
      childList: true,
      subtree: true
    });
    this.updateFlowProps();
  }
  componentWillLoad() {
    return __async(this, null, function* () {
      setUpLoadableComponent(this);
    });
  }
  componentDidLoad() {
    setComponentLoaded(this);
  }
  disconnectedCallback() {
    this.itemMutationObserver?.disconnect();
  }
  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------
  handleItemBackClick(event) {
    return __async(this, null, function* () {
      if (event.defaultPrevented) {
        return;
      }
      yield this.back();
      return this.setFocus();
    });
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    const {
      flowDirection
    } = this;
    const frameDirectionClasses = {
      [CSS.frame]: true,
      [CSS.frameAdvancing]: flowDirection === "advancing",
      [CSS.frameRetreating]: flowDirection === "retreating"
    };
    return h("div", {
      key: "01fbee965d48cb54fa5bd1b53a3435538df84332",
      class: frameDirectionClasses
    }, h("slot", {
      key: "495880eceeb04387dd1352aa00337f037ab0636c"
    }));
  }
  get el() {
    return this;
  }
  static get style() {
    return CalciteFlowStyle0;
  }
}, [1, "calcite-flow", {
  "customItemSelectors": [1, "custom-item-selectors"],
  "flowDirection": [32],
  "itemCount": [32],
  "items": [32],
  "back": [64],
  "setFocus": [64]
}, [[0, "calciteFlowItemBack", "handleItemBackClick"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-flow"];
  components.forEach((tagName) => {
    switch (tagName) {
      case "calcite-flow":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, Flow);
        }
        break;
    }
  });
}
defineCustomElement$1();
var CalciteFlow = Flow;
var defineCustomElement = defineCustomElement$1;
export {
  CalciteFlow,
  defineCustomElement
};
/*! Bundled license information:

@esri/calcite-components/dist/components/calcite-flow.js:
  (*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
   * v2.13.2
   *)
*/
//# sourceMappingURL=calcite-flow-WGSZ7TX4.js.map
