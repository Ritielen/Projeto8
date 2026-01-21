export class Cardapio{
    public id: number;
    public nome: string;
    public descricao: string;

    constructor(obj?: Partial<Cardapio>){
        if (obj){
            this.id     = obj.id
            this.nome   = obj.nome
            this.descricao   = obj.descricao
        }
    }

    toObjeto(){
        const cardapio = {
            id      : this.id,
            nome    : this.nome,
            descricao    : this.descricao
        }
        return cardapio;
    }

    toString() {
        const atributos = Object.values(this).join(',');
        return `Cardapio [${atributos}]`;
    }


}