import {
  __async
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/map-components/dist/esm/index-d2df902e.js
function classes(...classes2) {
  const effectiveClasses = [];
  for (let i = 0; i < classes2.length; i++) {
    const arg = classes2[i];
    if (typeof arg === "string") {
      effectiveClasses.push(arg);
    } else if (Array.isArray(arg)) {
      effectiveClasses.push.apply(effectiveClasses, arg);
    } else if (typeof arg === "object") {
      for (const prop in arg) {
        if (arg[prop]) {
          effectiveClasses.push(prop);
        }
      }
    }
  }
  const className = effectiveClasses.join(" ");
  effectiveClasses.length = 0;
  return className;
}
var Deferred = class {
  /**
   * Resolves the promise.
   * @param value The value to resolve the promise with.
   */
  resolve(_value) {
  }
  /**
   * Rejects the promise.
   */
  reject(_error) {
  }
  /**
   * Creates a new deferred promise.
   */
  constructor() {
    this.promise = new Promise((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
    });
  }
};
function inTargetElement(element, targetElement) {
  let currentElement = element;
  while (currentElement) {
    if (currentElement === targetElement) {
      return true;
    }
    if (!currentElement.parentNode) {
      return false;
    }
    if (currentElement.parentNode instanceof ShadowRoot) {
      currentElement = currentElement.parentNode.host;
    } else {
      currentElement = currentElement.parentNode;
    }
  }
  return false;
}
function observeAncestorsMutation(element, attributeFilter, callback) {
  const {
    subscribe
  } = observe(attributeFilter);
  return subscribe((mutations) => {
    const matched = mutations.some((mutation) => inTargetElement(element, mutation.target));
    if (matched) {
      callback();
    }
  });
}
var observers = {};
function observe(attributeFilter) {
  const attributes = attributeFilter.join(",");
  const previousObserver = observers[attributes];
  if (previousObserver !== void 0) {
    return previousObserver;
  }
  const subscribers = /* @__PURE__ */ new Set();
  const mutationObserver = new MutationObserver((mutations) => subscribers.forEach((callback) => callback(mutations)));
  mutationObserver.observe(document.documentElement, {
    attributes: true,
    attributeFilter,
    subtree: true
  });
  const observer = {
    subscribe(callback) {
      subscribers.add(callback);
      return {
        remove: () => {
          subscribers.delete(callback);
          if (subscribers.size === 0) {
            mutationObserver.disconnect();
            observers[attributes] = void 0;
          }
        }
      };
    }
  };
  observers[attributes] = observer;
  return observer;
}
function closestElement(base, selector) {
  let currentElement = base;
  while (currentElement) {
    const element = currentElement.closest(selector);
    if (element) {
      return element;
    }
    const rootElement = currentElement.getRootNode();
    if (rootElement === document) {
      return null;
    }
    currentElement = rootElement.host;
  }
  return null;
}
function getElementAttribute(el, prop, fallbackValue) {
  const closest = closestElement(el, `[${prop}]`);
  return closest?.getAttribute(prop) ?? fallbackValue;
}
function safeCall(callback, thisContext, ...rest) {
  try {
    return callback?.call(thisContext, ...rest);
  } catch (error) {
    console.error(error, callback);
  }
  return void 0;
}
function safeAsyncCall(callback, thisContext, ...rest) {
  return __async(this, null, function* () {
    try {
      const result = callback?.call(thisContext, ...rest);
      return result instanceof Promise ? yield result : result;
    } catch (error) {
      console.error(error, callback);
    }
    return void 0;
  });
}
var camelToKebab = (string) => string.replace(upperBeforeLower, (upper, remainder) => `${remainder === 0 ? "" : "-"}${upper.toLowerCase()}`);
var upperBeforeLower = /[A-Z]+(?![a-z])|[A-Z]/gu;
var capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);
var camelToHuman = (string) => capitalize(string.replace(upperBeforeLower, (upper, remainder) => `${remainder === 0 ? "" : " "}${upper}`));
var supportedLocales = /* @__PURE__ */ new Set(["ar", "bg", "bs", "ca", "cs", "da", "de", "el", "en", "es", "et", "fi", "fr", "he", "hr", "hu", "id", "it", "ja", "ko", "lt", "lv", "nl", "nb", "pl", "pt-BR", "pt-PT", "ro", "ru", "sk", "sl", "sr", "sv", "th", "tr", "uk", "vi", "zh-CN", "zh-HK", "zh-TW"]);
var defaultLocale = "en";
function fetchT9NStringsBundle(locale, assetsPath, prefix = "") {
  return __async(this, null, function* () {
    const path = `${assetsPath}/${prefix}`;
    const filePath = `${path}${locale}.json`;
    t9nStringsCache[filePath] ?? (t9nStringsCache[filePath] = fetchBundle(locale, path));
    return yield t9nStringsCache[filePath];
  });
}
var t9nStringsCache = {};
function fetchBundle(locale, path) {
  return __async(this, null, function* () {
    const filePath = `${path}${locale}.json`;
    try {
      const response = yield fetch(filePath);
      if (response.ok) {
        return yield response.json();
      }
    } catch (error) {
      console.error(error);
      return fallbackBundle;
    }
    if (locale === defaultLocale) {
      return fallbackBundle;
    }
    return yield fetchBundle(defaultLocale, path);
  });
}
var fallbackBundle = new Proxy({}, {
  get: (_target, property) => camelToHuman(property.toString())
});
function getElementLocales(element) {
  const lang = getElementAttribute(element, "lang", navigator.language || defaultLocale);
  if (supportedLocales.has(lang)) {
    return {
      lang,
      t9nLocale: lang
    };
  }
  const rootCode = lang.slice(0, 2);
  return {
    lang,
    t9nLocale: supportedLocales.has(rootCode) ? rootCode : defaultLocale
  };
}
function startLocaleObserver(element, assetsPath, onUpdated, assetName) {
  let result = void 0;
  const callback = () => void updateComponentLocateState(element, assetsPath, assetName).then((newResult) => {
    if (result?.lang !== newResult.lang || result.t9nLocale !== newResult.t9nLocale || result.t9nStrings !== newResult.t9nStrings) {
      onUpdated(newResult);
    }
    result = newResult;
  }).catch(console.error);
  callback();
  return observeAncestorsMutation(element, ["lang"], callback);
}
function updateComponentLocateState(_0, _1) {
  return __async(this, arguments, function* (element, assetsPath, assetName = element.tagName.toLowerCase().replace("arcgis-", "")) {
    const {
      lang,
      t9nLocale
    } = getElementLocales(element);
    const t9nAssetsPath = `${assetsPath}/${assetName}/t9n`;
    const prefix = `${assetName}.t9n.`;
    const t9nStrings = yield fetchT9NStringsBundle(t9nLocale, t9nAssetsPath, prefix);
    return {
      lang,
      t9nLocale,
      t9nStrings
    };
  });
}
function devToolsAwareTimeout(callback, timeout) {
  const interval = timeout > longTimeoutThreshold ? longTimeoutInterval : timeout / shortTimeoutIntervals;
  let elapsed = 0;
  const reference = setInterval(() => {
    elapsed += interval;
    if (elapsed >= timeout) {
      clearInterval(reference);
      callback();
    }
  }, interval);
  return reference;
}
var longTimeoutThreshold = 4e3;
var longTimeoutInterval = 2e3;
var shortTimeoutIntervals = 4;
function isNotUndefined(item) {
  return item !== void 0;
}
var isAMD = typeof window !== "undefined" && "$arcgis" in window && typeof window.$arcgis === "object" && "import" in window.$arcgis && !("forceESM" in window.$arcgis);
function isDefaultModule(module) {
  return module.default !== void 0;
}
function importCoreAccessor() {
  return __async(this, null, function* () {
    if (isAMD) {
      return yield window.$arcgis.import("esri/core/Accessor");
    }
    const module = yield import("./Accessor-RGQVN3PV.js");
    return isDefaultModule(module) ? module.default : module;
  });
}
function importLayersFeatureLayer() {
  return __async(this, null, function* () {
    if (isAMD) {
      return yield window.$arcgis.import("esri/layers/FeatureLayer");
    }
    const module = yield import("./FeatureLayer-H4DJZSKO.js");
    return isDefaultModule(module) ? module.default : module;
  });
}
function newLayersFeatureLayer(properties) {
  return __async(this, null, function* () {
    const ModConstructor = yield importLayersFeatureLayer();
    return new ModConstructor(properties);
  });
}
function importLayersGraphicsLayer() {
  return __async(this, null, function* () {
    if (isAMD) {
      return yield window.$arcgis.import("esri/layers/GraphicsLayer");
    }
    const module = yield import("./GraphicsLayer-F2TDGMWS.js");
    return isDefaultModule(module) ? module.default : module;
  });
}
function newLayersGraphicsLayer(properties) {
  return __async(this, null, function* () {
    const ModConstructor = yield importLayersGraphicsLayer();
    return new ModConstructor(properties);
  });
}
function importLayersRouteLayer() {
  return __async(this, null, function* () {
    if (isAMD) {
      return yield window.$arcgis.import("esri/layers/RouteLayer");
    }
    const module = yield import("./RouteLayer-5ED7G4KT.js");
    return isDefaultModule(module) ? module.default : module;
  });
}
function newLayersRouteLayer(properties) {
  return __async(this, null, function* () {
    const ModConstructor = yield importLayersRouteLayer();
    return new ModConstructor(properties);
  });
}
function importViewsMapView() {
  return __async(this, null, function* () {
    if (isAMD) {
      return yield window.$arcgis.import("esri/views/MapView");
    }
    const module = yield import("./MapView-ZH2YJZYG.js");
    return isDefaultModule(module) ? module.default : module;
  });
}
function newViewsMapView(properties) {
  return __async(this, null, function* () {
    const ModConstructor = yield importViewsMapView();
    return new ModConstructor(properties);
  });
}
function importViewsSceneView() {
  return __async(this, null, function* () {
    if (isAMD) {
      return yield window.$arcgis.import("esri/views/SceneView");
    }
    const module = yield import("./SceneView-DYWAWQLU.js");
    return isDefaultModule(module) ? module.default : module;
  });
}
function newViewsSceneView(properties) {
  return __async(this, null, function* () {
    const ModConstructor = yield importViewsSceneView();
    return new ModConstructor(properties);
  });
}
function importWebMap() {
  return __async(this, null, function* () {
    if (isAMD) {
      return yield window.$arcgis.import("esri/WebMap");
    }
    const module = yield import("./WebMap-2ZWMGYYQ.js");
    return isDefaultModule(module) ? module.default : module;
  });
}
function newWebMap(properties) {
  return __async(this, null, function* () {
    const ModConstructor = yield importWebMap();
    return new ModConstructor(properties);
  });
}
function importWebScene() {
  return __async(this, null, function* () {
    if (isAMD) {
      return yield window.$arcgis.import("esri/WebScene");
    }
    const module = yield import("./WebScene-TKUIMAZW.js");
    return isDefaultModule(module) ? module.default : module;
  });
}
function newWebScene(properties) {
  return __async(this, null, function* () {
    const ModConstructor = yield importWebScene();
    return new ModConstructor(properties);
  });
}
function importWidgetsAreaMeasurement2D() {
  return __async(this, null, function* () {
    if (isAMD) {
      return yield window.$arcgis.import("esri/widgets/AreaMeasurement2D");
    }
    const module = yield import("./AreaMeasurement2D-2A4R6RS3.js");
    return isDefaultModule(module) ? module.default : module;
  });
}
function newWidgetsAreaMeasurement2D(properties) {
  return __async(this, null, function* () {
    const ModConstructor = yield importWidgetsAreaMeasurement2D();
    return new ModConstructor(properties);
  });
}
function importWidgetsAreaMeasurement3D() {
  return __async(this, null, function* () {
    if (isAMD) {
      return yield window.$arcgis.import("esri/widgets/AreaMeasurement3D");
    }
    const module = yield import("./AreaMeasurement3D-JPO63X52.js");
    return isDefaultModule(module) ? module.default : module;
  });
}
function newWidgetsAreaMeasurement3D(properties) {
  return __async(this, null, function* () {
    const ModConstructor = yield importWidgetsAreaMeasurement3D();
    return new ModConstructor(properties);
  });
}
function importWidgetsAttachments() {
  return __async(this, null, function* () {
    if (isAMD) {
      return yield window.$arcgis.import("esri/widgets/Attachments");
    }
    const module = yield import("./Attachments-6HRYDOFU.js");
    return isDefaultModule(module) ? module.default : module;
  });
}
function newWidgetsAttachments(properties) {
  return __async(this, null, function* () {
    const ModConstructor = yield importWidgetsAttachments();
    return new ModConstructor(properties);
  });
}
function importWidgetsBasemapGallery() {
  return __async(this, null, function* () {
    if (isAMD) {
      return yield window.$arcgis.import("esri/widgets/BasemapGallery");
    }
    const module = yield import("./BasemapGallery-FRGMIVXF.js");
    return isDefaultModule(module) ? module.default : module;
  });
}
function newWidgetsBasemapGallery(properties) {
  return __async(this, null, function* () {
    const ModConstructor = yield importWidgetsBasemapGallery();
    return new ModConstructor(properties);
  });
}
function importWidgetsBasemapLayerList() {
  return __async(this, null, function* () {
    if (isAMD) {
      return yield window.$arcgis.import("esri/widgets/BasemapLayerList");
    }
    const module = yield import("./BasemapLayerList-XACY63FP.js");
    return isDefaultModule(module) ? module.default : module;
  });
}
function newWidgetsBasemapLayerList(properties) {
  return __async(this, null, function* () {
    const ModConstructor = yield importWidgetsBasemapLayerList();
    return new ModConstructor(properties);
  });
}
function importWidgetsBasemapToggle() {
  return __async(this, null, function* () {
    if (isAMD) {
      return yield window.$arcgis.import("esri/widgets/BasemapToggle");
    }
    const module = yield import("./BasemapToggle-XFD4KDSL.js");
    return isDefaultModule(module) ? module.default : module;
  });
}
function newWidgetsBasemapToggle(properties) {
  return __async(this, null, function* () {
    const ModConstructor = yield importWidgetsBasemapToggle();
    return new ModConstructor(properties);
  });
}
function importWidgetsBookmarks() {
  return __async(this, null, function* () {
    if (isAMD) {
      return yield window.$arcgis.import("esri/widgets/Bookmarks");
    }
    const module = yield import("./Bookmarks-7VHDAHDX.js");
    return isDefaultModule(module) ? module.default : module;
  });
}
function newWidgetsBookmarks(properties) {
  return __async(this, null, function* () {
    const ModConstructor = yield importWidgetsBookmarks();
    return new ModConstructor(properties);
  });
}
function importWidgetsBuildingExplorer() {
  return __async(this, null, function* () {
    if (isAMD) {
      return yield window.$arcgis.import("esri/widgets/BuildingExplorer");
    }
    const module = yield import("./BuildingExplorer-IP5J7EYZ.js");
    return isDefaultModule(module) ? module.default : module;
  });
}
function newWidgetsBuildingExplorer(properties) {
  return __async(this, null, function* () {
    const ModConstructor = yield importWidgetsBuildingExplorer();
    return new ModConstructor(properties);
  });
}
function importWidgetsCompass() {
  return __async(this, null, function* () {
    if (isAMD) {
      return yield window.$arcgis.import("esri/widgets/Compass");
    }
    const module = yield import("./Compass-LFBYCMX4.js");
    return isDefaultModule(module) ? module.default : module;
  });
}
function newWidgetsCompass(properties) {
  return __async(this, null, function* () {
    const ModConstructor = yield importWidgetsCompass();
    return new ModConstructor(properties);
  });
}
function importWidgetsCoordinateConversion() {
  return __async(this, null, function* () {
    if (isAMD) {
      return yield window.$arcgis.import("esri/widgets/CoordinateConversion");
    }
    const module = yield import("./CoordinateConversion-MM4HVBN3.js");
    return isDefaultModule(module) ? module.default : module;
  });
}
function newWidgetsCoordinateConversion(properties) {
  return __async(this, null, function* () {
    const ModConstructor = yield importWidgetsCoordinateConversion();
    return new ModConstructor(properties);
  });
}
function importWidgetsDaylight() {
  return __async(this, null, function* () {
    if (isAMD) {
      return yield window.$arcgis.import("esri/widgets/Daylight");
    }
    const module = yield import("./Daylight-6IF3S4FT.js");
    return isDefaultModule(module) ? module.default : module;
  });
}
function newWidgetsDaylight(properties) {
  return __async(this, null, function* () {
    const ModConstructor = yield importWidgetsDaylight();
    return new ModConstructor(properties);
  });
}
function importWidgetsDirectionalPad() {
  return __async(this, null, function* () {
    if (isAMD) {
      return yield window.$arcgis.import("esri/widgets/DirectionalPad");
    }
    const module = yield import("./DirectionalPad-3C3PYBJ3.js");
    return isDefaultModule(module) ? module.default : module;
  });
}
function newWidgetsDirectionalPad(properties) {
  return __async(this, null, function* () {
    const ModConstructor = yield importWidgetsDirectionalPad();
    return new ModConstructor(properties);
  });
}
function importWidgetsDirections() {
  return __async(this, null, function* () {
    if (isAMD) {
      return yield window.$arcgis.import("esri/widgets/Directions");
    }
    const module = yield import("./Directions-FEQAXCB7.js");
    return isDefaultModule(module) ? module.default : module;
  });
}
function newWidgetsDirections(properties) {
  return __async(this, null, function* () {
    const ModConstructor = yield importWidgetsDirections();
    return new ModConstructor(properties);
  });
}
function importWidgetsDirectLineMeasurement3D() {
  return __async(this, null, function* () {
    if (isAMD) {
      return yield window.$arcgis.import("esri/widgets/DirectLineMeasurement3D");
    }
    const module = yield import("./DirectLineMeasurement3D-YNGUTSLJ.js");
    return isDefaultModule(module) ? module.default : module;
  });
}
function newWidgetsDirectLineMeasurement3D(properties) {
  return __async(this, null, function* () {
    const ModConstructor = yield importWidgetsDirectLineMeasurement3D();
    return new ModConstructor(properties);
  });
}
function importWidgetsDistanceMeasurement2D() {
  return __async(this, null, function* () {
    if (isAMD) {
      return yield window.$arcgis.import("esri/widgets/DistanceMeasurement2D");
    }
    const module = yield import("./DistanceMeasurement2D-3AXCA7HS.js");
    return isDefaultModule(module) ? module.default : module;
  });
}
function newWidgetsDistanceMeasurement2D(properties) {
  return __async(this, null, function* () {
    const ModConstructor = yield importWidgetsDistanceMeasurement2D();
    return new ModConstructor(properties);
  });
}
function importWidgetsEditor() {
  return __async(this, null, function* () {
    if (isAMD) {
      return yield window.$arcgis.import("esri/widgets/Editor");
    }
    const module = yield import("./Editor-7EHH7IUG.js");
    return isDefaultModule(module) ? module.default : module;
  });
}
function newWidgetsEditor(properties) {
  return __async(this, null, function* () {
    const ModConstructor = yield importWidgetsEditor();
    return new ModConstructor(properties);
  });
}
function importWidgetsElevationProfile() {
  return __async(this, null, function* () {
    if (isAMD) {
      return yield window.$arcgis.import("esri/widgets/ElevationProfile");
    }
    const module = yield import("./ElevationProfile-ZAUOSGQF.js");
    return isDefaultModule(module) ? module.default : module;
  });
}
function newWidgetsElevationProfile(properties) {
  return __async(this, null, function* () {
    const ModConstructor = yield importWidgetsElevationProfile();
    return new ModConstructor(properties);
  });
}
function importWidgetsExpand() {
  return __async(this, null, function* () {
    if (isAMD) {
      return yield window.$arcgis.import("esri/widgets/Expand");
    }
    const module = yield import("./Expand-I4R6SK5S.js");
    return isDefaultModule(module) ? module.default : module;
  });
}
function newWidgetsExpand(properties) {
  return __async(this, null, function* () {
    const ModConstructor = yield importWidgetsExpand();
    return new ModConstructor(properties);
  });
}
function importWidgetsFeature() {
  return __async(this, null, function* () {
    if (isAMD) {
      return yield window.$arcgis.import("esri/widgets/Feature");
    }
    const module = yield import("./Feature-P3FRUHYW.js");
    return isDefaultModule(module) ? module.default : module;
  });
}
function newWidgetsFeature(properties) {
  return __async(this, null, function* () {
    const ModConstructor = yield importWidgetsFeature();
    return new ModConstructor(properties);
  });
}
function importWidgetsFeatureForm() {
  return __async(this, null, function* () {
    if (isAMD) {
      return yield window.$arcgis.import("esri/widgets/FeatureForm");
    }
    const module = yield import("./FeatureForm-FIHPRSUK.js");
    return isDefaultModule(module) ? module.default : module;
  });
}
function newWidgetsFeatureForm(properties) {
  return __async(this, null, function* () {
    const ModConstructor = yield importWidgetsFeatureForm();
    return new ModConstructor(properties);
  });
}
function importWidgetsFeatures() {
  return __async(this, null, function* () {
    if (isAMD) {
      return yield window.$arcgis.import("esri/widgets/Features");
    }
    const module = yield import("./Features-GQ4HEIZG.js");
    return isDefaultModule(module) ? module.default : module;
  });
}
function newWidgetsFeatures(properties) {
  return __async(this, null, function* () {
    const ModConstructor = yield importWidgetsFeatures();
    return new ModConstructor(properties);
  });
}
function importWidgetsFeatureTable() {
  return __async(this, null, function* () {
    if (isAMD) {
      return yield window.$arcgis.import("esri/widgets/FeatureTable");
    }
    const module = yield import("./FeatureTable-QM5ORHKX.js");
    return isDefaultModule(module) ? module.default : module;
  });
}
function newWidgetsFeatureTable(properties) {
  return __async(this, null, function* () {
    const ModConstructor = yield importWidgetsFeatureTable();
    return new ModConstructor(properties);
  });
}
function importWidgetsFeatureTemplates() {
  return __async(this, null, function* () {
    if (isAMD) {
      return yield window.$arcgis.import("esri/widgets/FeatureTemplates");
    }
    const module = yield import("./FeatureTemplates-47O4SUR2.js");
    return isDefaultModule(module) ? module.default : module;
  });
}
function newWidgetsFeatureTemplates(properties) {
  return __async(this, null, function* () {
    const ModConstructor = yield importWidgetsFeatureTemplates();
    return new ModConstructor(properties);
  });
}
function importWidgetsFloorFilter() {
  return __async(this, null, function* () {
    if (isAMD) {
      return yield window.$arcgis.import("esri/widgets/FloorFilter");
    }
    const module = yield import("./FloorFilter-WGKCUGI2.js");
    return isDefaultModule(module) ? module.default : module;
  });
}
function newWidgetsFloorFilter(properties) {
  return __async(this, null, function* () {
    const ModConstructor = yield importWidgetsFloorFilter();
    return new ModConstructor(properties);
  });
}
function importWidgetsFullscreen() {
  return __async(this, null, function* () {
    if (isAMD) {
      return yield window.$arcgis.import("esri/widgets/Fullscreen");
    }
    const module = yield import("./Fullscreen-Q7RJ6ACA.js");
    return isDefaultModule(module) ? module.default : module;
  });
}
function newWidgetsFullscreen(properties) {
  return __async(this, null, function* () {
    const ModConstructor = yield importWidgetsFullscreen();
    return new ModConstructor(properties);
  });
}
function importWidgetsHistogram() {
  return __async(this, null, function* () {
    if (isAMD) {
      return yield window.$arcgis.import("esri/widgets/Histogram");
    }
    const module = yield import("./Histogram-NOFKVHNH.js");
    return isDefaultModule(module) ? module.default : module;
  });
}
function newWidgetsHistogram(properties) {
  return __async(this, null, function* () {
    const ModConstructor = yield importWidgetsHistogram();
    return new ModConstructor(properties);
  });
}
function importWidgetsHistogramRangeSlider() {
  return __async(this, null, function* () {
    if (isAMD) {
      return yield window.$arcgis.import("esri/widgets/HistogramRangeSlider");
    }
    const module = yield import("./HistogramRangeSlider-BGDLQMB3.js");
    return isDefaultModule(module) ? module.default : module;
  });
}
function newWidgetsHistogramRangeSlider(properties) {
  return __async(this, null, function* () {
    const ModConstructor = yield importWidgetsHistogramRangeSlider();
    return new ModConstructor(properties);
  });
}
function importWidgetsHomeHomeViewModel() {
  return __async(this, null, function* () {
    if (isAMD) {
      return yield window.$arcgis.import("esri/widgets/Home/HomeViewModel");
    }
    const module = yield import("./HomeViewModel-7PJO32YK.js");
    return isDefaultModule(module) ? module.default : module;
  });
}
function newWidgetsHomeHomeViewModel(properties) {
  return __async(this, null, function* () {
    const ModConstructor = yield importWidgetsHomeHomeViewModel();
    return new ModConstructor(properties);
  });
}
function importWidgetsLayerList() {
  return __async(this, null, function* () {
    if (isAMD) {
      return yield window.$arcgis.import("esri/widgets/LayerList");
    }
    const module = yield import("./LayerList-CA66SZZO.js");
    return isDefaultModule(module) ? module.default : module;
  });
}
function newWidgetsLayerList(properties) {
  return __async(this, null, function* () {
    const ModConstructor = yield importWidgetsLayerList();
    return new ModConstructor(properties);
  });
}
function importWidgetsLegend() {
  return __async(this, null, function* () {
    if (isAMD) {
      return yield window.$arcgis.import("esri/widgets/Legend");
    }
    const module = yield import("./Legend-HIDJGPLM.js");
    return isDefaultModule(module) ? module.default : module;
  });
}
function newWidgetsLegend(properties) {
  return __async(this, null, function* () {
    const ModConstructor = yield importWidgetsLegend();
    return new ModConstructor(properties);
  });
}
function importWidgetsLineOfSight() {
  return __async(this, null, function* () {
    if (isAMD) {
      return yield window.$arcgis.import("esri/widgets/LineOfSight");
    }
    const module = yield import("./LineOfSight-GBWWRAIL.js");
    return isDefaultModule(module) ? module.default : module;
  });
}
function newWidgetsLineOfSight(properties) {
  return __async(this, null, function* () {
    const ModConstructor = yield importWidgetsLineOfSight();
    return new ModConstructor(properties);
  });
}
function importWidgetsLocate() {
  return __async(this, null, function* () {
    if (isAMD) {
      return yield window.$arcgis.import("esri/widgets/Locate");
    }
    const module = yield import("./Locate-SX3LHLEP.js");
    return isDefaultModule(module) ? module.default : module;
  });
}
function newWidgetsLocate(properties) {
  return __async(this, null, function* () {
    const ModConstructor = yield importWidgetsLocate();
    return new ModConstructor(properties);
  });
}
function importWidgetsMeasurement() {
  return __async(this, null, function* () {
    if (isAMD) {
      return yield window.$arcgis.import("esri/widgets/Measurement");
    }
    const module = yield import("./Measurement-5GR3H44O.js");
    return isDefaultModule(module) ? module.default : module;
  });
}
function newWidgetsMeasurement(properties) {
  return __async(this, null, function* () {
    const ModConstructor = yield importWidgetsMeasurement();
    return new ModConstructor(properties);
  });
}
function importWidgetsNavigationToggle() {
  return __async(this, null, function* () {
    if (isAMD) {
      return yield window.$arcgis.import("esri/widgets/NavigationToggle");
    }
    const module = yield import("./NavigationToggle-WBIKN2TZ.js");
    return isDefaultModule(module) ? module.default : module;
  });
}
function newWidgetsNavigationToggle(properties) {
  return __async(this, null, function* () {
    const ModConstructor = yield importWidgetsNavigationToggle();
    return new ModConstructor(properties);
  });
}
function importWidgetsOrientedImageryViewer() {
  return __async(this, null, function* () {
    if (isAMD) {
      return yield window.$arcgis.import("esri/widgets/OrientedImageryViewer");
    }
    const module = yield import("./OrientedImageryViewer-SCOPNUPS.js");
    return isDefaultModule(module) ? module.default : module;
  });
}
function newWidgetsOrientedImageryViewer(properties) {
  return __async(this, null, function* () {
    const ModConstructor = yield importWidgetsOrientedImageryViewer();
    return new ModConstructor(properties);
  });
}
function importWidgetsPrint() {
  return __async(this, null, function* () {
    if (isAMD) {
      return yield window.$arcgis.import("esri/widgets/Print");
    }
    const module = yield import("./Print-YM7RLFER.js");
    return isDefaultModule(module) ? module.default : module;
  });
}
function newWidgetsPrint(properties) {
  return __async(this, null, function* () {
    const ModConstructor = yield importWidgetsPrint();
    return new ModConstructor(properties);
  });
}
function importWidgetsScaleBar() {
  return __async(this, null, function* () {
    if (isAMD) {
      return yield window.$arcgis.import("esri/widgets/ScaleBar");
    }
    const module = yield import("./ScaleBar-35WRXE2W.js");
    return isDefaultModule(module) ? module.default : module;
  });
}
function newWidgetsScaleBar(properties) {
  return __async(this, null, function* () {
    const ModConstructor = yield importWidgetsScaleBar();
    return new ModConstructor(properties);
  });
}
function importWidgetsScaleRangeSlider() {
  return __async(this, null, function* () {
    if (isAMD) {
      return yield window.$arcgis.import("esri/widgets/ScaleRangeSlider");
    }
    const module = yield import("./ScaleRangeSlider-OO7TFSYN.js");
    return isDefaultModule(module) ? module.default : module;
  });
}
function newWidgetsScaleRangeSlider(properties) {
  return __async(this, null, function* () {
    const ModConstructor = yield importWidgetsScaleRangeSlider();
    return new ModConstructor(properties);
  });
}
function importWidgetsSearch() {
  return __async(this, null, function* () {
    if (isAMD) {
      return yield window.$arcgis.import("esri/widgets/Search");
    }
    const module = yield import("./Search-C6OVDLZQ.js");
    return isDefaultModule(module) ? module.default : module;
  });
}
function newWidgetsSearch(properties) {
  return __async(this, null, function* () {
    const ModConstructor = yield importWidgetsSearch();
    return new ModConstructor(properties);
  });
}
function importWidgetsShadowCast() {
  return __async(this, null, function* () {
    if (isAMD) {
      return yield window.$arcgis.import("esri/widgets/ShadowCast");
    }
    const module = yield import("./ShadowCast-PCR4NRPS.js");
    return isDefaultModule(module) ? module.default : module;
  });
}
function newWidgetsShadowCast(properties) {
  return __async(this, null, function* () {
    const ModConstructor = yield importWidgetsShadowCast();
    return new ModConstructor(properties);
  });
}
function importWidgetsSketch() {
  return __async(this, null, function* () {
    if (isAMD) {
      return yield window.$arcgis.import("esri/widgets/Sketch");
    }
    const module = yield import("./Sketch-6C6XCBBW.js");
    return isDefaultModule(module) ? module.default : module;
  });
}
function newWidgetsSketch(properties) {
  return __async(this, null, function* () {
    const ModConstructor = yield importWidgetsSketch();
    return new ModConstructor(properties);
  });
}
function importWidgetsSlice() {
  return __async(this, null, function* () {
    if (isAMD) {
      return yield window.$arcgis.import("esri/widgets/Slice");
    }
    const module = yield import("./Slice-NTPABLYZ.js");
    return isDefaultModule(module) ? module.default : module;
  });
}
function newWidgetsSlice(properties) {
  return __async(this, null, function* () {
    const ModConstructor = yield importWidgetsSlice();
    return new ModConstructor(properties);
  });
}
function importWidgetsSlider() {
  return __async(this, null, function* () {
    if (isAMD) {
      return yield window.$arcgis.import("esri/widgets/Slider");
    }
    const module = yield import("./Slider-7XC6KUZ2.js");
    return isDefaultModule(module) ? module.default : module;
  });
}
function newWidgetsSlider(properties) {
  return __async(this, null, function* () {
    const ModConstructor = yield importWidgetsSlider();
    return new ModConstructor(properties);
  });
}
function importWidgetsSwipe() {
  return __async(this, null, function* () {
    if (isAMD) {
      return yield window.$arcgis.import("esri/widgets/Swipe");
    }
    const module = yield import("./Swipe-M7TQXFVU.js");
    return isDefaultModule(module) ? module.default : module;
  });
}
function newWidgetsSwipe(properties) {
  return __async(this, null, function* () {
    const ModConstructor = yield importWidgetsSwipe();
    return new ModConstructor(properties);
  });
}
function importWidgetsTableList() {
  return __async(this, null, function* () {
    if (isAMD) {
      return yield window.$arcgis.import("esri/widgets/TableList");
    }
    const module = yield import("./TableList-KZHUAO5R.js");
    return isDefaultModule(module) ? module.default : module;
  });
}
function newWidgetsTableList(properties) {
  return __async(this, null, function* () {
    const ModConstructor = yield importWidgetsTableList();
    return new ModConstructor(properties);
  });
}
function importWidgetsTimeSlider() {
  return __async(this, null, function* () {
    if (isAMD) {
      return yield window.$arcgis.import("esri/widgets/TimeSlider");
    }
    const module = yield import("./TimeSlider-DCG6WK55.js");
    return isDefaultModule(module) ? module.default : module;
  });
}
function newWidgetsTimeSlider(properties) {
  return __async(this, null, function* () {
    const ModConstructor = yield importWidgetsTimeSlider();
    return new ModConstructor(properties);
  });
}
function importWidgetsTrack() {
  return __async(this, null, function* () {
    if (isAMD) {
      return yield window.$arcgis.import("esri/widgets/Track");
    }
    const module = yield import("./Track-6T4Y4H2L.js");
    return isDefaultModule(module) ? module.default : module;
  });
}
function newWidgetsTrack(properties) {
  return __async(this, null, function* () {
    const ModConstructor = yield importWidgetsTrack();
    return new ModConstructor(properties);
  });
}
function importWidgetsUtilityNetworkAssociations() {
  return __async(this, null, function* () {
    if (isAMD) {
      return yield window.$arcgis.import("esri/widgets/UtilityNetworkAssociations");
    }
    const module = yield import("./UtilityNetworkAssociations-5Q5KRXYR.js");
    return isDefaultModule(module) ? module.default : module;
  });
}
function newWidgetsUtilityNetworkAssociations(properties) {
  return __async(this, null, function* () {
    const ModConstructor = yield importWidgetsUtilityNetworkAssociations();
    return new ModConstructor(properties);
  });
}
function importWidgetsUtilityNetworkTrace() {
  return __async(this, null, function* () {
    if (isAMD) {
      return yield window.$arcgis.import("esri/widgets/UtilityNetworkTrace");
    }
    const module = yield import("./UtilityNetworkTrace-BLLOHPZY.js");
    return isDefaultModule(module) ? module.default : module;
  });
}
function newWidgetsUtilityNetworkTrace(properties) {
  return __async(this, null, function* () {
    const ModConstructor = yield importWidgetsUtilityNetworkTrace();
    return new ModConstructor(properties);
  });
}
function importWidgetsUtilityNetworkValidateTopology() {
  return __async(this, null, function* () {
    if (isAMD) {
      return yield window.$arcgis.import("esri/widgets/UtilityNetworkValidateTopology");
    }
    const module = yield import("./UtilityNetworkValidateTopology-V263EVE4.js");
    return isDefaultModule(module) ? module.default : module;
  });
}
function newWidgetsUtilityNetworkValidateTopology(properties) {
  return __async(this, null, function* () {
    const ModConstructor = yield importWidgetsUtilityNetworkValidateTopology();
    return new ModConstructor(properties);
  });
}
function importWidgetsValuePicker() {
  return __async(this, null, function* () {
    if (isAMD) {
      return yield window.$arcgis.import("esri/widgets/ValuePicker");
    }
    const module = yield import("./ValuePicker-BDAISLVG.js");
    return isDefaultModule(module) ? module.default : module;
  });
}
function newWidgetsValuePicker(properties) {
  return __async(this, null, function* () {
    const ModConstructor = yield importWidgetsValuePicker();
    return new ModConstructor(properties);
  });
}
function importWidgetsVersionManagementVersionManagementViewModel() {
  return __async(this, null, function* () {
    if (isAMD) {
      return yield window.$arcgis.import("esri/widgets/VersionManagement/VersionManagementViewModel");
    }
    const module = yield import("./VersionManagementViewModel-ZYG3K2IW.js");
    return isDefaultModule(module) ? module.default : module;
  });
}
function newWidgetsVersionManagementVersionManagementViewModel(properties) {
  return __async(this, null, function* () {
    const ModConstructor = yield importWidgetsVersionManagementVersionManagementViewModel();
    return new ModConstructor(properties);
  });
}
function importWidgetsWeather() {
  return __async(this, null, function* () {
    if (isAMD) {
      return yield window.$arcgis.import("esri/widgets/Weather");
    }
    const module = yield import("./Weather-YHY77CKI.js");
    return isDefaultModule(module) ? module.default : module;
  });
}
function newWidgetsWeather(properties) {
  return __async(this, null, function* () {
    const ModConstructor = yield importWidgetsWeather();
    return new ModConstructor(properties);
  });
}
function importWidgetsZoom() {
  return __async(this, null, function* () {
    if (isAMD) {
      return yield window.$arcgis.import("esri/widgets/Zoom");
    }
    const module = yield import("./Zoom-HWWPRXPB.js");
    return isDefaultModule(module) ? module.default : module;
  });
}
function newWidgetsZoom(properties) {
  return __async(this, null, function* () {
    const ModConstructor = yield importWidgetsZoom();
    return new ModConstructor(properties);
  });
}
function importCoreAccessorSupportDecorators() {
  return __async(this, null, function* () {
    if (isAMD) {
      return yield window.$arcgis.import("esri/core/accessorSupport/decorators");
    }
    const module = yield import("./decorators-DX2XPK52.js");
    return isDefaultModule(module) ? module.default : module;
  });
}
function importCoreReactiveUtils() {
  return __async(this, null, function* () {
    if (isAMD) {
      return yield window.$arcgis.import("esri/core/reactiveUtils");
    }
    const module = yield import("./reactiveUtils-6SQHKWIN.js");
    return isDefaultModule(module) ? module.default : module;
  });
}

