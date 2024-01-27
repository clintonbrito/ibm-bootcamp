export class Pessoa {
    id?:number|null;
    nome?:string|null;
    idade?:number|null;
    email?:string|null;

    constructor(id?:number|null, nome?:string|null, idade?:number|null, email?:string|null){
        this.id = id;
        this.nome = nome;
        this.idade = idade;
        this.email = email;
    }
}