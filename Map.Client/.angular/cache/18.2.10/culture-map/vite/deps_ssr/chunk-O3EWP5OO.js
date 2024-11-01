import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  n as n4
} from "./chunk-4Y6TKPBN.js";
import {
  e as e4
} from "./chunk-ZDFN6OZC.js";
import {
  o as o4
} from "./chunk-DUV7OLAZ.js";
import {
  e as e3
} from "./chunk-3NWWTJOW.js";
import {
  o as o5
} from "./chunk-ZHVMMFTW.js";
import {
  l
} from "./chunk-SNHVHW2N.js";
import {
  o as o3
} from "./chunk-B76NC7GX.js";
import {
  e as e2
} from "./chunk-AMH7CZMY.js";
import {
  o as o2
} from "./chunk-Q5JLNMWZ.js";
import {
  o
} from "./chunk-LGS63R4F.js";
import {
  V,
  _ as _2
} from "./chunk-L6FG3WIC.js";
import {
  E,
  j
} from "./chunk-2TNGEJGS.js";
import {
  n as n3
} from "./chunk-BZHHBBFX.js";
import {
  n as n2
} from "./chunk-VSQZQLTQ.js";
import {
  z as z2
} from "./chunk-K43CZ3M5.js";
import {
  h
} from "./chunk-2OZSYJDX.js";
import {
  O,
  _,
  e,
  r,
  s,
  u,
  x,
  z
} from "./chunk-MZM4INJV.js";
import {
  n
} from "./chunk-J4GMQHGL.js";

