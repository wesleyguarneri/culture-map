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
  newWidgetsPrint
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

// ../../../node_modules/@arcgis/map-components/dist/esm/arcgis-print.entry.js
var printCss = "";
var ArcgisPrintStyle0 = printCss;
var usePrintWidget = makeWidgetController(newWidgetsPrint);
var ArcgisPrint = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.arcgisReady = createEvent(this, "arcgisReady", 7);
    this.widgetComplete = createEvent(this, "arcgisComplete", 7);
    this.widgetSubmit = createEvent(this, "arcgisSubmit", 7);
    this.arcgisPropertyChange = createEvent(this, "arcgisPropertyChange", 7);
    this.manager = useControllerManager(this);
    this.widget = usePrintWidget(this);
    this.viewModel = this.widget.viewModel;
    this.arcgisPropertyChange = usePropertyChange()("state");
    this.autoDestroyDisabled = false;
    this.referenceElement = void 0;
    this.allowedFormats = this.manager.getSet(this.widget.allowedFormats, {
      set: (value) => typeof value === "string" && value !== "all" ? value.split(",") : value
    });
    this.allowedLayouts = this.manager.getSet(this.widget.allowedLayouts, {
      set: (value) => typeof value === "string" && value !== "all" ? value.split(",") : value
    });
    this.exportedLinks = this.widget.exportedLinks;
    this.extraParameters = this.widget.extraParameters;
    this.icon = this.widget.icon;
    this.label = this.widget.label;
    this.headingLevel = this.widget.headingLevel;
    this.includeDefaultTemplatesDisabled = this.widget.includeDefaultTemplates;
    this.portal = this.widget.portal;
    this.printServiceUrl = this.widget.printServiceUrl;
    this.showPrintAreaEnabled = this.widget.showPrintAreaEnabled;
    this.templateCustomTextElements = this.widget.templateCustomTextElements;
    this.templateOptions = this.widget.templateOptions;
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
ArcgisPrint.style = ArcgisPrintStyle0;
export {
  ArcgisPrint as arcgis_print
};
/*! Bundled license information:

@arcgis/map-components/dist/esm/arcgis-print.entry.js:
  (*!
   * All material copyright Esri, All Rights Reserved, unless otherwise specified.
   * See https://js.arcgis.com/4.30/esri/copyright.txt for details.
   * v4.30.7
   *)
*/
//# sourceMappingURL=arcgis-print.entry-GI3M4SAG.js.map
