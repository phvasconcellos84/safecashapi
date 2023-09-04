import { Router, Request, Response } from 'express';

export const groupRouter = Router();

const router = Router();

groupRouter.use('/group', router);

router.get('/', (req: Request, res: Response) => {
    res.status(200).json({ message: 'Entrou em `group`' });
});

router.get('/:id', (req: Request, res: Response) => {
    res.status(200).json({ nome: 'Paulo Henrique de Vasconcellos' });
});
