import {
  o
} from "./chunk-7RMVJCDW.js";
import {
  __commonJS
} from "./chunk-JWIQHGQB.js";

// browser-external:fs
var require_fs = __commonJS({
  "browser-external:fs"(exports, module) {
    module.exports = Object.create(new Proxy({}, {
      get(_2, key) {
        if (key !== "__esModule" && key !== "__proto__" && key !== "constructor" && key !== "splice") {
          console.warn(`Module "fs" has been externalized for browser compatibility. Cannot access "fs.${key}" in client code. See https://vitejs.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
        }
      }
    }));
  }
});

// browser-external:path
var require_path = __commonJS({
  "browser-external:path"(exports, module) {
    module.exports = Object.create(new Proxy({}, {
      get(_2, key) {
        if (key !== "__esModule" && key !== "__proto__" && key !== "constructor" && key !== "splice") {
          console.warn(`Module "path" has been externalized for browser compatibility. Cannot access "path.${key}" in client code. See https://vitejs.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
        }
      }
    }));
  }
});

// ../../../node_modules/@arcgis/core/chunks/pe-wasm.js
var t;
var _;
var r;
var o2 = {
  exports: {}
};
t = o2, _ = "undefined" != typeof document ? document.currentScript?.src : void 0, "undefined" != typeof __filename && (_ ||= __filename), r = function(e = {}) {
  var t2, r2, o3, n2, p2, i = Object.assign({}, e), c = new Promise((e2, _2) => {
    t2 = e2, r2 = _2;
  }), s = "object" == typeof window, P = "function" == typeof importScripts, a = "object" == typeof process && "object" == typeof process.versions && "string" == typeof process.versions.node, g = Object.assign({}, i), y = "./this.program", u = "";
  function d(e2) {
    return i.locateFile ? i.locateFile(e2, u) : u + e2;
  }
  if (a) {
    var f = require_fs(), E = require_path();
    u = __dirname + "/", o3 = (e2, t3) => (e2 = K(e2) ? new URL(e2) : E.normalize(e2), f.readFileSync(e2, t3 ? void 0 : "utf8")), p2 = (e2) => {
      var t3 = o3(e2, true);
      return t3.buffer || (t3 = new Uint8Array(t3)), t3;
    }, n2 = (e2, t3, _2, r3 = true) => {
      e2 = K(e2) ? new URL(e2) : E.normalize(e2), f.readFile(e2, r3 ? void 0 : "utf8", (e3, o4) => {
        e3 ? _2(e3) : t3(r3 ? o4.buffer : o4);
      });
    }, !i.thisProgram && process.argv.length > 1 && (y = process.argv[1].replace(/\\/g, "/")), process.argv.slice(2);
  } else (s || P) && (P ? u = self.location.href : "undefined" != typeof document && document.currentScript && (u = document.currentScript.src), _ && (u = _), u = u.startsWith("blob:") ? "" : u.substr(0, u.replace(/[?#].*/, "").lastIndexOf("/") + 1), o3 = (e2) => {
    var t3 = new XMLHttpRequest();
    return t3.open("GET", e2, false), t3.send(null), t3.responseText;
  }, P && (p2 = (e2) => {
    var t3 = new XMLHttpRequest();
    return t3.open("GET", e2, false), t3.responseType = "arraybuffer", t3.send(null), new Uint8Array(t3.response);
  }), n2 = (e2, t3, _2) => {
    var r3 = new XMLHttpRequest();
    r3.open("GET", e2, true), r3.responseType = "arraybuffer", r3.onload = () => {
      200 == r3.status || 0 == r3.status && r3.response ? t3(r3.response) : _2();
    }, r3.onerror = _2, r3.send(null);
  });
  var b, m, T = console.log.bind(console), O = console.error.bind(console);
  Object.assign(i, g), g = null;
  var S, N, h, l, M, D, v, R = false;
  function A(e2, t3) {
    e2 || z(t3);
  }
  function G() {
    var e2 = m.buffer;
    i.HEAP8 = S = new Int8Array(e2), i.HEAP16 = h = new Int16Array(e2), i.HEAPU8 = N = new Uint8Array(e2), i.HEAPU16 = new Uint16Array(e2), i.HEAP32 = l = new Int32Array(e2), i.HEAPU32 = M = new Uint32Array(e2), i.HEAPF32 = D = new Float32Array(e2), i.HEAPF64 = v = new Float64Array(e2);
  }
  var C = [], I = [], j = [];
  function L() {
    te(C);
  }
  function U() {
    te(I);
  }
  function F() {
    te(j);
  }
  function Y(e2) {
    I.unshift(e2);
  }
  var w = 0, x = null;
  function H(e2) {
    w++;
  }
  function X(e2) {
    if (0 == --w && x) {
      var t3 = x;
      x = null, t3();
    }
  }
  function z(e2) {
    O(e2 = "Aborted(" + e2 + ")"), R = true, e2 += ". Build with -sASSERTIONS for more info.";
    var t3 = new WebAssembly.RuntimeError(e2);
    throw r2(t3), t3;
  }
  var Z, W = "data:application/octet-stream;base64,", B = (e2) => e2.startsWith(W), K = (e2) => e2.startsWith("file://");
  function V() {
    var e2 = "pe-wasm.wasm";
    return B(e2) ? e2 : d(e2);
  }
  function q(e2) {
    if (e2 == Z && b) return new Uint8Array(b);
    if (p2) return p2(e2);
    throw "both async and sync fetching of the wasm failed";
  }
  function k(e2) {
    if (s || P) {
      if ("function" == typeof fetch && !K(e2)) return fetch(e2, {
        credentials: "same-origin"
      }).then((t3) => {
        if (!t3.ok) throw `failed to load wasm binary file at '${e2}'`;
        return t3.arrayBuffer();
      }).catch(() => q(e2));
      if (n2) return new Promise((t3, _2) => {
        n2(e2, (e3) => t3(new Uint8Array(e3)), _2);
      });
    }
    return Promise.resolve().then(() => q(e2));
  }
  function J(e2, t3, _2) {
    return k(e2).then((e3) => WebAssembly.instantiate(e3, t3)).then(_2, (e3) => {
      O(`failed to asynchronously prepare wasm: ${e3}`), z(e3);
    });
  }
  function $(e2, t3, _2, r3) {
    return "function" != typeof WebAssembly.instantiateStreaming || B(t3) || K(t3) || a || "function" != typeof fetch ? J(t3, _2, r3) : fetch(t3, {
      credentials: "same-origin"
    }).then((e3) => WebAssembly.instantiateStreaming(e3, _2).then(r3, function(e4) {
      return O(`wasm streaming compile failed: ${e4}`), O("falling back to ArrayBuffer instantiation"), J(t3, _2, r3);
    }));
  }
  function Q() {
    return {
      a: Re
    };
  }
  function ee() {
    var e2 = Q();
    function t3(e3, t4) {
      return Ae = e3.exports, m = Ae.t, G(), Y(Ae.u), X(), Ae;
    }
    function _2(e3) {
      t3(e3.instance);
    }
    return H(), Z || (Z = V()), $(b, Z, e2, _2).catch(r2), {};
  }
  var te = (e2) => {
    for (; e2.length > 0; ) e2.shift()(i);
  };
  function _e(e2, t3 = "i8") {
    switch (t3.endsWith("*") && (t3 = "*"), t3) {
      case "i1":
      case "i8":
        return S[e2];
      case "i16":
        return h[e2 >> 1];
      case "i32":
        return l[e2 >> 2];
      case "i64":
        z("to do getValue(i64) use WASM_BIGINT");
      case "float":
        return D[e2 >> 2];
      case "double":
        return v[e2 >> 3];
      case "*":
        return M[e2 >> 2];
      default:
        z(`invalid type for getValue: ${t3}`);
    }
  }
  var re = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0, oe = (e2, t3, _2) => {
    for (var r3 = t3 + _2, o4 = t3; e2[o4] && !(o4 >= r3); ) ++o4;
    if (o4 - t3 > 16 && e2.buffer && re) return re.decode(e2.subarray(t3, o4));
    for (var n3 = ""; t3 < o4; ) {
      var p3 = e2[t3++];
      if (128 & p3) {
        var i2 = 63 & e2[t3++];
        if (192 != (224 & p3)) {
          var c2 = 63 & e2[t3++];
          if ((p3 = 224 == (240 & p3) ? (15 & p3) << 12 | i2 << 6 | c2 : (7 & p3) << 18 | i2 << 12 | c2 << 6 | 63 & e2[t3++]) < 65536) n3 += String.fromCharCode(p3);
          else {
            var s2 = p3 - 65536;
            n3 += String.fromCharCode(55296 | s2 >> 10, 56320 | 1023 & s2);
          }
        } else n3 += String.fromCharCode((31 & p3) << 6 | i2);
      } else n3 += String.fromCharCode(p3);
    }
    return n3;
  }, ne = (e2, t3) => e2 ? oe(N, e2, t3) : "";
  function pe(e2, t3, _2) {
    return 0;
  }
  var ie = (e2, t3, _2, r3) => {
    if (!(r3 > 0)) return 0;
    for (var o4 = _2, n3 = _2 + r3 - 1, p3 = 0; p3 < e2.length; ++p3) {
      var i2 = e2.charCodeAt(p3);
      if (i2 >= 55296 && i2 <= 57343 && (i2 = 65536 + ((1023 & i2) << 10) | 1023 & e2.charCodeAt(++p3)), i2 <= 127) {
        if (_2 >= n3) break;
        t3[_2++] = i2;
      } else if (i2 <= 2047) {
        if (_2 + 1 >= n3) break;
        t3[_2++] = 192 | i2 >> 6, t3[_2++] = 128 | 63 & i2;
      } else if (i2 <= 65535) {
        if (_2 + 2 >= n3) break;
        t3[_2++] = 224 | i2 >> 12, t3[_2++] = 128 | i2 >> 6 & 63, t3[_2++] = 128 | 63 & i2;
      } else {
        if (_2 + 3 >= n3) break;
        t3[_2++] = 240 | i2 >> 18, t3[_2++] = 128 | i2 >> 12 & 63, t3[_2++] = 128 | i2 >> 6 & 63, t3[_2++] = 128 | 63 & i2;
      }
    }
    return t3[_2] = 0, _2 - o4;
  }, ce = (e2, t3, _2) => ie(e2, N, t3, _2);
  function se(e2, t3, _2) {
    return 0;
  }
  function Pe(e2, t3, _2, r3) {
  }
  var ae = (e2) => e2 % 4 == 0 && (e2 % 100 != 0 || e2 % 400 == 0), ge = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335], ye = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], ue = (e2) => (ae(e2.getFullYear()) ? ge : ye)[e2.getMonth()] + e2.getDate() - 1, de = (e2, t3) => t3 + 2097152 >>> 0 < 4194305 - !!e2 ? (e2 >>> 0) + 4294967296 * t3 : NaN;
  function fe(e2, t3, _2) {
    var r3 = de(e2, t3), o4 = new Date(1e3 * r3);
    l[_2 >> 2] = o4.getSeconds(), l[_2 + 4 >> 2] = o4.getMinutes(), l[_2 + 8 >> 2] = o4.getHours(), l[_2 + 12 >> 2] = o4.getDate(), l[_2 + 16 >> 2] = o4.getMonth(), l[_2 + 20 >> 2] = o4.getFullYear() - 1900, l[_2 + 24 >> 2] = o4.getDay();
    var n3 = 0 | ue(o4);
    l[_2 + 28 >> 2] = n3, l[_2 + 36 >> 2] = -60 * o4.getTimezoneOffset();
    var p3 = new Date(o4.getFullYear(), 0, 1), i2 = new Date(o4.getFullYear(), 6, 1).getTimezoneOffset(), c2 = p3.getTimezoneOffset(), s2 = 0 | (i2 != c2 && o4.getTimezoneOffset() == Math.min(c2, i2));
    l[_2 + 32 >> 2] = s2;
  }
  var Ee = () => 2147483648, be = (e2) => {
    var t3 = (e2 - m.buffer.byteLength + 65535) / 65536;
    try {
      return m.grow(t3), G(), 1;
    } catch (_2) {
    }
  }, me = {}, Te = () => y || "./this.program", Oe = () => {
    if (!Oe.strings) {
      var e2 = {
        USER: "web_user",
        LOGNAME: "web_user",
        PATH: "/",
        PWD: "/",
        HOME: "/home/web_user",
        LANG: ("object" == typeof navigator && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8",
        _: Te()
      };
      for (var t3 in me) void 0 === me[t3] ? delete e2[t3] : e2[t3] = me[t3];
      var _2 = [];
      for (var t3 in e2) _2.push(`${t3}=${e2[t3]}`);
      Oe.strings = _2;
    }
    return Oe.strings;
  }, Se = (e2, t3) => {
    for (var _2 = 0; _2 < e2.length; ++_2) S[t3++] = e2.charCodeAt(_2);
    S[t3] = 0;
  };
  function Ne(e2, t3, _2, r3, o4) {
    return 70;
  }
  var he = [null, [], []], le = (e2, t3) => {
    var _2 = he[e2];
    0 === t3 || 10 === t3 ? ((1 === e2 ? T : O)(oe(_2, 0)), _2.length = 0) : _2.push(t3);
  }, Me = (e2) => {
    for (var t3 = 0, _2 = 0; _2 < e2.length; ++_2) {
      var r3 = e2.charCodeAt(_2);
      r3 <= 127 ? t3++ : r3 <= 2047 ? t3 += 2 : r3 >= 55296 && r3 <= 57343 ? (t3 += 4, ++_2) : t3 += 3;
    }
    return t3;
  };
  function De(e2, t3, _2) {
    var r3 = Me(e2) + 1, o4 = new Array(r3);
    return ie(e2, o4, 0, o4.length), o4;
  }
  var ve = (e2, t3) => Math.ceil(e2 / t3) * t3, Re = {
    c: pe,
    r: (e2, t3, _2) => {
    },
    h: se,
    d: Pe,
    p: (e2) => {
    },
    o: (e2, t3) => {
    },
    q: (e2, t3, _2) => {
    },
    l: () => {
      z("");
    },
    s: (e2, t3, _2) => N.copyWithin(e2, t3, t3 + _2),
    j: fe,
    n: (e2, t3, _2, r3) => {
      var o4 = (/* @__PURE__ */ new Date()).getFullYear(), n3 = new Date(o4, 0, 1), p3 = new Date(o4, 6, 1), i2 = n3.getTimezoneOffset(), c2 = p3.getTimezoneOffset(), s2 = Math.max(i2, c2);
      M[e2 >> 2] = 60 * s2, l[t3 >> 2] = Number(i2 != c2);
      var P2 = (e3) => e3.toLocaleTimeString(void 0, {
        hour12: false,
        timeZoneName: "short"
      }).split(" ")[1], a2 = P2(n3), g2 = P2(p3);
      c2 < i2 ? (ce(a2, _2, 17), ce(g2, r3, 17)) : (ce(a2, r3, 17), ce(g2, _2, 17));
    },
    i: () => Date.now(),
    m: (e2) => {
      var t3 = N.length;
      e2 >>>= 0;
      var _2 = Ee();
      if (e2 > _2) return false;
      for (var r3 = (e3, t4) => e3 + (t4 - e3 % t4) % t4, o4 = 1; o4 <= 4; o4 *= 2) {
        var n3 = t3 * (1 + 0.2 / o4);
        n3 = Math.min(n3, e2 + 100663296);
        var p3 = Math.min(_2, r3(Math.max(e2, n3), 65536));
        if (be(p3)) return true;
      }
      return false;
    },
    e: (e2, t3) => {
      var _2 = 0;
      return Oe().forEach((r3, o4) => {
        var n3 = t3 + _2;
        M[e2 + 4 * o4 >> 2] = n3, Se(r3, n3), _2 += r3.length + 1;
      }), 0;
    },
    f: (e2, t3) => {
      var _2 = Oe();
      M[e2 >> 2] = _2.length;
      var r3 = 0;
      return _2.forEach((e3) => r3 += e3.length + 1), M[t3 >> 2] = r3, 0;
    },
    a: (e2) => 52,
    g: (e2, t3, _2, r3) => 52,
    k: Ne,
    b: (e2, t3, _2, r3) => {
      for (var o4 = 0, n3 = 0; n3 < _2; n3++) {
        var p3 = M[t3 >> 2], i2 = M[t3 + 4 >> 2];
        t3 += 8;
        for (var c2 = 0; c2 < i2; c2++) le(e2, N[p3 + c2]);
        o4 += i2;
      }
      return M[r3 >> 2] = o4, 0;
    }
  }, Ae = ee();
  i._webidl_free = (e2) => (i._webidl_free = Ae.v)(e2), i._webidl_malloc = (e2) => (i._webidl_malloc = Ae.w)(e2);
  var Ge, Ce = i._emscripten_bind_PeObject_getCode_0 = (e2) => (Ce = i._emscripten_bind_PeObject_getCode_0 = Ae.x)(e2), Ie = i._emscripten_bind_PeObject_getName_1 = (e2, t3) => (Ie = i._emscripten_bind_PeObject_getName_1 = Ae.y)(e2, t3), je = i._emscripten_bind_PeObject_getType_0 = (e2) => (je = i._emscripten_bind_PeObject_getType_0 = Ae.z)(e2), Le = i._emscripten_bind_PeCoordsys_getCode_0 = (e2) => (Le = i._emscripten_bind_PeCoordsys_getCode_0 = Ae.A)(e2), Ue = i._emscripten_bind_PeCoordsys_getName_1 = (e2, t3) => (Ue = i._emscripten_bind_PeCoordsys_getName_1 = Ae.B)(e2, t3), Fe = i._emscripten_bind_PeCoordsys_getType_0 = (e2) => (Fe = i._emscripten_bind_PeCoordsys_getType_0 = Ae.C)(e2), Ye = i._emscripten_bind_VoidPtr___destroy___0 = (e2) => (Ye = i._emscripten_bind_VoidPtr___destroy___0 = Ae.D)(e2), we = i._emscripten_bind_PeDatum_getSpheroid_0 = (e2) => (we = i._emscripten_bind_PeDatum_getSpheroid_0 = Ae.E)(e2), xe = i._emscripten_bind_PeDatum_getCode_0 = (e2) => (xe = i._emscripten_bind_PeDatum_getCode_0 = Ae.F)(e2), He = i._emscripten_bind_PeDatum_getName_1 = (e2, t3) => (He = i._emscripten_bind_PeDatum_getName_1 = Ae.G)(e2, t3), Xe = i._emscripten_bind_PeDatum_getType_0 = (e2) => (Xe = i._emscripten_bind_PeDatum_getType_0 = Ae.H)(e2), ze = i._emscripten_bind_PeDefs_get_PE_BUFFER_MAX_0 = (e2) => (ze = i._emscripten_bind_PeDefs_get_PE_BUFFER_MAX_0 = Ae.I)(e2), Ze = i._emscripten_bind_PeDefs_get_PE_NAME_MAX_0 = (e2) => (Ze = i._emscripten_bind_PeDefs_get_PE_NAME_MAX_0 = Ae.J)(e2), We = i._emscripten_bind_PeDefs_get_PE_MGRS_MAX_0 = (e2) => (We = i._emscripten_bind_PeDefs_get_PE_MGRS_MAX_0 = Ae.K)(e2), Be = i._emscripten_bind_PeDefs_get_PE_USNG_MAX_0 = (e2) => (Be = i._emscripten_bind_PeDefs_get_PE_USNG_MAX_0 = Ae.L)(e2), Ke = i._emscripten_bind_PeDefs_get_PE_DD_MAX_0 = (e2) => (Ke = i._emscripten_bind_PeDefs_get_PE_DD_MAX_0 = Ae.M)(e2), Ve = i._emscripten_bind_PeDefs_get_PE_DMS_MAX_0 = (e2) => (Ve = i._emscripten_bind_PeDefs_get_PE_DMS_MAX_0 = Ae.N)(e2), qe = i._emscripten_bind_PeDefs_get_PE_DDM_MAX_0 = (e2) => (qe = i._emscripten_bind_PeDefs_get_PE_DDM_MAX_0 = Ae.O)(e2), ke = i._emscripten_bind_PeDefs_get_PE_UTM_MAX_0 = (e2) => (ke = i._emscripten_bind_PeDefs_get_PE_UTM_MAX_0 = Ae.P)(e2), Je = i._emscripten_bind_PeDefs_get_PE_PARM_MAX_0 = (e2) => (Je = i._emscripten_bind_PeDefs_get_PE_PARM_MAX_0 = Ae.Q)(e2), $e = i._emscripten_bind_PeDefs_get_PE_TYPE_NONE_0 = (e2) => ($e = i._emscripten_bind_PeDefs_get_PE_TYPE_NONE_0 = Ae.R)(e2), Qe = i._emscripten_bind_PeDefs_get_PE_TYPE_GEOGCS_0 = (e2) => (Qe = i._emscripten_bind_PeDefs_get_PE_TYPE_GEOGCS_0 = Ae.S)(e2), et = i._emscripten_bind_PeDefs_get_PE_TYPE_PROJCS_0 = (e2) => (et = i._emscripten_bind_PeDefs_get_PE_TYPE_PROJCS_0 = Ae.T)(e2), tt = i._emscripten_bind_PeDefs_get_PE_TYPE_GEOGTRAN_0 = (e2) => (tt = i._emscripten_bind_PeDefs_get_PE_TYPE_GEOGTRAN_0 = Ae.U)(e2), _t = i._emscripten_bind_PeDefs_get_PE_TYPE_COORDSYS_0 = (e2) => (_t = i._emscripten_bind_PeDefs_get_PE_TYPE_COORDSYS_0 = Ae.V)(e2), rt = i._emscripten_bind_PeDefs_get_PE_TYPE_UNIT_0 = (e2) => (rt = i._emscripten_bind_PeDefs_get_PE_TYPE_UNIT_0 = Ae.W)(e2), ot = i._emscripten_bind_PeDefs_get_PE_TYPE_LINUNIT_0 = (e2) => (ot = i._emscripten_bind_PeDefs_get_PE_TYPE_LINUNIT_0 = Ae.X)(e2), nt = i._emscripten_bind_PeDefs_get_PE_STR_OPTS_NONE_0 = (e2) => (nt = i._emscripten_bind_PeDefs_get_PE_STR_OPTS_NONE_0 = Ae.Y)(e2), pt = i._emscripten_bind_PeDefs_get_PE_STR_AUTH_NONE_0 = (e2) => (pt = i._emscripten_bind_PeDefs_get_PE_STR_AUTH_NONE_0 = Ae.Z)(e2), it = i._emscripten_bind_PeDefs_get_PE_STR_AUTH_TOP_0 = (e2) => (it = i._emscripten_bind_PeDefs_get_PE_STR_AUTH_TOP_0 = Ae._)(e2), ct = i._emscripten_bind_PeDefs_get_PE_STR_NAME_CANON_0 = (e2) => (ct = i._emscripten_bind_PeDefs_get_PE_STR_NAME_CANON_0 = Ae.$)(e2), st = i._emscripten_bind_PeDefs_get_PE_STR_FMT_WKT_0 = (e2) => (st = i._emscripten_bind_PeDefs_get_PE_STR_FMT_WKT_0 = Ae.aa)(e2), Pt = i._emscripten_bind_PeDefs_get_PE_STR_FMT_WKT2_0 = (e2) => (Pt = i._emscripten_bind_PeDefs_get_PE_STR_FMT_WKT2_0 = Ae.ba)(e2), at = i._emscripten_bind_PeDefs_get_PE_PARM_X0_0 = (e2) => (at = i._emscripten_bind_PeDefs_get_PE_PARM_X0_0 = Ae.ca)(e2), gt = i._emscripten_bind_PeDefs_get_PE_PARM_ND_0 = (e2) => (gt = i._emscripten_bind_PeDefs_get_PE_PARM_ND_0 = Ae.da)(e2), yt = i._emscripten_bind_PeDefs_get_PE_TRANSFORM_1_TO_2_0 = (e2) => (yt = i._emscripten_bind_PeDefs_get_PE_TRANSFORM_1_TO_2_0 = Ae.ea)(e2), ut = i._emscripten_bind_PeDefs_get_PE_TRANSFORM_2_TO_1_0 = (e2) => (ut = i._emscripten_bind_PeDefs_get_PE_TRANSFORM_2_TO_1_0 = Ae.fa)(e2), dt = i._emscripten_bind_PeDefs_get_PE_TRANSFORM_P_TO_G_0 = (e2) => (dt = i._emscripten_bind_PeDefs_get_PE_TRANSFORM_P_TO_G_0 = Ae.ga)(e2), ft = i._emscripten_bind_PeDefs_get_PE_TRANSFORM_G_TO_P_0 = (e2) => (ft = i._emscripten_bind_PeDefs_get_PE_TRANSFORM_G_TO_P_0 = Ae.ha)(e2), Et = i._emscripten_bind_PeDefs_get_PE_HORIZON_RECT_0 = (e2) => (Et = i._emscripten_bind_PeDefs_get_PE_HORIZON_RECT_0 = Ae.ia)(e2), bt = i._emscripten_bind_PeDefs_get_PE_HORIZON_POLY_0 = (e2) => (bt = i._emscripten_bind_PeDefs_get_PE_HORIZON_POLY_0 = Ae.ja)(e2), mt = i._emscripten_bind_PeDefs_get_PE_HORIZON_LINE_0 = (e2) => (mt = i._emscripten_bind_PeDefs_get_PE_HORIZON_LINE_0 = Ae.ka)(e2), Tt = i._emscripten_bind_PeDefs_get_PE_HORIZON_DELTA_0 = (e2) => (Tt = i._emscripten_bind_PeDefs_get_PE_HORIZON_DELTA_0 = Ae.la)(e2), Ot = i._emscripten_bind_PeFactory_initialize_1 = (e2) => (Ot = i._emscripten_bind_PeFactory_initialize_1 = Ae.ma)(e2), St = i._emscripten_bind_PeFactory_factoryByType_2 = (e2, t3) => (St = i._emscripten_bind_PeFactory_factoryByType_2 = Ae.na)(e2, t3), Nt = i._emscripten_bind_PeFactory_fromString_2 = (e2, t3) => (Nt = i._emscripten_bind_PeFactory_fromString_2 = Ae.oa)(e2, t3), ht = i._emscripten_bind_PeFactory_getCode_1 = (e2) => (ht = i._emscripten_bind_PeFactory_getCode_1 = Ae.pa)(e2), lt = i._emscripten_bind_PeGCSExtent_PeGCSExtent_6 = (e2, t3, _2, r3, o4, n3) => (lt = i._emscripten_bind_PeGCSExtent_PeGCSExtent_6 = Ae.qa)(e2, t3, _2, r3, o4, n3), Mt = i._emscripten_bind_PeGCSExtent_getLLon_0 = (e2) => (Mt = i._emscripten_bind_PeGCSExtent_getLLon_0 = Ae.ra)(e2), Dt = i._emscripten_bind_PeGCSExtent_getSLat_0 = (e2) => (Dt = i._emscripten_bind_PeGCSExtent_getSLat_0 = Ae.sa)(e2), vt = i._emscripten_bind_PeGCSExtent_getRLon_0 = (e2) => (vt = i._emscripten_bind_PeGCSExtent_getRLon_0 = Ae.ta)(e2), Rt = i._emscripten_bind_PeGCSExtent_getNLat_0 = (e2) => (Rt = i._emscripten_bind_PeGCSExtent_getNLat_0 = Ae.ua)(e2), At = i._emscripten_bind_PeGCSExtent___destroy___0 = (e2) => (At = i._emscripten_bind_PeGCSExtent___destroy___0 = Ae.va)(e2), Gt = i._emscripten_bind_PeGeogcs_getDatum_0 = (e2) => (Gt = i._emscripten_bind_PeGeogcs_getDatum_0 = Ae.wa)(e2), Ct = i._emscripten_bind_PeGeogcs_getPrimem_0 = (e2) => (Ct = i._emscripten_bind_PeGeogcs_getPrimem_0 = Ae.xa)(e2), It = i._emscripten_bind_PeGeogcs_getUnit_0 = (e2) => (It = i._emscripten_bind_PeGeogcs_getUnit_0 = Ae.ya)(e2), jt = i._emscripten_bind_PeGeogcs_getCode_0 = (e2) => (jt = i._emscripten_bind_PeGeogcs_getCode_0 = Ae.za)(e2), Lt = i._emscripten_bind_PeGeogcs_getName_1 = (e2, t3) => (Lt = i._emscripten_bind_PeGeogcs_getName_1 = Ae.Aa)(e2, t3), Ut = i._emscripten_bind_PeGeogcs_getType_0 = (e2) => (Ut = i._emscripten_bind_PeGeogcs_getType_0 = Ae.Ba)(e2), Ft = i._emscripten_bind_PeGeogtran_isEqual_1 = (e2, t3) => (Ft = i._emscripten_bind_PeGeogtran_isEqual_1 = Ae.Ca)(e2, t3), Yt = i._emscripten_bind_PeGeogtran_getGeogcs1_0 = (e2) => (Yt = i._emscripten_bind_PeGeogtran_getGeogcs1_0 = Ae.Da)(e2), wt = i._emscripten_bind_PeGeogtran_getGeogcs2_0 = (e2) => (wt = i._emscripten_bind_PeGeogtran_getGeogcs2_0 = Ae.Ea)(e2), xt = i._emscripten_bind_PeGeogtran_getParameters_0 = (e2) => (xt = i._emscripten_bind_PeGeogtran_getParameters_0 = Ae.Fa)(e2), Ht = i._emscripten_bind_PeGeogtran_loadConstants_0 = (e2) => (Ht = i._emscripten_bind_PeGeogtran_loadConstants_0 = Ae.Ga)(e2), Xt = i._emscripten_bind_PeGeogtran_getCode_0 = (e2) => (Xt = i._emscripten_bind_PeGeogtran_getCode_0 = Ae.Ha)(e2), zt = i._emscripten_bind_PeGeogtran_getName_1 = (e2, t3) => (zt = i._emscripten_bind_PeGeogtran_getName_1 = Ae.Ia)(e2, t3), Zt = i._emscripten_bind_PeGeogtran_getType_0 = (e2) => (Zt = i._emscripten_bind_PeGeogtran_getType_0 = Ae.Ja)(e2), Wt = i._emscripten_bind_PeGTlistExtended_getGTlist_6 = (e2, t3, _2, r3, o4, n3) => (Wt = i._emscripten_bind_PeGTlistExtended_getGTlist_6 = Ae.Ka)(e2, t3, _2, r3, o4, n3), Bt = i._emscripten_bind_PeGTlistExtended_get_PE_GTLIST_OPTS_COMMON_0 = (e2) => (Bt = i._emscripten_bind_PeGTlistExtended_get_PE_GTLIST_OPTS_COMMON_0 = Ae.La)(e2), Kt = i._emscripten_bind_PeGTlistExtendedEntry_getEntries_0 = (e2) => (Kt = i._emscripten_bind_PeGTlistExtendedEntry_getEntries_0 = Ae.Ma)(e2), Vt = i._emscripten_bind_PeGTlistExtendedEntry_getSteps_0 = (e2) => (Vt = i._emscripten_bind_PeGTlistExtendedEntry_getSteps_0 = Ae.Na)(e2), qt = i._emscripten_bind_PeGTlistExtendedEntry_Delete_1 = (e2) => (qt = i._emscripten_bind_PeGTlistExtendedEntry_Delete_1 = Ae.Oa)(e2), kt = i._emscripten_bind_PeGTlistExtendedGTs_getDirection_0 = (e2) => (kt = i._emscripten_bind_PeGTlistExtendedGTs_getDirection_0 = Ae.Pa)(e2), Jt = i._emscripten_bind_PeGTlistExtendedGTs_getGeogtran_0 = (e2) => (Jt = i._emscripten_bind_PeGTlistExtendedGTs_getGeogtran_0 = Ae.Qa)(e2), $t = i._emscripten_bind_PeHorizon_getNump_0 = (e2) => ($t = i._emscripten_bind_PeHorizon_getNump_0 = Ae.Ra)(e2), Qt = i._emscripten_bind_PeHorizon_getKind_0 = (e2) => (Qt = i._emscripten_bind_PeHorizon_getKind_0 = Ae.Sa)(e2), e_ = i._emscripten_bind_PeHorizon_getInclusive_0 = (e2) => (e_ = i._emscripten_bind_PeHorizon_getInclusive_0 = Ae.Ta)(e2), t_ = i._emscripten_bind_PeHorizon_getSize_0 = (e2) => (t_ = i._emscripten_bind_PeHorizon_getSize_0 = Ae.Ua)(e2), __ = i._emscripten_bind_PeHorizon_getCoord_0 = (e2) => (__ = i._emscripten_bind_PeHorizon_getCoord_0 = Ae.Va)(e2), r_ = i._emscripten_bind_PeInteger_PeInteger_1 = (e2) => (r_ = i._emscripten_bind_PeInteger_PeInteger_1 = Ae.Wa)(e2), o_ = i._emscripten_bind_PeInteger_get_val_0 = (e2) => (o_ = i._emscripten_bind_PeInteger_get_val_0 = Ae.Xa)(e2), n_ = i._emscripten_bind_PeInteger_set_val_1 = (e2, t3) => (n_ = i._emscripten_bind_PeInteger_set_val_1 = Ae.Ya)(e2, t3), p_ = i._emscripten_bind_PeInteger___destroy___0 = (e2) => (p_ = i._emscripten_bind_PeInteger___destroy___0 = Ae.Za)(e2), i_ = i._emscripten_bind_PeNotationMgrs_get_PE_MGRS_STYLE_NEW_0 = (e2) => (i_ = i._emscripten_bind_PeNotationMgrs_get_PE_MGRS_STYLE_NEW_0 = Ae._a)(e2), c_ = i._emscripten_bind_PeNotationMgrs_get_PE_MGRS_STYLE_OLD_0 = (e2) => (c_ = i._emscripten_bind_PeNotationMgrs_get_PE_MGRS_STYLE_OLD_0 = Ae.$a)(e2), s_ = i._emscripten_bind_PeNotationMgrs_get_PE_MGRS_STYLE_AUTO_0 = (e2) => (s_ = i._emscripten_bind_PeNotationMgrs_get_PE_MGRS_STYLE_AUTO_0 = Ae.ab)(e2), P_ = i._emscripten_bind_PeNotationMgrs_get_PE_MGRS_180_ZONE_1_PLUS_0 = (e2) => (P_ = i._emscripten_bind_PeNotationMgrs_get_PE_MGRS_180_ZONE_1_PLUS_0 = Ae.bb)(e2), a_ = i._emscripten_bind_PeNotationMgrs_get_PE_MGRS_ADD_SPACES_0 = (e2) => (a_ = i._emscripten_bind_PeNotationMgrs_get_PE_MGRS_ADD_SPACES_0 = Ae.cb)(e2), g_ = i._emscripten_bind_PeNotationUtm_get_PE_UTM_OPTS_NONE_0 = (e2) => (g_ = i._emscripten_bind_PeNotationUtm_get_PE_UTM_OPTS_NONE_0 = Ae.db)(e2), y_ = i._emscripten_bind_PeNotationUtm_get_PE_UTM_OPTS_NS_0 = (e2) => (y_ = i._emscripten_bind_PeNotationUtm_get_PE_UTM_OPTS_NS_0 = Ae.eb)(e2), u_ = i._emscripten_bind_PeNotationUtm_get_PE_UTM_OPTS_NS_STRICT_0 = (e2) => (u_ = i._emscripten_bind_PeNotationUtm_get_PE_UTM_OPTS_NS_STRICT_0 = Ae.fb)(e2), d_ = i._emscripten_bind_PeNotationUtm_get_PE_UTM_OPTS_ADD_SPACES_0 = (e2) => (d_ = i._emscripten_bind_PeNotationUtm_get_PE_UTM_OPTS_ADD_SPACES_0 = Ae.gb)(e2), f_ = i._emscripten_bind_PeParameter_getValue_0 = (e2) => (f_ = i._emscripten_bind_PeParameter_getValue_0 = Ae.hb)(e2), E_ = i._emscripten_bind_PeParameter_getCode_0 = (e2) => (E_ = i._emscripten_bind_PeParameter_getCode_0 = Ae.ib)(e2), b_ = i._emscripten_bind_PeParameter_getName_1 = (e2, t3) => (b_ = i._emscripten_bind_PeParameter_getName_1 = Ae.jb)(e2, t3), m_ = i._emscripten_bind_PeParameter_getType_0 = (e2) => (m_ = i._emscripten_bind_PeParameter_getType_0 = Ae.kb)(e2), T_ = i._emscripten_bind_PePCSInfo_getCentralMeridian_0 = (e2) => (T_ = i._emscripten_bind_PePCSInfo_getCentralMeridian_0 = Ae.lb)(e2), O_ = i._emscripten_bind_PePCSInfo_getDomainMinx_0 = (e2) => (O_ = i._emscripten_bind_PePCSInfo_getDomainMinx_0 = Ae.mb)(e2), S_ = i._emscripten_bind_PePCSInfo_getDomainMiny_0 = (e2) => (S_ = i._emscripten_bind_PePCSInfo_getDomainMiny_0 = Ae.nb)(e2), N_ = i._emscripten_bind_PePCSInfo_getDomainMaxx_0 = (e2) => (N_ = i._emscripten_bind_PePCSInfo_getDomainMaxx_0 = Ae.ob)(e2), h_ = i._emscripten_bind_PePCSInfo_getDomainMaxy_0 = (e2) => (h_ = i._emscripten_bind_PePCSInfo_getDomainMaxy_0 = Ae.pb)(e2), l_ = i._emscripten_bind_PePCSInfo_getNorthPoleLocation_0 = (e2) => (l_ = i._emscripten_bind_PePCSInfo_getNorthPoleLocation_0 = Ae.qb)(e2), M_ = i._emscripten_bind_PePCSInfo_getNorthPoleGeometry_0 = (e2) => (M_ = i._emscripten_bind_PePCSInfo_getNorthPoleGeometry_0 = Ae.rb)(e2), D_ = i._emscripten_bind_PePCSInfo_getSouthPoleLocation_0 = (e2) => (D_ = i._emscripten_bind_PePCSInfo_getSouthPoleLocation_0 = Ae.sb)(e2), v_ = i._emscripten_bind_PePCSInfo_getSouthPoleGeometry_0 = (e2) => (v_ = i._emscripten_bind_PePCSInfo_getSouthPoleGeometry_0 = Ae.tb)(e2), R_ = i._emscripten_bind_PePCSInfo_isDensificationNeeded_0 = (e2) => (R_ = i._emscripten_bind_PePCSInfo_isDensificationNeeded_0 = Ae.ub)(e2), A_ = i._emscripten_bind_PePCSInfo_isGcsHorizonMultiOverlap_0 = (e2) => (A_ = i._emscripten_bind_PePCSInfo_isGcsHorizonMultiOverlap_0 = Ae.vb)(e2), G_ = i._emscripten_bind_PePCSInfo_isPannableRectangle_0 = (e2) => (G_ = i._emscripten_bind_PePCSInfo_isPannableRectangle_0 = Ae.wb)(e2), C_ = i._emscripten_bind_PePCSInfo_generate_2 = (e2, t3) => (C_ = i._emscripten_bind_PePCSInfo_generate_2 = Ae.xb)(e2, t3), I_ = i._emscripten_bind_PePCSInfo_get_PE_PCSINFO_OPTION_NONE_0 = (e2) => (I_ = i._emscripten_bind_PePCSInfo_get_PE_PCSINFO_OPTION_NONE_0 = Ae.yb)(e2), j_ = i._emscripten_bind_PePCSInfo_get_PE_PCSINFO_OPTION_DOMAIN_0 = (e2) => (j_ = i._emscripten_bind_PePCSInfo_get_PE_PCSINFO_OPTION_DOMAIN_0 = Ae.zb)(e2), L_ = i._emscripten_bind_PePCSInfo_get_PE_POLE_OUTSIDE_BOUNDARY_0 = (e2) => (L_ = i._emscripten_bind_PePCSInfo_get_PE_POLE_OUTSIDE_BOUNDARY_0 = Ae.Ab)(e2), U_ = i._emscripten_bind_PePCSInfo_get_PE_POLE_POINT_0 = (e2) => (U_ = i._emscripten_bind_PePCSInfo_get_PE_POLE_POINT_0 = Ae.Bb)(e2), F_ = i._emscripten_bind_PePrimem_getLongitude_0 = (e2) => (F_ = i._emscripten_bind_PePrimem_getLongitude_0 = Ae.Cb)(e2), Y_ = i._emscripten_bind_PePrimem_getCode_0 = (e2) => (Y_ = i._emscripten_bind_PePrimem_getCode_0 = Ae.Db)(e2), w_ = i._emscripten_bind_PePrimem_getName_1 = (e2, t3) => (w_ = i._emscripten_bind_PePrimem_getName_1 = Ae.Eb)(e2, t3), x_ = i._emscripten_bind_PePrimem_getType_0 = (e2) => (x_ = i._emscripten_bind_PePrimem_getType_0 = Ae.Fb)(e2), H_ = i._emscripten_bind_PeProjcs_getGeogcs_0 = (e2) => (H_ = i._emscripten_bind_PeProjcs_getGeogcs_0 = Ae.Gb)(e2), X_ = i._emscripten_bind_PeProjcs_getParameters_0 = (e2) => (X_ = i._emscripten_bind_PeProjcs_getParameters_0 = Ae.Hb)(e2), z_ = i._emscripten_bind_PeProjcs_getUnit_0 = (e2) => (z_ = i._emscripten_bind_PeProjcs_getUnit_0 = Ae.Ib)(e2), Z_ = i._emscripten_bind_PeProjcs_loadConstants_0 = (e2) => (Z_ = i._emscripten_bind_PeProjcs_loadConstants_0 = Ae.Jb)(e2), W_ = i._emscripten_bind_PeProjcs_horizonGcsGenerate_0 = (e2) => (W_ = i._emscripten_bind_PeProjcs_horizonGcsGenerate_0 = Ae.Kb)(e2), B_ = i._emscripten_bind_PeProjcs_horizonPcsGenerate_0 = (e2) => (B_ = i._emscripten_bind_PeProjcs_horizonPcsGenerate_0 = Ae.Lb)(e2), K_ = i._emscripten_bind_PeProjcs_getCode_0 = (e2) => (K_ = i._emscripten_bind_PeProjcs_getCode_0 = Ae.Mb)(e2), V_ = i._emscripten_bind_PeProjcs_getName_1 = (e2, t3) => (V_ = i._emscripten_bind_PeProjcs_getName_1 = Ae.Nb)(e2, t3), q_ = i._emscripten_bind_PeProjcs_getType_0 = (e2) => (q_ = i._emscripten_bind_PeProjcs_getType_0 = Ae.Ob)(e2), k_ = i._emscripten_bind_PeSpheroid_getAxis_0 = (e2) => (k_ = i._emscripten_bind_PeSpheroid_getAxis_0 = Ae.Pb)(e2), J_ = i._emscripten_bind_PeSpheroid_getFlattening_0 = (e2) => (J_ = i._emscripten_bind_PeSpheroid_getFlattening_0 = Ae.Qb)(e2), $_ = i._emscripten_bind_PeSpheroid_getCode_0 = (e2) => ($_ = i._emscripten_bind_PeSpheroid_getCode_0 = Ae.Rb)(e2), Q_ = i._emscripten_bind_PeSpheroid_getName_1 = (e2, t3) => (Q_ = i._emscripten_bind_PeSpheroid_getName_1 = Ae.Sb)(e2, t3), er = i._emscripten_bind_PeSpheroid_getType_0 = (e2) => (er = i._emscripten_bind_PeSpheroid_getType_0 = Ae.Tb)(e2), tr = i._emscripten_bind_PeUnit_getUnitFactor_0 = (e2) => (tr = i._emscripten_bind_PeUnit_getUnitFactor_0 = Ae.Ub)(e2), _r = i._emscripten_bind_PeUnit_getCode_0 = (e2) => (_r = i._emscripten_bind_PeUnit_getCode_0 = Ae.Vb)(e2), rr = i._emscripten_bind_PeUnit_getName_1 = (e2, t3) => (rr = i._emscripten_bind_PeUnit_getName_1 = Ae.Wb)(e2, t3), or = i._emscripten_bind_PeUnit_getType_0 = (e2) => (or = i._emscripten_bind_PeUnit_getType_0 = Ae.Xb)(e2), nr = i._emscripten_bind_PeVersion_version_string_0 = (e2) => (nr = i._emscripten_bind_PeVersion_version_string_0 = Ae.Yb)(e2);
  function pr() {
    function e2() {
      Ge || (Ge = true, i.calledRun = true, R || (U(), t2(i), F()));
    }
    w > 0 || (L(), w > 0 || e2());
  }
  function ir() {
  }
  function cr(e2) {
    return (e2 || ir).__cache__;
  }
  function sr(e2, t3) {
    var _2 = cr(t3), r3 = _2[e2];
    return r3 || ((r3 = Object.create((t3 || ir).prototype)).ptr = e2, _2[e2] = r3);
  }
  function Pr(e2, t3) {
    return sr(e2.ptr, t3);
  }
  function ar(e2) {
    if (!e2.__destroy__) throw "Error: Cannot destroy object. (Did you create it yourself?)";
    e2.__destroy__(), delete cr(e2.__class__)[e2.ptr];
  }
  function gr(e2, t3) {
    return e2.ptr === t3.ptr;
  }
  function yr(e2) {
    return e2.ptr;
  }
  function ur(e2) {
    return e2.__class__;
  }
  i._pe_getPeGTlistExtendedEntrySize = () => (i._pe_getPeGTlistExtendedEntrySize = Ae.Zb)(), i._pe_getPeGTlistExtendedGTsSize = () => (i._pe_getPeGTlistExtendedGTsSize = Ae._b)(), i._pe_getPeHorizonSize = () => (i._pe_getPeHorizonSize = Ae.$b)(), i._pe_geog_to_geog = (e2, t3, _2, r3, o4) => (i._pe_geog_to_geog = Ae.bc)(e2, t3, _2, r3, o4), i._pe_geog_to_proj = (e2, t3, _2) => (i._pe_geog_to_proj = Ae.cc)(e2, t3, _2), i._pe_geog_to_dd = (e2, t3, _2, r3, o4) => (i._pe_geog_to_dd = Ae.dc)(e2, t3, _2, r3, o4), i._pe_dd_to_geog = (e2, t3, _2, r3) => (i._pe_dd_to_geog = Ae.ec)(e2, t3, _2, r3), i._pe_geog_to_ddm = (e2, t3, _2, r3, o4) => (i._pe_geog_to_ddm = Ae.fc)(e2, t3, _2, r3, o4), i._pe_ddm_to_geog = (e2, t3, _2, r3) => (i._pe_ddm_to_geog = Ae.gc)(e2, t3, _2, r3), i._pe_geog_to_dms = (e2, t3, _2, r3, o4) => (i._pe_geog_to_dms = Ae.hc)(e2, t3, _2, r3, o4), i._pe_dms_to_geog = (e2, t3, _2, r3) => (i._pe_dms_to_geog = Ae.ic)(e2, t3, _2, r3), i._pe_geog_to_mgrs_extended = (e2, t3, _2, r3, o4, n3, p3) => (i._pe_geog_to_mgrs_extended = Ae.jc)(e2, t3, _2, r3, o4, n3, p3), i._pe_mgrs_to_geog_extended = (e2, t3, _2, r3, o4) => (i._pe_mgrs_to_geog_extended = Ae.kc)(e2, t3, _2, r3, o4), i._pe_geog_to_usng = (e2, t3, _2, r3, o4, n3, p3) => (i._pe_geog_to_usng = Ae.lc)(e2, t3, _2, r3, o4, n3, p3), i._pe_usng_to_geog = (e2, t3, _2, r3) => (i._pe_usng_to_geog = Ae.mc)(e2, t3, _2, r3), i._pe_geog_to_utm = (e2, t3, _2, r3, o4) => (i._pe_geog_to_utm = Ae.nc)(e2, t3, _2, r3, o4), i._pe_utm_to_geog = (e2, t3, _2, r3, o4) => (i._pe_utm_to_geog = Ae.oc)(e2, t3, _2, r3, o4), i._pe_object_to_string_ext = (e2, t3, _2) => (i._pe_object_to_string_ext = Ae.pc)(e2, t3, _2), i._pe_proj_to_geog_center = (e2, t3, _2, r3) => (i._pe_proj_to_geog_center = Ae.qc)(e2, t3, _2, r3), i.getValue = _e, i.UTF8ToString = ne, x = function e2() {
    Ge || pr(), Ge || (x = e2);
  }, pr(), ir.prototype = Object.create(ir.prototype), ir.prototype.constructor = ir, ir.prototype.__class__ = ir, ir.__cache__ = {}, i.WrapperObject = ir, i.getCache = cr, i.wrapPointer = sr, i.castObject = Pr, i.NULL = sr(0), i.destroy = ar, i.compare = gr, i.getPointer = yr, i.getClass = ur;
  var dr = {
    buffer: 0,
    size: 0,
    pos: 0,
    temps: [],
    needed: 0,
    prepare() {
      if (dr.needed) {
        for (var e2 = 0; e2 < dr.temps.length; e2++) i._webidl_free(dr.temps[e2]);
        dr.temps.length = 0, i._webidl_free(dr.buffer), dr.buffer = 0, dr.size += dr.needed, dr.needed = 0;
      }
      dr.buffer || (dr.size += 128, dr.buffer = i._webidl_malloc(dr.size), A(dr.buffer)), dr.pos = 0;
    },
    alloc(e2, t3) {
      A(dr.buffer);
      var _2, r3 = t3.BYTES_PER_ELEMENT, o4 = e2.length * r3;
      return o4 = ve(o4, 8), dr.pos + o4 >= dr.size ? (A(o4 > 0), dr.needed += o4, _2 = i._webidl_malloc(o4), dr.temps.push(_2)) : (_2 = dr.buffer + dr.pos, dr.pos += o4), _2;
    },
    copy(e2, t3, _2) {
      _2 /= t3.BYTES_PER_ELEMENT;
      for (var r3 = 0; r3 < e2.length; r3++) t3[_2 + r3] = e2[r3];
    }
  };
  function fr(e2) {
    if ("string" == typeof e2) {
      var t3 = De(e2), _2 = dr.alloc(t3, S);
      return dr.copy(t3, S, _2), _2;
    }
    return e2;
  }
  function Er(e2) {
    if ("object" == typeof e2) {
      var t3 = dr.alloc(e2, S);
      return dr.copy(e2, S, t3), t3;
    }
    return e2;
  }
  function br(e2) {
    if ("object" == typeof e2) {
      var t3 = dr.alloc(e2, h);
      return dr.copy(e2, h, t3), t3;
    }
    return e2;
  }
  function mr(e2) {
    if ("object" == typeof e2) {
      var t3 = dr.alloc(e2, l);
      return dr.copy(e2, l, t3), t3;
    }
    return e2;
  }
  function Tr(e2) {
    if ("object" == typeof e2) {
      var t3 = dr.alloc(e2, D);
      return dr.copy(e2, D, t3), t3;
    }
    return e2;
  }
  function Or(e2) {
    if ("object" == typeof e2) {
      var t3 = dr.alloc(e2, v);
      return dr.copy(e2, v, t3), t3;
    }
    return e2;
  }
  function Sr() {
    throw "cannot construct a PeObject, no constructor in IDL";
  }
  function Nr() {
    throw "cannot construct a PeCoordsys, no constructor in IDL";
  }
  function hr() {
    throw "cannot construct a VoidPtr, no constructor in IDL";
  }
  function lr() {
    throw "cannot construct a PeDatum, no constructor in IDL";
  }
  function Mr() {
    throw "cannot construct a PeDefs, no constructor in IDL";
  }
  function Dr() {
    throw "cannot construct a PeFactory, no constructor in IDL";
  }
  function vr(e2, t3, _2, r3, o4, n3) {
    e2 && "object" == typeof e2 && (e2 = e2.ptr), t3 && "object" == typeof t3 && (t3 = t3.ptr), _2 && "object" == typeof _2 && (_2 = _2.ptr), r3 && "object" == typeof r3 && (r3 = r3.ptr), o4 && "object" == typeof o4 && (o4 = o4.ptr), n3 && "object" == typeof n3 && (n3 = n3.ptr), this.ptr = lt(e2, t3, _2, r3, o4, n3), cr(vr)[this.ptr] = this;
  }
  function Rr() {
    throw "cannot construct a PeGeogcs, no constructor in IDL";
  }
  function Ar() {
    throw "cannot construct a PeGeogtran, no constructor in IDL";
  }
  function Gr() {
    throw "cannot construct a PeGTlistExtended, no constructor in IDL";
  }
  function Cr() {
    throw "cannot construct a PeGTlistExtendedEntry, no constructor in IDL";
  }
  function Ir() {
    throw "cannot construct a PeGTlistExtendedGTs, no constructor in IDL";
  }
  function jr() {
    throw "cannot construct a PeHorizon, no constructor in IDL";
  }
  function Lr(e2) {
    e2 && "object" == typeof e2 && (e2 = e2.ptr), this.ptr = r_(e2), cr(Lr)[this.ptr] = this;
  }
  function Ur() {
    throw "cannot construct a PeNotationMgrs, no constructor in IDL";
  }
  function Fr() {
    throw "cannot construct a PeNotationUtm, no constructor in IDL";
  }
  function Yr() {
    throw "cannot construct a PeParameter, no constructor in IDL";
  }
  function wr() {
    throw "cannot construct a PePCSInfo, no constructor in IDL";
  }
  function xr() {
    throw "cannot construct a PePrimem, no constructor in IDL";
  }
  function Hr() {
    throw "cannot construct a PeProjcs, no constructor in IDL";
  }
  function Xr() {
    throw "cannot construct a PeSpheroid, no constructor in IDL";
  }
  function zr() {
    throw "cannot construct a PeUnit, no constructor in IDL";
  }
  function Zr() {
    throw "cannot construct a PeVersion, no constructor in IDL";
  }
  return Sr.prototype = Object.create(ir.prototype), Sr.prototype.constructor = Sr, Sr.prototype.__class__ = Sr, Sr.__cache__ = {}, i.PeObject = Sr, Sr.prototype.getCode = Sr.prototype.getCode = function() {
    var e2 = this.ptr;
    return Ce(e2);
  }, Sr.prototype.getName = Sr.prototype.getName = function(e2) {
    var t3 = this.ptr;
    return dr.prepare(), "object" == typeof e2 && (e2 = Er(e2)), ne(Ie(t3, e2));
  }, Sr.prototype.getType = Sr.prototype.getType = function() {
    var e2 = this.ptr;
    return je(e2);
  }, Nr.prototype = Object.create(Sr.prototype), Nr.prototype.constructor = Nr, Nr.prototype.__class__ = Nr, Nr.__cache__ = {}, i.PeCoordsys = Nr, Nr.prototype.getCode = Nr.prototype.getCode = function() {
    var e2 = this.ptr;
    return Le(e2);
  }, Nr.prototype.getName = Nr.prototype.getName = function(e2) {
    var t3 = this.ptr;
    return dr.prepare(), "object" == typeof e2 && (e2 = Er(e2)), ne(Ue(t3, e2));
  }, Nr.prototype.getType = Nr.prototype.getType = function() {
    var e2 = this.ptr;
    return Fe(e2);
  }, hr.prototype = Object.create(ir.prototype), hr.prototype.constructor = hr, hr.prototype.__class__ = hr, hr.__cache__ = {}, i.VoidPtr = hr, hr.prototype.__destroy__ = hr.prototype.__destroy__ = function() {
    var e2 = this.ptr;
    Ye(e2);
  }, lr.prototype = Object.create(Sr.prototype), lr.prototype.constructor = lr, lr.prototype.__class__ = lr, lr.__cache__ = {}, i.PeDatum = lr, lr.prototype.getSpheroid = lr.prototype.getSpheroid = function() {
    var e2 = this.ptr;
    return sr(we(e2), Xr);
  }, lr.prototype.getCode = lr.prototype.getCode = function() {
    var e2 = this.ptr;
    return xe(e2);
  }, lr.prototype.getName = lr.prototype.getName = function(e2) {
    var t3 = this.ptr;
    return dr.prepare(), "object" == typeof e2 && (e2 = Er(e2)), ne(He(t3, e2));
  }, lr.prototype.getType = lr.prototype.getType = function() {
    var e2 = this.ptr;
    return Xe(e2);
  }, Mr.prototype = Object.create(ir.prototype), Mr.prototype.constructor = Mr, Mr.prototype.__class__ = Mr, Mr.__cache__ = {}, i.PeDefs = Mr, Mr.prototype.get_PE_BUFFER_MAX = Mr.prototype.get_PE_BUFFER_MAX = function() {
    var e2 = this.ptr;
    return ze(e2);
  }, Object.defineProperty(Mr.prototype, "PE_BUFFER_MAX", {
    get: Mr.prototype.get_PE_BUFFER_MAX
  }), Mr.prototype.get_PE_NAME_MAX = Mr.prototype.get_PE_NAME_MAX = function() {
    var e2 = this.ptr;
    return Ze(e2);
  }, Object.defineProperty(Mr.prototype, "PE_NAME_MAX", {
    get: Mr.prototype.get_PE_NAME_MAX
  }), Mr.prototype.get_PE_MGRS_MAX = Mr.prototype.get_PE_MGRS_MAX = function() {
    var e2 = this.ptr;
    return We(e2);
  }, Object.defineProperty(Mr.prototype, "PE_MGRS_MAX", {
    get: Mr.prototype.get_PE_MGRS_MAX
  }), Mr.prototype.get_PE_USNG_MAX = Mr.prototype.get_PE_USNG_MAX = function() {
    var e2 = this.ptr;
    return Be(e2);
  }, Object.defineProperty(Mr.prototype, "PE_USNG_MAX", {
    get: Mr.prototype.get_PE_USNG_MAX
  }), Mr.prototype.get_PE_DD_MAX = Mr.prototype.get_PE_DD_MAX = function() {
    var e2 = this.ptr;
    return Ke(e2);
  }, Object.defineProperty(Mr.prototype, "PE_DD_MAX", {
    get: Mr.prototype.get_PE_DD_MAX
  }), Mr.prototype.get_PE_DMS_MAX = Mr.prototype.get_PE_DMS_MAX = function() {
    var e2 = this.ptr;
    return Ve(e2);
  }, Object.defineProperty(Mr.prototype, "PE_DMS_MAX", {
    get: Mr.prototype.get_PE_DMS_MAX
  }), Mr.prototype.get_PE_DDM_MAX = Mr.prototype.get_PE_DDM_MAX = function() {
    var e2 = this.ptr;
    return qe(e2);
  }, Object.defineProperty(Mr.prototype, "PE_DDM_MAX", {
    get: Mr.prototype.get_PE_DDM_MAX
  }), Mr.prototype.get_PE_UTM_MAX = Mr.prototype.get_PE_UTM_MAX = function() {
    var e2 = this.ptr;
    return ke(e2);
  }, Object.defineProperty(Mr.prototype, "PE_UTM_MAX", {
    get: Mr.prototype.get_PE_UTM_MAX
  }), Mr.prototype.get_PE_PARM_MAX = Mr.prototype.get_PE_PARM_MAX = function() {
    var e2 = this.ptr;
    return Je(e2);
  }, Object.defineProperty(Mr.prototype, "PE_PARM_MAX", {
    get: Mr.prototype.get_PE_PARM_MAX
  }), Mr.prototype.get_PE_TYPE_NONE = Mr.prototype.get_PE_TYPE_NONE = function() {
    var e2 = this.ptr;
    return $e(e2);
  }, Object.defineProperty(Mr.prototype, "PE_TYPE_NONE", {
    get: Mr.prototype.get_PE_TYPE_NONE
  }), Mr.prototype.get_PE_TYPE_GEOGCS = Mr.prototype.get_PE_TYPE_GEOGCS = function() {
    var e2 = this.ptr;
    return Qe(e2);
  }, Object.defineProperty(Mr.prototype, "PE_TYPE_GEOGCS", {
    get: Mr.prototype.get_PE_TYPE_GEOGCS
  }), Mr.prototype.get_PE_TYPE_PROJCS = Mr.prototype.get_PE_TYPE_PROJCS = function() {
    var e2 = this.ptr;
    return et(e2);
  }, Object.defineProperty(Mr.prototype, "PE_TYPE_PROJCS", {
    get: Mr.prototype.get_PE_TYPE_PROJCS
  }), Mr.prototype.get_PE_TYPE_GEOGTRAN = Mr.prototype.get_PE_TYPE_GEOGTRAN = function() {
    var e2 = this.ptr;
    return tt(e2);
  }, Object.defineProperty(Mr.prototype, "PE_TYPE_GEOGTRAN", {
    get: Mr.prototype.get_PE_TYPE_GEOGTRAN
  }), Mr.prototype.get_PE_TYPE_COORDSYS = Mr.prototype.get_PE_TYPE_COORDSYS = function() {
    var e2 = this.ptr;
    return _t(e2);
  }, Object.defineProperty(Mr.prototype, "PE_TYPE_COORDSYS", {
    get: Mr.prototype.get_PE_TYPE_COORDSYS
  }), Mr.prototype.get_PE_TYPE_UNIT = Mr.prototype.get_PE_TYPE_UNIT = function() {
    var e2 = this.ptr;
    return rt(e2);
  }, Object.defineProperty(Mr.prototype, "PE_TYPE_UNIT", {
    get: Mr.prototype.get_PE_TYPE_UNIT
  }), Mr.prototype.get_PE_TYPE_LINUNIT = Mr.prototype.get_PE_TYPE_LINUNIT = function() {
    var e2 = this.ptr;
    return ot(e2);
  }, Object.defineProperty(Mr.prototype, "PE_TYPE_LINUNIT", {
    get: Mr.prototype.get_PE_TYPE_LINUNIT
  }), Mr.prototype.get_PE_STR_OPTS_NONE = Mr.prototype.get_PE_STR_OPTS_NONE = function() {
    var e2 = this.ptr;
    return nt(e2);
  }, Object.defineProperty(Mr.prototype, "PE_STR_OPTS_NONE", {
    get: Mr.prototype.get_PE_STR_OPTS_NONE
  }), Mr.prototype.get_PE_STR_AUTH_NONE = Mr.prototype.get_PE_STR_AUTH_NONE = function() {
    var e2 = this.ptr;
    return pt(e2);
  }, Object.defineProperty(Mr.prototype, "PE_STR_AUTH_NONE", {
    get: Mr.prototype.get_PE_STR_AUTH_NONE
  }), Mr.prototype.get_PE_STR_AUTH_TOP = Mr.prototype.get_PE_STR_AUTH_TOP = function() {
    var e2 = this.ptr;
    return it(e2);
  }, Object.defineProperty(Mr.prototype, "PE_STR_AUTH_TOP", {
    get: Mr.prototype.get_PE_STR_AUTH_TOP
  }), Mr.prototype.get_PE_STR_NAME_CANON = Mr.prototype.get_PE_STR_NAME_CANON = function() {
    var e2 = this.ptr;
    return ct(e2);
  }, Object.defineProperty(Mr.prototype, "PE_STR_NAME_CANON", {
    get: Mr.prototype.get_PE_STR_NAME_CANON
  }), Mr.prototype.get_PE_STR_FMT_WKT = Mr.prototype.get_PE_STR_FMT_WKT = function() {
    var e2 = this.ptr;
    return st(e2);
  }, Object.defineProperty(Mr.prototype, "PE_STR_FMT_WKT", {
    get: Mr.prototype.get_PE_STR_FMT_WKT
  }), Mr.prototype.get_PE_STR_FMT_WKT2 = Mr.prototype.get_PE_STR_FMT_WKT2 = function() {
    var e2 = this.ptr;
    return Pt(e2);
  }, Object.defineProperty(Mr.prototype, "PE_STR_FMT_WKT2", {
    get: Mr.prototype.get_PE_STR_FMT_WKT2
  }), Mr.prototype.get_PE_PARM_X0 = Mr.prototype.get_PE_PARM_X0 = function() {
    var e2 = this.ptr;
    return at(e2);
  }, Object.defineProperty(Mr.prototype, "PE_PARM_X0", {
    get: Mr.prototype.get_PE_PARM_X0
  }), Mr.prototype.get_PE_PARM_ND = Mr.prototype.get_PE_PARM_ND = function() {
    var e2 = this.ptr;
    return gt(e2);
  }, Object.defineProperty(Mr.prototype, "PE_PARM_ND", {
    get: Mr.prototype.get_PE_PARM_ND
  }), Mr.prototype.get_PE_TRANSFORM_1_TO_2 = Mr.prototype.get_PE_TRANSFORM_1_TO_2 = function() {
    var e2 = this.ptr;
    return yt(e2);
  }, Object.defineProperty(Mr.prototype, "PE_TRANSFORM_1_TO_2", {
    get: Mr.prototype.get_PE_TRANSFORM_1_TO_2
  }), Mr.prototype.get_PE_TRANSFORM_2_TO_1 = Mr.prototype.get_PE_TRANSFORM_2_TO_1 = function() {
    var e2 = this.ptr;
    return ut(e2);
  }, Object.defineProperty(Mr.prototype, "PE_TRANSFORM_2_TO_1", {
    get: Mr.prototype.get_PE_TRANSFORM_2_TO_1
  }), Mr.prototype.get_PE_TRANSFORM_P_TO_G = Mr.prototype.get_PE_TRANSFORM_P_TO_G = function() {
    var e2 = this.ptr;
    return dt(e2);
  }, Object.defineProperty(Mr.prototype, "PE_TRANSFORM_P_TO_G", {
    get: Mr.prototype.get_PE_TRANSFORM_P_TO_G
  }), Mr.prototype.get_PE_TRANSFORM_G_TO_P = Mr.prototype.get_PE_TRANSFORM_G_TO_P = function() {
    var e2 = this.ptr;
    return ft(e2);
  }, Object.defineProperty(Mr.prototype, "PE_TRANSFORM_G_TO_P", {
    get: Mr.prototype.get_PE_TRANSFORM_G_TO_P
  }), Mr.prototype.get_PE_HORIZON_RECT = Mr.prototype.get_PE_HORIZON_RECT = function() {
    var e2 = this.ptr;
    return Et(e2);
  }, Object.defineProperty(Mr.prototype, "PE_HORIZON_RECT", {
    get: Mr.prototype.get_PE_HORIZON_RECT
  }), Mr.prototype.get_PE_HORIZON_POLY = Mr.prototype.get_PE_HORIZON_POLY = function() {
    var e2 = this.ptr;
    return bt(e2);
  }, Object.defineProperty(Mr.prototype, "PE_HORIZON_POLY", {
    get: Mr.prototype.get_PE_HORIZON_POLY
  }), Mr.prototype.get_PE_HORIZON_LINE = Mr.prototype.get_PE_HORIZON_LINE = function() {
    var e2 = this.ptr;
    return mt(e2);
  }, Object.defineProperty(Mr.prototype, "PE_HORIZON_LINE", {
    get: Mr.prototype.get_PE_HORIZON_LINE
  }), Mr.prototype.get_PE_HORIZON_DELTA = Mr.prototype.get_PE_HORIZON_DELTA = function() {
    var e2 = this.ptr;
    return Tt(e2);
  }, Object.defineProperty(Mr.prototype, "PE_HORIZON_DELTA", {
    get: Mr.prototype.get_PE_HORIZON_DELTA
  }), Dr.prototype = Object.create(ir.prototype), Dr.prototype.constructor = Dr, Dr.prototype.__class__ = Dr, Dr.__cache__ = {}, i.PeFactory = Dr, Dr.prototype.initialize = Dr.prototype.initialize = function(e2) {
    dr.prepare(), e2 = e2 && "object" == typeof e2 ? e2.ptr : fr(e2), Ot(e2);
  }, Dr.prototype.factoryByType = Dr.prototype.factoryByType = function(e2, t3) {
    return e2 && "object" == typeof e2 && (e2 = e2.ptr), t3 && "object" == typeof t3 && (t3 = t3.ptr), sr(St(e2, t3), Sr);
  }, Dr.prototype.fromString = Dr.prototype.fromString = function(e2, t3) {
    return dr.prepare(), e2 && "object" == typeof e2 && (e2 = e2.ptr), t3 = t3 && "object" == typeof t3 ? t3.ptr : fr(t3), sr(Nt(e2, t3), Sr);
  }, Dr.prototype.getCode = Dr.prototype.getCode = function(e2) {
    return e2 && "object" == typeof e2 && (e2 = e2.ptr), ht(e2);
  }, vr.prototype = Object.create(ir.prototype), vr.prototype.constructor = vr, vr.prototype.__class__ = vr, vr.__cache__ = {}, i.PeGCSExtent = vr, vr.prototype.getLLon = vr.prototype.getLLon = function() {
    var e2 = this.ptr;
    return Mt(e2);
  }, vr.prototype.getSLat = vr.prototype.getSLat = function() {
    var e2 = this.ptr;
    return Dt(e2);
  }, vr.prototype.getRLon = vr.prototype.getRLon = function() {
    var e2 = this.ptr;
    return vt(e2);
  }, vr.prototype.getNLat = vr.prototype.getNLat = function() {
    var e2 = this.ptr;
    return Rt(e2);
  }, vr.prototype.__destroy__ = vr.prototype.__destroy__ = function() {
    var e2 = this.ptr;
    At(e2);
  }, Rr.prototype = Object.create(Nr.prototype), Rr.prototype.constructor = Rr, Rr.prototype.__class__ = Rr, Rr.__cache__ = {}, i.PeGeogcs = Rr, Rr.prototype.getDatum = Rr.prototype.getDatum = function() {
    var e2 = this.ptr;
    return sr(Gt(e2), lr);
  }, Rr.prototype.getPrimem = Rr.prototype.getPrimem = function() {
    var e2 = this.ptr;
    return sr(Ct(e2), xr);
  }, Rr.prototype.getUnit = Rr.prototype.getUnit = function() {
    var e2 = this.ptr;
    return sr(It(e2), zr);
  }, Rr.prototype.getCode = Rr.prototype.getCode = function() {
    var e2 = this.ptr;
    return jt(e2);
  }, Rr.prototype.getName = Rr.prototype.getName = function(e2) {
    var t3 = this.ptr;
    return dr.prepare(), "object" == typeof e2 && (e2 = Er(e2)), ne(Lt(t3, e2));
  }, Rr.prototype.getType = Rr.prototype.getType = function() {
    var e2 = this.ptr;
    return Ut(e2);
  }, Ar.prototype = Object.create(Sr.prototype), Ar.prototype.constructor = Ar, Ar.prototype.__class__ = Ar, Ar.__cache__ = {}, i.PeGeogtran = Ar, Ar.prototype.isEqual = Ar.prototype.isEqual = function(e2) {
    var t3 = this.ptr;
    return e2 && "object" == typeof e2 && (e2 = e2.ptr), !!Ft(t3, e2);
  }, Ar.prototype.getGeogcs1 = Ar.prototype.getGeogcs1 = function() {
    var e2 = this.ptr;
    return sr(Yt(e2), Rr);
  }, Ar.prototype.getGeogcs2 = Ar.prototype.getGeogcs2 = function() {
    var e2 = this.ptr;
    return sr(wt(e2), Rr);
  }, Ar.prototype.getParameters = Ar.prototype.getParameters = function() {
    var e2 = this.ptr;
    return xt(e2);
  }, Ar.prototype.loadConstants = Ar.prototype.loadConstants = function() {
    var e2 = this.ptr;
    return !!Ht(e2);
  }, Ar.prototype.getCode = Ar.prototype.getCode = function() {
    var e2 = this.ptr;
    return Xt(e2);
  }, Ar.prototype.getName = Ar.prototype.getName = function(e2) {
    var t3 = this.ptr;
    return dr.prepare(), "object" == typeof e2 && (e2 = Er(e2)), ne(zt(t3, e2));
  }, Ar.prototype.getType = Ar.prototype.getType = function() {
    var e2 = this.ptr;
    return Zt(e2);
  }, Gr.prototype = Object.create(ir.prototype), Gr.prototype.constructor = Gr, Gr.prototype.__class__ = Gr, Gr.__cache__ = {}, i.PeGTlistExtended = Gr, Gr.prototype.getGTlist = Gr.prototype.getGTlist = function(e2, t3, _2, r3, o4, n3) {
    return e2 && "object" == typeof e2 && (e2 = e2.ptr), t3 && "object" == typeof t3 && (t3 = t3.ptr), _2 && "object" == typeof _2 && (_2 = _2.ptr), r3 && "object" == typeof r3 && (r3 = r3.ptr), o4 && "object" == typeof o4 && (o4 = o4.ptr), n3 && "object" == typeof n3 && (n3 = n3.ptr), sr(Wt(e2, t3, _2, r3, o4, n3), Cr);
  }, Gr.prototype.get_PE_GTLIST_OPTS_COMMON = Gr.prototype.get_PE_GTLIST_OPTS_COMMON = function() {
    var e2 = this.ptr;
    return Bt(e2);
  }, Object.defineProperty(Gr.prototype, "PE_GTLIST_OPTS_COMMON", {
    get: Gr.prototype.get_PE_GTLIST_OPTS_COMMON
  }), Cr.prototype = Object.create(ir.prototype), Cr.prototype.constructor = Cr, Cr.prototype.__class__ = Cr, Cr.__cache__ = {}, i.PeGTlistExtendedEntry = Cr, Cr.prototype.getEntries = Cr.prototype.getEntries = function() {
    var e2 = this.ptr;
    return sr(Kt(e2), Ir);
  }, Cr.prototype.getSteps = Cr.prototype.getSteps = function() {
    var e2 = this.ptr;
    return Vt(e2);
  }, Cr.prototype.Delete = Cr.prototype.Delete = function(e2) {
    e2 && "object" == typeof e2 && (e2 = e2.ptr), qt(e2);
  }, Ir.prototype = Object.create(ir.prototype), Ir.prototype.constructor = Ir, Ir.prototype.__class__ = Ir, Ir.__cache__ = {}, i.PeGTlistExtendedGTs = Ir, Ir.prototype.getDirection = Ir.prototype.getDirection = function() {
    var e2 = this.ptr;
    return kt(e2);
  }, Ir.prototype.getGeogtran = Ir.prototype.getGeogtran = function() {
    var e2 = this.ptr;
    return sr(Jt(e2), Ar);
  }, jr.prototype = Object.create(ir.prototype), jr.prototype.constructor = jr, jr.prototype.__class__ = jr, jr.__cache__ = {}, i.PeHorizon = jr, jr.prototype.getNump = jr.prototype.getNump = function() {
    var e2 = this.ptr;
    return $t(e2);
  }, jr.prototype.getKind = jr.prototype.getKind = function() {
    var e2 = this.ptr;
    return Qt(e2);
  }, jr.prototype.getInclusive = jr.prototype.getInclusive = function() {
    var e2 = this.ptr;
    return e_(e2);
  }, jr.prototype.getSize = jr.prototype.getSize = function() {
    var e2 = this.ptr;
    return t_(e2);
  }, jr.prototype.getCoord = jr.prototype.getCoord = function() {
    var e2 = this.ptr;
    return __(e2);
  }, Lr.prototype = Object.create(ir.prototype), Lr.prototype.constructor = Lr, Lr.prototype.__class__ = Lr, Lr.__cache__ = {}, i.PeInteger = Lr, Lr.prototype.get_val = Lr.prototype.get_val = function() {
    var e2 = this.ptr;
    return o_(e2);
  }, Lr.prototype.set_val = Lr.prototype.set_val = function(e2) {
    var t3 = this.ptr;
    e2 && "object" == typeof e2 && (e2 = e2.ptr), n_(t3, e2);
  }, Object.defineProperty(Lr.prototype, "val", {
    get: Lr.prototype.get_val,
    set: Lr.prototype.set_val
  }), Lr.prototype.__destroy__ = Lr.prototype.__destroy__ = function() {
    var e2 = this.ptr;
    p_(e2);
  }, Ur.prototype = Object.create(ir.prototype), Ur.prototype.constructor = Ur, Ur.prototype.__class__ = Ur, Ur.__cache__ = {}, i.PeNotationMgrs = Ur, Ur.prototype.get_PE_MGRS_STYLE_NEW = Ur.prototype.get_PE_MGRS_STYLE_NEW = function() {
    var e2 = this.ptr;
    return i_(e2);
  }, Object.defineProperty(Ur.prototype, "PE_MGRS_STYLE_NEW", {
    get: Ur.prototype.get_PE_MGRS_STYLE_NEW
  }), Ur.prototype.get_PE_MGRS_STYLE_OLD = Ur.prototype.get_PE_MGRS_STYLE_OLD = function() {
    var e2 = this.ptr;
    return c_(e2);
  }, Object.defineProperty(Ur.prototype, "PE_MGRS_STYLE_OLD", {
    get: Ur.prototype.get_PE_MGRS_STYLE_OLD
  }), Ur.prototype.get_PE_MGRS_STYLE_AUTO = Ur.prototype.get_PE_MGRS_STYLE_AUTO = function() {
    var e2 = this.ptr;
    return s_(e2);
  }, Object.defineProperty(Ur.prototype, "PE_MGRS_STYLE_AUTO", {
    get: Ur.prototype.get_PE_MGRS_STYLE_AUTO
  }), Ur.prototype.get_PE_MGRS_180_ZONE_1_PLUS = Ur.prototype.get_PE_MGRS_180_ZONE_1_PLUS = function() {
    var e2 = this.ptr;
    return P_(e2);
  }, Object.defineProperty(Ur.prototype, "PE_MGRS_180_ZONE_1_PLUS", {
    get: Ur.prototype.get_PE_MGRS_180_ZONE_1_PLUS
  }), Ur.prototype.get_PE_MGRS_ADD_SPACES = Ur.prototype.get_PE_MGRS_ADD_SPACES = function() {
    var e2 = this.ptr;
    return a_(e2);
  }, Object.defineProperty(Ur.prototype, "PE_MGRS_ADD_SPACES", {
    get: Ur.prototype.get_PE_MGRS_ADD_SPACES
  }), Fr.prototype = Object.create(ir.prototype), Fr.prototype.constructor = Fr, Fr.prototype.__class__ = Fr, Fr.__cache__ = {}, i.PeNotationUtm = Fr, Fr.prototype.get_PE_UTM_OPTS_NONE = Fr.prototype.get_PE_UTM_OPTS_NONE = function() {
    var e2 = this.ptr;
    return g_(e2);
  }, Object.defineProperty(Fr.prototype, "PE_UTM_OPTS_NONE", {
    get: Fr.prototype.get_PE_UTM_OPTS_NONE
  }), Fr.prototype.get_PE_UTM_OPTS_NS = Fr.prototype.get_PE_UTM_OPTS_NS = function() {
    var e2 = this.ptr;
    return y_(e2);
  }, Object.defineProperty(Fr.prototype, "PE_UTM_OPTS_NS", {
    get: Fr.prototype.get_PE_UTM_OPTS_NS
  }), Fr.prototype.get_PE_UTM_OPTS_NS_STRICT = Fr.prototype.get_PE_UTM_OPTS_NS_STRICT = function() {
    var e2 = this.ptr;
    return u_(e2);
  }, Object.defineProperty(Fr.prototype, "PE_UTM_OPTS_NS_STRICT", {
    get: Fr.prototype.get_PE_UTM_OPTS_NS_STRICT
  }), Fr.prototype.get_PE_UTM_OPTS_ADD_SPACES = Fr.prototype.get_PE_UTM_OPTS_ADD_SPACES = function() {
    var e2 = this.ptr;
    return d_(e2);
  }, Object.defineProperty(Fr.prototype, "PE_UTM_OPTS_ADD_SPACES", {
    get: Fr.prototype.get_PE_UTM_OPTS_ADD_SPACES
  }), Yr.prototype = Object.create(Sr.prototype), Yr.prototype.constructor = Yr, Yr.prototype.__class__ = Yr, Yr.__cache__ = {}, i.PeParameter = Yr, Yr.prototype.getValue = Yr.prototype.getValue = function() {
    var e2 = this.ptr;
    return f_(e2);
  }, Yr.prototype.getCode = Yr.prototype.getCode = function() {
    var e2 = this.ptr;
    return E_(e2);
  }, Yr.prototype.getName = Yr.prototype.getName = function(e2) {
    var t3 = this.ptr;
    return dr.prepare(), "object" == typeof e2 && (e2 = Er(e2)), ne(b_(t3, e2));
  }, Yr.prototype.getType = Yr.prototype.getType = function() {
    var e2 = this.ptr;
    return m_(e2);
  }, wr.prototype = Object.create(ir.prototype), wr.prototype.constructor = wr, wr.prototype.__class__ = wr, wr.__cache__ = {}, i.PePCSInfo = wr, wr.prototype.getCentralMeridian = wr.prototype.getCentralMeridian = function() {
    var e2 = this.ptr;
    return T_(e2);
  }, wr.prototype.getDomainMinx = wr.prototype.getDomainMinx = function() {
    var e2 = this.ptr;
    return O_(e2);
  }, wr.prototype.getDomainMiny = wr.prototype.getDomainMiny = function() {
    var e2 = this.ptr;
    return S_(e2);
  }, wr.prototype.getDomainMaxx = wr.prototype.getDomainMaxx = function() {
    var e2 = this.ptr;
    return N_(e2);
  }, wr.prototype.getDomainMaxy = wr.prototype.getDomainMaxy = function() {
    var e2 = this.ptr;
    return h_(e2);
  }, wr.prototype.getNorthPoleLocation = wr.prototype.getNorthPoleLocation = function() {
    var e2 = this.ptr;
    return l_(e2);
  }, wr.prototype.getNorthPoleGeometry = wr.prototype.getNorthPoleGeometry = function() {
    var e2 = this.ptr;
    return M_(e2);
  }, wr.prototype.getSouthPoleLocation = wr.prototype.getSouthPoleLocation = function() {
    var e2 = this.ptr;
    return D_(e2);
  }, wr.prototype.getSouthPoleGeometry = wr.prototype.getSouthPoleGeometry = function() {
    var e2 = this.ptr;
    return v_(e2);
  }, wr.prototype.isDensificationNeeded = wr.prototype.isDensificationNeeded = function() {
    var e2 = this.ptr;
    return !!R_(e2);
  }, wr.prototype.isGcsHorizonMultiOverlap = wr.prototype.isGcsHorizonMultiOverlap = function() {
    var e2 = this.ptr;
    return !!A_(e2);
  }, wr.prototype.isPannableRectangle = wr.prototype.isPannableRectangle = function() {
    var e2 = this.ptr;
    return !!G_(e2);
  }, wr.prototype.generate = wr.prototype.generate = function(e2, t3) {
    return e2 && "object" == typeof e2 && (e2 = e2.ptr), t3 && "object" == typeof t3 && (t3 = t3.ptr), sr(C_(e2, t3), wr);
  }, wr.prototype.get_PE_PCSINFO_OPTION_NONE = wr.prototype.get_PE_PCSINFO_OPTION_NONE = function() {
    var e2 = this.ptr;
    return I_(e2);
  }, Object.defineProperty(wr.prototype, "PE_PCSINFO_OPTION_NONE", {
    get: wr.prototype.get_PE_PCSINFO_OPTION_NONE
  }), wr.prototype.get_PE_PCSINFO_OPTION_DOMAIN = wr.prototype.get_PE_PCSINFO_OPTION_DOMAIN = function() {
    var e2 = this.ptr;
    return j_(e2);
  }, Object.defineProperty(wr.prototype, "PE_PCSINFO_OPTION_DOMAIN", {
    get: wr.prototype.get_PE_PCSINFO_OPTION_DOMAIN
  }), wr.prototype.get_PE_POLE_OUTSIDE_BOUNDARY = wr.prototype.get_PE_POLE_OUTSIDE_BOUNDARY = function() {
    var e2 = this.ptr;
    return L_(e2);
  }, Object.defineProperty(wr.prototype, "PE_POLE_OUTSIDE_BOUNDARY", {
    get: wr.prototype.get_PE_POLE_OUTSIDE_BOUNDARY
  }), wr.prototype.get_PE_POLE_POINT = wr.prototype.get_PE_POLE_POINT = function() {
    var e2 = this.ptr;
    return U_(e2);
  }, Object.defineProperty(wr.prototype, "PE_POLE_POINT", {
    get: wr.prototype.get_PE_POLE_POINT
  }), xr.prototype = Object.create(Sr.prototype), xr.prototype.constructor = xr, xr.prototype.__class__ = xr, xr.__cache__ = {}, i.PePrimem = xr, xr.prototype.getLongitude = xr.prototype.getLongitude = function() {
    var e2 = this.ptr;
    return F_(e2);
  }, xr.prototype.getCode = xr.prototype.getCode = function() {
    var e2 = this.ptr;
    return Y_(e2);
  }, xr.prototype.getName = xr.prototype.getName = function(e2) {
    var t3 = this.ptr;
    return dr.prepare(), "object" == typeof e2 && (e2 = Er(e2)), ne(w_(t3, e2));
  }, xr.prototype.getType = xr.prototype.getType = function() {
    var e2 = this.ptr;
    return x_(e2);
  }, Hr.prototype = Object.create(Nr.prototype), Hr.prototype.constructor = Hr, Hr.prototype.__class__ = Hr, Hr.__cache__ = {}, i.PeProjcs = Hr, Hr.prototype.getGeogcs = Hr.prototype.getGeogcs = function() {
    var e2 = this.ptr;
    return sr(H_(e2), Rr);
  }, Hr.prototype.getParameters = Hr.prototype.getParameters = function() {
    var e2 = this.ptr;
    return X_(e2);
  }, Hr.prototype.getUnit = Hr.prototype.getUnit = function() {
    var e2 = this.ptr;
    return sr(z_(e2), zr);
  }, Hr.prototype.loadConstants = Hr.prototype.loadConstants = function() {
    var e2 = this.ptr;
    return !!Z_(e2);
  }, Hr.prototype.horizonGcsGenerate = Hr.prototype.horizonGcsGenerate = function() {
    var e2 = this.ptr;
    return sr(W_(e2), jr);
  }, Hr.prototype.horizonPcsGenerate = Hr.prototype.horizonPcsGenerate = function() {
    var e2 = this.ptr;
    return sr(B_(e2), jr);
  }, Hr.prototype.getCode = Hr.prototype.getCode = function() {
    var e2 = this.ptr;
    return K_(e2);
  }, Hr.prototype.getName = Hr.prototype.getName = function(e2) {
    var t3 = this.ptr;
    return dr.prepare(), "object" == typeof e2 && (e2 = Er(e2)), ne(V_(t3, e2));
  }, Hr.prototype.getType = Hr.prototype.getType = function() {
    var e2 = this.ptr;
    return q_(e2);
  }, Xr.prototype = Object.create(Sr.prototype), Xr.prototype.constructor = Xr, Xr.prototype.__class__ = Xr, Xr.__cache__ = {}, i.PeSpheroid = Xr, Xr.prototype.getAxis = Xr.prototype.getAxis = function() {
    var e2 = this.ptr;
    return k_(e2);
  }, Xr.prototype.getFlattening = Xr.prototype.getFlattening = function() {
    var e2 = this.ptr;
    return J_(e2);
  }, Xr.prototype.getCode = Xr.prototype.getCode = function() {
    var e2 = this.ptr;
    return $_(e2);
  }, Xr.prototype.getName = Xr.prototype.getName = function(e2) {
    var t3 = this.ptr;
    return dr.prepare(), "object" == typeof e2 && (e2 = Er(e2)), ne(Q_(t3, e2));
  }, Xr.prototype.getType = Xr.prototype.getType = function() {
    var e2 = this.ptr;
    return er(e2);
  }, zr.prototype = Object.create(Sr.prototype), zr.prototype.constructor = zr, zr.prototype.__class__ = zr, zr.__cache__ = {}, i.PeUnit = zr, zr.prototype.getUnitFactor = zr.prototype.getUnitFactor = function() {
    var e2 = this.ptr;
    return tr(e2);
  }, zr.prototype.getCode = zr.prototype.getCode = function() {
    var e2 = this.ptr;
    return _r(e2);
  }, zr.prototype.getName = zr.prototype.getName = function(e2) {
    var t3 = this.ptr;
    return dr.prepare(), "object" == typeof e2 && (e2 = Er(e2)), ne(rr(t3, e2));
  }, zr.prototype.getType = zr.prototype.getType = function() {
    var e2 = this.ptr;
    return or(e2);
  }, Zr.prototype = Object.create(ir.prototype), Zr.prototype.constructor = Zr, Zr.prototype.__class__ = Zr, Zr.__cache__ = {}, i.PeVersion = Zr, Zr.prototype.version_string = Zr.prototype.version_string = function() {
    var e2 = this.ptr;
    return ne(nr(e2));
  }, i.ensureCache = dr, i.ensureString = fr, i.ensureInt8 = Er, i.ensureInt16 = br, i.ensureInt32 = mr, i.ensureFloat32 = Tr, i.ensureFloat64 = Or, c;
}, t.exports = r;
var n = o(o2.exports);
var p = Object.freeze(Object.defineProperty({
  __proto__: null,
  default: n
}, Symbol.toStringTag, {
  value: "Module"
}));
export {
  p
};
//# sourceMappingURL=pe-wasm-MIRNOEFR.js.map
