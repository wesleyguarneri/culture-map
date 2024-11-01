import {
  o as o3
} from "./chunk-GY52WOQZ.js";
import {
  e as e3
} from "./chunk-PPMDUJ4E.js";
import {
  n as n2,
  o as o2
} from "./chunk-SZWWBMQN.js";
import {
  e as e2
} from "./chunk-BQZBOYBD.js";
import {
  i
} from "./chunk-XTVPEVHA.js";
import {
  O,
  e,
  o,
  u
} from "./chunk-AXVPJBVW.js";
import {
  l,
  n
} from "./chunk-OXEPWRM7.js";

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/Slice.glsl.js
var u2 = class extends n2 {
  constructor(e4) {
    super(), this.slicePlaneLocalOrigin = e4;
  }
};
function _(e4, s) {
  m(e4, s, new e3("slicePlaneOrigin", (e5, i2) => H(s, e5, i2)), new e3("slicePlaneBasis1", (e5, i2) => I(s, e5, i2, i2.slicePlane?.basis1)), new e3("slicePlaneBasis2", (e5, i2) => I(s, e5, i2, i2.slicePlane?.basis2)));
}
function P(e4, s) {
  m(e4, s, new o3("slicePlaneOrigin", (e5, i2) => H(s, e5, i2)), new o3("slicePlaneBasis1", (e5, i2) => I(s, e5, i2, i2.slicePlane?.basis1)), new o3("slicePlaneBasis2", (e5, i2) => I(s, e5, i2, i2.slicePlane?.basis2)));
}
function m(e4, s, ...i2) {
  if (!s.hasSlicePlane) {
    const i3 = o2`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;
    return s.hasSliceInVertexProgram && e4.vertex.code.add(i3), void e4.fragment.code.add(i3);
  }
  s.hasSliceInVertexProgram && e4.vertex.uniforms.add(...i2), e4.fragment.uniforms.add(...i2);
  const a = o2`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool sliceByPlane(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}
#define rejectBySlice(_pos_) sliceByPlane(_pos_)
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`, l2 = o2`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
if (sliceByFactors(factors)) {
return color;
}
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`, o4 = s.hasSliceHighlight ? o2`
        ${l2}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      ` : o2`#define highlightSlice(_color_, _pos_) (_color_)`;
  s.hasSliceInVertexProgram && e4.vertex.code.add(a), e4.fragment.code.add(a), e4.fragment.code.add(o4);
}
function h(e4, s, i2) {
  return e4.instancedDoublePrecision ? o(b, i2.camera.viewInverseTransposeMatrix[3], i2.camera.viewInverseTransposeMatrix[7], i2.camera.viewInverseTransposeMatrix[11]) : s.slicePlaneLocalOrigin;
}
function p(e4, s) {
  return null != e4 ? e(v, s.origin, e4) : s.origin;
}
function g(s, i2, a) {
  return s.hasSliceTranslatedView ? null != i2 ? i(S, a.camera.viewMatrix, i2) : a.camera.viewMatrix : null;
}
function H(e4, s, a) {
  if (null == a.slicePlane) return l;
  const l2 = h(e4, s, a), o4 = p(l2, a.slicePlane), r = g(e4, l2, a);
  return null != r ? O(v, o4, r) : o4;
}
function I(e4, s, o4, r) {
  if (null == r || null == o4.slicePlane) return l;
  const t = h(e4, s, o4), n3 = p(t, o4.slicePlane), f = g(e4, t, o4);
  return null != f ? (u(B, r, n3), O(v, n3, f), O(B, B, f), e(B, B, v)) : r;
}
var b = n();
var v = n();
var B = n();
var S = e2();

export {
  u2 as u,
  _,
  P
};
//# sourceMappingURL=chunk-OZG2NNUW.js.map
