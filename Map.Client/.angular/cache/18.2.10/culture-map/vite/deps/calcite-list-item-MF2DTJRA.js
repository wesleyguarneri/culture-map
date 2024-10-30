import {
  defineCustomElement as defineCustomElement4
} from "./chunk-OXMSYSRN.js";
import {
  getDepth,
  getListItemChildLists,
  getListItemChildren,
  updateListItemChildren
} from "./chunk-PWH67EPW.js";
import {
  CSS,
  ICONS,
  SLOTS,
  activeCellTestAttribute
} from "./chunk-6NWICZWW.js";
import {
  defineCustomElement as defineCustomElement3
} from "./chunk-AMGONSU2.js";
import {
  InteractiveContainer,
  updateHostInteraction
} from "./chunk-46GG7UPH.js";
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
  disconnectLocalized
} from "./chunk-B3F3MSZ2.js";
import "./chunk-EU6DW6GK.js";
import {
  defineCustomElement
} from "./chunk-AX5NQF7U.js";
import "./chunk-JOYMUIN5.js";
import "./chunk-23E6RT3O.js";
import "./chunk-D25A7Z5T.js";
import {
  getElementDir,
  getFirstTabbable,
  slotChangeHasAssignedElement,
  toAriaBoolean
} from "./chunk-RGUNAV4Z.js";
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

