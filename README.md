# 실감미디어연구실 · GitHub Pages 배포

이 폴더는 GitHub Pages에 그대로 올릴 수 있는 정적 파일 세트입니다.
Google Sites 페이지 안에 iframe으로 임베드해서 사용합니다.

## 1. GitHub 저장소 준비

```bash
# 1) 이 폴더(docs/)를 GitHub 저장소 루트로 만들기
git init
git add .
git commit -m "initial"

# 2) 원격 저장소 연결 (예: immersive-media-lab)
git remote add origin https://github.com/<계정>/immersive-media-lab.git
git branch -M main
git push -u origin main
```

## 2. GitHub Pages 활성화

1. 저장소 → **Settings** → **Pages**
2. **Source**: `Deploy from a branch`
3. **Branch**: `main` / **폴더**: `/ (root)` 선택
4. Save

몇 분 뒤 다음 주소에서 확인 가능:

```
https://<계정>.github.io/immersive-media-lab/
```

## 3. Google Sites에 iframe 임베드

1. Google Sites 편집 화면 → 우측 메뉴 **삽입 (Insert)** → **삽입 (Embed)**
2. **URL로 삽입** 탭 선택
3. 위의 GitHub Pages 주소 입력
4. 삽입된 프레임의 크기를 페이지 전체(가로 100%, 세로 최소 3000px)로 조정

### 팁

- Google Sites 상단 헤더/제목이 중복돼 보이면, Google Sites 페이지의
  제목 헤더를 **숨김 처리(Style: Cover 최소)** 하거나, "제목 없는 페이지"로
  두는 편이 자연스럽습니다.
- Google Sites의 좌우 여백에 영향을 받으므로,
  가능하면 **템플릿을 "Blank" / 최대 폭**으로 설정하세요.

## 4. 콘텐츠 수정 방법

뉴스, 논문, 구성원 등 모든 텍스트 데이터는 한 파일에 모여 있습니다:

```
js/data.jsx
```

이 파일을 편집한 뒤 다시 커밋·push 하면 자동으로 GitHub Pages에 반영됩니다
(보통 1~2분 소요).

### 자주 편집하는 항목

- **뉴스**: `NEWS` 배열 (최신 3건만 홈에 표시)
- **논문**: `PUBLICATIONS` 배열
- **프로젝트**: `PROJECTS` 배열
- **구성원**: `MEMBERS` 배열
- **연구실 정보**: `LAB_INFO` 객체

이미지는 `assets/` 폴더에 넣고 `image: 'assets/파일명.jpg'` 형태로 참조합니다.

## 파일 구조

```
docs/
├── index.html            # 진입점
├── js/
│   ├── data.jsx          # 콘텐츠 데이터 (여기만 편집)
│   ├── hero3d.jsx        # 히어로 3D (Three.js)
│   └── variant-a.jsx     # 페이지 컴포넌트
└── assets/               # 이미지
    ├── news-*.jpg
    └── project-*.jpg
```

## 커스텀 도메인 (선택)

`immedia.seoultech.ac.kr` 같은 자체 도메인을 쓰려면:

1. 저장소에 `CNAME` 파일 생성, 내용은 도메인만
2. 학교 DNS 관리자에게 CNAME 레코드를 `<계정>.github.io` 로 요청
3. Settings → Pages → Custom domain에 도메인 입력

## 알아둘 것

- 현재 이 페이지는 **CDN에서 React/Babel을 브라우저에서 컴파일**하는 방식입니다.
  → 별도 빌드 없이 파일만 올리면 되지만, 첫 로딩이 1~2초 정도 느립니다.
- 트래픽이 커지거나 로딩을 더 빠르게 하려면 나중에 Vite로 빌드한
  번들 방식으로 전환할 수 있습니다 (별도 문의).
  
