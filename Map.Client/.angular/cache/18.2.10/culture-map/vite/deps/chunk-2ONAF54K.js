import {
  t
} from "./chunk-J7KF6IEI.js";
import {
  N
} from "./chunk-GOKBAMCG.js";
import {
  r
} from "./chunk-FHW2TG7X.js";
import {
  l
} from "./chunk-33LKI2Y7.js";
import {
  o as o6
} from "./chunk-ZAP7ZEWR.js";
import {
  o as o5
} from "./chunk-VIIVMRRO.js";
import {
  w
} from "./chunk-KTRZHJ2M.js";
import {
  c,
  e2 as e4
} from "./chunk-P7OSFLIX.js";
import {
  D,
  G
} from "./chunk-YLE5AYZV.js";
import {
  o
} from "./chunk-3UOXF3CT.js";
import {
  o as o3
} from "./chunk-WJKYGQOY.js";
import {
  e as e3
} from "./chunk-PPMDUJ4E.js";
import {
  o as o4
} from "./chunk-R5ZE5A4K.js";
import {
  o as o2
} from "./chunk-SZWWBMQN.js";
import {
  e as e2
} from "./chunk-4MMTPKY4.js";
import {
  e
} from "./chunk-4Z5SGKRM.js";

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/shaders/LineMarkerTechniqueConfiguration.js
var p;
var s;
!function(o9) {
  o9[o9.Draped = 0] = "Draped", o9[o9.Screen = 1] = "Screen", o9[o9.World = 2] = "World", o9[o9.COUNT = 3] = "COUNT";
}(p || (p = {})), function(o9) {
  o9[o9.Center = 0] = "Center", o9[o9.Tip = 1] = "Tip", o9[o9.COUNT = 2] = "COUNT";
}(s || (s = {}));
var a = class extends t {
  constructor() {
    super(...arguments), this.output = o3.Color, this.transparencyPassType = o5.NONE, this.occluder = false, this.hasSlicePlane = false, this.writeDepth = false, this.space = p.Screen, this.hideOnShortSegments = false, this.hasCap = false, this.anchor = s.Center, this.hasTip = false, this.vvSize = false, this.vvColor = false, this.vvOpacity = false, this.hasOccludees = false, this.multipassEnabled = false, this.cullAboveGround = false;
  }
  get draped() {
    return this.space === p.Draped;
  }
};
e([r({
  count: o3.COUNT
})], a.prototype, "output", void 0), e([r({
  count: o5.COUNT
})], a.prototype, "transparencyPassType", void 0), e([r()], a.prototype, "occluder", void 0), e([r()], a.prototype, "hasSlicePlane", void 0), e([r()], a.prototype, "writeDepth", void 0), e([r({
  count: p.COUNT
})], a.prototype, "space", void 0), e([r()], a.prototype, "hideOnShortSegments", void 0), e([r()], a.prototype, "hasCap", void 0), e([r({
  count: s.COUNT
})], a.prototype, "anchor", void 0), e([r()], a.prototype, "hasTip", void 0), e([r()], a.prototype, "vvSize", void 0), e([r()], a.prototype, "vvColor", void 0), e([r()], a.prototype, "vvOpacity", void 0), e([r()], a.prototype, "hasOccludees", void 0), e([r()], a.prototype, "multipassEnabled", void 0), e([r()], a.prototype, "cullAboveGround", void 0), e([r({
  constValue: false
})], a.prototype, "occlusionPass", void 0), e([r({
  constValue: true
})], a.prototype, "hasVvInstancing", void 0), e([r({
  constValue: true
})], a.prototype, "hasSliceTranslatedView", void 0);

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/RibbonVertexPosition.glsl.js
var o7 = 8;
function c2(c4, s4) {
  const l3 = c4.vertex;
  l3.uniforms.add(new o4("intrinsicWidth", (t2) => t2.width)), s4.vvSize ? (c4.attributes.add(e2.SIZEFEATUREATTRIBUTE, "float"), l3.uniforms.add(new e3("vvSizeMinSize", (t2) => t2.vvSize.minSize), new e3("vvSizeMaxSize", (t2) => t2.vvSize.maxSize), new e3("vvSizeOffset", (t2) => t2.vvSize.offset), new e3("vvSizeFactor", (t2) => t2.vvSize.factor)), l3.code.add(o2`float getSize() {
return intrinsicWidth * clamp(vvSizeOffset + sizeFeatureAttribute * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize).x;
}`)) : (c4.attributes.add(e2.SIZE, "float"), l3.code.add(o2`float getSize(){
return intrinsicWidth * size;
}`)), s4.vvOpacity ? (c4.attributes.add(e2.OPACITYFEATUREATTRIBUTE, "float"), l3.constants.add("vvOpacityNumber", "int", 8), l3.uniforms.add(new o6("vvOpacityValues", (t2) => t2.vvOpacity.values, o7), new o6("vvOpacityOpacities", (t2) => t2.vvOpacity.opacityValues, o7)), l3.code.add(o2`float interpolateOpacity( float value ){
if (value <= vvOpacityValues[0]) {
return vvOpacityOpacities[0];
}
for (int i = 1; i < vvOpacityNumber; ++i) {
if (vvOpacityValues[i] >= value) {
float f = (value - vvOpacityValues[i-1]) / (vvOpacityValues[i] - vvOpacityValues[i-1]);
return mix(vvOpacityOpacities[i-1], vvOpacityOpacities[i], f);
}
}
return vvOpacityOpacities[vvOpacityNumber - 1];
}
vec4 applyOpacity( vec4 color ){
return vec4(color.xyz, interpolateOpacity(opacityFeatureAttribute));
}`)) : l3.code.add(o2`vec4 applyOpacity( vec4 color ){
return color;
}`), s4.vvColor ? (c4.include(l, s4), c4.attributes.add(e2.COLORFEATUREATTRIBUTE, "float"), l3.code.add(o2`vec4 getColor(){
return applyOpacity(interpolateVVColor(colorFeatureAttribute));
}`)) : (c4.attributes.add(e2.COLOR, "vec4"), l3.code.add(o2`vec4 getColor(){
return applyOpacity(color);
}`));
}

