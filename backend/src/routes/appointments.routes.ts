import { Router } from 'express';
import CreateAppointmentService from '../services/CreateAppointmentService';

const appointmentsRoutes = Router();

appointmentsRoutes.get('/', (req, res) => {
    return res.send();
});
appointmentsRoutes.post('/create', async (req, res) => {
    try {
        const [
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
        ] = req.body;
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
            conclude: false,
            finished: false,
            canceled: false,
        });
        return res.json(appointment);
    } catch (err) {
        return res.status(200).json({ error: err.message });
    }
});
export default appointmentsRoutes;
