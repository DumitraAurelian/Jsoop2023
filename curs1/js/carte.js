class Carte {
    static reducere = 10;
    mypret;
    constructor(titlu, autor, editura, an,nr_pagini){
    this.titlu = titlu;
    this.autor = autor;
    this.editura = editura;
    this.an = an;
    this.nr_pagini = nr_pagini;
    }
    get pret(){
        console.log('Sunt in getter');
        return this.mypret;
    }
    set pret(pretNou){
        console.log('Sunt in setter');
        if (pretNou<= 0){
            throw 'Pretul nu poate fi actualizat';
        }
        else{
            this.mypret = pretNou;
        }
        
    }

//    obtine_titlu(){
//     console.log (`Titlul acestei carti este ${this.titlu}`);
//    }
//    obtine_autor(){
//     console.log (`Autorul acestei carti este ${this.autor}`);
//    }
//    modifica_pret(pretNou){
//     if(pretNou < 100 && pretNou > this.pret){
//         this.pret=pretNou
//     }

//    }
//    reducere(procent){
//     // this.pret = this.pret - (procent/100*this.pret)
//     this.pret-=(procent*this.pret)/100;
//     console.log(`Pretul cu reducere este ${this.pret}`);

//    }
   info(){
    console.log(`Cartea cu numele ${this.titlu} este scrisa de ${this.autor} in anul ${this.an_aparitie}, are un numar de ${this.nr_pagini} pagini si costa ${this.pret}`);

   }
   deschidCartea(){
    console.log ('Am deschis cartea la pagina 15');
   }
   randomIntFromInterval(min, max){
    return Math.floor(Math.random()* (max-min +1)+ min)
   }
   pretNou(){
    this.pret = this.pret -(Carte.reducere * this.pret)/100
   }
}

 