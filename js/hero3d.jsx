// Interactive 3D hero object (Three.js)
// style: 'points' (room/box), 'logo' (IM monogram point cloud)

const { useEffect: h3d_useEffect, useRef: h3d_useRef } = React;

function Hero3D({ style = 'points', accent = '#4a7fbc', bg = 'transparent', autoRotate = true, className = '' }) {
  const mountRef = h3d_useRef(null);
  const stateRef = h3d_useRef({ dragging: false, x: 0, y: 0, rx: 0, ry: 0, vrx: 0, vry: 0 });

  h3d_useEffect(() => {
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

    const group = new THREE.Group();
    scene.add(group);

    const accentColor = new THREE.Color(accent);

    if (style === 'points') {
      // point cloud on the inside of a box (a "room")
      const geom = new THREE.BufferGeometry();
      const N = 4500;
      const positions = new Float32Array(N * 3);
      const colors = new Float32Array(N * 3);
      const rw = 2.2, rh = 1.6, rd = 2.0;
      for (let i = 0; i < N; i++) {
        const face = Math.floor(Math.random() * 5);
        let x, y, z;
        const j = (Math.random() - 0.5);
        const k = (Math.random() - 0.5);
        if (face === 0) { x = j * rw * 2; y = -rh; z = k * rd * 2; }
        else if (face === 1) { x = -rw; y = j * rh * 2; z = k * rd * 2; }
        else if (face === 2) { x = rw; y = j * rh * 2; z = k * rd * 2; }
        else if (face === 3) { x = j * rw * 2; y = k * rh * 2; z = -rd; }
        else { x = j * rw * 2; y = k * rh * 2; z = rd; }
        x += (Math.random() - 0.5) * 0.15;
        y += (Math.random() - 0.5) * 0.15;
        z += (Math.random() - 0.5) * 0.15;
        positions[i * 3] = x;
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = z;
        const tint = Math.random();
        const c = new THREE.Color();
        if (tint < 0.7) c.copy(accentColor).multiplyScalar(0.6 + Math.random() * 0.6);
        else c.setHSL(0.55 + Math.random() * 0.1, 0.3, 0.6 + Math.random() * 0.3);
        colors[i * 3] = c.r;
        colors[i * 3 + 1] = c.g;
        colors[i * 3 + 2] = c.b;
      }
      geom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geom.setAttribute('color', new THREE.BufferAttribute(colors, 3));
      const mat = new THREE.PointsMaterial({ size: 0.028, vertexColors: true, transparent: true, opacity: 0.9, sizeAttenuation: true });
      group.add(new THREE.Points(geom, mat));

      const boxGeom = new THREE.BoxGeometry(rw * 2, rh * 2, rd * 2);
      const edges = new THREE.EdgesGeometry(boxGeom);
      const lineMat = new THREE.LineBasicMaterial({ color: accentColor, transparent: true, opacity: 0.15 });
      group.add(new THREE.LineSegments(edges, lineMat));
    } else if (style === 'logo') {
      // Renders the IM monogram as a proper 3D point cloud.
      // Each letter is defined as (x, y) column offsets; points are jittered in z.
      // I: three-stack column;  M: two columns with a middle notch dip.
      const clouds = [];
      // I letter — column at x = -2.2, height 3.2
      for (let i = 0; i < 600; i++) {
        const y = (Math.random() - 0.5) * 3.2;
        const x = -2.2 + (Math.random() - 0.5) * 0.55;
        const z = (Math.random() - 0.5) * 0.55;
        clouds.push([x, y, z]);
      }
      // I serifs (top & bottom bars)
      for (let i = 0; i < 300; i++) {
        const bar = Math.random() < 0.5 ? 1.55 : -1.55;
        const y = bar + (Math.random() - 0.5) * 0.35;
        const x = -2.2 + (Math.random() - 0.5) * 1.6;
        const z = (Math.random() - 0.5) * 0.55;
        clouds.push([x, y, z]);
      }
      // M — two verticals at x = -0.4 and x = 2.4
      for (const cx of [-0.4, 2.4]) {
        for (let i = 0; i < 700; i++) {
          const y = (Math.random() - 0.5) * 3.2;
          const x = cx + (Math.random() - 0.5) * 0.55;
          const z = (Math.random() - 0.5) * 0.55;
          clouds.push([x, y, z]);
        }
      }
      // M — two diagonals from top of each vertical down to the middle notch (x=1.0, y=0)
      const diagPoints = 600;
      for (let side = 0; side < 2; side++) {
        const x0 = side === 0 ? -0.4 : 2.4;
        const x1 = 1.0;
        for (let i = 0; i < diagPoints; i++) {
          const t = Math.random();
          const x = x0 + (x1 - x0) * t + (Math.random() - 0.5) * 0.5;
          const y = 1.55 + (0 - 1.55) * t + (Math.random() - 0.5) * 0.4;
          const z = (Math.random() - 0.5) * 0.55;
          clouds.push([x, y, z]);
        }
      }

      const N = clouds.length;
      const positions = new Float32Array(N * 3);
      const colors = new Float32Array(N * 3);
      for (let i = 0; i < N; i++) {
        // scale down to fit the frame
        positions[i * 3] = clouds[i][0] * 0.7;
        positions[i * 3 + 1] = clouds[i][1] * 0.7;
        positions[i * 3 + 2] = clouds[i][2] * 0.7;
        const c = new THREE.Color();
        const t = Math.random();
        if (t < 0.75) c.copy(accentColor).multiplyScalar(0.7 + Math.random() * 0.55);
        else c.setHSL(0.55 + Math.random() * 0.08, 0.35, 0.65 + Math.random() * 0.2);
        colors[i * 3] = c.r;
        colors[i * 3 + 1] = c.g;
        colors[i * 3 + 2] = c.b;
      }
      const geom = new THREE.BufferGeometry();
      geom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geom.setAttribute('color', new THREE.BufferAttribute(colors, 3));
      const mat = new THREE.PointsMaterial({ size: 0.048, vertexColors: true, transparent: true, opacity: 0.95, sizeAttenuation: true });
      group.add(new THREE.Points(geom, mat));

      // faint ambient scatter around the monogram
      const bgN = 800;
      const bgPos = new Float32Array(bgN * 3);
      const bgCol = new Float32Array(bgN * 3);
      for (let i = 0; i < bgN; i++) {
        const r = 2.6 + Math.random() * 0.6;
        const th = Math.random() * Math.PI * 2;
        const ph = (Math.random() - 0.5) * Math.PI * 0.9;
        bgPos[i * 3] = r * Math.cos(th) * Math.cos(ph);
        bgPos[i * 3 + 1] = r * Math.sin(ph);
        bgPos[i * 3 + 2] = r * Math.sin(th) * Math.cos(ph);
        const c = new THREE.Color().copy(accentColor).multiplyScalar(0.35);
        bgCol[i * 3] = c.r;
        bgCol[i * 3 + 1] = c.g;
        bgCol[i * 3 + 2] = c.b;
      }
      const bgGeom = new THREE.BufferGeometry();
      bgGeom.setAttribute('position', new THREE.BufferAttribute(bgPos, 3));
      bgGeom.setAttribute('color', new THREE.BufferAttribute(bgCol, 3));
      const bgMat = new THREE.PointsMaterial({ size: 0.022, vertexColors: true, transparent: true, opacity: 0.6, sizeAttenuation: true });
      group.add(new THREE.Points(bgGeom, bgMat));

      // pull camera slightly closer
      camera.position.set(0, 0, 5.2);
    }

    scene.add(new THREE.AmbientLight(0xffffff, 0.8));

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
