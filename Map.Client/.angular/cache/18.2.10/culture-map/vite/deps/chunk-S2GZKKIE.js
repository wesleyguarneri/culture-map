import {
  r as r2
} from "./chunk-TP2RTSHJ.js";
import {
  e as e3
} from "./chunk-PO7V7AQE.js";
import {
  e as e5,
  h,
  p as p2,
  t as t2,
  u
} from "./chunk-EKCE56CG.js";
import {
  x
} from "./chunk-WRHEXEG3.js";
import {
  a as a2
} from "./chunk-75N5YDQB.js";
import {
  d as d2
} from "./chunk-BG32AOSQ.js";
import {
  e as e6,
  e2 as e7,
  t
} from "./chunk-YCQXFVJL.js";
import {
  o as o7
} from "./chunk-ZAP7ZEWR.js";
import {
  a
} from "./chunk-ICUHXX2J.js";
import {
  o as o4
} from "./chunk-VIIVMRRO.js";
import {
  a as a3
} from "./chunk-ZKSEQXDM.js";
import {
  e as e8
} from "./chunk-675UQNXB.js";
import {
  o as o6
} from "./chunk-DXGCBLDW.js";
import {
  i,
  n
} from "./chunk-Z3FHX4FD.js";
import {
  o as o5
} from "./chunk-SUUOAZQT.js";
import {
  P
} from "./chunk-OZG2NNUW.js";
import {
  d,
  f,
  p
} from "./chunk-KTRZHJ2M.js";
import {
  e as e4
} from "./chunk-X2OAE75B.js";
import {
  o as o8
} from "./chunk-SIZK72CP.js";
import {
  o as o2
} from "./chunk-WJKYGQOY.js";
import {
  e as e2
} from "./chunk-PPMDUJ4E.js";
import {
  o as o3
} from "./chunk-R5ZE5A4K.js";
import {
  o
} from "./chunk-SZWWBMQN.js";
import {
  e
} from "./chunk-4MMTPKY4.js";
import {
  r
} from "./chunk-DY7FJHTG.js";

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/PathVertexPosition.glsl.js
var p3 = 8;
function f2(e9, c) {
  const f3 = e.FEATUREVALUE;
  e9.attributes.add(f3, "vec4");
  const n3 = e9.vertex;
  n3.code.add(o`
  bool isCapVertex() {
    return ${f3}.w == 1.0;
  }
  `), n3.uniforms.add(new e4("size", (e10) => e10.size)), c.vvSize ? (n3.uniforms.add(new e2("vvSizeMinSize", (e10) => e10.vvSize.minSize), new e2("vvSizeMaxSize", (e10) => e10.vvSize.maxSize), new e2("vvSizeOffset", (e10) => e10.vvSize.offset), new e2("vvSizeFactor", (e10) => e10.vvSize.factor)), n3.code.add(o`
    vec2 getSize() {
      return size * clamp(vvSizeOffset + ${f3}.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize).xz;
    }
    `)) : n3.code.add(o`vec2 getSize(){
return size;
}`), c.vvOpacity ? (n3.constants.add("vvOpacityNumber", "int", p3), n3.uniforms.add(new o7("vvOpacityValues", (e10) => e10.vvOpacity.values, p3), new o7("vvOpacityOpacities", (e10) => e10.vvOpacity.opacityValues, p3)), n3.code.add(o`
    vec4 applyOpacity(vec4 color) {
      float value = ${f3}.z;
      if (value <= vvOpacityValues[0]) {
        return vec4( color.xyz, vvOpacityOpacities[0]);
      }

      for (int i = 1; i < vvOpacityNumber; ++i) {
        if (vvOpacityValues[i] >= value) {
          float f = (value - vvOpacityValues[i-1]) / (vvOpacityValues[i] - vvOpacityValues[i-1]);
          return vec4( color.xyz, mix(vvOpacityOpacities[i-1], vvOpacityOpacities[i], f));
        }
      }

      return vec4( color.xyz, vvOpacityOpacities[vvOpacityNumber - 1]);
    }
    `)) : n3.code.add(o`vec4 applyOpacity(vec4 color){
return color;
}`), c.vvColor ? (n3.constants.add("vvColorNumber", "int", e7), n3.uniforms.add(new o7("vvColorValues", (e10) => e10.vvColor.values, e7), new e6("vvColorColors", (e10) => e10.vvColor.colors, e7)), n3.code.add(o`
    vec4 getColor() {
      float value = ${f3}.y;
      if (value <= vvColorValues[0]) {
        return applyOpacity(vvColorColors[0]);
      }

      for (int i = 1; i < vvColorNumber; ++i) {
        if (vvColorValues[i] >= value) {
          float f = (value - vvColorValues[i-1]) / (vvColorValues[i] - vvColorValues[i-1]);
          return applyOpacity(mix(vvColorColors[i-1], vvColorColors[i], f));
        }
      }

      return applyOpacity(vvColorColors[vvColorNumber - 1]);
    }
    `)) : n3.code.add(o`vec4 getColor(){
return applyOpacity(vec4(1, 1, 1, 1));
}`), e9.include(o5), e9.attributes.add(e.PROFILERIGHT, "vec4"), e9.attributes.add(e.PROFILEUP, "vec4"), e9.attributes.add(e.PROFILEVERTEXANDNORMAL, "vec4"), n3.code.add(o`vec3 calculateVPos() {
vec2 size = getSize();
vec3 origin = position;
vec3 right = profileRight.xyz;
vec3 up = profileUp.xyz;
vec3 forward = cross(up, right);
vec2 profileVertex = profileVertexAndNormal.xy * size;
vec2 profileNormal = profileVertexAndNormal.zw;
float positionOffsetAlongProfilePlaneNormal = 0.0;
float normalOffsetAlongProfilePlaneNormal = 0.0;`), n3.code.add(o`if(!isCapVertex()) {
vec2 rotationRight = vec2(profileRight.w, profileUp.w);
float maxDistance = length(rotationRight);`), n3.code.add(o`rotationRight = maxDistance > 0.0 ? normalize(rotationRight) : vec2(0, 0);
float rx = dot(profileVertex, rotationRight);
if (abs(rx) > maxDistance) {
vec2 rotationUp = vec2(-rotationRight.y, rotationRight.x);
float ry = dot(profileVertex, rotationUp);
profileVertex = rotationRight * maxDistance * sign(rx) + rotationUp * ry;
}
}else{
positionOffsetAlongProfilePlaneNormal = profileRight.w * size[0];
normalOffsetAlongProfilePlaneNormal = profileUp.w;
}
vec3 offset = right * profileVertex.x + up * profileVertex.y + forward * positionOffsetAlongProfilePlaneNormal;
return origin + offset;
}`), n3.code.add(o`vec3 localNormal() {
vec3 right = profileRight.xyz;
vec3 up = profileUp.xyz;
vec3 forward = cross(up, right);
vec2 profileNormal = profileVertexAndNormal.zw;
vec3 normal = right * profileNormal.x + up * profileNormal.y;
if(isCapVertex()) {
normal += forward * profileUp.w;
}
return normal;
}`);
}
var n2 = class extends t {
  constructor() {
    super(...arguments), this.size = r(1, 1);
  }
};

