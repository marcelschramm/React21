class Employe {
    empCode: number = 0
    empName: string = ''
    private empMatricula: string = ''
    constructor(code: number, name: string, matricula: string) {

        this.empCode = code
        this.empName = name
        // this.empMatricula = matricula
        this.setMatricula(matricula)
    }

    setMatricula(matricula: string): void {
        if (matricula.length < 5) {
            console.log('numero de matricula deve ter no minimo 5 digitos')
        }
        else {
            this.empMatricula = matricula
        }
    }
}

let emp1: Employe
emp1 = new Employe(10, 'José da Silva','123' )

/*emp1.empCode = 10
emp1.empName = 'José da Silva'
emp1.setMatricula('123')
*/
console.log(emp1)