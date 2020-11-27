import { Router } from 'express';

const appointmentsRoutes = Router();

appointmentsRoutes.get('/', (req, res) => {
    return res.send();
});
appointmentsRoutes.post('/create', (req, res) => {
    try {
        const []
    } catch (err) {
        return res.json(err);
    }
});
export default appointmentsRoutes;
