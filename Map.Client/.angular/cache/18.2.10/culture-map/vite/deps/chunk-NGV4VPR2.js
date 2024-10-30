import {
  i as i2,
  r as r3,
  r2 as r4
} from "./chunk-AW2BDC6B.js";
import {
  h as h2
} from "./chunk-IAGWCSWA.js";
import {
  N
} from "./chunk-PAFFV5BJ.js";
import {
  s
} from "./chunk-6QDMUFEM.js";
import {
  e
} from "./chunk-T3454WZK.js";
import {
  o as o2
} from "./chunk-6YA72G7G.js";
import {
  b
} from "./chunk-EMZQT2MP.js";
import {
  c
} from "./chunk-C7VF4AR2.js";
import {
  t
} from "./chunk-JCWQ2LOQ.js";
import {
  r as r2
} from "./chunk-DLRYNII2.js";
import {
  C,
  E,
  F,
  R
} from "./chunk-YLE5AYZV.js";
import {
  L
} from "./chunk-Z3GMSC63.js";
import {
  M,
  f,
  h,
  i,
  o
} from "./chunk-JYODC3YQ.js";
import {
  r,
  u
} from "./chunk-2MMLMOWS.js";

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/GraphicInstanceStore.js
var l = 0;
function n(i4, n2) {
  return new i2(r4(l++), i4, n2);
}
var a = {
  visualVariableColor: null,
  visualVariableOpacity: null,
  visualVariableSizeMinMaxValue: null,
  visualVariableSizeScaleStops: null,
  visualVariableSizeStops: null,
  visualVariableSizeUnitValue: null,
  visualVariableRotation: null,
  visualVariableSizeOutlineScaleStops: null
};
var o3 = class {
  constructor() {
    this.instances = {
      fill: n(h2.fill, {
        uniforms: a,
        optionalAttributes: {
          zoomRange: true
        }
      }),
      marker: n(h2.marker, {
        uniforms: a,
        optionalAttributes: {
          zoomRange: true
        }
      }),
      line: n(h2.line, {
        uniforms: a,
        optionalAttributes: {
          zoomRange: true
        }
      }),
      text: n(h2.text, {
        uniforms: a,
        optionalAttributes: {
          zoomRange: true,
          referenceSymbol: false,
          clipAngle: false
        }
      }),
      complexFill: n(h2.complexFill, {
        uniforms: a,
        optionalAttributes: {
          zoomRange: true
        }
      }),
      texturedLine: n(h2.texturedLine, {
        uniforms: a,
        optionalAttributes: {
          zoomRange: true
        }
      })
    }, this._instancesById = Object.values(this.instances).reduce((e2, i4) => (e2.set(i4.instanceId, i4), e2), /* @__PURE__ */ new Map());
  }
  getInstance(e2) {
    return this._instancesById.get(e2);
  }
};

