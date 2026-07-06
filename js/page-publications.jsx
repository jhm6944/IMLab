// Publications page — 5 categories with anchor jump-nav,
// classic reference-style entries (authors · title · venue · year),
// preceded by a thumbnail image.

const { useState: pp_useState, useEffect: pp_useEffect } = React;

function PublicationsPage() {
  const pubs = window.PUBLICATIONS || [];
  const cats = window.PUB_CATEGORIES || [];

  // Group publications by category, preserving array order (latest first).
  const grouped = cats.map(c => ({
    ...c,
    items: pubs.filter(p => p.category === c.key)
  }));

  // Track which category section is currently in view for the jump-nav.
  const [activeCat, setActiveCat] = pp_useState(cats[0]?.key || '');

  pp_useEffect(() => {
    const sections = cats.map(c => document.getElementById(`pp-cat-${c.key}`)).filter(Boolean);
    if (!sections.length) return;
    const obs = new IntersectionObserver((entries) => {
      // Choose the top-most section that is currently in view.
      const visible = entries.filter(e => e.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (visible[0]) {
        const id = visible[0].target.id.replace('pp-cat-', '');
        setActiveCat(id);
      }
    }, { rootMargin: '-100px 0px -60% 0px', threshold: 0 });
    sections.forEach(s => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  // Smooth-scroll to a category, accounting for the sticky nav.
  const jumpTo = (key) => {
    const el = document.getElementById(`pp-cat-${key}`);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 88;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  // Author list rendered with the current lab bolded.
  const renderAuthors = (authors) => {
    // Split on comma-space; bold the last author with initial "H." if their surname matches "Jung"
    // (kept generic — just bold entries containing "H. Jung").
    const parts = authors.split(/,\s*/);
    return parts.map((a, i) => {
      const isLab = /H\.\s*Jung/i.test(a);
      return (
        <React.Fragment key={i}>
          {isLab ? <strong>{a}</strong> : a}
          {i < parts.length - 1 ? ', ' : ''}
        </React.Fragment>
      );
    });
  };

  return (
    <div>
      <style>{`
        /* Anchor jump-nav — sits just below the page header, sticky */
        .pp-jump {
          position: sticky;
          top: 62px;
          z-index: 40;
          background: color-mix(in oklab, var(--paper) 94%, transparent);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid rgba(22,23,27,0.1);
          margin: 0 -40px 12px;
          padding: 12px 40px;
        }
        .pp-jump-inner {
          max-width: 1360px; margin: 0 auto;
          display: flex; gap: 8px; align-items: center;
          flex-wrap: wrap;
        }
        .pp-jump-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase;
          color: var(--muted);
          margin-right: 8px;
        }
        .pp-jump-btn {
          padding: 7px 14px;
          border: 1px solid rgba(22,23,27,0.2);
          border-radius: 999px;
          background: transparent;
          color: var(--ink);
          font-size: 12.5px;
          font-family: inherit;
          cursor: pointer;
          transition: background 0.2s, border-color 0.2s, color 0.2s;
          display: inline-flex; align-items: center; gap: 8px;
          white-space: nowrap;
        }
        .pp-jump-btn:hover {
          background: rgba(22,23,27,0.05);
          border-color: rgba(22,23,27,0.4);
        }
        .pp-jump-btn.active {
          background: var(--ink);
          color: var(--paper);
          border-color: var(--ink);
        }
        .pp-jump-btn .count {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          padding: 2px 6px;
          border-radius: 999px;
          background: rgba(22,23,27,0.08);
          color: var(--muted);
        }
        .pp-jump-btn.active .count {
          background: rgba(246,244,239,0.15);
          color: rgba(246,244,239,0.8);
        }

        /* Category section */
        .pp-cat { padding: 40px 0 8px; scroll-margin-top: 120px; }
        .pp-cat-head {
          display: grid; grid-template-columns: auto 1fr; gap: 24px; align-items: baseline;
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
          font-size: 18px;
          margin-left: 12px;
        }
        .pp-cat-count {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase;
          color: var(--muted);
          justify-self: end;
        }

        /* Reference-style entry */
        .pp-ref {
          display: grid;
          grid-template-columns: 96px 40px 1fr auto;
          gap: 20px;
          padding: 22px 4px;
          border-bottom: 1px solid rgba(22,23,27,0.1);
          align-items: start;
        }
        .pp-ref:last-child { border-bottom: none; }
        .pp-ref:hover { background: rgba(22,23,27,0.02); }

        .pp-ref-thumb {
          width: 96px;
          aspect-ratio: 4/3;
          overflow: hidden;
          background: #111;
          border-radius: 2px;
        }
        .pp-ref-thumb img {
          width: 100%; height: 100%;
          object-fit: cover;
          filter: saturate(0.85) brightness(0.95);
          transition: transform 0.6s, filter 0.6s;
        }
        .pp-ref:hover .pp-ref-thumb img {
          transform: scale(1.05);
          filter: saturate(1) brightness(1);
        }

        .pp-ref-num {
          font-family: 'Fraunces', serif;
          font-size: 22px;
          color: var(--muted);
          letter-spacing: -0.01em;
          line-height: 1;
          padding-top: 2px;
        }

        .pp-ref-body {
          font-family: 'Fraunces', serif;
          font-size: 15.5px;
          line-height: 1.55;
          letter-spacing: -0.005em;
          color: var(--ink);
        }
        .pp-ref-authors {
          font-family: 'Fraunces', serif;
          font-size: 14.5px;
          color: var(--muted);
          margin-bottom: 4px;
        }
        .pp-ref-authors strong {
          color: var(--ink);
          font-weight: 500;
        }
        .pp-ref-title {
          display: inline;
          font-family: 'Fraunces', serif;
          font-size: 17px;
          font-weight: 500;
          letter-spacing: -0.01em;
          color: var(--ink);
          line-height: 1.35;
        }
        .pp-ref-title::after { content: '.'; }
        .pp-ref-venue {
          font-style: italic;
          color: var(--accent);
        }
        .pp-ref-venue::before { content: ' '; }
        .pp-ref-tail {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.04em;
          color: var(--muted);
          text-transform: none;
        }
        .pp-ref-badge {
          display: inline-block;
          margin-left: 8px;
          padding: 1px 7px;
          background: var(--accent);
          color: var(--paper);
          font-family: 'JetBrains Mono', monospace;
          font-size: 9.5px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          border-radius: 2px;
          vertical-align: middle;
        }
        .pp-ref-badge.hl { background: var(--accent-2); }

        .pp-links {
          display: flex;
          gap: 6px;
          align-items: center;
          padding-top: 2px;
        }
        .pp-link {
          padding: 6px 12px;
          border: 1px solid rgba(22,23,27,0.2);
          border-radius: 999px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 10.5px;
          letter-spacing: 0.06em;
          color: var(--ink);
          text-decoration: none;
          transition: background 0.2s, border-color 0.2s;
          display: inline-flex; align-items: center; gap: 6px;
          white-space: nowrap;
        }
        .pp-link:hover { background: var(--ink); color: var(--paper); border-color: var(--ink); }
        .pp-link svg { width: 11px; height: 11px; }
        .pp-link.disabled { opacity: 0.3; pointer-events: none; }

        .pp-empty {
          padding: 32px 0;
          color: var(--muted);
          font-style: italic;
          font-family: 'Fraunces', serif;
          font-size: 15px;
        }

        @media (max-width: 820px) {
          .pp-jump { top: 0; margin: 0 -20px 12px; padding: 12px 20px; }
          .pp-ref {
            grid-template-columns: 80px 1fr;
            grid-template-areas:
              "thumb body"
              "thumb links";
            gap: 14px;
          }
          .pp-ref-thumb { grid-area: thumb; width: 80px; }
          .pp-ref-num { display: none; }
          .pp-ref-body { grid-area: body; font-size: 14.5px; }
          .pp-links { grid-area: links; flex-wrap: wrap; }
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
        </div>
      </section>

      {/* Category jump-nav */}
      <section className="im-section" data-screen-label="Category Nav">
        <div className="pp-jump">
          <div className="pp-jump-inner">
            <span className="pp-jump-label">Jump to</span>
            {grouped.map(g => (
              <button
                key={g.key}
                className={`pp-jump-btn ${activeCat === g.key ? 'active' : ''}`}
                onClick={() => jumpTo(g.key)}
              >
                <span>{g.label}</span>
                <span className="count">{g.items.length}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {grouped.map((g) => (
        <section
          key={g.key}
          id={`pp-cat-${g.key}`}
          className="im-section pp-cat"
          data-screen-label={g.label}
        >
          <div className="pp-cat-head">
            <h2 className="pp-cat-title">
              {g.label}<em>{g.labelKo}</em>
            </h2>
            <div className="pp-cat-count">
              {g.items.length} {g.items.length === 1 ? 'entry' : 'entries'}
            </div>
          </div>

          {g.items.length === 0 ? (
            <div className="pp-empty">— no entries yet</div>
          ) : (
            <div>
              {g.items.map((p, i) => (
                <div key={p.id || i} className="pp-ref">
                  <div className="pp-ref-thumb">
                    {/* p.image가 존재하면 이미지를 띄우고, 없으면 기본 검은색 박스 렌더링 */}
                    {p.image ? (
                      <img src={p.image} alt="" />
                    ) : (
                      <div style={{
                        width: '100%', 
                        height: '100%', 
                        background: '#111',  /* 기본 색상 (어두운 회색/검정) */
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative'
                      }}>
                        {/* 원하신다면 중앙에 랩실 로고 텍스트를 작게 넣을 수도 있습니다 */}
                        {/* <span className="im-mono" style={{color: 'rgba(255,255,255,0.2)', fontSize: '10px'}}>IMLab</span> */}
                    </div>
                  )}
                </div>
                  <div className="pp-ref-num">
                    [{String(g.items.length - i).padStart(2, '0')}]
                  </div>
                  <div className="pp-ref-body">
                    <div className="pp-ref-authors">
                      {renderAuthors(p.authors)}
                      <span className="pp-ref-tail"> · ({p.year})</span>
                    </div>
                    <span className="pp-ref-title">{p.title}</span>
                    <em className="pp-ref-venue">{p.venue}</em>
                    <span className="pp-ref-tail">, {p.month}, {p.day}, {p.year}.</span>
                    {p.tag && (
                      <span className={`pp-ref-badge ${p.tag === 'highlight' ? 'hl' : ''}`}>
                        {p.tag}
                      </span>
                    )}
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
