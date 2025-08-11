const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

frm.addEventListenerI("Submit", (e) => {
    const titulo = frm.inTitulo.value
    const duraçao = Number (frm.inDuraçao.value)
})