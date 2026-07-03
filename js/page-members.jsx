// Members 페이지

function MembersPage() {
  const members = window.MEMBERS || [];
  const info = window.LAB_INFO;
  const pi = members[0];
  const rest = members.slice(1);

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
        .mp-pi-body p { font-size: 15px; line-height: 1.7; margin: 0 0 20px; max-width: 55ch; }
        .mp-pi-fields { display: grid; grid-template-columns: 100px 1fr; gap: 12px 24px; padding-top: 20px; border-top: 1px solid rgba(22,23,27,0.15); font-size: 13.5px; }
        .mp-pi-fields dt { color: var(--muted); }
        .mp-pi-fields dd { margin: 0; }

        .mp-students-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 32px; padding: 24px 0 40px; }
        .mp-student { }
        .mp-student-photo {
          aspect-ratio: 1/1;
          background: linear-gradient(135deg, #ede9de 0%, #d8d2c2 100%);
          border-radius: 2px;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 14px;
        }
        .mp-student-initial { font-family: 'Fraunces', serif; font-size: 48px; font-weight: 400; letter-spacing: -0.02em; }
        .mp-student-name { font-family: 'Fraunces', serif; font-size: 20px; font-weight: 500; letter-spacing: -0.01em; margin: 0 0 2px; }
        .mp-student-en { color: var(--muted); font-size: 12.5px; margin-bottom: 8px; }
        .mp-student-role { font-size: 11px; color: var(--ink); letter-spacing: 0.06em; text-transform: uppercase; margin-bottom: 4px; }
        .mp-student-title { font-size: 12.5px; color: var(--muted); }

        @media (max-width: 900px) {
          .mp-pi { grid-template-columns: 200px 1fr; gap: 32px; }
          .mp-students-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 560px) {
          .mp-pi { grid-template-columns: 1fr; }
          .mp-pi-photo { max-width: 240px; }
        }
      `}</style>

      <section className="im-section" data-screen-label="Members Header">
        <div className="im-page-header">
          <div className="breadcrumb im-mono">Home / Members</div>
          <h1><em>구성원</em></h1>
          <p className="sub">
            실감미디어연구실은 지도교수 1인과 대학원 연구원들로 구성되어 있습니다. 연구 관심사에 따라 자율적으로 협업합니다.
          </p>
          <div className="meta">
            <div>
              <div className="im-mono count-label">Total members</div>
              <div className="count">{members.length}</div>
            </div>
            <div className="im-mono" style={{color:'var(--muted)'}}>1 PI · {rest.length} students</div>
          </div>
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
            <h2>{pi.name}</h2>
            <div className="en">{pi.nameEn}</div>
            <p>
              서울과학기술대학교 인공지능응용학과 부교수. 3D 컴퓨터 비전, 뉴럴 렌더링, 몰입형 미디어를 중심으로 연구를 진행하고 있으며, 실감미디어연구실(IMMEDIA)을 이끌고 있습니다.
            </p>
            <dl className="mp-pi-fields">
              <dt className="im-mono">Position</dt><dd>{pi.title}</dd>
              <dt className="im-mono">Department</dt><dd>{info.department}</dd>
              <dt className="im-mono">Email</dt><dd>{info.email}</dd>
              <dt className="im-mono">Office</dt><dd>{info.office}</dd>
            </dl>
          </div>
        </div>
      </section>

      {/* Students */}
      <section className="im-section" data-screen-label="Students">
        <div className="im-section-head">
          <span className="im-mono im-section-mono">§ 01 — Students</span>
          <h2 className="im-section-title">대학원 <em>연구원</em></h2>
          <a className="im-section-link" href="contact.html">지원 안내 →</a>
        </div>
        <div className="mp-students-grid">
          {rest.map((m, i) => (
            <div key={i} className="mp-student">
              <div className="mp-student-photo">
                <span className="mp-student-initial">{m.initial}</span>
              </div>
              <h4 className="mp-student-name">{m.name}</h4>
              <div className="mp-student-en">{m.nameEn}</div>
              <div className="im-mono mp-student-role">{m.role}</div>
              <div className="mp-student-title">{m.title}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

window.MembersPage = MembersPage;
