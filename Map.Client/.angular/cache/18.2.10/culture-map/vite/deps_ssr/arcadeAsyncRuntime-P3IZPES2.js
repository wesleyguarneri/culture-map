import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  C,
  L,
  M as M2,
  Y,
  d,
  f as f2,
  o,
  p,
  p3 as p2,
  s as s2
} from "./chunk-2JTHDRHI.js";
import "./chunk-IIFJBCK7.js";
import {
  xn
} from "./chunk-XSIZ2PFB.js";
import "./chunk-QUICBKHP.js";
import "./chunk-6TDXQOP5.js";
import "./chunk-RCTGQZER.js";
import "./chunk-DMKOSZH7.js";
import "./chunk-A2K6JP2G.js";
import "./chunk-FSGJEX7B.js";
import {
  D
} from "./chunk-233INU7Q.js";
import {
  N
} from "./chunk-REOQMQ44.js";
import {
  B2 as B,
  E2 as E,
  G2 as G,
  H,
  J2 as J,
  M2 as M,
  O2 as O,
  Q,
  R,
  U,
  Ze,
  _,
  _e,
  a,
  ae,
  ce,
  e,
  fe,
  ge,
  me,
  n as n2,
  r,
  r2,
  s,
  s2 as s3,
  u,
  x,
  z
} from "./chunk-M633ZBOT.js";
import "./chunk-GBPPBJPA.js";
import "./chunk-IS3LAXOO.js";
import "./chunk-PDBJ6G5O.js";
import "./chunk-X5QZGB37.js";
import "./chunk-3XHDZQO5.js";
import "./chunk-2BLQXT54.js";
import "./chunk-JSWVKNBA.js";
import "./chunk-OOK3QTWF.js";
import "./chunk-7QOUHKW5.js";
import "./chunk-NHYYZMJR.js";
import "./chunk-VZ37C3ID.js";
import "./chunk-5R3HARKC.js";
import "./chunk-Q5TIVVER.js";
import "./chunk-VOOO6FU5.js";
import "./chunk-6EIBUVMG.js";
import "./chunk-I2TVVMQ6.js";
import "./chunk-5EGQYY2H.js";
import "./chunk-JKPUNUQA.js";
import "./chunk-SR7PRON4.js";
import "./chunk-HGHPYGKP.js";
import "./chunk-4DSGTDZJ.js";
import "./chunk-MRPCXIVS.js";
import "./chunk-YTKVV2Y3.js";
import "./chunk-GCVQXAS4.js";
import "./chunk-UFQD6AL4.js";
import "./chunk-EGBDRLCX.js";
import "./chunk-THZPD5CT.js";
import "./chunk-OBCA6CWH.js";
import "./chunk-2JI245BP.js";
import "./chunk-ABIG6PT5.js";
import "./chunk-ZEZ3LI2L.js";
import "./chunk-N34BRXVM.js";
import "./chunk-7QV7DHWN.js";
import "./chunk-4L4Y34YK.js";
import "./chunk-2HDBQXAR.js";
import "./chunk-RNF7VOCU.js";
import {
  n
} from "./chunk-TIRJMGGG.js";
import {
  f
} from "./chunk-ZDRQSPB6.js";
import "./chunk-DCXDXGAR.js";
import "./chunk-BCCDYCTQ.js";
import "./chunk-AYL3HQHD.js";
import "./chunk-66YQWHHE.js";
import "./chunk-2OZSYJDX.js";
import "./chunk-MZM4INJV.js";
import "./chunk-J4GMQHGL.js";
import "./chunk-MHPE4SZA.js";
import "./chunk-6SSA7P3A.js";
import "./chunk-FQBTLEUI.js";
import "./chunk-GS7Y3YOG.js";
import "./chunk-Y2HYKTTT.js";
import "./chunk-XLEC46FY.js";
import "./chunk-4AZPIP7K.js";
import "./chunk-PH6NPTP7.js";
import "./chunk-NUICEVIH.js";
import "./chunk-NXK752PZ.js";
import "./chunk-UVNLCXWD.js";
import "./chunk-PNUA7JOS.js";
import "./chunk-OR2FKGUM.js";
import "./chunk-UDMPWVPF.js";
import "./chunk-XJNKCEWL.js";
import "./chunk-AIZ3T7E3.js";
import "./chunk-6UEMNP3E.js";
import "./chunk-6WGE3IUL.js";
import "./chunk-MLYB2YW4.js";
import "./chunk-6JFGZTLU.js";
import "./chunk-2ZJE6ZFX.js";
import {
  __async
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/arcade/arcadeAsyncRuntime.js
var T = 100;
function W(e2, t) {
  return __async(this, null, function* () {
    const n3 = [];
    for (let r3 = 0; r3 < t.arguments.length; r3++) n3.push(yield Y2(e2, t.arguments[r3]));
    return n3;
  });
}
function V(e2, t, n3) {
  return __async(this, null, function* () {
    if (true === t.preparsed) return n3(e2, null, t.arguments);
    return n3(e2, t, yield W(e2, t));
  });
}
var _2 = class extends r2 {
  constructor(e2, t) {
    super(), this.definition = null, this.context = null, this.definition = e2, this.context = t;
  }
  createFunction(e2) {
    return (...t) => {
      const n3 = {
        spatialReference: this.context.spatialReference,
        console: this.context.console,
        lrucache: this.context.lrucache,
        timeZone: this.context.timeZone ?? null,
        exports: this.context.exports,
        libraryResolver: this.context.libraryResolver,
        interceptor: this.context.interceptor,
        localScope: {},
        depthCounter: {
          depth: e2.depthCounter + 1
        },
        globalScope: this.context.globalScope
      };
      if (n3.depthCounter.depth > 64) throw new a(e2, r.MaximumCallDepth, null);
      return Pe(this.definition, n3, t, null);
    };
  }
  call(e2, t) {
    return H2(e2, t, (n3, r3, o2) => {
      const l = {
        spatialReference: e2.spatialReference,
        services: e2.services,
        console: e2.console,
        libraryResolver: e2.libraryResolver,
        exports: e2.exports,
        lrucache: e2.lrucache,
        timeZone: e2.timeZone ?? null,
        interceptor: e2.interceptor,
        localScope: {},
        abortSignal: e2.abortSignal,
        globalScope: e2.globalScope,
        depthCounter: {
          depth: e2.depthCounter.depth + 1
        }
      };
      if (l.depthCounter.depth > 64) throw new a(e2, r.MaximumCallDepth, t);
      return Pe(this.definition, l, o2, t);
    });
  }
  marshalledCall(e2, t, n3, r3) {
    return r3(e2, t, (o2, a2, i) => __async(this, null, function* () {
      const l = {
        spatialReference: e2.spatialReference,
        globalScope: n3.globalScope,
        depthCounter: {
          depth: e2.depthCounter.depth + 1
        },
        libraryResolver: e2.libraryResolver,
        exports: e2.exports,
        console: e2.console,
        abortSignal: e2.abortSignal,
        lrucache: e2.lrucache,
        timeZone: e2.timeZone ?? null,
        interceptor: e2.interceptor,
        localScope: {}
      };
      return i = i.map((t2) => !_(t2) || t2 instanceof s3 ? t2 : n2(t2, e2, r3)), n2(yield Pe(this.definition, l, i, t), n3, r3);
    }));
  }
};
var z2 = class extends s {
  constructor(e2) {
    super(e2);
  }
  global(e2) {
    return __async(this, null, function* () {
      const t = this.executingContext.globalScope[e2.toLowerCase()];
      if (t.valueset || (t.value = yield Y2(this.executingContext, t.node), t.valueset = true), _(t.value) && !(t.value instanceof s3)) {
        const e3 = new s3();
        e3.fn = t.value, e3.parameterEvaluator = H2, e3.context = this.executingContext, t.value = e3;
      }
      return t.value;
    });
  }
  setGlobal(e2, t) {
    if (_(t)) throw new a(null, r.AssignModuleFunction, null);
    this.executingContext.globalScope[e2.toLowerCase()] = {
      value: t,
      valueset: true,
      node: null
    };
  }
  hasGlobal(e2) {
    return void 0 === this.executingContext.exports[e2] && (e2 = e2.toLowerCase()), void 0 !== this.executingContext.exports[e2];
  }
  loadModule(e2) {
    return __async(this, null, function* () {
      let n3 = e2.spatialReference;
      null == n3 && (n3 = new f({
        wkid: 102100
      })), this.moduleScope = Ge({}, e2.customfunctions, e2.timeZone), this.executingContext = {
        spatialReference: n3,
        services: e2.services,
        libraryResolver: new s2(e2.libraryResolver._moduleSingletons, this.source.syntax.loadedModules),
        exports: {},
        abortSignal: void 0 === e2.abortSignal || null === e2.abortSignal ? {
          aborted: false
        } : e2.abortSignal,
        globalScope: this.moduleScope,
        console: e2.console ?? Ue,
        lrucache: e2.lrucache,
        timeZone: e2.timeZone ?? null,
        interceptor: e2.interceptor,
        localScope: null,
        depthCounter: {
          depth: 1
        }
      }, yield Y2(this.executingContext, this.source.syntax);
    });
  }
};
function H2(e2, t, n3) {
  return __async(this, null, function* () {
    if (true === t.preparsed) return n3(e2, null, t.arguments);
    return n3(e2, t, yield W(e2, t));
  });
}
function Y2(e2, t, n3) {
  return __async(this, null, function* () {
    if (t.breakpoint && true !== n3) {
      const n4 = t.breakpoint();
      return yield n4, Y2(e2, t, true);
    }
    try {
      switch (t?.type) {
        case "VariableDeclarator":
          return yield xe(e2, t);
        case "ImportDeclaration":
          return yield ve(e2, t);
        case "ExportNamedDeclaration":
          return yield be(e2, t);
        case "VariableDeclaration":
          return yield Se(e2, t, 0);
        case "BlockStatement":
        case "Program":
          return yield he(e2, t);
        case "FunctionDeclaration":
          return yield ye(e2, t);
        case "ReturnStatement":
          return yield ge2(e2, t);
        case "IfStatement":
          return yield de(e2, t);
        case "ExpressionStatement":
          return yield we(e2, t);
        case "UpdateExpression":
          return yield ue(e2, t);
        case "AssignmentExpression":
          return yield pe(e2, t);
        case "ForStatement":
          return yield ne(e2, t);
        case "WhileStatement":
          return yield X(e2, t);
        case "ForInStatement":
          return yield ce2(e2, t);
        case "BreakStatement":
          return R;
        case "EmptyStatement":
          return O;
        case "ContinueStatement":
          return J;
        case "TemplateElement":
          return yield Le(e2, t);
        case "TemplateLiteral":
          return yield Ee(e2, t);
        case "Identifier":
          return yield Me(e2, t);
        case "MemberExpression":
          return yield Ie(e2, t);
        case "Literal":
          return t.value;
        case "CallExpression":
          return yield je(e2, t);
        case "UnaryExpression":
          return yield Fe(e2, t);
        case "BinaryExpression":
          return yield Re(e2, t);
        case "LogicalExpression":
          return yield Ae(e2, t);
        case "ArrayExpression":
          return yield Ce(e2, t);
        case "ObjectExpression":
          return yield J2(e2, t);
        case "Property":
          return yield Q2(e2, t);
        default:
          throw new a(e2, r.Unrecognized, t);
      }
    } catch (r3) {
      throw u(e2, t, r3);
    }
  });
}
function J2(e2, t) {
  return __async(this, null, function* () {
    const n3 = [];
    for (let o2 = 0; o2 < t.properties.length; o2++) n3[o2] = yield Y2(e2, t.properties[o2]);
    const r3 = {}, l = /* @__PURE__ */ new Map();
    for (let o2 = 0; o2 < n3.length; o2++) {
      const s5 = n3[o2];
      if (_(s5.value)) throw new a(e2, r.NoFunctionInDictionary, t);
      if (false === G(s5.key)) throw new a(e2, r.KeyMustBeString, t);
      let c = s5.key.toString();
      const u2 = c.toLowerCase();
      l.has(u2) ? c = l.get(u2) : l.set(u2, c), s5.value === O ? r3[c] = null : r3[c] = s5.value;
    }
    const s4 = new N(r3);
    return s4.immutable = false, s4;
  });
}
function Q2(e2, t) {
  return __async(this, null, function* () {
    const n3 = yield Y2(e2, t.value);
    if ("Identifier" === t.key.type) return {
      key: t.key.name,
      value: n3
    };
    return {
      key: yield Y2(e2, t.key),
      value: n3
    };
  });
}
function X(e2, t) {
  return __async(this, null, function* () {
    const n3 = {
      testResult: true,
      lastAction: O
    };
    if (n3.testResult = yield Y2(e2, t.test), false === n3.testResult) return O;
    if (true !== n3.testResult) throw new a(e2, r.BooleanConditionRequired, t);
    for (; true === n3.testResult && (n3.lastAction = yield Y2(e2, t.body), n3.lastAction !== R) && !(n3.lastAction instanceof M); ) if (n3.testResult = yield Y2(e2, t.test), true !== n3.testResult && false !== n3.testResult) throw new a(e2, r.BooleanConditionRequired, t);
    return n3.lastAction instanceof M ? n3.lastAction : O;
  });
}
function $(e2, t, n3) {
  return __async(this, null, function* () {
    const r3 = yield Y2(e2, t.body);
    return n3.lastAction = r3, n3.lastAction === R || n3.lastAction instanceof M ? (n3.testResult = false, n3) : null !== t.update ? (yield Y2(e2, t.update), n3) : n3;
  });
}
function ee(e2, t, n3) {
  return __async(this, null, function* () {
    if (null !== t.test) {
      const r3 = yield Y2(e2, t.test);
      if (true === e2.abortSignal?.aborted) throw new a(e2, r.Cancelled, t);
      if (n3.testResult = r3, false === n3.testResult) return n3;
      if (true !== n3.testResult) throw new a(e2, r.BooleanConditionRequired, t);
      return $(e2, t, n3);
    }
    return $(e2, t, n3);
  });
}
function te(e2, t, n3, r3, o2, a2) {
  try {
    ee(e2, t, n3).then(() => {
      try {
        true === n3.testResult ? ++a2 > T ? (a2 = 0, setTimeout(() => {
          te(e2, t, n3, r3, o2, a2);
        }, 0)) : te(e2, t, n3, r3, o2, a2) : n3.lastAction instanceof M ? r3(n3.lastAction) : r3(O);
      } catch (i) {
        o2(i);
      }
    }, (e3) => {
      o2(e3);
    });
  } catch (i) {
    o2(i);
  }
}
function ne(e2, t) {
  try {
    return null !== t.init ? Y2(e2, t.init).then(() => new Promise((n3, r3) => {
      te(e2, t, {
        testResult: true,
        lastAction: O
      }, (e3) => {
        n3(e3);
      }, (e3) => {
        r3(e3);
      }, 0);
    })) : new Promise((n3, r3) => {
      te(e2, t, {
        testResult: true,
        lastAction: O
      }, (e3) => {
        n3(e3);
      }, (e3) => {
        r3(e3);
      }, 0);
    });
  } catch (n3) {
    return Promise.reject(n3);
  }
}
function re(e2, t, n3, r3, o2, a2, i, l, s4, c) {
  try {
    if (r3 <= a2) return void l(O);
    o2.value = "k" === i ? n3[a2] : a2, Y2(e2, t.body).then((u2) => {
      try {
        u2 instanceof M ? l(u2) : u2 === R ? l(O) : ++c > T ? (c = 0, setTimeout(() => {
          re(e2, t, n3, r3, o2, a2 + 1, i, l, s4, c);
        }, 0)) : re(e2, t, n3, r3, o2, a2 + 1, i, l, s4, c);
      } catch (f3) {
        s4(f3);
      }
    }, (e3) => {
      s4(e3);
    });
  } catch (u2) {
    s4(u2);
  }
}
function oe(e2, t, n3, r3, o2, a2, i, l, s4) {
  try {
    if (n3.length() <= o2) return void i(O);
    r3.value = "k" === a2 ? n3.get(o2) : o2, Y2(e2, t.body).then((c) => {
      c instanceof M ? i(c) : c === R ? i(O) : ++s4 > T ? (s4 = 0, setTimeout(() => {
        oe(e2, t, n3, r3, o2 + 1, a2, i, l, s4);
      }, 0)) : oe(e2, t, n3, r3, o2 + 1, a2, i, l, s4);
    }, (e3) => {
      l(e3);
    });
  } catch (c) {
    l(c);
  }
}
function ae2(e2, t, n3, r3, o2, a2) {
  try {
    if (void 0 === a2 && (a2 = "i"), 0 === n3.length) return void r3.resolve(O);
    re(e2, t, n3, n3.length, o2, 0, a2, (e3) => {
      r3.resolve(e3);
    }, (e3) => {
      r3.reject(e3);
    }, 0);
  } catch (i) {
    r3.reject(i);
  }
}
function ie(e2, t, n3, r3, o2, a2) {
  try {
    if (void 0 === a2 && (a2 = "i"), 0 === n3.length) return void r3.resolve(O);
    oe(e2, t, n3, o2, 0, a2, (e3) => {
      r3.resolve(e3);
    }, (e3) => {
      r3.reject(e3);
    }, 0);
  } catch (i) {
    r3.reject(i);
  }
}
function le(e2, t, n3, r3, o2) {
  try {
    ae2(e2, t, n3.keys(), r3, o2, "k");
  } catch (a2) {
    r3.reject(a2);
  }
}
function se(e2, t, n3, r3, o2, a2, i, l) {
  try {
    e2.next().then((c) => {
      try {
        if (null === c) a2(O);
        else {
          const u2 = D.createFromGraphicLikeObject(c.geometry, c.attributes, r3, t.timeZone);
          u2._underlyingGraphic = c, o2.value = u2;
          Y2(t, n3.body).then((s4) => {
            try {
              s4 === R ? a2(O) : s4 instanceof M ? a2(s4) : ++l > T ? (l = 0, setTimeout(() => {
                se(e2, t, n3, r3, o2, a2, i, l);
              }, 0)) : se(e2, t, n3, r3, o2, a2, i, l);
            } catch (c2) {
              i(c2);
            }
          }, (e3) => {
            i(e3);
          });
        }
      } catch (u2) {
        i(u2);
      }
    }, (e3) => {
      i(e3);
    });
  } catch (c) {
    i(c);
  }
}
function ce2(e2, t) {
  return __async(this, null, function* () {
    return new Promise((n3, r3) => {
      Y2(e2, t.right).then((l) => {
        try {
          let s4 = null;
          s4 = "VariableDeclaration" === t.left.type ? Y2(e2, t.left) : Promise.resolve(), s4.then(() => {
            try {
              let s5 = "";
              if ("VariableDeclaration" === t.left.type) {
                const e3 = t.left.declarations[0].id;
                "Identifier" === e3.type && (s5 = e3.name);
              } else "Identifier" === t.left.type && (s5 = t.left.name);
              if (!s5) throw new a(e2, r.InvalidIdentifier, t);
              s5 = s5.toLowerCase();
              let c = null;
              if (null != e2.localScope && void 0 !== e2.localScope[s5] && (c = e2.localScope[s5]), null === c && void 0 !== e2.globalScope[s5] && (c = e2.globalScope[s5]), null === c) return void r3(new a(e2, r.InvalidIdentifier, t));
              U(l) || G(l) ? ae2(e2, t, l, {
                reject: r3,
                resolve: n3
              }, c) : Q(l) ? ie(e2, t, l, {
                reject: r3,
                resolve: n3
              }, c) : l instanceof N || H(l) ? le(e2, t, l, {
                reject: r3,
                resolve: n3
              }, c) : B(l) ? se(l.iterator(e2.abortSignal), e2, t, l, c, (e3) => {
                n3(e3);
              }, (e3) => {
                r3(e3);
              }, 0) : ae2(e2, t, [], {
                reject: r3,
                resolve: n3
              }, c);
            } catch (s5) {
              r3(s5);
            }
          }, r3);
        } catch (s4) {
          r3(s4);
        }
      }, r3);
    });
  });
}
function ue(e2, t) {
  return __async(this, null, function* () {
    const n3 = t.argument;
    if ("MemberExpression" === n3.type) {
      const r4 = {
        t: null
      }, l2 = yield Y2(e2, n3.object);
      let s4 = null;
      r4.t = l2, true === n3.computed ? s4 = yield Y2(e2, n3.property) : "Identifier" === n3.property.type && (s4 = n3.property.name);
      const c = r4.t;
      let u2;
      if (U(c)) {
        if (!E(s4)) throw new a(e2, r.ArrayAccessorMustBeNumber, t);
        if (s4 < 0 && (s4 = c.length + s4), s4 < 0 || s4 >= c.length) throw new a(e2, r.OutOfBounds, t);
        u2 = ge(c[s4]), c[s4] = "++" === t.operator ? u2 + 1 : u2 - 1;
      } else if (c instanceof N) {
        if (false === G(s4)) throw new a(e2, r.KeyAccessorMustBeString, t);
        if (true !== c.hasField(s4)) throw new a(e2, r.FieldNotFound, t, {
          key: s4
        });
        u2 = ge(c.field(s4)), c.setField(s4, "++" === t.operator ? u2 + 1 : u2 - 1);
      } else if (c instanceof z2) {
        if (false === G(s4)) throw new a(e2, r.ModuleAccessorMustBeString, t);
        if (true !== c.hasGlobal(s4)) throw new a(e2, r.ModuleExportNotFound, t);
        u2 = ge(yield c.global(s4)), c.setGlobal(s4, "++" === t.operator ? u2 + 1 : u2 - 1);
      } else {
        if (!H(c)) throw Q(c) ? new a(e2, r.Immutable, t) : new a(e2, r.InvalidParameter, t);
        if (false === G(s4)) throw new a(e2, r.KeyAccessorMustBeString, t);
        if (true !== c.hasField(s4)) throw new a(e2, r.FieldNotFound, t, {
          key: s4
        });
        u2 = ge(c.field(s4)), c.setField(s4, "++" === t.operator ? u2 + 1 : u2 - 1);
      }
      return false === t.prefix ? u2 : "++" === t.operator ? u2 + 1 : u2 - 1;
    }
    const r3 = "Identifier" === t.argument.type ? t.argument.name.toLowerCase() : "";
    if (!r3) throw new a(e2, r.InvalidIdentifier, t);
    let l;
    if (null != e2.localScope && void 0 !== e2.localScope[r3]) return l = ge(e2.localScope[r3].value), e2.localScope[r3] = {
      value: "++" === t.operator ? l + 1 : l - 1,
      valueset: true,
      node: t
    }, false === t.prefix ? l : "++" === t.operator ? l + 1 : l - 1;
    if (void 0 !== e2.globalScope[r3]) return l = ge(e2.globalScope[r3].value), e2.globalScope[r3] = {
      value: "++" === t.operator ? l + 1 : l - 1,
      valueset: true,
      node: t
    }, false === t.prefix ? l : "++" === t.operator ? l + 1 : l - 1;
    throw new a(e2, r.InvalidIdentifier, t);
  });
}
function fe2(e2, t, n3, r3, o2) {
  switch (t) {
    case "=":
      return e2 === O ? null : e2;
    case "/=":
      return ge(n3) / ge(e2);
    case "*=":
      return ge(n3) * ge(e2);
    case "-=":
      return ge(n3) - ge(e2);
    case "+=":
      return G(n3) || G(e2) ? me(n3) + me(e2) : ge(n3) + ge(e2);
    case "%=":
      return ge(n3) % ge(e2);
    default:
      throw new a(o2, r.UnsupportedOperator, r3);
  }
}
function pe(e2, t) {
  return __async(this, null, function* () {
    const n3 = t.left;
    if ("MemberExpression" === n3.type) {
      const r4 = yield Y2(e2, n3.object);
      let l = null;
      if (true === n3.computed) l = yield Y2(e2, n3.property);
      else {
        if ("Identifier" !== n3.property.type) throw new a(e2, r.InvalidIdentifier, t);
        l = n3.property.name;
      }
      const s4 = yield Y2(e2, t.right);
      if (U(r4)) {
        if (!E(l)) throw new a(e2, r.ArrayAccessorMustBeNumber, t);
        if (l < 0 && (l = r4.length + l), l < 0 || l > r4.length) throw new a(e2, r.OutOfBounds, t);
        if (l === r4.length) {
          if ("=" !== t.operator) throw new a(e2, r.OutOfBounds, t);
          r4[l] = fe2(s4, t.operator, r4[l], t, e2);
        } else r4[l] = fe2(s4, t.operator, r4[l], t, e2);
      } else if (r4 instanceof N) {
        if (false === G(l)) throw new a(e2, r.KeyAccessorMustBeString, t);
        if (true === r4.hasField(l)) r4.setField(l, fe2(s4, t.operator, r4.field(l), t, e2));
        else {
          if ("=" !== t.operator) throw new a(e2, r.FieldNotFound, t, {
            key: l
          });
          r4.setField(l, fe2(s4, t.operator, null, t, e2));
        }
      } else if (r4 instanceof z2) {
        if (false === G(l)) throw new a(e2, r.KeyAccessorMustBeString, t);
        if (true !== r4.hasGlobal(l)) throw new a(e2, r.ModuleExportNotFound, t);
        r4.setGlobal(l, fe2(s4, t.operator, yield r4.global(l), t, e2));
      } else {
        if (!H(r4)) throw Q(r4) ? new a(e2, r.Immutable, t) : new a(e2, r.InvalidParameter, t);
        if (false === G(l)) throw new a(e2, r.KeyAccessorMustBeString, t);
        if (true === r4.hasField(l)) r4.setField(l, fe2(s4, t.operator, r4.field(l), t, e2));
        else {
          if ("=" !== t.operator) throw new a(e2, r.FieldNotFound, t, {
            key: l
          });
          r4.setField(l, fe2(s4, t.operator, null, t, e2));
        }
      }
      return O;
    }
    const r3 = n3.name.toLowerCase();
    if (null != e2.localScope && void 0 !== e2.localScope[r3]) {
      const n4 = yield Y2(e2, t.right);
      return e2.localScope[r3] = {
        value: fe2(n4, t.operator, e2.localScope[r3].value, t, e2),
        valueset: true,
        node: t.right
      }, O;
    }
    if (void 0 !== e2.globalScope[r3]) {
      const n4 = yield Y2(e2, t.right);
      return e2.globalScope[r3] = {
        value: fe2(n4, t.operator, e2.globalScope[r3].value, t, e2),
        valueset: true,
        node: t.right
      }, O;
    }
    throw new a(e2, r.InvalidIdentifier, t);
  });
}
function we(e2, t) {
  return __async(this, null, function* () {
    if ("AssignmentExpression" === t.expression.type) return Y2(e2, t.expression);
    if ("CallExpression" === t.expression.type) {
      const n4 = yield Y2(e2, t.expression);
      return n4 === O ? O : new x(n4);
    }
    const n3 = yield Y2(e2, t.expression);
    return n3 === O ? O : new x(n3);
  });
}
function de(e2, t) {
  return __async(this, null, function* () {
    const n3 = yield Y2(e2, t.test);
    if (true === n3) return Y2(e2, t.consequent);
    if (false === n3) return null !== t.alternate ? Y2(e2, t.alternate) : O;
    throw new a(e2, r.BooleanConditionRequired, t);
  });
}
function he(e2, t) {
  return __async(this, null, function* () {
    return me2(e2, t, 0);
  });
}
function me2(e2, t, n3) {
  return __async(this, null, function* () {
    if (n3 >= t.body.length) return O;
    const r3 = yield Y2(e2, t.body[n3]);
    return r3 instanceof M || r3 === R || r3 === J || n3 === t.body.length - 1 ? r3 : me2(e2, t, n3 + 1);
  });
}
function ge2(e2, t) {
  return __async(this, null, function* () {
    if (null === t.argument) return new M(O);
    const n3 = yield Y2(e2, t.argument);
    return new M(n3);
  });
}
function ye(e2, t) {
  return __async(this, null, function* () {
    const n3 = t.id.name.toLowerCase();
    return e2.globalScope[n3] = {
      valueset: true,
      node: null,
      value: new _2(t, e2)
    }, O;
  });
}
function ve(e2, t) {
  return __async(this, null, function* () {
    const n3 = t.specifiers[0].local.name.toLowerCase(), r3 = e2.libraryResolver.loadLibrary(n3);
    let o2 = null;
    return e2.libraryResolver._moduleSingletons?.has(r3.uri) ? o2 = e2.libraryResolver._moduleSingletons.get(r3.uri) : (o2 = new z2(r3), yield o2.loadModule(e2), e2.libraryResolver._moduleSingletons?.set(r3.uri, o2)), e2.globalScope[n3] = {
      value: o2,
      valueset: true,
      node: t
    }, O;
  });
}
function be(e2, t) {
  return __async(this, null, function* () {
    if (yield Y2(e2, t.declaration), "FunctionDeclaration" === t.declaration.type) e2.exports[t.declaration.id.name.toLowerCase()] = "function";
    else if ("VariableDeclaration" === t.declaration.type) for (const n3 of t.declaration.declarations) e2.exports[n3.id.name.toLowerCase()] = "variable";
    return O;
  });
}
function Se(e2, t, n3) {
  return __async(this, null, function* () {
    return n3 >= t.declarations.length ? O : (yield Y2(e2, t.declarations[n3]), n3 === t.declarations.length - 1 || (yield Se(e2, t, n3 + 1)), O);
  });
}
function xe(e2, t) {
  return __async(this, null, function* () {
    let n3 = null;
    if (n3 = null === t.init ? null : yield Y2(e2, t.init), null !== e2.localScope) {
      if (n3 === O && (n3 = null), "Identifier" !== t.id.type) throw new a(e2, r.InvalidIdentifier, t);
      const r4 = t.id.name.toLowerCase();
      return null != e2.localScope && (e2.localScope[r4] = {
        value: n3,
        valueset: true,
        node: t.init
      }), O;
    }
    if ("Identifier" !== t.id.type) throw new a(e2, r.InvalidIdentifier, t);
    const r3 = t.id.name.toLowerCase();
    return n3 === O && (n3 = null), e2.globalScope[r3] = {
      value: n3,
      valueset: true,
      node: t.init
    }, O;
  });
}
function Ie(e2, t) {
  return __async(this, null, function* () {
    const n3 = yield Y2(e2, t.object);
    if (null === n3) throw new a(e2, r.MemberOfNull, t);
    if (false === t.computed) {
      if ("Identifier" === t.property.type) {
        if (n3 instanceof N || H(n3)) return n3.field(t.property.name);
        if (n3 instanceof n) return d(n3, t.property.name, e2, t);
        if (n3 instanceof z2) {
          if (!n3.hasGlobal(t.property.name)) throw new a(e2, r.InvalidIdentifier, t);
          return n3.global(t.property.name);
        }
        throw new a(e2, r.InvalidMemberAccessKey, t);
      }
      throw new a(e2, r.InvalidMemberAccessKey, t);
    }
    let l = yield Y2(e2, t.property);
    if (n3 instanceof N || H(n3)) {
      if (G(l)) return n3.field(l);
      throw new a(e2, r.InvalidMemberAccessKey, t);
    }
    if (n3 instanceof z2) {
      if (G(l)) return n3.global(l);
      throw new a(e2, r.InvalidMemberAccessKey, t);
    }
    if (n3 instanceof n) {
      if (G(l)) return d(n3, l, e2, t);
      throw new a(e2, r.InvalidMemberAccessKey, t);
    }
    if (U(n3)) {
      if (E(l) && isFinite(l) && Math.floor(l) === l) {
        if (l < 0 && (l = n3.length + l), l >= n3.length || l < 0) throw new a(e2, r.OutOfBounds, t);
        return n3[l];
      }
      throw new a(e2, r.InvalidMemberAccessKey, t);
    }
    if (Q(n3)) {
      if (E(l) && isFinite(l) && Math.floor(l) === l) {
        if (l < 0 && (l = n3.length() + l), l >= n3.length() || l < 0) throw new a(e2, r.OutOfBounds, t);
        return n3.get(l);
      }
      throw new a(e2, r.InvalidMemberAccessKey, t);
    }
    if (G(n3)) {
      if (E(l) && isFinite(l) && Math.floor(l) === l) {
        if (l < 0 && (l = n3.length + l), l >= n3.length || l < 0) throw new a(e2, r.OutOfBounds, t);
        return n3[l];
      }
      throw new a(e2, r.InvalidMemberAccessKey, t);
    }
    throw new a(e2, r.InvalidMemberAccessKey, t);
  });
}
function Fe(e2, t) {
  return __async(this, null, function* () {
    const n3 = yield Y2(e2, t.argument);
    if (z(n3)) {
      if ("!" === t.operator) return !n3;
      if ("-" === t.operator) return -1 * ge(n3);
      if ("+" === t.operator) return 1 * ge(n3);
      if ("~" === t.operator) return ~ge(n3);
      throw new a(e2, r.UnsupportedUnaryOperator, t);
    }
    if ("-" === t.operator) return -1 * ge(n3);
    if ("+" === t.operator) return 1 * ge(n3);
    if ("~" === t.operator) return ~ge(n3);
    throw new a(e2, r.UnsupportedUnaryOperator, t);
  });
}
function Ce(e2, t) {
  return __async(this, null, function* () {
    const n3 = [];
    for (let r3 = 0; r3 < t.elements.length; r3++) n3.push(yield Y2(e2, t.elements[r3]));
    for (let r3 = 0; r3 < n3.length; r3++) {
      if (_(n3[r3])) throw new a(e2, r.NoFunctionInArray, t);
      n3[r3] === O && (n3[r3] = null);
    }
    return n3;
  });
}
function Re(e2, t) {
  return __async(this, null, function* () {
    const n3 = [];
    n3[0] = yield Y2(e2, t.left), n3[1] = yield Y2(e2, t.right);
    const r3 = n3[0], o2 = n3[1];
    switch (t.operator) {
      case "|":
      case "<<":
      case ">>":
      case ">>>":
      case "^":
      case "&":
        return _e(ge(r3), ge(o2), t.operator);
      case "==":
        return ce(r3, o2);
      case "!=":
        return !ce(r3, o2);
      case "<":
      case ">":
      case "<=":
      case ">=":
        return fe(r3, o2, t.operator);
      case "+":
        return G(r3) || G(o2) ? me(r3) + me(o2) : ge(r3) + ge(o2);
      case "-":
        return ge(r3) - ge(o2);
      case "*":
        return ge(r3) * ge(o2);
      case "/":
        return ge(r3) / ge(o2);
      case "%":
        return ge(r3) % ge(o2);
      default:
        throw new a(e2, r.UnsupportedOperator, t);
    }
  });
}
function Ae(e2, t) {
  return __async(this, null, function* () {
    const n3 = yield Y2(e2, t.left);
    let r3 = null;
    if (!z(n3)) throw new a(e2, r.LogicalExpressionOnlyBoolean, t);
    switch (t.operator) {
      case "||":
        if (true === n3) return n3;
        if (r3 = yield Y2(e2, t.right), z(r3)) return r3;
        throw new a(e2, r.LogicExpressionOrAnd, t);
      case "&&":
        if (false === n3) return n3;
        if (r3 = yield Y2(e2, t.right), z(r3)) return r3;
        throw new a(e2, r.LogicExpressionOrAnd, t);
      default:
        throw new a(e2, r.LogicExpressionOrAnd, t);
    }
  });
}
function Me(e2, t) {
  return __async(this, null, function* () {
    const n3 = t.name.toLowerCase();
    if (null != e2.localScope && void 0 !== e2.localScope[n3]) {
      const t2 = e2.localScope[n3];
      if (true === t2.valueset) return t2.value;
      if (null !== t2.d) return t2.d;
      t2.d = Y2(e2, t2.node);
      const r3 = yield t2.d;
      return t2.value = r3, t2.valueset = true, r3;
    }
    if (void 0 !== e2.globalScope[n3]) {
      const t2 = e2.globalScope[n3];
      if (true === t2.valueset) return t2.value;
      if (null !== t2.d) return t2.d;
      t2.d = Y2(e2, t2.node);
      const r3 = yield t2.d;
      return t2.value = r3, t2.valueset = true, r3;
    }
    throw new a(e2, r.InvalidIdentifier, t);
  });
}
function je(e2, t) {
  return __async(this, null, function* () {
    if ("MemberExpression" === t.callee.type) {
      const n3 = yield Y2(e2, t.callee.object);
      if (!(n3 instanceof z2)) throw new a(e2, r.FunctionNotFound, t);
      const r3 = false === t.callee.computed ? t.callee.property.name : yield Y2(e2, t.callee.property);
      if (!n3.hasGlobal(r3)) throw new a(e2, r.FunctionNotFound, t);
      const o2 = yield n3.global(r3);
      if (!_(o2)) throw new a(e2, r.CallNonFunction, t);
      return o2.call(e2, t);
    }
    if ("Identifier" !== t.callee.type) throw new a(e2, r.FunctionNotFound, t);
    if (null != e2.localScope && void 0 !== e2.localScope[t.callee.name.toLowerCase()]) {
      const n3 = e2.localScope[t.callee.name.toLowerCase()];
      if (_(n3.value)) return n3.value.call(e2, t);
      throw new a(e2, r.CallNonFunction, t);
    }
    if (void 0 !== e2.globalScope[t.callee.name.toLowerCase()]) {
      const n3 = e2.globalScope[t.callee.name.toLowerCase()];
      if (_(n3.value)) return n3.value.call(e2, t);
      throw new a(e2, r.CallNonFunction, t);
    }
    throw new a(e2, r.FunctionNotFound, t);
  });
}
function Le(e2, t) {
  return __async(this, null, function* () {
    return t.value ? t.value.cooked : "";
  });
}
function ke(e2, t, n3) {
  if (_(e2)) throw new a(t, r.NoFunctionInTemplateLiteral, n3);
  return e2;
}
function Ee(e2, t) {
  return __async(this, null, function* () {
    const n3 = [];
    for (let a2 = 0; a2 < t.expressions.length; a2++) {
      const r4 = yield Y2(e2, t.expressions[a2]);
      n3[a2] = me(r4);
    }
    let r3 = "", o2 = 0;
    for (const a2 of t.quasis) if (r3 += a2.value ? a2.value.cooked : "", false === a2.tail) {
      r3 += n3[o2] ? ke(n3[o2], e2, t) : "", o2++;
    }
    return r3;
  });
}
var Ne = {};
function Oe(e2, t, n3, r3) {
  return __async(this, null, function* () {
    const o2 = yield Y2(e2, t.arguments[n3]);
    if (ce(o2, r3)) return Y2(e2, t.arguments[n3 + 1]);
    const a2 = t.arguments.length - n3;
    return 1 === a2 ? Y2(e2, t.arguments[n3]) : 2 === a2 ? null : 3 === a2 ? Y2(e2, t.arguments[n3 + 2]) : Oe(e2, t, n3 + 2, r3);
  });
}
function Be(e2, t, n3, r3) {
  return __async(this, null, function* () {
    if (true === r3) return Y2(e2, t.arguments[n3 + 1]);
    if (3 === t.arguments.length - n3) return Y2(e2, t.arguments[n3 + 2]);
    const o2 = yield Y2(e2, t.arguments[n3 + 2]);
    if (false === z(o2)) throw new a(e2, r.ModuleExportNotFound, t.arguments[n3 + 2]);
    return Be(e2, t, n3 + 2, o2);
  });
}
function Pe(e2, t, n3, r3) {
  return __async(this, null, function* () {
    const o2 = e2.body;
    if (n3.length !== e2.params.length) throw new a(t, r.WrongNumberOfParameters, null);
    for (let a2 = 0; a2 < n3.length; a2++) {
      const r4 = e2.params[a2];
      "Identifier" === r4.type && null != t.localScope && (t.localScope[r4.name.toLowerCase()] = {
        d: null,
        value: n3[a2],
        valueset: true,
        node: null
      });
    }
    const l = yield Y2(t, o2);
    if (l instanceof M) return l.value;
    if (l === R) throw new a(t, r.UnexpectedToken, r3);
    if (l === J) throw new a(t, r.UnexpectedToken, r3);
    return l instanceof x ? l.value : l;
  });
}
C(Ne, V), Y(Ne, V), M2(Ne, V), L(Ne, V), f2(Ne, V), xn({
  functions: Ne,
  compiled: false,
  signatures: null,
  evaluateIdentifier: null,
  mode: "async",
  standardFunction: V,
  standardFunctionAsync: H2
}), Ne.iif = function(e2, t) {
  return __async(this, null, function* () {
    ae(null === t.arguments ? [] : t.arguments, 3, 3, e2, t);
    const n3 = yield Y2(e2, t.arguments[0]);
    if (false === z(n3)) throw new a(e2, r.BooleanConditionRequired, t);
    return Y2(e2, n3 ? t.arguments[1] : t.arguments[2]);
  });
}, Ne.defaultvalue = function(e2, t) {
  return __async(this, null, function* () {
    ae(null === t.arguments ? [] : t.arguments, 2, 3, e2, t);
    const r3 = yield Y2(e2, t.arguments[0]);
    if (3 === t.arguments.length) {
      const o2 = yield Y2(e2, t.arguments[1]), a2 = p(r3, o2);
      return null != a2 && "" !== a2 ? a2 : Y2(e2, t.arguments[2]);
    }
    return null == r3 || "" === r3 ? Y2(e2, t.arguments[1]) : r3;
  });
}, Ne.decode = function(e2, t) {
  return __async(this, null, function* () {
    if (t.arguments.length < 2) throw new a(e2, r.WrongNumberOfParameters, t);
    if (2 === t.arguments.length) return Y2(e2, t.arguments[1]);
    if ((t.arguments.length - 1) % 2 == 0) throw new a(e2, r.WrongNumberOfParameters, t);
    return Oe(e2, t, 1, yield Y2(e2, t.arguments[0]));
  });
}, Ne.when = function(e2, t) {
  return __async(this, null, function* () {
    if (t.arguments.length < 3) throw new a(e2, r.WrongNumberOfParameters, t);
    if (t.arguments.length % 2 == 0) throw new a(e2, r.WrongNumberOfParameters, t);
    const n3 = yield Y2(e2, t.arguments[0]);
    if (false === z(n3)) throw new a(e2, r.BooleanConditionRequired, t.arguments[0]);
    return Be(e2, t, 0, n3);
  });
};
var Ke = {
  fixSpatialReference: Ze,
  parseArguments: W,
  standardFunction: V,
  standardFunctionAsync: H2,
  evaluateIdentifier: Me
};
for (const We in Ne) Ne[We] = {
  value: new e(Ne[We]),
  valueset: true,
  node: null
};
var De = function() {
};
function Ge(e2, t, n3) {
  const r3 = new De();
  null == e2 && (e2 = {}), null == t && (t = {});
  const a2 = new N({
    newline: "\n",
    tab: "	",
    singlequote: "'",
    doublequote: '"',
    forwardslash: "/",
    backwardslash: "\\"
  });
  a2.immutable = false, r3.textformatting = {
    value: a2,
    valueset: true,
    node: null
  };
  for (const o2 in t) r3[o2] = {
    value: new e(t[o2]),
    native: true,
    valueset: true,
    node: null
  };
  for (const o2 in e2) e2[o2] && "esri.Graphic" === e2[o2].declaredClass ? r3[o2] = {
    value: D.createFromGraphic(e2[o2], n3),
    valueset: true,
    node: null
  } : r3[o2] = {
    value: e2[o2],
    valueset: true,
    node: null
  };
  return r3;
}
function Ue(e2) {
  console.log(e2);
}
De.prototype = Ne, De.prototype.infinity = {
  value: Number.POSITIVE_INFINITY,
  valueset: true,
  node: null
}, De.prototype.pi = {
  value: Math.PI,
  valueset: true,
  node: null
};
var Ze2 = Ke;
function qe(e2) {
  const t = {
    mode: "async",
    compiled: false,
    functions: {},
    signatures: [],
    standardFunction: V,
    standardFunctionAsync: H2,
    evaluateIdentifier: Me
  };
  for (let n3 = 0; n3 < e2.length; n3++) e2[n3].registerFunctions(t);
  for (const n3 in t.functions) Ne[n3] = {
    value: new e(t.functions[n3]),
    valueset: true,
    node: null
  }, De.prototype[n3] = Ne[n3];
  for (let n3 = 0; n3 < t.signatures.length; n3++) o(t.signatures[n3], "async");
}
function Te(e2, n3) {
  return __async(this, null, function* () {
    let r3 = n3.spatialReference;
    null == r3 && (r3 = new f({
      wkid: 102100
    }));
    let o2 = null;
    e2.usesModules && (o2 = new s2(/* @__PURE__ */ new Map(), e2.loadedModules));
    const l = Ge(n3.vars, n3.customfunctions, n3.timeZone), s4 = {
      spatialReference: r3,
      services: n3.services,
      exports: {},
      libraryResolver: o2,
      abortSignal: void 0 === n3.abortSignal || null === n3.abortSignal ? {
        aborted: false
      } : n3.abortSignal,
      globalScope: l,
      console: n3.console ?? Ue,
      timeZone: n3.timeZone ?? null,
      lrucache: n3.lrucache,
      interceptor: n3.interceptor,
      localScope: null,
      depthCounter: {
        depth: 1
      }
    };
    let c = yield Y2(s4, e2);
    if (c instanceof M && (c = c.value), c instanceof x && (c = c.value), c === O && (c = null), c === R) throw new a(s4, r.IllegalResult, null);
    if (c === J) throw new a(s4, r.IllegalResult, null);
    if (_(c)) throw new a(s4, r.IllegalResult, null);
    return c;
  });
}
qe([p2]);
export {
  Te as executeScript,
  qe as extend,
  Ze2 as functionHelper
};
//# sourceMappingURL=arcadeAsyncRuntime-P3IZPES2.js.map
