import '../src/database/db'

import { server } from '../src/server'
import { UserModel } from '../src/models/user'

const {
  APP_URL,
  SERVER_PORT,
} = process.env;

server.get("/", (request, response) => {
  const query = request.query;
  return response.json([
      " ------------------------------------------- < TOTVS > ------------------------------------",
      " |                                                                                        |",
      " |                                         Desafio Nodejs                                 |",
      " |                                                                                        |",
      " ------------------------------------------ < Node.js > -----------------------------------",
      " |                                                                                        |",
      " |                                             API                                        |",
      " |                                                                                        |",
      " |                                         Repositório                                    |",
      " |                        https://github.com/alissonandrade2020/ApiFinanceiro             |",
      " |                                                                                        |",
      " |                                         Requisitos                                     |",
      " ------------------------------------------------------------------------------------------",
      " | 1. Expor uma API com método GET de um endpoint de lista de clientes inadimplentes      |",
      " ------------------------------------------------------------------------------------------",
      " | 2. Utilizar NodeJS como linguagem de backend                                           |",
      " ------------------------------------------------------------------------------------------",
      " | 3. Utilizar MongoDB como banco de dados                                                |",
      " ------------------------------------------------------------------------------------------",
      " | 4. Utilizar Docker para servir a aplicação localmente,                                 |",
      " | com um container para aplicação NodeJS e outro para o banco de dados                   |",
      " ------------------------------------------------------------------------------------------",
      " | 5. Utilizar HTML, CSS e Javascript para exibir a lista de clientes,                    |",
      " | qualquer framework de css/javascript pode ser utilizado, também pode ser feito Vanilla |",
      " ------------------------------------------------------------------------------------------",
      " |                                                                                        |",
      " --------------------------------- < Detalhe do Desenvolvedor > ---------------------------",
      " |                                                                                        |",
      " | Nome: Alisson de Andrade Araújo                                                        |",
      " | Formação: Análise e Desenvolvimento de Sistemas                                        |",
      " | Descrição: Desenvolvedor Back-end, Front-end e Mobile                                  |",
      " | Site: http://alissondeandradearaujo.000webhostapp.com/                                 |",
      " | CV: https://alissonandradesistema.000webhostapp.com/curriculo/                         |",
      " | Currículo Lattes: http://lattes.cnpq.br/7594653859194302/                              |",
      " | Github: https://github.com/alissonandrade2020                                          |", 
      " | Rocketseat: https://app.rocketseat.com.br/me/alissondeandradearaujo                    |", 
      " | Linkedin: https://www.linkedin.com/in/alisson-de-andrade-ara%C3%BAjo-160224190/        |"])
});

server.get('/client', async (req, res) => {
  try {
    const users = await UserModel.find()
    res.send(users)
  } catch (error) {
    res.send(500, error)
  }
})


server.get('/users', async (req, res) => {
  try {
    const users = await UserModel.find()
    res.send(users)
  } catch (error) {
    res.send(500, error)
  }
})

server.listen(SERVER_PORT);
console.log(`Server is running - API ON -> Alisson de Andrade Araujo : ${APP_URL}:${SERVER_PORT}`);