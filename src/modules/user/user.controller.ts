import { Router, Request, Response } from 'express';

export const userRouter = Router();

const router = Router();

userRouter.use('/user', router);

router.get('/', (req: Request, res: Response) => {
    res.status(200).json({ message: 'Entrou em `users`' });
});

router.get('/:id', (req: Request, res: Response) => {
    res.status(200).json({ nome: 'Paulo Henrique de Vasconcellos' });
});
