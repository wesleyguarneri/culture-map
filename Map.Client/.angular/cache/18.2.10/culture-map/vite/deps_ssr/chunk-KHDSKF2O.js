import { createRequire } from 'module';const require = createRequire(import.meta.url);
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
import {
  defineCustomElement
} from "./chunk-JTD7ODRH.js";
import {
  getIconScale
} from "./chunk-SJNQ3G2B.js";
import {
  H,
  Host,
  h,
  proxyCustomElement
} from "./chunk-IAO6HACY.js";
import {
  __async
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@esri/calcite-components/dist/components/table-header.js
var CSS = {
  contentCell: "content-cell",
  numberCell: "number-cell",
  selectionCell: "selection-cell",
  bodyRow: "body-row",
  footerRow: "footer-row",
  heading: "heading",
  description: "description",
  multipleSelectionCell: "cell--multiple-selection",
  assistiveText: "assistive-text",
  active: "active",
  selectedCell: "selected-cell",
  lastCell: "last-cell",
  staticCell: "static-cell"
};
var ICONS = {
  checked: "check-square-f",
  indeterminate: "minus-square-f",
  unchecked: "square"
};
var tableHeaderCss = ":host{--calcite-internal-table-header-background:var(--calcite-table-header-background, var(--calcite-color-foreground-2));--calcite-internal-table-header-border-color:var(--calcite-table-border-color, var(--calcite-color-border-3));display:contents}:host([alignment=center]) th{text-align:center}:host([alignment=end]) th{text-align:end}.assistive-text{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}th{white-space:normal;text-align:start;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-1);font-size:var(--calcite-internal-table-cell-font-size);border-inline-end:1px solid var(--calcite-internal-table-header-border-color);border-block-end:1px solid var(--calcite-internal-table-header-border-color);padding-block:calc(var(--calcite-internal-table-cell-padding) * 1.5);padding-inline:var(--calcite-internal-table-cell-padding);background-color:var(--calcite-internal-table-header-background)}th:not(.static-cell){outline-color:transparent}th:not(.static-cell):not(.static-cell):focus-within{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}th:not(.center):not(.end).content-cell{vertical-align:top}th.center{vertical-align:middle}th.end.content-cell{vertical-align:bottom}th.body-row,th.footer-row{padding-block:var(--calcite-internal-table-cell-padding);border-block-end:0}th.footer-row{border-block-start:1px solid var(--calcite-internal-table-header-border-color)}th.last-cell{border-inline-end:0}.cell--multiple-selection{cursor:pointer;vertical-align:middle;color:var(--calcite-color-text-3)}.cell--multiple-selection:not(.end){vertical-align:middle}.selected-cell:not(.number-cell):not(.footer-cell){--calcite-internal-table-header-background:var(--calcite-color-foreground-current)}.number-cell,.selection-cell{color:var(--calcite-color-text-2);inline-size:2rem;min-inline-size:2rem}.selection-cell calcite-icon.active{color:var(--calcite-color-brand)}.number-cell calcite-icon,.selection-cell calcite-icon{margin-inline-start:auto;margin-inline-end:auto;vertical-align:middle}.heading{color:var(--calcite-color-text-1)}.description{color:var(--calcite-color-text-3);font-size:var(--calcite-internal-table-cell-font-size-secondary)}";
var CalciteTableHeaderStyle0 = tableHeaderCss;
var TableHeader = proxyCustomElement(class TableHeader2 extends H {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.onContainerBlur = () => {
      this.focused = false;
    };
    this.onContainerFocus = () => {
      this.focused = true;
    };
    this.alignment = "start";
    this.colSpan = void 0;
    this.description = void 0;
    this.heading = void 0;
    this.rowSpan = void 0;
    this.interactionMode = "interactive";
    this.lastCell = void 0;
    this.numberCell = false;
    this.parentRowAlignment = "start";
    this.parentRowIsSelected = void 0;
    this.parentRowType = void 0;
    this.positionInRow = void 0;
    this.scale = void 0;
    this.selectedRowCount = void 0;
    this.selectedRowCountLocalized = void 0;
    this.selectionCell = false;
    this.selectionMode = void 0;
    this.bodyRowCount = void 0;
    this.messages = void 0;
    this.messageOverrides = void 0;
    this.defaultMessages = void 0;
    this.focused = false;
    this.screenReaderText = "";
    this.effectiveLocale = "";
  }
  onSelectedChange() {
    this.updateScreenReaderText();
  }
  onMessagesChange() {
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  componentWillLoad() {
    return __async(this, null, function* () {
      setUpLoadableComponent(this);
      yield setUpMessages(this);
      this.updateScreenReaderText();
    });
  }
  componentDidLoad() {
    setComponentLoaded(this);
  }
  connectedCallback() {
    connectLocalized(this);
    connectMessages(this);
  }
  disconnectedCallback() {
    disconnectLocalized(this);
    disconnectMessages(this);
  }
  effectiveLocaleChange() {
    updateMessages(this, this.effectiveLocale);
  }
  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------
  /** Sets focus on the component. */
  setFocus() {
    return __async(this, null, function* () {
      yield componentFocusable(this);
      this.containerEl.focus();
    });
  }
  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------
  updateScreenReaderText() {
    let text = "";
    const sharedText = `${this.selectedRowCountLocalized} ${this.messages?.selected}`;
    if (this.numberCell) {
      text = this.messages?.rowNumber;
    } else if (this.selectionMode === "single") {
      text = `${this.messages?.selectionColumn}. ${sharedText}`;
    } else if (this.bodyRowCount === this.selectedRowCount) {
      text = `${this.messages?.selectionColumn}. ${this.messages?.all} ${sharedText} ${this.messages?.keyboardDeselectAll}`;
    } else {
      text = `${this.messages?.selectionColumn}. ${sharedText} ${this.messages?.keyboardSelectAll}`;
    }
    this.screenReaderText = text;
  }
  //--------------------------------------------------------------------------
  //
  //  Render Methods
  //
  //--------------------------------------------------------------------------
  render() {
    const scope = this.rowSpan ? "rowgroup" : this.colSpan ? "colgroup" : this.parentRowType === "body" ? "row" : "col";
    const checked = this.selectedRowCount === this.bodyRowCount;
    const indeterminate = this.selectedRowCount > 0;
    const selectionIcon = checked ? ICONS.checked : indeterminate ? ICONS.indeterminate : ICONS.unchecked;
    const staticCell = this.interactionMode === "static" && !this.selectionCell;
    return h(Host, {
      key: "447a58f1a2aa774bbe128ddd6f5d5c0a03bf7bc7"
    }, h("th", {
      key: "ee6cf5d248ed63e8212ffc5614d9c72cd4854bda",
      "aria-colindex": this.parentRowType === "head" ? this.positionInRow : void 0,
      class: {
        [CSS.bodyRow]: this.parentRowType === "body",
        [CSS.footerRow]: this.parentRowType === "foot",
        [CSS.contentCell]: !this.numberCell && !this.selectionCell,
        [CSS.numberCell]: this.numberCell,
        [CSS.selectionCell]: this.selectionCell,
        [CSS.selectedCell]: this.parentRowIsSelected,
        [CSS.multipleSelectionCell]: this.selectionMode === "multiple",
        [CSS.staticCell]: staticCell,
        [CSS.lastCell]: this.lastCell && (!this.rowSpan || this.colSpan && !!this.rowSpan),
        [this.parentRowAlignment]: this.parentRowAlignment === "center" || this.parentRowAlignment === "end"
      },
      colSpan: this.colSpan,
      onBlur: this.onContainerBlur,
      onFocus: this.onContainerFocus,
      ref: (el) => this.containerEl = el,
      role: this.parentRowType === "head" ? "columnheader" : "rowheader",
      rowSpan: this.rowSpan,
      scope,
      tabIndex: this.selectionCell ? 0 : staticCell ? -1 : 0
    }, this.heading && h("div", {
      key: "549f6ea3faaa3fe66565de1d67567bfaa38cad50",
      class: CSS.heading
    }, this.heading), this.description && h("div", {
      key: "27f7b8de72e154917efd88d9d7f9653df65b0459",
      class: CSS.description
    }, this.description), this.selectionCell && this.selectionMode === "multiple" && h("calcite-icon", {
      key: "41fb8e9cdc09f24c326d8edd70d600fee4920bc3",
      class: {
        [CSS.active]: indeterminate || checked
      },
      icon: selectionIcon,
      scale: getIconScale(this.scale)
    }), (this.selectionCell || this.numberCell) && h("span", {
      key: "119b6c72bd3cc17a19863841e02b04c2312e7984",
      "aria-live": this.focused ? "polite" : "off",
      class: CSS.assistiveText
    }, this.screenReaderText)));
  }
  static get assetsDirs() {
    return ["assets"];
  }
  get el() {
    return this;
  }
  static get watchers() {
    return {
      "selectedRowCount": ["onSelectedChange"],
      "selectedRowCountLocalized": ["onSelectedChange"],
      "messageOverrides": ["onMessagesChange"],
      "effectiveLocale": ["effectiveLocaleChange"]
    };
  }
  static get style() {
    return CalciteTableHeaderStyle0;
  }
}, [1, "calcite-table-header", {
  "alignment": [513],
  "colSpan": [514, "col-span"],
  "description": [513],
  "heading": [513],
  "rowSpan": [514, "row-span"],
  "interactionMode": [1, "interaction-mode"],
  "lastCell": [4, "last-cell"],
  "numberCell": [4, "number-cell"],
  "parentRowAlignment": [1, "parent-row-alignment"],
  "parentRowIsSelected": [4, "parent-row-is-selected"],
  "parentRowType": [1, "parent-row-type"],
  "positionInRow": [2, "position-in-row"],
  "scale": [1],
  "selectedRowCount": [2, "selected-row-count"],
  "selectedRowCountLocalized": [1, "selected-row-count-localized"],
  "selectionCell": [4, "selection-cell"],
  "selectionMode": [1, "selection-mode"],
  "bodyRowCount": [2, "body-row-count"],
  "messages": [1040],
  "messageOverrides": [1040],
  "defaultMessages": [32],
  "focused": [32],
  "screenReaderText": [32],
  "effectiveLocale": [32],
  "setFocus": [64]
}, void 0, {
  "selectedRowCount": ["onSelectedChange"],
  "selectedRowCountLocalized": ["onSelectedChange"],
  "messageOverrides": ["onMessagesChange"],
  "effectiveLocale": ["effectiveLocaleChange"]
}]);
function defineCustomElement2() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-table-header", "calcite-icon"];
  components.forEach((tagName) => {
    switch (tagName) {
      case "calcite-table-header":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, TableHeader);
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
  TableHeader,
  defineCustomElement2 as defineCustomElement
};
/*! Bundled license information:

@esri/calcite-components/dist/components/table-header.js:
  (*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
   * v2.13.2
   *)
*/
//# sourceMappingURL=chunk-KHDSKF2O.js.map
