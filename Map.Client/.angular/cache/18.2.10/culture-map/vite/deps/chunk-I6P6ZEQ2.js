// ../../../node_modules/@arcgis/core/views/3d/layers/support/makeScheduleFunction.js
function e(e2) {
  return (r) => {
    if (e2.immediate) return e2.immediate.schedule(r);
    const o = "No immediate scheduler";
    throw console.error(o), new Error(o);
  };
}

export {
  e
};
//# sourceMappingURL=chunk-I6P6ZEQ2.js.map
