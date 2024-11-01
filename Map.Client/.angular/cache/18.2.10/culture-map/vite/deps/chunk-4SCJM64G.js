import {
  _,
  t
} from "./chunk-2ERGO64O.js";
import {
  r2 as r
} from "./chunk-DDYVXG4F.js";
import {
  e,
  o
} from "./chunk-7DA6A5LD.js";
import {
  L
} from "./chunk-DXLOWWK7.js";

// ../../../node_modules/@arcgis/core/views/interactive/keybindings.js
var s = "z";
var a = "r";
var p = {
  redo: a,
  undo: s,
  center: "Alt",
  constraint: "Shift",
  cancel: "Escape",
  delete: ["Backspace", "Delete"],
  complete: "Enter",
  vertexAdd: "f",
  pan: " "
};
var c = {
  toggle: "Control"
};
var f = {
  enterInputMode: "Tab",
  commit: "Enter",
  discard: "Escape",
  next: "Tab"
};
var d = {
  moveUp: {
    key: "ArrowUp",
    modifier: "Shift",
    repeats: true
  },
  moveDown: {
    key: "ArrowDown",
    modifier: "Shift",
    repeats: true
  },
  moveLeft: {
    key: "ArrowLeft",
    modifier: "Shift",
    repeats: true
  },
  moveRight: {
    key: "ArrowRight",
    modifier: "Shift",
    repeats: true
  },
  scaleUp: {
    key: "+",
    modifier: "Shift"
  },
  scaleDown: {
    key: "-",
    modifier: "Shift"
  },
  factorModifier: {
    key: t,
    continuePropagation: true
  },
  toggleOpacity: "t",
  preserveAspectRatio: {
    key: "Shift",
    continuePropagation: true
  },
  rotateIncrements: {
    key: "Shift",
    continuePropagation: true
  },
  undo: s,
  redo: a
};
var h = class {
  constructor() {
    this._bindings = /* @__PURE__ */ new Map();
  }
  add(e2, t2) {
    return this.addToggle(e2, (e3) => {
      "key-down" === e3.type && t2(e3);
    });
  }
  addToggle(i, r2) {
    const n = m.fromDefinition(i, r2), s2 = r(this._bindings, n.key, () => []);
    return s2.push(n), e(() => L(s2, n));
  }
  register(e2, t2 = _.WIDGET) {
    return o([e2.on("key-down", (t3) => this.dispatch(e2.inputManager, t3), t2), e2.on("key-up", (t3) => this.dispatch(e2.inputManager, t3), t2)]);
  }
  dispatch(e2, t2) {
    const i = t2.key, o2 = this._bindings.get(i);
    if (o2) for (const r2 of o2) r2.process(e2, t2);
  }
};
var m = class _m {
  constructor(e2, t2, i, o2, r2) {
    this.key = e2, this.modifiers = t2, this.repeats = i, this.continuePropagation = o2, this.callback = r2;
  }
  process(e2, t2) {
    if (!(t2.key !== this.key || "repeat" in t2 && t2.repeat && !this.repeats)) {
      for (const t3 of this.modifiers) if (!e2.isModifierKeyDown(t3)) return;
      this.continuePropagation || t2.stopPropagation(), this.callback(t2);
    }
  }
  static fromDefinition(e2, t2) {
    if ("string" == typeof e2) return new _m(e2, [], false, false, t2);
    const {
      key: i,
      modifier: o2,
      repeats: r2,
      continuePropagation: n
    } = e2;
    return new _m(i, o2 ? Array.isArray(o2) ? o2 : [o2] : [], !!r2, !!n, t2);
  }
};

export {
  p,
  c,
  f,
  d,
  h
};
//# sourceMappingURL=chunk-4SCJM64G.js.map
