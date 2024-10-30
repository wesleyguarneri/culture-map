import {
  o
} from "./chunk-RP2GKJCD.js";
import {
  r
} from "./chunk-DM4WHMQY.js";
import {
  s
} from "./chunk-HOH445RO.js";
import {
  e
} from "./chunk-4Z5SGKRM.js";
import {
  S
} from "./chunk-ANKOCGE2.js";
import {
  y
} from "./chunk-7CJXZOFG.js";
import {
  a3 as a
} from "./chunk-DDYVXG4F.js";
import {
  n2 as n
} from "./chunk-WYIDUUN2.js";
import {
  has
} from "./chunk-DXLOWWK7.js";

// ../../../node_modules/@arcgis/core/views/input/keys.js
var t = has("mac") ? "Meta" : "Control";
var o2 = /* @__PURE__ */ new Set(["Alt", "Control", "Meta", "Shift", "Ctrl", "Primary"]);
var r2 = (t3) => o2.has(t3);

// ../../../node_modules/@arcgis/core/views/input/EventMatch.js
var e2 = class {
  constructor(e3, t3 = []) {
    this.eventType = e3, this.keyModifiers = t3;
  }
  matches(e3) {
    if (e3.type !== this.eventType) return false;
    if (0 === this.keyModifiers.length) return true;
    const t3 = e3.modifiers;
    for (const i3 of this.keyModifiers) if (!t3.has(i3)) return false;
    return true;
  }
};

// ../../../node_modules/@arcgis/core/views/input/InputHandler.js
var t2 = class {
  constructor(e3) {
    this._manager = null, this._incoming = {}, this._outgoing = {}, this._incomingEventMatches = null, this._incomingEventTypes = null, this._outgoingEventTypes = null, this._hasSideEffects = e3;
  }
  get incomingEventMatches() {
    if (!this._incomingEventMatches) {
      this._incomingEventMatches = [];
      for (const e3 in this._incoming) {
        const t3 = this._incoming[e3];
        for (const e4 of t3) this._incomingEventMatches.push(e4.match);
      }
    }
    return this._incomingEventMatches;
  }
  get incomingEventTypes() {
    return this._incomingEventTypes || (this._incomingEventTypes = this.incomingEventMatches.map((e3) => e3.eventType)), this._incomingEventTypes;
  }
  get outgoingEventTypes() {
    return this._outgoingEventTypes || (this._outgoingEventTypes = Object.keys(this._outgoing)), this._outgoingEventTypes;
  }
  get hasSideEffects() {
    return this._hasSideEffects;
  }
  get hasPendingInputs() {
    return false;
  }
  onInstall(e3) {
    this._manager || (e3.setEventCallback((e4) => this._handleEvent(e4)), e3.setUninstallCallback(() => this._onUninstall()), this._manager = e3);
  }
  onUninstall() {
  }
  registerIncoming(t3, i3, s3) {
    let o3;
    "function" == typeof i3 ? (s3 = i3, o3 = []) : o3 = i3 || [];
    const a2 = "string" == typeof t3 ? new e2(t3, o3) : t3, h = () => {
      this._incomingEventTypes = null, this._incomingEventMatches = null;
    }, r3 = (e3) => {
      const t4 = this._incoming[e3.match.eventType];
      if (t4) {
        const n3 = t4.indexOf(e3);
        t4.splice(n3, 1), h(), this._manager && this._manager.updateDependencies();
      }
    }, g2 = new n2(a2, s3, {
      onPause: r3,
      onRemove: r3,
      onResume: (e3) => {
        const t4 = this._incoming[e3.match.eventType];
        t4 && !t4.includes(e3) && (t4.push(e3), h(), this._manager && this._manager.updateDependencies());
      }
    });
    let c2 = this._incoming[a2.eventType];
    return c2 || (c2 = [], this._incoming[a2.eventType] = c2), c2.push(g2), h(), this._manager && this._manager.updateDependencies(), g2;
  }
  registerOutgoing(e3) {
    if (this._outgoing[e3]) throw new Error("There is already a callback registered for this outgoing InputEvent: " + e3);
    const t3 = new i(e3, {
      onEmit: (e4, t4, n3, i3) => {
        this._manager?.emit(e4.eventType, t4, n3, i3);
      },
      onRemove: (e4) => {
        delete this._outgoing[e4.eventType], this._manager?.updateDependencies();
      }
    });
    return this._outgoing[e3] = t3, this._outgoingEventTypes = null, this._manager && this._manager.updateDependencies(), t3;
  }
  startCapturingPointer(e3) {
    this._manager?.setPointerCapture(e3, true);
  }
  stopCapturingPointer(e3) {
    this._manager?.setPointerCapture(e3, false);
  }
  refreshHasPendingInputs() {
    this._manager?.refreshHasPendingInputs();
  }
  _onUninstall() {
    this._manager && (this.onUninstall(), this._manager = null);
  }
  _handleEvent(e3) {
    const t3 = this._incoming[e3.type];
    if (t3) {
      for (const n3 of t3) if (n3.match.matches(e3) && (n3.callback?.(e3), e3.shouldStopPropagation())) break;
    }
  }
};
var n2 = class {
  constructor(e3, t3, n3) {
    this.match = e3, this._callback = t3, this._handler = n3;
  }
  pause() {
    this._handler.onPause(this);
  }
  resume() {
    this._handler.onResume(this);
  }
  remove() {
    this._handler.onRemove(this);
  }
  get callback() {
    return this._callback;
  }
};
var i = class {
  constructor(e3, t3) {
    this.eventType = e3, this._removed = false, this._handler = t3;
  }
  emit(e3, t3, n3) {
    this._removed || this._handler.onEmit(this, e3, t3, n3);
  }
  remove() {
    this._removed = true, this._handler.onRemove(this);
  }
};

