# CORS 정책과 웹 보안 기본 개념

## 1. Origin (출처)
- **Origin**은 웹 요청이 발생한 **프로토콜(Protocol)**, **도메인(Domain)**, **포트(Port)**의 조합을 의미합니다.
- 예시:
  - `https://example.com:443` → 프로토콜: `https`, 도메인: `example.com`, 포트: `443`
- **Same-Origin Policy (동일 출처 정책)**:
  - 웹 브라우저는 기본적으로 동일 출처에서만 리소스를 요청할 수 있도록 제한합니다.
  - 다른 출처의 리소스를 요청하려면 CORS 정책을 통해 허용이 필요합니다.

---

## 2. CORS (Cross-Origin Resource Sharing)
- CORS는 **다른 출처(Origin)**에서 리소스를 요청할 수 있도록 허용하는 웹 보안 메커니즘입니다.
- 서버가 브라우저에 특정 출처에서의 요청을 허용하도록 응답 헤더에 정보를 추가해야 합니다.

### CORS 동작 방식
1. 클라이언트가 서버에 요청
2. 브라우저가 요청의 출처를 확인
3. 서버가 응답 헤더(`Access-Control-Allow-Origin`)로 허용 여부를 반환
4. 브라우저가 허용된 경우에만 요청 성공

---

## 3. CORS 관련 주요 Header
| 헤더 이름 | 설명 |
|----------|------|
| **Access-Control-Allow-Origin** | 허용할 Origin을 지정 (`*` 또는 특정 도메인) |
| **Access-Control-Allow-Methods** | 허용할 HTTP 메서드 지정 (GET, POST, PUT, DELETE 등) |
| **Access-Control-Allow-Headers** | 요청에서 사용할 수 있는 헤더 지정 |
| **Access-Control-Allow-Credentials** | 쿠키/인증정보를 포함한 요청 허용 여부 (`true`/`false`) |

---

## 4. Preflight 요청
- **Preflight 요청**은 CORS 요청 중 브라우저가 먼저 보내는 **OPTIONS** 메서드 요청입니다.
- 이유:
  - 요청이 안전한지, 허용된 메서드와 헤더가 무엇인지 사전 확인하기 위해 사용
- 발생 조건:
  1. `GET`, `POST`, `HEAD` 외의 HTTP 메서드를 사용할 때
  2. 커스텀 헤더(예: Authorization)를 포함할 때
  3. Content-Type이 `application/x-www-form-urlencoded`, `multipart/form-data`, `text/plain` 이외일 때

---

## 5. 웹 보안 기본 개념
- **XSS (Cross-Site Scripting)**: 악성 스크립트를 삽입해 사용자 세션 탈취 가능
- **CSRF (Cross-Site Request Forgery)**: 사용자가 의도치 않은 요청을 보내게 유도
- **SQL Injection**: SQL 쿼리에 악성 입력을 주입해 DB 접근/조작
- **HTTPS**: TLS/SSL을 이용해 통신 암호화

---

## 6. CORS 해결 방법
1. **서버에서 허용 헤더 설정**
   ```js
   // Express 예시
   app.use((req, res, next) => {
       res.header("Access-Control-Allow-Origin", "https://example.com");
       res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
       res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
       next();
   });
   ```
2. **프록시 서버 사용**
3. **브라우저 CORS 플러그인(개발환경 한정)**

---

## 참고
- MDN Web Docs: [CORS](https://developer.mozilla.org/ko/docs/Web/HTTP/CORS)
