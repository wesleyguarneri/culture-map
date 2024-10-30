import { createRequire } from 'module';const require = createRequire(import.meta.url);

// ../../../node_modules/@arcgis/core/geometry/support/buffer/types.js
function e(e2) {
  switch (e2) {
    case "u8":
    case "i8":
      return 1;
    case "u16":
    case "i16":
      return 2;
    case "u32":
    case "i32":
    case "f32":
      return 4;
    case "f64":
      return 8;
  }
}

export {
  e
};
//# sourceMappingURL=chunk-UC4DX4SE.js.map
