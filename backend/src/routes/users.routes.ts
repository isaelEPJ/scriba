import { Router } from 'express';

const usersRouter = Router();

usersRouter.get('/', (req, res) => {
    return res.send();
});
export default usersRouter;
