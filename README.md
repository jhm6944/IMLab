# Immersive Media Lab (IMMEDIA)

서울과학기술대학교 스마트ICT융합공학과 **실감미디어연구실 (Immersive Media Lab, IMMEDIA)**의 공식 홈페이지 소스 코드 저장소입니다. 

🌐 **Website:** [https://jhm6944.github.io/IMLab/](https://jhm6944.github.io/IMLab/)

---

## 🛠️ 웹사이트 내용 수정 방법 (For Members)

이 웹사이트는 별도의 복잡한 서버 구축 없이, 지정된 파일 하나만 수정하면 자동으로 화면에 반영되도록 설계되었습니다. 홈페이지의 텍스트나 공지사항을 수정하려면 아래의 파일을 편집해 주세요.

*   **데이터 수정 파일:** `js/data.jsx`

### 주요 수정 항목
*   **`NEWS`**: 최근 소식, 학회 참가, 수상 내역 등 (가장 위에 적은 항목이 홈페이지 메인에 뜹니다)
*   **`PROJECTS`**: 진행 중이거나 완료된 연구 과제 목록
*   **`PUBLICATIONS`**: 연구실 논문 및 특허 출판물 목록
*   **`MEMBERS`**: 연구실 교수진, 대학원생, 학부연구생 목록

**※ 이미지 추가 방법**
새로운 사진은 `assets/` 폴더에 업로드한 뒤, `data.jsx` 파일 안에서 `image: 'assets/사진이름.jpg'` 와 같이 파일명을 연결해 주면 됩니다.
