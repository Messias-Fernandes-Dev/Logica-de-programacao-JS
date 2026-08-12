// cria referência ao form e aos elementos h3 e h4
const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

// Cria um "ouvinte" de envento, acianado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
  const titulo = frm.inTitulo.value  // obtém os conteúdos dos campos 
  const durucao = Number(frm.inDuracao.value)

  const horas = Math.floor(durucao / 60) // arredonda para baixo os resultados
  const minutos = durucao % 60 // obtém o resto da divisão 

  resp1.innerText = titulo // exibe as respostas 
  resp2.innerText = `${horas} horas(s) e ${minutos} minuto(s)`

  e.preventDefault() // evita o envio do form = reload da pág 
})