export default class Arma{
    #id: number
    #name: string
    #category: string
    #weight: number
    #price: number

    constructor(id,nome,categoria,peso,preco){
        this.#id = id
        this.#name = nome
        this.#category = categoria
        this.#weight = peso
        this.#price = preco
    }

    get id(){
        return this.#id
    }

    get name(){
        return this.#name
    }

    get category(){
        return this.#category
    }

    get weight(){
        return this.#weight
    }

    get price(){
        return this.#price
    }
}