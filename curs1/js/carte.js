class Carte {
    constructor(titlu, autor, editura, an_aparitie, pret, nr_pagini){
    this.titlu = titlu;
    this.autor = autor;
    this.editura = editura;
    this.an_aparitie = an_aparitie;
    this.pret = pret;
    this.nr_pagini = nr_pagini;
    }

   obtine_titlu(){
    console.log (`Titlul acestei carti este ${this.titlu}`);
   }
   obtine_autor(){
    console.log (`Autorul acestei carti este ${this.autor}`);
   }
   modifica_pret(pretNou){
    if(pretNou < 100 && pretNou > this.pret){
        this.pret=pretNou
    }

   }
   reducere(procent){
    // this.pret = this.pret - (procent/100*this.pret)
    this.pret-=(procent*this.pret)/100;
    console.log(`Pretul cu reducere este ${this.pret}`);

   }
   afiseaza_info(){
    console.log(`Cartea cu numele ${this.titlu} este scrisa de ${this.autor} in anul ${this.an_aparitie}, are un numar de ${this.nr_pagini} pagini si costa ${this.pret}`);

   }
   deschide_cartea(){

   }
}

