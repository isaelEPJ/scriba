import { Router } from 'express';

const usersRouter = Router();

usersRouter.patch('/avatar', (req, res) => {});
usersRouter.get('/', async (req, res) => {
    return res.send();
});
export default usersRouter;
