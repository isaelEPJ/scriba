import { getRepository } from 'typeorm';
import User from '../model/User';

interface Require {
    name: string;
    email: string;
    password: string;
    admin: boolean;
    type: string;
    avatar: string;
    notification: string;
}
class CreateUserService {
    async execute({
        name,
        email,
        password,
        admin,
        type,
        avatar,
        notification,
    }: Require): Promise<User> {
        const userRepository = getRepository(User);
        const checkEmail = userRepository.findOne({
            where: { email },
        });
        const checkName = userRepository.findOne({
            where: { name },
        });
        if (checkEmail) {
            throw new Error('Email ja utilizado no cadastro');
        } else if (checkName) {
            throw new Error('Nome ja utilizado');
        }
        const user = userRepository.create({
            name,
            email,
            password,
            admin,
            type,
            avatar,
            notification,
        });
        await userRepository.save(user);
        return user;
    }
}
export default CreateUserService;
