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
  newLayersGraphicsLayer,
  newWidgetsSketch
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

// ../../../node_modules/@arcgis/map-components/dist/esm/arcgis-sketch.entry.js
var sketchCss = "arcgis-sketch{}";
var ArcgisSketchStyle0 = sketchCss;
var useSketchWidget = makeWidgetController(newWidgetsSketch);
var ArcgisSketch = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.arcgisReady = createEvent(this, "arcgisReady", 7);
    this.arcgisPropertyChange = createEvent(this, "arcgisPropertyChange", 7);
    this.widgetCreate = createEvent(this, "arcgisCreate", 7);
    this.widgetDelete = createEvent(this, "arcgisDelete", 7);
    this.widgetRedo = createEvent(this, "arcgisRedo", 7);
    this.widgetUndo = createEvent(this, "arcgisUndo", 7);
    this.widgetUpdate = createEvent(this, "arcgisUpdate", 7);
    this.manager = useControllerManager(this);
    this.widget = useSketchWidget(this, {
      editConstructorProperties: this._editConstructorProperties
    });
    this.viewModel = this.widget.viewModel;
    this.arcgisPropertyChange = usePropertyChange()("state");
    this.autoDestroyDisabled = false;
    this.referenceElement = void 0;
    this.activeTool = this.widget.activeTool;
    this.availableCreateTools = this.widget.availableCreateTools;
    this.createGraphic = this.widget.createGraphic;
    this.creationMode = this.widget.creationMode;
    this.defaultCreateOptions = this.widget.defaultCreateOptions;
    this.defaultUpdateOptions = this.widget.defaultUpdateOptions;
    this.defaultGraphicsLayerDisabled = false;
    this.icon = this.widget.icon;
    this.label = this.widget.label;
    this.labelOptions = this.widget.labelOptions;
    this.layer = this.widget.layer;
    this.layout = this.widget.layout;
    this.pointSymbol = this.viewModel.pointSymbol;
    this.polylineSymbol = this.viewModel.polylineSymbol;
    this.polygonSymbol = this.viewModel.polygonSymbol;
    this.snappingOptions = this.widget.snappingOptions;
    this.tooltipOptions = this.widget.tooltipOptions;
    this.updateGraphics = this.widget.updateGraphics;
    this.hideCreateToolsPoint = this.widget.visibleElements.createTools.point;
    this.hideCreateToolsPolyline = this.widget.visibleElements.createTools.polyline;
    this.hideCreateToolsPolygon = this.widget.visibleElements.createTools.polygon;
    this.hideCreateToolsRectangle = this.widget.visibleElements.createTools.rectangle;
    this.hideCreateToolsCircle = this.widget.visibleElements.createTools.circle;
    this.hideDuplicateButton = this.widget.visibleElements.duplicateButton;
    this.hideSelectionToolsRectangleSelection = this.widget.visibleElements.selectionTools["rectangle-selection"];
    this.hideSelectionToolsLassoSelection = this.widget.visibleElements.selectionTools["lasso-selection"];
    this.hideSettingsMenu = this.widget.visibleElements.settingsMenu;
    this.hideLabelsToggle = this.widget.visibleElements.labelsToggle;
    this.hideTooltipsToggle = this.widget.visibleElements.tooltipsToggle;
    this.hideSnappingControls = this.widget.visibleElements.snappingControls;
    this.showSnappingControlsElementsHeader = this.widget.visibleElements.snappingControlsElements.header;
    this.hideSnappingControlsElementsEnabledToggle = this.widget.visibleElements.snappingControlsElements.enabledToggle;
    this.hideSnappingControlsElementsSelfEnabledToggle = this.widget.visibleElements.snappingControlsElements.selfEnabledToggle;
    this.hideSnappingControlsElementsFeatureEnabledToggle = this.widget.visibleElements.snappingControlsElements.featureEnabledToggle;
    this.hideSnappingControlsElementsLayerList = this.widget.visibleElements.snappingControlsElements.layerList;
    this.hideUndoRedoMenu = this.widget.visibleElements.undoRedoMenu;
    this.position = "bottom-left";
    this.state = this.widget.state;
  }
  componentDidLoad() {
    if (!this.defaultGraphicsLayerDisabled) {
      this.el.view?.map.add(this.widget.layer);
    }
  }
  _editConstructorProperties(properties) {
    return __async(this, null, function* () {
      if (!this.defaultGraphicsLayerDisabled) {
        properties.layer ?? (properties.layer = yield newLayersGraphicsLayer({
          title: "Sketch Layer"
        }));
      }
      return properties;
    });
  }
  //--------------------------------------------------------------------------
  //
  //  Methods
  //
  //--------------------------------------------------------------------------
  cancel() {
    return __async(this, null, function* () {
      this.widget?.cancel();
    });
  }
  complete() {
    return __async(this, null, function* () {
      this.widget?.complete();
    });
  }
  create(tool, createOptions) {
    return __async(this, null, function* () {
      yield this.widget?.create(tool, createOptions);
    });
  }
  delete() {
    return __async(this, null, function* () {
      this.widget?.delete();
    });
  }
  /** Permanently destroy the component */
  destroy() {
    return __async(this, null, function* () {
      yield this.manager.destroy();
    });
  }
  duplicate() {
    return __async(this, null, function* () {
      this.widget?.duplicate();
    });
  }
  redo() {
    return __async(this, null, function* () {
      this.widget?.redo();
    });
  }
  undo() {
    return __async(this, null, function* () {
      this.widget?.undo();
    });
  }
  update(graphic, updateOptions) {
    return __async(this, null, function* () {
      return void this.widget?.update(graphic, updateOptions);
    });
  }
  get el() {
    return getElement(this);
  }
};
ArcgisSketch.style = ArcgisSketchStyle0;
export {
  ArcgisSketch as arcgis_sketch
};
/*! Bundled license information:

@arcgis/map-components/dist/esm/arcgis-sketch.entry.js:
  (*!
   * All material copyright Esri, All Rights Reserved, unless otherwise specified.
   * See https://js.arcgis.com/4.30/esri/copyright.txt for details.
   * v4.30.7
   *)
*/
//# sourceMappingURL=arcgis-sketch.entry-K4TDU534.js.map
