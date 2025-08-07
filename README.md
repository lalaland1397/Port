# 코딩마스터 - 프로그래밍 교육 랜딩 페이지

## 📖 프로젝트 소개

코딩마스터는 프로그래밍 교육을 위한 현대적이고 반응형 랜딩 페이지입니다. HTML5, CSS3, JavaScript를 활용하여 제작되었으며, 사용자 친화적인 인터페이스와 부드러운 애니메이션을 제공합니다.

## ✨ 주요 기능

### 🎨 디자인 특징
- **현대적인 UI/UX**: 깔끔하고 직관적인 디자인
- **반응형 웹**: 모든 디바이스에서 최적화된 경험
- **부드러운 애니메이션**: CSS3와 JavaScript를 활용한 인터랙티브 요소
- **그라데이션 효과**: 시각적으로 매력적인 색상 조합

### 🚀 기술적 특징
- **HTML5 시맨틱 마크업**: 접근성과 SEO 최적화
- **CSS3 Flexbox/Grid**: 현대적인 레이아웃 시스템
- **JavaScript ES6+**: 모던 자바스크립트 기능 활용
- **Font Awesome**: 아이콘 라이브러리 사용
- **Google Fonts**: Noto Sans KR 폰트 적용

### 📱 반응형 디자인
- **데스크톱**: 1200px 이상
- **태블릿**: 768px - 1199px
- **모바일**: 767px 이하

## 🛠️ 기술 스택

- **HTML5**: 시맨틱 마크업
- **CSS3**: Flexbox, Grid, 애니메이션
- **JavaScript**: ES6+, DOM 조작, 이벤트 처리
- **Font Awesome**: 아이콘
- **Google Fonts**: 웹 폰트

## 📁 파일 구조

```
WebPage/
├── index.html          # 메인 HTML 파일
├── styles.css          # CSS 스타일시트
├── script.js           # JavaScript 기능
└── README.md           # 프로젝트 설명서
```

## 🎯 페이지 구성

### 1. 네비게이션 (Navigation)
- 고정된 상단 네비게이션
- 스크롤 시 배경 변경 효과
- 모바일 햄버거 메뉴

### 2. 히어로 섹션 (Hero Section)
- 강력한 첫인상 메시지
- 코드 애니메이션 효과
- 행동 유도 버튼

### 3. 과정 섹션 (Courses Section)
- 인기 프로그래밍 과정 소개
- 카드 형태의 레이아웃
- 호버 효과

### 4. 특징 섹션 (Features Section)
- 교육의 장점 소개
- 아이콘과 함께 설명
- 그리드 레이아웃

### 5. 후기 섹션 (Testimonials)
- 수강생 후기
- 실제 사용자 경험
- 신뢰도 향상

### 6. 문의 섹션 (Contact)
- 문의 폼
- 연락처 정보
- 유효성 검사

### 7. 푸터 (Footer)
- 회사 정보
- 소셜 미디어 링크
- 빠른 링크

## 🚀 실행 방법

1. 프로젝트 폴더로 이동
```bash
cd WebPage
```

2. 웹 서버 실행 (선택사항)
```bash
# Python 3
python -m http.server 8000

# Node.js (http-server 설치 필요)
npx http-server

# PHP
php -S localhost:8000
```

3. 브라우저에서 접속
```
http://localhost:8000
```

## 📱 브라우저 지원

- Chrome (최신 버전)
- Firefox (최신 버전)
- Safari (최신 버전)
- Edge (최신 버전)

## 🎨 커스터마이징

### 색상 변경
`styles.css` 파일에서 CSS 변수를 수정하여 색상을 변경할 수 있습니다:

```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #667eea;
    --accent-color: #ffd700;
}
```

### 폰트 변경
Google Fonts에서 다른 폰트를 선택하여 적용할 수 있습니다.

### 콘텐츠 수정
`index.html` 파일에서 텍스트와 이미지를 수정하여 원하는 콘텐츠로 변경할 수 있습니다.

## 🔧 주요 JavaScript 기능

- **스크롤 애니메이션**: Intersection Observer API 활용
- **폼 유효성 검사**: 이메일 형식 검사 등
- **알림 시스템**: 사용자 피드백 제공
- **반응형 네비게이션**: 모바일 햄버거 메뉴
- **부드러운 스크롤**: 네비게이션 링크 클릭 시

## 📈 성능 최적화

- **이미지 최적화**: WebP 형식 사용 권장
- **CSS 최적화**: 불필요한 스타일 제거
- **JavaScript 최적화**: 이벤트 위임 활용
- **폰트 최적화**: Google Fonts 로딩 최적화

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 `LICENSE` 파일을 참조하세요.

## 📞 문의

프로젝트에 대한 문의사항이 있으시면 언제든지 연락해 주세요.

---

**코딩마스터** - 프로그래밍 교육의 새로운 기준 