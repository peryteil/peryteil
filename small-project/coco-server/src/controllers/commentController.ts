import { Request, Response }  from 'express' ;
import prisma from '../db';

// 댓글생성
export const createComment = async (req: Request, res: Response) => {
    const { content, postId } =req.body;
    const comment = await prisma.comment.create({
        data: {
            content,
            postId,
        },
    });
    res.status(201).json(comment);
};

// 댓글 전체 조회
export const getComments = async(req: Request, res: Response) => {
    const comments = await prisma.comment.findMany ({
        include: {post: true}, // 게시글 정보 함께 보기
    });
    res.json(comments);
};

// 특정 댓글 조회
export const getCommentById = async (req:Request, res: Response) => {
    const id = parseInt(req.params.id);
    const comment = await prisma.comment.findUnique({
        where: { id },
        include: { post: true },
    });

    if (comment) {
        res.json(comment);
    } else {
        res.status(404).json({ message: '댓글을 찾을 수 없습니다.'});
    }
};

// 댓글 수정
export const updateComment = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const { content } =req.body;

    try {
        const comment = await prisma.comment.update({
            where: { id },
            data: { content },
        });
        res.json(comment);
    }catch (error) {
        res.status(404).json({ message: ' 댓글을 찾을 수 없습니다.'});
    }
};

// 댓글 삭제
export const deleteComment = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);

    try {
        await prisma.comment.delete({where: { id }});
        res.json({ message: '댓글이 삭제되었습니다.'});
    }catch (error) {
        res.status(404).json({ message: '댓글을 찾을 수 없습니다. '});
    }
};