export {
  classes,
  Deferred,
  safeCall,
  safeAsyncCall,
  camelToKebab,
  getElementLocales,
  startLocaleObserver,
  devToolsAwareTimeout,
  isNotUndefined,
  importCoreAccessor,
  newLayersFeatureLayer,
  newLayersGraphicsLayer,
  newLayersRouteLayer,
  newViewsMapView,
  newViewsSceneView,
  newWebMap,
  newWebScene,
  newWidgetsAreaMeasurement2D,
  newWidgetsAreaMeasurement3D,
  newWidgetsAttachments,
  newWidgetsBasemapGallery,
  newWidgetsBasemapLayerList,
  newWidgetsBasemapToggle,
  newWidgetsBookmarks,
  newWidgetsBuildingExplorer,
  newWidgetsCompass,
  newWidgetsCoordinateConversion,
  newWidgetsDaylight,
  newWidgetsDirectionalPad,
  newWidgetsDirections,
  newWidgetsDirectLineMeasurement3D,
  newWidgetsDistanceMeasurement2D,
  newWidgetsEditor,
  newWidgetsElevationProfile,
  newWidgetsExpand,
  newWidgetsFeature,
  newWidgetsFeatureForm,
  newWidgetsFeatures,
  newWidgetsFeatureTable,
  newWidgetsFeatureTemplates,
  newWidgetsFloorFilter,
  newWidgetsFullscreen,
  newWidgetsHistogram,
  newWidgetsHistogramRangeSlider,
  newWidgetsHomeHomeViewModel,
  newWidgetsLayerList,
  newWidgetsLegend,
  newWidgetsLineOfSight,
  newWidgetsLocate,
  newWidgetsMeasurement,
  newWidgetsNavigationToggle,
  newWidgetsOrientedImageryViewer,
  newWidgetsPrint,
  newWidgetsScaleBar,
  newWidgetsScaleRangeSlider,
  newWidgetsSearch,
  newWidgetsShadowCast,
  newWidgetsSketch,
  newWidgetsSlice,
  newWidgetsSlider,
  newWidgetsSwipe,
  newWidgetsTableList,
  newWidgetsTimeSlider,
  newWidgetsTrack,
  newWidgetsUtilityNetworkAssociations,
  newWidgetsUtilityNetworkTrace,
  newWidgetsUtilityNetworkValidateTopology,
  newWidgetsValuePicker,
  newWidgetsVersionManagementVersionManagementViewModel,
  newWidgetsWeather,
  newWidgetsZoom,
  importCoreAccessorSupportDecorators,
  importCoreReactiveUtils
};
/*! Bundled license information:

@arcgis/map-components/dist/esm/index-d2df902e.js:
  (*!
   * All material copyright Esri, All Rights Reserved, unless otherwise specified.
   * See https://js.arcgis.com/4.30/esri/copyright.txt for details.
   * v4.30.7
   *)
*/
//# sourceMappingURL=chunk-37R24ZKG.js.map