// ../../../node_modules/@arcgis/core/views/input/handlers/LatestPointer.js
var s2 = class extends t2 {
  constructor(t3) {
    super(true), this._onChange = t3, this._value = "mouse", this._x = null, this._y = null, this.registerIncoming("pointer-move", (t4) => {
      this._update(t4.data);
    });
  }
  _update(t3) {
    const s3 = "touch" === t3.native.pointerType ? "touch" : "mouse", {
      x: e3,
      y: i3
    } = t3;
    s3 === this._value && this._x === e3 && this._y === i3 || (this._value = s3, this._x = e3, this._y = i3, this._onChange(s3, e3, i3));
  }
};

// ../../../node_modules/@arcgis/core/views/input/handlers/MultiTouch.js
var i2 = class extends t2 {
  get multiTouchActive() {
    return this._multiTouchActive.value;
  }
  constructor() {
    super(true), this._activeTouchPointerIds = /* @__PURE__ */ new Set(), this._multiTouchActive = r(false), this._onPointerAdd = ({
      data: t3
    }) => {
      "touch" === t3.pointerType && (this._activeTouchPointerIds.add(t3.native.pointerId), this._update());
    }, this._onPointerRemove = ({
      data: t3
    }) => {
      "touch" === t3.pointerType && (this._activeTouchPointerIds.delete(t3.native.pointerId), this._update());
    }, this.registerIncoming("pointer-down", this._onPointerAdd), this.registerIncoming("pointer-up", this._onPointerRemove), this.registerIncoming("pointer-capture-lost", this._onPointerRemove), this.registerIncoming("pointer-cancel", this._onPointerRemove);
  }
  _update() {
    this._multiTouchActive.value = this._activeTouchPointerIds.size > 1;
  }
};

