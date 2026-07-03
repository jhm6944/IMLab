// 시안 B - Minimal Grid (스위스 스타일)
// 강한 그리드, 얇은 룰라인, 산세리프. 정보 밀도 높음
// 그래픽 디자인학과 사무실 게시판 느낌

const VariantB = () => {
  const [activeNav, setActiveNav] = React.useState('home');
  const news = window.NEWS;
  const info = window.LAB_INFO;
  const projects = window.PROJECTS;
  const pubs = window.PUBLICATIONS;
  const members = window.MEMBERS;

  return (
    <div className="vb-root">
      <style>{`
        .vb-root {
          --ink: #0a0a0a;
          --paper: #ffffff;
          --paper-2: #f4f4f2;
          --line: #0a0a0a;
          --line-2: rgba(10,10,10,0.12);
          --muted: #6b6b6b;
          --accent: #1B365D;
          --accent-2: #7A2E3B;
          background: var(--paper);
          color: var(--ink);
          font-family: 'Pretendard', 'Inter', system-ui, sans-serif;
          font-weight: 400;
          font-size: 14px;
          line-height: 1.55;
          letter-spacing: -0.005em;
        }
        .vb-mono { font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 11px; letter-spacing: 0.04em; }
        .vb-num { font-family: 'JetBrains Mono', ui-monospace, monospace; font-variant-numeric: tabular-nums; }
        .vb-cap { text-transform: uppercase; letter-spacing: 0.08em; font-size: 10.5px; font-weight: 500; }

        /* TOP RAIL */
        .vb-top {
          border-bottom: 1px solid var(--line);
          display: grid; grid-template-columns: 1fr auto 1fr;
          padding: 8px 24px;
          font-size: 11px;
          letter-spacing: 0.06em;
        }
        .vb-top-right { text-align: right; }

        .vb-nav {
          position: sticky; top: 0; z-index: 50;
          background: var(--paper);
          border-bottom: 1px solid var(--line);
        }
        .vb-nav-inner {
          display: grid; grid-template-columns: 320px 1fr auto;
          align-items: stretch;
        }
        .vb-brand {
          padding: 22px 24px; border-right: 1px solid var(--line);
          display: flex; flex-direction: column; gap: 4px; justify-content: center;
        }
        .vb-brand-en {
          font-size: 20px; font-weight: 600; letter-spacing: -0.02em; line-height: 1;
          display: flex; align-items: center; gap: 10px;
        }
        .vb-brand-en::before {
          content: ''; width: 14px; height: 14px; background: var(--ink);
        }
        .vb-brand-ko { font-size: 12px; color: var(--muted); letter-spacing: 0.02em; }
        .vb-nav-list {
          display: grid; grid-template-columns: repeat(6, 1fr);
          align-items: stretch;
        }
        .vb-nav-link {
          padding: 22px 16px; border-right: 1px solid var(--line-2);
          font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; color: var(--ink);
          cursor: pointer; display: flex; flex-direction: column; justify-content: center;
          transition: background 0.15s;
        }
        .vb-nav-link:hover { background: var(--paper-2); }
        .vb-nav-link.active { background: var(--ink); color: var(--paper); }
        .vb-nav-num { font-size: 9px; opacity: 0.6; margin-bottom: 2px; }
        .vb-nav-right {
          padding: 22px 24px; border-left: 1px solid var(--line);
          display: flex; align-items: center; gap: 12px; font-size: 12px;
        }
        .vb-nav-right .live-dot { width: 8px; height: 8px; border-radius: 50%; background: #d13636; animation: vbPulse 1.6s infinite; }
        @keyframes vbPulse { 0%,100%{opacity:1;} 50%{opacity:0.3;} }

        /* HERO */
        .vb-hero {
          display: grid; grid-template-columns: 320px 1fr 320px;
          border-bottom: 1px solid var(--line);
          min-height: 620px;
        }
        .vb-hero-left, .vb-hero-right { padding: 32px 24px; border-right: 1px solid var(--line); display: flex; flex-direction: column; }
        .vb-hero-right { border-right: none; border-left: 1px solid var(--line); }
        .vb-hero-center { position: relative; }

        .vb-issue-header {
          border-bottom: 1px solid var(--line);
          padding-bottom: 12px; margin-bottom: 16px;
          display: flex; justify-content: space-between;
        }
        .vb-issue-header span { font-size: 10px; letter-spacing: 0.08em; text-transform: uppercase; }

        .vb-hero-title {
          font-size: clamp(56px, 8.5vw, 130px);
          font-weight: 500;
          line-height: 0.9;
          letter-spacing: -0.045em;
          margin: 40px 40px 0 40px;
          position: relative;
          z-index: 2;
        }
        .vb-hero-title-2 {
          font-size: clamp(56px, 8.5vw, 130px);
          font-weight: 300;
          line-height: 0.9;
          letter-spacing: -0.045em;
          margin: 0 40px;
          color: var(--muted);
          position: relative; z-index: 2;
        }
        .vb-hero-title-3 {
          font-size: clamp(56px, 8.5vw, 130px);
          font-weight: 500; font-style: italic;
          line-height: 0.9;
          letter-spacing: -0.045em;
          margin: 0 40px;
          color: var(--accent);
          position: relative; z-index: 2;
        }
        .vb-hero-3d-abs {
          position: absolute;
          right: 40px; top: 40px; bottom: 40px;
          width: 340px;
          background: #0a0e15;
          border: 1px solid var(--line);
          z-index: 1;
        }
        .vb-hero-3d-abs > div { height: 100%; }
        .vb-hero-3d-label {
          position: absolute; top: 12px; left: 12px; z-index: 3;
          color: rgba(255,255,255,0.5); pointer-events: none;
          font-family: 'JetBrains Mono', monospace; font-size: 10px; letter-spacing: 0.08em; text-transform: uppercase;
        }
        .vb-hero-3d-hint {
          position: absolute; bottom: 12px; left: 12px; z-index: 3;
          color: rgba(255,255,255,0.5); pointer-events: none;
          font-family: 'JetBrains Mono', monospace; font-size: 10px; letter-spacing: 0.08em; text-transform: uppercase;
        }

        .vb-hero-bottom {
          position: absolute; left: 0; right: 0; bottom: 0;
          padding: 20px 40px;
          border-top: 1px solid var(--line);
          background: var(--paper);
          display: grid; grid-template-columns: 1fr 1fr 1fr;
          gap: 40px;
          font-size: 12px;
          z-index: 4;
        }
        .vb-hero-bottom .k { color: var(--muted); text-transform: uppercase; letter-spacing: 0.08em; font-size: 10px; margin-bottom: 4px; }

        /* HERO LEFT: about + keywords */
        .vb-hero-left h4 { font-size: 12px; margin: 0 0 12px; letter-spacing: 0.08em; text-transform: uppercase; font-weight: 500; }
        .vb-hero-left p { font-size: 13px; line-height: 1.55; margin: 0 0 16px; }
        .vb-keywords { list-style: none; padding: 0; margin: 0 0 20px; }
        .vb-keywords li { border-top: 1px solid var(--line-2); padding: 8px 0; font-size: 12px; display: flex; justify-content: space-between; }
        .vb-keywords li:last-child { border-bottom: 1px solid var(--line-2); }
        .vb-keywords .idx { color: var(--muted); font-family: 'JetBrains Mono', monospace; font-size: 10px; }

        /* HERO RIGHT: news preview */
        .vb-hero-right h4 { font-size: 12px; margin: 0 0 12px; letter-spacing: 0.08em; text-transform: uppercase; font-weight: 500; display: flex; justify-content: space-between; }
        .vb-hero-right h4 .cnt { color: var(--muted); font-family: 'JetBrains Mono', monospace; font-size: 10px; }
        .vb-hero-news-item { padding: 12px 0; border-top: 1px solid var(--line-2); cursor: pointer; }
        .vb-hero-news-item:last-child { border-bottom: 1px solid var(--line-2); }
        .vb-hero-news-item:hover { background: var(--paper-2); margin: 0 -8px; padding-left: 8px; padding-right: 8px; }
        .vb-hero-news-date { font-family: 'JetBrains Mono', monospace; font-size: 10px; color: var(--muted); letter-spacing: 0.06em; margin-bottom: 4px; display: flex; justify-content: space-between; }
        .vb-hero-news-tag { padding: 1px 6px; border: 1px solid var(--line-2); text-transform: uppercase; font-size: 9px; }
        .vb-hero-news-title { font-size: 13px; line-height: 1.35; margin: 0; letter-spacing: -0.005em; }

        /* SECTION */
        .vb-section-head {
          border-bottom: 1px solid var(--line);
          display: grid; grid-template-columns: 240px 1fr auto;
          padding: 20px 24px;
          align-items: baseline;
          background: var(--paper);
        }
        .vb-section-num { font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: 0.06em; }
        .vb-section-title { margin: 0; font-size: 32px; font-weight: 500; letter-spacing: -0.03em; }
        .vb-section-title em { font-style: italic; font-weight: 300; color: var(--muted); }
        .vb-section-lede { font-size: 12px; color: var(--muted); max-width: 480px; text-align: right; letter-spacing: 0.01em; }

        /* ABOUT */
        .vb-about {
          display: grid; grid-template-columns: 320px 1fr 320px;
          border-bottom: 1px solid var(--line);
        }
        .vb-about-col { padding: 32px 24px; border-right: 1px solid var(--line); }
        .vb-about-col:last-child { border-right: none; }
        .vb-quote {
          font-size: 28px; font-weight: 300; line-height: 1.15; letter-spacing: -0.02em;
          margin: 0 0 16px;
        }
        .vb-quote em { font-style: italic; color: var(--accent); }
        .vb-quote-author { font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--muted); }
        .vb-about-body p { font-size: 13.5px; line-height: 1.65; margin: 0 0 12px; }
        .vb-about-body strong { font-weight: 600; }
        .vb-about-side h5 { font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em; margin: 0 0 12px; font-weight: 500; }
        .vb-about-side dl { margin: 0; }
        .vb-about-side dt { font-family: 'JetBrains Mono', monospace; font-size: 10px; color: var(--muted); letter-spacing: 0.06em; margin-top: 12px; }
        .vb-about-side dd { margin: 0 0 0 0; font-size: 13px; }

        /* NEWS FULL */
        .vb-news-grid {
          display: grid; grid-template-columns: repeat(3, 1fr);
          border-bottom: 1px solid var(--line);
        }
        .vb-news-cell { border-right: 1px solid var(--line); padding: 24px; cursor: pointer; transition: background 0.15s; }
        .vb-news-cell:last-child { border-right: none; }
        .vb-news-cell:hover { background: var(--paper-2); }
        .vb-news-thumb { aspect-ratio: 5/3; overflow: hidden; margin-bottom: 16px; background: #ddd; }
        .vb-news-thumb img { width: 100%; height: 100%; object-fit: cover; filter: grayscale(0.15); transition: transform 0.5s; }
        .vb-news-cell:hover .vb-news-thumb img { transform: scale(1.03); }
        .vb-news-cell-head {
          display: flex; justify-content: space-between; align-items: center;
          margin-bottom: 10px;
        }
        .vb-news-cell-date { font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: 0.06em; }
        .vb-news-cell-tag { padding: 2px 8px; border: 1px solid var(--line); font-size: 10px; text-transform: uppercase; letter-spacing: 0.08em; }
        .vb-news-cell-title { font-size: 18px; font-weight: 500; letter-spacing: -0.02em; line-height: 1.25; margin: 0 0 6px; }
        .vb-news-cell-en { font-size: 12px; color: var(--muted); font-style: italic; }

        /* RESEARCH */
        .vb-research {
          border-bottom: 1px solid var(--line);
          display: grid; grid-template-columns: repeat(3, 1fr);
        }
        .vb-r-cell {
          border-right: 1px solid var(--line);
          padding: 0;
          position: relative;
        }
        .vb-r-cell:nth-child(3n) { border-right: none; }
        .vb-r-cell:nth-child(-n+3) { border-bottom: 1px solid var(--line); }
        .vb-r-thumb { aspect-ratio: 4/3; overflow: hidden; background: #111; }
        .vb-r-thumb img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s; }
        .vb-r-cell:hover .vb-r-thumb img { transform: scale(1.04); }
        .vb-r-meta { padding: 16px 20px 20px; }
        .vb-r-head { display: flex; justify-content: space-between; margin-bottom: 8px; font-family: 'JetBrains Mono', monospace; font-size: 10px; letter-spacing: 0.06em; color: var(--muted); text-transform: uppercase; }
        .vb-r-title { font-size: 17px; font-weight: 500; letter-spacing: -0.02em; margin: 0 0 4px; }
        .vb-r-title-ko { font-size: 12px; color: var(--muted); margin-bottom: 8px; }
        .vb-r-desc { font-size: 12.5px; color: var(--muted); line-height: 1.5; }

        /* PUBLICATIONS TABLE */
        .vb-pubs { border-bottom: 1px solid var(--line); }
        .vb-pub-head {
          display: grid; grid-template-columns: 60px 80px 1fr 200px 100px;
          padding: 10px 24px;
          border-bottom: 1px solid var(--line);
          background: var(--paper-2);
          font-family: 'JetBrains Mono', monospace; font-size: 10px;
          text-transform: uppercase; letter-spacing: 0.08em; color: var(--muted);
        }
        .vb-pub-row {
          display: grid; grid-template-columns: 60px 80px 1fr 200px 100px;
          padding: 16px 24px;
          border-bottom: 1px solid var(--line-2);
          align-items: center;
          transition: background 0.15s;
          cursor: pointer;
        }
        .vb-pub-row:last-child { border-bottom: none; }
        .vb-pub-row:hover { background: var(--paper-2); }
        .vb-pub-thumb { width: 60px; aspect-ratio: 4/3; overflow: hidden; }
        .vb-pub-thumb img { width: 100%; height: 100%; object-fit: cover; }
        .vb-pub-year { font-family: 'JetBrains Mono', monospace; font-size: 14px; }
        .vb-pub-title { font-size: 15px; font-weight: 500; letter-spacing: -0.01em; margin: 0 0 2px; }
        .vb-pub-authors { font-size: 12px; color: var(--muted); }
        .vb-pub-venue { font-size: 12px; }
        .vb-pub-tag { text-align: right; }
        .vb-pub-tag span { padding: 2px 8px; background: var(--accent); color: var(--paper); font-size: 10px; text-transform: uppercase; letter-spacing: 0.06em; }
        .vb-pub-tag span.hl { background: var(--accent-2); }

        /* MEMBERS */
        .vb-members {
          border-bottom: 1px solid var(--line);
          display: grid; grid-template-columns: repeat(6, 1fr);
        }
        .vb-m-cell { border-right: 1px solid var(--line); padding: 20px; }
        .vb-m-cell:last-child { border-right: none; }
        .vb-m-photo {
          aspect-ratio: 1/1; background: var(--paper-2); margin-bottom: 12px;
          display: flex; align-items: center; justify-content: center;
        }
        .vb-m-initial { font-size: 40px; font-weight: 500; letter-spacing: -0.03em; }
        .vb-m-cell.pi .vb-m-photo { background: var(--ink); }
        .vb-m-cell.pi .vb-m-initial { color: var(--paper); }
        .vb-m-name { font-size: 15px; font-weight: 500; margin: 0 0 2px; letter-spacing: -0.01em; }
        .vb-m-role { font-family: 'JetBrains Mono', monospace; font-size: 10px; text-transform: uppercase; letter-spacing: 0.06em; color: var(--muted); }
        .vb-m-title { font-size: 11px; color: var(--muted); margin-top: 4px; }

        /* CONTACT */
        .vb-contact {
          display: grid; grid-template-columns: 1fr 1fr;
          border-bottom: 1px solid var(--line);
        }
        .vb-contact-col { padding: 32px 24px; border-right: 1px solid var(--line); }
        .vb-contact-col:last-child { border-right: none; }
        .vb-contact-col h4 { font-size: 18px; margin: 0 0 20px; font-weight: 500; letter-spacing: -0.02em; }
        .vb-contact-row { display: grid; grid-template-columns: 100px 1fr; padding: 10px 0; border-top: 1px solid var(--line-2); font-size: 13.5px; }
        .vb-contact-row:last-child { border-bottom: 1px solid var(--line-2); }
        .vb-contact-label { font-family: 'JetBrains Mono', monospace; font-size: 10px; color: var(--muted); letter-spacing: 0.06em; text-transform: uppercase; align-self: center; }
        .vb-contact-cta {
          margin-top: 20px;
          background: var(--ink); color: var(--paper); padding: 20px;
          display: flex; justify-content: space-between; align-items: center;
        }
        .vb-contact-cta .k { font-family: 'JetBrains Mono', monospace; font-size: 10px; letter-spacing: 0.08em; opacity: 0.6; text-transform: uppercase; }
        .vb-contact-cta .v { font-size: 18px; margin-top: 4px; }

        /* FOOTER */
        .vb-footer {
          padding: 20px 24px;
          display: grid; grid-template-columns: 1fr 1fr 1fr;
          font-size: 11px; letter-spacing: 0.04em;
          color: var(--muted);
        }
        .vb-footer > div:nth-child(2) { text-align: center; }
        .vb-footer > div:nth-child(3) { text-align: right; }
      `}</style>

      {/* TOP MARQUEE */}
      <div className="vb-top vb-mono">
        <div>Immersive Media Lab · 실감미디어연구실</div>
        <div>Vol. 07 · Issue 2026.07</div>
        <div className="vb-top-right">서울과학기술대학교 · 인공지능응용학과</div>
      </div>

      {/* NAV */}
      <nav className="vb-nav">
        <div className="vb-nav-inner">
          <div className="vb-brand">
            <div className="vb-brand-en">IMMEDIA<span style={{fontWeight:300, color:'var(--muted)'}}> Lab</span></div>
            <div className="vb-brand-ko">실감미디어연구실 · Est. 2019</div>
          </div>
          <div className="vb-nav-list">
            {window.NAV_ITEMS.map((n, i) => (
              <a key={n.key} className={`vb-nav-link ${activeNav === n.key ? 'active' : ''}`} onClick={() => setActiveNav(n.key)}>
                <span className="vb-nav-num">0{i+1}</span>
                <span>{n.en}</span>
              </a>
            ))}
          </div>
          <div className="vb-nav-right">
            <span className="live-dot"></span>
            <span className="vb-mono">RECRUITING</span>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="vb-hero" data-screen-label="Hero">
        {/* LEFT: Lab info */}
        <div className="vb-hero-left">
          <div className="vb-issue-header">
            <span>§ Overview</span>
            <span className="vb-mono">01 / 06</span>
          </div>
          <h4>What we do</h4>
          <p>
            우리는 인간의 감각과 기계의 지각을 잇는 실감형 미디어 시스템을 연구합니다. VR·AR·XR, 3D 재구성, 뉴럴 렌더링, 인간중심 컴퓨팅.
          </p>
          <h4 style={{marginTop:20}}>Research Focus</h4>
          <ul className="vb-keywords">
            <li><span>3D Reconstruction</span><span className="idx">01</span></li>
            <li><span>Neural Rendering</span><span className="idx">02</span></li>
            <li><span>Immersive Interaction</span><span className="idx">03</span></li>
            <li><span>Visual Localization</span><span className="idx">04</span></li>
            <li><span>Human-Centered XR</span><span className="idx">05</span></li>
          </ul>
        </div>

        {/* CENTER: big type + 3D */}
        <div className="vb-hero-center">
          <div style={{padding:'44px 0 20px'}}>
            <div className="vb-hero-title">IMMERSIVE</div>
            <div className="vb-hero-title-2">MEDIA</div>
            <div className="vb-hero-title-3">Laboratory,</div>
            <div className="vb-hero-title-2" style={{fontStyle:'italic', color:'var(--muted)'}}>SeoulTech.</div>
          </div>

          <div className="vb-hero-3d-abs">
            <div className="vb-hero-3d-label">FIG.01 / SPHERE + POINTS</div>
            <div className="vb-hero-3d-hint">← DRAG TO ROTATE →</div>
            <Hero3D style="wireframe" accent="#e6e6e6" bg="transparent" />
          </div>

          {/* bottom stats */}
          <div className="vb-hero-bottom">
            <div>
              <div className="k">Established</div>
              <div className="vb-num" style={{fontSize:20}}>2019 · Seoul</div>
            </div>
            <div>
              <div className="k">Members</div>
              <div className="vb-num" style={{fontSize:20}}>12 / 1 PI · 4 PhD · 7 MS</div>
            </div>
            <div>
              <div className="k">Publications</div>
              <div className="vb-num" style={{fontSize:20}}>32+ / CVPR · ICCV · SIGGRAPH</div>
            </div>
          </div>
        </div>

        {/* RIGHT: News preview */}
        <div className="vb-hero-right">
          <div className="vb-issue-header">
            <span>§ Latest News</span>
            <span className="vb-mono">2026</span>
          </div>
          <h4>
            <span>Recent Updates</span>
            <span className="cnt">03</span>
          </h4>
          {news.map((n, i) => (
            <div key={i} className="vb-hero-news-item">
              <div className="vb-hero-news-date">
                <span>{n.date}</span>
                <span className="vb-hero-news-tag">{n.tag}</span>
              </div>
              <p className="vb-hero-news-title">{n.title}</p>
            </div>
          ))}
          <a style={{marginTop:16, fontSize:11, letterSpacing:'0.08em', textTransform:'uppercase', borderBottom:'1px solid var(--ink)', paddingBottom:2, alignSelf:'flex-start'}}>All News →</a>
        </div>
      </section>

      {/* ABOUT */}
      <div className="vb-section-head" data-screen-label="About">
        <div className="vb-section-num">§ 01 — ABOUT</div>
        <h2 className="vb-section-title">연구실 <em>소개</em> / Overview</h2>
        <div className="vb-section-lede">인간의 감각과 기계의 지각을 잇는 새로운 미디어 경험을 설계합니다.</div>
      </div>
      <section className="vb-about">
        <div className="vb-about-col vb-about-side">
          <h5>Vision</h5>
          <blockquote className="vb-quote">
            "Everything you can <em>imagine</em> is real."
          </blockquote>
          <div className="vb-quote-author">— Pablo Picasso</div>
        </div>
        <div className="vb-about-col vb-about-body">
          <p>
            실감미디어연구실(Immersive Media Lab)은 서울과학기술대학교 인공지능응용학과 소속의 연구실로, 몰입형 미디어 기술의 이론과 응용을 함께 탐구합니다.
          </p>
          <p>
            우리는 세 가지 축을 중심으로 연구합니다. <strong>공간의 재구성 —</strong> 실세계를 3D로 옮기는 방법. <strong>지각의 확장 —</strong> 인간의 감각을 넘어서는 인터페이스. <strong>경험의 설계 —</strong> 기술이 사람에게 남기는 흔적.
          </p>
          <p>
            학술적 엄밀함을 유지하면서도, 산업·문화유산·교육 등 실제 문제와 연결되는 연구를 지향합니다.
          </p>
        </div>
        <div className="vb-about-col vb-about-side">
          <h5>At a Glance</h5>
          <dl>
            <dt>AFFILIATION</dt>
            <dd>서울과학기술대학교 · Dept. of Applied AI</dd>
            <dt>ADVISOR</dt>
            <dd>정희민 부교수 · Heemin Jung, Ph.D.</dd>
            <dt>LOCATION</dt>
            <dd>서울시 노원구 공릉로 232</dd>
            <dt>CONTACT</dt>
            <dd>hmjung@seoultech.ac.kr</dd>
          </dl>
        </div>
      </section>

      {/* NEWS */}
      <div className="vb-section-head" data-screen-label="News">
        <div className="vb-section-num">§ 02 — NEWS</div>
        <h2 className="vb-section-title">최근 <em>소식</em> / Latest</h2>
        <div className="vb-section-lede">연구 성과, 학회 발표, 수상, 대학원생 모집 소식.</div>
      </div>
      <section className="vb-news-grid">
        {news.map((n, i) => (
          <article key={i} className="vb-news-cell">
            <div className="vb-news-cell-head">
              <span className="vb-news-cell-date">{n.date}</span>
              <span className="vb-news-cell-tag">{n.tag}</span>
            </div>
            <div className="vb-news-thumb">
              <img src={n.image} alt="" />
            </div>
            <h3 className="vb-news-cell-title">{n.title}</h3>
            <div className="vb-news-cell-en">{n.titleEn}</div>
          </article>
        ))}
      </section>

      {/* RESEARCH */}
      <div className="vb-section-head" data-screen-label="Research">
        <div className="vb-section-num">§ 03 — RESEARCH</div>
        <h2 className="vb-section-title">진행 중인 <em>연구</em> / Projects</h2>
        <div className="vb-section-lede">지금 몰두하고 있는 주제들. 각 프로젝트는 논문과 오픈소스로 이어집니다.</div>
      </div>
      <section className="vb-research">
        {projects.slice(0,6).map((p, i) => (
          <div key={p.id} className="vb-r-cell">
            <div className="vb-r-thumb"><img src={p.image} alt={p.title} /></div>
            <div className="vb-r-meta">
              <div className="vb-r-head">
                <span>{p.tag}</span>
                <span>{p.year}</span>
              </div>
              <h3 className="vb-r-title">{p.title}</h3>
              <div className="vb-r-title-ko">{p.titleKo}</div>
              <div className="vb-r-desc">{p.desc}</div>
            </div>
          </div>
        ))}
        {/* 6번째 셀 채우기 - CTA */}
        <div className="vb-r-cell" style={{background:'var(--ink)', color:'var(--paper)', display:'flex', flexDirection:'column', justifyContent:'flex-end', padding:'32px 24px'}}>
          <div className="vb-mono" style={{opacity:0.5, marginBottom:12, textTransform:'uppercase', letterSpacing:'0.1em'}}>See More</div>
          <h3 style={{fontSize:24, fontWeight:500, letterSpacing:'-0.02em', margin:0, lineHeight:1.15}}>연구 아카이브<br/>전체 보기</h3>
          <div style={{marginTop:16, fontSize:12, opacity:0.7}}>Publications, code, and datasets.</div>
          <div style={{marginTop:24, fontSize:12, textTransform:'uppercase', letterSpacing:'0.1em', borderTop:'1px solid rgba(255,255,255,0.2)', paddingTop:16}}>Open Archive →</div>
        </div>
      </section>

      {/* PUBLICATIONS */}
      <div className="vb-section-head" data-screen-label="Publications">
        <div className="vb-section-num">§ 04 — PUBLICATIONS</div>
        <h2 className="vb-section-title">최근 <em>논문</em> / Papers</h2>
        <div className="vb-section-lede">국제 학회·저널에 발표된 최근 논문 5편.</div>
      </div>
      <section className="vb-pubs">
        <div className="vb-pub-head">
          <div></div>
          <div>Year</div>
          <div>Title · Authors</div>
          <div>Venue</div>
          <div style={{textAlign:'right'}}>Tag</div>
        </div>
        {pubs.map((p, i) => (
          <div key={i} className="vb-pub-row">
            <div className="vb-pub-thumb"><img src={p.image} alt="" /></div>
            <div className="vb-pub-year">{p.year}</div>
            <div>
              <h4 className="vb-pub-title">{p.title}</h4>
              <div className="vb-pub-authors">{p.authors}</div>
            </div>
            <div className="vb-pub-venue">In Proc. of <strong>{p.venue}</strong></div>
            <div className="vb-pub-tag">
              {p.tag && <span className={p.tag === 'highlight' ? 'hl' : ''}>{p.tag}</span>}
            </div>
          </div>
        ))}
      </section>

      {/* MEMBERS */}
      <div className="vb-section-head" data-screen-label="Members">
        <div className="vb-section-num">§ 05 — MEMBERS</div>
        <h2 className="vb-section-title"><em>구성원</em> / Team</h2>
        <div className="vb-section-lede">1 PI · 4 Ph.D · 7 M.S.</div>
      </div>
      <section className="vb-members">
        {members.map((m, i) => (
          <div key={i} className={`vb-m-cell ${i===0 ? 'pi' : ''}`}>
            <div className="vb-m-photo">
              <span className="vb-m-initial">{m.initial}</span>
            </div>
            <h4 className="vb-m-name">{m.name}</h4>
            <div className="vb-m-role">{m.role}</div>
            <div className="vb-m-title">{m.title}</div>
          </div>
        ))}
      </section>

      {/* CONTACT */}
      <div className="vb-section-head" data-screen-label="Contact">
        <div className="vb-section-num">§ 06 — CONTACT</div>
        <h2 className="vb-section-title">연락 · 지원 <em>안내</em></h2>
        <div className="vb-section-lede">Prospective students & collaboration inquiries welcome.</div>
      </div>
      <section className="vb-contact">
        <div className="vb-contact-col">
          <h4>Contact</h4>
          <div className="vb-contact-row"><div className="vb-contact-label">Address</div><div>서울시 노원구 공릉로 232<br/>서울과학기술대학교 프론티어관 7층</div></div>
          <div className="vb-contact-row"><div className="vb-contact-label">Advisor</div><div>정희민 부교수 · Dept. of Applied AI</div></div>
          <div className="vb-contact-row"><div className="vb-contact-label">Email</div><div>hmjung@seoultech.ac.kr</div></div>
          <div className="vb-contact-row"><div className="vb-contact-label">Phone</div><div>02-970-XXXX</div></div>
        </div>
        <div className="vb-contact-col">
          <h4>Prospective Students</h4>
          <p style={{fontSize:13.5, color:'var(--muted)', lineHeight:1.65, margin:0}}>
            2026학년도 후기 대학원생을 모집합니다.<br/>
            컴퓨터 비전, 3D 그래픽스, XR 인터랙션에 관심 있는 학부생 및 석사 지원자를 환영합니다.
            지원 전 이메일로 관심 주제와 함께 CV를 보내주세요.
          </p>
          <div className="vb-contact-cta">
            <div>
              <div className="k">WRITE TO ADVISOR</div>
              <div className="v">hmjung@seoultech.ac.kr</div>
            </div>
            <div style={{fontSize:24}}>→</div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="vb-footer vb-mono">
        <div>© 2026 IMMEDIA LAB · SEOULTECH</div>
        <div>UPDATED 2026.06.24</div>
        <div>VER. 2026.07 — MINIMAL</div>
      </footer>
    </div>
  );
};

window.VariantB = VariantB;
