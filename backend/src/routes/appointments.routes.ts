import { Router } from 'express';
import { getRepository } from 'typeorm';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import Appointment from '../model/Appointment';
import CreateAppointmentService from '../services/CreateAppointmentService';

const appointmentsRoutes = Router();

appointmentsRoutes.get('/', async (req, res) => {
    try {
        const appointmentsRepository = getRepository(Appointment);
        const atendimentos = await appointmentsRepository.find();
        return res.json(atendimentos);
    } catch (err) {
        return res.status(201).json({ error: err.message });
    }
});
appointmentsRoutes.post('/create', async (req, res) => {
    try {
        const {
            user_open_id,
            user_close_id,
            priority,
            client_id,
            type,
            content,
            conclusion,
            note,
            email_content,
            conclude,
            finished,
            canceled,
            prazo,
        } = req.body;
        const CreateAppointment = new CreateAppointmentService();
        const appointment = await CreateAppointment.execute({
            user_open_id,
            user_close_id,
            priority,
            client_id,
            type,
            content,
            conclusion,
            note,
            email_content,
            conclude,
            finished,
            canceled,
            prazo,
        });
        return res.json(appointment);
    } catch (err) {
        return res.status(200).json({ error: err.message });
    }
});
export default appointmentsRoutes;
