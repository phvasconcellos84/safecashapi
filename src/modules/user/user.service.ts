import { PrismaClient } from '@prisma/client';
import { UserModel } from './user.model';
import { userInsertDTO } from './dtos/userInsert.dto';

const prisma = new PrismaClient();

export const getUsers = async (): Promise<UserModel[]> => {
    const users = await prisma.user.findMany();

    return users;
};

export const createUsers = async (body: userInsertDTO): Promise<UserModel> => {
    return await prisma.user.create({
        data: body
    });
};

export const getUser = async (id: number): Promise<UserModel | null> => {
    const user = await prisma.user.findUnique({
        where: {
            id
        }
    });

    return user;
}
