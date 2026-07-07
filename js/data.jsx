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
    id: 'proj-26-02',
    title: '디지털선도기술핵심인재양성(R&D) AI반도체융합전공 학·석사 연계과정',
    year: '2026-2030',
    tag: 'AI Semiconductor',
    ongoing: true,
    sponsor: '한국연구재단 (NRF)',
    image: 'assets/Projects/proj-26-02.png',
    desc: '학부와 석사 과정을 통합하여 현장에 즉시 투입 가능한 인공지능 반도체 고급 인재 양성 프로그램.'
  },
  {
    id: 'proj-26-01',
    title: '라이트필드 디스플레이를 위한 실시간 고정밀-고효율-고속 라이트필드 처리 프레임워크',
    year: '2026-2029',
    tag: 'Immersive Media',
    ongoing: true,
    sponsor: '정보통신기획평가원 (IITP)',
    image: 'assets/Projects/proj-26-01.png',
    desc: '라이트필드 디스플레이를 위한 대규모/대용량 라이트필드 데이터의 실시간 고정밀-고효율-고속 라이트필드 처리 프레임워크 개발.'
  },
  {
    id: 'proj-23-01',
    title: '스트리밍 3차원 디지털미디어 서비스 기술',
    year: '2023-2025',
    tag: '3D Media Streaming',
    ongoing: false,
    sponsor: '정보통신기획평가원 (IITP)',
    image: 'assets/Projects/proj-23-01.png',
    desc: '3차원 디지털미디어를 사용자 미디어 이용 환경과 디바이스 속성을 반영한 최적의 3D 스트리밍 기술 개발.'
  },
  {
    id: 'proj-21-01',
    title: '라이트 필드 기반 실감 미디어 통합 플랫폼',
    year: '2021-2024',
    tag: 'Immersive Media',
    ongoing: false,
    sponsor: '삼성미래기술육성사업',
    image: 'assets/Projects/proj-21-01.png',
    desc: '증강/가상현실(AR·VR) 시스템을 위한 라이트 필드 기반의 시공간 초월 몰입형 미디어 획득 및 처리 기술 연구.'
  },
  {
    id: 'proj-21-02',
    title: 'Volumetric Media 실시간 스트리밍 SW 개발',
    year: '2021-2023',
    tag: 'Immersive Media',
    ongoing: false,
    sponsor: '한국전자통신연구원(ETRI)',
    image: 'assets/Projects/proj-21-02.png',
    desc: 'Volumetric Media 실시간 스트리밍 SW 개발.'
  }
];

