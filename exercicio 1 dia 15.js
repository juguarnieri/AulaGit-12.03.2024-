let a = 70;
let b = 64; 

let inicio;
let fim;

if(a < b) {
    inicio = a;
    fim = b;
} else{
     inicio = b;
     fim = a;
}

while (inicio <= fim){
    console.log(inicio);
    inicio++;
}

