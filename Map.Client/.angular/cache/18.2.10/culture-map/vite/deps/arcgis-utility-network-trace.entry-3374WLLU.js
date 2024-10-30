import {
  onDisconnectedHelper
} from "./chunk-W7HUTCGB.js";
import {
  importCoreReactiveUtils,
  newWidgetsUtilityNetworkTrace
} from "./chunk-37R24ZKG.js";
import {
  addHandles,
  attachToParent,
  defineViewProperty,
  referenceElementHelper
} from "./chunk-GC7DXVF7.js";
import {
  createEvent,
  getElement,
  h,
  registerInstance
} from "./chunk-IEFK3IO5.js";
import {
  __async
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/map-components/dist/esm/arcgis-utility-network-trace.entry.js
var utilityNetworkTraceCss = "";
var ArcgisUtilityNetworkTraceStyle0 = utilityNetworkTraceCss;
var ArcgisUtilityNetworkTrace = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.arcgisReady = createEvent(this, "arcgisReady", 7);
    this.arcgisAddFlag = createEvent(this, "arcgisAddFlag", 7);
    this.arcgisAddFlagComplete = createEvent(this, "arcgisAddFlagComplete", 7);
    this.arcgisAddFlagError = createEvent(this, "arcgisAddFlagError", 7);
    this.arcgisAddResultArea = createEvent(this, "arcgisAddResultArea", 7);
    this.arcgisRemoveResultArea = createEvent(this, "arcgisRemoveResultArea", 7);
    this._watchHandles = [];
    this.referenceElement = void 0;
    this.enableResultArea = false;
    this.defaultGraphicColor = {
      color: [255, 255, 0, 0.6],
      haloOpacity: 0.9,
      fillOpacity: 0.2,
      hex: "#FFFF00"
    };
    this.disabled = false;
    this.flags = [];
    this.gdbVersion = "sde.DEFAULT";
    this.inputSettings = [];
    this.resultAreaProperties = void 0;
    this.selectedTraces = [];
    this.selectOnCompleteDisabled = false;
    this.showGraphicsOnCompleteDisabled = false;
    this.showSelectionAttributesDisabled = false;
    this.position = "bottom-left";
    this.view = void 0;
    this.widget = void 0;
  }
  referenceElementWatcher(value) {
    void referenceElementHelper(this, value);
  }
  enableResultAreaWatcher(value) {
    if (this.widget) {
      this.widget.enableResultArea = value;
    }
  }
  defaultGraphicColorWatcher(value) {
    if (this.widget) {
      this.widget.defaultGraphicColor = value;
    }
  }
  disabledWatcher(value, old) {
    if (this.widget && value !== old) {
      this.widget.disabled = value;
    }
  }
  flagsWatcher(value) {
    if (this.widget) {
      this.widget.flags = value;
    }
  }
  gdbVersionWatcher(value) {
    if (this.widget) {
      this.widget.gdbVersion = value;
    }
  }
  inputSettingsWatcher(value) {
    if (this.widget) {
      this.widget.inputSettings = value;
    }
  }
  resultAreaPropertiesWatcher(value) {
    if (this.widget) {
      this.widget.resultAreaProperties = value;
    }
  }
  selectedTracesWatcher(value) {
    if (this.widget) {
      this.widget.selectedTraces = value;
    }
  }
  selectOnCompleteDisabledWatcher(value) {
    if (value !== void 0 && this.widget) {
      this.widget.selectOnComplete = !value;
    }
  }
  showGraphicsOnCompleteDisabledWatcher(value) {
    if (value !== void 0 && this.widget) {
      this.widget.showGraphicsOnComplete = !value;
    }
  }
  showSelectionAttributesDisabledWatcher(value) {
    if (value !== void 0 && this.widget) {
      this.widget.showSelectionAttributes = !value;
    }
  }
  positionWatcher(value) {
    if (value !== void 0 && this.widget && this.el.childElem) {
      this.view.ui.move(this.el.childElem, value);
    }
  }
  viewWatcher(value) {
    if (value !== void 0 && this.widget) {
      this.widget.view = value;
    }
  }
  //--------------------------------------------------------------------------
  //
  //  Methods
  //
  //--------------------------------------------------------------------------
  checkCanTrace() {
    return __async(this, null, function* () {
      yield this.widget?.checkCanTrace();
    });
  }
  confirmReset() {
    return __async(this, null, function* () {
      this.widget?.confirmReset();
    });
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  componentDidLoad() {
    return __async(this, null, function* () {
      const params = this._createParams();
      const widget = yield newWidgetsUtilityNetworkTrace(params);
      this.widget = widget;
      yield this._addWatchers();
      this._proxyEvents();
      this._addContainer();
      defineViewProperty(this);
      attachToParent(this);
    });
  }
  disconnectedCallback() {
    onDisconnectedHelper(this);
  }
  render() {
    return h("div", {
      key: "1799b3fcd3f0799989be0662f828451fe1cb006e",
      ref: (el) => this.el.childElem = el
    });
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  _addContainer() {
    this.widget.container = this.el.childElem;
  }
  _addWatchers() {
    return __async(this, null, function* () {
      const {
        watch
      } = yield importCoreReactiveUtils();
      addHandles(this, watch(() => this.widget.disabled, (value) => this.disabled = value));
    });
  }
  _createParams() {
    const params = {};
    if (this.defaultGraphicColor) {
      params.defaultGraphicColor = this.defaultGraphicColor;
    }
    if (this.enableResultArea !== void 0) {
      params.enableResultArea = this.enableResultArea;
    }
    if (this.flags) {
      params.flags = this.flags;
    }
    if (this.gdbVersion) {
      params.gdbVersion = this.gdbVersion;
    }
    if (this.inputSettings) {
      params.inputSettings = this.inputSettings;
    }
    if (this.resultAreaProperties) {
      params.resultAreaProperties = this.resultAreaProperties;
    }
    if (this.selectedTraces) {
      params.selectedTraces = this.selectedTraces;
    }
    if (this.selectOnCompleteDisabled !== void 0) {
      params.selectOnComplete = !this.selectOnCompleteDisabled;
    }
    if (this.showGraphicsOnCompleteDisabled !== void 0) {
      params.showGraphicsOnComplete = !this.showGraphicsOnCompleteDisabled;
    }
    if (this.showSelectionAttributesDisabled !== void 0) {
      params.showSelectionAttributes = !this.showSelectionAttributesDisabled;
    }
    if (this.view) {
      params.view = this.view;
    }
    return params;
  }
  _proxyEvents() {
    this.widget.on("add-flag", (e) => this.arcgisAddFlag.emit(e));
    this.widget.on("add-flag-complete", (e) => this.arcgisAddFlagComplete.emit(e));
    this.widget.on("add-flag-error", (e) => this.arcgisAddFlagError.emit(e));
    this.widget.on("add-result-area", (e) => this.arcgisAddResultArea.emit(e));
    this.widget.on("remove-result-area", (e) => this.arcgisRemoveResultArea.emit(e));
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "referenceElement": ["referenceElementWatcher"],
      "enableResultArea": ["enableResultAreaWatcher"],
      "defaultGraphicColor": ["defaultGraphicColorWatcher"],
      "disabled": ["disabledWatcher"],
      "flags": ["flagsWatcher"],
      "gdbVersion": ["gdbVersionWatcher"],
      "inputSettings": ["inputSettingsWatcher"],
      "resultAreaProperties": ["resultAreaPropertiesWatcher"],
      "selectedTraces": ["selectedTracesWatcher"],
      "selectOnCompleteDisabled": ["selectOnCompleteDisabledWatcher"],
      "showGraphicsOnCompleteDisabled": ["showGraphicsOnCompleteDisabledWatcher"],
      "showSelectionAttributesDisabled": ["showSelectionAttributesDisabledWatcher"],
      "position": ["positionWatcher"],
      "view": ["viewWatcher"]
    };
  }
};
ArcgisUtilityNetworkTrace.style = ArcgisUtilityNetworkTraceStyle0;
export {
  ArcgisUtilityNetworkTrace as arcgis_utility_network_trace
};
/*! Bundled license information:

@arcgis/map-components/dist/esm/arcgis-utility-network-trace.entry.js:
  (*!
   * All material copyright Esri, All Rights Reserved, unless otherwise specified.
   * See https://js.arcgis.com/4.30/esri/copyright.txt for details.
   * v4.30.7
   *)
*/
//# sourceMappingURL=arcgis-utility-network-trace.entry-3374WLLU.js.map
