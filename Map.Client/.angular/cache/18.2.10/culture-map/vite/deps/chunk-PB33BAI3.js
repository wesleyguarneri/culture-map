import {
  c,
  h
} from "./chunk-MNLT652N.js";
import {
  L
} from "./chunk-HJY2YILU.js";
import {
  e
} from "./chunk-7DA6A5LD.js";
import {
  s2 as s
} from "./chunk-WYIDUUN2.js";
import {
  __async
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/intl/messages.js
var o = /^([a-z]{2})(?:[-_]([A-Za-z]{2}))?$/;
var i = {
  ar: true,
  bg: true,
  bs: true,
  ca: true,
  cs: true,
  da: true,
  de: true,
  el: true,
  en: true,
  es: true,
  et: true,
  fi: true,
  fr: true,
  he: true,
  hr: true,
  hu: true,
  id: true,
  it: true,
  ja: true,
  ko: true,
  lt: true,
  lv: true,
  nb: true,
  nl: true,
  pl: true,
  "pt-BR": true,
  "pt-PT": true,
  ro: true,
  ru: true,
  sk: true,
  sl: true,
  sr: true,
  sv: true,
  th: true,
  tr: true,
  uk: true,
  vi: true,
  "zh-CN": true,
  "zh-HK": true,
  "zh-TW": true
};
function a(t) {
  return t in i;
}
var c2 = [];
var d = /* @__PURE__ */ new Map();
function l(t) {
  for (const e2 of d.keys()) _(t.pattern, e2) && d.delete(e2);
}
function u(t) {
  return c2.includes(t) || (l(t), c2.unshift(t)), e(() => {
    const e2 = c2.indexOf(t);
    e2 > -1 && (c2.splice(e2, 1), l(t));
  });
}
function h2(t) {
  return __async(this, null, function* () {
    const e2 = c();
    d.has(t) || d.set(t, m(t, e2));
    const n = d.get(t);
    return n && (yield p.add(n)), n;
  });
}
function f(t) {
  if (!o.test(t)) return null;
  const e2 = o.exec(t);
  if (null === e2) return null;
  const [, n, s2] = e2, r = n + (s2 ? "-" + s2.toUpperCase() : "");
  return a(r) ? r : a(n) ? n : null;
}
function m(e2, n) {
  return __async(this, null, function* () {
    const s2 = [];
    for (const t of c2) if (_(t.pattern, e2)) try {
      return yield t.fetchMessageBundle(e2, n);
    } catch (r) {
      s2.push(r);
    }
    if (s2.length) throw new s("intl:message-bundle-error", `Errors occurred while loading "${e2}"`, {
      errors: s2
    });
    throw new s("intl:no-message-bundle-loader", `No loader found for message bundle "${e2}"`);
  });
}
function _(t, e2) {
  return "string" == typeof t ? e2.startsWith(t) : t.test(e2);
}
h(() => {
  d.clear();
});
var p = new class {
  constructor() {
    this._numLoading = 0, this._dfd = null;
  }
  waitForAll() {
    return __async(this, null, function* () {
      this._dfd && (yield this._dfd.promise);
    });
  }
  add(t) {
    return this._increase(), t.then(() => this._decrease(), () => this._decrease()), this.waitForAll();
  }
  _increase() {
    this._numLoading++, this._dfd || (this._dfd = L());
  }
  _decrease() {
    this._numLoading = Math.max(this._numLoading - 1, 0), this._dfd && 0 === this._numLoading && (this._dfd.resolve(), this._dfd = null);
  }
}();

export {
  u,
  h2 as h,
  f
};
//# sourceMappingURL=chunk-PB33BAI3.js.map
