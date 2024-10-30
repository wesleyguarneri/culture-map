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
  newWidgetsSearch
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

// ../../../node_modules/@arcgis/map-components/dist/esm/arcgis-search.entry.js
var searchCss = "";
var ArcgisSearchStyle0 = searchCss;
var useSearchWidget = makeWidgetController(newWidgetsSearch);
var ArcgisSearch = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.arcgisReady = createEvent(this, "arcgisReady", 7);
    this.arcgisPropertyChange = createEvent(this, "arcgisPropertyChange", 7);
    this.widgetSearchBlur = createEvent(this, "arcgisBlur", 7);
    this.widgetSearchClear = createEvent(this, "arcgisClear", 7);
    this.widgetSearchComplete = createEvent(this, "arcgisComplete", 7);
    this.widgetSearchFocus = createEvent(this, "arcgisFocus", 7);
    this.widgetSearchStart = createEvent(this, "arcgisStart", 7);
    this.widgetSelectResult = createEvent(this, "arcgisSelectResult", 7);
    this.widgetSuggestComplete = createEvent(this, "arcgisSuggestComplete", 7);
    this.widgetSuggestStart = createEvent(this, "arcgisSuggestStart", 7);
    this.manager = useControllerManager(this);
    this.widget = useSearchWidget(this);
    this.viewModel = this.widget.viewModel;
    this.arcgisPropertyChange = usePropertyChange()("state");
    this.autoDestroyDisabled = false;
    this.referenceElement = void 0;
    this.activeMenu = this.widget.activeMenu;
    this.activeSource = this.widget.activeSource;
    this.activeSourceIndex = this.widget.activeSourceIndex;
    this.allPlaceholder = this.widget.allPlaceholder;
    this.allSources = this.widget.allSources;
    this.autoSelectDisabled = this.widget.autoSelect;
    this.defaultSources = this.widget.defaultSources;
    this.disabled = this.widget.disabled;
    this.icon = this.widget.icon;
    this.label = this.widget.label;
    this.includeDefaultSourcesDisabled = this.widget.includeDefaultSources;
    this.locationDisabled = this.widget.locationEnabled;
    this.maxResults = this.widget.maxResults;
    this.maxSuggestions = this.widget.maxSuggestions;
    this.minSuggestCharacters = this.widget.minSuggestCharacters;
    this.popupDisabled = this.widget.popupEnabled;
    this.popupTemplate = this.widget.popupTemplate;
    this.portal = this.widget.portal;
    this.resultGraphic = this.widget.resultGraphic;
    this.resultGraphicDisabled = this.widget.resultGraphicEnabled;
    this.results = this.widget.results;
    this.searchAllDisabled = this.widget.searchAllEnabled;
    this.searchTerm = this.widget.searchTerm;
    this.selectedResult = this.widget.selectedResult;
    this.sources = this.widget.sources;
    this.suggestions = this.widget.suggestions;
    this.suggestionsDisabled = this.widget.suggestionsEnabled;
    this.position = "top-right";
    this.state = this.viewModel.state;
  }
  //--------------------------------------------------------------------------
  //
  //  Methods
  //
  //--------------------------------------------------------------------------
  blurSearch() {
    return __async(this, null, function* () {
      this.widget?.blur();
    });
  }
  clearSearch() {
    return __async(this, null, function* () {
      this.widget?.clear();
    });
  }
  focusSearch() {
    return __async(this, null, function* () {
      this.widget?.focus();
    });
  }
  /** Permanently destroy the component */
  destroy() {
    return __async(this, null, function* () {
      yield this.manager.destroy();
    });
  }
  search(term) {
    return __async(this, null, function* () {
      return yield this.widget?.search(term);
    });
  }
  suggest(term) {
    return __async(this, null, function* () {
      return yield this.widget?.suggest(term);
    });
  }
  get el() {
    return getElement(this);
  }
};
ArcgisSearch.style = ArcgisSearchStyle0;
export {
  ArcgisSearch as arcgis_search
};
/*! Bundled license information:

@arcgis/map-components/dist/esm/arcgis-search.entry.js:
  (*!
   * All material copyright Esri, All Rights Reserved, unless otherwise specified.
   * See https://js.arcgis.com/4.30/esri/copyright.txt for details.
   * v4.30.7
   *)
*/
//# sourceMappingURL=arcgis-search.entry-VPBVOYZR.js.map
