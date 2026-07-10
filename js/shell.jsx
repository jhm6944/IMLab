// Common shell: Nav + Footer + global styles
// Each page uses <Shell active="research"><PageBody/></Shell>.

function ShellStyles() {
  return (
    <style>{`
      :root {
        --ink: #16171b;
        --paper: #f6f4ef;
        --paper-2: #ede9de;
        --rule: #16171b;
        --muted: #6b6a63;
        --accent: #1B365D;
        --accent-2: #7A2E3B;
      }
      * { box-sizing: border-box; }
      html, body { margin: 0; padding: 0; background: var(--paper); color: var(--ink); }
      body {
        font-family: 'Pretendard Variable', 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
        font-weight: 350;
        font-size: 15px;
        line-height: 1.6;
        letter-spacing: -0.005em;
      }
      a { color: inherit; text-decoration: none; }
      img { display: block; max-width: 100%; }
      #root { min-height: 100vh; }

      .im-serif { font-family: 'Fraunces', 'Instrument Serif', 'Noto Serif KR', serif; font-weight: 400; letter-spacing: -0.02em; }
      .im-mono { font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 11px; letter-spacing: 0.06em; text-transform: uppercase; }

      /* NAV */
      .im-nav {
        position: sticky; top: 0; z-index: 50;
        background: color-mix(in oklab, var(--paper) 92%, transparent);
        backdrop-filter: blur(10px);
        border-bottom: 1px solid rgba(22,23,27,0.08);
      }
      .im-nav-inner {
        max-width: 1360px; margin: 0 auto;
        padding: 18px 40px;
        display: grid; grid-template-columns: auto 1fr auto; align-items: center; gap: 40px;
      }
      .im-brand { display: flex; align-items: center; gap: 14px; }
      .im-brand-mark {
        width: 44px; height: 33px; /* preserve 302×228 aspect of the mark */
        display: inline-flex; align-items: center; justify-content: center;
        flex-shrink: 0;
      }
      .im-brand-mark img,
      .im-brand-mark svg { width: 100%; height: 100%; display: block; object-fit: contain; }
      .im-brand-name { font-family: 'Fraunces', serif; font-size: 20px; font-weight: 500; letter-spacing: -0.02em; line-height: 1.1; }
      .im-brand-sub { font-size: 10.5px; color: var(--muted); letter-spacing: 0.1em; text-transform: uppercase; margin-top: 2px; }
      .im-nav-list { display: flex; gap: 4px; justify-content: center; }
      .im-nav-link {
        padding: 8px 14px; border-radius: 999px;
        font-size: 13.5px; color: var(--ink); cursor: pointer;
        transition: background 0.2s, color 0.2s;
      }
      .im-nav-link:hover { background: rgba(22,23,27,0.05); }
      .im-nav-link.active { background: var(--ink); color: var(--paper); }
      .im-nav-right {
        display: flex; flex-direction: column; align-items: flex-end; justify-content: center;
        gap: 2px;
        text-align: right;
      }
      .im-nav-right .aff { font-size: 12.5px; color: var(--ink); font-weight: 500; letter-spacing: -0.005em; }
      .im-nav-right .dept { font-size: 11px; color: var(--muted); letter-spacing: 0.02em; }

      /* SECTION */
      .im-section { max-width: 1360px; margin: 0 auto; padding: 0 40px; }

      .im-section-head {
        padding: 96px 0 32px;
        display: grid; grid-template-columns: auto 1fr auto; gap: 40px;
        align-items: baseline;
      }
      .im-section-mono { color: var(--muted); }
      .im-section-title {
        font-family: 'Fraunces', serif;
        font-size: clamp(32px, 3.6vw, 52px);
        font-weight: 400; line-height: 1.05; letter-spacing: -0.02em;
        margin: 0;
      }
      .im-section-title em { font-style: italic; color: var(--accent); font-weight: 300; }
      .im-section-link { color: var(--ink); font-size: 13px; border-bottom: 1px solid var(--ink); padding-bottom: 2px; white-space: nowrap; }

      /* CTA */
      .im-cta { padding: 12px 20px; background: var(--ink); color: var(--paper); font-size: 13px; text-decoration: none; display: inline-flex; align-items: center; gap: 10px; border-radius: 2px; transition: background 0.2s; }
      .im-cta:hover { background: var(--accent); }
      .im-cta-ghost { padding: 12px 0; color: var(--ink); font-size: 13px; text-decoration: none; border-bottom: 1px solid var(--ink); }

      /* PAGE HEADER (shared) */
      .im-page-header { padding: 56px 0 40px; border-bottom: 1px solid rgba(22,23,27,0.12); margin-bottom: 8px; }
      .im-page-header .breadcrumb { color: var(--muted); margin-bottom: 20px; }
      .im-page-header h1 {
        font-family: 'Fraunces', serif; font-weight: 400;
        font-size: clamp(48px, 6vw, 88px); line-height: 0.95; letter-spacing: -0.03em;
        margin: 0 0 12px;
      }
      .im-page-header h1 em { font-style: italic; color: var(--accent); font-weight: 300; }
      .im-page-header .sub { color: var(--muted); font-size: 15px; max-width: 70ch; }

      /* FOOTER */
      .im-footer { padding: 80px 0 48px; border-top: 1px solid rgba(22,23,27,0.15); margin-top: 100px; }
      .im-footer-grid {
        display: grid; grid-template-columns: 1.5fr 1fr 1fr 1fr; gap: 40px;
        padding-bottom: 40px;
      }
      .im-footer-brand h4 { font-family: 'Fraunces', serif; font-weight: 400; font-size: 24px; margin: 0 0 8px; letter-spacing: -0.02em; }
      .im-footer-brand .aff { color: var(--muted); font-size: 13px; line-height: 1.5; }
      .im-footer-col h5 { font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--muted); margin: 0 0 12px; font-weight: 500; }
      .im-footer-col ul { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 6px; }
      .im-footer-col li a { font-size: 13.5px; color: var(--ink); }
      .im-footer-col li a:hover { color: var(--accent); }
      .im-footer-bottom {
        display: flex; justify-content: space-between; align-items: center;
        color: var(--muted); font-size: 12px;
        padding-top: 24px; border-top: 1px solid rgba(22,23,27,0.12);
      }

      /* CARDS - shared */
      .im-thumb { width: 100%; overflow: hidden; background: #ddd; border-radius: 2px; }
      .im-thumb img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s; filter: saturate(0.9); }
      .im-thumb-hover:hover .im-thumb img, a:hover > .im-thumb img { transform: scale(1.03); filter: saturate(1); }

      @media (max-width: 820px) {
        .im-nav-inner { padding: 12px 20px; grid-template-columns: auto 1fr; gap: 16px; }
        .im-nav-list { grid-column: 1 / -1; flex-wrap: wrap; justify-content: flex-start; gap: 8px; }
        .im-nav-right { display: none; }
        .im-section { padding: 0 20px; }
        .im-footer-grid { grid-template-columns: 1fr; gap: 32px; } /* 푸터를 1열로 변경 */

        /* 모바일에서는 메인 로고와 글씨를 조금 줄입니다 */
        .im-brand-name { font-size: 17px; }
        .im-brand-mark { width: 36px; height: 27px; }
        
        /* 페이지 공통 헤더 제목 크기 축소 */
        .im-page-header h1 { font-size: clamp(36px, 10vw, 48px); }
      }
    `}</style>
  );
}

