import {
  InteractiveContainer,
  updateHostInteraction
} from "./chunk-46GG7UPH.js";
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
  toAriaBoolean
} from "./chunk-RGUNAV4Z.js";
import {
  H,
  createEvent,
  h,
  proxyCustomElement
} from "./chunk-2P72IR2Y.js";
import {
  __async
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@esri/calcite-components/dist/components/handle.js
var CSS = {
  handle: "handle",
  handleSelected: "handle--selected"
};
var ICONS = {
  drag: "drag"
};
var SUBSTITUTIONS = {
  itemLabel: "{itemLabel}",
  position: "{position}",
  total: "{total}"
};
var handleCss = ":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex}.handle{display:flex;align-items:center;justify-content:center;align-self:stretch;border-style:none;outline-color:transparent;color:var(--calcite-handle-icon-color, var(--calcite-color-border-input));background-color:var(--calcite-handle-background-color, transparent);padding-block:0.75rem;padding-inline:0.25rem;line-height:0}.handle calcite-icon{color:inherit}:host(:not([disabled])) .handle{cursor:move}:host(:not([disabled])) .handle:hover{color:var(--calcite-handle-icon-color-hover, var(--calcite-color-text-1));background-color:var(--calcite-handle-background-color-hover, var(--calcite-color-foreground-2))}:host(:not([disabled])) .handle:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          );color:var(--calcite-handle-icon-color-hover, var(--calcite-color-text-1))}:host(:not([disabled])) .handle--selected{color:var(--calcite-handle-icon-color-selected, var(--calcite-color-text-1));background-color:var(--calcite-handle-background-color-selected, var(--calcite-color-foreground-3))}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([hidden]){display:none}[hidden]{display:none}";
var CalciteHandleStyle0 = handleCss;
var Handle = proxyCustomElement(class Handle2 extends H {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteHandleChange = createEvent(this, "calciteHandleChange", 6);
    this.calciteHandleNudge = createEvent(this, "calciteHandleNudge", 6);
    this.calciteInternalAssistiveTextChange = createEvent(this, "calciteInternalAssistiveTextChange", 6);
    this.handleKeyDown = (event) => {
      if (this.disabled) {
        return;
      }
      switch (event.key) {
        case " ":
          this.selected = !this.selected;
          this.calciteHandleChange.emit();
          event.preventDefault();
          break;
        case "ArrowUp":
          if (!this.selected) {
            return;
          }
          event.preventDefault();
          this.calciteHandleNudge.emit({
            direction: "up"
          });
          break;
        case "ArrowDown":
          if (!this.selected) {
            return;
          }
          event.preventDefault();
          this.calciteHandleNudge.emit({
            direction: "down"
          });
          break;
      }
    };
    this.handleBlur = () => {
      if (this.blurUnselectDisabled || this.disabled) {
        return;
      }
      if (this.selected) {
        this.selected = false;
        this.calciteHandleChange.emit();
      }
    };
    this.selected = false;
    this.disabled = false;
    this.dragHandle = void 0;
    this.messages = void 0;
    this.setPosition = void 0;
    this.setSize = void 0;
    this.label = void 0;
    this.blurUnselectDisabled = false;
    this.messageOverrides = void 0;
    this.effectiveLocale = void 0;
    this.defaultMessages = void 0;
  }
  handleAriaTextChange() {
    const message = this.getAriaText("live");
    if (message) {
      this.calciteInternalAssistiveTextChange.emit({
        message
      });
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
    connectMessages(this);
    connectLocalized(this);
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
  componentDidRender() {
    updateHostInteraction(this);
  }
  disconnectedCallback() {
    disconnectMessages(this);
    disconnectLocalized(this);
  }
  effectiveLocaleChange() {
    updateMessages(this, this.effectiveLocale);
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
      this.handleButton?.focus();
    });
  }
  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------
  getTooltip() {
    const {
      label,
      messages
    } = this;
    if (!messages) {
      return "";
    }
    if (!label) {
      return messages.dragHandleUntitled;
    }
    return messages.dragHandle.replace(SUBSTITUTIONS.itemLabel, label);
  }
  getAriaText(type) {
    const {
      setPosition,
      setSize,
      label,
      messages,
      selected
    } = this;
    if (!messages || !label || typeof setSize !== "number" || typeof setPosition !== "number") {
      return null;
    }
    const text = type === "label" ? selected ? messages.dragHandleChange : messages.dragHandleIdle : selected ? messages.dragHandleActive : messages.dragHandleCommit;
    const replacePosition = text.replace(SUBSTITUTIONS.position, setPosition.toString());
    const replaceLabel = replacePosition.replace(SUBSTITUTIONS.itemLabel, label);
    return replaceLabel.replace(SUBSTITUTIONS.total, setSize.toString());
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    return h(InteractiveContainer, {
      key: "1a694de393421691c83e7265850275c217ef7ffe",
      disabled: this.disabled
    }, h("span", {
      key: "82ff692c15c2d9294ceb814b3f7f06bb4d8ff0e0",
      "aria-checked": this.disabled ? null : toAriaBoolean(this.selected),
      "aria-disabled": this.disabled ? toAriaBoolean(this.disabled) : null,
      "aria-label": this.disabled ? null : this.getAriaText("label"),
      class: {
        [CSS.handle]: true,
        [CSS.handleSelected]: !this.disabled && this.selected
      },
      onBlur: this.handleBlur,
      onKeyDown: this.handleKeyDown,
      ref: (el) => {
        this.handleButton = el;
      },
      // role of radio is being applied to allow space key to select in screen readers
      role: "radio",
      tabIndex: this.disabled ? null : 0,
      title: this.getTooltip()
    }, h("calcite-icon", {
      key: "25862a953826aea2d594507157aaffc21d07001c",
      icon: ICONS.drag,
      scale: "s"
    })));
  }
  static get assetsDirs() {
    return ["assets"];
  }
  get el() {
    return this;
  }
  static get watchers() {
    return {
      "messages": ["handleAriaTextChange"],
      "label": ["handleAriaTextChange"],
      "selected": ["handleAriaTextChange"],
      "setPosition": ["handleAriaTextChange"],
      "setSize": ["handleAriaTextChange"],
      "messageOverrides": ["onMessagesChange"],
      "effectiveLocale": ["effectiveLocaleChange"]
    };
  }
  static get style() {
    return CalciteHandleStyle0;
  }
}, [1, "calcite-handle", {
  "selected": [1540],
  "disabled": [516],
  "dragHandle": [513, "drag-handle"],
  "messages": [1040],
  "setPosition": [2, "set-position"],
  "setSize": [2, "set-size"],
  "label": [1],
  "blurUnselectDisabled": [4, "blur-unselect-disabled"],
  "messageOverrides": [1040],
  "effectiveLocale": [32],
  "defaultMessages": [32],
  "setFocus": [64]
}, void 0, {
  "messages": ["handleAriaTextChange"],
  "label": ["handleAriaTextChange"],
  "selected": ["handleAriaTextChange"],
  "setPosition": ["handleAriaTextChange"],
  "setSize": ["handleAriaTextChange"],
  "messageOverrides": ["onMessagesChange"],
  "effectiveLocale": ["effectiveLocaleChange"]
}]);
function defineCustomElement2() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-handle", "calcite-icon"];
  components.forEach((tagName) => {
    switch (tagName) {
      case "calcite-handle":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, Handle);
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
  defineCustomElement2 as defineCustomElement
};
/*! Bundled license information:

@esri/calcite-components/dist/components/handle.js:
  (*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
   * v2.13.2
   *)
*/
//# sourceMappingURL=chunk-OXMSYSRN.js.map
