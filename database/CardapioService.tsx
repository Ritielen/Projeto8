import { Database } from "./Database";
import { Cardapio } from "../model/Cardapio";

export class CardapioService {
    static TABLE = `cardapio`;

    static async create(obj: Cardapio) {
        const resultado = await Database.runQuery(`
            INSERT INTO ${this.TABLE} 
            (
                nome,
                descricao
            )
            VALUES (?,?)`, 
            [
                obj.nome,
                obj.descricao
            ]
        )
        console.log(resultado);
        obj.id = resultado;
        return obj;
    }

    static async update(obj: Cardapio) {
        const resultado = await Database.runQuery(`
            UPDATE ${this.TABLE} 
            SET nome=?, descricao=?
            WHERE id=?
            `, 
            [
                obj.nome,
                obj.descricao,
                obj.id
            ]
        )
        return resultado;
    }

    static async delete(obj: Cardapio) {
        const resultado = await Database.runQuery(`
                DELETE FROM ${this.TABLE} WHERE id = ?;
            `, [obj.id]);
        
        console.log(resultado);
        return resultado;
    }

    static async findAll() {
        const allRows = await Database.getAll();
        return allRows.map(row => new Cardapio(row))
    }
}