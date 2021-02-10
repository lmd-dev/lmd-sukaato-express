import cookieParser from 'cookie-parser';
import express from 'express';
import helmet from 'helmet';

/* Logger */
import { logger } from './utils/logger';
const log = logger.getLogger("[MAIN] app");

/* Middleware */
import { middleware } from './middlewares/middleware';

/* Route */
import { router } from './routes/router';
const app = express();
const PORT = process.env.PORT || 3000;
const ENV = process.env.NODE_ENV || 'development'

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(helmet());

app.set('trust proxy', true);
app.disable('x-powered-by');

app.use(middleware.geolocation);
app.use(middleware.logger);


app.use('/', router.index);

app.use(router.error[404]);
app.use(router.error[500]);

app.listen(PORT, (err) => {
    if (err) {
        log.error(err);
    } else {
        log.info(`Started in ${ENV} environement`);
        log.info(`Server listening on http://localhost:${PORT}`);
    }
});