import {
  i
} from "./chunk-EYUDXMUG.js";
import {
  f3 as f
} from "./chunk-4JFSB6JC.js";
import {
  c as c2,
  d
} from "./chunk-EMZQT2MP.js";
import {
  E as E2
} from "./chunk-EXODD7PD.js";
import {
  c,
  e2 as e
} from "./chunk-P7OSFLIX.js";
import {
  B,
  C,
  E,
  L as L2,
  k,
  q,
  y,
  z
} from "./chunk-R4DKV4UN.js";
import {
  D,
  L
} from "./chunk-YLE5AYZV.js";
import {
  n2 as n,
  s2 as s
} from "./chunk-WYIDUUN2.js";
import {
  has
} from "./chunk-DXLOWWK7.js";

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/AttributeStoreView.js
var b = () => n.getLogger("esri.views.2d.engine.webgl.AttributeStoreView");
var T = class {
  constructor(t, e2, i3) {
    this._texture = null, this._lastTexture = null, this._fbos = {}, this.texelSize = 4;
    const {
      buffer: s2,
      pixelType: r3,
      textureOnly: a
    } = t, n3 = d(r3);
    this.blockIndex = i3, this.pixelType = r3, this.size = e2, this.textureOnly = a, a || (this.data = new n3(s2)), this._resetRange();
  }
  destroy() {
    this._texture?.dispose();
    for (const t in this._fbos) {
      const e2 = this._fbos[t];
      e2 && ("0" === t && e2.detachColorTexture(), e2.dispose()), this._fbos[t] = null;
    }
    this._texture = null;
  }
  get _textureDesc() {
    const t = new e();
    return t.wrapMode = D.CLAMP_TO_EDGE, t.samplingMode = L.NEAREST, t.dataType = this.pixelType, t.width = this.size, t.height = this.size, t;
  }
  setData(t, e2, i3) {
    const s2 = f(t), r3 = this.data, a = s2 * this.texelSize + e2;
    !r3 || a >= r3.length || (r3[a] = i3, this.dirtyStart = Math.min(this.dirtyStart, s2), this.dirtyEnd = Math.max(this.dirtyEnd, s2));
  }
  getData(t, e2) {
    if (null == this.data) return null;
    const i3 = f(t) * this.texelSize + e2;
    return !this.data || i3 >= this.data.length ? null : this.data[i3];
  }
  getTexture(t) {
    return this._texture ?? this._initTexture(t);
  }
  getFBO(t, e2 = 0) {
    if (!this._fbos[e2]) {
      const i3 = 0 === e2 ? this.getTexture(t) : this._textureDesc;
      this._fbos[e2] = new E2(t, i3);
    }
    return this._fbos[e2];
  }
  get hasDirty() {
    const t = this.dirtyStart;
    return this.dirtyEnd >= t;
  }
  updateTexture(e2, i3) {
    try {
      const s2 = this.dirtyStart, r3 = this.dirtyEnd;
      if (!this.hasDirty) return;
      has("esri-2d-update-debug") && console.debug(`Version[${i3}] AttributeStoreView.updateTexture`, {
        start: s2,
        end: r3,
        firstBytes: new Uint8Array(this.data.buffer.slice(0, 16)),
        block: this
      }), this._resetRange();
      const a = this.data.buffer, n3 = this.getTexture(e2), u = 4, h = (s2 - s2 % this.size) / this.size, o = (r3 - r3 % this.size) / this.size, d2 = h, p = this.size, _ = o, g = h * this.size * u, c3 = (p + _ * this.size) * u - g, x = d(this.pixelType), f2 = new x(a, g * x.BYTES_PER_ELEMENT, c3), T2 = this.size, m2 = _ - d2 + 1;
      if (m2 > this.size) return void b().error(new s("mapview-webgl", "Out-of-bounds index when updating AttributeData"));
      n3.updateData(0, 0, d2, T2, m2, f2);
    } catch (s2) {
    }
  }
  update(t) {
    const {
      data: e2,
      start: i3,
      end: s2
    } = t;
    if (null != e2 && null != this.data) {
      const s3 = this.data, r3 = i3 * this.texelSize;
      for (let i4 = 0; i4 < e2.length; i4++) {
        const a = 1 << i4 % this.texelSize;
        t.layout & a && (s3[r3 + i4] = e2[i4]);
      }
    }
    this.dirtyStart = Math.min(this.dirtyStart, i3), this.dirtyEnd = Math.max(this.dirtyEnd, s2);
  }
  resize(t, e2) {
    const i3 = this.size;
    if (this.size = e2, this.textureOnly) return void (i3 !== this.size && (this._lastTexture = this._texture, this._texture = null));
    const s2 = d(this.pixelType);
    this.destroy(), this.data = new s2(t.buffer);
  }
  _resetRange() {
    this.dirtyStart = 2147483647, this.dirtyEnd = 0;
  }
  _initTexture(t) {
    const e2 = new c(t, this._textureDesc, this.data ?? void 0);
    if (null != this._lastTexture && this._fbos[0]) {
      const i3 = this._lastTexture.descriptor.width, s2 = this._lastTexture.descriptor.height, r3 = this._lastTexture.descriptor.dataType, a = this._lastTexture.descriptor.pixelFormat, n3 = this.getFBO(t), u = c2(r3), h = new (d(r3))(new ArrayBuffer(i3 * s2 * u * this.texelSize)), o = t.getBoundFramebufferObject(), {
        x: d2,
        y: _,
        width: g,
        height: c3
      } = t.getViewport();
      t.bindFramebuffer(n3), n3.readPixels(0, 0, i3, s2, a, r3, h), e2.updateData(0, 0, 0, 2 * i3, s2 / 2, h), t.setViewport(d2, _, g, c3), t.bindFramebuffer(o);
    }
    return this.destroy(), this._texture = e2, this._texture;
  }
};
var m = class {
  constructor() {
    this.size = 0, this._pendingAttributeUpdates = [], this._version = 0, this._epoch = 0, this._locked = false;
  }
  _initialize(t) {
    if (!t) throw new Error("InternalError: initArgs must be defined");
    const e2 = t.blockDescriptors;
    if (this.size = t.blockSize, has("esri-2d-update-debug") && console.debug("AttributeStoreView.initialize", {
      message: t
    }), null == this._data) this._data = e2.map((t2, e3) => null != t2 ? new T(t2, this.size, e3) : null);
    else for (let i3 = 0; i3 < this._data.length; i3++) {
      const t2 = this._data[i3], s2 = e2[i3];
      null != s2 && (null == t2 ? this._data[i3] = new T(s2, this.size, i3) : t2.resize(s2, this.size));
    }
  }
  destroy() {
    for (const t of this._data ?? []) t?.destroy();
    this._defaultTexture?.dispose(), this._defaultTexture = null, this._pendingAttributeUpdates = [];
  }
  isEmpty() {
    return null == this._data;
  }
  getBlock(t) {
    if (null == this._data) return null;
    return this._data[t];
  }
  setLabelMinZoom(t, e2) {
    this.setData(t, 0, 1, e2);
  }
  getLabelMinZoom(t) {
    return this.getData(t, 0, 1, 255);
  }
  getFilterFlags(t) {
    return this.getData(t, 0, 0, 0);
  }
  getVVSize(t) {
    return this.getData(t, L2.VV, 0, 0);
  }
  getData(t, e2, i3, s2) {
    if (!this._data) return 0;
    const r3 = this._data[e2];
    if (null == r3) return 0;
    const a = r3.getData(t, i3);
    return null != a ? a : s2;
  }
  setData(t, e2, i3, s2) {
    this._data[e2].setData(t, i3, s2);
  }
  lockTextureUploads() {
    this._locked = true;
  }
  unlockTextureUploads() {
    this._locked = false, this.update();
  }
  requestUpdate(t) {
    this._version = t.version, this._pendingAttributeUpdates.push(t), has("esri-2d-update-debug") && console.debug(`Version[${this._version}] AttributeStoreView.requestUpdate`, {
      message: t
    });
  }
  get currentEpoch() {
    return this._epoch;
  }
  update() {
    if (this._locked) return;
    const t = this._pendingAttributeUpdates;
    this._pendingAttributeUpdates = [];
    for (const e2 of t) {
      const {
        blockData: t2,
        initArgs: i3,
        sendUpdateEpoch: s2,
        version: r3
      } = e2;
      has("esri-2d-update-debug") && console.debug(`Version[${this._version}] Epoch[${s2}] AttributeStoreView.applyUpdate`), this._version = r3, this._epoch = s2, null != i3 && this._initialize(i3);
      const a = this._data;
      for (let e3 = 0; e3 < t2.length; e3++) {
        const i4 = t2[e3], s3 = a[e3];
        null != s3 && null != i4 && (has("esri-2d-update-debug") && console.debug(`Version[${this._version}] CpuBlock[${e3}] AttributeStoreView.update`, {
          block: i4
        }), s3.update(i4));
      }
    }
  }
  getUniforms(t) {
    return {
      filterFlags: {
        texture: this._getTexture(t, L2.FilterFlags),
        unit: k
      },
      animation: {
        texture: this._getTexture(t, L2.Animation),
        unit: q
      },
      gpgpu: {
        texture: this._getTexture(t, L2.GPGPU),
        unit: E
      },
      visualVariableData: {
        texture: this._getTexture(t, L2.VV),
        unit: y
      },
      dataDriven0: {
        texture: this._getTexture(t, L2.DD0),
        unit: z
      },
      dataDriven1: {
        texture: this._getTexture(t, L2.DD1),
        unit: B
      },
      dataDriven2: {
        texture: this._getTexture(t, L2.DD2),
        unit: C
      },
      size: this.size
    };
  }
  _getTexture(t, e2) {
    const i3 = this._data?.[e2];
    return i3 ? (i3.updateTexture(t, this._version), i3.getTexture(t)) : this._getDefaultTexture(t);
  }
  _getDefaultTexture(t) {
    if (null == this._defaultTexture) {
      const e2 = new e();
      e2.wrapMode = D.CLAMP_TO_EDGE, e2.samplingMode = L.NEAREST, e2.width = 1, e2.height = 1, this._defaultTexture = new c(t, e2, new Uint8Array(4));
    }
    return this._defaultTexture;
  }
};

