import { AuthPayloadDTO } from '../modules/auth/dtos/auth.dto';
import { UserModel } from '../modules/user/user.model';
import { Secret, SignOptions, sign } from 'jsonwebtoken';

const KEY_JWT = 'umasenhamuitograndepramudardepois';

export const generateToken = (user: UserModel): string => {
    const payload: AuthPayloadDTO = {
        id: user.id,
        email: user.email,
        typeUser: user.typeUser
    };

    const secret: Secret = KEY_JWT;

    const options: SignOptions = {
        subject: String(user.id),
        expiresIn: '604800000'
    };

    const token = sign(payload, secret, options);

    return token;
};
