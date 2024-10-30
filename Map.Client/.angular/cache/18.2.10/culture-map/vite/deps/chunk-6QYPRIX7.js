import {
  a as a2
} from "./chunk-ICUHXX2J.js";
import {
  P,
  u
} from "./chunk-OZG2NNUW.js";
import {
  o as o6
} from "./chunk-KOIKSJSQ.js";
import {
  o as o7
} from "./chunk-VWVZLPC3.js";
import {
  e as e4
} from "./chunk-X2OAE75B.js";
import {
  o as o8
} from "./chunk-SIZK72CP.js";
import {
  o as o5
} from "./chunk-VS26W5Y5.js";
import {
  o as o3
} from "./chunk-WJKYGQOY.js";
import {
  o as o4
} from "./chunk-GY52WOQZ.js";
import {
  e as e3
} from "./chunk-GAYJ4YPJ.js";
import {
  a
} from "./chunk-MFZTGYUJ.js";
import {
  n as n3,
  o as o2
} from "./chunk-SZWWBMQN.js";
import {
  e as e2
} from "./chunk-4MMTPKY4.js";
import {
  n as n2
} from "./chunk-DY7FJHTG.js";
import {
  e
} from "./chunk-BQZBOYBD.js";
import {
  i,
  v
} from "./chunk-J55F4AC2.js";
import {
  c,
  q
} from "./chunk-XTVPEVHA.js";
import {
  j
} from "./chunk-3ZXOUEQG.js";
import {
  o
} from "./chunk-AXVPJBVW.js";
import {
  n
} from "./chunk-OXEPWRM7.js";

// ../../../node_modules/@arcgis/core/chunks/PointRenderer.glsl.js
var j2 = class extends n3 {
  constructor() {
    super(...arguments), this.clipBox = i(v), this.useFixedSizes = false, this.useRealWorldSymbolSizes = false, this.scaleFactor = 1, this.minSizePx = 0, this.size = 0, this.sizePx = 0;
  }
  get fixedSize() {
    return this.drawScreenSpace ? this.sizePx : this.size;
  }
  get screenMinSize() {
    return this.useFixedSizes ? 0 : this.minSizePx;
  }
  get drawScreenSpace() {
    return this.useFixedSizes && !this.useRealWorldSymbolSizes;
  }
};
var P2 = class extends u {
  constructor(e5, i2, o9) {
    super(e5), this.origin = e5, this.isLeaf = i2, this.splatSize = o9;
  }
};
function y(r) {
  const s = new o8(), n4 = r.output === o3.Color, c2 = r.output === o3.Highlight, {
    vertex: l,
    fragment: d
  } = s;
  return s.include(P, r), s.attributes.add(e2.POSITION, "vec3"), s.attributes.add(e2.COLOR, "vec3"), l.uniforms.add(new o6("modelView", (e5, r2) => c(R, r2.camera.viewMatrix, q(R, e5.origin))), new e3("proj", (e5, i2) => i2.camera.projectionMatrix), new o7("screenMinMaxSize", (e5, i2, o9) => o5(F, o9.useFixedSizes ? 0 : o9.minSizePx * i2.camera.pixelRatio, O(e5.isLeaf) * i2.camera.pixelRatio)), r.useFixedSizes ? new e4("pointScale", (e5, i2) => o5(F, e5.fixedSize * i2.camera.pixelRatio, i2.camera.fullHeight)) : new o7("pointScale", (e5, i2, o9) => o5(F, e5.splatSize * o9.scaleFactor * i2.camera.pixelRatio, i2.camera.fullHeight / i2.camera.pixelRatio))), r.clippingEnabled ? l.uniforms.add(new o4("clipMin", (e5, i2, o9) => o(B, o9.clipBox[0] - e5.origin[0], o9.clipBox[1] - e5.origin[1], o9.clipBox[2] - e5.origin[2])), new o4("clipMax", (e5, i2, o9) => o(B, o9.clipBox[3] - e5.origin[0], o9.clipBox[4] - e5.origin[1], o9.clipBox[5] - e5.origin[2]))) : (l.constants.add("clipMin", "vec3", [-j, -j, -j]), l.constants.add("clipMax", "vec3", [j, j, j])), n4 && s.varyings.add("vColor", "vec3"), l.code.add(o2`
    void main(void) {
      // Move clipped points outside of clipspace
      if (position.x < clipMin.x || position.y < clipMin.y || position.z < clipMin.z ||
        position.x > clipMax.x || position.y > clipMax.y || position.z > clipMax.z) {
        gl_Position = vec4(0.0,0.0,0.0,2.0);
        gl_PointSize = 0.0;
        return;
      }

      if (rejectBySlice(position)) {
        gl_Position = vec4(0.0,0.0,0.0,2.0);
        gl_PointSize = 0.0;
        return;
      }

      // Position in camera space
      vec4 camera = modelView * vec4(position, 1.0);

      float pointSize = pointScale.x;
      vec4 position = proj * camera;
     ${r.drawScreenSize ? o2`
      float clampedScreenSize = pointSize;` : o2`
      float pointRadius = 0.5 * pointSize;
      vec4 cameraOffset = camera + vec4(0.0, pointRadius, 0.0, 0.0);
      vec4 positionOffset = proj * cameraOffset;
      float radius = abs(positionOffset.y - position.y);
      float viewHeight = pointScale.y;
      // screen diameter = (2 * r / w) * (h / 2)
      float screenPointSize = (radius / position.w) * viewHeight;
      float clampedScreenSize = clamp(screenPointSize, screenMinMaxSize.x, screenMinMaxSize.y);
      // Shift towards camera, to move rendered point out of terrain i.e. to
      // the camera-facing end of the virtual point when considering it as a
      // 3D sphere.
      camera.xyz -= normalize(camera.xyz) * pointRadius * clampedScreenSize / screenPointSize;
      position = proj * camera;`}

     gl_PointSize = clampedScreenSize;
     gl_Position = position;

     ${n4 ? o2`vColor = color;` : ""}
    }
  `), d.include(a, r), c2 && s.include(a2, r), d.code.add(o2`
    void main(void) {
        vec2 vOffset = gl_PointCoord - vec2(0.5, 0.5);
        float r2 = dot(vOffset, vOffset);

        if (r2 > 0.25) {
          discard;
        }
        ${c2 ? o2`outputHighlight();` : ""}
        ${n4 ? o2`fragColor = vec4(vColor, 1.0);` : ""}
    }
  `), s;
}
function O(e5) {
  return e5 ? 256 : 64;
}
var R = e();
var B = n();
var F = n2();
var _ = Object.freeze(Object.defineProperty({
  __proto__: null,
  PointRendererDrawParameters: P2,
  PointRendererPassParameters: j2,
  build: y,
  getMaxPointSizeScreenspace: O
}, Symbol.toStringTag, {
  value: "Module"
}));

export {
  j2 as j,
  P2 as P,
  y,
  O,
  _
};
//# sourceMappingURL=chunk-6QYPRIX7.js.map
