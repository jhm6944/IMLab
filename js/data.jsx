// 실감미디어연구실 - 공통 데이터
// 모든 시안이 공유하는 목업 콘텐츠

const LAB_INFO = {
  nameKo: '실감미디어연구실',
  nameEn: 'Immersive Media Lab',
  shortEn: 'IMMEDIA',
  affiliation: '서울과학기술대학교',
  affiliationEn: 'Seoul National University of Science & Technology',
  department: '인공지능응용학과',
  departmentEn: 'Dept. of Applied Artificial Intelligence',
  advisor: '정희민',
  advisorEn: 'Heemin Jung',
  advisorTitle: '부교수',
  email: 'hmjung@seoultech.ac.kr',
  office: '서울시 노원구 공릉로 232, 서울과학기술대학교',
  quote: '"Everything you can imagine is real."',
  quoteAuthor: '— Pablo Picasso',
  taglineKo: 'ICT 융합 기반의 몰입형 미디어 기술을 연구합니다.',
  taglineEn: 'Immersive media research at the intersection of vision, graphics, and human experience.',
  aboutKo: '실감미디어연구실은 가상현실(VR), 증강현실(AR), 3D 재구성 및 몰입형 인터랙션 기술을 연구합니다. 인간의 감각과 기계의 지각을 잇는 새로운 미디어 경험을 설계하고, 이를 산업과 사회에 응용하는 것을 목표로 합니다.',
  keywords: ['Immersive Media', 'VR / AR / XR', '3D Reconstruction', 'Neural Rendering', 'Human-Centered Computing']
};

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
  }
];

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

const NAV_ITEMS = [
  { key: 'home', ko: '홈', en: 'Home' },
  { key: 'research', ko: '연구', en: 'Research' },
  { key: 'publications', ko: '논문', en: 'Publications' },
  { key: 'members', ko: '구성원', en: 'Members' },
  { key: 'news', ko: '소식', en: 'News' },
  { key: 'contact', ko: '연락', en: 'Contact' }
];

Object.assign(window, { LAB_INFO, NEWS, PROJECTS, PUBLICATIONS, MEMBERS, NAV_ITEMS });
