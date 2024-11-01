import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  s2 as s
} from "./chunk-6JFGZTLU.js";

// ../../../node_modules/@arcgis/core/core/Version.js
var r = class r2 {
  constructor(t, r3, o = "") {
    this.major = t, this.minor = r3, this._context = o;
  }
  lessThan(t, r3) {
    return this.major < t || t === this.major && this.minor < r3;
  }
  since(t, r3) {
    return !this.lessThan(t, r3);
  }
  validate(r3) {
    if (this.major !== r3.major) {
      const o = this._context && this._context + ":", s2 = this._context && this._context + " ";
      throw new s(o + "unsupported-version", `Required major ${s2}version is '${this.major}', but got '\${version.major}.\${version.minor}'`, {
        version: r3
      });
    }
  }
  clone() {
    return new r2(this.major, this.minor, this._context);
  }
  static parse(o, s2 = "") {
    const [e, i] = o.split("."), n = /^\s*\d+\s*$/;
    if (!e?.match || !n.test(e)) {
      throw new s((s2 && s2 + ":") + "invalid-version", "Expected major version to be a number, but got '${version}'", {
        version: o
      });
    }
    if (!i?.match || !n.test(i)) {
      throw new s((s2 && s2 + ":") + "invalid-version", "Expected minor version to be a number, but got '${version}'", {
        version: o
      });
    }
    const a = parseInt(e, 10), h = parseInt(i, 10);
    return new r2(a, h, s2);
  }
};

export {
  r
};
//# sourceMappingURL=chunk-JTDKNK44.js.map
