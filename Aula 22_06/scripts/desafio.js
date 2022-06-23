"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pessoa {
    constructor(id, nome, fone, email, peso, altura) {
        this.id = id;
        this.nome = nome;
        this.fone = fone;
        this.email = email;
        this.peso = peso;
        this.altura = altura;
    }
    salvar() {
        console.log(`salvou`);
    }
    validar() {
        console.log(`dados validados`);
    }
    imprimeDados() {
        console.log(`id: ${this.id}`);
        console.log(`nome: ${this.nome}`);
        console.log(`fone: ${this.fone}`);
        console.log(`email: ${this.email}`);
        console.log(`peso: ${this.peso}`);
        console.log(`altura: ${this.altura}`);
    }
    imc() {
        let imc = parseFloat((this.peso / (this.altura * 2)).toFixed(2));
        if (imc < 18.5) {
            console.log(`seu imc é ${imc} você está abaixo do peso`);
        }
        else if (imc >= 18.5 && imc <= 35) {
            console.log(`seu imc é ${imc} está otimo`);
        }
        else if (imc > 35)
            console.log(`seu imc é ${imc} está acima do peso`);
    }
}
exports.default = Pessoa;
