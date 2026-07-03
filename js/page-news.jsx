// News 리스트 페이지 — data.jsx의 NEWS 전체를 시간 역순으로 (배열 순서대로) 보여줌

function NewsPage() {
  const news = window.NEWS || [];

  return (
    <div>
      <style>{`
        .np-list { display: flex; flex-direction: column; padding: 8px 0 40px; }
        .np-item {
          display: grid; grid-template-columns: 120px 220px 1fr auto; gap: 32px;
          padding: 28px 0;
          border-top: 1px solid rgba(22,23,27,0.15);
          align-items: center;
          cursor: pointer;
          transition: background 0.2s, padding 0.2s;
        }
        .np-item:hover { background: rgba(22,23,27,0.03); padding-left: 12px; padding-right: 12px; }
        .np-item:last-child { border-bottom: 1px solid rgba(22,23,27,0.15); }
        .np-date { font-family: 'Fraunces', serif; font-size: 22px; color: var(--muted); }
        .np-thumb { aspect-ratio: 4/3; overflow: hidden; background: #ddd; border-radius: 2px; }
        .np-thumb img { width: 100%; height: 100%; object-fit: cover; filter: saturate(0.9); transition: transform 0.6s; }
        .np-item:hover .np-thumb img { transform: scale(1.03); }
        .np-meta { display: flex; align-items: center; gap: 12px; margin-bottom: 8px; }
        .np-tag { padding: 3px 10px; border: 1px solid rgba(22,23,27,0.2); border-radius: 2px; font-size: 10px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--ink); }
        .np-title { font-family: 'Fraunces', serif; font-size: 22px; line-height: 1.25; letter-spacing: -0.015em; margin: 0 0 8px; font-weight: 400; }
        .np-excerpt { color: var(--muted); font-size: 14px; line-height: 1.55; max-width: 60ch; margin: 0; }
        .np-arrow { font-family: 'Fraunces', serif; font-size: 24px; color: var(--muted); transition: transform 0.2s, color 0.2s; }
        .np-item:hover .np-arrow { transform: translateX(4px); color: var(--ink); }

        @media (max-width: 820px) {
          .np-item { grid-template-columns: 1fr; gap: 12px; padding: 20px 0; }
          .np-date { font-size: 14px; }
          .np-arrow { display: none; }
        }
      `}</style>

      <section className="im-section" data-screen-label="News Header">
        <div className="im-page-header">
          <div className="breadcrumb im-mono">Home / News</div>
          <h1>연구실 <em>소식</em></h1>
          <p className="sub">
            논문 채택, 수상, 대학원 모집, 협력 소식 등 연구실의 모든 활동을 이곳에서 확인할 수 있습니다.
          </p>
          <div className="meta">
            <div>
              <div className="im-mono count-label">Total news</div>
              <div className="count">{news.length}</div>
            </div>
            <div className="im-mono" style={{color:'var(--muted)'}}>Latest first</div>
          </div>
        </div>
      </section>

      <section className="im-section" data-screen-label="News List">
        <div className="np-list">
          {news.map((n, i) => (
            <article key={i} className="np-item">
              <div className="np-date">{n.date}</div>
              <div className="np-thumb"><img src={n.image} alt="" /></div>
              <div>
                <div className="np-meta">
                  <span className="im-mono np-tag">{n.tag}</span>
                </div>
                <h3 className="np-title">{n.title}</h3>
                <p className="np-excerpt">{n.excerpt}</p>
              </div>
              <div className="np-arrow">→</div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

window.NewsPage = NewsPage;
