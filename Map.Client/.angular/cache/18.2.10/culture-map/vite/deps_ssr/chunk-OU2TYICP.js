import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  e,
  f
} from "./chunk-2OZSYJDX.js";
import {
  A,
  g,
  j,
  o,
  r as r2,
  u
} from "./chunk-MZM4INJV.js";
import {
  n,
  r
} from "./chunk-J4GMQHGL.js";

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/lighting/Lightsources.js
var i = class {
  constructor(s = n()) {
    this.intensity = s;
  }
};
var r3 = class {
  constructor(i2 = n(), r4 = r(0.57735, 0.57735, 0.57735)) {
    this.intensity = i2, this.direction = r4;
  }
};
var c = class {
  constructor(i2 = n(), r4 = r(0.57735, 0.57735, 0.57735), c2 = true, n4 = 1, o2 = 1) {
    this.intensity = i2, this.direction = r4, this.castShadows = c2, this.specularStrength = n4, this.environmentStrength = o2;
  }
};
var n2 = class {
  constructor() {
    this.r = [0], this.g = [0], this.b = [0];
  }
};

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/lib/LongVectorMath.js
function n3(t, n4, e3) {
  (e3 = e3 || t).length = t.length;
  for (let l4 = 0; l4 < t.length; l4++) e3[l4] = t[l4] * n4[l4];
  return e3;
}
function e2(t, n4, e3) {
  (e3 = e3 || t).length = t.length;
  for (let l4 = 0; l4 < t.length; l4++) e3[l4] = t[l4] * n4;
  return e3;
}
function l(t, n4, e3) {
  (e3 = e3 || t).length = t.length;
  for (let l4 = 0; l4 < t.length; l4++) e3[l4] = t[l4] + n4[l4];
  return e3;
}

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/lighting/SphericalHarmonics.js
function u2(t) {
  return (t + 1) * (t + 1);
}
function l2(n4) {
  return e(Math.floor(Math.sqrt(n4) - 1), 0, 2);
}
function m(t, n4, o2) {
  const r4 = t[0], e3 = t[1], i2 = t[2], s = o2 || [];
  return s.length = u2(n4), n4 >= 0 && (s[0] = 0.28209479177), n4 >= 1 && (s[1] = 0.4886025119 * r4, s[2] = 0.4886025119 * i2, s[3] = 0.4886025119 * e3), n4 >= 2 && (s[4] = 1.09254843059 * r4 * e3, s[5] = 1.09254843059 * e3 * i2, s[6] = 0.31539156525 * (3 * i2 * i2 - 1), s[7] = 1.09254843059 * r4 * i2, s[8] = 0.54627421529 * (r4 * r4 - e3 * e3)), s;
}
function p(t, n4) {
  const o2 = u2(t), r4 = n4 || {
    r: [],
    g: [],
    b: []
  };
  r4.r.length = r4.g.length = r4.b.length = o2;
  for (let e3 = 0; e3 < o2; e3++) r4.r[e3] = r4.g[e3] = r4.b[e3] = 0;
  return r4;
}
function b(t, o2) {
  const r4 = l2(o2.r.length);
  for (const e3 of t) j(P, e3.direction), m(P, r4, v), n3(v, k), e2(v, e3.intensity[0], I), l(o2.r, I), e2(v, e3.intensity[1], I), l(o2.g, I), e2(v, e3.intensity[2], I), l(o2.b, I);
  return o2;
}
function y(t, n4) {
  m(P, 0, v);
  for (const o2 of t) n4.r[0] += v[0] * k[0] * o2.intensity[0] * 4 * Math.PI, n4.g[0] += v[0] * k[0] * o2.intensity[1] * 4 * Math.PI, n4.b[0] += v[0] * k[0] * o2.intensity[2] * 4 * Math.PI;
  return n4;
}
function M(t, n4, e3, i2) {
  p(n4, i2), o(e3.intensity, 0, 0, 0);
  let s = false;
  const u3 = S, l4 = d, m3 = j2;
  u3.length = 0, l4.length = 0, m3.length = 0;
  for (const o2 of t) o2 instanceof c && !s ? (r2(e3.direction, o2.direction), r2(e3.intensity, o2.intensity), e3.specularStrength = o2.specularStrength, e3.environmentStrength = o2.environmentStrength, e3.castShadows = o2.castShadows, s = true) : o2 instanceof c || o2 instanceof r3 ? u3.push(o2) : o2 instanceof i ? l4.push(o2) : o2 instanceof n2 && m3.push(o2);
  b(u3, i2), y(l4, i2);
  for (const o2 of m3) l(i2.r, o2.r), l(i2.g, o2.g), l(i2.b, o2.b);
}
var S = [];
var d = [];
var j2 = [];
var v = [0];
var I = [0];
var P = n();
var k = [3.141593, 2.094395, 2.094395, 2.094395, 0.785398, 0.785398, 0.785398, 0.785398, 0.785398];

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/lighting/SceneLighting.js
var g2 = class {
  constructor() {
    this.color = n(), this.intensity = 1;
  }
};
var m2 = class {
  constructor() {
    this.direction = n(), this.ambient = new g2(), this.diffuse = new g2();
  }
};
var l3 = 0.4;
var _ = class {
  constructor() {
    this._shOrder = 2, this._legacy = new m2(), this.globalFactor = 0.5, this.noonFactor = 0.5, this._sphericalHarmonics = new n2(), this._mainLight = new c(n(), r(1, 0, 0), false);
  }
  get legacy() {
    return this._legacy;
  }
  get sh() {
    return this._sphericalHarmonics;
  }
  get mainLight() {
    return this._mainLight;
  }
  set(i2) {
    M(i2, this._shOrder, this._mainLight, this._sphericalHarmonics), r2(this._legacy.direction, this._mainLight.direction);
    const r4 = 1 / Math.PI;
    this._legacy.ambient.color[0] = 0.282095 * this._sphericalHarmonics.r[0] * r4, this._legacy.ambient.color[1] = 0.282095 * this._sphericalHarmonics.g[0] * r4, this._legacy.ambient.color[2] = 0.282095 * this._sphericalHarmonics.b[0] * r4, g(this._legacy.diffuse.color, this._mainLight.intensity, r4), r2(L, this._legacy.diffuse.color), g(L, L, l3 * this.globalFactor), u(this._legacy.ambient.color, this._legacy.ambient.color, L);
  }
  copyFrom(i2) {
    this._sphericalHarmonics.r = Array.from(i2.sh.r), this._sphericalHarmonics.g = Array.from(i2.sh.g), this._sphericalHarmonics.b = Array.from(i2.sh.b), r2(this._mainLight.direction, i2.mainLight.direction), r2(this._mainLight.intensity, i2.mainLight.intensity), this._mainLight.castShadows = i2.mainLight.castShadows, this._mainLight.specularStrength = i2.mainLight.specularStrength, this._mainLight.environmentStrength = i2.mainLight.environmentStrength, this.globalFactor = i2.globalFactor, this.noonFactor = i2.noonFactor;
  }
  lerpLighting(s, h, n4) {
    if (A(this._mainLight.intensity, s.mainLight.intensity, h.mainLight.intensity, n4), this._mainLight.environmentStrength = f(s.mainLight.environmentStrength, h.mainLight.environmentStrength, n4), this._mainLight.specularStrength = f(s.mainLight.specularStrength, h.mainLight.specularStrength, n4), r2(this._mainLight.direction, h.mainLight.direction), this._mainLight.castShadows = h.mainLight.castShadows, this.globalFactor = f(s.globalFactor, h.globalFactor, n4), this.noonFactor = f(s.noonFactor, h.noonFactor, n4), s.sh.r.length === h.sh.r.length) for (let t = 0; t < h.sh.r.length; t++) this._sphericalHarmonics.r[t] = f(s.sh.r[t], h.sh.r[t], n4), this._sphericalHarmonics.g[t] = f(s.sh.g[t], h.sh.g[t], n4), this._sphericalHarmonics.b[t] = f(s.sh.b[t], h.sh.b[t], n4);
    else for (let i2 = 0; i2 < h.sh.r.length; i2++) this._sphericalHarmonics.r[i2] = h.sh.r[i2], this._sphericalHarmonics.g[i2] = h.sh.g[i2], this._sphericalHarmonics.b[i2] = h.sh.b[i2];
  }
};
var L = n();

export {
  i,
  r3 as r,
  c,
  l3 as l,
  _
};
//# sourceMappingURL=chunk-OU2TYICP.js.map
