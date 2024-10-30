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
  newLayersFeatureLayer,
  newWidgetsFeatureTable
} from "./chunk-37R24ZKG.js";
import {
  isNullOrEmptyString
} from "./chunk-GC7DXVF7.js";
import {
  createEvent,
  getElement,
  registerInstance
} from "./chunk-IEFK3IO5.js";
import {
  __async
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/map-components/dist/esm/arcgis-feature-table.entry.js
var featureTableCss = ".arcgis-feature-table{width:100%;height:100%}";
var ArcgisFeatureTableStyle0 = featureTableCss;
var useFeatureTableWidget = makeWidgetController(newWidgetsFeatureTable);
var ArcgisFeatureTable = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.arcgisReady = createEvent(this, "arcgisReady", 7);
    this.arcgisSelectionChange = createEvent(this, "arcgisSelectionChange", 7);
    this.arcgisPropertyChange = createEvent(this, "arcgisPropertyChange", 7);
    this.manager = useControllerManager(this);
    this.widget = useFeatureTableWidget(this);
    this.viewModel = this.widget.viewModel;
    this.arcgisPropertyChange = usePropertyChange()("state");
    this.autoDestroyDisabled = false;
    this.referenceElement = void 0;
    this.position = "manual";
    this.activeFilters = this.widget.activeFilters;
    this.activeSortOrders = this.widget.activeSortOrders;
    this.attachmentsEnabled = this.widget.attachmentsEnabled;
    this.autoRefreshEnabled = this.widget.autoRefreshEnabled;
    this.columnReorderingEnabled = this.widget.columnReorderingEnabled;
    this.columns = this.widget.columns;
    this.description = this.widget.description;
    this.icon = this.widget.icon;
    this.label = this.widget.label;
    this.editingEnabled = this.widget.editingEnabled;
    this.filterBySelectionEnabled = this.widget.filterBySelectionEnabled;
    this.filterGeometry = this.widget.filterGeometry;
    this.hiddenFields = this.widget.hiddenFields;
    this.highlightEnabled = this.widget.highlightEnabled;
    this.highlightIds = this.widget.highlightIds;
    this.layer = this.widget.layer;
    this.menuConfig = this.widget.menuConfig;
    this.multiSortEnabled = this.widget.multiSortEnabled;
    this.objectIds = this.widget.objectIds;
    this.pageSize = this.widget.pageSize;
    this.relatedRecordsEnabled = this.widget.relatedRecordsEnabled;
    this.returnGeometryEnabled = this.widget.returnGeometryEnabled;
    this.returnMEnabled = this.widget.returnMEnabled;
    this.returnZEnabled = this.widget.returnZEnabled;
    this.tableTemplate = this.widget.tableTemplate;
    this.timeZone = this.widget.timeZone;
    this.itemId = this.manager.getSet(void 0, {
      set: (value) => {
        if (isNullOrEmptyString(value)) {
          this.layer = null;
        } else if (value) {
          newLayersFeatureLayer({
            portalItem: {
              id: value
            }
          }).then((layer) => {
            this.layer = layer;
          }).catch(console.error);
        }
        return value;
      }
    });
    this.url = this.manager.getSet(void 0, {
      set: (value) => {
        if (value) {
          newLayersFeatureLayer({
            url: value
          }).then((layer) => {
            this.layer = layer;
          }).catch(console.error);
        }
        return value;
      }
    });
    this.hideHeader = this.widget.visibleElements.header;
    this.hideMenu = this.widget.visibleElements.menu;
    this.hideSelectionColumn = this.widget.visibleElements.selectionColumn;
    this.hideColumnMenus = this.widget.visibleElements.columnMenus;
    this.hideMenuItemsClearSelection = this.widget.visibleElements.menuItems.clearSelection;
    this.hideMenuItemsDeleteSelection = this.widget.visibleElements.menuItems.deleteSelection;
    this.hideMenuItemsRefreshData = this.widget.visibleElements.menuItems.refreshData;
    this.hideMenuItemsSelectedRecordsShowAllToggle = this.widget.visibleElements.menuItems.selectedRecordsShowAllToggle;
    this.hideMenuItemsToggleColumns = this.widget.visibleElements.menuItems.toggleColumns;
    this.hideMenuItemsZoomToSelection = this.widget.visibleElements.menuItems.zoomToSelection;
    this.state = this.widget.state;
  }
  componentWillLoad() {
    this.manager.onLifecycle(() => this.widget.highlightIds.on("change", this.arcgisSelectionChange.emit));
  }
  componentDidLoad() {
    this.el.childElem?.classList.add("arcgis-feature-table");
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
  clearSelectionFilter() {
    return __async(this, null, function* () {
      this.widget?.clearSelectionFilter();
    });
  }
  deleteSelection(showWarningPrompt) {
    return __async(this, null, function* () {
      yield this.widget?.deleteSelection(showWarningPrompt);
    });
  }
  filterBySelection() {
    return __async(this, null, function* () {
      this.widget?.filterBySelection();
    });
  }
  findColumn(fieldName) {
    return __async(this, null, function* () {
      return this.widget?.findColumn(fieldName);
    });
  }
  hideColumn(fieldName) {
    return __async(this, null, function* () {
      this.widget?.hideColumn(fieldName);
    });
  }
  refresh() {
    return __async(this, null, function* () {
      yield this.widget?.refresh();
    });
  }
  scrollToIndex(index) {
    return __async(this, null, function* () {
      this.widget?.scrollToIndex(index);
    });
  }
  showAllColumns() {
    return __async(this, null, function* () {
      this.widget?.showAllColumns();
    });
  }
  showColumn(fieldName) {
    return __async(this, null, function* () {
      this.widget?.showColumn(fieldName);
    });
  }
  sortColumn(path, direction) {
    return __async(this, null, function* () {
      this.widget?.sortColumn(path, direction);
    });
  }
  zoomToSelection() {
    return __async(this, null, function* () {
      this.widget?.zoomToSelection();
    });
  }
  get el() {
    return getElement(this);
  }
};
ArcgisFeatureTable.style = ArcgisFeatureTableStyle0;
export {
  ArcgisFeatureTable as arcgis_feature_table
};
/*! Bundled license information:

@arcgis/map-components/dist/esm/arcgis-feature-table.entry.js:
  (*!
   * All material copyright Esri, All Rights Reserved, unless otherwise specified.
   * See https://js.arcgis.com/4.30/esri/copyright.txt for details.
   * v4.30.7
   *)
*/
//# sourceMappingURL=arcgis-feature-table.entry-GMC6NC75.js.map
