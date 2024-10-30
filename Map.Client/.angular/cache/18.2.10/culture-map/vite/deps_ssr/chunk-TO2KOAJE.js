import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  c as c2,
  n as n2,
  p
} from "./chunk-DTMLHZFB.js";
import {
  t as t3
} from "./chunk-TIAWSZQK.js";
import {
  t as t2
} from "./chunk-D3VQCVGJ.js";
import {
  d as d2
} from "./chunk-TSTMST4X.js";
import {
  r
} from "./chunk-LA4GCRJY.js";
import {
  o as o5
} from "./chunk-62ZEBDPC.js";
import {
  a as a2
} from "./chunk-ZFMS3XGM.js";
import {
  e as e8
} from "./chunk-QWQJOAVR.js";
import {
  t
} from "./chunk-YLQMUXQA.js";
import {
  P
} from "./chunk-4U7LUZFD.js";
import {
  d,
  f,
  w
} from "./chunk-T257OY4U.js";
import {
  e as e7
} from "./chunk-ZDFN6OZC.js";
import {
  e as e6
} from "./chunk-3NWWTJOW.js";
import {
  s as s2
} from "./chunk-TRF6JO5N.js";
import {
  o as o6
} from "./chunk-ZHVMMFTW.js";
import {
  c,
  e2 as e5
} from "./chunk-QATJRB5Q.js";
import {
  D,
  G
} from "./chunk-KYLW5XXS.js";
import {
  o
} from "./chunk-CZA7RDJP.js";
import {
  o as o3
} from "./chunk-HITI6WDM.js";
import {
  e as e4
} from "./chunk-XK3CKE5Q.js";
import {
  a
} from "./chunk-7GHUVMBI.js";
import {
  o as o4
} from "./chunk-Q5JLNMWZ.js";
import {
  o as o2
} from "./chunk-LGS63R4F.js";
import {
  e as e3
} from "./chunk-D7C26LZP.js";
import {
  _,
  n
} from "./chunk-VSQZQLTQ.js";
import {
  s
} from "./chunk-K43CZ3M5.js";
import {
  e as e2
} from "./chunk-NUICEVIH.js";
import {
  e3 as e
} from "./chunk-NXK752PZ.js";

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/materials/ProceduralTextureRepository.js
var t4 = class {
  constructor(t5, r4, s6) {
    this._createTexture = t5, this._parametersKey = r4, this._repository = /* @__PURE__ */ new Map(), this._orphanCache = s6.newCache(`procedural-texture-repository:${e()}`, (e9) => e9.dispose());
  }
  destroy() {
    for (const [e9, {
      texture: t5
    }] of this._repository) t5.dispose();
    this._repository.clear(), this._orphanCache.destroy();
  }
  swap(e9, t5 = null) {
    const r4 = this._acquire(e9);
    return this.release(t5), r4;
  }
  release(e9) {
    if (null == e9) return;
    const t5 = this._parametersKey(e9), r4 = this._repository.get(t5);
    if (r4 && (r4.refCount--, 0 === r4.refCount)) {
      this._repository.delete(t5);
      const {
        texture: e10
      } = r4, s6 = e10.usedMemory;
      this._orphanCache.put(t5, e10, s6);
    }
  }
  _acquire(e9) {
    if (null == e9) return null;
    const t5 = this._parametersKey(e9), s6 = this._repository.get(t5);
    if (s6) return s6.refCount++, s6.texture;
    const o7 = this._orphanCache.pop(t5) ?? this._createTexture(e9), i = new r2(o7);
    return this._repository.set(t5, i), o7;
  }
};
var r2 = class {
  constructor(e9) {
    this.texture = e9, this.refCount = 1;
  }
};

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/materials/stippleTextureRepository.js
function u(t5, u3) {
  return new t4((e9) => {
    const {
      encodedData: u4,
      textureSize: c6
    } = a3(e9), f4 = new e5();
    return f4.internalFormat = G.RGBA, f4.width = c6, f4.height = 1, f4.wrapMode = D.REPEAT, new c(t5, f4, u4);
  }, (t6) => `${t6.pattern.join(",")}-r${t6.pixelRatio}`, u3);
}
function a3(e9) {
  const r4 = c3(e9), o7 = 1 / e9.pixelRatio, n3 = f2(e9), i = s3(e9), u3 = (Math.floor(0.5 * (i - 1)) + 0.5) * o7, a4 = [];
  let l = 1;
  for (const t5 of r4) {
    for (let e10 = 0; e10 < t5; e10++) {
      const r5 = l * (Math.min(e10, t5 - 1 - e10) + 0.5) * o7 / u3 * 0.5 + 0.5;
      a4.push(r5);
    }
    l = -l;
  }
  const p2 = Math.round(r4[0] / 2), m2 = [...a4.slice(p2), ...a4.slice(0, p2)], d4 = new Uint8Array(4 * n3);
  let x = 0;
  for (const c6 of m2) o(c6, d4, x), x += 4;
  return {
    encodedData: d4,
    textureSize: n3
  };
}
function c3(t5) {
  return t5.pattern.map((e9) => Math.round(e9 * t5.pixelRatio));
}
function f2(t5) {
  if (null == t5) return 1;
  const e9 = c3(t5);
  return Math.floor(e9.reduce((t6, e10) => t6 + e10));
}
function s3(t5) {
  return c3(t5).reduce((t6, e9) => Math.max(t6, e9));
}

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/shaders/ensureColor4.js
function s4(t5) {
  return null == t5 ? _ : 4 === t5.length ? t5 : s(c4, t5[0], t5[1], t5[2], 1);
}
var c4 = n();

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/LineStipple.glsl.js
function d3(e9, t5) {
  e9.constants.add("stippleAlphaColorDiscard", "float", 1e-3), e9.constants.add("stippleAlphaHighlightDiscard", "float", 0.5), t5.stippleEnabled ? c5(e9, t5) : f3(e9);
}
function c5(p2, n3) {
  const d4 = !(n3.draped && n3.stipplePreferContinuous), {
    vertex: c6,
    fragment: f4
  } = p2;
  f4.include(a), n3.draped || (f(c6, n3), c6.uniforms.add(new o4("worldToScreenPerDistanceRatio", (e9, t5) => 1 / t5.camera.perScreenPixelRatio)), c6.code.add(o2`float computeWorldToScreenRatio(vec3 segmentCenter) {
float segmentDistanceToCamera = length(segmentCenter - cameraPosition);
return worldToScreenPerDistanceRatio / segmentDistanceToCamera;
}`)), p2.varyings.add("vStippleDistance", "float"), p2.varyings.add("vStippleDistanceLimits", "vec2"), p2.varyings.add("vStipplePatternStretch", "float"), c6.code.add(o2`
    float discretizeWorldToScreenRatio(float worldToScreenRatio) {
      float step = ${u2};

      float discreteWorldToScreenRatio = log(worldToScreenRatio);
      discreteWorldToScreenRatio = ceil(discreteWorldToScreenRatio / step) * step;
      discreteWorldToScreenRatio = exp(discreteWorldToScreenRatio);
      return discreteWorldToScreenRatio;
    }
  `), c6.code.add(o2`vec2 computeStippleDistanceLimits(float startPseudoScreen, float segmentLengthPseudoScreen, float segmentLengthScreen, float patternLength) {`), c6.code.add(o2`
    if (segmentLengthPseudoScreen >= ${d4 ? "patternLength" : "1e4"}) {
  `), w(c6), c6.code.add(o2`float repetitions = segmentLengthScreen / (patternLength * pixelRatio);
float flooredRepetitions = max(1.0, floor(repetitions + 0.5));
float segmentLengthScreenRounded = flooredRepetitions * patternLength;
float stretch = repetitions / flooredRepetitions;
vStipplePatternStretch = max(0.75, stretch);
return vec2(0.0, segmentLengthScreenRounded);
}
return vec2(startPseudoScreen, startPseudoScreen + segmentLengthPseudoScreen);
}`), f4.uniforms.add(new s2("stipplePatternTexture", (e9) => e9.stippleTexture), new o4("stipplePatternSDFNormalizer", (e9) => m(e9.stipplePattern)), new o4("stipplePatternPixelSizeInv", (e9) => 1 / S(e9))), f4.code.add(o2`float getStippleSDF(out bool isClamped) {
float stippleDistanceClamped = clamp(vStippleDistance, vStippleDistanceLimits.x, vStippleDistanceLimits.y);
vec2 aaCorrectedLimits = vStippleDistanceLimits + vec2(1.0, -1.0) / gl_FragCoord.w;
isClamped = vStippleDistance < aaCorrectedLimits.x || vStippleDistance > aaCorrectedLimits.y;
float u = stippleDistanceClamped * gl_FragCoord.w * stipplePatternPixelSizeInv * vLineSizeInv;
u = fract(u);
float encodedSDF = rgba2float(texture(stipplePatternTexture, vec2(u, 0.5)));
float sdf = (encodedSDF * 2.0 - 1.0) * stipplePatternSDFNormalizer;
return (sdf - 0.5) * vStipplePatternStretch + 0.5;
}
float getStippleSDF() {
bool ignored;
return getStippleSDF(ignored);
}
float getStippleAlpha() {
bool isClamped;
float stippleSDF = getStippleSDF(isClamped);
float antiAliasedResult = clamp(stippleSDF * vLineWidth + 0.5, 0.0, 1.0);
return isClamped ? floor(antiAliasedResult + 0.5) : antiAliasedResult;
}`), n3.stippleOffColorEnabled ? (f4.uniforms.add(new e7("stippleOffColor", (e9) => s4(e9.stippleOffColor))), f4.code.add(o2`#define discardByStippleAlpha(stippleAlpha, threshold) {}
#define blendStipple(color, stippleAlpha) mix(color, stippleOffColor, stippleAlpha)`)) : f4.code.add(o2`#define discardByStippleAlpha(stippleAlpha, threshold) if (stippleAlpha < threshold) { discard; }
#define blendStipple(color, stippleAlpha) vec4(color.rgb, color.a * stippleAlpha)`);
}
function f3(e9) {
  e9.fragment.code.add(o2`float getStippleAlpha() { return 1.0; }
#define discardByStippleAlpha(_stippleAlpha_, _threshold_) {}
#define blendStipple(color, _stippleAlpha_) color`);
}
function m(e9) {
  return e9 ? (Math.floor(0.5 * (s3(e9) - 1)) + 0.5) / e9.pixelRatio : 1;
}
function S(e9) {
  const t5 = e9.stipplePattern;
  return t5 ? f2(e9.stipplePattern) / t5.pixelRatio : 1;
}
var u2 = o2.float(0.4);

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/shaders/RibbonLineTechniqueConfiguration.js
var r3;
!function(o7) {
  o7[o7.BUTT = 0] = "BUTT", o7[o7.SQUARE = 1] = "SQUARE", o7[o7.ROUND = 2] = "ROUND", o7[o7.COUNT = 3] = "COUNT";
}(r3 || (r3 = {}));
var s5 = class extends t3 {
  constructor() {
    super(...arguments), this.output = o3.Color, this.capType = r3.BUTT, this.transparencyPassType = o5.NONE, this.occluder = false, this.hasSlicePlane = false, this.hasPolygonOffset = false, this.writeDepth = false, this.draped = false, this.stippleEnabled = false, this.stippleOffColorEnabled = false, this.stipplePreferContinuous = true, this.roundJoins = false, this.applyMarkerOffset = false, this.vvSize = false, this.vvColor = false, this.vvOpacity = false, this.falloffEnabled = false, this.innerColorEnabled = false, this.hasOccludees = false, this.multipassEnabled = false, this.cullAboveGround = false, this.wireframe = false, this.objectAndLayerIdColorInstanced = false;
  }
};
e2([r({
  count: o3.COUNT
})], s5.prototype, "output", void 0), e2([r({
  count: r3.COUNT
})], s5.prototype, "capType", void 0), e2([r({
  count: o5.COUNT
})], s5.prototype, "transparencyPassType", void 0), e2([r()], s5.prototype, "occluder", void 0), e2([r()], s5.prototype, "hasSlicePlane", void 0), e2([r()], s5.prototype, "hasPolygonOffset", void 0), e2([r()], s5.prototype, "writeDepth", void 0), e2([r()], s5.prototype, "draped", void 0), e2([r()], s5.prototype, "stippleEnabled", void 0), e2([r()], s5.prototype, "stippleOffColorEnabled", void 0), e2([r()], s5.prototype, "stipplePreferContinuous", void 0), e2([r()], s5.prototype, "roundJoins", void 0), e2([r()], s5.prototype, "applyMarkerOffset", void 0), e2([r()], s5.prototype, "vvSize", void 0), e2([r()], s5.prototype, "vvColor", void 0), e2([r()], s5.prototype, "vvOpacity", void 0), e2([r()], s5.prototype, "falloffEnabled", void 0), e2([r()], s5.prototype, "innerColorEnabled", void 0), e2([r()], s5.prototype, "hasOccludees", void 0), e2([r()], s5.prototype, "multipassEnabled", void 0), e2([r()], s5.prototype, "cullAboveGround", void 0), e2([r()], s5.prototype, "wireframe", void 0), e2([r()], s5.prototype, "objectAndLayerIdColorInstanced", void 0), e2([r({
  constValue: false
})], s5.prototype, "occlusionPass", void 0), e2([r({
  constValue: true
})], s5.prototype, "hasVvInstancing", void 0), e2([r({
  constValue: true
})], s5.prototype, "hasSliceTranslatedView", void 0);

