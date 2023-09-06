import { Router, Request, Response } from 'express';

const categoryRouter = Router();

const router = Router();

categoryRouter.use('/category', router);

router.get('/', (req: Request, res: Response) => {
    res.status(200).json({ message: 'Entrou em `category`' });
});

router.get('/:id', (req: Request, res: Response) => {
    res.status(200).json({ nome: 'Paulo Henrique de Vasconcellos' });
});

export default categoryRouter;
