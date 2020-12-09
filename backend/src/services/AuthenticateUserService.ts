import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { getRepository } from 'typeorm';
import User from '../model/User';
import authConfig from '../config/auth';

interface Require {
    email: String;
    password: string;
}
interface Response {
    user: User;
    token: string;
}
class AuthenticateUserService {
    public async execute({ email, password }: Require): Promise<Response> {
        const usersRepository = getRepository(User);
        const user = await usersRepository.findOne({ where: { email } });
        if (!user) {
            throw new Error('Incorrect Email/ Password Combination.');
        }
        const passwordMatched = await compare(password, user.password);

        if (!passwordMatched) {
            throw new Error('Incorrect Email/ Password Combination.');
        }
        const { secret, expiresIn } = authConfig.jwt;
        const token = sign({}, secret, {
            subject: user.id,
            expiresIn,
        });
        return {
            user,
            token,
        };
    }
}
export default AuthenticateUserService;
