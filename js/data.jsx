// Immersive Media Lab — shared data
// Editing rules:
//   • The FIRST item of each array is the latest.
//   • Edit only this file; home + subpages update automatically.
//   • Home shows a curated selection (see PUBLICATIONS.homeFeatured).
//   • Subpages (research.html, publications.html, news.html) show everything.

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
  office: '232 Gongneung-ro, Nowon-gu, Seoul, Korea',
  officeKo: '서울시 노원구 공릉로 232, 서울과학기술대학교',
  quote: '"Everything you can imagine is real."',
  quoteAuthor: '— Pablo Picasso',
  taglineEn: 'Immersive media research at the intersection of vision, graphics, and human experience.',
  aboutEn: 'The Immersive Media Lab (IMMEDIA) at Seoul National University of Science and Technology explores the next generation of immersive media through three axes — spatial reconstruction, perceptual extension, and experience design.',
  keywords: ['Immersive Media', 'VR / AR / XR', '3D Reconstruction', 'Neural Rendering', 'Human-Centered Computing']
};

// ─── NEWS (bilingual titles allowed) ─────────────────────
const NEWS = [
  {
    date: '2026.06.24',
    tag: 'Publication',
    title: 'Three papers accepted to SIGGRAPH Asia 2026',
    titleKo: '연구실 논문 3편이 SIGGRAPH Asia 2026에 채택되었습니다',
    excerpt: 'Three papers on immersive 3D reconstruction and view synthesis have been accepted to the SIGGRAPH Asia 2026 technical papers track.',
    image: 'assets/news-lab.jpg'
  },
  {
    date: '2026.05.12',
    tag: 'Award',
    title: 'Student receives ICCV 2026 Best Student Paper Honorable Mention',
    titleKo: '박OO 학생, ICCV 2026 Best Student Paper Honorable Mention 수상',
    excerpt: 'The lab received a Best Student Paper Honorable Mention at ICCV 2026 for work on 360° omnidirectional SLAM.',
    image: 'assets/news-volcap.jpg'
  },
  {
    date: '2026.03.02',
    tag: 'Recruit',
    title: 'Recruiting graduate students for Fall 2026',
    titleKo: '2026학년도 후기 대학원생을 모집합니다',
    excerpt: 'We are recruiting new MS, PhD, and integrated MS/PhD students. Students interested in computer vision, 3D graphics, and XR are welcome.',
    image: 'assets/news-lab.jpg'
  },
  {
    date: '2026.02.10',
    tag: 'Talk',
    title: 'Keynote at KCGS 2026',
    titleKo: '지도교수 초청 강연 · KCGS 2026 Keynote',
    excerpt: 'The lab director delivered a keynote titled "Immersive Media and Neural Rendering" at the Korea Computer Graphics Society Conference 2026.',
    image: 'assets/project-nerf.jpg'
  },
  {
    date: '2025.11.28',
    tag: 'Collaboration',
    title: 'Digital heritage collaboration with MMCA',
    titleKo: '국립현대미술관과 문화유산 디지털 복원 공동 연구 협약',
    excerpt: 'A joint research agreement on digital cultural heritage archiving using volumetric neural rendering has begun.',
    image: 'assets/project-nerf.jpg'
  }
];

// ─── PROJECTS ─────────────────────────────────────────
// `ongoing: true|false` — shown as a badge on the research list.
const PROJECTS = [
  {
    id: 'gaussian',
    title: 'Omnidirectional Gaussian Splatting',
    year: '2026',
    tag: '3D Reconstruction',
    ongoing: true,
    image: 'assets/project-gaussian.jpg',
    desc: 'Self-calibrating Gaussian Splatting for real-time 3D scene reconstruction from a single 360° camera.'
  },
  {
    id: 'nerf',
    title: 'Volumetric Neural Rendering',
    year: '2025',
    tag: 'Neural Rendering',
    ongoing: true,
    image: 'assets/project-nerf.jpg',
    desc: 'Neural radiance field-based digital restoration and immersive viewing system for cultural heritage.'
  },
  {
    id: '360',
    title: '360° Visual Localization',
    year: '2025',
    tag: 'Vision',
    ongoing: true,
    image: 'assets/project-360.jpg',
    desc: 'Dataset and benchmark for precise indoor / outdoor localization using omnidirectional cameras at scale.'
  },
  {
    id: 'slam',
    title: 'Photo-SLAM',
    year: '2024',
    tag: 'SLAM',
    ongoing: false,
    image: 'assets/project-slam.jpg',
    desc: 'Real-time system performing photorealistic rendering and localization simultaneously from a single camera.'
  },
  {
    id: 'ar',
    title: 'AR Spatial Anchoring',
    year: '2024',
    tag: 'AR',
    ongoing: false,
    image: 'assets/project-ar.jpg',
    desc: 'Framework for persistent AR content placement and interaction at urban scale.'
  }
];

