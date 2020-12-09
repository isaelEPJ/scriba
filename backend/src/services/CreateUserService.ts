import { getRepository } from 'typeorm';
import User from '../model/User';
import { hash } from 'bcryptjs';
interface Require {
    name: string;
    email: string;
    password: string;
    admin: boolean;
    active: boolean;
    phone: string;
    type: string;
    avatar: string;
    notification: string;
}
class CreateUserService {
    public async execute({
        name,
        email,
        password,
        admin,
        active,
        phone,
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
        if (!checkEmail) {
            throw new Error('Email ja utilizado no cadastro');
        }
        if (!checkName) {
            throw new Error('Nome ja utilizado');
        }
        const hashPassword = await hash(password, 8);
        const user = userRepository.create({
            name,
            email,
            password: hashPassword,
            admin,
            active,
            phone,
            type,
            avatar,
            notification,
        });
        await userRepository.save(user);
        return user;
    }
}
export default CreateUserService;
