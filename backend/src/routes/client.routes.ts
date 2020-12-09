import { Router } from 'express';
import { getRepository } from 'typeorm';
import Client from '../model/Client';
import CreateClientService from '../services/CreateClientService';

const clientRoutes = Router();
clientRoutes.get('/', async (req, res) => {
    try {
        const clientRepository = getRepository(Client);
        const client = await clientRepository.find();
        return res.json(client);
    } catch (err) {
        res.status(201).json({ error: err.message });
    }
});
clientRoutes.post('/create', async (req, res) => {
    try {
        const [
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
        ] = req.body;
        const createClient = new CreateClientService();
        const client = await createClient.execute({
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
        return res.json(client);
    } catch (err) {
        return res.status(201).json({ error: err.message });
    }
});
export default clientRoutes;
