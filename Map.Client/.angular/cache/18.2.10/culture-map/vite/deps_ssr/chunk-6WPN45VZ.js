import { createRequire } from 'module';const require = createRequire(import.meta.url);

// ../../../node_modules/@arcgis/core/widgets/support/traversalUtils.js
function n(n2, o, t = []) {
  if (n2 >= o) return t;
  t.push(n2);
  if (o - n2 < 2) return t;
  const r = o - 1;
  t.push(r);
  const u = e(n2 + 1, r);
  for (; ; ) {
    const n3 = u.next();
    if (n3.done) break;
    t.push(n3.value);
  }
  return t;
}
function* e(n2, o) {
  if (n2 >= o) return;
  const t = n2 + Math.floor((o - n2) / 2);
  yield t;
  const r = e(n2, t), u = e(t + 1, o);
  for (; ; ) {
    const n3 = r.next(), e2 = u.next();
    if (n3.done && e2.done) break;
    n3.done || (yield n3.value), e2.done || (yield e2.value);
  }
}

export {
  n
};
//# sourceMappingURL=chunk-6WPN45VZ.js.map
