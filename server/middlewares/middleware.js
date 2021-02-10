import { geolocationMiddleware } from "./geolocation.middleware";
import { loggerMiddleware } from "./logger.middleware";

export const middleware = {
    geolocation: geolocationMiddleware,
    logger: loggerMiddleware
}