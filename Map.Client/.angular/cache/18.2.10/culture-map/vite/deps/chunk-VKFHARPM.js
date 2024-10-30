import {
  _,
  t2 as t
} from "./chunk-2ERGO64O.js";
import {
  c
} from "./chunk-7ZJ6P7J7.js";
import {
  M
} from "./chunk-3ZXOUEQG.js";
import {
  e
} from "./chunk-7DA6A5LD.js";

// ../../../node_modules/@arcgis/core/views/input/ViewEvents.js
var r = ["click", "double-click", "immediate-click", "immediate-double-click", "hold", "drag", "key-down", "key-up", "pointer-down", "pointer-move", "pointer-up", "pointer-drag", "mouse-wheel", "pointer-enter", "pointer-leave", "gamepad", "focus", "blur"];
var o = {};
function s(t3) {
  return !!o[t3];
}
function p(t3) {
  for (const e2 of t3) if (!s(e2)) return false;
  return true;
}
r.forEach((t3) => {
  o[t3] = true;
});
var c2 = class {
  constructor(t3) {
    this._handlers = /* @__PURE__ */ new Map(), this._counter = 0, this._handlerCounts = /* @__PURE__ */ new Map(), this.view = t3, this.inputManager = null;
  }
  connect(t3) {
    t3 && this.disconnect(), this.inputManager = t3, this._handlers.forEach(({
      handler: t4,
      priority: e2
    }, n) => this.inputManager?.installHandlers(n, [t4], e2));
  }
  disconnect() {
    this.inputManager && this._handlers.forEach((t3, e2) => this.inputManager?.uninstallHandlers(e2)), this.inputManager = null;
  }
  destroy() {
    this.disconnect(), this._handlers.clear(), this.view = null;
  }
  on(e2, n, a, r2) {
    const o2 = Array.isArray(e2) ? e2 : e2.split(",");
    if (!p(o2)) return o2.some(s) && console.error("Error: registering input events and other events on the view at the same time is not supported."), null;
    let c3, u2;
    Array.isArray(n) ? u2 = n : (c3 = n, u2 = []), "function" == typeof a ? c3 = a : r2 = a, r2 = null != r2 ? r2 : _.DEFAULT;
    const m2 = this._createUniqueGroupName(), d2 = new l(this.view, o2, u2, c3);
    this._handlers.set(m2, {
      handler: d2,
      priority: r2
    });
    for (const t3 of o2) {
      const e3 = this._handlerCounts.get(t3) || 0;
      this._handlerCounts.set(t3, e3 + 1);
    }
    return this.inputManager && this.inputManager.installHandlers(m2, [d2], r2), e(() => this._removeHandler(m2, o2));
  }
  hasHandler(t3) {
    return !!this._handlerCounts.get(t3);
  }
  _removeHandler(t3, e2) {
    if (this._handlers.has(t3)) {
      this._handlers.delete(t3);
      for (const t4 of e2) {
        const e3 = this._handlerCounts.get(t4);
        void 0 === e3 || (1 === e3 ? this._handlerCounts.delete(t4) : this._handlerCounts.set(t4, e3 - 1));
      }
    }
    this.inputManager && this.inputManager.uninstallHandlers(t3);
  }
  _createUniqueGroupName() {
    return this._counter += 1, `viewEvents_${this._counter}`;
  }
};
var l = class extends t {
  constructor(t3, e2, n, a) {
    super(true), this._latestDragStart = void 0, this.view = t3;
    for (const i of e2) switch (i) {
      case "click":
        this.registerIncoming("click", n, (e3) => a(d(t3, e3)));
        break;
      case "double-click":
        this.registerIncoming("double-click", n, (e3) => a(g(t3, e3)));
        break;
      case "immediate-click":
        this.registerIncoming("immediate-click", n, (e3) => a(y(t3, e3)));
        break;
      case "immediate-double-click":
        this.registerIncoming("immediate-double-click", n, (e3) => a(v(t3, e3)));
        break;
      case "hold":
        this.registerIncoming("hold", n, (e3) => a(h(t3, e3)));
        break;
      case "drag":
        this.registerIncoming("drag", n, (t4) => {
          const e3 = this._wrapDrag(t4);
          e3 && a(e3);
        });
        break;
      case "key-down":
        this.registerIncoming("key-down", n, (t4) => a(f(t4)));
        break;
      case "key-up":
        this.registerIncoming("key-up", n, (t4) => a(k(t4)));
        break;
      case "pointer-down":
        this.registerIncoming("pointer-down", n, (t4) => a(I(t4, "pointer-down")));
        break;
      case "pointer-move":
        this.registerIncoming("pointer-move", n, (t4) => a(I(t4, "pointer-move")));
        break;
      case "pointer-up":
        this.registerIncoming("pointer-up", n, (t4) => a(I(t4, "pointer-up")));
        break;
      case "pointer-drag":
        this.registerIncoming("pointer-drag", n, (t4) => a(D(t4)));
        break;
      case "mouse-wheel":
        this.registerIncoming("mouse-wheel", n, (t4) => a(P(t4)));
        break;
      case "pointer-enter":
        this.registerIncoming("pointer-enter", n, (t4) => a(I(t4, "pointer-enter")));
        break;
      case "pointer-leave":
        this.registerIncoming("pointer-leave", n, (t4) => a(I(t4, "pointer-leave")));
        break;
      case "gamepad":
        this.registerIncoming("gamepad", n, (t4) => {
          a(_2(t4));
        });
        break;
      case "focus":
        this.registerIncoming("focus", n, (t4) => {
          a(u(t4));
        });
        break;
      case "blur":
        this.registerIncoming("blur", n, (t4) => {
          a(m(t4));
        });
    }
  }
  _wrapDrag(t3) {
    const n = t3.data, {
      x: a,
      y: i
    } = n.center, {
      action: r2,
      pointerType: o2,
      button: s2
    } = n;
    if ("start" === r2 && (this._latestDragStart = n), !this._latestDragStart) return;
    const p2 = n.pointer.native, c3 = n.buttons, {
      cancelable: l2,
      timestamp: u2
    } = t3, m2 = {
      x: this._latestDragStart.center.x,
      y: this._latestDragStart.center.y
    };
    return "end" === r2 && (this._latestDragStart = void 0), {
      type: "drag",
      action: r2,
      x: a,
      y: i,
      origin: m2,
      pointerType: o2,
      button: s2,
      buttons: c3,
      radius: n.radius,
      angle: M(n.angle),
      native: p2,
      timestamp: u2,
      cancelable: l2,
      stopPropagation: () => t3.stopPropagation(),
      async: (e2) => t3.async(e2),
      preventDefault: () => t3.preventDefault()
    };
  }
};
function u(t3) {
  return {
    type: "focus",
    timestamp: t3.timestamp,
    native: t3.data.native,
    cancelable: t3.cancelable,
    stopPropagation: () => t3.stopPropagation(),
    async: (e2) => t3.async(e2),
    preventDefault: () => t3.preventDefault()
  };
}
function m(t3) {
  return {
    type: "blur",
    timestamp: t3.timestamp,
    native: t3.data.native,
    cancelable: t3.cancelable,
    stopPropagation: () => t3.stopPropagation(),
    async: (e2) => t3.async(e2),
    preventDefault: () => t3.preventDefault()
  };
}
function d(t3, e2) {
  const {
    pointerType: a,
    button: i,
    buttons: r2,
    x: o2,
    y: s2,
    native: p2,
    eventId: c3
  } = e2.data, {
    cancelable: l2,
    timestamp: u2
  } = e2;
  return {
    type: "click",
    pointerType: a,
    button: i,
    buttons: r2,
    x: o2,
    y: s2,
    native: p2,
    timestamp: u2,
    screenPoint: c(o2, s2),
    mapPoint: b(t3, o2, s2),
    eventId: c3,
    cancelable: l2,
    stopPropagation: () => e2.stopPropagation(),
    async: (t4) => e2.async(t4),
    preventDefault: () => e2.preventDefault()
  };
}
function g(t3, e2) {
  const {
    pointerType: n,
    button: a,
    buttons: i,
    x: r2,
    y: o2,
    native: s2,
    eventId: p2
  } = e2.data, {
    cancelable: c3,
    timestamp: l2
  } = e2;
  return {
    type: "double-click",
    pointerType: n,
    button: a,
    buttons: i,
    x: r2,
    y: o2,
    native: s2,
    timestamp: l2,
    mapPoint: b(t3, r2, o2),
    eventId: p2,
    cancelable: c3,
    stopPropagation: () => e2.stopPropagation(),
    async: (t4) => e2.async(t4),
    preventDefault: () => e2.preventDefault()
  };
}
function y(t3, e2) {
  const {
    pointerType: n,
    button: a,
    buttons: i,
    x: r2,
    y: o2,
    native: s2,
    eventId: p2
  } = e2.data, c3 = s2.pointerId, {
    cancelable: l2,
    timestamp: u2
  } = e2;
  return {
    type: "immediate-click",
    pointerId: c3,
    pointerType: n,
    button: a,
    buttons: i,
    x: r2,
    y: o2,
    native: s2,
    timestamp: u2,
    mapPoint: b(t3, r2, o2),
    eventId: p2,
    cancelable: l2,
    stopPropagation: () => e2.stopPropagation(),
    async: (t4) => e2.async(t4),
    preventDefault: () => e2.preventDefault()
  };
}
function v(t3, e2) {
  const {
    pointerType: n,
    button: a,
    buttons: i,
    x: r2,
    y: o2,
    native: s2,
    eventId: p2
  } = e2.data, c3 = s2.pointerId, {
    cancelable: l2,
    timestamp: u2
  } = e2;
  return {
    type: "immediate-double-click",
    pointerId: c3,
    pointerType: n,
    button: a,
    buttons: i,
    x: r2,
    y: o2,
    native: s2,
    timestamp: u2,
    mapPoint: b(t3, r2, o2),
    eventId: p2,
    cancelable: l2,
    stopPropagation: () => e2.stopPropagation(),
    async: (t4) => e2.async(t4),
    preventDefault: () => e2.preventDefault()
  };
}
function h(t3, e2) {
  const {
    pointerType: n,
    button: a,
    buttons: i,
    x: r2,
    y: o2,
    native: s2
  } = e2.data, {
    cancelable: p2,
    timestamp: c3
  } = e2;
  return {
    type: "hold",
    pointerType: n,
    button: a,
    buttons: i,
    x: r2,
    y: o2,
    native: s2,
    timestamp: c3,
    mapPoint: b(t3, r2, o2),
    cancelable: p2,
    stopPropagation: () => e2.stopPropagation(),
    async: (t4) => e2.async(t4),
    preventDefault: () => e2.preventDefault()
  };
}
function b(t3, e2, a) {
  return t3.toMap(c(e2, a), {
    exclude: []
  });
}
function f(t3) {
  const {
    key: e2,
    repeat: n,
    native: a
  } = t3.data, {
    cancelable: i,
    timestamp: r2
  } = t3;
  return {
    type: "key-down",
    key: e2,
    repeat: n,
    native: a,
    timestamp: r2,
    cancelable: i,
    stopPropagation: () => t3.stopPropagation(),
    async: (e3) => t3.async(e3),
    preventDefault: () => t3.preventDefault()
  };
}
function k(t3) {
  const {
    key: e2,
    native: n
  } = t3.data, {
    cancelable: a,
    timestamp: i
  } = t3;
  return {
    type: "key-up",
    key: e2,
    native: n,
    timestamp: i,
    cancelable: a,
    stopPropagation: () => t3.stopPropagation(),
    async: (e3) => t3.async(e3),
    preventDefault: () => t3.preventDefault()
  };
}
function I(t3, e2) {
  const {
    x: n,
    y: a,
    button: i,
    buttons: r2,
    native: o2,
    eventId: s2
  } = t3.data, p2 = o2.pointerId, c3 = o2.pointerType, {
    cancelable: l2,
    timestamp: u2
  } = t3;
  return {
    type: e2,
    x: n,
    y: a,
    pointerId: p2,
    pointerType: c3,
    button: i,
    buttons: r2,
    native: o2,
    timestamp: u2,
    eventId: s2,
    cancelable: l2,
    stopPropagation: () => t3.stopPropagation(),
    async: (e3) => t3.async(e3),
    preventDefault: () => t3.preventDefault()
  };
}
function D(t3) {
  const {
    x: e2,
    y: n,
    buttons: a,
    native: i,
    eventId: r2
  } = t3.data.currentEvent, {
    button: o2
  } = t3.data.startEvent, s2 = t3.data.startEvent.native.pointerId, p2 = t3.data.startEvent.native.pointerType, c3 = t3.data.action, l2 = {
    x: t3.data.startEvent.x,
    y: t3.data.startEvent.y
  }, {
    cancelable: u2,
    timestamp: m2
  } = t3;
  return {
    type: "pointer-drag",
    x: e2,
    y: n,
    pointerId: s2,
    pointerType: p2,
    button: o2,
    buttons: a,
    action: c3,
    origin: l2,
    native: i,
    timestamp: m2,
    eventId: r2,
    cancelable: u2,
    stopPropagation: () => t3.stopPropagation(),
    async: (e3) => t3.async(e3),
    preventDefault: () => t3.preventDefault()
  };
}
function P(t3) {
  const {
    cancelable: e2,
    data: n,
    timestamp: a
  } = t3, {
    x: i,
    y: r2,
    deltaY: o2,
    native: s2
  } = n;
  return {
    type: "mouse-wheel",
    x: i,
    y: r2,
    deltaY: o2,
    native: s2,
    timestamp: a,
    cancelable: e2,
    stopPropagation: () => t3.stopPropagation(),
    async: (e3) => t3.async(e3),
    preventDefault: () => t3.preventDefault()
  };
}
function _2(t3) {
  const {
    action: e2,
    state: n,
    device: a
  } = t3.data, {
    cancelable: i,
    timestamp: r2
  } = t3, {
    buttons: o2,
    axes: s2
  } = n;
  return {
    type: "gamepad",
    device: a,
    timestamp: r2,
    action: e2,
    buttons: o2,
    axes: s2,
    cancelable: i,
    stopPropagation: () => t3.stopPropagation(),
    async: (e3) => t3.async(e3),
    preventDefault: () => t3.preventDefault()
  };
}

export {
  r,
  c2 as c
};
//# sourceMappingURL=chunk-VKFHARPM.js.map
