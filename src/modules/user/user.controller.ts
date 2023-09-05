import { Router, Request, Response } from 'express';
import { createUsers, getUsers } from './user.service';
import { userInsertDTO } from './dtos/userInsert.dto';

export const userRouter = Router();

const router = Router();

userRouter.use('/user', router);

router.get('/', async (_, res: Response): Promise<void> => {
    const users = await getUsers();

    res.status(200).json({ users });
});

router.post('/', async (req: Request<undefined, undefined, userInsertDTO>, res: Response): Promise<void> => {
    const users = await createUsers(req.body);

    res.status(201).json({ message: users });
});

router.get('/:id', (req: Request, res: Response): void => {
    const id = req.params.id;

    res.status(200).json({ nome: 'Paulo Henrique de Vasconcellos' });
});
