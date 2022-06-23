"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Produtos {
    constructor(descricao, valorUnitario, qtdeEstoque, desconto, acrescimo) {
        this.descricao = descricao;
        this.valorUnitario = valorUnitario;
        this.qtdeEstoque = qtdeEstoque;
        this.desconto = desconto;
        this.acrescimo = acrescimo;
    }
    getEstoque() {
        console.log(`A quantidade de produtos é ${this.qtdeEstoque}`);
    }
    precoDesc() {
        var desconto = this.valorUnitario * (this.desconto / 100);
        desconto = this.valorUnitario - desconto;
        console.log(`o valor com desconto é ${desconto.toFixed(2)}`);
    }
    precoAcresc() {
        var acrescimo = this.valorUnitario * (this.acrescimo / 100);
        acrescimo = this.valorUnitario + acrescimo;
        console.log(`o valor com acrescimo é ${acrescimo.toFixed(2)}`);
    }
}
exports.default = Produtos;
// imprimeDados(): void {
//     console.log(`descricao: ${this.descricao}`)
//     console.log(`valorUnitario: ${this.valorUnitario}`)
//     console.log(`qtdeEstoque: ${this.qtdeEstoque}`)
//     console.log(`desconto: ${this.desconto}`)
//     console.log(`acrescimo: ${this.acrescimo}`)
// }
