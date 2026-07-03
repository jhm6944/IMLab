// 홈 페이지 — Compact Editorial
// 각 배열의 앞 3개(=최신 3개)만 노출. 편집자는 data.jsx의 배열 맨 앞에 항목을 추가하면 됨.

function Home() {
  const info = window.LAB_INFO;
  const news = (window.NEWS || []).slice(0, 3);
  const pubs = (window.PUBLICATIONS || []).slice(0, 3);
  const projects = (window.PROJECTS || []).slice(0, 3);

  return (
    <div className="hm-root">
      <style>{`
        /* HERO — 축소판 */
        .hm-hero { padding: 56px 0 72px; }
        .hm-issue-line {
          padding-bottom: 14px; margin-bottom: 40px;
          border-bottom: 1px solid var(--ink);
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px; letter-spacing: 0.06em; text-transform: uppercase;
          display: flex; justify-content: space-between; gap: 12px; flex-wrap: wrap;
        }
        .hm-hero-grid { display: grid; grid-template-columns: 1.4fr 1fr; gap: 56px; align-items: stretch; min-height: 380px; }
        .hm-hero-copy { display: flex; flex-direction: column; justify-content: center; }
        .hm-hero-title {
          font-family: 'Fraunces', serif; font-weight: 400;
          font-size: clamp(48px, 6.2vw, 92px); line-height: 0.95; letter-spacing: -0.03em;
          margin: 0 0 28px;
        }
        .hm-hero-title em { font-style: italic; font-weight: 300; color: var(--accent); }
        .hm-hero-lead { font-size: 16.5px; line-height: 1.6; color: var(--ink); max-width: 42ch; margin: 0 0 28px; }
        .hm-hero-meta { display: flex; gap: 20px; align-items: center; flex-wrap: wrap; }

        .hm-hero-3d {
          position: relative;
          background: linear-gradient(180deg, #10121a 0%, #050810 100%);
          border-radius: 4px;
          overflow: hidden;
          min-height: 380px;
        }
        .hm-hero-3d-label { position: absolute; top: 16px; left: 16px; z-index: 2; color: rgba(246,244,239,0.55); pointer-events: none; }
        .hm-hero-3d-hint { position: absolute; bottom: 16px; right: 16px; z-index: 2; color: rgba(246,244,239,0.55); pointer-events: none; display: flex; align-items: center; gap: 8px; }
        .hm-hero-3d-hint .dot { width: 6px; height: 6px; background: rgba(246,244,239,0.4); border-radius: 50%; animation: hmBlink 1.6s infinite; }
        @keyframes hmBlink { 0%,100% { opacity: 0.3; } 50% { opacity: 1; } }

        /* SNAPSHOT BAR — 히어로 바로 아래 3열 수치 요약 */
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

        /* 최신 News 3개 */
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

        /* 최신 Publications 3개 - 썸네일 카드 */
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
        .hm-pub-thumb { aspect-ratio: 16/10; overflow: hidden; background: #111; position: relative; }
        .hm-pub-thumb img { width: 100%; height: 100%; object-fit: cover; filter: saturate(0.85) brightness(0.95); transition: transform 0.6s; }
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

        /* Recruit 배너 */
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
        .hm-recruit-lead { color: rgba(246,244,239,0.75); font-size: 15px; line-height: 1.6; margin: 0 0 20px; max-width: 42ch; }
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

        /* ABOUT 짧은 요약 */
        .hm-about-block { padding: 32px 0 16px; display: grid; grid-template-columns: 1fr 1.2fr; gap: 80px; }
        .hm-quote { font-family: 'Fraunces', serif; font-size: 30px; font-style: italic; line-height: 1.2; letter-spacing: -0.015em; margin: 0 0 12px; font-weight: 300; }
        .hm-quote-author { color: var(--muted); font-size: 13px; }
        .hm-keyword-list { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 28px; }
        .hm-keyword { padding: 5px 12px; border: 1px solid rgba(22,23,27,0.25); border-radius: 999px; font-size: 12px; }
        .hm-about-body { font-size: 16px; line-height: 1.7; }
        .hm-about-cta { margin-top: 24px; display: flex; gap: 16px; }

        /* Research strip — 5개 -> 3개 축소 그리드 */
        .hm-research-strip { display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 8px; padding: 8px 0 32px; }
        .hm-research-item { position: relative; overflow: hidden; background: #111; border-radius: 2px; display: block; }
        .hm-research-item img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s, filter 0.6s; filter: saturate(0.85) brightness(0.95); }
        .hm-research-item:hover img { transform: scale(1.04); filter: saturate(1) brightness(1); }
        .hm-research-caption {
          position: absolute; inset: 0; padding: 20px;
          display: flex; flex-direction: column; justify-content: flex-end;
          background: linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.75) 100%);
          color: var(--paper);
        }
        .hm-research-caption .tag { color: rgba(246,244,239,0.7); margin-bottom: 6px; }
        .hm-research-caption .t { font-family: 'Fraunces', serif; font-size: 20px; letter-spacing: -0.015em; margin: 0; font-weight: 400; }
        .hm-r-large { aspect-ratio: 16/10; }
        .hm-r-small { aspect-ratio: 3/4; }

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
          .hm-r-large, .hm-r-small { aspect-ratio: 4/3; }
        }
      `}</style>

      {/* HERO */}
      <section className="im-section hm-hero" data-screen-label="Hero">
        <div className="hm-issue-line">
          <span>Immersive Media Lab · 실감미디어연구실</span>
          <span>서울과학기술대학교 · 인공지능응용학과</span>
          <span>Vol.01 · 2026 Summer</span>
        </div>

        <div className="hm-hero-grid">
          <div className="hm-hero-copy">
            <h1 className="hm-hero-title">
              Where <em>imagination</em>
              <br />meets computation.
            </h1>
            <p className="hm-hero-lead">
              VR·AR·XR, 3D 재구성, 뉴럴 렌더링. 인간의 감각과 기계의 지각을 잇는 몰입형 미디어를 연구합니다.
            </p>
            <div className="hm-hero-meta">
              <a className="im-cta" href="research.html">
                연구 살펴보기 <span>→</span>
              </a>
              <a className="im-cta-ghost" href="contact.html">대학원 지원</a>
            </div>
          </div>

          <div className="hm-hero-3d">
            <span className="hm-hero-3d-label im-mono">FIG.01 — Point Cloud</span>
            <span className="hm-hero-3d-hint im-mono">
              <span className="dot"></span>
              Drag to rotate
            </span>
            <Hero3D style="points" accent="#4a7fbc" bg="transparent" />
          </div>
        </div>

        {/* SNAPSHOT 4열 */}
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
            <div className="hm-snap-value">{(window.PROJECTS || []).length}<span style={{color:'var(--muted)'}}> ongoing</span></div>
          </div>
          <div className="hm-snap-cell">
            <div className="hm-snap-label im-mono">Members</div>
            <div className="hm-snap-value">{(window.MEMBERS || []).length}<span style={{color:'var(--muted)'}}> researchers</span></div>
          </div>
        </div>
      </section>

      {/* LATEST NEWS 3 */}
      <section className="im-section" data-screen-label="Latest News">
        <div className="im-section-head">
          <span className="im-mono im-section-mono">§ 01 — Latest News</span>
          <h2 className="im-section-title">최근 <em>소식</em></h2>
          <a className="im-section-link" href="news.html">모든 소식 →</a>
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

      {/* LATEST PUBLICATIONS 3 */}
      <section className="im-section" data-screen-label="Latest Publications">
        <div className="im-section-head">
          <span className="im-mono im-section-mono">§ 02 — Latest Publications</span>
          <h2 className="im-section-title">최근 <em>논문</em></h2>
          <a className="im-section-link" href="publications.html">전체 논문 →</a>
        </div>
        <div className="hm-pubs-list">
          {pubs.map((p, i) => (
            <a key={i} className="hm-pub-card" href="publications.html">
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

      {/* ONGOING RESEARCH strip */}
      <section className="im-section" data-screen-label="Research Preview">
        <div className="im-section-head">
          <span className="im-mono im-section-mono">§ 03 — Ongoing Research</span>
          <h2 className="im-section-title">진행 중인 <em>연구</em></h2>
          <a className="im-section-link" href="research.html">모든 연구 →</a>
        </div>
        <div className="hm-research-strip">
          {projects.map((p, i) => (
            <a key={p.id} className={`hm-research-item ${i === 0 ? 'hm-r-large' : 'hm-r-small'}`} href="research.html">
              <img src={p.image} alt={p.title} />
              <div className="hm-research-caption">
                <span className="im-mono tag">{p.tag} · {p.year}</span>
                <h3 className="t">{p.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* RECRUIT BANNER */}
      <section className="im-section" data-screen-label="Recruit">
        <div className="hm-recruit">
          <div>
            <div className="hm-recruit-mono im-mono">■ 2026 Fall Semester · Recruiting</div>
            <h3 className="hm-recruit-title">
              몰입형 미디어를<br />
              <em>함께 연구할</em> 대학원생을 찾습니다.
            </h3>
            <p className="hm-recruit-lead">
              컴퓨터 비전, 3D 그래픽스, VR/AR, 뉴럴 렌더링에 관심 있는 학생 환영합니다. 상시 지원 가능하며, CV와 관심 주제를 이메일로 보내주세요.
            </p>
            <a className="hm-recruit-cta" href="contact.html">지원 안내 <span>→</span></a>
          </div>
          <div className="hm-recruit-right">
            <div className="hm-recruit-item"><span className="num im-mono">01</span><span>석·박사 통합과정 및 석사·박사 신입생</span></div>
            <div className="hm-recruit-item"><span className="num im-mono">02</span><span>학부 인턴 (Computer Vision · Graphics 관심자)</span></div>
            <div className="hm-recruit-item"><span className="num im-mono">03</span><span>연구원 및 방문 연구자 상시 협력</span></div>
          </div>
        </div>
      </section>

      {/* ABOUT (짧게) */}
      <section className="im-section" data-screen-label="About">
        <div className="im-section-head">
          <span className="im-mono im-section-mono">§ 04 — About</span>
          <h2 className="im-section-title">연구실 <em>소개</em></h2>
          <a className="im-section-link" href="members.html">구성원 보기 →</a>
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
            <p>{info.aboutKo}</p>
            <div className="hm-about-cta">
              <a className="im-cta-ghost" href="research.html">연구 분야</a>
              <a className="im-cta-ghost" href="contact.html">문의</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

window.Home = Home;
