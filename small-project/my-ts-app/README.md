# 📸 Instagram Clone Project

> React + TypeScript + Firebase + Tailwind CSS 로 구현한 인스타그램 클론 프로젝트입니다.

---

## 🛠️ 사용 기술 (Tech Stack)

- **React** - UI 개발
- **TypeScript** - 타입 안정성 강화
- **Tailwind CSS** - 유틸리티 기반 CSS 프레임워크
- **Firebase**
  - **Authentication** - 이메일/비밀번호 기반 로그인
  - **Firestore** - 게시글, 댓글, 사용자 정보 저장
  - **Storage** - 이미지 업로드
- **React Router DOM** - SPA 라우팅 처리
- **React Hook Form** - 입력 폼 관리
- **Zustand** - 전역 상태 관리 (선택)

---

## ✨ 주요 기능 (Features)

| 기능             | 설명 |
|------------------|------|
| 🔐 사용자 인증    | 회원가입, 로그인, 로그아웃 |
| 📷 게시물 업로드 | 이미지 + 텍스트 게시글 등록 |
| ❤️ 좋아요        | 게시글 좋아요 기능 |
| 💬 댓글          | 게시글에 댓글 작성 및 표시 |
| 🧑‍💼 프로필       | 내 게시물 보기, 프로필 사진 변경 |
| 🕵️‍♀️ 팔로우 기능  | (선택 구현) 사용자 팔로우/언팔로우 |

---

## 🧾 폴더 구조 (Structure)
src/
│
├── components/ # 공통 UI 컴포넌트
├── pages/ # 각 라우트 페이지
├── hooks/ # 커스텀 훅
├── services/ # Firebase 및 API 연동
├── types/ # TypeScript 타입 정의
├── utils/ # 유틸 함수 모음
├── App.tsx # 메인 앱 컴포넌트
└── main.tsx # 앱 진입점