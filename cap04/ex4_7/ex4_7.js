const prompt = required("promt-sync")()

const pessoas = Number(prompt("Nº de pessoas: "))
const peixes = Number(prompt("Nº de peixes: "))

let pagar

if( peixes <= pessoas ){
  pagar = pessoas * 20
}else{
  pagar = (pessoas * 20) + ((peixes - pessoas) * 12)
}

console.log(`pagar R$: ${pagar.toFixed(2)}`) 