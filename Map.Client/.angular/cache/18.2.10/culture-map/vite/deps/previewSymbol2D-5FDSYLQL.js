import {
  l
} from "./chunk-OOVP3XBH.js";
import {
  d,
  e,
  t
} from "./chunk-AHCFNSHV.js";
import {
  f,
  g,
  u as u3,
  y
} from "./chunk-ZUHJZKEM.js";
import "./chunk-B4EEJXBQ.js";
import {
  c
} from "./chunk-RSQ7FJBQ.js";
import "./chunk-EK3IKAMF.js";
import "./chunk-IJVN5N2Q.js";
import "./chunk-ZR5BOILP.js";
import {
  H
} from "./chunk-TCPN7AEH.js";
import "./chunk-PQ4T66BG.js";
import "./chunk-SWPHGZYB.js";
import "./chunk-634JLXD4.js";
import "./chunk-Y3EDGYWG.js";
import "./chunk-UF6JOUSJ.js";
import {
  s as s2
} from "./chunk-T5JGQSO3.js";
import "./chunk-CIW3KHOW.js";
import "./chunk-J55F4AC2.js";
import "./chunk-IQLBZKUD.js";
import "./chunk-7MZZCQ64.js";
import "./chunk-IMVP5ADD.js";
import "./chunk-H7WPOTQH.js";
import "./chunk-6A7CWJED.js";
import "./chunk-V5RMUGJJ.js";
import "./chunk-D2NB6D6N.js";
import "./chunk-6EUVKE22.js";
import "./chunk-A3NNJ7XA.js";
import "./chunk-XTVPEVHA.js";
import "./chunk-DTUSTSEJ.js";
import "./chunk-JCWFGRHQ.js";
import "./chunk-JILEJ6R2.js";
import "./chunk-GAW5JHG4.js";
import "./chunk-OEKKQXBD.js";
import "./chunk-S3IO7V4Q.js";
import "./chunk-DZALMCYL.js";
import {
  u as u2
} from "./chunk-K226GFDN.js";
import "./chunk-4ZZRP4MA.js";
import {
  u
} from "./chunk-7ZJ6P7J7.js";
import "./chunk-FPFZQCEQ.js";
import "./chunk-K7TO5IIO.js";
import "./chunk-A4VVDRCH.js";
import "./chunk-CQDYITZC.js";
import "./chunk-YVULORT6.js";
import "./chunk-PB33BAI3.js";
import "./chunk-CVB43GGP.js";
import "./chunk-LLDOZWVV.js";
import "./chunk-7XMEZQ34.js";
import "./chunk-BDM2D6IC.js";
import "./chunk-U2ZVAEKG.js";
import "./chunk-EDSMXTFO.js";
import "./chunk-MNLT652N.js";
import "./chunk-7RMVJCDW.js";
import "./chunk-T6GCUITX.js";
import "./chunk-TUIGM7TV.js";
import "./chunk-IHVSZYZS.js";
import "./chunk-6CA6K3O7.js";
import "./chunk-NYQ5CYNR.js";
import "./chunk-O7UDKFOW.js";
import "./chunk-TKPMIAIW.js";
import "./chunk-NQOJNTB3.js";
import "./chunk-MFOQYQFG.js";
import "./chunk-NKCPFCP3.js";
import "./chunk-3ZXOUEQG.js";
import "./chunk-AXVPJBVW.js";
import "./chunk-OXEPWRM7.js";
import "./chunk-POILQGXA.js";
import "./chunk-JJS7PR2U.js";
import "./chunk-L5YS4GSA.js";
import "./chunk-PRREDSOB.js";
import "./chunk-V5C6HSAM.js";
import "./chunk-SYATLP3H.js";
import "./chunk-V6AMQYXE.js";
import "./chunk-6WHTZNUH.js";
import "./chunk-EITGQLII.js";
import "./chunk-TIVJXVMN.js";
import "./chunk-XNUH25NY.js";
import "./chunk-WGAPNV7F.js";
import "./chunk-BXQGM56A.js";
import "./chunk-4Z5SGKRM.js";
import "./chunk-ANKOCGE2.js";
import "./chunk-7CJXZOFG.js";
import "./chunk-IRGZKO7V.js";
import "./chunk-5SELS7VU.js";
import "./chunk-DDYVXG4F.js";
import "./chunk-ANP42J2U.js";
import "./chunk-HJY2YILU.js";
import "./chunk-7DA6A5LD.js";
import "./chunk-2MMLMOWS.js";
import "./chunk-4323ZVPF.js";
import {
  s2 as s
} from "./chunk-WYIDUUN2.js";
import "./chunk-DXLOWWK7.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/symbols/support/previewSymbol2D.js
var d2 = "picture-fill";
var f2 = "picture-marker";
var y2 = "simple-fill";
var g2 = "simple-line";
var w = "simple-marker";
var v = "text";
var x = "Aa";
var b = t.size;
var M = t.maxSize;
var k = t.maxOutlineSize;
var L = t.lineWidth;
var z = 225;
var j = document.createElement("canvas");
function C(e2, t2) {
  const a = j.getContext("2d"), o = [];
  t2 && (t2.weight && o.push(t2.weight), t2.size && o.push(t2.size + "px"), t2.family && o.push(t2.family)), a.font = o.join(" ");
  const {
    width: i,
    actualBoundingBoxLeft: l2,
    actualBoundingBoxRight: n,
    actualBoundingBoxAscent: s3,
    actualBoundingBoxDescent: r
  } = a.measureText(e2);
  return {
    width: Math.ceil(Math.max(i, l2 + n)),
    height: Math.ceil(s3 + r),
    x: Math.floor(l2),
    y: Math.floor((s3 - r) / 2)
  };
}
function S(e2) {
  const t2 = e2?.size;
  return {
    width: null != t2 && "object" == typeof t2 && "width" in t2 ? u(t2.width) : null,
    height: null != t2 && "object" == typeof t2 && "height" in t2 ? u(t2.height) : null
  };
}
function B(e2, t2) {
  return __async(this, null, function* () {
    const a = t2.fill, o = e2.color;
    if ("pattern" === a?.type && o && e2.type !== d2) {
      const e3 = yield f(a.src, o.toCss(true));
      a.src = e3, t2.fill = a;
    }
  });
}
function U(e2, t2, a, i) {
  return __async(this, null, function* () {
    if (!("font" in e2) || !e2.font || "text" !== t2.shape.type) return;
    try {
      yield c(e2.font);
    } catch {
    }
    const {
      width: l2,
      height: n
    } = S(i);
    if (!/[\uE600-\uE6FF]/.test(t2.shape.text)) {
      const {
        width: o,
        height: s3,
        x: r,
        y: c2
      } = C(t2.shape.text, {
        weight: t2.font?.weight,
        size: t2.font?.size,
        family: t2.font?.family
      });
      a[0] = l2 ?? o, a[1] = n ?? s3, t2.shape.x = r, t2.shape.y = c2;
      const h = null != i?.rotation ? i.rotation : "angle" in e2 ? e2.angle : null;
      if (h) {
        const e3 = h * (Math.PI / 180), t3 = Math.abs(Math.sin(e3)), o2 = Math.abs(Math.cos(e3));
        a[1] = a[0] * t3 + a[1] * o2;
      }
    }
  });
}
function E(e2, t2, a, o, l2) {
  if (null != e2.haloColor && null != e2.haloSize) {
    l2.masking ??= a.map(() => []);
    const n = u(e2.haloSize);
    o[0] += n, o[1] += n, a.unshift([__spreadProps(__spreadValues({}, t2), {
      fill: null,
      stroke: {
        color: e2.haloColor,
        width: 2 * n,
        join: "round",
        cap: "round"
      }
    })]), l2.masking.unshift([{
      shape: {
        type: "rect",
        x: 0,
        y: 0,
        width: o[0] + 2 * s2,
        height: o[1] + 2 * s2
      },
      fill: [255, 255, 255],
      stroke: null
    }, __spreadProps(__spreadValues({}, t2), {
      fill: [0, 0, 0, 0],
      stroke: null
    })]);
  }
  null == e2.backgroundColor && null == e2.borderLineColor || (o[0] += 2 * s2, o[1] += 2 * s2, a.unshift([{
    shape: {
      type: "rect",
      x: 0,
      y: 0,
      width: o[0],
      height: o[1]
    },
    fill: e2.backgroundColor,
    stroke: {
      color: e2.borderLineColor,
      width: u(e2.borderLineSize)
    }
  }]), l2.masking?.unshift([]));
}
function F(e2, t2) {
  return e2 > t2 ? "dark" : "light";
}
function D(e2, t2) {
  const a = "number" == typeof t2?.size ? t2?.size : null, o = null != a ? u(a) : null, r = null != t2?.maxSize ? u(t2.maxSize) : null, c2 = null != t2?.rotation ? t2.rotation : "angle" in e2 ? e2.angle : null, u4 = u3(e2);
  let m = y(e2);
  "dark" !== A(e2, 245) || t2?.ignoreWhiteSymbols || (m = __spreadProps(__spreadValues({
    width: 0.75
  }, m), {
    color: "#bdc3c7"
  }));
  const p = {
    shape: null,
    fill: u4,
    stroke: m,
    offset: [0, 0]
  };
  m?.width && (m.width = Math.min(m.width, k));
  const z2 = m?.width || 0;
  let j2 = null != t2?.size && (null == t2?.scale || t2?.scale), B2 = 0, U2 = 0, E2 = false;
  switch (e2.type) {
    case w: {
      const a2 = e2.style, {
        width: l2,
        height: n
      } = S(t2), s3 = l2 === n && null != l2 ? l2 : null != o ? o : Math.min(u(e2.size), r || M);
      switch (B2 = s3, U2 = s3, a2) {
        case "circle":
          p.shape = {
            type: "circle",
            cx: 0,
            cy: 0,
            r: 0.5 * s3
          }, j2 || (B2 += z2, U2 += z2);
          break;
        case "cross":
          p.shape = {
            type: "path",
            path: [{
              command: "M",
              values: [0, 0.5 * U2]
            }, {
              command: "L",
              values: [B2, 0.5 * U2]
            }, {
              command: "M",
              values: [0.5 * B2, 0]
            }, {
              command: "L",
              values: [0.5 * B2, U2]
            }]
          };
          break;
        case "diamond":
          p.shape = {
            type: "path",
            path: [{
              command: "M",
              values: [0, 0.5 * U2]
            }, {
              command: "L",
              values: [0.5 * B2, 0]
            }, {
              command: "L",
              values: [B2, 0.5 * U2]
            }, {
              command: "L",
              values: [0.5 * B2, U2]
            }, {
              command: "Z",
              values: []
            }]
          }, j2 || (B2 += z2, U2 += z2);
          break;
        case "square":
          p.shape = {
            type: "path",
            path: [{
              command: "M",
              values: [0, 0]
            }, {
              command: "L",
              values: [B2, 0]
            }, {
              command: "L",
              values: [B2, U2]
            }, {
              command: "L",
              values: [0, U2]
            }, {
              command: "Z",
              values: []
            }]
          }, j2 || (B2 += z2, U2 += z2), c2 && (E2 = true);
          break;
        case "triangle":
          p.shape = {
            type: "path",
            path: [{
              command: "M",
              values: [0.5 * B2, 0]
            }, {
              command: "L",
              values: [B2, U2]
            }, {
              command: "L",
              values: [0, U2]
            }, {
              command: "Z",
              values: []
            }]
          }, j2 || (B2 += z2, U2 += z2), c2 && (E2 = true);
          break;
        case "x":
          p.shape = {
            type: "path",
            path: [{
              command: "M",
              values: [0, 0]
            }, {
              command: "L",
              values: [B2, U2]
            }, {
              command: "M",
              values: [B2, 0]
            }, {
              command: "L",
              values: [0, U2]
            }]
          }, c2 && (E2 = true);
          break;
        case "path":
          p.shape = {
            type: "path",
            path: e2.path || ""
          }, j2 || (B2 += z2, U2 += z2), c2 && (E2 = true), j2 = true;
      }
      break;
    }
    case g2: {
      const {
        width: e3,
        height: a2
      } = S(t2), i = g(m).reduce((e4, t3) => e4 + t3, 0), l2 = i && Math.ceil(L / i), n = a2 ?? o ?? z2, r2 = e3 ?? (i * l2 || L);
      m && (m.width = n), B2 = r2, U2 = n, j2 = true, p.shape = {
        type: "path",
        path: [{
          command: "M",
          values: [n / 2, U2 / 2]
        }, {
          command: "L",
          values: [B2 - n / 2, U2 / 2]
        }]
      };
      break;
    }
    case d2:
    case y2: {
      const e3 = "object" == typeof t2?.symbolConfig && !!t2?.symbolConfig?.isSquareFill, {
        width: a2,
        height: i
      } = S(t2);
      B2 = !e3 && a2 !== i || null == a2 ? null != o ? o : b : a2, U2 = !e3 && a2 !== i || null == i ? B2 : i, j2 || (B2 += z2, U2 += z2), j2 = true, p.shape = e3 ? {
        type: "path",
        path: [{
          command: "M",
          values: [0, 0]
        }, {
          command: "L",
          values: [B2, 0]
        }, {
          command: "L",
          values: [B2, U2]
        }, {
          command: "L",
          values: [0, U2]
        }, {
          command: "L",
          values: [0, 0]
        }, {
          command: "Z",
          values: []
        }]
      } : e.fill[0];
      break;
    }
    case f2: {
      const a2 = Math.min(u(e2.width), r || M), l2 = Math.min(u(e2.height), r || M), {
        width: n,
        height: s3
      } = S(t2), h = n === s3 && null != n ? n : null != o ? o : Math.max(a2, l2), u5 = a2 / l2;
      B2 = u5 <= 1 ? Math.ceil(h * u5) : h, U2 = u5 <= 1 ? h : Math.ceil(h / u5), p.shape = {
        type: "image",
        x: -Math.round(B2 / 2),
        y: -Math.round(U2 / 2),
        width: B2,
        height: U2,
        src: e2.url || ""
      }, c2 && (E2 = true);
      break;
    }
    case v: {
      const a2 = e2, l2 = t2?.overrideText || a2.text || x, n = a2.font, {
        width: s3,
        height: c3
      } = S(t2), h = null != c3 ? c3 : null != o ? o : Math.min(u(n.size), r || M), {
        width: u5,
        height: m2
      } = C(l2, {
        weight: n.weight,
        size: h,
        family: n.family
      }), d3 = /[\uE600-\uE6FF]/.test(l2);
      B2 = s3 ?? (d3 ? h : u5), U2 = d3 ? h : m2;
      let f3 = 0.5 * (d3 ? h : m2);
      d3 && (f3 += 5), p.shape = {
        type: "text",
        text: l2,
        x: a2.xoffset || 0,
        y: a2.yoffset || f3,
        align: "middle",
        alignBaseline: a2.verticalAlignment,
        decoration: n && n.decoration,
        rotated: a2.rotated,
        kerning: a2.kerning
      }, p.font = n && {
        size: h,
        style: n.style,
        decoration: n.decoration,
        weight: n.weight,
        family: n.family
      };
      break;
    }
  }
  return {
    shapeDescriptor: p,
    size: [B2, U2],
    renderOptions: {
      node: t2?.node,
      scale: j2,
      opacity: t2?.opacity,
      rotation: c2,
      useRotationSize: E2,
      effectView: t2?.effectView,
      ariaLabel: t2?.ariaLabel
    }
  };
}
function Z(e2, t2) {
  return __async(this, null, function* () {
    const {
      shapeDescriptor: o,
      size: i,
      renderOptions: l2
    } = D(e2, t2);
    if (!o.shape) throw new s("symbolPreview: renderPreviewHTML2D", "symbol not supported.");
    yield B(e2, o), yield U(e2, o, i, t2);
    const n = [[o]];
    if ("object" == typeof t2?.symbolConfig && t2?.symbolConfig?.applyColorModulation) {
      const e3 = 0.6 * i[0];
      n.unshift([__spreadProps(__spreadValues({}, o), {
        offset: [-e3, 0],
        fill: d(o.fill, -0.3)
      })]), n.push([__spreadProps(__spreadValues({}, o), {
        offset: [e3, 0],
        fill: d(o.fill, 0.3)
      })]), i[0] += 2 * e3, l2.scale = false;
    }
    return "text" === e2.type && E(e2, o, n, i, l2), l(n, i, l2);
  });
}
function A(a, o = z) {
  const i = u3(a), s3 = y(a), r = !i || "type" in i ? null : new u2(i), c2 = s3?.color ? new u2(s3?.color) : null, h = r ? F(H(r), o) : null, u4 = c2 ? F(H(c2), o) : null;
  return u4 ? h ? h === u4 ? h : o >= z ? "light" : "dark" : u4 : h;
}
export {
  A as getContrastingBackgroundTheme,
  D as getRenderSymbolParameters,
  Z as previewSymbol2D
};
//# sourceMappingURL=previewSymbol2D-5FDSYLQL.js.map
