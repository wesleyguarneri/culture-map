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
  newWidgetsEditor
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

// ../../../node_modules/@arcgis/map-components/dist/esm/arcgis-editor.entry.js
var editorCss = "";
var ArcgisEditorStyle0 = editorCss;
var useEditorWidget = makeWidgetController(newWidgetsEditor);
var ArcgisEditor = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.arcgisReady = createEvent(this, "arcgisReady", 7);
    this.arcgisPropertyChange = createEvent(this, "arcgisPropertyChange", 7);
    this.manager = useControllerManager(this);
    this.widget = useEditorWidget(this);
    this.viewModel = this.widget.viewModel;
    this.arcgisPropertyChange = usePropertyChange()("activeWorkflow", "state");
    this.autoDestroyDisabled = false;
    this.referenceElement = void 0;
    this.activeWorkflow = this.widget.activeWorkflow;
    this.allowedWorkflows = this.widget.allowedWorkflows;
    this.icon = this.widget.icon;
    this.label = this.widget.label;
    this.labelOptions = this.widget.labelOptions;
    this.layerInfos = this.widget.layerInfos;
    this.snappingOptions = this.widget.snappingOptions;
    this.supportingWidgetDefaults = this.widget.supportingWidgetDefaults;
    this.tooltipOptions = this.widget.tooltipOptions;
    this.headingLevel = this.widget.headingLevel;
    this.hideCreateFeaturesSection = this.widget.visibleElements.createFeaturesSection;
    this.hideEditFeaturesSection = this.widget.visibleElements.editFeaturesSection;
    this.hideLabelsToggle = this.widget.visibleElements.labelsToggle;
    this.hideTooltipsToggle = this.widget.visibleElements.tooltipsToggle;
    this.showSnappingControlsElementsHeader = this.widget.visibleElements.snappingControlsElements.header;
    this.hideSnappingControlsElementsEnabledToggle = this.widget.visibleElements.snappingControlsElements.enabledToggle;
    this.hideSnappingControlsElementsSelfEnabledToggle = this.widget.visibleElements.snappingControlsElements.selfEnabledToggle;
    this.hideSnappingControlsElementsFeatureEnabledToggle = this.widget.visibleElements.snappingControlsElements.featureEnabledToggle;
    this.hideSnappingControlsElementsLayerList = this.widget.visibleElements.snappingControlsElements.layerList;
    this.position = "bottom-left";
    this.state = this.viewModel.state;
  }
  //--------------------------------------------------------------------------
  //
  //  Methods
  //
  //--------------------------------------------------------------------------
  cancelWorkflow() {
    return __async(this, null, function* () {
      yield this.widget?.cancelWorkflow();
    });
  }
  /** Permanently destroy the component */
  destroy() {
    return __async(this, null, function* () {
      yield this.manager.destroy();
    });
  }
  deleteFeatureFromWorkflow() {
    return __async(this, null, function* () {
      yield this.widget?.deleteFeatureFromWorkflow();
    });
  }
  startCreateFeaturesWorkflowAtFeatureCreation(info) {
    return __async(this, null, function* () {
      yield this.widget?.startCreateFeaturesWorkflowAtFeatureCreation(info);
    });
  }
  startCreateFeaturesWorkflowAtFeatureTypeSelection() {
    return __async(this, null, function* () {
      yield this.widget?.startCreateFeaturesWorkflowAtFeatureTypeSelection();
    });
  }
  startUpdateWorkflowAtFeatureEdit(feature) {
    return __async(this, null, function* () {
      yield this.widget?.startUpdateWorkflowAtFeatureEdit(feature);
    });
  }
  startUpdateWorkflowAtFeatureSelection() {
    return __async(this, null, function* () {
      yield this.widget?.startUpdateWorkflowAtFeatureSelection();
    });
  }
  startUpdateWorkflowAtMultipleFeatureSelection(candidates) {
    return __async(this, null, function* () {
      yield this.widget?.startUpdateWorkflowAtMultipleFeatureSelection(candidates);
    });
  }
  get el() {
    return getElement(this);
  }
};
ArcgisEditor.style = ArcgisEditorStyle0;
export {
  ArcgisEditor as arcgis_editor
};
/*! Bundled license information:

@arcgis/map-components/dist/esm/arcgis-editor.entry.js:
  (*!
   * All material copyright Esri, All Rights Reserved, unless otherwise specified.
   * See https://js.arcgis.com/4.30/esri/copyright.txt for details.
   * v4.30.7
   *)
*/
//# sourceMappingURL=arcgis-editor.entry-M52L25NS.js.map
