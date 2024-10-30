import {
  o
} from "./chunk-7RMVJCDW.js";
import "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/chunks/lerc-wasm.js
var n;
var e;
var r;
var i = {
  exports: {}
};
n = i, e = "undefined" != typeof document && document.currentScript ? document.currentScript.src : void 0, r = function(t) {
  var n2, r2;
  (t = void 0 !== (t = t || {}) ? t : {}).ready = new Promise(function(t2, e2) {
    n2 = t2, r2 = e2;
  });
  var i2 = Object.assign({}, t), o3 = "object" == typeof window, u2 = "function" == typeof importScripts;
  "object" == typeof process && "object" == typeof process.versions && process.versions.node;
  var s, a = "";
  function c(n3) {
    return t.locateFile ? t.locateFile(n3, a) : a + n3;
  }
  (o3 || u2) && (u2 ? a = self.location.href : "undefined" != typeof document && document.currentScript && (a = document.currentScript.src), e && (a = e), a = 0 !== a.indexOf("blob:") ? a.substr(0, a.replace(/[?#].*/, "").lastIndexOf("/") + 1) : "", u2 && (s = (t2) => {
    var n3 = new XMLHttpRequest();
    return n3.open("GET", t2, false), n3.responseType = "arraybuffer", n3.send(null), new Uint8Array(n3.response);
  })), t.print || console.log.bind(console);
  var f, l, p = t.printErr || console.warn.bind(console);
  Object.assign(t, i2), i2 = null, t.arguments && t.arguments, t.thisProgram && t.thisProgram, t.quit && t.quit, t.wasmBinary && (f = t.wasmBinary), t.noExitRuntime, "object" != typeof WebAssembly && U("no native wasm support detected");
  var h, d, m, _, y, g, v = false, b = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0;
  function w(t2, n3, e2) {
    for (var r3 = n3 + e2, i3 = n3; t2[i3] && !(i3 >= r3); ) ++i3;
    if (i3 - n3 > 16 && t2.buffer && b) return b.decode(t2.subarray(n3, i3));
    for (var o4 = ""; n3 < i3; ) {
      var u3 = t2[n3++];
      if (128 & u3) {
        var s2 = 63 & t2[n3++];
        if (192 != (224 & u3)) {
          var a2 = 63 & t2[n3++];
          if ((u3 = 224 == (240 & u3) ? (15 & u3) << 12 | s2 << 6 | a2 : (7 & u3) << 18 | s2 << 12 | a2 << 6 | 63 & t2[n3++]) < 65536) o4 += String.fromCharCode(u3);
          else {
            var c2 = u3 - 65536;
            o4 += String.fromCharCode(55296 | c2 >> 10, 56320 | 1023 & c2);
          }
        } else o4 += String.fromCharCode((31 & u3) << 6 | s2);
      } else o4 += String.fromCharCode(u3);
    }
    return o4;
  }
  function A(t2, n3) {
    return t2 ? w(m, t2, n3) : "";
  }
  function R(n3) {
    h = n3, t.HEAP8 = d = new Int8Array(n3), t.HEAP16 = new Int16Array(n3), t.HEAP32 = _ = new Int32Array(n3), t.HEAPU8 = m = new Uint8Array(n3), t.HEAPU16 = new Uint16Array(n3), t.HEAPU32 = y = new Uint32Array(n3), t.HEAPF32 = new Float32Array(n3), t.HEAPF64 = new Float64Array(n3);
  }
  t.INITIAL_MEMORY;
  var S = [], I = [], x = [];
  function P() {
    if (t.preRun) for ("function" == typeof t.preRun && (t.preRun = [t.preRun]); t.preRun.length; ) D(t.preRun.shift());
    N(S);
  }
  function j() {
    N(I);
  }
  function E() {
    if (t.postRun) for ("function" == typeof t.postRun && (t.postRun = [t.postRun]); t.postRun.length; ) W(t.postRun.shift());
    N(x);
  }
  function D(t2) {
    S.unshift(t2);
  }
  function H(t2) {
    I.unshift(t2);
  }
  function W(t2) {
    x.unshift(t2);
  }
  var T = 0, C = null;
  function M(n3) {
    T++, t.monitorRunDependencies && t.monitorRunDependencies(T);
  }
  function O(n3) {
    if (T--, t.monitorRunDependencies && t.monitorRunDependencies(T), 0 == T && C) {
      var e2 = C;
      C = null, e2();
    }
  }
  function U(n3) {
    t.onAbort && t.onAbort(n3), p(n3 = "Aborted(" + n3 + ")"), v = true, n3 += ". Build with -sASSERTIONS for more info.";
    var e2 = new WebAssembly.RuntimeError(n3);
    throw r2(e2), e2;
  }
  var B, k = "data:application/octet-stream;base64,";
  function F(t2) {
    return t2.startsWith(k);
  }
  function q(t2) {
    try {
      if (t2 == B && f) return new Uint8Array(f);
      if (s) return s(t2);
      throw "both async and sync fetching of the wasm failed";
    } catch (p2) {
      U(p2);
    }
  }
  function z() {
    return f || !o3 && !u2 || "function" != typeof fetch ? Promise.resolve().then(function() {
      return q(B);
    }) : fetch(B, {
      credentials: "same-origin"
    }).then(function(t2) {
      if (!t2.ok) throw "failed to load wasm binary file at '" + B + "'";
      return t2.arrayBuffer();
    }).catch(function() {
      return q(B);
    });
  }
  function L() {
    var n3 = {
      a: et
    };
    function e2(n4, e3) {
      var r3 = n4.exports;
      t.asm = r3, R((l = t.asm.g).buffer), g = t.asm.m, H(t.asm.h), O();
    }
    function i3(t2) {
      e2(t2.instance);
    }
    function o4(t2) {
      return z().then(function(t3) {
        return WebAssembly.instantiate(t3, n3);
      }).then(function(t3) {
        return t3;
      }).then(t2, function(t3) {
        p("failed to asynchronously prepare wasm: " + t3), U(t3);
      });
    }
    function u3() {
      return f || "function" != typeof WebAssembly.instantiateStreaming || F(B) || "function" != typeof fetch ? o4(i3) : fetch(B, {
        credentials: "same-origin"
      }).then(function(t2) {
        return WebAssembly.instantiateStreaming(t2, n3).then(i3, function(t3) {
          return p("wasm streaming compile failed: " + t3), p("falling back to ArrayBuffer instantiation"), o4(i3);
        });
      });
    }
    if (M(), t.instantiateWasm) try {
      return t.instantiateWasm(n3, e2);
    } catch (s2) {
      return p("Module.instantiateWasm callback failed with error: " + s2), false;
    }
    return u3().catch(r2), {};
  }
  function N(n3) {
    for (; n3.length > 0; ) {
      var e2 = n3.shift();
      if ("function" != typeof e2) {
        var r3 = e2.func;
        "number" == typeof r3 ? void 0 === e2.arg ? X(r3)() : X(r3)(e2.arg) : r3(void 0 === e2.arg ? null : e2.arg);
      } else e2(t);
    }
  }
  F(B = "lerc-wasm.wasm") || (B = c(B));
  var G = [];
  function X(t2) {
    var n3 = G[t2];
    return n3 || (t2 >= G.length && (G.length = t2 + 1), G[t2] = n3 = g.get(t2)), n3;
  }
  function Y(t2, n3, e2, r3) {
    U("Assertion failed: " + A(t2) + ", at: " + [n3 ? A(n3) : "unknown filename", e2, r3 ? A(r3) : "unknown function"]);
  }
  function J(t2) {
    return rt(t2 + 24) + 24;
  }
  function K(t2) {
    this.excPtr = t2, this.ptr = t2 - 24, this.set_type = function(t3) {
      y[this.ptr + 4 >> 2] = t3;
    }, this.get_type = function() {
      return y[this.ptr + 4 >> 2];
    }, this.set_destructor = function(t3) {
      y[this.ptr + 8 >> 2] = t3;
    }, this.get_destructor = function() {
      return y[this.ptr + 8 >> 2];
    }, this.set_refcount = function(t3) {
      _[this.ptr >> 2] = t3;
    }, this.set_caught = function(t3) {
      t3 = t3 ? 1 : 0, d[this.ptr + 12 | 0] = t3;
    }, this.get_caught = function() {
      return 0 != d[this.ptr + 12 | 0];
    }, this.set_rethrown = function(t3) {
      t3 = t3 ? 1 : 0, d[this.ptr + 13 | 0] = t3;
    }, this.get_rethrown = function() {
      return 0 != d[this.ptr + 13 | 0];
    }, this.init = function(t3, n3) {
      this.set_adjusted_ptr(0), this.set_type(t3), this.set_destructor(n3), this.set_refcount(0), this.set_caught(false), this.set_rethrown(false);
    }, this.add_ref = function() {
      var t3 = _[this.ptr >> 2];
      _[this.ptr >> 2] = t3 + 1;
    }, this.release_ref = function() {
      var t3 = _[this.ptr >> 2];
      return _[this.ptr >> 2] = t3 - 1, 1 === t3;
    }, this.set_adjusted_ptr = function(t3) {
      y[this.ptr + 16 >> 2] = t3;
    }, this.get_adjusted_ptr = function() {
      return y[this.ptr + 16 >> 2];
    }, this.get_exception_ptr = function() {
      if (ot(this.get_type())) return y[this.excPtr >> 2];
      var t3 = this.get_adjusted_ptr();
      return 0 !== t3 ? t3 : this.excPtr;
    };
  }
  function Q(t2, n3, e2) {
    throw new K(t2).init(n3, e2), t2;
  }
  function V() {
    U("");
  }
  function Z(t2, n3, e2) {
    m.copyWithin(t2, n3, n3 + e2);
  }
  function $() {
    return 2147483648;
  }
  function tt(t2) {
    try {
      return l.grow(t2 - h.byteLength + 65535 >>> 16), R(l.buffer), 1;
    } catch (n3) {
    }
  }
  function nt(t2) {
    var n3 = m.length;
    t2 >>>= 0;
    var e2 = $();
    if (t2 > e2) return false;
    let r3 = (t3, n4) => t3 + (n4 - t3 % n4) % n4;
    for (var i3 = 1; i3 <= 4; i3 *= 2) {
      var o4 = n3 * (1 + 0.2 / i3);
      if (o4 = Math.min(o4, t2 + 100663296), tt(Math.min(e2, r3(Math.max(t2, o4), 65536)))) return true;
    }
    return false;
  }
  var et = {
    a: Y,
    c: J,
    b: Q,
    d: V,
    f: Z,
    e: nt
  };
  L(), t.___wasm_call_ctors = function() {
    return (t.___wasm_call_ctors = t.asm.h).apply(null, arguments);
  }, t._lerc_getBlobInfo = function() {
    return (t._lerc_getBlobInfo = t.asm.i).apply(null, arguments);
  }, t._lerc_getDataRanges = function() {
    return (t._lerc_getDataRanges = t.asm.j).apply(null, arguments);
  }, t._lerc_decode = function() {
    return (t._lerc_decode = t.asm.k).apply(null, arguments);
  }, t._lerc_decode_4D = function() {
    return (t._lerc_decode_4D = t.asm.l).apply(null, arguments);
  };
  var rt = t._malloc = function() {
    return (rt = t._malloc = t.asm.n).apply(null, arguments);
  };
  t._free = function() {
    return (t._free = t.asm.o).apply(null, arguments);
  };
  var it, ot = t.___cxa_is_pointer_type = function() {
    return (ot = t.___cxa_is_pointer_type = t.asm.p).apply(null, arguments);
  };
  function ut(e2) {
    function r3() {
      it || (it = true, t.calledRun = true, v || (j(), n2(t), t.onRuntimeInitialized && t.onRuntimeInitialized(), E()));
    }
    T > 0 || (P(), T > 0 || (t.setStatus ? (t.setStatus("Running..."), setTimeout(function() {
      setTimeout(function() {
        t.setStatus("");
      }, 1), r3();
    }, 1)) : r3()));
  }
  if (C = function t2() {
    it || ut(), it || (C = t2);
  }, t.run = ut, t.preInit) for ("function" == typeof t.preInit && (t.preInit = [t.preInit]); t.preInit.length > 0; ) t.preInit.pop()();
  return ut(), t.ready;
}, n.exports = r;
var o2 = o(i.exports);
var u = Object.freeze(Object.defineProperty({
  __proto__: null,
  default: o2
}, Symbol.toStringTag, {
  value: "Module"
}));
export {
  u as l
};
//# sourceMappingURL=lerc-wasm-OWENVGRY.js.map
