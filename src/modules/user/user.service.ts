import { PrismaClient } from '@prisma/client';
import { UserModel } from './user.model';
import { userInsertDTO } from './dtos/userInsert.dto';
import { createPasswordHashed } from '../../utils/password';

const prisma = new PrismaClient();

export const getUsers = async (): Promise<UserModel[]> => {
    const users = await prisma.user.findMany();

    return users;
};

export const createUsers = async (body: userInsertDTO): Promise<UserModel | null> => {
    const checkUserMail = await getUserByEmail(body.email);

    if (checkUserMail) return null;

    const checkUserCPF = await getUserByCPF(body.cpf);

    if (checkUserCPF) return null;

    const user: userInsertDTO = {
        ...body,
        password: await createPasswordHashed(body.password)
    };

    return await prisma.user.create({
        data: { ...user }
    });
};

export const getUserByID = async (id: number): Promise<UserModel | null> => {
    const user = await prisma.user.findUnique({
        where: {
            id
        }
    });

    return user;
};

export const getUserByEmail = async (email: string): Promise<UserModel | null> => {
    const user = await prisma.user.findFirst({
        where: {
            email
        }
    });

    if (!user) return null;

    return user;
};

export const getUserByCPF = async (cpf: string): Promise<UserModel | null> => {
    const user = await prisma.user.findFirst({
        where: {
            cpf
        }
    });

    if (!user) return null;

    return user;
};
