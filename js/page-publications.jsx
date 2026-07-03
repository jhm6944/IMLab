// Publications 리스트 페이지 — data.jsx의 PUBLICATIONS 전체를 보여줌
// 연도별 그룹핑 + 썸네일 카드

function PublicationsPage() {
  const pubs = window.PUBLICATIONS || [];

  // 배열 순서 유지하되 연도별로 그룹화 (등장 순서대로)
  const groups = [];
  const seen = {};
  pubs.forEach((p) => {
    if (!seen[p.year]) {
      seen[p.year] = { year: p.year, items: [] };
      groups.push(seen[p.year]);
    }
    seen[p.year].items.push(p);
  });

  return (
    <div>
      <style>{`
        .pp-group { padding: 24px 0 8px; }
        .pp-year-line {
          display: grid; grid-template-columns: auto 1fr auto; gap: 24px; align-items: baseline;
          padding-bottom: 20px; border-bottom: 1px solid var(--ink); margin-bottom: 24px;
        }
        .pp-year { font-family: 'Fraunces', serif; font-size: 48px; font-weight: 400; letter-spacing: -0.02em; line-height: 1; }
        .pp-year-count { color: var(--muted); }

        .pp-list { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; padding-bottom: 32px; }
        .pp-card {
          display: grid; grid-template-columns: 140px 1fr; gap: 20px;
          padding: 20px;
          border: 1px solid rgba(22,23,27,0.1);
          border-radius: 2px;
          background: var(--paper);
          transition: border-color 0.2s, transform 0.3s;
          cursor: pointer;
          align-items: center;
        }
        .pp-card:hover { border-color: rgba(22,23,27,0.35); transform: translateY(-2px); }
        .pp-thumb { aspect-ratio: 4/3; overflow: hidden; background: #111; border-radius: 2px; position: relative; }
        .pp-thumb img { width: 100%; height: 100%; object-fit: cover; filter: saturate(0.85) brightness(0.95); }
        .pp-badge {
          position: absolute; top: 8px; left: 8px;
          padding: 2px 6px; background: var(--accent); color: var(--paper);
          font-size: 9px; letter-spacing: 0.08em; text-transform: uppercase;
          border-radius: 2px;
        }
        .pp-badge.hl { background: var(--accent-2); }
        .pp-venue { color: var(--muted); margin-bottom: 8px; }
        .pp-venue .badge-inline {
          display: inline-block; padding: 2px 8px; background: var(--ink); color: var(--paper);
          font-size: 10px; letter-spacing: 0.08em; text-transform: uppercase;
          border-radius: 2px; margin-right: 6px;
        }
        .pp-title { font-family: 'Fraunces', serif; font-size: 19px; line-height: 1.3; letter-spacing: -0.015em; margin: 0 0 8px; font-weight: 400; }
        .pp-authors { font-size: 12.5px; color: var(--muted); line-height: 1.5; }

        @media (max-width: 820px) {
          .pp-list { grid-template-columns: 1fr; }
          .pp-card { grid-template-columns: 100px 1fr; }
        }
      `}</style>

      <section className="im-section" data-screen-label="Publications Header">
        <div className="im-page-header">
          <div className="breadcrumb im-mono">Home / Publications</div>
          <h1>모든 <em>논문</em></h1>
          <p className="sub">
            연구실에서 발표한 학술 논문 전체 목록입니다. 최신 순으로 정렬되어 있으며, 연도별로 그룹화되어 표시됩니다.
          </p>
          <div className="meta">
            <div>
              <div className="im-mono count-label">Total publications</div>
              <div className="count">{pubs.length}</div>
            </div>
            <div className="im-mono" style={{color:'var(--muted)'}}>Grouped by year</div>
          </div>
        </div>
      </section>

      {groups.map((g) => (
        <section key={g.year} className="im-section pp-group" data-screen-label={`Year ${g.year}`}>
          <div className="pp-year-line">
            <div className="pp-year">{g.year}</div>
            <div></div>
            <div className="im-mono pp-year-count">{g.items.length} paper{g.items.length > 1 ? 's' : ''}</div>
          </div>
          <div className="pp-list">
            {g.items.map((p, i) => (
              <a key={i} className="pp-card">
                <div className="pp-thumb">
                  <img src={p.image} alt="" />
                  {p.tag && <span className={`im-mono pp-badge ${p.tag === 'highlight' ? 'hl' : ''}`}>{p.tag}</span>}
                </div>
                <div>
                  <div className="pp-venue im-mono">
                    <span className="badge-inline">{p.venue}</span>{p.year}
                  </div>
                  <h3 className="pp-title">{p.title}</h3>
                  <div className="pp-authors">{p.authors}</div>
                </div>
              </a>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

window.PublicationsPage = PublicationsPage;
