import { Router, Request, Response } from 'express';
import { AuthDTO } from './dtos/auth.dto';
import { validateAuth } from './auth.service';

const authRouter = Router();

const router = Router();

authRouter.use('/auth', router);

router.get('/', (req: Request, res: Response): Response => {
    return res.status(200).json({ message: 'auth' });
});

router.post(
    '/',
    async (req: Request<undefined, undefined, AuthDTO>, res: Response): Promise<Response> => {
        const user = await validateAuth(req.body);

        if (user === null) return res.status(400).json({ message: 'Usuário não encontrado' });

        return res.status(200).json({ user });
    }
);

export default authRouter;
