import {
  r as r2,
  t
} from "./chunk-FHW2TG7X.js";
import {
  o as o4
} from "./chunk-SIZK72CP.js";
import {
  e as e4
} from "./chunk-GAYJ4YPJ.js";
import {
  e as e3
} from "./chunk-PPMDUJ4E.js";
import {
  o as o3
} from "./chunk-R5ZE5A4K.js";
import {
  o as o2
} from "./chunk-SZWWBMQN.js";
import {
  e as e2
} from "./chunk-4MMTPKY4.js";
import {
  A,
  K,
  M,
  P,
  g,
  o,
  z
} from "./chunk-AXVPJBVW.js";
import {
  n,
  r
} from "./chunk-OXEPWRM7.js";
import {
  e
} from "./chunk-4Z5SGKRM.js";

// ../../../node_modules/@arcgis/core/views/3d/environment/PrecipitationTechniqueConfiguration.js
var t2;
!function(e5) {
  e5[e5.Rain = 0] = "Rain", e5[e5.Snow = 1] = "Snow", e5[e5.COUNT = 2] = "COUNT";
}(t2 || (t2 = {}));
var i = class extends t {
  constructor() {
    super(...arguments), this.type = t2.Rain;
  }
};
e([r2({
  count: t2.COUNT
})], i.prototype, "type", void 0);

// ../../../node_modules/@arcgis/core/chunks/Precipitation.glsl.js
function h(e5) {
  const t3 = new o4();
  return t3.attributes.add(e2.POSITION, "vec3"), t3.attributes.add(e2.INSTANCEFEATUREATTRIBUTE, "float"), t3.vertex.uniforms.add(new e3("cameraPosition", (e6, t4) => t4.camera.eye)), t3.vertex.uniforms.add(new e3("offset", (e6, t4) => g2(e6, t4))), t3.vertex.uniforms.add(new o3("width", (e6) => e6.width)), t3.vertex.uniforms.add(new e4("proj", (e6, t4) => t4.camera.projectionMatrix)), t3.vertex.uniforms.add(new e4("view", (e6, t4) => t4.camera.viewMatrix)), t3.vertex.uniforms.add(new o3("time", (e6) => e6.time)), t3.varyings.add("vUv", "vec2"), t3.vertex.code.add(o2`
    vec3 hash31(float p){
      vec3 p3 = fract(vec3(p) * vec3(0.1031, 0.1030, 0.0973));
      p3 += dot(p3, p3.yzx + 33.33);
      return fract((p3.xxy + p3.yzz) * p3.zyx);
    }

    float hash11(float p){
      p = fract(p * 0.1031);
      p *= p + 33.33;
      p *= p + p;
      return fract(p);
    }

    //https://www.geeks3d.com/20141201/how-to-rotate-a-vertex-by-a-quaternion-in-glsl/
    vec3 rotateVectorByQuaternion(vec3 v, vec4 q){
      return 2.0 * cross(q.xyz, v * q.w + cross(q.xyz, v)) + v;
    }

    void main(void) {

      vUv = position.xz;

      vec3 rand = hash31(instanceFeatureAttribute);

      // Set random position for all particles
      // The hash function space is not high resolution so offset particles by an additional random value
      // This creates grids of 1000 particles which are shifted by random hundreths of the tile width
      // overlaying multiple identical but offset grids
      vec3 randomPosition = 2.0 * (rand + (0.01 + 0.01 * rand) * floor(0.001 * instanceFeatureAttribute)) - 1.0;

      // Random orientation of rain drops
      float angle = 3.1415 * hash11(instanceFeatureAttribute);

      vec3 up = vec3(0, 0, 1);

      // Gravity and wind direction
      vec3 direction = normalize(cameraPosition);

      vec3 tangent = normalize(cross(direction, up));

      // Gravity
      vec3 animatedPos = randomPosition + direction * -time;

      // Rain particles fall straight down and are randomly oriented
      // Snow particles have random sinusoid trajectories and are rotated to face the camera
      ${e5.type === t2.Rain ? o2`
            // Random rotation for particle
            vec3 rotationAxis = up;
            vec4 quat = vec4(rotationAxis * sin(angle), cos(angle));
            vec3 transformedPos = rotateVectorByQuaternion(vec3(0.2, 0.2, 4.0) * (position - vec3(0.5, 0.0, 0.5)), quat);

            // Rotate particle to planetary position
            rotationAxis = tangent;
            angle = 0.5 * -acos(dot(direction, up));
            quat = vec4(rotationAxis * sin(angle), cos(angle));
            transformedPos = rotateVectorByQuaternion(transformedPos, quat);

            vec4 pos = mat4(mat3(view)) * vec4(transformedPos + (mod(width * animatedPos - offset, width) - 0.5 * width), 1.0);
            gl_Position = proj * pos;
      ` : o2`
            vec3 rotationAxis = direction;
            vec4 quat = vec4(rotationAxis * sin(angle), cos(angle));

            tangent = rotateVectorByQuaternion(tangent, quat);
            // Random sinusoid from friction
            animatedPos += tangent * 0.25 * sin(dot(animatedPos, direction));
            vec4 pos = mat4(mat3(view)) * vec4((mod(width * animatedPos - offset, width) - 0.5 * width), 1.0);
            gl_Position = proj * (0.5 * vec4(position.xzy, 0.0) + pos);
      `}
    }
  `), t3.fragment.uniforms.add(new o3("opacity", (e6) => e6.opacity), new e3("particleColor", (t4, o5) => w(o5, e5))), t3.fragment.code.add(o2`
    void main() {

      // Cut off corners of the triangle
      if(vUv.x < 0.0 || vUv.y < 0.0){
        discard;
      }

      float d = length(vUv - vec2(0.5));

      ${e5.type === t2.Rain ? o2`d = 0.35 * smoothstep(0.5, 0.0, d);` : o2`d = smoothstep(0.5, 0.1, d);`}
      fragColor = opacity * vec4(particleColor * d, d);
    }
  `), t3;
}
function g2(a, r3) {
  const n2 = r3.camera.eye, s = 0.5 * a.width, d = 1 / a.width, c = M(y, o(y, (n2[0] + s) * d, (n2[1] + s) * d, (n2[2] + s) * d));
  return K(c, n2, g(c, c, a.width));
}
function w(e5, t3) {
  const o5 = t3.type === t2.Rain ? P2 : b, s = g(y, o5, j), d = e5.camera.eye;
  z(x, d);
  const m = Math.max(0, P(x, e5.lighting.mainLight.direction));
  return A(s, s, o5, m);
}
var y = n();
var x = n();
var b = r(1, 1, 1);
var P2 = r(0.85, 0.85, 0.85);
var j = 0.7;
var A2 = Object.freeze(Object.defineProperty({
  __proto__: null,
  build: h
}, Symbol.toStringTag, {
  value: "Module"
}));

export {
  t2 as t,
  i,
  h,
  A2 as A
};
//# sourceMappingURL=chunk-Z2YTTAW2.js.map
