import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  s as s2
} from "./chunk-LCPLUSDH.js";
import {
  a
} from "./chunk-U4EMQMDC.js";
import {
  n2 as n,
  s2 as s
} from "./chunk-6JFGZTLU.js";

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/ShaderBuilder.js
var s3 = () => n.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");
var i = class {
  constructor() {
    this._includedModules = /* @__PURE__ */ new Map();
  }
  include(e, t) {
    this._includedModules.has(e) ? this._includedModules.get(e) : (this._includedModules.set(e, t), e(this.builder, t));
  }
};
var o = class extends i {
  constructor() {
    super(...arguments), this.vertex = new u(), this.fragment = new u(), this.attributes = new h(), this.varyings = new m(), this.extensions = new _(), this.constants = new d(), this.outputs = new l();
  }
  get fragmentUniforms() {
    return this.fragment.uniforms.entries;
  }
  get builder() {
    return this;
  }
  generate(e) {
    const t = this.extensions.generateSource(e), r = this.attributes.generateSource(e), n2 = this.varyings.generateSource(e), s4 = "vertex" === e ? this.vertex : this.fragment, i2 = s4.uniforms.generateSource(), o2 = s4.code.generateSource(), a3 = "vertex" === e ? f : g, c2 = this.constants.generateSource().concat(s4.constants.generateSource()), u2 = this.outputs.generateSource(e);
    return `#version 300 es
${t.join("\n")}

${a3}

${c2.join("\n")}

${i2.join("\n")}

${r.join("\n")}

${n2.join("\n")}

${u2.join("\n")}

${o2.join("\n")}`;
  }
  generateBindPass(e) {
    const t = /* @__PURE__ */ new Map();
    this.vertex.uniforms.entries.forEach((e2) => {
      const n3 = e2.bind[a.Pass];
      n3 && t.set(e2.name, n3);
    }), this.fragment.uniforms.entries.forEach((e2) => {
      const n3 = e2.bind[a.Pass];
      n3 && t.set(e2.name, n3);
    });
    const n2 = Array.from(t.values()), s4 = n2.length;
    return (t2, r) => {
      for (let i2 = 0; i2 < s4; ++i2) n2[i2](e, t2, r);
    };
  }
  generateBindDraw(e) {
    const t = /* @__PURE__ */ new Map();
    this.vertex.uniforms.entries.forEach((e2) => {
      const n3 = e2.bind[a.Draw];
      n3 && t.set(e2.name, n3);
    }), this.fragment.uniforms.entries.forEach((e2) => {
      const n3 = e2.bind[a.Draw];
      n3 && t.set(e2.name, n3);
    });
    const n2 = Array.from(t.values()), s4 = n2.length;
    return (t2, r, i2) => {
      for (let o2 = 0; o2 < s4; ++o2) n2[o2](e, t2, r, i2);
    };
  }
};
var a2 = class {
  constructor(e) {
    this._stage = e, this._entries = /* @__PURE__ */ new Map();
  }
  add(...e) {
    for (const t of e) this._add(t);
    return this._stage;
  }
  get(e) {
    return this._entries.get(e);
  }
  _add(t) {
    if (null != t) {
      if (this._entries.has(t.name) && !this._entries.get(t.name).equals(t)) throw new s(`Duplicate uniform name ${t.name} for different uniform type`);
      this._entries.set(t.name, t);
    } else s3().error(`Trying to add null Uniform from ${new Error().stack}.`);
  }
  generateSource() {
    return Array.from(this._entries.values()).map((e) => null != e.arraySize ? `uniform ${e.type} ${e.name}[${e.arraySize}];` : `uniform ${e.type} ${e.name};`);
  }
  get entries() {
    return Array.from(this._entries.values());
  }
};
var c = class {
  constructor(e) {
    this._stage = e, this._entries = new Array();
  }
  add(e) {
    return this._entries.push(e), this._stage;
  }
  generateSource() {
    return this._entries;
  }
};
var u = class extends i {
  constructor() {
    super(...arguments), this.uniforms = new a2(this), this.code = new c(this), this.constants = new d();
  }
  get builder() {
    return this;
  }
};
var h = class {
  constructor() {
    this._entries = new Array();
  }
  add(e, t) {
    this._entries.push([e, t]);
  }
  generateSource(e) {
    return "fragment" === e ? [] : this._entries.map((e2) => `in ${e2[1]} ${e2[0]};`);
  }
};
var m = class {
  constructor() {
    this._entries = /* @__PURE__ */ new Map();
  }
  add(e, t) {
    this._entries.has(e) && s2(this._entries.get(e) === t), this._entries.set(e, t);
  }
  generateSource(e) {
    const t = new Array();
    return this._entries.forEach((r, n2) => t.push("vertex" === e ? `out ${r} ${n2};` : `in ${r} ${n2};`)), t;
  }
};
var _ = class __ {
  constructor() {
    this._entries = /* @__PURE__ */ new Set();
  }
  add(e) {
    this._entries.add(e);
  }
  generateSource(e) {
    const t = "vertex" === e ? __.ALLOWLIST_VERTEX : __.ALLOWLIST_FRAGMENT;
    return Array.from(this._entries).filter((e2) => t.includes(e2)).map((e2) => `#extension ${e2} : enable`);
  }
};
_.ALLOWLIST_FRAGMENT = ["GL_EXT_shader_texture_lod", "GL_OES_standard_derivatives"], _.ALLOWLIST_VERTEX = [];
var l = class _l {
  constructor() {
    this._entries = /* @__PURE__ */ new Map();
  }
  add(e, t, r = 0) {
    const s4 = this._entries.get(r);
    s4 ? s2(s4.name === e && s4.type === t, `Fragment shader output location ${r} occupied`) : this._entries.set(r, {
      name: e,
      type: t
    });
  }
  generateSource(e) {
    if ("vertex" === e) return [];
    0 === this._entries.size && this._entries.set(0, {
      name: _l.DEFAULT_NAME,
      type: _l.DEFAULT_TYPE
    });
    const t = new Array();
    return this._entries.forEach((e2, r) => t.push(`layout(location = ${r}) out ${e2.type} ${e2.name};`)), t;
  }
};
l.DEFAULT_TYPE = "vec4", l.DEFAULT_NAME = "fragColor";
var d = class _d {
  constructor() {
    this._entries = /* @__PURE__ */ new Set();
  }
  add(e, t, r) {
    let n2 = "ERROR_CONSTRUCTOR_STRING";
    switch (t) {
      case "float":
        n2 = _d._numberToFloatStr(r);
        break;
      case "int":
        n2 = _d._numberToIntStr(r);
        break;
      case "bool":
        n2 = r.toString();
        break;
      case "vec2":
        n2 = `vec2(${_d._numberToFloatStr(r[0])},                            ${_d._numberToFloatStr(r[1])})`;
        break;
      case "vec3":
        n2 = `vec3(${_d._numberToFloatStr(r[0])},                            ${_d._numberToFloatStr(r[1])},                            ${_d._numberToFloatStr(r[2])})`;
        break;
      case "vec4":
        n2 = `vec4(${_d._numberToFloatStr(r[0])},                            ${_d._numberToFloatStr(r[1])},                            ${_d._numberToFloatStr(r[2])},                            ${_d._numberToFloatStr(r[3])})`;
        break;
      case "ivec2":
        n2 = `ivec2(${_d._numberToIntStr(r[0])},                             ${_d._numberToIntStr(r[1])})`;
        break;
      case "ivec3":
        n2 = `ivec3(${_d._numberToIntStr(r[0])},                             ${_d._numberToIntStr(r[1])},                             ${_d._numberToIntStr(r[2])})`;
        break;
      case "ivec4":
        n2 = `ivec4(${_d._numberToIntStr(r[0])},                             ${_d._numberToIntStr(r[1])},                             ${_d._numberToIntStr(r[2])},                             ${_d._numberToIntStr(r[3])})`;
        break;
      case "mat2":
      case "mat3":
      case "mat4":
        n2 = `${t}(${Array.prototype.map.call(r, (e2) => _d._numberToFloatStr(e2)).join(", ")})`;
    }
    return this._entries.add(`const ${t} ${e} = ${n2};`), this;
  }
  static _numberToIntStr(e) {
    return e.toFixed(0);
  }
  static _numberToFloatStr(e) {
    return Number.isInteger(e) ? e.toFixed(1) : e.toString();
  }
  generateSource() {
    return Array.from(this._entries);
  }
};
var g = "#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  precision highp sampler2D;\n#else\n  precision mediump float;\n  precision mediump sampler2D;\n#endif";
var f = "precision highp float;\nprecision highp sampler2D;";

export {
  o
};
//# sourceMappingURL=chunk-ZHVMMFTW.js.map
