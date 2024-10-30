import {
  o
} from "./chunk-7RMVJCDW.js";
import "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/chunks/lclayout.js
var e;
var t;
var n;
var a = {
  exports: {}
};
e = a, t = "undefined" != typeof document ? document.currentScript?.src : void 0, n = function(r = {}) {
  var e2, n2, a2 = Object.assign({}, r), o3 = new Promise((r2, t2) => {
    e2 = r2, n2 = t2;
  }), i2 = true, u = Object.assign({}, a2), s = "./this.program", l = "";
  function c(r2) {
    return a2.locateFile ? a2.locateFile(r2, l) : l + r2;
  }
  "undefined" != typeof document && document.currentScript && (l = document.currentScript.src), t && (l = t), l = l.startsWith("blob:") ? "" : l.substr(0, l.replace(/[?#].*/, "").lastIndexOf("/") + 1), a2.print || console.log.bind(console);
  var f, d, h = a2.printErr || console.error.bind(console);
  Object.assign(a2, u), u = null, a2.arguments && a2.arguments, a2.thisProgram && (s = a2.thisProgram), a2.quit && a2.quit, a2.wasmBinary && (f = a2.wasmBinary);
  var m, v, p, y, g, w, _, b, A = false;
  function T() {
    var r2 = d.buffer;
    a2.HEAP8 = m = new Int8Array(r2), a2.HEAP16 = p = new Int16Array(r2), a2.HEAPU8 = v = new Uint8Array(r2), a2.HEAPU16 = y = new Uint16Array(r2), a2.HEAP32 = g = new Int32Array(r2), a2.HEAPU32 = w = new Uint32Array(r2), a2.HEAPF32 = _ = new Float32Array(r2), a2.HEAPF64 = b = new Float64Array(r2);
  }
  var C = [], F = [], P = [];
  function W() {
    if (a2.preRun) for ("function" == typeof a2.preRun && (a2.preRun = [a2.preRun]); a2.preRun.length; ) O(a2.preRun.shift());
    G(C);
  }
  function E() {
    G(F);
  }
  function S() {
    if (a2.postRun) for ("function" == typeof a2.postRun && (a2.postRun = [a2.postRun]); a2.postRun.length; ) j(a2.postRun.shift());
    G(P);
  }
  function O(r2) {
    C.unshift(r2);
  }
  function $(r2) {
    F.unshift(r2);
  }
  function j(r2) {
    P.unshift(r2);
  }
  var M = 0, D = null;
  function R(r2) {
    M++, a2.monitorRunDependencies?.(M);
  }
  function x(r2) {
    if (M--, a2.monitorRunDependencies?.(M), 0 == M && D) {
      var e3 = D;
      D = null, e3();
    }
  }
  function k(r2) {
    a2.onAbort?.(r2), h(r2 = "Aborted(" + r2 + ")"), A = true, r2 += ". Build with -sASSERTIONS for more info.";
    var e3 = new WebAssembly.RuntimeError(r2);
    throw n2(e3), e3;
  }
  var H, I = "data:application/octet-stream;base64,", V = (r2) => r2.startsWith(I);
  function U(r2) {
    if (r2 == H && f) return new Uint8Array(f);
    throw "both async and sync fetching of the wasm failed";
  }
  function Y(r2) {
    return !f && i2 && "function" == typeof fetch ? fetch(r2, {
      credentials: "same-origin"
    }).then((e3) => {
      if (!e3.ok) throw `failed to load wasm binary file at '${r2}'`;
      return e3.arrayBuffer();
    }).catch(() => U(r2)) : Promise.resolve().then(() => U(r2));
  }
  function B(r2, e3, t2) {
    return Y(r2).then((r3) => WebAssembly.instantiate(r3, e3)).then(t2, (r3) => {
      h(`failed to asynchronously prepare wasm: ${r3}`), k(r3);
    });
  }
  function z(r2, e3, t2, n3) {
    return r2 || "function" != typeof WebAssembly.instantiateStreaming || V(e3) || "function" != typeof fetch ? B(e3, t2, n3) : fetch(e3, {
      credentials: "same-origin"
    }).then((r3) => WebAssembly.instantiateStreaming(r3, t2).then(n3, function(r4) {
      return h(`wasm streaming compile failed: ${r4}`), h("falling back to ArrayBuffer instantiation"), B(e3, t2, n3);
    }));
  }
  function N() {
    return {
      a: ut
    };
  }
  function q() {
    var r2 = N();
    function e3(r3, e4) {
      return st = r3.exports, d = st.M, T(), kr = st.P, $(st.N), x(), st;
    }
    function t2(r3) {
      e3(r3.instance);
    }
    if (R(), a2.instantiateWasm) try {
      return a2.instantiateWasm(r2, e3);
    } catch (o4) {
      h(`Module.instantiateWasm callback failed with error: ${o4}`), n2(o4);
    }
    return z(f, H, r2, t2).catch(n2), {};
  }
  V(H = "lclayout.wasm") || (H = c(H));
  var G = (r2) => {
    for (; r2.length > 0; ) r2.shift()(a2);
  };
  a2.noExitRuntime;
  class J {
    constructor(r2) {
      this.excPtr = r2, this.ptr = r2 - 24;
    }
    set_type(r2) {
      w[this.ptr + 4 >> 2] = r2;
    }
    get_type() {
      return w[this.ptr + 4 >> 2];
    }
    set_destructor(r2) {
      w[this.ptr + 8 >> 2] = r2;
    }
    get_destructor() {
      return w[this.ptr + 8 >> 2];
    }
    set_caught(r2) {
      r2 = r2 ? 1 : 0, m[this.ptr + 12] = r2;
    }
    get_caught() {
      return 0 != m[this.ptr + 12];
    }
    set_rethrown(r2) {
      r2 = r2 ? 1 : 0, m[this.ptr + 13] = r2;
    }
    get_rethrown() {
      return 0 != m[this.ptr + 13];
    }
    init(r2, e3) {
      this.set_adjusted_ptr(0), this.set_type(r2), this.set_destructor(e3);
    }
    set_adjusted_ptr(r2) {
      w[this.ptr + 16 >> 2] = r2;
    }
    get_adjusted_ptr() {
      return w[this.ptr + 16 >> 2];
    }
    get_exception_ptr() {
      if (dt(this.get_type())) return w[this.excPtr >> 2];
      var r2 = this.get_adjusted_ptr();
      return 0 !== r2 ? r2 : this.excPtr;
    }
  }
  var L = (r2, e3, t2) => {
    throw new J(r2).init(e3, t2), r2;
  }, X = {}, K = (r2) => {
    for (; r2.length; ) {
      var e3 = r2.pop();
      r2.pop()(e3);
    }
  };
  function Q(r2) {
    return this.fromWireType(w[r2 >> 2]);
  }
  var Z, rr, er, tr = {}, nr = {}, ar = {}, or = (r2) => {
    throw new Z(r2);
  }, ir = (r2, e3, t2) => {
    function n3(e4) {
      var n4 = t2(e4);
      n4.length !== r2.length && or("Mismatched type converter count");
      for (var a4 = 0; a4 < r2.length; ++a4) hr(r2[a4], n4[a4]);
    }
    r2.forEach(function(r3) {
      ar[r3] = e3;
    });
    var a3 = new Array(e3.length), o4 = [], i3 = 0;
    e3.forEach((r3, e4) => {
      nr.hasOwnProperty(r3) ? a3[e4] = nr[r3] : (o4.push(r3), tr.hasOwnProperty(r3) || (tr[r3] = []), tr[r3].push(() => {
        a3[e4] = nr[r3], ++i3 === o4.length && n3(a3);
      }));
    }), 0 === o4.length && n3(a3);
  }, ur = (r2) => {
    var e3 = X[r2];
    delete X[r2];
    var t2 = e3.rawConstructor, n3 = e3.rawDestructor, a3 = e3.fields, o4 = a3.map((r3) => r3.getterReturnType).concat(a3.map((r3) => r3.setterArgumentType));
    ir([r2], o4, (r3) => {
      var o5 = {};
      return a3.forEach((e4, t3) => {
        var n4 = e4.fieldName, i3 = r3[t3], u2 = e4.getter, s2 = e4.getterContext, l2 = r3[t3 + a3.length], c2 = e4.setter, f2 = e4.setterContext;
        o5[n4] = {
          read: (r4) => i3.fromWireType(u2(s2, r4)),
          write: (r4, e5) => {
            var t4 = [];
            c2(f2, r4, l2.toWireType(t4, e5)), K(t4);
          }
        };
      }), [{
        name: e3.name,
        fromWireType: (r4) => {
          var e4 = {};
          for (var t3 in o5) e4[t3] = o5[t3].read(r4);
          return n3(r4), e4;
        },
        toWireType: (r4, e4) => {
          for (var a4 in o5) if (!(a4 in e4)) throw new TypeError(`Missing field: "${a4}"`);
          var i3 = t2();
          for (a4 in o5) o5[a4].write(i3, e4[a4]);
          return null !== r4 && r4.push(n3, i3), i3;
        },
        argPackAdvance: mr,
        readValueFromPointer: Q,
        destructorFunction: n3
      }];
    });
  }, sr = (r2, e3, t2, n3, a3) => {
  }, lr = () => {
    for (var r2 = new Array(256), e3 = 0; e3 < 256; ++e3) r2[e3] = String.fromCharCode(e3);
    rr = r2;
  }, cr = (r2) => {
    for (var e3 = "", t2 = r2; v[t2]; ) e3 += rr[v[t2++]];
    return e3;
  }, fr = (r2) => {
    throw new er(r2);
  };
  function dr(r2, e3, t2 = {}) {
    var n3 = e3.name;
    if (r2 || fr(`type "${n3}" must have a positive integer typeid pointer`), nr.hasOwnProperty(r2)) {
      if (t2.ignoreDuplicateRegistrations) return;
      fr(`Cannot register type '${n3}' twice`);
    }
    if (nr[r2] = e3, delete ar[r2], tr.hasOwnProperty(r2)) {
      var a3 = tr[r2];
      delete tr[r2], a3.forEach((r3) => r3());
    }
  }
  function hr(r2, e3, t2 = {}) {
    if (!("argPackAdvance" in e3)) throw new TypeError("registerType registeredInstance requires argPackAdvance");
    return dr(r2, e3, t2);
  }
  var mr = 8, vr = (r2, e3, t2, n3) => {
    hr(r2, {
      name: e3 = cr(e3),
      fromWireType: function(r3) {
        return !!r3;
      },
      toWireType: function(r3, e4) {
        return e4 ? t2 : n3;
      },
      argPackAdvance: mr,
      readValueFromPointer: function(r3) {
        return this.fromWireType(v[r3]);
      },
      destructorFunction: null
    });
  }, pr = (r2, e3, t2) => {
    r2 = cr(r2), ir([], [e3], (e4) => (e4 = e4[0], a2[r2] = e4.fromWireType(t2), []));
  }, yr = [], gr = [], wr = (r2) => {
    r2 > 9 && 0 == --gr[r2 + 1] && (gr[r2] = void 0, yr.push(r2));
  }, _r = () => gr.length / 2 - 5 - yr.length, br = () => {
    gr.push(0, 1, void 0, 1, null, 1, true, 1, false, 1), a2.count_emval_handles = _r;
  }, Ar = {
    toValue: (r2) => (r2 || fr("Cannot use deleted val. handle = " + r2), gr[r2]),
    toHandle: (r2) => {
      switch (r2) {
        case void 0:
          return 2;
        case null:
          return 4;
        case true:
          return 6;
        case false:
          return 8;
        default: {
          const e3 = yr.pop() || gr.length;
          return gr[e3] = r2, gr[e3 + 1] = 1, e3;
        }
      }
    }
  }, Tr = {
    name: "emscripten::val",
    fromWireType: (r2) => {
      var e3 = Ar.toValue(r2);
      return wr(r2), e3;
    },
    toWireType: (r2, e3) => Ar.toHandle(e3),
    argPackAdvance: mr,
    readValueFromPointer: Q,
    destructorFunction: null
  }, Cr = (r2) => hr(r2, Tr), Fr = (r2, e3, t2) => {
    if (void 0 === r2[e3].overloadTable) {
      var n3 = r2[e3];
      r2[e3] = function(...n4) {
        return r2[e3].overloadTable.hasOwnProperty(n4.length) || fr(`Function '${t2}' called with an invalid number of arguments (${n4.length}) - expects one of (${r2[e3].overloadTable})!`), r2[e3].overloadTable[n4.length].apply(this, n4);
      }, r2[e3].overloadTable = [], r2[e3].overloadTable[n3.argCount] = n3;
    }
  }, Pr = (r2, e3, t2) => {
    a2.hasOwnProperty(r2) ? ((void 0 === t2 || void 0 !== a2[r2].overloadTable && void 0 !== a2[r2].overloadTable[t2]) && fr(`Cannot register public name '${r2}' twice`), Fr(a2, r2, r2), a2.hasOwnProperty(t2) && fr(`Cannot register multiple overloads of a function with the same number of arguments (${t2})!`), a2[r2].overloadTable[t2] = e3) : (a2[r2] = e3, void 0 !== t2 && (a2[r2].numArguments = t2));
  }, Wr = (r2, e3, t2) => {
    switch (e3) {
      case 1:
        return t2 ? function(r3) {
          return this.fromWireType(m[r3]);
        } : function(r3) {
          return this.fromWireType(v[r3]);
        };
      case 2:
        return t2 ? function(r3) {
          return this.fromWireType(p[r3 >> 1]);
        } : function(r3) {
          return this.fromWireType(y[r3 >> 1]);
        };
      case 4:
        return t2 ? function(r3) {
          return this.fromWireType(g[r3 >> 2]);
        } : function(r3) {
          return this.fromWireType(w[r3 >> 2]);
        };
      default:
        throw new TypeError(`invalid integer width (${e3}): ${r2}`);
    }
  }, Er = (r2, e3, t2, n3) => {
    function a3() {
    }
    e3 = cr(e3), a3.values = {}, hr(r2, {
      name: e3,
      constructor: a3,
      fromWireType: function(r3) {
        return this.constructor.values[r3];
      },
      toWireType: (r3, e4) => e4.value,
      argPackAdvance: mr,
      readValueFromPointer: Wr(e3, t2, n3),
      destructorFunction: null
    }), Pr(e3, a3);
  }, Sr = (r2, e3) => Object.defineProperty(e3, "name", {
    value: r2
  }), Or = (r2) => {
    var e3 = lt(r2), t2 = cr(e3);
    return ft(e3), t2;
  }, $r = (r2, e3) => {
    var t2 = nr[r2];
    return void 0 === t2 && fr(`${e3} has unknown type ${Or(r2)}`), t2;
  }, jr = (r2, e3, t2) => {
    var n3 = $r(r2, "enum");
    e3 = cr(e3);
    var a3 = n3.constructor, o4 = Object.create(n3.constructor.prototype, {
      value: {
        value: t2
      },
      constructor: {
        value: Sr(`${n3.name}_${e3}`, function() {
        })
      }
    });
    a3.values[t2] = o4, a3[e3] = o4;
  }, Mr = (r2, e3) => {
    switch (e3) {
      case 4:
        return function(r3) {
          return this.fromWireType(_[r3 >> 2]);
        };
      case 8:
        return function(r3) {
          return this.fromWireType(b[r3 >> 3]);
        };
      default:
        throw new TypeError(`invalid float width (${e3}): ${r2}`);
    }
  }, Dr = (r2, e3, t2) => {
    hr(r2, {
      name: e3 = cr(e3),
      fromWireType: (r3) => r3,
      toWireType: (r3, e4) => e4,
      argPackAdvance: mr,
      readValueFromPointer: Mr(e3, t2),
      destructorFunction: null
    });
  };
  function Rr(r2) {
    for (var e3 = 1; e3 < r2.length; ++e3) if (null !== r2[e3] && void 0 === r2[e3].destructorFunction) return true;
    return false;
  }
  function xr(r2, e3, t2, n3, a3, o4) {
    var i3 = e3.length;
    i3 < 2 && fr("argTypes array size mismatch! Must at least get return value and 'this' types!");
    var u2 = null !== e3[1] && null !== t2, s2 = Rr(e3), l2 = "void" !== e3[0].name, c2 = i3 - 2, f2 = new Array(c2), d2 = [], h2 = [];
    return Sr(r2, function(...t3) {
      var o5;
      t3.length !== c2 && fr(`function ${r2} called with ${t3.length} arguments, expected ${c2}`), h2.length = 0, d2.length = u2 ? 2 : 1, d2[0] = a3, u2 && (o5 = e3[1].toWireType(h2, this), d2[1] = o5);
      for (var i4 = 0; i4 < c2; ++i4) f2[i4] = e3[i4 + 2].toWireType(h2, t3[i4]), d2.push(f2[i4]);
      function m2(r3) {
        if (s2) K(h2);
        else for (var t4 = u2 ? 1 : 2; t4 < e3.length; t4++) {
          var n4 = 1 === t4 ? o5 : f2[t4 - 2];
          null !== e3[t4].destructorFunction && e3[t4].destructorFunction(n4);
        }
        if (l2) return e3[0].fromWireType(r3);
      }
      return m2(n3(...d2));
    });
  }
  var kr, Hr, Ir, Vr = (r2, e3) => {
    for (var t2 = [], n3 = 0; n3 < r2; n3++) t2.push(w[e3 + 4 * n3 >> 2]);
    return t2;
  }, Ur = (r2, e3, t2) => {
    a2.hasOwnProperty(r2) || or("Replacing nonexistent public symbol"), void 0 !== a2[r2].overloadTable && void 0 !== t2 ? a2[r2].overloadTable[t2] = e3 : (a2[r2] = e3, a2[r2].argCount = t2);
  }, Yr = (r2, e3, t2) => (r2 = r2.replace(/p/g, "i"), (0, a2["dynCall_" + r2])(e3, ...t2)), Br = [], zr = (r2) => {
    var e3 = Br[r2];
    return e3 || (r2 >= Br.length && (Br.length = r2 + 1), Br[r2] = e3 = kr.get(r2)), e3;
  }, Nr = (r2, e3, t2 = []) => r2.includes("j") ? Yr(r2, e3, t2) : zr(e3)(...t2), qr = (r2, e3) => (...t2) => Nr(r2, e3, t2), Gr = (r2, e3) => {
    function t2() {
      return r2.includes("j") ? qr(r2, e3) : zr(e3);
    }
    r2 = cr(r2);
    var n3 = t2();
    return "function" != typeof n3 && fr(`unknown function pointer with signature ${r2}: ${e3}`), n3;
  }, Jr = (r2, e3) => {
    var t2 = Sr(e3, function(r3) {
      this.name = e3, this.message = r3;
      var t3 = new Error(r3).stack;
      void 0 !== t3 && (this.stack = this.toString() + "\n" + t3.replace(/^Error(:[^\n]*)?\n/, ""));
    });
    return t2.prototype = Object.create(r2.prototype), t2.prototype.constructor = t2, t2.prototype.toString = function() {
      return void 0 === this.message ? this.name : `${this.name}: ${this.message}`;
    }, t2;
  }, Lr = (r2, e3) => {
    var t2 = [], n3 = {};
    function a3(r3) {
      n3[r3] || nr[r3] || (ar[r3] ? ar[r3].forEach(a3) : (t2.push(r3), n3[r3] = true));
    }
    throw e3.forEach(a3), new Hr(`${r2}: ` + t2.map(Or).join([", "]));
  }, Xr = (r2) => {
    const e3 = (r2 = r2.trim()).indexOf("(");
    return -1 !== e3 ? r2.substr(0, e3) : r2;
  }, Kr = (r2, e3, t2, n3, a3, o4, i3) => {
    var u2 = Vr(e3, t2);
    r2 = cr(r2), r2 = Xr(r2), a3 = Gr(n3, a3), Pr(r2, function() {
      Lr(`Cannot call ${r2} due to unbound types`, u2);
    }, e3 - 1), ir([], u2, (t3) => {
      var n4 = [t3[0], null].concat(t3.slice(1));
      return Ur(r2, xr(r2, n4, null, a3, o4), e3 - 1), [];
    });
  }, Qr = (r2, e3, t2) => {
    switch (e3) {
      case 1:
        return t2 ? (r3) => m[r3] : (r3) => v[r3];
      case 2:
        return t2 ? (r3) => p[r3 >> 1] : (r3) => y[r3 >> 1];
      case 4:
        return t2 ? (r3) => g[r3 >> 2] : (r3) => w[r3 >> 2];
      default:
        throw new TypeError(`invalid integer width (${e3}): ${r2}`);
    }
  }, Zr = (r2, e3, t2, n3, a3) => {
    e3 = cr(e3);
    var o4 = (r3) => r3;
    if (0 === n3) {
      var i3 = 32 - 8 * t2;
      o4 = (r3) => r3 << i3 >>> i3;
    }
    var u2 = e3.includes("unsigned"), s2 = (r3, e4) => {
    };
    hr(r2, {
      name: e3,
      fromWireType: o4,
      toWireType: u2 ? function(r3, e4) {
        return s2(e4, this.name), e4 >>> 0;
      } : function(r3, e4) {
        return s2(e4, this.name), e4;
      },
      argPackAdvance: mr,
      readValueFromPointer: Qr(e3, t2, 0 !== n3),
      destructorFunction: null
    });
  }, re = (r2, e3, t2) => {
    var n3 = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][e3];
    function a3(r3) {
      var e4 = w[r3 >> 2], t3 = w[r3 + 4 >> 2];
      return new n3(m.buffer, t3, e4);
    }
    hr(r2, {
      name: t2 = cr(t2),
      fromWireType: a3,
      argPackAdvance: mr,
      readValueFromPointer: a3
    }, {
      ignoreDuplicateRegistrations: true
    });
  }, ee = (r2, e3) => {
    Cr(r2);
  }, te = (r2, e3, t2, n3) => {
    if (!(n3 > 0)) return 0;
    for (var a3 = t2, o4 = t2 + n3 - 1, i3 = 0; i3 < r2.length; ++i3) {
      var u2 = r2.charCodeAt(i3);
      if (u2 >= 55296 && u2 <= 57343 && (u2 = 65536 + ((1023 & u2) << 10) | 1023 & r2.charCodeAt(++i3)), u2 <= 127) {
        if (t2 >= o4) break;
        e3[t2++] = u2;
      } else if (u2 <= 2047) {
        if (t2 + 1 >= o4) break;
        e3[t2++] = 192 | u2 >> 6, e3[t2++] = 128 | 63 & u2;
      } else if (u2 <= 65535) {
        if (t2 + 2 >= o4) break;
        e3[t2++] = 224 | u2 >> 12, e3[t2++] = 128 | u2 >> 6 & 63, e3[t2++] = 128 | 63 & u2;
      } else {
        if (t2 + 3 >= o4) break;
        e3[t2++] = 240 | u2 >> 18, e3[t2++] = 128 | u2 >> 12 & 63, e3[t2++] = 128 | u2 >> 6 & 63, e3[t2++] = 128 | 63 & u2;
      }
    }
    return e3[t2] = 0, t2 - a3;
  }, ne = (r2, e3, t2) => te(r2, v, e3, t2), ae = (r2) => {
    for (var e3 = 0, t2 = 0; t2 < r2.length; ++t2) {
      var n3 = r2.charCodeAt(t2);
      n3 <= 127 ? e3++ : n3 <= 2047 ? e3 += 2 : n3 >= 55296 && n3 <= 57343 ? (e3 += 4, ++t2) : e3 += 3;
    }
    return e3;
  }, oe = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0, ie = (r2, e3, t2) => {
    for (var n3 = e3 + t2, a3 = e3; r2[a3] && !(a3 >= n3); ) ++a3;
    if (a3 - e3 > 16 && r2.buffer && oe) return oe.decode(r2.subarray(e3, a3));
    for (var o4 = ""; e3 < a3; ) {
      var i3 = r2[e3++];
      if (128 & i3) {
        var u2 = 63 & r2[e3++];
        if (192 != (224 & i3)) {
          var s2 = 63 & r2[e3++];
          if ((i3 = 224 == (240 & i3) ? (15 & i3) << 12 | u2 << 6 | s2 : (7 & i3) << 18 | u2 << 12 | s2 << 6 | 63 & r2[e3++]) < 65536) o4 += String.fromCharCode(i3);
          else {
            var l2 = i3 - 65536;
            o4 += String.fromCharCode(55296 | l2 >> 10, 56320 | 1023 & l2);
          }
        } else o4 += String.fromCharCode((31 & i3) << 6 | u2);
      } else o4 += String.fromCharCode(i3);
    }
    return o4;
  }, ue = (r2, e3) => r2 ? ie(v, r2, e3) : "", se = (r2, e3) => {
    var t2 = "std::string" === (e3 = cr(e3));
    hr(r2, {
      name: e3,
      fromWireType(r3) {
        var e4, n3 = w[r3 >> 2], a3 = r3 + 4;
        if (t2) for (var o4 = a3, i3 = 0; i3 <= n3; ++i3) {
          var u2 = a3 + i3;
          if (i3 == n3 || 0 == v[u2]) {
            var s2 = ue(o4, u2 - o4);
            void 0 === e4 ? e4 = s2 : (e4 += String.fromCharCode(0), e4 += s2), o4 = u2 + 1;
          }
        }
        else {
          var l2 = new Array(n3);
          for (i3 = 0; i3 < n3; ++i3) l2[i3] = String.fromCharCode(v[a3 + i3]);
          e4 = l2.join("");
        }
        return ft(r3), e4;
      },
      toWireType(r3, e4) {
        var n3;
        e4 instanceof ArrayBuffer && (e4 = new Uint8Array(e4));
        var a3 = "string" == typeof e4;
        a3 || e4 instanceof Uint8Array || e4 instanceof Uint8ClampedArray || e4 instanceof Int8Array || fr("Cannot pass non-string to std::string"), n3 = t2 && a3 ? ae(e4) : e4.length;
        var o4 = ct(4 + n3 + 1), i3 = o4 + 4;
        if (w[o4 >> 2] = n3, t2 && a3) ne(e4, i3, n3 + 1);
        else if (a3) for (var u2 = 0; u2 < n3; ++u2) {
          var s2 = e4.charCodeAt(u2);
          s2 > 255 && (ft(i3), fr("String has UTF-16 code units that do not fit in 8 bits")), v[i3 + u2] = s2;
        }
        else for (u2 = 0; u2 < n3; ++u2) v[i3 + u2] = e4[u2];
        return null !== r3 && r3.push(ft, o4), o4;
      },
      argPackAdvance: mr,
      readValueFromPointer: Q,
      destructorFunction(r3) {
        ft(r3);
      }
    });
  }, le = "undefined" != typeof TextDecoder ? new TextDecoder("utf-16le") : void 0, ce = (r2, e3) => {
    for (var t2 = r2, n3 = t2 >> 1, a3 = n3 + e3 / 2; !(n3 >= a3) && y[n3]; ) ++n3;
    if ((t2 = n3 << 1) - r2 > 32 && le) return le.decode(v.subarray(r2, t2));
    for (var o4 = "", i3 = 0; !(i3 >= e3 / 2); ++i3) {
      var u2 = p[r2 + 2 * i3 >> 1];
      if (0 == u2) break;
      o4 += String.fromCharCode(u2);
    }
    return o4;
  }, fe = (r2, e3, t2) => {
    if (t2 ??= 2147483647, t2 < 2) return 0;
    for (var n3 = e3, a3 = (t2 -= 2) < 2 * r2.length ? t2 / 2 : r2.length, o4 = 0; o4 < a3; ++o4) {
      var i3 = r2.charCodeAt(o4);
      p[e3 >> 1] = i3, e3 += 2;
    }
    return p[e3 >> 1] = 0, e3 - n3;
  }, de = (r2) => 2 * r2.length, he = (r2, e3) => {
    for (var t2 = 0, n3 = ""; !(t2 >= e3 / 4); ) {
      var a3 = g[r2 + 4 * t2 >> 2];
      if (0 == a3) break;
      if (++t2, a3 >= 65536) {
        var o4 = a3 - 65536;
        n3 += String.fromCharCode(55296 | o4 >> 10, 56320 | 1023 & o4);
      } else n3 += String.fromCharCode(a3);
    }
    return n3;
  }, me = (r2, e3, t2) => {
    if (t2 ??= 2147483647, t2 < 4) return 0;
    for (var n3 = e3, a3 = n3 + t2 - 4, o4 = 0; o4 < r2.length; ++o4) {
      var i3 = r2.charCodeAt(o4);
      if (i3 >= 55296 && i3 <= 57343 && (i3 = 65536 + ((1023 & i3) << 10) | 1023 & r2.charCodeAt(++o4)), g[e3 >> 2] = i3, (e3 += 4) + 4 > a3) break;
    }
    return g[e3 >> 2] = 0, e3 - n3;
  }, ve = (r2) => {
    for (var e3 = 0, t2 = 0; t2 < r2.length; ++t2) {
      var n3 = r2.charCodeAt(t2);
      n3 >= 55296 && n3 <= 57343 && ++t2, e3 += 4;
    }
    return e3;
  }, pe = (r2, e3, t2) => {
    var n3, a3, o4, i3;
    t2 = cr(t2), 2 === e3 ? (n3 = ce, a3 = fe, i3 = de, o4 = (r3) => y[r3 >> 1]) : 4 === e3 && (n3 = he, a3 = me, i3 = ve, o4 = (r3) => w[r3 >> 2]), hr(r2, {
      name: t2,
      fromWireType: (r3) => {
        for (var t3, a4 = w[r3 >> 2], i4 = r3 + 4, u2 = 0; u2 <= a4; ++u2) {
          var s2 = r3 + 4 + u2 * e3;
          if (u2 == a4 || 0 == o4(s2)) {
            var l2 = n3(i4, s2 - i4);
            void 0 === t3 ? t3 = l2 : (t3 += String.fromCharCode(0), t3 += l2), i4 = s2 + e3;
          }
        }
        return ft(r3), t3;
      },
      toWireType: (r3, n4) => {
        "string" != typeof n4 && fr(`Cannot pass non-string to C++ string type ${t2}`);
        var o5 = i3(n4), u2 = ct(4 + o5 + e3);
        return w[u2 >> 2] = o5 / e3, a3(n4, u2 + 4, o5 + e3), null !== r3 && r3.push(ft, u2), u2;
      },
      argPackAdvance: mr,
      readValueFromPointer: Q,
      destructorFunction(r3) {
        ft(r3);
      }
    });
  }, ye = (r2, e3, t2, n3, a3, o4) => {
    X[r2] = {
      name: cr(e3),
      rawConstructor: Gr(t2, n3),
      rawDestructor: Gr(a3, o4),
      fields: []
    };
  }, ge = (r2, e3, t2, n3, a3, o4, i3, u2, s2, l2) => {
    X[r2].fields.push({
      fieldName: cr(e3),
      getterReturnType: t2,
      getter: Gr(n3, a3),
      getterContext: o4,
      setterArgumentType: i3,
      setter: Gr(u2, s2),
      setterContext: l2
    });
  }, we = (r2, e3) => {
    hr(r2, {
      isVoid: true,
      name: e3 = cr(e3),
      argPackAdvance: 0,
      fromWireType: () => {
      },
      toWireType: (r3, e4) => {
      }
    });
  }, _e = 1, be = () => _e, Ae = (r2, e3, t2) => v.copyWithin(r2, e3, e3 + t2), Te = (r2, e3, t2) => {
    var n3 = [], a3 = r2.toWireType(n3, t2);
    return n3.length && (w[e3 >> 2] = Ar.toHandle(n3)), a3;
  }, Ce = (r2, e3, t2) => (r2 = Ar.toValue(r2), e3 = $r(e3, "emval::as"), Te(e3, t2, r2)), Fe = {}, Pe = (r2) => {
    var e3 = Fe[r2];
    return void 0 === e3 ? cr(r2) : e3;
  }, We = [], Ee = (r2, e3, t2, n3, a3) => (r2 = We[r2])(e3 = Ar.toValue(e3), e3[t2 = Pe(t2)], n3, a3), Se = (r2) => {
    var e3 = We.length;
    return We.push(r2), e3;
  }, Oe = (r2, e3) => {
    for (var t2 = new Array(r2), n3 = 0; n3 < r2; ++n3) t2[n3] = $r(w[e3 + 4 * n3 >> 2], "parameter " + n3);
    return t2;
  }, $e = Reflect.construct, je = (r2, e3, t2) => {
    var n3 = Oe(r2, e3), a3 = n3.shift();
    r2--;
    var o4 = new Array(r2), i3 = (e4, i4, u3, s2) => {
      for (var l2 = 0, c2 = 0; c2 < r2; ++c2) o4[c2] = n3[c2].readValueFromPointer(s2 + l2), l2 += n3[c2].argPackAdvance;
      var f2 = 1 === t2 ? $e(i4, o4) : i4.apply(e4, o4);
      return Te(a3, u3, f2);
    }, u2 = `methodCaller<(${n3.map((r3) => r3.name).join(", ")}) => ${a3.name}>`;
    return Se(Sr(u2, i3));
  }, Me = (r2, e3) => (r2 = Ar.toValue(r2), e3 = Ar.toValue(e3), Ar.toHandle(r2[e3])), De = () => Ar.toHandle([]), Re = (r2) => {
    r2 = Ar.toValue(r2);
    for (var e3 = new Array(r2.length), t2 = 0; t2 < r2.length; t2++) e3[t2] = r2[t2];
    return Ar.toHandle(e3);
  }, xe = (r2) => Ar.toHandle(Pe(r2)), ke = (r2) => {
    var e3 = Ar.toValue(r2);
    K(e3), wr(r2);
  }, He = (r2, e3) => {
    var t2 = (r2 = $r(r2, "_emval_take_value")).readValueFromPointer(e3);
    return Ar.toHandle(t2);
  }, Ie = () => {
    k("");
  }, Ve = () => Date.now(), Ue = () => 2147483648, Ye = () => Ue();
  Ir = () => performance.now();
  var Be = (r2) => {
    var e3 = (r2 - d.buffer.byteLength + 65535) / 65536;
    try {
      return d.grow(e3), T(), 1;
    } catch (t2) {
    }
  }, ze = (r2) => {
    var e3 = v.length;
    r2 >>>= 0;
    var t2 = Ue();
    if (r2 > t2) return false;
    for (var n3 = (r3, e4) => r3 + (e4 - r3 % e4) % e4, a3 = 1; a3 <= 4; a3 *= 2) {
      var o4 = e3 * (1 + 0.2 / a3);
      o4 = Math.min(o4, r2 + 100663296);
      var i3 = Math.min(t2, n3(Math.max(r2, o4), 65536));
      if (Be(i3)) return true;
    }
    return false;
  }, Ne = {}, qe = () => s || "./this.program", Ge = () => {
    if (!Ge.strings) {
      var r2 = {
        USER: "web_user",
        LOGNAME: "web_user",
        PATH: "/",
        PWD: "/",
        HOME: "/home/web_user",
        LANG: ("object" == typeof navigator && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8",
        _: qe()
      };
      for (var e3 in Ne) void 0 === Ne[e3] ? delete r2[e3] : r2[e3] = Ne[e3];
      var t2 = [];
      for (var e3 in r2) t2.push(`${e3}=${r2[e3]}`);
      Ge.strings = t2;
    }
    return Ge.strings;
  }, Je = (r2, e3) => {
    for (var t2 = 0; t2 < r2.length; ++t2) m[e3++] = r2.charCodeAt(t2);
    m[e3] = 0;
  }, Le = (r2, e3) => {
    var t2 = 0;
    return Ge().forEach((n3, a3) => {
      var o4 = e3 + t2;
      w[r2 + 4 * a3 >> 2] = o4, Je(n3, o4), t2 += n3.length + 1;
    }), 0;
  }, Xe = (r2, e3) => {
    var t2 = Ge();
    w[r2 >> 2] = t2.length;
    var n3 = 0;
    return t2.forEach((r3) => n3 += r3.length + 1), w[e3 >> 2] = n3, 0;
  }, Ke = (r2) => r2 % 4 == 0 && (r2 % 100 != 0 || r2 % 400 == 0), Qe = (r2, e3) => {
    for (var t2 = 0, n3 = 0; n3 <= e3; t2 += r2[n3++]) ;
    return t2;
  }, Ze = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], rt = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], et = (r2, e3) => {
    for (var t2 = new Date(r2.getTime()); e3 > 0; ) {
      var n3 = Ke(t2.getFullYear()), a3 = t2.getMonth(), o4 = (n3 ? Ze : rt)[a3];
      if (!(e3 > o4 - t2.getDate())) return t2.setDate(t2.getDate() + e3), t2;
      e3 -= o4 - t2.getDate() + 1, t2.setDate(1), a3 < 11 ? t2.setMonth(a3 + 1) : (t2.setMonth(0), t2.setFullYear(t2.getFullYear() + 1));
    }
    return t2;
  };
  function tt(r2, e3, t2) {
    var n3 = ae(r2) + 1, a3 = new Array(n3);
    return te(r2, a3, 0, a3.length), a3;
  }
  var nt = (r2, e3) => {
    m.set(r2, e3);
  }, at = (r2, e3, t2, n3) => {
    var a3 = w[n3 + 40 >> 2], o4 = {
      tm_sec: g[n3 >> 2],
      tm_min: g[n3 + 4 >> 2],
      tm_hour: g[n3 + 8 >> 2],
      tm_mday: g[n3 + 12 >> 2],
      tm_mon: g[n3 + 16 >> 2],
      tm_year: g[n3 + 20 >> 2],
      tm_wday: g[n3 + 24 >> 2],
      tm_yday: g[n3 + 28 >> 2],
      tm_isdst: g[n3 + 32 >> 2],
      tm_gmtoff: g[n3 + 36 >> 2],
      tm_zone: a3 ? ue(a3) : ""
    }, i3 = ue(t2), u2 = {
      "%c": "%a %b %d %H:%M:%S %Y",
      "%D": "%m/%d/%y",
      "%F": "%Y-%m-%d",
      "%h": "%b",
      "%r": "%I:%M:%S %p",
      "%R": "%H:%M",
      "%T": "%H:%M:%S",
      "%x": "%m/%d/%y",
      "%X": "%H:%M:%S",
      "%Ec": "%c",
      "%EC": "%C",
      "%Ex": "%m/%d/%y",
      "%EX": "%H:%M:%S",
      "%Ey": "%y",
      "%EY": "%Y",
      "%Od": "%d",
      "%Oe": "%e",
      "%OH": "%H",
      "%OI": "%I",
      "%Om": "%m",
      "%OM": "%M",
      "%OS": "%S",
      "%Ou": "%u",
      "%OU": "%U",
      "%OV": "%V",
      "%Ow": "%w",
      "%OW": "%W",
      "%Oy": "%y"
    };
    for (var s2 in u2) i3 = i3.replace(new RegExp(s2, "g"), u2[s2]);
    var l2 = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], c2 = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    function f2(r3, e4, t3) {
      for (var n4 = "number" == typeof r3 ? r3.toString() : r3 || ""; n4.length < e4; ) n4 = t3[0] + n4;
      return n4;
    }
    function d2(r3, e4) {
      return f2(r3, e4, "0");
    }
    function h2(r3, e4) {
      function t3(r4) {
        return r4 < 0 ? -1 : r4 > 0 ? 1 : 0;
      }
      var n4;
      return 0 === (n4 = t3(r3.getFullYear() - e4.getFullYear())) && 0 === (n4 = t3(r3.getMonth() - e4.getMonth())) && (n4 = t3(r3.getDate() - e4.getDate())), n4;
    }
    function m2(r3) {
      switch (r3.getDay()) {
        case 0:
          return new Date(r3.getFullYear() - 1, 11, 29);
        case 1:
          return r3;
        case 2:
          return new Date(r3.getFullYear(), 0, 3);
        case 3:
          return new Date(r3.getFullYear(), 0, 2);
        case 4:
          return new Date(r3.getFullYear(), 0, 1);
        case 5:
          return new Date(r3.getFullYear() - 1, 11, 31);
        case 6:
          return new Date(r3.getFullYear() - 1, 11, 30);
      }
    }
    function v2(r3) {
      var e4 = et(new Date(r3.tm_year + 1900, 0, 1), r3.tm_yday), t3 = new Date(e4.getFullYear(), 0, 4), n4 = new Date(e4.getFullYear() + 1, 0, 4), a4 = m2(t3), o5 = m2(n4);
      return h2(a4, e4) <= 0 ? h2(o5, e4) <= 0 ? e4.getFullYear() + 1 : e4.getFullYear() : e4.getFullYear() - 1;
    }
    var p2 = {
      "%a": (r3) => l2[r3.tm_wday].substring(0, 3),
      "%A": (r3) => l2[r3.tm_wday],
      "%b": (r3) => c2[r3.tm_mon].substring(0, 3),
      "%B": (r3) => c2[r3.tm_mon],
      "%C": (r3) => d2((r3.tm_year + 1900) / 100 | 0, 2),
      "%d": (r3) => d2(r3.tm_mday, 2),
      "%e": (r3) => f2(r3.tm_mday, 2, " "),
      "%g": (r3) => v2(r3).toString().substring(2),
      "%G": v2,
      "%H": (r3) => d2(r3.tm_hour, 2),
      "%I": (r3) => {
        var e4 = r3.tm_hour;
        return 0 == e4 ? e4 = 12 : e4 > 12 && (e4 -= 12), d2(e4, 2);
      },
      "%j": (r3) => d2(r3.tm_mday + Qe(Ke(r3.tm_year + 1900) ? Ze : rt, r3.tm_mon - 1), 3),
      "%m": (r3) => d2(r3.tm_mon + 1, 2),
      "%M": (r3) => d2(r3.tm_min, 2),
      "%n": () => "\n",
      "%p": (r3) => r3.tm_hour >= 0 && r3.tm_hour < 12 ? "AM" : "PM",
      "%S": (r3) => d2(r3.tm_sec, 2),
      "%t": () => "	",
      "%u": (r3) => r3.tm_wday || 7,
      "%U": (r3) => {
        var e4 = r3.tm_yday + 7 - r3.tm_wday;
        return d2(Math.floor(e4 / 7), 2);
      },
      "%V": (r3) => {
        var e4 = Math.floor((r3.tm_yday + 7 - (r3.tm_wday + 6) % 7) / 7);
        if ((r3.tm_wday + 371 - r3.tm_yday - 2) % 7 <= 2 && e4++, e4) {
          if (53 == e4) {
            var t3 = (r3.tm_wday + 371 - r3.tm_yday) % 7;
            4 == t3 || 3 == t3 && Ke(r3.tm_year) || (e4 = 1);
          }
        } else {
          e4 = 52;
          var n4 = (r3.tm_wday + 7 - r3.tm_yday - 1) % 7;
          (4 == n4 || 5 == n4 && Ke(r3.tm_year % 400 - 1)) && e4++;
        }
        return d2(e4, 2);
      },
      "%w": (r3) => r3.tm_wday,
      "%W": (r3) => {
        var e4 = r3.tm_yday + 7 - (r3.tm_wday + 6) % 7;
        return d2(Math.floor(e4 / 7), 2);
      },
      "%y": (r3) => (r3.tm_year + 1900).toString().substring(2),
      "%Y": (r3) => r3.tm_year + 1900,
      "%z": (r3) => {
        var e4 = r3.tm_gmtoff, t3 = e4 >= 0;
        return e4 = (e4 = Math.abs(e4) / 60) / 60 * 100 + e4 % 60, (t3 ? "+" : "-") + String("0000" + e4).slice(-4);
      },
      "%Z": (r3) => r3.tm_zone,
      "%%": () => "%"
    };
    for (var s2 in i3 = i3.replace(/%%/g, "\0\0"), p2) i3.includes(s2) && (i3 = i3.replace(new RegExp(s2, "g"), p2[s2](o4)));
    var y2 = tt(i3 = i3.replace(/\0\0/g, "%"));
    return y2.length > e3 ? 0 : (nt(y2, r2), y2.length - 1);
  }, ot = (r2, e3, t2, n3, a3) => at(r2, e3, t2, n3);
  Z = a2.InternalError = class extends Error {
    constructor(r2) {
      super(r2), this.name = "InternalError";
    }
  }, lr(), er = a2.BindingError = class extends Error {
    constructor(r2) {
      super(r2), this.name = "BindingError";
    }
  }, br(), Hr = a2.UnboundTypeError = Jr(Error, "UnboundTypeError");
  var it, ut = {
    a: L,
    k: ur,
    w: sr,
    E: vr,
    u: pr,
    v: Cr,
    K: Er,
    q: jr,
    t: Dr,
    d: Kr,
    j: Zr,
    f: re,
    L: ee,
    s: se,
    r: pe,
    l: ye,
    e: ge,
    J: we,
    C: be,
    H: Ae,
    g: Ce,
    n: Ee,
    b: wr,
    o: je,
    h: Me,
    p: De,
    I: Re,
    m: xe,
    c: ke,
    i: He,
    B: Ie,
    D: Ve,
    x: Ye,
    G: Ir,
    F: ze,
    z: Le,
    A: Xe,
    y: ot
  }, st = q(), lt = (r2) => (lt = st.O)(r2), ct = a2._malloc = (r2) => (ct = a2._malloc = st.Q)(r2), ft = a2._free = (r2) => (ft = a2._free = st.R)(r2), dt = (r2) => (dt = st.S)(r2);
  function ht() {
    function r2() {
      it || (it = true, a2.calledRun = true, A || (E(), e2(a2), a2.onRuntimeInitialized && a2.onRuntimeInitialized(), S()));
    }
    M > 0 || (W(), M > 0 || (a2.setStatus ? (a2.setStatus("Running..."), setTimeout(function() {
      setTimeout(function() {
        a2.setStatus("");
      }, 1), r2();
    }, 1)) : r2()));
  }
  if (a2.dynCall_viijii = (r2, e3, t2, n3, o4, i3, u2) => (a2.dynCall_viijii = st.T)(r2, e3, t2, n3, o4, i3, u2), a2.dynCall_iiiiij = (r2, e3, t2, n3, o4, i3, u2) => (a2.dynCall_iiiiij = st.U)(r2, e3, t2, n3, o4, i3, u2), a2.dynCall_iiiiijj = (r2, e3, t2, n3, o4, i3, u2, s2, l2) => (a2.dynCall_iiiiijj = st.V)(r2, e3, t2, n3, o4, i3, u2, s2, l2), a2.dynCall_iiiiiijj = (r2, e3, t2, n3, o4, i3, u2, s2, l2, c2) => (a2.dynCall_iiiiiijj = st.W)(r2, e3, t2, n3, o4, i3, u2, s2, l2, c2), D = function r2() {
    it || ht(), it || (D = r2);
  }, a2.preInit) for ("function" == typeof a2.preInit && (a2.preInit = [a2.preInit]); a2.preInit.length > 0; ) a2.preInit.pop()();
  return ht(), o3;
}, e.exports = n;
var o2 = o(a.exports);
var i = Object.freeze(Object.defineProperty({
  __proto__: null,
  default: o2
}, Symbol.toStringTag, {
  value: "Module"
}));
export {
  i as l
};
//# sourceMappingURL=lclayout-AZV43NRJ.js.map
