import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  a
} from "./chunk-7Z4UWMRU.js";
import {
  E
} from "./chunk-KYLW5XXS.js";
import {
  r
} from "./chunk-6WGE3IUL.js";
import {
  l
} from "./chunk-MLYB2YW4.js";
import {
  __async
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/ReloadableShaderModule.js
var t = class {
  constructor(t2, o) {
    this._module = t2, this._loadModule = o;
  }
  get() {
    return this._module;
  }
  reload() {
    return __async(this, null, function* () {
      return this._module = yield this._loadModule(), this._module;
    });
  }
};

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/ShaderTechnique.js
var r2 = class {
  constructor(i, t2, r4) {
    this.release = r4, this.initializeConfiguration(i, t2), this._configuration = t2.snapshot(), this._program = this.initializeProgram(i), this._pipeline = this.initializePipeline(i);
  }
  destroy() {
    this._program = r(this._program), this._pipeline = this._configuration = null;
  }
  reload(t2) {
    r(this._program), this._program = this.initializeProgram(t2), this._pipeline = this.initializePipeline(t2);
  }
  get program() {
    return this._program;
  }
  get compiled() {
    return this.program.compiled;
  }
  get key() {
    return this._configuration.key;
  }
  get configuration() {
    return this._configuration;
  }
  ensureAttributeLocations(i) {
    this.program.assertCompatibleVertexAttributeLocations(i);
  }
  get primitiveType() {
    return E.TRIANGLES;
  }
  getPipeline(i, t2, r4) {
    return this._pipeline;
  }
  initializeConfiguration(i, t2) {
  }
};

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/lib/Program.js
var r3 = class {
  constructor(r4, i, s) {
    this._context = r4, this._locations = s, this._textures = /* @__PURE__ */ new Map(), this._freeTextureUnits = new l({
      deallocator: null
    }), this._glProgram = r4.programCache.acquire(i.generate("vertex"), i.generate("fragment"), s), this._glProgram.stop = () => {
      throw new Error("Wrapped _glProgram used directly");
    }, this.bindPass = i.generateBindPass(this), this.bindDraw = i.generateBindDraw(this), this._fragmentUniforms = a() ? i.fragmentUniforms : null;
  }
  dispose() {
    this._glProgram.dispose();
  }
  get glName() {
    return this._glProgram.glName;
  }
  get hasTransformFeedbackVaryings() {
    return this._glProgram.hasTransformFeedbackVaryings;
  }
  get compiled() {
    return this._glProgram.compiled;
  }
  setUniform1b(t2, e) {
    this._glProgram.setUniform1i(t2, e ? 1 : 0);
  }
  setUniform1i(t2, e) {
    this._glProgram.setUniform1i(t2, e);
  }
  setUniform1f(t2, e) {
    this._glProgram.setUniform1f(t2, e);
  }
  setUniform2fv(t2, e) {
    this._glProgram.setUniform2fv(t2, e);
  }
  setUniform3fv(t2, e) {
    this._glProgram.setUniform3fv(t2, e);
  }
  setUniform4fv(t2, e) {
    this._glProgram.setUniform4fv(t2, e);
  }
  setUniformMatrix3fv(t2, e) {
    this._glProgram.setUniformMatrix3fv(t2, e);
  }
  setUniformMatrix4fv(t2, e) {
    this._glProgram.setUniformMatrix4fv(t2, e);
  }
  setUniform1fv(t2, e) {
    this._glProgram.setUniform1fv(t2, e);
  }
  setUniform1iv(t2, e) {
    this._glProgram.setUniform1iv(t2, e);
  }
  setUniform2iv(t2, e) {
    this._glProgram.setUniform3iv(t2, e);
  }
  setUniform3iv(t2, e) {
    this._glProgram.setUniform3iv(t2, e);
  }
  setUniform4iv(t2, e) {
    this._glProgram.setUniform4iv(t2, e);
  }
  assertCompatibleVertexAttributeLocations(t2) {
    t2.locations !== this._locations && console.error("VertexAttributeLocations are incompatible");
  }
  stop() {
    this._textures.clear(), this._freeTextureUnits.clear();
  }
  bindTexture(t2, e) {
    if (null == e?.glName) {
      const e2 = this._textures.get(t2);
      return e2 && (this._context.bindTexture(null, e2.unit), this._freeTextureUnit(e2), this._textures.delete(t2)), null;
    }
    let r4 = this._textures.get(t2);
    return null == r4 ? (r4 = this._allocTextureUnit(e), this._textures.set(t2, r4)) : r4.texture = e, this._context.useProgram(this), this.setUniform1i(t2, r4.unit), this._context.bindTexture(e, r4.unit), r4.unit;
  }
  rebindTextures() {
    this._context.useProgram(this), this._textures.forEach((t2, e) => {
      this._context.bindTexture(t2.texture, t2.unit), this.setUniform1i(e, t2.unit);
    }), this._fragmentUniforms?.forEach((t2) => {
      "sampler2D" !== t2.type && "samplerCube" !== t2.type || this._textures.has(t2.name) || console.error(`Texture sampler ${t2.name} has no bound texture`);
    });
  }
  _allocTextureUnit(t2) {
    return {
      texture: t2,
      unit: 0 === this._freeTextureUnits.length ? this._textures.size : this._freeTextureUnits.pop()
    };
  }
  _freeTextureUnit(t2) {
    this._freeTextureUnits.push(t2.unit);
  }
};

export {
  t,
  r2 as r,
  r3 as r2
};
//# sourceMappingURL=chunk-22UDIQGJ.js.map
