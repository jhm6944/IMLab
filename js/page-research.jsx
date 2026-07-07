// Research page — shows all PROJECTS.
// Compact list with smaller thumbnails and an Ongoing/Completed badge per item.

function ResearchPage() {
  const projects = window.PROJECTS || [];
  return (
    <div>
      <style>{`
        .rp-list { display: flex; flex-direction: column; padding: 8px 0 40px; }
        .rp-item {
          display: grid;
          grid-template-columns: 220px 1fr; /* 번호 자리를 없애고 2단으로 변경 */
          gap: 36px; /* 번호가 빠진 대신 사진과 글자 사이의 간격을 조금 넓힙니다 */
          padding: 22px 0;
          border-top: 1px solid rgba(22,23,27,0.15);
          align-items: center;
        }
        .rp-item:last-child { border-bottom: 1px solid rgba(22,23,27,0.15); }
        .rp-index { font-family: 'Fraunces', serif; color: var(--muted); font-size: 18px; }
        .rp-thumb {
          aspect-ratio: 4/3;
          overflow: hidden;
          background: #ffffff; /* 배경을 완전히 흰색으로 변경 */
          border-radius: 2px;
          display: flex; /* 이미지를 중앙에 띄우기 위한 설정 */
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(22,23,27,0.05); /* 흰 배경이 너무 밋밋하지 않게 아주 연한 테두리 추가 (선택사항) */
        }
        .rp-thumb img {
          width: 100%; 
          height: 100%; 
          object-fit: contain; /* cover에서 contain으로 변경: 이미지가 잘리지 않고 가로세로 비율에 맞춰 다 들어감 */
          filter: saturate(1);
          transition: transform 0.6s;
        }
        .rp-item:hover .rp-thumb img { transform: scale(1.03); filter: saturate(1); }

        .rp-body .meta {
          display: flex; align-items: center; gap: 10px;
          margin-bottom: 10px;
          color: var(--muted);
          flex-wrap: wrap;
        }
        .rp-body .tag-pill {
          padding: 3px 10px;
          border: 1px solid rgba(22,23,27,0.2);
          border-radius: 999px;
          font-size: 11px;
          color: var(--ink);
          letter-spacing: 0.04em;
        }
        .rp-status {
          padding: 3px 10px;
          border-radius: 999px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          display: inline-flex; align-items: center; gap: 6px;
        }
        .rp-status.ongoing {
          background: rgba(27, 54, 93, 0.08);
          color: var(--accent);
          border: 1px solid rgba(27, 54, 93, 0.25);
        }
        .rp-status.ongoing .dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--accent);
          animation: rpBlink 1.6s infinite;
        }
        .rp-status.done {
          background: rgba(22,23,27,0.04);
          color: var(--muted);
          border: 1px solid rgba(22,23,27,0.15);
        }
        @keyframes rpBlink { 0%,100% { opacity: 0.4; } 50% { opacity: 1; } }

        .rp-title {
          font-family: 'Fraunces', serif;
          font-weight: 400;
          font-size: 26px;
          line-height: 1.2;
          letter-spacing: -0.02em;
          margin: 0 0 8px;
        }
        .rp-desc {
          font-size: 14.5px;
          line-height: 1.6;
          color: var(--ink);
          margin: 0;
          max-width: 65ch;
        }
        .rp-sponsor {
          margin-top: 12px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 12px;
          background: rgba(22,23,27,0.03); /* 아주 옅은 회색 배경 */
          border-left: 2px solid var(--accent); /* 왼쪽 악센트 바 */
          border-radius: 0 2px 2px 0;
          font-size: 12.5px;
          color: var(--muted);
        }
        .rp-sponsor strong {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--ink);
          font-weight: 500;
        }

        @media (max-width: 820px) {
          .rp-item { grid-template-columns: 1fr; gap: 12px; }
          .rp-index { display: none; }
          .rp-thumb { max-width: 100%; }
        }
      `}</style>

      <section className="im-section" data-screen-label="Research Header">
        <div className="im-page-header">
          <div className="breadcrumb im-mono">Home / Research</div>
          <h1>Ongoing <em>research</em></h1>
          <p className="sub">
            We study the next generation of immersive media across three axes —
            spatial reconstruction, perceptual extension, and experience design.
            The latest projects appear at the top.
          </p>
        </div>
      </section>

      <section className="im-section" data-screen-label="Research List">
        <div className="rp-list">
          {projects.map((p, i) => (
            <article key={p.id} className="rp-item">
              <div className="rp-thumb">
                <img src={p.image} alt={p.title} />
              </div>
              <div className="rp-body">
                <div className="meta">
                  <span className={`rp-status ${p.ongoing ? 'ongoing' : 'done'}`}>
                    {p.ongoing ? <><span className="dot"></span>Ongoing</> : 'Completed'}
                  </span>
                  <span className="tag-pill">{p.tag}</span>
                  <span className="im-mono">{p.year}</span>
                </div>
                <h3 className="rp-title">{p.title}</h3>
                <p className="rp-desc">{p.desc}</p>
                {p.sponsor && (
                  <div className="rp-sponsor">
                    <strong>Supported by</strong> {p.sponsor}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

window.ResearchPage = ResearchPage;