// ../../../node_modules/@arcgis/core/chunks/Laserlines.glsl.js
var A = h(6);
function j2(e5) {
  const i = new o5();
  i.include(o4), i.include(n4, e5);
  const t = i.fragment;
  if (e5.lineVerticalPlaneEnabled || e5.heightManifoldEnabled) if (t.uniforms.add(new o2("maxPixelDistance", (i2, t2) => e5.heightManifoldEnabled ? 2 * t2.camera.computeScreenPixelSizeAt(i2.heightManifoldTarget) : 2 * t2.camera.computeScreenPixelSizeAt(i2.lineVerticalPlaneSegment.origin))), t.code.add(o`float planeDistancePixels(vec4 plane, vec3 pos) {
float dist = dot(plane.xyz, pos) + plane.w;
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}`), e5.spherical) {
    const e6 = (e7, i3, t2) => O(e7, i3.heightManifoldTarget, t2.camera.viewMatrix), i2 = (e7, i3) => O(e7, [0, 0, 0], i3.camera.viewMatrix);
    t.uniforms.add(new e4("heightManifoldOrigin", (t2, r2) => (e6(R, t2, r2), i2(F, r2), e(F, F, R), z(G, F), G[3] = s(F), G)), new e2("globalOrigin", (e7, t2) => i2(R, t2)), new o2("cosSphericalAngleThreshold", (e7, i3) => 1 - Math.max(2, x(i3.camera.eye, e7.heightManifoldTarget) * i3.camera.perRenderPixelRatio) / s(e7.heightManifoldTarget))), t.code.add(o`float globeDistancePixels(float posInGlobalOriginLength) {
float dist = abs(posInGlobalOriginLength - heightManifoldOrigin.w);
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}
float heightManifoldDistancePixels(vec4 heightPlane, vec3 pos) {
vec3 posInGlobalOriginNorm = normalize(globalOrigin - pos);
float cosAngle = dot(posInGlobalOriginNorm, heightManifoldOrigin.xyz);
vec3 posInGlobalOrigin = globalOrigin - pos;
float posInGlobalOriginLength = length(posInGlobalOrigin);
float sphericalDistance = globeDistancePixels(posInGlobalOriginLength);
float planarDistance = planeDistancePixels(heightPlane, pos);
return cosAngle < cosSphericalAngleThreshold ? sphericalDistance : planarDistance;
}`);
  } else t.code.add(o`float heightManifoldDistancePixels(vec4 heightPlane, vec3 pos) {
return planeDistancePixels(heightPlane, pos);
}`);
  if (e5.pointDistanceEnabled && (t.uniforms.add(new o2("maxPixelDistance", (e6, i2) => 2 * i2.camera.computeScreenPixelSizeAt(e6.pointDistanceTarget))), t.code.add(o`float sphereDistancePixels(vec4 sphere, vec3 pos) {
float dist = distance(sphere.xyz, pos) - sphere.w;
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}`)), e5.intersectsLineEnabled && (t.uniforms.add(new o2("perScreenPixelRatio", (e6, i2) => i2.camera.perScreenPixelRatio)), t.code.add(o`float lineDistancePixels(vec3 start, vec3 dir, float radius, vec3 pos) {
float dist = length(cross(dir, pos - start)) / (length(pos) * perScreenPixelRatio);
return abs(dist) - radius;
}`)), (e5.lineVerticalPlaneEnabled || e5.intersectsLineEnabled) && t.code.add(o`bool pointIsWithinLine(vec3 pos, vec3 start, vec3 end) {
vec3 dir = end - start;
float t2 = dot(dir, pos - start);
float l2 = dot(dir, dir);
return t2 >= 0.0 && t2 <= l2;
}`), t.code.add(o`void main() {
vec3 pos;
vec3 normal;
float angleCutoffAdjust;
float depthDiscontinuityAlpha;
if (!laserlineReconstructFromDepth(pos, normal, angleCutoffAdjust, depthDiscontinuityAlpha)) {
discard;
}
vec4 color = vec4(0, 0, 0, 0);`), e5.heightManifoldEnabled) {
    t.uniforms.add(new e3("angleCutoff", (e6) => V2(e6)), new e4("heightPlane", (e6, i3) => I(e6.heightManifoldTarget, e6.renderCoordsHelper.worldUpAtPosition(e6.heightManifoldTarget, R), i3.camera.viewMatrix)));
    const i2 = e5.spherical ? o`normalize(globalOrigin - pos)` : o`heightPlane.xyz`;
    t.code.add(o`
    {
      vec2 angleCutoffAdjusted = angleCutoff - angleCutoffAdjust;

      // Fade out laserlines on flat surfaces
      float heightManifoldAlpha = 1.0 - smoothstep(angleCutoffAdjusted.x, angleCutoffAdjusted.y, abs(dot(normal, ${i2})));

      vec4 heightManifoldColor = laserlineProfile(heightManifoldDistancePixels(heightPlane, pos));
      color = max(color, heightManifoldColor * heightManifoldAlpha);
    }
    `);
  }
  return e5.pointDistanceEnabled && (t.uniforms.add(new e3("angleCutoff", (e6) => V2(e6)), new e4("pointDistanceSphere", (e6, i2) => y(e6, i2))), t.code.add(o`{
float pointDistanceSphereDistance = sphereDistancePixels(pointDistanceSphere, pos);
vec4 pointDistanceSphereColor = laserlineProfile(pointDistanceSphereDistance);
float pointDistanceSphereAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, normalize(pos - pointDistanceSphere.xyz))));
color = max(color, pointDistanceSphereColor * pointDistanceSphereAlpha);
}`)), e5.lineVerticalPlaneEnabled && (t.uniforms.add(new e3("angleCutoff", (e6) => V2(e6)), new e4("lineVerticalPlane", (e6, i2) => O2(e6, i2)), new e2("lineVerticalStart", (e6, i2) => E2(e6, i2)), new e2("lineVerticalEnd", (e6, i2) => z3(e6, i2))), t.code.add(o`{
if (pointIsWithinLine(pos, lineVerticalStart, lineVerticalEnd)) {
float lineVerticalDistance = planeDistancePixels(lineVerticalPlane, pos);
vec4 lineVerticalColor = laserlineProfile(lineVerticalDistance);
float lineVerticalAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, lineVerticalPlane.xyz)));
color = max(color, lineVerticalColor * lineVerticalAlpha);
}
}`)), e5.intersectsLineEnabled && (t.uniforms.add(new e3("angleCutoff", (e6) => V2(e6)), new e2("intersectsLineStart", (e6, i2) => O(R, e6.lineStartWorld, i2.camera.viewMatrix)), new e2("intersectsLineEnd", (e6, i2) => O(R, e6.lineEndWorld, i2.camera.viewMatrix)), new e2("intersectsLineDirection", (e6, i2) => (r(G, e6.intersectsLineSegment.vector), G[3] = 0, z(R, z2(G, G, i2.camera.viewMatrix)))), new o2("intersectsLineRadius", (e6) => e6.intersectsLineRadius)), t.code.add(o`{
if (pointIsWithinLine(pos, intersectsLineStart, intersectsLineEnd)) {
float intersectsLineDistance = lineDistancePixels(intersectsLineStart, intersectsLineDirection, intersectsLineRadius, pos);
vec4 intersectsLineColor = laserlineProfile(intersectsLineDistance);
float intersectsLineAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, 1.0 - abs(dot(normal, intersectsLineDirection)));
color = max(color, intersectsLineColor * intersectsLineAlpha);
}
}`)), t.code.add(o`fragColor = laserlineOutput(color * depthDiscontinuityAlpha);
}`), i;
}
function V2(t) {
  return o3(T, Math.cos(t.angleCutoff), Math.cos(Math.max(0, t.angleCutoff - h(2))));
}
function y(e5, i) {
  return O(V(_3), e5.pointDistanceOrigin, i.camera.viewMatrix), _3[3] = x(e5.pointDistanceOrigin, e5.pointDistanceTarget), _3;
}
function O2(e5, i) {
  const t = l(e5.lineVerticalPlaneSegment, 0.5, R), n5 = e5.renderCoordsHelper.worldUpAtPosition(t, U), o6 = z(F, e5.lineVerticalPlaneSegment.vector), r2 = _(R, n5, o6);
  return z(r2, r2), I(e5.lineVerticalPlaneSegment.origin, r2, i.camera.viewMatrix);
}
function E2(e5, i) {
  const t = r(R, e5.lineVerticalPlaneSegment.origin);
  return e5.renderCoordsHelper.setAltitude(t, 0), O(t, t, i.camera.viewMatrix);
}
function z3(e5, i) {
  const t = u(R, e5.lineVerticalPlaneSegment.origin, e5.lineVerticalPlaneSegment.vector);
  return e5.renderCoordsHelper.setAltitude(t, 0), O(t, t, i.camera.viewMatrix);
}
function I(e5, i, t) {
  return O(W, e5, t), r(G, i), G[3] = 0, z2(G, G, t), j(W, G, H);
}
var T = n3();
var R = n();
var G = n2();
var U = n();
var F = n();
var W = n();
var H = E();
var _3 = _2();
var N = Object.freeze(Object.defineProperty({
  __proto__: null,
  build: j2,
  defaultAngleCutoff: A
}, Symbol.toStringTag, {
  value: "Module"
}));

export {
  A,
  j2 as j,
  N
};
//# sourceMappingURL=chunk-O3EWP5OO.js.map
