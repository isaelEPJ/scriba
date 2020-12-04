import { getRepository } from 'typeorm';
import Appointment from '../model/Appointment';

interface Request {
    user_open_id: string;
    user_close_id: string;
    priority: string;
    client_id: string;
    type: string;
    content: string;
    conclusion: string;
    note: string;
    email_content: string;
    conclude: boolean;
    finished: boolean;
    canceled: boolean;
}
class CreateAppointmentService {
    async execute({
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
    }: Request): Promise<Appointment> {
        const AppointmentsRepository = getRepository(Appointment);
        // const checkValidate = await AppointmentsRepository.findOne({
        //     where:{}
        // })
        const appointment = AppointmentsRepository.create({
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
        });
        await AppointmentsRepository.save(appointment);
        return appointment;
    }
}
export default CreateAppointmentService;
