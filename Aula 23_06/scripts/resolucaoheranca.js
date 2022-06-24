"use strict";
class Animal {
    constructor() {
        this.raca = '';
        this.especie = '';
    }
}
let animal;
animal = new Animal();
animal.raca = 'Bulldog';
animal.especie = 'Canina';
class Mamifero extends Animal {
    constructor() {
        super(...arguments);
        this.numeroMamas = 0;
    }
}
let mamifero;
mamifero = new Mamifero();
mamifero.numeroMamas = 8;
mamifero.raca = 'bulldog';
mamifero.especie = 'canina';
class Cachorro extends Mamifero {
    constructor() {
        super(...arguments);
        this.cor = '';
    }
}
let cachorro = new Cachorro();
cachorro.cor = 'malhado';
cachorro.raca = 'dalmata';
cachorro.especie = 'canina';
cachorro.numeroMamas = 8;