// ../../../node_modules/@arcgis/core/chunks/RibbonLine.glsl.js
var w2 = 1;
function y(y2) {
  const C2 = new o6(), {
    attributes: j,
    varyings: P2,
    constants: A,
    vertex: R,
    fragment: E
  } = C2;
  C2.include(t2), C2.include(c2, y2), C2.include(d3, y2);
  const T = y2.applyMarkerOffset && !y2.draped;
  T && (R.uniforms.add(new o4("markerScale", (e9) => e9.markerScale)), C2.include(n2, {
    space: p.World,
    draped: false
  })), C2.include(d2, y2), d(R, y2), R.uniforms.add(new e4("inverseProjectionMatrix", (e9, i) => i.camera.inverseProjectionMatrix), new e6("nearFar", (e9, i) => i.camera.nearFar), new o4("miterLimit", (e9) => "miter" !== e9.join ? 0 : e9.miterLimit), new e7("viewport", (e9, i) => i.camera.fullViewport)), R.constants.add("LARGE_HALF_FLOAT", "float", 65500), j.add(e3.POSITION, "vec3"), j.add(e3.PREVPOSITION, "vec3"), j.add(e3.NEXTPOSITION, "vec3"), j.add(e3.SUBDIVISIONFACTOR, "float"), j.add(e3.UV0, "vec2"), P2.add("vColor", "vec4"), P2.add("vpos", "vec3"), P2.add("vLineDistance", "float"), P2.add("vLineWidth", "float");
  const F = y2.multipassEnabled && y2.output === o3.Color;
  F && P2.add("depth", "float");
  const z = y2.stippleEnabled;
  z && P2.add("vLineSizeInv", "float"), A.add("aaWidth", "float", y2.stippleEnabled ? 0 : 1);
  const V = y2.capType === r3.ROUND, O = y2.stippleEnabled && V, W = y2.falloffEnabled || O;
  W && P2.add("vLineDistanceNorm", "float"), V && (P2.add("vSegmentSDF", "float"), P2.add("vReverseSegmentSDF", "float")), R.code.add(o2`#define PERPENDICULAR(v) vec2(v.y, -v.x);
float interp(float ncp, vec4 a, vec4 b) {
return (-ncp - a.z) / (b.z - a.z);
}
vec2 rotate(vec2 v, float a) {
float s = sin(a);
float c = cos(a);
mat2 m = mat2(c, -s, s, c);
return m * v;
}`), R.code.add(o2`vec4 projectAndScale(vec4 pos) {
vec4 posNdc = proj * pos;
posNdc.xy *= viewport.zw / posNdc.w;
return posNdc;
}`), R.code.add(o2`
    void clipAndTransform(inout vec4 pos, inout vec4 prev, inout vec4 next, in bool isStartVertex) {
      float vnp = nearFar[0] * 0.99;

      if(pos.z > -nearFar[0]) {
        //current pos behind ncp --> we need to clip
        if (!isStartVertex) {
          if(prev.z < -nearFar[0]) {
            //previous in front of ncp
            pos = mix(prev, pos, interp(vnp, prev, pos));
            next = pos;
          } else {
            pos = vec4(0.0, 0.0, 0.0, 1.0);
          }
        } else {
          if(next.z < -nearFar[0]) {
            //next in front of ncp
            pos = mix(pos, next, interp(vnp, pos, next));
            prev = pos;
          } else {
            pos = vec4(0.0, 0.0, 0.0, 1.0);
          }
        }
      } else {
        //current position visible
        if (prev.z > -nearFar[0]) {
          //previous behind ncp
          prev = mix(pos, prev, interp(vnp, pos, prev));
        }
        if (next.z > -nearFar[0]) {
          //next behind ncp
          next = mix(next, pos, interp(vnp, next, pos));
        }
      }

      ${F ? "depth = pos.z;" : ""}

      pos = projectAndScale(pos);
      next = projectAndScale(next);
      prev = projectAndScale(prev);
    }
  `), w(R), R.code.add(o2`
  void main(void) {
    // unpack values from uv0.y
    bool isStartVertex = abs(abs(uv0.y)-3.0) == 1.0;

    float coverage = 1.0;

    // Check for special value of uv0.y which is used by the Renderer when graphics
    // are removed before the VBO is recompacted. If this is the case, then we just
    // project outside of clip space.
    if (uv0.y == 0.0) {
      // Project out of clip space
      gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
    }
    else {
      bool isJoin = abs(uv0.y) < 3.0;
      float lineSize = getSize();

      if (lineSize < 1.0) {
        coverage = lineSize; // convert sub-pixel coverage to alpha
        lineSize = 1.0;
      }
      lineSize += aaWidth;

      float lineWidth = lineSize * pixelRatio;
      vLineWidth = lineWidth;
      ${z ? o2`vLineSizeInv = 1.0 / lineSize;` : ""}

      vec4 pos  = view * vec4(position, 1.0);
      vec4 prev = view * vec4(prevPosition, 1.0);
      vec4 next = view * vec4(nextPosition, 1.0);
  `), T && R.code.add(o2`vec4 other = isStartVertex ? next : prev;
bool markersHidden = areWorldMarkersHidden(pos, other);
if(!isJoin && !markersHidden) {
pos.xyz += normalize(other.xyz - pos.xyz) * getWorldMarkerSize(pos) * 0.5;
}`), R.code.add(o2`clipAndTransform(pos, prev, next, isStartVertex);
vec2 left = (pos.xy - prev.xy);
vec2 right = (next.xy - pos.xy);
float leftLen = length(left);
float rightLen = length(right);`);
  (y2.stippleEnabled || V) && R.code.add(o2`
      float isEndVertex = float(!isStartVertex);
      vec2 segmentOrigin = mix(pos.xy, prev.xy, isEndVertex);
      vec2 segment = mix(right, left, isEndVertex);
      ${V ? o2`vec2 segmentEnd = mix(next.xy, pos.xy, isEndVertex);` : ""}
    `), R.code.add(o2`left = (leftLen > 0.001) ? left/leftLen : vec2(0.0, 0.0);
right = (rightLen > 0.001) ? right/rightLen : vec2(0.0, 0.0);
vec2 capDisplacementDir = vec2(0, 0);
vec2 joinDisplacementDir = vec2(0, 0);
float displacementLen = lineWidth;
if (isJoin) {
bool isOutside = (left.x * right.y - left.y * right.x) * uv0.y > 0.0;
joinDisplacementDir = normalize(left + right);
joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);
if (leftLen > 0.001 && rightLen > 0.001) {
float nDotSeg = dot(joinDisplacementDir, left);
displacementLen /= length(nDotSeg * left - joinDisplacementDir);
if (!isOutside) {
displacementLen = min(displacementLen, min(leftLen, rightLen)/abs(nDotSeg));
}
}
if (isOutside && (displacementLen > miterLimit * lineWidth)) {`), y2.roundJoins ? R.code.add(o2`
        vec2 startDir = leftLen < 0.001 ? right : left;
        startDir = PERPENDICULAR(startDir);

        vec2 endDir = rightLen < 0.001 ? left : right;
        endDir = PERPENDICULAR(endDir);

        float factor = ${y2.stippleEnabled ? o2`min(1.0, subdivisionFactor * ${o2.float((w2 + 2) / (w2 + 1))})` : o2`subdivisionFactor`};

        float rotationAngle = acos(clamp(dot(startDir, endDir), -1.0, 1.0));
        joinDisplacementDir = rotate(startDir, -sign(uv0.y) * factor * rotationAngle);
      `) : R.code.add(o2`if (leftLen < 0.001) {
joinDisplacementDir = right;
}
else if (rightLen < 0.001) {
joinDisplacementDir = left;
}
else {
joinDisplacementDir = (isStartVertex || subdivisionFactor > 0.0) ? right : left;
}
joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);`);
  const I = y2.capType !== r3.BUTT;
  return R.code.add(o2`
        displacementLen = lineWidth;
      }
    } else {
      // CAP handling ---------------------------------------------------
      joinDisplacementDir = isStartVertex ? right : left;
      joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);

      ${I ? o2`capDisplacementDir = isStartVertex ? -right : left;` : ""}
    }
  `), R.code.add(o2`
    // Displacement (in pixels) caused by join/or cap
    vec2 dpos = joinDisplacementDir * sign(uv0.y) * displacementLen + capDisplacementDir * displacementLen;
    float lineDistNorm = sign(uv0.y) * pos.w;

    vLineDistance =  lineWidth * lineDistNorm;
    ${W ? o2`vLineDistanceNorm = lineDistNorm;` : ""}

    pos.xy += dpos;
  `), V && R.code.add(o2`vec2 segmentDir = normalize(segment);
vSegmentSDF = (isJoin && isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentOrigin, segmentDir) * pos.w) ;
vReverseSegmentSDF = (isJoin && !isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentEnd, -segmentDir) * pos.w);`), y2.stippleEnabled && (y2.draped ? R.uniforms.add(new o4("worldToScreenRatio", (e9, i) => 1 / i.screenToPCSRatio)) : R.code.add(o2`vec3 segmentCenter = mix((nextPosition + position) * 0.5, (position + prevPosition) * 0.5, isEndVertex);
float worldToScreenRatio = computeWorldToScreenRatio(segmentCenter);`), R.code.add(o2`float segmentLengthScreenDouble = length(segment);
float segmentLengthScreen = segmentLengthScreenDouble * 0.5;
float discreteWorldToScreenRatio = discretizeWorldToScreenRatio(worldToScreenRatio);
float segmentLengthRender = length(mix(nextPosition - position, position - prevPosition, isEndVertex));
vStipplePatternStretch = worldToScreenRatio / discreteWorldToScreenRatio;`), y2.draped ? R.code.add(o2`float segmentLengthPseudoScreen = segmentLengthScreen / pixelRatio * discreteWorldToScreenRatio / worldToScreenRatio;
float startPseudoScreen = uv0.x * discreteWorldToScreenRatio - mix(0.0, segmentLengthPseudoScreen, isEndVertex);`) : R.code.add(o2`float startPseudoScreen = mix(uv0.x, uv0.x - segmentLengthRender, isEndVertex) * discreteWorldToScreenRatio;
float segmentLengthPseudoScreen = segmentLengthRender * discreteWorldToScreenRatio;`), R.uniforms.add(new o4("stipplePatternPixelSize", (e9) => S(e9))), R.code.add(o2`float patternLength = lineSize * stipplePatternPixelSize;
vStippleDistanceLimits = computeStippleDistanceLimits(startPseudoScreen, segmentLengthPseudoScreen, segmentLengthScreen, patternLength);
vStippleDistance = mix(vStippleDistanceLimits.x, vStippleDistanceLimits.y, isEndVertex);
if (segmentLengthScreenDouble >= 0.001) {
vec2 stippleDisplacement = pos.xy - segmentOrigin;
float stippleDisplacementFactor = dot(segment, stippleDisplacement) / (segmentLengthScreenDouble * segmentLengthScreenDouble);
vStippleDistance += (stippleDisplacementFactor - isEndVertex) * (vStippleDistanceLimits.y - vStippleDistanceLimits.x);
}
vStippleDistanceLimits *= pos.w;
vStippleDistance *= pos.w;
vStippleDistanceLimits = isJoin ?
vStippleDistanceLimits :
isStartVertex ?
vec2(-1e34, vStippleDistanceLimits.y) :
vec2(vStippleDistanceLimits.x, 1e34);`)), R.code.add(o2`
      // Convert back into NDC
      pos.xy = (pos.xy / viewport.zw) * pos.w;

      vColor = getColor();
      vColor.a *= coverage;

      ${y2.wireframe && !y2.draped ? "pos.z -= 0.001 * pos.w;" : ""}

      // transform final position to camera space for slicing
      vpos = (inverseProjectionMatrix * pos).xyz;
      gl_Position = pos;
      forwardObjectAndLayerIdColor();
    }
  }
  `), F && C2.include(a2, y2), C2.include(P, y2), E.include(e8), E.code.add(o2`
  void main() {
    discardBySlice(vpos);
    ${F ? "terrainDepthTest(depth);" : ""}
  `), y2.wireframe ? E.code.add(o2`vec4 finalColor = vec4(1.0, 0.0, 1.0, 1.0);`) : (V && E.code.add(o2`
        float sdf = min(vSegmentSDF, vReverseSegmentSDF);
        vec2 fragmentPosition = vec2(
          min(sdf, 0.0),
          vLineDistance
        ) * gl_FragCoord.w;

        float fragmentRadius = length(fragmentPosition);
        float fragmentCapSDF = (fragmentRadius - vLineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
        float capCoverage = clamp(0.5 - fragmentCapSDF, 0.0, 1.0);

        if (capCoverage < ${o2.float(t)}) {
          discard;
        }
      `), O ? E.code.add(o2`
      vec2 stipplePosition = vec2(
        min(getStippleSDF() * 2.0 - 1.0, 0.0),
        vLineDistanceNorm * gl_FragCoord.w
      );
      float stippleRadius = length(stipplePosition * vLineWidth);
      float stippleCapSDF = (stippleRadius - vLineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
      float stippleCoverage = clamp(0.5 - stippleCapSDF, 0.0, 1.0);
      float stippleAlpha = step(${o2.float(t)}, stippleCoverage);
      `) : E.code.add(o2`float stippleAlpha = getStippleAlpha();`), y2.output !== o3.ObjectAndLayerIdColor && E.code.add(o2`discardByStippleAlpha(stippleAlpha, stippleAlphaColorDiscard);`), E.uniforms.add(new e7("intrinsicColor", (e9) => e9.color)), E.code.add(o2`vec4 color = intrinsicColor * vColor;`), y2.innerColorEnabled && (E.uniforms.add(new e7("innerColor", (e9) => e9.innerColor ?? e9.color), new o4("innerWidth", (e9, i) => e9.innerWidth * i.camera.pixelRatio)), E.code.add(o2`float distToInner = abs(vLineDistance * gl_FragCoord.w) - innerWidth;
float innerAA = clamp(0.5 - distToInner, 0.0, 1.0);
float innerAlpha = innerColor.a + color.a * (1.0 - innerColor.a);
color = mix(color, vec4(innerColor.rgb, innerAlpha), innerAA);`)), E.code.add(o2`vec4 finalColor = blendStipple(color, stippleAlpha);`), y2.falloffEnabled && (E.uniforms.add(new o4("falloff", (e9) => e9.falloff)), E.code.add(o2`finalColor.a *= pow(max(0.0, 1.0 - abs(vLineDistanceNorm * gl_FragCoord.w)), falloff);`)), y2.stippleEnabled || E.code.add(o2`float featherStartDistance = max(vLineWidth - 2.0, 0.0);
float value = abs(vLineDistance) * gl_FragCoord.w;
float feather = (value - featherStartDistance) / (vLineWidth - featherStartDistance);
finalColor.a *= 1.0 - clamp(feather, 0.0, 1.0);`)), y2.transparencyPassType === o5.ColorAlpha && (C2.outputs.add("fragColor", "vec4", 0), C2.outputs.add("fragAlpha", "float", 1)), E.code.add(o2`
    ${y2.output === o3.ObjectAndLayerIdColor ? o2`finalColor.a = 1.0;` : ""}

    if (finalColor.a < ${o2.float(t)}) {
      discard;
    }

    ${y2.output === o3.Color ? o2`fragColor = highlightSlice(finalColor, vpos);` : ""}
    ${y2.output === o3.Color && y2.transparencyPassType === o5.ColorAlpha ? o2`
            fragColor = premultiplyAlpha(fragColor);
            fragAlpha = fragColor.a;` : ""}
    ${y2.output === o3.Highlight ? o2`fragColor = vec4(1.0);` : ""}
    ${y2.output === o3.ObjectAndLayerIdColor ? o2`outputObjectAndLayerIdColor();` : ""}
  }
  `), C2;
}
var C = Object.freeze(Object.defineProperty({
  __proto__: null,
  build: y,
  ribbonlineNumRoundJoinSubdivisions: w2
}, Symbol.toStringTag, {
  value: "Module"
}));

export {
  t4 as t,
  u,
  r3 as r,
  s5 as s,
  w2 as w,
  y,
  C
};
//# sourceMappingURL=chunk-TO2KOAJE.js.map
