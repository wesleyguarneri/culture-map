import {
  T
} from "./chunk-EMZQT2MP.js";
import {
  l as l2
} from "./chunk-PUH7YYDT.js";
import {
  r
} from "./chunk-KUYTX4V6.js";
import {
  s as s3
} from "./chunk-O7ZVERIH.js";
import {
  s as s2
} from "./chunk-SYYDVGKY.js";
import {
  h
} from "./chunk-PVO5NM6Q.js";
import {
  a as a2
} from "./chunk-R3F4JMNC.js";
import {
  d
} from "./chunk-6WHTZNUH.js";
import {
  e,
  t as t2
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
  l2 as l,
  n2 as n,
  s2 as s,
  t
} from "./chunk-WYIDUUN2.js";
import {
  has
} from "./chunk-DXLOWWK7.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/TechniqueType.js
var e2;
!function(e7) {
  e7[e7.Fill = 0] = "Fill", e7[e7.PatternFill = 1] = "PatternFill", e7[e7.ComplexFill = 2] = "ComplexFill", e7[e7.OutlineFill = 3] = "OutlineFill", e7[e7.PatternOutlineFill = 4] = "PatternOutlineFill", e7[e7.ComplexOutlineFill = 5] = "ComplexOutlineFill", e7[e7.Marker = 6] = "Marker", e7[e7.PieChart = 7] = "PieChart", e7[e7.Line = 8] = "Line", e7[e7.TexturedLine = 9] = "TexturedLine", e7[e7.Text = 10] = "Text", e7[e7.Label = 11] = "Label", e7[e7.Heatmap = 12] = "Heatmap", e7[e7.DotDensity = 13] = "DotDensity", e7[e7.Test = 14] = "Test";
}(e2 || (e2 = {}));

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/constants.js
var i;
!function(i4) {
  i4[i4.Geographic = 0] = "Geographic", i4[i4.Arithmatic = 1] = "Arithmatic";
}(i || (i = {}));
var t3 = 3.14159265359 / 180;
var c = 3.14159265359 / 128;
var r2 = 180 / 3.141592654;
var a3 = 1 / 8;
var o = 1;
var h2 = 1.1;
var n2 = 1;
var p = 1 / 4;
var g = 1 / 8;
var A = 24;
var G = 8;
var s4 = 1e-5;
var u = 0.05;
var k = 1e-30;
var q = 4;
var B = 0;
var C = 2;
var D = 2;
var E = 3;
var F = 0;
var H = 3;
var I = 16777216;

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/ShaderBuilder2D.js
var s5 = () => n.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");
var i2 = class {
  constructor() {
    this._includedModules = /* @__PURE__ */ new Map();
  }
  include(e7, r6) {
    this._includedModules.has(e7) ? this._includedModules.get(e7) : (this._includedModules.set(e7, r6), e7(this.builder, r6));
  }
};
var o2 = class extends i2 {
  constructor() {
    super(...arguments), this.vertex = new u2(), this.fragment = new u2(), this.attributes = new m(), this.varyings = new h3(), this.extensions = new l3(), this.constants = new d2();
  }
  get fragmentUniforms() {
    return this.fragment.uniforms.entries;
  }
  get builder() {
    return this;
  }
  generate(e7, r6 = true) {
    const t9 = this.extensions.generateSource(e7), n9 = this.attributes.generateSource(e7), s10 = this.varyings.generateSource(e7), i4 = "vertex" === e7 ? this.vertex : this.fragment, o6 = i4.uniforms.generateSource(), a7 = i4.code.generateSource(), c4 = "vertex" === e7 ? g2 : _(r6), u5 = this.constants.generateSource().concat(i4.constants.generateSource());
    return `${r6 ? "#version 300 es" : ""}
${t9.join("\n")}
${c4}
${u5.join("\n")}
${o6.join("\n")}
${n9.join("\n")}
${s10.join("\n")}
${a7.join("\n")}`;
  }
  generateBindPass(e7) {
    const r6 = /* @__PURE__ */ new Map();
    this.vertex.uniforms.entries.forEach((e8) => {
      const n10 = e8.bind[a2.Pass];
      n10 && r6.set(e8.name, n10);
    }), this.fragment.uniforms.entries.forEach((e8) => {
      const n10 = e8.bind[a2.Pass];
      n10 && r6.set(e8.name, n10);
    });
    const n9 = Array.from(r6.values()), s10 = n9.length;
    return (r7, t9) => {
      for (let i4 = 0; i4 < s10; ++i4) n9[i4](e7, r7, t9);
    };
  }
  generateBindDraw(e7) {
    const r6 = /* @__PURE__ */ new Map();
    this.vertex.uniforms.entries.forEach((e8) => {
      const n10 = e8.bind[a2.Draw];
      n10 && r6.set(e8.name, n10);
    }), this.fragment.uniforms.entries.forEach((e8) => {
      const n10 = e8.bind[a2.Draw];
      n10 && r6.set(e8.name, n10);
    });
    const n9 = Array.from(r6.values()), s10 = n9.length;
    return (r7, t9, i4) => {
      for (let o6 = 0; o6 < s10; ++o6) n9[o6](e7, r7, t9, i4);
    };
  }
};
var a4 = class {
  constructor() {
    this._entries = /* @__PURE__ */ new Map();
  }
  add(...e7) {
    for (const r6 of e7) this._add(r6);
  }
  get(e7) {
    return this._entries.get(e7);
  }
  _add(r6) {
    if (null != r6) {
      if (this._entries.has(r6.name) && !this._entries.get(r6.name).equals(r6)) throw new s(`Duplicate uniform name ${r6.name} for different uniform type`);
      this._entries.set(r6.name, r6);
    } else s5().error(`Trying to add null Uniform from ${new Error().stack}.`);
  }
  generateSource() {
    return Array.from(this._entries.values()).map((e7) => null != e7.arraySize ? `uniform ${e7.type} ${e7.name}[${e7.arraySize}];` : `uniform ${e7.type} ${e7.name};`);
  }
  get entries() {
    return Array.from(this._entries.values());
  }
};
var c2 = class {
  constructor() {
    this._entries = new Array();
  }
  add(e7) {
    this._entries.push(e7);
  }
  generateSource() {
    return this._entries;
  }
};
var u2 = class extends i2 {
  constructor() {
    super(...arguments), this.uniforms = new a4(), this.code = new c2(), this.constants = new d2();
  }
  get builder() {
    return this;
  }
};
var m = class {
  constructor() {
    this._entries = new Array();
  }
  add(e7, r6) {
    this._entries.push([e7, r6]);
  }
  generateSource(e7) {
    return "fragment" === e7 ? [] : this._entries.map((e8) => `in ${e8[1]} ${e8[0]};`);
  }
};
var h3 = class {
  constructor() {
    this._entries = /* @__PURE__ */ new Map();
  }
  add(e7, r6) {
    this._entries.has(e7) && s2(this._entries.get(e7) === r6), this._entries.set(e7, r6);
  }
  generateSource(e7) {
    const r6 = new Array();
    return this._entries.forEach((t9, n9) => r6.push("vertex" === e7 ? `out ${t9} ${n9};` : `in ${t9} ${n9};`)), r6;
  }
};
var l3 = class _l {
  constructor() {
    this._entries = /* @__PURE__ */ new Set();
  }
  add(e7) {
    this._entries.add(e7);
  }
  generateSource(e7) {
    const r6 = "vertex" === e7 ? _l.ALLOWLIST_VERTEX : _l.ALLOWLIST_FRAGMENT;
    return Array.from(this._entries).filter((e8) => r6.includes(e8)).map((e8) => `#extension ${e8} : enable`);
  }
};
l3.ALLOWLIST_FRAGMENT = ["GL_EXT_shader_texture_lod", "GL_OES_standard_derivatives"], l3.ALLOWLIST_VERTEX = [];
var d2 = class _d {
  constructor() {
    this._entries = /* @__PURE__ */ new Set();
  }
  add(e7, r6, t9) {
    let n9 = "ERROR_CONSTRUCTOR_STRING";
    switch (r6) {
      case "float":
        n9 = _d._numberToFloatStr(t9);
        break;
      case "int":
        n9 = _d._numberToIntStr(t9);
        break;
      case "bool":
        n9 = t9.toString();
        break;
      case "vec2":
        n9 = `vec2(${_d._numberToFloatStr(t9[0])},                            ${_d._numberToFloatStr(t9[1])})`;
        break;
      case "vec3":
        n9 = `vec3(${_d._numberToFloatStr(t9[0])},                            ${_d._numberToFloatStr(t9[1])},                            ${_d._numberToFloatStr(t9[2])})`;
        break;
      case "vec4":
        n9 = `vec4(${_d._numberToFloatStr(t9[0])},                            ${_d._numberToFloatStr(t9[1])},                            ${_d._numberToFloatStr(t9[2])},                            ${_d._numberToFloatStr(t9[3])})`;
        break;
      case "ivec2":
        n9 = `ivec2(${_d._numberToIntStr(t9[0])},                             ${_d._numberToIntStr(t9[1])})`;
        break;
      case "ivec3":
        n9 = `ivec3(${_d._numberToIntStr(t9[0])},                             ${_d._numberToIntStr(t9[1])},                             ${_d._numberToIntStr(t9[2])})`;
        break;
      case "ivec4":
        n9 = `ivec4(${_d._numberToIntStr(t9[0])},                             ${_d._numberToIntStr(t9[1])},                             ${_d._numberToIntStr(t9[2])},                             ${_d._numberToIntStr(t9[3])})`;
        break;
      case "mat2":
      case "mat3":
      case "mat4":
        n9 = `${r6}(${Array.prototype.map.call(t9, (e8) => _d._numberToFloatStr(e8)).join(", ")})`;
    }
    return this._entries.add(`const ${r6} ${e7} = ${n9};`), this;
  }
  static _numberToIntStr(e7) {
    return e7.toFixed(0);
  }
  static _numberToFloatStr(e7) {
    return Number.isInteger(e7) ? e7.toFixed(1) : e7.toString();
  }
  generateSource() {
    return Array.from(this._entries);
  }
};
function _(e7 = true) {
  return `#ifdef GL_FRAGMENT_PRECISION_HIGH
  precision highp float;
  precision highp sampler2D;
#else
  precision mediump float;
  precision mediump sampler2D;
#endif
${e7 ? "out vec4 fragColor;" : ""}
`;
}
var g2 = "precision highp float;\nprecision highp sampler2D;";

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/graph/ShaderGraphNode.js
function t4(t9) {
  return t9.split(" ").map((t10, e7) => e7 > 0 ? t10.charAt(0).toUpperCase() + t10.slice(1) : t10).join("");
}
function e3(t9, e7) {
  const s10 = [];
  for (s10.push(e7); s10.length; ) {
    const e8 = s10.pop();
    if ("object" == typeof e8 && !t9.has(e8.uid)) {
      t9.add(e8.uid);
      for (const t10 of e8.children) s10.push(t10);
    }
  }
}
var s6 = class _s {
  constructor() {
    this.uid = _s.NodeCount++, this._debugName = null, this._isMutable = false, this.isImplicit = false;
  }
  get isMutable() {
    return this._isMutable;
  }
  setMutable() {
    return this._isMutable = true, this;
  }
  setDebugName(e7) {
    return e7 = t4(e7), this._debugName = e7, this.isImplicit && this.children[0] instanceof _s && this.children[0].setDebugName(e7), this;
  }
  get debugInfo() {
    return {
      name: this._debugName ?? ""
    };
  }
  cloneInto(t9) {
    t9._debugName = this._debugName, t9._isMutable = this._isMutable, t9.isImplicit = this.isImplicit, t9.uid = this.uid;
  }
};
function i3(t9) {
  return "object" == typeof t9 ? t9.clone() : t9;
}
s6.NodeCount = 0;
var r3 = class extends s6 {
  constructor() {
    super(...arguments), this.shaderType = "primitive-node";
  }
};
var n3 = class _n extends s6 {
  constructor(t9) {
    super(), this.child = t9, this.shaderType = "scope-node";
  }
  get children() {
    return [this.child];
  }
  clone() {
    const t9 = new _n(i3(this.child));
    return this.cloneInto(t9), t9;
  }
};
var o3 = class _o extends s6 {
  constructor(t9, e7, s10) {
    super(), this.property = t9, this.target = e7, this.returnType = s10, this.shaderType = "property-access-node";
  }
  get children() {
    const t9 = [this.target];
    return "string" != typeof this.property && t9.push(this.property), t9;
  }
  clone() {
    const t9 = new _o(this.property, i3(this.target), this.returnType);
    return this.cloneInto(t9), t9;
  }
};
var c3 = class _c extends s6 {
  constructor(t9, e7, s10) {
    super(), this.condition = t9, this.ifTrue = e7, this.ifFalse = s10, this.shaderType = "condition-node";
  }
  get children() {
    return [this.condition, this.ifTrue, this.ifFalse];
  }
  clone() {
    const t9 = i3(this.ifTrue), e7 = this.ifFalse ? i3(this.ifFalse) : null, s10 = new _c(this.condition, t9, e7);
    return this.cloneInto(s10), s10;
  }
};
var u3 = class _u extends s6 {
  constructor(t9, e7, s10, i4) {
    super(), this.captureList = t9, this.returnType = e7, this.generator = i4, this.shaderType = "block-node", s10 && (this.subgraph = new n3(s10));
  }
  get children() {
    return Object.keys(this.captureList).map((t9) => this.captureList[t9]).concat(this.subgraph ?? []);
  }
  clone() {
    const t9 = {};
    for (const s10 in this.captureList) t9[s10] = i3(this.captureList[s10]);
    const e7 = new _u(t9, this.returnType, this.subgraph ? i3(this.subgraph.child) : this.subgraph, this.generator);
    return this.cloneInto(e7), e7;
  }
};
var p2 = class _p extends s6 {
  constructor(t9, e7, s10, i4, r6, n9 = false) {
    super(), this.token = t9, this._children = e7, this.isInfix = s10, this.isPropertyAccess = i4, this.returnType = r6, this.isTernary = n9, this.shaderType = "function-node";
  }
  get children() {
    return this._children;
  }
  clone() {
    const t9 = new _p(this.token, this._children.map(i3), this.isInfix, this.isPropertyAccess, this.returnType, this.isTernary);
    return this.cloneInto(t9), t9;
  }
};

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/graph/glsl.js
var s7;
var l4;
var h4;
var f;
var a5;
var p3;
var d3;
var w;
var y2;
var m2;
var v;
var b;
var I2;
var x;
function z(t9) {
  const n9 = [["float", "vec2", "vec3", "vec4"], ["int", "ivec2", "ivec3", "ivec4"], ["uint", "uvec2", "uvec3", "uvec4"], ["bool", "bvec2", "bvec3", "bvec4"]];
  for (const e7 of n9) if (e7.includes(t9)) return e7.map((t10) => et[t10]);
  throw new Error("Unable to find type family");
}
function D2(t9) {
  return new Proxy(t9, {
    get(n9, e7) {
      if ("constructor" === e7) return new Proxy(n9.constructor, {
        construct: (t10, n10, e8) => D2(new t10(...n10))
      });
      if (e7 in n9) return n9[e7];
      if ("string" == typeof e7) {
        const n10 = z(t9.type);
        return ft(t9, e7, n10[e7.length - 1]);
      }
    }
  });
}
function N(t9) {
  return new Proxy(t9, {
    construct: (t10, n9, e7) => D2(new t10(...n9))
  });
}
function P(t9) {
  return new Proxy(t9, {
    get(n9, e7) {
      if (e7 in n9) return n9[e7];
      if ("string" == typeof e7) {
        const n10 = parseInt(e7, 10);
        if (!isNaN(n10)) return ft(t9, `[${n10}]`, t9.elementType.constructor);
      }
    }
  });
}
function q2(t9) {
  return new Proxy(t9, {
    construct: (t10, n9, e7) => P(new t10(...n9))
  });
}
var B2 = class extends Error {
};
var U = s7 = class extends r3 {
  constructor(t9, n9) {
    super(), this.elementType = t9, this.size = n9, this.children = [], this.type = "array";
  }
  clone() {
    const t9 = new s7(this.elementType, this.size);
    return super.cloneInto(t9), t9;
  }
  get(t9) {
    if ("number" == typeof t9) {
      const n9 = new O(t9);
      return n9.isImplicit = true, ft(this, n9, this.elementType.constructor);
    }
    return ft(this, t9, this.elementType.constructor);
  }
  last() {
    return this.get(this.size - 1);
  }
  first() {
    return this.get(0);
  }
  findIndex(t9, n9, e7) {
    return bt(this, t9, n9, e7);
  }
  glslFindIndex(t9, n9, e7) {
    return It(this, t9, n9, e7);
  }
  static ofType(t9, n9) {
    const e7 = {
      construct: (e8, r6) => new s7(new t9(), n9)
    };
    return new Proxy(s7, e7);
  }
};
U.type = "array", U = s7 = e([q2], U);
var S2 = class _S extends r3 {
  constructor() {
    super(...arguments), this.type = "sampler2D", this.children = [];
  }
  clone() {
    const t9 = new _S();
    return t9.children = this.children.map(i3), super.cloneInto(t9), t9;
  }
};
S2.type = "sampler2D";
var j = class _j extends r3 {
  constructor(t9) {
    super(), this.type = "float", this.children = [t9];
  }
  clone() {
    const t9 = new _j(i3(this.children[0]));
    return super.cloneInto(t9), t9;
  }
  multiply(t9) {
    return Tt(this, "number" == typeof t9 ? K(t9, _j) : t9);
  }
  divide(t9) {
    return $t(this, "number" == typeof t9 ? K(t9, _j) : t9);
  }
  add(t9) {
    return Ft(this, "number" == typeof t9 ? K(t9, _j) : t9);
  }
  subtract(t9) {
    return kt(this, "number" == typeof t9 ? K(t9, _j) : t9);
  }
};
j.type = "float";
var C2 = l4 = class extends r3 {
  constructor(t9, n9) {
    super(), this.type = "vec2", this.children = [t9, n9].filter((t10) => null != t10);
  }
  clone() {
    const t9 = new l4(i3(this.children[0]), i3(this.children[1]));
    return super.cloneInto(t9), t9;
  }
  get 0() {
    return ft(this, "[0]", j);
  }
  get 1() {
    return ft(this, "[1]", j);
  }
  get 2() {
    throw new B2();
  }
  get 3() {
    throw new B2();
  }
  multiply(t9) {
    return Tt(this, "number" == typeof t9 ? K(t9, j) : t9);
  }
  divide(t9) {
    return $t(this, "number" == typeof t9 ? K(t9, j) : t9);
  }
  add(t9) {
    return Ft(this, "number" == typeof t9 ? K(t9, j) : t9);
  }
  subtract(t9) {
    return kt(this, "number" == typeof t9 ? K(t9, j) : t9);
  }
};
C2.type = "vec2", C2 = l4 = e([N], C2);
var G2 = h4 = class extends r3 {
  constructor(t9, n9, e7) {
    super(), this.type = "vec3", this.children = [t9, n9, e7].filter((t10) => null != t10);
  }
  get 0() {
    return ft(this, "[0]", j);
  }
  get 1() {
    return ft(this, "[1]", j);
  }
  get 2() {
    return ft(this, "[2]", j);
  }
  get 3() {
    throw new B2();
  }
  clone() {
    const t9 = new h4(i3(this.children[0]), i3(this.children[1]), i3(this.children[2]));
    return super.cloneInto(t9), t9;
  }
  multiply(t9) {
    return Tt(this, "number" == typeof t9 ? K(t9, j) : t9);
  }
  divide(t9) {
    return $t(this, "number" == typeof t9 ? K(t9, j) : t9);
  }
  add(t9) {
    return Ft(this, "number" == typeof t9 ? K(t9, j) : t9);
  }
  subtract(t9) {
    return kt(this, "number" == typeof t9 ? K(t9, j) : t9);
  }
};
G2.type = "vec3", G2 = h4 = e([N], G2);
var H2 = f = class extends r3 {
  constructor(t9, n9, e7, r6) {
    super(), this.type = "vec4", this.children = [t9, n9, e7, r6].filter((t10) => null != t10);
  }
  clone() {
    const t9 = new f(i3(this.children[0]), i3(this.children[1]), i3(this.children[2]), i3(this.children[3]));
    return super.cloneInto(t9), t9;
  }
  get 0() {
    return ft(this, "[0]", j);
  }
  get 1() {
    return ft(this, "[1]", j);
  }
  get 2() {
    return ft(this, "[2]", j);
  }
  get 3() {
    return ft(this, "[3]", j);
  }
  multiply(t9) {
    return Tt(this, "number" == typeof t9 ? K(t9, j) : t9);
  }
  divide(t9) {
    return $t(this, "number" == typeof t9 ? K(t9, j) : t9);
  }
  add(t9) {
    return Ft(this, "number" == typeof t9 ? K(t9, j) : t9);
  }
  subtract(t9) {
    return kt(this, "number" == typeof t9 ? K(t9, j) : t9);
  }
};
H2.type = "vec4", H2 = f = e([N], H2);
var M = a5 = class extends r3 {
  constructor(t9) {
    super(), this.type = "uint", this.children = [t9];
  }
  clone() {
    const t9 = new a5(i3(this.children[0]));
    return super.cloneInto(t9), t9;
  }
};
M.type = "uint", M = a5 = e([N], M);
var R = p3 = class extends r3 {
  constructor(t9, n9) {
    super(), this.type = "uvec2", this.children = [t9, n9].filter((t10) => null != t10);
  }
  clone() {
    const t9 = new p3(i3(this.children[0]), i3(this.children[1]));
    return super.cloneInto(t9), t9;
  }
};
R.type = "uvec2", R = p3 = e([N], R);
var A2 = d3 = class extends r3 {
  constructor(t9, n9, e7) {
    super(), this.type = "uvec3", this.children = [t9, n9, e7].filter((t10) => null != t10);
  }
  clone() {
    const t9 = new d3(i3(this.children[0]), i3(this.children[1]), i3(this.children[2]));
    return super.cloneInto(t9), t9;
  }
};
A2.type = "uvec3", A2 = d3 = e([N], A2);
var X = w = class extends r3 {
  constructor(t9, n9, e7, r6) {
    super(), this.type = "uvec4", this.children = [t9, n9, e7, r6].filter((t10) => null != t10);
  }
  clone() {
    const t9 = new w(i3(this.children[0]), i3(this.children[1]), i3(this.children[2]), i3(this.children[3]));
    return super.cloneInto(t9), t9;
  }
};
X.type = "uvec4", X = w = e([N], X);
var Y = class _Y extends r3 {
  constructor(t9) {
    super(), this.type = "bool", this.children = [t9];
  }
  and(t9) {
    return Rt(this, t9);
  }
  or(t9) {
    return Ht(this, t9);
  }
  clone() {
    const t9 = new _Y(i3(this.children[0]));
    return super.cloneInto(t9), t9;
  }
};
Y.type = "bool";
var _2 = y2 = class extends r3 {
  constructor(t9, n9) {
    super(), this.type = "bvec2", this.children = [t9, n9].filter((t10) => null != t10);
  }
  all() {
    return Jt(this);
  }
  any() {
    return Kt(this);
  }
  clone() {
    const t9 = new y2(i3(this.children[0]), i3(this.children[1]));
    return super.cloneInto(t9), t9;
  }
};
_2.type = "bvec2", _2 = y2 = e([N], _2);
var J = m2 = class extends r3 {
  constructor(t9, n9, e7) {
    super(), this.type = "bvec3", this.children = [t9, n9, e7].filter((t10) => null != t10);
  }
  all() {
    return Jt(this);
  }
  any() {
    return Kt(this);
  }
  clone() {
    const t9 = new m2(i3(this.children[0]), i3(this.children[1]), i3(this.children[2]));
    return super.cloneInto(t9), t9;
  }
};
function K(t9, n9) {
  if ("number" == typeof t9) {
    return new n9(t9);
  }
  return t9;
}
J.type = "bvec3", J = m2 = e([N], J);
var L = v = class extends r3 {
  constructor(t9, n9, e7, r6) {
    super(), this.type = "bvec4", this.children = [t9, n9, e7, r6].filter((t10) => null != t10);
  }
  all() {
    return Jt(this);
  }
  any() {
    return Kt(this);
  }
  clone() {
    const t9 = new v(i3(this.children[0]), i3(this.children[1]), i3(this.children[2]), i3(this.children[3]));
    return super.cloneInto(t9), t9;
  }
};
L.type = "bvec4", L = v = e([N], L);
var O = class _O extends r3 {
  constructor(t9) {
    super(), this.type = "int", this.children = [t9];
  }
  multiply(t9) {
    return Tt(this, K(t9, _O));
  }
  add(t9) {
    return Ft(this, K(t9, _O));
  }
  subtract(t9) {
    return kt(this, K(t9, _O));
  }
  divide(t9) {
    return $t(this, K(t9, _O));
  }
  clone() {
    const t9 = new _O(i3(this.children[0]));
    return super.cloneInto(t9), t9;
  }
};
O.type = "int";
var Q = b = class extends r3 {
  constructor(t9, n9) {
    super(), this.type = "ivec2", this.children = [t9, n9].filter((t10) => null != t10);
  }
  clone() {
    const t9 = new b(i3(this.children[0]), i3(this.children[1]));
    return super.cloneInto(t9), t9;
  }
};
Q.type = "ivec2", Q = b = e([N], Q);
var V = I2 = class extends r3 {
  constructor(t9, n9, e7) {
    super(), this.type = "ivec3", this.children = [t9, n9, e7].filter((t10) => null != t10);
  }
  clone() {
    const t9 = new I2(i3(this.children[0]), i3(this.children[1]), i3(this.children[2]));
    return super.cloneInto(t9), t9;
  }
};
V.type = "ivec3", V = I2 = e([N], V);
var W = x = class extends r3 {
  constructor(t9, n9, e7, r6) {
    super(), this.type = "ivec4", this.children = [t9, n9, e7, r6].filter((t10) => null != t10);
  }
  clone() {
    const t9 = new x(i3(this.children[0]), i3(this.children[1]), i3(this.children[2]), i3(this.children[3]));
    return super.cloneInto(t9), t9;
  }
};
W.type = "ivec4", W = x = e([N], W);
var Z = class _Z extends r3 {
  constructor(t9, n9, e7, r6) {
    super(), this.type = "mat2", this.children = [t9, n9, e7, r6];
  }
  clone() {
    const t9 = new _Z(i3(this.children[0]), i3(this.children[1]), i3(this.children[2]), i3(this.children[3]));
    return super.cloneInto(t9), t9;
  }
};
Z.type = "mat2";
var tt = class _tt extends r3 {
  static identity() {
    return new _tt(1, 0, 0, 0, 1, 0, 0, 0, 1);
  }
  static fromRotation(t9) {
    const n9 = Wn(t9), e7 = tn(t9);
    return new _tt(e7, n9, 0, yt(n9), e7, 0, 0, 0, 1);
  }
  constructor(t9, n9, e7, r6, c4, i4, u5, o6, s10) {
    super(), this.type = "mat3", this.children = [t9, n9, e7, r6, c4, i4, u5, o6, s10];
  }
  add(t9) {
    return Ft(this, t9);
  }
  multiply(t9) {
    return Tt(this, t9);
  }
  clone() {
    const t9 = new _tt(i3(this.children[0]), i3(this.children[1]), i3(this.children[2]), i3(this.children[3]), i3(this.children[4]), i3(this.children[5]), i3(this.children[6]), i3(this.children[7]), i3(this.children[8]));
    return super.cloneInto(t9), t9;
  }
};
tt.type = "mat3";
var nt = class _nt extends r3 {
  static identity() {
    return new _nt(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  constructor(t9, n9, e7, r6, c4, i4, u5, o6, s10, l8, h10, f6, a7, p7, d8, w5) {
    super(), this.type = "mat4", this.children = [t9, n9, e7, r6, c4, i4, u5, o6, s10, l8, h10, f6, a7, p7, d8, w5];
  }
  static fromColumns(t9, n9, e7, r6) {
    return new _nt(t9.x, t9.y, t9.z, t9.w, n9.x, n9.y, n9.z, n9.w, e7.x, e7.y, e7.z, e7.w, r6.x, r6.y, r6.z, r6.w);
  }
  multiply(t9) {
    return Tt(this, t9);
  }
  clone() {
    const t9 = new _nt(i3(this.children[0]), i3(this.children[1]), i3(this.children[2]), i3(this.children[3]), i3(this.children[4]), i3(this.children[5]), i3(this.children[6]), i3(this.children[7]), i3(this.children[8]), i3(this.children[9]), i3(this.children[10]), i3(this.children[11]), i3(this.children[12]), i3(this.children[13]), i3(this.children[14]), i3(this.children[15]));
    return super.cloneInto(t9), t9;
  }
};
nt.type = "mat4";
var et = {
  float: j,
  vec2: C2,
  vec3: G2,
  vec4: H2,
  int: O,
  ivec2: Q,
  ivec3: V,
  ivec4: W,
  uint: M,
  uvec2: R,
  uvec3: A2,
  uvec4: X,
  bool: Y,
  bvec2: _2,
  bvec3: J,
  bvec4: L
};
var rt = (...t9) => new O(...t9);
var ct = (...t9) => new j(...t9);
var it = (...t9) => new C2(...t9);
var ut = (...t9) => new G2(...t9);
var ot = (...t9) => new H2(...t9);
var lt = (...t9) => new tt(...t9);
function ft(t9, n9, e7) {
  const c4 = new e7(new o3(n9, t9, e7));
  return c4.isImplicit = true, c4;
}
function at(t9, n9, e7, r6 = null) {
  if (r6) {
    const c5 = new r6(), i4 = new r6(new p2(t9, [n9, e7], true, false, c5));
    return i4.isImplicit = true, i4;
  }
  if ("float" === n9.type || "int" === n9.type) {
    const r7 = new e7.constructor(new p2(t9, [n9, e7], true, false, e7.constructor));
    return r7.isImplicit = true, r7;
  }
  if (("mat2" === n9.type || "mat3" === n9.type || "mat4" === n9.type) && "float" !== e7.type) {
    const r7 = new e7.constructor(new p2(t9, [n9, e7], true, false, e7.constructor));
    return r7.isImplicit = true, r7;
  }
  const c4 = new n9.constructor(new p2(t9, [n9, e7], true, false, n9.constructor));
  return c4.isImplicit = true, c4;
}
function pt(t9, n9, e7 = n9.constructor) {
  const r6 = new e7(new p2(t9, [n9], false, false, e7));
  return r6.isImplicit = true, r6;
}
function dt(t9, n9, e7, r6 = n9.constructor) {
  const c4 = new r6(new p2(t9, [n9, e7], false, false, r6));
  return c4.isImplicit = true, c4;
}
function wt(t9, n9, e7, r6, c4 = n9.constructor) {
  const i4 = new c4(new p2(t9, [n9, e7, r6], false, false, c4));
  return i4.isImplicit = true, i4;
}
function yt(t9) {
  return Tt(t9, ct(-1));
}
function mt(t9, n9, e7, r6) {
  return new n9(new u3(t9, n9, e7, r6));
}
function bt(t9, n9, e7 = 0, r6 = t9.size) {
  const c4 = new O(e7).setMutable().setDebugName("FindIndexIterator"), i4 = n9(t9.get(c4)).setDebugName("FindIndexPredicate"), u5 = mt({
    iter: c4
  }, O, i4, ({
    out: t10,
    iter: n10,
    subgraph: e8
  }) => `
${t10} = -1;

for (; ${n10} < ${r6}; ${n10}++) {

${e8.body}

  if (${e8.varName}) {
    ${t10} = ${n10};
    break;
  }

}
`).setDebugName("FindIndexBlock");
  return u5;
}
function It(t9, n9, e7 = 0, r6 = t9.size) {
  const c4 = mt({
    array: t9
  }, O, null, ({
    out: t10,
    array: c5
  }) => `
${t10} = -1;
for (int i = ${e7}; i < ${r6}; i++) {
  bool condition;
  ${n9({
    array: c5,
    i: "i",
    out: "condition"
  })}
  if (condition) {
    ${t10} = i;
    break;
  }
}
`).setDebugName("GlslFindIndexBlock");
  return c4;
}
function xt(t9, n9, e7) {
  const r6 = "function" == typeof n9 ? n9() : n9, c4 = "function" == typeof e7 ? e7() : e7, i4 = new r6.constructor(new c3(t9, r6, c4));
  return i4.isImplicit = true, i4;
}
function gt(...t9) {
  const n9 = t9.map(([t10, n10]) => "function" == typeof n10 ? [t10, n10()] : [t10, n10]), e7 = n9[0][1].constructor, r6 = n9.findIndex((t10) => true === t10[0]);
  if (-1 === r6) throw new Error("A cond must have a fallthrough case with `true`/; ");
  const c4 = n9.slice(0, r6), i4 = n9[r6][1], u5 = new e7(c4.reduceRight((t10, n10) => xt(n10[0], n10[1], t10), i4));
  return u5.isImplicit = true, u5;
}
function Tt(t9, n9) {
  return at("*", t9, n9);
}
function $t(t9, n9) {
  return at("/", t9, n9);
}
function Ft(t9, n9) {
  return at("+", t9, n9);
}
function kt(t9, n9) {
  return at("-", t9, n9);
}
function Dt(t9, n9) {
  return at(">>", t9, n9);
}
function Nt(t9, n9) {
  return at("&", t9, n9);
}
function Bt(t9, n9) {
  return at("==", t9, n9, Y);
}
function St(t9, n9) {
  return at("<", t9, n9, Y);
}
function jt(t9, n9) {
  return at("<=", t9, n9, Y);
}
function Ct(t9, n9) {
  return at(">", t9, n9, Y);
}
function Gt(t9, n9) {
  return at(">=", t9, n9, Y);
}
function Ht(...t9) {
  return t9.length <= 1 ? t9[0] : t9.slice(1).reduce((t10, n9) => Mt(t10, n9), t9[0]);
}
function Mt(t9, n9) {
  return at("||", t9, n9, Y);
}
function Rt(...t9) {
  return t9.length <= 1 ? t9[0] : t9.slice(1).reduce((t10, n9) => At(t10, n9), t9[0]);
}
function At(t9, n9) {
  return at("&&", t9, n9, Y);
}
function Xt(t9) {
  return pt("abs", t9);
}
function Jt(t9) {
  return pt("all", t9, Y);
}
function Kt(t9) {
  return pt("any", t9, Y);
}
function Wt(t9) {
  return pt("ceil", t9);
}
function Zt(t9, n9, e7) {
  return wt("clamp", t9, n9, e7, t9.constructor);
}
function tn(t9) {
  return pt("cos", t9);
}
function sn(t9, n9) {
  return dt("distance", t9, n9, j);
}
function ln(t9, n9) {
  return dt("dot", t9, n9, j);
}
function vn(t9) {
  return pt("floor", t9);
}
function bn(t9) {
  return pt("fract", t9);
}
function kn(t9) {
  return pt("length", t9, j);
}
function Bn(t9, n9) {
  return dt("max", t9, n9);
}
function Un(t9, n9) {
  return dt("min", t9, n9);
}
function Sn(t9, n9, e7) {
  return wt("mix", t9, n9, e7);
}
function jn(t9, n9) {
  return dt("mod", t9, n9);
}
function Gn(t9) {
  return pt("normalize", t9);
}
function Hn(t9) {
  return "bool" === t9.type ? pt("!", t9) : pt("not", t9);
}
function Wn(t9) {
  return pt("sin", t9);
}
function te(t9, n9, e7) {
  return wt("smoothstep", t9, n9, e7);
}
function ee(t9, n9) {
  return dt("step", t9, n9, n9.constructor);
}
function se(t9, n9) {
  return dt("texture2D", t9, n9, H2);
}

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/graph/GlslGraphWriter.js
var e4 = 5;
function t5(e7, t9, r6) {
  const n9 = t9.split("\n");
  for (const i4 of n9) if (i4.trim().length) {
    {
      let t10 = "";
      null != r6 && (t10 += `/*id:${r6 ?? "000"}*/   `), e7.body += t10.padEnd(14);
    }
    e7.body += " ".repeat(e7.indent) + i4 + "\n";
  }
}
var r4 = class {
  write(e7) {
    for (const t9 of e7.rootOutputNodes()) e7.shouldPruneOutputNode(t9) || (t9.variableName = this._write(e7, t9.node));
    return e7;
  }
  _createVarName(e7, t9) {
    let r6 = "";
    return "boolean" != typeof t9 && "number" != typeof t9 && t9.debugInfo.name && (r6 = `${t9.debugInfo.name}_`), `${r6}v${e7.varCount++}`;
  }
  _write(e7, t9, r6 = false) {
    if ("number" == typeof t9) return t9.toString();
    if ("boolean" == typeof t9) return t9.toString();
    let n9 = e7.getEmit(t9);
    if (n9) return n9;
    switch (t9.shaderType) {
      case "scope-node":
        n9 = this._writeScopeNode(e7, t9);
        break;
      case "primitive-node":
        n9 = this._writePrimitiveNode(e7, t9, r6);
        break;
      case "function-node":
        n9 = this._writeFunctionNode(e7, t9);
        break;
      case "property-access-node":
        n9 = this._writePropertyAccessNode(e7, t9);
        break;
      case "text-node":
        n9 = t9.text;
        break;
      case "block-node":
        n9 = this._writeBlockNode(e7, t9);
        break;
      case "condition-node":
        n9 = this._writeConditionNode(e7, t9);
    }
    return e7.setEmit(t9, n9), n9;
  }
  _writeScopeNode(e7, r6) {
    const n9 = new r6.child.constructor();
    n9.setDebugName(r6.debugInfo.name);
    const i4 = this._write(e7, n9, true);
    t5(e7, `{ /*ScopeStart: ${r6.uid} ${r6.debugInfo.name}*/`), e7.indent += 2;
    return t5(e7, `${i4} = ${this._write(e7, r6.child)};`), e7.indent -= 2, t5(e7, `} /*ScopeEnd: ${r6.uid} ${r6.debugInfo.name}*/`), i4;
  }
  _writeConditionNode(e7, r6) {
    const n9 = new r6.ifTrue.constructor(), i4 = this._write(e7, n9, true);
    t5(e7, `if (${this._write(e7, r6.condition)}) {`), e7.indent += 2;
    const o6 = e7.createSubgraphContext(), d8 = this._write(o6, r6.ifTrue);
    if (e7.body += o6.body, d8 && t5(e7, `${i4} = ${d8};`), e7.indent -= 2, t5(e7, "}"), r6.ifFalse) {
      t5(e7, "else {"), e7.indent += 2;
      const n10 = e7.createSubgraphContext(), o7 = this._write(n10, r6.ifFalse);
      e7.body += n10.body, o7 && t5(e7, `${i4} = ${o7};`), e7.indent -= 2, t5(e7, "}");
    }
    return i4;
  }
  _writeBlockNode(e7, r6) {
    const {
      captureList: n9,
      generator: i4,
      returnType: o6
    } = r6, d8 = {};
    for (const t9 in n9) {
      if (!n9[t9]) continue;
      const r7 = this._write(e7, n9[t9]);
      d8[t9] = r7;
    }
    const s10 = new o6(), c4 = this._write(e7, s10, true);
    if (d8.out = c4, r6.subgraph) {
      const t9 = e7.createSubgraphContext(), n10 = this._write(t9, r6.subgraph.child), i5 = t9.body;
      d8.subgraph = {
        varName: n10,
        body: i5
      };
    }
    const a7 = i4(d8);
    return t5(e7, "{\n"), e7.indent += 2, t5(e7, a7), e7.indent -= 2, t5(e7, "}\n"), c4;
  }
  _writePropertyAccessNode(e7, t9) {
    const r6 = this._write(e7, t9.target);
    if ("string" == typeof t9.property && t9.property.includes("[")) return `${r6}${t9.property}`;
    if ("string" != typeof t9.property) {
      return `${r6}[${this._write(e7, t9.property)}]`;
    }
    return `${r6}.${t9.property}`;
  }
  _writeFunctionNode(r6, n9) {
    const i4 = n9.returnType.type;
    if (n9.isInfix) {
      const [o7, d9] = n9.children.map((e7) => this._write(r6, e7)), s10 = this._createVarName(r6, n9);
      return t5(r6, `${i4.padEnd(e4)} ${s10} = ${o7} ${n9.token} ${d9};`, n9.uid), s10;
    }
    const o6 = n9.children.map((e7) => this._write(r6, e7)).join(", "), d8 = this._createVarName(r6, n9);
    return t5(r6, `${i4.padEnd(e4)} ${d8} = ${n9.token}(${o6});`, n9.uid), d8;
  }
  _writePrimitiveNode(r6, n9, i4 = false) {
    const o6 = r6.getInput(n9);
    if (o6) return o6.isUsed = true, o6.variableName;
    const d8 = 1 === n9.children.length && n9.children[0]?.type === n9.type;
    if (n9.isImplicit || d8) return this._write(r6, n9.children[0]);
    const s10 = this._createVarName(r6, n9);
    if (i4) return t5(r6, `${n9.type.padEnd(e4)} ${s10};`, n9.uid), s10;
    const c4 = !n9.debugInfo.name && !n9.isMutable;
    if (c4 && "float" === n9.type && "number" == typeof n9.children[0]) return Number.isInteger(n9.children[0]) ? n9.children[0].toFixed(1) : n9.children[0].toString();
    if (c4 && "int" === n9.type && "number" == typeof n9.children[0] && Number.isInteger(n9.children[0])) return n9.children[0].toString();
    const a7 = n9.children.map((e7) => this._write(r6, e7)).join(", ");
    return "array" === n9.type ? (t5(r6, `${n9.type.padEnd(e4)} ${s10} = [${a7}];`, n9.uid), s10) : c4 ? `${n9.type}(${a7})` : (t5(r6, `${n9.type.padEnd(e4)} ${s10} = ${n9.type}(${a7});`, n9.uid), s10);
  }
};

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/graph/ShaderGraphContext.js
var t6 = class _t {
  constructor(e7, t9, n9) {
    this.variableName = e7, this.variableInputType = t9, this.node = n9, this.type = "shader-input", this.isUsed = false;
  }
  clone() {
    return new _t(this.variableName, this.variableInputType, i3(this.node));
  }
};
var n4 = class _n {
  constructor(e7, t9, n9) {
    this.outVariableName = e7, this.outVariableType = t9, this.node = n9, this.type = "shader-output";
  }
  clone() {
    const t9 = new _n(this.outVariableName, this.outVariableType, i3(this.node));
    return t9.variableName = this.variableName, t9;
  }
};
var o4 = class _o {
  static createVertex(e7, a7, d8, i4, r6, s10) {
    const u5 = [];
    for (const n9 in e7) {
      const o6 = e7[n9], a8 = d8.get(n9);
      a8 ? u5.push(new t6(a8, "builtin", o6)) : u5.push(new t6("a_" + n9, "attribute", o6));
    }
    for (const n9 of i4) {
      const e8 = n9.uniformHydrated;
      u5.push(new t6(n9.uniformName, "uniform", e8));
    }
    const p7 = [];
    for (const t9 in a7) {
      const e8 = a7[t9];
      "glPosition" === t9 ? p7.push(new n4("gl_Position", "builtin", e8)) : "glPointSize" === t9 ? p7.push(new n4("gl_PointSize", "builtin", e8)) : p7.push(new n4("v_" + t9, "varying", e8));
    }
    return new _o(u5, p7, r6, s10);
  }
  static createFragment(e7, a7, d8, i4, r6, s10) {
    const u5 = [], p7 = Array.from(r6.rootOutputNodes());
    for (const n9 in e7) {
      const o6 = e7[n9], a8 = d8.get(n9);
      if (a8) {
        u5.push(new t6(a8, "builtin", o6));
        continue;
      }
      const i5 = p7.find((e8) => e8.node === o6);
      i5 && u5.push(new t6(i5.outVariableName, i5.outVariableType, o6));
    }
    for (const n9 of i4) {
      const e8 = n9.uniformHydrated;
      u5.push(new t6(n9.uniformName, "uniform", e8));
    }
    const h10 = [];
    for (const t9 in a7) {
      const e8 = a7[t9], o6 = d8.get(t9);
      if ("discard" === t9) h10.push(new n4(null, "discard", e8));
      else {
        if (!o6) throw new Error(`Member ${t9} in shader fragment output shoule be tagged as builtin`);
        h10.push(new n4(o6, "builtin", e8));
      }
    }
    return new _o(u5, h10, s10);
  }
  constructor(e7, t9, n9, o6) {
    this.type = "shader-graph-context", this.indent = 0, this.body = "", this.varCount = 0, this._inputShaderTypesByNodeUid = /* @__PURE__ */ new Map(), this._nodeEmitMap = /* @__PURE__ */ new Map();
    for (const a7 of e7) this._inputShaderTypesByNodeUid.set(a7.node.uid, a7);
    this._outputShaderTypes = t9, this._transformFeedbackBindings = n9, this._transformFeedbackNames = new Set(n9.map((e8) => "v_" + e8.propertyKey)), this._usedInFragmentShader = o6;
  }
  shouldPruneOutputNode(e7) {
    return !!this._usedInFragmentShader && "builtin" !== e7.outVariableType && !this._transformFeedbackNames.has(e7.outVariableName) && !this._usedInFragmentShader.has(e7.node.uid);
  }
  setEmit(e7, t9) {
    this._nodeEmitMap.set(e7.uid, t9);
  }
  getEmit(e7) {
    return this._nodeEmitMap.get(e7.uid);
  }
  inputs() {
    return this._inputShaderTypesByNodeUid.values();
  }
  getInput(e7) {
    return this._inputShaderTypesByNodeUid.get(e7.uid);
  }
  *rootOutputNodes() {
    for (const e7 of this._outputShaderTypes) yield e7;
  }
  *nodes() {
    const e7 = [];
    for (const t9 of this._outputShaderTypes.values()) e7.push(t9.node);
    for (; e7.length; ) {
      const t9 = e7.pop();
      "number" != typeof t9 && "boolean" != typeof t9 && e7.push(...t9.children.filter(Boolean)), yield t9;
    }
  }
  *nodesOfTypeOrFunction() {
    for (const e7 of this.nodes()) "number" != typeof e7 && "boolean" != typeof e7 && (yield e7);
  }
  createSubgraphContext() {
    const e7 = this.clone();
    return e7.body = "", e7.indent = this.indent + 2, e7._nodeEmitMap = new Map(this._nodeEmitMap), e7;
  }
  clone() {
    const e7 = new _o([], this._outputShaderTypes, this._transformFeedbackBindings, this._usedInFragmentShader);
    return e7._inputShaderTypesByNodeUid = this._inputShaderTypesByNodeUid, e7.indent = this.indent, e7.body = this.body, e7.varCount = this.varCount, e7._nodeEmitMap = this._nodeEmitMap, e7;
  }
  insertVertexShader(e7) {
    e7.vertex.code.add(""), this._insertInputs(e7, "vertex"), e7.vertex.code.add(""), e7.vertex.code.add("// OUTPUTS: "), e7.vertex.code.add("// --------------------------------------------------------- ");
    for (const t9 of this.rootOutputNodes()) {
      const n9 = "builtin" === t9.outVariableType;
      this.shouldPruneOutputNode(t9) || (n9 ? e7.vertex.code.add(`// ${t9.outVariableType.padEnd(7)} ${t9.node.type.padEnd(9)} ${t9.outVariableName};`) : e7.vertex.code.add(`${t9.outVariableType.padEnd(10)} ${t9.node.type.padEnd(9)} ${t9.outVariableName};`));
    }
    e7.vertex.code.add(""), e7.vertex.code.add("void main() {"), e7.vertex.code.add("  " + this.body.split("\n").join("\n  "));
    for (const t9 of this.rootOutputNodes()) this.shouldPruneOutputNode(t9) || e7.vertex.code.add(`  ${t9.outVariableName} = ${t9.variableName};`);
    e7.vertex.code.add("}");
  }
  insertFragmentShader(e7) {
    this._insertInputs(e7, "fragment"), e7.fragment.code.add(""), e7.fragment.code.add("void main() {"), e7.fragment.code.add("  " + this.body.split("\n").join("\n  "));
    for (const t9 of this.rootOutputNodes()) "discard" === t9.outVariableType ? (e7.fragment.code.add("  // TODO: Should ensure codegen for discard appears first in fragment shader"), e7.fragment.code.add(`  if (${t9.variableName}) {`), e7.fragment.code.add("    discard;"), e7.fragment.code.add("  }"), e7.fragment.code.add("  ")) : e7.fragment.code.add(`  ${t9.outVariableName} = ${t9.variableName};`);
    e7.fragment.code.add("}");
  }
  _insertInputs(e7, t9) {
    e7[t9].code.add("// INPUTS: "), e7[t9].code.add("// --------------------------------------------------------- ");
    for (const n9 of this.inputs()) n9.isUsed && "builtin" !== n9.variableInputType && ("array" === n9.node.type ? e7[t9].code.add(`${n9.variableInputType.padEnd(10)} ${n9.node.elementType.type.padEnd(9)} ${n9.variableName}[${n9.node.size}];`) : e7[t9].code.add(`${n9.variableInputType.padEnd(10)} ${n9.node.type.padEnd(9)} ${n9.variableName};`));
  }
};

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/typed/TypedShaderProgram.js
var s8 = () => n.getLogger("esri.views.2d.engine.webgl.shaderGraph.typed.TypedShaderProgram");
function n5(e7, t9, o6) {
  const i4 = t9.length;
  if (i4 !== o6) {
    const n9 = new s("Invalid Uniform", `Invalid length, expected ${o6} but got ${i4}`, {
      uniformName: e7,
      values: t9
    });
    s8().errorOnce(n9);
  }
}
var a6 = class {
  constructor(r6, e7, t9, o6, i4, s10) {
    this._program = null, this._vao = null, this._temporaryTextures = [], this.vertexShader = r6, this.fragmentShader = e7, this._locations = t9, this._locationInfo = o6, this._uniformBindings = i4, this._transformFeedbackBindings = s10;
  }
  destroy() {
    this._program && this._program.dispose(), this.cleanupTemporaryTextures();
  }
  get locations() {
    return this._locations;
  }
  get locationInfo() {
    return this._locationInfo;
  }
  setUniforms(r6) {
    this._uniforms = r6;
  }
  cleanupTemporaryTextures() {
    for (const r6 of this._temporaryTextures) r6.dispose();
    this._temporaryTextures = [];
  }
  bind(r6) {
    const e7 = this._uniforms;
    if (!this._program) {
      const e8 = /* @__PURE__ */ new Map();
      for (const [r7, o6] of this._locations) e8.set(r7, o6);
      const t9 = [];
      for (const r7 of this._transformFeedbackBindings ?? []) {
        const {
          index: e9,
          propertyKey: o6
        } = r7;
        t9[e9] = `v_${o6}`;
      }
      this._program = new r(r6, this.vertexShader, this.fragmentShader, e8, /* @__PURE__ */ new Map(), t9);
    }
    const s10 = this._program;
    r6.useProgram(s10);
    for (const o6 of this._uniformBindings) {
      const {
        shaderModulePath: a7,
        uniformName: f6,
        uniformType: m5,
        uniformArrayLength: c4
      } = o6, l8 = t(a7, e7);
      if (null == l8) {
        if ("sampler2D" === m5) continue;
        throw new Error(`Failed to find uniform value for ${a7}`);
      }
      switch ("array" === m5 ? o6.uniformArrayElementType : m5) {
        case "sampler2D": {
          const {
            unit: e8,
            texture: t9
          } = l8;
          if (s10.setUniform1i(f6, e8), "type" in t9) r6.bindTexture(t9, e8);
          else {
            const o7 = T(r6, t9.descriptor, t9.data);
            r6.bindTexture(o7, e8);
          }
          break;
        }
        case "int":
          if (!c4) {
            s10.setUniform1i(f6, l8);
            break;
          }
          n5(o6.uniformName, l8, c4), s10.setUniform1iv(f6, l8);
          break;
        case "float":
          if (!c4) {
            s10.setUniform1f(f6, l8);
            break;
          }
          n5(o6.uniformName, l8, c4), s10.setUniform1fv(f6, l8);
          break;
        case "vec2":
          if (!c4) {
            s10.setUniform2f(f6, l8[0], l8[1]);
            break;
          }
          n5(o6.uniformName, l8, c4), s10.setUniform2fv(f6, l8.flat());
          break;
        case "vec3":
          if (!c4) {
            s10.setUniform3f(f6, l8[0], l8[1], l8[2]);
            break;
          }
          n5(o6.uniformName, l8, c4), s10.setUniform3fv(f6, l8.flat());
          break;
        case "vec4":
          if (!c4) {
            s10.setUniform4f(f6, l8[0], l8[1], l8[2], l8[3]);
            break;
          }
          n5(o6.uniformName, l8, c4), s10.setUniform4fv(f6, l8.flat());
          break;
        case "mat3":
          s10.setUniformMatrix3fv(f6, l8.flat());
          break;
        case "mat4":
          s10.setUniformMatrix4fv(f6, l8.flat());
          break;
        default:
          throw new Error(`Unable to set uniform for type ${m5}`);
      }
    }
  }
};

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/GraphShaderModule.js
function d4(t9) {
  return new t9();
}
function f2(t9, e7, r6) {
  const o6 = t9.constructor[e7] ?? [];
  t9.constructor.hasOwnProperty(e7) || Object.defineProperty(t9.constructor, e7, {
    value: o6.slice()
  }), t9.constructor[e7].push(r6);
}
function h5(t9, e7) {
  return (r6, o6) => {
    f2(r6, "locations", {
      typeCtor: e7,
      propertyKey: o6,
      parameterIndex: null,
      index: t9
    });
  };
}
var l5 = (t9) => (e7, r6) => {
  f2(e7, "builtins", {
    builtin: t9,
    propertyKey: r6
  });
};
var m3 = (t9) => (e7, r6, o6) => {
  f2(e7, "inputs", {
    inputCtor: t9,
    propertyKey: r6,
    parameterIndex: o6
  });
};
var g3 = (t9) => (e7, r6) => {
  f2(e7, "uniforms", {
    typeCtor: t9,
    propertyKey: r6
  });
};
var _3 = (t9) => (e7, r6) => {
  f2(e7, "options", {
    typeCtor: t9,
    propertyKey: r6
  });
};
var K2 = (t9, e7) => {
  f2(t9, "defines", {
    propertyKey: e7
  });
};
var C3 = (t9, e7) => (r6, o6) => {
  r6.constructor.builtins.push({
    builtin: t9,
    propertyKey: o6,
    typeCtor: e7
  });
};
var b2 = class {
};
b2.builtins = [], e([C3("gl_VertexID", O)], b2.prototype, "glVertexID", void 0);
var I3 = class {
};
var v2 = class {
};
v2.builtins = [], e([C3("gl_FragCoord", H2)], v2.prototype, "glFragCoord", void 0), e([C3("gl_PointCoord", C2)], v2.prototype, "glPointCoord", void 0);
var w2 = class {
};
e([l5("gl_FragColor")], w2.prototype, "glFragColor", void 0);
var P2 = class {
  constructor() {
    this.type = "uniform-group";
  }
  get _uniforms() {
    return this.constructor.uniforms ?? [];
  }
};
var j2 = class {
  constructor() {
    this.logShader = false, this.computeAttributes = {};
  }
  get vertexInput() {
    const t9 = this._shaderModuleClass.inputs.findLast((t10) => "vertex" === t10.propertyKey && 0 === t10.parameterIndex);
    if (!t9) throw new Error("Unable to find vertex input parameter");
    return t9;
  }
  get computeInput() {
    return this._shaderModuleClass.inputs.findLast((t9) => "vertex" === t9.propertyKey && 1 === t9.parameterIndex);
  }
  get fragmentInput() {
    const t9 = this._shaderModuleClass.inputs.findLast((t10) => "fragment" === t10.propertyKey);
    if (!t9) throw new Error("Unable to find fragment input parameter");
    return t9;
  }
  get transformFeedbackBindings() {
    return this.fragmentInput.inputCtor.transformFeedbackBindings ?? [];
  }
  get locations() {
    return [...this.vertexInput.inputCtor.locations, ...this.computeInput?.inputCtor.locations ?? []];
  }
  get locationsMap() {
    const t9 = /* @__PURE__ */ new Map(), r6 = /* @__PURE__ */ new Set();
    for (const o6 of this.locations) r6.has(o6.index) ? n.getLogger("esri.views.2d.engine.webgl.shaderGraph.GraphShaderModule").warnOnce("mapview-rendering", `Unable to assigned attribute ${o6.propertyKey} to ${o6.index}. Index already in use`, {
      locationsMap: t9
    }) : (t9.set(o6.propertyKey, o6.index), r6.add(o6.index));
    return t9;
  }
  get locationInfo() {
    if (!this._locationInfo) {
      const t9 = this.locationsMap, e7 = Array.from(t9.entries()).map(([t10, e8]) => `${t10}.${e8}`).join("."), o6 = l(e7), n9 = this.computeAttributes;
      this._locationInfo = {
        hash: o6,
        locations: t9,
        computeAttributeMap: n9
      };
    }
    return this._locationInfo;
  }
  get renamedLocationsMap() {
    const t9 = /* @__PURE__ */ new Map();
    for (const e7 of this.locations) t9.set("a_" + e7.propertyKey, e7.index);
    return t9;
  }
  get optionPropertyKeys() {
    if (!this._optionPropertyKeys) {
      const t9 = /* @__PURE__ */ new Set();
      for (const e7 of this._options) t9.add(e7.propertyKey);
      this._optionPropertyKeys = t9;
    }
    return this._optionPropertyKeys;
  }
  get _shaderModuleClass() {
    return this.constructor;
  }
  get _defines() {
    return this._shaderModuleClass.defines ?? [];
  }
  get _options() {
    return this._shaderModuleClass.options ?? [];
  }
  get _uniforms() {
    return this._shaderModuleClass.uniforms ?? [];
  }
  getProgram(t9, e7, r6, o6) {
    try {
      const {
        vertex: n9,
        fragment: s10,
        uniformBindings: i4
      } = this._generateShaders(t9, e7, r6, o6);
      return new a6(n9, s10, this.renamedLocationsMap, this.locationInfo, i4, this.transformFeedbackBindings);
    } catch (n9) {
      return new a6("", "", this.renamedLocationsMap, this.locationInfo, [], this.transformFeedbackBindings);
    }
  }
  getDebugUniformClassInfo(t9) {
    const e7 = this._options.find((e8) => e8.propertyKey === t9);
    if (e7) return {
      type: "option",
      className: e7.typeCtor
    };
    const r6 = this._uniforms.find((e8) => e8.propertyKey === t9);
    if (!r6) throw new Error(`Unable to find uniform class type for property: ${t9}`);
    return {
      type: "required",
      className: r6.typeCtor
    };
  }
  getShaderKey(t9, e7, r6, o6) {
    const n9 = Object.keys(t9).map((e8) => `${e8}.${t9[e8]}`).join("."), s10 = Object.keys(r6).map((t10) => `${t10}.${r6[t10]}`).join("."), i4 = Object.keys(o6).map((t10) => `${t10}.${o6[t10]}`).join("."), p7 = Object.keys(e7).filter((t10) => this.optionPropertyKeys.has(t10) && e7[t10]).join(".");
    return `${this.constructor.name}.${n9}.${s10}.${i4}.${p7}`;
  }
  _generateShaders(t9, e7, r6, o6) {
    const n9 = [];
    this._setDefines(r6), this._setOptionalUniforms(n9, e7), this._setRequiredUniforms(n9);
    const s10 = this._hydrateVertexInput(o6), i4 = this._injectPackPrecisionFactor(s10, t9), p7 = this._hydrateComputeInput(), y4 = p7 && this._injectComputePackPrecisionFactor(p7, t9), d8 = this.vertex(i4, y4), f6 = this._hydrateFragmentInput(d8), h10 = this.fragment(f6), l8 = /* @__PURE__ */ new Set();
    for (const a7 in h10) {
      const t10 = h10[a7];
      e3(l8, t10);
    }
    const m5 = this._getVertexInputBuiltins(), g8 = o4.createVertex(__spreadValues(__spreadValues({}, s10), p7), d8, m5, n9, this.transformFeedbackBindings, l8);
    new r4().write(g8);
    const _6 = this._getFragmentInputBuiltins(h10);
    _6.set("glPointCoord", "gl_PointCoord");
    const K3 = o4.createFragment(f6, h10, _6, n9, g8, this.transformFeedbackBindings);
    new r4().write(K3);
    const x4 = this._createShaderBuilder(g8, K3), C5 = x4.generate("vertex", false), b5 = x4.generate("fragment", false);
    return this.logShader && (console.log(C5), console.log(b5)), {
      vertex: C5,
      fragment: b5,
      uniformBindings: n9
    };
  }
  _setDefines(t9) {
    for (const e7 in t9) this[e7] = t9[e7];
  }
  _setOptionalUniforms(t9, e7) {
    for (const r6 of this._options) {
      e7[r6.propertyKey] ? this[r6.propertyKey] = this._hydrateUniformGroup(t9, r6) : this[r6.propertyKey] = null;
    }
  }
  _setRequiredUniforms(t9) {
    for (const e7 of this._uniforms) this[e7.propertyKey] = this._hydrateUniformGroup(t9, e7);
  }
  _hydrateUniformGroup(t9, e7) {
    const r6 = new (0, e7.typeCtor)();
    for (const o6 of r6._uniforms ?? []) {
      const n9 = d4(o6.typeCtor), s10 = `u_${e7.propertyKey}_${o6.propertyKey}`, i4 = n9.type, p7 = [e7.propertyKey, o6.propertyKey].join(".");
      if ("type" in o6.typeCtor && "array" === o6.typeCtor.type) {
        const e8 = n9;
        t9.push({
          shaderModulePath: p7,
          uniformName: s10,
          uniformType: i4,
          uniformArrayLength: e8.size,
          uniformArrayElementType: e8.elementType.type,
          uniformHydrated: n9
        });
      } else t9.push({
        shaderModulePath: p7,
        uniformName: s10,
        uniformType: i4,
        uniformHydrated: n9
      });
      r6[o6.propertyKey] = n9;
    }
    return r6;
  }
  _hydrateVertexInput(t9) {
    const e7 = this.vertexInput.inputCtor, r6 = e7.locations.reduce((e8, r7) => false === t9[r7.propertyKey] ? e8 : __spreadProps(__spreadValues({}, e8), {
      [r7.propertyKey]: d4(r7.typeCtor)
    }), {});
    for (const {
      propertyKey: o6,
      typeCtor: n9
    } of e7.builtins) {
      const t10 = d4(n9);
      r6[o6] = t10;
    }
    return r6;
  }
  _hydrateComputeInput() {
    if (null == this.computeInput) return null;
    return this.computeInput.inputCtor.locations.reduce((t9, e7) => __spreadProps(__spreadValues({}, t9), {
      [e7.propertyKey]: d4(e7.typeCtor)
    }), {});
  }
  _injectPackPrecisionFactor(t9, e7) {
    const r6 = {};
    for (const o6 in t9) {
      const s10 = t9[o6], i4 = e7[o6];
      if (i4) {
        if ("float" !== s10.type && "vec2" !== s10.type && "vec3" !== s10.type && "vec4" !== s10.type) throw new Error(`InternalError: packPrecisionFactor requires GenType, but found ${s10.type}`);
        r6[o6] = s10.divide(new j(i4));
      } else r6[o6] = s10;
    }
    return r6;
  }
  _injectComputePackPrecisionFactor(t9, e7) {
    const r6 = {}, o6 = /* @__PURE__ */ new Map();
    for (const n9 in this.computeAttributes) for (const t10 of this.computeAttributes[n9] ?? []) o6.set(t10, n9);
    for (const s10 in t9) {
      const i4 = t9[s10], p7 = o6.get(s10);
      if (!p7) continue;
      const a7 = e7[p7];
      if (a7) {
        if ("float" !== i4.type && "vec2" !== i4.type && "vec3" !== i4.type && "vec4" !== i4.type) throw new Error(`InternalError: packPrecisionFactor requires GenType, but found ${i4.type}`);
        r6[s10] = i4.divide(new j(a7));
      } else r6[s10] = i4;
    }
    return r6;
  }
  _hydrateFragmentInput(t9) {
    const e7 = {};
    for (const r6 in t9) e7[r6] = t9[r6];
    for (const {
      propertyKey: r6,
      typeCtor: o6
    } of v2.builtins) {
      const t10 = d4(o6);
      e7[r6] = t10;
    }
    return e7;
  }
  _getVertexInputBuiltins() {
    const t9 = this.vertexInput.inputCtor, e7 = /* @__PURE__ */ new Map();
    for (const {
      builtin: r6,
      propertyKey: o6
    } of t9.builtins) e7.set(o6, r6);
    return e7;
  }
  _getFragmentInputBuiltins(t9) {
    const e7 = t9.constructor, r6 = /* @__PURE__ */ new Map();
    for (const o6 of e7.builtins ?? []) r6.set(o6.propertyKey, o6.builtin);
    return r6;
  }
  _createShaderBuilder(t9, e7) {
    const r6 = new o2();
    return this._insertDebugInfo(r6), t9.insertVertexShader(r6), e7.insertFragmentShader(r6), r6;
  }
  _insertDebugInfo(t9) {
    t9.vertex.code.add("// DEFINES: "), t9.vertex.code.add("// --------------------------------------------------------- ");
    for (const e7 of this._defines) this[e7.propertyKey] ? t9.vertex.code.add(`//   ${e7.propertyKey}: true`) : t9.vertex.code.add(`//   ${e7.propertyKey}: false`);
    t9.vertex.code.add(""), t9.vertex.code.add("// OPTIONS: "), t9.vertex.code.add("// --------------------------------------------------------- ");
    for (const e7 of this._options) this[e7.propertyKey] ? t9.vertex.code.add(`//   ${e7.propertyKey}: true`) : t9.vertex.code.add(`//   ${e7.propertyKey}: false`);
  }
};

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/utils.js
function g4(t9) {
  const e7 = ct(12.9898), l8 = ct(78.233), s10 = ct(43758.5453), f6 = ln(t9, it(e7, l8)), m5 = jn(f6, ct(3.14));
  return bn(Wn(m5).multiply(s10));
}
function h6(t9) {
  return Bt(t9, ct(k));
}
function b3(t9, n9) {
  return t9.x.multiply(n9.y).subtract(n9.x.multiply(t9.y));
}
function d5(t9) {
  return t9.multiply(2).subtract(1);
}
function j3(t9, r6) {
  const u5 = ct(2 ** r6);
  return jn(vn(t9.divide(u5)), ct(2));
}
function z2(t9, r6) {
  return Ct(j3(t9, r6), ct(0.5));
}
function v3(n9, r6) {
  return j3(n9, r6 + l2.length);
}
function w3(t9, n9) {
  return j3(t9, n9);
}
function R2(t9) {
  const r6 = j3(t9.z, 7), u5 = ct(1).subtract(r6), i4 = t9.xyz.subtract(ut(0, 0, ct(128)));
  return u5.multiply(t9).add(r6.multiply(i4));
}
function k2(t9) {
  const n9 = ot(255 / 256, 255 / 65536, 255 / 16777216, 255 / 4294967296);
  return ln(t9, n9);
}
function q3(t9) {
  return Bn(Bn(Bn(t9.x, t9.y), t9.z), t9.w);
}

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/EntityStorage.js
var p4 = class extends P2 {
  getVisualVariableData(t9) {
    if (!this._vvData) {
      const a7 = this.getAttributeDataCoords(t9);
      this._vvData = se(this.visualVariableData, a7).setDebugName("storage2");
    }
    return this._vvData;
  }
  getAttributeDataCoords(t9) {
    if (!this._uv) {
      const a7 = R2(t9), e7 = this.size, i4 = rt(a7.x), g8 = rt(a7.y).multiply(rt(256)), l8 = rt(a7.z).multiply(rt(256)).multiply(rt(256)), n9 = ct(i4.add(g8).add(l8)), p7 = jn(n9, e7), d8 = n9.subtract(p7).divide(e7);
      this._uv = new C2(p7, d8).add(0.5).divide(e7);
    }
    return this._uv;
  }
  getFilterData(t9) {
    const a7 = this.getAttributeDataCoords(t9);
    return se(this.filterFlags, a7).setDebugName("storage0");
  }
  getAnimationData(t9) {
    const a7 = this.getAttributeDataCoords(t9);
    return se(this.animation, a7).setDebugName("storage1");
  }
  getVVData(t9) {
    return this.getVisualVariableData(t9);
  }
  getDataDrivenData0(t9) {
    const a7 = this.getAttributeDataCoords(t9);
    return se(this.dataDriven0, a7).setDebugName("storage30");
  }
  getDataDrivenData1(t9) {
    const a7 = this.getAttributeDataCoords(t9);
    return se(this.dataDriven1, a7).setDebugName("storage31");
  }
  getDataDrivenData2(t9) {
    const a7 = this.getAttributeDataCoords(t9);
    return se(this.dataDriven2, a7).setDebugName("storage32");
  }
  getGPGPUData(t9) {
    const a7 = this.getAttributeDataCoords(t9);
    return se(this.gpgpu, a7).setDebugName("storage4");
  }
  getFilterFlags(t9) {
    return has("webgl-ignores-sampler-precision") ? Wt(this.getFilterData(t9).x.multiply(ct(255))) : this.getFilterData(t9).x.multiply(ct(255));
  }
  getAnimationValue(t9) {
    return this.getAnimationData(t9).x;
  }
  getSizeValue(t9) {
    return this.getVisualVariableData(t9).x;
  }
  getColorValue(t9) {
    return this.getVisualVariableData(t9).y;
  }
  getOpacityValue(t9) {
    return this.getVisualVariableData(t9).z;
  }
  getRotationValue(t9) {
    return this.getVisualVariableData(t9).w;
  }
};
e([g3(S2)], p4.prototype, "filterFlags", void 0), e([g3(S2)], p4.prototype, "animation", void 0), e([g3(S2)], p4.prototype, "gpgpu", void 0), e([g3(S2)], p4.prototype, "visualVariableData", void 0), e([g3(S2)], p4.prototype, "dataDriven0", void 0), e([g3(S2)], p4.prototype, "dataDriven1", void 0), e([g3(S2)], p4.prototype, "dataDriven2", void 0), e([g3(j)], p4.prototype, "size", void 0);

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/ShaderHighlight.js
var e5 = class extends P2 {
};
e([g3(j)], e5.prototype, "activeReasons", void 0), e([g3(j)], e5.prototype, "highlightAll", void 0);

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/ShaderHittest.js
var e6 = class extends P2 {
};
e([g3(C2)], e6.prototype, "position", void 0), e([g3(j)], e6.prototype, "distance", void 0), e([g3(j)], e6.prototype, "smallSymbolDistance", void 0), e([g3(j)], e6.prototype, "smallSymbolSizeThreshold", void 0);

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/ViewInfo.js
var d6 = class extends P2 {
};
e([g3(tt)], d6.prototype, "displayViewScreenMat3", void 0), e([g3(tt)], d6.prototype, "displayViewMat3", void 0), e([g3(tt)], d6.prototype, "displayMat3", void 0), e([g3(tt)], d6.prototype, "viewMat3", void 0), e([g3(tt)], d6.prototype, "tileMat3", void 0), e([g3(j)], d6.prototype, "displayZoomFactor", void 0), e([g3(j)], d6.prototype, "requiredZoomFactor", void 0), e([g3(C2)], d6.prototype, "tileOffset", void 0), e([g3(j)], d6.prototype, "currentScale", void 0), e([g3(j)], d6.prototype, "currentZoom", void 0), e([g3(j)], d6.prototype, "metersPerSRUnit", void 0), e([g3(j)], d6.prototype, "rotation", void 0), e([g3(j)], d6.prototype, "pixelRatio", void 0);

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/AFeatureShader.js
var S3 = class extends b2 {
};
e([h5(0, G2)], S3.prototype, "id", void 0), e([h5(1, j)], S3.prototype, "bitset", void 0), e([h5(2, C2)], S3.prototype, "pos", void 0);
var q4 = class extends I3 {
};
e([h5(14, C2)], q4.prototype, "nextPos1", void 0), e([h5(15, C2)], q4.prototype, "nextPos2", void 0);
var F2 = class extends v2 {
};
var P3 = class extends j2 {
  clip(t9, i4) {
    let e7 = new j(0);
    const o6 = this.storage.getFilterFlags(t9);
    if (e7 = e7.add(ct(2).multiply(ct(1).subtract(v3(o6, 0)))), this.inside ? e7 = e7.add(ct(2).multiply(ct(1).subtract(v3(o6, 1)))) : this.outside ? e7 = e7.add(ct(2).multiply(v3(o6, 1))) : this.highlight && (e7 = e7.add(ct(2).multiply(ct(1).subtract(this._checkHighlight(o6))))), null != i4) {
      const t10 = new j(1).subtract(ee(i4.x, this.view.currentZoom)), o7 = ee(i4.y, this.view.currentZoom);
      e7 = e7.add(new j(2).multiply(t10.add(o7)));
    }
    return e7;
  }
  getFragmentOutput(t9, i4, e7 = new j(1 / 255)) {
    const o6 = new w2();
    return o6.glFragColor = this._maybeWriteHittest(i4) ?? this._maybeHighlight(t9, e7) ?? t9, o6;
  }
  _maybeHighlight(t9, i4) {
    return this.highlight ? new H2(t9.rgb, ee(i4, t9.a)) : null;
  }
  _checkHighlight(t9) {
    let e7 = this._checkHighlightBit(t9, 0);
    for (let o6 = 1; o6 < l2.length; o6++) e7 = e7.add(this._checkHighlightBit(t9, o6));
    return ee(new j(0.1), e7.add(this.highlight.highlightAll));
  }
  _checkHighlightBit(t9, i4) {
    return w3(t9, i4).multiply(j3(this.highlight.activeReasons, i4));
  }
  maybeRunHittest(t9, i4, e7) {
    if (null == this.hittestRequest) return null;
    const o6 = this.hittest(t9, i4, e7);
    let s10 = xt(Ct(o6, this.hittestRequest.distance), new j(2), new j(0));
    const r6 = this.storage.getAttributeDataCoords(t9.id), h10 = d5(r6);
    s10 = s10.add(this.clip(t9.id, t9.zoomRange));
    const l8 = new H2(new j(1 / 255), 0, 0, 0);
    return {
      glPointSize: new j(1),
      glPosition: new H2(h10, s10, 1),
      color: l8
    };
  }
  _maybeWriteHittest(t9) {
    return null != this.hittestRequest ? t9.color : null;
  }
};
e([K2], P3.prototype, "inside", void 0), e([K2], P3.prototype, "outside", void 0), e([_3(e5)], P3.prototype, "highlight", void 0), e([g3(p4)], P3.prototype, "storage", void 0), e([g3(d6)], P3.prototype, "view", void 0), e([_3(e6)], P3.prototype, "hittestRequest", void 0);

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/hittestUtils.js
function v4(n9, r6) {
  return ln(n9, Gn(r6));
}
function j4(t9, u5, s10) {
  const l8 = s10.subtract(u5), c4 = v4(t9.subtract(u5), l8), e7 = Zt(c4.divide(kn(l8)), new j(0), new j(1));
  return sn(t9, u5.add(e7.multiply(s10.subtract(u5))));
}
function g5(t9) {
  const u5 = Xt(t9);
  return ee(u5.x.add(u5.y).add(u5.z), new j(1.05));
}
function h7(t9, u5, n9, i4) {
  const y4 = new tt(n9.x.multiply(i4.y).subtract(i4.x.multiply(n9.y)), i4.x.multiply(u5.y).subtract(u5.x.multiply(i4.y)), u5.x.multiply(n9.y).subtract(n9.x.multiply(u5.y)), n9.y.subtract(i4.y), i4.y.subtract(u5.y), u5.y.subtract(n9.y), i4.x.subtract(n9.x), u5.x.subtract(i4.x), n9.x.subtract(u5.x)), s10 = u5.x.multiply(n9.y.subtract(i4.y)), l8 = n9.x.multiply(i4.y.subtract(u5.y)), a7 = i4.x.multiply(u5.y.subtract(n9.y)), o6 = s10.add(l8).add(a7);
  return new j(1).divide(o6).multiply(y4.multiply(new G2(1, t9)));
}
function M2(t9, u5, n9, i4) {
  return Bt(g5(h7(t9, u5, n9, i4)), new j(1));
}
function P4(t9, u5, n9, i4) {
  const y4 = n9.subtract(u5), s10 = i4.subtract(u5), l8 = b3(y4, s10), c4 = Rt(St(l8, new j(u)), Ct(l8, new j(-u)));
  return gt([Rt(Hn(c4), M2(t9.xy, u5, n9, i4)), new j(-1)], [true, () => {
    const r6 = j4(t9, u5, n9), y5 = j4(t9, n9, i4), s11 = j4(t9, i4, u5);
    return Un(Un(r6, y5), s11);
  }]);
}
function q5(t9) {
  return t9.distance.add(1);
}
function z3(t9, u5, n9) {
  const {
    viewMat3: r6,
    tileMat3: i4
  } = t9.view, y4 = r6.multiply(i4), s10 = y4.multiply(new G2(u5.pos, 1)), l8 = y4.multiply(new G2(n9.nextPos1, 1)), c4 = y4.multiply(new G2(n9.nextPos2, 1));
  return P4(t9.hittestRequest.position, s10.xy, l8.xy, c4.xy);
}
function R3(t9, u5, n9) {
  return sn(t9, n9).subtract(u5);
}

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/VisualVariableColor.js
var f3 = class extends P2 {
  getColor(s10, t9, o6) {
    return gt([Ht(h6(s10), o6), t9], [jt(s10, this.values.first()), this.colors.first()], [Gt(s10, this.values.last()), this.colors.last()], [true, () => {
      const t10 = this.values.findIndex((t11) => Ct(t11, s10)), o7 = this.values.get(t10), r6 = t10.subtract(1), e7 = this.values.get(r6), i4 = s10.subtract(e7).divide(o7.subtract(e7));
      return Sn(this.colors.get(r6), this.colors.get(t10), i4);
    }]);
  }
};
e([g3(U.ofType(H2, 8))], f3.prototype, "colors", void 0), e([g3(U.ofType(j, 8))], f3.prototype, "values", void 0);

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/VisualVariableOpacity.js
var h8 = class extends P2 {
  getOpacity(t9) {
    return gt([h6(t9), new j(1)], [jt(t9, this.opacityValues.first()), this.opacities.first()], [Gt(t9, this.opacityValues.last()), this.opacities.last()], [true, () => {
      const s10 = this.opacityValues.findIndex((s11) => Ct(s11, t9)), i4 = this.opacityValues.get(s10), e7 = s10.subtract(1), o6 = this.opacityValues.get(e7), a7 = t9.subtract(o6).divide(i4.subtract(o6));
      return Sn(this.opacities.get(e7), this.opacities.get(s10), a7);
    }]);
  }
};
e([g3(U.ofType(j, 8))], h8.prototype, "opacities", void 0), e([g3(U.ofType(j, 8))], h8.prototype, "opacityValues", void 0);

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/vvUtils.js
function l6(a7) {
  return null != a7.visualVariableSizeMinMaxValue || null != a7.visualVariableSizeScaleStops || null != a7.visualVariableSizeStops || null != a7.visualVariableSizeUnitValue;
}
function t7(a7, e7, i4) {
  if (l6(a7)) {
    const l8 = a7.storage.getSizeValue(e7);
    return a7.visualVariableSizeMinMaxValue?.getSize(l8, i4) ?? a7.visualVariableSizeScaleStops?.getSizeForViewScale(a7.view.currentScale) ?? a7.visualVariableSizeStops?.getSize(l8, i4) ?? a7.visualVariableSizeUnitValue?.getSize(l8, i4);
  }
  return i4;
}
function r5(e7, i4, l8, t9 = new Y(false)) {
  if (null == e7.visualVariableColor) return l8;
  const r6 = e7.storage.getColorValue(i4);
  return e7.visualVariableColor.getColor(r6, l8, t9);
}
function u4(a7, i4) {
  if (null == a7.visualVariableOpacity) return new j(1);
  const l8 = a7.storage.getOpacityValue(i4);
  return a7.visualVariableOpacity.getOpacity(l8);
}
function n6(a7, e7) {
  if (null == a7.visualVariableRotation) return tt.identity();
  const l8 = a7.storage.getRotationValue(e7);
  return a7.visualVariableRotation.getVVRotationMat3(l8);
}

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/FillShader.js
var g6 = class extends S3 {
};
e([h5(3, H2)], g6.prototype, "color", void 0), e([h5(4, C2)], g6.prototype, "zoomRange", void 0);
var x2 = class extends P3 {
  constructor() {
    super(...arguments), this.computeAttributes = {
      pos: ["nextPos1", "nextPos2"]
    };
  }
  vertex(t9, o6) {
    const r6 = u4(this, t9.id), e7 = r5(this, t9.id, t9.color).multiply(r6), i4 = this.view.displayViewScreenMat3.multiply(new G2(t9.pos.xy, 1)), p7 = this.clip(t9.id, t9.zoomRange);
    return __spreadValues({
      glPosition: new H2(i4.xy, p7, 1),
      color: e7
    }, this.maybeRunHittest(t9, o6, null));
  }
  fragment(t9) {
    return this.getFragmentOutput(t9.color, t9, new j(0));
  }
  hittest(t9, o6) {
    return z3(this, t9, o6);
  }
};
e([_3(f3)], x2.prototype, "visualVariableColor", void 0), e([_3(h8)], x2.prototype, "visualVariableOpacity", void 0), e([t2(0, m3(g6)), t2(1, m3(q4))], x2.prototype, "vertex", null), e([t2(0, m3(F2))], x2.prototype, "fragment", null);

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/LocalTileOffset.js
var n7 = class extends P2 {
  getPatternOffsetAtTileOrigin(t9, i4 = new j(0), l8 = new j(1)) {
    const n9 = new C2(I).divide(t9);
    let p7 = t9.multiply(bn(this.maxIntsToLocalOrigin.multiply(n9))).add(this.tileOffsetFromLocalOrigin).subtract(new j(0.5).multiply(t9));
    return p7 = new C2(p7.x.multiply(l8).subtract(p7.y.multiply(i4)), p7.x.multiply(i4).add(p7.y.multiply(l8))), jn(p7, t9);
  }
};
e([g3(C2)], n7.prototype, "tileOffsetFromLocalOrigin", void 0), e([g3(C2)], n7.prototype, "maxIntsToLocalOrigin", void 0);

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/MosaicInfo.js
var p5 = class extends P2 {
};
e([g3(C2)], p5.prototype, "size", void 0), e([g3(S2)], p5.prototype, "texture", void 0);

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/ComplexFillShader.js
var q6 = class extends g6 {
};
e([h5(5, H2)], q6.prototype, "tlbr", void 0), e([h5(6, j)], q6.prototype, "width", void 0), e([h5(7, j)], q6.prototype, "height", void 0), e([h5(8, C2)], q6.prototype, "offset", void 0), e([h5(9, C2)], q6.prototype, "scale", void 0), e([h5(10, j)], q6.prototype, "angle", void 0);
var G3 = class extends F2 {
};
function L2(t9, e7, o6, i4, r6) {
  const l8 = Bt(j3(r6, C), ct(1)), s10 = k2(new H2(t9, 0));
  return xt(l8, lt(i4.divide(e7.x), o6.divide(e7.y), 0, yt(o6.divide(e7.x)), i4.divide(e7.y), 0, g4(it(s10, 0)), g4(it(0, s10)), 1), lt(i4.divide(e7.x), o6.divide(e7.y), 0, yt(o6.divide(e7.x)), i4.divide(e7.y), 0, 0, 0, 1));
}
function P5(t9, e7) {
  const o6 = t9.view.requiredZoomFactor, i4 = new C2(e7.width, e7.height), r6 = i4.multiply(e7.scale).multiply(o6), m5 = e7.angle.multiply(c), u5 = Wn(m5), f6 = tn(m5), y4 = L2(e7.id, r6, u5, f6, e7.bitset), c4 = t9.localTileOffset.getPatternOffsetAtTileOrigin(i4, u5, f6), v5 = o6.multiply(e7.scale).multiply(e7.offset.subtract(c4)).divide(r6), x4 = new G2(e7.pos, 1), h10 = y4.multiply(x4).xy.subtract(v5), g8 = e7.tlbr.divide(t9.mosaicInfo.size.xyxy);
  let b5 = j3(e7.bitset, q);
  return null != t9.visualVariableColor && (b5 = xt(h6(t9.storage.getColorValue(e7.id)), new j(0), b5)), {
    tileTextureCoord: h10,
    tlbr: g8,
    sampleAlphaOnly: b5
  };
}
function Z2(t9, e7) {
  const o6 = jn(e7.tileTextureCoord, new j(1)), i4 = Sn(e7.tlbr.xy, e7.tlbr.zw, o6);
  let r6 = se(t9.mosaicInfo.texture, i4);
  return r6 = xt(Ct(e7.sampleAlphaOnly, new j(0.5)), r6.aaaa, r6), e7.color.multiply(r6);
}
var _4 = class extends x2 {
  vertex(t9, e7) {
    return __spreadValues(__spreadValues({}, super.vertex(t9, e7)), P5(this, t9));
  }
  fragment(t9) {
    const e7 = Z2(this, t9);
    return this.getFragmentOutput(e7, t9, new j(0));
  }
};
e([g3(p5)], _4.prototype, "mosaicInfo", void 0), e([g3(n7)], _4.prototype, "localTileOffset", void 0), e([t2(0, m3(q6)), t2(1, m3(q4))], _4.prototype, "vertex", null), e([t2(0, m3(G3))], _4.prototype, "fragment", null);

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/VisualVariableSizeMinMaxValue.js
var m4 = class extends P2 {
  getSize(t9, e7) {
    const r6 = this.minMaxValueAndSize.xy, o6 = this.minMaxValueAndSize.zw;
    return xt(h6(t9), e7, () => {
      const e8 = t9.subtract(r6.x).divide(r6.y.subtract(r6.x)), s10 = Zt(e8, new j(0), new j(1));
      return o6.x.add(s10.multiply(o6.y.subtract(o6.x)));
    });
  }
};
e([g3(H2)], m4.prototype, "minMaxValueAndSize", void 0);

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/VisualVariableSizeScaleStops.js
var p6 = class extends P2 {
  getSizeForViewScale(s10) {
    return gt([jt(s10, this.values.first()), this.sizes.first()], [Gt(s10, this.values.last()), this.sizes.last()], [true, () => {
      const t9 = this.values.findIndex((t10) => Ct(t10, s10)), e7 = this.values.get(t9), i4 = t9.subtract(1), r6 = this.values.get(i4), o6 = s10.subtract(r6).divide(e7.subtract(r6));
      return Sn(this.sizes.get(i4), this.sizes.get(t9), o6);
    }]);
  }
};
e([g3(U.ofType(j, 8))], p6.prototype, "sizes", void 0), e([g3(U.ofType(j, 8))], p6.prototype, "values", void 0);

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/VisualVariableSizeStops.js
var f4 = class extends P2 {
  getSize(s10, t9) {
    const e7 = gt([h6(s10), t9], [jt(s10, this.values.first()), this.sizes.first()], [Gt(s10, this.values.last()), this.sizes.last()], [true, () => {
      const t10 = this.values.findIndex((t11) => Ct(t11, s10)), e8 = this.values.get(t10), i4 = t10.subtract(1), r6 = this.values.get(i4), o6 = s10.subtract(r6).divide(e8.subtract(r6));
      return Sn(this.sizes.get(i4), this.sizes.get(t10), o6);
    }]);
    return xt(h6(e7), t9, e7);
  }
};
e([g3(U.ofType(j, 8))], f4.prototype, "sizes", void 0), e([g3(U.ofType(j, 8))], f4.prototype, "values", void 0);

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/VisualVariableSizeUnitValue.js
var l7 = class extends P2 {
  getSize(t9, o6) {
    return xt(h6(t9), o6, t9.multiply(this.unitValueToPixelsRatio));
  }
};
e([g3(j)], l7.prototype, "unitValueToPixelsRatio", void 0);

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/LineShader.js
var q7 = class extends S3 {
};
e([h5(3, H2)], q7.prototype, "color", void 0), e([h5(4, C2)], q7.prototype, "offset", void 0), e([h5(5, C2)], q7.prototype, "normal", void 0), e([h5(6, j)], q7.prototype, "halfWidth", void 0), e([h5(7, j)], q7.prototype, "referenceHalfWidth", void 0), e([h5(8, C2)], q7.prototype, "zoomRange", void 0);
var A3 = class extends F2 {
};
var F3 = class extends P2 {
};
function k3(t9) {
  return Bn(new j(h2).multiply(ee(t9, new j(n2))), new j(1));
}
function D3(t9, i4) {
  const {
    halfWidth: e7,
    normal: o6
  } = t9, l8 = k3(e7), a7 = kn(o6).multiply(e7);
  return Zt(l8.multiply(e7.subtract(a7)).divide(i4.add(l8).subtract(new j(1))), new j(0), new j(1));
}
function G4(t9, i4) {
  const {
    id: e7,
    halfWidth: o6,
    referenceHalfWidth: l8
  } = i4;
  if (l6(t9)) {
    const i5 = new j(2).multiply(l8), a7 = t7(t9, e7, i5);
    return new j(0.5).multiply(o6.divide(Bn(l8, new j(s4)))).multiply(a7);
  }
  return o6;
}
function T2(t9, i4) {
  const {
    id: e7,
    offset: o6,
    pos: l8,
    normal: a7,
    zoomRange: r6
  } = i4, {
    displayViewScreenMat3: s10,
    displayViewMat3: n9
  } = t9.view, c4 = r5(t9, e7, i4.color), f6 = u4(t9, e7), h10 = G4(t9, i4), v5 = new j(0.5).multiply(t9.antialiasingControls.antialiasing), w5 = Bn(h10.add(v5), new j(0.45)).add(new j(0.1).multiply(v5)), V2 = k3(w5).multiply(w5).multiply(o6), b5 = n9.multiply(new G2(V2, new j(0))), S6 = s10.multiply(new G2(l8, new j(1))).add(b5), x4 = new j(2).multiply(ee(h10, new j(0))).add(t9.clip(e7, r6)), g8 = new H2(S6.xy, x4, 1);
  return {
    color: c4,
    opacity: f6,
    halfWidth: w5,
    normal: a7,
    scaledOffset: V2,
    scaledHalfWidth: h10,
    glPosition: new H2(g8.xy, x4, 1)
  };
}
function _5(t9, i4) {
  const {
    opacity: e7,
    color: o6
  } = t9, l8 = D3(t9, i4);
  return e7.multiply(o6).multiply(l8);
}
e([g3(j)], F3.prototype, "antialiasing", void 0), e([g3(j)], F3.prototype, "blur", void 0);
var B3 = class extends P3 {
  constructor() {
    super(...arguments), this.computeAttributes = {
      pos: ["nextPos1", "nextPos2"]
    };
  }
  vertex(t9, i4) {
    const e7 = T2(this, t9);
    return __spreadValues(__spreadValues({}, e7), this.maybeRunHittest(t9, i4, e7.halfWidth));
  }
  fragment(t9) {
    const i4 = _5(t9, this.antialiasingControls.blur);
    return this.getFragmentOutput(i4, t9);
  }
  hittest(t9, i4, e7) {
    const {
      viewMat3: o6,
      tileMat3: l8
    } = this.view, a7 = o6.multiply(l8), r6 = a7.multiply(new G2(t9.pos, 1)), s10 = a7.multiply(new G2(i4.nextPos1, 1)), n9 = a7.multiply(new G2(i4.nextPos2, 1)), {
      distance: p7,
      smallSymbolDistance: u5,
      smallSymbolSizeThreshold: y4
    } = this.hittestRequest, f6 = ee(e7, y4.multiply(0.5)).multiply(p7.subtract(u5)), h10 = this.hittestRequest.position;
    return Un(j4(h10, r6.xy, s10.xy), j4(h10, r6.xy, n9.xy)).subtract(e7).add(f6);
  }
};
e([g3(F3)], B3.prototype, "antialiasingControls", void 0), e([_3(f3)], B3.prototype, "visualVariableColor", void 0), e([_3(h8)], B3.prototype, "visualVariableOpacity", void 0), e([_3(m4)], B3.prototype, "visualVariableSizeMinMaxValue", void 0), e([_3(p6)], B3.prototype, "visualVariableSizeScaleStops", void 0), e([_3(f4)], B3.prototype, "visualVariableSizeStops", void 0), e([_3(l7)], B3.prototype, "visualVariableSizeUnitValue", void 0), e([t2(0, m3(q7)), t2(1, m3(q4))], B3.prototype, "vertex", null), e([t2(0, m3(A3))], B3.prototype, "fragment", null);

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/OutlineFillShader.js
var W2 = class extends S3 {
};
e([h5(3, C2)], W2.prototype, "offset", void 0), e([h5(4, H2)], W2.prototype, "color", void 0), e([h5(5, C2)], W2.prototype, "normal", void 0), e([h5(6, j)], W2.prototype, "halfWidth", void 0), e([h5(7, j)], W2.prototype, "referenceHalfWidth", void 0), e([h5(8, C2)], W2.prototype, "zoomRange", void 0);
var R4 = class extends A3 {
};
function A4(t9, o6, i4) {
  const {
    id: e7,
    bitset: r6
  } = o6, s10 = j3(r6, B), u5 = Ct(s10, new j(0.5)), d8 = T2(t9, o6), c4 = xt(u5, d8.halfWidth, new j(0)), f6 = u4(t9, e7), y4 = r5(t9, e7, o6.color), V2 = xt(u5, o6.color, y4.multiply(f6)), h10 = t9.view.displayViewScreenMat3.multiply(new G2(o6.pos.xy, 1)), b5 = t9.clip(o6.id), j6 = new H2(h10.xy, b5, 1), g8 = xt(u5, d8.glPosition, j6), w5 = i4 && t9.maybeRunHittest(o6, i4, u5);
  return __spreadValues({
    isOutline: s10,
    color: V2,
    opacity: new j(1),
    halfWidth: c4,
    normal: d8.normal,
    glPosition: g8
  }, w5);
}
var F4 = class extends P3 {
  constructor() {
    super(...arguments), this.computeAttributes = {
      pos: ["nextPos1", "nextPos2"]
    };
  }
};
e([g3(F3)], F4.prototype, "antialiasingControls", void 0), e([_3(f3)], F4.prototype, "visualVariableColor", void 0), e([_3(h8)], F4.prototype, "visualVariableOpacity", void 0), e([_3(m4)], F4.prototype, "visualVariableSizeMinMaxValue", void 0), e([_3(p6)], F4.prototype, "visualVariableSizeScaleStops", void 0), e([_3(f4)], F4.prototype, "visualVariableSizeStops", void 0), e([_3(l7)], F4.prototype, "visualVariableSizeUnitValue", void 0);
var H3 = class extends F4 {
  vertex(t9, o6) {
    return A4(this, t9, o6);
  }
  fragment(t9) {
    const {
      color: o6,
      isOutline: i4
    } = t9, e7 = Ct(i4, new j(0.5)), r6 = _5(t9, this.antialiasingControls.blur), s10 = xt(e7, r6, o6), n9 = xt(e7, new j(1 / 255), new j(0));
    return this.getFragmentOutput(s10, t9, n9);
  }
  hittest(t9, o6, i4) {
    return xt(i4, q5(this.hittestRequest), z3(this, t9, o6));
  }
};
e([t2(0, m3(W2)), t2(1, m3(q4))], H3.prototype, "vertex", null), e([t2(0, m3(R4))], H3.prototype, "fragment", null);

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/PatternFillShader.js
var h9 = class extends g6 {
};
e([h5(5, H2)], h9.prototype, "tlbr", void 0), e([h5(6, j)], h9.prototype, "inverseRasterizationScale", void 0);
var g7 = class extends F2 {
};
function j5(t9) {
  const e7 = new j(1), r6 = new j(0);
  return new tt(e7.divide(t9.x), r6.divide(t9.y), 0, yt(r6.divide(t9.x)), e7.divide(t9.y), 0, 0, 0, 1);
}
function O2(t9, e7) {
  const r6 = e7.tlbr.xy, o6 = e7.tlbr.zw, i4 = o6.x.subtract(r6.x), n9 = r6.y.subtract(o6.y), a7 = new C2(i4, n9).multiply(e7.inverseRasterizationScale), p7 = a7.multiply(t9.view.requiredZoomFactor), u5 = j5(p7), d8 = t9.localTileOffset.getPatternOffsetAtTileOrigin(a7).divide(p7), c4 = new G2(e7.pos, 1);
  return {
    tileTextureCoord: u5.multiply(c4).xy.subtract(d8),
    tlbr: e7.tlbr.divide(t9.mosaicInfo.size.xyxy)
  };
}
function T3(t9, e7) {
  const r6 = jn(t9.tileTextureCoord, new j(1)), o6 = Sn(t9.tlbr.xy, t9.tlbr.zw, r6), i4 = se(e7.texture, o6);
  return t9.color.multiply(i4);
}
var z4 = class extends x2 {
  vertex(t9, e7) {
    return __spreadValues(__spreadValues({}, super.vertex(t9, e7)), O2(this, t9));
  }
  fragment(t9) {
    const e7 = T3(t9, this.mosaicInfo);
    return this.getFragmentOutput(e7, t9, new j(0));
  }
};
e([g3(p5)], z4.prototype, "mosaicInfo", void 0), e([g3(n7)], z4.prototype, "localTileOffset", void 0), e([t2(0, m3(h9)), t2(1, m3(q4))], z4.prototype, "vertex", null), e([t2(0, m3(g7))], z4.prototype, "fragment", null);

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/PatternOutlineFillShader.js
var x3 = class extends W2 {
};
e([h5(9, H2)], x3.prototype, "tlbr", void 0), e([h5(10, j)], x3.prototype, "inverseRasterizationScale", void 0);
var y3 = class extends R4 {
};
var S4 = class extends H3 {
  vertex(t9, o6) {
    return __spreadValues(__spreadValues({}, A4(this, t9, o6)), O2(this, t9));
  }
  fragment(t9) {
    const {
      isOutline: o6
    } = t9, r6 = Ct(o6, new j(0.5)), e7 = _5(t9, this.antialiasingControls.blur), s10 = T3(t9, this.mosaicInfo), n9 = xt(r6, e7, s10), p7 = xt(r6, new j(1 / 255), new j(0));
    return this.getFragmentOutput(n9, t9, p7);
  }
};
e([g3(p5)], S4.prototype, "mosaicInfo", void 0), e([g3(n7)], S4.prototype, "localTileOffset", void 0), e([t2(0, m3(x3)), t2(1, m3(q4))], S4.prototype, "vertex", null), e([t2(0, m3(y3))], S4.prototype, "fragment", null);

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/ComplexOutlineFillShader.js
var S5 = 16;
var b4 = 1 / S5;
var w4 = 128;
var F5 = class extends S3 {
};
e([h5(3, H2)], F5.prototype, "color", void 0), e([h5(4, H2)], F5.prototype, "tlbr", void 0), e([h5(5, j)], F5.prototype, "angle", void 0), e([h5(6, j)], F5.prototype, "aux1", void 0), e([h5(7, j)], F5.prototype, "aux2", void 0), e([h5(8, C2)], F5.prototype, "aux3", void 0), e([h5(9, C2)], F5.prototype, "aux4", void 0), e([h5(10, C2)], F5.prototype, "zoomRange", void 0);
var R5 = class extends y3 {
};
var C4 = class extends F4 {
  vertex(t9, o6) {
    const {
      aux1: e7,
      aux2: r6,
      aux3: i4,
      aux4: l8
    } = t9, p7 = __spreadProps(__spreadValues({}, t9), {
      width: e7,
      height: r6,
      offset: i4,
      scale: l8.multiply(b4)
    }), n9 = __spreadProps(__spreadValues({}, t9), {
      halfWidth: e7,
      referenceHalfWidth: r6,
      offset: i4,
      normal: l8.subtract(w4).multiply(b4)
    }), m5 = A4(this, n9), u5 = P5(this, p7), h10 = Ct(m5.isOutline, new j(0.5));
    return __spreadValues(__spreadValues(__spreadValues({}, m5), u5), this.maybeRunHittest(t9, o6, h10));
  }
  fragment(t9) {
    const {
      isOutline: o6
    } = t9, e7 = Ct(o6, new j(0.5)), r6 = _5(t9, this.antialiasingControls.blur), i4 = Z2(this, t9), p7 = xt(e7, r6, i4), n9 = xt(e7, new j(1 / 255), new j(0));
    return this.getFragmentOutput(p7, t9, n9);
  }
  hittest(t9, o6, e7) {
    return xt(e7, q5(this.hittestRequest), z3(this, t9, o6));
  }
};
e([g3(p5)], C4.prototype, "mosaicInfo", void 0), e([g3(n7)], C4.prototype, "localTileOffset", void 0), e([t2(0, m3(F5)), t2(1, m3(q4))], C4.prototype, "vertex", null), e([t2(0, m3(R5))], C4.prototype, "fragment", null);

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/markers/markerConstants.js
var o5 = {
  bitset: {
    isSDF: 0,
    isMapAligned: 1,
    scaleSymbolsProportionally: 2,
    overrideOutlineColor: 3,
    colorLocked: 4
  }
};

// ../../../node_modules/@arcgis/core/views/2d/layers/support/UpdateTracking2D.js
var d7 = class extends S {
  constructor(t9) {
    super(t9), this.debugName = "", this._updatingHandles = new h(), this._idToUpdatingState = new s3();
  }
  get updating() {
    const t9 = this._updatingHandles.updating || Array.from(this._idToUpdatingState.values()).some((t10) => t10);
    if (has("esri-2d-log-updating")) {
      const r6 = Array.from(this._idToUpdatingState.entries()).map(([t10, r7]) => `-> ${t10}: ${r7}`).join("\n");
      console.log(`${this.debugName}: Updating: ${t9}
-> Handles: ${this._updatingHandles.updating}
${r6}`);
    }
    return t9;
  }
  addUpdateTracking(t9, r6) {
    const s10 = d(() => r6.updating, (r7) => this._idToUpdatingState.set(t9, r7), {
      sync: true
    });
    this.addHandles(s10);
  }
  addPromise(t9) {
    return this._updatingHandles.addPromise(t9);
  }
};
e([y({
  constructOnly: true
})], d7.prototype, "debugName", void 0), e([y({
  readOnly: true
})], d7.prototype, "updating", null), d7 = e([a("esri.views.2d.layers.support.UpdateTracking2D")], d7);

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/DisplayId.js
var n8 = 8388607;
var t8 = 8388608;
var f5 = (t9) => t9 & n8;
function s9(n9, r6) {
  return ((r6 ? t8 : 0) | n9) >>> 0;
}

export {
  e2 as e,
  i,
  t3 as t,
  c,
  o,
  A,
  G,
  k,
  q,
  B,
  C,
  D,
  E,
  F,
  H,
  U,
  S2 as S,
  j,
  C2,
  G2,
  H2,
  Y,
  O,
  tt,
  nt,
  yt,
  xt,
  Dt,
  Nt,
  Bt,
  St,
  Ct,
  Ht,
  Xt,
  Zt,
  tn,
  sn,
  ln,
  vn,
  bn,
  kn,
  Bn,
  Un,
  Sn,
  Wn,
  te,
  ee,
  se,
  a6 as a,
  h5 as h,
  m3 as m,
  g3 as g,
  _3 as _,
  K2 as K,
  b2 as b,
  I3 as I,
  v2 as v,
  w2 as w,
  P2 as P,
  j2,
  h6 as h2,
  j3,
  z2 as z,
  k2,
  q3 as q2,
  d6 as d,
  S3 as S2,
  q4 as q3,
  F2,
  P3 as P2,
  g5 as g2,
  h7 as h3,
  P4 as P3,
  q5 as q4,
  R3 as R,
  f3 as f,
  h8 as h4,
  t7 as t2,
  r5 as r,
  u4 as u,
  n6 as n,
  x2 as x,
  p5 as p,
  _4 as _2,
  m4 as m2,
  p6 as p2,
  f4 as f2,
  l7 as l,
  q7 as q5,
  D3 as D2,
  T2 as T,
  B3 as B2,
  H3,
  z4 as z2,
  S4 as S3,
  S5 as S4,
  w4 as w2,
  C4 as C3,
  n8 as n2,
  f5 as f3,
  s9 as s,
  o5 as o2,
  d7 as d2
};
//# sourceMappingURL=chunk-4JFSB6JC.js.map
