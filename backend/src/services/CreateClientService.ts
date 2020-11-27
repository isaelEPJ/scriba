import { getRepository } from 'typeorm';
import Client from '../model/Client';

interface Request {
    name: string;
    surname: string;
    email: string;
    password: string;
    cnpj: string;
    IE: string;
    active: boolean;
    note: string;
    adress: string;
    city: string;
    bairro: string;
    cep: string;
    contact: string;
    phone: string;
}
class CreateClientService {
    async execute({
        name,
        surname,
        email,
        password,
        cnpj,
        IE,
        active,
        note,
        adress,
        city,
        bairro,
        cep,
        contact,
        phone,
    }: Request): Promise<Client> {
        const ClientRepository = getRepository(Client);
        const CheckEmailExist = await ClientRepository.findOne({
            where: { email },
        });
        const checkCNPHExist = await ClientRepository.findOne({
            where: { cnpj },
        });
        if (CheckEmailExist) {
            throw new Error('Email já está cadastrado');
        } else if (checkCNPHExist) {
            throw new Error('O CNPJ de usuario já');
        } else {
            const client = ClientRepository.create({
                name,
                surname,
                email,
                password,
                cnpj,
                IE,
                active,
                note,
                adress,
                city,
                bairro,
                cep,
                contact,
                phone,
            });
            await ClientRepository.save(client);
            return client;
        }
    }
}
export default CreateClientService;
