import {
  defineCustomElement as defineCustomElement4
} from "./chunk-7LJZYMY3.js";
import {
  defineCustomElement as defineCustomElement3
} from "./chunk-WCWFTO6Y.js";
import "./chunk-HIXQ76MY.js";
import "./chunk-46GG7UPH.js";
import "./chunk-PBDQTCSC.js";
import {
  defineCustomElement as defineCustomElement2
} from "./chunk-URKUSNVW.js";
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
  disconnectLocalized,
  numberStringFormatter
} from "./chunk-B3F3MSZ2.js";
import "./chunk-EU6DW6GK.js";
import {
  defineCustomElement
} from "./chunk-AX5NQF7U.js";
import {
  createObserver
} from "./chunk-JOYMUIN5.js";
import {
  getUserAgentString
} from "./chunk-23E6RT3O.js";
import {
  getIconScale
} from "./chunk-D25A7Z5T.js";
import "./chunk-RGUNAV4Z.js";
import "./chunk-RCBGISRX.js";
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

// ../../../node_modules/@esri/calcite-components/dist/components/responsive.js
var calciteContainerSizeWidthXxs = {
  "min": "0",
  "max": "320px"
};
var calciteContainerSizeWidthXs = {
  "min": "321px",
  "max": "476px"
};
var calciteContainerSizeWidthSm = {
  "min": "477px",
  "max": "768px"
};
var calciteContainerSizeWidthMd = {
  "min": "769px",
  "max": "1152px"
};
var calciteContainerSizeWidthLg = {
  "min": "1153px",
  "max": "1440px"
};
var breakpoints = {
  width: {
    large: cssLengthToNumber(calciteContainerSizeWidthLg.max),
    medium: cssLengthToNumber(calciteContainerSizeWidthMd.max),
    small: cssLengthToNumber(calciteContainerSizeWidthSm.max),
    xsmall: cssLengthToNumber(calciteContainerSizeWidthXs.max),
    xxsmall: cssLengthToNumber(calciteContainerSizeWidthXxs.max)
  }
};
function cssLengthToNumber(length) {
  return parseInt(length);
}

