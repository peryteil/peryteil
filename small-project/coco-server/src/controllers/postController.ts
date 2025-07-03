import { Request, Response } from 'express';
import prisma from '../db';

// Create
export const createPost = async (req: Request, res: Response) => {
    const { title, content, userId } = req.body;
    const post = await prisma.post.create({
        data: {
            title,
            content,
            userId,
        },
    });
    res.status(201).json(post);
};

// Read All
export const getPosts = async (req: Request, res: Response) => {
    const posts = await prisma.post.findMany();
    res.json(posts);
};

// Read One
export const getPostById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const post = await prisma.post.findUnique({
        where: {id},
    });
    if (post) {
        res.json(post);
    }else{
        res.status(404).json({ message: '게시글을 찾을 수 없습니다.'});
    }
};

// Update
export const updatePost = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const { title, content} = req.body;

    try {
        const post = await prisma.post.update({
            where: { id },
            data: { title, content },
        });
        res.json(post);
    }catch (error) {
        res.status(404).json({ message: '게시글을 찾을 수 없습니다.'});
    }
};

// Delete
export const deletePost = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);

    try {
        await prisma.post.delete({
            where: {id},
        });
        res.json({ message: '삭제되었습니다.'});
    }catch (error) {
        res.status(404).json({ message: '게시글을 찾을 수 없습니다.'});
    }
};