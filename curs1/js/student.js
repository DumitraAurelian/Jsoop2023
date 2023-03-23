class Student{
    constructor(id, nume, varsta, nota1, nota2){
        this.id = id;
        this.nume = nume;
        this.varsta = varsta;
        this.nota1 = nota1;
        this.nota2 = nota2;
    }
    salut(){
        console.log(`Salut, numele meu este ${this.nume} si am ${this.varsta}`);
    }
    examen(){
        console.log(`Nota de la primul examen este ${this.nota1}`);
    }
    calMedia(){
        console.log (`Media notelor este (${this.nota1} + ${this.nota2})/2`)
    }
}

