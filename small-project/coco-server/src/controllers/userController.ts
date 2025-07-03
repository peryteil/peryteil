import { Request, Response } from 'express';
import prisma from '../db';

// ✅ Create - 사용자 추가
export const createUser = async (req: Request, res: Response) => {
    const { name, age, breed } = req.body;
    const user = await prisma.user.create({
        data: { name, age, breed },
    });
    res.status(201).json(user);
};

// ✅ Read - 전체 사용자 조회
export const getUsers = async (req: Request, res: Response) => {
    const users = await prisma.user.findMany();
    res.json(users);
};

// ✅ Read - 특정 사용자 조회
export const getUserById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const user = await prisma.user.findUnique({
        where: { id },
    });

    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: '사용자를 찾을 수 없습니다.' });
    }
};

// ✅ Update - 사용자 수정
export const updateUser = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const { name, age, breed } = req.body;

    try {
        const user = await prisma.user.update({
            where: { id },
            data: { name, age, breed },
        });
        res.json(user);
    } catch (error) {
        res.status(404).json({ message: '사용자를 찾을 수 없습니다.' });
    }
};

// ✅ Delete - 사용자 삭제
export const deleteUser = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);

    try {
        await prisma.user.delete({
            where: { id },
        });
        res.json({ message: '삭제되었습니다.' });
    } catch (error) {
        res.status(404).json({ message: '사용자를 찾을 수 없습니다.' });
    }
};
