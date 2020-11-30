import { Router } from 'express';
// import appointmentsRoutes from './appointments.routes';
import clientRoutes from './client.routes';
import usersRouter from './users.routes';

const routes = Router();
routes.use('/users', usersRouter);
routes.use('/clientes', clientRoutes);
// routes.use('/appointments', appointmentsRoutes);

export default routes;
