// ../../../node_modules/@arcgis/core/chunks/tslib.es6.js
function e(e2, t2, n2, r) {
  var o, c = arguments.length, f = c < 3 ? t2 : null === r ? r = Object.getOwnPropertyDescriptor(t2, n2) : r;
  if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) f = Reflect.decorate(e2, t2, n2, r);
  else for (var u = e2.length - 1; u >= 0; u--) (o = e2[u]) && (f = (c < 3 ? o(f) : c > 3 ? o(t2, n2, f) : o(t2, n2)) || f);
  return c > 3 && f && Object.defineProperty(t2, n2, f), f;
}
function t(e2, t2) {
  return function(n2, r) {
    t2(n2, r, e2);
  };
}
function n(e2, t2, n2, r) {
  function o(e3) {
    return e3 instanceof n2 ? e3 : new n2(function(t3) {
      t3(e3);
    });
  }
  return new (n2 || (n2 = Promise))(function(n3, c) {
    function f(e3) {
      try {
        i(r.next(e3));
      } catch (t3) {
        c(t3);
      }
    }
    function u(e3) {
      try {
        i(r.throw(e3));
      } catch (t3) {
        c(t3);
      }
    }
    function i(e3) {
      e3.done ? n3(e3.value) : o(e3.value).then(f, u);
    }
    i((r = r.apply(e2, t2 || [])).next());
  });
}

export {
  e,
  t,
  n
};
//# sourceMappingURL=chunk-4Z5SGKRM.js.map
