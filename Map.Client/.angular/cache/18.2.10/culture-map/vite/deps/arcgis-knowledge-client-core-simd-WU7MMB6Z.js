import {
  e,
  o
} from "./chunk-7RMVJCDW.js";
import "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/chunks/arcgis-knowledge-client-core-simd.js
var e2;
var r;
var a;
var i = {
  exports: {}
};
e2 = i, r = "undefined" != typeof document && document.currentScript ? document.currentScript.src : void 0, a = function(n) {
  var e3, a2, i2;
  n = n || {}, e3 || (e3 = void 0 !== n ? n : {}), e3.ready = new Promise(function(n2, t) {
    a2 = n2, i2 = t;
  });
  var o3 = Object.assign({}, e3), u2 = "./this.program", c = "";
  "undefined" != typeof document && document.currentScript && (c = document.currentScript.src), r && (c = r), c = 0 !== c.indexOf("blob:") ? c.substr(0, c.replace(/[?#].*/, "").lastIndexOf("/") + 1) : "";
  var f, s = e3.print || console.log.bind(console), l = e3.printErr || console.warn.bind(console);
  Object.assign(e3, o3), o3 = null, e3.thisProgram && (u2 = e3.thisProgram), e3.wasmBinary && (f = e3.wasmBinary), e3.noExitRuntime, "object" != typeof WebAssembly && R("no native wasm support detected");
  var h, p, v, d, g, m, y, b, w, A, T, _, C = false, P = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0;
  function $(n2, t, e4) {
    var r2 = t + e4;
    for (e4 = t; n2[e4] && !(e4 >= r2); ) ++e4;
    if (16 < e4 - t && n2.buffer && P) return P.decode(n2.subarray(t, e4));
    for (r2 = ""; t < e4; ) {
      var a3 = n2[t++];
      if (128 & a3) {
        var i3 = 63 & n2[t++];
        if (192 == (224 & a3)) r2 += String.fromCharCode((31 & a3) << 6 | i3);
        else {
          var o4 = 63 & n2[t++];
          65536 > (a3 = 224 == (240 & a3) ? (15 & a3) << 12 | i3 << 6 | o4 : (7 & a3) << 18 | i3 << 12 | o4 << 6 | 63 & n2[t++]) ? r2 += String.fromCharCode(a3) : (a3 -= 65536, r2 += String.fromCharCode(55296 | a3 >> 10, 56320 | 1023 & a3));
        }
      } else r2 += String.fromCharCode(a3);
    }
    return r2;
  }
  function k(n2, t, e4, r2) {
    if (0 < r2) {
      r2 = e4 + r2 - 1;
      for (var a3 = 0; a3 < n2.length; ++a3) {
        var i3 = n2.charCodeAt(a3);
        if (55296 <= i3 && 57343 >= i3 && (i3 = 65536 + ((1023 & i3) << 10) | 1023 & n2.charCodeAt(++a3)), 127 >= i3) {
          if (e4 >= r2) break;
          t[e4++] = i3;
        } else {
          if (2047 >= i3) {
            if (e4 + 1 >= r2) break;
            t[e4++] = 192 | i3 >> 6;
          } else {
            if (65535 >= i3) {
              if (e4 + 2 >= r2) break;
              t[e4++] = 224 | i3 >> 12;
            } else {
              if (e4 + 3 >= r2) break;
              t[e4++] = 240 | i3 >> 18, t[e4++] = 128 | i3 >> 12 & 63;
            }
            t[e4++] = 128 | i3 >> 6 & 63;
          }
          t[e4++] = 128 | 63 & i3;
        }
      }
      t[e4] = 0;
    }
  }
  function W(n2) {
    for (var t = 0, e4 = 0; e4 < n2.length; ++e4) {
      var r2 = n2.charCodeAt(e4);
      127 >= r2 ? t++ : 2047 >= r2 ? t += 2 : 55296 <= r2 && 57343 >= r2 ? (t += 4, ++e4) : t += 3;
    }
    return t;
  }
  function E() {
    var n2 = h.buffer;
    p = n2, e3.HEAP8 = v = new Int8Array(n2), e3.HEAP16 = g = new Int16Array(n2), e3.HEAP32 = y = new Int32Array(n2), e3.HEAPU8 = d = new Uint8Array(n2), e3.HEAPU16 = m = new Uint16Array(n2), e3.HEAPU32 = b = new Uint32Array(n2), e3.HEAPF32 = w = new Float32Array(n2), e3.HEAPF64 = _ = new Float64Array(n2), e3.HEAP64 = A = new BigInt64Array(n2), e3.HEAPU64 = T = new BigUint64Array(n2);
  }
  var j, O = [], S = [], F = [];
  function D() {
    var n2 = e3.preRun.shift();
    O.unshift(n2);
  }
  var M, U = 0, I = null;
  function R(n2) {
    throw e3.onAbort && e3.onAbort(n2), l(n2 = "Aborted(" + n2 + ")"), C = true, n2 = new WebAssembly.RuntimeError(n2 + ". Build with -sASSERTIONS for more info."), i2(n2), n2;
  }
  function x() {
    return M.startsWith("data:application/octet-stream;base64,");
  }
  if (M = "arcgis-knowledge-client-core-simd.wasm", !x()) {
    var H = M;
    M = e3.locateFile ? e3.locateFile(H, c) : c + H;
  }
  function Y() {
    var n2 = M;
    try {
      if (n2 == M && f) return new Uint8Array(f);
      throw "both async and sync fetching of the wasm failed";
    } catch (t) {
      R(t);
    }
  }
  function V() {
    return f || "function" != typeof fetch ? Promise.resolve().then(function() {
      return Y();
    }) : fetch(M, {
      credentials: "same-origin"
    }).then(function(n2) {
      if (!n2.ok) throw "failed to load wasm binary file at '" + M + "'";
      return n2.arrayBuffer();
    }).catch(function() {
      return Y();
    });
  }
  function B(n2) {
    for (; 0 < n2.length; ) n2.shift()(e3);
  }
  function z(n2) {
    this.ga = n2 - 24, this.Za = function(n3) {
      b[this.ga + 4 >> 2] = n3;
    }, this.Ua = function(n3) {
      b[this.ga + 8 >> 2] = n3;
    }, this.Va = function() {
      y[this.ga >> 2] = 0;
    }, this.Oa = function() {
      v[this.ga + 12 | 0] = 0;
    }, this.Ya = function() {
      v[this.ga + 13 | 0] = 0;
    }, this.La = function(n3, t) {
      this.Ma(), this.Za(n3), this.Ua(t), this.Va(), this.Oa(), this.Ya();
    }, this.Ma = function() {
      b[this.ga + 16 >> 2] = 0;
    };
  }
  var q = {};
  function N(n2) {
    for (; n2.length; ) {
      var t = n2.pop();
      n2.pop()(t);
    }
  }
  function L(n2) {
    return this.fromWireType(y[n2 >> 2]);
  }
  var G = {}, J = {}, Z = {};
  function X(n2) {
    if (void 0 === n2) return "_unknown";
    var t = (n2 = n2.replace(/[^a-zA-Z0-9_]/g, "$")).charCodeAt(0);
    return 48 <= t && 57 >= t ? "_" + n2 : n2;
  }
  function K(n2, t) {
    return n2 = X(n2), function() {
      return t.apply(this, arguments);
    };
  }
  function Q(n2) {
    var t = Error, e4 = K(n2, function(t2) {
      this.name = n2, this.message = t2, void 0 !== (t2 = Error(t2).stack) && (this.stack = this.toString() + "\n" + t2.replace(/^Error(:[^\n]*)?\n/, ""));
    });
    return e4.prototype = Object.create(t.prototype), e4.prototype.constructor = e4, e4.prototype.toString = function() {
      return void 0 === this.message ? this.name : this.name + ": " + this.message;
    }, e4;
  }
  var nn = void 0;
  function tn(n2) {
    throw new nn(n2);
  }
  function en(n2, t, e4) {
    function r2(t2) {
      (t2 = e4(t2)).length !== n2.length && tn("Mismatched type converter count");
      for (var r3 = 0; r3 < n2.length; ++r3) fn(n2[r3], t2[r3]);
    }
    n2.forEach(function(n3) {
      Z[n3] = t;
    });
    var a3 = Array(t.length), i3 = [], o4 = 0;
    t.forEach((n3, t2) => {
      J.hasOwnProperty(n3) ? a3[t2] = J[n3] : (i3.push(n3), G.hasOwnProperty(n3) || (G[n3] = []), G[n3].push(() => {
        a3[t2] = J[n3], ++o4 === i3.length && r2(a3);
      }));
    }), 0 === i3.length && r2(a3);
  }
  function rn(n2) {
    if (null === n2) return "null";
    var t = typeof n2;
    return "object" === t || "array" === t || "function" === t ? n2.toString() : "" + n2;
  }
  var an = void 0;
  function on(n2) {
    for (var t = ""; d[n2]; ) t += an[d[n2++]];
    return t;
  }
  var un = void 0;
  function cn(n2) {
    throw new un(n2);
  }
  function fn(n2, t, e4 = {}) {
    if (!("argPackAdvance" in t)) throw new TypeError("registerType registeredInstance requires argPackAdvance");
    var r2 = t.name;
    if (n2 || cn('type "' + r2 + '" must have a positive integer typeid pointer'), J.hasOwnProperty(n2)) {
      if (e4.Wa) return;
      cn("Cannot register type '" + r2 + "' twice");
    }
    J[n2] = t, delete Z[n2], G.hasOwnProperty(n2) && (t = G[n2], delete G[n2], t.forEach((n3) => n3()));
  }
  function sn(n2, t, e4) {
    switch (t) {
      case 0:
        return e4 ? function(n3) {
          return v[n3];
        } : function(n3) {
          return d[n3];
        };
      case 1:
        return e4 ? function(n3) {
          return g[n3 >> 1];
        } : function(n3) {
          return m[n3 >> 1];
        };
      case 2:
        return e4 ? function(n3) {
          return y[n3 >> 2];
        } : function(n3) {
          return b[n3 >> 2];
        };
      case 3:
        return e4 ? function(n3) {
          return A[n3 >> 3];
        } : function(n3) {
          return T[n3 >> 3];
        };
      default:
        throw new TypeError("Unknown integer type: " + n2);
    }
  }
  function ln(n2) {
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
  function hn(n2) {
    cn(n2.ea.ha.fa.name + " instance already deleted");
  }
  var pn = false;
  function vn() {
  }
  function dn(n2) {
    --n2.count.value, 0 === n2.count.value && (n2.ja ? n2.la.oa(n2.ja) : n2.ha.fa.oa(n2.ga));
  }
  function gn(n2, t, e4) {
    return t === e4 ? n2 : void 0 === e4.ma || null === (n2 = gn(n2, t, e4.ma)) ? null : e4.Ka(n2);
  }
  var mn = {}, yn = [];
  function bn() {
    for (; yn.length; ) {
      var n2 = yn.pop();
      n2.ea.ua = false, n2.delete();
    }
  }
  var wn = void 0, An = {};
  function Tn(n2, t) {
    for (void 0 === t && cn("ptr should not be undefined"); n2.ma; ) t = n2.wa(t), n2 = n2.ma;
    return An[t];
  }
  function _n(n2, t) {
    return t.ha && t.ga || tn("makeClassHandle requires ptr and ptrType"), !!t.la != !!t.ja && tn("Both smartPtrType and smartPtr must be specified"), t.count = {
      value: 1
    }, Cn(Object.create(n2, {
      ea: {
        value: t
      }
    }));
  }
  function Cn(n2) {
    return "undefined" == typeof FinalizationRegistry ? (Cn = (n3) => n3, n2) : (pn = new FinalizationRegistry((n3) => {
      dn(n3.ea);
    }), vn = (n3) => {
      pn.unregister(n3);
    }, (Cn = (n3) => {
      var t = n3.ea;
      return t.ja && pn.register(n3, {
        ea: t
      }, n3), n3;
    })(n2));
  }
  function Pn() {
  }
  function $n(n2, t, e4) {
    if (void 0 === n2[t].ia) {
      var r2 = n2[t];
      n2[t] = function() {
        return n2[t].ia.hasOwnProperty(arguments.length) || cn("Function '" + e4 + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + n2[t].ia + ")!"), n2[t].ia[arguments.length].apply(this, arguments);
      }, n2[t].ia = [], n2[t].ia[r2.ta] = r2;
    }
  }
  function kn(n2, t, r2) {
    e3.hasOwnProperty(n2) ? ((void 0 === r2 || void 0 !== e3[n2].ia && void 0 !== e3[n2].ia[r2]) && cn("Cannot register public name '" + n2 + "' twice"), $n(e3, n2, n2), e3.hasOwnProperty(r2) && cn("Cannot register multiple overloads of a function with the same number of arguments (" + r2 + ")!"), e3[n2].ia[r2] = t) : (e3[n2] = t, void 0 !== r2 && (e3[n2].lb = r2));
  }
  function Wn(n2, t, e4, r2, a3, i3, o4, u3) {
    this.name = n2, this.constructor = t, this.pa = e4, this.oa = r2, this.ma = a3, this.Pa = i3, this.wa = o4, this.Ka = u3, this.ab = [];
  }
  function En(n2, t, e4) {
    for (; t !== e4; ) t.wa || cn("Expected null or instance of " + e4.name + ", got an instance of " + t.name), n2 = t.wa(n2), t = t.ma;
    return n2;
  }
  function jn(n2, t) {
    return null === t ? (this.Ba && cn("null is not a valid " + this.name), 0) : (t.ea || cn('Cannot pass "' + rn(t) + '" as a ' + this.name), t.ea.ga || cn("Cannot pass deleted object as a pointer of type " + this.name), En(t.ea.ga, t.ea.ha.fa, this.fa));
  }
  function On(n2, t) {
    if (null === t) {
      if (this.Ba && cn("null is not a valid " + this.name), this.ya) {
        var e4 = this.Ca();
        return null !== n2 && n2.push(this.oa, e4), e4;
      }
      return 0;
    }
    if (t.ea || cn('Cannot pass "' + rn(t) + '" as a ' + this.name), t.ea.ga || cn("Cannot pass deleted object as a pointer of type " + this.name), !this.xa && t.ea.ha.xa && cn("Cannot convert argument of type " + (t.ea.la ? t.ea.la.name : t.ea.ha.name) + " to parameter type " + this.name), e4 = En(t.ea.ga, t.ea.ha.fa, this.fa), this.ya) switch (void 0 === t.ea.ja && cn("Passing raw pointer to smart pointer is illegal"), this.gb) {
      case 0:
        t.ea.la === this ? e4 = t.ea.ja : cn("Cannot convert argument of type " + (t.ea.la ? t.ea.la.name : t.ea.ha.name) + " to parameter type " + this.name);
        break;
      case 1:
        e4 = t.ea.ja;
        break;
      case 2:
        if (t.ea.la === this) e4 = t.ea.ja;
        else {
          var r2 = t.clone();
          e4 = this.bb(e4, Ln(function() {
            r2.delete();
          })), null !== n2 && n2.push(this.oa, e4);
        }
        break;
      default:
        cn("Unsupporting sharing policy");
    }
    return e4;
  }
  function Sn(n2, t) {
    return null === t ? (this.Ba && cn("null is not a valid " + this.name), 0) : (t.ea || cn('Cannot pass "' + rn(t) + '" as a ' + this.name), t.ea.ga || cn("Cannot pass deleted object as a pointer of type " + this.name), t.ea.ha.xa && cn("Cannot convert argument of type " + t.ea.ha.name + " to parameter type " + this.name), En(t.ea.ga, t.ea.ha.fa, this.fa));
  }
  function Fn(n2, t, e4, r2, a3, i3, o4, u3, c2, f2, s2) {
    this.name = n2, this.fa = t, this.Ba = e4, this.xa = r2, this.ya = a3, this.$a = i3, this.gb = o4, this.Ha = u3, this.Ca = c2, this.bb = f2, this.oa = s2, a3 || void 0 !== t.ma ? this.toWireType = On : (this.toWireType = r2 ? jn : Sn, this.ka = null);
  }
  function Dn(n2, t, r2) {
    e3.hasOwnProperty(n2) || tn("Replacing nonexistant public symbol"), void 0 !== e3[n2].ia && void 0 !== r2 ? e3[n2].ia[r2] = t : (e3[n2] = t, e3[n2].ta = r2);
  }
  var Mn = [];
  function Un(n2, t) {
    n2 = on(n2);
    var e4 = Mn[t];
    return e4 || (t >= Mn.length && (Mn.length = t + 1), Mn[t] = e4 = j.get(t)), "function" != typeof e4 && cn("unknown function pointer with signature " + n2 + ": " + t), e4;
  }
  var In = void 0;
  function Rn(n2) {
    var t = on(n2 = $t(n2));
    return Pt(n2), t;
  }
  function xn(n2, t) {
    function e4(n3) {
      a3[n3] || J[n3] || (Z[n3] ? Z[n3].forEach(e4) : (r2.push(n3), a3[n3] = true));
    }
    var r2 = [], a3 = {};
    throw t.forEach(e4), new In(n2 + ": " + r2.map(Rn).join([", "]));
  }
  function Hn(n2, t, e4, r2, a3) {
    var i3 = t.length;
    2 > i3 && cn("argTypes array size mismatch! Must at least get return value and 'this' types!");
    var o4 = null !== t[1] && null !== e4, u3 = false;
    for (e4 = 1; e4 < t.length; ++e4) if (null !== t[e4] && void 0 === t[e4].ka) {
      u3 = true;
      break;
    }
    var c2 = "void" !== t[0].name, f2 = i3 - 2, s2 = Array(f2), l2 = [], h2 = [];
    return function() {
      if (arguments.length !== f2 && cn("function " + n2 + " called with " + arguments.length + " arguments, expected " + f2 + " args!"), h2.length = 0, l2.length = o4 ? 2 : 1, l2[0] = a3, o4) {
        var e5 = t[1].toWireType(h2, this);
        l2[1] = e5;
      }
      for (var i4 = 0; i4 < f2; ++i4) s2[i4] = t[i4 + 2].toWireType(h2, arguments[i4]), l2.push(s2[i4]);
      if (i4 = r2.apply(null, l2), u3) N(h2);
      else for (var p2 = o4 ? 1 : 2; p2 < t.length; p2++) {
        var v2 = 1 === p2 ? e5 : s2[p2 - 2];
        null !== t[p2].ka && t[p2].ka(v2);
      }
      return e5 = c2 ? t[0].fromWireType(i4) : void 0;
    };
  }
  function Yn(n2, t) {
    for (var e4 = [], r2 = 0; r2 < n2; r2++) e4.push(b[t + 4 * r2 >> 2]);
    return e4;
  }
  function Vn(n2, t, e4) {
    return n2 instanceof Object || cn(e4 + ' with invalid "this": ' + n2), n2 instanceof t.fa.constructor || cn(e4 + ' incompatible with "this" of type ' + n2.constructor.name), n2.ea.ga || cn("cannot call emscripten binding method " + e4 + " on deleted object"), En(n2.ea.ga, n2.ea.ha.fa, t.fa);
  }
  var Bn = [], zn = [{}, {
    value: void 0
  }, {
    value: null
  }, {
    value: true
  }, {
    value: false
  }];
  function qn(n2) {
    4 < n2 && 0 == --zn[n2].Da && (zn[n2] = void 0, Bn.push(n2));
  }
  var Nn = (n2) => (n2 || cn("Cannot use deleted val. handle = " + n2), zn[n2].value), Ln = (n2) => {
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
        var t = Bn.length ? Bn.pop() : zn.length;
        return zn[t] = {
          Da: 1,
          value: n2
        }, t;
    }
  };
  function Gn(n2, t, e4) {
    switch (t) {
      case 0:
        return function(n3) {
          return this.fromWireType((e4 ? v : d)[n3]);
        };
      case 1:
        return function(n3) {
          return this.fromWireType((e4 ? g : m)[n3 >> 1]);
        };
      case 2:
        return function(n3) {
          return this.fromWireType((e4 ? y : b)[n3 >> 2]);
        };
      default:
        throw new TypeError("Unknown integer type: " + n2);
    }
  }
  function Jn(n2, t) {
    var e4 = J[n2];
    return void 0 === e4 && cn(t + " has unknown type " + Rn(n2)), e4;
  }
  function Zn(n2, t) {
    switch (t) {
      case 2:
        return function(n3) {
          return this.fromWireType(w[n3 >> 2]);
        };
      case 3:
        return function(n3) {
          return this.fromWireType(_[n3 >> 3]);
        };
      default:
        throw new TypeError("Unknown float type: " + n2);
    }
  }
  var Xn = "undefined" != typeof TextDecoder ? new TextDecoder("utf-16le") : void 0;
  function Kn(n2, t) {
    for (var e4 = n2 >> 1, r2 = e4 + t / 2; !(e4 >= r2) && m[e4]; ) ++e4;
    if (32 < (e4 <<= 1) - n2 && Xn) return Xn.decode(d.subarray(n2, e4));
    for (e4 = "", r2 = 0; !(r2 >= t / 2); ++r2) {
      var a3 = g[n2 + 2 * r2 >> 1];
      if (0 == a3) break;
      e4 += String.fromCharCode(a3);
    }
    return e4;
  }
  function Qn(n2, t, e4) {
    if (void 0 === e4 && (e4 = 2147483647), 2 > e4) return 0;
    var r2 = t;
    e4 = (e4 -= 2) < 2 * n2.length ? e4 / 2 : n2.length;
    for (var a3 = 0; a3 < e4; ++a3) g[t >> 1] = n2.charCodeAt(a3), t += 2;
    return g[t >> 1] = 0, t - r2;
  }
  function nt(n2) {
    return 2 * n2.length;
  }
  function tt(n2, t) {
    for (var e4 = 0, r2 = ""; !(e4 >= t / 4); ) {
      var a3 = y[n2 + 4 * e4 >> 2];
      if (0 == a3) break;
      ++e4, 65536 <= a3 ? (a3 -= 65536, r2 += String.fromCharCode(55296 | a3 >> 10, 56320 | 1023 & a3)) : r2 += String.fromCharCode(a3);
    }
    return r2;
  }
  function et(n2, t, e4) {
    if (void 0 === e4 && (e4 = 2147483647), 4 > e4) return 0;
    var r2 = t;
    e4 = r2 + e4 - 4;
    for (var a3 = 0; a3 < n2.length; ++a3) {
      var i3 = n2.charCodeAt(a3);
      if (55296 <= i3 && 57343 >= i3 && (i3 = 65536 + ((1023 & i3) << 10) | 1023 & n2.charCodeAt(++a3)), y[t >> 2] = i3, (t += 4) + 4 > e4) break;
    }
    return y[t >> 2] = 0, t - r2;
  }
  function rt(n2) {
    for (var t = 0, e4 = 0; e4 < n2.length; ++e4) {
      var r2 = n2.charCodeAt(e4);
      55296 <= r2 && 57343 >= r2 && ++e4, t += 4;
    }
    return t;
  }
  function at(n2, t) {
    for (var e4 = Array(n2), r2 = 0; r2 < n2; ++r2) e4[r2] = Jn(b[t + 4 * r2 >> 2], "parameter " + r2);
    return e4;
  }
  var it = {};
  function ot(n2) {
    var t = it[n2];
    return void 0 === t ? on(n2) : t;
  }
  var ut = [];
  function ct() {
    function n2(n3) {
      n3.$$$embind_global$$$ = n3;
      var t = "object" == typeof $$$embind_global$$$ && n3.$$$embind_global$$$ == n3;
      return t || delete n3.$$$embind_global$$$, t;
    }
    if ("object" == typeof globalThis) return globalThis;
    if ("object" == typeof $$$embind_global$$$) return $$$embind_global$$$;
    if ("object" == typeof e && n2(e) ? $$$embind_global$$$ = e : "object" == typeof self && n2(self) && ($$$embind_global$$$ = self), "object" == typeof $$$embind_global$$$) return $$$embind_global$$$;
    throw Error("unable to get global object.");
  }
  function ft(n2) {
    var t = ut.length;
    return ut.push(n2), t;
  }
  var st = [], lt = {};
  function ht() {
    if (!pt) {
      var n2, t = {
        USER: "web_user",
        LOGNAME: "web_user",
        PATH: "/",
        PWD: "/",
        HOME: "/home/web_user",
        LANG: ("object" == typeof navigator && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8",
        _: u2 || "./this.program"
      };
      for (n2 in lt) void 0 === lt[n2] ? delete t[n2] : t[n2] = lt[n2];
      var e4 = [];
      for (n2 in t) e4.push(n2 + "=" + t[n2]);
      pt = e4;
    }
    return pt;
  }
  var pt, vt = [null, [], []];
  function dt(n2) {
    return 0 == n2 % 4 && (0 != n2 % 100 || 0 == n2 % 400);
  }
  var gt = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], mt = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  function yt(n2) {
    var t = Array(W(n2) + 1);
    return k(n2, t, 0, t.length), t;
  }
  function bt(n2, t, e4, r2) {
    function a3(n3, t2, e5) {
      for (n3 = "number" == typeof n3 ? n3.toString() : n3 || ""; n3.length < t2; ) n3 = e5[0] + n3;
      return n3;
    }
    function i3(n3, t2) {
      return a3(n3, t2, "0");
    }
    function o4(n3, t2) {
      function e5(n4) {
        return 0 > n4 ? -1 : 0 < n4 ? 1 : 0;
      }
      var r3;
      return 0 === (r3 = e5(n3.getFullYear() - t2.getFullYear())) && 0 === (r3 = e5(n3.getMonth() - t2.getMonth())) && (r3 = e5(n3.getDate() - t2.getDate())), r3;
    }
    function u3(n3) {
      switch (n3.getDay()) {
        case 0:
          return new Date(n3.getFullYear() - 1, 11, 29);
        case 1:
          return n3;
        case 2:
          return new Date(n3.getFullYear(), 0, 3);
        case 3:
          return new Date(n3.getFullYear(), 0, 2);
        case 4:
          return new Date(n3.getFullYear(), 0, 1);
        case 5:
          return new Date(n3.getFullYear() - 1, 11, 31);
        case 6:
          return new Date(n3.getFullYear() - 1, 11, 30);
      }
    }
    function c2(n3) {
      var t2 = n3.ra;
      for (n3 = new Date(new Date(n3.sa + 1900, 0, 1).getTime()); 0 < t2; ) {
        var e5 = n3.getMonth(), r3 = (dt(n3.getFullYear()) ? gt : mt)[e5];
        if (!(t2 > r3 - n3.getDate())) {
          n3.setDate(n3.getDate() + t2);
          break;
        }
        t2 -= r3 - n3.getDate() + 1, n3.setDate(1), 11 > e5 ? n3.setMonth(e5 + 1) : (n3.setMonth(0), n3.setFullYear(n3.getFullYear() + 1));
      }
      return e5 = new Date(n3.getFullYear() + 1, 0, 4), t2 = u3(new Date(n3.getFullYear(), 0, 4)), e5 = u3(e5), 0 >= o4(t2, n3) ? 0 >= o4(e5, n3) ? n3.getFullYear() + 1 : n3.getFullYear() : n3.getFullYear() - 1;
    }
    var f2 = y[r2 + 40 >> 2];
    for (var s2 in r2 = {
      jb: y[r2 >> 2],
      ib: y[r2 + 4 >> 2],
      za: y[r2 + 8 >> 2],
      Ea: y[r2 + 12 >> 2],
      Aa: y[r2 + 16 >> 2],
      sa: y[r2 + 20 >> 2],
      na: y[r2 + 24 >> 2],
      ra: y[r2 + 28 >> 2],
      mb: y[r2 + 32 >> 2],
      hb: y[r2 + 36 >> 2],
      kb: f2 && f2 ? $(d, f2) : ""
    }, e4 = e4 ? $(d, e4) : "", f2 = {
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
    }) e4 = e4.replace(new RegExp(s2, "g"), f2[s2]);
    var l2 = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), h2 = "January February March April May June July August September October November December".split(" ");
    for (s2 in f2 = {
      "%a": function(n3) {
        return l2[n3.na].substring(0, 3);
      },
      "%A": function(n3) {
        return l2[n3.na];
      },
      "%b": function(n3) {
        return h2[n3.Aa].substring(0, 3);
      },
      "%B": function(n3) {
        return h2[n3.Aa];
      },
      "%C": function(n3) {
        return i3((n3.sa + 1900) / 100 | 0, 2);
      },
      "%d": function(n3) {
        return i3(n3.Ea, 2);
      },
      "%e": function(n3) {
        return a3(n3.Ea, 2, " ");
      },
      "%g": function(n3) {
        return c2(n3).toString().substring(2);
      },
      "%G": function(n3) {
        return c2(n3);
      },
      "%H": function(n3) {
        return i3(n3.za, 2);
      },
      "%I": function(n3) {
        return 0 == (n3 = n3.za) ? n3 = 12 : 12 < n3 && (n3 -= 12), i3(n3, 2);
      },
      "%j": function(n3) {
        for (var t2 = 0, e5 = 0; e5 <= n3.Aa - 1; t2 += (dt(n3.sa + 1900) ? gt : mt)[e5++]) ;
        return i3(n3.Ea + t2, 3);
      },
      "%m": function(n3) {
        return i3(n3.Aa + 1, 2);
      },
      "%M": function(n3) {
        return i3(n3.ib, 2);
      },
      "%n": function() {
        return "\n";
      },
      "%p": function(n3) {
        return 0 <= n3.za && 12 > n3.za ? "AM" : "PM";
      },
      "%S": function(n3) {
        return i3(n3.jb, 2);
      },
      "%t": function() {
        return "	";
      },
      "%u": function(n3) {
        return n3.na || 7;
      },
      "%U": function(n3) {
        return i3(Math.floor((n3.ra + 7 - n3.na) / 7), 2);
      },
      "%V": function(n3) {
        var t2 = Math.floor((n3.ra + 7 - (n3.na + 6) % 7) / 7);
        if (2 >= (n3.na + 371 - n3.ra - 2) % 7 && t2++, t2) 53 == t2 && (4 == (e5 = (n3.na + 371 - n3.ra) % 7) || 3 == e5 && dt(n3.sa) || (t2 = 1));
        else {
          t2 = 52;
          var e5 = (n3.na + 7 - n3.ra - 1) % 7;
          (4 == e5 || 5 == e5 && dt(n3.sa % 400 - 1)) && t2++;
        }
        return i3(t2, 2);
      },
      "%w": function(n3) {
        return n3.na;
      },
      "%W": function(n3) {
        return i3(Math.floor((n3.ra + 7 - (n3.na + 6) % 7) / 7), 2);
      },
      "%y": function(n3) {
        return (n3.sa + 1900).toString().substring(2);
      },
      "%Y": function(n3) {
        return n3.sa + 1900;
      },
      "%z": function(n3) {
        var t2 = 0 <= (n3 = n3.hb);
        return n3 = Math.abs(n3) / 60, (t2 ? "+" : "-") + String("0000" + (n3 / 60 * 100 + n3 % 60)).slice(-4);
      },
      "%Z": function(n3) {
        return n3.kb;
      },
      "%%": function() {
        return "%";
      }
    }, e4 = e4.replace(/%%/g, "\0\0"), f2) e4.includes(s2) && (e4 = e4.replace(new RegExp(s2, "g"), f2[s2](r2)));
    return (s2 = yt(e4 = e4.replace(/\0\0/g, "%"))).length > t ? 0 : (v.set(s2, n2), s2.length - 1);
  }
  nn = e3.InternalError = Q("InternalError");
  for (var wt = Array(256), At = 0; 256 > At; ++At) wt[At] = String.fromCharCode(At);
  an = wt, un = e3.BindingError = Q("BindingError"), Pn.prototype.isAliasOf = function(n2) {
    if (!(this instanceof Pn && n2 instanceof Pn)) return false;
    var t = this.ea.ha.fa, e4 = this.ea.ga, r2 = n2.ea.ha.fa;
    for (n2 = n2.ea.ga; t.ma; ) e4 = t.wa(e4), t = t.ma;
    for (; r2.ma; ) n2 = r2.wa(n2), r2 = r2.ma;
    return t === r2 && e4 === n2;
  }, Pn.prototype.clone = function() {
    if (this.ea.ga || hn(this), this.ea.va) return this.ea.count.value += 1, this;
    var n2 = Cn, t = Object, e4 = t.create, r2 = Object.getPrototypeOf(this), a3 = this.ea;
    return (n2 = n2(e4.call(t, r2, {
      ea: {
        value: {
          count: a3.count,
          ua: a3.ua,
          va: a3.va,
          ga: a3.ga,
          ha: a3.ha,
          ja: a3.ja,
          la: a3.la
        }
      }
    }))).ea.count.value += 1, n2.ea.ua = false, n2;
  }, Pn.prototype.delete = function() {
    this.ea.ga || hn(this), this.ea.ua && !this.ea.va && cn("Object already scheduled for deletion"), vn(this), dn(this.ea), this.ea.va || (this.ea.ja = void 0, this.ea.ga = void 0);
  }, Pn.prototype.isDeleted = function() {
    return !this.ea.ga;
  }, Pn.prototype.deleteLater = function() {
    return this.ea.ga || hn(this), this.ea.ua && !this.ea.va && cn("Object already scheduled for deletion"), yn.push(this), 1 === yn.length && wn && wn(bn), this.ea.ua = true, this;
  }, e3.getInheritedInstanceCount = function() {
    return Object.keys(An).length;
  }, e3.getLiveInheritedInstances = function() {
    var n2, t = [];
    for (n2 in An) An.hasOwnProperty(n2) && t.push(An[n2]);
    return t;
  }, e3.flushPendingDeletes = bn, e3.setDelayFunction = function(n2) {
    wn = n2, yn.length && wn && wn(bn);
  }, Fn.prototype.Qa = function(n2) {
    return this.Ha && (n2 = this.Ha(n2)), n2;
  }, Fn.prototype.Fa = function(n2) {
    this.oa && this.oa(n2);
  }, Fn.prototype.argPackAdvance = 8, Fn.prototype.readValueFromPointer = L, Fn.prototype.deleteObject = function(n2) {
    null !== n2 && n2.delete();
  }, Fn.prototype.fromWireType = function(n2) {
    function t() {
      return this.ya ? _n(this.fa.pa, {
        ha: this.$a,
        ga: e4,
        la: this,
        ja: n2
      }) : _n(this.fa.pa, {
        ha: this,
        ga: n2
      });
    }
    var e4 = this.Qa(n2);
    if (!e4) return this.Fa(n2), null;
    var r2 = Tn(this.fa, e4);
    if (void 0 !== r2) return 0 === r2.ea.count.value ? (r2.ea.ga = e4, r2.ea.ja = n2, r2.clone()) : (r2 = r2.clone(), this.Fa(n2), r2);
    if (r2 = this.fa.Pa(e4), !(r2 = mn[r2])) return t.call(this);
    r2 = this.xa ? r2.Ia : r2.pointerType;
    var a3 = gn(e4, this.fa, r2.fa);
    return null === a3 ? t.call(this) : this.ya ? _n(r2.fa.pa, {
      ha: r2,
      ga: a3,
      la: this,
      ja: n2
    }) : _n(r2.fa.pa, {
      ha: r2,
      ga: a3
    });
  }, In = e3.UnboundTypeError = Q("UnboundTypeError"), e3.count_emval_handles = function() {
    for (var n2 = 0, t = 5; t < zn.length; ++t) void 0 !== zn[t] && ++n2;
    return n2;
  }, e3.get_first_emval = function() {
    for (var n2 = 5; n2 < zn.length; ++n2) if (void 0 !== zn[n2]) return zn[n2];
    return null;
  };
  var Tt = {
    n: function(n2) {
      return Ct(n2 + 24) + 24;
    },
    m: function(n2, t, e4) {
      throw new z(n2).La(t, e4), n2;
    },
    s: function(n2) {
      var t = q[n2];
      delete q[n2];
      var e4 = t.Ca, r2 = t.oa, a3 = t.Ga;
      en([n2], a3.map((n3) => n3.Ta).concat(a3.map((n3) => n3.eb)), (n3) => {
        var i3 = {};
        return a3.forEach((t2, e5) => {
          var r3 = n3[e5], o4 = t2.Ra, u3 = t2.Sa, c2 = n3[e5 + a3.length], f2 = t2.cb, s2 = t2.fb;
          i3[t2.Na] = {
            read: (n4) => r3.fromWireType(o4(u3, n4)),
            write: (n4, t3) => {
              var e6 = [];
              f2(s2, n4, c2.toWireType(e6, t3)), N(e6);
            }
          };
        }), [{
          name: t.name,
          fromWireType: function(n4) {
            var t2, e5 = {};
            for (t2 in i3) e5[t2] = i3[t2].read(n4);
            return r2(n4), e5;
          },
          toWireType: function(n4, t2) {
            for (var a4 in i3) if (!(a4 in t2)) throw new TypeError('Missing field:  "' + a4 + '"');
            var o4 = e4();
            for (a4 in i3) i3[a4].write(o4, t2[a4]);
            return null !== n4 && n4.push(r2, o4), o4;
          },
          argPackAdvance: 8,
          readValueFromPointer: L,
          ka: r2
        }];
      });
    },
    F: function(n2, t, e4, r2, a3) {
      t = on(t), e4 = ln(e4);
      var i3 = -1 != t.indexOf("u");
      i3 && (a3 = (1n << 64n) - 1n), fn(n2, {
        name: t,
        fromWireType: function(n3) {
          return n3;
        },
        toWireType: function(n3, e5) {
          if ("bigint" != typeof e5 && "number" != typeof e5) throw new TypeError('Cannot convert "' + rn(e5) + '" to ' + this.name);
          if (e5 < r2 || e5 > a3) throw new TypeError('Passing a number "' + rn(e5) + '" from JS side to C/C++ side to an argument of type "' + t + '", which is outside the valid range [' + r2 + ", " + a3 + "]!");
          return e5;
        },
        argPackAdvance: 8,
        readValueFromPointer: sn(t, e4, !i3),
        ka: null
      });
    },
    S: function(n2, t, e4, r2, a3) {
      var i3 = ln(e4);
      fn(n2, {
        name: t = on(t),
        fromWireType: function(n3) {
          return !!n3;
        },
        toWireType: function(n3, t2) {
          return t2 ? r2 : a3;
        },
        argPackAdvance: 8,
        readValueFromPointer: function(n3) {
          if (1 === e4) var r3 = v;
          else if (2 === e4) r3 = g;
          else {
            if (4 !== e4) throw new TypeError("Unknown boolean type size: " + t);
            r3 = y;
          }
          return this.fromWireType(r3[n3 >> i3]);
        },
        ka: null
      });
    },
    f: function(n2, t, e4, r2, a3, i3, o4, u3, c2, f2, s2, l2, h2) {
      s2 = on(s2), i3 = Un(a3, i3), u3 && (u3 = Un(o4, u3)), f2 && (f2 = Un(c2, f2)), h2 = Un(l2, h2);
      var p2 = X(s2);
      kn(p2, function() {
        xn("Cannot construct " + s2 + " due to unbound types", [r2]);
      }), en([n2, t, e4], r2 ? [r2] : [], function(t2) {
        if (t2 = t2[0], r2) var e5 = t2.fa, a4 = e5.pa;
        else a4 = Pn.prototype;
        t2 = K(p2, function() {
          if (Object.getPrototypeOf(this) !== o5) throw new un("Use 'new' to construct " + s2);
          if (void 0 === c3.qa) throw new un(s2 + " has no accessible constructor");
          var n3 = c3.qa[arguments.length];
          if (void 0 === n3) throw new un("Tried to invoke ctor of " + s2 + " with invalid number of parameters (" + arguments.length + ") - expected (" + Object.keys(c3.qa).toString() + ") parameters instead!");
          return n3.apply(this, arguments);
        });
        var o5 = Object.create(a4, {
          constructor: {
            value: t2
          }
        });
        t2.prototype = o5;
        var c3 = new Wn(s2, t2, o5, h2, e5, i3, u3, f2);
        e5 = new Fn(s2, c3, true, false, false), a4 = new Fn(s2 + "*", c3, false, false, false);
        var l3 = new Fn(s2 + " const*", c3, false, true, false);
        return mn[n2] = {
          pointerType: a4,
          Ia: l3
        }, Dn(p2, t2), [e5, a4, l3];
      });
    },
    v: function(n2, t, e4, r2, a3, i3, o4) {
      var u3 = Yn(e4, r2);
      t = on(t), i3 = Un(a3, i3), en([], [n2], function(n3) {
        function r3() {
          xn("Cannot call " + a4 + " due to unbound types", u3);
        }
        var a4 = (n3 = n3[0]).name + "." + t;
        t.startsWith("@@") && (t = Symbol[t.substring(2)]);
        var c2 = n3.fa.constructor;
        return void 0 === c2[t] ? (r3.ta = e4 - 1, c2[t] = r3) : ($n(c2, t, a4), c2[t].ia[e4 - 1] = r3), en([], u3, function(n4) {
          return n4 = Hn(a4, [n4[0], null].concat(n4.slice(1)), null, i3, o4), void 0 === c2[t].ia ? (n4.ta = e4 - 1, c2[t] = n4) : c2[t].ia[e4 - 1] = n4, [];
        }), [];
      });
    },
    i: function(n2, t, e4, r2, a3, i3) {
      0 < t || R();
      var o4 = Yn(t, e4);
      a3 = Un(r2, a3), en([], [n2], function(n3) {
        var e5 = "constructor " + (n3 = n3[0]).name;
        if (void 0 === n3.fa.qa && (n3.fa.qa = []), void 0 !== n3.fa.qa[t - 1]) throw new un("Cannot register multiple constructors with identical number of parameters (" + (t - 1) + ") for class '" + n3.name + "'! Overload resolution is currently only performed using the parameter count, not actual type info!");
        return n3.fa.qa[t - 1] = () => {
          xn("Cannot construct " + n3.name + " due to unbound types", o4);
        }, en([], o4, function(r3) {
          return r3.splice(1, 0, null), n3.fa.qa[t - 1] = Hn(e5, r3, null, a3, i3), [];
        }), [];
      });
    },
    b: function(n2, t, e4, r2, a3, i3, o4, u3) {
      var c2 = Yn(e4, r2);
      t = on(t), i3 = Un(a3, i3), en([], [n2], function(n3) {
        function r3() {
          xn("Cannot call " + a4 + " due to unbound types", c2);
        }
        var a4 = (n3 = n3[0]).name + "." + t;
        t.startsWith("@@") && (t = Symbol[t.substring(2)]), u3 && n3.fa.ab.push(t);
        var f2 = n3.fa.pa, s2 = f2[t];
        return void 0 === s2 || void 0 === s2.ia && s2.className !== n3.name && s2.ta === e4 - 2 ? (r3.ta = e4 - 2, r3.className = n3.name, f2[t] = r3) : ($n(f2, t, a4), f2[t].ia[e4 - 2] = r3), en([], c2, function(r4) {
          return r4 = Hn(a4, r4, n3, i3, o4), void 0 === f2[t].ia ? (r4.ta = e4 - 2, f2[t] = r4) : f2[t].ia[e4 - 2] = r4, [];
        }), [];
      });
    },
    c: function(n2, t, e4, r2, a3, i3, o4, u3, c2, f2) {
      t = on(t), a3 = Un(r2, a3), en([], [n2], function(n3) {
        var r3 = (n3 = n3[0]).name + "." + t, s2 = {
          get: function() {
            xn("Cannot access " + r3 + " due to unbound types", [e4, o4]);
          },
          enumerable: true,
          configurable: true
        };
        return s2.set = c2 ? () => {
          xn("Cannot access " + r3 + " due to unbound types", [e4, o4]);
        } : () => {
          cn(r3 + " is a read-only property");
        }, Object.defineProperty(n3.fa.pa, t, s2), en([], c2 ? [e4, o4] : [e4], function(e5) {
          var o5 = e5[0], s3 = {
            get: function() {
              var t2 = Vn(this, n3, r3 + " getter");
              return o5.fromWireType(a3(i3, t2));
            },
            enumerable: true
          };
          if (c2) {
            c2 = Un(u3, c2);
            var l2 = e5[1];
            s3.set = function(t2) {
              var e6 = Vn(this, n3, r3 + " setter"), a4 = [];
              c2(f2, e6, l2.toWireType(a4, t2)), N(a4);
            };
          }
          return Object.defineProperty(n3.fa.pa, t, s3), [];
        }), [];
      });
    },
    R: function(n2, t) {
      fn(n2, {
        name: t = on(t),
        fromWireType: function(n3) {
          var t2 = Nn(n3);
          return qn(n3), t2;
        },
        toWireType: function(n3, t2) {
          return Ln(t2);
        },
        argPackAdvance: 8,
        readValueFromPointer: L,
        ka: null
      });
    },
    o: function(n2, t, e4, r2) {
      function a3() {
      }
      e4 = ln(e4), t = on(t), a3.values = {}, fn(n2, {
        name: t,
        constructor: a3,
        fromWireType: function(n3) {
          return this.constructor.values[n3];
        },
        toWireType: function(n3, t2) {
          return t2.value;
        },
        argPackAdvance: 8,
        readValueFromPointer: Gn(t, e4, r2),
        ka: null
      }), kn(t, a3);
    },
    e: function(n2, t, e4) {
      var r2 = Jn(n2, "enum");
      t = on(t), n2 = r2.constructor, r2 = Object.create(r2.constructor.prototype, {
        value: {
          value: e4
        },
        constructor: {
          value: K(r2.name + "_" + t, function() {
          })
        }
      }), n2.values[e4] = r2, n2[t] = r2;
    },
    E: function(n2, t, e4) {
      e4 = ln(e4), fn(n2, {
        name: t = on(t),
        fromWireType: function(n3) {
          return n3;
        },
        toWireType: function(n3, t2) {
          return t2;
        },
        argPackAdvance: 8,
        readValueFromPointer: Zn(t, e4),
        ka: null
      });
    },
    W: function(n2, t, e4, r2, a3, i3) {
      var o4 = Yn(t, e4);
      n2 = on(n2), a3 = Un(r2, a3), kn(n2, function() {
        xn("Cannot call " + n2 + " due to unbound types", o4);
      }, t - 1), en([], o4, function(e5) {
        return Dn(n2, Hn(n2, [e5[0], null].concat(e5.slice(1)), null, a3, i3), t - 1), [];
      });
    },
    w: function(n2, t, e4, r2, a3) {
      t = on(t), -1 === a3 && (a3 = 4294967295), a3 = ln(e4);
      var i3 = (n3) => n3;
      if (0 === r2) {
        var o4 = 32 - 8 * e4;
        i3 = (n3) => n3 << o4 >>> o4;
      }
      e4 = t.includes("unsigned") ? function(n3, t2) {
        return t2 >>> 0;
      } : function(n3, t2) {
        return t2;
      }, fn(n2, {
        name: t,
        fromWireType: i3,
        toWireType: e4,
        argPackAdvance: 8,
        readValueFromPointer: sn(t, a3, 0 !== r2),
        ka: null
      });
    },
    r: function(n2, t, e4) {
      function r2(n3) {
        var t2 = b;
        return new a3(p, t2[1 + (n3 >>= 2)], t2[n3]);
      }
      var a3 = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array, BigInt64Array, BigUint64Array][t];
      fn(n2, {
        name: e4 = on(e4),
        fromWireType: r2,
        argPackAdvance: 8,
        readValueFromPointer: r2
      }, {
        Wa: true
      });
    },
    h: function(n2, t, e4, r2, a3, i3, o4, u3, c2, f2, s2, l2) {
      e4 = on(e4), i3 = Un(a3, i3), u3 = Un(o4, u3), f2 = Un(c2, f2), l2 = Un(s2, l2), en([n2], [t], function(n3) {
        return n3 = n3[0], [new Fn(e4, n3.fa, false, false, true, n3, r2, i3, u3, f2, l2)];
      });
    },
    G: function(n2, t) {
      var e4 = "std::string" === (t = on(t));
      fn(n2, {
        name: t,
        fromWireType: function(n3) {
          var t2 = b[n3 >> 2], r2 = n3 + 4;
          if (e4) for (var a3 = r2, i3 = 0; i3 <= t2; ++i3) {
            var o4 = r2 + i3;
            if (i3 == t2 || 0 == d[o4]) {
              if (a3 = a3 ? $(d, a3, o4 - a3) : "", void 0 === u3) var u3 = a3;
              else u3 += String.fromCharCode(0), u3 += a3;
              a3 = o4 + 1;
            }
          }
          else {
            for (u3 = Array(t2), i3 = 0; i3 < t2; ++i3) u3[i3] = String.fromCharCode(d[r2 + i3]);
            u3 = u3.join("");
          }
          return Pt(n3), u3;
        },
        toWireType: function(n3, t2) {
          t2 instanceof ArrayBuffer && (t2 = new Uint8Array(t2));
          var r2 = "string" == typeof t2;
          r2 || t2 instanceof Uint8Array || t2 instanceof Uint8ClampedArray || t2 instanceof Int8Array || cn("Cannot pass non-string to std::string");
          var a3 = e4 && r2 ? W(t2) : t2.length, i3 = Ct(4 + a3 + 1), o4 = i3 + 4;
          if (b[i3 >> 2] = a3, e4 && r2) k(t2, d, o4, a3 + 1);
          else if (r2) for (r2 = 0; r2 < a3; ++r2) {
            var u3 = t2.charCodeAt(r2);
            255 < u3 && (Pt(o4), cn("String has UTF-16 code units that do not fit in 8 bits")), d[o4 + r2] = u3;
          }
          else for (r2 = 0; r2 < a3; ++r2) d[o4 + r2] = t2[r2];
          return null !== n3 && n3.push(Pt, i3), i3;
        },
        argPackAdvance: 8,
        readValueFromPointer: L,
        ka: function(n3) {
          Pt(n3);
        }
      });
    },
    B: function(n2, t, e4) {
      if (e4 = on(e4), 2 === t) var r2 = Kn, a3 = Qn, i3 = nt, o4 = () => m, u3 = 1;
      else 4 === t && (r2 = tt, a3 = et, i3 = rt, o4 = () => b, u3 = 2);
      fn(n2, {
        name: e4,
        fromWireType: function(n3) {
          for (var e5, a4 = b[n3 >> 2], i4 = o4(), c2 = n3 + 4, f2 = 0; f2 <= a4; ++f2) {
            var s2 = n3 + 4 + f2 * t;
            f2 != a4 && 0 != i4[s2 >> u3] || (c2 = r2(c2, s2 - c2), void 0 === e5 ? e5 = c2 : (e5 += String.fromCharCode(0), e5 += c2), c2 = s2 + t);
          }
          return Pt(n3), e5;
        },
        toWireType: function(n3, r3) {
          "string" != typeof r3 && cn("Cannot pass non-string to C++ string type " + e4);
          var o5 = i3(r3), c2 = Ct(4 + o5 + t);
          return b[c2 >> 2] = o5 >> u3, a3(r3, c2 + 4, o5 + t), null !== n3 && n3.push(Pt, c2), c2;
        },
        argPackAdvance: 8,
        readValueFromPointer: L,
        ka: function(n3) {
          Pt(n3);
        }
      });
    },
    t: function(n2, t, e4, r2, a3, i3) {
      q[n2] = {
        name: on(t),
        Ca: Un(e4, r2),
        oa: Un(a3, i3),
        Ga: []
      };
    },
    j: function(n2, t, e4, r2, a3, i3, o4, u3, c2, f2) {
      q[n2].Ga.push({
        Na: on(t),
        Ta: e4,
        Ra: Un(r2, a3),
        Sa: i3,
        eb: o4,
        cb: Un(u3, c2),
        fb: f2
      });
    },
    T: function(n2, t) {
      fn(n2, {
        Xa: true,
        name: t = on(t),
        argPackAdvance: 0,
        fromWireType: function() {
        },
        toWireType: function() {
        }
      });
    },
    l: function(n2, t, e4) {
      n2 = Nn(n2), t = Jn(t, "emval::as");
      var r2 = [], a3 = Ln(r2);
      return b[e4 >> 2] = a3, t.toWireType(r2, n2);
    },
    z: function(n2, t) {
      return n2 = Nn(n2), (t = Jn(t, "emval::as")).toWireType(null, n2);
    },
    X: function(n2, t, e4, r2) {
      n2 = Nn(n2), e4 = at(t, e4);
      for (var a3 = Array(t), i3 = 0; i3 < t; ++i3) {
        var o4 = e4[i3];
        a3[i3] = o4.readValueFromPointer(r2), r2 += o4.argPackAdvance;
      }
      return n2 = n2.apply(void 0, a3), Ln(n2);
    },
    U: function(n2, t, e4, r2, a3) {
      n2 = ut[n2], t = Nn(t), e4 = ot(e4);
      var i3 = [];
      return b[r2 >> 2] = Ln(i3), n2(t, e4, i3, a3);
    },
    C: function(n2, t, e4, r2) {
      (n2 = ut[n2])(t = Nn(t), e4 = ot(e4), null, r2);
    },
    a: qn,
    H: function(n2) {
      return 0 === n2 ? Ln(ct()) : (n2 = ot(n2), Ln(ct()[n2]));
    },
    A: function(n2, t) {
      var e4 = at(n2, t), r2 = e4[0];
      t = r2.name + "_$" + e4.slice(1).map(function(n3) {
        return n3.name;
      }).join("_") + "$";
      var a3 = st[t];
      if (void 0 !== a3) return a3;
      var i3 = Array(n2 - 1);
      return a3 = ft((t2, a4, o4, u3) => {
        for (var c2 = 0, f2 = 0; f2 < n2 - 1; ++f2) i3[f2] = e4[f2 + 1].readValueFromPointer(u3 + c2), c2 += e4[f2 + 1].argPackAdvance;
        for (t2 = t2[a4].apply(t2, i3), f2 = 0; f2 < n2 - 1; ++f2) e4[f2 + 1].Ja && e4[f2 + 1].Ja(i3[f2]);
        if (!r2.Xa) return r2.toWireType(o4, t2);
      }), st[t] = a3;
    },
    q: function(n2, t) {
      return n2 = Nn(n2), t = Nn(t), Ln(n2[t]);
    },
    g: function(n2) {
      4 < n2 && (zn[n2].Da += 1);
    },
    I: function(n2, t) {
      return (n2 = Nn(n2)) instanceof (t = Nn(t));
    },
    u: function(n2) {
      return "number" == typeof (n2 = Nn(n2));
    },
    x: function(n2) {
      return "string" == typeof (n2 = Nn(n2));
    },
    V: function() {
      return Ln([]);
    },
    p: function(n2) {
      return Ln(ot(n2));
    },
    k: function(n2) {
      N(Nn(n2)), qn(n2);
    },
    d: function(n2, t) {
      return n2 = (n2 = Jn(n2, "_emval_take_value")).readValueFromPointer(t), Ln(n2);
    },
    y: function(n2) {
      return n2 = Nn(n2), Ln(typeof n2);
    },
    D: function() {
      R("");
    },
    N: function(n2, t, e4) {
      d.copyWithin(n2, t, t + e4);
    },
    M: function(n2) {
      var t = d.length;
      if (2147483648 < (n2 >>>= 0)) return false;
      for (var e4 = 1; 4 >= e4; e4 *= 2) {
        var r2 = t * (1 + 0.2 / e4);
        r2 = Math.min(r2, n2 + 100663296);
        var a3 = Math;
        r2 = Math.max(n2, r2), a3 = a3.min.call(a3, 2147483648, r2 + (65536 - r2 % 65536) % 65536);
        n: {
          try {
            h.grow(a3 - p.byteLength + 65535 >>> 16), E();
            var i3 = 1;
            break n;
          } catch (o4) {
          }
          i3 = void 0;
        }
        if (i3) return true;
      }
      return false;
    },
    K: function(n2, t) {
      var e4 = 0;
      return ht().forEach(function(r2, a3) {
        var i3 = t + e4;
        for (a3 = b[n2 + 4 * a3 >> 2] = i3, i3 = 0; i3 < r2.length; ++i3) v[0 | a3++] = r2.charCodeAt(i3);
        v[0 | a3] = 0, e4 += r2.length + 1;
      }), 0;
    },
    L: function(n2, t) {
      var e4 = ht();
      b[n2 >> 2] = e4.length;
      var r2 = 0;
      return e4.forEach(function(n3) {
        r2 += n3.length + 1;
      }), b[t >> 2] = r2, 0;
    },
    Q: function() {
      return 52;
    },
    P: function() {
      return 70;
    },
    O: function(n2, t, e4, r2) {
      for (var a3 = 0, i3 = 0; i3 < e4; i3++) {
        var o4 = b[t >> 2], u3 = b[t + 4 >> 2];
        t += 8;
        for (var c2 = 0; c2 < u3; c2++) {
          var f2 = d[o4 + c2], h2 = vt[n2];
          0 === f2 || 10 === f2 ? ((1 === n2 ? s : l)($(h2, 0)), h2.length = 0) : h2.push(f2);
        }
        a3 += u3;
      }
      return b[r2 >> 2] = a3, 0;
    },
    J: function(n2, t, e4, r2) {
      return bt(n2, t, e4, r2);
    }
  };
  !function() {
    function n2(n3) {
      e3.asm = n3.exports, h = e3.asm.Y, E(), j = e3.asm.ca, S.unshift(e3.asm.Z), U--, e3.monitorRunDependencies && e3.monitorRunDependencies(U), 0 == U && I && (n3 = I, I = null, n3());
    }
    function t(t2) {
      n2(t2.instance);
    }
    function r2(n3) {
      return V().then(function(n4) {
        return WebAssembly.instantiate(n4, a3);
      }).then(function(n4) {
        return n4;
      }).then(n3, function(n4) {
        l("failed to asynchronously prepare wasm: " + n4), R(n4);
      });
    }
    var a3 = {
      a: Tt
    };
    if (U++, e3.monitorRunDependencies && e3.monitorRunDependencies(U), e3.instantiateWasm) try {
      return e3.instantiateWasm(a3, n2);
    } catch (o4) {
      l("Module.instantiateWasm callback failed with error: " + o4), i2(o4);
    }
    (f || "function" != typeof WebAssembly.instantiateStreaming || x() || "function" != typeof fetch ? r2(t) : fetch(M, {
      credentials: "same-origin"
    }).then(function(n3) {
      return WebAssembly.instantiateStreaming(n3, a3).then(t, function(n4) {
        return l("wasm streaming compile failed: " + n4), l("falling back to ArrayBuffer instantiation"), r2(t);
      });
    })).catch(i2);
  }(), e3.___wasm_call_ctors = function() {
    return (e3.___wasm_call_ctors = e3.asm.Z).apply(null, arguments);
  };
  var _t, Ct = e3._malloc = function() {
    return (Ct = e3._malloc = e3.asm._).apply(null, arguments);
  }, Pt = e3._free = function() {
    return (Pt = e3._free = e3.asm.$).apply(null, arguments);
  }, $t = e3.___getTypeName = function() {
    return ($t = e3.___getTypeName = e3.asm.aa).apply(null, arguments);
  };
  function kt() {
    function n2() {
      if (!_t && (_t = true, e3.calledRun = true, !C)) {
        if (B(S), a2(e3), e3.onRuntimeInitialized && e3.onRuntimeInitialized(), e3.postRun) for ("function" == typeof e3.postRun && (e3.postRun = [e3.postRun]); e3.postRun.length; ) {
          var n3 = e3.postRun.shift();
          F.unshift(n3);
        }
        B(F);
      }
    }
    if (!(0 < U)) {
      if (e3.preRun) for ("function" == typeof e3.preRun && (e3.preRun = [e3.preRun]); e3.preRun.length; ) D();
      B(O), 0 < U || (e3.setStatus ? (e3.setStatus("Running..."), setTimeout(function() {
        setTimeout(function() {
          e3.setStatus("");
        }, 1), n2();
      }, 1)) : n2());
    }
  }
  if (e3.__embind_initialize_bindings = function() {
    return (e3.__embind_initialize_bindings = e3.asm.ba).apply(null, arguments);
  }, e3.___cxa_is_pointer_type = function() {
    return (e3.___cxa_is_pointer_type = e3.asm.da).apply(null, arguments);
  }, I = function n2() {
    _t || kt(), _t || (I = n2);
  }, e3.preInit) for ("function" == typeof e3.preInit && (e3.preInit = [e3.preInit]); 0 < e3.preInit.length; ) e3.preInit.pop()();
  return kt(), n.ready;
}, e2.exports = a;
var o2 = o(i.exports);
var u = Object.freeze(Object.defineProperty({
  __proto__: null,
  default: o2
}, Symbol.toStringTag, {
  value: "Module"
}));
export {
  u as a
};
//# sourceMappingURL=arcgis-knowledge-client-core-simd-WU7MMB6Z.js.map
