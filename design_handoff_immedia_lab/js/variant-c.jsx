// 시안 C - Immersive Accent
// 상단은 라이트 톤, 하단으로 갈수록 다크 섹션 교차
// 큰 3D 인터랙티브 캔버스가 히어로 배경. 세리프+산세리프 믹스
// 실감미디어 분위기 강조하지만 여전히 학술적으로

const VariantC = () => {
  const [activeNav, setActiveNav] = React.useState('home');
  const news = window.NEWS;
  const info = window.LAB_INFO;
  const projects = window.PROJECTS;
  const pubs = window.PUBLICATIONS;
  const members = window.MEMBERS;

  return (
    <div className="vc-root">
      <style>{`
        .vc-root {
          --ink: #0e1014;
          --paper: #fafaf7;
          --paper-2: #f0eee7;
          --dark: #0a0d13;
          --dark-2: #12161f;
          --muted: #7a7a72;
          --muted-dark: #7d8494;
          --accent: #4d78b8;
          --accent-deep: #1B365D;
          --accent-2: #b0576a;
          background: var(--paper);
          color: var(--ink);
          font-family: 'Pretendard', 'Inter', system-ui, sans-serif;
          font-weight: 380;
          font-size: 15px;
          line-height: 1.55;
          letter-spacing: -0.005em;
        }
        .vc-serif { font-family: 'Instrument Serif', 'Fraunces', serif; letter-spacing: -0.01em; font-weight: 400; }
        .vc-mono { font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 11px; letter-spacing: 0.06em; text-transform: uppercase; }

        /* NAV floating */
        .vc-nav {
          position: fixed; top: 20px; left: 50%; transform: translateX(-50%);
          z-index: 100;
          background: rgba(250,250,247,0.85);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(14,16,20,0.08);
          border-radius: 999px;
          padding: 8px 10px 8px 20px;
          display: flex; align-items: center; gap: 8px;
        }
        .vc-nav-brand { font-family: 'Instrument Serif', serif; font-size: 16px; font-weight: 400; letter-spacing: -0.01em; padding-right: 12px; border-right: 1px solid rgba(14,16,20,0.1); margin-right: 4px; display: flex; align-items: center; gap: 8px; }
        .vc-nav-brand::before { content:''; width: 8px; height: 8px; background: var(--accent); border-radius: 50%; }
        .vc-nav-list { display: flex; gap: 2px; }
        .vc-nav-link {
          padding: 7px 14px;
          font-size: 13px;
          color: var(--ink);
          cursor: pointer;
          border-radius: 999px;
          transition: background 0.15s;
        }
        .vc-nav-link:hover { background: rgba(14,16,20,0.06); }
        .vc-nav-link.active { background: var(--ink); color: var(--paper); }

        /* HERO - light left, dark 3D right */
        .vc-hero {
          position: relative;
          min-height: 100vh;
          background: linear-gradient(180deg, #fafaf7 0%, #ede9de 100%);
          overflow: hidden;
          padding: 120px 60px 220px;
        }
        .vc-hero-overlay {
          position: relative; z-index: 2;
          display: grid; grid-template-columns: 1.05fr 1fr; gap: 40px;
          padding-top: 20px;
          min-height: 500px;
          align-items: stretch;
        }
        .vc-hero-3d-full {
          position: relative;
          background: radial-gradient(ellipse at 60% 40%, #1a2236 0%, #050710 100%);
          border-radius: 6px;
          overflow: hidden;
          min-height: 520px;
          box-shadow: 0 20px 60px -20px rgba(10,13,19,0.35);
        }
        .vc-hero-3d-full > div { height: 100%; }
        .vc-hero-tag {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 6px 14px 6px 6px;
          background: rgba(250,250,247,0.9);
          border: 1px solid rgba(14,16,20,0.1);
          border-radius: 999px;
          font-size: 12px;
          margin-bottom: 32px;
          color: var(--ink);
        }
        .vc-hero-tag .pill { background: var(--accent); color: white; padding: 2px 10px; border-radius: 999px; font-size: 10px; letter-spacing: 0.08em; text-transform: uppercase; }
        .vc-hero-title {
          font-family: 'Instrument Serif', 'Fraunces', serif;
          font-size: clamp(64px, 7.8vw, 120px);
          font-weight: 400;
          line-height: 0.95;
          letter-spacing: -0.03em;
          margin: 0 0 32px;
          color: var(--ink);
        }
        .vc-hero-title em { font-style: italic; color: var(--accent-deep); }
        .vc-hero-title .thin { font-weight: 300; color: var(--muted); }
        .vc-hero-sub {
          font-size: 17px; line-height: 1.55; max-width: 40ch;
          margin-bottom: 24px;
        }
        .vc-hero-actions { display: flex; gap: 12px; align-items: center; }
        .vc-btn {
          padding: 12px 20px; border-radius: 999px;
          font-size: 13px; text-decoration: none; cursor: pointer;
          display: inline-flex; align-items: center; gap: 8px;
        }
        .vc-btn-primary { background: var(--ink); color: var(--paper); }
        .vc-btn-ghost { background: rgba(250,250,247,0.7); color: var(--ink); border: 1px solid rgba(14,16,20,0.15); backdrop-filter: blur(10px); }

        .vc-hero-right { position: relative; align-self: stretch; display: flex; flex-direction: column; }
        .vc-hero-3d-hint {
          position: absolute;
          left: 20px; bottom: 20px;
          z-index: 3;
          background: rgba(250,250,247,0.14);
          backdrop-filter: blur(8px);
          border-radius: 999px;
          padding: 6px 14px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(250,250,247,0.85);
          display: flex; align-items: center; gap: 8px;
          border: 1px solid rgba(250,250,247,0.15);
          pointer-events: none;
        }
        .vc-hero-3d-hint .dot { width: 6px; height: 6px; background: var(--accent); border-radius: 50%; animation: vcPulse 1.4s infinite; }
        @keyframes vcPulse { 0%,100%{ transform: scale(1); opacity: 1; } 50%{ transform: scale(1.5); opacity: 0.3; } }

        /* HERO bottom info strip */
        .vc-hero-strip {
          position: absolute;
          left: 60px; right: 60px; bottom: 60px;
          z-index: 3;
          background: rgba(250,250,247,0.9);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(14,16,20,0.08);
          border-radius: 6px;
          padding: 24px 32px;
          display: grid; grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 32px;
          align-items: center;
        }
        .vc-strip-title { font-size: 12px; color: var(--muted); letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 6px; font-family: 'JetBrains Mono', monospace; }
        .vc-strip-val { font-family: 'Instrument Serif', serif; font-size: 24px; font-weight: 400; line-height: 1.1; letter-spacing: -0.01em; }
        .vc-strip-val .sm { font-size: 12px; color: var(--muted); font-family: 'Pretendard', sans-serif; letter-spacing: 0; margin-left: 6px; }
        .vc-strip-latest { display: flex; align-items: center; gap: 14px; }
        .vc-strip-latest .live { width: 8px; height: 8px; background: #d13636; border-radius: 50%; animation: vcPulse 1.4s infinite; }
        .vc-strip-latest .txt { font-size: 13.5px; line-height: 1.3; }
        .vc-strip-latest .k { font-size: 10px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--muted); font-family: 'JetBrains Mono', monospace; margin-bottom: 2px; }

        /* SECTION HEADER (light) */
        .vc-container { max-width: 1360px; margin: 0 auto; padding: 0 60px; }
        .vc-section-head {
          padding: 100px 0 40px;
          display: grid; grid-template-columns: 1fr 1.5fr; gap: 60px;
          align-items: end;
        }
        .vc-section-mono { color: var(--muted); }
        .vc-section-title { font-family: 'Instrument Serif', serif; font-size: clamp(40px, 5vw, 68px); font-weight: 400; line-height: 1; letter-spacing: -0.02em; margin: 12px 0 0; }
        .vc-section-title em { font-style: italic; color: var(--accent-deep); }
        .vc-section-lede { font-size: 15.5px; color: var(--muted); max-width: 50ch; }
        .vc-section-lede a { color: var(--ink); border-bottom: 1px solid var(--ink); }

        /* ABOUT */
        .vc-about { padding: 40px 0 60px; display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: start; }
        .vc-quote { font-family: 'Instrument Serif', serif; font-size: 40px; line-height: 1.15; letter-spacing: -0.02em; margin: 0 0 20px; font-weight: 400; }
        .vc-quote em { font-style: italic; color: var(--accent-deep); }
        .vc-quote-author { color: var(--muted); font-size: 13px; margin-bottom: 32px; }
        .vc-about-p { font-size: 16px; line-height: 1.65; margin: 0 0 16px; }
        .vc-about-p strong { font-weight: 600; }
        .vc-keyword-list { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 32px; }
        .vc-keyword { padding: 6px 14px; border: 1px solid rgba(14,16,20,0.15); border-radius: 999px; font-size: 12px; }
        .vc-keyword.on { background: var(--ink); color: var(--paper); border-color: var(--ink); }

        /* NEWS - dark section */
        .vc-news-section {
          background: var(--dark);
          color: var(--paper);
          padding: 80px 0 120px;
          margin-top: 60px;
          position: relative;
          overflow: hidden;
        }
        .vc-news-section::before {
          content: '';
          position: absolute; inset: 0;
          background:
            radial-gradient(circle at 20% 30%, rgba(77,120,184,0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(176,87,106,0.08) 0%, transparent 50%);
          pointer-events: none;
        }
        .vc-news-section .vc-section-head { padding-top: 20px; }
        .vc-news-section .vc-section-title { color: var(--paper); }
        .vc-news-section .vc-section-title em { color: var(--accent); }
        .vc-news-section .vc-section-lede { color: var(--muted-dark); }
        .vc-news-section .vc-section-lede a { color: var(--paper); border-color: var(--paper); }
        .vc-news-section .vc-section-mono { color: var(--muted-dark); }
        .vc-news-list { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; position: relative; z-index: 1; }
        .vc-news-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 6px;
          overflow: hidden;
          cursor: pointer;
          transition: background 0.2s, border-color 0.2s, transform 0.3s;
        }
        .vc-news-card:hover { background: rgba(255,255,255,0.06); border-color: rgba(255,255,255,0.15); transform: translateY(-4px); }
        .vc-news-card-thumb { aspect-ratio: 16/9; overflow: hidden; }
        .vc-news-card-thumb img { width: 100%; height: 100%; object-fit: cover; filter: brightness(0.95) saturate(0.9); transition: transform 0.5s; }
        .vc-news-card:hover .vc-news-card-thumb img { transform: scale(1.04); }
        .vc-news-card-body { padding: 20px 20px 22px; }
        .vc-news-card-meta { display: flex; gap: 10px; align-items: center; margin-bottom: 10px; }
        .vc-news-card-date { color: var(--muted-dark); font-family: 'JetBrains Mono', monospace; font-size: 10.5px; letter-spacing: 0.06em; }
        .vc-news-card-tag { padding: 2px 8px; background: rgba(77,120,184,0.2); border: 1px solid rgba(77,120,184,0.3); border-radius: 3px; font-size: 10px; letter-spacing: 0.06em; text-transform: uppercase; color: #a3c2ec; }
        .vc-news-card-title { font-family: 'Instrument Serif', serif; font-size: 22px; font-weight: 400; line-height: 1.25; letter-spacing: -0.015em; margin: 0 0 8px; color: var(--paper); }
        .vc-news-card-en { color: var(--muted-dark); font-size: 12px; font-style: italic; }
        .vc-news-more { text-align: right; margin-top: 32px; position: relative; z-index: 1; }
        .vc-news-more a { color: var(--paper); text-decoration: none; font-size: 13px; padding-bottom: 3px; border-bottom: 1px solid var(--paper); }

        /* RESEARCH - asymmetric feature grid */
        .vc-research { padding: 40px 0 100px; }
        .vc-r-hero {
          display: grid; grid-template-columns: 1.6fr 1fr; gap: 24px;
          margin-bottom: 24px;
        }
        .vc-r-card { position: relative; overflow: hidden; border-radius: 6px; background: #111; cursor: pointer; }
        .vc-r-card img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s; }
        .vc-r-card:hover img { transform: scale(1.03); }
        .vc-r-caption {
          position: absolute; inset: 0;
          padding: 32px;
          display: flex; flex-direction: column; justify-content: flex-end;
          background: linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.85) 100%);
          color: var(--paper);
        }
        .vc-r-caption .vc-mono { color: rgba(255,255,255,0.6); margin-bottom: 6px; }
        .vc-r-caption h3 { font-family: 'Instrument Serif', serif; font-size: 32px; font-weight: 400; letter-spacing: -0.015em; margin: 0 0 4px; line-height: 1.1; }
        .vc-r-caption .ko { color: rgba(255,255,255,0.7); font-size: 13px; margin-bottom: 8px; }
        .vc-r-caption .desc { color: rgba(255,255,255,0.75); font-size: 13.5px; line-height: 1.5; max-width: 46ch; }
        .vc-r-big { aspect-ratio: 16/10; }
        .vc-r-tall { aspect-ratio: 4/5; }
        .vc-r-tall h3 { font-size: 24px; }
        .vc-r-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .vc-r-small { aspect-ratio: 4/3; }
        .vc-r-small h3 { font-size: 20px; }
        .vc-r-small .desc { display: none; }

        /* PUBLICATIONS */
        .vc-pubs { padding: 40px 0 60px; }
        .vc-pub-list { display: flex; flex-direction: column; gap: 4px; }
        .vc-pub-item {
          display: grid; grid-template-columns: 80px 60px 1fr auto;
          gap: 24px; align-items: center;
          padding: 20px 16px;
          border-radius: 6px;
          transition: background 0.2s, transform 0.2s;
          cursor: pointer;
          border: 1px solid transparent;
        }
        .vc-pub-item:hover { background: var(--paper-2); border-color: rgba(14,16,20,0.06); }
        .vc-pub-thumb { width: 80px; aspect-ratio: 4/3; border-radius: 4px; overflow: hidden; background: #eee; }
        .vc-pub-thumb img { width: 100%; height: 100%; object-fit: cover; }
        .vc-pub-year { font-family: 'Instrument Serif', serif; font-size: 28px; font-weight: 400; color: var(--muted); }
        .vc-pub-title { font-family: 'Instrument Serif', serif; font-size: 21px; font-weight: 400; letter-spacing: -0.015em; margin: 0 0 4px; line-height: 1.25; }
        .vc-pub-authors { font-size: 13px; color: var(--muted); }
        .vc-pub-venue { display: flex; align-items: center; gap: 12px; }
        .vc-pub-badge { padding: 3px 10px; background: var(--accent-deep); color: var(--paper); border-radius: 3px; font-size: 10px; letter-spacing: 0.08em; text-transform: uppercase; }
        .vc-pub-badge.hl { background: var(--accent-2); }
        .vc-pub-venue-name { font-size: 13px; }

        /* MEMBERS */
        .vc-members { padding: 40px 0 100px; }
        .vc-members-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr 1fr 1fr; gap: 20px; }
        .vc-member { }
        .vc-m-photo {
          aspect-ratio: 1/1; border-radius: 6px;
          background: linear-gradient(135deg, #ede9de 0%, #d8d2c2 100%);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 14px;
        }
        .vc-m-initial { font-family: 'Instrument Serif', serif; font-size: 44px; font-weight: 400; letter-spacing: -0.02em; }
        .vc-member.pi .vc-m-photo { background: linear-gradient(135deg, #1B365D 0%, #0e1b30 100%); }
        .vc-member.pi .vc-m-initial { color: var(--paper); font-size: 64px; }
        .vc-m-name { font-family: 'Instrument Serif', serif; font-size: 18px; font-weight: 400; letter-spacing: -0.01em; margin: 0 0 2px; }
        .vc-member.pi .vc-m-name { font-size: 24px; }
        .vc-m-role { font-family: 'JetBrains Mono', monospace; font-size: 10px; letter-spacing: 0.06em; color: var(--muted); text-transform: uppercase; }
        .vc-m-title { font-size: 12px; color: var(--muted); margin-top: 4px; }

        /* CONTACT - dark bottom */
        .vc-contact-section {
          background: var(--dark);
          color: var(--paper);
          padding: 80px 0 60px;
          margin-top: 40px;
          position: relative;
          overflow: hidden;
        }
        .vc-contact-section::before {
          content: '';
          position: absolute; inset: 0;
          background: radial-gradient(ellipse at 70% 40%, rgba(27,54,93,0.35) 0%, transparent 60%);
          pointer-events: none;
        }
        .vc-contact-section .vc-section-title { color: var(--paper); }
        .vc-contact-section .vc-section-title em { color: var(--accent); }
        .vc-contact-section .vc-section-lede { color: var(--muted-dark); }
        .vc-contact-section .vc-section-mono { color: var(--muted-dark); }
        .vc-contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; padding: 30px 0 40px; position: relative; z-index: 1; }
        .vc-contact-block h4 { font-family: 'Instrument Serif', serif; font-size: 26px; font-weight: 400; margin: 0 0 20px; letter-spacing: -0.015em; color: var(--paper); }
        .vc-contact-row {
          display: grid; grid-template-columns: 100px 1fr; gap: 20px;
          padding: 14px 0;
          border-top: 1px solid rgba(255,255,255,0.1);
          font-size: 14.5px;
        }
        .vc-contact-row:last-child { border-bottom: 1px solid rgba(255,255,255,0.1); }
        .vc-contact-label { color: var(--muted-dark); font-family: 'JetBrains Mono', monospace; font-size: 10.5px; letter-spacing: 0.08em; text-transform: uppercase; align-self: center; }
        .vc-cta-card {
          margin-top: 24px;
          background: linear-gradient(135deg, #1B365D 0%, #0e1b30 100%);
          border: 1px solid rgba(77,120,184,0.3);
          padding: 28px;
          border-radius: 8px;
          display: flex; justify-content: space-between; align-items: center; gap: 16px;
        }
        .vc-cta-card .k { font-family: 'JetBrains Mono', monospace; font-size: 10px; letter-spacing: 0.08em; text-transform: uppercase; opacity: 0.7; margin-bottom: 6px; }
        .vc-cta-card .v { font-family: 'Instrument Serif', serif; font-size: 22px; letter-spacing: -0.015em; }
        .vc-cta-arrow { width: 44px; height: 44px; border-radius: 50%; background: var(--paper); color: var(--dark); display: flex; align-items: center; justify-content: center; font-size: 18px; flex-shrink: 0; }

        /* FOOTER */
        .vc-footer {
          border-top: 1px solid rgba(255,255,255,0.1);
          padding: 24px 0;
          display: grid; grid-template-columns: 1fr auto auto;
          gap: 40px; align-items: center;
          font-size: 12px; color: var(--muted-dark);
          position: relative; z-index: 1;
        }
        .vc-footer-brand { font-family: 'Instrument Serif', serif; font-size: 18px; color: var(--paper); }
      `}</style>

      {/* NAV */}
      <nav className="vc-nav">
        <div className="vc-nav-brand">Immedia<span style={{color:'var(--muted)', fontStyle:'italic'}}>Lab</span></div>
        <div className="vc-nav-list">
          {window.NAV_ITEMS.map(n => (
            <a key={n.key} className={`vc-nav-link ${activeNav===n.key ? 'active' : ''}`} onClick={() => setActiveNav(n.key)}>
              {n.ko}
            </a>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section className="vc-hero" data-screen-label="Hero">
        <div className="vc-hero-overlay">
          <div>
            <div className="vc-hero-tag">
              <span className="pill">2026</span>
              <span>서울과학기술대학교 · 실감미디어연구실</span>
            </div>

            <h1 className="vc-hero-title">
              공간이<br/>
              <em>기억이</em><br/>
              <span className="thin">되는 미디어.</span>
            </h1>

            <p className="vc-hero-sub">
              우리는 인간의 감각과 기계의 지각을 잇는 실감형 미디어 시스템을 연구합니다. VR, AR, 3D 재구성, 뉴럴 렌더링, 그리고 그것들이 사람과 만나는 지점에서.
            </p>

            <div className="vc-hero-actions">
              <a className="vc-btn vc-btn-primary">최근 연구 <span>→</span></a>
              <a className="vc-btn vc-btn-ghost">대학원 지원 안내</a>
            </div>
          </div>

          <div className="vc-hero-right">
            <div className="vc-hero-3d-full">
              <Hero3D style="volumetric" accent="#8db8f0" bg="transparent" />
            </div>
            <div className="vc-hero-3d-hint">
              <span className="dot"></span>
              <span>DRAG · Interactive Point Cloud</span>
            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="vc-hero-strip">
          <div className="vc-strip-latest">
            <span className="live"></span>
            <div>
              <div className="k">Latest · {news[0].date}</div>
              <div className="txt">{news[0].title}</div>
            </div>
          </div>
          <div>
            <div className="vc-strip-title">Papers</div>
            <div className="vc-strip-val">32<span className="sm">+ published</span></div>
          </div>
          <div>
            <div className="vc-strip-title">Members</div>
            <div className="vc-strip-val">12<span className="sm">researchers</span></div>
          </div>
          <div>
            <div className="vc-strip-title">Since</div>
            <div className="vc-strip-val">2019<span className="sm">Seoul, KR</span></div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <div className="vc-container" data-screen-label="About">
        <div className="vc-section-head">
          <div>
            <span className="vc-mono vc-section-mono">§ 01 — About the Lab</span>
            <h2 className="vc-section-title">우리가 <em>연구하는</em> 것</h2>
          </div>
          <p className="vc-section-lede">
            공간의 재구성, 지각의 확장, 경험의 설계. 세 축이 만나는 곳에서 우리는 실감형 미디어의 다음 세대를 그립니다.
          </p>
        </div>
        <div className="vc-about">
          <div>
            <blockquote className="vc-quote">
              Everything you can <em>imagine</em><br/>is real.
            </blockquote>
            <div className="vc-quote-author">— Pablo Picasso</div>

            <div className="vc-keyword-list">
              <span className="vc-keyword on">Immersive Media</span>
              <span className="vc-keyword">VR / AR / XR</span>
              <span className="vc-keyword">3D Reconstruction</span>
              <span className="vc-keyword">Neural Rendering</span>
              <span className="vc-keyword">Human-Centered</span>
            </div>
          </div>
          <div>
            <p className="vc-about-p">
              실감미디어연구실은 서울과학기술대학교 인공지능응용학과 소속의 연구실로, 몰입형 미디어 기술의 이론과 응용을 함께 탐구합니다.
            </p>
            <p className="vc-about-p">
              <strong>공간의 재구성</strong> — 실세계를 3D 데이터로 옮기는 방법. Gaussian Splatting, NeRF, SLAM.
            </p>
            <p className="vc-about-p">
              <strong>지각의 확장</strong> — 인간의 감각 경험을 넘어서는 인터페이스. 360도 시각화, 옴니디렉셔널 카메라.
            </p>
            <p className="vc-about-p">
              <strong>경험의 설계</strong> — 기술이 사람에게 남기는 흔적. 문화유산, 교육, 원격 협업.
            </p>
          </div>
        </div>
      </div>

      {/* NEWS - dark */}
      <section className="vc-news-section" data-screen-label="News">
        <div className="vc-container">
          <div className="vc-section-head">
            <div>
              <span className="vc-mono vc-section-mono">§ 02 — Latest News</span>
              <h2 className="vc-section-title">최근 <em>소식</em></h2>
            </div>
            <p className="vc-section-lede">
              연구 성과, 학회 발표, 수상, 대학원생 모집 등 실감미디어연구실의 최근 소식입니다.
              전체 기록은 <a>News 페이지</a>에서 확인할 수 있습니다.
            </p>
          </div>
          <div className="vc-news-list">
            {news.map((n, i) => (
              <article key={i} className="vc-news-card">
                <div className="vc-news-card-thumb"><img src={n.image} alt="" /></div>
                <div className="vc-news-card-body">
                  <div className="vc-news-card-meta">
                    <span className="vc-news-card-date">{n.date}</span>
                    <span className="vc-news-card-tag">{n.tag}</span>
                  </div>
                  <h3 className="vc-news-card-title">{n.title}</h3>
                  <div className="vc-news-card-en">{n.titleEn}</div>
                </div>
              </article>
            ))}
          </div>
          <div className="vc-news-more">
            <a>모든 소식 →</a>
          </div>
        </div>
      </section>

      {/* RESEARCH */}
      <div className="vc-container" data-screen-label="Research">
        <div className="vc-section-head">
          <div>
            <span className="vc-mono vc-section-mono">§ 03 — Research</span>
            <h2 className="vc-section-title">진행 중인 <em>연구</em></h2>
          </div>
          <p className="vc-section-lede">
            우리 연구실이 지금 몰두하고 있는 주제들. 각 프로젝트는 논문과 오픈소스로 이어집니다.
          </p>
        </div>
        <div className="vc-research">
          <div className="vc-r-hero">
            <a className="vc-r-card vc-r-big">
              <img src={projects[0].image} alt={projects[0].title} />
              <div className="vc-r-caption">
                <span className="vc-mono">Featured · {projects[0].tag} · {projects[0].year}</span>
                <h3>{projects[0].title}</h3>
                <div className="ko">{projects[0].titleKo}</div>
                <div className="desc">{projects[0].desc}</div>
              </div>
            </a>
            <a className="vc-r-card vc-r-tall">
              <img src={projects[1].image} alt={projects[1].title} />
              <div className="vc-r-caption">
                <span className="vc-mono">{projects[1].tag} · {projects[1].year}</span>
                <h3>{projects[1].title}</h3>
                <div className="ko">{projects[1].titleKo}</div>
              </div>
            </a>
          </div>
          <div className="vc-r-grid">
            {projects.slice(2, 5).map(p => (
              <a key={p.id} className="vc-r-card vc-r-small">
                <img src={p.image} alt={p.title} />
                <div className="vc-r-caption">
                  <span className="vc-mono">{p.tag} · {p.year}</span>
                  <h3>{p.title}</h3>
                  <div className="ko">{p.titleKo}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* PUBLICATIONS */}
      <div className="vc-container" data-screen-label="Publications">
        <div className="vc-section-head">
          <div>
            <span className="vc-mono vc-section-mono">§ 04 — Publications</span>
            <h2 className="vc-section-title">최근 <em>논문</em></h2>
          </div>
          <p className="vc-section-lede">
            국제 학회 및 저널에 발표된 최근 논문들. 전체 목록은 Publications 페이지에서 확인할 수 있습니다.
          </p>
        </div>
        <div className="vc-pubs">
          <div className="vc-pub-list">
            {pubs.map((p, i) => (
              <div key={i} className="vc-pub-item">
                <div className="vc-pub-thumb"><img src={p.image} alt="" /></div>
                <div className="vc-pub-year">{p.year}</div>
                <div>
                  <h4 className="vc-pub-title">{p.title}</h4>
                  <div className="vc-pub-authors">{p.authors}</div>
                </div>
                <div className="vc-pub-venue">
                  {p.tag && <span className={`vc-pub-badge ${p.tag === 'highlight' ? 'hl' : ''}`}>{p.tag}</span>}
                  <span className="vc-pub-venue-name">In Proc. of <strong>{p.venue}</strong></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MEMBERS */}
      <div className="vc-container" data-screen-label="Members">
        <div className="vc-section-head">
          <div>
            <span className="vc-mono vc-section-mono">§ 05 — Members</span>
            <h2 className="vc-section-title"><em>구성원</em></h2>
          </div>
          <p className="vc-section-lede">
            연구실은 지도교수 1인과 박사·석사과정 학생들로 구성됩니다. 실감형 미디어의 서로 다른 층위를 함께 파고듭니다.
          </p>
        </div>
        <div className="vc-members">
          <div className="vc-members-grid">
            {members.map((m, i) => (
              <div key={i} className={`vc-member ${i===0 ? 'pi' : ''}`}>
                <div className="vc-m-photo">
                  <span className="vc-m-initial">{m.initial}</span>
                </div>
                <h4 className="vc-m-name">{m.name}</h4>
                <div className="vc-m-role">{m.role}</div>
                <div className="vc-m-title">{m.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CONTACT - dark */}
      <section className="vc-contact-section" data-screen-label="Contact">
        <div className="vc-container">
          <div className="vc-section-head">
            <div>
              <span className="vc-mono vc-section-mono">§ 06 — Contact</span>
              <h2 className="vc-section-title">함께 <em>연구합시다</em></h2>
            </div>
            <p className="vc-section-lede">
              대학원생 지원, 공동 연구, 협업 문의를 환영합니다. 관심 있는 주제와 함께 이메일로 연락 주세요.
            </p>
          </div>
          <div className="vc-contact-grid">
            <div className="vc-contact-block">
              <h4>Lab · 연락처</h4>
              <div className="vc-contact-row"><div className="vc-contact-label">Address</div><div>서울시 노원구 공릉로 232<br/>서울과학기술대학교 프론티어관 7층</div></div>
              <div className="vc-contact-row"><div className="vc-contact-label">Advisor</div><div>정희민 부교수 · Heemin Jung, Ph.D.</div></div>
              <div className="vc-contact-row"><div className="vc-contact-label">Dept.</div><div>인공지능응용학과</div></div>
              <div className="vc-contact-row"><div className="vc-contact-label">Email</div><div>hmjung@seoultech.ac.kr</div></div>
            </div>
            <div className="vc-contact-block">
              <h4>Prospective Students · 지원 안내</h4>
              <p style={{color:'var(--muted-dark)', fontSize:14.5, lineHeight:1.65, margin:0}}>
                2026학년도 후기 대학원생을 모집합니다.<br/>
                컴퓨터 비전, 3D 그래픽스, XR 인터랙션에 관심 있는 학부생 및 석사 지원자를 환영합니다. 지원 전 이메일로 관심 주제와 CV를 보내주세요.
              </p>
              <div className="vc-cta-card">
                <div>
                  <div className="k">Write to advisor</div>
                  <div className="v">hmjung@seoultech.ac.kr</div>
                </div>
                <div className="vc-cta-arrow">→</div>
              </div>
            </div>
          </div>

          <footer className="vc-footer">
            <div className="vc-footer-brand">Immersive Media Lab</div>
            <div>© 2026 SeoulTech · Dept. of Applied AI</div>
            <div className="vc-mono">Ver. 2026.07 — Immersive</div>
          </footer>
        </div>
      </section>
    </div>
  );
};

window.VariantC = VariantC;
