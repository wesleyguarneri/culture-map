import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  n as n2
} from "./chunk-4Y6TKPBN.js";
import {
  e as e4
} from "./chunk-3NWWTJOW.js";
import {
  o as o4
} from "./chunk-ZHVMMFTW.js";
import {
  o as o3
} from "./chunk-B76NC7GX.js";
import {
  e as e3
} from "./chunk-XK3CKE5Q.js";
import {
  o as o2
} from "./chunk-Q5JLNMWZ.js";
import {
  o
} from "./chunk-LGS63R4F.js";
import {
  e as e2
} from "./chunk-D7C26LZP.js";
import {
  n
} from "./chunk-BZHHBBFX.js";
import {
  e
} from "./chunk-YGAXDKHF.js";
import {
  i
} from "./chunk-KOI252FF.js";

// ../../../node_modules/@arcgis/core/chunks/LaserlinePath.glsl.js
function v(i2) {
  const t = new o4();
  t.include(n2, i2);
  const {
    vertex: v2,
    fragment: w2
  } = t;
  return v2.uniforms.add(new e3("modelView", (i3, {
    camera: o5
  }) => i(p, o5.viewMatrix, i3.origin)), new e3("proj", (e5, {
    camera: i3
  }) => i3.projectionMatrix), new o2("glowWidth", (e5, {
    camera: i3
  }) => e5.glowWidth * i3.pixelRatio), new e4("pixelToNDC", (e5, {
    camera: i3
  }) => o3(m, 2 / i3.fullViewport[2], 2 / i3.fullViewport[3]))), t.attributes.add(e2.START, "vec3"), t.attributes.add(e2.END, "vec3"), t.attributes.add(e2.UP, "vec3"), t.attributes.add(e2.EXTRUDE, "vec2"), t.varyings.add("uv", "vec2"), t.varyings.add("vViewStart", "vec3"), t.varyings.add("vViewEnd", "vec3"), t.varyings.add("vViewPlane", "vec4"), v2.code.add(o`void main() {
vec3 pos = mix(start, end, extrude.x);
vec4 viewPos = modelView * vec4(pos, 1);
vec4 projPos = proj * viewPos;
vec2 ndcPos = projPos.xy / projPos.w;
vec3 viewUp = (modelView * vec4(extrude.y * up, 0)).xyz;
vec4 projPosUp = proj * vec4(viewPos.xyz + viewUp, 1);
vec2 projExtrudeDir = normalize(projPosUp.xy / projPosUp.w - ndcPos);
vec2 lxy = abs(sign(projExtrudeDir) - ndcPos);
ndcPos += length(lxy) * projExtrudeDir;
vec3 worldPlaneNormal = normalize(cross(up, normalize(end - start)));
vec3 viewPlaneNormal = (modelView * vec4(worldPlaneNormal, 0)).xyz;
vViewStart = (modelView * vec4(start, 1)).xyz;
vViewEnd = (modelView * vec4(end, 1)).xyz;
vViewPlane = vec4(viewPlaneNormal, -dot(viewPlaneNormal, vViewStart));
float xPaddingPixels = sign(dot(viewPlaneNormal, viewPos.xyz)) * (extrude.x * 2.0 - 1.0) * glowWidth;
ndcPos.x += xPaddingPixels * pixelToNDC.x;
uv = ndcPos * 0.5 + 0.5;
gl_Position = vec4(ndcPos, 0, 1);
}`), w2.uniforms.add(new o2("perScreenPixelRatio", (e5, i3) => i3.camera.perScreenPixelRatio)), w2.code.add(o`float planeDistancePixels(vec4 plane, vec3 pos, vec3 start, vec3 end) {
vec3 origin = mix(start, end, 0.5);
vec3 basis = end - origin;
vec3 posAtOrigin = pos - origin;
float x = dot(normalize(basis), posAtOrigin);
float y = dot(plane.xyz, posAtOrigin);
float dx = max(abs(x) - length(basis), 0.0);
float dy = y;
float dist = length(vec2(dx, dy));
float width = fwidth(y);
float maxPixelDistance = length(pos) * perScreenPixelRatio * 2.0;
float pixelDist = dist / min(width, maxPixelDistance);
return abs(pixelDist);
}
void main() {
vec3 dEndStart = vViewEnd - vViewStart;
if (dot(dEndStart, dEndStart) < 1e-5) {
discard;
}
vec3 pos;
vec3 normal;
float angleCutoffAdjust;
float depthDiscontinuityAlpha;
if (!laserlineReconstructFromDepth(pos, normal, angleCutoffAdjust, depthDiscontinuityAlpha)) {
discard;
}
float distance = planeDistancePixels(vViewPlane, pos, vViewStart, vViewEnd);
vec4 color = laserlineProfile(distance);
float alpha = (1.0 - smoothstep(0.995 - angleCutoffAdjust, 0.999 - angleCutoffAdjust, abs(dot(normal, vViewPlane.xyz))));
fragColor = laserlineOutput(color * alpha * depthDiscontinuityAlpha);
}`), t;
}
var m = n();
var p = e();
var w = Object.freeze(Object.defineProperty({
  __proto__: null,
  build: v
}, Symbol.toStringTag, {
  value: "Module"
}));

export {
  v,
  w
};
//# sourceMappingURL=chunk-7ZLUUE5X.js.map