// ../../../node_modules/@arcgis/core/views/3d/support/engineContent/sdfPrimitives.js
var e5 = 128;
var o8 = 0.5;
function a2(t2) {
  return "cross" === t2 || "x" === t2;
}
function u(t2, a3 = e5, u2 = a3 * o8, s4 = 0) {
  const i2 = c3(t2, a3, u2, s4);
  return new N(i2, {
    mipmap: false,
    wrap: {
      s: D.CLAMP_TO_EDGE,
      t: D.CLAMP_TO_EDGE
    },
    width: a3,
    height: a3,
    components: 4,
    noUnpackFlip: true,
    reloadable: true
  });
}
function c3(t2, r2 = e5, n3 = r2 * o8, a3 = 0) {
  switch (t2) {
    case "circle":
    default:
      return s2(r2, n3);
    case "square":
      return i(r2, n3);
    case "cross":
      return h(r2, n3, a3);
    case "x":
      return M(r2, n3, a3);
    case "kite":
      return f(r2, n3);
    case "triangle":
      return l2(r2, n3);
    case "arrow":
      return m(r2, n3);
  }
}
function s2(t2, r2) {
  const n3 = t2 / 2 - 0.5;
  return x(t2, T(n3, n3, r2 / 2));
}
function i(t2, r2) {
  return p2(t2, r2, false);
}
function f(t2, r2) {
  return p2(t2, r2, true);
}
function h(t2, r2, n3 = 0) {
  return b(t2, r2, false, n3);
}
function M(t2, r2, n3 = 0) {
  return b(t2, r2, true, n3);
}
function l2(t2, r2) {
  return x(t2, w2(t2 / 2, r2, r2 / 2));
}
function m(t2, r2) {
  const n3 = r2, e6 = r2 / 2, o9 = t2 / 2, a3 = 0.8 * n3, u2 = T(o9, (t2 - r2) / 2 - a3, Math.sqrt(a3 * a3 + e6 * e6)), c4 = w2(o9, n3, e6);
  return x(t2, (t3, r3) => Math.max(c4(t3, r3), -u2(t3, r3)));
}
function p2(t2, r2, n3) {
  return n3 && (r2 /= Math.SQRT2), x(t2, (e6, o9) => {
    let a3 = e6 - 0.5 * t2 + 0.25, u2 = 0.5 * t2 - o9 - 0.75;
    if (n3) {
      const t3 = (a3 + u2) / Math.SQRT2;
      u2 = (u2 - a3) / Math.SQRT2, a3 = t3;
    }
    return Math.max(Math.abs(a3), Math.abs(u2)) - 0.5 * r2;
  });
}
function b(t2, r2, n3, e6 = 0) {
  r2 -= e6, n3 && (r2 *= Math.SQRT2);
  const o9 = 0.5 * r2;
  return x(t2, (r3, a3) => {
    let u2, c4 = r3 - 0.5 * t2, s4 = 0.5 * t2 - a3 - 1;
    if (n3) {
      const t3 = (c4 + s4) / Math.SQRT2;
      s4 = (s4 - c4) / Math.SQRT2, c4 = t3;
    }
    return c4 = Math.abs(c4), s4 = Math.abs(s4), u2 = c4 > s4 ? c4 > o9 ? Math.sqrt((c4 - o9) * (c4 - o9) + s4 * s4) : s4 : s4 > o9 ? Math.sqrt(c4 * c4 + (s4 - o9) * (s4 - o9)) : c4, u2 -= e6 / 2, u2;
  });
}
function T(t2, r2, n3) {
  return (e6, o9) => {
    const a3 = e6 - t2, u2 = o9 - r2;
    return Math.sqrt(a3 * a3 + u2 * u2) - n3;
  };
}
function w2(t2, r2, n3) {
  const e6 = Math.sqrt(r2 * r2 + n3 * n3);
  return (o9, a3) => {
    const u2 = Math.abs(o9 - t2) - n3, c4 = a3 - t2 + r2 / 2 + 0.75, s4 = (r2 * u2 + n3 * c4) / e6, i2 = -c4;
    return Math.max(s4, i2);
  };
}
function x(r2, n3) {
  const e6 = new Uint8Array(4 * r2 * r2);
  for (let o9 = 0; o9 < r2; o9++) for (let a3 = 0; a3 < r2; a3++) {
    const u2 = a3 + r2 * o9;
    let c4 = n3(a3, o9);
    c4 = c4 / r2 + 0.5, o(c4, e6, 4 * u2);
  }
  return e6;
}

