import { Router } from 'express';
import { getRepository } from 'typeorm';
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
            type,
            avatar,
            notification,
        } = req.body;
        const CreateUser = new CreateUserService();
        const user = await CreateUser.execute({
            name,
            email,
            password,
            admin,
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
