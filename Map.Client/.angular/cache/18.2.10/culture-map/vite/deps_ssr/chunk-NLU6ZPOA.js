import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  r as r2
} from "./chunk-PAFRRTJD.js";
import {
  e as e2
} from "./chunk-7PJ3GUSK.js";
import {
  o as o2
} from "./chunk-ZCCDVQ3H.js";
import {
  e
} from "./chunk-DDV74AXO.js";
import {
  l,
  n as n2,
  r
} from "./chunk-37RAJ54N.js";
import {
  c
} from "./chunk-MDEPINSI.js";
import {
  n,
  t
} from "./chunk-2LHHRVKS.js";
import {
  $,
  Y,
  Z
} from "./chunk-NOBDTR4N.js";
import {
  C,
  E,
  F,
  L,
  O
} from "./chunk-KYLW5XXS.js";
import {
  o
} from "./chunk-2OZSYJDX.js";

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/brushes/WGLBrush.js
var t2 = class {
  constructor() {
    this.name = this.constructor.name || "UnnamedBrush", this.brushEffect = null;
  }
  prepareState(t4, r4) {
  }
  draw(t4, r4, s3) {
  }
  drawMany(t4, r4, s3) {
    for (const a of r4) a.visible && this.draw(t4, a, s3);
  }
};

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/brushes/WGLBrushVTLBackground.js
var u = class extends t2 {
  constructor() {
    super(...arguments), this._color = r2(1, 0, 0, 1), this._patternMatrix = e2(), this._programOptions = {
      id: false,
      pattern: false
    };
  }
  dispose() {
    this._vao && (this._vao.dispose(), this._vao = null);
  }
  drawMany(e4, r4) {
    const {
      context: s3,
      painter: a,
      requestRender: f2,
      allowDelayedRender: m
    } = e4;
    this._loadWGLResources(e4);
    const u3 = e4.displayLevel, p = e4.styleLayer, _ = p.backgroundMaterial, d2 = a.vectorTilesMaterialManager, g2 = p.getPaintValue("background-color", u3), h = p.getPaintValue("background-opacity", u3), x = p.getPaintValue("background-pattern", u3), b = void 0 !== x, M = 1 | window.devicePixelRatio, v = e4.spriteMosaic;
    let y, w;
    const j = M > $ ? 2 : 1, A = this._programOptions;
    A.pattern = b;
    const L2 = d2.getMaterialProgram(s3, _, A);
    if (!m || null == f2 || L2.compiled) {
      if (s3.bindVAO(this._vao), s3.useProgram(L2), b) {
        const t4 = v.getMosaicItemPosition(x, true);
        if (null != t4) {
          const {
            tl: e5,
            br: r5,
            page: i
          } = t4;
          y = r5[0] - e5[0], w = r5[1] - e5[1];
          const a2 = v.getPageSize(i);
          null != a2 && (v.bind(s3, L.LINEAR, i, Y), L2.setUniform4f("u_tlbr", e5[0], e5[1], r5[0], r5[1]), L2.setUniform2fv("u_mosaicSize", a2), L2.setUniform1i("u_texture", Y));
        }
        L2.setUniform1f("u_opacity", h);
      } else {
        const t4 = g2[3] * h;
        this._color[0] = t4 * g2[0], this._color[1] = t4 * g2[1], this._color[2] = t4 * g2[2], this._color[3] = t4, L2.setUniform4fv("u_color", this._color);
      }
      L2.setUniform1f("u_depth", p.z || 0);
      for (const e5 of r4) {
        if (L2.setUniform1f("u_coord_range", e5.rangeX), L2.setUniformMatrix3fv("u_dvsMat3", e5.transforms.displayViewScreenMat3), b) {
          const r5 = Math.max(2 ** (Math.round(u3) - e5.key.level), 1), o3 = j * e5.width * r5, i = o3 / o(y), s4 = o3 / o(w);
          this._patternMatrix[0] = i, this._patternMatrix[4] = s4, L2.setUniformMatrix3fv("u_pattern_matrix", this._patternMatrix);
        }
        s3.setStencilFunction(O.EQUAL, 0, 255), s3.drawArrays(E.TRIANGLE_STRIP, 0, 4);
      }
    } else f2();
  }
  _loadWGLResources(t4) {
    if (this._vao) return;
    const {
      context: e4,
      styleLayer: r4
    } = t4, o3 = r4.backgroundMaterial, i = new Int8Array([0, 0, 1, 0, 0, 1, 1, 1]), s3 = c.createVertex(e4, F.STATIC_DRAW, i), n5 = new o2(e4, o3.getAttributeLocations(), o3.getLayoutInfo(), {
      geometry: s3
    });
    this._vao = n5;
  }
};

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/brushes/WGLBrushVTLCircle.js
var n3 = class extends t2 {
  constructor() {
    super(...arguments), this._programOptions = {
      id: false
    };
  }
  dispose() {
  }
  drawMany(t4, n5) {
    const {
      context: l2,
      displayLevel: s3,
      requiredLevel: o3,
      state: c3,
      painter: u3,
      spriteMosaic: d2,
      styleLayerUID: f2,
      requestRender: m,
      allowDelayedRender: p
    } = t4;
    if (!n5.some((e4) => e4.layerData.get(f2)?.circleIndexCount ?? false)) return;
    const y = t4.styleLayer, g2 = y.circleMaterial, M = u3.vectorTilesMaterialManager, v = 1.2, E2 = y.getPaintValue("circle-translate", s3), x = y.getPaintValue("circle-translate-anchor", s3), I = this._programOptions, U = M.getMaterialProgram(l2, g2, I);
    if (p && null != m && !U.compiled) return void m();
    l2.useProgram(U), U.setUniformMatrix3fv("u_displayMat3", x === r.VIEWPORT ? c3.displayMat3 : c3.displayViewMat3), U.setUniform2fv("u_circleTranslation", E2), U.setUniform1f("u_depth", y.z), U.setUniform1f("u_antialiasingWidth", v);
    let _ = -1;
    for (const e4 of n5) {
      if (!e4.layerData.has(f2)) continue;
      e4.key.level !== _ && (_ = e4.key.level, g2.setDataUniforms(U, s3, y, _, d2));
      const t5 = e4.layerData.get(f2);
      if (!t5.circleIndexCount) continue;
      t5.prepareForRendering(l2);
      const n6 = t5.vao;
      null != n6 && (l2.bindVAO(n6), U.setUniformMatrix3fv("u_dvsMat3", e4.transforms.displayViewScreenMat3), o3 !== e4.key.level ? l2.setStencilFunction(O.EQUAL, e4.stencilRef, 255) : l2.setStencilFunction(O.GREATER, 255, 255), l2.drawElements(E.TRIANGLES, t5.circleIndexCount, C.UNSIGNED_INT, Uint32Array.BYTES_PER_ELEMENT * t5.circleIndexStart), e4.triangleCount += t5.circleIndexCount / 3);
    }
  }
};

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/brushes/WGLBrushVTLFill.js
var s = 1 / 65536;
var f = class extends t2 {
  constructor() {
    super(...arguments), this._fillProgramOptions = {
      id: false,
      pattern: false
    }, this._outlineProgramOptions = {
      id: false
    };
  }
  dispose() {
  }
  drawMany(t4, e4) {
    const {
      displayLevel: i,
      renderPass: n5,
      spriteMosaic: a,
      styleLayerUID: l2
    } = t4;
    let r4 = false;
    for (const _ of e4) if (_.layerData.has(l2)) {
      const t5 = _.layerData.get(l2);
      if (t5.fillIndexCount > 0 || t5.outlineIndexCount > 0) {
        r4 = true;
        break;
      }
    }
    if (!r4) return;
    const o3 = t4.styleLayer, s3 = o3.getPaintProperty("fill-pattern"), f2 = void 0 !== s3, u3 = f2 && s3.isDataDriven;
    let c3;
    if (f2 && !u3) {
      const t5 = s3.getValue(i);
      c3 = a.getMosaicItemPosition(t5, true);
    }
    const d2 = !f2 && o3.getPaintValue("fill-antialias", i);
    let p = true, m = 1;
    if (!f2) {
      const t5 = o3.getPaintProperty("fill-color"), e5 = o3.getPaintProperty("fill-opacity");
      if (!t5?.isDataDriven && !e5?.isDataDriven) {
        const t6 = o3.getPaintValue("fill-color", i);
        m = o3.getPaintValue("fill-opacity", i) * t6[3], m >= 1 && (p = false);
      }
    }
    if (p && "opaque" === n5) return;
    const y = o3.getPaintValue("fill-translate", i), g2 = o3.getPaintValue("fill-translate-anchor", i);
    (p || "translucent" !== n5) && this._drawFill(t4, l2, o3, e4, y, g2, f2, c3, u3);
    const M = !o3.hasDataDrivenOutlineColor && o3.outlineUsesFillColor && m < 1;
    d2 && "opaque" !== n5 && !M && this._drawOutline(t4, l2, o3, e4, y, g2);
  }
  _drawFill(n5, f2, u3, c3, d2, p, m, y, g2) {
    if (m && !g2 && null == y) return;
    const {
      context: M,
      displayLevel: _,
      state: E2,
      painter: v,
      pixelRatio: P,
      spriteMosaic: U,
      requestRender: I,
      allowDelayedRender: x
    } = n5, D = u3.fillMaterial, R = v.vectorTilesMaterialManager, S = P > $ ? 2 : 1, T = this._fillProgramOptions;
    T.pattern = m;
    const h = R.getMaterialProgram(M, D, T);
    if (x && null != I && !h.compiled) return void I();
    if (M.useProgram(h), null != y) {
      const {
        page: t4
      } = y, i = U.getPageSize(t4);
      null != i && (U.bind(M, L.LINEAR, t4, Y), h.setUniform2fv("u_mosaicSize", i), h.setUniform1i("u_texture", Y));
    }
    h.setUniformMatrix3fv("u_displayMat3", p === r.VIEWPORT ? E2.displayMat3 : E2.displayViewMat3), h.setUniform2fv("u_fillTranslation", d2), h.setUniform1f("u_depth", u3.z + s);
    let w = -1;
    for (const t4 of c3) {
      if (!t4.layerData.has(f2)) continue;
      t4.key.level !== w && (w = t4.key.level, D.setDataUniforms(h, _, u3, w, U));
      const i = t4.layerData.get(f2);
      if (!i.fillIndexCount) continue;
      i.prepareForRendering(M);
      const n6 = i.fillVAO;
      if (null != n6) {
        if (M.bindVAO(n6), h.setUniformMatrix3fv("u_dvsMat3", t4.transforms.displayViewScreenMat3), M.setStencilFunction(O.EQUAL, t4.stencilRef, 255), m) {
          const e4 = Math.max(2 ** (Math.round(_) - t4.key.level), 1), i2 = t4.rangeX / (S * t4.width * e4);
          h.setUniform1f("u_patternFactor", i2);
        }
        if (g2) {
          const t5 = i.patternMap;
          if (!t5) continue;
          for (const [i2, n7] of t5) {
            const t6 = U.getPageSize(i2);
            null != t6 && (U.bind(M, L.LINEAR, i2, Y), h.setUniform2fv("u_mosaicSize", t6), h.setUniform1i("u_texture", Y), M.drawElements(E.TRIANGLES, n7[1], C.UNSIGNED_INT, Uint32Array.BYTES_PER_ELEMENT * n7[0]));
          }
        } else M.drawElements(E.TRIANGLES, i.fillIndexCount, C.UNSIGNED_INT, Uint32Array.BYTES_PER_ELEMENT * i.fillIndexStart);
        t4.triangleCount += i.fillIndexCount / 3;
      }
    }
  }
  _drawOutline(e4, i, n5, a, f2, u3) {
    const {
      context: c3,
      displayLevel: d2,
      state: p,
      painter: m,
      pixelRatio: y,
      spriteMosaic: g2,
      requestRender: M,
      allowDelayedRender: _
    } = e4, E2 = n5.outlineMaterial, v = m.vectorTilesMaterialManager, P = 0.75 / y, U = this._outlineProgramOptions, I = v.getMaterialProgram(c3, E2, U);
    if (_ && null != M && !I.compiled) return void M();
    c3.useProgram(I), I.setUniformMatrix3fv("u_displayMat3", u3 === r.VIEWPORT ? p.displayMat3 : p.displayViewMat3), I.setUniform2fv("u_fillTranslation", f2), I.setUniform1f("u_depth", n5.z + s), I.setUniform1f("u_outline_width", P);
    let x = -1;
    for (const t4 of a) {
      if (!t4.layerData.has(i)) continue;
      t4.key.level !== x && (x = t4.key.level, E2.setDataUniforms(I, d2, n5, x, g2));
      const e5 = t4.layerData.get(i);
      if (e5.prepareForRendering(c3), !e5.outlineIndexCount) continue;
      const a2 = e5.outlineVAO;
      null != a2 && (c3.bindVAO(a2), I.setUniformMatrix3fv("u_dvsMat3", t4.transforms.displayViewScreenMat3), c3.setStencilFunction(O.EQUAL, t4.stencilRef, 255), c3.drawElements(E.TRIANGLES, e5.outlineIndexCount, C.UNSIGNED_INT, Uint32Array.BYTES_PER_ELEMENT * e5.outlineIndexStart), t4.triangleCount += e5.outlineIndexCount / 3);
    }
  }
};

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/brushes/WGLBrushVTLLine.js
var s2 = class extends t2 {
  constructor() {
    super(...arguments), this._programOptions = {
      id: false,
      pattern: false,
      sdf: false
    };
  }
  dispose() {
  }
  drawMany(i, s3) {
    const {
      context: l2,
      displayLevel: f2,
      state: u3,
      painter: c3,
      pixelRatio: d2,
      spriteMosaic: m,
      styleLayerUID: p,
      requestRender: g2,
      allowDelayedRender: y
    } = i;
    if (!s3.some((e4) => e4.layerData.get(p)?.lineIndexCount ?? false)) return;
    const M = i.styleLayer, E2 = M.lineMaterial, _ = c3.vectorTilesMaterialManager, v = M.getPaintValue("line-translate", f2), U = M.getPaintValue("line-translate-anchor", f2), I = M.getPaintProperty("line-pattern"), P = void 0 !== I, x = P && I.isDataDriven;
    let D, S;
    if (P && !x) {
      const e4 = I.getValue(f2);
      D = m.getMosaicItemPosition(e4);
    }
    let L2 = false;
    if (!P) {
      const e4 = M.getPaintProperty("line-dasharray");
      if (S = void 0 !== e4, L2 = S && e4.isDataDriven, S && !L2) {
        const t4 = e4.getValue(f2), i2 = M.getDashKey(t4, M.getLayoutValue("line-cap", f2));
        D = m.getMosaicItemPosition(i2);
      }
    }
    const N = 1 / d2, R = this._programOptions;
    R.pattern = P, R.sdf = S;
    const T = _.getMaterialProgram(l2, E2, R);
    if (y && null != g2 && !T.compiled) return void g2();
    if (l2.useProgram(T), T.setUniformMatrix3fv("u_displayViewMat3", u3.displayViewMat3), T.setUniformMatrix3fv("u_displayMat3", U === r.VIEWPORT ? u3.displayMat3 : u3.displayViewMat3), T.setUniform2fv("u_lineTranslation", v), T.setUniform1f("u_depth", M.z), T.setUniform1f("u_antialiasing", N), D && null != D) {
      const {
        page: e4
      } = D, i2 = m.getPageSize(e4);
      null != i2 && (m.bind(l2, L.LINEAR, e4, Y), T.setUniform2fv("u_mosaicSize", i2), T.setUniform1i("u_texture", Y));
    }
    let V = -1;
    for (const e4 of s3) {
      if (!e4.layerData.has(p)) continue;
      e4.key.level !== V && (V = e4.key.level, E2.setDataUniforms(T, f2, M, V, m));
      const i2 = 2 ** (f2 - V) / d2;
      T.setUniform1f("u_zoomFactor", i2);
      const s4 = e4.layerData.get(p);
      if (!s4.lineIndexCount) continue;
      s4.prepareForRendering(l2);
      const u4 = s4.vao;
      if (null != u4) {
        if (l2.bindVAO(u4), T.setUniformMatrix3fv("u_dvsMat3", e4.transforms.displayViewScreenMat3), l2.setStencilFunction(O.EQUAL, e4.stencilRef, 255), x || L2) {
          const e5 = s4.patternMap;
          if (!e5) continue;
          for (const [i3, a] of e5) {
            const e6 = m.getPageSize(i3);
            null != e6 && (m.bind(l2, L.LINEAR, i3, Y), T.setUniform2fv("u_mosaicSize", e6), T.setUniform1i("u_texture", Y), l2.drawElements(E.TRIANGLES, a[1], C.UNSIGNED_INT, Uint32Array.BYTES_PER_ELEMENT * a[0]));
          }
        } else l2.drawElements(E.TRIANGLES, s4.lineIndexCount, C.UNSIGNED_INT, Uint32Array.BYTES_PER_ELEMENT * s4.lineIndexStart);
        e4.triangleCount += s4.lineIndexCount / 3;
      }
    }
  }
};

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/GeometryUtils.js
var n4 = 128 / Math.PI;
var t3 = 256 / 360;
var r3 = 1 / Math.LN2;
function u2(n5, t4) {
  return (n5 %= t4) >= 0 ? n5 : n5 + t4;
}
function c2(n5) {
  return u2(n5 * t3, 256);
}
function e3(n5) {
  return Math.log(n5) * r3;
}

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/brushes/WGLBrushVTLSymbol.js
var g = 1 / 65536;
var d = class extends t2 {
  constructor() {
    super(...arguments), this._iconProgramOptions = {
      id: false,
      sdf: false
    }, this._sdfProgramOptions = {
      id: false
    }, this._spritesTextureSize = n();
  }
  dispose() {
  }
  drawMany(e4, t4) {
    const i = e4.styleLayer;
    this._drawIcons(e4, i, t4), this._drawText(e4, i, t4);
  }
  _drawIcons(e4, t4, o3) {
    const {
      context: f2,
      displayLevel: c3,
      painter: u3,
      spriteMosaic: p,
      state: m,
      styleLayerUID: g2,
      requestRender: d2,
      allowDelayedRender: y
    } = e4, _ = t4.iconMaterial, M = u3.vectorTilesMaterialManager;
    let h, P = false;
    for (const i of o3) if (i.layerData.has(g2) && (h = i.layerData.get(g2), h.iconPerPageElementsMap.size > 0)) {
      P = true;
      break;
    }
    if (!P) return;
    const U = t4.getPaintValue("icon-translate", c3), E2 = t4.getPaintValue("icon-translate-anchor", c3);
    let T = t4.getLayoutValue("icon-rotation-alignment", c3);
    T === l.AUTO && (T = t4.getLayoutValue("symbol-placement", c3) === n2.POINT ? l.VIEWPORT : l.MAP);
    const x = T === l.MAP, S = t4.getLayoutValue("icon-keep-upright", c3) && x, v = h.isIconSDF, D = this._iconProgramOptions;
    D.sdf = v;
    const V = M.getMaterialProgram(f2, _, D);
    if (y && null != d2 && !V.compiled) return void d2();
    f2.useProgram(V), V.setUniformMatrix3fv("u_displayViewMat3", T === l.MAP ? m.displayViewMat3 : m.displayMat3), V.setUniformMatrix3fv("u_displayMat3", E2 === r.VIEWPORT ? m.displayMat3 : m.displayViewMat3), V.setUniform2fv("u_iconTranslation", U), V.setUniform1f("u_depth", t4.z), V.setUniform1f("u_mapRotation", c2(m.rotation)), V.setUniform1f("u_keepUpright", S ? 1 : 0), V.setUniform1f("u_level", 10 * c3), V.setUniform1i("u_texture", Y), V.setUniform1f("u_fadeDuration", e / 1e3);
    let R = -1;
    for (const i of o3) {
      if (!i.layerData.has(g2)) continue;
      if (i.key.level !== R && (R = i.key.level, _.setDataUniforms(V, c3, t4, R, p)), h = i.layerData.get(g2), 0 === h.iconPerPageElementsMap.size) continue;
      h.prepareForRendering(f2), h.updateOpacityInfo();
      const a = h.iconVAO;
      if (null != a) {
        f2.bindVAO(a), V.setUniformMatrix3fv("u_dvsMat3", i.transforms.displayViewScreenMat3), V.setUniform1f("u_time", (performance.now() - h.lastOpacityUpdate) / 1e3);
        for (const [t5, a2] of h.iconPerPageElementsMap) this._renderIconRange(e4, V, a2, t5, i);
      }
    }
  }
  _renderIconRange(e4, t4, i, a, r4) {
    const {
      context: n5,
      spriteMosaic: o3
    } = e4;
    this._spritesTextureSize[0] = o3.getWidth(a) / 4, this._spritesTextureSize[1] = o3.getHeight(a) / 4, t4.setUniform2fv("u_mosaicSize", this._spritesTextureSize), o3.bind(n5, L.LINEAR, a, Y), this._setStencilState(e4, r4), n5.drawElements(E.TRIANGLES, i[1], C.UNSIGNED_INT, Uint32Array.BYTES_PER_ELEMENT * i[0]), r4.triangleCount += i[1] / 3;
  }
  _drawText(e4, s3, f2) {
    const {
      context: c3,
      displayLevel: u3,
      glyphMosaic: p,
      painter: m,
      pixelRatio: d2,
      spriteMosaic: y,
      state: _,
      styleLayerUID: M,
      requestRender: h,
      allowDelayedRender: P
    } = e4, U = s3.textMaterial, E2 = m.vectorTilesMaterialManager;
    let T, x = false;
    for (const t4 of f2) if (t4.layerData.has(M) && (T = t4.layerData.get(M), T.glyphPerPageElementsMap.size > 0)) {
      x = true;
      break;
    }
    if (!x) return;
    const S = s3.getPaintProperty("text-opacity");
    if (S && !S.isDataDriven && 0 === S.getValue(u3)) return;
    const v = s3.getPaintProperty("text-color"), D = !v || v.isDataDriven || v.getValue(u3)[3] > 0, V = s3.getPaintProperty("text-halo-width"), R = s3.getPaintProperty("text-halo-color"), I = (!V || V.isDataDriven || V.getValue(u3) > 0) && (!R || R.isDataDriven || R.getValue(u3)[3] > 0);
    if (!D && !I) return;
    const A = 24 / 8;
    let w = s3.getLayoutValue("text-rotation-alignment", u3);
    w === l.AUTO && (w = s3.getLayoutValue("symbol-placement", u3) === n2.POINT ? l.VIEWPORT : l.MAP);
    const L2 = w === l.MAP, O2 = s3.getLayoutValue("text-keep-upright", u3) && L2, N = 0.8 * A / d2;
    this._glyphTextureSize || (this._glyphTextureSize = t(p.width / 4, p.height / 4));
    const z = s3.getPaintValue("text-translate", u3), b = s3.getPaintValue("text-translate-anchor", u3), k = this._sdfProgramOptions, G = E2.getMaterialProgram(c3, U, k);
    if (P && null != h && !G.compiled) return void h();
    c3.useProgram(G), G.setUniformMatrix3fv("u_displayViewMat3", w === l.MAP ? _.displayViewMat3 : _.displayMat3), G.setUniformMatrix3fv("u_displayMat3", b === r.VIEWPORT ? _.displayMat3 : _.displayViewMat3), G.setUniform2fv("u_textTranslation", z), G.setUniform1f("u_depth", s3.z + g), G.setUniform2fv("u_mosaicSize", this._glyphTextureSize), G.setUniform1f("u_mapRotation", c2(_.rotation)), G.setUniform1f("u_keepUpright", O2 ? 1 : 0), G.setUniform1f("u_level", 10 * u3), G.setUniform1i("u_texture", Z), G.setUniform1f("u_antialiasingWidth", N), G.setUniform1f("u_fadeDuration", e / 1e3);
    let W = -1;
    for (const t4 of f2) {
      if (!t4.layerData.has(M)) continue;
      if (t4.key.level !== W && (W = t4.key.level, U.setDataUniforms(G, u3, s3, W, y)), T = t4.layerData.get(M), 0 === T.glyphPerPageElementsMap.size) continue;
      T.prepareForRendering(c3), T.updateOpacityInfo();
      const i = T.textVAO;
      if (null == i) continue;
      c3.bindVAO(i), G.setUniformMatrix3fv("u_dvsMat3", t4.transforms.displayViewScreenMat3), this._setStencilState(e4, t4);
      const a = (performance.now() - T.lastOpacityUpdate) / 1e3;
      G.setUniform1f("u_time", a), T.glyphPerPageElementsMap.forEach((e5, i2) => {
        this._renderGlyphRange(c3, e5, i2, p, G, I, D, t4);
      });
    }
  }
  _renderGlyphRange(e4, t4, i, a, r4, n5, s3, l2) {
    a.bind(e4, L.LINEAR, i, Z), n5 && (r4.setUniform1f("u_halo", 1), e4.drawElements(E.TRIANGLES, t4[1], C.UNSIGNED_INT, Uint32Array.BYTES_PER_ELEMENT * t4[0]), l2.triangleCount += t4[1] / 3), s3 && (r4.setUniform1f("u_halo", 0), e4.drawElements(E.TRIANGLES, t4[1], C.UNSIGNED_INT, Uint32Array.BYTES_PER_ELEMENT * t4[0]), l2.triangleCount += t4[1] / 3);
  }
  _setStencilState(e4, t4) {
    const {
      context: i,
      is3D: a,
      stencilSymbols: r4
    } = e4;
    if (i.setStencilTestEnabled(true), r4) return i.setStencilWriteMask(255), void i.setStencilFunction(O.ALWAYS, t4.stencilRef, 255);
    i.setStencilWriteMask(0), a ? i.setStencilFunction(O.EQUAL, t4.stencilRef, 255) : i.setStencilFunction(O.GREATER, 255, 255);
  }
};

export {
  t2 as t,
  u,
  n3 as n,
  f,
  s2 as s,
  e3 as e,
  d
};
//# sourceMappingURL=chunk-NLU6ZPOA.js.map