// ../../../node_modules/@esri/calcite-components/dist/components/calcite-list-item.js
var listItemCss = ':host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;flex-direction:column;background-color:var(--calcite-color-foreground-1);--calcite-list-item-icon-color:var(--calcite-color-brand)}:host([filter-hidden]),:host([closed]){display:none}.wrapper--bordered{border-block-end:1px solid var(--calcite-color-border-3)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.container{box-sizing:border-box;display:flex;flex:1 1 0%;overflow:hidden;background-color:var(--calcite-color-foreground-1)}.container *{box-sizing:border-box}.container--hover:hover{cursor:pointer;background-color:var(--calcite-color-foreground-2)}.container:active{background-color:var(--calcite-color-foreground-1)}.container--border{border-inline-start-width:4px;border-inline-start-style:solid}.container--border-selected{border-inline-start-color:var(--calcite-color-brand)}.container--border-unselected{border-inline-start-color:transparent}.container:hover.container--border-unselected{border-color:var(--calcite-color-border-1)}.nested-container{display:none;flex-direction:column;border-width:0px;border-style:solid;border-color:var(--calcite-color-border-3);margin-inline-start:var(--calcite-list-item-spacing-indent, 1.5rem)}.nested-container--open{display:flex}.content-container{display:flex;flex:1 1 auto;-webkit-user-select:none;user-select:none;align-items:stretch;padding:0px;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-color-text-2)}.content-container--unavailable{opacity:var(--calcite-opacity-disabled)}tr,td{outline-color:transparent}tr{position:relative}tr:focus,td:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}.content,.custom-content{display:flex;flex:1 1 auto;flex-direction:column;justify-content:center;padding-inline:0.75rem;padding-block:0.5rem;font-size:var(--calcite-font-size--2);line-height:1.375}.label,.description,.content-bottom{font-family:var(--calcite-font-family);font-size:var(--calcite-font-size--2);font-weight:var(--calcite-font-weight-normal);word-wrap:break-word;word-break:break-word}.label:only-child,.description:only-child,.content-bottom:only-child{margin:0px;padding-block:0.25rem}.label{color:var(--calcite-color-text-1)}:host([selected]) .label{font-weight:var(--calcite-font-weight-medium)}.description{margin-block-start:0.125rem;color:var(--calcite-color-text-3)}:host([selected]) .description{color:var(--calcite-color-text-2)}.content-start{justify-content:flex-start}.content-end{justify-content:flex-end}.content-start,.content-end{flex:1 1 auto}.content-start ::slotted(calcite-icon),.content-end ::slotted(calcite-icon){margin-inline:0.75rem;align-self:center}.content-bottom{display:flex;flex-direction:column}.content-container--has-center-content .content-start,.content-container--has-center-content .content-end{flex:0 1 auto}.selection-container{display:flex;padding-block:0px;color:var(--calcite-color-border-input);padding-inline:var(--calcite-spacing-md) var(--calcite-spacing-xxs)}.selection-container--single{color:transparent}:host(:not([disabled]):not([selected])) .container:hover .selection-container--single{color:var(--calcite-color-border-1)}:host([selected]:hover) .selection-container,:host([selected]:hover) .selection-container--single,:host([selected]) .selection-container{color:var(--calcite-list-item-icon-color)}.open-container{color:var(--calcite-color-text-3)}:host(:not([disabled])) .container:hover .open-container{color:var(--calcite-color-text-1)}.actions-start,.actions-end,.content-start,.content-end,.selection-container,.drag-container,.open-container{display:flex;align-items:center}.actions-start calcite-action,.actions-start calcite-handle,.actions-end calcite-action,.actions-end calcite-handle,.content-start calcite-action,.content-start calcite-handle,.content-end calcite-action,.content-end calcite-handle,.selection-container calcite-action,.selection-container calcite-handle,.drag-container calcite-action,.drag-container calcite-handle,.open-container calcite-action,.open-container calcite-handle{align-self:stretch}.open-container,.selection-container{cursor:pointer}.actions-start,.actions-end{position:relative;padding:0px}.actions-start ::slotted(calcite-action),.actions-start ::slotted(calcite-action-menu),.actions-start ::slotted(calcite-handle),.actions-start ::slotted(calcite-dropdown),.actions-end ::slotted(calcite-action),.actions-end ::slotted(calcite-action-menu),.actions-end ::slotted(calcite-handle),.actions-end ::slotted(calcite-dropdown){align-self:stretch;color:inherit}tr:focus .actions-start,tr:focus .actions-end{inset-block:0.125rem}tr:focus .actions-start .close,tr:focus .actions-start ::slotted(calcite-action),tr:focus .actions-start ::slotted(calcite-action-menu),tr:focus .actions-start ::slotted(calcite-handle),tr:focus .actions-start ::slotted(calcite-dropdown),tr:focus .actions-end .close,tr:focus .actions-end ::slotted(calcite-action),tr:focus .actions-end ::slotted(calcite-action-menu),tr:focus .actions-end ::slotted(calcite-handle),tr:focus .actions-end ::slotted(calcite-dropdown){block-size:calc(100% - 0.25rem)}tr:focus::after,tr:focus::before{position:absolute;content:"";inline-size:0.125rem;z-index:var(--calcite-z-index-header);background-color:var(--calcite-color-brand);inset-block:0}tr:focus::before{inset-inline-start:0}tr:focus::after{inset-inline-end:0}.container--border:focus::before{display:none}::slotted(calcite-list:empty){border-block-start-width:0px}:host([hidden]){display:none}[hidden]{display:none}';
var CalciteListItemStyle0 = listItemCss;
var focusMap = /* @__PURE__ */ new Map();
var listSelector = "calcite-list";
var ListItem = proxyCustomElement(class ListItem2 extends H {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteListItemSelect = createEvent(this, "calciteListItemSelect", 6);
    this.calciteListItemClose = createEvent(this, "calciteListItemClose", 6);
    this.calciteListItemDragHandleChange = createEvent(this, "calciteListItemDragHandleChange", 6);
    this.calciteListItemToggle = createEvent(this, "calciteListItemToggle", 6);
    this.calciteInternalListItemSelect = createEvent(this, "calciteInternalListItemSelect", 6);
    this.calciteInternalListItemSelectMultiple = createEvent(this, "calciteInternalListItemSelectMultiple", 6);
    this.calciteInternalListItemActive = createEvent(this, "calciteInternalListItemActive", 6);
    this.calciteInternalFocusPreviousItem = createEvent(this, "calciteInternalFocusPreviousItem", 6);
    this.calciteInternalListItemChange = createEvent(this, "calciteInternalListItemChange", 6);
    this.calciteInternalListItemToggle = createEvent(this, "calciteInternalListItemToggle", 6);
    this.dragHandleSelectedChangeHandler = (event) => {
      this.dragSelected = event.target.selected;
      this.calciteListItemDragHandleChange.emit();
      event.stopPropagation();
    };
    this.emitInternalListItemActive = () => {
      this.calciteInternalListItemActive.emit();
    };
    this.focusCellHandle = () => {
      this.handleCellFocusIn(this.handleGridEl);
    };
    this.focusCellActionsStart = () => {
      this.handleCellFocusIn(this.actionsStartEl);
    };
    this.focusCellContent = () => {
      this.handleCellFocusIn(this.contentEl);
    };
    this.focusCellActionsEnd = () => {
      this.handleCellFocusIn(this.actionsEndEl);
    };
    this.handleCloseClick = () => {
      this.closed = true;
      this.calciteListItemClose.emit();
    };
    this.handleContentSlotChange = (event) => {
      this.hasCustomContent = slotChangeHasAssignedElement(event);
    };
    this.handleActionsStartSlotChange = (event) => {
      this.hasActionsStart = slotChangeHasAssignedElement(event);
    };
    this.handleActionsEndSlotChange = (event) => {
      this.hasActionsEnd = slotChangeHasAssignedElement(event);
    };
    this.handleContentStartSlotChange = (event) => {
      this.hasContentStart = slotChangeHasAssignedElement(event);
    };
    this.handleContentEndSlotChange = (event) => {
      this.hasContentEnd = slotChangeHasAssignedElement(event);
    };
    this.handleContentBottomSlotChange = (event) => {
      this.hasContentBottom = slotChangeHasAssignedElement(event);
    };
    this.handleDefaultSlotChange = (event) => {
      this.handleOpenableChange(event.target);
    };
    this.handleToggleClick = () => {
      this.toggle();
    };
    this.toggle = (value = !this.open) => {
      this.open = value;
      this.calciteListItemToggle.emit();
    };
    this.handleItemClick = (event) => {
      if (event.defaultPrevented) {
        return;
      }
      this.toggleSelected(event.shiftKey);
    };
    this.toggleSelected = (shiftKey) => {
      const {
        selectionMode,
        selected
      } = this;
      if (this.disabled) {
        return;
      }
      if (selectionMode === "multiple" || selectionMode === "single") {
        this.selected = !selected;
      } else if (selectionMode === "single-persist") {
        this.selected = true;
      }
      this.calciteInternalListItemSelectMultiple.emit({
        selectMultiple: shiftKey && selectionMode === "multiple"
      });
      this.calciteListItemSelect.emit();
    };
    this.handleItemKeyDown = (event) => {
      if (event.defaultPrevented) {
        return;
      }
      const {
        key
      } = event;
      const composedPath = event.composedPath();
      const {
        containerEl,
        actionsStartEl,
        actionsEndEl,
        open,
        openable
      } = this;
      const cells = this.getGridCells();
      const currentIndex = cells.findIndex((cell) => composedPath.includes(cell));
      if (key === "Enter" && !composedPath.includes(actionsStartEl) && !composedPath.includes(actionsEndEl)) {
        event.preventDefault();
        this.toggleSelected(event.shiftKey);
      } else if (key === "ArrowRight") {
        event.preventDefault();
        const nextIndex = currentIndex + 1;
        if (currentIndex === -1) {
          if (!open && openable) {
            this.toggle(true);
            this.focusCell(null);
          } else if (cells[0]) {
            this.focusCell(cells[0]);
          }
        } else if (cells[currentIndex] && cells[nextIndex]) {
          this.focusCell(cells[nextIndex]);
        }
      } else if (key === "ArrowLeft") {
        event.preventDefault();
        const prevIndex = currentIndex - 1;
        if (currentIndex === -1) {
          this.focusCell(null);
          if (open && openable) {
            this.toggle(false);
          } else {
            this.calciteInternalFocusPreviousItem.emit();
          }
        } else if (currentIndex === 0) {
          this.focusCell(null);
          containerEl.focus();
        } else if (cells[currentIndex] && cells[prevIndex]) {
          this.focusCell(cells[prevIndex]);
        }
      }
    };
    this.focusCellNull = () => {
      this.focusCell(null);
    };
    this.handleCellFocusIn = (focusEl) => {
      this.setFocusCell(focusEl, getFirstTabbable(focusEl), true);
    };
    this.setFocusCell = (focusEl, focusedEl, saveFocusIndex) => {
      const {
        parentListEl
      } = this;
      if (saveFocusIndex) {
        focusMap.set(parentListEl, null);
      }
      const gridCells = this.getGridCells();
      gridCells.forEach((tableCell) => {
        tableCell.tabIndex = -1;
        tableCell.removeAttribute(activeCellTestAttribute);
      });
      if (!focusEl) {
        return;
      }
      focusEl.tabIndex = focusEl === focusedEl ? 0 : -1;
      focusEl.setAttribute(activeCellTestAttribute, "");
      if (saveFocusIndex) {
        focusMap.set(parentListEl, gridCells.indexOf(focusEl));
      }
    };
    this.focusCell = (focusEl, saveFocusIndex = true) => {
      const focusedEl = getFirstTabbable(focusEl);
      this.setFocusCell(focusEl, focusedEl, saveFocusIndex);
      focusedEl?.focus();
    };
    this.active = false;
    this.bordered = false;
    this.closable = false;
    this.closed = false;
    this.description = void 0;
    this.disabled = false;
    this.dragDisabled = false;
    this.dragHandle = false;
    this.dragSelected = false;
    this.filterHidden = false;
    this.label = void 0;
    this.metadata = void 0;
    this.open = false;
    this.setSize = null;
    this.setPosition = null;
    this.selected = false;
    this.unavailable = false;
    this.value = void 0;
    this.selectionMode = null;
    this.selectionAppearance = null;
    this.messageOverrides = void 0;
    this.messages = void 0;
    this.effectiveLocale = "";
    this.defaultMessages = void 0;
    this.level = null;
    this.parentListEl = void 0;
    this.openable = false;
    this.hasActionsStart = false;
    this.hasActionsEnd = false;
    this.hasCustomContent = false;
    this.hasContentStart = false;
    this.hasContentEnd = false;
    this.hasContentBottom = false;
  }
  activeHandler(active) {
    if (!active) {
      this.focusCell(null, false);
    }
  }
  handleClosedChange() {
    this.emitCalciteInternalListItemChange();
  }
  handleDisabledChange() {
    this.emitCalciteInternalListItemChange();
  }
  handleOpenChange() {
    this.emitCalciteInternalListItemToggle();
  }
  handleSelectedChange() {
    this.calciteInternalListItemSelect.emit();
  }
  onMessagesChange() {
  }
  handleCalciteInternalListDefaultSlotChanges(event) {
    event.stopPropagation();
    this.handleOpenableChange(this.defaultSlotEl);
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
    const {
      el
    } = this;
    this.parentListEl = el.closest(listSelector);
    this.level = getDepth(el) + 1;
    this.setSelectionDefaults();
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
    disconnectLocalized(this);
    disconnectMessages(this);
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
      const {
        containerEl,
        parentListEl
      } = this;
      const focusIndex = focusMap.get(parentListEl);
      if (typeof focusIndex === "number") {
        const cells = this.getGridCells();
        if (cells[focusIndex]) {
          this.focusCell(cells[focusIndex]);
        } else {
          containerEl?.focus();
        }
        return;
      }
      containerEl?.focus();
    });
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderSelected() {
    const {
      selected,
      selectionMode,
      selectionAppearance
    } = this;
    if (selectionMode === "none" || selectionAppearance === "border") {
      return null;
    }
    return h("td", {
      class: {
        [CSS.selectionContainer]: true,
        [CSS.selectionContainerSingle]: selectionMode === "single" || selectionMode === "single-persist"
      },
      key: "selection-container",
      onClick: this.handleItemClick
    }, h("calcite-icon", {
      icon: selected ? selectionMode === "multiple" ? ICONS.selectedMultiple : ICONS.selectedSingle : selectionMode === "multiple" ? ICONS.unselectedMultiple : ICONS.unselectedSingle,
      scale: "s"
    }));
  }
  renderDragHandle() {
    const {
      label,
      dragHandle,
      dragSelected,
      dragDisabled,
      setPosition,
      setSize
    } = this;
    return dragHandle ? h("td", {
      "aria-label": label,
      class: CSS.dragContainer,
      key: "drag-handle-container",
      onFocusin: this.focusCellHandle,
      ref: (el) => this.handleGridEl = el,
      role: "gridcell"
    }, h("calcite-handle", {
      disabled: dragDisabled,
      label,
      onCalciteHandleChange: this.dragHandleSelectedChangeHandler,
      selected: dragSelected,
      setPosition,
      setSize
    })) : null;
  }
  renderOpen() {
    const {
      el,
      open,
      openable,
      messages
    } = this;
    const dir = getElementDir(el);
    const icon = open ? ICONS.open : dir === "rtl" ? ICONS.closedRTL : ICONS.closedLTR;
    const tooltip = open ? messages.collapse : messages.expand;
    return openable ? h("td", {
      class: CSS.openContainer,
      key: "open-container",
      onClick: this.handleToggleClick,
      title: tooltip
    }, h("calcite-icon", {
      icon,
      key: icon,
      scale: "s"
    })) : null;
  }
  renderActionsStart() {
    const {
      label,
      hasActionsStart
    } = this;
    return h("td", {
      "aria-label": label,
      class: CSS.actionsStart,
      hidden: !hasActionsStart,
      key: "actions-start-container",
      onFocusin: this.focusCellActionsStart,
      ref: (el) => this.actionsStartEl = el,
      role: "gridcell"
    }, h("slot", {
      name: SLOTS.actionsStart,
      onSlotchange: this.handleActionsStartSlotChange
    }));
  }
  renderActionsEnd() {
    const {
      label,
      hasActionsEnd,
      closable,
      messages
    } = this;
    return h("td", {
      "aria-label": label,
      class: CSS.actionsEnd,
      hidden: !(hasActionsEnd || closable),
      key: "actions-end-container",
      onFocusin: this.focusCellActionsEnd,
      ref: (el) => this.actionsEndEl = el,
      role: "gridcell"
    }, h("slot", {
      name: SLOTS.actionsEnd,
      onSlotchange: this.handleActionsEndSlotChange
    }), closable ? h("calcite-action", {
      appearance: "transparent",
      class: CSS.close,
      icon: ICONS.close,
      key: "close-action",
      label: messages.close,
      onClick: this.handleCloseClick,
      text: messages.close
    }) : null);
  }
  renderContentStart() {
    const {
      hasContentStart
    } = this;
    return h("div", {
      class: CSS.contentStart,
      hidden: !hasContentStart
    }, h("slot", {
      name: SLOTS.contentStart,
      onSlotchange: this.handleContentStartSlotChange
    }));
  }
  renderCustomContent() {
    const {
      hasCustomContent
    } = this;
    return h("div", {
      class: CSS.customContent,
      hidden: !hasCustomContent
    }, h("slot", {
      name: SLOTS.content,
      onSlotchange: this.handleContentSlotChange
    }));
  }
  renderContentEnd() {
    const {
      hasContentEnd
    } = this;
    return h("div", {
      class: CSS.contentEnd,
      hidden: !hasContentEnd
    }, h("slot", {
      name: SLOTS.contentEnd,
      onSlotchange: this.handleContentEndSlotChange
    }));
  }
  renderContentBottom() {
    const {
      hasContentBottom
    } = this;
    return h("div", {
      class: CSS.contentBottom,
      hidden: !hasContentBottom
    }, h("slot", {
      name: SLOTS.contentBottom,
      onSlotchange: this.handleContentBottomSlotChange
    }));
  }
  renderDefaultContainer() {
    return h("div", {
      class: {
        [CSS.nestedContainer]: true,
        [CSS.nestedContainerOpen]: this.openable && this.open
      }
    }, h("slot", {
      onSlotchange: this.handleDefaultSlotChange,
      ref: (el) => this.defaultSlotEl = el
    }));
  }
  renderContentProperties() {
    const {
      label,
      description,
      hasCustomContent
    } = this;
    return !hasCustomContent && (!!label || !!description) ? h("div", {
      class: CSS.content,
      key: "content"
    }, label ? h("div", {
      class: CSS.label,
      key: "label"
    }, label) : null, description ? h("div", {
      class: CSS.description,
      key: "description"
    }, description) : null) : null;
  }
  renderContentContainer() {
    const {
      description,
      label,
      selectionMode,
      hasCustomContent,
      unavailable
    } = this;
    const hasCenterContent = hasCustomContent || !!label || !!description;
    const content = [this.renderContentStart(), this.renderCustomContent(), this.renderContentProperties(), this.renderContentEnd()];
    return h("td", {
      "aria-label": label,
      class: {
        [CSS.contentContainer]: true,
        [CSS.contentContainerUnavailable]: unavailable,
        [CSS.contentContainerSelectable]: selectionMode !== "none",
        [CSS.contentContainerHasCenterContent]: hasCenterContent
      },
      key: "content-container",
      onClick: this.handleItemClick,
      onFocusin: this.focusCellContent,
      ref: (el) => this.contentEl = el,
      role: "gridcell"
    }, content);
  }
  render() {
    const {
      openable,
      open,
      level,
      setPosition,
      setSize,
      active,
      label,
      selected,
      selectionAppearance,
      selectionMode,
      closed,
      filterHidden,
      bordered,
      disabled
    } = this;
    const showBorder = selectionMode !== "none" && selectionAppearance === "border";
    const borderSelected = showBorder && selected;
    const borderUnselected = showBorder && !selected;
    return h(Host, {
      key: "a610ab740c82b6088400839884d58d4d867829db"
    }, h(InteractiveContainer, {
      key: "f05bf10e82fab03ddfdaf3ab2e100dcbd6d69c63",
      disabled
    }, h("div", {
      key: "4bf63ed08d2a4a049e060d26d3699656558d495e",
      class: {
        [CSS.wrapper]: true,
        [CSS.wrapperBordered]: bordered
      }
    }, h("tr", {
      key: "d231a113c3bd8ee7f67c2ffb0cf804c142a95fb9",
      "aria-expanded": openable ? toAriaBoolean(open) : null,
      "aria-label": label,
      "aria-level": level,
      "aria-posinset": setPosition,
      "aria-selected": toAriaBoolean(selected),
      "aria-setsize": setSize,
      class: {
        [CSS.container]: true,
        [CSS.containerHover]: true,
        [CSS.containerBorder]: showBorder,
        [CSS.containerBorderSelected]: borderSelected,
        [CSS.containerBorderUnselected]: borderUnselected
      },
      hidden: closed || filterHidden,
      onFocus: this.focusCellNull,
      onFocusin: this.emitInternalListItemActive,
      onKeyDown: this.handleItemKeyDown,
      ref: (el) => this.containerEl = el,
      role: "row",
      tabIndex: active ? 0 : -1
    }, this.renderDragHandle(), this.renderSelected(), this.renderOpen(), this.renderActionsStart(), this.renderContentContainer(), this.renderActionsEnd()), this.renderContentBottom()), this.renderDefaultContainer()));
  }
  emitCalciteInternalListItemToggle() {
    this.calciteInternalListItemToggle.emit();
  }
  emitCalciteInternalListItemChange() {
    this.calciteInternalListItemChange.emit();
  }
  setSelectionDefaults() {
    const {
      parentListEl,
      selectionMode,
      selectionAppearance
    } = this;
    if (!parentListEl) {
      return;
    }
    if (!selectionMode) {
      this.selectionMode = parentListEl.selectionMode;
    }
    if (!selectionAppearance) {
      this.selectionAppearance = parentListEl.selectionAppearance;
    }
  }
  handleOpenableChange(slotEl) {
    if (!slotEl) {
      return;
    }
    const listItemChildren = getListItemChildren(slotEl);
    const listItemChildLists = getListItemChildLists(slotEl);
    updateListItemChildren(listItemChildren);
    this.openable = !!listItemChildren.length || !!listItemChildLists.length;
  }
  getGridCells() {
    return [this.handleGridEl, this.actionsStartEl, this.contentEl, this.actionsEndEl].filter((el) => el && !el.hidden);
  }
  static get assetsDirs() {
    return ["assets"];
  }
  get el() {
    return this;
  }
  static get watchers() {
    return {
      "active": ["activeHandler"],
      "closed": ["handleClosedChange"],
      "disabled": ["handleDisabledChange"],
      "open": ["handleOpenChange"],
      "selected": ["handleSelectedChange"],
      "messageOverrides": ["onMessagesChange"],
      "effectiveLocale": ["effectiveLocaleChange"]
    };
  }
  static get style() {
    return CalciteListItemStyle0;
  }
}, [1, "calcite-list-item", {
  "active": [4],
  "bordered": [4],
  "closable": [516],
  "closed": [1540],
  "description": [1],
  "disabled": [516],
  "dragDisabled": [516, "drag-disabled"],
  "dragHandle": [4, "drag-handle"],
  "dragSelected": [1540, "drag-selected"],
  "filterHidden": [516, "filter-hidden"],
  "label": [1],
  "metadata": [16],
  "open": [1540],
  "setSize": [2, "set-size"],
  "setPosition": [2, "set-position"],
  "selected": [1540],
  "unavailable": [516],
  "value": [8],
  "selectionMode": [1025, "selection-mode"],
  "selectionAppearance": [1025, "selection-appearance"],
  "messageOverrides": [1040],
  "messages": [1040],
  "effectiveLocale": [32],
  "defaultMessages": [32],
  "level": [32],
  "parentListEl": [32],
  "openable": [32],
  "hasActionsStart": [32],
  "hasActionsEnd": [32],
  "hasCustomContent": [32],
  "hasContentStart": [32],
  "hasContentEnd": [32],
  "hasContentBottom": [32],
  "setFocus": [64]
}, [[0, "calciteInternalListItemGroupDefaultSlotChange", "handleCalciteInternalListDefaultSlotChanges"], [0, "calciteInternalListDefaultSlotChange", "handleCalciteInternalListDefaultSlotChanges"]], {
  "active": ["activeHandler"],
  "closed": ["handleClosedChange"],
  "disabled": ["handleDisabledChange"],
  "open": ["handleOpenChange"],
  "selected": ["handleSelectedChange"],
  "messageOverrides": ["onMessagesChange"],
  "effectiveLocale": ["effectiveLocaleChange"]
}]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-list-item", "calcite-action", "calcite-handle", "calcite-icon", "calcite-loader"];
  components.forEach((tagName) => {
    switch (tagName) {
      case "calcite-list-item":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, ListItem);
        }
        break;
      case "calcite-action":
        if (!customElements.get(tagName)) {
          defineCustomElement3();
        }
        break;
      case "calcite-handle":
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
    }
  });
}
defineCustomElement$1();
var CalciteListItem = ListItem;
var defineCustomElement5 = defineCustomElement$1;
export {
  CalciteListItem,
  defineCustomElement5 as defineCustomElement
};
/*! Bundled license information:

@esri/calcite-components/dist/components/calcite-list-item.js:
  (*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
   * v2.13.2
   *)
*/
//# sourceMappingURL=calcite-list-item-MF2DTJRA.js.map