// ─── PUBLICATIONS ─────────────────────────────────────
// category: 'intl-journal' | 'domestic-journal' | 'intl-conference' | 'domestic-conference' | 'patent'
// Optional links: paper (PDF / DOI / arXiv), code (GitHub), project (project page).
const PUBLICATIONS = [
  {
    id: 'sc-omnigs',
    category: 'intl-conference',
    title: 'SC-OmniGS: Self-Calibrating Omnidirectional Gaussian Splatting',
    authors: 'H. Park, J. Kim, S. Lee, H. Jung',
    venue: 'ICLR',
    year: '2026',
    tag: 'oral',
    paper: 'https://arxiv.org/abs/example-1',
    code: 'https://github.com/jhm6944/sc-omnigs',
    image: 'assets/project-gaussian.jpg'
  },
  {
    id: 'realtime-photo',
    category: 'intl-conference',
    title: 'Real-time Photorealistic Mapping for Immersive Telepresence',
    authors: 'M. Choi, H. Park, H. Jung',
    venue: 'SIGGRAPH Asia',
    year: '2026',
    paper: 'https://doi.org/example-2',
    image: 'assets/project-slam.jpg'
  },
  {
    id: '360loc',
    category: 'intl-conference',
    title: '360Loc: A Benchmark for Omnidirectional Visual Localization',
    authors: 'J. Kim, S. Lee, H. Jung',
    venue: 'CVPR',
    year: '2025',
    tag: 'highlight',
    paper: 'https://arxiv.org/abs/example-3',
    code: 'https://github.com/jhm6944/360loc',
    image: 'assets/project-360.jpg'
  },
  {
    id: 'volcap-tvcg',
    category: 'intl-journal',
    title: 'Volumetric Capture for Cultural Heritage Digital Twins',
    authors: 'S. Lee, H. Park, H. Jung',
    venue: 'IEEE TVCG',
    year: '2026',
    paper: 'https://doi.org/example-tvcg',
    image: 'assets/project-nerf.jpg'
  },
  {
    id: 'volrender-eccv',
    category: 'intl-conference',
    title: 'Volumetric Rendering for Cultural Heritage Preservation',
    authors: 'S. Lee, H. Park, H. Jung',
    venue: 'ECCV',
    year: '2024',
    paper: 'https://doi.org/example-4',
    image: 'assets/project-nerf.jpg'
  },
  {
    id: 'persistent-ar',
    category: 'intl-conference',
    title: 'Persistent AR Anchoring at Urban Scale',
    authors: 'M. Choi, J. Kim, H. Jung',
    venue: 'IEEE VR',
    year: '2024',
    paper: 'https://doi.org/example-5',
    image: 'assets/project-ar.jpg'
  },
  {
    id: 'kjcgs-2025',
    category: 'domestic-journal',
    title: '옴니디렉셔널 카메라 기반 실내 매핑 (Omnidirectional Indoor Mapping)',
    authors: 'J. Kim, H. Jung',
    venue: '한국컴퓨터그래픽스학회논문지',
    year: '2025',
    paper: 'https://example.kr/paper',
    image: 'assets/project-360.jpg'
  },
  {
    id: 'kcgs-2026',
    category: 'domestic-conference',
    title: '뉴럴 렌더링 기반 문화유산 디지털 아카이브 (Neural Rendering for Cultural Heritage Archives)',
    authors: 'S. Lee, H. Jung',
    venue: 'KCGS · 한국컴퓨터그래픽스학회 학술대회',
    year: '2026',
    image: 'assets/project-nerf.jpg'
  },
  {
    id: 'patent-000',
    category: 'patent',
    title: '적층 가능한 라이트필드 기반 가상공간 구축 방법 및 장치 (METHOD AND DEVICE FOR CONSTRUCTING STACKABLE LIGHT FIELD-BASED VIRTUAL SPACE)',
    authors: '이채은, 정현민',
    venue: '등록 국내 1026559080000',
    year: 'Apr. 04, 2024',
    image: ''
  }
];

