import { PrismaClient } from '@prisma/client';
import { Request } from 'express';
import { UserModel } from './user.model';
import { userInsertDTO } from './dtos/userInsert.dto';

const prisma = new PrismaClient();

export const getUsers = async (): Promise<UserModel[]> => {
    const users = await prisma.user.findMany();

    return users;
};

export const createUsers = async (body: userInsertDTO): Promise<UserModel> => {
    return prisma.user.create({
        data: body
    });
};