// ../../../node_modules/@arcgis/core/views/3d/support/engineContent/marker.js
var m2 = 64;
var s3 = m2 / 2;
var n = s3 / 5;
var p3 = m2 / n;
var w3 = 0.25;
function f2(p4, w4) {
  const f3 = c3(p4, m2, s3, n), u2 = new e4();
  return u2.internalFormat = G.RGBA, u2.width = m2, u2.height = m2, u2.wrapMode = D.CLAMP_TO_EDGE, new c(w4, u2, f3);
}

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/MarkerSizing.glsl.js
function n2(n3, i2) {
  const {
    vertex: d,
    constants: s4
  } = n3;
  s4.add("markerSizePerLineWidth", "float", p3), w(d), null == d.uniforms.get("markerScale") && d.constants.add("markerScale", "float", 1), d.code.add(o2`float getLineWidth() {
return max(getSize(), 1.0) * pixelRatio;
}
float getScreenMarkerSize() {
return markerSizePerLineWidth * markerScale * getLineWidth();
}`), i2.space === p.World && (d.constants.add("maxSegmentLengthFraction", "float", 0.45), d.uniforms.add(new o4("perRenderPixelRatio", (e6, r2) => r2.camera.perRenderPixelRatio)), d.code.add(o2`bool areWorldMarkersHidden(vec4 pos, vec4 other) {
vec3 midPoint = mix(pos.xyz, other.xyz, 0.5);
float distanceToCamera = length(midPoint);
float screenToWorldRatio = perRenderPixelRatio * distanceToCamera * 0.5;
float worldMarkerSize = getScreenMarkerSize() * screenToWorldRatio;
float segmentLen = length(pos.xyz - other.xyz);
return worldMarkerSize > maxSegmentLengthFraction * segmentLen;
}
float getWorldMarkerSize(vec4 pos) {
float distanceToCamera = length(pos.xyz);
float screenToWorldRatio = perRenderPixelRatio * distanceToCamera * 0.5;
return getScreenMarkerSize() * screenToWorldRatio;
}`));
}

export {
  p,
  s,
  a,
  c2 as c,
  e5 as e,
  o8 as o,
  a2,
  u,
  m2 as m,
  s3 as s2,
  p3 as p2,
  w3 as w,
  f2 as f,
  n2 as n
};
//# sourceMappingURL=chunk-2ONAF54K.js.map
