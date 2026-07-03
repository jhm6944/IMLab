// Research 리스트 페이지 — data.jsx의 PROJECTS 전체를 보여줌

function ResearchPage() {
  const projects = window.PROJECTS || [];
  return (
    <div>
      <style>{`
        .rp-list { display: flex; flex-direction: column; padding: 8px 0 40px; }
        .rp-item {
          display: grid; grid-template-columns: 60px 1.2fr 1.8fr; gap: 40px;
          padding: 32px 0;
          border-top: 1px solid rgba(22,23,27,0.15);
          align-items: center;
        }
        .rp-item:last-child { border-bottom: 1px solid rgba(22,23,27,0.15); }
        .rp-index { font-family: 'Fraunces', serif; color: var(--muted); font-size: 18px; }
        .rp-thumb { aspect-ratio: 4/3; overflow: hidden; background: #111; border-radius: 2px; }
        .rp-thumb img { width: 100%; height: 100%; object-fit: cover; filter: saturate(0.9); transition: transform 0.6s; }
        .rp-item:hover .rp-thumb img { transform: scale(1.03); filter: saturate(1); }
        .rp-body .meta { display: flex; align-items: center; gap: 12px; margin-bottom: 12px; color: var(--muted); }
        .rp-body .tag-pill { padding: 3px 10px; border: 1px solid rgba(22,23,27,0.2); border-radius: 999px; font-size: 11px; color: var(--ink); letter-spacing: 0.04em; }
        .rp-title { font-family: 'Fraunces', serif; font-weight: 400; font-size: 30px; line-height: 1.15; letter-spacing: -0.02em; margin: 0 0 6px; }
        .rp-title-ko { color: var(--muted); font-size: 14px; margin-bottom: 12px; }
        .rp-desc { font-size: 15px; line-height: 1.6; color: var(--ink); margin: 0; max-width: 55ch; }
        .rp-cta { margin-top: 14px; }

        @media (max-width: 820px) {
          .rp-item { grid-template-columns: 1fr; gap: 16px; }
          .rp-index { display: none; }
        }
      `}</style>

      <section className="im-section" data-screen-label="Research Header">
        <div className="im-page-header">
          <div className="breadcrumb im-mono">Home / Research</div>
          <h1>진행 중인 <em>연구</em></h1>
          <p className="sub">
            공간의 재구성, 지각의 확장, 경험의 설계 — 세 축을 중심으로 몰입형 미디어의 다음 세대를 연구합니다. 최신 프로젝트가 상단에 표시됩니다.
          </p>
          <div className="meta">
            <div>
              <div className="im-mono count-label">Total projects</div>
              <div className="count">{projects.length}</div>
            </div>
            <div className="im-mono" style={{color:'var(--muted)'}}>Sorted by array order (latest first)</div>
          </div>
        </div>
      </section>

      <section className="im-section" data-screen-label="Research List">
        <div className="rp-list">
          {projects.map((p, i) => (
            <article key={p.id} className="rp-item">
              <div className="rp-index im-mono">{String(i + 1).padStart(2, '0')}</div>
              <div className="rp-thumb">
                <img src={p.image} alt={p.title} />
              </div>
              <div className="rp-body">
                <div className="meta">
                  <span className="tag-pill">{p.tag}</span>
                  <span className="im-mono">{p.year}</span>
                </div>
                <h3 className="rp-title">{p.title}</h3>
                <div className="rp-title-ko">{p.titleKo}</div>
                <p className="rp-desc">{p.desc}</p>
                <div className="rp-cta">
                  <a className="im-cta-ghost">자세히 보기</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

window.ResearchPage = ResearchPage;
