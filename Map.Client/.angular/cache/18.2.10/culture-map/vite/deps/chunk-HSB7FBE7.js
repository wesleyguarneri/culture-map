// ../../../node_modules/@arcgis/core/views/webgl/ShaderCompiler.js
var e = class {
  constructor(e2) {
    this._readFile = e2;
  }
  resolveIncludes(e2) {
    return this._resolve(e2);
  }
  _resolve(e2, t = /* @__PURE__ */ new Map()) {
    if (t.has(e2)) return t.get(e2);
    const r = this._read(e2);
    if (!r) throw new Error(`cannot find shader file ${e2}`);
    const s = /^[^\S\n]*#include\s+<(\S+)>[^\S\n]?/gm;
    let n = s.exec(r);
    const l = [];
    for (; null != n; ) l.push({
      path: n[1],
      start: n.index,
      length: n[0].length
    }), n = s.exec(r);
    let a = 0, h = "";
    return l.forEach((e3) => {
      h += r.slice(a, e3.start), h += t.has(e3.path) ? "" : this._resolve(e3.path, t), a = e3.start + e3.length;
    }), h += r.slice(a), t.set(e2, h), h;
  }
  _read(e2) {
    return this._readFile(e2);
  }
};

export {
  e
};
//# sourceMappingURL=chunk-HSB7FBE7.js.map
