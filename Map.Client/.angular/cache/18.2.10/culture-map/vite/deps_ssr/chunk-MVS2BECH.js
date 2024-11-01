import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  c,
  d,
  e,
  f,
  l,
  m,
  p,
  t
} from "./chunk-ZT7V2AVD.js";
import {
  a,
  i,
  o,
  r
} from "./chunk-RLGDH6IY.js";
import {
  s2 as s
} from "./chunk-6JFGZTLU.js";

// ../../../node_modules/@arcgis/core/layers/effects/parser.js
var m2;
var g;
var v = {
  exports: {}
};
g = function() {
  function t2(t3, e4) {
    function r3() {
      this.constructor = t3;
    }
    r3.prototype = e4.prototype, t3.prototype = new r3();
  }
  function e3(t3, r3, n2, u) {
    var a2 = Error.call(this, t3);
    return Object.setPrototypeOf && Object.setPrototypeOf(a2, e3.prototype), a2.expected = r3, a2.found = n2, a2.location = u, a2.name = "SyntaxError", a2;
  }
  function r2(t3, e4, r3) {
    return r3 = r3 || " ", t3.length > e4 ? t3 : (e4 -= t3.length, t3 + (r3 += r3.repeat(e4)).slice(0, e4));
  }
  function n(t3, r3) {
    var n2, u = {}, a2 = (r3 = void 0 !== r3 ? r3 : {}).grammarSource, o2 = {
      start: Lt
    }, c2 = Lt, i2 = "none", s2 = ")", l2 = ",", f2 = "(", p2 = "%", h = "px", m3 = "cm", g2 = "mm", v2 = "in", d3 = "pt", y2 = "pc", A2 = "deg", w2 = "rad", x2 = "grad", b2 = "turn", C2 = "#", F2 = ".", E2 = "e", j2 = /^[ \t\n\r]/, $2 = /^[a-z\-]/, O2 = /^[0-9a-fA-F]/, k2 = /^[+\-]/, q2 = /^[0-9]/, S2 = Bt("none"), z2 = Ut("none", false), R2 = Ut(")", false), I2 = Ut(",", false), M2 = Bt("whitespace"), P2 = Ht([" ", "	", "\n", "\r"], false, false), N2 = Bt("function"), T2 = Ut("(", false), U2 = Bt("identifier"), H2 = Ht([["a", "z"], "-"], false, false), _2 = Bt("percentage"), B2 = Ut("%", false), D2 = Bt("length"), G2 = Ut("px", false), J = Ut("cm", false), K = Ut("mm", false), L = Ut("in", false), Q = Ut("pt", false), V = Ut("pc", false), W = Bt("angle"), X = Ut("deg", false), Y = Ut("rad", false), Z = Ut("grad", false), tt = Ut("turn", false), et = Bt("number"), rt = Bt("color"), nt = Ut("#", false), ut = Ht([["0", "9"], ["a", "f"], ["A", "F"]], false, false), at = Ht(["+", "-"], false, false), ot = Ht([["0", "9"]], false, false), ct = Ut(".", false), it = Ut("e", false), st = function() {
      return [];
    }, lt = function(t4, e4) {
      return {
        type: "function",
        name: t4,
        parameters: e4 || []
      };
    }, ft = function(t4, e4) {
      return e4.length > 0 ? se(t4, e4, 3) : [t4];
    }, pt = function(t4) {
      return {
        type: "quantity",
        value: t4.value,
        unit: t4.unit
      };
    }, ht = function(t4) {
      return {
        type: "color",
        colorType: t4.type,
        value: t4.value
      };
    }, mt = function(t4) {
      return t4;
    }, gt = function() {
      return Tt();
    }, vt = function(t4) {
      return {
        value: t4,
        unit: "%"
      };
    }, dt = function(t4) {
      return {
        value: t4,
        unit: "px"
      };
    }, yt = function(t4) {
      return {
        value: t4,
        unit: "cm"
      };
    }, At = function(t4) {
      return {
        value: t4,
        unit: "mm"
      };
    }, wt = function(t4) {
      return {
        value: t4,
        unit: "in"
      };
    }, xt = function(t4) {
      return {
        value: t4,
        unit: "pt"
      };
    }, bt = function(t4) {
      return {
        value: t4,
        unit: "pc"
      };
    }, Ct = function(t4) {
      return {
        value: t4,
        unit: "deg"
      };
    }, Ft = function(t4) {
      return {
        value: t4,
        unit: "rad"
      };
    }, Et = function(t4) {
      return {
        value: t4,
        unit: "grad"
      };
    }, jt = function(t4) {
      return {
        value: t4,
        unit: "turn"
      };
    }, $t = function(t4) {
      return {
        value: t4,
        unit: null
      };
    }, Ot = function() {
      return {
        type: "hex",
        value: Tt()
      };
    }, kt = function(t4) {
      return {
        type: "function",
        value: t4
      };
    }, qt = function() {
      return {
        type: "named",
        value: Tt()
      };
    }, St = function() {
      return parseFloat(Tt());
    }, zt = 0, Rt = 0, It = [{
      line: 1,
      column: 1
    }], Mt = 0, Pt = [], Nt = 0;
    if ("startRule" in r3) {
      if (!(r3.startRule in o2)) throw new Error(`Can't start parsing from rule "` + r3.startRule + '".');
      c2 = o2[r3.startRule];
    }
    function Tt() {
      return t3.substring(Rt, zt);
    }
    function Ut(t4, e4) {
      return {
        type: "literal",
        text: t4,
        ignoreCase: e4
      };
    }
    function Ht(t4, e4, r4) {
      return {
        type: "class",
        parts: t4,
        inverted: e4,
        ignoreCase: r4
      };
    }
    function _t() {
      return {
        type: "end"
      };
    }
    function Bt(t4) {
      return {
        type: "other",
        description: t4
      };
    }
    function Dt(e4) {
      var r4, n3 = It[e4];
      if (n3) return n3;
      for (r4 = e4 - 1; !It[r4]; ) r4--;
      for (n3 = {
        line: (n3 = It[r4]).line,
        column: n3.column
      }; r4 < e4; ) 10 === t3.charCodeAt(r4) ? (n3.line++, n3.column = 1) : n3.column++, r4++;
      return It[e4] = n3, n3;
    }
    function Gt(t4, e4, r4) {
      var n3 = Dt(t4), u2 = Dt(e4);
      return {
        source: a2,
        start: {
          offset: t4,
          line: n3.line,
          column: n3.column
        },
        end: {
          offset: e4,
          line: u2.line,
          column: u2.column
        }
      };
    }
    function Jt(t4) {
      zt < Mt || (zt > Mt && (Mt = zt, Pt = []), Pt.push(t4));
    }
    function Kt(t4, r4, n3) {
      return new e3(e3.buildMessage(t4, r4), t4, r4, n3);
    }
    function Lt() {
      var t4;
      return (t4 = Qt()) === u && (t4 = Vt()), t4;
    }
    function Qt() {
      var e4, r4;
      return Nt++, e4 = zt, Zt(), t3.substr(zt, 4) === i2 ? (r4 = i2, zt += 4) : (r4 = u, 0 === Nt && Jt(z2)), r4 !== u ? (Zt(), Rt = e4, e4 = st()) : (zt = e4, e4 = u), Nt--, e4 === u && 0 === Nt && Jt(S2), e4;
    }
    function Vt() {
      var t4, e4;
      if (t4 = [], (e4 = Wt()) !== u) for (; e4 !== u; ) t4.push(e4), e4 = Wt();
      else t4 = u;
      return t4;
    }
    function Wt() {
      var e4, r4, n3, a3;
      return e4 = zt, Zt(), (r4 = te()) !== u ? (Zt(), (n3 = Xt()) === u && (n3 = null), Zt(), 41 === t3.charCodeAt(zt) ? (a3 = s2, zt++) : (a3 = u, 0 === Nt && Jt(R2)), a3 !== u ? (Zt(), Rt = e4, e4 = lt(r4, n3)) : (zt = e4, e4 = u)) : (zt = e4, e4 = u), e4;
    }
    function Xt() {
      var e4, r4, n3, a3, o3, c3, i3, s3;
      if (e4 = zt, (r4 = Yt()) !== u) {
        for (n3 = [], a3 = zt, o3 = Zt(), 44 === t3.charCodeAt(zt) ? (c3 = l2, zt++) : (c3 = u, 0 === Nt && Jt(I2)), c3 === u && (c3 = null), i3 = Zt(), (s3 = Yt()) !== u ? a3 = o3 = [o3, c3, i3, s3] : (zt = a3, a3 = u); a3 !== u; ) n3.push(a3), a3 = zt, o3 = Zt(), 44 === t3.charCodeAt(zt) ? (c3 = l2, zt++) : (c3 = u, 0 === Nt && Jt(I2)), c3 === u && (c3 = null), i3 = Zt(), (s3 = Yt()) !== u ? a3 = o3 = [o3, c3, i3, s3] : (zt = a3, a3 = u);
        Rt = e4, e4 = ft(r4, n3);
      } else zt = e4, e4 = u;
      return e4;
    }
    function Yt() {
      var t4, e4;
      return t4 = zt, (e4 = re()) === u && (e4 = ne()) === u && (e4 = ue()) === u && (e4 = ae()), e4 !== u && (Rt = t4, e4 = pt(e4)), (t4 = e4) === u && (t4 = zt, (e4 = oe()) !== u && (Rt = t4, e4 = ht(e4)), t4 = e4), t4;
    }
    function Zt() {
      var e4, r4;
      for (Nt++, e4 = [], j2.test(t3.charAt(zt)) ? (r4 = t3.charAt(zt), zt++) : (r4 = u, 0 === Nt && Jt(P2)); r4 !== u; ) e4.push(r4), j2.test(t3.charAt(zt)) ? (r4 = t3.charAt(zt), zt++) : (r4 = u, 0 === Nt && Jt(P2));
      return Nt--, r4 = u, 0 === Nt && Jt(M2), e4;
    }
    function te() {
      var e4, r4, n3;
      return Nt++, e4 = zt, (r4 = ee()) !== u ? (40 === t3.charCodeAt(zt) ? (n3 = f2, zt++) : (n3 = u, 0 === Nt && Jt(T2)), n3 !== u ? (Rt = e4, e4 = mt(r4)) : (zt = e4, e4 = u)) : (zt = e4, e4 = u), Nt--, e4 === u && (r4 = u, 0 === Nt && Jt(N2)), e4;
    }
    function ee() {
      var e4, r4, n3;
      if (Nt++, e4 = zt, r4 = [], $2.test(t3.charAt(zt)) ? (n3 = t3.charAt(zt), zt++) : (n3 = u, 0 === Nt && Jt(H2)), n3 !== u) for (; n3 !== u; ) r4.push(n3), $2.test(t3.charAt(zt)) ? (n3 = t3.charAt(zt), zt++) : (n3 = u, 0 === Nt && Jt(H2));
      else r4 = u;
      return r4 !== u && (Rt = e4, r4 = gt()), Nt--, (e4 = r4) === u && (r4 = u, 0 === Nt && Jt(U2)), e4;
    }
    function re() {
      var e4, r4, n3;
      return Nt++, e4 = zt, Zt(), (r4 = ce()) !== u ? (37 === t3.charCodeAt(zt) ? (n3 = p2, zt++) : (n3 = u, 0 === Nt && Jt(B2)), n3 !== u ? (Rt = e4, e4 = vt(r4)) : (zt = e4, e4 = u)) : (zt = e4, e4 = u), Nt--, e4 === u && 0 === Nt && Jt(_2), e4;
    }
    function ne() {
      var e4, r4, n3;
      return Nt++, e4 = zt, Zt(), (r4 = ce()) !== u ? (t3.substr(zt, 2) === h ? (n3 = h, zt += 2) : (n3 = u, 0 === Nt && Jt(G2)), n3 !== u ? (Rt = e4, e4 = dt(r4)) : (zt = e4, e4 = u)) : (zt = e4, e4 = u), e4 === u && (e4 = zt, Zt(), (r4 = ce()) !== u ? (t3.substr(zt, 2) === m3 ? (n3 = m3, zt += 2) : (n3 = u, 0 === Nt && Jt(J)), n3 !== u ? (Rt = e4, e4 = yt(r4)) : (zt = e4, e4 = u)) : (zt = e4, e4 = u), e4 === u && (e4 = zt, Zt(), (r4 = ce()) !== u ? (t3.substr(zt, 2) === g2 ? (n3 = g2, zt += 2) : (n3 = u, 0 === Nt && Jt(K)), n3 !== u ? (Rt = e4, e4 = At(r4)) : (zt = e4, e4 = u)) : (zt = e4, e4 = u), e4 === u && (e4 = zt, Zt(), (r4 = ce()) !== u ? (t3.substr(zt, 2) === v2 ? (n3 = v2, zt += 2) : (n3 = u, 0 === Nt && Jt(L)), n3 !== u ? (Rt = e4, e4 = wt(r4)) : (zt = e4, e4 = u)) : (zt = e4, e4 = u), e4 === u && (e4 = zt, Zt(), (r4 = ce()) !== u ? (t3.substr(zt, 2) === d3 ? (n3 = d3, zt += 2) : (n3 = u, 0 === Nt && Jt(Q)), n3 !== u ? (Rt = e4, e4 = xt(r4)) : (zt = e4, e4 = u)) : (zt = e4, e4 = u), e4 === u && (e4 = zt, Zt(), (r4 = ce()) !== u ? (t3.substr(zt, 2) === y2 ? (n3 = y2, zt += 2) : (n3 = u, 0 === Nt && Jt(V)), n3 !== u ? (Rt = e4, e4 = bt(r4)) : (zt = e4, e4 = u)) : (zt = e4, e4 = u)))))), Nt--, e4 === u && 0 === Nt && Jt(D2), e4;
    }
    function ue() {
      var e4, r4, n3;
      return Nt++, e4 = zt, (r4 = ce()) !== u ? (t3.substr(zt, 3) === A2 ? (n3 = A2, zt += 3) : (n3 = u, 0 === Nt && Jt(X)), n3 !== u ? (Rt = e4, e4 = Ct(r4)) : (zt = e4, e4 = u)) : (zt = e4, e4 = u), e4 === u && (e4 = zt, (r4 = ce()) !== u ? (t3.substr(zt, 3) === w2 ? (n3 = w2, zt += 3) : (n3 = u, 0 === Nt && Jt(Y)), n3 !== u ? (Rt = e4, e4 = Ft(r4)) : (zt = e4, e4 = u)) : (zt = e4, e4 = u), e4 === u && (e4 = zt, (r4 = ce()) !== u ? (t3.substr(zt, 4) === x2 ? (n3 = x2, zt += 4) : (n3 = u, 0 === Nt && Jt(Z)), n3 !== u ? (Rt = e4, e4 = Et(r4)) : (zt = e4, e4 = u)) : (zt = e4, e4 = u), e4 === u && (e4 = zt, (r4 = ce()) !== u ? (t3.substr(zt, 4) === b2 ? (n3 = b2, zt += 4) : (n3 = u, 0 === Nt && Jt(tt)), n3 !== u ? (Rt = e4, e4 = jt(r4)) : (zt = e4, e4 = u)) : (zt = e4, e4 = u)))), Nt--, e4 === u && (r4 = u, 0 === Nt && Jt(W)), e4;
    }
    function ae() {
      var t4, e4;
      return Nt++, t4 = zt, Zt(), (e4 = ce()) !== u ? (Rt = t4, t4 = $t(e4)) : (zt = t4, t4 = u), Nt--, t4 === u && 0 === Nt && Jt(et), t4;
    }
    function oe() {
      var e4, r4, n3, a3;
      if (Nt++, e4 = zt, 35 === t3.charCodeAt(zt) ? (r4 = C2, zt++) : (r4 = u, 0 === Nt && Jt(nt)), r4 !== u) {
        if (n3 = [], O2.test(t3.charAt(zt)) ? (a3 = t3.charAt(zt), zt++) : (a3 = u, 0 === Nt && Jt(ut)), a3 !== u) for (; a3 !== u; ) n3.push(a3), O2.test(t3.charAt(zt)) ? (a3 = t3.charAt(zt), zt++) : (a3 = u, 0 === Nt && Jt(ut));
        else n3 = u;
        n3 !== u ? (Rt = e4, e4 = Ot()) : (zt = e4, e4 = u);
      } else zt = e4, e4 = u;
      return e4 === u && (e4 = zt, (r4 = Wt()) !== u && (Rt = e4, r4 = kt(r4)), (e4 = r4) === u && (e4 = zt, (r4 = ee()) !== u && (Rt = e4, r4 = qt()), e4 = r4)), Nt--, e4 === u && (r4 = u, 0 === Nt && Jt(rt)), e4;
    }
    function ce() {
      var e4, r4, n3, a3, o3, c3, i3;
      for (e4 = zt, k2.test(t3.charAt(zt)) ? (t3.charAt(zt), zt++) : 0 === Nt && Jt(at), r4 = zt, n3 = [], q2.test(t3.charAt(zt)) ? (a3 = t3.charAt(zt), zt++) : (a3 = u, 0 === Nt && Jt(ot)); a3 !== u; ) n3.push(a3), q2.test(t3.charAt(zt)) ? (a3 = t3.charAt(zt), zt++) : (a3 = u, 0 === Nt && Jt(ot));
      if (46 === t3.charCodeAt(zt) ? (a3 = F2, zt++) : (a3 = u, 0 === Nt && Jt(ct)), a3 !== u) {
        if (o3 = [], q2.test(t3.charAt(zt)) ? (c3 = t3.charAt(zt), zt++) : (c3 = u, 0 === Nt && Jt(ot)), c3 !== u) for (; c3 !== u; ) o3.push(c3), q2.test(t3.charAt(zt)) ? (c3 = t3.charAt(zt), zt++) : (c3 = u, 0 === Nt && Jt(ot));
        else o3 = u;
        o3 !== u ? r4 = n3 = [n3, a3, o3] : (zt = r4, r4 = u);
      } else zt = r4, r4 = u;
      if (r4 === u) if (r4 = [], q2.test(t3.charAt(zt)) ? (n3 = t3.charAt(zt), zt++) : (n3 = u, 0 === Nt && Jt(ot)), n3 !== u) for (; n3 !== u; ) r4.push(n3), q2.test(t3.charAt(zt)) ? (n3 = t3.charAt(zt), zt++) : (n3 = u, 0 === Nt && Jt(ot));
      else r4 = u;
      if (r4 !== u) {
        if (n3 = zt, 101 === t3.charCodeAt(zt) ? (a3 = E2, zt++) : (a3 = u, 0 === Nt && Jt(it)), a3 !== u) {
          if (k2.test(t3.charAt(zt)) ? (o3 = t3.charAt(zt), zt++) : (o3 = u, 0 === Nt && Jt(at)), o3 === u && (o3 = null), c3 = [], q2.test(t3.charAt(zt)) ? (i3 = t3.charAt(zt), zt++) : (i3 = u, 0 === Nt && Jt(ot)), i3 !== u) for (; i3 !== u; ) c3.push(i3), q2.test(t3.charAt(zt)) ? (i3 = t3.charAt(zt), zt++) : (i3 = u, 0 === Nt && Jt(ot));
          else c3 = u;
          c3 !== u ? n3 = a3 = [a3, o3, c3] : (zt = n3, n3 = u);
        } else zt = n3, n3 = u;
        n3 === u && (n3 = null), Rt = e4, e4 = St();
      } else zt = e4, e4 = u;
      return e4;
    }
    function ie(t4, e4) {
      return t4.map(function(t5) {
        return t5[e4];
      });
    }
    function se(t4, e4, r4) {
      return [t4].concat(ie(e4, r4));
    }
    if ((n2 = c2()) !== u && zt === t3.length) return n2;
    throw n2 !== u && zt < t3.length && Jt(_t()), Kt(Pt, Mt < t3.length ? t3.charAt(Mt) : null, Mt < t3.length ? Gt(Mt, Mt + 1) : Gt(Mt, Mt));
  }
  return t2(e3, Error), e3.prototype.format = function(t3) {
    var e4 = "Error: " + this.message;
    if (this.location) {
      var n2, u = null;
      for (n2 = 0; n2 < t3.length; n2++) if (t3[n2].source === this.location.source) {
        u = t3[n2].text.split(/\r\n|\n|\r/g);
        break;
      }
      var a2 = this.location.start, o2 = this.location.source && "function" == typeof this.location.source.offset ? this.location.source.offset(a2) : a2, c2 = this.location.source + ":" + o2.line + ":" + o2.column;
      if (u) {
        var i2 = this.location.end, s2 = r2("", o2.line.toString().length, " "), l2 = u[a2.line - 1], f2 = (a2.line === i2.line ? i2.column : l2.length + 1) - a2.column || 1;
        e4 += "\n --> " + c2 + "\n" + s2 + " |\n" + o2.line + " | " + l2 + "\n" + s2 + " | " + r2("", a2.column - 1, " ") + r2("", f2, "^");
      } else e4 += "\n at " + c2;
    }
    return e4;
  }, e3.buildMessage = function(t3, e4) {
    var r3 = {
      literal: function(t4) {
        return '"' + u(t4.text) + '"';
      },
      class: function(t4) {
        var e5 = t4.parts.map(function(t5) {
          return Array.isArray(t5) ? a2(t5[0]) + "-" + a2(t5[1]) : a2(t5);
        });
        return "[" + (t4.inverted ? "^" : "") + e5.join("") + "]";
      },
      any: function() {
        return "any character";
      },
      end: function() {
        return "end of input";
      },
      other: function(t4) {
        return t4.description;
      }
    };
    function n2(t4) {
      return t4.charCodeAt(0).toString(16).toUpperCase();
    }
    function u(t4) {
      return t4.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(t5) {
        return "\\x0" + n2(t5);
      }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(t5) {
        return "\\x" + n2(t5);
      });
    }
    function a2(t4) {
      return t4.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(t5) {
        return "\\x0" + n2(t5);
      }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(t5) {
        return "\\x" + n2(t5);
      });
    }
    function o2(t4) {
      return r3[t4.type](t4);
    }
    function c2(t4) {
      var e5, r4, n3 = t4.map(o2);
      if (n3.sort(), n3.length > 0) {
        for (e5 = 1, r4 = 1; e5 < n3.length; e5++) n3[e5 - 1] !== n3[e5] && (n3[r4] = n3[e5], r4++);
        n3.length = r4;
      }
      switch (n3.length) {
        case 1:
          return n3[0];
        case 2:
          return n3[0] + " or " + n3[1];
        default:
          return n3.slice(0, -1).join(", ") + ", or " + n3[n3.length - 1];
      }
    }
    function i2(t4) {
      return t4 ? '"' + u(t4) + '"' : "end of input";
    }
    return "Expected " + c2(t3) + " but " + i2(e4) + " found.";
  }, {
    SyntaxError: e3,
    parse: n
  };
}, (m2 = v).exports && (m2.exports = g());
var d2 = v.exports;
function y(t2) {
  if (!t2 || 0 === t2.length) return null;
  if ("string" == typeof t2) {
    const e4 = A(t2);
    return e4 && 0 !== e4.length ? e4 : null;
  }
  const e3 = t2.map((t3) => {
    if (!Number.isFinite(t3.scale) || t3.scale <= 0) throw new s("effect:invalid-scale", "scale must be finite and greater than 0", {
      stop: t3
    });
    return {
      scale: t3.scale,
      effects: A(t3.value)
    };
  });
  e3.sort((t3, e4) => e4.effects.length - t3.effects.length);
  for (let r2 = 0; r2 < e3.length - 1; r2++) {
    if (!t(e3[r2].effects, e3[r2 + 1].effects)) throw new s("effect:interpolation-impossible", "Cannot interpolate by scale between 2 lists of mixed effects", {
      a: e3[r2].effects,
      b: e3[r2 + 1].effects
    });
    e(e3[r2].effects, e3[r2 + 1].effects);
  }
  return e3.sort((t3, e4) => e4.scale - t3.scale), e3;
}
function A(t2) {
  let e3;
  if (!t2) return [];
  try {
    e3 = d2.parse(t2);
  } catch (r2) {
    throw new s("effect:invalid-syntax", "Invalid effect syntax", {
      value: t2,
      error: r2
    });
  }
  return e3.map((t3) => w(t3));
}
function w(t2) {
  try {
    switch (t2.name) {
      case "grayscale":
      case "sepia":
      case "saturate":
      case "invert":
      case "brightness":
      case "contrast":
        return x(t2);
      case "opacity":
        return b(t2);
      case "hue-rotate":
        return C(t2);
      case "blur":
        return F(t2);
      case "drop-shadow":
        return E(t2);
      case "bloom":
        return j(t2);
    }
  } catch (e3) {
    throw e3.details.filter = t2, e3;
  }
  throw new s("effect:unknown-effect", `Effect '${t2.name}' is not supported`, {
    effect: t2
  });
}
function x(t2) {
  let e3 = 1;
  return $(t2.parameters, 1), 1 === t2.parameters.length && (e3 = P(t2.parameters[0])), new p(t2.name, e3);
}
function b(t2) {
  let e3 = 1;
  return $(t2.parameters, 1), 1 === t2.parameters.length && (e3 = P(t2.parameters[0])), new f(e3);
}
function C(t2) {
  let e3 = 0;
  return $(t2.parameters, 1), 1 === t2.parameters.length && (e3 = T(t2.parameters[0])), new m(e3);
}
function F(t2) {
  let e3 = 0;
  return $(t2.parameters, 1), 1 === t2.parameters.length && (e3 = U(t2.parameters[0]), k(e3, t2.parameters[0])), new l(e3);
}
function E(t2) {
  const e3 = [];
  let r2 = null;
  for (const n of t2.parameters) if ("color" === n.type) {
    if (e3.length && Object.freeze(e3), r2) throw new s("effect:type-error", "Accepts only one color", {});
    r2 = H(n);
  } else {
    const t3 = U(n);
    if (Object.isFrozen(e3)) throw new s("effect:type-error", "<length> parameters not consecutive", {
      lengths: e3
    });
    e3.push(t3), 3 === e3.length && k(t3, n);
  }
  if (e3.length < 2 || e3.length > 3) throw new s("effect:type-error", `Expected <length>{2,3}, Actual: <length>{${e3.length}}`, {
    lengths: e3
  });
  return new d(e3[0], e3[1], e3[2] || 0, r2 || _("black"));
}
function j(t2) {
  let e3 = 1, r2 = 0, n = 0;
  return $(t2.parameters, 3), t2.parameters[0] && (e3 = P(t2.parameters[0])), t2.parameters[1] && (r2 = U(t2.parameters[1]), k(r2, t2.parameters[1])), t2.parameters[2] && (n = P(t2.parameters[2])), new c(e3, r2, n);
}
function $(t2, e3) {
  if (t2.length > e3) throw new s("effect:type-error", `Function supports up to ${e3} parameters, Actual: ${t2.length}`, {
    parameters: t2
  });
}
function O(t2) {
  if ("color" === t2.type) return "<color>";
  if (t2.unit) {
    if (t2.unit in I) return "<length>";
    if (t2.unit in z) return "<angle>";
    if ("%" === t2.unit) return "<percentage>";
  }
  return "<double>";
}
function k(t2, e3) {
  if (t2 < 0) throw new s("effect:type-error", `Negative values are not allowed, Actual: ${t2}`, {
    term: e3
  });
}
function q(t2) {
  if ("quantity" !== t2.type || null !== t2.unit) throw new s("effect:type-error", `Expected <double>, Actual: ${O(t2)}`, {
    term: t2
  });
}
function S(t2) {
  if ("quantity" !== t2.type || null !== t2.unit && "%" !== t2.unit) throw new s("effect:type-error", `Expected <double> or <percentage>, Actual: ${O(t2)}`, {
    term: t2
  });
}
var z = {
  deg: 1,
  grad: 0.9,
  rad: 180 / Math.PI,
  turn: 360
};
function R(t2) {
  if ("quantity" !== t2.type || !(0 === t2.value && null === t2.unit || t2.unit && null != z[t2.unit])) throw new s("effect:type-error", `Expected <angle>, Actual: ${O(t2)}`, {
    term: t2
  });
}
var I = {
  px: 1,
  cm: 96 / 2.54,
  mm: 96 / 2.54 / 10,
  in: 96,
  pc: 16,
  pt: 96 / 72
};
function M(t2) {
  if ("quantity" !== t2.type || !(0 === t2.value && null === t2.unit || t2.unit && null != I[t2.unit])) throw new s("effect:type-error", `Expected <length>, Actual: ${O(t2)}`, {
    term: t2
  });
}
function P(t2) {
  S(t2);
  const e3 = t2.value;
  return k(e3, t2), "%" === t2.unit ? 0.01 * e3 : e3;
}
function N(t2) {
  return q(t2), k(t2.value, t2), t2.value;
}
function T(t2) {
  return R(t2), t2.value * z[t2.unit] || 0;
}
function U(t2) {
  return M(t2), t2.value * I[t2.unit] || 0;
}
function H(e3) {
  switch (e3.colorType) {
    case "hex":
      return i(e3.value);
    case "named":
      return _(e3.value);
    case "function":
      return G(e3.value);
  }
}
function _(t2) {
  if (!r(t2)) throw new s("effect:unknown-color", `color '${t2}' isn't valid`, {
    namedColor: t2
  });
  return a(t2);
}
var B = /^rgba?/i;
var D = /^hsla?/i;
function G(t2) {
  if ($(t2.parameters, 4), B.test(t2.name)) return [P(t2.parameters[0]), P(t2.parameters[1]), P(t2.parameters[2]), t2.parameters[3] ? P(t2.parameters[3]) : 1];
  if (D.test(t2.name)) return o(N(t2.parameters[0]), P(t2.parameters[1]), P(t2.parameters[2]), t2.parameters[3] ? P(t2.parameters[3]) : 1);
  throw new s("effect:syntax-error", `Invalid color function '${t2.name}'`, {
    colorFunction: t2
  });
}

export {
  y
};
//# sourceMappingURL=chunk-MVS2BECH.js.map