// ../../../node_modules/@esri/calcite-components/dist/components/pagination.js
var CSS = {
  list: "list",
  listItem: "list-item",
  page: "page",
  selected: "selected",
  chevron: "chevron",
  disabled: "disabled",
  ellipsis: "ellipsis"
};
var ICONS = {
  next: "chevron-right",
  previous: "chevron-left",
  first: "chevron-start",
  last: "chevron-end"
};
var paginationCss = ":host{display:flex;writing-mode:horizontal-tb}.list{margin:0px;display:flex;list-style-type:none;padding:0px}.list-item{margin:0px;display:flex;padding:0px}:host([scale=s]) .chevron,:host([scale=s]) .page,:host([scale=s]) .ellipsis{block-size:1.5rem;padding-inline:0.25rem;font-size:var(--calcite-font-size--2);line-height:1rem;min-inline-size:1.5rem}:host([scale=m]) .chevron,:host([scale=m]) .page,:host([scale=m]) .ellipsis{block-size:2rem;padding-inline:0.5rem;font-size:var(--calcite-font-size--1);line-height:1rem;min-inline-size:2rem}:host([scale=l]) .chevron,:host([scale=l]) .page,:host([scale=l]) .ellipsis{block-size:2.75rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;min-inline-size:2.75rem}:host([scale=l]) .chevron{padding-inline:0.625rem}:host([scale=l]) .page,:host([scale=l]) .ellipsis{padding-inline:0.75rem}:host button{outline-color:transparent}:host button:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}.chevron,.page,.ellipsis{margin:0px;box-sizing:border-box;display:flex;align-items:center;justify-content:center;border-style:none;--tw-border-opacity:0;background-color:transparent;padding:0px;vertical-align:baseline;font-family:inherit;font-size:var(--calcite-font-size-0);line-height:1.25rem;color:var(--calcite-color-text-3)}.chevron,.page{cursor:pointer;border-block:2px solid transparent}.chevron:hover,.page:hover{color:var(--calcite-color-text-1);transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.page:hover{border-block-end-color:var(--calcite-color-border-2)}.page.selected{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-1);border-block-end-color:var(--calcite-color-brand)}.chevron:hover{background-color:var(--calcite-color-foreground-2);color:var(--calcite-color-brand)}.chevron:active{background-color:var(--calcite-color-foreground-3)}.chevron.disabled{pointer-events:none;background-color:transparent}.chevron.disabled>calcite-icon{opacity:var(--calcite-opacity-disabled)}:host([hidden]){display:none}[hidden]{display:none}";
var CalcitePaginationStyle0 = paginationCss;
var firstAndLastPageCount = 2;
var ellipsisCount = 2;
var maxItemBreakpoints = {
  large: 11,
  medium: 9,
  small: 7,
  xsmall: 5,
  xxsmall: 1
};
var Pagination = proxyCustomElement(class Pagination2 extends H {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calcitePaginationChange = createEvent(this, "calcitePaginationChange", 6);
    this.resizeObserver = createObserver("resize", (entries) => entries.forEach(this.resizeHandler));
    this.resizeHandler = ({
      contentRect: {
        width
      }
    }) => this.setMaxItemsToBreakpoint(width);
    this.firstClicked = () => {
      this.startItem = 1;
      this.emitUpdate();
    };
    this.lastClicked = () => {
      this.startItem = this.lastStartItem;
      this.emitUpdate();
    };
    this.previousClicked = () => __async(this, null, function* () {
      yield this.previousPage();
      this.emitUpdate();
    });
    this.nextClicked = () => __async(this, null, function* () {
      yield this.nextPage();
      this.emitUpdate();
    });
    this.handlePageClick = (event) => {
      const target = event.target;
      this.startItem = parseInt(target.value, 10);
      this.emitUpdate();
    };
    this.groupSeparator = false;
    this.messages = void 0;
    this.messageOverrides = void 0;
    this.numberingSystem = void 0;
    this.pageSize = 20;
    this.scale = "m";
    this.startItem = 1;
    this.totalItems = 0;
    this.defaultMessages = void 0;
    this.effectiveLocale = "";
    this.maxItems = maxItemBreakpoints.xxsmall;
    this.totalPages = void 0;
    this.lastStartItem = void 0;
    this.isXXSmall = void 0;
  }
  onMessagesChange() {
  }
  handleTotalPages() {
    if (this.pageSize < 1) {
      this.pageSize = 1;
    }
    this.totalPages = this.totalItems / this.pageSize;
  }
  effectiveLocaleChange() {
    updateMessages(this, this.effectiveLocale);
    numberStringFormatter.numberFormatOptions = {
      locale: this.effectiveLocale,
      numberingSystem: this.numberingSystem,
      useGrouping: this.groupSeparator
    };
  }
  handleLastStartItemChange() {
    const {
      totalItems,
      pageSize,
      totalPages
    } = this;
    this.lastStartItem = (totalItems % pageSize === 0 ? totalItems - pageSize : Math.floor(totalPages) * pageSize) + 1;
  }
  handleIsXXSmall() {
    this.isXXSmall = this.maxItems === maxItemBreakpoints.xxsmall;
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    connectLocalized(this);
    connectMessages(this);
    this.resizeObserver?.observe(this.el);
  }
  componentWillLoad() {
    return __async(this, null, function* () {
      yield setUpMessages(this);
      setUpLoadableComponent(this);
      this.handleTotalPages();
      this.handleLastStartItemChange();
      this.handleIsXXSmall();
    });
  }
  componentDidLoad() {
    setComponentLoaded(this);
    this.setMaxItemsToBreakpoint(this.el.clientWidth);
  }
  disconnectedCallback() {
    disconnectLocalized(this);
    disconnectMessages(this);
    this.resizeObserver?.disconnect();
  }
  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------
  /** Sets focus on the component's first focusable element. */
  setFocus() {
    return __async(this, null, function* () {
      yield componentFocusable(this);
      this.el.focus();
    });
  }
  /** Go to the next page of results. */
  nextPage() {
    return __async(this, null, function* () {
      this.startItem = Math.min(this.lastStartItem, this.startItem + this.pageSize);
    });
  }
  /** Go to the previous page of results. */
  previousPage() {
    return __async(this, null, function* () {
      this.startItem = Math.max(1, this.startItem - this.pageSize);
    });
  }
  /**
   * Set a specified page as active.
   *
   * @param page
   */
  goTo(page) {
    return __async(this, null, function* () {
      switch (page) {
        case "start":
          this.startItem = 1;
          break;
        case "end":
          this.startItem = this.lastStartItem;
          break;
        default: {
          if (page >= Math.ceil(this.totalPages)) {
            this.startItem = this.lastStartItem;
          } else if (page <= 0) {
            this.startItem = 1;
          } else {
            this.startItem = (page - 1) * this.pageSize + 1;
          }
        }
      }
    });
  }
  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------
  setMaxItemsToBreakpoint(width) {
    if (!breakpoints || !width) {
      return;
    }
    if (width >= breakpoints.width.medium) {
      this.maxItems = maxItemBreakpoints.large;
      return;
    }
    if (width >= breakpoints.width.small) {
      this.maxItems = maxItemBreakpoints.medium;
      return;
    }
    if (width >= breakpoints.width.xsmall) {
      this.maxItems = maxItemBreakpoints.small;
      return;
    }
    if (width >= breakpoints.width.xxsmall) {
      this.maxItems = maxItemBreakpoints.xsmall;
      return;
    }
    this.maxItems = maxItemBreakpoints.xxsmall;
  }
  showStartEllipsis() {
    return this.totalPages > this.maxItems && Math.floor(this.startItem / this.pageSize) > this.maxItems - firstAndLastPageCount - ellipsisCount;
  }
  showEndEllipsis() {
    return this.totalPages > this.maxItems && (this.totalItems - this.startItem) / this.pageSize > this.maxItems - firstAndLastPageCount - (ellipsisCount - 1);
  }
  emitUpdate() {
    this.calcitePaginationChange.emit();
  }
  //--------------------------------------------------------------------------
  //
  //  Render Methods
  //
  //--------------------------------------------------------------------------
  renderEllipsis(type) {
    return h("span", {
      class: CSS.ellipsis,
      "data-test-ellipsis": type,
      key: type
    }, "…");
  }
  renderItems() {
    const {
      totalItems,
      pageSize,
      startItem,
      maxItems,
      totalPages,
      lastStartItem,
      isXXSmall
    } = this;
    const items = [];
    if (isXXSmall) {
      items.push(this.renderPage(startItem));
      return items;
    }
    const renderFirstPage = totalItems > pageSize;
    const renderStartEllipsis = this.showStartEllipsis();
    const renderEndEllipsis = this.showEndEllipsis();
    if (renderFirstPage) {
      items.push(this.renderPage(1));
    }
    if (renderStartEllipsis) {
      items.push(this.renderEllipsis("start"));
    }
    const remainingItems = maxItems - firstAndLastPageCount - (renderEndEllipsis ? 1 : 0) - (renderStartEllipsis ? 1 : 0);
    let end;
    let nextStart;
    if (totalPages - 1 <= remainingItems) {
      nextStart = 1 + pageSize;
      end = lastStartItem - pageSize;
    } else {
      if (startItem / pageSize < remainingItems) {
        nextStart = 1 + pageSize;
        end = 1 + remainingItems * pageSize;
      } else {
        if (startItem + remainingItems * pageSize >= totalItems) {
          nextStart = lastStartItem - remainingItems * pageSize;
          end = lastStartItem - pageSize;
        } else {
          nextStart = startItem - pageSize * ((remainingItems - 1) / 2);
          end = startItem + pageSize * ((remainingItems - 1) / 2);
        }
      }
    }
    for (let i = 0; i < remainingItems && nextStart <= end; i++) {
      items.push(this.renderPage(nextStart));
      nextStart = nextStart + pageSize;
    }
    if (renderEndEllipsis) {
      items.push(this.renderEllipsis("end"));
    }
    items.push(this.renderPage(lastStartItem));
    return items;
  }
  renderPage(start) {
    const {
      pageSize
    } = this;
    const page = Math.floor(start / pageSize) + (pageSize === 1 ? 0 : 1);
    numberStringFormatter.numberFormatOptions = {
      locale: this.effectiveLocale,
      numberingSystem: this.numberingSystem,
      useGrouping: this.groupSeparator
    };
    const displayedPage = numberStringFormatter.localize(page.toString());
    const selected = start === this.startItem;
    return h("li", {
      class: CSS.listItem
    }, h("button", {
      "aria-current": selected ? "page" : "false",
      class: {
        [CSS.page]: true,
        [CSS.selected]: selected
      },
      onClick: this.handlePageClick,
      value: start
    }, displayedPage));
  }
  renderPreviousChevron() {
    const {
      pageSize,
      startItem,
      messages
    } = this;
    const disabled = pageSize === 1 ? startItem <= pageSize : startItem < pageSize;
    return h("button", {
      "aria-label": messages.previous,
      class: {
        [CSS.chevron]: true,
        [CSS.disabled]: disabled
      },
      "data-test-chevron": "previous",
      disabled,
      key: "previous",
      onClick: this.previousClicked
    }, h("calcite-icon", {
      flipRtl: true,
      icon: ICONS.previous,
      scale: getIconScale(this.scale)
    }));
  }
  renderNextChevron() {
    const {
      totalItems,
      pageSize,
      startItem,
      messages
    } = this;
    const disabled = pageSize === 1 ? startItem + pageSize > totalItems : startItem + pageSize > totalItems;
    return h("button", {
      "aria-label": messages.next,
      class: {
        [CSS.chevron]: true,
        [CSS.disabled]: disabled
      },
      "data-test-chevron": "next",
      disabled,
      key: "next-button",
      onClick: this.nextClicked
    }, h("calcite-icon", {
      flipRtl: true,
      icon: ICONS.next,
      scale: getIconScale(this.scale)
    }));
  }
  renderFirstChevron() {
    const {
      messages,
      startItem,
      isXXSmall
    } = this;
    const disabled = startItem === 1;
    return isXXSmall ? h("button", {
      "aria-label": messages.first,
      class: {
        [CSS.chevron]: true,
        [CSS.disabled]: disabled
      },
      disabled,
      key: "first-button",
      onClick: this.firstClicked
    }, h("calcite-icon", {
      flipRtl: true,
      icon: ICONS.first,
      scale: getIconScale(this.scale)
    })) : null;
  }
  renderLastChevron() {
    const {
      messages,
      startItem,
      isXXSmall,
      lastStartItem
    } = this;
    const disabled = startItem === lastStartItem;
    return isXXSmall ? h("button", {
      "aria-label": messages.last,
      class: {
        [CSS.chevron]: true,
        [CSS.disabled]: disabled
      },
      disabled,
      key: "last-button",
      onClick: this.lastClicked
    }, h("calcite-icon", {
      flipRtl: true,
      icon: ICONS.last,
      scale: getIconScale(this.scale)
    })) : null;
  }
  render() {
    return h("ul", {
      key: "bdbae7054c4304e91f36809a1131a72551a49679",
      class: CSS.list
    }, h("li", {
      key: "14844fcc6ece08896432cfa31c85f84a9de8d992",
      class: CSS.listItem
    }, this.renderFirstChevron()), h("li", {
      key: "3146daaad99dd8e05637788ea6bfe0cc89b32ac7",
      class: CSS.listItem
    }, this.renderPreviousChevron()), this.renderItems(), h("li", {
      key: "6adbec5c7e7e11aec1937a4d188066f1c999d20c",
      class: CSS.listItem
    }, this.renderNextChevron()), h("li", {
      key: "3574dbf73b6cbbc9048c18a93d2990a649040a41",
      class: CSS.listItem
    }, this.renderLastChevron()));
  }
  static get delegatesFocus() {
    return true;
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
      "totalItems": ["handleTotalPages", "handleLastStartItemChange"],
      "pageSize": ["handleTotalPages", "handleLastStartItemChange"],
      "effectiveLocale": ["effectiveLocaleChange"],
      "totalPages": ["handleLastStartItemChange"],
      "maxItems": ["handleIsXXSmall"]
    };
  }
  static get style() {
    return CalcitePaginationStyle0;
  }
}, [17, "calcite-pagination", {
  "groupSeparator": [516, "group-separator"],
  "messages": [1040],
  "messageOverrides": [1040],
  "numberingSystem": [1, "numbering-system"],
  "pageSize": [1538, "page-size"],
  "scale": [513],
  "startItem": [1538, "start-item"],
  "totalItems": [514, "total-items"],
  "defaultMessages": [32],
  "effectiveLocale": [32],
  "maxItems": [32],
  "totalPages": [32],
  "lastStartItem": [32],
  "isXXSmall": [32],
  "setFocus": [64],
  "nextPage": [64],
  "previousPage": [64],
  "goTo": [64]
}, void 0, {
  "messageOverrides": ["onMessagesChange"],
  "totalItems": ["handleTotalPages", "handleLastStartItemChange"],
  "pageSize": ["handleTotalPages", "handleLastStartItemChange"],
  "effectiveLocale": ["effectiveLocaleChange"],
  "totalPages": ["handleLastStartItemChange"],
  "maxItems": ["handleIsXXSmall"]
}]);
function defineCustomElement5() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-pagination", "calcite-icon"];
  components.forEach((tagName) => {
    switch (tagName) {
      case "calcite-pagination":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, Pagination);
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
defineCustomElement5();

// ../../../node_modules/@esri/calcite-components/dist/components/calcite-table.js
var CSS2 = {
  bordered: "bordered",
  striped: "striped",
  selectionArea: "selection-area",
  paginationArea: "pagination-area",
  container: "container",
  tableContainer: "table-container",
  tableFixed: "table--fixed",
  assistiveText: "assistive-text",
  selectionActions: "selection-actions"
};
var SLOTS = {
  selectionActions: "selection-actions",
  tableHeader: "table-header",
  tableFooter: "table-footer"
};
var tableCss = ":host([scale=s]){--calcite-internal-table-cell-padding:0.25rem;--calcite-internal-table-cell-font-size:var(--calcite-font-size--2);--calcite-internal-table-cell-font-size-secondary:var(--calcite-font-size--3)}:host([scale=m]){--calcite-internal-table-cell-padding:0.5rem;--calcite-internal-table-cell-font-size:var(--calcite-font-size--1);--calcite-internal-table-cell-font-size-secondary:var(--calcite-font-size--2)}:host([scale=l]){--calcite-internal-table-cell-padding:1rem;--calcite-internal-table-cell-font-size:var(--calcite-font-size-0);--calcite-internal-table-cell-font-size-secondary:var(--calcite-font-size--1)}:host{display:flex}.container{display:flex;block-size:100%;inline-size:100%;flex-direction:column}.table-container{overflow:auto;white-space:nowrap;border:1px solid var(--calcite-color-border-3)}.assistive-text{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}table{inline-size:100%;border-collapse:collapse;overflow-x:scroll}.table--fixed{table-layout:fixed}.bordered ::slotted(calcite-table-row){--calcite-table-row-border-color:var(--calcite-color-border-3)}.striped ::slotted(calcite-table-row:nth-child(2n+1)){--calcite-table-row-background:var(--calcite-color-foreground-2)}.selection-actions{display:flex;flex-direction:row;margin-inline-start:auto}.selection-area{display:flex;flex-direction:row;align-items:center;padding-block:var(--calcite-internal-table-cell-padding)}.selection-area calcite-chip:last-of-type{margin-inline-end:0.5rem}.selection-area calcite-chip:last-of-type:not(:first-of-type){margin-inline-start:0.5rem}.selection-area calcite-button{margin-inline-end:1rem}.pagination-area{display:flex;inline-size:100%;flex-direction:row;justify-content:center;padding-block:var(--calcite-internal-table-cell-padding)}calcite-pagination{flex:1;justify-content:center}:host([hidden]){display:none}[hidden]{display:none}";
var CalciteTableStyle0 = tableCss;
var Table = proxyCustomElement(class Table2 extends H {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteTableSelect = createEvent(this, "calciteTableSelect", 6);
    this.calciteTablePageChange = createEvent(this, "calciteTablePageChange", 6);
    this.calciteInternalTableRowFocusChange = createEvent(this, "calciteInternalTableRowFocusChange", 6);
    this.getSlottedRows = (el) => {
      return el?.assignedElements({
        flatten: true
      })?.filter((el2) => el2?.matches("calcite-table-row"));
    };
    this.updateRows = () => {
      const headRows = this.getSlottedRows(this.tableHeadSlotEl) || [];
      const bodyRows = this.getSlottedRows(this.tableBodySlotEl) || [];
      const footRows = this.getSlottedRows(this.tableFootSlotEl) || [];
      const allRows = [...headRows, ...bodyRows, ...footRows];
      headRows?.forEach((row) => {
        const position = headRows?.indexOf(row);
        row.rowType = "head";
        row.positionSection = position;
        row.positionSectionLocalized = this.localizeNumber((position + 1).toString());
      });
      bodyRows?.forEach((row) => {
        const position = bodyRows?.indexOf(row);
        row.rowType = "body";
        row.positionSection = position;
        row.positionSectionLocalized = this.localizeNumber((position + 1).toString());
      });
      footRows?.forEach((row) => {
        const position = footRows?.indexOf(row);
        row.rowType = "foot";
        row.positionSection = position;
        row.positionSectionLocalized = this.localizeNumber((position + 1).toString());
      });
      allRows?.forEach((row) => {
        row.interactionMode = this.interactionMode;
        row.selectionMode = this.selectionMode;
        row.bodyRowCount = bodyRows?.length;
        row.positionAll = allRows?.indexOf(row);
        row.numbered = this.numbered;
        row.scale = this.scale;
        row.readCellContentsToAT = this.readCellContentsToAT;
        row.lastVisibleRow = allRows?.indexOf(row) === allRows.length - 1;
      });
      const colCount = headRows[0]?.cellCount || headRows[0]?.querySelectorAll("calcite-table-header")?.length;
      this.colCount = colCount;
      this.headRows = headRows;
      this.bodyRows = bodyRows;
      this.footRows = footRows;
      this.allRows = allRows;
      this.updateSelectedItems();
      this.paginateRows();
    };
    this.handlePaginationChange = () => {
      const requestedItem = this.paginationEl?.startItem;
      this.pageStartRow = requestedItem || 1;
      this.calciteTablePageChange.emit();
      this.updateRows();
    };
    this.paginateRows = () => {
      this.bodyRows?.forEach((row) => {
        const rowPos = row.positionSection + 1;
        const inView = rowPos >= this.pageStartRow && rowPos < this.pageStartRow + this.pageSize;
        row.hidden = this.pageSize > 0 && !inView && !this.footRows.includes(row);
        row.lastVisibleRow = rowPos === this.pageStartRow + this.pageSize - 1 || rowPos === this.bodyRows.length;
      });
    };
    this.updateSelectedItems = (emit) => {
      const selectedItems = this.bodyRows?.filter((el) => el.selected);
      this.selectedItems = selectedItems;
      this.selectedCount = selectedItems?.length;
      this.allRows?.forEach((row) => {
        row.selectedRowCount = this.selectedCount;
        row.selectedRowCountLocalized = this.localizeNumber(this.selectedCount);
      });
      if (emit) {
        this.calciteTableSelect.emit();
      }
    };
    this.handleDeselectAllRows = () => {
      this.bodyRows?.forEach((row) => {
        row.selected = false;
      });
      this.updateSelectedItems(true);
    };
    this.setSelectedItems = (elToMatch) => {
      this.bodyRows?.forEach((el) => {
        if (elToMatch?.rowType === "head") {
          el.selected = this.selectedCount !== this.bodyRows?.length;
        } else {
          el.selected = elToMatch === el ? !el.selected : this.selectionMode === "multiple" ? el.selected : false;
        }
      });
      this.updateSelectedItems(true);
    };
    this.localizeNumber = (value) => {
      numberStringFormatter.numberFormatOptions = {
        locale: this.effectiveLocale,
        numberingSystem: this.numberingSystem,
        useGrouping: this.groupSeparator
      };
      return numberStringFormatter.localize(value.toString());
    };
    this.bordered = false;
    this.caption = void 0;
    this.groupSeparator = false;
    this.interactionMode = "interactive";
    this.layout = "auto";
    this.numbered = false;
    this.numberingSystem = void 0;
    this.pageSize = 0;
    this.scale = "m";
    this.selectionMode = "none";
    this.selectionDisplay = "top";
    this.zebra = false;
    this.striped = false;
    this.selectedItems = [];
    this.messages = void 0;
    this.messageOverrides = void 0;
    this.colCount = 0;
    this.pageStartRow = 1;
    this.selectedCount = 0;
    this.readCellContentsToAT = void 0;
    this.defaultMessages = void 0;
    this.effectiveLocale = "";
  }
  handleNumberedChange() {
    this.updateRows();
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
  componentWillLoad() {
    return __async(this, null, function* () {
      setUpLoadableComponent(this);
      yield setUpMessages(this);
      this.readCellContentsToAT = /safari/i.test(getUserAgentString());
      this.updateRows();
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
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  calciteChipSelectListener(event) {
    if (event.composedPath().includes(this.el)) {
      this.setSelectedItems(event.target);
    }
  }
  calciteInternalTableRowFocusEvent(event) {
    const cellPosition = event.detail.cellPosition;
    const rowPos = event.detail.rowPosition;
    const destination = event.detail.destination;
    const lastCell = event.detail.lastCell;
    const visibleBody = this.bodyRows?.filter((row) => !row.hidden);
    const visibleAll = this.allRows?.filter((row) => !row.hidden);
    const lastHeadRow = this.headRows[this.headRows.length - 1]?.positionAll;
    const firstBodyRow = visibleBody[0]?.positionAll;
    const lastBodyRow = visibleBody[visibleBody.length - 1]?.positionAll;
    const firstFootRow = this.footRows[0]?.positionAll;
    const lastTableRow = visibleAll[visibleAll.length - 1]?.positionAll;
    const leavingHeader = destination === "next" && rowPos === lastHeadRow;
    const leavingFooter = destination === "previous" && rowPos === firstFootRow;
    const enteringHeader = destination === "previous" && rowPos === firstBodyRow;
    const enteringFooter = destination === "next" && rowPos === lastBodyRow;
    let rowPosition;
    switch (destination) {
      case "first":
        rowPosition = 0;
        break;
      case "last":
        rowPosition = lastTableRow;
        break;
      case "next":
        rowPosition = leavingHeader ? firstBodyRow : enteringFooter ? firstFootRow : rowPos + 1;
        break;
      case "previous":
        rowPosition = leavingFooter ? lastBodyRow : enteringHeader ? lastHeadRow : rowPos - 1;
        break;
    }
    const destinationCount = this.allRows?.find((row) => row.positionAll === rowPosition)?.cellCount;
    const adjustedPos = cellPosition > destinationCount ? destinationCount : cellPosition;
    if (rowPosition !== void 0) {
      this.calciteInternalTableRowFocusChange.emit({
        cellPosition: adjustedPos,
        rowPosition,
        destination,
        lastCell
      });
    }
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderSelectionArea() {
    const outOfViewCount = this.selectedItems?.filter((el) => el.hidden)?.length;
    const localizedOutOfView = this.localizeNumber(outOfViewCount?.toString());
    const localizedSelectedCount = this.localizeNumber(this.selectedCount?.toString());
    const selectionText = `${localizedSelectedCount} ${this.messages.selected}`;
    const outOfView = `${localizedOutOfView} ${this.messages.hiddenSelected}`;
    return h("div", {
      class: CSS2.selectionArea
    }, h("calcite-chip", {
      kind: this.selectedCount > 0 ? "brand" : "neutral",
      scale: this.scale,
      value: selectionText
    }, selectionText), outOfViewCount > 0 && h("calcite-chip", {
      icon: "hide-empty",
      scale: this.scale,
      title: outOfView,
      value: outOfView
    }, localizedOutOfView), this.selectedCount > 0 && h("calcite-button", {
      "icon-start": "x",
      kind: "neutral",
      onClick: this.handleDeselectAllRows,
      round: true,
      scale: this.scale,
      title: `${this.messages.clear} ${selectionText} ${this.messages.row}`
    }, this.messages.clear), h("div", {
      class: CSS2.selectionActions
    }, h("slot", {
      name: SLOTS.selectionActions
    })));
  }
  renderPaginationArea() {
    return h("div", {
      class: CSS2.paginationArea
    }, h("calcite-pagination", {
      groupSeparator: this.groupSeparator,
      numberingSystem: this.numberingSystem,
      onCalcitePaginationChange: this.handlePaginationChange,
      pageSize: this.pageSize,
      ref: (el) => this.paginationEl = el,
      scale: this.scale,
      startItem: 1,
      totalItems: this.bodyRows?.length
    }));
  }
  renderTHead() {
    return h("thead", null, h("slot", {
      name: SLOTS.tableHeader,
      onSlotchange: this.updateRows,
      ref: (el) => this.tableHeadSlotEl = el
    }));
  }
  renderTBody() {
    return h("tbody", null, h("slot", {
      onSlotchange: this.updateRows,
      ref: (el) => this.tableBodySlotEl = el
    }));
  }
  renderTFoot() {
    return h("tfoot", null, h("slot", {
      name: SLOTS.tableFooter,
      onSlotchange: this.updateRows,
      ref: (el) => this.tableFootSlotEl = el
    }));
  }
  render() {
    return h(Host, {
      key: "8e6d0b48e0ffa640e5d0e052092bccf1b4b7fafe"
    }, h("div", {
      key: "ce5932eda4dbec9b60ee5a7aad523e5d47178888",
      class: CSS2.container
    }, this.selectionMode !== "none" && this.selectionDisplay !== "none" && this.renderSelectionArea(), h("div", {
      key: "37fb918ba3079352db0ca83c253f648c327cc3d8",
      class: {
        [CSS2.bordered]: this.bordered,
        [CSS2.striped]: this.striped || this.zebra,
        [CSS2.tableContainer]: true
      }
    }, h("table", {
      key: "908c1e7ce7768c1c9f3146b83546ae639a86bac8",
      "aria-colcount": this.colCount,
      "aria-multiselectable": this.selectionMode === "multiple",
      "aria-rowcount": this.allRows?.length,
      class: {
        [CSS2.tableFixed]: this.layout === "fixed"
      },
      role: this.interactionMode === "interactive" ? "grid" : "table"
    }, h("caption", {
      key: "9ab15b8e9badee9b38925e563e5c607a13ccf664",
      class: CSS2.assistiveText
    }, this.caption), this.renderTHead(), this.renderTBody(), this.renderTFoot())), this.pageSize > 0 && this.renderPaginationArea()));
  }
  static get assetsDirs() {
    return ["assets"];
  }
  get el() {
    return this;
  }
  static get watchers() {
    return {
      "groupSeparator": ["handleNumberedChange"],
      "interactionMode": ["handleNumberedChange"],
      "numbered": ["handleNumberedChange"],
      "numberingSystem": ["handleNumberedChange"],
      "pageSize": ["handleNumberedChange"],
      "scale": ["handleNumberedChange"],
      "selectionMode": ["handleNumberedChange"],
      "messageOverrides": ["onMessagesChange"],
      "effectiveLocale": ["effectiveLocaleChange"]
    };
  }
  static get style() {
    return CalciteTableStyle0;
  }
}, [1, "calcite-table", {
  "bordered": [516],
  "caption": [1],
  "groupSeparator": [516, "group-separator"],
  "interactionMode": [513, "interaction-mode"],
  "layout": [513],
  "numbered": [516],
  "numberingSystem": [513, "numbering-system"],
  "pageSize": [514, "page-size"],
  "scale": [513],
  "selectionMode": [513, "selection-mode"],
  "selectionDisplay": [513, "selection-display"],
  "zebra": [516],
  "striped": [516],
  "selectedItems": [1040],
  "messages": [1040],
  "messageOverrides": [1040],
  "colCount": [32],
  "pageStartRow": [32],
  "selectedCount": [32],
  "readCellContentsToAT": [32],
  "defaultMessages": [32],
  "effectiveLocale": [32]
}, [[0, "calciteTableRowSelect", "calciteChipSelectListener"], [0, "calciteInternalTableRowFocusRequest", "calciteInternalTableRowFocusEvent"]], {
  "groupSeparator": ["handleNumberedChange"],
  "interactionMode": ["handleNumberedChange"],
  "numbered": ["handleNumberedChange"],
  "numberingSystem": ["handleNumberedChange"],
  "pageSize": ["handleNumberedChange"],
  "scale": ["handleNumberedChange"],
  "selectionMode": ["handleNumberedChange"],
  "messageOverrides": ["onMessagesChange"],
  "effectiveLocale": ["effectiveLocaleChange"]
}]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-table", "calcite-button", "calcite-chip", "calcite-icon", "calcite-loader", "calcite-pagination"];
  components.forEach((tagName) => {
    switch (tagName) {
      case "calcite-table":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, Table);
        }
        break;
      case "calcite-button":
        if (!customElements.get(tagName)) {
          defineCustomElement3();
        }
        break;
      case "calcite-chip":
        if (!customElements.get(tagName)) {
          defineCustomElement4();
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
      case "calcite-pagination":
        if (!customElements.get(tagName)) {
          defineCustomElement5();
        }
        break;
    }
  });
}
defineCustomElement$1();
var CalciteTable = Table;
var defineCustomElement6 = defineCustomElement$1;
export {
  CalciteTable,
  defineCustomElement6 as defineCustomElement
};
/*! Bundled license information:

@esri/calcite-components/dist/components/responsive.js:
  (*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
   * v2.13.2
   *)

@esri/calcite-components/dist/components/pagination.js:
  (*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
   * v2.13.2
   *)

@esri/calcite-components/dist/components/calcite-table.js:
  (*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
   * v2.13.2
   *)
*/
//# sourceMappingURL=calcite-table-YLRMJQXI.js.map
