// Home — Compact Editorial (English-first)
// The Interactive Contents block now supports carousel-like variants
// (currently: "room point cloud" and "lab logo point cloud").

const { useState: hm_useState } = React;

function Home() {
  const info = window.LAB_INFO;
  const news = (window.NEWS || []).slice(0, 3);

  // Publications on Home = curated list (not automatically the latest).
  const featuredIds = window.PUBLICATIONS_HOME_FEATURED || [];
  const pubs = featuredIds
    .map(id => (window.PUBLICATIONS || []).find(p => p.id === id))
    .filter(Boolean);

  // Ongoing research: pick the first 3 in equal-size cells.
  const projects = (window.PROJECTS || []).slice(0, 3);

  // Interactive contents carousel — two scenes:
  //   0: "The Room" — inside-of-a-box point cloud, references our capture rigs
  //   1: "IM Monogram" — our lab mark rendered as a point cloud (per user request)
  const CONTENTS = [
    { key: 'room',  label: 'FIG.01 — Point Cloud · Capture Volume', style: 'points', caption: 'A room reconstructed as a sparse point cloud — our capture volume.' },
    { key: 'logo',  label: 'FIG.02 — Point Cloud · IMMEDIA Mark',   style: 'logo',   caption: 'The lab mark rendered as a 3D point cloud.' }
  ];
  const [contentIdx, setContentIdx] = hm_useState(0);
  const cur = CONTENTS[contentIdx];

  return (
    <div className="hm-root">
      <style>{`
        /* HERO */
        .hm-hero { padding: 56px 0 72px; }
        .hm-issue-line {
          padding-bottom: 14px; margin-bottom: 40px;
          border-bottom: 1px solid var(--ink);
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px; letter-spacing: 0.06em; text-transform: uppercase;
          display: flex; justify-content: space-between; gap: 12px; flex-wrap: wrap;
          color: var(--muted);
        }
        .hm-issue-line .right { color: var(--ink); }
        .hm-hero-grid { 
          display: grid; grid-template-columns: 1.4fr 1fr; gap: 56px; align-items: stretch; 
          height: 340px; 
        }        
        .hm-hero-copy { display: flex; flex-direction: column; justify-content: center; }
        .hm-hero-title {
          font-family: 'Fraunces', serif; font-weight: 400;
          font-size: clamp(48px, 6.2vw, 92px); line-height: 0.95; letter-spacing: -0.03em;
          margin: 0 0 28px;
        }
        .hm-hero-title em { font-style: italic; font-weight: 300; color: var(--accent); }
        .hm-hero-lead { font-size: 16.5px; line-height: 1.6; color: var(--ink); max-width: 46ch; margin: 0 0 28px; }
        .hm-hero-meta { display: flex; gap: 20px; align-items: center; flex-wrap: wrap; }

        /* Interactive contents viewer */
        .hm-hero-3d {
          position: relative;
          background: linear-gradient(180deg, #10121a 0%, #050810 100%);
          border-radius: 4px;
          overflow: hidden;
          height: 340px; /* 100% 대신 명시적으로 340px 고정 */
          min-height: 340px; /* 처음부터 무조건 340px로 렌더링되게 강제 */
        }
        .hm-hero-3d-label {
          position: absolute; top: 16px; left: 16px; z-index: 2;
          color: rgba(246,244,239,0.65); pointer-events: none;
        }
        .hm-hero-3d-hint {
          position: absolute; top: 16px; right: 16px; z-index: 2;
          color: rgba(246,244,239,0.55); pointer-events: none;
          display: flex; align-items: center; gap: 8px;
        }
        .hm-hero-3d-hint .dot { width: 6px; height: 6px; background: rgba(246,244,239,0.4); border-radius: 50%; animation: hmBlink 1.6s infinite; }
        @keyframes hmBlink { 0%,100% { opacity: 0.3; } 50% { opacity: 1; } }

        .hm-hero-3d-caption {
          position: absolute; bottom: 56px; left: 20px; right: 20px; z-index: 2;
          color: rgba(246,244,239,0.75); font-size: 12.5px;
          font-family: 'Pretendard Variable', sans-serif;
          pointer-events: none;
        }

        /* Carousel dots */
        .hm-dots {
          position: absolute; bottom: 18px; left: 0; right: 0; z-index: 3;
          display: flex; justify-content: center; gap: 10px;
        }
        .hm-dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: rgba(246,244,239,0.25);
          border: none; cursor: pointer; padding: 0;
          transition: background 0.2s, transform 0.2s;
        }
        .hm-dot:hover { background: rgba(246,244,239,0.55); }
        .hm-dot.active { background: rgba(246,244,239,0.95); transform: scale(1.15); }
        .hm-dots-labels {
          position: absolute; bottom: 40px; left: 0; right: 0; z-index: 3;
          text-align: center;
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase;
          color: rgba(246,244,239,0.55);
        }

        /* SNAPSHOT BAR */  
        /*
        .hm-snapshot {
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 0;
          padding: 32px 0;
          border-top: 1px solid rgba(22,23,27,0.15);
          border-bottom: 1px solid rgba(22,23,27,0.15);
        }
        .hm-snap-cell { padding: 4px 20px; border-left: 1px solid rgba(22,23,27,0.12); }
        .hm-snap-cell:first-child { border-left: none; padding-left: 0; }
        .hm-snap-label { color: var(--muted); margin-bottom: 8px; }
        .hm-snap-value { font-family: 'Fraunces', serif; font-size: 26px; letter-spacing: -0.015em; line-height: 1.2; }
        .hm-snap-value em { font-style: italic; color: var(--accent); font-weight: 400; }
        */

        /* Latest News */
        .hm-news-list { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; padding: 8px 0 32px; }
        .hm-news-item { cursor: pointer; display: block; color: inherit; }
        .hm-news-thumb { aspect-ratio: 4/3; overflow: hidden; background: #ddd; border-radius: 2px; margin-bottom: 16px; }
        .hm-news-thumb img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s; filter: saturate(0.85); }
        .hm-news-item:hover .hm-news-thumb img { transform: scale(1.03); filter: saturate(1); }
        .hm-news-meta { display: flex; gap: 10px; align-items: center; margin-bottom: 8px; }
        .hm-news-date { color: var(--muted); }
        .hm-news-tag { padding: 2px 8px; border: 1px solid rgba(22,23,27,0.2); border-radius: 2px; font-size: 10px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--ink); }
        .hm-news-title { font-family: 'Fraunces', serif; font-size: 19px; line-height: 1.3; letter-spacing: -0.015em; font-weight: 400; margin: 0 0 6px; }
        .hm-news-excerpt { color: var(--muted); font-size: 13.5px; line-height: 1.5; }

        /* Latest Publications — thumbnail cards */
        .hm-pubs-list { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; padding: 8px 0 32px; }
        .hm-pub-card {
          display: block; color: inherit; cursor: pointer;
          border: 1px solid rgba(22,23,27,0.1);
          border-radius: 2px;
          overflow: hidden;
          background: var(--paper);
          transition: border-color 0.2s, transform 0.3s;
        }
        .hm-pub-card:hover { border-color: rgba(22,23,27,0.35); transform: translateY(-2px); }
        .hm-pub-thumb { 
          aspect-ratio: 16/10; overflow: hidden; position: relative;
          background: #ffffff;
          display: flex; align-items: center; justify-content: center;
          border-bottom: 1px solid rgba(22,23,27,0.05); /* 카드 내용과 분리선 역할 */
        }
        .hm-pub-thumb img { 
          width: 100%; height: 100%; 
          object-fit: contain; 
          filter: saturate(1) brightness(1); transition: transform 0.6s; 
        }
        .hm-pub-card:hover .hm-pub-thumb img { transform: scale(1.04); filter: saturate(1) brightness(1); }
        .hm-pub-badge {
          position: absolute; top: 12px; left: 12px;
          padding: 3px 8px; background: var(--accent); color: var(--paper);
          font-size: 10px; letter-spacing: 0.08em; text-transform: uppercase;
          border-radius: 2px;
        }
        .hm-pub-badge.hl { background: var(--accent-2); }
        .hm-pub-body { padding: 20px 20px 22px; }
        .hm-pub-venue-line { display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; }
        .hm-pub-venue { color: var(--muted); }
        .hm-pub-year { font-family: 'Fraunces', serif; font-size: 16px; color: var(--muted); }
        .hm-pub-title { font-family: 'Fraunces', serif; font-size: 18px; line-height: 1.3; letter-spacing: -0.015em; margin: 0 0 6px; font-weight: 400; }
        .hm-pub-authors { font-size: 12.5px; color: var(--muted); }

        /* Recruit banner */
        .hm-recruit {
          margin: 96px 0 20px;
          display: grid; grid-template-columns: 1.5fr 1fr; gap: 40px;
          padding: 44px 48px;
          background: var(--ink);
          color: var(--paper);
          border-radius: 3px;
          position: relative;
          overflow: hidden;
        }
        .hm-recruit::before {
          content: ''; position: absolute; right: -40px; top: -80px;
          width: 320px; height: 320px;
          background: radial-gradient(circle, rgba(74,127,188,0.35) 0%, transparent 65%);
          pointer-events: none;
        }
        .hm-recruit-mono { color: rgba(246,244,239,0.55); margin-bottom: 16px; }
        .hm-recruit-title { font-family: 'Fraunces', serif; font-weight: 400; font-size: clamp(28px, 3.4vw, 40px); line-height: 1.1; letter-spacing: -0.02em; margin: 0 0 12px; }
        .hm-recruit-title em { font-style: italic; color: #a9c5ea; font-weight: 300; }
        .hm-recruit-lead { color: rgba(246,244,239,0.75); font-size: 15px; line-height: 1.6; margin: 0 0 20px; max-width: 46ch; }
        .hm-recruit-cta {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 12px 20px; background: var(--paper); color: var(--ink); text-decoration: none;
          border-radius: 2px; font-size: 13px;
        }
        .hm-recruit-cta:hover { background: #fff; }
        .hm-recruit-right { display: flex; flex-direction: column; justify-content: center; gap: 12px; position: relative; z-index: 1; }
        .hm-recruit-item {
          display: grid; grid-template-columns: 20px 1fr;
          gap: 12px; align-items: flex-start;
          padding: 12px 0; border-top: 1px solid rgba(246,244,239,0.15);
          font-size: 13.5px;
        }
        .hm-recruit-item:first-child { border-top: none; }
        .hm-recruit-item .num { font-family: 'Fraunces', serif; color: #a9c5ea; }

        /* About */
        .hm-about-block { padding: 32px 0 16px; display: grid; grid-template-columns: 1fr 1.2fr; gap: 80px; }
        .hm-quote { font-family: 'Fraunces', serif; font-size: 30px; font-style: italic; line-height: 1.2; letter-spacing: -0.015em; margin: 0 0 12px; font-weight: 300; }
        .hm-quote-author { color: var(--muted); font-size: 13px; }
        .hm-keyword-list { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 28px; }
        .hm-keyword { padding: 5px 12px; border: 1px solid rgba(22,23,27,0.25); border-radius: 999px; font-size: 12px; }
        .hm-about-body { font-size: 16px; line-height: 1.7; }
        .hm-about-cta { margin-top: 24px; display: flex; gap: 16px; }

         /* 👇 Research Areas (연구 분야) 스타일 👇 */
        .hm-areas-grid { 
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; padding: 16px 0 40px; 
        }
        .hm-area-card {
          padding: 32px 24px;
          border: 1px solid rgba(22,23,27,0.12);
          border-radius: 3px;
          background: var(--paper);
          transition: transform 0.3s, box-shadow 0.3s;
          display: flex; flex-direction: column; gap: 16px;
        }
        .hm-area-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(0,0,0,0.05);
        }
        .hm-area-thumb {
          width: 100%;
          aspect-ratio: 16/10;
          border-radius: 2px;
          background: #ffffff;
          overflow: hidden;
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(22,23,27,0.05);
        }
        .hm-area-thumb img {
          width: 100%;
          height: 100%;
          object-fit: contain; /* 이미지가 잘리지 않게 설정 */
        }
        
        .hm-area-title {
          font-family: 'Fraunces', serif;
          font-size: 24px; font-weight: 400; letter-spacing: -0.015em;
          margin: 0; line-height: 1.2;
        }
        .hm-area-desc {
          font-size: 14.5px; line-height: 1.6; color: var(--muted); margin: 0;
        }

        @media (max-width: 900px) {
          .hm-hero-grid { grid-template-columns: 1fr; }
          .hm-hero-3d { min-height: 320px; }
          .hm-snapshot { grid-template-columns: repeat(2, 1fr); }
          .hm-snap-cell { border-left: none; padding: 12px 0; border-top: 1px solid rgba(22,23,27,0.12); }
          .hm-snap-cell:first-child, .hm-snap-cell:nth-child(2) { border-top: none; padding-top: 0; }
          .hm-news-list, .hm-pubs-list { grid-template-columns: 1fr; }
          .hm-recruit { grid-template-columns: 1fr; padding: 32px 24px; }
          .hm-about-block { grid-template-columns: 1fr; gap: 32px; }
          .hm-research-strip { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* HERO */}
      <section className="im-section hm-hero" data-screen-label="Hero">
        <div className="hm-issue-line">
          <span className="right">Immersive Media Lab · IMMEDIA</span>
          <span>{info.affiliationEn} · {info.departmentEn}</span>
        </div>

        <div className="hm-hero-grid">
          <div className="hm-hero-copy">
            <h1 className="hm-hero-title">
              Where <em>imagination</em>
              <br />meets computation.
            </h1>
            <p className="hm-hero-lead">
              VR · AR · XR, 3D reconstruction, and neural rendering. We study
              immersive media at the intersection of human perception and
              machine understanding.
            </p>
            <div className="hm-hero-meta">
              <a className="im-cta" href="research.html">
                Explore research <span>→</span>
              </a>
              <a className="im-cta-ghost" href="contact.html">Join the lab</a>
            </div>
          </div>

          {/* Interactive contents viewer — carousel */}
          <div className="hm-hero-3d" data-screen-label="Interactive Contents">
            <span className="hm-hero-3d-label im-mono">{cur.label}</span>
            <span className="hm-hero-3d-hint im-mono">
              <span className="dot"></span>
              Drag to rotate
            </span>

            {/* re-key so hero3d fully remounts on switch */}
            <Hero3D key={cur.key} style={cur.style} accent="#4a7fbc" bg="transparent" />

            <div className="hm-hero-3d-caption">{cur.caption}</div>
            <div className="hm-dots-labels">
              {String(contentIdx + 1).padStart(2, '0')} / {String(CONTENTS.length).padStart(2, '0')}
            </div>
            <div className="hm-dots">
              {CONTENTS.map((c, i) => (
                <button
                  key={c.key}
                  className={`hm-dot ${i === contentIdx ? 'active' : ''}`}
                  onClick={() => setContentIdx(i)}
                  aria-label={c.label}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Snapshot */}
        {/* 
        <div className="hm-snapshot">
          <div className="hm-snap-cell">
            <div className="hm-snap-label im-mono">Latest Venue</div>
            <div className="hm-snap-value"><em>{pubs[0]?.venue || '—'}</em> · {pubs[0]?.year || ''}</div>
          </div>
          <div className="hm-snap-cell">
            <div className="hm-snap-label im-mono">Publications</div>
            <div className="hm-snap-value">{(window.PUBLICATIONS || []).length}<span style={{color:'var(--muted)'}}> papers</span></div>
          </div>
          <div className="hm-snap-cell">
            <div className="hm-snap-label im-mono">Active Projects</div>
            <div className="hm-snap-value">{(window.PROJECTS || []).filter(p => p.ongoing).length}<span style={{color:'var(--muted)'}}> ongoing</span></div>
          </div>
          <div className="hm-snap-cell">
            <div className="hm-snap-label im-mono">Members</div>
            <div className="hm-snap-value">{(window.MEMBERS || []).length}<span style={{color:'var(--muted)'}}> researchers</span></div>
          </div>
        </div>
        */}
      </section>

      {/* Latest News */}
      <section className="im-section" data-screen-label="Latest News">
        <div className="im-section-head">
          <span className="im-mono im-section-mono">§ 01 — Latest News</span>
          <h2 className="im-section-title">Latest <em>news</em></h2>
          <a className="im-section-link" href="news.html">All news →</a>
        </div>
        <div className="hm-news-list">
          {news.map((n, i) => (
            <a key={i} className="hm-news-item" href="news.html">
              <div className="hm-news-thumb"><img src={n.image} alt="" /></div>
              <div className="hm-news-meta">
                <span className="im-mono hm-news-date">{n.date}</span>
                <span className="im-mono hm-news-tag">{n.tag}</span>
              </div>
              <h3 className="hm-news-title">{n.title}</h3>
              <p className="hm-news-excerpt">{n.excerpt}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Featured Publications */}
      <section className="im-section" data-screen-label="Featured Publications">
        <div className="im-section-head">
          <span className="im-mono im-section-mono">§ 02 — Featured Publications</span>
          <h2 className="im-section-title">Latest <em>papers</em></h2>
          <a className="im-section-link" href="publications.html">All publications →</a>
        </div>
        <div className="hm-pubs-list">
          {pubs.map((p, i) => (
            <a key={i} className="hm-pub-card" href={p.paper || 'publications.html'}
               target={p.paper ? '_blank' : undefined}
               rel={p.paper ? 'noopener' : undefined}>
              <div className="hm-pub-thumb">
                <img src={p.image} alt="" />
                {p.tag && <span className={`im-mono hm-pub-badge ${p.tag === 'highlight' ? 'hl' : ''}`}>{p.tag}</span>}
              </div>
              <div className="hm-pub-body">
                <div className="hm-pub-venue-line">
                  <span className="im-mono hm-pub-venue">{p.venue}</span>
                  <span className="hm-pub-year">{p.year}</span>
                </div>
                <h3 className="hm-pub-title">{p.title}</h3>
                <div className="hm-pub-authors">{p.authors}</div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Research Areas (연구 분야) */}
      <section className="im-section" data-screen-label="Research Areas">
        <div className="im-section-head">
          <div className="im-mono im-section-mono">§ 03 — Research</div>
          <h2 className="im-section-title">Research <em> areas</em></h2>
          <a className="im-section-link" href="research.html">View projects →</a>
        </div>
        
        <div className="hm-areas-grid">
          
          {/* 주제 1: 3D 재구성 & 비전 */}
          <div className="hm-area-card">
            {/* 👇 수정된 부분 👇 */}
            <div className="hm-area-thumb">
              <img src="assets/project-slam.jpg" alt="3D Vision & Reconstruction" />
            </div>
            <h3 className="hm-area-title">3D Vision &<br/>Reconstruction</h3>
            <p className="hm-area-desc">
              단일/다중 카메라 및 360도 영상을 활용하여 물리적 세계를 정밀하게 디지털 공간으로 복제하고 재구성하는 기술을 연구합니다.
            </p>
          </div>

          {/* 주제 2: 뉴럴 렌더링 */}
          <div className="hm-area-card">
            {/* 👇 수정된 부분 👇 */}
            <div className="hm-area-thumb">
              <img src="assets/project-gaussian.jpg" alt="Neural Rendering & Light Fields" />
            </div>
            <h3 className="hm-area-title">Neural Rendering &<br/>Light Fields</h3>
            <p className="hm-area-desc">
              NeRF, Gaussian Splatting 등 최신 AI 기술을 결합하여 시공간을 초월한 고품질의 자유 시점(Free-viewpoint) 뷰 합성 기술을 연구합니다.
            </p>
          </div>

          {/* 주제 3: AR/VR 응용 */}
          <div className="hm-area-card">
            {/* 👇 수정된 부분 👇 */}
            <div className="hm-area-thumb">
              <img src="assets/project-ar.jpg" alt="Immersive Media & XR Systems" />
            </div>
            <h3 className="hm-area-title">Immersive Media &<br/>XR Systems</h3>
            <p className="hm-area-desc">
              가상과 현실을 잇는 지속 가능하고 몰입감 넘치는 메타버스 콘텐츠 처리 시스템 및 인간 중심의 상호작용 인터페이스를 연구합니다.
            </p>
          </div>

        </div>
      </section>

      {/* Recruit */}
      <section className="im-section" data-screen-label="Recruit">
        <div className="hm-recruit">
          <div>
            <div className="hm-recruit-mono im-mono">■ Recruiting</div>
            <h3 className="hm-recruit-title">
              Looking for graduate students to <em>build</em> immersive media with us.
            </h3>
            <p className="hm-recruit-lead">
              We welcome students interested in computer vision, 3D graphics,
              VR/AR, and neural rendering. Applications are accepted year-round —
              send your CV and research interests by email.
            </p>
            <a className="hm-recruit-cta" href="contact.html">How to apply <span>→</span></a>
          </div>
          <div className="hm-recruit-right">
            <div className="hm-recruit-item"><span className="num im-mono">01</span><span>MS, PhD, and integrated MS/PhD candidates</span></div>
            <div className="hm-recruit-item"><span className="num im-mono">02</span><span>Undergraduate interns (Vision · Graphics)</span></div>
            <div className="hm-recruit-item"><span className="num im-mono">03</span><span>Visiting researchers and collaborators</span></div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="im-section" data-screen-label="About">
        <div className="im-section-head">
          <span className="im-mono im-section-mono">§ 04 — About</span>
          <h2 className="im-section-title">About the <em>lab</em></h2>
          <a className="im-section-link" href="members.html">Meet the team →</a>
        </div>
        <div className="hm-about-block">
          <div>
            <blockquote className="hm-quote">
              "Everything you can imagine<br/>is real."
            </blockquote>
            <div className="hm-quote-author">— Pablo Picasso</div>
            <div className="hm-keyword-list">
              {info.keywords.map((k, i) => <span key={i} className="hm-keyword">{k}</span>)}
            </div>
          </div>
          <div className="hm-about-body">
            <p>{info.aboutEn}</p>
            <div className="hm-about-cta">
              <a className="im-cta-ghost" href="research.html">Research areas</a>
              <a className="im-cta-ghost" href="contact.html">Get in touch</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

window.Home = Home;
