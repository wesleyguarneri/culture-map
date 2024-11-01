import {
  t as t2
} from "./chunk-J7KF6IEI.js";
import {
  t
} from "./chunk-75N5YDQB.js";
import {
  r
} from "./chunk-FHW2TG7X.js";
import {
  o as o3
} from "./chunk-DXGCBLDW.js";
import {
  e as e5
} from "./chunk-X2OAE75B.js";
import {
  s
} from "./chunk-UCPBGEQD.js";
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
  o as o2
} from "./chunk-R5ZE5A4K.js";
import {
  n as n3,
  o
} from "./chunk-SZWWBMQN.js";
import {
  e as e2
} from "./chunk-4MMTPKY4.js";
import {
  n as n2
} from "./chunk-DY7FJHTG.js";
import {
  n
} from "./chunk-OXEPWRM7.js";
import {
  e
} from "./chunk-4Z5SGKRM.js";

// ../../../node_modules/@arcgis/core/views/3d/environment/SimpleAtmosphereTechniqueConfiguration.js
var r2;
!function(e6) {
  e6[e6.Cone = 0] = "Cone", e6[e6.Cylinder = 1] = "Cylinder", e6[e6.Underground = 2] = "Underground", e6[e6.COUNT = 3] = "COUNT";
}(r2 || (r2 = {}));
var i = class extends t2 {
  constructor() {
    super(...arguments), this.geometry = r2.Cone;
  }
};
e([r({
  count: r2.COUNT
})], i.prototype, "geometry", void 0);

// ../../../node_modules/@arcgis/core/chunks/SimpleAtmosphere.glsl.js
var p = class extends n3 {
  constructor() {
    super(...arguments), this.texV = n2(), this.altitudeFade = 0, this.innerScale = 0, this.undergroundFadeAlpha = 0, this.silhouette = new u();
  }
};
var u = class {
  constructor() {
    this.center = n(), this.v1 = n(), this.v2 = n();
  }
};
function v(e6) {
  const o5 = new o4(), {
    vertex: l,
    fragment: p2
  } = o5;
  if (t(l), e6.geometry === r2.Underground) o5.attributes.add(e2.POSITION, "vec2"), o5.varyings.add("color", "vec4"), l.uniforms.add(new e3("cameraPosition", (e7, o6) => o6.camera.eye), new o2("undergroundFadeAlpha", (e7) => e7.undergroundFadeAlpha)), l.code.add(o`void main(void) {
float ndotl = dot(normalize(cameraPosition), mainLightDirection);
float lighting = max(0.0, smoothstep(-1.0, 0.8, 2.0 * ndotl));
color = vec4(vec3(lighting), undergroundFadeAlpha);
gl_Position = vec4(position.xy, 1.0, 1.0);
}`), p2.code.add(o`void main() {
fragColor = color;
}`);
  else {
    o5.include(o3, e6), o5.attributes.add(e2.POSITION, "vec3"), o5.varyings.add("vtc", "vec2"), o5.varyings.add("falloff", "float");
    const t3 = e6.geometry === r2.Cylinder;
    l.uniforms.add(new e4("proj", (e7, o6) => o6.camera.projectionMatrix), new e4("view", (e7, o6) => o6.camera.viewMatrix)), t3 || (o5.varyings.add("innerFactor", "float"), l.uniforms.add(new e3("silCircleCenter", (e7) => e7.silhouette.center)), l.uniforms.add(new e3("silCircleV1", (e7) => e7.silhouette.v1)), l.uniforms.add(new e3("silCircleV2", (e7) => e7.silhouette.v2)), l.uniforms.add(new e5("texV", (e7) => e7.texV)), l.uniforms.add(new o2("innerScale", (e7) => e7.innerScale)));
    const m = 6.2831853, u2 = 1 / 128;
    l.code.add(o`
		void main(void) {
      ${t3 ? o`
      vec3 pos = position;
      float ndotl = mainLightDirection.z;
      vtc = vec2(0.0, position.z + 0.05);` : o`
      innerFactor = clamp(-position.z, 0.0, 1.0);
      float scale = position.y * (1.0 + innerFactor * innerScale);
      float phi = position.x * ${o.float(m * u2)} + 1.0;
      vec3 pos =  (silCircleCenter + sin(phi) * silCircleV1 + cos(phi) * silCircleV2) * scale;
      float ndotl = dot(normalize(position.y > 0.0 ? pos: silCircleCenter), mainLightDirection);
      vtc.x = position.x  * ${o.float(u2)};
      vtc.y = texV.x * (1.0 - position.z) + texV.y * position.z;
      `}
      falloff = max(0.0, smoothstep(-1.0, 0.8, 2.0 * ndotl));

		  gl_Position = transformPosition(proj, view, pos);
		  gl_Position.z = gl_Position.w; // project atmosphere onto the far plane
    }
	  `), p2.uniforms.add(new s("tex", (e7) => e7.texture)), t3 || p2.uniforms.add(new o2("altitudeFade", (e7) => e7.altitudeFade)), p2.code.add(o`
		void main() {
			vec4 atmosphereColor = texture(tex, vtc) * falloff;
      ${t3 ? o`fragColor = atmosphereColor;` : o`
			vec4 innerColor = vec4(atmosphereColor.rgb, 1.0 - altitudeFade);
			fragColor = mix(atmosphereColor, innerColor, smoothstep(0.0, 1.0, innerFactor));
      `}
    }`);
  }
  return o5;
}
var h = Object.freeze(Object.defineProperty({
  __proto__: null,
  SilhouetteCircle: u,
  SimpleAtmospherePassParameters: p,
  build: v
}, Symbol.toStringTag, {
  value: "Module"
}));

export {
  r2 as r,
  i,
  p,
  u,
  v,
  h
};
//# sourceMappingURL=chunk-CMQ4UJKJ.js.map
