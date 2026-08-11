const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

frm.addEventListener("submit", (e) => {
  const titulo = frm.inTitulo.value 
  const durucao = Number(frm.inDuracao.value)

  const horas = Math.floor(durucao / 60)
  const minutos = durucao % 60

  resp1.innerText = titulo
  resp2.innerText = `${horas} horas(s) e ${minutos} minuto(s)`

  e.preventDefault()
})