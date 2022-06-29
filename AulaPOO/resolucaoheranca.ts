class Animal {
    raca: string = ''
    especie: string = ''
}

let animal: Animal
animal = new Animal()
animal.raca = 'Bulldog'
animal.especie = 'Canina'

class Mamifero extends Animal {
    numeroMamas: number = 0
}

let mamifero: Mamifero
mamifero = new Mamifero()
mamifero.numeroMamas = 8
mamifero.raca = 'bulldog'
mamifero.especie = 'canina'

class Cachorro extends Mamifero{
    cor: string = ''
}

let cachorro = new Cachorro()
cachorro.cor = 'malhado'
cachorro.raca = 'dalmata'
cachorro.especie = 'canina'
cachorro.numeroMamas = 8

