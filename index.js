*
const a = 1

function imprimeVariavel (){
const b = 2
console.log('Variavel a', a)
console.log('Variavel b', b)

}

imprimeVariavel()

console.log('Variavel a', a)
('Variavel b', b)
//////////////////////

function calculaArea(altura, largura){
    const area = altura * largura
    return area;

}

const areaCalculada = calculaArea(5, 8);

console.log("Variavel calculada:" + areaCalculada);
console.log("Chamada de funcao crua:" + calculaArea(5, 8));


//exerciico 3
 function numero(numero1, numero2){
    return numero1 + numero2

 }
 
 const somaDosnumeros = numero(2, 2);
 console.log(somaDosnumeros);


//exercio 4
function numeros(n){
 let b = [n[0], n[n.length-1]];
 b[0] = b[0]/2;
 b[1] = b[1]/2;

return b;
}

let a = [1,2,3,4,5,6];
 console.log(numeros(a));
*/

function numeros (a){
    let b = [a[0], a[a.length-1]];
    b[0] = b[0]/2;
    b[1] = b[1]/2;
     return b;


}

let c = [2,4,6,8];
console. log(numeros(c));


