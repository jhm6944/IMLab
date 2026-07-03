// 시안 A - Editorial Serif
// 학술 저널 스타일. Fraunces 세리프 헤드라인 + Pretendard 본문
// 넓은 여백, 다크 잉크 온 오프화이트

const VariantA = () => {
  const [activeNav, setActiveNav] = React.useState('home');
  const news = window.NEWS;
  const info = window.LAB_INFO;
  const projects = window.PROJECTS;
  const pubs = window.PUBLICATIONS;
  const members = window.MEMBERS;

  return (
    <div className="va-root">
      <style>{`
        .va-root {
          --ink: #16171b;
          --paper: #f6f4ef;
          --paper-2: #ede9de;
          --rule: #16171b;
          --muted: #6b6a63;
          --accent: #1B365D;
          --accent-2: #7A2E3B;
          background: var(--paper);
          color: var(--ink);
          font-family: 'Pretendard', 'Inter', system-ui, sans-serif;
          font-weight: 350;
          font-size: 15px;
          line-height: 1.6;
          min-height: 100%;
          letter-spacing: -0.005em;
        }
        .va-serif { font-family: 'Fraunces', 'Instrument Serif', 'Noto Serif KR', serif; font-weight: 400; letter-spacing: -0.02em; }
        .va-mono { font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 11px; letter-spacing: 0.06em; text-transform: uppercase; }
        .va-num { font-family: 'Fraunces', serif; font-feature-settings: "tnum" 1; font-variant-numeric: tabular-nums; }

        .va-nav {
          position: sticky; top: 0; z-index: 50;
          background: color-mix(in oklab, var(--paper) 92%, transparent);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(22,23,27,0.08);
        }
        .va-nav-inner {
          max-width: 1360px; margin: 0 auto;
          padding: 18px 40px;
          display: grid; grid-template-columns: auto 1fr auto; align-items: center; gap: 40px;
        }
        .va-brand {
          display: flex; align-items: baseline; gap: 12px;
        }
        .va-brand-mark { width: 22px; height: 22px; border: 1.5px solid var(--ink); border-radius: 50%; display: inline-block; align-self: center; position: relative; }
        .va-brand-mark::after { content:''; position:absolute; inset: 5px; background: var(--ink); border-radius: 50%; }
        .va-brand-name { font-family: 'Fraunces', serif; font-size: 20px; font-weight: 500; letter-spacing: -0.02em; }
        .va-brand-sub { font-size: 11px; color: var(--muted); letter-spacing: 0.1em; text-transform: uppercase; }
        .va-nav-list { display: flex; gap: 4px; justify-content: center; }
        .va-nav-link {
          padding: 8px 14px; border-radius: 999px;
          font-size: 13.5px; color: var(--ink); cursor: pointer;
          transition: background 0.2s;
        }
        .va-nav-link:hover { background: rgba(22,23,27,0.05); }
        .va-nav-link.active { background: var(--ink); color: var(--paper); }
        .va-nav-right { display: flex; align-items: center; gap: 16px; font-size: 12px; color: var(--muted); }
        .va-nav-locale { padding: 4px 10px; border: 1px solid rgba(22,23,27,0.15); border-radius: 999px; }

        .va-section { max-width: 1360px; margin: 0 auto; padding: 0 40px; }
        .va-rule { height: 1px; background: rgba(22,23,27,0.15); margin: 0; }
        .va-rule-thick { height: 1px; background: var(--ink); }

        /* HERO */
        .va-hero { padding: 72px 0 88px; position: relative; }
        .va-hero-grid { display: grid; grid-template-columns: 1.35fr 1fr; gap: 60px; align-items: end; }
        .va-issue-line {
          display: flex; justify-content: space-between; align-items: baseline;
          padding-bottom: 14px; margin-bottom: 40px;
          border-bottom: 1px solid var(--ink);
        }
        .va-issue-line .va-mono { color: var(--ink); }
        .va-hero-title { font-family: 'Fraunces', serif; font-weight: 400; font-size: clamp(56px, 8.5vw, 128px); line-height: 0.92; letter-spacing: -0.035em; margin: 0 0 32px; }
        .va-hero-title em { font-style: italic; font-weight: 300; color: var(--accent); }
        .va-hero-title .sm { font-size: 0.4em; display: block; color: var(--muted); font-style: italic; font-weight: 300; margin-top: 18px; letter-spacing: -0.02em; }
        .va-hero-lead { font-size: 17px; line-height: 1.5; color: var(--ink); max-width: 42ch; margin-bottom: 28px; }
        .va-hero-meta { display: flex; gap: 24px; align-items: center; }
        .va-badge { padding: 5px 12px; border: 1px solid var(--ink); border-radius: 999px; font-size: 11px; letter-spacing: 0.06em; text-transform: uppercase; }
        .va-cta { padding: 12px 20px; background: var(--ink); color: var(--paper); font-size: 13px; text-decoration: none; display: inline-flex; align-items: center; gap: 10px; border-radius: 2px; }
        .va-cta:hover { background: var(--accent); }

        .va-hero-3d {
          height: 460px; position: relative;
          background: linear-gradient(180deg, #10121a 0%, #050810 100%);
          border-radius: 4px;
          overflow: hidden;
        }
        .va-hero-3d-label {
          position: absolute; top: 16px; left: 16px; z-index: 2;
          color: rgba(246,244,239,0.55); pointer-events: none;
        }
        .va-hero-3d-hint {
          position: absolute; bottom: 16px; right: 16px; z-index: 2;
          color: rgba(246,244,239,0.55); pointer-events: none;
          display: flex; align-items: center; gap: 8px;
        }
        .va-hero-3d-hint .dot { width: 6px; height: 6px; background: rgba(246,244,239,0.4); border-radius: 50%; animation: vaBlink 1.6s infinite; }
        @keyframes vaBlink { 0%,100% { opacity: 0.3; } 50% { opacity: 1; } }

        .va-hero-bottom {
          margin-top: 88px;
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 40px;
          padding-top: 28px; border-top: 1px solid rgba(22,23,27,0.15);
        }
        .va-stat-label { color: var(--muted); margin-bottom: 8px; }
        .va-stat-val { font-family: 'Fraunces', serif; font-size: 32px; font-weight: 400; letter-spacing: -0.02em; }
        .va-stat-note { font-size: 12px; color: var(--muted); margin-top: 4px; }

        /* SECTION HEADER */
        .va-section-head {
          padding: 100px 0 40px;
          display: grid; grid-template-columns: 1fr 2fr; gap: 60px;
          align-items: end;
        }
        .va-section-mono { color: var(--muted); margin-bottom: 12px; display: block; }
        .va-section-title { font-family: 'Fraunces', serif; font-size: clamp(36px, 4vw, 56px); font-weight: 400; line-height: 1.05; letter-spacing: -0.02em; margin: 0; }
        .va-section-title em { font-style: italic; color: var(--accent); font-weight: 300; }
        .va-section-lede { font-size: 15px; color: var(--muted); max-width: 52ch; }
        .va-section-lede a { color: var(--ink); border-bottom: 1px solid var(--ink); }

        /* ABOUT */
        .va-about { padding: 56px 0 40px; display: grid; grid-template-columns: 1fr 1fr; gap: 80px; }
        .va-quote { font-family: 'Fraunces', serif; font-size: 30px; font-style: italic; line-height: 1.25; letter-spacing: -0.015em; color: var(--ink); margin: 0 0 20px; font-weight: 300; }
        .va-quote-author { color: var(--muted); font-size: 13px; }
        .va-about-body { font-size: 16px; line-height: 1.65; color: var(--ink); }
        .va-about-body p + p { margin-top: 14px; }
        .va-keyword-list { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 28px; }
        .va-keyword { padding: 5px 12px; border: 1px solid rgba(22,23,27,0.25); border-radius: 999px; font-size: 12px; color: var(--ink); }

        /* NEWS */
        .va-news { padding: 20px 0 40px; }
        .va-news-list { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; }
        .va-news-item { cursor: pointer; }
        .va-news-thumb { width: 100%; aspect-ratio: 4/3; overflow: hidden; background: #ddd; border-radius: 2px; margin-bottom: 16px; }
        .va-news-thumb img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s; filter: saturate(0.85); }
        .va-news-item:hover .va-news-thumb img { transform: scale(1.03); }
        .va-news-meta { display: flex; gap: 10px; align-items: center; margin-bottom: 8px; }
        .va-news-date { color: var(--muted); }
        .va-news-tag { padding: 2px 8px; border: 1px solid rgba(22,23,27,0.2); border-radius: 2px; font-size: 10px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--ink); }
        .va-news-title { font-family: 'Fraunces', serif; font-size: 20px; line-height: 1.25; letter-spacing: -0.015em; font-weight: 400; margin: 0 0 8px; }
        .va-news-title-en { color: var(--muted); font-size: 12px; letter-spacing: 0.02em; font-style: italic; }
        .va-news-more { display: flex; justify-content: flex-end; margin-top: 32px; }
        .va-news-more a { text-decoration: none; color: var(--ink); font-size: 13px; border-bottom: 1px solid var(--ink); padding-bottom: 2px; }

        /* RESEARCH */
        .va-research { padding: 20px 0 40px; }
        .va-research-grid { display: grid; grid-template-columns: 5fr 4fr 3fr; grid-auto-rows: auto; gap: 8px; }
        .va-research-item { position: relative; overflow: hidden; background: #111; border-radius: 2px; }
        .va-research-item img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s, filter 0.6s; filter: saturate(0.85) brightness(0.95); }
        .va-research-item:hover img { transform: scale(1.04); filter: saturate(1) brightness(1); }
        .va-research-caption {
          position: absolute; inset: 0;
          padding: 20px; display: flex; flex-direction: column; justify-content: flex-end;
          background: linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.7) 100%);
          color: var(--paper);
        }
        .va-research-caption .tag { color: rgba(246,244,239,0.7); margin-bottom: 6px; }
        .va-research-caption .t { font-family: 'Fraunces', serif; font-size: 22px; letter-spacing: -0.015em; margin: 0 0 4px; font-weight: 400; }
        .va-research-caption .ko { color: rgba(246,244,239,0.7); font-size: 12px; }
        .va-r-a { grid-column: span 2; grid-row: span 2; aspect-ratio: 16/9; }
        .va-r-b { aspect-ratio: 4/5; }
        .va-r-c { aspect-ratio: 4/3; }
        .va-r-d { aspect-ratio: 4/3; }
        .va-r-e { aspect-ratio: 3/4; }

        /* PUBLICATIONS */
        .va-pubs { padding: 20px 0 40px; }
        .va-pub-row {
          display: grid; grid-template-columns: 60px 90px 1fr auto; gap: 24px; align-items: center;
          padding: 20px 0;
          border-top: 1px solid rgba(22,23,27,0.12);
          transition: background 0.2s;
          cursor: pointer;
        }
        .va-pub-row:hover { background: rgba(22,23,27,0.03); padding-left: 8px; padding-right: 8px; }
        .va-pub-row:last-child { border-bottom: 1px solid rgba(22,23,27,0.12); }
        .va-pub-thumb { width: 60px; height: 45px; border-radius: 2px; overflow: hidden; background: #ddd; }
        .va-pub-thumb img { width: 100%; height: 100%; object-fit: cover; }
        .va-pub-year { font-family: 'Fraunces', serif; font-size: 24px; font-weight: 400; color: var(--muted); }
        .va-pub-title { font-family: 'Fraunces', serif; font-size: 18px; font-weight: 400; letter-spacing: -0.015em; margin: 0 0 4px; line-height: 1.3; }
        .va-pub-authors { font-size: 13px; color: var(--muted); }
        .va-pub-venue { display: flex; align-items: center; gap: 8px; font-size: 12px; color: var(--ink); }
        .va-pub-venue .badge { padding: 3px 8px; background: var(--accent); color: var(--paper); border-radius: 2px; font-size: 10px; text-transform: uppercase; letter-spacing: 0.08em; }
        .va-pub-venue .badge.hl { background: var(--accent-2); }

        /* MEMBERS */
        .va-members { padding: 20px 0 40px; }
        .va-members-grid { display: grid; grid-template-columns: repeat(6, 1fr); gap: 24px; }
        .va-member { text-align: left; }
        .va-member-photo {
          width: 100%; aspect-ratio: 1/1; background: var(--paper-2);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 12px; border-radius: 2px;
          background: linear-gradient(135deg, #ede9de 0%, #d8d2c2 100%);
        }
        .va-member-initial { font-family: 'Fraunces', serif; font-size: 40px; font-weight: 400; color: var(--ink); letter-spacing: -0.02em; }
        .va-member-name { font-family: 'Fraunces', serif; font-size: 16px; font-weight: 500; letter-spacing: -0.01em; margin: 0 0 2px; }
        .va-member-role { font-size: 11px; color: var(--muted); letter-spacing: 0.04em; text-transform: uppercase; }
        .va-member-title { font-size: 11px; color: var(--muted); margin-top: 4px; }
        .va-member.pi .va-member-photo { background: linear-gradient(135deg, #1B365D 0%, #0f1f36 100%); }
        .va-member.pi .va-member-initial { color: var(--paper); }

        /* CONTACT */
        .va-contact { padding: 40px 0 120px; display: grid; grid-template-columns: 1fr 1fr; gap: 80px; }
        .va-contact-block h4 { font-family: 'Fraunces', serif; font-size: 22px; font-weight: 400; margin: 0 0 20px; letter-spacing: -0.015em; }
        .va-contact-row { display: grid; grid-template-columns: 100px 1fr; gap: 20px; padding: 12px 0; border-top: 1px solid rgba(22,23,27,0.12); font-size: 14px; }
        .va-contact-row:last-child { border-bottom: 1px solid rgba(22,23,27,0.12); }
        .va-contact-label { color: var(--muted); }
        .va-contact-cta {
          margin-top: 24px;
          padding: 20px 24px; background: var(--ink); color: var(--paper); border-radius: 2px;
          display: flex; justify-content: space-between; align-items: center; gap: 12px;
        }
        .va-contact-cta .lg { font-family: 'Fraunces', serif; font-size: 20px; letter-spacing: -0.015em; }
        .va-contact-cta a { color: var(--paper); text-decoration: none; }

        /* FOOTER */
        .va-footer { padding: 40px 0 60px; border-top: 1px solid rgba(22,23,27,0.15); }
        .va-footer-inner { display: grid; grid-template-columns: 1fr auto auto; gap: 40px; align-items: center; color: var(--muted); font-size: 12px; }
        .va-footer-brand { font-family: 'Fraunces', serif; font-size: 16px; color: var(--ink); }
      `}</style>

      {/* NAV */}
      <nav className="va-nav">
        <div className="va-nav-inner">
          <div className="va-brand">
            <span className="va-brand-mark"></span>
            <div>
              <div className="va-brand-name">Immersive Media Lab</div>
              <div className="va-brand-sub">SeoulTech · Since 2019</div>
            </div>
          </div>
          <div className="va-nav-list">
            {window.NAV_ITEMS.map(n => (
              <a key={n.key} className={`va-nav-link ${activeNav === n.key ? 'active' : ''}`} onClick={() => setActiveNav(n.key)}>
                {n.en}
              </a>
            ))}
          </div>
          <div className="va-nav-right">
            <span className="va-mono">Vol. 07 · 2026</span>
            <span className="va-nav-locale va-mono">KO / EN</span>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="va-section va-hero" data-screen-label="Hero">
        <div className="va-issue-line">
          <span className="va-mono">Immersive Media Journal — Issue №. 07</span>
          <span className="va-mono">서울과학기술대학교 · Dept. of Applied AI</span>
          <span className="va-mono">Updated 2026.06.24</span>
        </div>

        <div className="va-hero-grid">
          <div>
            <h1 className="va-hero-title">
              Where <em>imagination</em>
              <br />meets computation.
              <span className="sm">— 상상이 계산이 되는 지점에서, 우리는 새로운 미디어를 만듭니다.</span>
            </h1>
            <p className="va-hero-lead">
              {info.aboutKo}
            </p>
            <div className="va-hero-meta">
              <a className="va-cta" href="#research">
                최근 연구 살펴보기
                <span>→</span>
              </a>
              <span className="va-badge va-mono">Now Recruiting · 2026 Fall</span>
            </div>
          </div>

          <div>
            <div className="va-hero-3d">
              <span className="va-hero-3d-label va-mono">FIG.01 — Point Cloud Reconstruction</span>
              <span className="va-hero-3d-hint va-mono">
                <span className="dot"></span>
                Drag to rotate
              </span>
              <Hero3D style="points" accent="#4a7fbc" bg="transparent" />
            </div>
          </div>
        </div>

        <div className="va-hero-bottom">
          <div>
            <div className="va-mono va-stat-label">Papers</div>
            <div className="va-stat-val">32<span style={{fontSize:'16px',color:'var(--muted)'}}>+</span></div>
            <div className="va-stat-note">CVPR · ICCV · SIGGRAPH · ICLR</div>
          </div>
          <div>
            <div className="va-mono va-stat-label">Active Projects</div>
            <div className="va-stat-val">08</div>
            <div className="va-stat-note">3D Reconstruction · XR · Vision</div>
          </div>
          <div>
            <div className="va-mono va-stat-label">Members</div>
            <div className="va-stat-val">12</div>
            <div className="va-stat-note">1 PI · 4 Ph.D · 7 M.S.</div>
          </div>
          <div>
            <div className="va-mono va-stat-label">Est.</div>
            <div className="va-stat-val">2019</div>
            <div className="va-stat-note">Seoul, Korea</div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="va-section" data-screen-label="About" id="about">
        <div className="va-section-head">
          <div>
            <span className="va-mono va-section-mono">§ 01 — About</span>
            <h2 className="va-section-title">연구실을 <em>소개합니다</em></h2>
          </div>
          <p className="va-section-lede">
            우리는 인간의 감각과 기계의 지각을 잇는 실감형 미디어 시스템을 연구합니다. VR·AR·XR, 3D 재구성, 뉴럴 렌더링, 인간중심 컴퓨팅이 우리의 관심 영역입니다.
          </p>
        </div>
        <div className="va-about">
          <div>
            <blockquote className="va-quote">
              "Everything you can imagine<br/>is real."
            </blockquote>
            <div className="va-quote-author">— Pablo Picasso</div>

            <div className="va-keyword-list">
              {info.keywords.map(k => <span key={k} className="va-keyword">{k}</span>)}
            </div>
          </div>
          <div className="va-about-body">
            <p>
              실감미디어연구실(Immersive Media Lab)은 서울과학기술대학교 인공지능응용학과 소속의 연구실로, 몰입형 미디어 기술의 이론과 응용을 함께 탐구합니다.
            </p>
            <p>
              우리는 세 가지 축을 중심으로 연구합니다. <strong>공간의 재구성</strong> — 실세계를 3D로 옮기는 방법. <strong>지각의 확장</strong> — 인간의 감각 경험을 넘어서는 인터페이스. <strong>경험의 설계</strong> — 기술이 사람에게 남기는 흔적.
            </p>
            <p>
              연구실은 학술적 엄밀함을 유지하면서도, 산업·문화유산·교육 등 실제 문제와 연결되는 연구를 지향합니다.
            </p>
          </div>
        </div>
      </section>

      {/* NEWS */}
      <section className="va-section" data-screen-label="News" id="news">
        <div className="va-section-head">
          <div>
            <span className="va-mono va-section-mono">§ 02 — Latest News</span>
            <h2 className="va-section-title">최근 <em>소식</em></h2>
          </div>
          <p className="va-section-lede">
            연구 성과, 학회 발표, 수상, 대학원생 모집 등 실감미디어연구실의 최근 소식입니다.
            전체 기록은 <a href="#news">News</a> 페이지에서 확인할 수 있습니다.
          </p>
        </div>
        <div className="va-news va-news-list">
          {news.map((n, i) => (
            <article key={i} className="va-news-item">
              <div className="va-news-thumb">
                <img src={n.image} alt="" />
              </div>
              <div className="va-news-meta">
                <span className="va-mono va-news-date">{n.date}</span>
                <span className="va-mono va-news-tag">{n.tag}</span>
              </div>
              <h3 className="va-news-title">{n.title}</h3>
              <div className="va-news-title-en">{n.titleEn}</div>
            </article>
          ))}
        </div>
        <div className="va-news-more">
          <a href="#news">모든 소식 보기 →</a>
        </div>
      </section>

      {/* RESEARCH */}
      <section className="va-section" data-screen-label="Research" id="research">
        <div className="va-section-head">
          <div>
            <span className="va-mono va-section-mono">§ 03 — Research</span>
            <h2 className="va-section-title">진행 중인 <em>연구</em></h2>
          </div>
          <p className="va-section-lede">
            우리 연구실이 지금 몰두하고 있는 주제들입니다. 각 프로젝트는 논문과 오픈소스로 이어집니다.
          </p>
        </div>
        <div className="va-research va-research-grid">
          {projects.slice(0, 5).map((p, i) => (
            <a key={p.id} className={`va-research-item va-r-${['a','b','c','d','e'][i]}`}>
              <img src={p.image} alt={p.title} />
              <div className="va-research-caption">
                <span className="va-mono tag">{p.tag} · {p.year}</span>
                <h3 className="t">{p.title}</h3>
                <div className="ko">{p.titleKo}</div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* PUBLICATIONS */}
      <section className="va-section" data-screen-label="Publications" id="publications">
        <div className="va-section-head">
          <div>
            <span className="va-mono va-section-mono">§ 04 — Publications</span>
            <h2 className="va-section-title">최근 <em>논문</em></h2>
          </div>
          <p className="va-section-lede">
            국제 학회 및 저널에 발표된 최근 논문들입니다. 전체 목록은 Publications 페이지에서 확인할 수 있습니다.
          </p>
        </div>
        <div className="va-pubs">
          {pubs.map((p, i) => (
            <div key={i} className="va-pub-row">
              <div className="va-pub-thumb"><img src={p.image} alt="" /></div>
              <div className="va-pub-year">{p.year}</div>
              <div>
                <h4 className="va-pub-title">{p.title}</h4>
                <div className="va-pub-authors">{p.authors}</div>
              </div>
              <div className="va-pub-venue">
                {p.tag && <span className={`badge ${p.tag === 'highlight' ? 'hl' : ''}`}>{p.tag}</span>}
                <span>In Proc. of {p.venue}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MEMBERS */}
      <section className="va-section" data-screen-label="Members" id="members">
        <div className="va-section-head">
          <div>
            <span className="va-mono va-section-mono">§ 05 — Members</span>
            <h2 className="va-section-title"><em>구성원</em></h2>
          </div>
          <p className="va-section-lede">
            연구실은 지도교수 1인과 박사·석사과정 학생들로 구성됩니다. 실감형 미디어의 서로 다른 층위를 함께 파고듭니다.
          </p>
        </div>
        <div className="va-members va-members-grid">
          {members.map((m, i) => (
            <div key={i} className={`va-member ${i===0 ? 'pi' : ''}`}>
              <div className="va-member-photo">
                <span className="va-member-initial">{m.initial}</span>
              </div>
              <h4 className="va-member-name">{m.name}</h4>
              <div className="va-member-role va-mono">{m.role}</div>
              <div className="va-member-title">{m.title}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="va-section va-contact" data-screen-label="Contact" id="contact">
        <div className="va-contact-block">
          <h4>연락처 · Contact</h4>
          <div className="va-contact-row">
            <div className="va-contact-label va-mono">Address</div>
            <div>서울시 노원구 공릉로 232<br/>서울과학기술대학교 프론티어관 7층</div>
          </div>
          <div className="va-contact-row">
            <div className="va-contact-label va-mono">Advisor</div>
            <div>정희민 부교수 · 인공지능응용학과</div>
          </div>
          <div className="va-contact-row">
            <div className="va-contact-label va-mono">Email</div>
            <div>hmjung@seoultech.ac.kr</div>
          </div>
        </div>
        <div className="va-contact-block">
          <h4>대학원 지원 안내 · Prospective Students</h4>
          <p style={{color:'var(--muted)', fontSize:'14px', lineHeight:1.65}}>
            2026학년도 후기 대학원생을 모집합니다.
            <br/>컴퓨터 비전 · 3D 그래픽스 · XR 인터랙션에 관심 있는 학부생 및 석사 지원자를 환영합니다.
          </p>
          <div className="va-contact-cta">
            <div>
              <div className="va-mono" style={{opacity:0.6, marginBottom:4}}>WRITE TO</div>
              <div className="lg">hmjung@seoultech.ac.kr</div>
            </div>
            <a>→</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="va-section va-footer">
        <div className="va-footer-inner">
          <div className="va-footer-brand">Immersive Media Lab</div>
          <div>© 2026 SeoulTech · Dept. of Applied AI</div>
          <div className="va-mono">Ver. 2026.07 — Editorial</div>
        </div>
      </footer>
    </div>
  );
};

window.VariantA = VariantA;
