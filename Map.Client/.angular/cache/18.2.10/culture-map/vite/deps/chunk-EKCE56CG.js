import {
  l
} from "./chunk-4TJAOUC3.js";
import {
  R
} from "./chunk-CILAEMQM.js";
import {
  a as a2
} from "./chunk-3HAZL2RZ.js";
import {
  r as r4
} from "./chunk-XUAPJ5BK.js";
import {
  e as e4,
  n as n5,
  o as o5
} from "./chunk-TEOUFCJA.js";
import {
  c as c2
} from "./chunk-GTZOXRB5.js";
import {
  a as a3,
  o as o6,
  t as t3
} from "./chunk-75N5YDQB.js";
import {
  r as r2,
  r2 as r3,
  t as t2
} from "./chunk-XGDLE7WK.js";
import {
  t as t4
} from "./chunk-TCQSUQ7Y.js";
import {
  s as s3
} from "./chunk-5RHKQDDL.js";
import {
  O as O2
} from "./chunk-GCFUJXGH.js";
import {
  S as S2,
  _ as _2
} from "./chunk-LKHUGH5W.js";
import {
  u
} from "./chunk-ODLAAWPY.js";
import {
  d as d2,
  v
} from "./chunk-P2MXQ2EV.js";
import {
  s as s2
} from "./chunk-UCPBGEQD.js";
import {
  O
} from "./chunk-ZVFENZUF.js";
import {
  c,
  e2 as e3
} from "./chunk-P7OSFLIX.js";
import {
  D,
  G,
  _,
  t
} from "./chunk-YLE5AYZV.js";
import {
  o as o4
} from "./chunk-VS26W5Y5.js";
import {
  o as o2
} from "./chunk-WJKYGQOY.js";
import {
  o as o3
} from "./chunk-R5ZE5A4K.js";
import {
  n as n4,
  o
} from "./chunk-SZWWBMQN.js";
import {
  n as n3
} from "./chunk-DY7FJHTG.js";
import {
  n as n2
} from "./chunk-N6TJI25E.js";
import {
  e as e2
} from "./chunk-3ZXOUEQG.js";
import {
  P,
  d
} from "./chunk-6WHTZNUH.js";
import {
  e
} from "./chunk-4Z5SGKRM.js";
import {
  S
} from "./chunk-ANKOCGE2.js";
import {
  y
} from "./chunk-7CJXZOFG.js";
import {
  n
} from "./chunk-IRGZKO7V.js";
import {
  a3 as a
} from "./chunk-DDYVXG4F.js";
import {
  r
} from "./chunk-2MMLMOWS.js";
import {
  s2 as s
} from "./chunk-WYIDUUN2.js";

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/output/OutputDepth.glsl.js
function e5(e7, d3) {
  switch (d3.output) {
    case o2.Shadow:
    case o2.ShadowHighlight:
    case o2.ShadowExcludeHighlight:
    case o2.ViewshedShadow:
      e7.fragment.include(a2), e7.fragment.code.add(o`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
return depth + SLOPE_SCALE * m + BIAS;
}
void outputDepth(float _linearDepth) {
fragColor = floatToRgba4(_calculateFragDepth(_linearDepth));
}`);
  }
}

