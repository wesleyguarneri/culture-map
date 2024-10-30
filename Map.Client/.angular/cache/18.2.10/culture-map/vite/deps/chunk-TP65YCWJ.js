import {
  u
} from "./chunk-5PDI5QQ5.js";
import {
  s
} from "./chunk-HTPP6S7Z.js";
import {
  $,
  $e,
  Be,
  Ct,
  D,
  Dt,
  Et,
  F,
  G,
  Ge,
  Gt,
  I,
  J,
  Je,
  K,
  N,
  Oe,
  Ot,
  Pt,
  Qe,
  S,
  St,
  T,
  Te,
  Tt,
  U,
  Ve,
  W,
  X,
  Y,
  Yt,
  Z,
  Ze,
  _,
  _e,
  _t,
  at,
  b,
  bt,
  c as c2,
  d,
  dt,
  e,
  et,
  f,
  g,
  ge,
  h,
  he,
  i,
  it,
  jt,
  k,
  ke,
  kt,
  lt,
  m,
  nt,
  pt,
  q,
  qe,
  r,
  ri,
  rt,
  si,
  te,
  tt,
  w,
  wt,
  x,
  xt,
  y,
  yt,
  z,
  ze,
  zt
} from "./chunk-42T5PSN4.js";
import {
  c
} from "./chunk-MNLT652N.js";
import {
  __async
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/chunks/chartUtilsAm5.js
var ke2 = class {
  constructor() {
    Object.defineProperty(this, "_observer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    }), Object.defineProperty(this, "_targets", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    }), this._observer = new ResizeObserver((e2) => {
      w(e2, (e3) => {
        w(this._targets, (t) => {
          t.target === e3.target && t.callback();
        });
      });
    });
  }
  addTarget(e2, t) {
    this._observer.observe(e2, {
      box: "border-box"
    }), this._targets.push({
      target: e2,
      callback: t
    });
  }
  removeTarget(e2) {
    this._observer.unobserve(e2), I(this._targets, (t) => t.target !== e2);
  }
};
var Me = class _Me {
  constructor() {
    Object.defineProperty(this, "_timer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: null
    }), Object.defineProperty(this, "_targets", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
  }
  addTarget(e2, i2) {
    if (null === this._timer) {
      let e3 = null;
      const i3 = () => {
        const r3 = Date.now();
        (null === e3 || r3 > e3 + _Me.delay) && (e3 = r3, w(this._targets, (e4) => {
          let t = e4.target.getBoundingClientRect();
          t.width === e4.size.width && t.height === e4.size.height || (e4.size = t, e4.callback());
        })), 0 === this._targets.length ? this._timer = null : this._timer = requestAnimationFrame(i3);
      };
      this._timer = requestAnimationFrame(i3);
    }
    let r2 = {
      width: 0,
      height: 0,
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      x: 0,
      y: 0
    };
    this._targets.push({
      target: e2,
      callback: i2,
      size: r2
    });
  }
  removeTarget(e2) {
    I(this._targets, (t) => t.target !== e2), 0 === this._targets.length && null !== this._timer && (cancelAnimationFrame(this._timer), this._timer = null);
  }
};
Object.defineProperty(Me, "delay", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: 200
});
var Se = null;
function je() {
  return null === Se && (Se = "undefined" != typeof ResizeObserver ? new ke2() : new Me()), Se;
}
var Ee = class {
  constructor(t, i2) {
    Object.defineProperty(this, "_sensor", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    }), Object.defineProperty(this, "_element", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    }), Object.defineProperty(this, "_listener", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    }), Object.defineProperty(this, "_disposed", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    }), this._sensor = je(), this._element = t, this._listener = J(i2), this._sensor.addTarget(t, i2);
  }
  isDisposed() {
    return this._disposed;
  }
  dispose() {
    this._disposed || (this._disposed = true, this._sensor.removeTarget(this._element), this._listener.dispose());
  }
  get sensor() {
    return this._sensor;
  }
};
var Te2 = class extends Be {
};
Object.defineProperty(Te2, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "InterfaceColors"
}), Object.defineProperty(Te2, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Be.classNames.concat([Te2.className])
});
var Be2 = class extends Be {
  _setDefaults() {
    this._setDefault("negativeBase", 0), this._setDefault("numberFormat", "#,###.#####"), this._setDefault("smallNumberThreshold", 1);
    const e2 = "_big_number_suffix_", t = "_small_number_suffix_", i2 = "_byte_suffix_";
    this._setDefault("bigNumberPrefixes", [{
      number: 1e3,
      suffix: this._t(e2 + "3")
    }, {
      number: 1e6,
      suffix: this._t(e2 + "6")
    }, {
      number: 1e9,
      suffix: this._t(e2 + "9")
    }, {
      number: 1e12,
      suffix: this._t(e2 + "12")
    }, {
      number: 1e15,
      suffix: this._t(e2 + "15")
    }, {
      number: 1e18,
      suffix: this._t(e2 + "18")
    }, {
      number: 1e21,
      suffix: this._t(e2 + "21")
    }, {
      number: 1e24,
      suffix: this._t(e2 + "24")
    }]), this._setDefault("smallNumberPrefixes", [{
      number: 1e-24,
      suffix: this._t(t + "24")
    }, {
      number: 1e-21,
      suffix: this._t(t + "21")
    }, {
      number: 1e-18,
      suffix: this._t(t + "18")
    }, {
      number: 1e-15,
      suffix: this._t(t + "15")
    }, {
      number: 1e-12,
      suffix: this._t(t + "12")
    }, {
      number: 1e-9,
      suffix: this._t(t + "9")
    }, {
      number: 1e-6,
      suffix: this._t(t + "6")
    }, {
      number: 1e-3,
      suffix: this._t(t + "3")
    }]), this._setDefault("bytePrefixes", [{
      number: 1,
      suffix: this._t(i2 + "B")
    }, {
      number: 1024,
      suffix: this._t(i2 + "KB")
    }, {
      number: 1048576,
      suffix: this._t(i2 + "MB")
    }, {
      number: 1073741824,
      suffix: this._t(i2 + "GB")
    }, {
      number: 1099511627776,
      suffix: this._t(i2 + "TB")
    }, {
      number: 1125899906842624,
      suffix: this._t(i2 + "PB")
    }]), super._setDefaults();
  }
  _beforeChanged() {
    super._beforeChanged();
  }
  format(e2, t, i2) {
    let r2;
    (null == t || c2(t) && "number" === t.toLowerCase()) && (t = this.get("numberFormat", ""));
    let h2 = Number(e2);
    if (_(t)) try {
      return this.get("intlLocales") ? new Intl.NumberFormat(this.get("intlLocales"), t).format(h2) : new Intl.NumberFormat(void 0, t).format(h2);
    } catch (u2) {
      return "Invalid";
    }
    else {
      t = yt(t);
      let e3, s2 = this.parseFormat(t, this._root.language);
      e3 = h2 > this.get("negativeBase") ? s2.positive : h2 < this.get("negativeBase") ? s2.negative : s2.zero, null == i2 || e3.mod || (e3 = F(e3), e3.decimals.active = 0 == h2 ? 0 : i2), r2 = e3.template.split(m).join(this.applyFormat(h2, e3));
    }
    return true === this.get("forceLTR") && (r2 = "‎" + r2), r2;
  }
  parseFormat(e2, t) {
    const i2 = t.translateEmpty("_thousandSeparator"), r2 = t.translateEmpty("_decimalSeparator");
    let s2 = {
      positive: {
        thousands: {
          active: -1,
          passive: -1,
          interval: -1,
          separator: i2
        },
        decimals: {
          active: -1,
          passive: -1,
          separator: r2
        },
        template: "",
        source: "",
        parsed: false
      },
      negative: {
        thousands: {
          active: -1,
          passive: -1,
          interval: -1,
          separator: i2
        },
        decimals: {
          active: -1,
          passive: -1,
          separator: r2
        },
        template: "",
        source: "",
        parsed: false
      },
      zero: {
        thousands: {
          active: -1,
          passive: -1,
          interval: -1,
          separator: i2
        },
        decimals: {
          active: -1,
          passive: -1,
          separator: r2
        },
        template: "",
        source: "",
        parsed: false
      }
    }, a = (e2 = e2.replace("||", f)).split("|");
    return s2.positive.source = a[0], void 0 === a[2] ? s2.zero = s2.positive : s2.zero.source = a[2], void 0 === a[1] ? s2.negative = s2.positive : s2.negative.source = a[1], W(s2, (e3, t2) => {
      if (t2.parsed) return;
      let i3 = t2.source;
      "number" === i3.toLowerCase() && (i3 = this.get("numberFormat", "#,###.#####"));
      let r3 = qe.chunk(i3, true);
      for (let s3 = 0; s3 < r3.length; s3++) {
        let e4 = r3[s3];
        if (e4.text = e4.text.replace(f, "|"), "value" === e4.type) {
          let i4 = e4.text.match(/[#0.,]+[ ]?[abespABESP%!]?[abespABESP‰!]?/);
          if (i4) if (null === i4 || "" === i4[0]) t2.template += e4.text;
          else {
            let r4 = i4[0].match(/[abespABESP%‰!]{2}|[abespABESP%‰]{1}$/);
            r4 && (t2.mod = r4[0].toLowerCase(), t2.modSpacing = !!i4[0].match(/[ ]{1}[abespABESP%‰!]{1}$/));
            let s4 = i4[0].split(".");
            if ("" === s4[0]) ;
            else {
              t2.thousands.active = (s4[0].match(/0/g) || []).length, t2.thousands.passive = (s4[0].match(/\#/g) || []).length + t2.thousands.active;
              let e5 = s4[0].split(",");
              1 === e5.length || (t2.thousands.interval = (e5.pop() || "").length, 0 === t2.thousands.interval && (t2.thousands.interval = -1));
            }
            void 0 === s4[1] || (t2.decimals.active = (s4[1].match(/0/g) || []).length, t2.decimals.passive = (s4[1].match(/\#/g) || []).length + t2.decimals.active), t2.template += e4.text.split(i4[0]).join(m);
          }
        } else t2.template += e4.text;
      }
      t2.parsed = true;
    }), s2;
  }
  applyFormat(e2, t) {
    let i2 = e2 < 0;
    e2 = Math.abs(e2);
    let r2 = "", s2 = "", a = t.mod ? t.mod.split("") : [];
    if (-1 !== a.indexOf("b")) {
      let i3 = this.applyPrefix(e2, this.get("bytePrefixes"), -1 !== a.indexOf("!"));
      e2 = i3[0], r2 = i3[1], s2 = i3[2], t.modSpacing && (s2 = " " + s2);
    } else if (-1 !== a.indexOf("a")) {
      let i3 = this.applyPrefix(e2, e2 < this.get("smallNumberThreshold") ? this.get("smallNumberPrefixes") : this.get("bigNumberPrefixes"), -1 !== a.indexOf("!"));
      e2 = i3[0], r2 = i3[1], s2 = i3[2], t.modSpacing && (s2 = " " + s2);
    } else if (-1 !== a.indexOf("p")) {
      let t2 = Math.min(e2.toString().length + 2, 21);
      e2 = parseFloat(e2.toPrecision(t2)), r2 = this._root.language.translate("_percentPrefix"), s2 = this._root.language.translate("_percentSuffix"), "" == r2 && "" == s2 && (s2 = "%");
    } else if (-1 !== a.indexOf("%")) {
      let t2 = Math.min(e2.toString().length + 2, 21);
      e2 *= 100, e2 = parseFloat(e2.toPrecision(t2)), s2 = "%";
    } else if (-1 !== a.indexOf("‰")) {
      let t2 = Math.min(e2.toString().length + 3, 21);
      e2 *= 1e3, e2 = parseFloat(e2.toPrecision(t2)), s2 = "‰";
    }
    if (-1 !== a.indexOf("e")) {
      let i3;
      i3 = t.decimals.passive >= 0 ? e2.toExponential(t.decimals.passive).split("e") : e2.toExponential().split("e"), e2 = Number(i3[0]), s2 = "e" + i3[1], t.modSpacing && (s2 = " " + s2);
    } else if (0 === t.decimals.passive) e2 = Math.round(e2);
    else if (t.decimals.passive > 0) {
      let i3 = Math.pow(10, t.decimals.passive);
      e2 = Math.round(e2 * i3) / i3;
    }
    let n = "", o = d(e2).split("."), l = o[0];
    if (l.length < t.thousands.active && (l = Array(t.thousands.active - l.length + 1).join("0") + l), t.thousands.interval > 0) {
      let e3 = [], i3 = l.split("").reverse().join("");
      for (let r3 = 0, s3 = l.length; r3 <= s3; r3 += t.thousands.interval) {
        let s4 = i3.substr(r3, t.thousands.interval).split("").reverse().join("");
        "" !== s4 && e3.unshift(s4);
      }
      l = e3.join(t.thousands.separator);
    }
    n += l, 1 === o.length && o.push("");
    let h2 = o[1];
    return h2.length < t.decimals.active && (h2 += Array(t.decimals.active - h2.length + 1).join("0")), "" !== h2 && (n += t.decimals.separator + h2), "" === n && (n = "0"), 0 !== e2 && i2 && -1 === a.indexOf("s") && (n = "-" + n), r2 && (n = r2 + n), s2 && (n += s2), n;
  }
  applyPrefix(e2, t, i2 = false) {
    let r2 = e2, s2 = "", a = "", n = false, o = 1;
    for (let l = 0, h2 = t.length; l < h2; l++) t[l].number <= e2 && (0 === t[l].number ? r2 = 0 : (r2 = e2 / t[l].number, o = t[l].number), s2 = t[l].prefix, a = t[l].suffix, n = true);
    return !n && i2 && t.length && 0 != e2 && (r2 = e2 / t[0].number, s2 = t[0].prefix, a = t[0].suffix, n = true), n && (r2 = parseFloat(r2.toPrecision(Math.min(o.toString().length + Math.floor(r2).toString().replace(/[^0-9]*/g, "").length, 21)))), [r2, s2, a];
  }
  escape(e2) {
    return e2.replace("||", f);
  }
  unescape(e2) {
    return e2.replace(f, "|");
  }
};
function Ce(e2, t) {
  let i2 = 0, r2 = 0, s2 = 1, a = 0, n = 0, o = 0, l = 0, h2 = 0;
  return e2.formatToParts(t).forEach((e3) => {
    switch (e3.type) {
      case "year":
        i2 = +e3.value;
        break;
      case "month":
        r2 = +e3.value - 1;
        break;
      case "day":
        s2 = +e3.value;
        break;
      case "hour":
        a = +e3.value;
        break;
      case "minute":
        n = +e3.value;
        break;
      case "second":
        o = +e3.value;
        break;
      case "fractionalSecond":
        l = +e3.value;
        break;
      case "weekday":
        switch (e3.value) {
          case "Sun":
            h2 = 0;
            break;
          case "Mon":
            h2 = 1;
            break;
          case "Tue":
            h2 = 2;
            break;
          case "Wed":
            h2 = 3;
            break;
          case "Thu":
            h2 = 4;
            break;
          case "Fri":
            h2 = 5;
            break;
          case "Sat":
            h2 = 6;
        }
    }
  }), 24 === a && (a = 0), {
    year: i2,
    month: r2,
    day: s2,
    hour: a,
    minute: n,
    second: o,
    millisecond: l,
    weekday: h2
  };
}
function De(e2, t) {
  const {
    year: i2,
    month: r2,
    day: s2,
    hour: a,
    minute: n,
    second: o,
    millisecond: l
  } = Ce(e2, t);
  return Date.UTC(i2, r2, s2, a, n, o, l);
}
var Ae = class {
  constructor(e2, t) {
    if (Object.defineProperty(this, "_utc", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    }), Object.defineProperty(this, "_dtf", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    }), Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    }), !t) throw new Error("You cannot use `new Class()`, instead use `Class.new()`");
    this.name = e2, this._utc = new Intl.DateTimeFormat("UTC", {
      hour12: false,
      timeZone: "UTC",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      weekday: "short",
      fractionalSecondDigits: 3
    }), this._dtf = new Intl.DateTimeFormat("UTC", {
      hour12: false,
      timeZone: e2,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      weekday: "short",
      fractionalSecondDigits: 3
    });
  }
  static new(e2) {
    return new this(e2, true);
  }
  convertLocal(e2) {
    const t = this.offsetUTC(e2), i2 = e2.getTimezoneOffset(), r2 = new Date(e2);
    r2.setUTCMinutes(r2.getUTCMinutes() - (t - i2));
    const s2 = r2.getTimezoneOffset();
    return i2 != s2 && r2.setUTCMinutes(r2.getUTCMinutes() + s2 - i2), r2;
  }
  offsetUTC(e2) {
    return (De(this._utc, e2) - De(this._dtf, e2)) / 6e4;
  }
  parseDate(e2) {
    return Ce(this._dtf, e2);
  }
};
var Le = class extends Be {
  _setDefaults() {
    this._setDefault("capitalize", true), this._setDefault("dateFormat", "yyyy-MM-dd"), super._setDefaults();
  }
  _beforeChanged() {
    super._beforeChanged();
  }
  format(e2, t, i2 = false) {
    let r2;
    void 0 !== t && "" !== t || (t = this.get("dateFormat", "yyyy-MM-dd"));
    let s2 = e2;
    if (_(t)) try {
      const e3 = this.get("intlLocales");
      return e3 ? new Intl.DateTimeFormat(e3, t).format(s2) : new Intl.DateTimeFormat(void 0, t).format(s2);
    } catch (l) {
      return "Invalid";
    }
    let n = this.parseFormat(t);
    const o = this._root.timezone;
    return !o || this._root.utc || i2 || (s2 = o.convertLocal(s2)), g(s2.getTime()) ? (r2 = this.applyFormat(s2, n, i2), this.get("capitalize") && (r2 = r2.replace(/^.{1}/, r2.substr(0, 1).toUpperCase())), r2) : "Invalid date";
  }
  applyFormat(e2, t, i2 = false) {
    let r2, s2, a, n, o, h2, u2, c3, d2 = t.template, b2 = e2.getTime();
    this._root.utc && !i2 ? (r2 = e2.getUTCFullYear(), s2 = e2.getUTCMonth(), a = e2.getUTCDay(), n = e2.getUTCDate(), o = e2.getUTCHours(), h2 = e2.getUTCMinutes(), u2 = e2.getUTCSeconds(), c3 = e2.getUTCMilliseconds()) : (r2 = e2.getFullYear(), s2 = e2.getMonth(), a = e2.getDay(), n = e2.getDate(), o = e2.getHours(), h2 = e2.getMinutes(), u2 = e2.getSeconds(), c3 = e2.getMilliseconds());
    for (let x2 = 0, P = t.parts.length; x2 < P; x2++) {
      let i3 = "";
      switch (t.parts[x2]) {
        case "G":
          i3 = this._t(r2 < 0 ? "_era_bc" : "_era_ad");
          break;
        case "yyyy":
          i3 = Math.abs(r2).toString(), r2 < 0 && (i3 += this._t("_era_bc"));
          break;
        case "yyy":
        case "yy":
        case "y":
          i3 = Math.abs(r2).toString().substr(-t.parts[x2].length), r2 < 0 && (i3 += this._t("_era_bc"));
          break;
        case "YYYY":
        case "YYY":
        case "YY":
        case "Y":
          let l = Ot(e2, this._root.utc);
          i3 = "YYYY" == t.parts[x2] ? Math.abs(l).toString() : Math.abs(l).toString().substr(-t.parts[x2].length), l < 0 && (i3 += this._t("_era_bc"));
          break;
        case "u":
        case "F":
        case "g":
          break;
        case "q":
          i3 = "" + Math.ceil((e2.getMonth() + 1) / 3);
          break;
        case "MMMMM":
          i3 = this._t(this._getMonth(s2)).substr(0, 1);
          break;
        case "MMMM":
          i3 = this._t(this._getMonth(s2));
          break;
        case "MMM":
          i3 = this._t(this._getShortMonth(s2));
          break;
        case "MM":
          i3 = _t(s2 + 1, 2, "0");
          break;
        case "M":
          i3 = (s2 + 1).toString();
          break;
        case "ww":
          i3 = _t(kt(e2, this._root.utc), 2, "0");
          break;
        case "w":
          i3 = kt(e2, this._root.utc).toString();
          break;
        case "W":
          i3 = Tt(e2, this._root.utc).toString();
          break;
        case "dd":
          i3 = _t(n, 2, "0");
          break;
        case "d":
          i3 = n.toString();
          break;
        case "DD":
        case "DDD":
          i3 = _t(xt(e2, this._root.utc).toString(), t.parts[x2].length, "0");
          break;
        case "D":
          i3 = xt(e2, this._root.utc).toString();
          break;
        case "t":
          i3 = this._root.language.translateFunc("_dateOrd").call(this, n);
          break;
        case "E":
          i3 = (a || 7).toString();
          break;
        case "EE":
          i3 = _t((a || 7).toString(), 2, "0");
          break;
        case "EEE":
        case "eee":
          i3 = this._t(this._getShortWeekday(a));
          break;
        case "EEEE":
        case "eeee":
          i3 = this._t(this._getWeekday(a));
          break;
        case "EEEEE":
        case "eeeee":
          i3 = this._t(this._getShortWeekday(a)).substr(0, 1);
          break;
        case "e":
        case "ee":
          i3 = (a - (this._root.locale.firstDayOfWeek || 1) + 1).toString(), "ee" == t.parts[x2] && (i3 = _t(i3, 2, "0"));
          break;
        case "a":
          i3 = o >= 12 ? this._t("PM") : this._t("AM");
          break;
        case "aa":
          i3 = o >= 12 ? this._t("P.M.") : this._t("A.M.");
          break;
        case "aaa":
          i3 = o >= 12 ? this._t("P") : this._t("A");
          break;
        case "h":
          i3 = jt(o).toString();
          break;
        case "hh":
          i3 = _t(jt(o), 2, "0");
          break;
        case "H":
          i3 = o.toString();
          break;
        case "HH":
          i3 = _t(o, 2, "0");
          break;
        case "K":
          i3 = jt(o, 0).toString();
          break;
        case "KK":
          i3 = _t(jt(o, 0), 2, "0");
          break;
        case "k":
          i3 = (o + 1).toString();
          break;
        case "kk":
          i3 = _t(o + 1, 2, "0");
          break;
        case "m":
          i3 = h2.toString();
          break;
        case "mm":
          i3 = _t(h2, 2, "0");
          break;
        case "s":
          i3 = u2.toString();
          break;
        case "ss":
          i3 = _t(u2, 2, "0");
          break;
        case "S":
        case "SS":
        case "SSS":
          i3 = Math.round(c3 / 1e3 * Math.pow(10, t.parts[x2].length)).toString();
          break;
        case "x":
          i3 = b2.toString();
          break;
        case "n":
        case "nn":
        case "nnn":
          i3 = _t(c3, t.parts[x2].length, "0");
          break;
        case "z":
          i3 = Et(e2, false, false, this._root.utc, this._root.timezone ? this._root.timezone.name : void 0).replace(/[+-]+[0-9]+$/, "");
          break;
        case "zz":
          i3 = Et(e2, true, false, this._root.utc, this._root.timezone ? this._root.timezone.name : void 0);
          break;
        case "zzz":
          i3 = Et(e2, false, true, this._root.utc, this._root.timezone ? this._root.timezone.name : void 0).replace(/[+-]+[0-9]+$/, "");
          break;
        case "zzzz":
          i3 = Et(e2, true, true, this._root.utc, this._root.timezone ? this._root.timezone.name : void 0);
          break;
        case "Z":
        case "ZZ":
          let d3 = this._root.utc ? "UTC" : this._root.timezone;
          d3 instanceof Ae && (d3 = d3.name);
          const P2 = d3 ? Ct(d3) : e2.getTimezoneOffset();
          let O = Math.abs(P2) / 60, k2 = Math.floor(O), M = 60 * O - 60 * k2;
          this._root.utc && (k2 = 0, M = 0), "Z" == t.parts[x2] ? (i3 = "GMT", i3 += P2 > 0 ? "-" : "+", i3 += _t(k2, 2) + ":" + _t(M, 2)) : (i3 = P2 > 0 ? "-" : "+", i3 += _t(k2, 2) + _t(M, 2));
          break;
        case "i":
          i3 = e2.toISOString();
          break;
        case "I":
          i3 = e2.toUTCString();
      }
      d2 = d2.replace(m, i3);
    }
    return d2;
  }
  parseFormat(e2) {
    let t = {
      template: "",
      parts: []
    }, i2 = qe.chunk(e2, true);
    for (let r2 = 0; r2 < i2.length; r2++) {
      let e3 = i2[r2];
      if ("value" === e3.type) {
        if (e3.text.match(/^date$/i)) {
          let t2 = this.get("dateFormat", "yyyy-MM-dd");
          c2(t2) || (t2 = "yyyy-MM-dd"), e3.text = t2;
        }
        let i3 = e3.text.match(/G|yyyy|yyy|yy|y|YYYY|YYY|YY|Y|u|q|MMMMM|MMMM|MMM|MM|M|ww|w|W|dd|d|DDD|DD|D|F|g|EEEEE|EEEE|EEE|EE|E|eeeee|eeee|eee|ee|e|aaa|aa|a|hh|h|HH|H|KK|K|kk|k|mm|m|ss|s|SSS|SS|S|A|zzzz|zzz|zz|z|ZZ|Z|t|x|nnn|nn|n|i|I/g);
        if (i3) for (let r3 = 0; r3 < i3.length; r3++) t.parts.push(i3[r3]), e3.text = e3.text.replace(i3[r3], m);
      }
      t.template += e3.text;
    }
    return t;
  }
  _months() {
    return ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  }
  _getMonth(e2) {
    return this._months()[e2];
  }
  _shortMonths() {
    return ["Jan", "Feb", "Mar", "Apr", "May(short)", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  }
  _getShortMonth(e2) {
    return this._shortMonths()[e2];
  }
  _weekdays() {
    return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  }
  _getWeekday(e2) {
    return this._weekdays()[e2];
  }
  _shortWeekdays() {
    return ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  }
  _getShortWeekday(e2) {
    return this._shortWeekdays()[e2];
  }
  parse(e2, t) {
    if (e2 instanceof Date) return e2;
    if (g(e2)) return new Date(e2);
    if ("x" == t) return new Date(parseInt(e2));
    let i2;
    c2(e2) || (e2 = e2.toString());
    let r2 = "";
    t = (t = yt(t)).substr(0, e2.length);
    let a = this.parseFormat(t), o = {
      year: -1,
      year3: -1,
      year2: -1,
      year1: -1,
      month: -1,
      monthShort: -1,
      monthLong: -1,
      weekdayShort: -1,
      weekdayLong: -1,
      day: -1,
      yearDay: -1,
      week: -1,
      hourBase0: -1,
      hour12Base0: -1,
      hourBase1: -1,
      hour12Base1: -1,
      minute: -1,
      second: -1,
      millisecond: -1,
      millisecondDigits: -1,
      am: -1,
      zone: -1,
      timestamp: -1,
      iso: -1
    }, l = {
      year: 1970,
      month: 0,
      day: 1,
      hour: 0,
      minute: 0,
      second: 0,
      millisecond: 0,
      timestamp: null,
      offset: 0,
      utc: this._root.utc
    }, h2 = 0, u2 = 0;
    for (let s2 = 0; s2 < a.parts.length; s2++) {
      switch (u2 = s2 + h2 + 1, a.parts[s2]) {
        case "yyyy":
        case "YYYY":
          r2 += "([0-9]{4})", o.year = u2;
          break;
        case "yyy":
        case "YYY":
          r2 += "([0-9]{3})", o.year3 = u2;
          break;
        case "yy":
        case "YY":
          r2 += "([0-9]{2})", o.year2 = u2;
          break;
        case "y":
        case "Y":
          r2 += "([0-9]{1})", o.year1 = u2;
          break;
        case "MMMM":
          r2 += "(" + this.getStringList(this._months()).join("|") + ")", o.monthLong = u2;
          break;
        case "MMM":
          r2 += "(" + this.getStringList(this._shortMonths()).join("|") + ")", o.monthShort = u2;
          break;
        case "MM":
        case "M":
          r2 += "([0-9]{2}|[0-9]{1})", o.month = u2;
          break;
        case "ww":
        case "w":
          r2 += "([0-9]{2}|[0-9]{1})", o.week = u2;
          break;
        case "dd":
        case "d":
          r2 += "([0-9]{2}|[0-9]{1})", o.day = u2;
          break;
        case "DDD":
        case "DD":
        case "D":
          r2 += "([0-9]{3}|[0-9]{2}|[0-9]{1})", o.yearDay = u2;
          break;
        case "dddd":
          r2 += "(" + this.getStringList(this._weekdays()).join("|") + ")", o.weekdayLong = u2;
          break;
        case "ddd":
          r2 += "(" + this.getStringList(this._shortWeekdays()).join("|") + ")", o.weekdayShort = u2;
          break;
        case "aaa":
        case "aa":
        case "a":
          r2 += "(" + this.getStringList(["AM", "PM", "A.M.", "P.M.", "A", "P"]).join("|") + ")", o.am = u2;
          break;
        case "hh":
        case "h":
          r2 += "([0-9]{2}|[0-9]{1})", o.hour12Base1 = u2;
          break;
        case "HH":
        case "H":
          r2 += "([0-9]{2}|[0-9]{1})", o.hourBase0 = u2;
          break;
        case "KK":
        case "K":
          r2 += "([0-9]{2}|[0-9]{1})", o.hour12Base0 = u2;
          break;
        case "kk":
        case "k":
          r2 += "([0-9]{2}|[0-9]{1})", o.hourBase1 = u2;
          break;
        case "mm":
        case "m":
          r2 += "([0-9]{2}|[0-9]{1})", o.minute = u2;
          break;
        case "ss":
        case "s":
          r2 += "([0-9]{2}|[0-9]{1})", o.second = u2;
          break;
        case "SSS":
        case "SS":
        case "S":
          r2 += "([0-9]{3}|[0-9]{2}|[0-9]{1})", o.millisecond = u2, o.millisecondDigits = a.parts[s2].length;
          break;
        case "nnn":
        case "nn":
        case "n":
          r2 += "([0-9]{3}|[0-9]{2}|[0-9]{1})", o.millisecond = u2;
          break;
        case "x":
          r2 += "([0-9]{1,})", o.timestamp = u2;
          break;
        case "Z":
          r2 += "GMT([-+]+[0-9]{2}:[0-9]{2})", o.zone = u2;
          break;
        case "ZZ":
          r2 += "([\\-+]+[0-9]{2}[0-9]{2})", o.zone = u2;
          break;
        case "i":
          r2 += "([0-9]{4})-?([0-9]{2})-?([0-9]{2})T?([0-9]{2}):?([0-9]{2}):?([0-9]{2})\\.?([0-9]{0,3})([zZ]|[+\\-][0-9]{2}:?[0-9]{2}|$)", o.iso = u2, h2 += 7;
          break;
        case "G":
        case "YYYY":
        case "YYY":
        case "YY":
        case "Y":
        case "MMMMM":
        case "W":
        case "EEEEE":
        case "EEEE":
        case "EEE":
        case "EE":
        case "E":
        case "eeeee":
        case "eeee":
        case "eee":
        case "ee":
        case "e":
        case "zzzz":
        case "zzz":
        case "zz":
        case "z":
        case "t":
          h2--;
      }
      r2 += "[^0-9]*";
    }
    let c3 = new RegExp(r2), d2 = e2.match(c3);
    if (d2) {
      if (o.year > -1 && (l.year = parseInt(d2[o.year])), o.year3 > -1) {
        let e3 = parseInt(d2[o.year3]);
        e3 += 1e3, l.year = e3;
      }
      if (o.year2 > -1) {
        let e3 = parseInt(d2[o.year2]);
        e3 += e3 > 50 ? 1e3 : 2e3, l.year = e3;
      }
      if (o.year1 > -1) {
        let e3 = parseInt(d2[o.year1]);
        e3 = 10 * Math.floor((/* @__PURE__ */ new Date()).getFullYear() / 10) + e3, l.year = e3;
      }
      if (o.monthLong > -1 && (l.month = this.resolveMonth(d2[o.monthLong])), o.monthShort > -1 && (l.month = this.resolveShortMonth(d2[o.monthShort])), o.month > -1 && (l.month = parseInt(d2[o.month]) - 1), o.week > -1 && -1 === o.day && (l.month = 0, l.day = St(parseInt(d2[o.week]), l.year, 1, this._root.utc)), o.day > -1 && (l.day = parseInt(d2[o.day])), o.yearDay > -1 && (l.month = 0, l.day = parseInt(d2[o.yearDay])), o.hourBase0 > -1 && (l.hour = parseInt(d2[o.hourBase0])), o.hourBase1 > -1 && (l.hour = parseInt(d2[o.hourBase1]) - 1), o.hour12Base0 > -1) {
        let e3 = parseInt(d2[o.hour12Base0]);
        11 == e3 && (e3 = 0), o.am > -1 && !this.isAm(d2[o.am]) && (e3 += 12), l.hour = e3;
      }
      if (o.hour12Base1 > -1) {
        let e3 = parseInt(d2[o.hour12Base1]);
        12 == e3 && (e3 = 0), o.am > -1 && !this.isAm(d2[o.am]) && (e3 += 12), l.hour = e3;
      }
      if (o.minute > -1 && (l.minute = parseInt(d2[o.minute])), o.second > -1 && (l.second = parseInt(d2[o.second])), o.millisecond > -1) {
        let e3 = parseInt(d2[o.millisecond]);
        2 == o.millisecondDigits ? e3 *= 10 : 1 == o.millisecondDigits && (e3 *= 100), l.millisecond = e3;
      }
      if (o.timestamp > -1) {
        l.timestamp = parseInt(d2[o.timestamp]);
        const e3 = new Date(l.timestamp);
        l.year = e3.getUTCFullYear(), l.month = e3.getUTCMonth(), l.day = e3.getUTCDate(), l.hour = e3.getUTCHours(), l.minute = e3.getUTCMinutes(), l.second = e3.getUTCSeconds(), l.millisecond = e3.getUTCMilliseconds();
      }
      o.zone > -1 && (l.offset = this.resolveTimezoneOffset(new Date(l.year, l.month, l.day), d2[o.zone])), o.iso > -1 && (l.year = h(d2[o.iso + 0]), l.month = h(d2[o.iso + 1]) - 1, l.day = h(d2[o.iso + 2]), l.hour = h(d2[o.iso + 3]), l.minute = h(d2[o.iso + 4]), l.second = h(d2[o.iso + 5]), l.millisecond = h(d2[o.iso + 6]), "Z" == d2[o.iso + 7] || "z" == d2[o.iso + 7] ? l.utc = true : "" != d2[o.iso + 7] && (l.offset = this.resolveTimezoneOffset(new Date(l.year, l.month, l.day), d2[o.iso + 7]))), i2 = l.utc ? new Date(Date.UTC(l.year, l.month, l.day, l.hour, l.minute, l.second, l.millisecond)) : new Date(l.year, l.month, l.day, l.hour, l.minute + l.offset, l.second, l.millisecond);
    } else i2 = new Date(e2);
    return i2;
  }
  resolveTimezoneOffset(e2, t) {
    if (t.match(/([+\-]?)([0-9]{2}):?([0-9]{2})/)) {
      let i2 = t.match(/([+\-]?)([0-9]{2}):?([0-9]{2})/), r2 = i2[1], s2 = i2[2], a = i2[3], n = 60 * parseInt(s2) + parseInt(a);
      return "+" == r2 && (n *= -1), n - (e2 || /* @__PURE__ */ new Date()).getTimezoneOffset();
    }
    return 0;
  }
  resolveMonth(e2) {
    let t = this._months().indexOf(e2);
    return t > -1 || !this._root.language.isDefault() && (t = this._root.language.translateAll(this._months()).indexOf(e2), t > -1) ? t : 0;
  }
  resolveShortMonth(e2) {
    let t = this._shortMonths().indexOf(e2);
    return t > -1 ? t : (t = this._months().indexOf(e2), t > -1 || this._root.language && !this._root.language.isDefault() && (t = this._root.language.translateAll(this._shortMonths()).indexOf(e2), t > -1) ? t : 0);
  }
  isAm(e2) {
    return this.getStringList(["AM", "A.M.", "A"]).indexOf(e2.toUpperCase()) > -1;
  }
  getStringList(e2) {
    let t = [];
    for (let i2 = 0; i2 < e2.length; i2++) this._root.language ? t.push(Pt(this._t(e2[i2]))) : t.push(Pt(e2[i2]));
    return t;
  }
};
var ze2 = class extends Be {
  constructor() {
    super(...arguments), Object.defineProperty(this, "_unitAliases", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {
        Y: "y",
        D: "d",
        H: "h",
        K: "h",
        k: "h",
        n: "S"
      }
    });
  }
  _setDefaults() {
    const e2 = "_duration_millisecond", t = "_duration_second", i2 = "_duration_minute", r2 = "_duration_hour", s2 = "_duration_day", a = "_duration_week", n = "_duration_month", o = "_duration_year", l = "_second", h2 = "_minute", u2 = "_hour", c3 = "_day", d2 = "_week", b2 = "_week", f2 = "_year";
    this._setDefault("negativeBase", 0), this._setDefault("baseUnit", "second"), this._setDefault("durationFormats", {
      millisecond: {
        millisecond: this._t(e2),
        second: this._t(e2 + l),
        minute: this._t(e2 + h2),
        hour: this._t(e2 + u2),
        day: this._t(e2 + c3),
        week: this._t(e2 + d2),
        month: this._t(e2 + b2),
        year: this._t(e2 + f2)
      },
      second: {
        second: this._t(t),
        minute: this._t(t + h2),
        hour: this._t(t + u2),
        day: this._t(t + c3),
        week: this._t(t + d2),
        month: this._t(t + b2),
        year: this._t(t + f2)
      },
      minute: {
        minute: this._t(i2),
        hour: this._t(i2 + u2),
        day: this._t(i2 + c3),
        week: this._t(i2 + d2),
        month: this._t(i2 + b2),
        year: this._t(i2 + f2)
      },
      hour: {
        hour: this._t(r2),
        day: this._t(r2 + c3),
        week: this._t(r2 + d2),
        month: this._t(r2 + b2),
        year: this._t(r2 + f2)
      },
      day: {
        day: this._t(s2),
        week: this._t(s2 + d2),
        month: this._t(s2 + b2),
        year: this._t(s2 + f2)
      },
      week: {
        week: this._t(a),
        month: this._t(a + b2),
        year: this._t(a + f2)
      },
      month: {
        month: this._t(n),
        year: this._t(n + f2)
      },
      year: {
        year: this._t(o)
      }
    }), super._setDefaults();
  }
  _beforeChanged() {
    super._beforeChanged();
  }
  format(e2, t, i2) {
    let r2 = i2 || this.get("baseUnit");
    void 0 !== t && "" !== t || (t = null != this.get("durationFormat") ? this.get("durationFormat") : this.getFormat(h(e2), void 0, r2)), t = yt(t);
    let s2, a = this.parseFormat(t, r2), o = Number(e2);
    s2 = o > this.get("negativeBase") ? a.positive : o < this.get("negativeBase") ? a.negative : a.zero;
    let l = this.applyFormat(o, s2);
    return "" !== s2.color && (l = "[" + s2.color + "]" + l + "[/]"), l;
  }
  parseFormat(e2, t) {
    let i2 = t || this.get("baseUnit"), r2 = {
      positive: {
        color: "",
        template: "",
        parts: [],
        source: "",
        baseUnit: i2,
        parsed: false,
        absolute: false
      },
      negative: {
        color: "",
        template: "",
        parts: [],
        source: "",
        baseUnit: i2,
        parsed: false,
        absolute: false
      },
      zero: {
        color: "",
        template: "",
        parts: [],
        source: "",
        baseUnit: i2,
        parsed: false,
        absolute: false
      }
    }, s2 = (e2 = e2.replace("||", f)).split("|");
    return r2.positive.source = s2[0], void 0 === s2[2] ? r2.zero = r2.positive : r2.zero.source = s2[2], void 0 === s2[1] ? r2.negative = r2.positive : r2.negative.source = s2[1], W(r2, (e3, t2) => {
      if (t2.parsed) return;
      let i3 = t2.source, r3 = [];
      r3 = t2.source.match(/^\[([^\]]*)\]/), r3 && r3.length && "" !== r3[0] && (i3 = t2.source.substr(r3[0].length), t2.color = r3[1]);
      let s3 = qe.chunk(i3, true);
      for (let a = 0; a < s3.length; a++) {
        let e4 = s3[a];
        if (e4.text = e4.text.replace(f, "|"), "value" === e4.type) {
          e4.text.match(/[yYMdDwhHKkmsSn]+a/) && (t2.absolute = true, e4.text = e4.text.replace(/([yYMdDwhHKkmsSn]+)a/, "$1"));
          let i4 = e4.text.match(/y+|Y+|M+|d+|D+|w+|h+|H+|K+|k+|m+|s+|S+|n+/g);
          if (i4) for (let r4 = 0; r4 < i4.length; r4++) null == i4[r4] && (i4[r4] = this._unitAliases[i4[r4]]), t2.parts.push(i4[r4]), e4.text = e4.text.replace(i4[r4], m);
        }
        t2.template += e4.text;
      }
      t2.parsed = true;
    }), r2;
  }
  applyFormat(e2, t) {
    let i2 = !t.absolute && e2 < this.get("negativeBase");
    e2 = Math.abs(e2);
    let r2 = this.toTimeStamp(e2, t.baseUnit), s2 = t.template;
    for (let a = 0, n = t.parts.length; a < n; a++) {
      let e3 = t.parts[a], i3 = this._toTimeUnit(e3.substr(0, 1)), n2 = e3.length, o = Math.floor(r2 / this._getUnitValue(i3));
      s2 = s2.replace(m, _t(o, n2, "0")), r2 -= o * this._getUnitValue(i3);
    }
    return i2 && (s2 = "-" + s2), s2;
  }
  toTimeStamp(e2, t) {
    return e2 * this._getUnitValue(t);
  }
  _toTimeUnit(e2) {
    switch (e2) {
      case "S":
        return "millisecond";
      case "s":
        return "second";
      case "m":
        return "minute";
      case "h":
        return "hour";
      case "d":
        return "day";
      case "w":
        return "week";
      case "M":
        return "month";
      case "y":
        return "year";
    }
  }
  getFormat(e2, t, i2) {
    if (null != this.get("durationFormat")) return this.get("durationFormat");
    if (i2 || (i2 = this.get("baseUnit")), null != t && e2 != t) {
      e2 = Math.abs(e2), t = Math.abs(t);
      let r2 = this.getValueUnit(Math.max(e2, t), i2);
      return this.get("durationFormats")[i2][r2];
    }
    {
      let t2 = this.getValueUnit(e2, i2);
      return this.get("durationFormats")[i2][t2];
    }
  }
  getValueUnit(e2, t) {
    let i2;
    t || (t = this.get("baseUnit"));
    let r2 = this.getMilliseconds(e2, t);
    return U(this._getUnitValues(), (e3, s2) => {
      if (e3 == t || i2) {
        if (r2 / s2 <= 1) return i2 || (i2 = e3), false;
        i2 = e3;
      }
      return true;
    }), i2;
  }
  getMilliseconds(e2, t) {
    return t || (t = this.get("baseUnit")), e2 * this._getUnitValue(t);
  }
  _getUnitValue(e2) {
    return this._getUnitValues()[e2];
  }
  _getUnitValues() {
    return {
      millisecond: 1,
      second: 1e3,
      minute: 6e4,
      hour: 36e5,
      day: 864e5,
      week: 6048e5,
      month: 2592e6,
      year: 31536e6
    };
  }
};
var Fe = {
  firstDayOfWeek: 1,
  _decimalSeparator: ".",
  _thousandSeparator: ",",
  _percentPrefix: null,
  _percentSuffix: "%",
  _big_number_suffix_3: "k",
  _big_number_suffix_6: "M",
  _big_number_suffix_9: "G",
  _big_number_suffix_12: "T",
  _big_number_suffix_15: "P",
  _big_number_suffix_18: "E",
  _big_number_suffix_21: "Z",
  _big_number_suffix_24: "Y",
  _small_number_suffix_3: "m",
  _small_number_suffix_6: "μ",
  _small_number_suffix_9: "n",
  _small_number_suffix_12: "p",
  _small_number_suffix_15: "f",
  _small_number_suffix_18: "a",
  _small_number_suffix_21: "z",
  _small_number_suffix_24: "y",
  _byte_suffix_B: "B",
  _byte_suffix_KB: "KB",
  _byte_suffix_MB: "MB",
  _byte_suffix_GB: "GB",
  _byte_suffix_TB: "TB",
  _byte_suffix_PB: "PB",
  _date: "yyyy-MM-dd",
  _date_millisecond: "mm:ss SSS",
  _date_millisecond_full: "HH:mm:ss SSS",
  _date_second: "HH:mm:ss",
  _date_second_full: "HH:mm:ss",
  _date_minute: "HH:mm",
  _date_minute_full: "HH:mm - MMM dd, yyyy",
  _date_hour: "HH:mm",
  _date_hour_full: "HH:mm - MMM dd, yyyy",
  _date_day: "MMM dd",
  _date_day_full: "MMM dd, yyyy",
  _date_week: "ww",
  _date_week_full: "MMM dd, yyyy",
  _date_month: "MMM",
  _date_month_full: "MMM, yyyy",
  _date_year: "yyyy",
  _duration_millisecond: "SSS",
  _duration_millisecond_second: "ss.SSS",
  _duration_millisecond_minute: "mm:ss SSS",
  _duration_millisecond_hour: "hh:mm:ss SSS",
  _duration_millisecond_day: "d'd' mm:ss SSS",
  _duration_millisecond_week: "d'd' mm:ss SSS",
  _duration_millisecond_month: "M'm' dd'd' mm:ss SSS",
  _duration_millisecond_year: "y'y' MM'm' dd'd' mm:ss SSS",
  _duration_second: "ss",
  _duration_second_minute: "mm:ss",
  _duration_second_hour: "hh:mm:ss",
  _duration_second_day: "d'd' hh:mm:ss",
  _duration_second_week: "d'd' hh:mm:ss",
  _duration_second_month: "M'm' dd'd' hh:mm:ss",
  _duration_second_year: "y'y' MM'm' dd'd' hh:mm:ss",
  _duration_minute: "mm",
  _duration_minute_hour: "hh:mm",
  _duration_minute_day: "d'd' hh:mm",
  _duration_minute_week: "d'd' hh:mm",
  _duration_minute_month: "M'm' dd'd' hh:mm",
  _duration_minute_year: "y'y' MM'm' dd'd' hh:mm",
  _duration_hour: "hh'h'",
  _duration_hour_day: "d'd' hh'h'",
  _duration_hour_week: "d'd' hh'h'",
  _duration_hour_month: "M'm' dd'd' hh'h'",
  _duration_hour_year: "y'y' MM'm' dd'd' hh'h'",
  _duration_day: "d'd'",
  _duration_day_week: "d'd'",
  _duration_day_month: "M'm' dd'd'",
  _duration_day_year: "y'y' MM'm' dd'd'",
  _duration_week: "w'w'",
  _duration_week_month: "w'w'",
  _duration_week_year: "w'w'",
  _duration_month: "M'm'",
  _duration_month_year: "y'y' MM'm'",
  _duration_year: "y'y'",
  _era_ad: "AD",
  _era_bc: "BC",
  A: "",
  P: "",
  AM: "",
  PM: "",
  "A.M.": "",
  "P.M.": "",
  January: "",
  February: "",
  March: "",
  April: "",
  May: "",
  June: "",
  July: "",
  August: "",
  September: "",
  October: "",
  November: "",
  December: "",
  Jan: "",
  Feb: "",
  Mar: "",
  Apr: "",
  "May(short)": "May",
  Jun: "",
  Jul: "",
  Aug: "",
  Sep: "",
  Oct: "",
  Nov: "",
  Dec: "",
  Sunday: "",
  Monday: "",
  Tuesday: "",
  Wednesday: "",
  Thursday: "",
  Friday: "",
  Saturday: "",
  Sun: "",
  Mon: "",
  Tue: "",
  Wed: "",
  Thu: "",
  Fri: "",
  Sat: "",
  _dateOrd: function(e2) {
    let t = "th";
    if (e2 < 11 || e2 > 13) switch (e2 % 10) {
      case 1:
        t = "st";
        break;
      case 2:
        t = "nd";
        break;
      case 3:
        t = "rd";
    }
    return t;
  },
  "Zoom Out": "",
  Play: "",
  Stop: "",
  Legend: "",
  "Press ENTER to toggle": "",
  Loading: "",
  Home: "",
  Chart: "",
  "Serial chart": "",
  "X/Y chart": "",
  "Pie chart": "",
  "Gauge chart": "",
  "Radar chart": "",
  "Sankey diagram": "",
  "Flow diagram": "",
  "Chord diagram": "",
  "TreeMap chart": "",
  "Force directed tree": "",
  "Sliced chart": "",
  Series: "",
  "Candlestick Series": "",
  "OHLC Series": "",
  "Column Series": "",
  "Line Series": "",
  "Pie Slice Series": "",
  "Funnel Series": "",
  "Pyramid Series": "",
  "X/Y Series": "",
  Map: "",
  "Press ENTER to zoom in": "",
  "Press ENTER to zoom out": "",
  "Use arrow keys to zoom in and out": "",
  "Use plus and minus keys on your keyboard to zoom in and out": "",
  Export: "",
  Image: "",
  Data: "",
  Print: "",
  "Press ENTER or use arrow keys to navigate": "",
  "Press ENTER to open": "",
  "Press ENTER to print.": "",
  "Press ENTER to export as %1.": "",
  "(Press ESC to close this message)": "",
  "Image Export Complete": "",
  "Export operation took longer than expected. Something might have gone wrong.": "",
  "Saved from": "",
  PNG: "",
  JPG: "",
  GIF: "",
  SVG: "",
  PDF: "",
  JSON: "",
  CSV: "",
  XLSX: "",
  HTML: "",
  "Use TAB to select grip buttons or left and right arrows to change selection": "",
  "Use left and right arrows to move selection": "",
  "Use left and right arrows to move left selection": "",
  "Use left and right arrows to move right selection": "",
  "Use TAB select grip buttons or up and down arrows to change selection": "",
  "Use up and down arrows to move selection": "",
  "Use up and down arrows to move lower selection": "",
  "Use up and down arrows to move upper selection": "",
  "From %1 to %2": "",
  "From %1": "",
  "To %1": "",
  "No parser available for file: %1": "",
  "Error parsing file: %1": "",
  "Unable to load file: %1": "",
  "Invalid date": "",
  Close: "",
  Minimize: ""
};
var He = class extends Be {
  _setDefaults() {
    this.setPrivate("defaultLocale", Fe), super._setDefaults();
  }
  translate(e2, t, ...i2) {
    t || (t = this._root.locale || this.getPrivate("defaultLocale"));
    let r2 = e2, s2 = t[e2];
    if (null === s2) r2 = "";
    else if (null != s2) s2 && (r2 = s2);
    else if (t !== this.getPrivate("defaultLocale")) return this.translate(e2, this.getPrivate("defaultLocale"), ...i2);
    if (i2.length) for (let a = i2.length, n = 0; n < a; ++n) r2 = r2.split("%" + (n + 1)).join(i2[n]);
    return r2;
  }
  translateAny(e2, t, ...i2) {
    return this.translate(e2, t, ...i2);
  }
  setTranslationAny(e2, t, i2) {
    (i2 || this._root.locale)[e2] = t;
  }
  setTranslationsAny(e2, t) {
    W(e2, (e3, i2) => {
      this.setTranslationAny(e3, i2, t);
    });
  }
  translateEmpty(e2, t, ...i2) {
    let r2 = this.translate(e2, t, ...i2);
    return r2 == e2 ? "" : r2;
  }
  translateFunc(e2, t) {
    return this._root.locale[e2] ? this._root.locale[e2] : t !== this.getPrivate("defaultLocale") ? this.translateFunc(e2, this.getPrivate("defaultLocale")) : () => "";
  }
  translateAll(e2, t) {
    return this.isDefault() ? e2 : y(e2, (e3) => this.translate(e3, t));
  }
  isDefault() {
    return this.getPrivate("defaultLocale") === this._root.locale;
  }
};
var Ie = class {
  constructor(e2 = 1, t = 0, i2 = 0, r2 = 1, s2 = 0, a = 0) {
    Object.defineProperty(this, "a", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    }), Object.defineProperty(this, "b", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    }), Object.defineProperty(this, "c", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    }), Object.defineProperty(this, "d", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    }), Object.defineProperty(this, "tx", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    }), Object.defineProperty(this, "ty", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    }), this.a = e2, this.b = t, this.c = i2, this.d = r2, this.tx = s2, this.ty = a;
  }
  setTransform(e2, t, i2, r2, s2, a = 1) {
    this.a = Math.cos(s2) * a, this.b = Math.sin(s2) * a, this.c = -Math.sin(s2) * a, this.d = Math.cos(s2) * a, this.tx = e2 - (i2 * this.a + r2 * this.c), this.ty = t - (i2 * this.b + r2 * this.d);
  }
  apply(e2) {
    return {
      x: this.a * e2.x + this.c * e2.y + this.tx,
      y: this.b * e2.x + this.d * e2.y + this.ty
    };
  }
  applyInverse(e2) {
    const t = 1 / (this.a * this.d + this.c * -this.b);
    return {
      x: this.d * t * e2.x + -this.c * t * e2.y + (this.ty * this.c - this.tx * this.d) * t,
      y: this.a * t * e2.y + -this.b * t * e2.x + (-this.ty * this.a + this.tx * this.b) * t
    };
  }
  append(e2) {
    const t = this.a, i2 = this.b, r2 = this.c, s2 = this.d;
    this.a = e2.a * t + e2.b * r2, this.b = e2.a * i2 + e2.b * s2, this.c = e2.c * t + e2.d * r2, this.d = e2.c * i2 + e2.d * s2, this.tx = e2.tx * t + e2.ty * r2 + this.tx, this.ty = e2.tx * i2 + e2.ty * s2 + this.ty;
  }
  prepend(e2) {
    const t = this.tx;
    if (1 !== e2.a || 0 !== e2.b || 0 !== e2.c || 1 !== e2.d) {
      const t2 = this.a, i2 = this.c;
      this.a = t2 * e2.a + this.b * e2.c, this.b = t2 * e2.b + this.b * e2.d, this.c = i2 * e2.a + this.d * e2.c, this.d = i2 * e2.b + this.d * e2.d;
    }
    this.tx = t * e2.a + this.ty * e2.c + e2.tx, this.ty = t * e2.b + this.ty * e2.d + e2.ty;
  }
  copyFrom(e2) {
    this.a = e2.a, this.b = e2.b, this.c = e2.c, this.d = e2.d, this.tx = e2.tx, this.ty = e2.ty;
  }
};
var Ye = /* @__PURE__ */ function() {
  function e2(e3, t) {
    var i2 = [], r2 = true, s2 = false, a = void 0;
    try {
      for (var n, o = e3[Symbol.iterator](); !(r2 = (n = o.next()).done) && (i2.push(n.value), !t || i2.length !== t); r2 = true) ;
    } catch (l) {
      s2 = true, a = l;
    } finally {
      try {
        !r2 && o.return && o.return();
      } finally {
        if (s2) throw a;
      }
    }
    return i2;
  }
  return function(t, i2) {
    if (Array.isArray(t)) return t;
    if (Symbol.iterator in Object(t)) return e2(t, i2);
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  };
}();
var Re = 2 * Math.PI;
var Ue = function(e2, t, i2, r2, s2, a, n) {
  var o = e2.x, l = e2.y;
  return {
    x: r2 * (o *= t) - s2 * (l *= i2) + a,
    y: s2 * o + r2 * l + n
  };
};
var We = function(e2, t) {
  var i2 = 1.5707963267948966 === t ? 0.551915024494 : -1.5707963267948966 === t ? -0.551915024494 : 4 / 3 * Math.tan(t / 4), r2 = Math.cos(e2), s2 = Math.sin(e2), a = Math.cos(e2 + t), n = Math.sin(e2 + t);
  return [{
    x: r2 - s2 * i2,
    y: s2 + r2 * i2
  }, {
    x: a + n * i2,
    y: n - a * i2
  }, {
    x: a,
    y: n
  }];
};
var Ve2 = function(e2, t, i2, r2) {
  var s2 = e2 * i2 + t * r2;
  return s2 > 1 && (s2 = 1), s2 < -1 && (s2 = -1), (e2 * r2 - t * i2 < 0 ? -1 : 1) * Math.acos(s2);
};
var Ge2 = function(e2, t, i2, r2, s2, a, n, o, l, h2, u2, c3) {
  var d2 = Math.pow(s2, 2), b2 = Math.pow(a, 2), f2 = Math.pow(u2, 2), g2 = Math.pow(c3, 2), m2 = d2 * b2 - d2 * g2 - b2 * f2;
  m2 < 0 && (m2 = 0), m2 /= d2 * g2 + b2 * f2;
  var p = (m2 = Math.sqrt(m2) * (n === o ? -1 : 1)) * s2 / a * c3, _2 = m2 * -a / s2 * u2, y2 = h2 * p - l * _2 + (e2 + i2) / 2, v = l * p + h2 * _2 + (t + r2) / 2, w2 = (u2 - p) / s2, x2 = (c3 - _2) / a, P = (-u2 - p) / s2, O = (-c3 - _2) / a, k2 = Ve2(1, 0, w2, x2), M = Ve2(w2, x2, P, O);
  return 0 === o && M > 0 && (M -= Re), 1 === o && M < 0 && (M += Re), [y2, v, k2, M];
};
var Ne = function(e2) {
  var t = e2.px, i2 = e2.py, r2 = e2.cx, s2 = e2.cy, a = e2.rx, n = e2.ry, o = e2.xAxisRotation, l = void 0 === o ? 0 : o, h2 = e2.largeArcFlag, u2 = void 0 === h2 ? 0 : h2, c3 = e2.sweepFlag, d2 = void 0 === c3 ? 0 : c3, b2 = [];
  if (0 === a || 0 === n) return [];
  var f2 = Math.sin(l * Re / 360), g2 = Math.cos(l * Re / 360), m2 = g2 * (t - r2) / 2 + f2 * (i2 - s2) / 2, p = -f2 * (t - r2) / 2 + g2 * (i2 - s2) / 2;
  if (0 === m2 && 0 === p) return [];
  a = Math.abs(a), n = Math.abs(n);
  var _2 = Math.pow(m2, 2) / Math.pow(a, 2) + Math.pow(p, 2) / Math.pow(n, 2);
  _2 > 1 && (a *= Math.sqrt(_2), n *= Math.sqrt(_2));
  var y2 = Ge2(t, i2, r2, s2, a, n, u2, d2, f2, g2, m2, p), v = Ye(y2, 4), w2 = v[0], x2 = v[1], P = v[2], O = v[3], k2 = Math.abs(O) / (Re / 4);
  Math.abs(1 - k2) < 1e-7 && (k2 = 1);
  var M = Math.max(Math.ceil(k2), 1);
  O /= M;
  for (var S2 = 0; S2 < M; S2++) b2.push(We(P, O)), P += O;
  return b2.map(function(e3) {
    var t2 = Ue(e3[0], a, n, g2, f2, w2, x2), i3 = t2.x, r3 = t2.y, s3 = Ue(e3[1], a, n, g2, f2, w2, x2), o2 = s3.x, l2 = s3.y, h3 = Ue(e3[2], a, n, g2, f2, w2, x2);
    return {
      x1: i3,
      y1: r3,
      x2: o2,
      y2: l2,
      x: h3.x,
      y: h3.y
    };
  });
};
function Xe(e2, t, i2) {
  if (t !== i2) throw new Error("Required " + i2 + " arguments for " + e2 + " but got " + t);
}
function qe2(e2, t, i2) {
  if (t < i2) throw new Error("Required at least " + i2 + " arguments for " + e2 + " but got " + t);
}
function Ke(e2, t, i2) {
  if (qe2(e2, t, i2), t % i2 != 0) throw new Error("Arguments for " + e2 + " must be in pairs of " + i2);
}
function Ze2(e2) {
  for (let t = 0; t < e2.length; t += 7) {
    let i2 = t + 3, r2 = e2[i2];
    if (r2.length > 1) {
      const t2 = /^([01])([01])(.*)$/.exec(r2);
      null !== t2 && (e2.splice(i2, 0, t2[1]), ++i2, e2.splice(i2, 0, t2[2]), ++i2, t2[3].length > 0 ? e2[i2] = t2[3] : e2.splice(i2, 1));
    }
    if (++i2, r2 = e2[i2], r2.length > 1) {
      const t2 = /^([01])(.+)$/.exec(r2);
      null !== t2 && (e2.splice(i2, 0, t2[1]), ++i2, e2[i2] = t2[2]);
    }
  }
}
function Je2(e2) {
  if (0 === e2 || 1 === e2) return e2;
  throw new Error("Flag must be 0 or 1");
}
function $e2(e2) {
  const t = [0, 0, 0];
  for (let i2 = 0; i2 < 24; i2++) t[i2 % 3] <<= 1, t[i2 % 3] |= 1 & e2, e2 >>= 1;
  return (0 | t[0]) + (t[1] << 8) + (t[2] << 16);
}
function Qe2(e2, t) {
  for (; (!e2.interactive || t(e2)) && e2._parent; ) e2 = e2._parent;
}
function et2(e2, t, i2) {
  return Z(e2, it(t), (e3) => {
    const t2 = nt(e3);
    let r2 = e3.touches;
    r2 ? (0 == r2.length && (r2 = e3.changedTouches), i2(S(r2), t2)) : i2([e3], t2);
  });
}
function tt2(e2) {
  const t = document.createElement("canvas");
  t.width = 1, t.height = 1;
  const i2 = t.getContext("2d", {
    willReadFrequently: true
  });
  i2.drawImage(e2, 0, 0, 1, 1);
  try {
    return i2.getImageData(0, 0, 1, 1), false;
  } catch (r2) {
    return console.warn('Image "' + e2.src + '" is loaded from different host and is not covered by CORS policy. For more information about the implications read here: https://www.amcharts.com/docs/v5/concepts/cors'), true;
  }
}
function it2(e2) {
  e2.width = 0, e2.height = 0, e2.style.width = "0px", e2.style.height = "0px";
}
function rt2(e2) {
  return Math.floor(e2) + 0.5;
}
var st = class {
  constructor() {
    Object.defineProperty(this, "_x", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    }), Object.defineProperty(this, "_y", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
  }
  get x() {
    return this._x;
  }
  get y() {
    return this._y;
  }
  set x(e2) {
    this._x = e2;
  }
  set y(e2) {
    this._y = e2;
  }
};
var at2 = class extends K {
  constructor(e2) {
    super(), Object.defineProperty(this, "_layer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    }), Object.defineProperty(this, "mask", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: null
    }), Object.defineProperty(this, "visible", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: true
    }), Object.defineProperty(this, "exportable", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: true
    }), Object.defineProperty(this, "interactive", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    }), Object.defineProperty(this, "inactive", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: null
    }), Object.defineProperty(this, "wheelable", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    }), Object.defineProperty(this, "cancelTouch", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    }), Object.defineProperty(this, "isMeasured", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    }), Object.defineProperty(this, "buttonMode", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    }), Object.defineProperty(this, "alpha", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 1
    }), Object.defineProperty(this, "compoundAlpha", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 1
    }), Object.defineProperty(this, "angle", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    }), Object.defineProperty(this, "scale", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 1
    }), Object.defineProperty(this, "x", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    }), Object.defineProperty(this, "y", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    }), Object.defineProperty(this, "crisp", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    }), Object.defineProperty(this, "pivot", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: new st()
    }), Object.defineProperty(this, "filter", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    }), Object.defineProperty(this, "cursorOverStyle", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    }), Object.defineProperty(this, "_replacedCursorStyle", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    }), Object.defineProperty(this, "_localMatrix", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: new Ie()
    }), Object.defineProperty(this, "_matrix", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: new Ie()
    }), Object.defineProperty(this, "_uMatrix", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: new Ie()
    }), Object.defineProperty(this, "_renderer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    }), Object.defineProperty(this, "_parent", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    }), Object.defineProperty(this, "_localBounds", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    }), Object.defineProperty(this, "_bounds", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    }), Object.defineProperty(this, "_colorId", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    }), this._renderer = e2;
  }
  subStatus(e2) {
    return {
      inactive: null == this.inactive ? e2.inactive : this.inactive,
      layer: this._layer || e2.layer
    };
  }
  _dispose() {
    this._renderer._removeObject(this), this.getLayer().dirty = true;
  }
  getCanvas() {
    return this.getLayer().view;
  }
  getLayer() {
    let e2 = this;
    for (; ; ) {
      if (e2._layer) return e2._layer;
      if (!e2._parent) return this._renderer.defaultLayer;
      e2 = e2._parent;
    }
  }
  setLayer(e2, t) {
    if (null == e2) this._layer = void 0;
    else {
      const i2 = true;
      this._layer = this._renderer.getLayer(e2, i2), this._layer.visible = i2, this._layer.margin = t, t && lt(this._layer.view, false), this._renderer._ghostLayer.setMargin(this._renderer.layers), this._parent && this._parent.registerChildLayer(this._layer), this._layer.dirty = true, this._renderer.resizeLayer(this._layer), this._renderer.resizeGhost();
    }
  }
  markDirtyLayer() {
    this.getLayer().dirty = true;
  }
  clear() {
    this.invalidateBounds();
  }
  invalidateBounds() {
    this._localBounds = void 0;
  }
  _addBounds(e2) {
  }
  _getColorId() {
    return void 0 === this._colorId && (this._colorId = this._renderer.paintId(this)), this._colorId;
  }
  _isInteractive(e2) {
    return !e2.inactive && (this.interactive || this._renderer._forceInteractive > 0);
  }
  _isInteractiveMask(e2) {
    return this._isInteractive(e2);
  }
  contains(e2) {
    for (; ; ) {
      if (e2 === this) return true;
      if (!e2._parent) return false;
      e2 = e2._parent;
    }
  }
  toGlobal(e2) {
    return this._matrix.apply(e2);
  }
  toLocal(e2) {
    return this._matrix.applyInverse(e2);
  }
  getLocalMatrix() {
    return this._uMatrix.setTransform(0, 0, this.pivot.x, this.pivot.y, this.angle * Math.PI / 180, this.scale), this._uMatrix;
  }
  getLocalBounds() {
    if (!this._localBounds) {
      const e2 = 1e7;
      this._localBounds = {
        left: e2,
        top: e2,
        right: -e2,
        bottom: -e2
      }, this._addBounds(this._localBounds);
    }
    return this._localBounds;
  }
  getAdjustedBounds(e2) {
    this._setMatrix();
    const t = this.getLocalMatrix(), i2 = t.apply({
      x: e2.left,
      y: e2.top
    }), r2 = t.apply({
      x: e2.right,
      y: e2.top
    }), s2 = t.apply({
      x: e2.right,
      y: e2.bottom
    }), a = t.apply({
      x: e2.left,
      y: e2.bottom
    });
    return {
      left: Math.min(i2.x, r2.x, s2.x, a.x),
      top: Math.min(i2.y, r2.y, s2.y, a.y),
      right: Math.max(i2.x, r2.x, s2.x, a.x),
      bottom: Math.max(i2.y, r2.y, s2.y, a.y)
    };
  }
  on(e2, t, i2) {
    return this.interactive ? this._renderer._addEvent(this, e2, t, i2) : new z(() => {
    });
  }
  _setMatrix() {
    this._localMatrix.setTransform(this.x, this.y, this.pivot.x, this.pivot.y, this.angle * Math.PI / 180, this.scale), this._matrix.copyFrom(this._localMatrix), this._parent && this._matrix.prepend(this._parent._matrix);
  }
  _transform(e2, t) {
    const i2 = this._matrix;
    let r2 = i2.tx * t, s2 = i2.ty * t;
    this.crisp && (r2 = rt2(r2), s2 = rt2(s2)), e2.setTransform(i2.a * t, i2.b * t, i2.c * t, i2.d * t, r2, s2);
  }
  _transformMargin(e2, t, i2) {
    const r2 = this._matrix;
    e2.setTransform(r2.a * t, r2.b * t, r2.c * t, r2.d * t, (r2.tx + i2.left) * t, (r2.ty + i2.top) * t);
  }
  _transformLayer(e2, t, i2) {
    i2.margin ? this._transformMargin(e2, i2.scale || t, i2.margin) : this._transform(e2, i2.scale || t);
  }
  render(e2) {
    if (this.visible && (false !== this.exportable || !this._renderer._omitTainted)) {
      this._setMatrix();
      const i2 = this.subStatus(e2), r2 = this._renderer.resolution, s2 = this._renderer.layers, a = this._renderer._ghostLayer, n = a.context, o = this.mask;
      o && o._setMatrix(), w(s2, (e3) => {
        if (e3) {
          const t = e3.context;
          t.save(), o && (o._transformLayer(t, r2, e3), o._runPath(t), t.clip()), t.globalAlpha = this.compoundAlpha * this.alpha, this._transformLayer(t, r2, e3), this.filter && (t.filter = this.filter);
        }
      }), n.save(), o && this._isInteractiveMask(i2) && (o._transformMargin(n, r2, a.margin), o._runPath(n), n.clip()), this._transformMargin(n, r2, a.margin), this._render(i2), n.restore(), w(s2, (e3) => {
        e3 && e3.context.restore();
      });
    }
  }
  _render(e2) {
    false === this.exportable && (e2.layer.tainted = true);
  }
  hovering() {
    return this._renderer._hovering.has(this);
  }
  dragging() {
    return this._renderer._dragging.some((e2) => e2.value === this);
  }
  shouldCancelTouch() {
    const e2 = this._renderer;
    return !(e2.tapToActivate && !e2._touchActive) && (!!this.cancelTouch || !!this._parent && this._parent.shouldCancelTouch());
  }
};
var nt2 = class extends at2 {
  constructor() {
    super(...arguments), Object.defineProperty(this, "interactiveChildren", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: true
    }), Object.defineProperty(this, "_childLayers", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    }), Object.defineProperty(this, "_children", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
  }
  _isInteractiveMask(e2) {
    return this.interactiveChildren || super._isInteractiveMask(e2);
  }
  addChild(e2) {
    e2._parent = this, this._children.push(e2), e2._layer && this.registerChildLayer(e2._layer);
  }
  addChildAt(e2, t) {
    e2._parent = this, this._children.splice(t, 0, e2), e2._layer && this.registerChildLayer(e2._layer);
  }
  removeChild(e2) {
    e2._parent = void 0, k(this._children, e2);
  }
  _render(e2) {
    super._render(e2);
    const i2 = this._renderer;
    this.interactive && this.interactiveChildren && ++i2._forceInteractive, w(this._children, (t) => {
      t.compoundAlpha = this.compoundAlpha * this.alpha, t.render(e2);
    }), this.interactive && this.interactiveChildren && --i2._forceInteractive;
  }
  registerChildLayer(e2) {
    this._childLayers || (this._childLayers = []), T(this._childLayers, e2), this._parent && this._parent.registerChildLayer(e2);
  }
  markDirtyLayer(e2 = false) {
    super.markDirtyLayer(), e2 && this._childLayers && w(this._childLayers, (e3) => e3.dirty = true);
  }
  _dispose() {
    super._dispose(), this._childLayers && w(this._childLayers, (e2) => {
      e2.dirty = true;
    });
  }
};
function ot(e2, t) {
  e2.left = Math.min(e2.left, t.x), e2.top = Math.min(e2.top, t.y), e2.right = Math.max(e2.right, t.x), e2.bottom = Math.max(e2.bottom, t.y);
}
var lt2 = class {
  colorize(e2, t) {
  }
  colorizeGhost(e2, t) {
    this.colorize(e2, t);
  }
  path(e2) {
  }
  pathGhost(e2) {
    this.path(e2);
  }
  addBounds(e2) {
  }
};
var ht = class extends lt2 {
  colorize(e2, t) {
    e2.beginPath();
  }
};
var ut = class extends lt2 {
  constructor(e2) {
    super(), Object.defineProperty(this, "color", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: e2
    });
  }
  colorize(e2, t) {
    e2.fillStyle = void 0 !== t ? t : this.color;
  }
};
var ct = class extends lt2 {
  constructor(e2) {
    super(), Object.defineProperty(this, "clearShadow", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: e2
    });
  }
  colorize(e2, t) {
    e2.fill(), this.clearShadow && (e2.shadowColor = "", e2.shadowBlur = 0, e2.shadowOffsetX = 0, e2.shadowOffsetY = 0);
  }
};
var dt2 = class extends lt2 {
  colorize(e2, t) {
    e2.stroke();
  }
};
var bt2 = class extends lt2 {
  constructor(e2, t, i2) {
    super(), Object.defineProperty(this, "width", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: e2
    }), Object.defineProperty(this, "color", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: t
    }), Object.defineProperty(this, "lineJoin", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: i2
    });
  }
  colorize(e2, t) {
    e2.strokeStyle = void 0 !== t ? t : this.color, e2.lineWidth = this.width, this.lineJoin && (e2.lineJoin = this.lineJoin);
  }
};
var ft = class extends lt2 {
  constructor(e2) {
    super(), Object.defineProperty(this, "dash", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: e2
    });
  }
  colorize(e2, t) {
    e2.setLineDash(this.dash);
  }
};
var gt = class extends lt2 {
  constructor(e2) {
    super(), Object.defineProperty(this, "dashOffset", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: e2
    });
  }
  colorize(e2, t) {
    e2.lineDashOffset = this.dashOffset;
  }
};
var mt = class extends lt2 {
  constructor(e2, t, i2, r2) {
    super(), Object.defineProperty(this, "x", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: e2
    }), Object.defineProperty(this, "y", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: t
    }), Object.defineProperty(this, "width", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: i2
    }), Object.defineProperty(this, "height", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: r2
    });
  }
  path(e2) {
    e2.rect(this.x, this.y, this.width, this.height);
  }
  addBounds(e2) {
    const t = this.x, i2 = this.y, r2 = t + this.width, s2 = i2 + this.height;
    ot(e2, {
      x: t,
      y: i2
    }), ot(e2, {
      x: r2,
      y: i2
    }), ot(e2, {
      x: t,
      y: s2
    }), ot(e2, {
      x: r2,
      y: s2
    });
  }
};
var pt2 = class extends lt2 {
  constructor(e2, t, i2) {
    super(), Object.defineProperty(this, "x", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: e2
    }), Object.defineProperty(this, "y", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: t
    }), Object.defineProperty(this, "radius", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: i2
    });
  }
  path(e2) {
    e2.moveTo(this.x + this.radius, this.y), e2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
  }
  addBounds(e2) {
    ot(e2, {
      x: this.x - this.radius,
      y: this.y - this.radius
    }), ot(e2, {
      x: this.x + this.radius,
      y: this.y + this.radius
    });
  }
};
var _t2 = class extends lt2 {
  constructor(e2, t, i2, r2) {
    super(), Object.defineProperty(this, "x", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: e2
    }), Object.defineProperty(this, "y", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: t
    }), Object.defineProperty(this, "radiusX", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: i2
    }), Object.defineProperty(this, "radiusY", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: r2
    });
  }
  path(e2) {
    e2.ellipse(0, 0, this.radiusX, this.radiusY, 0, 0, 2 * Math.PI);
  }
  addBounds(e2) {
    ot(e2, {
      x: this.x - this.radiusX,
      y: this.y - this.radiusY
    }), ot(e2, {
      x: this.x + this.radiusX,
      y: this.y + this.radiusY
    });
  }
};
var yt2 = class extends lt2 {
  constructor(e2, t, i2, r2, s2, a) {
    super(), Object.defineProperty(this, "cx", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: e2
    }), Object.defineProperty(this, "cy", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: t
    }), Object.defineProperty(this, "radius", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: i2
    }), Object.defineProperty(this, "startAngle", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: r2
    }), Object.defineProperty(this, "endAngle", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: s2
    }), Object.defineProperty(this, "anticlockwise", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: a
    });
  }
  path(e2) {
    this.radius > 0 && e2.arc(this.cx, this.cy, this.radius, this.startAngle, this.endAngle, this.anticlockwise);
  }
  addBounds(e2) {
    let t = _e(this.cx, this.cy, this.startAngle * he, this.endAngle * he, this.radius);
    ot(e2, {
      x: t.left,
      y: t.top
    }), ot(e2, {
      x: t.right,
      y: t.bottom
    });
  }
};
var vt = class extends lt2 {
  constructor(e2, t, i2, r2, s2) {
    super(), Object.defineProperty(this, "x1", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: e2
    }), Object.defineProperty(this, "y1", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: t
    }), Object.defineProperty(this, "x2", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: i2
    }), Object.defineProperty(this, "y2", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: r2
    }), Object.defineProperty(this, "radius", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: s2
    });
  }
  path(e2) {
    this.radius > 0 && e2.arcTo(this.x1, this.y1, this.x2, this.y2, this.radius);
  }
  addBounds(e2) {
  }
};
var wt2 = class extends lt2 {
  constructor(e2, t) {
    super(), Object.defineProperty(this, "x", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: e2
    }), Object.defineProperty(this, "y", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: t
    });
  }
  path(e2) {
    e2.lineTo(this.x, this.y);
  }
  addBounds(e2) {
    ot(e2, {
      x: this.x,
      y: this.y
    });
  }
};
var xt2 = class extends lt2 {
  constructor(e2, t) {
    super(), Object.defineProperty(this, "x", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: e2
    }), Object.defineProperty(this, "y", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: t
    });
  }
  path(e2) {
    e2.moveTo(this.x, this.y);
  }
  addBounds(e2) {
    ot(e2, {
      x: this.x,
      y: this.y
    });
  }
};
var Pt2 = class extends lt2 {
  path(e2) {
    e2.closePath();
  }
};
var Ot2 = class extends lt2 {
  constructor(e2, t, i2, r2, s2, a) {
    super(), Object.defineProperty(this, "cpX", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: e2
    }), Object.defineProperty(this, "cpY", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: t
    }), Object.defineProperty(this, "cpX2", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: i2
    }), Object.defineProperty(this, "cpY2", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: r2
    }), Object.defineProperty(this, "toX", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: s2
    }), Object.defineProperty(this, "toY", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: a
    });
  }
  path(e2) {
    e2.bezierCurveTo(this.cpX, this.cpY, this.cpX2, this.cpY2, this.toX, this.toY);
  }
  addBounds(e2) {
    ot(e2, {
      x: this.cpX,
      y: this.cpY
    }), ot(e2, {
      x: this.cpX2,
      y: this.cpY2
    }), ot(e2, {
      x: this.toX,
      y: this.toY
    });
  }
};
var kt2 = class extends lt2 {
  constructor(e2, t, i2, r2) {
    super(), Object.defineProperty(this, "cpX", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: e2
    }), Object.defineProperty(this, "cpY", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: t
    }), Object.defineProperty(this, "toX", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: i2
    }), Object.defineProperty(this, "toY", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: r2
    });
  }
  path(e2) {
    e2.quadraticCurveTo(this.cpX, this.cpY, this.toX, this.toY);
  }
  addBounds(e2) {
    ot(e2, {
      x: this.cpX,
      y: this.cpY
    }), ot(e2, {
      x: this.toX,
      y: this.toY
    });
  }
};
var Mt = class extends lt2 {
  constructor(e2, t, i2, r2, s2) {
    super(), Object.defineProperty(this, "color", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: e2
    }), Object.defineProperty(this, "blur", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: t
    }), Object.defineProperty(this, "offsetX", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: i2
    }), Object.defineProperty(this, "offsetY", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: r2
    }), Object.defineProperty(this, "opacity", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: s2
    });
  }
  colorize(e2, t) {
    this.opacity && (e2.fillStyle = this.color), e2.shadowColor = this.color, e2.shadowBlur = this.blur, e2.shadowOffsetX = this.offsetX, e2.shadowOffsetY = this.offsetY;
  }
  colorizeGhost(e2, t) {
  }
};
var St2 = class extends lt2 {
  constructor(e2, t, i2, r2, s2) {
    super(), Object.defineProperty(this, "image", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: e2
    }), Object.defineProperty(this, "width", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: t
    }), Object.defineProperty(this, "height", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: i2
    }), Object.defineProperty(this, "x", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: r2
    }), Object.defineProperty(this, "y", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: s2
    });
  }
  path(e2) {
    e2.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
  addBounds(e2) {
    ot(e2, {
      x: this.x,
      y: this.y
    }), ot(e2, {
      x: this.width,
      y: this.height
    });
  }
};
var jt2 = class extends at2 {
  constructor() {
    super(...arguments), Object.defineProperty(this, "_operations", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    }), Object.defineProperty(this, "blendMode", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: Ve.NORMAL
    }), Object.defineProperty(this, "_hasShadows", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    }), Object.defineProperty(this, "_fillAlpha", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    }), Object.defineProperty(this, "_strokeAlpha", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
  }
  clear() {
    super.clear(), this._operations.length = 0;
  }
  _pushOp(e2) {
    this._operations.push(e2);
  }
  beginFill(e2, t = 1) {
    this._fillAlpha = t, e2 ? e2 instanceof Gt ? this._pushOp(new ut(e2.toCSS(t))) : (this.isMeasured = true, this._pushOp(new ut(e2))) : this._pushOp(new ut("rgba(0, 0, 0, " + t + ")"));
  }
  endFill() {
    this._pushOp(new ct(this._hasShadows));
  }
  endStroke() {
    this._pushOp(new dt2());
  }
  beginPath() {
    this._pushOp(new ht());
  }
  lineStyle(e2 = 0, t, i2 = 1, r2) {
    this._strokeAlpha = i2, t ? t instanceof Gt ? this._pushOp(new bt2(e2, t.toCSS(i2), r2)) : this._pushOp(new bt2(e2, t, r2)) : this._pushOp(new bt2(e2, "rgba(0, 0, 0, " + i2 + ")", r2));
  }
  setLineDash(e2) {
    this._pushOp(new ft(e2 || []));
  }
  setLineDashOffset(e2 = 0) {
    this._pushOp(new gt(e2));
  }
  drawRect(e2, t, i2, r2) {
    this._pushOp(new mt(e2, t, i2, r2));
  }
  drawCircle(e2, t, i2) {
    this._pushOp(new pt2(e2, t, i2));
  }
  drawEllipse(e2, t, i2, r2) {
    this._pushOp(new _t2(e2, t, i2, r2));
  }
  arc(e2, t, i2, r2, s2, a = false) {
    this._pushOp(new yt2(e2, t, i2, r2, s2, a));
  }
  arcTo(e2, t, i2, r2, s2) {
    this._pushOp(new vt(e2, t, i2, r2, s2));
  }
  lineTo(e2, t) {
    this._pushOp(new wt2(e2, t));
  }
  moveTo(e2, t) {
    this._pushOp(new xt2(e2, t));
  }
  bezierCurveTo(e2, t, i2, r2, s2, a) {
    this._pushOp(new Ot2(e2, t, i2, r2, s2, a));
  }
  quadraticCurveTo(e2, t, i2, r2) {
    this._pushOp(new kt2(e2, t, i2, r2));
  }
  closePath() {
    this._pushOp(new Pt2());
  }
  shadow(e2, t = 0, i2 = 0, r2 = 0, s2) {
    this._hasShadows = true, this._pushOp(new Mt(s2 ? e2.toCSS(s2) : e2.toCSS(this._fillAlpha || this._strokeAlpha), t, i2, r2));
  }
  image(e2, t, i2, r2, s2) {
    this._pushOp(new St2(e2, t, i2, r2, s2));
  }
  svgPath(e2) {
    let i2 = 0, r2 = 0, s2 = null, a = null, n = null, o = null;
    const l = /([MmZzLlHhVvCcSsQqTtAa])([^MmZzLlHhVvCcSsQqTtAa]*)/g, h2 = /[\u0009\u0020\u000A\u000C\u000D]*([\+\-]?[0-9]*\.?[0-9]+(?:[eE][\+\-]?[0-9]+)?)[\u0009\u0020\u000A\u000C\u000D]*,?/g;
    let u2;
    for (; null !== (u2 = l.exec(e2)); ) {
      const e3 = u2[1], l2 = u2[2], c3 = [];
      for (; null !== (u2 = h2.exec(l2)); ) c3.push(u2[1]);
      switch ("S" !== e3 && "s" !== e3 && "C" !== e3 && "c" !== e3 && (s2 = null, a = null), "Q" !== e3 && "q" !== e3 && "T" !== e3 && "t" !== e3 && (n = null, o = null), e3) {
        case "M":
          Ke(e3, c3.length, 2), i2 = +c3[0], r2 = +c3[1], this.moveTo(i2, r2);
          for (let e4 = 2; e4 < c3.length; e4 += 2) i2 = +c3[e4], r2 = +c3[e4 + 1], this.lineTo(i2, r2);
          break;
        case "m":
          Ke(e3, c3.length, 2), i2 += +c3[0], r2 += +c3[1], this.moveTo(i2, r2);
          for (let e4 = 2; e4 < c3.length; e4 += 2) i2 += +c3[e4], r2 += +c3[e4 + 1], this.lineTo(i2, r2);
          break;
        case "L":
          Ke(e3, c3.length, 2);
          for (let e4 = 0; e4 < c3.length; e4 += 2) i2 = +c3[e4], r2 = +c3[e4 + 1], this.lineTo(i2, r2);
          break;
        case "l":
          Ke(e3, c3.length, 2);
          for (let e4 = 0; e4 < c3.length; e4 += 2) i2 += +c3[e4], r2 += +c3[e4 + 1], this.lineTo(i2, r2);
          break;
        case "H":
          qe2(e3, c3.length, 1);
          for (let e4 = 0; e4 < c3.length; ++e4) i2 = +c3[e4], this.lineTo(i2, r2);
          break;
        case "h":
          qe2(e3, c3.length, 1);
          for (let e4 = 0; e4 < c3.length; ++e4) i2 += +c3[e4], this.lineTo(i2, r2);
          break;
        case "V":
          qe2(e3, c3.length, 1);
          for (let e4 = 0; e4 < c3.length; ++e4) r2 = +c3[e4], this.lineTo(i2, r2);
          break;
        case "v":
          qe2(e3, c3.length, 1);
          for (let e4 = 0; e4 < c3.length; ++e4) r2 += +c3[e4], this.lineTo(i2, r2);
          break;
        case "C":
          Ke(e3, c3.length, 6);
          for (let e4 = 0; e4 < c3.length; e4 += 6) {
            const t = +c3[e4], n2 = +c3[e4 + 1];
            s2 = +c3[e4 + 2], a = +c3[e4 + 3], i2 = +c3[e4 + 4], r2 = +c3[e4 + 5], this.bezierCurveTo(t, n2, s2, a, i2, r2);
          }
          break;
        case "c":
          Ke(e3, c3.length, 6);
          for (let e4 = 0; e4 < c3.length; e4 += 6) {
            const t = +c3[e4] + i2, n2 = +c3[e4 + 1] + r2;
            s2 = +c3[e4 + 2] + i2, a = +c3[e4 + 3] + r2, i2 += +c3[e4 + 4], r2 += +c3[e4 + 5], this.bezierCurveTo(t, n2, s2, a, i2, r2);
          }
          break;
        case "S":
          Ke(e3, c3.length, 4), null !== s2 && null !== a || (s2 = i2, a = r2);
          for (let e4 = 0; e4 < c3.length; e4 += 4) {
            const t = 2 * i2 - s2, n2 = 2 * r2 - a;
            s2 = +c3[e4], a = +c3[e4 + 1], i2 = +c3[e4 + 2], r2 = +c3[e4 + 3], this.bezierCurveTo(t, n2, s2, a, i2, r2);
          }
          break;
        case "s":
          Ke(e3, c3.length, 4), null !== s2 && null !== a || (s2 = i2, a = r2);
          for (let e4 = 0; e4 < c3.length; e4 += 4) {
            const t = 2 * i2 - s2, n2 = 2 * r2 - a;
            s2 = +c3[e4] + i2, a = +c3[e4 + 1] + r2, i2 += +c3[e4 + 2], r2 += +c3[e4 + 3], this.bezierCurveTo(t, n2, s2, a, i2, r2);
          }
          break;
        case "Q":
          Ke(e3, c3.length, 4);
          for (let e4 = 0; e4 < c3.length; e4 += 4) n = +c3[e4], o = +c3[e4 + 1], i2 = +c3[e4 + 2], r2 = +c3[e4 + 3], this.quadraticCurveTo(n, o, i2, r2);
          break;
        case "q":
          Ke(e3, c3.length, 4);
          for (let e4 = 0; e4 < c3.length; e4 += 4) n = +c3[e4] + i2, o = +c3[e4 + 1] + r2, i2 += +c3[e4 + 2], r2 += +c3[e4 + 3], this.quadraticCurveTo(n, o, i2, r2);
          break;
        case "T":
          Ke(e3, c3.length, 2), null !== n && null !== o || (n = i2, o = r2);
          for (let e4 = 0; e4 < c3.length; e4 += 2) n = 2 * i2 - n, o = 2 * r2 - o, i2 = +c3[e4], r2 = +c3[e4 + 1], this.quadraticCurveTo(n, o, i2, r2);
          break;
        case "t":
          Ke(e3, c3.length, 2), null !== n && null !== o || (n = i2, o = r2);
          for (let e4 = 0; e4 < c3.length; e4 += 2) n = 2 * i2 - n, o = 2 * r2 - o, i2 += +c3[e4], r2 += +c3[e4 + 1], this.quadraticCurveTo(n, o, i2, r2);
          break;
        case "A":
        case "a":
          const l3 = "a" === e3;
          Ze2(c3), Ke(e3, c3.length, 7);
          for (let e4 = 0; e4 < c3.length; e4 += 7) {
            let s3 = +c3[e4 + 5], a2 = +c3[e4 + 6];
            l3 && (s3 += i2, a2 += r2);
            const n2 = Ne({
              px: i2,
              py: r2,
              rx: +c3[e4],
              ry: +c3[e4 + 1],
              xAxisRotation: +c3[e4 + 2],
              largeArcFlag: Je2(+c3[e4 + 3]),
              sweepFlag: Je2(+c3[e4 + 4]),
              cx: s3,
              cy: a2
            });
            w(n2, (e5) => {
              this.bezierCurveTo(e5.x1, e5.y1, e5.x2, e5.y2, e5.x, e5.y), i2 = e5.x, r2 = e5.y;
            });
          }
          break;
        case "Z":
        case "z":
          Xe(e3, c3.length, 0), this.closePath();
      }
    }
  }
  _runPath(e2) {
    e2.beginPath(), w(this._operations, (t) => {
      t.path(e2);
    });
  }
  _render(e2) {
    super._render(e2);
    const i2 = e2.layer.dirty, r2 = this._isInteractive(e2);
    if (i2 || r2) {
      const s2 = e2.layer.context, a = this._renderer._ghostLayer.context;
      let n;
      i2 && (s2.globalCompositeOperation = this.blendMode, s2.beginPath()), r2 && (a.beginPath(), n = this._getColorId()), w(this._operations, (e3) => {
        i2 && (e3.path(s2), e3.colorize(s2, void 0)), r2 && (e3.pathGhost(a), e3.colorizeGhost(a, n));
      });
    }
  }
  renderDetached(e2) {
    if (this.visible) {
      this._setMatrix(), e2.save();
      const i2 = this.mask;
      i2 && (i2._setMatrix(), i2._transform(e2, 1), i2._runPath(e2), e2.clip()), e2.globalAlpha = this.compoundAlpha * this.alpha, this._transform(e2, 1), this.filter && (e2.filter = this.filter), e2.globalCompositeOperation = this.blendMode, e2.beginPath(), w(this._operations, (t) => {
        t.path(e2), t.colorize(e2, void 0);
      }), e2.restore();
    }
  }
  _addBounds(e2) {
    this.visible && this.isMeasured && w(this._operations, (t) => {
      t.addBounds(e2);
    });
  }
};
var Et2 = class extends at2 {
  constructor(e2, t, i2) {
    super(e2), Object.defineProperty(this, "text", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    }), Object.defineProperty(this, "style", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    }), Object.defineProperty(this, "resolution", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 1
    }), Object.defineProperty(this, "textVisible", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: true
    }), Object.defineProperty(this, "_textInfo", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    }), Object.defineProperty(this, "_originalScale", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 1
    }), this.text = t, this.style = i2;
  }
  invalidateBounds() {
    super.invalidateBounds(), this._textInfo = void 0;
  }
  _shared(e2) {
    this.style.textAlign && (e2.textAlign = this.style.textAlign), this.style.direction && (e2.direction = this.style.direction), this.style.textBaseline && (e2.textBaseline = this.style.textBaseline);
  }
  _prerender(e2, t = false, i2 = false) {
    super._render(e2);
    const r2 = e2.layer.context, s2 = this._renderer._ghostLayer.context, a = this.style;
    let n = this._getFontStyle(void 0, i2);
    r2.font = n, this._isInteractive(e2) && !t && (s2.font = n), a.fill && (a.fill instanceof Gt ? r2.fillStyle = a.fill.toCSS(null != a.fillOpacity ? a.fillOpacity : 1) : r2.fillStyle = a.fill), a.shadowColor && (e2.layer.context.shadowColor = a.shadowColor.toCSS(a.shadowOpacity || 1)), a.shadowBlur && (e2.layer.context.shadowBlur = a.shadowBlur), a.shadowOffsetX && (e2.layer.context.shadowOffsetX = a.shadowOffsetX), a.shadowOffsetY && (e2.layer.context.shadowOffsetY = a.shadowOffsetY), this._shared(r2), this._isInteractive(e2) && !t && (s2.fillStyle = this._getColorId(), this._shared(s2));
  }
  _getFontStyle(e2, t = false) {
    const i2 = this.style;
    let r2 = [];
    return e2 && e2.fontVariant ? r2.push(e2.fontVariant) : i2.fontVariant && r2.push(i2.fontVariant), t || (e2 && e2.fontWeight ? r2.push(e2.fontWeight) : i2.fontWeight && r2.push(i2.fontWeight)), e2 && e2.fontStyle ? r2.push(e2.fontStyle) : i2.fontStyle && r2.push(i2.fontStyle), e2 && e2.fontSize ? (g(e2.fontSize) && (e2.fontSize = e2.fontSize + "px"), r2.push(e2.fontSize)) : i2.fontSize && (g(i2.fontSize) && (i2.fontSize = i2.fontSize + "px"), r2.push(i2.fontSize)), e2 && e2.fontFamily ? r2.push(e2.fontFamily) : i2.fontFamily ? r2.push(i2.fontFamily) : r2.length && r2.push("Arial"), r2.join(" ");
  }
  _render(e2) {
    if (this._textInfo || this._measure(e2), this.textVisible) {
      const i2 = this._isInteractive(e2), r2 = e2.layer.context, s2 = e2.layer.dirty, a = this._renderer._ghostLayer.context;
      r2.save(), a.save(), this._prerender(e2), w(this._textInfo, (n, o) => {
        w(n.textChunks, (t, o2) => {
          if (t.style && (r2.save(), a.save(), r2.font = t.style, this._isInteractive(e2) && (a.font = t.style)), t.fill && (r2.save(), r2.fillStyle = t.fill.toCSS()), s2 && r2.fillText(t.text, t.offsetX, n.offsetY + t.offsetY), "underline" == t.textDecoration || "line-through" == t.textDecoration) {
            let e3, i3 = 1, s3 = 1, a2 = t.height, o3 = t.offsetX;
            switch (this.style.textAlign) {
              case "right":
              case "end":
                o3 -= t.width;
                break;
              case "center":
                o3 -= t.width / 2;
            }
            if (t.style) {
              switch (qe.getTextStyle(t.style).fontWeight) {
                case "bolder":
                case "bold":
                case "700":
                case "800":
                case "900":
                  i3 = 2;
              }
            }
            a2 && (s3 = a2 / 20), e3 = "line-through" == t.textDecoration ? i3 + n.offsetY + t.offsetY - t.height / 2 : i3 + 1.5 * s3 + n.offsetY + t.offsetY, r2.save(), r2.beginPath(), t.fill ? r2.strokeStyle = t.fill.toCSS() : this.style.fill && this.style.fill instanceof Gt && (r2.strokeStyle = this.style.fill.toCSS()), r2.lineWidth = i3 * s3, r2.moveTo(o3, e3), r2.lineTo(o3 + t.width, e3), r2.stroke(), r2.restore();
          }
          i2 && this.interactive && a.fillText(t.text, t.offsetX, n.offsetY + t.offsetY), t.fill && r2.restore(), t.style && (r2.restore(), a.restore());
        });
      }), r2.restore(), a.restore();
    }
  }
  _addBounds(e2) {
    if (this.visible && this.isMeasured) {
      const t = this._measure({
        inactive: this.inactive,
        layer: this.getLayer()
      });
      ot(e2, {
        x: t.left,
        y: t.top
      }), ot(e2, {
        x: t.right,
        y: t.bottom
      });
    }
  }
  _ignoreFontWeight() {
    return /apple/i.test(navigator.vendor);
  }
  _measure(e2) {
    const i2 = e2.layer.context, r2 = this._renderer._ghostLayer.context, s2 = "rtl" == this.style.direction;
    this._textInfo = [];
    const a = this.style.oversizedBehavior, n = this.style.maxWidth, o = g(n) && "truncate" == a, l = g(n) && ("wrap" == a || "wrap-no-break" == a);
    i2.save(), r2.save(), this._prerender(e2, true, this._ignoreFontWeight());
    const h2 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 ", u2 = this.text.toString().replace(/\r/g, "").split(/\n/);
    let d2, f2 = true, g2 = 0, m2 = 0, p = 0;
    w(u2, (e3, t) => {
      let s3;
      for (s3 = "" == e3 ? [{
        type: "value",
        text: ""
      }] : qe.chunk(e3, false, this.style.ignoreFormatting); s3.length > 0; ) {
        let e4 = {
          offsetY: p,
          ascent: 0,
          width: 0,
          height: 0,
          left: 0,
          right: 0,
          textChunks: []
        };
        const t2 = this._measureText(h2, i2), a2 = t2.actualBoundingBoxAscent + t2.actualBoundingBoxDescent;
        let u3;
        e4.height = a2, e4.ascent = t2.actualBoundingBoxAscent;
        let b2, _3, y2, v = this.style.textDecoration, w2 = false, x2 = true, O = [];
        D(s3, (t3, a3) => {
          if ("format" == t3.type) {
            if ("[/]" == t3.text) f2 || (i2.restore(), r2.restore(), f2 = true), b2 = void 0, d2 = void 0, _3 = void 0, v = this.style.textDecoration, y2 = void 0, u3 = t3.text;
            else {
              f2 || (i2.restore(), r2.restore());
              let s4 = qe.getTextStyle(t3.text);
              const a4 = this._getFontStyle(s4);
              i2.save(), r2.save(), i2.font = a4, d2 = a4, u3 = t3.text, s4.textDecoration && (v = s4.textDecoration), s4.fill && (b2 = s4.fill), s4.width && (_3 = h(s4.width)), s4.verticalAlign && (y2 = s4.verticalAlign), f2 = false;
              const n2 = this._measureText(h2, i2), o2 = n2.actualBoundingBoxAscent + n2.actualBoundingBoxDescent;
              o2 > e4.height && (e4.height = o2), n2.actualBoundingBoxAscent > e4.ascent && (e4.ascent = n2.actualBoundingBoxAscent);
            }
          } else if ("value" == t3.type && !w2) {
            const r3 = this._measureText(t3.text, i2);
            let h3 = r3.actualBoundingBoxLeft + r3.actualBoundingBoxRight;
            if (o) {
              let r4 = x2 || this.style.breakWords || false;
              const s4 = this.style.ellipsis || "", a4 = this._measureText(s4, i2), o2 = a4.actualBoundingBoxLeft + a4.actualBoundingBoxRight;
              if (e4.width + h3 > n) {
                const a5 = n - e4.width - o2;
                t3.text = this._truncateText(i2, t3.text, a5, r4), t3.text += s4, w2 = true;
              }
            } else if (l && e4.width + h3 > n) {
              const r4 = n - e4.width, o2 = this._truncateText(i2, t3.text, r4, false, x2 && "wrap-no-break" != this.style.oversizedBehavior);
              if ("" == o2) return this.textVisible = true, false;
              O = s3.slice(a3 + 1), bt(o2) != bt(t3.text) && (O.unshift({
                type: "value",
                text: t3.text.substr(o2.length)
              }), u3 && O.unshift({
                type: "format",
                text: u3
              })), t3.text = bt(o2), s3 = [], w2 = true;
            }
            let c3 = 1, f3 = 1;
            if (d2 && _3 && _3 > h3) {
              const e5 = h3 / _3;
              switch (this.style.textAlign) {
                case "right":
                case "end":
                  c3 = e5;
                  break;
                case "center":
                  c3 = e5, f3 = e5;
                  break;
                default:
                  f3 = e5;
              }
              h3 = _3;
            }
            const g3 = r3.actualBoundingBoxAscent + r3.actualBoundingBoxDescent;
            g3 > e4.height && (e4.height = g3), r3.actualBoundingBoxAscent > e4.ascent && (e4.ascent = r3.actualBoundingBoxAscent), e4.width += h3, e4.left += r3.actualBoundingBoxLeft / c3, e4.right += r3.actualBoundingBoxRight / f3, e4.textChunks.push({
              style: d2,
              fill: b2,
              text: t3.text,
              width: h3,
              height: g3,
              left: r3.actualBoundingBoxLeft,
              right: r3.actualBoundingBoxRight,
              ascent: r3.actualBoundingBoxAscent,
              offsetX: 0,
              offsetY: 0,
              textDecoration: v,
              verticalAlign: y2
            }), x2 = false;
          }
          return true;
        }), this.style.lineHeight instanceof e ? (e4.height *= this.style.lineHeight.value, e4.ascent *= this.style.lineHeight.value) : (e4.height *= this.style.lineHeight || 1.2, e4.ascent *= this.style.lineHeight || 1.2), g2 < e4.left && (g2 = e4.left), m2 < e4.right && (m2 = e4.right), this._textInfo.push(e4), p += e4.height, s3 = O || [];
      }
    }), f2 || (i2.restore(), r2.restore()), w(this._textInfo, (e3, i3) => {
      let r3 = 0;
      w(e3.textChunks, (t) => {
        if (t.offsetX = r3 + t.left - e3.left, t.offsetY += e3.height - e3.height * (this.style.baselineRatio || 0.19), r3 += t.width, t.verticalAlign) switch (t.verticalAlign) {
          case "super":
            t.offsetY -= e3.height / 2 - t.height / 2;
            break;
          case "sub":
            t.offsetY += t.height / 2;
        }
      });
    });
    const _2 = {
      left: s2 ? -m2 : -g2,
      top: 0,
      right: s2 ? g2 : m2,
      bottom: p
    };
    if ("none" !== a) {
      const e3 = this._fitRatio(_2);
      if (e3 < 1) {
        if ("fit" == a) g(this.style.minScale) && e3 < this.style.minScale ? (this.textVisible = false, _2.left = 0, _2.top = 0, _2.right = 0, _2.bottom = 0) : (this._originalScale && 1 != this._originalScale || (this._originalScale = this.scale), this.scale = e3, this.textVisible = true);
        else if ("hide" == a) this.textVisible = false, _2.left = 0, _2.top = 0, _2.right = 0, _2.bottom = 0;
        else {
          switch (this.style.textAlign) {
            case "right":
            case "end":
              _2.left = -n, _2.right = 0;
              break;
            case "center":
              _2.left = -n / 2, _2.right = n / 2;
              break;
            default:
              _2.left = 0, _2.right = n;
          }
          this.scale = this._originalScale || 1, this._originalScale = void 0, this.textVisible = true;
        }
      } else this.scale = this._originalScale || 1, this._originalScale = void 0, this.textVisible = true;
    }
    return i2.restore(), r2.restore(), _2;
  }
  _fitRatio(e2) {
    const t = this.style.maxWidth, i2 = this.style.maxHeight;
    if (!g(t) && !g(i2)) return 1;
    const r2 = e2.right - e2.left, s2 = e2.bottom - e2.top;
    return Math.min(t / r2 || 1, i2 / s2 || 1);
  }
  _truncateText(e2, t, i2, r2 = false, s2 = true) {
    let a;
    do {
      if (r2) t = t.slice(0, -1);
      else {
        let e3 = t.replace(/[^,;:!?\\\/\s​]+[,;:!?\\\/\s​]*$/g, "");
        if ("" != e3 && e3 !== t || !s2) {
          if ("" == e3) return t;
          t = e3;
        } else r2 = true;
      }
      const i3 = this._measureText(t, e2);
      a = i3.actualBoundingBoxLeft + i3.actualBoundingBoxRight;
    } while (a > i2 && "" != t);
    return t;
  }
  _measureText(e2, t) {
    let i2 = t.measureText(e2), r2 = {};
    if (null == i2.actualBoundingBoxAscent) {
      const t2 = document.createElement("div");
      t2.innerText = e2, t2.style.visibility = "hidden", t2.style.position = "absolute", t2.style.top = "-1000000px;", t2.style.fontFamily = this.style.fontFamily || "", t2.style.fontSize = this.style.fontSize + "", document.body.appendChild(t2);
      const s3 = t2.getBoundingClientRect();
      document.body.removeChild(t2);
      const a = s3.height, n = i2.width;
      r2 = {
        actualBoundingBoxAscent: a,
        actualBoundingBoxDescent: 0,
        actualBoundingBoxLeft: 0,
        actualBoundingBoxRight: n,
        fontBoundingBoxAscent: a,
        fontBoundingBoxDescent: 0,
        width: n
      };
    } else r2 = {
      actualBoundingBoxAscent: i2.actualBoundingBoxAscent,
      actualBoundingBoxDescent: i2.actualBoundingBoxDescent,
      actualBoundingBoxLeft: i2.actualBoundingBoxLeft,
      actualBoundingBoxRight: i2.actualBoundingBoxRight,
      fontBoundingBoxAscent: i2.actualBoundingBoxAscent,
      fontBoundingBoxDescent: i2.actualBoundingBoxDescent,
      width: i2.width
    };
    const s2 = i2.width;
    switch (this.style.textAlign) {
      case "right":
      case "end":
        r2.actualBoundingBoxLeft = s2, r2.actualBoundingBoxRight = 0;
        break;
      case "center":
        r2.actualBoundingBoxLeft = s2 / 2, r2.actualBoundingBoxRight = s2 / 2;
        break;
      default:
        r2.actualBoundingBoxLeft = 0, r2.actualBoundingBoxRight = s2;
    }
    return r2;
  }
};
var Tt2 = class {
  constructor() {
    Object.defineProperty(this, "fill", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    }), Object.defineProperty(this, "fillOpacity", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    }), Object.defineProperty(this, "textAlign", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    }), Object.defineProperty(this, "fontFamily", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    }), Object.defineProperty(this, "fontSize", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    }), Object.defineProperty(this, "fontWeight", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    }), Object.defineProperty(this, "fontStyle", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    }), Object.defineProperty(this, "fontVariant", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    }), Object.defineProperty(this, "textDecoration", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    }), Object.defineProperty(this, "shadowColor", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    }), Object.defineProperty(this, "shadowBlur", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    }), Object.defineProperty(this, "shadowOffsetX", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    }), Object.defineProperty(this, "shadowOffsetY", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    }), Object.defineProperty(this, "shadowOpacity", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    }), Object.defineProperty(this, "lineHeight", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: i(120)
    }), Object.defineProperty(this, "baselineRatio", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0.19
    }), Object.defineProperty(this, "direction", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    }), Object.defineProperty(this, "textBaseline", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    }), Object.defineProperty(this, "oversizedBehavior", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "none"
    }), Object.defineProperty(this, "breakWords", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    }), Object.defineProperty(this, "ellipsis", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "…"
    }), Object.defineProperty(this, "maxWidth", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    }), Object.defineProperty(this, "maxHeight", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    }), Object.defineProperty(this, "minScale", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    }), Object.defineProperty(this, "ignoreFormatting", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
  }
};
var Bt = class extends Et2 {
  constructor() {
    super(...arguments), Object.defineProperty(this, "textType", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "circular"
    }), Object.defineProperty(this, "radius", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    }), Object.defineProperty(this, "startAngle", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    }), Object.defineProperty(this, "inside", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    }), Object.defineProperty(this, "orientation", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "auto"
    }), Object.defineProperty(this, "kerning", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    }), Object.defineProperty(this, "_textReversed", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
  }
  _render(e2) {
    if ("circular" === this.textType) this._renderCircular(e2);
    else super._render(e2);
  }
  _renderCircular(e2) {
    if (this.textVisible) {
      this._prerender(e2);
      const i2 = this._isInteractive(e2), r2 = e2.layer.context, s2 = e2.layer.dirty, a = this._renderer._ghostLayer.context;
      r2.save(), i2 && a.save(), this._textInfo || this._measure(e2);
      let n = this.radius || 0, o = this.startAngle || 0, l = 0, h2 = this.orientation, u2 = "auto" == h2 ? "auto" : "inward" == h2;
      const c3 = this.inside, d2 = this.style.textAlign || "left", b2 = this.kerning || 0;
      let f2 = "left" == d2 ? 1 : -1;
      const g2 = !this._textReversed;
      if ("auto" == u2) {
        let e3 = 0, i3 = 0;
        w(this._textInfo, (t, i4) => {
          const r3 = o + t.width / (n - t.height) / 2 * -f2;
          r3 > e3 && (e3 = r3);
        }), i3 = "left" == d2 ? (e3 + l / 2) * he : "right" == d2 ? (e3 - l / 2) * he : o * he, i3 = ge(i3), u2 = i3 >= 270 || i3 <= 90;
      }
      1 == u2 && g2 && (this._textInfo.reverse(), this._textReversed = true), w(this._textInfo, (e3, h3) => {
        const m2 = e3.height;
        c3 || (n += m2), (-1 == f2 && u2 || 1 == f2 && !u2) && g2 && e3.textChunks.reverse();
        let p = o;
        l = 0, "center" == d2 && (p += e3.width / (n - m2) / 2 * -f2, l = p - o), p += Math.PI * (u2 ? 0 : 1), r2.save(), i2 && a.save(), r2.rotate(p), i2 && a.rotate(p);
        let _2 = 0;
        w(e3.textChunks, (e4, t) => {
          const o2 = e4.text, l2 = e4.width;
          _2 = l2 / 2 / (n - m2) * f2, r2.rotate(_2), i2 && a.rotate(_2), e4.style && (r2.save(), a.save(), r2.font = e4.style, i2 && (a.font = e4.style)), e4.fill && (r2.save(), r2.fillStyle = e4.fill.toCSS()), r2.textBaseline = "middle", r2.textAlign = "center", i2 && (a.textBaseline = "middle", a.textAlign = "center"), s2 && r2.fillText(o2, 0, (u2 ? 1 : -1) * (0 - n + m2 / 2)), i2 && a.fillText(o2, 0, (u2 ? 1 : -1) * (0 - n + m2 / 2)), e4.fill && r2.restore(), e4.style && (r2.restore(), a.restore()), _2 = (l2 / 2 + b2) / (n - m2) * f2, r2.rotate(_2), i2 && a.rotate(_2);
        }), r2.restore(), i2 && a.restore(), c3 && (n -= m2);
      }), r2.restore(), i2 && a.restore();
    }
  }
  _measure(e2) {
    return "circular" === this.textType ? this._measureCircular(e2) : super._measure(e2);
  }
  _measureCircular(e2) {
    const i2 = e2.layer.context, r2 = this._renderer._ghostLayer.context, s2 = "rtl" == this.style.direction, a = this.style.oversizedBehavior, n = this.style.maxWidth, o = g(n) && "truncate" == a, l = this.style.ellipsis || "";
    let h2;
    this.textVisible = true, this._textInfo = [], this._textReversed = false, i2.save(), r2.save(), this._prerender(e2, true);
    const u2 = this.text.toString().replace(/\r/g, "").split(/\n/);
    let d2 = true, f2 = 0, g2 = 0;
    return w(u2, (e3, a2) => {
      let u3, b2, m2, p = qe.chunk(e3, false, this.style.ignoreFormatting), _2 = {
        offsetY: g2,
        ascent: 0,
        width: 0,
        height: 0,
        left: 0,
        right: 0,
        textChunks: []
      };
      w(p, (e4, t) => {
        if ("format" == e4.type) {
          if ("[/]" == e4.text) d2 || (i2.restore(), r2.restore(), d2 = true), b2 = void 0, u3 = void 0, m2 = void 0;
          else {
            let t2 = qe.getTextStyle(e4.text);
            const s3 = this._getFontStyle(t2);
            i2.save(), r2.save(), i2.font = s3, u3 = s3, t2.fill && (b2 = t2.fill), t2.width && (m2 = h(t2.width)), d2 = false;
          }
          o && (h2 = this._measureText(l, i2));
        } else if ("value" == e4.type) {
          let t2 = e4.text.match(/./gu) || [];
          s2 && (t2 = Dt(e4.text), t2.reverse());
          for (let e5 = 0; e5 < t2.length; e5++) {
            const r3 = t2[e5], s3 = this._measureText(r3, i2);
            let a3 = s3.width;
            u3 && m2 && m2 > a3 && (a3 = m2);
            const c3 = s3.actualBoundingBoxAscent + s3.actualBoundingBoxDescent;
            if (c3 > _2.height && (_2.height = c3), s3.actualBoundingBoxAscent > _2.ascent && (_2.ascent = s3.actualBoundingBoxAscent), f2 += a3, o) {
              h2 || (h2 = this._measureText(l, i2));
              const e6 = h2.actualBoundingBoxLeft + h2.actualBoundingBoxRight;
              if (f2 + e6 > n) {
                1 == _2.textChunks.length ? this.textVisible = false : (_2.width += e6, _2.left += h2.actualBoundingBoxLeft, _2.right += h2.actualBoundingBoxRight, _2.textChunks.push({
                  style: u3,
                  fill: b2,
                  text: l,
                  width: e6,
                  height: c3 + h2.actualBoundingBoxDescent,
                  left: h2.actualBoundingBoxLeft,
                  right: h2.actualBoundingBoxRight,
                  ascent: h2.actualBoundingBoxAscent,
                  offsetX: 0,
                  offsetY: c3,
                  textDecoration: void 0
                }));
                break;
              }
            }
            _2.width += a3, _2.left += s3.actualBoundingBoxLeft, _2.right += s3.actualBoundingBoxRight, _2.textChunks.push({
              style: u3,
              fill: b2,
              text: r3,
              width: a3,
              height: c3 + s3.actualBoundingBoxDescent,
              left: s3.actualBoundingBoxLeft,
              right: s3.actualBoundingBoxRight,
              ascent: s3.actualBoundingBoxAscent,
              offsetX: 0,
              offsetY: c3,
              textDecoration: void 0
            });
          }
        }
      }), this.style.lineHeight instanceof e ? _2.height *= this.style.lineHeight.value : _2.height *= this.style.lineHeight || 1.2, this._textInfo.push(_2), g2 += _2.height;
    }), d2 || (i2.restore(), r2.restore()), "hide" == a && f2 > n && (this.textVisible = false), w(this._textInfo, (e3) => {
      w(e3.textChunks, (t) => {
        t.offsetY += Math.round((e3.height - t.height + (e3.ascent - t.ascent)) / 2);
      });
    }), i2.restore(), r2.restore(), {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0
    };
  }
};
var Ct2 = class extends at2 {
  constructor(e2, t) {
    super(e2), Object.defineProperty(this, "width", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    }), Object.defineProperty(this, "height", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    }), Object.defineProperty(this, "image", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    }), Object.defineProperty(this, "tainted", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    }), Object.defineProperty(this, "shadowColor", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    }), Object.defineProperty(this, "shadowBlur", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    }), Object.defineProperty(this, "shadowOffsetX", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    }), Object.defineProperty(this, "shadowOffsetY", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    }), Object.defineProperty(this, "shadowOpacity", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    }), Object.defineProperty(this, "_imageMask", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    }), this.image = t;
  }
  _dispose() {
    super._dispose(), this._imageMask && it2(this._imageMask);
  }
  getLocalBounds() {
    if (!this._localBounds) {
      let e2 = 0, t = 0;
      this.width && (e2 = this.width), this.height && (t = this.height), this._localBounds = {
        left: 0,
        top: 0,
        right: e2,
        bottom: t
      }, this._addBounds(this._localBounds);
    }
    return this._localBounds;
  }
  _render(e2) {
    if (super._render(e2), this.image) {
      if (void 0 === this.tainted && (this.tainted = tt2(this.image), e2.layer.tainted = true), this.tainted && this._renderer._omitTainted) return;
      if (e2.layer.dirty) {
        this.shadowColor && (e2.layer.context.shadowColor = this.shadowColor.toCSS(this.shadowOpacity || 1)), this.shadowBlur && (e2.layer.context.shadowBlur = this.shadowBlur), this.shadowOffsetX && (e2.layer.context.shadowOffsetX = this.shadowOffsetX), this.shadowOffsetY && (e2.layer.context.shadowOffsetY = this.shadowOffsetY);
        const t = this.width || this.image.naturalWidth, i2 = this.height || this.image.naturalHeight;
        e2.layer.context.drawImage(this.image, 0, 0, t, i2);
      }
      if (this.interactive && this._isInteractive(e2)) {
        const e3 = this._getMask(this.image);
        this._renderer._ghostLayer.context.drawImage(e3, 0, 0);
      }
    }
  }
  clear() {
    super.clear(), this.image = void 0, this._imageMask = void 0;
  }
  _getMask(e2) {
    if (void 0 === this._imageMask) {
      const t = this.width || e2.naturalWidth, i2 = this.height || e2.naturalHeight, r2 = document.createElement("canvas");
      r2.width = t, r2.height = i2;
      const s2 = r2.getContext("2d");
      s2.imageSmoothingEnabled = false, s2.fillStyle = this._getColorId(), s2.fillRect(0, 0, t, i2), tt2(e2) || (s2.globalCompositeOperation = "destination-in", s2.drawImage(e2, 0, 0, t, i2)), this._imageMask = r2;
    }
    return this._imageMask;
  }
};
var Dt2 = class {
  constructor(e2, t, i2, r2) {
    Object.defineProperty(this, "event", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: e2
    }), Object.defineProperty(this, "originalPoint", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: t
    }), Object.defineProperty(this, "point", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: i2
    }), Object.defineProperty(this, "bbox", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: r2
    }), Object.defineProperty(this, "id", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    }), Object.defineProperty(this, "simulated", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    }), Object.defineProperty(this, "native", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: true
    }), q("touchevents") && e2 instanceof Touch ? this.id = e2.identifier : this.id = null;
  }
};
var At = class extends G {
  constructor(i2) {
    if (super(), Object.defineProperty(this, "view", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: document.createElement("div")
    }), Object.defineProperty(this, "_layerDom", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: document.createElement("div")
    }), Object.defineProperty(this, "layers", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    }), Object.defineProperty(this, "_dirtyLayers", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    }), Object.defineProperty(this, "defaultLayer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.getLayer(0)
    }), Object.defineProperty(this, "_ghostLayer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: new Lt()
    }), Object.defineProperty(this, "_patternCanvas", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: document.createElement("canvas")
    }), Object.defineProperty(this, "_patternContext", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this._patternCanvas.getContext("2d")
    }), Object.defineProperty(this, "_realWidth", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    }), Object.defineProperty(this, "_realHeight", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    }), Object.defineProperty(this, "_calculatedWidth", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    }), Object.defineProperty(this, "_calculatedHeight", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    }), Object.defineProperty(this, "resolution", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    }), Object.defineProperty(this, "interactionsEnabled", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: true
    }), Object.defineProperty(this, "_listeners", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    }), Object.defineProperty(this, "_events", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    }), Object.defineProperty(this, "_colorId", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    }), Object.defineProperty(this, "_colorMap", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    }), Object.defineProperty(this, "_forceInteractive", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    }), Object.defineProperty(this, "_omitTainted", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    }), Object.defineProperty(this, "_hovering", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: /* @__PURE__ */ new Set()
    }), Object.defineProperty(this, "_dragging", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    }), Object.defineProperty(this, "_mousedown", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    }), Object.defineProperty(this, "_lastPointerMoveEvent", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    }), Object.defineProperty(this, "tapToActivate", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    }), Object.defineProperty(this, "tapToActivateTimeout", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 3e3
    }), Object.defineProperty(this, "_touchActive", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    }), Object.defineProperty(this, "_touchActiveTimeout", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    }), this.resolution = i2 ?? window.devicePixelRatio, this.view.style.position = "absolute", this.view.setAttribute("aria-hidden", "true"), this.view.appendChild(this._layerDom), this._disposers.push(new z(() => {
      W(this._events, (e2, t) => {
        t.disposer.dispose();
      }), w(this.layers, (e2) => {
        it2(e2.view), e2.exportableView && it2(e2.exportableView);
      }), it2(this._ghostLayer.view), it2(this._patternCanvas);
    })), this._disposers.push(J(() => {
      null == i2 && (this.resolution = window.devicePixelRatio);
    })), q("touchevents")) {
      const e2 = (e3) => {
        0 !== this._dragging.length && D(this._dragging, (t) => !t.value.shouldCancelTouch() || (e3.preventDefault(), false)), this._touchActiveTimeout && this._delayTouchDeactivate();
      };
      this._disposers.push(Z(window, "touchstart", e2, {
        passive: false
      })), this._disposers.push(Z(this.view, "touchstart", e2, {
        passive: false
      })), this._disposers.push(Z(this.view, "touchmove", () => {
        this._touchActiveTimeout && this._delayTouchDeactivate();
      }, {
        passive: true
      })), this._disposers.push(Z(window, "click", (e3) => {
        this._touchActive = false;
      }, {
        passive: true
      })), this._disposers.push(Z(this.view, "click", (e3) => {
        window.setTimeout(() => {
          this._touchActive = true, this._delayTouchDeactivate();
        }, 100);
      }, {
        passive: true
      }));
    }
    q("wheelevents") && this._disposers.push(Z(this.view, "wheel", (e2) => {
      let t = false;
      this._hovering.forEach((e3) => {
        if (e3.wheelable) return t = true, false;
      }), t && e2.preventDefault();
    }, {
      passive: false
    }));
  }
  resetImageArray() {
    this._ghostLayer.imageArray = void 0;
  }
  _delayTouchDeactivate() {
    this._touchActiveTimeout && clearTimeout(this._touchActiveTimeout), this.tapToActivateTimeout > 0 && (this._touchActiveTimeout = window.setTimeout(() => {
      this._touchActive = false;
    }, this.tapToActivateTimeout));
  }
  get debugGhostView() {
    return !!this._ghostLayer.view.parentNode;
  }
  set debugGhostView(e2) {
    e2 ? this._ghostLayer.view.parentNode || this.view.appendChild(this._ghostLayer.view) : this._ghostLayer.view.parentNode && this._ghostLayer.view.parentNode.removeChild(this._ghostLayer.view);
  }
  createLinearGradient(e2, t, i2, r2) {
    return this.defaultLayer.context.createLinearGradient(e2, t, i2, r2);
  }
  createRadialGradient(e2, t, i2, r2, s2, a) {
    return this.defaultLayer.context.createRadialGradient(e2, t, i2, r2, s2, a);
  }
  createPattern(e2, t, i2, r2, s2) {
    return this._patternCanvas.width = r2, this._patternCanvas.height = s2, this._patternContext.clearRect(0, 0, r2, s2), t.renderDetached(this._patternContext), e2.renderDetached(this._patternContext), this._patternContext.createPattern(this._patternCanvas, i2);
  }
  makeContainer() {
    return new nt2(this);
  }
  makeGraphics() {
    return new jt2(this);
  }
  makeText(e2, t) {
    return new Et2(this, e2, t);
  }
  makeTextStyle() {
    return new Tt2();
  }
  makeRadialText(e2, t) {
    return new Bt(this, e2, t);
  }
  makePicture(e2) {
    return new Ct2(this, e2);
  }
  resizeLayer(e2) {
    e2.resize(this._calculatedWidth, this._calculatedHeight, this._calculatedWidth, this._calculatedHeight, this.resolution);
  }
  resizeGhost() {
    this._ghostLayer.resize(this._calculatedWidth, this._calculatedHeight, this._calculatedWidth, this._calculatedHeight, this.resolution);
  }
  resize(e2, i2, r2, s2) {
    this._realWidth = e2, this._realHeight = i2, this._calculatedWidth = r2, this._calculatedHeight = s2, w(this.layers, (e3) => {
      e3 && (e3.dirty = true, this.resizeLayer(e3));
    }), this.resizeGhost(), this.view.style.width = r2 + "px", this.view.style.height = s2 + "px";
  }
  createDetachedLayer(e2 = false) {
    const t = document.createElement("canvas"), i2 = t.getContext("2d", {
      willReadFrequently: e2
    }), r2 = new zt2(t, i2);
    return t.style.position = "absolute", t.style.top = "0px", t.style.left = "0px", r2;
  }
  getLayerByOrder(e2) {
    const t = this.layers, i2 = t.length;
    for (let r2 = 0; r2 < i2; r2++) {
      const i3 = t[r2];
      if (i3.order == e2) return i3;
    }
  }
  getLayer(e2, t = true) {
    let i2 = this.getLayerByOrder(e2);
    if (i2) return i2;
    const r2 = this.createDetachedLayer(99 == e2);
    r2.order = e2, r2.visible = t, r2.view.className = "am5-layer-" + e2, r2.visible && this.resizeLayer(r2);
    const s2 = this.layers;
    s2.push(r2), s2.sort((e3, t2) => e3.order > t2.order ? 1 : e3.order < t2.order ? -1 : 0);
    const a = s2.length;
    let n;
    for (let o = b(s2, r2) + 1; o < a; o++) if (s2[o].visible) {
      n = s2[o];
      break;
    }
    return r2.visible && (void 0 === n ? this._layerDom.appendChild(r2.view) : this._layerDom.insertBefore(r2.view, n.view)), r2;
  }
  render(e2) {
    if (this._dirtyLayers.length = 0, w(this.layers, (e3) => {
      e3 && e3.dirty && e3.visible && (this._dirtyLayers.push(e3), e3.clear());
    }), this._ghostLayer.clear(), e2.render({
      inactive: null,
      layer: this.defaultLayer
    }), this._ghostLayer.context.restore(), w(this.layers, (e3) => {
      if (e3) {
        const t = e3.context;
        t.beginPath(), t.moveTo(0, 0), t.stroke();
      }
    }), w(this._dirtyLayers, (e3) => {
      e3.context.restore(), e3.dirty = false;
    }), this._hovering.size && this._lastPointerMoveEvent) {
      const {
        events: e3,
        target: i2,
        native: r2
      } = this._lastPointerMoveEvent;
      w(e3, (e4) => {
        this._dispatchGlobalMousemove(e4, i2, r2);
      });
    }
  }
  paintId(e2) {
    const t = $e2(++this._colorId), i2 = Gt.fromHex(t).toCSS();
    return this._colorMap[i2] = e2, i2;
  }
  _removeObject(e2) {
    void 0 !== e2._colorId && delete this._colorMap[e2._colorId];
  }
  _adjustBoundingBox(e2) {
    const t = this._ghostLayer.margin;
    return new DOMRect(-t.left, -t.top, e2.width + t.left + t.right, e2.height + t.top + t.bottom);
  }
  getEvent(e2, t = true) {
    const i2 = this.view.getBoundingClientRect(), r2 = e2.clientX || 0, s2 = e2.clientY || 0, a = this._calculatedWidth / this._realWidth, n = this._calculatedHeight / this._realHeight, o = {
      x: r2 - i2.left,
      y: s2 - i2.top
    }, l = {
      x: (r2 - (t ? i2.left : 0)) * a,
      y: (s2 - (t ? i2.top : 0)) * n
    };
    return new Dt2(e2, o, l, this._adjustBoundingBox(i2));
  }
  _getHitTarget(e2, t, i2) {
    if (0 === t.width || 0 === t.height || e2.x < t.left || e2.x > t.right || e2.y < t.top || e2.y > t.bottom) return;
    if (!i2 || !this._layerDom.contains(i2)) return;
    const r2 = this._ghostLayer.getImageData(e2, t);
    if (0 === r2.data[0] && 0 === r2.data[1] && 0 === r2.data[2]) return false;
    const s2 = Gt.fromRGB(r2.data[0], r2.data[1], r2.data[2]).toCSS();
    return this._colorMap[s2];
  }
  getObjectAtPoint(e2) {
    const t = this._ghostLayer.getImageArray(e2);
    if (0 === t[0] && 0 === t[1] && 0 === t[2]) return;
    const i2 = Gt.fromRGB(t[0], t[1], t[2]).toCSS();
    return this._colorMap[i2];
  }
  _withEvents(e2, t) {
    const r2 = this._events[e2];
    if (void 0 !== r2) {
      r2.dispatching = true;
      try {
        t(r2);
      } finally {
        r2.dispatching = false, r2.cleanup && (r2.cleanup = false, I(r2.callbacks, (e3) => !e3.disposed), 0 === r2.callbacks.length && (r2.disposer.dispose(), delete this._events[e2]));
      }
    }
  }
  _dispatchEventAll(e2, i2) {
    this.interactionsEnabled && this._withEvents(e2, (e3) => {
      w(e3.callbacks, (e4) => {
        e4.disposed || e4.callback.call(e4.context, i2);
      });
    });
  }
  _dispatchEvent(e2, i2, r2) {
    if (!this.interactionsEnabled) return false;
    let s2 = false;
    return this._withEvents(e2, (e3) => {
      w(e3.callbacks, (e4) => {
        e4.disposed || e4.object !== i2 || (e4.callback.call(e4.context, r2), s2 = true);
      });
    }), s2;
  }
  _dispatchMousedown(e2, t) {
    const i2 = e2.button;
    if (0 != i2 && 2 != i2 && 1 != i2 && void 0 !== i2) return;
    const r2 = this.getEvent(e2), s2 = this._getHitTarget(r2.originalPoint, r2.bbox, t);
    if (s2) {
      const e3 = r2.id;
      let t2 = false;
      Qe2(s2, (i3) => {
        const s3 = {
          id: e3,
          value: i3
        };
        if (this._mousedown.push(s3), !t2 && this._dispatchEvent("pointerdown", i3, r2)) {
          t2 = true;
          this._dragging.some((t3) => t3.value === i3 && t3.id === e3) || this._dragging.push(s3);
        }
        return true;
      });
    }
  }
  _dispatchGlobalMousemove(e2, t, i2) {
    const r2 = this.getEvent(e2), s2 = this._getHitTarget(r2.originalPoint, r2.bbox, t);
    r2.native = i2, s2 ? (this._hovering.forEach((e3) => {
      e3.contains(s2) || (this._hovering.delete(e3), e3.cursorOverStyle && rt(document.body, "cursor", e3._replacedCursorStyle), this._dispatchEvent("pointerout", e3, r2));
    }), r2.native && Qe2(s2, (e3) => (this._hovering.has(e3) || (this._hovering.add(e3), e3.cursorOverStyle && (e3._replacedCursorStyle = at(document.body, "cursor"), rt(document.body, "cursor", e3.cursorOverStyle)), this._dispatchEvent("pointerover", e3, r2)), true))) : (this._hovering.forEach((e3) => {
      e3.cursorOverStyle && rt(document.body, "cursor", e3._replacedCursorStyle), this._dispatchEvent("pointerout", e3, r2);
    }), this._hovering.clear()), this._dispatchEventAll("globalpointermove", r2);
  }
  removeHovering(e2) {
    this._hovering.delete(e2), e2.cursorOverStyle && rt(document.body, "cursor", e2._replacedCursorStyle);
  }
  _dispatchGlobalMouseup(e2, t) {
    const i2 = this.getEvent(e2);
    i2.native = t, this._dispatchEventAll("globalpointerup", i2);
  }
  _dispatchDragMove(e2) {
    if (0 !== this._dragging.length) {
      const t = this.getEvent(e2), i2 = t.id;
      this._dragging.forEach((e3) => {
        e3.id === i2 && this._dispatchEvent("pointermove", e3.value, t);
      });
    }
  }
  _dispatchDragEnd(e2, t) {
    const i2 = e2.button;
    let r2;
    if (0 == i2 || void 0 === i2) r2 = "click";
    else if (2 == i2) r2 = "rightclick";
    else {
      if (1 != i2) return;
      r2 = "middleclick";
    }
    const s2 = this.getEvent(e2), a = s2.id;
    if (0 !== this._mousedown.length) {
      const e3 = this._getHitTarget(s2.originalPoint, s2.bbox, t);
      e3 && this._mousedown.forEach((t2) => {
        t2.id === a && t2.value.contains(e3) && this._dispatchEvent(r2, t2.value, s2);
      }), this._mousedown.length = 0;
    }
    0 !== this._dragging.length && (this._dragging.forEach((e3) => {
      e3.id === a && this._dispatchEvent("pointerup", e3.value, s2);
    }), this._dragging.length = 0);
  }
  _dispatchDoubleClick(e2, t) {
    const i2 = this.getEvent(e2), r2 = this._getHitTarget(i2.originalPoint, i2.bbox, t);
    r2 && Qe2(r2, (e3) => !this._dispatchEvent("dblclick", e3, i2));
  }
  _dispatchWheel(e2, t) {
    const i2 = this.getEvent(e2), r2 = this._getHitTarget(i2.originalPoint, i2.bbox, t);
    r2 && Qe2(r2, (e3) => !this._dispatchEvent("wheel", e3, i2));
  }
  _makeSharedEvent(e2, t) {
    if (void 0 === this._listeners[e2]) {
      const i2 = t();
      this._listeners[e2] = new X(() => {
        delete this._listeners[e2], i2.dispose();
      });
    }
    return this._listeners[e2].increment();
  }
  _onPointerEvent(e2, t) {
    let i2 = false, r2 = null;
    function s2() {
      r2 = null, i2 = false;
    }
    return new Y([new z(() => {
      null !== r2 && clearTimeout(r2), s2();
    }), Z(this.view, it(e2), (e3) => {
      i2 = true, null !== r2 && clearTimeout(r2), r2 = window.setTimeout(s2, 0);
    }), et2(window, e2, (e3, s3) => {
      null !== r2 && (clearTimeout(r2), r2 = null), t(e3, s3, i2), i2 = false;
    })]);
  }
  _initEvent(e2) {
    switch (e2) {
      case "globalpointermove":
      case "pointerover":
      case "pointerout":
        return this._makeSharedEvent("pointermove", () => {
          const e3 = (e4, i2, r2) => {
            this._lastPointerMoveEvent = {
              events: e4,
              target: i2,
              native: r2
            }, w(e4, (e5) => {
              this._dispatchGlobalMousemove(e5, i2, r2);
            });
          };
          return new Y([this._onPointerEvent("pointerdown", e3), this._onPointerEvent("pointermove", e3)]);
        });
      case "globalpointerup":
        return this._makeSharedEvent("pointerup", () => {
          const e3 = this._onPointerEvent("pointerup", (e4, i3, r2) => {
            w(e4, (e5) => {
              this._dispatchGlobalMouseup(e5, r2);
            }), this._lastPointerMoveEvent = {
              events: e4,
              target: i3,
              native: r2
            };
          }), i2 = this._onPointerEvent("pointercancel", (e4, i3, r2) => {
            w(e4, (e5) => {
              this._dispatchGlobalMouseup(e5, r2);
            }), this._lastPointerMoveEvent = {
              events: e4,
              target: i3,
              native: r2
            };
          });
          return new z(() => {
            e3.dispose(), i2.dispose();
          });
        });
      case "click":
      case "rightclick":
      case "middleclick":
      case "pointerdown":
      case "pointermove":
      case "pointerup":
        return this._makeSharedEvent("pointerdown", () => {
          const e3 = this._onPointerEvent("pointerdown", (e4, i3) => {
            w(e4, (e5) => {
              this._dispatchMousedown(e5, i3);
            });
          }), i2 = this._onPointerEvent("pointermove", (e4) => {
            w(e4, (e5) => {
              this._dispatchDragMove(e5);
            });
          }), r2 = this._onPointerEvent("pointerup", (e4, i3) => {
            w(e4, (e5) => {
              this._dispatchDragEnd(e5, i3);
            });
          }), s2 = this._onPointerEvent("pointercancel", (e4, i3) => {
            w(e4, (e5) => {
              this._dispatchDragEnd(e5, i3);
            });
          });
          return new z(() => {
            e3.dispose(), i2.dispose(), r2.dispose(), s2.dispose();
          });
        });
      case "dblclick":
        return this._makeSharedEvent("dblclick", () => this._onPointerEvent("dblclick", (e3, i2) => {
          w(e3, (e4) => {
            this._dispatchDoubleClick(e4, i2);
          });
        }));
      case "wheel":
        return this._makeSharedEvent("wheel", () => Z(this.view, it("wheel"), (e3) => {
          this._dispatchWheel(e3, nt(e3));
        }, {
          passive: false
        }));
    }
  }
  _addEvent(e2, t, i2, r2) {
    let s2 = this._events[t];
    void 0 === s2 && (s2 = this._events[t] = {
      disposer: this._initEvent(t),
      callbacks: [],
      dispatching: false,
      cleanup: false
    });
    const a = {
      object: e2,
      context: r2,
      callback: i2,
      disposed: false
    };
    return s2.callbacks.push(a), new z(() => {
      a.disposed = true, s2.dispatching ? s2.cleanup = true : (k(s2.callbacks, a), 0 === s2.callbacks.length && (s2.disposer.dispose(), delete this._events[t]));
    });
  }
  getCanvas(e2, i2) {
    this.render(e2), i2 || (i2 = {});
    let r2 = this.resolution, s2 = Math.floor(this._calculatedWidth * this.resolution), a = Math.floor(this._calculatedHeight * this.resolution);
    if (i2.minWidth && i2.minWidth > s2) {
      let e3 = i2.minWidth / s2;
      e3 > r2 && (r2 = e3 * this.resolution);
    }
    if (i2.minHeight && i2.minHeight > a) {
      let e3 = i2.minHeight / a;
      e3 > r2 && (r2 = e3 * this.resolution);
    }
    if (i2.maxWidth && i2.maxWidth < s2) {
      let e3 = i2.maxWidth / s2;
      e3 < r2 && (r2 = e3 * this.resolution);
    }
    if (i2.maxHeight && i2.maxHeight > a) {
      let e3 = i2.maxHeight / a;
      e3 < r2 && (r2 = e3 * this.resolution);
    }
    i2.maintainPixelRatio && (r2 /= this.resolution);
    const n = [];
    let o = false;
    const l = document.createElement("canvas");
    r2 != this.resolution && (o = true, s2 = s2 * r2 / this.resolution, a = a * r2 / this.resolution), l.width = s2, l.height = a, l.style.position = "fixed", l.style.top = "-10000px", this.view.appendChild(l), n.push(l);
    const h2 = l.getContext("2d");
    let u2 = 0, c3 = 0, d2 = false;
    return w(this.layers, (e3) => {
      if (e3 && e3.visible && (e3.tainted || o)) {
        d2 = true, e3.exportableView = e3.view, e3.exportableContext = e3.context, e3.view = document.createElement("canvas"), e3.view.style.position = "fixed", e3.view.style.top = "-10000px", this.view.appendChild(e3.view), n.push(e3.view);
        let t = 0, i3 = 0;
        e3.margin && (t += e3.margin.left || 0 + e3.margin.right || 0, i3 += e3.margin.top || 0 + e3.margin.bottom || 0), e3.view.width = s2 + t, e3.view.height = a + i3, e3.context = e3.view.getContext("2d"), e3.dirty = true, e3.scale = r2;
      }
    }), d2 && (this._omitTainted = true, this.render(e2), this._omitTainted = false), w(this.layers, (e3) => {
      if (e3 && e3.visible) {
        let t = 0, i3 = 0;
        e3.margin && (t = -(e3.margin.left || 0) * this.resolution, i3 = -(e3.margin.top || 0) * this.resolution), h2.drawImage(e3.view, t, i3), e3.exportableView && (e3.view = e3.exportableView, e3.exportableView = void 0), e3.exportableContext && (e3.context = e3.exportableContext, e3.exportableContext = void 0), u2 < e3.view.clientWidth && (u2 = e3.view.clientWidth), c3 < e3.view.clientHeight && (c3 = e3.view.clientHeight), e3.scale = void 0;
      }
    }), l.style.width = u2 + "px", l.style.height = c3 + "px", w(n, (e3) => {
      e3.style.position = "", e3.style.top = "", this.view.removeChild(e3);
    }), l;
  }
};
var Lt = class {
  constructor() {
    Object.defineProperty(this, "view", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    }), Object.defineProperty(this, "context", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    }), Object.defineProperty(this, "margin", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      }
    }), Object.defineProperty(this, "_resolution", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 1
    }), Object.defineProperty(this, "_width", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    }), Object.defineProperty(this, "_height", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    }), Object.defineProperty(this, "imageArray", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    }), this.view = document.createElement("canvas"), this.context = this.view.getContext("2d", {
      alpha: false,
      willReadFrequently: true
    }), this.context.imageSmoothingEnabled = false, this.view.style.position = "absolute", this.view.style.top = "0px", this.view.style.left = "0px";
  }
  resize(e2, t, i2, r2, s2) {
    this._resolution = s2, e2 += this.margin.left + this.margin.right, t += this.margin.top + this.margin.bottom, i2 += this.margin.left + this.margin.right, r2 += this.margin.top + this.margin.bottom, this.view.style.left = -this.margin.left + "px", this.view.style.top = -this.margin.top + "px", this._width = Math.floor(e2 * s2), this._height = Math.floor(t * s2), this.view.width = this._width, this.view.style.width = i2 + "px", this.view.height = this._height, this.view.style.height = r2 + "px";
  }
  getImageData(e2, t) {
    return this.context.getImageData(Math.round((e2.x - t.left) / t.width * this._width), Math.round((e2.y - t.top) / t.height * this._height), 1, 1);
  }
  getImageArray(e2) {
    this.imageArray || (this.imageArray = this.context.getImageData(0, 0, this._width, this._height).data);
    const t = this.imageArray, i2 = Math.round(e2.x * this._resolution), r2 = 4 * (Math.round(e2.y * this._resolution) * this._width + i2);
    return [t[r2], t[r2 + 1], t[r2 + 2], t[r2 + 3]];
  }
  setMargin(e2) {
    this.margin.left = 0, this.margin.right = 0, this.margin.top = 0, this.margin.bottom = 0, w(e2, (e3) => {
      e3.margin && (this.margin.left = Math.max(this.margin.left, e3.margin.left), this.margin.right = Math.max(this.margin.right, e3.margin.right), this.margin.top = Math.max(this.margin.top, e3.margin.top), this.margin.bottom = Math.max(this.margin.bottom, e3.margin.bottom));
    });
  }
  clear() {
    this.context.save(), this.context.fillStyle = "#000", this.context.fillRect(0, 0, this._width, this._height);
  }
};
var zt2 = class {
  constructor(e2, t) {
    Object.defineProperty(this, "view", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    }), Object.defineProperty(this, "context", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    }), Object.defineProperty(this, "tainted", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: true
    }), Object.defineProperty(this, "margin", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    }), Object.defineProperty(this, "order", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    }), Object.defineProperty(this, "visible", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: true
    }), Object.defineProperty(this, "width", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    }), Object.defineProperty(this, "height", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    }), Object.defineProperty(this, "scale", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    }), Object.defineProperty(this, "dirty", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: true
    }), Object.defineProperty(this, "exportableView", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    }), Object.defineProperty(this, "exportableContext", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    }), Object.defineProperty(this, "_width", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    }), Object.defineProperty(this, "_height", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    }), this.view = e2, this.context = t;
  }
  resize(e2, t, i2, r2, s2) {
    null != this.width && (e2 = this.width, i2 = this.width), null != this.height && (t = this.height, r2 = this.height), this.margin ? (e2 += this.margin.left + this.margin.right, t += this.margin.top + this.margin.bottom, i2 += this.margin.left + this.margin.right, r2 += this.margin.top + this.margin.bottom, this.view.style.left = -this.margin.left + "px", this.view.style.top = -this.margin.top + "px") : (this.view.style.left = "0px", this.view.style.top = "0px"), this._width = Math.floor(e2 * s2), this._height = Math.floor(t * s2), this.view.width = this._width, this.view.style.width = i2 + "px", this.view.height = this._height, this.view.style.height = r2 + "px";
  }
  clear() {
    this.context.save(), this.context.clearRect(0, 0, this._width, this._height);
  }
};
function Ft(e2, t) {
  null == e2 ? requestAnimationFrame(t) : setTimeout(() => {
    requestAnimationFrame(t);
  }, 1e3 / e2);
}
var Ht = class _Ht {
  constructor(e2, i2 = {}, r2) {
    if (Object.defineProperty(this, "dom", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    }), Object.defineProperty(this, "_inner", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    }), Object.defineProperty(this, "_settings", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    }), Object.defineProperty(this, "_isDirty", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    }), Object.defineProperty(this, "_isDirtyParents", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    }), Object.defineProperty(this, "_isDirtyAnimation", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    }), Object.defineProperty(this, "_dirty", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    }), Object.defineProperty(this, "_dirtyParents", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    }), Object.defineProperty(this, "_dirtyBounds", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    }), Object.defineProperty(this, "_dirtyPositions", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    }), Object.defineProperty(this, "_ticker", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: null
    }), Object.defineProperty(this, "_tickers", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    }), Object.defineProperty(this, "_updateTick", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: true
    }), Object.defineProperty(this, "events", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: new Yt()
    }), Object.defineProperty(this, "animationTime", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: null
    }), Object.defineProperty(this, "_animations", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    }), Object.defineProperty(this, "_renderer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    }), Object.defineProperty(this, "_rootContainer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    }), Object.defineProperty(this, "container", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    }), Object.defineProperty(this, "tooltipContainer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    }), Object.defineProperty(this, "_tooltipContainerSettings", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    }), Object.defineProperty(this, "_tooltip", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    }), Object.defineProperty(this, "language", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: He.new(this, {})
    }), Object.defineProperty(this, "locale", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: Fe
    }), Object.defineProperty(this, "utc", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    }), Object.defineProperty(this, "timezone", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    }), Object.defineProperty(this, "fps", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    }), Object.defineProperty(this, "numberFormatter", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: Be2.new(this, {})
    }), Object.defineProperty(this, "dateFormatter", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: Le.new(this, {})
    }), Object.defineProperty(this, "durationFormatter", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: ze2.new(this, {})
    }), Object.defineProperty(this, "tabindex", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    }), Object.defineProperty(this, "_tabindexes", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    }), Object.defineProperty(this, "_a11yD", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    }), Object.defineProperty(this, "_focusElementDirty", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    }), Object.defineProperty(this, "_focusElementContainer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    }), Object.defineProperty(this, "_focusedSprite", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    }), Object.defineProperty(this, "_isShift", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    }), Object.defineProperty(this, "_keyboardDragPoint", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    }), Object.defineProperty(this, "_tooltipElementContainer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    }), Object.defineProperty(this, "_readerAlertElement", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    }), Object.defineProperty(this, "_logo", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    }), Object.defineProperty(this, "_tooltipDiv", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    }), Object.defineProperty(this, "nonce", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    }), Object.defineProperty(this, "interfaceColors", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    }), Object.defineProperty(this, "verticalLayout", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: Ze.new(this, {})
    }), Object.defineProperty(this, "horizontalLayout", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: $e.new(this, {})
    }), Object.defineProperty(this, "gridLayout", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: Je.new(this, {})
    }), Object.defineProperty(this, "_paused", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    }), Object.defineProperty(this, "autoResize", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: true
    }), Object.defineProperty(this, "_fontHash", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: ""
    }), Object.defineProperty(this, "_isDisposed", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    }), Object.defineProperty(this, "_disposers", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    }), Object.defineProperty(this, "_resizeSensorDisposer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    }), Object.defineProperty(this, "_tooltips", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    }), Object.defineProperty(this, "_htmlElementContainer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    }), Object.defineProperty(this, "_htmlEnabledContainers", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    }), !r2) throw new Error("You cannot use `new Class()`, instead use `Class.new()`");
    let s2, a;
    if (this._settings = i2, 0 == i2.accessible && (this._a11yD = true), null == i2.useSafeResolution && (i2.useSafeResolution = true), i2.useSafeResolution && (s2 = pt()), this._renderer = new At(s2), a = e2 instanceof HTMLElement ? e2 : document.getElementById(e2), w(ke.rootElements, (e3) => {
      if (e3.dom === a) throw new Error("You cannot have multiple Roots on the same DOM node");
    }), this.interfaceColors = Te2.new(this, {}), null === a) throw new Error("Could not find HTML element with id `" + e2 + "`");
    this.dom = a;
    let n = document.createElement("div");
    n.style.position = "relative", n.style.width = "100%", n.style.height = "100%", a.appendChild(n);
    const o = i2.tooltipContainerBounds;
    o && (this._tooltipContainerSettings = o), this._inner = n, this._updateComputedStyles(), ke.rootElements.push(this);
  }
  static new(e2, t) {
    const i2 = new _Ht(e2, t, true);
    return i2._init(), i2;
  }
  moveDOM(e2) {
    let t;
    if (t = e2 instanceof HTMLElement ? e2 : document.getElementById(e2), t) {
      for (; this.dom.childNodes.length > 0; ) t.appendChild(this.dom.childNodes[0]);
      this.dom = t, this._initResizeSensor(), this.resize();
    }
  }
  _handleLogo() {
    if (this._logo) {
      const e2 = this.dom.offsetWidth, t = this.dom.offsetHeight;
      e2 <= 150 || t <= 60 ? this._logo.hide() : this._logo.show();
    }
  }
  _showBranding() {
    if (!this._logo) {
      const e2 = this.tooltipContainer.children.push(si.new(this, {
        interactive: true,
        interactiveChildren: false,
        position: "absolute",
        setStateOnChildren: true,
        paddingTop: 9,
        paddingRight: 9,
        paddingBottom: 9,
        paddingLeft: 9,
        scale: 0.6,
        y: i(100),
        centerY: r,
        tooltipText: "Created using amCharts 5",
        tooltipX: r,
        cursorOverStyle: "pointer",
        background: Ge.new(this, {
          fill: zt(4671320),
          fillOpacity: 0,
          tooltipY: 5
        })
      })), t = u.new(this, {
        pointerOrientation: "horizontal",
        paddingTop: 4,
        paddingRight: 7,
        paddingBottom: 4,
        paddingLeft: 7
      });
      t.label.setAll({
        fontSize: 12
      }), t.get("background").setAll({
        fill: this.interfaceColors.get("background"),
        stroke: this.interfaceColors.get("grid"),
        strokeOpacity: 0.3
      }), e2.set("tooltip", t), e2.events.on("click", () => {
        window.open("https://www.amcharts.com/", "_blank");
      }), e2.states.create("hover", {});
      e2.children.push(ze.new(this, {
        stroke: zt(13421772),
        strokeWidth: 3,
        svgPath: "M5 25 L13 25h13.6c3.4 0 6 0 10.3-4.3s5.2-12 8.6-12c3.4 0 4.3 8.6 7.7 8.6M83.4 25H79.8c-3.4 0-6 0-10.3-4.3s-5.2-12-8.6-12-4.3 8.6-7.7 8.6"
      })).states.create("hover", {
        stroke: zt(3976191)
      });
      e2.children.push(ze.new(this, {
        stroke: zt(8947848),
        strokeWidth: 3,
        svgPath: "M83.4 25h-31C37 25 39.5 4.4 28.4 4.4S18.9 24.2 4.3 25H0"
      })).states.create("hover", {
        stroke: zt(4671320)
      }), this._logo = e2, this._handleLogo();
    }
  }
  _getRealSize() {
    return this.dom.getBoundingClientRect();
  }
  _getCalculatedSize(e2) {
    return this._settings.calculateSize ? this._settings.calculateSize(e2) : {
      width: e2.width,
      height: e2.height
    };
  }
  _init() {
    const e2 = this._settings;
    false !== e2.accessible && (e2.focusable && (this._inner.setAttribute("focusable", "true"), this._inner.setAttribute("tabindex", this.tabindex + "")), e2.ariaLabel && this._inner.setAttribute("aria-label", e2.ariaLabel), e2.role && this._inner.setAttribute("role", e2.role));
    const t = this._renderer, i2 = this._getRealSize(), r2 = this._getCalculatedSize(i2), s2 = Math.floor(r2.width), a = Math.floor(r2.height), n = Math.floor(i2.width), o = Math.floor(i2.height), l = si.new(this, {
      visible: true,
      width: s2,
      height: a
    });
    this._rootContainer = l, this._rootContainer._defaultThemes.push(s.new(this));
    const h2 = l.children.push(si.new(this, {
      visible: true,
      width: r,
      height: r
    }));
    this.container = h2, t.resize(n, o, s2, a), this._inner.appendChild(t.view), this._initResizeSensor();
    const u2 = document.createElement("div");
    if (this._htmlElementContainer = u2, u2.className = "am5-html-container", u2.style.position = "absolute", u2.style.pointerEvents = "none", this._tooltipContainerSettings || (u2.style.overflow = "hidden"), this._inner.appendChild(u2), true !== this._a11yD) {
      const e3 = document.createElement("div");
      e3.className = "am5-reader-container", e3.setAttribute("role", "alert"), e3.style.position = "absolute", e3.style.width = "1px", e3.style.height = "1px", e3.style.overflow = "hidden", e3.style.clip = "rect(1px, 1px, 1px, 1px)", this._readerAlertElement = e3, this._inner.appendChild(this._readerAlertElement);
      const i3 = document.createElement("div");
      i3.className = "am5-focus-container", i3.style.position = "absolute", i3.style.pointerEvents = "none", i3.style.top = "0px", i3.style.left = "0px", i3.style.overflow = "hidden", i3.style.width = s2 + "px", i3.style.height = a + "px", i3.setAttribute("role", "graphics-document"), lt(i3, false), this._focusElementContainer = i3, this._inner.appendChild(this._focusElementContainer);
      const r3 = document.createElement("div");
      this._tooltipElementContainer = r3, r3.className = "am5-tooltip-container", this._inner.appendChild(r3), q("keyboardevents") && (this._disposers.push(Z(window, "keydown", (e4) => {
        const t2 = dt(e4);
        "Shift" == t2 ? this._isShift = true : "Tab" == t2 && (this._isShift = e4.shiftKey);
      })), this._disposers.push(Z(window, "keyup", (e4) => {
        "Shift" == dt(e4) && (this._isShift = false);
      })), this._disposers.push(Z(i3, "click", () => {
        const e4 = this._focusedSprite;
        if (e4) {
          const i4 = t.getEvent(new MouseEvent("click"));
          e4.events.dispatch("click", {
            type: "click",
            originalEvent: i4.event,
            point: i4.point,
            simulated: true,
            target: e4
          });
        }
      })), this._disposers.push(Z(i3, "keydown", (e4) => {
        const i4 = this._focusedSprite;
        if (i4) {
          "Escape" == e4.key && (tt(), this._focusedSprite = void 0);
          let r4 = 0, s3 = 0;
          const a2 = dt(e4);
          switch (a2) {
            case "Enter":
            case " ":
              if (" " == a2 && "checkbox" != i4.get("role")) return;
              e4.preventDefault();
              const n2 = t.getEvent(new MouseEvent("mouse"));
              return void i4.events.dispatch("click", {
                type: "click",
                originalEvent: n2.event,
                point: n2.point,
                simulated: true,
                target: i4
              });
            case "ArrowLeft":
              r4 = -6;
              break;
            case "ArrowRight":
              r4 = 6;
              break;
            case "ArrowUp":
              s3 = -6;
              break;
            case "ArrowDown":
              s3 = 6;
              break;
            default:
              return;
          }
          if (0 != r4 || 0 != s3) {
            if (e4.preventDefault(), !i4.isDragging()) {
              this._keyboardDragPoint = {
                x: 0,
                y: 0
              };
              const e5 = t.getEvent(new MouseEvent("mousedown", {
                clientX: 0,
                clientY: 0
              }));
              i4.events.isEnabled("pointerdown") && i4.events.dispatch("pointerdown", {
                type: "pointerdown",
                originalEvent: e5.event,
                point: e5.point,
                simulated: true,
                target: i4
              });
            }
            const a3 = this._keyboardDragPoint;
            a3.x += r4, a3.y += s3;
            const n2 = t.getEvent(new MouseEvent("mousemove", {
              clientX: a3.x,
              clientY: a3.y
            }), false);
            i4.events.isEnabled("globalpointermove") && i4.events.dispatch("globalpointermove", {
              type: "globalpointermove",
              originalEvent: n2.event,
              point: n2.point,
              simulated: true,
              target: i4
            });
          }
        }
      })), this._disposers.push(Z(i3, "keyup", (e4) => {
        if (this._focusedSprite) {
          const i4 = this._focusedSprite, r4 = dt(e4);
          switch (r4) {
            case "ArrowLeft":
            case "ArrowRight":
            case "ArrowTop":
            case "ArrowDown":
              if (i4.isDragging()) {
                const e5 = this._keyboardDragPoint, r5 = t.getEvent(new MouseEvent("mouseup", {
                  clientX: e5.x,
                  clientY: e5.y
                }));
                return i4.events.isEnabled("globalpointerup") && i4.events.dispatch("globalpointerup", {
                  type: "globalpointerup",
                  originalEvent: r5.event,
                  point: r5.point,
                  simulated: true,
                  target: i4
                }), void (this._keyboardDragPoint = void 0);
              }
              if (i4.get("focusableGroup")) {
                const e5 = i4.get("focusableGroup"), t2 = this._tabindexes.filter((t3) => !(t3.get("focusableGroup") != e5 || false === t3.getPrivate("focusable") || !t3.isVisibleDeep()));
                let s3 = t2.indexOf(i4);
                const a2 = t2.length - 1;
                s3 += "ArrowRight" == r4 || "ArrowDown" == r4 ? 1 : -1, s3 < 0 ? s3 = a2 : s3 > a2 && (s3 = 0), et(t2[s3].getPrivate("focusElement").dom);
              }
          }
        }
      })));
    }
    this._startTicker(), this.setThemes([]), this._addTooltip(), this._hasLicense() || this._showBranding();
  }
  _initResizeSensor() {
    this._resizeSensorDisposer && this._resizeSensorDisposer.dispose(), this._resizeSensorDisposer = new Ee(this.dom, () => {
      this.autoResize && this.resize();
    }), this._disposers.push(this._resizeSensorDisposer);
  }
  resize() {
    const e2 = this._getRealSize(), t = this._getCalculatedSize(e2), i2 = Math.floor(t.width), r2 = Math.floor(t.height);
    if (i2 > 0 && r2 > 0) {
      const t2 = Math.floor(e2.width), s2 = Math.floor(e2.height), a = this._htmlElementContainer;
      if (a.style.width = i2 + "px", a.style.height = r2 + "px", true !== this._a11yD) {
        const e3 = this._focusElementContainer;
        e3.style.width = i2 + "px", e3.style.height = r2 + "px";
      }
      this._renderer.resize(t2, s2, i2, r2);
      const n = this._rootContainer;
      n.setPrivate("width", i2), n.setPrivate("height", r2), this._render(), this._handleLogo();
    }
  }
  _render() {
    this._renderer.render(this._rootContainer._display), this._focusElementDirty && (this._updateCurrentFocus(), this._focusElementDirty = false);
  }
  _runTickers(e2) {
    w(this._tickers, (t) => {
      t(e2);
    });
  }
  _runAnimations(e2) {
    let t = 0;
    return I(this._animations, (i2) => {
      const r2 = i2._runAnimation(e2);
      return r2 !== te.Stopped && (r2 !== te.Playing || (++t, true));
    }), this._isDirtyAnimation = false, 0 === t;
  }
  _runDirties() {
    let e2 = {};
    for (; this._isDirtyParents; ) this._isDirtyParents = false, N(this._dirtyParents).forEach((t2) => {
      const i3 = this._dirtyParents[t2];
      delete this._dirtyParents[t2], i3.isDisposed() || (e2[i3.uid] = i3, i3._prepareChildren());
    });
    N(e2).forEach((t2) => {
      e2[t2]._updateChildren();
    });
    const t = [];
    N(this._dirty).forEach((e3) => {
      const i3 = this._dirty[e3];
      i3.isDisposed() ? delete this._dirty[i3.uid] : (t.push(i3), i3._beforeChanged());
    }), t.forEach((e3) => {
      e3._changed(), delete this._dirty[e3.uid], e3._clearDirty();
    }), this._isDirty = false;
    const i2 = {}, r2 = [];
    N(this._dirtyBounds).forEach((e3) => {
      const t2 = this._dirtyBounds[e3];
      delete this._dirtyBounds[e3], t2.isDisposed() || (i2[t2.uid] = t2.depth(), r2.push(t2));
    }), this._positionHTMLElements(), r2.sort((e3, t2) => Te(i2[t2.uid], i2[e3.uid])), r2.forEach((e3) => {
      e3._updateBounds();
    });
    const s2 = this._dirtyPositions;
    N(s2).forEach((e3) => {
      const t2 = s2[e3];
      delete s2[e3], t2.isDisposed() || t2._updatePosition();
    }), t.forEach((e3) => {
      e3._afterChanged();
    });
  }
  _renderFrame(e2) {
    if (this._updateTick) {
      this.events.isEnabled("framestarted") && this.events.dispatch("framestarted", {
        type: "framestarted",
        target: this,
        timestamp: e2
      }), this._checkComputedStyles(), this._runTickers(e2);
      const t = this._runAnimations(e2);
      return this._runDirties(), this._render(), this._renderer.resetImageArray(), this._positionHTMLElements(), this.events.isEnabled("frameended") && this.events.dispatch("frameended", {
        type: "frameended",
        target: this,
        timestamp: e2
      }), 0 === this._tickers.length && t && !this._isDirtyAnimation && !this._isDirty;
    }
    return true;
  }
  _runTicker(e2, t) {
    if (!this.isDisposed()) {
      this.animationTime = e2;
      this._renderFrame(e2) ? (this._ticker = null, this.animationTime = null) : this._paused || (t ? this._ticker : Ft(this.fps, this._ticker));
    }
  }
  _runTickerNow(e2 = 1e4) {
    if (!this.isDisposed()) {
      const t = performance.now() + e2;
      for (; ; ) {
        const e3 = performance.now();
        if (e3 >= t) {
          this.animationTime = null;
          break;
        }
        this.animationTime = e3;
        if (this._renderFrame(e3)) {
          this.animationTime = null;
          break;
        }
      }
    }
  }
  _startTicker() {
    null === this._ticker && (this.animationTime = null, this._ticker = (e2) => {
      this._runTicker(e2);
    }, Ft(this.fps, this._ticker));
  }
  get updateTick() {
    return this._updateTick;
  }
  set updateTick(e2) {
    this._updateTick = e2, e2 && this._startTicker();
  }
  _addDirtyEntity(e2) {
    this._isDirty = true, void 0 === this._dirty[e2.uid] && (this._dirty[e2.uid] = e2), this._startTicker();
  }
  _addDirtyParent(e2) {
    this._isDirty = true, this._isDirtyParents = true, void 0 === this._dirtyParents[e2.uid] && (this._dirtyParents[e2.uid] = e2), this._startTicker();
  }
  _addDirtyBounds(e2) {
    this._isDirty = true, void 0 === this._dirtyBounds[e2.uid] && (this._dirtyBounds[e2.uid] = e2), this._startTicker();
  }
  _addDirtyPosition(e2) {
    this._isDirty = true, void 0 === this._dirtyPositions[e2.uid] && (this._dirtyPositions[e2.uid] = e2), this._startTicker();
  }
  _addAnimation(e2) {
    this._isDirtyAnimation = true, -1 === this._animations.indexOf(e2) && this._animations.push(e2), this._startTicker();
  }
  _markDirty() {
    this._isDirty = true;
  }
  _markDirtyRedraw() {
    this.events.once("frameended", () => {
      this._isDirty = true, this._startTicker();
    });
  }
  eachFrame(e2) {
    return this._tickers.push(e2), this._startTicker(), new z(() => {
      k(this._tickers, e2);
    });
  }
  markDirtyGlobal(e2) {
    e2 || (e2 = this.container), e2.walkChildren((e3) => {
      e3 instanceof si && this.markDirtyGlobal(e3), e3.markDirty(), e3.markDirtyBounds();
    });
  }
  width() {
    return Math.floor(this._getCalculatedSize(this._getRealSize()).width);
  }
  height() {
    return Math.floor(this._getCalculatedSize(this._getRealSize()).height);
  }
  dispose() {
    this._isDisposed || (this._isDisposed = true, this._rootContainer.dispose(), this._renderer.dispose(), this.horizontalLayout.dispose(), this.verticalLayout.dispose(), this.interfaceColors.dispose(), w(this._disposers, (e2) => {
      e2.dispose();
    }), this._inner && $(this._inner), x(ke.rootElements, this));
  }
  isDisposed() {
    return this._isDisposed;
  }
  readerAlert(e2) {
    true !== this._a11yD && (this._readerAlertElement.innerHTML = wt(e2));
  }
  setThemes(e2) {
    this._rootContainer.set("themes", e2);
    const t = this.tooltipContainer;
    t && t._applyThemes();
    const i2 = this.interfaceColors;
    i2 && i2._applyThemes();
  }
  _addTooltip() {
    if (!this.tooltipContainer) {
      const e2 = this._tooltipContainerSettings, t = this._rootContainer.children.push(si.new(this, {
        position: "absolute",
        isMeasured: false,
        width: r,
        height: r,
        layer: e2 ? 35 : 30,
        layerMargin: e2 || void 0
      }));
      this.tooltipContainer = t;
      const i2 = u.new(this, {});
      this.container.set("tooltip", i2), i2.hide(0), this._tooltip = i2;
    }
  }
  _registerTabindexOrder(e2) {
    1 != this._a11yD && (e2.get("focusable") ? T(this._tabindexes, e2) : x(this._tabindexes, e2), this._invalidateTabindexes());
  }
  _unregisterTabindexOrder(e2) {
    1 != this._a11yD && (x(this._tabindexes, e2), this._invalidateTabindexes());
  }
  _invalidateTabindexes() {
    if (1 == this._a11yD) return;
    this._tabindexes.sort((e3, t) => {
      const i2 = e3.get("tabindexOrder", 0), r2 = t.get("tabindexOrder", 0);
      return i2 == r2 ? 0 : i2 > r2 ? 1 : -1;
    });
    const e2 = [];
    w(this._tabindexes, (t, i2) => {
      t.getPrivate("focusElement") ? this._moveFocusElement(i2, t) : this._makeFocusElement(i2, t);
      const r2 = t.get("focusableGroup");
      r2 && false !== t.getPrivate("focusable") && (-1 !== e2.indexOf(r2) ? t.getPrivate("focusElement").dom.setAttribute("tabindex", "-1") : e2.push(r2));
    });
  }
  _updateCurrentFocus() {
    1 != this._a11yD && this._focusedSprite && (this._decorateFocusElement(this._focusedSprite), this._positionFocusElement(this._focusedSprite));
  }
  _decorateFocusElement(e2, t) {
    if (1 == this._a11yD) return;
    if (t || (t = e2.getPrivate("focusElement").dom), !t) return;
    const i2 = e2.get("role");
    i2 ? t.setAttribute("role", i2) : t.removeAttribute("role");
    const r2 = e2.get("ariaLabel");
    if (r2) {
      const i3 = Qe(e2, r2);
      t.setAttribute("aria-label", i3);
    } else t.removeAttribute("aria-label");
    const s2 = e2.get("ariaLive");
    s2 ? t.setAttribute("aria-live", s2) : t.removeAttribute("aria-live");
    const a = e2.get("ariaChecked");
    null != a && i2 && -1 !== ["checkbox", "option", "radio", "menuitemcheckbox", "menuitemradio", "treeitem"].indexOf(i2) ? t.setAttribute("aria-checked", a ? "true" : "false") : t.removeAttribute("aria-checked");
    const n = e2.get("ariaCurrent");
    null != n ? t.setAttribute("aria-current", n) : t.removeAttribute("aria-current");
    const o = e2.get("ariaSelected");
    null != o && i2 && -1 !== ["gridcell", "option", "row", "tab", "columnheader", "rowheader", "treeitem"].indexOf(i2) ? t.setAttribute("aria-selected", o ? "true" : "false") : t.removeAttribute("aria-selected"), e2.get("ariaHidden") ? t.setAttribute("aria-hidden", "true") : t.removeAttribute("aria-hidden");
    const l = e2.get("ariaOrientation");
    l ? t.setAttribute("aria-orientation", l) : t.removeAttribute("aria-orientation");
    const h2 = e2.get("ariaValueNow");
    h2 ? t.setAttribute("aria-valuenow", h2) : t.removeAttribute("aria-valuenow");
    const u2 = e2.get("ariaValueMin");
    u2 ? t.setAttribute("aria-valuemin", u2) : t.removeAttribute("aria-valuemin");
    const c3 = e2.get("ariaValueMax");
    c3 ? t.setAttribute("aria-valuemax", c3) : t.removeAttribute("aria-valuemax");
    const d2 = e2.get("ariaValueText");
    d2 ? t.setAttribute("aria-valuetext", d2) : t.removeAttribute("aria-valuetext");
    const b2 = e2.get("ariaControls");
    b2 ? t.setAttribute("aria-controls", b2) : t.removeAttribute("aria-controls"), e2.get("visible") && 0 !== e2.get("opacity") && "tooltip" != e2.get("role") && !e2.isHidden() && false !== e2.getPrivate("focusable") ? ("-1" != t.getAttribute("tabindex") && t.setAttribute("tabindex", "" + this.tabindex), t.removeAttribute("aria-hidden")) : (t.removeAttribute("tabindex"), t.setAttribute("aria-hidden", "true"));
  }
  _makeFocusElement(e2, t) {
    if (t.getPrivate("focusElement") || 1 == this._a11yD) return;
    const i2 = document.createElement("div");
    "tooltip" != t.get("role") && (i2.tabIndex = this.tabindex), i2.style.position = "absolute", lt(i2, false);
    const r2 = [];
    t.setPrivate("focusElement", {
      dom: i2,
      disposers: r2
    }), this._decorateFocusElement(t), r2.push(Z(i2, "focus", (e3) => {
      this._handleFocus(e3);
    })), r2.push(Z(i2, "blur", (e3) => {
      this._handleBlur(e3);
    })), this._moveFocusElement(e2, t);
  }
  _removeFocusElement(e2) {
    if (1 == this._a11yD) return;
    x(this._tabindexes, e2);
    const i2 = e2.getPrivate("focusElement");
    if (i2) {
      this._focusElementContainer.removeChild(i2.dom), w(i2.disposers, (e3) => {
        e3.dispose();
      });
    }
  }
  _hideFocusElement(e2) {
    if (1 == this._a11yD) return;
    e2.getPrivate("focusElement").dom.style.display = "none";
  }
  _moveFocusElement(e2, t) {
    if (1 == this._a11yD) return;
    const i2 = this._focusElementContainer, r2 = t.getPrivate("focusElement").dom;
    if (r2 === this._focusElementContainer.children[e2]) return;
    const s2 = this._focusElementContainer.children[e2 + 1];
    s2 ? i2.insertBefore(r2, s2) : i2.append(r2);
  }
  _positionFocusElement(e2) {
    if (1 == this._a11yD || null == e2) return;
    const t = e2.globalBounds();
    let i2 = t.right == t.left ? e2.width() : t.right - t.left, r2 = t.top == t.bottom ? e2.height() : t.bottom - t.top;
    const s2 = void 0 !== this._settings.focusPadding ? this._settings.focusPadding : 2;
    let a = t.left - s2, n = t.top - s2;
    i2 < 0 && (a += i2, i2 = Math.abs(i2)), r2 < 0 && (n += r2, r2 = Math.abs(r2));
    const o = e2.getPrivate("focusElement").dom;
    o.style.top = n + "px", o.style.left = a + "px", o.style.width = i2 + 2 * s2 + "px", o.style.height = r2 + 2 * s2 + "px";
  }
  _getSpriteByFocusElement(e2) {
    let t;
    return D(this._tabindexes, (i2, r2) => i2.getPrivate("focusElement").dom !== e2 || (t = i2, false)), t;
  }
  _handleFocus(e2) {
    if (1 == this._a11yD) return;
    const t = this._getSpriteByFocusElement(e2.target);
    t && (t.isVisibleDeep() ? (this._positionFocusElement(t), this._focusedSprite = t, t.events.isEnabled("focus") && t.events.dispatch("focus", {
      type: "focus",
      originalEvent: e2,
      target: t
    })) : this._focusNext(e2.target, this._isShift ? -1 : 1));
  }
  _focusNext(e2, t) {
    if (1 == this._a11yD) return;
    const i2 = Array.from(document.querySelectorAll(["a[href]", "area[href]", "button:not([disabled])", "details", "input:not([disabled])", "iframe:not([disabled])", "select:not([disabled])", "textarea:not([disabled])", '[contentEditable=""]', '[contentEditable="true"]', '[contentEditable="TRUE"]', '[tabindex]:not([tabindex^="-"])'].join(",")));
    let r2 = i2.indexOf(e2) + t;
    r2 < 0 ? r2 = i2.length - 1 : r2 >= i2.length && (r2 = 0), i2[r2].focus();
  }
  _handleBlur(e2) {
    if (1 == this._a11yD) return;
    const t = this._focusedSprite;
    t && !t.isDisposed() && t.events.isEnabled("blur") && t.events.dispatch("blur", {
      type: "blur",
      originalEvent: e2,
      target: t
    }), this._focusedSprite = void 0;
  }
  updateTooltip(e2) {
    if (1 == this._a11yD) return;
    const t = wt(e2._getText());
    let i2 = e2.getPrivate("tooltipElement");
    "tooltip" == e2.get("role") && "" != t ? (i2 || (i2 = this._makeTooltipElement(e2)), i2.innerHTML != t && (i2.innerHTML = t), i2.setAttribute("aria-hidden", e2.isVisibleDeep() ? "false" : "true")) : i2 && (i2.remove(), e2.removePrivate("tooltipElement"));
  }
  _makeTooltipElement(e2) {
    const t = this._tooltipElementContainer, i2 = document.createElement("div");
    return i2.style.position = "absolute", i2.style.width = "1px", i2.style.height = "1px", i2.style.overflow = "hidden", i2.style.clip = "rect(1px, 1px, 1px, 1px)", lt(i2, false), this._decorateFocusElement(e2, i2), t.append(i2), e2.setPrivate("tooltipElement", i2), i2;
  }
  _removeTooltipElement(e2) {
    if (1 == this._a11yD) return;
    const t = e2.getPrivate("tooltipElement");
    if (t) {
      const e3 = t.parentElement;
      e3 && e3.removeChild(t);
    }
  }
  _invalidateAccessibility(e2) {
    if (1 == this._a11yD) return;
    this._focusElementDirty = true;
    const t = e2.getPrivate("focusElement");
    e2.get("focusable") ? t && (this._decorateFocusElement(e2), this._positionFocusElement(e2)) : t && this._removeFocusElement(e2);
  }
  focused(e2) {
    return this._focusedSprite === e2;
  }
  documentPointToRoot(e2) {
    const t = this._getRealSize(), i2 = this._getCalculatedSize(t), r2 = i2.width / t.width, s2 = i2.height / t.height;
    return {
      x: (e2.x - t.left) * r2,
      y: (e2.y - t.top) * s2
    };
  }
  rootPointToDocument(e2) {
    const t = this._getRealSize(), i2 = this._getCalculatedSize(t), r2 = i2.width / t.width, s2 = i2.height / t.height;
    return {
      x: e2.x / r2 + t.left,
      y: e2.y / s2 + t.top
    };
  }
  addDisposer(e2) {
    return this._disposers.push(e2), e2;
  }
  _updateComputedStyles() {
    const e2 = window.getComputedStyle(this.dom);
    let t = "";
    W(e2, (e3, i3) => {
      c2(e3) && e3.match(/^font/) && (t += i3);
    });
    const i2 = t != this._fontHash;
    return i2 && (this._fontHash = t), i2;
  }
  _checkComputedStyles() {
    this._updateComputedStyles() && this._invalidateLabelBounds(this.container);
  }
  _invalidateLabelBounds(e2) {
    e2 instanceof si ? e2.children.each((e3) => {
      this._invalidateLabelBounds(e3);
    }) : e2 instanceof ri && e2.markDirtyBounds();
  }
  _hasLicense() {
    for (let e2 = 0; e2 < ke.licenses.length; e2++) if (ke.licenses[e2].match(/^AM5C.{5,}/i)) return true;
    return false;
  }
  _licenseApplied() {
    this._logo && this._logo.set("forceHidden", true);
  }
  get debugGhostView() {
    return this._renderer.debugGhostView;
  }
  set debugGhostView(e2) {
    this._renderer.debugGhostView = e2;
  }
  set tapToActivate(e2) {
    this._renderer.tapToActivate = e2;
  }
  get tapToActivate() {
    return this._renderer.tapToActivate;
  }
  set tapToActivateTimeout(e2) {
    this._renderer.tapToActivateTimeout = e2;
  }
  get tapToActivateTimeout() {
    return this._renderer.tapToActivateTimeout;
  }
  _makeHTMLElement(e2) {
    const t = this._htmlElementContainer, i2 = document.createElement("div");
    return e2.setPrivate("htmlElement", i2), i2.style.position = "absolute", i2.style.overflow = "auto", i2.style.boxSizing = "border-box", lt(i2, e2.get("interactive", false)), e2.events.isEnabled("click") && (lt(i2, true), this._disposers.push(Z(i2, "click", (t2) => {
      const i3 = this._renderer.getEvent(t2);
      e2.events.dispatch("click", {
        type: "click",
        originalEvent: i3.event,
        point: i3.point,
        simulated: false,
        target: e2
      });
    }))), this._positionHTMLElement(e2), t.append(i2), T(this._htmlEnabledContainers, e2), i2;
  }
  _positionHTMLElements() {
    w(this._htmlEnabledContainers, (e2) => {
      this._positionHTMLElement(e2);
    });
  }
  _positionHTMLElement(e2) {
    const i2 = e2.getPrivate("htmlElement");
    if (i2) {
      w(["paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "minWidth", "minHeight", "maxWidth", "maxHeight"], (t) => {
        const r3 = e2.get(t);
        i2.style[t] = r3 ? r3 + "px" : "";
      });
      const r2 = e2.compositeScale() || 1, s2 = e2.compositeRotation() || 0;
      i2.style.transform = "", i2.style.transformOrigin = "";
      const a = e2.compositeOpacity();
      setTimeout(() => {
        i2.style.opacity = a + "";
      }, 10);
      const n = e2.isVisibleDeep();
      n && (i2.style.display = "block");
      const o = e2.globalBounds();
      i2.style.top = o.top + "px", i2.style.left = o.left + "px";
      const l = e2.get("width"), h2 = e2.get("height");
      let u2 = 0, c3 = 0;
      if (l && (u2 = e2.width()), h2 && (c3 = e2.height()), l && h2) e2.removePrivate("minWidth"), e2.removePrivate("minHeight");
      else {
        i2.style.position = "fixed", i2.style.width = "", i2.style.height = "";
        const t = i2.getBoundingClientRect();
        i2.style.position = "absolute", l || (u2 = t.width), h2 || (c3 = t.height), e2._adjustedLocalBounds = {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        }, e2.setPrivate("minWidth", u2 / r2), e2.setPrivate("minHeight", c3 / r2);
      }
      u2 > 0 && (i2.style.minWidth = u2 + "px"), c3 > 0 && (i2.style.minHeight = c3 + "px"), n && 0 != a || (i2.style.display = "none"), 1 != r2 && (i2.style.transform += "scale(" + r2 + ")"), 0 != s2 && (i2.style.transform += " rotate(" + s2 + "deg)"), "" != i2.style.transform && (i2.style.transformOrigin = e2.get("centerX", 0) + "%  " + e2.get("centerY", 0) + "%");
    }
  }
  _setHTMLContent(e2, t) {
    let i2 = e2.getPrivate("htmlElement");
    i2 || (i2 = this._makeHTMLElement(e2)), i2.innerHTML != t && (i2.innerHTML = t);
  }
  _removeHTMLContent(e2) {
    let t = e2.getPrivate("htmlElement");
    t && (this._htmlElementContainer.removeChild(t), e2.removePrivate("htmlElement")), x(this._htmlEnabledContainers, e2);
  }
};
Oe("AM5C241025748");
var It = "en-us";
var Yt2 = /* @__PURE__ */ new Map([["ar", () => import("./ar-ZDKC3NSA.js")], ["bg-bg", () => import("./bg_BG-XTEOFBLN.js")], ["bs-ba", () => import("./bs_BA-HRZPPIFQ.js")], ["ca-es", () => import("./ca_ES-DPOQ7WLL.js")], ["cs-cz", () => import("./cs_CZ-IWWBCKFS.js")], ["da-dk", () => import("./da_DK-WICKXICF.js")], ["de-de", () => import("./de_DE-BLWWYSO2.js")], ["de-ch", () => import("./de_CH-ELMCWALS.js")], ["el-gr", () => import("./el_GR-NOZJUVN4.js")], ["en-us", () => import("./en_US-CTLEWIZY.js")], ["en-ca", () => import("./en_CA-K3VLZGXI.js")], ["es-es", () => import("./es_ES-UWJUZQFT.js")], ["et-ee", () => import("./et_EE-YADHLVCF.js")], ["fi-fi", () => import("./fi_FI-N7VJWYYB.js")], ["fr-fr", () => import("./fr_FR-MIT7CQ5K.js")], ["he-il", () => import("./he_IL-PKEYBWUS.js")], ["hr-hr", () => import("./hr_HR-FHJFIKCX.js")], ["hu-hu", () => import("./hu_HU-ONX34SWK.js")], ["id-id", () => import("./id_ID-XNJ5R3O5.js")], ["it-it", () => import("./it_IT-KRQSOZII.js")], ["ja-jp", () => import("./ja_JP-KNYEWOWM.js")], ["ko-kr", () => import("./ko_KR-LOLWD4XV.js")], ["lt-lt", () => import("./lt_LT-V6FC4P3G.js")], ["lv-lv", () => import("./lv_LV-IRB6COZT.js")], ["nb-no", () => import("./nb_NO-DVOQG3V3.js")], ["nl-nl", () => import("./nl_NL-OWGMG2KV.js")], ["pl-pl", () => import("./pl_PL-4UCYRZYU.js")], ["pt-br", () => import("./pt_BR-SF4YIU7K.js")], ["pt-pt", () => import("./pt_PT-DFE4J6HO.js")], ["ro-ro", () => import("./ro_RO-T4N6M4VW.js")], ["ru-ru", () => import("./ru_RU-3M272IFU.js")], ["sk-sk", () => import("./sk_SK-GEKRVTTV.js")], ["sl-sl", () => import("./sl_SL-FZMSP6DV.js")], ["sr-rs", () => import("./sr_RS-ZEPTILLQ.js")], ["sv-se", () => import("./sv_SE-FPJIKQ5N.js")], ["th-th", () => import("./th_TH-EPFLYIR5.js")], ["tr-tr", () => import("./tr_TR-KDOQZ7KW.js")], ["uk-ua", () => import("./uk_UA-KYS3DBEJ.js")], ["vi-vn", () => import("./vi_VN-D3CG44KA.js")], ["zh-cn", () => import("./zh_Hans-GQ2YOMAQ.js")], ["zh-hk", () => import("./zh_Hant-XQOOLFRM.js")], ["zh-tw", () => import("./zh_Hant-XQOOLFRM.js")]]);
function Rt(e2) {
  const t = e2.split("-")[0].toLowerCase();
  let i2 = null;
  for (const r2 of Yt2.keys()) if (r2.startsWith(t)) {
    i2 = r2;
    break;
  }
  return i2;
}
function Ut(e2) {
  return e2 ? Yt2.has(e2.toLowerCase()) ? e2.toLowerCase() : Rt(e2) || It : It;
}
function Wt(_0) {
  return __async(this, arguments, function* (e2, t = c()) {
    const i2 = Ht.new(e2);
    return i2.locale = (yield Yt2.get(Ut(t))()).default, i2;
  });
}

export {
  Be2 as Be,
  Wt
};
//# sourceMappingURL=chunk-TP65YCWJ.js.map
