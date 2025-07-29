import type { MongoDB } from "../mongodb";
import { Router } from "express";
import { getUserIdFromJwtP } from "./getUserIdFromJwt";

export const testRouter = (...args: any[]) => {
    const db:MongoDB = args[0]
    const test = db.collection('test')
    const router = Router()
    return router
    .get('/', async (req, res) => {
        try {
            const userId = await getUserIdFromJwtP(req)
            const findResult = await test.find({}).toArray()
            res.json({ok: true, body: findResult})
        }catch(e){
        if (e instanceof Error) res.json({ok: false, errorMessage: e.message})
        }
        // 모든 데이터를 요청하는 경우
    }) 
    .get('/:id',async(req, res)=> {
        const {id} = req.params
        try {
            const userId = await getUserIdFromJwtP(req)
            const findResult = await test.findOne({id})
            // id값을 가진 데이터만 요청하는 경우
        res.json({ok: true, body: findResult})
        } catch (e) {
            if (e instanceof Error) res.json({ok: false, errorMessage: e.message})
        }
    })
    .post('/', async(req,res) => {
        // req.body의 데이터를 서버에 저장하기를 요청하는 경우
        const {body} = req
        try {
            const userId = await getUserIdFromJwtP(req)
            try{
                // 항상 id: '1234'인 문서가 단 하나만 있도록
                // 과거 문서를 모두 지움(보통은 필요 없는 코드)
                await test.drop()
            } catch (e) {
                // 오류 무시
            }
            const insertResult = await test.insertOne({id: '1234', ...body})
            const {insertedId} = insertResult
            const findResult = await test.findOne({_id: insertedId})
            res.json({ok:true, body: findResult})
        }catch (e){
            if (e instanceof Error) res.json({ok: false, errorMessage: e.message})
        }
    })
    .put('/:id', async(req, res) => {
        // id값을 가진 데이터의 수정을 요청하는 경우
        const {id} = req.params
        const {body} = req
        try {
            const userId = await getUserIdFromJwtP(req)
            const updateResult = await test.findOneAndUpdate(
                {id},
                {$set: body},
                {
                    returnDocument: 'after'
                }
            )
            res.json({ok:true, body:updateResult && updateResult})
        }catch(e){
            if (e instanceof Error) res.json({ok: false, errorMessage: e.message})
        }
    })
    .delete('/:id', async(req, res) => {
        // id값을 가진 데이터의 삭제를 요청하는 경우
        const {id} = req.params
        try {
            const userId = await getUserIdFromJwtP(req)
            await test.deleteOne({id})
            res.json({ok: true})
        } catch (e) {
            if (e instanceof Error) res.json ({ok: false, errorMessage: e.message})
        }
    })
}