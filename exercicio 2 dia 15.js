let a = 1;
let b = 10;
let par;
let resultado = 0;

for (let i = a; i <= b; i++) {
    if (i % 2 == 0){
         if ( i != 0){
        console.log (i);
        resultado = i + resultado;
    }
   }
console.log(resultado)
}
