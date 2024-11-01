import {
  n
} from "./chunk-TIVJXVMN.js";
import {
  o
} from "./chunk-WGAPNV7F.js";
import {
  s as s2
} from "./chunk-BXQGM56A.js";
import {
  e as e3
} from "./chunk-4Z5SGKRM.js";
import {
  t4 as t,
  v
} from "./chunk-ANKOCGE2.js";
import {
  y
} from "./chunk-7CJXZOFG.js";
import {
  e as e2
} from "./chunk-5SELS7VU.js";
import {
  T,
  a3 as a2,
  b,
  s
} from "./chunk-DDYVXG4F.js";
import {
  e
} from "./chunk-7DA6A5LD.js";
import {
  a
} from "./chunk-WYIDUUN2.js";
import {
  __yieldStar
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/core/ObservableChangesType.js
var E;
!function(E3) {
  E3[E3.ADD = 1] = "ADD", E3[E3.REMOVE = 2] = "REMOVE", E3[E3.MOVE = 4] = "MOVE";
}(E || (E = {}));

// ../../../node_modules/@arcgis/core/core/Collection.js
var g;
var d = class {
  constructor() {
    this.target = null, this.cancellable = false, this.defaultPrevented = false, this.item = void 0, this.type = void 0;
  }
  preventDefault() {
    this.cancellable && (this.defaultPrevented = true);
  }
  reset(e4) {
    this.defaultPrevented = false, this.item = e4;
  }
};
var p = class {
  constructor(e4, t2, s3, i, r) {
    this.target = e4, this.added = t2, this.removed = s3, this.start = i, this.deleteCount = r;
  }
};
var b2 = new e2(d, void 0, (e4) => {
  e4.item = null, e4.target = null, e4.defaultPrevented = false, e4.cancellable = false;
});
function v2(e4) {
  e4 && "object" == typeof e4 && "destroy" in e4 && "function" == typeof e4.destroy && e4.destroy();
}
function y2(e4) {
  return e4 ? e4 instanceof R ? e4.toArray() : e4.length ? Array.prototype.slice.apply(e4) : [] : [];
}
function E2(e4) {
  if (e4?.length) return e4[0];
}
function A(e4, t2, s3, i) {
  const r = Math.min(e4.length - s3, t2.length - i);
  let n2 = 0;
  for (; n2 < r && e4[s3 + n2] === t2[i + n2]; ) n2++;
  return n2;
}
function C(e4, t2, s3, i) {
  t2 && t2.forEach((t3, r, n2) => {
    e4.push(t3), C(e4, s3.call(i, t3, r, n2), s3, i);
  });
}
var O = /* @__PURE__ */ new Set();
var M = /* @__PURE__ */ new Set();
var D = /* @__PURE__ */ new Set();
var x = /* @__PURE__ */ new Map();
var j = 0;
var R = g = class extends o.EventedAccessor {
  static isCollection(e4) {
    return null != e4 && e4 instanceof g;
  }
  constructor(e4) {
    super(e4), this._chgListeners = [], this._notifications = null, this._updating = false, this._timer = null, this._observable = new s2(), this.length = 0, this._items = [], Object.defineProperty(this, "uid", {
      value: j++
    });
  }
  normalizeCtorArgs(e4) {
    return e4 ? Array.isArray(e4) || e4 instanceof g ? {
      items: e4
    } : e4 : {};
  }
  destroy() {
    this._removeAllRaw(), this._timer && this._timer.remove(), this._emitter.destroy(), this._notifications = null;
  }
  *[Symbol.iterator]() {
    yield* __yieldStar(this.items);
  }
  get items() {
    return s(this._observable), this._items;
  }
  set items(e4) {
    this._emitBeforeChanges(E.ADD) || (this._splice(0, this.length, y2(e4)), this._emitAfterChanges(E.ADD));
  }
  hasEventListener(e4) {
    return !this.destroyed && ("change" === e4 ? this._chgListeners.length > 0 : this._emitter.hasEventListener(e4));
  }
  on(e4, t2) {
    if (this.destroyed) return e();
    if ("change" === e4) {
      const e5 = this._chgListeners, s3 = {
        removed: false,
        callback: t2
      };
      return e5.push(s3), this._notifications && this._notifications.push({
        listeners: e5.slice(),
        items: this._items.slice(),
        changes: []
      }), e(() => {
        s3.removed = true, e5.splice(e5.indexOf(s3), 1);
      });
    }
    return this._emitter.on(e4, t2);
  }
  once(e4, t2) {
    const s3 = "deref" in t2 ? () => t2.deref() : () => t2, i = this.on(e4, (e5) => {
      s3()?.call(null, e5), i.remove();
    });
    return i;
  }
  add(e4, t2) {
    if (s(this._observable), this._emitBeforeChanges(E.ADD)) return this;
    const s3 = this.getNextIndex(t2 ?? null);
    return this._splice(s3, 0, [e4]), this._emitAfterChanges(E.ADD), this;
  }
  addMany(e4, t2 = this._items.length) {
    if (s(this._observable), !e4?.length) return this;
    if (this._emitBeforeChanges(E.ADD)) return this;
    const s3 = this.getNextIndex(t2);
    return this._splice(s3, 0, y2(e4)), this._emitAfterChanges(E.ADD), this;
  }
  at(e4) {
    if (s(this._observable), (e4 = Math.trunc(e4) || 0) < 0 && (e4 += this.length), !(e4 < 0 || e4 >= this.length)) return this._items[e4];
  }
  removeAll() {
    if (s(this._observable), !this.length || this._emitBeforeChanges(E.REMOVE)) return [];
    const e4 = this._removeAllRaw();
    return this._emitAfterChanges(E.REMOVE), e4;
  }
  _removeAllRaw() {
    return 0 === this.length ? [] : this._splice(0, this.length) || [];
  }
  clone() {
    return s(this._observable), this._createNewInstance({
      items: this._items.map(a)
    });
  }
  concat(...e4) {
    s(this._observable);
    const t2 = e4.map(y2);
    return this._createNewInstance({
      items: this._items.concat(...t2)
    });
  }
  drain(e4, t2) {
    if (s(this._observable), !this.length || this._emitBeforeChanges(E.REMOVE)) return;
    const s3 = this._splice(0, this.length), i = s3.length;
    for (let r = 0; r < i; r++) e4.call(t2, s3[r], r, s3);
    this._emitAfterChanges(E.REMOVE);
  }
  destroyAll() {
    this.drain(v2);
  }
  destroyMany(e4) {
    const t2 = this.removeMany(e4);
    return t2.forEach(v2), t2;
  }
  every(e4, t2) {
    return s(this._observable), this._items.every(e4, t2);
  }
  filter(e4, t2) {
    let s3;
    return s(this._observable), s3 = 2 === arguments.length ? this._items.filter(e4, t2) : this._items.filter(e4), this._createNewInstance({
      items: s3
    });
  }
  find(e4, t2) {
    return s(this._observable), this._items.find(e4, t2);
  }
  findIndex(e4, t2) {
    return s(this._observable), this._items.findIndex(e4, t2);
  }
  flatten(e4, t2) {
    s(this._observable);
    const s3 = [];
    return C(s3, this, e4, t2), new g(s3);
  }
  forEach(e4, t2) {
    return s(this._observable), this._items.forEach(e4, t2);
  }
  getItemAt(e4) {
    return s(this._observable), this._items[e4];
  }
  getNextIndex(e4) {
    s(this._observable);
    const t2 = this.length;
    return (e4 = e4 ?? t2) < 0 ? e4 = 0 : e4 > t2 && (e4 = t2), e4;
  }
  includes(e4, t2 = 0) {
    return s(this._observable), this._items.includes(e4, t2);
  }
  indexOf(e4, t2 = 0) {
    return s(this._observable), this._items.indexOf(e4, t2);
  }
  join(e4 = ",") {
    return s(this._observable), this._items.join(e4);
  }
  lastIndexOf(e4, t2 = this.length - 1) {
    return s(this._observable), this._items.lastIndexOf(e4, t2);
  }
  map(e4, t2) {
    s(this._observable);
    const s3 = this._items.map(e4, t2);
    return new g({
      items: s3
    });
  }
  reorder(e4, t2 = this.length - 1) {
    s(this._observable);
    const s3 = this.indexOf(e4);
    if (-1 !== s3) {
      if (t2 < 0 ? t2 = 0 : t2 >= this.length && (t2 = this.length - 1), s3 !== t2) {
        if (this._emitBeforeChanges(E.MOVE)) return e4;
        this._splice(s3, 1), this._splice(t2, 0, [e4]), this._emitAfterChanges(E.MOVE);
      }
      return e4;
    }
  }
  pop() {
    if (s(this._observable), !this.length || this._emitBeforeChanges(E.REMOVE)) return;
    const e4 = E2(this._splice(this.length - 1, 1));
    return this._emitAfterChanges(E.REMOVE), e4;
  }
  push(...e4) {
    return s(this._observable), this._emitBeforeChanges(E.ADD) || (this._splice(this.length, 0, e4), this._emitAfterChanges(E.ADD)), this.length;
  }
  reduce(e4, t2) {
    s(this._observable);
    const s3 = this._items;
    return 2 === arguments.length ? s3.reduce(e4, t2) : s3.reduce(e4);
  }
  reduceRight(e4, t2) {
    s(this._observable);
    const s3 = this._items;
    return 2 === arguments.length ? s3.reduceRight(e4, t2) : s3.reduceRight(e4);
  }
  remove(e4) {
    return s(this._observable), this.removeAt(this.indexOf(e4));
  }
  removeAt(e4) {
    if (s(this._observable), e4 < 0 || e4 >= this.length || this._emitBeforeChanges(E.REMOVE)) return;
    const t2 = E2(this._splice(e4, 1));
    return this._emitAfterChanges(E.REMOVE), t2;
  }
  removeMany(e4) {
    if (s(this._observable), !e4?.length || this._emitBeforeChanges(E.REMOVE)) return [];
    const t2 = e4 instanceof g ? e4.toArray() : e4, s3 = this._items, i = [], r = t2.length;
    for (let n2 = 0; n2 < r; n2++) {
      const e5 = t2[n2], r2 = s3.indexOf(e5);
      if (r2 > -1) {
        const e6 = 1 + A(t2, s3, n2 + 1, r2 + 1), h = this._splice(r2, e6);
        h && h.length > 0 && i.push.apply(i, h), n2 += e6 - 1;
      }
    }
    return this._emitAfterChanges(E.REMOVE), i;
  }
  reverse() {
    if (s(this._observable), this._emitBeforeChanges(E.MOVE)) return this;
    const e4 = this._splice(0, this.length);
    return e4 && (e4.reverse(), this._splice(0, 0, e4)), this._emitAfterChanges(E.MOVE), this;
  }
  shift() {
    if (s(this._observable), !this.length || this._emitBeforeChanges(E.REMOVE)) return;
    const e4 = E2(this._splice(0, 1));
    return this._emitAfterChanges(E.REMOVE), e4;
  }
  slice(e4 = 0, t2 = this.length) {
    return s(this._observable), this._createNewInstance({
      items: this._items.slice(e4, t2)
    });
  }
  some(e4, t2) {
    return s(this._observable), this._items.some(e4, t2);
  }
  sort(e4) {
    if (s(this._observable), !this.length || this._emitBeforeChanges(E.MOVE)) return this;
    const t2 = this._splice(0, this.length);
    return arguments.length ? t2.sort(e4) : t2.sort(), this._splice(0, 0, t2), this._emitAfterChanges(E.MOVE), this;
  }
  splice(e4, t2, ...s3) {
    s(this._observable);
    const i = (t2 ? E.REMOVE : 0) | (s3.length ? E.ADD : 0);
    if (this._emitBeforeChanges(i)) return [];
    const r = this._splice(e4, t2, s3) || [];
    return this._emitAfterChanges(i), r;
  }
  toArray() {
    return s(this._observable), this._items.slice();
  }
  toJSON() {
    return s(this._observable), this.toArray();
  }
  toLocaleString() {
    return s(this._observable), this._items.toLocaleString();
  }
  toString() {
    return s(this._observable), this._items.toString();
  }
  unshift(...e4) {
    return s(this._observable), !e4.length || this._emitBeforeChanges(E.ADD) || (this._splice(0, 0, e4), this._emitAfterChanges(E.ADD)), this.length;
  }
  _createNewInstance(e4) {
    return new this.constructor(e4);
  }
  _splice(e4, t2, s3) {
    const i = this._items, r = this.itemType;
    let n2, h;
    if (!this._notifications && this.hasEventListener("change") && (this._notifications = [{
      listeners: this._chgListeners.slice(),
      items: this._items.slice(),
      changes: []
    }], this._timer && this._timer.remove(), this._updating = true, this._timer = v(() => this._dispatchChange())), e4 < 0 && (e4 += this.length), t2) {
      if (h = i.splice(e4, t2), this.hasEventListener("before-remove")) {
        const t3 = b2.acquire();
        t3.target = this, t3.cancellable = true;
        for (let s4 = 0, r2 = h.length; s4 < r2; s4++) n2 = h[s4], t3.reset(n2), this.emit("before-remove", t3), t3.defaultPrevented && (h.splice(s4, 1), i.splice(e4, 0, n2), e4 += 1, s4 -= 1, r2 -= 1);
        b2.release(t3);
      }
      if (this.length = this._items.length, this.hasEventListener("after-remove")) {
        const e5 = b2.acquire();
        e5.target = this, e5.cancellable = false;
        const t3 = h.length;
        for (let s4 = 0; s4 < t3; s4++) e5.reset(h[s4]), this.emit("after-remove", e5);
        b2.release(e5);
      }
    }
    if (s3?.length) {
      if (r) {
        const e5 = [];
        for (const t4 of s3) {
          const s4 = r.ensureType(t4);
          null == s4 && null != t4 || e5.push(s4);
        }
        s3 = e5;
      }
      const t3 = this.hasEventListener("before-add"), n3 = this.hasEventListener("after-add"), h2 = e4 === this.length;
      if (t3 || n3) {
        const r2 = b2.acquire();
        r2.target = this, r2.cancellable = true;
        const o2 = b2.acquire();
        o2.target = this, o2.cancellable = false;
        for (const l of s3) t3 ? (r2.reset(l), this.emit("before-add", r2), r2.defaultPrevented || (h2 ? i.push(l) : i.splice(e4++, 0, l), this._set("length", i.length), n3 && (o2.reset(l), this.emit("after-add", o2)))) : (h2 ? i.push(l) : i.splice(e4++, 0, l), this._set("length", i.length), o2.reset(l), this.emit("after-add", o2));
        b2.release(o2), b2.release(r2);
      } else {
        if (h2) for (const e5 of s3) i.push(e5);
        else i.splice(e4, 0, ...s3);
        this._set("length", i.length);
      }
    }
    if ((s3?.length || h?.length) && this._notifyChangeEvent(s3, h), this.hasEventListener("after-splice")) {
      const i2 = new p(this, s3, h, e4, t2);
      this.emit("after-splice", i2);
    }
    return h;
  }
  _emitBeforeChanges(e4) {
    let t2 = false;
    if (this.hasEventListener("before-changes")) {
      const s3 = b2.acquire();
      s3.target = this, s3.cancellable = true, s3.type = e4, this.emit("before-changes", s3), t2 = s3.defaultPrevented, b2.release(s3);
    }
    return t2;
  }
  _emitAfterChanges(e4) {
    if (this.hasEventListener("after-changes")) {
      const t2 = b2.acquire();
      t2.target = this, t2.cancellable = false, t2.type = e4, this.emit("after-changes", t2), b2.release(t2);
    }
    this._observable.notify();
  }
  _notifyChangeEvent(e4, t2) {
    this.hasEventListener("change") && this._notifications && this._notifications[this._notifications.length - 1].changes.push({
      added: e4,
      removed: t2
    });
  }
  get updating() {
    return this._updating;
  }
  _dispatchChange() {
    if (this._timer && (this._timer.remove(), this._timer = null), this._updating = false, !this._notifications) return;
    const e4 = this._notifications;
    this._notifications = null;
    for (const s3 of e4) {
      const e5 = s3.changes;
      O.clear(), M.clear(), D.clear();
      for (const {
        added: t2,
        removed: s4
      } of e5) {
        if (t2) if (0 === D.size && 0 === M.size) for (const e6 of t2) O.add(e6);
        else for (const e6 of t2) M.has(e6) ? (D.add(e6), M.delete(e6)) : D.has(e6) || O.add(e6);
        if (s4) if (0 === D.size && 0 === O.size) for (const e6 of s4) M.add(e6);
        else for (const e6 of s4) O.has(e6) ? O.delete(e6) : (D.delete(e6), M.add(e6));
      }
      const i = t.acquire();
      O.forEach((e6) => {
        i.push(e6);
      });
      const r = t.acquire();
      M.forEach((e6) => {
        r.push(e6);
      });
      const n2 = this._items, h = s3.items, o2 = t.acquire();
      if (D.forEach((e6) => {
        h.indexOf(e6) !== n2.indexOf(e6) && o2.push(e6);
      }), s3.listeners && (i.length || r.length || o2.length)) {
        const e6 = {
          target: this,
          added: i,
          removed: r,
          moved: o2
        }, t2 = s3.listeners.length;
        for (let i2 = 0; i2 < t2; i2++) {
          const t3 = s3.listeners[i2];
          t3.removed || t3.callback.call(this, e6);
        }
      }
      t.release(i), t.release(r), t.release(o2);
    }
    O.clear(), M.clear(), D.clear();
  }
};
R.ofType = (t2) => {
  if (!t2) return g;
  if (x.has(t2)) return x.get(t2);
  let s3 = null;
  if ("function" == typeof t2) s3 = t2.prototype.declaredClass;
  else if (t2.base) s3 = t2.base.prototype.declaredClass;
  else for (const e4 in t2.typeMap) {
    const i2 = t2.typeMap[e4].prototype.declaredClass;
    s3 ? s3 += ` | ${i2}` : s3 = i2;
  }
  let i = class extends g {
  };
  return e3([n({
    Type: t2,
    ensureType: "function" == typeof t2 ? b(t2) : T(t2)
  })], i.prototype, "itemType", void 0), i = e3([a2(`esri.core.Collection<${s3}>`)], i), x.set(t2, i), i;
}, e3([y()], R.prototype, "_updating", void 0), e3([y()], R.prototype, "length", void 0), e3([y()], R.prototype, "items", null), e3([y({
  readOnly: true
})], R.prototype, "updating", null), R = g = e3([a2("esri.core.Collection")], R);
var V = R;

export {
  E,
  V
};
//# sourceMappingURL=chunk-EITGQLII.js.map
