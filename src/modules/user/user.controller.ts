import { Router, Request, Response } from 'express';
import { createUsers, getUser, getUsers } from './user.service';
import { userInsertDTO } from './dtos/userInsert.dto';
import { UserModel } from './user.model';

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

router.get('/:id', async (req: Request, res: Response): Promise<void> => {
    const id = parseInt(req.params.id);

    const user = await getUser(id);

    res.status(200).json({ user });
});
