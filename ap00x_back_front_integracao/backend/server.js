require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');

// Cria a aplicação Express.
const app = express();

// Permite requisições de outras origens (front-end em outra porta/domínio).
app.use(cors());

// Permite que o servidor entenda JSON no corpo das requisições.
app.use(express.json());

let conexao;

async function conectar() {
  conexao = await mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.PORT
  });

  console.log('Conectado ao MySQL!');
}

conectar().catch((erro) => {
    console.error('Erro ao conectar no MySQL:', erro.message);
});

// Rota básica para testar se o servidor está no ar.
app.get('/', (req, res) => {
    res.json({ 
        mensagem: 'Servidor funcionando!' 
    });
});

app.get('/tarefas', async (req, res) => {
    try {
        const [linhas] =
            await conexao.query(
                'SELECT * FROM tb_tarefa'    
        );
        res.json(linhas);
    } catch (erro) {
        res.status(500).json({ 
            erro: 'Erro interno do servidor' 
        });
    }
});

app.post('/tarefas', async (req, res) => {
    try {
        const { titulo, descricao } = req.body
        const sql =
            'INSERT INTO tb_tarefa'
            + ' (titulo, descricao)'
            + ' VALUES (?, ?)'
        const [resultado] =
            await conexao.query(
                sql, [titulo, descricao]
            )
        res.status(201).json({
            titulo:titulo,
            descricao:descricao,
            cod_tarefa: resultado.insertId
        })
    } catch (erro) {
        res.status(500).json({
            erro: 'Erro ao criar tarefa'
        })
    }
})

// Adcionr o put
app.put('/tarefas/:id', async (req, res) => {
    try {
        const {id} = req.params
        const {titulo, descricao} = req.body
        const sql =
            'UPDATE tb_tarefa'
            + 'SET titulo = ?, descricao = ?'
            + 'WHERE cod_tarefa = ?'
        await conexao.query(
            sql, [titulo, descricao, id]
        )
        res.json({
            cod_tarefa: id,
            titulo: titulo,
            descricao: descricao
        })
    } catch (erro) {
        res.status(500).json({
            erro: 'Erro ao atualizar tarefa'
        })
    }
});


app.listen(3000, () => {
    console.log(`Servidor rodando na porta 3000`);
});
