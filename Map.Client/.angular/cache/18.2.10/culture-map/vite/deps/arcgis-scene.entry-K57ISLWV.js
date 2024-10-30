import {
  load
} from "./chunk-Y6JJRVUO.js";
import {
  accessorSupport,
  makeAccessorController,
  useControllerManager
} from "./chunk-ULE6BIEJ.js";
import {
  importCoreReactiveUtils,
  newViewsSceneView,
  newWebScene
} from "./chunk-37R24ZKG.js";
import {
  isNotSameCamera,
  isNotSameEnvironment,
  isNotSameViewpoint,
  parseCenter
} from "./chunk-GC7DXVF7.js";
import {
  createEvent,
  getElement,
  h,
  registerInstance
} from "./chunk-IEFK3IO5.js";
import {
  __async,
  __objRest
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/map-components/dist/esm/arcgis-scene.entry.js
var sceneCss = ".arcgis-scene{padding:0;margin:0;height:100%;width:100%}";
var ArcgisSceneStyle0 = sceneCss;
var useWebScene = makeAccessorController(newWebScene);
var useSceneView = makeAccessorController(newViewsSceneView);
var ArcgisScene = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.arcgisViewReadyChange = createEvent(this, "arcgisViewReadyChange", 7);
    this.arcgisViewChange = createEvent(this, "arcgisViewChange", 7);
    this.arcgisViewClick = createEvent(this, "arcgisViewClick", 7);
    this.arcgisViewDoubleClick = createEvent(this, "arcgisViewDoubleClick", 7);
    this.arcgisViewDrag = createEvent(this, "arcgisViewDrag", 7);
    this.arcgisViewHold = createEvent(this, "arcgisViewHold", 7);
    this.arcgisViewImmediateClick = createEvent(this, "arcgisViewImmediateClick", 7);
    this.arcgisViewImmediateDoubleClick = createEvent(this, "arcgisViewImmediateDoubleClick", 7);
    this.arcgisViewKeyDown = createEvent(this, "arcgisViewKeyDown", 7);
    this.arcgisViewKeyUp = createEvent(this, "arcgisViewKeyUp", 7);
    this.arcgisViewLayerviewCreate = createEvent(this, "arcgisViewLayerviewCreate", 7);
    this.arcgisViewLayerviewCreateError = createEvent(this, "arcgisViewLayerviewCreateError", 7);
    this.arcgisViewLayerviewDestroy = createEvent(this, "arcgisViewLayerviewDestroy", 7);
    this.arcgisViewMouseWheel = createEvent(this, "arcgisViewMouseWheel", 7);
    this.arcgisViewPointerDown = createEvent(this, "arcgisViewPointerDown", 7);
    this.arcgisViewPointerEnter = createEvent(this, "arcgisViewPointerEnter", 7);
    this.arcgisViewPointerLeave = createEvent(this, "arcgisViewPointerLeave", 7);
    this.arcgisViewPointerMove = createEvent(this, "arcgisViewPointerMove", 7);
    this.arcgisViewPointerUp = createEvent(this, "arcgisViewPointerUp", 7);
    this.manager = useControllerManager(this);
    this.reactiveUtils = load(importCoreReactiveUtils);
    this._map = useWebScene(this, {
      editConstructorProperties: this._editMapProperties
    });
    this._setChildElement = (el) => {
      this.el.childElem = el;
    };
    this.autoDestroyDisabled = false;
    this.view = this.manager.readonly(useSceneView(this, {
      editConstructorProperties: this._editViewProperties
    }));
    this.map = this.view.map;
    this.allLayerViews = this.view.allLayerViews;
    this.alphaCompositingEnabled = this.view.alphaCompositingEnabled;
    this.analyses = this.view.analyses;
    this.basemapView = this.view.basemapView;
    this.basemap = this._map.basemap;
    this.camera = this.manager.getSet(void 0, {
      get: () => this.view.camera,
      set: (newValue, oldValue) => isNotSameCamera(oldValue, newValue) ? newValue : oldValue
    });
    this.center = this.manager.getSet(void 0, {
      get: (value) => this.view.center ?? value,
      set: (newValue) => {
        const parsed = parseCenter(newValue, this.ready ? this.view : void 0);
        if (!this.ready) {
          return parsed;
        }
        this.view.center = parsed;
        return this.view.center;
      }
    });
    this.clippingArea = this.manager.getSet(this.view.clippingArea, {
      set: (newValue, oldValue) => oldValue?.equals(newValue) ? oldValue : newValue
    });
    this.constraints = this.view.constraints;
    this.environment = this.manager.getSet(this.view.environment, {
      set: (newValue, oldValue) => isNotSameEnvironment(oldValue, newValue) ? newValue : oldValue
    });
    this.extent = this.manager.getSet(void 0, {
      get: (extent) => this.view.extent ?? extent,
      set: (newValue, oldValue) => {
        if (!this.view.ready) {
          return newValue;
        }
        if (newValue && !oldValue?.equals(newValue)) {
          this.view.extent = newValue;
        }
        return this.view.extent;
      }
    });
    this.fatalError = this.view.fatalError;
    this.floors = this.view.floors;
    this.gamepad = this.manager.getSet(void 0, {
      get: () => this.ready ? this.view.input.gamepad : void 0,
      set: "ignore"
    });
    this.graphics = this.view.graphics;
    this.ground = this._map.ground;
    this.groundView = this.view.groundView;
    this.highlightOptions = this.view.highlightOptions;
    this.interacting = this.manager.getSet(false, {
      get: () => this.view.interacting,
      set: "ignore"
    });
    this.itemId = this.manager.getSet(void 0, {
      get: (value) => this._map.portalItem?.id ?? value,
      set: (newValue) => {
        if (this.ready) {
          accessorSupport.reCreate(this._map, this).then(() => {
            this.view.map = this._map;
          }).catch(console.error);
        }
        return newValue;
      }
    });
    this.layerViews = this.view.layerViews;
    this.magnifier = this.view.magnifier;
    this.navigating = this.manager.getSet(false, {
      get: () => this.view.navigating,
      set: "ignore"
    });
    this.navigation = this.view.navigation;
    this.padding = this.view.padding;
    this.performanceInfo = this.manager.getSet(void 0, {
      get: () => this.view.performanceInfo,
      set: "ignore"
    });
    this.popup = this.view.popup;
    this.popupDisabled = this.view.popupEnabled;
    this.qualityProfile = this.view.qualityProfile;
    this.ready = this.view.ready;
    this.resolution = this.manager.getSet(void 0, {
      get: () => this.view.resolution,
      set: "ignore"
    });
    this.scale = this.manager.getSet(void 0, {
      get: (scale) => this.view.scale ?? scale,
      set: (newValue) => {
        if (this.ready) {
          this.view.scale = newValue;
        }
        return newValue;
      }
    });
    this.spatialReference = this.manager.getSet(this.view.spatialReference, {
      set: (newValue, oldValue) => oldValue?.equals(newValue) ? oldValue : newValue
    });
    this.stationary = this.manager.getSet(true, {
      get: () => this.view.stationary,
      set: "ignore"
    });
    this.suspended = this.view.suspended;
    this.theme = this.view.theme;
    this.timeExtent = this.view.timeExtent;
    this.toMap = this.manager.readonly((...args) => this.view.toMap(...args));
    this.toScreen = this.manager.readonly((...args) => this.view.toScreen(...args));
    this.updating = this.view.updating;
    this.viewingMode = this.view.viewingMode;
    this.viewpoint = this.manager.getSet(void 0, {
      get: () => this.view.viewpoint,
      set: (newValue, oldValue) => isNotSameViewpoint(oldValue, newValue) ? newValue : oldValue
    });
    this.zoom = this.manager.getSet(void 0, {
      get: (zoom) => this.view.zoom ?? zoom,
      set: (newValue) => {
        if (this.ready) {
          this.view.zoom = newValue;
        }
        return newValue;
      }
    });
  }
  //--------------------------------------------------------------------------
  //
  //  Methods
  //
  //--------------------------------------------------------------------------
  /**
   * Adds a layer to the map layers collection.
   */
  addLayer(layer, index) {
    return __async(this, null, function* () {
      this.map?.add(layer, index);
    });
  }
  /**
   * Adds a layer or array of layers to the map layers collection.
   */
  addLayers(layers, index) {
    return __async(this, null, function* () {
      this.map?.addMany(layers, index);
    });
  }
  /**
   * Closes the popup.
   */
  closePopup() {
    return __async(this, null, function* () {
      this.view?.closePopup();
    });
  }
  /**
   * Destroys the view, and any associated resources, including its map, popup, and UI elements.
   */
  destroy() {
    return __async(this, null, function* () {
      yield this.manager.destroy();
    });
  }
  /**
   * Sets the view to a given target.
   */
  goTo(target, options) {
    return __async(this, null, function* () {
      return yield this.view?.goTo(target, options);
    });
  }
  /**
   * Returns hit test results from each layer that intersects the specified screen coordinates.
   */
  hitTest(screenPoint, options) {
    return __async(this, null, function* () {
      return yield this.view?.hitTest(screenPoint, options);
    });
  }
  /**
   * Opens the popup at the given location with content defined either explicitly with content or driven
   * from the PopupTemplate of input features.
   */
  openPopup(options) {
    return __async(this, null, function* () {
      yield this.view?.openPopup(options);
    });
  }
  /**
   * Create a screenshot of the current view.
   */
  takeScreenshot(options) {
    return __async(this, null, function* () {
      return yield this.view?.takeScreenshot(options);
    });
  }
  /**
   * Call this method to clear any fatal errors resulting from a lost WebGL context.
   */
  tryFatalErrorRecovery() {
    return __async(this, null, function* () {
      this.view?.tryFatalErrorRecovery();
    });
  }
  whenAnalysisView(analysis) {
    return __async(this, null, function* () {
      return yield this.view?.whenAnalysisView(analysis);
    });
  }
  /**
   * Gets the LayerView created on the view for the given layer.
   */
  whenLayerView(layer) {
    return __async(this, null, function* () {
      return yield this.view?.whenLayerView(layer);
    });
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  componentDidLoad() {
    var _a;
    (_a = this.view).container ?? (_a.container = this.el.childElem);
    const {
      watch
    } = this.reactiveUtils;
    this.manager.onLifecycle(() => [watch(() => this.view.stationary, () => {
      this.arcgisViewChange.emit();
    }, {
      initial: true
    }), watch(() => this.view.ready, () => this.arcgisViewReadyChange.emit(), {
      initial: this.view.ready
    })]);
    accessorSupport.reEmitAccessorEvents(this.manager, this.view, this.reactiveUtils, "arcgisView");
  }
  render() {
    return h("div", {
      key: "6ba77135d59e49e02877423619ed7dad7cd01d19",
      class: "arcgis-scene",
      ref: this._setChildElement
    });
  }
  _editMapProperties(mapProperties) {
    if (this.map) {
      this._map = this.map;
    }
    if (this.itemId) {
      mapProperties.portalItem = {
        id: this.itemId
      };
    } else if (!this.basemap) {
      mapProperties.basemap = "topo-vector";
    }
    if (!this.ground) {
      mapProperties.ground = "world-elevation";
    }
    const _a = mapProperties, {
      basemap
    } = _a, rest = __objRest(_a, [
      "basemap"
    ]);
    if (!basemap) {
      mapProperties = rest;
    }
    return mapProperties;
  }
  _editViewProperties(properties) {
    if (!this.view.ui) {
      properties.ui = {
        components: ["attribution"]
      };
    }
    properties.map ?? (properties.map = this._map);
    const center = parseCenter(this.center, void 0);
    if (center) {
      properties.center = center;
    }
    if (this.viewpoint) {
      properties.viewpoint = this.viewpoint;
    }
    if (this.scale !== void 0) {
      properties.scale = this.scale;
    }
    if (this.extent) {
      properties.extent = this.extent;
    }
    if (this.camera) {
      properties.camera = this.camera;
    }
    if (this.zoom !== void 0) {
      properties.zoom = this.zoom;
    }
    return properties;
  }
  get el() {
    return getElement(this);
  }
};
ArcgisScene.style = ArcgisSceneStyle0;
export {
  ArcgisScene as arcgis_scene
};
/*! Bundled license information:

@arcgis/map-components/dist/esm/arcgis-scene.entry.js:
  (*!
   * All material copyright Esri, All Rights Reserved, unless otherwise specified.
   * See https://js.arcgis.com/4.30/esri/copyright.txt for details.
   * v4.30.7
   *)
*/
//# sourceMappingURL=arcgis-scene.entry-K57ISLWV.js.map
