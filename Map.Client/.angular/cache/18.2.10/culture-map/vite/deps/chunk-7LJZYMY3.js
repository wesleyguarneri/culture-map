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
  isActivationKey
} from "./chunk-EU6DW6GK.js";
import {
  defineCustomElement
} from "./chunk-AX5NQF7U.js";
import {
  isBrowser
} from "./chunk-23E6RT3O.js";
import {
  getIconScale
} from "./chunk-D25A7Z5T.js";
import {
  slotChangeHasAssignedElement,
  toAriaBoolean
} from "./chunk-RGUNAV4Z.js";
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

// ../../../node_modules/@esri/calcite-components/dist/components/chip.js
var CSS = {
  title: "title",
  close: "close",
  imageContainer: "image-container",
  chipIcon: "chip-icon",
  textSlotted: "text--slotted",
  container: "container",
  imageSlotted: "image--slotted",
  closable: "closable",
  multiple: "multiple",
  single: "single",
  selectable: "selectable",
  selectIcon: "select-icon",
  selectIconActive: "select-icon--active",
  nonInteractive: "non-interactive",
  isCircle: "is-circle",
  selected: "selected"
};
var SLOTS = {
  image: "image"
};
var ICONS = {
  close: "x",
  checkedSingle: "circle-f",
  uncheckedMultiple: "square",
  checkedMultiple: "check-square-f"
};
var chipCss = ":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:inline-flex;cursor:default;border-radius:var(--calcite-chip-corner-radius, 9999px)}:host([closed]){display:none}:host([appearance=outline]) .container,:host([appearance=outline-fill]) .container{--calcite-internal-chip-close-icon-color:var(--calcite-color-text-3);color:var(--calcite-chip-text-color, var(--calcite-color-text-1))}:host([appearance=outline]):host([kind=brand]) .container,:host([appearance=outline-fill]):host([kind=brand]) .container{border-color:var(--calcite-chip-border-color, var(--calcite-color-brand))}:host([appearance=outline]):host([kind=inverse]) .container,:host([appearance=outline-fill]):host([kind=inverse]) .container{border-color:var(--calcite-chip-border-color, var(--calcite-color-border-inverse))}:host([appearance=outline]):host([kind=neutral]) .container,:host([appearance=outline-fill]):host([kind=neutral]) .container{border-color:var(--calcite-chip-border-color, var(--calcite-color-border-1))}:host([appearance=outline]) .container{background-color:transparent}:host([appearance=outline-fill]) .container{background-color:var(--calcite-chip-background-color, var(--calcite-color-foreground-1))}:host([appearance=solid]) .container{border-color:transparent}:host([appearance=solid]):host([kind=brand]) .container,:host([appearance=solid]):host([kind=inverse]) .container{color:var(--calcite-chip-text-color, var(--calcite-color-text-inverse))}:host([appearance=solid]):host([kind=brand]) .close,:host([appearance=solid]):host([kind=inverse]) .close{outline-color:var(--calcite-color-text-inverse)}:host([appearance=solid]):host([kind=brand]) .container{background-color:var(--calcite-chip-background-color, var(--calcite-color-brand))}:host([appearance=solid]):host([kind=inverse]) .container{background-color:var(--calcite-chip-background-color, var(--calcite-color-inverse))}:host([appearance=solid]):host([kind=neutral]) .container{background-color:var(--calcite-chip-background-color, var(--calcite-color-foreground-2))}:host([kind=neutral]) .container{--calcite-internal-chip-close-icon-color:var(--calcite-color-text-3);color:var(--calcite-chip-text-color, var(--calcite-color-text-1))}:host([selected]) .select-icon{opacity:1}:host([scale=s]) .container{--calcite-internal-chip-block-size:1.5rem ;--calcite-internal-chip-container-space-x-end:0.25rem ;--calcite-internal-chip-container-space-x-start:0.25rem ;--calcite-internal-chip-font-size:var(--calcite-font-size--2);--calcite-internal-chip-icon-size:1rem ;--calcite-internal-chip-icon-space:0.25rem ;--calcite-internal-chip-image-size:1.25rem ;--calcite-internal-chip-title-space:0.25rem ;--calcite-internal-close-size:1rem }:host([scale=s]) .container:not(.closable).is-circle{--calcite-internal-chip-container-space-x-start:var(--calcite-spacing-px);--calcite-internal-chip-container-space-x-end:var(--calcite-spacing-px)}:host([scale=s]) .container.image--slotted:has(.chip-icon),:host([scale=s]) .container.image--slotted.text--slotted,:host([scale=s]) .container.image--slotted.closable{--calcite-internal-chip-image-space-x-end:0.25rem }:host([scale=s]) .container.image--slotted:not(.text--slotted,:has(.chip-icon)),:host([scale=s]) .container.image--slotted:not(.selectable){--calcite-internal-chip-container-space-x-start:var(--calcite-spacing-px)}:host([scale=s]) .container.selectable.single:not(.is-circle).image--slotted{--calcite-internal-chip-container-space-x-start:var(--calcite-spacing-px)}:host([scale=s]) .container.selectable.single:not(.is-circle).selected{--calcite-internal-chip-select-space-x-end:0.375rem ;--calcite-internal-chip-select-space-x-start:0}:host([scale=s]) .container.selectable.single:not(.is-circle).selected.image--slotted{--calcite-internal-chip-select-space-x-end:0.5rem ;--calcite-internal-chip-select-space-x-start:0.125rem }:host([scale=s]) .container.multiple:not(.is-circle){--calcite-internal-chip-container-space-x-start:0.25rem ;--calcite-internal-chip-select-space-x-end:0.25rem ;--calcite-internal-chip-select-space-x-start:0.25rem }:host([scale=s]) .container.multiple:not(.is-circle).image--slotted{--calcite-internal-chip-select-space-x-end:0.5rem ;--calcite-internal-chip-select-space-x-start:0.375rem ;--calcite-internal-chip-container-space-x-start:var(--calcite-spacing-px)}:host([scale=s]) .container.multiple:not(.is-circle).image--slotted:not(.text--slotted){--calcite-internal-chip-select-space-x-start:0.375rem }:host([scale=m]) .container{--calcite-internal-chip-block-size:2rem ;--calcite-internal-chip-container-space-x-end:0.375rem ;--calcite-internal-chip-container-space-x-start:0.375rem ;--calcite-internal-chip-font-size:var(--calcite-font-size--1);--calcite-internal-chip-icon-size:1.5rem ;--calcite-internal-chip-icon-space:0.375rem ;--calcite-internal-chip-image-size:1.5rem ;--calcite-internal-chip-title-space:0.375rem ;--calcite-internal-close-size:1.5rem }:host([scale=m]) .container:not(.closable).is-circle{--calcite-internal-chip-container-space-x-end:var(--calcite-spacing-px);--calcite-internal-chip-container-space-x-start:var(--calcite-spacing-px)}:host([scale=m]) .container.image--slotted:not(.is-circle){--calcite-internal-chip-container-space-x-start:0.25rem }:host([scale=m]) .container.image--slotted:has(.chip-icon),:host([scale=m]) .container.image--slotted.text--slotted,:host([scale=m]) .container.image--slotted.closable{--calcite-internal-chip-image-space-x-end:0.375rem }:host([scale=m]) .container.selectable.single:not(.is-circle).image--slotted{--calcite-internal-chip-container-space-x-start:0.25rem }:host([scale=m]) .container.selectable.single:not(.is-circle).selected{--calcite-internal-chip-select-space-x-end:var(--calcite-spacing-px);--calcite-internal-chip-select-space-x-start:0}:host([scale=m]) .container.selectable.single:not(.is-circle).selected.image--slotted{--calcite-internal-chip-select-space-x-end:0.25rem ;--calcite-internal-chip-select-space-x-start:0.375rem }:host([scale=m]) .container.multiple:not(.is-circle){--calcite-internal-chip-select-space-x-end:0.125rem ;--calcite-internal-chip-select-space-x-start:0.125rem }:host([scale=m]) .container.multiple:not(.is-circle).image--slotted{--calcite-internal-chip-select-space-x-end:0.5rem ;--calcite-internal-chip-select-space-x-start:0.25rem }:host([scale=m]) .container.closable:not(.is-circle){--calcite-internal-chip-container-space-x-end:0.25rem }:host([scale=l]) .container{--calcite-internal-chip-block-size:2.75rem ;--calcite-internal-chip-container-space-x-end:0.5rem ;--calcite-internal-chip-container-space-x-start:0.5rem ;--calcite-internal-chip-font-size:var(--calcite-font-size-0);--calcite-internal-chip-icon-size:2rem ;--calcite-internal-chip-icon-space:0.5rem ;--calcite-internal-chip-image-size:2rem ;--calcite-internal-chip-title-space:0.5rem ;--calcite-internal-close-size:2rem }:host([scale=l]) .container:not(.closable).is-circle{--calcite-internal-chip-container-space-x-end:0.25rem ;--calcite-internal-chip-container-space-x-start:0.25rem }:host([scale=l]) .container.image--slotted:not(.is-circle){--calcite-internal-chip-container-space-x-start:0.375rem }:host([scale=l]) .container.image--slotted:has(.chip-icon),:host([scale=l]) .container.image--slotted.text--slotted,:host([scale=l]) .container.image--slotted.closable{--calcite-internal-chip-image-space-x-end:0.5rem }:host([scale=l]) .container.selectable.single:not(.is-circle).image--slotted{--calcite-internal-chip-container-space-x-start:0.375rem }:host([scale=l]) .container.selectable.single:not(.is-circle).selected{--calcite-internal-chip-select-space-x-end:0.25rem ;--calcite-internal-chip-select-space-x-start:0}:host([scale=l]) .container.selectable.single:not(.is-circle).selected.image--slotted{--calcite-internal-chip-select-space-x-end:0.375rem ;--calcite-internal-chip-select-space-x-start:0.5rem }:host([scale=l]) .container.multiple:not(.is-circle){--calcite-internal-chip-container-space-x-start:0.5rem ;--calcite-internal-chip-select-space-x-end:0.25rem ;--calcite-internal-chip-select-space-x-start:0.25rem }:host([scale=l]) .container.multiple:not(.is-circle).image--slotted{--calcite-internal-chip-select-space-x-end:0.75rem }:host([scale=l]) .container.closable:not(.is-circle){--calcite-internal-chip-container-space-x-end:0.375rem }.container{box-sizing:border-box;display:inline-flex;block-size:100%;max-inline-size:100%;align-items:center;justify-content:center;font-weight:var(--calcite-font-weight-medium);outline-color:transparent;border-radius:var(--calcite-chip-corner-radius, 9999px);border-width:var(--calcite-border-width-sm);border-style:solid;font-size:var(--calcite-internal-chip-font-size, var(--calcite-font-size));padding-inline-start:var(--calcite-internal-chip-container-space-x-start);padding-inline-end:var(--calcite-internal-chip-container-space-x-end);block-size:var(--calcite-internal-chip-block-size, auto);inline-size:var(--calcite-internal-chip-inline-size, auto);min-inline-size:var(--calcite-internal-chip-block-size, auto)}.container:hover .select-icon--active{opacity:1}.container.selectable{cursor:pointer}.container:not(.non-interactive):focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}.container.text--slotted .title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.container:not(.text--slotted) .title,.container:not(.image--slotted) .image-container{display:none}.container.is-circle .chip-icon,.container.is-circle .image-container{padding:0}.title{padding-inline:var(--calcite-internal-chip-title-space)}.image-container{display:inline-flex;overflow:hidden;align-items:center;justify-content:center;pointer-events:none;block-size:var(--calcite-internal-chip-image-size, 1.5rem);inline-size:var(--calcite-internal-chip-image-size, 1.5rem);padding-inline-start:0;padding-inline-end:var(--calcite-internal-chip-image-space-x-end, 0)}.chip-icon{position:relative;margin-block:0px;display:inline-flex;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);color:var(--calcite-chip-icon-color, var(--calcite-chip-text-color, var(--calcite-icon-color, currentColor)));padding-inline:var(--calcite-internal-chip-icon-space, 0.375rem)}.select-icon{align-self:center;justify-content:center;align-items:center;display:flex;inset-block-start:-1px;position:absolute;visibility:hidden;inline-size:auto;opacity:0;transition:opacity 0.15s ease-in-out, inline-size 0.15s ease-in-out;color:var(--calcite-chip-select-icon-color, currentColor)}.select-icon.select-icon--active{position:relative;visibility:visible;opacity:0.5;color:var(--calcite-chip-select-icon-color-pressed, var(--calcite-chip-select-icon-color, currentColor))}.multiple .select-icon{display:flex;align-items:center;justify-content:center}.multiple .select-icon,.single .select-icon--active{padding-inline-start:var(--calcite-internal-chip-select-space-x-start);padding-inline-end:var(--calcite-internal-chip-select-space-x-end);block-size:var(--calcite-internal-chip-icon-size, 1.5rem);inline-size:var(--calcite-internal-chip-icon-size, 1.5rem)}slot[name=image]::slotted(*){display:flex;block-size:100%;inline-size:100%;overflow:hidden;border-radius:50%}.close{margin:0px;cursor:pointer;align-items:center;border-radius:50%;border-style:none;outline-color:transparent;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;background-color:var(--calcite-close-background-color, var(--calcite-color-transparent));-webkit-appearance:none;display:flex;align-content:center;justify-content:center;color:var(--calcite-chip-close-icon-color, var(--calcite-close-icon-color, var(--calcite-internal-chip-close-icon-color, var(--calcite-color-text-1))));block-size:var(--calcite-internal-close-size, 1.5rem);inline-size:var(--calcite-internal-close-size, 1.5rem);padding:0}.close:hover,.close:focus{background-color:var(--calcite-close-background-color-hover, var(--calcite-color-transparent-hover))}.close:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}.close:active{background-color:var(--calcite-close-background-color-press, var(--calcite-color-transparent-press))}.close calcite-icon{color:inherit}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([hidden]){display:none}[hidden]{display:none}";
var CalciteChipStyle0 = chipCss;
var Chip = proxyCustomElement(class Chip2 extends H {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteChipClose = createEvent(this, "calciteChipClose", 6);
    this.calciteChipSelect = createEvent(this, "calciteChipSelect", 6);
    this.calciteInternalChipKeyEvent = createEvent(this, "calciteInternalChipKeyEvent", 6);
    this.calciteInternalChipSelect = createEvent(this, "calciteInternalChipSelect", 6);
    this.calciteInternalSyncSelectedChips = createEvent(this, "calciteInternalSyncSelectedChips", 6);
    this.handleDefaultSlotChange = () => {
      this.updateHasText();
    };
    this.close = () => {
      this.calciteChipClose.emit();
      this.selected = false;
      this.closed = true;
    };
    this.closeButtonKeyDownHandler = (event) => {
      if (isActivationKey(event.key)) {
        event.preventDefault();
        this.close();
      }
    };
    this.handleSlotImageChange = (event) => {
      this.hasImage = slotChangeHasAssignedElement(event);
    };
    this.handleEmittingEvent = () => {
      if (this.interactive) {
        this.calciteChipSelect.emit();
      }
    };
    this.disabled = false;
    this.appearance = "solid";
    this.kind = "neutral";
    this.closable = false;
    this.icon = void 0;
    this.iconFlipRtl = false;
    this.scale = "m";
    this.label = void 0;
    this.value = void 0;
    this.closed = false;
    this.selectionMode = "none";
    this.selected = false;
    this.messageOverrides = void 0;
    this.messages = void 0;
    this.interactive = false;
    this.parentChipGroup = void 0;
    this.defaultMessages = void 0;
    this.effectiveLocale = void 0;
    this.hasText = false;
    this.hasImage = false;
  }
  watchSelected(selected) {
    if (this.selectionMode === "none") {
      return;
    }
    this.handleSelectionPropertyChange(selected);
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
    connectLocalized(this);
    connectMessages(this);
  }
  componentDidLoad() {
    setComponentLoaded(this);
    if (this.selectionMode !== "none" && this.interactive && this.selected) {
      this.handleSelectionPropertyChange(this.selected);
    }
  }
  componentDidRender() {
    updateHostInteraction(this);
  }
  disconnectedCallback() {
    disconnectLocalized(this);
    disconnectMessages(this);
  }
  componentWillLoad() {
    return __async(this, null, function* () {
      setUpLoadableComponent(this);
      if (isBrowser()) {
        yield setUpMessages(this);
        this.updateHasText();
      }
    });
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  keyDownHandler(event) {
    if (event.target === this.el) {
      switch (event.key) {
        case " ":
        case "Enter":
          this.handleEmittingEvent();
          event.preventDefault();
          break;
        case "ArrowRight":
        case "ArrowLeft":
        case "Home":
        case "End":
          this.calciteInternalChipKeyEvent.emit(event);
          event.preventDefault();
          break;
      }
    }
  }
  clickHandler() {
    if (!this.interactive && this.closable) {
      this.closeButtonEl.focus();
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
      if (!this.disabled && this.interactive) {
        this.containerEl?.focus();
      } else if (!this.disabled && this.closable) {
        this.closeButtonEl?.focus();
      }
    });
  }
  updateHasText() {
    this.hasText = this.el.textContent.trim().length > 0;
  }
  handleSelectionPropertyChange(selected) {
    if (this.selectionMode === "single") {
      this.calciteInternalSyncSelectedChips.emit();
    }
    const selectedInParent = this.parentChipGroup.selectedItems.includes(this.el);
    if (!selectedInParent && selected && this.selectionMode !== "multiple") {
      this.calciteInternalChipSelect.emit();
    }
    if (this.selectionMode !== "single") {
      this.calciteInternalSyncSelectedChips.emit();
    }
  }
  //--------------------------------------------------------------------------
  //
  //  Render Methods
  //
  //--------------------------------------------------------------------------
  renderChipImage() {
    return h("div", {
      class: CSS.imageContainer
    }, h("slot", {
      name: SLOTS.image,
      onSlotchange: this.handleSlotImageChange
    }));
  }
  renderSelectionIcon() {
    const icon = this.selectionMode === "multiple" ? this.selected ? ICONS.checkedMultiple : ICONS.uncheckedMultiple : this.selected ? ICONS.checkedSingle : void 0;
    return h("div", {
      class: {
        [CSS.selectIcon]: true,
        [CSS.selectIconActive]: this.selectionMode === "multiple" || this.selected
      }
    }, icon ? h("calcite-icon", {
      icon,
      scale: getIconScale(this.scale)
    }) : null);
  }
  renderCloseButton() {
    return h("button", {
      "aria-label": this.messages.dismissLabel,
      class: CSS.close,
      onClick: this.close,
      onKeyDown: this.closeButtonKeyDownHandler,
      ref: (el) => this.closeButtonEl = el,
      tabIndex: this.disabled ? -1 : 0
    }, h("calcite-icon", {
      icon: ICONS.close,
      scale: getIconScale(this.scale)
    }));
  }
  renderIcon() {
    return h("calcite-icon", {
      class: CSS.chipIcon,
      flipRtl: this.iconFlipRtl,
      icon: this.icon,
      scale: getIconScale(this.scale)
    });
  }
  render() {
    const {
      disabled
    } = this;
    const disableInteraction = disabled || !disabled && !this.interactive;
    const role = this.selectionMode === "multiple" && this.interactive ? "checkbox" : this.selectionMode !== "none" && this.interactive ? "radio" : this.interactive ? "button" : void 0;
    return h(Host, {
      key: "7feca8bad37627baabfc4abd25cf135e1e9f196b"
    }, h(InteractiveContainer, {
      key: "af2360b4b768ae8c643d52f4bdb9f5d282504114",
      disabled
    }, h("div", {
      key: "8d905c4ab20d271a211282b95ebcb2d305d76cb7",
      "aria-checked": this.selectionMode !== "none" && this.interactive ? toAriaBoolean(this.selected) : void 0,
      "aria-label": this.label,
      class: {
        [CSS.container]: true,
        [CSS.textSlotted]: this.hasText,
        [CSS.imageSlotted]: this.hasImage,
        [CSS.selectable]: this.selectionMode !== "none",
        [CSS.multiple]: this.selectionMode === "multiple",
        [CSS.single]: this.selectionMode === "single" || this.selectionMode === "single-persist",
        [CSS.selected]: this.selected,
        [CSS.closable]: this.closable,
        [CSS.nonInteractive]: !this.interactive,
        [CSS.isCircle]: !this.closable && !this.hasText && (!this.icon || !this.hasImage) && (this.selectionMode === "none" || !!this.selectionMode && this.selectionMode !== "multiple" && !this.selected)
      },
      onClick: this.handleEmittingEvent,
      ref: (el) => this.containerEl = el,
      role,
      tabIndex: disableInteraction ? -1 : 0
    }, this.selectionMode !== "none" && this.renderSelectionIcon(), this.renderChipImage(), this.icon && this.renderIcon(), h("span", {
      key: "dab6eae3f8330b85ffac4c7fe1b2fcbb53327196",
      class: CSS.title
    }, h("slot", {
      key: "72ba5bd0c7a97c30f766da119f419261aab24acb",
      onSlotchange: this.handleDefaultSlotChange
    })), this.closable && this.renderCloseButton())));
  }
  static get assetsDirs() {
    return ["assets"];
  }
  get el() {
    return this;
  }
  static get watchers() {
    return {
      "selected": ["watchSelected"],
      "messageOverrides": ["onMessagesChange"],
      "effectiveLocale": ["effectiveLocaleChange"]
    };
  }
  static get style() {
    return CalciteChipStyle0;
  }
}, [1, "calcite-chip", {
  "disabled": [516],
  "appearance": [513],
  "kind": [513],
  "closable": [516],
  "icon": [513],
  "iconFlipRtl": [516, "icon-flip-rtl"],
  "scale": [513],
  "label": [1],
  "value": [8],
  "closed": [1540],
  "selectionMode": [1, "selection-mode"],
  "selected": [1540],
  "messageOverrides": [1040],
  "messages": [1040],
  "interactive": [4],
  "parentChipGroup": [16],
  "defaultMessages": [32],
  "effectiveLocale": [32],
  "hasText": [32],
  "hasImage": [32],
  "setFocus": [64]
}, [[0, "keydown", "keyDownHandler"], [0, "click", "clickHandler"]], {
  "selected": ["watchSelected"],
  "messageOverrides": ["onMessagesChange"],
  "effectiveLocale": ["effectiveLocaleChange"]
}]);
function defineCustomElement2() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-chip", "calcite-icon"];
  components.forEach((tagName) => {
    switch (tagName) {
      case "calcite-chip":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, Chip);
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
  Chip,
  defineCustomElement2 as defineCustomElement
};
/*! Bundled license information:

@esri/calcite-components/dist/components/chip.js:
  (*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
   * v2.13.2
   *)
*/
//# sourceMappingURL=chunk-7LJZYMY3.js.map