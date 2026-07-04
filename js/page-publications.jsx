// Publications page — grouped by 5 categories, one item per row with links.
// Categories: International Journals · Domestic Journals ·
//             International Conferences · Domestic Conferences · Patents
// Each row surfaces links to the paper (arXiv / DOI) and code (GitHub).

function PublicationsPage() {
  const pubs = window.PUBLICATIONS || [];
  const cats = window.PUB_CATEGORIES || [];

  // Group publications by category, preserving array order (latest first).
  const grouped = cats.map(c => ({
    ...c,
    items: pubs.filter(p => p.category === c.key)
  }));

  return (
    <div>
      <style>{`
        .pp-cat { padding: 32px 0 8px; }
        .pp-cat-head {
          display: grid; grid-template-columns: auto 1fr auto; gap: 24px; align-items: baseline;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--ink);
          margin-bottom: 8px;
        }
        .pp-cat-title {
          font-family: 'Fraunces', serif;
          font-size: 32px;
          font-weight: 400;
          letter-spacing: -0.02em;
          line-height: 1.1;
          margin: 0;
        }
        .pp-cat-title em {
          font-style: italic;
          color: var(--muted);
          font-weight: 300;
          font-size: 20px;
          margin-left: 12px;
        }
        .pp-cat-count {
          color: var(--muted);
        }

        /* One-row list (per user request: no two-column card layout) */
        .pp-row {
          display: grid;
          grid-template-columns: 80px 1fr auto;
          gap: 24px;
          padding: 22px 0;
          border-bottom: 1px solid rgba(22,23,27,0.1);
          align-items: center;
        }
        .pp-row:last-child { border-bottom: none; }
        .pp-year {
          font-family: 'Fraunces', serif;
          font-size: 26px;
          color: var(--muted);
          letter-spacing: -0.01em;
        }
        .pp-body { }
        .pp-venue-line {
          display: flex; gap: 10px; align-items: center;
          margin-bottom: 6px;
          flex-wrap: wrap;
        }
        .pp-venue {
          padding: 2px 8px;
          background: var(--ink);
          color: var(--paper);
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          border-radius: 2px;
        }
        .pp-badge {
          padding: 2px 8px;
          background: var(--accent);
          color: var(--paper);
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          border-radius: 2px;
        }
        .pp-badge.hl { background: var(--accent-2); }
        .pp-title {
          font-family: 'Fraunces', serif;
          font-size: 19px;
          line-height: 1.35;
          letter-spacing: -0.015em;
          margin: 0 0 4px;
          font-weight: 400;
        }
        .pp-authors {
          font-size: 13px;
          color: var(--muted);
        }
        .pp-links {
          display: flex;
          gap: 8px;
          align-items: center;
        }
        .pp-link {
          padding: 6px 12px;
          border: 1px solid rgba(22,23,27,0.2);
          border-radius: 999px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.06em;
          color: var(--ink);
          text-decoration: none;
          transition: background 0.2s, border-color 0.2s;
          display: inline-flex; align-items: center; gap: 6px;
          white-space: nowrap;
        }
        .pp-link:hover { background: var(--ink); color: var(--paper); border-color: var(--ink); }
        .pp-link svg { width: 12px; height: 12px; }
        .pp-link.disabled {
          opacity: 0.35;
          pointer-events: none;
        }

        .pp-empty {
          padding: 40px 0;
          color: var(--muted);
          font-style: italic;
          font-family: 'Fraunces', serif;
          font-size: 16px;
        }

        .pp-filter-group {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 24px;
        }
        
        .pp-filter-btn {
          padding: 8px 16px;
          border: 1px solid rgba(22,23,27,0.2);
          border-radius: 999px;
          font-size: 13.5px;
          color: var(--ink);
          text-decoration: none;
          transition: all 0.2s;
          background: var(--paper);
        }

        .pp-filter-btn:hover {
          background: var(--ink);
          color: var(--paper);
        }
        
        @media (max-width: 820px) {
          .pp-row { grid-template-columns: 1fr; gap: 8px; }
          .pp-year { font-size: 18px; }
          .pp-links { justify-content: flex-start; }
        }
      `}</style>

      <section className="im-section" data-screen-label="Publications Header">
        <div className="im-page-header">
          <div className="breadcrumb im-mono">Home / Publications</div>
          <h1>All <em>publications</em></h1>
          <p className="sub">
            All lab publications, grouped by venue type. Each entry links to the
            paper (arXiv / DOI) and, when available, the code repository.
          </p>

          <div className="pp-filter-group">
            {cats.map((c) => (
              <a key={c.key} href={`#cat-${c.key}`} className="pp-filter-btn">
                {c.labelKo} ({c.label})
              </a>
            ))}
          </div>
          
        </div>
      </section>

      {grouped.map((g) => (
        <section key={g.key} id={`cat-${g.key}`} className="im-section pp-cat" data-screen-label={g.label}>
          <div className="pp-cat-head">
            <h2 className="pp-cat-title">
              {g.label}<em>{g.labelKo}</em>
            </h2>
            <div></div>
            <div className="im-mono pp-cat-count">
              {g.items.length} {g.items.length === 1 ? 'entry' : 'entries'}
            </div>
          </div>

          {g.items.length === 0 ? (
            <div className="pp-empty">— no entries yet</div>
          ) : (
            <div>
              {g.items.map((p, i) => (
                <div key={p.id || i} className="pp-row">
                  <div className="pp-year">{p.year}</div>
                  <div className="pp-body">
                    <div className="pp-venue-line">
                      <span className="pp-venue">{p.venue}</span>
                      {p.tag && (
                        <span className={`pp-badge ${p.tag === 'highlight' ? 'hl' : ''}`}>
                          {p.tag}
                        </span>
                      )}
                    </div>
                    <h3 className="pp-title">{p.title}</h3>
                    <div className="pp-authors">{p.authors}</div>
                  </div>
                  <div className="pp-links">
                    <a
                      className={`pp-link ${p.paper ? '' : 'disabled'}`}
                      href={p.paper || '#'}
                      target={p.paper ? '_blank' : undefined}
                      rel={p.paper ? 'noopener' : undefined}
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                        <polyline points="14 2 14 8 20 8"/>
                      </svg>
                      Paper
                    </a>
                    <a
                      className={`pp-link ${p.code ? '' : 'disabled'}`}
                      href={p.code || '#'}
                      target={p.code ? '_blank' : undefined}
                      rel={p.code ? 'noopener' : undefined}
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.88-1.36-3.88-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.06-.72.08-.7.08-.7 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.1-.75.4-1.27.73-1.56-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.18-1.18 3.18-1.18.62 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.4-5.26 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.68.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"/>
                      </svg>
                      Code
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      ))}
    </div>
  );
}

window.PublicationsPage = PublicationsPage;