// ../../../node_modules/@arcgis/core/views/2d/engine/AFeatureContainer.js
var r = class extends i {
  constructor(t) {
    super(t), this._statisticsByLevel = /* @__PURE__ */ new Map(), this.attributeView = new m();
  }
  destroy() {
    this.children.forEach((e2) => e2.destroy()), this.removeAllChildren(), this.attributeView.destroy();
  }
  doRender(e2) {
    e2.context.capabilities.enable("textureFloatLinear"), super.doRender(e2);
  }
  createRenderParams(e2) {
    const t = super.createRenderParams(e2);
    return t.attributeView = this.attributeView, t.instanceStore = this._instanceStore, t.statisticsByLevel = this._statisticsByLevel, t;
  }
};

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/mesh/instanceIdUtils.js
function n2(n3) {
  return n3;
}
function r2(n3) {
  return n3;
}

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/TechniqueInstance.js
var i2 = class {
  constructor(t, i3, e2) {
    this._instanceId = t, this.techniqueRef = i3, this._input = e2;
  }
  get instanceId() {
    return n2(this._instanceId);
  }
  createMeshInfo(i3) {
    return {
      id: n2(this._instanceId),
      techniqueType: this.techniqueRef.type,
      inputParams: i3,
      optionalAttributes: this._input.optionalAttributes
    };
  }
  getInput() {
    return this._input;
  }
  setInput(t) {
    this._input = t;
  }
};

export {
  r,
  r2,
  i2 as i
};
//# sourceMappingURL=chunk-AW2BDC6B.js.map
