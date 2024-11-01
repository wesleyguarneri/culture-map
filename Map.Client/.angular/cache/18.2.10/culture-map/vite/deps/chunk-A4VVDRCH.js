import {
  j
} from "./chunk-CQDYITZC.js";

// ../../../node_modules/@arcgis/core/libs/maquette/projection.js
var t = "http://www.w3.org/";
var r = `${t}2000/svg`;
var o = `${t}1999/xlink`;
var i = [];
var n = (e, t3) => {
  let r2 = {};
  return Object.keys(e).forEach((t4) => {
    r2[t4] = e[t4];
  }), t3 && Object.keys(t3).forEach((e2) => {
    r2[e2] = t3[e2];
  }), r2;
};
var s = (e, t3) => e.vnodeSelector === t3.vnodeSelector && (e.properties && t3.properties ? e.properties.key === t3.properties.key && e.properties.bind === t3.properties.bind : !e.properties && !t3.properties);
var l = (e) => {
  if ("string" != typeof e) throw new Error("Style values must be strings");
};
var p = (e, t3, r2) => {
  if ("" !== t3.vnodeSelector) {
    for (let o3 = r2; o3 < e.length; o3++) if (s(e[o3], t3)) return o3;
  }
  return -1;
};
var d = (e, t3, r2, o3) => {
  let i3 = e[t3];
  if ("" === i3.vnodeSelector) return;
  let n4 = i3.properties;
  if (!(n4 ? void 0 === n4.key ? n4.bind : n4.key : void 0)) {
    for (let l2 = 0; l2 < e.length; l2++) if (l2 !== t3) {
      let t4 = e[l2];
      if (s(t4, i3)) throw new Error(`${r2.vnodeSelector} had a ${i3.vnodeSelector} child ${"added" === o3 ? o3 : "removed"}, but there is now more than one. You must add unique key properties to make them distinguishable.`);
    }
  }
};
var a = (e) => {
  if (e.properties) {
    let t3 = e.properties.enterAnimation;
    t3 && t3(e.domNode, e.properties);
  }
};
var f = [];
var c = false;
var u = (e) => {
  (e.children || []).forEach(u), e.properties && e.properties.afterRemoved && e.properties.afterRemoved.apply(e.properties.bind || e.properties, [e.domNode]);
};
var m = () => {
  c = false, f.forEach(u), f.length = 0;
};
var h = (e) => {
  f.push(e), c || (c = true, "undefined" != typeof window && "requestIdleCallback" in window ? window.requestIdleCallback(m, {
    timeout: 16
  }) : setTimeout(m, 16));
};
var v = (e) => {
  let t3 = e.domNode;
  if (e.properties) {
    let r2 = e.properties.exitAnimation;
    if (r2) {
      t3.style.pointerEvents = "none";
      let o3 = () => {
        t3.parentNode && (t3.parentNode.removeChild(t3), h(e));
      };
      return void r2(t3, o3, e.properties);
    }
  }
  t3.parentNode && (t3.parentNode.removeChild(t3), h(e));
};
var y = (t3, i3, n4) => {
  if (!i3) return;
  let s2 = n4.eventHandlerInterceptor, p3 = Object.keys(i3), d4 = p3.length;
  for (let a2 = 0; a2 < d4; a2++) {
    let d5 = p3[a2], f2 = i3[d5];
    if ("className" === d5) throw new Error('Property "className" is not supported, use "class".');
    if ("class" === d5) k(t3, f2, true);
    else if ("classes" === d5) {
      let e = Object.keys(f2), r2 = e.length;
      for (let o3 = 0; o3 < r2; o3++) {
        let r3 = e[o3];
        f2[r3] && t3.classList.add(r3);
      }
    } else if ("styles" === d5) {
      let e = Object.keys(f2), r2 = e.length;
      for (let o3 = 0; o3 < r2; o3++) {
        let r3 = e[o3], i4 = f2[r3];
        i4 && (l(i4), n4.styleApplyer(t3, r3, i4));
      }
    } else if ("key" !== d5 && null != f2) {
      let l2 = typeof f2;
      "function" === l2 ? (0 === d5.lastIndexOf("on", 0) && (s2 && (f2 = s2(d5, f2, t3, i3)), "oninput" === d5 && function() {
        let e = f2;
        f2 = function(t4) {
          e.apply(this, [t4]), t4.target["oninput-value"] = t4.target.value;
        };
      }()), t3[d5] = f2) : n4.namespace === r ? "href" === d5 ? t3.setAttributeNS(o, d5, f2) : t3.setAttribute(d5, f2) : "string" === l2 && "value" !== d5 ? "innerHTML" === d5 ? t3[d5] = j.sanitize(f2) : g(t3) && d5 in t3 ? t3[d5] = f2 : t3.setAttribute(d5, f2) : t3[d5] = f2;
    }
  }
};
function g(e) {
  if (!(e instanceof Element && e.tagName.includes("-"))) return false;
  const t3 = window.customElements.get(e.tagName.toLowerCase());
  return !!t3 && e instanceof t3;
}
var N;
var b = (e, t3, r2) => {
  if (t3) for (let o3 of t3) x(o3, e, void 0, r2);
};
var w = (e, t3, r2) => {
  b(e, t3.children, r2), t3.text && (e.textContent = t3.text), y(e, t3.properties, r2), t3.properties && t3.properties.afterCreate && t3.properties.afterCreate.apply(t3.properties.bind || t3.properties, [e, r2, t3.vnodeSelector, t3.properties, t3.children]);
};
var x = (e, t3, o3, i3) => {
  let s2, l2 = 0, p3 = e.vnodeSelector, d4 = t3.ownerDocument;
  if ("" === p3) s2 = e.domNode = d4.createTextNode(e.text), void 0 !== o3 ? t3.insertBefore(s2, o3) : t3.appendChild(s2);
  else {
    for (let a2 = 0; a2 <= p3.length; ++a2) {
      let f2 = p3.charAt(a2);
      if (a2 === p3.length || "." === f2 || "#" === f2) {
        let f3 = p3.charAt(l2 - 1), c2 = p3.slice(l2, a2);
        "." === f3 ? s2.classList.add(c2) : "#" === f3 ? s2.id = c2 : ("svg" === c2 && (i3 = n(i3, {
          namespace: r
        })), void 0 !== i3.namespace ? s2 = e.domNode = d4.createElementNS(i3.namespace, c2) : (s2 = e.domNode = e.domNode || d4.createElement(c2), "input" === c2 && e.properties && void 0 !== e.properties.type && s2.setAttribute("type", e.properties.type)), void 0 !== o3 ? t3.insertBefore(s2, o3) : s2.parentNode !== t3 && t3.appendChild(s2)), l2 = a2 + 1;
      }
    }
    w(s2, e, i3);
  }
};
var k = (e, t3, r2) => {
  t3 && t3.split(" ").forEach((t4) => {
    t4 && e.classList.toggle(t4, r2);
  });
};
var A = (t3, i3, n4, s2) => {
  if (!n4) return;
  let p3 = false, d4 = Object.keys(n4), a2 = d4.length;
  for (let f2 = 0; f2 < a2; f2++) {
    let a3 = d4[f2], c2 = n4[a3], u2 = i3[a3];
    if ("class" === a3) u2 !== c2 && (k(t3, u2, false), k(t3, c2, true));
    else if ("classes" === a3) {
      let e = t3.classList, r2 = Object.keys(c2), o3 = r2.length;
      for (let t4 = 0; t4 < o3; t4++) {
        let o4 = r2[t4], i4 = !!c2[o4];
        i4 !== !!u2[o4] && (p3 = true, i4 ? e.add(o4) : e.remove(o4));
      }
    } else if ("styles" === a3) {
      let e = Object.keys(c2), r2 = e.length;
      for (let o3 = 0; o3 < r2; o3++) {
        let r3 = e[o3], i4 = c2[r3];
        i4 !== u2[r3] && (p3 = true, i4 ? (l(i4), s2.styleApplyer(t3, r3, i4)) : s2.styleApplyer(t3, r3, ""));
      }
    } else if (c2 || "string" != typeof u2 || (c2 = ""), "value" !== a3 || g(t3)) {
      if (c2 !== u2) {
        let i4 = typeof c2;
        "function" === i4 && s2.eventHandlerInterceptor || (s2.namespace === r ? "href" === a3 ? t3.setAttributeNS(o, a3, c2) : t3.setAttribute(a3, c2) : "string" === i4 ? "innerHTML" === a3 ? t3[a3] = j.sanitize(c2) : "role" === a3 && "" === c2 ? t3.removeAttribute(a3) : g(t3) && a3 in t3 ? t3[a3] = c2 : t3.setAttribute(a3, c2) : t3[a3] !== c2 && (t3[a3] = c2), p3 = true);
      }
    } else {
      let e = t3[a3];
      e !== c2 && (t3["oninput-value"] ? e === t3["oninput-value"] : c2 !== u2) && (t3[a3] = c2, t3["oninput-value"] = void 0), c2 !== u2 && (p3 = true);
    }
  }
  return p3;
};
var S = (e, t3, r2, o3, n4) => {
  if (r2 === o3) return false;
  o3 = o3 || i;
  let l2, f2 = (r2 = r2 || i).length, c2 = o3.length, u2 = 0, m2 = 0, h2 = false;
  for (; m2 < c2; ) {
    let i3 = u2 < f2 ? r2[u2] : void 0, c3 = o3[m2];
    if (void 0 !== i3 && s(i3, c3)) h2 = N(i3, c3, n4) || h2, u2++;
    else {
      let i4 = p(r2, c3, u2 + 1);
      if (i4 >= 0) {
        for (l2 = u2; l2 < i4; l2++) v(r2[l2]), d(r2, l2, e, "removed");
        h2 = N(r2[i4], c3, n4) || h2, u2 = i4 + 1;
      } else x(c3, t3, u2 < f2 ? r2[u2].domNode : void 0, n4), a(c3), d(o3, m2, e, "added");
    }
    m2++;
  }
  if (f2 > u2) for (l2 = u2; l2 < f2; l2++) v(r2[l2]), d(r2, l2, e, "removed");
  return h2;
};
N = (e, t3, o3) => {
  let i3 = e.domNode, s2 = false;
  if (e === t3) return false;
  let l2 = false;
  if ("" === t3.vnodeSelector) {
    if (t3.text !== e.text) {
      let e2 = i3.ownerDocument.createTextNode(t3.text);
      return i3.parentNode.replaceChild(e2, i3), t3.domNode = e2, s2 = true, s2;
    }
    t3.domNode = i3;
  } else 0 === t3.vnodeSelector.lastIndexOf("svg", 0) && (o3 = n(o3, {
    namespace: r
  })), e.text !== t3.text && (l2 = true, void 0 === t3.text ? i3.removeChild(i3.firstChild) : i3.textContent = t3.text), t3.domNode = i3, l2 = S(t3, i3, e.children, t3.children, o3) || l2, l2 = A(i3, e.properties, t3.properties, o3) || l2, t3.properties && t3.properties.afterUpdate && t3.properties.afterUpdate.apply(t3.properties.bind || t3.properties, [i3, o3, t3.vnodeSelector, t3.properties, t3.children]);
  return l2 && t3.properties && t3.properties.updateAnimation && t3.properties.updateAnimation(i3, t3.properties, e.properties), s2;
};
var C = (e, t3) => ({
  getLastRender: () => e,
  update: (r2) => {
    if (e.vnodeSelector !== r2.vnodeSelector) throw new Error("The selector for the root VNode may not be changed. (consider using dom.merge and add one extra level to the virtual DOM)");
    let o3 = e;
    e = r2, N(o3, r2, t3);
  },
  domNode: e.domNode
});

