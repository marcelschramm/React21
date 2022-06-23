class Produtos {
    descricao: string
    valorUnitario: number
    qtdeEstoque: number
    desconto: number
    acrescimo: number

    constructor(descricao: string, valorUnitario: number,
        qtdeEstoque: number, desconto: number, acrescimo: number) {
        this.descricao = descricao
        this.valorUnitario = valorUnitario
        this.qtdeEstoque = qtdeEstoque
        this.desconto = desconto
        this.acrescimo = acrescimo
    }

    getEstoque(): void {
        console.log(`A quantidade de produtos é ${this.qtdeEstoque}`)
    }

    precoDesc(): void{
        var desconto: number = this.valorUnitario * (this.desconto/100)
        desconto = this.valorUnitario - desconto
        console.log(`o valor com desconto é ${desconto.toFixed(2)}`)
    }
    precoAcresc(): void{
        var acrescimo: number = this.valorUnitario * (this.acrescimo/100)
        acrescimo = this.valorUnitario + acrescimo
        console.log(`o valor com acrescimo é ${acrescimo.toFixed(2)}`)
    }
}

export default Produtos

// imprimeDados(): void {
//     console.log(`descricao: ${this.descricao}`)
//     console.log(`valorUnitario: ${this.valorUnitario}`)
//     console.log(`qtdeEstoque: ${this.qtdeEstoque}`)
//     console.log(`desconto: ${this.desconto}`)
//     console.log(`acrescimo: ${this.acrescimo}`)

// }