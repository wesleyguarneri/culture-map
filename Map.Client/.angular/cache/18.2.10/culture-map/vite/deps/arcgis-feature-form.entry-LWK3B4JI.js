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
  newWidgetsFeatureForm
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

// ../../../node_modules/@arcgis/map-components/dist/esm/arcgis-feature-form.entry.js
var featureFormCss = "";
var ArcgisFeatureFormStyle0 = featureFormCss;
var useFeatureFormWidget = makeWidgetController(newWidgetsFeatureForm);
var ArcgisFeatureForm = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.arcgisReady = createEvent(this, "arcgisReady", 7);
    this.widgetSubmit = createEvent(this, "arcgisSubmit", 7);
    this.widgetValueChange = createEvent(this, "arcgisValueChange", 7);
    this.arcgisPropertyChange = createEvent(this, "arcgisPropertyChange", 7);
    this.manager = useControllerManager(this);
    this.widget = useFeatureFormWidget(this);
    this.viewModel = this.widget.viewModel;
    this.arcgisPropertyChange = usePropertyChange()("state");
    this.autoDestroyDisabled = false;
    this.icon = this.widget.icon;
    this.label = this.widget.label;
    this.headingLevel = this.widget.headingLevel;
    this.referenceElement = void 0;
    this.position = "bottom-left";
    this.feature = this.widget.feature;
    this.formTemplate = this.widget.formTemplate;
    this.groupDisplay = this.widget.groupDisplay;
    this.layer = this.widget.layer;
    this.timeZone = this.widget.timeZone;
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
  getValues() {
    return __async(this, null, function* () {
      return this.widget?.getValues();
    });
  }
  submit() {
    return __async(this, null, function* () {
      return this.widget?.submit();
    });
  }
  get el() {
    return getElement(this);
  }
};
ArcgisFeatureForm.style = ArcgisFeatureFormStyle0;
export {
  ArcgisFeatureForm as arcgis_feature_form
};
/*! Bundled license information:

@arcgis/map-components/dist/esm/arcgis-feature-form.entry.js:
  (*!
   * All material copyright Esri, All Rights Reserved, unless otherwise specified.
   * See https://js.arcgis.com/4.30/esri/copyright.txt for details.
   * v4.30.7
   *)
*/
//# sourceMappingURL=arcgis-feature-form.entry-LWK3B4JI.js.map