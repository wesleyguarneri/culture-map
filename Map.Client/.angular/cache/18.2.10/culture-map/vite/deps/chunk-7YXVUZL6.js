import {
  D,
  H as H2
} from "./chunk-B64VDY5O.js";
import {
  p as p2
} from "./chunk-MAG65NGG.js";
import {
  E as E2
} from "./chunk-RASN5P76.js";
import {
  O as O4,
  R as R2,
  S as S3,
  b,
  p2 as p,
  y2 as y
} from "./chunk-5L3YXBNN.js";
import {
  c as c2,
  s as s5
} from "./chunk-IFUKJDOU.js";
import {
  t as t3
} from "./chunk-J7KF6IEI.js";
import {
  r as r5,
  r2 as r6,
  t
} from "./chunk-XGDLE7WK.js";
import {
  l as l2,
  u as u3
} from "./chunk-QMUS26QM.js";
import {
  r as r7
} from "./chunk-FHW2TG7X.js";
import {
  W
} from "./chunk-YCQXFVJL.js";
import {
  c2 as c,
  f,
  h as h2,
  o as o3,
  s as s3,
  u as u4
} from "./chunk-YAGNWBGU.js";
import {
  t as t2
} from "./chunk-DE6MQ5XE.js";
import {
  O as O3
} from "./chunk-GCFUJXGH.js";
import {
  o as o4
} from "./chunk-VIIVMRRO.js";
import {
  S as S2,
  _,
  o as o5,
  s as s4
} from "./chunk-LKHUGH5W.js";
import {
  H
} from "./chunk-NWICVENM.js";
import {
  s as s2
} from "./chunk-SYYDVGKY.js";
import {
  E,
  O as O2,
  R
} from "./chunk-YLE5AYZV.js";
import {
  x as x2
} from "./chunk-JNWMZ6EJ.js";
import {
  a,
  o as o2
} from "./chunk-WJKYGQOY.js";
import {
  l
} from "./chunk-KKD7A2GN.js";
import {
  e as e7
} from "./chunk-4MMTPKY4.js";
import {
  r as r4
} from "./chunk-DY7FJHTG.js";
import {
  n as n3
} from "./chunk-JYODC3YQ.js";
import {
  e as e5
} from "./chunk-BQZBOYBD.js";
import {
  e as e6
} from "./chunk-TYQXPPSP.js";
import {
  e as e4,
  n as n2,
  r as r3
} from "./chunk-IMVP5ADD.js";
import {
  h
} from "./chunk-XTVPEVHA.js";
import {
  u as u2
} from "./chunk-IHVSZYZS.js";
import {
  e as e3
} from "./chunk-3ZXOUEQG.js";
import {
  O,
  P,
  S,
  e as e2,
  g,
  o,
  r as r2,
  s,
  u,
  x,
  z
} from "./chunk-AXVPJBVW.js";
import {
  n,
  r
} from "./chunk-OXEPWRM7.js";
import {
  e
} from "./chunk-4Z5SGKRM.js";
import {
  has
} from "./chunk-DXLOWWK7.js";
import {
  __spreadValues
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/materials/ScaleInfo.js
var t4 = class {
  constructor() {
    this.factor = new c3(), this.factorAlignment = new c3();
  }
};
var c3 = class {
  constructor() {
    this.scale = 0, this.factor = 0, this.minScaleFactor = 0;
  }
};

// ../../../node_modules/@arcgis/core/core/libs/gl-matrix-2/types/mat4.js
function n4(n5) {
  return n5 instanceof Float32Array && n5.length >= 16;
}
function r8(n5) {
  return Array.isArray(n5) && n5.length >= 16;
}
function t5(t6) {
  return n4(t6) || r8(t6);
}

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/shaders/HUDMaterialTechnique.js
var b2 = class _b extends r5 {
  initializeConfiguration(e8, i) {
    i.spherical = e8.viewingMode === l.Global;
  }
  initializeProgram(r10) {
    return new r6(r10.rctx, _b.shader.get().build(this.configuration), O3);
  }
  initializePipeline() {
    const r10 = this.configuration.transparencyPassType, i = this.configuration, t6 = r10 === o4.NONE, o6 = r10 === o4.FrontFace, a2 = this.configuration.hasPolygonOffset ? j : null, u5 = i.draped ? null : (t6 || o6) && i.output !== o2.Highlight && (i.depthEnabled || i.occlusionPass) ? o5 : null;
    return S2({
      blending: i.output === o2.Color || i.output === o2.Highlight ? t6 ? T : c2(r10) : null,
      depthTest: i.draped ? null : {
        func: O2.LEQUAL
      },
      depthWrite: u5,
      drawBuffers: s5(r10),
      colorWrite: _,
      polygonOffset: a2
    });
  }
  get primitiveType() {
    return this.configuration.occlusionPass ? E.POINTS : E.TRIANGLES;
  }
};
b2.shader = new t(H2, () => import("./HUDMaterial.glsl-MAEQTMQL.js"));
var j = {
  factor: 0,
  units: -4
};
var T = s4(R.ONE, R.ONE_MINUS_SRC_ALPHA);

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/shaders/HUDMaterialTechniqueConfiguration.js
var r9 = class extends t3 {
  constructor() {
    super(...arguments), this.output = o2.Color, this.transparencyPassType = o4.NONE, this.screenCenterOffsetUnitsEnabled = false, this.spherical = false, this.occlusionTestEnabled = true, this.signedDistanceFieldEnabled = false, this.sampleSignedDistanceFieldTexelCenter = false, this.vvSize = false, this.vvColor = false, this.hasVerticalOffset = false, this.hasScreenSizePerspective = false, this.debugDrawLabelBorder = false, this.hasSlicePlane = false, this.hasPolygonOffset = false, this.depthEnabled = true, this.pixelSnappingEnabled = true, this.draped = false, this.multipassEnabled = false, this.cullAboveGround = false, this.occlusionPass = false, this.objectAndLayerIdColorInstanced = false;
  }
};
e([r7({
  count: o2.COUNT
})], r9.prototype, "output", void 0), e([r7({
  count: o4.COUNT
})], r9.prototype, "transparencyPassType", void 0), e([r7()], r9.prototype, "screenCenterOffsetUnitsEnabled", void 0), e([r7()], r9.prototype, "spherical", void 0), e([r7()], r9.prototype, "occlusionTestEnabled", void 0), e([r7()], r9.prototype, "signedDistanceFieldEnabled", void 0), e([r7()], r9.prototype, "sampleSignedDistanceFieldTexelCenter", void 0), e([r7()], r9.prototype, "vvSize", void 0), e([r7()], r9.prototype, "vvColor", void 0), e([r7()], r9.prototype, "hasVerticalOffset", void 0), e([r7()], r9.prototype, "hasScreenSizePerspective", void 0), e([r7()], r9.prototype, "debugDrawLabelBorder", void 0), e([r7()], r9.prototype, "hasSlicePlane", void 0), e([r7()], r9.prototype, "hasPolygonOffset", void 0), e([r7()], r9.prototype, "depthEnabled", void 0), e([r7()], r9.prototype, "pixelSnappingEnabled", void 0), e([r7()], r9.prototype, "draped", void 0), e([r7()], r9.prototype, "multipassEnabled", void 0), e([r7()], r9.prototype, "cullAboveGround", void 0), e([r7()], r9.prototype, "occlusionPass", void 0), e([r7()], r9.prototype, "objectAndLayerIdColorInstanced", void 0), e([r7({
  constValue: true
})], r9.prototype, "hasSliceInVertexProgram", void 0), e([r7({
  constValue: false
})], r9.prototype, "hasVvInstancing", void 0);

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/materials/HUDMaterial.js
var Q = class extends c {
  constructor(e8) {
    super(e8, new Ae()), this._configuration = new r9(), this.produces = /* @__PURE__ */ new Map([[E2.HUD_MATERIAL, (e9) => a(e9) && !this.parameters.drawInSecondSlot], [E2.LABEL_MATERIAL, (e9) => a(e9) && this.parameters.drawInSecondSlot], [E2.OCCLUSION_PIXELS, () => this.parameters.occlusionTest], [E2.DRAPED_MATERIAL, (e9) => a(e9)]]);
  }
  getConfiguration(e8, t6) {
    return this._configuration.output = e8, this._configuration.hasSlicePlane = this.parameters.hasSlicePlane, this._configuration.hasVerticalOffset = !!this.parameters.verticalOffset, this._configuration.hasScreenSizePerspective = !!this.parameters.screenSizePerspective, this._configuration.screenCenterOffsetUnitsEnabled = "screen" === this.parameters.centerOffsetUnits, this._configuration.hasPolygonOffset = this.parameters.polygonOffset, this._configuration.draped = this.parameters.draped, this._configuration.occlusionTestEnabled = this.parameters.occlusionTest, this._configuration.pixelSnappingEnabled = this.parameters.pixelSnappingEnabled, this._configuration.signedDistanceFieldEnabled = this.parameters.textureIsSignedDistanceField, this._configuration.sampleSignedDistanceFieldTexelCenter = this.parameters.sampleSignedDistanceFieldTexelCenter, this._configuration.vvSize = !!this.parameters.vvSize, this._configuration.vvColor = !!this.parameters.vvColor, this._configuration.occlusionPass = t6.slot === E2.OCCLUSION_PIXELS && this.parameters.occlusionTest, e8 === o2.Color && (this._configuration.debugDrawLabelBorder = !!t2.LABELS_SHOW_BORDER), this._configuration.depthEnabled = this.parameters.depthEnabled, this._configuration.transparencyPassType = t6.transparencyPassType, this._configuration.multipassEnabled = t6.multipassEnabled, this._configuration.cullAboveGround = t6.multipassTerrain.cullAboveGround, this._configuration;
  }
  intersect(e8, r10, i, a2, h3, d) {
    if (!(i.options.selectionMode && i.options.hud && e8.visible && i.point)) return;
    const g2 = this.parameters, O5 = i.point, b3 = i.camera;
    let {
      scaleX: T2,
      scaleY: A
    } = this._getScreenScale(e8);
    T2 *= b3.pixelRatio, A *= b3.pixelRatio, n3(fe, r10), e8.attributes.has(e7.FEATUREATTRIBUTE) && re(fe);
    const v = e8.attributes.get(e7.POSITION), E3 = e8.attributes.get(e7.SIZE), I = e8.attributes.get(e7.NORMAL), _2 = e8.attributes.get(e7.CENTEROFFSETANDDISTANCE);
    s2(v.size >= 3);
    const y2 = D(g2), R3 = "screen" === this.parameters.centerOffsetUnits;
    for (let t6 = 0; t6 < v.data.length / v.size; t6++) {
      const e9 = t6 * v.size;
      o(ae, v.data[e9], v.data[e9 + 1], v.data[e9 + 2]), O(ae, ae, r10);
      const a3 = t6 * E3.size;
      be[0] = E3.data[a3] * T2, be[1] = E3.data[a3 + 1] * A, O(ae, ae, b3.viewMatrix);
      const h4 = t6 * _2.size;
      if (o(me, _2.data[h4], _2.data[h4 + 1], _2.data[h4 + 2]), !R3 && (ae[0] += me[0], ae[1] += me[1], 0 !== me[2])) {
        const e10 = me[2];
        z(me, ae), e2(ae, ae, g(me, me, e10));
      }
      const x3 = t6 * I.size;
      if (o(ne, I.data[x3], I.data[x3 + 1], I.data[x3 + 2]), te(ne, fe, b3, ge), this._applyVerticalOffsetTransformationView(ae, ge, b3, ie), b3.applyProjection(ae, oe), oe[0] > -1) {
        R3 && (me[0] || me[1]) && (oe[0] += me[0] * b3.pixelRatio, 0 !== me[1] && (oe[1] += s3(me[1], ie.factorAlignment) * b3.pixelRatio), b3.unapplyProjection(oe, ae)), oe[0] += this.parameters.screenOffset[0] * b3.pixelRatio, oe[1] += this.parameters.screenOffset[1] * b3.pixelRatio, oe[0] = Math.floor(oe[0]), oe[1] = Math.floor(oe[1]), f(be, ie.factor, be);
        const e10 = Se * b3.pixelRatio;
        let t7 = 0;
        if (g2.textureIsSignedDistanceField && (t7 = g2.outlineSize * b3.pixelRatio / 2), se(O5, oe[0], oe[1], be, e10, t7, g2, y2)) {
          const e11 = i.ray;
          if (O(le, ae, h(ue, b3.viewMatrix)), oe[0] = O5[0], oe[1] = O5[1], b3.unprojectFromRenderScreen(oe, ae)) {
            const t8 = n();
            r2(t8, e11.direction);
            const r11 = 1 / s(t8);
            g(t8, t8, r11);
            d(x(e11.origin, ae) * r11, t8, -1, true, 1, le);
          }
        }
      }
    }
  }
  intersectDraped(e8, t6, r10, s6, i, a2) {
    const n5 = e8.attributes.get(e7.POSITION), o6 = e8.attributes.get(e7.SIZE), c4 = this.parameters, l3 = D(c4);
    let {
      scaleX: f2,
      scaleY: p3
    } = this._getScreenScale(e8);
    f2 *= e8.screenToWorldRatio, p3 *= e8.screenToWorldRatio;
    const u5 = Oe * e8.screenToWorldRatio;
    for (let m = 0; m < n5.data.length / n5.size; m++) {
      const t7 = m * n5.size, r11 = n5.data[t7], h3 = n5.data[t7 + 1], d = m * o6.size;
      be[0] = o6.data[d] * f2, be[1] = o6.data[d + 1] * p3;
      let g2 = 0;
      c4.textureIsSignedDistanceField && (g2 = c4.outlineSize * e8.screenToWorldRatio / 2), se(s6, r11, h3, be, u5, g2, c4, l3) && i(a2.dist, a2.normal, -1, false);
    }
  }
  createBufferWriter() {
    return new Ie(this);
  }
  _updateScaleInfo(e8, t6, r10) {
    const s6 = this.parameters;
    null != s6.screenSizePerspective ? u4(r10, t6, s6.screenSizePerspective, e8.factor) : (e8.factor.scale = 1, e8.factor.factor = 0, e8.factor.minScaleFactor = 0), null != s6.screenSizePerspectiveAlignment ? u4(r10, t6, s6.screenSizePerspectiveAlignment, e8.factorAlignment) : (e8.factorAlignment.factor = e8.factor.factor, e8.factorAlignment.scale = e8.factor.scale, e8.factorAlignment.minScaleFactor = e8.factor.minScaleFactor);
  }
  applyShaderOffsetsView(e8, t6, r10, s6, i, a2, n5) {
    const o6 = te(t6, r10, i, ge);
    return this._applyVerticalGroundOffsetView(e8, o6, i, n5), this._applyVerticalOffsetTransformationView(n5, o6, i, a2), this._applyPolygonOffsetView(n5, o6, s6[3], i, n5), this._applyCenterOffsetView(n5, s6, n5), n5;
  }
  applyShaderOffsetsNDC(e8, t6, r10, s6, i) {
    return this._applyCenterOffsetNDC(e8, t6, r10, s6), null != i && r2(i, s6), this._applyPolygonOffsetNDC(s6, t6, r10, s6), s6;
  }
  _applyPolygonOffsetView(t6, r10, s6, i, a2) {
    const n5 = i.aboveGround ? 1 : -1;
    let o6 = Math.sign(s6);
    0 === o6 && (o6 = n5);
    const c4 = n5 * o6;
    if (this.parameters.shaderPolygonOffset <= 0) return r2(a2, t6);
    const l3 = e3(Math.abs(r10.cosAngle), 0.01, 1), u5 = 1 - Math.sqrt(1 - l3 * l3) / l3 / i.viewport[2];
    return g(a2, t6, c4 > 0 ? u5 : 1 / u5), a2;
  }
  _applyVerticalGroundOffsetView(e8, t6, r10, s6) {
    const i = s(e8), a2 = r10.aboveGround ? 1 : -1, n5 = r10.computeRenderPixelSizeAtDist(i) * p2, o6 = g(ae, t6.normal, a2 * n5);
    return u(s6, e8, o6), s6;
  }
  _applyVerticalOffsetTransformationView(e8, t6, r10, s6) {
    const i = this.parameters;
    if (!i.verticalOffset?.screenLength) {
      if (i.screenSizePerspective || i.screenSizePerspectiveAlignment) {
        const r11 = s(e8);
        this._updateScaleInfo(s6, r11, t6.cosAngle);
      } else s6.factor.scale = 1, s6.factorAlignment.scale = 1;
      return e8;
    }
    const a2 = s(e8), n5 = i.screenSizePerspectiveAlignment ?? i.screenSizePerspective, o6 = o3(r10, a2, i.verticalOffset, t6.cosAngle, n5);
    return this._updateScaleInfo(s6, a2, t6.cosAngle), g(t6.normal, t6.normal, o6), u(e8, e8, t6.normal);
  }
  _applyCenterOffsetView(e8, t6, r10) {
    const s6 = "screen" !== this.parameters.centerOffsetUnits;
    return r10 !== e8 && r2(r10, e8), s6 && (r10[0] += t6[0], r10[1] += t6[1], t6[2] && (z(ne, r10), u(r10, r10, g(ne, ne, t6[2])))), r10;
  }
  _applyCenterOffsetNDC(e8, t6, r10, s6) {
    const i = "screen" !== this.parameters.centerOffsetUnits;
    return s6 !== e8 && r2(s6, e8), i || (s6[0] += t6[0] / r10.fullWidth * 2, s6[1] += t6[1] / r10.fullHeight * 2), s6;
  }
  _applyPolygonOffsetNDC(e8, t6, r10, s6) {
    const i = this.parameters.shaderPolygonOffset;
    if (e8 !== s6 && r2(s6, e8), i) {
      const e9 = r10.aboveGround ? 1 : -1, a2 = e9 * Math.sign(t6[3]);
      s6[2] -= (a2 || e9) * i;
    }
    return s6;
  }
  createGLMaterial(e8) {
    return new $(e8);
  }
  calculateRelativeScreenBounds(e8, t6, r10 = u2()) {
    return ee(this.parameters, e8, t6, r10), r10[2] = r10[0] + e8[0], r10[3] = r10[1] + e8[1], r10;
  }
  _getScreenScale(e8) {
    const t6 = e8.attributes.get(e7.FEATUREATTRIBUTE);
    if (null == t6) return {
      scaleX: 1,
      scaleY: 1
    };
    const r10 = e4(t6.data, de), [s6, i] = W(he, this.parameters, r10);
    return {
      scaleX: s6,
      scaleY: i
    };
  }
};
var $ = class extends u3 {
  constructor(e8) {
    super(__spreadValues(__spreadValues({}, e8), e8.material.parameters));
  }
  selectProgram(e8) {
    return this.ensureTechnique(b2, e8);
  }
  beginSlot(e8) {
    return this.updateTexture(this._material.parameters.textureId), this._material.setParameters(this.textureBindParameters), this.selectProgram(e8);
  }
};
function ee(e8, t6, r10, s6) {
  s6[0] = e8.anchorPosition[0] * -t6[0] + e8.screenOffset[0] * r10, s6[1] = e8.anchorPosition[1] * -t6[1] + e8.screenOffset[1] * r10;
}
function te(e8, r10, s6, i) {
  return t5(r10) && (r10 = n3(pe, r10)), S(i.normal, e8, r10), O(i.normal, i.normal, s6.viewInverseTransposeMatrix), i.cosAngle = P(ce, Te), i;
}
function re(e8) {
  const t6 = e8[0], r10 = e8[1], s6 = e8[2], i = e8[3], a2 = e8[4], n5 = e8[5], o6 = e8[6], c4 = e8[7], l3 = e8[8], f2 = 1 / Math.sqrt(t6 * t6 + r10 * r10 + s6 * s6), p3 = 1 / Math.sqrt(i * i + a2 * a2 + n5 * n5), u5 = 1 / Math.sqrt(o6 * o6 + c4 * c4 + l3 * l3);
  return e8[0] = t6 * f2, e8[1] = r10 * f2, e8[2] = s6 * f2, e8[3] = i * p3, e8[4] = a2 * p3, e8[5] = n5 * p3, e8[6] = o6 * u5, e8[7] = c4 * u5, e8[8] = l3 * u5, e8;
}
function se(e8, t6, r10, s6, i, a2, n5, o6) {
  let c4 = t6 - i - (o6[0] > 0 ? s6[0] * o6[0] : 0), l3 = c4 + s6[0] + 2 * i, f2 = r10 - i - (o6[1] > 0 ? s6[1] * o6[1] : 0), p3 = f2 + s6[1] + 2 * i;
  const u5 = n5.distanceFieldBoundingBox;
  return n5.textureIsSignedDistanceField && null != u5 && (c4 += s6[0] * u5[0], f2 += s6[1] * u5[1], l3 -= s6[0] * (1 - u5[2]), p3 -= s6[1] * (1 - u5[3]), c4 -= a2, l3 += a2, f2 -= a2, p3 += a2), e8[0] > c4 && e8[0] < l3 && e8[1] > f2 && e8[1] < p3;
}
var ie = new t4();
var ae = n();
var ne = n();
var oe = n2();
var ce = n();
var le = n();
var fe = e6();
var pe = e6();
var ue = e5();
var me = n();
var he = n();
var de = n2();
var ge = {
  normal: ce,
  cosAngle: 0
};
var Se = 1;
var Oe = 2;
var be = [0, 0];
var Te = r(0, 0, 1);
var Ae = class extends l2 {
  constructor() {
    super(...arguments), this.renderOccluded = h2.Occlude, this.isDecoration = false, this.color = r3(1, 1, 1, 1), this.texCoordScale = [1, 1], this.polygonOffset = false, this.anchorPosition = r4(0.5, 0.5), this.screenOffset = [0, 0], this.shaderPolygonOffset = 1e-5, this.textureIsSignedDistanceField = false, this.sampleSignedDistanceFieldTexelCenter = false, this.outlineColor = r3(1, 1, 1, 1), this.outlineSize = 0, this.vvSizeEnabled = false, this.vvSize = null, this.vvColor = null, this.vvOpacity = null, this.vvSymbolAnchor = null, this.vvSymbolRotationMatrix = null, this.hasSlicePlane = false, this.pixelSnappingEnabled = true, this.occlusionTest = true, this.centerOffsetUnits = "world", this.drawInSecondSlot = false, this.depthEnabled = true, this.draped = false;
  }
};
var ve = H().vec3f(e7.POSITION).vec3f(e7.NORMAL).vec2f(e7.UV0).vec4u8(e7.COLOR).vec2f(e7.SIZE).vec4f(e7.CENTEROFFSETANDDISTANCE).vec4f(e7.FEATUREATTRIBUTE);
var Ee = ve.clone().vec4u8(e7.OBJECTANDLAYERIDCOLOR);
var Ie = class {
  constructor(e8) {
    this._material = e8, this.vertexBufferLayout = has("enable-feature:objectAndLayerId-rendering") ? Ee : ve;
  }
  elementCount(e8) {
    return 6 * e8.attributes.get(e7.POSITION).indices.length;
  }
  write(e8, t6, r10, s6, i) {
    b(r10.attributes.get(e7.POSITION), e8, s6.position, i, 6), O4(r10.attributes.get(e7.NORMAL), t6, s6.normal, i, 6);
    const a2 = r10.attributes.get(e7.UV0).data;
    let n5, o6, c4, l3;
    if (null == a2 || a2.length < 4) {
      const e9 = this._material.parameters;
      n5 = 0, o6 = 0, c4 = e9.texCoordScale[0], l3 = e9.texCoordScale[1];
    } else n5 = a2[0], o6 = a2[1], c4 = a2[2], l3 = a2[3];
    c4 = Math.min(1.99999, c4 + 1), l3 = Math.min(1.99999, l3 + 1);
    let f2 = r10.attributes.get(e7.POSITION).indices.length, p3 = i;
    const u5 = s6.uv0;
    for (let g2 = 0; g2 < f2; ++g2) u5.set(p3, 0, n5), u5.set(p3, 1, o6), p3++, u5.set(p3, 0, c4), u5.set(p3, 1, o6), p3++, u5.set(p3, 0, c4), u5.set(p3, 1, l3), p3++, u5.set(p3, 0, c4), u5.set(p3, 1, l3), p3++, u5.set(p3, 0, n5), u5.set(p3, 1, l3), p3++, u5.set(p3, 0, n5), u5.set(p3, 1, o6), p3++;
    S3(r10.attributes.get(e7.COLOR), 4, s6.color, i, 6);
    const {
      data: m,
      indices: h3
    } = r10.attributes.get(e7.SIZE);
    f2 = h3.length;
    const d = s6.size;
    p3 = i;
    for (let g2 = 0; g2 < f2; ++g2) {
      const e9 = m[2 * h3[g2]], t7 = m[2 * h3[g2] + 1];
      for (let r11 = 0; r11 < 6; ++r11) d.set(p3, 0, e9), d.set(p3, 1, t7), p3++;
    }
    if (r10.attributes.get(e7.CENTEROFFSETANDDISTANCE) ? p(r10.attributes.get(e7.CENTEROFFSETANDDISTANCE), s6.centerOffsetAndDistance, i, 6) : y(s6.centerOffsetAndDistance, i, 6 * f2), r10.attributes.get(e7.FEATUREATTRIBUTE) ? p(r10.attributes.get(e7.FEATUREATTRIBUTE), s6.featureAttribute, i, 6) : y(s6.featureAttribute, i, 6 * f2), null != r10.objectAndLayerIdColor) {
      const e9 = r10.attributes.get(e7.POSITION)?.indices;
      if (e9) {
        const t7 = e9.length, a3 = s6.getField(e7.OBJECTANDLAYERIDCOLOR, x2);
        R2(r10.objectAndLayerIdColor, a3, t7, i, 6);
      }
    }
  }
};

export {
  t4 as t,
  Q
};
//# sourceMappingURL=chunk-7YXVUZL6.js.map
