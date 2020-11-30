import { Router } from 'express';
import CreateClientService from '../services/CreateClientService';

const clientRoutes = Router();
clientRoutes.get('/', (req, res) => {
    return res.send();
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
            active: true,
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
