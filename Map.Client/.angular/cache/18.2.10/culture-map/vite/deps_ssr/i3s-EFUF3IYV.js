import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  o
} from "./chunk-G73HQZEL.js";
import "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/chunks/i3s.js
var r;
var e;
var t;
var i = {
  exports: {}
};
r = i, e = "undefined" != typeof document && document.currentScript ? document.currentScript.src : void 0, t = function(n = {}) {
  var r2, t2, i2 = void 0 !== n ? n : {};
  i2.ready = new Promise((n2, e2) => {
    r2 = n2, t2 = e2;
  });
  var o3 = Object.assign({}, i2), a2 = "object" == typeof window, u = "function" == typeof importScripts;
  "object" == typeof process && "object" == typeof process.versions && process.versions.node;
  var c, f = "";
  function s(n2) {
    return i2.locateFile ? i2.locateFile(n2, f) : f + n2;
  }
  (a2 || u) && (u ? f = self.location.href : "undefined" != typeof document && document.currentScript && (f = document.currentScript.src), e && (f = e), f = 0 !== f.indexOf("blob:") ? f.substr(0, f.replace(/[?#].*/, "").lastIndexOf("/") + 1) : "", u && (c = (n2) => {
    var r3 = new XMLHttpRequest();
    return r3.open("GET", n2, false), r3.responseType = "arraybuffer", r3.send(null), new Uint8Array(r3.response);
  }));
  var l, d, p = i2.print || console.log.bind(console), v = i2.printErr || console.warn.bind(console);
  Object.assign(i2, o3), o3 = null, i2.arguments && i2.arguments, i2.thisProgram && i2.thisProgram, i2.quit && i2.quit, i2.wasmBinary && (l = i2.wasmBinary), i2.noExitRuntime, "object" != typeof WebAssembly && D("no native wasm support detected");
  var h, m, g, y, _, w, b, A, T, C = false;
  function P() {
    var n2 = d.buffer;
    i2.HEAP8 = h = new Int8Array(n2), i2.HEAP16 = g = new Int16Array(n2), i2.HEAP32 = _ = new Int32Array(n2), i2.HEAPU8 = m = new Uint8Array(n2), i2.HEAPU16 = y = new Uint16Array(n2), i2.HEAPU32 = w = new Uint32Array(n2), i2.HEAPF32 = b = new Float32Array(n2), i2.HEAPF64 = A = new Float64Array(n2);
  }
  var E = [], W = [], k = [];
  function j() {
    if (i2.preRun) for ("function" == typeof i2.preRun && (i2.preRun = [i2.preRun]); i2.preRun.length; ) S(i2.preRun.shift());
    Z(E);
  }
  function F() {
    Z(W);
  }
  function R() {
    if (i2.postRun) for ("function" == typeof i2.postRun && (i2.postRun = [i2.postRun]); i2.postRun.length; ) U(i2.postRun.shift());
    Z(k);
  }
  function S(n2) {
    E.unshift(n2);
  }
  function x(n2) {
    W.unshift(n2);
  }
  function U(n2) {
    k.unshift(n2);
  }
  var I = 0, O = null;
  function H(n2) {
    I++, i2.monitorRunDependencies && i2.monitorRunDependencies(I);
  }
  function z(n2) {
    if (I--, i2.monitorRunDependencies && i2.monitorRunDependencies(I), 0 == I && O) {
      var r3 = O;
      O = null, r3();
    }
  }
  function D(n2) {
    i2.onAbort && i2.onAbort(n2), v(n2 = "Aborted(" + n2 + ")"), C = true, n2 += ". Build with -sASSERTIONS for more info.";
    var r3 = new WebAssembly.RuntimeError(n2);
    throw t2(r3), r3;
  }
  var V, M = "data:application/octet-stream;base64,";
  function B(n2) {
    return n2.startsWith(M);
  }
  function q(n2) {
    try {
      if (n2 == V && l) return new Uint8Array(l);
      if (c) return c(n2);
      throw "both async and sync fetching of the wasm failed";
    } catch (v2) {
      D(v2);
    }
  }
  function N(n2) {
    return l || !a2 && !u || "function" != typeof fetch ? Promise.resolve().then(() => q(n2)) : fetch(n2, {
      credentials: "same-origin"
    }).then((r3) => {
      if (!r3.ok) throw "failed to load wasm binary file at '" + n2 + "'";
      return r3.arrayBuffer();
    }).catch(() => q(n2));
  }
  function L(n2, r3, e2) {
    return N(n2).then((n3) => WebAssembly.instantiate(n3, r3)).then((n3) => n3).then(e2, (n3) => {
      v("failed to asynchronously prepare wasm: " + n3), D(n3);
    });
  }
  function G(n2, r3, e2, t3) {
    return n2 || "function" != typeof WebAssembly.instantiateStreaming || B(r3) || "function" != typeof fetch ? L(r3, e2, t3) : fetch(r3, {
      credentials: "same-origin"
    }).then((n3) => WebAssembly.instantiateStreaming(n3, e2).then(t3, function(n4) {
      return v("wasm streaming compile failed: " + n4), v("falling back to ArrayBuffer instantiation"), L(r3, e2, t3);
    }));
  }
  function X() {
    var n2 = {
      env: Fr,
      wasi_snapshot_preview1: Fr
    };
    function r3(n3, r4) {
      var e3 = n3.exports;
      return i2.asm = e3, d = i2.asm.memory, P(), T = i2.asm.__indirect_function_table, x(i2.asm.__wasm_call_ctors), z(), e3;
    }
    function e2(n3) {
      r3(n3.instance);
    }
    if (H(), i2.instantiateWasm) try {
      return i2.instantiateWasm(n2, r3);
    } catch (o4) {
      v("Module.instantiateWasm callback failed with error: " + o4), t2(o4);
    }
    return G(l, V, n2, e2).catch(t2), {};
  }
  function Z(n2) {
    for (; n2.length > 0; ) n2.shift()(i2);
  }
  B(V = "i3s.wasm") || (V = s(V));
  var $ = [];
  function J(n2) {
    var r3 = $[n2];
    return r3 || (n2 >= $.length && ($.length = n2 + 1), $[n2] = r3 = T.get(n2)), r3;
  }
  function K(n2, r3) {
    J(n2)(r3);
  }
  function Q(n2) {
    this.excPtr = n2, this.ptr = n2 - 24, this.set_type = function(n3) {
      w[this.ptr + 4 >> 2] = n3;
    }, this.get_type = function() {
      return w[this.ptr + 4 >> 2];
    }, this.set_destructor = function(n3) {
      w[this.ptr + 8 >> 2] = n3;
    }, this.get_destructor = function() {
      return w[this.ptr + 8 >> 2];
    }, this.set_caught = function(n3) {
      n3 = n3 ? 1 : 0, h[this.ptr + 12 | 0] = n3;
    }, this.get_caught = function() {
      return 0 != h[this.ptr + 12 | 0];
    }, this.set_rethrown = function(n3) {
      n3 = n3 ? 1 : 0, h[this.ptr + 13 | 0] = n3;
    }, this.get_rethrown = function() {
      return 0 != h[this.ptr + 13 | 0];
    }, this.init = function(n3, r3) {
      this.set_adjusted_ptr(0), this.set_type(n3), this.set_destructor(r3);
    }, this.set_adjusted_ptr = function(n3) {
      w[this.ptr + 16 >> 2] = n3;
    }, this.get_adjusted_ptr = function() {
      return w[this.ptr + 16 >> 2];
    }, this.get_exception_ptr = function() {
      if (Ir(this.get_type())) return w[this.excPtr >> 2];
      var n3 = this.get_adjusted_ptr();
      return 0 !== n3 ? n3 : this.excPtr;
    };
  }
  function Y(n2, r3, e2) {
    throw new Q(n2).init(r3, e2), n2;
  }
  var nn = {};
  function rn(n2) {
    for (; n2.length; ) {
      var r3 = n2.pop();
      n2.pop()(r3);
    }
  }
  function en(n2) {
    return this.fromWireType(_[n2 >> 2]);
  }
  var tn = {}, on = {}, an = {}, un = 48, cn = 57;
  function fn(n2) {
    if (void 0 === n2) return "_unknown";
    var r3 = (n2 = n2.replace(/[^a-zA-Z0-9_]/g, "$")).charCodeAt(0);
    return r3 >= un && r3 <= cn ? "_" + n2 : n2;
  }
  function sn(n2, r3) {
    return n2 = fn(n2), {
      [n2]: function() {
        return r3.apply(this, arguments);
      }
    }[n2];
  }
  function ln(n2, r3) {
    var e2 = sn(r3, function(n3) {
      this.name = r3, this.message = n3;
      var e3 = new Error(n3).stack;
      void 0 !== e3 && (this.stack = this.toString() + "\n" + e3.replace(/^Error(:[^\n]*)?\n/, ""));
    });
    return e2.prototype = Object.create(n2.prototype), e2.prototype.constructor = e2, e2.prototype.toString = function() {
      return void 0 === this.message ? this.name : this.name + ": " + this.message;
    }, e2;
  }
  var dn = void 0;
  function pn(n2) {
    throw new dn(n2);
  }
  function vn(n2, r3, e2) {
    function t3(r4) {
      var t4 = e2(r4);
      t4.length !== n2.length && pn("Mismatched type converter count");
      for (var i4 = 0; i4 < n2.length; ++i4) Tn(n2[i4], t4[i4]);
    }
    n2.forEach(function(n3) {
      an[n3] = r3;
    });
    var i3 = new Array(r3.length), o4 = [], a3 = 0;
    r3.forEach((n3, r4) => {
      on.hasOwnProperty(n3) ? i3[r4] = on[n3] : (o4.push(n3), tn.hasOwnProperty(n3) || (tn[n3] = []), tn[n3].push(() => {
        i3[r4] = on[n3], ++a3 === o4.length && t3(i3);
      }));
    }), 0 === o4.length && t3(i3);
  }
  function hn(n2) {
    var r3 = nn[n2];
    delete nn[n2];
    var e2 = r3.rawConstructor, t3 = r3.rawDestructor, i3 = r3.fields;
    vn([n2], i3.map((n3) => n3.getterReturnType).concat(i3.map((n3) => n3.setterArgumentType)), (n3) => {
      var o4 = {};
      return i3.forEach((r4, e3) => {
        var t4 = r4.fieldName, a3 = n3[e3], u2 = r4.getter, c2 = r4.getterContext, f2 = n3[e3 + i3.length], s2 = r4.setter, l2 = r4.setterContext;
        o4[t4] = {
          read: (n4) => a3.fromWireType(u2(c2, n4)),
          write: (n4, r5) => {
            var e4 = [];
            s2(l2, n4, f2.toWireType(e4, r5)), rn(e4);
          }
        };
      }), [{
        name: r3.name,
        fromWireType: function(n4) {
          var r4 = {};
          for (var e3 in o4) r4[e3] = o4[e3].read(n4);
          return t3(n4), r4;
        },
        toWireType: function(n4, r4) {
          for (var i4 in o4) if (!(i4 in r4)) throw new TypeError('Missing field:  "' + i4 + '"');
          var a3 = e2();
          for (i4 in o4) o4[i4].write(a3, r4[i4]);
          return null !== n4 && n4.push(t3, a3), a3;
        },
        argPackAdvance: 8,
        readValueFromPointer: en,
        destructorFunction: t3
      }];
    });
  }
  function mn(n2, r3, e2, t3, i3) {
  }
  function gn(n2) {
    switch (n2) {
      case 1:
        return 0;
      case 2:
        return 1;
      case 4:
        return 2;
      case 8:
        return 3;
      default:
        throw new TypeError("Unknown type size: " + n2);
    }
  }
  function yn() {
    for (var n2 = new Array(256), r3 = 0; r3 < 256; ++r3) n2[r3] = String.fromCharCode(r3);
    _n = n2;
  }
  var _n = void 0;
  function wn(n2) {
    for (var r3 = "", e2 = n2; m[e2]; ) r3 += _n[m[e2++]];
    return r3;
  }
  var bn = void 0;
  function An(n2) {
    throw new bn(n2);
  }
  function Tn(n2, r3, e2 = {}) {
    if (!("argPackAdvance" in r3)) throw new TypeError("registerType registeredInstance requires argPackAdvance");
    var t3 = r3.name;
    if (n2 || An('type "' + t3 + '" must have a positive integer typeid pointer'), on.hasOwnProperty(n2)) {
      if (e2.ignoreDuplicateRegistrations) return;
      An("Cannot register type '" + t3 + "' twice");
    }
    if (on[n2] = r3, delete an[n2], tn.hasOwnProperty(n2)) {
      var i3 = tn[n2];
      delete tn[n2], i3.forEach((n3) => n3());
    }
  }
  function Cn(n2, r3, e2, t3, i3) {
    var o4 = gn(e2);
    Tn(n2, {
      name: r3 = wn(r3),
      fromWireType: function(n3) {
        return !!n3;
      },
      toWireType: function(n3, r4) {
        return r4 ? t3 : i3;
      },
      argPackAdvance: 8,
      readValueFromPointer: function(n3) {
        var t4;
        if (1 === e2) t4 = h;
        else if (2 === e2) t4 = g;
        else {
          if (4 !== e2) throw new TypeError("Unknown boolean type size: " + r3);
          t4 = _;
        }
        return this.fromWireType(t4[n3 >> o4]);
      },
      destructorFunction: null
    });
  }
  function Pn() {
    this.allocated = [void 0], this.freelist = [], this.get = function(n2) {
      return this.allocated[n2];
    }, this.allocate = function(n2) {
      let r3 = this.freelist.pop() || this.allocated.length;
      return this.allocated[r3] = n2, r3;
    }, this.free = function(n2) {
      this.allocated[n2] = void 0, this.freelist.push(n2);
    };
  }
  var En = new Pn();
  function Wn(n2) {
    n2 >= En.reserved && 0 == --En.get(n2).refcount && En.free(n2);
  }
  function kn() {
    for (var n2 = 0, r3 = En.reserved; r3 < En.allocated.length; ++r3) void 0 !== En.allocated[r3] && ++n2;
    return n2;
  }
  function jn() {
    En.allocated.push({
      value: void 0
    }, {
      value: null
    }, {
      value: true
    }, {
      value: false
    }), En.reserved = En.allocated.length, i2.count_emval_handles = kn;
  }
  var Fn = {
    toValue: (n2) => (n2 || An("Cannot use deleted val. handle = " + n2), En.get(n2).value),
    toHandle: (n2) => {
      switch (n2) {
        case void 0:
          return 1;
        case null:
          return 2;
        case true:
          return 3;
        case false:
          return 4;
        default:
          return En.allocate({
            refcount: 1,
            value: n2
          });
      }
    }
  };
  function Rn(n2, r3) {
    Tn(n2, {
      name: r3 = wn(r3),
      fromWireType: function(n3) {
        var r4 = Fn.toValue(n3);
        return Wn(n3), r4;
      },
      toWireType: function(n3, r4) {
        return Fn.toHandle(r4);
      },
      argPackAdvance: 8,
      readValueFromPointer: en,
      destructorFunction: null
    });
  }
  function Sn(n2, r3) {
    switch (r3) {
      case 2:
        return function(n3) {
          return this.fromWireType(b[n3 >> 2]);
        };
      case 3:
        return function(n3) {
          return this.fromWireType(A[n3 >> 3]);
        };
      default:
        throw new TypeError("Unknown float type: " + n2);
    }
  }
  function xn(n2, r3, e2) {
    var t3 = gn(e2);
    Tn(n2, {
      name: r3 = wn(r3),
      fromWireType: function(n3) {
        return n3;
      },
      toWireType: function(n3, r4) {
        return r4;
      },
      argPackAdvance: 8,
      readValueFromPointer: Sn(r3, t3),
      destructorFunction: null
    });
  }
  function Un(n2, r3, e2, t3, i3, o4) {
    var a3 = r3.length;
    a3 < 2 && An("argTypes array size mismatch! Must at least get return value and 'this' types!");
    for (var u2 = null !== r3[1] && null !== e2, c2 = false, f2 = 1; f2 < r3.length; ++f2) if (null !== r3[f2] && void 0 === r3[f2].destructorFunction) {
      c2 = true;
      break;
    }
    var s2 = "void" !== r3[0].name, l2 = a3 - 2, d2 = new Array(l2), p2 = [], v2 = [];
    return function() {
      var e3;
      arguments.length !== l2 && An("function " + n2 + " called with " + arguments.length + " arguments, expected " + l2 + " args!"), v2.length = 0, p2.length = u2 ? 2 : 1, p2[0] = i3, u2 && (e3 = r3[1].toWireType(v2, this), p2[1] = e3);
      for (var o5 = 0; o5 < l2; ++o5) d2[o5] = r3[o5 + 2].toWireType(v2, arguments[o5]), p2.push(d2[o5]);
      function a4(n3) {
        if (c2) rn(v2);
        else for (var t4 = u2 ? 1 : 2; t4 < r3.length; t4++) {
          var i4 = 1 === t4 ? e3 : d2[t4 - 2];
          null !== r3[t4].destructorFunction && r3[t4].destructorFunction(i4);
        }
        if (s2) return r3[0].fromWireType(n3);
      }
      return a4(t3.apply(null, p2));
    };
  }
  function In(n2, r3, e2) {
    if (void 0 === n2[r3].overloadTable) {
      var t3 = n2[r3];
      n2[r3] = function() {
        return n2[r3].overloadTable.hasOwnProperty(arguments.length) || An("Function '" + e2 + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + n2[r3].overloadTable + ")!"), n2[r3].overloadTable[arguments.length].apply(this, arguments);
      }, n2[r3].overloadTable = [], n2[r3].overloadTable[t3.argCount] = t3;
    }
  }
  function On(n2, r3, e2) {
    i2.hasOwnProperty(n2) ? ((void 0 === e2 || void 0 !== i2[n2].overloadTable && void 0 !== i2[n2].overloadTable[e2]) && An("Cannot register public name '" + n2 + "' twice"), In(i2, n2, n2), i2.hasOwnProperty(e2) && An("Cannot register multiple overloads of a function with the same number of arguments (" + e2 + ")!"), i2[n2].overloadTable[e2] = r3) : (i2[n2] = r3, void 0 !== e2 && (i2[n2].numArguments = e2));
  }
  function Hn(n2, r3) {
    for (var e2 = [], t3 = 0; t3 < n2; t3++) e2.push(w[r3 + 4 * t3 >> 2]);
    return e2;
  }
  function zn(n2, r3, e2) {
    i2.hasOwnProperty(n2) || pn("Replacing nonexistant public symbol"), void 0 !== i2[n2].overloadTable && void 0 !== e2 ? i2[n2].overloadTable[e2] = r3 : (i2[n2] = r3, i2[n2].argCount = e2);
  }
  function Dn(n2, r3, e2) {
    var t3 = i2["dynCall_" + n2];
    return e2 && e2.length ? t3.apply(null, [r3].concat(e2)) : t3.call(null, r3);
  }
  function Vn(n2, r3, e2) {
    return n2.includes("j") ? Dn(n2, r3, e2) : J(r3).apply(null, e2);
  }
  function Mn(n2, r3) {
    var e2 = [];
    return function() {
      return e2.length = 0, Object.assign(e2, arguments), Vn(n2, r3, e2);
    };
  }
  function Bn(n2, r3) {
    function e2() {
      return n2.includes("j") ? Mn(n2, r3) : J(r3);
    }
    n2 = wn(n2);
    var t3 = e2();
    return "function" != typeof t3 && An("unknown function pointer with signature " + n2 + ": " + r3), t3;
  }
  var qn = void 0;
  function Nn(n2) {
    var r3 = xr(n2), e2 = wn(r3);
    return Sr(r3), e2;
  }
  function Ln(n2, r3) {
    var e2 = [], t3 = {};
    function i3(n3) {
      t3[n3] || on[n3] || (an[n3] ? an[n3].forEach(i3) : (e2.push(n3), t3[n3] = true));
    }
    throw r3.forEach(i3), new qn(n2 + ": " + e2.map(Nn).join([", "]));
  }
  function Gn(n2, r3, e2, t3, i3, o4, a3) {
    var u2 = Hn(r3, e2);
    n2 = wn(n2), i3 = Bn(t3, i3), On(n2, function() {
      Ln("Cannot call " + n2 + " due to unbound types", u2);
    }, r3 - 1), vn([], u2, function(e3) {
      var t4 = [e3[0], null].concat(e3.slice(1));
      return zn(n2, Un(n2, t4, null, i3, o4), r3 - 1), [];
    });
  }
  function Xn(n2, r3, e2) {
    switch (r3) {
      case 0:
        return e2 ? function(n3) {
          return h[n3];
        } : function(n3) {
          return m[n3];
        };
      case 1:
        return e2 ? function(n3) {
          return g[n3 >> 1];
        } : function(n3) {
          return y[n3 >> 1];
        };
      case 2:
        return e2 ? function(n3) {
          return _[n3 >> 2];
        } : function(n3) {
          return w[n3 >> 2];
        };
      default:
        throw new TypeError("Unknown integer type: " + n2);
    }
  }
  function Zn(n2, r3, e2, t3, i3) {
    r3 = wn(r3);
    var o4 = gn(e2), a3 = (n3) => n3;
    if (0 === t3) {
      var u2 = 32 - 8 * e2;
      a3 = (n3) => n3 << u2 >>> u2;
    }
    var c2 = r3.includes("unsigned"), f2 = (n3, r4) => {
    };
    Tn(n2, {
      name: r3,
      fromWireType: a3,
      toWireType: c2 ? function(n3, r4) {
        return f2(r4, this.name), r4 >>> 0;
      } : function(n3, r4) {
        return f2(r4, this.name), r4;
      },
      argPackAdvance: 8,
      readValueFromPointer: Xn(r3, o4, 0 !== t3),
      destructorFunction: null
    });
  }
  function $n(n2, r3, e2) {
    var t3 = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][r3];
    function i3(n3) {
      var r4 = w, e3 = r4[n3 >>= 2], i4 = r4[n3 + 1];
      return new t3(r4.buffer, i4, e3);
    }
    Tn(n2, {
      name: e2 = wn(e2),
      fromWireType: i3,
      argPackAdvance: 8,
      readValueFromPointer: i3
    }, {
      ignoreDuplicateRegistrations: true
    });
  }
  function Jn(n2, r3, e2, t3) {
    if (!(t3 > 0)) return 0;
    for (var i3 = e2, o4 = e2 + t3 - 1, a3 = 0; a3 < n2.length; ++a3) {
      var u2 = n2.charCodeAt(a3);
      if (u2 >= 55296 && u2 <= 57343 && (u2 = 65536 + ((1023 & u2) << 10) | 1023 & n2.charCodeAt(++a3)), u2 <= 127) {
        if (e2 >= o4) break;
        r3[e2++] = u2;
      } else if (u2 <= 2047) {
        if (e2 + 1 >= o4) break;
        r3[e2++] = 192 | u2 >> 6, r3[e2++] = 128 | 63 & u2;
      } else if (u2 <= 65535) {
        if (e2 + 2 >= o4) break;
        r3[e2++] = 224 | u2 >> 12, r3[e2++] = 128 | u2 >> 6 & 63, r3[e2++] = 128 | 63 & u2;
      } else {
        if (e2 + 3 >= o4) break;
        r3[e2++] = 240 | u2 >> 18, r3[e2++] = 128 | u2 >> 12 & 63, r3[e2++] = 128 | u2 >> 6 & 63, r3[e2++] = 128 | 63 & u2;
      }
    }
    return r3[e2] = 0, e2 - i3;
  }
  function Kn(n2, r3, e2) {
    return Jn(n2, m, r3, e2);
  }
  function Qn(n2) {
    for (var r3 = 0, e2 = 0; e2 < n2.length; ++e2) {
      var t3 = n2.charCodeAt(e2);
      t3 <= 127 ? r3++ : t3 <= 2047 ? r3 += 2 : t3 >= 55296 && t3 <= 57343 ? (r3 += 4, ++e2) : r3 += 3;
    }
    return r3;
  }
  var Yn = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0;
  function nr(n2, r3, e2) {
    for (var t3 = r3 + e2, i3 = r3; n2[i3] && !(i3 >= t3); ) ++i3;
    if (i3 - r3 > 16 && n2.buffer && Yn) return Yn.decode(n2.subarray(r3, i3));
    for (var o4 = ""; r3 < i3; ) {
      var a3 = n2[r3++];
      if (128 & a3) {
        var u2 = 63 & n2[r3++];
        if (192 != (224 & a3)) {
          var c2 = 63 & n2[r3++];
          if ((a3 = 224 == (240 & a3) ? (15 & a3) << 12 | u2 << 6 | c2 : (7 & a3) << 18 | u2 << 12 | c2 << 6 | 63 & n2[r3++]) < 65536) o4 += String.fromCharCode(a3);
          else {
            var f2 = a3 - 65536;
            o4 += String.fromCharCode(55296 | f2 >> 10, 56320 | 1023 & f2);
          }
        } else o4 += String.fromCharCode((31 & a3) << 6 | u2);
      } else o4 += String.fromCharCode(a3);
    }
    return o4;
  }
  function rr(n2, r3) {
    return n2 ? nr(m, n2, r3) : "";
  }
  function er(n2, r3) {
    var e2 = "std::string" === (r3 = wn(r3));
    Tn(n2, {
      name: r3,
      fromWireType: function(n3) {
        var r4, t3 = w[n3 >> 2], i3 = n3 + 4;
        if (e2) for (var o4 = i3, a3 = 0; a3 <= t3; ++a3) {
          var u2 = i3 + a3;
          if (a3 == t3 || 0 == m[u2]) {
            var c2 = rr(o4, u2 - o4);
            void 0 === r4 ? r4 = c2 : (r4 += String.fromCharCode(0), r4 += c2), o4 = u2 + 1;
          }
        }
        else {
          var f2 = new Array(t3);
          for (a3 = 0; a3 < t3; ++a3) f2[a3] = String.fromCharCode(m[i3 + a3]);
          r4 = f2.join("");
        }
        return Sr(n3), r4;
      },
      toWireType: function(n3, r4) {
        var t3;
        r4 instanceof ArrayBuffer && (r4 = new Uint8Array(r4));
        var i3 = "string" == typeof r4;
        i3 || r4 instanceof Uint8Array || r4 instanceof Uint8ClampedArray || r4 instanceof Int8Array || An("Cannot pass non-string to std::string"), t3 = e2 && i3 ? Qn(r4) : r4.length;
        var o4 = Rr(4 + t3 + 1), a3 = o4 + 4;
        if (w[o4 >> 2] = t3, e2 && i3) Kn(r4, a3, t3 + 1);
        else if (i3) for (var u2 = 0; u2 < t3; ++u2) {
          var c2 = r4.charCodeAt(u2);
          c2 > 255 && (Sr(a3), An("String has UTF-16 code units that do not fit in 8 bits")), m[a3 + u2] = c2;
        }
        else for (u2 = 0; u2 < t3; ++u2) m[a3 + u2] = r4[u2];
        return null !== n3 && n3.push(Sr, o4), o4;
      },
      argPackAdvance: 8,
      readValueFromPointer: en,
      destructorFunction: function(n3) {
        Sr(n3);
      }
    });
  }
  var tr = "undefined" != typeof TextDecoder ? new TextDecoder("utf-16le") : void 0;
  function ir(n2, r3) {
    for (var e2 = n2, t3 = e2 >> 1, i3 = t3 + r3 / 2; !(t3 >= i3) && y[t3]; ) ++t3;
    if ((e2 = t3 << 1) - n2 > 32 && tr) return tr.decode(m.subarray(n2, e2));
    for (var o4 = "", a3 = 0; !(a3 >= r3 / 2); ++a3) {
      var u2 = g[n2 + 2 * a3 >> 1];
      if (0 == u2) break;
      o4 += String.fromCharCode(u2);
    }
    return o4;
  }
  function or(n2, r3, e2) {
    if (void 0 === e2 && (e2 = 2147483647), e2 < 2) return 0;
    for (var t3 = r3, i3 = (e2 -= 2) < 2 * n2.length ? e2 / 2 : n2.length, o4 = 0; o4 < i3; ++o4) {
      var a3 = n2.charCodeAt(o4);
      g[r3 >> 1] = a3, r3 += 2;
    }
    return g[r3 >> 1] = 0, r3 - t3;
  }
  function ar(n2) {
    return 2 * n2.length;
  }
  function ur(n2, r3) {
    for (var e2 = 0, t3 = ""; !(e2 >= r3 / 4); ) {
      var i3 = _[n2 + 4 * e2 >> 2];
      if (0 == i3) break;
      if (++e2, i3 >= 65536) {
        var o4 = i3 - 65536;
        t3 += String.fromCharCode(55296 | o4 >> 10, 56320 | 1023 & o4);
      } else t3 += String.fromCharCode(i3);
    }
    return t3;
  }
  function cr(n2, r3, e2) {
    if (void 0 === e2 && (e2 = 2147483647), e2 < 4) return 0;
    for (var t3 = r3, i3 = t3 + e2 - 4, o4 = 0; o4 < n2.length; ++o4) {
      var a3 = n2.charCodeAt(o4);
      if (a3 >= 55296 && a3 <= 57343 && (a3 = 65536 + ((1023 & a3) << 10) | 1023 & n2.charCodeAt(++o4)), _[r3 >> 2] = a3, (r3 += 4) + 4 > i3) break;
    }
    return _[r3 >> 2] = 0, r3 - t3;
  }
  function fr(n2) {
    for (var r3 = 0, e2 = 0; e2 < n2.length; ++e2) {
      var t3 = n2.charCodeAt(e2);
      t3 >= 55296 && t3 <= 57343 && ++e2, r3 += 4;
    }
    return r3;
  }
  function sr(n2, r3, e2) {
    var t3, i3, o4, a3, u2;
    e2 = wn(e2), 2 === r3 ? (t3 = ir, i3 = or, a3 = ar, o4 = () => y, u2 = 1) : 4 === r3 && (t3 = ur, i3 = cr, a3 = fr, o4 = () => w, u2 = 2), Tn(n2, {
      name: e2,
      fromWireType: function(n3) {
        for (var e3, i4 = w[n3 >> 2], a4 = o4(), c2 = n3 + 4, f2 = 0; f2 <= i4; ++f2) {
          var s2 = n3 + 4 + f2 * r3;
          if (f2 == i4 || 0 == a4[s2 >> u2]) {
            var l2 = t3(c2, s2 - c2);
            void 0 === e3 ? e3 = l2 : (e3 += String.fromCharCode(0), e3 += l2), c2 = s2 + r3;
          }
        }
        return Sr(n3), e3;
      },
      toWireType: function(n3, t4) {
        "string" != typeof t4 && An("Cannot pass non-string to C++ string type " + e2);
        var o5 = a3(t4), c2 = Rr(4 + o5 + r3);
        return w[c2 >> 2] = o5 >> u2, i3(t4, c2 + 4, o5 + r3), null !== n3 && n3.push(Sr, c2), c2;
      },
      argPackAdvance: 8,
      readValueFromPointer: en,
      destructorFunction: function(n3) {
        Sr(n3);
      }
    });
  }
  function lr(n2, r3, e2, t3, i3, o4) {
    nn[n2] = {
      name: wn(r3),
      rawConstructor: Bn(e2, t3),
      rawDestructor: Bn(i3, o4),
      fields: []
    };
  }
  function dr(n2, r3, e2, t3, i3, o4, a3, u2, c2, f2) {
    nn[n2].fields.push({
      fieldName: wn(r3),
      getterReturnType: e2,
      getter: Bn(t3, i3),
      getterContext: o4,
      setterArgumentType: a3,
      setter: Bn(u2, c2),
      setterContext: f2
    });
  }
  function pr(n2, r3) {
    Tn(n2, {
      isVoid: true,
      name: r3 = wn(r3),
      argPackAdvance: 0,
      fromWireType: function() {
      },
      toWireType: function(n3, r4) {
      }
    });
  }
  function vr(n2) {
    n2 > 4 && (En.get(n2).refcount += 1);
  }
  var hr = {};
  function mr(n2) {
    var r3 = hr[n2];
    return void 0 === r3 ? wn(n2) : r3;
  }
  function gr(n2) {
    return Fn.toHandle(mr(n2));
  }
  function yr(n2, r3) {
    var e2 = on[n2];
    return void 0 === e2 && An(r3 + " has unknown type " + Nn(n2)), e2;
  }
  function _r(n2, r3) {
    var e2 = (n2 = yr(n2, "_emval_take_value")).readValueFromPointer(r3);
    return Fn.toHandle(e2);
  }
  function wr() {
    D("");
  }
  function br(n2, r3, e2) {
    m.copyWithin(n2, r3, r3 + e2);
  }
  function Ar() {
    return 2147483648;
  }
  function Tr(n2) {
    var r3 = d.buffer;
    try {
      return d.grow(n2 - r3.byteLength + 65535 >>> 16), P(), 1;
    } catch (e2) {
    }
  }
  function Cr(n2) {
    var r3 = m.length;
    n2 >>>= 0;
    var e2 = Ar();
    if (n2 > e2) return false;
    let t3 = (n3, r4) => n3 + (r4 - n3 % r4) % r4;
    for (var i3 = 1; i3 <= 4; i3 *= 2) {
      var o4 = r3 * (1 + 0.2 / i3);
      if (o4 = Math.min(o4, n2 + 100663296), Tr(Math.min(e2, t3(Math.max(n2, o4), 65536)))) return true;
    }
    return false;
  }
  function Pr(n2) {
    return 52;
  }
  function Er(n2, r3, e2, t3, i3) {
    return 70;
  }
  var Wr = [null, [], []];
  function kr(n2, r3) {
    var e2 = Wr[n2];
    0 === r3 || 10 === r3 ? ((1 === n2 ? p : v)(nr(e2, 0)), e2.length = 0) : e2.push(r3);
  }
  function jr(n2, r3, e2, t3) {
    for (var i3 = 0, o4 = 0; o4 < e2; o4++) {
      var a3 = w[r3 >> 2], u2 = w[r3 + 4 >> 2];
      r3 += 8;
      for (var c2 = 0; c2 < u2; c2++) kr(n2, m[a3 + c2]);
      i3 += u2;
    }
    return w[t3 >> 2] = i3, 0;
  }
  dn = i2.InternalError = ln(Error, "InternalError"), yn(), bn = i2.BindingError = ln(Error, "BindingError"), jn(), qn = i2.UnboundTypeError = ln(Error, "UnboundTypeError");
  var Fr = {
    __call_sighandler: K,
    __cxa_throw: Y,
    _embind_finalize_value_object: hn,
    _embind_register_bigint: mn,
    _embind_register_bool: Cn,
    _embind_register_emval: Rn,
    _embind_register_float: xn,
    _embind_register_function: Gn,
    _embind_register_integer: Zn,
    _embind_register_memory_view: $n,
    _embind_register_std_string: er,
    _embind_register_std_wstring: sr,
    _embind_register_value_object: lr,
    _embind_register_value_object_field: dr,
    _embind_register_void: pr,
    _emval_decref: Wn,
    _emval_incref: vr,
    _emval_new_cstring: gr,
    _emval_take_value: _r,
    abort: wr,
    emscripten_memcpy_big: br,
    emscripten_resize_heap: Cr,
    fd_close: Pr,
    fd_seek: Er,
    fd_write: jr
  };
  X();
  var Rr = function() {
    return (Rr = i2.asm.malloc).apply(null, arguments);
  }, Sr = function() {
    return (Sr = i2.asm.free).apply(null, arguments);
  }, xr = function() {
    return (xr = i2.asm.__getTypeName).apply(null, arguments);
  };
  i2.__embind_initialize_bindings = function() {
    return (i2.__embind_initialize_bindings = i2.asm._embind_initialize_bindings).apply(null, arguments);
  };
  var Ur, Ir = function() {
    return (Ir = i2.asm.__cxa_is_pointer_type).apply(null, arguments);
  };
  function Or() {
    function n2() {
      Ur || (Ur = true, i2.calledRun = true, C || (F(), r2(i2), i2.onRuntimeInitialized && i2.onRuntimeInitialized(), R()));
    }
    I > 0 || (j(), I > 0 || (i2.setStatus ? (i2.setStatus("Running..."), setTimeout(function() {
      setTimeout(function() {
        i2.setStatus("");
      }, 1), n2();
    }, 1)) : n2()));
  }
  if (i2.dynCall_vij = function() {
    return (i2.dynCall_vij = i2.asm.dynCall_vij).apply(null, arguments);
  }, i2.dynCall_jiji = function() {
    return (i2.dynCall_jiji = i2.asm.dynCall_jiji).apply(null, arguments);
  }, O = function n2() {
    Ur || Or(), Ur || (O = n2);
  }, i2.preInit) for ("function" == typeof i2.preInit && (i2.preInit = [i2.preInit]); i2.preInit.length > 0; ) i2.preInit.pop()();
  return Or(), n.ready;
}, r.exports = t;
var o2 = o(i.exports);
var a = Object.freeze(Object.defineProperty({
  __proto__: null,
  default: o2
}, Symbol.toStringTag, {
  value: "Module"
}));
export {
  a as i
};
//# sourceMappingURL=i3s-EFUF3IYV.js.map
