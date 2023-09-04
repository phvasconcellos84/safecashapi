import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import cors from 'cors';
import routes from '../routes/index';
import bodyParser from 'body-parser';

export default () => {
    const app = express();

    app.use(express.json());
    app.use(
        bodyParser.urlencoded({
            extended: true
        })
    );

    // Liberação de acesso a API de qualquer requisição
    app.use(cors());

    // Configuração de rotas
    routes(app);

    // Tratamento de erros
    app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
        if (err instanceof Error)
            return res.status(400).json({
                error: err.message
            });

        return res.status(500).json({
            status: 'error',
            message: 'Inernal server error'
        });
    });

    return app;
};
