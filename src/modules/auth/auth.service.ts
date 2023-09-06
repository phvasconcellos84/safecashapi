import { generateToken } from '../../utils/auth';
import { validatePassword } from '../../utils/password';
import { getUserByEmail } from '../user/user.service';
import { AuthModel } from './auth.model';
import { AuthDTO } from './dtos/auth.dto';

export const validateAuth = async (authDTO: AuthDTO): Promise<AuthModel | null> => {
    const user = await getUserByEmail(authDTO.email);

    if (!user) return null;

    const isValidPassword = await validatePassword(authDTO.password, user.password);

    if (!isValidPassword) return null;

    return new AuthModel(generateToken(user), user);
};
