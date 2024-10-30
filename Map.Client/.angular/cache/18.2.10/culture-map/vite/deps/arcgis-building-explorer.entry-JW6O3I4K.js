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
  newWidgetsBuildingExplorer
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

// ../../../node_modules/@arcgis/map-components/dist/esm/arcgis-building-explorer.entry.js
var buildingExplorerCss = "";
var ArcgisBuildingExplorerStyle0 = buildingExplorerCss;
var useBuildingExplorerWidget = makeWidgetController(newWidgetsBuildingExplorer);
var ArcgisBuildingExplorer = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.arcgisReady = createEvent(this, "arcgisReady", 7);
    this.arcgisPropertyChange = createEvent(this, "arcgisPropertyChange", 7);
    this.manager = useControllerManager(this);
    this.widget = useBuildingExplorerWidget(this);
    this.viewModel = this.widget.viewModel;
    this.arcgisPropertyChange = usePropertyChange()("level", "phase", "state");
    this.autoDestroyDisabled = false;
    this.icon = this.widget.icon;
    this.label = this.widget.label;
    this.layers = this.widget.layers;
    this.headingLevel = this.widget.headingLevel;
    this.level = this.viewModel.level;
    this.phase = this.viewModel.phase;
    this.state = this.viewModel.state;
    this.hideLevels = this.widget.visibleElements.levels;
    this.hidePhases = this.widget.visibleElements.phases;
    this.hideDisciplines = this.widget.visibleElements.disciplines;
    this.position = "bottom-left";
    this.referenceElement = void 0;
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
ArcgisBuildingExplorer.style = ArcgisBuildingExplorerStyle0;
export {
  ArcgisBuildingExplorer as arcgis_building_explorer
};
/*! Bundled license information:

@arcgis/map-components/dist/esm/arcgis-building-explorer.entry.js:
  (*!
   * All material copyright Esri, All Rights Reserved, unless otherwise specified.
   * See https://js.arcgis.com/4.30/esri/copyright.txt for details.
   * v4.30.7
   *)
*/
//# sourceMappingURL=arcgis-building-explorer.entry-JW6O3I4K.js.map
