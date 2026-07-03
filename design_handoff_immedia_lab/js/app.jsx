// 시안 스위처
// 좌측 상단에 3개 시안 선택 탭. 선택은 localStorage에 저장

const { useState, useEffect } = React;

const VARIANTS = [
  { key: 'a', name: 'A · Editorial', tag: '학술 저널 세리프', component: () => window.VariantA },
  { key: 'b', name: 'B · Minimal Grid', tag: '스위스 스타일 그리드', component: () => window.VariantB },
  { key: 'c', name: 'C · Immersive', tag: '몰입 3D + 다크 교차', component: () => window.VariantC }
];

const App = () => {
  const [variant, setVariant] = useState(() => {
    return localStorage.getItem('immedia_variant') || 'a';
  });
  const [showSwitcher, setShowSwitcher] = useState(true);

  useEffect(() => {
    localStorage.setItem('immedia_variant', variant);
    window.scrollTo(0, 0);
  }, [variant]);

  const current = VARIANTS.find(v => v.key === variant);
  const CurrentComponent = current.component();

  return (
    <>
      {/* Variant switcher */}
      <div className={`variant-switcher ${showSwitcher ? '' : 'collapsed'}`}>
        <style>{`
          .variant-switcher {
            position: fixed;
            left: 20px;
            bottom: 20px;
            z-index: 9999;
            background: #0e1014;
            color: #fafaf7;
            border-radius: 12px;
            padding: 10px;
            font-family: 'Pretendard', sans-serif;
            font-size: 13px;
            box-shadow: 0 8px 30px rgba(0,0,0,0.25), 0 0 0 1px rgba(255,255,255,0.05);
            display: flex; flex-direction: column; gap: 4px;
            min-width: 220px;
            transition: transform 0.3s;
          }
          .variant-switcher.collapsed {
            transform: translateY(calc(100% + 20px));
          }
          .vs-header {
            display: flex; align-items: center; justify-content: space-between;
            padding: 4px 8px 8px;
            border-bottom: 1px solid rgba(255,255,255,0.08);
            margin-bottom: 4px;
          }
          .vs-title {
            font-family: 'JetBrains Mono', monospace;
            font-size: 10px;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            color: rgba(255,255,255,0.55);
          }
          .vs-close {
            width: 20px; height: 20px; border-radius: 4px;
            display: flex; align-items: center; justify-content: center;
            cursor: pointer; color: rgba(255,255,255,0.55); font-size: 14px;
          }
          .vs-close:hover { background: rgba(255,255,255,0.08); color: #fff; }
          .vs-option {
            padding: 10px 12px;
            border-radius: 8px;
            cursor: pointer;
            transition: background 0.15s;
            display: flex; flex-direction: column; gap: 2px;
          }
          .vs-option:hover { background: rgba(255,255,255,0.05); }
          .vs-option.active { background: rgba(255,255,255,0.1); }
          .vs-option-name { font-weight: 500; font-size: 13px; }
          .vs-option-tag { font-size: 11px; color: rgba(255,255,255,0.5); }
          .vs-option.active .vs-option-tag { color: rgba(255,255,255,0.7); }
          .variant-open {
            position: fixed;
            left: 20px;
            bottom: 20px;
            z-index: 9999;
            background: #0e1014;
            color: #fafaf7;
            width: 44px; height: 44px;
            border-radius: 50%;
            display: flex; align-items: center; justify-content: center;
            cursor: pointer;
            font-family: 'JetBrains Mono', monospace;
            font-size: 12px;
            box-shadow: 0 6px 20px rgba(0,0,0,0.3);
            border: none;
          }
        `}</style>
        <div className="vs-header">
          <span className="vs-title">Design Options</span>
          <span className="vs-close" onClick={() => setShowSwitcher(false)}>✕</span>
        </div>
        {VARIANTS.map(v => (
          <div
            key={v.key}
            className={`vs-option ${variant === v.key ? 'active' : ''}`}
            onClick={() => setVariant(v.key)}
          >
            <div className="vs-option-name">{v.name}</div>
            <div className="vs-option-tag">{v.tag}</div>
          </div>
        ))}
      </div>

      {!showSwitcher && (
        <button className="variant-open" onClick={() => setShowSwitcher(true)} title="시안 선택">
          {variant.toUpperCase()}
        </button>
      )}

      {CurrentComponent && <CurrentComponent />}
    </>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
