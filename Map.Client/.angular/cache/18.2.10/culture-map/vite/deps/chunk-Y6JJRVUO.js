import {
  makeController
} from "./chunk-ULE6BIEJ.js";
import {
  getElementLocales,
  startLocaleObserver
} from "./chunk-37R24ZKG.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/map-components/dist/esm/chunk-PVEVZB4O-2c3b8893.js
var load = (loader) => makeController(loader);
var makeT9nController = (getAssetPath) => ({
  blocking = false,
  name
} = {}) => (
  // eslint-disable-next-line @typescript-eslint/promise-function-async
  makeController((component, controller) => {
    controller.onLifecycle(() => startLocaleObserver(component.el, getAssetPath("./assets"), ({
      t9nLocale,
      t9nStrings,
      lang
    }) => {
      controller.exports = __spreadProps(__spreadValues({}, t9nStrings), {
        _lang: lang,
        _t9nLocale: t9nLocale
      });
      const label = t9nStrings.componentLabel ?? t9nStrings.widgetLabel;
      if (typeof label === "string" && "label" in component && component.label == null) {
        component.label ?? (component.label = label);
      }
    }, name));
    if (blocking) {
      return controller.ready;
    }
    const locale = getElementLocales(component.el);
    return {
      _lang: locale.lang,
      _t9nLocale: locale.t9nLocale
    };
  })
);
var usePropertyChange = (_component) => propertyChangeController;
var eventName = "arcgisPropertyChange";
var propertyChangeController = (...toWatch) => makeController((component, controller) => {
  const eventedComponent = component;
  if (component.manager.isLit) {
    eventedComponent[eventName] = {
      emit: (payload) => {
        const event = new CustomEvent(eventName, {
          detail: payload,
          cancelable: true
        });
        component.el.dispatchEvent(event);
        return event;
      }
    };
  }
  const eventEmitter = eventedComponent[eventName];
  controller.onLoad(() => controller.onLifecycle(() => toWatch.map((name) => (
    // Casting to 'el' to simplify dynamic prop name typing
    component.manager.watch(name, () => eventEmitter.emit({
      name
    }))
  ))));
  return eventEmitter;
});

export {
  load,
  makeT9nController,
  usePropertyChange
};
/*! Bundled license information:

@arcgis/map-components/dist/esm/chunk-PVEVZB4O-2c3b8893.js:
  (*!
   * All material copyright Esri, All Rights Reserved, unless otherwise specified.
   * See https://js.arcgis.com/4.30/esri/copyright.txt for details.
   * v4.30.7
   *)
*/
//# sourceMappingURL=chunk-Y6JJRVUO.js.map
