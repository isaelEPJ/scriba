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
            email,
            name,
            password,
            admin = true,
            active = true,
            phone = '819 99999999',
            type = 'developer',
            avatar = 'I',
            notification = 'usuario de teste',
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
