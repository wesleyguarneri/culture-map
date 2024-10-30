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
  newWidgetsLayerList
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

// ../../../node_modules/@arcgis/map-components/dist/esm/arcgis-layer-list.entry.js
var layerListCss = "";
var ArcgisLayerListStyle0 = layerListCss;
var useLayerListWidget = makeWidgetController(newWidgetsLayerList);
var ArcgisLayerList = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.arcgisReady = createEvent(this, "arcgisReady", 7);
    this.widgetTriggerAction = createEvent(this, "arcgisTriggerAction", 7);
    this.arcgisPropertyChange = createEvent(this, "arcgisPropertyChange", 7);
    this.manager = useControllerManager(this);
    this.widget = useLayerListWidget(this);
    this.viewModel = this.widget.viewModel;
    this.arcgisPropertyChange = usePropertyChange()("state");
    this.autoDestroyDisabled = false;
    this.referenceElement = void 0;
    this.collapsed = this.widget.collapsed;
    this.headingLevel = this.widget.headingLevel;
    this.catalogLayerList = this.widget.catalogLayerList;
    this.catalogOptions = this.widget.catalogOptions;
    this.dragEnabled = this.widget.dragEnabled;
    this.filterPlaceholder = this.widget.filterPlaceholder;
    this.filterText = this.widget.filterText;
    this.icon = this.widget.icon;
    this.knowledgeGraphOptions = this.widget.knowledgeGraphOptions;
    this.tableList = this.widget.tableList;
    this.label = this.widget.label;
    this.listItemCreatedFunction = this.widget.listItemCreatedFunction;
    this.minDragEnabledItems = this.widget.minDragEnabledItems;
    this.minFilterItems = this.widget.minFilterItems;
    this.selectedItems = this.widget.selectedItems;
    this.selectionMode = this.widget.selectionMode;
    this.visibilityAppearance = this.widget.visibilityAppearance;
    this.hideCatalogLayerList = this.widget.visibleElements.catalogLayerList;
    this.showCloseButton = this.widget.visibleElements.closeButton;
    this.showCollapseButton = this.widget.visibleElements.collapseButton;
    this.showErrors = this.widget.visibleElements.errors;
    this.showFilter = this.widget.visibleElements.filter;
    this.hideFlow = this.widget.visibleElements.flow;
    this.showHeading = this.widget.visibleElements.heading;
    this.hideStatusIndicators = this.widget.visibleElements.statusIndicators;
    this.showTemporaryLayerIndicators = this.widget.visibleElements.temporaryLayerIndicators;
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
  triggerAction(action, item) {
    return __async(this, null, function* () {
      this.widget?.triggerAction(action, item);
    });
  }
  get el() {
    return getElement(this);
  }
};
ArcgisLayerList.style = ArcgisLayerListStyle0;
export {
  ArcgisLayerList as arcgis_layer_list
};
/*! Bundled license information:

@arcgis/map-components/dist/esm/arcgis-layer-list.entry.js:
  (*!
   * All material copyright Esri, All Rights Reserved, unless otherwise specified.
   * See https://js.arcgis.com/4.30/esri/copyright.txt for details.
   * v4.30.7
   *)
*/
//# sourceMappingURL=arcgis-layer-list.entry-MQRAXTUI.js.map
