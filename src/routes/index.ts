import { Express } from 'express';

import userRouter from '../modules/user/user.controller';
import categoryRouter from '../modules/category/category.controller';
import valueRouter from '../modules/value/value.controller';
import personRouter from '../modules/person/person.controller';
import groupRouter from '../modules/group/group.controller';
import authRouter from '../modules/auth/auth.controller';

const routes = (app: Express): void => {
    app.use(userRouter);
    app.use(categoryRouter);
    app.use(valueRouter);
    app.use(personRouter);
    app.use(groupRouter);
    app.use(authRouter);
};

export default routes;
