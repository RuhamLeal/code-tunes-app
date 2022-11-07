import express from 'express';
import db from './config/dbConnect.js';

db.on('error', console.log.bind(console, 'Erro de conexao'));
db.once('open', () => {
  console.log('Conexao com o banco feita com sucesso');
});

const app = express();

app.use(express.json());

export default app;
