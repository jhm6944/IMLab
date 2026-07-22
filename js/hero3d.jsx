// Interactive 3D hero object (Three.js)
// style: 'points' (room/box), 'logo' (3D Gaussian Splatting)

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
    const h = 340; 

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
    
    // 💡 3DGS 뷰어 인스턴스를 담을 변수 (루프에서 업데이트하기 위함)
    let splatViewerInstance = null;

    if (style === 'points') {
      // --- [FIG.01] 기존 Room Point Cloud 코드 유지 ---
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
      // --- [FIG.02] 새로운 3DGS 렌더링 코드 ---
      // Babel 간섭을 피하기 위한 동적 import
      new Function("return import('@mkkellogg/gaussian-splats-3d')")()
      .then((module) => {
        splatViewerInstance = new module.DropInViewer({
          'dynamicScene': false,
          'sharedMemoryForWorkers': false
        });
        
        // ⚠️ 사용할 splat 또는 ply 파일 경로를 아래에 입력하세요.
        splatViewerInstance.addSplatScene('assets/splat.splat', {
          'splatAlphaCrop': 0.1
        }).then(() => {
          splatViewerInstance.scale.set(2.0, 2.0, 2.0); // 기존에 맞추신 스케일 유지
          splatViewerInstance.position.set(0, 2.0, 10); // 기존에 맞추신 위치 유지

          // 👇 추가할 코드: X축을 기준으로 90도 회전시켜서 Y축 방향으로 바라보게 눕힙니다.
          // 위에서 아래를 내려다보는 시점:
          splatViewerInstance.rotation.x = -Math.PI / 2; 
          
          // (만약 반대로 바닥에서 하늘을 올려다보는 시점이 된다면 마이너스를 뺍니다)
          // splatViewerInstance.rotation.x = Math.PI / 2;
          group.add(splatViewerInstance);
        });
      }).catch(err => console.error("3DGS 로딩 에러:", err));

      camera.position.set(0, 0, 5.2);
    }

    // --- 마우스 및 터치 상호작용 (회전) 로직 ---
    const s = stateRef.current;
    const el = renderer.domElement;
    
    const onDown = (e) => {
      s.dragging = true;
      s.x = e.touches ? e.touches[0].clientX : e.clientX;
      s.y = e.touches ? e.touches[0].clientY : e.clientY;
      s.vrx = 0;
      s.vry = 0;
    };
    const onMove = (e) => {
      if (!s.dragging) return;
      const nx = e.touches ? e.touches[0].clientX : e.clientX;
      const ny = e.touches ? e.touches[0].clientY : e.clientY;
      const dx = nx - s.x;
      const dy = ny - s.y;
      s.x = nx;
      s.y = ny;
      s.vry = dx * 0.005;
      s.vrx = dy * 0.005;
      s.rx += s.vrx;
      s.ry += s.vry;
    };
    const onUp = () => {
      s.dragging = false;
    };

    el.addEventListener('mousedown', onDown);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    el.addEventListener('touchstart', onDown, { passive: true });
    window.addEventListener('touchmove', onMove, { passive: true });
    window.addEventListener('touchend', onUp);

        // --- 렌더링 애니메이션 루프 ---
    let raf;
    let autoRotateTime = 0; // 진자 운동을 위한 시간 변수

    const animate = () => {
      if (!s.dragging) {
        // 마찰력으로 자연스럽게 감속
        s.vrx *= 0.95;
        s.vry *= 0.95;
        s.rx += s.vrx;
        s.ry += s.vry;

        if (autoRotate) {
          if (style === 'logo') {
            autoRotateTime += 0.015; // 진자 운동 속도 (값이 클수록 빨리 흔들림)
            
            // 💡 핵심: 절대 각도를 덮어씌우는 대신, '회전하는 힘(속도)'을 매 프레임 더해줍니다.
            // Math.cos를 사용하면 현재 위치를 중심으로 자연스럽게 왔다갔다 합니다.
            // 진폭(흔들리는 범위) = 0.0045 / 0.015 = 0.3 라디안 (약 17도)
            s.ry += Math.cos(autoRotateTime) * 0.0045; 
            
            // 상하(x축) 각도는 사용자가 드래그한 상태 그대로 자연스럽게 둡니다.
          } else {
            // 원본 Room Point Cloud는 빙글빙글 무한 회전
            s.ry += 0.002;
          }
        }
      }

      group.rotation.x = s.rx;
      group.rotation.y = s.ry;
      
      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };
    animate();

    // --- 리사이즈 처리 및 클린업 ---
    const onResize = () => {
      const nw = mount.clientWidth;
      const nh = 340;
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
    <div ref={mountRef} className={className} style={{ width: '100%', height: '340px', minHeight: '340px', maxHeight: '340px', touchAction: 'none' }} />
  );
}

window.Hero3D = Hero3D;
