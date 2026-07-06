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
    month: 'Jun.', 
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
    month: 'Jun.', 
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
    month: 'Jun.', 
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
    month: 'Jun.', 
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
    month: 'Jun.', 
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
    month: 'Jun.', 
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
    month: 'Jun.', 
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
    month: 'Jun.', 
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
    month: 'Jun.', 
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
    month: 'Jun.', 
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
    month: 'Jun.', 
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
    month: 'Jun.', 
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
    month: 'Jun.', 
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
    month: 'Jun.', 
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
    month: 'Jul.', 
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
    month: 'Jun.', 
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
    month: 'Jul.', 
    day: '14',
    year: '2020',
    paper: 'https://patentimages.storage.googleapis.com/4f/ba/2e/7e11e50bef31a7/US10713159.pdf',
    image: 'assets/Publications/patent-20-02.jpeg'
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
