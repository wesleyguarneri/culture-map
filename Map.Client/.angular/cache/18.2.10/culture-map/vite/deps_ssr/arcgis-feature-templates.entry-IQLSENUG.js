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
  newWidgetsFeatureTemplates
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

// ../../../node_modules/@arcgis/map-components/dist/esm/arcgis-feature-templates.entry.js
var featureTemplatesCss = "";
var ArcgisFeatureTemplatesStyle0 = featureTemplatesCss;
var useFeatureTemplatesWidget = makeWidgetController(newWidgetsFeatureTemplates);
var ArcgisFeatureTemplates = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.arcgisReady = createEvent(this, "arcgisReady", 7);
    this.widgetSelect = createEvent(this, "arcgisSelect", 7);
    this.arcgisPropertyChange = createEvent(this, "arcgisPropertyChange", 7);
    this.manager = useControllerManager(this);
    this.widget = useFeatureTemplatesWidget(this);
    this.viewModel = this.widget.viewModel;
    this.arcgisPropertyChange = usePropertyChange()("state");
    this.autoDestroyDisabled = false;
    this.referenceElement = void 0;
    this.position = "bottom-left";
    this.icon = this.widget.icon;
    this.label = this.widget.label;
    this.headingLevel = this.widget.headingLevel;
    this.enableListScroll = this.widget.enableListScroll;
    this.filterFunction = this.widget.filterFunction;
    this.filterText = this.widget.filterText;
    this.groupBy = this.widget.groupBy;
    this.layers = this.widget.layers;
    this.selectionMode = this.widget.selectionMode;
    this.hideFilter = this.widget.visibleElements.filter;
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
ArcgisFeatureTemplates.style = ArcgisFeatureTemplatesStyle0;
export {
  ArcgisFeatureTemplates as arcgis_feature_templates
};
/*! Bundled license information:

@arcgis/map-components/dist/esm/arcgis-feature-templates.entry.js:
  (*!
   * All material copyright Esri, All Rights Reserved, unless otherwise specified.
   * See https://js.arcgis.com/4.30/esri/copyright.txt for details.
   * v4.30.7
   *)
*/
//# sourceMappingURL=arcgis-feature-templates.entry-IQLSENUG.js.map