// ../../../node_modules/@arcgis/core/views/2d/layers/graphics/GraphicBoundsRenderer.js
var v = Math.PI / 180;
var x = 4;
var b2 = class extends s {
  constructor(t2) {
    super(), this._program = null, this._vao = null, this._vertexBuffer = null, this._indexBuffer = null, this._dvsMat3 = e(), this._localOrigin = {
      x: 0,
      y: 0
    }, this._getBounds = t2;
  }
  destroy() {
    this._vao && (this._vao.dispose(), this._vao = null, this._vertexBuffer = null, this._indexBuffer = null), this._program = r(this._program);
  }
  doRender(t2) {
    const {
      context: e2
    } = t2, r5 = this._getBounds();
    if (r5.length < 1) return;
    this._createShaderProgram(e2), this._updateMatricesAndLocalOrigin(t2), this._updateBufferData(e2, r5), e2.setBlendingEnabled(true), e2.setDepthTestEnabled(false), e2.setStencilWriteMask(0), e2.setStencilTestEnabled(false), e2.setBlendFunction(R.ONE, R.ONE_MINUS_SRC_ALPHA), e2.setColorMask(true, true, true, true);
    const i4 = this._program;
    e2.bindVAO(this._vao), e2.useProgram(i4), i4.setUniformMatrix3fv("u_dvsMat3", this._dvsMat3), e2.gl.lineWidth(1), e2.drawElements(E.LINES, 8 * r5.length, C.UNSIGNED_INT, 0), e2.bindVAO();
  }
  _createTransforms() {
    return {
      displayViewScreenMat3: e()
    };
  }
  _createShaderProgram(t2) {
    if (this._program) return;
    const e2 = "precision highp float;\n        uniform mat3 u_dvsMat3;\n\n        attribute vec2 a_position;\n\n        void main() {\n          mediump vec3 pos = u_dvsMat3 * vec3(a_position, 1.0);\n          gl_Position = vec4(pos.xy, 0.0, 1.0);\n        }", r5 = "precision mediump float;\n      void main() {\n        gl_FragColor = vec4(0.75, 0.0, 0.0, 0.75);\n      }";
    this._program = t2.programCache.acquire(e2, r5, y().attributes);
  }
  _updateMatricesAndLocalOrigin(t2) {
    const {
      state: a2
    } = t2, {
      displayMat3: m,
      size: c2,
      resolution: u2,
      pixelRatio: _,
      rotation: h3,
      viewpoint: d
    } = a2, p = v * h3, {
      x: g,
      y: x2
    } = d.targetGeometry, b3 = L(g, a2.spatialReference);
    this._localOrigin.x = b3, this._localOrigin.y = x2;
    const y2 = _ * c2[0], B = _ * c2[1], M2 = u2 * y2, j = u2 * B, A = o(this._dvsMat3);
    i(A, A, m), M(A, A, t(y2 / 2, B / 2)), f(A, A, r2(c2[0] / M2, -B / j, 1)), h(A, A, -p);
  }
  _updateBufferData(t2, e2) {
    const {
      x: r5,
      y: i4
    } = this._localOrigin, s2 = 2 * x * e2.length, o4 = new Float32Array(s2), a2 = new Uint32Array(8 * e2.length);
    let n2 = 0, l2 = 0;
    for (const f2 of e2) f2 && (o4[2 * n2] = f2[0] - r5, o4[2 * n2 + 1] = f2[1] - i4, o4[2 * n2 + 2] = f2[0] - r5, o4[2 * n2 + 3] = f2[3] - i4, o4[2 * n2 + 4] = f2[2] - r5, o4[2 * n2 + 5] = f2[3] - i4, o4[2 * n2 + 6] = f2[2] - r5, o4[2 * n2 + 7] = f2[1] - i4, a2[l2] = n2 + 0, a2[l2 + 1] = n2 + 3, a2[l2 + 2] = n2 + 3, a2[l2 + 3] = n2 + 2, a2[l2 + 4] = n2 + 2, a2[l2 + 5] = n2 + 1, a2[l2 + 6] = n2 + 1, a2[l2 + 7] = n2 + 0, n2 += 4, l2 += 8);
    if (this._vertexBuffer ? this._vertexBuffer.setData(o4.buffer) : this._vertexBuffer = c.createVertex(t2, F.DYNAMIC_DRAW, o4.buffer), this._indexBuffer ? this._indexBuffer.setData(a2) : this._indexBuffer = c.createIndex(t2, F.DYNAMIC_DRAW, a2), !this._vao) {
      const e3 = y();
      this._vao = new o2(t2, e3.attributes, e3.bufferLayouts, {
        geometry: this._vertexBuffer
      }, this._indexBuffer);
    }
  }
};
var y = () => b("bounds", {
  geometry: [{
    location: 0,
    name: "a_position",
    count: 2,
    type: C.FLOAT
  }]
});

// ../../../node_modules/@arcgis/core/views/2d/layers/graphics/AGraphicContainer.js
var i3 = class extends r3 {
  constructor(e2) {
    super(e2), this._instanceStore = new o3(), this.checkHighlight = () => true;
  }
  destroy() {
    super.destroy(), this._boundsRenderer = u(this._boundsRenderer);
  }
  get instanceStore() {
    return this._instanceStore;
  }
  enableRenderingBounds(e2) {
    this._boundsRenderer = new b2(e2), this.requestRender();
  }
  get hasHighlight() {
    return this.checkHighlight();
  }
  onTileData(e2, t2) {
    e2.onMessage(t2), this.contains(e2) || this.addChild(e2), this.requestRender();
  }
  _renderChildren(e2, t2) {
    e2.selection = t2;
    for (const r5 of this.children) {
      if (!r5.visible) continue;
      const t3 = r5.getDisplayList(this._instanceStore, N.STRICT_ORDER);
      t3?.render(e2);
    }
  }
};

export {
  i3 as i
};
//# sourceMappingURL=chunk-NGV4VPR2.js.map
