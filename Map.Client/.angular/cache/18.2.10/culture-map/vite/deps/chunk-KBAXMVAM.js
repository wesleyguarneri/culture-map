import {
  t
} from "./chunk-6N3CFEVA.js";
import {
  e as e3
} from "./chunk-X2OAE75B.js";
import {
  s
} from "./chunk-UCPBGEQD.js";
import {
  e as e2
} from "./chunk-PPMDUJ4E.js";
import {
  o as o2
} from "./chunk-R5ZE5A4K.js";
import {
  n,
  o
} from "./chunk-SZWWBMQN.js";
import {
  e
} from "./chunk-4MMTPKY4.js";
import {
  a
} from "./chunk-DY7FJHTG.js";

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/terrain/TileComposite.glsl.js
var a2 = class extends n {
  constructor() {
    super(...arguments), this.scale = 1, this.offset = a;
  }
};
function d(s2) {
  s2.attributes.add(e.POSITION, "vec2"), s2.attributes.add(e.UV0, "vec2"), s2.varyings.add("uv", "vec2"), s2.varyings.add("vuv", "vec2"), s2.vertex.uniforms.add(new o2("scale", (s3) => s3.scale), new e3("offset", (s3) => s3.offset)).code.add(o`void main(void) {
gl_Position = vec4(position, 0.0, 1.0);
uv = uv0 * scale + offset;
vuv = uv0;
}`);
}

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/terrain/BlendLayersOutput.js
var o3;
!function(o5) {
  o5[o5.Composite = 0] = "Composite", o5[o5.ColorComposite = 1] = "ColorComposite", o5[o5.GridComposite = 2] = "GridComposite", o5[o5.GroupBackgroundComposite = 3] = "GroupBackgroundComposite", o5[o5.COUNT = 4] = "COUNT";
}(o3 || (o3 = {}));

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/output/BlendOptions.js
var t2;
!function(t3) {
  t3[t3.Normal = 0] = "Normal", t3[t3.Average = 1] = "Average", t3[t3.Lighten = 2] = "Lighten", t3[t3.Lighter = 3] = "Lighter", t3[t3.Plus = 4] = "Plus", t3[t3.Screen = 5] = "Screen", t3[t3.ColorDodge = 6] = "ColorDodge", t3[t3.Darken = 7] = "Darken", t3[t3.Multiply = 8] = "Multiply", t3[t3.ColorBurn = 9] = "ColorBurn", t3[t3.Overlay = 10] = "Overlay", t3[t3.SoftLight = 11] = "SoftLight", t3[t3.HardLight = 12] = "HardLight", t3[t3.VividLight = 13] = "VividLight", t3[t3.Hue = 14] = "Hue", t3[t3.Saturation = 15] = "Saturation", t3[t3.Luminosity = 16] = "Luminosity", t3[t3.Color = 17] = "Color", t3[t3.DestinationOver = 18] = "DestinationOver", t3[t3.DestinationAtop = 19] = "DestinationAtop", t3[t3.DestinationIn = 20] = "DestinationIn", t3[t3.DestinationOut = 21] = "DestinationOut", t3[t3.SourceAtop = 22] = "SourceAtop", t3[t3.SourceIn = 23] = "SourceIn", t3[t3.SourceOut = 24] = "SourceOut", t3[t3.Xor = 25] = "Xor", t3[t3.Difference = 26] = "Difference", t3[t3.Exclusion = 27] = "Exclusion", t3[t3.Minus = 28] = "Minus", t3[t3.Invert = 29] = "Invert", t3[t3.Reflect = 30] = "Reflect", t3[t3.COUNT = 31] = "COUNT";
}(t2 || (t2 = {}));
var e4 = {
  normal: t2.Normal,
  average: t2.Average,
  lighten: t2.Lighten,
  lighter: t2.Lighter,
  screen: t2.Screen,
  plus: t2.Plus,
  "color-dodge": t2.ColorDodge,
  darken: t2.Darken,
  multiply: t2.Multiply,
  "color-burn": t2.ColorBurn,
  overlay: t2.Overlay,
  "soft-light": t2.SoftLight,
  "hard-light": t2.HardLight,
  "vivid-light": t2.VividLight,
  hue: t2.Hue,
  saturation: t2.Saturation,
  luminosity: t2.Luminosity,
  color: t2.Color,
  difference: t2.Difference,
  exclusion: t2.Exclusion,
  minus: t2.Minus,
  invert: t2.Invert,
  reflect: t2.Reflect,
  "destination-over": t2.DestinationOver,
  "destination-atop": t2.DestinationAtop,
  "destination-in": t2.DestinationIn,
  "destination-out": t2.DestinationOut,
  "source-atop": t2.SourceAtop,
  "source-in": t2.SourceIn,
  "source-out": t2.SourceOut,
  xor: t2.Xor
};
function o4(e6) {
  return e6 === t2.DestinationOver || e6 === t2.DestinationAtop || e6 === t2.DestinationIn || e6 === t2.DestinationOut || e6 === t2.SourceAtop || e6 === t2.SourceIn || e6 === t2.SourceOut || e6 === t2.Xor;
}

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/terrain/BaseOpacityMode.js
var e5;
!function(e6) {
  e6[e6.NotRequired = 0] = "NotRequired", e6[e6.Required = 1] = "Required", e6[e6.COUNT = 2] = "COUNT";
}(e5 || (e5 = {}));

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/terrain/PremultipliedAlphaSource.js
var O;
!function(O2) {
  O2[O2.Off = 0] = "Off", O2[O2.On = 1] = "On", O2[O2.COUNT = 2] = "COUNT";
}(O || (O = {}));

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/BlendModes.glsl.js
function l(l3, b) {
  const e6 = b.blendMode;
  e6 !== t2.Normal && (e6 === t2.Reflect && l3.code.add(o`float reflectBlend(in float cb, in float cl) {
return (cl == 1.0) ? cl : min(cb * cb / (1.0 - cl), 1.0);
}`), e6 !== t2.ColorDodge && e6 !== t2.VividLight || l3.code.add(o`float colorDodge(in float cb, in float cl) {
return (cb == 0.0) ? 0.0 : (cl == 1.0) ? 1.0 : min(1.0, cb / (1.0 - cl));
}`), e6 !== t2.ColorBurn && e6 !== t2.VividLight || l3.code.add(o`float colorBurn(in float cb, in float cl) {
return (cb == 1.0) ? 1.0 : (cl == 0.0) ? 0.0 : 1.0 - min(1.0, (1.0 - cb) / cl);
}`), e6 === t2.Overlay && l3.code.add(o`float overlay(in float cb, in float cl) {
return (1.0 - step(0.5, cl)) * (1.0 - 2.0 * (1.0 - cl ) * (1.0 - cb)) + step(0.5, cl) * (2.0 * cl * cb);
}`), e6 === t2.HardLight && l3.code.add(o`float hardLight(in float cb, in float cl) {
return (1.0 - step(0.5, cl)) * (2.0 * cl * cb) + step(0.5, cl) * (1.0 - 2.0 * (1.0 - cl) * (1.0 - cb));
}`), e6 === t2.SoftLight && l3.code.add(o`float softLight(in float cb, in float cl) {
if (cl <= 0.5) {
return cb - (1.0 - 2.0 * cl) * cb * (1.0 - cb);
}
if (cb <= 0.25) {
return cb + (2.0 * cl - 1.0) * cb * ((16.0 * cb - 12.0) * cb + 3.0);
}
return cb + (2.0 * cl - 1.0) * (sqrt(cb) - cb);
}`), e6 === t2.VividLight && l3.code.add(o`float vividLight(in float cb, in float cl) {
return (1.0 - step(0.5, cl)) * colorBurn(cb, 2.0 * cl) + step(0.5, cl) * colorDodge(cb, (2.0 * (cl - 0.5)));
}`), e6 !== t2.Hue && e6 !== t2.Saturation && e6 !== t2.Color && e6 !== t2.Luminosity || (l3.code.add(o`float minv3(in vec3 c) {
return min(min(c.r, c.g), c.b);
}
float maxv3(in vec3 c) {
return max(max(c.r, c.g), c.b);
}
float lumv3(in vec3 c) {
return dot(c, vec3(0.3, 0.59, 0.11));
}
vec3 clipColor(vec3 color) {
float lum = lumv3(color);
float mincol = minv3(color);
float maxcol = maxv3(color);
if (mincol < 0.0) {
color = lum + ((color - lum) * lum) / (lum - mincol);
}
if (maxcol > 1.0) {
color = lum + ((color - lum) * (1.0 - lum)) / (maxcol - lum);
}
return color;
}
vec3 setLum(vec3 cbase, vec3 clum) {
return clipColor(cbase + vec3(lumv3(clum) - lumv3(cbase)));
}`), e6 !== t2.Hue && e6 !== t2.Saturation || l3.code.add(o`float satv3(vec3 c) {
return maxv3(c) - minv3(c);
}
vec3 setLumSat(vec3 cbase, vec3 csat, vec3 clum)
{
float minbase = minv3(cbase);
float sbase = satv3(cbase);
float ssat = satv3(csat);
return setLum(sbase > 0.0 ? (cbase - minbase) * ssat / sbase : vec3(0.0), clum);
}`)), l3.code.add(o`
    vec4 applyBlendMode(vec3 cl, float ol, vec3 cb, float ob) {
      ${e6 === t2.Multiply ? o`return vec4(cl * ol * cb * ob + cl * ol * (1.0 - ob) + cb * ob * (1.0 - ol), mix(ob, 1.0, ol));` : e6 === t2.Average ? o`return vec4((cb + cl) * 0.5 * ol * ob + cl * ol * (1.0 - ob) + cb * ob * (1.0 - ol), mix(ob, 1.0, ol));` : e6 === t2.Lighten ? o`return vec4(max(cb, cl) * ol * ob + cl * ol * (1.0 - ob) + cb * ob * (1.0 - ol), mix(ob, 1.0, ol));` : e6 === t2.Darken ? o`return vec4(min(cl, cb) * ol * ob + cl * ol * (1.0 - ob) + cb * ob * (1.0 - ol), mix(ob, 1.0, ol));` : e6 === t2.Lighter ? o`return vec4(cl * ol + cb * ob, ol + ob);` : e6 === t2.Plus ? o`return clamp(vec4(cl.rgb + cb.rgb, ol + ob), 0.0, 1.0);` : e6 === t2.Minus ? o`return vec4(clamp(vec3(cb.rgb - cl.rgb), 0.0, 1.0), ob * ol);` : e6 === t2.Screen ? o`return vec4((cl + cb - cl * cb) * ol * ob + cl * ol * (1.0 - ob) + cb * ob * (1.0 - ol), mix(ob, 1.0, ol));` : e6 === t2.Difference ? o`return vec4(abs(cb - cl) * ol * ob + cl * ol * (1.0 - ob) + cb * ob * (1.0 - ol), mix(ob, 1.0, ol));` : e6 === t2.Invert ? o`return vec4((1.0 - cb) * ol * ob + cb * ob * (1.0 - ol), ob);` : e6 === t2.DestinationOver ? o`return vec4(cl * ol * (1.0 - ob) + cb * ob, ol + ob - ol * ob);` : e6 === t2.DestinationAtop ? o`return vec4(cl * ol * (1.0 - ob) + cb * ob * ol, ol);` : e6 === t2.DestinationOut ? o`return vec4(cb * ob * (1.0 - ol), ob * (1.0 - ol));` : e6 === t2.SourceAtop ? o`return vec4(cl * ol * ob + cb * ob * (1.0 - ol), ob);` : e6 === t2.SourceOut ? o`return vec4(cl * ol * (1.0 - ob), ol * (1.0 - ob));` : e6 === t2.Xor ? o`return vec4(cl * ol * (1.0 - ob) + cb * ob * (1.0 - ol), ol * (1.0 - ob) + ob * (1.0 - ol));` : e6 === t2.DestinationIn ? o`return vec4(cb * ob * ol, ol * ob);` : e6 === t2.SourceIn ? o`return vec4(cl * ol * ob, ol * ob);` : e6 === t2.Hue ? o`
          vec3 f = setLumSat(cl, cb, cb);
          return vec4(f * ol * ob + cl * ol * (1.0 - ob) + cb * ob * (1.0 - ol), mix(ob, 1.0, ol));` : e6 === t2.Saturation ? o`
          vec3 f = setLumSat(cb, cl, cb);
          return vec4(f * ol * ob + cl * ol * (1.0 - ob) + cb * ob * (1.0 - ol), mix(ob, 1.0, ol));` : e6 === t2.Color ? o`
          vec3 f = setLum(cl, cb);
          return vec4(f * ol * ob + cl * ol * (1.0 - ob) + cb * ob * (1.0 - ol), mix(ob, 1.0, ol));` : e6 === t2.Luminosity ? o`
          vec3 f = setLum(cb, cl);
          return vec4(f * ol * ob + cl * ol * (1.0 - ob) + cb * ob * (1.0 - ol), mix(ob, 1.0, ol));` : e6 === t2.Exclusion ? o`
          vec3 f = cl + cb - 2.0 * cl * cb;
          return vec4(f * ol * ob + cl * ol * (1.0 - ob) + cb * ob * (1.0 - ol), mix(ob, 1.0, ol));` : e6 === t2.Reflect ? o`
          vec3 f = vec3(reflectBlend(cb.r, cl.r), reflectBlend(cb.g, cl.g), reflectBlend(cb.b, cl.b));
          return vec4(f * ol * ob + cl * ol * (1.0 - ob) + cb * ob * (1.0 - ol), mix(ob, 1.0, ol));` : e6 === t2.ColorDodge ? o`
          vec3 f = vec3(colorDodge(cb.r, cl.r), colorDodge(cb.g, cl.g), colorDodge(cb.b, cl.b));
          return vec4(f * ol * ob + cl * ol * (1.0 - ob) + cb * ob * (1.0 - ol), mix(ob, 1.0, ol));` : e6 === t2.ColorBurn ? o`
          vec3 f = vec3(colorBurn(cb.r, cl.r), colorBurn(cb.g, cl.g), colorBurn(cb.b, cl.b));
          return vec4(f * ol * ob + cl * ol * (1.0 - ob) + cb * ob * (1.0 - ol), mix(ob, 1.0, ol));` : e6 === t2.Overlay ? o`
          vec3 f = vec3(overlay(cb.r, cl.r), overlay(cb.g, cl.g), overlay(cb.b, cl.b));
          return vec4(f * ol * ob + cl * ol * (1.0 - ob) + cb * ob * (1.0 - ol), mix(ob, 1.0, ol));` : e6 === t2.SoftLight ? o`
          vec3 f = vec3(softLight(cb.r, cl.r), softLight(cb.g, cl.g), softLight(cb.b, cl.b));
          return vec4(f * ol * ob + cl * ol * (1.0 - ob) + cb * ob * (1.0 - ol), mix(ob, 1.0, ol));` : e6 === t2.HardLight ? o`
          vec3 f = vec3(hardLight(cb.r, cl.r), hardLight(cb.g, cl.g), hardLight(cb.b, cl.b));
          return vec4(f * ol * ob + cl * ol * (1.0 - ob) + cb * ob * (1.0 - ol), mix(ob, 1.0, ol));` : e6 === t2.VividLight ? o`
          vec3 f = vec3(vividLight(cb.r, cl.r), vividLight(cb.g, cl.g), vividLight(cb.b, cl.b));
          return vec4(f * ol * ob + cl * ol * (1.0 - ob) + cb * ob * (1.0 - ol), mix(ob, 1.0, ol));` : o``}
    }
  `));
}

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/terrain/TileBackground.glsl.js
function m(o5, u) {
  const n2 = u.output === o3.GridComposite, m2 = u.output === o3.ColorComposite, g = u.output === o3.GroupBackgroundComposite, b = u.output === o3.Composite, f = u.baseOpacityMode === e5.Required, y = o5.fragment;
  f && y.uniforms.add(new o2("baseOpacity", (o6) => o6.baseOpacity)), n2 ? y.include(t) : m2 ? y.uniforms.add(new e2("backgroundColor", (o6) => o6.backgroundColor)) : b && y.uniforms.add(new s("fboColor", (o6) => o6.fboTexture));
  const C = u.blendMode !== t2.Normal, v = u.premultipliedSource === O.On, h = !C && !v && (b && !f || g);
  y.include(l, u), y.code.add(o`
    vec4 getBackground(vec2 uv) {
      return ${f ? o`baseOpacity *` : ""} ${g ? o`vec4(0.0, 0.0, 0.0, 0.0)` : m2 ? o`vec4(backgroundColor, 1.0)` : n2 ? o`vec4(gridColor(uv), 1.0)` : o`texelFetch(fboColor, ivec2(gl_FragCoord.xy), 0)`};
    }

    vec4 blendLayers(vec2 bgUV, vec4 colorLayer, float opacity) {
      ${C ? o`
          vec3 cl = colorLayer.a == 0.0 ? colorLayer.rgb : colorLayer.rgb / colorLayer.a;
          vec4 bgColor = getBackground(bgUV);
          vec3 cb = bgColor.a == 0.0 ? bgColor.rgb : bgColor.rgb / bgColor.a;
          return applyBlendMode(clamp(cl, vec3(0.0), vec3(1.0)), colorLayer.a * opacity, cb, bgColor.a);` : o`
          float composeAlpha = colorLayer.a * opacity;
          ${h ? o`return colorLayer * opacity;` : o`
            vec4 bgColor = getBackground(bgUV);
            return bgColor * (1.0 - composeAlpha) + colorLayer * opacity;`}`}
    }`);
}

export {
  a2 as a,
  d,
  t2 as t,
  e4 as e,
  o4 as o,
  e5 as e2,
  o3 as o2,
  O,
  m
};
//# sourceMappingURL=chunk-KBAXMVAM.js.map
