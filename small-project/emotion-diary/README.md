# 📘 감정 일기장 (Emotion Diary)

감정을 기록하고 하루를 되돌아보는 **감정 일기장 웹앱**입니다.  
React 기반으로 제작되었으며, 사용자는 하루의 기분을 감정 이모지와 함께 남길 수 있습니다.  
기록된 감정과 일기를 조회, 수정, 삭제할 수 있으며, UX를 고려한 깔끔한 디자인과 기능을 제공합니다.

## 🚀 주요 기능

- ✍️ 일기 작성: 날짜, 감정, 텍스트 기반으로 감정 일기 작성
- 📖 일기 목록: 날짜순 정렬된 일기 목록 확인
- 🔍 일기 상세 보기: 클릭 시 작성한 일기 상세 내용 확인
- 🛠️ 일기 수정 및 삭제
- 🎨 감정 선택 UI (이모지 및 색상 표현)
- 📅 날짜 선택 및 자동 포맷팅

## 🛠 기술 스택

### 프론트엔드 (client)
- React
- TypeScript
- Tailwind CSS
- DaisyUI
- React Router
- Axios

### 백엔드 (server)
- Node.js (Express)
- TypeScript
- Prisma ORM
- MySQL (운영용)
- JWT 기반 인증

## 📁 폴더 구조

```
emotion-diary/
├── client/                     # 프론트엔드
│   ├── public/
│   └── src/
│       ├── assets/
│       ├── components/
│       ├── pages/
│       ├── routes/
│       ├── types/
│       ├── App.tsx
│       ├── main.tsx
│       └── index.css
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── tsconfig.json
│
├── server/                     # 백엔드
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── middlewares/
│   │   ├── app.ts
│   │   └── server.ts
│   └── tsconfig.json
│
├── prisma/
│   ├── schema.prisma
│   └── migrations/
│
├── .env
├── .gitignore
├── package.json                # 루트용 패키지 관리
├── README.md
```

---

 ## 📸 미리보기 (Optional)

> 스크린샷 또는 GIF 이미지 삽입

## 📌 향후 개선 사항

- 사용자 인증 추가 (Firebase, JWT 등)
- 데이터 백업 기능 (Google Drive 연동 등)
- 일기 통계 차트 시각화 (감정 비율 등)

## 💡 개발 동기

감정은 순간순간 스쳐 지나가기 때문에 기록하지 않으면 잊혀지기 쉽습니다.  
하루를 돌아보며 내 감정을 시각화하고 기록해보면 더 나은 자기이해와 감정 관리에 도움이 될 수 있다는 생각으로 프로젝트를 기획하게 되었습니다.

---

### 🧑‍💻 개발자

- 이름: [유경현]
- GitHub: [github.com/peryteil](https://github.com/peryteil)