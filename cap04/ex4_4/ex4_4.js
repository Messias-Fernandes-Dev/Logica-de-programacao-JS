const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
 
  const horaBrasil = Number(frm.inBrasil.value)

  let horaFrança = horaBrasil + 5

if(horaFrança > 24){
  horaFrança = horaFrança - 24
}
  
  resp.innerText = `Hora na França ${horaFrança.toFixed(2)}`
   e.preventDefault()
})