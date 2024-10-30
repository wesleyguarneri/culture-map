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
  newWidgetsBookmarks
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

// ../../../node_modules/@arcgis/map-components/dist/esm/arcgis-bookmarks.entry.js
var bookmarksCss = "";
var ArcgisBookmarksStyle0 = bookmarksCss;
var useBookmarksWidget = makeWidgetController(newWidgetsBookmarks);
var ArcgisBookmarks = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.arcgisReady = createEvent(this, "arcgisReady", 7);
    this.widgetBookmarkEdit = createEvent(this, "arcgisEdit", 7);
    this.widgetBookmarkSelect = createEvent(this, "arcgisSelect", 7);
    this.arcgisPropertyChange = createEvent(this, "arcgisPropertyChange", 7);
    this.manager = useControllerManager(this);
    this.widget = useBookmarksWidget(this);
    this.viewModel = this.widget.viewModel;
    this.arcgisPropertyChange = usePropertyChange()("state");
    this.autoDestroyDisabled = false;
    this.referenceElement = void 0;
    this.bookmarks = this.widget.bookmarks;
    this.defaultCreateOptions = this.widget.defaultCreateOptions;
    this.defaultEditOptions = this.widget.defaultEditOptions;
    this.disabled = this.widget.disabled;
    this.dragEnabled = this.widget.dragEnabled;
    this.filterPlaceholder = this.widget.filterPlaceholder;
    this.filterText = this.widget.filterText;
    this.icon = this.widget.icon;
    this.label = this.widget.label;
    this.showAddBookmarkButton = this.widget.visibleElements.addBookmarkButton;
    this.showCloseButton = this.widget.visibleElements.closeButton;
    this.showCollapseButton = this.widget.visibleElements.collapseButton;
    this.showEditBookmarkButton = this.widget.visibleElements.editBookmarkButton;
    this.showFilter = this.widget.visibleElements.filter;
    this.hideFlow = this.widget.visibleElements.flow;
    this.showHeading = this.widget.visibleElements.heading;
    this.hideThumbnail = this.widget.visibleElements.thumbnail;
    this.hideTime = this.widget.visibleElements.time;
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
ArcgisBookmarks.style = ArcgisBookmarksStyle0;
export {
  ArcgisBookmarks as arcgis_bookmarks
};
/*! Bundled license information:

@arcgis/map-components/dist/esm/arcgis-bookmarks.entry.js:
  (*!
   * All material copyright Esri, All Rights Reserved, unless otherwise specified.
   * See https://js.arcgis.com/4.30/esri/copyright.txt for details.
   * v4.30.7
   *)
*/
//# sourceMappingURL=arcgis-bookmarks.entry-GQMDJPX5.js.map
