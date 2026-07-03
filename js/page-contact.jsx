// Contact 페이지

function ContactPage() {
  const info = window.LAB_INFO;

  return (
    <div>
      <style>{`
        .cp-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; padding: 24px 0 40px; }
        .cp-block h3 { font-family: 'Fraunces', serif; font-size: 26px; font-weight: 400; margin: 0 0 24px; letter-spacing: -0.015em; }
        .cp-row {
          display: grid; grid-template-columns: 120px 1fr; gap: 20px;
          padding: 14px 0; border-top: 1px solid rgba(22,23,27,0.12);
          font-size: 14.5px; line-height: 1.6;
        }
        .cp-row:last-of-type { border-bottom: 1px solid rgba(22,23,27,0.12); }
        .cp-row dt { color: var(--muted); font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: 0.06em; text-transform: uppercase; margin: 0; padding-top: 3px; }
        .cp-row dd { margin: 0; }

        .cp-cta {
          margin-top: 32px;
          padding: 28px 32px; background: var(--ink); color: var(--paper); border-radius: 2px;
          display: flex; justify-content: space-between; align-items: center; gap: 16px;
        }
        .cp-cta .lg { font-family: 'Fraunces', serif; font-size: 22px; letter-spacing: -0.015em; }
        .cp-cta .label { color: rgba(246,244,239,0.55); margin-bottom: 4px; }
        .cp-cta a.arrow { color: var(--paper); text-decoration: none; font-family: 'Fraunces', serif; font-size: 30px; }

        .cp-note { font-size: 14.5px; line-height: 1.7; color: var(--ink); margin: 0 0 20px; }
        .cp-list { list-style: none; padding: 0; margin: 0 0 24px; display: flex; flex-direction: column; gap: 10px; }
        .cp-list li {
          display: grid; grid-template-columns: 24px 1fr; gap: 12px;
          padding: 12px 0; border-top: 1px solid rgba(22,23,27,0.1); font-size: 14px;
        }
        .cp-list li:first-child { border-top: none; padding-top: 4px; }
        .cp-list .num { font-family: 'Fraunces', serif; color: var(--accent); }

        .cp-map {
          margin: 8px 0 40px;
          aspect-ratio: 21/9;
          background:
            repeating-linear-gradient(45deg, rgba(22,23,27,0.04) 0 8px, transparent 8px 16px),
            linear-gradient(180deg, #e6e1d3 0%, #dcd6c4 100%);
          border-radius: 2px;
          position: relative;
          overflow: hidden;
          display: flex; align-items: center; justify-content: center;
        }
        .cp-map .pin { width: 14px; height: 14px; background: var(--accent-2); border-radius: 50%; box-shadow: 0 0 0 6px rgba(122,46,59,0.15), 0 0 0 12px rgba(122,46,59,0.08); }
        .cp-map .label { position: absolute; top: 16px; left: 20px; }

        @media (max-width: 820px) {
          .cp-grid { grid-template-columns: 1fr; gap: 32px; }
        }
      `}</style>

      <section className="im-section" data-screen-label="Contact Header">
        <div className="im-page-header">
          <div className="breadcrumb im-mono">Home / Contact</div>
          <h1><em>연락</em></h1>
          <p className="sub">
            협력, 방문, 대학원 지원, 언론 문의 등 모든 연락은 아래 이메일로 부탁드립니다.
          </p>
        </div>
      </section>

      <section className="im-section" data-screen-label="Contact Info">
        <div className="cp-grid">
          <div className="cp-block">
            <h3>Lab</h3>
            <dl style={{margin:0}}>
              <div className="cp-row"><dt>Address</dt><dd>서울시 노원구 공릉로 232<br/>서울과학기술대학교</dd></div>
              <div className="cp-row"><dt>Department</dt><dd>{info.department}</dd></div>
              <div className="cp-row"><dt>Advisor</dt><dd>{info.advisor} {info.advisorTitle}</dd></div>
              <div className="cp-row"><dt>Email</dt><dd>{info.email}</dd></div>
              <div className="cp-row"><dt>Phone</dt><dd>02-970-XXXX (연구실)</dd></div>
            </dl>
          </div>

          <div className="cp-block">
            <h3>Prospective Students</h3>
            <p className="cp-note">
              대학원생과 학부 인턴을 상시 모집합니다. 관심 주제, CV, 성적표를 아래 이메일로 보내주세요. 답변까지 1주 내외 소요됩니다.
            </p>
            <ul className="cp-list">
              <li><span className="im-mono num">01</span><span>이력서·성적표·연구 관심사(1p) 첨부</span></li>
              <li><span className="im-mono num">02</span><span>제목에 [지원] 표기 후 발송</span></li>
              <li><span className="im-mono num">03</span><span>서류 검토 후 화상/대면 면담 진행</span></li>
            </ul>

            <a className="cp-cta" href={`mailto:${info.email}`}>
              <div>
                <div className="im-mono label">WRITE TO</div>
                <div className="lg">{info.email}</div>
              </div>
              <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </section>

      <section className="im-section" data-screen-label="Location">
        <div className="im-section-head">
          <span className="im-mono im-section-mono">§ 02 — Location</span>
          <h2 className="im-section-title">오시는 <em>길</em></h2>
        </div>
        <div className="cp-map">
          <span className="label im-mono" style={{color:'rgba(22,23,27,0.55)'}}>SeoulTech Campus · 공릉동</span>
          <span className="pin"></span>
        </div>
      </section>
    </div>
  );
}

window.ContactPage = ContactPage;
