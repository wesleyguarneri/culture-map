import {
  a,
  d,
  m
} from "./chunk-KBAXMVAM.js";
import {
  e as e2
} from "./chunk-GOOZVNO4.js";
import {
  s as s2
} from "./chunk-5RHKQDDL.js";
import {
  o as o3
} from "./chunk-ZAP7ZEWR.js";
import {
  e as e3
} from "./chunk-675UQNXB.js";
import {
  e
} from "./chunk-X2OAE75B.js";
import {
  s
} from "./chunk-UCPBGEQD.js";
import {
  o as o4
} from "./chunk-SIZK72CP.js";
import {
  o as o2
} from "./chunk-R5ZE5A4K.js";
import {
  o
} from "./chunk-SZWWBMQN.js";
import {
  l
} from "./chunk-OXEPWRM7.js";

// ../../../node_modules/@arcgis/core/views/2d/engine/imagery/enums.js
var t;
var e4;
!function(t3) {
  t3[t3.Stretch = 0] = "Stretch", t3[t3.Lut = 1] = "Lut", t3[t3.Hillshade = 2] = "Hillshade", t3[t3.COUNT = 3] = "COUNT";
}(t || (t = {})), function(t3) {
  t3[t3.Noop = 0] = "Noop", t3[t3.PerBand = 1] = "PerBand", t3[t3.COUNT = 2] = "COUNT";
}(e4 || (e4 = {}));

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/raster/Colormap.glsl.js
function l2(l4) {
  l4.fragment.uniforms.add(new s("u_colormap", (o5) => o5.u_colormap), new o2("u_colormapOffset", (o5) => o5.colormap.u_colormapOffset), new o2("u_colormapMaxIndex", (o5) => o5.colormap.u_colormapMaxIndex), new o2("u_opacity", (o5) => o5.common.u_opacity)), l4.fragment.code.add(o`vec4 colormap(vec4 currentPixel, bool isFloat) {
float colorIndex = isFloat ? currentPixel.r - u_colormapOffset : currentPixel.r * 255.0 - u_colormapOffset;
vec4 result;
if (currentPixel.a == 0.0 || colorIndex > u_colormapMaxIndex) {
result = vec4(0.0, 0.0, 0.0, 0.0);
} else {
vec2 texelCoordinates = vec2((colorIndex + 0.5), 0.5);
result = texelFetch(u_colormap, ivec2(texelCoordinates), 0);
}
return result;
}`);
}

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/raster/Projection.glsl.js
function t2(t3) {
  t3.fragment.uniforms.add(new s("u_transformGrid", (o5) => o5.u_transformGrid), new e("u_transformSpacing", (o5) => o5.common.u_transformSpacing), new e("u_targetImageSize", (o5) => o5.common.u_targetImageSize)), t3.fragment.code.add(o`vec2 projectPixelLocation(vec2 coords) {
vec2 index_image = floor(coords * u_targetImageSize);
vec2 oneTransformPixel = vec2(4.0, 1.0);
vec2 index_transform = floor(index_image / u_transformSpacing) * oneTransformPixel;
vec2 pos = fract((index_image + 0.5) / u_transformSpacing);
vec2 transform_location = index_transform + 0.5;
vec2 srcLocation;
if (pos.s <= pos.t) {
vec3 ll_abc = texelFetch(u_transformGrid, ivec2(transform_location), 0).rgb;
vec3 ll_def = texelFetch(u_transformGrid, ivec2(transform_location.s + 1.0, transform_location.t), 0).rgb;
srcLocation.s = dot(ll_abc, vec3(pos, 1.0));
srcLocation.t = dot(ll_def, vec3(pos, 1.0));
} else {
vec3 ur_abc = texelFetch(u_transformGrid, ivec2(transform_location.s + 2.0, transform_location.t), 0).rgb;
vec3 ur_def = texelFetch(u_transformGrid, ivec2(transform_location.s + 3.0, transform_location.t), 0).rgb;
srcLocation.s = dot(ur_abc, vec3(pos, 1.0));
srcLocation.t = dot(ur_def, vec3(pos, 1.0));
}
return srcLocation;
}`);
}

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/raster/Common.glsl.js
var l3 = class extends a {
  constructor(o5, e5, r) {
    super(), this.common = o5, this.u_image = e5, this.u_transformGrid = r;
  }
};
function i(e5, l4) {
  e5.include(t2), e5.fragment.uniforms.add(new s("u_image", (o5) => o5.u_image), new s2("u_flipY", (o5) => o5.common.u_flipY), new s2("u_applyTransform", (o5) => o5.common.u_applyTransform));
  const {
    requireBilinearWithNN: i2
  } = l4;
  i2 && e5.fragment.uniforms.add(new e("u_srcImageSize", (o5) => o5.common.u_srcImageSize)), e5.fragment.code.add(o`vec2 getPixelLocation(vec2 coords) {
vec2 targetLocation = u_flipY ? vec2(coords.s, 1.0 - coords.t) : coords;
if (!u_applyTransform) {
return targetLocation;
}
return projectPixelLocation(targetLocation);
}
bool isOutside(vec2 coords){
if (coords.t>1.00001 ||coords.t<-0.00001 || coords.s>1.00001 ||coords.s<-0.00001) {
return true;
} else {
return false;
}
}`), i2 ? e5.fragment.code.add(o`vec4 sampleBilinear(sampler2D sampler, vec2 coords, vec2 texSize) {
vec2 texelStart = floor(coords * texSize);
vec2 coord0 = texelStart / texSize;
vec2 coord1 = (texelStart +  vec2(1.0, 0.0)) / texSize;
vec2 coord2 = (texelStart +  vec2(0.0, 1.0)) / texSize;
vec2 coord3 = (texelStart +  vec2(1.0, 1.0)) / texSize;
vec4 color0 = texture(sampler, coord0);
vec4 color1 = texture(sampler, coord1);
vec4 color2 = texture(sampler, coord2);
vec4 color3 = texture(sampler, coord3);
vec2 blend = fract(coords * texSize);
vec4 color01 = mix(color0, color1, blend.x);
vec4 color23 = mix(color2, color3, blend.x);
vec4 color = mix(color01, color23, blend.y);
float alpha = floor(color0.a * color1.a * color2.a * color3.a + 0.5);
color = color * alpha + (1.0 - alpha) * texture(sampler, coords);
return color;
}
vec4 getPixel(vec2 pixelLocation) {
return sampleBilinear(u_image, pixelLocation, u_srcImageSize);
}`) : e5.fragment.code.add(o`vec4 getPixel(vec2 pixelLocation) {
return texture(u_image, pixelLocation);
}`);
}

