import { indexRouter } from "./index";
import { error404Router } from './errors/error.404.router';
import { error500Router } from './errors/error.500.router';

export const router = {
    index: indexRouter,
    error: {
        404: error404Router,
        500: error500Router
    }
}