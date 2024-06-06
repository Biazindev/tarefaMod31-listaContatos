class Tarefa {
    id: number
    nome: string
    email: string
    telefone: number
    finalizado: boolean
    constructor(
        id: number,
        nome: string,
        email: string,
        telefone: number,
        finalizado: boolean
        ){
        this.id = id
        this.nome = nome
        this.email = email
        this.telefone = telefone
        this.finalizado = finalizado
    }
}

export default Tarefa