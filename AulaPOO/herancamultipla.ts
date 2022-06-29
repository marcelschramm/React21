interface IAnimal {
    raca: string
    especie: string
    barulho(x: string): void
}

interface IMamifero{
    quantidadeMamas:number
    getQtdeLeite():number
}

class Bicho implements IAnimal, IMamifero {
    raca: string = 'piatã'
    especie: string = 'suina'     
    quantidadeMamas: number = 10

    getQtdeLeite(): number {
        return 10
    }
  
    barulho(x: string): void {
        console.log(`Barulho de ${x} `)
    }
display(){
    console.log(`raça: ${this.raca}`)
    console.log(`especie: ${this.especie}`)
    console.log(`nº de mamas: ${this.quantidadeMamas}`)
}
}

let bicho: Bicho
bicho = new Bicho()
bicho.barulho('pocotó pocotó')
bicho.display()