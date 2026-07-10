// Contact page (English-first, without Phone and Location sections)

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
          margin-top: 50px;
          padding: 28px 32px; background: var(--ink); color: var(--paper); border-radius: 2px;
          display: flex; justify-content: space-between; align-items: center; gap: 16px;
          text-decoration: none;
        }
        .cp-cta .lg { font-family: 'Fraunces', serif; font-size: 22px; letter-spacing: -0.015em; }
        .cp-cta .label { color: rgba(246,244,239,0.55); margin-bottom: 4px; }
        .cp-cta .arrow { color: var(--paper); font-family: 'Fraunces', serif; font-size: 30px; }

        .cp-note { font-size: 14.5px; line-height: 1.7; color: var(--ink); margin: 0 0 20px; }
        .cp-list { list-style: none; padding: 0; margin: 0 0 24px; display: flex; flex-direction: column; gap: 10px; }
        .cp-list li {
          display: grid; grid-template-columns: 24px 1fr; gap: 12px;
          padding: 12px 0; border-top: 1px solid rgba(22,23,27,0.1); font-size: 14px;
        }
        .cp-list li:first-child { border-top: none; padding-top: 4px; }
        .cp-list .num { font-family: 'Fraunces', serif; color: var(--accent); }

        @media (max-width: 820px) {
          .cp-grid { grid-template-columns: 1fr; gap: 48px; padding: 16px 0 32px; }
          /* 모바일에서는 'Address' 같은 라벨과 내용이 위아래로 나오게 변경 */
          .cp-row { grid-template-columns: 1fr; gap: 4px; padding: 12px 0; }
          .cp-cta { flex-direction: column; align-items: flex-start; gap: 12px; padding: 24px; }
          .cp-cta .arrow { align-self: flex-end; } /* 화살표를 우측 하단으로 이동 */
        }
      `}</style>

      <section className="im-section" data-screen-label="Contact Header">
        <div className="im-page-header">
          <div className="breadcrumb im-mono">Home / Contact</div>
          <h1><em>Contact</em></h1>
          <p className="sub">
            For collaborations, visits, lab applications, or general inquiries, please reach out by email.
          </p>
        </div>
      </section>

      <section className="im-section" data-screen-label="Contact Info">
        <div className="cp-grid">
          <div className="cp-block">
            <h3>Lab</h3>
            <dl style={{margin:0}}>
              <div className="cp-row"><dt>Address</dt><dd>{info.office}<br/>{info.affiliationEn}</dd></div>
              <div className="cp-row"><dt>Department</dt><dd>{info.departmentEn}</dd></div>
              <div className="cp-row"><dt>Advisor</dt><dd>{info.advisorEn}, Associate Professor</dd></div>
              <div className="cp-row"><dt>Email</dt><dd>{info.email}</dd></div>
            </dl>
          </div>

          <div className="cp-block">
            <h3>Prospective Students</h3>
            <p className="cp-note">
              We welcome graduate and undergraduate intern applications year-round.
              Please email your research interests, CV, and transcript.
              We look forward to hearing from you and exploring potential collaborations.
            </p>
            {/*
            <ul className="cp-list">
              <li><span className="im-mono num">01</span><span>Attach CV, transcript, and a 1-page statement of research interests</span></li>
              <li><span className="im-mono num">02</span><span>Use the subject line prefix <code>[Application]</code></span></li>
              <li><span className="im-mono num">03</span><span>Selected candidates are invited for a video or in-person interview</span></li>
            </ul>
            */}
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
    </div>
  );
}

window.ContactPage = ContactPage;
