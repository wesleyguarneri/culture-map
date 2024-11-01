import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  o as o4
} from "./chunk-RIZOHDTP.js";
import {
  o
} from "./chunk-CZA7RDJP.js";
import {
  e2
} from "./chunk-FYE6XHDR.js";
import {
  o as o3
} from "./chunk-HITI6WDM.js";
import {
  s
} from "./chunk-EAVSYZXD.js";
import {
  a
} from "./chunk-7GHUVMBI.js";
import {
  a as a3
} from "./chunk-AABDXAD3.js";
import {
  o as o2
} from "./chunk-LGS63R4F.js";
import {
  a as a2
} from "./chunk-U4EMQMDC.js";
import {
  e
} from "./chunk-D7C26LZP.js";
import {
  n
} from "./chunk-C7BQE556.js";
import {
  has
} from "./chunk-2ZJE6ZFX.js";

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/IntegerDrawUniform.js
var o5 = class extends a3 {
  constructor(r, o6) {
    super(r, "int", a2.Draw, (e3, s3, i) => e3.setUniform1i(r, o6(s3, i)));
  }
};

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/collections/Component/Material/shader/ComponentData.glsl.js
var s2;
!function(o6) {
  o6[o6.Uniform = 0] = "Uniform", o6[o6.Varying = 1] = "Varying", o6[o6.COUNT = 2] = "COUNT";
}(s2 || (s2 = {}));
var x = 429496.7296;
function C(o6, r) {
  o(o6 / x * 0.5 + 0.5, r);
}
function m(e3, r) {
  switch (r.componentData) {
    case s2.Varying:
      return f(e3, r);
    case s2.Uniform:
      return u(e3, r);
    case s2.COUNT:
      return;
    default:
      n(r.componentData);
  }
}
function f(o6, e3) {
  const {
    vertex: a4,
    fragment: d
  } = o6;
  a4.include(a), a4.uniforms.add(new s("componentColorTex", (o7) => o7.componentParameters.texture.texture)), o6.attributes.add(e.COMPONENTINDEX, "float"), o6.varyings.add("vExternalColorMixMode", "mediump float"), o6.varyings.add("vExternalColor", "vec4");
  const s3 = e3.output === o3.ObjectAndLayerIdColor;
  s3 && o6.varyings.add("vObjectAndLayerIdColor", "vec4"), o6.include(e2), a4.constants.add("elevationScale", "float", 2 * x), a4.constants.add("stride", "float", has("enable-feature:objectAndLayerId-rendering") ? 3 : 2), a4.code.add(o2`vec2 getComponentTextureCoordinates(float componentIndex, float typeOffset) {
float index = componentIndex * stride + typeOffset;
float texSize = float(textureSize(componentColorTex, 0).x);
float coordX = mod(index, texSize);
float coordY = floor(index / texSize);
return vec2(coordX, coordY) + 0.5;
}`), a4.code.add(o2`
  vec4 _readComponentColor() {
    vec2 textureCoordinates = getComponentTextureCoordinates(componentIndex, 0.0);

    return texelFetch(componentColorTex, ivec2(textureCoordinates), 0);
   }

   float readElevationOffset() {
    vec2 textureCoordinates = getComponentTextureCoordinates(componentIndex, 1.0);

    vec4 encodedElevation = texelFetch(componentColorTex, ivec2(textureCoordinates), 0);
    return (rgba2float(encodedElevation) - 0.5) * elevationScale;
  }

  ${s3 ? o2`
          void forwardObjectAndLayerIdColor() {
            vec2 textureCoordinates = getComponentTextureCoordinates(componentIndex, 2.0);

            vObjectAndLayerIdColor = texelFetch(componentColorTex, ivec2(textureCoordinates), 0);
          }` : o2`void forwardObjectAndLayerIdColor() {}`}

  vec4 forwardExternalColor(out bool castShadows) {
    vec4 componentColor = _readComponentColor() * 255.0;

    float shadowFlag = mod(componentColor.b * 255.0, 2.0);
    componentColor.b -= shadowFlag;
    castShadows = shadowFlag >= 1.0;

    int decodedColorMixMode;
    vExternalColor = decodeSymbolColor(componentColor, decodedColorMixMode) * 0.003921568627451; // = 1/255;
    vExternalColorMixMode = float(decodedColorMixMode) + 0.5; // add 0.5 to avoid interpolation artifacts

    return vExternalColor;
  }
`), d.code.add(o2`
  void readExternalColor(out vec4 externalColor, out int externalColorMixMode) {
    externalColor = vExternalColor;
    externalColorMixMode = int(vExternalColorMixMode);
  }

  void outputObjectAndLayerIdColor() {
     ${s3 ? o2`fragColor = vObjectAndLayerIdColor;` : ""}
  }
`);
}
function u(o6, e3) {
  const {
    vertex: r,
    fragment: n2
  } = o6;
  r.uniforms.add(new o4("externalColor", (o7) => o7.componentParameters.externalColor)), n2.uniforms.add(new o5("externalColorMixMode", (o7) => o7.componentParameters.externalColorMixMode)), o6.varyings.add("vExternalColor", "vec4"), r.code.add(o2`float readElevationOffset() {
return 0.0;
}
void forwardObjectAndLayerIdColor() {}
vec4 forwardExternalColor(out bool castShadows) {
vExternalColor = externalColor;
castShadows = true;
return externalColor;
}`);
  const c = e3.output === o3.ObjectAndLayerIdColor;
  n2.code.add(o2`
  void readExternalColor(out vec4 color, out int colorMixMode) {
    color = vExternalColor;
    colorMixMode = externalColorMixMode;
  }

  void outputObjectAndLayerIdColor() {
    ${c ? o2`fragColor = vec4(0,0,0,0);` : ""}
 }
`);
}

export {
  s2 as s,
  x,
  C,
  m
};
//# sourceMappingURL=chunk-QI5HKZYN.js.map
