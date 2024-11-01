import {
  $,
  B2 as B,
  E2 as E,
  G2 as G,
  H,
  Ie,
  K,
  Ne,
  Pe,
  Q,
  U,
  W,
  X,
  Y,
  _,
  a,
  ee,
  ge,
  he,
  me,
  pe,
  q,
  r,
  s,
  te,
  z
} from "./chunk-WD7XZJEZ.js";
import {
  t
} from "./chunk-ADI7256P.js";
import {
  m
} from "./chunk-GWC3DAGP.js";
import {
  n
} from "./chunk-O7UDKFOW.js";
import {
  __async
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/arcade/deepClone.js
function m2(a2) {
  p = a2;
}
var p;
function f(m3) {
  return null === m3 ? null : X(m3) ? m3.clone() : Y(m3) ? m3 : q(m3) ? m3.clone() : Q(m3) ? m3.toArray().map((a2) => f(a2)) : U(m3) ? m3.map((a2) => f(a2)) : H(m3) ? p.createFromArcadeFeature(m3) : W(m3) || B(m3) ? m3 : K(m3) || "esri.arcade.Attachment" === m3?.declaredClass ? m3.deepClone() : ("esri.arcade.Portal" === m3?.declaredClass || $(m3) || m3 instanceof s || _(m3), m3);
}

// ../../../node_modules/@arcgis/core/arcade/Dictionary.js
function v(t2, s2, i = false, e = false) {
  if (null == t2) return null;
  if (E(t2)) return ge(t2);
  if (z(t2)) return Ne(t2);
  if (G(t2)) return me(t2);
  if (X(t2)) return he(t2, s2);
  if (ee(t2)) return t2;
  if (te(t2)) return t2;
  if (U(t2)) {
    const r3 = [];
    for (const n2 of t2) r3.push(v(n2, s2, i, e));
    return r3;
  }
  if (e && q(t2)) return t2;
  const r2 = new N();
  r2.immutable = false;
  for (const n2 of Object.keys(t2)) {
    const o = t2[n2];
    void 0 !== o && r2.setField(n2, v(o, s2, i, e));
  }
  return r2.immutable = i, r2;
}
var N = class _N {
  constructor(t2) {
    this.declaredClass = "esri.arcade.Dictionary", this.attributes = null, this.plain = false, this.immutable = true, this.attributes = t2 instanceof _N ? t2.attributes : t2 ?? {};
  }
  field(t2) {
    const s2 = t2.toLowerCase(), r2 = this.attributes[t2];
    if (void 0 !== r2) return r2;
    for (const i in this.attributes) if (i.toLowerCase() === s2) return this.attributes[i];
    throw new a(null, r.FieldNotFound, null, {
      key: t2
    });
  }
  setField(s2, r2) {
    if (this.immutable) throw new a(null, r.Immutable, null);
    if (_(r2)) throw new a(null, r.NoFunctionInDictionary, null);
    const o = s2.toLowerCase();
    r2 instanceof Date && (r2 = m.dateJSToArcadeDate(r2));
    if (void 0 === this.attributes[s2]) {
      for (const t2 in this.attributes) if (t2.toLowerCase() === o) return void (this.attributes[t2] = r2);
      this.attributes[s2] = r2;
    } else this.attributes[s2] = r2;
  }
  hasField(t2) {
    const s2 = t2.toLowerCase();
    if (void 0 !== this.attributes[t2]) return true;
    for (const i in this.attributes) if (i.toLowerCase() === s2) return true;
    return false;
  }
  keys() {
    let t2 = [];
    for (const s2 in this.attributes) t2.push(s2);
    return t2 = t2.sort(), t2;
  }
  castToText(s2 = false) {
    let i = "";
    for (const e in this.attributes) {
      "" !== i && (i += ",");
      const n2 = this.attributes[e];
      null == n2 ? i += JSON.stringify(e) + ":null" : z(n2) || E(n2) || G(n2) ? i += JSON.stringify(e) + ":" + JSON.stringify(n2) : n2 instanceof n ? i += JSON.stringify(e) + ":" + pe(n2) : n2 instanceof t || Array.isArray(n2) ? i += JSON.stringify(e) + ":" + pe(n2, null, s2) : n2 instanceof m ? i += s2 ? JSON.stringify(e) + ":" + JSON.stringify(n2.getTime()) : JSON.stringify(e) + ":" + n2.stringify() : null !== n2 && "object" == typeof n2 && void 0 !== n2.castToText && (i += JSON.stringify(e) + ":" + n2.castToText(s2));
    }
    return "{" + i + "}";
  }
  static convertObjectToArcadeDictionary(t2, s2, i = true, e = false) {
    const r2 = new _N();
    r2.immutable = false;
    for (const n2 in t2) {
      const o = t2[n2];
      void 0 !== o && r2.setField(n2.toString(), v(o, s2, i, e));
    }
    return r2.immutable = i, r2;
  }
  static convertJsonToArcade(t2, s2, i = false, e = false) {
    return v(t2, s2, i, e);
  }
  castAsJson(t2 = null) {
    const s2 = {};
    for (let i in this.attributes) {
      const e = this.attributes[i];
      void 0 !== e && (t2?.keyTranslate && (i = t2.keyTranslate(i)), s2[i] = Ie(e, t2));
    }
    return s2;
  }
  castDictionaryValueAsJsonAsync(t2, s2, i, e = null, r2) {
    return __async(this, null, function* () {
      const n2 = yield Pe(i, e, r2);
      return t2[s2] = n2, n2;
    });
  }
  castAsJsonAsync(s2 = null, i = null) {
    return __async(this, null, function* () {
      const e = {}, r2 = [];
      for (let n2 in this.attributes) {
        const o = this.attributes[n2];
        i?.keyTranslate && (n2 = i.keyTranslate(n2)), void 0 !== o && (Y(o) || o instanceof n || o instanceof m ? e[n2] = Ie(o, i) : r2.push(this.castDictionaryValueAsJsonAsync(e, n2, o, s2, i)));
      }
      return r2.length > 0 && (yield Promise.all(r2)), e;
    });
  }
  deepClone() {
    const t2 = new _N();
    t2.immutable = false;
    for (const i of this.keys()) t2.setField(i, f(this.field(i)));
    return t2;
  }
};

export {
  m2 as m,
  f,
  N
};
//# sourceMappingURL=chunk-FAW72HJW.js.map
