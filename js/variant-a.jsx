// 시안 A - Editorial Serif (담백 버전 · quiet edition)
// 학술 저널 스타일. Fraunces 세리프 헤드라인 + Pretendard 본문
// 카피를 최소한으로 줄이고, 여백과 타이포로 말하도록 재구성

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
        .va-brand { display: flex; align-items: baseline; gap: 12px; }
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
        .va-nav-right { display: flex; align-items: center; gap: 12px; font-size: 12px; color: var(--muted); }
        .va-nav-locale { padding: 4px 10px; border: 1px solid rgba(22,23,27,0.15); border-radius: 999px; }

        .va-section { max-width: 1360px; margin: 0 auto; padding: 0 40px; }

        /* HERO — 담백 */
        .va-hero { padding: 96px 0 96px; position: relative; }
        .va-hero-grid { display: grid; grid-template-columns: 1.35fr 1fr; gap: 60px; align-items: end; }
        .va-issue-line {
          padding-bottom: 14px; margin-bottom: 56px;
          border-bottom: 1px solid var(--ink);
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px; letter-spacing: 0.06em; text-transform: uppercase;
          display: flex; justify-content: space-between;
        }
        .va-hero-title { font-family: 'Fraunces', serif; font-weight: 400; font-size: clamp(56px, 8.5vw, 128px); line-height: 0.92; letter-spacing: -0.035em; margin: 0 0 40px; }
        .va-hero-title em { font-style: italic; font-weight: 300; color: var(--accent); }
        .va-hero-lead { font-size: 17px; line-height: 1.55; color: var(--ink); max-width: 40ch; margin-bottom: 32px; }
        .va-hero-meta { display: flex; gap: 16px; align-items: center; }
        .va-cta { padding: 12px 20px; background: var(--ink); color: var(--paper); font-size: 13px; text-decoration: none; display: inline-flex; align-items: center; gap: 10px; border-radius: 2px; }
        .va-cta:hover { background: var(--accent); }
        .va-cta-ghost { padding: 12px 0; color: var(--ink); font-size: 13px; text-decoration: none; border-bottom: 1px solid var(--ink); }

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

        /* SECTION HEADER — 간결화 */
        .va-section-head {
          padding: 100px 0 40px;
          display: grid; grid-template-columns: auto 1fr; gap: 40px;
          align-items: baseline;
        }
        .va-section-mono { color: var(--muted); }
        .va-section-title { font-family: 'Fraunces', serif; font-size: clamp(36px, 4vw, 56px); font-weight: 400; line-height: 1.05; letter-spacing: -0.02em; margin: 0; }
        .va-section-title em { font-style: italic; color: var(--accent); font-weight: 300; }

        /* ABOUT — 인용문 + 키워드 + 1문단 */
        .va-about { padding: 40px 0 40px; display: grid; grid-template-columns: 1fr 1fr; gap: 80px; }
        .va-quote { font-family: 'Fraunces', serif; font-size: 32px; font-style: italic; line-height: 1.2; letter-spacing: -0.015em; color: var(--ink); margin: 0 0 20px; font-weight: 300; }
        .va-quote-author { color: var(--muted); font-size: 13px; }
        .va-about-body { font-size: 16px; line-height: 1.7; color: var(--ink); }
        .va-keyword-list { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 32px; }
        .va-keyword { padding: 5px 12px; border: 1px solid rgba(22,23,27,0.25); border-radius: 999px; font-size: 12px; color: var(--ink); }

        /* NEWS */
        .va-news-list { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; padding: 20px 0 40px; }
        .va-news-item { cursor: pointer; }
        .va-news-thumb { width: 100%; aspect-ratio: 4/3; overflow: hidden; background: #ddd; border-radius: 2px; margin-bottom: 16px; }
        .va-news-thumb img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s; filter: saturate(0.85); }
        .va-news-item:hover .va-news-thumb img { transform: scale(1.03); }
        .va-news-meta { display: flex; gap: 10px; align-items: center; margin-bottom: 8px; }
        .va-news-date { color: var(--muted); }
        .va-news-tag { padding: 2px 8px; border: 1px solid rgba(22,23,27,0.2); border-radius: 2px; font-size: 10px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--ink); }
        .va-news-title { font-family: 'Fraunces', serif; font-size: 20px; line-height: 1.3; letter-spacing: -0.015em; font-weight: 400; margin: 0; }
        .va-news-more { display: flex; justify-content: flex-end; margin-top: 8px; }
        .va-news-more a { text-decoration: none; color: var(--ink); font-size: 13px; border-bottom: 1px solid var(--ink); padding-bottom: 2px; }

        /* RESEARCH */
        .va-research-grid { display: grid; grid-template-columns: 5fr 4fr 3fr; grid-auto-rows: auto; gap: 8px; padding: 20px 0 40px; }
        .va-research-item { position: relative; overflow: hidden; background: #111; border-radius: 2px; }
        .va-research-item img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s, filter 0.6s; filter: saturate(0.85) brightness(0.95); }
        .va-research-item:hover img { transform: scale(1.04); filter: saturate(1) brightness(1); }
        .va-research-caption {
          position: absolute; inset: 0;
          padding: 20px; display: flex; flex-direction: column; justify-content: flex-end;
          background: linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.75) 100%);
          color: var(--paper);
        }
        .va-research-caption .tag { color: rgba(246,244,239,0.7); margin-bottom: 6px; }
        .va-research-caption .t { font-family: 'Fraunces', serif; font-size: 22px; letter-spacing: -0.015em; margin: 0; font-weight: 400; }
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
        .va-members-grid { display: grid; grid-template-columns: repeat(6, 1fr); gap: 24px; padding: 20px 0 40px; }
        .va-member { text-align: left; }
        .va-member-photo {
          width: 100%; aspect-ratio: 1/1;
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

        /* CONTACT — 간결 */
        .va-contact { padding: 40px 0 120px; display: grid; grid-template-columns: 1fr 1fr; gap: 80px; }
        .va-contact-block h4 { font-family: 'Fraunces', serif; font-size: 22px; font-weight: 400; margin: 0 0 20px; letter-spacing: -0.015em; }
        .va-contact-row { display: grid; grid-template-columns: 100px 1fr; gap: 20px; padding: 12px 0; border-top: 1px solid rgba(22,23,27,0.12); font-size: 14px; }
        .va-contact-row:last-child { border-bottom: 1px solid rgba(22,23,27,0.12); }
        .va-contact-label { color: var(--muted); }
        .va-contact-note { font-size: 14px; line-height: 1.65; color: var(--muted); margin: 0 0 20px; }
        .va-contact-cta {
          padding: 20px 24px; background: var(--ink); color: var(--paper); border-radius: 2px;
          display: flex; justify-content: space-between; align-items: center; gap: 12px;
        }
        .va-contact-cta .lg { font-family: 'Fraunces', serif; font-size: 20px; letter-spacing: -0.015em; }
        .va-contact-cta a { color: var(--paper); text-decoration: none; }

        /* FOOTER — 최소 */
        .va-footer { padding: 32px 0 48px; border-top: 1px solid rgba(22,23,27,0.15); }
        .va-footer-inner { display: flex; justify-content: space-between; align-items: center; color: var(--muted); font-size: 12px; }
        .va-footer-brand { font-family: 'Fraunces', serif; font-size: 16px; color: var(--ink); }
      `}</style>

      {/* NAV */}
      <nav className="va-nav">
        <div className="va-nav-inner">
          <div className="va-brand">
            <span className="va-brand-mark"></span>
            <div>
              <div className="va-brand-name">Immersive Media Lab</div>
              <div className="va-brand-sub">SeoulTech</div>
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
            <span className="va-nav-locale va-mono">KO / EN</span>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="va-section va-hero" data-screen-label="Hero">
        <div className="va-issue-line">
          <span>Immersive Media Lab · 실감미디어연구실</span>
          <span>서울과학기술대학교 · 인공지능응용학과</span>
        </div>

        <div className="va-hero-grid">
          <div>
            <h1 className="va-hero-title">
              Where <em>imagination</em>
              <br />meets computation.
            </h1>
            <p className="va-hero-lead">
              VR·AR·XR, 3D 재구성, 뉴럴 렌더링. 인간의 감각과 기계의 지각을 잇는 미디어를 연구합니다.
            </p>
            <div className="va-hero-meta">
              <a className="va-cta" href="#research">
                연구 살펴보기 <span>→</span>
              </a>
              <a className="va-cta-ghost" href="#contact">대학원 지원</a>
            </div>
          </div>

          <div>
            <div className="va-hero-3d">
              <span className="va-hero-3d-label va-mono">FIG.01 — Point Cloud</span>
              <span className="va-hero-3d-hint va-mono">
                <span className="dot"></span>
                Drag to rotate
              </span>
              <Hero3D style="points" accent="#4a7fbc" bg="transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="va-section" data-screen-label="About" id="about">
        <div className="va-section-head">
          <span className="va-mono va-section-mono">§ 01 — About</span>
          <h2 className="va-section-title">연구실 <em>소개</em></h2>
        </div>
        <div className="va-about">
          <div>
            <blockquote className="va-quote">
              "Everything you can imagine<br/>is real."
            </blockquote>
            <div className="va-quote-author">— Pablo Picasso</div>

            <div className="va-keyword-list">
              <span className="va-keyword">Immersive Media</span>
              <span className="va-keyword">VR / AR / XR</span>
              <span className="va-keyword">3D Reconstruction</span>
              <span className="va-keyword">Neural Rendering</span>
              <span className="va-keyword">Human-Centered</span>
            </div>
          </div>
          <div className="va-about-body">
            <p>
              실감미디어연구실은 서울과학기술대학교 인공지능응용학과 소속의 연구실입니다. 공간의 재구성, 지각의 확장, 경험의 설계 — 세 축을 중심으로 몰입형 미디어 기술을 탐구합니다.
            </p>
          </div>
        </div>
      </section>

      {/* NEWS */}
      <section className="va-section" data-screen-label="News" id="news">
        <div className="va-section-head">
          <span className="va-mono va-section-mono">§ 02 — News</span>
          <h2 className="va-section-title">최근 <em>소식</em></h2>
        </div>
        <div className="va-news-list">
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
            </article>
          ))}
        </div>
        <div className="va-news-more">
          <a href="#news">모든 소식 →</a>
        </div>
      </section>

      {/* RESEARCH */}
      <section className="va-section" data-screen-label="Research" id="research">
        <div className="va-section-head">
          <span className="va-mono va-section-mono">§ 03 — Research</span>
          <h2 className="va-section-title">진행 중인 <em>연구</em></h2>
        </div>
        <div className="va-research-grid">
          {projects.slice(0, 5).map((p, i) => (
            <a key={p.id} className={`va-research-item va-r-${['a','b','c','d','e'][i]}`}>
              <img src={p.image} alt={p.title} />
              <div className="va-research-caption">
                <span className="va-mono tag">{p.tag} · {p.year}</span>
                <h3 className="t">{p.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* PUBLICATIONS */}
      <section className="va-section" data-screen-label="Publications" id="publications">
        <div className="va-section-head">
          <span className="va-mono va-section-mono">§ 04 — Publications</span>
          <h2 className="va-section-title">최근 <em>논문</em></h2>
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
                <span>{p.venue}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MEMBERS */}
      <section className="va-section" data-screen-label="Members" id="members">
        <div className="va-section-head">
          <span className="va-mono va-section-mono">§ 05 — Members</span>
          <h2 className="va-section-title"><em>구성원</em></h2>
        </div>
        <div className="va-members-grid">
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
      <section className="va-section" data-screen-label="Contact" id="contact">
        <div className="va-section-head">
          <span className="va-mono va-section-mono">§ 06 — Contact</span>
          <h2 className="va-section-title"><em>연락</em></h2>
        </div>
        <div className="va-contact">
          <div className="va-contact-block">
            <h4>Lab</h4>
            <div className="va-contact-row">
              <div className="va-contact-label va-mono">Address</div>
              <div>서울시 노원구 공릉로 232<br/>서울과학기술대학교</div>
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
            <h4>Prospective Students</h4>
            <p className="va-contact-note">
              대학원생을 상시 모집합니다. 관심 주제와 CV를 이메일로 보내주세요.
            </p>
            <div className="va-contact-cta">
              <div>
                <div className="va-mono" style={{opacity:0.6, marginBottom:4}}>WRITE TO</div>
                <div className="lg">hmjung@seoultech.ac.kr</div>
              </div>
              <a>→</a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="va-section va-footer">
        <div className="va-footer-inner">
          <div className="va-footer-brand">Immersive Media Lab</div>
          <div>© 2026 SeoulTech</div>
        </div>
      </footer>
    </div>
  );
};

window.VariantA = VariantA;
