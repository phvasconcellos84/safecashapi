import { compare, hash } from 'bcrypt';

export const createPasswordHashed = async (password: string): Promise<string> => {
    const saltRounds = 10;

    return await hash(password, saltRounds);
};

export const validatePassword = async (
    password: string,
    passwordHashed: string
): Promise<boolean> => {
    return await compare(password, passwordHashed);
};