// ../../../node_modules/@arcgis/core/chunks/Path.glsl.js
function O(O2) {
  const D2 = new o8(), {
    vertex: _,
    fragment: F
  } = D2;
  switch (d(_, O2), D2.varyings.add("vpos", "vec3"), D2.include(f2, O2), O2.output !== o2.Color && O2.output !== o2.ObjectAndLayerIdColor || (D2.include(o6, O2), D2.include(x, O2), D2.include(n, O2), D2.include(d2, O2), D2.varyings.add("vnormal", "vec3"), D2.varyings.add("vcolor", "vec4"), O2.multipassEnabled && D2.varyings.add("depth", "float"), _.code.add(o`
      void main() {
        vpos = calculateVPos();
        vnormal = normalize(localNormal());

        ${O2.multipassEnabled ? "depth = (view * vec4(vpos, 1.0)).z;" : ""}
        gl_Position = transformPosition(proj, view, vpos);

        ${O2.output === o2.Color ? "forwardLinearDepth();" : ""}
        forwardObjectAndLayerIdColor();

        vcolor = getColor();
      }
    `)), D2.include(a3, O2), O2.output) {
    case o2.Color:
      D2.include(P, O2), D2.include(p2, O2), D2.include(t2, O2), D2.include(x, O2), D2.include(e3, O2), f(F, O2), u(F), h(F), F.uniforms.add(_.uniforms.get("localOrigin"), new e2("ambient", (e9) => e9.ambient), new e2("diffuse", (e9) => e9.diffuse), new e2("specular", (e9) => e9.specular), new o3("opacity", (e9) => e9.opacity)), F.include(e8), O2.transparencyPassType === o4.ColorAlpha && (D2.outputs.add("fragColor", "vec4", 0), D2.outputs.add("fragAlpha", "float", 1)), a2(F), F.code.add(o`
        void main() {
          discardBySlice(vpos);
          ${O2.multipassEnabled ? "terrainDepthTest(depth);" : ""}

          shadingParams.viewDirection = normalize(vpos - cameraPosition);
          shadingParams.normalView = vnormal;
          vec3 normal = shadingNormal(shadingParams);
          float ssao = evaluateAmbientOcclusionInverse();

          float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
          vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
          ${O2.receiveShadows ? "float shadow = readShadowMap(vpos, linearDepth);" : O2.spherical ? "float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);" : "float shadow = 0.0;"}
          vec3 albedo = vcolor.rgb * max(ambient, diffuse); // combine the old material parameters into a single one
          float combinedOpacity = vcolor.a * opacity;
          albedo += 0.25 * specular; // don't completely ignore specular for now

          vec3 shadedColor = evaluateSceneLighting(normal, albedo, shadow, 1.0 - ssao, additionalLight);
          fragColor = vec4(shadedColor, combinedOpacity);
          fragColor = highlightSlice(fragColor, vpos);
          ${O2.transparencyPassType === o4.ColorAlpha ? o`
                  fragColor = premultiplyAlpha(fragColor);
                  fragAlpha = fragColor.a;` : ""}
        }
      `);
      break;
    case o2.Depth:
      D2.include(o6, O2), _.code.add(o`void main() {
vpos = calculateVPos();
gl_Position = transformPosition(proj, view, vpos);
}`), D2.include(P, O2), F.code.add(o`void main() {
discardBySlice(vpos);
}`);
      break;
    case o2.Shadow:
    case o2.ShadowHighlight:
    case o2.ShadowExcludeHighlight:
    case o2.ViewshedShadow:
      D2.include(o6, O2), i(D2), D2.varyings.add("depth", "float"), _.code.add(o`void main() {
vpos = calculateVPos();
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
}`), D2.include(P, O2), D2.include(e5, O2), F.code.add(o`void main() {
discardBySlice(vpos);
outputDepth(depth);
}`);
      break;
    case o2.ObjectAndLayerIdColor:
      D2.include(P, O2), F.code.add(o`void main() {
discardBySlice(vpos);
outputObjectAndLayerIdColor();
}`);
      break;
    case o2.Normal:
      D2.include(o6, O2), D2.include(r2, O2), p(_), D2.varyings.add("vnormal", "vec3"), _.code.add(o`void main(void) {
vpos = calculateVPos();
vnormal = normalize((viewNormal * vec4(localNormal(), 1.0)).xyz);
gl_Position = transformPosition(proj, view, vpos);
}`), D2.include(P, O2), F.code.add(o`void main() {
discardBySlice(vpos);
vec3 normal = normalize(vnormal);
if (gl_FrontFacing == false) normal = -normal;
fragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
}`);
      break;
    case o2.Highlight:
      D2.include(o6, O2), D2.include(r2, O2), D2.varyings.add("vnormal", "vec3"), _.code.add(o`void main(void) {
vpos = calculateVPos();
gl_Position = transformPosition(proj, view, vpos);
}`), D2.include(P, O2), D2.include(a, O2), F.code.add(o`void main() {
discardBySlice(vpos);
outputHighlight();
}`);
  }
  return D2;
}
var D = Object.freeze(Object.defineProperty({
  __proto__: null,
  build: O
}, Symbol.toStringTag, {
  value: "Module"
}));

export {
  n2 as n,
  O,
  D
};
//# sourceMappingURL=chunk-S2GZKKIE.js.map
