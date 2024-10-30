import "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/chunks/basis_transcoder.js
var r;
var e = (r = "undefined" != typeof document ? document.currentScript?.src : void 0, function(e2 = {}) {
  var t, n, a = Object.assign({}, e2), o = new Promise((r2, e3) => {
    t = r2, n = e3;
  }), i = true, s = Object.assign({}, a), u = "";
  function c(r2) {
    return a.locateFile ? a.locateFile(r2, u) : u + r2;
  }
  "undefined" != typeof document && document.currentScript && (u = document.currentScript.src), r && (u = r), u = u.startsWith("blob:") ? "" : u.substr(0, u.replace(/[?#].*/, "").lastIndexOf("/") + 1);
  var l, p, h = a.print || console.log.bind(console), d = a.printErr || console.error.bind(console);
  Object.assign(a, s), s = null, a.arguments && a.arguments, a.thisProgram && a.thisProgram, a.quit && a.quit, a.wasmBinary && (l = a.wasmBinary);
  var f, v, y, m, g, $, w, T, b = false;
  function C() {
    var r2 = p.buffer;
    a.HEAP8 = f = new Int8Array(r2), a.HEAP16 = y = new Int16Array(r2), a.HEAPU8 = v = new Uint8Array(r2), a.HEAPU16 = m = new Uint16Array(r2), a.HEAP32 = g = new Int32Array(r2), a.HEAPU32 = $ = new Uint32Array(r2), a.HEAPF32 = w = new Float32Array(r2), a.HEAPF64 = T = new Float64Array(r2);
  }
  var P = [], A = [], W = [];
  function _() {
    if (a.preRun) for ("function" == typeof a.preRun && (a.preRun = [a.preRun]); a.preRun.length; ) O(a.preRun.shift());
    J(P);
  }
  function F() {
    J(A);
  }
  function S() {
    if (a.postRun) for ("function" == typeof a.postRun && (a.postRun = [a.postRun]); a.postRun.length; ) k(a.postRun.shift());
    J(W);
  }
  function O(r2) {
    P.unshift(r2);
  }
  function j(r2) {
    A.unshift(r2);
  }
  function k(r2) {
    W.unshift(r2);
  }
  var E = 0, R = null;
  function D(r2) {
    E++, a.monitorRunDependencies?.(E);
  }
  function x(r2) {
    if (E--, a.monitorRunDependencies?.(E), 0 == E && R) {
      var e3 = R;
      R = null, e3();
    }
  }
  function I(r2) {
    a.onAbort?.(r2), d(r2 = "Aborted(" + r2 + ")"), b = true, r2 += ". Build with -sASSERTIONS for more info.";
    var e3 = new WebAssembly.RuntimeError(r2);
    throw n(e3), e3;
  }
  var V, H = "data:application/octet-stream;base64,", U = (r2) => r2.startsWith(H);
  function B() {
    var r2 = "basis_transcoder.wasm";
    return U(r2) ? r2 : c(r2);
  }
  function N(r2) {
    if (r2 == V && l) return new Uint8Array(l);
    throw "both async and sync fetching of the wasm failed";
  }
  function M(r2) {
    return !l && i && "function" == typeof fetch ? fetch(r2, {
      credentials: "same-origin"
    }).then((e3) => {
      if (!e3.ok) throw `failed to load wasm binary file at '${r2}'`;
      return e3.arrayBuffer();
    }).catch(() => N(r2)) : Promise.resolve().then(() => N(r2));
  }
  function z(r2, e3, t2) {
    return M(r2).then((r3) => WebAssembly.instantiate(r3, e3)).then(t2, (r3) => {
      d(`failed to asynchronously prepare wasm: ${r3}`), I(r3);
    });
  }
  function q(r2, e3, t2, n2) {
    return r2 || "function" != typeof WebAssembly.instantiateStreaming || U(e3) || "function" != typeof fetch ? z(e3, t2, n2) : fetch(e3, {
      credentials: "same-origin"
    }).then((r3) => WebAssembly.instantiateStreaming(r3, t2).then(n2, function(r4) {
      return d(`wasm streaming compile failed: ${r4}`), d("falling back to ArrayBuffer instantiation"), z(e3, t2, n2);
    }));
  }
  function G() {
    return {
      a: kt
    };
  }
  function L() {
    var r2 = G();
    function e3(r3, e4) {
      return Et = r3.exports, p = Et.L, C(), re = Et.Q, j(Et.M), x(), Et;
    }
    function t2(r3) {
      e3(r3.instance);
    }
    if (D(), a.instantiateWasm) try {
      return a.instantiateWasm(r2, e3);
    } catch (o2) {
      d(`Module.instantiateWasm callback failed with error: ${o2}`), n(o2);
    }
    return V || (V = B()), q(l, V, r2, t2).catch(n), {};
  }
  var J = (r2) => {
    for (; r2.length > 0; ) r2.shift()(a);
  };
  a.noExitRuntime;
  class K {
    constructor(r2) {
      this.excPtr = r2, this.ptr = r2 - 24;
    }
    set_type(r2) {
      $[this.ptr + 4 >> 2] = r2;
    }
    get_type() {
      return $[this.ptr + 4 >> 2];
    }
    set_destructor(r2) {
      $[this.ptr + 8 >> 2] = r2;
    }
    get_destructor() {
      return $[this.ptr + 8 >> 2];
    }
    set_caught(r2) {
      r2 = r2 ? 1 : 0, f[this.ptr + 12] = r2;
    }
    get_caught() {
      return 0 != f[this.ptr + 12];
    }
    set_rethrown(r2) {
      r2 = r2 ? 1 : 0, f[this.ptr + 13] = r2;
    }
    get_rethrown() {
      return 0 != f[this.ptr + 13];
    }
    init(r2, e3) {
      this.set_adjusted_ptr(0), this.set_type(r2), this.set_destructor(e3);
    }
    set_adjusted_ptr(r2) {
      $[this.ptr + 16 >> 2] = r2;
    }
    get_adjusted_ptr() {
      return $[this.ptr + 16 >> 2];
    }
    get_exception_ptr() {
      if (It(this.get_type())) return $[this.excPtr >> 2];
      var r2 = this.get_adjusted_ptr();
      return 0 !== r2 ? r2 : this.excPtr;
    }
  }
  var Q = (r2, e3, t2) => {
    throw new K(r2).init(e3, t2), r2;
  }, Z = () => {
    I("");
  }, X = {}, Y = (r2) => {
    for (; r2.length; ) {
      var e3 = r2.pop();
      r2.pop()(e3);
    }
  };
  function rr(r2) {
    return this.fromWireType($[r2 >> 2]);
  }
  var er, tr, nr, ar = {}, or = {}, ir = {}, sr = (r2) => {
    throw new er(r2);
  }, ur = (r2, e3, t2) => {
    function n2(e4) {
      var n3 = t2(e4);
      n3.length !== r2.length && sr("Mismatched type converter count");
      for (var a3 = 0; a3 < r2.length; ++a3) vr(r2[a3], n3[a3]);
    }
    r2.forEach(function(r3) {
      ir[r3] = e3;
    });
    var a2 = new Array(e3.length), o2 = [], i2 = 0;
    e3.forEach((r3, e4) => {
      or.hasOwnProperty(r3) ? a2[e4] = or[r3] : (o2.push(r3), ar.hasOwnProperty(r3) || (ar[r3] = []), ar[r3].push(() => {
        a2[e4] = or[r3], ++i2 === o2.length && n2(a2);
      }));
    }), 0 === o2.length && n2(a2);
  }, cr = (r2) => {
    var e3 = X[r2];
    delete X[r2];
    var t2 = e3.rawConstructor, n2 = e3.rawDestructor, a2 = e3.fields, o2 = a2.map((r3) => r3.getterReturnType).concat(a2.map((r3) => r3.setterArgumentType));
    ur([r2], o2, (r3) => {
      var o3 = {};
      return a2.forEach((e4, t3) => {
        var n3 = e4.fieldName, i2 = r3[t3], s2 = e4.getter, u2 = e4.getterContext, c2 = r3[t3 + a2.length], l2 = e4.setter, p2 = e4.setterContext;
        o3[n3] = {
          read: (r4) => i2.fromWireType(s2(u2, r4)),
          write: (r4, e5) => {
            var t4 = [];
            l2(p2, r4, c2.toWireType(t4, e5)), Y(t4);
          }
        };
      }), [{
        name: e3.name,
        fromWireType: (r4) => {
          var e4 = {};
          for (var t3 in o3) e4[t3] = o3[t3].read(r4);
          return n2(r4), e4;
        },
        toWireType: (r4, e4) => {
          for (var a3 in o3) if (!(a3 in e4)) throw new TypeError(`Missing field: "${a3}"`);
          var i2 = t2();
          for (a3 in o3) o3[a3].write(i2, e4[a3]);
          return null !== r4 && r4.push(n2, i2), i2;
        },
        argPackAdvance: mr,
        readValueFromPointer: rr,
        destructorFunction: n2
      }];
    });
  }, lr = (r2, e3, t2, n2, a2) => {
  }, pr = () => {
    for (var r2 = new Array(256), e3 = 0; e3 < 256; ++e3) r2[e3] = String.fromCharCode(e3);
    tr = r2;
  }, hr = (r2) => {
    for (var e3 = "", t2 = r2; v[t2]; ) e3 += tr[v[t2++]];
    return e3;
  }, dr = (r2) => {
    throw new nr(r2);
  };
  function fr(r2, e3, t2 = {}) {
    var n2 = e3.name;
    if (r2 || dr(`type "${n2}" must have a positive integer typeid pointer`), or.hasOwnProperty(r2)) {
      if (t2.ignoreDuplicateRegistrations) return;
      dr(`Cannot register type '${n2}' twice`);
    }
    if (or[r2] = e3, delete ir[r2], ar.hasOwnProperty(r2)) {
      var a2 = ar[r2];
      delete ar[r2], a2.forEach((r3) => r3());
    }
  }
  function vr(r2, e3, t2 = {}) {
    if (!("argPackAdvance" in e3)) throw new TypeError("registerType registeredInstance requires argPackAdvance");
    return fr(r2, e3, t2);
  }
  var yr, mr = 8, gr = (r2, e3, t2, n2) => {
    vr(r2, {
      name: e3 = hr(e3),
      fromWireType: function(r3) {
        return !!r3;
      },
      toWireType: function(r3, e4) {
        return e4 ? t2 : n2;
      },
      argPackAdvance: mr,
      readValueFromPointer: function(r3) {
        return this.fromWireType(v[r3]);
      },
      destructorFunction: null
    });
  }, $r = (r2) => ({
    count: r2.count,
    deleteScheduled: r2.deleteScheduled,
    preservePointerOnDelete: r2.preservePointerOnDelete,
    ptr: r2.ptr,
    ptrType: r2.ptrType,
    smartPtr: r2.smartPtr,
    smartPtrType: r2.smartPtrType
  }), wr = (r2) => {
    function e3(r3) {
      return r3.$$.ptrType.registeredClass.name;
    }
    dr(e3(r2) + " instance already deleted");
  }, Tr = false, br = (r2) => {
  }, Cr = (r2) => {
    r2.smartPtr ? r2.smartPtrType.rawDestructor(r2.smartPtr) : r2.ptrType.registeredClass.rawDestructor(r2.ptr);
  }, Pr = (r2) => {
    r2.count.value -= 1, 0 === r2.count.value && Cr(r2);
  }, Ar = (r2, e3, t2) => {
    if (e3 === t2) return r2;
    if (void 0 === t2.baseClass) return null;
    var n2 = Ar(r2, e3, t2.baseClass);
    return null === n2 ? null : t2.downcast(n2);
  }, Wr = {}, _r = () => Object.keys(Er).length, Fr = () => {
    var r2 = [];
    for (var e3 in Er) Er.hasOwnProperty(e3) && r2.push(Er[e3]);
    return r2;
  }, Sr = [], Or = () => {
    for (; Sr.length; ) {
      var r2 = Sr.pop();
      r2.$$.deleteScheduled = false, r2.delete();
    }
  }, jr = (r2) => {
    yr = r2, Sr.length && yr && yr(Or);
  }, kr = () => {
    a.getInheritedInstanceCount = _r, a.getLiveInheritedInstances = Fr, a.flushPendingDeletes = Or, a.setDelayFunction = jr;
  }, Er = {}, Rr = (r2, e3) => {
    for (void 0 === e3 && dr("ptr should not be undefined"); r2.baseClass; ) e3 = r2.upcast(e3), r2 = r2.baseClass;
    return e3;
  }, Dr = (r2, e3) => (e3 = Rr(r2, e3), Er[e3]), xr = (r2, e3) => (e3.ptrType && e3.ptr || sr("makeClassHandle requires ptr and ptrType"), !!e3.smartPtrType != !!e3.smartPtr && sr("Both smartPtrType and smartPtr must be specified"), e3.count = {
    value: 1
  }, Vr(Object.create(r2, {
    $$: {
      value: e3,
      writable: true
    }
  })));
  function Ir(r2) {
    var e3 = this.getPointee(r2);
    if (!e3) return this.destructor(r2), null;
    var t2 = Dr(this.registeredClass, e3);
    if (void 0 !== t2) {
      if (0 === t2.$$.count.value) return t2.$$.ptr = e3, t2.$$.smartPtr = r2, t2.clone();
      var n2 = t2.clone();
      return this.destructor(r2), n2;
    }
    function a2() {
      return this.isSmartPointer ? xr(this.registeredClass.instancePrototype, {
        ptrType: this.pointeeType,
        ptr: e3,
        smartPtrType: this,
        smartPtr: r2
      }) : xr(this.registeredClass.instancePrototype, {
        ptrType: this,
        ptr: r2
      });
    }
    var o2, i2 = this.registeredClass.getActualType(e3), s2 = Wr[i2];
    if (!s2) return a2.call(this);
    o2 = this.isConst ? s2.constPointerType : s2.pointerType;
    var u2 = Ar(e3, this.registeredClass, o2.registeredClass);
    return null === u2 ? a2.call(this) : this.isSmartPointer ? xr(o2.registeredClass.instancePrototype, {
      ptrType: o2,
      ptr: u2,
      smartPtrType: this,
      smartPtr: r2
    }) : xr(o2.registeredClass.instancePrototype, {
      ptrType: o2,
      ptr: u2
    });
  }
  var Vr = (r2) => "undefined" == typeof FinalizationRegistry ? (Vr = (r3) => r3, r2) : (Tr = new FinalizationRegistry((r3) => {
    Pr(r3.$$);
  }), Vr = (r3) => {
    var e3 = r3.$$;
    if (e3.smartPtr) {
      var t2 = {
        $$: e3
      };
      Tr.register(r3, t2, r3);
    }
    return r3;
  }, br = (r3) => Tr.unregister(r3), Vr(r2)), Hr = () => {
    Object.assign(Ur.prototype, {
      isAliasOf(r2) {
        if (!(this instanceof Ur)) return false;
        if (!(r2 instanceof Ur)) return false;
        var e3 = this.$$.ptrType.registeredClass, t2 = this.$$.ptr;
        r2.$$ = r2.$$;
        for (var n2 = r2.$$.ptrType.registeredClass, a2 = r2.$$.ptr; e3.baseClass; ) t2 = e3.upcast(t2), e3 = e3.baseClass;
        for (; n2.baseClass; ) a2 = n2.upcast(a2), n2 = n2.baseClass;
        return e3 === n2 && t2 === a2;
      },
      clone() {
        if (this.$$.ptr || wr(this), this.$$.preservePointerOnDelete) return this.$$.count.value += 1, this;
        var r2 = Vr(Object.create(Object.getPrototypeOf(this), {
          $$: {
            value: $r(this.$$)
          }
        }));
        return r2.$$.count.value += 1, r2.$$.deleteScheduled = false, r2;
      },
      delete() {
        this.$$.ptr || wr(this), this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && dr("Object already scheduled for deletion"), br(this), Pr(this.$$), this.$$.preservePointerOnDelete || (this.$$.smartPtr = void 0, this.$$.ptr = void 0);
      },
      isDeleted() {
        return !this.$$.ptr;
      },
      deleteLater() {
        return this.$$.ptr || wr(this), this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && dr("Object already scheduled for deletion"), Sr.push(this), 1 === Sr.length && yr && yr(Or), this.$$.deleteScheduled = true, this;
      }
    });
  };
  function Ur() {
  }
  var Br = (r2, e3) => Object.defineProperty(e3, "name", {
    value: r2
  }), Nr = (r2, e3, t2) => {
    if (void 0 === r2[e3].overloadTable) {
      var n2 = r2[e3];
      r2[e3] = function(...n3) {
        return r2[e3].overloadTable.hasOwnProperty(n3.length) || dr(`Function '${t2}' called with an invalid number of arguments (${n3.length}) - expects one of (${r2[e3].overloadTable})!`), r2[e3].overloadTable[n3.length].apply(this, n3);
      }, r2[e3].overloadTable = [], r2[e3].overloadTable[n2.argCount] = n2;
    }
  }, Mr = (r2, e3, t2) => {
    a.hasOwnProperty(r2) ? ((void 0 === t2 || void 0 !== a[r2].overloadTable && void 0 !== a[r2].overloadTable[t2]) && dr(`Cannot register public name '${r2}' twice`), Nr(a, r2, r2), a.hasOwnProperty(t2) && dr(`Cannot register multiple overloads of a function with the same number of arguments (${t2})!`), a[r2].overloadTable[t2] = e3) : (a[r2] = e3, void 0 !== t2 && (a[r2].numArguments = t2));
  }, zr = 48, qr = 57, Gr = (r2) => {
    if (void 0 === r2) return "_unknown";
    var e3 = (r2 = r2.replace(/[^a-zA-Z0-9_]/g, "$")).charCodeAt(0);
    return e3 >= zr && e3 <= qr ? `_${r2}` : r2;
  };
  function Lr(r2, e3, t2, n2, a2, o2, i2, s2) {
    this.name = r2, this.constructor = e3, this.instancePrototype = t2, this.rawDestructor = n2, this.baseClass = a2, this.getActualType = o2, this.upcast = i2, this.downcast = s2, this.pureVirtualFunctions = [];
  }
  var Jr = (r2, e3, t2) => {
    for (; e3 !== t2; ) e3.upcast || dr(`Expected null or instance of ${t2.name}, got an instance of ${e3.name}`), r2 = e3.upcast(r2), e3 = e3.baseClass;
    return r2;
  };
  function Kr(r2, e3) {
    if (null === e3) return this.isReference && dr(`null is not a valid ${this.name}`), 0;
    e3.$$ || dr(`Cannot pass "${Re(e3)}" as a ${this.name}`), e3.$$.ptr || dr(`Cannot pass deleted object as a pointer of type ${this.name}`);
    var t2 = e3.$$.ptrType.registeredClass;
    return Jr(e3.$$.ptr, t2, this.registeredClass);
  }
  function Qr(r2, e3) {
    var t2;
    if (null === e3) return this.isReference && dr(`null is not a valid ${this.name}`), this.isSmartPointer ? (t2 = this.rawConstructor(), null !== r2 && r2.push(this.rawDestructor, t2), t2) : 0;
    e3 && e3.$$ || dr(`Cannot pass "${Re(e3)}" as a ${this.name}`), e3.$$.ptr || dr(`Cannot pass deleted object as a pointer of type ${this.name}`), !this.isConst && e3.$$.ptrType.isConst && dr(`Cannot convert argument of type ${e3.$$.smartPtrType ? e3.$$.smartPtrType.name : e3.$$.ptrType.name} to parameter type ${this.name}`);
    var n2 = e3.$$.ptrType.registeredClass;
    if (t2 = Jr(e3.$$.ptr, n2, this.registeredClass), this.isSmartPointer) switch (void 0 === e3.$$.smartPtr && dr("Passing raw pointer to smart pointer is illegal"), this.sharingPolicy) {
      case 0:
        e3.$$.smartPtrType === this ? t2 = e3.$$.smartPtr : dr(`Cannot convert argument of type ${e3.$$.smartPtrType ? e3.$$.smartPtrType.name : e3.$$.ptrType.name} to parameter type ${this.name}`);
        break;
      case 1:
        t2 = e3.$$.smartPtr;
        break;
      case 2:
        if (e3.$$.smartPtrType === this) t2 = e3.$$.smartPtr;
        else {
          var a2 = e3.clone();
          t2 = this.rawShare(t2, _e.toHandle(() => a2.delete())), null !== r2 && r2.push(this.rawDestructor, t2);
        }
        break;
      default:
        dr("Unsupporting sharing policy");
    }
    return t2;
  }
  function Zr(r2, e3) {
    if (null === e3) return this.isReference && dr(`null is not a valid ${this.name}`), 0;
    e3.$$ || dr(`Cannot pass "${Re(e3)}" as a ${this.name}`), e3.$$.ptr || dr(`Cannot pass deleted object as a pointer of type ${this.name}`), e3.$$.ptrType.isConst && dr(`Cannot convert argument of type ${e3.$$.ptrType.name} to parameter type ${this.name}`);
    var t2 = e3.$$.ptrType.registeredClass;
    return Jr(e3.$$.ptr, t2, this.registeredClass);
  }
  var Xr = () => {
    Object.assign(Yr.prototype, {
      getPointee(r2) {
        return this.rawGetPointee && (r2 = this.rawGetPointee(r2)), r2;
      },
      destructor(r2) {
        this.rawDestructor?.(r2);
      },
      argPackAdvance: mr,
      readValueFromPointer: rr,
      fromWireType: Ir
    });
  };
  function Yr(r2, e3, t2, n2, a2, o2, i2, s2, u2, c2, l2) {
    this.name = r2, this.registeredClass = e3, this.isReference = t2, this.isConst = n2, this.isSmartPointer = a2, this.pointeeType = o2, this.sharingPolicy = i2, this.rawGetPointee = s2, this.rawConstructor = u2, this.rawShare = c2, this.rawDestructor = l2, a2 || void 0 !== e3.baseClass ? this.toWireType = Qr : n2 ? (this.toWireType = Kr, this.destructorFunction = null) : (this.toWireType = Zr, this.destructorFunction = null);
  }
  var re, ee, te = (r2, e3, t2) => {
    a.hasOwnProperty(r2) || sr("Replacing nonexistent public symbol"), void 0 !== a[r2].overloadTable && void 0 !== t2 ? a[r2].overloadTable[t2] = e3 : (a[r2] = e3, a[r2].argCount = t2);
  }, ne = (r2, e3, t2) => (r2 = r2.replace(/p/g, "i"), (0, a["dynCall_" + r2])(e3, ...t2)), ae = [], oe = (r2) => {
    var e3 = ae[r2];
    return e3 || (r2 >= ae.length && (ae.length = r2 + 1), ae[r2] = e3 = re.get(r2)), e3;
  }, ie = (r2, e3, t2 = []) => r2.includes("j") ? ne(r2, e3, t2) : oe(e3)(...t2), se = (r2, e3) => (...t2) => ie(r2, e3, t2), ue = (r2, e3) => {
    function t2() {
      return r2.includes("j") ? se(r2, e3) : oe(e3);
    }
    r2 = hr(r2);
    var n2 = t2();
    return "function" != typeof n2 && dr(`unknown function pointer with signature ${r2}: ${e3}`), n2;
  }, ce = (r2, e3) => {
    var t2 = Br(e3, function(r3) {
      this.name = e3, this.message = r3;
      var t3 = new Error(r3).stack;
      void 0 !== t3 && (this.stack = this.toString() + "\n" + t3.replace(/^Error(:[^\n]*)?\n/, ""));
    });
    return t2.prototype = Object.create(r2.prototype), t2.prototype.constructor = t2, t2.prototype.toString = function() {
      return void 0 === this.message ? this.name : `${this.name}: ${this.message}`;
    }, t2;
  }, le = (r2) => {
    var e3 = Rt(r2), t2 = hr(e3);
    return xt(e3), t2;
  }, pe = (r2, e3) => {
    var t2 = [], n2 = {};
    function a2(r3) {
      n2[r3] || or[r3] || (ir[r3] ? ir[r3].forEach(a2) : (t2.push(r3), n2[r3] = true));
    }
    throw e3.forEach(a2), new ee(`${r2}: ` + t2.map(le).join([", "]));
  }, he = (r2, e3, t2, n2, a2, o2, i2, s2, u2, c2, l2, p2, h2) => {
    l2 = hr(l2), o2 = ue(a2, o2), s2 &&= ue(i2, s2), c2 &&= ue(u2, c2), h2 = ue(p2, h2);
    var d2 = Gr(l2);
    Mr(d2, function() {
      pe(`Cannot construct ${l2} due to unbound types`, [n2]);
    }), ur([r2, e3, t2], n2 ? [n2] : [], (e4) => {
      var t3, a3;
      e4 = e4[0], a3 = n2 ? (t3 = e4.registeredClass).instancePrototype : Ur.prototype;
      var i3 = Br(l2, function(...r3) {
        if (Object.getPrototypeOf(this) !== u3) throw new nr("Use 'new' to construct " + l2);
        if (void 0 === p3.constructor_body) throw new nr(l2 + " has no accessible constructor");
        var e5 = p3.constructor_body[r3.length];
        if (void 0 === e5) throw new nr(`Tried to invoke ctor of ${l2} with invalid number of parameters (${r3.length}) - expected (${Object.keys(p3.constructor_body).toString()}) parameters instead!`);
        return e5.apply(this, r3);
      }), u3 = Object.create(a3, {
        constructor: {
          value: i3
        }
      });
      i3.prototype = u3;
      var p3 = new Lr(l2, i3, u3, h2, t3, o2, s2, c2);
      p3.baseClass && (p3.baseClass.__derivedClasses ??= [], p3.baseClass.__derivedClasses.push(p3));
      var f2 = new Yr(l2, p3, true, false, false), v2 = new Yr(l2 + "*", p3, false, false, false), y2 = new Yr(l2 + " const*", p3, false, true, false);
      return Wr[r2] = {
        pointerType: v2,
        constPointerType: y2
      }, te(d2, i3), [f2, v2, y2];
    });
  }, de = (r2, e3) => {
    for (var t2 = [], n2 = 0; n2 < r2; n2++) t2.push($[e3 + 4 * n2 >> 2]);
    return t2;
  };
  function fe(r2) {
    for (var e3 = 1; e3 < r2.length; ++e3) if (null !== r2[e3] && void 0 === r2[e3].destructorFunction) return true;
    return false;
  }
  function ve(r2, e3) {
    if (!(r2 instanceof Function)) throw new TypeError(`new_ called with constructor type ${typeof r2} which is not a function`);
    var t2 = Br(r2.name || "unknownFunctionName", function() {
    });
    t2.prototype = r2.prototype;
    var n2 = new t2(), a2 = r2.apply(n2, e3);
    return a2 instanceof Object ? a2 : n2;
  }
  function ye(r2, e3, t2, n2) {
    for (var a2 = fe(r2), o2 = r2.length, i2 = "", s2 = "", u2 = 0; u2 < o2 - 2; ++u2) i2 += (0 !== u2 ? ", " : "") + "arg" + u2, s2 += (0 !== u2 ? ", " : "") + "arg" + u2 + "Wired";
    var c2 = `
        return function (${i2}) {
        if (arguments.length !== ${o2 - 2}) {
          throwBindingError('function ' + humanName + ' called with ' + arguments.length + ' arguments, expected ${o2 - 2}');
        }`;
    a2 && (c2 += "var destructors = [];\n");
    var l2 = a2 ? "destructors" : "null", p2 = ["humanName", "throwBindingError", "invoker", "fn", "runDestructors", "retType", "classParam"];
    for (e3 && (c2 += "var thisWired = classParam['toWireType'](" + l2 + ", this);\n"), u2 = 0; u2 < o2 - 2; ++u2) c2 += "var arg" + u2 + "Wired = argType" + u2 + "['toWireType'](" + l2 + ", arg" + u2 + ");\n", p2.push("argType" + u2);
    if (e3 && (s2 = "thisWired" + (s2.length > 0 ? ", " : "") + s2), c2 += (t2 || n2 ? "var rv = " : "") + "invoker(fn" + (s2.length > 0 ? ", " : "") + s2 + ");\n", a2) c2 += "runDestructors(destructors);\n";
    else for (u2 = e3 ? 1 : 2; u2 < r2.length; ++u2) {
      var h2 = 1 === u2 ? "thisWired" : "arg" + (u2 - 2) + "Wired";
      null !== r2[u2].destructorFunction && (c2 += `${h2}_dtor(${h2});
`, p2.push(`${h2}_dtor`));
    }
    return t2 && (c2 += "var ret = retType['fromWireType'](rv);\nreturn ret;\n"), [p2, c2 += "}\n"];
  }
  function me(r2, e3, t2, n2, a2, o2) {
    var i2 = e3.length;
    i2 < 2 && dr("argTypes array size mismatch! Must at least get return value and 'this' types!");
    for (var s2 = null !== e3[1] && null !== t2, u2 = fe(e3), c2 = "void" !== e3[0].name, l2 = [r2, dr, n2, a2, Y, e3[0], e3[1]], p2 = 0; p2 < i2 - 2; ++p2) l2.push(e3[p2 + 2]);
    if (!u2) for (p2 = s2 ? 1 : 2; p2 < e3.length; ++p2) null !== e3[p2].destructorFunction && l2.push(e3[p2].destructorFunction);
    let [h2, d2] = ye(e3, s2, c2, o2);
    h2.push(d2);
    var f2 = ve(Function, h2)(...l2);
    return Br(r2, f2);
  }
  var ge = (r2, e3, t2, n2, a2, o2) => {
    var i2 = de(e3, t2);
    a2 = ue(n2, a2), ur([], [r2], (r3) => {
      var t3 = `constructor ${(r3 = r3[0]).name}`;
      if (void 0 === r3.registeredClass.constructor_body && (r3.registeredClass.constructor_body = []), void 0 !== r3.registeredClass.constructor_body[e3 - 1]) throw new nr(`Cannot register multiple constructors with identical number of parameters (${e3 - 1}) for class '${r3.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);
      return r3.registeredClass.constructor_body[e3 - 1] = () => {
        pe(`Cannot construct ${r3.name} due to unbound types`, i2);
      }, ur([], i2, (n3) => (n3.splice(1, 0, null), r3.registeredClass.constructor_body[e3 - 1] = me(t3, n3, null, a2, o2), [])), [];
    });
  }, $e = (r2) => {
    const e3 = (r2 = r2.trim()).indexOf("(");
    return -1 !== e3 ? r2.substr(0, e3) : r2;
  }, we = (r2, e3, t2, n2, a2, o2, i2, s2, u2) => {
    var c2 = de(t2, n2);
    e3 = hr(e3), e3 = $e(e3), o2 = ue(a2, o2), ur([], [r2], (r3) => {
      var n3 = `${(r3 = r3[0]).name}.${e3}`;
      function a3() {
        pe(`Cannot call ${n3} due to unbound types`, c2);
      }
      e3.startsWith("@@") && (e3 = Symbol[e3.substring(2)]), s2 && r3.registeredClass.pureVirtualFunctions.push(e3);
      var l2 = r3.registeredClass.instancePrototype, p2 = l2[e3];
      return void 0 === p2 || void 0 === p2.overloadTable && p2.className !== r3.name && p2.argCount === t2 - 2 ? (a3.argCount = t2 - 2, a3.className = r3.name, l2[e3] = a3) : (Nr(l2, e3, n3), l2[e3].overloadTable[t2 - 2] = a3), ur([], c2, (a4) => {
        var s3 = me(n3, a4, r3, o2, i2, u2);
        return void 0 === l2[e3].overloadTable ? (s3.argCount = t2 - 2, l2[e3] = s3) : l2[e3].overloadTable[t2 - 2] = s3, [];
      }), [];
    });
  }, Te = (r2, e3, t2) => {
    r2 = hr(r2), ur([], [e3], (e4) => (e4 = e4[0], a[r2] = e4.fromWireType(t2), []));
  }, be = [], Ce = [], Pe = (r2) => {
    r2 > 9 && 0 == --Ce[r2 + 1] && (Ce[r2] = void 0, be.push(r2));
  }, Ae = () => Ce.length / 2 - 5 - be.length, We = () => {
    Ce.push(0, 1, void 0, 1, null, 1, true, 1, false, 1), a.count_emval_handles = Ae;
  }, _e = {
    toValue: (r2) => (r2 || dr("Cannot use deleted val. handle = " + r2), Ce[r2]),
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
          const e3 = be.pop() || Ce.length;
          return Ce[e3] = r2, Ce[e3 + 1] = 1, e3;
        }
      }
    }
  }, Fe = {
    name: "emscripten::val",
    fromWireType: (r2) => {
      var e3 = _e.toValue(r2);
      return Pe(r2), e3;
    },
    toWireType: (r2, e3) => _e.toHandle(e3),
    argPackAdvance: mr,
    readValueFromPointer: rr,
    destructorFunction: null
  }, Se = (r2) => vr(r2, Fe), Oe = (r2, e3, t2) => {
    switch (e3) {
      case 1:
        return t2 ? function(r3) {
          return this.fromWireType(f[r3]);
        } : function(r3) {
          return this.fromWireType(v[r3]);
        };
      case 2:
        return t2 ? function(r3) {
          return this.fromWireType(y[r3 >> 1]);
        } : function(r3) {
          return this.fromWireType(m[r3 >> 1]);
        };
      case 4:
        return t2 ? function(r3) {
          return this.fromWireType(g[r3 >> 2]);
        } : function(r3) {
          return this.fromWireType($[r3 >> 2]);
        };
      default:
        throw new TypeError(`invalid integer width (${e3}): ${r2}`);
    }
  }, je = (r2, e3, t2, n2) => {
    function a2() {
    }
    e3 = hr(e3), a2.values = {}, vr(r2, {
      name: e3,
      constructor: a2,
      fromWireType: function(r3) {
        return this.constructor.values[r3];
      },
      toWireType: (r3, e4) => e4.value,
      argPackAdvance: mr,
      readValueFromPointer: Oe(e3, t2, n2),
      destructorFunction: null
    }), Mr(e3, a2);
  }, ke = (r2, e3) => {
    var t2 = or[r2];
    return void 0 === t2 && dr(`${e3} has unknown type ${le(r2)}`), t2;
  }, Ee = (r2, e3, t2) => {
    var n2 = ke(r2, "enum");
    e3 = hr(e3);
    var a2 = n2.constructor, o2 = Object.create(n2.constructor.prototype, {
      value: {
        value: t2
      },
      constructor: {
        value: Br(`${n2.name}_${e3}`, function() {
        })
      }
    });
    a2.values[t2] = o2, a2[e3] = o2;
  }, Re = (r2) => {
    if (null === r2) return "null";
    var e3 = typeof r2;
    return "object" === e3 || "array" === e3 || "function" === e3 ? r2.toString() : "" + r2;
  }, De = (r2, e3) => {
    switch (e3) {
      case 4:
        return function(r3) {
          return this.fromWireType(w[r3 >> 2]);
        };
      case 8:
        return function(r3) {
          return this.fromWireType(T[r3 >> 3]);
        };
      default:
        throw new TypeError(`invalid float width (${e3}): ${r2}`);
    }
  }, xe = (r2, e3, t2) => {
    vr(r2, {
      name: e3 = hr(e3),
      fromWireType: (r3) => r3,
      toWireType: (r3, e4) => e4,
      argPackAdvance: mr,
      readValueFromPointer: De(e3, t2),
      destructorFunction: null
    });
  }, Ie = (r2, e3, t2, n2, a2, o2, i2) => {
    var s2 = de(e3, t2);
    r2 = hr(r2), r2 = $e(r2), a2 = ue(n2, a2), Mr(r2, function() {
      pe(`Cannot call ${r2} due to unbound types`, s2);
    }, e3 - 1), ur([], s2, (t3) => {
      var n3 = [t3[0], null].concat(t3.slice(1));
      return te(r2, me(r2, n3, null, a2, o2, i2), e3 - 1), [];
    });
  }, Ve = (r2, e3, t2) => {
    switch (e3) {
      case 1:
        return t2 ? (r3) => f[r3] : (r3) => v[r3];
      case 2:
        return t2 ? (r3) => y[r3 >> 1] : (r3) => m[r3 >> 1];
      case 4:
        return t2 ? (r3) => g[r3 >> 2] : (r3) => $[r3 >> 2];
      default:
        throw new TypeError(`invalid integer width (${e3}): ${r2}`);
    }
  }, He = (r2, e3, t2, n2, a2) => {
    e3 = hr(e3);
    var o2 = (r3) => r3;
    if (0 === n2) {
      var i2 = 32 - 8 * t2;
      o2 = (r3) => r3 << i2 >>> i2;
    }
    var s2 = e3.includes("unsigned"), u2 = (r3, e4) => {
    };
    vr(r2, {
      name: e3,
      fromWireType: o2,
      toWireType: s2 ? function(r3, e4) {
        return u2(e4, this.name), e4 >>> 0;
      } : function(r3, e4) {
        return u2(e4, this.name), e4;
      },
      argPackAdvance: mr,
      readValueFromPointer: Ve(e3, t2, 0 !== n2),
      destructorFunction: null
    });
  }, Ue = (r2, e3, t2) => {
    var n2 = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][e3];
    function a2(r3) {
      var e4 = $[r3 >> 2], t3 = $[r3 + 4 >> 2];
      return new n2(f.buffer, t3, e4);
    }
    vr(r2, {
      name: t2 = hr(t2),
      fromWireType: a2,
      argPackAdvance: mr,
      readValueFromPointer: a2
    }, {
      ignoreDuplicateRegistrations: true
    });
  }, Be = (r2, e3, t2, n2) => {
    if (!(n2 > 0)) return 0;
    for (var a2 = t2, o2 = t2 + n2 - 1, i2 = 0; i2 < r2.length; ++i2) {
      var s2 = r2.charCodeAt(i2);
      if (s2 >= 55296 && s2 <= 57343 && (s2 = 65536 + ((1023 & s2) << 10) | 1023 & r2.charCodeAt(++i2)), s2 <= 127) {
        if (t2 >= o2) break;
        e3[t2++] = s2;
      } else if (s2 <= 2047) {
        if (t2 + 1 >= o2) break;
        e3[t2++] = 192 | s2 >> 6, e3[t2++] = 128 | 63 & s2;
      } else if (s2 <= 65535) {
        if (t2 + 2 >= o2) break;
        e3[t2++] = 224 | s2 >> 12, e3[t2++] = 128 | s2 >> 6 & 63, e3[t2++] = 128 | 63 & s2;
      } else {
        if (t2 + 3 >= o2) break;
        e3[t2++] = 240 | s2 >> 18, e3[t2++] = 128 | s2 >> 12 & 63, e3[t2++] = 128 | s2 >> 6 & 63, e3[t2++] = 128 | 63 & s2;
      }
    }
    return e3[t2] = 0, t2 - a2;
  }, Ne = (r2, e3, t2) => Be(r2, v, e3, t2), Me = (r2) => {
    for (var e3 = 0, t2 = 0; t2 < r2.length; ++t2) {
      var n2 = r2.charCodeAt(t2);
      n2 <= 127 ? e3++ : n2 <= 2047 ? e3 += 2 : n2 >= 55296 && n2 <= 57343 ? (e3 += 4, ++t2) : e3 += 3;
    }
    return e3;
  }, ze = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0, qe = (r2, e3, t2) => {
    for (var n2 = e3 + t2, a2 = e3; r2[a2] && !(a2 >= n2); ) ++a2;
    if (a2 - e3 > 16 && r2.buffer && ze) return ze.decode(r2.subarray(e3, a2));
    for (var o2 = ""; e3 < a2; ) {
      var i2 = r2[e3++];
      if (128 & i2) {
        var s2 = 63 & r2[e3++];
        if (192 != (224 & i2)) {
          var u2 = 63 & r2[e3++];
          if ((i2 = 224 == (240 & i2) ? (15 & i2) << 12 | s2 << 6 | u2 : (7 & i2) << 18 | s2 << 12 | u2 << 6 | 63 & r2[e3++]) < 65536) o2 += String.fromCharCode(i2);
          else {
            var c2 = i2 - 65536;
            o2 += String.fromCharCode(55296 | c2 >> 10, 56320 | 1023 & c2);
          }
        } else o2 += String.fromCharCode((31 & i2) << 6 | s2);
      } else o2 += String.fromCharCode(i2);
    }
    return o2;
  }, Ge = (r2, e3) => r2 ? qe(v, r2, e3) : "", Le = (r2, e3) => {
    var t2 = "std::string" === (e3 = hr(e3));
    vr(r2, {
      name: e3,
      fromWireType(r3) {
        var e4, n2 = $[r3 >> 2], a2 = r3 + 4;
        if (t2) for (var o2 = a2, i2 = 0; i2 <= n2; ++i2) {
          var s2 = a2 + i2;
          if (i2 == n2 || 0 == v[s2]) {
            var u2 = Ge(o2, s2 - o2);
            void 0 === e4 ? e4 = u2 : (e4 += String.fromCharCode(0), e4 += u2), o2 = s2 + 1;
          }
        }
        else {
          var c2 = new Array(n2);
          for (i2 = 0; i2 < n2; ++i2) c2[i2] = String.fromCharCode(v[a2 + i2]);
          e4 = c2.join("");
        }
        return xt(r3), e4;
      },
      toWireType(r3, e4) {
        var n2;
        e4 instanceof ArrayBuffer && (e4 = new Uint8Array(e4));
        var a2 = "string" == typeof e4;
        a2 || e4 instanceof Uint8Array || e4 instanceof Uint8ClampedArray || e4 instanceof Int8Array || dr("Cannot pass non-string to std::string"), n2 = t2 && a2 ? Me(e4) : e4.length;
        var o2 = Dt(4 + n2 + 1), i2 = o2 + 4;
        if ($[o2 >> 2] = n2, t2 && a2) Ne(e4, i2, n2 + 1);
        else if (a2) for (var s2 = 0; s2 < n2; ++s2) {
          var u2 = e4.charCodeAt(s2);
          u2 > 255 && (xt(i2), dr("String has UTF-16 code units that do not fit in 8 bits")), v[i2 + s2] = u2;
        }
        else for (s2 = 0; s2 < n2; ++s2) v[i2 + s2] = e4[s2];
        return null !== r3 && r3.push(xt, o2), o2;
      },
      argPackAdvance: mr,
      readValueFromPointer: rr,
      destructorFunction(r3) {
        xt(r3);
      }
    });
  }, Je = "undefined" != typeof TextDecoder ? new TextDecoder("utf-16le") : void 0, Ke = (r2, e3) => {
    for (var t2 = r2, n2 = t2 >> 1, a2 = n2 + e3 / 2; !(n2 >= a2) && m[n2]; ) ++n2;
    if ((t2 = n2 << 1) - r2 > 32 && Je) return Je.decode(v.subarray(r2, t2));
    for (var o2 = "", i2 = 0; !(i2 >= e3 / 2); ++i2) {
      var s2 = y[r2 + 2 * i2 >> 1];
      if (0 == s2) break;
      o2 += String.fromCharCode(s2);
    }
    return o2;
  }, Qe = (r2, e3, t2) => {
    if (t2 ??= 2147483647, t2 < 2) return 0;
    for (var n2 = e3, a2 = (t2 -= 2) < 2 * r2.length ? t2 / 2 : r2.length, o2 = 0; o2 < a2; ++o2) {
      var i2 = r2.charCodeAt(o2);
      y[e3 >> 1] = i2, e3 += 2;
    }
    return y[e3 >> 1] = 0, e3 - n2;
  }, Ze = (r2) => 2 * r2.length, Xe = (r2, e3) => {
    for (var t2 = 0, n2 = ""; !(t2 >= e3 / 4); ) {
      var a2 = g[r2 + 4 * t2 >> 2];
      if (0 == a2) break;
      if (++t2, a2 >= 65536) {
        var o2 = a2 - 65536;
        n2 += String.fromCharCode(55296 | o2 >> 10, 56320 | 1023 & o2);
      } else n2 += String.fromCharCode(a2);
    }
    return n2;
  }, Ye = (r2, e3, t2) => {
    if (t2 ??= 2147483647, t2 < 4) return 0;
    for (var n2 = e3, a2 = n2 + t2 - 4, o2 = 0; o2 < r2.length; ++o2) {
      var i2 = r2.charCodeAt(o2);
      if (i2 >= 55296 && i2 <= 57343 && (i2 = 65536 + ((1023 & i2) << 10) | 1023 & r2.charCodeAt(++o2)), g[e3 >> 2] = i2, (e3 += 4) + 4 > a2) break;
    }
    return g[e3 >> 2] = 0, e3 - n2;
  }, rt = (r2) => {
    for (var e3 = 0, t2 = 0; t2 < r2.length; ++t2) {
      var n2 = r2.charCodeAt(t2);
      n2 >= 55296 && n2 <= 57343 && ++t2, e3 += 4;
    }
    return e3;
  }, et = (r2, e3, t2) => {
    var n2, a2, o2, i2;
    t2 = hr(t2), 2 === e3 ? (n2 = Ke, a2 = Qe, i2 = Ze, o2 = (r3) => m[r3 >> 1]) : 4 === e3 && (n2 = Xe, a2 = Ye, i2 = rt, o2 = (r3) => $[r3 >> 2]), vr(r2, {
      name: t2,
      fromWireType: (r3) => {
        for (var t3, a3 = $[r3 >> 2], i3 = r3 + 4, s2 = 0; s2 <= a3; ++s2) {
          var u2 = r3 + 4 + s2 * e3;
          if (s2 == a3 || 0 == o2(u2)) {
            var c2 = n2(i3, u2 - i3);
            void 0 === t3 ? t3 = c2 : (t3 += String.fromCharCode(0), t3 += c2), i3 = u2 + e3;
          }
        }
        return xt(r3), t3;
      },
      toWireType: (r3, n3) => {
        "string" != typeof n3 && dr(`Cannot pass non-string to C++ string type ${t2}`);
        var o3 = i2(n3), s2 = Dt(4 + o3 + e3);
        return $[s2 >> 2] = o3 / e3, a2(n3, s2 + 4, o3 + e3), null !== r3 && r3.push(xt, s2), s2;
      },
      argPackAdvance: mr,
      readValueFromPointer: rr,
      destructorFunction(r3) {
        xt(r3);
      }
    });
  }, tt = (r2, e3, t2, n2, a2, o2) => {
    X[r2] = {
      name: hr(e3),
      rawConstructor: ue(t2, n2),
      rawDestructor: ue(a2, o2),
      fields: []
    };
  }, nt = (r2, e3, t2, n2, a2, o2, i2, s2, u2, c2) => {
    X[r2].fields.push({
      fieldName: hr(e3),
      getterReturnType: t2,
      getter: ue(n2, a2),
      getterContext: o2,
      setterArgumentType: i2,
      setter: ue(s2, u2),
      setterContext: c2
    });
  }, at = (r2, e3) => {
    vr(r2, {
      isVoid: true,
      name: e3 = hr(e3),
      argPackAdvance: 0,
      fromWireType: () => {
      },
      toWireType: (r3, e4) => {
      }
    });
  }, ot = (r2, e3, t2) => v.copyWithin(r2, e3, e3 + t2), it = (r2, e3, t2) => {
    var n2 = [], a2 = r2.toWireType(n2, t2);
    return n2.length && ($[e3 >> 2] = _e.toHandle(n2)), a2;
  }, st = (r2, e3, t2) => (r2 = _e.toValue(r2), e3 = ke(e3, "emval::as"), it(e3, t2, r2)), ut = [], ct = (r2, e3, t2, n2) => (r2 = ut[r2])(null, e3 = _e.toValue(e3), t2, n2), lt = {}, pt = (r2) => {
    var e3 = lt[r2];
    return void 0 === e3 ? hr(r2) : e3;
  }, ht = (r2, e3, t2, n2, a2) => (r2 = ut[r2])(e3 = _e.toValue(e3), e3[t2 = pt(t2)], n2, a2), dt = () => "object" == typeof globalThis ? globalThis : Function("return this")(), ft = (r2) => 0 === r2 ? _e.toHandle(dt()) : (r2 = pt(r2), _e.toHandle(dt()[r2])), vt = (r2) => {
    var e3 = ut.length;
    return ut.push(r2), e3;
  }, yt = (r2, e3) => {
    for (var t2 = new Array(r2), n2 = 0; n2 < r2; ++n2) t2[n2] = ke($[e3 + 4 * n2 >> 2], "parameter " + n2);
    return t2;
  }, mt = (r2, e3, t2) => {
    var n2 = yt(r2, e3), a2 = n2.shift();
    r2--;
    var o2 = "return function (obj, func, destructorsRef, args) {\n", i2 = 0, s2 = [];
    0 === t2 && s2.push("obj");
    for (var u2 = ["retType"], c2 = [a2], l2 = 0; l2 < r2; ++l2) s2.push("arg" + l2), u2.push("argType" + l2), c2.push(n2[l2]), o2 += `  var arg${l2} = argType${l2}.readValueFromPointer(args${i2 ? "+" + i2 : ""});
`, i2 += n2[l2].argPackAdvance;
    o2 += `  var rv = ${1 === t2 ? "new func" : "func.call"}(${s2.join(", ")});
`, a2.isVoid || (u2.push("emval_returnValue"), c2.push(it), o2 += "  return emval_returnValue(retType, destructorsRef, rv);\n"), o2 += "};\n", u2.push(o2);
    var p2 = ve(Function, u2)(...c2), h2 = `methodCaller<(${n2.map((r3) => r3.name).join(", ")}) => ${a2.name}>`;
    return vt(Br(h2, p2));
  }, gt = (r2) => (r2 = pt(r2), _e.toHandle(a[r2])), $t = (r2, e3) => (r2 = _e.toValue(r2), e3 = _e.toValue(e3), _e.toHandle(r2[e3])), wt = (r2) => {
    r2 > 9 && (Ce[r2 + 1] += 1);
  }, Tt = (r2) => _e.toHandle(pt(r2)), bt = (r2) => {
    var e3 = _e.toValue(r2);
    Y(e3), Pe(r2);
  }, Ct = () => 2147483648, Pt = (r2) => {
    var e3 = (r2 - p.buffer.byteLength + 65535) / 65536;
    try {
      return p.grow(e3), C(), 1;
    } catch (t2) {
    }
  }, At = (r2) => {
    var e3 = v.length;
    r2 >>>= 0;
    var t2 = Ct();
    if (r2 > t2) return false;
    for (var n2 = (r3, e4) => r3 + (e4 - r3 % e4) % e4, a2 = 1; a2 <= 4; a2 *= 2) {
      var o2 = e3 * (1 + 0.2 / a2);
      o2 = Math.min(o2, r2 + 100663296);
      var i2 = Math.min(t2, n2(Math.max(r2, o2), 65536));
      if (Pt(i2)) return true;
    }
    return false;
  }, Wt = (r2) => 52;
  function _t(r2, e3, t2, n2, a2) {
    return 70;
  }
  var Ft = [null, [], []], St = (r2, e3) => {
    var t2 = Ft[r2];
    0 === e3 || 10 === e3 ? ((1 === r2 ? h : d)(qe(t2, 0)), t2.length = 0) : t2.push(e3);
  }, Ot = (r2, e3, t2, n2) => {
    for (var a2 = 0, o2 = 0; o2 < t2; o2++) {
      var i2 = $[e3 >> 2], s2 = $[e3 + 4 >> 2];
      e3 += 8;
      for (var u2 = 0; u2 < s2; u2++) St(r2, v[i2 + u2]);
      a2 += s2;
    }
    return $[n2 >> 2] = a2, 0;
  };
  er = a.InternalError = class extends Error {
    constructor(r2) {
      super(r2), this.name = "InternalError";
    }
  }, pr(), nr = a.BindingError = class extends Error {
    constructor(r2) {
      super(r2), this.name = "BindingError";
    }
  }, Hr(), kr(), Xr(), ee = a.UnboundTypeError = ce(Error, "UnboundTypeError"), We();
  var jt, kt = {
    K: Q,
    G: Z,
    s: cr,
    C: lr,
    I: gr,
    w: he,
    v: ge,
    d: we,
    m: Te,
    H: Se,
    o: je,
    a: Ee,
    A: xe,
    k: Ie,
    l: He,
    f: Ue,
    z: Le,
    u: et,
    t: tt,
    c: nt,
    J: at,
    F: ot,
    n: st,
    q: ct,
    p: ht,
    b: Pe,
    x: ft,
    i: mt,
    r: gt,
    g: $t,
    j: wt,
    h: Tt,
    e: bt,
    D: At,
    E: Wt,
    B: _t,
    y: Ot
  }, Et = L(), Rt = (r2) => (Rt = Et.N)(r2), Dt = (r2) => (Dt = Et.O)(r2), xt = (r2) => (xt = Et.P)(r2), It = (r2) => (It = Et.R)(r2);
  function Vt() {
    function r2() {
      jt || (jt = true, a.calledRun = true, b || (F(), t(a), a.onRuntimeInitialized && a.onRuntimeInitialized(), S()));
    }
    E > 0 || (_(), E > 0 || (a.setStatus ? (a.setStatus("Running..."), setTimeout(function() {
      setTimeout(function() {
        a.setStatus("");
      }, 1), r2();
    }, 1)) : r2()));
  }
  if (a.dynCall_jiji = (r2, e3, t2, n2, o2) => (a.dynCall_jiji = Et.S)(r2, e3, t2, n2, o2), R = function r2() {
    jt || Vt(), jt || (R = r2);
  }, a.preInit) for ("function" == typeof a.preInit && (a.preInit = [a.preInit]); a.preInit.length > 0; ) a.preInit.pop()();
  return Vt(), o;
});
export {
  e as default
};
//# sourceMappingURL=basis_transcoder-TPOR6Q5Q.js.map
