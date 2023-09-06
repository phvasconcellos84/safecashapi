import { Router, Request, Response } from 'express';

const valueRouter = Router();

const router = Router();

valueRouter.use('/value', router);

router.get('/', (req: Request, res: Response) => {
    res.status(200).json({ message: 'Entrou em `value`' });
});

router.get('/:id', (req: Request, res: Response) => {
    res.status(200).json({ nome: 'Paulo Henrique de Vasconcellos' });
});

export default valueRouter;
