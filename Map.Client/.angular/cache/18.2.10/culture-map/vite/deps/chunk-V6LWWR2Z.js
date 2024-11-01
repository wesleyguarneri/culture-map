import {
  N
} from "./chunk-GOKBAMCG.js";

// ../../../node_modules/@arcgis/core/views/3d/analysis/images/generateTextures.js
var t = "theme-style";
function e(t2, e2) {
  return a(r(n(o(t2), e2)), e2.size);
}
function n(e2, {
  accentColor: n3,
  contrastColor: o2
}) {
  const r2 = n3.toHex(), a3 = n3.a, s = o2.toHex(), i = o2.a, c = e2.getElementsByTagNameNS("http://www.w3.org/2000/svg", "style").namedItem(t);
  return c && (c.innerHTML = `
      .contrast-fill { fill: ${s}; fill-opacity: ${i}; }
      .contrast-stroke { stroke: ${s}; stroke-opacity: ${i};  }
      .accent-fill { fill: ${r2}; fill-opacity: ${a3}; }
      .accent-stroke { stroke: ${r2}; stroke-opacity:  ${a3}; }`), e2;
}
function o(t2) {
  const e2 = t2.split(",")[1], n3 = atob(e2);
  return new DOMParser().parseFromString(n3, "image/svg+xml");
}
function r(t2) {
  const e2 = new XMLSerializer().serializeToString(t2);
  return `data:image/svg+xml;base64,${btoa(e2)}`;
}
function a(t2, e2) {
  const n3 = new Image(e2, e2);
  return n3.src = t2, n3;
}

// ../../../node_modules/@arcgis/core/views/3d/analysis/images/heading-rotate-svg.js
var I = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NiIgaGVpZ2h0PSI1NiIgZmlsbD0ibm9uZSIgdmVyc2lvbj0iMi4wIj48c3R5bGUgaWQ9InRoZW1lLXN0eWxlIj4uY29udHJhc3QtZmlsbHtmaWxsOiNmZmZ9LmNvbnRyYXN0LXN0cm9rZXtzdHJva2U6I2ZmZn0uYWNjZW50LWZpbGx7ZmlsbDojZmY3ZjAwO2ZpbGwtb3BhY2l0eTouNX08L3N0eWxlPjxwYXRoIGQ9Ik0yOCAwYTI4IDI4IDAgMSAxIDAgNTYgMjggMjggMCAwIDEgMC01NiIgY2xhc3M9ImFjY2VudC1maWxsIi8+PHBhdGggc3Ryb2tlLXdpZHRoPSI0Ljk5IiBkPSJNMjAuMDUgNDAuODZhMTUuMDUgMTUuMDUgMCAwIDAgMTcuMTQtMS41IDE1LjA1IDE1LjA1IDAgMCAwIDQuNDctMTYuNjUgMTUuMDUgMTUuMDUgMCAwIDAtMjIuNzItNy4xNSAxNS4wNSAxNS4wNSAwIDAgMC01LjUgNy4xNSIgY2xhc3M9ImNvbnRyYXN0LXN0cm9rZSIvPjxwYXRoIGQ9Im0xMC45NyAzNS41NyA1LjM4IDEyLjA3IDcuNzktMTMuNDd6IiBjbGFzcz0iY29udHJhc3QtZmlsbCIvPjwvc3ZnPg==";

// ../../../node_modules/@arcgis/core/views/3d/analysis/images/tilt-rotate-svg.js
var I2 = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NiIgaGVpZ2h0PSI1NiIgZmlsbD0ibm9uZSIgdmVyc2lvbj0iMi4wIj48c3R5bGUgaWQ9InRoZW1lLXN0eWxlIj4uY29udHJhc3QtZmlsbHtmaWxsOiNmZmZ9LmNvbnRyYXN0LXN0cm9rZXtzdHJva2U6I2ZmZn0uYWNjZW50LWZpbGx7ZmlsbDojZmY3ZjAwO2ZpbGwtb3BhY2l0eTouNX08L3N0eWxlPjxjaXJjbGUgY3g9IjM5LjQ3OCIgY3k9IjMuMDc4IiByPSIyOCIgY2xhc3M9ImFjY2VudC1maWxsIiB0cmFuc2Zvcm09InJvdGF0ZSg0MC41NDIpIi8+PHBhdGggc3Ryb2tlLXdpZHRoPSI1IiBkPSJtNy4wNzQgMzAuMDUzIDI5LjM5NyAxMS45ODUtMy42NzMtMzMuNDkzIiBjbGFzcz0iY29udHJhc3Qtc3Ryb2tlIi8+PHBhdGggc3Ryb2tlLXdpZHRoPSIyLjk5NiIgZD0iTTI0LjUwNCAyMy4yMDdhMTEuOTggMTEuOTggMCAwIDAtOS44IDcuNTA3IiBjbGFzcz0iY29udHJhc3Qtc3Ryb2tlIGNvbnRyYXN0LWZpbGwiLz48cGF0aCBkPSJtMjkuODE4IDIyLjgwOC02LjE4NCA0LjYtLjU0MS04LjM2NHoiIGNsYXNzPSJjb250cmFzdC1maWxsIi8+PC9zdmc+";

// ../../../node_modules/@arcgis/core/views/3d/analysis/images/Factory.js
var a2 = 64;
function l(r2, l2) {
  const {
    accentColor: n3,
    contrastColor: c,
    preMultiplyAlpha: i
  } = l2;
  return r2.fromData(`heading-rotate:[accent:${n3},contrast:${c},size:${a2}]`, () => new N(e(I, {
    accentColor: n3,
    contrastColor: c,
    size: a2
  }), {
    mipmap: true,
    reloadable: true,
    preMultiplyAlpha: i
  }));
}
function n2(o2, l2) {
  const {
    accentColor: n3,
    contrastColor: c,
    preMultiplyAlpha: i
  } = l2;
  return o2.fromData(`tilt-rotate:[accent:${n3},contrast:${c},size:${a2}]`, () => new N(e(I2, {
    accentColor: n3,
    contrastColor: c,
    size: a2
  }), {
    mipmap: true,
    reloadable: true,
    preMultiplyAlpha: i
  }));
}

export {
  l,
  n2 as n
};
//# sourceMappingURL=chunk-V6LWWR2Z.js.map
