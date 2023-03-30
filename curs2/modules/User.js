class User{
    _varsta;//protected
    #email; //private
    constructor(id,nume,email, varsta /* i, n, e, */){
        //setam proprietatile
        // this.id = i;
        // this.nume = n;
        // this.email = e;
        // this.varsta = v;
        this.id = id;
        this.nume = nume;
        this.email = email;
        this._varsta = varsta;
    }
    get email(){
        console.log(' Sunt in getter email');
        return this.#email;
    }
    set email(newEmail){
        console.log ('Sunt in setter email');
        if(newEmail=='dan@dan.ro'){
            this.#email = newEmail;
        }
        else{
            throw 'Error:invalid data';
        }
        
    }
    get varsta(){
        return this._varsta;/* cand trecem underscore in fata proprietatii o facem protected: _varsta*/
    }
    set varsta(varstaNoua){
        if(varstaNoua>0){
            this._varsta = varstaNoua;
        }
        else{
            // throw 'Error: invalid data';
            console.log("Error: invalid data varsta!");
        }
    }
    mananca (calorii){
        console.log(`Mananca ${calorii} pe zi.`);
    }
    doarme(ore){
        console.log(`Doarme ${ore} pe zi`);
    }
}
// class Demo{

// }
export {User/* ,Demo*/}