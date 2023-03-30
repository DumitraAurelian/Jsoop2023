import { User } from "../modules/User.js";
// Modificam nume, email, varsa
let user = new User('1','ion','dan@dan.ro',22);
user.doarme(7);
user.mananca(200);
console.log(user);
user.nume = 'Dan';
user._varsta= -2;
// user.myAge= -23;
// user.#email= 'dan@dan.ro';
console.log(user);