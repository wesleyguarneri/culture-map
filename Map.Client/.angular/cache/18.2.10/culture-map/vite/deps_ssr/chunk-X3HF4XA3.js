import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  f as f2
} from "./chunk-KRRPY5PU.js";
import {
  E
} from "./chunk-OEBP4L4N.js";
import {
  f
} from "./chunk-2IRGMYX2.js";
import {
  c
} from "./chunk-Z4PRO5ND.js";
import {
  a as a2,
  t
} from "./chunk-2ZXVDYHF.js";
import {
  s as s2
} from "./chunk-TRF6JO5N.js";
import {
  o as o3
} from "./chunk-RIZOHDTP.js";
import {
  o as o2
} from "./chunk-HITI6WDM.js";
import {
  o as o4
} from "./chunk-Q5JLNMWZ.js";
import {
  a
} from "./chunk-AABDXAD3.js";
import {
  o
} from "./chunk-LGS63R4F.js";
import {
  n as n2
} from "./chunk-VSQZQLTQ.js";
import {
  M,
  s,
  y
} from "./chunk-GCVQXAS4.js";
import {
  n
} from "./chunk-J4GMQHGL.js";

// ../../../node_modules/@arcgis/core/views/3d/terrain/OverlayContent.js
var o5;
!function(o7) {
  o7[o7.Color = 0] = "Color", o7[o7.ColorNoRasterImage = 1] = "ColorNoRasterImage", o7[o7.Highlight = 2] = "Highlight", o7[o7.WaterNormal = 3] = "WaterNormal", o7[o7.Occluded = 4] = "Occluded", o7[o7.ObjectAndLayerIdColor = 5] = "ObjectAndLayerIdColor";
}(o5 || (o5 = {}));

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/core/renderPasses/AllRenderPasses.js
var e = class extends f {
  constructor() {
    super(...arguments), this.slicePlaneLocalOrigin = n(), this.origin = this.slicePlaneLocalOrigin, this.modelTransformation = null;
  }
};
var o6;
!function(s3) {
  s3[s3.Material = 0] = "Material", s3[s3.ShadowMap = 1] = "ShadowMap", s3[s3.Highlight = 2] = "Highlight", s3[s3.ViewshedShadowMap = 3] = "ViewshedShadowMap";
}(o6 || (o6 = {}));
var h = class extends e {
  constructor() {
    super(...arguments), this.identifier = o6.Material, this.output = o2.Color, this.transparent = false;
  }
};
var l = class extends e {
  constructor() {
    super(...arguments), this.identifier = o6.ShadowMap;
  }
};
var n3 = class extends e {
  constructor() {
    super(...arguments), this.identifier = o6.Highlight;
  }
};
var c2 = class extends e {
  constructor() {
    super(...arguments), this.identifier = o6.ViewshedShadowMap;
  }
};

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/terrain/Overlay.glsl.js
var f3;
function C(e2, o7) {
  const {
    vertex: r,
    fragment: t2
  } = e2;
  r.uniforms.add(new o3("overlayTexOffset", (e3, o8) => b(e3, o8)), new o3("overlayTexScale", (e3, o8) => M2(e3, o8))), t2.constants.add("overlayOpacity", "float", 1), t2.uniforms.add(new s2("ovColorTex", (e3, o8) => O(e3, o8))), T(e2, o7);
}
function g(e2, o7) {
  const {
    vertex: r,
    fragment: t2
  } = e2;
  r.uniforms.add(new h2("overlayTexOffset"), new h2("overlayTexScale")), t2.uniforms.add(new o4("overlayOpacity", (e3) => e3.overlayOpacity), new s2("ovColorTex", (e3, o8) => o8.overlay?.getTexture(e3.overlayContent))), T(e2, o7);
}
!function(e2) {
  e2[e2.Disabled = 0] = "Disabled", e2[e2.Enabled = 1] = "Enabled", e2[e2.EnabledWithWater = 2] = "EnabledWithWater", e2[e2.COUNT = 3] = "COUNT";
}(f3 || (f3 = {}));
var h2 = class extends a {
  constructor(e2) {
    super(e2, "vec4");
  }
};
function T(e2, o7) {
  o7.pbrMode !== c.Water && o7.pbrMode !== c.WaterOnIntegratedMesh && o7.pbrMode !== c.TerrainWithWater || e2.include(f2, o7);
  const {
    vertex: r,
    fragment: t2
  } = e2;
  e2.varyings.add("vtcOverlay", "vec4"), r.code.add(o`void setOverlayVTC(in vec2 uv) {
vtcOverlay = vec4(uv, uv) * overlayTexScale + overlayTexOffset;
}`), t2.code.add(o`bool isValid(vec2 uv, vec2 dxdy) {
return (uv.x >= 0.0 + dxdy.x) && (uv.x <= 1.0 - dxdy.x) && (uv.y >= 0.0 + dxdy.y) && (uv.y <= 1.0 - dxdy.y);
}
vec4 getOverlayColor(sampler2D ov0Tex, vec4 texCoords) {
vec4 color0 = texture(ov0Tex, vec2(texCoords.x * 0.5, texCoords.y));
vec4 color1 = texture(ov0Tex, vec2(texCoords.z * 0.5 + 0.5, texCoords.w));
bool isValid0 = isValid(texCoords.xy, fwidth(texCoords.xy));
bool isValid1 = isValid(texCoords.zw, vec2(0.0, 0.0));
return mix(color1 * float(isValid1), color0, float(isValid0));
}`), t2.code.add(o`vec4 getCombinedOverlayColor() {
return overlayOpacity * getOverlayColor(ovColorTex, vtcOverlay);
}`), t2.code.add(o`vec4 getOverlayColorTexel(vec4 texCoords) {
vec2 texDim =  vec2(textureSize(ovColorTex, 0));
vec4 color0 = texelFetch(ovColorTex, ivec2(vec2(texCoords.x * 0.5, texCoords.y) * texDim), 0);
vec4 color1 = texelFetch(ovColorTex, ivec2(vec2(texCoords.z * 0.5 + 0.5, texCoords.w) * texDim), 0);
bool isValid0 = isValid(texCoords.xy, fwidth(texCoords.xy));
bool isValid1 = isValid(texCoords.zw, vec2(0.0, 0.0));
return mix(color1 * float(isValid1), color0, float(isValid0));
}`), o7.pbrMode !== c.Water && o7.pbrMode !== c.WaterOnIntegratedMesh && o7.pbrMode !== c.TerrainWithWater || (t(t2), a2(t2), t2.code.add(o`vec4 getOverlayWaterColor(vec4 maskInput, vec4 colorInput, vec3 vposEyeDir,
float shadow, vec3 localUp, mat3 tbn, vec3 position, vec3 positionWorld) {
vec3 n = normalize(tbn *  (2.0 * maskInput.rgb - vec3(1.0)));
vec3 v = vposEyeDir;
vec3 final = getSeaColor(n, v, mainLightDirection, colorInput.rgb, mainLightIntensity, localUp, 1.0 - shadow, maskInput.w, position, positionWorld);
return vec4(final, colorInput.w);
}`));
}
function O(e2, o7) {
  return e2.identifier === o6.Material && e2.output === o2.Color ? o7.overlay?.getTexture(o5.ColorNoRasterImage) : e2.identifier === o6.Material && e2.output === o2.ObjectAndLayerIdColor ? o7.overlay?.getTexture(o5.ObjectAndLayerIdColor) : e2.identifier === o6.Highlight ? o7.overlay?.getTexture(o5.Highlight) : null;
}
function b(e2, i) {
  const l2 = i.overlay?.overlays[E.INNER]?.extent;
  y(l2) && (w[0] = e2.toMapSpace[0] / M(l2) - l2[0] / M(l2), w[1] = e2.toMapSpace[1] / s(l2) - l2[1] / s(l2));
  const s3 = i.overlay?.overlays[E.OUTER]?.extent;
  return y(s3) && (w[2] = e2.toMapSpace[0] / M(s3) - s3[0] / M(s3), w[3] = e2.toMapSpace[1] / s(s3) - s3[1] / s(s3)), w;
}
function M2(e2, i) {
  const l2 = i.overlay?.overlays[E.INNER]?.extent;
  y(l2) && (w[0] = e2.toMapSpace[2] / M(l2), w[1] = e2.toMapSpace[3] / s(l2));
  const s3 = i.overlay?.overlays[E.OUTER]?.extent;
  return y(s3) && (w[2] = e2.toMapSpace[2] / M(s3), w[3] = e2.toMapSpace[3] / s(s3)), w;
}
var w = n2();

export {
  o5 as o,
  o6 as o2,
  h,
  l,
  n3 as n,
  c2 as c,
  f3 as f,
  C,
  g,
  O
};
//# sourceMappingURL=chunk-X3HF4XA3.js.map
