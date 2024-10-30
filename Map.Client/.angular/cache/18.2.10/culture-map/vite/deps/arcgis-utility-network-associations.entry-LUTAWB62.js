import {
  onDisconnectedHelper
} from "./chunk-W7HUTCGB.js";
import {
  newWidgetsUtilityNetworkAssociations
} from "./chunk-37R24ZKG.js";
import {
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
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/map-components/dist/esm/arcgis-utility-network-associations.entry.js
var utilityNetworkAssociationsCss = "arcgis-utility-network-associations{}";
var ArcgisUtilityNetworkAssociationsStyle0 = utilityNetworkAssociationsCss;
var ArcgisUtilityNetworkAssociations = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.arcgisReady = createEvent(this, "arcgisReady", 7);
    this._watchHandles = [];
    this.referenceElement = void 0;
    this.autoRefreshAssociationsDisabled = false;
    this.connectivityAssociationsLineSymbol = void 0;
    this.includeConnectivityAssociationsDisabled = false;
    this.includeStructuralAttachmentAssociationsDisabled = false;
    this.maxAllowableAssociations = 250;
    this.maxAllowableAssociationsSliderMax = void 0;
    this.maxAllowableAssociationsSliderMin = void 0;
    this.maxAllowableAssociationsSliderStep = void 0;
    this.showArrowsConnectivity = false;
    this.showArrowsStructuralAttachment = false;
    this.showAssociationsEnabled = false;
    this.structuralAttachmentAssociationsLineSymbol = void 0;
    this.utilityNetwork = void 0;
    this.visibleElementsConnectivityAssociationsSettingsArrowsToggle = true;
    this.visibleElementsConnectivityAssociationsSettingsCapSelect = true;
    this.visibleElementsConnectivityAssociationsSettingsColorPicker = true;
    this.visibleElementsConnectivityAssociationsSettingsStylePicker = true;
    this.visibleElementsConnectivityAssociationsSettingsWidthInput = true;
    this.visibleElementsMaxAllowableAssociationsSlider = true;
    this.visibleElementsStructuralAttachmentAssociationsSettingsArrowsToggle = true;
    this.visibleElementsStructuralAttachmentAssociationsSettingsCapSelect = true;
    this.visibleElementsStructuralAttachmentAssociationsSettingsStylePicker = true;
    this.visibleElementsStructuralAttachmentAssociationsSettingsWidthInput = true;
    this.position = "bottom-left";
    this.view = void 0;
    this.widget = void 0;
  }
  referenceElementWatcher(value) {
    void referenceElementHelper(this, value);
  }
  autoRefreshAssociationsDisabledWatcher(value) {
    if (value !== void 0 && this.widget) {
      this.widget.autoRefreshAssociations = !value;
    }
  }
  connectivityAssociationsLineSymbolWatcher(value) {
    if (this.widget) {
      this.widget.connectivityAssociationsLineSymbol = value;
    }
  }
  includeConnectivityAssociationsDisabledWatcher(value) {
    if (value !== void 0 && this.widget) {
      this.widget.includeConnectivityAssociations = !value;
    }
  }
  includeStructuralAttachmentAssociationsDisabledWatcher(value) {
    if (value !== void 0 && this.widget) {
      this.widget.includeStructuralAttachmentAssociations = !value;
    }
  }
  maxAllowableAssociationsWatcher(value) {
    if (value !== void 0 && this.widget) {
      this.widget.maxAllowableAssociations = value;
    }
  }
  maxAllowableAssociationsSliderMaxWatcher(value) {
    if (value !== void 0 && this.widget) {
      this.widget.maxAllowableAssociationsSliderMax = value;
    }
  }
  maxAllowableAssociationsSliderMinWatcher(value) {
    if (value !== void 0 && this.widget) {
      this.widget.maxAllowableAssociationsSliderMin = value;
    }
  }
  maxAllowableAssociationsSliderStepWatcher(value) {
    if (value !== void 0 && this.widget) {
      this.widget.maxAllowableAssociationsSliderStep = value;
    }
  }
  showArrowsConnectivityWatcher(value) {
    if (value !== void 0 && this.widget) {
      this.widget.showArrowsConnectivity = value;
    }
  }
  showArrowsStructuralAttachmentWatcher(value) {
    if (value !== void 0 && this.widget) {
      this.widget.showArrowsStructuralAttachment = value;
    }
  }
  showAssociationsEnabledWatcher(value) {
    if (value !== void 0 && this.widget) {
      this.widget.showAssociationsEnabled = value;
    }
  }
  structuralAttachmentAssociationsLineSymbolWatcher(value) {
    if (this.widget) {
      this.widget.structuralAttachmentAssociationsLineSymbol = value;
    }
  }
  utilityNetworkWatcher(value) {
    if (this.widget) {
      this.widget.utilityNetwork = value;
    }
  }
  visibleElementsConnectivityAssociationsSettingsArrowsToggleWatcher(value) {
    if (this.widget) {
      this.widget.visibleElements = __spreadProps(__spreadValues({}, this.widget.visibleElements), {
        connectivityAssociationsSettings: __spreadProps(__spreadValues({}, this.widget.visibleElements.connectivityAssociationsSettings), {
          arrowsToggle: value
        })
      });
    }
  }
  visibleElementsConnectivityAssociationsSettingsCapSelectWatcher(value) {
    if (this.widget) {
      this.widget.visibleElements = __spreadProps(__spreadValues({}, this.widget.visibleElements), {
        connectivityAssociationsSettings: __spreadProps(__spreadValues({}, this.widget.visibleElements.connectivityAssociationsSettings), {
          capSelect: value
        })
      });
    }
  }
  visibleElementsConnectivityAssociationsSettingsColorPickerWatcher(value) {
    if (this.widget) {
      this.widget.visibleElements = __spreadProps(__spreadValues({}, this.widget.visibleElements), {
        connectivityAssociationsSettings: __spreadProps(__spreadValues({}, this.widget.visibleElements.connectivityAssociationsSettings), {
          colorPicker: value
        })
      });
    }
  }
  visibleElementsConnectivityAssociationsSettingsStylePickerWatcher(value) {
    if (this.widget) {
      this.widget.visibleElements = __spreadProps(__spreadValues({}, this.widget.visibleElements), {
        connectivityAssociationsSettings: __spreadProps(__spreadValues({}, this.widget.visibleElements.connectivityAssociationsSettings), {
          stylePicker: value
        })
      });
    }
  }
  visibleElementsConnectivityAssociationsSettingsWidthInputWatcher(value) {
    if (this.widget) {
      this.widget.visibleElements = __spreadProps(__spreadValues({}, this.widget.visibleElements), {
        connectivityAssociationsSettings: __spreadProps(__spreadValues({}, this.widget.visibleElements.connectivityAssociationsSettings), {
          widthInput: value
        })
      });
    }
  }
  visibleElementsMaxAllowableAssociationsSliderWatcher(value) {
    if (this.widget) {
      this.widget.visibleElements = __spreadProps(__spreadValues({}, this.widget.visibleElements), {
        maxAllowableAssociationsSlider: value
      });
    }
  }
  visibleElementsStructuralAttachmentAssociationsSettingsArrowsToggleWatcher(value) {
    if (this.widget) {
      this.widget.visibleElements = __spreadProps(__spreadValues({}, this.widget.visibleElements), {
        structuralAttachmentAssociationsSettings: __spreadProps(__spreadValues({}, this.widget.visibleElements.structuralAttachmentAssociationsSettings), {
          arrowsToggle: value
        })
      });
    }
  }
  visibleElementsStructuralAttachmentAssociationsSettingsCapSelectWatcher(value) {
    if (this.widget) {
      this.widget.visibleElements = __spreadProps(__spreadValues({}, this.widget.visibleElements), {
        structuralAttachmentAssociationsSettings: __spreadProps(__spreadValues({}, this.widget.visibleElements.structuralAttachmentAssociationsSettings), {
          capSelect: value
        })
      });
    }
  }
  visibleElementsStructuralAttachmentAssociationsSettingsStylePickerWatcher(value) {
    if (this.widget) {
      this.widget.visibleElements = __spreadProps(__spreadValues({}, this.widget.visibleElements), {
        structuralAttachmentAssociationsSettings: __spreadProps(__spreadValues({}, this.widget.visibleElements.structuralAttachmentAssociationsSettings), {
          stylePicker: value
        })
      });
    }
  }
  visibleElementsStructuralAttachmentAssociationsSettingsWidthInputWatcher(value) {
    if (this.widget) {
      this.widget.visibleElements = __spreadProps(__spreadValues({}, this.widget.visibleElements), {
        structuralAttachmentAssociationsSettings: __spreadProps(__spreadValues({}, this.widget.visibleElements.structuralAttachmentAssociationsSettings), {
          widthInput: value
        })
      });
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
      void this._loadUtilityNetwork();
    }
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  componentDidLoad() {
    return __async(this, null, function* () {
      const params = this._createParams();
      const widget = yield newWidgetsUtilityNetworkAssociations(params);
      this.widget = widget;
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
      key: "2b1e7613bcebcda7c19c377b2a693ea61e98b9bf",
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
  _createParams() {
    const params = {};
    params.visibleElements = {
      connectivityAssociationsSettings: {
        arrowsToggle: this.visibleElementsConnectivityAssociationsSettingsArrowsToggle,
        capSelect: this.visibleElementsConnectivityAssociationsSettingsCapSelect,
        colorPicker: this.visibleElementsConnectivityAssociationsSettingsColorPicker,
        stylePicker: this.visibleElementsConnectivityAssociationsSettingsStylePicker,
        widthInput: this.visibleElementsConnectivityAssociationsSettingsWidthInput
      },
      maxAllowableAssociationsSlider: this.visibleElementsMaxAllowableAssociationsSlider,
      structuralAttachmentAssociationsSettings: {
        arrowsToggle: this.visibleElementsStructuralAttachmentAssociationsSettingsArrowsToggle,
        capSelect: this.visibleElementsStructuralAttachmentAssociationsSettingsCapSelect,
        stylePicker: this.visibleElementsStructuralAttachmentAssociationsSettingsStylePicker,
        widthInput: this.visibleElementsStructuralAttachmentAssociationsSettingsWidthInput
      }
    };
    if (this.autoRefreshAssociationsDisabled !== void 0) {
      params.autoRefreshAssociations = !this.autoRefreshAssociationsDisabled;
    }
    if (this.connectivityAssociationsLineSymbol !== void 0) {
      params.connectivityAssociationsLineSymbol = this.connectivityAssociationsLineSymbol;
    }
    if (this.includeConnectivityAssociationsDisabled !== void 0) {
      params.includeConnectivityAssociations = !this.includeConnectivityAssociationsDisabled;
    }
    if (this.includeStructuralAttachmentAssociationsDisabled !== void 0) {
      params.includeStructuralAttachmentAssociations = !this.includeStructuralAttachmentAssociationsDisabled;
    }
    if (this.maxAllowableAssociations !== void 0) {
      params.maxAllowableAssociations = this.maxAllowableAssociations;
    }
    if (this.maxAllowableAssociationsSliderMax !== void 0) {
      params.maxAllowableAssociationsSliderMax = this.maxAllowableAssociationsSliderMax;
    }
    if (this.maxAllowableAssociationsSliderMin !== void 0) {
      params.maxAllowableAssociationsSliderMin = this.maxAllowableAssociationsSliderMin;
    }
    if (this.maxAllowableAssociationsSliderStep !== void 0) {
      params.maxAllowableAssociationsSliderStep = this.maxAllowableAssociationsSliderStep;
    }
    if (this.showArrowsConnectivity !== void 0) {
      params.showArrowsConnectivity = this.showArrowsConnectivity;
    }
    if (this.showArrowsStructuralAttachment !== void 0) {
      params.showArrowsStructuralAttachment = this.showArrowsStructuralAttachment;
    }
    if (this.showAssociationsEnabled !== void 0) {
      params.showAssociationsEnabled = this.showAssociationsEnabled;
    }
    if (this.structuralAttachmentAssociationsLineSymbol !== void 0) {
      params.structuralAttachmentAssociationsLineSymbol = this.structuralAttachmentAssociationsLineSymbol;
    }
    if (this.utilityNetwork !== void 0) {
      params.utilityNetwork = this.utilityNetwork;
    }
    return params;
  }
  _loadUtilityNetwork() {
    return __async(this, null, function* () {
      if (this.view?.map && this.view.map.portalItem) {
        yield this.view.map.load();
        const utilityNetwork = this.view.map.utilityNetworks.getItemAt(0);
        yield utilityNetwork.load();
        this.utilityNetwork = utilityNetwork;
      }
    });
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "referenceElement": ["referenceElementWatcher"],
      "autoRefreshAssociationsDisabled": ["autoRefreshAssociationsDisabledWatcher"],
      "connectivityAssociationsLineSymbol": ["connectivityAssociationsLineSymbolWatcher"],
      "includeConnectivityAssociationsDisabled": ["includeConnectivityAssociationsDisabledWatcher"],
      "includeStructuralAttachmentAssociationsDisabled": ["includeStructuralAttachmentAssociationsDisabledWatcher"],
      "maxAllowableAssociations": ["maxAllowableAssociationsWatcher"],
      "maxAllowableAssociationsSliderMax": ["maxAllowableAssociationsSliderMaxWatcher"],
      "maxAllowableAssociationsSliderMin": ["maxAllowableAssociationsSliderMinWatcher"],
      "maxAllowableAssociationsSliderStep": ["maxAllowableAssociationsSliderStepWatcher"],
      "showArrowsConnectivity": ["showArrowsConnectivityWatcher"],
      "showArrowsStructuralAttachment": ["showArrowsStructuralAttachmentWatcher"],
      "showAssociationsEnabled": ["showAssociationsEnabledWatcher"],
      "structuralAttachmentAssociationsLineSymbol": ["structuralAttachmentAssociationsLineSymbolWatcher"],
      "utilityNetwork": ["utilityNetworkWatcher"],
      "visibleElementsConnectivityAssociationsSettingsArrowsToggle": ["visibleElementsConnectivityAssociationsSettingsArrowsToggleWatcher"],
      "visibleElementsConnectivityAssociationsSettingsCapSelect": ["visibleElementsConnectivityAssociationsSettingsCapSelectWatcher"],
      "visibleElementsConnectivityAssociationsSettingsColorPicker": ["visibleElementsConnectivityAssociationsSettingsColorPickerWatcher"],
      "visibleElementsConnectivityAssociationsSettingsStylePicker": ["visibleElementsConnectivityAssociationsSettingsStylePickerWatcher"],
      "visibleElementsConnectivityAssociationsSettingsWidthInput": ["visibleElementsConnectivityAssociationsSettingsWidthInputWatcher"],
      "visibleElementsMaxAllowableAssociationsSlider": ["visibleElementsMaxAllowableAssociationsSliderWatcher"],
      "visibleElementsStructuralAttachmentAssociationsSettingsArrowsToggle": ["visibleElementsStructuralAttachmentAssociationsSettingsArrowsToggleWatcher"],
      "visibleElementsStructuralAttachmentAssociationsSettingsCapSelect": ["visibleElementsStructuralAttachmentAssociationsSettingsCapSelectWatcher"],
      "visibleElementsStructuralAttachmentAssociationsSettingsStylePicker": ["visibleElementsStructuralAttachmentAssociationsSettingsStylePickerWatcher"],
      "visibleElementsStructuralAttachmentAssociationsSettingsWidthInput": ["visibleElementsStructuralAttachmentAssociationsSettingsWidthInputWatcher"],
      "position": ["positionWatcher"],
      "view": ["viewWatcher"]
    };
  }
};
ArcgisUtilityNetworkAssociations.style = ArcgisUtilityNetworkAssociationsStyle0;
export {
  ArcgisUtilityNetworkAssociations as arcgis_utility_network_associations
};
/*! Bundled license information:

@arcgis/map-components/dist/esm/arcgis-utility-network-associations.entry.js:
  (*!
   * All material copyright Esri, All Rights Reserved, unless otherwise specified.
   * See https://js.arcgis.com/4.30/esri/copyright.txt for details.
   * v4.30.7
   *)
*/
//# sourceMappingURL=arcgis-utility-network-associations.entry-LUTAWB62.js.map