// ../../../node_modules/@arcgis/core/chunks/RasterColorizer.glsl.js
var v = class extends l3 {
  constructor(a2, o5, l4, r, i2, t3) {
    super(a2, r, i2), this.colormap = o5, this.symbolizer = l4, this.u_colormap = t3, this.backgroundColor = l, this.fboTexture = null, this.baseOpacity = 1;
  }
};
var _ = class extends v {
};
var y = class extends v {
};
function h(e5) {
  const o5 = new o4();
  return o5.include(d), o5.include(i, e5), o5.include(l2, e5), o5.include(m, e5), o5.fragment.code.add(o`vec4 applyBackgroundBlend(vec4 layerColor) {
return blendLayers(vuv, layerColor, u_opacity);
}`), e5.colorizerType === t.Stretch ? C(o5, e5) : e5.colorizerType === t.Lut ? b(o5) : e5.colorizerType === t.Hillshade && w(o5, e5), o5;
}
function b(e5) {
  e5.fragment.code.add(o`void main() {
vec2 pixelLocation = getPixelLocation(uv);
if (isOutside(pixelLocation)) {
fragColor = applyBackgroundBlend(vec4(0.0, 0.0, 0.0, 0.0));
return;
}
vec4 currentPixel = getPixel(pixelLocation);
fragColor = applyBackgroundBlend(colormap(currentPixel, true));
}`);
}
function C(e5, a2) {
  e5.fragment.uniforms.add(new e2("u_bandCount", (e6) => e6.symbolizer.u_bandCount), new o3("u_minCutOff", (e6) => e6.symbolizer.u_minCutOff, 3), new o3("u_maxCutOff", (e6) => e6.symbolizer.u_maxCutOff, 3), new o3("u_factor", (e6) => e6.symbolizer.u_factor, 3), new o2("u_minOutput", (e6) => e6.symbolizer.u_minOutput), new o2("u_maxOutput", (e6) => e6.symbolizer.u_maxOutput), new s2("u_useGamma", (e6) => e6.symbolizer.u_useGamma), new o3("u_gamma", (e6) => e6.symbolizer.u_gamma, 3), new o3("u_gammaCorrection", (e6) => e6.symbolizer.u_gammaCorrection, 3), new o2("u_opacity", (e6) => e6.common.u_opacity)), e5.fragment.code.add(o`float stretchOneValue(float val, float minCutOff, float maxCutOff, float minOutput, float maxOutput, float factor, bool useGamma, float gamma, float gammaCorrection) {
if (val >= maxCutOff) {
return maxOutput;
} else if (val <= minCutOff) {
return minOutput;
}
float stretchedVal;
if (useGamma) {
float tempf = 1.0;
float outRange = maxOutput - minOutput;
float relativeVal = (val - minCutOff) / (maxCutOff - minCutOff);
if (gamma > 1.0) {
tempf -= pow(1.0 / outRange, relativeVal * gammaCorrection);
}
stretchedVal = (tempf * outRange * pow(relativeVal, 1.0 / gamma) + minOutput) / 255.0;
} else {
stretchedVal = minOutput + (val - minCutOff) * factor;
}
return stretchedVal;
}`);
  const l4 = a2.applyColormap ? o`fragColor = applyBackgroundBlend(colormap(vec4(grayVal, grayVal, grayVal, currentPixel.a), !u_useGamma));` : o`fragColor = applyBackgroundBlend(vec4(grayVal, grayVal, grayVal, currentPixel.a));`;
  e5.fragment.code.add(o`
      void main() {
        vec2 pixelLocation = getPixelLocation(uv);
        if (isOutside(pixelLocation)) {
          fragColor = applyBackgroundBlend(vec4(0.0, 0.0, 0.0, 0.0));
          return;
        }

        vec4 currentPixel = getPixel(pixelLocation);
        ${a2.stretchType === e4.Noop ? o`
        fragColor = applyBackgroundBlend(currentPixel);` : o`
        if (currentPixel.a == 0.0) {
          fragColor = applyBackgroundBlend(vec4(0.0, 0.0, 0.0, 0.0));
          return;
        }
        if (u_bandCount == 1) {
          float grayVal = stretchOneValue(currentPixel.r, u_minCutOff[0], u_maxCutOff[0], u_minOutput, u_maxOutput, u_factor[0], u_useGamma, u_gamma[0], u_gammaCorrection[0]);
          ${l4}
        } else {
          float redVal = stretchOneValue(currentPixel.r, u_minCutOff[0], u_maxCutOff[0], u_minOutput, u_maxOutput, u_factor[0], u_useGamma, u_gamma[0], u_gammaCorrection[0]);
          float greenVal = stretchOneValue(currentPixel.g, u_minCutOff[1], u_maxCutOff[1], u_minOutput, u_maxOutput, u_factor[1], u_useGamma, u_gamma[1], u_gammaCorrection[1]);
          float blueVal = stretchOneValue(currentPixel.b, u_minCutOff[2], u_maxCutOff[2], u_minOutput, u_maxOutput, u_factor[2], u_useGamma, u_gamma[2], u_gammaCorrection[2]);
          fragColor = applyBackgroundBlend(vec4(redVal, greenVal, blueVal, currentPixel.a));
        }`}
      }`);
}
function w(e5, a2) {
  const o5 = e5.fragment;
  o5.uniforms.add(new s("u_image", (e6) => e6.u_image), new e2("u_hillshadeType", (e6) => e6.symbolizer.u_hillshadeType), new o3("u_sinZcosAs", (e6) => e6.symbolizer.u_sinZcosAs, 6), new o3("u_sinZsinAs", (e6) => e6.symbolizer.u_sinZsinAs, 6), new o3("u_cosZs", (e6) => e6.symbolizer.u_cosZs, 6), new o3("u_weights", (e6) => e6.symbolizer.u_weights, 6), new e("u_factor", (e6) => e6.symbolizer.u_factor), new o2("u_minValue", (e6) => e6.symbolizer.u_minValue), new o2("u_maxValue", (e6) => e6.symbolizer.u_maxValue), new e("u_srcImageSize", (e6) => e6.common.u_srcImageSize)), o5.include(e3), o5.code.add(o`vec4 overlay(float val, float minValue, float maxValue, float hillshade, float alpha) {
val = clamp((val - minValue) / (maxValue - minValue), 0.0, 1.0);
vec4 color = colormap(vec4(val, val, val, 1.0), false);
vec3 hsv = rgb2hsv(color.rgb);
hsv.z = hillshade;
return vec4(hsv2rgb(hsv), 1.0) * alpha * color.a;
}`), o5.code.add(o`float getNeighborHoodAlpha(float a, float b, float c, float d, float e, float f, float g, float h, float i){
if (a == 0.0 || a == 0.0 || a==0.0 || a == 0.0 || a == 0.0 || a==0.0 || a == 0.0 || a == 0.0 || a==0.0) {
return 0.0;
}  else {
return e;
}
}`);
  const l4 = a2.applyColormap ? o`fragColor = applyBackgroundBlend(overlay(ve.r, u_minValue, u_maxValue, hillshade, alpha));` : o`hillshade *= alpha;
fragColor = applyBackgroundBlend(vec4(hillshade, hillshade, hillshade, alpha));`;
  o5.code.add(o`
    void main() {
      vec2 pixelLocation = getPixelLocation(uv);
      if (isOutside(pixelLocation)) {
        fragColor = applyBackgroundBlend(vec4(0.0, 0.0, 0.0, 0.0));
        return;
      }

      vec4 currentPixel = getPixel(pixelLocation);
      if (currentPixel.a == 0.0) {
        fragColor = applyBackgroundBlend(vec4(0.0, 0.0, 0.0, 0.0));
        return;
      }

      //mirror edge pixels
      vec2 axy = vec2(-1.0, -1.0);
      vec2 bxy = vec2(0.0, -1.0);
      vec2 cxy = vec2(1.0, -1.0);
      vec2 dxy = vec2(-1.0, 0.0);
      vec2 fxy = vec2(1.0, 0.0);
      vec2 gxy = vec2(-1.0, 1.0);
      vec2 hxy = vec2(0.0, 1.0);
      vec2 ixy = vec2(1.0, 1.0);
      vec2 onePixel = 1.0 / u_srcImageSize;
      if (pixelLocation.s < onePixel.s) {
        axy[0] = 1.0;
        dxy[0] = 1.0;
        gxy[0] = 1.0;
      }
      if (pixelLocation.t < onePixel.t) {
        axy[1] = 1.0;
        bxy[1] = 1.0;
        cxy[1] = 1.0;
      }
      if (pixelLocation.s > 1.0 - onePixel.s) {
        cxy[0] = -1.0;
        fxy[0] = -1.0;
        ixy[0] = -1.0;
      }
      if (pixelLocation.t > 1.0 - onePixel.t) {
        gxy[1] = -1.0;
        hxy[1] = -1.0;
        ixy[1] = -1.0;
      }

      // calculate hillshade
      vec4 va = texture(u_image, pixelLocation + onePixel * axy);
      vec4 vb = texture(u_image, pixelLocation + onePixel * bxy);
      vec4 vc = texture(u_image, pixelLocation + onePixel * cxy);
      vec4 vd = texture(u_image, pixelLocation + onePixel * dxy);
      vec4 ve = texture(u_image, pixelLocation);
      vec4 vf = texture(u_image, pixelLocation + onePixel * fxy);
      vec4 vg = texture(u_image, pixelLocation + onePixel * gxy);
      vec4 vh = texture(u_image, pixelLocation + onePixel * hxy);
      vec4 vi = texture(u_image, pixelLocation + onePixel * ixy);

      // calculate the rate of z change along the x, y, and diagonal direction
      float dzx = (vc + 2.0 * vf + vi - va - 2.0 * vd - vg).r * u_factor.s;
      float dzy = (vg + 2.0 * vh + vi - va - 2.0 * vb - vc).r * u_factor.t;
      float dzd = sqrt(1.0 + dzx * dzx + dzy * dzy);
      float hillshade = 0.0;

      // traditional single light source
      if (u_hillshadeType == 0){
        float cosDelta = u_sinZsinAs[0] * dzy - u_sinZcosAs[0] * dzx;
        float z = (u_cosZs[0] + cosDelta) / dzd;
        if (z < 0.0)  z = 0.0;
        hillshade = z;
      } else {
        // multi-directional with 6 light sources
        for (int k = 0; k < 6; k++) {
        float cosDelta = u_sinZsinAs[k] * dzy - u_sinZcosAs[k] * dzx;
        float z = (u_cosZs[k] + cosDelta) / dzd;
        if (z < 0.0) z = 0.0;
        hillshade = hillshade + z * u_weights[k];
        if (k == 5) break;
        }
      }

      // set color
      float alpha = getNeighborHoodAlpha(va.a, vb.a, vc.a, vd.a, ve.a, vf.a, vg.a, vh.a, vi.a);
      alpha *= u_opacity;
      ${l4}
    }
  `);
}
var z = Object.freeze(Object.defineProperty({
  __proto__: null,
  ColorizerHillshadeUniforms: y,
  ColorizerStretchUniforms: _,
  ColorizerUniforms: v,
  build: h
}, Symbol.toStringTag, {
  value: "Module"
}));

export {
  t,
  e4 as e,
  v,
  _,
  y,
  h,
  z
};
//# sourceMappingURL=chunk-YFC23HKN.js.map
