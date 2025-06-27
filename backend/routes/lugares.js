import express from 'express';
import fs from 'fs';

const router = express.Router();

function getData() {
    try {
        const data = fs.readFileSync('./backend/data/data.json','utf8');
        return JSON.parse(data)
    }
    catch (err) {
        console.log('Erro ao carregar dados: ', err)
     }
}

const data = getData()

router.get('/', (req, res) => {
    res.send(data)
})

export default router;