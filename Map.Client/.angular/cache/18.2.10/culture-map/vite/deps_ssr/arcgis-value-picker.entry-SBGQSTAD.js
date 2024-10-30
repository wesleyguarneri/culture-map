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
  newWidgetsValuePicker
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

// ../../../node_modules/@arcgis/map-components/dist/esm/arcgis-value-picker.entry.js
var valuePickerCss = "arcgis-value-picker{}";
var ArcgisValuePickerStyle0 = valuePickerCss;
var useValuePickerWidget = makeWidgetController(newWidgetsValuePicker);
var ArcgisValuePicker = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.arcgisReady = createEvent(this, "arcgisReady", 7);
    this.arcgisPropertyChange = createEvent(this, "arcgisPropertyChange", 7);
    this.widgetAnimate = createEvent(this, "arcgisAnimate", 7);
    this.widgetNext = createEvent(this, "arcgisNext", 7);
    this.widgetPause = createEvent(this, "arcgisPause", 7);
    this.widgetPlay = createEvent(this, "arcgisPlay", 7);
    this.widgetPrevious = createEvent(this, "arcgisPrevious", 7);
    this.manager = useControllerManager(this);
    this.widget = useValuePickerWidget(this);
    this.arcgisPropertyChange = usePropertyChange()("values");
    this.autoDestroyDisabled = false;
    this.referenceElement = void 0;
    this.position = "bottom-left";
    this.canNext = this.widget.canNext;
    this.canPlay = this.widget.canPlay;
    this.canPrevious = this.widget.canPrevious;
    this.caption = this.widget.caption;
    this.component = this.widget.component;
    this.icon = this.widget.icon;
    this.label = this.widget.label;
    this.layout = this.widget.layout;
    this.loop = this.widget.loop;
    this.playRate = this.widget.playRate;
    this.hideNextButton = this.widget.visibleElements.nextButton;
    this.hidePlayButton = this.widget.visibleElements.playButton;
    this.hidePreviousButton = this.widget.visibleElements.previousButton;
    this.values = this.widget.values;
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
  next() {
    return __async(this, null, function* () {
      this.widget?.next();
    });
  }
  pause() {
    return __async(this, null, function* () {
      this.widget?.pause();
    });
  }
  play() {
    return __async(this, null, function* () {
      this.widget?.play();
    });
  }
  previous() {
    return __async(this, null, function* () {
      this.widget?.previous();
    });
  }
  get el() {
    return getElement(this);
  }
};
ArcgisValuePicker.style = ArcgisValuePickerStyle0;
export {
  ArcgisValuePicker as arcgis_value_picker
};
/*! Bundled license information:

@arcgis/map-components/dist/esm/arcgis-value-picker.entry.js:
  (*!
   * All material copyright Esri, All Rights Reserved, unless otherwise specified.
   * See https://js.arcgis.com/4.30/esri/copyright.txt for details.
   * v4.30.7
   *)
*/
//# sourceMappingURL=arcgis-value-picker.entry-SBGQSTAD.js.map