// ─── PUBLICATIONS ─────────────────────────────────────
// category: 'intl-journal' | 'domestic-journal' | 'intl-conference' | 'domestic-conference' | 'patent'
// Optional links: paper (PDF / DOI / arXiv), code (GitHub), project (project page).
const PUBLICATIONS = [
  {
    id: 'intl-journal-26-01',
    category: 'intl-journal',
    title: 'CONXA: A CONvnext and CROSS-attention combination network for Semantic Edge Detection',
    authors: 'Gwangsoo Kim, Hyuk-jae Lee, Hyunmin Jung',
    venue: 'Image and Vision Computing (Vol.166)',
    month: 'Feb.', 
    year: '2026',
    paper: 'https://doi.org/10.1016/j.imavis.2025.105867',
    code: 'https://github.com/GSKIM13/CONXA/',
    image: 'assets/Publications/intl-journal-26-01.png'
  },
  {
    id: 'intl-journal-25-03',
    category: 'intl-journal',
    title: 'Scalable Neural Light Field with Layer Add-ons of Multi-Layer Perceptron',
    authors: 'Hyunmin Jung',
    venue: 'IEEE Multimedia (Vol.33, No.1)',
    month: 'Oct.', 
    year: '2025',
    paper: 'https://doi.org/10.1109/MMUL.2025.3615162',
    image: 'assets/Publications/intl-journal-25-03.png'
  },
  {
    id: 'intl-journal-25-02',
    category: 'intl-journal',
    title: 'Scalable Neural Light Field with Layer Add-ons of Multi-Layer Perceptron',
    authors: 'InGyu Jeong, Hyunmin Jung',
    venue: 'IEEE Multimedia (Vol.32, No.3)',
    month: 'June', 
    year: '2025',
    paper: 'https://doi.org/10.1109/MMUL.2025.3581588',
    image: 'assets/Publications/intl-journal-25-02.png'
  },
  {
    id: 'intl-journal-25-01',
    category: 'intl-journal',
    title: 'Neural light fields with N-dimensional voxel grids: a performance evaluation across voxel grid dimension',
    authors: 'InGyu Jeong, Hyunmin Jung',
    venue: 'IEICE Electronics Express (Vol.22, No.9)',
    month: 'May', 
    year: '2025',
    paper: 'https://doi.org/10.1587/elex.22.20250141',
    image: 'assets/Publications/intl-journal-25-01.png'
  },
  {
    id: 'intl-journal-23-02',
    category: 'intl-journal',
    title: 'Immersive Virtual Reality Content Supporting a Wide and Free Viewpoint made with a Single 360° Camera',
    authors: 'Hyunmin Jung, Hyuk-Jae Lee, Chae Eun Rhee',
    venue: 'IEEE Access (Vol.11)',
    month: 'May', 
    year: '2023',
    paper: 'https://doi.org/10.1109/ACCESS.2023.3279726',
    image: 'assets/Publications/intl-journal-23-02.png'
  },
  {
    id: 'intl-journal-23-01',
    category: 'intl-journal',
    title: 'Enabling Five-Degree-of-Freedom from Low-Dimensional Light Fields with Extended Light Ray Acquisition Field-of-View',
    authors: 'Hyunmin Jung, Hyuk-Jae Lee, Chae Eun Rhee',
    venue: 'IEEE Access (Vol.11)',
    month: 'Apr.', 
    year: '2023',
    paper: 'https://doi.org/10.1109/ACCESS.2023.3267768',
    image: 'assets/Publications/intl-journal-23-01.png'
  },
  {
    id: 'intl-journal-22-01',
    category: 'intl-journal',
    title: 'Data Orchestration for Accelerating GPU-Based Light Field Rendering Aiming at a Wide Virtual Space',
    authors: 'Seungho Lee, Hyunmin Jung, Chae Eun Rhee',
    venue: 'IEEE Transactions on Circuits and Systems for Video Technology (Vol.32, No.6)',
    month: 'June', 
    year: '2022',
    paper: 'https://doi.org/10.1109/TCSVT.2021.3121010',
    image: 'assets/Publications/intl-journal-22-01.png'
  },
  {
    id: 'intl-journal-20-02',
    category: 'intl-journal',
    title: 'Bit width Reduction of Write Counters for Wear Leveling in a Phase-Change Memory System',
    authors: 'Hyokeun Lee, Hyunmin Jung, Hyuk-Jae Lee, Hyun Kim',
    venue: 'IEIE Transactions on Smart Processing & Computing (Vol.9, No.5)',
    month: 'Oct.', 
    year: '2020',
    paper: 'https://doi.org/10.5573/IEIESPC.2020.9.5.413',
    image: 'assets/Publications/intl-journal-20-02.png'
  },
  {
    id: 'intl-journal-20-01',
    category: 'intl-journal',
    title: 'Flexibly Connectable Light Field System for Free View Exploration',
    authors: 'Hyunmin Jung, Chae Eun Rhee, Hyuk-Jae Lee',
    venue: 'IEEE Transactions on Multimedia (Vol.22, No.4)',
    month: 'Apr.', 
    year: '2020',
    paper: 'https://doi.org/10.1109/TMM.2019.2934819',
    image: 'assets/Publications/intl-journal-20-01.png'
  },
  {
    id: 'intl-journal-19-02',
    category: 'intl-journal',
    title: 'Power-Time Exploration Tools for NMP-enabled Systems',
    authors: 'Chae Eun Rhee, Seung-Won Park, Jungwoo Choi, Hyunmin Jung, Hyuk-Jae Lee',
    venue: 'MDPI Electronics (Vol.8, No.10)',
    month: 'Sep.', 
    year: '2019',
    paper: 'https://doi.org/10.3390/electronics8101096',
    image: ''
  },
  {
    id: 'intl-journal-19-01',
    category: 'intl-journal',
    title: 'HAD-TWL: Hot Address Detection-based Wear Leveling for Phase-Change Memory Systems with Low Latency',
    authors: 'Sunwoong Kim, Hyunmin Jung, Woojae Shin, Hyokeun Lee, Hyuk-Jae Lee',
    venue: 'IEEE Computer Architecture Letters (Vol.18, No.2)',
    month: 'July', 
    year: '2019',
    paper: 'https://doi.org/10.1109/LCA.2019.2929393',
    image: ''
  },
  {
    id: 'intl-conf-26-01',
    category: 'intl-conference',
    title: 'EGGS: Explicitly Granular 3D Gaussian Splatting via Luma-Aware and Volume-Preserving Attribute Factorization',
    authors: 'InGyu Jeong, Hyunmin Jung',
    venue: 'European Conference on Computer Vision (ECCV)',
    month: 'Sep.', 
    year: '2026',
    // paper: '10.1109/ICCE63647.2025.10929914',
    code: 'https://github.com/Ingyu-Jeong/EGGS',
    image: 'assets/Publications/intl-conf-26-01.png'
  },
  {
    id: 'intl-conf-25-01',
    category: 'intl-conference',
    title: 'Semantic Edge Detection with ConvNeXt and Bi-directional MLA',
    authors: 'Gwangsoo Kim, Hyuk-jae Lee, and Hyunmin Jung',
    venue: 'IEEE International Conference on Consumer Electronics (ICCE)',
    month: 'Jan.', 
    year: '2025',
    paper: 'https://doi.org/10.1109/ICCE63647.2025.10929914',
    image: 'assets/Publications/intl-conf-25-01.png'
  },
  {
    id: 'intl-conf-24-01',
    category: 'intl-conference',
    title: 'Tri-Directional Decoder for Edge Discontinuity Classification',
    authors: 'Jiayue Wang, Hyuk-Jae Lee, Hansang Cho, Byungsoo Kang, and Hyunmin Jung',
    venue: 'IEEE International Symposium on Circuits and Systems (ISCAS)',
    month: 'May', 
    year: '2024',
    paper: 'https://doi.org/10.1109/ISCAS58744.2024.10558011',
    image: 'assets/Publications/intl-conf-24-01.png'
  },
  {
    id: 'intl-conf-23-01',
    category: 'intl-conference',
    title: 'Improving the Compression Efficiency of Displacement using Morton-ordered Micro-Image in Video-based Dynamic Mesh Coding',
    authors: 'Yongwook Seo, Gwangcheol Ryu, Chae Eun Rhee, Hyunmin Jung, Dayun Nam, Hyuncheol Kim, Seongyong Lim',
    venue: 'IEEE International Symposium on Circuits and Systems (ISCAS)',
    month: 'May', 
    year: '2023',
    paper: 'https://doi.org/10.1109/ISCAS46773.2023.10182003',
    image: 'assets/Publications/intl-conf-23-01.png'
  },
  {
    id: 'intl-conf-22-03',
    category: 'intl-conference',
    title: 'Re-ordered Micro Image based High Efficient Residual Coding in Light Field Compression',
    authors: 'Hyunmin Jung, Hyuk-Jae Lee, Chae Eun Rhee',
    venue: 'ACM Multimedia (ACMMM)',
    month: 'Oct.', 
    year: '2022',
    // tag: 'highlight',
    paper: 'https://doi.org/10.1145/3503161.3548279',
    image: 'assets/Publications/intl-conf-22-03.png'
  },
  {
    id: 'intl-conf-22-02',
    category: 'intl-conference',
    title: 'Rendering for 3D Light Field compsed of 360-degree Images',
    authors: 'Du Yeol Lee, Hyunmin Jung, Chae Eun Rhee',
    venue: 'International Technical Conference on Circuit/Systems, Computers and Communications (ICT-CSCC)',
    month: 'July', 
    year: '2022',
    paper: 'https://doi.org/10.1109/ITC-CSCC55581.2022.9895012',
    image: ''
  },
  {
    id: 'intl-conf-22-01',
    category: 'intl-conference',
    title: 'Disparity Estimation using Light Ray Pair in Stacked 3D Light Field',
    authors: 'Hyunmin Jung, Hyuk-Jae Lee, Chae Eun Rhee',
    venue: 'IEEE International Conference on Artificial Intelligence Circuits and Systems (AICAS)',
    month: 'June', 
    year: '2022',
    paper: 'https://doi.org/10.1109/AICAS54282.2022.9870014',
    image: 'assets/Publications/intl-conf-22-01.png'
  },
  {
    id: 'intl-conf-18-01',
    category: 'intl-conference',
    title: 'Ray-space360: an extension of ray-space for omnidirectional free viewpoint',
    authors: 'Hyunmin Jung, Hyuk-Jae Lee, Chae Eun Rhee',
    venue: 'IEEE International Symposium on Circuits and Systems (ISCAS)',
    month: 'May', 
    year: '2018',
    paper: 'https://doi.org/10.1109/ISCAS.2018.8351480',
    image: 'assets/Publications/intl-conf-18-01.png'
  },
  {
    id: 'intl-conf-15-01',
    category: 'intl-conference',
    title: 'Coding efficiency of the context-based arithmetic coding engine of AVS 2.0 inn the HEVC encoder',
    authors: 'Hyunmin Jung, Soonwoo Choi, Soo-Ik Chae',
    venue: 'IEEE International Conference on Consumer Electronics (ICCE)',
    month: 'Jan.', 
    year: '2015',
    paper: 'https://doi.org/10.1109/ICCE.2015.7066452',
    image: ''
  },
  {
    id: 'domestic-journal-26-01',
    category: 'domestic-journal',
    title: 'Positional Encoding, Sine 활성화 함수, Fourier Reparameterization 기반 뉴럴라이트필드 표현력 분석',
    authors: '장영진, 정현민',
    venue: '방송공학회논문지(Vol.31, No.3)',
    month: 'May', 
    day: '31',
    year: '2026',
    paper: 'https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12856029',
    image: 'assets/Publications/domestic-journal-26-01.png'
  },
  {
    id: 'domestic-journal-25-02',
    category: 'domestic-journal',
    title: '뉴럴 라이트필드 MLP 모델의 효율성 개선을 위한 Bit Precision 변화에 따른 성능 비교 연구',
    authors: '양서준, 정현민',
    venue: '방송공학회논문지(Vol.30, No.6)',
    month: 'Nov.', 
    day: '30',
    year: '2025',
    paper: 'https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12481441',
    image: 'assets/Publications/domestic-journal-25-02.png'
  },
  {
    id: 'domestic-journal-25-01',
    category: 'domestic-journal',
    title: 'HAP 코덱을 활용한 8K 이상 초고해상도 영상 실시간 재생 최적화 연구',
    authors: '전지우, 정현민',
    venue: '방송공학회논문지(Vol.30, No.4)',
    month: 'July', 
    day: '31',
    year: '2025',
    paper: 'https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12295609',
    image: 'assets/Publications/domestic-journal-25-01.png'
  },
  {
    id: 'domestic-journal-24-01',
    category: 'domestic-journal',
    title: 'Neural Light Field 뷰 합성 성능 예측에 효과적인 이미지 복잡도 평가지표에 관한 연구',
    authors: '김윤동, 정현민',
    venue: '방송공학회논문지(Vol.29, No.5)',
    month: 'Sep.', 
    day: '30',
    year: '2024',
    paper: 'https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE11933328',
    image: 'assets/Publications/domestic-journal-24-01.png'
  },
  {
    id: 'domestic-conf-26-04',
    category: 'domestic-conference',
    title: '확장현실 기기에서의 실시간 AI 객체 탐지를 위한 클라우드 기반 시스템 구현 및 검증',
    authors: '박문선, 정현민',
    venue: '한국방송미디어공학회 2026 하계학술대회',
    month: 'June', 
    day: '20',
    year: '2026',
    paper: '',
    image: ''
  },
  {
    id: 'domestic-conf-26-03',
    category: 'domestic-conference',
    title: '단일 360도 이미지를 활용한 PeRF 기반 공간 재구성 및 가려짐 영역에 따른 성능 한계 분석',
    authors: '이예빈, 정현민',
    venue: '한국방송미디어공학회 2026 하계학술대회',
    month: 'June', 
    day: '20',
    year: '2026',
    paper: '',
    image: ''
  },
  {
    id: 'domestic-conf-26-02',
    category: 'domestic-conference',
    title: '직관적 사용자 경험을 위한 메타 퀘스트 3 기반 XR-AI 멀티모달 인터랙션 앱 설계 및 구현',
    authors: '강유진, 정현민',
    venue: '한국방송미디어공학회 2026 하계학술대회',
    month: 'June', 
    day: '20',
    year: '2026',
    paper: '',
    image: ''
  },
  {
    id: 'domestic-conf-26-01',
    category: 'domestic-conference',
    title: '전·후면 이미지와 생성형 AI를 활용한 일관성 있는 인물 3D 포인트 클라우드 생성 방법',
    authors: '박인수, 정현민',
    venue: '한국방송미디어공학회 2026 하계학술대회',
    month: 'June', 
    day: '20',
    year: '2026',
    paper: '',
    image: ''
  },
  {
    id: 'domestic-conf-25-09',
    category: 'domestic-conference',
    title: '메타버스를 활용한 360도 실감형 다중 사용자 교육 플랫폼 구현 연구',
    authors: '윤하영, 공수정, 정현민',
    venue: '한국방송미디어공학회 2025 동계학술대회',
    month: 'Dec.', 
    day: '30',
    year: '2025',
    paper: 'https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12571873',
    image: ''
  },
  {
    id: 'domestic-conf-25-10',
    category: 'domestic-conference',
    title: '실시간 표정 인식 기반 2D 캐릭터 연동 챗봇 인터페이스 개발',
    authors: '문성현, 정현민',
    venue: '한국방송미디어공학회 2025 동계학술대회',
    month: 'Dec.', 
    day: '30',
    year: '2025',
    paper: 'https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12571874',
    image: ''
  },
  {
    id: 'domestic-conf-25-11',
    category: 'domestic-conference',
    title: 'Isotropic 3D 가우시안 스플래팅을 활용한 동적 장면의 밀집한 포인트 클라우드 재구성',
    authors: '정인규, 정현민',
    venue: '한국방송미디어공학회 2025 동계학술대회',
    month: 'Dec.', 
    day: '30',
    year: '2025',
    paper: 'https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12571858',
    image: ''
  },
  {
    id: 'domestic-conf-25-12',
    category: 'domestic-conference',
    title: 'Grid 기반 뉴럴 라이트필드 모델의 시간 도메인 확장 방법에 따른 성능 분석',
    authors: '양서준, 정현민',
    venue: '한국방송미디어공학회 2025 동계학술대회',
    month: 'Dec.', 
    day: '30',
    year: '2025',
    paper: 'https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12571860',
    image: ''
  },
  {
    id: 'domestic-conf-25-13',
    category: 'domestic-conference',
    title: '프로젝션 맵핑 환경에서의 다중 PC 기반 사용자 입력 실시간 Fade-in/out 전환 기법',
    authors: '전지우, 정현민',
    venue: '한국방송미디어공학회 2025 동계학술대회',
    month: 'Dec.', 
    day: '30',
    year: '2025',
    paper: 'https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12571859',
    image: ''
  },
  {
    id: 'domestic-conf-25-07',
    category: 'domestic-conference',
    title: '미디어파이프 기반의 얼굴 영역 추출과 이를 활용한 CNN 모델 기반 표정 인식 성능 개선',
    authors: '임동휘, 정현민',
    venue: '한국방송미디어공학회 2025 추계학술대회',
    month: 'Nov.', 
    day: '14',
    year: '2025',
    paper: 'https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12492879',
    image: ''
  },
  {
    id: 'domestic-conf-25-08',
    category: 'domestic-conference',
    title: '뉴럴 라이트필드 학습 성능 최적화를 위한 활성화 함수별 성능 분석',
    authors: '이예빈, 정현민',
    venue: '한국방송미디어공학회 2025 추계학술대회',
    month: 'Nov.', 
    day: '14',
    year: '2025',
    paper: 'https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12492878',
    image: ''
  },  
  {
    id: 'domestic-conf-25-01',
    category: 'domestic-conference',
    title: '4D Gaussian Splatting 기반의 동적 포인트 클라우드 생성 방법 연구',
    authors: '김보연, 정현민',
    venue: '한국방송미디어공학회 2025 하계학술대회',
    month: 'June', 
    day: '24',
    year: '2025',
    paper: 'https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12288366',
    image: ''
  },
  {
    id: 'domestic-conf-25-02',
    category: 'domestic-conference',
    title: '뉴럴 라이트필드 MLP 모델의 Bit Precision 변화에 따른 성능 비교 연구',
    authors: '양서준, 정현민',
    venue: '한국방송미디어공학회 2025 하계학술대회',
    month: 'June', 
    day: '24',
    year: '2025',
    paper: 'https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12288354',
    image: ''
  },
  {
    id: 'domestic-conf-25-03',
    category: 'domestic-conference',
    title: '사용자의 헤드 모션에 따른 임의의 시점 뷰 생성을 위한 XR 라이트필드 디스플레이 개발',
    authors: '이서린, 정현민',
    venue: '한국방송미디어공학회 2025 하계학술대회',
    month: 'June', 
    day: '24',
    year: '2025',
    paper: 'https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12288367',
    image: ''
  },
  {
    id: 'domestic-conf-25-04',
    category: 'domestic-conference',
    title: '초고해상도 영상 재생을 위한 HAP 코덱 기반 비디오 플레이어 개발 연구',
    authors: '전지우, 정현민',
    venue: '한국방송미디어공학회 2025 하계학술대회',
    month: 'June', 
    day: '24',
    year: '2025',
    paper: 'https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12288299',
    image: ''
  },
  {
    id: 'domestic-conf-25-05',
    category: 'domestic-conference',
    title: '다차원 복셀 그리드 조합을 이용한 메모리 효율 성 이 높 은 실시간 뉴럴 라이트 필드 렌더링',
    authors: '정인규, 정현민',
    venue: '한국방송미디어공학회 2025 하계학술대회',
    month: 'June', 
    day: '24',
    year: '2025',
    paper: 'https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12288355',
    image: ''
  },
  {
    id: 'domestic-conf-25-06',
    category: 'domestic-conference',
    title: '뉴럴라이트필드 기반의 자유 시점 변환을 지원하는 가상현실 콘텐츠 개발과 메타퀘스트3를 이용한 HMD 환경에서의 동작 검증',
    authors: '김민서, 양서준, 정현민',
    venue: '한국방송미디어공학회 2025 하계학술대회',
    month: 'June', 
    day: '24',
    year: '2025',
    paper: 'https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12288365',
    image: ''
  },
  {
    id: 'domestic-conf-24-04',
    category: 'domestic-conference',
    title: '다중 깊이 카메라와 3차원 모델 정합 알고리즘을 이용한 웹 서버 기반 포인트 클라우드 비디오 스트리밍 시스템 구축 연구',
    authors: '김보연, 전지우, 김윤동, 정현민',
    venue: '한국방송미디어공학회 2024 추계학술대회',
    month: 'Nov.', 
    day: '21',
    year: '2024',
    paper: 'https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE11995488',
    image: ''
  },
  {
    id: 'domestic-conf-24-05',
    category: 'domestic-conference',
    title: '확장현실 디바이스를 고려한 포인트 클라우드 비디오 실시간 스트리밍 시스템 구축 연구',
    authors: '이서린, 김민서, 정현민',
    venue: '한국방송미디어공학회 2024 추계학술대회',
    month: 'Nov.', 
    day: '21',
    year: '2024',
    paper: 'https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE11995489',
    image: ''
  },
  {
    id: 'domestic-conf-24-06',
    category: 'domestic-conference',
    title: '순차 정수 인코더를 이용한 온습도 기후 데이터 압축 효율 분석에 관한 연구',
    authors: '이정훈, 정현민',
    venue: '한국방송미디어공학회 2024 추계학술대회',
    month: 'Nov.', 
    day: '21',
    year: '2024',
    paper: 'https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE11995490',
    image: ''
  },
  {
    id: 'domestic-conf-24-01',
    category: 'domestic-conference',
    title: '교차된 평면을 가정하는 두 뉴럴 라이트 필드 연결을 통한 렌더링 가능한 Field-of-View의 확장',
    authors: '정인규, 김보연, 정현민',
    venue: '한국방송미디어공학회 2024 하계학술대회',
    month: 'June', 
    day: '28',
    year: '2024',
    paper: 'https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE11849271',
    image: ''
  },
  {
    id: 'domestic-conf-24-02',
    category: 'domestic-conference',
    title: 'Neural Light Field와 웹 서버를 이용한 실시간 View Synthesis 렌더링 웹 서비스 구현',
    authors: '양서준, 이서린, 정현민',
    venue: '한국방송미디어공학회 2024 하계학술대회',
    month: 'June', 
    day: '28',
    year: '2024',
    paper: 'https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE11849272',
    image: ''
  },
  {
    id: 'domestic-conf-24-03',
    category: 'domestic-conference',
    title: '고속 렌더링을 위한 Image Plane 분할 학습 기반 Neural Light Field',
    authors: '전지우, 정현민',
    venue: '한국방송미디어공학회 2024 하계학술대회',
    month: 'June', 
    day: '28',
    year: '2024',
    paper: 'https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE11849273',
    image: ''
  },
  {
    id: 'domestic-conf-23-01',
    category: 'domestic-conference',
    title: '벽 면과 바닥 면을 기준 평면으로 활용하는 포인트 클라우드의 정합과 벽 면과 바닥 면의 재배치를 통한 포인트 클라우드의 재구성',
    authors: '김보연, 공수정, 김민서, 정현민',
    venue: '한국방송미디어공학회 2023 추계학술대회',
    month: 'Nov.', 
    day: '21',
    year: '2023',
    paper: 'https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE11742698',
    image: ''
  },
  {
    id: 'domestic-conf-23-02',
    category: 'domestic-conference',
    title: '클래스 적응형 손실 함수 비율 조정 기반 시맨틱 에지 검출 성능 개선',
    authors: '김진표, 양서준, 정현민',
    venue: '한국방송미디어공학회 2023 추계학술대회',
    month: 'Nov.', 
    day: '21',
    year: '2023',
    paper: 'https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE11742701',
    image: ''
  },
  {
    id: 'domestic-conf-22-01',
    category: 'domestic-conference',
    title: 'Image Denoising Using Various Down Sampling Networks',
    authors: '박솔아, 정현민, 이혁재',
    venue: '대한전자공학회 2022 하계종합학술대회',
    month: 'June', 
    day: '29',
    year: '2022',
    image: ''
  },
  {
    id: 'domestic-conf-20-01',
    category: 'domestic-conference',
    title: 'Bridge Filter를 이용한 Point Cloud 보정',
    authors: '박솔아, 정현민, 이혁재, 류수정, 강영규',
    venue: '대한전자공학회 2020 하계종합학술대회',
    month: 'Aug.', 
    day: '26',
    year: '2020',
    image: ''
  },
  {
    id: 'domestic-conf-20-02',
    category: 'domestic-conference',
    title: '균일한 3D LF 구성을 위한 EPI 기반의 샘플링 기법',
    authors: '정현민, 이혁재, 이채은',
    venue: '제30회 신호처리합동학술대회',
    month: 'Sep.', 
    day: '24',
    year: '2020',
    image: ''
  },
  {
    id: 'domestic-conf-19-01',
    category: 'domestic-conference',
    title: '딥 러닝 기반 프레임 보간 네트워크 중첩',
    authors: '윤일위, 정현민, 이채은, 이혁재',
    venue: '대한전자공학회 2019 하계종합학술대회',
    month: 'June', 
    day: '26',
    year: '2019',
    image: ''
  },
  {
    id: 'domestic-conf-18-01',
    category: 'domestic-conference',
    title: '라이트필드 구성에서 각해상도를 높이기 위한 딥러닝 기반 가상 시점 이미지 생성',
    authors: '윤일위, 정현민, 이채은',
    venue: '대한전자공학회 2018 하계종합학술대회',
    month: 'June', 
    day: '27',
    year: '2018',
    image: ''
  },
  {
    id: 'domestic-conf-18-02',
    category: 'domestic-conference',
    title: '다중 카메라 기반 Light Field 구성에 있어서 Epipolar Plane Image 기반의 Light Field 보정 기법',
    authors: '정현민, 이채은',
    venue: '대한전자공학회 2018 하계종합학술대회',
    month: 'June', 
    day: '27',
    year: '2018',
    image: ''
  },
  {
    id: 'domestic-conf-18-03',
    category: 'domestic-conference',
    title: 'PIM 이종 시스템에서의 Power-Time design space 탐색 방법',
    authors: '최정우, 정현민, 이채은',
    venue: '대한전자공학회 2018 하계종합학술대회',
    month: 'June', 
    day: '27',
    year: '2018',
    image: ''
  },
  {
    id: 'patent-26-01',
    category: 'patent',
    title: '시간적 인접성 및 공간적 인접성을 동시에 이용한 라이트 필드 압축 방법 및 장치',
    authors: '정현민',
    venue: '출원 국내 10-2026-0082430',
    month: 'May', 
    day: '07',
    year: '2026',
    image: ''
  },
  {
    id: 'patent-25-01',
    category: 'patent',
    title: '확장 가능한 뉴럴 라이트 필드(Neural Light Field, NLF) 기반의 임의 뷰 합성 방법 및 장치',
    authors: '정현민, 정인규',
    venue: '출원 국내 10-2025-0120157',
    month: 'Aug.', 
    day: '27',
    year: '2025',
    image: ''
  },
  {
    id: 'patent-25-02',
    category: 'patent',
    title: '서로 다른 차원의 명시적 복셀 그리드를 복합적으로 활용하는 신경 광선장 렌더링 장치',
    authors: '정현민, 정인규',
    venue: '출원 국내 10-2025-0089702',
    month: 'July', 
    day: '04',
    year: '2025',
    image: ''
  },
  {
    id: 'patent-24-01',
    category: 'patent',
    title: '적층 가능한 라이트필드 기반 가상공간 구축 방법 및 장치 (METHOD AND DEVICE FOR CONSTRUCTING STACKABLE LIGHT FIELD-BASED VIRTUAL SPACE)',
    authors: '이채은, 정현민',
    venue: '등록 국내 1026559080000',
    month: 'Apr.', 
    day: '04',
    year: '2024',
    paper: 'https://doi.org/10.8080/1020207031054',
    image: 'assets/Publications/patent-24-01.jpg'
  },
  {
    id: 'patent-24-02',
    category: 'patent',
    title: '비휘발성 메모리의 주소를 관리하는 반도체 장치 (SEMICONDUCTOR DEVICE FOR MANAGING ADDRESSES OF NONVOLATILE MEMORY DEVICE)',
    authors: '정현민, 김선웅, 이효근, 신우재, 이혁재',
    venue: '등록 국내 1026711410000',
    month: 'May', 
    day: '28',
    year: '2024',
    paper: 'https://doi.org/10.8080/1020180078411',
    image: 'assets/Publications/patent-24-02.jpg'
  },
  {
    id: 'patent-24-03',
    category: 'patent',
    title: 'Method and apparatus for virtual space constructing based on stackable light field',
    authors: 'Chae Eun Rhee, Hyunmin Jung',
    venue: '등록 미국 US11869137',
    month: 'Jan.', 
    day: '09',
    year: '2024',
    paper: 'https://patentimages.storage.googleapis.com/53/37/7e/1092e1393e35b7/US20230121124A1.pdf',
    image: 'assets/Publications/patent-24-03.png'
  },
  {
    id: 'patent-24-04',
    category: 'patent',
    title: 'Method of encoding/decoding dynamic mesh and recording medium storing method of encoding/decoding dynamic mesh',
    authors: 'Da Yun NAM, Seong Yong Lim, Hyun Cheol Kim, Chae Eun Rhee, Yong Wook SEO, Hyunmin Jung',
    venue: '출원 미국 US20260120325A1',
    month: 'June', 
    day: '10',
    year: '2024',
    image: ''
  },
  {
    id: 'patent-23-01',
    category: 'patent',
    title: '비휘발성 메모리의 웨어 레벨링 동작을 관리하는 반도체 장치 (SEMICONDUCTOR DEVICE FOR MANAGING WEAR LEVELLING OPERATION OF NONVOLATILE MEMORY DEVICE)',
    authors: '정현민, 김선웅, 이효근, 신우재, 이혁재',
    venue: '등록 국내 1025043680000',
    month: 'Feb.', 
    day: '22',
    year: '2023',
    paper: 'https://doi.org/10.8080/1020170177683',
    image: 'assets/Publications/patent-23-01.jpg'
  },
  {
    id: 'patent-23-02',
    category: 'patent',
    title: 'Method of generating micro image and apparatus therefor',
    authors: 'Chae Eun Rhee, Hyunmin Jung',
    venue: '출원 미국/중국 US20240121371A1/CN117853554A',
    month: 'Oct.', 
    day: '03',
    year: '2023',
    image: ''
  },
  {
    id: 'patent-20-01',
    category: 'patent',
    title: 'SEMICONDUCTOR DEVICE FOR MANAGING COLD ADDRESSES OF NONVOLATILE MEMORY DEVICE',
    authors: 'Hyuk-Jae Lee, Woojae Shin, Hyunmin Jung, Sunwoong Kim, Hyokeun Lee',
    venue: '등록 미국 US10877698',
    month: 'Dec.', 
    day: '29',
    year: '2020',
    paper: 'https://patentimages.storage.googleapis.com/56/5d/14/a92a66bcf078b9/US10877698.pdf',
    image: 'assets/Publications/patent-20-01.jpeg'
  },
  {
    id: 'patent-20-02',
    category: 'patent',
    title: 'SEMICONDUCTOR DEVICE FOR MANAGING WEAR LEVELING OPERATION OF NONVOLATILE MEMORY DEVICE',
    authors: 'Sunwoong Kim, Hyunmin Jung, Hyokeun Lee, Woojae Shin, Hyuk-Jae Lee',
    venue: '등록 미국 US10713159',
    month: 'July', 
    day: '14',
    year: '2020',
    paper: 'https://patentimages.storage.googleapis.com/4f/ba/2e/7e11e50bef31a7/US10713159.pdf',
    image: 'assets/Publications/patent-20-02.jpeg'
  }
];

// Which publication IDs to feature on the Home page (in order shown).
// Curated manually — not "latest". Edit here to change the Home highlights.
const PUBLICATIONS_HOME_FEATURED = ['intl-conf-26-01', 'intl-journal-26-01', 'intl-journal-25-03'];

// Human-readable labels for the 5 publication categories.
const PUB_CATEGORIES = [
  { key: 'intl-journal',       label: 'International Journals',    labelKo: '해외 저널' },
  { key: 'intl-conference',    label: 'International Conferences', labelKo: '국제 학술대회' },
  { key: 'domestic-journal',   label: 'Domestic Journals',         labelKo: '국내 저널' },
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
