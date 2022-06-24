class Veiculo {
    placa: string = ''
    marca: string = ''
    modelo: string = ''

    constructor(placa: string, marca: string, modelo: string) {
        this.placa = placa
        this.marca = marca
        this.modelo = modelo

    
}
display():void{

    console.log(`placa: ${this.placa}`)
    console.log(`marca: ${this.marca}`)
    console.log(`modelo: ${this.modelo}`)
}

}

let carro = new Veiculo('abc-1234', 'honda', 'civic')
carro.display()

class Moto extends Veiculo{
    cilindradas:number=250
    display():void{
        super.display()
        console.log(`cilindradas: ${this.cilindradas}`)
    }
}
let moto = new Moto('def-3456', 'honda','crf-250')
moto.display()