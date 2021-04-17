import loginRouter from "./login";
import parseRouter from "./parse";
import translateRouter from "./translate";
import filesRouter from "./files";

export function applyRouters(app) {
    app.use('/login', loginRouter);
    app.use('/parse', parseRouter);
    app.use('/translate', translateRouter);
    app.use('/', filesRouter);
}