import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  usePropertyChange
} from "./chunk-M4K2V36W.js";
import {
  makeWidgetController
} from "./chunk-IEGW5ZXY.js";
import {
  useControllerManager
} from "./chunk-QPBMOSKQ.js";
import {
  newWidgetsBasemapLayerList
} from "./chunk-OHJC6MYB.js";
import "./chunk-RXKDWJON.js";
import {
  createEvent,
  getElement,
  registerInstance
} from "./chunk-SKDTV3QX.js";
import {
  __async
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/map-components/dist/esm/arcgis-basemap-layer-list.entry.js
var basemapLayerListCss = "";
var ArcgisBasemapLayerListStyle0 = basemapLayerListCss;
var useBasemapLayerListWidget = makeWidgetController(newWidgetsBasemapLayerList);
var ArcgisBasemapLayerList = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.arcgisReady = createEvent(this, "arcgisReady", 7);
    this.widgetTriggerAction = createEvent(this, "arcgisTriggerAction", 7);
    this.arcgisPropertyChange = createEvent(this, "arcgisPropertyChange", 7);
    this.manager = useControllerManager(this);
    this.widget = useBasemapLayerListWidget(this);
    this.viewModel = this.widget.viewModel;
    this.arcgisPropertyChange = usePropertyChange()("state");
    this.autoDestroyDisabled = false;
    this.headingLevel = this.widget.headingLevel;
    this.label = this.widget.label;
    this.referenceElement = void 0;
    this.baseFilterText = this.widget.baseFilterText;
    this.baseItems = this.widget.baseItems;
    this.baseListItemCreatedFunction = this.widget.baseListItemCreatedFunction;
    this.basemapTitle = this.widget.basemapTitle;
    this.catalogLayerList = this.widget.catalogLayerList;
    this.catalogOptions = this.widget.catalogOptions;
    this.collapsed = this.widget.collapsed;
    this.dragEnabled = this.widget.dragEnabled;
    this.editingTitle = this.widget.editingTitle;
    this.filterPlaceholder = this.widget.filterPlaceholder;
    this.icon = this.widget.icon;
    this.minFilterItems = this.widget.minFilterItems;
    this.referenceFilterText = this.widget.referenceFilterText;
    this.referenceListItemCreatedFunction = this.widget.referenceListItemCreatedFunction;
    this.selectedItems = this.widget.selectedItems;
    this.selectionMode = this.widget.selectionMode;
    this.visibilityAppearance = this.widget.visibilityAppearance;
    this.hideBaseLayers = this.widget.visibleElements.baseLayers;
    this.showCloseButton = this.widget.visibleElements.closeButton;
    this.showCollapseButton = this.widget.visibleElements.collapseButton;
    this.showEditTitleButton = this.widget.visibleElements.editTitleButton;
    this.showErrors = this.widget.visibleElements.errors;
    this.showFilter = this.widget.visibleElements.filter;
    this.hideFlow = this.widget.visibleElements.flow;
    this.hideHeading = this.widget.visibleElements.heading;
    this.hideReferenceLayers = this.widget.visibleElements.referenceLayers;
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
  get el() {
    return getElement(this);
  }
};
ArcgisBasemapLayerList.style = ArcgisBasemapLayerListStyle0;
export {
  ArcgisBasemapLayerList as arcgis_basemap_layer_list
};
/*! Bundled license information:

@arcgis/map-components/dist/esm/arcgis-basemap-layer-list.entry.js:
  (*!
   * All material copyright Esri, All Rights Reserved, unless otherwise specified.
   * See https://js.arcgis.com/4.30/esri/copyright.txt for details.
   * v4.30.7
   *)
*/
//# sourceMappingURL=arcgis-basemap-layer-list.entry-YK4HQPUD.js.map
