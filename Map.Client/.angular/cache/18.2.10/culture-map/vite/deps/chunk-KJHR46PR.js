import {
  getElementDir
} from "./chunk-RGUNAV4Z.js";
import {
  CSS_UTILITY
} from "./chunk-RCBGISRX.js";
import {
  H,
  h,
  proxyCustomElement
} from "./chunk-2P72IR2Y.js";

// ../../../node_modules/@esri/calcite-components/dist/components/progress.js
var progressCss = ":host{position:relative;display:block;inline-size:100%}.track,.bar{position:absolute;inset-block-start:0px;block-size:2px}.track{z-index:var(--calcite-z-index);inline-size:100%;overflow:hidden;background-color:var(--calcite-progress-background-color, var(--calcite-color-border-3))}.bar{z-index:var(--calcite-z-index);background-color:var(--calcite-progress-fill-color, var(--calcite-color-brand))}@media (forced-colors: active){.track{background-color:highlightText}.bar{background-color:linkText}}.indeterminate{inline-size:20%;animation:looping-progress-bar-ani calc(var(--calcite-internal-animation-timing-medium) / var(--calcite-internal-duration-factor) * 11 / var(--calcite-internal-duration-factor)) linear infinite}.indeterminate.calcite--rtl{animation-name:looping-progress-bar-ani-rtl}.reversed{animation-direction:reverse}.text{padding-inline:0px;padding-block:1rem 0px;text-align:center;font-size:var(--calcite-font-size--2);line-height:1rem;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-progress-text-color, var(--calcite-color-text-2))}@keyframes looping-progress-bar-ani{0%{transform:translate3d(-100%, 0, 0)}50%{inline-size:40%}100%{transform:translate3d(600%, 0, 0)}}@keyframes looping-progress-bar-ani-rtl{0%{transform:translate3d(100%, 0, 0)}50%{inline-size:40%}100%{transform:translate3d(-600%, 0, 0)}}:host([hidden]){display:none}[hidden]{display:none}";
var CalciteProgressStyle0 = progressCss;
var Progress = proxyCustomElement(class Progress2 extends H {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.type = "determinate";
    this.value = 0;
    this.label = void 0;
    this.text = void 0;
    this.reversed = false;
  }
  render() {
    const isDeterminate = this.type === "determinate";
    const barStyles = isDeterminate ? {
      width: `${this.value * 100}%`
    } : {};
    const dir = getElementDir(this.el);
    return h("div", {
      key: "92597fefec948e4494425db28cd87bfad3cc76f8",
      "aria-label": this.label || this.text,
      "aria-valuemax": 1,
      "aria-valuemin": 0,
      "aria-valuenow": this.value,
      role: "progressbar"
    }, h("div", {
      key: "d2a8ec085909b4bd35f443d0e831d645fb159317",
      class: "track"
    }, h("div", {
      key: "2dd26e56a0f344d02f1b4068167f61d9da4d2cbd",
      class: {
        bar: true,
        indeterminate: this.type === "indeterminate",
        [CSS_UTILITY.rtl]: dir === "rtl",
        reversed: this.reversed
      },
      style: barStyles
    })), this.text ? h("div", {
      class: "text"
    }, this.text) : null);
  }
  get el() {
    return this;
  }
  static get style() {
    return CalciteProgressStyle0;
  }
}, [1, "calcite-progress", {
  "type": [513],
  "value": [2],
  "label": [1],
  "text": [1],
  "reversed": [516]
}]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-progress"];
  components.forEach((tagName) => {
    switch (tagName) {
      case "calcite-progress":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, Progress);
        }
        break;
    }
  });
}
defineCustomElement();

export {
  Progress,
  defineCustomElement
};
/*! Bundled license information:

@esri/calcite-components/dist/components/progress.js:
  (*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
   * v2.13.2
   *)
*/
//# sourceMappingURL=chunk-KJHR46PR.js.map