// ../../../node_modules/@arcgis/core/libs/maquette/dom.js
var p2 = {
  namespace: void 0,
  performanceLogger: () => {
  },
  eventHandlerInterceptor: void 0,
  styleApplyer: (e, r2, o3) => {
    "-" === r2.charAt(0) ? e.style.setProperty(r2, o3) : e.style[r2] = o3;
  }
};
var d2 = (r2) => n(p2, r2);
var n2 = {
  create: (e, t3) => (t3 = d2(t3), x(e, document.createElement("div"), void 0, t3), C(e, t3)),
  append: (e, t3, p3) => (p3 = d2(p3), x(t3, e, void 0, p3), C(t3, p3)),
  insertBefore: (e, t3, p3) => (p3 = d2(p3), x(t3, e.parentNode, e, p3), C(t3, p3)),
  merge: (e, r2, p3) => (p3 = d2(p3), r2.domNode = e, w(e, r2, p3), C(r2, p3)),
  replace: (e, t3, p3) => (p3 = d2(p3), x(t3, e.parentNode, e, p3), e.parentNode.removeChild(e), C(t3, p3))
};

// ../../../node_modules/@arcgis/core/libs/maquette/projector.js
var t2;
var n3 = (e, r2) => {
  let t3 = [];
  for (; e && e !== r2; ) t3.push(e), e = e.parentNode;
  return t3;
};
t2 = Array.prototype.find ? (e, r2) => e.find(r2) : (e, r2) => e.filter(r2)[0];
var o2 = (e, r2) => {
  let n4 = e;
  return r2.forEach((e2) => {
    n4 = n4 && n4.children ? t2(n4.children, (r3) => r3.domNode === e2) : void 0;
  }), n4;
};
var d3 = (e, r2, t3) => {
  let d4 = function(d5) {
    t3("domEvent", d5);
    let i3 = r2(), p3 = n3(d5.currentTarget, i3.domNode);
    p3.reverse();
    let l2, a2 = o2(i3.getLastRender(), p3);
    return e.scheduleRender(), a2 && (l2 = a2.properties[`on${d5.type}`].apply(a2.properties.bind || this, arguments)), t3("domEventProcessed", d5), l2;
  };
  return (e2, r3, t4, n4) => d4;
};
var i2 = (t3) => {
  let n4, o3, i3 = d2(t3), p3 = i3.performanceLogger, l2 = true, a2 = false, s2 = [], c2 = [], u2 = (e, r2, t4) => {
    let o4, l3 = () => o4;
    i3.eventHandlerInterceptor = d3(n4, l3, p3), o4 = e(r2, t4(), i3), s2.push(o4), c2.push(t4);
  }, f2 = () => {
    if (o3 = void 0, l2) {
      l2 = false, p3("renderStart", void 0);
      for (let e = 0; e < s2.length; e++) {
        let r2 = c2[e]();
        p3("rendered", void 0), s2[e].update(r2), p3("patched", void 0);
      }
      p3("renderDone", void 0), l2 = true;
    }
  };
  return n4 = {
    renderNow: f2,
    scheduleRender: () => {
      o3 || a2 || (o3 = requestAnimationFrame(f2));
    },
    stop: () => {
      o3 && (cancelAnimationFrame(o3), o3 = void 0), a2 = true;
    },
    resume: () => {
      a2 = false, l2 = true, n4.scheduleRender();
    },
    append: (e, t4) => {
      u2(n2.append, e, t4);
    },
    insertBefore: (e, t4) => {
      u2(n2.insertBefore, e, t4);
    },
    merge: (e, t4) => {
      u2(n2.merge, e, t4);
    },
    replace: (e, t4) => {
      u2(n2.replace, e, t4);
    },
    detach: (e) => {
      for (let r2 = 0; r2 < c2.length; r2++) if (c2[r2] === e) return c2.splice(r2, 1), s2.splice(r2, 1)[0];
      throw new Error("renderFunction was not found");
    }
  }, n4;
};

export {
  n2 as n,
  i2 as i
};
//# sourceMappingURL=chunk-A4VVDRCH.js.map
