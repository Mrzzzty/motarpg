/**
 * 精细几何工厂：把「低分段基础体」升级为有细节的形体，并统一缓存复用。
 *
 * 1) `roundedBox()`：带倒角的箱体。等距视角下硬直角的箱体（宝箱/台阶/家具/门框）
 *    边缘不会接光，显得廉价；倒角会沿棱线形成一道高光，是「精细度」最直观的来源。
 * 2) `DETAIL`：统一的曲面分段数。8~10 段的圆柱/球在近景会露出多边形棱角，
 *    尤其柱身、大锅、喷泉这类圆弧为主的道具。
 * 3) 所有几何按参数缓存：同规格道具共享同一条 BufferGeometry（省显存与上传）。
 */
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';

/** 曲面统一分段（近景不露棱角，同时控制顶点量） */
export const DETAIL = {
  /** 圆柱径向分段：柱身 / 杆件 / 锅腿 / 喷泉池 */
  cyl: 24,
  /** 球体宽分段：大锅 / 火焰 / 球饰 */
  sphere: 18,
  /** 球体高分段 */
  sphereH: 14,
  /** 圆环分段（铁箍 / 线脚） */
  torus: 40,
  /** 圆环管截面分段 */
  torusTube: 12,
  /** 圆角盒倒角分段 */
  rounded: 2,
} as const;

const cache = new Map<string, THREE.BufferGeometry>();

function cached(key: string, make: () => THREE.BufferGeometry): THREE.BufferGeometry {
  let g = cache.get(key);
  if (!g) {
    g = make();
    // 共享标记：这些几何被多件道具复用，**不可**在清层时 dispose
    // （否则每层/每次重建都会释放再重传 GPU buffer）
    g.userData.shared = true;
    cache.set(key, g);
  }
  return g;
}

/**
 * 圆角箱体。`radius` 会自动夹到最短边的一半以内（RoundedBoxGeometry 的要求）。
 * 默认半径 0.045 足以在棱边形成一条细高光，又不会让方箱变圆。
 */
export function roundedBox(
  w: number, h: number, d: number,
  radius = 0.045, seg: number = DETAIL.rounded,
): THREE.BufferGeometry {
  const r = Math.max(0.004, Math.min(radius, Math.min(w, h, d) / 2 - 0.002));
  return cached(`rb${w}|${h}|${d}|${r}|${seg}`, () => new RoundedBoxGeometry(w, h, d, seg, r));
}

/** 圆柱（默认 24 段） */
export function cyl(
  rTop: number, rBottom: number, h: number,
  seg: number = DETAIL.cyl, open = false,
): THREE.BufferGeometry {
  return cached(
    `cy${rTop}|${rBottom}|${h}|${seg}|${open ? 1 : 0}`,
    () => new THREE.CylinderGeometry(rTop, rBottom, h, seg, 1, open),
  );
}

/** 球体（可只取球缺，用于大锅/半球顶） */
export function sphere(
  r: number, phiStart = 0, phiLength = Math.PI * 2, thetaStart = 0, thetaLength = Math.PI,
): THREE.BufferGeometry {
  return cached(
    `sp${r}|${phiStart}|${phiLength}|${thetaStart}|${thetaLength}`,
    () => new THREE.SphereGeometry(r, DETAIL.sphere, DETAIL.sphereH, phiStart, phiLength, thetaStart, thetaLength),
  );
}

/** 圆环（铁箍 / 线脚） */
export function torus(r: number, tube: number, arc = Math.PI * 2): THREE.BufferGeometry {
  return cached(
    `to${r}|${tube}|${arc}`,
    () => new THREE.TorusGeometry(r, tube, DETAIL.torusTube, DETAIL.torus, arc),
  );
}