// ../../../node_modules/@arcgis/core/views/input/InputManager.js
var d = class extends S {
  constructor(e3) {
    super(e3), this._pointerCaptures = /* @__PURE__ */ new Map(), this._nameToGroup = {}, this._handlers = [], this._handlersPriority = [], this._currentPropagation = null, this._updateDependenciesAfterPropagation = false, this._sourceEvents = /* @__PURE__ */ new Set(), this._keyModifiers = /* @__PURE__ */ new Set(), this._activeKeyModifiers = /* @__PURE__ */ new Set(), this._stoppedPropagationEventIds = /* @__PURE__ */ new Set(), this.primaryKey = t, this._latestPointerType = "mouse", this._propertiesPool = new o({
      latestPointerLocation: P
    }, this), this.latestPointerLocation = null, this._paused = false, this.test = {
      timestamp: void 0,
      hasCurrentPropagation: () => !!this._currentPropagation
    };
  }
  initialize() {
    this.eventSource.onEventReceived = this._onEventReceived.bind(this), this._installRecognizers();
  }
  destroy() {
    const e3 = Object.keys(this._nameToGroup);
    for (const t3 of e3) this.uninstallHandlers(t3);
    this.eventSource.destroy(), this._currentPropagation = null, this._propertiesPool.destroy();
  }
  get hasPendingInputs() {
    return this._handlers.some((e3) => e3.handler.hasPendingInputs);
  }
  get latestPointerType() {
    return this._latestPointerType;
  }
  get multiTouchActive() {
    return this._multiTouchHandler.multiTouchActive;
  }
  get updating() {
    return this.hasPendingInputs || this._paused;
  }
  installHandlers(e3, t3, i3 = _.INTERNAL) {
    if (this._nameToGroup[e3]) return;
    if (0 === t3.length) return;
    const r3 = {
      name: e3,
      handlers: t3.map((e4) => ({
        handler: e4,
        active: true,
        removed: false,
        priorityIndex: 0,
        groupPriority: i3,
        eventCallback: null,
        uninstallCallback: null
      }))
    };
    this._nameToGroup[e3] = r3;
    for (let n3 = r3.handlers.length - 1; n3 >= 0; n3--) {
      const e4 = r3.handlers[n3];
      this._handlers.push(e4), e4.handler.onInstall({
        updateDependencies: () => {
          this.updateDependencies();
        },
        emit: (t4, i4, r4, n4, s3) => {
          this._emitInputEvent(e4.priorityIndex + 1, t4, i4, r4, s3, n4);
        },
        setPointerCapture: (t4, i4) => {
          this._setPointerCapture(r3, e4, t4, i4);
        },
        setEventCallback: (t4) => {
          e4.eventCallback = t4;
        },
        setUninstallCallback: (t4) => {
          e4.uninstallCallback = t4;
        },
        refreshHasPendingInputs: () => {
          this.notifyChange("hasPendingInputs");
        }
      });
    }
    this.updateDependencies();
  }
  uninstallHandlers(e3) {
    const t3 = this._nameToGroup[e3];
    t3 ? (t3.handlers.forEach((e4) => {
      e4.removed = true, e4.uninstallCallback?.();
    }), delete this._nameToGroup[e3], this._currentPropagation ? this._currentPropagation.needsHandlerGarbageCollect = true : this._garbageCollectRemovedHandlers()) : n.getLogger(this).error("There is no InputHandler group registered under the name `" + e3 + "`");
  }
  hasHandlers(e3) {
    return void 0 !== this._nameToGroup[e3];
  }
  isModifierKeyDown(e3) {
    return this._activeKeyModifiers && this._activeKeyModifiers.has(e3);
  }
  updateDependencies() {
    if (this._currentPropagation) return void (this._updateDependenciesAfterPropagation = true);
    this._updateDependenciesAfterPropagation = false;
    const e3 = /* @__PURE__ */ new Set(), t3 = /* @__PURE__ */ new Set();
    this._handlersPriority = [];
    for (let i3 = this._handlers.length - 1; i3 >= 0; i3--) {
      const e4 = this._handlers[i3];
      e4.priorityIndex = i3, this._handlersPriority.push(e4);
    }
    this._handlersPriority = this._sortHandlersPriority(this._handlersPriority);
    for (let i3 = this._handlersPriority.length - 1; i3 >= 0; i3--) {
      const r3 = this._handlersPriority[i3];
      r3.priorityIndex = i3;
      let n3 = r3.handler.hasSideEffects;
      if (!n3) {
        for (const t4 of r3.handler.outgoingEventTypes) if (e3.has(t4)) {
          n3 = true;
          break;
        }
      }
      if (n3) for (const i4 of r3.handler.incomingEventMatches) {
        e3.add(i4.eventType);
        for (const e4 of i4.keyModifiers) r2(e4) || t3.add(e4);
      }
      r3.active = n3;
    }
    this._sourceEvents = e3, this._keyModifiers = t3, this._pointerCaptures.size > 0 && this._sourceEvents.add("pointer-capture-lost"), this._keyModifiers.size > 0 && (this._sourceEvents.add("key-down"), this._sourceEvents.add("key-up")), this.eventSource && (this.eventSource.activeEvents = this._sourceEvents);
  }
  _setLatestPointer(e3, t3, i3) {
    this._latestPointerType = e3;
    const r3 = this._get("latestPointerLocation");
    if (null == r3 || r3.x !== t3 || r3.y !== i3) {
      const e4 = this._propertiesPool.get("latestPointerLocation");
      e4.x = t3, e4.y = i3, this._set("latestPointerLocation", e4);
    }
  }
  _onEventReceived(e3, t3) {
    if ("pointer-capture-lost" === e3) {
      const e4 = t3;
      this._pointerCaptures.delete(e4.native.pointerId);
    }
    this._updateKeyModifiers(e3, t3);
    const i3 = null != this.test.timestamp ? this.test.timestamp : t3.native ? t3.native.timestamp : void 0, r3 = t3.native ? t3.native.cancelable : void 0;
    this._emitInputEventFromSource(e3, t3, i3, r3);
  }
  _updateKeyModifiers(e3, t3) {
    if (!t3) return;
    let i3 = false;
    const r3 = () => {
      if (!i3) {
        const e4 = /* @__PURE__ */ new Set();
        this._activeKeyModifiers.forEach((t4) => {
          e4.add(t4);
        }), this._activeKeyModifiers = e4, i3 = true;
      }
    }, n3 = (e4, t4) => {
      t4 && !this._activeKeyModifiers.has(e4) ? (r3(), this._activeKeyModifiers.add(e4)) : !t4 && this._activeKeyModifiers.has(e4) && (r3(), this._activeKeyModifiers.delete(e4));
    };
    if ("key-down" === e3 || "key-up" === e3) {
      const i4 = t3.key;
      this._keyModifiers.has(i4) && n3(i4, "key-down" === e3);
    }
    const s3 = t3.native;
    n3("Alt", !(!s3 || !s3.altKey)), n3("Control", !(!s3 || !s3.ctrlKey)), n3("Ctrl", !(!s3 || !s3.ctrlKey)), n3("Shift", !(!s3 || !s3.shiftKey)), n3("Meta", !(!s3 || !s3.metaKey)), n3("Primary", this._activeKeyModifiers.has(this.primaryKey));
  }
  _installRecognizers() {
    this._latestPointerHandler = new s2((e3, t3, i3) => this._setLatestPointer(e3, t3, i3)), this._multiTouchHandler = new i2(), this.installHandlers("input-manager-logic", [this._latestPointerHandler, this._multiTouchHandler], _.ALWAYS), this.recognizers.length > 0 && this.installHandlers("default", this.recognizers, _.INTERNAL);
  }
  _setPointerCapture(e3, t3, i3, r3) {
    const n3 = e3.name + "-" + t3.priorityIndex, s3 = this._pointerCaptures.get(i3.pointerId) || /* @__PURE__ */ new Set();
    this._pointerCaptures.set(i3.pointerId, s3), r3 ? (s3.add(n3), 1 === s3.size && this.eventSource && this.eventSource.setPointerCapture(i3, true)) : s3.has(n3) && (s3.delete(n3), 0 === s3.size && (this._pointerCaptures.delete(i3.pointerId), this.eventSource && this.eventSource.setPointerCapture(i3, false)));
  }
  _garbageCollectRemovedHandlers() {
    this._handlers = this._handlers.filter((e3) => !e3.removed), this.updateDependencies();
  }
  _emitInputEventFromSource(e3, t3, i3, r3) {
    this._emitInputEvent(0, e3, t3, i3, r3);
  }
  _emitInputEvent(e3, t3, i3, r3, n3, s3) {
    const o3 = void 0 !== r3 ? r3 : this._currentPropagation ? this._currentPropagation.timestamp : performance.now(), a2 = void 0 !== n3 && n3, h = {
      event: new u(t3, i3, o3, s3 || this._activeKeyModifiers, a2),
      priorityIndex: e3
    };
    this._currentPropagation ? this._currentPropagation.events.push(h) : this._doNewPropagation(h);
  }
  _doNewPropagation(e3) {
    this._currentPropagation = {
      events: new s(),
      currentHandler: null,
      needsHandlerGarbageCollect: false,
      timestamp: e3.event.timestamp
    }, this._currentPropagation.events.push(e3), this._continuePropagation();
  }
  _continuePropagation() {
    this._paused = false;
    const e3 = this._currentPropagation;
    if (e3) {
      for (; e3.events.length > 0; ) {
        const {
          event: t3,
          priorityIndex: i3
        } = e3.events.pop(), r3 = t3.data?.eventId;
        if (!(null != r3 && this._stoppedPropagationEventIds.has(r3))) for (e3.currentHandler = this._handlersPriority[i3]; e3.currentHandler; ) {
          if (e3.currentHandler.removed) e3.needsHandlerGarbageCollect = true;
          else {
            if (e3.currentHandler.active && !t3.shouldStopPropagation() && e3.currentHandler.eventCallback?.(t3), t3.shouldStopPropagation()) {
              null != r3 && this._stoppedPropagationEventIds.add(r3);
              break;
            }
            if (t3.shouldPausePropagation(() => this._continuePropagation())) return void this._pausePropagation({
              event: t3,
              priorityIndex: e3.currentHandler.priorityIndex + 1
            });
          }
          e3.currentHandler = this._handlersPriority[e3.currentHandler.priorityIndex + 1];
        }
      }
      e3.needsHandlerGarbageCollect && this._garbageCollectRemovedHandlers(), this.hasPendingInputs || this._stoppedPropagationEventIds.clear(), this._currentPropagation = null, this._updateDependenciesAfterPropagation && this.updateDependencies();
    }
  }
  _pausePropagation(e3) {
    const t3 = new s();
    t3.push(e3);
    const i3 = this._currentPropagation;
    if (i3) {
      for (; i3.events.length; ) t3.push(i3.events.pop());
      i3.events = t3, i3.currentHandler = null, this._paused = true;
    }
  }
  _compareHandlerPriority(e3, t3) {
    if (e3.handler.hasSideEffects !== t3.handler.hasSideEffects) return e3.handler.hasSideEffects ? 1 : -1;
    if (e3.groupPriority !== t3.groupPriority) return e3.groupPriority > t3.groupPriority ? -1 : 1;
    for (const i3 of e3.handler.incomingEventMatches) for (const e4 of t3.handler.incomingEventMatches) {
      if (i3.eventType !== e4.eventType) continue;
      const t4 = i3.keyModifiers.filter((t5) => e4.keyModifiers.includes(t5));
      if (t4.length === i3.keyModifiers.length !== (t4.length === e4.keyModifiers.length)) return i3.keyModifiers.length > e4.keyModifiers.length ? -1 : 1;
    }
    return e3.priorityIndex > t3.priorityIndex ? -1 : 1;
  }
  _sortHandlersPriority(e3) {
    const t3 = [];
    for (const i3 of e3) {
      let e4 = 0;
      for (; e4 < t3.length && this._compareHandlerPriority(i3, t3[e4]) >= 0; ) e4++;
      t3.splice(e4, 0, i3);
    }
    return t3;
  }
  get debug() {
    const e3 = (e4) => {
      const t3 = this._setPointerCapture;
      this._setPointerCapture = () => {
      }, e4(), this._setPointerCapture = t3;
    };
    return {
      injectEvent: (t3, i3) => {
        e3(() => {
          this._onEventReceived(t3, i3);
        });
      },
      disablePointerCapture: e3
    };
  }
};
e([y({
  readOnly: true
})], d.prototype, "hasPendingInputs", null), e([y({
  constructOnly: true
})], d.prototype, "eventSource", void 0), e([y({
  constructOnly: true
})], d.prototype, "recognizers", void 0), e([y()], d.prototype, "_latestPointerType", void 0), e([y()], d.prototype, "latestPointerType", null), e([y()], d.prototype, "multiTouchActive", null), e([y({
  readOnly: true
})], d.prototype, "latestPointerLocation", void 0), e([y()], d.prototype, "_paused", void 0), e([y({
  readOnly: true
})], d.prototype, "updating", null), d = e([a("esri.views.input.InputManager")], d);
var u = class {
  constructor(e3, t3, i3, r3, n3) {
    this.type = e3, this.data = t3, this.timestamp = i3, this.modifiers = r3, this.cancelable = n3, this._propagationState = c.NONE, this._resumeCallback = null;
  }
  stopPropagation() {
    this._propagationState |= c.STOPPED;
  }
  shouldStopPropagation() {
    return !!(this._propagationState & c.STOPPED);
  }
  async(e3) {
    this._propagationState |= c.PAUSED;
    const t3 = (e4, t4) => {
      this._propagationState &= ~c.PAUSED;
      const i3 = this._resumeCallback;
      if (this._resumeCallback = null, i3 && i3(), t4) throw e4;
      return e4;
    };
    return ("function" == typeof e3 ? e3() : e3).then((e4) => t3(e4, false), (e4) => t3(e4, true));
  }
  shouldPausePropagation(e3) {
    return !!(this._propagationState & c.PAUSED) && (this._resumeCallback = e3, true);
  }
  preventDefault() {
    this.data.native.preventDefault();
  }
};
var c;
!function(e3) {
  e3[e3.NONE = 0] = "NONE", e3[e3.STOPPED = 1] = "STOPPED", e3[e3.PAUSED = 2] = "PAUSED";
}(c || (c = {}));
var _ = {
  ALWAYS: 1,
  DEFAULT: 0,
  TOOL: -1,
  WIDGET: -2,
  INTERNAL: -3
};
var g = class {
};
var P = g;

export {
  t,
  t2,
  d,
  _
};
//# sourceMappingURL=chunk-2ERGO64O.js.map
