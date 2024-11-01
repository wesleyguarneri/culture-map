import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  y as y2
} from "./chunk-MVS2BECH.js";
import {
  e as e2,
  t
} from "./chunk-ZT7V2AVD.js";
import {
  e
} from "./chunk-NUICEVIH.js";
import {
  S
} from "./chunk-NXK752PZ.js";
import {
  y
} from "./chunk-UVNLCXWD.js";
import {
  a3 as a2
} from "./chunk-UDMPWVPF.js";
import {
  a,
  n2 as n
} from "./chunk-6JFGZTLU.js";
import {
  has
} from "./chunk-2ZJE6ZFX.js";

// ../../../node_modules/@arcgis/core/layers/effects/EffectView.js
var l = -1;
var h = class extends S {
  constructor(t2) {
    super(t2), this._from = null, this._to = null, this._final = null, this._current = [], this._time = 0, this.duration = has("mapview-transitions-duration"), this.effects = [];
  }
  set effect(t2) {
    if (this._get("effect") !== (t2 = t2 || "")) {
      this._set("effect", t2);
      try {
        this._transitionTo(a3(t2));
      } catch (e3) {
        this._transitionTo([]), n.getLogger(this).warn("Invalid Effect", {
          effect: t2,
          error: e3
        });
      }
    }
  }
  get hasEffects() {
    return this.transitioning || !!this.effects.length;
  }
  set scale(t2) {
    this._updateForScale(t2);
  }
  get transitioning() {
    return null !== this._to;
  }
  canTransitionTo(t2) {
    try {
      return this.scale > 0 && u(this._current, a3(t2), this.scale);
    } catch {
      return false;
    }
  }
  transitionStep(t2, e3) {
    this._applyTimeTransition(t2), this._updateForScale(e3);
  }
  endTransitions() {
    this._applyTimeTransition(this.duration);
  }
  _transitionTo(t2) {
    this.scale > 0 && u(this._current, t2, this.scale) ? (this._final = t2, this._to = a(t2), _(this._current, this._to, this.scale), this._from = a(this._current), this._time = 0) : (this._from = this._to = this._final = null, this._current = t2), this._set("effects", this._current[0] ? a(this._current[0].effects) : []);
  }
  _applyTimeTransition(t2) {
    if (!(this._to && this._from && this._current && this._final)) return;
    this._time += t2;
    const e3 = Math.min(1, this._time / this.duration);
    for (let s = 0; s < this._current.length; s++) {
      const t3 = this._current[s], r = this._from[s], i = this._to[s];
      t3.scale = p(r.scale, i.scale, e3);
      for (let s2 = 0; s2 < t3.effects.length; s2++) {
        const n2 = t3.effects[s2], c = r.effects[s2], o = i.effects[s2];
        n2.interpolate(c, o, e3);
      }
    }
    1 === e3 && (this._current = this._final, this._set("effects", this._current[0] ? a(this._current[0].effects) : []), this._from = this._to = this._final = null);
  }
  _updateForScale(t2) {
    if (this._set("scale", t2), 0 === this._current.length) return;
    const e3 = this._current, s = this._current.length - 1;
    let r, i, n2 = 1;
    if (1 === e3.length || t2 >= e3[0].scale) i = r = e3[0].effects;
    else if (t2 <= e3[s].scale) i = r = e3[s].effects;
    else for (let c = 0; c < s; c++) {
      const s2 = e3[c], o = e3[c + 1];
      if (s2.scale >= t2 && o.scale <= t2) {
        n2 = (t2 - s2.scale) / (o.scale - s2.scale), r = s2.effects, i = o.effects;
        break;
      }
    }
    for (let c = 0; c < this.effects.length; c++) {
      this.effects[c].interpolate(r[c], i[c], n2);
    }
  }
};
function a3(t2) {
  const e3 = y2(t2) || [];
  return m(e3) ? [{
    scale: l,
    effects: e3
  }] : e3;
}
function u(t2, e3, s) {
  if (!t2[0]?.effects || !e3[0]?.effects) return true;
  return !((t2[0]?.scale === l || e3[0]?.scale === l) && (t2.length > 1 || e3.length > 1) && s <= 0) && t(t2[0].effects, e3[0].effects);
}
function _(t2, e3, s) {
  const r = t2.length > e3.length ? t2 : e3, i = t2.length > e3.length ? e3 : t2, n2 = i[i.length - 1], c = n2?.scale ?? s, o = n2?.effects ?? [];
  for (let f = i.length; f < r.length; f++) i.push({
    scale: c,
    effects: [...o]
  });
  for (let h2 = 0; h2 < r.length; h2++) i[h2].scale = i[h2].scale === l ? s : i[h2].scale, r[h2].scale = r[h2].scale === l ? s : r[h2].scale, e2(i[h2].effects, r[h2].effects);
}
function p(t2, e3, s) {
  return t2 + (e3 - t2) * s;
}
function m(t2) {
  const e3 = t2[0];
  return !!e3 && "type" in e3;
}
e([y()], h.prototype, "_to", void 0), e([y()], h.prototype, "duration", void 0), e([y({
  value: ""
})], h.prototype, "effect", null), e([y({
  readOnly: true
})], h.prototype, "effects", void 0), e([y({
  readOnly: true
})], h.prototype, "hasEffects", null), e([y({
  value: 0
})], h.prototype, "scale", null), e([y({
  readOnly: true
})], h.prototype, "transitioning", null), h = e([a2("esri.layers.effects.EffectView")], h);

export {
  h
};
//# sourceMappingURL=chunk-6JRLR4LF.js.map
