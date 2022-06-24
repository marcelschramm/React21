"use strict";
class Employe {
    constructor(code, name, matricula) {
        this.empCode = 0;
        this.empName = '';
        this.empMatricula = '';
        this.empCode = code;
        this.empName = name;
        // this.empMatricula = matricula
        this.setMatricula(matricula);
    }
    setMatricula(matricula) {
        if (matricula.length < 5) {
            console.log('numero de matricula deve ter no minimo 5 digitos');
        }
        else {
            this.empMatricula = matricula;
        }
    }
}
let emp1;
emp1 = new Employe(10, 'José da Silva', '123');
/*emp1.empCode = 10
emp1.empName = 'José da Silva'
emp1.setMatricula('123')
*/
console.log(emp1);
