import { Router } from 'express';
import appointmentsRoutes from './appointments.routes';
// import appointmentsRoutes from './appointments.routes';
import clientRoutes from './client.routes';
import sessionsRouter from './sessions.routes';
import usersRouter from './users.routes';

const routes = Router();
routes.use('/sessions', sessionsRouter);
routes.use('/users', usersRouter);
routes.use('/clientes', clientRoutes);
routes.use('/atendimentos', appointmentsRoutes);
// routes.use('/appointments', appointmentsRoutes);

export default routes;
