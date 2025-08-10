# 📘 RESTful API 개념과 설계

---

## 1. REST란?

**REST (Representational State Transfer)**는 웹의 기존 기술과 HTTP 프로토콜을 그대로 활용하여, **리소스 기반 아키텍처 스타일**을 설계하는 방법론입니다.  
REST는 다음과 같은 특징을 따릅니다:

- 클라이언트-서버 구조
- 무상태성 (Stateless)
- 캐시 처리 가능
- 계층 구조
- 일관된 인터페이스
- 리소스 기반: URL은 리소스를 표현하고, 행위는 HTTP 메서드로 표현

---

## 2. 주요 HTTP 메서드

| 메서드 | 설명                      | 사용 예시                  |
|--------|---------------------------|----------------------------|
| GET    | 리소스 조회               | `/users`, `/posts/1`       |
| POST   | 리소스 생성               | `/users`                   |
| PUT    | 리소스 전체 수정          | `/users/1`                 |
| PATCH  | 리소스 일부 수정          | `/users/1`                 |
| DELETE | 리소스 삭제               | `/users/1`                 |

---

## 3. RESTful API URL 설계 원칙

- **명사 기반 리소스 사용**: 동사가 아닌 리소스 중심 URL  
  ✅ `/users` ❌ `/getUser`

- **계층적 구조**: 하위 리소스는 계층적으로 표현  
  ✅ `/users/1/posts`

- **복수형 사용**: 일관성 있는 표현  
  ✅ `/users`, `/posts`

- **필터/검색은 쿼리스트링으로**  
  ✅ `/users?age=20`, `/posts?tag=js`

---

## 4. RESTful API 응답 예시 (JSON)

```json
{
  "ok": true,
  "data": {
    "id": 1,
    "name": "Alice",
    "email": "alice@example.com"
  }
}
```

---

## 5. Express + MongoDB 기반 REST API 예제

### 1) 설치

```bash
npm install express mongoose cors
```

### 2) 기본 서버 코드

```ts
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/rest-api')
```

---

### 3) Mongoose 모델

```ts
import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  name: String,
  email: String
}, { timestamps: true })

export const User = mongoose.model('User', userSchema)
```

---

### 4) RESTful 라우팅

```ts
import { Router } from 'express'
import { User } from './models/User'

const router = Router()

// 전체 조회
router.get('/users', async (req, res) => {
  const users = await User.find()
  res.json({ ok: true, data: users })
})

// 개별 조회
router.get('/users/:id', async (req, res) => {
  const user = await User.findById(req.params.id)
  res.json({ ok: true, data: user })
})

// 생성
router.post('/users', async (req, res) => {
  const user = new User(req.body)
  await user.save()
  res.status(201).json({ ok: true, data: user })
})

// 수정
router.put('/users/:id', async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
  res.json({ ok: true, data: user })
})

// 삭제
router.delete('/users/:id', async (req, res) => {
  await User.findByIdAndDelete(req.params.id)
  res.json({ ok: true })
})

export default router
```

---

### 5) 서버 실행

```ts
import userRouter from './routes/user'
app.use('/api', userRouter)

app.listen(3000, () => {
  console.log('RESTful API server is running on http://localhost:3000')
})
```

---

## ✅ 요약

- REST는 **리소스를 URL로 표현**하고 **HTTP 메서드로 동작을 지정**합니다.
- RESTful API는 일관성과 예측 가능한 구조를 갖기 때문에 협업과 유지보수에 매우 효과적입니다.
- Express와 MongoDB를 활용해 RESTful API를 쉽게 구현할 수 있습니다.
