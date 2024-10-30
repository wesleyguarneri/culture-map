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
  newWidgetsLegend
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

// ../../../node_modules/@arcgis/map-components/dist/esm/arcgis-legend.entry.js
var legendCss = "";
var ArcgisLegendStyle0 = legendCss;
var useLegendWidget = makeWidgetController(newWidgetsLegend);
var ArcgisLegend = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.arcgisReady = createEvent(this, "arcgisReady", 7);
    this.arcgisPropertyChange = createEvent(this, "arcgisPropertyChange", 7);
    this.manager = useControllerManager(this);
    this.widget = useLegendWidget(this);
    this.viewModel = this.widget.viewModel;
    this.arcgisPropertyChange = usePropertyChange()("state");
    this.autoDestroyDisabled = false;
    this.headingLevel = this.widget.headingLevel;
    this.referenceElement = void 0;
    this.activeLayerInfos = this.widget.activeLayerInfos;
    this.basemapLegendVisible = this.widget.basemapLegendVisible;
    this.hideLayersNotInCurrentView = this.widget.hideLayersNotInCurrentView;
    this.icon = this.widget.icon;
    this.label = this.widget.label;
    this.respectLayerVisibilityDisabled = this.widget.respectLayerVisibility;
    this.legendStyle = this.widget.style;
    this.layerInfos = this.widget.layerInfos;
    this.position = "bottom-left";
    this.respectLayerDefinitionExpression = this.widget.respectLayerDefinitionExpression;
    this.state = this.viewModel.state;
  }
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
ArcgisLegend.style = ArcgisLegendStyle0;
export {
  ArcgisLegend as arcgis_legend
};
/*! Bundled license information:

@arcgis/map-components/dist/esm/arcgis-legend.entry.js:
  (*!
   * All material copyright Esri, All Rights Reserved, unless otherwise specified.
   * See https://js.arcgis.com/4.30/esri/copyright.txt for details.
   * v4.30.7
   *)
*/
//# sourceMappingURL=arcgis-legend.entry-YRZWT5ES.js.map
