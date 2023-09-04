import { Router, Request, Response } from 'express';

export const personRouter = Router();

const router = Router();

personRouter.use('/person', router);

router.get('/', (req: Request, res: Response) => {
    res.status(200).json({ message: 'Entrou em `person`' });
});

router.get('/:id', (req: Request, res: Response) => {
    res.status(200).json({ nome: 'Paulo Henrique de Vasconcellos' });
});
