// import express, { Request, Response } from 'express';

// const app = express();
// const PORT = 3000;

// // 기본 라우터
// app.get('/', (req: Request, res: Response) => {
//     res.send('🐶 안녕! 나는 코코 서버야!');
// });

// app.listen(PORT, () => {
//     console.log(`🚀 서버가 http://localhost:${PORT} 에서 실행 중!`);
// });
// // "진짜... 이게 서버라고??"

// // 코코는 사용자 정보를 담는 API를 만들어보기로 해요.
// app.get('/user', (req: Request, res: Response) => {
//     res.json({ name: '코코', age: 3, breed: '말티즈'});
// });

// // "이제 코코의 정보를 누구든 가져갈 수 있어!"

// // 7장: 타입으로 더 안전하게!
// // 코코는 타입의 중요함을알게 됐어요.

// interface User {
//     name: string;
//     age: number;
//     breed: string;
// }

// app.get('/user', (req:Request, res: Response) => {
//     const user: User = {
//         name: '코코',
//         age: 3,
//         breed: '말티즈',
//     };
//     res.json(user);
// })
// // 8장: JSON 데이터 받기 (POST)

// app.use(express.json());

// app.post('/user', (req: Request, res: Response) => {
//   const { name, age, breed } = req.body;
//   res.json({
//     message: `${name}(${breed}, ${age}살) 님, 환영합니다!`,
//   });
// });

 import express, { Request, Response } from "express";
 import userRoutes from './routes/userRoutes';
 import postRoutes from './routes/postRoutes';
 import commentRoutes from './routes/commentRoutes';

const app = express();
const PORT = 3000;

// JSON 본문 파싱 (필수)
app.use(express.json());

// 라우터 연결
app.use('/api', userRoutes);
app.use('/api', postRoutes);
app.use('/api', commentRoutes);

// ✅ 홈페이지 라우터
app.get('/', (req: Request, res: Response) => {
    res.send('코코 서버에 오신 것을 환영합니다!');
});

// ✅ POST /user
app.post('/user', (req: Request, res: Response) => {
    const { name, age, breed } = req.body;
    res.json({
        message: `${name} (${breed}, ${age}살) 님, 환영합니다!`,
    });
});

// ✅ 서버 실행
app.listen(PORT, () => {
    console.log(`서버 실행 중: http://localhost:${PORT}`);
});
