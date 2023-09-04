import { categoryRouter } from '../modules/category/category.controller';
import { userRouter } from '../modules/user/user.controller';
import { Express } from 'express';
import { valueRouter } from '../modules/value/value.controller';
import { personRouter } from '../modules/person/person.controller';
import { groupRouter } from '../modules/group/group.controller';

const routes = (app: Express) => {
    app.use(userRouter);
    app.use(categoryRouter);
    app.use(valueRouter);
    app.use(personRouter);
    app.use(groupRouter);
};

export default routes;
