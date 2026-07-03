// 실감미디어연구실 — 공통 데이터
// 편집 규칙:
//   • 각 배열의 "맨 앞"이 최신입니다.
//   • data.jsx만 편집해도 홈/서브페이지에 자동 반영됩니다.
//   • 홈에는 각 배열의 앞에서 3개가 노출됩니다.
//   • 리스트 페이지(research.html, publications.html, news.html)는 전체를 노출합니다.

const LAB_INFO = {
  nameKo: '실감미디어연구실',
  nameEn: 'Immersive Media Lab',
  shortEn: 'IMMEDIA',
  affiliation: '서울과학기술대학교',
  affiliationEn: 'Seoul National University of Science and Technology',
  department: '스마트ICT융합공학과',
  departmentEn: 'Dept. of ICT Convergence Engineering',
  advisor: '정현민',
  advisorEn: 'Hyunmin Jung',
  advisorTitle: '조교수',
  email: 'hmjung@seoultech.ac.kr',
  office: '서울시 노원구 공릉로 232, 서울과학기술대학교',
  quote: '"Everything you can imagine is real."',
  quoteAuthor: '— Pablo Picasso',
  taglineKo: 'ICT 융합 기반의 몰입형 미디어 기술을 연구합니다.',
  taglineEn: 'Immersive media research at the intersection of vision, graphics, and human experience.',
  aboutKo: '실감미디어연구실은 서울과학기술대학교 스마트ICT융합공학과 소속 연구실입니다. 공간의 재구성, 지각의 확장, 경험의 설계 — 세 축을 중심으로 몰입형 미디어 기술을 탐구합니다.',
  keywords: ['Immersive Media', 'VR / AR / XR', '3D Reconstruction', 'Neural Rendering', 'Human-Centered Computing']
};

// ─── NEWS ──────────────────────────────────────────────
// 맨 앞에 추가하면 홈 상단 뉴스 3장이 자동 갱신됩니다.
const NEWS = [
  {
    date: '2026.06.24',
    tag: 'Publication',
    title: '연구실 논문 3편이 SIGGRAPH Asia 2026에 채택되었습니다',
    titleEn: 'Three papers accepted to SIGGRAPH Asia 2026',
    excerpt: '몰입형 3D 재구성 및 뷰 합성 관련 논문 세 편이 SIGGRAPH Asia 2026 정규 트랙에 채택되었습니다.',
    image: 'assets/news-lab.jpg'
  },
  {
    date: '2026.05.12',
    tag: 'Award',
    title: '박OO 학생, ICCV 2026 Best Student Paper Honorable Mention 수상',
    titleEn: 'Student receives ICCV 2026 Best Student Paper Honorable Mention',
    excerpt: '360도 옴니디렉셔널 SLAM 연구로 국제학회 최우수 학생 논문 우수상을 수상하였습니다.',
    image: 'assets/news-volcap.jpg'
  },
  {
    date: '2026.03.02',
    tag: 'Recruit',
    title: '2026학년도 후기 대학원생을 모집합니다',
    titleEn: 'Recruiting graduate students for Fall 2026',
    excerpt: '석·박사 및 통합과정 신입생을 모집합니다. 컴퓨터 비전, 3D 그래픽스, XR에 관심 있는 학생 환영합니다.',
    image: 'assets/news-lab.jpg'
  },
  {
    date: '2026.02.10',
    tag: 'Talk',
    title: '지도교수 초청 강연 · KCGS 2026 Keynote',
    excerpt: '한국컴퓨터그래픽스학회 2026 학술대회에서 "실감미디어와 뉴럴 렌더링의 접점"을 주제로 기조강연을 진행했습니다.',
    image: 'assets/project-nerf.jpg'
  },
  {
    date: '2025.11.28',
    tag: 'Collaboration',
    title: '국립현대미술관과 문화유산 디지털 복원 공동 연구 협약',
    excerpt: '체적 신경 렌더링 기술을 활용한 문화유산 디지털 아카이빙 협업을 시작합니다.',
    image: 'assets/project-nerf.jpg'
  }
];

