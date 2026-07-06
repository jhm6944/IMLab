// Members page
// - PI keeps a stylized initial tile (a real photo can be dropped in later)
// - Graduate students are shown WITHOUT photos, per user request.
//   Each student card lists research interests instead of "0-year" placeholders.

function MembersPage() {
  const members = window.MEMBERS || [];
  const info = window.LAB_INFO;
  const pi = members[0];
  const rest = members.slice(1);
  // Graduate Students: role이 'B.S. Student'가 아닌 학생들
  const grads = rest.filter(m => m.role !== 'B.S. Student');
  // Undergraduate Students: role이 'B.S. Student'인 학생들
  const undergrads = rest.filter(m => m.role === 'B.S. Student');

  return (
    <div>
      <style>{`
        .mp-pi {
          padding: 32px 0 48px;
          display: grid; grid-template-columns: 320px 1fr; gap: 60px;
          border-bottom: 1px solid rgba(22,23,27,0.15);
          margin-bottom: 8px;
        }
        .mp-pi-photo {
          aspect-ratio: 4/5;
          border-radius: 3px;
          background: linear-gradient(135deg, #1B365D 0%, #0f1f36 100%);
          display: flex; align-items: center; justify-content: center;
        }
        .mp-pi-initial { font-family: 'Fraunces', serif; font-size: 88px; color: var(--paper); font-weight: 400; letter-spacing: -0.02em; }
        .mp-pi-body h2 { font-family: 'Fraunces', serif; font-weight: 400; font-size: 48px; letter-spacing: -0.02em; margin: 0 0 8px; }
        .mp-pi-body .en { color: var(--muted); font-size: 20px; font-family: 'Fraunces', serif; font-style: italic; margin-bottom: 24px; }
        .mp-pi-body .role { display: inline-block; padding: 4px 12px; background: var(--ink); color: var(--paper); border-radius: 2px; font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 24px; }
        .mp-pi-body p { font-size: 15px; line-height: 1.7; margin: 0 0 20px; max-width: 60ch; }
        .mp-pi-fields { display: grid; grid-template-columns: 120px 1fr; gap: 12px 24px; padding-top: 20px; border-top: 1px solid rgba(22,23,27,0.15); font-size: 13.5px; }
        .mp-pi-fields dt { color: var(--muted); }
        .mp-pi-fields dd { margin: 0; }

        /* Photoless student cards */
        .mp-students-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          padding: 24px 0 40px;
        }
        .mp-student {
          padding: 24px 24px 26px;
          border: 1px solid rgba(22,23,27,0.15);
          border-radius: 3px;
          background: var(--paper);
          transition: border-color 0.2s, transform 0.3s;
          display: flex; flex-direction: column; gap: 8px;
        }
        .mp-student:hover {
          border-color: rgba(22,23,27,0.4);
          transform: translateY(-2px);
        }
        .mp-student-role {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 4px;
        }
        .mp-student-name {
          font-family: 'Fraunces', serif;
          font-size: 26px;
          font-weight: 500;
          letter-spacing: -0.015em;
          margin: 0;
          line-height: 1.1;
        }
        .mp-student-en {
          color: var(--muted);
          font-size: 14px;
          font-family: 'Fraunces', serif;
          font-style: italic;
          margin-bottom: 12px;
        }
        .mp-student-interests-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--muted);
          padding-top: 12px;
          margin-top: auto;
          border-top: 1px solid rgba(22,23,27,0.1);
          margin-bottom: 8px;
        }
        .mp-student-interests {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        .mp-student-interest {
          padding: 4px 10px;
          background: rgba(22,23,27,0.05);
          border-radius: 999px;
          font-size: 12px;
          color: var(--ink);
        }

        @media (max-width: 900px) {
          .mp-pi { grid-template-columns: 200px 1fr; gap: 32px; }
          .mp-students-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 560px) {
          .mp-pi { grid-template-columns: 1fr; }
          .mp-pi-photo { max-width: 240px; }
          .mp-students-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <section className="im-section" data-screen-label="Members Header">
        <div className="im-page-header">
          <div className="breadcrumb im-mono">Home / Members</div>
          <h1><em>Members</em></h1>
          <p className="sub">
            The Immersive Media Lab consists of one principal investigator and
            graduate researchers who collaborate freely across research interests.
          </p>
        </div>
      </section>

      {/* PI */}
      <section className="im-section" data-screen-label="Principal Investigator">
        <div className="mp-pi">
          <div className="mp-pi-photo">
            <span className="mp-pi-initial">{pi.initial}</span>
          </div>
          <div className="mp-pi-body">
            <span className="role im-mono">Principal Investigator</span>
            <h2>{pi.nameEn}</h2>
            <div className="en">{pi.name}</div>
            <p>
              Associate Professor at {info.affiliationEn}, {info.departmentEn}.
              Research on 3D computer vision, neural rendering, and immersive
              media. Leads the Immersive Media Lab (IMMEDIA).
            </p>
            <dl className="mp-pi-fields">
              <dt className="im-mono">Position</dt><dd>{pi.title}</dd>
              <dt className="im-mono">Department</dt><dd>{info.departmentEn}</dd>
              <dt className="im-mono">Email</dt><dd>{info.email}</dd>
              <dt className="im-mono">Office</dt><dd>{info.office}</dd>
            </dl>
          </div>
        </div>
      </section>

      {/* Graduate Students (photoless) */}
      <section className="im-section" data-screen-label="Students">
        <div className="im-section-head">
          <span className="im-mono im-section-mono">§ 01 — Graduate Students</span>
          <h2 className="im-section-title">Graduate <em>researchers</em></h2>
          <a className="im-section-link" href="contact.html">How to apply →</a>
        </div>
        <div className="mp-students-grid">
          {grads.map((m, i) => (
            <div key={i} className="mp-student">
              <div className="mp-student-role">{m.role}</div>
              <h4 className="mp-student-name">{m.nameEn}</h4>
              <div className="mp-student-en">{m.name}</div>
              <div className="mp-student-interests-label">Research Interests</div>
              <div className="mp-student-interests">
                {(m.interests || []).map((it, j) => (
                  <span key={j} className="mp-student-interest">{it}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
 
      {/* Undergraduate Students (photoless) */}
      <section className="im-section" data-screen-label="Students">
        <div className="im-section-head">
          <span className="im-mono im-section-mono">§ 02 — Undergraduate Interns</span>
          <h2 className="im-section-title">Undergraduate <em>researchers</em></h2>
          <a className="im-section-link" href="contact.html">How to apply →</a>
        </div>
        <div className="mp-students-grid">
          {undergrads.map((m, i) => (
            <div key={i} className="mp-student">
              <div className="mp-student-role">{m.role}</div>
              <h4 className="mp-student-name">{m.nameEn}</h4>
              <div className="mp-student-en">{m.name}</div>
              <div className="mp-student-interests-label">Research Interests</div>
              <div className="mp-student-interests">
                {(m.interests || []).map((it, j) => (
                  <span key={j} className="mp-student-interest">{it}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

window.MembersPage = MembersPage;
