import {
  e as e2
} from "./chunk-LQTSBE7P.js";
import {
  s
} from "./chunk-SYYDVGKY.js";
import {
  c,
  i as i2,
  q,
  u,
  x,
  y
} from "./chunk-JNWMZ6EJ.js";
import {
  e
} from "./chunk-4MMTPKY4.js";
import {
  A,
  G,
  i
} from "./chunk-J55F4AC2.js";
import {
  G as G2,
  H
} from "./chunk-XTVPEVHA.js";
import {
  K,
  _,
  o,
  r,
  z
} from "./chunk-AXVPJBVW.js";
import {
  n
} from "./chunk-OXEPWRM7.js";

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/materials/internal/bufferWriterUtils.js
function d(e3, t, f, o2 = 1) {
  const {
    data: r2,
    indices: i3
  } = e3, s2 = t.typedBuffer, n2 = t.typedBufferStride, c2 = i3.length;
  if (f *= n2, 1 === o2) for (let l = 0; l < c2; ++l) s2[f] = r2[i3[l]], f += n2;
  else for (let l = 0; l < c2; ++l) {
    const e4 = r2[i3[l]];
    for (let t2 = 0; t2 < o2; t2++) s2[f] = e4, f += n2;
  }
}
function u2(e3, t, f) {
  const {
    data: o2,
    indices: r2
  } = e3, i3 = t.typedBuffer, s2 = t.typedBufferStride, n2 = r2.length;
  f *= s2;
  for (let c2 = 0; c2 < n2; ++c2) {
    const e4 = 2 * r2[c2];
    i3[f] = o2[e4], i3[f + 1] = o2[e4 + 1], f += s2;
  }
}
function a(e3, t, f, o2) {
  const {
    data: r2,
    indices: i3
  } = e3, s2 = t.typedBuffer, n2 = t.typedBufferStride, c2 = i3.length;
  if (f *= n2, null == o2 || 1 === o2) for (let l = 0; l < c2; ++l) {
    const e4 = 3 * i3[l];
    s2[f] = r2[e4], s2[f + 1] = r2[e4 + 1], s2[f + 2] = r2[e4 + 2], f += n2;
  }
  else for (let l = 0; l < c2; ++l) {
    const e4 = 3 * i3[l];
    for (let t2 = 0; t2 < o2; ++t2) s2[f] = r2[e4], s2[f + 1] = r2[e4 + 1], s2[f + 2] = r2[e4 + 2], f += n2;
  }
}
function p(e3, t, f, o2 = 1) {
  const {
    data: r2,
    indices: i3
  } = e3, s2 = t.typedBuffer, n2 = t.typedBufferStride, c2 = i3.length;
  if (f *= n2, 1 === o2) for (let l = 0; l < c2; ++l) {
    const e4 = 4 * i3[l];
    s2[f] = r2[e4], s2[f + 1] = r2[e4 + 1], s2[f + 2] = r2[e4 + 2], s2[f + 3] = r2[e4 + 3], f += n2;
  }
  else for (let l = 0; l < c2; ++l) {
    const e4 = 4 * i3[l];
    for (let t2 = 0; t2 < o2; ++t2) s2[f] = r2[e4], s2[f + 1] = r2[e4 + 1], s2[f + 2] = r2[e4 + 2], s2[f + 3] = r2[e4 + 3], f += n2;
  }
}
function y2(e3, t, f) {
  const o2 = e3.typedBuffer, r2 = e3.typedBufferStride;
  t *= r2;
  for (let i3 = 0; i3 < f; ++i3) o2[t] = 0, o2[t + 1] = 0, o2[t + 2] = 0, o2[t + 3] = 0, t += r2;
}
function b(t, f, o2, r2, i3 = 1) {
  if (!f) return void a(t, o2, r2, i3);
  const {
    data: s2,
    indices: n2
  } = t, c2 = o2.typedBuffer, l = o2.typedBufferStride, d3 = n2.length, u3 = f[0], p3 = f[1], y4 = f[2], B2 = f[4], g2 = f[5], b3 = f[6], O3 = f[8], h3 = f[9], S3 = f[10], N3 = f[12], R3 = f[13], E2 = f[14];
  r2 *= l;
  let A4 = 0, L = 0, F = 0;
  const z3 = H(f) ? (e3) => {
    A4 = s2[e3] + N3, L = s2[e3 + 1] + R3, F = s2[e3 + 2] + E2;
  } : (e3) => {
    const t2 = s2[e3], f2 = s2[e3 + 1], o3 = s2[e3 + 2];
    A4 = u3 * t2 + B2 * f2 + O3 * o3 + N3, L = p3 * t2 + g2 * f2 + h3 * o3 + R3, F = y4 * t2 + b3 * f2 + S3 * o3 + E2;
  };
  if (1 === i3) for (let e3 = 0; e3 < d3; ++e3) z3(3 * n2[e3]), c2[r2] = A4, c2[r2 + 1] = L, c2[r2 + 2] = F, r2 += l;
  else for (let e3 = 0; e3 < d3; ++e3) {
    z3(3 * n2[e3]);
    for (let e4 = 0; e4 < i3; ++e4) c2[r2] = A4, c2[r2 + 1] = L, c2[r2 + 2] = F, r2 += l;
  }
}
function O(f, o2, r2, i3, s2 = 1) {
  if (!o2) return void a(f, r2, i3, s2);
  const {
    data: n2,
    indices: c2
  } = f, l = o2, d3 = r2.typedBuffer, u3 = r2.typedBufferStride, p3 = c2.length, y4 = l[0], B2 = l[1], g2 = l[2], b3 = l[4], O3 = l[5], h3 = l[6], S3 = l[8], N3 = l[9], R3 = l[10], E2 = !G2(l), A4 = 1e-6, L = 1 - A4;
  i3 *= u3;
  let F = 0, z3 = 0, m2 = 0;
  const I2 = H(l) ? (e3) => {
    F = n2[e3], z3 = n2[e3 + 1], m2 = n2[e3 + 2];
  } : (e3) => {
    const t = n2[e3], f2 = n2[e3 + 1], o3 = n2[e3 + 2];
    F = y4 * t + b3 * f2 + S3 * o3, z3 = B2 * t + O3 * f2 + N3 * o3, m2 = g2 * t + h3 * f2 + R3 * o3;
  };
  if (1 === s2) {
    if (E2) for (let e3 = 0; e3 < p3; ++e3) {
      I2(3 * c2[e3]);
      const t = F * F + z3 * z3 + m2 * m2;
      if (t < L && t > A4) {
        const e4 = 1 / Math.sqrt(t);
        d3[i3] = F * e4, d3[i3 + 1] = z3 * e4, d3[i3 + 2] = m2 * e4;
      } else d3[i3] = F, d3[i3 + 1] = z3, d3[i3 + 2] = m2;
      i3 += u3;
    }
    else for (let e3 = 0; e3 < p3; ++e3) I2(3 * c2[e3]), d3[i3] = F, d3[i3 + 1] = z3, d3[i3 + 2] = m2, i3 += u3;
  } else for (let e3 = 0; e3 < p3; ++e3) {
    if (I2(3 * c2[e3]), E2) {
      const e4 = F * F + z3 * z3 + m2 * m2;
      if (e4 < L && e4 > A4) {
        const t = 1 / Math.sqrt(e4);
        F *= t, z3 *= t, m2 *= t;
      }
    }
    for (let e4 = 0; e4 < s2; ++e4) d3[i3] = F, d3[i3 + 1] = z3, d3[i3 + 2] = m2, i3 += u3;
  }
}
function h(e3, f, o2, r2, i3 = 1) {
  if (!f) return void p(e3, o2, r2, i3);
  const {
    data: s2,
    indices: n2
  } = e3, c2 = f, l = o2.typedBuffer, d3 = o2.typedBufferStride, u3 = n2.length, a2 = c2[0], y4 = c2[1], B2 = c2[2], g2 = c2[4], b3 = c2[5], O3 = c2[6], h3 = c2[8], S3 = c2[9], N3 = c2[10], R3 = !G2(c2), E2 = 1e-6, A4 = 1 - E2;
  if (r2 *= d3, 1 === i3) for (let t = 0; t < u3; ++t) {
    const e4 = 4 * n2[t], f2 = s2[e4], o3 = s2[e4 + 1], i4 = s2[e4 + 2], c3 = s2[e4 + 3];
    let u4 = a2 * f2 + g2 * o3 + h3 * i4, p3 = y4 * f2 + b3 * o3 + S3 * i4, L = B2 * f2 + O3 * o3 + N3 * i4;
    if (R3) {
      const e5 = u4 * u4 + p3 * p3 + L * L;
      if (e5 < A4 && e5 > E2) {
        const t2 = 1 / Math.sqrt(e5);
        u4 *= t2, p3 *= t2, L *= t2;
      }
    }
    l[r2] = u4, l[r2 + 1] = p3, l[r2 + 2] = L, l[r2 + 3] = c3, r2 += d3;
  }
  else for (let t = 0; t < u3; ++t) {
    const e4 = 4 * n2[t], f2 = s2[e4], o3 = s2[e4 + 1], c3 = s2[e4 + 2], u4 = s2[e4 + 3];
    let p3 = a2 * f2 + g2 * o3 + h3 * c3, L = y4 * f2 + b3 * o3 + S3 * c3, F = B2 * f2 + O3 * o3 + N3 * c3;
    if (R3) {
      const e5 = p3 * p3 + L * L + F * F;
      if (e5 < A4 && e5 > E2) {
        const t2 = 1 / Math.sqrt(e5);
        p3 *= t2, L *= t2, F *= t2;
      }
    }
    for (let t2 = 0; t2 < i3; ++t2) l[r2] = p3, l[r2 + 1] = L, l[r2 + 2] = F, l[r2 + 3] = u4, r2 += d3;
  }
}
function S(e3, t, f, o2, r2 = 1) {
  const {
    data: i3,
    indices: s2
  } = e3, n2 = f.typedBuffer, c2 = f.typedBufferStride, l = s2.length;
  if (o2 *= c2, t !== i3.length || 4 !== t) {
    if (1 !== r2) {
      if (4 !== t) for (let d3 = 0; d3 < l; ++d3) {
        const e4 = 3 * s2[d3];
        for (let t2 = 0; t2 < r2; ++t2) n2[o2] = i3[e4], n2[o2 + 1] = i3[e4 + 1], n2[o2 + 2] = i3[e4 + 2], n2[o2 + 3] = 255, o2 += c2;
      }
      else for (let d3 = 0; d3 < l; ++d3) {
        const e4 = 4 * s2[d3];
        for (let t2 = 0; t2 < r2; ++t2) n2[o2] = i3[e4], n2[o2 + 1] = i3[e4 + 1], n2[o2 + 2] = i3[e4 + 2], n2[o2 + 3] = i3[e4 + 3], o2 += c2;
      }
    } else {
      if (4 === t) {
        for (let e4 = 0; e4 < l; ++e4) {
          const t2 = 4 * s2[e4];
          n2[o2] = i3[t2], n2[o2 + 1] = i3[t2 + 1], n2[o2 + 2] = i3[t2 + 2], n2[o2 + 3] = i3[t2 + 3], o2 += c2;
        }
        return;
      }
      for (let e4 = 0; e4 < l; ++e4) {
        const t2 = 3 * s2[e4];
        n2[o2] = i3[t2], n2[o2 + 1] = i3[t2 + 1], n2[o2 + 2] = i3[t2 + 2], n2[o2 + 3] = 255, o2 += c2;
      }
    }
  } else {
    n2[o2] = i3[0], n2[o2 + 1] = i3[1], n2[o2 + 2] = i3[2], n2[o2 + 3] = i3[3];
    const e4 = new Uint32Array(f.typedBuffer.buffer, f.start), t2 = c2 / 4, s3 = e4[o2 /= 4];
    o2 += t2;
    const d3 = l * r2;
    for (let f2 = 1; f2 < d3; ++f2) e4[o2] = s3, o2 += t2;
  }
}
function N(e3, t, f) {
  const {
    data: o2,
    indices: r2
  } = e3, i3 = t.typedBuffer, s2 = t.typedBufferStride, n2 = r2.length, c2 = o2[0];
  f *= s2;
  for (let l = 0; l < n2; ++l) i3[f] = c2, f += s2;
}
function R(e3, t, f, o2, r2 = 1) {
  const i3 = t.typedBuffer, s2 = t.typedBufferStride;
  if (o2 *= s2, 1 === r2) for (let n2 = 0; n2 < f; ++n2) i3[o2] = e3[0], i3[o2 + 1] = e3[1], i3[o2 + 2] = e3[2], i3[o2 + 3] = e3[3], o2 += s2;
  else for (let n2 = 0; n2 < f; ++n2) for (let t2 = 0; t2 < r2; ++t2) i3[o2] = e3[0], i3[o2 + 1] = e3[1], i3[o2 + 2] = e3[2], i3[o2 + 3] = e3[3], o2 += s2;
}
function E(e3, t, o2, r2, i3, s2) {
  for (const n2 of t.fields.keys()) {
    const t2 = e3.attributes.get(n2), c2 = t2?.indices;
    if (t2 && c2) A2(n2, t2, o2, r2, i3, s2);
    else if (n2 === e.OBJECTANDLAYERIDCOLOR && null != e3.objectAndLayerIdColor) {
      const t3 = e3.attributes.get(e.POSITION)?.indices;
      if (t3) {
        const o3 = t3.length, r3 = i3.getField(n2, x);
        R(e3.objectAndLayerIdColor, r3, o3, s2);
      }
    }
  }
}
function A2(e3, t, d3, a2, y4, B2) {
  switch (e3) {
    case e.POSITION: {
      s(3 === t.size);
      const f = y4.getField(e3, i2);
      s(!!f, `No buffer view for ${e3}`), f && b(t, d3, f, B2);
      break;
    }
    case e.NORMAL: {
      s(3 === t.size);
      const f = y4.getField(e3, i2);
      s(!!f, `No buffer view for ${e3}`), f && O(t, a2, f, B2);
      break;
    }
    case e.NORMALCOMPRESSED: {
      s(2 === t.size);
      const f = y4.getField(e3, q);
      s(!!f, `No buffer view for ${e3}`), f && u2(t, f, B2);
      break;
    }
    case e.UV0: {
      s(2 === t.size);
      const f = y4.getField(e3, u);
      s(!!f, `No buffer view for ${e3}`), f && u2(t, f, B2);
      break;
    }
    case e.COLOR:
    case e.SYMBOLCOLOR: {
      const o2 = y4.getField(e3, x);
      s(!!o2, `No buffer view for ${e3}`), s(3 === t.size || 4 === t.size), !o2 || 3 !== t.size && 4 !== t.size || S(t, t.size, o2, B2);
      break;
    }
    case e.COLORFEATUREATTRIBUTE: {
      const f = y4.getField(e3, y);
      s(!!f, `No buffer view for ${e3}`), s(1 === t.size), f && 1 === t.size && N(t, f, B2);
      break;
    }
    case e.TANGENT: {
      s(4 === t.size);
      const f = y4.getField(e3, c);
      s(!!f, `No buffer view for ${e3}`), f && h(t, d3, f, B2);
      break;
    }
    case e.PROFILERIGHT:
    case e.PROFILEUP:
    case e.PROFILEVERTEXANDNORMAL:
    case e.FEATUREVALUE: {
      s(4 === t.size);
      const f = y4.getField(e3, c);
      s(!!f, `No buffer view for ${e3}`), f && p(t, f, B2);
    }
  }
}

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/lib/RayIntersections.js
var m = class {
  constructor(t = false, n2 = true) {
    this.isVerticalRay = t, this.normalRequired = n2;
  }
};
var h2 = i();
function p2(n2, o2, i3, e3, s2, c2) {
  if (!n2.visible) return;
  const r2 = K(P, e3, i3), a2 = (t, n3, o3) => {
    c2(t, o3, n3, false);
  }, h3 = new m(false, o2.options.normalRequired);
  if (n2.boundingInfo) {
    s(n2.type === e2.Mesh);
    const t = o2.tolerance;
    b2(n2.boundingInfo, i3, r2, t, s2, h3, a2);
  } else {
    const t = n2.attributes.get(e.POSITION), o3 = t.indices;
    V(i3, r2, 0, o3.length / 3, o3, t.data, t.stride, s2, h3, a2);
  }
}
var M = n();
function b2(t, n2, o2, i3, e3, s2, c2) {
  if (null == t) return;
  const f = C(o2, M);
  if (A(h2, t.bbMin), G(h2, t.bbMax), null != e3 && e3.applyToAabb(h2), k(h2, n2, f, i3)) {
    const {
      primitiveIndices: r2,
      position: a2
    } = t, f2 = r2 ? r2.length : a2.indices.length / 3;
    if (f2 > z2) {
      const r3 = t.getChildren();
      if (void 0 !== r3) {
        for (const t2 of r3) b2(t2, n2, o2, i3, e3, s2, c2);
        return;
      }
    }
    T(n2, o2, 0, f2, a2.indices, a2.data, a2.stride, r2, e3, s2, c2);
  }
}
var d2 = n();
function x2(n2, o2, i3, e3, s2, c2, r2, a2, f) {
  const {
    data: u3,
    stride: l
  } = c2;
  V(n2, K(P, o2, n2), i3, e3, s2, u3, l, r2, a2, f);
}
function g(t, n2, o2, i3, e3, s2, c2, r2, a2, f = null, u3 = 0) {
  const l = t[0], m2 = t[1], h3 = t[2], p3 = n2[0], M2 = n2[1], b3 = n2[2];
  for (let x3 = o2; x3 < i3; ++x3) {
    const t2 = u3 + (f ? f[x3] : x3), n3 = 3 * t2, o3 = c2 * e3[n3], i4 = s2[o3], g2 = s2[o3 + 1], y4 = s2[o3 + 2], T2 = c2 * e3[n3 + 1], V2 = s2[T2], j2 = s2[T2 + 1], q3 = s2[T2 + 2], v2 = c2 * e3[n3 + 2], R3 = V2 - i4, O3 = j2 - g2, A4 = q3 - y4, B2 = s2[v2] - i4, C2 = s2[v2 + 1] - g2, k2 = s2[v2 + 2] - y4, w2 = M2 * k2 - C2 * b3, z3 = b3 * B2 - k2 * p3, P2 = p3 * C2 - B2 * M2, S3 = R3 * w2 + O3 * z3 + A4 * P2;
    if (Math.abs(S3) <= N2) continue;
    const U = l - i4, D = m2 - g2, E2 = h3 - y4, F = U * w2 + D * z3 + E2 * P2;
    if (S3 > 0) {
      if (F < 0 || F > S3) continue;
    } else if (F > 0 || F < S3) continue;
    const G3 = D * A4 - O3 * E2, H2 = E2 * R3 - A4 * U, J = U * O3 - R3 * D, K2 = p3 * G3 + M2 * H2 + b3 * J;
    if (S3 > 0) {
      if (K2 < 0 || F + K2 > S3) continue;
    } else if (K2 > 0 || F + K2 < S3) continue;
    const L = (B2 * G3 + C2 * H2 + k2 * J) / S3;
    if (L >= 0) {
      a2(L, t2, r2 ? I(R3, O3, A4, B2, C2, k2, d2) : null);
    }
  }
}
function y3(t, n2, o2, i3, e3, s2, c2, r2, a2, f, u3, l = null, m2 = 0) {
  const h3 = t[0], p3 = t[1], M2 = t[2], b3 = n2[0], x3 = n2[1], g2 = n2[2];
  for (let y4 = o2; y4 < i3; ++y4) {
    const t2 = m2 + (l ? l[y4] : y4), n3 = 3 * t2, o3 = c2 * e3[n3], i4 = s2[o3], T2 = s2[o3 + 1], V2 = s2[o3 + 2], j2 = c2 * e3[n3 + 1], q3 = s2[j2], v2 = s2[j2 + 1], R3 = s2[j2 + 2], O3 = c2 * e3[n3 + 2], A4 = s2[O3], B2 = s2[O3 + 1], C2 = s2[O3 + 2], k2 = V2 - a2, w2 = r2 / Math.sqrt(i4 * i4 + T2 * T2 + k2 * k2), z3 = i4 + i4 * w2, P2 = T2 + T2 * w2, S3 = V2 + k2 * w2, U = R3 - a2, D = r2 / Math.sqrt(q3 * q3 + v2 * v2 + U * U), E2 = q3 + q3 * D, F = v2 + v2 * D, G3 = R3 + U * D, H2 = C2 - a2, J = r2 / Math.sqrt(A4 * A4 + B2 * B2 + H2 * H2), K2 = E2 - z3, L = F - P2, Q = G3 - S3, W = A4 + A4 * J - z3, X = B2 + B2 * J - P2, Y = C2 + H2 * J - S3, Z = x3 * Y - X * g2, $ = g2 * W - Y * b3, _2 = b3 * X - W * x3, tt = K2 * Z + L * $ + Q * _2;
    if (Math.abs(tt) <= N2) continue;
    const nt = h3 - z3, ot = p3 - P2, it = M2 - S3, et = nt * Z + ot * $ + it * _2;
    if (tt > 0) {
      if (et < 0 || et > tt) continue;
    } else if (et > 0 || et < tt) continue;
    const st = ot * Q - L * it, ct = it * K2 - Q * nt, rt = nt * L - K2 * ot, at = b3 * st + x3 * ct + g2 * rt;
    if (tt > 0) {
      if (at < 0 || et + at > tt) continue;
    } else if (at > 0 || et + at < tt) continue;
    const ft = (W * st + X * ct + Y * rt) / tt;
    if (ft >= 0) {
      u3(ft, t2, f ? I(K2, L, Q, W, X, Y, d2) : null);
    }
  }
}
function T(t, n2, o2, i3, e3, s2, c2, r2, a2, f, u3) {
  const l = t[0], m2 = t[1], h3 = t[2], p3 = n2[0], M2 = n2[1], b3 = n2[2], {
    normalRequired: x3
  } = f;
  for (let g2 = o2; g2 < i3; ++g2) {
    const t2 = r2[g2], n3 = 3 * t2, o3 = c2 * e3[n3];
    let i4 = s2[o3], f2 = s2[o3 + 1], y4 = s2[o3 + 2];
    const T2 = c2 * e3[n3 + 1];
    let V2 = s2[T2], j2 = s2[T2 + 1], q3 = s2[T2 + 2];
    const v2 = c2 * e3[n3 + 2];
    let R3 = s2[v2], O3 = s2[v2 + 1], A4 = s2[v2 + 2];
    null != a2 && ([i4, f2, y4] = a2.applyToVertex(i4, f2, y4, g2), [V2, j2, q3] = a2.applyToVertex(V2, j2, q3, g2), [R3, O3, A4] = a2.applyToVertex(R3, O3, A4, g2));
    const B2 = V2 - i4, C2 = j2 - f2, k2 = q3 - y4, w2 = R3 - i4, z3 = O3 - f2, P2 = A4 - y4, S3 = M2 * P2 - z3 * b3, U = b3 * w2 - P2 * p3, D = p3 * z3 - w2 * M2, E2 = B2 * S3 + C2 * U + k2 * D;
    if (Math.abs(E2) <= N2) continue;
    const F = l - i4, G3 = m2 - f2, H2 = h3 - y4, J = F * S3 + G3 * U + H2 * D;
    if (E2 > 0) {
      if (J < 0 || J > E2) continue;
    } else if (J > 0 || J < E2) continue;
    const K2 = G3 * k2 - C2 * H2, L = H2 * B2 - k2 * F, Q = F * C2 - B2 * G3, W = p3 * K2 + M2 * L + b3 * Q;
    if (E2 > 0) {
      if (W < 0 || J + W > E2) continue;
    } else if (W > 0 || J + W < E2) continue;
    const X = (w2 * K2 + z3 * L + P2 * Q) / E2;
    if (X >= 0) {
      u3(X, t2, x3 ? I(B2, C2, k2, w2, z3, P2, d2) : null);
    }
  }
}
function V(i3, e3, s2, c2, r2, a2, f, u3, l, m2) {
  const h3 = e3, p3 = S2, M2 = Math.abs(h3[0]), b3 = Math.abs(h3[1]), d3 = Math.abs(h3[2]), x3 = M2 >= b3 ? M2 >= d3 ? 0 : 2 : b3 >= d3 ? 1 : 2, g2 = x3, y4 = h3[g2] < 0 ? 2 : 1, T2 = (x3 + y4) % 3, V2 = (x3 + (3 - y4)) % 3, I2 = h3[T2] / h3[g2], O3 = h3[V2] / h3[g2], A4 = 1 / h3[g2], B2 = j, C2 = q2, k2 = v, {
    normalRequired: w2
  } = l;
  for (let j2 = s2; j2 < c2; ++j2) {
    const e4 = 3 * j2, s3 = f * r2[e4];
    o(p3[0], a2[s3 + 0], a2[s3 + 1], a2[s3 + 2]);
    const c3 = f * r2[e4 + 1];
    o(p3[1], a2[c3 + 0], a2[c3 + 1], a2[c3 + 2]);
    const l2 = f * r2[e4 + 2];
    o(p3[2], a2[l2 + 0], a2[l2 + 1], a2[l2 + 2]), u3 && (r(p3[0], u3.applyToVertex(p3[0][0], p3[0][1], p3[0][2], j2)), r(p3[1], u3.applyToVertex(p3[1][0], p3[1][1], p3[1][2], j2)), r(p3[2], u3.applyToVertex(p3[2][0], p3[2][1], p3[2][2], j2))), K(B2, p3[0], i3), K(C2, p3[1], i3), K(k2, p3[2], i3);
    const h4 = B2[T2] - I2 * B2[g2], M3 = B2[V2] - O3 * B2[g2], b4 = C2[T2] - I2 * C2[g2], d4 = C2[V2] - O3 * C2[g2], x4 = k2[T2] - I2 * k2[g2], y5 = k2[V2] - O3 * k2[g2], q3 = x4 * d4 - y5 * b4, v2 = h4 * y5 - M3 * x4, z3 = b4 * M3 - d4 * h4;
    if ((q3 < 0 || v2 < 0 || z3 < 0) && (q3 > 0 || v2 > 0 || z3 > 0)) continue;
    const N3 = q3 + v2 + z3;
    if (0 === N3) continue;
    const P2 = q3 * (A4 * B2[g2]) + v2 * (A4 * C2[g2]) + z3 * (A4 * k2[g2]);
    if (P2 * Math.sign(N3) < 0) continue;
    const S3 = P2 / N3;
    if (S3 >= 0) {
      m2(S3, j2, w2 ? R2(p3) : null);
    }
  }
}
var j = n();
var q2 = n();
var v = n();
function I(t, o2, s2, c2, r2, a2, f) {
  return o(O2, t, o2, s2), o(A3, c2, r2, a2), _(f, O2, A3), z(f, f), f;
}
function R2(n2) {
  return K(O2, n2[1], n2[0]), K(A3, n2[2], n2[0]), _(d2, O2, A3), z(d2, d2), d2;
}
var O2 = n();
var A3 = n();
function B(t, o2, i3) {
  return o(i3, 1 / (o2[0] - t[0]), 1 / (o2[1] - t[1]), 1 / (o2[2] - t[2]));
}
function C(t, o2) {
  return o(o2, 1 / t[0], 1 / t[1], 1 / t[2]);
}
function k(t, n2, o2, i3) {
  return w(t, n2, o2, i3, 1 / 0);
}
function w(t, n2, o2, i3, e3) {
  const s2 = (t[0] - i3 - n2[0]) * o2[0], c2 = (t[3] + i3 - n2[0]) * o2[0];
  let r2 = Math.min(s2, c2), a2 = Math.max(s2, c2);
  const f = (t[1] - i3 - n2[1]) * o2[1], u3 = (t[4] + i3 - n2[1]) * o2[1];
  if (a2 = Math.min(a2, Math.max(f, u3)), a2 < 0) return false;
  if (r2 = Math.max(r2, Math.min(f, u3)), r2 > a2) return false;
  const l = (t[2] - i3 - n2[2]) * o2[2], m2 = (t[5] + i3 - n2[2]) * o2[2];
  return a2 = Math.min(a2, Math.max(l, m2)), !(a2 < 0) && (r2 = Math.max(r2, Math.min(l, m2)), !(r2 > a2) && r2 < e3);
}
var z2 = 1e3;
var N2 = 1e-7;
var P = n();
var S2 = [n(), n(), n()];

export {
  m,
  p2 as p,
  x2 as x,
  g,
  y3 as y,
  B,
  k,
  w,
  d,
  p as p2,
  y2,
  b,
  O,
  S,
  R,
  E,
  A2 as A
};
//# sourceMappingURL=chunk-5L3YXBNN.js.map
