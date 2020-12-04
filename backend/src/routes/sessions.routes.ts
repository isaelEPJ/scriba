import { Router } from 'express';
import AuthenticateUserService from '../services/AuthenticateUserService';

const sessionsRouter = Router();
interface User {
    email: string;
    password?: string;
}
sessionsRouter.post('/', async (req, res) => {
    try {
        const { email, password } = req.body;
        const authenticateUser = new AuthenticateUserService();
        const { user, token } = await authenticateUser.execute({
            email,
            password,
        });

        return res.json({ user, token });
    } catch (err) {
        return res.status(201).json({ error: err.message });
    }
});

export default sessionsRouter;
