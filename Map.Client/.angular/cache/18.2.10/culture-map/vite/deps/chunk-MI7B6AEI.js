import {
  r
} from "./chunk-WYIDUUN2.js";

// ../../../node_modules/@arcgis/core/widgets/support/uriUtils.js
var s = [{
  pattern: /^\s*(https?:\/\/([^\s]+))\s*$/i,
  target: "_blank",
  label: "{messages.view}"
}, {
  pattern: /^\s*(tel:([^\s]+))\s*$/i,
  label: "{hierPart}"
}, {
  pattern: /^\s*(mailto:([^\s]+))\s*$/i,
  label: "{hierPart}"
}, {
  pattern: /^\s*(arcgis-appstudio-player:\/\/([^\s]+))\s*$/i,
  label: "{messages.openInApp}",
  appName: "App Studio Player"
}, {
  pattern: /^\s*(arcgis-collector:\/\/([^\s]+))\s*$/i,
  label: "{messages.openInApp}",
  appName: "Collector"
}, {
  pattern: /^\s*(arcgis-explorer:\/\/([^\s]+))\s*$/i,
  label: "{messages.openInApp}",
  appName: "Explorer"
}, {
  pattern: /^\s*(arcgis-navigator:\/\/([^\s]+))\s*$/i,
  label: "{messages.openInApp}",
  appName: "Navigator"
}, {
  pattern: /^\s*(arcgis-survey123:\/\/([^\s]+))\s*$/i,
  label: "{messages.openInApp}",
  appName: "Survey123"
}, {
  pattern: /^\s*(arcgis-trek2there:\/\/([^\s]+))\s*$/i,
  label: "{messages.openInApp}",
  appName: "Trek2There"
}, {
  pattern: /^\s*(arcgis-workforce:\/\/([^\s]+))\s*$/i,
  label: "{messages.openInApp}",
  appName: "Workforce"
}, {
  pattern: /^\s*(iform:\/\/([^\s]+))\s*$/i,
  label: "{messages.openInApp}",
  appName: "iForm"
}, {
  pattern: /^\s*(flow:\/\/([^\s]+))\s*$/i,
  label: "{messages.openInApp}",
  appName: "FlowFinity"
}, {
  pattern: /^\s*(lfmobile:\/\/([^\s]+))\s*$/i,
  label: "{messages.openInApp}",
  appName: "Laserfische"
}, {
  pattern: /^\s*(mspbi:\/\/([^\s]+))\s*$/i,
  label: "{messages.openInApp}",
  appName: "Microsoft Power Bi"
}];
function a(a2, p) {
  if ("string" != typeof p || !p) return p;
  const r2 = s.find((e) => e.pattern.test(p));
  if (!r2) return p;
  const t = p.match(r2.pattern), n = t?.[2], l = r(r(r2.label, {
    messages: a2,
    hierPart: n
  }), {
    appName: r2.appName
  }), i = r2.target ? ` target="${r2.target}"` : "", o = "_blank" === r2.target ? ' rel="noreferrer"' : "";
  return p.replace(r2.pattern, `<a${i} href="$1"${o}>${l}</a>`);
}

export {
  a
};
//# sourceMappingURL=chunk-MI7B6AEI.js.map
