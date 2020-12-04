import { Router } from 'express';
import { getRepository } from 'typeorm';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import User from '../model/User';
import CreateUserService from '../services/CreateUserService';

const usersRouter = Router();
// usersRouter.patch('/avatar', (req, res) => {});
usersRouter.get('/', async (req, res) => {
    try {
        const userRepo = getRepository(User);
        const users = await userRepo.find();
        return res.json(users);
    } catch (err) {
        res.status(201).json({ error: err.message });
    }
});
usersRouter.post('/create', async (req, res) => {
    try {
        const {
            name,
            email,
            password,
            admin,
            active,
            phone,
            type,
            avatar,
            notification,
        } = req.body;

        const CreateClientService = new CreateUserService();

        const user = await CreateClientService.execute({
            name,
            email,
            password,
            admin,
            active,
            phone,
            type,
            avatar,
            notification,
        });

        return res.json(user);
    } catch (err) {
        res.status(201).json({ error: err.message });
    }
});
export default usersRouter;
