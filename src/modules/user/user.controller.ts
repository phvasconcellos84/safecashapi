import { Router, Request, Response } from 'express';
import { createUsers, getUserByID, getUsers } from './user.service';
import { userInsertDTO } from './dtos/userInsert.dto';

const userRouter = Router();

const router = Router();

userRouter.use('/user', router);

router.get('/', async (_, res: Response): Promise<void> => {
    const users = await getUsers();

    res.status(200).json({ users });
});

router.post(
    '/',
    async (req: Request<undefined, undefined, userInsertDTO>, res: Response): Promise<Response> => {
        const user = await createUsers(req.body);

        if (user === null)
            return res
                .status(200)
                .json({ message: 'Usuário já está cadastrado no banco de dados' });

        return res.status(201).json({ message: user });
    }
);

router.get('/:id', async (req: Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id);

    const user = await getUserByID(id);

    if (user === null) {
        return res.status(204).send();
    } else {
        return res.status(200).json({ user });
    }
});

export default userRouter;
