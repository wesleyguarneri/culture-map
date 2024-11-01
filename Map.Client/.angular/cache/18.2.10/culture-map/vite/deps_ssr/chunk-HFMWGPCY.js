import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  e
} from "./chunk-H6YDISWJ.js";
import {
  d
} from "./chunk-TYNTF5BJ.js";
import {
  e as e2
} from "./chunk-QWQJOAVR.js";
import {
  s
} from "./chunk-EPIUUGS2.js";
import {
  n
} from "./chunk-FYE6XHDR.js";
import {
  o as o2
} from "./chunk-Q5JLNMWZ.js";
import {
  o
} from "./chunk-LGS63R4F.js";

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/AlphaDiscard.glsl.js
function s2(a, e3) {
  l(a, e3, new o2("textureAlphaCutoff", (a2) => a2.textureAlphaCutoff));
}
function t(a, r) {
  l(a, r, new e("textureAlphaCutoff", (a2) => a2.textureAlphaCutoff));
}
function l(e3, r, s3) {
  const t2 = e3.fragment;
  switch (r.alphaDiscardMode !== s.Mask && r.alphaDiscardMode !== s.MaskBlend || t2.uniforms.add(s3), r.alphaDiscardMode) {
    case s.Blend:
      return e3.include(d);
    case s.Opaque:
      t2.code.add(o`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);
      break;
    case s.Mask:
      t2.code.add(o`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);
      break;
    case s.MaskBlend:
      e3.fragment.code.add(o`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`);
  }
}

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/MixExternalColor.glsl.js
function i(i2) {
  i2.include(e2), i2.code.add(o`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${o.int(n.Multiply)}) {
        return allMixed;
      }
      if (mode == ${o.int(n.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${o.int(n.Replace)}) {
        return externalColor;
      }

      // tint (or something invalid)
      float vIn = rgb2v(internalMixed);
      vec3 hsvTint = rgb2hsv(externalColor);
      vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
      return hsv2rgb(hsvOut);
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${o.int(n.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${o.int(n.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `);
}

export {
  s2 as s,
  t,
  i
};
//# sourceMappingURL=chunk-HFMWGPCY.js.map
