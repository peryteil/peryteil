from pathlib import Path

content = """
# HTTP Request / Response 구조와 Ajax, Forward, Redirect 정리

## ✅ HTTP의 Request / Response 구조
웹은 클라이언트(브라우저)와 서버가 서로 통신하는 방식으로 동작합니다.
이때 사용되는 기본 프로토콜이 HTTP입니다.

### 🔸 기본 구조
- **Request(요청)**: 클라이언트 -> 서버
- **Response(응답)**: 서버 -> 클라이언트

### 🔸 요청(Request) 구조
- **요청 메서드**: GET, POST, PUT, DELETE 등
- **요청 URL**: 어떤 자원인지 (예:/login, /product/1)
- **헤더(Header)**: 부가 정보 (쿠키, 인증 토큰 등)
- **본문(Body)**: 데이터 (POST, PUT일 때 주로 사용)

### 🔸 응답(Response) 구조
- **상태 코드**: 200(성공), 404(없음), 500(서버 오류) 등
- **헤더(Header)**: 부가 정보(콘텐츠 타입, 쿠키 등)
- **본문(Body)**: HTML, JSON, 이미지 등 실제 데이터

➡️ **한마디로 "클라이언트가 요청(Request)하면, 서버는 응답(Response)한다."**

---

## ✅ Ajax란 무엇인가?
- **Asynchronous JavaScript And XML**
- 페이지 전체를 새로고침하지 않고도 서버와 데이터 교환 가능

### 🔸 특징
- 화면은 그대로 두고, 필요한 데이터만 비동기로 가져옴
- 예) 댓글 추가, 좋아요 버튼 클릭 -> 페이지는 유지된 채 변경됨

### 🔸 동작 흐름
1. 자바스크립트가 브라우저에서 요청을 서버로 보냄
2. 서버가 데이터(JSON 등)를 응답함
3. 자바스크립트가 그 데이터를 받아서 화면 일부를 수정

---

## ✅ Forward와 Redirect 차이

| 구분 | Forward | Redirect |
|------|---------|----------|
| **동작** | 서버 내부 이동 | 클라이언트에게 새 요청 지시 |
| **주소창** | 변경 없음 | 주소 변경됨 |
| **요청 횟수** | 1회 (서버 내부) | 2회 (클라이언트 -> 서버) |
| **속도** | 빠름 | 상대적으로 느림 |
| **사용 예** | 로그인 후 대시보드 페이지 내부 이동 | 로그인 후 메인 페이지로 주소 변경 |

### 🔸 Forward
- 서버 내부에서 처리만 넘김
- 브라우저 주소창은 변하지 않음
- 예) `/login` -> 내부적으로 `/main`으로 넘기지만 주소는 `/login`

### 🔸 Redirect
- 클라이언트에게 "**다른 URL로 가세요**"라고 지시
- 브라우저 주소창이 변경됨
- 예) `/login` -> redirect:/main -> 주소창 `/main`

---

## ✅ 핵심 정리

| 개념 | 설명 |
|------|------|
| **HTTP Request/Response** | 웹의 기본 구조. 클라이언트가 요청하면 서버가 응답함. |
| **Ajax** | 새로고침 없이 서버와 데이터만 주고받음. |
| **Forward** | 서버 내부 페이지 이동. 주소창 변화 없음. |
| **Redirect** | 클라이언트가 새로 서버에 요청하도록 지시. 주소창 변화 있음. |

"""

file_path = Path('/mnt/data/HTTP_Request_Response_Ajax_Forward_Redirect.md')
file_path.write_text(content, encoding='utf-8')
file_path