// Which publication IDs to feature on the Home page (in order shown).
// Curated manually — not "latest". Edit here to change the Home highlights.
const PUBLICATIONS_HOME_FEATURED = ['sc-omnigs', '360loc', 'volcap-tvcg'];

// Human-readable labels for the 5 publication categories.
const PUB_CATEGORIES = [
  { key: 'intl-journal',       label: 'International Journals',    labelKo: '해외 저널' },
  { key: 'domestic-journal',   label: 'Domestic Journals',         labelKo: '국내 저널' },
  { key: 'intl-conference',    label: 'International Conferences', labelKo: '국제 학술대회' },
  { key: 'domestic-conference',label: 'Domestic Conferences',      labelKo: '국내 학술대회' },
  { key: 'patent',             label: 'Patents',                   labelKo: '특허' }
];

// ─── MEMBERS ───────────────────────────────────────────
// `interests` replaces the "0-year" placeholder for junior students.
const MEMBERS = [
  { name: '정현민', nameEn: 'Hyunmin Jung', role: 'Principal Investigator', title: 'Associate Professor · Ph.D.', initial: 'H. Jung', image: 'assets/Members/H.Jung.jpg', interests: ['3D Vision', 'Neural Rendering', 'Immersive Media'] },
  { name: '황우섭', nameEn: 'Woo Seob Hwang', role: 'Ph.D. Student', initial: 'W. Hwang',
    interests: ['Implicit Neural Representation', 'Neural Light Field'] },
  { name: '양서준', nameEn: 'Seojun Yang', role: 'M.S. Student', initial: 'S. Yang',
    interests: ['Implicit Neural Representation', 'Neural Light Field'] },
  { name: '전지우', nameEn: 'Jiwoo Jeon', role: 'M.S. Student', initial: 'J. Jeon',
    interests: ['ProCam', 'Projection Mapping', 'Video Codec'] },
  { name: '정인규', nameEn: 'Ingyu Jeong', role: 'M.S. Student', initial: 'I. Jeong',
    interests: ['Gaussian Splatting', 'GS Compression', 'ProCam'] },
  { name: '강유진', nameEn: 'Yujin Kang', role: 'B.S. Student', initial: 'Y. Kang',
    interests: ['eXtended Reality(XR)', 'Human-Computer Interaction'] },
  { name: '박문선', nameEn: 'Moosun Park', role: 'B.S. Student', initial: 'M. Park',
    interests: ['eXtended Reality(XR)', 'Human-Computer Interaction'] },
  { name: '박인수', nameEn: 'Insu Park', role: 'B.S. Student', initial: 'I. Park',
    interests: ['Gaussian Splatting', 'Generalizable GS, Light Field Display'] },
  { name: '이예빈', nameEn: 'Yebin Lee', role: 'B.S. Student', initial: 'Y. Lee',
    interests: ['Implicit Neural Representation', 'Omnidirectional Rendering', 'Virtual Reality'] },
  { name: '권준용', nameEn: 'Junyong Kwon', role: 'B.S. Student', initial: 'J. Kwon',
    interests: ['Implicit Neural Representation', 'Neural Light Field'] },
  { name: '김도연', nameEn: 'Doyeon Kim', role: 'B.S. Student', initial: 'D. Kim',
    interests: ['3D/4D Gaussian Splatting', 'GS Compression'] },
  { name: '김선우', nameEn: 'Sun Woo KIM', role: 'B.S. Student', initial: 'S. KIM',
    interests: ['Gaussian Splatting', 'ProCam', 'Projection Mapping'] }
];

// Navigation is English-only now.
const NAV_ITEMS = [
  { key: 'home',         en: 'Home',         href: 'index.html' },
  { key: 'research',     en: 'Research',     href: 'research.html' },
  { key: 'publications', en: 'Publications', href: 'publications.html' },
  { key: 'news',         en: 'News',         href: 'news.html' },
  { key: 'members',      en: 'Members',      href: 'members.html' },
  { key: 'contact',      en: 'Contact',      href: 'contact.html' }
];

Object.assign(window, {
  LAB_INFO, NEWS, PROJECTS, PUBLICATIONS,
  PUBLICATIONS_HOME_FEATURED, PUB_CATEGORIES,
  MEMBERS, NAV_ITEMS
});
