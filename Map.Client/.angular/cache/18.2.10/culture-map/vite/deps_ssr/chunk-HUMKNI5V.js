import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  n as n4
} from "./chunk-3SFUX3VL.js";
import {
  n as n3
} from "./chunk-BUAHJQUY.js";
import {
  E as E4,
  L as L2,
  M,
  S as S4,
  c as c4,
  d as d4,
  f as f3,
  h as h5,
  p as p3,
  w as w2,
  y
} from "./chunk-VOJZD4TW.js";
import {
  o as o5
} from "./chunk-ZCCDVQ3H.js";
import {
  t as t8
} from "./chunk-NZTRS5LW.js";
import {
  A,
  B2,
  Bn,
  Bt,
  C2,
  C3,
  Ct,
  D as D2,
  D2 as D3,
  Dt,
  E as E3,
  F as F2,
  F2 as F3,
  G,
  G2,
  H,
  H2,
  H3,
  Ht,
  I as I2,
  K as K2,
  Nt,
  O as O3,
  P,
  P2,
  P3,
  R,
  S,
  S2,
  S3,
  Sn,
  St,
  T,
  U as U3,
  Un,
  Wn,
  Xt,
  Y,
  Zt,
  _ as _3,
  _2 as _4,
  a as a2,
  b,
  bn,
  c as c3,
  d as d2,
  d2 as d3,
  e as e3,
  ee as ee2,
  f,
  f2,
  g,
  g2,
  h,
  h2,
  h3,
  h4,
  i as i3,
  j,
  j2,
  j3,
  k2 as k,
  kn,
  l as l2,
  ln,
  m as m2,
  m2 as m3,
  n as n2,
  nt,
  o as o2,
  o2 as o4,
  p,
  p2,
  q,
  q2,
  q3,
  q4,
  q5,
  r as r2,
  se,
  sn,
  t as t6,
  t2 as t7,
  te,
  tn,
  tt,
  u as u2,
  v,
  vn,
  w,
  x,
  xt,
  yt,
  z,
  z2
} from "./chunk-7DRGM3JS.js";
import {
  o as o3
} from "./chunk-LR3PYNHM.js";
import {
  t2 as t5
} from "./chunk-VM4DYPO2.js";
import {
  E as E2,
  i as i2,
  s as s2
} from "./chunk-FWYSNIVU.js";
import {
  c
} from "./chunk-MDEPINSI.js";
import {
  ee
} from "./chunk-Q2RVB4BK.js";
import {
  _ as _2
} from "./chunk-QWE4DSVN.js";
import {
  c as c2,
  e2
} from "./chunk-QATJRB5Q.js";
import {
  J,
  K,
  U as U2,
  a,
  i,
  rt
} from "./chunk-NOBDTR4N.js";
import {
  t as t4
} from "./chunk-KINQ7OJ3.js";
import {
  B,
  C,
  D,
  E,
  F,
  I,
  L,
  O as O2,
  U,
  _
} from "./chunk-KYLW5XXS.js";
import {
  t as t3
} from "./chunk-EKHRAAS6.js";
import {
  m
} from "./chunk-5X5U7R6O.js";
import {
  o,
  u
} from "./chunk-VYTPFEL2.js";
import {
  W2 as W
} from "./chunk-6SSA7P3A.js";
import {
  e,
  t as t2
} from "./chunk-NUICEVIH.js";
import {
  d
} from "./chunk-AIZ3T7E3.js";
import {
  r
} from "./chunk-6WGE3IUL.js";
import {
  l2 as l,
  n2 as n,
  s2 as s
} from "./chunk-6JFGZTLU.js";
import {
  O,
  t
} from "./chunk-2ZJE6ZFX.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/Technique.js
var t9 = class {
  constructor() {
    this.drawPhase = E4.MAP | E4.HITTEST | E4.HIGHLIGHT | E4.DEBUG;
  }
  startup() {
  }
  shutdown(s6) {
  }
};

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/FeatureTechnique.js
var o6 = class extends t9 {
  constructor() {
    super(...arguments), this.overrideStencilRef = null, this.symbologyPlane = S4.FILL, this.postProcessingEnabled = false;
  }
  postProcess(s6, e4) {
  }
};

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/dotDensity/DotDensityPointShader.js
var z3 = class extends b {
};
e([h(0, C2)], z3.prototype, "pos", void 0);
var F4 = class extends F3 {
};
var R2 = class extends P {
};
e([g(j)], R2.prototype, "dotSize", void 0);
var b2 = class extends P {
};
e([g(S)], b2.prototype, "locations", void 0), e([g(j)], b2.prototype, "pixelRatio", void 0), e([g(j)], b2.prototype, "tileZoomFactor", void 0);
var P4 = 1e-6;
var C4 = class extends j2 {
  vertex(t14) {
    const o10 = new tt(1, 0, 0, 0, -1, 0, 0, 1, 1).multiply(new G2(t14.pos.xy.divide(a), 1)), i7 = se(this.draw.locations, o10.xy), s6 = Bn(this.instance.dotSize.divide(2), new j(1));
    let r5 = new j(0);
    r5 = r5.add(ee2(i7.a, new j(P4)).multiply(2));
    let d8 = s6.add(this.instance.dotSize);
    const n11 = this.view.displayViewScreenMat3.multiply(new G2(t14.pos.add(0.5), 1)), a6 = new H2(n11.xy, r5, 1), l6 = this.instance.dotSize.divide(d8), h11 = new j(-1).divide(s6.divide(d8));
    return d8 = d8.multiply(this.draw.pixelRatio.multiply(this.draw.tileZoomFactor)), {
      glPosition: a6,
      glPointSize: d8,
      color: i7,
      ratio: l6,
      invEdgeRatio: h11
    };
  }
  fragment(t14) {
    const o10 = kn(t14.glPointCoord.subtract(0.5)).multiply(2), e4 = te(new j(0), new j(1), t14.invEdgeRatio.multiply(o10.subtract(t14.ratio)).add(1)), i7 = new w();
    return i7.glFragColor = t14.color.multiply(e4), i7;
  }
};
e([g(R2)], C4.prototype, "instance", void 0), e([g(b2)], C4.prototype, "draw", void 0), e([g(d2)], C4.prototype, "view", void 0), e([t2(0, m2(z3))], C4.prototype, "vertex", null), e([t2(0, m2(F4))], C4.prototype, "fragment", null);

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/dotDensity/DotDensityPolygonShader.js
var D4 = class extends S2 {
};
e([h(3, j)], D4.prototype, "inverseArea", void 0);
var V = class extends P {
};
e([g(U3.ofType(H2, 2))], V.prototype, "isActive", void 0), e([g(U3.ofType(H2, 8))], V.prototype, "colors", void 0), e([g(j)], V.prototype, "dotValue", void 0);
var F5 = class extends P {
};
e([g(S)], F5.prototype, "dotTexture0", void 0), e([g(S)], F5.prototype, "dotTexture1", void 0), e([g(j)], F5.prototype, "tileZoomFactor", void 0), e([g(j)], F5.prototype, "pixelRatio", void 0), e([g(j)], F5.prototype, "tileDotsOverArea", void 0);
var _5 = class extends P2 {
  _dotThreshold(t14, e4, o10) {
    return t14.divide(e4).divide(o10);
  }
  vertex(t14) {
    const e4 = new tt(2 / a, 0, 0, 0, -2 / a, 0, -1, 1, 1).multiply(new G2(t14.pos, 1)), s6 = this.clip(t14.id), i7 = new H2(e4.xy, s6, 1), r5 = this.storage.getVVData(t14.id).multiply(this.instance.isActive.get(0)).multiply(t14.inverseArea), l6 = this.storage.getDataDrivenData0(t14.id).multiply(this.instance.isActive.get(1)).multiply(t14.inverseArea), d8 = this.draw.tileZoomFactor.multiply(a).divide(this.draw.pixelRatio), a6 = this._dotThreshold(r5, this.instance.dotValue, this.draw.tileDotsOverArea), n11 = this._dotThreshold(l6, this.instance.dotValue, this.draw.tileDotsOverArea), u10 = t14.pos.add(0.5).divide(d8);
    return {
      glPosition: i7,
      color: new H2(0, 0, 0, 0),
      textureCoords: u10,
      thresholds0: a6,
      thresholds1: n11
    };
  }
  fragment(t14) {
    const e4 = new w(), o10 = se(this.draw.dotTexture0, t14.textureCoords), s6 = se(this.draw.dotTexture1, t14.textureCoords), i7 = t14.thresholds0.subtract(o10), r5 = t14.thresholds1.subtract(s6);
    let l6;
    const a6 = nt.fromColumns(this.instance.colors[0], this.instance.colors[1], this.instance.colors[2], this.instance.colors[3]), n11 = nt.fromColumns(this.instance.colors[4], this.instance.colors[5], this.instance.colors[6], this.instance.colors[7]);
    if (this.blending) {
      const t15 = ee2(new j(0), i7), e5 = ee2(new j(0), r5), o11 = ln(t15, i7).add(ln(e5, r5)), s7 = ee2(o11, new j(0)), d8 = new j(1).subtract(s7), p14 = o11.add(s7), h11 = i7.multiply(t15).divide(p14), c9 = r5.multiply(e5).divide(p14), u10 = a6.multiply(h11).add(n11.multiply(c9));
      l6 = d8.multiply(u10);
    } else {
      const t15 = Bn(q2(i7), q2(r5)), e5 = ee2(t15, new j(0)), o11 = new j(1).subtract(e5), s7 = ee2(t15, i7), d8 = ee2(t15, r5), p14 = a6.multiply(s7).add(n11.multiply(d8));
      l6 = o11.multiply(p14);
    }
    return e4.glFragColor = l6, e4;
  }
  hittest(t14) {
    return q4(this.hittestRequest);
  }
};
e([K2], _5.prototype, "blending", void 0), e([g(V)], _5.prototype, "instance", void 0), e([g(F5)], _5.prototype, "draw", void 0), e([t2(0, m2(D4))], _5.prototype, "vertex", null), e([t2(0, m2(F3))], _5.prototype, "fragment", null);

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/meshing/definitions.js
var T2 = {
  [C.BYTE]: 1,
  [C.UNSIGNED_BYTE]: 1,
  [C.SHORT]: 2,
  [C.UNSIGNED_SHORT]: 2,
  [C.HALF_FLOAT]: 2,
  [C.INT]: 4,
  [C.UNSIGNED_INT]: 4,
  [C.FLOAT]: 4
};

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/meshing/Mesh.js
var i4 = class {
  constructor(t14, i7) {
    this._boundPart = null;
    const a6 = [];
    for (const e4 of i7.vertex) {
      const s6 = c.createVertex(t14, F.STATIC_DRAW, e4);
      a6.push(s6);
    }
    const u10 = [];
    for (const e4 of i7.index || []) {
      const s6 = c.createIndex(t14, F.STATIC_DRAW, e4);
      u10.push(s6);
    }
    this.groups = [];
    for (const r5 of i7.groups) {
      let o10;
      if (null != r5.index) {
        if (!i7.index) throw new Error("No index data.");
        const {
          BYTES_PER_ELEMENT: t15
        } = i7.index[r5.index];
        2 === t15 ? o10 = C.UNSIGNED_SHORT : 4 === t15 && (o10 = C.UNSIGNED_INT);
      }
      const d8 = null != r5.index ? u10[r5.index] : null, c9 = /* @__PURE__ */ new Map(), l6 = {}, p14 = {};
      for (const t15 of r5.attributes) {
        const {
          name: r6,
          count: o11,
          type: e4,
          offset: s6,
          normalized: i8,
          divisor: u11,
          stride: d9,
          vertex: f12,
          location: h11
        } = t15, b8 = `vertex-buffer-${f12}`;
        let x6 = l6[b8];
        x6 || (x6 = l6[b8] = []);
        const m14 = new t4(r6, o11, e4, s6, d9, i8, u11);
        x6.push(m14), c9.set(r6, h11), p14[b8] = a6[f12];
      }
      const f11 = new o5(t14, c9, l6, p14, d8);
      this.groups.push(__spreadProps(__spreadValues({}, r5), {
        vertexArray: f11,
        locations: c9,
        layout: l6,
        indexing: o10
      }));
    }
    this.parts = i7.parts;
  }
  bind(t14, r5) {
    this._boundPart = r5;
    const {
      group: o10
    } = this.parts[this._boundPart], {
      vertexArray: e4
    } = this.groups[o10];
    t14.bindVAO(e4);
  }
  draw(r5) {
    if (null == this._boundPart) throw new Error("Mesh.bind() has not been called.");
    const {
      start: o10,
      count: e4
    } = this.parts[this._boundPart], {
      group: s6
    } = this.parts[this._boundPart], {
      indexing: n11,
      primitive: i7
    } = this.groups[s6];
    n11 ? r5.drawElements(i7, e4, n11, o10 * T2[n11]) : r5.drawArrays(i7, o10, e4);
  }
  unbind(t14) {
    this._boundPart = null, t14.bindVAO(null);
  }
  destroy() {
    for (const {
      vertexArray: t14
    } of this.groups) t14.dispose();
  }
};

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/meshing/SimpleMesh.js
var r3 = class _r extends i4 {
  static create(e4, o10) {
    const n11 = [];
    let {
      stride: s6,
      hash: l6
    } = o10.layout;
    if (null == s6) {
      s6 = 0;
      for (const {
        count: e5,
        type: i7,
        offset: r5
      } of o10.layout.attributes) {
        if (null != r5) throw new Error("Stride cannot be computed automatically when attribute offsets are supplied explicitly.");
        s6 += e5 * T2[i7];
      }
    }
    let u10 = 0, a6 = 0;
    for (const {
      count: i7,
      name: r5,
      offset: h11,
      type: m14,
      normalized: x6
    } of o10.layout.attributes) {
      null != h11 && (a6 = h11);
      const e5 = {
        name: r5,
        location: u10,
        vertex: 0,
        count: i7,
        type: m14,
        offset: a6,
        stride: s6,
        divisor: 0,
        normalized: null != x6 && x6
      };
      n11.push(e5), u10++, a6 += i7 * T2[m14];
    }
    const c9 = {
      attributes: n11,
      primitive: o10.primitive
    };
    null != o10.index && (c9.index = 0);
    let {
      count: d8
    } = o10;
    if (null == d8 && (d8 = o10.index ? o10.index.length : o10.vertex.byteLength / s6, Math.floor(d8) !== d8)) throw new Error(`The byte length of vertex data must be an exact multiple of the stride, which is ${s6}.`);
    const p14 = {
      start: 0,
      count: d8,
      group: 0,
      primitive: o10.primitive
    }, f11 = {
      vertex: [o10.vertex],
      parts: [p14],
      groups: [c9]
    };
    null != o10.index && (f11.index = [o10.index]), null == l6 && (l6 = t5(n11));
    return new _r(e4, f11, {
      hash: l6,
      attributes: n11,
      stride: s6
    });
  }
  constructor(t14, e4, i7) {
    super(t14, e4), this.layout = i7;
  }
  bind(t14, e4 = 0) {
    super.bind(t14, e4);
  }
};

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/dotDensity/DotDensityResources.js
var p4 = class {
  constructor() {
    this._dotTextureSize = 0, this._dotTextures = null, this._dotMesh = null;
  }
  destroy() {
    this._disposeTextures(), this._dotFBO && this._dotFBO.dispose(), this._dotMesh && this._dotMesh.destroy();
  }
  getFBO(t14) {
    if (null == this._dotFBO) {
      const s6 = a, o10 = a, h11 = new e2(s6, o10);
      h11.samplingMode = L.NEAREST, h11.wrapMode = D.CLAMP_TO_EDGE;
      const d8 = new s2(t14, new i2(B.DEPTH_STENCIL, s6, o10));
      this._dotFBO = new E2(t14, h11, d8);
    }
    return this._dotFBO;
  }
  getDotDensityMesh(t14) {
    if (null == this._dotMesh) {
      const r5 = a, i7 = r5 * r5, n11 = 2, u10 = new Int16Array(i7 * n11);
      for (let t15 = 0; t15 < r5; t15++) for (let e4 = 0; e4 < r5; e4++) u10[n11 * (e4 + t15 * r5)] = e4, u10[n11 * (e4 + t15 * r5) + 1] = t15;
      const l6 = [{
        count: 2,
        type: C.UNSIGNED_SHORT,
        name: "a_position",
        offset: 0
      }], _7 = {
        hash: t5(l6),
        attributes: l6,
        stride: 4
      };
      this._dotMesh = r3.create(t14, {
        primitive: E.POINTS,
        vertex: u10,
        count: i7,
        layout: _7
      });
    }
    return this._dotMesh;
  }
  getDotDensityTextures(e4, s6, o10) {
    if (this._dotTextureSize === s6 && this._seed === o10 || (this._disposeTextures(), this._dotTextureSize = s6, this._seed = o10), null === this._dotTextures) {
      const r5 = new t(o10);
      this._dotTextures = [this._allocDotDensityTexture(e4, s6, r5), this._allocDotDensityTexture(e4, s6, r5)];
    }
    return this._dotTextures;
  }
  _disposeTextures() {
    if (this._dotTextures) {
      for (let t14 = 0; t14 < this._dotTextures.length; t14++) this._dotTextures[t14].dispose();
      this._dotTextures = null;
    }
  }
  _allocDotDensityTexture(t14, e4, s6) {
    const o10 = new Float32Array(e4 * e4 * 4);
    for (let r5 = 0; r5 < o10.length; r5++) o10[r5] = s6.getFloat();
    const i7 = new e2();
    return i7.dataType = U.FLOAT, i7.samplingMode = L.NEAREST, i7.width = e4, i7.height = e4, new c2(t14, i7, o10);
  }
};

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/dotDensity/DotDensityTechnique.js
var w3 = class extends o6 {
  constructor() {
    super(...arguments), this.type = e3.DotDensity, this.shaders = {
      polygon: new _5(),
      point: new C4(),
      fill: new x()
    }, this._resources = /* @__PURE__ */ new Map();
  }
  render(e4, t14) {
    f3(e4) || p3(e4) ? this._renderPolygons(e4, t14) : this._renderDotDensity(e4, t14);
  }
  _renderPolygons(e4, t14) {
    const {
      painter: i7
    } = e4;
    i7.setShader({
      shader: this.shaders.fill,
      uniforms: __spreadProps(__spreadValues({}, y(e4, t14.target)), {
        visualVariableColor: null,
        visualVariableOpacity: null
      }),
      defines: __spreadValues({}, h5(e4)),
      optionalAttributes: {
        zoomRange: false
      },
      useComputeBuffer: p3(e4)
    }), i7.setPipelineState(M(e4)), i7.submitDraw(e4, t14);
  }
  _renderDotDensity(o10, r5) {
    const {
      context: s6,
      painter: u10,
      requiredLevel: c9
    } = o10, p14 = r5.instance.getInput().uniforms, h11 = this._getOrCreateResourcesRecord(s6), m14 = h11.getDotDensityTextures(s6, a, p14.seed), w7 = 1 / 2 ** (c9 - r5.target.key.level), g6 = a, x6 = g6 * window.devicePixelRatio * g6 * window.devicePixelRatio, D5 = 1 / w7 * (1 / w7), b8 = p14.dotScale ? o10.state.scale / p14.dotScale : 1, y5 = p14.dotValue * b8 * D5;
    u10.setShader({
      shader: this.shaders.polygon,
      uniforms: __spreadProps(__spreadValues({}, y(o10, r5.target)), {
        instance: {
          isActive: p14.isActive,
          colors: p14.colors,
          dotValue: Math.max(1, y5)
        },
        draw: {
          dotTexture0: {
            unit: J,
            texture: m14[0]
          },
          dotTexture1: {
            unit: K,
            texture: m14[1]
          },
          tileZoomFactor: w7,
          pixelRatio: window.devicePixelRatio,
          tileDotsOverArea: x6 / (a * window.devicePixelRatio * a * window.devicePixelRatio)
        }
      }),
      defines: __spreadProps(__spreadValues({}, h5(o10)), {
        blending: p14.blending
      }),
      optionalAttributes: {},
      useComputeBuffer: false
    }), u10.setPipelineState(M(o10));
    const R4 = s6.getViewport();
    s6.setViewport(0, 0, a, a);
    const P5 = s6.getBoundFramebufferObject(), S7 = h11.getFBO(s6);
    s6.bindFramebuffer(S7), s6.setClearColor(0, 0, 0, 0), u10.setPipelineState({
      color: {
        write: [true, true, true, true],
        blendMode: "composite"
      },
      depth: false,
      stencil: false
    }), u10.updatePipelineState(s6), s6.clear(_.COLOR_BUFFER_BIT), u10.submitDraw(o10, r5), s6.bindFramebuffer(P5), s6.setViewport(R4.x, R4.y, R4.width, R4.height);
    const v5 = h11.getFBO(s6).colorTexture;
    u10.setShader({
      shader: this.shaders.point,
      uniforms: {
        view: c4(o10, r5.target),
        instance: {
          dotSize: p14.dotSize
        },
        draw: {
          locations: {
            unit: J,
            texture: v5
          },
          tileZoomFactor: 1,
          pixelRatio: window.devicePixelRatio
        }
      },
      defines: __spreadValues({}, h5(o10)),
      optionalAttributes: {},
      useComputeBuffer: false
    }), u10.setPipelineState({
      color: {
        write: [true, true, true, true],
        blendMode: "composite"
      },
      depth: false,
      stencil: false
    }), u10.submitDrawMesh(s6, h11.getDotDensityMesh(s6));
  }
  shutdown(e4) {
    super.shutdown(e4), this._resources.get(e4)?.destroy(), this._resources.delete(e4);
  }
  _getOrCreateResourcesRecord(e4) {
    let t14 = this._resources.get(e4);
    return null == t14 && (t14 = new p4(), this._resources.set(e4, t14)), t14;
  }
};

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/fill/ComplexFillTechnique.js
var m4 = class extends o6 {
  constructor() {
    super(...arguments), this.type = e3.ComplexFill, this.shaders = {
      geometry: new _4()
    };
  }
  render(e4, n11) {
    const {
      context: u10,
      painter: m14
    } = e4, p14 = n11.instance.getInput();
    m14.setShader({
      shader: this.shaders.geometry,
      uniforms: __spreadProps(__spreadValues(__spreadValues({}, d4(e4, n11.target, p14.uniforms)), y(e4, n11.target)), {
        mosaicInfo: m14.textureManager.getMosaicInfo(u10, n11.textureKey),
        localTileOffset: w2(n11.target)
      }),
      defines: __spreadValues({}, h5(e4)),
      optionalAttributes: p14.optionalAttributes,
      useComputeBuffer: p3(e4)
    }), m14.setPipelineState(M(e4)), m14.submitDraw(e4, n11);
  }
};

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/line/utils.js
function n5(n11) {
  const t14 = 1 / n11;
  return {
    antialiasing: t14,
    blur: 0 + t14
  };
}

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/fill/ComplexOutlineFillTechnique.js
var m5 = class extends o6 {
  constructor() {
    super(...arguments), this.type = e3.ComplexOutlineFill, this.shaders = {
      geometry: new C3()
    };
  }
  render(e4, a6) {
    const {
      context: u10,
      painter: m14,
      pixelRatio: p14
    } = e4, f11 = a6.instance.getInput();
    m14.setShader({
      shader: this.shaders.geometry,
      uniforms: __spreadProps(__spreadValues(__spreadValues({}, d4(e4, a6.target, f11.uniforms)), y(e4, a6.target)), {
        antialiasingControls: n5(p14),
        mosaicInfo: m14.textureManager.getMosaicInfo(u10, a6.textureKey),
        localTileOffset: w2(a6.target)
      }),
      defines: __spreadValues({}, h5(e4)),
      optionalAttributes: f11.optionalAttributes,
      useComputeBuffer: p3(e4)
    }), m14.setPipelineState(M(e4)), m14.submitDraw(e4, a6);
  }
};

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/fill/FillTechnique.js
var u3 = class extends o6 {
  constructor() {
    super(...arguments), this.type = e3.Fill, this.shaders = {
      geometry: new x()
    };
  }
  render(e4, n11) {
    const {
      painter: a6
    } = e4, u10 = n11.instance.getInput();
    a6.setShader({
      shader: this.shaders.geometry,
      uniforms: __spreadValues(__spreadValues({}, d4(e4, n11.target, u10.uniforms)), y(e4, n11.target)),
      defines: h5(e4),
      optionalAttributes: u10.optionalAttributes,
      useComputeBuffer: p3(e4)
    }), a6.setPipelineState(M(e4)), a6.submitDraw(e4, n11);
  }
};

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/fill/OutlineFillTechnique.js
var l3 = class extends o6 {
  constructor() {
    super(...arguments), this.type = e3.OutlineFill, this.shaders = {
      geometry: new H3()
    };
  }
  render(e4, n11) {
    const {
      painter: u10,
      pixelRatio: l6
    } = e4, m14 = n11.instance.getInput();
    u10.setShader({
      shader: this.shaders.geometry,
      uniforms: __spreadProps(__spreadValues(__spreadValues({}, d4(e4, n11.target, m14.uniforms)), y(e4, n11.target)), {
        antialiasingControls: n5(l6)
      }),
      defines: __spreadValues({}, h5(e4)),
      optionalAttributes: m14.optionalAttributes,
      useComputeBuffer: p3(e4)
    }), u10.setPipelineState(M(e4)), u10.submitDraw(e4, n11);
  }
};

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/fill/PatternFillTechnique.js
var m6 = class extends o6 {
  constructor() {
    super(...arguments), this.type = e3.PatternFill, this.shaders = {
      geometry: new z2()
    };
  }
  render(e4, n11) {
    const {
      context: u10,
      painter: m14
    } = e4, f11 = n11.instance.getInput();
    m14.setShader({
      shader: this.shaders.geometry,
      uniforms: __spreadProps(__spreadValues(__spreadValues({}, d4(e4, n11.target, f11.uniforms)), y(e4, n11.target)), {
        mosaicInfo: m14.textureManager.getMosaicInfo(u10, n11.textureKey),
        localTileOffset: w2(n11.target)
      }),
      defines: __spreadValues({}, h5(e4)),
      optionalAttributes: f11.optionalAttributes,
      useComputeBuffer: p3(e4)
    }), m14.setPipelineState(M(e4)), m14.submitDraw(e4, n11);
  }
};

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/fill/PatternOutlineFillTechnique.js
var m7 = class extends o6 {
  constructor() {
    super(...arguments), this.type = e3.PatternOutlineFill, this.shaders = {
      geometry: new S3()
    };
  }
  render(e4, a6) {
    const {
      context: l6,
      painter: m14,
      pixelRatio: p14
    } = e4, f11 = a6.instance.getInput();
    m14.setShader({
      shader: this.shaders.geometry,
      uniforms: __spreadProps(__spreadValues(__spreadValues({}, d4(e4, a6.target, f11.uniforms)), y(e4, a6.target)), {
        antialiasingControls: n5(p14),
        mosaicInfo: m14.textureManager.getMosaicInfo(l6, a6.textureKey),
        localTileOffset: w2(a6.target)
      }),
      defines: __spreadValues({}, h5(e4)),
      optionalAttributes: f11.optionalAttributes,
      useComputeBuffer: p3(e4)
    }), m14.setPipelineState(M(e4)), m14.submitDraw(e4, a6);
  }
};

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/heatmap/HeatmapResources.js
var m8 = () => n.getLogger("esri.views.2d.engine.webgl.shaderGraph.techniques.heatmap.HeatmapResources");
var f4 = class {
  destroy() {
    this._accumulateFramebuffer = r(this._accumulateFramebuffer), this._resolveGradientTexture = r(this._resolveGradientTexture), this._prevGradientHash = null, this._qualityProfile = null;
  }
  get initialized() {
    return null != this._accumulateFramebuffer && null != this._resolveGradientTexture;
  }
  get accumulateFramebuffer() {
    return this._accumulateFramebuffer;
  }
  get resolveGradientTexture() {
    return this._resolveGradientTexture;
  }
  loadQualityProfile(e4) {
    if (null == this._qualityProfile) {
      const r5 = n4(e4, m8());
      this._qualityProfile = __spreadProps(__spreadValues({}, r5), {
        defines: {
          usesHalfFloatPrecision: r5.dataType !== U.FLOAT
        }
      });
    }
    return this._qualityProfile;
  }
  ensureAccumulateFBO(e4, r5, t14) {
    if (null == this._accumulateFramebuffer) {
      const {
        dataType: u10,
        samplingMode: o10,
        pixelFormat: m14,
        internalFormat: f11
      } = this.loadQualityProfile(e4), h11 = new e2(r5, t14);
      h11.pixelFormat = m14, h11.internalFormat = f11, h11.dataType = u10, h11.samplingMode = o10, h11.wrapMode = D.CLAMP_TO_EDGE;
      const c9 = new i2(B.DEPTH_STENCIL, r5, t14);
      this._accumulateFramebuffer = new E2(e4, h11, c9);
    } else {
      const {
        width: e5,
        height: a6
      } = this._accumulateFramebuffer;
      e5 === r5 && a6 === t14 || this._accumulateFramebuffer.resize(r5, t14);
    }
    return this._accumulateFramebuffer;
  }
  ensureResolveGradientTexture(e4, r5, t14) {
    if (null == this._resolveGradientTexture) {
      const r6 = new e2();
      r6.wrapMode = D.CLAMP_TO_EDGE, this._resolveGradientTexture = new c2(e4, r6);
    } else this._prevGradientHash !== r5 && (this._resolveGradientTexture.resize(t14.length / 4, 1), this._resolveGradientTexture.setData(t14), this._prevGradientHash = r5);
    return this._resolveGradientTexture;
  }
};

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/heatmapUtils.js
function n6(n11) {
  return n11 ? 0.25 : 1;
}

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/HeatmapAccumulateShader.js
var v2 = class extends S2 {
};
e([h(5, C2)], v2.prototype, "offset", void 0);
var x2 = class extends F3 {
};
var g3 = class extends P {
};
e([g(j)], g3.prototype, "radius", void 0), e([g(j)], g3.prototype, "isFieldActive", void 0);
var F6 = class extends P2 {
  constructor() {
    super(...arguments), this.usesHalfFloatPrecision = false;
  }
  vertex(t14) {
    const {
      radius: e4,
      isFieldActive: s6
    } = this.kernelControls, i7 = t14.offset, o10 = s6.multiply(this.storage.getVVData(t14.id).x).add(new j(1).subtract(s6)), l6 = this.view.displayViewScreenMat3.multiply(new G2(t14.pos, 1)).add(this.view.displayViewMat3.multiply(new G2(i7, 0)).multiply(e4)), r5 = this.clip(t14.id);
    return __spreadValues({
      glPosition: new H2(l6.xy, r5, 1),
      offset: i7,
      fieldValue: o10,
      color: new H2(0)
    }, this.maybeRunHittest(t14, {}, null));
  }
  fragment(t14) {
    const {
      offset: e4,
      fieldValue: s6
    } = t14, i7 = kn(e4), o10 = ee2(i7, new j(1)), l6 = new j(1).subtract(i7.multiply(i7)), r5 = l6.multiply(l6), a6 = o10.multiply(r5).multiply(s6).multiply(new j(n6(this.usesHalfFloatPrecision)));
    return this.getFragmentOutput(new H2(a6), t14);
  }
  hittest(t14) {
    const {
      viewMat3: e4,
      tileMat3: s6
    } = this.view, i7 = e4.multiply(s6).multiply(new G2(t14.pos, 1));
    return R(i7.xy, this.kernelControls.radius, this.hittestRequest.position);
  }
};
e([K2], F6.prototype, "usesHalfFloatPrecision", void 0), e([g(g3)], F6.prototype, "kernelControls", void 0), e([t2(0, m2(v2))], F6.prototype, "vertex", null), e([t2(0, m2(x2))], F6.prototype, "fragment", null);

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/HeatmapResolveShader.js
var x3 = class extends b {
};
e([h(0, C2)], x3.prototype, "pos", void 0);
var f5 = class extends v {
};
var h6 = class extends P {
};
e([g(S)], h6.prototype, "texture", void 0), e([g(C2)], h6.prototype, "minAndInvRange", void 0), e([g(j)], h6.prototype, "normalization", void 0);
var w4 = class extends P {
};
e([g(S)], w4.prototype, "texture", void 0);
var b3 = class extends j2 {
  constructor() {
    super(...arguments), this.usesHalfFloatPrecision = false;
  }
  vertex(t14) {
    return {
      glPosition: new H2(t14.pos.multiply(2).subtract(1), 1, 1),
      uv: t14.pos
    };
  }
  fragment(t14) {
    const {
      accumulatedDensity: e4,
      gradient: o10
    } = this;
    let r5 = se(e4.texture, t14.uv).r.multiply(new j(n6(this.usesHalfFloatPrecision)));
    r5 = r5.multiply(e4.normalization), r5 = r5.subtract(e4.minAndInvRange.x).multiply(e4.minAndInvRange.y);
    const s6 = se(o10.texture, new C2(r5, 0.5)), n11 = new w();
    return n11.glFragColor = new H2(s6.rgb.multiply(s6.a), s6.a), n11;
  }
};
e([K2], b3.prototype, "usesHalfFloatPrecision", void 0), e([g(h6)], b3.prototype, "accumulatedDensity", void 0), e([g(w4)], b3.prototype, "gradient", void 0), e([t2(0, m2(x3))], b3.prototype, "vertex", null), e([t2(0, m2(f5))], b3.prototype, "fragment", null);

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/heatmap/HeatmapTechnique.js
var p5 = class extends o6 {
  constructor() {
    super(...arguments), this.type = e3.Heatmap, this.shaders = {
      accumulate: new F6(),
      resolve: new b3()
    }, this.postProcessingEnabled = true, this._isBound = false, this._resources = /* @__PURE__ */ new Map(), this.overrideStencilRef = f6;
  }
  shutdown(e4) {
    super.shutdown(e4), this._resources.get(e4)?.destroy(), this._resources.delete(e4), this._prevFBO = null, this._unbind();
  }
  render(e4, n11) {
    const {
      context: o10,
      painter: u10,
      state: a6
    } = e4, d8 = n11.instance.getInput(), {
      isFieldActive: l6
    } = d8.uniforms, c9 = this._getOrCreateResourcesRecord(o10), h11 = c9.loadQualityProfile(o10);
    if (f3(e4)) return;
    p3(e4) || this._bind(e4, c9, d8), u10.setShader({
      shader: this.shaders.accumulate,
      uniforms: __spreadProps(__spreadValues({}, y(e4, n11.target)), {
        kernelControls: {
          radius: g4(d8, a6),
          isFieldActive: l6 ? 1 : 0
        }
      }),
      defines: __spreadValues(__spreadValues({}, h5(e4)), h11.defines),
      optionalAttributes: {},
      useComputeBuffer: p3(e4)
    });
    const p14 = p3(e4) ? w5 : _6;
    u10.setPipelineState(p14), u10.submitDraw(e4, n11);
  }
  postProcess(e4, s6) {
    if (p3(e4) || f3(e4)) return;
    const {
      context: i7,
      painter: n11
    } = e4, o10 = this._resources.get(i7);
    if (null == this._prevFBO || null == this._prevViewport || !o10?.initialized) return;
    const {
      defines: u10
    } = o10.loadQualityProfile(i7), {
      minDensity: a6,
      maxDensity: d8,
      radius: l6
    } = s6.getInput().uniforms, c9 = 8, h11 = 9, p14 = o10.accumulateFramebuffer, m14 = o10.resolveGradientTexture;
    n11.setShader({
      shader: this.shaders.resolve,
      uniforms: {
        accumulatedDensity: {
          texture: {
            unit: c9,
            texture: p14.colorTexture
          },
          minAndInvRange: [a6, 1 / (d8 - a6)],
          normalization: 3 / (l6 * l6 * Math.PI)
        },
        gradient: {
          texture: {
            unit: h11,
            texture: m14
          }
        }
      },
      defines: u10,
      optionalAttributes: {},
      useComputeBuffer: false
    }), i7.bindFramebuffer(this._prevFBO), i7.setViewport(0, 0, this._prevViewport.width, this._prevViewport.height), i7.bindTexture(p14.colorTexture, c9), i7.bindTexture(m14, h11), n11.setPipelineState(b4), n11.submitDrawQuad(i7), this._unbind();
  }
  _getOrCreateResourcesRecord(e4) {
    let t14 = this._resources.get(e4);
    return null == t14 && (t14 = new f4(), this._resources.set(e4, t14)), t14;
  }
  _unbind() {
    this._prevFBO = null, this._prevViewport = null, this._isBound = false;
  }
  _bind(e4, t14, r5) {
    if (this._isBound) return;
    const {
      context: s6,
      state: i7,
      pixelRatio: n11
    } = e4, o10 = s6.getBoundFramebufferObject(), u10 = s6.getViewport();
    this._prevFBO = o10, this._prevViewport = u10;
    const {
      gradient: a6,
      gradientHash: d8
    } = r5.uniforms;
    t14.ensureResolveGradientTexture(s6, d8, a6);
    const {
      width: l6,
      height: p14
    } = u10, f11 = m9(g4(r5, i7), n11), _7 = l6 * f11, w7 = p14 * f11, b8 = t14.ensureAccumulateFBO(s6, _7, w7);
    s6.blitFramebuffer(o10, b8, 0, 0, o10.width, o10.height, 0, 0, b8.width, b8.height, _.STENCIL_BUFFER_BIT, L.NEAREST), s6.bindFramebuffer(b8), s6.setViewport(0, 0, b8.width, b8.height), s6.setColorMask(true, true, true, true), s6.setClearColor(0, 0, 0, 0), s6.clear(_.COLOR_BUFFER_BIT), this._isBound = true;
  }
};
function m9(e4, t14) {
  const r5 = t14 > 1.5 ? 0.25 : 0.5;
  return e4 < 1 / (2 * r5) ? 1 : r5;
}
function f6(e4) {
  return e4.key.level + 1;
}
var _6 = {
  color: {
    write: [true, true, true, true],
    blendMode: "additive"
  },
  depth: false,
  stencil: {
    write: false,
    test: {
      ref: f6,
      compare: O2.GEQUAL,
      mask: 255,
      op: {
        fail: I.KEEP,
        zFail: I.KEEP,
        zPass: I.REPLACE
      }
    }
  }
};
var w5 = __spreadProps(__spreadValues({}, _6), {
  stencil: false
});
var b4 = {
  color: {
    write: [true, true, true, true],
    blendMode: "composite"
  },
  depth: false,
  stencil: false
};
function g4(e4, t14) {
  const {
    referenceScale: r5,
    radius: s6
  } = e4.uniforms;
  return s6 * (0 !== r5 ? r5 / t14.scale : 1);
}

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/VisualVariableRotation.js
var d5 = class extends P {
  getVVRotationMat4(t14) {
    return xt(h2(t14), nt.identity(), () => {
      const e4 = this._getNormalizedAngle(t14).multiply(t6), r5 = Wn(e4), o10 = tn(e4);
      return new nt(o10, r5, 0, 0, r5.multiply(new j(-1)), o10, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    });
  }
  getVVRotationMat3(t14) {
    return xt(h2(t14), tt.identity(), () => {
      const e4 = this._getNormalizedAngle(t14).multiply(t6), r5 = Wn(e4), o10 = tn(e4);
      return new tt(o10, r5, 0, r5.multiply(new j(-1)), o10, 0, 0, 0, 1);
    });
  }
  _getNormalizedAngle(t14) {
    const e4 = Bt(this.rotationType, new j(i3.Arithmatic));
    return xt(e4, new j(90).subtract(t14), t14);
  }
};
e([g(j)], d5.prototype, "rotationType", void 0);

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/text/TextShader.js
var Q = 360 / 254;
var T3 = class extends S2 {
};
e([h(3, H2)], T3.prototype, "color", void 0), e([h(4, C2)], T3.prototype, "offset", void 0), e([h(5, C2)], T3.prototype, "textureUV", void 0), e([h(6, j)], T3.prototype, "fontSize", void 0), e([h(7, j)], T3.prototype, "referenceSize", void 0), e([h(8, j)], T3.prototype, "haloFontSize", void 0), e([h(9, H2)], T3.prototype, "haloColor", void 0), e([h(10, C2)], T3.prototype, "zoomRange", void 0), e([h(11, j)], T3.prototype, "clipAngle", void 0), e([h(12, H2)], T3.prototype, "referenceSymbol", void 0);
var X = class extends I2 {
};
e([h(13, C2)], X.prototype, "offsetNextVertex1", void 0), e([h(14, C2)], X.prototype, "offsetNextVertex2", void 0);
var Y2 = class extends F3 {
};
var $ = class extends P2 {
  constructor() {
    super(...arguments), this.computeAttributes = {
      offset: ["offsetNextVertex1", "offsetNextVertex2"]
    }, this.isHaloPass = false, this.isBackgroundPass = false, this.isLabel = false;
  }
  clipLabel(t14, e4, o10) {
    const s6 = e4.multiply(Q), a6 = Xt(this.view.rotation.subtract(s6)), l6 = Un(new j(360).subtract(a6), a6);
    let r5 = new j(0);
    const p14 = vn(this.view.currentZoom.multiply(rt)).divide(rt), n11 = t14.x, c9 = t14.y, f11 = new j(1).subtract(ee2(n11, p14)).multiply(2), v5 = ee2(new j(90), l6).multiply(2), b8 = new j(2).multiply(new j(1).subtract(ee2(p14, c9)));
    return r5 = r5.add(o10.multiply(f11)), r5 = r5.add(o10.multiply(v5)), r5 = r5.add(b8), r5;
  }
  vertex(t14, e4) {
    const i7 = j3(t14.bitset, F2), s6 = new j(1).subtract(i7);
    let a6 = t14.fontSize, l6 = a6.divide(A);
    const r5 = this.isHaloPass ? t14.haloColor : this._getVertexColor(t14), p14 = this.isLabel ? this.storage.getAnimationValue(t14.id) : new j(1), n11 = this.isLabel ? r5.multiply(p14) : r5, d8 = this.view.displayViewScreenMat3.multiply(new G2(t14.pos, 1));
    let u10 = t14.offset, y5 = new j(1), h11 = tt.identity(), S7 = new C2(0);
    if (this.isLabel) {
      if (!t14.referenceSymbol) throw new Error("InternalError: Optional attribute 'referenceSymbol' expected for labels");
      const e5 = t14.referenceSymbol, i8 = e5.xy, s7 = e5.z, a7 = this._unpackDirection(e5.w), l7 = t7(this, t14.id, s7).divide(2), r6 = a7.multiply(l7.add(U2));
      S7 = i8.add(r6), u10 = u10.add(S7);
    } else {
      y5 = t7(this, t14.id, t14.referenceSize).divide(t14.referenceSize), a6 = a6.multiply(y5), l6 = l6.multiply(y5), u10 = u10.multiply(y5), h11 = n2(this, t14.id), u10 = h11.multiply(new G2(u10, 0)).xy;
    }
    const z6 = j3(t14.bitset, H), j4 = this._getViewRotationMatrix(z6).multiply(new G2(u10, 0));
    let M3 = this.isLabel ? this.clipLabel(t14.zoomRange, t14.clipAngle, z6) : this.clip(t14.id, t14.zoomRange);
    M3 = this.isBackgroundPass ? M3.add(s6.multiply(2)) : M3.add(i7.multiply(2));
    const R4 = this.isLabel ? Ht(Ct(M3, new j(1)), Bt(p14, new j(0))) : new Y(false), C5 = new H2(d8.xy.add(j4.xy), M3, 1), O4 = t14.textureUV.divide(this.mosaicInfo.size);
    let L3 = new j(0);
    if (this.isHaloPass) {
      L3 = t14.haloFontSize.divide(l6).divide(G);
    }
    return __spreadValues({
      glPosition: C5,
      color: n11,
      size: l6,
      textureUV: O4,
      antialiasingWidth: new j(0.105 * A).divide(a6).divide(this.view.pixelRatio),
      haloDistanceOffset: L3
    }, this.maybeRunHittest(t14, e4, {
      vvSizeAdjustment: y5,
      vvRotation: h11,
      labelOffset: S7,
      labelClipped: R4
    }));
  }
  _getViewRotationMatrix(t14) {
    const e4 = this.view.displayViewMat3, i7 = this.view.displayMat3, o10 = new j(1).subtract(t14);
    return e4.multiply(t14).add(i7.multiply(o10));
  }
  fragment(t14) {
    const e4 = new j(2 / 8), i7 = new j(1).subtract(e4), o10 = se(this.mosaicInfo.texture, t14.textureUV).a;
    let s6 = i7.subtract(t14.haloDistanceOffset);
    this.highlight && (s6 = s6.divide(2));
    const a6 = t14.antialiasingWidth, l6 = te(s6.subtract(a6), s6.add(a6), o10);
    return this.getFragmentOutput(t14.color.multiply(l6), t14);
  }
  hittest(t14, e4, {
    vvSizeAdjustment: i7,
    vvRotation: o10,
    labelOffset: s6,
    labelClipped: a6
  }) {
    let l6, r5, p14;
    this.isLabel ? (l6 = new G2(t14.offset.add(s6), 0), r5 = new G2(e4.offsetNextVertex1.add(s6), 0), p14 = new G2(e4.offsetNextVertex2.add(s6), 0)) : (l6 = o10.multiply(new G2(t14.offset.multiply(i7), 0)), r5 = o10.multiply(new G2(e4.offsetNextVertex1.multiply(i7), 0)), p14 = o10.multiply(new G2(e4.offsetNextVertex2.multiply(i7), 0)));
    const {
      viewMat3: n11,
      tileMat3: d8
    } = this.view, u10 = n11.multiply(d8).multiply(new G2(t14.pos, 1)), m14 = u10.add(d8.multiply(l6)).xy, y5 = u10.add(d8.multiply(r5)).xy, h11 = u10.add(d8.multiply(p14)).xy, f11 = P3(this.hittestRequest.position, m14.xy, y5.xy, h11.xy);
    return this.isLabel ? xt(a6, q4(this.hittestRequest), f11) : f11;
  }
  _unpackDirection(t14) {
    const e4 = new O3(t14), i7 = Dt(e4, new O3(2)), o10 = Nt(e4, new O3(3));
    return new C2(new j(i7).subtract(1), new j(o10).subtract(1));
  }
  _getVertexColor(t14) {
    let e4 = t14.color;
    if (this.visualVariableColor) {
      const i7 = this.storage.getColorValue(t14.id);
      e4 = this.visualVariableColor.getColor(i7, t14.color, new Y(false));
    }
    if (this.visualVariableOpacity) {
      const i7 = this.storage.getOpacityValue(t14.id), o10 = this.visualVariableOpacity.getOpacity(i7);
      e4 = e4.multiply(o10);
    }
    return e4;
  }
};
e([_3(f)], $.prototype, "visualVariableColor", void 0), e([_3(h4)], $.prototype, "visualVariableOpacity", void 0), e([_3(d5)], $.prototype, "visualVariableRotation", void 0), e([_3(m3)], $.prototype, "visualVariableSizeMinMaxValue", void 0), e([_3(p2)], $.prototype, "visualVariableSizeScaleStops", void 0), e([_3(f2)], $.prototype, "visualVariableSizeStops", void 0), e([_3(l2)], $.prototype, "visualVariableSizeUnitValue", void 0), e([g(p)], $.prototype, "mosaicInfo", void 0), e([K2], $.prototype, "isHaloPass", void 0), e([K2], $.prototype, "isBackgroundPass", void 0), e([K2], $.prototype, "isLabel", void 0), e([t2(0, m2(T3)), t2(1, m2(X))], $.prototype, "vertex", null), e([t2(0, m2(Y2))], $.prototype, "fragment", null);

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/labels/LabelTechnique.js
var p6 = class extends o6 {
  constructor() {
    super(...arguments), this.type = e3.Label, this.shaders = {
      geometry: new $()
    }, this.drawPhase = E4.LABEL | E4.LABEL_ALPHA | E4.HITTEST, this.symbologyPlane = S4.TEXT;
  }
  render(e4, s6) {
    const {
      context: t14,
      painter: u10
    } = e4, m14 = h5(e4), p14 = __spreadValues({}, M(e4)), d8 = s6.instance.getInput(), h11 = {
      shader: this.shaders.geometry,
      uniforms: __spreadProps(__spreadValues(__spreadValues({}, d4(e4, s6.target, d8.uniforms)), y(e4, s6.target)), {
        mosaicInfo: u10.textureManager.getMosaicInfo(t14, s6.textureKey)
      }),
      defines: __spreadProps(__spreadValues({}, m14), {
        isHaloPass: false,
        isBackgroundPass: true,
        isLabel: true
      }),
      optionalAttributes: d8.optionalAttributes,
      useComputeBuffer: p3(e4)
    };
    u10.setShader(h11), u10.setPipelineState(p14), u10.submitDraw(e4, s6), u10.setShader(__spreadProps(__spreadValues({}, h11), {
      defines: __spreadProps(__spreadValues({}, m14), {
        isHaloPass: true,
        isBackgroundPass: false,
        isLabel: true
      })
    })), u10.setPipelineState(p14), u10.submitDraw(e4, s6), u10.setShader(__spreadProps(__spreadValues({}, h11), {
      defines: __spreadProps(__spreadValues({}, m14), {
        isHaloPass: false,
        isBackgroundPass: false,
        isLabel: true
      })
    })), u10.setPipelineState(p14), u10.submitDraw(e4, s6);
  }
};

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/line/LineTechnique.js
var p7 = class extends o6 {
  constructor() {
    super(...arguments), this.type = e3.Line, this.shaders = {
      geometry: new B2()
    }, this.symbologyPlane = S4.LINE;
  }
  render(e4, t14) {
    const {
      painter: a6,
      pixelRatio: u10
    } = e4, p14 = t14.instance.getInput();
    a6.setShader({
      shader: this.shaders.geometry,
      uniforms: __spreadProps(__spreadValues(__spreadValues({}, d4(e4, t14.target, p14.uniforms)), y(e4, t14.target)), {
        antialiasingControls: n5(u10)
      }),
      defines: __spreadValues({}, h5(e4)),
      optionalAttributes: p14.optionalAttributes,
      useComputeBuffer: p3(e4)
    }), a6.setPipelineState(M(e4)), a6.submitDraw(e4, t14);
  }
};

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/TexturedLineShader.js
var A3 = class extends q5 {
};
e([h(9, j)], A3.prototype, "accumulatedDistance", void 0), e([h(10, C2)], A3.prototype, "segmentDirection", void 0), e([h(11, H2)], A3.prototype, "tlbr", void 0);
var R3 = class extends B2 {
  _getLineWidthRatio(t14, e4) {
    const s6 = new j(o3), a6 = j3(t14.bitset, D2);
    return a6.multiply(Bn(e4, new j(0.25))).add(new j(1).subtract(a6)).divide(s6);
  }
  _getSDFAlpha(t14) {
    const {
      halfWidth: e4,
      normal: i7,
      tlbr: s6,
      patternSize: a6,
      accumulatedDistance: n11,
      lineWidthRatio: l6
    } = t14, h11 = a6.x.multiply(new j(2)).multiply(l6), y5 = bn(n11.divide(h11)), w7 = new j(0.25).multiply(i7.y).add(new j(0.5)), f11 = Sn(s6.xy, s6.zw, new C2(y5, w7)), b8 = k(se(this.mosaicInfo.texture, f11)).subtract(new j(0.5)).multiply(e4), x6 = Zt(new j(0.5).subtract(b8), new j(0), new j(1));
    return new H2(x6);
  }
  _getPatternColor(t14) {
    const {
      halfWidth: e4,
      normal: i7,
      color: s6,
      accumulatedDistance: a6,
      patternSize: n11,
      sampleAlphaOnly: l6,
      tlbr: p14
    } = t14, w7 = n11.y.multiply(new j(2).multiply(e4).divide(n11.x)), f11 = bn(a6.divide(w7)), b8 = new j(0.5).multiply(i7.y).add(new j(0.5)), x6 = Sn(p14.xy, p14.zw, new C2(b8, f11));
    let g6 = se(this.mosaicInfo.texture, x6);
    return null != this.visualVariableColor && (g6 = xt(Ct(l6, new j(0.5)), new H2(s6.a), s6)), g6;
  }
  vertex(t14, e4) {
    const {
      segmentDirection: i7,
      tlbr: s6,
      bitset: a6
    } = t14, n11 = T(this, t14), l6 = t14.accumulatedDistance.divide(this.view.displayZoomFactor).add(ln(i7, n11.scaledOffset)), r5 = new C2(s6.z.subtract(s6.x), s6.w.subtract(s6.y)), m14 = s6.divide(this.mosaicInfo.size.xyxy), c9 = j3(a6, E3), p14 = j3(a6, q), u10 = xt(Ct(c9, new j(0.5)), this._getLineWidthRatio(t14, n11.scaledHalfWidth), new j(1));
    return __spreadValues(__spreadProps(__spreadValues({}, n11), {
      tlbr: m14,
      patternSize: r5,
      accumulatedDistance: l6,
      isSDF: c9,
      sampleAlphaOnly: p14,
      lineWidthRatio: u10
    }), this.maybeRunHittest(t14, e4, n11.halfWidth));
  }
  fragment(t14) {
    const {
      color: e4,
      opacity: i7,
      isSDF: s6
    } = t14, a6 = D3(t14, this.antialiasingControls.blur), n11 = xt(Ct(s6, new j(0.5)), this._getSDFAlpha(t14), this._getPatternColor(t14)), l6 = e4.multiply(i7).multiply(a6).multiply(n11);
    return this.getFragmentOutput(l6, t14);
  }
};
e([g(p)], R3.prototype, "mosaicInfo", void 0), e([t2(0, m2(A3)), t2(1, m2(q3))], R3.prototype, "vertex", null);

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/line/TexturedLineTechnique.js
var p8 = class extends o6 {
  constructor() {
    super(...arguments), this.type = e3.TexturedLine, this.shaders = {
      geometry: new R3()
    }, this.symbologyPlane = S4.LINE;
  }
  render(e4, t14) {
    const {
      context: a6,
      painter: m14,
      pixelRatio: p14
    } = e4, f11 = t14.instance.getInput();
    m14.setShader({
      shader: this.shaders.geometry,
      uniforms: __spreadProps(__spreadValues(__spreadValues({}, d4(e4, t14.target, f11.uniforms)), y(e4, t14.target)), {
        antialiasingControls: n5(p14),
        mosaicInfo: m14.textureManager.getMosaicInfo(a6, t14.textureKey)
      }),
      defines: __spreadValues({}, h5(e4)),
      optionalAttributes: f11.optionalAttributes,
      useComputeBuffer: p3(e4)
    }), m14.setPipelineState(M(e4)), m14.submitDraw(e4, t14);
  }
};

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/markers/MarkerShader.js
var X2 = class extends S2 {
};
e([h(3, H2)], X2.prototype, "color", void 0), e([h(4, H2)], X2.prototype, "outlineColor", void 0), e([h(5, C2)], X2.prototype, "offset", void 0), e([h(6, C2)], X2.prototype, "textureUV", void 0), e([h(7, H2)], X2.prototype, "sizing", void 0), e([h(8, j)], X2.prototype, "placementAngle", void 0), e([h(9, j)], X2.prototype, "sizeRatio", void 0), e([h(10, C2)], X2.prototype, "zoomRange", void 0);
var Y3 = class extends I2 {
};
e([h(12, C2)], Y3.prototype, "offsetNextVertex1", void 0), e([h(13, C2)], Y3.prototype, "offsetNextVertex2", void 0), e([h(14, C2)], Y3.prototype, "textureUVNextVertex1", void 0), e([h(15, C2)], Y3.prototype, "textureUVNextVertex2", void 0);
var Z = class extends F3 {
};
function $2(t14, e4, i7, o10) {
  return e4.multiply(t14.x).add(i7.multiply(t14.y)).add(o10.multiply(t14.z));
}
function tt2(t14) {
  return t14.multiply(t14).divide(128);
}
var et = class extends P2 {
  constructor() {
    super(...arguments), this.computeAttributes = {
      offset: ["offsetNextVertex1", "offsetNextVertex2"],
      textureUV: ["textureUVNextVertex1", "textureUVNextVertex2"]
    };
  }
  vertex(t14, e4) {
    const i7 = tt2(t14.sizing.x), o10 = tt2(t14.sizing.y), s6 = tt2(t14.sizing.z), l6 = t14.placementAngle, r5 = j3(t14.bitset, o4.bitset.isSDF), y5 = j3(t14.bitset, o4.bitset.isMapAligned), h11 = j3(t14.bitset, o4.bitset.scaleSymbolsProportionally), c9 = z(t14.bitset, o4.bitset.colorLocked), x6 = u2(this, t14.id), v5 = r2(this, t14.id, t14.color, c9).multiply(x6), V4 = this.view.displayViewScreenMat3.multiply(new G2(t14.pos.xy, 1)), w7 = t7(this, t14.id, s6).divide(s6), f11 = i7.multiply(w7), S7 = t14.offset.xy.multiply(w7);
    let b8 = o10.multiply(h11.multiply(w7.subtract(1)).add(1));
    b8 = Un(b8, Bn(f11.subtract(0.99), new j(0)));
    const g6 = Bn(b8, new j(1)), z6 = Un(b8, new j(1)), C5 = tt.fromRotation(l6.multiply(c3)), _7 = n2(this, t14.id), R4 = this._getViewRotationMatrix(y5).multiply(_7).multiply(C5).multiply(new G2(S7.xy, 0)), U4 = this.clip(t14.id, t14.zoomRange), N = new H2(V4.xy.add(R4.xy), U4, 1), F7 = t14.textureUV.divide(this.mosaicInfo.size), D5 = t14.outlineColor.multiply(z6), I3 = j3(t14.bitset, o4.bitset.overrideOutlineColor), O4 = t14.sizeRatio.multiply(f11).multiply(0.5);
    return __spreadValues({
      glPosition: N,
      color: v5,
      textureUV: F7,
      outlineColor: D5,
      outlineSize: g6,
      distanceToPx: O4,
      isSDF: r5,
      overrideOutlineColor: I3
    }, this.maybeRunHittest(t14, e4, {
      pos: t14.pos,
      size: f11,
      sizeCorrection: w7,
      isMapAligned: y5,
      vvRotationMat3: _7,
      placementMat3: C5,
      outlineSize: g6,
      distanceToPx: O4,
      isSDF: r5
    }));
  }
  fragment(t14) {
    const e4 = this._getColor(t14.textureUV, t14);
    return this.getFragmentOutput(e4, t14);
  }
  hittest(t14, e4, i7) {
    return xt(St(i7.size, this.hittestRequest.smallSymbolSizeThreshold), this._hittestSmallMarker(t14, e4, i7), this._hittestMarker(t14, e4, i7));
  }
  _getViewRotationMatrix(t14) {
    const e4 = this.view.displayViewMat3, i7 = this.view.displayMat3, o10 = new j(1).subtract(t14);
    return e4.multiply(t14).add(i7.multiply(o10));
  }
  _getViewScreenMatrix(t14) {
    const e4 = this.view.viewMat3.multiply(this.view.tileMat3), i7 = this.view.tileMat3, o10 = new j(1).subtract(t14);
    return e4.multiply(t14).add(i7.multiply(o10));
  }
  _getColor(t14, e4) {
    return xt(Bt(e4.isSDF, new j(1)), this._getSDFColor(t14, e4), this._getSpriteColor(t14, e4));
  }
  _getSpriteColor(t14, e4) {
    return se(this.mosaicInfo.texture, t14).multiply(e4.color);
  }
  _getSDFColor(t14, e4) {
    const i7 = se(this.mosaicInfo.texture, t14), o10 = new j(0.5).subtract(k(i7)).multiply(e4.distanceToPx).multiply(o2), s6 = Zt(new j(0.5).subtract(o10), new j(0), new j(1)), l6 = e4.color.multiply(s6);
    let r5 = e4.outlineSize;
    this.highlight && (r5 = Bn(r5, e4.overrideOutlineColor.multiply(4)));
    const a6 = r5.multiply(0.5), p14 = Xt(o10).subtract(a6), d8 = Zt(new j(0.5).subtract(p14), new j(0), new j(1)), m14 = Sn(e4.outlineColor, e4.color, e4.overrideOutlineColor).multiply(d8);
    return new j(1).subtract(m14.a).multiply(l6).add(m14);
  }
  _hittestSmallMarker(t14, e4, i7) {
    const {
      position: o10,
      distance: s6,
      smallSymbolDistance: l6
    } = this.hittestRequest, r5 = s6.subtract(l6), {
      viewMat3: p14,
      tileMat3: n11
    } = this.view, u10 = p14.multiply(n11).multiply(new G2(i7.pos, 1)).xy, d8 = i7.size.multiply(0.5);
    return sn(u10, o10).subtract(d8).add(r5);
  }
  _hittestMarker(t14, e4, i7) {
    const {
      pos: o10,
      sizeCorrection: s6,
      isMapAligned: l6
    } = i7, r5 = new G2(t14.offset.multiply(s6), 0), p14 = new G2(e4.offsetNextVertex1.multiply(s6), 0), n11 = new G2(e4.offsetNextVertex2.multiply(s6), 0), {
      viewMat3: u10,
      tileMat3: d8
    } = this.view, m14 = u10.multiply(d8).multiply(new G2(o10, 1)), h11 = this._getViewScreenMatrix(l6).multiply(i7.vvRotationMat3).multiply(i7.placementMat3), c9 = m14.add(h11.multiply(r5)).xy, x6 = m14.add(h11.multiply(p14)).xy, v5 = m14.add(h11.multiply(n11)).xy, V4 = this.hittestRequest.position, w7 = this.hittestRequest.distance, f11 = P3(V4, c9, x6, v5);
    return xt(Ct(f11, w7), f11, this._hittestSamples(c9, x6, v5, t14, e4, i7));
  }
  _hittestSamples(t14, e4, i7, o10, s6, l6) {
    const {
      outlineSize: r5,
      isSDF: a6,
      distanceToPx: p14
    } = l6, n11 = this.hittestRequest.position, d8 = this.hittestRequest.distance, y5 = h3(n11.add(new C2(yt(d8), yt(d8))), t14, e4, i7), h11 = h3(n11.add(new C2(0, yt(d8))), t14, e4, i7), c9 = h3(n11.add(new C2(d8, yt(d8))), t14, e4, i7), x6 = h3(n11.add(new C2(yt(d8), 0)), t14, e4, i7), v5 = h3(n11, t14, e4, i7), V4 = h3(n11.add(new C2(d8, 0)), t14, e4, i7), w7 = h3(n11.add(new C2(yt(d8), d8)), t14, e4, i7), f11 = h3(n11.add(new C2(0, d8)), t14, e4, i7), S7 = h3(n11.add(new C2(d8, d8)), t14, e4, i7), M3 = o10.textureUV.divide(this.mosaicInfo.size), C5 = s6.textureUVNextVertex1.divide(this.mosaicInfo.size), _7 = s6.textureUVNextVertex2.divide(this.mosaicInfo.size), R4 = {
      color: new H2(1),
      outlineColor: new H2(1),
      overrideOutlineColor: new j(1),
      outlineSize: r5,
      distanceToPx: p14,
      isSDF: a6
    };
    let j4 = new j(0);
    return j4 = j4.add(g2(y5).multiply(this._getColor($2(y5, M3, C5, _7), R4).a)), j4 = j4.add(g2(h11).multiply(this._getColor($2(h11, M3, C5, _7), R4).a)), j4 = j4.add(g2(c9).multiply(this._getColor($2(c9, M3, C5, _7), R4).a)), j4 = j4.add(g2(x6).multiply(this._getColor($2(x6, M3, C5, _7), R4).a)), j4 = j4.add(g2(v5).multiply(this._getColor($2(v5, M3, C5, _7), R4).a)), j4 = j4.add(g2(V4).multiply(this._getColor($2(V4, M3, C5, _7), R4).a)), j4 = j4.add(g2(w7).multiply(this._getColor($2(w7, M3, C5, _7), R4).a)), j4 = j4.add(g2(f11).multiply(this._getColor($2(f11, M3, C5, _7), R4).a)), j4 = j4.add(g2(S7).multiply(this._getColor($2(S7, M3, C5, _7), R4).a)), ee2(j4, new j(0.05)).multiply(q4(this.hittestRequest));
  }
};
e([_3(f)], et.prototype, "visualVariableColor", void 0), e([_3(h4)], et.prototype, "visualVariableOpacity", void 0), e([_3(d5)], et.prototype, "visualVariableRotation", void 0), e([_3(m3)], et.prototype, "visualVariableSizeMinMaxValue", void 0), e([_3(p2)], et.prototype, "visualVariableSizeScaleStops", void 0), e([_3(f2)], et.prototype, "visualVariableSizeStops", void 0), e([_3(l2)], et.prototype, "visualVariableSizeUnitValue", void 0), e([g(p)], et.prototype, "mosaicInfo", void 0), e([t2(0, m2(X2)), t2(1, m2(Y3))], et.prototype, "vertex", null), e([t2(0, m2(Z))], et.prototype, "fragment", null);

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/markers/MarkerTechnique.js
var u4 = class extends o6 {
  constructor() {
    super(...arguments), this.type = e3.Marker, this.shaders = {
      geometry: new et()
    }, this.symbologyPlane = S4.MARKER;
  }
  render(e4, t14) {
    const {
      context: a6,
      painter: m14
    } = e4, u10 = t14.instance.getInput();
    m14.setShader({
      shader: this.shaders.geometry,
      uniforms: __spreadProps(__spreadValues(__spreadValues({}, d4(e4, t14.target, u10.uniforms)), y(e4, t14.target)), {
        mosaicInfo: m14.textureManager.getMosaicInfo(a6, t14.textureKey, true)
      }),
      defines: __spreadValues({}, h5(e4)),
      optionalAttributes: u10.optionalAttributes,
      useComputeBuffer: p3(e4)
    }), m14.setPipelineState(M(e4)), m14.submitDraw(e4, t14);
  }
};

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/GLSLShaderModule.js
var o7 = class {
  constructor() {
    this.computeAttributes = {};
  }
  get locationsMap() {
    const t14 = /* @__PURE__ */ new Map();
    for (const e4 in this.locations) t14.set(e4, this.locations[e4].index);
    return t14;
  }
  get optionPropertyKeys() {
    if (!this._optionPropertyKeys) {
      const t14 = new Set(Object.keys(this.options));
      this._optionPropertyKeys = t14;
    }
    return this._optionPropertyKeys;
  }
  get _transformFeedbackBindings() {
    return [];
  }
  get locationInfo() {
    if (!this._locationInfo) {
      const e4 = this.locationsMap, o10 = Array.from(e4.entries()).map(([t14, e5]) => `${t14}.${e5}`).join("."), n11 = l(o10);
      this._locationInfo = {
        hash: n11,
        locations: e4,
        computeAttributeMap: this.computeAttributes
      };
    }
    return this._locationInfo;
  }
  get renamedLocationsMap() {
    const t14 = /* @__PURE__ */ new Map();
    for (const [e4, o10] of this.locationsMap.entries()) t14.set("a_" + e4, o10);
    return t14;
  }
  getShaderKey(t14, e4, o10) {
    return `${Object.keys(t14).map((e5) => `${e5}.${t14[e5]}`).join(".")}.${Object.keys(o10).filter((t15) => o10[t15]).map((t15) => `${t15}_${o10[t15].toString()}`).join(".")}.${Object.keys(e4).filter((t15) => this.optionPropertyKeys.has(t15)).join(".")}`;
  }
  getProgram(t14, o10, n11, r5) {
    let i7 = "", s6 = "";
    for (const e4 in n11) if (n11[e4]) {
      const t15 = "boolean" == typeof n11[e4] ? `#define ${e4}
` : `#define ${e4} ${n11[e4]}
`;
      i7 += t15, s6 += t15;
    }
    return i7 += this.vertexShader, s6 += this.fragmentShader, new a2(i7, s6, this.renamedLocationsMap, this.locationInfo, this._getUniformBindings(o10), this._transformFeedbackBindings);
  }
  _getUniformBindings(t14) {
    const e4 = [];
    for (const o10 in this.required) {
      const t15 = this.required[o10];
      e4.push({
        uniformHydrated: null,
        shaderModulePath: o10,
        uniformName: o10,
        uniformType: t15.type,
        uniformArrayElementType: n7(t15),
        uniformArrayLength: r4(t15)
      });
    }
    for (const o10 in t14) {
      const i7 = this.options[o10];
      if (t14[o10]) for (const t15 in i7) {
        const s6 = i7[t15];
        e4.push({
          uniformHydrated: null,
          shaderModulePath: `${o10}.${t15}`,
          uniformName: t15,
          uniformType: s6.type,
          uniformArrayElementType: n7(s6),
          uniformArrayLength: r4(s6)
        });
      }
    }
    return e4;
  }
};
var n7 = (t14) => "array" === t14.type ? t14.elementType?.type : void 0;
var r4 = (t14) => "array" === t14.type ? t14.size : void 0;

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/pieChart/PieChartShader.js
var p9 = {
  hittestDist: j,
  hittestPos: C2
};
var y2 = {
  filterFlags: S,
  animation: S,
  visualVariableData: S,
  dataDriven0: S,
  dataDriven1: S,
  dataDriven2: S,
  gpgpu: S,
  size: j
};
var d6 = {
  displayViewScreenMat3: tt,
  displayViewMat3: tt,
  displayMat3: tt,
  viewMat3: tt,
  tileMat3: tt,
  displayZoomFactor: j,
  requiredZoomFactor: j,
  tileOffset: C2,
  currentScale: j,
  currentZoom: j,
  metersPerSRUnit: j
};
var u5 = class extends o7 {
  constructor() {
    super(...arguments), this.vertexShader = n3("materials/pie/pie.vert"), this.fragmentShader = n3("materials/pie/pie.frag"), this.required = __spreadProps(__spreadValues(__spreadValues({}, y2), d6), {
      outlineWidth: j,
      colors: U3,
      defaultColor: H2,
      othersColor: H2,
      outlineColor: H2,
      donutRatio: j,
      sectorThreshold: j
    }), this.options = {
      hittestUniforms: p9,
      visualVariableSizeMinMaxValue: {
        minMaxValueAndSize: H2
      },
      visualVariableSizeScaleStops: {
        sizes: __spreadProps(__spreadValues({}, U3.ofType(j, 8)), {
          type: "array",
          elementType: j,
          size: 8
        }),
        values: __spreadProps(__spreadValues({}, U3.ofType(j, 8)), {
          type: "array",
          elementType: j,
          size: 8
        })
      },
      visualVariableSizeStops: {
        sizes: __spreadProps(__spreadValues({}, U3.ofType(j, 8)), {
          type: "array",
          elementType: j,
          size: 8
        }),
        values: __spreadProps(__spreadValues({}, U3.ofType(j, 8)), {
          type: "array",
          elementType: j,
          size: 8
        })
      },
      visualVariableSizeUnitValue: {
        unitValueToPixelsRatio: j
      },
      visualVariableOpacity: {
        opacities: __spreadProps(__spreadValues({}, U3.ofType(j, 8)), {
          type: "array",
          elementType: j,
          size: 8
        }),
        opacityValues: __spreadProps(__spreadValues({}, U3.ofType(j, 8)), {
          type: "array",
          elementType: j,
          size: 8
        })
      }
    }, this.locations = {
      pos: {
        index: 0,
        type: C2
      },
      id: {
        index: 1,
        type: G2
      },
      bitset: {
        index: 2,
        type: j
      },
      offset: {
        index: 3,
        type: C2
      },
      texCoords: {
        index: 4,
        type: C2
      },
      size: {
        index: 5,
        type: C2
      },
      referenceSize: {
        index: 6,
        type: j
      },
      zoomRange: {
        index: 7,
        type: C2
      }
    }, this.defines = {
      VV_SIZE_MIN_MAX_VALUE: "boolean",
      VV_SIZE_SCALE_STOPS: "boolean",
      VV_SIZE_FIELD_STOPS: "boolean",
      VV_SIZE_UNIT_VALUE: "boolean",
      VV_OPACITY: "boolean",
      HITTEST: "boolean",
      numberOfFields: "number",
      highlight: "boolean",
      inside: "boolean",
      outside: "boolean"
    };
  }
  setNumberOfFields(e4) {
    this.required.colors = __spreadProps(__spreadValues({}, U3.ofType(H2, e4)), {
      type: "array",
      elementType: H2,
      size: e4
    });
  }
};

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/pieChart/PieChartTechnique.js
var h7 = class extends o6 {
  constructor() {
    super(...arguments), this.type = e3.PieChart, this.shaders = {
      geometry: new u5()
    }, this.symbologyPlane = S4.MARKER;
  }
  render(e4, t14) {
    const {
      painter: u10
    } = e4, {
      instance: n11,
      target: h11
    } = t14, m14 = this.shaders.geometry, l6 = n11.getInput(), f11 = l6.uniforms.numberOfFields, S7 = p3(e4), V4 = y(e4, h11), d8 = h5(e4);
    m14.setNumberOfFields(f11), u10.setShader({
      shader: m14,
      uniforms: __spreadProps(__spreadValues(__spreadValues(__spreadValues({}, d4(e4, t14.target, l6.uniforms.shader)), V4.storage), V4.view), {
        hittestUniforms: V4.hittestRequest ? {
          hittestDist: V4.hittestRequest?.distance,
          hittestPos: V4.hittestRequest?.position
        } : null
      }),
      defines: __spreadProps(__spreadValues({
        VV_SIZE_MIN_MAX_VALUE: !!l6.uniforms.shader.visualVariableSizeMinMaxValue,
        VV_SIZE_SCALE_STOPS: !!l6.uniforms.shader.visualVariableSizeScaleStops,
        VV_SIZE_FIELD_STOPS: !!l6.uniforms.shader.visualVariableSizeStops,
        VV_SIZE_UNIT_VALUE: !!l6.uniforms.shader.visualVariableSizeUnitValue,
        VV_OPACITY: !!l6.uniforms.shader.visualVariableOpacity,
        HITTEST: S7,
        highlight: V4.highlight ? 1 : 0
      }, d8), {
        numberOfFields: f11
      }),
      optionalAttributes: {},
      useComputeBuffer: S7
    }), u10.setPipelineState(M(e4)), u10.submitDraw(e4, t14);
  }
};

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/text/TextTechnique.js
var m10 = class extends o6 {
  constructor() {
    super(...arguments), this.type = e3.Text, this.shaders = {
      geometry: new $()
    }, this.symbologyPlane = S4.TEXT;
  }
  render(e4, s6) {
    const {
      context: n11,
      painter: u10
    } = e4, m14 = h5(e4), d8 = s6.instance.getInput(), f11 = {
      shader: this.shaders.geometry,
      uniforms: __spreadProps(__spreadValues(__spreadValues({}, d4(e4, s6.target, d8.uniforms)), y(e4, s6.target)), {
        mosaicInfo: u10.textureManager.getMosaicInfo(n11, s6.textureKey)
      }),
      defines: __spreadProps(__spreadValues({}, m14), {
        isHaloPass: false,
        isBackgroundPass: true,
        isLabel: false
      }),
      optionalAttributes: d8.optionalAttributes,
      useComputeBuffer: p3(e4)
    };
    u10.setShader(f11), u10.setPipelineState(M(e4)), u10.submitDraw(e4, s6), u10.setShader(__spreadProps(__spreadValues({}, f11), {
      defines: __spreadProps(__spreadValues({}, m14), {
        isHaloPass: true,
        isBackgroundPass: false,
        isLabel: false
      })
    })), u10.submitDraw(e4, s6), u10.setShader(__spreadProps(__spreadValues({}, f11), {
      defines: __spreadProps(__spreadValues({}, m14), {
        isHaloPass: false,
        isBackgroundPass: false,
        isLabel: false
      })
    })), u10.submitDraw(e4, s6);
  }
};

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/TechniqueRegistry.js
var h8 = {
  fill: new u3(),
  patternFill: new m6(),
  complexFill: new m4(),
  outlineFill: new l3(),
  patternOutlineFill: new m7(),
  complexOutlineFill: new m5(),
  marker: new u4(),
  pieChart: new h7(),
  line: new p7(),
  texturedLine: new p8(),
  text: new m10(),
  label: new p6(),
  heatmap: new p5(),
  dotDensity: new w3()
};
function T4() {
  for (const e4 in h8) {
    h8[e4].startup();
  }
}
function w6(e4) {
  for (const i7 in h8) {
    h8[i7].shutdown(e4);
  }
}

// ../../../node_modules/@arcgis/core/views/2d/layers/features/schema/processor/schemaUtils.js
function n8(n11, t14) {
  const r5 = n11.slice(0, t14), e4 = t14 - r5.length;
  for (let o10 = 0; o10 < e4; o10++) {
    const n12 = r5[r5.length - 1];
    r5.push(n12);
  }
  return r5;
}
function t10(n11) {
  if (!n11) return [0, 0, 0, 0];
  const {
    r: t14,
    g: r5,
    b: e4,
    a: o10
  } = n11;
  return [t14 * (o10 / 255), r5 * (o10 / 255), e4 * (o10 / 255), o10];
}

// ../../../node_modules/@arcgis/core/views/2d/layers/features/support/rendererUtils.js
var l4 = 8;
var s3 = l4 - 2;
var n9 = () => n.getLogger("esri.views.2d.layers.features.support.rendererUtils");
function u6(e4) {
  return e4.map((e5) => a3(e5) ? i5(e5.clone()) : e5);
}
function a3(e4) {
  return ("size" === e4.type || "color" === e4.type || "opacity" === e4.type) && null != e4.stops;
}
function i5(e4) {
  return e4.stops = b5(e4.type, e4.stops ?? []), e4;
}
function p10(e4, o10, r5) {
  return (1 - r5) * e4 + r5 * o10;
}
function c5(e4, o10) {
  const [t14, ...l6] = o10, n11 = l6.pop(), u10 = l6[0].value, a6 = l6[l6.length - 1].value, i7 = (a6 - u10) / s3, c9 = [];
  for (let s6 = u10; s6 < a6; s6 += i7) {
    let t15 = 0;
    for (; s6 >= l6[t15].value; ) t15++;
    const n12 = l6[t15], u11 = o10[t15 - 1], a7 = s6 - u11.value, i8 = n12.value === u11.value ? 1 : a7 / (n12.value - u11.value);
    if ("color" === e4) {
      const e5 = l6[t15], r5 = o10[t15 - 1], n13 = e5.color.clone();
      n13.r = p10(r5.color.r, n13.r, i8), n13.g = p10(r5.color.g, n13.g, i8), n13.b = p10(r5.color.b, n13.b, i8), n13.a = p10(r5.color.a, n13.a, i8), c9.push({
        value: s6,
        color: n13,
        label: e5.label
      });
    } else if ("size" === e4) {
      const e5 = l6[t15], n13 = o10[t15 - 1], u12 = o(e5.size), a8 = p10(o(n13.size), u12, i8);
      c9.push({
        value: s6,
        size: a8,
        label: e5.label
      });
    } else {
      const e5 = l6[t15], r5 = p10(o10[t15 - 1].opacity, e5.opacity, i8);
      c9.push({
        value: s6,
        opacity: r5,
        label: e5.label
      });
    }
  }
  return [t14, ...c9, n11];
}
function f7(e4) {
  const [o10, ...r5] = e4, t14 = r5.pop();
  for (; r5.length > s3; ) {
    let e5 = 0, o11 = 0;
    for (let t15 = 1; t15 < r5.length; t15++) {
      const l6 = r5[t15 - 1], s6 = r5[t15], n11 = Math.abs(s6.value - l6.value);
      n11 > o11 && (o11 = n11, e5 = t15);
    }
    r5.splice(e5, 1);
  }
  return [o10, ...r5, t14];
}
function b5(e4, o10) {
  return o10.length <= l4 ? o10 : (n9().warn(`Found ${o10.length} Visual Variable stops, but MapView only supports ${l4}. Displayed stops will be simplified.`), o10.length > 2 * l4 ? c5(e4, o10) : f7(o10));
}
function g5() {
  const {
    supportsColorBufferFloat: e4,
    supportsColorBufferFloatBlend: o10,
    supportsColorBufferHalfFloat: r5
  } = t8();
  return e4 && o10 || r5;
}
function m11(o10) {
  if (!o10) return true;
  switch (o10.type) {
    case "dot-density":
      break;
    case "heatmap":
      if (!g5()) {
        const o11 = t8(), r5 = ["supportsColorBufferFloat", "supportsColorBufferFloatBlend", "supportsColorBufferHalfFloat"].filter((e4) => !o11[e4]).join(", ");
        return n9().errorOnce(new s("webgl-missing-extension", `Missing WebGL2 requirements for Heatmap: ${r5}`)), false;
      }
  }
  return true;
}

// ../../../node_modules/@arcgis/core/views/2d/layers/features/schema/processor/VisualVariablesSchema.js
var u7 = 1.25;
var o8 = 128;
var c6 = 128;
function p11(e4) {
  if (!e4.stops?.length) return null;
  const a6 = e4.stops.sort((e5, a7) => e5.value - a7.value), i7 = n8(a6, 8), l6 = i7.map(({
    value: e5
  }) => e5), s6 = i7.map(({
    color: e5
  }) => t10(e5));
  return {
    values: l6,
    colors: s6
  };
}
function v3(e4) {
  if (!e4.stops?.length) return null;
  const a6 = e4.stops.sort((e5, a7) => e5.value - a7.value), i7 = n8(a6, 8);
  return {
    opacityValues: i7.map(({
      value: e5
    }) => e5),
    opacities: i7.map(({
      opacity: e5
    }) => e5)
  };
}
function V2(e4) {
  return {
    rotationType: "geographic" === e4.rotationType ? i3.Geographic : i3.Arithmatic
  };
}
function f8(a6) {
  if (!a6.stops?.length) return null;
  if (a6.stops.some((e4) => e4.useMaxValue || e4.useMinValue)) return (i8, s7) => {
    const r5 = i8.statisticsByLevel.get(s7.key.level), n11 = a6.stops.map((i9) => ({
      value: i9.useMaxValue ? r5?.get(a6.field)?.maxValue ?? 0 : i9.useMinValue ? r5?.get(a6.field)?.minValue ?? 0 : i9.value,
      size: i9.size ? u(i9.size) : i
    })).sort((e4, a7) => e4.value - a7.value), u10 = n8(n11, 8);
    return {
      values: u10.map(({
        value: e4
      }) => e4),
      sizes: u10.map(({
        size: e4
      }) => e4)
    };
  };
  const i7 = a6.stops.sort((e4, a7) => e4.value - a7.value), s6 = n8(i7, 8);
  return {
    values: s6.map(({
      value: e4
    }) => e4),
    sizes: s6.map(({
      size: a7
    }) => u(a7))
  };
}
function S5(e4) {
  return (l6) => {
    const {
      state: s6
    } = l6;
    return {
      unitValueToPixelsRatio: W(s6.spatialReference) / m[e4.valueUnit ?? "meters"] / s6.resolution
    };
  };
}
function b6(e4, a6) {
  const i7 = a6.length;
  if (e4 < a6[0].value || 1 === i7) return a6[0].size;
  for (let l6 = 1; l6 < i7; l6++) if (e4 < a6[l6].value) {
    const i8 = (e4 - a6[l6 - 1].value) / (a6[l6].value - a6[l6 - 1].value);
    return a6[l6 - 1].size + i8 * (a6[l6].size - a6[l6 - 1].size);
  }
  return a6[i7 - 1].size;
}
function z4(a6) {
  const {
    minDataValue: i7,
    maxDataValue: l6,
    minSize: s6,
    maxSize: t14
  } = a6;
  if ("object" == typeof s6 && "object" == typeof t14) return (a7, r5) => {
    const n11 = a7.state.scale, u10 = u(b6(n11, s6.stops)), o10 = u(b6(n11, t14.stops));
    return {
      minMaxValueAndSize: [i7, l6, u10, o10]
    };
  };
  if ("object" == typeof s6 || "object" == typeof t14) throw new Error("InternalError: Found a partial VisualVariableSizeMinMaxValue");
  return {
    minMaxValueAndSize: [i7, l6, u(s6), u(t14)]
  };
}
var x4 = {
  visualVariableColor: null,
  visualVariableOpacity: null,
  visualVariableRotation: null,
  visualVariableSizeStops: null,
  visualVariableSizeScaleStops: null,
  visualVariableSizeOutlineScaleStops: null,
  visualVariableSizeUnitValue: null,
  visualVariableSizeMinMaxValue: null
};
function h9(e4, a6 = c6, i7 = u7) {
  if (e4.visualVariableSizeMinMaxValue) return e4.visualVariableSizeMinMaxValue instanceof Function ? o8 : Math.max(e4.visualVariableSizeMinMaxValue.minMaxValueAndSize[3] * i7, a6);
  if (e4.visualVariableSizeScaleStops) {
    if (e4.visualVariableSizeScaleStops instanceof Function) return o8;
    const l6 = e4.visualVariableSizeScaleStops.sizes;
    return Math.max(l6[l6.length - 1] * i7, a6);
  }
  if (e4.visualVariableSizeStops) {
    if (e4.visualVariableSizeStops instanceof Function) return o8;
    const l6 = e4.visualVariableSizeStops.sizes;
    return Math.max(l6[l6.length - 1] * i7, a6);
  }
  return e4.visualVariableSizeUnitValue ? 2 * o8 : 0;
}
function M2(e4) {
  const a6 = __spreadValues({}, x4);
  if (!e4 || !("visualVariables" in e4) || !e4.visualVariables) return a6;
  for (const i7 of u6(e4.visualVariables)) switch (i7.type) {
    case "color":
      a6.visualVariableColor = p11(i7);
      break;
    case "opacity":
      a6.visualVariableOpacity = v3(i7);
      break;
    case "rotation":
      a6.visualVariableRotation = V2(i7);
      break;
    case "size":
      switch (y3(i7)) {
        case "field-stops":
          a6.visualVariableSizeStops = f8(i7);
          break;
        case "scale-stops":
          "outline" === i7.target ? a6.visualVariableSizeOutlineScaleStops = f8(i7) : a6.visualVariableSizeScaleStops = f8(i7);
          break;
        case "min-max":
          a6.visualVariableSizeMinMaxValue = z4(i7);
          break;
        case "unit-value":
          a6.visualVariableSizeUnitValue = S5(i7);
      }
      break;
  }
  return a6;
}
function y3(e4) {
  return "number" == typeof e4.minDataValue && "number" == typeof e4.maxDataValue && null != e4.minSize && null != e4.maxSize ? "min-max" : "$view.scale" === e4?.valueExpression && Array.isArray(e4.stops) ? "scale-stops" : null == e4.field && "$view.scale" === e4?.valueExpression || !(Array.isArray(e4.stops) || "levels" in e4 && e4.levels) ? null != e4.field || "$view.scale" !== e4?.valueExpression ? "unit-value" : null : "field-stops";
}

// ../../../node_modules/@arcgis/core/views/2d/layers/features/schema/processor/symbols/utils.js
function a4(a6) {
  return !!(a6.visualVariableSizeMinMaxValue || a6.visualVariableSizeScaleStops || a6.visualVariableSizeStops || a6.visualVariableSizeUnitValue || a6.visualVariableSizeOutlineScaleStops);
}
function i6(a6) {
  return !!a6.visualVariableRotation;
}

// ../../../node_modules/@arcgis/core/views/2d/layers/features/schema/processor/symbols/ComplexSymbolSchema.js
function t11(e4) {
  return e4.minScale || e4.maxScale ? {
    minScale: e4.minScale ?? 0,
    maxScale: e4.maxScale ?? 0
  } : null;
}
function s4(e4) {
  if (null == e4) return null;
  if (Array.isArray(e4)) {
    const [a6, i7, l6, o10] = e4;
    return [a6, i7, l6, 255 * o10];
  }
  return "string" == typeof e4 ? e4 : __spreadProps(__spreadValues({}, e4), {
    defaultValue: s4(e4?.defaultValue)
  });
}
function n10(a6, i7) {
  return __async(this, null, function* () {
    const {
      cimResourceManager: l6,
      cimAnalyzer: o10,
      scaleExpression: r5
    } = i7.schemaOptions;
    yield Promise.all(ee.fetchResources(a6.symbol, l6, []));
    const s6 = o10.analyzeSymbolReference(a6, false), n11 = {
      scaleInfo: t11(a6),
      scaleExpression: r5
    }, u10 = [];
    for (const e4 of s6) switch (e4.type) {
      case "marker":
        u10.push(...c7(e4, i7, n11));
        break;
      case "fill":
        u10.push(...m12(e4, i7, n11));
        break;
      case "line":
        u10.push(...S6(e4, i7, n11));
        break;
      case "text":
        u10.push(...v4(e4, i7, n11));
    }
    return u10;
  });
}
function c7(e4, a6, o10) {
  const {
    uniforms: r5,
    schemaOptions: t14
  } = a6, {
    store: s6
  } = t14, n11 = e4.isOutline ? __spreadProps(__spreadValues({}, x4), {
    visualVariableSizeScaleStops: r5.visualVariableSizeOutlineScaleStops
  }) : {
    visualVariableColor: r5.visualVariableColor,
    visualVariableOpacity: r5.visualVariableOpacity,
    visualVariableSizeMinMaxValue: r5.visualVariableSizeMinMaxValue,
    visualVariableSizeScaleStops: r5.visualVariableSizeScaleStops,
    visualVariableSizeStops: r5.visualVariableSizeStops,
    visualVariableSizeUnitValue: r5.visualVariableSizeUnitValue,
    visualVariableRotation: r5.visualVariableRotation
  };
  return u8(s6.ensureInstance(h8.marker, {
    uniforms: n11,
    optionalAttributes: {
      zoomRange: !!o10.scaleInfo
    }
  }), e4, r5, o10);
}
function u8(e4, i7, l6, {
  scaleInfo: t14,
  scaleExpression: n11
}) {
  const c9 = a4(l6);
  return [e4.createMeshInfo({
    size: i7.size,
    scaleX: i7.scaleX,
    anchorX: i7.anchorPoint.x,
    anchorY: i7.anchorPoint.y,
    angle: i7.rotation,
    color: s4(i7.color) ?? [0, 0, 0, 0],
    colorLocked: i7.colorLocked,
    frameHeight: i7.frameHeight,
    widthRatio: i7.widthRatio,
    scaleInfo: t14,
    offsetX: i7.offsetX,
    offsetY: i7.offsetY,
    outlineColor: s4(i7.outlineColor) ?? [0, 0, 0, 0],
    outlineSize: i7.outlineWidth,
    referenceSize: i7.referenceSize || t3.CIMVectorMarker.size,
    rotateClockwise: i7.rotateClockwise,
    scaleFactor: n11 ?? 1,
    sizeRatio: i7.sizeRatio,
    alignment: i7.alignment,
    isAbsoluteAnchorPoint: i7.isAbsoluteAnchorPoint,
    scaleSymbolsProportionally: i7.scaleSymbolsProportionally,
    sprite: i7.spriteRasterizationParam,
    hasSizeVV: c9,
    placement: i7.markerPlacement,
    effects: i7.effects ? {
      type: "cim-effect-infos",
      effectInfos: i7.effects
    } : null,
    transforms: i7.transform,
    minPixelBuffer: h9(l6)
  })];
}
function f9(e4, a6, l6) {
  const {
    uniforms: o10,
    schemaOptions: r5
  } = a6, {
    store: t14
  } = r5;
  return p12(t14.ensureInstance(h8.fill, {
    uniforms: {
      visualVariableColor: e4.colorLocked ? null : o10.visualVariableColor,
      visualVariableOpacity: o10.visualVariableOpacity
    },
    optionalAttributes: {
      zoomRange: !!l6.scaleInfo
    }
  }), e4, l6);
}
function p12(e4, a6, {
  scaleInfo: i7
}) {
  return [e4.createMeshInfo({
    color: s4(a6.color) ?? [0, 0, 0, 0],
    scaleInfo: i7,
    effects: a6.effects ? {
      type: "cim-effect-infos",
      effectInfos: a6.effects
    } : null
  })];
}
function m12(e4, a6, l6) {
  if (!e4.spriteRasterizationParam) return f9(e4, a6, l6);
  const {
    uniforms: o10,
    schemaOptions: r5
  } = a6, {
    store: t14
  } = r5;
  return b7(t14.ensureInstance(h8.complexFill, {
    uniforms: {
      visualVariableColor: e4.colorLocked ? null : o10.visualVariableColor,
      visualVariableOpacity: o10.visualVariableOpacity
    },
    optionalAttributes: {
      zoomRange: !!l6.scaleInfo
    }
  }), e4, null != o10.visualVariableColor, l6);
}
function b7(e4, a6, i7, {
  scaleInfo: l6
}) {
  if (!a6.spriteRasterizationParam) throw new Error("InternalError: Sprite should always be defined");
  const o10 = !!a6.hasUnresolvedReplacementColor && (!i7 || a6.colorLocked), r5 = a6.sampleAlphaOnly && !o10, t14 = a6.spriteRasterizationParam;
  return [e4.createMeshInfo({
    color: s4(a6.color) ?? [0, 0, 0, 0],
    height: a6.height,
    aspectRatio: a6.scaleX,
    offsetX: a6.offsetX,
    offsetY: a6.offsetY,
    scaleX: 1,
    scaleY: 1,
    angle: a6.angle,
    applyRandomOffset: a6.applyRandomOffset,
    sampleAlphaOnly: r5,
    scaleProportionally: "CIMHatchFill" === t14.resource.type,
    sprite: t14,
    scaleInfo: l6,
    effects: a6.effects ? {
      type: "cim-effect-infos",
      effectInfos: a6.effects
    } : null
  })];
}
function S6(e4, a6, o10) {
  const {
    uniforms: r5,
    schemaOptions: t14
  } = a6, {
    store: s6
  } = t14, n11 = e4.isOutline ? __spreadProps(__spreadValues({}, x4), {
    visualVariableSizeScaleStops: r5.visualVariableSizeOutlineScaleStops
  }) : {
    visualVariableColor: e4.colorLocked ? null : r5.visualVariableColor,
    visualVariableOpacity: r5.visualVariableOpacity,
    visualVariableSizeMinMaxValue: r5.visualVariableSizeMinMaxValue,
    visualVariableSizeScaleStops: r5.visualVariableSizeScaleStops,
    visualVariableSizeStops: r5.visualVariableSizeStops,
    visualVariableSizeUnitValue: r5.visualVariableSizeUnitValue
  }, c9 = {
    uniforms: n11,
    optionalAttributes: {
      zoomRange: !!o10.scaleInfo
    }
  }, u10 = !!(n11.visualVariableSizeMinMaxValue || n11.visualVariableSizeScaleStops || n11.visualVariableSizeStops || n11.visualVariableSizeUnitValue);
  if (!e4.spriteRasterizationParam) {
    return h10(s6.ensureInstance(h8.line, c9), e4, u10, o10);
  }
  return z5(s6.ensureInstance(h8.texturedLine, c9), e4, u10, o10);
}
function V3(e4, a6, {
  scaleInfo: i7
}) {
  return {
    color: s4(e4.color) ?? [0, 0, 0, 0],
    width: e4.width,
    referenceWidth: e4.referenceWidth,
    capType: e4.cap,
    joinType: e4.join,
    miterLimit: e4.miterLimit,
    scaleInfo: i7,
    hasSizeVV: a6,
    effects: e4.effects ? {
      type: "cim-effect-infos",
      effectInfos: e4.effects
    } : null
  };
}
function h10(e4, a6, i7, l6) {
  if (a6.spriteRasterizationParam) throw new Error("InternalError: Sprite should not be defined");
  const o10 = V3(a6, i7, l6);
  return [e4.createMeshInfo(o10)];
}
function z5(e4, a6, i7, l6) {
  const {
    spriteRasterizationParam: o10,
    scaleDash: r5,
    sampleAlphaOnly: t14
  } = a6;
  if (!o10) throw new Error("InternalError: Sprite should be defined");
  return [e4.createMeshInfo(__spreadProps(__spreadValues({}, V3(a6, i7, l6)), {
    shouldScaleDash: r5 ?? false,
    shouldSampleAlphaOnly: t14,
    isSDF: "CIMPictureStroke" !== o10.resource.type,
    sprite: o10
  }))];
}
function v4(e4, a6, l6) {
  const {
    uniforms: o10,
    schemaOptions: r5
  } = a6, {
    store: t14
  } = r5;
  return y4(t14.ensureInstance(h8.text, {
    uniforms: {
      visualVariableColor: e4.colorLocked ? null : o10.visualVariableColor,
      visualVariableOpacity: o10.visualVariableOpacity,
      visualVariableRotation: o10.visualVariableRotation,
      visualVariableSizeMinMaxValue: o10.visualVariableSizeMinMaxValue,
      visualVariableSizeScaleStops: o10.visualVariableSizeScaleStops,
      visualVariableSizeStops: o10.visualVariableSizeStops,
      visualVariableSizeUnitValue: o10.visualVariableSizeUnitValue
    },
    optionalAttributes: {
      zoomRange: !!l6.scaleInfo,
      referenceSymbol: false,
      clipAngle: false
    }
  }), e4, o10, l6);
}
function y4(e4, a6, i7, {
  scaleInfo: l6,
  scaleExpression: r5
}) {
  return [e4.createMeshInfo({
    boxBackgroundColor: s4(a6.backgroundColor),
    boxBorderLineColor: s4(a6.borderLineColor),
    boxBorderLineSize: a6.borderLineWidth ?? 0,
    color: s4(a6.color) ?? [0, 0, 0, 0],
    offsetX: a6.offsetX,
    offsetY: a6.offsetY,
    postAngle: a6.angle,
    fontSize: a6.size,
    referenceSize: a6.referenceSize,
    decoration: a6.decoration,
    haloColor: s4(a6.outlineColor) ?? [0, 0, 0, 0],
    haloFontSize: a6.outlineSize,
    lineWidth: a6.lineWidth || 512,
    lineHeightRatio: 1,
    horizontalAlignment: a6.horizontalAlignment ?? "center",
    verticalAlignment: a6.verticalAlignment ?? "baseline",
    useCIMAngleBehavior: false,
    glyphs: a6.textRasterizationParam,
    scaleInfo: l6,
    effects: a6.effects ? {
      type: "cim-effect-infos",
      effectInfos: a6.effects
    } : null,
    placement: a6.markerPlacement,
    transforms: a6.transform,
    scaleFactor: r5 ?? 1,
    minPixelBuffer: h9(i7),
    repeatLabel: null,
    repeatLabelDistance: null,
    allowOverrun: null,
    labelPosition: null,
    isLineLabel: false
  })];
}

// ../../../node_modules/@arcgis/core/views/2d/layers/support/FeatureCommandQueue.js
var t12 = class {
  constructor(e4) {
    this.updateTracking = new d3({
      debugName: "FeatureCommandQueue"
    }), this._queueProcessor = new _2({
      concurrency: 1,
      process: e4.process
    });
  }
  destroy() {
    this.updateTracking.destroy(), this._queueProcessor.destroy(), this.clear();
  }
  clear() {
    this._queueProcessor.clear();
  }
  push(s6) {
    return __async(this, null, function* () {
      return d(this.updateTracking.addPromise(this._doPush(s6)));
    });
  }
  _doPush(e4) {
    return __async(this, null, function* () {
      const s6 = this._queueProcessor, r5 = s6.last();
      switch (e4.type) {
        case "update":
        case "highlight":
          if (r5?.type === e4.type) return;
          return s6.push(e4);
        case "edit-by-id":
        case "edit-by-feature":
          return s6.push(e4);
      }
    });
  }
};

// ../../../node_modules/@arcgis/core/views/2d/layers/features/schema/processor/StorageSchema.js
function t13(e4, i7) {
  return {
    type: "simple",
    filters: i7,
    capabilities: {
      maxTextureSize: t8().maxTextureSize
    },
    bindings: a5(e4)
  };
}
function s5(e4) {
  switch (e4) {
    case "opacity":
      return L2.OPACITY;
    case "color":
      return L2.COLOR;
    case "rotation":
      return L2.ROTATION;
    case "size":
      return L2.SIZE;
    default:
      return null;
  }
}
function a5(e4) {
  if (!e4) return [];
  switch (e4.type) {
    case "simple":
    case "class-breaks":
    case "unique-value":
    case "dictionary":
      return c8(e4);
    case "dot-density":
      return o9(e4);
    case "pie-chart":
      return l5(e4);
    case "heatmap":
      return u9(e4);
  }
}
function o9(e4) {
  const i7 = [];
  for (const n11 of e4.attributes) i7.push({
    binding: i7.length,
    expression: n11.valueExpression,
    field: n11.field
  });
  return i7;
}
function l5(e4) {
  const i7 = c8(e4);
  let n11 = 4;
  for (const r5 of e4.attributes) i7.push({
    binding: n11++,
    expression: r5.valueExpression,
    field: r5.field
  });
  return i7;
}
function u9({
  valueExpression: e4,
  field: i7
}) {
  return e4 || i7 ? [{
    binding: 0,
    expression: e4,
    field: i7
  }] : [];
}
function c8(i7) {
  if (!("visualVariables" in i7) || !i7.visualVariables?.length) return [];
  return u6(i7.visualVariables).map((e4) => x5(e4)).filter(O);
}
function p13(e4) {
  return "$view.scale" === e4.valueExpression ? null : {
    binding: s5(e4.type),
    field: e4.field,
    normalizationField: e4.normalizationField,
    expression: e4.valueExpression,
    valueRepresentation: e4.valueRepresentation
  };
}
function f10(e4) {
  return {
    binding: s5(e4.type),
    field: e4.field,
    normalizationField: e4.normalizationField,
    expression: e4.valueExpression
  };
}
function d7(e4) {
  return {
    binding: s5(e4.type),
    field: e4.field,
    normalizationField: e4.normalizationField,
    expression: e4.valueExpression
  };
}
function m13(e4) {
  return {
    binding: s5(e4.type),
    expression: e4.valueExpression,
    field: e4.field
  };
}
function x5(e4) {
  switch (e4.type) {
    case "size":
      return p13(e4);
    case "color":
      return f10(e4);
    case "opacity":
      return d7(e4);
    case "rotation":
      return m13(e4);
  }
}

export {
  h8 as h,
  T4 as T,
  w6 as w,
  t10 as t,
  m11 as m,
  x4 as x,
  h9 as h2,
  M2 as M,
  a4 as a,
  i6 as i,
  t11 as t2,
  n10 as n,
  u8 as u,
  p12 as p,
  b7 as b,
  h10 as h3,
  z5 as z,
  y4 as y,
  t13 as t3,
  c8 as c,
  t12 as t4
};
//# sourceMappingURL=chunk-HUMKNI5V.js.map