// ../../../node_modules/@arcgis/core/views/3d/webgl/RenderNode.js
var a4 = class extends S {
  constructor(e7) {
    super(e7), this.view = null, this.consumes = {
      required: []
    }, this.produces = "composite-color", this._context = null, this._dirty = true;
  }
  initialize() {
    this.addHandles([d(() => this.view.ready, (e7) => {
      e7 && this.view._stage?.renderer.addRenderNode(this);
    }, P)]);
  }
  destroy() {
    this.view._stage?.renderer?.removeRenderNode(this);
  }
  render() {
    throw new s("RenderNode:render-function-not-implemented", "render() is not implemented.");
  }
  get camera() {
    return this.view.state.camera.clone();
  }
  get sunLight() {
    return this.bindParameters.lighting.legacy;
  }
  get gl() {
    return this.view._stage.renderView.renderingContext.gl;
  }
  acquireOutputFramebuffer() {
    const e7 = this._frameBuffer?.getTexture()?.descriptor, r6 = this.view._stage.renderer.fboCache.acquire(e7?.width ?? 640, e7?.height ?? 480, this.produces);
    return r6.fbo?.initializeAndBind(), r6;
  }
  bindRenderTarget() {
    return this._frameBuffer?.fbo?.initializeAndBind(), this._frameBuffer;
  }
  requestRender(e7) {
    e7 === O.UPDATE && this.view._stage?.renderView.requestRender(e7), this._dirty = true;
  }
  resetWebGLState() {
    this.renderingContext.resetState(), this.renderingContext.bindFramebuffer(this._frameBuffer?.fbo);
  }
  get fboCache() {
    return this.view._stage.renderer.fboCache;
  }
  get bindParameters() {
    return this._context.bindParameters;
  }
  get renderingContext() {
    return this.view._stage.renderView.renderingContext;
  }
  updateAnimation() {
    return !!this._dirty && (this._dirty = false, true);
  }
  doRender(e7, r6) {
    this._context = r6, this._frameBuffer = e7.find(({
      name: e8
    }) => e8 === this.produces);
    try {
      return this.render(e7);
    } finally {
      this._frameBuffer = null;
    }
  }
};
e([y({
  constructOnly: true
})], a4.prototype, "view", void 0), e([y({
  constructOnly: true
})], a4.prototype, "consumes", void 0), e([y()], a4.prototype, "produces", void 0), a4 = e([a("esri.views.3d.webgl.RenderNode")], a4);
var c3 = a4;

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/effects/ssao/SSAOBlurTechnique.js
var a5 = class _a extends r2 {
  initializeProgram(r6) {
    return new r3(r6.rctx, _a.shader.get().build(), O2);
  }
  initializePipeline() {
    return S2({
      colorWrite: _2
    });
  }
};
a5.shader = new t2(u, () => import("./SSAOBlur.glsl-LRHSC7LX.js"));

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/effects/ssao/SSAONoiseData.js
var e6 = "eXKEvZaUc66cjIKElE1jlJ6MjJ6Ufkl+jn2fcXp5jBx7c6KEflSGiXuXeW6OWs+tfqZ2Yot2Y7Zzfo2BhniEj3xoiXuXj4eGZpqEaHKDWjSMe7palFlzc3BziYOGlFVzg6Zzg7CUY5JrjFF7eYJ4jIKEcyyEonSXe7qUfqZ7j3xofqZ2c4R5lFZ5Y0WUbppoe1l2cIh2ezyUho+BcHN2cG6DbpqJhqp2e1GcezhrdldzjFGUcyxjc3aRjDyEc1h7Sl17c6aMjH92pb6Mjpd4dnqBjMOEhqZleIOBYzB7gYx+fnqGjJuEkWlwnCx7fGl+c4hjfGyRe5qMlNOMfnqGhIWHc6OMi4GDc6aMfqZuc6aMzqJzlKZ+lJ6Me3qRfoFue0WUhoR5UraEa6qMkXiPjMOMlJOGe7JrUqKMjK6MeYRzdod+Sl17boiPc6qEeYBlcIh2c1WEe7GDiWCDa0WMjEmMdod+Y0WcdntzhmN8WjyMjKJjiXtzgYxYaGd+a89zlEV7e2GJfnd+lF1rcK5zc4p5cHuBhL6EcXp5eYB7fnh8iX6HjIKEeaxuiYOGc66RfG2Ja5hzjlGMjEmMe9OEgXuPfHyGhPeEdl6JY02McGuMfnqGhFiMa3WJfnx2l4hwcG1uhmN8c0WMc39og1GBbrCEjE2EZY+JcIh2cIuGhIWHe0mEhIVrc09+gY5+eYBlnCyMhGCDl3drfmmMgX15aGd+gYx+fnuRfnhzY1SMsluJfnd+hm98WtNrcIuGh4SEj0qPdkqOjFF7jNNjdnqBgaqUjMt7boeBhnZ4jDR7c5pze4GGjEFrhLqMjHyMc0mUhKZze4WEa117kWlwbpqJjHZ2eX2Bc09zeId+e0V7WlF7jHJ2l72BfId8l3eBgXyBe897jGl7c66cgW+Xc76EjKNbgaSEjGx4fId8jFFjgZB8cG6DhlFziZhrcIh2fH6HgUqBgXiPY8dahGFzjEmMhEFre2dxhoBzc5SGfleGe6alc7aUeYBlhKqUdlp+cH5za4OEczxza0Gcc4J2jHZ5iXuXjH2Jh5yRjH2JcFx+hImBjH+MpddCl3dreZeJjIt8ZW18bm1zjoSEeIOBlF9oh3N7hlqBY4+UeYFwhLJjeYFwaGd+gUqBYxiEYot2fqZ2ondzhL6EYyiEY02Ea0VjgZB8doaGjHxoc66cjEGEiXuXiXWMiZhreHx8frGMe75rY02Ec5pzfnhzlEp4a3VzjM+EhFFza3mUY7Zza1V5e2iMfGyRcziEhDyEkXZ2Y4OBnCx7g5t2eyBjgV6EhEFrcIh2dod+c4Z+nJ5zjm15jEmUeYxijJp7nL6clIpjhoR5WrZraGd+fnuRa6pzlIiMg6ZzfHx5foh+eX1ufnB5eX1ufnB5aJt7UqKMjIh+e3aBfm5lbYSBhGFze6J4c39oc0mUc4Z+e0V7fKFVe0WEdoaGY02Ec4Z+Y02EZYWBfH6HgU1+gY5+hIWUgW+XjJ57ebWRhFVScHuBfJ6PhBx7WqJzlM+Ujpd4gHZziX6HjHmEgZN+lJt5boiPe2GJgX+GjIGJgHZzeaxufnB5hF2JtdN7jJ57hp57hK6ElFVzg6ZzbmiEbndzhIWHe3uJfoFue3qRhJd2j3xoc65zlE1jc3p8lE1jhniEgXJ7e657vZaUc3qBh52BhIF4aHKDa9drgY5+c52GWqZzbpqJe8tjnM+UhIeMfo2BfGl+hG1zSmmMjKJjZVaGgX15c1lze0mEp4OHa3mUhIWHhDyclJ6MeYOJkXiPc0VzhFiMlKaEboSJa5Jze41re3qRhn+HZYWBe0mEc4p5fnORbox5lEp4hGFjhGGEjJuEc1WEhLZjeHeGa7KlfHx2hLaMeX1ugY5+hIWHhKGPjMN7c1WEho1zhoBzZYx7fnhzlJt5exyUhFFziXtzfmmMa6qMYyiEiXxweV12kZSMeWqXSl17fnhzxmmMrVGEe1mcc4p5eHeGjK6MgY5+doaGa6pzlGV7g1qBh4KHkXiPeW6OaKqafqZ2eXZ5e1V7jGd7boSJc3BzhJd2e0mcYot2h1RoY8dahK6EQmWEWjx7e1l2lL6UgXyBdnR4eU9zc0VreX1umqaBhld7fo2Bc6KEc5Z+hDyEcIeBWtNrfHyGe5qMhMuMe5qMhEGEbVVupcNzg3aHhIF4boeBe0mEdlptc39ofFl5Y8uUlJOGiYt2UmGEcyxjjGx4jFF7a657ZYWBnElzhp57iXtrgZN+tfOEhIOBjE2HgU1+e8tjjKNbiWCDhE15gUqBgYN7fnqGc66ce9d7iYSBj0qPcG6DnGGcT3eGa6qMZY+JlIiMl4hwc3aRdnqBlGV7eHJ2hLZjfnuRhDyEeX6MSk17g6Z+c6aUjHmEhIF4gXyBc76EZW18fGl+fkl+jCxrhoVwhDyUhIqGlL2DlI6EhJd2tdN7eYORhEGMa2Faa6pzc3Bzc4R5lIRznM+UY9eMhDycc5Z+c4p5c4iGY117pb6MgXuPrbJafnx2eYOJeXZ5e657hDyEcziElKZjfoB5eHeGj4WRhGGEe6KGeX1utTStc76EhFGJnCyMa5hzfH6HnNeceYB7hmN8gYuMhIVrczSMgYF8h3N7c5pza5hzjJqEYIRdgYuMlL2DeYRzhGGEeX1uhLaEc4iGeZ1zdl6JhrVteX6Me2iMfm5lWqJzSpqEa6pzdnmchHx2c6OMhNdrhoR5g3aHczxzeW52gV6Ejm15frGMc0Vzc4Z+l3drfniJe+9rWq5rlF1rhGGEhoVwe9OEfoh+e7pac09+c3qBY0lrhDycdnp2lJ6MiYOGhGCDc3aRlL2DlJt5doaGdnp2gYF8gWeOjF2Uc4R5c5Z+jEmMe7KEc4mEeYJ4dmyBe0mcgXiPbqJ7eYB7fmGGiYSJjICGlF1reZ2PnElzbpqJfH6Hc39oe4WEc5eJhK6EhqyJc3qBgZB8c09+hEmEaHKDhFGJc5SGiXWMUpaEa89zc6OMnCyMiXtrho+Be5qMc7KEjJ57dmN+hKGPjICGbmiEe7prdod+hGCDdnmchBx7eX6MkXZ2hGGEa657hm98jFFjY5JreYOJgY2EjHZ2a295Y3FajJ6Mc1J+YzB7e4WBjF2Uc4R5eV12gYxzg1qBeId+c9OUc5pzjFFjgY5+hFiMlIaPhoR5lIpjjIKBlNdSe7KEeX2BfrGMhIqGc65zjE2UhK6EklZ+QmWEeziMWqZza3VzdnR4foh+gYF8n3iJiZhrnKp7gYF8eId+lJ6Me1lrcIuGjKJjhmN8c66MjFF7a6prjJ6UnJ5zezyUfruRWlF7nI5zfHyGe657h4SEe8tjhBx7jFFjc09+c39ojICMeZeJeXt+YzRzjHZ2c0WEcIeBeXZ5onSXkVR+gYJ+eYFwdldzgYF7eX2BjJ6UiXuXlE1jh4SEe1mchLJjc4Z+hqZ7eXZ5bm1zlL6Ue5p7iWeGhKqUY5pzjKJjcIeBe8t7gXyBYIRdlEp4a3mGnK6EfmmMZpqEfFl5gYxzjKZuhGFjhoKGhHx2fnx2eXuMe3aBiWeGvbKMe6KGa5hzYzB7gZOBlGV7hmN8hqZlYot2Y117a6pzc6KEfId8foB5rctrfneJfJ6PcHN2hFiMc5pzjH92c0VzgY2EcElzdmCBlFVzg1GBc65zY4OBboeBcHiBeYJ4ewxzfHx5lIRzlEmEnLKEbk1zfJ6PhmN8eYBljBiEnMOEiXxwezyUcIeBe76EdsKEeX2BdnR4jGWUrXWMjGd7fkl+j4WRlEGMa5Jzho+BhDyEfnqMeXt+g3aHlE1jczClhNN7ZW18eHx8hGFjZW18iXWMjKJjhH57gYuMcIuGWjyMe4ZtjJuExmmMj4WRdntzi4GDhFFzYIRdnGGcjJp7Y0F7e4WEkbCGiX57fnSHa657a6prhBCMe3Z+SmmMjH92eHJ2hK6EY1FzexhrvbKMnI5za4OEfnd+eXuMhImBe897hLaMjN+EfG+BeIOBhF1+eZeJi4GDkXZ2eXKEgZ6Ejpd4c2GHa1V5e5KUfqZuhCx7jKp7lLZrg11+hHx2hFWUoot2nI5zgbh5mo9zvZaUe3qRbqKMfqZ2kbCGhFiM";

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/effects/ssao/SSAOParameters.js
var r5 = class extends n4 {
  constructor() {
    super(...arguments), this.projScale = 1;
  }
};
var t5 = class extends r5 {
  constructor() {
    super(...arguments), this.intensity = 1;
  }
};
var c4 = class extends n4 {
};
var o7 = class extends c4 {
  constructor() {
    super(...arguments), this.blurSize = n3();
  }
};

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/effects/ssao/SSAOTechnique.js
var l2 = class _l extends r2 {
  initializeProgram(e7) {
    return new r3(e7.rctx, _l.shader.get().build(), O2);
  }
  initializePipeline() {
    return S2({
      colorWrite: _2
    });
  }
};
l2.shader = new t2(v, () => import("./SSAO.glsl-26BBJYJL.js"));

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/effects/ssao/SSAO.js
var g = 2;
var y2 = class extends c3 {
  constructor(e7) {
    super(e7), this.consumes = {
      required: ["normals"]
    }, this.produces = "ssao", this.isEnabled = () => false, this._enableTime = n(0), this._passParameters = new t5(), this._drawParameters = new o7();
  }
  initialize() {
    const e7 = Uint8Array.from(atob(e6), (e8) => e8.charCodeAt(0)), r6 = new e3();
    r6.wrapMode = D.CLAMP_TO_EDGE, r6.pixelFormat = G.RGB, r6.wrapMode = D.REPEAT, r6.hasMipmap = true, r6.width = 32, r6.height = 32, this._passParameters.noiseTexture = new c(this.renderingContext, r6, e7), this._ssaoTechnique = this.techniques.acquire(l2), this._blurTechnique = this.techniques.acquire(a5), this.addHandles(d(() => this.isEnabled(), () => this._enableTime = n(0)));
  }
  destroy() {
    this._passParameters.noiseTexture = r(this._passParameters.noiseTexture), this._blurTechnique.release(), this._ssaoTechnique.release();
  }
  render(e7) {
    const s4 = this.bindParameters, t7 = e7.find(({
      name: e8
    }) => "normals" === e8), o8 = t7?.getTexture(), a6 = t7?.getTexture(t), c5 = this.fboCache, p2 = s4.camera, l3 = p2.fullViewport[2], d3 = p2.fullViewport[3], b = Math.round(l3 / g), f = Math.round(d3 / g);
    if (!this._ssaoTechnique.compiled || !this._blurTechnique.compiled) return this._enableTime = n(performance.now()), this.requestRender(), c5.acquire(b, f, "ssao", R.RED);
    0 === this._enableTime && (this._enableTime = n(performance.now()));
    const w = this.renderingContext, q = this.view.qualitySettings.fadeDuration, j = p2.relativeElevation, S3 = e2((o5 - j) / (o5 - e4), 0, 1), y3 = q > 0 ? Math.min(q, performance.now() - this._enableTime) / q : 1, A = y3 * S3;
    this._passParameters.normalTexture = o8, this._passParameters.depthTexture = a6, this._passParameters.projScale = 1 / p2.computeScreenPixelSizeAtDist(1), this._passParameters.intensity = 4 * E / d2(p2) ** 6 * A;
    const R2 = c5.acquire(l3, d3, "ssao input", R.RG);
    w.unbindTexture(R2.fbo.colorTexture), w.bindFramebuffer(R2.fbo), w.setViewport(0, 0, l3, d3), w.bindTechnique(this._ssaoTechnique, s4, this._passParameters, this._drawParameters), w.screen.draw();
    const v2 = c5.acquire(b, f, "ssao blur", R.RED);
    w.unbindTexture(v2.fbo.colorTexture), w.bindFramebuffer(v2.fbo), this._drawParameters.colorTexture = R2.getTexture(), o4(this._drawParameters.blurSize, 0, g / d3), w.bindTechnique(this._blurTechnique, s4, this._passParameters, this._drawParameters), w.setViewport(0, 0, b, f), w.screen.draw(), R2.release();
    const O3 = c5.acquire(b, f, "ssao", R.RED);
    return w.unbindTexture(O3.fbo.colorTexture), w.bindFramebuffer(O3.fbo), w.setViewport(0, 0, l3, d3), w.setClearColor(1, 1, 1, 0), w.clear(_.COLOR_BUFFER_BIT), this._drawParameters.colorTexture = v2.getTexture(), o4(this._drawParameters.blurSize, g / l3, 0), w.bindTechnique(this._blurTechnique, s4, this._passParameters, this._drawParameters), w.setViewport(0, 0, b, f), w.screen.draw(), w.setViewport4fv(p2.fullViewport), v2.release(), y3 < 1 && this.requestRender(O.UPDATE), O3;
  }
};
e([y()], y2.prototype, "consumes", void 0), e([y()], y2.prototype, "produces", void 0), e([y({
  constructOnly: true
})], y2.prototype, "techniques", void 0), e([y({
  constructOnly: true
})], y2.prototype, "isEnabled", void 0), y2 = e([a("esri.views.3d.webgl-engine.effects.ssao.SSAO")], y2);
var E = 0.5;

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateAmbientOcclusion.glsl.js
function t6(t7, o8) {
  const a6 = t7.fragment;
  o8.receiveAmbientOcclusion ? (a6.uniforms.add(new s2("ssaoTex", (e7, s4) => s4.ssao?.getTexture())), a6.constants.add("blurSizePixelsInverse", "float", 1 / g), a6.code.add(o`float evaluateAmbientOcclusionInverse() {
vec2 ssaoTextureSizeInverse = 1.0 / vec2(textureSize(ssaoTex, 0));
return texture(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).r;
}
float evaluateAmbientOcclusion() {
return 1.0 - evaluateAmbientOcclusionInverse();
}`)) : a6.code.add(o`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`);
}

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateSceneLighting.glsl.js
function u2(i) {
  i.constants.add("ambientBoostFactor", "float", l);
}
function h(i) {
  i.uniforms.add(new o3("lightingGlobalFactor", (i2, n6) => n6.lighting.globalFactor));
}
function p(g2, p2) {
  const v2 = g2.fragment;
  switch (g2.include(t6, p2), p2.pbrMode !== c2.Disabled && g2.include(n5, p2), g2.include(r4, p2), g2.include(t4), v2.code.add(o`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${p2.pbrMode === c2.Disabled ? "" : "const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `), u2(v2), h(v2), t3(v2), v2.code.add(o`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${p2.spherical ? o`normalize(vPosWorld)` : o`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `), a3(v2), v2.code.add(o`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`), p2.pbrMode) {
    case c2.Disabled:
    case c2.WaterOnIntegratedMesh:
    case c2.Water:
      g2.include(o6), v2.code.add(o`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);
      break;
    case c2.Normal:
    case c2.Schematic:
      v2.code.add(o`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`), v2.code.add(o`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`), p2.useFillLights ? v2.uniforms.add(new s3("hasFillLights", (i, n6) => n6.enableFillLights)) : v2.constants.add("hasFillLights", "bool", false), v2.code.add(o`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0) ? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`), v2.uniforms.add(new o3("lightingSpecularStrength", (i, n6) => n6.lighting.mainLight.specularStrength), new o3("lightingEnvironmentStrength", (i, n6) => n6.lighting.mainLight.environmentStrength)), v2.code.add(o`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
float normalDirectionModifier = mix(1., min(mix(0.1, 2.0, (inputs.NdotNG + 1.) * 0.5), 1.0), clamp(inputs.roughness * 5.0, 0.0 , 1.0));
inputs.skyRadianceToSurface = (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.groundRadianceToSurface = 0.5 * GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`), v2.code.add(o`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = _emission == vec3(0.0) ? _emission : pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${p2.pbrMode !== c2.Schematic || p2.hasColorTexture ? o`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));` : o`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);
      break;
    case c2.Simplified:
    case c2.TerrainWithWater:
      g2.include(o6), v2.code.add(o`const float roughnessTerrain = 0.5;
const float specularityTerrain = 0.5;
const vec3 fresnelReflectionTerrain = vec3(0.04);
vec3 evaluatePBRSimplifiedLighting(vec3 n, vec3 c, float shadow, float ssao, vec3 al, vec3 vd, vec3 nup) {
vec3 viewDirection = -vd;
vec3 h = normalize(viewDirection + mainLightDirection);
float NdotL = clamp(dot(n, mainLightDirection), 0.001, 1.0);
float NdotV = clamp(abs(dot(n, viewDirection)), 0.001, 1.0);
float NdotH = clamp(dot(n, h), 0.0, 1.0);
float NdotNG = clamp(dot(n, nup), -1.0, 1.0);
vec3 albedoLinear = pow(c, vec3(GAMMA_SRGB));
float lightness = 0.3 * albedoLinear[0] + 0.5 * albedoLinear[1] + 0.2 * albedoLinear[2];
vec3 f0 = (0.85 * lightness + 0.15) * fresnelReflectionTerrain;
vec3 f90 =  vec3(clamp(dot(f0, vec3(50.0 * 0.33)), 0.0, 1.0));
vec3 mainLightIrradianceComponent = (1. - shadow) * NdotL * mainLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(n, ssao) + al;
vec3 ambientSky = ambientLightIrradianceComponent + mainLightIrradianceComponent;
vec3 indirectDiffuse = ((1.0 - NdotNG) * mainLightIrradianceComponent + (1.0 + NdotNG ) * ambientSky) * 0.5;
vec3 outDiffColor = albedoLinear * (1.0 - f0) * indirectDiffuse / PI;
vec3 mainLightRadianceComponent = normalDistribution(NdotH, roughnessTerrain) * mainLightIntensity;
vec2 dfg = prefilteredDFGAnalytical(roughnessTerrain, NdotV);
vec3 specularColor = f0 * dfg.x + f90 * dfg.y;
vec3 specularComponent = specularityTerrain * specularColor * mainLightRadianceComponent;
vec3 outColorLinear = outDiffColor + specularComponent;
vec3 outColor = pow(outColorLinear, vec3(INV_GAMMA_SRGB));
return outColor;
}`);
      break;
    default:
      n2(p2.pbrMode);
    case c2.COUNT:
  }
}

export {
  e5 as e,
  c3 as c,
  y2 as y,
  t6 as t,
  u2 as u,
  h,
  p
};
//# sourceMappingURL=chunk-EKCE56CG.js.map