// ─── PROJECTS ─────────────────────────────────────────
const PROJECTS = [
  {
    id: 'gaussian',
    title: 'Omnidirectional Gaussian Splatting',
    titleKo: '전방위 가우시안 스플래팅',
    year: '2026',
    tag: '3D Reconstruction',
    image: 'assets/project-gaussian.jpg',
    desc: '단일 360도 카메라로부터 실시간 3D 씬을 재구성하는 자기보정형 가우시안 스플래팅 기법.'
  },
  {
    id: 'nerf',
    title: 'Volumetric Neural Rendering',
    titleKo: '체적 신경 렌더링',
    year: '2025',
    tag: 'Neural Rendering',
    image: 'assets/project-nerf.jpg',
    desc: '뉴럴 라디언스 필드를 활용한 문화유산 디지털 복원 및 몰입형 관람 시스템.'
  },
  {
    id: '360',
    title: '360° Visual Localization',
    titleKo: '360도 시각 측위',
    year: '2025',
    tag: 'Vision',
    image: 'assets/project-360.jpg',
    desc: '옴니디렉셔널 카메라 기반 대규모 실내외 환경의 정밀 위치 추정 데이터셋 및 벤치마크.'
  },
  {
    id: 'slam',
    title: 'Photo-SLAM',
    titleKo: '사실적 매핑 SLAM',
    year: '2024',
    tag: 'SLAM',
    image: 'assets/project-slam.jpg',
    desc: '단일 카메라에서 사실적 렌더링과 로컬라이제이션을 동시에 수행하는 실시간 시스템.'
  },
  {
    id: 'ar',
    title: 'AR Spatial Anchoring',
    titleKo: 'AR 공간 앵커링',
    year: '2024',
    tag: 'AR',
    image: 'assets/project-ar.jpg',
    desc: '도시 규모 환경에서의 지속 가능한 증강현실 콘텐츠 배치 및 상호작용 프레임워크.'
  }
];

// ─── PUBLICATIONS ─────────────────────────────────────
const PUBLICATIONS = [
  {
    title: 'SC-OmniGS: Self-Calibrating Omnidirectional Gaussian Splatting',
    authors: 'H. Park, J. Kim, S. Lee, H. Jung',
    venue: 'ICLR',
    year: '2026',
    tag: 'oral',
    image: 'assets/project-gaussian.jpg'
  },
  {
    title: 'Real-time Photorealistic Mapping for Immersive Telepresence',
    authors: 'M. Choi, H. Park, H. Jung',
    venue: 'SIGGRAPH Asia',
    year: '2026',
    image: 'assets/project-slam.jpg'
  },
  {
    title: '360Loc: A Benchmark for Omnidirectional Visual Localization',
    authors: 'J. Kim, S. Lee, H. Jung',
    venue: 'CVPR',
    year: '2025',
    tag: 'highlight',
    image: 'assets/project-360.jpg'
  },
  {
    title: 'Volumetric Rendering for Cultural Heritage Preservation',
    authors: 'S. Lee, H. Park, H. Jung',
    venue: 'ECCV',
    year: '2024',
    image: 'assets/project-nerf.jpg'
  },
  {
    title: 'Persistent AR Anchoring at Urban Scale',
    authors: 'M. Choi, J. Kim, H. Jung',
    venue: 'IEEE VR',
    year: '2024',
    image: 'assets/project-ar.jpg'
  }
];

const MEMBERS = [
  { name: '정희민', nameEn: 'Heemin Jung', role: 'Principal Investigator', title: '부교수 · Ph.D.', initial: 'HJ' },
  { name: '박OO', nameEn: 'H. Park', role: 'Ph.D. Student', title: '박사과정 · 4년차', initial: 'HP' },
  { name: '김OO', nameEn: 'J. Kim', role: 'Ph.D. Student', title: '박사과정 · 2년차', initial: 'JK' },
  { name: '이OO', nameEn: 'S. Lee', role: 'M.S. Student', title: '석사과정 · 2년차', initial: 'SL' },
  { name: '최OO', nameEn: 'M. Choi', role: 'M.S. Student', title: '석사과정 · 1년차', initial: 'MC' },
  { name: '조OO', nameEn: 'B. Cho', role: 'M.S. Student', title: '석사과정 · 1년차', initial: 'BC' }
];

// 각 항목의 href는 실제 페이지로 라우팅됩니다.
const NAV_ITEMS = [
  { key: 'home',         ko: '홈',      en: 'Home',         href: 'index.html' },
  { key: 'research',     ko: '연구',    en: 'Research',     href: 'research.html' },
  { key: 'publications', ko: '논문',    en: 'Publications', href: 'publications.html' },
  { key: 'news',         ko: '소식',    en: 'News',         href: 'news.html' },
  { key: 'members',      ko: '구성원',  en: 'Members',      href: 'members.html' },
  { key: 'contact',      ko: '연락',    en: 'Contact',      href: 'contact.html' }
];

Object.assign(window, { LAB_INFO, NEWS, PROJECTS, PUBLICATIONS, MEMBERS, NAV_ITEMS });
