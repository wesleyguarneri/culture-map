import {
  n
} from "./chunk-SZWWBMQN.js";

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/ShaderTechniqueConfiguration.js
var t = class extends n {
  constructor() {
    super(), this._key = "", this._keyDirty = false, this._parameterBits = this._parameterBits ? this._parameterBits.map(() => 0) : [], this._parameterNames || (this._parameterNames = []);
  }
  get key() {
    return this._keyDirty && (this._keyDirty = false, this._key = String.fromCharCode.apply(String, this._parameterBits)), this._key;
  }
  snapshot() {
    const e = this._parameterNames, t2 = {
      key: this.key
    };
    for (const r2 of e) t2[r2] = this[r2];
    return t2;
  }
};
function r(e = {}) {
  return (t2, r2) => {
    if (t2._parameterNames = t2._parameterNames ?? [], t2._parameterNames.push(r2), null != e.constValue) Object.defineProperty(t2, r2, {
      get: () => e.constValue
    });
    else {
      const s = t2._parameterNames.length - 1, a = e.count || 2, i = Math.ceil(Math.log2(a)), o = t2._parameterBits ?? [0];
      let h = 0;
      for (; o[h] + i > 16; ) h++, h >= o.length && o.push(0);
      t2._parameterBits = o;
      const n2 = o[h], m = (1 << i) - 1 << n2;
      o[h] += i, Object.defineProperty(t2, r2, {
        get() {
          return this[s];
        },
        set(e2) {
          if (this[s] !== e2 && (this[s] = e2, this._keyDirty = true, this._parameterBits[h] = this._parameterBits[h] & ~m | +e2 << n2 & m, "number" != typeof e2 && "boolean" != typeof e2)) throw new Error("Configuration value for " + r2 + " must be boolean or number, got " + typeof e2);
        }
      });
    }
  };
}

export {
  t,
  r
};
//# sourceMappingURL=chunk-FHW2TG7X.js.map
