import {
  usePropertyChange
} from "./chunk-Y6JJRVUO.js";
import {
  makeWidgetController
} from "./chunk-GBDBWCYP.js";
import {
  useControllerManager
} from "./chunk-ULE6BIEJ.js";
import {
  newWidgetsTableList
} from "./chunk-37R24ZKG.js";
import "./chunk-GC7DXVF7.js";
import {
  createEvent,
  getElement,
  registerInstance
} from "./chunk-IEFK3IO5.js";
import {
  __async
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/map-components/dist/esm/arcgis-table-list.entry.js
var tableListCss = "arcgis-table-list{}";
var ArcgisTableListStyle0 = tableListCss;
var useTableListWidget = makeWidgetController(newWidgetsTableList);
var ArcgisTableList = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.arcgisReady = createEvent(this, "arcgisReady", 7);
    this.arcgisPropertyChange = createEvent(this, "arcgisPropertyChange", 7);
    this.widgetTriggerAction = createEvent(this, "arcgisTriggerAction", 7);
    this.manager = useControllerManager(this);
    this.widget = useTableListWidget(this);
    this.viewModel = this.widget.viewModel;
    this.arcgisPropertyChange = usePropertyChange()("state");
    this.autoDestroyDisabled = false;
    this.referenceElement = void 0;
    this.collapsed = this.widget.collapsed;
    this.dragEnabled = this.widget.dragEnabled;
    this.filterPlaceholder = this.widget.filterPlaceholder;
    this.filterText = this.widget.filterText;
    this.icon = this.widget.icon;
    this.label = this.widget.label;
    this.minDragEnabledItems = this.widget.minDragEnabledItems;
    this.minFilterItems = this.widget.minFilterItems;
    this.selectedItems = this.widget.selectedItems;
    this.selectionMode = this.widget.selectionMode;
    this.listItemCreatedFunction = this.widget.listItemCreatedFunction;
    this.visibleElementsCloseButton = false;
    this.visibleElementsCollapseButton = false;
    this.visibleElementsErrors = false;
    this.visibleElementsFilter = false;
    this.visibleElementsFlow = true;
    this.visibleElementsHeading = false;
    this.visibleElementsStatusIndicators = true;
    this.visibleElementsTemporaryTableIndicators = false;
    this.position = "bottom-left";
    this.state = this.viewModel.state;
  }
  //--------------------------------------------------------------------------
  //
  //  Methods
  //
  //--------------------------------------------------------------------------
  /** Permanently destroy the component */
  destroy() {
    return __async(this, null, function* () {
      yield this.manager.destroy();
    });
  }
  get el() {
    return getElement(this);
  }
};
ArcgisTableList.style = ArcgisTableListStyle0;
export {
  ArcgisTableList as arcgis_table_list
};
/*! Bundled license information:

@arcgis/map-components/dist/esm/arcgis-table-list.entry.js:
  (*!
   * All material copyright Esri, All Rights Reserved, unless otherwise specified.
   * See https://js.arcgis.com/4.30/esri/copyright.txt for details.
   * v4.30.7
   *)
*/
//# sourceMappingURL=arcgis-table-list.entry-76DYDVBK.js.map
