
# 프로그래밍 아키텍처 패턴 비교 - 깊이 있는 설명

---

## ✅ 1. MVC (Model-View-Controller)

### 📌 구조
```
[사용자] ⇄ [View] ⇄ [Controller] ⇄ [Model]
                          ↑         ↓
                     로직처리     데이터 처리
```

### 📍 구성 요소 설명
| 구성요소   | 역할 |
|-----------|------|
| **Model** | 데이터를 관리 (예: DB, API 연동), 비즈니스 로직 처리 |
| **View** | 사용자 인터페이스(UI), 사용자 입력을 표시함 |
| **Controller** | 사용자 요청을 받아서 처리하고, 적절한 Model/View와 연결 |

---

### 🔄 동작 흐름 예시 (로그인 기능)
1. 사용자가 로그인 폼에 아이디/비밀번호 입력 → View
2. View는 Controller에 전달
3. Controller는 Model에게 인증 요청
4. Model은 DB에서 사용자 정보 조회 → 결과 반환
5. Controller는 결과를 받아 View에 전달
6. View는 로그인 성공/실패 메시지 출력

---

### ✔️ 예시 코드 (Node.js Express 기반)
```js
// Model (UserModel.js)
const users = [{ id: 'admin', pw: '1234' }];
exports.findUser = (id, pw) => users.find(u => u.id === id && u.pw === pw);

// Controller (UserController.js)
const model = require('./UserModel');
exports.login = (req, res) => {
  const { id, pw } = req.body;
  const user = model.findUser(id, pw);
  if (user) res.send('로그인 성공');
  else res.send('로그인 실패');
};

// View (EJS 예시)
<form method="post" action="/login">
  <input name="id" />
  <input name="pw" type="password" />
  <button>로그인</button>
</form>

// Router 연결 (app.js)
app.post('/login', userController.login);
```

---

### 👍 장점
- 역할 분리가 명확해서 유지보수 용이
- 여러 뷰(View)가 같은 모델(Model)을 사용할 수 있음

### 👎 단점
- 프로젝트가 커지면 Controller가 복잡해짐
- View와 Controller 간의 경계가 모호해질 수 있음

---

## ✅ 2. MVP (Model-View-Presenter)

### 📌 구조
```
[사용자] ⇄ [View] ⇄ [Presenter] ⇄ [Model]
            ↑         ↓
     UI렌더링      비즈니스 처리
```

### 📍 구성 요소 설명
| 구성요소   | 역할 |
|-----------|------|
| **Model** | 데이터와 비즈니스 로직 |
| **View** | UI만 담당, Presenter에 의존 |
| **Presenter** | 모든 로직과 흐름 제어. View와 Model 연결. 테스트 용이 |

---

### 🔄 동작 흐름 예시 (로그인)
1. 사용자 로그인 입력 → View
2. View는 Presenter에 전달
3. Presenter가 Model에 로그인 요청
4. 결과를 View에 전달하여 렌더링

---

### ✔️ 예시 코드 (JavaScript 기준)
```js
// Model
const users = [{ id: 'admin', pw: '1234' }];
function loginUser(id, pw) {
  return users.find(u => u.id === id && u.pw === pw);
}

// Presenter
class LoginPresenter {
  constructor(view) {
    this.view = view;
  }
  login(id, pw) {
    const result = loginUser(id, pw);
    if (result) this.view.showSuccess();
    else this.view.showError();
  }
}

// View
class LoginView {
  constructor() {
    this.presenter = new LoginPresenter(this);
  }
  onLoginClick() {
    const id = document.getElementById("id").value;
    const pw = document.getElementById("pw").value;
    this.presenter.login(id, pw);
  }
  showSuccess() {
    alert("로그인 성공!");
  }
  showError() {
    alert("로그인 실패...");
  }
}
```

---

### 👍 장점
- Presenter는 View와 독립적 → 단위 테스트 쉬움
- View는 단순 렌더링만 하므로 코드가 깔끔

### 👎 단점
- 코드량이 늘어나고, Presenter가 방대해질 수 있음
- View-Presenter 연결을 수동으로 해줘야 함

---

## ✅ 3. MVVM (Model-View-ViewModel)

### 📌 구조
```
[사용자] ⇄ [View] ⇄ [ViewModel] ⇄ [Model]
                   ↕ (양방향 바인딩)
```

### 📍 구성 요소 설명
| 구성요소     | 역할 |
|-------------|------|
| **Model**   | 데이터 및 로직 처리 |
| **View**    | UI 화면 (HTML, XML 등) |
| **ViewModel** | View에 표시할 상태 및 데이터 바인딩 담당. 사용자 입력도 처리 |

---

### 🔄 동작 흐름 예시 (로그인)
1. 사용자 입력 → View에 바인딩된 ViewModel 속성이 자동 변경
2. ViewModel이 입력값을 바탕으로 Model에 요청
3. 결과에 따라 ViewModel의 상태값이 갱신되며 View 자동 반영

---

### ✔️ 예시 코드 (React + useState 기반)
```tsx
// Model
const users = [{ id: 'admin', pw: '1234' }];
function authenticate(id: string, pw: string) {
  return users.find(u => u.id === id && u.pw === pw);
}

// ViewModel + View (React Component)
function LoginView() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [msg, setMsg] = useState('');

  const handleLogin = () => {
    const user = authenticate(id, pw);
    setMsg(user ? '로그인 성공' : '로그인 실패');
  };

  return (
    <div>
      <input value={id} onChange={e => setId(e.target.value)} />
      <input type="password" value={pw} onChange={e => setPw(e.target.value)} />
      <button onClick={handleLogin}>로그인</button>
      <p>{msg}</p>
    </div>
  );
}
```

---

### 👍 장점
- View와 ViewModel이 바인딩되어 코드 분리 명확
- 상태 관리가 깔끔하고 유지보수 용이
- 비동기 처리나 UI 상태 표현이 쉬움

### 👎 단점
- 바인딩을 구현하려면 프레임워크나 툴이 필요
- 구조가 추상적이라 초보자에게 어렵게 느껴질 수 있음

---

## 📊 전체 비교 요약

| 항목       | MVC                           | MVP                            | MVVM                            |
|------------|-------------------------------|--------------------------------|---------------------------------|
| View와의 연결 | Controller를 통해 연결          | View → Presenter 호출         | ViewModel과 바인딩               |
| 테스트 용이성 | 보통                          | 매우 좋음                      | 아주 좋음                        |
| 데이터 흐름  | 단방향                        | 단방향                         | **양방향**                       |
| 대표 기술    | Express, Rails                | Android(Java) 초기             | React, Vue, Angular, Jetpack    |
| 주요 단점    | Controller가 커지기 쉬움       | 코드 양 증가, 복잡성 증가      | 초기에 학습 곡선 있음            |
