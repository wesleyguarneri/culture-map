import { createRequire } from 'module';const require = createRequire(import.meta.url);

// ../../../node_modules/@arcgis/core/core/nextTick.js
var o = [];
function t(t2) {
  o.push(t2), 1 === o.length && queueMicrotask(() => {
    const t3 = o.slice();
    o.length = 0;
    for (const o2 of t3) o2();
  });
}

export {
  t
};
//# sourceMappingURL=chunk-XJNKCEWL.js.map
