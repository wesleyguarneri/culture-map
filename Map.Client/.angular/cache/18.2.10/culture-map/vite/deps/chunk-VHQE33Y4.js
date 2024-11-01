import {
  n2
} from "./chunk-GQOLRPFL.js";
import {
  t as t3
} from "./chunk-WSWHLWMU.js";
import {
  E as E2
} from "./chunk-PAFFV5BJ.js";
import {
  s as s2
} from "./chunk-6QDMUFEM.js";
import {
  e as e3
} from "./chunk-T3454WZK.js";
import {
  o as o2
} from "./chunk-6YA72G7G.js";
import {
  b as b3
} from "./chunk-EMZQT2MP.js";
import {
  c
} from "./chunk-C7VF4AR2.js";
import {
  t as t2
} from "./chunk-JCWQ2LOQ.js";
import {
  c as c2,
  e2
} from "./chunk-P7OSFLIX.js";
import {
  U2 as U,
  _ as _2,
  g3 as g
} from "./chunk-3HU4B6P4.js";
import {
  t
} from "./chunk-6HBAAUBO.js";
import {
  C,
  D,
  E,
  F,
  G,
  I,
  O,
  R
} from "./chunk-YLE5AYZV.js";
import {
  M,
  b as b2,
  f,
  h as h2,
  i,
  l,
  o
} from "./chunk-JYODC3YQ.js";
import {
  d as d2
} from "./chunk-HD65DNIO.js";
import {
  u
} from "./chunk-7ZJ6P7J7.js";
import {
  w
} from "./chunk-NYQ5CYNR.js";
import {
  _
} from "./chunk-O7UDKFOW.js";
import {
  h
} from "./chunk-3ZXOUEQG.js";
import {
  d
} from "./chunk-6WHTZNUH.js";
import {
  e
} from "./chunk-4Z5SGKRM.js";
import {
  S
} from "./chunk-ANKOCGE2.js";
import {
  y
} from "./chunk-7CJXZOFG.js";
import {
  a3 as a
} from "./chunk-DDYVXG4F.js";
import {
  b,
  s
} from "./chunk-HJY2YILU.js";
import {
  n2 as n
} from "./chunk-WYIDUUN2.js";
import {
  __async
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/views/2d/engine/flow/utils.js
function n3(n5) {
  const i4 = t4(s3(n5)), o5 = i4, a3 = true, l6 = Math.max(i4 / 2, 5), r2 = Math.round(u(n5.maxPathLength) / l6) + 1, u5 = 10, {
    density: c6
  } = n5;
  return {
    smoothing: u(n5.smoothing),
    interpolate: true,
    velocityScale: "flow-from" === n5.flowRepresentation ? 1 : -1,
    verticesPerLine: r2,
    minSpeedThreshold: 1e-3,
    segmentLength: l6,
    maxTurnAngle: 1,
    collisions: a3,
    lineCollisionWidth: o5,
    lineSpacing: u5,
    density: c6
  };
}
function t4(e5) {
  return "constant" === e5.kind ? e5.value[0] : e5.values[e5.values.length - 1];
}
function i2(e5) {
  const n5 = e5.toRgba();
  return [n5[0] / 255, n5[1] / 255, n5[2] / 255, n5[3]];
}
function o3(e5) {
  return {
    kind: "constant",
    value: [0.1, 0.1, 0.1, 1]
  };
}
function s3(n5) {
  if (!n5.hasVisualVariables("size")) return {
    kind: "constant",
    value: [u(n5.trailWidth)]
  };
  const t7 = n5.getVisualVariablesForType("size")[0], i4 = [], o5 = [];
  let s6;
  if (t7.stops) {
    for (const n6 of t7.stops) i4.push(n6.value), o5.push(u(n6.size));
    s6 = t7.stops.length;
  } else i4.push(t7.minDataValue, t7.maxDataValue), o5.push(u(t7.minSize), u(t7.maxSize)), s6 = 2;
  return {
    kind: "ramp",
    stops: i4,
    values: o5,
    count: s6
  };
}
function a2(e5) {
  if (!e5.hasVisualVariables("color")) return {
    kind: "constant",
    value: i2(e5.color)
  };
  const n5 = e5.getVisualVariablesForType("color")[0], t7 = [], o5 = [];
  for (const s6 of n5.stops) t7.push(s6.value), Array.prototype.push.apply(o5, i2(s6.color));
  return {
    kind: "ramp",
    stops: t7,
    values: o5,
    count: n5.stops.length
  };
}
function l2(e5) {
  if (!e5.hasVisualVariables("opacity")) return {
    kind: "constant",
    value: [1]
  };
  const n5 = e5.getVisualVariablesForType("opacity")[0], t7 = [], i4 = [];
  for (const o5 of n5.stops) t7.push(o5.value), i4.push(o5.opacity);
  return {
    kind: "ramp",
    stops: t7,
    values: i4,
    count: n5.stops.length
  };
}
function r(e5, n5, t7, i4) {
  switch (n5) {
    case "int":
      e5.setUniform1iv(t7, i4);
      break;
    case "float":
      e5.setUniform1fv(t7, i4);
      break;
    case "vec2":
      e5.setUniform2fv(t7, i4);
      break;
    case "vec3":
      e5.setUniform3fv(t7, i4);
      break;
    case "vec4":
      e5.setUniform4fv(t7, i4);
  }
}
function u2(e5, n5, t7, i4) {
  "constant" === i4.kind ? r(e5, t7, `u_${n5}`, i4.value) : (r(e5, "float", `u_${n5}_stops`, i4.stops), r(e5, t7, `u_${n5}_values`, i4.values), e5.setUniform1i(`u_${n5}_count`, i4.count));
}
function c3(e5, n5) {
  let t7 = true;
  return t7 = t7 && e5.collisions === n5.collisions, t7 = t7 && e5.density === n5.density, t7 = t7 && e5.interpolate === n5.interpolate, t7 = t7 && e5.lineCollisionWidth === n5.lineCollisionWidth, t7 = t7 && e5.lineSpacing === n5.lineSpacing, t7 = t7 && e5.maxTurnAngle === n5.maxTurnAngle, t7 = t7 && e5.minSpeedThreshold === n5.minSpeedThreshold, t7 = t7 && e5.segmentLength === n5.segmentLength, t7 = t7 && e5.smoothing === n5.smoothing, t7 = t7 && e5.velocityScale === n5.velocityScale, t7 = t7 && e5.verticesPerLine === n5.verticesPerLine, t7;
}
function p(e5, n5) {
  return e5 === n5 || null != e5 && null != n5 && e5.equals(n5);
}
function f2(e5, n5) {
  if (!c3(e5.simulationSettings, n5.simulationSettings)) return false;
  if (!p(e5.timeExtent, n5.timeExtent)) return false;
  let t7 = true;
  return t7 = t7 && e5.loadImagery === n5.loadImagery, t7 = t7 && e5.createFlowMesh === n5.createFlowMesh, t7 = t7 && e5.color.kind === n5.color.kind, t7 = t7 && e5.opacity.kind === n5.opacity.kind, t7 = t7 && e5.size.kind === n5.size.kind, t7;
}

// ../../../node_modules/@arcgis/core/views/2d/engine/flow/styles/Imagery.js
var f3 = class _f {
  constructor(t7) {
    this._params = t7, this.animated = false;
  }
  isCompatible(t7) {
    if (!(t7 instanceof _f)) return false;
    if (!p(this._params.timeExtent, t7._params.timeExtent)) return false;
    let r2 = true;
    return r2 = r2 && this._params.loadImagery === t7._params.loadImagery, r2 = r2 && this._params.color.kind === t7._params.color.kind, r2 = r2 && this._params.opacity.kind === t7._params.opacity.kind, r2;
  }
  load(a3, r2) {
    return __async(this, null, function* () {
      const {
        extent: e5,
        size: s6
      } = a3;
      s(r2);
      const o5 = yield this._params.loadImagery(e5, s6[0], s6[1], this._params.timeExtent, r2);
      return new x(o5, {
        color: this._params.color,
        opacity: this._params.opacity
      });
    });
  }
  render(t7, a3, e5) {
    const {
      context: s6
    } = t7, {
      program: n5
    } = e5;
    s6.setFaceCullingEnabled(false), s6.setBlendingEnabled(true), s6.setBlendFunction(R.ONE, R.ONE_MINUS_SRC_ALPHA), s6.useProgram(n5), n5.setUniformMatrix3fv("u_dvsMat3", a3.dvsMat3), s6.bindTexture(e5.texture, 0), n5.setUniform1i("u_texture", 0), n5.setUniform1f("u_Min", e5.min), n5.setUniform1f("u_Max", e5.max), u2(n5, "color", "vec4", this._params.color), u2(n5, "opacity", "float", this._params.opacity), s6.bindVAO(e5.vertexArray), s6.drawArrays(E.TRIANGLE_STRIP, 0, 4);
  }
};
var d3 = /* @__PURE__ */ new Map();
d3.set("a_position", 0), d3.set("a_texcoord", 1);
var u3 = {
  geometry: [new t("a_position", 2, C.UNSIGNED_SHORT, 0, 8), new t("a_texcoord", 2, C.UNSIGNED_SHORT, 4, 8)]
};
var w2 = {
  vsPath: "raster/flow/imagery",
  fsPath: "raster/flow/imagery",
  attributes: d3
};
var x = class {
  constructor(t7, a3) {
    this._flowData = t7, this._values = a3;
  }
  attach(t7) {
    const {
      context: a3
    } = t7, {
      width: r2,
      height: s6
    } = this._flowData, o5 = c.createVertex(a3, F.STATIC_DRAW, new Uint16Array([0, 0, 0, 1, r2, 0, 1, 1, 0, s6, 0, 0, r2, s6, 1, 0])), i4 = new o2(a3, d3, u3, {
      geometry: o5
    }), _5 = [];
    "ramp" === this._values.color.kind && _5.push("vvColor"), "ramp" === this._values.opacity.kind && _5.push("vvOpacity");
    const f9 = t7.painter.materialManager.getProgram(w2, _5);
    let x2 = 1e6, g3 = -1e6;
    for (let e5 = 0; e5 < s6; e5++) for (let t8 = 0; t8 < r2; t8++) if (0 !== this._flowData.mask[e5 * r2 + t8]) {
      const a4 = this._flowData.data[2 * (e5 * r2 + t8)], s7 = this._flowData.data[2 * (e5 * r2 + t8) + 1], o6 = Math.sqrt(a4 * a4 + s7 * s7);
      x2 = Math.min(x2, o6), g3 = Math.max(g3, o6);
    }
    const y3 = new Uint8Array(4 * r2 * s6);
    for (let e5 = 0; e5 < s6; e5++) for (let t8 = 0; t8 < r2; t8++) if (0 !== this._flowData.mask[e5 * r2 + t8]) {
      const a4 = this._flowData.data[2 * (e5 * r2 + t8)], s7 = this._flowData.data[2 * (e5 * r2 + t8) + 1], o6 = (Math.sqrt(a4 * a4 + s7 * s7) - x2) / (g3 - x2);
      y3[4 * (e5 * r2 + t8)] = 255 * o6, y3[4 * (e5 * r2 + t8) + 1] = 0, y3[4 * (e5 * r2 + t8) + 2] = 0, y3[4 * (e5 * r2 + t8) + 3] = 255;
    } else y3[4 * (e5 * r2 + t8)] = 0, y3[4 * (e5 * r2 + t8) + 1] = 0, y3[4 * (e5 * r2 + t8) + 2] = 0, y3[4 * (e5 * r2 + t8) + 3] = 0;
    const A = new e2();
    A.internalFormat = G.RGBA, A.wrapMode = D.CLAMP_TO_EDGE, A.flipped = true, A.width = r2, A.height = s6;
    const b4 = new c2(a3, A, y3);
    this.vertexArray = i4, this.program = f9, this.texture = b4, this.min = x2, this.max = g3, this._flowData = null;
  }
  detach() {
    this.vertexArray.dispose(), this.texture.dispose();
  }
  get ready() {
    return this.program.compiled;
  }
};

// ../../../node_modules/@arcgis/core/views/2d/engine/flow/styles/Particles.js
var _3 = class __ {
  constructor(t7) {
    this._params = t7;
  }
  get animated() {
    return this._params.flowSpeed > 0;
  }
  isCompatible(t7) {
    return t7 instanceof __ && f2(this._params, t7._params);
  }
  load(e5, a3) {
    return __async(this, null, function* () {
      const {
        extent: s6,
        size: r2
      } = e5;
      s(a3);
      const i4 = yield this._params.loadImagery(s6, r2[0], r2[1], this._params.timeExtent, a3), {
        vertexData: o5,
        indexData: n5
      } = yield this._params.createFlowMesh("Particles", this._params.simulationSettings, i4, a3);
      return new c4(o5, n5, {
        color: this._params.color,
        opacity: this._params.opacity,
        size: this._params.size
      });
    });
  }
  render(t7, e5, s6) {
    const {
      context: n5
    } = t7, {
      program: m3
    } = s6;
    n5.setFaceCullingEnabled(false), n5.setBlendingEnabled(true), n5.setBlendFunction(R.ONE, R.ONE_MINUS_SRC_ALPHA), n5.useProgram(m3), m3.setUniform1f("u_time", e5.time), m3.setUniform1f("u_trailLength", this._params.trailLength), m3.setUniform1f("u_flowSpeed", this._params.flowSpeed), m3.setUniform1f("u_featheringSize", this._params.featheringSize), m3.setUniform1f("u_featheringOffset", this._params.featheringOffset), m3.setUniform1f("u_introFade", this._params.introFade ? 1 : 0), m3.setUniform1f("u_fadeToZero", this._params.fadeToZero ? 1 : 0), m3.setUniform1f("u_decayRate", this._params.decayRate), m3.setUniformMatrix3fv("u_dvsMat3", e5.dvsMat3), m3.setUniformMatrix3fv("u_displayViewMat3", e5.displayViewMat3), u2(m3, "color", "vec4", this._params.color), u2(m3, "opacity", "float", this._params.opacity), u2(m3, "size", "float", this._params.size), n5.bindVAO(s6.vertexArray), n5.drawElements(E.TRIANGLES, s6.indexCount, C.UNSIGNED_INT, 0);
  }
};
var l3 = /* @__PURE__ */ new Map();
l3.set("a_xyts0", 0), l3.set("a_xyts1", 1), l3.set("a_typeIdDurationSeed", 2), l3.set("a_extrudeInfo", 3);
var h3 = {
  geometry: [new t("a_xyts0", 4, C.FLOAT, 0, 64), new t("a_xyts1", 4, C.FLOAT, 16, 64), new t("a_typeIdDurationSeed", 4, C.FLOAT, 32, 64), new t("a_extrudeInfo", 4, C.FLOAT, 48, 64)]
};
var f4 = {
  vsPath: "raster/flow/particles",
  fsPath: "raster/flow/particles",
  attributes: l3
};
var c4 = class {
  constructor(t7, e5, a3) {
    this._vertexData = t7, this._indexData = e5, this._values = a3;
  }
  attach(t7) {
    const {
      context: e5
    } = t7, a3 = c.createVertex(e5, F.STATIC_DRAW, this._vertexData), r2 = c.createIndex(e5, F.STATIC_DRAW, this._indexData), i4 = new o2(e5, l3, h3, {
      geometry: a3
    }, r2), o5 = [];
    "ramp" === this._values.color.kind && o5.push("vvColor"), "ramp" === this._values.opacity.kind && o5.push("vvOpacity"), "ramp" === this._values.size.kind && o5.push("vvSize");
    const p3 = t7.painter.materialManager.getProgram(f4, o5);
    this.vertexArray = i4, this.program = p3, this.indexCount = this._indexData.length, this._vertexData = null, this._indexData = null;
  }
  detach() {
    this.vertexArray.dispose();
  }
  get ready() {
    return this.program.compiled;
  }
};

// ../../../node_modules/@arcgis/core/views/2d/engine/flow/styles/Stack.js
var t5 = class _t {
  constructor(t7) {
    this._styles = t7;
  }
  get animated() {
    return this._styles.reduce((t7, s6) => t7 || s6.animated, false);
  }
  isCompatible(s6) {
    if (!(s6 instanceof _t)) return false;
    if (this._styles.length !== s6._styles.length) return false;
    const e5 = this._styles.length;
    for (let t7 = 0; t7 < e5; t7++) if (!this._styles[t7].isCompatible(s6._styles[t7])) return false;
    return true;
  }
  load(t7, e5) {
    return __async(this, null, function* () {
      const r2 = yield Promise.all(this._styles.map((s6) => s6.load(t7, e5)));
      return new s4(r2);
    });
  }
  render(t7, s6, e5) {
    for (let r2 = 0; r2 < this._styles.length; r2++) this._styles[r2].render(t7, s6, e5.resources[r2]);
  }
};
var s4 = class {
  constructor(t7) {
    this.resources = t7;
  }
  attach(t7) {
    for (const s6 of this.resources) s6.attach(t7);
  }
  detach() {
    for (const t7 of this.resources) t7.detach();
  }
  get ready() {
    return this.resources.reduce((t7, s6) => t7 && s6.ready, true);
  }
};

// ../../../node_modules/@arcgis/core/views/2d/engine/flow/styles/Streamlines.js
var _4 = class __ {
  constructor(e5) {
    this._params = e5;
  }
  get animated() {
    return this._params.flowSpeed > 0;
  }
  isCompatible(e5) {
    return e5 instanceof __ && f2(this._params, e5._params);
  }
  load(t7, a3) {
    return __async(this, null, function* () {
      const {
        extent: s6,
        size: r2
      } = t7;
      s(a3);
      const i4 = yield this._params.loadImagery(s6, r2[0], r2[1], this._params.timeExtent, a3), {
        vertexData: o5,
        indexData: n5
      } = yield this._params.createFlowMesh("Streamlines", this._params.simulationSettings, i4, a3);
      return new d4(o5, n5, {
        color: this._params.color,
        opacity: this._params.opacity,
        size: this._params.size
      });
    });
  }
  render(e5, t7, s6) {
    const {
      context: n5
    } = e5, {
      program: m3
    } = s6;
    n5.setFaceCullingEnabled(false), n5.setBlendingEnabled(true), n5.setBlendFunction(R.ONE, R.ONE_MINUS_SRC_ALPHA), n5.useProgram(m3), m3.setUniform1f("u_time", t7.time), m3.setUniform1f("u_trailLength", this._params.trailLength), m3.setUniform1f("u_flowSpeed", this._params.flowSpeed), m3.setUniform1f("u_featheringSize", this._params.featheringSize), m3.setUniform1f("u_featheringOffset", this._params.featheringOffset), m3.setUniform1f("u_introFade", this._params.introFade ? 1 : 0), m3.setUniform1f("u_fadeToZero", this._params.fadeToZero ? 1 : 0), m3.setUniform1f("u_decayRate", this._params.decayRate), m3.setUniformMatrix3fv("u_dvsMat3", t7.dvsMat3), m3.setUniformMatrix3fv("u_displayViewMat3", t7.displayViewMat3), u2(m3, "color", "vec4", this._params.color), u2(m3, "opacity", "float", this._params.opacity), u2(m3, "size", "float", this._params.size), n5.bindVAO(s6.vertexArray), n5.drawElements(E.TRIANGLES, s6.indexCount, C.UNSIGNED_INT, 0);
  }
};
var l4 = /* @__PURE__ */ new Map();
l4.set("a_positionAndSide", 0), l4.set("a_timeInfo", 1), l4.set("a_extrude", 2), l4.set("a_speed", 3);
var h4 = {
  geometry: [new t("a_positionAndSide", 3, C.FLOAT, 0, 36), new t("a_timeInfo", 3, C.FLOAT, 12, 36), new t("a_extrude", 2, C.FLOAT, 24, 36), new t("a_speed", 1, C.FLOAT, 32, 36)]
};
var f5 = {
  vsPath: "raster/flow/streamlines",
  fsPath: "raster/flow/streamlines",
  attributes: l4
};
var d4 = class {
  constructor(e5, t7, a3) {
    this._vertexData = e5, this._indexData = t7, this._values = a3;
  }
  attach(e5) {
    const {
      context: t7
    } = e5, a3 = c.createVertex(t7, F.STATIC_DRAW, this._vertexData), r2 = c.createIndex(t7, F.STATIC_DRAW, this._indexData), i4 = new o2(t7, l4, h4, {
      geometry: a3
    }, r2), o5 = [];
    "ramp" === this._values.color.kind && o5.push("vvColor"), "ramp" === this._values.opacity.kind && o5.push("vvOpacity"), "ramp" === this._values.size.kind && o5.push("vvSize");
    const p3 = e5.painter.materialManager.getProgram(f5, o5);
    this.vertexArray = i4, this.program = p3, this.indexCount = this._indexData.length, this._vertexData = null, this._indexData = null;
  }
  detach() {
    this.vertexArray.dispose();
  }
  get ready() {
    return this.program.compiled;
  }
};

// ../../../node_modules/@arcgis/core/views/2d/engine/flow/createFlowStyle.js
var m = 4;
var u4 = 1;
var f6 = 0.5;
var p2 = true;
var d5 = true;
var y2 = 2.3;
function g2(g3, w3) {
  const {
    flowSpeed: h7,
    trailLength: v
  } = g3, S2 = n3(g3);
  let j = null;
  const k = {
    opacity: l2(g3),
    size: s3(g3)
  };
  let x2 = a2(g3);
  if ("none" === g3.background) k.color = x2;
  else {
    "constant" === x2.kind && (x2 = {
      kind: "ramp",
      stops: [0, 1],
      values: [0, 0, 0, 1, x2.value[0], x2.value[1], x2.value[2], x2.value[3]],
      count: 2
    });
    const e5 = {
      loadImagery: w3.loadImagery,
      timeExtent: w3.timeExtent,
      color: x2,
      opacity: {
        kind: "constant",
        value: [1]
      }
    };
    j = new f3(e5), k.color = o3();
  }
  const I2 = {
    loadImagery: w3.loadImagery,
    createFlowMesh: w3.createFlowMesh,
    simulationSettings: S2,
    timeExtent: w3.timeExtent,
    trailLength: v,
    flowSpeed: h7,
    featheringSize: u4,
    featheringOffset: f6,
    introFade: p2,
    fadeToZero: d5,
    decayRate: y2,
    color: k.color,
    opacity: k.opacity,
    size: k.size
  }, z = "butt" === g3.trailCap || t4(s3(g3)) <= m ? new _4(I2) : new _3(I2);
  return null != j ? new t5([j, z]) : z;
}

// ../../../node_modules/@arcgis/core/views/2d/engine/flow/BrushFlow.js
var s5 = class extends t3 {
  constructor() {
    super(...arguments), this._visualState = {
      time: 0,
      dvsMat3: e3(),
      displayViewMat3: e3()
    };
  }
  dispose() {
  }
  prepareState(t7) {
    const {
      context: e5
    } = t7;
    e5.setColorMask(true, true, true, true), e5.setStencilFunction(O.EQUAL, 0, 255);
  }
  draw(t7, e5) {
    const {
      requestRender: a3,
      allowDelayedRender: s6
    } = t7, {
      displayData: i4
    } = e5;
    if (null == i4) return;
    if ("loaded" === i4.state.name && i4.attach(t7), "attached" !== i4.state.name) return;
    const r2 = i4.state.resources;
    !s6 || r2.ready || null == a3 ? (this._visualState.time = t7.time / 1e3, this._visualState.dvsMat3 = e5.transforms.displayViewScreenMat3, this._visualState.displayViewMat3 = t7.state.displayViewMat3, i4.flowStyle.render(t7, this._visualState, r2), i4.flowStyle.animated && null != a3 && a3()) : a3();
  }
};

// ../../../node_modules/@arcgis/core/views/2d/engine/flow/FlowContainer.js
var t6 = class extends n2 {
  constructor() {
    super(...arguments), this.flowStyle = null;
  }
  doRender(e5) {
    super.doRender(e5);
  }
  prepareRenderPasses(s6) {
    const t7 = s6.registerRenderPass({
      name: "flow",
      brushes: [s5],
      target: () => this.children,
      drawPhase: E2.MAP
    });
    return [...super.prepareRenderPasses(s6), t7];
  }
};

// ../../../node_modules/@arcgis/core/views/2d/engine/flow/FlowDisplayData.js
var e4 = class {
  constructor(t7, e5, s6, a3) {
    this.state = {
      name: "created"
    }, this.flowStyle = t7, this.extent = e5, this.size = s6, this.pixelRatio = a3;
  }
  load() {
    return __async(this, null, function* () {
      const t7 = new AbortController();
      this.state = {
        name: "loading",
        abortController: t7
      };
      const e5 = {
        extent: this.extent,
        size: this.size,
        pixelRatio: this.pixelRatio
      }, s6 = yield this.flowStyle.load(e5, t7.signal);
      this.state = {
        name: "loaded",
        resources: s6
      };
    });
  }
  attach(e5) {
    if ("loaded" !== this.state.name) return void n.getLogger("esri.views.2d.engine.flow.FlowDisplayData").error("Only loaded resources can be attached.");
    const s6 = this.state.resources;
    s6.attach(e5), this.state = {
      name: "attached",
      resources: s6
    };
  }
  detach() {
    if ("loading" === this.state.name) return this.state.abortController.abort(), void (this.state = {
      name: "detached"
    });
    "attached" === this.state.name && (this.state.resources.detach(), this.state = {
      name: "detached"
    });
  }
  update(t7) {
    if (!this.flowStyle.isCompatible(t7.flowStyle)) return false;
    return !(!this.extent.equals(t7.extent) || this.size[0] !== t7.size[0] || this.size[1] !== t7.size[1] || this.pixelRatio !== t7.pixelRatio) && (this.flowStyle = t7.flowStyle, true);
  }
};

// ../../../node_modules/@arcgis/core/views/2d/engine/flow/FlowDisplayObject.js
var o4 = class extends s2 {
  constructor() {
    super(...arguments), this._displayData = null;
  }
  get displayData() {
    return this._displayData;
  }
  set displayData(t7) {
    this._displayData = t7, this.requestRender();
  }
  clear() {
    null != this._displayData && (this._displayData.detach(), this._displayData = null, this.requestRender());
  }
  setTransform(r2) {
    const {
      displayData: l6
    } = this;
    if (null == l6) return;
    const o5 = l6.extent.xmin, n5 = l6.extent.ymax, p3 = [0, 0];
    r2.toScreen(p3, [o5, n5]);
    const m3 = (l6.extent.xmax - l6.extent.xmin) / l6.size[0] / r2.resolution, c6 = h(r2.rotation), {
      displayViewScreenMat3: x2
    } = this.transforms;
    l(x2, [-1, 1, 0]), f(x2, x2, [2 / (r2.size[0] * r2.pixelRatio), -2 / (r2.size[1] * r2.pixelRatio), 1]), M(x2, x2, [p3[0], p3[1], 0]), h2(x2, x2, c6), f(x2, x2, [m3 * r2.pixelRatio, m3 * r2.pixelRatio, 1]);
  }
  _createTransforms() {
    return {
      displayViewScreenMat3: e3()
    };
  }
};

// ../../../node_modules/@arcgis/core/views/2d/engine/flow/FlowStrategy.js
var m2 = 1.15;
var d6 = class extends S {
  constructor(t7) {
    super(t7), this._flowDisplayObject = new o4(), this._loading = null;
  }
  initialize() {
    this.flowContainer.addChild(this._flowDisplayObject);
  }
  destroy() {
    this._clear(), this.flowContainer.removeAllChildren();
  }
  get updating() {
    return null != this._loading;
  }
  update(t7) {
    const {
      flowStyle: o5
    } = this.flowContainer;
    if (null == o5) return void this._clear();
    const {
      extent: e5,
      rotation: a3,
      resolution: r2,
      pixelRatio: l6
    } = t7.state, p3 = f7(e5, a3);
    p3.expand(m2);
    const c6 = [Math.round((p3.xmax - p3.xmin) / r2), Math.round((p3.ymax - p3.ymin) / r2)], d9 = new e4(o5, p3, c6, l6);
    if (null != this._loading) {
      if (this._loading.update(d9)) return;
      this._loading.detach(), this._loading = null;
    }
    null != this._flowDisplayObject.displayData && this._flowDisplayObject.displayData.update(d9) || (d9.load().then(() => {
      this._flowDisplayObject.clear(), this._flowDisplayObject.displayData = this._loading, this._loading = null;
    }, (t8) => {
      b(t8) || (n.getLogger(this).error("A resource failed to load.", t8), this._loading = null);
    }), this._loading = d9);
  }
  _clear() {
    this._flowDisplayObject.clear(), null != this._loading && (this._loading.detach(), this._loading = null);
  }
};
e([y()], d6.prototype, "_loading", void 0), e([y()], d6.prototype, "flowContainer", void 0), e([y()], d6.prototype, "updating", null), d6 = e([a("esri.views.2d.engine.flow.FlowStrategy")], d6);
var h5 = d6;
function f7(t7, o5) {
  const i4 = new _({
    x: (t7.xmax + t7.xmin) / 2,
    y: (t7.ymax + t7.ymin) / 2,
    spatialReference: t7.spatialReference
  }), s6 = t7.xmax - t7.xmin, a3 = t7.ymax - t7.ymin, r2 = Math.abs(Math.cos(h(o5))), n5 = Math.abs(Math.sin(h(o5))), p3 = r2 * s6 + n5 * a3, m3 = n5 * s6 + r2 * a3, d9 = new w({
    xmin: i4.x - p3 / 2,
    ymin: i4.y - m3 / 2,
    xmax: i4.x + p3 / 2,
    ymax: i4.y + m3 / 2,
    spatialReference: t7.spatialReference
  });
  return d9.centerAt(i4), d9;
}

// ../../../node_modules/@arcgis/core/views/2d/engine/flow/FlowView2D.js
var h6 = class extends S {
  constructor() {
    super(...arguments), this._loadImagery = (t7, e5, i4, o5, r2) => g(this.layer, t7, e5, i4, o5, r2), this._createFlowMesh = (t7, e5, i4, o5) => this.layer.createFlowMesh({
      meshType: t7,
      flowData: i4,
      simulationSettings: e5
    }, {
      signal: o5
    }), this.attached = false, this.type = "flow", this.timeExtent = null, this.redrawOrRefetch = () => __async(this, null, function* () {
      this._updateVisualization();
    });
  }
  get updating() {
    return !this.attached || this._strategy.updating;
  }
  attach() {
    const {
      layer: t7
    } = this, e5 = () => {
      this._loadImagery = (e6, i4, o5, r2, s6) => g(t7, e6, i4, o5, r2, s6), this._updateVisualization();
    };
    "multidimensionalDefinition" in t7 ? this.addHandles(d(() => t7.multidimensionalDefinition, e5)) : this.addHandles([d(() => t7.mosaicRule, e5), d(() => t7.rasterFunction, e5), d(() => t7.definitionExpression, e5)]), this.container = new t6(), this._strategy = new h5({
      flowContainer: this.container
    }), this._updateVisualization();
  }
  detach() {
    this._strategy.destroy(), this.container?.removeAllChildren(), this.container = null, this.removeHandles();
  }
  update(t7) {
    t7.stationary ? this._strategy.update(t7) : this.layerView.requestUpdate();
  }
  hitTest(t7) {
    return new d2({
      attributes: {},
      geometry: t7.clone(),
      layer: this.layer
    });
  }
  moveEnd() {
  }
  doRefresh() {
    return __async(this, null, function* () {
    });
  }
  _updateVisualization() {
    const t7 = this.layer.renderer;
    if (null == t7 || "flow" !== t7.type) return;
    const e5 = g2(t7, {
      loadImagery: this._loadImagery,
      createFlowMesh: this._createFlowMesh,
      timeExtent: this.timeExtent
    });
    this.container.flowStyle = e5, this.layerView.requestUpdate();
  }
};
e([y()], h6.prototype, "_strategy", void 0), e([y()], h6.prototype, "attached", void 0), e([y()], h6.prototype, "container", void 0), e([y()], h6.prototype, "layer", void 0), e([y()], h6.prototype, "layerView", void 0), e([y()], h6.prototype, "type", void 0), e([y()], h6.prototype, "updating", null), e([y()], h6.prototype, "timeExtent", void 0), h6 = e([a("esri.views.2d.engine.flow.FlowView2D")], h6);
var d7 = h6;

// ../../../node_modules/@arcgis/core/views/2d/engine/imagery/BrushVectorField.js
var n4 = new Float32Array([0.27058823529411763, 0.4588235294117647, 0.7098039215686275, 1, 0.396078431372549, 0.5372549019607843, 0.7215686274509804, 1, 0.5176470588235295, 0.6196078431372549, 0.7294117647058823, 1, 0.6352941176470588, 0.7058823529411765, 0.7411764705882353, 1, 0.7529411764705882, 0.8, 0.7450980392156863, 1, 0.8705882352941177, 0.8901960784313725, 0.7490196078431373, 1, 1, 1, 0.7490196078431373, 1, 1, 0.8627450980392157, 0.6313725490196078, 1, 0.9803921568627451, 0.7254901960784313, 0.5176470588235295, 1, 0.9607843137254902, 0.596078431372549, 0.4117647058823529, 1, 0.9294117647058824, 0.4588235294117647, 0.3176470588235294, 1, 0.9098039215686274, 0.08235294117647059, 0.08235294117647059, 1]);
var i3 = new Float32Array([0, 92 / 255, 230 / 255, 1]);
var l5 = {
  beaufort_ft: n4,
  beaufort_m: n4,
  beaufort_km: n4,
  beaufort_mi: n4,
  beaufort_kn: new Float32Array([0.1568627450980392, 0.5725490196078431, 0.7803921568627451, 1, 0.34901960784313724, 0.6352941176470588, 0.7294117647058823, 1, 0.5058823529411764, 0.7019607843137254, 0.6705882352941176, 1, 0.6274509803921569, 0.7607843137254902, 0.6078431372549019, 1, 0.7490196078431373, 0.8313725490196079, 0.5411764705882353, 1, 0.8549019607843137, 0.9019607843137255, 0.4666666666666667, 1, 0.9803921568627451, 0.9803921568627451, 0.39215686274509803, 1, 0.9882352941176471, 0.8352941176470589, 0.3254901960784314, 1, 0.9882352941176471, 0.7019607843137254, 0.4, 1, 0.9803921568627451, 0.5529411764705883, 0.20392156862745098, 1, 0.9686274509803922, 0.43137254901960786, 0.16470588235294117, 1, 0.9411764705882353, 0.2784313725490196, 0.11372549019607843, 1]),
  classified_arrow: new Float32Array([0.2196078431372549, 0.6588235294117647, 0, 1, 0.5450980392156862, 1.2117647058823529, 0, 1, 1, 1, 0, 1, 1, 0.5019607843137255, 0, 1, 1, 0, 0, 1]),
  ocean_current_m: new Float32Array([0.3058823529411765, 0.10196078431372549, 0.6, 1, 0.7019607843137254, 0.10588235294117647, 0.10196078431372549, 1, 0.792156862745098, 0.5019607843137255, 0.10196078431372549, 1, 0.6941176470588235, 0.6941176470588235, 0.6941176470588235, 1]),
  ocean_current_kn: new Float32Array([0, 0, 0, 1, 0, 0.1450980392156863, 0.39215686274509803, 1, 0.3058823529411765, 0.10196078431372549, 0.6, 1, 0.592156862745098, 0, 0.39215686274509803, 1, 0.7019607843137254, 0.10588235294117647, 0.10196078431372549, 1, 0.6941176470588235, 0.3058823529411765, 0.10196078431372549, 1, 0.792156862745098, 0.5019607843137255, 0.10196078431372549, 1, 0.6941176470588235, 0.7019607843137254, 0.20392156862745098, 1, 0.6941176470588235, 0.6941176470588235, 0.6941176470588235, 1]),
  simple_scalar: i3,
  single_arrow: i3,
  wind_speed: new Float32Array([0, 0, 0, 1])
};
var c5 = [0, 20];
var d8 = class extends t3 {
  constructor() {
    super(...arguments), this._desc = {
      magdir: {
        vsPath: "raster/magdir",
        fsPath: "raster/magdir",
        attributes: /* @__PURE__ */ new Map([["a_pos", 0], ["a_offset", 1], ["a_vv", 2]])
      },
      scalar: {
        vsPath: "raster/scalar",
        fsPath: "raster/scalar",
        attributes: /* @__PURE__ */ new Map([["a_pos", 0], ["a_offset", 1], ["a_vv", 2]])
      }
    };
  }
  dispose() {
  }
  prepareState({
    context: e5
  }) {
    e5.setBlendingEnabled(true), e5.setBlendFunctionSeparate(R.ONE, R.ONE_MINUS_SRC_ALPHA, R.ONE, R.ONE_MINUS_SRC_ALPHA), e5.setColorMask(true, true, true, true), e5.setStencilWriteMask(0), e5.setStencilTestEnabled(true), e5.setStencilOp(I.KEEP, I.KEEP, I.REPLACE);
  }
  draw(e5, a3) {
    if (null == a3.source || 0 === a3.source.validPixelCount) return;
    const {
      context: t7,
      timeline: s6
    } = e5;
    if (s6.begin(this.name), t7.setStencilFunction(O.EQUAL, a3.stencilRef, 255), a3.updateVectorFieldVAO(e5), "scalar" === e5.renderPass) {
      const t8 = a3.vaoData.scalar;
      t8 && this._drawScalars(e5, a3, t8.vao, t8.elementCount);
    } else {
      const t8 = a3.vaoData.magdir;
      t8 && this._drawTriangles(e5, a3, t8.vao, t8.elementCount);
    }
    s6.end(this.name);
  }
  _drawTriangles(e5, a3, t7, r2) {
    const {
      context: n5,
      painter: i4,
      requestRender: d9,
      allowDelayedRender: m3
    } = e5, {
      symbolizerParameters: u5
    } = a3, f9 = u5.dataRange ? ["dataRange"] : [];
    "geographic" === u5.rotationType && f9.push("rotationGeographic");
    const _5 = i4.materialManager.getProgram(this._desc.magdir, f9);
    if (m3 && null != d9 && !_5.compiled) return void d9();
    n5.useProgram(_5);
    const {
      coordScale: g3,
      opacity: p3,
      transforms: y3
    } = a3;
    _5.setUniform2fv("u_coordScale", g3), _5.setUniform1f("u_opacity", p3), _5.setUniformMatrix3fv("u_dvsMat3", y3.displayViewScreenMat3);
    const {
      style: S2,
      dataRange: b4,
      rotation: h7,
      symbolPercentRange: v
    } = u5;
    _5.setUniform4fv("u_colors", l5[S2]), _5.setUniform2fv("u_dataRange", b4 || c5), _5.setUniform1f("u_rotation", h7), _5.setUniform2fv("u_symbolPercentRange", v);
    const w3 = this._getSymbolSize(e5, a3);
    _5.setUniform2fv("u_symbolSize", w3), n5.bindVAO(t7), n5.drawElements(E.TRIANGLES, r2, C.UNSIGNED_INT, 0);
  }
  _drawScalars(e5, a3, t7, r2) {
    const {
      context: n5,
      painter: i4,
      requestRender: l6,
      allowDelayedRender: d9
    } = e5, {
      symbolizerParameters: m3
    } = a3, u5 = [];
    "wind_speed" === m3.style ? u5.push("innerCircle") : m3.dataRange && u5.push("dataRange"), "geographic" === m3.rotationType && u5.push("rotationGeographic");
    const f9 = i4.materialManager.getProgram(this._desc.scalar, u5);
    if (d9 && null != l6 && !f9.compiled) return void l6();
    n5.useProgram(f9);
    const {
      coordScale: _5,
      opacity: g3,
      transforms: p3
    } = a3;
    f9.setUniform2fv("u_coordScale", _5), f9.setUniform1f("u_opacity", g3), f9.setUniformMatrix3fv("u_dvsMat3", p3.displayViewScreenMat3);
    const {
      dataRange: y3,
      symbolPercentRange: S2
    } = m3;
    f9.setUniform2fv("u_dataRange", y3 || c5), f9.setUniform2fv("u_symbolPercentRange", S2);
    const b4 = this._getSymbolSize(e5, a3);
    f9.setUniform2fv("u_symbolSize", b4), n5.bindVAO(t7), n5.drawElements(E.TRIANGLES, r2, C.UNSIGNED_INT, 0);
  }
  _getSymbolSize(e5, a3) {
    const t7 = a3.key ? 2 ** (e5.displayLevel - a3.key.level) : a3.resolution / e5.state.resolution, {
      symbolTileSize: r2
    } = a3.symbolizerParameters;
    return [r2 / (Math.round((a3.width - a3.offset[0]) / r2) * r2) / t7, r2 / (Math.round((a3.height - a3.offset[1]) / r2) * r2) / t7];
  }
};

// ../../../node_modules/@arcgis/core/views/2d/engine/imagery/RasterVFDisplayObject.js
var f8 = class extends s2 {
  constructor(t7 = null) {
    super(), this._source = null, this._symbolizerParameters = null, this._vaoInvalidated = true, this.coordScale = [1, 1], this.height = null, this.key = null, this.offset = null, this.stencilRef = 0, this.resolution = null, this.pixelRatio = 1, this.x = 0, this.y = 0, this.rotation = 0, this.rawPixelData = null, this.vaoData = null, this.width = null, this.source = t7;
  }
  destroy() {
    null != this.vaoData && (this.vaoData.magdir?.vao.dispose(), this.vaoData.scalar?.vao.dispose(), this.vaoData = null);
  }
  get symbolizerParameters() {
    return this._symbolizerParameters;
  }
  set symbolizerParameters(t7) {
    JSON.stringify(this._symbolizerParameters) !== JSON.stringify(t7) && (this._symbolizerParameters = t7, this.invalidateVAO());
  }
  get source() {
    return this._source;
  }
  set source(t7) {
    this._source = t7, this.invalidateVAO();
  }
  invalidateVAO() {
    this._vaoInvalidated || null == this.vaoData || (this.vaoData.magdir?.vao.dispose(), this.vaoData.scalar?.vao.dispose(), this.vaoData = null, this._vaoInvalidated = true, this.requestRender());
  }
  updateVectorFieldVAO(t7) {
    if (this._vaoInvalidated) {
      if (this._vaoInvalidated = false, null != this.source && null == this.vaoData) {
        const {
          style: e5
        } = this.symbolizerParameters;
        switch (e5) {
          case "beaufort_ft":
          case "beaufort_km":
          case "beaufort_kn":
          case "beaufort_m":
          case "beaufort_mi":
          case "classified_arrow":
          case "ocean_current_kn":
          case "ocean_current_m":
          case "single_arrow":
            {
              const e6 = U(this.source, this.symbolizerParameters), a3 = this._createVectorFieldVAO(t7.context, e6);
              this.vaoData = {
                magdir: a3
              };
            }
            break;
          case "simple_scalar":
            {
              const e6 = _2(this.source, this.symbolizerParameters), a3 = this._createVectorFieldVAO(t7.context, e6);
              this.vaoData = {
                scalar: a3
              };
            }
            break;
          case "wind_speed": {
            const e6 = U(this.source, this.symbolizerParameters), a3 = this._createVectorFieldVAO(t7.context, e6), s6 = _2(this.source, this.symbolizerParameters), i4 = this._createVectorFieldVAO(t7.context, s6);
            this.vaoData = {
              magdir: a3,
              scalar: i4
            };
          }
        }
      }
      this.ready(), this.requestRender();
    }
  }
  _createTransforms() {
    return {
      displayViewScreenMat3: e3()
    };
  }
  setTransform(r2) {
    const l6 = o(this.transforms.displayViewScreenMat3), [n5, c6] = r2.toScreenNoRotation([0, 0], [this.x, this.y]), h7 = this.resolution / this.pixelRatio / r2.resolution, m3 = h7 * this.width, u5 = h7 * this.height, d9 = Math.PI * this.rotation / 180;
    M(l6, l6, t2(n5, c6)), M(l6, l6, t2(m3 / 2, u5 / 2)), h2(l6, l6, -d9), M(l6, l6, t2(-m3 / 2, -u5 / 2)), b2(l6, l6, t2(m3, u5)), i(this.transforms.displayViewScreenMat3, r2.displayViewMat3, l6);
  }
  onAttach() {
    this.invalidateVAO();
  }
  onDetach() {
    this.invalidateVAO();
  }
  _createVectorFieldVAO(t7, e5) {
    const {
      vertexData: a3,
      indexData: s6
    } = e5, i4 = c.createVertex(t7, F.STATIC_DRAW, new Float32Array(a3)), r2 = c.createIndex(t7, F.STATIC_DRAW, new Uint32Array(s6)), o5 = b3("vector-field", {
      geometry: [{
        location: 0,
        name: "a_pos",
        count: 2,
        type: C.FLOAT,
        normalized: false
      }, {
        location: 1,
        name: "a_offset",
        count: 2,
        type: C.FLOAT,
        normalized: false
      }, {
        location: 2,
        name: "a_vv",
        count: 2,
        type: C.FLOAT,
        normalized: false
      }]
    });
    return {
      vao: new o2(t7, o5.attributes, o5.bufferLayouts, {
        geometry: i4
      }, r2),
      elementCount: s6.length
    };
  }
};

export {
  d7 as d,
  d8 as d2,
  f8 as f
};
//# sourceMappingURL=chunk-VHQE33Y4.js.map
