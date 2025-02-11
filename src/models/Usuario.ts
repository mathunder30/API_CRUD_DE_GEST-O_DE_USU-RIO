import { promises } from "dns";
import { promisePool } from "../DB";
import msql2 from 'mysql2';

interface IUser {
    id?: number;
    nome: string;
    email: string;
    senha: string;
}

// Essa classe esta usando métodos estaticos para interagir com a tabela do db
// get = buscando
//aqui onde esta classe vou usar 4 funçoes para CRUD que é 'criandoUsario', 'buscandoTodosUsuarios', 'buscandoUsuarioId' 'atualizandoUsuario' e 'deletandoUsuario';

export default class Usuarios {
    //nesse metodo estatico, Cria um novo usuário no banco de dados. Ele recebe um objeto user do tipo IUser,
    //executa uma query INSERT para adicionar os dados à tabela users e retorna
    // o usuário com o id gerado automaticamente (insertId).
    static async criandoUsuario(usuario: IUser): Promise<IUser>{
        const [rows] = await promisePool.execute(
            'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
            [usuario.nome, usuario.email, usuario.senha]
            //o promisePool Executa a query SQL de forma assíncrona

        );
        //caso aconteça algum erro, pode ter a ver com esse return
        return { ...usuario, id:(rows as msql2.ResultSetHeader).insertId }
    }

    static async buscandoTodosUsuarios(): Promise<IUser[]>{
        // nesse retorna todos os usuários da tabela users.
        // Ele executa a query SELECT * FROM users, que retorna todas as linhas da tabela.
        const [rows] = await promisePool.execute('SELECT * FROM usuario');
        return rows as IUser[]; //A resposta é um array de usuários, que é retornado após o cast para IUser[]
    }

    static async buscandoUsuarioId(id: number): Promise<IUser | null> {
        // Busca um usuário pelo id. A query SQL filtra o usuário usando o id passado como parâmetro.
        // Se o usuário for encontrado, ele é retornado; caso contrário, retorna null.
        const [rows] = await promisePool.execute('SELECT * FROM usuario WHERE id = ?', [id]);
        const usuario = (rows as IUser[])[0];
        return usuario || null;
    }

    static async atualizarUsuario(id: number, usuario: IUser): Promise<void>{
        // Esse metodo estatico atualiza as informações de um usuário específico com base no seu id.
        //  Ele recebe os novos dados de name, email, e password e os atualiza na tabela users.

        await promisePool.execute('UPTADE usuario SET name = ?, email = ?, password = ? WHERE id = ?', [
            usuario.nome,
            usuario.email,
            usuario.senha,
            id,
        ])
    }

    static async deletarUsuario (id: number): Promise<void> {
        // Esse metodo estatico exclui um usuário do banco de dados com base no seu id. A query SQL executa o comando DELETE.
        await promisePool.execute('DELETE FROM usuarios WHERE id = ?', [id]);
    }

}

   