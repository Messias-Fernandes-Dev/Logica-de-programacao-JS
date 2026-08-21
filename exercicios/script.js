
const numeros = [10, 5, 8, 20, 3, 12];

let soma = 0

for(let i = 0; i < numeros.length; i++){
  if(numeros[i] % 2 === 0 ){
    soma += numeros[i]
  }
}

console.log(soma)













const numeros = [10, 15, 20, 25, 30, 35, 40];

let contador = 0;
let soma = 0;

for(let i = 0; i > numeros.length; i++){
  if(numeros[i] % 2 === 0 ){
    contador++;
    soma += numeros[i]
  }
}

console.log(`${contador} and ${soma}`)






const numeros = [12, 7, 25, 8, 30, 11, 4, 19];

contador = 0
soma = 0 

for(let i = 0; i = numeros.length; i++){
  if(numeros[i] > 10){
    contador++
    soma += numeros[i] 
  }
}

console.log(`Essa é a quantidade de números maiores que 10: ${contador}`)
console.log(`Essa é a soma desses núemros: ${soma}`)

for(let i = 0; i <= 10; i++){
  console.log(i)
}

for( let i = 0; i < numeros.length; i++){
  if(numeros[i] > 15){
    console.log(numeros[i])
  }
}

const numeros = [12, 5, 8, 21, 30, 17, 4, 10];

let contador = 0

for(let i = 0; i < numeros.length; i++){
  if(numeros[i] > 10 && numeros[i] % 2 === 0){
    contador++
  }
}

console.log(contador)





const numeros = [12, 7, 25, 8, 30, 19, 4];

let menor = 0

for(let i = 0; i < numeros.length; i++){
  if( numeros[i] < menor ){
    console.log(numeros[i])
  }
}



const numeros = [12, 7, 25, 8, 30, 19, 4];

let contador = 0
let soma = 0
let maior = 0
let menor = numeros[0]

for(let i = 0; i < numeros.length; i++){
  if(numeros[i] % 2 === 0 && numeros[i] < menor && numeros[i] > maior){
    contador++
    soma += numeros[i]
    menor = numeros[i]
    maior = numeros[i]
  }

console.log(`Quantidade de números pares: ${contador} e Soma dos números: ${soma}`)
console.log(`maior número par: ${maior}`)
console.log(`menor número par: ${menor}`)



















const numeros = [10, 7, 8, 15, 20, 3, 12, 5];

let contador = 0

let soma = 0


for (let i = 0; i < numeros.length; i++ ){
  if(numeros[i] % 2 === 0){
    contador++
    soma += numeros[i]
  }
}

const media = soma / contador

console.log (media)






const numeros = [12, 7, 25, 8, 30, 19, 4];


let maior = 0
let segMaior = 0

for(let i = 0; i < numeros.length; i++){
  if(numeros[i] > maior){
    maior = numeros[i]
    segMaior = numeros[i] - maior
  }

}









const numeros = [5, 8, 2, 10, 3]

let soma = 0

for(let i = 0; i < numeros.length; i++){
  soma += numeros[i]
}



const numeros = [5, 8, 2, 10, 3, 7, 12]


let contador = 0

for(let i = 0; i < numeros.length; i++){
  if(numeros[i] % 2 === 0){
    contador++
  }
}




const numeros = [10, 8, 6, 9, 7]

let soma = 0
contador = 0

for(let i = 0; i < numeros.length; i++){
  soma += numeros[i]
  contador++
}

const media = soma / contador







const numeros = [12, 7, 25, 8, 30, 19, 4]

let maior = 0 

for(let i = 0; i < numeros.length; i++){
  if(numeros[i] > maior){
    maior = numeros[i]
  }
}




const numeros = [12, 7, 25, 8, 30, 19, 4]

let menor = numeros[0]


for(let i = 0; i < numeros.length; i++){
  if(numeros[i] < menor){
    menor = numeros[i]
  }
}



const numeros = [5, 2, 8, 5, 3, 5, 9, 2]

let contador = 0

for(let i = 0; i < numeros.length; i++){
  if(numeros[i] === 5){
    contador++
  }
}



const numeros = [5, 12, 8, 3, 20, 7, 10]

let soma = 0

for(let i = 0; i < numeros.length; i++){
  if(numeros[i] % 2 === 0){
    soma += numeros[i]
  }
}











const numeros = [10, 5, 8, 20, 7, 15]

let soma = 0


for(let i = 0; i < numeros.length; i++){
    soma += numeros[i]
}

const media = soma / numeros.length
const numMedia = 0

for(let i = 0; i < numeros.length; i++){
  if(numeros[i] < media){
    numMedia++
  }
}







const numeros = [4, 7, 2, 7, 9, 4, 7, 3]

let contador = numero[0]

for(let i = 0; i < numeros.length; i++){
  if(numeros[i] = numeros[i]){
    contador++
  }
}




