import { Router } from 'express';

const clientRoutes = Router();
clientRoutes.get('/', (req, res) => {
    return res.send();
});
export default clientRoutes;
