// 인터랙티브 3D 히어로 오브젝트 (Three.js)
// 시안별로 다른 style prop 지원: 'points' | 'wireframe' | 'volumetric'

const { useEffect, useRef } = React;

function Hero3D({ style = 'points', accent = '#1B365D', bg = 'transparent', autoRotate = true, className = '' }) {
  const mountRef = useRef(null);
  const stateRef = useRef({ dragging: false, x: 0, y: 0, rx: 0, ry: 0, vrx: 0, vry: 0 });

  useEffect(() => {
    if (!window.THREE) return;
    const THREE = window.THREE;
    const mount = mountRef.current;
    if (!mount) return;

    const w = mount.clientWidth;
    const h = mount.clientHeight;

    const scene = new THREE.Scene();
    if (bg !== 'transparent') scene.background = new THREE.Color(bg);

    const camera = new THREE.PerspectiveCamera(35, w / h, 0.1, 100);
    camera.position.set(0, 0, 6);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: bg === 'transparent' });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(w, h);
    if (bg === 'transparent') renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // 그룹 (회전 대상)
    const group = new THREE.Group();
    scene.add(group);

    const accentColor = new THREE.Color(accent);

    if (style === 'points') {
      // 점군 형태의 방(가우시안 스플랫 느낌)
      const geom = new THREE.BufferGeometry();
      const N = 4500;
      const positions = new Float32Array(N * 3);
      const colors = new Float32Array(N * 3);
      const sizes = new Float32Array(N);
      // 방 형태 (박스 표면에 점 뿌리기)
      const rw = 2.2, rh = 1.6, rd = 2.0;
      for (let i = 0; i < N; i++) {
        const face = Math.floor(Math.random() * 5); // 5면 (바닥+4벽)
        let x, y, z;
        const j = (Math.random() - 0.5);
        const k = (Math.random() - 0.5);
        if (face === 0) { x = j * rw * 2; y = -rh; z = k * rd * 2; }
        else if (face === 1) { x = -rw; y = j * rh * 2; z = k * rd * 2; }
        else if (face === 2) { x = rw; y = j * rh * 2; z = k * rd * 2; }
        else if (face === 3) { x = j * rw * 2; y = k * rh * 2; z = -rd; }
        else { x = j * rw * 2; y = k * rh * 2; z = rd; }
        // 노이즈로 살짝 흩뿌리기
        x += (Math.random() - 0.5) * 0.15;
        y += (Math.random() - 0.5) * 0.15;
        z += (Math.random() - 0.5) * 0.15;
        positions[i * 3] = x;
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = z;
        // 컬러: 액센트 컬러 주변으로
        const tint = Math.random();
        const c = new THREE.Color();
        if (tint < 0.7) {
          c.copy(accentColor).multiplyScalar(0.6 + Math.random() * 0.6);
        } else {
          c.setHSL(0.55 + Math.random() * 0.1, 0.3, 0.6 + Math.random() * 0.3);
        }
        colors[i * 3] = c.r;
        colors[i * 3 + 1] = c.g;
        colors[i * 3 + 2] = c.b;
        sizes[i] = Math.random() * 0.02 + 0.008;
      }
      geom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geom.setAttribute('color', new THREE.BufferAttribute(colors, 3));
      const mat = new THREE.PointsMaterial({ size: 0.03, vertexColors: true, transparent: true, opacity: 0.9, sizeAttenuation: true });
      const points = new THREE.Points(geom, mat);
      group.add(points);

      // 안쪽에 wireframe 큐브 힌트
      const boxGeom = new THREE.BoxGeometry(rw * 2, rh * 2, rd * 2);
      const edges = new THREE.EdgesGeometry(boxGeom);
      const lineMat = new THREE.LineBasicMaterial({ color: accentColor, transparent: true, opacity: 0.15 });
      const wire = new THREE.LineSegments(edges, lineMat);
      group.add(wire);
    } else if (style === 'wireframe') {
      // 아이코사히드론 wireframe (미니멀)
      const g = new THREE.IcosahedronGeometry(1.6, 3);
      const wireGeom = new THREE.WireframeGeometry(g);
      const wireMat = new THREE.LineBasicMaterial({ color: accentColor, transparent: true, opacity: 0.35 });
      const mesh = new THREE.LineSegments(wireGeom, wireMat);
      group.add(mesh);

      // 내부에 좀 더 촘촘한 도트
      const dotGeom = new THREE.BufferGeometry();
      const dN = 800;
      const dpos = new Float32Array(dN * 3);
      for (let i = 0; i < dN; i++) {
        // 구 표면
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        const r = 1.62;
        dpos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
        dpos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        dpos[i * 3 + 2] = r * Math.cos(phi);
      }
      dotGeom.setAttribute('position', new THREE.BufferAttribute(dpos, 3));
      const dotMat = new THREE.PointsMaterial({ color: accentColor, size: 0.025, transparent: true, opacity: 0.7 });
      group.add(new THREE.Points(dotGeom, dotMat));
    } else if (style === 'volumetric') {
      // NeRF 느낌 - 여러 겹의 반투명 셸
      for (let layer = 0; layer < 8; layer++) {
        const r = 0.5 + layer * 0.18;
        const g = new THREE.IcosahedronGeometry(r, 2);
        const m = new THREE.MeshBasicMaterial({
          color: accentColor,
          transparent: true,
          opacity: 0.03 + layer * 0.008,
          wireframe: true
        });
        group.add(new THREE.Mesh(g, m));
      }
      // 흩뿌리는 파티클
      const pGeom = new THREE.BufferGeometry();
      const pN = 2500;
      const pp = new Float32Array(pN * 3);
      const pc = new Float32Array(pN * 3);
      for (let i = 0; i < pN; i++) {
        const r = 0.4 + Math.random() * 1.6;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        pp[i * 3] = r * Math.sin(phi) * Math.cos(theta);
        pp[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        pp[i * 3 + 2] = r * Math.cos(phi);
        const c = new THREE.Color().copy(accentColor).multiplyScalar(0.7 + Math.random() * 0.5);
        pc[i * 3] = c.r; pc[i * 3 + 1] = c.g; pc[i * 3 + 2] = c.b;
      }
      pGeom.setAttribute('position', new THREE.BufferAttribute(pp, 3));
      pGeom.setAttribute('color', new THREE.BufferAttribute(pc, 3));
      const pMat = new THREE.PointsMaterial({ size: 0.02, vertexColors: true, transparent: true, opacity: 0.85 });
      group.add(new THREE.Points(pGeom, pMat));
    }

    // 조명 (일부 재질용)
    scene.add(new THREE.AmbientLight(0xffffff, 0.8));

    // 인터랙션
    const el = renderer.domElement;
    el.style.cursor = 'grab';
    const s = stateRef.current;
    const onDown = (e) => {
      s.dragging = true;
      el.style.cursor = 'grabbing';
      const t = e.touches ? e.touches[0] : e;
      s.x = t.clientX; s.y = t.clientY;
    };
    const onMove = (e) => {
      if (!s.dragging) return;
      const t = e.touches ? e.touches[0] : e;
      const dx = t.clientX - s.x;
      const dy = t.clientY - s.y;
      s.ry += dx * 0.007;
      s.rx += dy * 0.007;
      s.vry = dx * 0.007;
      s.vrx = dy * 0.007;
      s.x = t.clientX; s.y = t.clientY;
    };
    const onUp = () => { s.dragging = false; el.style.cursor = 'grab'; };
    el.addEventListener('mousedown', onDown);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    el.addEventListener('touchstart', onDown, { passive: true });
    window.addEventListener('touchmove', onMove, { passive: true });
    window.addEventListener('touchend', onUp);

    let raf;
    const animate = () => {
      // 관성 감쇠
      if (!s.dragging) {
        s.vrx *= 0.95;
        s.vry *= 0.95;
        s.rx += s.vrx;
        s.ry += s.vry;
        if (autoRotate) s.ry += 0.002;
      }
      group.rotation.x = s.rx;
      group.rotation.y = s.ry;
      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };
    animate();

    // 리사이즈
    const onResize = () => {
      const nw = mount.clientWidth;
      const nh = mount.clientHeight;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    };
    const ro = new ResizeObserver(onResize);
    ro.observe(mount);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      el.removeEventListener('mousedown', onDown);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
      el.removeEventListener('touchstart', onDown);
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('touchend', onUp);
      renderer.dispose();
      if (el.parentNode) el.parentNode.removeChild(el);
    };
  }, [style, accent, bg, autoRotate]);

  return (
    <div ref={mountRef} className={className} style={{ width: '100%', height: '100%', touchAction: 'none' }} />
  );
}

window.Hero3D = Hero3D;
