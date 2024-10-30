import {
  Deferred,
  camelToKebab,
  devToolsAwareTimeout,
  importCoreAccessor,
  importCoreAccessorSupportDecorators,
  importCoreReactiveUtils,
  isNotUndefined,
  safeAsyncCall,
  safeCall
} from "./chunk-37R24ZKG.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/map-components/dist/esm/index-c99fc80c.js
function retrieveComponentMembers(component, isLit) {
  if (isLit) {
    const elementProperties = getLitProperties(component);
    component.manager.internals.members = Object.fromEntries(Array.from(elementProperties, ([name, {
      state,
      type
    }]) => [name, [
      state ? 32 : type === Number ? 2 : type === Boolean ? 4 : 1
      /* String */
    ]]));
  } else {
    const constructor = component.constructor;
    const members = constructor.__registerControllers?.(component) ?? void 0;
    constructor.__registerControllers = void 0;
    if (typeof members !== "object") {
      throw new Error("Failed to retrieve internal component meta. Make sure you have the useComponentsControllers() Rollup Plugin for Stencil Controllers configured in your Stencil config.");
    }
    component.manager.internals.members = members;
  }
}
var getLitProperties = (component) => component.constructor.elementProperties;
function parsePropertyValue(value, type = 8) {
  const isComplex = value == null || typeof value === "object" || typeof value === "function";
  if (isComplex) {
    return value;
  }
  if ((type & 4) !== 0) {
    return value === "false" ? false : value === "" || !!value;
  } else if ((type & 2) !== 0) {
    return Number.parseFloat(value);
  } else if ((type & 1) !== 0) {
    return String(value);
  } else {
    return value;
  }
}
var makeMemberFilter = (filter) => (component) => {
  const members = component.manager.internals.members;
  return Object.entries(members ?? {}).filter(([_name, [propType]]) => (propType & filter) !== 0).map(([name]) => name);
};
var getPropLikeMembers = makeMemberFilter(
  63
  /* PropLike */
);
var getMemberType = (component, name) => component.manager.internals.members?.[name]?.[0];
function getPropType(component, name) {
  const type = getMemberType(component, name);
  if (type === void 0) {
    return void 0;
  } else if (type & 32) {
    return "state";
  } else {
    return "prop";
  }
}
var controllerSymbol = Symbol("controller");
var isController = (value) => typeof value === "object" && value !== null && (controllerSymbol in value || "hostConnected" in value || "hostDisconnected" in value || "hostUpdate" in value || "hostUpdated" in value);
var ControllerInternals = class {
  constructor() {
    this._ambientControllers = [];
    this.use = (value, watchExports) => __async(this, null, function* () {
      const controller = this.useRefSync(value);
      if (controller === void 0) {
        if (typeof watchExports === "function") {
          const error = new Error(`Unable to resolve a controller from the provided value, so can't watch it's exports. ${unresolvableExports}`);
          {
            console.error(error);
          }
        }
        return value;
      }
      yield controller.ready;
      if (typeof watchExports === "function") {
        if (controller.watchExports === void 0) {
          throw new Error(`The controller must implement watchExports method to support watching exports`);
        }
        const unsubscribe = controller.watchExports((exports) => watchExports(exports, unsubscribe));
      }
      return controller.exports;
    });
    this.useRef = (value) => __async(this, null, function* () {
      const controller = this.useRefSync(value);
      if (controller === void 0) {
        throw new Error(`Unable to resolve a controller from the provided value. ${unresolvableExports}`);
      }
      yield controller.ready;
      return controller;
    });
    this.useRefSync = (value) => {
      const ambientChildController = this.retrieveAmbientChildController();
      if (ambientChildController !== void 0) {
        return ambientChildController;
      }
      const component = Controller.internals.retrieveComponent();
      const controller = component.manager.internals.resolveExports(value);
      if (controller !== void 0) {
        return controller;
      }
      if (isController(value)) {
        return value;
      }
      return void 0;
    };
    this.shouldBypassSetter = false;
    this.shouldBypassGetter = false;
    this.shouldBypassReadonly = false;
    this.elementToInstance = /* @__PURE__ */ new WeakMap();
  }
  /*
   * Allow controllers to implicitly retrieve which component they are in, to
   * improve DX (avoids the need to pass "this" explicitly for each controller)
   */
  setAmbientComponent(component) {
    if (this._ambientComponent === component) {
      return;
    }
    this._ambientComponent = component;
    queueMicrotask(() => {
      if (this._ambientComponent === component) {
        this._ambientComponent = void 0;
      }
    });
  }
  retrieveComponent(name) {
    if (this._ambientComponent === void 0) {
      throw new Error([`Unable to find out which component ${name || "this"} controller `, "belongs to. This might happen if you tried to create a controller ", "outside the component. If so, please wrap your controller ", "definition in an arrow function, ", "`const myController = ()=>makeController(...);` and call that", "function inside the component `my = myController();`, or ", "define your controller using makeGenericController/GenericController ", "instead.\n", "If you wish to use a controller inside an async controller, ", "make sure you are using controller.use.\n", "You might also have multiple instances of Controllers loaded"].join("\n"));
    }
    return this._ambientComponent;
  }
  /*
   * Aids proxyExports() in knowing who is it's host
   */
  setParentController(controller) {
    if (controller === void 0) {
      this._ambientControllers = [];
      return;
    }
    const index = this._ambientControllers.indexOf(controller);
    this._ambientControllers = index === -1 ? [...this._ambientControllers, controller] : this._ambientControllers.slice(0, index + 1);
    queueMicrotask(() => {
      this._ambientControllers = [];
    });
  }
  retrieveParentControllers() {
    return this._ambientControllers;
  }
  /*
   * Aids controller.use in retrieving controller value when it receives
   * controller exports, rather than the controller itself
   */
  setAmbientChildController(controller) {
    if (this._ambientChildController === controller) {
      return;
    }
    this._ambientChildController = controller;
    queueMicrotask(() => {
      if (this._ambientChildController === controller) {
        this._ambientChildController = void 0;
      }
    });
  }
  retrieveAmbientChildController() {
    const controller = this._ambientChildController;
    this._ambientChildController = void 0;
    return controller;
  }
};
var unresolvableExports = ["The value you passed is not a controller and not a controller exports. If ", "your controller exports a literal value, try making your controller export ", "an object instead"].join("");
var _a;
var _Controller = class _Controller2 {
  constructor(component) {
    this._callbacks = {
      hostConnected: [],
      hostDisconnected: [],
      hostLoad: [],
      hostLoaded: [],
      hostUpdate: [],
      hostUpdated: [],
      hostDestroy: [],
      hostLifecycle: []
    };
    this._ready = new Deferred();
    this._lifecycleDisconnected = [];
    this.connectedCalled = false;
    this.willLoadCalled = false;
    this.didLoadCalled = false;
    this[_a] = true;
    this.ready = this._ready.promise;
    this._exports = makeProvisionalValue(this);
    this._exportWatchers = /* @__PURE__ */ new Set();
    const resolvedComponent = toControllerHost(component ?? _Controller2.internals.retrieveComponent(new.target.name));
    Object.defineProperty(this, "component", {
      writable: false,
      enumerable: false,
      configurable: true,
      value: resolvedComponent
    });
    this.component.addController(this);
    _Controller2.internals.setParentController(this);
    if ("hostDestroy" in this) {
      this.component.manager.ensureHasDestroy();
    }
    const manager = this.component.manager;
    const isInControllerManager = manager === void 0;
    if (!isInControllerManager) {
      queueMicrotask(() => this.catchUpLifecycle());
    }
  }
  /**
   * If controller is being added dynamically, after the component
   * construction, then trigger connected and load right away
   */
  catchUpLifecycle() {
    const {
      manager
    } = this.component;
    const connectedWillStillHappen = !manager.connectedCalled;
    if (!connectedWillStillHappen && !this.connectedCalled) {
      this.triggerConnected();
    }
    const loadWillStillHappen = !manager.willLoadCalled;
    if (loadWillStillHappen) {
      return;
    }
    this.triggerLoad().then(() => {
      const loadedWillStillHappen = !manager.didLoadCalled;
      if (loadedWillStillHappen) {
        return;
      }
      this.triggerLoaded();
    }).catch(console.error);
  }
  get exports() {
    return this._exports;
  }
  /**
   * Set controller's exports property (for usage with proxyExports()) and mark
   * controller as ready (for usage in other controllers). Also, triggers
   * re-render of the component
   */
  set exports(exports) {
    if (this._exports !== exports) {
      this._exports = exports;
      if (this.connectedCalled) {
        this.component.requestUpdate();
      }
      this._exportWatchers.forEach(safeCall);
    }
    this._ready.resolve(exports);
  }
  setProvisionalExports(exports) {
    this._exports = makeProvisionalValue(exports);
    this._exportWatchers.forEach(safeCall);
  }
  watchExports(callback) {
    const safeCallback = () => callback(this._exports);
    this._exportWatchers.add(safeCallback);
    return () => void this._exportWatchers.delete(safeCallback);
  }
  /**
   * A flexible utility for making sure a controller is loaded before it's used,
   * regardless of how or where a controller was defined:
   *
   * @example
   * makeGenericController(async (component, controller) => {
   *   // Await some controller from the component:
   *   await controller.use(component.someController);
   *   // Initialize new controllers
   *   await controller.use(load(importCoreReactiveUtils));
   *   await controller.use(new ViewModelController(component,newWidgetsHomeHomeViewModel));
   *   await controller.use(someController(component));
   * });
   *
   * @remarks
   * If your controller is not async, and you are not creating it async, then
   * you are not required to use controller.use - you can use it directly.
   * Similarly, accessing controllers after componentWillLoad callback does not
   * require awaiting them as they are guaranteed to be loaded by then.
   */
  get use() {
    _Controller2.internals.setAmbientComponent(this.component);
    return _Controller2.internals.use;
  }
  /**
   * Just like controller.use, but returns the controller itself, rather than it's
   * exports
   *
   * Use cases:
   * - You have a controller and you want to make sure it's loaded before you
   *   try to use it
   * - Your controller is not using exports, so you wish to access some props on
   *   it directly
   * - You have a controller exports only, and you want to retrieve the
   *   controller itself. This is useful if you wish to call .watchExports() or
   *   some other method on the controller
   */
  get useRef() {
    _Controller2.internals.setAmbientComponent(this.component);
    return _Controller2.internals.useRef;
  }
  /**
   * Like useRef, but doesn't wait for the controller to get ready
   */
  get useRefSync() {
    _Controller2.internals.setAmbientComponent(this.component);
    return _Controller2.internals.useRefSync;
  }
  /**
   * If you need to set a prop/state without triggering the custom setter you
   * defined with getSet()/dynamicGetSet()/readonly(), set the value inside
   * of this function
   *
   * @example
   * @Prop() readOnly = this.manager.readOnly(true);
   *
   * someAction(): void {
   *   this.manager.bypassSetter(()=>{
   *     this.readOnly = false;
   *   });
   * }
   *
   */
  bypassSetter(callback) {
    _Controller2.internals.shouldBypassSetter = true;
    try {
      return callback();
    } finally {
      _Controller2.internals.shouldBypassSetter = false;
    }
  }
  /**
   * Like bypassSetter, but only bypasses this.manager.readonly(), rather that
   * all setters set using this.manager.getSet()
   */
  bypassReadonly(callback) {
    _Controller2.internals.shouldBypassReadonly = true;
    try {
      return callback();
    } finally {
      _Controller2.internals.shouldBypassReadonly = false;
    }
  }
  /**
   * Property reads inside of this function will bypass any custom getter you
   * may have, and read the value directly from what's stored in Stencil/Lit.
   *
   * This also bypasses reactiveUtils integration - reading a property inside of
   * bypassGetter won't make that property tracked.
   *
   * @example
   * reactiveUtils.watch(
   *   ()=>{
   *     this.manager.bypassGetter(()=>{
   *       console.log(this.someProp);
   *     });
   *     return this.prop;
   *   },
   *   console.log
   * )
   */
  bypassGetter(callback) {
    _Controller2.internals.shouldBypassGetter = true;
    try {
      return callback();
    } finally {
      _Controller2.internals.shouldBypassGetter = false;
    }
  }
  /**
   * Like this.manager.getSet(), but can be called on any component's
   * state/prop from anywhere, rather than just from the default value
   */
  dynamicGetSet(name, getSet) {
    this.genericGetSet(name, getSet);
  }
  /**
   * Like dynamicGetSet, but less type-safe. Useful in cases when trying to set
   * getters/setters in place where property names & types are not known
   * statically
   */
  genericGetSet(property, getSet) {
    var _a2, _b;
    const genericGetSet = getSet;
    const internals = this.component.manager.internals;
    if (typeof genericGetSet.get === "function") {
      (_a2 = internals.getters)[property] ?? (_a2[property] = []);
      internals.getters[property].unshift(genericGetSet.get);
    }
    const set = genericGetSet.set === "ignore" ? ignoreSet : genericGetSet.set;
    if (set) {
      (_b = internals.setters)[property] ?? (_b[property] = []);
      internals.setters[property].unshift(set);
    }
  }
  // FEATURE: improve typings
  /**
   * Dynamically set a watcher for any reactive property
   */
  watch(property, callback) {
    var _a2;
    const type = getMemberType(this.component, property);
    if (type === void 0) {
      throw new Error(`Trying to watch a non-@property, non-@state property "${property}". Either convert it into a @state() or use get/set syntax`);
    }
    const internals = this.component.manager.internals;
    (_a2 = internals.allWatchers)[property] ?? (_a2[property] = []);
    const watchers = internals.allWatchers[property];
    const genericCallback = callback;
    const safeCallback = (newValue, oldValue, propertyName) => safeCall(genericCallback, null, newValue, oldValue, propertyName);
    watchers.push(safeCallback);
    return () => {
      const index = watchers.indexOf(safeCallback);
      if (index !== -1) {
        watchers.splice(index, 1);
      }
    };
  }
  controllerRemoved() {
    if (this.component.el.isConnected) {
      this.triggerDisconnected();
    }
    this.triggerDestroy();
  }
  // Register a lifecycle callback
  onConnected(callback) {
    this._callbacks.hostConnected.push(callback);
  }
  onDisconnected(callback) {
    this._callbacks.hostDisconnected.push(callback);
  }
  onLoad(callback) {
    this._callbacks.hostLoad.push(callback);
  }
  onLoaded(callback) {
    this._callbacks.hostLoaded.push(callback);
  }
  onUpdate(callback) {
    this._callbacks.hostUpdate.push(callback);
  }
  onUpdated(callback) {
    this._callbacks.hostUpdated.push(callback);
  }
  onDestroy(callback) {
    this.component.manager.ensureHasDestroy();
    this._callbacks.hostDestroy.push(callback);
  }
  onLifecycle(callback) {
    this._callbacks.hostLifecycle.push(callback);
    if (this.connectedCalled && this.component.el.isConnected) {
      this._callLifecycle(callback);
    }
  }
  // Call each lifecycle hook
  triggerConnected() {
    const genericController = this;
    if (genericController.hostConnected) {
      safeCall(genericController.hostConnected, genericController);
    }
    this._callbacks.hostConnected.forEach(safeCall);
    this.triggerLifecycle();
    this.connectedCalled = true;
  }
  triggerDisconnected() {
    const genericController = this;
    if (genericController.hostDisconnected) {
      safeCall(genericController.hostDisconnected, genericController);
    }
    this._callbacks.hostDisconnected.forEach(safeCall);
    this._lifecycleDisconnected.forEach(safeCall);
    this._lifecycleDisconnected = [];
  }
  triggerLoad() {
    return __async(this, null, function* () {
      if (this.willLoadCalled) {
        return;
      }
      this.willLoadCalled = true;
      const genericController = this;
      if (genericController.hostLoad) {
        yield safeAsyncCall(genericController.hostLoad, genericController);
      }
      if (this._callbacks.hostLoad.length > 0) {
        yield Promise.allSettled(this._callbacks.hostLoad.map(safeAsyncCall));
      }
      this._ready.resolve(this._exports);
    });
  }
  triggerLoaded() {
    if (this.didLoadCalled) {
      return;
    }
    const genericController = this;
    if (genericController.hostLoaded) {
      safeCall(genericController.hostLoaded, genericController);
    }
    this._callbacks.hostLoaded.forEach(safeCall);
    this.didLoadCalled = true;
  }
  triggerUpdate() {
    const genericController = this;
    if (genericController.hostUpdate) {
      safeCall(genericController.hostUpdate, genericController);
    }
    this._callbacks.hostUpdate.forEach(safeCall);
  }
  triggerUpdated() {
    const genericController = this;
    if (genericController.hostUpdated) {
      safeCall(genericController.hostUpdated, genericController);
    }
    this._callbacks.hostUpdated.forEach(safeCall);
  }
  triggerDestroy() {
    const genericController = this;
    if (genericController.hostDestroy) {
      safeCall(genericController.hostDestroy, genericController);
    }
    this._callbacks.hostDestroy.forEach(safeCall);
  }
  triggerLifecycle() {
    const genericController = this;
    if (genericController.hostLifecycle) {
      this._callLifecycle(() => genericController.hostLifecycle());
    }
    this._callbacks.hostLifecycle.forEach((callback) => this._callLifecycle(callback));
  }
  _callLifecycle(callback) {
    _Controller2.internals.setAmbientComponent(this.component);
    const cleanupRaw = safeCall(callback);
    const cleanup = Array.isArray(cleanupRaw) ? cleanupRaw : [cleanupRaw];
    cleanup.forEach((cleanup2) => {
      if (typeof cleanup2 === "function") {
        this._lifecycleDisconnected.push(cleanup2);
      } else if (typeof cleanup2 === "object" && typeof cleanup2.remove === "function") {
        this._lifecycleDisconnected.push(cleanup2.remove);
      }
    });
  }
};
_a = controllerSymbol;
_Controller.internals = new ControllerInternals();
var Controller = _Controller;
var GenericController = class extends Controller {
  // Redundant constructor needed to improve typing
  constructor(component) {
    super(component);
  }
  // Overriding super's watch only to improve typing
  watch(property, callback) {
    return super.watch(property, callback);
  }
  dynamicGetSet(property, getSet) {
    super.genericGetSet(property, getSet);
  }
};
function makeProvisionalValue(base) {
  if (typeof base !== "object" && typeof base !== "function" || base === null) {
    return base;
  }
  const proxy2 = new Proxy(base, {
    get(target, prop, receiver) {
      if (cyclical.has(prop) && prop in target && target[prop] === proxy2) {
        return void 0;
      }
      if (prop in target || prop in Promise.prototype || typeof prop === "symbol") {
        return typeof target === "function" ? target[prop] : Reflect.get(target, prop, receiver);
      }
      console.error(`Trying to access "${prop.toString()}" on the controller before it's loaded. ${accessBeforeLoad}`);
      return void 0;
    },
    set(target, prop, newValue, receiver) {
      console.error(`Trying to set "${prop.toString()}" on the controller before it's loaded. ${accessBeforeLoad}`);
      return Reflect.set(target, prop, newValue, receiver);
    }
  });
  return proxy2;
}
var cyclical = /* @__PURE__ */ new Set(["exports", "_exports"]);
var accessBeforeLoad = "";
function toControllerHost(component) {
  if ("addController" in component) {
    return component;
  } else {
    throw new Error("Component does not implement ControllerHost. This might be because you forgot to add 'manager: Controller<this> = useControllerManager(this);' in your component, or you tried to use some controller before that line");
  }
}
var ignoreSet = (_, value) => value;
function trackPropertyKey(object, onResolved, defaultValue) {
  const keys = Object.keys(object);
  const keyCount = keys.length;
  if (keyTrackMap === void 0) {
    queueMicrotask(keyTrackResolve);
  }
  keyTrackMap ?? (keyTrackMap = /* @__PURE__ */ new Map());
  let pendingTrackers = keyTrackMap.get(object);
  if (pendingTrackers === void 0) {
    pendingTrackers = {
      callbacks: [],
      keyCount
    };
    keyTrackMap.set(object, pendingTrackers);
  }
  if (pendingTrackers.keyCount !== keyCount) {
    pendingTrackers.callbacks.forEach((resolve) => resolve(keys));
    pendingTrackers.callbacks = [];
    pendingTrackers.keyCount = keyCount;
  }
  pendingTrackers.callbacks.push((keys2) => {
    const callback = (key2) => safeCall(onResolved, null, key2);
    const key = keys2[keyCount];
    if (key === void 0) {
      callback(void 0);
    } else if (object[key] === defaultValue) {
      callback(key);
    } else {
      callback(void 0);
    }
  });
  return defaultValue;
}
var keyTrackMap = void 0;
function keyTrackResolve() {
  Array.from(keyTrackMap?.entries() ?? []).forEach(([object, {
    callbacks
  }]) => {
    const keys = Object.keys(object);
    callbacks.forEach((commit) => commit(keys));
  });
  keyTrackMap = void 0;
}
var ComponentInternals = class {
  constructor(component) {
    this.enabledWatchers = {};
    this.allWatchers = {};
    this.trackKey = (hostsCandidates, onResolved, defaultValue) => {
      const candidateHosts = Array.isArray(hostsCandidates) ? hostsCandidates : [hostsCandidates];
      let leftToResolve = candidateHosts.length + 1;
      const resolved = (resolution) => {
        leftToResolve -= 1;
        if (resolution !== void 0) {
          leftToResolve = 0;
        }
        if (leftToResolve === 0) {
          onResolved(resolution);
        }
      };
      candidateHosts.forEach((host) => this.component.manager.trackPropertyKey(host, (key) => resolved(key === void 0 ? void 0 : {
        key,
        host,
        type: "property",
        domValue: void 0
      }), defaultValue));
      this.component.manager.trackPropKey((key, domValue) => {
        const propType = key === void 0 ? void 0 : getPropType(this.component, key);
        resolved(key === void 0 ? void 0 : {
          key,
          host: this.component,
          type: propType ?? "prop",
          domValue: propType === "prop" ? domValue : void 0
        });
      }, defaultValue);
      return defaultValue;
    };
    this.trackPropKey = (onResolved, defaultValue) => {
      if (this._trackedValue !== nothing && this._trackedValue !== defaultValue) {
        this._firePropertyTrackers(void 0, void 0, void 0);
      }
      if (this._keyTrackers.length === 0) {
        queueMicrotask(() => this._firePropertyTrackers(void 0, void 0, void 0));
      }
      this._trackedValue = defaultValue;
      this._keyTrackers.push((key, value, previousValue) => safeCall(onResolved, void 0, defaultValue === value ? key : void 0, previousValue));
      return defaultValue;
    };
    this._trackedValue = nothing;
    this._keyTrackers = [];
    this.getters = {};
    this.setters = {};
    this.accessorGetter = {};
    this.accessorSetter = {};
    this.reactiveUtilsIntegrations = /* @__PURE__ */ new Set();
    this._exports = /* @__PURE__ */ new WeakMap();
    Object.defineProperty(this, "component", {
      writable: false,
      enumerable: false,
      configurable: true,
      value: component
    });
  }
  _firePropertyTrackers(key, value, oldValue) {
    const trackers = this._keyTrackers;
    this._trackedValue = nothing;
    this._keyTrackers = [];
    trackers.forEach((tracker) => tracker(key, value, oldValue));
  }
  /**
   * Configure a getter or setter for a given \@Prop/\@State
   *
   * Note, since props are defined on the prototype, they are shared between all
   * instances of a component. Thus, instead of passing a reference to the
   * getter/setter function, you should update the
   * ComponentInternals.getters/setters properties, and then call getSetProxy
   * to apply the changes to the prototype
   */
  getSetProxy(property, hasGetter, hasSetter) {
    const component = this.component;
    const classPrototype = component.constructor.prototype;
    this._getSetProxy(classPrototype, property, hasGetter, hasSetter, "class");
    if (component.manager.isLit) {
      return;
    }
    const htmlPrototype = component.el.constructor.prototype;
    if (classPrototype !== htmlPrototype) {
      this._getSetProxy(htmlPrototype, property, hasGetter, hasSetter, "html");
    }
  }
  _getSetProxy(prototype, name, hasGetter, hasSetter, type) {
    const component = this.component;
    const propType = getMemberType(component, name);
    const descriptor = Object.getOwnPropertyDescriptor(prototype, name);
    const tolerateNotFound = type === "html";
    if (descriptor?.set === void 0 || descriptor.get === void 0) {
      if (descriptor !== void 0 && "value" in descriptor) {
        throw new Error(`getSet() should only be used on @Prop/@property/@State/@state properties. For internal component properties, use regular get/set syntax. Tried to use it on "${name}" in ${component.el.tagName}`);
      } else if (tolerateNotFound) {
        return;
      } else {
        throw new Error(`Unable to find "${name}" property on the ${component.el.tagName} component`);
      }
    }
    const {
      get: originalGet,
      set: originalSet
    } = descriptor;
    const isGetterAlreadyOverwritten = customAccessor in originalGet;
    const isSetterAlreadyOverwritten = customAccessor in originalSet;
    const shouldOverwriteGet = !isGetterAlreadyOverwritten && hasGetter;
    const shouldOverwriteSet = !isSetterAlreadyOverwritten && hasSetter;
    if (!shouldOverwriteGet && !shouldOverwriteSet) {
      return;
    }
    const finalGetter = shouldOverwriteGet ? function getter() {
      let value = originalGet.call(this);
      const component2 = Controller.internals.elementToInstance.get(this);
      if (Controller.internals.shouldBypassGetter || component2 === void 0) {
        return value;
      }
      const internals = component2.manager.internals;
      value = internals.accessorGetter[name](value, name);
      const getters = internals.getters[name] ?? emptyArray;
      for (let i = 0; i < getters.length; i++) {
        value = getters[i](value, name);
      }
      return value;
    } : originalGet;
    const finalSetter = shouldOverwriteSet ? function setter(rawNewValue) {
      const oldValue = originalGet.call(this);
      const component2 = Controller.internals.elementToInstance.get(this);
      if (component2 === void 0) {
        originalSet.call(this, rawNewValue);
        return;
      }
      let newValue = component2.manager.isLit ? rawNewValue : parsePropertyValue(rawNewValue, propType);
      const internals = component2.manager.internals;
      if (newValue === oldValue) {
        originalSet.call(this, rawNewValue);
      } else {
        const setters = Controller.internals.shouldBypassSetter ? emptyArray : internals.setters[name] ?? emptyArray;
        for (let i = 0; i < setters.length; i++) {
          newValue = setters[i](newValue, oldValue, name);
          if (newValue === oldValue) {
            break;
          }
        }
        newValue = internals.accessorSetter[name](newValue, oldValue, name);
        originalSet.call(this, newValue);
        if (newValue !== oldValue) {
          internals.enabledWatchers[name]?.forEach((watcher) => watcher(newValue, oldValue, name));
        }
      }
      if (internals._keyTrackers.length > 0) {
        internals?._firePropertyTrackers(name, rawNewValue, oldValue);
      }
    } : originalSet;
    if (shouldOverwriteGet) {
      Object.defineProperty(finalGetter, customAccessor, {
        value: true
      });
    }
    if (shouldOverwriteSet) {
      Object.defineProperty(finalSetter, customAccessor, {
        value: true
      });
    }
    Object.defineProperty(prototype, name, __spreadProps(__spreadValues({}, descriptor), {
      get: finalGetter,
      set: finalSetter
    }));
  }
  /**
   * Associate an exports object with a controller for reverse lookup in
   * controller.use
   */
  markExports(controller, exports) {
    if (typeof exports === "object" && exports !== null || typeof exports === "function") {
      this._exports.set(exports, controller);
    }
  }
  resolveExports(exports) {
    if (typeof exports === "object" && exports !== null || typeof exports === "function") {
      return this._exports.get(exports);
    } else {
      return void 0;
    }
  }
};
var emptyArray = [];
var customAccessor = Symbol("controllersCustomAccessor");
var nothing = Symbol("nothing");
var useControllerManager = (component, forceUpdate) => new ControllerManager(component, forceUpdate);
var ControllerManager = class extends GenericController {
  constructor(component, forceUpdate) {
    const isLit = "addController" in component;
    const controllers = /* @__PURE__ */ new Set();
    function addController(controller) {
      controllers.add(controller);
      if (isLit && !(controllerSymbol in controller) && component.el.isConnected) {
        controller.hostConnected?.();
      }
    }
    function removeController(controller) {
      void controllers.delete(controller);
      controller.controllerRemoved?.();
    }
    const controllerHost = component;
    controllerHost.addController = addController;
    controllerHost.removeController = removeController;
    if (!isLit) {
      const update = forceUpdate ?? component.constructor.__forceUpdate;
      controllerHost.requestUpdate = () => update(component);
    }
    super(component);
    this.internals = new ComponentInternals(this.component);
    this.destroyed = false;
    this._updatePromise = new Deferred();
    this._originalLifecycles = {};
    this.trackPropertyKey = trackPropertyKey;
    this.trackPropKey = this.internals.trackPropKey;
    this.trackKey = this.internals.trackKey;
    this._readonlySetter = (newValue, oldValue, property) => {
      if (Controller.internals.shouldBypassReadonly) {
        return newValue;
      }
      const component2 = this.component;
      const isProp = getPropType(component2, property) === "prop";
      if (isProp) {
        if (this.isLit) {
          const details = getLitProperties(component2).get(property);
          if (details && details?.attribute !== false) {
            component2.el.setAttribute(
              typeof details.attribute === "string" ? details.attribute : camelToKebab(property),
              // Not using converter.toAttribute to keep this unlikely case simpler
              String(oldValue)
            );
          }
        } else {
          component2.requestUpdate();
        }
      }
      throw new Error(`Cannot assign to read-only property "${property}" of ${component2.el.tagName.toLowerCase()}. Trying to assign "${String(newValue)}"`);
    };
    this.devOnlySetPersistentControllerData = void 0;
    this.devOnlyGetPersistentControllerData = void 0;
    this.isLit = isLit;
    this.component.manager = this;
    retrieveComponentMembers(component, isLit);
    this._controllers = controllers;
    this.exports = void 0;
    this.hasDestroy = "autoDestroyDisabled" in this.component && typeof this.component.destroy === "function";
    if (this.hasDestroy) {
      this.watch("autoDestroyDisabled", () => this._autoDestroyDisabledWatcher());
    }
    this._bindLifecycleMethods();
    if (!isLit) {
      Object.defineProperty(component, "updateComplete", {
        get: () => __async(this, null, function* () {
          return yield this._updatePromise.promise;
        })
      });
    }
    const members = getPropLikeMembers(component);
    const internals = component.manager.internals;
    members.forEach((name) => {
      internals.accessorGetter[name] = defaultGetterSetter;
      internals.accessorSetter[name] = defaultGetterSetter;
      internals.getSetProxy(name, true, true);
    });
    Controller.internals.setParentController(void 0);
    Controller.internals.setAmbientComponent(component);
    Controller.internals.elementToInstance.set(component.el, component);
    Controller.internals.elementToInstance.set(component, component);
  }
  _bindLifecycleMethods() {
    const component = this.component;
    const isLit = this.isLit;
    const isStencilDistBuild = component.el === component;
    this._originalLifecycles = {
      // These component's callbacks will be called by Lit, so we don't have to
      connectedCallback: isLit || isStencilDistBuild ? void 0 : component.connectedCallback,
      disconnectedCallback: isLit || isStencilDistBuild ? void 0 : component.disconnectedCallback,
      componentWillLoad: isLit ? void 0 : component.componentWillLoad,
      componentDidLoad: isLit ? void 0 : component.componentDidLoad,
      componentWillUpdate: isLit ? void 0 : component.componentWillUpdate,
      componentDidUpdate: isLit ? void 0 : component.componentDidUpdate,
      destroy: component.destroy
    };
    const hostConnected = this._connectedCallback.bind(this);
    const hostDisconnected = this._disconnectedCallback.bind(this);
    const hostUpdate = this._update.bind(this);
    const hostUpdated = this._updated.bind(this);
    if (isLit) {
      component.constructor.prototype.addController.call(component, {
        // Lit will call these callbacks
        hostConnected,
        hostDisconnected,
        hostUpdate,
        hostUpdated
      });
    } else {
      component.connectedCallback = hostConnected;
      component.disconnectedCallback = hostDisconnected;
      component.componentWillLoad = this._load.bind(this);
      component.componentDidLoad = this._loaded.bind(this);
      component.componentWillUpdate = hostUpdate;
      component.componentDidUpdate = hostUpdated;
    }
    if (this.hasDestroy) {
      component.destroy = this.destroy.bind(this);
    }
  }
  /**
   * Throws an error if component does not implement destroy() lifecycle, but
   * tries to use it.
   */
  ensureHasDestroy() {
    if (!this.hasDestroy) {
      throw new Error(destroyErrorMessage);
    }
  }
  /**
   * Private because this is not supposed to be called by Component directly.
   * Instead, _bindLifecycleMethods will take care of that. Otherwise, you risk
   * calling lifecycle methods twice.
   */
  _connectedCallback() {
    if (this.destroyed) {
      const tagName = this.component.el.tagName.toLowerCase();
      this.component.el.remove();
      throw new Error(`The ${tagName} component has already been destroyed. It can not be used again. If you meant to disconnect and reconnect a component without automatic destroy, set the autoDestroyDisabled prop.`);
    }
    if (this._autoDestroyTimeout !== void 0) {
      clearTimeout(this._autoDestroyTimeout);
    }
    this.internals.enabledWatchers = this.internals.allWatchers;
    keyTrackResolve();
    this._controllers.forEach((controller) => "triggerConnected" in controller ? controller.triggerConnected() : safeCall(controller.hostConnected, controller));
    this._originalLifecycles.connectedCallback?.call(this.component);
  }
  _disconnectedCallback() {
    if (this.destroyed) {
      return;
    }
    this._controllers.forEach((controller) => "triggerDisconnected" in controller ? controller.triggerDisconnected() : safeCall(controller.hostDisconnected, controller));
    this._originalLifecycles.disconnectedCallback?.call(this.component);
    if (this.hasDestroy) {
      this._autoDestroyDisabledWatcher();
    }
  }
  _load() {
    return __async(this, null, function* () {
      const integrations = this.internals.reactiveUtilsIntegrations;
      if (integrations.size > 0) {
        for (const controller of integrations) {
          if ("triggerLoad" in controller) {
            yield controller.triggerLoad();
          } else {
            yield safeAsyncCall(controller.hostLoad, controller);
          }
        }
      }
      yield Promise.allSettled(Array.from(this._controllers, (controller) => __async(this, null, function* () {
        return integrations.has(controller) ? void 0 : "triggerLoad" in controller ? yield controller.triggerLoad() : yield safeAsyncCall(controller.hostLoad, controller);
      })));
      yield this._originalLifecycles.componentWillLoad?.call(this.component);
    });
  }
  _loaded() {
    this._controllers.forEach((controller) => "triggerLoaded" in controller ? controller.triggerLoaded() : safeCall(controller.hostLoaded, controller));
    this._originalLifecycles.componentDidLoad?.call(this.component);
  }
  _update() {
    this._controllers.forEach((controller) => "triggerUpdate" in controller ? controller.triggerUpdate() : safeCall(controller.hostUpdate, controller));
    void this._originalLifecycles.componentWillUpdate?.call(this.component);
  }
  _updated() {
    this._controllers.forEach((controller) => "triggerUpdated" in controller ? controller.triggerUpdated() : safeCall(controller.hostUpdated, controller));
    this._originalLifecycles.componentDidUpdate?.call(this.component);
    if (!this.isLit) {
      const updatePromise = this._updatePromise;
      this._updatePromise = new Deferred();
      updatePromise.resolve(true);
    }
  }
  destroy() {
    return __async(this, null, function* () {
      this.ensureHasDestroy();
      if (this.destroyed) {
        return;
      }
      if (this.component.el.isConnected) {
        this.hasDestroy = false;
        try {
          this.component.el.remove();
        } finally {
          this.hasDestroy = true;
        }
      }
      this._autoDestroyTimeout = void 0;
      this.destroyed = true;
      this._controllers.forEach((controller) => "triggerDestroy" in controller ? controller.triggerDestroy() : safeCall(controller.hostDestroy, controller));
      this._controllers.clear();
      yield this._originalLifecycles.destroy?.call(this.component);
    });
  }
  _autoDestroyDisabledWatcher() {
    if (!this.component.el.isConnected && !this.component.autoDestroyDisabled) {
      if (this._autoDestroyTimeout !== void 0) {
        clearTimeout(this._autoDestroyTimeout);
      }
      const destroy = () => void this.destroy().catch(console.error);
      {
        this._autoDestroyTimeout = devToolsAwareTimeout(destroy, autoDestroyOnDisconnectTimeout);
      }
    }
  }
  // REFACTOR: replace this with a readonly:true option in @property()
  /**
   * Make a @Prop() or @State() readonly (prevent overwriting default value).
   *
   * For internal properties, prefer TypeScript's "readonly" modifier instead.
   *
   * @example
   * // Defining readonly prop
   * @Prop({ reflect: true }) prop = this.manager.readonly('a');
   *
   * @example
   * // Overwriting readonly prop internally
   * this.manager.bypassReadonly(()=>{
   *   this.prop = 'b';
   * });
   *
   */
  readonly(value) {
    return this.getSet(value, {
      set: this._readonlySetter
    });
  }
  // REFACTOR: remove this in Lit in favor of native get/set
  /**
   * Listen for any component's @State()/@Prop() change, and mutate it's
   * value before it is set.
   * This is necessary because Stencil's Compiler does not support get/set for
   * @State()/@Prop().
   * For private component properties, you should use regular get/set syntax.
   *
   * @example
   * @Prop() exampleProp = this.manager.getSet(defaultValue,{get,set})
   * @Prop() someProp = this.manager.getSet(
   *   undefined as string | undefined,
   *   {
   *     get: (value)=>value.trim(),
   *     set: (newValue,oldValue) => newValue.trim() ?? oldValue
   *   }
   * )
   *
   * @remarks
   * Unlike a native get/set, the get function receives the current attribute
   * value, and can modify it before returning it (or can disregard the current
   * value and get it from elsewhere instead).
   * Similarly, setter is called with the new and old value, and is expected to
   * return the final new value (or return the old value to undo the change)
   */
  getSet(defaultValue, getSet) {
    return this.component.manager.trackPropKey((name) => {
      var _a2;
      if (name === void 0) {
        throw new Error("Unable to resolve get/set's prop name. Make sure you are using it like @Prop() someProp = this.manager.getSet(defaultValue,{get,set})");
      }
      if (getSet.set === this._readonlySetter) {
        (_a2 = this.internals).readonlyProps ?? (_a2.readonlyProps = /* @__PURE__ */ new Set());
        this.internals.readonlyProps.add(name);
      }
      const genericComponent = this.component;
      const value = genericComponent[name];
      const isStencilHotReload = false;
      const initialSet = getSet.initialSet ?? true;
      if (value != null && value !== defaultValue && typeof getSet.set === "function" && initialSet && !isStencilHotReload) {
        const newValue = getSet.set(value, defaultValue, name);
        if (newValue !== value) {
          if (this.isLit) {
            genericComponent[name] = newValue;
          } else {
            let firstConnected = true;
            this.onConnected(() => {
              if (!firstConnected) {
                return;
              }
              firstConnected = true;
              this.bypassSetter(() => {
                genericComponent[name] = newValue;
              });
            });
          }
        }
      }
      this.genericGetSet(name, getSet);
    }, defaultValue);
  }
};
var destroyErrorMessage = `
If the component uses a controller that uses destroy() method, then the
component must have the following properties:
${// Don't expose internal code in production, and keep bundle smaller:
`autoDestroyDisabled and destroy`}
`.trim();
var autoDestroyOnDisconnectTimeout = 1e3;
var defaultGetterSetter = (value) => value;
var proxyExports = (Class) => (...args) => {
  const ambientControllers = Controller.internals.retrieveParentControllers();
  const instance = new Class(...args);
  const initialExports = instance.exports;
  Controller.internals.setParentController(ambientControllers.at(-1));
  const internals = instance.component.manager.internals;
  internals.markExports(instance, initialExports);
  instance.watchExports((exports) => internals.markExports(instance, exports));
  Controller.internals.setAmbientChildController(instance);
  const hostCandidates = [instance.component, ...ambientControllers].reverse();
  return internals.trackKey(hostCandidates, (resolution) => resolution === void 0 ? void 0 : setProxy(instance, resolution, initialExports), initialExports);
};
function setProxy(controller, {
  host,
  key,
  type
}, initialExports) {
  const genericHost = host;
  const controllerValueChanged = genericHost[key] !== controller.exports;
  const hostValueChanged = genericHost[key] !== initialExports;
  const controllerUpdatedExports = initialExports !== controller.exports;
  if (controllerValueChanged && !hostValueChanged && controllerUpdatedExports) {
    genericHost[key] = controller.exports;
  }
  const isProxyExportsOnComponent = host === controller.component;
  if (isProxyExportsOnComponent && type === "prop") {
    const internals = controller.component.manager.internals;
    if (hostValueChanged) {
      internals.markExports(controller, genericHost[key]);
    }
    controller.component.manager.watch(key, (value) => {
      if (value !== controller.exports) {
        internals.markExports(controller, value);
      }
    });
  }
  controller.watchExports(() => {
    if (genericHost[key] === controller.exports) {
      return;
    }
    const manager = controller.component.manager;
    const isReadOnly = manager.internals.readonlyProps?.has(key) === true;
    if (isReadOnly) {
      manager.bypassReadonly(() => {
        genericHost[key] = controller.exports;
      });
    } else {
      genericHost[key] = controller.exports;
    }
  });
}
var makeController = (constructor) => proxy$1(void 0, constructor);
var FunctionalController = class extends Controller {
  constructor(component, constructor) {
    super(component);
    const originalExports = this.exports;
    try {
      Controller.internals.setAmbientComponent(this.component);
      const value = constructor(this.component, this);
      const constructorChangedExports = this.exports !== originalExports;
      if (value instanceof Promise) {
        if (!constructorChangedExports) {
          this.setProvisionalExports(value);
        }
        const resolved = value.then((result) => {
          this.exports = result;
          super.catchUpLifecycle();
        }).catch((error) => {
          this._ready.reject(error);
          console.error(error);
        });
        this.onLoad(() => __async(this, null, function* () {
          return yield resolved;
        }));
      } else {
        if (!constructorChangedExports || value !== void 0) {
          this.exports = value;
        }
        queueMicrotask(() => super.catchUpLifecycle());
      }
    } catch (error) {
      this._ready.reject(error);
      console.error(error);
    }
  }
  /** Noop - will be called in the constructor instead */
  catchUpLifecycle() {
    return;
  }
};
var proxy$1 = proxyExports(FunctionalController);
var makeAccessorController = (loadAccessor, _options) => (component, options) => proxy(component, loadAccessor, options);
var AccessorController = class extends GenericController {
  constructor(component, _loadAccessor, _options) {
    super(component);
    this._loadAccessor = _loadAccessor;
    this._options = _options;
    this.reactiveUtils = this.component.reactiveUtils;
    this._watchedProperties = /* @__PURE__ */ new Map();
    this._isBinding = {
      value: true
    };
    this.setProvisionalExports(accessorSupport.makeGetterProxy(component, this._watchedProperties, this._isBinding, this.constructor.allowedPropNameMismatches));
    const integrations = component.manager.internals.reactiveUtilsIntegrations;
    integrations.add(this);
    const reactiveUtilsIntegration = Array.from(integrations).find((integration) => integration instanceof ReactiveUtilsIntegration);
    if (reactiveUtilsIntegration) {
      integrations.delete(reactiveUtilsIntegration);
    }
    integrations.add(reactiveUtilsIntegration ?? new ReactiveUtilsIntegration(this.component));
    component.manager.trackPropKey((resolved) => {
      if (resolved) {
        this._instancePropName = resolved;
      }
    }, this.exports);
  }
  hostConnected() {
    this._isBinding.value = false;
  }
  hostLoad() {
    return __async(this, null, function* () {
      const component = this.component;
      if (component.reactiveUtils === void 0) {
        this.reactiveUtils = yield importCoreReactiveUtils();
      } else {
        this.reactiveUtils = yield this.use(component.reactiveUtils);
      }
      const parameters = accessorSupport.gatherParameters(this, this._watchedProperties);
      const finalParameters = this._options?.editConstructorProperties?.call(component, parameters) ?? parameters;
      const awaitedParameters = finalParameters instanceof Promise ? yield finalParameters : finalParameters;
      const genericComponent = component;
      const existingInstance = typeof this._instancePropName === "string" ? genericComponent[this._instancePropName] : void 0;
      const hasInstance = existingInstance != null && existingInstance !== this.exports;
      if (hasInstance) {
        this._instance = existingInstance;
        existingInstance.set(awaitedParameters);
      } else {
        this._instance = yield this._createInstance(awaitedParameters);
      }
      if (component.manager.destroyed) {
        return;
      }
      accessorSupport.watchComponentUpdates(this, this._instance, this._watchedProperties);
      accessorSupport.watchAccessorUpdates(this, this._instance, this._watchedProperties);
      this.exports = this._instance;
    });
  }
  _createInstance(parameters) {
    return __async(this, null, function* () {
      if (this._isAccessorConstructor(this._loadAccessor)) {
        return new this._loadAccessor(parameters);
      } else {
        return yield this._loadAccessor(parameters);
      }
    });
  }
  _isAccessorConstructor(loader) {
    return "prototype" in loader && "declaredClass" in loader.prototype;
  }
  hostDestroy() {
    if (this._instance) {
      this._instance.destroy();
    }
  }
  reCreate() {
    return __async(this, null, function* () {
      this.hostDestroy();
      yield this.hostLoad();
    });
  }
};
var proxy = proxyExports(AccessorController);
var accessorSupport = {
  makeGetterProxy: (component, watchedProperties, isBinding, allowedPropNameMismatches) => new Proxy({}, {
    /*
     * Without this, makeProvisionalValue() will throw on accessing
     * non-existent prop
     */
    has: (target, prop) => typeof prop === "string" || prop in target,
    get: (target, prop) => {
      const value = Reflect.get(target, prop);
      if (typeof prop === "symbol" || prop in Promise.prototype) {
        return value;
      }
      const hasProp = prop in target;
      const doBinding = isBinding?.value ?? true;
      if (hasProp || !doBinding) {
        return value;
      }
      return component.manager.trackKey(component, (resolved) => {
        if (resolved !== void 0) {
          watchedProperties.set(resolved.key, prop);
        }
      }, value);
    }
  }),
  // Update Accessor on component prop change
  watchComponentUpdates(controller, instance, watchedProperties) {
    function getter(_value, propName) {
      const propertyName = watchedProperties.get(propName);
      const value = instance[propertyName];
      const flipBoolean = typeof value === "boolean" && propertyName !== propName && propName.toLowerCase().includes("disable");
      return flipBoolean ? !value : value;
    }
    const setter = (newValue, _oldValue, propName) => {
      const propertyName = watchedProperties.get(propName);
      const value = instance[propertyName];
      const flipBoolean = typeof value === "boolean" && propertyName !== propName && propName.toLowerCase().includes("disable");
      const currentValue = flipBoolean ? !value : value;
      if (currentValue === newValue) {
        return newValue;
      }
      instance[propertyName] = flipBoolean ? !newValue : newValue;
      const finalValue = instance[propertyName];
      return flipBoolean ? !finalValue : finalValue;
    };
    const component = controller.component;
    const internals = component.manager.internals;
    watchedProperties.forEach((_propName, propertyName) => {
      internals.accessorGetter[propertyName] = getter;
      internals.accessorSetter[propertyName] = setter;
    });
  },
  // Update component on Accessor prop change
  watchAccessorUpdates(controller, instance, watchedProperties) {
    const {
      component
    } = controller;
    const genericComponent = component;
    const genericInstance = instance;
    const readonlyProps = findReadOnlyAccessorProps(instance);
    component.manager.bypassGetter(() => (
      // Careful: Map's forEach callback arguments are (value, key), not (key, value)
      watchedProperties.forEach((propertyName, propName) => {
        if (readonlyProps.has(propertyName)) {
          return;
        }
        const domValue = genericComponent[propName];
        const modelValue = genericInstance[propertyName];
        const flipBoolean = typeof domValue === "boolean" && propertyName !== propName && propName.toLowerCase().includes("disable");
        const resolvedDomValue = flipBoolean ? !domValue : domValue;
        if (resolvedDomValue != null && modelValue !== resolvedDomValue) {
          genericInstance[propertyName] = resolvedDomValue;
        }
      })
    ));
    controller.onLifecycle(() => {
      if (instance.destroyed) {
        return;
      }
      return Array.from(watchedProperties, ([propName, propertyName]) => controller.reactiveUtils.watch(() => genericInstance[propertyName], () => {
        const newValue = genericInstance[propertyName];
        const flipBoolean = typeof newValue === "boolean" && propertyName !== propName && propName.toLowerCase().includes("disable");
        const resolvedNewValue = flipBoolean ? !newValue : newValue;
        component.manager.bypassSetter(() => {
          genericComponent[propName] = resolvedNewValue;
        });
      }, {
        initial: true
      }));
    });
  },
  gatherParameters(controller, watchedProperties) {
    const {
      component
    } = controller;
    const data = Object.fromEntries(Array.from(watchedProperties, ([prop, property]) => [property, component[prop]]).filter(([, value]) => value !== void 0));
    return data;
  },
  reEmitAccessorEvents(controller, instance, reactiveUtils, prefix) {
    const isEvented = "on" in instance && typeof instance.on === "function";
    if (!isEvented) {
      return;
    }
    const toListen = Object.entries(controller.component).map(([key, unknown]) => {
      const value = unknown;
      if (!key.startsWith(prefix) || key === prefix || typeof value !== "object" || value === null || !("emit" in value) || typeof value.emit !== "function") {
        return void 0;
      }
      const emit = value.emit;
      const trimmedEventName = key.slice(prefix.length);
      const camelCaseEventName = camelToKebab(trimmedEventName);
      const eventName = camelCaseEventName.toLowerCase();
      return [eventName, emit];
    }).filter(isNotUndefined);
    if (toListen.length === 0) {
      return;
    }
    const eventTarget = instance;
    const getEventTarget = () => eventTarget;
    controller.onLifecycle(() => {
      if (instance.destroyed) {
        return;
      }
      return toListen.map(([eventName, emit]) => reactiveUtils.on(getEventTarget, eventName, emit));
    });
  },
  reCreate(instance, component) {
    return __async(this, null, function* () {
      const accessorController = component.manager.useRefSync(instance);
      if (accessorController === void 0) {
        return;
      }
      yield accessorController.reCreate();
    });
  }
};
function findReadOnlyAccessorProps(instance) {
  const accessor = instance;
  const properties = Object.entries(accessor.__accessor__?.metadata ?? {});
  return new Set(properties.filter(([_property, descriptor]) => descriptor?.readOnly === true).map(([property]) => property));
}
var accessorPromise = Promise.all([importCoreAccessor(), importCoreAccessorSupportDecorators()]);
var ReactiveUtilsIntegration = class extends GenericController {
  hostLoad() {
    return __async(this, null, function* () {
      const [Accessor, {
        subclass,
        property
      }] = yield accessorPromise;
      class AccessorSubclass extends Accessor {
      }
      const getter = (_value, propertyName) => accessor[propertyName];
      function setter(newValue, _oldValue, propertyName) {
        if (accessor !== void 0) {
          accessor[propertyName] = newValue;
        }
        return newValue;
      }
      const component = this.component;
      const internals = component.manager.internals;
      const enabledMembers = [];
      const allMembers = getPropLikeMembers(this.component);
      component.manager.bypassGetter(() => allMembers.forEach((name) => {
        const alreadyIntegrated = internals.accessorSetter[name] !== defaultGetterSetter;
        if (alreadyIntegrated) {
          return;
        }
        enabledMembers.push(name);
        internals.accessorGetter[name] = getter;
        internals.accessorSetter[name] = setter;
        property({
          value: component[name]
        })(AccessorSubclass.prototype, name);
      }));
      this._enabledMembers = enabledMembers;
      if (enabledMembers.length === 0) {
        return;
      }
      const Subclass = subclass(component.el.tagName)(AccessorSubclass);
      const accessor = new Subclass();
      this._instance = accessor;
    });
  }
  controllerRemoved() {
    super.controllerRemoved();
    const internals = this.component.manager.internals;
    this._instance?.destroy();
    this._enabledMembers?.forEach((name) => {
      internals.accessorGetter[name] = defaultGetterSetter;
      internals.accessorSetter[name] = defaultGetterSetter;
    });
  }
};

export {
  useControllerManager,
  proxyExports,
  makeController,
  makeAccessorController,
  AccessorController,
  accessorSupport
};
/*! Bundled license information:

@arcgis/map-components/dist/esm/index-c99fc80c.js:
  (*!
   * All material copyright Esri, All Rights Reserved, unless otherwise specified.
   * See https://js.arcgis.com/4.30/esri/copyright.txt for details.
   * v4.30.7
   *)
*/
//# sourceMappingURL=chunk-ULE6BIEJ.js.map