// IMMEDIA lab mark — the provisional 3D isometric "iML" mark supplied by the lab.
// Rendered from the raster asset in /assets/logo-mark.png so the exact line-art
// stays true to the source. Height is scaled to fit the nav row (~33px).
function LabMark() {
  return (
    <img
      src="assets/logo-mark.png"
      alt="Immersive Media Lab"
      draggable="false"
    />
  );
}

function Nav({ active = 'home' }) {
  const items = window.NAV_ITEMS;
  const info = window.LAB_INFO;
  return (
    <nav className="im-nav">
      <div className="im-nav-inner">
        <a href="index.html" className="im-brand" aria-label="Home">
          <span className="im-brand-mark"><LabMark /></span>
          <div>
            <div className="im-brand-name">Immersive Media Lab</div>
            <div className="im-brand-sub">IMMEDIA · SeoulTech</div>
          </div>
        </a>
        <div className="im-nav-list">
          {items.map(n => (
            <a
              key={n.key}
              href={n.href}
              className={`im-nav-link ${active === n.key ? 'active' : ''}`}
            >
              {n.en}
            </a>
          ))}
        </div>
        <div className="im-nav-right">
          <span className="aff">{info.affiliationEn}</span>
          <span className="dept">{info.departmentEn}</span>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  const info = window.LAB_INFO;
  return (
    <footer className="im-section im-footer">
      <div className="im-footer-grid">
        <div className="im-footer-brand">
          <h4>Immersive Media Lab</h4>
          <div className="aff">
            {info.affiliationEn}<br />
            {info.departmentEn}<br />
            232 Gongneung-ro, Nowon-gu, Seoul, Korea
          </div>
        </div>
        <div className="im-footer-col">
          <h5>Explore</h5>
          <ul>
            <li><a href="research.html">Research</a></li>
            <li><a href="publications.html">Publications</a></li>
            <li><a href="news.html">News</a></li>
          </ul>
        </div>
        <div className="im-footer-col">
          <h5>Lab</h5>
          <ul>
            <li><a href="members.html">Members</a></li>
            <li><a href="contact.html">Contact</a></li>
            <li><a href="contact.html">Join us</a></li>
          </ul>
        </div>
        <div className="im-footer-col">
          <h5>Contact</h5>
          <ul>
            <li><a href={`mailto:${info.email}`}>{info.email}</a></li>
            <li><a>@immedia_lab</a></li>
            <li><a>GitHub</a></li>
          </ul>
        </div>
      </div>
      <div className="im-footer-bottom">
        <span>© 2026 Immersive Media Lab · {info.affiliationEn}</span>
        <span className="im-mono">Last updated · 2026.07</span>
      </div>
    </footer>
  );
}

function Shell({ active, children }) {
  return (
    <React.Fragment>
      <ShellStyles />
      <Nav active={active} />
      {children}
      <Footer />
    </React.Fragment>
  );
}

Object.assign(window, { Shell, Nav, Footer, ShellStyles, LabMark });
